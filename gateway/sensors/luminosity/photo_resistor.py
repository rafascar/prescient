from wiringx86 import GPIOGalileoGen2 as GPIO

class photo_resistor(object):
    """
    Instatiates a analog read of the GPIO pin from galileo gen2 

    pin: Valid Analog Pin (14, 15, 16, 17, 18, 19) respectively from A0 to A5
    """
    # Class Initializer
    def __init__(self, pin, debug=False):
        self.gpio = GPIO(debug=False)
        self.pin = pin
        self.gpio.pinMode(self.pin, self.gpio.ANALOG_INPUT)

    def get_value(self):
        self.raw = self.gpio.analogRead(self.pin)
        self.normalized = (self.raw/1024.0)
        self.percent = self.normalized * 100
        return self.percent 
