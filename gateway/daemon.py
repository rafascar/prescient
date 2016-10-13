#!/usr/bin/python3

import sys
sys.path.append("./gpio")

import gc
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

parse_period = 1
internet_period = 3 
presence_period = 3
data_period = 10
garbage_period = 30
mac_finder_period = 1


def dataset_save(period, lock, smartphone, mote):
    while True:
        print("DATA LOGGER:\tStarting Now")
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
                    str(mote.D00_tmp) + ',' + \
                    str(mote.D01_hum) + ',' + \
                    str(mote.D02_lum) + ',' + \
                    str(presence.get_value()) + ',' + \
                    str(temperature.get_value()) + ',' + \
                    str(luminosity.get_value()) + '\n')
            print("DATA LOGGER: \tData successfully logged @ %s!" %str(datetime.datetime.today()))
        time.sleep(period)

def check_presence(period, lock):
    global last_time_present
    global lights_on
    while True:
        present = presence.get_value()
        if smartphone.connected or present:
            if present:
                last_time_present = time.time()
            if lights_on == False:
                print("GATEWAY: \tTurnning Lights ON now!") 
                gateway.on(b'A0')
                time.sleep(1)
                gateway.dimmer(b'A0', b'00')
                lights_on = True
        elif not present and (time.time() - last_time_present) > 5400:
            if lights_on:
                print("GATEWAY: \tTurnning Lights OFF now!")
                gateway.off(b'A0')
                #gateway.off(b'A1')
                lights_on = False
        time.sleep(period)

def clean_garbage(period, lock):
    while True:
        gc.collect()
        print(threading.activeCount())
        time.sleep(period)

def run():
    present = threading.Thread(target=check_presence, args=(presence_period, lock))
    internet = threading.Thread(target=check_internet, args=(internet_period, lock))
    parser = threading.Thread(target=gateway.parse_data, args=(parse_period, lock))
    garbage = threading.Thread(target=clean_garbage, args=(garbage_period, lock))
    data = threading.Thread(target=dataset_save, args=(data_period, lock, smartphone, gateway))
    mac_finder = threading.Thread(target=find_user, args=(mac_finder_period, lock, smartphone))



#Start all threads
    present.start()
    internet.start()
    garbage.start()
    parser.start()
    data.start()
    mac_finder.start()
    
    mac_finder.join()
    present.join()
    internet.join()
    garbage.join()
    parser.join()
    data.join()

if __name__ == '__main__':
    lock = threading.Lock()
    scripts_path = './scripts/'
    gateway = EposMoteIII()#dev='/dev/ttyUSB0')
    gateway.debug(True)
    gateway.off(b'A0')
    smartphone = user('./scripts/', "2c:8a:72:b1:f8:55", "rsmeurer0", "192.168.1.102")
    luminosity = photo_resistor(16)
    temperature = lm35(14)
    presence = presence_sensor(4)
    try:
        run()

    except KeyboardInterrupt: 
        print("Getting out of the way") 
        gpio.cleanup()
