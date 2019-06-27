(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ccm-create-ccm-create-module"],{

/***/ "./src/app/ccm/ccm-create/ccm-create.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ccm/ccm-create/ccm-create.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #CareActivityForm=\"ngForm\" novalidate>\n  <div class=\"row mb-4 customer-form-content\">\n    <div class=\"col-lg-6 col-md-12 form-group\">\n      <label>Customer <i class=\"required\">&#40;*&#41;</i></label>\n      <ng-select\n        [items]=\"customers | async\"\n        class=\"text-left\"\n        [closeOnSelect]=\"true\"\n        [clearable]=\"true\"\n        [loading]=\"isLoadingCusotmer\"\n        placeholder=\"please select customer\"\n        [searchable]=\"true\"\n        name=\"customer\"\n        [(ngModel)]=\"careActivity.customer\"\n        (ngModelChange)=\"changeCustomer()\"\n        bindLabel=\"customerName\"\n        [typeahead]=\"customerInput$\"\n        required>\n      </ng-select>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12 form-group\">\n      <label>Status <i class=\"required\">&#40;*&#41;</i></label>\n      <ng-select\n        [items]=\"CARE_ACTIVITY_STATUSES\"\n        class=\"text-left\"\n        [closeOnSelect]=\"true\"\n        [clearable]=\"true\"\n        [loading]=\"false\"\n        placeholder=\"please select status\"\n        [searchable]=\"false\"\n        name=\"status\"\n        [(ngModel)]=\"careActivity.status\"\n        bindLabel=\"name\"\n        bindValue=\"value\"\n        required>\n      </ng-select>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12 form-group\">\n      <label for=\"Name\">Sale Care</label>\n      <ng-select\n        [items]=\"staffs\"\n        class=\"text-left\"\n        [closeOnSelect]=\"true\"\n        [clearable]=\"true\"\n        [loading]=\"isLoadingStaff\"\n        placeholder=\"please select staff\"\n        [searchable]=\"true\"\n        name=\"assignedStaff\"\n        [(ngModel)]=\"careActivity.assignedStaff\"\n        bindLabel=\"code_full_name\">\n      </ng-select>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12 form-group\">\n      <label for=\"Date\">Date</label>\n      <input type=\"text\" id=\"Date\"\n        autocomplete=\"new-date\"\n        readonly\n        placeholder=\"please select date\"\n        class=\"form-control\"\n        name=\"date\"\n        bsDatepicker\n        [(bsValue)]=\"careActivity.dateBinding\"\n        [ngModel]=\"careActivity.dateBinding\"\n        [bsConfig]=\"DATEPICKER_CONFIG\"\n        (bsValueChange)=\"onValueChange($event)\">\n    </div>\n\n    <div class=\"col-lg-6 col-md-12 form-group\">\n      <label for=\"Reason\">Reason</label>\n      <input type=\"text\" id=\"Reason\"\n        autocomplete=\"new-Reason\"\n        class=\"form-control\"\n        name=\"reason\"\n        placeholder=\"please enter reason\"\n        [(ngModel)]=\"careActivity.reason\">\n    </div>\n\n    <div class=\"col-lg-6 col-md-12 form-group\">\n      <label for=\"Type\">Type</label>\n      <input type=\"text\" id=\"Type\"\n        autocomplete=\"new-Type\"\n        class=\"form-control\"\n        name=\"type\"\n        placeholder=\"please enter type\"\n        [(ngModel)]=\"careActivity.type\">\n    </div>\n\n    <div class=\"col-lg-6 col-md-12 form-group\">\n      <label for=\"giftPrice\">Gift Price (MMK)</label>\n      <input type=\"text\" id=\"giftPrice\"\n        autocomplete=\"new-giftPrice\"\n        class=\"form-control\"\n        name=\"giftPrice\"\n        min=\"0\"\n        placeholder=\"please enter gift price\"\n        #GiftPrice\n        [ngModel]=\"careActivity.giftPrice\"\n        (ngModelChange)=\"changeGiftPrice()\">\n    </div>\n\n  </div>\n\n  <div class=\"form-group\">\n    <button type=\"button\" class=\"btn btn-primary\"\n      (click)=\"createCareActivity(CareActivityForm)\"\n      [disabled]=\"isLoading || CareActivityForm.form.invalid\">\n      Create\n      <i *ngIf=\"isLoading\" class=\"fa fa-refresh fa-spin\"></i>\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/ccm/ccm-create/ccm-create.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/ccm/ccm-create/ccm-create.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ccm/ccm-create/ccm-create.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ccm/ccm-create/ccm-create.component.ts ***!
  \********************************************************/
/*! exports provided: CcmCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcmCreateComponent", function() { return CcmCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var models_customer_care_activity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/customer-care-activity */ "./src/models/customer-care-activity.ts");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var shared_services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/services/customer.service */ "./src/shared/services/customer.service.ts");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/observable/concat */ "./node_modules/rxjs/internal/observable/concat.js");
/* harmony import */ var rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/operators/tap */ "./node_modules/rxjs/internal/operators/tap.js");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var constants_care_activity__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! constants/care-activity */ "./src/constants/care-activity.ts");
/* harmony import */ var constants_datepicker_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! constants/datepicker-config */ "./src/constants/datepicker-config.ts");
/* harmony import */ var shared_services_care_activity_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! shared/services/care-activity.service */ "./src/shared/services/care-activity.service.ts");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
/* harmony import */ var app_role_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/role.service */ "./src/app/role.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var CcmCreateComponent = /** @class */ (function () {
    function CcmCreateComponent(_customerSv, _emitter, _notify, _careActivitySv, _userSv, _role) {
        this._customerSv = _customerSv;
        this._emitter = _emitter;
        this._notify = _notify;
        this._careActivitySv = _careActivitySv;
        this._userSv = _userSv;
        this._role = _role;
        this.careActivity = new models_customer_care_activity__WEBPACK_IMPORTED_MODULE_1__["CustomerCareActivity"]();
        this.CARE_ACTIVITY_STATUSES = constants_care_activity__WEBPACK_IMPORTED_MODULE_14__["CARE_ACTIVITY_STATUSES"];
        this.DATEPICKER_CONFIG = constants_datepicker_config__WEBPACK_IMPORTED_MODULE_15__["DATEPICKER_CONFIG"];
        this.customers = Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        this.customerInput$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isLoadingCusotmer = false;
        this.staffs = [];
        this.isLoadingStaff = false;
        this.isLoading = false;
    }
    CcmCreateComponent.prototype.ngOnInit = function () {
        this.careActivity.customer = null;
        this.careActivity.status = null;
        this.careActivity.assignedStaff = null;
        this._initSearchCustomers();
        this._getStaffs();
    };
    CcmCreateComponent.prototype._getStaffs = function (opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        this.isLoadingStaff = true;
        this._userSv.getAllUsersInBranch(opts).subscribe(function (res) {
            _this.staffs = res;
            var index = _this.staffs.findIndex(function (item) { return _this.careActivity.assignedStaff && item.id === _this.careActivity.assignedStaff.id; });
            if (index < 0) {
                _this.careActivity.assignedStaff = null;
            }
            _this.isLoadingStaff = false;
        }, function (errors) {
            _this.isLoadingStaff = false;
            _this._notify.error(errors);
        });
    };
    CcmCreateComponent.prototype._initSearchCustomers = function () {
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
    CcmCreateComponent.prototype._searchCustomers = function (customers) {
        var _this = this;
        this.customers = Object(rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_8__["concat"])(Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(customers), // default items
        this.customerInput$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(), Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_11__["tap"])(function () { return (_this.isLoadingCusotmer = true); }), Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_12__["switchMap"])(function (term) {
            return _this._customerSv
                .filterCustomers({
                page: 0,
                size: 100,
                sort: 'asc',
                column: 'id',
                txtSearch: term || '',
            })
                .map(function (res) { return res.customerList; })
                .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_13__["catchError"])(function () { return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }), // empty list on error
            Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_11__["tap"])(function () { return (_this.isLoadingCusotmer = false); }));
        })));
    };
    CcmCreateComponent.prototype.onValueChange = function (event) {
        this.careActivity.date = event;
    };
    CcmCreateComponent.prototype.createCareActivity = function (form) {
        var _this = this;
        this.isLoading = true;
        this._careActivitySv.createCareActivity(this.careActivity.toJSON()).subscribe(function (res) {
            form.form.markAsPristine({ onlySelf: false });
            _this._notify.success(res.meta.message);
            _this._emitter.publishData({
                type: constants_emitter__WEBPACK_IMPORTED_MODULE_6__["EMITTER_TYPE"].CREATE_CARE_ACTIVITY,
            });
            _this.isLoading = false;
        }, function (errors) {
            _this.isLoading = false;
            _this._notify.error(errors);
        }, function () {
            setTimeout(function () {
                _this.careActivity = new models_customer_care_activity__WEBPACK_IMPORTED_MODULE_1__["CustomerCareActivity"]();
                _this.careActivity.customer = null;
                _this.careActivity.status = null;
                _this.careActivity.assignedStaff = null;
            }, 0);
        });
    };
    CcmCreateComponent.prototype.changeGiftPrice = function () {
        if (isNaN(this.GiftPrice.nativeElement.value.toNumber())) {
            this.GiftPrice.nativeElement.value = this.careActivity.giftPrice;
            return;
        }
        this.careActivity.giftPrice = this.GiftPrice.nativeElement.value.toNumber().format();
    };
    CcmCreateComponent.prototype.changeCustomer = function () {
        if (!this._role.is_admin) {
            return;
        }
        var opts = {};
        if (this.careActivity.customer) {
            opts.branchId = this.careActivity.customer.assignedBranchId;
        }
        this._getStaffs(opts);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('GiftPrice'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CcmCreateComponent.prototype, "GiftPrice", void 0);
    CcmCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccm-create',
            template: __webpack_require__(/*! ./ccm-create.component.html */ "./src/app/ccm/ccm-create/ccm-create.component.html"),
            styles: [__webpack_require__(/*! ./ccm-create.component.scss */ "./src/app/ccm/ccm-create/ccm-create.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"],
            shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_7__["NotifyService"],
            shared_services_care_activity_service__WEBPACK_IMPORTED_MODULE_16__["CareActivityService"],
            shared_services_user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"],
            app_role_service__WEBPACK_IMPORTED_MODULE_18__["RoleService"]])
    ], CcmCreateComponent);
    return CcmCreateComponent;
}());



/***/ }),

/***/ "./src/app/ccm/ccm-create/ccm-create.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/ccm/ccm-create/ccm-create.module.ts ***!
  \*****************************************************/
/*! exports provided: CcmCreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcmCreateModule", function() { return CcmCreateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ccm_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ccm-create.component */ "./src/app/ccm/ccm-create/ccm-create.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var shared_services_staff_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/services/staff.service */ "./src/shared/services/staff.service.ts");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _ccm_create_component__WEBPACK_IMPORTED_MODULE_2__["CcmCreateComponent"],
    },
];
var CcmCreateModule = /** @class */ (function () {
    function CcmCreateModule() {
    }
    CcmCreateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot()],
            declarations: [_ccm_create_component__WEBPACK_IMPORTED_MODULE_2__["CcmCreateComponent"]],
            providers: [shared_services_staff_service__WEBPACK_IMPORTED_MODULE_7__["StaffService"], shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]],
        })
    ], CcmCreateModule);
    return CcmCreateModule;
}());



/***/ }),

/***/ "./src/constants/care-activity.ts":
/*!****************************************!*\
  !*** ./src/constants/care-activity.ts ***!
  \****************************************/
/*! exports provided: CARE_ACTIVITY_STATUSES, CARE_ACTIVITY_STATUSES_TEXT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARE_ACTIVITY_STATUSES", function() { return CARE_ACTIVITY_STATUSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARE_ACTIVITY_STATUSES_TEXT", function() { return CARE_ACTIVITY_STATUSES_TEXT; });
var CARE_ACTIVITY_STATUSES = [
    {
        value: 'ON_GOING',
        name: 'On Going',
    },
    {
        value: 'COMPLETED',
        name: 'Completed',
    },
];
var CARE_ACTIVITY_STATUSES_TEXT = {
    ON_GOING: 'On Going',
    COMPLETED: 'Completed',
};


/***/ }),

/***/ "./src/models/customer-care-activity.ts":
/*!**********************************************!*\
  !*** ./src/models/customer-care-activity.ts ***!
  \**********************************************/
/*! exports provided: CustomerCareActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCareActivity", function() { return CustomerCareActivity; });
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer */ "./src/models/customer.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var constants_care_activity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constants/care-activity */ "./src/constants/care-activity.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/models/user.ts");
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





var CustomerCareActivity = /** @class */ (function (_super) {
    __extends(CustomerCareActivity, _super);
    function CustomerCareActivity() {
        var _this = _super.call(this) || this;
        _this.date = new Date();
        _this.dateBinding = new Date();
        _this.assignedStaff = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        return _this;
    }
    Object.defineProperty(CustomerCareActivity.prototype, "customerName", {
        get: function () {
            return this.customer ? this.customer.customerName : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerCareActivity.prototype, "customerAddress", {
        get: function () {
            return this.customer ? this.customer.address : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerCareActivity.prototype, "customerContactName", {
        get: function () {
            return this.customer ? this.customer.contactName : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerCareActivity.prototype, "customerPosition", {
        get: function () {
            return this.customer ? this.customer.position : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerCareActivity.prototype, "staffName", {
        get: function () {
            return this.assignedStaff ? this.assignedStaff.fullName : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerCareActivity.prototype, "date_str", {
        get: function () {
            return moment__WEBPACK_IMPORTED_MODULE_1__(this.date).toISOString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerCareActivity.prototype, "dateDisplay", {
        get: function () {
            return moment__WEBPACK_IMPORTED_MODULE_1__(this.date).format('YYYY-MM-DD');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerCareActivity.prototype, "dateBinding", {
        get: function () {
            return this._dateBinding;
        },
        set: function (v) {
            this._dateBinding = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerCareActivity.prototype, "statusStr", {
        get: function () {
            return this.status ? constants_care_activity__WEBPACK_IMPORTED_MODULE_2__["CARE_ACTIVITY_STATUSES_TEXT"][this.status] : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerCareActivity.prototype, "giftPrice", {
        get: function () {
            return this._giftPrice || '0';
        },
        set: function (v) {
            this._giftPrice = v;
        },
        enumerable: true,
        configurable: true
    });
    CustomerCareActivity.prototype.deserialize = function (input) {
        if (!input) {
            return;
        }
        _super.prototype.deserialize.call(this, input);
        Object.assign(this, input);
        if (input.dateActivity) {
            this.date = input.dateActivity;
            this.dateBinding = new Date(input.dateActivity);
        }
        this.customer = input.customer instanceof _customer__WEBPACK_IMPORTED_MODULE_0__["Customer"] ? input.customer : new _customer__WEBPACK_IMPORTED_MODULE_0__["Customer"]().deserialize(input.customer);
        this.assignedStaff =
            input.assignedStaff instanceof _user__WEBPACK_IMPORTED_MODULE_3__["User"] ? input.assignedStaff : new _user__WEBPACK_IMPORTED_MODULE_3__["User"]().deserialize(input.assignedStaff);
        this.giftPrice = (+input.giftPrice).format();
        return this;
    };
    CustomerCareActivity.prototype.toJSON = function () {
        return {
            customerId: this.customer ? this.customer.id : null,
            dateActivity: this.date_str,
            type: this.type || null,
            reason: this.reason || null,
            giftPrice: this.giftPrice.toNumber() || 0,
            status: this.status || null,
            assignedStaffId: this.assignedStaff ? this.assignedStaff.id : null,
        };
    };
    return CustomerCareActivity;
}(_base_model__WEBPACK_IMPORTED_MODULE_4__["BaseModel"]));



/***/ }),

/***/ "./src/shared/services/care-activity.service.ts":
/*!******************************************************!*\
  !*** ./src/shared/services/care-activity.service.ts ***!
  \******************************************************/
/*! exports provided: CareActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareActivityService", function() { return CareActivityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/shared/services/api.service.ts");
/* harmony import */ var models_customer_care_activity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models/customer-care-activity */ "./src/models/customer-care-activity.ts");
/* harmony import */ var _download_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./download.service */ "./src/shared/services/download.service.ts");
/* harmony import */ var app_services_root_scope_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/root-scope.service */ "./src/app/services/root-scope.service.ts");
/* harmony import */ var app_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/role.service */ "./src/app/role.service.ts");
/* harmony import */ var app_guard_roles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/guard/roles */ "./src/app/guard/roles.ts");
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







var CareActivityService = /** @class */ (function () {
    function CareActivityService(_api, _download, _rootScope, _role) {
        this._api = _api;
        this._download = _download;
        this._rootScope = _rootScope;
        this._role = _role;
    }
    CareActivityService.prototype.filterActivities = function (opts) {
        if (opts === void 0) { opts = {}; }
        var _opts = {
            role: this._rootScope.currentUser.id ? this._rootScope.currentUser.role : app_guard_roles__WEBPACK_IMPORTED_MODULE_6__["Roles"].MYTEL_ADMIN,
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
        return this._api.get("care-activity", __assign({}, _opts, opts)).map(function (res) {
            res.data.customerCareActivityList = res.data.customerCareActivityList.map(function (item) {
                return new models_customer_care_activity__WEBPACK_IMPORTED_MODULE_2__["CustomerCareActivity"]().deserialize(item);
            });
            return res.data;
        });
    };
    CareActivityService.prototype.createCareActivity = function (data) {
        return this._api.post("care-activity", data);
    };
    CareActivityService.prototype.updateCareActivity = function (id, data) {
        return this._api.put("care-activity/" + id, data);
    };
    CareActivityService.prototype.removeCareActivity = function (id) {
        return this._api.delete("care-activity/" + id);
    };
    CareActivityService.prototype.exportCCM = function (opts) {
        if (opts === void 0) { opts = {}; }
        var _opts = {
            role: this._rootScope.currentUser.id ? this._rootScope.currentUser.role : app_guard_roles__WEBPACK_IMPORTED_MODULE_6__["Roles"].MYTEL_ADMIN,
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
        return this._download.get("care-activity/export", __assign({}, _opts, opts));
    };
    CareActivityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _download_service__WEBPACK_IMPORTED_MODULE_3__["DownloadService"],
            app_services_root_scope_service__WEBPACK_IMPORTED_MODULE_4__["RootScopeService"],
            app_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"]])
    ], CareActivityService);
    return CareActivityService;
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
//# sourceMappingURL=ccm-create-ccm-create-module.494ba6402d3e5a2e0604.js.map