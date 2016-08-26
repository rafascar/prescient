import matplotlib.pyplot as plt
import numpy as np
from scipy import optimize
import sys

class DataSet(object):
    """
    Recieves a csv file as parameter where first input_col'th columns are inputs and the rest are outputs.
    If debug is set to True Prints allong the way.
    Keeps the inputs of the class in X and the outputs in y.
    """

    # Class initializer
    def __init__(self, file, input_col, output_col, debug=False):
        self.input_col = input_col 
        self.output_col = output_col
        data = np.loadtxt(file, delimiter=',')
        self.X = data[:, 0:input_col]
        self.y = data[:, input_col:(input_col+output_col)]
        self.debug = debug


        if self.debug==True:
            print ("The shape of the input is:",self.X.shape)
            print ("The shape of the output is:", self.y.shape)
            print ("This is the input\n", self.X)
            print ("This is the output\n", self.y)

    def normalize_data(self):
        self.norm_X = np.array(self.X)
        self.norm_y = np.array(self.y)
        # Normalize the input
        self.min_value_X = self.norm_X.min(axis=0)
        self.norm_X -= self.min_value_X
        self.max_value_X = self.norm_X.max(axis=0)
        self.norm_X /= self.max_value_X

        # Normalize the output
        self.min_value_y = self.norm_y.min(axis=0)
        self.norm_y -= self.min_value_y
        self.max_value_y = self.norm_y.max(axis=0)
        self.norm_y /= self.max_value_y
        if self.debug==True:
            print (self.norm_X, self.norm_y)

    def convert_to_unit(self, normalized_data):
        normalized_data *= self.max_value_y
        normalized_data += self.min_value_y
        return normalized_data



    # FIXME: This is only used for classification problems where it can have up to 4 classifications
    # try and generalize the visualization of the dataset
    def visualize(self, scaled=False):
        #plt.plot(self.X[:,0], 'bo')
        #plt.plot(self.X[:,1], 'ro')
        #plt.show()
        for i in range(len(self.X)):
            for j in range(self.output_col):
                if (self.y[i,j]==1):
                    if (j == 0):
                        plt.plot(self.X[i,0], self.X[i,1], 'ro')
                    if (j == 1):
                        plt.plot(self.X[i,0], self.X[i,1], 'bo')
                    if (j == 2):
                        plt.plot(self.X[i,0], self.X[i,1], 'go')
                    if (j == 3):
                        plt.plot(self.X[i,0], self.X[i,1], 'yo')
        plt.show()

class NeuralNet(object):
    def __init__(self, data, in_layer_size, out_layer_size, hidden_layer_size, activation='sigmoid', \
            method='BACKPROP', debug='False'):

        self.X = data.norm_X
        self.X = np.c_[self.X, np.ones(len(self.X))]
        print(self.X)
        self.y = data.norm_y
        self.in_layer_size = in_layer_size + 1
        self.out_layer_size = out_layer_size
        self.hidden_layer_size = hidden_layer_size
        self.debug = debug

        if self.debug:
            print ("The topology of the current network is: %d Input Neurons, %d Hidden Neurons, %d Output Neurons" %(self.in_layer_size, self.hidden_layer_size, self.out_layer_size))

        # TODO: Weight Initialization in order to make backpropagation more efficient
        self.W1 = np.random.rand(self.in_layer_size, self.hidden_layer_size)
        self.W2 = np.random.rand(self.hidden_layer_size, self.out_layer_size)

        if self.debug:
            print ("Therefore was created a weight matrix of size %s between input and hidden layers\
                    \nand another weight matrix of size %s between hidden and output" \
                    %(self.W1.shape, self.W2.shape))

    def sigmoid(self, z):
        return (1/(1+np.exp(-z)))

    def sigmoid_deriv(self,z):
        return (np.exp(-z)/((1+np.exp(-z))**2))

    def feed_forward(self, X):
        self.z2 = np.dot(X, self.W1)
        self.a2 = self.sigmoid(self.z2)
        self.z3 = np.dot(self.a2, self.W2)
        estimate = self.sigmoid(self.z3)
        return estimate

    def cost_fcn(self):
        self.estimate = self.feed_forward(self.X)
        J = 0.5*sum((self.y-self.estimate)**2)
        return J

    def cost_fcn_deriv(self):
        self.estimate = self.feed_forward(self.X)

        delta_3 = np.multiply(-(self.y-self.estimate), self.sigmoid_deriv(self.z3))
        dJdW2 = np.dot(self.a2.T, delta_3)

        delta_2 = np.dot(delta_3, self.W2.T)*self.sigmoid_deriv(self.z2)
        dJdW1 = np.dot(self.X.T ,delta_2)

        return dJdW1, dJdW2

    def train_net_grad_descent(self):
        j = 0
        for i in range (1000000):
            learning_rate = 0.001
            dJdW1, dJdW2 = self.cost_fcn_deriv()
            self.W1 = self.W1 - learning_rate*dJdW1
            self.W2 = self.W2 - learning_rate*dJdW2
            if self.debug:
                if i % 10000 == 0:
                    if j==0:
                        print (self.cost_fcn())
                        j = self.cost_fcn()
                    else:
                        if self.cost_fcn() < j:
                            sign = "[-]"
                        else:
                            sign = "[+] <<<<<<<<<<<<<<<<<<<< FUCK"

                        print (self.cost_fcn(),sign)
                        j = self.cost_fcn()

    def test_net(self, X):
        return self.feed_forward(X)


def main():
    np.random.seed(0)
    training_data = DataSet('continuous_light_dataset_alt.csv', 2, 1, debug=True)
    training_data.normalize_data()

    nn = NeuralNet(training_data, training_data.input_col, training_data.output_col, 20, debug='True')
    # estimate network output without trained weights
    print (nn.feed_forward(nn.X))

# ========== ADHOC BACKPROP W/ GRADIENT DESCENT ==========
    cost1 = nn.cost_fcn()
    print (cost1)

    dJdW1, dJdW2 = nn.cost_fcn_deriv()
    print (dJdW1)
    print (dJdW2)

    nn.W1 = nn.W1 + dJdW1
    nn.W2 = nn.W2 + dJdW2
    cost2 = nn.cost_fcn()

    dJdW1, dJdW2 = nn.cost_fcn_deriv()
    nn.W1 = nn.W1 - dJdW1
    nn.W2 = nn.W2 - dJdW2
    cost3 = nn.cost_fcn()

    print (cost1, cost2, cost3)
    nn.train_net_grad_descent()
    # TODO: Since I added the bias input node I still did not reimplemented the dataset.
    print ("\n\n\nLet's see how our network performed:\n")
    test_data = DataSet('continuous_light_dataset_alt.csv', 2, 1)
    test_data.normalize_data()
    estimate = nn.test_net(test_data.norm_X)
    estimate = test_data.convert_to_unit(estimate)
    print (training_data.y - estimate)
    
    # print("\n\n\n\n\n")
    # print(nn.X, nn.y)


if __name__ == '__main__':
    main()
