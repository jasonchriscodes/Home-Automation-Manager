import RPi.GPIO as GPIO
import time
import threading
from pymongo import MongoClient
from config import BIN_PIN, uri



def update_database(bin_full):
    client = MongoClient(uri)
    db = client['Home_Automation_DB']
    collection = db['devices']

    status = 'False' if bin_full else 'True'
    collection.update_one({"deviceName": "bed-bin-full"}, {"$set": {"status": status}})
    print("Update Complete")

def monitor_bin_full():
    previous_state = None

    while True:
        current_state = GPIO.input(BIN_PIN)

        if current_state != previous_state:
            previous_state = current_state
            if current_state == GPIO.HIGH:
                update_database(True)
            else:
                update_database(False)
        
        time.sleep(1)

GPIO.setmode(GPIO.BCM)
GPIO.setup(BIN_PIN, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

bin_full_monitor_thread = threading.Thread(target=monitor_bin_full)
bin_full_monitor_thread.start()

try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    print("Exiting...")

finally:
    GPIO.cleanup()