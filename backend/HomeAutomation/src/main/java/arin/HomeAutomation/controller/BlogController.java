package arin.HomeAutomation.controller;

import arin.HomeAutomation.model.Blog;
import arin.HomeAutomation.service.IBlogService;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class BlogController {

  @Autowired
  private IBlogService blogService;

  @GetMapping("/all")
  public List<Blog> getAllBlogs() {
    return blogService.findAll();
  }

  @GetMapping("/title/{title}")
  public List<Blog> getBlogsByTitle(@PathVariable String title) {
    return blogService.findByTitle(title);
  }

  @GetMapping("/id/{id}")
  public Blog getBlogsById(@PathVariable String id) {
    return blogService.findById(id);
  }

  @PostMapping("/create")
  public Blog create(@RequestBody Blog blog) {
    blog.setBlogId(UUID.randomUUID().toString());
    return blogService.create(blog);
  }

  @PutMapping("/update")
  public Blog update(@RequestBody Blog blog) {
    return blogService.update(blog);
  }

  @DeleteMapping("/delete/{id}")
  @ResponseStatus(HttpStatus.OK)
  public void deleteById(@PathVariable String id) {
    blogService.delete(id);
  }
}
