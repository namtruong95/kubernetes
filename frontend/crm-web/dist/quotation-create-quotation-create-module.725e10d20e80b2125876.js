(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotation-create-quotation-create-module"],{

/***/ "./src/app/ssm/quotation/quotation-create/quotation-create.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-create/quotation-create.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #QuotationForm=\"ngForm\" novalidate>\n  <div class=\"customer-form-content mb-4\">\n    <!-- border-bottom border-dark -->\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"SaleActivity\">Customer Name <i class=\"required\">&#40;*&#41;</i></label>\n        <ng-select\n          [items]=\"customers | async\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingCusotmer\"\n          placeholder=\"please select customer\"\n          [searchable]=\"true\"\n          name=\"customer\"\n          [(ngModel)]=\"quotation.customer\"\n          bindLabel=\"customerName\"\n          [typeahead]=\"customerInput$\"\n          (change)=\"changeCusotmer()\"\n          required>\n        </ng-select>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"typeOfService\">Service Term <i class=\"required\">&#40;*&#41;</i></label>\n        <ng-select\n          [items]=\"typeOfServices\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingTypeOfService\"\n          placeholder=\"please select service term\"\n          [searchable]=\"false\"\n          name=\"typeOfServices\"\n          [(ngModel)]=\"quotation.typeOfService\"\n          (change)=\"filterPolicies()\"\n          bindLabel=\"name\"\n          required>\n        </ng-select>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"serviceTerm\">Type Of Service <i class=\"required\">&#40;*&#41;</i></label>\n          <ng-select\n            [items]=\"serviceTerms\"\n            class=\"text-left\"\n            [closeOnSelect]=\"true\"\n            [clearable]=\"true\"\n            [loading]=\"isLoadingServiceTerm\"\n            placeholder=\"please select type of service\"\n            [searchable]=\"false\"\n            name=\"serviceTerm\"\n            [(ngModel)]=\"quotation.serviceTerm\"\n            (change)=\"filterPolicies()\"\n            bindLabel=\"name\"\n            required>\n          </ng-select>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"bandWidth\">Bandwidth (Mbps) <i class=\"required\">&#40;*&#41;</i></label>\n        <input type=\"text\" id=\"bandWidth\"\n          autocomplete=\"new-bandWidth\"\n          class=\"form-control\"\n          name=\"bandWidth\"\n          appNumbericValidator\n          placeholder=\"please enter band width\"\n          (keydown.enter)=\"filterPolicies()\"\n          (blur)=\"filterPolicies()\"\n          [(ngModel)]=\"quotation.bandWidth\"\n          required>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"otc\">OTC (MMK) <i class=\"required\">&#40;*&#41;</i></label>\n        <input type=\"text\" id=\"otc\"\n          autocomplete=\"new-otc\"\n          class=\"form-control\"\n          name=\"otc\"\n          #OTC\n          placeholder=\"please enter otc site\"\n          [ngModel]=\"quotation.otc\"\n          (ngModelChange)=\"changeOtc()\"\n          required>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"mrc\">MRC (MMK) <i class=\"required\">&#40;*&#41;</i>\n          {{ minMaxMrc }}\n        </label>\n        <input type=\"text\" id=\"mrc\"\n          autocomplete=\"new-mrc\"\n          class=\"form-control\"\n          name=\"mrc\"\n          #MRC\n          placeholder=\"please enter mrc\"\n          [ngModel]=\"quotation.mrc\"\n          (ngModelChange)=\"changeMrc()\"\n          required>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"reduceOtc\">Reduce OTC (%) <i class=\"required\">&#40;*&#41;</i></label>\n        <input type=\"text\" id=\"reduceOtc\"\n          autocomplete=\"new-reduceOtc\"\n          class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': ReduceOTC1.dirty && ReduceOTC1.errors }\"\n          name=\"reduceOtc\"\n          appNumbericValidator\n          min=\"0\"\n          max=\"100\"\n          placeholder=\"please enter reduce OTC\"\n          #ReduceOTC\n          #ReduceOTC1=\"ngModel\"\n          [(ngModel)]=\"quotation.reduceOtc\"\n          required>\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"ReduceOTC1.dirty && ReduceOTC1.errors?.appNumbericValidator\">Reduce OTC operation must be an integer within 0 and 100</div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"reduceMrc\">Reduce MRC (%) <i class=\"required\">&#40;*&#41;</i></label>\n        <input type=\"text\" id=\"reduceMrc\"\n          autocomplete=\"new-reduceMrc\"\n          class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': ReduceMRC1.dirty && ReduceMRC1.errors }\"\n          name=\"reduceMrc\"\n          appNumbericValidator\n          max=\"100\"\n          min=\"0\"\n          #ReduceMRC\n          #ReduceMRC1=\"ngModel\"\n          placeholder=\"please enter reduce MRC\"\n          [(ngModel)]=\"quotation.reduceMrc\"\n          required>\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"ReduceMRC1.dirty && ReduceMRC1.errors?.appNumbericValidator\">Reduce MRC operation must be an integer within 0 and 100</div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"timeForHire\">Time For Hire (months)</label>\n        <input type=\"text\" id=\"timeForHire\"\n          autocomplete=\"new-timeForHire\"\n          class=\"form-control\"\n          name=\"timeForHire\"\n          appNumbericValidator\n          min=\"0\"\n          placeholder=\"please enter time for hire\"\n          [(ngModel)]=\"quotation.timeForHire\">\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"saleStaff\">Sale Staff</label>\n          <ng-select\n            [items]=\"staffs\"\n            class=\"text-left\"\n            [closeOnSelect]=\"true\"\n            [clearable]=\"true\"\n            [loading]=\"isLoadingStaff\"\n            placeholder=\"please select  sale staff\"\n            [searchable]=\"true\"\n            name=\"staff\"\n            [(ngModel)]=\"quotation.assignedStaff\"\n            bindLabel=\"code_full_name\">\n          </ng-select>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"timeForProvide\">Time For Provide (days)</label>\n        <input type=\"text\" id=\"timeForProvide\"\n          autocomplete=\"new-timeForProvide\"\n          class=\"form-control\"\n          name=\"timeForProvide\"\n          appNumbericValidator\n          min=\"0\"\n          placeholder=\"please enter time for provide\"\n          [(ngModel)]=\"quotation.timeForProvide\">\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label>distance (km)</label>\n        <input type=\"text\"\n          class=\"form-control-plaintext\"\n          name=\"distance\"\n          readonly\n          [ngModel]=\"quotation.distance_km\">\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"totalPrice\">Total Price (MMK)</label>\n        <input type=\"text\" id=\"totalPrice\"\n          autocomplete=\"new-totalPrice\"\n          class=\"form-control-plaintext\"\n          name=\"totalPrice\"\n          readonly\n          placeholder=\"please enter total rrice\"\n          [ngModel]=\"quotation.totalStr\">\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"realPrice\">Real Price (MMK)</label>\n        <input type=\"text\" id=\"realPrice\"\n          autocomplete=\"new-realPrice\"\n          class=\"form-control-plaintext\"\n          name=\"realPrice\"\n          readonly\n          [ngModel]=\"quotation.totalTaxStr\">\n      </div>\n    </div>\n\n    <!-- <div class=\"row\">\n      <label class=\"col text-right my-2\">Total Price</label>\n      <input type=\"text\"\n        class=\"col form-control-plaintext\"\n        name=\"totalPrice\"\n        readonly\n        [ngModel]=\"quotation.totalPrice_display\">\n    </div> -->\n\n    <!-- <div class=\"row\">\n      <label class=\"col text-right my-2\">Taxes</label>\n      <input type=\"text\"\n        class=\"col form-control-plaintext\"\n        name=\"reduce\"\n        readonly\n        [ngModel]=\"quotation.reduceMrc + '%'\">\n    </div> -->\n\n    <!-- <div class=\"row\">\n      <label class=\"col text-right my-2\">Real Price</label>\n      <input type=\"text\"\n        class=\"col form-control-plaintext\"\n        name=\"realPrice\"\n        readonly\n        [ngModel]=\"quotation.realPrice_display\">\n    </div> -->\n  </div>\n\n  <div class=\"form-group\">\n    <button type=\"button\" class=\"btn btn-primary\"\n      (click)=\"createQuotation(QuotationForm)\"\n      [disabled]=\"isLoading || QuotationForm.form.invalid\">\n      Create\n      <i *ngIf=\"isLoading\" class=\"fa fa-refresh fa-spin\"></i>\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/ssm/quotation/quotation-create/quotation-create.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-create/quotation-create.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ssm/quotation/quotation-create/quotation-create.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-create/quotation-create.component.ts ***!
  \******************************************************************************/
/*! exports provided: QuotationCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationCreateComponent", function() { return QuotationCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/concat */ "./node_modules/rxjs/internal/observable/concat.js");
/* harmony import */ var rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/tap */ "./node_modules/rxjs/internal/operators/tap.js");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var shared_services_customer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/services/customer.service */ "./src/shared/services/customer.service.ts");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
/* harmony import */ var models_quotation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! models/quotation */ "./src/models/quotation.ts");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var shared_services_gmap_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! shared/services/gmap.service */ "./src/shared/services/gmap.service.ts");
/* harmony import */ var shared_helpers_helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! shared/helpers/helpers */ "./src/shared/helpers/helpers.ts");
/* harmony import */ var shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! shared/services/customer-classification.service */ "./src/shared/services/customer-classification.service.ts");
/* harmony import */ var shared_services_bts_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! shared/services/bts.service */ "./src/shared/services/bts.service.ts");
/* harmony import */ var models_bts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! models/bts */ "./src/models/bts.ts");
/* harmony import */ var shared_services_quotation_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! shared/services/quotation.service */ "./src/shared/services/quotation.service.ts");
/* harmony import */ var shared_services_policy_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! shared/services/policy.service */ "./src/shared/services/policy.service.ts");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
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






















var QuotationCreateComponent = /** @class */ (function () {
    function QuotationCreateComponent(_customerSv, _emitter, _gmapSv, _notify, _customerClassificationSv, _btsSv, _quotationSv, _policySv, _userSv) {
        this._customerSv = _customerSv;
        this._emitter = _emitter;
        this._gmapSv = _gmapSv;
        this._notify = _notify;
        this._customerClassificationSv = _customerClassificationSv;
        this._btsSv = _btsSv;
        this._quotationSv = _quotationSv;
        this._policySv = _policySv;
        this._userSv = _userSv;
        this.customers = Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        this.customerInput$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isLoadingCusotmer = false;
        this.quotation = new models_quotation__WEBPACK_IMPORTED_MODULE_12__["Quotation"]();
        // type of serivice
        this.isLoadingTypeOfService = false;
        this.typeOfServices = [];
        // service term
        this.isLoadingServiceTerm = false;
        this.serviceTerms = [];
        // sale staffs
        this.staffs = [];
        this.isLoadingStaff = false;
        this.isLoadingBts = false;
        this.btsList = [];
        this.isLoading = false;
    }
    Object.defineProperty(QuotationCreateComponent.prototype, "btsMakers", {
        get: function () {
            return this.btsList.map(function (bts) {
                return bts.markerToJSON();
            });
        },
        enumerable: true,
        configurable: true
    });
    QuotationCreateComponent.prototype.ngOnInit = function () {
        this.quotation.customer = null;
        this.quotation.serviceTerm = null;
        this.quotation.typeOfService = null;
        this.quotation.assignedStaff = null;
        this._initSearchCustomers();
        this._getServicesterm();
        this._getTypeOfServices();
        this._getAllBts();
        this._getStaffs();
    };
    QuotationCreateComponent.prototype._getStaffs = function () {
        var _this = this;
        this.isLoadingStaff = true;
        this._userSv.getAllUsers().subscribe(function (res) {
            _this.staffs = res;
            _this.isLoadingStaff = false;
        }, function (errors) {
            _this.isLoadingStaff = false;
            _this._notify.error(errors);
        });
    };
    QuotationCreateComponent.prototype._getAllBts = function () {
        var _this = this;
        this.isLoadingBts = true;
        this._btsSv.getAllBts().subscribe(function (res) {
            _this.btsList = res.btsList;
            _this.isLoadingBts = false;
        }, function (errors) {
            _this._notify.error(errors);
            _this.isLoadingBts = false;
        });
    };
    QuotationCreateComponent.prototype._getServicesterm = function () {
        var _this = this;
        this.isLoadingServiceTerm = true;
        var params = {
            type: 'service',
        };
        this.serviceTerms = [];
        this._customerClassificationSv.getCustomerClassification(params).subscribe(function (res) {
            _this.isLoadingServiceTerm = false;
            _this.serviceTerms = res.customerClassifications;
        }, function (errors) {
            _this.isLoadingServiceTerm = false;
            _this._notify.error(errors);
        });
    };
    QuotationCreateComponent.prototype._getTypeOfServices = function () {
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
    QuotationCreateComponent.prototype._initSearchCustomers = function () {
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
    QuotationCreateComponent.prototype._searchCustomers = function (customers) {
        var _this = this;
        this.customers = Object(rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_3__["concat"])(Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(customers), // default items
        this.customerInput$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return (_this.isLoadingCusotmer = true); }), Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (term) {
            return _this._customerSv
                .filterCustomers({
                page: 0,
                size: 100,
                sort: 'asc',
                column: 'id',
                txtSearch: term || '',
            })
                .map(function (res) { return res.customerList; })
                .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function () { return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }), // empty list on error
            Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return (_this.isLoadingCusotmer = false); }));
        })));
    };
    QuotationCreateComponent.prototype.createQuotation = function (form) {
        var _this = this;
        this.isLoading = true;
        this._quotationSv.createQuotation(this.quotation.toJSON()).subscribe(function (res) {
            _this.isLoading = false;
            _this._notify.success('create quotation success');
            _this._emitter.publishData({
                type: constants_emitter__WEBPACK_IMPORTED_MODULE_11__["EMITTER_TYPE"].CREATE_QUOTATION,
            });
            form.form.markAsPristine({ onlySelf: false });
        }, function (errors) {
            _this.isLoading = false;
            _this._notify.error(errors);
        }, function () {
            setTimeout(function () {
                _this.quotation = new models_quotation__WEBPACK_IMPORTED_MODULE_12__["Quotation"]();
                _this.quotation.customer = null;
                _this.quotation.serviceTerm = null;
                _this.quotation.typeOfService = null;
                _this.quotation.assignedStaff = null;
            }, 0);
        });
    };
    QuotationCreateComponent.prototype.changeCusotmer = function () {
        var _this = this;
        if (!this.quotation.customer || !this.quotation.customer.has_address) {
            this._notify.warning('please select customer or change location for cusotmer');
            return;
        }
        if (this.quotation.customer.assignedStaff) {
            this.quotation.assignedStaff = this.quotation.customer.assignedStaff;
        }
        if (this.btsList.length === 0) {
            this._notify.warning('bts not found');
            return;
        }
        var params = {
            origins: [shared_helpers_helpers__WEBPACK_IMPORTED_MODULE_15__["Helpers"].origins(this.quotation.customer.gmapToJSON())],
            destinations: shared_helpers_helpers__WEBPACK_IMPORTED_MODULE_15__["Helpers"].destinations(this.btsMakers),
        };
        this._gmapSv.matrixDistance(params, function (res, status) {
            if (status === 'OK') {
                var min_1 = null;
                if (res.rows.length > 0) {
                    res.rows[0].elements.forEach(function (value, key) {
                        if (value.status === 'OK' && (!min_1 || value.distance.value < min_1.value)) {
                            min_1 = __assign({}, value.distance, { key: key });
                        }
                    });
                }
                if (min_1) {
                    _this.quotation.distance = Math.round((min_1.value / 1000) * 10) / 10;
                    _this._emitter.publishData({
                        type: constants_emitter__WEBPACK_IMPORTED_MODULE_11__["EMITTER_TYPE"].GMAP_DISTANCE,
                        mode: 'create',
                        data: [
                            __assign({}, _this.quotation.customer.gmapToJSON(), { label: _this.quotation.customer.address, iconUrl: 'https://png.icons8.com/office/30/000000/administrator-male.png' }),
                            _this.btsList[min_1.key].markerToJSON(),
                        ],
                    });
                    _this.quotation.bts = _this.btsList[min_1.key];
                }
                else {
                    _this._notify.warning('data not found');
                    _this.quotation.distance = 0;
                    _this._emitter.publishData({
                        type: constants_emitter__WEBPACK_IMPORTED_MODULE_11__["EMITTER_TYPE"].GMAP_DISTANCE,
                        mode: 'create',
                        data: [],
                    });
                    _this.quotation.bts = new models_bts__WEBPACK_IMPORTED_MODULE_18__["Bts"]();
                }
                setTimeout(function () {
                    _this.filterPolicies();
                }, 0);
            }
        });
    };
    QuotationCreateComponent.prototype.filterPolicies = function () {
        var _this = this;
        if (!this.quotation.canFilterPolicy) {
            return;
        }
        this._policySv.findPolicy(this.quotation.findPolicyToJSON()).subscribe(function (res) {
            if (res) {
                _this.quotation.mrc = (+res.mrcMin).format();
                _this.quotation.otc = (+res.otc).format();
                _this.minMaxMrc = "(min=" + (+res.mrcMin).format() + "; max=" + (+res.mrcMax).format() + ")";
            }
            else {
                _this.minMaxMrc = '';
            }
        }, function (errors) {
            _this._notify.error(errors);
        });
    };
    // public changeReduceOtc(event) {
    //   if (event > 100) {
    //     this.quotation.reduceOtc = 100;
    //     this.ReduceOTC.nativeElement.value = this.quotation.reduceOtc;
    //     return;
    //   }
    //   if (event < 0) {
    //     this.quotation.reduceOtc = 0;
    //     this.ReduceOTC.nativeElement.value = this.quotation.reduceOtc;
    //     return;
    //   }
    //   this.quotation.reduceOtc = event;
    // }
    // public changeReduceMrc(event) {
    //   if (event > 100) {
    //     this.quotation.reduceMrc = 100;
    //     this.ReduceMRC.nativeElement.value = this.quotation.reduceMrc;
    //     return;
    //   }
    //   if (event < 0) {
    //     this.quotation.reduceMrc = 0;
    //     this.ReduceMRC.nativeElement.value = this.quotation.reduceMrc;
    //     return;
    //   }
    //   this.quotation.reduceMrc = event;
    // }
    QuotationCreateComponent.prototype.changeOtc = function () {
        if (isNaN(this.OTC.nativeElement.value.toNumber()) || this.OTC.nativeElement.value.toNumber() < 0) {
            this.OTC.nativeElement.value = this.quotation.otc;
            return;
        }
        this.quotation.otc = this.OTC.nativeElement.value.toNumber().format();
    };
    QuotationCreateComponent.prototype.changeMrc = function () {
        if (isNaN(this.MRC.nativeElement.value.toNumber()) || this.MRC.nativeElement.value.toNumber() < 0) {
            this.MRC.nativeElement.value = this.quotation.mrc;
            return;
        }
        this.quotation.mrc = this.MRC.nativeElement.value.toNumber().format();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ReduceMRC'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], QuotationCreateComponent.prototype, "ReduceMRC", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ReduceOTC'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], QuotationCreateComponent.prototype, "ReduceOTC", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('OTC'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], QuotationCreateComponent.prototype, "OTC", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MRC'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], QuotationCreateComponent.prototype, "MRC", void 0);
    QuotationCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quotation-create',
            template: __webpack_require__(/*! ./quotation-create.component.html */ "./src/app/ssm/quotation/quotation-create/quotation-create.component.html"),
            styles: [__webpack_require__(/*! ./quotation-create.component.scss */ "./src/app/ssm/quotation/quotation-create/quotation-create.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_services_customer_service__WEBPACK_IMPORTED_MODULE_9__["CustomerService"],
            shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__["EventEmitterService"],
            shared_services_gmap_service__WEBPACK_IMPORTED_MODULE_14__["GmapService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_13__["NotifyService"],
            shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_16__["CustomerClassificationService"],
            shared_services_bts_service__WEBPACK_IMPORTED_MODULE_17__["BtsService"],
            shared_services_quotation_service__WEBPACK_IMPORTED_MODULE_19__["QuotationService"],
            shared_services_policy_service__WEBPACK_IMPORTED_MODULE_20__["PolicyService"],
            shared_services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"]])
    ], QuotationCreateComponent);
    return QuotationCreateComponent;
}());



/***/ }),

/***/ "./src/app/ssm/quotation/quotation-create/quotation-create.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-create/quotation-create.module.ts ***!
  \***************************************************************************/
/*! exports provided: QuotationCreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationCreateModule", function() { return QuotationCreateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _quotation_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quotation-create.component */ "./src/app/ssm/quotation/quotation-create/quotation-create.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var shared_services_bts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/services/bts.service */ "./src/shared/services/bts.service.ts");
/* harmony import */ var shared_services_policy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/services/policy.service */ "./src/shared/services/policy.service.ts");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
/* harmony import */ var shared_validators_numberic_validator_numberic_validator_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/validators/numberic-validator/numberic-validator.module */ "./src/shared/validators/numberic-validator/numberic-validator.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _quotation_create_component__WEBPACK_IMPORTED_MODULE_2__["QuotationCreateComponent"],
    },
];
var QuotationCreateModule = /** @class */ (function () {
    function QuotationCreateModule() {
    }
    QuotationCreateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], shared_validators_numberic_validator_numberic_validator_module__WEBPACK_IMPORTED_MODULE_9__["NumbericValidatorModule"]],
            declarations: [_quotation_create_component__WEBPACK_IMPORTED_MODULE_2__["QuotationCreateComponent"]],
            providers: [shared_services_bts_service__WEBPACK_IMPORTED_MODULE_6__["BtsService"], shared_services_policy_service__WEBPACK_IMPORTED_MODULE_7__["PolicyService"], shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]],
        })
    ], QuotationCreateModule);
    return QuotationCreateModule;
}());



/***/ })

}]);
//# sourceMappingURL=quotation-create-quotation-create-module.725e10d20e80b2125876.js.map