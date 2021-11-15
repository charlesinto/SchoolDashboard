import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SchoolsService } from '../../schools/schools.service';
import {
  AppServiceService,
  IState,
} from '../../../services/app-service/app-service.service';
import { School } from '../../schools/schools.component';
import { AuthService } from '../../../../core/auth/_services/auth.service';

@Component({
  selector: 'kt-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  loading = false;
  loadingFilterBox = false;
  userForm = new FormGroup({
    firstname: new FormControl('', Validators.compose([Validators.required])),
    lastname: new FormControl('', Validators.compose([Validators.required])),
    email: new FormControl(
      '',
      Validators.compose([Validators.email, Validators.required])
    ),
    phonenumber: new FormControl('', Validators.compose([Validators.required])),
    password: new FormControl('', Validators.compose([Validators.required])),
    'confirm-password': new FormControl(
      '',
      Validators.compose([Validators.required])
    ),
    role: new FormControl('', Validators.compose([Validators.required])),
    access_level: new FormControl(
      '',
      Validators.compose([Validators.required])
    ),
    states: new FormControl('', Validators.compose([])),
    schools: new FormControl('', Validators.compose([])),
  });
  isFederal = false;
  access_level = '';
  states: IState[] = [];
  schools: School[] = [];
  constructor(
    private appService: AppServiceService,
    private schoolService: SchoolsService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.setForm();
    console.log(this.userForm.value['access_level']);
  }

  setForm() {
    this.states = this.appService.getStates();
    this.loadingFilterBox = true;
    this.schoolService.getSchools().subscribe((data) => {
      this.loadingFilterBox = false;
      this.schools = data;
    });
  }
  onAccessLevelChange(value) {
    if (value !== 'SCHOOL') {
      this.userForm.controls.schools.disable();
    } else {
      this.userForm.controls.schools.enable();
    }
  }
  createUser() {
    if (this.userForm.invalid) {
      return this.appService.showPopAlertError(
        'Validation failed',
        'Please fill all mandatory fields'
      );
    } else if (
      this.userForm.value['password'] !==
      this.userForm.value['confirm-password']
    ) {
      return this.appService.showPopAlertError(
        'Operation failed',
        'Password and Confirm Password do not match'
      );
    }

    this.loading = true;
    this.authService.createUser(this.userForm.value).subscribe(
      (data) => {
        this.loading = false;
        this.appService.showPopAlertSuccess(
          'Operation successful',
          'User created successfully'
        );
        this.userForm.reset();
      },
      (error) => {
        this.loading = false;
        console.log(error);
      }
    );
  }
}
