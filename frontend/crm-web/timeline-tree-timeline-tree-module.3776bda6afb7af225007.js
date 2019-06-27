(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["timeline-tree-timeline-tree-module"],{

/***/ "./src/app/timeline/timeline-event/timeline-event.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/timeline/timeline-event/timeline-event.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"timeline-badge {{ event.statusOfProcessColor }}\"><i [ngClass]=\"event.statusOfProcessIcon\"></i></div>\n<div class=\"timeline-panel\">\n  <div class=\"timeline-heading\">\n    <h4 class=\"timeline-title\">{{ event.statusOfProcessName }}</h4>\n    <p><small class=\"text-muted\"><i class=\"fa fa-time\"></i> {{ event.dateDisplay }}</small></p>\n  </div>\n  <div class=\"timeline-body\">\n    <p class=\"text--break\">{{ event.note }}</p>\n    <p class=\"font-weight-bold font-italic\">by {{ event.staff_full_name }}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/timeline/timeline-event/timeline-event.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/timeline/timeline-event/timeline-event.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/timeline/timeline-event/timeline-event.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/timeline/timeline-event/timeline-event.component.ts ***!
  \*********************************************************************/
/*! exports provided: TimelineEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineEventComponent", function() { return TimelineEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var models_sale_activity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/sale-activity */ "./src/models/sale-activity.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimelineEventComponent = /** @class */ (function () {
    function TimelineEventComponent() {
    }
    TimelineEventComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('event'),
        __metadata("design:type", models_sale_activity__WEBPACK_IMPORTED_MODULE_1__["SaleActivity"])
    ], TimelineEventComponent.prototype, "event", void 0);
    TimelineEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline-event',
            template: __webpack_require__(/*! ./timeline-event.component.html */ "./src/app/timeline/timeline-event/timeline-event.component.html"),
            styles: [__webpack_require__(/*! ./timeline-event.component.scss */ "./src/app/timeline/timeline-event/timeline-event.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], TimelineEventComponent);
    return TimelineEventComponent;
}());



/***/ }),

/***/ "./src/app/timeline/timeline-event/timeline-event.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/timeline/timeline-event/timeline-event.module.ts ***!
  \******************************************************************/
/*! exports provided: TimelineEventModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineEventModule", function() { return TimelineEventModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _timeline_event_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline-event.component */ "./src/app/timeline/timeline-event/timeline-event.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TimelineEventModule = /** @class */ (function () {
    function TimelineEventModule() {
    }
    TimelineEventModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_timeline_event_component__WEBPACK_IMPORTED_MODULE_2__["TimelineEventComponent"]],
            exports: [_timeline_event_component__WEBPACK_IMPORTED_MODULE_2__["TimelineEventComponent"]],
        })
    ], TimelineEventModule);
    return TimelineEventModule;
}());



/***/ }),

/***/ "./src/app/timeline/timeline-tree/timeline-tree.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/timeline/timeline-tree/timeline-tree.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<form novalidate>\n  <div class=\"row mb-4 customer-form-content\">\n    <div class=\"col-lg-3 col-md-6 form-group\">\n      <label>Customer</label>\n      <ng-select\n        [items]=\"customers | async\"\n        class=\"text-left\"\n        [closeOnSelect]=\"true\"\n        [clearable]=\"true\"\n        [loading]=\"isLoadingCusotmer\"\n        placeholder=\"please select customer\"\n        [searchable]=\"true\"\n        name=\"customer\"\n        [(ngModel)]=\"filterTerm.customer\"\n        bindLabel=\"customerName\"\n        [typeahead]=\"customerInput$\">\n      </ng-select>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6\" *ngIf=\"roleAccess\">\n      <div class=\"form-group\">\n        <label for=\"Region\">Branch</label>\n        <ng-select\n          [items]=\"branches\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingBranch\"\n          placeholder=\"please select region\"\n          [searchable]=\"false\"\n          name=\"branches\"\n          [(ngModel)]=\"filterTerm.branchId\"\n          #Region=\"ngModel\"\n          bindLabel=\"name\"\n          bindValue=\"id\">\n        </ng-select>\n      </div>\n    </div>\n\n    <!-- <div class=\"col-lg-6 col-md-12 form-group\">\n      <label for=\"Name\">Staff</label>\n      <ng-select\n        [items]=\"staffs\"\n        class=\"text-left\"\n        [closeOnSelect]=\"true\"\n        [clearable]=\"true\"\n        [loading]=\"isLoadingStaff\"\n        placeholder=\"please select staff\"\n        [searchable]=\"false\"\n        name=\"staff\"\n        [(ngModel)]=\"filterTerm.staff\"\n        bindLabel=\"code_full_name\">\n      </ng-select>\n    </div> -->\n\n    <div class=\"col-lg-3 col-md-6 form-group\">\n      <label for=\"FromDate\">From Date</label>\n      <div class=\"input-group\">\n        <input type=\"text\"\n          name=\"dateFrom\"\n          id=\"FromDate\"\n          class=\"form-control\"\n          [ngClass]=\"{ 'border-right-0': filterTerm.dateFrom }\"\n          readonly\n          placeholder=\"please select date from\"\n          bsDatepicker\n          [(bsValue)]=\"filterTerm.dateFrom\"\n          [bsConfig]=\"DATEPICKER_CONFIG\">\n\n        <div class=\"input-group-append\" *ngIf=\"filterTerm.dateFrom\">\n          <span class=\"input-group-text bg--white\">\b<i class=\"fa fa-times cursor-pointer\" (click)=\"filterTerm.dateFrom = null\"></i></span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 form-group\">\n      <label for=\"ToDate\">To Date</label>\n      <div class=\"input-group\">\n        <input type=\"text\" name=\"dateTo\" id=\"ToDate\"\n          class=\"form-control\"\n          [ngClass]=\"{ 'border-right-0': filterTerm.dateTo }\"\n          readonly\n          placeholder=\"please select date to\"\n          bsDatepicker\n          [(bsValue)]=\"filterTerm.dateTo\"\n          [bsConfig]=\"DATEPICKER_CONFIG\">\n\n        <div class=\"input-group-append\" *ngIf=\"filterTerm.dateTo\">\n          <span class=\"input-group-text bg--white\">\b<i class=\"fa fa-times cursor-pointer\" (click)=\"filterTerm.dateTo = null\"></i></span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-12\">\n      <div class=\"form-group\">\n        <button type=\"button\" class=\"btn btn-primary\"\n          [disabled]=\"isLoading\"\n          (click)=\"filterSaleActivities()\">\n          <i class=\"fa fa-search mr-2\"></i>\n          Filter\n        </button>\n      </div>\n    </div>\n  </div>\n</form>\n\n<ul class=\"timeline\" *ngIf=\"saleActivities.length > 0\" [hidden]=\"!filterTerm.customer || !filterTerm.customer.id\">\n  <li *ngFor=\"let event of saleActivities;\">\n    <app-timeline-event [event]=\"event\"></app-timeline-event>\n  </li>\n</ul>\n\n<button type=\"button\"\n  class=\"btn btn-primary\" [disabled]=\"!filterTerm.customer || !filterTerm.customer.id\"\n  (click)=\"addActivity()\">Add Activity</button>\n"

/***/ }),

/***/ "./src/app/timeline/timeline-tree/timeline-tree.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/timeline/timeline-tree/timeline-tree.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/timeline/timeline-tree/timeline-tree.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/timeline/timeline-tree/timeline-tree.component.ts ***!
  \*******************************************************************/
/*! exports provided: TimelineTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineTreeComponent", function() { return TimelineTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/observable/concat */ "./node_modules/rxjs/internal/observable/concat.js");
/* harmony import */ var rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/tap */ "./node_modules/rxjs/internal/operators/tap.js");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shared_services_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/services/customer.service */ "./src/shared/services/customer.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
/* harmony import */ var shared_services_sale_activity_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/services/sale-activity.service */ "./src/shared/services/sale-activity.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var constants_datepicker_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! constants/datepicker-config */ "./src/constants/datepicker-config.ts");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_role_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/role.service */ "./src/app/role.service.ts");
/* harmony import */ var shared_services_branch_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! shared/services/branch.service */ "./src/shared/services/branch.service.ts");
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




















var TimelineTreeComponent = /** @class */ (function () {
    function TimelineTreeComponent(_customerSv, _userSv, _notify, _saleActivitySv, _emitter, _router, role, _branchSv) {
        this._customerSv = _customerSv;
        this._userSv = _userSv;
        this._notify = _notify;
        this._saleActivitySv = _saleActivitySv;
        this._emitter = _emitter;
        this._router = _router;
        this.role = role;
        this._branchSv = _branchSv;
        this.customers = Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        this.customerInput$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.isLoadingCusotmer = false;
        // public staffs: User[] = [];
        // public isLoadingStaff = false;
        this.DATEPICKER_CONFIG = constants_datepicker_config__WEBPACK_IMPORTED_MODULE_14__["DATEPICKER_CONFIG"];
        this.isLoading = false;
        // branches
        this.branches = [];
        this.isLoadingBranch = false;
        this.filterTerm = {
            customer: null,
            // staff: null,
            dateFrom: null,
            dateTo: null,
            branchId: null,
        };
        this.saleActivities = [];
    }
    Object.defineProperty(TimelineTreeComponent.prototype, "isEndAfterFrom", {
        get: function () {
            return (!!this.filterTerm.dateFrom &&
                !!this.filterTerm.dateTo &&
                moment__WEBPACK_IMPORTED_MODULE_13__(this.filterTerm.dateTo).isBefore(moment__WEBPACK_IMPORTED_MODULE_13__(this.filterTerm.dateFrom)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimelineTreeComponent.prototype, "filterTermToJSON", {
        get: function () {
            var opts = {};
            if (this.filterTerm.customer) {
                opts.customerId = this.filterTerm.customer.id;
            }
            // if (this.filterTerm.staff) {
            //   opts.staffId = this.filterTerm.staff.id;
            // }
            if (this.filterTerm.dateFrom) {
                opts.dateFrom = moment__WEBPACK_IMPORTED_MODULE_13__(this.filterTerm.dateFrom).format('YYYY-MM-DD');
            }
            if (this.filterTerm.dateTo) {
                opts.dateTo = moment__WEBPACK_IMPORTED_MODULE_13__(this.filterTerm.dateTo).format('YYYY-MM-DD');
            }
            if (this.filterTerm.branchId) {
                opts.branchId = this.filterTerm.branchId;
            }
            return opts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimelineTreeComponent.prototype, "roleAccess", {
        get: function () {
            return this.role.is_admin || this.role.is_sale_director;
        },
        enumerable: true,
        configurable: true
    });
    TimelineTreeComponent.prototype.ngOnInit = function () {
        this._initSearchCustomers();
        // this._getStaffs();
        this._getBranchList();
    };
    TimelineTreeComponent.prototype.ngOnDestroy = function () {
        this._emitter.publishData({
            type: constants_emitter__WEBPACK_IMPORTED_MODULE_16__["EMITTER_TYPE"].FILTER_SALE_ACTIVITY_2,
            params: {},
        });
    };
    TimelineTreeComponent.prototype._getBranchList = function () {
        var _this = this;
        if (this.roleAccess) {
            this.isLoadingBranch = true;
            this._branchSv.getBranchList().subscribe(function (res) {
                _this.branches = res.branches;
                _this.isLoadingBranch = false;
            }, function (errors) {
                _this.isLoadingBranch = false;
                _this._notify.error(errors);
            });
        }
    };
    TimelineTreeComponent.prototype._initSearchCustomers = function () {
        var _this = this;
        this._customerSv
            .filterCustomers({
            page: 0,
            size: 100,
            sort: 'asc',
            column: 'id',
        })
            .subscribe(function (res) {
            _this._searchCustomers(res.customerList);
        });
    };
    TimelineTreeComponent.prototype._searchCustomers = function (customers) {
        var _this = this;
        this.customers = Object(rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_2__["concat"])(Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(customers), // default items
        this.customerInput$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return (_this.isLoadingCusotmer = true); }), Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (term) {
            return _this._customerSv
                .filterCustomers({
                page: 0,
                size: 100,
                sort: 'asc',
                column: 'id',
                txtSearch: term || '',
            })
                .map(function (res) { return res.customerList; })
                .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function () { return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])([]); }), // empty list on error
            Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return (_this.isLoadingCusotmer = false); }));
        })));
    };
    // private _getStaffs() {
    //   this.isLoadingStaff = true;
    //   this._userSv.getAllUsers().subscribe(
    //     (res) => {
    //       this.staffs = res;
    //       this.isLoadingStaff = false;
    //     },
    //     (errors) => {
    //       this.isLoadingStaff = false;
    //       this._notify.error(errors);
    //     },
    //   );
    // }
    TimelineTreeComponent.prototype.filterSaleActivities = function () {
        var _this = this;
        if (this.isEndAfterFrom) {
            this._notify.warning('Please select the end time after the start time');
            return;
        }
        this._emitter.publishData({
            type: constants_emitter__WEBPACK_IMPORTED_MODULE_16__["EMITTER_TYPE"].FILTER_SALE_ACTIVITY_2,
            params: this.filterTermToJSON,
        });
        if (!this.filterTerm.customer || !this.filterTerm.customer.id) {
            this.saleActivities = [];
            return;
        }
        var opts = __assign({}, this.filterTermToJSON, { page: 0, size: 1000, sort: 'desc', column: 'saleDate' });
        this.isLoading = true;
        this._saleActivitySv.getSaleActivitiesList(opts).subscribe(function (res) {
            if (res.list.length === 0) {
                _this._notify.info('data not found');
            }
            _this.saleActivities = res.list;
            _this.isLoading = false;
            setTimeout(function () {
                $('.timeline-panel').click(function () {
                    $('.timeline-body', this).toggle(); // p00f
                });
            }, 0);
        }, function (errors) {
            _this.isLoading = false;
            _this._notify.error(errors);
        });
    };
    TimelineTreeComponent.prototype.addActivity = function () {
        if (!this.filterTerm.customer || !this.filterTerm.customer.id) {
            return;
        }
        this._router.navigate(['/cim/timeline/create'], {
            queryParams: {
                customerId: this.filterTerm.customer.id,
            },
        });
    };
    TimelineTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline-tree',
            template: __webpack_require__(/*! ./timeline-tree.component.html */ "./src/app/timeline/timeline-tree/timeline-tree.component.html"),
            styles: [__webpack_require__(/*! ./timeline-tree.component.scss */ "./src/app/timeline/timeline-tree/timeline-tree.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_services_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"],
            shared_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_10__["NotifyService"],
            shared_services_sale_activity_service__WEBPACK_IMPORTED_MODULE_12__["SaleActivityService"],
            shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_15__["EventEmitterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"],
            app_role_service__WEBPACK_IMPORTED_MODULE_18__["RoleService"],
            shared_services_branch_service__WEBPACK_IMPORTED_MODULE_19__["BranchService"]])
    ], TimelineTreeComponent);
    return TimelineTreeComponent;
}());



/***/ }),

/***/ "./src/app/timeline/timeline-tree/timeline-tree.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/timeline/timeline-tree/timeline-tree.module.ts ***!
  \****************************************************************/
/*! exports provided: TimelineTreeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineTreeModule", function() { return TimelineTreeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _timeline_tree_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline-tree.component */ "./src/app/timeline/timeline-tree/timeline-tree.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _timeline_event_timeline_event_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../timeline-event/timeline-event.module */ "./src/app/timeline/timeline-event/timeline-event.module.ts");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
/* harmony import */ var shared_services_customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/services/customer.service */ "./src/shared/services/customer.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var shared_services_branch_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/services/branch.service */ "./src/shared/services/branch.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _timeline_tree_component__WEBPACK_IMPORTED_MODULE_2__["TimelineTreeComponent"],
    },
];
var TimelineTreeModule = /** @class */ (function () {
    function TimelineTreeModule() {
    }
    TimelineTreeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"].forRoot(),
                _timeline_event_timeline_event_module__WEBPACK_IMPORTED_MODULE_4__["TimelineEventModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ],
            declarations: [_timeline_tree_component__WEBPACK_IMPORTED_MODULE_2__["TimelineTreeComponent"]],
            providers: [shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], shared_services_customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"], shared_services_branch_service__WEBPACK_IMPORTED_MODULE_10__["BranchService"]],
        })
    ], TimelineTreeModule);
    return TimelineTreeModule;
}());



/***/ }),

/***/ "./src/models/sale-activity.ts":
/*!*************************************!*\
  !*** ./src/models/sale-activity.ts ***!
  \*************************************/
/*! exports provided: StatusOfProcess, SaleActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusOfProcess", function() { return StatusOfProcess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleActivity", function() { return SaleActivity; });
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer */ "./src/models/customer.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/models/user.ts");
/* harmony import */ var _customer_classification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-classification */ "./src/models/customer-classification.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.model */ "./src/models/base.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var StatusOfProcess;
(function (StatusOfProcess) {
    StatusOfProcess["SENT_MAIL"] = "Sent Mail";
    StatusOfProcess["CALL"] = "Call";
    StatusOfProcess["MEETING_WITH_CUSTOMER"] = "Meeting with customer";
    StatusOfProcess["MADE_AND_SEND_QUOTATION"] = "Made and sent quotation";
    StatusOfProcess["NEGOTIATION"] = "Negotiation";
    StatusOfProcess["SIGNED_CONTRACT"] = "Signed contract";
})(StatusOfProcess || (StatusOfProcess = {}));
var SaleActivity = /** @class */ (function (_super) {
    __extends(SaleActivity, _super);
    function SaleActivity() {
        var _this = _super.call(this) || this;
        _this.dateBinding = new Date();
        return _this;
    }
    Object.defineProperty(SaleActivity.prototype, "customer_name", {
        get: function () {
            return this.customer ? this.customer.customerName : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleActivity.prototype, "staff_user_name", {
        get: function () {
            return this.assignedStaff ? this.assignedStaff.userName : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleActivity.prototype, "staff_full_name", {
        get: function () {
            return this.assignedStaff ? this.assignedStaff.fullName : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleActivity.prototype, "statusOfProcessName", {
        get: function () {
            return this.statusOfProcess ? this.statusOfProcess.name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleActivity.prototype, "statusOfProcessIcon", {
        get: function () {
            if (!this.statusOfProcess || !this.statusOfProcess.name) {
                return;
            }
            switch (this.statusOfProcess.name) {
                case StatusOfProcess.CALL:
                    return "fa fa-phone-square";
                case StatusOfProcess.MADE_AND_SEND_QUOTATION:
                    return "fa fa-th-list";
                case StatusOfProcess.MEETING_WITH_CUSTOMER:
                    return "fa fa-comments";
                case StatusOfProcess.NEGOTIATION:
                    return "fa fa-thumbs-up";
                case StatusOfProcess.SENT_MAIL:
                    return "fa fa-envelope";
                case StatusOfProcess.SIGNED_CONTRACT:
                    return "fa fa-check-square";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleActivity.prototype, "statusOfProcessColor", {
        get: function () {
            if (!this.statusOfProcess || !this.statusOfProcess.name) {
                return;
            }
            switch (this.statusOfProcess.name) {
                case StatusOfProcess.CALL:
                    return "primary";
                case StatusOfProcess.MADE_AND_SEND_QUOTATION:
                    return "success";
                case StatusOfProcess.MEETING_WITH_CUSTOMER:
                    return "warning";
                case StatusOfProcess.NEGOTIATION:
                    return "danger";
                case StatusOfProcess.SENT_MAIL:
                    return "info";
                case StatusOfProcess.SIGNED_CONTRACT:
                    return "info";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleActivity.prototype, "date_str", {
        get: function () {
            return moment__WEBPACK_IMPORTED_MODULE_3__(this.saleDate).toISOString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleActivity.prototype, "dateDisplay", {
        get: function () {
            return moment__WEBPACK_IMPORTED_MODULE_3__(this.saleDate).format('YYYY-MM-DD');
        },
        enumerable: true,
        configurable: true
    });
    SaleActivity.prototype.deserialize = function (input) {
        if (!input) {
            return;
        }
        _super.prototype.deserialize.call(this, input);
        Object.assign(this, input);
        this.dateBinding = input.saleDate instanceof Date ? input.saleDate : new Date(input.saleDate);
        this.customer = input.customer instanceof _customer__WEBPACK_IMPORTED_MODULE_0__["Customer"] ? input.customer : new _customer__WEBPACK_IMPORTED_MODULE_0__["Customer"]().deserialize(input.customer);
        this.assignedStaff =
            input.assignedStaff instanceof _user__WEBPACK_IMPORTED_MODULE_1__["User"] ? input.assignedStaff : new _user__WEBPACK_IMPORTED_MODULE_1__["User"]().deserialize(input.assignedStaff);
        this.statusOfProcess =
            input.statusOfProcess instanceof _customer_classification__WEBPACK_IMPORTED_MODULE_2__["CustomerClassification"]
                ? input.statusOfProcess
                : new _customer_classification__WEBPACK_IMPORTED_MODULE_2__["CustomerClassification"]().deserialize(input.statusOfProcess);
        return this;
    };
    SaleActivity.prototype.toJSON = function () {
        return {
            customerId: this.customer ? this.customer.id : null,
            assignedStaffId: this.assignedStaff ? this.assignedStaff.id : null,
            statusOfProcessId: this.statusOfProcess ? this.statusOfProcess.id : null,
            note: this.note || null,
            saleDate: this.date_str,
        };
    };
    return SaleActivity;
}(_base_model__WEBPACK_IMPORTED_MODULE_4__["BaseModel"]));



/***/ }),

/***/ "./src/shared/services/branch.service.ts":
/*!***********************************************!*\
  !*** ./src/shared/services/branch.service.ts ***!
  \***********************************************/
/*! exports provided: BranchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchService", function() { return BranchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/shared/services/api.service.ts");
/* harmony import */ var models_branch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models/branch */ "./src/models/branch.ts");
/* harmony import */ var models_township__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! models/township */ "./src/models/township.ts");
/* harmony import */ var models_district__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! models/district */ "./src/models/district.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BranchService = /** @class */ (function () {
    function BranchService(_api) {
        this._api = _api;
    }
    BranchService.prototype.getBranchList = function (opts) {
        return this._api.get("branch", opts).map(function (res) {
            res.data.branches = res.data.branches.map(function (item) { return new models_branch__WEBPACK_IMPORTED_MODULE_2__["Branch"]().deserialize(item); });
            return res.data;
        });
    };
    BranchService.prototype.getDistrictList = function (opts) {
        return this._api.get("district", opts).map(function (res) {
            res.data.districts = res.data.districts.map(function (item) { return new models_district__WEBPACK_IMPORTED_MODULE_4__["District"]().deserialize(item); });
            return res.data;
        });
    };
    BranchService.prototype.getTownshipList = function (opts) {
        return this._api.get('township', opts).map(function (res) {
            res.data.townships = res.data.townships.map(function (item) { return new models_township__WEBPACK_IMPORTED_MODULE_3__["Township"]().deserialize(item); });
            return res.data;
        });
    };
    BranchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], BranchService);
    return BranchService;
}());



/***/ })

}]);
//# sourceMappingURL=timeline-tree-timeline-tree-module.3776bda6afb7af225007.js.map