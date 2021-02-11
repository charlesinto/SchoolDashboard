import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherByQualificationComponent } from './teacher-by-qualification.component';

describe('TeacherByQualificationComponent', () => {
  let component: TeacherByQualificationComponent;
  let fixture: ComponentFixture<TeacherByQualificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherByQualificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherByQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
