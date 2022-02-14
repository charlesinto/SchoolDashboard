(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["teacher-report-detail-teacher-report-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/teachers/teacher-report-detail/teacher-report-detail.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/teachers/teacher-report-detail/teacher-report-detail.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-2\">\n  <div class=\"col-xl-4\">\n    <kt-portlet>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <ng-container ktPortletTools>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <button\n                  mat-icon-button\n                  color=\"primary\"\n                  aria-label=\"Example icon button with a home icon\"\n                  (click)=\"onBackArrowClick($event)\"\n                >\n                  <mat-icon>arrow_back</mat-icon>\n                  Back\n                </button>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n  <div class=\"col-xl-8\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <kt-portlet>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <!-- Checkbox Column -->\n        <ng-container class=\"py-3\">\n          <div class=\"container py-3\">\n            <div class=\"row\">\n              <div class=\"col-xl-12\">\n                <div class=\"d-flex justify-content-center align-items-center\">\n                  <!-- <kt-widget14></kt-widget14> -->\n                  <div class=\"kt-widget12__chart\" style=\"height: 250px\">\n                    <canvas\n                      #chart\n                      id=\"kt_chart_order_statistics\"\n                      height=\"312\"\n                    ></canvas>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row mb-1\">\n              <div class=\"col-xl-12\">\n                <h5 class=\"text-black text-center\">{{ school }}</h5>\n              </div>\n            </div>\n            <div class=\"row mb-1\">\n              <div class=\"col-xl-12\">\n                <h5 *ngIf=\"lga && state\" class=\"text-black text-center\">\n                  {{ lga }}, {{ state }}\n                </h5>\n              </div>\n            </div>\n            <div class=\"row mb-1\">\n              <div class=\"col-xl-12\">\n                <h4>Total Present</h4>\n                <h5 class=\"text-success\">{{ totalPresent }}</h5>\n              </div>\n            </div>\n            <div class=\"row mb-1\">\n              <div class=\"col-xl-12\">\n                <h4>Total Absent</h4>\n                <h5 class=\"text-danger\">{{ totalAbsent }}</h5>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xl-12\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n      <kt-portlet-header\n        [title]=\"''\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <!-- <kt-context-menu></kt-context-menu> -->\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"d-flex justify-content-end\">\n              <div class=\"px-3\">\n                <button\n                  mat-raised-button\n                  color=\"primary\"\n                  (click)=\"exportPDF()\"\n                  aria-label=\"Example icon button with a home icon\"\n                >\n                  <mat-icon>filter_list</mat-icon>\n                  Export PDF\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <mat-table #table [dataSource]=\"dataSource\">\n          <!-- Checkbox Column -->\n          <ng-container matColumnDef=\"select\">\n            <mat-header-cell *matHeaderCellDef>\n              <mat-checkbox\n                (change)=\"$event ? masterToggle() : null\"\n                [checked]=\"selection.hasValue() && isAllSelected()\"\n                [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n              >\n              </mat-checkbox>\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              <mat-checkbox\n                (click)=\"$event.stopPropagation()\"\n                (change)=\"$event ? selection.toggle(row) : null\"\n                [checked]=\"selection.isSelected(row)\"\n              >\n              </mat-checkbox>\n            </mat-cell>\n          </ng-container>\n\n          <!-- Position Column -->\n\n          <!-- Name Column -->\n\n          <ng-container matColumnDef=\"oracleNumber\">\n            <mat-header-cell *matHeaderCellDef> Oracle Number </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{ element.oracleNumber }}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"fullName\">\n            <mat-header-cell *matHeaderCellDef>\n              Teacher Fullname\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{ element.fullName }}\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"attendanceDate\">\n            <mat-header-cell *matHeaderCellDef>\n              Attendance Date\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{ element.attendanceDate }}\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"status\">\n            <mat-header-cell *matHeaderCellDef>\n              Attendance Status\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <span\n                [ngClass]=\"{\n                  'text-success': element.status === 'Present',\n                  'text-danger': element.status !== 'Present'\n                }\"\n                aria-label=\"Example icon button with a home icon\"\n              >\n                {{ element.status }}\n              </span>\n            </mat-cell>\n          </ng-container>\n\n          <!-- Weight Column -->\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row\n            *matRowDef=\"let row; columns: displayedColumns\"\n            (click)=\"selection.toggle(row)\"\n          >\n          </mat-row>\n        </mat-table>\n        <mat-paginator\n          [pageSizeOptions]=\"[5, 10, 20]\"\n          showFirstLastButtons\n        ></mat-paginator>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/pages/teachers/teacher-report-detail/teacher-report-detail-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/teachers/teacher-report-detail/teacher-report-detail-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: TeacherReportDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherReportDetailRoutingModule", function() { return TeacherReportDetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _teacher_report_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teacher-report-detail.component */ "./src/app/views/pages/teachers/teacher-report-detail/teacher-report-detail.component.ts");




var routes = [{ path: '', component: _teacher_report_detail_component__WEBPACK_IMPORTED_MODULE_3__["TeacherReportDetailComponent"] }];
var TeacherReportDetailRoutingModule = /** @class */ (function () {
    function TeacherReportDetailRoutingModule() {
    }
    TeacherReportDetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TeacherReportDetailRoutingModule);
    return TeacherReportDetailRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/pages/teachers/teacher-report-detail/teacher-report-detail.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/teachers/teacher-report-detail/teacher-report-detail.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-header-cell {\n  color: #000 !important;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzLm9udW9yYWgvRG9jdW1lbnRzL2NiYy9TY2hvb2xEYXNoYm9hcmQvc3JjL2FwcC92aWV3cy9wYWdlcy90ZWFjaGVycy90ZWFjaGVyLXJlcG9ydC1kZXRhaWwvdGVhY2hlci1yZXBvcnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvdGVhY2hlcnMvdGVhY2hlci1yZXBvcnQtZGV0YWlsL3RlYWNoZXItcmVwb3J0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtaGVhZGVyLWNlbGwge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/teachers/teacher-report-detail/teacher-report-detail.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/pages/teachers/teacher-report-detail/teacher-report-detail.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TeacherReportDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherReportDetailComponent", function() { return TeacherReportDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_core_base_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _teachers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../teachers.service */ "./src/app/views/pages/teachers/teachers.service.ts");
/* harmony import */ var _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/app-service/app-service.service */ "./src/app/views/services/app-service/app-service.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_10__);











var TeacherReportDetailComponent = /** @class */ (function () {
    function TeacherReportDetailComponent(location, layoutConfigService, route, teacherService, changeRef, appService) {
        this.location = location;
        this.layoutConfigService = layoutConfigService;
        this.route = route;
        this.teacherService = teacherService;
        this.changeRef = changeRef;
        this.appService = appService;
        this.ELEMENT_DATA = [];
        this.displayedColumns = ['oracleNumber', 'fullName', 'attendanceDate', 'status'];
        this.type = 'doughnut';
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ELEMENT_DATA);
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
    }
    TeacherReportDetailComponent.prototype.ngOnInit = function () {
        this.subscribeToRouteQueryChange();
    };
    TeacherReportDetailComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    TeacherReportDetailComponent.prototype.subscribeToRouteQueryChange = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var query = {
                school: params['school'],
                state: params['state'],
                lga: params['lga'],
                attendanceDate: params['attendanceDate'],
            };
            _this.school = query.school;
            _this.lga = query.lga;
            _this.state = query.state;
            _this.queryAttendanceReportDetail(query);
        });
    };
    TeacherReportDetailComponent.prototype.exportPDF = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_9__["default"]({
            orientation: 'landscape',
        });
        var columns = [
            {
                header: 'Oracle Number',
                dataKey: 'oracleNumber',
            },
            {
                header: 'Full Name',
                dataKey: 'fullName',
            },
            {
                header: 'Attendance Date',
                dataKey: 'attendanceDate',
            },
            {
                header: 'Status',
                dataKey: 'status',
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
                    doc.text('Teachers Attendance', dataArg.settings.margin.left, 10);
                }
                else {
                    doc.text("Teachers Attendance", dataArg.settings.margin.left, 10);
                }
            },
        });
        doc.save('teachers_attendance.pdf');
        // console.log('called in exit');
    };
    TeacherReportDetailComponent.prototype.queryAttendanceReportDetail = function (params) {
        var _this = this;
        if (((!params.school || params.school.trim() === '') &&
            (!params.lga || params.lga.trim() === '') &&
            (!params.state || params.state === '')) ||
            params.attendanceDate.trim() === '')
            return;
        console.log('called here o');
        this.loading = true;
        this.teacherService.getTeacherAttendanceReportDetail(params).subscribe(function (data) {
            _this.loading = false;
            _this.dataSource.data = data;
            _this.totalPresent = 0;
            _this.totalAbsent = 0;
            data.forEach(function (item) {
                if (item.status.toLowerCase() === 'present') {
                    _this.totalPresent += 1;
                }
                else {
                    _this.totalAbsent += 0;
                }
            });
            _this.data = {
                labels: ['Present', 'Absent'],
                datasets: [
                    {
                        fill: true,
                        // borderWidth: 0,
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
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
                        data: [_this.totalPresent, _this.totalAbsent],
                    },
                ],
            };
            _this.initChart();
            _this.changeRef.detectChanges();
        }, function (error) {
            _this.loading = false;
        });
    };
    TeacherReportDetailComponent.prototype.onBackArrowClick = function (event) {
        this.location.back();
    };
    TeacherReportDetailComponent.prototype.initChart = function () {
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
    TeacherReportDetailComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: app_core_base_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutConfigService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _teachers_service__WEBPACK_IMPORTED_MODULE_7__["TeachersService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_8__["AppServiceService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeacherReportDetailComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TeacherReportDetailComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TeacherReportDetailComponent.prototype, "chart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], TeacherReportDetailComponent.prototype, "paginator", void 0);
    TeacherReportDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-teacher-report-detail',
            template: __webpack_require__(/*! raw-loader!./teacher-report-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/teachers/teacher-report-detail/teacher-report-detail.component.html"),
            styles: [__webpack_require__(/*! ./teacher-report-detail.component.scss */ "./src/app/views/pages/teachers/teacher-report-detail/teacher-report-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            app_core_base_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _teachers_service__WEBPACK_IMPORTED_MODULE_7__["TeachersService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_8__["AppServiceService"]])
    ], TeacherReportDetailComponent);
    return TeacherReportDetailComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/teachers/teacher-report-detail/teacher-report-detail.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/teachers/teacher-report-detail/teacher-report-detail.module.ts ***!
  \********************************************************************************************/
/*! exports provided: TeacherReportDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherReportDetailModule", function() { return TeacherReportDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _teacher_report_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teacher-report-detail-routing.module */ "./src/app/views/pages/teachers/teacher-report-detail/teacher-report-detail-routing.module.ts");
/* harmony import */ var _teacher_report_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teacher-report-detail.component */ "./src/app/views/pages/teachers/teacher-report-detail/teacher-report-detail.component.ts");
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















var TeacherReportDetailModule = /** @class */ (function () {
    function TeacherReportDetailModule() {
    }
    TeacherReportDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_teacher_report_detail_component__WEBPACK_IMPORTED_MODULE_4__["TeacherReportDetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _teacher_report_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeacherReportDetailRoutingModule"],
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
    ], TeacherReportDetailModule);
    return TeacherReportDetailModule;
}());



/***/ })

}]);
//# sourceMappingURL=teacher-report-detail-teacher-report-detail-module.js.map