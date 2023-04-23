package arin.HomeAutomation;

import org.springframework.data.annotation.Id;

public abstract class Device {

    @Id
    private String id;
    private String name;
    private String type;
    private String status;

    public Device(String id, String name, String type, String status)
    {
        this.setId(id);
        this.setName(name);
        this.setType(type);
        this.setStatus(status);
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

    public void setStatus(String status)
    {
        this.status = status;
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

    public String getStatus()
    {
        return this.status;
    }
}
