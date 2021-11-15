import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MatProgressSpinner,
  MAT_DIALOG_DATA,
  PageEvent,
  ProgressSpinnerMode,
  ThemePalette,
} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ReportType } from '../effective-state-report/effective-state-report.component';
import { IAssessmentSummary } from '../teacher-modal-view/teacher-modal-view.component';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'kt-effective-state-report-detail-modal',
  templateUrl: './effective-state-report-detail-modal.component.html',
  styleUrls: ['./effective-state-report-detail-modal.component.scss'],
})
export class EffectiveStateReportDetailModalComponent implements OnInit {
  length = 1000;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  pageIndex = 0;
  previousPageIndex: 0;
  colorSpinner: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 40;
  loading = false;
  assessmentSummary: IAssessmentSummary[] = [];

  dataBase: IAssessmentSummary[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      category: ReportType;
      state: string;
      lga: string;
      endDate: string;
      startDate: string;
      school: string;
    },
    private teacherService: TeachersService,
    private route: ActivatedRoute,
    private changeDetectRef: ChangeDetectorRef,
    public dialogRef: MatDialogRef<EffectiveStateReportDetailModalComponent>
  ) {}

  ngOnInit() {
    this.getReportDetail();
  }

  getReportDetail() {
    const { category, state, lga, endDate, startDate, school } = this.data;
    this.loading = true;

    this.teacherService
      .getCoachingReportByStateDrillDownCategory(
        category,
        state,
        lga,
        endDate,
        startDate,
        school
      )
      .subscribe(
        (response) => {
          this.loading = false;
          console.log(response);
          this.dataBase = response.data;
          this.assessmentSummary = response.data.slice(0, this.pageSize);
          this.length = this.dataBase.length;
          console.log('this summary: ', this.assessmentSummary);
          this.changeDetectRef.detectChanges();
        },
        (error) => {
          this.loading = false;
          console.log(error);
        }
      );
  }

  handlePageChange(event) {
    console.log('event: ', event);
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    if (event.pageIndex > this.previousPageIndex) {
      // fetch online record
      this.previousPageIndex = event.previousPageIndex;
    }
  }
  c(data) {
    if (!data) {
      // this.appService.assessment.next(this.)
    }
    this.dialogRef.close(data);
  }
  closeModal(data) {
    this.dialogRef.close(data);
  }
}
