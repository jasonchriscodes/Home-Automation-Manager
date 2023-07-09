#!/bin/bash

# Create virtual environment if it does not exist
if [ ! -d ".venv" ]; then
    python3 -m venv .venv
fi

# Activate the virtual environment
source .venv/bin/activate

# Install requirements
pip install -r requirements.txt

# Run your python scripts in the background
python3 04_lighting.py &
python3 05_door_security.py &
python3 07_bin_full_detector.py &
python3 06_curtain_code.py &
python3 09_gas_sensor.py &
