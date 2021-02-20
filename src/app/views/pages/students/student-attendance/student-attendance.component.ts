import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
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
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private studentService: StudentsService,
    private changeDetectRef: ChangeDetectorRef,
    private appService: AppServiceService,
    private schoolService: SchoolsService,
    private route: ActivatedRoute,
    private router: Router
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
      this.getAttendanceReport(attendanceParams);
    });
    this.initialDatePicker();
    this.getUserAccessibleState();
    this.getUserAccessibleLocals();
    this.getSchools();
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
      this.getUserAccessibleLocals(this.statesSelected.value);
      this.schools = this.schoolsDataBase.filter((item) =>
        this.statesSelected.value.includes(item.state.trim())
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
      this.schools = this.schoolsDataBase.filter((item) =>
        this.lgaSelected.value.includes(item.lga.trim())
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
          ? this.schoolSelected.value.join('**')
          : '',
        states: this.statesSelected.value
          ? this.statesSelected.value.join('**')
          : '',
        lga: this.lgaSelected.value ? this.lgaSelected.value.join('**') : '',
        dateRange: this.dateRange.value ? this.dateRange.value : '',
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
