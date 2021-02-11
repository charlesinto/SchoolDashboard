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
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'kt-teacher-attendance',
  templateUrl: './teacher-attendance.component.html',
  styleUrls: ['./teacher-attendance.component.scss'],
})
export class TeacherAttendanceComponent implements OnInit {
  ELEMENT_DATA: ITeacherAttendanceReport[] = [];
  displayedColumns = ['date', 'count'];
  dataSource = new MatTableDataSource<ITeacherAttendanceReport>(
    this.ELEMENT_DATA
  );
  selection = new SelectionModel<ITeacherAttendanceReport>(true, []);
  loading: Boolean = false;
  editMode: Boolean = false;
  school: ITeacherAttendanceReport;
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  totalCount: number = 0;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private teacherService: TeachersService,
    private changeDetectRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getTeacherAttendanceByState();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getTeacherAttendanceByState() {
    this.loading = true;
    this.teacherService.getTeacherAttendanceReportAll().subscribe(
      (data) => {
        this.dataSource.data = data;
        this.loading = false;
        this.totalCount = data.reduce(
          (accumulate: any, currentValue: ITeacherAttendanceReport) =>
            accumulate + parseInt(currentValue.count),
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
  onRowElementClick(event: any, element: ITeacherAttendanceReport) {
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

export interface ITeacherAttendanceReport {
  date: string;
  count: string;
}
