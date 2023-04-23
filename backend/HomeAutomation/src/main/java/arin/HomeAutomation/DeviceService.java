package arin.HomeAutomation;

import java.util.List;
import org.springframework.stereotype.Service;

@Service
public interface DeviceService {
  List<Device> allDevices();
  Device singleDevice(String deviceId);
}
