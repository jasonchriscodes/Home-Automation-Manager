# 05_door_security.py
import RPi.GPIO as GPIO
import time
import threading
from pymongo import MongoClient
from config import REED_PIN, uri
from adafruit_pcf8591.pcf8591 import PCF8591
from adafruit_pcf8591.analog_in import AnalogIn
import busio
import board

def read_gas_level():
    i2c_bus = busio.I2C(board.SCL, board.SDA)
    pcf = PCF8591(i2c_bus)

    gas_level = ((pcf.read(1) / 255) * 100)
    # print(gas_level)

    return gas_level


def update_document(my_device, status):
    #Lukes code for the connection 
    
    client = MongoClient(uri)
    db = client['Home_Automation_DB']

    collection = db['devices']
    document = collection.find_one({"name":my_device})

    if document['status'] != status:
        collection.update_one({"name": my_device }, {"$set": {"status":f'{status}'}})
        print("Update Complete")


def gas_callback():
    # previous_reed_value = None
    while True:

        gas_value = read_gas_level() # baseline is about 57, spray in cup can make 80ish max
        # print(gas_value)
    
        if gas_value > 75:
            update_document("Gas","on")
            print("Warning there is a high level of gas")
        else:
            update_document("Gas","off")
            print("Gas is low level")

        time.sleep(1)

GPIO.setmode(GPIO.BCM)
GPIO.setup(REED_PIN,GPIO.IN)

front_door_monitor_thread = threading.Thread(target=gas_callback())
front_door_monitor_thread.start()

try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    GPIO.cleanup()
