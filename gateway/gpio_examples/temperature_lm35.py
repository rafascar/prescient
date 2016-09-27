import time
import subprocess

from wiringx86 import GPIOGalileoGen2 as GPIO

gpio = GPIO(debug=False)

lm35_pin = 16
photo_pin = 14


summ = 0
sample = 0

print ("Setting Up all pins...")

gpio.pinMode(lm35_pin, gpio.ANALOG_INPUT)
gpio.pinMode(photo_pin, gpio.ANALOG_INPUT)

print ("Analog reading from pin A0")

try:
	while(True):
		raw_value_lm35 = gpio.analogRead(lm35_pin)
		raw_value_photo = gpio.analogRead(photo_pin)
		milivolt = (raw_value_lm35/1024.0)*5000
		celcius = milivolt/10
		percent = 100 - (raw_value_photo/1024.0 * 100)
	# 	summ += celcius
	# 	sample += 1
	# 	avg = summ/sample
		print(celcius, percent)
		time.sleep(0.5)

except KeyboardInterrupt:
	print("\nCleaning Up...")
	gpio.cleanup()
