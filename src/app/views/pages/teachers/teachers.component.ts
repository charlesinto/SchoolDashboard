import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { TeachersService } from './teachers.service';
import { FormControl, Validators } from '@angular/forms';
import {
  IState,
  ILocalGovernments,
  AppServiceService,
} from '../../services/app-service/app-service.service';
import { School } from '../schools/schools.component';
import { SchoolsService } from '../schools/schools.service';

@Component({
  selector: 'kt-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit {
  ELEMENT_DATA: Teacher[] = [];
  displayedColumns = [
    'select',
    'registrationNumber',
    'surname',
    'otherNames',
    'schoolName',
    'state',
    'actions',
  ];
  dataSource = new MatTableDataSource<Teacher>(this.ELEMENT_DATA);
  selection = new SelectionModel<Teacher>(true, []);
  loading: Boolean = false;
  editMode: Boolean = false;
  school: Teacher;
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  loadingFilterBox = false;
  statesSelected = new FormControl('', Validators.compose([]));
  lgaSelected = new FormControl('', Validators.compose([]));
  schoolSelected = new FormControl('', Validators.compose([]));

  schools: School[] = [];

  states: IState[] = [];
  localgovernments: ILocalGovernments[] = [];

  totalCount = 0;
  schoolDataBase: School[] = [];

  teacherDatabase: Teacher[] = [];
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(
    private changeDetectRef: ChangeDetectorRef,
    private teacherService: TeachersService,
    private schoolService: SchoolsService,
    private appService: AppServiceService
  ) {}

  ngOnInit() {
    this.getTeachers();
    this.getSchools();
    this.getUserAccessibleState();
    this.getUserAccessibleLocals();
  }
  getSchools() {
    this.loadingFilterBox = true;
    this.schoolService.getSchools().subscribe(
      (data) => {
        this.loadingFilterBox = false;
        this.schools = data;
        this.schoolDataBase = data;
      },
      (error) => {
        this.loadingFilterBox = false;
      }
    );
  }
  getTeachers() {
    this.loading = true;
    this.teacherService.getTeachers().subscribe(
      (data) => {
        this.loading = false;
        this.dataSource.data = data;
        this.totalCount = data.length;
        this.ELEMENT_DATA = data;
        this.teacherDatabase = data;
        this.changeDetectRef.detectChanges();
      },
      (error) => {
        this.loading = false;
        console.log(error);
      }
    );
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }
  onRowElementClick(event: any, element: Teacher) {
    console.log(element);
    this.selection.clear();
    this.school = element;
    this.editMode = true;
  }
  closeDetailPage() {
    this.selection.clear();
    this.editMode = false;
  }
  onStateSelectionChange(event: any) {
    // if (this.statesSelected.value.includes('All')) {
    //   const index = this.statesSelected.value.findIndex(
    //     (item) => item === 'All'
    //   );
    //   const values = this.statesSelected.value;
    //   values.splice(index, 1);
    //   // this.statesSelected.setValue([...])
    // }
    if (!this.statesSelected.value.includes('All')) {
      this.getUserAccessibleLocals(this.statesSelected.value);
      this.schools = this.schoolDataBase.filter((item) =>
        this.statesSelected.value.includes(item.state.trim())
      );
    } else {
      this.getUserAccessibleLocals();
      this.schools = this.schoolDataBase;
    }
  }

  getUserAccessibleState() {
    this.states = this.appService.getStates(
      this.appService.getUserStateAccess()
    );
  }

  getUserAccessibleLocals(states = []) {
    this.localgovernments = this.appService.getLocalGovernments(states);
  }

  onlgaSelectionChange(event) {
    if (!this.lgaSelected.value.includes('All')) {
      this.schools = this.schoolDataBase.filter((item) =>
        this.lgaSelected.value.includes(item.lga.trim())
      );
    } else {
      this.schools = this.schoolDataBase;
    }
  }
  filterData() {
    if (
      this.lgaSelected.value.includes('All') &&
      this.statesSelected.value.includes('All') &&
      this.schoolSelected.value.includes('All')
    ) {
      this.dataSource.data = this.teacherDatabase;
      this.totalCount = this.teacherDatabase.length;
    } else if (this.schoolSelected.value.length > 0) {
      if (!this.schoolSelected.value.includes('All')) {
        this.dataSource.data = this.teacherDatabase.filter((item) =>
          this.schoolSelected.value.includes(item.schoolName)
        );
        this.totalCount = this.dataSource.data.length;
      }
    }

    this.changeDetectRef.detectChanges();
  }
}

export interface Element {
  schoolName: string;
  schoolNumber: string;
  lga: string;
  state: string;
  schoolCoordinate: string;
}

export interface Teacher {
  remarks: string;
  exitDate: Date;
  email: string;
  residentNumber: string;
  pfaNumber: string;
  telePhoneNumber: string;
  homeAddress: string;
  school: string;
  dateOfPromotion: Date;
  dateOfConfirmation: Date;
  dateOfInterStateTravel: Date;
  dateOfFirstAppointment: Date;
  dateOfBirth: Date;
  qualification: string;
  gradeLevel: string;
  designation: string;
  maidenName: String;
  gender: string;
  otherNames: string;
  surname: string;
  registrationNumber: string;
  oracleNumber: string;
  state: string;
  schoolName: string;
  schoolId: number;
  qualificationDate: string;
  salarySource: string;
  subjectTaught: string;
  teacherClass: string;
  teachingType: string;
  profile_url: string;
  leftThumb: string;
  leftThumbTemplate: string;
  rightThumb: string;
  rightThumbTemplate: string;
  localid?: number;
}
