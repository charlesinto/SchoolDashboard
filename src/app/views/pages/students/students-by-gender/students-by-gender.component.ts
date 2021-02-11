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
  selector: 'kt-students-by-gender',
  templateUrl: './students-by-gender.component.html',
  styleUrls: ['./students-by-gender.component.scss'],
})
export class StudentsByGenderComponent implements OnInit {
  ELEMENT_DATA: IStudentGenderReport[] = [];
  displayedColumns = ['schoolName', 'gender', 'studentClass', 'count'];
  dataSource = new MatTableDataSource<IStudentGenderReport>(this.ELEMENT_DATA);
  selection = new SelectionModel<IStudentGenderReport>(true, []);
  loading: Boolean = false;
  editMode: Boolean = false;
  school: IStudentGenderReport;
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
    this.studentService.getStudentGenderReport().subscribe(
      (data) => {
        this.loading = false;
        this.dataSource.data = data;
        this.totalCount = data.reduce(
          (accumulator: any, currentValue: IStudentGenderReport) =>
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
  onRowElementClick(event: any, element: IStudentGenderReport) {
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

export interface IStudentGenderReport {
  schoolName: string;
  gender: string;
  count: string;
  studentClass: string;
}
