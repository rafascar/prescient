#!/bin/bash
# search4mac.sh - Scans the subnet it is present in for the MAC given as parameter
# Usage: Valid MAC address 

MAC_ADDR="$1"

function get_subnet ()
{
    ip -o -f inet addr show | awk '/scope global/ {print $4}'
}

function find ()
{
    nmap -sn $(get_subnet) | grep -c -i $MAC_ADDR 
}

if [ "$(id -u)" != "0" ]; then
    exit 1
else 
    if [ "$#" -ne 1 ]; then
        exit 1
    else
        if [[ "$(find)" == 1 ]]; then
            echo "$(grep -B2 ${MAC_ADDR} temp | awk '/scan report/ {print $5}')"
        else
            echo "0"
        fi
    fi
fi
