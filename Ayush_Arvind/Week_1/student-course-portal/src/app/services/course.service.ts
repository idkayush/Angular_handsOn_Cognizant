import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { Course, NewCourse } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private readonly apiUrl = 'http://localhost:3000/courses';
  private fallbackCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Angular Development', code: 'CS202', credits: 3, gradeStatus: 'pending' },
    { id: 3, name: 'Database Systems', code: 'CS203', credits: 4, gradeStatus: 'failed' },
    { id: 4, name: 'Operating Systems', code: 'CS204', credits: 3, gradeStatus: 'passed' },
    { id: 5, name: 'Machine Learning', code: 'CS305', credits: 4, gradeStatus: 'pending' }
  ];

  constructor(private http: HttpClient) {}

  getLocalCourses(): Course[] { return [...this.fallbackCourses]; }
  addLocalCourse(course: Course): void { this.fallbackCourses = [...this.fallbackCourses, course]; }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      map(courses => courses.filter(c => (c.credits ?? 0) > 0)),
      tap(courses => console.log('Courses loaded:', courses.length)), // tap is preferred for logging because map should only transform data.
      retry(2),
      catchError(err => throwError(() => new Error(err?.message || 'Failed to load courses. Please try again.')))
    );
  }

  getCourseById(id: number): Observable<Course> { return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(catchError(err => throwError(() => new Error(err?.message || 'Failed to load course.')))); }
  getLocalCourseById(id: number): Course | undefined { return this.fallbackCourses.find(c => c.id === id); }
  createCourse(course: NewCourse): Observable<Course> { return this.http.post<Course>(this.apiUrl, course); }
  updateCourse(id: number, course: Course): Observable<Course> { return this.http.put<Course>(`${this.apiUrl}/${id}`, course); }
  deleteCourse(id: number): Observable<void> { return this.http.delete<void>(`${this.apiUrl}/${id}`); }
}
