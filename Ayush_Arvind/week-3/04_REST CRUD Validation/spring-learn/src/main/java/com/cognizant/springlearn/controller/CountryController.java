package com.cognizant.springlearn.controller;
import java.util.*; import jakarta.validation.Valid; import org.slf4j.*; import org.springframework.http.*; import org.springframework.web.bind.annotation.*;
import com.cognizant.springlearn.model.Country; import com.cognizant.springlearn.service.CountryService;
@RestController @RequestMapping("/countries")
public class CountryController {
 private static final Logger LOGGER=LoggerFactory.getLogger(CountryController.class); private final CountryService service; public CountryController(CountryService service){this.service=service;}
 @GetMapping public List<Country> getAllCountries(){ LOGGER.info("START"); LOGGER.info("END"); return service.getAllCountries(); }
 @GetMapping("/{code}") public Country getCountry(@PathVariable String code){ return service.getCountry(code); }
 @PostMapping public ResponseEntity<Country> addCountry(@Valid @RequestBody Country country){ LOGGER.info("START addCountry {}", country); Country saved=service.addCountry(country); LOGGER.info("END addCountry"); return ResponseEntity.status(HttpStatus.CREATED).body(saved); }
 @PutMapping public Country updateCountry(@Valid @RequestBody Country country){ LOGGER.info("START updateCountry"); return service.updateCountry(country); }
 @DeleteMapping("/{code}") public ResponseEntity<Void> deleteCountry(@PathVariable String code){ LOGGER.info("START deleteCountry"); service.deleteCountry(code); return ResponseEntity.noContent().build(); }
}
