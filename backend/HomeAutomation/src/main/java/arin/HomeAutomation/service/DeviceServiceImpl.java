package arin.HomeAutomation.service;

import arin.HomeAutomation.model.Device;
import arin.HomeAutomation.repository.DeviceRepository;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class DeviceServiceImpl implements DeviceService {

  @Autowired
  private DeviceRepository deviceRepository;

  @Override
  public Device create(Device device) {
    return deviceRepository.save(device);
  }

  @Override
  public List<Device> findByName(String deviceName) {
    log.info("####### FIND BY NAME {} ", deviceName);
    List<Device> deviceList = deviceRepository.findByName(deviceName);
    log.info("####### FIND BY deviceList {} ", deviceList);
    return deviceList;
  }

  @Override
  public List<Device> findAll() {
    return deviceRepository.findAll();
  }

  @Override
  public void delete(String id) {
    deviceRepository.deleteById(id);
  }

  @Override
  public Device update(Device device) {
    return deviceRepository.save(device);
  }

  @Override
  public Device findById(String id) {
    return deviceRepository.findById(id).get();
  }
}
