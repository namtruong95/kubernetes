(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["timeline-create-timeline-create-module"],{

/***/ "./src/app/timeline/timeline-create/timeline-create.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/timeline/timeline-create/timeline-create.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #SaleActivityForm=\"ngForm\" novalidate>\n  <div class=\"row mb-4 customer-form-content\">\n    <div class=\"col-lg-6 col-md-12 form-group\">\n      <label>Customer <i class=\"required\">&#40;*&#41;</i></label>\n      <ng-select\n        [items]=\"customers | async\"\n        class=\"text-left\"\n        [closeOnSelect]=\"true\"\n        [clearable]=\"true\"\n        [loading]=\"isLoadingCusotmer\"\n        placeholder=\"please select customer\"\n        [searchable]=\"true\"\n        name=\"customer\"\n        [(ngModel)]=\"saleActivity.customer\"\n        (ngModelChange)=\"changeCustomer()\"\n        bindLabel=\"customerName\"\n        [typeahead]=\"customerInput$\"\n        required>\n      </ng-select>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12 form-group\">\n      <label for=\"Name\">Staff</label>\n      <ng-select\n        [items]=\"staffs\"\n        class=\"text-left\"\n        [closeOnSelect]=\"true\"\n        [clearable]=\"true\"\n        [loading]=\"isLoadingStaff\"\n        placeholder=\"please select staff\"\n        [searchable]=\"false\"\n        name=\"assignedStaff\"\n        [(ngModel)]=\"saleActivity.assignedStaff\"\n        bindLabel=\"code_full_name\">\n      </ng-select>\n    </div>\n\n    <!-- <div class=\"col-lg-6 col-md-12 form-group\">\n      <label for=\"Department\">Department</label>\n      <input type=\"text\" id=\"Department\"\n        autocomplete=\"new-department\"\n        class=\"form-control\"\n        name=\"department\"\n        placeholder=\"please enter department\"\n        [(ngModel)]=\"saleActivity.department\">\n    </div> -->\n\n    <div class=\"col-lg-6 col-md-12 form-group\">\n      <label for=\"typeOfContact\">Activity Type</label>\n      <ng-select\n        [items]=\"statusOfProcesses\"\n        class=\"text-left\"\n        [closeOnSelect]=\"true\"\n        [clearable]=\"true\"\n        [loading]=\"isLoadingstatusOfProcess\"\n        placeholder=\"please select activity type\"\n        [searchable]=\"false\"\n        name=\"statusOfProcess\"\n        [(ngModel)]=\"saleActivity.statusOfProcess\"\n        bindLabel=\"name\">\n      </ng-select>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12 form-group\">\n      <label for=\"SaleDate\">Sale Date</label>\n      <input type=\"text\" id=\"SaleDate\"\n        autocomplete=\"new-SaleDate\"\n        readonly\n        placeholder=\"please select sale date\"\n        class=\"form-control\"\n        name=\"saleDate\"\n        bsDatepicker\n        [(ngModel)]=\"saleActivity.dateBinding\"\n        [bsConfig]=\"DATEPICKER_CONFIG\"\n        (bsValueChange)=\"onValueChange($event)\">\n    </div>\n\n    <div class=\"col-lg-6 col-md-12 form-group\">\n      <label for=\"Note\">Note</label>\n      <textarea name=\"note\"\n        class=\"form-control\"\n        id=\"Note\"\n        rows=\"5\"\n        autocomplete=\"new-note\"\n        placeholder=\"please enter note\"\n        [(ngModel)]=\"saleActivity.note\"></textarea>\n    </div>\n\n  </div>\n\n  <div class=\"form-group\">\n    <button type=\"button\" class=\"btn btn-primary\"\n      (click)=\"createSaleActivity(SaleActivityForm)\"\n      [disabled]=\"isLoading || SaleActivityForm.form.invalid\">\n      Create\n      <i *ngIf=\"isLoading\" class=\"fa fa-refresh fa-spin\"></i>\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/timeline/timeline-create/timeline-create.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/timeline/timeline-create/timeline-create.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/timeline/timeline-create/timeline-create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/timeline/timeline-create/timeline-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: TimelineCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineCreateComponent", function() { return TimelineCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var models_sale_activity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/sale-activity */ "./src/models/sale-activity.ts");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/concat */ "./node_modules/rxjs/internal/observable/concat.js");
/* harmony import */ var rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/tap */ "./node_modules/rxjs/internal/operators/tap.js");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var shared_services_customer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/services/customer.service */ "./src/shared/services/customer.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/services/customer-classification.service */ "./src/shared/services/customer-classification.service.ts");
/* harmony import */ var constants_datepicker_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! constants/datepicker-config */ "./src/constants/datepicker-config.ts");
/* harmony import */ var shared_services_sale_activity_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! shared/services/sale-activity.service */ "./src/shared/services/sale-activity.service.ts");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_role_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/role.service */ "./src/app/role.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var TimelineCreateComponent = /** @class */ (function () {
    function TimelineCreateComponent(_customerSv, _userSv, _notify, _customerClassificationSv, _saleActivitySv, _emitter, _route, _router, _role) {
        this._customerSv = _customerSv;
        this._userSv = _userSv;
        this._notify = _notify;
        this._customerClassificationSv = _customerClassificationSv;
        this._saleActivitySv = _saleActivitySv;
        this._emitter = _emitter;
        this._route = _route;
        this._router = _router;
        this._role = _role;
        this.isLoading = false;
        this.saleActivity = new models_sale_activity__WEBPACK_IMPORTED_MODULE_1__["SaleActivity"]();
        this.customers = Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        this.customerInput$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.isLoadingCusotmer = false;
        this.staffs = [];
        this.isLoadingStaff = false;
        // type of contact
        this.isLoadingstatusOfProcess = false;
        this.statusOfProcesses = [];
        this.DATEPICKER_CONFIG = constants_datepicker_config__WEBPACK_IMPORTED_MODULE_14__["DATEPICKER_CONFIG"];
    }
    TimelineCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._getStaffs();
        this._statusOfProcess();
        this._route.queryParams.subscribe(function (params) {
            if (params.customerId && !isNaN(+params.customerId)) {
                _this._showCustomer(+params.customerId);
                _this._router.navigate(['/cim/timeline/create'], { replaceUrl: true });
                return;
            }
            _this._initSearchCustomers();
        });
    };
    TimelineCreateComponent.prototype._initSearchCustomers = function () {
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
    TimelineCreateComponent.prototype._showCustomer = function (id) {
        var _this = this;
        this._customerSv.showCustomer(id).subscribe(function (res) {
            if (res) {
                _this.saleActivity.customer = res;
                _this._searchCustomers([res]);
            }
        });
    };
    TimelineCreateComponent.prototype._searchCustomers = function (data) {
        var _this = this;
        this.customers = Object(rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_3__["concat"])(Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(data || []), // default items
        this.customerInput$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return (_this.isLoadingCusotmer = true); }), Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (term) {
            return _this._customerSv
                .filterCustomers({
                page: 0,
                size: 100,
                sort: 'asc',
                column: 'id',
                txtSearch: term || '',
            })
                .map(function (res) { return res.customerList; })
                .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function () { return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }), // empty list on error
            Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return (_this.isLoadingCusotmer = false); }));
        })));
    };
    TimelineCreateComponent.prototype._getStaffs = function (opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        this.isLoadingStaff = true;
        this._userSv.getAllUsers(opts).subscribe(function (res) {
            _this.staffs = res;
            var index = _this.staffs.findIndex(function (item) { return _this.saleActivity.assignedStaff && item.id === _this.saleActivity.assignedStaff.id; });
            if (index < 0) {
                _this.saleActivity.assignedStaff = null;
            }
            _this.isLoadingStaff = false;
        }, function (errors) {
            _this.isLoadingStaff = false;
            _this._notify.error(errors);
        });
    };
    TimelineCreateComponent.prototype.onValueChange = function (event) {
        this.saleActivity.saleDate = event;
    };
    TimelineCreateComponent.prototype._statusOfProcess = function () {
        var _this = this;
        this.isLoadingstatusOfProcess = true;
        var params = {
            type: 'contact',
        };
        this.statusOfProcesses = [];
        this._customerClassificationSv.getCustomerClassification(params).subscribe(function (res) {
            _this.isLoadingstatusOfProcess = false;
            _this.statusOfProcesses = res.customerClassifications;
        }, function (errors) {
            _this.isLoadingstatusOfProcess = false;
            _this._notify.error(errors);
        });
    };
    TimelineCreateComponent.prototype.createSaleActivity = function (form) {
        var _this = this;
        this.isLoading = true;
        this._saleActivitySv.createSaleActivity(this.saleActivity.toJSON()).subscribe(function (res) {
            _this._notify.success(res.meta.message);
            _this._emitter.publishData({
                type: constants_emitter__WEBPACK_IMPORTED_MODULE_16__["EMITTER_TYPE"].CREATE_SALE_ACTIVITY_2,
            });
            _this.isLoading = false;
            form.form.markAsPristine({ onlySelf: false });
        }, function (errors) {
            _this._notify.error(errors);
            _this.isLoading = false;
        }, function () {
            setTimeout(function () {
                _this.saleActivity = new models_sale_activity__WEBPACK_IMPORTED_MODULE_1__["SaleActivity"]();
            }, 0);
        });
    };
    TimelineCreateComponent.prototype.changeCustomer = function () {
        if (!this._role.is_admin) {
            return;
        }
        var opts = {};
        if (this.saleActivity.customer) {
            opts.branchId = this.saleActivity.customer.assignedBranchId;
        }
        this._getStaffs(opts);
    };
    TimelineCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline-create',
            template: __webpack_require__(/*! ./timeline-create.component.html */ "./src/app/timeline/timeline-create/timeline-create.component.html"),
            styles: [__webpack_require__(/*! ./timeline-create.component.scss */ "./src/app/timeline/timeline-create/timeline-create.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_services_customer_service__WEBPACK_IMPORTED_MODULE_9__["CustomerService"],
            shared_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_12__["NotifyService"],
            shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_13__["CustomerClassificationService"],
            shared_services_sale_activity_service__WEBPACK_IMPORTED_MODULE_15__["SaleActivityService"],
            shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_17__["EventEmitterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"],
            app_role_service__WEBPACK_IMPORTED_MODULE_19__["RoleService"]])
    ], TimelineCreateComponent);
    return TimelineCreateComponent;
}());



/***/ }),

/***/ "./src/app/timeline/timeline-create/timeline-create.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/timeline/timeline-create/timeline-create.module.ts ***!
  \********************************************************************/
/*! exports provided: TimelineCreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineCreateModule", function() { return TimelineCreateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _timeline_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline-create.component */ "./src/app/timeline/timeline-create/timeline-create.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var shared_services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/services/customer.service */ "./src/shared/services/customer.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var shared_services_sale_activity_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/services/sale-activity.service */ "./src/shared/services/sale-activity.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _timeline_create_component__WEBPACK_IMPORTED_MODULE_2__["TimelineCreateComponent"],
    },
];
var TimelineCreateModule = /** @class */ (function () {
    function TimelineCreateModule() {
    }
    TimelineCreateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot()],
            declarations: [_timeline_create_component__WEBPACK_IMPORTED_MODULE_2__["TimelineCreateComponent"]],
            providers: [shared_services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"], shared_services_sale_activity_service__WEBPACK_IMPORTED_MODULE_8__["SaleActivityService"]],
        })
    ], TimelineCreateModule);
    return TimelineCreateModule;
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

/***/ "./src/shared/services/customer-classification.service.ts":
/*!****************************************************************!*\
  !*** ./src/shared/services/customer-classification.service.ts ***!
  \****************************************************************/
/*! exports provided: CustomerClassificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerClassificationService", function() { return CustomerClassificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/shared/services/api.service.ts");
/* harmony import */ var models_customer_classification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models/customer-classification */ "./src/models/customer-classification.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerClassificationService = /** @class */ (function () {
    function CustomerClassificationService(_api) {
        this._api = _api;
    }
    CustomerClassificationService.prototype.getCustomerClassification = function (params) {
        return this._api.get("customer-classifications", params).map(function (res) {
            res.data.customerClassifications = res.data.customerClassifications.map(function (item) {
                return new models_customer_classification__WEBPACK_IMPORTED_MODULE_2__["CustomerClassification"]().deserialize(item);
            });
            return res.data;
        });
    };
    CustomerClassificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], CustomerClassificationService);
    return CustomerClassificationService;
}());



/***/ })

}]);
//# sourceMappingURL=timeline-create-timeline-create-module.a7da75ab51d07fa99a37.js.map