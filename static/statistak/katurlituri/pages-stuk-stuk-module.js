(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-stuk-stuk-module"],{

/***/ "./src/app/pages/stuk/stuk.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/stuk/stuk.module.ts ***!
  \*******************************************/
/*! exports provided: StukPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StukPageModule", function() { return StukPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stuk_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stuk.page */ "./src/app/pages/stuk/stuk.page.ts");







var routes = [
    {
        path: '',
        component: _stuk_page__WEBPACK_IMPORTED_MODULE_6__["StukPage"]
    }
];
var StukPageModule = /** @class */ (function () {
    function StukPageModule() {
    }
    StukPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_stuk_page__WEBPACK_IMPORTED_MODULE_6__["StukPage"]]
        })
    ], StukPageModule);
    return StukPageModule;
}());



/***/ }),

/***/ "./src/app/pages/stuk/stuk.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/stuk/stuk.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/repertoire\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Stuk</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"delete()\">\n        <ion-icon name=\"trash\"></ion-icon>\n        Delete\n      </ion-button>\n      <ion-button (click)=\"update()\">\n        <ion-icon name=\"save\"></ion-icon>\n        Save\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf=\"stuk\">\n    <ion-item>\n      <ion-label position=\"stacked\">Titel</ion-label>\n      <ion-input [(ngModel)]=\"stuk.titel\" placeholder=\"Titel\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Componist</ion-label>\n      <ion-input [(ngModel)]=\"stuk.componist\" placeholder=\"Componist\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Code</ion-label>\n      <ion-input [(ngModel)]=\"stuk.code\" placeholder=\"Code\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Met solist klarinet</ion-label>\n      <ion-checkbox slot=\"end\" [(ngModel)]=\"stuk.metSolistKlarinet\"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Met solist zang</ion-label>\n      <ion-checkbox slot=\"end\" [(ngModel)]=\"stuk.metSolistZang\"></ion-checkbox>\n    </ion-item>\n\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/stuk/stuk.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/stuk/stuk.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0dWsvc3R1ay5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/stuk/stuk.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/stuk/stuk.page.ts ***!
  \*****************************************/
/*! exports provided: StukPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StukPage", function() { return StukPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var StukPage = /** @class */ (function () {
    function StukPage(route, db, router, toast) {
        this.route = route;
        this.db = db;
        this.router = router;
        this.toast = toast;
        this.stuk = null;
    }
    StukPage.prototype.ngOnInit = function () {
        var _this = this;
        this.db.getDatabaseState().subscribe(function (rdy) {
            if (rdy) {
                _this.route.paramMap.subscribe(function (params) {
                    var stukId = params.get('id');
                    if (stukId === '-1') {
                        _this.stuk = {
                            id: -1,
                            titel: '',
                            componist: '',
                            code: '',
                            metSolistKlarinet: false,
                            metSolistZang: false,
                        };
                        return;
                    }
                    _this.db.getStuk(stukId).then(function (data) {
                        _this.stuk = data;
                    });
                });
            }
        });
    };
    StukPage.prototype.delete = function () {
        var _this = this;
        if (this.stuk !== null && this.stuk.id === -1) {
            this.router.navigateByUrl('/tabs/repertoire');
            return;
        }
        this.db.deleteStuk(this.stuk.id).then(function () {
            _this.router.navigateByUrl('/tabs/repertoire');
        });
    };
    StukPage.prototype.update = function () {
        var _this = this;
        if (this.stuk !== null && this.stuk.id === -1) {
            this.db.addStuk(this.stuk).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var toast;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.toast.create({
                                message: 'Stuk aangemaakt',
                                duration: 1000
                            })];
                        case 1:
                            toast = _a.sent();
                            toast.present();
                            this.router.navigateByUrl('/tabs/repertoire');
                            return [2 /*return*/];
                    }
                });
            }); });
            return;
        }
        this.db.updateStuk(this.stuk).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: 'Stuk bijgewerkt',
                            duration: 1000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        this.router.navigateByUrl('/tabs/repertoire');
                        return [2 /*return*/];
                }
            });
        }); });
    };
    StukPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stuk',
            template: __webpack_require__(/*! ./stuk.page.html */ "./src/app/pages/stuk/stuk.page.html"),
            styles: [__webpack_require__(/*! ./stuk.page.scss */ "./src/app/pages/stuk/stuk.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], StukPage);
    return StukPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-stuk-stuk-module.js.map