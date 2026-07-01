package com.cognizant.springlearn;
import org.junit.jupiter.api.Test; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc; import org.springframework.boot.test.context.SpringBootTest; import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get; import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
@SpringBootTest @AutoConfigureMockMvc
class SpringLearnApplicationTests {
 @Autowired MockMvc mvc;
 @Test void helloWorks() throws Exception { mvc.perform(get("/hello")).andExpect(status().isOk()).andExpect(content().string("Hello World!!")); }
 @Test void countryWorks() throws Exception { mvc.perform(get("/country")).andExpect(status().isOk()).andExpect(jsonPath("$.code").value("IN")); }
 @Test void countriesWorks() throws Exception { mvc.perform(get("/countries")).andExpect(status().isOk()).andExpect(jsonPath("$[0].code").exists()); }
}
