package com.cognizant.springlearn.controller;
import java.util.*; import org.springframework.web.bind.annotation.*; import com.cognizant.springlearn.model.Country; import com.cognizant.springlearn.service.CountryService;
@RestController public class CountryController { private final CountryService service; public CountryController(CountryService service){this.service=service;} @GetMapping("/countries") public List<Country> getAllCountries(){ return service.getAllCountries(); } }
