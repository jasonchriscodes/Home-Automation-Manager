package arin.HomeAutomation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/devices")
public class DeviceController {

    private final LightService lightService;

    @Autowired
    public DeviceController(LightService lightService) {
        this.lightService = lightService;
    }

    @GetMapping("/lights")
    public List<Light> getAllLights() {
        return this.lightService.getAllLights();
    }

    @PutMapping("/lights/{id}/on")
    public Light turnLightOn(@PathVariable String id) {
        this.lightService.turnLightOn(id);
        return this.lightService.getLightID(id);
    }

    @PutMapping("/lights/{id}/off")
    public Light turnLightOff(@PathVariable String id) {
        this.lightService.turnLightOff(id);
        return this.lightService.getLightID(id);
    }
}