(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["timeline-timeline-module"],{

/***/ "./src/app/timeline/timeline-list/timeline-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/timeline/timeline-list/timeline-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive py-4\">\n  <span>Showing {{ query.from }} to {{ query.to }} of {{ query.totalElements }} entries</span>\n  <table class=\"table sale-activity-table\">\n    <thead>\n      <tr>\n        <th>Action</th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('customer_name')\">\n          Customer\n          <i class=\"fa {{ getClassOrder('customer_name') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('staff_user_name')\">\n          Staff\n          <i class=\"fa {{ getClassOrder('staff_user_name') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('staff_full_name')\">\n          Full Name\n          <i class=\"fa {{ getClassOrder('staff_full_name') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('statusOfProcessName')\">\n          Activity Type\n          <i class=\"fa {{ getClassOrder('statusOfProcessName') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('dateDisplay')\">\n          Sale Date\n          <i class=\"fa {{ getClassOrder('dateDisplay') }}\"></i>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let saleActivity of saleActivities;\">\n        <td>\n          <button type=\"button\" class=\"mr-1 btn btn-info\" (click)=\"editSareActivity(saleActivity)\"><i class=\"fa fa-edit\"></i></button>\n          <button type=\"button\" class=\"mr-1 btn btn-danger\" (click)=\"removeSareActivity(saleActivity)\"><i class=\"fa fa-trash\"></i></button>\n        </td>\n        <td>{{ saleActivity.customer_name }}</td>\n        <td>{{ saleActivity.staff_user_name }}</td>\n        <td>{{ saleActivity.staff_full_name }}</td>\n        <td>{{ saleActivity.statusOfProcessName }}</td>\n        <td>{{ saleActivity.dateDisplay }}</td>\n      </tr>\n      <tr [ngClass]=\"{ 'hidden': saleActivities.length > 0 }\">\n        <td colspan=\"5\" class=\"text-center\">\n          Data not found\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"pagination mt-4\" [ngClass]=\"{ 'hidden': saleActivities.length === 0 }\">\n  <pagination\n    class=\"pagination-md\"\n    [totalItems]=\"query.totalElements\"\n    [(ngModel)]=\"query.currentPage\"\n    pageBtnClass=\"btn\"\n    [itemsPerPage]=\"query.size\"\n    [maxSize]=\"5\"\n    (pageChanged)=\"pageChanged($event)\"\n    previousText=\"&lsaquo;\"\n    nextText=\"&rsaquo;\"\n    firstText=\"&laquo;\"\n    lastText=\"&raquo;\">\n  </pagination>\n</div>\n"

/***/ }),

/***/ "./src/app/timeline/timeline-list/timeline-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/timeline/timeline-list/timeline-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sale-activity-table.table thead th,\n.sale-activity-table.table tbody td {\n  min-width: 200px; }\n  .sale-activity-table.table thead th:first-child,\n  .sale-activity-table.table tbody td:first-child {\n    max-width: 150px; }\n"

/***/ }),

/***/ "./src/app/timeline/timeline-list/timeline-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/timeline/timeline-list/timeline-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: TimelineListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineListComponent", function() { return TimelineListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_utils_query_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/utils/query-builder */ "./src/shared/utils/query-builder.ts");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
/* harmony import */ var shared_services_sale_activity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/services/sale-activity.service */ "./src/shared/services/sale-activity.service.ts");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/clone */ "./node_modules/lodash/clone.js");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_clone__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/orderBy */ "./node_modules/lodash/orderBy.js");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _timeline_modal_delete_timeline_modal_delete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../timeline-modal-delete/timeline-modal-delete.component */ "./src/app/timeline/timeline-modal-delete/timeline-modal-delete.component.ts");
/* harmony import */ var _timeline_modal_edit_timeline_modal_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../timeline-modal-edit/timeline-modal-edit.component */ "./src/app/timeline/timeline-modal-edit/timeline-modal-edit.component.ts");
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











var TimelineListComponent = /** @class */ (function () {
    function TimelineListComponent(_emitter, _saleActivitySv, _notify, _modalService) {
        this._emitter = _emitter;
        this._saleActivitySv = _saleActivitySv;
        this._notify = _notify;
        this._modalService = _modalService;
        this.query = new shared_utils_query_builder__WEBPACK_IMPORTED_MODULE_1__["QueryBuilder"]();
        this.saleActivities = [];
        this._orderArr = [];
        this._filterQuery = {};
    }
    Object.defineProperty(TimelineListComponent.prototype, "orderColumnName", {
        get: function () {
            return this._orderArr.map(function (item) {
                return item.columnName;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimelineListComponent.prototype, "orderType", {
        get: function () {
            return this._orderArr.map(function (item) {
                return item.type;
            });
        },
        enumerable: true,
        configurable: true
    });
    TimelineListComponent.prototype.ngOnInit = function () {
        this._getListSaleActivity();
        this._onEventEmitter();
    };
    TimelineListComponent.prototype._onEventEmitter = function () {
        var _this = this;
        this._subscriber = this._emitter.caseNumber$.subscribe(function (data) {
            if (data && data.type === constants_emitter__WEBPACK_IMPORTED_MODULE_3__["EMITTER_TYPE"].CREATE_SALE_ACTIVITY_2) {
                _this.query.resetQuery();
                _this._getListSaleActivity();
            }
            if (data && data.type === constants_emitter__WEBPACK_IMPORTED_MODULE_3__["EMITTER_TYPE"].FILTER_SALE_ACTIVITY_2) {
                _this.query.resetQuery();
                _this._filterQuery = data.params;
                _this._getListSaleActivity();
            }
        });
    };
    TimelineListComponent.prototype._getListSaleActivity = function () {
        var _this = this;
        var parmas = __assign({}, this.query.queryJSON(), this._filterQuery);
        this._saleActivitySv.getSaleActivitiesList(parmas).subscribe(function (res) {
            _this.saleActivities = res.list;
            _this.query.setQuery(res);
        }, function (errors) {
            _this._notify.error(errors);
        });
    };
    TimelineListComponent.prototype.editSareActivity = function (saleActivity) {
        var config = {
            class: 'modal-lg',
            initialState: {
                saleActivity: lodash_clone__WEBPACK_IMPORTED_MODULE_6__(saleActivity),
            },
        };
        this._openModal(_timeline_modal_edit_timeline_modal_edit_component__WEBPACK_IMPORTED_MODULE_10__["TimelineModalEditComponent"], config);
    };
    TimelineListComponent.prototype.removeSareActivity = function (saleActivity) {
        var config = {
            class: 'modal-md',
            initialState: {
                saleActivity: saleActivity,
            },
        };
        this._openModal(_timeline_modal_delete_timeline_modal_delete_component__WEBPACK_IMPORTED_MODULE_9__["TimelineModalDeleteComponent"], config);
    };
    TimelineListComponent.prototype._openModal = function (comp, config) {
        var _this = this;
        var subscribe = this._modalService.onHidden.subscribe(function (reason) {
            subscribe.unsubscribe();
            if (reason === 'reload') {
                _this._getListSaleActivity();
            }
        });
        this._modalService.show(comp, config);
    };
    TimelineListComponent.prototype.addOrder = function (columnName) {
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
    TimelineListComponent.prototype._orderCustomer = function () {
        this.saleActivities = lodash_orderBy__WEBPACK_IMPORTED_MODULE_7__(this.saleActivities, this.orderColumnName, this.orderType);
    };
    TimelineListComponent.prototype.getClassOrder = function (columnName) {
        if (this._orderArr.length > 0 && this._orderArr[0].columnName === columnName) {
            if (this._orderArr[0].type === 'desc') {
                return 'fa-sort-down';
            }
            return 'fa-sort-up';
        }
        return 'fa-sort';
    };
    TimelineListComponent.prototype.pageChanged = function (event) {
        this.query.currentPage = event.page;
        this._getListSaleActivity();
    };
    TimelineListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline-list',
            template: __webpack_require__(/*! ./timeline-list.component.html */ "./src/app/timeline/timeline-list/timeline-list.component.html"),
            styles: [__webpack_require__(/*! ./timeline-list.component.scss */ "./src/app/timeline/timeline-list/timeline-list.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_2__["EventEmitterService"],
            shared_services_sale_activity_service__WEBPACK_IMPORTED_MODULE_4__["SaleActivityService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]])
    ], TimelineListComponent);
    return TimelineListComponent;
}());



/***/ }),

/***/ "./src/app/timeline/timeline-list/timeline-list.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/timeline/timeline-list/timeline-list.module.ts ***!
  \****************************************************************/
/*! exports provided: TimelineListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineListModule", function() { return TimelineListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _timeline_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline-list.component */ "./src/app/timeline/timeline-list/timeline-list.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var shared_services_sale_activity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/services/sale-activity.service */ "./src/shared/services/sale-activity.service.ts");
/* harmony import */ var _timeline_modal_delete_timeline_modal_delete_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../timeline-modal-delete/timeline-modal-delete.module */ "./src/app/timeline/timeline-modal-delete/timeline-modal-delete.module.ts");
/* harmony import */ var _timeline_modal_edit_timeline_modal_edit_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../timeline-modal-edit/timeline-modal-edit.module */ "./src/app/timeline/timeline-modal-edit/timeline-modal-edit.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TimelineListModule = /** @class */ (function () {
    function TimelineListModule() {
    }
    TimelineListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _timeline_modal_delete_timeline_modal_delete_module__WEBPACK_IMPORTED_MODULE_7__["TimelineModalDeleteModule"],
                _timeline_modal_edit_timeline_modal_edit_module__WEBPACK_IMPORTED_MODULE_8__["TimelineModalEditModule"],
            ],
            declarations: [_timeline_list_component__WEBPACK_IMPORTED_MODULE_2__["TimelineListComponent"]],
            exports: [_timeline_list_component__WEBPACK_IMPORTED_MODULE_2__["TimelineListComponent"]],
            providers: [shared_services_sale_activity_service__WEBPACK_IMPORTED_MODULE_6__["SaleActivityService"]],
        })
    ], TimelineListModule);
    return TimelineListModule;
}());



/***/ }),

/***/ "./src/app/timeline/timeline-modal-delete/timeline-modal-delete.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/timeline/timeline-modal-delete/timeline-modal-delete.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Do you want to delete?</h5>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n\n<div class=\"modal-body\">\n  <div class=\"text-center\">\n    <button type=\"button\" class=\"btn btn-secondary w-25 mr-2\" (click)=\"close()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary w-25 ml-2\" (click)=\"removeSaleActivity()\"\n      [disabled]=\"isLoading\">\n      OK\n      <i *ngIf=\"isLoading\" class=\"fa fa-refresh fa-spin\"></i>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/timeline/timeline-modal-delete/timeline-modal-delete.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/timeline/timeline-modal-delete/timeline-modal-delete.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/timeline/timeline-modal-delete/timeline-modal-delete.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/timeline/timeline-modal-delete/timeline-modal-delete.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TimelineModalDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineModalDeleteComponent", function() { return TimelineModalDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var shared_services_sale_activity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/services/sale-activity.service */ "./src/shared/services/sale-activity.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TimelineModalDeleteComponent = /** @class */ (function () {
    function TimelineModalDeleteComponent(_bsModalRef, _modalService, _saleActivitySv, _notify) {
        this._bsModalRef = _bsModalRef;
        this._modalService = _modalService;
        this._saleActivitySv = _saleActivitySv;
        this._notify = _notify;
        this.isLoading = false;
    }
    TimelineModalDeleteComponent.prototype.ngOnInit = function () { };
    TimelineModalDeleteComponent.prototype.removeSaleActivity = function () {
        var _this = this;
        this.isLoading = true;
        this._saleActivitySv.removeSaleActivity(this.saleActivity.id).subscribe(function (res) {
            _this._notify.success('delete sale activity successs');
            _this.close('reload');
            _this.isLoading = false;
        }, function (errors) {
            _this.isLoading = false;
            _this._notify.error(errors);
        });
    };
    TimelineModalDeleteComponent.prototype.close = function (reason) {
        this._modalService.setDismissReason(reason);
        this._bsModalRef.hide();
    };
    TimelineModalDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline-modal-delete',
            template: __webpack_require__(/*! ./timeline-modal-delete.component.html */ "./src/app/timeline/timeline-modal-delete/timeline-modal-delete.component.html"),
            styles: [__webpack_require__(/*! ./timeline-modal-delete.component.scss */ "./src/app/timeline/timeline-modal-delete/timeline-modal-delete.component.scss")],
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            shared_services_sale_activity_service__WEBPACK_IMPORTED_MODULE_3__["SaleActivityService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__["NotifyService"]])
    ], TimelineModalDeleteComponent);
    return TimelineModalDeleteComponent;
}());



/***/ }),

/***/ "./src/app/timeline/timeline-modal-delete/timeline-modal-delete.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/timeline/timeline-modal-delete/timeline-modal-delete.module.ts ***!
  \********************************************************************************/
/*! exports provided: TimelineModalDeleteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineModalDeleteModule", function() { return TimelineModalDeleteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _timeline_modal_delete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline-modal-delete.component */ "./src/app/timeline/timeline-modal-delete/timeline-modal-delete.component.ts");
/* harmony import */ var shared_services_sale_activity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/services/sale-activity.service */ "./src/shared/services/sale-activity.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TimelineModalDeleteModule = /** @class */ (function () {
    function TimelineModalDeleteModule() {
    }
    TimelineModalDeleteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_timeline_modal_delete_component__WEBPACK_IMPORTED_MODULE_2__["TimelineModalDeleteComponent"]],
            exports: [_timeline_modal_delete_component__WEBPACK_IMPORTED_MODULE_2__["TimelineModalDeleteComponent"]],
            entryComponents: [_timeline_modal_delete_component__WEBPACK_IMPORTED_MODULE_2__["TimelineModalDeleteComponent"]],
            providers: [shared_services_sale_activity_service__WEBPACK_IMPORTED_MODULE_3__["SaleActivityService"]],
        })
    ], TimelineModalDeleteModule);
    return TimelineModalDeleteModule;
}());



/***/ }),

/***/ "./src/app/timeline/timeline-modal-edit/timeline-modal-edit.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/timeline/timeline-modal-edit/timeline-modal-edit.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Update Care Activity</h5>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n\n<div class=\"modal-body customer-edit\">\n  <form #SareActivityForm=\"ngForm\" autocomplete=\"off\" novalidate>\n    <div class=\"row mb-4\">\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label>Customer <i class=\"required\">&#40;*&#41;</i></label>\n        <ng-select\n          [items]=\"customers | async\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingCusotmer\"\n          placeholder=\"please select customer\"\n          [searchable]=\"true\"\n          name=\"customer\"\n          [(ngModel)]=\"saleActivity.customer\"\n          (ngModelChange)=\"changeCustomer()\"\n          bindLabel=\"customerName\"\n          [typeahead]=\"customerInput$\"\n          required>\n        </ng-select>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"Name\">Staff</label>\n        <ng-select\n          [items]=\"staffs\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingStaff\"\n          placeholder=\"please select staff\"\n          [searchable]=\"false\"\n          name=\"assignedStaff\"\n          [(ngModel)]=\"saleActivity.assignedStaff\"\n          bindLabel=\"code_full_name\">\n        </ng-select>\n      </div>\n\n      <!-- <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"Department\">Department</label>\n        <input type=\"text\" id=\"Department\"\n          autocomplete=\"new-department\"\n          class=\"form-control\"\n          name=\"department\"\n          placeholder=\"please enter department\"\n          [(ngModel)]=\"saleActivity.department\">\n      </div> -->\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"typeOfContact\">Activity Type</label>\n        <ng-select\n          [items]=\"statusOfProcesses\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingstatusOfProcess\"\n          placeholder=\"please select activity type\"\n          [searchable]=\"false\"\n          name=\"statusOfProcess\"\n          [(ngModel)]=\"saleActivity.statusOfProcess\"\n          bindLabel=\"name\">\n        </ng-select>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"SaleDate\">Sale Date</label>\n        <input type=\"text\" id=\"SaleDate\"\n          autocomplete=\"new-SaleDate\"\n          readonly\n          placeholder=\"please select sale date\"\n          class=\"form-control\"\n          name=\"saleDate\"\n          bsDatepicker\n          [(bsValue)]=\"saleActivity.dateBinding\"\n          [ngModel]=\"saleActivity.dateBinding\"\n          [bsConfig]=\"DATEPICKER_CONFIG\"\n          (bsValueChange)=\"onValueChange($event)\">\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"Note\">Note</label>\n        <textarea name=\"note\"\n          class=\"form-control\"\n          id=\"Note\"\n          rows=\"5\"\n          autocomplete=\"new-note\"\n          placeholder=\"please enter note\"\n          [(ngModel)]=\"saleActivity.note\"></textarea>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12 text-center\">\n        <button type=\"button\" class=\"btn btn-secondary w-25 mr-2\" (click)=\"close()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary w-25 ml-2\"\n          (click)=\"updateSareActivity()\"\n          [disabled]=\"isLoading || SareActivityForm.form.invalid\">\n          OK\n          <i *ngIf=\"isLoading\" class=\"fa fa-refresh fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/timeline/timeline-modal-edit/timeline-modal-edit.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/timeline/timeline-modal-edit/timeline-modal-edit.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/timeline/timeline-modal-edit/timeline-modal-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/timeline/timeline-modal-edit/timeline-modal-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TimelineModalEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineModalEditComponent", function() { return TimelineModalEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var shared_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/services/customer.service */ "./src/shared/services/customer.service.ts");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/observable/concat */ "./node_modules/rxjs/internal/observable/concat.js");
/* harmony import */ var rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators/tap */ "./node_modules/rxjs/internal/operators/tap.js");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var constants_datepicker_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! constants/datepicker-config */ "./src/constants/datepicker-config.ts");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
/* harmony import */ var models_sale_activity__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! models/sale-activity */ "./src/models/sale-activity.ts");
/* harmony import */ var shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! shared/services/customer-classification.service */ "./src/shared/services/customer-classification.service.ts");
/* harmony import */ var shared_services_sale_activity_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! shared/services/sale-activity.service */ "./src/shared/services/sale-activity.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var app_role_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/role.service */ "./src/app/role.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var TimelineModalEditComponent = /** @class */ (function () {
    function TimelineModalEditComponent(_customerSv, _userSv, _notify, _customerClassificationSv, _saleActivitySv, _bsModalRef, _modalService, _role) {
        this._customerSv = _customerSv;
        this._userSv = _userSv;
        this._notify = _notify;
        this._customerClassificationSv = _customerClassificationSv;
        this._saleActivitySv = _saleActivitySv;
        this._bsModalRef = _bsModalRef;
        this._modalService = _modalService;
        this._role = _role;
        this.isLoading = false;
        this.saleActivity = new models_sale_activity__WEBPACK_IMPORTED_MODULE_13__["SaleActivity"]();
        this.customers = Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        this.customerInput$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isLoadingCusotmer = false;
        this.staffs = [];
        this.isLoadingStaff = false;
        // type of contact
        this.isLoadingstatusOfProcess = false;
        this.statusOfProcesses = [];
        this.DATEPICKER_CONFIG = constants_datepicker_config__WEBPACK_IMPORTED_MODULE_11__["DATEPICKER_CONFIG"];
    }
    TimelineModalEditComponent.prototype.ngOnInit = function () {
        this._initSearchCustomers();
        this._getStaffs();
        this._statusOfProcess();
    };
    TimelineModalEditComponent.prototype._initSearchCustomers = function () {
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
    TimelineModalEditComponent.prototype._searchCustomers = function (customers) {
        var _this = this;
        this.customers = Object(rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_5__["concat"])(Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(customers), // default items
        this.customerInput$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () { return (_this.isLoadingCusotmer = true); }), Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (term) {
            return _this._customerSv
                .filterCustomers({
                page: 0,
                size: 100,
                sort: 'asc',
                column: 'id',
                txtSearch: term || '',
            })
                .map(function (res) { return res.customerList; })
                .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_10__["catchError"])(function () { return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])([]); }), // empty list on error
            Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () { return (_this.isLoadingCusotmer = false); }));
        })));
    };
    TimelineModalEditComponent.prototype._getStaffs = function (opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        this.isLoadingStaff = true;
        this._userSv.getAllUsers(opts).subscribe(function (res) {
            _this.staffs = res;
            var index = _this.staffs.findIndex(function (item) { return _this.saleActivity.assignedStaff && item.id === _this.saleActivity.assignedStaff.id; });
            if (index < 0) {
                _this.saleActivity.assignedStaff = null;
            }
            _this.isLoadingStaff = false;
        }, function (errors) {
            _this.isLoadingStaff = false;
            _this._notify.error(errors);
        });
    };
    TimelineModalEditComponent.prototype.onValueChange = function (event) {
        this.saleActivity.saleDate = event;
    };
    TimelineModalEditComponent.prototype._statusOfProcess = function () {
        var _this = this;
        this.isLoadingstatusOfProcess = true;
        var params = {
            type: 'contact',
        };
        this.statusOfProcesses = [];
        this._customerClassificationSv.getCustomerClassification(params).subscribe(function (res) {
            _this.isLoadingstatusOfProcess = false;
            _this.statusOfProcesses = res.customerClassifications;
        }, function (errors) {
            _this.isLoadingstatusOfProcess = false;
            _this._notify.error(errors);
        });
    };
    TimelineModalEditComponent.prototype.updateSareActivity = function () {
        var _this = this;
        this.isLoading = true;
        this._saleActivitySv.updateSaleActivity(this.saleActivity.id, this.saleActivity.toJSON()).subscribe(function (res) {
            _this.close('reload');
            _this.isLoading = false;
        }, function (errors) {
            _this._notify.error(errors);
            _this.isLoading = false;
        });
    };
    TimelineModalEditComponent.prototype.close = function (reason) {
        this._modalService.setDismissReason(reason);
        this._bsModalRef.hide();
    };
    TimelineModalEditComponent.prototype.changeCustomer = function () {
        if (!this._role.is_admin) {
            return;
        }
        var opts = {};
        if (this.saleActivity.customer) {
            opts.branchId = this.saleActivity.customer.assignedBranchId;
        }
        this._getStaffs(opts);
    };
    TimelineModalEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline-modal-edit',
            template: __webpack_require__(/*! ./timeline-modal-edit.component.html */ "./src/app/timeline/timeline-modal-edit/timeline-modal-edit.component.html"),
            styles: [__webpack_require__(/*! ./timeline-modal-edit.component.scss */ "./src/app/timeline/timeline-modal-edit/timeline-modal-edit.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"],
            shared_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"],
            shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_14__["CustomerClassificationService"],
            shared_services_sale_activity_service__WEBPACK_IMPORTED_MODULE_15__["SaleActivityService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__["BsModalService"],
            app_role_service__WEBPACK_IMPORTED_MODULE_17__["RoleService"]])
    ], TimelineModalEditComponent);
    return TimelineModalEditComponent;
}());



/***/ }),

/***/ "./src/app/timeline/timeline-modal-edit/timeline-modal-edit.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/timeline/timeline-modal-edit/timeline-modal-edit.module.ts ***!
  \****************************************************************************/
/*! exports provided: TimelineModalEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineModalEditModule", function() { return TimelineModalEditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _timeline_modal_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline-modal-edit.component */ "./src/app/timeline/timeline-modal-edit/timeline-modal-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var shared_services_customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/services/customer.service */ "./src/shared/services/customer.service.ts");
/* harmony import */ var shared_services_sale_activity_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/services/sale-activity.service */ "./src/shared/services/sale-activity.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TimelineModalEditModule = /** @class */ (function () {
    function TimelineModalEditModule() {
    }
    TimelineModalEditModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot()],
            declarations: [_timeline_modal_edit_component__WEBPACK_IMPORTED_MODULE_2__["TimelineModalEditComponent"]],
            entryComponents: [_timeline_modal_edit_component__WEBPACK_IMPORTED_MODULE_2__["TimelineModalEditComponent"]],
            exports: [_timeline_modal_edit_component__WEBPACK_IMPORTED_MODULE_2__["TimelineModalEditComponent"]],
            providers: [shared_services_customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"], shared_services_sale_activity_service__WEBPACK_IMPORTED_MODULE_7__["SaleActivityService"]],
        })
    ], TimelineModalEditModule);
    return TimelineModalEditModule;
}());



/***/ }),

/***/ "./src/app/timeline/timeline.component.html":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav nav-tabs timeline-tabs mb-4\">\n  <a class=\"nav-item nav-link\" [routerLink]=\"['/cim/timeline', 'list']\" routerLinkActive=\"active\">Sale Activities</a>\n  <a class=\"nav-item nav-link\"\n    [routerLink]=\"['/cim/timeline', 'create']\"\n    routerLinkActive=\"active\">Create Sale Activity</a>\n</nav>\n\n<router-outlet></router-outlet>\n\n<app-timeline-list></app-timeline-list>\n"

/***/ }),

/***/ "./src/app/timeline/timeline.component.scss":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav.nav-tabs.timeline-tabs a {\n  width: 200px;\n  color: #000; }\n  .nav.nav-tabs.timeline-tabs a.active {\n    color: #39f;\n    border-bottom: 2px solid #39f; }\n"

/***/ }),

/***/ "./src/app/timeline/timeline.component.ts":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
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

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/timeline/timeline.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/timeline/timeline.module.ts":
/*!*********************************************!*\
  !*** ./src/app/timeline/timeline.module.ts ***!
  \*********************************************/
/*! exports provided: TimelineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineModule", function() { return TimelineModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _timeline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _timeline_list_timeline_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeline-list/timeline-list.module */ "./src/app/timeline/timeline-list/timeline-list.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _timeline_component__WEBPACK_IMPORTED_MODULE_2__["TimelineComponent"],
        children: [
            {
                path: 'list',
                loadChildren: './timeline-tree/timeline-tree.module#TimelineTreeModule',
            },
            {
                path: 'create',
                loadChildren: './timeline-create/timeline-create.module#TimelineCreateModule',
            },
            {
                path: '**',
                redirectTo: 'list',
                pathMatch: 'full',
            },
        ],
    },
];
var TimelineModule = /** @class */ (function () {
    function TimelineModule() {
    }
    TimelineModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _timeline_list_timeline_list_module__WEBPACK_IMPORTED_MODULE_4__["TimelineListModule"]],
            declarations: [_timeline_component__WEBPACK_IMPORTED_MODULE_2__["TimelineComponent"]],
        })
    ], TimelineModule);
    return TimelineModule;
}());



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
//# sourceMappingURL=timeline-timeline-module.1fb44562af3d7d55e795.js.map