package arin.HomeAutomation.repository;

import arin.HomeAutomation.model.Device;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DeviceRepository extends MongoRepository<Device, String> {
    @Query("{'title':?0}")
    public List<Device> findByTitle(String title);

}
