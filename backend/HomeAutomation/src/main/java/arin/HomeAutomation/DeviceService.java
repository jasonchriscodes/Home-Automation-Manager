package arin.HomeAutomation;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeviceService {

  @Autowired
  private DeviceRepository deviceRepository;

  public List<Device> getAllDevices() {
    return deviceRepository.findAll();
  }

  // ------------------------------------------------------------------------------------------------------------------

  public Optional<Device> getDeviceById(String id) {
    return deviceRepository.findById(id);
  }

  // ------------------------------------------------------------------------------------------------------------------

  public Device updateDeviceStatus(String id, String status) {
    Optional<Device> optionalDevice = deviceRepository.findById(id);
    if (optionalDevice.isPresent()) {
      Device device = optionalDevice.get();
      device.setStatus(status);
      return deviceRepository.save(device);
    } else {
      throw new IllegalArgumentException("No device with ID " + id);
    }
  }

  public Device updateStatusChatBot(String name, String status) {
    System.out.println(name);
    if (name.equals("bed")) {
      name = "Bedroom Light";
    } else if (name.equals("office")) {
      name = "Office Light";
    } else if (name.equals("kitchen")) {
      name = "Kitchen Light";
    } else if (name.equals("curtain")) {
      name = "Curtain";
    } else if (name.equals("wateringplant")) {
      name = "Plant Watering System";
    } else if (name.equals("door")) {
      name = "Door";
    } else if (name.equals("bin")) {
      name = "Bin";
    } else if (name.equals("gas")) {
      name = "Gas";
    }
    System.out.println(name);
    Device device = deviceRepository.findByName(name);
    if (device != null) {
      device.setStatus(status);
      return deviceRepository.save(device);
    } else {
      throw new IllegalArgumentException("No device with name" + name);
    }
  }
}
