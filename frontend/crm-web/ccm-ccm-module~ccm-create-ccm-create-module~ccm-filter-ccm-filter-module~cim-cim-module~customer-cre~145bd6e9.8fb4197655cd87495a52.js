(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ccm-ccm-module~ccm-create-ccm-create-module~ccm-filter-ccm-filter-module~cim-cim-module~customer-cre~145bd6e9"],{

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

/***/ "./src/models/customer-classification.ts":
/*!***********************************************!*\
  !*** ./src/models/customer-classification.ts ***!
  \***********************************************/
/*! exports provided: CustomerClassification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerClassification", function() { return CustomerClassification; });
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

var CustomerClassification = /** @class */ (function (_super) {
    __extends(CustomerClassification, _super);
    function CustomerClassification() {
        return _super.call(this) || this;
    }
    Object.defineProperty(CustomerClassification.prototype, "name", {
        get: function () {
            return this._name || '';
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: true,
        configurable: true
    });
    CustomerClassification.prototype.deserialize = function (input) {
        if (!input) {
            return;
        }
        _super.prototype.deserialize.call(this, input);
        Object.assign(this, input);
        return this;
    };
    return CustomerClassification;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]));



/***/ }),

/***/ "./src/models/customer-type.ts":
/*!*************************************!*\
  !*** ./src/models/customer-type.ts ***!
  \*************************************/
/*! exports provided: CustomerType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerType", function() { return CustomerType; });
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

var CustomerType = /** @class */ (function (_super) {
    __extends(CustomerType, _super);
    function CustomerType() {
        return _super.call(this) || this;
    }
    CustomerType.prototype.deserialize = function (input) {
        if (!input) {
            return;
        }
        _super.prototype.deserialize.call(this, input);
        Object.assign(this, input);
        return this;
    };
    return CustomerType;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]));



/***/ }),

/***/ "./src/models/customer.ts":
/*!********************************!*\
  !*** ./src/models/customer.ts ***!
  \********************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony import */ var _customer_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-type */ "./src/models/customer-type.ts");
/* harmony import */ var _type_of_investment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-of-investment */ "./src/models/type-of-investment.ts");
/* harmony import */ var _customer_classification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-classification */ "./src/models/customer-classification.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./src/models/user.ts");
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.model */ "./src/models/base.model.ts");
/* harmony import */ var _branch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./branch */ "./src/models/branch.ts");
/* harmony import */ var _district__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./district */ "./src/models/district.ts");
/* harmony import */ var _township__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./township */ "./src/models/township.ts");
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









var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        var _this = _super.call(this) || this;
        _this.customerType = new _customer_type__WEBPACK_IMPORTED_MODULE_0__["CustomerType"]();
        _this.typeOfInvestment = new _type_of_investment__WEBPACK_IMPORTED_MODULE_1__["TypeOfInvestment"]();
        _this.typeOfSale = new _customer_classification__WEBPACK_IMPORTED_MODULE_2__["CustomerClassification"]();
        _this.customerDateBinding = new Date();
        _this.catalog = new _customer_classification__WEBPACK_IMPORTED_MODULE_2__["CustomerClassification"]();
        _this.assignedStaff = new _user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        _this.address = '';
        return _this;
    }
    Object.defineProperty(Customer.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (v) {
            this._address = (v || '').split(';')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "has_address", {
        get: function () {
            return !!this.address && !!this.latitude && !!this.longitude;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "address_display", {
        get: function () {
            var address = this.address;
            if (this.branch) {
                address += ", " + this.branch.name;
            }
            if (this.district) {
                address += ", " + this.district.name;
            }
            if (this.township) {
                address += ", " + this.township.name;
            }
            return address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "catalog", {
        get: function () {
            return this._catalog;
        },
        set: function (v) {
            this._catalog = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "catalogName", {
        get: function () {
            return this.catalog ? this.catalog.name : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "customerDateToJSON", {
        get: function () {
            return moment__WEBPACK_IMPORTED_MODULE_3__(this.customerDate).format('YYYY-MM-DD');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "customerDateBinding", {
        get: function () {
            return this._customerDateBinding;
        },
        set: function (v) {
            this._customerDateBinding = new Date(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "customerStatusString", {
        get: function () {
            return !!this.customerStatus ? 'Contacted' : 'Not Contacted';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "customerType", {
        get: function () {
            return this._customerType;
        },
        set: function (v) {
            this._customerType = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "typeOfInvestment", {
        get: function () {
            return this._typeOfInvestment;
        },
        set: function (v) {
            this._typeOfInvestment = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "typeOfInvestmentName", {
        get: function () {
            return this.typeOfInvestment ? this.typeOfInvestment.name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "typeOfSale", {
        get: function () {
            return this._typeOfSale;
        },
        set: function (v) {
            this._typeOfSale = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "typeOfSaleName", {
        get: function () {
            return this.typeOfSale ? this.typeOfSale.name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "assignedStaff", {
        get: function () {
            return this._assignedStaff;
        },
        set: function (v) {
            this._assignedStaff = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "userName", {
        get: function () {
            return this.assignedStaff ? this.assignedStaff.userName : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "fullName", {
        get: function () {
            return this.assignedStaff ? this.assignedStaff.fullName : null;
        },
        enumerable: true,
        configurable: true
    });
    Customer.prototype.deserialize = function (input) {
        if (!input) {
            return;
        }
        _super.prototype.deserialize.call(this, input);
        Object.assign(this, input);
        this.customerDateBinding = new Date(input.customerDate);
        this.typeOfInvestment =
            input.typeOfInvestment instanceof _type_of_investment__WEBPACK_IMPORTED_MODULE_1__["TypeOfInvestment"]
                ? input.typeOfInvestment
                : new _type_of_investment__WEBPACK_IMPORTED_MODULE_1__["TypeOfInvestment"]().deserialize(input.typeOfInvestment);
        this.typeOfSale =
            input.typeOfSale instanceof _customer_classification__WEBPACK_IMPORTED_MODULE_2__["CustomerClassification"]
                ? input.typeOfSale
                : new _customer_classification__WEBPACK_IMPORTED_MODULE_2__["CustomerClassification"]().deserialize(input.typeOfSale);
        this.catalog =
            input.catalog instanceof _customer_classification__WEBPACK_IMPORTED_MODULE_2__["CustomerClassification"]
                ? input.catalog
                : new _customer_classification__WEBPACK_IMPORTED_MODULE_2__["CustomerClassification"]().deserialize(input.catalog);
        this.customerType =
            input.customerType instanceof _customer_type__WEBPACK_IMPORTED_MODULE_0__["CustomerType"]
                ? input.customerType
                : new _customer_type__WEBPACK_IMPORTED_MODULE_0__["CustomerType"]().deserialize(input.customerType);
        this.assignedStaff =
            input.assignedStaff instanceof _user__WEBPACK_IMPORTED_MODULE_4__["User"] ? input.assignedStaff : new _user__WEBPACK_IMPORTED_MODULE_4__["User"]().deserialize(input.assignedStaff);
        this.branch = input.branch instanceof _branch__WEBPACK_IMPORTED_MODULE_6__["Branch"] ? input.branch : new _branch__WEBPACK_IMPORTED_MODULE_6__["Branch"]().deserialize(input.branch);
        this.district = input.district instanceof _district__WEBPACK_IMPORTED_MODULE_7__["District"] ? input.district : new _district__WEBPACK_IMPORTED_MODULE_7__["District"]().deserialize(input.district);
        this.township = input.township instanceof _township__WEBPACK_IMPORTED_MODULE_8__["Township"] ? input.township : new _township__WEBPACK_IMPORTED_MODULE_8__["Township"]().deserialize(input.township);
        return this;
    };
    Customer.prototype.setEmpty = function () {
        this.customerType = this.customerType && this.customerType.id ? this.customerType : null;
        this.typeOfSale = this.typeOfSale && this.typeOfSale.id ? this.typeOfSale : null;
        this.typeOfInvestment = this.typeOfInvestment && this.typeOfInvestment.id ? this.typeOfInvestment : null;
        this.catalog = this.catalog && this.catalog.id ? this.catalog : null;
        this.assignedStaff = this.assignedStaff && this.assignedStaff.id ? this.assignedStaff : null;
        this.customerDateBinding = this.customerDateBinding || new Date();
        this.assignedBranchId = this.assignedBranchId || null;
    };
    Customer.prototype.toJSON = function () {
        return {
            customerName: this.customerName ? this.customerName : null,
            customerTypeId: this.customerType ? this.customerType.id : null,
            typeOfInvestmentId: this.typeOfInvestment ? this.typeOfInvestment.id : null,
            customerStatus: this.customerStatus ? this.customerStatus : 0,
            customerDate: this.customerDateToJSON,
            catalogId: this.catalog ? this.catalog.id : null,
            address: this.address ? this.address : null,
            latitude: this.latitude,
            longitude: this.longitude,
            email: this.email ? this.email : null,
            phone: this.phone ? this.phone : null,
            position: this.position ? this.position : null,
            service: this.service ? this.service : null,
            typeOfSaleId: this.typeOfSale ? this.typeOfSale.id : null,
            contactName: this.contactName || null,
            assignedStaffId: this.assignedStaff ? this.assignedStaff.id : null,
            branchId: this.branchId || null,
            districtId: this.districtId || null,
            townshipId: this.townshipId || null,
            assignedBranchId: this.assignedBranchId || null,
        };
    };
    Customer.prototype.gmapToJSON = function () {
        return {
            id: this.id,
            lat: this.latitude,
            lng: this.longitude,
            label: this.address,
            iconUrl: 'https://png.icons8.com/office/30/000000/administrator-male.png',
        };
    };
    return Customer;
}(_base_model__WEBPACK_IMPORTED_MODULE_5__["BaseModel"]));



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

/***/ "./src/models/type-of-investment.ts":
/*!******************************************!*\
  !*** ./src/models/type-of-investment.ts ***!
  \******************************************/
/*! exports provided: TypeOfInvestment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfInvestment", function() { return TypeOfInvestment; });
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

var TypeOfInvestment = /** @class */ (function (_super) {
    __extends(TypeOfInvestment, _super);
    function TypeOfInvestment() {
        return _super.call(this) || this;
    }
    TypeOfInvestment.prototype.deserialize = function (input) {
        if (!input) {
            return;
        }
        _super.prototype.deserialize.call(this, input);
        Object.assign(this, input);
        return this;
    };
    return TypeOfInvestment;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]));



/***/ })

}]);
//# sourceMappingURL=ccm-ccm-module~ccm-create-ccm-create-module~ccm-filter-ccm-filter-module~cim-cim-module~customer-cre~145bd6e9.8fb4197655cd87495a52.js.map