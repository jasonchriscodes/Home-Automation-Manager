package arin.HomeAutomation.service;

import arin.HomeAutomation.model.Blog;
import arin.HomeAutomation.repository.BlogRepository;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class BlogService implements IBlogService {

  @Autowired
  private BlogRepository blogRepository;

  @Override
  public Blog create(Blog blog) {
    return blogRepository.save(blog);
  }

  @Override
  public List<Blog> findByTitle(String title) {
    log.info("####### FIND BY TITLE {} ", title);
    List<Blog> blogList = blogRepository.findByTitle(title);
    log.info("####### FIND BY blogList {} ", blogList);
    return blogList;
  }

  @Override
  public List<Blog> findAll() {
    return blogRepository.findAll();
  }

  @Override
  public void delete(String id) {
    blogRepository.deleteById(id);
  }

  @Override
  public Blog update(Blog blog) {
    return blogRepository.save(blog);
  }

  @Override
  public Blog findById(String id) {
    return blogRepository.findById(id).get();
  }
}
