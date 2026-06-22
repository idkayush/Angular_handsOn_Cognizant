import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AsyncPipe, NgClass, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Store } from '@ngrx/store';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';

@Component({ selector: 'app-course-card', standalone: true, imports: [NgClass, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, AsyncPipe, CreditLabelPipe], templateUrl: './course-card.component.html', styleUrl: './course-card.component.css' })
export class CourseCardComponent implements OnChanges {
  @Input({ required: true }) course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();
  isExpanded = false;
  enrolledIds$ = this.store.select(selectEnrolledIds);
  constructor(private store: Store) {}
  ngOnChanges(changes: SimpleChanges): void { if (changes['course']) console.log('Course input changed', changes['course'].previousValue, changes['course'].currentValue); }
  get cardClasses() { return { 'card--enrolled': false, 'card--full': (this.course?.credits ?? 0) >= 4, expanded: this.isExpanded }; } // Getter keeps conditional class logic out of the template so the HTML stays readable.
  get borderStyle() { const color = this.course.gradeStatus === 'passed' ? 'green' : this.course.gradeStatus === 'failed' ? 'red' : 'grey'; return { 'border-left': `6px solid ${color}` }; }
  toggleDetails(event: Event): void { event.stopPropagation(); this.isExpanded = !this.isExpanded; }
  toggleEnrollment(event: Event, enrolled: boolean): void { event.stopPropagation(); this.enrollRequested.emit(this.course.id); this.store.dispatch(enrolled ? unenrollFromCourse({ courseId: this.course.id }) : enrollInCourse({ courseId: this.course.id })); }
}
