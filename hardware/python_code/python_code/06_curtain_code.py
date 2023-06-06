import RPi.GPIO as GPIO
import time
import threading
from pymongo import MongoClient
from config import MOTOR1_PIN1, MOTOR1_PIN2, uri

motor_speed = 100  # Motor speed (0-100%, lower the number to slow down the motor)
motor_speed_reverse = 80
def curtain_motor_control(motor_direction):
    if motor_direction == "forward":
        pwm_pin1.ChangeDutyCycle(motor_speed)
        pwm_pin2.ChangeDutyCycle(0)
        time.sleep(4)  # Forward for 5 seconds
    elif motor_direction == "backward":
        pwm_pin1.ChangeDutyCycle(0)
        pwm_pin2.ChangeDutyCycle(motor_speed_reverse)
        time.sleep(4)  # Backward for 4 seconds

    pwm_pin1.ChangeDutyCycle(0)
    pwm_pin2.ChangeDutyCycle(0) 

def check_database_and_control_curtain():
    client = MongoClient(uri)
    db = client['Home_Automation_DB']
    collection = db['devices']

    previous_status = 'off'
    start_up = True

    while True:
        
        document = collection.find_one({"name": "Curtain"})
        current_status = document['status']

        if current_status != previous_status:
            previous_status = current_status

            if current_status == 'on':
                curtain_motor_control("forward")
                start_up = False
            elif current_status == 'off' and start_up == False:
                curtain_motor_control("backward")

        time.sleep(1)

GPIO.setmode(GPIO.BCM)
GPIO.setup(MOTOR1_PIN1, GPIO.OUT)
GPIO.setup(MOTOR1_PIN2, GPIO.OUT)

pwm_pin1 = GPIO.PWM(MOTOR1_PIN1, 100)  # Create a PWM instance with 100Hz frequency
pwm_pin2 = GPIO.PWM(MOTOR1_PIN2, 100)

pwm_pin1.start(0)  # Start the PWM instance with 0% duty cycle
pwm_pin2.start(0)  # Start the PWM instance with 0% duty cycle

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
