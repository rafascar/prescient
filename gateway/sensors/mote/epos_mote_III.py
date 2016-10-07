import sys
sys.path.append("../../gpio")
import serial
import math
import time
import os.path
import argparse
import threading
from wiringx86 import GPIOGalileoGen2 as GPIO

gpio = GPIO(debug=False)
mote_pin = 2
gpio.pinMode(mote_pin, gpio.OUTPUT)

class MoteData(object):
      
    def convert_power(raw):
        pw = -1
        if (raw < 120):
            pw = 0
        else:
            pw = 220 * math.sqrt(raw) * 0.004343
        return (round(pw * 100) / 100)
        

class EposMoteIII(object):
    """
    """
    def __init__(self, dev='/dev/ttyACM0', debugger=False):
        self.debugger = debugger
        print ("Waiting for", dev, "to appear")
        while not os.path.exists(dev) or not os.access(dev, os.W_OK):
            pass
        print (dev, "Found, Trying to open it now...")
        self.mote  = serial.Serial(dev, baudrate=115200, timeout=5.0)
        self.mote.close()
        self.mote.open()
        if dev == '/dev/ttyACM0':
            self.coil_byte = -14
            self.first_byte_msg = -13
            self.last_byte_msg = -5
        if dev == '/dev/ttyUSB0':
            self.coil_byte = -13
            self.first_byte_msg = -12
            self.last_byte_msg = -4

        self.A0_pw = 0
        #self.A1_pw = 0
        self.B00_pw = 0
        self.B01_pw = 0
        self.B10_pw = 0
        self.B11_pw = 0

        self.last_write = 0
        self.INTER_WRITE_TIME = 0.35 # seconds
        print ("GATEWAY: \tSuccessfully opened connection with EPOSMoteIII!")

    def write(self, msg):
        ret = 0
        while (time.time() - self.last_write) <= self.INTER_WRITE_TIME:
            pass
        while ret != len(msg):
            ret = self.mote.write(msg)
            self.mote.flush()
        self.last_write = time.time()

    def on(self, modbus_id, coil = 0):
        print("On", modbus_id, coil)
        if coil == 1:
            self.write(b':' + modbus_id + b'0500010001\r\n')
        else:
            self.write(b':' + modbus_id + b'0500000001\r\n')
    
    def off(self, modbus_id, coil = 0):
        print("Off", modbus_id, coil)
        if coil == 1:
            self.write(b':' + modbus_id + b'0500010000\r\n')
        else:
            self.write(b':' + modbus_id + b'0500000000\r\n')
    
    def dimmer(self, modbus_id, percent):
        print("Dimmer", modbus_id,percent)
        self.write(b':' + modbus_id + b'06000100' + percent + b'\r\n')
    
    def reset(self, modbus_id):
        print("Reset", modbus_id)
        self.write(b':' + modbus_id + b'0500090001\r\n')
    
    def debug(self, on):
        if on:
            self.write(b'DEBUG\r\n')
        else:
            self.write(b'/DEBUG\r\n')

    def dance(self):
        def do(order, func, delay):
            for i in order:
                func(i)
                time.sleep(delay)
    
        def do_arg(order, func, arg, delay):
            for i in order:
                func(i, arg)
                time.sleep(delay)
    
        all = [b'A0']#, b'A1']#, b'A2', b'A3', b'A4', b'A5', b'A6', b'A7', b'A8']
        do(all,self.off,0.1)
        do_arg(all,self.dimmer,b'99',0.1)
    
        while True:
            do(all,self.on,0.1)
            d = [b'40',b'30',b'00']
            for i in d:
                do_arg(all,self.dimmer,i,0.1)
            d.reverse()
            for i in d:
                do_arg(all,self.dimmer,i,0.1)
            do_arg(all,self.dimmer,b'99',0.1)
            d.reverse()
            do(all,self.off,0.1)
            time.sleep(1)

    def parse_data(self, lock):

        print ("GATEWAY:\tStarting data parsing")
        lock.acquire()
        self.mote.reset_input_buffer()
        start_time = time.time()

        # Set all values to not gotten
        A0 = False
        #A1 = False
        B00 = False
        B01 = False
        B10 = False
        B11 = False

        while not (A0  and B00 and B01 and B10 and B11): #and A1
            gpio.digitalWrite(mote_pin, gpio.HIGH)
            line = self.mote.readline().decode("utf-8")
            gpio.digitalWrite(mote_pin, gpio.LOW)
            time.sleep(0.1)
            if line.startswith(":A0"):
                A0_val = line
                A0 = True
            #if line.startswith(":A1"):
            #    A1_val = line
            #    A1 = True
            if line.startswith(":B0"):
                if line[self.coil_byte] == '0':
                    B00_val = line
                    B00 = True
                if line[self.coil_byte] == '1':
                    B01_val = line
                    B01 = True
            if line.startswith(":B1"):
                if line[self.coil_byte] == '0':
                    B10_val = line
                    B10 = True
                if line[self.coil_byte] == '1':
                    B11_val = line
                    B11 = True
            #if self.debugger:
                #print ("A0:", A0, "\tA1:", A1, "\tB00:", B00, "\tB01:", B01, "\tB10:", B10, "\tB11:", B11)

        lock.release()


        print ("GATEWAY:\tFinish data parsing")
        if self.debugger:
        #   print (A0_val[self.first_byte_msg:self.last_byte_msg], B00_val[self.first_byte_msg:self.last_byte_msg], B01_val[self.first_byte_msg:self.last_byte_msg], A1_val[self.first_byte_msg:self.last_byte_msg], B10_val[self.first_byte_msg:self.last_byte_msg], B11_val[self.first_byte_msg:self.last_byte_msg], "%s seconds" %(time.time()-start_time))

           #print (MoteData.convert_power(int(A0_val[self.first_byte_msg:self.last_byte_msg],16)), MoteData.convert_power(int(A1_val[self.first_byte_msg:self.last_byte_msg],16)))

           print (MoteData.convert_power(int(B00_val[self.first_byte_msg:self.last_byte_msg],16)), MoteData.convert_power(int(B01_val[self.first_byte_msg:self.last_byte_msg],16)))

           print (MoteData.convert_power(int(B10_val[self.first_byte_msg:self.last_byte_msg],16)), MoteData.convert_power(int(B11_val[self.first_byte_msg:self.last_byte_msg],16)))

        self.A0_pw = MoteData.convert_power(int(A0_val[self.first_byte_msg:self.last_byte_msg],16))
        #self.A1_pw = MoteData.convert_power(int(A1_val[self.first_byte_msg:self.last_byte_msg],16))
        self.B00_pw = MoteData.convert_power(int(B00_val[self.first_byte_msg:self.last_byte_msg],16))
        self.B01_pw = MoteData.convert_power(int(B01_val[self.first_byte_msg:self.last_byte_msg],16))
        self.B10_pw = MoteData.convert_power(int(B10_val[self.first_byte_msg:self.last_byte_msg],16))
        self.B11_pw = MoteData.convert_power(int(B11_val[self.first_byte_msg:self.last_byte_msg],16))

        print ("GATEWAY:\t",self.A0_pw, self.B00_pw, self.B01_pw, self.B10_pw, self.B11_pw) #self.A1_pw, 

        threading.Timer(30, self.parse_data, [lock]).start()
        return

if __name__ == "__main__":
    gateway = EposMoteIII(debugger=True)#dev='/dev/ttyUSB0')
    lock = threading.Lock()
    gateway.debug(True)
    gateway.parse_data(lock)
    gateway.dance()
