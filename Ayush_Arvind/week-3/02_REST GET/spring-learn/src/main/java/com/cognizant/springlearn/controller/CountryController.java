package com.cognizant.springlearn.controller;
import java.util.*; import org.slf4j.*; import org.springframework.web.bind.annotation.*;
import com.cognizant.springlearn.model.Country; import com.cognizant.springlearn.service.CountryService;
@RestController
public class CountryController {
    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);
    private final CountryService countryService;
    public CountryController(CountryService countryService){ this.countryService = countryService; }
    @RequestMapping("/country") public Country getCountryIndia(){ LOGGER.info("START"); Country c=countryService.getCountry("IN"); LOGGER.info("END"); return c; }
    @GetMapping("/countries") public List<Country> getAllCountries(){ LOGGER.info("START"); LOGGER.info("END"); return countryService.getAllCountries(); }
    @GetMapping("/countries/{code}") public Country getCountry(@PathVariable String code){ LOGGER.info("START"); Country c=countryService.getCountry(code); LOGGER.info("END"); return c; }
}
