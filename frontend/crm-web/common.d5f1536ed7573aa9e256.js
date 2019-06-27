(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/lodash/clone.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/clone.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),

/***/ "./node_modules/lodash/cloneDeep.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/cloneDeep.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ "./src/app/cim/cim.service.ts":
/*!************************************!*\
  !*** ./src/app/cim/cim.service.ts ***!
  \************************************/
/*! exports provided: CimService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CimService", function() { return CimService; });
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

var CimService = /** @class */ (function () {
    function CimService() {
    }
    Object.defineProperty(CimService.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (v) {
            this._date = v;
        },
        enumerable: true,
        configurable: true
    });
    CimService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], CimService);
    return CimService;
}());



/***/ }),

/***/ "./src/constants/gmap.ts":
/*!*******************************!*\
  !*** ./src/constants/gmap.ts ***!
  \*******************************/
/*! exports provided: GMAP_DEFAULT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GMAP_DEFAULT", function() { return GMAP_DEFAULT; });
var GMAP_DEFAULT = {
    LAT: 16.9098592,
    LNG: 96.0118959,
    ZOOM: 11,
};


/***/ }),

/***/ "./src/constants/reg-exp.ts":
/*!**********************************!*\
  !*** ./src/constants/reg-exp.ts ***!
  \**********************************/
/*! exports provided: RegExp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegExp", function() { return RegExp; });
var RegExp = {
    email: /^[\w.-]+@[\w.-]+\.[\w]{2,4}$/,
    // phone: /^0[\d]{9,10}$/,
    numberFormat: /(\d)(?=(\d{3})+(?!\d))/g,
    userName: /^[a-z0-9]+(?:[_-][a-z0-9]+)*$/,
    latitude: /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,15})?))$/,
    longitude: /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,15})?))$/,
};


/***/ }),

/***/ "./src/shared/services/folder.service.ts":
/*!***********************************************!*\
  !*** ./src/shared/services/folder.service.ts ***!
  \***********************************************/
/*! exports provided: FolderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderService", function() { return FolderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var models_folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/folder */ "./src/models/folder.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/shared/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FolderService = /** @class */ (function () {
    function FolderService(_api) {
        this._api = _api;
    }
    FolderService.prototype.getListFolder = function (opts) {
        if (opts === void 0) { opts = {}; }
        return this._api.get("folder", opts).map(function (res) {
            return res.data.folder.map(function (item) { return new models_folder__WEBPACK_IMPORTED_MODULE_1__["Folder"]().deserialize(item); });
        });
    };
    FolderService.prototype.createFolder = function (data) {
        return this._api.post("folder", data);
    };
    FolderService.prototype.showFolder = function (id) {
        return this._api.get("folder/" + id).map(function (res) { return new models_folder__WEBPACK_IMPORTED_MODULE_1__["Folder"]().deserialize(res.data.folder); });
    };
    FolderService.prototype.updateFolder = function (id, data) {
        return this._api.put("folder/" + id, data);
    };
    FolderService.prototype.deleteFolder = function (id) {
        return this._api.delete("folder/" + id);
    };
    FolderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], FolderService);
    return FolderService;
}());



/***/ }),

/***/ "./src/shared/services/manage-file.service.ts":
/*!****************************************************!*\
  !*** ./src/shared/services/manage-file.service.ts ***!
  \****************************************************/
/*! exports provided: ManageFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageFileService", function() { return ManageFileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/shared/services/api.service.ts");
/* harmony import */ var models_manage_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models/manage-pdf */ "./src/models/manage-pdf.ts");
/* harmony import */ var _download_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./download.service */ "./src/shared/services/download.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageFileService = /** @class */ (function () {
    function ManageFileService(_api, _download) {
        this._api = _api;
        this._download = _download;
    }
    ManageFileService.prototype.getFiles = function (opts) {
        return this._api.get("manage-file", opts).map(function (res) {
            res.data.list = res.data.list.map(function (item) { return new models_manage_pdf__WEBPACK_IMPORTED_MODULE_2__["ManagePdf"]().deserialize(item); });
            return res.data;
        });
    };
    ManageFileService.prototype.getAllFiles = function (opts) {
        return this._api.get("manage-file/all", opts).map(function (res) {
            return res.data.listFile.map(function (item) { return new models_manage_pdf__WEBPACK_IMPORTED_MODULE_2__["ManagePdf"]().deserialize(item); });
        });
    };
    ManageFileService.prototype.getFile = function (id, opts) {
        return this._api.get("manage-file/" + id, opts);
    };
    ManageFileService.prototype.downloadFile = function (id, opts) {
        return this._download.get("manage-file/download-file/" + id, opts);
    };
    ManageFileService.prototype.deleteFile = function (id) {
        return this._api.delete("manage-file/" + id);
    };
    ManageFileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _download_service__WEBPACK_IMPORTED_MODULE_3__["DownloadService"]])
    ], ManageFileService);
    return ManageFileService;
}());



/***/ }),

/***/ "./src/shared/services/proposal.service.ts":
/*!*************************************************!*\
  !*** ./src/shared/services/proposal.service.ts ***!
  \*************************************************/
/*! exports provided: ProposalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalService", function() { return ProposalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/shared/services/api.service.ts");
/* harmony import */ var models_quotation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models/quotation */ "./src/models/quotation.ts");
/* harmony import */ var _download_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./download.service */ "./src/shared/services/download.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProposalService = /** @class */ (function () {
    function ProposalService(_api, _download) {
        this._api = _api;
        this._download = _download;
    }
    ProposalService.prototype.filterProposal = function (params) {
        return this._api.get("proposal/filters", params).map(function (res) {
            res.data.proposalList = res.data.proposalList.map(function (item) { return new models_quotation__WEBPACK_IMPORTED_MODULE_2__["Quotation"]().deserialize(item); });
            return res.data;
        });
    };
    ProposalService.prototype.exportProposal = function (params) {
        return this._download.get("proposal/proposalPdf.pdf", params);
    };
    ProposalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _download_service__WEBPACK_IMPORTED_MODULE_3__["DownloadService"]])
    ], ProposalService);
    return ProposalService;
}());



/***/ }),

/***/ "./src/shared/services/sale-activity.service.ts":
/*!******************************************************!*\
  !*** ./src/shared/services/sale-activity.service.ts ***!
  \******************************************************/
/*! exports provided: SaleActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleActivityService", function() { return SaleActivityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/shared/services/api.service.ts");
/* harmony import */ var models_sale_activity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models/sale-activity */ "./src/models/sale-activity.ts");
/* harmony import */ var app_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/role.service */ "./src/app/role.service.ts");
/* harmony import */ var app_services_root_scope_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/root-scope.service */ "./src/app/services/root-scope.service.ts");
/* harmony import */ var app_guard_roles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/guard/roles */ "./src/app/guard/roles.ts");
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






var SaleActivityService = /** @class */ (function () {
    function SaleActivityService(_api, _rootScope, _role) {
        this._api = _api;
        this._rootScope = _rootScope;
        this._role = _role;
    }
    SaleActivityService.prototype.getSaleActivitiesList = function (opts) {
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
        return this._api.get("sale-activities", __assign({}, _opts, opts)).map(function (res) {
            res.data.list = res.data.list.map(function (item) {
                return new models_sale_activity__WEBPACK_IMPORTED_MODULE_2__["SaleActivity"]().deserialize(item);
            });
            return res.data;
        });
    };
    SaleActivityService.prototype.createSaleActivity = function (data) {
        return this._api.post("sale-activities", data);
    };
    SaleActivityService.prototype.updateSaleActivity = function (id, data) {
        return this._api.put("sale-activities/" + id, data);
    };
    SaleActivityService.prototype.removeSaleActivity = function (id) {
        return this._api.delete("sale-activities/" + id);
    };
    SaleActivityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], app_services_root_scope_service__WEBPACK_IMPORTED_MODULE_4__["RootScopeService"], app_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]])
    ], SaleActivityService);
    return SaleActivityService;
}());



/***/ })

}]);
//# sourceMappingURL=common.d5f1536ed7573aa9e256.js.map