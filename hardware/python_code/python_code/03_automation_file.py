import RPi.GPIO as GPIO
import time
import threading
from pymongo import MongoClient

SENSOR_PIN = 17
RELAY_PIN = 18
REED_PIN = 22
LED_PIN = 27
IRO_PIN = 5
LED_PIN_IR = 24



def update_document(my_device, status):
    #ty LUKE for the connection code
    uri = "mongodb+srv://Home_Automation_AUT:Home_Automation_AUT@cluster0.9awkbpi.mongodb.net/?retryWrites=true&w=majority"
    client = MongoClient(uri)
    db = client['Home_Automation_DB']

    collection = db['devices']
    collection.update_one({"deviceName": my_device }, {"$set": {"status":f'{status}'}})
    print("Update Complete")


#FUNCTIONS
def sensor_callback(channel):
    sensor_value = GPIO.input(SENSOR_PIN)
    if sensor_value == GPIO.HIGH:
        GPIO.output(RELAY_PIN, GPIO.LOW)
        threading.Thread(target=update_document, args = ("office-watering","on")).start()
    else:
        GPIO.output(RELAY_PIN,GPIO.HIGH)
        threading.Thread(target=update_document, args = ("office-watering","off")).start()

def reed_callback(channel):
    reed_value = GPIO.input(REED_PIN)
    if reed_value == GPIO.HIGH:
        GPIO.output(LED_PIN, GPIO.HIGH)
        threading.Thread(target=update_document, args = ("front-door","on")).start()
    else:
        GPIO.output(LED_PIN,GPIO.LOW)
        threading.Thread(target=update_document, args = ("office-watering","off")).start()

def ir_callback(channel):
    ir_val = GPIO.input(IRO_PIN)
    if ir_val == GPIO.HIGH:
        GPIO.output(LED_PIN_IR, GPIO.HIGH)
        threading.Thread(target=update_document, args = ("livingroom-bin","on")).start()

    else:
        GPIO.output(LED_PIN_IR, GPIO.LOW)
        threading.Thread(target=update_document, args = ("livingroom-bin","off")).start()

# adding interrupts to stop main thread locking up
# rpi interrupts are not hardware but software so.. its just like multi-threading

GPIO.setmode(GPIO.BCM)
GPIO.setup(SENSOR_PIN, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(RELAY_PIN, GPIO.OUT)
GPIO.setup(REED_PIN, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(LED_PIN, GPIO.OUT)
GPIO.setup(IRO_PIN, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(LED_PIN_IR, GPIO.OUT)


GPIO.add_event_detect(SENSOR_PIN, GPIO.BOTH, callback=sensor_callback, bouncetime=300)
GPIO.add_event_detect(REED_PIN, GPIO.BOTH, callback=reed_callback, bouncetime=300)
GPIO.add_event_detect(IRO_PIN, GPIO.BOTH, callback=ir_callback, bouncetime=300)

try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    GPIO.cleanup()