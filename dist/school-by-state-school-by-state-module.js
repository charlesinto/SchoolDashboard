(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["school-by-state-school-by-state-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/schools/school-by-state/school-by-state.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/schools/school-by-state/school-by-state.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-8\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n      <kt-portlet-header\n        [title]=\"''\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <kt-context-menu></kt-context-menu>\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <mat-table #table [dataSource]=\"dataSource\">\n          <!-- Checkbox Column -->\n          <ng-container matColumnDef=\"select\">\n            <mat-header-cell *matHeaderCellDef>\n              <mat-checkbox\n                (change)=\"$event ? masterToggle() : null\"\n                [checked]=\"selection.hasValue() && isAllSelected()\"\n                [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n              >\n              </mat-checkbox>\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              <mat-checkbox\n                (click)=\"$event.stopPropagation()\"\n                (change)=\"$event ? selection.toggle(row) : null\"\n                [checked]=\"selection.isSelected(row)\"\n              >\n              </mat-checkbox>\n            </mat-cell>\n          </ng-container>\n\n          <!-- Position Column -->\n          <ng-container matColumnDef=\"state\">\n            <mat-header-cell *matHeaderCellDef> State </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{ element.state }}\n            </mat-cell>\n          </ng-container>\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"count\">\n            <mat-header-cell *matHeaderCellDef>\n              Total Number of Schools\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{ element.count }} </mat-cell>\n          </ng-container>\n          <!-- Weight Column -->\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row\n            *matRowDef=\"let row; columns: displayedColumns\"\n            (click)=\"selection.toggle(row)\"\n          >\n          </mat-row>\n        </mat-table>\n        <mat-paginator\n          [pageSizeOptions]=\"[5, 10, 20]\"\n          showFirstLastButtons\n        ></mat-paginator>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n  <div class=\"col-xl-4\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <kt-portlet>\n      <kt-portlet-header\n        [title]=\"'Total Number of Schools'\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <kt-context-menu></kt-context-menu>\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <!-- Checkbox Column -->\n        <ng-container>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-xl-12\">\n                <div class=\"d-flex justify-content-center align-items-center\">\n                  <h1>{{ totalCount }}</h1>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/pages/schools/school-by-state/school-by-state-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/schools/school-by-state/school-by-state-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: SchoolByStateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolByStateRoutingModule", function() { return SchoolByStateRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _school_by_state_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./school-by-state.component */ "./src/app/views/pages/schools/school-by-state/school-by-state.component.ts");




var routes = [{ path: '', component: _school_by_state_component__WEBPACK_IMPORTED_MODULE_3__["SchoolByStateComponent"] }];
var SchoolByStateRoutingModule = /** @class */ (function () {
    function SchoolByStateRoutingModule() {
    }
    SchoolByStateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SchoolByStateRoutingModule);
    return SchoolByStateRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/pages/schools/school-by-state/school-by-state.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/schools/school-by-state/school-by-state.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-header-cell {\n  color: #000 !important;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzb251b3JhaC9Eb2N1bWVudHMvY2JjL3NjaG9vbERhc2hib2FyZC9zcmMvYXBwL3ZpZXdzL3BhZ2VzL3NjaG9vbHMvc2Nob29sLWJ5LXN0YXRlL3NjaG9vbC1ieS1zdGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvcGFnZXMvc2Nob29scy9zY2hvb2wtYnktc3RhdGUvc2Nob29sLWJ5LXN0YXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvc2Nob29scy9zY2hvb2wtYnktc3RhdGUvc2Nob29sLWJ5LXN0YXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1oZWFkZXItY2VsbCB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIiwiLm1hdC1oZWFkZXItY2VsbCB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/schools/school-by-state/school-by-state.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/schools/school-by-state/school-by-state.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SchoolByStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolByStateComponent", function() { return SchoolByStateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _schools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../schools.service */ "./src/app/views/pages/schools/schools.service.ts");
/* harmony import */ var _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/app-service/app-service.service */ "./src/app/views/services/app-service/app-service.service.ts");






var SchoolByStateComponent = /** @class */ (function () {
    function SchoolByStateComponent(schoolService, changeDetectRef, appService) {
        this.schoolService = schoolService;
        this.changeDetectRef = changeDetectRef;
        this.appService = appService;
        this.ELEMENT_DATA = [];
        this.displayedColumns = ['state', 'count'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ELEMENT_DATA);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.loading = false;
        this.editMode = false;
        this.title = 'My first AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.totalCount = 0;
        this.state_accces = '';
    }
    SchoolByStateComponent.prototype.ngOnInit = function () {
        this.getSchoolBYSTATE();
        this.getUserStateAccess();
    };
    SchoolByStateComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    SchoolByStateComponent.prototype.getUserStateAccess = function () {
        this.state_accces = this.appService.getUserStateAccess();
    };
    SchoolByStateComponent.prototype.getSchoolBYSTATE = function () {
        var _this = this;
        this.loading = true;
        this.schoolService.getSchoolByState().subscribe(function (data) {
            _this.loading = false;
            if (_this.state_accces.trim().toLowerCase() === 'all') {
                data.sort(function (item1, item2) {
                    if (item1.state.split(' ')[0].toLowerCase() <
                        item2.state.split(' ')[0].toLowerCase()) {
                        return -1;
                    }
                    else if (item1.state.split(' ')[0].toLowerCase() >
                        item2.state.split(' ')[0].toLowerCase()) {
                        return 1;
                    }
                    return 0;
                });
            }
            _this.dataSource.data = data;
            _this.ELEMENT_DATA = data;
            _this.totalCount = _this.ELEMENT_DATA.reduce(function (accumlator, currentValue) {
                return parseInt(accumlator) + parseInt(currentValue.count);
            }, 0);
            _this.changeDetectRef.detectChanges();
        }, function (error) {
            console.log(error);
            _this.loading = false;
        });
    };
    SchoolByStateComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    SchoolByStateComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    SchoolByStateComponent.prototype.onRowElementClick = function (event, element) {
        console.log(element);
        this.selection.clear();
        this.school = element;
        this.editMode = true;
    };
    SchoolByStateComponent.prototype.closeDetailPage = function () {
        this.selection.clear();
        this.editMode = false;
    };
    SchoolByStateComponent.ctorParameters = function () { return [
        { type: _schools_service__WEBPACK_IMPORTED_MODULE_4__["SchoolsService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_5__["AppServiceService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], SchoolByStateComponent.prototype, "paginator", void 0);
    SchoolByStateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-school-by-state',
            template: __webpack_require__(/*! raw-loader!./school-by-state.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/schools/school-by-state/school-by-state.component.html"),
            styles: [__webpack_require__(/*! ./school-by-state.component.scss */ "./src/app/views/pages/schools/school-by-state/school-by-state.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_schools_service__WEBPACK_IMPORTED_MODULE_4__["SchoolsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_5__["AppServiceService"]])
    ], SchoolByStateComponent);
    return SchoolByStateComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/schools/school-by-state/school-by-state.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/schools/school-by-state/school-by-state.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SchoolByStateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolByStateModule", function() { return SchoolByStateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _school_by_state_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./school-by-state-routing.module */ "./src/app/views/pages/schools/school-by-state/school-by-state-routing.module.ts");
/* harmony import */ var _school_by_state_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./school-by-state.component */ "./src/app/views/pages/schools/school-by-state/school-by-state.component.ts");
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
var SchoolByStateModule = /** @class */ (function () {
    function SchoolByStateModule() {
    }
    SchoolByStateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_school_by_state_component__WEBPACK_IMPORTED_MODULE_4__["SchoolByStateComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _school_by_state_routing_module__WEBPACK_IMPORTED_MODULE_3__["SchoolByStateRoutingModule"],
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
    ], SchoolByStateModule);
    return SchoolByStateModule;
}());



/***/ })

}]);
//# sourceMappingURL=school-by-state-school-by-state-module.js.map