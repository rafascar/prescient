import matplotlib.pyplot as plt
import numpy as np
import sys

class DataSet(object):

    def __init__(self, file, input_col, output_col, debug=False):
        self.input_col = input_col
        self.output_col = output_col
        self.data = np.loadtxt(file, delimiter=',')
        self.X = self.data[:, :input_col]
        self.y = self.data[:, input_col:]
        self.scaled_X = self.X
        self.debug = debug

        if self.debug==True:
            print (self.X.shape)
            print (self.y.shape)
            print (self.X)
            print (self.y)

    def scale_data(self):
        self.scaled_X -= self.scaled_X.min()
        self.scaled_X /= self.scaled_X.max()
        if self.debug==True:
            print (self.scaled_X)

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

def main():
    training_data = DataSet('dataset.csv', 2, 4, debug=True)
    #training_data.visualize()
    training_data.scale_data()

if __name__ == '__main__':
    main()
