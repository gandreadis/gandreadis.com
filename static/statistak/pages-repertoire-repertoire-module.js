(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-repertoire-repertoire-module"],{

/***/ "./src/app/pages/repertoire/repertoire.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/repertoire/repertoire.module.ts ***!
  \*******************************************************/
/*! exports provided: RepertoirePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepertoirePageModule", function() { return RepertoirePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _repertoire_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./repertoire.page */ "./src/app/pages/repertoire/repertoire.page.ts");







var routes = [
    {
        path: '',
        component: _repertoire_page__WEBPACK_IMPORTED_MODULE_6__["RepertoirePage"]
    }
];
var RepertoirePageModule = /** @class */ (function () {
    function RepertoirePageModule() {
    }
    RepertoirePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_repertoire_page__WEBPACK_IMPORTED_MODULE_6__["RepertoirePage"]]
        })
    ], RepertoirePageModule);
    return RepertoirePageModule;
}());



/***/ }),

/***/ "./src/app/pages/repertoire/repertoire.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/repertoire/repertoire.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"kartuli\">\n    <ion-title>Repertoire 📄📜🎧</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let stuk of stukken\" button [routerLink]=\"env.editable ? ['/tabs/repertoire/', stuk.id] : undefined\">\n      <ion-label>\n        <strong>{{stuk.titel}}</strong><br/>\n        {{stuk.componist}}\n      </ion-label>\n      <ion-chip color=\"primary\" *ngIf=\"stuk.metSolistKlarinet\" slot=\"end\">\n        <ion-label>K</ion-label>\n      </ion-chip>\n      <ion-chip color=\"secondary\" *ngIf=\"stuk.metSolistZang\" slot=\"end\">\n        <ion-label>Z</ion-label>\n      </ion-chip>\n      <ion-chip outline slot=\"end\">\n        <ion-label>{{stuk.code}}</ion-label>\n      </ion-chip>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"env.editable\">\n    <ion-fab-button [routerLink]=\"'/tabs/repertoire/-1'\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/repertoire/repertoire.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/repertoire/repertoire.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcGVydG9pcmUvcmVwZXJ0b2lyZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/repertoire/repertoire.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/repertoire/repertoire.page.ts ***!
  \*****************************************************/
/*! exports provided: RepertoirePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepertoirePage", function() { return RepertoirePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var RepertoirePage = /** @class */ (function () {
    function RepertoirePage(db) {
        this.db = db;
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
        this.stukken = [];
    }
    RepertoirePage.prototype.ngOnInit = function () {
        var _this = this;
        this.db.getDatabaseState().subscribe(function (rdy) {
            if (rdy) {
                _this.db.getStukken().subscribe(function (stukken) {
                    _this.stukken = stukken;
                });
            }
        });
    };
    RepertoirePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-repertoire',
            template: __webpack_require__(/*! ./repertoire.page.html */ "./src/app/pages/repertoire/repertoire.page.html"),
            styles: [__webpack_require__(/*! ./repertoire.page.scss */ "./src/app/pages/repertoire/repertoire.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
    ], RepertoirePage);
    return RepertoirePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-repertoire-repertoire-module.js.map