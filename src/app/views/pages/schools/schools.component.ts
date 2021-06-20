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
import { SchoolsService } from './schools.service';
import { FormControl, Validators } from '@angular/forms';
import {
  IState,
  ILocalGovernments,
  AppServiceService,
} from '../../services/app-service/app-service.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

type AOA = any[][];

@Component({
  selector: 'kt-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss'],
})
export class SchoolsComponent implements OnInit, AfterViewInit {
  ELEMENT_DATA: School[] = [];
  displayedColumns = [
    'select',
    'schoolName',
    'schoolNumber',
    'lga',
    'state',
    'schoolCoordinate',
    'actions',
  ];
  dataSource = new MatTableDataSource<School>(this.ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);
  loading: Boolean = false;

  editMode: Boolean = false;
  school: School;
  title = 'My first AGM project';
  lat = 9.0765;
  lng = 7.3986;
  zoomLevel = 8;
  data: AOA = [
    [1, 2],
    [3, 4],
  ];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';

  locations: { id?: number; lat: string; lng: string }[] = [];
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  @ViewChild('table', { static: false }) table: ElementRef;

  statesSelected = new FormControl('', Validators.compose([]));
  lgaSelected = new FormControl('', Validators.compose([]));

  states: IState[] = [];
  localgovernments: ILocalGovernments[] = [];

  totalCount = 0;
  schoolDataBase: School[] = [];

  openInfoWindows: number[] = [];

  schoolOnView: School;

  state_access: string;

  constructor(
    private schoolService: SchoolsService,
    private changeDetectRef: ChangeDetectorRef,
    private appService: AppServiceService
  ) {}

  ngOnInit() {
    this.getLocation();
    this.getUserAccessibleState();
    this.getUserAccessibleLocals();
    this.getSchools();
    this.state_access = this.appService.getUserStateAccess();
    if (this.state_access.toLowerCase() !== 'all') {
      this.statesSelected.setValue([this.state_access]);
      this.statesSelected.disable();
    }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ExportTOExcel2(): void {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

  ExportTOExcel() {
    // let targetTableElm = document.getElementById('ExampleMaterialTable');

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(
      this.dataSource.filteredData
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'schools.xlsx');
  }

  getUserAccessibleState() {
    this.states = this.appService.getStates(
      this.appService.getUserStateAccess()
    );
  }
  onStateSelectionChange(event: any) {
    if (this.statesSelected.value.includes('All')) {
      return this.getUserAccessibleLocals();
    }
    this.getUserAccessibleLocals(this.statesSelected.value);
  }
  getUserAccessibleLocals(states = []) {
    this.localgovernments = this.appService.getLocalGovernments(states);
  }

  getSchools() {
    this.loading = true;
    this.schoolService.getSchools().subscribe(
      (data) => {
        console.log(data);
        this.ELEMENT_DATA = data;
        this.dataSource.data = this.ELEMENT_DATA;
        this.schoolDataBase = data;
        this.loading = false;
        this.totalCount = data.length;
        this.locations = [];
        data.forEach((item) => {
          if (item.schoolCoordinate) {
            this.locations.push({
              lat: item.schoolCoordinate.split(',')[0].trim(),
              lng: item.schoolCoordinate.split(',')[1].trim(),
              id: item.id,
            });
          }
        });
        this.changeDetectRef.detectChanges();
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
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
  onRowElementClick(event: any, element: School) {
    console.log(element);
    this.selection.clear();
    this.school = element;
    this.lat = element.schoolCoordinate
      ? parseInt(element.schoolCoordinate.split(',')[0])
      : null;
    this.lng = element.schoolCoordinate
      ? parseInt(element.schoolCoordinate.split(',')[1])
      : null;
    this.editMode = true;
  }
  closeDetailPage() {
    this.selection.clear();
    this.editMode = false;
  }
  filterData() {
    if (
      this.lgaSelected.value.includes('All') &&
      this.statesSelected.value.includes('All')
    ) {
      this.dataSource.data = this.schoolDataBase;
    } else if (this.lgaSelected.value.length > 0) {
      if (!this.lgaSelected.value.includes('All')) {
        this.dataSource.data = this.schoolDataBase.filter((item) =>
          this.lgaSelected.value.includes(item.lga)
        );
      } else {
        console.log('called here now o');
        if (this.statesSelected.value.includes('All')) {
          this.dataSource.data = this.schoolDataBase;
        } else {
          this.dataSource.data = this.schoolDataBase.filter((item) =>
            this.statesSelected.value.includes(item.state)
          );
        }
      }
    } else if (this.statesSelected.value.length > 0) {
      if (!this.statesSelected.value.includes('All'))
        this.dataSource.data = this.schoolDataBase.filter((item) =>
          this.statesSelected.value.includes(item.state)
        );
    }
    this.totalCount = this.dataSource.data.length;
    this.locations = [];
    this.dataSource.data.forEach((item) => {
      if (item.schoolCoordinate) {
        this.locations.push({
          lat: item.schoolCoordinate.split(',')[0].trim(),
          lng: item.schoolCoordinate.split(',')[1].trim(),
          id: item.id,
        });
      }
    });
    this.changeDetectRef.detectChanges();
  }
  markerClicked(event, item: { id?: number; lat: string; lng: string }) {
    console.log(event, item);
    this.openInfoWindows = [];
    const index = this.schoolDataBase.findIndex(
      (school) => school.id === item.id
    );
    this.schoolOnView = this.schoolDataBase[index];
    this.openInfoWindows.push(item.id);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  exportPDF() {
    const doc = new jsPDF({
      orientation: 'landscape',
    });

    const columns = [];
    Object.keys(this.schoolDataBase[0])
      .splice(2, 9)
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
          doc.text('All Schools', dataArg.settings.margin.left, 10);
        } else {
          doc.text(`${user.state_access}`, dataArg.settings.margin.left, 10);
        }
      },
    });
    doc.save('schools.pdf');
    // console.log('called in exit');
  }
  getLocation(): void {
    console.log('cal');
    if (navigator.geolocation) {
      console.log('cal 56');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('kkjj', position);
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          this.lng = longitude;
          this.lat = latitude;
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('No support for geolocation');
    }
  }
  isInfoWindowOpen(id) {
    return this.openInfoWindows.includes(id);
  }
}

export interface Element {
  schoolName: string;
  schoolNumber: string;
  lga: string;
  state: string;
  schoolCoordinate: string;
}

export interface School {
  id?: number;
  address: string;
  district: string;
  principal: string;
  telephoneNumber: string;
  mailingAddress: string;
  schoolName: string;
  schoolNumber: string;
  lga: string;
  state: string;
  typeOfSchool: string;
  genderCategory: string;
  dateOfEstablishment: string;
  owner: string;
  recognitionStatus: string;
  schoolDistance: string;
  boardingFacility: string;
  pta: string;
  classRoomNumber: string;
  enoughSeats: string;
  libraryNumber: string;
  laboratoryNumber: string;
  schoolCondition: string;
  schoolCoordinate: string;
  localid?: number;
}
