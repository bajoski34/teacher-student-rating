import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAssessmentComponent } from './teacher-assessment.component';

describe('TeacherAssessmentComponent', () => {
  let component: TeacherAssessmentComponent;
  let fixture: ComponentFixture<TeacherAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
