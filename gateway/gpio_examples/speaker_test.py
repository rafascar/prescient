import time 
import subprocess 

from wiringx86 import GPIOGalileoGen2 as GPIO

gpio = GPIO(debug=False)

pwm_pin = 11
value = 0
fade = 5

print ("Setting up Pins...")
gpio.pinMode(pwm_pin, gpio.OUTPUT)

try:
	while(True):

		for i in xrange(0,1000):
			gpio.digitalWrite(pwm_pin,gpio.HIGH)
			time.sleep(0.001)
			gpio.digitalWrite(pwm_pin,gpio.LOW)
			time.sleep(0.001)
		
		time.sleep(2)
		
		
except KeyboardInterrupt:
	print("Cleaning up...")
	gpio.digitalWrite(pwm_pin, gpio.LOW)
	gpio.cleanup()
