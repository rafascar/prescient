import sys 
sys.path.append("../scripts")
from wiringx86 import GPIOGalileoGen2 as GPIO
import time

gpio = GPIO(debug=False)

user_pin = 0
internet_pin = 1
mote_pin = 2
alarm_pin = 3
presence_pin = 4
speaker_pin = 13
lm35_pin = 14
photo_pin = 16

print("Setting up all pins")

gpio.pinMode(user_pin, gpio.OUTPUT)
gpio.pinMode(internet_pin, gpio.OUTPUT)
gpio.pinMode(mote_pin, gpio.OUTPUT)
gpio.pinMode(alarm_pin, gpio.OUTPUT)
gpio.pinMode(speaker_pin, gpio.OUTPUT)
gpio.pinMode(presence_pin, gpio.INPUT)
gpio.pinMode(lm35_pin, gpio.ANALOG_INPUT)
gpio.pinMode(photo_pin, gpio.ANALOG_INPUT)

while(True):
    print("Turning User Pin On")
    gpio.digitalWrite(user_pin, gpio.HIGH)
    time.sleep(0.2)
    print("Turning Internet Pin On")
    gpio.digitalWrite(internet_pin, gpio.HIGH)
    time.sleep(0.2)
    print("Turning Mote Pin On")
    gpio.digitalWrite(mote_pin, gpio.HIGH)
    time.sleep(0.2)
    print("Turning Alarm Pin On")
    gpio.digitalWrite(alarm_pin, gpio.HIGH)
    time.sleep(0.2)
    print("Turning User Pin Off")
    gpio.digitalWrite(user_pin, gpio.LOW)
    time.sleep(0.2)
    print("Turning Internet Pin Off")
    gpio.digitalWrite(internet_pin, gpio.LOW)
    time.sleep(0.2)
    print("Turning Mote Pin Off")
    gpio.digitalWrite(mote_pin, gpio.LOW)
    time.sleep(0.2)
    print("Turning Alarm Pin Off")
    gpio.digitalWrite(alarm_pin, gpio.LOW)
    time.sleep(0.2)
    
    print("Playing a little tune")
    for i in xrange(1000):
        gpio.digitalWrite(speaker_pin,gpio.HIGH)
        time.sleep(0.001)
        gpio.digitalWrite(speaker_pin,gpio.LOW)
        time.sleep(0.001)

    print("There is a User in the room: ", bool(gpio.digitalRead(presence_pin)))
    print("The Current Temperature is: ",(gpio.analogRead(lm35_pin)/1024.0)*500)
    print("The Current Luminosity is: ",100 - (gpio.analogRead(photo_pin)*100/1024.0))
