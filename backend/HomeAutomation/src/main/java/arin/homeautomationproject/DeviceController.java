package arin.homeautomationproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/devices")
public class DeviceController {

    @Autowired
    private DeviceService deviceService;

    @GetMapping("/")
    public List<Device> getAllDevices() {
        return deviceService.getAllDevices();
    }

    //------------------------------------------------------------------------------------------------------------------

    @GetMapping("/{id}")
    public Optional<Device> getDeviceById(@PathVariable String id) {
        return deviceService.getDeviceById(id);
    }

    //------------------------------------------------------------------------------------------------------------------

    @PutMapping("/{id}/status")
    public Device updateDeviceStatus(@PathVariable String id, @RequestBody Map<String, String> body) {
        String status = body.get("status");
        return deviceService.updateDeviceStatus(id, status);
    }

    //------------------------------------------------------------------------------------------------------------------

    @PutMapping("/{id}/timeOn")
    public Device updateDeviceTimeOn(@PathVariable String id, @RequestBody String timeOn)
    {
        return deviceService.updateDeviceTimeOn(id, timeOn);
    }

    //------------------------------------------------------------------------------------------------------------------

    @PutMapping("/{id}/timeOff")
    public Device updateDeviceTimeOff(@PathVariable String id, @RequestBody String timeOff)
    {
        return deviceService.updateDeviceTimeOff(id, timeOff);
    }

}
