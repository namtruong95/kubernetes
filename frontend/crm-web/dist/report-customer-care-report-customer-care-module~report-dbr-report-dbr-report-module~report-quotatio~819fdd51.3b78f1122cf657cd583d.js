(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-customer-care-report-customer-care-module~report-dbr-report-dbr-report-module~report-quotatio~819fdd51"],{

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

/***/ "./src/models/customer-sale-activity.ts":
/*!**********************************************!*\
  !*** ./src/models/customer-sale-activity.ts ***!
  \**********************************************/
/*! exports provided: CustomerSaleActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerSaleActivity", function() { return CustomerSaleActivity; });
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer */ "./src/models/customer.ts");
/* harmony import */ var _customer_classification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-classification */ "./src/models/customer-classification.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/models/user.ts");
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.model */ "./src/models/base.model.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
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





var CustomerSaleActivity = /** @class */ (function (_super) {
    __extends(CustomerSaleActivity, _super);
    function CustomerSaleActivity() {
        var _this = _super.call(this) || this;
        _this.customer = new _customer__WEBPACK_IMPORTED_MODULE_0__["Customer"]();
        _this.time_start = moment__WEBPACK_IMPORTED_MODULE_4__().format('HH:mm');
        _this.date = moment__WEBPACK_IMPORTED_MODULE_4__().toDate();
        _this.time_end = moment__WEBPACK_IMPORTED_MODULE_4__().format('HH:mm');
        _this.actionOfSale = new _customer_classification__WEBPACK_IMPORTED_MODULE_1__["CustomerClassification"]();
        _this.assignedStaff = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        return _this;
    }
    Object.defineProperty(CustomerSaleActivity.prototype, "date_str", {
        get: function () {
            return moment__WEBPACK_IMPORTED_MODULE_4__(this.date).format('YYYY-MM-DD');
        },
        set: function (v) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerSaleActivity.prototype, "start", {
        get: function () {
            return this.date_str + " " + this.time_start;
        },
        set: function (v) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerSaleActivity.prototype, "end", {
        get: function () {
            return this.date_str + " " + this.time_end;
        },
        set: function (v) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerSaleActivity.prototype, "endAfterStart", {
        get: function () {
            return moment__WEBPACK_IMPORTED_MODULE_4__(this.end).isAfter(moment__WEBPACK_IMPORTED_MODULE_4__(this.start));
        },
        set: function (v) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerSaleActivity.prototype, "title", {
        get: function () {
            return this.time_start + "~" + this.time_end + " " + this.nameOfSale;
        },
        set: function (v) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerSaleActivity.prototype, "actionOfSale", {
        get: function () {
            return this._actionOfSale;
        },
        set: function (v) {
            this._actionOfSale = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerSaleActivity.prototype, "actionOfSaleName", {
        get: function () {
            return this.actionOfSale ? this.actionOfSale.name : null;
        },
        set: function (v) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerSaleActivity.prototype, "staffUserName", {
        get: function () {
            return this.assignedStaff ? this.assignedStaff.userName : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerSaleActivity.prototype, "staffFullName", {
        get: function () {
            return this.assignedStaff ? this.assignedStaff.fullName : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerSaleActivity.prototype, "customerName", {
        get: function () {
            return this.customer ? this.customer.customerName : null;
        },
        set: function (v) { },
        enumerable: true,
        configurable: true
    });
    CustomerSaleActivity.prototype.deserialize = function (input) {
        if (!input) {
            return;
        }
        _super.prototype.deserialize.call(this, input);
        Object.assign(this, input);
        this.date = input.date || moment__WEBPACK_IMPORTED_MODULE_4__(input.dateStart).toDate();
        this.time_start = input.time_start || moment__WEBPACK_IMPORTED_MODULE_4__(input.dateStart).format('HH:mm');
        this.time_end = input.time_end || moment__WEBPACK_IMPORTED_MODULE_4__(input.dateEnd).format('HH:mm');
        this.assignedStaff =
            input.assignedStaff instanceof _user__WEBPACK_IMPORTED_MODULE_2__["User"] ? input.assignedStaff : new _user__WEBPACK_IMPORTED_MODULE_2__["User"]().deserialize(input.assignedStaff);
        this.actionOfSale =
            input.actionOfSale instanceof _customer_classification__WEBPACK_IMPORTED_MODULE_1__["CustomerClassification"]
                ? input.actionOfSale
                : new _customer_classification__WEBPACK_IMPORTED_MODULE_1__["CustomerClassification"]().deserialize(input.actionOfSale);
        this.customer = input.customer instanceof _customer__WEBPACK_IMPORTED_MODULE_0__["Customer"] ? input.customer : new _customer__WEBPACK_IMPORTED_MODULE_0__["Customer"]().deserialize(input.customer);
        return this;
    };
    CustomerSaleActivity.prototype.toJSON = function () {
        return {
            customerId: this.customer ? this.customer.id : null,
            dateStart: moment__WEBPACK_IMPORTED_MODULE_4__(this.date_str + " " + this.time_start, 'YYYY-MM-DD HH:mm').toISOString(),
            dateEnd: moment__WEBPACK_IMPORTED_MODULE_4__(this.date_str + " " + this.time_end, 'YYYY-MM-DD HH:mm').toISOString(),
            nameOfSale: this.nameOfSale || null,
            assignedStaffId: this.assignedStaff ? this.assignedStaff.id : null,
            actionOfSaleId: this.actionOfSale ? this.actionOfSale.id : null,
        };
    };
    return CustomerSaleActivity;
}(_base_model__WEBPACK_IMPORTED_MODULE_3__["BaseModel"]));



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

/***/ "./src/shared/services/report.service.ts":
/*!***********************************************!*\
  !*** ./src/shared/services/report.service.ts ***!
  \***********************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/shared/services/api.service.ts");
/* harmony import */ var app_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/role.service */ "./src/app/role.service.ts");
/* harmony import */ var app_services_root_scope_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/root-scope.service */ "./src/app/services/root-scope.service.ts");
/* harmony import */ var app_guard_roles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/guard/roles */ "./src/app/guard/roles.ts");
/* harmony import */ var _download_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./download.service */ "./src/shared/services/download.service.ts");
/* harmony import */ var models_customer_care_activity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! models/customer-care-activity */ "./src/models/customer-care-activity.ts");
/* harmony import */ var models_quotation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! models/quotation */ "./src/models/quotation.ts");
/* harmony import */ var models_sale_activity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! models/sale-activity */ "./src/models/sale-activity.ts");
/* harmony import */ var models_customer_sale_activity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! models/customer-sale-activity */ "./src/models/customer-sale-activity.ts");
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










var ReportService = /** @class */ (function () {
    function ReportService(_api, _role, _rootScope, _download) {
        this._api = _api;
        this._role = _role;
        this._rootScope = _rootScope;
        this._download = _download;
    }
    ReportService.prototype.reportCareActivity = function (opts) {
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
        return this._download.get("report/care-activity", __assign({}, _opts, opts));
    };
    ReportService.prototype.previewReportCareActivity = function (opts) {
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
        return this._api.get("report/preview/care-activity", __assign({}, _opts, opts)).map(function (res) {
            res.data.careActivityList = res.data.careActivityList.map(function (item) { return new models_customer_care_activity__WEBPACK_IMPORTED_MODULE_6__["CustomerCareActivity"]().deserialize(item); });
            return res.data;
        });
    };
    ReportService.prototype.reportSaleActivity = function (opts) {
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
        return this._download.get("report/sale-activity", __assign({}, _opts, opts));
    };
    ReportService.prototype.previewReportSaleActivity = function (opts) {
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
        return this._api.get("report/preview/sale-activity", __assign({}, _opts, opts)).map(function (res) {
            res.data.saleActivityList = res.data.saleActivityList.map(function (item) {
                return new models_sale_activity__WEBPACK_IMPORTED_MODULE_8__["SaleActivity"]().deserialize(item);
            });
            return res.data;
        });
    };
    ReportService.prototype.reportQuotation = function (opts) {
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
        return this._download.get("report/quotation", __assign({}, _opts, opts));
    };
    ReportService.prototype.previewReportQuotation = function (opts) {
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
        return this._api.get("report/preview/quotation", __assign({}, _opts, opts)).map(function (res) {
            res.data.quotationList = res.data.quotationList.map(function (item) { return new models_quotation__WEBPACK_IMPORTED_MODULE_7__["Quotation"]().deserialize(item); });
            return res.data;
        });
    };
    ReportService.prototype.reportSchedule = function (opts) {
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
        return this._download.get("report/schedule", __assign({}, _opts, opts));
    };
    ReportService.prototype.previewReportSchedule = function (opts) {
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
        return this._api.get("report/preview/schedule", __assign({}, _opts, opts)).map(function (res) {
            res.data.scheduleList = res.data.scheduleList.map(function (item) { return new models_customer_sale_activity__WEBPACK_IMPORTED_MODULE_9__["CustomerSaleActivity"]().deserialize(item); });
            return res.data;
        });
    };
    ReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            app_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"],
            app_services_root_scope_service__WEBPACK_IMPORTED_MODULE_3__["RootScopeService"],
            _download_service__WEBPACK_IMPORTED_MODULE_5__["DownloadService"]])
    ], ReportService);
    return ReportService;
}());



/***/ })

}]);
//# sourceMappingURL=report-customer-care-report-customer-care-module~report-dbr-report-dbr-report-module~report-quotatio~819fdd51.3b78f1122cf657cd583d.js.map