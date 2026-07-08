package com.ayush.advancedmock; 
public class Service
  {
    private final Repository repository;
    public Service(Repository repository)
    {
      this.repository=repository;
    }
    public String processData()
    {
      return "Processed "+repository.getData();
    }
  }
