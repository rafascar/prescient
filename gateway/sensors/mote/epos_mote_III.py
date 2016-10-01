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
    def __init__(self, dev='/dev/ttyACM0', debug=False):
        self.debug = debug
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
        self.A1_pw = 0
        self.B00_pw = 0
        self.B01_pw = 0
        self.B10_pw = 0
        self.B11_pw = 0

        print ("Done!")

    def write(msg):
        global mote
        global last_write
        ret = 0
        while (time.time() - last_write) <= INTER_WRITE_TIME:
            pass
        while ret != len(msg):
            ret = mote.write(msg)
            mote.flush()
        last_write = time.time()
        
    def on(modbus_id, coil = 0):
        global write
        print("On", modbus_id, coil)
        if coil == 1:
            write(b':' + modbus_id + b'0500010001\r\n')
        else:
            write(b':' + modbus_id + b'0500000001\r\n')
    
    def off(modbus_id, coil = 0):
        global write
        print("Off", modbus_id, coil)
        if coil == 1:
            write(b':' + modbus_id + b'0500010000\r\n')
        else:
            write(b':' + modbus_id + b'0500000000\r\n')
    
    def dimmer(modbus_id, percent):
        global write
        print("Dimmer", modbus_id,percent)
        write(b':' + modbus_id + b'06000100' + percent + b'\r\n')
    
    def reset(modbus_id):
        global write
        print("Reset", modbus_id)
        write(b':' + modbus_id + b'0500090001\r\n')
    
    def debug(on):
        global write
        if on:
            write(b'DEBUG\r\n')
        else:
            write(b'/DEBUG\r\n')

    def dance():
        global on, off, dimmer
    
        def do(order, func, delay):
            for i in order:
                func(i)
                time.sleep(delay)
    
        def do_arg(order, func, arg, delay):
            for i in order:
                func(i, arg)
                time.sleep(delay)
    
        all = [b'A0', b'A1']#, b'A2', b'A3', b'A4', b'A5', b'A6', b'A7', b'A8']
        do(all,off,0.1)
        do_arg(all,dimmer,b'99',0.1)
    
        while True:
            do(all,on,0.1)
            d = [b'40',b'30',b'00']
            for i in d:
                do_arg(all,dimmer,i,0.1)
            d.reverse()
            for i in d:
                do_arg(all,dimmer,i,0.1)
            do_arg(all,dimmer,b'99',0.1)
            d.reverse()
            do(all,off,0.1)
            time.sleep(1)

    def parse_data(self):
        # Set all values to not gotten
        self.mote.close()
        self.mote.open()
        start_time = time.time()

        A0 = False
        A1 = False
        B00 = False
        B01 = False
        B10 = False
        B11 = False

        while not (A0 and A1 and B00 and B01 and B10 and B11):
            gpio.digitalWrite(mote_pin, gpio.HIGH)
            line = self.mote.readline().decode("utf-8")
            gpio.digitalWrite(mote_pin, gpio.LOW)
            time.sleep(0.1)
            if line.startswith(":A0"):
                A0_val = line
                A0 = True
            if line.startswith(":A1"):
                A1_val = line
                A1 = True
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
            if self.debug:
                print ("A0:", A0, "\tA1:", A1, "\tB00:", B00, "\tB01:", B01, "\tB10:", B10, "\tB11:", B11)

        if self.debug:
           print (A0_val[self.first_byte_msg:self.last_byte_msg], B00_val[self.first_byte_msg:self.last_byte_msg], B01_val[self.first_byte_msg:self.last_byte_msg], A1_val[self.first_byte_msg:self.last_byte_msg], B10_val[self.first_byte_msg:self.last_byte_msg], B11_val[self.first_byte_msg:self.last_byte_msg], "%s seconds" %(time.time()-start_time))

           print (MoteData.convert_power(int(A0_val[self.first_byte_msg:self.last_byte_msg],16)), MoteData.convert_power(int(A1_val[self.first_byte_msg:self.last_byte_msg],16)))

           print (MoteData.convert_power(int(B00_val[self.first_byte_msg:self.last_byte_msg],16)), MoteData.convert_power(int(B01_val[self.first_byte_msg:self.last_byte_msg],16)))

           print (MoteData.convert_power(int(B10_val[self.first_byte_msg:self.last_byte_msg],16)), MoteData.convert_power(int(B11_val[self.first_byte_msg:self.last_byte_msg],16)))

        self.A0_pw = MoteData.convert_power(int(A0_val[self.first_byte_msg:self.last_byte_msg],16))
        self.A1_pw = MoteData.convert_power(int(A1_val[self.first_byte_msg:self.last_byte_msg],16))
        self.B00_pw = MoteData.convert_power(int(B00_val[self.first_byte_msg:self.last_byte_msg],16))
        self.B01_pw = MoteData.convert_power(int(B01_val[self.first_byte_msg:self.last_byte_msg],16))
        self.B10_pw = MoteData.convert_power(int(B10_val[self.first_byte_msg:self.last_byte_msg],16))
        self.B11_pw = MoteData.convert_power(int(B11_val[self.first_byte_msg:self.last_byte_msg],16))

        print (self.A0_pw, self.A1_pw, self.B00_pw, self.B01_pw, self.B10_pw, self.B11_pw)

        threading.Timer(30, self.parse_data).start()
        return

if __name__ == "__main__":
    gateway = EposMoteIII(debug=True)#dev='/dev/ttyUSB0')

    gateway.parse_data()
