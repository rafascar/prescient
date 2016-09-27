#!/usr/bin/python3

import serial
import time
from wiringx86 import GPIOGalileoGen2 as GPIO

gpio = GPIO(debug=False)

def get_serial():
    # Depending on wheter it is being read from USB0 or ACM0 the length of the message may vary.
    # In the tests run with both ACM0 reads end with \r\r\n while USB0 reads only \r\n
    port = serial.Serial("/dev/ttyUSB0", baudrate=115200, timeout=3.0)
    print(port.readline().decode("utf-8"))
    A0 = False
    A1 = False
    B00 = False
    B01 = False
    B10 = False
    B11 = False


    got_all = False
    start_time = time.time()
    while got_all == False:
        line = port.readline().decode("utf-8")
        #print(line)
        if line.startswith(":A0"):
            A0_val = line
            A0 = True
        if line.startswith(":A1"):
            A1_val = line
            A1 = True
        if line.startswith(":B0"):
            if line[-13] == '0':
                B00_val = line
                B00 = True
            if line[-13] == '1':
                B01_val = line
                B01 = True
        if line.startswith(":B1"):
            if line[-13] == '0':
                B10_val = line
                B10 = True
            if line[-13] == '1':
                B11_val = line
                B11 = True
        print ("A0: ", A0, "A1: ", A1, "B00:", B00, "B01:", B01, "B10:", B10, "B11:", B11)

# Implement timeout function if not received after the sampling period
# probably will be necessary to parse the results ( considering linear we make take the medium from the previous examples
        if A0 and A1 and B00 and B01 and B10 and B11:
            A0 = False
            A1 = False
            B00 = False
            B01 = False
            B10 = False
            B11 = False
            print (A0_val[-12:-4], B00_val[-12:-4], B01_val[-12:-4], A1_val[-12:-4], B10_val[-12:-4], B11_val[-12:-4], "%s seconds" %(time.time()-start_time))
            
    
    


if __name__ == "__main__":
    get_serial()
