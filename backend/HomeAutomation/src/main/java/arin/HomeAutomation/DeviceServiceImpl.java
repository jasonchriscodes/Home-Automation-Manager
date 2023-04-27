package arin.HomeAutomation;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeviceServiceImpl implements DeviceService {

  @Autowired
  private DeviceRepository deviceRepository;

  public DeviceServiceImpl(DeviceRepository deviceRepository) {
    this.deviceRepository = deviceRepository;
  }

  @Override
  public List<Device> findAll() {
    return deviceRepository.findAll();
  }

  @Override
  public Device findById(String deviceId) {
    return deviceRepository.findById(deviceId).get();
  }

  @Override
  public Device updateDeviceStatus(Device device) {
    return deviceRepository.save(device);
  }
}
