import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { StudentsService } from './students.service';

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
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(
    private changeDetectRef: ChangeDetectorRef,
    private studentService: StudentsService
  ) {}

  ngOnInit() {
    this.getStudents();
  }
  getStudents() {
    this.loading = true;
    this.studentService.getStudents().subscribe(
      (data) => {
        this.loading = false;
        this.dataSource.data = data;
        this.ELEMENT_DATA = data;
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
