import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { Chart } from 'chart.js/dist/Chart.min.js';
import { LayoutConfigService } from 'app/core/_base/layout';
import { FormControl, Validators } from '@angular/forms';
import {
  AppServiceService,
  ILocalGovernments,
  IState,
} from '../../../services/app-service/app-service.service';
import { TeachersService } from '../teachers.service';
import { SchoolsService } from '../../schools/schools.service';
import { School } from '../../schools/schools.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EffectiveStateReportDetailModalComponent } from '../effective-state-report-detail-modal/effective-state-report-detail-modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

const $ = window['$'];
const moment = window['moment'];

@Component({
  selector: 'kt-effective-state-report',
  templateUrl: './effective-state-report.component.html',
  styleUrls: ['./effective-state-report.component.scss'],
})
export class EffectiveStateReportComponent implements OnInit, OnDestroy {
  statesSelected = new FormControl('', Validators.compose([]));
  lgaSelected = new FormControl('', Validators.compose([]));
  schoolSelected = new FormControl('', Validators.compose([]));
  states: IState[] = [];
  localgovernments: ILocalGovernments[] = [];
  schools: School[] = [];
  schoolDataBase: School[] = [];
  color = Chart.helpers.color;
  dateRange = new FormControl('');
  @Input() data: { labels: string[]; datasets: any[] } = {
    labels: [
      'Effectively Met( 60 and Above )',
      'Partially Met(50-60)',
      'Not Met(Below 50)',
    ],
    datasets: [
      {
        barPercentage: 0.5,
        fill: true,
        // borderWidth: 0,
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(120, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
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

        data: [0, 0, 0],
      },
    ],
  };

  loading = false;

  @Input() barChartData: { labels: string[]; datasets: any[] } = {
    labels: ['Effectively Met', 'Partially Met', 'Not Met'],
    datasets: [
      {
        label: 'Lesson Plan',
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

        data: [0],
      },

      {
        label: 'Subject Matter Mastery',
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

        data: [0, 0],
      },
      {
        label: 'Teaching Methodology',
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

        data: [10, 20, 30],
      },
    ],
  };

  state: string | undefined;
  lga: string | undefined;
  endDate: string | undefined;
  startDate: string | undefined;
  school: string | undefined;

  @ViewChild('chart', { static: true }) chart: ElementRef;

  chartUI;
  constructor(
    private teacherService: TeachersService,
    private schoolService: SchoolsService,
    private appService: AppServiceService,
    private layoutConfigService: LayoutConfigService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private changeDetectRef: ChangeDetectorRef,
    private location: Location
  ) {}

  ngOnInit() {
    this.getUserAccessibleState();
    this.getUserAccessibleLocals();
    this.initChartJS();
    this.initialDatePicker();
    this.listenToRouteChange();
    this.getSchools();
    // document.addEventListener('mousemove', this.getCursorXY);
  }
  ngOnDestroy() {
    // document.removeEventListener('mousemove', this.getCursorXY);
  }

  getSchools() {
    this.loading = true;
    this.schoolService.getSchools().subscribe(
      (data) => {
        this.schools = data;
        this.schoolDataBase = data;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        console.log(error);
      }
    );
  }

  resetForm(event) {
    event.preventDefault();
    if (
      this.schoolSelected.value.length > 0 ||
      this.lgaSelected.value.length > 0 ||
      this.statesSelected.value.length > 0
    ) {
      this.location.back();

      this.chartUI.data = {
        labels: [
          'Effectively Met( 60 and Above )',
          'Partially Met(50-60)',
          'Not Met(Below 50)',
        ],
        datasets: [
          {
            barPercentage: 0.8,
            fill: true,
            // borderWidth: 0,
            backgroundColor: [
              'rgba(54, 162, 235, 0.6)',
              'rgba(120, 162, 235, 0.6)',
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
            pointHoverBackgroundColor:
              this.layoutConfigService.getConfig('colors.state.brand'),
            pointHoverBorderColor: Chart.helpers
              .color('#000000')
              .alpha(0.1)
              .rgbString(),

            data: [0, 0, 0],
          },
        ],
      };

      this.chartUI.update();

      // this.changeDetectRef.detectChanges();
    }
  }

  listenToRouteChange() {
    this.route.queryParams.subscribe((data) => {
      const { state, lga, endDate, startDate, school } = data;
      this.state = state;
      this.lga = lga;
      this.endDate = endDate;
      this.startDate = startDate;
      this.school = school;
      this.loading = true;
      if (state) {
        this.statesSelected.setValue(state.split(','));
      } else {
        this.statesSelected.setValue([]);
      }
      if (lga) {
        this.lgaSelected.setValue(state.split(','));
      } else {
        this.lgaSelected.setValue([]);
      }
      if (startDate && endDate) {
        this.dateRange.setValue(`${startDate} to ${endDate}`);
      } else {
        this.dateRange.setValue('');
      }
      if (school) {
        this.schoolSelected.setValue(school.split('_'));
      } else {
        this.schoolSelected.setValue([]);
      }
      this.teacherService
        .getCoachingReportByState(state, lga, endDate, startDate, school)
        .subscribe(
          (data) => {
            this.loading = false;
            console.log(data);
            if (data.length > 0) {
              this.chartUI.data = {
                labels: [
                  'Effectively Met( 60 and Above )',
                  'Partially Met(50-60)',
                  'Not Met(Below 50)',
                ],
                datasets: [
                  {
                    barPercentage: 0.8,
                    fill: true,
                    // borderWidth: 0,
                    backgroundColor: [
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(120, 162, 235, 0.6)',
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
                    pointHoverBackgroundColor:
                      this.layoutConfigService.getConfig('colors.state.brand'),
                    pointHoverBorderColor: Chart.helpers
                      .color('#000000')
                      .alpha(0.1)
                      .rgbString(),

                    data: [data[0].count, data[2].count, data[1].count],
                  },
                ],
              };

              this.chartUI.update();
            }

            this.changeDetectRef.detectChanges();
          },
          (error) => {
            this.loading = false;
            console.log(error);
          }
        );
    });
  }

  onStateSelectionChange(event: any) {
    // if (this.statesSelected.value.includes('All')) {
    //   const index = this.statesSelected.value.findIndex(
    //     (item) => item === 'All'
    //   );
    //   const values = this.statesSelected.value;
    //   values.splice(index, 1);
    //   // this.statesSelected.setValue([...])
    // }
    if (!this.statesSelected.value.includes('All')) {
      this.getUserAccessibleLocals(this.statesSelected.value);
      this.schools = this.schoolDataBase.filter((item) =>
        this.statesSelected.value.includes(item.state.trim())
      );
    } else {
      this.getUserAccessibleLocals();
      this.schools = this.schoolDataBase;
    }
  }

  getUserAccessibleLocals(states = []) {
    this.localgovernments = this.appService.getLocalGovernments(states);
  }

  getUserAccessibleState() {
    this.states = this.appService.getStates(
      this.appService.getUserStateAccess()
    );
  }

  onlgaSelectionChange(event) {
    if (!this.lgaSelected.value.includes('All')) {
      this.schools = this.schoolDataBase.filter((item) =>
        this.lgaSelected.value.includes(item.lga.trim())
      );
    } else {
      if (this.statesSelected.value.includes('All')) {
        this.schools = this.schoolDataBase;
      } else {
        this.schools = this.schoolDataBase.filter((item) =>
          this.statesSelected.value.includes(item.state)
        );
      }
    }
  }

  filterReort() {
    if (
      this.dateRange.value.trim() !== '' &&
      this.statesSelected.value.length > 0 &&
      this.schoolSelected.value.length > 0 &&
      this.lgaSelected.value.length > 0
    ) {
      this.router.navigate(['/teachers', 'effectiveness-report-by-state'], {
        queryParams: {
          state: this.statesSelected.value.join(','),
          lga: this.lgaSelected.value.join(','),
          startDate: this.dateRange.value.split('to')[0].trim(),
          endDate: this.dateRange.value.split('to')[1].trim(),
          school: this.schoolSelected.value.join('_'),
        },
      });
    } else if (
      this.dateRange.value.trim() === '' &&
      this.statesSelected.value.length > 0 &&
      this.lgaSelected.value.length > 0 &&
      this.schoolSelected.value.length > 0
    ) {
      this.router.navigate(['/teachers', 'effectiveness-report-by-state'], {
        queryParams: {
          state: this.statesSelected.value.join(','),
          lga: this.lgaSelected.value.join(','),
          school: this.schoolSelected.value.join('_'),
        },
      });
    } else if (
      this.dateRange.value.trim() === '' &&
      this.statesSelected.value.length > 0 &&
      this.lgaSelected.value.length === 0
    ) {
      this.router.navigate(['/teachers', 'effectiveness-report-by-state'], {
        queryParams: {
          state: this.statesSelected.value.join(','),
        },
      });
    } else if (
      this.dateRange.value.trim() === '' &&
      this.statesSelected.value.length === 0 &&
      this.lgaSelected.value.length > 0
    ) {
      this.router.navigate(['/teachers', 'effectiveness-report-by-state'], {
        queryParams: {
          lga: this.lgaSelected.value.join(','),
        },
      });
    } else if (
      this.dateRange.value.trim() === '' &&
      this.statesSelected.value.length === 0 &&
      this.lgaSelected.value.length === 0 &&
      this.schoolSelected.value.length > 0
    ) {
      this.router.navigate(['/teachers', 'effectiveness-report-by-state'], {
        queryParams: {
          school: this.schoolSelected.value.join('_'),
        },
      });
    }
  }

  initChartJS() {
    // For more information about the chartjs, visit this link
    // https://www.chartjs.org/docs/latest/getting-started/usage.html
    const $this = this;
    this.chartUI = new Chart(this.chart.nativeElement, {
      type: 'bar',
      data: this.data,
      options: {
        indexAxis: 'y',
        title: {
          display: false,
        },
        tooltips: {
          intersect: false,
          mode: 'nearest',
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        barRadius: 2,
        scales: {
          xAxes: [
            {
              display: true,
              // gridLines: true,
              stacked: true,
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
              },
            },
          ],
          yAxes: [
            {
              display: true,
              stacked: true,
              // gridLines: true,
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
              },
            },
          ],
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
      },
      plugins: [
        {
          id: 'myEventCatcher',
          beforeEvent(chart, args, pluginOptions) {
            const event = args;

            if (event.type === 'click') {
              // process the event
              console.log(chart);
              const activeElement = chart.getElementAtEvent(event);
              if (
                activeElement[0]['_model'].label ===
                'Effectively Met( 60 and Above )'
              ) {
                $this.getReportDetail(ReportType.Effectively_Met);
              } else if (
                activeElement[0]['_model'].label === 'Partially Met(50-60)'
              ) {
                $this.getReportDetail(ReportType.Partially_Met);
              } else {
                $this.getReportDetail(activeElement[0]['_model'].label);
              }
            }
          },
        },
      ],
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

  getReportDetail(reportType: ReportType) {
    const dialogRef = this.dialog.open(
      EffectiveStateReportDetailModalComponent,
      {
        maxWidth: '90vw',
        minWidth: '60vw',
        data: {
          category: reportType,
          state: this.state,
          lga: this.lga,
          startDate: this.startDate,
          endDate: this.endDate,
          school: this.school,
        },
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`D`);
    });
  }
  // getCursorXY(e) {
  //   if (window.Event) {
  //     const xCoordinate = window['Event']
  //       ? e.pageX
  //       : e.clientX +
  //         (document.documentElement.scrollLeft
  //           ? document.documentElement.scrollLeft
  //           : document.body.scrollLeft);
  //     const yCoordinate = window['Event']
  //       ? e.pageY
  //       : e.clientY +
  //         (document.documentElement.scrollTop
  //           ? document.documentElement.scrollTop
  //           : document.body.scrollTop);
  //   }
  // }
}

export enum ReportType {
  Effectively_Met = 'Effectively Met(60-75)',
  Partially_Met = 'Partially Met(50-70)',
  Not_Met = 'Not Met(Below 50)',
}
