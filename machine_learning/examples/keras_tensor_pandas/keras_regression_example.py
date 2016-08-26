import pandas
import numpy as np
from keras.models import Sequential
from keras.layers import Dense
from keras.wrappers.scikit_learn import KerasRegressor
from sklearn.cross_validation import cross_val_score
from sklearn.cross_validation import KFold
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline

dataframe = pandas.read_csv("housing.data", delim_whitespace=True, header=None)
dataset = dataframe.values

X = dataset[:,0:13]
y = dataset[:,13]


def baseline_model():
    model = Sequential()
    model.add(Dense(13, input_dim=13, init='normal', activation='relu'))
    model.add(Dense(1, init='normal'))

    model.compile(loss='mean_squared_error', optimizer='adam')
    return model

np.random.seed(7)

estimator = KerasRegressor(build_fn=baseline_model, nb_epoch=100, batch_size=5, verbose=0)

kfold = KFold(n=len(X), n_folds=10, random_state=7)
results = cross_val_score(estimator,X,y, cv=kfold)
print ("\n\nResults: %.2f (%.2f) MSE\n\n\n\n\n" % (results.mean(), results.std()))

estimators = []
estimators.append(('standardaize', StandardScaler()))
estimators.append(('mlp', KerasRegressor(build_fn=baseline_model, nb_epoch=50, batch_size=5, verbose=0)))
pipeline = Pipeline(estimators)

kfold = KFold(n=len(X), n_folds=10, random_state=7)
results = cross_val_score(pipeline,X,y, cv=kfold)
print ("\n\nResults: %.2f (%.2f) MSE\n\n\n\n\n" % (results.mean(), results.std()))

