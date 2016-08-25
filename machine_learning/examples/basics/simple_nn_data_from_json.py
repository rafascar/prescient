import numpy as np
import json

def nonlin(x,deriv=False):
    if(deriv==True):
        return x*(1-x)
    return 1/(1+np.exp(-x))

with open('adhoc_training_set.json') as data_file:
    parsed_data = json.load(data_file)

temperature = parsed_data['temperature'] 

print (temperature.keys())

X = np.array([temperature['indoor'],temperature['outdoor'],temperature['mean']]).T
Y = np.array([temperature['AC']]).T

print (X)
print (Y)

np.random.seed(1) 

syn0 = 2*np.random.random((3,1)) - 1
print(syn0)

for iter in range(10000):
    l0 = X
    l1 = nonlin(np.dot(l0,syn0))
    
    l1_error = Y - l1
    
    l1_delta = l1_error * nonlin(l1,True)
    
    syn0 += np.dot(l0.T, l1_delta)

print ('Output After %d Iterations:' %iter) 
print (l1_error)
print (l1)

print ("The learning stored in Synapse0 is:")
print (syn0)

test = np.dot([0,0,1], syn0)
print (nonlin(test))

test = np.dot([1,1,0], syn0)
print (nonlin(test))
