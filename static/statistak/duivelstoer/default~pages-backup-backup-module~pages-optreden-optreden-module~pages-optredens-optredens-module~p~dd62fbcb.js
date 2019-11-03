(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-backup-backup-module~pages-optreden-optreden-module~pages-optredens-optredens-module~p~dd62fbcb"],{

/***/ "./src/app/services/database.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/sqlite-porter/ngx */ "./node_modules/@ionic-native/sqlite-porter/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var DatabaseService = /** @class */ (function () {
    function DatabaseService(plt, sqlitePorter, sqlite, http) {
        var _this = this;
        this.plt = plt;
        this.sqlitePorter = sqlitePorter;
        this.sqlite = sqlite;
        this.http = http;
        this.dbReady = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.optredens = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        this.stukken = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        this.plt.ready().then(function () {
            _this.sqlite.create({
                name: 'statistak.db',
                location: 'default'
            })
                .then(function (db) {
                _this.database = db;
                _this.seedDatabase();
            });
        });
    }
    DatabaseService.prototype.seedDatabase = function () {
        var _this = this;
        this.http.get('assets/seed.sql', { responseType: 'text' })
            .subscribe(function (sql) {
            _this.sqlitePorter.importSqlToDb(_this.database, sql)
                .then(function (_) {
                _this.loadOptredens();
                _this.loadStukken();
                _this.dbReady.next(true);
            })
                .catch(function (e) { return console.error(e); });
        });
    };
    DatabaseService.prototype.importDatabase = function (sql) {
        var _this = this;
        return this.sqlitePorter.importSqlToDb(this.database, sql).finally(function () {
            _this.loadOptredens();
            _this.loadStukken();
        });
    };
    DatabaseService.prototype.exportDatabase = function () {
        return this.sqlitePorter.exportDbToSql(this.database);
    };
    DatabaseService.prototype.getDatabaseState = function () {
        return this.dbReady.asObservable();
    };
    DatabaseService.prototype.getOptredens = function () {
        return this.optredens.asObservable();
    };
    DatabaseService.prototype.getStukken = function () {
        return this.stukken.asObservable();
    };
    DatabaseService.prototype.loadOptredens = function () {
        var _this = this;
        return this.database.executeSql('SELECT * FROM optreden', []).then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var optredens, i, stukken;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        optredens = [];
                        if (!(data.rows.length > 0)) return [3 /*break*/, 4];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < data.rows.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getOptredenRepertoire(data.rows.item(i).id)];
                    case 2:
                        stukken = _a.sent();
                        stukken.sort(_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"].dynamicSort('code'));
                        optredens.push({
                            id: data.rows.item(i).id,
                            locatie: data.rows.item(i).locatie,
                            plaats: data.rows.item(i).plaats,
                            landCode: data.rows.item(i).landCode,
                            longitude: data.rows.item(i).longitude,
                            latitude: data.rows.item(i).latitude,
                            datum: data.rows.item(i).datum,
                            tijd: data.rows.item(i).tijd,
                            isBuiten: data.rows.item(i).isBuiten === 1,
                            isSociaal: data.rows.item(i).isSociaal === 1,
                            isOpenbaar: data.rows.item(i).isOpenbaar === 1,
                            isBesloten: data.rows.item(i).isBesloten === 1,
                            isWildOp: data.rows.item(i).isWildOp === 1,
                            aantalBezoekers: data.rows.item(i).aantalBezoekers,
                            stukken: stukken,
                        });
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.optredens.next(optredens);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DatabaseService.prototype.addOptreden = function (optreden) {
        var _this = this;
        var data = [
            optreden.locatie,
            optreden.plaats,
            optreden.landCode,
            optreden.longitude,
            optreden.latitude,
            optreden.datum,
            optreden.tijd,
            optreden.isBuiten ? 1 : 0,
            optreden.isSociaal ? 1 : 0,
            optreden.isOpenbaar ? 1 : 0,
            optreden.isBesloten ? 1 : 0,
            optreden.isWildOp ? 1 : 0,
            optreden.aantalBezoekers,
        ];
        return this.database.executeSql('INSERT INTO optreden (locatie, plaats, landCode, longitude, latitude, datum, tijd, ' +
            'isBuiten, isSociaal, isOpenbaar, isBesloten, isWildOp, aantalBezoekers) ' +
            'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', data).then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var stukString;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(optreden.stukken.length > 0)) return [3 /*break*/, 2];
                        stukString = optreden.stukken.map(function (stuk) { return "(" + optreden.id + ", " + stuk.id + ")"; }).join(', ');
                        return [4 /*yield*/, this.database.executeSql("INSERT INTO optreden_repertoire (optredenId, stukId) VALUES " + stukString)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.loadOptredens();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DatabaseService.prototype.getOptreden = function (id) {
        var _this = this;
        return this.database.executeSql('SELECT * FROM optreden WHERE id = ?', [id]).then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var stukken;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOptredenRepertoire(data.rows.item(0).id)];
                    case 1:
                        stukken = _a.sent();
                        stukken.sort(_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"].dynamicSort('code'));
                        return [2 /*return*/, {
                                id: data.rows.item(0).id,
                                locatie: data.rows.item(0).locatie,
                                plaats: data.rows.item(0).plaats,
                                landCode: data.rows.item(0).landCode,
                                longitude: data.rows.item(0).longitude,
                                latitude: data.rows.item(0).latitude,
                                datum: data.rows.item(0).datum,
                                tijd: data.rows.item(0).tijd,
                                isBuiten: data.rows.item(0).isBuiten === 1,
                                isSociaal: data.rows.item(0).isSociaal === 1,
                                isOpenbaar: data.rows.item(0).isOpenbaar === 1,
                                isBesloten: data.rows.item(0).isBesloten === 1,
                                isWildOp: data.rows.item(0).isWildOp === 1,
                                aantalBezoekers: data.rows.item(0).aantalBezoekers,
                                stukken: stukken,
                            }];
                }
            });
        }); });
    };
    DatabaseService.prototype.deleteOptreden = function (id) {
        var _this = this;
        return this.database.executeSql('DELETE FROM optreden WHERE id = ?', [id]).then(function (_) {
            _this.loadOptredens();
        });
    };
    DatabaseService.prototype.updateOptreden = function (optreden) {
        var _this = this;
        var data = [
            optreden.locatie,
            optreden.plaats,
            optreden.landCode,
            optreden.longitude,
            optreden.latitude,
            optreden.datum,
            optreden.tijd,
            optreden.isBuiten ? 1 : 0,
            optreden.isSociaal ? 1 : 0,
            optreden.isOpenbaar ? 1 : 0,
            optreden.isBesloten ? 1 : 0,
            optreden.isWildOp ? 1 : 0,
            optreden.aantalBezoekers,
        ];
        return this.database.executeSql("\n    UPDATE optreden SET locatie = ?, plaats = ?, landCode = ?, longitude = ?, latitude = ?, datum = ?, tijd = ?,\n      isBuiten = ?, isSociaal = ?, isOpenbaar = ?, isBesloten = ?, isWildOp = ?, aantalBezoekers = ?\n      WHERE id = " + optreden.id, data).then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var stukString, e_1, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(optreden.stukken.length > 0)) return [3 /*break*/, 7];
                        stukString = optreden.stukken.map(function (stuk) { return "(" + optreden.id + ", " + stuk.id + ")"; }).join(', ');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.database.executeSql("DELETE FROM optreden_repertoire WHERE optredenId=" + optreden.id)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        if (!e_1.hasOwnProperty('rows')) {
                            console.error(e_1);
                        }
                        return [3 /*break*/, 4];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.database.executeSql("INSERT INTO optreden_repertoire (optredenId, stukId) VALUES " + stukString)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        e_2 = _a.sent();
                        if (!e_2.hasOwnProperty('rows')) {
                            console.error(e_2);
                        }
                        return [3 /*break*/, 7];
                    case 7:
                        this.loadOptredens();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DatabaseService.prototype.loadStukken = function () {
        var _this = this;
        return this.database.executeSql('SELECT * FROM stuk', []).then(function (data) {
            var stukken = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    stukken.push({
                        id: data.rows.item(i).id,
                        titel: data.rows.item(i).titel,
                        componist: data.rows.item(i).componist,
                        code: data.rows.item(i).code,
                        metSolistKlarinet: data.rows.item(i).metSolistKlarinet === 1,
                        metSolistZang: data.rows.item(i).metSolistZang === 1,
                    });
                }
            }
            stukken.sort(_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"].dynamicSort('code'));
            _this.stukken.next(stukken);
        });
    };
    DatabaseService.prototype.addStuk = function (stuk) {
        var _this = this;
        var data = [
            stuk.titel,
            stuk.componist,
            stuk.code,
            stuk.metSolistKlarinet ? 1 : 0,
            stuk.metSolistZang ? 1 : 0,
        ];
        return this.database.executeSql('INSERT INTO stuk (titel, componist, code, metSolistKlarinet, metSolistZang) VALUES (?, ?, ?, ?, ?)', data).then(function () {
            _this.loadStukken();
        });
    };
    DatabaseService.prototype.getStuk = function (id) {
        return this.database.executeSql('SELECT * FROM stuk WHERE id = ?', [id]).then(function (data) {
            return {
                id: data.rows.item(0).id,
                titel: data.rows.item(0).titel,
                componist: data.rows.item(0).componist,
                code: data.rows.item(0).code,
                metSolistKlarinet: data.rows.item(0).metSolistKlarinet === 1,
                metSolistZang: data.rows.item(0).metSolistZang === 1,
            };
        });
    };
    DatabaseService.prototype.getOptredenRepertoire = function (optredenId) {
        return this.database.executeSql("\n    SELECT * FROM optreden_repertoire JOIN stuk ON optreden_repertoire.stukId = stuk.id\n    WHERE optreden_repertoire.optredenId = ?", [optredenId]).then(function (data) {
            var stukken = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    stukken.push({
                        id: data.rows.item(i).id,
                        titel: data.rows.item(i).titel,
                        componist: data.rows.item(i).componist,
                        code: data.rows.item(i).code,
                        metSolistKlarinet: data.rows.item(i).metSolistKlarinet === 1,
                        metSolistZang: data.rows.item(i).metSolistZang === 1,
                    });
                }
            }
            stukken.sort(_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"].dynamicSort('code'));
            return stukken;
        });
    };
    DatabaseService.prototype.deleteStuk = function (id) {
        var _this = this;
        return this.database.executeSql('DELETE FROM stuk WHERE id = ?', [id]).then(function (_) {
            _this.loadStukken();
            _this.loadOptredens();
        });
    };
    DatabaseService.prototype.updateStuk = function (stuk) {
        var _this = this;
        var data = [
            stuk.titel,
            stuk.componist,
            stuk.code,
            stuk.metSolistKlarinet ? 1 : 0,
            stuk.metSolistZang ? 1 : 0,
        ];
        return this.database.executeSql("UPDATE stuk SET titel = ?, componist = ?, code = ?, metSolistKlarinet = ?, metSolistZang = ?\n    WHERE id = " + stuk.id, data).then(function () {
            _this.loadStukken();
            _this.loadOptredens();
        });
    };
    DatabaseService.prototype.getNumOptredensPerDag = function () {
        return this.database.executeSql("SELECT count(*) AS numOptredens, datum FROM optreden GROUP BY datum").catch(function (data) {
            if (!data.hasOwnProperty('rows')) {
                console.error('Real error');
                return;
            }
            var dagen = [];
            for (var i = 0; i < data.rows.length; i++) {
                dagen.push({
                    name: new Date(data.rows.item(i).datum),
                    value: data.rows.item(i).numOptredens,
                });
            }
            return dagen;
        });
    };
    DatabaseService.prototype.getAverageOptredensPerDag = function () {
        return this.getNumOptredensPerDag().then(function (data) {
            var average = function (arr) { return arr.reduce(function (p, c) { return p + c; }, 0) / arr.length; };
            return average(data.map(function (o) { return o.value; }));
        });
    };
    DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLitePorter"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.dynamicSort = function (property) {
        var sortOrder = 1;
        if (property[0] === '-') {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    };
    SharedModule.getCurrentDatum = function () {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };
    SharedModule.getCurrentTijd = function () {
        var today = new Date();
        var hh = String(today.getHours()).padStart(2, '0');
        var mm = String(today.getMinutes()).padStart(2, '0');
        return hh + ":" + mm;
    };
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-backup-backup-module~pages-optreden-optreden-module~pages-optredens-optredens-module~p~dd62fbcb.js.map