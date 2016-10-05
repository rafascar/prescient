#include <gpio.h>
#include <alarm.h>
#include <machine/cortex_m/emote3_gptm.h>
#include <utility/ostream.h>
#include <machine.h>

#define MAXTIMINGS 85

using namespace EPOS;
OStream cout;

int data[5] = { 0, 0, 0, 0, 0 };

void read_dht11(void)
{
    unsigned char last_state = true;
    unsigned char counter = 0;
    unsigned char j = 0;
    unsigned char i = 0;

    data[0] = data[1] = data[2] = data[3] = data[4] = 0;

    GPIO sensor('d', 5, GPIO::OUTPUT);
    sensor.set(false);
    //Alarm::delay(18000);
    eMote3_GPTM::delay(18000);
    sensor.set(true);
    //Alarm::delay(40000);
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
    }
    else
    {
        cout << "Invalid Data, Skipping This Time" << endl;
    }
}

int main()
{
    cout << "Testing DHT11" << endl << endl;
    while (true)
    {
        read_dht11(); 
        //Alarm::delay(1000000);
        eMote3_GPTM::delay(1000000);
    }

    return 0;
}

