import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { CourseCardComponent } from './course-card.component';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;
  const mockCourse = { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' as const };
  beforeEach(async () => { await TestBed.configureTestingModule({ imports: [CourseCardComponent], providers: [provideMockStore({ initialState: { enrollment: { enrolledCourseIds: [] } } })] }).compileComponents(); fixture = TestBed.createComponent(CourseCardComponent); component = fixture.componentInstance; component.course = mockCourse; });
  it('should create', () => { fixture.detectChanges(); expect(component).toBeTruthy(); });
  it('should render input course name', () => { fixture.detectChanges(); const h3 = fixture.debugElement.query(By.css('h3')).nativeElement as HTMLElement; expect(h3.textContent).toContain('Data Structures'); });
  it('should emit enrollRequested output', () => { fixture.detectChanges(); spyOn(component.enrollRequested, 'emit'); fixture.debugElement.queryAll(By.css('button'))[1].nativeElement.click(); fixture.detectChanges(); expect(component.enrollRequested.emit).toHaveBeenCalledWith(1); });
  it('should log ngOnChanges values', () => { spyOn(console, 'log'); component.ngOnChanges({ course: new SimpleChange(undefined, mockCourse, true) }); expect(console.log).toHaveBeenCalled(); });
  it('should toggle expanded class', () => { fixture.detectChanges(); fixture.debugElement.queryAll(By.css('button'))[0].nativeElement.click(); fixture.detectChanges(); expect(component.isExpanded).toBeTrue(); });
});
