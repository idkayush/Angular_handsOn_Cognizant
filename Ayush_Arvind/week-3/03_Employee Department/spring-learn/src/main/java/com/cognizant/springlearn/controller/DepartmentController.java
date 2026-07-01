package com.cognizant.springlearn.controller;
import java.util.*; import org.springframework.web.bind.annotation.*; import com.cognizant.springlearn.model.Department; import com.cognizant.springlearn.service.DepartmentService;
@RestController public class DepartmentController { private final DepartmentService service; public DepartmentController(DepartmentService service){this.service=service;} @GetMapping("/departments") public List<Department> getAllDepartments(){ return service.getAllDepartments(); } }
