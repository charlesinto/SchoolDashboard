import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  Input,
  AfterViewInit,
} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { TeachersService } from './teachers.service';
import { FormControl, Validators } from '@angular/forms';
import {
  IState,
  ILocalGovernments,
  AppServiceService,
} from '../../services/app-service/app-service.service';
import { School } from '../schools/schools.component';
import { SchoolsService } from '../schools/schools.service';
import { Chart } from 'chart.js/dist/Chart.min.js';
import { LayoutConfigService } from 'app/core/_base/layout';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { UploadTeacherComponent } from './uploadteachers/upload-teacher-component';

const $ = window['$'];

@Component({
  selector: 'kt-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit, AfterViewInit {
  ELEMENT_DATA: Teacher[] = [];
  displayedColumns = [
    'select',
    'registrationNumber',
    'surname',
    'otherNames',
    'schoolName',
    'gender',
    'actions',
  ];
  dataSource = new MatTableDataSource<Teacher>(this.ELEMENT_DATA);
  selection = new SelectionModel<Teacher>(true, []);
  loading: Boolean = false;
  teacherJsonFile;
  editMode: Boolean = false;
  school: Teacher;
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  loadingFilterBox = false;
  statesSelected = new FormControl('', Validators.compose([]));
  lgaSelected = new FormControl('', Validators.compose([]));
  schoolSelected = new FormControl('', Validators.compose([]));

  schools: School[] = [];

  states: IState[] = [];
  localgovernments: ILocalGovernments[] = [];

  totalCount = 0;
  schoolDataBase: School[] = [];

  teacherDatabase: Teacher[] = [];
  state_access: string;
  totalMale = 0;
  totalFemale = 0;
  @Input() data: { labels: string[]; datasets: any[] };
  @ViewChild('chart', { static: true }) chart: ElementRef;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(
    private changeDetectRef: ChangeDetectorRef,
    private teacherService: TeachersService,
    private schoolService: SchoolsService,
    private appService: AppServiceService,
    private layoutConfigService: LayoutConfigService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getTeachers();
    this.getSchools();
    this.getUserAccessibleState();
    this.getUserAccessibleLocals();
    this.state_access = this.appService.getUserStateAccess();
    if (this.state_access.toLowerCase() !== 'all') {
      this.statesSelected.setValue([this.state_access]);
      this.statesSelected.disable();
    }
  }

  openDialog(htmlStr: any, file: any) {
    const dialogRef = this.dialog.open(UploadTeacherComponent, {
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

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
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
  ExportTOExcel() {
    // let targetTableElm = document.getElementById('ExampleMaterialTable');
    const data = [];
    this.dataSource.filteredData.forEach((item) => {
      const {
        rightThumbTemplate,
        leftThumbTemplate,
        rightThumb,
        leftThumb,
        schoolId,
        localid,
        ...others
      } = item;
      data.push({ ...others });
    });
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'teachers.xlsx');
  }
  getTeachers() {
    this.loading = true;
    this.teacherService.getTeachers().subscribe(
      (data) => {
        this.loading = false;
        this.dataSource.data = data;
        this.totalCount = data.length;
        data.forEach((item) => {
          if (item.gender.toLowerCase().trim() === 'male') {
            this.totalMale += 1;
          } else {
            this.totalFemale += 1;
          }
        });
        this.ELEMENT_DATA = data;
        this.teacherDatabase = data;
        this.data = {
          labels: ['Male', 'Female'],
          datasets: [
            {
              // label: 'dataset 1',
              backgroundColor: this.layoutConfigService.getConfig(
                'colors.state.success'
              ),
              data: [this.totalMale, this.totalFemale],
            },
          ],
        };

        this.initChartJS();
        this.changeDetectRef.detectChanges();
      },
      (error) => {
        this.loading = false;
        console.log(error);
      }
    );
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
        $this.teacherJsonFile = XLSX.utils.sheet_to_html(ws, {
          editable: false,
          id: 'table-teachers',
        });

        $this.openDialog($this.teacherJsonFile, files[0]);
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
  onRowElementClick(event: any, element: Teacher) {
    console.log(element);
    this.selection.clear();
    this.school = element;
    this.editMode = true;
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
  filterData() {
    if (
      this.lgaSelected.value.includes('All') &&
      this.statesSelected.value.includes('All') &&
      this.schoolSelected.value.includes('All')
    ) {
      this.dataSource.data = this.teacherDatabase;
      this.reComputeGraph(this.dataSource.data);
      this.totalCount = this.teacherDatabase.length;
    } else if (this.schoolSelected.value.length > 0) {
      if (!this.schoolSelected.value.includes('All')) {
        this.dataSource.data = this.teacherDatabase.filter((item) =>
          this.schoolSelected.value.includes(item.schoolName)
        );
        this.totalCount = this.dataSource.data.length;
        this.reComputeGraph(this.dataSource.data);
      } else {
        this.dataSource.data = this.teacherDatabase;
        this.totalCount = this.dataSource.data.length;
        this.reComputeGraph(this.dataSource.data);
      }
    }

    this.changeDetectRef.detectChanges();
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
          doc.text('Teachers', dataArg.settings.margin.left, 10);
        } else {
          doc.text(`Teachers`, dataArg.settings.margin.left, 10);
        }
      },
    });
    doc.save('teachers.pdf');
    // console.log('called in exit');
  }
  reComputeGraph(data: Teacher[]) {
    this.totalFemale = 0;
    this.totalMale = 0;
    data.forEach((item) => {
      if (item.gender.trim().toLowerCase() === 'male') {
        this.totalMale += 1;
      } else {
        this.totalFemale += 1;
      }
    });
    this.data = {
      labels: ['Male', 'Female'],
      datasets: [
        {
          // label: 'dataset 1',
          backgroundColor: this.layoutConfigService.getConfig(
            'colors.state.success'
          ),
          data: [this.totalMale, this.totalFemale],
        },
      ],
    };

    this.initChartJS();
  }
}

export interface Element {
  schoolName: string;
  schoolNumber: string;
  lga: string;
  state: string;
  schoolCoordinate: string;
}

export interface Teacher {
  otherNames: string;
  qualification: string;
  gradeLevel: string;
  designation: string;
  maidenName: String;
  gender: string;
  surname: string;
  registrationNumber: string;
  oracleNumber: string;
  state: string;
  schoolName: string;
  schoolId: number;
  qualificationDate: string;
  salarySource: string;
  subjectTaught: string;
  teacherClass: string;
  teachingType: string;
  remarks: string;
  exitDate: Date;
  email: string;
  residentNumber: string;
  pfaNumber: string;
  telePhoneNumber: string;
  homeAddress: string;
  school: string;
  dateOfPromotion: Date;
  dateOfConfirmation: Date;
  dateOfInterStateTravel: Date;
  dateOfFirstAppointment: Date;
  dateOfBirth: Date;
  profile_url: string;
  leftThumb: string;

  leftThumbTemplate: string;
  rightThumb: string;
  rightThumbTemplate: string;
  localid?: number;
}
