import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAssessmentDetailComponent } from './teacher-assessment-detail.component';

describe('TeacherAssessmentDetailComponent', () => {
  let component: TeacherAssessmentDetailComponent;
  let fixture: ComponentFixture<TeacherAssessmentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherAssessmentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAssessmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
