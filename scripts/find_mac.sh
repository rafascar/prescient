#!/bin/bash
# find_mac.sh - Scans current subnet for the given MAC address
# Usage: Valid MAC

MAC_ADDR="$1"


function get_subnet ()
{
    ip -o -f inet addr show | awk '/scope global/ {print $4}'
}


if [ "$(id -u)" != "0" ]; then
    exit 1
else 
    if [ "$#" -ne 1 ]; then
        exit 1
    else
        echo "$(nmap -sn $(get_subnet) | grep -B2 -i ${MAC_ADDR} --line-buffered | awk '/scan report/ {print$5}')"
    fi
fi

