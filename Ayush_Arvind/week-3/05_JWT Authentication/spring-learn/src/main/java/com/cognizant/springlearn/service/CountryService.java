package com.cognizant.springlearn.service;
import java.util.*;
import org.springframework.stereotype.Service;
import com.cognizant.springlearn.model.Country;
@Service
public class CountryService {
    private final List<Country> countries = new ArrayList<>(List.of(
        new Country("US", "United States"), new Country("DE", "Germany"),
        new Country("IN", "India"), new Country("JP", "Japan")
    ));
    public List<Country> getAllCountries(){ return countries; }
    public Country getCountry(String code){ return countries.stream().filter(c -> c.getCode().equalsIgnoreCase(code)).findFirst().orElseThrow(() -> new NoSuchElementException("Country not found")); }
    public Country addCountry(Country country){ countries.add(country); return country; }
    public Country updateCountry(Country country){ deleteCountry(country.getCode()); countries.add(country); return country; }
    public void deleteCountry(String code){ countries.removeIf(c -> c.getCode().equalsIgnoreCase(code)); }
}
