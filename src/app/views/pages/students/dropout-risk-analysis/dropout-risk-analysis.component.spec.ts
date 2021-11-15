import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropoutRiskAnalysisComponent } from './dropout-risk-analysis.component';

describe('DropoutRiskAnalysisComponent', () => {
  let component: DropoutRiskAnalysisComponent;
  let fixture: ComponentFixture<DropoutRiskAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropoutRiskAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropoutRiskAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
