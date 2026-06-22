import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { CourseListComponent } from './course-list.component';

describe('CourseListComponent with MockStore', () => {
  let fixture: ComponentFixture<CourseListComponent>; let store: MockStore;
  const mockCourses = [{ id:1, name:'Data Structures', code:'CS101', credits:4, gradeStatus:'passed' as const }];
  beforeEach(async () => { await TestBed.configureTestingModule({ imports: [CourseListComponent], providers: [provideRouter([]), provideHttpClient(), provideMockStore({ initialState: { course: { courses: mockCourses, loading: false, error: null }, enrollment: { enrolledCourseIds: [] } } })] }).compileComponents(); fixture = TestBed.createComponent(CourseListComponent); store = TestBed.inject(MockStore); });
  it('should render course cards from initial state', () => { fixture.detectChanges(); expect(fixture.nativeElement.textContent).toContain('Data Structures'); });
  it('should show loading indicator when state is loading', () => { store.setState({ course: { courses: [], loading: true, error: null }, enrollment: { enrolledCourseIds: [] } }); fixture.detectChanges(); expect(fixture.nativeElement.textContent).toContain('Loading courses'); });
});
