import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CourseService } from '../../../services/course.service';
@Component({ selector:'app-enrollment-form', standalone:true, imports:[FormsModule, NgIf], templateUrl:'./enrollment-form.component.html', styleUrl:'./enrollment-form.component.css' })
export class EnrollmentFormComponent { model = { studentName:'', studentEmail:'', courseId:null as number | null, preferredSemester:'Odd', agreeToTerms:false }; submitted = false; constructor(private courseService: CourseService) {} onSubmit(form: NgForm): void { console.log(form.value, form.valid); if (form.valid) { this.submitted = true; this.courseService.createCourse({ name: 'Enrollment Request Course', code: `CS${form.value.courseId}`, credits: 3, gradeStatus: 'pending' }).subscribe({ error: err => console.error(err) }); } } }
