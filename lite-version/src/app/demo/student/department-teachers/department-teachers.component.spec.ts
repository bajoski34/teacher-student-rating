import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentTeachersComponent } from './department-teachers.component';

describe('DepartmentTeachersComponent', () => {
  let component: DepartmentTeachersComponent;
  let fixture: ComponentFixture<DepartmentTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
