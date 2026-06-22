import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { CourseSummaryWidgetComponent } from '../../components/course-summary-widget/course-summary-widget.component';
import { NotificationComponent } from '../../components/notification/notification.component';

@Component({ selector: 'app-home', standalone: true, imports: [FormsModule, NgIf, RouterLink, CourseSummaryWidgetComponent, NotificationComponent], templateUrl: './home.component.html', styleUrl: './home.component.css' })
export class HomeComponent implements OnInit, OnDestroy {
  portalName = 'Student Course Portal'; isPortalActive = true; message = ''; searchTerm = ''; availableCourses = 12; enrolled = 3; gpa = 3.8;
  constructor(private courseService: CourseService) {}
  ngOnInit(): void { this.availableCourses = this.courseService.getLocalCourses().length; console.log('HomeComponent initialised — courses loaded'); }
  ngOnDestroy(): void { console.log('HomeComponent destroyed'); }
  onEnrollClick(): void { this.message = 'Enrollment opened!'; }
}
