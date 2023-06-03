# 05_door_security.py
import RPi.GPIO as GPIO
import time
import threading
from pymongo import MongoClient
from config import REED_PIN, uri

def update_document(my_device, status):
    #Lukes code for the connection 
    
    client = MongoClient(uri)
    db = client['Home_Automation_DB']

    collection = db['devices']
    collection.update_one({"deviceName": my_device }, {"$set": {"status":f'{status}'}})
    print("Update Complete")


def reed_callback():
    previous_reed_value = None
    while True:

        reed_value = GPIO.input(REED_PIN)
        if reed_value != previous_reed_value:
            previous_reed_value = reed_value
            if reed_value == GPIO.HIGH:
                update_document("front-door-open","True")
                print("door is open")
                
            else:
                update_document("front-door-open","False")
                print("door is closed")

        time.sleep(1)

GPIO.setmode(GPIO.BCM)
GPIO.setup(REED_PIN,GPIO.IN)

front_door_monitor_thread = threading.Thread(target=reed_callback())
front_door_monitor_thread.start()

try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    GPIO.cleanup()
