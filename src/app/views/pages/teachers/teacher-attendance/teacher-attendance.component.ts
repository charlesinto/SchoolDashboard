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
import { TeachersService } from '../teachers.service';
import {
  IState,
  ILocalGovernments,
  AppServiceService,
} from '../../../services/app-service/app-service.service';
import { FormControl, Validators } from '@angular/forms';
import { School } from '../../schools/schools.component';
import { SchoolsService } from '../../schools/schools.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IAttendanceSummary } from '../../students/student-attendance/student-attendance.component';
import { LayoutConfigService } from 'app/core/_base/layout';
// import { SchoolsService } from 'src/app/view/pages/schools.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const $ = window['$'];

const moment = window['moment'];

@Component({
  selector: 'kt-teacher-attendance',
  templateUrl: './teacher-attendance.component.html',
  styleUrls: ['./teacher-attendance.component.scss'],
})
export class TeacherAttendanceComponent implements OnInit {
  ELEMENT_DATA: ITeacherAttendanceReport[] = [];
  displayedColumns = ['date', 'count', 'actions'];
  dataSource = new MatTableDataSource<ITeacherAttendanceReport>(
    this.ELEMENT_DATA
  );
  selection = new SelectionModel<ITeacherAttendanceReport>(true, []);
  loading: Boolean = false;
  editMode: Boolean = false;
  school: ITeacherAttendanceReport;
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  loadingFilterBox: Boolean = false;
  totalCount: number = 0;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

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
  schoolsDataBase: School[] = [];
  schools: School[] = [];

  state_access: string;

  queryParams: ITeacherAttendanceQueryParams;

  @Input() data: { labels: string[]; datasets: any[] };
  @Input() type: string = 'line';
  @ViewChild('chart', { static: true }) chart: ElementRef;
  color = Chart.helpers.color;

  constructor(
    private teacherService: TeachersService,
    private changeDetectRef: ChangeDetectorRef,
    private appService: AppServiceService,
    private schoolService: SchoolsService,
    private router: Router,
    private route: ActivatedRoute,
    private layoutConfigService: LayoutConfigService
  ) {}

  ngOnInit() {
    // this.getTeacherAttendanceByState();
    this.subscribeToRouteQueryParamsChange();
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
            pointHoverBackgroundColor:
              this.layoutConfigService.getConfig('colors.state.brand'),
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
            pointHoverBackgroundColor:
              this.layoutConfigService.getConfig('colors.state.brand'),
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
  private initChart() {
    // For more information about the chartjs, visit this link
    // https://www.chartjs.org/docs/latest/getting-started/usage.html

    const chart = new Chart(this.chart.nativeElement, {
      type: this.type,
      data: this.data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: false,
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
  exportPDF() {
    const doc = new jsPDF({
      orientation: 'landscape',
    });

    const columns = [
      {
        header: 'Class',
        dataKey: 'class',
      },
      {
        header: 'Status',
        dataKey: 'status',
      },
      {
        header: 'Full Name',
        dataKey: 'fullName',
      },
      {
        header: 'Attendance Date',
        dataKey: 'attendanceDate',
      },
    ];

    const data = [];
    this.dataSource.data.forEach((item) => {
      data.push({ ...item });
    });
    console.log(data);
    const user = this.appService.getUser();

    autoTable(doc, {
      columns: columns,
      body: data,
      didDrawPage: (dataArg) => {
        doc.setFontSize(20);
        doc.setTextColor(40);
        if (user.state_access.toLocaleLowerCase() === 'all') {
          doc.text('Students Attendance', dataArg.settings.margin.left, 10);
        } else {
          doc.text(`Students Attendance`, dataArg.settings.margin.left, 10);
        }
      },
    });
    doc.save('Students_Attendance.pdf');
    // console.log('called in exit');
  }
  subscribeToRouteQueryParamsChange() {
    this.route.queryParams.subscribe((params) => {
      const query: ITeacherAttendanceQueryParams = {
        school: params['school'],
        state: params['state'],
        lga: params['lga'],
        startDate: params['dateRange']
          ? params['dateRange'].split('to')[0].trim()
          : '',
        endDate: params['dateRange']
          ? params['dateRange'].split('to')[1].trim()
          : '',
      };
      this.queryParams = query;
      this.statesSelected.setValue(query.state);
      if (this.statesSelected.value && this.statesSelected.value !== '') {
        this.getUserAccessibleLocals([query.state]);
      }
      this.lgaSelected.setValue(query.lga);

      this.schoolSelected.setValue(query.school);
      this.dateRange.setValue(`${query.startDate} to ${query.endDate}`);
      this.getAttendanceReport(query);
    });
  }
  getAttendanceReport(params: ITeacherAttendanceQueryParams) {
    if (
      (!params.school || params.school.trim() === '') &&
      (!params.state || params.state.trim() === '') &&
      (!params.lga || params.lga === '')
    )
      return;
    this.loading = true;
    this.teacherService.getAttendanceReport(params).subscribe(
      (data) => {
        this.loading = false;
        this.dataSource.data = data;
        this.totalCount = data.reduce(
          (preVal: any, currVal: IAttendanceSummary) =>
            (preVal += parseInt(currVal.count)),
          0
        );
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
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
  getTeacherAttendanceByState() {
    this.loading = true;
    this.teacherService.getTeacherAttendanceReportAll().subscribe(
      (data) => {
        this.dataSource.data = data;
        this.loading = false;
        this.totalCount = data.reduce(
          (accumulate: any, currentValue: ITeacherAttendanceReport) =>
            accumulate + parseInt(currentValue.count),
          0
        );
        this.changeDetectRef.detectChanges();
      },
      (error) => {
        this.loading = false;
      }
    );
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  getSchools() {
    this.loadingFilterBox = true;
    this.schoolService.getSchools().subscribe(
      (data) => {
        this.loadingFilterBox = false;
        this.schoolsDataBase = data;
        if (this.lgaSelected.value && this.lgaSelected.value !== '') {
          this.schools = this.schoolsDataBase.filter(
            (item) => this.lgaSelected.value === item.lga
          );
        } else if (
          this.statesSelected.value &&
          this.statesSelected.value !== ''
        ) {
          this.schools = this.schoolsDataBase.filter(
            (item) => this.statesSelected.value === item.state
          );
        } else {
          this.schools = data;
        }
      },
      (error) => {
        this.loadingFilterBox = false;
      }
    );
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }
  onRowElementClick(event: any, element: ITeacherAttendanceReport) {
    this.router.navigate(['teachers', 'view-attendance-report'], {
      queryParams: {
        school: this.queryParams.school,
        state: this.queryParams.state,
        lga: this.queryParams.lga,
        dateRange: `${this.queryParams.startDate} to ${this.queryParams.endDate}`,
        attendanceDate: element.date,
      },
    });
  }
  closeDetailPage() {
    this.selection.clear();
    this.editMode = false;
  }
  onStateSelectionChange(event: any) {
    this.getUserAccessibleLocals([this.statesSelected.value]);
    this.schools = this.schoolsDataBase.filter(
      (item) => this.statesSelected.value === item.state
    );
  }
  onlgaSelectionChange(event) {
    this.schools = this.schoolsDataBase.filter(
      (item) => this.lgaSelected.value === item.lga
    );
  }
  getUserAccessibleLocals(states = []) {
    this.localgovernments = this.appService.getLocalGovernments(states);
  }
  filterData() {
    this.router.navigate(['teachers', 'attendance-report'], {
      queryParams: {
        school: this.schoolSelected.value,
        state: this.statesSelected.value,
        lga: this.lgaSelected.value,
        dateRange: this.dateRange.value ? this.dateRange.value : '',
      },
    });
  }
}

export interface ITeacherAttendanceReport {
  date: string;
  count: string;
}

export interface ITeacherAttendanceQueryParams {
  school: string;
  state: string;
  lga: string;
  startDate?: string;
  endDate?: string;
}
