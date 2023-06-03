#!/bin/bash

# Run 04_lighting.py in the background
python3 04_lighting.py &

# Run 05_door_security.py in the background
python3 05_door_security.py &

# Run 07_bin_full_detector.py in the background
python3 07_bin_full_detector.py &