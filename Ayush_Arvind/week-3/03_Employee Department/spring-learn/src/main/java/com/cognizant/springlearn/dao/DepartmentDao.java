package com.cognizant.springlearn.dao;
import java.util.*; import org.springframework.stereotype.Repository; import com.cognizant.springlearn.model.Department;
@Repository public class DepartmentDao { public static final List<Department> DEPARTMENT_LIST = new ArrayList<>(List.of(new Department(1,"Technology"), new Department(2,"HR"), new Department(3,"Finance"))); public List<Department> getAllDepartments(){ return DEPARTMENT_LIST; } }
