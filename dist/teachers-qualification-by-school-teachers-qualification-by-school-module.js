(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["teachers-qualification-by-school-teachers-qualification-by-school-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/teachers/teachers-qualification-by-school/teachers-qualification-by-school.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/teachers/teachers-qualification-by-school/teachers-qualification-by-school.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-2\">\n  <div class=\"col-xl-12\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n      <kt-portlet-header\n        [title]=\"''\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <kt-context-menu></kt-context-menu>\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <mat-table #table [dataSource]=\"dataSource\">\n          <!-- Checkbox Column -->\n          <ng-container matColumnDef=\"select\">\n            <mat-header-cell *matHeaderCellDef>\n              <mat-checkbox\n                (change)=\"$event ? masterToggle() : null\"\n                [checked]=\"selection.hasValue() && isAllSelected()\"\n                [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n              >\n              </mat-checkbox>\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              <mat-checkbox\n                (click)=\"$event.stopPropagation()\"\n                (change)=\"$event ? selection.toggle(row) : null\"\n                [checked]=\"selection.isSelected(row)\"\n              >\n              </mat-checkbox>\n            </mat-cell>\n          </ng-container>\n\n          <!-- Position Column -->\n          <ng-container matColumnDef=\"state\">\n            <mat-header-cell *matHeaderCellDef> State </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{ element.state }}\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"schoolName\">\n            <mat-header-cell *matHeaderCellDef> School </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{ element.schoolName }}\n            </mat-cell>\n          </ng-container>\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"qualification\">\n            <mat-header-cell *matHeaderCellDef> Qualification </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{ element.qualification }}\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"count\">\n            <mat-header-cell *matHeaderCellDef> Total Count </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{ element.count }} </mat-cell>\n          </ng-container>\n          <!-- Weight Column -->\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row\n            *matRowDef=\"let row; columns: displayedColumns\"\n            (click)=\"selection.toggle(row)\"\n          >\n          </mat-row>\n        </mat-table>\n        <mat-paginator\n          [pageSizeOptions]=\"[5, 10, 20]\"\n          showFirstLastButtons\n        ></mat-paginator>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n  <!-- <div class=\"col-xl-4\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <kt-portlet>\n      <kt-portlet-header\n        [title]=\"'Total Count'\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <kt-context-menu></kt-context-menu>\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n\n        <ng-container>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-xl-12\">\n                <div class=\"d-flex justify-content-center align-items-center\">\n                  <h1>{{ totalCount }}</h1>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/views/pages/teachers/teachers-qualification-by-school/teachers-qualification-by-school-routing.module.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/views/pages/teachers/teachers-qualification-by-school/teachers-qualification-by-school-routing.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: TeachersQualificationBySchoolRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersQualificationBySchoolRoutingModule", function() { return TeachersQualificationBySchoolRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _teachers_qualification_by_school_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teachers-qualification-by-school.component */ "./src/app/views/pages/teachers/teachers-qualification-by-school/teachers-qualification-by-school.component.ts");




var routes = [{ path: '', component: _teachers_qualification_by_school_component__WEBPACK_IMPORTED_MODULE_3__["TeachersQualificationBySchoolComponent"] }];
var TeachersQualificationBySchoolRoutingModule = /** @class */ (function () {
    function TeachersQualificationBySchoolRoutingModule() {
    }
    TeachersQualificationBySchoolRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TeachersQualificationBySchoolRoutingModule);
    return TeachersQualificationBySchoolRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/pages/teachers/teachers-qualification-by-school/teachers-qualification-by-school.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/views/pages/teachers/teachers-qualification-by-school/teachers-qualification-by-school.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3RlYWNoZXJzL3RlYWNoZXJzLXF1YWxpZmljYXRpb24tYnktc2Nob29sL3RlYWNoZXJzLXF1YWxpZmljYXRpb24tYnktc2Nob29sLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/teachers/teachers-qualification-by-school/teachers-qualification-by-school.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/views/pages/teachers/teachers-qualification-by-school/teachers-qualification-by-school.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: TeachersQualificationBySchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersQualificationBySchoolComponent", function() { return TeachersQualificationBySchoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _teachers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../teachers.service */ "./src/app/views/pages/teachers/teachers.service.ts");





var TeachersQualificationBySchoolComponent = /** @class */ (function () {
    function TeachersQualificationBySchoolComponent(teacherService, changeDetectRef) {
        this.teacherService = teacherService;
        this.changeDetectRef = changeDetectRef;
        this.ELEMENT_DATA = [];
        this.displayedColumns = ['state', 'schoolName', 'qualification', 'count'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ELEMENT_DATA);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.loading = false;
        this.editMode = false;
        this.title = 'My first AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.totalCount = 0;
    }
    TeachersQualificationBySchoolComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    TeachersQualificationBySchoolComponent.prototype.ngOnInit = function () {
        this.getReport();
    };
    TeachersQualificationBySchoolComponent.prototype.getReport = function () {
        var _this = this;
        this.loading = true;
        this.teacherService.getTeachersQualificationBySchool().subscribe(function (data) {
            _this.loading = false;
            _this.dataSource.data = data;
            _this.changeDetectRef.detectChanges();
            _this.totalCount = data.reduce(function (preVal, currVal) {
                return (preVal += parseInt(currVal.count));
            }, 0);
        }, function (error) {
            _this.loading = false;
        });
    };
    TeachersQualificationBySchoolComponent.ctorParameters = function () { return [
        { type: _teachers_service__WEBPACK_IMPORTED_MODULE_4__["TeachersService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], TeachersQualificationBySchoolComponent.prototype, "paginator", void 0);
    TeachersQualificationBySchoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-teachers-qualification-by-school',
            template: __webpack_require__(/*! raw-loader!./teachers-qualification-by-school.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/teachers/teachers-qualification-by-school/teachers-qualification-by-school.component.html"),
            styles: [__webpack_require__(/*! ./teachers-qualification-by-school.component.scss */ "./src/app/views/pages/teachers/teachers-qualification-by-school/teachers-qualification-by-school.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_teachers_service__WEBPACK_IMPORTED_MODULE_4__["TeachersService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], TeachersQualificationBySchoolComponent);
    return TeachersQualificationBySchoolComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/teachers/teachers-qualification-by-school/teachers-qualification-by-school.module.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/views/pages/teachers/teachers-qualification-by-school/teachers-qualification-by-school.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: TeachersQualificationBySchoolModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersQualificationBySchoolModule", function() { return TeachersQualificationBySchoolModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _teachers_qualification_by_school_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teachers-qualification-by-school-routing.module */ "./src/app/views/pages/teachers/teachers-qualification-by-school/teachers-qualification-by-school-routing.module.ts");
/* harmony import */ var _teachers_qualification_by_school_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teachers-qualification-by-school.component */ "./src/app/views/pages/teachers/teachers-qualification-by-school/teachers-qualification-by-school.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _partials_content_general_material_preview_material_preview_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../partials/content/general/material-preview/material-preview.module */ "./src/app/views/partials/content/general/material-preview/material-preview.module.ts");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");













// import { DatepickerComponent } from './formcontrols/datepicker/datepicker.component';

var TeachersQualificationBySchoolModule = /** @class */ (function () {
    function TeachersQualificationBySchoolModule() {
    }
    TeachersQualificationBySchoolModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_teachers_qualification_by_school_component__WEBPACK_IMPORTED_MODULE_4__["TeachersQualificationBySchoolComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _teachers_qualification_by_school_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeachersQualificationBySchoolRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_6__["PartialsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                _partials_content_general_material_preview_material_preview_module__WEBPACK_IMPORTED_MODULE_9__["MaterialPreviewModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"],
            ],
        })
    ], TeachersQualificationBySchoolModule);
    return TeachersQualificationBySchoolModule;
}());



/***/ })

}]);
//# sourceMappingURL=teachers-qualification-by-school-teachers-qualification-by-school-module.js.map