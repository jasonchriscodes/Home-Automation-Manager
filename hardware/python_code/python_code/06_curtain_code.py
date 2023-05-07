import RPi.GPIO as GPIO
import time
import threading
from pymongo import MongoClient
from config import MOTOR1_EN, MOTOR1_PIN1, MOTOR1_PIN2, MOTOR2_EN, MOTOR2_PIN1,MOTOR2_PIN2,uri

motor_speed = 2  # Set the motor speed (0-100%)


def curtain_motor_control(motor1_direction, motor2_direction):
    if motor1_direction == "forward":
        GPIO.output(MOTOR1_PIN1, GPIO.HIGH)
        GPIO.output(MOTOR1_PIN2, GPIO.LOW)
    else:
        GPIO.output(MOTOR1_PIN1, GPIO.LOW)
        GPIO.output(MOTOR1_PIN2, GPIO.HIGH)

    if motor2_direction == "forward":
        GPIO.output(MOTOR2_PIN1, GPIO.HIGH)
        GPIO.output(MOTOR2_PIN2, GPIO.LOW)
    else:
        GPIO.output(MOTOR2_PIN1, GPIO.LOW)
        GPIO.output(MOTOR2_PIN2, GPIO.HIGH)

    motor1_pwm.ChangeDutyCycle(motor_speed)
    motor2_pwm.ChangeDutyCycle(motor_speed)
    time.sleep(10)
    motor1_pwm.ChangeDutyCycle(0)
    motor2_pwm.ChangeDutyCycle(0)

def check_database_and_control_curtain():
    client = MongoClient(uri)
    db = client['Home_Automation_DB']
    collection = db['devices']

    previous_status = None

    while True:
        document = collection.find_one({"deviceName": "bed-curtain"})
        current_status = document['status']

        if current_status != previous_status:
            previous_status = current_status

            if current_status == 'True':
                curtain_motor_control("forward", "backward")
            else:
                curtain_motor_control("backward", "forward")

        time.sleep(1)

GPIO.setmode(GPIO.BCM)
GPIO.setup(MOTOR1_EN, GPIO.OUT)
GPIO.setup(MOTOR1_PIN1, GPIO.OUT)
GPIO.setup(MOTOR1_PIN2, GPIO.OUT)
GPIO.setup(MOTOR2_EN, GPIO.OUT)
GPIO.setup(MOTOR2_PIN1, GPIO.OUT)
GPIO.setup(MOTOR2_PIN2, GPIO.OUT)

motor1_pwm = GPIO.PWM(MOTOR1_EN, 100)
motor2_pwm = GPIO.PWM(MOTOR2_EN, 100)
motor1_pwm.start(0)
motor2_pwm.start(0)

db_monitor_thread = threading.Thread(target=check_database_and_control_curtain)
db_monitor_thread.start()

try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    print("Exiting...")

finally:
    motor1_pwm.stop()
    motor2_pwm.stop()
    GPIO.cleanup()