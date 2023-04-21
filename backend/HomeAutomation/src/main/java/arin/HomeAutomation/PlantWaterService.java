package arin.HomeAutomation;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlantWaterService {

    private final PlantWaterRepository plantWaterRepository;

    public PlantWaterService(PlantWaterRepository plantWaterRepository)
    {
        this.plantWaterRepository = plantWaterRepository;
    }

    //------------------------------------------------------------------------------------------------------------------

    public PlantWater getPlantWaterID(String id)
    {
        return this.plantWaterRepository.findById(id).orElseThrow(() -> new RuntimeException("Plant Water not found"));
    }

    //------------------------------------------------------------------------------------------------------------------

    public List<PlantWater> getAllPlantWater()
    {
        return this.plantWaterRepository.findAll();
    }

    //------------------------------------------------------------------------------------------------------------------

    public void turnOnPlantWater(String id)
    {
        PlantWater plantWater = getPlantWaterID(id);
        plantWater.setWatering();
        this.plantWaterRepository.save(plantWater);
    }

    //------------------------------------------------------------------------------------------------------------------

    public void turnOffPlantWater(String id)
    {
        PlantWater plantWater = getPlantWaterID(id);
        plantWater.setWateringOff();
        this.plantWaterRepository.save(plantWater);
    }
}
