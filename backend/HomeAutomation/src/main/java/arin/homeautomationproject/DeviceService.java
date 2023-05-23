package arin.homeautomationproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DeviceService {

    @Autowired
    private DeviceRepository deviceRepository;

    public List<Device> getAllDevices()
    {
        return deviceRepository.findAll();
    }

    //------------------------------------------------------------------------------------------------------------------

    public Optional<Device> getDeviceById(String id)
    {
        return deviceRepository.findById(id);
    }

    //------------------------------------------------------------------------------------------------------------------

    public Device updateDeviceStatus(String id, String status) {
        Optional<Device> optionalDevice = deviceRepository.findById(id);
        if (optionalDevice.isPresent()) {
            Device device = optionalDevice.get();
            device.setNewStatus(status);
            return deviceRepository.save(device);
        } else {
            throw new IllegalArgumentException("No device with ID " + id);
        }
    }

    //------------------------------------------------------------------------------------------------------------------

    public Device updateDeviceTimeOn(String id, String timeOn)
    {
        Optional<Device> optionalDevice = deviceRepository.findById(id);

        if(optionalDevice.isPresent())
        {
            Device device = optionalDevice.get();
            device.setNewTimeOn(timeOn);
            return deviceRepository.save(device);
        }
        else
        {
            throw new IllegalArgumentException("No device with ID " + id);
        }
    }

    //------------------------------------------------------------------------------------------------------------------

    public Device updateDeviceTimeOff(String id, String timeOff)
    {
        Optional<Device> optionalDevice = deviceRepository.findById(id);

        if(optionalDevice.isPresent())
        {
            Device device = optionalDevice.get();
            device.setNewTimeOff(timeOff);
            return deviceRepository.save(device);
        }
        else
        {
            throw new IllegalArgumentException("No device with ID " + id);
        }
    }

}