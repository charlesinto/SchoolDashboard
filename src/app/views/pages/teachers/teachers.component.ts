import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { TeachersService } from './teachers.service';

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
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(
    private changeDetectRef: ChangeDetectorRef,
    private teacherService: TeachersService
  ) {}

  ngOnInit() {
    this.getTeachers();
  }
  getTeachers() {
    this.loading = true;
    this.teacherService.getTeachers().subscribe(
      (data) => {
        this.loading = false;
        this.dataSource.data = data;
        this.ELEMENT_DATA = data;
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
