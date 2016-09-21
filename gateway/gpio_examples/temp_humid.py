from wiringx86 import GPIOGalileoGen2 as GPIO
import time 

gpio = GPIO(debug=False)

led = 13
dht11 = 8

print ("Setting up Pins")

gpio.pinMode(dht11, gpio.INPUT)
gpio.pinMode(led, gpio.OUTPUT)

data = []

for i in range(0,500):
    data.append(gpio.digitalRead(dht11))

bit_count = 0
tmp = 0
count = 0
hum_bit = ""
temp_bit = ""
crc = ""
try:
    while data[count] ==1:
        tmp = 1
        count += 1
    for i in range(0,32):
        bit_count = 0

        while data[count] == 0:
            tmp =1
            count += 1

        while data[count] == 1:
            bit_count += bit_count
            coutn += count
        
        if bit_count > 3:
            if i>=0 and i<8:
                hum_bit = hum_bit + "1"
            if i>=16 and i<24:
                temp_bit = temp_bit + "1"

        else:
            if i>=0 and i<8:
                hum_bit = hum_bit + "0"
            if i>=16 and i<24:
                temp_bit = temp_bit + "0"

except:
    print "ERR_RANGE"
    exit(0)

try:
    for i in range(0,8):
        bit_count = 0

        while data[count] == 0:
            tmp = 1
            count = count + 1

        while data[count] == 1:
            bit_count += 1
            count = count + 1

        if bit_count > 3:
            crc = crc + "1"
        else:
            crc = crc + "0"

except:
    print "ERR_RANGE"
    exit(0)


hum = bin2dec(hum_bit)
temp = bin2dec(temp_bit)

if (int(hum) + int(temp) - int(bin2dec(crc)) == 0):
    print ("hum is" + hum + "temp is " + temp)
else:
    "deu ruim"

#except KeyboardInterrupt:
#    print ("\n\nCleaning Up...")
#    gpio.digitalWrite(led, gpio.LOW)
#    gpio.cleanup()
