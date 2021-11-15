(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["teacher-attendance-teacher-attendance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/teachers/teacher-attendance/teacher-attendance.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/teachers/teacher-attendance/teacher-attendance.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-2\">\n  <div class=\"col-xl-8\">\n    <mat-progress-bar\n      *ngIf=\"loadingFilterBox\"\n      mode=\"indeterminate\"\n    ></mat-progress-bar>\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n      <kt-portlet-header\n        [title]=\"'Filter Report'\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <!-- <kt-context-menu></kt-context-menu> -->\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <ng-container ktPortletTools>\n          <div class=\"container\">\n            <form (ngSubmit)=\"filterData()\" class=\"pb-4\">\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <mat-form-field>\n                    <mat-select\n                      placeholder=\"State\"\n                      [formControl]=\"statesSelected\"\n                      (selectionChange)=\"onStateSelectionChange($event)\"\n                    >\n                      <mat-select-trigger>\n                        {{ statesSelected.value }}\n                      </mat-select-trigger>\n                      <!-- <mat-option [value]=\"'All'\">All</mat-option> -->\n                      <mat-option\n                        *ngFor=\"let topping of states\"\n                        [value]=\"topping.name\"\n                        >{{ topping.name }}</mat-option\n                      >\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-4\">\n                  <mat-form-field>\n                    <mat-select\n                      placeholder=\"Local Government Area\"\n                      [formControl]=\"lgaSelected\"\n                      (selectionChange)=\"onlgaSelectionChange($event)\"\n                    >\n                      <mat-select-trigger>\n                        {{ lgaSelected.value }}\n                      </mat-select-trigger>\n                      <mat-option\n                        *ngFor=\"let topping of localgovernments\"\n                        [value]=\"topping.name\"\n                        >{{ topping.name }}</mat-option\n                      >\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-4\">\n                  <mat-form-field>\n                    <mat-select\n                      placeholder=\"School\"\n                      [formControl]=\"schoolSelected\"\n                    >\n                      <mat-select-trigger>\n                        {{ schoolSelected.value }}\n                      </mat-select-trigger>\n                      <mat-option\n                        *ngFor=\"let topping of schools\"\n                        [value]=\"topping.schoolName\"\n                        >{{ topping.schoolName }}</mat-option\n                      >\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <mat-form-field appearance=\"fill\">\n                    <mat-label>Choose a date</mat-label>\n                    <input\n                      [formControl]=\"dateRange\"\n                      matInput\n                      type=\"text\"\n                      name=\"daterange\"\n                      value=\"\"\n                    />\n                    <!-- <mat-label>Choose a date</mat-label>\n                    <input matInput [matDatepicker]=\"picker\" />\n                    <mat-datepicker-toggle\n                      matSuffix\n                      [for]=\"picker\"\n                    ></mat-datepicker-toggle>\n                    <mat-datepicker #picker></mat-datepicker> -->\n                    <!-- <mat-label>Enter a date range</mat-label>\n                    <mat-date-range-input [rangePicker]=\"picker\">\n                      <input matStartDate placeholder=\"Start date\" />\n                      <input matEndDate placeholder=\"End date\" />\n                    </mat-date-range-input>\n                    <mat-datepicker-toggle\n                      matSuffix\n                      [for]=\"picker\"\n                    ></mat-datepicker-toggle>\n                    <mat-date-range-picker #picker></mat-date-range-picker> -->\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"px-3\">\n                    <button\n                      mat-raised-button\n                      color=\"primary\"\n                      aria-label=\"Example icon button with a home icon\"\n                    >\n                      <mat-icon>filter_list</mat-icon>\n                      Filter\n                    </button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\"></div>\n            </form>\n          </div>\n        </ng-container>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n  <div class=\"col-xl-4\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <kt-portlet>\n      <kt-portlet-header\n        [title]=\"'Attendance Distribution'\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <!-- <kt-context-menu></kt-context-menu> -->\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <!-- Checkbox Column -->\n        <ng-container>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-xl-12\">\n                <div class=\"d-flex justify-content-center align-items-center\">\n                  <!-- <kt-widget14></kt-widget14> -->\n                  <div class=\"kt-widget12__chart\" style=\"height: 250px\">\n                    <canvas\n                      #chart\n                      id=\"kt_chart_order_statistics\"\n                      height=\"312\"\n                    ></canvas>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xl-8\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n      <kt-portlet-header\n        [title]=\"''\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <kt-context-menu></kt-context-menu>\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <mat-table #table [dataSource]=\"dataSource\">\n          <!-- Checkbox Column -->\n          <ng-container matColumnDef=\"select\">\n            <mat-header-cell *matHeaderCellDef>\n              <mat-checkbox\n                (change)=\"$event ? masterToggle() : null\"\n                [checked]=\"selection.hasValue() && isAllSelected()\"\n                [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n              >\n              </mat-checkbox>\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              <mat-checkbox\n                (click)=\"$event.stopPropagation()\"\n                (change)=\"$event ? selection.toggle(row) : null\"\n                [checked]=\"selection.isSelected(row)\"\n              >\n              </mat-checkbox>\n            </mat-cell>\n          </ng-container>\n\n          <!-- Position Column -->\n\n          <!-- Name Column -->\n\n          <ng-container matColumnDef=\"date\">\n            <mat-header-cell *matHeaderCellDef>\n              Attendance Date\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{ element.date }}\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"count\">\n            <mat-header-cell *matHeaderCellDef> Total Count </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{ element.count }} </mat-cell>\n          </ng-container>\n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef>\n              <!-- <mat-checkbox\n                (change)=\"$event ? masterToggle() : null\"\n                [checked]=\"selection.hasValue() && isAllSelected()\"\n                [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n              > -->\n              <!-- </mat-checkbox> -->\n              Actions\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <!-- <mat-checkbox\n                (click)=\"$event.stopPropagation()\"\n                (change)=\"$event ? selection.toggle(row) : null\"\n                [checked]=\"selection.isSelected(row)\"\n              >\n              </mat-checkbox> -->\n              <button\n                mat-icon-button\n                color=\"primary\"\n                aria-label=\"Example icon button with a home icon\"\n                (click)=\"onRowElementClick($event, element)\"\n              >\n                <mat-icon>remove_red_eye</mat-icon>\n              </button>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row\n            *matRowDef=\"let row; columns: displayedColumns\"\n            (click)=\"selection.toggle(row)\"\n          >\n          </mat-row>\n        </mat-table>\n        <mat-paginator\n          [pageSizeOptions]=\"[5, 10, 20]\"\n          showFirstLastButtons\n        ></mat-paginator>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n  <div class=\"col-xl-4\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <kt-portlet>\n      <kt-portlet-header\n        [title]=\"'Total Count'\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <kt-context-menu></kt-context-menu>\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <!-- Checkbox Column -->\n        <ng-container>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-xl-12\">\n                <div class=\"d-flex justify-content-center align-items-center\">\n                  <h1>{{ totalCount }}</h1>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/pages/teachers/teacher-attendance/teacher-attendance-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/teachers/teacher-attendance/teacher-attendance-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: TeacherAttendanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherAttendanceRoutingModule", function() { return TeacherAttendanceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _teacher_attendance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teacher-attendance.component */ "./src/app/views/pages/teachers/teacher-attendance/teacher-attendance.component.ts");




var routes = [{ path: '', component: _teacher_attendance_component__WEBPACK_IMPORTED_MODULE_3__["TeacherAttendanceComponent"] }];
var TeacherAttendanceRoutingModule = /** @class */ (function () {
    function TeacherAttendanceRoutingModule() {
    }
    TeacherAttendanceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TeacherAttendanceRoutingModule);
    return TeacherAttendanceRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/pages/teachers/teacher-attendance/teacher-attendance.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/teachers/teacher-attendance/teacher-attendance.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-header-cell {\n  color: #000 !important;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzb251b3JhaC9Eb2N1bWVudHMvY2JjL3NjaG9vbERhc2hib2FyZC9zcmMvYXBwL3ZpZXdzL3BhZ2VzL3RlYWNoZXJzL3RlYWNoZXItYXR0ZW5kYW5jZS90ZWFjaGVyLWF0dGVuZGFuY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3RlYWNoZXJzL3RlYWNoZXItYXR0ZW5kYW5jZS90ZWFjaGVyLWF0dGVuZGFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy90ZWFjaGVycy90ZWFjaGVyLWF0dGVuZGFuY2UvdGVhY2hlci1hdHRlbmRhbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1oZWFkZXItY2VsbCB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIiwiLm1hdC1oZWFkZXItY2VsbCB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/teachers/teacher-attendance/teacher-attendance.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/teachers/teacher-attendance/teacher-attendance.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TeacherAttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherAttendanceComponent", function() { return TeacherAttendanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _teachers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../teachers.service */ "./src/app/views/pages/teachers/teachers.service.ts");
/* harmony import */ var _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/app-service/app-service.service */ "./src/app/views/services/app-service/app-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _schools_schools_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../schools/schools.service */ "./src/app/views/pages/schools/schools.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_core_base_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_11__);










// import { SchoolsService } from 'src/app/view/pages/schools.service';


var $ = window['$'];
var moment = window['moment'];
var TeacherAttendanceComponent = /** @class */ (function () {
    function TeacherAttendanceComponent(teacherService, changeDetectRef, appService, schoolService, router, route, layoutConfigService) {
        this.teacherService = teacherService;
        this.changeDetectRef = changeDetectRef;
        this.appService = appService;
        this.schoolService = schoolService;
        this.router = router;
        this.route = route;
        this.layoutConfigService = layoutConfigService;
        this.ELEMENT_DATA = [];
        this.displayedColumns = ['date', 'count', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ELEMENT_DATA);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.loading = false;
        this.editMode = false;
        this.title = 'My first AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.loadingFilterBox = false;
        this.totalCount = 0;
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.statesSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([]));
        this.lgaSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([]));
        this.schoolSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        this.classSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        this.dateRange = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        this.localgovernments = [];
        this.toppingList = [
            'Extra cheese',
            'Mushroom',
            'Onion',
            'Pepperoni',
            'Sausage',
            'Tomato',
        ];
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
        this.schoolsDataBase = [];
        this.schools = [];
        this.type = 'line';
        this.color = Chart.helpers.color;
    }
    TeacherAttendanceComponent.prototype.ngOnInit = function () {
        // this.getTeacherAttendanceByState();
        this.subscribeToRouteQueryParamsChange();
        this.initialDatePicker();
        this.getUserAccessibleState();
        this.getUserAccessibleLocals();
        this.getSchools();
        if (!this.data) {
            this.data = {
                labels: ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan'],
                datasets: [
                    {
                        fill: true,
                        // borderWidth: 0,
                        backgroundColor: this.color(this.layoutConfigService.getConfig('colors.state.brand'))
                            .alpha(0.6)
                            .rgbString(),
                        borderColor: this.color(this.layoutConfigService.getConfig('colors.state.brand'))
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
                        pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                        pointHoverBorderColor: Chart.helpers
                            .color('#000000')
                            .alpha(0.1)
                            .rgbString(),
                        data: [20, 40, 50, 25, 35, 60, 30],
                    },
                    {
                        fill: true,
                        // borderWidth: 0,
                        backgroundColor: this.color(this.layoutConfigService.getConfig('colors.state.brand'))
                            .alpha(0.2)
                            .rgbString(),
                        borderColor: this.color(this.layoutConfigService.getConfig('colors.state.brand'))
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
                        pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                        pointHoverBorderColor: Chart.helpers
                            .color('#000000')
                            .alpha(0.1)
                            .rgbString(),
                        data: [25, 45, 55, 30, 40, 65, 35],
                    },
                ],
            };
        }
        this.state_access = this.appService.getUserStateAccess();
        if (this.state_access.toLowerCase() !== 'all') {
            this.statesSelected.setValue(this.state_access);
            this.statesSelected.disable();
        }
        this.initChart();
    };
    TeacherAttendanceComponent.prototype.initChart = function () {
        // For more information about the chartjs, visit this link
        // https://www.chartjs.org/docs/latest/getting-started/usage.html
        var chart = new Chart(this.chart.nativeElement, {
            type: this.type,
            data: this.data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: false,
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
    TeacherAttendanceComponent.prototype.exportPDF = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_10__["default"]({
            orientation: 'landscape',
        });
        var columns = [
            {
                header: 'Class',
                dataKey: 'class',
            },
            {
                header: 'Status',
                dataKey: 'status',
            },
            {
                header: 'Full Name',
                dataKey: 'fullName',
            },
            {
                header: 'Attendance Date',
                dataKey: 'attendanceDate',
            },
        ];
        var data = [];
        this.dataSource.data.forEach(function (item) {
            data.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item));
        });
        console.log(data);
        var user = this.appService.getUser();
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_11___default()(doc, {
            columns: columns,
            body: data,
            didDrawPage: function (dataArg) {
                doc.setFontSize(20);
                doc.setTextColor(40);
                if (user.state_access.toLocaleLowerCase() === 'all') {
                    doc.text('Students Attendance', dataArg.settings.margin.left, 10);
                }
                else {
                    doc.text("Students Attendance", dataArg.settings.margin.left, 10);
                }
            },
        });
        doc.save('Students_Attendance.pdf');
        // console.log('called in exit');
    };
    TeacherAttendanceComponent.prototype.subscribeToRouteQueryParamsChange = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var query = {
                school: params['school'],
                state: params['state'],
                lga: params['lga'],
                startDate: params['dateRange']
                    ? params['dateRange'].split('to')[0].trim()
                    : '',
                endDate: params['dateRange']
                    ? params['dateRange'].split('to')[1].trim()
                    : '',
            };
            _this.queryParams = query;
            _this.statesSelected.setValue(query.state);
            if (_this.statesSelected.value && _this.statesSelected.value !== '') {
                _this.getUserAccessibleLocals([query.state]);
            }
            _this.lgaSelected.setValue(query.lga);
            _this.schoolSelected.setValue(query.school);
            _this.dateRange.setValue(query.startDate + " to " + query.endDate);
            _this.getAttendanceReport(query);
        });
    };
    TeacherAttendanceComponent.prototype.getAttendanceReport = function (params) {
        var _this = this;
        if ((!params.school || params.school.trim() === '') &&
            (!params.state || params.state.trim() === '') &&
            (!params.lga || params.lga === ''))
            return;
        this.loading = true;
        this.teacherService.getAttendanceReport(params).subscribe(function (data) {
            _this.loading = false;
            _this.dataSource.data = data;
            _this.totalCount = data.reduce(function (preVal, currVal) {
                return (preVal += parseInt(currVal.count));
            }, 0);
            _this.changeDetectRef.detectChanges();
        }, function (error) {
            _this.loading = false;
        });
    };
    TeacherAttendanceComponent.prototype.getUserAccessibleState = function () {
        this.states = this.appService.getStates(this.appService.getUserStateAccess());
    };
    TeacherAttendanceComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    TeacherAttendanceComponent.prototype.initialDatePicker = function () {
        var $this = this;
        $('input[name="daterange"]').daterangepicker({
            autoUpdateInput: false,
            opens: 'left',
            ranges: {
                Today: [moment(), moment()],
                Yesterday: [
                    moment().subtract(1, 'days'),
                    moment().subtract(1, 'days'),
                ],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [
                    moment().subtract(1, 'month').startOf('month'),
                    moment().subtract(1, 'month').endOf('month'),
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
    TeacherAttendanceComponent.prototype.getTeacherAttendanceByState = function () {
        var _this = this;
        this.loading = true;
        this.teacherService.getTeacherAttendanceReportAll().subscribe(function (data) {
            _this.dataSource.data = data;
            _this.loading = false;
            _this.totalCount = data.reduce(function (accumulate, currentValue) {
                return accumulate + parseInt(currentValue.count);
            }, 0);
            _this.changeDetectRef.detectChanges();
        }, function (error) {
            _this.loading = false;
        });
    };
    TeacherAttendanceComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    TeacherAttendanceComponent.prototype.getSchools = function () {
        var _this = this;
        this.loadingFilterBox = true;
        this.schoolService.getSchools().subscribe(function (data) {
            _this.loadingFilterBox = false;
            _this.schoolsDataBase = data;
            if (_this.lgaSelected.value && _this.lgaSelected.value !== '') {
                _this.schools = _this.schoolsDataBase.filter(function (item) { return _this.lgaSelected.value === item.lga; });
            }
            else if (_this.statesSelected.value &&
                _this.statesSelected.value !== '') {
                _this.schools = _this.schoolsDataBase.filter(function (item) { return _this.statesSelected.value === item.state; });
            }
            else {
                _this.schools = data;
            }
        }, function (error) {
            _this.loadingFilterBox = false;
        });
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    TeacherAttendanceComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    TeacherAttendanceComponent.prototype.onRowElementClick = function (event, element) {
        this.router.navigate(['teachers', 'view-attendance-report'], {
            queryParams: {
                school: this.queryParams.school,
                state: this.queryParams.state,
                lga: this.queryParams.lga,
                dateRange: this.queryParams.startDate + " to " + this.queryParams.endDate,
                attendanceDate: element.date,
            },
        });
    };
    TeacherAttendanceComponent.prototype.closeDetailPage = function () {
        this.selection.clear();
        this.editMode = false;
    };
    TeacherAttendanceComponent.prototype.onStateSelectionChange = function (event) {
        var _this = this;
        this.getUserAccessibleLocals([this.statesSelected.value]);
        this.schools = this.schoolsDataBase.filter(function (item) { return _this.statesSelected.value === item.state; });
    };
    TeacherAttendanceComponent.prototype.onlgaSelectionChange = function (event) {
        var _this = this;
        this.schools = this.schoolsDataBase.filter(function (item) { return _this.lgaSelected.value === item.lga; });
    };
    TeacherAttendanceComponent.prototype.getUserAccessibleLocals = function (states) {
        if (states === void 0) { states = []; }
        this.localgovernments = this.appService.getLocalGovernments(states);
    };
    TeacherAttendanceComponent.prototype.filterData = function () {
        this.router.navigate(['teachers', 'attendance-report'], {
            queryParams: {
                school: this.schoolSelected.value,
                state: this.statesSelected.value,
                lga: this.lgaSelected.value,
                dateRange: this.dateRange.value ? this.dateRange.value : '',
            },
        });
    };
    TeacherAttendanceComponent.ctorParameters = function () { return [
        { type: _teachers_service__WEBPACK_IMPORTED_MODULE_4__["TeachersService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_5__["AppServiceService"] },
        { type: _schools_schools_service__WEBPACK_IMPORTED_MODULE_7__["SchoolsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: app_core_base_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutConfigService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], TeacherAttendanceComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeacherAttendanceComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TeacherAttendanceComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TeacherAttendanceComponent.prototype, "chart", void 0);
    TeacherAttendanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-teacher-attendance',
            template: __webpack_require__(/*! raw-loader!./teacher-attendance.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/teachers/teacher-attendance/teacher-attendance.component.html"),
            styles: [__webpack_require__(/*! ./teacher-attendance.component.scss */ "./src/app/views/pages/teachers/teacher-attendance/teacher-attendance.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_teachers_service__WEBPACK_IMPORTED_MODULE_4__["TeachersService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_5__["AppServiceService"],
            _schools_schools_service__WEBPACK_IMPORTED_MODULE_7__["SchoolsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            app_core_base_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutConfigService"]])
    ], TeacherAttendanceComponent);
    return TeacherAttendanceComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/teachers/teacher-attendance/teacher-attendance.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/teachers/teacher-attendance/teacher-attendance.module.ts ***!
  \**************************************************************************************/
/*! exports provided: TeacherAttendanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherAttendanceModule", function() { return TeacherAttendanceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _teacher_attendance_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teacher-attendance-routing.module */ "./src/app/views/pages/teachers/teacher-attendance/teacher-attendance-routing.module.ts");
/* harmony import */ var _teacher_attendance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teacher-attendance.component */ "./src/app/views/pages/teachers/teacher-attendance/teacher-attendance.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _partials_content_general_material_preview_material_preview_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../partials/content/general/material-preview/material-preview.module */ "./src/app/views/partials/content/general/material-preview/material-preview.module.ts");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");















// import { SchoolsService } from './schools.service';
// import { AgmCoreModule } from '@agm/core';
var TeacherAttendanceModule = /** @class */ (function () {
    function TeacherAttendanceModule() {
    }
    TeacherAttendanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_teacher_attendance_component__WEBPACK_IMPORTED_MODULE_4__["TeacherAttendanceComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _teacher_attendance_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeacherAttendanceRoutingModule"],
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
        })
    ], TeacherAttendanceModule);
    return TeacherAttendanceModule;
}());



/***/ })

}]);
//# sourceMappingURL=teacher-attendance-teacher-attendance-module.js.map