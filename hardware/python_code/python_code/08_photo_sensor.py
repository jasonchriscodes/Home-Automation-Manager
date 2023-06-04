import RPi.GPIO as GPIO
import time
import threading
from pymongo import MongoClient
from config import uri
from adafruit_pcf8591.pcf8591 import PCF8591
from adafruit_pcf8591.analog_in import AnalogIn
import busio
import board


def read_light_intensity():
    i2c_bus = busio.I2C(board.SCL, board.SDA)
    pcf = PCF8591(i2c_bus)

    light_intensity = ((pcf.read(0) / 255) * 100)
    print(light_intensity)

    return light_intensity
    

def monitor_database():
    # connect to the MongoDB database
    client = MongoClient(uri)
    db = client['Home_Automation_DB']
    collection = db ['devices']

    while True:
        document = collection.find_one({"name": "Lightdetector"})
        current_status = document['status']

        if current_status == 'on':
            light_intensity = read_light_intensity()
            if light_intensity > 40:  # Check if it's dark
                print('it is dark')
                update_document("Curtain", "off")
                update_document("Bedroom Light","on")
                update_document("Office Light", "on")
                update_document("Kitchen Light", "on")
            else:  # It's bright
                print('it is bright')
                update_document("Curtain", "on")
                update_document("Bedroom Light", "off")
                update_document("Office Light", "off")
                update_document("Kitchen Light", "off")

        time.sleep(0.5)
        print('Automation mode')


def update_document(my_device, status):
    #Lukes code for the connection 
    
    client = MongoClient(uri)
    db = client['Home_Automation_DB']

    collection = db['devices']
    collection.update_one({"name": my_device }, {"$set": {"status":f'{status}'}})
    # print("Update Complete")


light_monitor_thread = threading.Thread(target=monitor_database)
light_monitor_thread.start()
