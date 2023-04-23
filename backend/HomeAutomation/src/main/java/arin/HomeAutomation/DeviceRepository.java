package arin.HomeAutomation;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DeviceRepository extends MongoRepository<Device, String> {

    //Retrieve all devices
    List<Device> findAll();

    //Retrieve Device by Id
    Optional<Device> findById(String id);

    //Retrieve devices by Type
    List<Device> findByType(String type);

    //Create new Device
    <S extends Device> S save(S device);

    //Update the properties of an existing device
    <S extends Device> S update(S device);


}
