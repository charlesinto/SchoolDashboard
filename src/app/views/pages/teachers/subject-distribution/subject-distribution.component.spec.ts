import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDistributionComponent } from './subject-distribution.component';

describe('SubjectDistributionComponent', () => {
  let component: SubjectDistributionComponent;
  let fixture: ComponentFixture<SubjectDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
