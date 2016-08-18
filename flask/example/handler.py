from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from gateway_test import *
import json

app = Flask(__name__)
cors = CORS(app, resources={r"/foo": {"origins": "localhost"}})

@app.route("/test.py", methods=['GET'])
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

if __name__ == "__main__":
    app.run(port=8080, debug=True)
