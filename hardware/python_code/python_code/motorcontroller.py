import RPi.GPIO as GPIO
import time

# Pin assignments for the two motors
MOTOR1_EN = 11    # A1-EN
MOTOR1_PIN1 = 13  # A1-A
MOTOR1_PIN2 = 15  # A1-B
MOTOR2_EN = 16    # B1-EN
MOTOR2_PIN1 = 18  # B1-A
MOTOR2_PIN2 = 22  # B1-B

# Set up GPIO pins
GPIO.setmode(GPIO.BOARD)
GPIO.setup(MOTOR1_EN, GPIO.OUT)
GPIO.setup(MOTOR1_PIN1, GPIO.OUT)
GPIO.setup(MOTOR1_PIN2, GPIO.OUT)
GPIO.setup(MOTOR2_EN, GPIO.OUT)
GPIO.setup(MOTOR2_PIN1, GPIO.OUT)
GPIO.setup(MOTOR2_PIN2, GPIO.OUT)

# Set motor enable pins to high to enable motor driver
GPIO.output(MOTOR1_EN, GPIO.HIGH)
GPIO.output(MOTOR2_EN, GPIO.HIGH)

# Function to rotate motor 1 in one direction
def motor1_forward():
    GPIO.output(MOTOR1_PIN1, GPIO.HIGH)  # A1-A
    GPIO.output(MOTOR1_PIN2, GPIO.LOW)  # A1-B

# Function to rotate motor 1 in the other direction
def motor1_backward():
    GPIO.output(MOTOR1_PIN1, GPIO.LOW)  # A1-A
    GPIO.output(MOTOR1_PIN2, GPIO.HIGH)  # A1-B

# Function to rotate motor 2 in one direction
def motor2_forward():
    GPIO.output(MOTOR2_PIN1, GPIO.HIGH)  # B1-A
    GPIO.output(MOTOR2_PIN2, GPIO.LOW)  # B1-B

# Function to rotate motor 2 in the other direction
def motor2_backward():
    GPIO.output(MOTOR2_PIN1, GPIO.LOW)  # B1-A
    GPIO.output(MOTOR2_PIN2, GPIO.HIGH)  # B1-B

# Main loop
while True:
    # Rotate motor 1 forward

    motor1_forward()
    GPIO.output(MOTOR2_PIN1, GPIO.LOW)  # B1-A
    GPIO.output(MOTOR2_PIN2, GPIO.LOW)  # B1-B
    time.sleep(1)

    # Stop motor 1
    GPIO.output(MOTOR1_PIN1, GPIO.LOW)  # A1-A
    GPIO.output(MOTOR1_PIN2, GPIO.LOW)  # A1-B
    time.sleep(1)
    
    # Rotate motor 2 backward
    motor2_backward()
    GPIO.output(MOTOR1_PIN1, GPIO.LOW)  # A1-A
    GPIO.output(MOTOR1_PIN2, GPIO.LOW)  # A1-B
    time.sleep(1)

    # Stop motor 2
    GPIO.output(MOTOR2_PIN1, GPIO.LOW)  # B1-A
    GPIO.output(MOTOR2_PIN2, GPIO.LOW)  # B1-B
    time.sleep(1)

Message #notes-resources
