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


def dataset_save(smartphone, mote):
    with open('dataset.csv', 'a') as dataset:
        dataset.write(str(datetime.datetime.today()) + ',' + \
                str(datetime.datetime.today().weekday()) + ',' + \
                str(smartphone.connected) + ',' + \
                str(mote.A0_pw) + ',' + \
                str(mote.A1_pw) + ',' + \
                str(mote.B00_pw) + ',' + \
                str(mote.B01_pw) + ',' + \
                str(mote.B10_pw) + ',' + \
                str(mote.B11_pw) + ',' + \
                str(presence.get_value()) + ',' + \
                str(temperature.get_value()) + ',' + \
                str(luminosity.get_value()) + '\n')
    print("\n\n\nDATA SUCCESSFULY LOGGED \n\n\n")
    threading.Timer(90, dataset_save, [smartphone, gateway]).start()
    return

def run():
    find_user(smartphone)
    check_internet()
    gateway.parse_data()
    threading.Timer(90, dataset_save, [smartphone, gateway]).start()

if __name__ == '__main__':
    scripts_path = './scripts/'
    gateway = EposMoteIII()#dev='/dev/ttyUSB0')
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
        gpio.cleanup()
