(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["students-by-gender-students-by-gender-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/students/students-by-gender/students-by-gender.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/students/students-by-gender/students-by-gender.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-8\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n      <kt-portlet-header\n        [title]=\"''\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <kt-context-menu></kt-context-menu>\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <mat-table #table [dataSource]=\"dataSource\">\n          <!-- Checkbox Column -->\n          <ng-container matColumnDef=\"select\">\n            <mat-header-cell *matHeaderCellDef>\n              <mat-checkbox\n                (change)=\"$event ? masterToggle() : null\"\n                [checked]=\"selection.hasValue() && isAllSelected()\"\n                [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n              >\n              </mat-checkbox>\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              <mat-checkbox\n                (click)=\"$event.stopPropagation()\"\n                (change)=\"$event ? selection.toggle(row) : null\"\n                [checked]=\"selection.isSelected(row)\"\n              >\n              </mat-checkbox>\n            </mat-cell>\n          </ng-container>\n\n          <!-- Position Column -->\n          <ng-container matColumnDef=\"schoolName\">\n            <mat-header-cell *matHeaderCellDef> School </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{ element.schoolName }}\n            </mat-cell>\n          </ng-container>\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"studentClass\">\n            <mat-header-cell *matHeaderCellDef> Student Class </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{ element.studentClass }}\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"gender\">\n            <mat-header-cell *matHeaderCellDef> Gender </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{ element.gender }}\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"count\">\n            <mat-header-cell *matHeaderCellDef> Total Count </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{ element.count }} </mat-cell>\n          </ng-container>\n          <!-- Weight Column -->\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row\n            *matRowDef=\"let row; columns: displayedColumns\"\n            (click)=\"selection.toggle(row)\"\n          >\n          </mat-row>\n        </mat-table>\n        <mat-paginator\n          [pageSizeOptions]=\"[5, 10, 20]\"\n          showFirstLastButtons\n        ></mat-paginator>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n  <div class=\"col-xl-4\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <kt-portlet>\n      <kt-portlet-header\n        [title]=\"'Total Count'\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <kt-context-menu></kt-context-menu>\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <!-- Checkbox Column -->\n        <ng-container>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-xl-12\">\n                <div class=\"d-flex justify-content-center align-items-center\">\n                  <h1>{{ totalCount }}</h1>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/pages/students/students-by-gender/students-by-gender-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/students/students-by-gender/students-by-gender-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: StudentsByGenderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsByGenderRoutingModule", function() { return StudentsByGenderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _students_by_gender_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./students-by-gender.component */ "./src/app/views/pages/students/students-by-gender/students-by-gender.component.ts");




var routes = [{ path: '', component: _students_by_gender_component__WEBPACK_IMPORTED_MODULE_3__["StudentsByGenderComponent"] }];
var StudentsByGenderRoutingModule = /** @class */ (function () {
    function StudentsByGenderRoutingModule() {
    }
    StudentsByGenderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StudentsByGenderRoutingModule);
    return StudentsByGenderRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/pages/students/students-by-gender/students-by-gender.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/students/students-by-gender/students-by-gender.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-header-cell {\n  color: #000 !important;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzLm9udW9yYWgvRG9jdW1lbnRzL2NiYy9TY2hvb2xEYXNoYm9hcmQvc3JjL2FwcC92aWV3cy9wYWdlcy9zdHVkZW50cy9zdHVkZW50cy1ieS1nZW5kZXIvc3R1ZGVudHMtYnktZ2VuZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvc3R1ZGVudHMvc3R1ZGVudHMtYnktZ2VuZGVyL3N0dWRlbnRzLWJ5LWdlbmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtaGVhZGVyLWNlbGwge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/students/students-by-gender/students-by-gender.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/students/students-by-gender/students-by-gender.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: StudentsByGenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsByGenderComponent", function() { return StudentsByGenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _students_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../students.service */ "./src/app/views/pages/students/students.service.ts");





var StudentsByGenderComponent = /** @class */ (function () {
    function StudentsByGenderComponent(studentService, changeDetectRef) {
        this.studentService = studentService;
        this.changeDetectRef = changeDetectRef;
        this.ELEMENT_DATA = [];
        this.displayedColumns = ['schoolName', 'gender', 'studentClass', 'count'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ELEMENT_DATA);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.loading = false;
        this.editMode = false;
        this.title = 'My first AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.totalCount = 0;
    }
    StudentsByGenderComponent.prototype.ngOnInit = function () {
        this.getStudentGenderReportByState();
    };
    StudentsByGenderComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    StudentsByGenderComponent.prototype.getStudentGenderReportByState = function () {
        var _this = this;
        this.loading = true;
        this.studentService.getStudentGenderReport().subscribe(function (data) {
            _this.loading = false;
            _this.dataSource.data = data;
            _this.totalCount = data.reduce(function (accumulator, currentValue) {
                return accumulator + parseInt(currentValue.count);
            }, 0);
            _this.changeDetectRef.detectChanges();
        }, function (error) {
            _this.loading = false;
        });
    };
    StudentsByGenderComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    StudentsByGenderComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    StudentsByGenderComponent.prototype.onRowElementClick = function (event, element) {
        console.log(element);
        this.selection.clear();
        this.school = element;
        this.editMode = true;
    };
    StudentsByGenderComponent.prototype.closeDetailPage = function () {
        this.selection.clear();
        this.editMode = false;
    };
    StudentsByGenderComponent.ctorParameters = function () { return [
        { type: _students_service__WEBPACK_IMPORTED_MODULE_4__["StudentsService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], StudentsByGenderComponent.prototype, "paginator", void 0);
    StudentsByGenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-students-by-gender',
            template: __webpack_require__(/*! raw-loader!./students-by-gender.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/students/students-by-gender/students-by-gender.component.html"),
            styles: [__webpack_require__(/*! ./students-by-gender.component.scss */ "./src/app/views/pages/students/students-by-gender/students-by-gender.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_students_service__WEBPACK_IMPORTED_MODULE_4__["StudentsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], StudentsByGenderComponent);
    return StudentsByGenderComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/students/students-by-gender/students-by-gender.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/students/students-by-gender/students-by-gender.module.ts ***!
  \**************************************************************************************/
/*! exports provided: StudentsByGenderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsByGenderModule", function() { return StudentsByGenderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _students_by_gender_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./students-by-gender-routing.module */ "./src/app/views/pages/students/students-by-gender/students-by-gender-routing.module.ts");
/* harmony import */ var _students_by_gender_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./students-by-gender.component */ "./src/app/views/pages/students/students-by-gender/students-by-gender.component.ts");
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















var StudentsByGenderModule = /** @class */ (function () {
    function StudentsByGenderModule() {
    }
    StudentsByGenderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_students_by_gender_component__WEBPACK_IMPORTED_MODULE_4__["StudentsByGenderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _students_by_gender_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentsByGenderRoutingModule"],
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
    ], StudentsByGenderModule);
    return StudentsByGenderModule;
}());



/***/ })

}]);
//# sourceMappingURL=students-by-gender-students-by-gender-module.js.map