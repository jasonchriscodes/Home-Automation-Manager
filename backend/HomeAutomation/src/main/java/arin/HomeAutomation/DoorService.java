package arin.HomeAutomation;

import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class DoorService {

    private final DoorRepository doorRepository;

    public DoorService(DoorRepository doorRepository)
    {
        this.doorRepository = doorRepository;
    }

    //------------------------------------------------------------------------------------------------------------------

    public Door getDoorId(String id)
    {
        return this.doorRepository.findById(id).orElseThrow(() -> new RuntimeException("Door not found"));
    }

    //------------------------------------------------------------------------------------------------------------------

    public List<Door> getAllDoors()
    {
        return this.doorRepository.findAll();
    }

    //------------------------------------------------------------------------------------------------------------------

    public void openDoor(String id)
    {
        Door door = getDoorId(id);
        door.setOpen();
        this.doorRepository.save(door);
    }

    //------------------------------------------------------------------------------------------------------------------

    public void closeDoor(String id)
    {
        Door door = getDoorId(id);
        door.setClosed();
        this.doorRepository.save(door);
    }

}
