package arin.HomeAutomation.controller;

import arin.HomeAutomation.model.Device;
import arin.HomeAutomation.service.DeviceService;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class DeviceController {

  @Autowired
  private DeviceService blogService;

  @GetMapping("/all")
  public List<Device> getAllBlogs() {
    return blogService.findAll();
  }

  @GetMapping("/title/{title}")
  public List<Device> getBlogsByTitle(@PathVariable String title) {
    return blogService.findByTitle(title);
  }

  @GetMapping("/id/{id}")
  public Device getBlogsById(@PathVariable String id) {
    return blogService.findById(id);
  }

  @PostMapping("/create")
  public Device create(@RequestBody Device blog) {
    blog.setBlogId(UUID.randomUUID().toString());
    return blogService.create(blog);
  }

  @PutMapping("/update")
  public Device update(@RequestBody Device blog) {
    return blogService.update(blog);
  }

  @DeleteMapping("/delete/{id}")
  @ResponseStatus(HttpStatus.OK)
  public void deleteById(@PathVariable String id) {
    blogService.delete(id);
  }
}
