from wiringx86 import GPIOGalileoGen2 as GPIO


class presence_sensor(object):
    def __init__(self, pin):
        self.gpio = GPIO(debug=False)
        self.pin = pin
        self.gpio.pinMode(pin, self.gpio.INPUT)

    def get_value(self):
        return bool(self.gpio.digitalRead(self.pin))
