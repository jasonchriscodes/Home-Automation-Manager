package arin.HomeAutomation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/devices")
public class DeviceController {

    @Autowired
    private DeviceService deviceService;

    @GetMapping("/")
    public List<Device> getAllDevices()
    {
        return deviceService.getAllDevices();
    }

    //------------------------------------------------------------------------------------------------------------------

    @GetMapping("/{id}")
    public Optional<Device> getDeviceById(@PathVariable String id)
    {
        return deviceService.getDeviceById(id);
    }

    //------------------------------------------------------------------------------------------------------------------

//    @PutMapping("/{id}/status")
//    public ResponseEntity<String> updateDeviceStatus(@PathVariable String id, @RequestBody String status)
//    {
//        Device updatedDevice = deviceService.updateDeviceStatus(id, status);
//        if(updatedDevice != null)
//        {
//            return ResponseEntity.ok("Device Status Updated");
//        }
//        return ResponseEntity.notFound().build();
//    }

    @PutMapping("/{id}/status")
    public Device updateDeviceStatus(@PathVariable String id, @RequestBody String status) {
        return deviceService.updateDeviceStatus(id, status);
    }



}
