package arin.HomeAutomation.service;

import arin.HomeAutomation.model.Device;

import java.util.List;

public interface DeviceService {

    Device create(Device blog);

    List<Device> findByTitle(String title);

    List<Device> findAll();

    void delete(String id);

    Device update(Device blog);

    Device findById(String id);
}
