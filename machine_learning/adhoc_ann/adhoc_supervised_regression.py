import numpy as np
import matplotlib.pyplot as plt
from scipy import optimize

class Neural_Net(object):
    def __init__(self, inputLayerSize, outputLayerSize, hiddenLayerSize):
        self.inputLayerSize = inputLayerSize
        self.outputLayerSize = outputLayerSize
        self.hiddenLayerSize = hiddenLayerSize
    
        self.W1 = np.random.rand(self.inputLayerSize, self.hiddenLayerSize)
        self.W2 = np.random.rand(self.hiddenLayerSize, self.outputLayerSize)

    def sigmoid(self, z):
        return (1/(1+np.exp(-z)))

    def sigmoidPrime(self, z):
        return (np.exp(-z)/((1+np.exp(-z))**2))

    def forward(self, X):
        self.z2 = np.dot(X, self.W1)
        self.a2 = self.sigmoid(self.z2)
        self.z3 = np.dot(self.a2, self.W2)
        yHat = self.sigmoid(self.z3)
        return yHat

    def costFunction(self, X, y):
        self.yHat = self.forward(X)
        J = 0.5*sum((y-self.yHat)**2)
        return J
    
    def costFunctionPrime(self, X, y):
        self.yHat = self.forward(X)
    
        delta3 = np.multiply(-(y-self.yHat), self.sigmoidPrime(self.z3))
        dJdW2 = np.dot(self.a2.T, delta3)
    
        delta2 = np.dot(delta3, self.W2.T)*self.sigmoidPrime(self.z2)
        dJdW1 = np.dot(X.T, delta2)
    
        return dJdW1, dJdW2

    def getParams(self):
        params = np.concatenate((self.W1.ravel(), self.W2.ravel()))
        return params

    def setParams(self, params):
        W1_start = 0
        W1_end = self.hiddenLayerSize * self.inputLayerSize
        self.W1 = np.reshape(params[W1_start:W1_end], (self.inputLayerSize, self.hiddenLayerSize))

        W2_end = W1_end + self.hiddenLayerSize*self.outputLayerSize
        self.W2 = np.reshape(params[W1_end:W2_end], (self.hiddenLayerSize, self.outputLayerSize))

    def computeGradients(self,X,y):
        dJdW1, dJdW2 = self.costFunctionPrime(X,y)
        return np.concatenate((dJdW1.ravel(), dJdW2.ravel()))

def computeNumericalGradients(N, X, y):
    paramsInitial = N.getParams()
    numgrad = np.zeros(paramsInitial.shape)
    perturb = np.zeros(paramsInitial.shape)
    e = 1e-4

    for p in range(len(paramsInitial)):
        perturb[p] = e
        N.setParams(paramsInitial + perturb)
        loss2 = N.costFunction(X, y)

        N.setParams(paramsInitial - perturb)
        loss1 = N.costFunction(X, y)

        numgrad[p] = (loss2 - loss1) /(2*e)

        perturb[p] = 0

    N.setParams(paramsInitial)

    return numgrad

class Trainer(object):
    def __init__(self, N):
        self.N = N

    def callbackF(self, params):
        self.N.setParams(params)
        self.J.append(self.N.costFunction(self.X, self.y))

    def costFunctionWrapper(self, params, X, y):
        self.N.setParams(params)
        cost = self.N.costFunction(X,y)
        grad = self.N.computeGradients(X,y)

        return cost, grad

    def train(self, X, y):
        self.X = X
        self.y = y
        self.J = []
        params0 = self.N.getParams()
        
        options = {'maxiter': 200, 'disp': True}
        _res = optimize.minimize(self.costFunctionWrapper, params0, jac=True, method='BFGS', \
                args=(X,y), options=options, callback=self.callbackF)

        self.N.setParams(_res.x)
        self.optimizationResults = _res

def main():
    # Initialize our input and output arrays
    X = np.array(([3,5], [5,1], [10,2]), dtype=float)
    y = np.array(([75], [82], [93]), dtype=float)

    # Since data is in diferent units we need to normalize both to keep them in between 
    # 0 and 1
    X = X/np.amax(X, axis=0)
    y = y/100 # Maximal Grade possible is 100

    #np.random.seed(0) # seed random number in order to get the same random every time

    print(X)
    
    # Create a neural net with 2 inputs, 1 output and 3 neurons in the hidden layer
    NN = Neural_Net(2,1,3)
    # FeedForward the prediction based on the untrained network.
    yHat = NN.forward(X)
    print ("The estimated grades for these inputs are:")
    print (yHat)
    print ("This Prediction has the following error:")
    print (y - yHat)

# ============= GRADIENT DESCENT ================
    #calculate the cost function based on the error of the forward propagation
    cost1 = NN.costFunction(X,y)
    # calculate the slope for the Weights in order to chose which side to go
    dJdW1, dJdW2 = NN.costFunctionPrime(X,y)

    # verify that if we add a scalar times the slope of the weights our cost will increase, while
    # if we do the opposite our cost decreases. This is the core of the gradient descent
    print(dJdW1)
    print(dJdW2)
    scalar = 3
    NN.W1 = NN.W1 + scalar*dJdW1
    NN.W2 = NN.W2 + scalar*dJdW2
    cost2 = NN.costFunction(X,y)
    print (cost1, cost2)

    dJdW1, dJdW2 = NN.costFunctionPrime(X,y)
    NN.W1 = NN.W1 - scalar*dJdW1
    NN.W2 = NN.W2 - scalar*dJdW2
    cost3 = NN.costFunction(X,y)
    print (cost1, cost2, cost3)

# ============= NUMERICAL GRADIENT CHECKING ===================

    numgrad = computeNumericalGradients(NN, X, y)
    print(numgrad)
    grad = NN.computeGradients(X,y)
    print(grad)
    #print(norm(grad-numgrad)/norm(grad+numgrad))

# ============ TRAINING A NEURAL NETWORK ============
    
    T = Trainer(NN)
    T.train(X,y)

    plt.plot(T.J)
    plt.grid(1)
    plt.xlabel('iterations')
    plt.ylabel('Cost')
    plt.show()

    print (NN.costFunctionPrime(X,y))
    print (NN.forward(X))
    print (y)
    
if __name__ == '__main__':
    main()

