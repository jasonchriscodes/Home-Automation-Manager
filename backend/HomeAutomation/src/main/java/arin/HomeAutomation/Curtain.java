package arin.HomeAutomation;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "curtains")

public class Curtain {

    private String room;
    @Id
    private String id;
    private boolean isOpen;
    private int timesOpen;

    public Curtain(String room, String id)
    {
        this.setRoom(room);
        this.setId(id);
        this.isOpen = false;
        this.timesOpen = 0;
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

    public boolean getIsOpen()
    {
        return this.isOpen;
    }

    //------------------------------------------------------------------------------------------------------------------

    public void setOpen()
    {
        this.isOpen = true;
        this.timesOpen++;
    }

    //------------------------------------------------------------------------------------------------------------------

    public void setClosed()
    {
        this.isOpen = false;
    }


}
