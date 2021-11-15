// Angular
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// Lodash
import { shuffle, StringChain } from 'lodash';
// Services
// Widgets model
import {
  LayoutConfigService,
  SparklineChartOptions,
} from '../../../core/_base/layout';
import { Widget4Data } from '../../partials/content/widgets/widget4/widget4.component';
import { DashboardService } from './dashboard.service';

const $ = window['$'];
const moment = window['moment'];

@Component({
  selector: 'kt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  chartOptions1: SparklineChartOptions;
  chartOptions2: SparklineChartOptions;
  chartOptions3: SparklineChartOptions;
  chartOptions4: SparklineChartOptions;
  widget4_1: Widget4Data;
  widget4_2: Widget4Data;
  widget4_3: Widget4Data;
  widget4_4: Widget4Data;
  loading = false;
  loadingAttendanceReport = false;
  totalSchools: string = '0';
  totalStudents: string = '0';
  totalTeachers: string = '0';
  schoolname = '';
  state = '';
  enumerators = '0';
  @ViewChild('chart', { static: true }) chart: ElementRef;
  @Input() data: { labels: string[]; datasets: any[] } = {
    labels: ['Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Present',
        borderColor: this.layoutConfigService.getConfig('colors.state.brand'),
        fill: false,
        borderWidth: 2,
        backgroundColor: Chart.helpers
          .color(this.layoutConfigService.getConfig('colors.state.brand'))
          .alpha(0.6)
          .rgbString(),
        // borderColor: this.color(
        //   this.layoutConfigService.getConfig('colors.state.brand')
        // )
        //   .alpha(0)
        //   .rgbString(),

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

        data: [0, 0, 0, 0, 0],
      },

      {
        label: 'Absent',
        fill: false,
        borderWidth: 2,
        backgroundColor: Chart.helpers
          .color(this.layoutConfigService.getConfig('colors.state.brand'))
          .alpha(0.2)
          .rgbString(),
        borderColor: this.layoutConfigService.getConfig('colors.state.danger'),

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

        data: [0, 0, 0, 0, 0],
      },
    ],
  };
  @Input() type: string = 'line';
  color = Chart.helpers.color;
  dateRange = new FormControl('');

  chartUI;

  constructor(
    private layoutConfigService: LayoutConfigService,
    private dashboardService: DashboardService,
    private router: Router,
    private route: ActivatedRoute,
    private changeDetectRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.chartOptions1 = {
      data: [10, 14, 18, 11, 9, 12, 14, 17, 18, 14],
      color: this.layoutConfigService.getConfig('colors.state.brand'),
      border: 3,
    };
    this.chartOptions2 = {
      data: [11, 12, 18, 13, 11, 12, 15, 13, 19, 15],
      color: this.layoutConfigService.getConfig('colors.state.danger'),
      border: 3,
    };
    this.chartOptions3 = {
      data: [12, 12, 18, 11, 15, 12, 13, 16, 11, 18],
      color: this.layoutConfigService.getConfig('colors.state.success'),
      border: 3,
    };
    this.chartOptions4 = {
      data: [11, 9, 13, 18, 13, 15, 14, 13, 18, 15],
      color: this.layoutConfigService.getConfig('colors.state.primary'),
      border: 3,
    };
    this.route.queryParams.subscribe((params) => {
      const attendanceParams: IQueryAttendanceParams = {
        startDate: params['dateRange']
          ? params['dateRange'].split('to')[0].trim()
          : null,
        endDate: params['dateRange']
          ? params['dateRange'].split('to')[1].trim()
          : null,
      };
      if (attendanceParams.startDate && attendanceParams.endDate) {
        this.initialDatePicker();
        this.dateRange.setValue(
          `${attendanceParams.startDate} to ${attendanceParams.endDate}`
        );
      } else {
        this.initialDatePicker();
      }

      this.getAttendanceReport(attendanceParams);
    });

    // @ts-ignore
    this.widget4_1 = shuffle([
      {
        pic: './assets/media/files/doc.svg',
        title: 'Metronic Documentation',
        url: 'https://keenthemes.com.my/metronic',
      },
      {
        pic: './assets/media/files/jpg.svg',
        title: 'Project Launch Evgent',
        url: 'https://keenthemes.com.my/metronic',
      },
      {
        pic: './assets/media/files/pdf.svg',
        title: 'Full Developer Manual For 4.7',
        url: 'https://keenthemes.com.my/metronic',
      },
      {
        pic: './assets/media/files/javascript.svg',
        title: 'Make JS Development',
        url: 'https://keenthemes.com.my/metronic',
      },
      {
        pic: './assets/media/files/zip.svg',
        title: 'Download Ziped version OF 5.0',
        url: 'https://keenthemes.com.my/metronic',
      },
      {
        pic: './assets/media/files/pdf.svg',
        title: 'Finance Report 2016/2017',
        url: 'https://keenthemes.com.my/metronic',
      },
    ]);
    // @ts-ignore
    this.widget4_2 = shuffle([
      {
        pic: './assets/media/users/100_4.jpg',
        username: 'Anna Strong',
        desc: 'Visual Designer,Google Inc.',
        url: 'https://keenthemes.com.my/metronic',
        buttonClass: 'btn-label-brand',
      },
      {
        pic: './assets/media/users/100_14.jpg',
        username: 'Milano Esco',
        desc: 'Product Designer, Apple Inc.',
        url: 'https://keenthemes.com.my/metronic',
        buttonClass: 'btn-label-warning',
      },
      {
        pic: './assets/media/users/100_11.jpg',
        username: 'Nick Bold',
        desc: 'Web Developer, Facebook Inc.',
        url: 'https://keenthemes.com.my/metronic',
        buttonClass: 'btn-label-danger',
      },
      {
        pic: './assets/media/users/100_1.jpg',
        username: 'Wilter Delton',
        desc: 'Project Manager, Amazon Inc.',
        url: 'https://keenthemes.com.my/metronic',
        buttonClass: 'btn-label-success',
      },
      {
        pic: './assets/media/users/100_5.jpg',
        username: 'Nick Stone',
        desc: 'Visual Designer, Github Inc.',
        url: 'https://keenthemes.com.my/metronic',
        buttonClass: 'btn-label-dark',
      },
    ]);
    // @ts-ignore
    this.widget4_3 = shuffle([
      {
        icon: 'flaticon-pie-chart-1 kt-font-info',
        title: 'Metronic v6 has been arrived!',
        url: 'https://keenthemes.com.my/metronic',
        value: '+$500',
        valueColor: 'kt-font-info',
      },
      {
        icon: 'flaticon-safe-shield-protection kt-font-success',
        title: 'Metronic community meet-up 2019 in Rome.',
        url: 'https://keenthemes.com.my/metronic',
        value: '+$1260',
        valueColor: 'kt-font-success',
      },
      {
        icon: 'flaticon2-line-chart kt-font-danger',
        title: 'Metronic Angular 8 version will be landing soon..',
        url: 'https://keenthemes.com.my/metronic',
        value: '+$1080',
        valueColor: 'kt-font-danger',
      },
      {
        icon: 'flaticon2-pie-chart-1 kt-font-primary',
        title: 'ale! Purchase Metronic at 70% off for limited time',
        url: 'https://keenthemes.com.my/metronic',
        value: '70% Off!',
        valueColor: 'kt-font-primary',
      },
      {
        icon: 'flaticon2-rocket kt-font-brand',
        title: 'Metronic VueJS version is in progress. Stay tuned!',
        url: 'https://keenthemes.com.my/metronic',
        value: '+134',
        valueColor: 'kt-font-brand',
      },
      {
        icon: 'flaticon2-notification kt-font-warning',
        title:
          'Black Friday! Purchase Metronic at ever lowest 90% off for limited time',
        url: 'https://keenthemes.com.my/metronic',
        value: '70% Off!',
        valueColor: 'kt-font-warning',
      },
      {
        icon: 'flaticon2-file kt-font-focus',
        title: 'Metronic React version is in progress.',
        url: 'https://keenthemes.com.my/metronic',
        value: '+13%',
        valueColor: 'kt-font-focus',
      },
    ]);
    // @ts-ignore
    this.widget4_4 = shuffle([
      {
        pic: './assets/media/client-logos/logo5.png',
        title: 'Trump Themes',
        desc: 'Make Metronic Development',
        url: 'https://keenthemes.com.my/metronic',
        value: '+$2500',
        valueColor: 'kt-font-brand',
      },
      {
        pic: './assets/media/client-logos/logo4.png',
        title: 'StarBucks',
        desc: 'Good Coffee & Snacks',
        url: 'https://keenthemes.com.my/metronic',
        value: '-$290',
        valueColor: 'kt-font-brand',
      },
      {
        pic: './assets/media/client-logos/logo3.png',
        title: 'Phyton',
        desc: 'A Programming Language',
        url: 'https://keenthemes.com.my/metronic',
        value: '+$17',
        valueColor: 'kt-font-brand',
      },
      {
        pic: './assets/media/client-logos/logo2.png',
        title: 'GreenMakers',
        desc: 'Make Green Development',
        url: 'https://keenthemes.com.my/metronic',
        value: '-$2.50',
        valueColor: 'kt-font-brand',
      },
      {
        pic: './assets/media/client-logos/logo1.png',
        title: 'FlyThemes',
        desc: "A Let's Fly Fast Again Language",
        url: 'https://keenthemes.com.my/metronic',
        value: '+200',
        valueColor: 'kt-font-brand',
      },
    ]);
    this.getDashboardSettings();
    // this.getBestPerformingSchoolAttendance();

    this.initChart();
  }
  filterData() {
    console.log('called here');
    this.router.navigate(['dashboard'], {
      queryParams: {
        dateRange: this.dateRange.value ? this.dateRange.value : '',
      },
    });
  }
  reset(e) {
    e.preventDefault();
    this.router.navigate(['dashboard'], {
      queryParams: {
        reset: 'true',
      },
    });
  }
  getAttendanceReport(params: IQueryAttendanceParams) {
    this.getBestPerformingSchoolAttendance(params.startDate, params.endDate);
  }
  getBestPerformingSchoolAttendance(startDate?: string, endDate?: string) {
    this.loadingAttendanceReport = true;
    this.dashboardService.getBestPerformingSchool(startDate, endDate).subscribe(
      (response: any) => {
        this.loadingAttendanceReport = false;
        const {
          data: {
            absentDailyReport,
            presentDailyReport,
            schoolName,
            state,
            schoolid,
          },
        } = response;
        let Monday = 0,
          Tuesday = 0,
          Wednessday = 0,
          Thursday = 0,
          Friday = 0;

        let MondayAbsent = 0,
          TuesdayAbent = 0,
          WednessdayAbsent = 0,
          ThursdayAbsent = 0,
          FridayAbsent = 0;

        presentDailyReport.forEach((report) => {
          if (report.day === 'Monday') {
            Monday = report.count;
          } else if (report.day === 'Tuesday') {
            Tuesday = report.count;
          } else if (report.day === 'Wednessday') {
            Wednessday = report.count;
          } else if (report.day === 'Thursday') {
            Thursday = report.count;
          } else if (report.day === 'Friday') {
            Friday = report.count;
          }
        });

        absentDailyReport.forEach((report) => {
          if (report.day === 'Monday') {
            MondayAbsent = report.count;
          } else if (report.day === 'Tuesday') {
            TuesdayAbent = report.count;
          } else if (report.day === 'Wednessday') {
            WednessdayAbsent = report.count;
          } else if (report.day === 'Thursday') {
            ThursdayAbsent = report.count;
          } else if (report.day === 'Friday') {
            FridayAbsent = report.count;
          }
        });

        this.chartUI.data = {
          labels: ['Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday'],
          datasets: [
            {
              label: 'Present',
              borderColor:
                this.layoutConfigService.getConfig('colors.state.brand'),
              fill: false,
              borderWidth: 2,
              backgroundColor: this.color(
                this.layoutConfigService.getConfig('colors.state.brand')
              )
                .alpha(0.6)
                .rgbString(),
              // borderColor: this.color(
              //   this.layoutConfigService.getConfig('colors.state.brand')
              // )
              //   .alpha(0)
              //   .rgbString(),

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
              pointHoverBackgroundColor:
                this.layoutConfigService.getConfig('colors.state.brand'),
              pointHoverBorderColor: Chart.helpers
                .color('#000000')
                .alpha(0.1)
                .rgbString(),

              data: [Monday, Tuesday, Wednessday, Thursday, Friday],
            },

            {
              label: 'Absent',
              fill: false,
              borderWidth: 2,
              backgroundColor: this.color(
                this.layoutConfigService.getConfig('colors.state.brand')
              )
                .alpha(0.2)
                .rgbString(),
              borderColor: this.layoutConfigService.getConfig(
                'colors.state.danger'
              ),

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
              pointHoverBackgroundColor:
                this.layoutConfigService.getConfig('colors.state.brand'),
              pointHoverBorderColor: Chart.helpers
                .color('#000000')
                .alpha(0.1)
                .rgbString(),

              data: [
                MondayAbsent,
                TuesdayAbent,
                WednessdayAbsent,
                ThursdayAbsent,
                FridayAbsent,
              ],
            },
          ],
        };

        this.chartUI.update();

        console.log(this.chartUI);

        this.schoolname = schoolName;
        this.state = state;
      },
      (error) => {
        this.loadingAttendanceReport = false;
        console.log(error);
      }
    );
  }

  getDashboardSettings() {
    this.loading = true;
    this.dashboardService.getDashboardSettings().subscribe(
      (data) => {
        console.log('344o: ', data);
        this.loading = false;
        this.totalSchools = data.schoolCount;
        this.totalStudents = data.studentCount;
        this.totalTeachers = data.teacherCount;
        this.enumerators = data.enumerators;
        this.changeDetectRef.detectChanges();
      },
      (error) => {
        console.log('344o: ', error);
        this.loading = false;
        this.changeDetectRef.detectChanges();
        console.log(error);
      }
    );
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
  private initChart() {
    // For more information about the chartjs, visit this link
    // https://www.chartjs.org/docs/latest/getting-started/usage.html

    this.chartUI = new Chart(this.chart.nativeElement, {
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
}
interface IQueryAttendanceParams {
  startDate: string;
  endDate: string;
}

export interface IDashboardReport {
  studentCount: string;
  schoolCount: string;
  teacherCount: string;
  enumerators: string;
}
