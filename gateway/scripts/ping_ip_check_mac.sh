#!/bin/bash
# find_mac.sh - Scans current subnet for the given MAC address
# Usage: Valid IP, and MAC Addresses

IP_ADDR="$1"
MAC_ADDR="$2"

MAC_AT_IP=$(arp -a ${IP_ADDR} | awk '/at/{print $4}')

#echo $MAC_AT_IP
#echo $MAC_ADDR

if [ "$MAC_AT_IP" == "$MAC_ADDR" ]; then
    echo online
else
    echo offline
fi
