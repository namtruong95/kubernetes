(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dbr-dbr-module"],{

/***/ "./src/app/dbr/dbr.component.html":
/*!****************************************!*\
  !*** ./src/app/dbr/dbr.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/dbr/dbr.component.scss":
/*!****************************************!*\
  !*** ./src/app/dbr/dbr.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dbr/dbr.component.ts":
/*!**************************************!*\
  !*** ./src/app/dbr/dbr.component.ts ***!
  \**************************************/
/*! exports provided: DbrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbrComponent", function() { return DbrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DbrComponent = /** @class */ (function () {
    function DbrComponent() {
    }
    DbrComponent.prototype.ngOnInit = function () { };
    DbrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dbr',
            template: __webpack_require__(/*! ./dbr.component.html */ "./src/app/dbr/dbr.component.html"),
            styles: [__webpack_require__(/*! ./dbr.component.scss */ "./src/app/dbr/dbr.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], DbrComponent);
    return DbrComponent;
}());



/***/ }),

/***/ "./src/app/dbr/dbr.module.ts":
/*!***********************************!*\
  !*** ./src/app/dbr/dbr.module.ts ***!
  \***********************************/
/*! exports provided: DbrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbrModule", function() { return DbrModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dbr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dbr.component */ "./src/app/dbr/dbr.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _dbr_component__WEBPACK_IMPORTED_MODULE_2__["DbrComponent"],
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dbr-dashboard/dbr-dashboard.module#DbrDashboardModule',
            },
            {
                path: 'reports',
                loadChildren: './report/dbr-report/dbr-report.module#DbrReportModule',
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
        ],
    },
];
var DbrModule = /** @class */ (function () {
    function DbrModule() {
    }
    DbrModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_dbr_component__WEBPACK_IMPORTED_MODULE_2__["DbrComponent"]],
        })
    ], DbrModule);
    return DbrModule;
}());



/***/ })

}]);
//# sourceMappingURL=dbr-dbr-module.ccbc8f1bfbfbcccc9727.js.map