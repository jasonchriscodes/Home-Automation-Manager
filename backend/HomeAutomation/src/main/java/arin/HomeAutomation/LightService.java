package arin.HomeAutomation;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LightService {

    private final LightRepository lightRepository;

    public LightService(LightRepository lightRepository)
    {
        this.lightRepository = lightRepository;
        this.createLight();
    }

    //------------------------------------------------------------------------------------------------------------------

    public void createLight()
    {
        Light light1 = new Light("living room", "light");
    }


    //------------------------------------------------------------------------------------------------------------------

    public Light getLightID(String id)
    {
        return this.lightRepository.findById(id).orElseThrow(() -> new RuntimeException("Light not found"));
    }

    //------------------------------------------------------------------------------------------------------------------

    public List<Light> getAllLights()
    {
        return this.lightRepository.findAll();
    }

    //------------------------------------------------------------------------------------------------------------------

    public void turnLightOn(String id)
    {
        Light light = getLightID(id);
        light.setOn();
        this.lightRepository.save(light);
    }

    //------------------------------------------------------------------------------------------------------------------

    public void turnLightOff(String id)
    {
        Light light = getLightID(id);
        light.setOff();
        this.lightRepository.save(light);
    }
}
