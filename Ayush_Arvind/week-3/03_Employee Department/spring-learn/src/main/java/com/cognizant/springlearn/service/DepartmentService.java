package com.cognizant.springlearn.service;
import java.util.*; import org.springframework.stereotype.Service; import com.cognizant.springlearn.dao.DepartmentDao; import com.cognizant.springlearn.model.Department;
@Service public class DepartmentService { private final DepartmentDao dao; public DepartmentService(DepartmentDao dao){this.dao=dao;} public List<Department> getAllDepartments(){ return dao.getAllDepartments(); } }
