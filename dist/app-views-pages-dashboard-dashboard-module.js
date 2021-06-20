(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xl-12\">\r\n    <div class=\"row row-full-height\">\r\n      <div class=\"col-sm-12 col-md-12 col-lg-6\">\r\n        <kt-portlet\r\n          [class]=\"\r\n            'kt-portlet--height-fluid-half kt-portlet--border-bottom-brand'\r\n          \"\r\n        >\r\n          <mat-progress-bar\r\n            *ngIf=\"loading\"\r\n            mode=\"indeterminate\"\r\n          ></mat-progress-bar>\r\n          <kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\r\n            <kt-widget26\r\n              [value]=\"totalSchools\"\r\n              [desc]=\"'Total Schools'\"\r\n              [options]=\"chartOptions1\"\r\n            ></kt-widget26>\r\n          </kt-portlet-body>\r\n        </kt-portlet>\r\n\r\n        <div class=\"kt-space-20\"></div>\r\n        <mat-progress-bar\r\n          *ngIf=\"loading\"\r\n          mode=\"indeterminate\"\r\n        ></mat-progress-bar>\r\n        <kt-portlet\r\n          [class]=\"\r\n            'kt-portlet--height-fluid-half kt-portlet--border-bottom-brand'\r\n          \"\r\n        >\r\n          <kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\r\n            <kt-widget26\r\n              [value]=\"totalStudents\"\r\n              [desc]=\"'Total Students'\"\r\n              [options]=\"chartOptions2\"\r\n            ></kt-widget26>\r\n          </kt-portlet-body>\r\n        </kt-portlet>\r\n      </div>\r\n\r\n      <div class=\"col-sm-12 col-md-12 col-lg-6\">\r\n        <mat-progress-bar\r\n          *ngIf=\"loading\"\r\n          mode=\"indeterminate\"\r\n        ></mat-progress-bar>\r\n        <kt-portlet\r\n          [class]=\"\r\n            'kt-portlet--height-fluid-half kt-portlet--border-bottom-brand'\r\n          \"\r\n        >\r\n          <kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\r\n            <kt-widget26\r\n              [value]=\"totalTeachers\"\r\n              [desc]=\"'Total Teachers'\"\r\n              [options]=\"chartOptions3\"\r\n            ></kt-widget26>\r\n          </kt-portlet-body>\r\n        </kt-portlet>\r\n\r\n        <div class=\"kt-space-20\"></div>\r\n        <mat-progress-bar\r\n          *ngIf=\"loading\"\r\n          mode=\"indeterminate\"\r\n        ></mat-progress-bar>\r\n        <kt-portlet\r\n          [class]=\"\r\n            'kt-portlet--height-fluid-half kt-portlet--border-bottom-brand'\r\n          \"\r\n        >\r\n          <kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\r\n            <kt-widget26\r\n              [value]=\"enumerators\"\r\n              [desc]=\"'Total Enumerators'\"\r\n              [options]=\"chartOptions4\"\r\n            ></kt-widget26>\r\n          </kt-portlet-body>\r\n        </kt-portlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"col-xl-6\">\r\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n      <kt-portlet-header [title]=\"'Order Statistics'\">\r\n        <ng-container ktPortletTools>\r\n          <kt-context-menu2></kt-context-menu2>\r\n        </ng-container>\r\n      </kt-portlet-header>\r\n      <kt-portlet-body>\r\n        <kt-widget12></kt-widget12>\r\n      </kt-portlet-body>\r\n    </kt-portlet>\r\n  </div> -->\r\n</div>\r\n\r\n<div class=\"col-xl-12 my-4\">\r\n  <mat-progress-bar\r\n    *ngIf=\"loadingAttendanceReport\"\r\n    mode=\"indeterminate\"\r\n  ></mat-progress-bar>\r\n  <kt-portlet>\r\n    <kt-portlet-header\r\n      [title]=\"'Best Performing School in Attendance'\"\r\n      [class]=\"\r\n        'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\r\n      \"\r\n    >\r\n      <ng-container ktPortletTools>\r\n        <!-- <kt-context-menu></kt-context-menu> -->\r\n      </ng-container>\r\n    </kt-portlet-header>\r\n    <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n      <!-- Checkbox Column -->\r\n      <ng-container>\r\n        <div class=\"container\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xl-8\">\r\n                <form (ngSubmit)=\"filterData()\" class=\"pb-4\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                      <mat-form-field appearance=\"fill\">\r\n                        <mat-label>Choose a date</mat-label>\r\n                        <input\r\n                          [formControl]=\"dateRange\"\r\n                          matInput\r\n                          type=\"text\"\r\n                          name=\"daterange\"\r\n                          value=\"\"\r\n                        />\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-4 pl-5\">\r\n                      <button\r\n                        mat-raised-button\r\n                        color=\"primary\"\r\n                        style=\"width: 100%\"\r\n                        aria-label=\"Example icon button with a home icon\"\r\n                      >\r\n                        <mat-icon>filter_list</mat-icon>\r\n                        Filter\r\n                      </button>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                      <button\r\n                        mat-raised-button\r\n                        aria-label=\"Example icon button with a home icon\"\r\n                        style=\"width: 100%\"\r\n                        (click)=\"reset($event)\"\r\n                      >\r\n                        <mat-icon>filter_list</mat-icon>\r\n                        Reset\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-12\">\r\n              <div class=\"d-flex justify-content-center align-items-center\">\r\n                <!-- <kt-widget14></kt-widget14> -->\r\n                <div class=\"kt-widget12__chart\" style=\"height: 250px\">\r\n                  <canvas\r\n                    #chart\r\n                    id=\"kt_chart_order_statistics\"\r\n                    height=\"312\"\r\n                    style=\"width: 100% !important\"\r\n                  ></canvas>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row py-3\">\r\n            <div class=\"col-xl-12\">\r\n              <div class=\"text-center mb-2\">\r\n                <h4>{{ schoolname }}</h4>\r\n              </div>\r\n              <div class=\"text-center mb-2\">\r\n                <h4>{{ state }}</h4>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </kt-portlet-body>\r\n  </kt-portlet>\r\n</div>\r\n\r\n<!-- <kt-portlet>\r\n  <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n    <div class=\"row row-no-padding row-col-separator-xl\">\r\n      <div class=\"col-xl-4\">\r\n        <kt-widget1></kt-widget1>\r\n      </div>\r\n      <div class=\"col-xl-4\">\r\n        <kt-widget14\r\n          [title]=\"'Daily Sales'\"\r\n          [desc]=\"'Check out each collumn for more details'\"\r\n        ></kt-widget14>\r\n      </div>\r\n      <div class=\"col-xl-4\">\r\n        <kt-widget14\r\n          [title]=\"'Revenue Change'\"\r\n          [desc]=\"'Revenue change breakdown by cities'\"\r\n        ></kt-widget14>\r\n      </div>\r\n    </div>\r\n  </kt-portlet-body>\r\n</kt-portlet> -->\r\n\r\n<!-- <div class=\"row\">\r\n  <div class=\"col-xl-4\">\r\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n      <kt-portlet-header [title]=\"'Download Files'\">\r\n        <ng-container ktPortletTools>\r\n          <kt-context-menu2></kt-context-menu2>\r\n        </ng-container>\r\n      </kt-portlet-header>\r\n      <kt-portlet-body>\r\n        <kt-widget4 [data]=\"widget4_1\">\r\n          <ng-template #actionTemplate let-item=\"item\">\r\n            <div class=\"kt-widget4__tools\">\r\n              <a href=\"javascript:;\" class=\"btn btn-clean btn-icon btn-sm\">\r\n                <i\r\n                  class=\"flaticon2-download-symbol-of-down-arrow-in-a-rectangle\"\r\n                ></i>\r\n              </a>\r\n            </div>\r\n          </ng-template>\r\n        </kt-widget4>\r\n      </kt-portlet-body>\r\n    </kt-portlet>\r\n  </div>\r\n  <div class=\"col-xl-4\">\r\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n      <kt-portlet-header [title]=\"'New Users'\">\r\n        <ng-container ktPortletTools>\r\n          <kt-context-menu2></kt-context-menu2>\r\n        </ng-container>\r\n      </kt-portlet-header>\r\n      <kt-portlet-body>\r\n        <kt-widget4 [data]=\"widget4_2\">\r\n          <ng-template #actionTemplate let-item=\"item\">\r\n            <a\r\n              href=\"javascript:;\"\r\n              class=\"btn btn-sm\"\r\n              [ngClass]=\"item.buttonClass\"\r\n              >Follow</a\r\n            >\r\n          </ng-template>\r\n        </kt-widget4>\r\n      </kt-portlet-body>\r\n    </kt-portlet>\r\n  </div>\r\n  <div class=\"col-xl-4\">\r\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n      <kt-portlet-header [title]=\"'Latest Updates'\">\r\n        <ng-container ktPortletTools>\r\n          <kt-context-menu2></kt-context-menu2>\r\n        </ng-container>\r\n      </kt-portlet-header>\r\n      <kt-portlet-body>\r\n        <kt-widget4 [data]=\"widget4_3\">\r\n          <ng-template #actionTemplate let-item=\"item\">\r\n            <span class=\"kt-widget4__number\" [ngClass]=\"item.valueColor\">{{\r\n              item.value\r\n            }}</span>\r\n          </ng-template>\r\n        </kt-widget4>\r\n      </kt-portlet-body>\r\n    </kt-portlet>\r\n  </div>\r\n</div> -->\r\n\r\n<!-- <div class=\"row\">\r\n  <div class=\"col-xl-12\">\r\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n      <kt-portlet-header\r\n        [title]=\"'All Enumerators'\"\r\n        [class]=\"\r\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\r\n        \"\r\n      >\r\n        <ng-container ktPortletTools>\r\n          <kt-context-menu></kt-context-menu>\r\n        </ng-container>\r\n      </kt-portlet-header>\r\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n        <kt-data-table></kt-data-table>\r\n      </kt-portlet-body>\r\n    </kt-portlet>\r\n  </div>\r\n</div> -->\r\n\r\n<!-- <div class=\"row\">\r\n  <div class=\"col-xl-8\">\r\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n      <kt-portlet-header [title]=\"'Best Sellers'\">\r\n        <ng-container ktPortletTools>\r\n          <kt-context-menu2></kt-context-menu2>\r\n        </ng-container>\r\n      </kt-portlet-header>\r\n      <kt-portlet-body>\r\n        <kt-widget5></kt-widget5>\r\n      </kt-portlet-body>\r\n    </kt-portlet>\r\n  </div>\r\n  <div class=\"col-xl-4\">\r\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n      <kt-portlet-header [title]=\"'Recent Activities'\">\r\n        <ng-container ktPortletTools>\r\n          <kt-context-menu2></kt-context-menu2>\r\n        </ng-container>\r\n      </kt-portlet-header>\r\n      <kt-portlet-body>\r\n        <kt-timeline2></kt-timeline2>\r\n      </kt-portlet-body>\r\n    </kt-portlet>\r\n  </div>\r\n</div> -->\r\n\r\n<!-- <kt-portlet>\r\n  <kt-portlet-header>\r\n    <ng-container ktPortletTitle> </ng-container>\r\n    <ng-container ktPortletTools> </ng-container>\r\n  </kt-portlet-header>\r\n  <kt-portlet-body></kt-portlet-body>\r\n  <kt-portlet-footer></kt-portlet-footer>\r\n</kt-portlet> -->\r\n"

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none; }\n\n.kt-widget12__chart {\n  width: 100%;\n  max-width: 800px;\n  height: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzb251b3JhaC9Eb2N1bWVudHMvY2JjL3NjaG9vbERhc2hib2FyZC9zcmMvYXBwL3ZpZXdzL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHTSxhQUFhLEVBQUE7O0FBS25CO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIDo6bmctZGVlcCB7XHJcbiAgICBuZ2ItdGFic2V0ID4gLm5hdi10YWJzIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5rdC13aWRnZXQxMl9fY2hhcnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/views/pages/dashboard/dashboard.service.ts");

// Angular



// Lodash

// Services
// Widgets model


var $ = window['$'];
var moment = window['moment'];
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(layoutConfigService, dashboardService, router, route) {
        this.layoutConfigService = layoutConfigService;
        this.dashboardService = dashboardService;
        this.router = router;
        this.route = route;
        this.loading = false;
        this.loadingAttendanceReport = false;
        this.totalSchools = '0';
        this.totalStudents = '0';
        this.totalTeachers = '0';
        this.schoolname = '';
        this.state = '';
        this.enumerators = '0';
        this.data = {
            labels: ['Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday'],
            datasets: [
                {
                    label: 'Present',
                    borderColor: this.layoutConfigService.getConfig('colors.state.brand'),
                    fill: false,
                    borderWidth: 2,
                    backgroundColor: Chart.helpers
                        .color(this.layoutConfigService.getConfig('colors.state.brand'))
                        .alpha(0.6)
                        .rgbString(),
                    // borderColor: this.color(
                    //   this.layoutConfigService.getConfig('colors.state.brand')
                    // )
                    //   .alpha(0)
                    //   .rgbString(),
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
                    data: [0, 0, 0, 0, 0],
                },
                {
                    label: 'Absent',
                    fill: false,
                    borderWidth: 2,
                    backgroundColor: Chart.helpers
                        .color(this.layoutConfigService.getConfig('colors.state.brand'))
                        .alpha(0.2)
                        .rgbString(),
                    borderColor: this.layoutConfigService.getConfig('colors.state.danger'),
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
                    data: [0, 0, 0, 0, 0],
                },
            ],
        };
        this.type = 'line';
        this.color = Chart.helpers.color;
        this.dateRange = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chartOptions1 = {
            data: [10, 14, 18, 11, 9, 12, 14, 17, 18, 14],
            color: this.layoutConfigService.getConfig('colors.state.brand'),
            border: 3,
        };
        this.chartOptions2 = {
            data: [11, 12, 18, 13, 11, 12, 15, 13, 19, 15],
            color: this.layoutConfigService.getConfig('colors.state.danger'),
            border: 3,
        };
        this.chartOptions3 = {
            data: [12, 12, 18, 11, 15, 12, 13, 16, 11, 18],
            color: this.layoutConfigService.getConfig('colors.state.success'),
            border: 3,
        };
        this.chartOptions4 = {
            data: [11, 9, 13, 18, 13, 15, 14, 13, 18, 15],
            color: this.layoutConfigService.getConfig('colors.state.primary'),
            border: 3,
        };
        this.route.queryParams.subscribe(function (params) {
            var attendanceParams = {
                startDate: params['dateRange']
                    ? params['dateRange'].split('to')[0].trim()
                    : null,
                endDate: params['dateRange']
                    ? params['dateRange'].split('to')[1].trim()
                    : null,
            };
            if (attendanceParams.startDate && attendanceParams.endDate) {
                _this.initialDatePicker();
                _this.dateRange.setValue(attendanceParams.startDate + " to " + attendanceParams.endDate);
            }
            else {
                _this.initialDatePicker();
            }
            _this.getAttendanceReport(attendanceParams);
        });
        // @ts-ignore
        this.widget4_1 = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["shuffle"])([
            {
                pic: './assets/media/files/doc.svg',
                title: 'Metronic Documentation',
                url: 'https://keenthemes.com.my/metronic',
            },
            {
                pic: './assets/media/files/jpg.svg',
                title: 'Project Launch Evgent',
                url: 'https://keenthemes.com.my/metronic',
            },
            {
                pic: './assets/media/files/pdf.svg',
                title: 'Full Developer Manual For 4.7',
                url: 'https://keenthemes.com.my/metronic',
            },
            {
                pic: './assets/media/files/javascript.svg',
                title: 'Make JS Development',
                url: 'https://keenthemes.com.my/metronic',
            },
            {
                pic: './assets/media/files/zip.svg',
                title: 'Download Ziped version OF 5.0',
                url: 'https://keenthemes.com.my/metronic',
            },
            {
                pic: './assets/media/files/pdf.svg',
                title: 'Finance Report 2016/2017',
                url: 'https://keenthemes.com.my/metronic',
            },
        ]);
        // @ts-ignore
        this.widget4_2 = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["shuffle"])([
            {
                pic: './assets/media/users/100_4.jpg',
                username: 'Anna Strong',
                desc: 'Visual Designer,Google Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-brand',
            },
            {
                pic: './assets/media/users/100_14.jpg',
                username: 'Milano Esco',
                desc: 'Product Designer, Apple Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-warning',
            },
            {
                pic: './assets/media/users/100_11.jpg',
                username: 'Nick Bold',
                desc: 'Web Developer, Facebook Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-danger',
            },
            {
                pic: './assets/media/users/100_1.jpg',
                username: 'Wilter Delton',
                desc: 'Project Manager, Amazon Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-success',
            },
            {
                pic: './assets/media/users/100_5.jpg',
                username: 'Nick Stone',
                desc: 'Visual Designer, Github Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-dark',
            },
        ]);
        // @ts-ignore
        this.widget4_3 = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["shuffle"])([
            {
                icon: 'flaticon-pie-chart-1 kt-font-info',
                title: 'Metronic v6 has been arrived!',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$500',
                valueColor: 'kt-font-info',
            },
            {
                icon: 'flaticon-safe-shield-protection kt-font-success',
                title: 'Metronic community meet-up 2019 in Rome.',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$1260',
                valueColor: 'kt-font-success',
            },
            {
                icon: 'flaticon2-line-chart kt-font-danger',
                title: 'Metronic Angular 8 version will be landing soon..',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$1080',
                valueColor: 'kt-font-danger',
            },
            {
                icon: 'flaticon2-pie-chart-1 kt-font-primary',
                title: 'ale! Purchase Metronic at 70% off for limited time',
                url: 'https://keenthemes.com.my/metronic',
                value: '70% Off!',
                valueColor: 'kt-font-primary',
            },
            {
                icon: 'flaticon2-rocket kt-font-brand',
                title: 'Metronic VueJS version is in progress. Stay tuned!',
                url: 'https://keenthemes.com.my/metronic',
                value: '+134',
                valueColor: 'kt-font-brand',
            },
            {
                icon: 'flaticon2-notification kt-font-warning',
                title: 'Black Friday! Purchase Metronic at ever lowest 90% off for limited time',
                url: 'https://keenthemes.com.my/metronic',
                value: '70% Off!',
                valueColor: 'kt-font-warning',
            },
            {
                icon: 'flaticon2-file kt-font-focus',
                title: 'Metronic React version is in progress.',
                url: 'https://keenthemes.com.my/metronic',
                value: '+13%',
                valueColor: 'kt-font-focus',
            },
        ]);
        // @ts-ignore
        this.widget4_4 = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["shuffle"])([
            {
                pic: './assets/media/client-logos/logo5.png',
                title: 'Trump Themes',
                desc: 'Make Metronic Development',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$2500',
                valueColor: 'kt-font-brand',
            },
            {
                pic: './assets/media/client-logos/logo4.png',
                title: 'StarBucks',
                desc: 'Good Coffee & Snacks',
                url: 'https://keenthemes.com.my/metronic',
                value: '-$290',
                valueColor: 'kt-font-brand',
            },
            {
                pic: './assets/media/client-logos/logo3.png',
                title: 'Phyton',
                desc: 'A Programming Language',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$17',
                valueColor: 'kt-font-brand',
            },
            {
                pic: './assets/media/client-logos/logo2.png',
                title: 'GreenMakers',
                desc: 'Make Green Development',
                url: 'https://keenthemes.com.my/metronic',
                value: '-$2.50',
                valueColor: 'kt-font-brand',
            },
            {
                pic: './assets/media/client-logos/logo1.png',
                title: 'FlyThemes',
                desc: "A Let's Fly Fast Again Language",
                url: 'https://keenthemes.com.my/metronic',
                value: '+200',
                valueColor: 'kt-font-brand',
            },
        ]);
        this.getDashboardSettings();
        // this.getBestPerformingSchoolAttendance();
        this.initChart();
    };
    DashboardComponent.prototype.filterData = function () {
        console.log('called here');
        this.router.navigate(['dashboard'], {
            queryParams: {
                dateRange: this.dateRange.value ? this.dateRange.value : '',
            },
        });
    };
    DashboardComponent.prototype.reset = function (e) {
        e.preventDefault();
        this.router.navigate(['dashboard'], {
            queryParams: {
                reset: 'true',
            },
        });
    };
    DashboardComponent.prototype.getAttendanceReport = function (params) {
        this.getBestPerformingSchoolAttendance(params.startDate, params.endDate);
    };
    DashboardComponent.prototype.getBestPerformingSchoolAttendance = function (startDate, endDate) {
        var _this = this;
        this.loadingAttendanceReport = true;
        this.dashboardService.getBestPerformingSchool(startDate, endDate).subscribe(function (response) {
            _this.loadingAttendanceReport = false;
            var _a = response.data, absentDailyReport = _a.absentDailyReport, presentDailyReport = _a.presentDailyReport, schoolName = _a.schoolName, state = _a.state, schoolid = _a.schoolid;
            var Monday = 0, Tuesday = 0, Wednessday = 0, Thursday = 0, Friday = 0;
            var MondayAbsent = 0, TuesdayAbent = 0, WednessdayAbsent = 0, ThursdayAbsent = 0, FridayAbsent = 0;
            presentDailyReport.forEach(function (report) {
                if (report.day === 'Monday') {
                    Monday = report.count;
                }
                else if (report.day === 'Tuesday') {
                    Tuesday = report.count;
                }
                else if (report.day === 'Wednessday') {
                    Wednessday = report.count;
                }
                else if (report.day === 'Thursday') {
                    Thursday = report.count;
                }
                else if (report.day === 'Friday') {
                    Friday = report.count;
                }
            });
            absentDailyReport.forEach(function (report) {
                if (report.day === 'Monday') {
                    MondayAbsent = report.count;
                }
                else if (report.day === 'Tuesday') {
                    TuesdayAbent = report.count;
                }
                else if (report.day === 'Wednessday') {
                    WednessdayAbsent = report.count;
                }
                else if (report.day === 'Thursday') {
                    ThursdayAbsent = report.count;
                }
                else if (report.day === 'Friday') {
                    FridayAbsent = report.count;
                }
            });
            _this.chartUI.data = {
                labels: ['Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday'],
                datasets: [
                    {
                        label: 'Present',
                        borderColor: _this.layoutConfigService.getConfig('colors.state.brand'),
                        fill: false,
                        borderWidth: 2,
                        backgroundColor: _this.color(_this.layoutConfigService.getConfig('colors.state.brand'))
                            .alpha(0.6)
                            .rgbString(),
                        // borderColor: this.color(
                        //   this.layoutConfigService.getConfig('colors.state.brand')
                        // )
                        //   .alpha(0)
                        //   .rgbString(),
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
                        data: [Monday, Tuesday, Wednessday, Thursday, Friday],
                    },
                    {
                        label: 'Absent',
                        fill: false,
                        borderWidth: 2,
                        backgroundColor: _this.color(_this.layoutConfigService.getConfig('colors.state.brand'))
                            .alpha(0.2)
                            .rgbString(),
                        borderColor: _this.layoutConfigService.getConfig('colors.state.danger'),
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
                        data: [
                            MondayAbsent,
                            TuesdayAbent,
                            WednessdayAbsent,
                            ThursdayAbsent,
                            FridayAbsent,
                        ],
                    },
                ],
            };
            _this.chartUI.update();
            console.log(_this.chartUI);
            _this.schoolname = schoolName;
            _this.state = state;
        }, function (error) {
            _this.loadingAttendanceReport = false;
            console.log(error);
        });
    };
    DashboardComponent.prototype.getDashboardSettings = function () {
        var _this = this;
        this.loading = true;
        this.dashboardService.getDashboardSettings().subscribe(function (data) {
            console.log('344o: ', data);
            _this.loading = false;
            _this.totalSchools = data.schoolCount;
            _this.totalStudents = data.studentCount;
            _this.totalTeachers = data.teacherCount;
            _this.enumerators = data.enumerators;
        }, function (error) {
            console.log('344o: ', error);
            _this.loading = false;
            console.log(error);
        });
    };
    DashboardComponent.prototype.initialDatePicker = function () {
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
    DashboardComponent.prototype.initChart = function () {
        // For more information about the chartjs, visit this link
        // https://www.chartjs.org/docs/latest/getting-started/usage.html
        this.chartUI = new Chart(this.chart.nativeElement, {
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
    DashboardComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutConfigService"] },
        { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_6__["DashboardService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DashboardComponent.prototype, "chart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DashboardComponent.prototype, "type", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/views/pages/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutConfigService"],
            _dashboard_service__WEBPACK_IMPORTED_MODULE_6__["DashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.module.ts ***!
  \***********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");

// Angular



// Core Module






var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                    },
                ]),
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"],
            ],
            providers: [],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.service.ts":
/*!************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.service.ts ***!
  \************************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");





// const BASE_URL = 'https://school-census.herokuapp.com';
var BASE_URL = 'http://159.89.90.214:8000';
// const BASE_URL = 'http://localhost:8000';

var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.getDashboardSettings = function () {
        var user = JSON.parse(localStorage.getItem(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].authTokenKey));
        return this.http
            .get(BASE_URL + "/api/v1/dashboard?state_access=" + user.state_access)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var dataSet = {
                schoolCount: data['schoolCount'],
                teacherCount: data['teacherCount'],
                studentCount: data['studentCount'],
                enumerators: data['enumerators'],
            };
            return dataSet;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleHttpError));
    };
    DashboardService.prototype.handleHttpError = function (error) {
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    };
    DashboardService.prototype.getBestPerformingSchool = function (startDate, endDate) {
        var userToken = JSON.parse(localStorage.getItem(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].authTokenKey));
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        httpHeaders.set('Authorization', userToken.accessToken);
        return startDate && endDate
            ? this.http
                .get(BASE_URL + "/api/v1/dashboard/get-bestperforming-school-attendace?startDate=" + startDate + "&endDate=" + endDate, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    Authorization: userToken.accessToken,
                }),
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleHttpError))
            : this.http
                .get(BASE_URL + "/api/v1/dashboard/get-bestperforming-school-attendace", {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    Authorization: userToken.accessToken,
                }),
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleHttpError));
    };
    DashboardService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-dashboard-dashboard-module.js.map