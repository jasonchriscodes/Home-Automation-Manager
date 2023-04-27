package arin.HomeAutomation;

import java.util.List;
import org.springframework.stereotype.Service;

@Service
public interface DeviceService {
  List<Device> findAll();
  Device findById(String deviceId);
  Device updateDeviceStatus(Device device);
}
