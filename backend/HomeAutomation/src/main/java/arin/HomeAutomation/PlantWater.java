package arin.HomeAutomation;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "plant waters")
public class PlantWater {

    private String room;
    private String plant;
    @Id
    private int id;
    private int timesWatered;
    private boolean isWatering;

    public PlantWater(String room, String plant, int id)
    {
        this.setRoom(room);
        this.setPlant(plant);
        this.setId(id);

        this.timesWatered = 0;
        this.isWatering = false;
    }

    //------------------------------------------------------------------------------------------------------------------

    private void setRoom(String room)
    {
        this.room = room;
    }

    //------------------------------------------------------------------------------------------------------------------

    private void setPlant(String plant)
    {
        this.plant = plant;
    }

    //------------------------------------------------------------------------------------------------------------------

    private void setId(int id)
    {
        this.id = id;
    }

    //------------------------------------------------------------------------------------------------------------------

    public String getRoom()
    {
        return this.room;
    }

    //------------------------------------------------------------------------------------------------------------------

    public String getPlant()
    {
        return this.plant;
    }

    //------------------------------------------------------------------------------------------------------------------

    public int getId()
    {
        return this.id;
    }

    //------------------------------------------------------------------------------------------------------------------

    public boolean getIsWatering()
    {
        return this.isWatering;
    }

    //------------------------------------------------------------------------------------------------------------------

    public void setWatering()
    {
        this.isWatering = true;
        this.timesWatered++;
    }

    //------------------------------------------------------------------------------------------------------------------

    public void setWateringOff()
    {
        this.isWatering = false;
    }

    //------------------------------------------------------------------------------------------------------------------

    public int getTimesWatered()
    {
        return this.timesWatered;
    }

}
