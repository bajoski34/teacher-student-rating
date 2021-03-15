import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRatedTeacherComponent } from './view-rated-teacher.component';

describe('ViewRatedTeacherComponent', () => {
  let component: ViewRatedTeacherComponent;
  let fixture: ComponentFixture<ViewRatedTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRatedTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRatedTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
