package arin.HomeAutomation;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RubbishBinService {

    private final RubbishBinRepository rubbishBinRepository;

    public RubbishBinService(RubbishBinRepository rubbishBinRepository)
    {
        this.rubbishBinRepository = rubbishBinRepository;
    }

    //------------------------------------------------------------------------------------------------------------------

    public RubbishBin getRubbishBinID(String id)
    {
        return this.rubbishBinRepository.findById(id).orElseThrow(() -> new RuntimeException("Rubbish Bin not found"));
    }

    //------------------------------------------------------------------------------------------------------------------

    public List<RubbishBin> getAllRubbishBins()
    {
        return this.rubbishBinRepository.findAll();
    }

    //------------------------------------------------------------------------------------------------------------------

    public void setFull(String id)
    {
        RubbishBin rubbishBin = getRubbishBinID(id);
        rubbishBin.setFull();
        this.rubbishBinRepository.save(rubbishBin);
    }

    //------------------------------------------------------------------------------------------------------------------

    public void setEmpty(String id)
    {
        RubbishBin rubbishBin = getRubbishBinID(id);
        rubbishBin.setFull();
        this.rubbishBinRepository.save(rubbishBin);
    }

}
