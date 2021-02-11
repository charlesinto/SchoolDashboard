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
  selector: 'kt-teacher-by-qualification',
  templateUrl: './teacher-by-qualification.component.html',
  styleUrls: ['./teacher-by-qualification.component.scss'],
})
export class TeacherByQualificationComponent implements OnInit {
  ELEMENT_DATA: ITeacherQualificationByState[] = [];
  displayedColumns = ['state', 'qualification', 'count'];
  dataSource = new MatTableDataSource<ITeacherQualificationByState>(
    this.ELEMENT_DATA
  );
  selection = new SelectionModel<ITeacherQualificationByState>(true, []);
  loading: Boolean = false;
  editMode: Boolean = false;
  school: ITeacherQualificationByState;
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
    this.getTeacherQualificationByState();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getTeacherQualificationByState() {
    this.loading = true;
    this.teacherService.getTeachersQualificationByState().subscribe(
      (data) => {
        this.dataSource.data = data;
        this.loading = false;
        this.totalCount = data.reduce(
          (accumulate: any, currentValue: ITeacherQualificationByState) =>
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
  onRowElementClick(event: any, element: ITeacherQualificationByState) {
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

export interface ITeacherQualificationByState {
  state: string;
  count: string;
  qualification?: string;
}
