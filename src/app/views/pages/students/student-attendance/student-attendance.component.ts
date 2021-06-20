import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
  Input,
} from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { StudentsService } from '../students.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  AppServiceService,
  IState,
  ILocalGovernments,
} from '../../../services/app-service/app-service.service';
import { SchoolsService } from '../../schools/schools.service';
// import { School } from '../../schools/schools.component';
import { School } from '../../schools/schools.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutConfigService } from 'app/core/_base/layout';

const $ = window['$'];

const moment = window['moment'];

@Component({
  selector: 'kt-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.scss'],
})
export class StudentAttendanceComponent implements OnInit {
  toppings = new FormControl();
  statesSelected = new FormControl('', Validators.compose([]));
  lgaSelected = new FormControl('', Validators.compose([]));
  schoolSelected = new FormControl('');
  classSelected = new FormControl('');
  dateRange = new FormControl('');
  localgovernments: ILocalGovernments[] = [];
  toppingList = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];
  states: IState[] = [];
  classes = [
    'SS One',
    'SS Two',
    'SS Three',
    'JS One',
    'JS Two',
    'JS Three',
    'Primary One',
    'Primary Two',
    'Primary Three',
    'Primary Four',
    'Primary Five',
    'Primary Six',
  ];
  ELEMENT_DATA: IAttendanceSummary[] = [];
  displayedColumns = ['date', 'count', 'actions'];
  dataSource = new MatTableDataSource<IAttendanceSummary>(this.ELEMENT_DATA);
  selection = new SelectionModel<IAttendanceSummary>(true, []);
  loading: Boolean = false;
  editMode: Boolean = false;
  school: IStudentAttendanceReport;
  title = 'My first AGM project';
  loadingFilterBox: Boolean = false;
  lat = 51.678418;
  lng = 7.809007;
  schools: School[] = [];
  totalCount: number = 0;
  schoolsDataBase: School[] = [];
  queryParams: IQueryAttendanceParams;
  state_access: string;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @Input() data: { labels: string[]; datasets: any[] };
  @Input() type: string = 'line';
  @ViewChild('chart', { static: true }) chart: ElementRef;
  color = Chart.helpers.color;

  constructor(
    private studentService: StudentsService,
    private changeDetectRef: ChangeDetectorRef,
    private appService: AppServiceService,
    private schoolService: SchoolsService,
    private route: ActivatedRoute,
    private router: Router,
    private layoutConfigService: LayoutConfigService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const attendanceParams: IQueryAttendanceParams = {
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
      };
      this.queryParams = attendanceParams;
      this.schoolSelected.setValue(attendanceParams.schools[0]);
      this.statesSelected.setValue(attendanceParams.state[0]);
      this.lgaSelected.setValue(attendanceParams.lga[0]);
      this.classSelected.setValue(attendanceParams.class);
      this.dateRange.setValue(
        `${attendanceParams.startDate} to ${attendanceParams.endDate}`
      );
      this.getAttendanceReport(attendanceParams);
    });
    this.initialDatePicker();
    this.getUserAccessibleState();
    this.getUserAccessibleLocals();
    this.getSchools();
    if (!this.data) {
      this.data = {
        labels: ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan'],
        datasets: [
          {
            fill: true,
            // borderWidth: 0,
            backgroundColor: this.color(
              this.layoutConfigService.getConfig('colors.state.brand')
            )
              .alpha(0.6)
              .rgbString(),
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

            data: [20, 40, 50, 25, 35, 60, 30],
          },
          {
            fill: true,
            // borderWidth: 0,
            backgroundColor: this.color(
              this.layoutConfigService.getConfig('colors.state.brand')
            )
              .alpha(0.2)
              .rgbString(),
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

            data: [25, 45, 55, 30, 40, 65, 35],
          },
        ],
      };
    }
    this.state_access = this.appService.getUserStateAccess();
    if (this.state_access.toLowerCase() !== 'all') {
      this.statesSelected.setValue(this.state_access);
      this.statesSelected.disable();
    }
    this.initChart();
  }

  getAttendanceReport(params: IQueryAttendanceParams) {
    if (
      params.state.length == 0 &&
      params.schools.length === 0 &&
      params.lga.length === 0
    )
      return;
    this.loading = true;
    this.studentService.getAttendanceReportByFilteredParams(params).subscribe(
      (data) => {
        this.loading = false;
        this.totalCount = data.reduce(
          (preValue, currentValue: IAttendanceSummary) =>
            (preValue += parseInt(currentValue.count)),
          0
        );
        this.dataSource.data = data;
        this.changeDetectRef.detectChanges();
      },
      (error) => {
        this.loading = false;
      }
    );
  }

  getUserAccessibleState() {
    this.states = this.appService.getStates(
      this.appService.getUserStateAccess()
    );
  }

  getUserAccessibleLocals(states = []) {
    this.localgovernments = this.appService.getLocalGovernments(states);
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
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
    if (this.statesSelected.value.length > 0) {
      this.getUserAccessibleLocals([this.statesSelected.value]);
      this.schools = this.schoolsDataBase.filter(
        (item) => this.statesSelected.value === item.state.trim()
      );
    } else {
      this.getUserAccessibleLocals();
      this.schools = this.schoolsDataBase;
    }
  }

  getSchools() {
    this.loadingFilterBox = true;
    this.schoolService.getSchools().subscribe(
      (data) => {
        this.loadingFilterBox = false;
        this.schools = data;
        this.schoolsDataBase = data;
      },
      (error) => {
        this.loadingFilterBox = false;
      }
    );
  }

  onlgaSelectionChange(event) {
    if (this.lgaSelected.value.length > 0) {
      this.schools = this.schoolsDataBase.filter(
        (item) => this.lgaSelected.value === item.lga.trim()
      );
    } else {
      this.schools = this.schoolsDataBase;
    }
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
  onRowElementClick(event: any, element: IAttendanceSummary) {
    this.router.navigate(['students', 'view-attendance-report'], {
      queryParams: {
        class: this.queryParams.class.join('**'),
        schools: this.queryParams.schools.join('**'),
        states: this.queryParams.state.join('**'),
        lga: this.queryParams.lga.join('**'),
        dateRange: `${this.queryParams.startDate} to ${this.queryParams.endDate}`,
        attendanceDate: element.date,
      },
    });
  }
  closeDetailPage() {
    this.selection.clear();
    this.editMode = false;
  }
  filterData() {
    this.router.navigate(['students', 'attendance-report'], {
      queryParams: {
        class: this.classSelected.value
          ? this.classSelected.value.join('**')
          : '',
        schools: this.schoolSelected.value
          ? [this.schoolSelected.value].join('**')
          : '',
        states: this.statesSelected.value
          ? [this.statesSelected.value].join('**')
          : '',
        lga: this.lgaSelected.value ? [this.lgaSelected.value].join('**') : '',
        dateRange: this.dateRange.value ? this.dateRange.value : '',
      },
    });
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

export interface IStudentAttendanceReport {
  school: string;
  date: string;
  gender: string;
  count: string;
  studentClass: string;
}

export interface IQueryAttendanceParams {
  startDate: string;
  endDate: string;
  schools: string[];
  lga: string[];
  state: string[];
  class: string[];
}

export interface IAttendanceSummary {
  date: string;
  count: string;
}
