package arin.HomeAutomation;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "lights")
public class Light {

    private String room;
    @Id
    private String id;
    private int timesOn;
    private boolean isOn;

    public Light(String room, String id)
    {
        this.setRoom(room);
        this.setId(id);
        this.isOn = false;
        this.timesOn = 0;
    }

    //------------------------------------------------------------------------------------------------------------------

    private void setRoom(String room)
    {
        this.room = room;
    }

    //------------------------------------------------------------------------------------------------------------------

    private void setId(String id)
    {
        this.id = id;
    }

    //------------------------------------------------------------------------------------------------------------------

    public String getRoom()
    {
        return this.room;
    }

    //------------------------------------------------------------------------------------------------------------------

    public String getId()
    {
        return this.id;
    }

    //------------------------------------------------------------------------------------------------------------------

    public boolean getIsOn()
    {
        return this.isOn;
    }

    //------------------------------------------------------------------------------------------------------------------

    public void setOff()
    {
        this.isOn = false;
    }

    //------------------------------------------------------------------------------------------------------------------

    public void setOn()
    {
        this.isOn = true;
        this.timesOn++;
    }

    //------------------------------------------------------------------------------------------------------------------

    public int getTimesOn()
    {
        return this.timesOn;
    }

}
