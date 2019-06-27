(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["policy-create-policy-create-module~policy-filter-policy-filter-module~policy-policy-module~quotation~55e30d2c"],{

/***/ "./src/models/folder.ts":
/*!******************************!*\
  !*** ./src/models/folder.ts ***!
  \******************************/
/*! exports provided: Folder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Folder", function() { return Folder; });
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

var Folder = /** @class */ (function (_super) {
    __extends(Folder, _super);
    function Folder() {
        return _super.call(this) || this;
    }
    Folder.prototype.deserialize = function (input) {
        if (!input) {
            return;
        }
        _super.prototype.deserialize.call(this, input);
        Object.assign(this, input);
        return this;
    };
    Folder.prototype.toJSON = function () {
        return {
            name: this.name,
        };
    };
    return Folder;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]));



/***/ }),

/***/ "./src/models/manage-pdf.ts":
/*!**********************************!*\
  !*** ./src/models/manage-pdf.ts ***!
  \**********************************/
/*! exports provided: ManagePdf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePdf", function() { return ManagePdf; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ "./src/models/base.model.ts");
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder */ "./src/models/folder.ts");
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


var ManagePdf = /** @class */ (function (_super) {
    __extends(ManagePdf, _super);
    function ManagePdf() {
        return _super.call(this) || this;
    }
    Object.defineProperty(ManagePdf.prototype, "record_id", {
        get: function () {
            return this.recordId && ('00000' + this.recordId).substr(-5);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagePdf.prototype, "folder_record_id", {
        get: function () {
            return (this.folder ? this.folder.name : 'ROOT') + " - " + this.fileName;
        },
        enumerable: true,
        configurable: true
    });
    ManagePdf.prototype.deserialize = function (input) {
        if (!input) {
            return;
        }
        _super.prototype.deserialize.call(this, input);
        Object.assign(this, input);
        this.folder = input.folder instanceof _folder__WEBPACK_IMPORTED_MODULE_1__["Folder"] ? input.folder : new _folder__WEBPACK_IMPORTED_MODULE_1__["Folder"]().deserialize(input.folder);
        return this;
    };
    return ManagePdf;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]));



/***/ }),

/***/ "./src/models/policy.ts":
/*!******************************!*\
  !*** ./src/models/policy.ts ***!
  \******************************/
/*! exports provided: Policy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Policy", function() { return Policy; });
/* harmony import */ var _customer_classification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-classification */ "./src/models/customer-classification.ts");
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.model */ "./src/models/base.model.ts");
/* harmony import */ var _manage_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-pdf */ "./src/models/manage-pdf.ts");
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



var Policy = /** @class */ (function (_super) {
    __extends(Policy, _super);
    function Policy() {
        var _this = _super.call(this) || this;
        _this.typeOfService = new _customer_classification__WEBPACK_IMPORTED_MODULE_0__["CustomerClassification"]();
        _this.serviceTerm = new _customer_classification__WEBPACK_IMPORTED_MODULE_0__["CustomerClassification"]();
        return _this;
    }
    Object.defineProperty(Policy.prototype, "serviceTerm", {
        get: function () {
            return this._serviceTerm;
        },
        set: function (v) {
            this._serviceTerm = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Policy.prototype, "serviceTermName", {
        get: function () {
            return this.serviceTerm ? this.serviceTerm.name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Policy.prototype, "bandWidth", {
        get: function () {
            return +this._bandWidth || 0;
        },
        set: function (v) {
            this._bandWidth = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Policy.prototype, "typeOfService", {
        get: function () {
            return this._typeOfService;
        },
        set: function (v) {
            this._typeOfService = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Policy.prototype, "typeOfServiceName", {
        get: function () {
            return this.typeOfService ? this.typeOfService.name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Policy.prototype, "minDistance", {
        get: function () {
            return +this._minDistance || 0;
        },
        set: function (v) {
            this._minDistance = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Policy.prototype, "maxDistance", {
        get: function () {
            return +this._maxDistance || 0;
        },
        set: function (v) {
            this._maxDistance = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Policy.prototype, "otc", {
        get: function () {
            return this._otc || '0';
        },
        set: function (v) {
            this._otc = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Policy.prototype, "mrcMin", {
        get: function () {
            return this._mrcMin || '0';
        },
        set: function (v) {
            this._mrcMin = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Policy.prototype, "mrcMax", {
        get: function () {
            return this._mrcMax || '0';
        },
        set: function (v) {
            this._mrcMax = v;
        },
        enumerable: true,
        configurable: true
    });
    Policy.prototype.deserialize = function (input) {
        if (!input) {
            return;
        }
        _super.prototype.deserialize.call(this, input);
        Object.assign(this, input);
        this.typeOfService =
            input.typeOfService instanceof _customer_classification__WEBPACK_IMPORTED_MODULE_0__["CustomerClassification"]
                ? input.typeOfService
                : new _customer_classification__WEBPACK_IMPORTED_MODULE_0__["CustomerClassification"]().deserialize(input.typeOfService);
        this.serviceTerm =
            input.serviceTerm instanceof _customer_classification__WEBPACK_IMPORTED_MODULE_0__["CustomerClassification"]
                ? input.serviceTerm
                : new _customer_classification__WEBPACK_IMPORTED_MODULE_0__["CustomerClassification"]().deserialize(input.serviceTerm);
        this.file = input.file instanceof _manage_pdf__WEBPACK_IMPORTED_MODULE_2__["ManagePdf"] ? input.file : new _manage_pdf__WEBPACK_IMPORTED_MODULE_2__["ManagePdf"]().deserialize(input.file);
        return this;
    };
    Policy.prototype.toJSON = function () {
        return {
            policyName: this.policyName || null,
            serviceTermId: this.serviceTerm ? this.serviceTerm.id : null,
            bandWidth: this.bandWidth || null,
            typeOfServiceId: this.typeOfService ? this.typeOfService.id : null,
            minDistance: this.minDistance || null,
            maxDistance: this.maxDistance || null,
            otc: this.otc.toNumber() || 0,
            mrcMin: this.mrcMin.toNumber() || 0,
            mrcMax: this.mrcMax.toNumber() || 0,
            fileId: this.file ? this.file.id : null,
        };
    };
    return Policy;
}(_base_model__WEBPACK_IMPORTED_MODULE_1__["BaseModel"]));



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

/***/ "./src/shared/services/policy.service.ts":
/*!***********************************************!*\
  !*** ./src/shared/services/policy.service.ts ***!
  \***********************************************/
/*! exports provided: PolicyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyService", function() { return PolicyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var models_policy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/policy */ "./src/models/policy.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/shared/services/api.service.ts");
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




var PolicyService = /** @class */ (function () {
    function PolicyService(_api, _download) {
        this._api = _api;
        this._download = _download;
    }
    PolicyService.prototype.filterPolicies = function (params) {
        return this._api.get("policy/filters", params).map(function (res) {
            res.data.policyList = res.data.policyList.map(function (item) { return new models_policy__WEBPACK_IMPORTED_MODULE_1__["Policy"]().deserialize(item); });
            return res.data;
        });
    };
    PolicyService.prototype.createPolicy = function (body) {
        return this._api.post("policy", body);
    };
    PolicyService.prototype.updatePolicy = function (id, body) {
        return this._api.put("policy/" + id, body);
    };
    PolicyService.prototype.deletePolicy = function (id) {
        return this._api.delete("policy/" + id);
    };
    PolicyService.prototype.findPolicy = function (params) {
        return this._api.get("policy/findByPolicy", params).map(function (res) {
            if (res.data && res.data.policy) {
                return new models_policy__WEBPACK_IMPORTED_MODULE_1__["Policy"]().deserialize(res.data.policy);
            }
            else {
                return null;
            }
        });
    };
    PolicyService.prototype.exportPolicy = function (params) {
        return this._download.get("policy/export", params);
    };
    PolicyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _download_service__WEBPACK_IMPORTED_MODULE_3__["DownloadService"]])
    ], PolicyService);
    return PolicyService;
}());



/***/ })

}]);
//# sourceMappingURL=policy-create-policy-create-module~policy-filter-policy-filter-module~policy-policy-module~quotation~55e30d2c.66bed676af203b266c47.js.map