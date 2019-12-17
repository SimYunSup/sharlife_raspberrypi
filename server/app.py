#!usr/bin/env python
from flask import Flask, jsonify
from flask_cors import CORS
import RPi.GPIO as GPIO
import time
from mfrc522 import SimpleMFRC522
import sys

# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)
# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})

reader = SimpleMFRC522()


GPIO.setwarnings(False)


@app.route('/on', methods=['GET'])
def scanOn():
    start = time.time()
    state = False
    id = 0
    timeout = 1.0
    while time.time() < start + timeout:
        try:
            id, text = reader.read()
            if id:
                print('Scanned', file=sys.stderr)
                state = True
                GPIO.setmode(GPIO.BOARD)
                GPIO.setup(12, GPIO.OUT)
                p = GPIO.PWM(12, 50)
                p.start(0)
                p.ChangeDutyCycle(8.5)
                time.sleep(1)
                p.ChangeDutyCycle(0)
                break
        finally:
            GPIO.cleanup()

    return jsonify({'state': state, 'id': id})

@app.route('/off', methods=['GET'])
def scanOff():
    start = time.time()
    state = False
    id = 0
    timeout = 1.0
    while time.time() < start + timeout:
        try:
            id, text = reader.read()
            if id:
                print('Scanned', file=sys.stderr)
                state = True
                GPIO.setmode(GPIO.BOARD)
                GPIO.setup(12, GPIO.OUT)
                p = GPIO.PWM(12, 50)
                p.start(0)
                p.ChangeDutyCycle(5)
                time.sleep(1)
                p.ChangeDutyCycle(0)
                break
        finally:
            GPIO.cleanup()

    return jsonify({'state': state, 'id': id})

@app.route('/onN', methods=['GET'])
def onN():
    state = True
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(12, GPIO.OUT)
    p = GPIO.PWM(12, 50)
    p.start(0)
    p.ChangeDutyCycle(8.5)
    time.sleep(1)
    p.ChangeDutyCycle(0)
    GPIO.cleanup()
    return jsonify({'state': state})

@app.route('/offN', methods=['GET'])
def offN():
    state = True
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(12, GPIO.OUT)
    p = GPIO.PWM(12, 50)
    p.start(0)
    p.ChangeDutyCycle(5)
    time.sleep(1)
    p.ChangeDutyCycle(0)
    GPIO.cleanup()
    return jsonify({'state': state})

if __name__ == '__main__':
   app.run()