package arin.HomeAutomation;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceRepository extends MongoRepository<Device, ObjectId> {
  Device findDeviceByDeviceId(String deviceId);
}
