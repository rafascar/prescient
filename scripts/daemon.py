import subprocess
import os

class user(object):
    def __init__(self, MAC):
        self.MAC = MAC
        self.ip_addr = search_net(self)
        self.connected = 0 

def search_net(user_data):
    user_data.connected = 1
        

def main():
    connected = False
    while True:
        if connected:
            search_net()


if __name__ == '__main__':
    main()
