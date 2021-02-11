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
import { SchoolsService } from '../schools.service';

@Component({
  selector: 'kt-school-by-state',
  templateUrl: './school-by-state.component.html',
  styleUrls: ['./school-by-state.component.scss'],
})
export class SchoolByStateComponent implements OnInit {
  ELEMENT_DATA: ISchoolByState[] = [];
  displayedColumns = ['state', 'count'];
  dataSource = new MatTableDataSource<ISchoolByState>(this.ELEMENT_DATA);
  selection = new SelectionModel<ISchoolByState>(true, []);
  loading: Boolean = false;
  editMode: Boolean = false;
  school: ISchoolByState;
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  totalCount: number = 0;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private schoolService: SchoolsService,
    private changeDetectRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getSchoolBYSTATE();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getSchoolBYSTATE() {
    this.loading = true;
    this.schoolService.getSchoolByState().subscribe(
      (data) => {
        this.loading = false;
        console.log(data);
        this.dataSource.data = data;
        this.ELEMENT_DATA = data;
        this.totalCount = this.ELEMENT_DATA.reduce(
          (accumlator: any, currentValue: ISchoolByState) =>
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
  onRowElementClick(event: any, element: ISchoolByState) {
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

export interface ISchoolByState {
  state: string;
  count: string;
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
