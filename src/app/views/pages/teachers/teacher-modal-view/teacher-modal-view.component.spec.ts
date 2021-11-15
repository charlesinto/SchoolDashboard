import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherModalViewComponent } from './teacher-modal-view.component';

describe('TeacherModalViewComponent', () => {
  let component: TeacherModalViewComponent;
  let fixture: ComponentFixture<TeacherModalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherModalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherModalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
