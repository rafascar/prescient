#!/usr/bin/python3

import sys
sys.path.append("./gpio")

import time
from scripts.detect_user import *
from scripts.check_internet import *
from sensors.mote.epos_mote_III import *
from sensors.temperature.lm35 import lm35
from sensors.luminosity.photo_resistor import photo_resistor
from sensors.presence.presence_sensor import presence_sensor
import datetime
import threading

last_time_present = time.time()
lights_on = False

def dataset_save(smartphone, mote):
    print("DATA LOGGER:\tStarting Now")
    #lock.acquire()
    with open('dataset.csv', 'a+') as dataset:
        dataset.write(str(datetime.datetime.today()) + ',' + \
                str(datetime.datetime.today().weekday()) + ',' + \
                str(smartphone.connected) + ',' + \
                str(mote.A0_pw) + ',' + \
                #str(mote.A1_pw) + ',' + \
                str(mote.B00_pw) + ',' + \
                str(mote.B01_pw) + ',' + \
                str(mote.B10_pw) + ',' + \
                str(mote.B11_pw) + ',' + \
                str(presence.get_value()) + ',' + \
                str(temperature.get_value()) + ',' + \
                str(luminosity.get_value()) + '\n')
        print("DATA LOGGER: \tData successfully logged @ %s!" %str(datetime.datetime.today()))
    #threading.Timer(90, dataset_save, [smartphone, mote]).start()
    #lock.release()
    return

def check_presence():
    global last_time_present
    global lights_on
    present = presence.get_value()
    #print("PRESENCE: \t", str(present))
    if smartphone.connected or present:
        last_time_present = time.time()
        if lights_on == False:
            print("GATEWAY: \tTurnning Lights ON now!") 
            gateway.on(b'A0')
            #gateway.on(b'A1')
            lights_on = True
    elif not present and (time.time() - last_time_present) > 5400:
        if lights_on:
            print("GATEWAY: \tTurnning Lights OFF now!")
            gateway.off(b'A0')
            #gateway.off(b'A1')
            lights_on = False
    threading.Timer(5, check_presence).start()

def run():
    check_presence()
    while True:
        #find_user(smartphone, lock)
        check_internet()
        gateway.parse_data(lock)
        dataset_save(smartphone, gateway)

if __name__ == '__main__':
    lock = threading.Lock()
    scripts_path = './scripts/'
    gateway = EposMoteIII()#dev='/dev/ttyUSB0')
    gateway.debug(True)
    gateway.off(b'A0')
    #gateway.off(b'A1')
    with open('./scripts/users.txt') as users:
        for line in users:
            column = line.split()
            smartphone = user(scripts_path, column[0], column[1])
    luminosity = photo_resistor(16)
    temperature = lm35(14)
    presence = presence_sensor(4)
    try:
        run()

    except KeyboardInterrupt: 
        print("Getting out of the way") 
        gpio.cleanup()
