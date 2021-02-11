import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolByStateComponent } from './school-by-state.component';

describe('SchoolByStateComponent', () => {
  let component: SchoolByStateComponent;
  let fixture: ComponentFixture<SchoolByStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolByStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolByStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
