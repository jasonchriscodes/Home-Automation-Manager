package arin.HomeAutomation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeviceService {

    @Autowired
    private DeviceRepository deviceRepository;

    public List<Device> getAllDevices()
    {
        return deviceRepository.findAll();
    }

    //------------------------------------------------------------------------------------------------------------------

    public Device getDeviceById(String id)
    {
        return deviceRepository.findById(id).orElse(null);
    }

    //------------------------------------------------------------------------------------------------------------------

    public Device updateDeviceStatus(String id, String status)
    {
        Device device = deviceRepository.findById(id).orElseThrow();
        device.setStatus(status);
        return deviceRepository.save(device);
    }

}
