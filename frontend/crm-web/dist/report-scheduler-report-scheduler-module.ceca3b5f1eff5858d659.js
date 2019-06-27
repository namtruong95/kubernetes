(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-scheduler-report-scheduler-module"],{

/***/ "./src/app/dbr/report/report-scheduler/report-scheduler.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/dbr/report/report-scheduler/report-scheduler.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-report-filter (changeFilter)=\"exportReportScheduler($event)\" (changeTermPreviewReport)=\"previewReportScheduler($event)\"></app-report-filter>\n\n<div class=\"table-responsive py-4\">\n  <span>Showing {{ query.from }} to {{ query.to }} of {{ query.totalElements }} entries</span>\n  <table class=\"table sale-activity-table\">\n    <thead>\n      <tr>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('nameOfSale')\">\n          Name\n          <i class=\"fa {{ getClassOrder('nameOfSale') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('staffUserName')\" *ngIf=\"roleAccess\">\n          Staff\n          <i class=\"fa {{ getClassOrder('staffUserName') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('staffFullName')\" *ngIf=\"roleAccess\">\n          Full Name\n          <i class=\"fa {{ getClassOrder('staffFullName') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('start')\">\n          Start\n          <i class=\"fa {{ getClassOrder('start') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('end')\">\n          End\n          <i class=\"fa {{ getClassOrder('end') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('actionOfSaleName')\">\n          Activity Type\n          <i class=\"fa {{ getClassOrder('actionOfSaleName') }}\"></i>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let sAc of saleActivities;\">\n        <td>{{ sAc.nameOfSale }}</td>\n        <td *ngIf=\"roleAccess\">{{ sAc.staffUserName }}</td>\n        <td *ngIf=\"roleAccess\">{{ sAc.staffFullName }}</td>\n        <td>{{ sAc.start }}</td>\n        <td>{{ sAc.end }}</td>\n        <td>{{ sAc.actionOfSaleName }}</td>\n      </tr>\n      <tr [ngClass]=\"{ 'hidden': saleActivities.length > 0 }\">\n        <td colspan=\"5\" class=\"text-center\">\n          Data not found\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"pagination mt-4\" [ngClass]=\"{ 'hidden': saleActivities.length === 0 }\">\n  <pagination\n    class=\"pagination-md\"\n    [totalItems]=\"query.totalElements\"\n    [(ngModel)]=\"query.currentPage\"\n    pageBtnClass=\"btn\"\n    [itemsPerPage]=\"query.size\"\n    [maxSize]=\"5\"\n    (pageChanged)=\"pageChanged($event)\"\n    previousText=\"&lsaquo;\"\n    nextText=\"&rsaquo;\"\n    firstText=\"&laquo;\"\n    lastText=\"&raquo;\">\n  </pagination>\n</div>\n"

/***/ }),

/***/ "./src/app/dbr/report/report-scheduler/report-scheduler.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/dbr/report/report-scheduler/report-scheduler.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sale-activity-table.table thead th,\n.sale-activity-table.table tbody td {\n  min-width: 200px; }\n  .sale-activity-table.table thead th:first-child,\n  .sale-activity-table.table tbody td:first-child {\n    max-width: 150px; }\n"

/***/ }),

/***/ "./src/app/dbr/report/report-scheduler/report-scheduler.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dbr/report/report-scheduler/report-scheduler.component.ts ***!
  \***************************************************************************/
/*! exports provided: ReportSchedulerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSchedulerComponent", function() { return ReportSchedulerComponent; });
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
/* harmony import */ var app_role_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/role.service */ "./src/app/role.service.ts");
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








var ReportSchedulerComponent = /** @class */ (function () {
    function ReportSchedulerComponent(_notify, _reportSv, role) {
        this._notify = _notify;
        this._reportSv = _reportSv;
        this.role = role;
        this.query = new shared_utils_query_builder__WEBPACK_IMPORTED_MODULE_5__["QueryBuilder"]();
        this._orderArr = [];
        this.saleActivities = [];
        this._filterQuery = {};
    }
    Object.defineProperty(ReportSchedulerComponent.prototype, "orderColumnName", {
        get: function () {
            return this._orderArr.map(function (item) {
                return item.columnName;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportSchedulerComponent.prototype, "orderType", {
        get: function () {
            return this._orderArr.map(function (item) {
                return item.type;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportSchedulerComponent.prototype, "roleAccess", {
        get: function () {
            return this.role.is_admin || this.role.is_sale_director;
        },
        enumerable: true,
        configurable: true
    });
    ReportSchedulerComponent.prototype.ngOnInit = function () { };
    ReportSchedulerComponent.prototype._getSaleActivities = function () {
        var _this = this;
        var params = __assign({}, this.query.queryJSON(), this._filterQuery);
        this._reportSv.previewReportSchedule(params).subscribe(function (res) {
            _this.saleActivities = res.scheduleList;
            _this.query.setQuery(res);
        }, function (errors) {
            _this._notify.error(errors);
        });
    };
    ReportSchedulerComponent.prototype.exportReportScheduler = function (event) {
        var _this = this;
        if (event === void 0) { event = {}; }
        this._reportSv.reportSchedule(event).subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(res, "Schedule-Information-" + moment__WEBPACK_IMPORTED_MODULE_3__().unix() + ".xlsx");
        }, function (errors) {
            _this._notify.error(errors);
        });
    };
    ReportSchedulerComponent.prototype.previewReportScheduler = function (event) {
        if (event === void 0) { event = {}; }
        this._filterQuery = event;
        this.query.resetQuery();
        this._getSaleActivities();
    };
    ReportSchedulerComponent.prototype.addOrder = function (columnName) {
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
    ReportSchedulerComponent.prototype._orderCustomer = function () {
        this.saleActivities = lodash_orderBy__WEBPACK_IMPORTED_MODULE_6__(this.saleActivities, this.orderColumnName, this.orderType);
    };
    ReportSchedulerComponent.prototype.getClassOrder = function (columnName) {
        if (this._orderArr.length > 0 && this._orderArr[0].columnName === columnName) {
            if (this._orderArr[0].type === 'desc') {
                return 'fa-sort-down';
            }
            return 'fa-sort-up';
        }
        return 'fa-sort';
    };
    ReportSchedulerComponent.prototype.pageChanged = function (event) {
        this.query.currentPage = event.page;
        this._getSaleActivities();
    };
    ReportSchedulerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-scheduler',
            template: __webpack_require__(/*! ./report-scheduler.component.html */ "./src/app/dbr/report/report-scheduler/report-scheduler.component.html"),
            styles: [__webpack_require__(/*! ./report-scheduler.component.scss */ "./src/app/dbr/report/report-scheduler/report-scheduler.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__["NotifyService"], shared_services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"], app_role_service__WEBPACK_IMPORTED_MODULE_7__["RoleService"]])
    ], ReportSchedulerComponent);
    return ReportSchedulerComponent;
}());



/***/ }),

/***/ "./src/app/dbr/report/report-scheduler/report-scheduler.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/dbr/report/report-scheduler/report-scheduler.module.ts ***!
  \************************************************************************/
/*! exports provided: ReportSchedulerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSchedulerModule", function() { return ReportSchedulerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _report_scheduler_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-scheduler.component */ "./src/app/dbr/report/report-scheduler/report-scheduler.component.ts");
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
        component: _report_scheduler_component__WEBPACK_IMPORTED_MODULE_2__["ReportSchedulerComponent"],
    },
];
var ReportSchedulerModule = /** @class */ (function () {
    function ReportSchedulerModule() {
    }
    ReportSchedulerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _report_filter_report_filter_module__WEBPACK_IMPORTED_MODULE_5__["ReportFilterModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot()],
            declarations: [_report_scheduler_component__WEBPACK_IMPORTED_MODULE_2__["ReportSchedulerComponent"]],
            providers: [shared_services_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]],
        })
    ], ReportSchedulerModule);
    return ReportSchedulerModule;
}());



/***/ })

}]);
//# sourceMappingURL=report-scheduler-report-scheduler-module.ceca3b5f1eff5858d659.js.map