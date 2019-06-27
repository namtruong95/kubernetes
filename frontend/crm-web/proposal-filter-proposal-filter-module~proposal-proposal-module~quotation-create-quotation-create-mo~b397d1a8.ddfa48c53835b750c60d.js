(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["proposal-filter-proposal-filter-module~proposal-proposal-module~quotation-create-quotation-create-mo~b397d1a8"],{

/***/ "./src/models/bts.ts":
/*!***************************!*\
  !*** ./src/models/bts.ts ***!
  \***************************/
/*! exports provided: Bts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bts", function() { return Bts; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ "./src/models/base.model.ts");
/* harmony import */ var _branch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./branch */ "./src/models/branch.ts");
/* harmony import */ var _district__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./district */ "./src/models/district.ts");
/* harmony import */ var _township__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./township */ "./src/models/township.ts");
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




var Bts = /** @class */ (function (_super) {
    __extends(Bts, _super);
    function Bts() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Bts.prototype, "branchName", {
        get: function () {
            return this.branch ? this.branch.name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bts.prototype, "districtName", {
        get: function () {
            return this.district ? this.district.name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bts.prototype, "townshipName", {
        get: function () {
            return this.township ? this.township.name : '';
        },
        enumerable: true,
        configurable: true
    });
    Bts.prototype.deserialize = function (input) {
        if (!input) {
            return;
        }
        _super.prototype.deserialize.call(this, input);
        Object.assign(this, input);
        this.branch = input.branch instanceof _branch__WEBPACK_IMPORTED_MODULE_1__["Branch"] ? input.branch : new _branch__WEBPACK_IMPORTED_MODULE_1__["Branch"]().deserialize(input.branch);
        this.district = input.district instanceof _district__WEBPACK_IMPORTED_MODULE_2__["District"] ? input.district : new _district__WEBPACK_IMPORTED_MODULE_2__["District"]().deserialize(input.district);
        this.township = input.township instanceof _township__WEBPACK_IMPORTED_MODULE_3__["Township"] ? input.township : new _township__WEBPACK_IMPORTED_MODULE_3__["Township"]().deserialize(input.township);
        return this;
    };
    Bts.prototype.toJSON = function () {
        return {
            siteCode: this.siteCode || null,
            address: this.address || null,
            latitude: this.latitude || null,
            longitude: this.longitude || null,
            branchId: this.branchId || null,
            districtId: this.districtId || null,
            townshipId: this.townshipId || null,
        };
    };
    Bts.prototype.markerToJSON = function () {
        return {
            label: this.address,
            lat: this.latitude,
            lng: this.longitude,
            iconUrl: 'https://png.icons8.com/nolan/30/000000/radio-tower.png',
        };
    };
    return Bts;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]));



/***/ }),

/***/ "./src/models/quotation.ts":
/*!*********************************!*\
  !*** ./src/models/quotation.ts ***!
  \*********************************/
/*! exports provided: Quotation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quotation", function() { return Quotation; });
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer */ "./src/models/customer.ts");
/* harmony import */ var _customer_classification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-classification */ "./src/models/customer-classification.ts");
/* harmony import */ var _bts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bts */ "./src/models/bts.ts");
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





var Quotation = /** @class */ (function (_super) {
    __extends(Quotation, _super);
    function Quotation() {
        var _this = _super.call(this) || this;
        _this._distance = 0;
        _this.customer = new _customer__WEBPACK_IMPORTED_MODULE_0__["Customer"]();
        _this.serviceTerm = new _customer_classification__WEBPACK_IMPORTED_MODULE_1__["CustomerClassification"]();
        _this.typeOfService = new _customer_classification__WEBPACK_IMPORTED_MODULE_1__["CustomerClassification"]();
        _this.bts = new _bts__WEBPACK_IMPORTED_MODULE_2__["Bts"]();
        _this.assignedStaff = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        return _this;
    }
    Object.defineProperty(Quotation.prototype, "customer", {
        get: function () {
            return this._customer;
        },
        set: function (v) {
            this._customer = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "customerName", {
        get: function () {
            return this.customer ? this.customer.customerName : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "typeOfService", {
        get: function () {
            return this._typeOfService;
        },
        set: function (v) {
            this._typeOfService = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "typeOfServiceName", {
        get: function () {
            return this.typeOfService ? this.typeOfService.name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "typeOfServiceValue", {
        get: function () {
            return +this.typeOfServiceName.split(' ')[0] || 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "bandWidth", {
        get: function () {
            return +this._bandWidth || 0;
        },
        set: function (v) {
            this._bandWidth = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "distance", {
        get: function () {
            return +this._distance || 0;
        },
        set: function (v) {
            this._distance = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "distance_km", {
        get: function () {
            return this.distance + " km";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "otc", {
        get: function () {
            return this._otc || '0';
        },
        set: function (v) {
            this._otc = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "otcNum", {
        get: function () {
            return this.otc.toNumber();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "mrc", {
        get: function () {
            return this._mrc || '0';
        },
        set: function (v) {
            this._mrc = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "mrcNum", {
        get: function () {
            return this.mrc.toNumber();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "totalPrice", {
        get: function () {
            return +this._totalPrice || 0;
        },
        set: function (v) {
            this._totalPrice = +v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "totalPrice_display", {
        get: function () {
            return this.totalPrice.round(10).format() + " MMK";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "reduceMrc", {
        get: function () {
            return +this._reduceMrc || 0;
        },
        set: function (v) {
            this._reduceMrc = +v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "realPrice", {
        get: function () {
            return +this._realPrice || 0;
        },
        set: function (v) {
            this._realPrice = +v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "realPrice_display", {
        get: function () {
            return this.realPrice.round(10).format() + " MMK";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "timeForHire", {
        get: function () {
            return +this._timeForHire || 0;
        },
        set: function (v) {
            this._timeForHire = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "timeForProvide", {
        get: function () {
            return +this._timeForProvide || 0;
        },
        set: function (v) {
            this._timeForProvide = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "reduceOtc", {
        get: function () {
            return +this._reduceOtc || 0;
        },
        set: function (v) {
            this._reduceOtc = +v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "staffName", {
        get: function () {
            return this.assignedStaff ? this.assignedStaff.fullName : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "serviceTerm", {
        get: function () {
            return this._serviceTerm;
        },
        set: function (v) {
            this._serviceTerm = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "serviceTermName", {
        get: function () {
            return this.serviceTerm ? this.serviceTerm.name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "canFilterPolicy", {
        get: function () {
            return !!this.distance && !!this.serviceTerm && !!this.typeOfService && !!this.bandWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "total", {
        get: function () {
            return (this.otc.toNumber() + this.typeOfServiceValue * this.mrc.toNumber()).round(10) || 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "totalStr", {
        get: function () {
            return this.total.format();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "otcTax", {
        get: function () {
            return (this.otc.toNumber() * (100 - this.reduceOtc)) / 100 || 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "mrcTax", {
        get: function () {
            return (this.mrc.toNumber() * (100 - this.reduceMrc)) / 100 || 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "totalTax", {
        get: function () {
            return (this.otcTax + this.mrcTax * this.typeOfServiceValue).round(10) || 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "totalTaxStr", {
        get: function () {
            return this.totalTax.format();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "bts", {
        get: function () {
            return this._bts;
        },
        set: function (v) {
            this._bts = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quotation.prototype, "markers", {
        get: function () {
            var markers = [];
            if (this.customer) {
                markers.push(this.customer.gmapToJSON());
            }
            if (this.bts) {
                markers.push(this.bts.markerToJSON());
            }
            return markers;
        },
        enumerable: true,
        configurable: true
    });
    Quotation.prototype.deserialize = function (input) {
        if (!input) {
            return;
        }
        _super.prototype.deserialize.call(this, input);
        Object.assign(this, input);
        this.otc = (+input.otc).format();
        this.mrc = (+input.mrc).format();
        this.assignedStaff =
            input.assignedStaff instanceof _user__WEBPACK_IMPORTED_MODULE_3__["User"] ? input.assignedStaff : new _user__WEBPACK_IMPORTED_MODULE_3__["User"]().deserialize(input.assignedStaff);
        this.customer = input.customer instanceof _customer__WEBPACK_IMPORTED_MODULE_0__["Customer"] ? input.customer : new _customer__WEBPACK_IMPORTED_MODULE_0__["Customer"]().deserialize(input.customer);
        this.typeOfService =
            input.typeOfService instanceof _customer_classification__WEBPACK_IMPORTED_MODULE_1__["CustomerClassification"]
                ? input.typeOfService
                : new _customer_classification__WEBPACK_IMPORTED_MODULE_1__["CustomerClassification"]().deserialize(input.typeOfService);
        this.serviceTerm =
            input.serviceTerm instanceof _customer_classification__WEBPACK_IMPORTED_MODULE_1__["CustomerClassification"]
                ? input.serviceTerm
                : new _customer_classification__WEBPACK_IMPORTED_MODULE_1__["CustomerClassification"]().deserialize(input.serviceTerm);
        this.bts = input.bts instanceof _bts__WEBPACK_IMPORTED_MODULE_2__["Bts"] ? input.bts : new _bts__WEBPACK_IMPORTED_MODULE_2__["Bts"]().deserialize(input.bts);
        return this;
    };
    Quotation.prototype.toJSON = function () {
        return {
            customerId: this.customer ? this.customer.id : null,
            typeOfServiceId: this.typeOfService ? this.typeOfService.id : null,
            serviceTermId: this.serviceTerm ? this.serviceTerm.id : null,
            bandWidth: this.bandWidth || null,
            distance: this.distance || null,
            otc: this.otc.toNumber() || 0,
            mrc: this.mrc.toNumber() || 0,
            totalPrice: this.total || null,
            reduceOtc: this.reduceOtc || null,
            reduceMrc: this.reduceMrc || null,
            realPrice: this.totalTax || null,
            timeForHire: this.timeForHire || null,
            timeForProvide: this.timeForProvide || null,
            staffId: this.assignedStaff ? this.assignedStaff.id : null,
            btsId: this.bts ? this.bts.id : null,
        };
    };
    Quotation.prototype.findPolicyToJSON = function () {
        return {
            distance: this.distance,
            bandWidth: this.bandWidth,
            serviceTermId: this.serviceTerm.id,
            typeOfServiceId: this.typeOfService.id,
        };
    };
    return Quotation;
}(_base_model__WEBPACK_IMPORTED_MODULE_4__["BaseModel"]));



/***/ })

}]);
//# sourceMappingURL=proposal-filter-proposal-filter-module~proposal-proposal-module~quotation-create-quotation-create-mo~b397d1a8.ddfa48c53835b750c60d.js.map