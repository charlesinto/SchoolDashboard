import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  AfterViewInit,
  ElementRef,
  Input,
} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { StudentsService } from './students.service';
import { FormControl, Validators } from '@angular/forms';
import { School } from '../schools/schools.component';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

import {
  IState,
  ILocalGovernments,
} from '../../services/app-service/app-service.service';
import { AppServiceService } from '../../services/app-service/app-service.service';
import { SchoolsService } from '../schools/schools.service';
import { UploadStudentComponent } from './uploadstudents/upload-teacher-component';
import { LayoutConfigService } from 'app/core/_base/layout';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

const $ = window['$'];

@Component({
  selector: 'kt-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit, AfterViewInit {
  ELEMENT_DATA: Student[] = [];
  displayedColumns = [
    'select',
    'registrationNumber',
    'surname',
    'otherNames',
    'schoolName',
    'gender',
    'riskLevel',
    'actions',
  ];
  studentJSONfile: any;
  dataSource = new MatTableDataSource<Student>(this.ELEMENT_DATA);
  selection = new SelectionModel<Student>(true, []);
  loading: Boolean = false;
  editMode: Boolean = false;
  school: Student;
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  loadingFilterBox = false;
  statesSelected = new FormControl('', Validators.compose([]));
  lgaSelected = new FormControl('', Validators.compose([]));
  schoolSelected = new FormControl('', Validators.compose([]));
  riskLevel = new FormControl('', Validators.compose([]));
  totalFemale = 0;
  totalMale = 0;

  schools: School[] = [];

  states: IState[] = [];
  localgovernments: ILocalGovernments[] = [];
  state_access: string;
  totalCount = 0;
  schoolDataBase: School[] = [];

  studentDataBase: Student[] = [];
  @Input() data: { labels: string[]; datasets: any[] };
  @ViewChild('chart', { static: true }) chart: ElementRef;
  color = Chart.helpers.color;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(
    private changeDetectRef: ChangeDetectorRef,
    private studentService: StudentsService,
    private appService: AppServiceService,
    private schoolService: SchoolsService,
    private dialog: MatDialog,
    private layoutConfigService: LayoutConfigService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  async ngOnInit() {
    try {
      this.getStudents();
      this.getSchools();
      this.getUserAccessibleLocals();
      this.getUserAccessibleState();
      this.state_access = this.appService.getUserStateAccess();
      if (this.state_access.toLowerCase() !== 'all') {
        this.statesSelected.setValue([this.state_access]);
        this.statesSelected.disable();
      }
    } catch (error) {
      console.log(error);
    }
  }
  listenForRouteChange() {
    this.route.params.subscribe((param) => {
      const index = this.dataSource.data.findIndex(
        (item) => item.id == parseInt(param.id)
      );

      if (index !== -1) {
        const student = this.dataSource.data[index];

        const dialogRef = this.dialog.open(StudentDetailComponent, {
          maxWidth: '90vw',
          minWidth: '60vw',
          data: {
            student,
          },
        });

        dialogRef.afterClosed().subscribe((data) => {
          this.location.back();
        });
      } else {
      }
    });
  }

  ExportTOExcel() {
    // let targetTableElm = document.getElementById('ExampleMaterialTable');
    const data = [];
    this.dataSource.filteredData.forEach((item) => {
      const {
        rightThumbTemplate,
        leftThumbTemplate,
        rightThumb,
        leftThumb,
        rightFingerPrintId,
        leftFingerPrintId,
        rightRET,
        leftRET,
        schoolId,
        localid,
        ...others
      } = item;
      // console.log(others);
      data.push({ ...others });
    });
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'students.xlsx');
  }

  getSchools() {
    this.loadingFilterBox = true;
    this.schoolService.getSchools().subscribe(
      (data) => {
        this.loadingFilterBox = false;
        this.schools = data;
        this.schoolDataBase = data;
      },
      (error) => {
        this.loadingFilterBox = false;
      }
    );
  }
  initChartJS() {
    // For more information about the chartjs, visit this link
    // https://www.chartjs.org/docs/latest/getting-started/usage.html

    const chart = new Chart(this.chart.nativeElement, {
      type: 'bar',
      data: this.data,
      options: {
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
        barRadius: 4,
        scales: {
          xAxes: [
            {
              display: true,
              gridLines: true,
              stacked: true,
            },
          ],
          yAxes: [
            {
              display: true,
              stacked: true,
              gridLines: true,
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
      },
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getStudents() {
    this.loading = true;

    this.studentService.getStudents().subscribe(
      (data) => {
        if(data.students.length > 2){
          data.students[0].riskLevel = 'HIGH';
          data.students[1].riskLevel = 'MODERATE';
        }
        
        
        this.loading = false;
        this.dataSource.data = data.students;
        this.ELEMENT_DATA = data.students;
        this.studentDataBase = data.students;
        this.totalCount = 0;
        this.totalFemale = 0;
        this.totalMale = 0;

        data.data_gender.forEach((item) => {
          if (item.gender.toLowerCase().trim() === 'male') {
            this.totalMale = parseInt(item.count);
          } else {
            this.totalFemale = parseInt(item.count);
          }
        });
        this.totalCount = this.totalMale + this.totalFemale;

        this.data = {
          labels: ['Female', 'Male'],
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
              pointHoverBackgroundColor:
                this.layoutConfigService.getConfig('colors.state.brand'),
              pointHoverBorderColor: Chart.helpers
                .color('#000000')
                .alpha(0.1)
                .rgbString(),

              data: [this.totalFemale, this.totalMale],
            },
          ],
        };
        this.initChartJS();
        this.changeDetectRef.detectChanges();

        this.listenForRouteChange();
      },
      (error) => {
        this.loading = false;
        console.error(error);
      }
    );
  }
  reset(event) {
    event.preventDefault;

    this.schoolSelected.setValue([]);
    this.lgaSelected.setValue([]);
    this.statesSelected.setValue([]);
    this.riskLevel.setValue('');

    this.dataSource.data = this.studentDataBase;
    this.totalCount = this.studentDataBase.length;
    this.changeDetectRef.detectChanges();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    const $this = this;
    $('.custom-file-input').on('change', function (e) {
      const files = $(this).prop('files');
      console.log(files);
      const reader: any = new FileReader();
      reader.onload = (e: any) => {
        /* read workbook */
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        /* grab first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        /* save data */
        $this.studentJSONfile = XLSX.utils.sheet_to_html(ws, {
          editable: false,
          id: 'table-teachers',
        });

        $this.openDialog($this.studentJSONfile, files[0]);
      };
      reader.readAsBinaryString(files[0]);
      // reader.readAsArrayBuffer(files[0]);
      // const data = new Uint8Array(reader.result);
      // var wb = XLSX.read(data, { type: 'array' });
      // var htmlstr = XLSX.write(wb, {
      //   sheet: 'Sheet1',
      //   type: 'binary',
      //   bookType: 'html',
      // });
      // console.log(htmlstr);
      // $this.openDialog(htmlstr);
    });
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
  onRowElementClick(event: any, element: Student) {
    console.log(element);
    this.selection.clear();
    this.school = element;
    // this.editMode = true;
    this.router.navigateByUrl(`/students/${element.id}`);
  }
  closeDetailPage() {
    this.selection.clear();
    this.editMode = false;
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

  getUserAccessibleState() {
    this.states = this.appService.getStates(
      this.appService.getUserStateAccess()
    );
  }

  getUserAccessibleLocals(states = []) {
    this.localgovernments = this.appService.getLocalGovernments(states);
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
  exportPDF() {
    const doc = new jsPDF({
      orientation: 'landscape',
    });

    const columns = [];
    Object.keys(this.dataSource.data[0])
      .splice(0, 8)
      .forEach((key) => {
        columns.push({
          header: key.toUpperCase(),
          dataKey: key,
        });
      });
    const data = [];
    this.dataSource.data.forEach((item) => {
      data.push({ ...item });
    });
    const user = this.appService.getUser();

    autoTable(doc, {
      columns: columns,
      body: data,
      didDrawPage: (dataArg) => {
        doc.setFontSize(20);
        doc.setTextColor(40);
        if (user.state_access.toLocaleLowerCase() === 'all') {
          doc.text('Students', dataArg.settings.margin.left, 10);
        } else {
          doc.text(`Students`, dataArg.settings.margin.left, 10);
        }
      },
    });
    doc.save('students.pdf');
    // console.log('called in exit');
  }
  openDialog(htmlStr: any, file: any) {
    const dialogRef = this.dialog.open(UploadStudentComponent, {
      maxWidth: '90vw',
      minWidth: '60vw',
      data: {
        htmlStr,
        schools: this.schoolDataBase,
        states: this.states,
        lga: this.localgovernments,
        file,
      },
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      console.log('result is: ', result);
      if (result) {
        await this.getStudents();
      }
    });
  }
  filterData() {
    if (
      this.lgaSelected.value.includes('All') &&
      this.statesSelected.value.includes('All') &&
      this.schoolSelected.value.includes('All')
    ) {
      this.dataSource.data = this.studentDataBase;
      this.totalCount = this.studentDataBase.length;
    } else if (this.schoolSelected.value.length > 0) {
      if (!this.schoolSelected.value.includes('All')) {
        if (this.riskLevel.value.trim() != '') {
          this.dataSource.data = this.studentDataBase.filter(
            (item) =>
              this.schoolSelected.value.includes(item.school) &&
              item.riskLevel === this.riskLevel.value
          );
          this.totalCount = this.dataSource.data.length;
        } else {
          this.dataSource.data = this.studentDataBase.filter((item) =>
            this.schoolSelected.value.includes(item.school)
          );
          this.totalCount = this.dataSource.data.length;
        }
      }
    }

    this.changeDetectRef.detectChanges();
  }
}

export interface Element {
  schoolName: string;
  schoolNumber: string;
  lga: string;
  state: string;
  schoolCoordinate: string;
}

export interface Student {
  medicalCondition: string;
  guardianAddress: string;
  motherFullName: string;
  motherOccupation: string;
  fatherFullName: string;
  fatherOccupation: string;
  fatherTelephone: string;
  address: string;
  school: string;
  admissionNumber: string;
  hobby: string;
  dateOfAdmission: Date;
  dateOfBirth: Date;
  religion: string;
  town: string;
  gender: string;
  otherNames: string;
  surname: string;
  registrationNumber: string;
  studentClass: string;
  newEntrant: number;
  schoolId: number;
  placeOfBirth: string;
  studentflow: string;
  primarySchoolAttendedDate: string;
  previousClass: string;
  fatherAddress: string;
  motherAddress: string;
  motherTelephone: string;
  guardianTelephone: string;
  guardianName: string;
  profile_url: string;
  leftThumb: string;
  leftThumbTemplate: string;
  rightThumb: string;
  rightThumbTemplate: string;
  leftRET: Number;
  leftFingerPrintId: string;
  rightRET: number;
  id?: number;
  rightFingerPrintId: string;
  localid?: number;
  riskLevel?: 'HIGH' | 'MODERATE' | 'NIL';
}

export interface StudentInfo {
  data_gender: any[];
  students: Student[];
}
