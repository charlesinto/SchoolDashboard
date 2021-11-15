import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectiveStateReportComponent } from './effective-state-report.component';

describe('EffectiveStateReportComponent', () => {
  let component: EffectiveStateReportComponent;
  let fixture: ComponentFixture<EffectiveStateReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectiveStateReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectiveStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
