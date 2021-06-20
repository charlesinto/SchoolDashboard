import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersQualificationBySchoolComponent } from './teachers-qualification-by-school.component';

describe('TeachersQualificationBySchoolComponent', () => {
  let component: TeachersQualificationBySchoolComponent;
  let fixture: ComponentFixture<TeachersQualificationBySchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersQualificationBySchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersQualificationBySchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
