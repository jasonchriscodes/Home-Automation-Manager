package arin.HomeAutomation;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "rubbish bins")
public class RubbishBin {

    private String room;
    @Id
    private int id;
    private boolean isFull;

    public RubbishBin(String room, int id)
    {
        this.setRoom(room);
        this.setId(id);
        this.isFull = false;
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

    public boolean getIsFull()
    {
        return this.isFull;
    }

    //------------------------------------------------------------------------------------------------------------------

    public void setFull()
    {
        this.isFull = true;
    }

    //------------------------------------------------------------------------------------------------------------------

    public void setEmpty()
    {
        this.isFull = false;
    }

}
