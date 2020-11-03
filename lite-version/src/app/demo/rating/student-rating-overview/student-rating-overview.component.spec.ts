import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRatingOverviewComponent } from './student-rating-overview.component';

describe('StudentRatingOverviewComponent', () => {
  let component: StudentRatingOverviewComponent;
  let fixture: ComponentFixture<StudentRatingOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRatingOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRatingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
