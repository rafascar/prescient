import time
import subprocess

from wiringx86 import GPIOGalileoGen2 as GPIO

gpio = GPIO(debug=False)
pin = 13
presence_sensor = 8

print ("setting up Pins %d and %d ..." %(pin, presence_sensor))

gpio.pinMode(pin, gpio.OUTPUT)

gpio.pinMode(presence_sensor, gpio.INPUT)

print ("Reading Now") 
try:
    while(True):
        time.sleep(1)
        state = gpio.digitalRead(presence_sensor)
        print (state)

        if state == 1:
            gpio.digitalWrite(pin, gpio.HIGH)
        else:
            gpio.digitalWrite(pin, gpio.LOW)


except KeyboardInterrupt:
    print ("\n\nCleaning Up...")
    gpio.digitalWrite(pin, gpio.LOW)
    

    gpio.cleanup()
