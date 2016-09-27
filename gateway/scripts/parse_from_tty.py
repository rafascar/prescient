#!/usr/bin/python3

import serial
import time
from wiringx86 import GPIOGalileoGen2 as GPIO

gpio = GPIO(debug=False)

def get_serial():

    port = serial.Serial("/dev/ttyUSB0", baudrate=115200, timeout=3.0)
    print(port.readline().decode("utf-8"))
    A0 = False
    A1 = False
    B0 = False
    B1 = False


    got_all = False
    start_time = time.time()
    while got_all == False:
        line = port.readline().decode("utf-8")
        print(line)
        if line.startswith(":A0"):
            A0_val = line
            A0 = True
        if line.startswith(":A1"):
            A1_val = line
            A1 = True
        if line.startswith(":B0"):
            B0_val = line
            B0 = True
        if line.startswith(":B1"):
            B1_val = line
            B1 = True
# Implement timeout function if not received after the sampling period
# probably will be necessary to parse the results ( considering linear we make take the medium from the previous examples
        if A0 and A1 and B0 and B1:
            A0 = False
            A1 = False
            B0 = False
            B1 = False
            print (A0_val[-12:-4], B0_val[-12:-4], A1_val[-12:-4], B1_val[-12:-4], "%s seconds" %(time.time()-start_time))
            
    
    


if __name__ == "__main__":
    get_serial()
