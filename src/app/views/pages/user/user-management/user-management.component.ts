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
  bulkUserLoading = false;
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
  bulkUserForm = new FormGroup({
    numberOfUsers: new FormControl(
      '',
      Validators.compose([Validators.required])
    ),

    role: new FormControl('', Validators.compose([Validators.required])),
    viewAccess: new FormControl('', Validators.compose([Validators.required])),
    state: new FormControl('', Validators.compose([])),
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
    this.authService
      .createUser({ ...this.userForm.value, state: this.userForm.value.states })
      .subscribe(
        (data) => {
          this.loading = false;
          this.appService.showPopAlertSuccess(
            'Operation successful',
            'User created successfully'
          );
          this.userForm.reset();
          this.userForm.clearValidators();
          this.userForm.updateValueAndValidity();
        },
        (error) => {
          this.loading = false;
          this.loading = false;
          console.log(error);
          this.appService.showPopAlertError(
            'Operation failed',
            error.error.message
          );
        }
      );
  }
  createBulkUser() {
    console.log('form: ', this.bulkUserForm);
    // if (this.bulkUserForm.status !== 'VALID') {
    //   return this.appService.showPopAlertError(
    //     'Validation failed',
    //     'Please fill all mandatory fields'
    //   );
    // }
    this.bulkUserLoading = true;
    this.authService
      .bulkUserCreate({
        ...this.bulkUserForm.value,
        numberOfUsers: parseInt(this.bulkUserForm.value['numberOfUsers']),
      })
      .subscribe(
        (data) => {
          this.bulkUserLoading = false;
          this.appService.showPopAlertSuccess(
            'Operation successful',
            'User(s) created successfully'
          );
          this.bulkUserForm.reset();
          this.bulkUserForm.clearValidators();
          this.bulkUserForm.updateValueAndValidity();
        },
        (error) => {
          this.bulkUserLoading = false;
          this.bulkUserLoading = false;
          console.log(error);
          this.appService.showPopAlertError(
            'Operation failed',
            error.error.message
          );
        }
      );
  }
}
