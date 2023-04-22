package arin.HomeAutomation;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlantWaterRepository extends MongoRepository<PlantWater, String> {
}
