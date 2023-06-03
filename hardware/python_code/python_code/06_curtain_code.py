import RPi.GPIO as GPIO
import time
import threading
from pymongo import MongoClient
from config import MOTOR1_PIN1, MOTOR1_PIN2, uri

motor_speed = 30  # Set the motor speed (0-100%, lower the number to slow down the motor)

def curtain_motor_control(motor_direction):
    if motor_direction == "forward":
        pwm_pin1.start(motor_speed)
        pwm_pin2.start(0)
    else:
        pwm_pin1.start(0)
        pwm_pin2.start(motor_speed)

    time.sleep(2)
    pwm_pin1.start(0)  # Stop the motor after 10 seconds
    pwm_pin2.start(0)  # Stop the motor after 10 seconds

def check_database_and_control_curtain():
    client = MongoClient(uri)
    db = client['Home_Automation_DB']
    collection = db['device']

    previous_status = None

    while True:
        document = collection.find_one({"deviceName": "bed-curtain-open"})
        current_status = document['status']

        if current_status != previous_status:
            previous_status = current_status

            if current_status == 'True':
                curtain_motor_control("forward")
            else:
                curtain_motor_control("backward")

        time.sleep(1)

GPIO.setmode(GPIO.BCM)
GPIO.setup(MOTOR1_PIN1, GPIO.OUT)
GPIO.setup(MOTOR1_PIN2, GPIO.OUT)

pwm_pin1 = GPIO.PWM(MOTOR1_PIN1, 100)  # Create a PWM instance with 100Hz frequency
pwm_pin2 = GPIO.PWM(MOTOR1_PIN2, 100)  # Create a PWM instance with 100Hz frequency

db_monitor_thread = threading.Thread(target=check_database_and_control_curtain)
db_monitor_thread.start()

try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    print("Exiting...")

finally:
    pwm_pin1.stop()  # Always clean up the PWM instances before exiting
    pwm_pin2.stop()  # Always clean up the PWM instances before exiting
    GPIO.cleanup()