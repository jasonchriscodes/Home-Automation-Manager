package arin.HomeAutomation.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import arin.HomeAutomation.model.Device;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class DeviceRespositoryTest {

  @Autowired
  private DeviceRepository deviceRepository;

  @Test
  void save() {
    //Arrange
    Device device = new Device();
    device.setDeviceName("junit-livingroom-curtain");
    device.setRoom("livingroom");
    device.setDevice("curtain");
    device.setStatus(false);
    //Act
    Device newDevice = deviceRepository.save(device);
    //Assert
    assertNotNull(newDevice);
    assertNotEquals(newDevice.getDeviceId(), null);
  }
}
