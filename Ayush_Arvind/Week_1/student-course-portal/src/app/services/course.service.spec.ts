import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course.service';

describe('CourseService', () => {
  let service: CourseService; let httpMock: HttpTestingController;
  const mockCourses = [{ id:1, name:'Data Structures', code:'CS101', credits:4, gradeStatus:'passed' as const }, { id:2, name:'Angular', code:'CS202', credits:3, gradeStatus:'pending' as const }];
  beforeEach(() => { TestBed.configureTestingModule({ providers: [CourseService, provideHttpClient(), provideHttpClientTesting()] }); service = TestBed.inject(CourseService); httpMock = TestBed.inject(HttpTestingController); });
  afterEach(() => httpMock.verify());
  it('should load courses from correct URL', () => { service.getCourses().subscribe(courses => expect(courses.length).toBe(2)); const req = httpMock.expectOne('http://localhost:3000/courses'); expect(req.request.method).toBe('GET'); req.flush(mockCourses); });
  it('should emit expected error message on server failure', () => { service.getCourses().subscribe({ error: err => expect(err.message).toContain('Failed') }); const req = httpMock.expectOne('http://localhost:3000/courses'); req.flush('Server error', { status: 500, statusText: 'Server Error' }); });
});
