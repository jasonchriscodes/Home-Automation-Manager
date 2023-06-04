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
    analog_in = AnalogIn(pcf, PCF8591.P0)
    light_intensity = analog_in.value / 65535.0 * 100

    if light_intensity < 50:
        # return 'dark'
        print('dark')
    else:
        print('bright')

# def check_database_and_control_curtain():
#     client = MongoClient(uri)
#     db = client['Home_Automation_DB']
#     collection = db['devices']

#     previous_status = None
#     start_up = True

#     while True:
#         print('working')
#         document = collection.find_one({"name": "Light Detection"})
#         current_status = document['status']
#         if current_status == 'on':
#             if current_status != previous_status:
#                 previous_status = current_status

#                 if current_status == 'on':
#                     curtain_motor_control("forward")
#                     start_up = False
#                 elif current_status == 'off' and start_up == False:
#                     curtain_motor_control("backward")

        
#         time.sleep(1)

light_monitor_thread = threading.Thread(target=read_light_intensity)
light_monitor_thread.start()
