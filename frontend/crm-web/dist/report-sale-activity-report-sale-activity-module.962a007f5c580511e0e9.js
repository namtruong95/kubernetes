(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-sale-activity-report-sale-activity-module"],{

/***/ "./src/app/dbr/report/report-sale-activity/report-sale-activity.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/dbr/report/report-sale-activity/report-sale-activity.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-report-filter (changeFilter)=\"exportReportSaleActivity($event)\" (changeTermPreviewReport)=\"previewReportSaleActivity($event)\"></app-report-filter>\n\n<div class=\"table-responsive py-4\">\n  <span>Showing {{ query.from }} to {{ query.to }} of {{ query.totalElements }} entries</span>\n  <table class=\"table sale-activity-table\">\n    <thead>\n      <tr>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('customer_name')\">\n          Customer\n          <i class=\"fa {{ getClassOrder('customer_name') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('staff_user_name')\">\n          Staff\n          <i class=\"fa {{ getClassOrder('staff_user_name') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('staff_full_name')\">\n          Full Name\n          <i class=\"fa {{ getClassOrder('staff_full_name') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('statusOfProcessName')\">\n          Activity Type\n          <i class=\"fa {{ getClassOrder('statusOfProcessName') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('dateDisplay')\">\n          Sale Date\n          <i class=\"fa {{ getClassOrder('dateDisplay') }}\"></i>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let saleActivity of saleActivities;\">\n        <td>{{ saleActivity.customer_name }}</td>\n        <td>{{ saleActivity.staff_user_name }}</td>\n        <td>{{ saleActivity.staff_full_name }}</td>\n        <td>{{ saleActivity.statusOfProcessName }}</td>\n        <td>{{ saleActivity.dateDisplay }}</td>\n      </tr>\n      <tr [ngClass]=\"{ 'hidden': saleActivities.length > 0 }\">\n        <td colspan=\"5\" class=\"text-center\">\n          Data not found\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"pagination mt-4\" [ngClass]=\"{ 'hidden': saleActivities.length === 0 }\">\n  <pagination\n    class=\"pagination-md\"\n    [totalItems]=\"query.totalElements\"\n    [(ngModel)]=\"query.currentPage\"\n    pageBtnClass=\"btn\"\n    [itemsPerPage]=\"query.size\"\n    [maxSize]=\"5\"\n    (pageChanged)=\"pageChanged($event)\"\n    previousText=\"&lsaquo;\"\n    nextText=\"&rsaquo;\"\n    firstText=\"&laquo;\"\n    lastText=\"&raquo;\">\n  </pagination>\n</div>\n"

/***/ }),

/***/ "./src/app/dbr/report/report-sale-activity/report-sale-activity.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/dbr/report/report-sale-activity/report-sale-activity.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sale-activity-table.table thead th,\n.sale-activity-table.table tbody td {\n  min-width: 200px; }\n  .sale-activity-table.table thead th:first-child,\n  .sale-activity-table.table tbody td:first-child {\n    max-width: 150px; }\n"

/***/ }),

/***/ "./src/app/dbr/report/report-sale-activity/report-sale-activity.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/dbr/report/report-sale-activity/report-sale-activity.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ReportSaleActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSaleActivityComponent", function() { return ReportSaleActivityComponent; });
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







var ReportSaleActivityComponent = /** @class */ (function () {
    function ReportSaleActivityComponent(_notify, _reportSv) {
        this._notify = _notify;
        this._reportSv = _reportSv;
        this.query = new shared_utils_query_builder__WEBPACK_IMPORTED_MODULE_5__["QueryBuilder"]();
        this.saleActivities = [];
        this._orderArr = [];
        this._filterQuery = {};
    }
    Object.defineProperty(ReportSaleActivityComponent.prototype, "orderColumnName", {
        get: function () {
            return this._orderArr.map(function (item) {
                return item.columnName;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportSaleActivityComponent.prototype, "orderType", {
        get: function () {
            return this._orderArr.map(function (item) {
                return item.type;
            });
        },
        enumerable: true,
        configurable: true
    });
    ReportSaleActivityComponent.prototype.ngOnInit = function () { };
    ReportSaleActivityComponent.prototype._getListSaleActivity = function () {
        var _this = this;
        var parmas = __assign({}, this.query.queryJSON(), this._filterQuery);
        this._reportSv.previewReportSaleActivity(parmas).subscribe(function (res) {
            _this.saleActivities = res.saleActivityList;
            _this.query.setQuery(res);
        }, function (errors) {
            _this._notify.error(errors);
        });
    };
    ReportSaleActivityComponent.prototype.exportReportSaleActivity = function (event) {
        var _this = this;
        if (event === void 0) { event = {}; }
        this._reportSv.reportSaleActivity(event).subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(res, "Sale-Activity-" + moment__WEBPACK_IMPORTED_MODULE_3__().unix() + ".xlsx");
        }, function (errors) {
            _this._notify.error(errors);
        });
    };
    ReportSaleActivityComponent.prototype.previewReportSaleActivity = function (event) {
        if (event === void 0) { event = {}; }
        this._filterQuery = event;
        this.query.resetQuery();
        this._getListSaleActivity();
    };
    ReportSaleActivityComponent.prototype.addOrder = function (columnName) {
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
    ReportSaleActivityComponent.prototype._orderCustomer = function () {
        this.saleActivities = lodash_orderBy__WEBPACK_IMPORTED_MODULE_6__(this.saleActivities, this.orderColumnName, this.orderType);
    };
    ReportSaleActivityComponent.prototype.getClassOrder = function (columnName) {
        if (this._orderArr.length > 0 && this._orderArr[0].columnName === columnName) {
            if (this._orderArr[0].type === 'desc') {
                return 'fa-sort-down';
            }
            return 'fa-sort-up';
        }
        return 'fa-sort';
    };
    ReportSaleActivityComponent.prototype.pageChanged = function (event) {
        this.query.currentPage = event.page;
        this._getListSaleActivity();
    };
    ReportSaleActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-sale-activity',
            template: __webpack_require__(/*! ./report-sale-activity.component.html */ "./src/app/dbr/report/report-sale-activity/report-sale-activity.component.html"),
            styles: [__webpack_require__(/*! ./report-sale-activity.component.scss */ "./src/app/dbr/report/report-sale-activity/report-sale-activity.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__["NotifyService"], shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], ReportSaleActivityComponent);
    return ReportSaleActivityComponent;
}());



/***/ }),

/***/ "./src/app/dbr/report/report-sale-activity/report-sale-activity.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/dbr/report/report-sale-activity/report-sale-activity.module.ts ***!
  \********************************************************************************/
/*! exports provided: ReportSaleActivityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSaleActivityModule", function() { return ReportSaleActivityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _report_sale_activity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-sale-activity.component */ "./src/app/dbr/report/report-sale-activity/report-sale-activity.component.ts");
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
        component: _report_sale_activity_component__WEBPACK_IMPORTED_MODULE_2__["ReportSaleActivityComponent"],
    },
];
var ReportSaleActivityModule = /** @class */ (function () {
    function ReportSaleActivityModule() {
    }
    ReportSaleActivityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _report_filter_report_filter_module__WEBPACK_IMPORTED_MODULE_5__["ReportFilterModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot()],
            declarations: [_report_sale_activity_component__WEBPACK_IMPORTED_MODULE_2__["ReportSaleActivityComponent"]],
            providers: [shared_services_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]],
        })
    ], ReportSaleActivityModule);
    return ReportSaleActivityModule;
}());



/***/ })

}]);
//# sourceMappingURL=report-sale-activity-report-sale-activity-module.962a007f5c580511e0e9.js.map