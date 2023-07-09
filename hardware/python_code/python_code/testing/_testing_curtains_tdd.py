import unittest
from unittest.mock import patch
import time

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


if __name__ == '__main__':
    unittest.main()
