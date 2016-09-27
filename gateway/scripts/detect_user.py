#!/usr/bin/python3

import subprocess
import threading
import time
import os
#from wiringx86 import GPIOGalileoGen2 as GPIO
#
#gpio = GPIO(debug=False)
#user_pin = 0
#gpio.pinMode(user_pin, gpio.OUTPUT)

class user(object):
    def __init__(self, file):
        self.connected = False
        self.file = file
        self.last_connected = 0
        self.ip ="" 
        self.last_ip = ""

        with open(file) as users:
            for line in users:
                column = line.split()
                self.mac_addr = column[0]
                self.name = column[1]
                if len(column) > 2:
                    self.last_ip = column[2]


    def validate_ip(self):
        valid = self.ip.split('.')
        if len(valid) == 4:
            return True
        else:
            return False

    def search_net(self):
        self.ip = subprocess.check_output("./find_mac.sh %s" %(self.mac_addr), shell=True)
        self. ip = self.ip[:-1].decode("utf-8")
        valid = self.validate_ip()
        if valid:
            self.connected = True
            print ("Found user %s on: " %self.name,self.ip)
            self.last_connected = time.time()

            with open(self.file, 'w+') as users:
                string = self.mac_addr + ' ' + self.name + ' ' + self.ip
                print(string)
                users.write(string)
            #gpio.digitalWrite(user_pin, gpio.HIGH)
        else:
            print ("Not Found")

def find_user(smartphone):
   # if the smartphone is currently with status connected False keep searching the net for it
   if not smartphone.connected:
       smartphone.search_net()
       threading.Timer(0.5, find_user, [smartphone]).start()
   else:
   # if the smartphone was found keep cheking it's IP address to verify if it is still connected
       response = os.system("ping -c 1 " + smartphone.ip) # ping 0 = success
       print (response)

       if response == 0:
           smartphone.last_connected = time.time()
       if response != 0 and (time.time() - smartphone.last_connected > 300):
           smartphone.connected = False # if smartphone disconnected change status to begin searching for it again
           threading.Timer(0.5, find_user, [smartphone]).start()
           #gpio.digitalWrite(user_pin, gpio.LOW)
       else:
           print(time.time() - smartphone.last_connected)
           #time.sleep(5)
           threading.Timer(5, find_user, [smartphone]).start()

if __name__ == '__main__':
    smartphone = user('users.txt')
    find_user(smartphone)