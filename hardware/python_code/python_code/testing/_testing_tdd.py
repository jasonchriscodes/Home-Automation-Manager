import unittest
from unittest.mock import patch
import time

class GasMonitor:
    def __init__(self):
        self.gas_levels = []
    
    def add_reading(self, gas_level):
        self.gas_levels.append(gas_level)
    
    def get_average_gas_level(self):
        if not self.gas_levels:
            return None
        return sum(self.gas_levels) / len(self.gas_levels)
    
    def gas_threshold(self):
        if not self.gas_levels:
            return None
        if sum(self.gas_levels) >= 50:
            return 'high_gas_level'
        else:
            return 'low_gas_level'


class GasMonitorTest(unittest.TestCase):
    def test_empty_monitor(self):
        monitor = GasMonitor()
        self.assertIsNone(monitor.get_average_gas_level())
    
    def test_single_reading(self):
        monitor = GasMonitor()
        monitor.add_reading(3.2)
        self.assertEqual(monitor.get_average_gas_level(), 3.2)
    
    def test_multiple_readings(self):
        monitor = GasMonitor()
        monitor.add_reading(4.1)
        monitor.add_reading(4.4)
        monitor.add_reading(3.9)
        self.assertEqual(monitor.get_average_gas_level(), 4.133333333333334)
    
    def test_negative_gas_levels(self):
        monitor = GasMonitor()
        monitor.add_reading(-1.0)
        monitor.add_reading(-0.5)
        monitor.add_reading(0.0)
        monitor.add_reading(0.5)
        self.assertEqual(monitor.get_average_gas_level(), -0.25)

    def test_gas_threshold(self):
        monitor = GasMonitor()
        monitor.add_reading(49)
        self.assertEqual(monitor.gas_threshold(),'low_gas_level')



class CurtainMotor:
    def __init__(self):
        self.state = 'closed'
    
    def open_curtains(self):
        if self.state == 'open':
            return "Curtains are already open"
        else:
            self.state = 'open'
            time.sleep(5)
            return "Curtains opened"
    
    def close_curtains(self):
        if self.state == 'closed':
            return "Curtains are already closed"
        else:
            self.state = 'closed'
            time.sleep(5)
            return "Curtains closed"
    
    def get_curtain_state(self):
        return self.state


class CurtainMotorTest(unittest.TestCase):
    def test_motor_state(self):
        motor = CurtainMotor()
        self.assertEqual(motor.get_curtain_state(), 'closed')
    
    def test_opening_curtains_when_already_open(self):
        motor = CurtainMotor()
        motor.state = 'open'
        self.assertEqual(motor.open_curtains(), "Curtains are already open")

    def test_closing_curtains_when_already_closed(self):
        motor = CurtainMotor()
        self.assertEqual(motor.close_curtains(), "Curtains are already closed")

    @patch('time.sleep', autospec=True) 
    def test_open_curtains(self, mock_sleep):
        motor = CurtainMotor()
        self.assertEqual(motor.open_curtains(), "Curtains opened")
        self.assertEqual(motor.get_curtain_state(), 'open')
        mock_sleep.assert_called_once_with(5)

    @patch('time.sleep', autospec=True)
    def test_close_curtains(self, mock_sleep):
        motor = CurtainMotor()
        motor.open_curtains()  
        mock_sleep.reset_mock()
        self.assertEqual(motor.close_curtains(), "Curtains closed")
        self.assertEqual(motor.get_curtain_state(), 'closed')
        mock_sleep.assert_called_once_with(5)  

class LightSensor:
    def __init__(self):
        self.intensity = 0

    def read_light_intensity(self):
        return self.intensity

class RoomController:
    def __init__(self, light_sensor, curtain_motor):
        self.light_sensor = light_sensor
        self.curtain_motor = curtain_motor
        self.lights = 'off'

    def control_room(self):
        light_intensity = self.light_sensor.read_light_intensity()
        if light_intensity > 40:  
            self.curtain_motor.open_curtains()
            self.lights = 'off'
        else: 
            self.curtain_motor.close_curtains()
            self.lights = 'on'

class TestRoomController(unittest.TestCase):
    def setUp(self):
        self.curtain_motor = CurtainMotor()
        self.light_sensor = LightSensor()
        self.controller = RoomController(self.light_sensor, self.curtain_motor)

    @patch.object(CurtainMotor, 'open_curtains')
    @patch.object(CurtainMotor, 'close_curtains')
    def test_control_room(self, mock_close_curtains, mock_open_curtains):
        self.light_sensor.intensity = 50
        self.controller.control_room()
        mock_open_curtains.assert_called_once()
        self.assertEqual(self.controller.lights, 'off')

        mock_open_curtains.reset_mock()
        self.light_sensor.intensity = 30
        self.controller.control_room()
        mock_close_curtains.assert_called_once()
        self.assertEqual(self.controller.lights, 'on')

class DoorSensor:
    def __init__(self):
        self.state = 'closed'
        self.state_history = []
    
    def read_door_state(self):
        return self.state

    def record_state(self, state):
        self.state = state
        self.state_history.append((time.time(), state))

class Door:
    def __init__(self):
        self.sensor = DoorSensor()

    def open_door(self):
        self.sensor.record_state('open')

    def close_door(self):
        self.sensor.record_state('closed')

class DoorCheck:
    def __init__(self, door):
        self.door = door

    def check_door(self):
        for i in range(len(self.door.sensor.state_history) - 1, -1, -1):
            if self.door.sensor.state_history[i][1] == 'closed':
                break
            elif time.time() - self.door.sensor.state_history[i][0] > 5:
                return 'door has been left open'
        return 'door is closed'

class TestDoorCheck(unittest.TestCase):
    def setUp(self):
        self.door = Door()
        self.door_check = DoorCheck(self.door)

    def test_check_door(self):
        self.assertEqual(self.door_check.check_door(), 'door is closed')
        self.door.open_door()
        time.sleep(6) 
        self.assertEqual(self.door_check.check_door(), 'door has been left open')
        self.door.close_door()
        self.assertEqual(self.door_check.check_door(), 'door is closed')

if __name__ == '__main__':
    unittest.main()
