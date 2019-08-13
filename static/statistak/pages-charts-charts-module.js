(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-charts-charts-module"],{

/***/ "./src/app/pages/charts/charts.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/charts/charts.module.ts ***!
  \***********************************************/
/*! exports provided: ChartsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsPageModule", function() { return ChartsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _charts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charts.page */ "./src/app/pages/charts/charts.page.ts");







var routes = [
    {
        path: '',
        component: _charts_page__WEBPACK_IMPORTED_MODULE_6__["ChartsPage"]
    }
];
var ChartsPageModule = /** @class */ (function () {
    function ChartsPageModule() {
    }
    ChartsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_charts_page__WEBPACK_IMPORTED_MODULE_6__["ChartsPage"]]
        })
    ], ChartsPageModule);
    return ChartsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/charts/charts.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/charts/charts.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"kartuli\">\n    <ion-title>De Ricciotti Charts ✨🏆🥇</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-segment [ngModel]=\"sortBy\" color=\"success\" value=\"optredens\" (ionChange)=\"sortCharts($event)\">\n    <ion-segment-button value=\"optredens\">\n      <ion-label>Optredens</ion-label>\n      <ion-icon name=\"compass\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"bezoekers\">\n      <ion-label>Bezoekers</ion-label>\n      <ion-icon name=\"heart\"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n  <ion-segment [ngModel]=\"mode\" value=\"globaal\" (ionChange)=\"updateCharts($event)\">\n    <ion-segment-button value=\"globaal\">Globaal</ion-segment-button>\n    <ion-segment-button value=\"nl\"><span class=\"flag-icon flag-icon-nl\"></span></ion-segment-button>\n    <ion-segment-button value=\"ge\"><span class=\"flag-icon flag-icon-ge\"></span></ion-segment-button>\n  </ion-segment>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item *ngFor=\"let stuk of ricciottiCharts; let i = index\">\n            <ion-label>\n              <strong>{{stuk.titel}}</strong><br/>\n              {{stuk.componist}}\n            </ion-label>\n            <ion-badge slot=\"start\" color=\"primary\">{{i + 1}}</ion-badge>\n            <ion-chip color=\"success\" slot=\"end\">\n              <ion-label>{{stuk[this.sortBy]}}</ion-label>\n            </ion-chip>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/charts/charts.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/charts/charts.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJ0cy9jaGFydHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/charts/charts.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/charts/charts.page.ts ***!
  \*********************************************/
/*! exports provided: ChartsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsPage", function() { return ChartsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");




var ChartsPage = /** @class */ (function () {
    function ChartsPage(databaseService) {
        this.databaseService = databaseService;
        this.ricciottiCharts = [];
        this.ricciottiChartsGlobaal = [];
        this.ricciottiChartsNL = [];
        this.ricciottiChartsGE = [];
        this.mode = 'globaal';
        this.sortBy = 'optredens';
    }
    ChartsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.databaseService.getDatabaseState().subscribe(function (rdy) {
            if (rdy) {
                _this.databaseService.getOptredens().subscribe(function (optredens) {
                    _this.databaseService.getRicciottiCharts().then(function (data) {
                        _this.ricciottiChartsGlobaal = data;
                        if (_this.mode === 'globaal') {
                            _this.ricciottiCharts = _this.ricciottiChartsGlobaal;
                            _this.sortByCountType(_this.sortBy);
                        }
                    });
                    _this.databaseService.getRicciottiCharts('nl').then(function (data) {
                        _this.ricciottiChartsNL = data;
                        if (_this.mode === 'nl') {
                            _this.ricciottiCharts = _this.ricciottiChartsNL;
                            _this.sortByCountType(_this.sortBy);
                        }
                    });
                    _this.databaseService.getRicciottiCharts('ge').then(function (data) {
                        _this.ricciottiChartsGE = data;
                        if (_this.mode === 'ge') {
                            _this.ricciottiCharts = _this.ricciottiChartsGE;
                            _this.sortByCountType(_this.sortBy);
                        }
                    });
                });
            }
        });
    };
    ChartsPage.prototype.updateCharts = function (event) {
        if (event.target.value === 'globaal') {
            this.ricciottiCharts = this.ricciottiChartsGlobaal;
        }
        else if (event.target.value === 'nl') {
            this.ricciottiCharts = this.ricciottiChartsNL;
        }
        else if (event.target.value === 'ge') {
            this.ricciottiCharts = this.ricciottiChartsGE;
        }
        this.sortByCountType(this.sortBy);
        this.mode = event.target.value;
    };
    ChartsPage.prototype.sortByCountType = function (type) {
        this.ricciottiCharts.sort(_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"].dynamicSort('-' + type));
        this.ricciottiCharts = this.ricciottiCharts.slice();
    };
    ChartsPage.prototype.sortCharts = function (event) {
        if (event.target.value === 'optredens') {
            this.sortByCountType('optredens');
        }
        else if (event.target.value === 'bezoekers') {
            this.sortByCountType('bezoekers');
        }
        this.sortBy = event.target.value;
    };
    ChartsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__(/*! ./charts.page.html */ "./src/app/pages/charts/charts.page.html"),
            styles: [__webpack_require__(/*! ./charts.page.scss */ "./src/app/pages/charts/charts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
    ], ChartsPage);
    return ChartsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-charts-charts-module.js.map