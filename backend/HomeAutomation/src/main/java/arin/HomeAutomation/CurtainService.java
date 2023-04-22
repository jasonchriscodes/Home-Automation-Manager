package arin.HomeAutomation;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CurtainService {

    private final CurtainRepository curtainRepository;

    public CurtainService(CurtainRepository curtainRepository)
    {
        this.curtainRepository = curtainRepository;
    }

    //------------------------------------------------------------------------------------------------------------------

    public Curtain getCurtainId(String id)
    {
        return this.curtainRepository.findById(id).orElseThrow(() -> new RuntimeException("Curtain not found"));
    }

    //------------------------------------------------------------------------------------------------------------------

    public List<Curtain> getAllCurtains()
    {
        return this.curtainRepository.findAll();
    }

    //------------------------------------------------------------------------------------------------------------------

    public void openCurtain(String id)
    {
        Curtain curtain = getCurtainId(id);
        curtain.setOpen();
        this.curtainRepository.save(curtain);
    }

    //------------------------------------------------------------------------------------------------------------------

    public void closeCurtain(String id)
    {
        Curtain curtain = getCurtainId(id);
        curtain.setClosed();
        this.curtainRepository.save(curtain);
    }
}
