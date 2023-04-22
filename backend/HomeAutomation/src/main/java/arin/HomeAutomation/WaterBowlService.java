package arin.HomeAutomation;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WaterBowlService {

    private final WaterBowlRepository waterBowlRepository;

    public WaterBowlService(WaterBowlRepository waterBowlRepository)
    {
        this.waterBowlRepository = waterBowlRepository;
    }

    //------------------------------------------------------------------------------------------------------------------

    public WaterBowl getWaterBowlID(String id)
    {
        return this.waterBowlRepository.findById(id).orElseThrow(() -> new RuntimeException("Water Bowl not found"));
    }

    //------------------------------------------------------------------------------------------------------------------

    public List<WaterBowl> getAllWaterBowls()
    {
        return this.waterBowlRepository.findAll();
    }

    //------------------------------------------------------------------------------------------------------------------

    public void refill(String id)
    {
        WaterBowl waterBowl = getWaterBowlID(id);
        waterBowl.refill();
        this.waterBowlRepository.save(waterBowl);
    }

}
