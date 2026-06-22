import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';
@Component({ selector: 'app-course-summary-widget', standalone: true, template: `<div class="panel"><h3>Course Summary Widget</h3><p>Total local courses: {{ count }}</p><button (click)="addDemoCourse()">Add Demo Course</button></div>` })
export class CourseSummaryWidgetComponent { count = 0; constructor(private courseService: CourseService){ this.refresh(); } refresh(){ this.count = this.courseService.getLocalCourses().length; } addDemoCourse(){ this.courseService.addLocalCourse({ id: Date.now(), name: 'Demo Course', code: 'DM101', credits: 1, gradeStatus: 'pending' }); this.refresh(); } }
