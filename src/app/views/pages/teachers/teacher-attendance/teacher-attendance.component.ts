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
// import { SchoolsService } from 'src/app/view/pages/schools.service';

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

  queryParams: ITeacherAttendanceQueryParams;

  constructor(
    private teacherService: TeachersService,
    private changeDetectRef: ChangeDetectorRef,
    private appService: AppServiceService,
    private schoolService: SchoolsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.getTeacherAttendanceByState();
    this.subscribeToRouteQueryParamsChange();
    this.initialDatePicker();
    this.getUserAccessibleState();
    this.getUserAccessibleLocals();
    this.getSchools();
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
