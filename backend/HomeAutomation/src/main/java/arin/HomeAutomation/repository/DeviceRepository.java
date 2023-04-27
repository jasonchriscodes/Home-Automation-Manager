package arin.HomeAutomation.repository;

import arin.HomeAutomation.model.Device;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceRepository extends MongoRepository<Device, String> {
  @Query("{'deviceName':?0}")
  public List<Device> findByName(String deviceName);
}
