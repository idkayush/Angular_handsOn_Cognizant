package com.ayush.springtest;
import org.springframework.data.jpa.repository.JpaRepository; 
import java.util.*;
public interface UserRepository extends JpaRepository<User,Long>
{ 
  List<User> findByName(String name);
}
