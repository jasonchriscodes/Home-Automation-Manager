package arin.HomeAutomation.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import arin.HomeAutomation.model.Device;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;

@DataMongoTest
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
    device.setStatus("False");
    //Act
    Device newDevice = deviceRepository.save(device);
    //Assert
    assertNotNull(newDevice);
    assertNotEquals(
      newDevice.getDeviceId(),
      null,
      "failure - strings are not equal"
    );
  }

  @Test
  @DisplayName("It should return the devices list with size of 25")
  void getAllDevices() {
    Device device1 = new Device();
    device1.setDeviceName("junit-office-light");
    device1.setRoom("office");
    device1.setDevice("light");
    device1.setStatus("True");
    deviceRepository.save(device1);

    // Device device2 = new Device();
    // device2.setDeviceName("junit-kitchen-bin");
    // device2.setRoom("kitchen");
    // device2.setDevice("bin");
    // device2.setStatus(true);
    // deviceRepository.save(device2);

    List<Device> list = deviceRepository.findAll();
    assertNotNull(list);
    assertEquals(25, list.size());
  }

  @Test
  void getDeviceById() {
    Device device = new Device();
    device.setDeviceName("junit-bed-light");
    device.setRoom("bed");
    device.setDevice("light");
    device.setStatus("False");
    deviceRepository.save(device);

    Device existingDevice = deviceRepository
      .findById(device.getDeviceId())
      .get();

    assertNotNull(existingDevice);
    assertEquals("bed", existingDevice.getRoom());
    assertNotEquals("curtain", existingDevice.getDevice());
  }

  @Test
  @DisplayName("It should update the device with a new getRoom")
  void updateDevice() {
    Device device = new Device();
    device.setDeviceName("junit-bed-watering");
    device.setRoom("bed");
    device.setDevice("watering");
    device.setStatus("True");
    deviceRepository.save(device);

    Device existingDevice = deviceRepository
      .findById(device.getDeviceId())
      .get();

    existingDevice.setRoom("livingroom");
    Device newDevice = deviceRepository.save(existingDevice);

    assertEquals("livingroom", newDevice.getRoom());
    assertEquals("junit-bed-watering", newDevice.getDeviceName());
  }

  @Test
  @DisplayName("It should delete the existing device")
  void deleteDevice() {
    Device device = new Device();
    device.setDeviceName("junit-bed-watering-delete");
    device.setRoom("bed");
    device.setDevice("watering");
    device.setStatus("True");
    deviceRepository.save(device);
    String id = device.getDeviceId();

    Device device2 = new Device();
    device2.setDeviceName("junit-bed-watering-not-delete");
    device2.setRoom("bed");
    device2.setDevice("watering");
    device2.setStatus("True");
    deviceRepository.save(device2);

    deviceRepository.delete(device);
    Optional<Device> existingDevice = deviceRepository.findById(id);
    List<Device> list = deviceRepository.findAll();

    Optional<String> empty = Optional.empty();

    assertEquals(30, list.size());
    assertEquals(existingDevice, empty);
  }
}
