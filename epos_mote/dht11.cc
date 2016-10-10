#include <gpio.h>
#include <adc.h> 
#include <modbus_ascii.h>
#include <flash.h>
#include <machine/cortex_m/emote3_watchdog.h>
#include <alarm.h>
#include <machine/cortex_m/emote3_gptm.h>
#include <utility/ostream.h>
#include <machine.h>
#include "home_thing.h"

#define MAXTIMINGS 85

using namespace EPOS;
OStream cout;


typedef unsigned int sensor_data_type;

// These two should be the same
const char Traits<Build>::ID[Traits<Build>::ID_SIZE] = {'D','0'};
const unsigned char MODBUS_ID = 0xD0;

GPIO * coil0, * coil1;
bool coil0_state = false;
bool coil1_state = false;

const unsigned int FLASH_ADDRESS = Flash::size() / 2; // Flash address to save coil state
const unsigned int COIL_OFF = 0;
const unsigned int COIL_ON = 0x12121212;

const char GATEWAY_ADDR[2] = {'E','E'};
NIC::Address gateway_address;

int data[5] = { 0, 0, 0, 0, 0 };

class DHT11{
    private:
        int hum;
        int temp;
        char pin;
        int pin_nr;

    public:
        DHT11(char p, int p_nr);
        int get_temperature();
        int get_humidity();
        void set_data(int temperature, int humidity);
        void read(void);

};

DHT11 dht11('d', 5);

void Receiver::update(Observed * o, NIC::Protocol p, Buffer * b)
{
    Frame * f = b->frame();
    if(f->src() == gateway_address) {
        char * _msg = f->data<char>();
        Modbus_ASCII::Modbus_ASCII_Feeder::notify(_msg, b->size());
    }
    _nic->free(b);
}

void Sender::send(const char * c, int len)
{
    memcpy(_msg, c, len);
    _nic->send(gateway_address, Traits<Secure_NIC>::PROTOCOL_ID, (const char *)_msg, len);
}

class Modbus: public Modbus_ASCII
{
public:
    Modbus(Modbus_ASCII_Sender * sender, unsigned char addr):
            Modbus_ASCII(sender, addr) { }

    void report_proactive(unsigned char cmd, unsigned short starting_address)
    {
        int idx = 0;
        auto data_size = sizeof(sensor_data_type);
        
        struct  {
            short offset;
            sensor_data_type data;
        }__attribute__((packed)) response;

        response.offset = htons(starting_address);

        switch(cmd) {
            case READ_HOLDING_REGISTER:
                memset(&(response.data), 0, sizeof(sensor_data_type));
                switch(starting_address) {
                    default:
                    case 0:
                        if (data_size == sizeof(short)) {
                            response.data = htons(dht11.get_temperature());
                        } else if(data_size == sizeof(int)) {
                            response.data = htonl(dht11.get_temperature());
                        } else {
                            response.data = dht11.get_temperature();
                        }
                        break;
                    case 1:
                        if (data_size == sizeof(short)) {
                            response.data = htons(dht11.get_humidity());
                        } else if(data_size == sizeof(int)) {
                            response.data = htonl(dht11.get_humidity());
                        } else {
                            response.data = dht11.get_humidity();
                        }
                        break;
                }
                send(myAddress(), cmd, reinterpret_cast<unsigned char *>(&response), sizeof(response));
                break;
            default:
                break;
        }
    }
    void handle_command(unsigned char cmd, unsigned char * data, int data_len)
    {
        unsigned short starting_address, quantity_of_registers;
        unsigned char coil_response;
        unsigned short register_response;
        unsigned short output_address;
        unsigned short output_value;
        short value;
        sensor_data_type response[2];
        int idx = 0;
        switch(cmd)
        {
//            case READ_COILS:
//                starting_address = (((unsigned short)data[0]) << 8) | data[1];
//                //quantity_of_registers = (((unsigned short)data[2]) << 8) | data[3];
//                coil_response = coil0_state  + (coil1_state << 1);
//                coil_response >>= starting_address;
//                send(myAddress(), READ_COILS, reinterpret_cast<unsigned char *>(&coil_response), sizeof (unsigned char));
//                break;
//
//            case WRITE_SINGLE_COIL:
//                output_address = (((unsigned short)data[0]) << 8) | data[1];
//                output_value = (((unsigned short)data[2]) << 8) | data[3];
//                ////ack();
//                if(output_address == 0) {
//                    if((output_value & 1) != coil0_state) {
//                        coil0_state = (output_value & 1);
//                        coil0->set(coil0_state);
//                        coil0_to_flash(coil0_state);
//                    }
//                }
//                else if(output_address == 1) {
//                    if((output_value & 1) != coil1_state) {
//                        coil1_state = (output_value & 1);
//                        coil1->set(coil1_state);
//                        coil1_to_flash(coil1_state);
//                    }
//                }
//                else if(output_address == 9)
//                    Machine::reboot();
//
//                break;
//
//            case READ_HOLDING_REGISTER:
//                memset(response, 0, 2*sizeof(sensor_data_type));
//                starting_address = (((unsigned short)data[0]) << 8) | data[1];
//                quantity_of_registers = (((unsigned short)data[2]) << 8) | data[3];
//                if(quantity_of_registers > 2)
//                    break;
//                switch(starting_address)
//                {
//                    // There are intentionally no breaks
//                    default:
//                    case 0:
//                        if(idx < quantity_of_registers)
//                            response[idx++] = htons(dht11.get_temperature());
//                        break;
//                    case 1:
//                        if(idx < quantity_of_registers)
//                            response[idx++] = htons(dht11.get_humidity());
//                }
//                send(myAddress(), READ_HOLDING_REGISTER, reinterpret_cast<unsigned char *>(response), quantity_of_registers * sizeof(response[0]));
//                break;
//
            default:
                break;
        }
    }
};


DHT11::DHT11(char p, int p_nr)
{
    pin = p;
    pin_nr = p_nr;
}

int DHT11::get_temperature()
{
    return temp;
}
int DHT11::get_humidity()
{
    return hum;
}
void DHT11::set_data(int temperature, int humidity)
{
    temp = temperature;
    hum = humidity;
}

void DHT11::read(void)
{
    unsigned char last_state = true;
    unsigned char counter = 0;
    unsigned char j = 0;
    unsigned char i = 0;

    data[0] = data[1] = data[2] = data[3] = data[4] = 0;

    GPIO sensor(pin, pin_nr, GPIO::OUTPUT);
    sensor.set(false);
    eMote3_GPTM::delay(18000);
    sensor.set(true);
    eMote3_GPTM::delay(40);
    sensor.input();

    for ( i = 0; i< MAXTIMINGS; i++)
    {
        counter = 0; 
        while (sensor.read() == last_state)
        {
            counter++;
            //Alarm::delay(1);
            eMote3_GPTM::delay(1);
            if (counter == 255)
            {
                break;
            }
        }

        last_state = sensor.read();

        if (counter == 255)
        {
            break;
        }

        if ((i >= 4) && (i % 2 == 0))
        {
            data[j/8] <<= 1;
            if ( counter > 16 )
                data[j/8] |= 1;
            j++;
        }
    }

    if ((j >= 40) && (data[4] == ((data[0] + data[1] + data[2] + data[3]) & 0xFF)))
    {
        cout << "Humidity: " << data[0] << '.' << data[1] << endl; 
        cout << "Temperature: " << data[2] << '.' << data[3] << endl;
        set_data(data[2], data[0]);
    }
    else
    {
        cout << "Invalid Data, Skipping This Time" << endl;
        set_data(-1, -1);
    }
}

void photo_cell_read(void)
{
    auto photo_cell = ADC{ADC::SINGLE_ENDED_ADC0};
    cout << "Luminosity:\t" << photo_cell.read() << endl;
}

int main()
{
    cout << "LISHA Smart Room DHT11 Sensor" << endl;
    cout << "ID: " << hex << MODBUS_ID << endl;
    cout << "Pins" << endl
         << "DHT 11 : PD5" << endl
         << "Photocell: PA0" << endl
         << "LED: PD3" << endl;

    gateway_address[0] = GATEWAY_ADDR[0];
    gateway_address[1] = GATEWAY_ADDR[1];

    GPIO led('d', 3, GPIO::OUTPUT);
    led.set(false);


    NIC nic;
    NIC::Address addr;
    addr[0] = Traits<Build>::ID[0];
    addr[1] = Traits<Build>::ID[1];
    nic.address(addr);
    cout << "Address: " << nic.address() << endl;

    Thing<Modbus> sensor(MODBUS_ID, &nic);
    
    while (true)
    {
        dht11.read();
        eMote3_GPTM::delay(1000000);
        led.set(true);
        sensor.modbus->report_proactive(Modbus::READ_HOLDING_REGISTER, 0);
        eMote3_GPTM::delay(1000000);
        sensor.modbus->report_proactive(Modbus::READ_HOLDING_REGISTER, 1);
        led.set(false);
    }

    return 0;
}

