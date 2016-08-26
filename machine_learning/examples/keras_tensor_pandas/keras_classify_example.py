# Tutorial From: http://machinelearningmastery.com/tutorial-first-neural-network-python-keras/
import time
start_time = time.time()
from keras.models import Sequential
from keras.layers import Dense
import numpy as np

np.random.seed(0)

dataset = np.loadtxt("pima-indians-diabetes.data", delimiter=",")

X = dataset[:,0:8]
y = dataset[:,8]
print (y.shape)
print (y)

model = Sequential()

model.add(Dense(12, input_dim=8, init='uniform', activation='relu'))
model.add(Dense(8, init='uniform', activation='relu'))
model.add(Dense(1, init='uniform', activation='sigmoid'))

print ("Building this network lasted for %s Seconds" %((time.time() - start_time)))

start_time = time.time()
model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])
print ("Compiling this network lasted for %s Seconds" %((time.time() - start_time)))

# Training the model
start_time = time.time()
model.fit(X, y, nb_epoch=1500, batch_size=10)
print ("Training this network lasted for %s Seconds" %((time.time() - start_time)))
# Model Evaluation
scores = model.evaluate(X, y)
print("\n\n%s: %.6f%%" % (model.metrics_names[1], scores[1]*100))
