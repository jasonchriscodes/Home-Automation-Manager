#include <wiringPi.h>

#define SENSOR_PIN 0 // BCM GPIO 17
#define RELAY_PIN 1 // BCM GPIO 18

int main(void)
{
  if (wiringPiSetup() == -1) {
    return 1;
  }

  pinMode(SENSOR_PIN, INPUT);
  pinMode(RELAY_PIN, OUTPUT);

  while (1) {
    int sensor_value = digitalRead(SENSOR_PIN);

    if (sensor_value == HIGH) {
      digitalWrite(RELAY_PIN, LOW);
    } else {
      digitalWrite(RELAY_PIN, HIGH);
    }
  }

  return 0;
}
