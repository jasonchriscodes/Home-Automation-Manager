package arin.homeautomationproject;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "devices")
public class Device {

    @Id
    private String id;
    private String name;
    private String type;
    @Field("status")
    private String status;
    @Field("turnOn")
    private String turnOn;
    @Field("turnOff")
    private String turnOff;
    @Field("countOn")
    private String countOn;

    public Device(String id, String name, String type, String status, String turnOn, String turnOff, String countOn)
    {
        this.setId(id);
        this.setName(name);
        this.setType(type);
        this.setStatus(status);
        this.setTurnOn(turnOn);
        this.setNewTimeOff(turnOff);
        this.setCountOn(countOn);
    }

    private void setId(String id)
    {
        this.id = id;
    }

    //------------------------------------------------------------------------------------------------------------------

    private void setName(String name)
    {
        this.name = name;
    }

    //------------------------------------------------------------------------------------------------------------------

    private void setType(String type)
    {
        this.type = type;
    }

    //------------------------------------------------------------------------------------------------------------------

    private void setStatus(String status)
    {
        this.status = status;
    }

    //------------------------------------------------------------------------------------------------------------------

    private void setTurnOn(String turnOn)
    {
        this.turnOn = turnOn;
    }

    //------------------------------------------------------------------------------------------------------------------

    private void setTurnOff(String turnOff)
    {
        this.turnOff = turnOff;
    }

    //------------------------------------------------------------------------------------------------------------------

    private void setCountOn(String countOn)
    {
        this.countOn = countOn;
    }

    //------------------------------------------------------------------------------------------------------------------

    public String getId()
    {
        return this.id;
    }

    //------------------------------------------------------------------------------------------------------------------

    public String getName()
    {
        return this.name;
    }

    //------------------------------------------------------------------------------------------------------------------

    public String getType()
    {
        return this.type;
    }

    //------------------------------------------------------------------------------------------------------------------

    public String getTurnOn()
    {
        return this.turnOn;
    }

    //------------------------------------------------------------------------------------------------------------------

    public String getTurnOff()
    {
        return this.turnOff;
    }

    //------------------------------------------------------------------------------------------------------------------

    public String getCountOn()
    {
        return this.countOn;
    }

    //------------------------------------------------------------------------------------------------------------------

    public void setNewStatus(String status)
    {
        this.checkType(status);
    }

    //------------------------------------------------------------------------------------------------------------------

    private void checkType(String status)
    {
        if(this.type.equalsIgnoreCase("light"))
        {
            this.setLightStatus(status);
        }

        if(this.type.equalsIgnoreCase("curtain"))
        {
            this.setCurtainStatus(status);
        }

        if(this.type.equalsIgnoreCase("plantWaterer"))
        {
            this.setPlantWatererStatus(status);
        }

        if(this.type.equalsIgnoreCase("door"))
        {
            this.setDoorStatus(status);
        }

        if(this.type.equalsIgnoreCase("bin"))
        {
            this.setBinStatus(status);
        }
    }

    //------------------------------------------------------------------------------------------------------------------

    public void setNewTimeOn(String turnOn)
    {
        this.turnOn = turnOn;
    }

    //------------------------------------------------------------------------------------------------------------------

    public void setNewTimeOff(String turnOff)
    {
        this.turnOff = turnOff;
    }

    //------------------------------------------------------------------------------------------------------------------

    private void updateCount() {
        int num = 0;
        if (this.countOn != null) {
            num = Integer.parseInt(this.countOn);
        }
        num++;
        this.countOn = Integer.toString(num);
    }

    //------------------------------------------------------------------------------------------------------------------

    private void setLightStatus(String status)
    {
        if(this.status.equalsIgnoreCase("on"))
        {
            this.status =  "off";
        }
        else
        {
            this.status = "on";
            this.updateCount();
        }
    }

    //------------------------------------------------------------------------------------------------------------------

    private void setCurtainStatus(String status)
    {
        if(this.status.equalsIgnoreCase("open"))
        {
            this.status = "close";
        }
        else
        {
            this.status = "open";
            this.updateCount();
        }
    }

    //------------------------------------------------------------------------------------------------------------------

    private void setPlantWatererStatus(String status)
    {
        if(this.status.equalsIgnoreCase("on"))
        {
            this.status = "off";
        }
        else
        {
            this.status = "on";
            this.updateCount();
        }
    }

    //------------------------------------------------------------------------------------------------------------------

    private void setDoorStatus(String status)
    {
        if(this.status.equalsIgnoreCase("open"))
        {
            this.status = "closed";
        }
        else
        {
            this.status = "open";
            this.updateCount();
        }
    }

    //------------------------------------------------------------------------------------------------------------------

    private void setBinStatus(String status)
    {
        if(this.status.equalsIgnoreCase("full"))
        {
            this.status = "empty";
        }
        else
        {
            this.status = "full";
            this.updateCount();
        }
    }



}