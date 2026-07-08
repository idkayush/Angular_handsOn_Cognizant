package com.ayush.advancedmock; 
public class FileService
  { 
    private final FileReader reader; 
    private final FileWriter writer; 
    public FileService(FileReader reader, FileWriter writer)
    {
      this.reader=reader;this.writer=writer;
    }
    public String processFile()
    { 
      String result="Processed "+reader.read();
      writer.write(result); 
      return result; 
    }
  }
