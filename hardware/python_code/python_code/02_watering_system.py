import RPi.GPIO as GPIO
import time

from pymongo import MongoClient

def update_document(my_device, status):
    uri = "mongodb+srv://Home_Automation_AUT:Home_Automation_AUT@cluster0.9awkbpi.mongodb.net/?retryWrites=true&w=majority"
    client = MongoClient(uri)
    db = client['Home_Automation_DB']

    collection = db['devices']
    collection.update_one({"deviceName": my_device }, {"$set": {"status":f'{status}'}})
    print("Update Complete")

SENSOR_PIN = 17
RELAY_PIN = 18
REED_PIN = 22
LED_PIN = 27
IRO_PIN = 5
LED_PIN_IR = 24

GPIO.setmode(GPIO.BCM)

GPIO.setup(SENSOR_PIN, GPIO.IN)
GPIO.setup(RELAY_PIN, GPIO.OUT)
GPIO.setup(REED_PIN, GPIO.IN)
GPIO.setup(LED_PIN, GPIO.OUT)
GPIO.setup(IRO_PIN, GPIO.IN)
GPIO.setup(LED_PIN_IR, GPIO.OUT)

try:
    while True:
        sensor_value = GPIO.input(SENSOR_PIN)
        reed_value = GPIO.input(REED_PIN)
        ir_val = GPIO.input(IRO_PIN)

        if sensor_value == GPIO.HIGH:
            GPIO.output(RELAY_PIN, GPIO.LOW)
            update_document("office-watering")
        else:
            GPIO.output(RELAY_PIN, GPIO.HIGH)

        if reed_value == GPIO.HIGH:
            GPIO.output(LED_PIN, GPIO.HIGH)
        else:
            GPIO.output(LED_PIN, GPIO.LOW)

        if ir_val == GPIO.HIGH:
            GPIO.output(LED_PIN_IR, GPIO.HIGH)
        else:
            GPIO.output(LED_PIN_IR, GPIO.LOW)

        time.sleep(0.1)

except KeyboardInterrupt:
    GPIO.cleanup()