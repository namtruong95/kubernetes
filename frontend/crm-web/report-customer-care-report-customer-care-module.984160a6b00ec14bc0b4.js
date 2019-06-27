(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-customer-care-report-customer-care-module"],{

/***/ "./src/app/dbr/report/report-customer-care/report-customer-care.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/dbr/report/report-customer-care/report-customer-care.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-report-filter (changeFilter)=\"exportReportCustomerCare($event)\" (changeTermPreviewReport)=\"previewReportCustomerCare($event)\"></app-report-filter>\n\n<div class=\"table-responsive py-4\">\n  <span>Showing {{ query.from }} to {{ query.to }} of {{ query.totalElements }} entries</span>\n  <table class=\"table care-activity-table\">\n    <thead>\n      <tr>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('customerName')\">\n          Customer Name\n          <i class=\"fa {{ getClassOrder('customerName') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('customerAddress')\">\n          Address\n          <i class=\"fa {{ getClassOrder('customerAddress') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('customerContactName')\">\n          Person\n          <i class=\"fa {{ getClassOrder('customerContactName') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('customerPosition')\">\n          Position\n          <i class=\"fa {{ getClassOrder('customerPosition') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('dateActivityFormat')\">\n          Date\n          <i class=\"fa {{ getClassOrder('dateActivityFormat') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('reason')\">\n          Reason\n          <i class=\"fa {{ getClassOrder('reason') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('type')\">\n          Type\n          <i class=\"fa {{ getClassOrder('type') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('status')\">\n          Status\n          <i class=\"fa {{ getClassOrder('status') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('staffName')\">\n          Sale Care\n          <i class=\"fa {{ getClassOrder('staffName') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('giftPrice')\">\n          Gift Price (MMK)\n          <i class=\"fa {{ getClassOrder('giftPrice') }}\"></i>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let careActivity of careActivities;\">\n        <td>{{ careActivity.customerName }}</td>\n        <td>{{ careActivity.customerAddress }}</td>\n        <td>{{ careActivity.customerContactName }}</td>\n        <td>{{ careActivity.customerPosition }}</td>\n        <td>{{ careActivity.dateActivityFormat }}</td>\n        <td>{{ careActivity.reason }}</td>\n        <td>{{ careActivity.type }}</td>\n        <td>{{ careActivity.statusStr }}</td>\n        <td>{{ careActivity.staffName }}</td>\n        <td>{{ careActivity.giftPrice }}</td>\n      </tr>\n      <tr [ngClass]=\"{ 'hidden': careActivities.length > 0 }\">\n        <td colspan=\"11\" class=\"text-center\">\n          Data not found\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"pagination mt-4\" [ngClass]=\"{ 'hidden': careActivities.length === 0 }\">\n  <pagination\n    class=\"pagination-md\"\n    [totalItems]=\"query.totalElements\"\n    [(ngModel)]=\"query.currentPage\"\n    pageBtnClass=\"btn\"\n    [itemsPerPage]=\"query.size\"\n    [maxSize]=\"5\"\n    (pageChanged)=\"pageChanged($event)\"\n    previousText=\"&lsaquo;\"\n    nextText=\"&rsaquo;\"\n    firstText=\"&laquo;\"\n    lastText=\"&raquo;\">\n  </pagination>\n</div>\n"

/***/ }),

/***/ "./src/app/dbr/report/report-customer-care/report-customer-care.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/dbr/report/report-customer-care/report-customer-care.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".care-activity-table.table thead th,\n.care-activity-table.table tbody td {\n  min-width: 200px; }\n  .care-activity-table.table thead th:first-child,\n  .care-activity-table.table tbody td:first-child {\n    max-width: 150px; }\n"

/***/ }),

/***/ "./src/app/dbr/report/report-customer-care/report-customer-care.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/dbr/report/report-customer-care/report-customer-care.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ReportCustomerCareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportCustomerCareComponent", function() { return ReportCustomerCareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/report.service */ "./src/shared/services/report.service.ts");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_utils_query_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/utils/query-builder */ "./src/shared/utils/query-builder.ts");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/orderBy */ "./node_modules/lodash/orderBy.js");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_6__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportCustomerCareComponent = /** @class */ (function () {
    function ReportCustomerCareComponent(_notify, _reportSv) {
        this._notify = _notify;
        this._reportSv = _reportSv;
        this.query = new shared_utils_query_builder__WEBPACK_IMPORTED_MODULE_5__["QueryBuilder"]();
        this.careActivities = [];
        this._orderArr = [];
        this._filterQuery = {};
    }
    Object.defineProperty(ReportCustomerCareComponent.prototype, "orderColumnName", {
        get: function () {
            return this._orderArr.map(function (item) {
                return item.columnName;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportCustomerCareComponent.prototype, "orderType", {
        get: function () {
            return this._orderArr.map(function (item) {
                return item.type;
            });
        },
        enumerable: true,
        configurable: true
    });
    ReportCustomerCareComponent.prototype.ngOnInit = function () { };
    ReportCustomerCareComponent.prototype._getListCareActivity = function () {
        var _this = this;
        var parmas = __assign({}, this.query.queryJSON(), this._filterQuery);
        this._reportSv.previewReportCareActivity(parmas).subscribe(function (res) {
            _this.careActivities = res.careActivityList;
            _this.query.setQuery(res);
        }, function (errors) {
            _this._notify.error(errors);
        });
    };
    ReportCustomerCareComponent.prototype.exportReportCustomerCare = function (event) {
        var _this = this;
        if (event === void 0) { event = {}; }
        this._reportSv.reportCareActivity(event).subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(res, "Customer-Care-Activity-" + moment__WEBPACK_IMPORTED_MODULE_3__().unix() + ".xlsx");
        }, function (errors) {
            _this._notify.error(errors);
        });
    };
    ReportCustomerCareComponent.prototype.previewReportCustomerCare = function (event) {
        if (event === void 0) { event = {}; }
        this._filterQuery = event;
        this.query.resetQuery();
        this._getListCareActivity();
    };
    ReportCustomerCareComponent.prototype.addOrder = function (columnName) {
        var _this = this;
        var index = this._orderArr.findIndex(function (item) { return item.columnName === columnName; });
        if (this._orderArr.length > 0 && this._orderArr[0].columnName === columnName) {
            if (this._orderArr[0].type === 'desc') {
                this._orderArr[0].type = 'asc';
            }
            else {
                this._orderArr[0].type = 'desc';
            }
        }
        else {
            this._orderArr = [];
            this._orderArr.push({
                columnName: columnName,
                type: 'desc',
            });
        }
        setTimeout(function () {
            _this._orderCustomer();
        }, 0);
    };
    ReportCustomerCareComponent.prototype._orderCustomer = function () {
        this.careActivities = lodash_orderBy__WEBPACK_IMPORTED_MODULE_6__(this.careActivities, this.orderColumnName, this.orderType);
    };
    ReportCustomerCareComponent.prototype.getClassOrder = function (columnName) {
        if (this._orderArr.length > 0 && this._orderArr[0].columnName === columnName) {
            if (this._orderArr[0].type === 'desc') {
                return 'fa-sort-down';
            }
            return 'fa-sort-up';
        }
        return 'fa-sort';
    };
    ReportCustomerCareComponent.prototype.pageChanged = function (event) {
        this.query.currentPage = event.page;
        this._getListCareActivity();
    };
    ReportCustomerCareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-customer-care',
            template: __webpack_require__(/*! ./report-customer-care.component.html */ "./src/app/dbr/report/report-customer-care/report-customer-care.component.html"),
            styles: [__webpack_require__(/*! ./report-customer-care.component.scss */ "./src/app/dbr/report/report-customer-care/report-customer-care.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__["NotifyService"], shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], ReportCustomerCareComponent);
    return ReportCustomerCareComponent;
}());



/***/ }),

/***/ "./src/app/dbr/report/report-customer-care/report-customer-care.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/dbr/report/report-customer-care/report-customer-care.module.ts ***!
  \********************************************************************************/
/*! exports provided: ReportCustomerCareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportCustomerCareModule", function() { return ReportCustomerCareModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _report_customer_care_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-customer-care.component */ "./src/app/dbr/report/report-customer-care/report-customer-care.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _report_filter_report_filter_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../report-filter/report-filter.module */ "./src/app/dbr/report/report-filter/report-filter.module.ts");
/* harmony import */ var shared_services_report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/services/report.service */ "./src/shared/services/report.service.ts");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _report_customer_care_component__WEBPACK_IMPORTED_MODULE_2__["ReportCustomerCareComponent"],
    },
];
var ReportCustomerCareModule = /** @class */ (function () {
    function ReportCustomerCareModule() {
    }
    ReportCustomerCareModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _report_filter_report_filter_module__WEBPACK_IMPORTED_MODULE_5__["ReportFilterModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot()],
            declarations: [_report_customer_care_component__WEBPACK_IMPORTED_MODULE_2__["ReportCustomerCareComponent"]],
            providers: [shared_services_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]],
        })
    ], ReportCustomerCareModule);
    return ReportCustomerCareModule;
}());



/***/ })

}]);
//# sourceMappingURL=report-customer-care-report-customer-care-module.984160a6b00ec14bc0b4.js.map