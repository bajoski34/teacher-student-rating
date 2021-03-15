import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentStudentComponent } from './department-student.component';

describe('DepartmentStudentComponent', () => {
  let component: DepartmentStudentComponent;
  let fixture: ComponentFixture<DepartmentStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
