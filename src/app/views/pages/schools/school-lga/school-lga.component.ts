import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { SchoolsService } from '../schools.service';
import { AppServiceService } from '../../../services/app-service/app-service.service';

@Component({
  selector: 'kt-school-lga',
  templateUrl: './school-lga.component.html',
  styleUrls: ['./school-lga.component.scss'],
})
export class SchoolLgaComponent implements OnInit {
  ELEMENT_DATA: ISchoolByLGA[] = [];
  displayedColumns: string[];
  dataSource = new MatTableDataSource<ISchoolByLGA>(this.ELEMENT_DATA);
  selection = new SelectionModel<ISchoolByLGA>(true, []);
  loading: Boolean = false;
  editMode: Boolean = false;
  school: ISchoolByLGA;
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  totalCount: number = 0;
  state_accces: string = '';
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  constructor(
    private schoolService: SchoolsService,
    private changeDetectRef: ChangeDetectorRef,
    private appService: AppServiceService
  ) {}

  ngOnInit() {
    this.getSchoolBYLGA();
    this.getUserStateAccess();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getUserStateAccess() {
    this.state_accces = this.appService.getUserStateAccess();
    this.displayedColumns =
      this.state_accces.trim().toLowerCase() === 'all'
        ? ['state', 'lga', 'count']
        : ['lga', 'count'];
  }

  getSchoolBYLGA() {
    this.loading = true;
    this.schoolService.getSchoolByLGA().subscribe(
      (data) => {
        this.loading = false;
        if (this.state_accces.trim().toLowerCase() === 'all') {
          data.sort((item1, item2) => {
            if (item1.state.toLowerCase() < item2.state.toLowerCase()) {
              return -1;
            } else if (item1.state.toLowerCase() > item2.state.toLowerCase()) {
              return 1;
            }

            return 0;
          });
        } else {
          data.sort((item1, item2) => {
            if (item1.lga.toLowerCase() < item2.lga.toLowerCase()) {
              return -1;
            } else if (item1.lga.toLowerCase() > item2.lga.toLowerCase()) {
              return 1;
            }

            return 0;
          });
        }
        this.dataSource.data = data;
        this.ELEMENT_DATA = data;
        this.totalCount = this.ELEMENT_DATA.reduce(
          (accumlator: any, currentValue: ISchoolByLGA) =>
            parseInt(accumlator) + parseInt(currentValue.count),
          0
        );
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
  onRowElementClick(event: any, element: ISchoolByLGA) {
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

export interface ISchoolByLGA {
  state: string;
  count: string;
  lga?: string;
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
