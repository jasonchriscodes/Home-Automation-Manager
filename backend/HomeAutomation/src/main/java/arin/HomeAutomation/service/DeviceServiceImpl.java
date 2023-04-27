package arin.HomeAutomation.service;

import arin.HomeAutomation.model.Device;
import arin.HomeAutomation.repository.DeviceRepository;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class DeviceServiceImpl implements DeviceService {

  @Autowired
  private DeviceRepository blogRepository;

  @Override
  public Device create(Device blog) {
    return blogRepository.save(blog);
  }

  @Override
  public List<Device> findByTitle(String title) {
    log.info("####### FIND BY TITLE {} ", title);
    List<Device> blogList = blogRepository.findByTitle(title);
    log.info("####### FIND BY blogList {} ", blogList);
    return blogList;
  }

  @Override
  public List<Device> findAll() {
    return blogRepository.findAll();
  }

  @Override
  public void delete(String id) {
    blogRepository.deleteById(id);
  }

  @Override
  public Device update(Device blog) {
    return blogRepository.save(blog);
  }

  @Override
  public Device findById(String id) {
    return blogRepository.findById(id).get();
  }
}
