#!/usr/bin/python3

import time
from detect_user import *
from check_internet import *
from threading import Thread

def run():
    smartphone = user('users.txt')
    find_user(smartphone)
    check_internet()
if __name__ == '__main__':
    run()
