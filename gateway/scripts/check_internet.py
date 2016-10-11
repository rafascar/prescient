#!/usr/bin/python3

import sys
sys.path.append("../gpio")

import os
import subprocess
import time
import threading
from wiringx86 import GPIOGalileoGen2 as GPIO

#gpio = GPIO(debug=False)
#internet_pin = 1
#gpio.pinMode(internet_pin, gpio.OUTPUT)


def check_internet(period, lock):
    while True:
        
        #response = subprocess.call("ping -c 1 google.com -q > /dev/null 2>&1", shell=True)

        p = subprocess.Popen("ping -c 1 google.com".split(),stdout=subprocess.PIPE,stderr=subprocess.STDOUT)
        out,err = p.communicate()
        response = p.wait()        
        #print (response)

        if response == 0:
            print ("CONNECTIVITY: \tConnected to internet")
            #gpio.digitalWrite(internet_pin, gpio.HIGH)
    
        else: 
            print("CONNECTIVITY: \tUnable to connect to internet")
            #gpio.digitalWrite(internet_pin, gpio.LOW)

        time.sleep(period)

if __name__ == "__main__":
    period = 1
    lock = threading.Lock()
    t = threading.Thread(target=check_internet, args=(period, lock))
    t.start()
    t.join()
