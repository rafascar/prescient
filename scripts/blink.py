import time
import subprocess

from wiringx86 import GPIOGalileoGen2 as GPIO

gpio = GPIO(debug=False)
pin = 13
state = gpio.HIGH

gpio.pinMode(pin, gpio.OUTPUT)

print 'Checking local subnet for phone MAC...'

try:

	teste = int(subprocess.check_output("./search4mac.sh 2c:8a:72:b1:f8:55", shell=True))
	print (teste)
	print ("the int value is: %d" %(teste))
	if (teste == 1):
		print("Phone Found")
	else:
		print("Phone Not Found")

	while(teste == 1):
		print("Blinking LED now...")
		gpio.digitalWrite(pin, state)

		state = gpio.LOW if state == gpio.HIGH else gpio.HIGH

		time.sleep(0.5)

except KeyboardInterrupt:
	print '\nCleaning up...'
	gpio.digitalWrite(pin, gpio.LOW)
	
	gpio.cleanup() 
