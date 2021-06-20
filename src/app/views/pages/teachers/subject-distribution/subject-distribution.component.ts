import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { IQualificationBySchool } from '../teachers-qualification-by-school/teachers-qualification-by-school.component';
import { TeachersService } from '../teachers.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'kt-subject-distribution',
  templateUrl: './subject-distribution.component.html',
  styleUrls: ['./subject-distribution.component.scss'],
})
export class SubjectDistributionComponent implements OnInit, AfterViewInit {
  ELEMENT_DATA: ISubJectDistribution[] = [];
  displayedColumns = ['state', 'schoolname', 'subject', 'count'];
  dataSource = new MatTableDataSource<ISubJectDistribution>(this.ELEMENT_DATA);
  selection = new SelectionModel<ISubJectDistribution>(true, []);
  loading: Boolean = false;
  editMode: Boolean = false;
  school: ISubJectDistribution;
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  totalCount: number = 0;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private teacherService: TeachersService,
    private changeDetectRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getReport();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getReport() {
    this.loading = true;
    this.teacherService.getTeacherSubjectDistribution().subscribe(
      (data) => {
        this.loading = false;
        this.dataSource.data = data;
        this.changeDetectRef.detectChanges();
        this.totalCount = data.reduce(
          (preVal, currVal: ISubJectDistribution) =>
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

export interface ISubJectDistribution {
  schoolname: string;
  state: string;
  count: string;
  subject: string;
}
