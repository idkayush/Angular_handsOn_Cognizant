import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
@Component({ selector:'app-course-detail', standalone:true, imports:[NgIf, RouterLink], templateUrl:'./course-detail.component.html' })
export class CourseDetailComponent implements OnInit { course?: Course; error = ''; constructor(private route: ActivatedRoute, private courseService: CourseService) {} ngOnInit(): void { const id = Number(this.route.snapshot.paramMap.get('id')); this.course = this.courseService.getLocalCourseById(id); this.courseService.getCourseById(id).subscribe({ next: c => this.course = c, error: err => this.error = err.message }); } }
