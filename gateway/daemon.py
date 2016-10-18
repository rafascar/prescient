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
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import datetime
import threading
import json

class data(object):
    def __init__(self):
        self.year = ''
        self.month = ''
        self.day = ''
        self.hour = ''
        self.minute = ''
        self.weekday = ''
        self.smartphone = ''
        self.A0_pw = ''
        self.B00_pw = ''
        self.B01_pw = ''
        self.B10_pw = ''
        self.B11_pw = ''
        self.external_temp = ''
        self.humidity = ''
        self.external_lum = ''
        self.present = ''
        self.internal_temp = ''
        self.internal_lum = ''

    def to_json(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)

# ==================================================== GLOBAL =======================================

last_time_present = time.time()
lights_on = False

parse_period = 1
internet_period = 3 
presence_period = 3
data_period = 10
garbage_period = 30
mac_finder_period = 1
predict_period = 1


# ==================================================== LOCAL THREADS =======================================
def dataset_save(period, lock, smartphone, mote):
    while True:
        date = datetime.datetime.today()
        current_data.year = str(date.year)
        current_data.month = str(date.month)
        current_data.day = str(date.day)
        current_data.hour = str(date.hour)
        current_data.minute = str(date.minute)
        current_data.weekday = str(datetime.datetime.today().weekday())
        current_data.smartphone = str(smartphone.connected)   
        current_data.A0_pw = str(mote.A0_pw)
        current_data.B00_pw = str(mote.B00_pw)
        current_data.B01_pw = str(mote.B01_pw)
        current_data.B10_pw = str(mote.B10_pw)
        current_data.B11_pw = str(mote.B11_pw)
        current_data.external_temp = str(mote.D00_tmp)
        current_data.humidity = str(mote.D01_hum)
        current_data.external_lum = str(mote.D02_lum)
        current_data.present = str(presence.get_value())
        current_data.internal_temp = str(temperature.get_value())
        current_data.internal_lum = str(luminosity.get_value()) 

        print("DATA LOGGER:\tStarting Now")
        with open('dataset.csv', 'a+') as dataset:
            dataset.write(
                    current_data.year + ',' + \
                            current_data.month + ',' + \
                            current_data.day + ',' + \
                            current_data.hour + ',' + \
                            current_data.minute + ',' + \
                            current_data.weekday + ',' + \
                            current_data.smartphone + ',' + \
                            current_data.A0_pw + ',' + \
                            current_data.B00_pw + ',' + \
                            current_data.B01_pw + ',' + \
                            current_data.B10_pw + ',' + \
                            current_data.B11_pw + ',' + \
                            current_data.external_temp + ',' + \
                            current_data.humidity + ',' + \
                            current_data.external_lum + ',' + \
                            current_data.present  + ',' + \
                            current_data.internal_temp + ',' + \
                            current_data.internal_lum + '\n')
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
                lights_on = False
        time.sleep(period)

def clean_garbage(period, lock):
    while True:
        gc.collect()
        print(threading.activeCount())
        time.sleep(period)


def predict():
    print("I'm Smart")



#====================================================== FLASK ==============================================
app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return ("Hello World!")


@app.route("/lamps", methods=['GET', 'OPTIONS'])
def turn_on():
    ret_data = request.args.get('turnOn')
    print (ret_data)
    if ret_data == "On":
        gateway.on(b'A0')
        return ("Success Turning On!")
    elif ret_data == "Off":
        gateway.off(b'A0')
        return ("Success Turning Off!")
    else:
        return ("Error")

@app.route("/dimmer", methods=['GET'])
@cross_origin(origin='*', headers=['Content- Type', 'Authorization'])
def dimm_lamp():
    dimmer = request.args.get('dimmer')
    print (dimmer)
    set_dimmer = dimmer.encode("utf-8")
    gateway.dimmer(b'A0', set_dimmer)
    return "Success"

@app.route("/query_data", methods=['GET'])
@cross_origin(origin='*', headers=['Content- Type', 'Authorization'])
def refresh():
    return current_data.to_json()

#================================================== run() =================================================
def run():
    #Start all threads
    application.start()
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

#=================================================== MAIN =================================================
if __name__ == '__main__':
    # Initialize Flask Application handler on localhost:8000

    #app.run(host= '0.0.0.0', port=8080, debug=True)
    # Set up relative script path
    scripts_path = './scripts/'
    # Create Gateway with EPOSMoteIII
    gateway = EposMoteIII() #dev='/dev/ttyUSB0')
    gateway.debug(True)
    gateway.off(b'A0')
    # Creates an global object that is available for data quering
    current_data = data()
    # Create Smartphone User
    smartphone = user('./scripts/', "2c:8a:72:b1:f8:55", "rsmeurer0", "192.168.1.102")
    # Instantiate Sensors
    luminosity = photo_resistor(16)
    temperature = lm35(14)
    presence = presence_sensor(4)
    # Create Lock for thread sinchronism
    lock = threading.Lock()

    # Create Threads
    application = threading.Thread(target=app.run, kwargs={'host':'0.0.0.0', 'port': 8080})
    present = threading.Thread(target=check_presence, args=(presence_period, lock))
    internet = threading.Thread(target=check_internet, args=(internet_period, lock))
    parser = threading.Thread(target=gateway.parse_data, args=(parse_period, lock))
    garbage = threading.Thread(target=clean_garbage, args=(garbage_period, lock))
    data = threading.Thread(target=dataset_save, args=(data_period, lock, smartphone, gateway))
    mac_finder = threading.Thread(target=find_user, args=(mac_finder_period, lock, smartphone))
    prescient_t = threading.Thread(target=predict)

    run()
