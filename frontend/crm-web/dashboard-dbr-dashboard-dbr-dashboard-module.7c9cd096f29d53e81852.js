(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dbr-dashboard-dbr-dashboard-module"],{

/***/ "./src/app/dbr/dashboard/dbr-dashboard-filter/dbr-dashboard-filter.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/dbr/dashboard/dbr-dashboard-filter/dbr-dashboard-filter.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form novalidate>\n  <div class=\"row mb-4 customer-form-content\">\n    <div class=\"col-lg-3 col-md-6 form-group\">\n      <label>Sale Staff</label>\n      <ng-select\n        [items]=\"staffs\"\n        class=\"text-left\"\n        [closeOnSelect]=\"true\"\n        [clearable]=\"true\"\n        [loading]=\"isLoadingStaff\"\n        placeholder=\"please select staff\"\n        [searchable]=\"true\"\n        name=\"staff\"\n        [(ngModel)]=\"filterTerm.saleSatff\"\n        bindLabel=\"code_full_name\">\n      </ng-select>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6\" *ngIf=\"roleAccess\">\n      <div class=\"form-group\">\n        <label for=\"Region\">Branch</label>\n        <ng-select\n          [items]=\"branches\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingBranch\"\n          placeholder=\"please select region\"\n          [searchable]=\"false\"\n          name=\"branches\"\n          [(ngModel)]=\"filterTerm.branchId\"\n          #Region=\"ngModel\"\n          bindLabel=\"name\"\n          bindValue=\"id\">\n        </ng-select>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 form-group\">\n      <label for=\"FromDate\">From Date</label>\n      <div class=\"input-group\">\n        <input type=\"text\" name=\"dateFrom\" id=\"FromDate\"\n          class=\"form-control\"\n          [ngClass]=\"{ 'border-right-0': filterTerm.dateFrom }\"\n          readonly\n          placeholder=\"please select date from\"\n          bsDatepicker\n          [(bsValue)]=\"filterTerm.dateFrom\"\n          [bsConfig]=\"DATEPICKER_CONFIG\">\n\n        <div class=\"input-group-append\" *ngIf=\"filterTerm.dateFrom\">\n          <span class=\"input-group-text bg--white\">\b<i class=\"fa fa-times cursor-pointer\" (click)=\"filterTerm.dateFrom = null\"></i></span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 form-group\">\n      <label for=\"ToDate\">To Date</label>\n      <div class=\"input-group\">\n        <input type=\"text\" name=\"dateTo\" id=\"ToDate\"\n          class=\"form-control\"\n          [ngClass]=\"{ 'border-right-0': filterTerm.dateTo }\"\n          readonly\n          placeholder=\"please select date to\"\n          bsDatepicker\n          [(bsValue)]=\"filterTerm.dateTo\"\n          [bsConfig]=\"DATEPICKER_CONFIG\">\n\n        <div class=\"input-group-append\" *ngIf=\"filterTerm.dateTo\">\n          <span class=\"input-group-text bg--white\">\b<i class=\"fa fa-times cursor-pointer\" (click)=\"filterTerm.dateTo = null\"></i></span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 form-group dashboard-filter__btn\">\n      <button type=\"button\" class=\"btn btn-primary\"\n      (click)=\"filterDashboard()\">\n        <i class=\"fa fa-search mr-2\"></i>\n        Filter\n      </button>\n    </div>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/dbr/dashboard/dbr-dashboard-filter/dbr-dashboard-filter.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/dbr/dashboard/dbr-dashboard-filter/dbr-dashboard-filter.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-filter__btn {\n  margin-top: 31px; }\n  .dashboard-filter__btn button {\n    width: 100px; }\n"

/***/ }),

/***/ "./src/app/dbr/dashboard/dbr-dashboard-filter/dbr-dashboard-filter.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/dbr/dashboard/dbr-dashboard-filter/dbr-dashboard-filter.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DbrDashboardFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbrDashboardFilterComponent", function() { return DbrDashboardFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
/* harmony import */ var constants_datepicker_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/datepicker-config */ "./src/constants/datepicker-config.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
/* harmony import */ var app_role_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/role.service */ "./src/app/role.service.ts");
/* harmony import */ var shared_services_branch_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/services/branch.service */ "./src/shared/services/branch.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DbrDashboardFilterComponent = /** @class */ (function () {
    function DbrDashboardFilterComponent(_notify, _emitter, _userSv, role, _branchSv) {
        this._notify = _notify;
        this._emitter = _emitter;
        this._userSv = _userSv;
        this.role = role;
        this._branchSv = _branchSv;
        this.DATEPICKER_CONFIG = constants_datepicker_config__WEBPACK_IMPORTED_MODULE_4__["DATEPICKER_CONFIG"];
        this.filterTerm = {
            saleSatff: null,
            dateFrom: null,
            dateTo: null,
            branchId: null,
        };
        this.staffs = [];
        this.isLoadingStaff = false;
        // branches
        this.branches = [];
        this.isLoadingBranch = false;
    }
    Object.defineProperty(DbrDashboardFilterComponent.prototype, "isEndAfterFrom", {
        get: function () {
            return (!!this.filterTerm.dateFrom &&
                !!this.filterTerm.dateTo &&
                moment__WEBPACK_IMPORTED_MODULE_5__(this.filterTerm.dateTo).isBefore(moment__WEBPACK_IMPORTED_MODULE_5__(this.filterTerm.dateFrom)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DbrDashboardFilterComponent.prototype, "roleAccess", {
        get: function () {
            return this.role.is_admin || this.role.is_sale_director;
        },
        enumerable: true,
        configurable: true
    });
    DbrDashboardFilterComponent.prototype.ngOnInit = function () {
        this._getStaffs();
        this._getBranchList();
    };
    DbrDashboardFilterComponent.prototype._getBranchList = function () {
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
    DbrDashboardFilterComponent.prototype._getStaffs = function () {
        var _this = this;
        this.isLoadingStaff = true;
        this._userSv.getAllUsers().subscribe(function (res) {
            _this.staffs = res;
            _this.isLoadingStaff = false;
        }, function (errors) {
            _this.isLoadingStaff = false;
            _this._notify.error(errors);
        });
    };
    DbrDashboardFilterComponent.prototype.filterDashboard = function () {
        if (this.isEndAfterFrom) {
            this._notify.warning('Please select the end time after the start time');
            return;
        }
        var params = {};
        if (this.filterTerm.saleSatff) {
            params.assignedStaffId = this.filterTerm.saleSatff.id;
        }
        if (this.filterTerm.dateFrom) {
            params.dateFrom = moment__WEBPACK_IMPORTED_MODULE_5__(this.filterTerm.dateFrom).format('MM/DD/YYYY');
        }
        if (this.filterTerm.dateTo) {
            params.dateTo = moment__WEBPACK_IMPORTED_MODULE_5__(this.filterTerm.dateTo).format('MM/DD/YYYY');
        }
        if (this.filterTerm.branchId) {
            params.branchId = this.filterTerm.branchId;
        }
        this._emitter.publishData({
            type: constants_emitter__WEBPACK_IMPORTED_MODULE_3__["EMITTER_TYPE"].FILTER_DASHBOARD,
            params: params,
        });
    };
    DbrDashboardFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dbr-dashboard-filter',
            template: __webpack_require__(/*! ./dbr-dashboard-filter.component.html */ "./src/app/dbr/dashboard/dbr-dashboard-filter/dbr-dashboard-filter.component.html"),
            styles: [__webpack_require__(/*! ./dbr-dashboard-filter.component.scss */ "./src/app/dbr/dashboard/dbr-dashboard-filter/dbr-dashboard-filter.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_1__["NotifyService"],
            shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_2__["EventEmitterService"],
            shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            app_role_service__WEBPACK_IMPORTED_MODULE_7__["RoleService"],
            shared_services_branch_service__WEBPACK_IMPORTED_MODULE_8__["BranchService"]])
    ], DbrDashboardFilterComponent);
    return DbrDashboardFilterComponent;
}());



/***/ }),

/***/ "./src/app/dbr/dashboard/dbr-dashboard-filter/dbr-dashboard-filter.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/dbr/dashboard/dbr-dashboard-filter/dbr-dashboard-filter.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DbrDashboardFilterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbrDashboardFilterModule", function() { return DbrDashboardFilterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dbr_dashboard_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dbr-dashboard-filter.component */ "./src/app/dbr/dashboard/dbr-dashboard-filter/dbr-dashboard-filter.component.ts");
/* harmony import */ var shared_services_staff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/services/staff.service */ "./src/shared/services/staff.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DbrDashboardFilterModule = /** @class */ (function () {
    function DbrDashboardFilterModule() {
    }
    DbrDashboardFilterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot()],
            declarations: [_dbr_dashboard_filter_component__WEBPACK_IMPORTED_MODULE_2__["DbrDashboardFilterComponent"]],
            exports: [_dbr_dashboard_filter_component__WEBPACK_IMPORTED_MODULE_2__["DbrDashboardFilterComponent"]],
            providers: [shared_services_staff_service__WEBPACK_IMPORTED_MODULE_3__["StaffService"], shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]],
        })
    ], DbrDashboardFilterModule);
    return DbrDashboardFilterModule;
}());



/***/ }),

/***/ "./src/app/dbr/dashboard/dbr-dashboard/dbr-dashboard.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dbr/dashboard/dbr-dashboard/dbr-dashboard.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dbr-dashboard-filter></app-dbr-dashboard-filter>\n\n<div class=\"row p-0 mt-2\">\n  <div class=\"col-12 form-group\">\n    <h3>Activity Type</h3>\n  </div>\n\n  <div class=\"col-lg-3 col-md-4 col-sm-6 form-group\">\n    <div class=\"card d-card\">\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item header\">Sent Email</li>\n        <li class=\"list-group-item body\">\n          <i class=\"fa fa-envelope fa-4x\"></i>\n          <h3 class=\"pull-right my-3\">{{ dashboard?.groupTypeOfContact?.sentEmail }}</h3>\n        </li>\n        <li class=\"list-group-item footer\"></li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"col-lg-3 col-md-4 col-sm-6 form-group\">\n    <div class=\"card d-card\">\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item header\">Called</li>\n        <li class=\"list-group-item body\">\n          <i class=\"fa fa-phone-square fa-4x\"></i>\n          <h3 class=\"pull-right my-3\">{{ dashboard?.groupTypeOfContact?.called }}</h3>\n        </li>\n        <li class=\"list-group-item footer\"></li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"col-lg-3 col-md-4 col-sm-6 form-group\">\n    <div class=\"card d-card\">\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item header\">Meeting With Customer</li>\n        <li class=\"list-group-item body\">\n          <i class=\"fa fa-comments fa-4x\"></i>\n          <h3 class=\"pull-right my-3\">{{ dashboard?.groupTypeOfContact?.meetingWithCustomer }}</h3>\n        </li>\n        <li class=\"list-group-item footer\"></li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"col-lg-3 col-md-4 col-sm-6 form-group\">\n    <div class=\"card d-card\">\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item header\">Made And Sent Quotation</li>\n        <li class=\"list-group-item body\">\n          <i class=\"fa fa-th-list fa-4x\"></i>\n          <h3 class=\"pull-right my-3\">{{ dashboard?.groupTypeOfContact?.madeAndSentQuotation }}</h3>\n        </li>\n        <li class=\"list-group-item footer\"></li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"col-lg-3 col-md-4 col-sm-6 form-group\">\n    <div class=\"card d-card\">\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item header\">Negotiate</li>\n        <li class=\"list-group-item body\">\n          <i class=\"fa fa-thumbs-up fa-4x\"></i>\n          <h3 class=\"pull-right my-3\">{{ dashboard?.groupTypeOfContact?.negotiate }}</h3>\n        </li>\n        <li class=\"list-group-item footer\"></li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"col-lg-3 col-md-4 col-sm-6 form-group\">\n    <div class=\"card d-card\">\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item header\">Signed Contract</li>\n        <li class=\"list-group-item body\">\n          <i class=\"fa fa-check-square fa-4x\"></i>\n          <h3 class=\"pull-right my-3\">{{ dashboard?.groupTypeOfContact?.signedContract }}</h3>\n        </li>\n        <li class=\"list-group-item footer\"></li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<div class=\"row p-0 mt-2\">\n  <div class=\"col-12 form-group\">\n    <h3>Customer Care Status</h3>\n  </div>\n\n  <div class=\"col-lg-3 col-md-4 col-sm-6 form-group\">\n    <div class=\"card d-card\">\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item header\">On going</li>\n        <li class=\"list-group-item body\">\n          <i class=\"fa fa-cogs fa-4x\"></i>\n          <h3 class=\"pull-right my-3\">{{ dashboard?.groupCustomerCareStatus?.onGoing }}</h3>\n        </li>\n        <li class=\"list-group-item footer\"></li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"col-lg-3 col-md-4 col-sm-6 form-group\">\n    <div class=\"card d-card\">\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item header\">Completed</li>\n        <li class=\"list-group-item body\">\n          <i class=\"fa fa-check fa-4x\"></i>\n          <h3 class=\"pull-right my-3\">{{ dashboard?.groupCustomerCareStatus?.completed }}</h3>\n        </li>\n        <li class=\"list-group-item footer\"></li>\n      </ul>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dbr/dashboard/dbr-dashboard/dbr-dashboard.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/dbr/dashboard/dbr-dashboard/dbr-dashboard.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card.d-card .header,\n.card.d-card .footer {\n  background: #149dec;\n  color: #fff; }\n\n.card.d-card .body {\n  background: #3fb2f5;\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/dbr/dashboard/dbr-dashboard/dbr-dashboard.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dbr/dashboard/dbr-dashboard/dbr-dashboard.component.ts ***!
  \************************************************************************/
/*! exports provided: DbrDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbrDashboardComponent", function() { return DbrDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/dashboard.service */ "./src/shared/services/dashboard.service.ts");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
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





var DbrDashboardComponent = /** @class */ (function () {
    function DbrDashboardComponent(_dashboardSv, _notify, _emitter) {
        this._dashboardSv = _dashboardSv;
        this._notify = _notify;
        this._emitter = _emitter;
        this._filterQuery = {};
    }
    DbrDashboardComponent.prototype.ngOnInit = function () {
        this._getDashboard();
        this._onEventEmitter();
    };
    DbrDashboardComponent.prototype.ngOnDestroy = function () {
        this._subscriber.unsubscribe();
    };
    DbrDashboardComponent.prototype._onEventEmitter = function () {
        var _this = this;
        this._subscriber = this._emitter.caseNumber$.subscribe(function (data) {
            if (data && data.type === constants_emitter__WEBPACK_IMPORTED_MODULE_4__["EMITTER_TYPE"].FILTER_DASHBOARD) {
                _this._filterQuery = data.params;
                _this._getDashboard();
            }
        });
    };
    DbrDashboardComponent.prototype._getDashboard = function () {
        var _this = this;
        var params = __assign({}, this._filterQuery);
        this._dashboardSv.getDashboard(params).subscribe(function (res) {
            _this.dashboard = res;
        }, function (errors) {
            _this._notify.error(errors);
        });
    };
    DbrDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dbr-dashboard',
            template: __webpack_require__(/*! ./dbr-dashboard.component.html */ "./src/app/dbr/dashboard/dbr-dashboard/dbr-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dbr-dashboard.component.scss */ "./src/app/dbr/dashboard/dbr-dashboard/dbr-dashboard.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__["NotifyService"],
            shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"]])
    ], DbrDashboardComponent);
    return DbrDashboardComponent;
}());



/***/ }),

/***/ "./src/app/dbr/dashboard/dbr-dashboard/dbr-dashboard.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dbr/dashboard/dbr-dashboard/dbr-dashboard.module.ts ***!
  \*********************************************************************/
/*! exports provided: DbrDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbrDashboardModule", function() { return DbrDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dbr_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dbr-dashboard.component */ "./src/app/dbr/dashboard/dbr-dashboard/dbr-dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/services/dashboard.service */ "./src/shared/services/dashboard.service.ts");
/* harmony import */ var _dbr_dashboard_filter_dbr_dashboard_filter_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dbr-dashboard-filter/dbr-dashboard-filter.module */ "./src/app/dbr/dashboard/dbr-dashboard-filter/dbr-dashboard-filter.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _dbr_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DbrDashboardComponent"],
    },
];
var DbrDashboardModule = /** @class */ (function () {
    function DbrDashboardModule() {
    }
    DbrDashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _dbr_dashboard_filter_dbr_dashboard_filter_module__WEBPACK_IMPORTED_MODULE_5__["DbrDashboardFilterModule"]],
            declarations: [_dbr_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DbrDashboardComponent"]],
            providers: [shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"]],
        })
    ], DbrDashboardModule);
    return DbrDashboardModule;
}());



/***/ }),

/***/ "./src/constants/emitter.ts":
/*!**********************************!*\
  !*** ./src/constants/emitter.ts ***!
  \**********************************/
/*! exports provided: EMITTER_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMITTER_TYPE", function() { return EMITTER_TYPE; });
var EMITTER_TYPE = {
    FILTER_CUSTOMER: 'customer:filter',
    CREATE_CUSTOMER: 'customer:create',
    GMAP_CLICK: 'gmap:click',
    CREATE_SALE_ACTIVITY: 'saleActivity:create',
    FILTER_SALE_ACTIVITY: 'saleActivity:filter',
    REMOVE_SALE_ACTIVITY: 'saleActivity:remove',
    UPDATE_SALE_ACTIVITY: 'saleActivity:update',
    FILTER_POLICY: 'policy:filter',
    CREATE_POLICY: 'policy:create',
    CREATE_BTS: 'bts:create',
    FILTER_BTS: 'bts:filter',
    GMAP_DISTANCE: 'gmap:distance',
    GMAP_BTS: 'gmap:bts',
    GMAP_BTS_CREATE: 'gmap:bts:create',
    FILTER_CARE_ACTIVITY: 'careActivity:filter',
    CREATE_CARE_ACTIVITY: 'careActivity:create',
    CREATE_QUOTATION: 'quotation:create',
    CHANGE_CUSTOMER_QUOTATION: 'quotation:changeCustomer',
    FILTER_QUOTATION: 'quotation:filter',
    FILTER_PROPOSAL: 'proposal:filter',
    FILTER_DASHBOARD: 'dashboard:filter',
    CREATE_USER: 'user:create',
    CREATE_SALE_ACTIVITY_2: 'saleActivity2:create',
    FILTER_SALE_ACTIVITY_2: 'saleActivity2:filter',
    CHANGE_FOLDER: 'folder:change',
    GMAP_PLACE_CHANGED: 'gmap:place:changed',
    GMAP_ZOOM_TO: 'gmap:zoomTp',
};


/***/ }),

/***/ "./src/models/branch.ts":
/*!******************************!*\
  !*** ./src/models/branch.ts ***!
  \******************************/
/*! exports provided: Branch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Branch", function() { return Branch; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ "./src/models/base.model.ts");
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

var Branch = /** @class */ (function (_super) {
    __extends(Branch, _super);
    function Branch() {
        return _super.call(this) || this;
    }
    Branch.prototype.deserialize = function (input) {
        if (!input) {
            return;
        }
        _super.prototype.deserialize.call(this, input);
        Object.assign(this, input);
        return this;
    };
    return Branch;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]));



/***/ }),

/***/ "./src/models/district.ts":
/*!********************************!*\
  !*** ./src/models/district.ts ***!
  \********************************/
/*! exports provided: District */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "District", function() { return District; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ "./src/models/base.model.ts");
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

var District = /** @class */ (function (_super) {
    __extends(District, _super);
    function District() {
        return _super.call(this) || this;
    }
    District.prototype.deserialize = function (input) {
        if (!input) {
            return;
        }
        _super.prototype.deserialize.call(this, input);
        Object.assign(this, input);
        return this;
    };
    return District;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]));



/***/ }),

/***/ "./src/models/township.ts":
/*!********************************!*\
  !*** ./src/models/township.ts ***!
  \********************************/
/*! exports provided: Township */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Township", function() { return Township; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ "./src/models/base.model.ts");
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

var Township = /** @class */ (function (_super) {
    __extends(Township, _super);
    function Township() {
        return _super.call(this) || this;
    }
    Township.prototype.deserialize = function (input) {
        if (!input) {
            return;
        }
        _super.prototype.deserialize.call(this, input);
        Object.assign(this, input);
        return this;
    };
    return Township;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]));



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



/***/ }),

/***/ "./src/shared/services/dashboard.service.ts":
/*!**************************************************!*\
  !*** ./src/shared/services/dashboard.service.ts ***!
  \**************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/shared/services/api.service.ts");
/* harmony import */ var app_services_root_scope_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/root-scope.service */ "./src/app/services/root-scope.service.ts");
/* harmony import */ var app_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/role.service */ "./src/app/role.service.ts");
/* harmony import */ var app_guard_roles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/guard/roles */ "./src/app/guard/roles.ts");
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





var DashboardService = /** @class */ (function () {
    function DashboardService(_api, _rootScope, _role) {
        this._api = _api;
        this._rootScope = _rootScope;
        this._role = _role;
    }
    DashboardService.prototype.getDashboard = function (opts) {
        if (opts === void 0) { opts = {}; }
        var _opts = {
            role: this._rootScope.currentUser.id ? this._rootScope.currentUser.role : app_guard_roles__WEBPACK_IMPORTED_MODULE_4__["Roles"].MYTEL_ADMIN,
        };
        if (this._role.is_branch_director) {
            _opts.branchId =
                this._rootScope.currentUser.id && this._rootScope.currentUser.branchId
                    ? this._rootScope.currentUser.branchId
                    : 0;
        }
        if (this._role.is_hq_sale_staff || this._role.is_branch_sale_staff) {
            _opts.assignedStaffId = this._rootScope.currentUser.id ? this._rootScope.currentUser.id : 0;
        }
        return this._api.get("dashboard", __assign({}, _opts, opts)).map(function (res) {
            return res.data;
        });
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], app_services_root_scope_service__WEBPACK_IMPORTED_MODULE_2__["RootScopeService"], app_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/shared/services/staff.service.ts":
/*!**********************************************!*\
  !*** ./src/shared/services/staff.service.ts ***!
  \**********************************************/
/*! exports provided: StaffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffService", function() { return StaffService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kc.service */ "./src/shared/services/kc.service.ts");
/* harmony import */ var models_kc_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models/kc-user */ "./src/models/kc-user.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StaffService = /** @class */ (function () {
    function StaffService(_kc) {
        this._kc = _kc;
    }
    StaffService.prototype.getStaffs = function (params) {
        return this._kc.get("admin/realms/" + environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].kc_realm + "/users", params).map(function (res) {
            var data = [];
            res.map(function (item) {
                if (item.email) {
                    data.push(new models_kc_user__WEBPACK_IMPORTED_MODULE_2__["KeyCloakUser"]().deserialize(item));
                }
            });
            return data;
        });
    };
    StaffService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_kc_service__WEBPACK_IMPORTED_MODULE_1__["KeyCloakService"]])
    ], StaffService);
    return StaffService;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dbr-dashboard-dbr-dashboard-module.7c9cd096f29d53e81852.js.map