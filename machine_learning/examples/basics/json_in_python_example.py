import numpy as np
import matplotlib.pyplot as plt
import json

#parsed_data = json.loads(open('training_set.json').read())

with open('simple_train_set.json') as file_data: 
    parsed_data = json.load(file_data)

temperature = parsed_data['temperature']
# temperature = parsed_data['temperature']

print (temperature.keys())
print (temperature['indoor']) 

X = np.array([temperature['indoor'], temperature['outdoor']])
Y = np.array([temperature['AC']])

print (X.T)
print (Y.T)
print (X.tolist())

#plt.plot(X[0].tolist(), 'ro')
plt.plot(temperature['indoor'],'go', temperature['outdoor'], 'b-.')#, (temperature['AC']))
plt.ylabel('some numbers')
plt.show()


##temperature['indoor'].append(6)
#print (temperature['indoor'])
#
##parsed_data['temperature']['indoor'].append(7)
#print (parsed_data['temperature']['indoor'])
#
##opens file and prettyprint json
#with open('training_set.json', 'w+') as file_data: 
#    json.dump(parsed_data, file_data, indent=4, sort_keys=True)
