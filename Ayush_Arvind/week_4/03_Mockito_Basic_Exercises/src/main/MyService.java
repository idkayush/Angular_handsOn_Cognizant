package com.ayush.mockito; 
public class MyService
{ 
private final ExternalApi api; 
public MyService(ExternalApi api)
{
    this.api=api;
}
public String fetchData()
{ 
    return api.getData();
}
public void publish(String data)
{ 
    api.sendData(data); 
} 
public void clearData()
{ 
    api.clear();
} 
public String fetchTwice()
{ 
    return api.getData()+" | "+api.getData(); 
}
}