import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { ITeacherQualificationByState } from '../teacher-by-qualification/teacher-by-qualification.component';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'kt-teachers-qualification-by-school',
  templateUrl: './teachers-qualification-by-school.component.html',
  styleUrls: ['./teachers-qualification-by-school.component.scss'],
})
export class TeachersQualificationBySchoolComponent
  implements OnInit, AfterViewInit
{
  ELEMENT_DATA: IQualificationBySchool[] = [];
  displayedColumns = ['state', 'schoolName', 'qualification', 'count'];
  dataSource = new MatTableDataSource<IQualificationBySchool>(
    this.ELEMENT_DATA
  );
  selection = new SelectionModel<IQualificationBySchool>(true, []);
  loading: Boolean = false;
  editMode: Boolean = false;
  school: IQualificationBySchool;
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  totalCount: number = 0;

  constructor(
    private teacherService: TeachersService,
    private changeDetectRef: ChangeDetectorRef
  ) {}

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.getReport();
  }

  getReport() {
    this.loading = true;
    this.teacherService.getTeachersQualificationBySchool().subscribe(
      (data) => {
        this.loading = false;
        this.dataSource.data = data;
        this.changeDetectRef.detectChanges();
        this.totalCount = data.reduce(
          (preVal, currVal: IQualificationBySchool) =>
            (preVal += parseInt(currVal.count)),
          0
        );
      },
      (error) => {
        this.loading = false;
      }
    );
  }
}

export interface IQualificationBySchool {
  schoolName: string;
  state: string;
  count: string;
  qualification: string;
}
