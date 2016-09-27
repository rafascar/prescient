#!/usr/bin/python3

import os
import time
import threading
#from wiringx86 import GPIOGalileoGen2 as GPIO

#gpio = GPIO(debug=False)

def check_internet():
    threading.Timer(3, check_internet).start()
    response = os.system("ping -c 1 google.com -q > /dev/null 2>&1") # ping 0 = success
    if response == 0:
        print ("Connected")
    else: 
        print("Fuck")
