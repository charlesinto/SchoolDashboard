import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Location } from '@angular/common';
import { LayoutConfigService } from 'app/core/_base/layout';
import { ActivatedRoute } from '@angular/router';
import { ITeacherAttendanceQueryParams } from '../teacher-attendance/teacher-attendance.component';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'kt-teacher-report-detail',
  templateUrl: './teacher-report-detail.component.html',
  styleUrls: ['./teacher-report-detail.component.scss'],
})
export class TeacherReportDetailComponent implements OnInit {
  ELEMENT_DATA: ITeacherAttendanceDetail[] = [];
  displayedColumns = ['oracleNumber', 'fullName', 'attendanceDate', 'status'];
  @Input() data: { labels: string[]; datasets: any[] };
  @Input() type: string = 'doughnut';
  @ViewChild('chart', { static: true }) chart: ElementRef;
  dataSource = new MatTableDataSource<ITeacherAttendanceDetail>(
    this.ELEMENT_DATA
  );
  selection = new SelectionModel<ITeacherAttendanceDetail>(true, []);
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
    private layoutConfigService: LayoutConfigService,
    private route: ActivatedRoute,
    private teacherService: TeachersService,
    private changeRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscribeToRouteQueryChange();
  }
  subscribeToRouteQueryChange() {
    this.route.queryParams.subscribe((params) => {
      const query: ITeacherAttendaceQueryDetail = {
        school: params['school'],
        state: params['state'],
        lga: params['lga'],
        attendanceDate: params['attendanceDate'],
      };
      this.school = query.school;
      this.lga = query.lga;
      this.state = query.state;
      this.queryAttendanceReportDetail(query);
    });
  }
  queryAttendanceReportDetail(params: ITeacherAttendaceQueryDetail) {
    if (
      ((!params.school || params.school.trim() === '') &&
        (!params.lga || params.lga.trim() === '') &&
        (!params.state || params.state === '')) ||
      params.attendanceDate.trim() === ''
    )
      return;
    console.log('called here o');
    this.loading = true;
    this.teacherService.getTeacherAttendanceReportDetail(params).subscribe(
      (data) => {
        this.loading = false;
        this.dataSource.data = data;
        this.totalPresent = 0;
        this.totalAbsent = 0;
        data.forEach((item) => {
          if (item.status.toLowerCase() === 'present') {
            this.totalPresent += 1;
          } else {
            this.totalAbsent += 0;
          }
        });
        this.data = {
          labels: ['Present', 'Absent'],
          datasets: [
            {
              fill: true,
              // borderWidth: 0,
              backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
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

              data: [this.totalPresent, this.totalAbsent],
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
        this.changeRef.detectChanges();
      },
      (error) => {
        this.loading = false;
      }
    );
  }
  onBackArrowClick(event) {
    this.location.back();
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

export interface ITeacherAttendanceDetail {
  oracleNumber: string;
  fullName: string;
  attendanceDate: string;
  status: string;
}

export interface ITeacherAttendaceQueryDetail
  extends ITeacherAttendanceQueryParams {
  attendanceDate: string;
}
