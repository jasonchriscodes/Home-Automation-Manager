package arin.HomeAutomation;

import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class DeviceServiceImpl implements DeviceService {

  private DeviceRepository deviceRepository;

  public DeviceServiceImpl(DeviceRepository deviceRepository) {
    this.deviceRepository = deviceRepository;
  }

  @Override
  public List<Device> allDevices() {
    return deviceRepository.findAll();
  }

  @Override
  public Device singleDevice(String deviceId) {
    return deviceRepository.findDeviceByDeviceId(deviceId);
  }
}
