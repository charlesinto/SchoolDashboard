import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsByGenderComponent } from './students-by-gender.component';

describe('StudentsByGenderComponent', () => {
  let component: StudentsByGenderComponent;
  let fixture: ComponentFixture<StudentsByGenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsByGenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsByGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
