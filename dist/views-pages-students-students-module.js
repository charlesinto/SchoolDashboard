(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-students-students-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/students/students.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/students/students.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-2\">\n  <div class=\"col-xl-8\">\n    <mat-progress-bar\n      *ngIf=\"loadingFilterBox\"\n      mode=\"indeterminate\"\n    ></mat-progress-bar>\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n      <kt-portlet-header\n        [title]=\"'Filter Report'\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <!-- <kt-context-menu></kt-context-menu> -->\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <ng-container ktPortletTools>\n          <div class=\"container\">\n            <form (ngSubmit)=\"filterData()\" class=\"pb-4\">\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <mat-form-field>\n                    <mat-select\n                      placeholder=\"State\"\n                      [formControl]=\"statesSelected\"\n                      (selectionChange)=\"onStateSelectionChange($event)\"\n                      multiple\n                    >\n                      <mat-select-trigger>\n                        {{\n                          statesSelected.value ? statesSelected.value[0] : \"\"\n                        }}\n                        <span\n                          *ngIf=\"statesSelected.value?.length > 1\"\n                          class=\"example-additional-selection\"\n                        >\n                          (+{{ statesSelected.value.length - 1 }} others)\n                        </span>\n                      </mat-select-trigger>\n\n                      <mat-option [value]=\"'All'\">All</mat-option>\n                      <mat-option\n                        *ngFor=\"let topping of states\"\n                        [value]=\"topping.name\"\n                        >{{ topping.name }}</mat-option\n                      >\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-4\">\n                  <mat-form-field>\n                    <mat-select\n                      placeholder=\"Local Government Area\"\n                      [formControl]=\"lgaSelected\"\n                      (selectionChange)=\"onlgaSelectionChange($event)\"\n                      multiple\n                    >\n                      <mat-select-trigger>\n                        {{ lgaSelected.value ? lgaSelected.value[0] : \"\" }}\n                        <span\n                          *ngIf=\"lgaSelected.value?.length > 1\"\n                          class=\"example-additional-selection\"\n                        >\n                          (+{{ lgaSelected.value.length - 1 }} others)\n                        </span>\n                      </mat-select-trigger>\n                      <mat-option [value]=\"'All'\">All</mat-option>\n                      <mat-option\n                        *ngFor=\"let topping of localgovernments\"\n                        [value]=\"topping.name\"\n                        >{{ topping.name }}</mat-option\n                      >\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-4\">\n                  <mat-form-field>\n                    <mat-select\n                      placeholder=\"School\"\n                      [formControl]=\"schoolSelected\"\n                      multiple\n                    >\n                      <mat-select-trigger>\n                        {{\n                          schoolSelected.value ? schoolSelected.value[0] : \"\"\n                        }}\n                        <span\n                          *ngIf=\"schoolSelected.value?.length > 1\"\n                          class=\"example-additional-selection\"\n                        >\n                          (+{{ schoolSelected.value.length - 1 }} others)\n                        </span>\n                      </mat-select-trigger>\n                      <mat-option [value]=\"'All'\">All</mat-option>\n                      <mat-option\n                        *ngFor=\"let topping of schools\"\n                        [value]=\"topping.schoolName\"\n                        >{{ topping.schoolName }}</mat-option\n                      >\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <mat-form-field>\n                    <mat-select\n                      placeholder=\"Dropout Risk Level\"\n                      [formControl]=\"riskLevel\"\n                    >\n                      <mat-select-trigger>\n                        {{ riskLevel.value }}\n                      </mat-select-trigger>\n                      <mat-option [value]=\"''\">All</mat-option>\n                      <mat-option [value]=\"'HIGH'\">HIGH</mat-option>\n                      <mat-option [value]=\"'MODERATE'\">MODERATE</mat-option>\n                      <mat-option [value]=\"'NIL'\">NO RISK</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-4 pl-3\">\n                  <div class=\"px-3\">\n                    <button\n                      mat-raised-button\n                      color=\"primary\"\n                      style=\"width: 100%\"\n                      aria-label=\"Example icon button with a home icon\"\n                    >\n                      <mat-icon>filter_list</mat-icon>\n                      Filter\n                    </button>\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <button\n                    mat-raised-button\n                    aria-label=\"Example icon button with a home icon\"\n                    style=\"width: 100%\"\n                    (click)=\"reset($event)\"\n                  >\n                    <mat-icon>filter_list</mat-icon>\n                    Reset\n                  </button>\n                </div>\n              </div>\n              <div class=\"row\"></div>\n            </form>\n          </div>\n        </ng-container>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n  <div class=\"col-xl-4\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <kt-portlet>\n      <kt-portlet-header\n        [title]=\"'Total Number of Students'\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <kt-context-menu></kt-context-menu>\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <!-- Checkbox Column -->\n        <ng-container>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-xl-12\">\n                <div class=\"d-flex justify-content-center align-items-center\">\n                  <h1>{{ totalCount }}</h1>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n</div>\n<div class=\"row\">\n  <div [ngClass]=\"{ 'col-xl-12': !editMode, 'col-xl-8': editMode }\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <kt-portlet>\n      <kt-portlet-header\n        [title]=\"'All Students'\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <kt-context-menu></kt-context-menu>\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"d-flex justify-content-between\">\n              <div class=\"px-3\">\n                <mat-form-field>\n                  <mat-label>Search</mat-label>\n                  <input\n                    matInput\n                    (keyup)=\"applyFilter($event)\"\n                    placeholder=\"Searching for...\"\n                    #input\n                  />\n                </mat-form-field>\n              </div>\n              <div class=\"px-3\">\n                <button\n                  mat-raised-button\n                  color=\"primary\"\n                  (click)=\"exportPDF()\"\n                  aria-label=\"Example icon button with a home icon\"\n                >\n                  <mat-icon>filter_list</mat-icon>\n                  Export PDF\n                </button>\n                <button\n                  mat-raised-button\n                  color=\"secondary\"\n                  class=\"ml-2\"\n                  (click)=\"ExportTOExcel()\"\n                  aria-label=\"Example icon button with a home icon\"\n                >\n                  <mat-icon>filter_list</mat-icon>\n                  Export Excel\n                </button>\n              </div>\n            </div>\n            <!-- <div class=\"px-3\">\n              <mat-form-field>\n                <mat-label>Filter</mat-label>\n                <input\n                  matInput\n                  (keyup)=\"applyFilter($event)\"\n                  placeholder=\"Searching for...\"\n                  #input\n                />\n              </mat-form-field>\n            </div> -->\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-4 pl-4\">\n            <div class=\"custom-file\">\n              <input\n                accept=\"application/vnd.ms-excel;application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;\"\n                type=\"file\"\n                class=\"custom-file-input\"\n                id=\"customFile\"\n              />\n              <label class=\"custom-file-label\" for=\"customFile\"\n                >Bulk Upload(Excel)</label\n              >\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <mat-table #table [dataSource]=\"dataSource\">\n              <!-- Checkbox Column -->\n              <ng-container matColumnDef=\"select\">\n                <mat-header-cell *matHeaderCellDef>\n                  <mat-checkbox\n                    (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                    [disabled]=\"true\"\n                  >\n                  </mat-checkbox>\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                  <mat-checkbox\n                    (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                    [disabled]=\"true\"\n                  >\n                  </mat-checkbox>\n                </mat-cell>\n              </ng-container>\n\n              <!-- Position Column -->\n              <ng-container matColumnDef=\"registrationNumber\">\n                <mat-header-cell *matHeaderCellDef>\n                  Regsitration Number\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  {{ element.registrationNumber }}\n                </mat-cell>\n              </ng-container>\n              <!-- Name Column -->\n              <ng-container matColumnDef=\"surname\">\n                <mat-header-cell *matHeaderCellDef> Surname </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  {{ element.surname }}\n                </mat-cell>\n              </ng-container>\n              <!-- Weight Column -->\n              <ng-container matColumnDef=\"otherNames\">\n                <mat-header-cell *matHeaderCellDef>\n                  Other Names\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  {{ element.otherNames }}\n                </mat-cell>\n              </ng-container>\n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"schoolName\">\n                <mat-header-cell *matHeaderCellDef> School </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  {{ element.school }}\n                </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"gender\">\n                <mat-header-cell *matHeaderCellDef> Gender </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  {{ element.gender }}\n                </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"actions\">\n                <mat-header-cell *matHeaderCellDef>\n                  <!-- <mat-checkbox\n                    (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                  > -->\n                  <!-- </mat-checkbox> -->\n                  Actions\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  <!-- <mat-checkbox\n                    (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                  >\n                  </mat-checkbox> -->\n                  <button\n                    mat-icon-button\n                    color=\"primary\"\n                    aria-label=\"Example icon button with a home icon\"\n                    (click)=\"onRowElementClick($event, element)\"\n                  >\n                    <mat-icon>more_vert</mat-icon>\n                  </button>\n                </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"riskLevel\">\n                <mat-header-cell *matHeaderCellDef>\n                  <!-- <mat-checkbox\n                    (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                  > -->\n                  <!-- </mat-checkbox> -->\n                  Dropout Risk Level\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  <!-- <mat-checkbox\n                    (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                  >\n                  </mat-checkbox> -->\n                  <button\n                    mat-icon-button\n                    color=\"warn\"\n                    aria-label=\"Example icon button with a home icon\"\n                    *ngIf=\"element.riskLevel === 'HIGH'\"\n                  >\n                    <mat-icon>error</mat-icon>\n                  </button>\n                  <button\n                    mat-icon-button\n                    aria-label=\"Example icon button with a home icon\"\n                    *ngIf=\"element.riskLevel === 'MODERATE'\"\n                  >\n                    <mat-icon class=\"yellow-icon\">error</mat-icon>\n                  </button>\n                  <button\n                    mat-icon-button\n                    aria-label=\"Example icon button with a home icon\"\n                    *ngIf=\"element.riskLevel === 'NIL'\"\n                  >\n                    <mat-icon class=\"green-icon\">error</mat-icon>\n                  </button>\n                </mat-cell>\n              </ng-container>\n              <mat-header-row\n                *matHeaderRowDef=\"displayedColumns\"\n              ></mat-header-row>\n              <mat-row\n                *matRowDef=\"let row; columns: displayedColumns\"\n                (click)=\"selection.toggle(row)\"\n              >\n              </mat-row>\n            </mat-table>\n            <mat-paginator\n              [pageSizeOptions]=\"[5, 10, 20]\"\n              showFirstLastButtons\n            ></mat-paginator>\n          </div>\n        </div>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n  <div *ngIf=\"editMode\" class=\"col-xl-4\">\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n      <ng-container ktPortletTools>\n        <div class=\"container school-detail\">\n          <div class=\"row py-4\">\n            <div class=\"col-xl-12\">\n              <div class=\"d-flex justify-content-end\">\n                <button\n                  mat-icon-button\n                  (click)=\"closeDetailPage($event)\"\n                  color=\"accent\"\n                  aria-label=\"Example icon button with a delete icon\"\n                >\n                  <mat-icon>cancel</mat-icon>\n                </button>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"school.profile_url !== null\" class=\"row\">\n            <div class=\"col-xl-12\">\n              <div class=\"image-avatar-wrapper\">\n                <img\n                  class=\"image-avatar\"\n                  alt=\"profile\"\n                  src=\"{{ school.profile_url }}\"\n                />\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <span>Surname</span>\n              <h6>{{ school.surname }}</h6>\n            </div>\n            <div class=\"col-xl-6\">\n              <span>Other Names</span>\n              <h6>{{ school.otherNames }}</h6>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <span>School</span>\n              <h6>{{ school.school }}</h6>\n            </div>\n            <div class=\"col-xl-6\">\n              <span>Gender</span>\n              <h6>{{ school.gender }}</h6>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <span>Regsitration Number</span>\n              <h6>{{ school.registrationNumber }}</h6>\n            </div>\n            <div class=\"col-xl-6\">\n              <span>State of Origin</span>\n              <h6>{{ school.state }}</h6>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <span>Date of Birth</span>\n              <h6>{{ school.dateOfBirth | date: \"mediumDate\" }}</h6>\n            </div>\n            <div class=\"col-xl-6\">\n              <span>Student Class</span>\n              <h6>{{ school.studentClass }}</h6>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <span>Guardina Name</span>\n              <h6>{{ school.guardianName }}</h6>\n            </div>\n            <div class=\"col-xl-6\">\n              <span>Guardian Contact</span>\n              <h6>{{ school.guardianTelephone }}</h6>\n            </div>\n          </div>\n          <!-- <div class=\"row\">\n            <div class=\"col-xl-12\">\n              <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n              </agm-map>\n            </div>\n          </div> -->\n        </div>\n      </ng-container>\n    </kt-portlet>\n  </div>\n  <!-- <div class=\"col-xl-4\">\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n      <kt-portlet-header [title]=\"'Authors Profit'\">\n        <ng-container ktPortletTools>\n          <kt-context-menu2></kt-context-menu2>\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body>\n        <kt-widget4 [data]=\"widget4_4\">\n          <ng-template #actionTemplate let-item=\"item\">\n            <span class=\"kt-widget4__number\" [ngClass]=\"item.valueColor\">{{\n              item.value\n            }}</span>\n          </ng-template>\n        </kt-widget4>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div> -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/students/uploadstudents/upload-teacher-component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/students/uploadstudents/upload-teacher-component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Bulk Upload Students</h5>\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n    <span aria-hidden=\"true\" (click)=\"c('Close click')\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n          <ng-container ktPortletTools>\n            <div class=\"container\">\n              <form (ngSubmit)=\"filterData()\" class=\"pb-4\">\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <mat-form-field>\n                      <mat-select\n                        placeholder=\"State\"\n                        [formControl]=\"statesSelected\"\n                        (selectionChange)=\"onStateSelectionChange($event)\"\n                        multiple\n                      >\n                        <mat-select-trigger>\n                          {{ statesSelected.value ? statesSelected.value[0] : \"\"\n                          }}\n                          <span\n                            *ngIf=\"statesSelected.value?.length > 1\"\n                            class=\"example-additional-selection\"\n                          >\n                            (+{{ statesSelected.value.length - 1 }} others)\n                          </span>\n                        </mat-select-trigger>\n\n                        <mat-option [value]=\"'All'\">All</mat-option>\n                        <mat-option\n                          *ngFor=\"let topping of states\"\n                          [value]=\"topping.name\"\n                          >{{ topping.name }}</mat-option\n                        >\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <mat-form-field>\n                      <mat-select\n                        placeholder=\"Local Government Area\"\n                        [formControl]=\"lgaSelected\"\n                        (selectionChange)=\"onlgaSelectionChange($event)\"\n                        multiple\n                      >\n                        <mat-select-trigger>\n                          {{ lgaSelected.value ? lgaSelected.value[0] : \"\" }}\n                          <span\n                            *ngIf=\"lgaSelected.value?.length > 1\"\n                            class=\"example-additional-selection\"\n                          >\n                            (+{{ lgaSelected.value.length - 1 }} others)\n                          </span>\n                        </mat-select-trigger>\n                        <mat-option [value]=\"'All'\">All</mat-option>\n                        <mat-option\n                          *ngFor=\"let topping of localgovernments\"\n                          [value]=\"topping.name\"\n                          >{{ topping.name }}</mat-option\n                        >\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <mat-form-field>\n                      <mat-select\n                        placeholder=\"School\"\n                        [formControl]=\"schoolSelected\"\n                      >\n                        <mat-select-trigger>\n                          {{schoolSelected.value}}\n                        </mat-select-trigger>\n                        <!-- <mat-option [value]=\"'All'\">All</mat-option> -->\n                        <mat-option\n                          *ngFor=\"let topping of schools\"\n                          [value]=\"topping.schoolName\"\n                          >{{ topping.schoolName }}</mat-option\n                        >\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n\n                <div class=\"row\"></div>\n              </form>\n            </div>\n          </ng-container>\n        </kt-portlet-body>\n      </div>\n    </div>\n    <div class=\"row my-5\">\n      <div class=\"col-md-12\">\n        <div class=\"html\"></div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div *ngIf=\"schoolNotSelected\" class=\"alert alert-danger\" role=\"alert\">\n          Please select a school\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div *ngIf=\"actionSuccessful\" class=\"alert alert-success\" role=\"alert\">\n          Bulk Upload Successful.\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n    Close\n  </button>\n  <button\n    [ngClass]=\"{\n      'kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light': loading\n    }\"\n    id=\"kt_login_signin_submit\"\n    class=\"btn btn-primary btn-elevate kt-login__btn-primary\"\n    (click)=\"uploadStudents()\"\n    type=\"button\"\n  >\n    Upload\n  </button>\n</div>\n"

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
/* harmony import */ var _students_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./students.component */ "./src/app/views/pages/students/students.component.ts");




var routes = [
    { path: '', component: _students_component__WEBPACK_IMPORTED_MODULE_3__["StudentsComponent"] },
    {
        path: 'students-by-gender',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | students-by-gender-students-by-gender-module */ "students-by-gender-students-by-gender-module").then(__webpack_require__.bind(null, /*! ./students-by-gender/students-by-gender.module */ "./src/app/views/pages/students/students-by-gender/students-by-gender.module.ts")).then(function (m) { return m.StudentsByGenderModule; });
        },
    },
    {
        path: 'attendance-report',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | student-attendance-student-attendance-module */ "student-attendance-student-attendance-module").then(__webpack_require__.bind(null, /*! ./student-attendance/student-attendance.module */ "./src/app/views/pages/students/student-attendance/student-attendance.module.ts")).then(function (m) { return m.StudentAttendanceModule; });
        },
    },
    { path: 'view-attendance-report', loadChildren: function () { return __webpack_require__.e(/*! import() | attendance-report-detail-attendance-report-detail-module */ "attendance-report-detail-attendance-report-detail-module").then(__webpack_require__.bind(null, /*! ./attendance-report-detail/attendance-report-detail.module */ "./src/app/views/pages/students/attendance-report-detail/attendance-report-detail.module.ts")).then(function (m) { return m.AttendanceReportDetailModule; }); } },
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

module.exports = ".mat-header-cell {\n  color: #000 !important;\n  font-weight: bold; }\n\n.yellow-icon {\n  color: #ffcf60; }\n\n.green-icon {\n  color: #18e39f; }\n\n/* Note: If you're using an SVG icon, you should make the class target the `<svg>` element */\n\n.yellow-icon svg,\n.green-icon svg {\n  fill: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzb251b3JhaC9Eb2N1bWVudHMvY2JjL3NjaG9vbERhc2hib2FyZC9zcmMvYXBwL3ZpZXdzL3BhZ2VzL3N0dWRlbnRzL3N0dWRlbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjLEVBQUE7O0FBRWhCLDRGQUFBOztBQUNBOztFQUVFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3N0dWRlbnRzL3N0dWRlbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1oZWFkZXItY2VsbCB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ueWVsbG93LWljb24ge1xuICBjb2xvcjogI2ZmY2Y2MDtcbn1cblxuLmdyZWVuLWljb24ge1xuICBjb2xvcjogIzE4ZTM5Zjtcbn1cbi8qIE5vdGU6IElmIHlvdSdyZSB1c2luZyBhbiBTVkcgaWNvbiwgeW91IHNob3VsZCBtYWtlIHRoZSBjbGFzcyB0YXJnZXQgdGhlIGA8c3ZnPmAgZWxlbWVudCAqL1xuLnllbGxvdy1pY29uIHN2Zyxcbi5ncmVlbi1pY29uIHN2ZyB7XG4gIGZpbGw6IHdoaXRlO1xufVxuIl19 */"

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












var $ = window['$'];
var StudentsComponent = /** @class */ (function () {
    function StudentsComponent(changeDetectRef, studentService, appService, schoolService, dialog) {
        this.changeDetectRef = changeDetectRef;
        this.studentService = studentService;
        this.appService = appService;
        this.schoolService = schoolService;
        this.dialog = dialog;
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
        this.schools = [];
        this.states = [];
        this.localgovernments = [];
        this.totalCount = 0;
        this.schoolDataBase = [];
        this.studentDataBase = [];
    }
    StudentsComponent.prototype.ngOnInit = function () {
        this.getStudents();
        this.getSchools();
        this.getUserAccessibleLocals();
        this.getUserAccessibleState();
        this.state_access = this.appService.getUserStateAccess();
        if (this.state_access.toLowerCase() !== 'all') {
            this.statesSelected.setValue([this.state_access]);
            this.statesSelected.disable();
        }
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
    StudentsComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    StudentsComponent.prototype.getStudents = function () {
        var _this = this;
        this.loading = true;
        this.studentService.getStudents().subscribe(function (data) {
            data[0].riskLevel = 'HIGH';
            data[1].riskLevel = 'MODERATE';
            _this.loading = false;
            _this.dataSource.data = data;
            _this.ELEMENT_DATA = data;
            _this.studentDataBase = data;
            _this.totalCount = data.length;
            _this.changeDetectRef.detectChanges();
        }, function (error) {
            _this.loading = false;
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
        this.editMode = true;
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
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('result is: ', result);
            if (result) {
                _this.getStudents();
            }
        });
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
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
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
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
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















// import { SchoolsService } from './schools.service';
// import { AgmCoreModule } from '@agm/core';




var StudentsModule = /** @class */ (function () {
    function StudentsModule() {
    }
    StudentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_students_component__WEBPACK_IMPORTED_MODULE_4__["StudentsComponent"], _uploadstudents_upload_teacher_component__WEBPACK_IMPORTED_MODULE_18__["UploadStudentComponent"]],
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
            entryComponents: [_uploadstudents_upload_teacher_component__WEBPACK_IMPORTED_MODULE_18__["UploadStudentComponent"]],
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
            return students;
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
    StudentsService.prototype.handleBulkUpload = function (_a) {
        var schoolId = _a.schoolId, students = _a.students;
        return this.http
            .post(BASE_URL + "/api/v1/student/bulk-upload", {
            schoolId: schoolId,
            students: students,
        })
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
                return data.push({ date: item['date'], count: item['count'] });
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
                    fullName: item.othernames + " " + item.surname,
                    female: item.gender.toLowerCase() === 'female',
                    male: item.gender.toLowerCase() === 'male',
                    school: item.school,
                    status: item.status,
                    class: item.studentclass,
                    attendanceDate: params.attendanceDate,
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

module.exports = ".html {\n  min-height: 200px;\n  max-height: 300px;\n  overflow-y: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzb251b3JhaC9Eb2N1bWVudHMvY2JjL3NjaG9vbERhc2hib2FyZC9zcmMvYXBwL3ZpZXdzL3BhZ2VzL3N0dWRlbnRzL3VwbG9hZHN0dWRlbnRzL3VwbG9hZC10ZWFjaGVyLWNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3N0dWRlbnRzL3VwbG9hZHN0dWRlbnRzL3VwbG9hZC10ZWFjaGVyLWNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmh0bWwge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbiJdfQ== */"

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
            var jsonData, index, school, error_1;
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
                            this.loading = true;
                            this.studentService
                                .handleBulkUpload({ schoolId: school.id, students: jsonData })
                                .subscribe(function (data) {
                                _this.loading = false;
                                console.log(data);
                                $('.html').empty();
                                _this.actionSuccessful = true;
                                _this.data.file = null;
                            }, function (error) {
                                _this.loading = false;
                                console.log(error);
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.loading = false;
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