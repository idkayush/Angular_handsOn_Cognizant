import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { CanComponentDeactivate } from '../../../guards/unsaved-changes.guard';

export function noCourseCode(control: AbstractControl): ValidationErrors | null { const value = String(control.value ?? ''); return value.startsWith('XX') ? { noCourseCode: true } : null; }
export function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> { return new Promise(resolve => setTimeout(() => resolve(String(control.value || '').includes('test@') ? { emailTaken: true } : null), 800)); }

@Component({ selector:'app-reactive-enrollment-form', standalone:true, imports:[ReactiveFormsModule, NgIf, NgFor], templateUrl:'./reactive-enrollment-form.component.html' })
export class ReactiveEnrollmentFormComponent implements OnInit, CanComponentDeactivate {
  enrollForm = this.fb.group({ studentName:['', [Validators.required, Validators.minLength(3)]], studentEmail: this.fb.control('', [Validators.required, Validators.email], [simulateEmailCheck]), courseId:['', [Validators.required, noCourseCode]], preferredSemester:['Odd', Validators.required], agreeToTerms:[false, Validators.requiredTrue], additionalCourses: this.fb.array<FormControl<string | null>>([]) });
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}
  get additionalCourses(): FormArray<FormControl<string | null>> { return this.enrollForm.get('additionalCourses') as FormArray<FormControl<string | null>>; } // A typed getter avoids unsafe casts in the template and keeps dynamic FormArray access reusable.
  addCourse(): void { this.additionalCourses.push(new FormControl('', Validators.required)); }
  removeCourse(index: number): void { this.additionalCourses.removeAt(index); }
  onSubmit(): void { console.log(this.enrollForm.value, this.enrollForm.getRawValue()); } // value excludes disabled controls; getRawValue() includes every control, even disabled ones.
  hasUnsavedChanges(): boolean { return this.enrollForm.dirty; }
}
