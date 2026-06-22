import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, switchMap } from 'rxjs';
import { Course } from '../../models/course.model';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { HighlightDirective } from '../../directives/highlight.directive';
import { EnrollmentService } from '../../services/enrollment.service';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesError, selectCoursesLoading } from '../../store/course/course.selectors';

@Component({ selector: 'app-course-list', standalone: true, imports: [NgIf, NgFor, AsyncPipe, FormsModule, CourseCardComponent, HighlightDirective], templateUrl: './course-list.component.html', styleUrl: './course-list.component.css' })
export class CourseListComponent implements OnInit {
  courses$!: Observable<Course[]>; loading$ = this.store.select(selectCoursesLoading); error$ = this.store.select(selectCoursesError); selectedCourseId?: number; searchTerm = '';
  constructor(private store: Store, private router: Router, private route: ActivatedRoute, private enrollmentService: EnrollmentService) {}
  ngOnInit(): void { this.searchTerm = this.route.snapshot.queryParamMap.get('search') || ''; this.courses$ = this.store.select(selectAllCourses); this.store.dispatch(loadCourses()); }
  trackByCourseId(index: number, course: Course): number { return course.id; } // trackBy lets Angular reuse DOM nodes and update only changed items instead of re-rendering the full list.
  onEnroll(courseId: number): void { console.log('Enrolling in course: ' + courseId); this.selectedCourseId = courseId; }
  openCourse(course: Course): void { this.router.navigate(['courses', course.id]); }
  applySearch(): void { this.router.navigate(['courses'], { queryParams: { search: this.searchTerm || null } }); }
  loadStudentsForSelected(courseId$: Observable<number>) { return courseId$.pipe(switchMap(courseId => this.enrollmentService.getStudentsByCourse(courseId))); } // switchMap cancels the previous inner HTTP Observable when a new courseId arrives, preventing stale responses.
}
