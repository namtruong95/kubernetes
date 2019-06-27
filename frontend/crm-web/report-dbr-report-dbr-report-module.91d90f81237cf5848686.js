(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-dbr-report-dbr-report-module"],{

/***/ "./src/app/dbr/report/dbr-report/dbr-report.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/dbr/report/dbr-report/dbr-report.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/dbr/report/dbr-report/dbr-report.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/dbr/report/dbr-report/dbr-report.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dbr/report/dbr-report/dbr-report.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dbr/report/dbr-report/dbr-report.component.ts ***!
  \***************************************************************/
/*! exports provided: DbrReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbrReportComponent", function() { return DbrReportComponent; });
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

var DbrReportComponent = /** @class */ (function () {
    function DbrReportComponent() {
    }
    DbrReportComponent.prototype.ngOnInit = function () {
    };
    DbrReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dbr-report',
            template: __webpack_require__(/*! ./dbr-report.component.html */ "./src/app/dbr/report/dbr-report/dbr-report.component.html"),
            styles: [__webpack_require__(/*! ./dbr-report.component.scss */ "./src/app/dbr/report/dbr-report/dbr-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DbrReportComponent);
    return DbrReportComponent;
}());



/***/ }),

/***/ "./src/app/dbr/report/dbr-report/dbr-report.module.ts":
/*!************************************************************!*\
  !*** ./src/app/dbr/report/dbr-report/dbr-report.module.ts ***!
  \************************************************************/
/*! exports provided: DbrReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbrReportModule", function() { return DbrReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dbr_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dbr-report.component */ "./src/app/dbr/report/dbr-report/dbr-report.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var shared_services_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/services/report.service */ "./src/shared/services/report.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _dbr_report_component__WEBPACK_IMPORTED_MODULE_2__["DbrReportComponent"],
        children: [
            {
                path: 'sale-activities',
                loadChildren: '../report-sale-activity/report-sale-activity.module#ReportSaleActivityModule',
            },
            {
                path: 'schedulers',
                loadChildren: '../report-scheduler/report-scheduler.module#ReportSchedulerModule',
            },
            {
                path: 'quotations',
                loadChildren: '../report-quotation/report-quotation.module#ReportQuotationModule',
            },
            {
                path: 'customer-care',
                loadChildren: '../report-customer-care/report-customer-care.module#ReportCustomerCareModule',
            },
        ],
    },
];
var DbrReportModule = /** @class */ (function () {
    function DbrReportModule() {
    }
    DbrReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
            declarations: [_dbr_report_component__WEBPACK_IMPORTED_MODULE_2__["DbrReportComponent"]],
            providers: [shared_services_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"]],
        })
    ], DbrReportModule);
    return DbrReportModule;
}());



/***/ })

}]);
//# sourceMappingURL=report-dbr-report-dbr-report-module.91d90f81237cf5848686.js.map