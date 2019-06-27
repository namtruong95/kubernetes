(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cim-cim-module~customer-create-customer-create-module~customer-filter-customer-filter-module"],{

/***/ "./src/constants/customer-status.ts":
/*!******************************************!*\
  !*** ./src/constants/customer-status.ts ***!
  \******************************************/
/*! exports provided: CUSTOMER_STATUSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMER_STATUSES", function() { return CUSTOMER_STATUSES; });
var CUSTOMER_STATUSES = [
    {
        value: 0,
        name: 'Not Contacted',
    },
    {
        value: 1,
        name: 'Contacted',
    },
];


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



/***/ }),

/***/ "./src/shared/services/customer-type.service.ts":
/*!******************************************************!*\
  !*** ./src/shared/services/customer-type.service.ts ***!
  \******************************************************/
/*! exports provided: CustomerTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerTypeService", function() { return CustomerTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/shared/services/api.service.ts");
/* harmony import */ var models_customer_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models/customer-type */ "./src/models/customer-type.ts");
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



var CustomerTypeService = /** @class */ (function () {
    function CustomerTypeService(_api) {
        this._api = _api;
    }
    CustomerTypeService.prototype.customerTypes = function (params) {
        return this._api.get("customer-types", params).map(function (res) {
            res.data.customerTypes = res.data.customerTypes.map(function (item) { return new models_customer_type__WEBPACK_IMPORTED_MODULE_2__["CustomerType"]().deserialize(item); });
            return res.data;
        });
    };
    CustomerTypeService.prototype.customerTypesRead = function (params) {
        return this._api.get("customers/read", params).map(function (res) {
            var data = [];
            if (res.data.typeOfCompanys) {
                res.data.typeOfCompanys.forEach(function (item) {
                    data.push(new models_customer_type__WEBPACK_IMPORTED_MODULE_2__["CustomerType"]().deserialize(__assign({}, item, { child: { state: 'Type Of Companies' } })));
                });
            }
            if (res.data.typeOfGroups) {
                res.data.typeOfGroups.forEach(function (item) {
                    data.push(new models_customer_type__WEBPACK_IMPORTED_MODULE_2__["CustomerType"]().deserialize(__assign({}, item, { child: { state: 'Type Of Groups' } })));
                });
            }
            return data;
        });
    };
    CustomerTypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], CustomerTypeService);
    return CustomerTypeService;
}());



/***/ }),

/***/ "./src/shared/services/customer.service.ts":
/*!*************************************************!*\
  !*** ./src/shared/services/customer.service.ts ***!
  \*************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/shared/services/api.service.ts");
/* harmony import */ var models_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models/customer */ "./src/models/customer.ts");
/* harmony import */ var _download_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./download.service */ "./src/shared/services/download.service.ts");
/* harmony import */ var app_services_root_scope_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/root-scope.service */ "./src/app/services/root-scope.service.ts");
/* harmony import */ var app_guard_roles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/guard/roles */ "./src/app/guard/roles.ts");
/* harmony import */ var app_role_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/role.service */ "./src/app/role.service.ts");
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







var CustomerService = /** @class */ (function () {
    function CustomerService(_api, _download, _rootScope, _role) {
        this._api = _api;
        this._download = _download;
        this._rootScope = _rootScope;
        this._role = _role;
    }
    CustomerService.prototype.customersList = function (params) {
        return this._api.get("customers", params).map(function (res) {
            res.data.customerList = res.data.customerList.map(function (item) { return new models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]().deserialize(item); });
            return res.data;
        });
    };
    CustomerService.prototype.showCustomer = function (id, opts) {
        return this._api.get("customers/" + id, opts).map(function (res) {
            if (res.data && res.data.customer) {
                return new models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]().deserialize(res.data.customer);
            }
            return;
        });
    };
    CustomerService.prototype.filterListCustomers = function (opts) {
        if (opts === void 0) { opts = {}; }
        var _opts = {
            role: this._rootScope.currentUser.id ? this._rootScope.currentUser.role : app_guard_roles__WEBPACK_IMPORTED_MODULE_5__["Roles"].MYTEL_ADMIN,
        };
        if (this._role.is_hq_sale_staff || this._role.is_branch_sale_staff) {
            _opts.assignedStaffId = this._rootScope.currentUser.id ? this._rootScope.currentUser.id : 0;
        }
        return this._api.get("customers/filters", __assign({}, _opts, opts)).map(function (res) {
            res.data.customerList = res.data.customerList.map(function (item) { return new models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]().deserialize(item); });
            return res.data;
        });
    };
    CustomerService.prototype.filterCustomers = function (opts) {
        if (opts === void 0) { opts = {}; }
        var _opts = {
            role: this._rootScope.currentUser.id ? this._rootScope.currentUser.role : app_guard_roles__WEBPACK_IMPORTED_MODULE_5__["Roles"].MYTEL_ADMIN,
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
        return this._api.get("customers/filters", __assign({}, _opts, opts)).map(function (res) {
            res.data.customerList = res.data.customerList.map(function (item) { return new models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]().deserialize(item); });
            return res.data;
        });
    };
    CustomerService.prototype.createCustomer = function (data) {
        return this._api.post("customers", data);
    };
    CustomerService.prototype.updateCustomer = function (id, data) {
        return this._api.put("customers/" + id, data);
    };
    CustomerService.prototype.removeCustomer = function (id) {
        return this._api.delete("customers/" + id);
    };
    CustomerService.prototype.exportCustomer = function (opts) {
        if (opts === void 0) { opts = {}; }
        var _opts = {
            role: this._rootScope.currentUser.id ? this._rootScope.currentUser.role : app_guard_roles__WEBPACK_IMPORTED_MODULE_5__["Roles"].MYTEL_ADMIN,
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
        return this._download.get("customers/export", __assign({}, _opts, opts));
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _download_service__WEBPACK_IMPORTED_MODULE_3__["DownloadService"],
            app_services_root_scope_service__WEBPACK_IMPORTED_MODULE_4__["RootScopeService"],
            app_role_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ })

}]);
//# sourceMappingURL=cim-cim-module~customer-create-customer-create-module~customer-filter-customer-filter-module.545ae4e1c5b7137e89a8.js.map