package arin.HomeAutomation;

import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceRepository extends MongoRepository<Device, String> {
  //Retrieve all devices
  List<Device> findAll();

  //Retrieve Device by Id
  @Query(value = "{ '_id' : ?0 }")
  Optional<Device> findById(String id);

  //Retrieve devices by Type
  List<Device> findByType(String type);

  //Create new Device
  <S extends Device> S save(S device);
}
