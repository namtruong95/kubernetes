(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cim-cim-module"],{

/***/ "./src/app/cim/cim.component.html":
/*!****************************************!*\
  !*** ./src/app/cim/cim.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav nav-tabs cim-tabs mb-4\">\n  <a class=\"nav-item nav-link\" [routerLink]=\"['/cim/customer', 'filters']\" routerLinkActive=\"active\">Customer Information</a>\n  <a class=\"nav-item nav-link\" [routerLink]=\"['/cim/customer', 'create']\" routerLinkActive=\"active\">Customer Create</a>\n</nav>\n\n<div class=\"row m-0\">\n  <div class=\"col-lg-6 col-md-12\">\n    <router-outlet></router-outlet>\n  </div>\n\n  <div class=\"col-lg-6 col-md-12 gmap\">\n    <app-customer-map mode=\"create\"></app-customer-map>\n  </div>\n</div>\n\n<div>\n  <app-customer-list></app-customer-list>\n</div>\n"

/***/ }),

/***/ "./src/app/cim/cim.component.scss":
/*!****************************************!*\
  !*** ./src/app/cim/cim.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 991.98px) {\n  .col-md-12.gmap {\n    margin-top: 20px;\n    padding: 0; } }\n"

/***/ }),

/***/ "./src/app/cim/cim.component.ts":
/*!**************************************!*\
  !*** ./src/app/cim/cim.component.ts ***!
  \**************************************/
/*! exports provided: CimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CimComponent", function() { return CimComponent; });
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

var CimComponent = /** @class */ (function () {
    function CimComponent() {
    }
    CimComponent.prototype.ngOnInit = function () { };
    CimComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cim',
            template: __webpack_require__(/*! ./cim.component.html */ "./src/app/cim/cim.component.html"),
            styles: [__webpack_require__(/*! ./cim.component.scss */ "./src/app/cim/cim.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], CimComponent);
    return CimComponent;
}());



/***/ }),

/***/ "./src/app/cim/cim.module.ts":
/*!***********************************!*\
  !*** ./src/app/cim/cim.module.ts ***!
  \***********************************/
/*! exports provided: CimModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CimModule", function() { return CimModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cim_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cim.component */ "./src/app/cim/cim.component.ts");
/* harmony import */ var _customer_map_customer_map_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-map/customer-map.module */ "./src/app/cim/customer-map/customer-map.module.ts");
/* harmony import */ var _customer_list_customer_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-list/customer-list.module */ "./src/app/cim/customer-list/customer-list.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cim_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cim.service */ "./src/app/cim/cim.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'customer',
        component: _cim_component__WEBPACK_IMPORTED_MODULE_2__["CimComponent"],
        children: [
            {
                path: 'filters',
                loadChildren: './customer-filter/customer-filter.module#CustomerFilterModule',
            },
            {
                path: 'create',
                loadChildren: './customer-create/customer-create.module#CustomerCreateModule',
            },
            {
                path: '',
                redirectTo: 'filters',
                pathMatch: 'full',
            },
        ],
    },
];
var CimModule = /** @class */ (function () {
    function CimModule() {
    }
    CimModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes), _customer_map_customer_map_module__WEBPACK_IMPORTED_MODULE_3__["CustomerMapModule"], _customer_list_customer_list_module__WEBPACK_IMPORTED_MODULE_4__["CustomerListModule"]],
            declarations: [_cim_component__WEBPACK_IMPORTED_MODULE_2__["CimComponent"]],
            providers: [_cim_service__WEBPACK_IMPORTED_MODULE_6__["CimService"]],
        })
    ], CimModule);
    return CimModule;
}());



/***/ }),

/***/ "./src/app/cim/customer-list/customer-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/cim/customer-list/customer-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive py-4\">\n  <span>Showing {{ query.from }} to {{ query.to }} of {{ query.totalElements }} entries</span>\n  <table class=\"table customer-table\">\n    <thead>\n      <tr>\n        <th>Action</th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('customerName')\">\n          Customer Name\n          <i class=\"fa {{ getClassOrder('customerName') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('address_display')\">\n          Address\n          <i class=\"fa {{ getClassOrder('address_display') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('userName')\">\n          Assigned Staff\n          <i class=\"fa {{ getClassOrder('userName') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('fullName')\">\n          Full Name\n          <i class=\"fa {{ getClassOrder('fullName') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('catalogName')\">\n          Catalog\n          <i class=\"fa {{ getClassOrder('catalogName') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('customerStatusString')\">\n          Status\n          <i class=\"fa {{ getClassOrder('customerStatusString') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('contactName')\">\n          Contact Name\n          <i class=\"fa {{ getClassOrder('contactName') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('phone')\">\n          Phone\n          <i class=\"fa {{ getClassOrder('phone') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('typeOfInvestmentName')\">\n          Type of investment\n          <i class=\"fa {{ getClassOrder('typeOfInvestmentName') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('typeOfSaleName')\">\n          Type of Sale\n          <i class=\"fa {{ getClassOrder('typeOfSaleName') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('email')\">\n          Email\n          <i class=\"fa {{ getClassOrder('email') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('position')\">\n          Position\n          <i class=\"fa {{ getClassOrder('position') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('service')\">\n          Service\n          <i class=\"fa {{ getClassOrder('service') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('customerDateFormat')\">\n          Date\n          <i class=\"fa {{ getClassOrder('customerDateFormat') }}\"></i>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let customer of customerList;\">\n        <td>\n          <button type=\"button\" class=\"mr-1 btn btn-success\" (click)=\"assignedFotStaff(customer)\"><i class=\"fa fa-user-plus\"></i></button>\n          <button type=\"button\" class=\"mr-1 btn btn-info\" (click)=\"editCustomer(customer)\"><i class=\"fa fa-edit\"></i></button>\n          <button type=\"button\" class=\"mr-1 btn btn-danger\" (click)=\"removeCustomer(customer)\"><i class=\"fa fa-trash\"></i></button>\n        </td>\n        <td>{{ customer.customerName }}</td>\n        <td>{{ customer.address_display }}</td>\n        <td>{{ customer.userName }}</td>\n        <td>{{ customer.fullName }}</td>\n        <td>{{ customer.catalogName }}</td>\n        <td>{{ customer.customerStatusString }}</td>\n        <td>{{ customer.contactName }}</td>\n        <td>{{ customer.phone }}</td>\n        <td>{{ customer.typeOfInvestmentName }}</td>\n        <td>{{ customer.typeOfSaleName }}</td>\n        <td>{{ customer.email }}</td>\n        <td>{{ customer.position }}</td>\n        <td>{{ customer.service }}</td>\n        <td>{{ customer.customerDateFormat }}</td>\n      </tr>\n      <tr [ngClass]=\"{ 'hidden': customerList.length > 0 }\">\n        <td colspan=\"13\" class=\"text-center\">\n          Data not found\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"pagination mt-4\" [ngClass]=\"{ 'hidden': customerList.length === 0 }\">\n  <pagination\n    class=\"pagination-md\"\n    [totalItems]=\"query.totalElements\"\n    [(ngModel)]=\"query.currentPage\"\n    pageBtnClass=\"btn\"\n    [itemsPerPage]=\"query.size\"\n    [maxSize]=\"5\"\n    (pageChanged)=\"pageChanged($event)\"\n    previousText=\"&lsaquo;\"\n    nextText=\"&rsaquo;\"\n    firstText=\"&laquo;\"\n    lastText=\"&raquo;\">\n  </pagination>\n</div>\n"

/***/ }),

/***/ "./src/app/cim/customer-list/customer-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/cim/customer-list/customer-list.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customer-table.table thead th,\n.customer-table.table tbody td {\n  min-width: 200px; }\n  .customer-table.table thead th:first-child,\n  .customer-table.table tbody td:first-child {\n    max-width: 150px; }\n"

/***/ }),

/***/ "./src/app/cim/customer-list/customer-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/cim/customer-list/customer-list.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/customer.service */ "./src/shared/services/customer.service.ts");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var shared_utils_query_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/utils/query-builder */ "./src/shared/utils/query-builder.ts");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _customer_modal_delete_customer_modal_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../customer-modal-delete/customer-modal-delete.component */ "./src/app/cim/customer-modal-delete/customer-modal-delete.component.ts");
/* harmony import */ var _customer_modal_edit_customer_modal_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../customer-modal-edit/customer-modal-edit.component */ "./src/app/cim/customer-modal-edit/customer-modal-edit.component.ts");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/clone */ "./node_modules/lodash/clone.js");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_clone__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/orderBy */ "./node_modules/lodash/orderBy.js");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _cim_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cim.service */ "./src/app/cim/cim.service.ts");
/* harmony import */ var _customer_modal_assign_customer_modal_assign_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../customer-modal-assign/customer-modal-assign.component */ "./src/app/cim/customer-modal-assign/customer-modal-assign.component.ts");
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













var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(_customerSv, _notify, _emitter, _modalService, _cimSv) {
        this._customerSv = _customerSv;
        this._notify = _notify;
        this._emitter = _emitter;
        this._modalService = _modalService;
        this._cimSv = _cimSv;
        this.isLoading = false;
        this.query = new shared_utils_query_builder__WEBPACK_IMPORTED_MODULE_3__["QueryBuilder"]();
        this.customerList = [];
        this._filterQuery = {};
        this._orderArr = [];
    }
    Object.defineProperty(CustomerListComponent.prototype, "orderColumnName", {
        get: function () {
            return this._orderArr.map(function (item) {
                return item.columnName;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerListComponent.prototype, "orderType", {
        get: function () {
            return this._orderArr.map(function (item) {
                return item.type;
            });
        },
        enumerable: true,
        configurable: true
    });
    CustomerListComponent.prototype.ngOnInit = function () {
        this._filterCustomers();
        this._onEventEmitter();
    };
    CustomerListComponent.prototype.ngOnDestroy = function () {
        this._subscriber.unsubscribe();
    };
    CustomerListComponent.prototype._onEventEmitter = function () {
        var _this = this;
        this._subscriber = this._emitter.caseNumber$.subscribe(function (data) {
            if (data && data.type === constants_emitter__WEBPACK_IMPORTED_MODULE_5__["EMITTER_TYPE"].FILTER_CUSTOMER) {
                _this.query.resetQuery();
                _this._filterQuery = data.params;
                _this._filterCustomers();
            }
            if (data && data.type === constants_emitter__WEBPACK_IMPORTED_MODULE_5__["EMITTER_TYPE"].CREATE_CUSTOMER) {
                _this.query.resetQuery();
                _this._filterCustomers();
            }
        });
    };
    CustomerListComponent.prototype._filterCustomers = function () {
        var _this = this;
        this.isLoading = true;
        var params = __assign({}, this.query.queryJSON(), this._filterQuery);
        this._customerSv.filterListCustomers(params).subscribe(function (res) {
            _this.query.setQuery(res);
            _this.customerList = res.customerList;
            _this._cimSv.date = res.date;
            _this.isLoading = false;
        }, function (errors) {
            _this._notify.error(errors);
            _this.isLoading = false;
        });
    };
    CustomerListComponent.prototype.pageChanged = function (event) {
        this.query.currentPage = event.page;
        this._filterCustomers();
    };
    CustomerListComponent.prototype._openModal = function (comp, config) {
        var _this = this;
        var subscribe = this._modalService.onHidden.subscribe(function (reason) {
            subscribe.unsubscribe();
            if (reason === 'reload') {
                _this._filterCustomers();
            }
        });
        this._modalService.show(comp, config);
    };
    CustomerListComponent.prototype.removeCustomer = function (customer) {
        var config = {
            class: 'modal-md',
            initialState: {
                customer: customer,
            },
        };
        this._openModal(_customer_modal_delete_customer_modal_delete_component__WEBPACK_IMPORTED_MODULE_7__["CustomerModalDeleteComponent"], config);
    };
    CustomerListComponent.prototype.editCustomer = function (customer) {
        var config = {
            class: 'modal-lg',
            initialState: {
                customer: lodash_clone__WEBPACK_IMPORTED_MODULE_9__(customer),
            },
        };
        this._openModal(_customer_modal_edit_customer_modal_edit_component__WEBPACK_IMPORTED_MODULE_8__["CustomerModalEditComponent"], config);
    };
    CustomerListComponent.prototype.assignedFotStaff = function (customer) {
        var config = {
            class: 'modal-md',
            initialState: {
                customer: lodash_clone__WEBPACK_IMPORTED_MODULE_9__(customer),
            },
        };
        this._openModal(_customer_modal_assign_customer_modal_assign_component__WEBPACK_IMPORTED_MODULE_12__["CustomerModalAssignComponent"], config);
    };
    CustomerListComponent.prototype.addOrder = function (columnName) {
        var _this = this;
        var index = this._orderArr.findIndex(function (item) { return item.columnName === columnName; });
        if (this._orderArr.length > 0 && this._orderArr[0].columnName === columnName) {
            if (this._orderArr[0].type === 'desc') {
                this._orderArr[0].type = 'asc';
            }
            else {
                this._orderArr[0].type = 'desc';
            }
        }
        else {
            this._orderArr = [];
            this._orderArr.push({
                columnName: columnName,
                type: 'desc',
            });
        }
        setTimeout(function () {
            _this._orderCustomer();
        }, 0);
    };
    CustomerListComponent.prototype._orderCustomer = function () {
        this.customerList = lodash_orderBy__WEBPACK_IMPORTED_MODULE_10__(this.customerList, this.orderColumnName, this.orderType);
    };
    CustomerListComponent.prototype.getClassOrder = function (columnName) {
        if (this._orderArr.length > 0 && this._orderArr[0].columnName === columnName) {
            if (this._orderArr[0].type === 'desc') {
                return 'fa-sort-down';
            }
            return 'fa-sort-up';
        }
        return 'fa-sort';
    };
    CustomerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-list',
            template: __webpack_require__(/*! ./customer-list.component.html */ "./src/app/cim/customer-list/customer-list.component.html"),
            styles: [__webpack_require__(/*! ./customer-list.component.scss */ "./src/app/cim/customer-list/customer-list.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__["NotifyService"],
            shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
            _cim_service__WEBPACK_IMPORTED_MODULE_11__["CimService"]])
    ], CustomerListComponent);
    return CustomerListComponent;
}());



/***/ }),

/***/ "./src/app/cim/customer-list/customer-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/cim/customer-list/customer-list.module.ts ***!
  \***********************************************************/
/*! exports provided: CustomerListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListModule", function() { return CustomerListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customer_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-list.component */ "./src/app/cim/customer-list/customer-list.component.ts");
/* harmony import */ var shared_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/services/customer.service */ "./src/shared/services/customer.service.ts");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customer_modal_delete_customer_modal_delete_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../customer-modal-delete/customer-modal-delete.module */ "./src/app/cim/customer-modal-delete/customer-modal-delete.module.ts");
/* harmony import */ var _customer_modal_edit_customer_modal_edit_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../customer-modal-edit/customer-modal-edit.module */ "./src/app/cim/customer-modal-edit/customer-modal-edit.module.ts");
/* harmony import */ var _customer_modal_assign_customer_modal_assign_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../customer-modal-assign/customer-modal-assign.module */ "./src/app/cim/customer-modal-assign/customer-modal-assign.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CustomerListModule = /** @class */ (function () {
    function CustomerListModule() {
    }
    CustomerListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _customer_modal_delete_customer_modal_delete_module__WEBPACK_IMPORTED_MODULE_8__["CustomerModalDeleteModule"],
                _customer_modal_edit_customer_modal_edit_module__WEBPACK_IMPORTED_MODULE_9__["CustomerModalEditModule"],
                _customer_modal_assign_customer_modal_assign_module__WEBPACK_IMPORTED_MODULE_10__["CustomerModalAssignModule"],
            ],
            declarations: [_customer_list_component__WEBPACK_IMPORTED_MODULE_2__["CustomerListComponent"]],
            exports: [_customer_list_component__WEBPACK_IMPORTED_MODULE_2__["CustomerListComponent"]],
            providers: [shared_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"], shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"]],
        })
    ], CustomerListModule);
    return CustomerListModule;
}());



/***/ }),

/***/ "./src/app/cim/customer-map/customer-map.component.html":
/*!**************************************************************!*\
  !*** ./src/app/cim/customer-map/customer-map.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gmap-wrapper\">\n  <div class=\"search-box\">\n    <input type=\"text\" name=\"address\" class=\"form-control\" #Address>\n  </div>\n\n  <agm-map\n    [latitude]=\"lat\"\n    [longitude]=\"lng\"\n    [zoom]=\"zoom\"\n    [disableDoubleClickZoom]=\"true\"\n    [disableDefaultUI]=\"false\"\n    [zoomControl]=\"true\"\n    [gestureHandling]=\"'coopeative'\"\n    (mapClick)=\"mapClicked($event)\">\n\n    <agm-marker\n      *ngFor=\"let m of markers; let i = index\"\n      (markerClick)=\"clickedMarker(m, i)\"\n      [latitude]=\"m.lat\"\n      [longitude]=\"m.lng\"\n      [label]=\"m.label\"\n      [markerDraggable]=\"m.draggable\"\n      [iconUrl]=\"m.iconUrl\"\n      (dragEnd)=\"markerDragEnd(m, $event)\">\n    </agm-marker>\n  </agm-map>\n</div>\n"

/***/ }),

/***/ "./src/app/cim/customer-map/customer-map.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/cim/customer-map/customer-map.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 100%; }\n\n@media (max-width: 991.98px) {\n  agm-map {\n    height: 500px;\n    margin-top: 20px; } }\n\n.gmap-wrapper {\n  height: 100%;\n  position: relative; }\n\n.gmap-wrapper .search-box {\n    position: absolute;\n    top: 0;\n    z-index: 1;\n    margin: 10px;\n    width: 50%; }\n"

/***/ }),

/***/ "./src/app/cim/customer-map/customer-map.component.ts":
/*!************************************************************!*\
  !*** ./src/app/cim/customer-map/customer-map.component.ts ***!
  \************************************************************/
/*! exports provided: CustomerMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerMapComponent", function() { return CustomerMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var constants_gmap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/gmap */ "./src/constants/gmap.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerMapComponent = /** @class */ (function () {
    function CustomerMapComponent(_emitter, _mapsAPILoader, _ngZone) {
        this._emitter = _emitter;
        this._mapsAPILoader = _mapsAPILoader;
        this._ngZone = _ngZone;
        // google maps zoom level
        this.zoom = 11;
        this.markers = [];
    }
    Object.defineProperty(CustomerMapComponent.prototype, "lat", {
        get: function () {
            return this._lat || constants_gmap__WEBPACK_IMPORTED_MODULE_3__["GMAP_DEFAULT"].LAT;
        },
        set: function (v) {
            this._lat = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerMapComponent.prototype, "lng", {
        get: function () {
            return this._lng || constants_gmap__WEBPACK_IMPORTED_MODULE_3__["GMAP_DEFAULT"].LNG;
        },
        set: function (v) {
            this._lng = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerMapComponent.prototype, "label", {
        get: function () {
            return this.lat !== constants_gmap__WEBPACK_IMPORTED_MODULE_3__["GMAP_DEFAULT"].LAT && this.lng !== constants_gmap__WEBPACK_IMPORTED_MODULE_3__["GMAP_DEFAULT"].LNG && this._label
                ? this._label
                : 'Yangon, Myanmar (Burma)';
        },
        set: function (v) {
            this._label = v;
        },
        enumerable: true,
        configurable: true
    });
    CustomerMapComponent.prototype.ngOnInit = function () {
        this.markers = [
            {
                lat: this.lat,
                lng: this.lng,
                label: this.label,
                draggable: false,
                iconUrl: 'https://png.icons8.com/office/30/000000/administrator-male.png',
            },
        ];
        this._onEventEmitter();
        this._initAutoCompleteGmap();
    };
    CustomerMapComponent.prototype._initAutoCompleteGmap = function () {
        var _this = this;
        this._mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this._address.nativeElement, {
                types: ['address'],
            });
            autocomplete.addListener('place_changed', function () {
                _this._ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    _this.markers = [
                        {
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng(),
                            draggable: false,
                            label: place.formatted_address,
                            iconUrl: 'https://png.icons8.com/office/30/000000/administrator-male.png',
                        },
                    ];
                    // emit lat/lon
                    _this._emitter.publishData({
                        type: constants_emitter__WEBPACK_IMPORTED_MODULE_1__["EMITTER_TYPE"].GMAP_PLACE_CHANGED,
                        data: {
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng(),
                            mode: _this.mode,
                        },
                    });
                });
            });
        });
    };
    CustomerMapComponent.prototype.ngOnDestroy = function () {
        this._subscriber.unsubscribe();
    };
    CustomerMapComponent.prototype._onEventEmitter = function () {
        var _this = this;
        this._subscriber = this._emitter.caseNumber$.subscribe(function (data) {
            if (data && data.type === constants_emitter__WEBPACK_IMPORTED_MODULE_1__["EMITTER_TYPE"].GMAP_ZOOM_TO) {
                _this.lat = data.data.lat;
                _this.lng = data.data.lng;
                _this.zoom = data.data.zoom;
            }
        });
    };
    CustomerMapComponent.prototype.clickedMarker = function (mark, index) {
        // console.log(`clicked the marker: `, mark);
    };
    CustomerMapComponent.prototype.mapClicked = function ($event) {
        this.markers = [
            {
                lat: $event.coords.lat,
                lng: $event.coords.lng,
                draggable: false,
                iconUrl: 'https://png.icons8.com/office/30/000000/administrator-male.png',
            },
        ];
        this._emitter.publishData({
            type: constants_emitter__WEBPACK_IMPORTED_MODULE_1__["EMITTER_TYPE"].GMAP_CLICK,
            data: {
                lat: $event.coords.lat,
                lng: $event.coords.lng,
                mode: this.mode,
            },
        });
    };
    CustomerMapComponent.prototype.markerDragEnd = function (m, $event) {
        // console.log('dragEnd', m, $event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('Address'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CustomerMapComponent.prototype, "_address", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('mode'),
        __metadata("design:type", String)
    ], CustomerMapComponent.prototype, "mode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('lat'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], CustomerMapComponent.prototype, "lat", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('lng'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], CustomerMapComponent.prototype, "lng", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('label'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], CustomerMapComponent.prototype, "label", null);
    CustomerMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-map',
            template: __webpack_require__(/*! ./customer-map.component.html */ "./src/app/cim/customer-map/customer-map.component.html"),
            styles: [__webpack_require__(/*! ./customer-map.component.scss */ "./src/app/cim/customer-map/customer-map.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_2__["EventEmitterService"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], CustomerMapComponent);
    return CustomerMapComponent;
}());



/***/ }),

/***/ "./src/app/cim/customer-map/customer-map.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/cim/customer-map/customer-map.module.ts ***!
  \*********************************************************/
/*! exports provided: CustomerMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerMapModule", function() { return CustomerMapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customer_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-map.component */ "./src/app/cim/customer-map/customer-map.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/snazzy-info-window */ "./node_modules/@agm/snazzy-info-window/index.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CustomerMapModule = /** @class */ (function () {
    function CustomerMapModule() {
    }
    CustomerMapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                    // please get your own API key here:
                    // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
                    apiKey: environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].gm_api_key,
                    libraries: ['places'],
                    apiVersion: '3.31',
                }),
                _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_4__["AgmSnazzyInfoWindowModule"],
            ],
            declarations: [_customer_map_component__WEBPACK_IMPORTED_MODULE_2__["CustomerMapComponent"]],
            exports: [_customer_map_component__WEBPACK_IMPORTED_MODULE_2__["CustomerMapComponent"]],
        })
    ], CustomerMapModule);
    return CustomerMapModule;
}());



/***/ }),

/***/ "./src/app/cim/customer-modal-assign/customer-modal-assign.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/cim/customer-modal-assign/customer-modal-assign.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Assign For Staff</h5>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n\n<div class=\"modal-body customer-edit\">\n  <form #CustomerForm=\"ngForm\" autocomplete=\"off\" novalidate>\n    <div class=\"row mb-4\">\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"Name\">Assigned For Sale</label>\n        <ng-select\n          [items]=\"users\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingUser\"\n          placeholder=\"please select user\"\n          [searchable]=\"true\"\n          name=\"user\"\n          [(ngModel)]=\"customer.assignedStaff\"\n          bindLabel=\"code_full_name\">\n        </ng-select>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12 text-center\">\n        <button type=\"button\" class=\"btn btn-secondary w-25 mr-2\" (click)=\"close()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary w-25 ml-2\"\n          (click)=\"assignCustomerForStaff()\"\n          [disabled]=\"isLoading || CustomerForm.form.invalid\">\n          OK\n          <i *ngIf=\"isLoading\" class=\"fa fa-refresh fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/cim/customer-modal-assign/customer-modal-assign.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/cim/customer-modal-assign/customer-modal-assign.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customer-edit .gmap {\n  height: 500px; }\n"

/***/ }),

/***/ "./src/app/cim/customer-modal-assign/customer-modal-assign.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/cim/customer-modal-assign/customer-modal-assign.component.ts ***!
  \******************************************************************************/
/*! exports provided: CustomerModalAssignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModalAssignComponent", function() { return CustomerModalAssignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var shared_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/services/customer.service */ "./src/shared/services/customer.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerModalAssignComponent = /** @class */ (function () {
    function CustomerModalAssignComponent(_notify, _customerSv, _bsModalRef, _modalService, _userSv) {
        this._notify = _notify;
        this._customerSv = _customerSv;
        this._bsModalRef = _bsModalRef;
        this._modalService = _modalService;
        this._userSv = _userSv;
        // users
        this.users = [];
        this.isLoadingUser = false;
        this.isLoading = false;
    }
    CustomerModalAssignComponent.prototype.ngOnInit = function () {
        this._getUsers();
    };
    CustomerModalAssignComponent.prototype._getUsers = function () {
        var _this = this;
        this.isLoadingUser = true;
        this._userSv.getAllUsers().subscribe(function (res) {
            _this.users = res;
            _this.isLoadingUser = false;
        }, function (errors) {
            _this.isLoadingUser = false;
            _this._notify.error(errors);
        });
    };
    CustomerModalAssignComponent.prototype.close = function (reason) {
        this._modalService.setDismissReason(reason);
        this._bsModalRef.hide();
    };
    CustomerModalAssignComponent.prototype.assignCustomerForStaff = function () {
        var _this = this;
        this.isLoading = true;
        this._customerSv.updateCustomer(this.customer.id, this.customer.toJSON()).subscribe(function (res) {
            _this.isLoading = true;
            _this._notify.success('assigned customer fot staff success');
            _this.close('reload');
        }, function (errors) {
            _this._notify.error(errors);
            _this.isLoading = true;
        });
    };
    CustomerModalAssignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-modal-assign',
            template: __webpack_require__(/*! ./customer-modal-assign.component.html */ "./src/app/cim/customer-modal-assign/customer-modal-assign.component.html"),
            styles: [__webpack_require__(/*! ./customer-modal-assign.component.scss */ "./src/app/cim/customer-modal-assign/customer-modal-assign.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_1__["NotifyService"],
            shared_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], CustomerModalAssignComponent);
    return CustomerModalAssignComponent;
}());



/***/ }),

/***/ "./src/app/cim/customer-modal-assign/customer-modal-assign.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/cim/customer-modal-assign/customer-modal-assign.module.ts ***!
  \***************************************************************************/
/*! exports provided: CustomerModalAssignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModalAssignModule", function() { return CustomerModalAssignModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customer_modal_assign_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-modal-assign.component */ "./src/app/cim/customer-modal-assign/customer-modal-assign.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _customer_map_customer_map_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customer-map/customer-map.module */ "./src/app/cim/customer-map/customer-map.module.ts");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CustomerModalAssignModule = /** @class */ (function () {
    function CustomerModalAssignModule() {
    }
    CustomerModalAssignModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(), _customer_map_customer_map_module__WEBPACK_IMPORTED_MODULE_6__["CustomerMapModule"]],
            declarations: [_customer_modal_assign_component__WEBPACK_IMPORTED_MODULE_2__["CustomerModalAssignComponent"]],
            exports: [_customer_modal_assign_component__WEBPACK_IMPORTED_MODULE_2__["CustomerModalAssignComponent"]],
            entryComponents: [_customer_modal_assign_component__WEBPACK_IMPORTED_MODULE_2__["CustomerModalAssignComponent"]],
            providers: [shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]],
        })
    ], CustomerModalAssignModule);
    return CustomerModalAssignModule;
}());



/***/ }),

/***/ "./src/app/cim/customer-modal-delete/customer-modal-delete.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/cim/customer-modal-delete/customer-modal-delete.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Do you want to delete?</h5>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n\n<div class=\"modal-body\">\n  <div class=\"text-center\">\n    <button type=\"button\" class=\"btn btn-secondary w-25 mr-2\" (click)=\"close()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary w-25 ml-2\" (click)=\"removeCustomer()\"\n      [disabled]=\"isLoading\">\n      OK\n      <i *ngIf=\"isLoading\" class=\"fa fa-refresh fa-spin\"></i>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cim/customer-modal-delete/customer-modal-delete.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/cim/customer-modal-delete/customer-modal-delete.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cim/customer-modal-delete/customer-modal-delete.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/cim/customer-modal-delete/customer-modal-delete.component.ts ***!
  \******************************************************************************/
/*! exports provided: CustomerModalDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModalDeleteComponent", function() { return CustomerModalDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var shared_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/services/customer.service */ "./src/shared/services/customer.service.ts");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerModalDeleteComponent = /** @class */ (function () {
    function CustomerModalDeleteComponent(_bsModalRef, _modalService, _customerSv, _notify) {
        this._bsModalRef = _bsModalRef;
        this._modalService = _modalService;
        this._customerSv = _customerSv;
        this._notify = _notify;
        this.isLoading = false;
    }
    CustomerModalDeleteComponent.prototype.ngOnInit = function () { };
    CustomerModalDeleteComponent.prototype.removeCustomer = function () {
        var _this = this;
        this.isLoading = true;
        this._customerSv.removeCustomer(this.customer.id).subscribe(function (res) {
            _this._notify.success('delete customer successs');
            _this.close('reload');
            _this.isLoading = false;
        }, function (errors) {
            _this.isLoading = false;
            _this._notify.error(errors);
        });
    };
    CustomerModalDeleteComponent.prototype.close = function (reason) {
        this._modalService.setDismissReason(reason);
        this._bsModalRef.hide();
    };
    CustomerModalDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-modal-delete',
            template: __webpack_require__(/*! ./customer-modal-delete.component.html */ "./src/app/cim/customer-modal-delete/customer-modal-delete.component.html"),
            styles: [__webpack_require__(/*! ./customer-modal-delete.component.scss */ "./src/app/cim/customer-modal-delete/customer-modal-delete.component.scss")],
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            shared_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"]])
    ], CustomerModalDeleteComponent);
    return CustomerModalDeleteComponent;
}());



/***/ }),

/***/ "./src/app/cim/customer-modal-delete/customer-modal-delete.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/cim/customer-modal-delete/customer-modal-delete.module.ts ***!
  \***************************************************************************/
/*! exports provided: CustomerModalDeleteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModalDeleteModule", function() { return CustomerModalDeleteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customer_modal_delete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-modal-delete.component */ "./src/app/cim/customer-modal-delete/customer-modal-delete.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomerModalDeleteModule = /** @class */ (function () {
    function CustomerModalDeleteModule() {
    }
    CustomerModalDeleteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_customer_modal_delete_component__WEBPACK_IMPORTED_MODULE_2__["CustomerModalDeleteComponent"]],
            exports: [_customer_modal_delete_component__WEBPACK_IMPORTED_MODULE_2__["CustomerModalDeleteComponent"]],
            entryComponents: [_customer_modal_delete_component__WEBPACK_IMPORTED_MODULE_2__["CustomerModalDeleteComponent"]],
        })
    ], CustomerModalDeleteModule);
    return CustomerModalDeleteModule;
}());



/***/ }),

/***/ "./src/app/cim/customer-modal-edit/customer-modal-edit.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/cim/customer-modal-edit/customer-modal-edit.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Update Customer</h5>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n\n<div class=\"modal-body customer-edit\">\n  <form #CustomerForm=\"ngForm\" autocomplete=\"off\" novalidate>\n    <div class=\"row mb-4\">\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"CustomerName\">Customer Name <i class=\"required\">&#40;*&#41;</i></label>\n          <input type=\"text\" id=\"CustomerName\"\n            autocomplete=\"new-name\"\n            class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': Name.dirty && Name.errors }\"\n            name=\"customer_name\"\n            placeholder=\"please enter name\"\n            [(ngModel)]=\"customer.customerName\"\n            #Name=\"ngModel\"\n            required>\n\n          <div class=\"invalid-feedback\"\n            *ngIf=\"Name.errors?.required\">\n            Please enter name\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"CustomerType\">Customer Type <i class=\"required\">&#40;*&#41;</i></label>\n          <ng-select\n            [items]=\"customerTypes\"\n            class=\"text-left\"\n            [closeOnSelect]=\"true\"\n            [clearable]=\"true\"\n            [loading]=\"isLoadingCustomerType\"\n            placeholder=\"please select type\"\n            [searchable]=\"false\"\n            [groupBy]=\"groupByFn\"\n            name=\"customerTypes\"\n            [(ngModel)]=\"customer.customerType\"\n            bindLabel=\"name\"\n            #CustomerType=\"ngModel\"\n            required>\n          </ng-select>\n\n          <div class=\"invalid-feedback\"\n            *ngIf=\"CustomerType.errors?.required\">\n            Please select type\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"TypeInvestment\">Type of investment</label>\n          <ng-select\n            [items]=\"typeOfInvestments\"\n            class=\"text-left\"\n            [closeOnSelect]=\"true\"\n            [clearable]=\"true\"\n            [loading]=\"isLoadingTypeOfInvestment\"\n            placeholder=\"please select type of investment\"\n            [searchable]=\"false\"\n            name=\"typeOfInvestments\"\n            [(ngModel)]=\"customer.typeOfInvestment\"\n            bindLabel=\"name\">\n          </ng-select>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"TypeOfSale\">Type of Sale</label>\n          <ng-select\n            [items]=\"typeOfSales\"\n            class=\"text-left\"\n            [closeOnSelect]=\"true\"\n            [clearable]=\"true\"\n            [loading]=\"isLoadingTypeOfSale\"\n            placeholder=\"please select type of sale\"\n            [searchable]=\"false\"\n            name=\"typeOfSales\"\n            [(ngModel)]=\"customer.typeOfSale\"\n            bindLabel=\"name\">\n          </ng-select>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\" [hidden]=\"!canChangeBranch\">\n        <div class=\"form-group\">\n          <label for=\"AssignForBranch\">Assign For Branch</label>\n          <ng-select\n            [items]=\"branches\"\n            class=\"text-left\"\n            [closeOnSelect]=\"true\"\n            [clearable]=\"true\"\n            [loading]=\"isLoadingBranch\"\n            placeholder=\"please select assign for branch\"\n            [searchable]=\"false\"\n            name=\"assignedBranch\"\n            [(ngModel)]=\"customer.assignedBranchId\"\n            (ngModelChange)=\"findUsers()\"\n            #AssignForBranch=\"ngModel\"\n            bindLabel=\"name\"\n            bindValue=\"id\">\n          </ng-select>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"Name\">Assigned For Sale</label>\n        <ng-select\n          [items]=\"users\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingUser\"\n          placeholder=\"please select user\"\n          [searchable]=\"true\"\n          name=\"user\"\n          [(ngModel)]=\"customer.assignedStaff\"\n          bindLabel=\"code_full_name\"\n          [disabled]=\"!canChangeAssignedStaff\">\n        </ng-select>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"CustomerStatus\">Customer Status</label>\n          <ng-select\n            [items]=\"CUSTOMER_STATUSES\"\n            class=\"text-left\"\n            [closeOnSelect]=\"true\"\n            [clearable]=\"true\"\n            placeholder=\"please select status\"\n            [searchable]=\"false\"\n            name=\"CUSTOMER_STATUSES\"\n            [(ngModel)]=\"customer.customerStatus\"\n            bindLabel=\"name\"\n            bindValue=\"value\">\n          </ng-select>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"Addess\">Address</label>\n          <input type=\"text\" id=\"Addess\"\n            autocomplete=\"new-address\"\n            class=\"form-control\"\n            name=\"address\"\n            placeholder=\"please enter address\"\n            [(ngModel)]=\"customer.address\">\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"Region\">Region <i class=\"required\">&#40;*&#41;</i></label>\n          <ng-select\n            [items]=\"branches\"\n            class=\"text-left\"\n            [closeOnSelect]=\"true\"\n            [clearable]=\"true\"\n            [loading]=\"isLoadingBranch\"\n            placeholder=\"please select region\"\n            [searchable]=\"false\"\n            name=\"branches\"\n            [(ngModel)]=\"customer.branchId\"\n            (ngModelChange)=\"getDistrictList(); getRegionAndZoomTo()\"\n            #Region=\"ngModel\"\n            bindLabel=\"name\"\n            bindValue=\"id\"\n            required>\n          </ng-select>\n\n          <div class=\"invalid-feedback\"\n            *ngIf=\"Region.errors?.required\">\n            Please select region\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"District\">District <i class=\"required\">&#40;*&#41;</i></label>\n          <ng-select\n            [items]=\"districts\"\n            class=\"text-left\"\n            [closeOnSelect]=\"true\"\n            [clearable]=\"true\"\n            [loading]=\"isLoadingDistrict\"\n            placeholder=\"please select district\"\n            [searchable]=\"false\"\n            name=\"districts\"\n            [(ngModel)]=\"customer.districtId\"\n            (ngModelChange)=\"getTownshipList(); getDistrictAndZoomTo()\"\n            #District=\"ngModel\"\n            bindLabel=\"name\"\n            bindValue=\"id\"\n            required>\n          </ng-select>\n\n          <div class=\"invalid-feedback\"\n            *ngIf=\"District.errors?.required\">\n            Please select district\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"Township\">Township <i class=\"required\">&#40;*&#41;</i></label>\n          <ng-select\n            [items]=\"townships\"\n            class=\"text-left\"\n            [closeOnSelect]=\"true\"\n            [clearable]=\"true\"\n            [loading]=\"isLoadingTownship\"\n            placeholder=\"please select township\"\n            [searchable]=\"false\"\n            name=\"townships\"\n            [(ngModel)]=\"customer.townshipId\"\n            (ngModelChange)=\"getTownshipAndZoomTo()\"\n            #Township=\"ngModel\"\n            bindLabel=\"name\"\n            bindValue=\"id\"\n            required>\n          </ng-select>\n\n          <div class=\"invalid-feedback\"\n            *ngIf=\"Township.errors?.required\">\n            Please select township\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"latitude\">Latitude <i class=\"required\">&#40;*&#41;</i></label>\n          <input type=\"number\" id=\"latitude\"\n            autocomplete=\"new-latitude\"\n            class=\"form-control\"\n            name=\"latitude\"\n            [ngClass]=\"{ 'is-invalid': Latitude.dirty && Latitude.errors }\"\n            #Latitude=\"ngModel\"\n            required\n            placeholder=\"please enter latitude\"\n            [(ngModel)]=\"customer.latitude\"\n            (ngModelChange)=\"changeLatLng()\"\n            (blur)=\"findAddressWithLatLng()\">\n\n          <div class=\"invalid-feedback\"\n            *ngIf=\"Latitude.errors?.required\">\n            Please enter latitude\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"longitude\">Longitude <i class=\"required\">&#40;*&#41;</i></label>\n          <input type=\"number\" id=\"longitude\"\n            autocomplete=\"new-longitude\"\n            class=\"form-control\"\n            name=\"longitude\"\n            [ngClass]=\"{ 'is-invalid': Longitude.dirty && Longitude.errors }\"\n            #Longitude=\"ngModel\"\n            required\n            placeholder=\"please enter longitude\"\n            [(ngModel)]=\"customer.longitude\"\n            (ngModelChange)=\"changeLatLng()\"\n            (blur)=\"findAddressWithLatLng()\">\n\n          <div class=\"invalid-feedback\"\n            *ngIf=\"Longitude.errors?.required\">\n            Please enter longitude\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"Catalog\">Catalog</label>\n          <ng-select\n            [items]=\"catalogs\"\n            class=\"text-left\"\n            [closeOnSelect]=\"true\"\n            [clearable]=\"true\"\n            [loading]=\"isLoadingCatalog\"\n            placeholder=\"please select catalog\"\n            [searchable]=\"false\"\n            name=\"catalogs\"\n            [(ngModel)]=\"customer.catalog\"\n            bindLabel=\"name\">\n          </ng-select>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"ContactName\">Contact Name</label>\n          <input type=\"text\" id=\"ContactName\"\n            autocomplete=\"new-catalog\"\n            class=\"form-control\"\n            name=\"contact_name\"\n            placeholder=\"please enter contact name\"\n            [(ngModel)]=\"customer.contactName\">\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"Phone\">Phone</label>\n          <input type=\"text\" id=\"Phone\"\n            autocomplete=\"new-phone\"\n            class=\"form-control\"\n            name=\"phone\"\n            placeholder=\"please enter phone\"\n            [(ngModel)]=\"customer.phone\">\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"Email\">Email</label>\n          <input type=\"text\" id=\"Email\"\n            autocomplete=\"new-email\"\n            class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': Email.dirty && Email.errors }\"\n            name=\"email\"\n            placeholder=\"please enter email\"\n            [(ngModel)]=\"customer.email\"\n            #Email=\"ngModel\"\n            [pattern]=\"rules.email\">\n\n          <div class=\"invalid-feedback\"\n            *ngIf=\"Email.errors?.pattern\">\n            The email address format is incorrect\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"Position\">Position</label>\n          <input type=\"text\" id=\"Position\"\n            autocomplete=\"new-position\"\n            class=\"form-control\"\n            name=\"position\"\n            placeholder=\"please enter position\"\n            [(ngModel)]=\"customer.position\">\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"Service\">Service</label>\n          <input type=\"text\" id=\"Service\"\n            autocomplete=\"new-service\"\n            class=\"form-control\"\n            name=\"service\"\n            placeholder=\"please enter service\"\n            [(ngModel)]=\"customer.service\">\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"Date\">Date</label>\n          <input type=\"text\" id=\"Date\"\n            autocomplete=\"new-date\"\n            readonly\n            placeholder=\"please select date\"\n            class=\"form-control\"\n            name=\"date\"\n            bsDatepicker\n            [(ngModel)]=\"customer.customerDateBinding\"\n            [bsConfig]=\"DATEPICKER_CONFIG\"\n            (bsValueChange)=\"onValueChange($event)\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row form-group gmap\">\n      <div class=\"col-12 \">\n        <app-customer-map\n          [lat]=\"customer.latitude\"\n          [lng]=\"customer.longitude\"\n          [label]=\"customer.address\"\n          mode=\"edit\"></app-customer-map>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12 text-center\">\n        <button type=\"button\" class=\"btn btn-secondary w-25 mr-2\" (click)=\"close()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary w-25 ml-2\"\n          (click)=\"updateCustomer()\"\n          [disabled]=\"isLoading || CustomerForm.form.invalid || !customer.has_address\">\n          OK\n          <i *ngIf=\"isLoading\" class=\"fa fa-refresh fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/cim/customer-modal-edit/customer-modal-edit.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/cim/customer-modal-edit/customer-modal-edit.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customer-edit .gmap {\n  height: 500px; }\n"

/***/ }),

/***/ "./src/app/cim/customer-modal-edit/customer-modal-edit.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/cim/customer-modal-edit/customer-modal-edit.component.ts ***!
  \**************************************************************************/
/*! exports provided: CustomerModalEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModalEditComponent", function() { return CustomerModalEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var models_customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/customer */ "./src/models/customer.ts");
/* harmony import */ var constants_customer_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constants/customer-status */ "./src/constants/customer-status.ts");
/* harmony import */ var constants_datepicker_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/datepicker-config */ "./src/constants/datepicker-config.ts");
/* harmony import */ var shared_services_customer_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/services/customer-type.service */ "./src/shared/services/customer-type.service.ts");
/* harmony import */ var shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/services/customer-classification.service */ "./src/shared/services/customer-classification.service.ts");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var shared_services_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/services/customer.service */ "./src/shared/services/customer.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var constants_reg_exp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! constants/reg-exp */ "./src/constants/reg-exp.ts");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
/* harmony import */ var shared_services_branch_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/services/branch.service */ "./src/shared/services/branch.service.ts");
/* harmony import */ var shared_services_gmap_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! shared/services/gmap.service */ "./src/shared/services/gmap.service.ts");
/* harmony import */ var app_role_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/role.service */ "./src/app/role.service.ts");
/* harmony import */ var app_services_root_scope_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/services/root-scope.service */ "./src/app/services/root-scope.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var CustomerModalEditComponent = /** @class */ (function () {
    function CustomerModalEditComponent(_customerTypeSv, _customerClassificationSv, _notify, _customerSv, _bsModalRef, _modalService, _emitter, _userSv, _branchSv, _gmapSv, _role, _rootScope) {
        this._customerTypeSv = _customerTypeSv;
        this._customerClassificationSv = _customerClassificationSv;
        this._notify = _notify;
        this._customerSv = _customerSv;
        this._bsModalRef = _bsModalRef;
        this._modalService = _modalService;
        this._emitter = _emitter;
        this._userSv = _userSv;
        this._branchSv = _branchSv;
        this._gmapSv = _gmapSv;
        this._role = _role;
        this._rootScope = _rootScope;
        this.customer = new models_customer__WEBPACK_IMPORTED_MODULE_1__["Customer"]();
        // customer types
        this.customerTypes = [];
        this.isLoadingCustomerType = false;
        // customer status
        this.CUSTOMER_STATUSES = constants_customer_status__WEBPACK_IMPORTED_MODULE_2__["CUSTOMER_STATUSES"];
        // type of sale
        this.typeOfSales = [];
        this.isLoadingTypeOfSale = false;
        // catalog
        this.catalogs = [];
        this.isLoadingCatalog = false;
        // type of investment
        this.typeOfInvestments = [];
        this.isLoadingTypeOfInvestment = false;
        // users
        this.users = [];
        this.isLoadingUser = false;
        // branches
        this.branches = [];
        this.isLoadingBranch = false;
        // districts
        this.districts = [];
        this.isLoadingDistrict = false;
        // townships
        this.townships = [];
        this.isLoadingTownship = false;
        // datepicker config
        this.DATEPICKER_CONFIG = constants_datepicker_config__WEBPACK_IMPORTED_MODULE_3__["DATEPICKER_CONFIG"];
        this.isLoading = false;
        this.rules = constants_reg_exp__WEBPACK_IMPORTED_MODULE_9__["RegExp"];
        this._isChangeLatLng = false;
        this.groupByFn = function (item) { return item.child.state; };
    }
    Object.defineProperty(CustomerModalEditComponent.prototype, "canChangeBranch", {
        get: function () {
            return this._role.is_admin || this._role.is_sale_director || this._role.is_branch_director;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerModalEditComponent.prototype, "canChangeAssignedStaff", {
        get: function () {
            return (this._role.is_hq_sale_staff ||
                this._role.is_branch_sale_staff ||
                (this._role.is_branch_director && this.customer.assignedBranchId === this._rootScope.currentUser.branchId));
        },
        enumerable: true,
        configurable: true
    });
    CustomerModalEditComponent.prototype.ngOnInit = function () {
        this.customer.setEmpty();
        this._getCustomerTypes();
        this._getTypeOfSales();
        this._getTypeOfInvestment();
        this._getCatalog();
        this._onEventEmitter();
        this._getBranchList();
        if (this.customer.branchId) {
            this.getDistrictList(false);
        }
        if (this.customer.districtId) {
            this.getTownshipList(false);
        }
        if (!this.canChangeBranch) {
            this._getUsers();
        }
    };
    CustomerModalEditComponent.prototype.ngOnDestroy = function () {
        this._subscriber.unsubscribe();
    };
    CustomerModalEditComponent.prototype._onEventEmitter = function () {
        var _this = this;
        this._subscriber = this._emitter.caseNumber$.subscribe(function (data) {
            if (data && (data.type === constants_emitter__WEBPACK_IMPORTED_MODULE_10__["EMITTER_TYPE"].GMAP_CLICK || data.type === constants_emitter__WEBPACK_IMPORTED_MODULE_10__["EMITTER_TYPE"].GMAP_PLACE_CHANGED)) {
                if (data.data.mode === 'edit') {
                    _this.customer.latitude = data.data.lat;
                    _this.customer.longitude = data.data.lng;
                }
                return;
            }
        });
    };
    CustomerModalEditComponent.prototype.changeLatLng = function () {
        this._isChangeLatLng = true;
    };
    CustomerModalEditComponent.prototype.findAddressWithLatLng = function () {
        var _this = this;
        if (!this.customer.latitude || !this.customer.longitude || !this._isChangeLatLng) {
            return;
        }
        if (!constants_reg_exp__WEBPACK_IMPORTED_MODULE_9__["RegExp"].latitude.test(this.customer.latitude.toString()) ||
            !constants_reg_exp__WEBPACK_IMPORTED_MODULE_9__["RegExp"].longitude.test(this.customer.longitude.toString())) {
            this._notify.warning('latitude or longitude format is incorrect!');
            return;
        }
        // call api
        var data = {
            lat: this.customer.latitude,
            lng: this.customer.longitude,
        };
        this._gmapSv.findAddressWithLocation(data, function (results, status) {
            _this._isChangeLatLng = false;
            if (status === 'OK') {
                if (results[0]) {
                    // emit zoom to latlng
                    _this._emitter.publishData({
                        type: constants_emitter__WEBPACK_IMPORTED_MODULE_10__["EMITTER_TYPE"].GMAP_ZOOM_TO,
                        data: {
                            lat: results[0].geometry.location.lat(),
                            lng: results[0].geometry.location.lng(),
                            zoom: 12,
                        },
                    });
                    return;
                }
                _this._notify.warning('No results found!');
            }
        });
    };
    CustomerModalEditComponent.prototype._findAddressWithAddress = function (address, zoom) {
        var _this = this;
        this._gmapSv.findAddressWithAddress(address, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    // emit zoom to latlng
                    _this._emitter.publishData({
                        type: constants_emitter__WEBPACK_IMPORTED_MODULE_10__["EMITTER_TYPE"].GMAP_ZOOM_TO,
                        data: {
                            lat: results[0].geometry.location.lat(),
                            lng: results[0].geometry.location.lng(),
                            zoom: zoom,
                        },
                    });
                    return;
                }
                _this._notify.warning('No results found!');
            }
        });
    };
    CustomerModalEditComponent.prototype.getRegionAndZoomTo = function () {
        var _this = this;
        var address = '';
        var iState = this.branches.findIndex(function (item) { return item.id === _this.customer.branchId; });
        if (iState >= 0) {
            address += this.branches[iState].name + " State, Myanmar (Burma)";
        }
        if (address) {
            this._findAddressWithAddress(address, 5);
        }
    };
    CustomerModalEditComponent.prototype.getDistrictAndZoomTo = function () {
        var _this = this;
        var address = '';
        var iDistrict = this.districts.findIndex(function (item) { return item.id === _this.customer.districtId; });
        if (iDistrict >= 0) {
            address += this.districts[iDistrict].name + " District";
        }
        var iState = this.branches.findIndex(function (item) { return item.id === _this.customer.branchId; });
        if (iState >= 0) {
            address += ", " + this.branches[iState].name + " State, Myanmar (Burma)";
        }
        if (address) {
            this._findAddressWithAddress(address, 7);
        }
    };
    CustomerModalEditComponent.prototype.getTownshipAndZoomTo = function () {
        var _this = this;
        var address = '';
        var iTownship = this.townships.findIndex(function (item) { return item.id === _this.customer.townshipId; });
        if (iTownship >= 0) {
            address += "" + this.townships[iTownship].name;
        }
        var iDistrict = this.districts.findIndex(function (item) { return item.id === _this.customer.districtId; });
        if (iDistrict >= 0) {
            address += ", " + this.districts[iDistrict].name + " District";
        }
        var iState = this.branches.findIndex(function (item) { return item.id === _this.customer.branchId; });
        if (iState >= 0) {
            address += ", " + this.branches[iState].name + " State, Myanmar (Burma)";
        }
        if (address) {
            this._findAddressWithAddress(address, 9);
        }
    };
    CustomerModalEditComponent.prototype._getBranchList = function () {
        var _this = this;
        this.isLoadingBranch = true;
        this._branchSv.getBranchList().subscribe(function (res) {
            _this.branches = res.branches;
            _this.isLoadingBranch = false;
        }, function (errors) {
            _this.isLoadingBranch = false;
            _this._notify.error(errors);
        });
    };
    CustomerModalEditComponent.prototype.getDistrictList = function (initLoad) {
        var _this = this;
        if (initLoad === void 0) { initLoad = true; }
        if (!this.customer.branchId) {
            this.districts = [];
            this.customer.districtId = null;
            return;
        }
        this.isLoadingDistrict = true;
        var opts = {
            branchId: this.customer.branchId,
        };
        this._branchSv.getDistrictList(opts).subscribe(function (res) {
            _this.districts = res.districts;
            if (initLoad) {
                _this.customer.districtId = null;
            }
            _this.isLoadingDistrict = false;
        }, function (errors) {
            _this.isLoadingDistrict = false;
            _this._notify.error(errors);
        });
    };
    CustomerModalEditComponent.prototype.getTownshipList = function (initLoad) {
        var _this = this;
        if (initLoad === void 0) { initLoad = true; }
        if (!this.customer.districtId) {
            this.townships = [];
            this.customer.townshipId = null;
            return;
        }
        this.isLoadingTownship = true;
        var opts = {
            districtId: this.customer.districtId,
            branchId: this.customer.branchId,
        };
        this._branchSv.getTownshipList(opts).subscribe(function (res) {
            _this.townships = res.townships;
            if (initLoad) {
                _this.customer.townshipId = null;
            }
            _this.isLoadingTownship = false;
        }, function (errors) {
            _this.isLoadingTownship = false;
            _this._notify.error(errors);
        });
    };
    CustomerModalEditComponent.prototype._getUsers = function (opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        this.isLoadingUser = true;
        this._userSv.getAllUsers(opts).subscribe(function (res) {
            _this.users = res;
            _this.isLoadingUser = false;
            if (!_this.canChangeAssignedStaff && _this.users.length > 0) {
                _this.customer.assignedStaff = _this.users[0];
                return;
            }
            _this.customer.assignedStaff = null;
        }, function (errors) {
            _this.isLoadingUser = false;
            _this._notify.error(errors);
        });
    };
    CustomerModalEditComponent.prototype._getCustomerTypes = function () {
        var _this = this;
        this.isLoadingCustomerType = true;
        this._customerTypeSv.customerTypesRead().subscribe(function (res) {
            _this.isLoadingCustomerType = false;
            _this.customerTypes = res;
        }, function (errors) {
            _this.isLoadingCustomerType = false;
            _this._notify.error(errors);
        });
    };
    CustomerModalEditComponent.prototype._getTypeOfSales = function () {
        var _this = this;
        this.isLoadingTypeOfSale = true;
        var params = {
            type: 'sale',
        };
        this.typeOfSales = [];
        this._customerClassificationSv.getCustomerClassification(params).subscribe(function (res) {
            _this.isLoadingTypeOfSale = false;
            _this.typeOfSales = res.customerClassifications;
        }, function (errors) {
            _this.isLoadingTypeOfSale = false;
            _this._notify.error(errors);
        });
    };
    CustomerModalEditComponent.prototype._getCatalog = function () {
        var _this = this;
        this.isLoadingCatalog = true;
        var params = {
            type: 'catalog',
        };
        this.typeOfSales = [];
        this._customerClassificationSv.getCustomerClassification(params).subscribe(function (res) {
            _this.isLoadingCatalog = false;
            _this.catalogs = res.customerClassifications;
        }, function (errors) {
            _this.isLoadingCatalog = false;
            _this._notify.error(errors);
        });
    };
    CustomerModalEditComponent.prototype._getTypeOfInvestment = function () {
        var _this = this;
        this.isLoadingTypeOfInvestment = true;
        var params = {
            type: 'investment',
        };
        this.typeOfInvestments = [];
        this._customerClassificationSv.getCustomerClassification(params).subscribe(function (res) {
            _this.isLoadingTypeOfInvestment = false;
            _this.typeOfInvestments = res.customerClassifications;
        }, function (errors) {
            _this.isLoadingTypeOfInvestment = false;
            _this._notify.error(errors);
        });
    };
    CustomerModalEditComponent.prototype.onValueChange = function (event) {
        this.customer.customerDate = event;
    };
    CustomerModalEditComponent.prototype.close = function (reason) {
        this._modalService.setDismissReason(reason);
        this._bsModalRef.hide();
    };
    CustomerModalEditComponent.prototype.updateCustomer = function () {
        var _this = this;
        this.isLoading = true;
        this._customerSv.updateCustomer(this.customer.id, this.customer.toJSON()).subscribe(function (res) {
            _this.isLoading = true;
            _this._notify.success('update customer success');
            _this.close('reload');
        }, function (errors) {
            _this._notify.error(errors);
            _this.isLoading = true;
        });
    };
    CustomerModalEditComponent.prototype.findUsers = function () {
        if (!this.canChangeBranch) {
            return;
        }
        var opts = {};
        if (this.customer.assignedBranchId) {
            opts.branchId = this.customer.assignedBranchId;
            opts.isBranchDirector = 1;
        }
        if (this._role.is_branch_director && this._rootScope.currentUser.branchId === this.customer.assignedBranchId) {
            opts.isBranchDirector = 0;
        }
        this._getUsers(opts);
    };
    CustomerModalEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-modal-edit',
            template: __webpack_require__(/*! ./customer-modal-edit.component.html */ "./src/app/cim/customer-modal-edit/customer-modal-edit.component.html"),
            styles: [__webpack_require__(/*! ./customer-modal-edit.component.scss */ "./src/app/cim/customer-modal-edit/customer-modal-edit.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_services_customer_type_service__WEBPACK_IMPORTED_MODULE_4__["CustomerTypeService"],
            shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_5__["CustomerClassificationService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"],
            shared_services_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"],
            shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_11__["EventEmitterService"],
            shared_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
            shared_services_branch_service__WEBPACK_IMPORTED_MODULE_13__["BranchService"],
            shared_services_gmap_service__WEBPACK_IMPORTED_MODULE_14__["GmapService"],
            app_role_service__WEBPACK_IMPORTED_MODULE_15__["RoleService"],
            app_services_root_scope_service__WEBPACK_IMPORTED_MODULE_16__["RootScopeService"]])
    ], CustomerModalEditComponent);
    return CustomerModalEditComponent;
}());



/***/ }),

/***/ "./src/app/cim/customer-modal-edit/customer-modal-edit.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/cim/customer-modal-edit/customer-modal-edit.module.ts ***!
  \***********************************************************************/
/*! exports provided: CustomerModalEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModalEditModule", function() { return CustomerModalEditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customer_modal_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-modal-edit.component */ "./src/app/cim/customer-modal-edit/customer-modal-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _customer_map_customer_map_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customer-map/customer-map.module */ "./src/app/cim/customer-map/customer-map.module.ts");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CustomerModalEditModule = /** @class */ (function () {
    function CustomerModalEditModule() {
    }
    CustomerModalEditModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(), _customer_map_customer_map_module__WEBPACK_IMPORTED_MODULE_6__["CustomerMapModule"]],
            declarations: [_customer_modal_edit_component__WEBPACK_IMPORTED_MODULE_2__["CustomerModalEditComponent"]],
            exports: [_customer_modal_edit_component__WEBPACK_IMPORTED_MODULE_2__["CustomerModalEditComponent"]],
            entryComponents: [_customer_modal_edit_component__WEBPACK_IMPORTED_MODULE_2__["CustomerModalEditComponent"]],
            providers: [shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]],
        })
    ], CustomerModalEditModule);
    return CustomerModalEditModule;
}());



/***/ })

}]);
//# sourceMappingURL=cim-cim-module.6efcc073d522b362e3ac.js.map