import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
} from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { StudentsService } from '../students.service';

@Component({
  selector: 'kt-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.scss'],
})
export class StudentAttendanceComponent implements OnInit {
  ELEMENT_DATA: IStudentAttendanceReport[] = [];
  displayedColumns = ['school', 'gender', 'date', 'studentClass', 'count'];
  dataSource = new MatTableDataSource<IStudentAttendanceReport>(
    this.ELEMENT_DATA
  );
  selection = new SelectionModel<IStudentAttendanceReport>(true, []);
  loading: Boolean = false;
  editMode: Boolean = false;
  school: IStudentAttendanceReport;
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  totalCount: number = 0;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private studentService: StudentsService,
    private changeDetectRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getStudentGenderReportByState();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getStudentGenderReportByState() {
    this.loading = true;
    this.studentService.getAttendanceReport().subscribe(
      (data) => {
        this.loading = false;
        this.dataSource.data = data;
        this.totalCount = data.reduce(
          (accumulator: any, currentValue: IStudentAttendanceReport) =>
            accumulator + parseInt(currentValue.count),
          0
        );
        this.changeDetectRef.detectChanges();
      },
      (error) => {
        this.loading = false;
      }
    );
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
  onRowElementClick(event: any, element: IStudentAttendanceReport) {
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

export interface IStudentAttendanceReport {
  school: string;
  date: string;
  gender: string;
  count: string;
  studentClass: string;
}
