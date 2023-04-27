package arin.HomeAutomation.service;

import arin.HomeAutomation.model.Device;
import java.util.List;

public interface DeviceService {
  Device create(Device device);

  List<Device> findByName(String deviceName);

  List<Device> findAll();

  void delete(String id);

  Device update(Device device);

  Device findById(String id);
}
