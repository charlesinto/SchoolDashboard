(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-teachers-teachers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/teachers/teachers.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/teachers/teachers.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-2\">\n  <div class=\"col-xl-8\">\n    <mat-progress-bar\n      *ngIf=\"loadingFilterBox\"\n      mode=\"indeterminate\"\n    ></mat-progress-bar>\n    <kt-portlet>\n      <kt-portlet-header\n        [title]=\"'Filter Report'\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <!-- <kt-context-menu></kt-context-menu> -->\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <ng-container ktPortletTools>\n          <div class=\"container\">\n            <form (ngSubmit)=\"filterData()\" class=\"pb-4\">\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <mat-form-field>\n                    <mat-select\n                      placeholder=\"State\"\n                      [formControl]=\"statesSelected\"\n                      (selectionChange)=\"onStateSelectionChange($event)\"\n                      multiple\n                    >\n                      <mat-select-trigger>\n                        {{\n                          statesSelected.value ? statesSelected.value[0] : \"\"\n                        }}\n                        <span\n                          *ngIf=\"statesSelected.value?.length > 1\"\n                          class=\"example-additional-selection\"\n                        >\n                          (+{{ statesSelected.value.length - 1 }} others)\n                        </span>\n                      </mat-select-trigger>\n\n                      <mat-option [value]=\"'All'\">All</mat-option>\n                      <mat-option\n                        *ngFor=\"let topping of states\"\n                        [value]=\"topping.name\"\n                        >{{ topping.name }}</mat-option\n                      >\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-4\">\n                  <mat-form-field>\n                    <mat-select\n                      placeholder=\"Local Government Area\"\n                      [formControl]=\"lgaSelected\"\n                      (selectionChange)=\"onlgaSelectionChange($event)\"\n                      multiple\n                    >\n                      <mat-select-trigger>\n                        {{ lgaSelected.value ? lgaSelected.value[0] : \"\" }}\n                        <span\n                          *ngIf=\"lgaSelected.value?.length > 1\"\n                          class=\"example-additional-selection\"\n                        >\n                          (+{{ lgaSelected.value.length - 1 }} others)\n                        </span>\n                      </mat-select-trigger>\n                      <mat-option [value]=\"'All'\">All</mat-option>\n                      <mat-option\n                        *ngFor=\"let topping of localgovernments\"\n                        [value]=\"topping.name\"\n                        >{{ topping.name }}</mat-option\n                      >\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-4\">\n                  <mat-form-field>\n                    <mat-select\n                      placeholder=\"School\"\n                      [formControl]=\"schoolSelected\"\n                      multiple\n                    >\n                      <mat-select-trigger>\n                        {{\n                          schoolSelected.value ? schoolSelected.value[0] : \"\"\n                        }}\n                        <span\n                          *ngIf=\"schoolSelected.value?.length > 1\"\n                          class=\"example-additional-selection\"\n                        >\n                          (+{{ schoolSelected.value.length - 1 }} others)\n                        </span>\n                      </mat-select-trigger>\n                      <mat-option [value]=\"'All'\">All</mat-option>\n                      <mat-option\n                        *ngFor=\"let topping of schools\"\n                        [value]=\"topping.schoolName\"\n                        >{{ topping.schoolName }}</mat-option\n                      >\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <div class=\"px-3\">\n                    <button\n                      mat-raised-button\n                      color=\"primary\"\n                      aria-label=\"Example icon button with a home icon\"\n                    >\n                      <mat-icon>filter_list</mat-icon>\n                      Filter\n                    </button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\"></div>\n            </form>\n          </div>\n        </ng-container>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n  <div class=\"col-xl-4\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <kt-portlet>\n      <kt-portlet-header\n        [title]=\"'Total Number of Teachers'\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <kt-context-menu></kt-context-menu>\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <!-- Checkbox Column -->\n        <ng-container>\n          <div class=\"container\">\n            <div class=\"row mb-2\">\n              <div class=\"col-xl-12\">\n                <div class=\"d-flex justify-content-center align-items-center\">\n                  <h1>{{ totalCount }}</h1>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"kt-widget14__chart\" style=\"height: 150px\">\n                <canvas #chart></canvas>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xl-6\">\n                <div class=\"\">\n                  <div>\n                    <h5 class=\"\">Total Male</h5>\n                    <h1 class=\"text-success text-center\">{{ totalMale }}</h1>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-xl-6\">\n                <div>\n                  <h5 class=\"\">Total Female</h5>\n                  <h1 class=\"text-danger text-center\">{{ totalFemale }}</h1>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n</div>\n<div class=\"row\">\n  <div [ngClass]=\"{ 'col-xl-12': !editMode, 'col-xl-8': editMode }\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <kt-portlet>\n      <kt-portlet-header\n        [title]=\"'All Teachers'\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <kt-context-menu></kt-context-menu>\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"d-flex justify-content-between\">\n              <div class=\"px-3\">\n                <mat-form-field>\n                  <mat-label>Search</mat-label>\n                  <input\n                    matInput\n                    (keyup)=\"applyFilter($event)\"\n                    placeholder=\"Searching for...\"\n                    #input\n                  />\n                </mat-form-field>\n              </div>\n              <div class=\"px-3\">\n                <button\n                  mat-raised-button\n                  color=\"primary\"\n                  (click)=\"exportPDF()\"\n                  aria-label=\"Example icon button with a home icon\"\n                >\n                  <mat-icon>filter_list</mat-icon>\n                  Export PDF\n                </button>\n                <button\n                  mat-raised-button\n                  color=\"secondary\"\n                  class=\"ml-2\"\n                  (click)=\"ExportTOExcel()\"\n                  aria-label=\"Example icon button with a home icon\"\n                >\n                  <mat-icon>filter_list</mat-icon>\n                  Export Excel\n                </button>\n              </div>\n            </div>\n            <!-- <div class=\"px-3\">\n              <mat-form-field>\n                <mat-label>Filter</mat-label>\n                <input\n                  matInput\n                  (keyup)=\"applyFilter($event)\"\n                  placeholder=\"Searching for...\"\n                  #input\n                />\n              </mat-form-field>\n            </div> -->\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-4 pl-4\">\n            <div class=\"custom-file\">\n              <input\n                accept=\"application/vnd.ms-excel;application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;\"\n                type=\"file\"\n                class=\"custom-file-input\"\n                id=\"customFile\"\n              />\n              <label class=\"custom-file-label\" for=\"customFile\"\n                >Bulk Upload(Excel)</label\n              >\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <mat-table #table [dataSource]=\"dataSource\">\n              <!-- Checkbox Column -->\n              <ng-container matColumnDef=\"select\">\n                <mat-header-cell *matHeaderCellDef>\n                  <mat-checkbox\n                    (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                    [disabled]=\"true\"\n                  >\n                  </mat-checkbox>\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                  <mat-checkbox\n                    (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                    [disabled]=\"true\"\n                  >\n                  </mat-checkbox>\n                </mat-cell>\n              </ng-container>\n\n              <!-- Position Column -->\n              <ng-container matColumnDef=\"registrationNumber\">\n                <mat-header-cell *matHeaderCellDef>\n                  Registration Number\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  {{ element.registrationNumber }}\n                </mat-cell>\n              </ng-container>\n              <!-- Name Column -->\n              <ng-container matColumnDef=\"surname\">\n                <mat-header-cell *matHeaderCellDef> Surname </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  {{ element.surname }}\n                </mat-cell>\n              </ng-container>\n              <!-- Weight Column -->\n              <ng-container matColumnDef=\"otherNames\">\n                <mat-header-cell *matHeaderCellDef>\n                  Other Names\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  {{ element.otherNames }}\n                </mat-cell>\n              </ng-container>\n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"schoolName\">\n                <mat-header-cell *matHeaderCellDef> School </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  {{ element.schoolName }}\n                </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"gender\">\n                <mat-header-cell *matHeaderCellDef> Gender </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  {{ element.gender }}\n                </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"actions\">\n                <mat-header-cell *matHeaderCellDef>\n                  <!-- <mat-checkbox\n                    (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                  > -->\n                  <!-- </mat-checkbox> -->\n                  Actions\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  <!-- <mat-checkbox\n                    (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                  >\n                  </mat-checkbox> -->\n                  <button\n                    mat-icon-button\n                    color=\"primary\"\n                    aria-label=\"Example icon button with a home icon\"\n                    (click)=\"onRowElementClick($event, element)\"\n                  >\n                    <mat-icon>more_vert</mat-icon>\n                  </button>\n                </mat-cell>\n              </ng-container>\n              <mat-header-row\n                *matHeaderRowDef=\"displayedColumns\"\n              ></mat-header-row>\n              <mat-row\n                *matRowDef=\"let row; columns: displayedColumns\"\n                (click)=\"selection.toggle(row)\"\n              >\n              </mat-row>\n            </mat-table>\n            <mat-paginator\n              [pageSizeOptions]=\"[5, 10, 20]\"\n              showFirstLastButtons\n            ></mat-paginator>\n          </div>\n        </div>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n  <div *ngIf=\"editMode\" class=\"col-xl-4\">\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n      <ng-container ktPortletTools>\n        <div class=\"container school-detail\">\n          <div class=\"row py-4\">\n            <div class=\"col-xl-12\">\n              <div class=\"d-flex justify-content-end\">\n                <button\n                  mat-icon-button\n                  (click)=\"closeDetailPage($event)\"\n                  color=\"accent\"\n                  aria-label=\"Example icon button with a delete icon\"\n                >\n                  <mat-icon>cancel</mat-icon>\n                </button>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"school.profile_url !== null\" class=\"row\">\n            <div class=\"col-xl-12\">\n              <div class=\"image-avatar-wrapper\">\n                <img\n                  class=\"image-avatar\"\n                  alt=\"profile\"\n                  src=\"{{ school.profile_url }}\"\n                />\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <span>Surname</span>\n              <h6>{{ school.surname }}</h6>\n            </div>\n            <div class=\"col-xl-6\">\n              <span>Other Names</span>\n              <h6>{{ school.otherNames }}</h6>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-12\">\n              <span>School</span>\n              <h6>{{ school.schoolName }}</h6>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-12\">\n              <span>Email Address</span>\n              <h6>{{ school.email }}</h6>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <span>Regsitration Number</span>\n              <h6>{{ school.registrationNumber }}</h6>\n            </div>\n            <div class=\"col-xl-6\">\n              <span>Qualification</span>\n              <h6>{{ school.qualification }}</h6>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <span>Date of Birth</span>\n              <h6>{{ school.dateOfBirth | date: \"mediumDate\" }}</h6>\n            </div>\n            <div class=\"col-xl-6\">\n              <span>Subject Taught</span>\n              <h6>{{ school.subjectTaught }}</h6>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <span>Contact Number</span>\n              <h6>{{ school.telePhoneNumber }}</h6>\n            </div>\n            <div class=\"col-xl-6\">\n              <span>Teaching Type</span>\n              <h6>{{ school.teachingType }}</h6>\n            </div>\n          </div>\n          <!-- <div class=\"row\">\n            <div class=\"col-xl-12\">\n              <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n              </agm-map>\n            </div>\n          </div> -->\n        </div>\n      </ng-container>\n    </kt-portlet>\n  </div>\n  <!-- <div class=\"col-xl-4\">\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n      <kt-portlet-header [title]=\"'Authors Profit'\">\n        <ng-container ktPortletTools>\n          <kt-context-menu2></kt-context-menu2>\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body>\n        <kt-widget4 [data]=\"widget4_4\">\n          <ng-template #actionTemplate let-item=\"item\">\n            <span class=\"kt-widget4__number\" [ngClass]=\"item.valueColor\">{{\n              item.value\n            }}</span>\n          </ng-template>\n        </kt-widget4>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div> -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/teachers/uploadteachers/upload-teacher-component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/teachers/uploadteachers/upload-teacher-component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Bulk Upload Teachers</h5>\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n    <span aria-hidden=\"true\" (click)=\"c('Close click')\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n          <ng-container ktPortletTools>\n            <div class=\"container\">\n              <form (ngSubmit)=\"filterData()\" class=\"pb-4\">\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <mat-form-field>\n                      <mat-select\n                        placeholder=\"State\"\n                        [formControl]=\"statesSelected\"\n                        (selectionChange)=\"onStateSelectionChange($event)\"\n                        multiple\n                      >\n                        <mat-select-trigger>\n                          {{ statesSelected.value ? statesSelected.value[0] : \"\"\n                          }}\n                          <span\n                            *ngIf=\"statesSelected.value?.length > 1\"\n                            class=\"example-additional-selection\"\n                          >\n                            (+{{ statesSelected.value.length - 1 }} others)\n                          </span>\n                        </mat-select-trigger>\n\n                        <mat-option [value]=\"'All'\">All</mat-option>\n                        <mat-option\n                          *ngFor=\"let topping of states\"\n                          [value]=\"topping.name\"\n                          >{{ topping.name }}</mat-option\n                        >\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <mat-form-field>\n                      <mat-select\n                        placeholder=\"Local Government Area\"\n                        [formControl]=\"lgaSelected\"\n                        (selectionChange)=\"onlgaSelectionChange($event)\"\n                        multiple\n                      >\n                        <mat-select-trigger>\n                          {{ lgaSelected.value ? lgaSelected.value[0] : \"\" }}\n                          <span\n                            *ngIf=\"lgaSelected.value?.length > 1\"\n                            class=\"example-additional-selection\"\n                          >\n                            (+{{ lgaSelected.value.length - 1 }} others)\n                          </span>\n                        </mat-select-trigger>\n                        <mat-option [value]=\"'All'\">All</mat-option>\n                        <mat-option\n                          *ngFor=\"let topping of localgovernments\"\n                          [value]=\"topping.name\"\n                          >{{ topping.name }}</mat-option\n                        >\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <mat-form-field>\n                      <mat-select\n                        placeholder=\"School\"\n                        [formControl]=\"schoolSelected\"\n                        multiple\n                      >\n                        <mat-select-trigger>\n                          {{ schoolSelected.value ? schoolSelected.value[0] : \"\"\n                          }}\n                          <span\n                            *ngIf=\"schoolSelected.value?.length > 1\"\n                            class=\"example-additional-selection\"\n                          >\n                            (+{{ schoolSelected.value.length - 1 }} others)\n                          </span>\n                        </mat-select-trigger>\n                        <mat-option [value]=\"'All'\">All</mat-option>\n                        <mat-option\n                          *ngFor=\"let topping of schools\"\n                          [value]=\"topping.schoolName\"\n                          >{{ topping.schoolName }}</mat-option\n                        >\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n\n                <div class=\"row\"></div>\n              </form>\n            </div>\n          </ng-container>\n        </kt-portlet-body>\n      </div>\n    </div>\n    <div class=\"row my-5\">\n      <div class=\"col-md-12\">\n        <div class=\"html\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n    Close\n  </button>\n  <button\n    [ngClass]=\"{\n      'kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light': loading\n    }\"\n    id=\"kt_login_signin_submit\"\n    class=\"btn btn-primary btn-elevate kt-login__btn-primary\"\n    (click)=\"createCategory()\"\n    type=\"button\"\n  >\n    Upload\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/views/pages/teachers/teachers-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/teachers/teachers-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TeachersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersRoutingModule", function() { return TeachersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _teachers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teachers.component */ "./src/app/views/pages/teachers/teachers.component.ts");




var routes = [
    { path: '', component: _teachers_component__WEBPACK_IMPORTED_MODULE_3__["TeachersComponent"] },
    {
        path: 'teachers-by-qualification',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | teacher-by-qualification-teacher-by-qualification-module */ "teacher-by-qualification-teacher-by-qualification-module").then(__webpack_require__.bind(null, /*! ./teacher-by-qualification/teacher-by-qualification.module */ "./src/app/views/pages/teachers/teacher-by-qualification/teacher-by-qualification.module.ts")).then(function (m) { return m.TeacherByQualificationModule; });
        },
    },
    { path: 'attendance-report', loadChildren: function () { return __webpack_require__.e(/*! import() | teacher-attendance-teacher-attendance-module */ "teacher-attendance-teacher-attendance-module").then(__webpack_require__.bind(null, /*! ./teacher-attendance/teacher-attendance.module */ "./src/app/views/pages/teachers/teacher-attendance/teacher-attendance.module.ts")).then(function (m) { return m.TeacherAttendanceModule; }); } },
    { path: 'view-attendance-report', loadChildren: function () { return __webpack_require__.e(/*! import() | teacher-report-detail-teacher-report-detail-module */ "teacher-report-detail-teacher-report-detail-module").then(__webpack_require__.bind(null, /*! ./teacher-report-detail/teacher-report-detail.module */ "./src/app/views/pages/teachers/teacher-report-detail/teacher-report-detail.module.ts")).then(function (m) { return m.TeacherReportDetailModule; }); } },
    { path: 'teachers-qualification-by-schoool', loadChildren: function () { return __webpack_require__.e(/*! import() | teachers-qualification-by-school-teachers-qualification-by-school-module */ "teachers-qualification-by-school-teachers-qualification-by-school-module").then(__webpack_require__.bind(null, /*! ./teachers-qualification-by-school/teachers-qualification-by-school.module */ "./src/app/views/pages/teachers/teachers-qualification-by-school/teachers-qualification-by-school.module.ts")).then(function (m) { return m.TeachersQualificationBySchoolModule; }); } },
    { path: 'teachers-distribution-by-subject', loadChildren: function () { return __webpack_require__.e(/*! import() | subject-distribution-subject-distribution-module */ "subject-distribution-subject-distribution-module").then(__webpack_require__.bind(null, /*! ./subject-distribution/subject-distribution.module */ "./src/app/views/pages/teachers/subject-distribution/subject-distribution.module.ts")).then(function (m) { return m.SubjectDistributionModule; }); } },
];
var TeachersRoutingModule = /** @class */ (function () {
    function TeachersRoutingModule() {
    }
    TeachersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TeachersRoutingModule);
    return TeachersRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/pages/teachers/teachers.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/teachers/teachers.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-header-cell {\n  color: #000 !important;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzb251b3JhaC9Eb2N1bWVudHMvY2JjL3NjaG9vbERhc2hib2FyZC9zcmMvYXBwL3ZpZXdzL3BhZ2VzL3RlYWNoZXJzL3RlYWNoZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvdGVhY2hlcnMvdGVhY2hlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWhlYWRlci1jZWxsIHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/teachers/teachers.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/pages/teachers/teachers.component.ts ***!
  \************************************************************/
/*! exports provided: TeachersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersComponent", function() { return TeachersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _teachers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teachers.service */ "./src/app/views/pages/teachers/teachers.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/app-service/app-service.service */ "./src/app/views/services/app-service/app-service.service.ts");
/* harmony import */ var _schools_schools_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../schools/schools.service */ "./src/app/views/pages/schools/schools.service.ts");
/* harmony import */ var chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chart.js/dist/Chart.min.js */ "./node_modules/chart.js/dist/Chart.min.js");
/* harmony import */ var chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var app_core_base_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _uploadteachers_upload_teacher_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./uploadteachers/upload-teacher-component */ "./src/app/views/pages/teachers/uploadteachers/upload-teacher-component.ts");














var $ = window['$'];
var TeachersComponent = /** @class */ (function () {
    function TeachersComponent(changeDetectRef, teacherService, schoolService, appService, layoutConfigService, dialog) {
        this.changeDetectRef = changeDetectRef;
        this.teacherService = teacherService;
        this.schoolService = schoolService;
        this.appService = appService;
        this.layoutConfigService = layoutConfigService;
        this.dialog = dialog;
        this.ELEMENT_DATA = [];
        this.displayedColumns = [
            'select',
            'registrationNumber',
            'surname',
            'otherNames',
            'schoolName',
            'gender',
            'actions',
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.ELEMENT_DATA);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        this.loading = false;
        this.editMode = false;
        this.title = 'My first AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.loadingFilterBox = false;
        this.statesSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([]));
        this.lgaSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([]));
        this.schoolSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([]));
        this.schools = [];
        this.states = [];
        this.localgovernments = [];
        this.totalCount = 0;
        this.schoolDataBase = [];
        this.teacherDatabase = [];
        this.totalMale = 0;
        this.totalFemale = 0;
    }
    TeachersComponent.prototype.ngOnInit = function () {
        this.getTeachers();
        this.getSchools();
        this.getUserAccessibleState();
        this.getUserAccessibleLocals();
        this.state_access = this.appService.getUserStateAccess();
        if (this.state_access.toLowerCase() !== 'all') {
            this.statesSelected.setValue([this.state_access]);
            this.statesSelected.disable();
        }
    };
    TeachersComponent.prototype.openDialog = function (htmlStr, file) {
        var dialogRef = this.dialog.open(_uploadteachers_upload_teacher_component__WEBPACK_IMPORTED_MODULE_13__["UploadTeacherComponent"], {
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
            console.log("Dialog result: " + result);
        });
    };
    TeachersComponent.prototype.initChartJS = function () {
        // For more information about the chartjs, visit this link
        // https://www.chartjs.org/docs/latest/getting-started/usage.html
        var chart = new chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_8__["Chart"](this.chart.nativeElement, {
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
    TeachersComponent.prototype.getSchools = function () {
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
    TeachersComponent.prototype.ExportTOExcel = function () {
        // let targetTableElm = document.getElementById('ExampleMaterialTable');
        var data = [];
        this.dataSource.filteredData.forEach(function (item) {
            var rightThumbTemplate = item.rightThumbTemplate, leftThumbTemplate = item.leftThumbTemplate, rightThumb = item.rightThumb, leftThumb = item.leftThumb, schoolId = item.schoolId, localid = item.localid, others = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](item, ["rightThumbTemplate", "leftThumbTemplate", "rightThumb", "leftThumb", "schoolId", "localid"]);
            data.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, others));
        });
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_12__["utils"].json_to_sheet(data);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_12__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_12__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_12__["writeFile"](wb, 'teachers.xlsx');
    };
    TeachersComponent.prototype.getTeachers = function () {
        var _this = this;
        this.loading = true;
        this.teacherService.getTeachers().subscribe(function (data) {
            _this.loading = false;
            _this.dataSource.data = data;
            _this.totalCount = data.length;
            data.forEach(function (item) {
                if (item.gender.toLowerCase().trim() === 'male') {
                    _this.totalMale += 1;
                }
                else {
                    _this.totalFemale += 1;
                }
            });
            _this.ELEMENT_DATA = data;
            _this.teacherDatabase = data;
            _this.data = {
                labels: ['Male', 'Female'],
                datasets: [
                    {
                        // label: 'dataset 1',
                        backgroundColor: _this.layoutConfigService.getConfig('colors.state.success'),
                        data: [_this.totalMale, _this.totalFemale],
                    },
                ],
            };
            _this.initChartJS();
            _this.changeDetectRef.detectChanges();
        }, function (error) {
            _this.loading = false;
            console.log(error);
        });
    };
    TeachersComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        var $this = this;
        $('.custom-file-input').on('change', function (e) {
            var files = $(this).prop('files');
            console.log(files);
            var reader = new FileReader();
            reader.onload = function (e) {
                /* read workbook */
                var bstr = e.target.result;
                var wb = xlsx__WEBPACK_IMPORTED_MODULE_12__["read"](bstr, { type: 'binary' });
                /* grab first sheet */
                var wsname = wb.SheetNames[0];
                var ws = wb.Sheets[wsname];
                /* save data */
                $this.teacherJsonFile = xlsx__WEBPACK_IMPORTED_MODULE_12__["utils"].sheet_to_html(ws, {
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
    };
    TeachersComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    TeachersComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    TeachersComponent.prototype.onRowElementClick = function (event, element) {
        console.log(element);
        this.selection.clear();
        this.school = element;
        this.editMode = true;
    };
    TeachersComponent.prototype.closeDetailPage = function () {
        this.selection.clear();
        this.editMode = false;
    };
    TeachersComponent.prototype.onStateSelectionChange = function (event) {
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
    TeachersComponent.prototype.getUserAccessibleState = function () {
        this.states = this.appService.getStates(this.appService.getUserStateAccess());
    };
    TeachersComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    TeachersComponent.prototype.getUserAccessibleLocals = function (states) {
        if (states === void 0) { states = []; }
        this.localgovernments = this.appService.getLocalGovernments(states);
    };
    TeachersComponent.prototype.onlgaSelectionChange = function (event) {
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
    TeachersComponent.prototype.filterData = function () {
        var _this = this;
        if (this.lgaSelected.value.includes('All') &&
            this.statesSelected.value.includes('All') &&
            this.schoolSelected.value.includes('All')) {
            this.dataSource.data = this.teacherDatabase;
            this.reComputeGraph(this.dataSource.data);
            this.totalCount = this.teacherDatabase.length;
        }
        else if (this.schoolSelected.value.length > 0) {
            if (!this.schoolSelected.value.includes('All')) {
                this.dataSource.data = this.teacherDatabase.filter(function (item) {
                    return _this.schoolSelected.value.includes(item.schoolName);
                });
                this.totalCount = this.dataSource.data.length;
                this.reComputeGraph(this.dataSource.data);
            }
            else {
                this.dataSource.data = this.teacherDatabase;
                this.totalCount = this.dataSource.data.length;
                this.reComputeGraph(this.dataSource.data);
            }
        }
        this.changeDetectRef.detectChanges();
    };
    TeachersComponent.prototype.exportPDF = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_10__["default"]({
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
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_11___default()(doc, {
            columns: columns,
            body: data,
            didDrawPage: function (dataArg) {
                doc.setFontSize(20);
                doc.setTextColor(40);
                if (user.state_access.toLocaleLowerCase() === 'all') {
                    doc.text('Teachers', dataArg.settings.margin.left, 10);
                }
                else {
                    doc.text("Teachers", dataArg.settings.margin.left, 10);
                }
            },
        });
        doc.save('teachers.pdf');
        // console.log('called in exit');
    };
    TeachersComponent.prototype.reComputeGraph = function (data) {
        var _this = this;
        this.totalFemale = 0;
        this.totalMale = 0;
        data.forEach(function (item) {
            if (item.gender.trim().toLowerCase() === 'male') {
                _this.totalMale += 1;
            }
            else {
                _this.totalFemale += 1;
            }
        });
        this.data = {
            labels: ['Male', 'Female'],
            datasets: [
                {
                    // label: 'dataset 1',
                    backgroundColor: this.layoutConfigService.getConfig('colors.state.success'),
                    data: [this.totalMale, this.totalFemale],
                },
            ],
        };
        this.initChartJS();
    };
    TeachersComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _teachers_service__WEBPACK_IMPORTED_MODULE_4__["TeachersService"] },
        { type: _schools_schools_service__WEBPACK_IMPORTED_MODULE_7__["SchoolsService"] },
        { type: _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_6__["AppServiceService"] },
        { type: app_core_base_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutConfigService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeachersComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TeachersComponent.prototype, "chart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], TeachersComponent.prototype, "paginator", void 0);
    TeachersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-teachers',
            template: __webpack_require__(/*! raw-loader!./teachers.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/teachers/teachers.component.html"),
            styles: [__webpack_require__(/*! ./teachers.component.scss */ "./src/app/views/pages/teachers/teachers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _teachers_service__WEBPACK_IMPORTED_MODULE_4__["TeachersService"],
            _schools_schools_service__WEBPACK_IMPORTED_MODULE_7__["SchoolsService"],
            _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_6__["AppServiceService"],
            app_core_base_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutConfigService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], TeachersComponent);
    return TeachersComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/teachers/teachers.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/pages/teachers/teachers.module.ts ***!
  \*********************************************************/
/*! exports provided: TeachersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersModule", function() { return TeachersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _teachers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teachers-routing.module */ "./src/app/views/pages/teachers/teachers-routing.module.ts");
/* harmony import */ var _teachers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teachers.component */ "./src/app/views/pages/teachers/teachers.component.ts");
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
/* harmony import */ var _teachers_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./teachers.service */ "./src/app/views/pages/teachers/teachers.service.ts");
/* harmony import */ var _schools_schools_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../schools/schools.service */ "./src/app/views/pages/schools/schools.service.ts");
/* harmony import */ var _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/app-service/app-service.service */ "./src/app/views/services/app-service/app-service.service.ts");
/* harmony import */ var _uploadteachers_upload_teacher_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./uploadteachers/upload-teacher-component */ "./src/app/views/pages/teachers/uploadteachers/upload-teacher-component.ts");















// import { SchoolsService } from './schools.service';
// import { AgmCoreModule } from '@agm/core';




var TeachersModule = /** @class */ (function () {
    function TeachersModule() {
    }
    TeachersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_teachers_component__WEBPACK_IMPORTED_MODULE_4__["TeachersComponent"], _uploadteachers_upload_teacher_component__WEBPACK_IMPORTED_MODULE_18__["UploadTeacherComponent"]],
            providers: [_teachers_service__WEBPACK_IMPORTED_MODULE_15__["TeachersService"], _schools_schools_service__WEBPACK_IMPORTED_MODULE_16__["SchoolsService"], _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_17__["AppServiceService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _teachers_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeachersRoutingModule"],
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
            entryComponents: [_uploadteachers_upload_teacher_component__WEBPACK_IMPORTED_MODULE_18__["UploadTeacherComponent"]],
        })
    ], TeachersModule);
    return TeachersModule;
}());



/***/ }),

/***/ "./src/app/views/pages/teachers/teachers.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/teachers/teachers.service.ts ***!
  \**********************************************************/
/*! exports provided: TeachersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersService", function() { return TeachersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






// const BASE_URL = 'https://school-census.herokuapp.com';
var BASE_URL = 'http://159.89.90.214:8000';
// const BASE_URL = 'http://localhost:8000';
var GET_ALL_SCHOOLS = '/api/v1/teacher/get-teachers';
var TeachersService = /** @class */ (function () {
    function TeachersService(http) {
        this.http = http;
    }
    TeachersService.prototype.getTeachers = function () {
        var user = JSON.parse(localStorage.getItem(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authTokenKey));
        return this.http
            .get("" + BASE_URL + GET_ALL_SCHOOLS + "/" + user.state_access, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: user.accessToken,
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            var teachers = [];
            response['data'].forEach(function (item) {
                teachers.push({
                    otherNames: item['othernames'],
                    surname: item['surname'],
                    gradeLevel: item['gradelevel'],
                    designation: item['designation'],
                    maidenName: item['maidenname'],
                    gender: item['gender'],
                    registrationNumber: item['registrationnumber'],
                    oracleNumber: item['oraclenumber'],
                    state: item['state'],
                    schoolName: item['schoolname'],
                    schoolId: item['schoolId'],
                    qualificationDate: item['qualificationdate'],
                    salarySource: item['salarysource'],
                    subjectTaught: item['subjecttaught'],
                    teacherClass: item['teacherclass'],
                    teachingType: item['teachingtype'],
                    remarks: item['remarks'],
                    exitDate: item['exitdate'],
                    email: item['email'],
                    residentNumber: item['residentnumber'],
                    pfaNumber: item['pfanumber'],
                    telePhoneNumber: item['telephonenumber'],
                    homeAddress: item['homeaddress'],
                    school: item['school'],
                    dateOfPromotion: item['dateofpromotion'],
                    dateOfConfirmation: item['dateOfconfirmation'],
                    dateOfInterStateTravel: item['dateOfinterstatetravel'],
                    dateOfFirstAppointment: item['dateofpromotion'],
                    dateOfBirth: item['dateofbirth'],
                    qualification: item['qualification'],
                    profile_url: item['profile_url'],
                    leftThumb: item['leftthumb'],
                    leftThumbTemplate: item['leftthumbtemplate'],
                    rightThumb: item['rightthumb'],
                    rightThumbTemplate: item['rightthumbtemplate'],
                    localid: item['localid'],
                });
            });
            console.log(response);
            return teachers;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleHttpError));
    };
    TeachersService.prototype.getTeacherAttendanceReportAll = function () {
        var user = JSON.parse(localStorage.getItem(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authTokenKey));
        return this.http
            .get(BASE_URL + "/api/v1/attendance/teacher/get-all-attendance-report?state=" + user.state_access)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            var data = [];
            response['response'].forEach(function (item) {
                return data.push({ date: item.data, count: item.count });
            });
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleHttpError));
    };
    TeachersService.prototype.getAttendanceReportDetail = function (params) {
        return this.http.post(BASE_URL + "/", params);
    };
    TeachersService.prototype.getAttendanceReport = function (params) {
        return this.http
            .post(BASE_URL + "/api/v1/attendance/teachers/get-attendance-report", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            var data = [];
            response['data'].forEach(function (item) {
                return data.push({ count: item['count'], date: item['date'] });
            });
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleHttpError));
    };
    TeachersService.prototype.getTeacherAttendanceReportDetail = function (params) {
        return this.http
            .post(BASE_URL + "/api/v1/attendance/teachers/get-attendance-report-detail", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            var data = [];
            response['data'].forEach(function (item) {
                return data.push({
                    attendanceDate: item['date'],
                    oracleNumber: item['oraclenumber'],
                    fullName: item['surname'] + " " + item['othernames'],
                    status: item['status'],
                });
            });
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleHttpError));
    };
    TeachersService.prototype.getTeachersQualificationByState = function () {
        var user = JSON.parse(localStorage.getItem(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authTokenKey));
        return this.http
            .get(BASE_URL + "/api/v1/teacher/filter-report/state?state=" + user.state_access)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            var data = [];
            response.forEach(function (item) {
                data.push({
                    count: item.count,
                    qualification: item.qualification,
                    state: item.state,
                });
            });
            console.log(response);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleHttpError));
    };
    TeachersService.prototype.getTeacherSubjectDistribution = function () {
        var user = JSON.parse(localStorage.getItem(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authTokenKey));
        return this.http
            .get(BASE_URL + "/api/v1/teacher/filter-report/teacher-subject-distribution?state=" + user.state_access)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleHttpError));
    };
    TeachersService.prototype.getTeachersQualificationBySchool = function () {
        var user = JSON.parse(localStorage.getItem(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authTokenKey));
        return this.http
            .get(BASE_URL + "/api/v1/teacher/qualification/filter-report-by-school/state?state=" + user.state_access)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            var data = [];
            response.forEach(function (item) {
                data.push({
                    count: item.count,
                    qualification: item.qualification,
                    state: item.state,
                    schoolName: item.schoolname,
                });
            });
            console.log(response);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleHttpError));
    };
    TeachersService.prototype.handleHttpError = function (error) {
        if (error.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error);
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    TeachersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    TeachersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], TeachersService);
    return TeachersService;
}());



/***/ }),

/***/ "./src/app/views/pages/teachers/uploadteachers/upload-teacher-component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/teachers/uploadteachers/upload-teacher-component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".html {\n  min-height: 200px;\n  max-height: 300px;\n  overflow-y: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzb251b3JhaC9Eb2N1bWVudHMvY2JjL3NjaG9vbERhc2hib2FyZC9zcmMvYXBwL3ZpZXdzL3BhZ2VzL3RlYWNoZXJzL3VwbG9hZHRlYWNoZXJzL3VwbG9hZC10ZWFjaGVyLWNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3RlYWNoZXJzL3VwbG9hZHRlYWNoZXJzL3VwbG9hZC10ZWFjaGVyLWNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmh0bWwge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/teachers/uploadteachers/upload-teacher-component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/teachers/uploadteachers/upload-teacher-component.ts ***!
  \*********************************************************************************/
/*! exports provided: UploadTeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadTeacherComponent", function() { return UploadTeacherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/app-service/app-service.service */ "./src/app/views/services/app-service/app-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var $ = window['$'];
var UploadTeacherComponent = /** @class */ (function () {
    function UploadTeacherComponent(el, dialogRef, data, 
    // private location: Location,
    router, appService) {
        this.el = el;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.appService = appService;
        this.schools = [];
        this.states = [];
        this.localgovernments = [];
        this.totalCount = 0;
        this.schoolDataBase = [];
        this.loading = true;
        this.statesSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([]));
        this.lgaSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([]));
        this.schoolSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([]));
        // this.product = this.data.product;
    }
    UploadTeacherComponent.prototype.onStateSelectionChange = function (event) {
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
    UploadTeacherComponent.prototype.getUserAccessibleLocals = function (states) {
        if (states === void 0) { states = []; }
        this.localgovernments = this.appService.getLocalGovernments(states);
    };
    UploadTeacherComponent.prototype.onlgaSelectionChange = function (event) {
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
    UploadTeacherComponent.prototype.ngAfterContentInit = function () {
        // excel2table.render($('.html'), this.data.file);
        $('.html').append(this.data.htmlStr);
        $('table').addClass('table table-striped');
        $('table th').attr('scope', 'col');
        this.schools = this.data.schools;
        this.states = this.data.states;
        this.schoolDataBase = this.data.schools;
        this.localgovernments = this.data.lga;
    };
    UploadTeacherComponent.prototype.ngOnInit = function () { };
    UploadTeacherComponent.prototype.c = function (closed) {
        // console.log(closed);
        this.dialogRef.close(closed);
    };
    UploadTeacherComponent.prototype.updateCategory = function () { };
    UploadTeacherComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    UploadTeacherComponent.prototype.filterData = function () { };
    UploadTeacherComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_4__["AppServiceService"] }
    ]; };
    UploadTeacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-view-product',
            template: __webpack_require__(/*! raw-loader!./upload-teacher-component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/teachers/uploadteachers/upload-teacher-component.html"),
            styles: [__webpack_require__(/*! ./upload-teacher-component.scss */ "./src/app/views/pages/teachers/uploadteachers/upload-teacher-component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_4__["AppServiceService"]])
    ], UploadTeacherComponent);
    return UploadTeacherComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-pages-teachers-teachers-module.js.map