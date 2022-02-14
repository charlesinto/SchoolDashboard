(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attendance-report-detail-attendance-report-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/students/attendance-report-detail/attendance-report-detail.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/students/attendance-report-detail/attendance-report-detail.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-2\">\n  <div class=\"col-xl-4\">\n    <kt-portlet>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <ng-container ktPortletTools>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <button\n                  mat-icon-button\n                  color=\"primary\"\n                  aria-label=\"Example icon button with a home icon\"\n                  (click)=\"onBackArrowClick($event)\"\n                >\n                  <mat-icon>arrow_back</mat-icon>\n                  Back\n                </button>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n  <div class=\"col-xl-8\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <kt-portlet>\n      <kt-portlet-header\n        [title]=\"'Gender Distribution of Students Present in Attendance'\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <!-- <kt-context-menu></kt-context-menu> -->\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <!-- Checkbox Column -->\n        <ng-container>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-xl-12\">\n                <div class=\"d-flex justify-content-center align-items-center\">\n                  <!-- <kt-widget14></kt-widget14> -->\n                  <div class=\"kt-widget12__chart\" style=\"height: 250px\">\n                    <canvas\n                      #chart\n                      id=\"kt_chart_order_statistics\"\n                      height=\"312\"\n                    ></canvas>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row mb-1\">\n              <div class=\"col-xl-12\">\n                <h5 class=\"text-black text-center\">{{ school }}</h5>\n              </div>\n            </div>\n            <div class=\"row mb-1\">\n              <div class=\"col-xl-12\">\n                <h5 *ngIf=\"lga && state\" class=\"text-black text-center\">\n                  {{ lga }}, {{ state }}\n                </h5>\n              </div>\n            </div>\n            <div class=\"row mb-1\">\n              <div class=\"col-xl-12\">\n                <h4>Total Present</h4>\n                <h5 class=\"text-success\">{{ totalPresent }}</h5>\n              </div>\n            </div>\n            <div class=\"row mb-1\">\n              <div class=\"col-xl-12\">\n                <h4>Total Absent</h4>\n                <h5 class=\"text-danger\">{{ totalAbsent }}</h5>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xl-12\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n      <kt-portlet-header\n        [title]=\"''\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <!-- <kt-context-menu></kt-context-menu> -->\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <!-- <div ngbDropdown class=\"d-inline-block\">\n                  <button class=\"btn btn-success\" id=\"dropdownBasic1\" ngbDropdownToggle>Toggle dropdown</button>\n                  <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                    <button class=\"dropdown-item\">Action - 1</button>\n                    <button class=\"dropdown-item\">Another Action</button>\n                    <button class=\"dropdown-item\">Something else is here</button>\n                  </div>\n                </div> -->\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"d-flex justify-content-end\">\n              <div class=\"px-3\">\n                <button\n                  mat-raised-button\n                  color=\"primary\"\n                  (click)=\"exportPDF()\"\n                  aria-label=\"Example icon button with a home icon\"\n                >\n                  <mat-icon>filter_list</mat-icon>\n                  Export PDF\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <mat-table #table [dataSource]=\"dataSource\">\n          <!-- Checkbox Column -->\n          <ng-container matColumnDef=\"select\">\n            <mat-header-cell *matHeaderCellDef>\n              <mat-checkbox\n                (change)=\"$event ? masterToggle() : null\"\n                [checked]=\"selection.hasValue() && isAllSelected()\"\n                [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n              >\n              </mat-checkbox>\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              <mat-checkbox\n                (click)=\"$event.stopPropagation()\"\n                (change)=\"$event ? selection.toggle(row) : null\"\n                [checked]=\"selection.isSelected(row)\"\n              >\n              </mat-checkbox>\n            </mat-cell>\n          </ng-container>\n\n          <!-- Position Column -->\n\n          <!-- Name Column -->\n\n          <!-- <ng-container matColumnDef=\"school\">\n            <mat-header-cell *matHeaderCellDef> School </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{ element.school }}\n            </mat-cell>\n          </ng-container> -->\n\n          <ng-container matColumnDef=\"class\">\n            <mat-header-cell *matHeaderCellDef> Class </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{ element.class }} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"fullName\">\n            <mat-header-cell *matHeaderCellDef>\n              Student Fullname\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{ element.fullName }}\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"male\">\n            <mat-header-cell *matHeaderCellDef> Male </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <button\n                *ngIf=\"element.male === true\"\n                mat-icon-button\n                color=\"primary\"\n                aria-label=\"Example icon button with a home icon\"\n              >\n                <mat-icon>check</mat-icon>\n              </button>\n              <span\n                *ngIf=\"element.male === false\"\n                color=\"primary\"\n                aria-label=\"Example icon button with a home icon\"\n              >\n                -\n              </span>\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"female\">\n            <mat-header-cell *matHeaderCellDef> Female </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <button\n                *ngIf=\"element.female === true\"\n                mat-icon-button\n                color=\"primary\"\n                aria-label=\"Example icon button with a home icon\"\n              >\n                <mat-icon>check</mat-icon>\n              </button>\n              <span\n                *ngIf=\"element.female === false\"\n                color=\"primary\"\n                aria-label=\"Example icon button with a home icon\"\n              >\n                -\n              </span>\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"attendanceDate\">\n            <mat-header-cell *matHeaderCellDef>\n              Attendance Date\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{ element.attendanceDate }}\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"status\">\n            <mat-header-cell *matHeaderCellDef>\n              Attendance Status\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <span\n                [ngClass]=\"{\n                  'text-success': element.status === 'Present',\n                  'text-danger': element.status !== 'Present'\n                }\"\n                aria-label=\"Example icon button with a home icon\"\n              >\n                {{ element.status }}\n              </span>\n            </mat-cell>\n          </ng-container>\n\n          <!-- Weight Column -->\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row\n            *matRowDef=\"let row; columns: displayedColumns\"\n            (click)=\"selection.toggle(row)\"\n          >\n          </mat-row>\n        </mat-table>\n        <mat-paginator\n          [pageSizeOptions]=\"[5, 10, 20]\"\n          showFirstLastButtons\n        ></mat-paginator>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/pages/students/attendance-report-detail/attendance-report-detail-routing.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/pages/students/attendance-report-detail/attendance-report-detail-routing.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AttendanceReportDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceReportDetailRoutingModule", function() { return AttendanceReportDetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _attendance_report_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attendance-report-detail.component */ "./src/app/views/pages/students/attendance-report-detail/attendance-report-detail.component.ts");




var routes = [{ path: '', component: _attendance_report_detail_component__WEBPACK_IMPORTED_MODULE_3__["AttendanceReportDetailComponent"] }];
var AttendanceReportDetailRoutingModule = /** @class */ (function () {
    function AttendanceReportDetailRoutingModule() {
    }
    AttendanceReportDetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AttendanceReportDetailRoutingModule);
    return AttendanceReportDetailRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/pages/students/attendance-report-detail/attendance-report-detail.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/pages/students/attendance-report-detail/attendance-report-detail.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "canvas {\n  width: 100%;\n  max-width: 683px; }\n\n.mat-header-cell {\n  color: #000 !important;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzLm9udW9yYWgvRG9jdW1lbnRzL2NiYy9TY2hvb2xEYXNoYm9hcmQvc3JjL2FwcC92aWV3cy9wYWdlcy9zdHVkZW50cy9hdHRlbmRhbmNlLXJlcG9ydC1kZXRhaWwvYXR0ZW5kYW5jZS1yZXBvcnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3N0dWRlbnRzL2F0dGVuZGFuY2UtcmVwb3J0LWRldGFpbC9hdHRlbmRhbmNlLXJlcG9ydC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2ODNweDtcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/students/attendance-report-detail/attendance-report-detail.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/pages/students/attendance-report-detail/attendance-report-detail.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AttendanceReportDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceReportDetailComponent", function() { return AttendanceReportDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _students_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../students.service */ "./src/app/views/pages/students/students.service.ts");
/* harmony import */ var app_core_base_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/app-service/app-service.service */ "./src/app/views/services/app-service/app-service.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_10__);









// import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';


var AttendanceReportDetailComponent = /** @class */ (function () {
    function AttendanceReportDetailComponent(location, route, studentService, changeDetectRef, layoutConfigService, appService // config: NgbDropdownConfig
    ) {
        this.location = location;
        this.route = route;
        this.studentService = studentService;
        this.changeDetectRef = changeDetectRef;
        this.layoutConfigService = layoutConfigService;
        this.appService = appService;
        this.ELEMENT_DATA = [];
        this.displayedColumns = [
            'class',
            'fullName',
            'male',
            'female',
            'attendanceDate',
            'status',
        ];
        this.type = 'doughnut';
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.ELEMENT_DATA);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.loading = false;
        this.editMode = false;
        this.totalFemalePresent = 0;
        this.totalMalePresent = 0;
        this.totalFemaleAbsent = 0;
        this.totalMaleAbsent = 0;
        this.color = Chart.helpers.color;
        this.lga = '';
        this.state = '';
        // config.autoClose = true;
    }
    AttendanceReportDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var attendanceQueryParams = {
                schools: params['schools'] ? params['schools'].split('**') : [],
                lga: params['lga'] ? params['lga'].split('**') : [],
                state: params['states'] ? params['states'].split('**') : [],
                startDate: params['dateRange']
                    ? params['dateRange'].split('to')[0].trim()
                    : '',
                class: params['class'] ? params['class'].split('**') : [],
                endDate: params['dateRange']
                    ? params['dateRange'].split('to')[1].trim()
                    : '',
                attendanceDate: params['attendanceDate'],
            };
            _this.school = attendanceQueryParams.schools[0];
            _this.state = attendanceQueryParams.state[0];
            _this.lga = attendanceQueryParams.lga[0];
            _this.getAttendanceDetails(attendanceQueryParams);
        });
    };
    AttendanceReportDetailComponent.prototype.onBackArrowClick = function (event) {
        this.location.back();
    };
    AttendanceReportDetailComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    AttendanceReportDetailComponent.prototype.exportPDF = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_9__["default"]({
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
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_10___default()(doc, {
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
    AttendanceReportDetailComponent.prototype.getAttendanceDetails = function (params) {
        var _this = this;
        if (params.state.length == 0 &&
            params.schools.length === 0 &&
            params.lga.length === 0 &&
            (!params.attendanceDate || params.attendanceDate.trim() === '')) {
            return;
        }
        this.loading = true;
        this.studentService.getAttendanceDetail(params).subscribe(function (data) {
            _this.loading = false;
            //get total male and femle present;
            data.forEach(function (item) {
                if (item.female) {
                    if (item.status.toLowerCase().trim() === 'present') {
                        _this.totalFemalePresent += 1;
                    }
                    else {
                        _this.totalFemaleAbsent += 1;
                    }
                }
                else if (item.male) {
                    if (item.status.toLowerCase().trim() === 'present') {
                        _this.totalMalePresent += 1;
                    }
                    else {
                        _this.totalMaleAbsent += 1;
                    }
                }
            });
            _this.totalPresent = _this.totalMalePresent + _this.totalFemalePresent;
            _this.totalAbsent = _this.totalFemaleAbsent + _this.totalMaleAbsent;
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
                        data: [_this.totalMalePresent, _this.totalFemalePresent],
                    },
                ],
            };
            _this.initChart();
            _this.dataSource.data = data;
            _this.changeDetectRef.detectChanges();
        }, function (error) {
            _this.loading = false;
        });
    };
    AttendanceReportDetailComponent.prototype.initChart = function () {
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
    AttendanceReportDetailComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _students_service__WEBPACK_IMPORTED_MODULE_6__["StudentsService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: app_core_base_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutConfigService"] },
        { type: _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_8__["AppServiceService"] // config: NgbDropdownConfig
         }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AttendanceReportDetailComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AttendanceReportDetailComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AttendanceReportDetailComponent.prototype, "chart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], AttendanceReportDetailComponent.prototype, "paginator", void 0);
    AttendanceReportDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-attendance-report-detail',
            template: __webpack_require__(/*! raw-loader!./attendance-report-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/students/attendance-report-detail/attendance-report-detail.component.html"),
            styles: [__webpack_require__(/*! ./attendance-report-detail.component.scss */ "./src/app/views/pages/students/attendance-report-detail/attendance-report-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _students_service__WEBPACK_IMPORTED_MODULE_6__["StudentsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            app_core_base_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutConfigService"],
            _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_8__["AppServiceService"] // config: NgbDropdownConfig
        ])
    ], AttendanceReportDetailComponent);
    return AttendanceReportDetailComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/students/attendance-report-detail/attendance-report-detail.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/students/attendance-report-detail/attendance-report-detail.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: AttendanceReportDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceReportDetailModule", function() { return AttendanceReportDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _attendance_report_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attendance-report-detail-routing.module */ "./src/app/views/pages/students/attendance-report-detail/attendance-report-detail-routing.module.ts");
/* harmony import */ var _attendance_report_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attendance-report-detail.component */ "./src/app/views/pages/students/attendance-report-detail/attendance-report-detail.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _partials_content_general_material_preview_material_preview_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../partials/content/general/material-preview/material-preview.module */ "./src/app/views/partials/content/general/material-preview/material-preview.module.ts");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/app-service/app-service.service */ "./src/app/views/services/app-service/app-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _schools_schools_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../schools/schools.service */ "./src/app/views/pages/schools/schools.service.ts");
















// import {MatDatepickerModule} from '@angular/material/datepicker';

// import { ChartsModule } from 'ng2-charts';
var AttendanceReportDetailModule = /** @class */ (function () {
    function AttendanceReportDetailModule() {
    }
    AttendanceReportDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_attendance_report_detail_component__WEBPACK_IMPORTED_MODULE_4__["AttendanceReportDetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _attendance_report_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["AttendanceReportDetailRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_6__["PartialsModule"],
                // AgmCoreModule.forRoot({
                //   apiKey: 'AIzaSyC8aIKLtCcXqEHG_Gfm35Iahplw3HoKzLM',
                // }),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_6__["PartialsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_6__["PartialsModule"],
                _partials_content_general_material_preview_material_preview_module__WEBPACK_IMPORTED_MODULE_8__["MaterialPreviewModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ],
            providers: [_schools_schools_service__WEBPACK_IMPORTED_MODULE_16__["SchoolsService"], _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_12__["AppServiceService"]],
        })
    ], AttendanceReportDetailModule);
    return AttendanceReportDetailModule;
}());



/***/ })

}]);
//# sourceMappingURL=attendance-report-detail-attendance-report-detail-module.js.map