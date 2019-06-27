(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ccm-ccm-module~ccm-filter-ccm-filter-module"],{

/***/ "./src/app/ccm/ccm.service.ts":
/*!************************************!*\
  !*** ./src/app/ccm/ccm.service.ts ***!
  \************************************/
/*! exports provided: CcmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcmService", function() { return CcmService; });
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

var CcmService = /** @class */ (function () {
    function CcmService() {
    }
    Object.defineProperty(CcmService.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (v) {
            this._date = v;
        },
        enumerable: true,
        configurable: true
    });
    CcmService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], CcmService);
    return CcmService;
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



/***/ })

}]);
//# sourceMappingURL=ccm-ccm-module~ccm-filter-ccm-filter-module.9b7834dfe022f6188512.js.map