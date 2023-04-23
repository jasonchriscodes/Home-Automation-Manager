package arin.HomeAutomation;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeviceService {

  @Autowired
  private DeviceRepository deviceRepository;

  public List<Device> allDevices() {
    return deviceRepository.findAll();
  }

  public Optional<Device> singleDevice(String deviceId) {
    return deviceRepository.findDeviceByDeviceId(deviceId);
  }
}
