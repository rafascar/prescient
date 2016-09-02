#!/usr/bin/env python3
import serial
import sys
import time
import datetime
import os.path
import struct
import argparse
from random import shuffle

parser = argparse.ArgumentParser(description='Modbus tester')
parser.add_argument('-d','--dev', help='EPOSMote III device descriptor file', default='/dev/ttyACM0')
args = vars(parser.parse_args())

dev = args['dev']

print("Waiting for", dev, "to appear")
while not os.path.exists(dev) or not os.access(dev, os.W_OK):
    pass

print(dev, "found, trying to open it")

mote = serial.Serial(baudrate = 115200, port=dev, timeout=None)
mote.close()
mote.open()

last_write = 0
INTER_WRITE_TIME = 0.35 # seconds

print("Done")

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

def on_as_fuck():
    while True:
        for i in [b'A0', b'A1', b'A2', b'A3', b'A4', b'A5', b'A6', b'A7', b'A8']:
            on(i)
            time.sleep(0.01)

def off_as_fuck():
    while True:
        for i in [b'A0', b'A1', b'A2', b'A3', b'A4', b'A5', b'A6', b'A7', b'A8']:
            off(i)
            time.sleep(0.01)

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

    #all = [b'A0', b'A1', b'A2', b'A3', b'A4', b'A5', b'A6', b'A7', b'A8']
    #do(all,off,0)
    #do_arg(all, dimmer, b'00', 0.00)
    #debug(True)
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

        #do([b'A0',b'A3',b'A6'], on, 0.0)
        #time.sleep(0.5)
        #do([b'A1',b'A4',b'A7'], on, 0.0)
        #time.sleep(0.5)
        #do([b'A2',b'A5',b'A8'], on, 0.0)

        #all = [b'A0', b'A1', b'A2', b'A3', b'A4', b'A5', b'A6', b'A7', b'A8']
        ##do_arg(all, dimmer, b'10', 0.1)
        ##do_arg(all, dimmer, b'20', 0.1)
        ##do_arg(all, dimmer, b'30', 0.1)
        #do_arg(all, dimmer, b'40', 0.1)
        ##do_arg(all, dimmer, b'50', 0.1)
        #do_arg(all, dimmer, b'70', 0.1)
        #do_arg(all, dimmer, b'40', 0.1)
        ##do_arg(all, dimmer, b'30', 0.1)
        ##do_arg(all, dimmer, b'20', 0.1)
        ##do_arg(all, dimmer, b'10', 0.1)
        #do_arg(all, dimmer, b'00', 0.1)

        #shuffle(all)
        #do(all,off,0)

        ##func = [on, off]
        ##shuffle(all)
        ##shuffle(func)
        ##do([all[0]], func[0], 0)

        ##do(all, off, 0.01)
        ###do_arg(all, dimmer, b'00', 0.01)
        ##
        ##do(all, on, 0.0)
        ##
        ##time.sleep(1)
        ##allshuffle = all
        ##shuffle(allshuffle)
        ##do(allshuffle, off, 0.0)
        ##

        ##shuffle(allshuffle)
        ##do(allshuffle, off, 0.0)
        ##x = [b'A0',b'A4',b'A8',b'A2',b'A6']
        ##do(x, on, 0.01)
        ##shuffle(x)
        ##do(x, off, 0.01)

    
def test(modbus_id):
    on(modbus_id)
    time.sleep(1)
    off(modbus_id)
    time.sleep(1)
    on(modbus_id)
    time.sleep(1)
    dimmer(modbus_id,b'60')
    time.sleep(1)
    dimmer(modbus_id,b'50')
    time.sleep(1)
    dimmer(modbus_id,b'40')
    time.sleep(1)
    dimmer(modbus_id,b'30')
    time.sleep(1)
    dimmer(modbus_id,b'20')
    time.sleep(1)
    dimmer(modbus_id,b'10')
    time.sleep(1)
    dimmer(modbus_id,b'00')

if __name__ == "__main__":
    debug(True)
    dance()
    #while True:
    #    for i in [b'A0', b'A1', b'A2', b'A3', b'A4', b'A5', b'A6', b'A7', b'A8']:
    #        on(i)
    #        time.sleep(0.5)
    #    for i in [b'A0', b'A1', b'A2', b'A3', b'A4', b'A5', b'A6', b'A7', b'A8']:
    #        off(i)
    #        time.sleep(0.5)
