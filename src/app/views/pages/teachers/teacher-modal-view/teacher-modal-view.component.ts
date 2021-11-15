import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatDialogRef,
  MatPaginator,
  MatTableDataSource,
  MAT_DIALOG_DATA,
  PageEvent,
  ProgressSpinnerMode,
  ThemePalette,
} from '@angular/material';
import moment from 'moment';
import { AppServiceService } from '../../../services/app-service/app-service.service';
import { LayoutConfigService } from '../../../../../app/core/_base/layout';
import { Teacher } from '../teachers.component';
import { TeachersService } from '../teachers.service';

const $ = window['$'];

@Component({
  selector: 'kt-teacher-modal-view',
  templateUrl: './teacher-modal-view.component.html',
  styleUrls: ['./teacher-modal-view.component.scss'],
})
export class TeacherModalViewComponent implements OnInit, AfterViewInit {
  @ViewChild('chart', { static: true }) chart: ElementRef;
  color = Chart.helpers.color;
  @Input() chartData: { labels: string[]; datasets: any[] } = {
    labels: ['Absent', 'Present'],
    datasets: [
      {
        fill: true,
        // borderWidth: 0,
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
        borderColor: this.color(
          this.layoutConfigService.getConfig('colors.state.brand')
        )
          .alpha(0)
          .rgbString(),

        pointHoverRadius: 4,
        pointHoverBorderWidth: 12,
        pointBackgroundColor: Chart.helpers
          .color('#000000')
          .alpha(0)
          .rgbString(),
        pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
        pointHoverBackgroundColor:
          this.layoutConfigService.getConfig('colors.state.brand'),
        pointHoverBorderColor: Chart.helpers
          .color('#000000')
          .alpha(0.1)
          .rgbString(),

        data: [5, 2],
      },
    ],
  };
  @Input() type: string = 'line';
  dateRange = new FormControl('');
  ELEMENT_DATA: any[] = [];
  displayedColumns = ['date', 'present', 'absent'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  chartUI;
  length = 1000;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  pageIndex = 0;
  previousPageIndex: 0;
  colorSpinner: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 40;
  isLoadingAssessmentRecord = false;

  assessmentSummary: IAssessmentSummary[] = [];

  dataBase: IAssessmentSummary[] = [];

  constructor(
    private layoutConfigService: LayoutConfigService,
    public dialogRef: MatDialogRef<TeacherModalViewComponent>,
    private teacherService: TeachersService,
    private appService: AppServiceService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      teacher: Teacher;
    }
  ) {}

  ngOnInit() {
    // this.dataSource.data = [1, 1, 1, 1, 2, 2, 3];
    this.getTeacherCoachingOverView();
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
  getTeacherCoachingOverView() {
    this.isLoadingAssessmentRecord = true;
    this.teacherService
      .getCoachingSummaryByTeacherID(this.data.teacher.id)
      .subscribe(
        (response) => {
          this.isLoadingAssessmentRecord = false;
          this.dataBase = response.data;
          this.assessmentSummary = response.data.slice(0, this.pageSize);
          this.length = this.dataBase.length;
        },
        (error) => {
          this.isLoadingAssessmentRecord = false;
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

    this.assessmentSummary = this.dataBase.slice(0, event.pageSize);
  }
  c(data) {
    if (!data) {
      this.appService.teacher.next(this.data.teacher);
      // this.appService.assessment.next(this.)
    }
    this.dialogRef.close(data);
  }
  private initChart() {
    // For more information about the chartjs, visit this link
    // https://www.chartjs.org/docs/latest/getting-started/usage.html

    this.chartUI = new Chart(this.chart.nativeElement, {
      type: 'pie',
      data: this.chartData,

      options: {
        responsive: true,
        maintainAspectRatio: false,

        // legend: false,
        scales: {
          xAxes: [
            {
              categoryPercentage: 0.35,
              barPercentage: 0.7,
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Month',
              },
              gridLines: false,
              ticks: {
                display: true,
                beginAtZero: true,
                fontColor: this.layoutConfigService.getConfig(
                  'colors.base.shape.3'
                ),
                fontSize: 13,
                padding: 10,
              },
            },
          ],
          yAxes: [
            {
              categoryPercentage: 0.35,
              barPercentage: 0.7,
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Value',
              },
              gridLines: {
                color: this.layoutConfigService.getConfig(
                  'colors.base.shape.2'
                ),
                drawBorder: false,
                offsetGridLines: false,
                drawTicks: false,
                borderDash: [3, 4],
                zeroLineWidth: 1,
                zeroLineColor: this.layoutConfigService.getConfig(
                  'colors.base.shape.2'
                ),
                zeroLineBorderDash: [3, 4],
              },
              ticks: {
                max: 70,
                stepSize: 10,
                display: true,
                beginAtZero: true,
                fontColor: this.layoutConfigService.getConfig(
                  'colors.base.shape.3'
                ),
                fontSize: 13,
                padding: 10,
              },
            },
          ],
        },
        title: {
          display: false,
        },
        hover: {
          mode: 'index',
        },
        tooltips: {
          enabled: true,
          intersect: false,
          mode: 'nearest',
          bodySpacing: 5,
          yPadding: 10,
          xPadding: 10,
          caretPadding: 0,
          displayColors: false,
          backgroundColor:
            this.layoutConfigService.getConfig('colors.state.brand'),
          titleFontColor: '#ffffff',
          cornerRadius: 4,
          footerSpacing: 0,
          titleSpacing: 0,
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 5,
            bottom: 5,
          },
        },
      },
    });
  }
  initialDatePicker() {
    const $this = this;
    $('input[name="daterange"]').daterangepicker(
      {
        autoUpdateInput: false,
        opens: 'left',
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [
            moment().subtract(1, 'days'),
            moment().subtract(1, 'days'),
          ],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [
            moment().subtract(1, 'month').startOf('month'),
            moment().subtract(1, 'month').endOf('month'),
          ],
        },
      },
      function (start, end, label) {
        console.log(
          'A new date selection was made: ' +
            start.format('YYYY-MM-DD') +
            ' to ' +
            end.format('YYYY-MM-DD')
        );
        $this.dateRange.setValue(
          `${start.format('YYYY-MM-DD')} to ${end.format('YYYY-MM-DD')}`
        );
      }
    );
  }
  closeModal(data) {
    this.dialogRef.close(data);
  }
}

export enum ScoreCategory {
  NOT_MET = 'Not Met(Below 50)',
  PARTIALLY_MET = 'Partially Met(50-70)',
  EFFECTIVELY_MET = 'Effectively Met(60-75)',
}

export interface IAssessmentSummary {
  areas_of_improvement: string;
  areas_of_strength: string;
  class_observed: string;
  date: string;
  datecreated: Date;
  id: number;
  lesson_duration: string | null;
  mentor: number;
  score: string;
  score_category: ScoreCategory;
  teacherid: number;
  topic: string;
}
