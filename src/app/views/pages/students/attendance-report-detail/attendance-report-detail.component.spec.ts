import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceReportDetailComponent } from './attendance-report-detail.component';

describe('AttendanceReportDetailComponent', () => {
  let component: AttendanceReportDetailComponent;
  let fixture: ComponentFixture<AttendanceReportDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceReportDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceReportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
