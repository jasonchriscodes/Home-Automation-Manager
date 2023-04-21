package arin.HomeAutomation;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "water bowls")
public class WaterBowl {

    private String room;
    @Id
    private int id;
    private int timesRefilled;
    private boolean isEmpty;

    public WaterBowl(String room, int id)
    {
        this.setRoom(room);
        this.setId(id);

        this.timesRefilled = 0;
        this.isEmpty = false;
    }

    //------------------------------------------------------------------------------------------------------------------

    private void setRoom(String room)
    {
        this.room = room;
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

    public int getId()
    {
        return this.id;
    }

    //------------------------------------------------------------------------------------------------------------------

    public boolean getIsEmpty()
    {
        return this.isEmpty;
    }

    //------------------------------------------------------------------------------------------------------------------

    public void refill()
    {
        this.isEmpty = true;
        this.timesRefilled++;
    }

    //------------------------------------------------------------------------------------------------------------------

    public void refillOff()
    {
        this.isEmpty = false;
    }

    //------------------------------------------------------------------------------------------------------------------

    public int getTimesRefilled()
    {
        return this.timesRefilled;
    }


}
