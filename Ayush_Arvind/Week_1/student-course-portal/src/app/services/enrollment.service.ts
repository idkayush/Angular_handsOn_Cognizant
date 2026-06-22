import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Course } from '../models/course.model';
import { Student } from '../models/student.model';
import { CourseService } from './course.service';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private enrolledCourseIds: number[] = [1, 2];
  private readonly apiUrl = 'http://localhost:3000';
  constructor(private courseService: CourseService, private http: HttpClient) {}
  enroll(courseId: number): void { if (!this.enrolledCourseIds.includes(courseId)) this.enrolledCourseIds = [...this.enrolledCourseIds, courseId]; }
  unenroll(courseId: number): void { this.enrolledCourseIds = this.enrolledCourseIds.filter(id => id !== courseId); }
  isEnrolled(courseId: number): boolean { return this.enrolledCourseIds.includes(courseId); }
  getEnrolledCourses(): Course[] { return this.enrolledCourseIds.map(id => this.courseService.getLocalCourseById(id)).filter((c): c is Course => !!c); }
  getStudentsByCourse(courseId: number): Observable<Student[]> { return this.http.get<{studentId:number;courseId:number}[]>(`${this.apiUrl}/enrollments?courseId=${courseId}`).pipe(map(() => [{ id: 1, name: 'Ayush Arvind', email: 'ayush.23bce11017@vitbhopal.ac.in', gpa: 3.8 }])); }
}
