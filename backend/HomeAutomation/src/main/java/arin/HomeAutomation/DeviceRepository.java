package arin.HomeAutomation;

import java.util.Optional;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceRepository extends MongoRepository<Device, ObjectId> {
  Optional<Device> findDeviceByDeviceId(String deviceId);
}
