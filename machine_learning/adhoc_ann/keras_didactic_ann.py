import pandas
import numpy as np
from keras.models import Sequential
from keras.layers import Dense
from keras.optimizers import SGD
np.random.seed(0)

dataframe = pandas.read_csv("./datasets/continuous_light_dataset_alt.csv", header=None)
dataset = dataframe.values

X = dataset[:,0:2]
print (X.shape)

y = dataset[:,2:]
y.reshape((55,1))
print (y.shape)

model = Sequential()
model.add(Dense(8,input_dim=2, init='uniform', activation='relu'))
model.add(Dense(7, init='uniform', activation='relu'))
model.add(Dense(1, init='normal'))

sgd = SGD(lr=0.001, decay=0, momentum=0.0, nesterov=False)
model.compile(loss='mean_squared_error', optimizer='adam', metrics=['accuracy'])

model.fit(X,y,nb_epoch=15000, batch_size=5, verbose=1, validation_data=(X,y))

scores = model.evaluate(X,y)
print(scores)
print("\n\n%s: %.10f%%" % (model.metrics_names[1], scores[1]*100))
print (model.metrics_names)

result = model.predict(X)
print (result.shape)

print (y - model.predict(X))
