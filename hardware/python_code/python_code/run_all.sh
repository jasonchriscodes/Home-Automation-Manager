#!/bin/bash

lxterminal -e "python3 04_lighting.py" &
lxterminal -e "python3 05_door_security.py" &
lxterminal -e "python3 07_bin_full_detector.py" &

wait
