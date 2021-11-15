import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectiveStateReportDetailModalComponent } from './effective-state-report-detail-modal.component';

describe('EffectiveStateReportDetailModalComponent', () => {
  let component: EffectiveStateReportDetailModalComponent;
  let fixture: ComponentFixture<EffectiveStateReportDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectiveStateReportDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectiveStateReportDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
