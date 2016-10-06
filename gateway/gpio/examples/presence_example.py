import time
import subprocess

from wiringx86 import GPIOGalileoGen2 as GPIO

gpio = GPIO(debug=False)
presence_sensor = 4

gpio.pinMode(presence_sensor, gpio.INPUT)

print ("Reading Now") 
try:
    while(True):
        time.sleep(1)
        state = gpio.digitalRead(presence_sensor)
        print (state)

except KeyboardInterrupt:
    print ("\n\nCleaning Up...")
    gpio.cleanup()
