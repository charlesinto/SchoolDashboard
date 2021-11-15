import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ElementRef,
  AfterViewInit,
  AfterContentInit,
} from '@angular/core';

import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as excel2table from 'excel2table';
import { School } from '../../schools/schools.component';
import {
  AppServiceService,
  ILocalGovernments,
  IState,
} from '../../../services/app-service/app-service.service';
import { FormControl, Validators } from '@angular/forms';
import * as XLSX from 'xlsx';

const $ = window['$'];

@Component({
  selector: 'kt-view-product',
  templateUrl: './upload-teacher-component.html',
  styleUrls: ['./upload-teacher-component.scss'],
})
export class UploadTeacherComponent implements OnInit, AfterContentInit {
  schools: School[] = [];

  states: IState[] = [];
  localgovernments: ILocalGovernments[] = [];
  schoolNotSelected: boolean = false;
  totalCount = 0;
  schoolDataBase: School[] = [];
  loading: boolean = false;
  statesSelected = new FormControl('', Validators.compose([]));
  lgaSelected = new FormControl('', Validators.compose([]));
  schoolSelected = new FormControl('', Validators.compose([]));
  constructor(
    private el: ElementRef,
    public dialogRef: MatDialogRef<UploadTeacherComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      htmlStr: any;
      schools: School[];
      states: IState[];
      lga: ILocalGovernments[];
      file: any;
    },
    // private location: Location,
    private router: Router,
    private appService: AppServiceService
  ) {
    // this.product = this.data.product;
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

  ngAfterContentInit() {
    // excel2table.render($('.html'), this.data.file);
    $('.html').append(this.data.htmlStr);
    $('table').addClass('table table-striped');
    $('table th').attr('scope', 'col');
    this.schools = this.data.schools;
    this.states = this.data.states;
    this.schoolDataBase = this.data.schools;
    this.localgovernments = this.data.lga;
  }

  ngOnInit(): void {}

  c(closed) {
    // console.log(closed);

    this.dialogRef.close(closed);
  }
  updateCategory() {}
  closeModal() {
    this.dialogRef.close();
  }
  filterData() {}

  async uploadTeachers() {
    try {
      this.schoolNotSelected = false;
      if (this.data.file === null) {
        return;
      }
      if (this.schoolSelected.value.trim() === '') {
        this.schoolNotSelected = true;
      }
      console.log(this.data);

      const jsonData = await this.convertFileToJSON(this.data.file);
      console.log('jsondata: ', jsonData);

      return;

      const index = this.schoolDataBase.findIndex(
        (item) =>
          item.schoolName.toLowerCase().trim() ===
          this.schoolSelected.value.trim().toLowerCase()
      );
      if (index !== -1) {
        const school = this.schoolDataBase[index];
        this.loading = true;
        // this.studentService
        //   .handleBulkUpload({ schoolId: school.id, students: jsonData })
        //   .subscribe(
        //     (data) => {
        //       this.loading = false;
        //       console.log(data);
        //       $('.html').empty();
        //       this.actionSuccessful = true;
        //       this.data.file = null;
        //     },
        //     (error) => {
        //       this.loading = false;
        //       console.log(error);
        //     }
        //   );
      }
    } catch (error) {
      this.loading = false;
    }
  }

  convertFileToJSON(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        /* read workbook */
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        /* grab first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        /* save data */
        const studentJSONfile = XLSX.utils.sheet_to_json(ws);

        resolve(studentJSONfile);
      };
      reader.readAsBinaryString(file);
    });
  }
}
