import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IQualificationBySchool } from '../teachers-qualification-by-school/teachers-qualification-by-school.component';
import { TeachersService } from '../teachers.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'kt-subject-distribution',
  templateUrl: './subject-distribution.component.html',
  styleUrls: ['./subject-distribution.component.scss'],
})
export class SubjectDistributionComponent implements OnInit {
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
