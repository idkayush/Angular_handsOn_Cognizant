package com.ayush.logging; 
import org.slf4j.Logger; 
import org.slf4j.LoggerFactory; 
public class LoggingExample
  {
    private static final Logger logger=LoggerFactory.getLogger(LoggingExample.class);
    public static void main(String[] args)
    {
      logger.error("This is an error message"); 
      logger.warn("This is a warning message"); 
      String user="Ayush"; int attempts=3; 
      logger.info("User {} logged in after {} attempts", user, attempts); 
      logger.debug("Debug log written to console and app.log"); 
    }
  }
