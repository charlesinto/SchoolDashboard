import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { StudentsService } from './students.service';
import { FormControl, Validators } from '@angular/forms';
import { School } from '../schools/schools.component';
import {
  IState,
  ILocalGovernments,
} from '../../services/app-service/app-service.service';
import { AppServiceService } from '../../services/app-service/app-service.service';
import { SchoolsService } from '../schools/schools.service';

@Component({
  selector: 'kt-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  ELEMENT_DATA: Student[] = [];
  displayedColumns = [
    'select',
    'admissionNumber',
    'surname',
    'otherNames',
    'schoolName',
    'state',
    'actions',
  ];
  dataSource = new MatTableDataSource<Student>(this.ELEMENT_DATA);
  selection = new SelectionModel<Student>(true, []);
  loading: Boolean = false;
  editMode: Boolean = false;
  school: Student;
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

  studentDataBase: Student[] = [];
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(
    private changeDetectRef: ChangeDetectorRef,
    private studentService: StudentsService,
    private appService: AppServiceService,
    private schoolService: SchoolsService
  ) {}

  ngOnInit() {
    this.getStudents();
    this.getSchools();
    this.getUserAccessibleLocals();
    this.getUserAccessibleState();
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
  getStudents() {
    this.loading = true;
    this.studentService.getStudents().subscribe(
      (data) => {
        this.loading = false;
        this.dataSource.data = data;
        this.ELEMENT_DATA = data;
        this.studentDataBase = data;
        this.totalCount = data.length;
        this.changeDetectRef.detectChanges();
      },
      (error) => {
        this.loading = false;
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
  onRowElementClick(event: any, element: Student) {
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
      this.dataSource.data = this.studentDataBase;
      this.totalCount = this.studentDataBase.length;
    } else if (this.schoolSelected.value.length > 0) {
      if (!this.schoolSelected.value.includes('All')) {
        this.dataSource.data = this.studentDataBase.filter((item) =>
          this.schoolSelected.value.includes(item.school)
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

export interface Student {
  medicalCondition: string;
  guardianAddress: string;
  motherFullName: string;
  motherOccupation: string;
  fatherFullName: string;
  fatherOccupation: string;
  fatherTelephone: string;
  address: string;
  school: string;
  admissionNumber: string;
  hobby: string;
  dateOfAdmission: Date;
  dateOfBirth: Date;
  religion: string;
  town: string;
  gender: string;
  otherNames: string;
  surname: string;
  registrationNumber: string;
  studentClass: string;
  newEntrant: number;
  schoolId: number;
  placeOfBirth: string;
  studentflow: string;
  primarySchoolAttendedDate: string;
  previousClass: string;
  fatherAddress: string;
  motherAddress: string;
  motherTelephone: string;
  guardianTelephone: string;
  guardianName: string;
  profile_url: string;
  leftThumb: string;
  leftThumbTemplate: string;
  rightThumb: string;
  rightThumbTemplate: string;
  leftRET: Number;
  leftFingerPrintId: string;
  rightRET: number;
  rightFingerPrintId: string;
  localid?: number;
}
