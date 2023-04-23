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
    return deviceService.allDevices();
  }

  @GetMapping("/devices/{deviceId}")
  public ResponseEntity<Device> getSingleDevice(@PathVariable String deviceId) {
    Device device = null;
    device = deviceService.singleDevice(deviceId);
    return ResponseEntity.ok(device);
  }
  // @PutMapping("/{deviceId}")
  // ResponseEntity<Device> updateDeviceStatus(
  //   @PathVariable String deviceId,
  //   @RequestBody Device device
  // ) {
  //   // device = deviceService.updateDeviceStatus(device, deviceId);
  //   return new ResponseEntity<Device>(
  //     deviceService.updateDeviceStatus(device, deviceId), HttpStatus.OK(employee);
  // }
}
