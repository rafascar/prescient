#!/usr/bin/python3

import sys
sys.path.append("../gpio")

import subprocess
import threading
import time
import os
from wiringx86 import GPIOGalileoGen2 as GPIO

gpio = GPIO(debug=False)
user_pin = 0
gpio.pinMode(user_pin, gpio.OUTPUT)

class user(object):
    def __init__(self, path, MAC, name):
        self.connected = False
        self.scripts_path = path
        self.last_connected = 0
        self.name = name
        self.mac_addr = MAC
        self.ip ="" 

    def validate_ip(self):
        valid = self.ip.split('.')
        if len(valid) == 4:
            return True
        else:
            return False

    def search_net(self):
        self.ip = subprocess.check_output("%sfind_mac.sh %s" %(self.scripts_path,self.mac_addr), shell=True)
        self. ip = self.ip[:-1].decode("utf-8")
        valid = self.validate_ip()
        if valid:
            self.connected = True
            print ("Found user %s on: " %self.name,self.ip)
            self.last_connected = time.time()
            gpio.digitalWrite(user_pin, gpio.HIGH)
        else:
            print ("Not Found")

def find_user(smartphone):
   # if the smartphone is currently with status connected False keep searching the net for it
   if not smartphone.connected:
       smartphone.search_net()
       threading.Timer(5, find_user, [smartphone]).start()
       return
   else:
   # if the smartphone was found keep cheking it's IP address to verify if it is still connected
       response = os.system("ping -c 1 " + smartphone.ip) # ping 0 = success
       print (response)

       if response == 0:
           smartphone.last_connected = time.time()
       if response != 0 and (time.time() - smartphone.last_connected > 300):
           smartphone.connected = False # if smartphone disconnected change status to begin searching for it again
           threading.Timer(5, find_user, [smartphone]).start()
           gpio.digitalWrite(user_pin, gpio.LOW)
           return
       else:
           print(time.time() - smartphone.last_connected)
           #time.sleep(5)
           threading.Timer(5, find_user, [smartphone]).start()
           return

if __name__ == '__main__':
    scripts_path = './'
    with open('users.txt') as users:
        for line in users:
            column = line.split()
            smartphone = user(scripts_path, column[0], column[1])
    find_user(smartphone)
