package arin.HomeAutomation;

public class Light extends Device{

    private String status;

    public Light(String id, String name, String type, String status)
    {
        super(id, name, type, status);
    }

}
