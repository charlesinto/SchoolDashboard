import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolLgaComponent } from './school-lga.component';

describe('SchoolLgaComponent', () => {
  let component: SchoolLgaComponent;
  let fixture: ComponentFixture<SchoolLgaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolLgaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolLgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
