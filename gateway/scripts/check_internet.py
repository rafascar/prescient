#!/usr/bin/python3

import os
import time
import threading
from wiringx86 import GPIOGalileoGen2 as GPIO

gpio = GPIO(debug=False)

internet_pin = 1
gpio.pinMode(internet_pin, gpio.OUTPUT)


def check_internet():
    response = os.system("ping -c 1 google.com -q > /dev/null 2>&1") # ping 0 = success
    if response == 0:
        print ("Connected")
        gpio.digitalWrite(internet_pin, gpio.HIGH)
        threading.Timer(3, check_internet).start()

    else: 
        print("Fuck")
        gpio.digitalWrite(internet_pin, gpio.LOW)
        threading.Timer(3, check_internet).start()
