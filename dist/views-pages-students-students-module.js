(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-students-students-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/students/dropout-risk-analysis/dropout-risk-analysis.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/students/dropout-risk-analysis/dropout-risk-analysis.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-2\">\n  <div class=\"col-xl-12\">\n    <mat-progress-bar\n      *ngIf=\"loadingFilterBox\"\n      mode=\"indeterminate\"\n    ></mat-progress-bar>\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n      <kt-portlet-header\n        [title]=\"'Filter Report'\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <!-- <kt-context-menu></kt-context-menu> -->\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <ng-container ktPortletTools>\n          <div class=\"container\">\n            <form (ngSubmit)=\"filterData()\" class=\"pb-4\">\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <mat-form-field>\n                    <mat-select\n                      placeholder=\"State\"\n                      [formControl]=\"statesSelected\"\n                      (selectionChange)=\"onStateSelectionChange($event)\"\n                    >\n                      <mat-select-trigger>\n                        {{ statesSelected.value }}\n                        <!-- <span\n                          *ngIf=\"statesSelected.value?.length > 1\"\n                          class=\"example-additional-selection\"\n                        >\n                          (+{{ statesSelected.value.length - 1 }} others)\n                        </span> -->\n                      </mat-select-trigger>\n                      <mat-option [value]=\"'All'\">All</mat-option>\n                      <mat-option\n                        *ngFor=\"let topping of states\"\n                        [value]=\"topping.name\"\n                        >{{ topping.name }}</mat-option\n                      >\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-4\">\n                  <mat-form-field>\n                    <mat-select\n                      placeholder=\"Local Government Area\"\n                      [formControl]=\"lgaSelected\"\n                      (selectionChange)=\"onlgaSelectionChange($event)\"\n                    >\n                      <mat-select-trigger>\n                        {{ lgaSelected.value }}\n                        <!-- <span\n                          *ngIf=\"lgaSelected.value?.length > 1\"\n                          class=\"example-additional-selection\"\n                        >\n                          (+{{ lgaSelected.value.length - 1 }} others)\n                        </span> -->\n                      </mat-select-trigger>\n                      <mat-option\n                        *ngFor=\"let topping of localgovernments\"\n                        [value]=\"topping.name\"\n                        >{{ topping.name }}</mat-option\n                      >\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-4\">\n                  <mat-form-field>\n                    <mat-select\n                      placeholder=\"School\"\n                      [formControl]=\"schoolSelected\"\n                    >\n                      <mat-select-trigger>\n                        {{ schoolSelected.value }}\n                        <!-- <span\n                          *ngIf=\"schoolSelected.value?.length > 1\"\n                          class=\"example-additional-selection\"\n                        >\n                          (+{{ schoolSelected.value.length - 1 }} others)\n                        </span> -->\n                      </mat-select-trigger>\n                      <mat-option\n                        *ngFor=\"let topping of schools\"\n                        [value]=\"topping.schoolName\"\n                        >{{ topping.schoolName }}</mat-option\n                      >\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <mat-form-field>\n                    <mat-select\n                      placeholder=\"Class\"\n                      [formControl]=\"classSelected\"\n                      multiple\n                    >\n                      <mat-select-trigger>\n                        {{ classSelected.value ? classSelected.value[0] : \"\" }}\n                        <span\n                          *ngIf=\"classSelected.value?.length > 1\"\n                          class=\"example-additional-selection\"\n                        >\n                          (+{{ classSelected.value.length - 1 }} others)\n                        </span>\n                      </mat-select-trigger>\n                      <mat-option\n                        *ngFor=\"let class of classes\"\n                        [value]=\"class\"\n                        >{{ class }}</mat-option\n                      >\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-4\">\n                  <mat-form-field appearance=\"fill\">\n                    <mat-label>Choose a date</mat-label>\n                    <input\n                      [formControl]=\"dateRange\"\n                      matInput\n                      type=\"text\"\n                      name=\"daterange\"\n                      value=\"\"\n                    />\n                    <!-- <mat-label>Choose a date</mat-label>\n                    <input matInput [matDatepicker]=\"picker\" />\n                    <mat-datepicker-toggle\n                      matSuffix\n                      [for]=\"picker\"\n                    ></mat-datepicker-toggle>\n                    <mat-datepicker #picker></mat-datepicker> -->\n                    <!-- <mat-label>Enter a date range</mat-label>\n                    <mat-date-range-input [rangePicker]=\"picker\">\n                      <input matStartDate placeholder=\"Start date\" />\n                      <input matEndDate placeholder=\"End date\" />\n                    </mat-date-range-input>\n                    <mat-datepicker-toggle\n                      matSuffix\n                      [for]=\"picker\"\n                    ></mat-datepicker-toggle>\n                    <mat-date-range-picker #picker></mat-date-range-picker> -->\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <button\n                    mat-raised-button\n                    color=\"primary\"\n                    aria-label=\"Example icon button with a home icon\"\n                  >\n                    <mat-icon>filter_list</mat-icon>\n                    Filter\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </ng-container>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/students/student-detail/student-detail.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/students/student-detail/student-detail.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">\n      {{ data.student.surname }} {{ data.student.otherNames }}\n    </h5>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n      <span aria-hidden=\"true\" (click)=\"c('Close click')\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n            <ng-container ktPortletTools>\n              <div class=\"container\">\n                <div *ngIf=\"data.student.profile_url !== null\" class=\"row\">\n                  <div class=\"col-xl-12\">\n                    <div class=\"image-avatar-wrapper\">\n                      <img\n                        class=\"image-avatar\"\n                        alt=\"profile\"\n                        src=\"{{ data.student.profile_url }}\"\n                      />\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-xl-6\">\n                    <span>Surname</span>\n                    <h6>{{ data.student.surname }}</h6>\n                  </div>\n                  <div class=\"col-xl-6\">\n                    <span>Other Names</span>\n                    <h6>{{ data.student.otherNames }}</h6>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-xl-6\">\n                    <span>School</span>\n                    <h6>{{ data.student.school }}</h6>\n                  </div>\n                  <div class=\"col-xl-6\">\n                    <span>Gender</span>\n                    <h6>{{ data.student.gender }}</h6>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-xl-6\">\n                    <span>Regsitration Number</span>\n                    <h6>{{ data.student.registrationNumber }}</h6>\n                  </div>\n                  <div class=\"col-xl-6\">\n                    <span>State of Origin</span>\n                    <h6>{{ data.student.state }}</h6>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-xl-6\">\n                    <span>Date of Birth</span>\n                    <h6>\n                      {{ data.student.dateOfBirth | date: \"mediumDate\" }}\n                    </h6>\n                  </div>\n                  <div class=\"col-xl-6\">\n                    <span>Student Class</span>\n                    <h6>{{ data.student.studentClass }}</h6>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-xl-6\">\n                    <span>Guardian Name</span>\n                    <h6>{{ data.student.guardianName }}</h6>\n                  </div>\n                  <div class=\"col-xl-6\">\n                    <span>Guardian Contact</span>\n                    <h6>{{ data.student.guardianTelephone }}</h6>\n                  </div>\n                </div>\n                <h3 class=\"mt-3\">Attendance History</h3>\n                <hr />\n                <div class=\"row\">\n                  <div class=\"col-md-6\"></div>\n                  <div class=\"col-md-6\">\n                    <div class=\"row\">\n                      <div class=\"col-md-8\">\n                        <mat-form-field appearance=\"fill\">\n                          <mat-label>Choose a date</mat-label>\n                          <input\n                            [formControl]=\"dateRange\"\n                            matInput\n                            type=\"text\"\n                            name=\"daterange\"\n                            value=\"\"\n                          />\n                        </mat-form-field>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <button\n                          mat-raised-button\n                          color=\"primary\"\n                          style=\"width: 100%\"\n                          aria-label=\"Example icon button with a home icon\"\n                        >\n                          <mat-icon>filter_list</mat-icon>\n                          Filter\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <mat-table #table [dataSource]=\"dataSource\">\n                      <ng-container matColumnDef=\"select\">\n                        <mat-header-cell *matHeaderCellDef>\n                          <mat-checkbox\n                            (change)=\"$event ? masterToggle() : null\"\n                            [checked]=\"selection.hasValue() && isAllSelected()\"\n                            [indeterminate]=\"\n                              selection.hasValue() && !isAllSelected()\n                            \"\n                          >\n                          </mat-checkbox>\n                        </mat-header-cell>\n                        <mat-cell *matCellDef=\"let row\">\n                          <mat-checkbox\n                            (click)=\"$event.stopPropagation()\"\n                            (change)=\"$event ? selection.toggle(row) : null\"\n                            [checked]=\"selection.isSelected(row)\"\n                          >\n                          </mat-checkbox>\n                        </mat-cell>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"date\">\n                        <mat-header-cell *matHeaderCellDef>\n                          Attendance Date\n                        </mat-header-cell>\n                        <mat-cell *matCellDef=\"let element\">\n                          {{ element.date }}\n                        </mat-cell>\n                      </ng-container>\n                      <ng-container matColumnDef=\"present\">\n                        <mat-header-cell *matHeaderCellDef>\n                          Present\n                        </mat-header-cell>\n                        <mat-cell *matCellDef=\"let element\">\n                          <button\n                            *ngIf=\"element.present === true\"\n                            mat-icon-button\n                            color=\"primary\"\n                            aria-label=\"Example icon button with a home icon\"\n                          >\n                            <mat-icon>check</mat-icon>\n                          </button>\n                          <span\n                            *ngIf=\"element.present === false\"\n                            color=\"primary\"\n                            aria-label=\"Example icon button with a home icon\"\n                          >\n                            -\n                          </span>\n                        </mat-cell>\n                      </ng-container>\n                      <ng-container matColumnDef=\"absent\">\n                        <mat-header-cell *matHeaderCellDef>\n                          Absent\n                        </mat-header-cell>\n                        <mat-cell *matCellDef=\"let element\">\n                          <button\n                            *ngIf=\"element.absent === true\"\n                            mat-icon-button\n                            color=\"primary\"\n                            aria-label=\"Example icon button with a home icon\"\n                          >\n                            <mat-icon>check</mat-icon>\n                          </button>\n                          <span\n                            *ngIf=\"element.absent === false\"\n                            color=\"primary\"\n                            aria-label=\"Example icon button with a home icon\"\n                          >\n                            -\n                          </span>\n                        </mat-cell>\n                      </ng-container>\n\n                      <mat-header-row\n                        *matHeaderRowDef=\"displayedColumns\"\n                      ></mat-header-row>\n                      <mat-row\n                        *matRowDef=\"let row; columns: displayedColumns\"\n                        (click)=\"selection.toggle(row)\"\n                      >\n                      </mat-row>\n                    </mat-table>\n                    <mat-paginator\n                      [pageSizeOptions]=\"[5, 10, 20]\"\n                      showFirstLastButtons\n                    ></mat-paginator>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"kt-widget12__chart\" style=\"height: 250px\">\n                      <canvas\n                        #chart\n                        id=\"kt_chart_order_statistics\"\n                        height=\"312\"\n                        style=\"width: 100% !important\"\n                      ></canvas>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ng-container>\n          </kt-portlet-body>\n        </div>\n      </div>\n      <div class=\"row my-5\">\n        <div class=\"col-md-12\">\n          <div class=\"html\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</div>\n\n<!-- <div\n  class=\"modal fade\"\n  id=\"modal\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"exampleModalLongTitle\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Modal title</h5>\n        <button\n          type=\"button\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">...</div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n          Close\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/students/students.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/students/students.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-2\">\n  <div class=\"col-xl-8\">\n    <mat-progress-bar\n      *ngIf=\"loadingFilterBox\"\n      mode=\"indeterminate\"\n    ></mat-progress-bar>\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n      <kt-portlet-header\n        [title]=\"'Filter Report'\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <!-- <kt-context-menu></kt-context-menu> -->\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <ng-container ktPortletTools>\n          <div class=\"container\">\n            <form (ngSubmit)=\"filterData()\" class=\"pb-4\">\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <mat-form-field>\n                    <mat-select\n                      placeholder=\"State\"\n                      [formControl]=\"statesSelected\"\n                      (selectionChange)=\"onStateSelectionChange($event)\"\n                      multiple\n                    >\n                      <mat-select-trigger>\n                        {{\n                          statesSelected.value ? statesSelected.value[0] : \"\"\n                        }}\n                        <span\n                          *ngIf=\"statesSelected.value?.length > 1\"\n                          class=\"example-additional-selection\"\n                        >\n                          (+{{ statesSelected.value.length - 1 }} others)\n                        </span>\n                      </mat-select-trigger>\n\n                      <!-- <mat-option [value]=\"'All'\">All</mat-option> -->\n                      <mat-option\n                        *ngFor=\"let topping of states\"\n                        [value]=\"topping.name\"\n                        >{{ topping.name }}</mat-option\n                      >\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-4\">\n                  <mat-form-field>\n                    <mat-select\n                      placeholder=\"Local Government Area\"\n                      [formControl]=\"lgaSelected\"\n                      (selectionChange)=\"onlgaSelectionChange($event)\"\n                      multiple\n                    >\n                      <mat-select-trigger>\n                        {{ lgaSelected.value ? lgaSelected.value[0] : \"\" }}\n                        <span\n                          *ngIf=\"lgaSelected.value?.length > 1\"\n                          class=\"example-additional-selection\"\n                        >\n                          (+{{ lgaSelected.value.length - 1 }} others)\n                        </span>\n                      </mat-select-trigger>\n                      <!-- <mat-option [value]=\"'All'\">All</mat-option> -->\n                      <mat-option\n                        *ngFor=\"let topping of localgovernments\"\n                        [value]=\"topping.name\"\n                        >{{ topping.name }}</mat-option\n                      >\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-4\">\n                  <mat-form-field>\n                    <mat-select\n                      placeholder=\"School\"\n                      [formControl]=\"schoolSelected\"\n                      multiple\n                    >\n                      <mat-select-trigger>\n                        {{\n                          schoolSelected.value ? schoolSelected.value[0] : \"\"\n                        }}\n                        <span\n                          *ngIf=\"schoolSelected.value?.length > 1\"\n                          class=\"example-additional-selection\"\n                        >\n                          (+{{ schoolSelected.value.length - 1 }} others)\n                        </span>\n                      </mat-select-trigger>\n                      <mat-option [value]=\"'All'\">All</mat-option>\n                      <mat-option\n                        *ngFor=\"let topping of schools\"\n                        [value]=\"topping.schoolName\"\n                        >{{ topping.schoolName }}</mat-option\n                      >\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <mat-form-field>\n                    <mat-select\n                      placeholder=\"Dropout Risk Level\"\n                      [formControl]=\"riskLevel\"\n                    >\n                      <mat-select-trigger>\n                        {{ riskLevel.value }}\n                      </mat-select-trigger>\n                      <mat-option [value]=\"''\">All</mat-option>\n                      <mat-option [value]=\"'HIGH'\">HIGH</mat-option>\n                      <mat-option [value]=\"'MODERATE'\">MODERATE</mat-option>\n                      <mat-option [value]=\"'NIL'\">NO RISK</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-4 pl-3\">\n                  <div class=\"px-3\">\n                    <button\n                      mat-raised-button\n                      color=\"primary\"\n                      style=\"width: 100%\"\n                      aria-label=\"Example icon button with a home icon\"\n                    >\n                      <mat-icon>filter_list</mat-icon>\n                      Filter\n                    </button>\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <button\n                    mat-raised-button\n                    aria-label=\"Example icon button with a home icon\"\n                    style=\"width: 100%\"\n                    (click)=\"reset($event)\"\n                  >\n                    <mat-icon>filter_list</mat-icon>\n                    Reset\n                  </button>\n                </div>\n              </div>\n              <div class=\"row\"></div>\n            </form>\n          </div>\n        </ng-container>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n  <div class=\"col-xl-4\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <kt-portlet>\n      <kt-portlet-header\n        [title]=\"'Total Number of Students'\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <kt-context-menu></kt-context-menu>\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <!-- Checkbox Column -->\n        <ng-container>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-xl-12\">\n                <div class=\"d-flex justify-content-center align-items-center\">\n                  <h1>{{ totalCount }}</h1>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"kt-widget14__chart\" style=\"height: 150px\">\n                <canvas #chart></canvas>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xl-6\">\n                <div>\n                  <h5 class=\"\">Total Female</h5>\n                  <h1 style=\"color: #f29cb3\" class=\"text-center\">\n                    {{ totalFemale }}\n                  </h1>\n                </div>\n              </div>\n              <div class=\"col-xl-6\">\n                <div class=\"\">\n                  <div>\n                    <h5 class=\"\">Total Male</h5>\n                    <h1 style=\"color: #79c6f1\" class=\"text-center\">\n                      {{ totalMale }}\n                    </h1>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n</div>\n<div class=\"row\">\n  <div [ngClass]=\"{ 'col-xl-12': !editMode, 'col-xl-8': editMode }\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <kt-portlet>\n      <kt-portlet-header\n        [title]=\"'All Students'\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <kt-context-menu></kt-context-menu>\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"d-flex justify-content-between\">\n              <div class=\"px-3\">\n                <mat-form-field>\n                  <mat-label>Search</mat-label>\n                  <input\n                    matInput\n                    (keyup)=\"applyFilter($event)\"\n                    placeholder=\"Searching for...\"\n                    #input\n                  />\n                </mat-form-field>\n              </div>\n              <div class=\"px-3\">\n                <button\n                  mat-raised-button\n                  color=\"primary\"\n                  (click)=\"exportPDF()\"\n                  aria-label=\"Example icon button with a home icon\"\n                >\n                  <mat-icon>filter_list</mat-icon>\n                  Export PDF\n                </button>\n                <button\n                  mat-raised-button\n                  color=\"secondary\"\n                  class=\"ml-2\"\n                  (click)=\"ExportTOExcel()\"\n                  aria-label=\"Example icon button with a home icon\"\n                >\n                  <mat-icon>filter_list</mat-icon>\n                  Export Excel\n                </button>\n              </div>\n            </div>\n            <!-- <div class=\"px-3\">\n              <mat-form-field>\n                <mat-label>Filter</mat-label>\n                <input\n                  matInput\n                  (keyup)=\"applyFilter($event)\"\n                  placeholder=\"Searching for...\"\n                  #input\n                />\n              </mat-form-field>\n            </div> -->\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-4 pl-4\">\n            <div class=\"custom-file\">\n              <input\n                accept=\"application/vnd.ms-excel;application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;\"\n                type=\"file\"\n                class=\"custom-file-input\"\n                id=\"customFile\"\n              />\n              <label class=\"custom-file-label\" for=\"customFile\"\n                >Bulk Upload(Excel)</label\n              >\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <mat-table #table [dataSource]=\"dataSource\">\n              <!-- Checkbox Column -->\n              <ng-container matColumnDef=\"select\">\n                <mat-header-cell *matHeaderCellDef>\n                  <mat-checkbox\n                    (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                    [disabled]=\"true\"\n                  >\n                  </mat-checkbox>\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                  <mat-checkbox\n                    (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                    [disabled]=\"true\"\n                  >\n                  </mat-checkbox>\n                </mat-cell>\n              </ng-container>\n\n              <!-- Position Column -->\n              <ng-container matColumnDef=\"registrationNumber\">\n                <mat-header-cell *matHeaderCellDef>\n                  Regsitration Number\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  {{ element.registrationNumber }}\n                </mat-cell>\n              </ng-container>\n              <!-- Name Column -->\n              <ng-container matColumnDef=\"surname\">\n                <mat-header-cell *matHeaderCellDef> Surname </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  {{ element.surname }}\n                </mat-cell>\n              </ng-container>\n              <!-- Weight Column -->\n              <ng-container matColumnDef=\"otherNames\">\n                <mat-header-cell *matHeaderCellDef>\n                  Other Names\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  {{ element.otherNames }}\n                </mat-cell>\n              </ng-container>\n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"schoolName\">\n                <mat-header-cell *matHeaderCellDef> School </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  {{ element.school }}\n                </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"gender\">\n                <mat-header-cell *matHeaderCellDef> Gender </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  {{ element.gender }}\n                </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"actions\">\n                <mat-header-cell *matHeaderCellDef>\n                  <!-- <mat-checkbox\n                    (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                  > -->\n                  <!-- </mat-checkbox> -->\n                  Actions\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  <!-- <mat-checkbox\n                    (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                  >\n                  </mat-checkbox> -->\n                  <button\n                    mat-icon-button\n                    color=\"primary\"\n                    aria-label=\"Example icon button with a home icon\"\n                    (click)=\"onRowElementClick($event, element)\"\n                  >\n                    <mat-icon>visibility</mat-icon>\n                  </button>\n                </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"riskLevel\">\n                <mat-header-cell *matHeaderCellDef>\n                  <!-- <mat-checkbox\n                    (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                  > -->\n                  <!-- </mat-checkbox> -->\n                  Dropout Risk Level\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  <!-- <mat-checkbox\n                    (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                  >\n                  </mat-checkbox> -->\n                  <button\n                    mat-icon-button\n                    color=\"warn\"\n                    aria-label=\"Example icon button with a home icon\"\n                    *ngIf=\"element.riskLevel === 'HIGH'\"\n                  >\n                    <mat-icon>error</mat-icon>\n                  </button>\n                  <button\n                    mat-icon-button\n                    aria-label=\"Example icon button with a home icon\"\n                    *ngIf=\"element.riskLevel === 'MODERATE'\"\n                  >\n                    <mat-icon class=\"yellow-icon\">error</mat-icon>\n                  </button>\n                  <button\n                    mat-icon-button\n                    aria-label=\"Example icon button with a home icon\"\n                    *ngIf=\"element.riskLevel === 'NIL'\"\n                  >\n                    <mat-icon class=\"green-icon\">error</mat-icon>\n                  </button>\n                </mat-cell>\n              </ng-container>\n              <mat-header-row\n                *matHeaderRowDef=\"displayedColumns\"\n              ></mat-header-row>\n              <mat-row\n                *matRowDef=\"let row; columns: displayedColumns\"\n                (click)=\"selection.toggle(row)\"\n              >\n              </mat-row>\n            </mat-table>\n            <mat-paginator\n              [pageSizeOptions]=\"[5, 10, 20]\"\n              showFirstLastButtons\n            ></mat-paginator>\n          </div>\n        </div>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n  <div *ngIf=\"editMode\" class=\"col-xl-4\">\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n      <ng-container ktPortletTools>\n        <div class=\"container school-detail\">\n          <div class=\"row py-4\">\n            <div class=\"col-xl-12\">\n              <div class=\"d-flex justify-content-end\">\n                <button\n                  mat-icon-button\n                  (click)=\"closeDetailPage($event)\"\n                  color=\"accent\"\n                  aria-label=\"Example icon button with a delete icon\"\n                >\n                  <mat-icon>cancel</mat-icon>\n                </button>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"school.profile_url !== null\" class=\"row\">\n            <div class=\"col-xl-12\">\n              <div class=\"image-avatar-wrapper\">\n                <img\n                  class=\"image-avatar\"\n                  alt=\"profile\"\n                  src=\"{{ school.profile_url }}\"\n                />\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <span>Surname</span>\n              <h6>{{ school.surname }}</h6>\n            </div>\n            <div class=\"col-xl-6\">\n              <span>Other Names</span>\n              <h6>{{ school.otherNames }}</h6>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <span>School</span>\n              <h6>{{ school.school }}</h6>\n            </div>\n            <div class=\"col-xl-6\">\n              <span>Gender</span>\n              <h6>{{ school.gender }}</h6>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <span>Regsitration Number</span>\n              <h6>{{ school.registrationNumber }}</h6>\n            </div>\n            <div class=\"col-xl-6\">\n              <span>State of Origin</span>\n              <h6>{{ school.state }}</h6>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <span>Date of Birth</span>\n              <h6>{{ school.dateOfBirth | date: \"mediumDate\" }}</h6>\n            </div>\n            <div class=\"col-xl-6\">\n              <span>Student Class</span>\n              <h6>{{ school.studentClass }}</h6>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <span>Guardina Name</span>\n              <h6>{{ school.guardianName }}</h6>\n            </div>\n            <div class=\"col-xl-6\">\n              <span>Guardian Contact</span>\n              <h6>{{ school.guardianTelephone }}</h6>\n            </div>\n          </div>\n          <!-- <div class=\"row\">\n            <div class=\"col-xl-12\">\n              <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n              </agm-map>\n            </div>\n          </div> -->\n        </div>\n      </ng-container>\n    </kt-portlet>\n  </div>\n  <!-- <div class=\"col-xl-4\">\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n      <kt-portlet-header [title]=\"'Authors Profit'\">\n        <ng-container ktPortletTools>\n          <kt-context-menu2></kt-context-menu2>\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body>\n        <kt-widget4 [data]=\"widget4_4\">\n          <ng-template #actionTemplate let-item=\"item\">\n            <span class=\"kt-widget4__number\" [ngClass]=\"item.valueColor\">{{\n              item.value\n            }}</span>\n          </ng-template>\n        </kt-widget4>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div> -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/students/uploadstudents/upload-teacher-component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/students/uploadstudents/upload-teacher-component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Bulk Upload Students</h5>\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n    <span aria-hidden=\"true\" (click)=\"c('Close click')\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n          <ng-container ktPortletTools>\n            <div class=\"container\">\n              <form (ngSubmit)=\"filterData()\" class=\"pb-4\">\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <mat-form-field>\n                      <mat-select\n                        placeholder=\"State\"\n                        [formControl]=\"statesSelected\"\n                        (selectionChange)=\"onStateSelectionChange($event)\"\n                        multiple\n                      >\n                        <mat-select-trigger>\n                          {{ statesSelected.value ? statesSelected.value[0] : \"\"\n                          }}\n                          <span\n                            *ngIf=\"statesSelected.value?.length > 1\"\n                            class=\"example-additional-selection\"\n                          >\n                            (+{{ statesSelected.value.length - 1 }} others)\n                          </span>\n                        </mat-select-trigger>\n\n                        <mat-option [value]=\"'All'\">All</mat-option>\n                        <mat-option\n                          *ngFor=\"let topping of states\"\n                          [value]=\"topping.name\"\n                          >{{ topping.name }}</mat-option\n                        >\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <mat-form-field>\n                      <mat-select\n                        placeholder=\"Local Government Area\"\n                        [formControl]=\"lgaSelected\"\n                        (selectionChange)=\"onlgaSelectionChange($event)\"\n                        multiple\n                      >\n                        <mat-select-trigger>\n                          {{ lgaSelected.value ? lgaSelected.value[0] : \"\" }}\n                          <span\n                            *ngIf=\"lgaSelected.value?.length > 1\"\n                            class=\"example-additional-selection\"\n                          >\n                            (+{{ lgaSelected.value.length - 1 }} others)\n                          </span>\n                        </mat-select-trigger>\n                        <mat-option [value]=\"'All'\">All</mat-option>\n                        <mat-option\n                          *ngFor=\"let topping of localgovernments\"\n                          [value]=\"topping.name\"\n                          >{{ topping.name }}</mat-option\n                        >\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <mat-form-field>\n                      <mat-select\n                        placeholder=\"School\"\n                        [formControl]=\"schoolSelected\"\n                      >\n                        <mat-select-trigger>\n                          {{schoolSelected.value}}\n                        </mat-select-trigger>\n                        <!-- <mat-option [value]=\"'All'\">All</mat-option> -->\n                        <mat-option\n                          *ngFor=\"let topping of schools\"\n                          [value]=\"topping.schoolName\"\n                          >{{ topping.schoolName }}</mat-option\n                        >\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n\n                <div class=\"row\"></div>\n              </form>\n            </div>\n          </ng-container>\n        </kt-portlet-body>\n      </div>\n    </div>\n    <div class=\"row my-5\">\n      <div class=\"col-md-12\">\n        <div class=\"html\"></div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div *ngIf=\"schoolNotSelected\" class=\"alert alert-danger\" role=\"alert\">\n          Please select a school\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div *ngIf=\"actionSuccessful\" class=\"alert alert-success\" role=\"alert\">\n          Bulk Upload Successful.\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n    Close\n  </button>\n  <button\n    [ngClass]=\"{\n      'kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light': loading\n    }\"\n    id=\"kt_login_signin_submit\"\n    class=\"btn btn-primary btn-elevate kt-login__btn-primary\"\n    (click)=\"uploadStudents()\"\n    type=\"button\"\n  >\n    Upload\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/views/pages/students/dropout-risk-analysis/dropout-risk-analysis.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/students/dropout-risk-analysis/dropout-risk-analysis.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3N0dWRlbnRzL2Ryb3BvdXQtcmlzay1hbmFseXNpcy9kcm9wb3V0LXJpc2stYW5hbHlzaXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/pages/students/dropout-risk-analysis/dropout-risk-analysis.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/pages/students/dropout-risk-analysis/dropout-risk-analysis.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DropoutRiskAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropoutRiskAnalysisComponent", function() { return DropoutRiskAnalysisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/app-service/app-service.service */ "./src/app/views/services/app-service/app-service.service.ts");
/* harmony import */ var _schools_schools_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../schools/schools.service */ "./src/app/views/pages/schools/schools.service.ts");







var $ = window['$'];
var DropoutRiskAnalysisComponent = /** @class */ (function () {
    function DropoutRiskAnalysisComponent(appService, schoolService, layoutConfigService) {
        this.appService = appService;
        this.schoolService = schoolService;
        this.layoutConfigService = layoutConfigService;
        this.loadingFilterBox = false;
        this.statesSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([]));
        this.lgaSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([]));
        this.schoolSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.classSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.dateRange = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.localgovernments = [];
        this.states = [];
        this.classes = [
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
        this.schools = [];
        this.schoolsDataBase = [];
        this.type = 'bar';
        this.color = Chart.helpers.color;
    }
    DropoutRiskAnalysisComponent.prototype.ngOnInit = function () {
        this.initialDatePicker();
        this.getUserAccessibleState();
        this.getUserAccessibleLocals();
        this.getSchools();
    };
    DropoutRiskAnalysisComponent.prototype.getUserAccessibleState = function () {
        this.states = this.appService.getStates(this.appService.getUserStateAccess());
    };
    DropoutRiskAnalysisComponent.prototype.getUserAccessibleLocals = function (states) {
        if (states === void 0) { states = []; }
        this.localgovernments = this.appService.getLocalGovernments(states);
    };
    DropoutRiskAnalysisComponent.prototype.onStateSelectionChange = function (event) {
        var _this = this;
        // if (this.statesSelected.value.includes('All')) {
        //   const index = this.statesSelected.value.findIndex(
        //     (item) => item === 'All'
        //   );
        //   const values = this.statesSelected.value;
        //   values.splice(index, 1);
        //   // this.statesSelected.setValue([...])
        // }
        if (this.statesSelected.value.length > 0) {
            this.getUserAccessibleLocals([this.statesSelected.value]);
            this.schools = this.schoolsDataBase.filter(function (item) { return _this.statesSelected.value === item.state.trim(); });
        }
        else {
            this.getUserAccessibleLocals();
            this.schools = this.schoolsDataBase;
        }
    };
    DropoutRiskAnalysisComponent.prototype.onlgaSelectionChange = function (event) {
        var _this = this;
        if (this.lgaSelected.value.length > 0) {
            this.schools = this.schoolsDataBase.filter(function (item) { return _this.lgaSelected.value === item.lga.trim(); });
        }
        else {
            this.schools = this.schoolsDataBase;
        }
    };
    DropoutRiskAnalysisComponent.prototype.initChart = function () {
        // For more information about the chartjs, visit this link
        // https://www.chartjs.org/docs/latest/getting-started/usage.html
        var chart = new Chart(this.chart.nativeElement, {
            type: this.type,
            data: this.data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                // legend: false,
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
                                fontColor: this.layoutConfigService.getConfig('colors.base.shape.3'),
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
                                color: this.layoutConfigService.getConfig('colors.base.shape.2'),
                                drawBorder: false,
                                offsetGridLines: false,
                                drawTicks: false,
                                borderDash: [3, 4],
                                zeroLineWidth: 1,
                                zeroLineColor: this.layoutConfigService.getConfig('colors.base.shape.2'),
                                zeroLineBorderDash: [3, 4],
                            },
                            ticks: {
                                max: 70,
                                stepSize: 10,
                                display: true,
                                beginAtZero: true,
                                fontColor: this.layoutConfigService.getConfig('colors.base.shape.3'),
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
                    backgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
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
    };
    DropoutRiskAnalysisComponent.prototype.initialDatePicker = function () {
        var $this = this;
        $('input[name="daterange"]').daterangepicker({
            autoUpdateInput: false,
            opens: 'left',
            ranges: {
                Today: [moment__WEBPACK_IMPORTED_MODULE_4___default()(), moment__WEBPACK_IMPORTED_MODULE_4___default()()],
                Yesterday: [
                    moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(1, 'days'),
                    moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(1, 'days'),
                ],
                'Last 7 Days': [moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(6, 'days'), moment__WEBPACK_IMPORTED_MODULE_4___default()()],
                'Last 30 Days': [moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(29, 'days'), moment__WEBPACK_IMPORTED_MODULE_4___default()()],
                'This Month': [moment__WEBPACK_IMPORTED_MODULE_4___default()().startOf('month'), moment__WEBPACK_IMPORTED_MODULE_4___default()().endOf('month')],
                'Last Month': [
                    moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(1, 'month').startOf('month'),
                    moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(1, 'month').endOf('month'),
                ],
            },
        }, function (start, end, label) {
            console.log('A new date selection was made: ' +
                start.format('YYYY-MM-DD') +
                ' to ' +
                end.format('YYYY-MM-DD'));
            $this.dateRange.setValue(start.format('YYYY-MM-DD') + " to " + end.format('YYYY-MM-DD'));
        });
    };
    DropoutRiskAnalysisComponent.prototype.getSchools = function () {
        var _this = this;
        this.loadingFilterBox = true;
        this.schoolService.getSchools().subscribe(function (data) {
            _this.loadingFilterBox = false;
            _this.schools = data;
            _this.schoolsDataBase = data;
        }, function (error) {
            _this.loadingFilterBox = false;
        });
    };
    DropoutRiskAnalysisComponent.ctorParameters = function () { return [
        { type: _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_5__["AppServiceService"] },
        { type: _schools_schools_service__WEBPACK_IMPORTED_MODULE_6__["SchoolsService"] },
        { type: app_core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropoutRiskAnalysisComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DropoutRiskAnalysisComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DropoutRiskAnalysisComponent.prototype, "chart", void 0);
    DropoutRiskAnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-dropout-risk-analysis',
            template: __webpack_require__(/*! raw-loader!./dropout-risk-analysis.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/students/dropout-risk-analysis/dropout-risk-analysis.component.html"),
            styles: [__webpack_require__(/*! ./dropout-risk-analysis.component.scss */ "./src/app/views/pages/students/dropout-risk-analysis/dropout-risk-analysis.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_5__["AppServiceService"],
            _schools_schools_service__WEBPACK_IMPORTED_MODULE_6__["SchoolsService"],
            app_core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"]])
    ], DropoutRiskAnalysisComponent);
    return DropoutRiskAnalysisComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/students/student-detail/student-detail.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/students/student-detail/student-detail.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%; }\n\n.cdk-overlay-pane {\n  overflow: scroll !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzLm9udW9yYWgvRG9jdW1lbnRzL2NiYy9TY2hvb2xEYXNoYm9hcmQvc3JjL2FwcC92aWV3cy9wYWdlcy9zdHVkZW50cy9zdHVkZW50LWRldGFpbC9zdHVkZW50LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvc3R1ZGVudHMvc3R1ZGVudC1kZXRhaWwvc3R1ZGVudC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNkay1vdmVybGF5LXBhbmUge1xuICBvdmVyZmxvdzogc2Nyb2xsICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/students/student-detail/student-detail.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/students/student-detail/student-detail.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StudentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailComponent", function() { return StudentDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_core_base_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app/core/_base/layout */ "./src/app/core/_base/layout/index.ts");






var $ = window['$'];
var StudentDetailComponent = /** @class */ (function () {
    function StudentDetailComponent(layoutConfigService, dialogRef, data) {
        this.layoutConfigService = layoutConfigService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.color = Chart.helpers.color;
        this.chartData = {
            labels: ['Absent', 'Present'],
            datasets: [
                {
                    fill: true,
                    // borderWidth: 0,
                    backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
                    borderColor: this.color(this.layoutConfigService.getConfig('colors.state.brand'))
                        .alpha(0)
                        .rgbString(),
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 12,
                    pointBackgroundColor: Chart.helpers
                        .color('#000000')
                        .alpha(0)
                        .rgbString(),
                    pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                    pointHoverBorderColor: Chart.helpers
                        .color('#000000')
                        .alpha(0.1)
                        .rgbString(),
                    data: [5, 2],
                },
            ],
        };
        this.type = 'line';
        this.dateRange = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.ELEMENT_DATA = [
            {
                date: '20/06/2021',
                present: true,
                absent: false,
            },
            {
                date: '21/06/2021',
                present: true,
                absent: false,
            },
            {
                date: '22/06/2021',
                present: false,
                absent: true,
            },
            {
                date: '23/06/2021',
                present: false,
                absent: true,
            },
            {
                date: '24/06/2021',
                present: false,
                absent: true,
            },
            {
                date: '25/06/2021',
                present: false,
                absent: true,
            },
            {
                date: '26/06/2021',
                present: false,
                absent: true,
            },
            {
                date: '27/06/2021',
                present: false,
                absent: true,
            },
        ];
        this.displayedColumns = ['date', 'present', 'absent'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.ELEMENT_DATA);
    }
    StudentDetailComponent.prototype.ngOnInit = function () {
        this.initChart();
        this.initialDatePicker();
    };
    StudentDetailComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    StudentDetailComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    StudentDetailComponent.prototype.c = function () {
        this.dialogRef.close();
    };
    StudentDetailComponent.prototype.initChart = function () {
        // For more information about the chartjs, visit this link
        // https://www.chartjs.org/docs/latest/getting-started/usage.html
        this.chartUI = new Chart(this.chart.nativeElement, {
            type: 'pie',
            data: this.chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                // legend: false,
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
                                fontColor: this.layoutConfigService.getConfig('colors.base.shape.3'),
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
                                color: this.layoutConfigService.getConfig('colors.base.shape.2'),
                                drawBorder: false,
                                offsetGridLines: false,
                                drawTicks: false,
                                borderDash: [3, 4],
                                zeroLineWidth: 1,
                                zeroLineColor: this.layoutConfigService.getConfig('colors.base.shape.2'),
                                zeroLineBorderDash: [3, 4],
                            },
                            ticks: {
                                max: 70,
                                stepSize: 10,
                                display: true,
                                beginAtZero: true,
                                fontColor: this.layoutConfigService.getConfig('colors.base.shape.3'),
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
                    backgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
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
    };
    StudentDetailComponent.prototype.initialDatePicker = function () {
        var $this = this;
        $('input[name="daterange"]').daterangepicker({
            autoUpdateInput: false,
            opens: 'left',
            ranges: {
                Today: [moment__WEBPACK_IMPORTED_MODULE_4___default()(), moment__WEBPACK_IMPORTED_MODULE_4___default()()],
                Yesterday: [
                    moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(1, 'days'),
                    moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(1, 'days'),
                ],
                'Last 7 Days': [moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(6, 'days'), moment__WEBPACK_IMPORTED_MODULE_4___default()()],
                'Last 30 Days': [moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(29, 'days'), moment__WEBPACK_IMPORTED_MODULE_4___default()()],
                'This Month': [moment__WEBPACK_IMPORTED_MODULE_4___default()().startOf('month'), moment__WEBPACK_IMPORTED_MODULE_4___default()().endOf('month')],
                'Last Month': [
                    moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(1, 'month').startOf('month'),
                    moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(1, 'month').endOf('month'),
                ],
            },
        }, function (start, end, label) {
            console.log('A new date selection was made: ' +
                start.format('YYYY-MM-DD') +
                ' to ' +
                end.format('YYYY-MM-DD'));
            $this.dateRange.setValue(start.format('YYYY-MM-DD') + " to " + end.format('YYYY-MM-DD'));
        });
    };
    StudentDetailComponent.ctorParameters = function () { return [
        { type: _app_core_base_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutConfigService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StudentDetailComponent.prototype, "chart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentDetailComponent.prototype, "chartData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StudentDetailComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], StudentDetailComponent.prototype, "paginator", void 0);
    StudentDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-student-detail',
            template: __webpack_require__(/*! raw-loader!./student-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/students/student-detail/student-detail.component.html"),
            styles: [__webpack_require__(/*! ./student-detail.component.scss */ "./src/app/views/pages/students/student-detail/student-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_base_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutConfigService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], StudentDetailComponent);
    return StudentDetailComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/students/students-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/students/students-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: StudentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsRoutingModule", function() { return StudentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dropout_risk_analysis_dropout_risk_analysis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropout-risk-analysis/dropout-risk-analysis.component */ "./src/app/views/pages/students/dropout-risk-analysis/dropout-risk-analysis.component.ts");
/* harmony import */ var _students_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./students.component */ "./src/app/views/pages/students/students.component.ts");





var routes = [
    {
        path: 'students-by-gender',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | students-by-gender-students-by-gender-module */ "students-by-gender-students-by-gender-module").then(__webpack_require__.bind(null, /*! ./students-by-gender/students-by-gender.module */ "./src/app/views/pages/students/students-by-gender/students-by-gender.module.ts")).then(function (m) { return m.StudentsByGenderModule; });
        },
        pathMatch: 'full',
    },
    {
        path: 'attendance-report',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | student-attendance-student-attendance-module */ "student-attendance-student-attendance-module").then(__webpack_require__.bind(null, /*! ./student-attendance/student-attendance.module */ "./src/app/views/pages/students/student-attendance/student-attendance.module.ts")).then(function (m) { return m.StudentAttendanceModule; });
        },
        pathMatch: 'full',
    },
    {
        path: 'view-attendance-report',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | attendance-report-detail-attendance-report-detail-module */ "attendance-report-detail-attendance-report-detail-module").then(__webpack_require__.bind(null, /*! ./attendance-report-detail/attendance-report-detail.module */ "./src/app/views/pages/students/attendance-report-detail/attendance-report-detail.module.ts")).then(function (m) { return m.AttendanceReportDetailModule; });
        },
        pathMatch: 'full',
    },
    {
        path: 'dropout-risk-analysis',
        component: _dropout_risk_analysis_dropout_risk_analysis_component__WEBPACK_IMPORTED_MODULE_3__["DropoutRiskAnalysisComponent"],
        pathMatch: 'full',
    },
    { path: '', component: _students_component__WEBPACK_IMPORTED_MODULE_4__["StudentsComponent"], pathMatch: 'full' },
    { path: ':id', component: _students_component__WEBPACK_IMPORTED_MODULE_4__["StudentsComponent"], pathMatch: 'full' },
];
var StudentsRoutingModule = /** @class */ (function () {
    function StudentsRoutingModule() {
    }
    StudentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], StudentsRoutingModule);
    return StudentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/pages/students/students.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/students/students.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-header-cell {\n  color: #000 !important;\n  font-weight: bold; }\n\n.yellow-icon {\n  color: #ffcf60; }\n\n.green-icon {\n  color: #18e39f; }\n\n/* Note: If you're using an SVG icon, you should make the class target the `<svg>` element */\n\n.yellow-icon svg,\n.green-icon svg {\n  fill: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzLm9udW9yYWgvRG9jdW1lbnRzL2NiYy9TY2hvb2xEYXNoYm9hcmQvc3JjL2FwcC92aWV3cy9wYWdlcy9zdHVkZW50cy9zdHVkZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYyxFQUFBOztBQUVoQiw0RkFBQTs7QUFDQTs7RUFFRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9zdHVkZW50cy9zdHVkZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtaGVhZGVyLWNlbGwge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnllbGxvdy1pY29uIHtcbiAgY29sb3I6ICNmZmNmNjA7XG59XG5cbi5ncmVlbi1pY29uIHtcbiAgY29sb3I6ICMxOGUzOWY7XG59XG4vKiBOb3RlOiBJZiB5b3UncmUgdXNpbmcgYW4gU1ZHIGljb24sIHlvdSBzaG91bGQgbWFrZSB0aGUgY2xhc3MgdGFyZ2V0IHRoZSBgPHN2Zz5gIGVsZW1lbnQgKi9cbi55ZWxsb3ctaWNvbiBzdmcsXG4uZ3JlZW4taWNvbiBzdmcge1xuICBmaWxsOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/students/students.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/pages/students/students.component.ts ***!
  \************************************************************/
/*! exports provided: StudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsComponent", function() { return StudentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _students_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./students.service */ "./src/app/views/pages/students/students.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/app-service/app-service.service */ "./src/app/views/services/app-service/app-service.service.ts");
/* harmony import */ var _schools_schools_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../schools/schools.service */ "./src/app/views/pages/schools/schools.service.ts");
/* harmony import */ var _uploadstudents_upload_teacher_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./uploadstudents/upload-teacher-component */ "./src/app/views/pages/students/uploadstudents/upload-teacher-component.ts");
/* harmony import */ var app_core_base_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _student_detail_student_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./student-detail/student-detail.component */ "./src/app/views/pages/students/student-detail/student-detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
















var $ = window['$'];
var StudentsComponent = /** @class */ (function () {
    function StudentsComponent(changeDetectRef, studentService, appService, schoolService, dialog, layoutConfigService, router, route, location) {
        this.changeDetectRef = changeDetectRef;
        this.studentService = studentService;
        this.appService = appService;
        this.schoolService = schoolService;
        this.dialog = dialog;
        this.layoutConfigService = layoutConfigService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.ELEMENT_DATA = [];
        this.displayedColumns = [
            'select',
            'registrationNumber',
            'surname',
            'otherNames',
            'schoolName',
            'gender',
            'riskLevel',
            'actions',
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ELEMENT_DATA);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.loading = false;
        this.editMode = false;
        this.title = 'My first AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.loadingFilterBox = false;
        this.statesSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([]));
        this.lgaSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([]));
        this.schoolSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([]));
        this.riskLevel = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([]));
        this.totalFemale = 0;
        this.totalMale = 0;
        this.schools = [];
        this.states = [];
        this.localgovernments = [];
        this.totalCount = 0;
        this.schoolDataBase = [];
        this.studentDataBase = [];
        this.color = Chart.helpers.color;
    }
    StudentsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                }
                catch (error) {
                    console.log(error);
                }
                return [2 /*return*/];
            });
        });
    };
    StudentsComponent.prototype.listenForRouteChange = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            var index = _this.dataSource.data.findIndex(function (item) { return item.id == parseInt(param.id); });
            if (index !== -1) {
                var student = _this.dataSource.data[index];
                var dialogRef = _this.dialog.open(_student_detail_student_detail_component__WEBPACK_IMPORTED_MODULE_13__["StudentDetailComponent"], {
                    maxWidth: '90vw',
                    minWidth: '60vw',
                    data: {
                        student: student,
                    },
                });
                dialogRef.afterClosed().subscribe(function (data) {
                    _this.location.back();
                });
            }
            else {
            }
        });
    };
    StudentsComponent.prototype.ExportTOExcel = function () {
        // let targetTableElm = document.getElementById('ExampleMaterialTable');
        var data = [];
        this.dataSource.filteredData.forEach(function (item) {
            var rightThumbTemplate = item.rightThumbTemplate, leftThumbTemplate = item.leftThumbTemplate, rightThumb = item.rightThumb, leftThumb = item.leftThumb, rightFingerPrintId = item.rightFingerPrintId, leftFingerPrintId = item.leftFingerPrintId, rightRET = item.rightRET, leftRET = item.leftRET, schoolId = item.schoolId, localid = item.localid, others = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](item, ["rightThumbTemplate", "leftThumbTemplate", "rightThumb", "leftThumb", "rightFingerPrintId", "leftFingerPrintId", "rightRET", "leftRET", "schoolId", "localid"]);
            // console.log(others);
            data.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, others));
        });
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].json_to_sheet(data);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_8__["writeFile"](wb, 'students.xlsx');
    };
    StudentsComponent.prototype.getSchools = function () {
        var _this = this;
        this.loadingFilterBox = true;
        this.schoolService.getSchools().subscribe(function (data) {
            _this.loadingFilterBox = false;
            _this.schools = data;
            _this.schoolDataBase = data;
        }, function (error) {
            _this.loadingFilterBox = false;
        });
    };
    StudentsComponent.prototype.initChartJS = function () {
        // For more information about the chartjs, visit this link
        // https://www.chartjs.org/docs/latest/getting-started/usage.html
        var chart = new Chart(this.chart.nativeElement, {
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
    };
    StudentsComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    StudentsComponent.prototype.getStudents = function () {
        var _this = this;
        this.loading = true;
        this.studentService.getStudents().subscribe(function (data) {
            if (data.students.length > 2) {
                data.students[0].riskLevel = 'HIGH';
                data.students[1].riskLevel = 'MODERATE';
            }
            _this.loading = false;
            _this.dataSource.data = data.students;
            _this.ELEMENT_DATA = data.students;
            _this.studentDataBase = data.students;
            _this.totalCount = 0;
            _this.totalFemale = 0;
            _this.totalMale = 0;
            data.data_gender.forEach(function (item) {
                if (item.gender.toLowerCase().trim() === 'male') {
                    _this.totalMale = parseInt(item.count);
                }
                else {
                    _this.totalFemale = parseInt(item.count);
                }
            });
            _this.totalCount = _this.totalMale + _this.totalFemale;
            _this.data = {
                labels: ['Female', 'Male'],
                datasets: [
                    {
                        fill: true,
                        // borderWidth: 0,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                        ],
                        borderColor: _this.color(_this.layoutConfigService.getConfig('colors.state.brand'))
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
                        pointHoverBackgroundColor: _this.layoutConfigService.getConfig('colors.state.brand'),
                        pointHoverBorderColor: Chart.helpers
                            .color('#000000')
                            .alpha(0.1)
                            .rgbString(),
                        data: [_this.totalFemale, _this.totalMale],
                    },
                ],
            };
            _this.initChartJS();
            _this.changeDetectRef.detectChanges();
            _this.listenForRouteChange();
        }, function (error) {
            _this.loading = false;
            console.error(error);
        });
    };
    StudentsComponent.prototype.reset = function (event) {
        event.preventDefault;
        this.schoolSelected.setValue([]);
        this.lgaSelected.setValue([]);
        this.statesSelected.setValue([]);
        this.riskLevel.setValue('');
        this.dataSource.data = this.studentDataBase;
        this.totalCount = this.studentDataBase.length;
        this.changeDetectRef.detectChanges();
    };
    StudentsComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        var $this = this;
        $('.custom-file-input').on('change', function (e) {
            var files = $(this).prop('files');
            console.log(files);
            var reader = new FileReader();
            reader.onload = function (e) {
                /* read workbook */
                var bstr = e.target.result;
                var wb = xlsx__WEBPACK_IMPORTED_MODULE_8__["read"](bstr, { type: 'binary' });
                /* grab first sheet */
                var wsname = wb.SheetNames[0];
                var ws = wb.Sheets[wsname];
                /* save data */
                $this.studentJSONfile = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].sheet_to_html(ws, {
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
    };
    StudentsComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    StudentsComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    StudentsComponent.prototype.onRowElementClick = function (event, element) {
        console.log(element);
        this.selection.clear();
        this.school = element;
        // this.editMode = true;
        this.router.navigateByUrl("/students/" + element.id);
    };
    StudentsComponent.prototype.closeDetailPage = function () {
        this.selection.clear();
        this.editMode = false;
    };
    StudentsComponent.prototype.onStateSelectionChange = function (event) {
        var _this = this;
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
            this.schools = this.schoolDataBase.filter(function (item) {
                return _this.statesSelected.value.includes(item.state.trim());
            });
        }
        else {
            this.getUserAccessibleLocals();
            this.schools = this.schoolDataBase;
        }
    };
    StudentsComponent.prototype.getUserAccessibleState = function () {
        this.states = this.appService.getStates(this.appService.getUserStateAccess());
    };
    StudentsComponent.prototype.getUserAccessibleLocals = function (states) {
        if (states === void 0) { states = []; }
        this.localgovernments = this.appService.getLocalGovernments(states);
    };
    StudentsComponent.prototype.onlgaSelectionChange = function (event) {
        var _this = this;
        if (!this.lgaSelected.value.includes('All')) {
            this.schools = this.schoolDataBase.filter(function (item) {
                return _this.lgaSelected.value.includes(item.lga.trim());
            });
        }
        else {
            if (this.statesSelected.value.includes('All')) {
                this.schools = this.schoolDataBase;
            }
            else {
                this.schools = this.schoolDataBase.filter(function (item) {
                    return _this.statesSelected.value.includes(item.state);
                });
            }
        }
    };
    StudentsComponent.prototype.exportPDF = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_6__["default"]({
            orientation: 'landscape',
        });
        var columns = [];
        Object.keys(this.dataSource.data[0])
            .splice(0, 8)
            .forEach(function (key) {
            columns.push({
                header: key.toUpperCase(),
                dataKey: key,
            });
        });
        var data = [];
        this.dataSource.data.forEach(function (item) {
            data.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item));
        });
        var user = this.appService.getUser();
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_7___default()(doc, {
            columns: columns,
            body: data,
            didDrawPage: function (dataArg) {
                doc.setFontSize(20);
                doc.setTextColor(40);
                if (user.state_access.toLocaleLowerCase() === 'all') {
                    doc.text('Students', dataArg.settings.margin.left, 10);
                }
                else {
                    doc.text("Students", dataArg.settings.margin.left, 10);
                }
            },
        });
        doc.save('students.pdf');
        // console.log('called in exit');
    };
    StudentsComponent.prototype.openDialog = function (htmlStr, file) {
        var _this = this;
        var dialogRef = this.dialog.open(_uploadstudents_upload_teacher_component__WEBPACK_IMPORTED_MODULE_11__["UploadStudentComponent"], {
            maxWidth: '90vw',
            minWidth: '60vw',
            data: {
                htmlStr: htmlStr,
                schools: this.schoolDataBase,
                states: this.states,
                lga: this.localgovernments,
                file: file,
            },
        });
        dialogRef.afterClosed().subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('result is: ', result);
                        if (!result) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getStudents()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    StudentsComponent.prototype.filterData = function () {
        var _this = this;
        if (this.lgaSelected.value.includes('All') &&
            this.statesSelected.value.includes('All') &&
            this.schoolSelected.value.includes('All')) {
            this.dataSource.data = this.studentDataBase;
            this.totalCount = this.studentDataBase.length;
        }
        else if (this.schoolSelected.value.length > 0) {
            if (!this.schoolSelected.value.includes('All')) {
                if (this.riskLevel.value.trim() != '') {
                    this.dataSource.data = this.studentDataBase.filter(function (item) {
                        return _this.schoolSelected.value.includes(item.school) &&
                            item.riskLevel === _this.riskLevel.value;
                    });
                    this.totalCount = this.dataSource.data.length;
                }
                else {
                    this.dataSource.data = this.studentDataBase.filter(function (item) {
                        return _this.schoolSelected.value.includes(item.school);
                    });
                    this.totalCount = this.dataSource.data.length;
                }
            }
        }
        this.changeDetectRef.detectChanges();
    };
    StudentsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _students_service__WEBPACK_IMPORTED_MODULE_4__["StudentsService"] },
        { type: _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_9__["AppServiceService"] },
        { type: _schools_schools_service__WEBPACK_IMPORTED_MODULE_10__["SchoolsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: app_core_base_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutConfigService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_15__["Location"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentsComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StudentsComponent.prototype, "chart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], StudentsComponent.prototype, "paginator", void 0);
    StudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-students',
            template: __webpack_require__(/*! raw-loader!./students.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/students/students.component.html"),
            styles: [__webpack_require__(/*! ./students.component.scss */ "./src/app/views/pages/students/students.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _students_service__WEBPACK_IMPORTED_MODULE_4__["StudentsService"],
            _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_9__["AppServiceService"],
            _schools_schools_service__WEBPACK_IMPORTED_MODULE_10__["SchoolsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            app_core_base_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_15__["Location"]])
    ], StudentsComponent);
    return StudentsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/students/students.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/pages/students/students.module.ts ***!
  \*********************************************************/
/*! exports provided: StudentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsModule", function() { return StudentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _students_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./students-routing.module */ "./src/app/views/pages/students/students-routing.module.ts");
/* harmony import */ var _students_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./students.component */ "./src/app/views/pages/students/students.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _partials_content_general_material_preview_material_preview_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../partials/content/general/material-preview/material-preview.module */ "./src/app/views/partials/content/general/material-preview/material-preview.module.ts");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _students_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./students.service */ "./src/app/views/pages/students/students.service.ts");
/* harmony import */ var _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/app-service/app-service.service */ "./src/app/views/services/app-service/app-service.service.ts");
/* harmony import */ var _schools_schools_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../schools/schools.service */ "./src/app/views/pages/schools/schools.service.ts");
/* harmony import */ var _uploadstudents_upload_teacher_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./uploadstudents/upload-teacher-component */ "./src/app/views/pages/students/uploadstudents/upload-teacher-component.ts");
/* harmony import */ var _student_detail_student_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./student-detail/student-detail.component */ "./src/app/views/pages/students/student-detail/student-detail.component.ts");
/* harmony import */ var _dropout_risk_analysis_dropout_risk_analysis_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dropout-risk-analysis/dropout-risk-analysis.component */ "./src/app/views/pages/students/dropout-risk-analysis/dropout-risk-analysis.component.ts");















// import { SchoolsService } from './schools.service';
// import { AgmCoreModule } from '@agm/core';






var StudentsModule = /** @class */ (function () {
    function StudentsModule() {
    }
    StudentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _students_component__WEBPACK_IMPORTED_MODULE_4__["StudentsComponent"],
                _uploadstudents_upload_teacher_component__WEBPACK_IMPORTED_MODULE_18__["UploadStudentComponent"],
                _student_detail_student_detail_component__WEBPACK_IMPORTED_MODULE_19__["StudentDetailComponent"],
                _dropout_risk_analysis_dropout_risk_analysis_component__WEBPACK_IMPORTED_MODULE_20__["DropoutRiskAnalysisComponent"],
            ],
            providers: [_students_service__WEBPACK_IMPORTED_MODULE_15__["StudentsService"], _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_16__["AppServiceService"], _schools_schools_service__WEBPACK_IMPORTED_MODULE_17__["SchoolsService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _students_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentsRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_6__["PartialsModule"],
                // AgmCoreModule.forRoot({
                //   apiKey: 'AIzaSyC8aIKLtCcXqEHG_Gfm35Iahplw3HoKzLM',
                // }),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_6__["PartialsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_6__["PartialsModule"],
                _partials_content_general_material_preview_material_preview_module__WEBPACK_IMPORTED_MODULE_8__["MaterialPreviewModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ],
            entryComponents: [_uploadstudents_upload_teacher_component__WEBPACK_IMPORTED_MODULE_18__["UploadStudentComponent"], _student_detail_student_detail_component__WEBPACK_IMPORTED_MODULE_19__["StudentDetailComponent"]],
        })
    ], StudentsModule);
    return StudentsModule;
}());



/***/ }),

/***/ "./src/app/views/pages/students/students.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/students/students.service.ts ***!
  \**********************************************************/
/*! exports provided: StudentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsService", function() { return StudentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/app-service/app-service.service */ "./src/app/views/services/app-service/app-service.service.ts");







// const BASE_URL = 'https://school-census.herokuapp.com';
var BASE_URL = 'http://159.89.90.214:8000';
// const BASE_URL = 'http://localhost:8000';
var GET_ALL_STUDENTS = '/api/v1/student/get-students';
var StudentsService = /** @class */ (function () {
    function StudentsService(http, appService) {
        this.http = http;
        this.appService = appService;
    }
    StudentsService.prototype.getStudents = function () {
        var user = JSON.parse(localStorage.getItem(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].authTokenKey));
        var endDate = this.appService.formatDate(new Date());
        var startDate = this.appService.formatDate(this.appService.subtractFromCurrentDate(14));
        return this.http
            .get("" + BASE_URL + GET_ALL_STUDENTS + "/" + user.state_access + "?startDate=" + startDate + "&endDate=" + endDate, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                Authorization: user.accessToken,
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            console.log(response);
            var students = [];
            response['data'].forEach(function (item) {
                students.push({
                    school: item['school'],
                    otherNames: item['othernames'],
                    surname: item['surname'],
                    id: item['id'],
                    town: item['town'],
                    gender: item['gender'],
                    riskLevel: item['riskLevel'],
                    registrationNumber: item['registrationnumber'],
                    studentClass: item['studentclass'],
                    newEntrant: item['newEntrant'],
                    hobby: item['hobby'],
                    religion: item['religion'],
                    dateOfAdmission: item['dateofadmission'],
                    dateOfBirth: item['dateofbirth'],
                    schoolId: item['schoolid'],
                    placeOfBirth: item['placeofbirth'],
                    studentflow: item['studentflow'],
                    primarySchoolAttendedDate: item['primaryschoolattendedDate'],
                    previousClass: item['previousclass'],
                    fatherAddress: item['fatherAddress'],
                    motherAddress: item['motheraddress'],
                    motherTelephone: item['mothertelephone'],
                    guardianTelephone: item['guardiantelephone'],
                    guardianName: item['guardianname'],
                    profile_url: item['profile_url'],
                    admissionNumber: item['admissionNumber'],
                    medicalCondition: item['medicalcondition'],
                    guardianAddress: item['guardianaddress'],
                    motherFullName: item['motherfullname'],
                    motherOccupation: item['motheroccupation'],
                    fatherFullName: item['fatherfullname'],
                    fatherOccupation: item['fatheroccupation'],
                    fatherTelephone: item['fathertelephone'],
                    address: item['address'],
                    leftThumb: item['leftthumb'],
                    leftThumbTemplate: item['leftthumbtemplate'],
                    rightThumb: item['rightthumb'],
                    rightThumbTemplate: item['rightthumbtemplate'],
                    leftRET: item['leftret'],
                    leftFingerPrintId: item['leftfingerprintid'],
                    rightRET: item['rightret'],
                    rightFingerPrintId: item['rightfingerprintid'],
                    localid: item['localid'],
                });
            });
            return { students: students, data_gender: response['data_gender'] };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleHttpError));
    };
    StudentsService.prototype.handleHttpError = function (error) {
        if (error.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", body was: " + error.error);
            console.error(error.error);
        }
        // If you want to return a new response:
        //return of(new HttpResponse({body: [{name: "Default value..."}]}));
        // If you want to return the error on the upper level:
        //return throwError(error);
        // or just return nothing:
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    StudentsService.prototype.handleBulkUpload = function (payload) {
        return this.http
            .post(BASE_URL + "/api/v1/student/bulk-upload", payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleHttpError));
    };
    StudentsService.prototype.getStudentGenderReport = function () {
        var user = JSON.parse(localStorage.getItem(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].authTokenKey));
        return this.http
            .get(BASE_URL + "/api/v1/student/get-student-gender-report?state=" + user.state_access)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var data = [];
            response.forEach(function (item) {
                data.push({
                    schoolName: item.schoolname,
                    gender: item.gender,
                    studentClass: item.studentclass,
                    count: item.count,
                });
            });
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleHttpError));
    };
    StudentsService.prototype.getAttendanceReportByFilteredParams = function (params) {
        return this.http
            .post(BASE_URL + "/api/v1/attendance/filter-report", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var data = [];
            response['data'].forEach(function (item) {
                return data.push({
                    date: item['date'],
                    count: item['count'],
                    datecreated: item['datecreated'],
                });
            });
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleHttpError));
    };
    StudentsService.prototype.getAttendanceDetail = function (params) {
        return this.http
            .post(BASE_URL + "/api/v1/attendance/get-attendance-report-detail", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var dt = response['data'];
            var data = [];
            dt.forEach(function (item) {
                data.push({
                    fullName: item.surname + " " + item.othernames + " ",
                    female: item.gender.toLowerCase() === 'female',
                    male: item.gender.toLowerCase() === 'male',
                    school: item.school,
                    status: item.status,
                    class: item.studentclass,
                    attendanceDate: params.attendanceDate,
                    time: item.time,
                });
            });
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleHttpError));
    };
    StudentsService.prototype.getAttendanceReport = function () {
        var user = JSON.parse(localStorage.getItem(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].authTokenKey));
        if (user.state_access.toLowerCase() === 'all')
            return this.http
                .get(BASE_URL + "/api/v1/attendance/get-attendance-report")
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                var data = [];
                response.forEach(function (item) {
                    data.push({
                        school: item.school,
                        gender: item.gender,
                        date: item.date,
                        count: item.count,
                        studentClass: item.studentclass,
                    });
                });
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleHttpError));
        return this.http
            .get(BASE_URL + "/api/v1/attendance/filter-attendance-report-by-state?state=" + user.state_access)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var data = [];
            response['response'].forEach(function (item) {
                data.push({
                    school: item.school,
                    gender: item.gender,
                    date: item.date,
                    count: item.count,
                    studentClass: item.studentclass,
                });
            });
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleHttpError));
    };
    StudentsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_6__["AppServiceService"] }
    ]; };
    StudentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_6__["AppServiceService"]])
    ], StudentsService);
    return StudentsService;
}());



/***/ }),

/***/ "./src/app/views/pages/students/uploadstudents/upload-teacher-component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/students/uploadstudents/upload-teacher-component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".html {\n  min-height: 200px;\n  max-height: 300px;\n  overflow-y: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzLm9udW9yYWgvRG9jdW1lbnRzL2NiYy9TY2hvb2xEYXNoYm9hcmQvc3JjL2FwcC92aWV3cy9wYWdlcy9zdHVkZW50cy91cGxvYWRzdHVkZW50cy91cGxvYWQtdGVhY2hlci1jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9zdHVkZW50cy91cGxvYWRzdHVkZW50cy91cGxvYWQtdGVhY2hlci1jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5odG1sIHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/students/uploadstudents/upload-teacher-component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/students/uploadstudents/upload-teacher-component.ts ***!
  \*********************************************************************************/
/*! exports provided: UploadStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadStudentComponent", function() { return UploadStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/app-service/app-service.service */ "./src/app/views/services/app-service/app-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _students_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../students.service */ "./src/app/views/pages/students/students.service.ts");








var $ = window['$'];
var UploadStudentComponent = /** @class */ (function () {
    function UploadStudentComponent(el, dialogRef, data, 
    // private location: Location,
    router, appService, studentService) {
        this.el = el;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.appService = appService;
        this.studentService = studentService;
        this.schools = [];
        this.states = [];
        this.localgovernments = [];
        this.schoolNotSelected = false;
        this.actionSuccessful = false;
        this.totalCount = 0;
        this.schoolDataBase = [];
        this.loading = false;
        this.statesSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([]));
        this.lgaSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([]));
        this.schoolSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([]));
        // this.product = this.data.product;
    }
    UploadStudentComponent.prototype.onStateSelectionChange = function (event) {
        var _this = this;
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
            this.schools = this.schoolDataBase.filter(function (item) {
                return _this.statesSelected.value.includes(item.state.trim());
            });
        }
        else {
            this.getUserAccessibleLocals();
            this.schools = this.schoolDataBase;
        }
    };
    UploadStudentComponent.prototype.getUserAccessibleLocals = function (states) {
        if (states === void 0) { states = []; }
        this.localgovernments = this.appService.getLocalGovernments(states);
    };
    UploadStudentComponent.prototype.uploadStudents = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var jsonData, index, school, formData, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.schoolNotSelected = false;
                        if (this.data.file === null) {
                            return [2 /*return*/];
                        }
                        if (this.schoolSelected.value.trim() === '') {
                            this.schoolNotSelected = true;
                        }
                        console.log(this.data);
                        return [4 /*yield*/, this.convertFileToJSON(this.data.file)];
                    case 1:
                        jsonData = _a.sent();
                        index = this.schoolDataBase.findIndex(function (item) {
                            return item.schoolName.toLowerCase().trim() ===
                                _this.schoolSelected.value.trim().toLowerCase();
                        });
                        if (index !== -1) {
                            school = this.schoolDataBase[index];
                            formData = new FormData();
                            formData.append('schoolId', "" + school.id);
                            formData.append('students', this.data.file);
                            this.loading = true;
                            this.studentService
                                .handleBulkUpload(formData)
                                .subscribe(function (data) {
                                _this.loading = false;
                                console.log(data);
                                $('.html').empty();
                                _this.actionSuccessful = true;
                                _this.data.file = null;
                            }, function (error) {
                                _this.loading = false;
                                console.log(error);
                                _this.appService.showPopAlertError('Operation failed', error.error.message || 'Some errors were encountered');
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.loading = false;
                        this.appService.showPopAlertError('Operation failed', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UploadStudentComponent.prototype.convertFileToJSON = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function (e) {
                /* read workbook */
                var bstr = e.target.result;
                var wb = xlsx__WEBPACK_IMPORTED_MODULE_6__["read"](bstr, { type: 'binary' });
                /* grab first sheet */
                var wsname = wb.SheetNames[0];
                var ws = wb.Sheets[wsname];
                /* save data */
                var studentJSONfile = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].sheet_to_json(ws);
                resolve(studentJSONfile);
            };
            reader.readAsBinaryString(file);
        });
    };
    UploadStudentComponent.prototype.onlgaSelectionChange = function (event) {
        var _this = this;
        if (!this.lgaSelected.value.includes('All')) {
            this.schools = this.schoolDataBase.filter(function (item) {
                return _this.lgaSelected.value.includes(item.lga.trim());
            });
        }
        else {
            if (this.statesSelected.value.includes('All')) {
                this.schools = this.schoolDataBase;
            }
            else {
                this.schools = this.schoolDataBase.filter(function (item) {
                    return _this.statesSelected.value.includes(item.state);
                });
            }
        }
    };
    UploadStudentComponent.prototype.ngAfterContentInit = function () {
        // excel2table.render($('.html'), this.data.file);
        $('.html').append(this.data.htmlStr);
        $('table').addClass('table table-striped');
        $('table th').attr('scope', 'col');
        this.schools = this.data.schools;
        this.states = this.data.states;
        this.schoolDataBase = this.data.schools;
        this.localgovernments = this.data.lga;
    };
    UploadStudentComponent.prototype.ngOnInit = function () { };
    UploadStudentComponent.prototype.c = function (closed) {
        // console.log(closed);
        this.dialogRef.close(this.actionSuccessful);
        this.actionSuccessful = false;
    };
    UploadStudentComponent.prototype.updateCategory = function () { };
    UploadStudentComponent.prototype.closeModal = function () {
        this.dialogRef.close(this.actionSuccessful);
        this.actionSuccessful = false;
    };
    UploadStudentComponent.prototype.filterData = function () { };
    UploadStudentComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_4__["AppServiceService"] },
        { type: _students_service__WEBPACK_IMPORTED_MODULE_7__["StudentsService"] }
    ]; };
    UploadStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-view-product',
            template: __webpack_require__(/*! raw-loader!./upload-teacher-component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/students/uploadstudents/upload-teacher-component.html"),
            styles: [__webpack_require__(/*! ./upload-teacher-component.scss */ "./src/app/views/pages/students/uploadstudents/upload-teacher-component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_4__["AppServiceService"],
            _students_service__WEBPACK_IMPORTED_MODULE_7__["StudentsService"]])
    ], UploadStudentComponent);
    return UploadStudentComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-pages-students-students-module.js.map