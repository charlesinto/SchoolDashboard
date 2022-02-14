(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-pages-schools-schools-module~views-pages-students-students-module~views-pages-teachers~d2cdb3e5"],{

/***/ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js ***!
  \***********************************************************/
/*! exports provided: ClipboardService, ClipboardDirective, ClipboardModule, ClipboardIfSupportedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardService", function() { return ClipboardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardDirective", function() { return ClipboardDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardModule", function() { return ClipboardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardIfSupportedDirective", function() { return ClipboardIfSupportedDirective; });
/* harmony import */ var ngx_window_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-window-token */ "./node_modules/ngx-window-token/fesm5/ngx-window-token.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The following code is heavily copied from https://github.com/zenorocha/clipboard.js
 */
var ClipboardService = /** @class */ (function () {
    function ClipboardService(document, window) {
        this.document = document;
        this.window = window;
        this.copySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.copyResponse$ = this.copySubject.asObservable();
        this.config = {};
    }
    /**
     * @param {?} config
     * @return {?}
     */
    ClipboardService.prototype.configure = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = config;
    };
    /**
     * @param {?} content
     * @return {?}
     */
    ClipboardService.prototype.copy = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        if (!this.isSupported || !content) {
            return this.pushCopyResponse({ isSuccess: false, content: content });
        }
        /** @type {?} */
        var copyResult = this.copyFromContent(content);
        if (copyResult) {
            return this.pushCopyResponse({ content: content, isSuccess: copyResult });
        }
        return this.pushCopyResponse({ isSuccess: false, content: content });
    };
    Object.defineProperty(ClipboardService.prototype, "isSupported", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.document.queryCommandSupported && !!this.document.queryCommandSupported('copy') && !!this.window;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} element
     * @return {?}
     */
    ClipboardService.prototype.isTargetValid = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            if (element.hasAttribute('disabled')) {
                throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            }
            return true;
        }
        throw new Error('Target should be input or textarea');
    };
    /**
     * Attempts to copy from an input `targetElm`
     */
    /**
     * Attempts to copy from an input `targetElm`
     * @param {?} targetElm
     * @param {?=} isFocus
     * @return {?}
     */
    ClipboardService.prototype.copyFromInputElement = /**
     * Attempts to copy from an input `targetElm`
     * @param {?} targetElm
     * @param {?=} isFocus
     * @return {?}
     */
    function (targetElm, isFocus) {
        if (isFocus === void 0) { isFocus = true; }
        try {
            this.selectTarget(targetElm);
            /** @type {?} */
            var re = this.copyText();
            this.clearSelection(isFocus ? targetElm : undefined, this.window);
            return re && this.isCopySuccessInIE11();
        }
        catch (error) {
            return false;
        }
    };
    /**
     * This is a hack for IE11 to return `true` even if copy fails.
     */
    /**
     * This is a hack for IE11 to return `true` even if copy fails.
     * @return {?}
     */
    ClipboardService.prototype.isCopySuccessInIE11 = /**
     * This is a hack for IE11 to return `true` even if copy fails.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var clipboardData = this.window['clipboardData'];
        if (clipboardData && clipboardData.getData) {
            if (!clipboardData.getData('Text')) {
                return false;
            }
        }
        return true;
    };
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     */
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     * @param {?} content
     * @param {?=} container
     * @return {?}
     */
    ClipboardService.prototype.copyFromContent = /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     * @param {?} content
     * @param {?=} container
     * @return {?}
     */
    function (content, container) {
        if (container === void 0) { container = this.document.body; }
        // check if the temp textarea still belongs to the current container.
        // In case we have multiple places using ngx-clipboard, one is in a modal using container but the other one is not.
        if (this.tempTextArea && !container.contains(this.tempTextArea)) {
            this.destroy(this.tempTextArea.parentElement);
        }
        if (!this.tempTextArea) {
            this.tempTextArea = this.createTempTextArea(this.document, this.window);
            try {
                container.appendChild(this.tempTextArea);
            }
            catch (error) {
                throw new Error('Container should be a Dom element');
            }
        }
        this.tempTextArea.value = content;
        /** @type {?} */
        var toReturn = this.copyFromInputElement(this.tempTextArea, false);
        if (this.config.cleanUpAfterCopy) {
            this.destroy(this.tempTextArea.parentElement);
        }
        return toReturn;
    };
    /**
     * Remove temporary textarea if any exists.
     */
    /**
     * Remove temporary textarea if any exists.
     * @param {?=} container
     * @return {?}
     */
    ClipboardService.prototype.destroy = /**
     * Remove temporary textarea if any exists.
     * @param {?=} container
     * @return {?}
     */
    function (container) {
        if (container === void 0) { container = this.document.body; }
        if (this.tempTextArea) {
            container.removeChild(this.tempTextArea);
            // removeChild doesn't remove the reference from memory
            this.tempTextArea = undefined;
        }
    };
    /**
     * Select the target html input element.
     */
    /**
     * Select the target html input element.
     * @private
     * @param {?} inputElement
     * @return {?}
     */
    ClipboardService.prototype.selectTarget = /**
     * Select the target html input element.
     * @private
     * @param {?} inputElement
     * @return {?}
     */
    function (inputElement) {
        inputElement.select();
        inputElement.setSelectionRange(0, inputElement.value.length);
        return inputElement.value.length;
    };
    /**
     * @private
     * @return {?}
     */
    ClipboardService.prototype.copyText = /**
     * @private
     * @return {?}
     */
    function () {
        return this.document.execCommand('copy');
    };
    /**
     * Moves focus away from `target` and back to the trigger, removes current selection.
     */
    /**
     * Moves focus away from `target` and back to the trigger, removes current selection.
     * @private
     * @param {?} inputElement
     * @param {?} window
     * @return {?}
     */
    ClipboardService.prototype.clearSelection = /**
     * Moves focus away from `target` and back to the trigger, removes current selection.
     * @private
     * @param {?} inputElement
     * @param {?} window
     * @return {?}
     */
    function (inputElement, window) {
        inputElement && inputElement.focus();
        window.getSelection().removeAllRanges();
    };
    /**
     * Creates a fake textarea for copy command.
     */
    /**
     * Creates a fake textarea for copy command.
     * @private
     * @param {?} doc
     * @param {?} window
     * @return {?}
     */
    ClipboardService.prototype.createTempTextArea = /**
     * Creates a fake textarea for copy command.
     * @private
     * @param {?} doc
     * @param {?} window
     * @return {?}
     */
    function (doc, window) {
        /** @type {?} */
        var isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
        /** @type {?} */
        var ta;
        ta = doc.createElement('textarea');
        // Prevent zooming on iOS
        ta.style.fontSize = '12pt';
        // Reset box model
        ta.style.border = '0';
        ta.style.padding = '0';
        ta.style.margin = '0';
        // Move element out of screen horizontally
        ta.style.position = 'absolute';
        ta.style[isRTL ? 'right' : 'left'] = '-9999px';
        // Move element to the same position vertically
        /** @type {?} */
        var yPosition = window.pageYOffset || doc.documentElement.scrollTop;
        ta.style.top = yPosition + 'px';
        ta.setAttribute('readonly', '');
        return ta;
    };
    /**
     * Pushes copy operation response to copySubject, to provide global access
     * to the response.
     */
    /**
     * Pushes copy operation response to copySubject, to provide global access
     * to the response.
     * @param {?} response
     * @return {?}
     */
    ClipboardService.prototype.pushCopyResponse = /**
     * Pushes copy operation response to copySubject, to provide global access
     * to the response.
     * @param {?} response
     * @return {?}
     */
    function (response) {
        this.copySubject.next(response);
    };
    /**
     * @deprecated use pushCopyResponse instead.
     */
    /**
     * @deprecated use pushCopyResponse instead.
     * @param {?} response
     * @return {?}
     */
    ClipboardService.prototype.pushCopyReponse = /**
     * @deprecated use pushCopyResponse instead.
     * @param {?} response
     * @return {?}
     */
    function (response) {
        this.pushCopyResponse(response);
    };
    ClipboardService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ClipboardService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [ngx_window_token__WEBPACK_IMPORTED_MODULE_0__["WINDOW"],] }] }
    ]; };
    /** @nocollapse */ ClipboardService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function ClipboardService_Factory() { return new ClipboardService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ngx_window_token__WEBPACK_IMPORTED_MODULE_0__["WINDOW"], 8)); }, token: ClipboardService, providedIn: "root" });
    return ClipboardService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ClipboardDirective = /** @class */ (function () {
    function ClipboardDirective(clipboardSrv) {
        this.clipboardSrv = clipboardSrv;
        this.cbOnSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.cbOnError = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    // tslint:disable-next-line:no-empty
    // tslint:disable-next-line:no-empty
    /**
     * @return {?}
     */
    ClipboardDirective.prototype.ngOnInit = 
    // tslint:disable-next-line:no-empty
    /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ClipboardDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clipboardSrv.destroy(this.container);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ClipboardDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.clipboardSrv.isSupported) {
            this.handleResult(false, undefined, event);
        }
        else if (this.targetElm && this.clipboardSrv.isTargetValid(this.targetElm)) {
            this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm), this.targetElm.value, event);
        }
        else if (this.cbContent) {
            this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent, this.container), this.cbContent, event);
        }
    };
    /**
     * Fires an event based on the copy operation result.
     * @param succeeded
     */
    /**
     * Fires an event based on the copy operation result.
     * @private
     * @param {?} succeeded
     * @param {?} copiedContent
     * @param {?} event
     * @return {?}
     */
    ClipboardDirective.prototype.handleResult = /**
     * Fires an event based on the copy operation result.
     * @private
     * @param {?} succeeded
     * @param {?} copiedContent
     * @param {?} event
     * @return {?}
     */
    function (succeeded, copiedContent, event) {
        /** @type {?} */
        var response = {
            isSuccess: succeeded,
            event: event
        };
        if (succeeded) {
            response = Object.assign(response, {
                content: copiedContent,
                successMessage: this.cbSuccessMsg
            });
            this.cbOnSuccess.emit(response);
        }
        else {
            this.cbOnError.emit(response);
        }
        this.clipboardSrv.pushCopyResponse(response);
    };
    ClipboardDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[ngxClipboard]'
                },] }
    ];
    /** @nocollapse */
    ClipboardDirective.ctorParameters = function () { return [
        { type: ClipboardService }
    ]; };
    ClipboardDirective.propDecorators = {
        targetElm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['ngxClipboard',] }],
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        cbContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        cbSuccessMsg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        cbOnSuccess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        cbOnError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['click', ['$event.target'],] }]
    };
    return ClipboardDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ClipboardIfSupportedDirective = /** @class */ (function () {
    function ClipboardIfSupportedDirective(_clipboardService, _viewContainerRef, _templateRef) {
        this._clipboardService = _clipboardService;
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
    }
    /**
     * @return {?}
     */
    ClipboardIfSupportedDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this._clipboardService.isSupported) {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
    };
    ClipboardIfSupportedDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[ngxClipboardIfSupported]'
                },] }
    ];
    /** @nocollapse */
    ClipboardIfSupportedDirective.ctorParameters = function () { return [
        { type: ClipboardService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
    ]; };
    return ClipboardIfSupportedDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ClipboardModule = /** @class */ (function () {
    function ClipboardModule() {
    }
    ClipboardModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                    declarations: [ClipboardDirective, ClipboardIfSupportedDirective],
                    exports: [ClipboardDirective, ClipboardIfSupportedDirective]
                },] }
    ];
    return ClipboardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-clipboard.js.map

/***/ }),

/***/ "./node_modules/ngx-window-token/fesm5/ngx-window-token.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-window-token/fesm5/ngx-window-token.js ***!
  \*****************************************************************/
/*! exports provided: WINDOW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WindowToken', typeof window !== 'undefined' && window.document ? { providedIn: 'root', factory: (/**
     * @return {?}
     */
    function () { return window; }) } : undefined);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-window-token.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/partials/content/general/material-preview/material-preview.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/partials/content/general/material-preview/material-preview.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet [ngClass]=\"'kt-portlet--ngviewer'\" *ngIf=\"viewItem\">\n\t<kt-portlet-header [title]=\"viewItem.beforeCodeTitle\">\n\t\t<ng-container ktPortletTools>\n\t\t\t<!-- <ul class=\"kt-portlet__nav\">\n\t\t\t\t<li class=\"kt-portlet__nav-item\">\n\t\t\t\t\t<a href=\"javascript:;\" *ngIf=\"hasExampleSource()\" (click)=\"changeCodeVisibility()\" class=\"kt-portlet__nav-link kt-portlet__nav-link--icon\"\n\t\t\t\t\t\ttitle=\"View Source\">\n\t\t\t\t\t\t<i class=\"la la-code\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul> -->\n\t\t\t<div class=\"kt-portlet__head-group\">\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\t*ngIf=\"hasExampleSource()\"\n\t\t\t\t\t(click)=\"changeCodeVisibility()\"\n\t\t\t\t\ttitle=\"View Source\"\n\t\t\t\t\tclass=\"btn btn-clean btn-sm btn-icon btn-icon-md\">\n\t\t\t\t\t<i class=\"la la-code\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</ng-container>\n\t</kt-portlet-header>\n\n\t<kt-portlet-body>\n\t\t<div class=\"kt-portlet__preview\" *ngIf=\"viewItem.beforeCodeDescription\">\n\t\t\t<div class=\"kt-alert kt-alert--icon kt-alert--air kt-alert--square alert alert-dismissible kt-margin-bottom-30\"\n\t\t\t\t[ngClass]=\"classes\" role=\"alert\">\n\t\t\t\t<div class=\"kt-alert__text\" [innerHTML]=\"viewItem.beforeCodeDescription | safe: 'html'\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf=\"hasExampleSource()\" class=\"kt-portlet__preview kt-portlet__code\" [ngClass]=\"{'kt-portlet__code--show' : viewItem.isCodeVisible}\">\n\t\t\t<mat-tab-group *ngIf=\"viewItem.isCodeVisible\">\n\t\t\t\t<mat-tab label=\"HTML\" *ngIf=\"viewItem.htmlCode\">\n\t\t\t\t\t<a href=\"javascript:;\"\n\t\t\t\t\t\tclass=\"kt-portlet__code-copy\"\n\t\t\t\t\t\ttitle=\"Copy example source\"\n\t\t\t\t\t\tngxClipboard\n\t\t\t\t\t\t[cbContent]=\"viewItem.htmlCode\">\n\t\t\t\t\t\t<i class=\"la la-copy\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t\t<pre><code [highlight]=\"viewItem.htmlCode\"></code></pre>\n\t\t\t\t</mat-tab>\n\t\t\t\t<mat-tab label=\"TS\" *ngIf=\"viewItem.tsCode\">\n\t\t\t\t\t<a href=\"javascript:;\"\n\t\t\t\t\t\tclass=\"kt-portlet__code-copy\"\n\t\t\t\t\t\ttitle=\"Copy example source\"\n\t\t\t\t\t\tngxClipboard\n\t\t\t\t\t\t[cbContent]=\"viewItem.tsCode\">\n\t\t\t\t\t\t<i class=\"la la-copy\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t\t<pre><code [highlight]=\"viewItem.tsCode\"></code></pre>\n\t\t\t\t</mat-tab>\n\t\t\t\t<mat-tab label=\"CSS\" *ngIf=\"viewItem.cssCode\">\n\t\t\t\t\t<a href=\"javascript:;\"\n\t\t\t\t\t\tclass=\"kt-portlet__code-copy\"\n\t\t\t\t\t\ttitle=\"Copy example source\"\n\t\t\t\t\t\tngxClipboard\n\t\t\t\t\t\t[cbContent]=\"viewItem.cssCode\">\n\t\t\t\t\t\t<i class=\"la la-copy\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t\t<pre><code [highlight]=\"viewItem.cssCode\"></code></pre>\n\t\t\t\t</mat-tab>\n\t\t\t\t<mat-tab label=\"SCSS\" *ngIf=\"viewItem.scssCode\">\n\t\t\t\t\t<a href=\"javascript:;\"\n\t\t\t\t\t\tclass=\"kt-portlet__code-copy\"\n\t\t\t\t\t\ttitle=\"Copy example source\"\n\t\t\t\t\t\tngxClipboard\n\t\t\t\t\t\t[cbContent]=\"viewItem.scssCode\">\n\t\t\t\t\t\t<i class=\"la la-copy\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t\t<pre><code [highlight]=\"viewItem.scssCode\"></code></pre>\n\t\t\t\t</mat-tab>\n\t\t\t</mat-tab-group>\n\t\t</div>\n\n\t\t<!-- view -->\n\t\t<div class=\"kt-portlet__preview\">\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t\t<!-- / view -->\n\n\t\t<!-- after Code Title -->\n\t\t<div *ngIf=\"viewItem.afterCodeTitle\" class=\"kt-portlet__preview\" [innerHTML]=\"viewItem.afterCodeTitle | safe: 'html'\">\n\t\t</div>\n\t\t<!-- / after Code Title -->\n\n\t\t<!-- after Code Description -->\n\t\t<div *ngIf=\"viewItem.afterCodeDescription\" class=\"kt-portlet__preview\" [innerHTML]=\"viewItem.afterCodeDescription | safe: 'html'\">\n\t\t</div>\n\t\t<!-- / after Code Description -->\n\t</kt-portlet-body>\n\n\t<kt-portlet-footer></kt-portlet-footer>\n</kt-portlet>\n"

/***/ }),

/***/ "./src/app/views/pages/schools/schools.service.ts":
/*!********************************************************!*\
  !*** ./src/app/views/pages/schools/schools.service.ts ***!
  \********************************************************/
/*! exports provided: SchoolsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolsService", function() { return SchoolsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");






// const BASE_URL = 'https://school-census.herokuapp.com';
var BASE_URL = 'http://159.89.90.214:8000';
// const BASE_URL = 'http://localhost:8000';
var GET_ALL_SCHOOLS = '/api/v1/school/get-schools';
var GET_SCHOOL_BY_STATE = '/api/v1/school/get-schools-by-state';
var SchoolsService = /** @class */ (function () {
    function SchoolsService(http) {
        this.http = http;
    }
    SchoolsService.prototype.bulkCreate = function (formData) {
        var user = JSON.parse(localStorage.getItem(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].authTokenKey));
        return this.http.post(BASE_URL + "/api/v1/school/upload", formData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                Authorization: user.accessToken,
            }),
        });
    };
    SchoolsService.prototype.getSchools = function () {
        var user = JSON.parse(localStorage.getItem(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].authTokenKey));
        console.log('user: ', user);
        return this.http
            .get("" + BASE_URL + GET_ALL_SCHOOLS + "/" + user.state_access, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                Authorization: user.accessToken,
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var schools = [];
            response['data'].forEach(function (item) {
                schools.push({
                    id: item.id,
                    address: item.address,
                    district: item.district,
                    principal: item.principal,
                    telephoneNumber: item.telephonenumber,
                    mailingAddress: item.mailingaddress,
                    schoolName: item.schoolname,
                    schoolNumber: item.schoolnumber,
                    lga: item.lga,
                    state: item.state,
                    typeOfSchool: item.typeofschool,
                    genderCategory: item.gendercategory,
                    dateOfEstablishment: item.dateofestablishment,
                    owner: item.owner,
                    recognitionStatus: item.recognitionstatus,
                    schoolDistance: item.schooldistance,
                    boardingFacility: item.boardingfacility,
                    pta: item.pta,
                    classRoomNumber: item.classroomnumber,
                    enoughSeats: item.enoughseats,
                    libraryNumber: item.librarynumber,
                    laboratoryNumber: item.laboratorynumber,
                    schoolCondition: item.schoolcondition,
                    schoolCoordinate: item.schoolcoordinate,
                    localid: item.localid,
                });
            });
            return schools;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleHttpError));
    };
    SchoolsService.prototype.handleHttpError = function (error) {
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
    SchoolsService.prototype.getSchoolByState = function () {
        var user = JSON.parse(localStorage.getItem(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].authTokenKey));
        return this.http
            .get("" + BASE_URL + GET_SCHOOL_BY_STATE + "/" + user.state_access)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var data = [];
            response['data'].forEach(function (item) {
                data.push({
                    count: item.count,
                    state: item.state,
                });
            });
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleHttpError));
    };
    SchoolsService.prototype.getSchoolByLGA = function () {
        var user = JSON.parse(localStorage.getItem(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].authTokenKey));
        return this.http
            .get(BASE_URL + "/api/v1/school/get-schools-by-lga/" + user.state_access)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var data = [];
            response['data'].forEach(function (item) {
                data.push({
                    count: item.count,
                    state: item.state,
                    lga: item.lga,
                });
            });
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleHttpError));
    };
    SchoolsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    SchoolsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SchoolsService);
    return SchoolsService;
}());



/***/ }),

/***/ "./src/app/views/partials/content/general/material-preview/material-preview.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/partials/content/general/material-preview/material-preview.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .kt-portlet.kt-portlet--ngviewer .kt-portlet__body {\n  padding: 1.75rem 1.75rem; }\n\n:host .kt-portlet.kt-portlet--ngviewer .kt-portlet__body .kt-portlet__code.kt-portlet__code--show {\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzLm9udW9yYWgvRG9jdW1lbnRzL2NiYy9TY2hvb2xEYXNoYm9hcmQvc3JjL2FwcC92aWV3cy9wYXJ0aWFscy9jb250ZW50L2dlbmVyYWwvbWF0ZXJpYWwtcHJldmlldy9tYXRlcmlhbC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsd0JBQXdCLEVBQUE7O0FBRmhDO0VBTVMsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYXJ0aWFscy9jb250ZW50L2dlbmVyYWwvbWF0ZXJpYWwtcHJldmlldy9tYXRlcmlhbC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXHQua3QtcG9ydGxldC5rdC1wb3J0bGV0LS1uZ3ZpZXdlciAua3QtcG9ydGxldF9fYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDEuNzVyZW0gMS43NXJlbTtcbiAgICB9XG5cbiAgICAua3QtcG9ydGxldC5rdC1wb3J0bGV0LS1uZ3ZpZXdlciAua3QtcG9ydGxldF9fYm9keSAua3QtcG9ydGxldF9fY29kZS5rdC1wb3J0bGV0X19jb2RlLS1zaG93IHtcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/partials/content/general/material-preview/material-preview.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/partials/content/general/material-preview/material-preview.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: MaterialPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialPreviewComponent", function() { return MaterialPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// Angular

var MaterialPreviewComponent = /** @class */ (function () {
    /**
     * Component constructor
     */
    function MaterialPreviewComponent() {
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    MaterialPreviewComponent.prototype.ngOnInit = function () {
    };
    /**
     * Toggle visibility
     */
    MaterialPreviewComponent.prototype.changeCodeVisibility = function () {
        this.viewItem.isCodeVisible = !this.viewItem.isCodeVisible;
    };
    /**
     * Check examples existing
     */
    MaterialPreviewComponent.prototype.hasExampleSource = function () {
        if (!this.viewItem) {
            return false;
        }
        if (!this.viewItem.cssCode && !this.viewItem.htmlCode && !this.viewItem.scssCode && !this.viewItem.tsCode) {
            return false;
        }
        return true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MaterialPreviewComponent.prototype, "viewItem", void 0);
    MaterialPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-material-preview',
            template: __webpack_require__(/*! raw-loader!./material-preview.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/partials/content/general/material-preview/material-preview.component.html"),
            styles: [__webpack_require__(/*! ./material-preview.component.scss */ "./src/app/views/partials/content/general/material-preview/material-preview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MaterialPreviewComponent);
    return MaterialPreviewComponent;
}());



/***/ }),

/***/ "./src/app/views/partials/content/general/material-preview/material-preview.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/views/partials/content/general/material-preview/material-preview.module.ts ***!
  \********************************************************************************************/
/*! exports provided: MaterialPreviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialPreviewModule", function() { return MaterialPreviewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _material_preview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material-preview.component */ "./src/app/views/partials/content/general/material-preview/material-preview.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _portlet_portlet_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../portlet/portlet.module */ "./src/app/views/partials/content/general/portlet/portlet.module.ts");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");

// Angular







// Perfect ScrollBar


// Core Module


// Highlight JS

var MaterialPreviewModule = /** @class */ (function () {
    function MaterialPreviewModule() {
    }
    MaterialPreviewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__["HighlightModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                _portlet_portlet_module__WEBPACK_IMPORTED_MODULE_11__["PortletModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardModule"],
                // angular material modules
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            ],
            exports: [_material_preview_component__WEBPACK_IMPORTED_MODULE_9__["MaterialPreviewComponent"]],
            declarations: [_material_preview_component__WEBPACK_IMPORTED_MODULE_9__["MaterialPreviewComponent"]]
        })
    ], MaterialPreviewModule);
    return MaterialPreviewModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~views-pages-schools-schools-module~views-pages-students-students-module~views-pages-teachers~d2cdb3e5.js.map