package arin.HomeAutomation;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/light")
public class deviceController {

    @GetMapping
    public String allLights()
    {
        return "testing working lights";
    }
}
