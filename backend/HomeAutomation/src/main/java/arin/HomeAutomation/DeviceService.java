package arin.HomeAutomation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DeviceService {

    @Autowired
    private DeviceRepository deviceRepository;

    public List<Device> getAllDevices() {
        return deviceRepository.findAll();
    }

    // ------------------------------------------------------------------------------------------------------------------

    public Optional<Device> getDeviceById(String id) {
        return deviceRepository.findById(id);
    }

    // ------------------------------------------------------------------------------------------------------------------

    public Device updateDeviceStatus(String id, String status) {
        Optional<Device> optionalDevice = deviceRepository.findById(id);
        if (optionalDevice.isPresent()) {
            Device device = optionalDevice.get();
            device.setStatus(status);
            return deviceRepository.save(device);
        } else {
            throw new IllegalArgumentException("No device with ID " + id);
        }
    }

}
