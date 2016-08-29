import subprocess
import time
import os

class user(object):
    def __init__(self, MAC):
        self.connected = False
        self.mac_addr = MAC
        self.ip ="" 

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
            print (self.ip)
        else:
            print ("Not Found")

def main():
    MAC = "2c:8a:72:b1:f8:55"
    # Create smartphone object with the smartPhone MAC
    smartphone = user(MAC)
    while True: # eternal loop
        # if the smartphone is currently with status connected False keep searching the net for it
        if not smartphone.connected:
            smartphone.search_net()
        else:
        # if the smartphone was found keep cheking it's IP address to verify if it is still connected
            response = os.system("ping -c 1 " + smartphone.ip) # ping 0 = success
            print (response)
            if response != 0:
                smartphone.connected = False # if smartphone disconnected change status to begin searching for it again
            else:
                time.sleep(5)

if __name__ == '__main__':
    main()
