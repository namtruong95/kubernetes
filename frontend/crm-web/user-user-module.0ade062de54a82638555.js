(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./src/app/user/user-list/user-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/user-list/user-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive py-4\">\n  <span>Showing {{ query.from }} to {{ query.to }} of {{ query.totalElements }} entries</span>\n  <table class=\"table user-table\">\n    <thead>\n      <tr>\n        <th>Action</th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('userName')\">\n          User Name\n          <i class=\"fa {{ getClassOrder('userName') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('role')\">\n          Role\n          <i class=\"fa {{ getClassOrder('role') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('fullName')\">\n          Full Name\n          <i class=\"fa {{ getClassOrder('fullName') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('email')\">\n          Email\n          <i class=\"fa {{ getClassOrder('email') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('phone')\">\n          Phone\n          <i class=\"fa {{ getClassOrder('phone') }}\"></i>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let user of userList;\">\n        <td>\n          <button type=\"button\" class=\"mr-1 btn btn-info\" (click)=\"editUser(user)\"><i class=\"fa fa-edit\"></i></button>\n        </td>\n        <td>{{ user.userName }}</td>\n        <td>{{ user.role }}</td>\n        <td>{{ user.fullName }}</td>\n        <td>{{ user.email }}</td>\n        <td>{{ user.phone }}</td>\n      </tr>\n      <tr [ngClass]=\"{ 'hidden': userList.length > 0 }\">\n        <td colspan=\"6\" class=\"text-center\">\n          Data not found\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"pagination mt-4\" [ngClass]=\"{ 'hidden': userList.length === 0 }\">\n  <pagination\n    class=\"pagination-md\"\n    [totalItems]=\"query.totalElements\"\n    [(ngModel)]=\"query.currentPage\"\n    pageBtnClass=\"btn\"\n    [itemsPerPage]=\"query.size\"\n    [maxSize]=\"5\"\n    (pageChanged)=\"pageChanged($event)\"\n    previousText=\"&lsaquo;\"\n    nextText=\"&rsaquo;\"\n    firstText=\"&laquo;\"\n    lastText=\"&raquo;\">\n  </pagination>\n</div>\n"

/***/ }),

/***/ "./src/app/user/user-list/user-list.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/user/user-list/user-list.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-table.table thead th,\n.user-table.table tbody td {\n  min-width: 200px; }\n  .user-table.table thead th:first-child,\n  .user-table.table tbody td:first-child {\n    min-width: 100px;\n    max-width: 100px; }\n"

/***/ }),

/***/ "./src/app/user/user-list/user-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-list/user-list.component.ts ***!
  \*******************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_utils_query_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/utils/query-builder */ "./src/shared/utils/query-builder.ts");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/orderBy */ "./node_modules/lodash/orderBy.js");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _user_modal_edit_user_modal_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user-modal-edit/user-modal-edit.component */ "./src/app/user/user-modal-edit/user-modal-edit.component.ts");
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










var UserListComponent = /** @class */ (function () {
    function UserListComponent(_notify, _emitter, _modalService, _userSv) {
        this._notify = _notify;
        this._emitter = _emitter;
        this._modalService = _modalService;
        this._userSv = _userSv;
        this.isLoading = false;
        this.query = new shared_utils_query_builder__WEBPACK_IMPORTED_MODULE_1__["QueryBuilder"]();
        this.userList = [];
        this._orderArr = [];
    }
    Object.defineProperty(UserListComponent.prototype, "orderColumnName", {
        get: function () {
            return this._orderArr.map(function (item) {
                return item.columnName;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserListComponent.prototype, "orderType", {
        get: function () {
            return this._orderArr.map(function (item) {
                return item.type;
            });
        },
        enumerable: true,
        configurable: true
    });
    UserListComponent.prototype.ngOnInit = function () {
        this._getUsers();
        this._onEventEmitter();
    };
    UserListComponent.prototype.ngOnDestroy = function () {
        this._subscriber.unsubscribe();
    };
    UserListComponent.prototype._onEventEmitter = function () {
        var _this = this;
        this._subscriber = this._emitter.caseNumber$.subscribe(function (data) {
            if (data && data.type === constants_emitter__WEBPACK_IMPORTED_MODULE_4__["EMITTER_TYPE"].CREATE_USER) {
                _this.query.resetQuery();
                _this._getUsers();
            }
        });
    };
    UserListComponent.prototype._getUsers = function () {
        var _this = this;
        this.isLoading = true;
        var params = __assign({}, this.query.queryJSON());
        this._userSv.getUsers(params).subscribe(function (res) {
            _this.query.setQuery(res);
            _this.userList = res.listUsers;
            _this.isLoading = false;
        }, function (errors) {
            _this._notify.error(errors);
            _this.isLoading = false;
        });
    };
    UserListComponent.prototype.pageChanged = function (event) {
        this.query.currentPage = event.page;
        this._getUsers();
    };
    UserListComponent.prototype.editUser = function (user) {
        var config = {
            class: 'modal-lg',
            initialState: {
                user: lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_8__(user),
            },
        };
        this._openModal(_user_modal_edit_user_modal_edit_component__WEBPACK_IMPORTED_MODULE_9__["UserModalEditComponent"], config);
    };
    UserListComponent.prototype._openModal = function (comp, config) {
        var _this = this;
        var subscribe = this._modalService.onHidden.subscribe(function (reason) {
            subscribe.unsubscribe();
            if (reason === 'reload') {
                _this._getUsers();
            }
        });
        this._modalService.show(comp, config);
    };
    UserListComponent.prototype.addOrder = function (columnName) {
        var _this = this;
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
    UserListComponent.prototype._orderCustomer = function () {
        this.userList = lodash_orderBy__WEBPACK_IMPORTED_MODULE_7__(this.userList, this.orderColumnName, this.orderType);
    };
    UserListComponent.prototype.getClassOrder = function (columnName) {
        if (this._orderArr.length > 0 && this._orderArr[0].columnName === columnName) {
            if (this._orderArr[0].type === 'desc') {
                return 'fa-sort-down';
            }
            return 'fa-sort-up';
        }
        return 'fa-sort';
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/user/user-list/user-list.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__["NotifyService"],
            shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/user/user-list/user-list.module.ts":
/*!****************************************************!*\
  !*** ./src/app/user/user-list/user-list.module.ts ***!
  \****************************************************/
/*! exports provided: UserListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListModule", function() { return UserListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list.component */ "./src/app/user/user-list/user-list.component.ts");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
/* harmony import */ var _user_modal_edit_user_modal_edit_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-modal-edit/user-modal-edit.module */ "./src/app/user/user-modal-edit/user-modal-edit.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserListModule = /** @class */ (function () {
    function UserListModule() {
    }
    UserListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _user_modal_edit_user_modal_edit_module__WEBPACK_IMPORTED_MODULE_7__["UserModalEditModule"]],
            declarations: [_user_list_component__WEBPACK_IMPORTED_MODULE_2__["UserListComponent"]],
            exports: [_user_list_component__WEBPACK_IMPORTED_MODULE_2__["UserListComponent"]],
            providers: [shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]],
        })
    ], UserListModule);
    return UserListModule;
}());



/***/ }),

/***/ "./src/app/user/user-modal-edit/user-modal-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/user-modal-edit/user-modal-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Update User</h5>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n\n<div class=\"modal-body user-edit\">\n  <form #UserEdit=\"ngForm\" novalidate>\n    <div class=\"row mb-4\">\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"userName\">User Name</label>\n          <input type=\"text\" id=\"userName\"\n            autocomplete=\"new-userName\"\n            class=\"form-control form-control-plaintext\"\n            [ngClass]=\"{ 'is-invalid': UserName.dirty && UserName.errors }\"\n            name=\"userName\"\n            placeholder=\"please enter user name\"\n            [(ngModel)]=\"user.userName\"\n            #UserName=\"ngModel\"\n            required\n            readonly\n            [pattern]=\"rules.userName\">\n\n          <div class=\"invalid-feedback\"\n            *ngIf=\"UserName.errors?.required\">\n            Please enter user name\n          </div>\n\n          <div class=\"invalid-feedback\"\n            *ngIf=\"UserName.errors?.pattern\">\n            Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"role\">Role</label>\n          <ng-select\n            [items]=\"ROLES\"\n            class=\"text-left readonly\"\n            [closeOnSelect]=\"true\"\n            [clearable]=\"true\"\n            [loading]=\"false\"\n            placeholder=\"please select role\"\n            [searchable]=\"false\"\n            name=\"role\"\n            [(ngModel)]=\"user.role\"\n            #Role=\"ngModel\"\n            bindLabel=\"label\"\n            bindValue=\"value\"\n            required\n            readonly\n            disabled>\n          </ng-select>\n\n          <div class=\"invalid-feedback\"\n            *ngIf=\"Role.errors?.required\">\n            Please select role\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"fullName\">Full Name <i class=\"required\">&#40;*&#41;</i></label>\n          <input type=\"text\" id=\"fullName\"\n            autocomplete=\"new-fullName\"\n            class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': FullName.dirty && FullName.errors }\"\n            name=\"fullName\"\n            placeholder=\"please enter full name\"\n            [(ngModel)]=\"user.fullName\"\n            #FullName=\"ngModel\"\n            required>\n\n          <div class=\"invalid-feedback\"\n            *ngIf=\"FullName.errors?.required\">\n            Please enter full name\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"role\">Branch <i class=\"required\">&#40;*&#41;</i></label>\n          <ng-select\n            [items]=\"branches\"\n            class=\"text-left\"\n            [closeOnSelect]=\"true\"\n            [clearable]=\"true\"\n            [loading]=\"isLoadingBranch\"\n            placeholder=\"please select branch\"\n            [searchable]=\"false\"\n            name=\"branches\"\n            [(ngModel)]=\"user.branchId\"\n            #Branch=\"ngModel\"\n            bindLabel=\"name\"\n            bindValue=\"id\"\n            required>\n          </ng-select>\n\n          <div class=\"invalid-feedback\"\n            *ngIf=\"Branch.errors?.required\">\n            Please select branch\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"EmailEdit\">Email</label>\n          <input type=\"text\" id=\"EmailEdit\"\n            autocomplete=\"new-email\"\n            class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': EmailEdit.dirty && EmailEdit.errors }\"\n            name=\"email_edit\"\n            placeholder=\"please enter email\"\n            [(ngModel)]=\"user.email\"\n            #EmailEdit=\"ngModel\"\n            [pattern]=\"rules.email\">\n\n          <div class=\"invalid-feedback\"\n            *ngIf=\"EmailEdit.errors?.pattern\">\n            The email address format is incorrect\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"phone\">Phone</label>\n          <input type=\"text\" id=\"phone\"\n            autocomplete=\"new-phone\"\n            class=\"form-control\"\n            name=\"phone\"\n            placeholder=\"please enter phone\"\n            [(ngModel)]=\"user.phone\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group text-center\">\n      <button type=\"button\" class=\"btn btn-secondary w-25 mr-2\" (click)=\"close()\">Cancel</button>\n      <button type=\"button\" class=\"btn btn-primary w-25 ml-2\"\n        (click)=\"updateUser()\"\n        [disabled]=\"isLoading || UserEdit.form.invalid\">\n        OK\n        <i *ngIf=\"isLoading\" class=\"fa fa-refresh fa-spin\"></i>\n      </button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/user/user-modal-edit/user-modal-edit.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/user/user-modal-edit/user-modal-edit.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-modal-edit/user-modal-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/user-modal-edit/user-modal-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserModalEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModalEditComponent", function() { return UserModalEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/user */ "./src/models/user.ts");
/* harmony import */ var app_guard_roles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/guard/roles */ "./src/app/guard/roles.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var shared_services_branch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/services/branch.service */ "./src/shared/services/branch.service.ts");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
/* harmony import */ var constants_reg_exp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! constants/reg-exp */ "./src/constants/reg-exp.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserModalEditComponent = /** @class */ (function () {
    function UserModalEditComponent(_bsModalRef, _modalService, _notify, _branchSv, _userSv) {
        this._bsModalRef = _bsModalRef;
        this._modalService = _modalService;
        this._notify = _notify;
        this._branchSv = _branchSv;
        this._userSv = _userSv;
        this.user = new models_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.ROLES = app_guard_roles__WEBPACK_IMPORTED_MODULE_2__["ROLES"];
        this.rules = constants_reg_exp__WEBPACK_IMPORTED_MODULE_7__["RegExp"];
        // branches
        this.branches = [];
        this.isLoadingBranch = false;
        this.isLoading = false;
    }
    UserModalEditComponent.prototype.ngOnInit = function () {
        this._getBranchList();
    };
    UserModalEditComponent.prototype._getBranchList = function () {
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
    UserModalEditComponent.prototype.updateUser = function () {
        var _this = this;
        this._userSv.updateUser(this.user.id, this.user.toJSON()).subscribe(function (res) {
            _this._notify.success(res.meta.message);
            _this.close('reload');
            _this.isLoading = false;
        }, function (errors) {
            _this.isLoading = false;
            _this._notify.error(errors);
        });
    };
    UserModalEditComponent.prototype.close = function (reason) {
        this._modalService.setDismissReason(reason);
        this._bsModalRef.hide();
    };
    UserModalEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-modal-edit',
            template: __webpack_require__(/*! ./user-modal-edit.component.html */ "./src/app/user/user-modal-edit/user-modal-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-modal-edit.component.scss */ "./src/app/user/user-modal-edit/user-modal-edit.component.scss")],
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"],
            shared_services_branch_service__WEBPACK_IMPORTED_MODULE_5__["BranchService"],
            shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], UserModalEditComponent);
    return UserModalEditComponent;
}());



/***/ }),

/***/ "./src/app/user/user-modal-edit/user-modal-edit.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/user/user-modal-edit/user-modal-edit.module.ts ***!
  \****************************************************************/
/*! exports provided: UserModalEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModalEditModule", function() { return UserModalEditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_modal_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-modal-edit.component */ "./src/app/user/user-modal-edit/user-modal-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
/* harmony import */ var shared_services_branch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/services/branch.service */ "./src/shared/services/branch.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UserModalEditModule = /** @class */ (function () {
    function UserModalEditModule() {
    }
    UserModalEditModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"]],
            declarations: [_user_modal_edit_component__WEBPACK_IMPORTED_MODULE_2__["UserModalEditComponent"]],
            entryComponents: [_user_modal_edit_component__WEBPACK_IMPORTED_MODULE_2__["UserModalEditComponent"]],
            exports: [_user_modal_edit_component__WEBPACK_IMPORTED_MODULE_2__["UserModalEditComponent"]],
            providers: [shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], shared_services_branch_service__WEBPACK_IMPORTED_MODULE_5__["BranchService"]],
        })
    ], UserModalEditModule);
    return UserModalEditModule;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav nav-tabs cim-tabs mb-4\">\n  <!-- <a class=\"nav-item nav-link\" [routerLink]=\"['/users', 'filters']\" routerLinkActive=\"active\">User Information</a> -->\n  <a class=\"nav-item nav-link\" [routerLink]=\"['/users', 'create']\" routerLinkActive=\"active\">Users Create</a>\n</nav>\n\n<div class=\"row m-0\">\n  <div class=\"col-lg-12\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n<div>\n  <app-user-list></app-user-list>\n</div>\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
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

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () { };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_list_user_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.module */ "./src/app/user/user-list/user-list.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
        children: [
            {
                path: 'create',
                loadChildren: './user-create/user-create.module#UserCreateModule',
            },
            {
                path: '',
                redirectTo: 'create',
                pathMatch: 'full',
            },
        ],
    },
];
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_list_user_list_module__WEBPACK_IMPORTED_MODULE_4__["UserListModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]],
        })
    ], UserModule);
    return UserModule;
}());



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



/***/ })

}]);
//# sourceMappingURL=user-user-module.0ade062de54a82638555.js.map