import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Input,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Location } from '@angular/common';
import {
  IAttendanceSummary,
  IQueryAttendanceParams,
} from '../student-attendance/student-attendance.component';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';
import { LayoutConfigService } from 'app/core/_base/layout';
// import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'kt-attendance-report-detail',
  templateUrl: './attendance-report-detail.component.html',
  styleUrls: ['./attendance-report-detail.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  // providers: [NgbDropdownConfig],
})
export class AttendanceReportDetailComponent implements OnInit {
  ELEMENT_DATA: IStudentAttendanceDetail[] = [];
  displayedColumns = [
    'class',
    'fullName',
    'male',
    'female',
    'attendanceDate',
    'status',
  ];
  @Input() data: { labels: string[]; datasets: any[] };
  @Input() type: string = 'doughnut';
  @ViewChild('chart', { static: true }) chart: ElementRef;
  dataSource = new MatTableDataSource<IStudentAttendanceDetail>(
    this.ELEMENT_DATA
  );
  selection = new SelectionModel<IStudentAttendanceDetail>(true, []);
  loading: Boolean = false;
  editMode: Boolean = false;
  totalFemalePresent = 0;
  totalMalePresent = 0;
  totalFemaleAbsent = 0;
  totalMaleAbsent = 0;
  color = Chart.helpers.color;
  school: string;
  lga: string = '';
  state: string = '';
  totalAbsent: number;
  totalPresent: number;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private studentService: StudentsService,
    private changeDetectRef: ChangeDetectorRef,
    private layoutConfigService: LayoutConfigService
  ) // config: NgbDropdownConfig
  {
    // config.autoClose = true;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const attendanceQueryParams: IQueryAttendanceDetail = {
        schools: params['schools'] ? params['schools'].split('**') : [],
        lga: params['lga'] ? params['lga'].split('**') : [],
        state: params['states'] ? params['states'].split('**') : [],
        startDate: params['dateRange']
          ? params['dateRange'].split('to')[0].trim()
          : '',
        class: params['class'] ? params['class'].split('**') : [],
        endDate: params['dateRange']
          ? params['dateRange'].split('to')[1].trim()
          : '',
        attendanceDate: params['attendanceDate'],
      };
      this.school = attendanceQueryParams.schools[0];
      this.state = attendanceQueryParams.state[0];
      this.lga = attendanceQueryParams.lga[0];
      this.getAttendanceDetails(attendanceQueryParams);
    });
  }

  onBackArrowClick(event) {
    this.location.back();
  }
  getAttendanceDetails(params: IQueryAttendanceDetail) {
    if (
      params.state.length == 0 &&
      params.schools.length === 0 &&
      params.lga.length === 0 &&
      (!params.attendanceDate || params.attendanceDate.trim() === '')
    ) {
      return;
    }
    this.loading = true;
    this.studentService.getAttendanceDetail(params).subscribe(
      (data) => {
        this.loading = false;
        //get total male and femle present;
        data.forEach((item) => {
          if (item.female) {
            if (item.status.toLowerCase().trim() === 'present') {
              this.totalFemalePresent += 1;
            } else {
              this.totalFemaleAbsent += 0;
            }
          } else if (item.male) {
            if (item.status.toLowerCase().trim() === 'present') {
              this.totalMalePresent += 1;
            } else {
              this.totalMaleAbsent += 1;
            }
          }
        });
        this.totalPresent = this.totalMalePresent + this.totalFemalePresent;
        this.totalAbsent = this.totalFemaleAbsent + this.totalMaleAbsent;
        this.data = {
          labels: ['Male', 'Female'],
          datasets: [
            {
              fill: true,
              // borderWidth: 0,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
              ],
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
              pointBorderColor: Chart.helpers
                .color('#000000')
                .alpha(0)
                .rgbString(),
              pointHoverBackgroundColor: this.layoutConfigService.getConfig(
                'colors.state.brand'
              ),
              pointHoverBorderColor: Chart.helpers
                .color('#000000')
                .alpha(0.1)
                .rgbString(),

              data: [this.totalMalePresent, this.totalFemalePresent],
            },
            // {
            //   fill: true,
            //   // borderWidth: 0,
            //   backgroundColor: color(
            //     this.layoutConfigService.getConfig('colors.state.brand')
            //   )
            //     .alpha(0.2)
            //     .rgbString(),
            //   borderColor: color(
            //     this.layoutConfigService.getConfig('colors.state.brand')
            //   )
            //     .alpha(0)
            //     .rgbString(),

            //   pointHoverRadius: 4,
            //   pointHoverBorderWidth: 12,
            //   pointBackgroundColor: Chart.helpers
            //     .color('#000000')
            //     .alpha(0)
            //     .rgbString(),
            //   pointBorderColor: Chart.helpers
            //     .color('#000000')
            //     .alpha(0)
            //     .rgbString(),
            //   pointHoverBackgroundColor: this.layoutConfigService.getConfig(
            //     'colors.state.brand'
            //   ),
            //   pointHoverBorderColor: Chart.helpers
            //     .color('#000000')
            //     .alpha(0.1)
            //     .rgbString(),

            //   data: [25, 45, 55, 30, 40, 65, 35],
            // },
          ],
        };
        this.initChart();
        this.dataSource.data = data;
        this.changeDetectRef.detectChanges();
      },
      (error) => {
        this.loading = false;
      }
    );
  }
  private initChart() {
    // For more information about the chartjs, visit this link
    // https://www.chartjs.org/docs/latest/getting-started/usage.html

    const chart = new Chart(this.chart.nativeElement, {
      type: this.type,
      data: this.data,
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
          backgroundColor: this.layoutConfigService.getConfig(
            'colors.state.brand'
          ),
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
}

export interface IStudentAttendanceDetail {
  school: string;
  class: string;
  fullName: string;
  male: boolean;
  female: boolean;
  attendanceDate: string;
  status: string;
  action?: string;
}

export interface IQueryAttendanceDetail extends IQueryAttendanceParams {
  attendanceDate: string;
}

export interface IStudentAttendaceQuickView {
  surname: string;
  othernames: string;
  school: string;
  studentclass: string;
  gender: string;
  status: string;
}
