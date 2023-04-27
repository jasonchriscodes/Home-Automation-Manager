package arin.HomeAutomation;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class DeviceController {

  @Autowired
  private DeviceService deviceService;

  public DeviceController(DeviceService deviceService) {
    this.deviceService = deviceService;
  }

  @GetMapping("/devices")
  public List<Device> getAllDevices() {
    return deviceService.findAll();
  }

  @GetMapping("/devices/{deviceId}")
  public Device getDeviceById(@PathVariable String deviceId) {
    return deviceService.findById(deviceId);
  }

  @PutMapping("/update")
  public Device updateDeviceStatus(@RequestBody Device device) {
    return deviceService.updateDeviceStatus(device);
  }
}
