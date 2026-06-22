import { Component } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { EnrollmentService } from '../../services/enrollment.service';
import { selectEnrolledCourses } from '../../store/enrollment/enrollment.selectors';
@Component({ selector:'app-student-profile', standalone:true, imports:[NgFor, NgIf, AsyncPipe], templateUrl:'./student-profile.component.html' })
export class StudentProfileComponent { enrolledCourses = this.enrollmentService.getEnrolledCourses(); enrolledCourses$ = this.store.select(selectEnrolledCourses); constructor(private enrollmentService: EnrollmentService, private store: Store) {} }
