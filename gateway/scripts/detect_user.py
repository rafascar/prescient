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
    def __init__(self, path, MAC, name, last_ip="none"):
        self.connected = False
        self.scripts_path = path
        self.last_connected = 0
        self.name = name
        self.mac_addr = MAC
        self.ip ="" 
        self.last_ip = last_ip
        self.tries = 0

    def validate_ip(self):
        valid = self.ip.split('.')
        if len(valid) == 4:
            return True
        else:
            return False

    def search_net(self):
        if self.last_ip == "none":
            self.ip = subprocess.check_output("%sfind_mac.sh %s" %(self.scripts_path,self.mac_addr), shell=True)
            self.ip = self.ip[:-1].decode("utf-8")
            valid = self.validate_ip()
            response = 1
        else:
            response = subprocess.check_output("%sping_ip_check_mac.sh %s %s" %(self.scripts_path, self.last_ip, self.mac_addr), shell=True)
            response = response[:-1].decode("utf-8")
            if response == "online":
                self.ip = self.last_ip
                valid = self.validate_ip()
            if response == "offline":
                self.last_ip = "none"
                self.ip = ""
                self.connected = False
                valid = False

        if valid or (response == 0):
            self.connected = True
            self.last_ip = self.ip
            print ("USER: \tFound user %s on: " %self.name,self.ip)
            self.last_connected = time.time()
            gpio.digitalWrite(user_pin, gpio.HIGH)
        else:
            print ("USER: \tNot Found")

def find_user(smartphone, lock):
    # if the smartphone is currently with status connected False keep searching the net for it
    print("USER:\t\tStarting User search now!")
    if not smartphone.connected:
       lock.acquire()
       smartphone.search_net()
       lock.release()
       #threading.Timer(5, find_user, [smartphone, lock]).start()
       return
    else:
    # if the smartphone was found keep cheking it's IP address to verify if it is still connected
       lock.acquire()
       response = os.system("ping -c 1 " + smartphone.ip + " > /dev/null 2> /dev/null") # ping 0 = success
       lock.release()
       #print (response)
       if response == 0:
           smartphone.last_connected = time.time()
       if response != 0 and (time.time() - smartphone.last_connected > 300):
           smartphone.connected = False # if smartphone disconnected change status to begin searching for it again
           #threading.Timer(5, find_user, [smartphone, lock]).start()
           gpio.digitalWrite(user_pin, gpio.LOW)
           return
       else:
           print("USER:\t\tTime since last connected: ",time.time() - smartphone.last_connected)
           #time.sleep(5)
           #threading.Timer(15, find_user, [smartphone, lock]).start()
           return

if __name__ == '__main__':
#    scripts_path = './'
#    with open('users.txt') as users:
#        for line in users:
#            column = line.split()
#            smartphone = user(scripts_path, column[0], column[1])

    lock = threading.Lock()
    smartphone = user('./', "2c:8a:72:b1:f8:55", "rsmeurer0", "192.168.1.102")
    find_user(smartphone, lock)
