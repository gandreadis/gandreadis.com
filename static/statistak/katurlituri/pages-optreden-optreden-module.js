(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-optreden-optreden-module"],{

/***/ "./src/app/pages/optreden/optreden.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/optreden/optreden.module.ts ***!
  \***************************************************/
/*! exports provided: OptredenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptredenPageModule", function() { return OptredenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _optreden_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./optreden.page */ "./src/app/pages/optreden/optreden.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _optreden_page__WEBPACK_IMPORTED_MODULE_6__["OptredenPage"]
    }
];
var OptredenPageModule = /** @class */ (function () {
    function OptredenPageModule() {
    }
    OptredenPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            ],
            declarations: [_optreden_page__WEBPACK_IMPORTED_MODULE_6__["OptredenPage"]]
        })
    ], OptredenPageModule);
    return OptredenPageModule;
}());



/***/ }),

/***/ "./src/app/pages/optreden/optreden.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/optreden/optreden.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/optredens\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Optreden</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"delete()\">\r\n        <ion-icon name=\"trash\"></ion-icon>\r\n        Delete\r\n      </ion-button>\r\n      <ion-button (click)=\"update()\">\r\n        <ion-icon name=\"save\"></ion-icon>\r\n        Save\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <div *ngIf=\"optreden\">\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Locatie</ion-label>\r\n      <ion-input [(ngModel)]=\"optreden.locatie\" placeholder=\"Locatie\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Plaats</ion-label>\r\n      <ion-input [(ngModel)]=\"optreden.plaats\" placeholder=\"Plaats\"></ion-input>\r\n    </ion-item>\r\n    <ion-segment [(ngModel)]=\"optreden.landCode\">\r\n      <ion-segment-button value=\"nl\">\r\n        <ion-label><span class=\"flag-icon flag-icon-nl\"></span></ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"ge\">\r\n        <ion-label><span class=\"flag-icon flag-icon-ge\"></span></ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <ion-item>\r\n      <ion-label>Datum</ion-label>\r\n      <ion-datetime displayFormat=\"YYYY-MM-DD\" placeholder=\"Selecteer datum\" (ionChange)=\"fixDatum()\"\r\n                    [(ngModel)]=\"optreden.datum\"></ion-datetime>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Tijd</ion-label>\r\n      <ion-datetime displayFormat=\"HH:mm\" placeholder=\"Selecteer tijd\" [(ngModel)]=\"optreden.tijd\"></ion-datetime>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Buiten</ion-label>\r\n      <ion-checkbox slot=\"end\" [(ngModel)]=\"optreden.isBuiten\"></ion-checkbox>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Sociaal</ion-label>\r\n      <ion-checkbox slot=\"end\" [(ngModel)]=\"optreden.isSociaal\"></ion-checkbox>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Openbaar</ion-label>\r\n      <ion-checkbox slot=\"end\" [(ngModel)]=\"optreden.isOpenbaar\"></ion-checkbox>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Besloten</ion-label>\r\n      <ion-checkbox slot=\"end\" [(ngModel)]=\"optreden.isBesloten\"></ion-checkbox>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Wild Op!</ion-label>\r\n      <ion-checkbox slot=\"end\" [(ngModel)]=\"optreden.isWildOp\"></ion-checkbox>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Aantal bezoekers</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"optreden.aantalBezoekers\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Gastdirigent</ion-label>\r\n      <ion-input [(ngModel)]=\"optreden.gastdirigent\" placeholder=\"Gastdirigent\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Opmerkingen</ion-label>\r\n      <ion-input [(ngModel)]=\"optreden.opmerkingen\" placeholder=\"Opmerkingen\"></ion-input>\r\n    </ion-item>\r\n\r\n    <h2>Repertoire</h2>\r\n    <ion-item *ngFor=\"let stuk of stukken\">\r\n      <ion-label>\r\n        <strong>{{stuk.titel}}</strong><br/>\r\n        {{stuk.componist}}\r\n      </ion-label>\r\n      <ion-chip outline slot=\"end\">\r\n        <ion-label>{{stuk.code}}</ion-label>\r\n      </ion-chip>\r\n      <ion-checkbox slot=\"end\" checked=\"{{containsStuk(stuk)}}\" (ionChange)=\"updateStuk(stuk, $event)\"></ion-checkbox>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/optreden/optreden.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/optreden/optreden.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wdHJlZGVuL29wdHJlZGVuLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/optreden/optreden.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/optreden/optreden.page.ts ***!
  \*************************************************/
/*! exports provided: OptredenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptredenPage", function() { return OptredenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var OptredenPage = /** @class */ (function () {
    function OptredenPage(route, db, router, toast) {
        this.route = route;
        this.db = db;
        this.router = router;
        this.toast = toast;
        this.optreden = null;
        this.stukken = [];
    }
    OptredenPage.prototype.ngOnInit = function () {
        var _this = this;
        this.db.getDatabaseState().subscribe(function (rdy) {
            if (rdy) {
                _this.route.paramMap.subscribe(function (params) {
                    var optredenId = params.get('id');
                    if (optredenId === '-1') {
                        _this.optreden = {
                            id: -1,
                            locatie: '',
                            plaats: '',
                            landCode: 'nl',
                            longitude: 0,
                            latitude: 0,
                            datum: _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"].getCurrentDatum(),
                            tijd: _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"].getCurrentTijd(),
                            isBuiten: false,
                            isSociaal: false,
                            isOpenbaar: false,
                            isBesloten: false,
                            isWildOp: false,
                            aantalBezoekers: 0,
                            gastdirigent: '',
                            opmerkingen: '',
                            stukken: [],
                        };
                        return;
                    }
                    _this.db.getOptreden(optredenId).then(function (data) {
                        _this.optreden = data;
                    });
                });
                _this.db.getStukken().subscribe(function (stukken) {
                    _this.stukken = stukken;
                });
            }
        });
    };
    OptredenPage.prototype.containsStuk = function (stuk) {
        return this.optreden.stukken.filter(function (o) { return o.id === stuk.id; }).length > 0;
    };
    OptredenPage.prototype.updateStuk = function (stuk, event) {
        if (event.detail.checked) {
            if (!this.containsStuk(stuk)) {
                this.optreden.stukken.push(stuk);
            }
        }
        else {
            if (this.containsStuk(stuk)) {
                this.optreden.stukken = this.optreden.stukken.filter(function (o) { return o.id !== stuk.id; });
            }
        }
    };
    OptredenPage.prototype.fixDatum = function () {
        this.optreden.datum = this.optreden.datum.split('T')[0];
    };
    OptredenPage.prototype.delete = function () {
        var _this = this;
        if (this.optreden !== null && this.optreden.id === -1) {
            this.router.navigateByUrl('/tabs/optredens');
            return;
        }
        this.db.deleteOptreden(this.optreden.id).then(function () {
            _this.router.navigateByUrl('/tabs/optredens');
        });
    };
    OptredenPage.prototype.update = function () {
        var _this = this;
        if (this.optreden !== null && this.optreden.id === -1) {
            this.db.addOptreden(this.optreden).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var toast;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.toast.create({
                                message: 'Optreden aangemaakt',
                                duration: 1000
                            })];
                        case 1:
                            toast = _a.sent();
                            toast.present();
                            this.router.navigateByUrl('/tabs/optredens');
                            return [2 /*return*/];
                    }
                });
            }); });
            return;
        }
        this.db.updateOptreden(this.optreden).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: 'Optreden bijgewerkt',
                            duration: 1000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        this.router.navigateByUrl('/tabs/optredens');
                        return [2 /*return*/];
                }
            });
        }); });
    };
    OptredenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-optreden',
            template: __webpack_require__(/*! ./optreden.page.html */ "./src/app/pages/optreden/optreden.page.html"),
            styles: [__webpack_require__(/*! ./optreden.page.scss */ "./src/app/pages/optreden/optreden.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], OptredenPage);
    return OptredenPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-optreden-optreden-module.js.map