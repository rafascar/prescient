from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from wiringx86 import GPIOGalileoGen2 as GPIO
from gateway_test import *
from sensors.temperature.lm35 import lm35
from sensors.luminosity.photo_resistor import photo_resistor
import json


app = Flask(__name__)
cors = CORS(app, resources={r"/foo": {"origins": "localhost"}})

@app.route("/")
def home():
    return ("Hello World!")


@app.route("/test", methods=['GET'])
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def get_x():
    ret_data = request.args.get('turnOn')
    print (ret_data)
    if ret_data == "On":
        on(b'A0')
        on(b'A1')
        return ("Success Turning On!")
    elif ret_data == "Off":
        off(b'A0')
        off(b'A1')
        return ("Success Turning Off!")
    else:
        return ("Error")

@app.route("/get_internal_temp", methods=['GET'])
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def get_internal_temp():
    print (internal_temp.get_value())
    return str(internal_temp.get_value())
    
@app.route("/get_internal_lum", methods=['GET'])
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def get_internal_lum():
    print (internal_lum.get_value())
    return str(internal_lum.get_value())




if __name__ == "__main__":
    internal_temp = lm35(16)
    internal_lum = photo_resistor(14)
    app.run(host= '0.0.0.0', port=8080, debug=True)
