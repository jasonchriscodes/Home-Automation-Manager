#include <wiringPi.h>

#define SENSOR_PIN 0 // 17
#define RELAY_PIN  1//18
#define REED_PIN  3 //22
#define LED_PIN 2//27
#define IRO_PIN 21 //5
#define LED_PIN_IR 5 // 24

int main(void)
{
  if (wiringPiSetup() == -1) {
    return 1;
  }

  pinMode(SENSOR_PIN, INPUT);
  pinMode(RELAY_PIN, OUTPUT);
  pinMode(REED_PIN, INPUT);
  pinMode(LED_PIN, OUTPUT);
  pinMode(LED_PIN_IR,OUTPUT);

  while (1) {
    int sensor_value = digitalRead(SENSOR_PIN);
    int reed_value = digitalRead(REED_PIN);
    int ir_val = digitalRead(IRO_PIN);

    if (sensor_value == HIGH) {
        digitalWrite(RELAY_PIN, LOW);
    } else {
        digitalWrite(RELAY_PIN, HIGH);
    }

    if (reed_value == HIGH) {
        digitalWrite(LED_PIN, HIGH);
    } else {
        digitalWrite(LED_PIN, LOW);
    }

    if ( ir_val == HIGH){
        digitalWrite(LED_PIN_IR,HIGH);
    } else {
        digitalWrite(LED_PIN_IR,LOW);
    }
    
  }

  return 0;
}