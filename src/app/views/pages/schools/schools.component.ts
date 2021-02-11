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

@Component({
  selector: 'kt-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss'],
})
export class SchoolsComponent implements OnInit, AfterViewInit {
  // ELEMENT_DATA: Element[] = [
  //   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  //   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  //   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  //   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  //   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  //   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  //   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  //   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  //   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  //   { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  //   { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  //   { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  //   { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  //   { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  //   { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  //   { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  //   { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  //   { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  //   { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  // ];
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
  lat = 51.678418;
  lng = 7.809007;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private schoolService: SchoolsService,
    private changeDetectRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getSchools();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getSchools() {
    this.loading = true;
    this.schoolService.getSchools().subscribe(
      (data) => {
        console.log(data);
        this.ELEMENT_DATA = data;
        this.dataSource.data = this.ELEMENT_DATA;
        this.loading = false;
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
    this.editMode = true;
  }
  closeDetailPage() {
    this.selection.clear();
    this.editMode = false;
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
