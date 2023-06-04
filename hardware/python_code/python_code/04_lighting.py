# lighting.py
import RPi.GPIO as GPIO
import time
import threading
from pymongo import MongoClient
from config import LIVINGROOM_LED, KITCHEN_LED, OFFICE_LED, uri

def monitor_database():
    # Connect to the MongoDB database
    client = MongoClient(uri)
    db = client['Home_Automation_DB']
    collection = db['devices']

    # Map the device names to their corresponding GPIO pins
    device_led_map = {
        "Bedroom Light": LIVINGROOM_LED,
        "Office Light": OFFICE_LED,
        "Kitchen Light": KITCHEN_LED,
    }

    # Continuously monitor the database for changes
    while True:
        # Check the status of the lights and control them accordingly
        for device_name, led_pin in device_led_map.items():
            document = collection.find_one({"name": device_name})
            status = document['status']
            # print("device name", device_name,"status", status, led_pin)
            
            # BED LIGHT(23) MUST GO LOW TO TURN ON ( might have something to do with the wiring.)
            # Everything else is normal.

            if led_pin == 23:
                if status == 'on':
                    GPIO.output(led_pin, GPIO.LOW)
                else:
                    GPIO.output(led_pin, GPIO.HIGH)
            else:
                if status == 'on':
                    GPIO.output(led_pin, GPIO.HIGH)
                else:
                    GPIO.output(led_pin, GPIO.LOW)


        time.sleep(0.5)

GPIO.setmode(GPIO.BCM)
GPIO.setup(LIVINGROOM_LED, GPIO.OUT)
GPIO.setup(KITCHEN_LED, GPIO.OUT)
GPIO.setup(OFFICE_LED, GPIO.OUT)

# Start the database monitor thread
db_monitor_thread = threading.Thread(target=monitor_database)
db_monitor_thread.start()

try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    GPIO.cleanup()
