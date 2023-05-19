package arin.HomeAutomation.controller;

import arin.HomeAutomation.model.Device;
import arin.HomeAutomation.service.DeviceService;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DeviceController {

  @Autowired
  private DeviceService deviceService;

  @GetMapping("/all")
  public List<Device> getAllDevices() {
    return deviceService.findAll();
  }

  @GetMapping("/name/{deviceName}")
  public List<Device> getDeviceByTitle(@PathVariable String deviceName) {
    return deviceService.findByName(deviceName);
  }

  @GetMapping("/id/{id}")
  public Device getDeviceById(@PathVariable String id) {
    return deviceService.findById(id);
  }

  @PostMapping("/create")
  public Device create(@RequestBody Device device) {
    device.setDeviceId(UUID.randomUUID().toString());
    return deviceService.create(device);
  }

  @PutMapping("/update")
  public Device update(@RequestBody Device device) {
    return deviceService.update(device);
  }

  @PutMapping("/update/{id}")
  public Device updateDeviceById(
    @PathVariable String id,
    @RequestBody String status
  ) {
    Device device = deviceService.findById(id);

    // Update the fields of the existing entity with the new values
    device.setStatus(status);

    // Save the updated entity
    return deviceService.update(device);
  }

  @DeleteMapping("/delete/{id}")
  @ResponseStatus(HttpStatus.OK)
  public void deleteById(@PathVariable String id) {
    deviceService.delete(id);
  }
}
