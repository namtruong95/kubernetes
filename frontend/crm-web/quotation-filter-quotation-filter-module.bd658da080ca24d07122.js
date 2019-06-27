(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotation-filter-quotation-filter-module"],{

/***/ "./src/app/ssm/quotation/quotation-filter/quotation-filter.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-filter/quotation-filter.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form novalidate>\n  <div class=\"row mb-4 customer-form-content\">\n    <div class=\"col-md-12 form-group\">\n      <label for=\"SaleActivity\">Customer</label>\n      <ng-select\n        [items]=\"customers | async\"\n        class=\"text-left\"\n        [closeOnSelect]=\"true\"\n        [clearable]=\"true\"\n        [loading]=\"isLoadingCusotmer\"\n        placeholder=\"please select customer\"\n        [searchable]=\"true\"\n        name=\"customer\"\n        [(ngModel)]=\"filterTerm.customer\"\n        bindLabel=\"customerName\"\n        (change)=\"changeCustomer()\"\n        [typeahead]=\"customerInput$\">\n      </ng-select>\n    </div>\n\n    <div class=\"col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"typeOfService\">Service Term</label>\n        <ng-select\n          [items]=\"typeOfServices\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingTypeOfService\"\n          placeholder=\"please select service term\"\n          [searchable]=\"false\"\n          name=\"typeOfServices\"\n          [(ngModel)]=\"filterTerm.typeOfService\"\n          bindLabel=\"name\">\n        </ng-select>\n      </div>\n    </div>\n\n    <div class=\"col-12\">\n      <div class=\"form-group\">\n        <button type=\"button\" class=\"btn btn-primary\"\n          (click)=\"filterQuotation()\">\n          <i class=\"fa fa-search mr-2\"></i>\n          Filter\n        </button>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/ssm/quotation/quotation-filter/quotation-filter.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-filter/quotation-filter.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ssm/quotation/quotation-filter/quotation-filter.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-filter/quotation-filter.component.ts ***!
  \******************************************************************************/
/*! exports provided: QuotationFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationFilterComponent", function() { return QuotationFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var models_customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/customer */ "./src/models/customer.ts");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/observable/concat */ "./node_modules/rxjs/internal/observable/concat.js");
/* harmony import */ var rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/tap */ "./node_modules/rxjs/internal/operators/tap.js");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var shared_services_customer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/services/customer.service */ "./src/shared/services/customer.service.ts");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/services/customer-classification.service */ "./src/shared/services/customer-classification.service.ts");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var QuotationFilterComponent = /** @class */ (function () {
    function QuotationFilterComponent(_customerSv, _emitter, _notify, _customerClassificationSv) {
        this._customerSv = _customerSv;
        this._emitter = _emitter;
        this._notify = _notify;
        this._customerClassificationSv = _customerClassificationSv;
        this.filterTerm = {
            customer: null,
            typeOfService: null,
        };
        this.customers = Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        this.customerInput$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isLoadingCusotmer = false;
        // type of serivice
        this.isLoadingTypeOfService = false;
        this.typeOfServices = [];
    }
    QuotationFilterComponent.prototype.ngOnInit = function () {
        this._initSearchCustomers();
        this._getTypeOfServices();
    };
    QuotationFilterComponent.prototype._getTypeOfServices = function () {
        var _this = this;
        this.isLoadingTypeOfService = true;
        var params = {
            type: 'service-term',
        };
        this.typeOfServices = [];
        this._customerClassificationSv.getCustomerClassification(params).subscribe(function (res) {
            _this.isLoadingTypeOfService = false;
            _this.typeOfServices = res.customerClassifications;
        }, function (errors) {
            _this.isLoadingTypeOfService = false;
            _this._notify.error(errors);
        });
    };
    QuotationFilterComponent.prototype._initSearchCustomers = function () {
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
    QuotationFilterComponent.prototype._searchCustomers = function (customers) {
        var _this = this;
        this.customers = Object(rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_4__["concat"])(Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(customers), // default items
        this.customerInput$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () { return (_this.isLoadingCusotmer = true); }), Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (term) {
            return _this._customerSv
                .filterCustomers({
                page: 0,
                size: 100,
                sort: 'asc',
                column: 'id',
                txtSearch: term || '',
            })
                .map(function (res) { return res.customerList; })
                .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_11__["catchError"])(function () { return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }), // empty list on error
            Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () { return (_this.isLoadingCusotmer = false); }));
        })));
    };
    QuotationFilterComponent.prototype.filterQuotation = function () {
        var params = {};
        if (this.filterTerm.customer) {
            params.customerId = this.filterTerm.customer.id;
        }
        if (this.filterTerm.typeOfService) {
            params.typeOfServiceId = this.filterTerm.typeOfService.id;
        }
        this._emitter.publishData({
            type: constants_emitter__WEBPACK_IMPORTED_MODULE_14__["EMITTER_TYPE"].FILTER_QUOTATION,
            params: params,
        });
    };
    QuotationFilterComponent.prototype.changeCustomer = function () {
        this._emitter.publishData({
            type: constants_emitter__WEBPACK_IMPORTED_MODULE_14__["EMITTER_TYPE"].CHANGE_CUSTOMER_QUOTATION,
            data: this.filterTerm.customer instanceof models_customer__WEBPACK_IMPORTED_MODULE_1__["Customer"] ? this.filterTerm.customer.gmapToJSON() : null,
        });
    };
    QuotationFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quotation-filter',
            template: __webpack_require__(/*! ./quotation-filter.component.html */ "./src/app/ssm/quotation/quotation-filter/quotation-filter.component.html"),
            styles: [__webpack_require__(/*! ./quotation-filter.component.scss */ "./src/app/ssm/quotation/quotation-filter/quotation-filter.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_services_customer_service__WEBPACK_IMPORTED_MODULE_9__["CustomerService"],
            shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__["EventEmitterService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_12__["NotifyService"],
            shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_13__["CustomerClassificationService"]])
    ], QuotationFilterComponent);
    return QuotationFilterComponent;
}());



/***/ }),

/***/ "./src/app/ssm/quotation/quotation-filter/quotation-filter.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-filter/quotation-filter.module.ts ***!
  \***************************************************************************/
/*! exports provided: QuotationFilterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationFilterModule", function() { return QuotationFilterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _quotation_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quotation-filter.component */ "./src/app/ssm/quotation/quotation-filter/quotation-filter.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _quotation_filter_component__WEBPACK_IMPORTED_MODULE_2__["QuotationFilterComponent"],
    },
];
var QuotationFilterModule = /** @class */ (function () {
    function QuotationFilterModule() {
    }
    QuotationFilterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"]],
            declarations: [_quotation_filter_component__WEBPACK_IMPORTED_MODULE_2__["QuotationFilterComponent"]],
        })
    ], QuotationFilterModule);
    return QuotationFilterModule;
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



/***/ })

}]);
//# sourceMappingURL=quotation-filter-quotation-filter-module.bd658da080ca24d07122.js.map