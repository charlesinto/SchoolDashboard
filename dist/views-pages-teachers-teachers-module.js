(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-teachers-teachers-module"],{

/***/ "./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js ***!
  \************************************************************************/
/*! exports provided: CircleProgressComponent, CircleProgressOptions, NgCircleProgressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleProgressComponent", function() { return CircleProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleProgressOptions", function() { return CircleProgressOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCircleProgressModule", function() { return NgCircleProgressModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




class CircleProgressOptions {
    constructor() {
        this.class = '';
        this.backgroundGradient = false;
        this.backgroundColor = 'transparent';
        this.backgroundGradientStopColor = 'transparent';
        this.backgroundOpacity = 1;
        this.backgroundStroke = 'transparent';
        this.backgroundStrokeWidth = 0;
        this.backgroundPadding = 5;
        this.percent = 0;
        this.radius = 90;
        this.space = 4;
        this.toFixed = 0;
        this.maxPercent = 1000;
        this.renderOnClick = true;
        this.units = '%';
        this.unitsFontSize = '10';
        this.unitsFontWeight = 'normal';
        this.unitsColor = '#444444';
        this.outerStrokeGradient = false;
        this.outerStrokeWidth = 8;
        this.outerStrokeColor = '#78C000';
        this.outerStrokeGradientStopColor = 'transparent';
        this.outerStrokeLinecap = 'round';
        this.innerStrokeColor = '#C7E596';
        this.innerStrokeWidth = 4;
        this.titleFormat = undefined;
        this.title = 'auto';
        this.titleColor = '#444444';
        this.titleFontSize = '20';
        this.titleFontWeight = 'normal';
        this.subtitleFormat = undefined;
        this.subtitle = 'progress';
        this.subtitleColor = '#A9A9A9';
        this.subtitleFontSize = '10';
        this.subtitleFontWeight = 'normal';
        this.imageSrc = undefined;
        this.imageHeight = undefined;
        this.imageWidth = undefined;
        this.animation = true;
        this.animateTitle = true;
        this.animateSubtitle = false;
        this.animationDuration = 500;
        this.showTitle = true;
        this.showSubtitle = true;
        this.showUnits = true;
        this.showImage = false;
        this.showBackground = true;
        this.showInnerStroke = true;
        this.clockwise = true;
        this.responsive = false;
        this.startFromZero = true;
        this.showZeroOuterStroke = true;
        this.lazy = false;
    }
}
/** @dynamic Prevent compiling error when using type `Document` https://github.com/angular/angular/issues/20351 */
class CircleProgressComponent {
    constructor(defaultOptions, elRef, document) {
        this.elRef = elRef;
        this.document = document;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // <svg> of component
        this.svgElement = null;
        // whether <svg> is in viewport
        this.isInViewport = false;
        // event for notifying viewport change caused by scrolling or resizing
        this.onViewportChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this._viewportChangedSubscriber = null;
        this.options = new CircleProgressOptions();
        this.defaultOptions = new CircleProgressOptions();
        this._lastPercent = 0;
        this._gradientUUID = null;
        this.render = () => {
            this.applyOptions();
            if (this.options.lazy) {
                // Draw svg if it doesn't exist
                this.svgElement === null && this.draw(this._lastPercent);
                // Draw it only when it's in the viewport
                if (this.isInViewport) {
                    // Draw it at the latest position when I am in.
                    if (this.options.animation && this.options.animationDuration > 0) {
                        this.animate(this._lastPercent, this.options.percent);
                    }
                    else {
                        this.draw(this.options.percent);
                    }
                    this._lastPercent = this.options.percent;
                }
            }
            else {
                if (this.options.animation && this.options.animationDuration > 0) {
                    this.animate(this._lastPercent, this.options.percent);
                }
                else {
                    this.draw(this.options.percent);
                }
                this._lastPercent = this.options.percent;
            }
        };
        this.polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
            let angleInRadius = angleInDegrees * Math.PI / 180;
            let x = centerX + Math.sin(angleInRadius) * radius;
            let y = centerY - Math.cos(angleInRadius) * radius;
            return { x: x, y: y };
        };
        this.draw = (percent) => {
            // make percent reasonable
            percent = (percent === undefined) ? this.options.percent : Math.abs(percent);
            // circle percent shouldn't be greater than 100%.
            let circlePercent = (percent > 100) ? 100 : percent;
            // determine box size
            let boxSize = this.options.radius * 2 + this.options.outerStrokeWidth * 2;
            if (this.options.showBackground) {
                boxSize += (this.options.backgroundStrokeWidth * 2 + this.max(0, this.options.backgroundPadding * 2));
            }
            // the centre of the circle
            let centre = { x: boxSize / 2, y: boxSize / 2 };
            // the start point of the arc
            let startPoint = { x: centre.x, y: centre.y - this.options.radius };
            // get the end point of the arc
            let endPoint = this.polarToCartesian(centre.x, centre.y, this.options.radius, 360 * (this.options.clockwise ?
                circlePercent :
                (100 - circlePercent)) / 100); // ####################
            // We'll get an end point with the same [x, y] as the start point when percent is 100%, so move x a little bit.
            if (circlePercent === 100) {
                endPoint.x = endPoint.x + (this.options.clockwise ? -0.01 : +0.01);
            }
            // largeArcFlag and sweepFlag
            let largeArcFlag, sweepFlag;
            if (circlePercent > 50) {
                [largeArcFlag, sweepFlag] = this.options.clockwise ? [1, 1] : [1, 0];
            }
            else {
                [largeArcFlag, sweepFlag] = this.options.clockwise ? [0, 1] : [0, 0];
            }
            // percent may not equal the actual percent
            let titlePercent = this.options.animateTitle ? percent : this.options.percent;
            let titleTextPercent = titlePercent > this.options.maxPercent ?
                `${this.options.maxPercent.toFixed(this.options.toFixed)}+` : titlePercent.toFixed(this.options.toFixed);
            let subtitlePercent = this.options.animateSubtitle ? percent : this.options.percent;
            // get title object
            let title = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: this.options.titleColor,
                fontSize: this.options.titleFontSize,
                fontWeight: this.options.titleFontWeight,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both title and titleFormat(...) may be an array of string.
            if (this.options.titleFormat !== undefined && this.options.titleFormat.constructor.name === 'Function') {
                let formatted = this.options.titleFormat(titlePercent);
                if (formatted instanceof Array) {
                    title.texts = [...formatted];
                }
                else {
                    title.texts.push(formatted.toString());
                }
            }
            else {
                if (this.options.title === 'auto') {
                    title.texts.push(titleTextPercent);
                }
                else {
                    if (this.options.title instanceof Array) {
                        title.texts = [...this.options.title];
                    }
                    else {
                        title.texts.push(this.options.title.toString());
                    }
                }
            }
            // get subtitle object
            let subtitle = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: this.options.subtitleColor,
                fontSize: this.options.subtitleFontSize,
                fontWeight: this.options.subtitleFontWeight,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both subtitle and subtitleFormat(...) may be an array of string.
            if (this.options.subtitleFormat !== undefined && this.options.subtitleFormat.constructor.name === 'Function') {
                let formatted = this.options.subtitleFormat(subtitlePercent);
                if (formatted instanceof Array) {
                    subtitle.texts = [...formatted];
                }
                else {
                    subtitle.texts.push(formatted.toString());
                }
            }
            else {
                if (this.options.subtitle instanceof Array) {
                    subtitle.texts = [...this.options.subtitle];
                }
                else {
                    subtitle.texts.push(this.options.subtitle.toString());
                }
            }
            // get units object
            let units = {
                text: `${this.options.units}`,
                fontSize: this.options.unitsFontSize,
                fontWeight: this.options.unitsFontWeight,
                color: this.options.unitsColor
            };
            // get total count of text lines to be shown
            let rowCount = 0, rowNum = 1;
            this.options.showTitle && (rowCount += title.texts.length);
            this.options.showSubtitle && (rowCount += subtitle.texts.length);
            // calc dy for each tspan for title
            if (this.options.showTitle) {
                for (let span of title.texts) {
                    title.tspans.push({ span: span, dy: this.getRelativeY(rowNum, rowCount) });
                    rowNum++;
                }
            }
            // calc dy for each tspan for subtitle
            if (this.options.showSubtitle) {
                for (let span of subtitle.texts) {
                    subtitle.tspans.push({ span: span, dy: this.getRelativeY(rowNum, rowCount) });
                    rowNum++;
                }
            }
            // create ID for gradient element
            if (null === this._gradientUUID) {
                this._gradientUUID = this.uuid();
            }
            // Bring it all together
            this.svg = {
                viewBox: `0 0 ${boxSize} ${boxSize}`,
                // Set both width and height to '100%' if it's responsive
                width: this.options.responsive ? '100%' : boxSize,
                height: this.options.responsive ? '100%' : boxSize,
                backgroundCircle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: this.options.radius + this.options.outerStrokeWidth / 2 + this.options.backgroundPadding,
                    fill: this.options.backgroundColor,
                    fillOpacity: this.options.backgroundOpacity,
                    stroke: this.options.backgroundStroke,
                    strokeWidth: this.options.backgroundStrokeWidth,
                },
                path: {
                    // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
                    d: `M ${startPoint.x} ${startPoint.y}
        A ${this.options.radius} ${this.options.radius} 0 ${largeArcFlag} ${sweepFlag} ${endPoint.x} ${endPoint.y}`,
                    stroke: this.options.outerStrokeColor,
                    strokeWidth: this.options.outerStrokeWidth,
                    strokeLinecap: this.options.outerStrokeLinecap,
                    fill: 'none'
                },
                circle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: this.options.radius - this.options.space - this.options.outerStrokeWidth / 2 - this.options.innerStrokeWidth / 2,
                    fill: 'none',
                    stroke: this.options.innerStrokeColor,
                    strokeWidth: this.options.innerStrokeWidth,
                },
                title: title,
                units: units,
                subtitle: subtitle,
                image: {
                    x: centre.x - this.options.imageWidth / 2,
                    y: centre.y - this.options.imageHeight / 2,
                    src: this.options.imageSrc,
                    width: this.options.imageWidth,
                    height: this.options.imageHeight,
                },
                outerLinearGradient: {
                    id: 'outer-linear-' + this._gradientUUID,
                    colorStop1: this.options.outerStrokeColor,
                    colorStop2: this.options.outerStrokeGradientStopColor === 'transparent' ? '#FFF' : this.options.outerStrokeGradientStopColor,
                },
                radialGradient: {
                    id: 'radial-' + this._gradientUUID,
                    colorStop1: this.options.backgroundColor,
                    colorStop2: this.options.backgroundGradientStopColor === 'transparent' ? '#FFF' : this.options.backgroundGradientStopColor,
                }
            };
        };
        this.getAnimationParameters = (previousPercent, currentPercent) => {
            const MIN_INTERVAL = 10;
            let times, step, interval;
            let fromPercent = this.options.startFromZero ? 0 : (previousPercent < 0 ? 0 : previousPercent);
            let toPercent = currentPercent < 0 ? 0 : this.min(currentPercent, this.options.maxPercent);
            let delta = Math.abs(Math.round(toPercent - fromPercent));
            if (delta >= 100) {
                // we will finish animation in 100 times
                times = 100;
                if (!this.options.animateTitle && !this.options.animateSubtitle) {
                    step = 1;
                }
                else {
                    // show title or subtitle animation even if the arc is full, we also need to finish it in 100 times.
                    step = Math.round(delta / times);
                }
            }
            else {
                // we will finish in as many times as the number of percent.
                times = delta;
                step = 1;
            }
            // Get the interval of timer
            interval = Math.round(this.options.animationDuration / times);
            // Readjust all values if the interval of timer is extremely small.
            if (interval < MIN_INTERVAL) {
                interval = MIN_INTERVAL;
                times = this.options.animationDuration / interval;
                if (!this.options.animateTitle && !this.options.animateSubtitle && delta > 100) {
                    step = Math.round(100 / times);
                }
                else {
                    step = Math.round(delta / times);
                }
            }
            // step must be greater than 0.
            if (step < 1) {
                step = 1;
            }
            return { times: times, step: step, interval: interval };
        };
        this.animate = (previousPercent, currentPercent) => {
            if (this._timerSubscription && !this._timerSubscription.closed) {
                this._timerSubscription.unsubscribe();
            }
            let fromPercent = this.options.startFromZero ? 0 : previousPercent;
            let toPercent = currentPercent;
            let { step: step, interval: interval } = this.getAnimationParameters(fromPercent, toPercent);
            let count = fromPercent;
            if (fromPercent < toPercent) {
                this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, interval).subscribe(() => {
                    count += step;
                    if (count <= toPercent) {
                        if (!this.options.animateTitle && !this.options.animateSubtitle && count >= 100) {
                            this.draw(toPercent);
                            this._timerSubscription.unsubscribe();
                        }
                        else {
                            this.draw(count);
                        }
                    }
                    else {
                        this.draw(toPercent);
                        this._timerSubscription.unsubscribe();
                    }
                });
            }
            else {
                this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, interval).subscribe(() => {
                    count -= step;
                    if (count >= toPercent) {
                        if (!this.options.animateTitle && !this.options.animateSubtitle && toPercent >= 100) {
                            this.draw(toPercent);
                            this._timerSubscription.unsubscribe();
                        }
                        else {
                            this.draw(count);
                        }
                    }
                    else {
                        this.draw(toPercent);
                        this._timerSubscription.unsubscribe();
                    }
                });
            }
        };
        this.emitClickEvent = (event) => {
            if (this.options.renderOnClick) {
                this.animate(0, this.options.percent);
            }
            this.onClick.emit(event);
        };
        this.applyOptions = () => {
            // the options of <circle-progress> may change already
            for (let name of Object.keys(this.options)) {
                if (this.hasOwnProperty(name) && this[name] !== undefined) {
                    this.options[name] = this[name];
                }
                else if (this.templateOptions && this.templateOptions[name] !== undefined) {
                    this.options[name] = this.templateOptions[name];
                }
            }
            // make sure key options valid
            this.options.radius = Math.abs(+this.options.radius);
            this.options.space = +this.options.space;
            this.options.percent = +this.options.percent > 0 ? +this.options.percent : 0;
            this.options.maxPercent = Math.abs(+this.options.maxPercent);
            this.options.animationDuration = Math.abs(this.options.animationDuration);
            this.options.outerStrokeWidth = Math.abs(+this.options.outerStrokeWidth);
            this.options.innerStrokeWidth = Math.abs(+this.options.innerStrokeWidth);
            this.options.backgroundPadding = +this.options.backgroundPadding;
        };
        this.getRelativeY = (rowNum, rowCount) => {
            // why '-0.18em'? It's a magic number when property 'alignment-baseline' equals 'baseline'. :)
            let initialOffset = -0.18, offset = 1;
            return (initialOffset + offset * (rowNum - rowCount / 2)).toFixed(2) + 'em';
        };
        this.min = (a, b) => {
            return a < b ? a : b;
        };
        this.max = (a, b) => {
            return a > b ? a : b;
        };
        this.uuid = () => {
            // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
            var dt = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        };
        this.findSvgElement = function () {
            if (this.svgElement === null) {
                let tags = this.elRef.nativeElement.getElementsByTagName('svg');
                if (tags.length > 0) {
                    this.svgElement = tags[0];
                }
            }
        };
        this.checkViewport = () => {
            this.findSvgElement();
            let previousValue = this.isInViewport;
            this.isInViewport = this.isElementInViewport(this.svgElement);
            if (previousValue !== this.isInViewport) {
                this.onViewportChanged.emit({ oldValue: previousValue, newValue: this.isInViewport });
            }
        };
        this.onScroll = (event) => {
            this.checkViewport();
        };
        this.loadEventsForLazyMode = () => {
            if (this.options.lazy) {
                this.document.addEventListener('scroll', this.onScroll, true);
                this.window.addEventListener('resize', this.onScroll, true);
                if (this._viewportChangedSubscriber === null) {
                    this._viewportChangedSubscriber = this.onViewportChanged.subscribe(({ oldValue, newValue }) => {
                        newValue ? this.render() : null;
                    });
                }
                // svgElement must be created in DOM before being checked.
                // Is there a better way to check the existence of svgElemnt?
                let _timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 50).subscribe(() => {
                    this.svgElement === null ? this.checkViewport() : _timer.unsubscribe();
                });
            }
        };
        this.unloadEventsForLazyMode = () => {
            // Remove event listeners
            this.document.removeEventListener('scroll', this.onScroll, true);
            this.window.removeEventListener('resize', this.onScroll, true);
            // Unsubscribe onViewportChanged
            if (this._viewportChangedSubscriber !== null) {
                this._viewportChangedSubscriber.unsubscribe();
                this._viewportChangedSubscriber = null;
            }
        };
        this.document = document;
        this.window = this.document.defaultView;
        Object.assign(this.options, defaultOptions);
        Object.assign(this.defaultOptions, defaultOptions);
    }
    isDrawing() {
        return (this._timerSubscription && !this._timerSubscription.closed);
    }
    isElementInViewport(el) {
        // Return false if el has not been created in page.
        if (el === null || el === undefined)
            return false;
        // Check if the element is out of view due to a container scrolling
        let rect = el.getBoundingClientRect(), parent = el.parentNode, parentRect;
        do {
            parentRect = parent.getBoundingClientRect();
            if (rect.top >= parentRect.bottom)
                return false;
            if (rect.bottom <= parentRect.top)
                return false;
            if (rect.left >= parentRect.right)
                return false;
            if (rect.right <= parentRect.left)
                return false;
            parent = parent.parentNode;
        } while (parent != this.document.body);
        // Check its within the document viewport
        if (rect.top >= (this.window.innerHeight || this.document.documentElement.clientHeight))
            return false;
        if (rect.bottom <= 0)
            return false;
        if (rect.left >= (this.window.innerWidth || this.document.documentElement.clientWidth))
            return false;
        if (rect.right <= 0)
            return false;
        return true;
    }
    ngOnInit() {
        this.loadEventsForLazyMode();
    }
    ngOnDestroy() {
        this.unloadEventsForLazyMode();
    }
    ngOnChanges(changes) {
        this.render();
        if ('lazy' in changes) {
            changes.lazy.currentValue ? this.loadEventsForLazyMode() : this.unloadEventsForLazyMode();
        }
    }
}
CircleProgressComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'circle-progress',
                template: `
        <svg xmlns="http://www.w3.org/2000/svg" *ngIf="svg"
             [attr.viewBox]="svg.viewBox" preserveAspectRatio="xMidYMid meet"
             [attr.height]="svg.height" [attr.width]="svg.width" (click)="emitClickEvent($event)" [attr.class]="options.class">
            <defs>
                <linearGradient *ngIf="options.outerStrokeGradient" [attr.id]="svg.outerLinearGradient.id">
                    <stop offset="5%" [attr.stop-color]="svg.outerLinearGradient.colorStop1"  [attr.stop-opacity]="1"/>
                    <stop offset="95%" [attr.stop-color]="svg.outerLinearGradient.colorStop2" [attr.stop-opacity]="1"/>
                </linearGradient>
                <radialGradient *ngIf="options.backgroundGradient" [attr.id]="svg.radialGradient.id">
                    <stop offset="5%" [attr.stop-color]="svg.radialGradient.colorStop1" [attr.stop-opacity]="1"/>
                    <stop offset="95%" [attr.stop-color]="svg.radialGradient.colorStop2" [attr.stop-opacity]="1"/>
                </radialGradient>
            </defs>
            <ng-container *ngIf="options.showBackground">
                <circle *ngIf="!options.backgroundGradient"
                        [attr.cx]="svg.backgroundCircle.cx"
                        [attr.cy]="svg.backgroundCircle.cy"
                        [attr.r]="svg.backgroundCircle.r"
                        [attr.fill]="svg.backgroundCircle.fill"
                        [attr.fill-opacity]="svg.backgroundCircle.fillOpacity"
                        [attr.stroke]="svg.backgroundCircle.stroke"
                        [attr.stroke-width]="svg.backgroundCircle.strokeWidth"/>
                <circle *ngIf="options.backgroundGradient"
                        [attr.cx]="svg.backgroundCircle.cx"
                        [attr.cy]="svg.backgroundCircle.cy"
                        [attr.r]="svg.backgroundCircle.r"
                        attr.fill="url(#{{svg.radialGradient.id}})"
                        [attr.fill-opacity]="svg.backgroundCircle.fillOpacity"
                        [attr.stroke]="svg.backgroundCircle.stroke"
                        [attr.stroke-width]="svg.backgroundCircle.strokeWidth"/>
            </ng-container>            
            <circle *ngIf="options.showInnerStroke"
                    [attr.cx]="svg.circle.cx"
                    [attr.cy]="svg.circle.cy"
                    [attr.r]="svg.circle.r"
                    [attr.fill]="svg.circle.fill"
                    [attr.stroke]="svg.circle.stroke"
                    [attr.stroke-width]="svg.circle.strokeWidth"/>
            <ng-container *ngIf="+options.percent!==0 || options.showZeroOuterStroke">
                <path *ngIf="!options.outerStrokeGradient"
                        [attr.d]="svg.path.d"
                        [attr.stroke]="svg.path.stroke"
                        [attr.stroke-width]="svg.path.strokeWidth"
                        [attr.stroke-linecap]="svg.path.strokeLinecap"
                        [attr.fill]="svg.path.fill"/>
                <path *ngIf="options.outerStrokeGradient"
                        [attr.d]="svg.path.d"
                        attr.stroke="url(#{{svg.outerLinearGradient.id}})"
                        [attr.stroke-width]="svg.path.strokeWidth"
                        [attr.stroke-linecap]="svg.path.strokeLinecap"
                        [attr.fill]="svg.path.fill"/>
            </ng-container>
            <text *ngIf="!options.showImage && (options.showTitle || options.showUnits || options.showSubtitle)"
                  alignment-baseline="baseline"
                  [attr.x]="svg.circle.cx"
                  [attr.y]="svg.circle.cy"
                  [attr.text-anchor]="svg.title.textAnchor">
                <ng-container *ngIf="options.showTitle">
                    <tspan *ngFor="let tspan of svg.title.tspans"
                           [attr.x]="svg.title.x"
                           [attr.y]="svg.title.y"
                           [attr.dy]="tspan.dy"
                           [attr.font-size]="svg.title.fontSize"
                           [attr.font-weight]="svg.title.fontWeight"
                           [attr.fill]="svg.title.color">{{tspan.span}}</tspan>
                </ng-container>
                <tspan *ngIf="options.showUnits"
                       [attr.font-size]="svg.units.fontSize"
                       [attr.font-weight]="svg.units.fontWeight"
                       [attr.fill]="svg.units.color">{{svg.units.text}}</tspan>
                <ng-container *ngIf="options.showSubtitle">
                    <tspan *ngFor="let tspan of svg.subtitle.tspans"
                           [attr.x]="svg.subtitle.x"
                           [attr.y]="svg.subtitle.y"
                           [attr.dy]="tspan.dy"
                           [attr.font-size]="svg.subtitle.fontSize"
                           [attr.font-weight]="svg.subtitle.fontWeight"
                           [attr.fill]="svg.subtitle.color">{{tspan.span}}</tspan>
                </ng-container>
            </text>
            <image *ngIf="options.showImage" preserveAspectRatio="none" 
                [attr.height]="svg.image.height"
                [attr.width]="svg.image.width"
                [attr.xlink:href]="svg.image.src"
                [attr.x]="svg.image.x"
                [attr.y]="svg.image.y"
            />
        </svg>
    `
            },] }
];
CircleProgressComponent.ctorParameters = () => [
    { type: CircleProgressOptions },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
CircleProgressComponent.propDecorators = {
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundGradient: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundGradientStopColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundStroke: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundStrokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    backgroundPadding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    radius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    space: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    percent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    toFixed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxPercent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    renderOnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    units: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    unitsFontSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    unitsFontWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    unitsColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    outerStrokeGradient: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    outerStrokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    outerStrokeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    outerStrokeGradientStopColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    outerStrokeLinecap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerStrokeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerStrokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    titleFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    titleColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    titleFontSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    titleFontWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    subtitleFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    subtitleColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    subtitleFontSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    subtitleFontWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageSrc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animateTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animateSubtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animationDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showSubtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showUnits: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showBackground: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showInnerStroke: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    clockwise: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    responsive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    startFromZero: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showZeroOuterStroke: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    lazy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    templateOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['options',] }]
};

class NgCircleProgressModule {
    static forRoot(options = {}) {
        return {
            ngModule: NgCircleProgressModule,
            providers: [
                { provide: CircleProgressOptions, useValue: options }
            ]
        };
    }
}
NgCircleProgressModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [CircleProgressComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [CircleProgressComponent]
            },] }
];

/*
 * Public API Surface of ng-circle-progress
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-circle-progress.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/teachers/effective-state-report-detail-modal/effective-state-report-detail-modal.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/teachers/effective-state-report-detail-modal/effective-state-report-detail-modal.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Teachers Under {{ data.category }}</h5>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n      <span aria-hidden=\"true\" (click)=\"c('Close click')\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th>School Name</th>\n                  <th>State</th>\n                  <th>Local Government</th>\n                  <th>Teacher's Fullname</th>\n                  <th>Score</th>\n                  <th>Effectively Met</th>\n                  <th>Assessment Date</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n\n              <tbody>\n                <tr *ngFor=\"let item of assessmentSummary\">\n                  <td>\n                    <a>\n                      {{ item.schoolname }}\n                    </a>\n                  </td>\n                  <td>\n                    <a>\n                      {{ item.state }}\n                    </a>\n                  </td>\n\n                  <td>\n                    <a>\n                      {{ item.lga }}\n                    </a>\n                  </td>\n                  <td>\n                    <a\n                      [routerLink]=\"['/teachers/teacher', item.teacherid]\"\n                      routerLinkActive=\"router-link-active\"\n                    >\n                      {{ item.surname }} {{ item.othernames }}\n                    </a>\n                  </td>\n\n                  <td>{{ item.score }}%</td>\n                  <td>\n                    <mat-icon\n                      *ngIf=\"item.score_category === 'Effectively Met(60-75)'\"\n                      class=\"green-icon\"\n                      >check_circle_outline</mat-icon\n                    >\n                  </td>\n\n                  <td>{{ item.date | date: \"medium\" }}</td>\n                  <td>\n                    <a\n                      (click)=\"c()\"\n                      [routerLink]=\"['teachers/coaching-mentoring']\"\n                      [queryParams]=\"{ assesmentId: item.id }\"\n                      mat-stroked-button\n                      color=\"primary\"\n                      >View More</a\n                    >\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div *ngIf=\"loading\" class=\"d-flex justify-content-center\">\n            <mat-progress-spinner\n              class=\"example-margin\"\n              [color]=\"colorSpinner\"\n              [mode]=\"mode\"\n              [value]=\"value\"\n            >\n            </mat-progress-spinner>\n          </div>\n          <mat-paginator\n            #paginator\n            [length]=\"length\"\n            [pageSize]=\"pageSize\"\n            [pageSizeOptions]=\"pageSizeOptions\"\n            (page)=\"pageEvent = handlePageChange($event)\"\n          >\n          </mat-paginator>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/teachers/effective-state-report/effective-state-report.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/teachers/effective-state-report/effective-state-report.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row mb-2\">\n    <div class=\"col-xl-12\">\n      <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n      <kt-portlet>\n        <kt-portlet-header\n          [title]=\"'Filter Report'\"\n          [class]=\"\n            'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n          \"\n        >\n          <ng-container ktPortletTools>\n            <!-- <kt-context-menu></kt-context-menu> -->\n          </ng-container>\n        </kt-portlet-header>\n        <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n          <ng-container ktPortletTools>\n            <div class=\"container\">\n              <form (ngSubmit)=\"filterReort()\" class=\"pb-4\">\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <mat-form-field>\n                      <mat-select\n                        placeholder=\"State\"\n                        [formControl]=\"statesSelected\"\n                        (selectionChange)=\"onStateSelectionChange($event)\"\n                        multiple\n                      >\n                        <mat-select-trigger>\n                          {{\n                            statesSelected.value ? statesSelected.value[0] : \"\"\n                          }}\n                          <span\n                            *ngIf=\"statesSelected.value?.length > 1\"\n                            class=\"example-additional-selection\"\n                          >\n                            (+{{ statesSelected.value.length - 1 }} others)\n                          </span>\n                        </mat-select-trigger>\n\n                        <!-- <mat-option [value]=\"'All'\">All</mat-option> -->\n                        <mat-option\n                          *ngFor=\"let topping of states\"\n                          [value]=\"topping.name\"\n                          >{{ topping.name }}</mat-option\n                        >\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <mat-form-field>\n                      <mat-select\n                        placeholder=\"Local Government Area\"\n                        [formControl]=\"lgaSelected\"\n                        (selectionChange)=\"onlgaSelectionChange($event)\"\n                        multiple\n                      >\n                        <mat-select-trigger>\n                          {{ lgaSelected.value ? lgaSelected.value[0] : \"\" }}\n                          <span\n                            *ngIf=\"lgaSelected.value?.length > 1\"\n                            class=\"example-additional-selection\"\n                          >\n                            (+{{ lgaSelected.value.length - 1 }} others)\n                          </span>\n                        </mat-select-trigger>\n                        <!-- <mat-option [value]=\"'All'\">All</mat-option> -->\n                        <mat-option\n                          *ngFor=\"let topping of localgovernments\"\n                          [value]=\"topping.name\"\n                          >{{ topping.name }}</mat-option\n                        >\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                    <mat-form-field>\n                      <mat-select\n                        placeholder=\"School\"\n                        [formControl]=\"schoolSelected\"\n                        multiple\n                      >\n                        <mat-select-trigger>\n                          {{\n                            schoolSelected.value ? schoolSelected.value[0] : \"\"\n                          }}\n                          <span\n                            *ngIf=\"schoolSelected.value?.length > 1\"\n                            class=\"example-additional-selection\"\n                          >\n                            (+{{ schoolSelected.value.length - 1 }} others)\n                          </span>\n                        </mat-select-trigger>\n                        <!-- <mat-option [value]=\"'All'\">All</mat-option> -->\n                        <mat-option\n                          *ngFor=\"let topping of schools\"\n                          [value]=\"topping.schoolName\"\n                          >{{ topping.schoolName }}</mat-option\n                        >\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <mat-form-field appearance=\"fill\">\n                      <mat-label>Choose a date</mat-label>\n                      <input\n                        [formControl]=\"dateRange\"\n                        matInput\n                        type=\"text\"\n                        name=\"daterange\"\n                        value=\"\"\n                      />\n                    </mat-form-field>\n                  </div>\n\n                  <div class=\"px-3\">\n                    <button\n                      mat-raised-button\n                      color=\"primary\"\n                      aria-label=\"Example icon button with a home icon\"\n                    >\n                      <mat-icon>filter_list</mat-icon>\n                      Filter\n                    </button>\n                  </div>\n\n                  <div class=\"px-3\">\n                    <button\n                      mat-raised-button\n                      aria-label=\"Example icon button with a home icon\"\n                      (click)=\"resetForm($event)\"\n                    >\n                      Reset\n                    </button>\n                  </div>\n                </div>\n                <div class=\"row\"></div>\n              </form>\n            </div>\n          </ng-container>\n        </kt-portlet-body>\n      </kt-portlet>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n      <kt-portlet>\n        <kt-portlet-header\n          [title]=\"''\"\n          [class]=\"\n            'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n          \"\n        >\n          <ng-container ktPortletTools>\n            <kt-context-menu></kt-context-menu>\n          </ng-container>\n        </kt-portlet-header>\n        <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n          <ng-container ktPortletTools>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <canvas height=\"300px\" #chart></canvas>\n              </div>\n            </div>\n          </ng-container>\n        </kt-portlet-body>\n      </kt-portlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/teachers/teacher-assessment-detail/teacher-assessment-detail.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/teachers/teacher-assessment-detail/teacher-assessment-detail.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <kt-portlet class=\"py-4\">\n    <kt-portlet-header\n      [title]=\"'Coaching and Mentoring Assessment'\"\n      [class]=\"\n        'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n      \"\n    >\n      <ng-container ktPortletTools>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <button (click)=\"goBack()\" mat-button>\n              <span>Back</span>\n              <mat-icon>keyboard_arrow_right</mat-icon>\n            </button>\n          </div>\n        </div>\n      </ng-container>\n    </kt-portlet-header>\n    <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n      <ng-container ktPortletTools>\n        <div *ngIf=\"isloading === true\" class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"d-flex justify-content-center py-4\">\n              <mat-progress-spinner\n                class=\"example-margin\"\n                [color]=\"colorSpinner\"\n                [mode]=\"mode\"\n                [value]=\"value\"\n                [diameter]=\"40\"\n              >\n              </mat-progress-spinner>\n            </div>\n          </div>\n        </div>\n        <div class=\"container\">\n          <div style=\"margin-top: 20px\">\n            <h6>Summary</h6>\n            <hr />\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"d-flex justify-content-center\">\n                  <circle-progress\n                    [percent]=\"totalScore\"\n                    [radius]=\"100\"\n                    [outerStrokeWidth]=\"16\"\n                    [innerStrokeWidth]=\"8\"\n                    [outerStrokeColor]=\"'#78C000'\"\n                    [innerStrokeColor]=\"'#C7E596'\"\n                    [subtitle]=\"'Average Score'\"\n                  ></circle-progress>\n                </div>\n              </div>\n            </div>\n            <div class=\"row mt-3\">\n              <div class=\"col-md-2\"></div>\n              <div class=\"col-md-8\">\n                <div class=\"table-responsive\">\n                  <table class=\"table table-striped table-bordered\">\n                    <thead>\n                      <tr>\n                        <th>Score</th>\n                        <th>Remark</th>\n                        <th></th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>60 - 100</td>\n                        <td>Effectively Met</td>\n                        <td>\n                          <mat-icon\n                            *ngIf=\"\n                              data?.score_category === 'Effectively Met(60-75)'\n                            \"\n                            class=\"green-icon\"\n                            >check_circle_outline</mat-icon\n                          >\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>50 - 60</td>\n                        <td>Partially Met</td>\n                        <td>\n                          <mat-icon\n                            *ngIf=\"\n                              data?.score_category === 'Partially Met(50-70)'\n                            \"\n                            class=\"yellow-icon\"\n                            >check_circle_outline</mat-icon\n                          >\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>Below 50</td>\n                        <td>Not Met</td>\n                        <td>\n                          <mat-icon\n                            *ngIf=\"data?.score_category === 'Not Met(Below 50)'\"\n                            class=\"red-icon\"\n                            >check_circle_outline</mat-icon\n                          >\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n              <div class=\"col-md-2\"></div>\n            </div>\n          </div>\n          <h6>Details</h6>\n          <hr />\n          <div class=\"row px-4 mb-4\">\n            <div class=\"col-md-12\">\n              <mat-accordion class=\"example-headers-align py-2\">\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title> Lesson Plan </mat-panel-title>\n                  </mat-expansion-panel-header>\n                  <div class=\"table-responsive\">\n                    <table class=\"table table-striped table-bordered\">\n                      <thead>\n                        <tr>\n                          <th rowspan=\"3\" scope=\"col\">Standard</th>\n                          <th scope=\"col\">Criteria</th>\n                          <th scope=\"col\">Effectively Met</th>\n                          <th scope=\"col\">Partially Met</th>\n                          <th scope=\"col\">Not Met</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td class=\"align-center\" rowspan=\"4\">\n                            Availability and Use of Lesson Plan\n                          </td>\n                          <td>Teacher has lesson plan</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                lessonPlan &&\n                                lessonPlan[\n                                  'Availability and Use of Lesson Plan'\n                                ][\n                                  'Lesson objective clearly stated in measurable and achievable terms'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                lessonPlan &&\n                                lessonPlan[\n                                  'Availability and Use of Lesson Plan'\n                                ][\n                                  'Lesson objective clearly stated in measurable and achievable terms'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                lessonPlan &&\n                                lessonPlan[\n                                  'Availability and Use of Lesson Plan'\n                                ][\n                                  'Lesson objective clearly stated in measurable and achievable terms'\n                                ] === '1'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            Lesson taught corresponds with plan and scheme\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                lessonPlan &&\n                                lessonPlan[\n                                  'Availability and Use of Lesson Plan'\n                                ][\n                                  'Lesson taught corresponds with plan and scheme of work'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                lessonPlan &&\n                                lessonPlan[\n                                  'Availability and Use of Lesson Plan'\n                                ][\n                                  'Lesson taught corresponds with plan and scheme of work'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                lessonPlan &&\n                                lessonPlan[\n                                  'Availability and Use of Lesson Plan'\n                                ][\n                                  'Lesson taught corresponds with plan and scheme of work'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            Plan meets key requirements (eg. Objective,\n                            Introduction, Presentation, etc.)\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                lessonPlan &&\n                                lessonPlan[\n                                  'Availability and Use of Lesson Plan'\n                                ][\n                                  'Plan meets key requirements(e.g Objective, introduction, Presentation etc.)'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                lessonPlan &&\n                                lessonPlan[\n                                  'Availability and Use of Lesson Plan'\n                                ][\n                                  'Plan meets key requirements(e.g Objective, introduction, Presentation etc.)'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                lessonPlan &&\n                                lessonPlan[\n                                  'Availability and Use of Lesson Plan'\n                                ][\n                                  'Plan meets key requirements(e.g Objective, introduction, Presentation etc.)'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n\n                        <tr>\n                          <!-- <td rowspan=\"0\">2</td> -->\n                          <td>\n                            Lesson Objective clearly stated in measurable and\n                            achievable terms\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                lessonPlan &&\n                                lessonPlan[\n                                  'Availability and Use of Lesson Plan'\n                                ][\n                                  'Plan meets key requirements(e.g Objective, introduction, Presentation etc.)'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                lessonPlan &&\n                                lessonPlan[\n                                  'Availability and Use of Lesson Plan'\n                                ][\n                                  'Plan meets key requirements(e.g Objective, introduction, Presentation etc.)'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                lessonPlan &&\n                                lessonPlan[\n                                  'Availability and Use of Lesson Plan'\n                                ][\n                                  'Plan meets key requirements(e.g Objective, introduction, Presentation etc.)'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <h4>Remarks</h4>\n                      <div class=\"box\">\n                        <p>\n                          {{ data ? data[\"Lesson Plan\"]?.remark : \"\" }}\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n                </mat-expansion-panel>\n              </mat-accordion>\n            </div>\n          </div>\n          <div class=\"row px-4 mb-4\">\n            <div class=\"col-md-12\">\n              <mat-accordion class=\"example-headers-align py-2\">\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title> Subject Matter Mastery </mat-panel-title>\n                  </mat-expansion-panel-header>\n\n                  <div class=\"table-responsive\">\n                    <table class=\"table table-striped table-bordered\">\n                      <thead>\n                        <tr>\n                          <th scope=\"col\">Standard</th>\n                          <th scope=\"col\">Criteria</th>\n                          <th scope=\"col\">Effectively Met</th>\n                          <th scope=\"col\">Partially Met</th>\n                          <th scope=\"col\">Not Met</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td class=\"align-center\" rowspan=\"10\">\n                            Teacher Demonstrates Understanding of Key concepts\n                            and subject content\n                          </td>\n                          <td>Letter sounds</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ][\n                                  'Alphabetic recognition, reading and writing'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ][\n                                  'Alphabetic recognition, reading and writing'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ][\n                                  'Alphabetic recognition, reading and writing'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <!-- <td rowspan=\"0\">2</td> -->\n                          <td>Blending</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Blending'] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Blending'] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Blending'] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <!-- <td rowspan=\"0\">2</td> -->\n                          <td>Alphabet recognition, reading and writing</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Fluency, grammatical accuracy, etc'] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Fluency, grammatical accuracy, etc'] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Fluency, grammatical accuracy, etc'] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <!-- < rowspan=\"0\">2</td> -->\n                          <td>Phonemic Awareness</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Phonemic Awareness'] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Phonemic Awareness'] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Phonemic Awareness'] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <!-- <td rowspan=\"0\">2</td> -->\n                          <td>Vocabulary development</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Vocabulary development'] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Vocabulary development'] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Vocabulary development'] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <!-- <td rowspan=\"0\">2</td> -->\n                          <td>Word and sentence reading</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Word and sentence reading'] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Word and sentence reading'] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Word and sentence reading'] === '1'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <!-- <td rowspan=\"0\">2</td> -->\n                          <td>Reading short paragraphs</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Reading short paragraphs'] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Reading short paragraphs'] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Reading short paragraphs'] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <!-- <td rowspan=\"0\">2</td> -->\n                          <td>Writing wors, sentences and short paragraphs</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ][\n                                  'Writing words, sentences and short paragraphs'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ][\n                                  'Writing words, sentences and short paragraphs'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ][\n                                  'Writing words, sentences and short paragraphs'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <!-- <td rowspan=\"0\">2</td> -->\n                          <td>Fluency, grammatical accuracy, etc</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Fluency, grammatical accuracy, etc'] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Fluency, grammatical accuracy, etc'] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Fluency, grammatical accuracy, etc'] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <!-- <td rowspan=\"0\">2</td> -->\n                          <td>Proper spelling of words</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Proper spelling of words'] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Proper spelling of words'] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                subjectMatterMastery &&\n                                subjectMatterMastery[\n                                  'Teacher Demonstrates Understanding of key concepts and subject content'\n                                ]['Proper spelling of words'] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <h4>Remarks</h4>\n                      <div class=\"box\"></div>\n                    </div>\n                  </div>\n                </mat-expansion-panel>\n              </mat-accordion>\n            </div>\n          </div>\n          <div class=\"row px-4 mb-4\">\n            <div class=\"col-md-12\">\n              <mat-accordion class=\"example-headers-align py-2\">\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title> Teaching Methodology </mat-panel-title>\n                  </mat-expansion-panel-header>\n                  <div class=\"table-responsive\">\n                    <table class=\"table table-striped table-bordered\">\n                      <thead>\n                        <tr>\n                          <th>Standard</th>\n                          <th>Criteria</th>\n                          <th>Effectively Met</th>\n                          <th>Partially Met</th>\n                          <th>Not Met</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td class=\"align-center\" rowspan=\"2\">\n                            Lesson Introduction\n                          </td>\n                          <td>Introduction is apt, exiting and stumulating</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Introduction'][\n                                  'Introduction is apt, exciting and stimulating'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Introduction'][\n                                  'Introduction is apt, exciting and stimulating'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Introduction'][\n                                  'Introduction is apt, exciting and stimulating'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>Lesson is linked to previous lesson</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Introduction'][\n                                  'Lesson is linked to previous lesson'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Introduction'][\n                                  'Lesson is linked to previous lesson'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Introduction'][\n                                  'Lesson is linked to previous lesson'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td class=\"align-center\" rowspan=\"6\">\n                            Lesson Delivery\n                          </td>\n                          <td>Lesson Inclusive of all learners</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Delivery'][\n                                  'Lesson inclusive of all learner'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Delivery'][\n                                  'Lesson inclusive of all learner'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Delivery'][\n                                  'Lesson inclusive of all learner'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            Lesson is sequential and proceeds from known to\n                            unknown\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Delivery'][\n                                  'Lesson is sequential and proceeds from known to unknown'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Delivery'][\n                                  'Lesson is sequential and proceeds from known to unknown'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Delivery'][\n                                  'Lesson is sequential and proceeds from known to unknown'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            Teacher Organizes learners to learn in different\n                            ways (Individual, peer, group or whole class)\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Delivery'][\n                                  'Teacher organizes learners to leanr in different ways(individual, peer, group or whole class)'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Delivery'][\n                                  'Teacher organizes learners to leanr in different ways(individual, peer, group or whole class)'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Delivery'][\n                                  'Teacher organizes learners to leanr in different ways(individual, peer, group or whole class)'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            Teacher rewards/praises learners for their efforts\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Delivery'][\n                                  'Teacher rewards/praises learners for their efforts'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Delivery'][\n                                  'Teacher rewards/praises learners for their efforts'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Delivery'][\n                                  'Teacher rewards/praises learners for their efforts'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>Teacher uses variety of methods</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Delivery'][\n                                  'Teacher users variety of methods'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Delivery'][\n                                  'Teacher users variety of methods'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Delivery'][\n                                  'Teacher users variety of methods'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            Teacher moves round the classroom to provide support\n                            to all learners\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Delivery'][\n                                  'Teacher moves round the classroom to provide support to all learners'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td></td>\n                          <mat-icon\n                            *ngIf=\"\n                              teachingMethod &&\n                              teachingMethod['Lesson Delivery'][\n                                'Teacher moves round the classroom to provide support to all learners'\n                              ] === '2'\n                            \"\n                            class=\"yellow-icon\"\n                            >check_circle_outline</mat-icon\n                          >\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Lesson Delivery'][\n                                  'Teacher moves round the classroom to provide support to all learners'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td class=\"align-center\" rowspan=\"3\">\n                            Classroom management\n                          </td>\n                          <td>Orderly arrangement of the classrooom</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Classroom Management'][\n                                  'Discipline and orderliness in the classroom'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Classroom Management'][\n                                  'Discipline and orderliness in the classroom'\n                                ] === '2'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Classroom Management'][\n                                  'Discipline and orderliness in the classroom'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>Teacher discourages chorus answer</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Classroom Management'][\n                                  'Teacher discourages chorus answer'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Classroom Management'][\n                                  'Teacher discourages chorus answer'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Classroom Management'][\n                                  'Teacher discourages chorus answer'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>Discipline and orderliness in the classroom</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Classroom Management'][\n                                  'Discipline and orderliness in the classroom'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Classroom Management'][\n                                  'Discipline and orderliness in the classroom'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Classroom Management'][\n                                  'Discipline and orderliness in the classroom'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n\n                        <tr>\n                          <td class=\"align-center\" rowspan=\"3\">\n                            Time Management\n                          </td>\n                          <td>Lesson starts and ends on time</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Time Management'][\n                                  'Lesson starts and ends on time'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Time Management'][\n                                  'Lesson starts and ends on time'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Time Management'][\n                                  'Lesson starts and ends on time'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>Pace was maintained throughout the lesson</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Time Management'][\n                                  'Pace was maintained throughout the lesson'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Time Management'][\n                                  'Pace was maintained throughout the lesson'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Time Management'][\n                                  'Pace was maintained throughout the lesson'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            All Objectives and class objectives are covered\n                            within the alotted time\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Time Management'][\n                                  'All objectives and class activities are covered within the alloted time'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Time Management'][\n                                  'All objectives and class activities are covered within the alloted time'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Time Management'][\n                                  'All objectives and class activities are covered within the alloted time'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td class=\"align-center\" rowspan=\"3\">\n                            Teacher/Learner Interactions\n                          </td>\n                          <td>Teacher involves learners in the classroom</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Teacher/Learner Interaction'][\n                                  'Teacher involves learners in classroom activities'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Teacher/Learner Interaction'][\n                                  'Teacher involves learners in classroom activities'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Teacher/Learner Interaction'][\n                                  'Teacher involves learners in classroom activities'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            Ability of teacher to identify learners by name\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Teacher/Learner Interaction'][\n                                  'Ability of teachers to identify learners by name'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Teacher/Learner Interaction'][\n                                  'Ability of teachers to identify learners by name'\n                                ] === '2'\n                              \"\n                              class=\"yello-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Teacher/Learner Interaction'][\n                                  'Ability of teachers to identify learners by name'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            Teacher asks appropriate questions to elicit\n                            responses from learners\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Teacher/Learner Interaction'][\n                                  'Teacher asks appropriate questions to elicit responses from learners'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Teacher/Learner Interaction'][\n                                  'Teacher asks appropriate questions to elicit responses from learners'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Teacher/Learner Interaction'][\n                                  'Teacher asks appropriate questions to elicit responses from learners'\n                                ] === '1'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td class=\"align-center\" rowspan=\"5\">\n                            Learning Assessment(Teacher uses different ways to\n                            assess learning)\n                          </td>\n                          <td>Teacher asks more open-ended questions</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Learning Asessment(Teacher uses different ways to assess learning)'\n                                ]['Teacher asks more open-ended questions'] ===\n                                  '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Learning Asessment(Teacher uses different ways to assess learning)'\n                                ]['Teacher asks more open-ended questions'] ===\n                                  '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Learning Asessment(Teacher uses different ways to assess learning)'\n                                ]['Teacher asks more open-ended questions'] ===\n                                  '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>Teacher gives classroom/assignment regualarly</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Learning Asessment(Teacher uses different ways to assess learning)'\n                                ][\n                                  'Teacher gives classwork/assignments regularly'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Learning Asessment(Teacher uses different ways to assess learning)'\n                                ][\n                                  'Teacher gives classwork/assignments regularly'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Learning Asessment(Teacher uses different ways to assess learning)'\n                                ][\n                                  'Teacher gives classwork/assignments regularly'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            Learners work books are constructively checked and\n                            marked\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Learning Asessment(Teacher uses different ways to assess learning)'\n                                ][\n                                  'Learners work books are constructively checked and marked'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Learning Asessment(Teacher uses different ways to assess learning)'\n                                ][\n                                  'Learners work books are constructively checked and marked'\n                                ] === '2'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Learning Asessment(Teacher uses different ways to assess learning)'\n                                ][\n                                  'Learners work books are constructively checked and marked'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            Teacher provides constructive feedback to learner\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Learning Asessment(Teacher uses different ways to assess learning)'\n                                ][\n                                  'Teacher provides constructive feedback to learners'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Learning Asessment(Teacher uses different ways to assess learning)'\n                                ][\n                                  'Teacher provides constructive feedback to learners'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Learning Asessment(Teacher uses different ways to assess learning)'\n                                ][\n                                  'Teacher provides constructive feedback to learners'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            Teacher gives clas work and more around to support\n                            weak learners and assess the work\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Learning Asessment(Teacher uses different ways to assess learning)'\n                                ][\n                                  'Teacher gives class work and move around to support weak learners and assess the work'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Learning Asessment(Teacher uses different ways to assess learning)'\n                                ][\n                                  'Teacher gives class work and move around to support weak learners and assess the work'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Learning Asessment(Teacher uses different ways to assess learning)'\n                                ][\n                                  'Teacher gives class work and move around to support weak learners and assess the work'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td class=\"align-center\" rowspan=\"2\">\n                            Learners Participation\n                          </td>\n                          <td>\n                            Learners participate actively during the lesson\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Learners Participation'][\n                                  'Learners particpate actively during the lesson'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Learners Participation'][\n                                  'Learners particpate actively during the lesson'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Learners Participation'][\n                                  'Learners particpate actively during the lesson'\n                                ] === '2'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>Learners ask questions</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Learners Participation'][\n                                  'Learners ask questions'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Learners Participation'][\n                                  'Learners ask questions'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Learners Participation'][\n                                  'Learners ask questions'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td class=\"align-center\" rowspan=\"4\">\n                            Availability & Access to Textbooks/Instructional\n                            Resources\n                          </td>\n                          <td>Each learner has a textbook</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Availability & Access to Textbooks/Instructional Resources'\n                                ]['Each learner has a textbook'] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Availability & Access to Textbooks/Instructional Resources'\n                                ]['Each learner has a textbook'] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Availability & Access to Textbooks/Instructional Resources'\n                                ]['Each learner has a textbook'] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>Learners make use of their textbooks</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Availability & Access to Textbooks/Instructional Resources'\n                                ]['Learners makes use of their textbooks'] ===\n                                  '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Availability & Access to Textbooks/Instructional Resources'\n                                ]['Learners makes use of their textbooks'] ===\n                                  '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Availability & Access to Textbooks/Instructional Resources'\n                                ]['Learners makes use of their textbooks'] ===\n                                  '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            Learners have access to textbooks and other\n                            materials\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Availability & Access to Textbooks/Instructional Resources'\n                                ][\n                                  'Learners have access to textbooks and other materials'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Availability & Access to Textbooks/Instructional Resources'\n                                ][\n                                  'Learners have access to textbooks and other materials'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Availability & Access to Textbooks/Instructional Resources'\n                                ][\n                                  'Learners have access to textbooks and other materials'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            Learners have writing materials and could be seen\n                            using them\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Availability & Access to Textbooks/Instructional Resources'\n                                ][\n                                  'Learners have writing materials and could be seen using them'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Availability & Access to Textbooks/Instructional Resources'\n                                ][\n                                  'Learners have writing materials and could be seen using them'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod[\n                                  'Availability & Access to Textbooks/Instructional Resources'\n                                ][\n                                  'Learners have writing materials and could be seen using them'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td class=\"align-center\" rowspan=\"3\">Conclusion</td>\n                          <td>\n                            Teacher summarizes key points of the lesson the\n                            chalk/white board\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Conclusion'][\n                                  'Teacher summarise key points of the lesson on the chalk/white board'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Conclusion'][\n                                  'Teacher summarise key points of the lesson on the chalk/white board'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Conclusion'][\n                                  'Teacher summarise key points of the lesson on the chalk/white board'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            Teacher asks learners relevant questions to recap\n                            the lesson or check learning\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Conclusion'][\n                                  'Teacher asks learners relevant question to recap the lesson or check learning'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td></td>\n                          <mat-icon\n                            *ngIf=\"\n                              teachingMethod &&\n                              teachingMethod['Conclusion'][\n                                'Teacher asks learners relevant question to recap the lesson or check learning'\n                              ] === '2'\n                            \"\n                            class=\"yellow-icon\"\n                            >check_circle_outline</mat-icon\n                          >\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Conclusion'][\n                                  'Teacher asks learners relevant question to recap the lesson or check learning'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>Teacher gives learners homework</td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Conclusion'][\n                                  'Teacher gives learners homework'\n                                ] === '3'\n                              \"\n                              class=\"green-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Conclusion'][\n                                  'Teacher gives learners homework'\n                                ] === '2'\n                              \"\n                              class=\"yellow-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                          <td>\n                            <mat-icon\n                              *ngIf=\"\n                                teachingMethod &&\n                                teachingMethod['Conclusion'][\n                                  'Teacher gives learners homework'\n                                ] === '1'\n                              \"\n                              class=\"red-icon\"\n                              >check_circle_outline</mat-icon\n                            >\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <h4>Remarks</h4>\n                      <div class=\"box\"></div>\n                    </div>\n                  </div>\n                </mat-expansion-panel>\n              </mat-accordion>\n            </div>\n          </div>\n\n          <div style=\"margin-top: 30px\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <canvas height=\"300px\" #chart></canvas>\n              </div>\n            </div>\n          </div>\n\n          <div style=\"margin-top: 30px\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <h5 style=\"color: #000\">Areas of Improvement</h5>\n                <div class=\"box\">\n                  <p>{{ data?.areas_of_improvement }}</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <h5 style=\"color: #000\">Areas of Strength</h5>\n                <div class=\"box\">\n                  <p>{{ data?.areas_of_strength }}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div style=\"margin-top: 30px\">\n            <div class=\"row mb-3 mt-3\">\n              <div class=\"col-md-4\">\n                <h5 class=\"text-center\" style=\"color: #000\">\n                  {{ data?.teacher?.surname }} {{ data?.teacher?.othernames }}\n                </h5>\n                <hr />\n                <h5 class=\"text-center\">Name of Teacher Observed</h5>\n              </div>\n              <div class=\"col-md-4\">\n                <h5 class=\"text-center\" style=\"color: #000\">\n                  {{ data?.teacher?.phonenumber }}\n                </h5>\n                <hr />\n                <h5 class=\"text-center\">GSM Number</h5>\n              </div>\n              <div class=\"col-md-4\">\n                <h5 class=\"text-center\" style=\"color: #000\">\n                  {{ data?.date | date: \"medium\" }}\n                </h5>\n                <hr />\n                <h5 class=\"text-center\">Signature/Date</h5>\n              </div>\n            </div>\n            <div class=\"row pt-3\">\n              <div class=\"col-md-4\">\n                <h5 class=\"text-center\" style=\"color: #000\">\n                  {{ data?.mentor?.firstname }} {{ data?.mentor?.lastname }}\n                </h5>\n                <hr />\n                <h5 class=\"text-center\">Name of Mentor</h5>\n              </div>\n              <div class=\"col-md-4\">\n                <h5 class=\"text-center\" style=\"color: #000\">\n                  {{ data?.mentor?.phonenumber }}\n                </h5>\n                <hr />\n                <h5 class=\"text-center\">GSM Number</h5>\n              </div>\n              <div class=\"col-md-4\">\n                <h5 class=\"text-center\" style=\"color: #000\">\n                  {{ data?.date | date: \"medium\" }}\n                </h5>\n                <hr />\n                <h5 class=\"text-center\">Signature/Date</h5>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </kt-portlet-body>\n  </kt-portlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/teachers/teacher-modal-view/teacher-modal-view.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/teachers/teacher-modal-view/teacher-modal-view.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">\n      {{ data?.teacher?.surname }} {{ data?.teacher?.otherNames }}\n    </h5>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n      <span aria-hidden=\"true\" (click)=\"c('Close click')\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"container-fluid\">\n      <div *ngIf=\"data?.teacher?.profile_url !== null\" class=\"row\">\n        <div class=\"col-xl-12\">\n          <div class=\"image-avatar-wrapper\">\n            <img\n              class=\"image-avatar\"\n              alt=\"profile\"\n              src=\"{{ data?.teacher?.profile_url }}\"\n            />\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xl-6\">\n          <span>Surname</span>\n          <h6>{{ data?.teacher?.surname }}</h6>\n        </div>\n        <div class=\"col-xl-6\">\n          <span>Other Names</span>\n          <h6>{{ data?.teacher?.otherNames }}</h6>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xl-12\">\n          <span>School</span>\n          <h6>{{ data?.teacher?.schoolName }}</h6>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xl-12\">\n          <span>Email Address</span>\n          <h6>{{ data?.teacher?.email }}</h6>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xl-6\">\n          <span>Regsitration Number</span>\n          <h6>{{ data?.teacher?.registrationNumber }}</h6>\n        </div>\n        <div class=\"col-xl-6\">\n          <span>Qualification</span>\n          <h6>{{ data?.teacher?.qualification }}</h6>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xl-6\">\n          <span>Date of Birth</span>\n          <h6>{{ data?.teacher?.dateOfBirth | date: \"mediumDate\" }}</h6>\n        </div>\n        <div class=\"col-xl-6\">\n          <span>Subject Taught</span>\n          <h6>{{ data?.teacher?.subjectTaught }}</h6>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xl-6\">\n          <span>Contact Number</span>\n          <h6>{{ data?.teacher?.telePhoneNumber }}</h6>\n        </div>\n        <div class=\"col-xl-6\">\n          <span>Teaching Type</span>\n          <h6>{{ data?.teacher?.teachingType }}</h6>\n        </div>\n      </div>\n      <h3 class=\"mt-3\">Effectiveness Score Card</h3>\n      <hr />\n\n      <div class=\"pt-1\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Score</th>\n              <th>Effectively Met</th>\n              <th>Partially Met</th>\n              <th>Not Met</th>\n              <th>Assessment Date</th>\n              <th>Action</th>\n            </tr>\n          </thead>\n\n          <tbody>\n            <tr *ngFor=\"let item of assessmentSummary\">\n              <td>{{ item.score }}%</td>\n              <td>\n                <mat-icon\n                  *ngIf=\"item.score_category === 'Effectively Met(60-75)'\"\n                  class=\"green-icon\"\n                  >check_circle_outline</mat-icon\n                >\n              </td>\n              <td>\n                <mat-icon\n                  *ngIf=\"item.score_category === 'Partially Met(50-70)'\"\n                  class=\"yellow-icon\"\n                  >check_circle_outline</mat-icon\n                >\n              </td>\n              <td>\n                <mat-icon\n                  *ngIf=\"item.score_category === 'Not Met(Below 50)'\"\n                  class=\"red-icon\"\n                  >check_circle_outline</mat-icon\n                >\n              </td>\n              <td>{{ item.date | date: \"medium\" }}</td>\n              <td>\n                <a\n                  (click)=\"c()\"\n                  [routerLink]=\"['teachers/coaching-mentoring']\"\n                  [queryParams]=\"{ assesmentId: item.id }\"\n                  mat-stroked-button\n                  color=\"primary\"\n                  >View More</a\n                >\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <div\n          *ngIf=\"isLoadingAssessmentRecord\"\n          class=\"d-flex justify-content-center\"\n        >\n          <mat-progress-spinner\n            class=\"example-margin\"\n            [color]=\"colorSpinner\"\n            [mode]=\"mode\"\n            [value]=\"value\"\n          >\n          </mat-progress-spinner>\n        </div>\n      </div>\n\n      <mat-paginator\n        #paginator\n        [length]=\"length\"\n        [pageSize]=\"pageSize\"\n        [pageSizeOptions]=\"pageSizeOptions\"\n        (page)=\"pageEvent = handlePageChange($event)\"\n      >\n      </mat-paginator>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/teachers/teachers.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/teachers/teachers.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-2\">\n  <div class=\"col-xl-8\">\n    <mat-progress-bar\n      *ngIf=\"loadingFilterBox\"\n      mode=\"indeterminate\"\n    ></mat-progress-bar>\n    <kt-portlet>\n      <kt-portlet-header\n        [title]=\"'Filter Report'\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <!-- <kt-context-menu></kt-context-menu> -->\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <ng-container ktPortletTools>\n          <div class=\"container\">\n            <form (ngSubmit)=\"filterData()\" class=\"pb-4\">\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <mat-form-field>\n                    <mat-select\n                      placeholder=\"State\"\n                      [formControl]=\"statesSelected\"\n                      (selectionChange)=\"onStateSelectionChange($event)\"\n                      multiple\n                    >\n                      <mat-select-trigger>\n                        {{\n                          statesSelected.value ? statesSelected.value[0] : \"\"\n                        }}\n                        <span\n                          *ngIf=\"statesSelected.value?.length > 1\"\n                          class=\"example-additional-selection\"\n                        >\n                          (+{{ statesSelected.value.length - 1 }} others)\n                        </span>\n                      </mat-select-trigger>\n\n                      <!-- <mat-option [value]=\"'All'\">All</mat-option> -->\n                      <mat-option\n                        *ngFor=\"let topping of states\"\n                        [value]=\"topping.name\"\n                        >{{ topping.name }}</mat-option\n                      >\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-4\">\n                  <mat-form-field>\n                    <mat-select\n                      placeholder=\"Local Government Area\"\n                      [formControl]=\"lgaSelected\"\n                      (selectionChange)=\"onlgaSelectionChange($event)\"\n                      multiple\n                    >\n                      <mat-select-trigger>\n                        {{ lgaSelected.value ? lgaSelected.value[0] : \"\" }}\n                        <span\n                          *ngIf=\"lgaSelected.value?.length > 1\"\n                          class=\"example-additional-selection\"\n                        >\n                          (+{{ lgaSelected.value.length - 1 }} others)\n                        </span>\n                      </mat-select-trigger>\n                      <!-- <mat-option [value]=\"'All'\">All</mat-option> -->\n                      <mat-option\n                        *ngFor=\"let topping of localgovernments\"\n                        [value]=\"topping.name\"\n                        >{{ topping.name }}</mat-option\n                      >\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-4\">\n                  <mat-form-field>\n                    <mat-select\n                      placeholder=\"School\"\n                      [formControl]=\"schoolSelected\"\n                      multiple\n                    >\n                      <mat-select-trigger>\n                        {{\n                          schoolSelected.value ? schoolSelected.value[0] : \"\"\n                        }}\n                        <span\n                          *ngIf=\"schoolSelected.value?.length > 1\"\n                          class=\"example-additional-selection\"\n                        >\n                          (+{{ schoolSelected.value.length - 1 }} others)\n                        </span>\n                      </mat-select-trigger>\n                      <mat-option [value]=\"'All'\">All</mat-option>\n                      <mat-option\n                        *ngFor=\"let topping of schools\"\n                        [value]=\"topping.schoolName\"\n                        >{{ topping.schoolName }}</mat-option\n                      >\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <div class=\"px-3\">\n                    <button\n                      mat-raised-button\n                      color=\"primary\"\n                      aria-label=\"Example icon button with a home icon\"\n                    >\n                      <mat-icon>filter_list</mat-icon>\n                      Filter\n                    </button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\"></div>\n            </form>\n          </div>\n        </ng-container>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n  <div class=\"col-xl-4\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <kt-portlet>\n      <kt-portlet-header\n        [title]=\"'Total Number of Teachers'\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <kt-context-menu></kt-context-menu>\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <!-- Checkbox Column -->\n        <ng-container>\n          <div class=\"container\">\n            <div class=\"row mb-2\">\n              <div class=\"col-xl-12\">\n                <div class=\"d-flex justify-content-center align-items-center\">\n                  <h1>{{ totalCount }}</h1>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"kt-widget14__chart\" style=\"height: 150px\">\n                <canvas #chart></canvas>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xl-6\">\n                <div>\n                  <h5 class=\"\">Total Female</h5>\n                  <h1 style=\"color: #f29cb3\" class=\"text-center\">\n                    {{ totalFemale }}\n                  </h1>\n                </div>\n              </div>\n              <div class=\"col-xl-6\">\n                <div class=\"\">\n                  <div>\n                    <h5 class=\"\">Total Male</h5>\n                    <h1 style=\"color: #79c6f1\" class=\"text-center\">\n                      {{ totalMale }}\n                    </h1>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n</div>\n<div class=\"row\">\n  <div [ngClass]=\"{ 'col-xl-12': !editMode, 'col-xl-8': editMode }\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <kt-portlet>\n      <kt-portlet-header\n        [title]=\"'All Teachers'\"\n        [class]=\"\n          'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\n        \"\n      >\n        <ng-container ktPortletTools>\n          <kt-context-menu></kt-context-menu>\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"d-flex justify-content-between\">\n              <div class=\"px-3\">\n                <mat-form-field>\n                  <mat-label>Search</mat-label>\n                  <input\n                    matInput\n                    (keyup)=\"applyFilter($event)\"\n                    placeholder=\"Searching for...\"\n                    #input\n                  />\n                </mat-form-field>\n              </div>\n              <div class=\"px-3\">\n                <button\n                  mat-raised-button\n                  color=\"primary\"\n                  (click)=\"exportPDF()\"\n                  aria-label=\"Example icon button with a home icon\"\n                >\n                  <mat-icon>filter_list</mat-icon>\n                  Export PDF\n                </button>\n                <button\n                  mat-raised-button\n                  color=\"secondary\"\n                  class=\"ml-2\"\n                  (click)=\"ExportTOExcel()\"\n                  aria-label=\"Example icon button with a home icon\"\n                >\n                  <mat-icon>filter_list</mat-icon>\n                  Export Excel\n                </button>\n              </div>\n            </div>\n            <!-- <div class=\"px-3\">\n              <mat-form-field>\n                <mat-label>Filter</mat-label>\n                <input\n                  matInput\n                  (keyup)=\"applyFilter($event)\"\n                  placeholder=\"Searching for...\"\n                  #input\n                />\n              </mat-form-field>\n            </div> -->\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-4 pl-4\">\n            <div class=\"custom-file\">\n              <input\n                accept=\"application/vnd.ms-excel;application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;\"\n                type=\"file\"\n                class=\"custom-file-input\"\n                id=\"customFile\"\n              />\n              <label class=\"custom-file-label\" for=\"customFile\"\n                >Bulk Upload(Excel)</label\n              >\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <mat-table #table [dataSource]=\"dataSource\">\n              <!-- Checkbox Column -->\n              <ng-container matColumnDef=\"select\">\n                <mat-header-cell *matHeaderCellDef>\n                  <mat-checkbox\n                    (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                    [disabled]=\"true\"\n                  >\n                  </mat-checkbox>\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                  <mat-checkbox\n                    (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                    [disabled]=\"true\"\n                  >\n                  </mat-checkbox>\n                </mat-cell>\n              </ng-container>\n\n              <!-- Position Column -->\n              <ng-container matColumnDef=\"registrationNumber\">\n                <mat-header-cell *matHeaderCellDef>\n                  Registration Number\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  {{ element.registrationNumber }}\n                </mat-cell>\n              </ng-container>\n              <!-- Name Column -->\n              <ng-container matColumnDef=\"surname\">\n                <mat-header-cell *matHeaderCellDef> Surname </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  {{ element.surname }}\n                </mat-cell>\n              </ng-container>\n              <!-- Weight Column -->\n              <ng-container matColumnDef=\"otherNames\">\n                <mat-header-cell *matHeaderCellDef>\n                  Other Names\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  {{ element.otherNames }}\n                </mat-cell>\n              </ng-container>\n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"schoolName\">\n                <mat-header-cell *matHeaderCellDef> School </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  {{ element.schoolName }}\n                </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"gender\">\n                <mat-header-cell *matHeaderCellDef> Gender </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  {{ element.gender }}\n                </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"actions\">\n                <mat-header-cell *matHeaderCellDef>\n                  <!-- <mat-checkbox\n                    (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                  > -->\n                  <!-- </mat-checkbox> -->\n                  Actions\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  <!-- <mat-checkbox\n                    (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                  >\n                  </mat-checkbox> -->\n                  <a\n                    [routerLink]=\"['/teachers/teacher', element.id]\"\n                    mat-icon-button\n                    color=\"primary\"\n                    aria-label=\"Example icon button with a home icon\"\n                    (click)=\"onRowElementClick($event, element)\"\n                  >\n                    <mat-icon>visibility</mat-icon>\n                  </a>\n                </mat-cell>\n              </ng-container>\n              <mat-header-row\n                *matHeaderRowDef=\"displayedColumns\"\n              ></mat-header-row>\n              <mat-row\n                *matRowDef=\"let row; columns: displayedColumns\"\n                (click)=\"selection.toggle(row)\"\n              >\n              </mat-row>\n            </mat-table>\n            <mat-paginator\n              [pageSizeOptions]=\"[5, 10, 20]\"\n              showFirstLastButtons\n            ></mat-paginator>\n          </div>\n        </div>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div>\n  <div *ngIf=\"editMode\" class=\"col-xl-4\">\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n      <ng-container ktPortletTools>\n        <div class=\"container school-detail\">\n          <div class=\"row py-4\">\n            <div class=\"col-xl-12\">\n              <div class=\"d-flex justify-content-end\">\n                <button\n                  mat-icon-button\n                  (click)=\"closeDetailPage($event)\"\n                  color=\"accent\"\n                  aria-label=\"Example icon button with a delete icon\"\n                >\n                  <mat-icon>cancel</mat-icon>\n                </button>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"school.profile_url !== null\" class=\"row\">\n            <div class=\"col-xl-12\">\n              <div class=\"image-avatar-wrapper\">\n                <img\n                  class=\"image-avatar\"\n                  alt=\"profile\"\n                  src=\"{{ school.profile_url }}\"\n                />\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <span>Surname</span>\n              <h6>{{ school.surname }}</h6>\n            </div>\n            <div class=\"col-xl-6\">\n              <span>Other Names</span>\n              <h6>{{ school.otherNames }}</h6>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-12\">\n              <span>School</span>\n              <h6>{{ school.schoolName }}</h6>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-12\">\n              <span>Email Address</span>\n              <h6>{{ school.email }}</h6>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <span>Regsitration Number</span>\n              <h6>{{ school.registrationNumber }}</h6>\n            </div>\n            <div class=\"col-xl-6\">\n              <span>Qualification</span>\n              <h6>{{ school.qualification }}</h6>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <span>Date of Birth</span>\n              <h6>{{ school.dateOfBirth | date: \"mediumDate\" }}</h6>\n            </div>\n            <div class=\"col-xl-6\">\n              <span>Subject Taught</span>\n              <h6>{{ school.subjectTaught }}</h6>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <span>Contact Number</span>\n              <h6>{{ school.telePhoneNumber }}</h6>\n            </div>\n            <div class=\"col-xl-6\">\n              <span>Teaching Type</span>\n              <h6>{{ school.teachingType }}</h6>\n            </div>\n          </div>\n          <!-- <div class=\"row\">\n            <div class=\"col-xl-12\">\n              <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n              </agm-map>\n            </div>\n          </div> -->\n        </div>\n      </ng-container>\n    </kt-portlet>\n  </div>\n  <!-- <div class=\"col-xl-4\">\n    <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n      <kt-portlet-header [title]=\"'Authors Profit'\">\n        <ng-container ktPortletTools>\n          <kt-context-menu2></kt-context-menu2>\n        </ng-container>\n      </kt-portlet-header>\n      <kt-portlet-body>\n        <kt-widget4 [data]=\"widget4_4\">\n          <ng-template #actionTemplate let-item=\"item\">\n            <span class=\"kt-widget4__number\" [ngClass]=\"item.valueColor\">{{\n              item.value\n            }}</span>\n          </ng-template>\n        </kt-widget4>\n      </kt-portlet-body>\n    </kt-portlet>\n  </div> -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/teachers/uploadteachers/upload-teacher-component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/teachers/uploadteachers/upload-teacher-component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Bulk Upload Teachers</h5>\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n    <span aria-hidden=\"true\" (click)=\"c('Close click')\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n          <ng-container ktPortletTools>\n            <div class=\"container\">\n              <form (ngSubmit)=\"filterData()\" class=\"pb-4\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div\n                      *ngIf=\"schoolNotSelected\"\n                      class=\"alert alert-danger\"\n                      role=\"alert\"\n                    >\n                      Please select a school\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <mat-form-field>\n                      <mat-select\n                        placeholder=\"State\"\n                        [formControl]=\"statesSelected\"\n                        (selectionChange)=\"onStateSelectionChange($event)\"\n                        multiple\n                      >\n                        <mat-select-trigger>\n                          {{ statesSelected.value ? statesSelected.value[0] : \"\"\n                          }}\n                          <span\n                            *ngIf=\"statesSelected.value?.length > 1\"\n                            class=\"example-additional-selection\"\n                          >\n                            (+{{ statesSelected.value.length - 1 }} others)\n                          </span>\n                        </mat-select-trigger>\n\n                        <mat-option [value]=\"'All'\">All</mat-option>\n                        <mat-option\n                          *ngFor=\"let topping of states\"\n                          [value]=\"topping.name\"\n                          >{{ topping.name }}</mat-option\n                        >\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <mat-form-field>\n                      <mat-select\n                        placeholder=\"Local Government Area\"\n                        [formControl]=\"lgaSelected\"\n                        (selectionChange)=\"onlgaSelectionChange($event)\"\n                        multiple\n                      >\n                        <mat-select-trigger>\n                          {{ lgaSelected.value ? lgaSelected.value[0] : \"\" }}\n                          <span\n                            *ngIf=\"lgaSelected.value?.length > 1\"\n                            class=\"example-additional-selection\"\n                          >\n                            (+{{ lgaSelected.value.length - 1 }} others)\n                          </span>\n                        </mat-select-trigger>\n                        <mat-option [value]=\"'All'\">All</mat-option>\n                        <mat-option\n                          *ngFor=\"let topping of localgovernments\"\n                          [value]=\"topping.name\"\n                          >{{ topping.name }}</mat-option\n                        >\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <mat-form-field>\n                      <mat-select\n                        placeholder=\"School\"\n                        [formControl]=\"schoolSelected\"\n                      >\n                        <mat-select-trigger>\n                          {{ schoolSelected.value }}\n                        </mat-select-trigger>\n\n                        <mat-option\n                          *ngFor=\"let topping of schools\"\n                          [value]=\"topping.schoolName\"\n                          >{{ topping.schoolName }}</mat-option\n                        >\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n\n                <div class=\"row\"></div>\n              </form>\n            </div>\n          </ng-container>\n        </kt-portlet-body>\n      </div>\n    </div>\n    <div class=\"row my-5\">\n      <div class=\"col-md-12\">\n        <div class=\"html\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n    Close\n  </button>\n  <button\n    [ngClass]=\"{\n      'kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light': loading\n    }\"\n    id=\"kt_login_signin_submit\"\n    class=\"btn btn-primary btn-elevate kt-login__btn-primary\"\n    (click)=\"uploadTeachers()\"\n    type=\"button\"\n  >\n    Upload\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/views/pages/teachers/effective-state-report-detail-modal/effective-state-report-detail-modal.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/views/pages/teachers/effective-state-report-detail-modal/effective-state-report-detail-modal.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".green-icon {\n  color: #28a745 !important;\n}\n\n/* Note: If you're using an SVG icon, you should make the class target the `<svg>` element */\n\n.green-icon svg {\n  fill: #28a745 !important;\n}\n\n.yellow-icon {\n  color: #ffc107 !important;\n}\n\n/* Note: If you're using an SVG icon, you should make the class target the `<svg>` element */\n\n.yellow-icon svg {\n  fill: #ffc107 !important;\n}\n\n.red-icon {\n  color: #dc3545 !important;\n}\n\n/* Note: If you're using an SVG icon, you should make the class target the `<svg>` element */\n\n.red-icon svg {\n  fill: #dc3545 !important;\n}\n\n.mat-icon {\n  font-size: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzb251b3JhaC9Eb2N1bWVudHMvY2JjL3NjaG9vbERhc2hib2FyZC9zcmMvYXBwL3ZpZXdzL3BhZ2VzL3RlYWNoZXJzL2VmZmVjdGl2ZS1zdGF0ZS1yZXBvcnQtZGV0YWlsLW1vZGFsL2VmZmVjdGl2ZS1zdGF0ZS1yZXBvcnQtZGV0YWlsLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9wYWdlcy90ZWFjaGVycy9lZmZlY3RpdmUtc3RhdGUtcmVwb3J0LWRldGFpbC1tb2RhbC9lZmZlY3RpdmUtc3RhdGUtcmVwb3J0LWRldGFpbC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FEQ0EsNEZBQUE7O0FBQ0E7RUFDRSx3QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURBQSw0RkFBQTs7QUFDQTtFQUNFLHdCQUFBO0FDR0Y7O0FEQUE7RUFDRSx5QkFBQTtBQ0dGOztBRERBLDRGQUFBOztBQUNBO0VBQ0Usd0JBQUE7QUNJRjs7QUREQTtFQUNFLDBCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy90ZWFjaGVycy9lZmZlY3RpdmUtc3RhdGUtcmVwb3J0LWRldGFpbC1tb2RhbC9lZmZlY3RpdmUtc3RhdGUtcmVwb3J0LWRldGFpbC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmVlbi1pY29uIHtcbiAgY29sb3I6ICMyOGE3NDUgIWltcG9ydGFudDtcbn1cbi8qIE5vdGU6IElmIHlvdSdyZSB1c2luZyBhbiBTVkcgaWNvbiwgeW91IHNob3VsZCBtYWtlIHRoZSBjbGFzcyB0YXJnZXQgdGhlIGA8c3ZnPmAgZWxlbWVudCAqL1xuLmdyZWVuLWljb24gc3ZnIHtcbiAgZmlsbDogIzI4YTc0NSAhaW1wb3J0YW50O1xufVxuXG4ueWVsbG93LWljb24ge1xuICBjb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xufVxuLyogTm90ZTogSWYgeW91J3JlIHVzaW5nIGFuIFNWRyBpY29uLCB5b3Ugc2hvdWxkIG1ha2UgdGhlIGNsYXNzIHRhcmdldCB0aGUgYDxzdmc+YCBlbGVtZW50ICovXG4ueWVsbG93LWljb24gc3ZnIHtcbiAgZmlsbDogI2ZmYzEwNyAhaW1wb3J0YW50O1xufVxuXG4ucmVkLWljb24ge1xuICBjb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xufVxuLyogTm90ZTogSWYgeW91J3JlIHVzaW5nIGFuIFNWRyBpY29uLCB5b3Ugc2hvdWxkIG1ha2UgdGhlIGNsYXNzIHRhcmdldCB0aGUgYDxzdmc+YCBlbGVtZW50ICovXG4ucmVkLWljb24gc3ZnIHtcbiAgZmlsbDogI2RjMzU0NSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWljb24ge1xuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbn1cbiIsIi5ncmVlbi1pY29uIHtcbiAgY29sb3I6ICMyOGE3NDUgIWltcG9ydGFudDtcbn1cblxuLyogTm90ZTogSWYgeW91J3JlIHVzaW5nIGFuIFNWRyBpY29uLCB5b3Ugc2hvdWxkIG1ha2UgdGhlIGNsYXNzIHRhcmdldCB0aGUgYDxzdmc+YCBlbGVtZW50ICovXG4uZ3JlZW4taWNvbiBzdmcge1xuICBmaWxsOiAjMjhhNzQ1ICFpbXBvcnRhbnQ7XG59XG5cbi55ZWxsb3ctaWNvbiB7XG4gIGNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XG59XG5cbi8qIE5vdGU6IElmIHlvdSdyZSB1c2luZyBhbiBTVkcgaWNvbiwgeW91IHNob3VsZCBtYWtlIHRoZSBjbGFzcyB0YXJnZXQgdGhlIGA8c3ZnPmAgZWxlbWVudCAqL1xuLnllbGxvdy1pY29uIHN2ZyB7XG4gIGZpbGw6ICNmZmMxMDcgIWltcG9ydGFudDtcbn1cblxuLnJlZC1pY29uIHtcbiAgY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcbn1cblxuLyogTm90ZTogSWYgeW91J3JlIHVzaW5nIGFuIFNWRyBpY29uLCB5b3Ugc2hvdWxkIG1ha2UgdGhlIGNsYXNzIHRhcmdldCB0aGUgYDxzdmc+YCBlbGVtZW50ICovXG4ucmVkLWljb24gc3ZnIHtcbiAgZmlsbDogI2RjMzU0NSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWljb24ge1xuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/teachers/effective-state-report-detail-modal/effective-state-report-detail-modal.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/views/pages/teachers/effective-state-report-detail-modal/effective-state-report-detail-modal.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: EffectiveStateReportDetailModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectiveStateReportDetailModalComponent", function() { return EffectiveStateReportDetailModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _teachers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../teachers.service */ "./src/app/views/pages/teachers/teachers.service.ts");





var EffectiveStateReportDetailModalComponent = /** @class */ (function () {
    function EffectiveStateReportDetailModalComponent(data, teacherService, route, changeDetectRef, dialogRef) {
        this.data = data;
        this.teacherService = teacherService;
        this.route = route;
        this.changeDetectRef = changeDetectRef;
        this.dialogRef = dialogRef;
        this.length = 1000;
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.pageIndex = 0;
        this.colorSpinner = 'primary';
        this.mode = 'indeterminate';
        this.value = 40;
        this.loading = false;
        this.assessmentSummary = [];
        this.dataBase = [];
    }
    EffectiveStateReportDetailModalComponent.prototype.ngOnInit = function () {
        this.getReportDetail();
    };
    EffectiveStateReportDetailModalComponent.prototype.getReportDetail = function () {
        var _this = this;
        var _a = this.data, category = _a.category, state = _a.state, lga = _a.lga, endDate = _a.endDate, startDate = _a.startDate, school = _a.school;
        this.loading = true;
        this.teacherService
            .getCoachingReportByStateDrillDownCategory(category, state, lga, endDate, startDate, school)
            .subscribe(function (response) {
            _this.loading = false;
            console.log(response);
            _this.dataBase = response.data;
            _this.assessmentSummary = response.data.slice(0, _this.pageSize);
            _this.length = _this.dataBase.length;
            console.log('this summary: ', _this.assessmentSummary);
            _this.changeDetectRef.detectChanges();
        }, function (error) {
            _this.loading = false;
            console.log(error);
        });
    };
    EffectiveStateReportDetailModalComponent.prototype.handlePageChange = function (event) {
        console.log('event: ', event);
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        if (event.pageIndex > this.previousPageIndex) {
            // fetch online record
            this.previousPageIndex = event.previousPageIndex;
        }
    };
    EffectiveStateReportDetailModalComponent.prototype.c = function (data) {
        if (!data) {
            // this.appService.assessment.next(this.)
        }
        this.dialogRef.close(data);
    };
    EffectiveStateReportDetailModalComponent.prototype.closeModal = function (data) {
        this.dialogRef.close(data);
    };
    EffectiveStateReportDetailModalComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _teachers_service__WEBPACK_IMPORTED_MODULE_4__["TeachersService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
    ]; };
    EffectiveStateReportDetailModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-effective-state-report-detail-modal',
            template: __webpack_require__(/*! raw-loader!./effective-state-report-detail-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/teachers/effective-state-report-detail-modal/effective-state-report-detail-modal.component.html"),
            styles: [__webpack_require__(/*! ./effective-state-report-detail-modal.component.scss */ "./src/app/views/pages/teachers/effective-state-report-detail-modal/effective-state-report-detail-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _teachers_service__WEBPACK_IMPORTED_MODULE_4__["TeachersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], EffectiveStateReportDetailModalComponent);
    return EffectiveStateReportDetailModalComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/teachers/effective-state-report/effective-state-report.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/teachers/effective-state-report/effective-state-report.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzb251b3JhaC9Eb2N1bWVudHMvY2JjL3NjaG9vbERhc2hib2FyZC9zcmMvYXBwL3ZpZXdzL3BhZ2VzL3RlYWNoZXJzL2VmZmVjdGl2ZS1zdGF0ZS1yZXBvcnQvZWZmZWN0aXZlLXN0YXRlLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvcGFnZXMvdGVhY2hlcnMvZWZmZWN0aXZlLXN0YXRlLXJlcG9ydC9lZmZlY3RpdmUtc3RhdGUtcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3RlYWNoZXJzL2VmZmVjdGl2ZS1zdGF0ZS1yZXBvcnQvZWZmZWN0aXZlLXN0YXRlLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4iLCIubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/teachers/effective-state-report/effective-state-report.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/teachers/effective-state-report/effective-state-report.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: EffectiveStateReportComponent, ReportType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectiveStateReportComponent", function() { return EffectiveStateReportComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportType", function() { return ReportType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/dist/Chart.min.js */ "./node_modules/chart.js/dist/Chart.min.js");
/* harmony import */ var chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/app-service/app-service.service */ "./src/app/views/services/app-service/app-service.service.ts");
/* harmony import */ var _teachers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../teachers.service */ "./src/app/views/pages/teachers/teachers.service.ts");
/* harmony import */ var _schools_schools_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../schools/schools.service */ "./src/app/views/pages/schools/schools.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _effective_state_report_detail_modal_effective_state_report_detail_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../effective-state-report-detail-modal/effective-state-report-detail-modal.component */ "./src/app/views/pages/teachers/effective-state-report-detail-modal/effective-state-report-detail-modal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");












var $ = window['$'];
var moment = window['moment'];
var EffectiveStateReportComponent = /** @class */ (function () {
    function EffectiveStateReportComponent(teacherService, schoolService, appService, layoutConfigService, dialog, router, route, changeDetectRef, location) {
        this.teacherService = teacherService;
        this.schoolService = schoolService;
        this.appService = appService;
        this.layoutConfigService = layoutConfigService;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.changeDetectRef = changeDetectRef;
        this.location = location;
        this.statesSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([]));
        this.lgaSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([]));
        this.schoolSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([]));
        this.states = [];
        this.localgovernments = [];
        this.schools = [];
        this.schoolDataBase = [];
        this.color = chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers.color;
        this.dateRange = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.data = {
            labels: [
                'Effectively Met( 60 and Above )',
                'Partially Met(50-60)',
                'Not Met(Below 50)',
            ],
            datasets: [
                {
                    barPercentage: 0.5,
                    fill: true,
                    // borderWidth: 0,
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(120, 162, 235, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                    ],
                    // borderColor: this.color(
                    //   this.layoutConfigService.getConfig('colors.state.brand')
                    // )
                    //   .alpha(0)
                    //   .rgbString(),
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 12,
                    pointBackgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers
                        .color('#000000')
                        .alpha(0)
                        .rgbString(),
                    pointBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                    pointHoverBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers
                        .color('#000000')
                        .alpha(0.1)
                        .rgbString(),
                    data: [0, 0, 0],
                },
            ],
        };
        this.loading = false;
        this.barChartData = {
            labels: ['Effectively Met', 'Partially Met', 'Not Met'],
            datasets: [
                {
                    label: 'Lesson Plan',
                    borderColor: this.layoutConfigService.getConfig('colors.state.brand'),
                    fill: false,
                    borderWidth: 2,
                    backgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers
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
                    pointBackgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers
                        .color('#000000')
                        .alpha(0)
                        .rgbString(),
                    pointBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                    pointHoverBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers
                        .color('#000000')
                        .alpha(0.1)
                        .rgbString(),
                    data: [0],
                },
                {
                    label: 'Subject Matter Mastery',
                    fill: false,
                    borderWidth: 2,
                    backgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers
                        .color(this.layoutConfigService.getConfig('colors.state.brand'))
                        .alpha(0.2)
                        .rgbString(),
                    borderColor: this.layoutConfigService.getConfig('colors.state.danger'),
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 12,
                    pointBackgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers
                        .color('#000000')
                        .alpha(0)
                        .rgbString(),
                    pointBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                    pointHoverBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers
                        .color('#000000')
                        .alpha(0.1)
                        .rgbString(),
                    data: [0, 0],
                },
                {
                    label: 'Teaching Methodology',
                    fill: false,
                    borderWidth: 2,
                    backgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers
                        .color(this.layoutConfigService.getConfig('colors.state.brand'))
                        .alpha(0.2)
                        .rgbString(),
                    borderColor: this.layoutConfigService.getConfig('colors.state.danger'),
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 12,
                    pointBackgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers
                        .color('#000000')
                        .alpha(0)
                        .rgbString(),
                    pointBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                    pointHoverBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers
                        .color('#000000')
                        .alpha(0.1)
                        .rgbString(),
                    data: [10, 20, 30],
                },
            ],
        };
    }
    EffectiveStateReportComponent.prototype.ngOnInit = function () {
        this.getUserAccessibleState();
        this.getUserAccessibleLocals();
        this.initChartJS();
        this.initialDatePicker();
        this.listenToRouteChange();
        this.getSchools();
        // document.addEventListener('mousemove', this.getCursorXY);
    };
    EffectiveStateReportComponent.prototype.ngOnDestroy = function () {
        // document.removeEventListener('mousemove', this.getCursorXY);
    };
    EffectiveStateReportComponent.prototype.getSchools = function () {
        var _this = this;
        this.loading = true;
        this.schoolService.getSchools().subscribe(function (data) {
            _this.schools = data;
            _this.schoolDataBase = data;
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            console.log(error);
        });
    };
    EffectiveStateReportComponent.prototype.resetForm = function (event) {
        event.preventDefault();
        if (this.schoolSelected.value.length > 0 ||
            this.lgaSelected.value.length > 0 ||
            this.statesSelected.value.length > 0) {
            this.location.back();
            this.chartUI.data = {
                labels: [
                    'Effectively Met( 60 and Above )',
                    'Partially Met(50-60)',
                    'Not Met(Below 50)',
                ],
                datasets: [
                    {
                        barPercentage: 0.8,
                        fill: true,
                        // borderWidth: 0,
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(120, 162, 235, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                        ],
                        borderColor: this.color(this.layoutConfigService.getConfig('colors.state.brand'))
                            .alpha(0)
                            .rgbString(),
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 12,
                        pointBackgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers
                            .color('#000000')
                            .alpha(0)
                            .rgbString(),
                        pointBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers
                            .color('#000000')
                            .alpha(0)
                            .rgbString(),
                        pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                        pointHoverBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers
                            .color('#000000')
                            .alpha(0.1)
                            .rgbString(),
                        data: [0, 0, 0],
                    },
                ],
            };
            this.chartUI.update();
            // this.changeDetectRef.detectChanges();
        }
    };
    EffectiveStateReportComponent.prototype.listenToRouteChange = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (data) {
            var state = data.state, lga = data.lga, endDate = data.endDate, startDate = data.startDate, school = data.school;
            _this.state = state;
            _this.lga = lga;
            _this.endDate = endDate;
            _this.startDate = startDate;
            _this.school = school;
            _this.loading = true;
            if (state) {
                _this.statesSelected.setValue(state.split(','));
            }
            else {
                _this.statesSelected.setValue([]);
            }
            if (lga) {
                _this.lgaSelected.setValue(state.split(','));
            }
            else {
                _this.lgaSelected.setValue([]);
            }
            if (startDate && endDate) {
                _this.dateRange.setValue(startDate + " to " + endDate);
            }
            else {
                _this.dateRange.setValue('');
            }
            if (school) {
                _this.schoolSelected.setValue(school.split('_'));
            }
            else {
                _this.schoolSelected.setValue([]);
            }
            _this.teacherService
                .getCoachingReportByState(state, lga, endDate, startDate, school)
                .subscribe(function (data) {
                _this.loading = false;
                console.log(data);
                if (data.length > 0) {
                    _this.chartUI.data = {
                        labels: [
                            'Effectively Met( 60 and Above )',
                            'Partially Met(50-60)',
                            'Not Met(Below 50)',
                        ],
                        datasets: [
                            {
                                barPercentage: 0.8,
                                fill: true,
                                // borderWidth: 0,
                                backgroundColor: [
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(120, 162, 235, 0.6)',
                                    'rgba(255, 99, 132, 0.6)',
                                ],
                                borderColor: _this.color(_this.layoutConfigService.getConfig('colors.state.brand'))
                                    .alpha(0)
                                    .rgbString(),
                                pointHoverRadius: 4,
                                pointHoverBorderWidth: 12,
                                pointBackgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers
                                    .color('#000000')
                                    .alpha(0)
                                    .rgbString(),
                                pointBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers
                                    .color('#000000')
                                    .alpha(0)
                                    .rgbString(),
                                pointHoverBackgroundColor: _this.layoutConfigService.getConfig('colors.state.brand'),
                                pointHoverBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].helpers
                                    .color('#000000')
                                    .alpha(0.1)
                                    .rgbString(),
                                data: [data[0].count, data[2].count, data[1].count],
                            },
                        ],
                    };
                    _this.chartUI.update();
                }
                _this.changeDetectRef.detectChanges();
            }, function (error) {
                _this.loading = false;
                console.log(error);
            });
        });
    };
    EffectiveStateReportComponent.prototype.onStateSelectionChange = function (event) {
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
    EffectiveStateReportComponent.prototype.getUserAccessibleLocals = function (states) {
        if (states === void 0) { states = []; }
        this.localgovernments = this.appService.getLocalGovernments(states);
    };
    EffectiveStateReportComponent.prototype.getUserAccessibleState = function () {
        this.states = this.appService.getStates(this.appService.getUserStateAccess());
    };
    EffectiveStateReportComponent.prototype.onlgaSelectionChange = function (event) {
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
    EffectiveStateReportComponent.prototype.filterReort = function () {
        if (this.dateRange.value.trim() !== '' &&
            this.statesSelected.value.length > 0 &&
            this.schoolSelected.value.length > 0 &&
            this.lgaSelected.value.length > 0) {
            this.router.navigate(['/teachers', 'effectiveness-report-by-state'], {
                queryParams: {
                    state: this.statesSelected.value.join(','),
                    lga: this.lgaSelected.value.join(','),
                    startDate: this.dateRange.value.split('to')[0].trim(),
                    endDate: this.dateRange.value.split('to')[1].trim(),
                    school: this.schoolSelected.value.join('_'),
                },
            });
        }
        else if (this.dateRange.value.trim() === '' &&
            this.statesSelected.value.length > 0 &&
            this.lgaSelected.value.length > 0 &&
            this.schoolSelected.value.length > 0) {
            this.router.navigate(['/teachers', 'effectiveness-report-by-state'], {
                queryParams: {
                    state: this.statesSelected.value.join(','),
                    lga: this.lgaSelected.value.join(','),
                    school: this.schoolSelected.value.join('_'),
                },
            });
        }
        else if (this.dateRange.value.trim() === '' &&
            this.statesSelected.value.length > 0 &&
            this.lgaSelected.value.length === 0) {
            this.router.navigate(['/teachers', 'effectiveness-report-by-state'], {
                queryParams: {
                    state: this.statesSelected.value.join(','),
                },
            });
        }
        else if (this.dateRange.value.trim() === '' &&
            this.statesSelected.value.length === 0 &&
            this.lgaSelected.value.length > 0) {
            this.router.navigate(['/teachers', 'effectiveness-report-by-state'], {
                queryParams: {
                    lga: this.lgaSelected.value.join(','),
                },
            });
        }
        else if (this.dateRange.value.trim() === '' &&
            this.statesSelected.value.length === 0 &&
            this.lgaSelected.value.length === 0 &&
            this.schoolSelected.value.length > 0) {
            this.router.navigate(['/teachers', 'effectiveness-report-by-state'], {
                queryParams: {
                    school: this.schoolSelected.value.join('_'),
                },
            });
        }
    };
    EffectiveStateReportComponent.prototype.initChartJS = function () {
        // For more information about the chartjs, visit this link
        // https://www.chartjs.org/docs/latest/getting-started/usage.html
        var $this = this;
        this.chartUI = new chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.chart.nativeElement, {
            type: 'bar',
            data: this.data,
            options: {
                indexAxis: 'y',
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
                barRadius: 2,
                scales: {
                    xAxes: [
                        {
                            display: true,
                            // gridLines: true,
                            stacked: true,
                            gridLines: {
                                color: 'rgba(0, 0, 0, 0)',
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            stacked: true,
                            // gridLines: true,
                            gridLines: {
                                color: 'rgba(0, 0, 0, 0)',
                            },
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
                events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
            },
            plugins: [
                {
                    id: 'myEventCatcher',
                    beforeEvent: function (chart, args, pluginOptions) {
                        var event = args;
                        if (event.type === 'click') {
                            // process the event
                            console.log(chart);
                            var activeElement = chart.getElementAtEvent(event);
                            if (activeElement[0]['_model'].label ===
                                'Effectively Met( 60 and Above )') {
                                $this.getReportDetail(ReportType.Effectively_Met);
                            }
                            else if (activeElement[0]['_model'].label === 'Partially Met(50-60)') {
                                $this.getReportDetail(ReportType.Partially_Met);
                            }
                            else {
                                $this.getReportDetail(activeElement[0]['_model'].label);
                            }
                        }
                    },
                },
            ],
        });
    };
    EffectiveStateReportComponent.prototype.initialDatePicker = function () {
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
    EffectiveStateReportComponent.prototype.getReportDetail = function (reportType) {
        var dialogRef = this.dialog.open(_effective_state_report_detail_modal_effective_state_report_detail_modal_component__WEBPACK_IMPORTED_MODULE_9__["EffectiveStateReportDetailModalComponent"], {
            maxWidth: '90vw',
            minWidth: '60vw',
            data: {
                category: reportType,
                state: this.state,
                lga: this.lga,
                startDate: this.startDate,
                endDate: this.endDate,
                school: this.school,
            },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("D");
        });
    };
    EffectiveStateReportComponent.ctorParameters = function () { return [
        { type: _teachers_service__WEBPACK_IMPORTED_MODULE_6__["TeachersService"] },
        { type: _schools_schools_service__WEBPACK_IMPORTED_MODULE_7__["SchoolsService"] },
        { type: _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_5__["AppServiceService"] },
        { type: app_core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EffectiveStateReportComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EffectiveStateReportComponent.prototype, "barChartData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EffectiveStateReportComponent.prototype, "chart", void 0);
    EffectiveStateReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-effective-state-report',
            template: __webpack_require__(/*! raw-loader!./effective-state-report.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/teachers/effective-state-report/effective-state-report.component.html"),
            styles: [__webpack_require__(/*! ./effective-state-report.component.scss */ "./src/app/views/pages/teachers/effective-state-report/effective-state-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_teachers_service__WEBPACK_IMPORTED_MODULE_6__["TeachersService"],
            _schools_schools_service__WEBPACK_IMPORTED_MODULE_7__["SchoolsService"],
            _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_5__["AppServiceService"],
            app_core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]])
    ], EffectiveStateReportComponent);
    return EffectiveStateReportComponent;
}());

var ReportType;
(function (ReportType) {
    ReportType["Effectively_Met"] = "Effectively Met(60-75)";
    ReportType["Partially_Met"] = "Partially Met(50-70)";
    ReportType["Not_Met"] = "Not Met(Below 50)";
})(ReportType || (ReportType = {}));


/***/ }),

/***/ "./src/app/views/pages/teachers/teacher-assessment-detail/teacher-assessment-detail.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/pages/teachers/teacher-assessment-detail/teacher-assessment-detail.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".align-center {\n  vertical-align: middle;\n  text-align: center;\n}\n\n.box {\n  width: 100%;\n  padding: 20px 16px;\n  background-color: #f7f8fa;\n  border-radius: 10px;\n}\n\n.green-icon {\n  color: #28a745 !important;\n}\n\n/* Note: If you're using an SVG icon, you should make the class target the `<svg>` element */\n\n.green-icon svg {\n  fill: #28a745 !important;\n}\n\n.yellow-icon {\n  color: #ffc107 !important;\n}\n\n/* Note: If you're using an SVG icon, you should make the class target the `<svg>` element */\n\n.yellow-icon svg {\n  fill: #ffc107 !important;\n}\n\n.red-icon {\n  color: #dc3545 !important;\n}\n\n/* Note: If you're using an SVG icon, you should make the class target the `<svg>` element */\n\n.red-icon svg {\n  fill: #dc3545 !important;\n}\n\n.mat-icon {\n  font-size: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzb251b3JhaC9Eb2N1bWVudHMvY2JjL3NjaG9vbERhc2hib2FyZC9zcmMvYXBwL3ZpZXdzL3BhZ2VzL3RlYWNoZXJzL3RlYWNoZXItYXNzZXNzbWVudC1kZXRhaWwvdGVhY2hlci1hc3Nlc3NtZW50LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvcGFnZXMvdGVhY2hlcnMvdGVhY2hlci1hc3Nlc3NtZW50LWRldGFpbC90ZWFjaGVyLWFzc2Vzc21lbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURDQSw0RkFBQTs7QUFDQTtFQUNFLHdCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBREFBLDRGQUFBOztBQUNBO0VBQ0Usd0JBQUE7QUNHRjs7QURBQTtFQUNFLHlCQUFBO0FDR0Y7O0FEREEsNEZBQUE7O0FBQ0E7RUFDRSx3QkFBQTtBQ0lGOztBRERBO0VBQ0UsMEJBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3RlYWNoZXJzL3RlYWNoZXItYXNzZXNzbWVudC1kZXRhaWwvdGVhY2hlci1hc3Nlc3NtZW50LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGlnbi1jZW50ZXIge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweCAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZhO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZ3JlZW4taWNvbiB7XG4gIGNvbG9yOiAjMjhhNzQ1ICFpbXBvcnRhbnQ7XG59XG4vKiBOb3RlOiBJZiB5b3UncmUgdXNpbmcgYW4gU1ZHIGljb24sIHlvdSBzaG91bGQgbWFrZSB0aGUgY2xhc3MgdGFyZ2V0IHRoZSBgPHN2Zz5gIGVsZW1lbnQgKi9cbi5ncmVlbi1pY29uIHN2ZyB7XG4gIGZpbGw6ICMyOGE3NDUgIWltcG9ydGFudDtcbn1cblxuLnllbGxvdy1pY29uIHtcbiAgY29sb3I6ICNmZmMxMDcgIWltcG9ydGFudDtcbn1cbi8qIE5vdGU6IElmIHlvdSdyZSB1c2luZyBhbiBTVkcgaWNvbiwgeW91IHNob3VsZCBtYWtlIHRoZSBjbGFzcyB0YXJnZXQgdGhlIGA8c3ZnPmAgZWxlbWVudCAqL1xuLnllbGxvdy1pY29uIHN2ZyB7XG4gIGZpbGw6ICNmZmMxMDcgIWltcG9ydGFudDtcbn1cblxuLnJlZC1pY29uIHtcbiAgY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcbn1cbi8qIE5vdGU6IElmIHlvdSdyZSB1c2luZyBhbiBTVkcgaWNvbiwgeW91IHNob3VsZCBtYWtlIHRoZSBjbGFzcyB0YXJnZXQgdGhlIGA8c3ZnPmAgZWxlbWVudCAqL1xuLnJlZC1pY29uIHN2ZyB7XG4gIGZpbGw6ICNkYzM1NDUgIWltcG9ydGFudDtcbn1cblxuLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG4iLCIuYWxpZ24tY2VudGVyIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHggMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmYTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmdyZWVuLWljb24ge1xuICBjb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50O1xufVxuXG4vKiBOb3RlOiBJZiB5b3UncmUgdXNpbmcgYW4gU1ZHIGljb24sIHlvdSBzaG91bGQgbWFrZSB0aGUgY2xhc3MgdGFyZ2V0IHRoZSBgPHN2Zz5gIGVsZW1lbnQgKi9cbi5ncmVlbi1pY29uIHN2ZyB7XG4gIGZpbGw6ICMyOGE3NDUgIWltcG9ydGFudDtcbn1cblxuLnllbGxvdy1pY29uIHtcbiAgY29sb3I6ICNmZmMxMDcgIWltcG9ydGFudDtcbn1cblxuLyogTm90ZTogSWYgeW91J3JlIHVzaW5nIGFuIFNWRyBpY29uLCB5b3Ugc2hvdWxkIG1ha2UgdGhlIGNsYXNzIHRhcmdldCB0aGUgYDxzdmc+YCBlbGVtZW50ICovXG4ueWVsbG93LWljb24gc3ZnIHtcbiAgZmlsbDogI2ZmYzEwNyAhaW1wb3J0YW50O1xufVxuXG4ucmVkLWljb24ge1xuICBjb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xufVxuXG4vKiBOb3RlOiBJZiB5b3UncmUgdXNpbmcgYW4gU1ZHIGljb24sIHlvdSBzaG91bGQgbWFrZSB0aGUgY2xhc3MgdGFyZ2V0IHRoZSBgPHN2Zz5gIGVsZW1lbnQgKi9cbi5yZWQtaWNvbiBzdmcge1xuICBmaWxsOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/teachers/teacher-assessment-detail/teacher-assessment-detail.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/pages/teachers/teacher-assessment-detail/teacher-assessment-detail.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: TeacherAssessmentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherAssessmentDetailComponent", function() { return TeacherAssessmentDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _teachers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../teachers.service */ "./src/app/views/pages/teachers/teachers.service.ts");
/* harmony import */ var chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js/dist/Chart.min.js */ "./node_modules/chart.js/dist/Chart.min.js");
/* harmony import */ var chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_core_base_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/core/_base/layout */ "./src/app/core/_base/layout/index.ts");







var TeacherAssessmentDetailComponent = /** @class */ (function () {
    function TeacherAssessmentDetailComponent(location, route, teacherService, changeDetectRef, layoutConfigService) {
        this.location = location;
        this.route = route;
        this.teacherService = teacherService;
        this.changeDetectRef = changeDetectRef;
        this.layoutConfigService = layoutConfigService;
        this.isloading = false;
        this.mode = 'indeterminate';
        this.value = 40;
        this.colorSpinner = 'primary';
        this.totalScore = 0;
        this.barChartData = {
            labels: ['Lesson Plan', 'Subject Matter Mastery', 'Teaching Methodology'],
            datasets: [
                {
                    label: 'Lesson Plan',
                    borderColor: this.layoutConfigService.getConfig('colors.state.brand'),
                    fill: false,
                    borderWidth: 2,
                    backgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_5__["Chart"].helpers
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
                    pointBackgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_5__["Chart"].helpers
                        .color('#000000')
                        .alpha(0)
                        .rgbString(),
                    pointBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_5__["Chart"].helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                    pointHoverBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_5__["Chart"].helpers
                        .color('#000000')
                        .alpha(0.1)
                        .rgbString(),
                    data: [0],
                },
                {
                    label: 'Subject Matter Mastery',
                    fill: false,
                    borderWidth: 2,
                    backgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_5__["Chart"].helpers
                        .color(this.layoutConfigService.getConfig('colors.state.brand'))
                        .alpha(0.2)
                        .rgbString(),
                    borderColor: this.layoutConfigService.getConfig('colors.state.danger'),
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 12,
                    pointBackgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_5__["Chart"].helpers
                        .color('#000000')
                        .alpha(0)
                        .rgbString(),
                    pointBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_5__["Chart"].helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                    pointHoverBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_5__["Chart"].helpers
                        .color('#000000')
                        .alpha(0.1)
                        .rgbString(),
                    data: [0, 0],
                },
                {
                    label: 'Teaching Methodology',
                    fill: false,
                    borderWidth: 2,
                    backgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_5__["Chart"].helpers
                        .color(this.layoutConfigService.getConfig('colors.state.brand'))
                        .alpha(0.2)
                        .rgbString(),
                    borderColor: this.layoutConfigService.getConfig('colors.state.danger'),
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 12,
                    pointBackgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_5__["Chart"].helpers
                        .color('#000000')
                        .alpha(0)
                        .rgbString(),
                    pointBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_5__["Chart"].helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                    pointHoverBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_5__["Chart"].helpers
                        .color('#000000')
                        .alpha(0.1)
                        .rgbString(),
                    data: [0, 0],
                },
            ],
        };
        this.color = chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_5__["Chart"].helpers.color;
    }
    TeacherAssessmentDetailComponent.prototype.ngOnInit = function () {
        this.initChartJS();
        this.listenForRouteChange();
    };
    TeacherAssessmentDetailComponent.prototype.listenForRouteChange = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var assesmentId = params.assesmentId;
            _this.isloading = true;
            _this.teacherService
                .getCoachingAssessmentByID(Number(assesmentId))
                .subscribe(function (data) {
                console.log('data: ', data);
                _this.lessonPlan = data['Lesson Plan'];
                _this.subjectMatterMastery = data['Subject Matter Mastery'];
                _this.teachingMethod = data['Teaching Method'];
                _this.data = data;
                _this.totalScore = parseInt(data.score);
                console.log('total score: ', _this.totalScore);
                _this.isloading = false;
                _this.chartUI.data = {
                    labels: [
                        'Lesson Plan',
                        'Subject Matter Mastery',
                        'Teaching Methodology',
                    ],
                    datasets: [
                        {
                            fill: true,
                            // borderWidth: 0,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(120, 162, 235, 0.6)',
                            ],
                            borderColor: _this.color(_this.layoutConfigService.getConfig('colors.state.brand'))
                                .alpha(0)
                                .rgbString(),
                            pointHoverRadius: 4,
                            pointHoverBorderWidth: 12,
                            pointBackgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_5__["Chart"].helpers
                                .color('#000000')
                                .alpha(0)
                                .rgbString(),
                            pointBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_5__["Chart"].helpers
                                .color('#000000')
                                .alpha(0)
                                .rgbString(),
                            pointHoverBackgroundColor: _this.layoutConfigService.getConfig('colors.state.brand'),
                            pointHoverBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_5__["Chart"].helpers
                                .color('#000000')
                                .alpha(0.1)
                                .rgbString(),
                            data: [
                                _this.lessonPlan.score,
                                _this.subjectMatterMastery.score,
                                _this.teachingMethod.score,
                            ],
                        },
                    ],
                };
                _this.chartUI.update();
                _this.changeDetectRef.detectChanges();
            }, function (error) {
                _this.isloading = false;
                _this.changeDetectRef.detectChanges();
            });
        });
    };
    TeacherAssessmentDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    TeacherAssessmentDetailComponent.prototype.initChartJS = function () {
        // For more information about the chartjs, visit this link
        // https://www.chartjs.org/docs/latest/getting-started/usage.html
        this.chartUI = new chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](this.chart.nativeElement, {
            type: 'bar',
            data: this.barChartData,
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
    TeacherAssessmentDetailComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _teachers_service__WEBPACK_IMPORTED_MODULE_4__["TeachersService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_core_base_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutConfigService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeacherAssessmentDetailComponent.prototype, "barChartData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chart', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], TeacherAssessmentDetailComponent.prototype, "chart", void 0);
    TeacherAssessmentDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'kt-teacher-assessment-detail',
            template: __webpack_require__(/*! raw-loader!./teacher-assessment-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/teachers/teacher-assessment-detail/teacher-assessment-detail.component.html"),
            styles: [__webpack_require__(/*! ./teacher-assessment-detail.component.scss */ "./src/app/views/pages/teachers/teacher-assessment-detail/teacher-assessment-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _teachers_service__WEBPACK_IMPORTED_MODULE_4__["TeachersService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            app_core_base_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutConfigService"]])
    ], TeacherAssessmentDetailComponent);
    return TeacherAssessmentDetailComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/teachers/teacher-modal-view/teacher-modal-view.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/teachers/teacher-modal-view/teacher-modal-view.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".green-icon {\n  color: #28a745 !important;\n}\n\n/* Note: If you're using an SVG icon, you should make the class target the `<svg>` element */\n\n.green-icon svg {\n  fill: #28a745 !important;\n}\n\n.yellow-icon {\n  color: #ffc107 !important;\n}\n\n/* Note: If you're using an SVG icon, you should make the class target the `<svg>` element */\n\n.yellow-icon svg {\n  fill: #ffc107 !important;\n}\n\n.red-icon {\n  color: #dc3545 !important;\n}\n\n/* Note: If you're using an SVG icon, you should make the class target the `<svg>` element */\n\n.red-icon svg {\n  fill: #dc3545 !important;\n}\n\n.mat-icon {\n  font-size: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzb251b3JhaC9Eb2N1bWVudHMvY2JjL3NjaG9vbERhc2hib2FyZC9zcmMvYXBwL3ZpZXdzL3BhZ2VzL3RlYWNoZXJzL3RlYWNoZXItbW9kYWwtdmlldy90ZWFjaGVyLW1vZGFsLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3RlYWNoZXJzL3RlYWNoZXItbW9kYWwtdmlldy90ZWFjaGVyLW1vZGFsLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBLDRGQUFBOztBQUNBO0VBQ0Usd0JBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQUEsNEZBQUE7O0FBQ0E7RUFDRSx3QkFBQTtBQ0dGOztBREFBO0VBQ0UseUJBQUE7QUNHRjs7QUREQSw0RkFBQTs7QUFDQTtFQUNFLHdCQUFBO0FDSUY7O0FEREE7RUFDRSwwQkFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvdGVhY2hlcnMvdGVhY2hlci1tb2RhbC12aWV3L3RlYWNoZXItbW9kYWwtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmVlbi1pY29uIHtcbiAgY29sb3I6ICMyOGE3NDUgIWltcG9ydGFudDtcbn1cbi8qIE5vdGU6IElmIHlvdSdyZSB1c2luZyBhbiBTVkcgaWNvbiwgeW91IHNob3VsZCBtYWtlIHRoZSBjbGFzcyB0YXJnZXQgdGhlIGA8c3ZnPmAgZWxlbWVudCAqL1xuLmdyZWVuLWljb24gc3ZnIHtcbiAgZmlsbDogIzI4YTc0NSAhaW1wb3J0YW50O1xufVxuXG4ueWVsbG93LWljb24ge1xuICBjb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xufVxuLyogTm90ZTogSWYgeW91J3JlIHVzaW5nIGFuIFNWRyBpY29uLCB5b3Ugc2hvdWxkIG1ha2UgdGhlIGNsYXNzIHRhcmdldCB0aGUgYDxzdmc+YCBlbGVtZW50ICovXG4ueWVsbG93LWljb24gc3ZnIHtcbiAgZmlsbDogI2ZmYzEwNyAhaW1wb3J0YW50O1xufVxuXG4ucmVkLWljb24ge1xuICBjb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xufVxuLyogTm90ZTogSWYgeW91J3JlIHVzaW5nIGFuIFNWRyBpY29uLCB5b3Ugc2hvdWxkIG1ha2UgdGhlIGNsYXNzIHRhcmdldCB0aGUgYDxzdmc+YCBlbGVtZW50ICovXG4ucmVkLWljb24gc3ZnIHtcbiAgZmlsbDogI2RjMzU0NSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWljb24ge1xuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbn1cbiIsIi5ncmVlbi1pY29uIHtcbiAgY29sb3I6ICMyOGE3NDUgIWltcG9ydGFudDtcbn1cblxuLyogTm90ZTogSWYgeW91J3JlIHVzaW5nIGFuIFNWRyBpY29uLCB5b3Ugc2hvdWxkIG1ha2UgdGhlIGNsYXNzIHRhcmdldCB0aGUgYDxzdmc+YCBlbGVtZW50ICovXG4uZ3JlZW4taWNvbiBzdmcge1xuICBmaWxsOiAjMjhhNzQ1ICFpbXBvcnRhbnQ7XG59XG5cbi55ZWxsb3ctaWNvbiB7XG4gIGNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XG59XG5cbi8qIE5vdGU6IElmIHlvdSdyZSB1c2luZyBhbiBTVkcgaWNvbiwgeW91IHNob3VsZCBtYWtlIHRoZSBjbGFzcyB0YXJnZXQgdGhlIGA8c3ZnPmAgZWxlbWVudCAqL1xuLnllbGxvdy1pY29uIHN2ZyB7XG4gIGZpbGw6ICNmZmMxMDcgIWltcG9ydGFudDtcbn1cblxuLnJlZC1pY29uIHtcbiAgY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcbn1cblxuLyogTm90ZTogSWYgeW91J3JlIHVzaW5nIGFuIFNWRyBpY29uLCB5b3Ugc2hvdWxkIG1ha2UgdGhlIGNsYXNzIHRhcmdldCB0aGUgYDxzdmc+YCBlbGVtZW50ICovXG4ucmVkLWljb24gc3ZnIHtcbiAgZmlsbDogI2RjMzU0NSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWljb24ge1xuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/teachers/teacher-modal-view/teacher-modal-view.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/teachers/teacher-modal-view/teacher-modal-view.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TeacherModalViewComponent, ScoreCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherModalViewComponent", function() { return TeacherModalViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreCategory", function() { return ScoreCategory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/app-service/app-service.service */ "./src/app/views/services/app-service/app-service.service.ts");
/* harmony import */ var _app_core_base_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../app/core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _teachers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../teachers.service */ "./src/app/views/pages/teachers/teachers.service.ts");








var $ = window['$'];
var TeacherModalViewComponent = /** @class */ (function () {
    function TeacherModalViewComponent(layoutConfigService, dialogRef, teacherService, appService, data) {
        this.layoutConfigService = layoutConfigService;
        this.dialogRef = dialogRef;
        this.teacherService = teacherService;
        this.appService = appService;
        this.data = data;
        this.color = Chart.helpers.color;
        this.chartData = {
            labels: ['Absent', 'Present'],
            datasets: [
                {
                    fill: true,
                    // borderWidth: 0,
                    backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
                    borderColor: this.color(this.layoutConfigService.getConfig('colors.state.brand'))
                        .alpha(0)
                        .rgbString(),
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
                    data: [5, 2],
                },
            ],
        };
        this.type = 'line';
        this.dateRange = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.ELEMENT_DATA = [];
        this.displayedColumns = ['date', 'present', 'absent'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.ELEMENT_DATA);
        this.length = 1000;
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.pageIndex = 0;
        this.colorSpinner = 'primary';
        this.mode = 'indeterminate';
        this.value = 40;
        this.isLoadingAssessmentRecord = false;
        this.assessmentSummary = [];
        this.dataBase = [];
    }
    TeacherModalViewComponent.prototype.ngOnInit = function () {
        // this.dataSource.data = [1, 1, 1, 1, 2, 2, 3];
        this.getTeacherCoachingOverView();
    };
    TeacherModalViewComponent.prototype.ngAfterViewInit = function () {
        // this.dataSource.paginator = this.paginator;
    };
    TeacherModalViewComponent.prototype.getTeacherCoachingOverView = function () {
        var _this = this;
        this.isLoadingAssessmentRecord = true;
        this.teacherService
            .getCoachingSummaryByTeacherID(this.data.teacher.id)
            .subscribe(function (response) {
            _this.isLoadingAssessmentRecord = false;
            _this.dataBase = response.data;
            _this.assessmentSummary = response.data.slice(0, _this.pageSize);
            _this.length = _this.dataBase.length;
        }, function (error) {
            _this.isLoadingAssessmentRecord = false;
        });
    };
    TeacherModalViewComponent.prototype.handlePageChange = function (event) {
        console.log('event: ', event);
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        if (event.pageIndex > this.previousPageIndex) {
            // fetch online record
            this.previousPageIndex = event.previousPageIndex;
        }
        this.assessmentSummary = this.dataBase.slice(0, event.pageSize);
    };
    TeacherModalViewComponent.prototype.c = function (data) {
        if (!data) {
            this.appService.teacher.next(this.data.teacher);
            // this.appService.assessment.next(this.)
        }
        this.dialogRef.close(data);
    };
    TeacherModalViewComponent.prototype.initChart = function () {
        // For more information about the chartjs, visit this link
        // https://www.chartjs.org/docs/latest/getting-started/usage.html
        this.chartUI = new Chart(this.chart.nativeElement, {
            type: 'pie',
            data: this.chartData,
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
    TeacherModalViewComponent.prototype.initialDatePicker = function () {
        var $this = this;
        $('input[name="daterange"]').daterangepicker({
            autoUpdateInput: false,
            opens: 'left',
            ranges: {
                Today: [moment__WEBPACK_IMPORTED_MODULE_4___default()(), moment__WEBPACK_IMPORTED_MODULE_4___default()()],
                Yesterday: [
                    moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(1, 'days'),
                    moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(1, 'days'),
                ],
                'Last 7 Days': [moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(6, 'days'), moment__WEBPACK_IMPORTED_MODULE_4___default()()],
                'Last 30 Days': [moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(29, 'days'), moment__WEBPACK_IMPORTED_MODULE_4___default()()],
                'This Month': [moment__WEBPACK_IMPORTED_MODULE_4___default()().startOf('month'), moment__WEBPACK_IMPORTED_MODULE_4___default()().endOf('month')],
                'Last Month': [
                    moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(1, 'month').startOf('month'),
                    moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(1, 'month').endOf('month'),
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
    TeacherModalViewComponent.prototype.closeModal = function (data) {
        this.dialogRef.close(data);
    };
    TeacherModalViewComponent.ctorParameters = function () { return [
        { type: _app_core_base_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutConfigService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: _teachers_service__WEBPACK_IMPORTED_MODULE_7__["TeachersService"] },
        { type: _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_5__["AppServiceService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TeacherModalViewComponent.prototype, "chart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeacherModalViewComponent.prototype, "chartData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TeacherModalViewComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], TeacherModalViewComponent.prototype, "paginator", void 0);
    TeacherModalViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-teacher-modal-view',
            template: __webpack_require__(/*! raw-loader!./teacher-modal-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/teachers/teacher-modal-view/teacher-modal-view.component.html"),
            styles: [__webpack_require__(/*! ./teacher-modal-view.component.scss */ "./src/app/views/pages/teachers/teacher-modal-view/teacher-modal-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_base_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutConfigService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _teachers_service__WEBPACK_IMPORTED_MODULE_7__["TeachersService"],
            _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_5__["AppServiceService"], Object])
    ], TeacherModalViewComponent);
    return TeacherModalViewComponent;
}());

var ScoreCategory;
(function (ScoreCategory) {
    ScoreCategory["NOT_MET"] = "Not Met(Below 50)";
    ScoreCategory["PARTIALLY_MET"] = "Partially Met(50-70)";
    ScoreCategory["EFFECTIVELY_MET"] = "Effectively Met(60-75)";
})(ScoreCategory || (ScoreCategory = {}));


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
/* harmony import */ var _effective_state_report_effective_state_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./effective-state-report/effective-state-report.component */ "./src/app/views/pages/teachers/effective-state-report/effective-state-report.component.ts");
/* harmony import */ var _teacher_assessment_detail_teacher_assessment_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teacher-assessment-detail/teacher-assessment-detail.component */ "./src/app/views/pages/teachers/teacher-assessment-detail/teacher-assessment-detail.component.ts");
/* harmony import */ var _teachers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./teachers.component */ "./src/app/views/pages/teachers/teachers.component.ts");






var routes = [
    {
        path: 'teachers-by-qualification',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | teacher-by-qualification-teacher-by-qualification-module */ "teacher-by-qualification-teacher-by-qualification-module").then(__webpack_require__.bind(null, /*! ./teacher-by-qualification/teacher-by-qualification.module */ "./src/app/views/pages/teachers/teacher-by-qualification/teacher-by-qualification.module.ts")).then(function (m) { return m.TeacherByQualificationModule; });
        },
        pathMatch: 'full',
    },
    {
        path: 'attendance-report',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | teacher-attendance-teacher-attendance-module */ "teacher-attendance-teacher-attendance-module").then(__webpack_require__.bind(null, /*! ./teacher-attendance/teacher-attendance.module */ "./src/app/views/pages/teachers/teacher-attendance/teacher-attendance.module.ts")).then(function (m) { return m.TeacherAttendanceModule; });
        },
        pathMatch: 'full',
    },
    {
        path: 'view-attendance-report',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | teacher-report-detail-teacher-report-detail-module */ "teacher-report-detail-teacher-report-detail-module").then(__webpack_require__.bind(null, /*! ./teacher-report-detail/teacher-report-detail.module */ "./src/app/views/pages/teachers/teacher-report-detail/teacher-report-detail.module.ts")).then(function (m) { return m.TeacherReportDetailModule; });
        },
        pathMatch: 'full',
    },
    {
        path: 'teachers-qualification-by-schoool',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | teachers-qualification-by-school-teachers-qualification-by-school-module */ "teachers-qualification-by-school-teachers-qualification-by-school-module").then(__webpack_require__.bind(null, /*! ./teachers-qualification-by-school/teachers-qualification-by-school.module */ "./src/app/views/pages/teachers/teachers-qualification-by-school/teachers-qualification-by-school.module.ts")).then(function (m) { return m.TeachersQualificationBySchoolModule; });
        },
        pathMatch: 'full',
    },
    {
        path: 'teachers-distribution-by-subject',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | subject-distribution-subject-distribution-module */ "subject-distribution-subject-distribution-module").then(__webpack_require__.bind(null, /*! ./subject-distribution/subject-distribution.module */ "./src/app/views/pages/teachers/subject-distribution/subject-distribution.module.ts")).then(function (m) { return m.SubjectDistributionModule; });
        },
        pathMatch: 'full',
    },
    // {
    //   path: 'teachers/coaching-mentoring/:id',
    //   component: TeacherAssessmentDetailComponent,
    // },
    // {
    //   path: 'teachers/coaching-mentoring',
    //   component: TeacherAssessmentDetailComponent,
    // },
    {
        path: '',
        children: [
            {
                path: 'effectiveness-report-by-state',
                component: _effective_state_report_effective_state_report_component__WEBPACK_IMPORTED_MODULE_3__["EffectiveStateReportComponent"],
            },
            { path: 'teacher/:id', component: _teachers_component__WEBPACK_IMPORTED_MODULE_5__["TeachersComponent"] },
            {
                path: 'coaching-mentoring',
                component: _teacher_assessment_detail_teacher_assessment_detail_component__WEBPACK_IMPORTED_MODULE_4__["TeacherAssessmentDetailComponent"],
            },
            { path: '', component: _teachers_component__WEBPACK_IMPORTED_MODULE_5__["TeachersComponent"] },
        ],
    },
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

module.exports = ".mat-header-cell {\n  color: #000 !important;\n  font-weight: bold;\n}\n\n.green-icon {\n  color: #28a745 !important;\n}\n\n/* Note: If you're using an SVG icon, you should make the class target the `<svg>` element */\n\n.green-icon svg {\n  fill: #28a745 !important;\n}\n\n.yellow-icon {\n  color: #ffc107 !important;\n}\n\n/* Note: If you're using an SVG icon, you should make the class target the `<svg>` element */\n\n.yellow-icon svg {\n  fill: #ffc107 !important;\n}\n\n.red-icon {\n  color: #dc3545 !important;\n}\n\n/* Note: If you're using an SVG icon, you should make the class target the `<svg>` element */\n\n.red-icon svg {\n  fill: #dc3545 !important;\n}\n\n.mat-icon {\n  font-size: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzb251b3JhaC9Eb2N1bWVudHMvY2JjL3NjaG9vbERhc2hib2FyZC9zcmMvYXBwL3ZpZXdzL3BhZ2VzL3RlYWNoZXJzL3RlYWNoZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9wYWdlcy90ZWFjaGVycy90ZWFjaGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FEQ0EsNEZBQUE7O0FBQ0E7RUFDRSx3QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURBQSw0RkFBQTs7QUFDQTtFQUNFLHdCQUFBO0FDR0Y7O0FEQUE7RUFDRSx5QkFBQTtBQ0dGOztBRERBLDRGQUFBOztBQUNBO0VBQ0Usd0JBQUE7QUNJRjs7QUREQTtFQUNFLDBCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy90ZWFjaGVycy90ZWFjaGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtaGVhZGVyLWNlbGwge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmdyZWVuLWljb24ge1xuICBjb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50O1xufVxuLyogTm90ZTogSWYgeW91J3JlIHVzaW5nIGFuIFNWRyBpY29uLCB5b3Ugc2hvdWxkIG1ha2UgdGhlIGNsYXNzIHRhcmdldCB0aGUgYDxzdmc+YCBlbGVtZW50ICovXG4uZ3JlZW4taWNvbiBzdmcge1xuICBmaWxsOiAjMjhhNzQ1ICFpbXBvcnRhbnQ7XG59XG5cbi55ZWxsb3ctaWNvbiB7XG4gIGNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XG59XG4vKiBOb3RlOiBJZiB5b3UncmUgdXNpbmcgYW4gU1ZHIGljb24sIHlvdSBzaG91bGQgbWFrZSB0aGUgY2xhc3MgdGFyZ2V0IHRoZSBgPHN2Zz5gIGVsZW1lbnQgKi9cbi55ZWxsb3ctaWNvbiBzdmcge1xuICBmaWxsOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XG59XG5cbi5yZWQtaWNvbiB7XG4gIGNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG59XG4vKiBOb3RlOiBJZiB5b3UncmUgdXNpbmcgYW4gU1ZHIGljb24sIHlvdSBzaG91bGQgbWFrZSB0aGUgY2xhc3MgdGFyZ2V0IHRoZSBgPHN2Zz5gIGVsZW1lbnQgKi9cbi5yZWQtaWNvbiBzdmcge1xuICBmaWxsOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xufVxuIiwiLm1hdC1oZWFkZXItY2VsbCB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZ3JlZW4taWNvbiB7XG4gIGNvbG9yOiAjMjhhNzQ1ICFpbXBvcnRhbnQ7XG59XG5cbi8qIE5vdGU6IElmIHlvdSdyZSB1c2luZyBhbiBTVkcgaWNvbiwgeW91IHNob3VsZCBtYWtlIHRoZSBjbGFzcyB0YXJnZXQgdGhlIGA8c3ZnPmAgZWxlbWVudCAqL1xuLmdyZWVuLWljb24gc3ZnIHtcbiAgZmlsbDogIzI4YTc0NSAhaW1wb3J0YW50O1xufVxuXG4ueWVsbG93LWljb24ge1xuICBjb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xufVxuXG4vKiBOb3RlOiBJZiB5b3UncmUgdXNpbmcgYW4gU1ZHIGljb24sIHlvdSBzaG91bGQgbWFrZSB0aGUgY2xhc3MgdGFyZ2V0IHRoZSBgPHN2Zz5gIGVsZW1lbnQgKi9cbi55ZWxsb3ctaWNvbiBzdmcge1xuICBmaWxsOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XG59XG5cbi5yZWQtaWNvbiB7XG4gIGNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG59XG5cbi8qIE5vdGU6IElmIHlvdSdyZSB1c2luZyBhbiBTVkcgaWNvbiwgeW91IHNob3VsZCBtYWtlIHRoZSBjbGFzcyB0YXJnZXQgdGhlIGA8c3ZnPmAgZWxlbWVudCAqL1xuLnJlZC1pY29uIHN2ZyB7XG4gIGZpbGw6ICNkYzM1NDUgIWltcG9ydGFudDtcbn1cblxuLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"

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
/* harmony import */ var _teacher_modal_view_teacher_modal_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./teacher-modal-view/teacher-modal-view.component */ "./src/app/views/pages/teachers/teacher-modal-view/teacher-modal-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");

















var $ = window['$'];
var TeachersComponent = /** @class */ (function () {
    function TeachersComponent(changeDetectRef, teacherService, schoolService, appService, layoutConfigService, dialog, route, location, router) {
        this.changeDetectRef = changeDetectRef;
        this.teacherService = teacherService;
        this.schoolService = schoolService;
        this.appService = appService;
        this.layoutConfigService = layoutConfigService;
        this.dialog = dialog;
        this.route = route;
        this.location = location;
        this.router = router;
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
        this.data = {
            labels: ['Male', 'Female'],
            datasets: [
                {
                    label: 'Male',
                    borderColor: this.layoutConfigService.getConfig('colors.state.brand'),
                    fill: false,
                    borderWidth: 2,
                    backgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_8__["Chart"].helpers
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
                    pointBackgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_8__["Chart"].helpers
                        .color('#000000')
                        .alpha(0)
                        .rgbString(),
                    pointBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_8__["Chart"].helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                    pointHoverBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_8__["Chart"].helpers
                        .color('#000000')
                        .alpha(0.1)
                        .rgbString(),
                    data: [0, 0, 0, 0, 0],
                },
                {
                    label: 'Female',
                    fill: false,
                    borderWidth: 2,
                    backgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_8__["Chart"].helpers
                        .color(this.layoutConfigService.getConfig('colors.state.brand'))
                        .alpha(0.2)
                        .rgbString(),
                    borderColor: this.layoutConfigService.getConfig('colors.state.danger'),
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 12,
                    pointBackgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_8__["Chart"].helpers
                        .color('#000000')
                        .alpha(0)
                        .rgbString(),
                    pointBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_8__["Chart"].helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                    pointHoverBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_8__["Chart"].helpers
                        .color('#000000')
                        .alpha(0.1)
                        .rgbString(),
                    data: [0, 0],
                },
            ],
        };
        this.color = chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_8__["Chart"].helpers.color;
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
        this.route.params.subscribe(function (params) {
            console.log('params: ', params);
        });
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
        this.chartUI = new chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_8__["Chart"](this.chart.nativeElement, {
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
                        pointBackgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_8__["Chart"].helpers
                            .color('#000000')
                            .alpha(0)
                            .rgbString(),
                        pointBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_8__["Chart"].helpers
                            .color('#000000')
                            .alpha(0)
                            .rgbString(),
                        pointHoverBackgroundColor: _this.layoutConfigService.getConfig('colors.state.brand'),
                        pointHoverBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_8__["Chart"].helpers
                            .color('#000000')
                            .alpha(0.1)
                            .rgbString(),
                        data: [_this.totalFemale, _this.totalMale],
                    },
                ],
            };
            _this.initChartJS();
            _this.changeDetectRef.detectChanges();
            _this.listenForRouteChange();
        }, function (error) {
            _this.loading = false;
            console.log(error);
        });
    };
    TeachersComponent.prototype.listenForRouteChange = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            var teacher = _this.teacherDatabase.find(function (item) { return item.id === parseInt(param.id); });
            if (teacher) {
                var dialogRef = _this.dialog.open(_teacher_modal_view_teacher_modal_view_component__WEBPACK_IMPORTED_MODULE_14__["TeacherModalViewComponent"], {
                    maxWidth: '90vw',
                    minWidth: '60vw',
                    data: {
                        teacher: teacher,
                    },
                });
                dialogRef.afterClosed().subscribe(function (data) {
                    if (data) {
                        _this.location.back();
                    }
                });
            }
            else {
            }
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
        console.log('element: ', element);
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
    TeachersComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    TeachersComponent.prototype.getUserAccessibleLocals = function (states) {
        if (states === void 0) { states = []; }
        this.localgovernments = this.appService.getLocalGovernments(states);
    };
    TeachersComponent.prototype.getUserAccessibleState = function () {
        this.states = this.appService.getStates(this.appService.getUserStateAccess());
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
        this.chartUI.data = {
            labels: ['Female', 'Male'],
            datasets: [
                {
                    fill: true,
                    // borderWidth: 0,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                    ],
                    borderColor: this.color(this.layoutConfigService.getConfig('colors.state.brand'))
                        .alpha(0)
                        .rgbString(),
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 12,
                    pointBackgroundColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_8__["Chart"].helpers
                        .color('#000000')
                        .alpha(0)
                        .rgbString(),
                    pointBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_8__["Chart"].helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                    pointHoverBorderColor: chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_8__["Chart"].helpers
                        .color('#000000')
                        .alpha(0.1)
                        .rgbString(),
                    data: [this.totalMale, this.totalFemale],
                },
            ],
        };
        this.chartUI.update();
    };
    TeachersComponent.prototype.initChart = function () {
        // For more information about the chartjs, visit this link
        // https://www.chartjs.org/docs/latest/getting-started/usage.html
        this.chartUI = new chart_js_dist_Chart_min_js__WEBPACK_IMPORTED_MODULE_8__["Chart"](this.chart.nativeElement, {
            type: 'bar',
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
    TeachersComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _teachers_service__WEBPACK_IMPORTED_MODULE_4__["TeachersService"] },
        { type: _schools_schools_service__WEBPACK_IMPORTED_MODULE_7__["SchoolsService"] },
        { type: _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_6__["AppServiceService"] },
        { type: app_core_base_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutConfigService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] }
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
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]])
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
/* harmony import */ var _teacher_modal_view_teacher_modal_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./teacher-modal-view/teacher-modal-view.component */ "./src/app/views/pages/teachers/teacher-modal-view/teacher-modal-view.component.ts");
/* harmony import */ var _teacher_assessment_detail_teacher_assessment_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./teacher-assessment-detail/teacher-assessment-detail.component */ "./src/app/views/pages/teachers/teacher-assessment-detail/teacher-assessment-detail.component.ts");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js");
/* harmony import */ var _effective_state_report_effective_state_report_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./effective-state-report/effective-state-report.component */ "./src/app/views/pages/teachers/effective-state-report/effective-state-report.component.ts");
/* harmony import */ var _effective_state_report_detail_modal_effective_state_report_detail_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./effective-state-report-detail-modal/effective-state-report-detail-modal.component */ "./src/app/views/pages/teachers/effective-state-report-detail-modal/effective-state-report-detail-modal.component.ts");















// import { SchoolsService } from './schools.service';
// import { AgmCoreModule } from '@agm/core';






//spiners



var TeachersModule = /** @class */ (function () {
    function TeachersModule() {
    }
    TeachersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _teachers_component__WEBPACK_IMPORTED_MODULE_4__["TeachersComponent"],
                _uploadteachers_upload_teacher_component__WEBPACK_IMPORTED_MODULE_18__["UploadTeacherComponent"],
                _teacher_modal_view_teacher_modal_view_component__WEBPACK_IMPORTED_MODULE_19__["TeacherModalViewComponent"],
                _teacher_assessment_detail_teacher_assessment_detail_component__WEBPACK_IMPORTED_MODULE_20__["TeacherAssessmentDetailComponent"],
                _effective_state_report_effective_state_report_component__WEBPACK_IMPORTED_MODULE_22__["EffectiveStateReportComponent"],
                _effective_state_report_detail_modal_effective_state_report_detail_modal_component__WEBPACK_IMPORTED_MODULE_23__["EffectiveStateReportDetailModalComponent"],
            ],
            providers: [_teachers_service__WEBPACK_IMPORTED_MODULE_15__["TeachersService"], _schools_schools_service__WEBPACK_IMPORTED_MODULE_16__["SchoolsService"], _services_app_service_app_service_service__WEBPACK_IMPORTED_MODULE_17__["AppServiceService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _teachers_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeachersRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_6__["PartialsModule"],
                // AgmCoreModule.forRoot({
                //   apiKey: 'AIzaSyC8aIKLtCcXqEHG_Gfm35Iahplw3HoKzLM',
                // }),
                ng_circle_progress__WEBPACK_IMPORTED_MODULE_21__["NgCircleProgressModule"].forRoot({
                    // set defaults here
                    radius: 100,
                    outerStrokeWidth: 16,
                    innerStrokeWidth: 8,
                    outerStrokeColor: '#78C000',
                    innerStrokeColor: '#C7E596',
                    animationDuration: 300,
                }),
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
            entryComponents: [
                _uploadteachers_upload_teacher_component__WEBPACK_IMPORTED_MODULE_18__["UploadTeacherComponent"],
                _teacher_modal_view_teacher_modal_view_component__WEBPACK_IMPORTED_MODULE_19__["TeacherModalViewComponent"],
                _effective_state_report_detail_modal_effective_state_report_detail_modal_component__WEBPACK_IMPORTED_MODULE_23__["EffectiveStateReportDetailModalComponent"],
            ],
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
                    id: item['id'],
                });
            });
            // console.log(response);
            return teachers;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleHttpError));
    };
    TeachersService.prototype.getCoachingReportByState = function (state, lga, startDate, endDate, school) {
        var user = JSON.parse(localStorage.getItem(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authTokenKey));
        return this.http
            .get(BASE_URL + "/api/v1/coaching-mentoring/get-report-by-state?state=" + state + "&lga=" + lga + "&startDate=" + startDate + "&endDate=" + endDate + "&school=" + school, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: user.accessToken,
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response['data']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleHttpError));
    };
    TeachersService.prototype.getCoachingReportByStateDrillDownCategory = function (category, state, lga, startDate, endDate, school) {
        var user = JSON.parse(localStorage.getItem(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authTokenKey));
        return this.http
            .get(BASE_URL + "/api/v1/coaching-mentoring/get-report-by-state-drilldow-by-category?category=" + category + "&state=" + state + "&lga=" + lga + "&startDate=" + startDate + "&endDate=" + endDate + "&school=" + school, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: user.accessToken,
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return ({
            data: response['data'].sort(function (item1, item2) {
                if (new Date(item1.date) > new Date(item2.date)) {
                    return -1;
                }
                else if (new Date(item1.date) < new Date(item2.date)) {
                    return 1;
                }
                return 0;
            }),
            totalRecord: 1000,
        }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleHttpError));
    };
    TeachersService.prototype.getCoachingAssessmentByID = function (id) {
        var user = JSON.parse(localStorage.getItem(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authTokenKey));
        return this.http
            .get(BASE_URL + "/api/v1/coaching-mentoring/" + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: user.accessToken,
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response['data']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleHttpError));
    };
    TeachersService.prototype.getCoachingSummaryByTeacherID = function (id, start, count) {
        if (start === void 0) { start = 0; }
        if (count === void 0) { count = 1000; }
        var user = JSON.parse(localStorage.getItem(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authTokenKey));
        return this.http
            .get(BASE_URL + "/api/v1/coaching-mentoring/teacher/" + id + "?start=" + start + "&count=" + count, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: user.accessToken,
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return ({
            data: response['data'].sort(function (item1, item2) {
                if (new Date(item1.date) > new Date(item2.date)) {
                    return -1;
                }
                else if (new Date(item1.date) < new Date(item2.date)) {
                    return 1;
                }
                return 0;
            }),
            totalRecord: response['totalRecord'],
        }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleHttpError));
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

module.exports = ".html {\n  min-height: 200px;\n  max-height: 300px;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzb251b3JhaC9Eb2N1bWVudHMvY2JjL3NjaG9vbERhc2hib2FyZC9zcmMvYXBwL3ZpZXdzL3BhZ2VzL3RlYWNoZXJzL3VwbG9hZHRlYWNoZXJzL3VwbG9hZC10ZWFjaGVyLWNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9wYWdlcy90ZWFjaGVycy91cGxvYWR0ZWFjaGVycy91cGxvYWQtdGVhY2hlci1jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvdGVhY2hlcnMvdXBsb2FkdGVhY2hlcnMvdXBsb2FkLXRlYWNoZXItY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaHRtbCB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuIiwiLmh0bWwge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn0iXX0= */"

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
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);







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
        this.schoolNotSelected = false;
        this.totalCount = 0;
        this.schoolDataBase = [];
        this.loading = false;
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
    UploadTeacherComponent.prototype.uploadTeachers = function () {
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
                        console.log('jsondata: ', jsonData);
                        return [2 /*return*/];
                    case 2:
                        error_1 = _a.sent();
                        this.loading = false;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UploadTeacherComponent.prototype.convertFileToJSON = function (file) {
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