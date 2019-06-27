(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scheduler-create-scheduler-create-module"],{

/***/ "./src/app/msm/scheduler-create/scheduler-create.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/msm/scheduler-create/scheduler-create.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #SchedulerForm=\"ngForm\" novalidate class=\"mb-5\">\n  <div class=\"row customer-form-content mb-4\">\n    <div class=\"form-group col-md-6 col-sm-12\">\n      <label for=\"Name\">Name <i class=\"required\">&#40;*&#41;</i></label>\n      <input type=\"text\" id=\"Name\"\n        class=\"form-control\"\n        name=\"name\"\n        [(ngModel)]=\"scheduler.nameOfSale\"\n        placeholder=\"please enter name\"\n        required>\n    </div>\n\n    <div class=\"form-group col-md-6 col-sm-12\">\n      <label for=\"Name\">Customer <i class=\"required\">&#40;*&#41;</i></label>\n      <ng-select\n        [items]=\"customers | async\"\n        class=\"text-left\"\n        [closeOnSelect]=\"true\"\n        [clearable]=\"true\"\n        [loading]=\"isLoadingCusotmer\"\n        placeholder=\"please select customer\"\n        [searchable]=\"true\"\n        name=\"customer\"\n        [(ngModel)]=\"scheduler.customer\"\n        (ngModelChange)=\"changeCustomer()\"\n        bindLabel=\"customerName\"\n        [typeahead]=\"customerInput$\"\n        required>\n      </ng-select>\n    </div>\n\n    <div class=\"form-group col-md-6 col-sm-12\">\n      <label for=\"Date\">Date <i class=\"required\">&#40;*&#41;</i></label>\n      <input type=\"text\" id=\"Date\"\n        class=\"form-control\"\n        name=\"date\"\n        readonly\n        placeholder=\"please select date\"\n        bsDatepicker\n        [(bsValue)]=\"scheduler.date\"\n        [bsConfig]=\"DATEPICKER_CONFIG\"\n        required>\n    </div>\n\n    <div class=\"form-group col-md-6 col-sm-12\">\n      <label for=\"TimeStart\">Time Start <i class=\"required\">&#40;*&#41;</i></label>\n        <!-- <app-time-picker\n        [(ngModel)]=\"scheduler.time_start\"\n        name=\"time_start\"\n        required></app-time-picker> -->\n\n        <input type=\"text\"\n          id=\"TimeStart\"\n          class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': TimeStart.dirty && TimeStart.errors }\"\n          [(ngModel)]=\"scheduler.time_start\"\n          placeholder=\"please enter start time\"\n          name=\"time_start\"\n          required\n          appTimeValidator\n          #TimeStart=\"ngModel\">\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"TimeStart.errors?.required\">\n          Please enter time start\n        </div>\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"TimeStart.errors?.appTimeValidator\">\n          The time start format is incorrect\n        </div>\n    </div>\n\n    <div class=\"form-group col-md-6 col-sm-12\">\n      <label for=\"Name\">Time End <i class=\"required\">&#40;*&#41;</i></label>\n        <!-- <app-time-picker\n          [(ngModel)]=\"scheduler.time_end\"\n          name=\"time_end\"\n          required></app-time-picker> -->\n\n        <input type=\"text\"\n          id=\"EndTime\"\n          class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': EndTime.dirty && EndTime.errors }\"\n          [(ngModel)]=\"scheduler.time_end\"\n          placeholder=\"please enter end time\"\n          name=\"time_end\"\n          required\n          appTimeValidator\n          #EndTime=\"ngModel\">\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"EndTime.errors?.required\">\n          Please enter time end\n        </div>\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"EndTime.errors?.appTimeValidator\">\n          The time end format is incorrect\n        </div>\n    </div>\n\n    <div class=\"form-group col-md-6 col-sm-12\">\n      <label for=\"Name\">Staff <i class=\"required\">&#40;*&#41;</i></label>\n      <ng-select\n        [items]=\"staffs\"\n        class=\"text-left\"\n        [closeOnSelect]=\"true\"\n        [clearable]=\"true\"\n        [loading]=\"isLoadingStaff\"\n        placeholder=\"please select staff\"\n        [searchable]=\"true\"\n        name=\"assignedStaff\"\n        [(ngModel)]=\"scheduler.assignedStaff\"\n        bindLabel=\"code_full_name\"\n        required>\n      </ng-select>\n    </div>\n\n    <div class=\"form-group col-md-6 col-sm-12\">\n      <label for=\"Name\">Activity Type</label>\n      <ng-select\n        [items]=\"typeOfContacts\"\n        class=\"text-left\"\n        [closeOnSelect]=\"true\"\n        [clearable]=\"true\"\n        [loading]=\"isLoadingTypeOfContact\"\n        placeholder=\"please select activity type\"\n        [searchable]=\"false\"\n        name=\"typeOfContacts\"\n        [(ngModel)]=\"scheduler.actionOfSale\"\n        bindLabel=\"name\">\n      </ng-select>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <button type=\"button\" class=\"btn btn-primary\"\n        (click)=\"createScheduler(SchedulerForm)\"\n        [disabled]=\"isLoading || SchedulerForm.form.invalid || !scheduler.endAfterStart\">\n        Create\n        <i *ngIf=\"isLoading\" class=\"fa fa-refresh fa-spin\"></i>\n      </button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/msm/scheduler-create/scheduler-create.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/msm/scheduler-create/scheduler-create.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/msm/scheduler-create/scheduler-create.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/msm/scheduler-create/scheduler-create.component.ts ***!
  \********************************************************************/
/*! exports provided: SchedulerCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulerCreateComponent", function() { return SchedulerCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var constants_datepicker_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/datepicker-config */ "./src/constants/datepicker-config.ts");
/* harmony import */ var models_customer_sale_activity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models/customer-sale-activity */ "./src/models/customer-sale-activity.ts");
/* harmony import */ var shared_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/services/customer.service */ "./src/shared/services/customer.service.ts");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/observable/concat */ "./node_modules/rxjs/internal/observable/concat.js");
/* harmony import */ var rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var shared_services_customer_sale_activity_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/services/customer-sale-activity.service */ "./src/shared/services/customer-sale-activity.service.ts");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
/* harmony import */ var constants_action_of_sale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! constants/action-of-sale */ "./src/constants/action-of-sale.ts");
/* harmony import */ var shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/services/customer-classification.service */ "./src/shared/services/customer-classification.service.ts");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
/* harmony import */ var app_role_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/role.service */ "./src/app/role.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var SchedulerCreateComponent = /** @class */ (function () {
    function SchedulerCreateComponent(_customerSv, _notify, _customerSaleActivitySv, _emitter, _customerClassificationSv, _userSv, _role) {
        this._customerSv = _customerSv;
        this._notify = _notify;
        this._customerSaleActivitySv = _customerSaleActivitySv;
        this._emitter = _emitter;
        this._customerClassificationSv = _customerClassificationSv;
        this._userSv = _userSv;
        this._role = _role;
        this.DATEPICKER_CONFIG = constants_datepicker_config__WEBPACK_IMPORTED_MODULE_1__["DATEPICKER_CONFIG"];
        this.scheduler = new models_customer_sale_activity__WEBPACK_IMPORTED_MODULE_2__["CustomerSaleActivity"]();
        this.staffs = [];
        this.isLoadingStaff = false;
        this.isLoadingCusotmer = false;
        this.customerInput$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.isLoading = false;
        // customer
        this.customers = Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_7__["of"])([]);
        this.actionOfSales = constants_action_of_sale__WEBPACK_IMPORTED_MODULE_12__["ActionOfSale"];
        // type of contact
        this.isLoadingTypeOfContact = false;
        this.typeOfContacts = [];
    }
    SchedulerCreateComponent.prototype.ngOnInit = function () {
        this.scheduler.assignedStaff = null;
        this.scheduler.customer = null;
        this.scheduler.actionOfSale = null;
        this._initSearchCustomers();
        this._typeOfContact();
        this._getStaffs();
    };
    SchedulerCreateComponent.prototype._getStaffs = function (opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        this.isLoadingStaff = true;
        this._userSv.getAllUsersInBranch(opts).subscribe(function (res) {
            _this.staffs = res;
            var index = _this.staffs.findIndex(function (item) { return _this.scheduler.assignedStaff && item.id === _this.scheduler.assignedStaff.id; });
            if (index < 0) {
                _this.scheduler.assignedStaff = null;
            }
            _this.isLoadingStaff = false;
        }, function (errors) {
            _this.isLoadingStaff = false;
            _this._notify.error(errors);
        });
    };
    SchedulerCreateComponent.prototype._typeOfContact = function () {
        var _this = this;
        this.isLoadingTypeOfContact = true;
        var params = {
            type: 'contact',
        };
        this.typeOfContacts = [];
        this._customerClassificationSv.getCustomerClassification(params).subscribe(function (res) {
            _this.isLoadingTypeOfContact = false;
            _this.typeOfContacts = res.customerClassifications;
        }, function (errors) {
            _this.isLoadingTypeOfContact = false;
            _this._notify.error(errors);
        });
    };
    SchedulerCreateComponent.prototype.createScheduler = function (form) {
        var _this = this;
        if (!this.scheduler.endAfterStart) {
            this._notify.error('please select end time after start time');
            return;
        }
        this.isLoading = true;
        this._customerSaleActivitySv.createSaleActivities(this.scheduler.toJSON()).subscribe(function (res) {
            form.form.markAsPristine({ onlySelf: false });
            _this.isLoading = false;
            _this._emitter.publishData({
                type: constants_emitter__WEBPACK_IMPORTED_MODULE_11__["EMITTER_TYPE"].CREATE_SALE_ACTIVITY,
            });
            _this._notify.success("create sale activity success");
        }, function (errors) {
            _this.isLoading = false;
            _this._notify.error(errors);
        }, function () {
            setTimeout(function () {
                _this.scheduler = new models_customer_sale_activity__WEBPACK_IMPORTED_MODULE_2__["CustomerSaleActivity"]();
                _this.scheduler.assignedStaff = null;
                _this.scheduler.customer = null;
                _this.scheduler.actionOfSale = null;
            }, 0);
        });
    };
    SchedulerCreateComponent.prototype._initSearchCustomers = function () {
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
    SchedulerCreateComponent.prototype._searchCustomers = function (customers) {
        var _this = this;
        this.customers = Object(rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_6__["concat"])(Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_7__["of"])(customers), // default items
        this.customerInput$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () { return (_this.isLoadingCusotmer = true); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (term) {
            return _this._customerSv
                .filterCustomers({
                page: 0,
                size: 100,
                sort: 'asc',
                column: 'id',
                txtSearch: term || '',
            })
                .map(function (res) { return res.customerList; })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function () { return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_7__["of"])([]); }), // empty list on error
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () { return (_this.isLoadingCusotmer = false); }));
        })));
    };
    SchedulerCreateComponent.prototype.changeCustomer = function () {
        if (!this._role.is_admin) {
            return;
        }
        var opts = {};
        if (this.scheduler.customer) {
            opts.branchId = this.scheduler.customer.assignedBranchId;
        }
        this._getStaffs(opts);
    };
    SchedulerCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scheduler-create',
            template: __webpack_require__(/*! ./scheduler-create.component.html */ "./src/app/msm/scheduler-create/scheduler-create.component.html"),
            styles: [__webpack_require__(/*! ./scheduler-create.component.scss */ "./src/app/msm/scheduler-create/scheduler-create.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"],
            shared_services_customer_sale_activity_service__WEBPACK_IMPORTED_MODULE_9__["CustomerSaleActivityService"],
            shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__["EventEmitterService"],
            shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_13__["CustomerClassificationService"],
            shared_services_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"],
            app_role_service__WEBPACK_IMPORTED_MODULE_15__["RoleService"]])
    ], SchedulerCreateComponent);
    return SchedulerCreateComponent;
}());



/***/ }),

/***/ "./src/app/msm/scheduler-create/scheduler-create.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/msm/scheduler-create/scheduler-create.module.ts ***!
  \*****************************************************************/
/*! exports provided: SchedulerCreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulerCreateModule", function() { return SchedulerCreateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _scheduler_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scheduler-create.component */ "./src/app/msm/scheduler-create/scheduler-create.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var shared_time_picker_time_picker_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/time-picker/time-picker.module */ "./src/shared/time-picker/time-picker.module.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/services/customer-classification.service */ "./src/shared/services/customer-classification.service.ts");
/* harmony import */ var shared_services_staff_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/services/staff.service */ "./src/shared/services/staff.service.ts");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
/* harmony import */ var shared_validators_time_validator_time_validator_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/validators/time-validator/time-validator.module */ "./src/shared/validators/time-validator/time-validator.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: _scheduler_create_component__WEBPACK_IMPORTED_MODULE_2__["SchedulerCreateComponent"],
    },
];
var SchedulerCreateModule = /** @class */ (function () {
    function SchedulerCreateModule() {
    }
    SchedulerCreateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                shared_time_picker_time_picker_module__WEBPACK_IMPORTED_MODULE_4__["TimePickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                shared_validators_time_validator_time_validator_module__WEBPACK_IMPORTED_MODULE_11__["TimeValidatorModule"],
            ],
            declarations: [_scheduler_create_component__WEBPACK_IMPORTED_MODULE_2__["SchedulerCreateComponent"]],
            providers: [shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_8__["CustomerClassificationService"], shared_services_staff_service__WEBPACK_IMPORTED_MODULE_9__["StaffService"], shared_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]],
        })
    ], SchedulerCreateModule);
    return SchedulerCreateModule;
}());



/***/ })

}]);
//# sourceMappingURL=scheduler-create-scheduler-create-module.b2910b6c802fdab369ea.js.map