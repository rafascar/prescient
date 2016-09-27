from wiringx86 import GPIOGalileoGen2 as GPIO

class lm35(object):
    """
    Instatiates a analog read of the GPIO pin from galileo gen2 

    pin: Valid Analog Pin (14, 15, 16, 17, 18, 19) respectively from A0 to A5
    unit: Can be either Celcius, Kelvin or Farenheit [c, k f]
    """
    # Class Initializer
    def __init__(self, pin, unit="c", debug=False):
        self.gpio = GPIO(debug=False)
        self.unit = unit
        self.pin = pin
        self.gpio.pinMode(self.pin, self.gpio.ANALOG_INPUT)

    def get_value(self):
        self.raw = self.gpio.analogRead(self.pin)
        self.milivolt = (self.raw/1024.0)*5000
        self.celcius = self.milivolt/10
        self.farenheit = (self.celcius*1.8) + 32
        self.kelvin = self.celcius + 273.0
        if self.unit == "c":
            return self.celcius 
        if self.unit == "k":
            return self.kelvin 
        if self.unit == "f":
            return self.farenheit 
