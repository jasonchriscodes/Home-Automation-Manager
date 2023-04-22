package arin.HomeAutomation;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CurtainRepository extends MongoRepository<Curtain, String> {
}
