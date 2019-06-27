(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["policy-manage-folder-policy-manage-folder-module"],{

/***/ "./src/app/ssm/policy/policy-manage-folder/policy-manage-folder.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/ssm/policy/policy-manage-folder/policy-manage-folder.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-4\">\n  <button type=\"button\" class=\"btn btn-primary\"\n    (click)=\"createFolder()\">\n    Create\n    <i *ngIf=\"isLoading\" class=\"fa fa-refresh fa-spin\"></i>\n  </button>\n</div>\n\n<div>\n  <table class=\"table table-hover folder-table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Folder Name</th>\n        <th scope=\"col\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let folder of folders\">\n        <td class=\"text-ellipsis folder-name\" (click)=\"showFolder(folder)\">\n          <i class=\"far fa-folder-open fa-2x mr-2\"></i>\n          {{ folder.name }}\n        </td>\n        <td>\n          <button type=\"button\" class=\"mr-1 btn btn-info\" (click)=\"editFolder(folder)\"><i class=\"fa fa-edit\"></i></button>\n          <button type=\"button\" class=\"mr-1 btn btn-danger\" (click)=\"removeFolder(folder)\"><i class=\"fa fa-trash\"></i></button>\n        </td>\n      </tr>\n      <tr [ngClass]=\"{ 'hidden': folders.length > 0 }\">\n          <td colspan=\"2\" class=\"text-center\">\n            Data not found\n          </td>\n        </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/ssm/policy/policy-manage-folder/policy-manage-folder.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/ssm/policy/policy-manage-folder/policy-manage-folder.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".folder-table.table tbody tr:hover {\n  cursor: pointer; }\n\n.folder-table.table thead th,\n.folder-table.table tbody td {\n  max-width: 0; }\n\n.folder-table.table thead th:last-child,\n  .folder-table.table tbody td:last-child {\n    width: 120px; }\n\n.folder-table.table tbody .folder-name {\n  position: relative;\n  padding-left: 60px; }\n\n.folder-table.table tbody .folder-name i {\n    position: absolute;\n    left: 10px;\n    top: 15px;\n    color: #c3bc4a; }\n"

/***/ }),

/***/ "./src/app/ssm/policy/policy-manage-folder/policy-manage-folder.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/ssm/policy/policy-manage-folder/policy-manage-folder.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PolicyManageFolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyManageFolderComponent", function() { return PolicyManageFolderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _policy_modal_ce_folder_policy_modal_ce_folder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../policy-modal-ce-folder/policy-modal-ce-folder.component */ "./src/app/ssm/policy/policy-modal-ce-folder/policy-modal-ce-folder.component.ts");
/* harmony import */ var models_folder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! models/folder */ "./src/models/folder.ts");
/* harmony import */ var shared_services_folder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/services/folder.service */ "./src/shared/services/folder.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _policy_modal_delete_folder_policy_modal_delete_folder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../policy-modal-delete-folder/policy-modal-delete-folder.component */ "./src/app/ssm/policy/policy-modal-delete-folder/policy-modal-delete-folder.component.ts");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PolicyManageFolderComponent = /** @class */ (function () {
    function PolicyManageFolderComponent(_modalService, _folderSv, _router, _notify) {
        this._modalService = _modalService;
        this._folderSv = _folderSv;
        this._router = _router;
        this._notify = _notify;
        this.folders = [];
        this.isLoading = false;
    }
    PolicyManageFolderComponent.prototype.ngOnInit = function () {
        this._getListFolders();
    };
    PolicyManageFolderComponent.prototype.showFolder = function (folder) {
        this._router.navigate(['/ssm/policy/folders', folder.id]);
    };
    PolicyManageFolderComponent.prototype._getListFolders = function () {
        var _this = this;
        this.isLoading = true;
        this._folderSv.getListFolder().subscribe(function (res) {
            _this.folders = res;
            _this.isLoading = false;
        }, function (errors) {
            _this._notify.error(errors);
            _this.isLoading = false;
        });
    };
    PolicyManageFolderComponent.prototype.createFolder = function () {
        var config = {
            initialState: {
                folder: new models_folder__WEBPACK_IMPORTED_MODULE_3__["Folder"](),
            },
        };
        this._openModal(_policy_modal_ce_folder_policy_modal_ce_folder_component__WEBPACK_IMPORTED_MODULE_2__["PolicyModalCeFolderComponent"], config);
    };
    PolicyManageFolderComponent.prototype.editFolder = function (folder) {
        var config = {
            initialState: {
                folder: lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_8__(folder),
            },
        };
        this._openModal(_policy_modal_ce_folder_policy_modal_ce_folder_component__WEBPACK_IMPORTED_MODULE_2__["PolicyModalCeFolderComponent"], config);
    };
    PolicyManageFolderComponent.prototype.removeFolder = function (folder) {
        var config = {
            initialState: {
                folder: folder,
            },
        };
        this._openModal(_policy_modal_delete_folder_policy_modal_delete_folder_component__WEBPACK_IMPORTED_MODULE_6__["PolicyModalDeleteFolderComponent"], config);
    };
    PolicyManageFolderComponent.prototype._openModal = function (comp, config) {
        var _this = this;
        var subscribe = this._modalService.onHidden.subscribe(function (reason) {
            subscribe.unsubscribe();
            if (reason === 'reload') {
                _this._getListFolders();
            }
        });
        this._modalService.show(comp, config);
    };
    PolicyManageFolderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-policy-manage-folder',
            template: __webpack_require__(/*! ./policy-manage-folder.component.html */ "./src/app/ssm/policy/policy-manage-folder/policy-manage-folder.component.html"),
            styles: [__webpack_require__(/*! ./policy-manage-folder.component.scss */ "./src/app/ssm/policy/policy-manage-folder/policy-manage-folder.component.scss")],
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            shared_services_folder_service__WEBPACK_IMPORTED_MODULE_4__["FolderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_7__["NotifyService"]])
    ], PolicyManageFolderComponent);
    return PolicyManageFolderComponent;
}());



/***/ }),

/***/ "./src/app/ssm/policy/policy-manage-folder/policy-manage-folder.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/ssm/policy/policy-manage-folder/policy-manage-folder.module.ts ***!
  \********************************************************************************/
/*! exports provided: PolicyManageFolderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyManageFolderModule", function() { return PolicyManageFolderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _policy_manage_folder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./policy-manage-folder.component */ "./src/app/ssm/policy/policy-manage-folder/policy-manage-folder.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _policy_modal_ce_folder_policy_modal_ce_folder_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../policy-modal-ce-folder/policy-modal-ce-folder.module */ "./src/app/ssm/policy/policy-modal-ce-folder/policy-modal-ce-folder.module.ts");
/* harmony import */ var shared_services_folder_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/services/folder.service */ "./src/shared/services/folder.service.ts");
/* harmony import */ var _policy_modal_delete_folder_policy_modal_delete_folder_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../policy-modal-delete-folder/policy-modal-delete-folder.module */ "./src/app/ssm/policy/policy-modal-delete-folder/policy-modal-delete-folder.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _policy_manage_folder_component__WEBPACK_IMPORTED_MODULE_2__["PolicyManageFolderComponent"],
    },
];
var PolicyManageFolderModule = /** @class */ (function () {
    function PolicyManageFolderModule() {
    }
    PolicyManageFolderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                _policy_modal_ce_folder_policy_modal_ce_folder_module__WEBPACK_IMPORTED_MODULE_6__["PolicyModalCeFolderModule"],
                _policy_modal_delete_folder_policy_modal_delete_folder_module__WEBPACK_IMPORTED_MODULE_8__["PolicyModalFolderDeleteModule"],
            ],
            declarations: [_policy_manage_folder_component__WEBPACK_IMPORTED_MODULE_2__["PolicyManageFolderComponent"]],
            providers: [shared_services_folder_service__WEBPACK_IMPORTED_MODULE_7__["FolderService"]],
        })
    ], PolicyManageFolderModule);
    return PolicyManageFolderModule;
}());



/***/ }),

/***/ "./src/app/ssm/policy/policy-modal-ce-folder/policy-modal-ce-folder.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/ssm/policy/policy-modal-ce-folder/policy-modal-ce-folder.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">{{ folder.id ? 'Update' : 'Create' }} Folder</h5>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n\n<div class=\"modal-body customer-edit\">\n  <form #FolderForm=\"ngForm\" autocomplete=\"off\" novalidate>\n    <div class=\"row mb-4\">\n      <div class=\"col-12\">\n        <div class=\"form-group\">\n          <label for=\"folderName\">Folder Name <i class=\"required\">&#40;*&#41;</i></label>\n          <input type=\"text\" id=\"folderName\"\n            autocomplete=\"new-name\"\n            class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': FolderName.dirty && FolderName.errors }\"\n            name=\"folderName\"\n            #FolderName=\"ngModel\"\n            required\n            placeholder=\"please enter name\"\n            [(ngModel)]=\"folder.name\">\n\n          <div class=\"invalid-feedback\"\n            *ngIf=\"FolderName.errors?.required\">\n            Please enter folder's name\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12 text-center\">\n        <button type=\"button\" class=\"btn btn-secondary w-25 mr-2\" (click)=\"close()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary w-25 ml-2\"\n          (click)=\"createOrUpdateFolder()\"\n          [disabled]=\"isLoading || FolderForm.form.invalid\">\n          OK\n          <i *ngIf=\"isLoading\" class=\"fa fa-refresh fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/ssm/policy/policy-modal-ce-folder/policy-modal-ce-folder.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/ssm/policy/policy-modal-ce-folder/policy-modal-ce-folder.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ssm/policy/policy-modal-ce-folder/policy-modal-ce-folder.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/ssm/policy/policy-modal-ce-folder/policy-modal-ce-folder.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PolicyModalCeFolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyModalCeFolderComponent", function() { return PolicyModalCeFolderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var shared_services_folder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/services/folder.service */ "./src/shared/services/folder.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PolicyModalCeFolderComponent = /** @class */ (function () {
    function PolicyModalCeFolderComponent(_bsModalRef, _modalService, _notify, _folderSv) {
        this._bsModalRef = _bsModalRef;
        this._modalService = _modalService;
        this._notify = _notify;
        this._folderSv = _folderSv;
        this.isLoading = false;
    }
    PolicyModalCeFolderComponent.prototype.ngOnInit = function () { };
    PolicyModalCeFolderComponent.prototype.createOrUpdateFolder = function () {
        if (this.folder.id) {
            this._updateFolder();
            return;
        }
        this._createFolder();
    };
    PolicyModalCeFolderComponent.prototype._createFolder = function () {
        var _this = this;
        this.isLoading = true;
        this._folderSv.createFolder(this.folder.toJSON()).subscribe(function (res) {
            _this.close('reload');
            _this.isLoading = false;
            _this._notify.success('create folder success');
        }, function (errors) {
            _this.isLoading = false;
        });
    };
    PolicyModalCeFolderComponent.prototype._updateFolder = function () {
        var _this = this;
        this.isLoading = true;
        this._folderSv.updateFolder(this.folder.id, this.folder.toJSON()).subscribe(function (res) {
            _this.close('reload');
            _this.isLoading = false;
            _this._notify.success('update folder success');
        }, function (errors) {
            _this.isLoading = false;
        });
    };
    PolicyModalCeFolderComponent.prototype.close = function (reason) {
        this._modalService.setDismissReason(reason);
        this._bsModalRef.hide();
    };
    PolicyModalCeFolderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-policy-modal-ce-folder',
            template: __webpack_require__(/*! ./policy-modal-ce-folder.component.html */ "./src/app/ssm/policy/policy-modal-ce-folder/policy-modal-ce-folder.component.html"),
            styles: [__webpack_require__(/*! ./policy-modal-ce-folder.component.scss */ "./src/app/ssm/policy/policy-modal-ce-folder/policy-modal-ce-folder.component.scss")],
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__["NotifyService"],
            shared_services_folder_service__WEBPACK_IMPORTED_MODULE_3__["FolderService"]])
    ], PolicyModalCeFolderComponent);
    return PolicyModalCeFolderComponent;
}());



/***/ }),

/***/ "./src/app/ssm/policy/policy-modal-ce-folder/policy-modal-ce-folder.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/ssm/policy/policy-modal-ce-folder/policy-modal-ce-folder.module.ts ***!
  \************************************************************************************/
/*! exports provided: PolicyModalCeFolderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyModalCeFolderModule", function() { return PolicyModalCeFolderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _policy_modal_ce_folder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./policy-modal-ce-folder.component */ "./src/app/ssm/policy/policy-modal-ce-folder/policy-modal-ce-folder.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PolicyModalCeFolderModule = /** @class */ (function () {
    function PolicyModalCeFolderModule() {
    }
    PolicyModalCeFolderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            declarations: [_policy_modal_ce_folder_component__WEBPACK_IMPORTED_MODULE_2__["PolicyModalCeFolderComponent"]],
            entryComponents: [_policy_modal_ce_folder_component__WEBPACK_IMPORTED_MODULE_2__["PolicyModalCeFolderComponent"]],
            exports: [_policy_modal_ce_folder_component__WEBPACK_IMPORTED_MODULE_2__["PolicyModalCeFolderComponent"]],
        })
    ], PolicyModalCeFolderModule);
    return PolicyModalCeFolderModule;
}());



/***/ }),

/***/ "./src/app/ssm/policy/policy-modal-delete-folder/policy-modal-delete-folder.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/ssm/policy/policy-modal-delete-folder/policy-modal-delete-folder.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Do you want to delete?</h5>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n\n<div class=\"modal-body\">\n  <div class=\"text-center\">\n    <button type=\"button\" class=\"btn btn-secondary w-25 mr-2\" (click)=\"close()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary w-25 ml-2\" (click)=\"removeFolder()\"\n    [disabled]=\"isLoading\">\n    OK\n    <i *ngIf=\"isLoading\" class=\"fa fa-refresh fa-spin\"></i>\n  </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ssm/policy/policy-modal-delete-folder/policy-modal-delete-folder.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/ssm/policy/policy-modal-delete-folder/policy-modal-delete-folder.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ssm/policy/policy-modal-delete-folder/policy-modal-delete-folder.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/ssm/policy/policy-modal-delete-folder/policy-modal-delete-folder.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PolicyModalDeleteFolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyModalDeleteFolderComponent", function() { return PolicyModalDeleteFolderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var shared_services_folder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/services/folder.service */ "./src/shared/services/folder.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PolicyModalDeleteFolderComponent = /** @class */ (function () {
    function PolicyModalDeleteFolderComponent(_bsModalRef, _modalService, _folderSv, _notify) {
        this._bsModalRef = _bsModalRef;
        this._modalService = _modalService;
        this._folderSv = _folderSv;
        this._notify = _notify;
        this.isLoading = false;
    }
    PolicyModalDeleteFolderComponent.prototype.ngOnInit = function () { };
    PolicyModalDeleteFolderComponent.prototype.removeFolder = function () {
        var _this = this;
        this.isLoading = true;
        this._folderSv.deleteFolder(this.folder.id).subscribe(function (res) {
            _this._notify.success('delete folder successs');
            _this.close('reload');
            _this.isLoading = false;
        }, function (errors) {
            _this.isLoading = false;
            _this._notify.error(errors);
        });
    };
    PolicyModalDeleteFolderComponent.prototype.close = function (reason) {
        this._modalService.setDismissReason(reason);
        this._bsModalRef.hide();
    };
    PolicyModalDeleteFolderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-policy-modal-delete-folder',
            template: __webpack_require__(/*! ./policy-modal-delete-folder.component.html */ "./src/app/ssm/policy/policy-modal-delete-folder/policy-modal-delete-folder.component.html"),
            styles: [__webpack_require__(/*! ./policy-modal-delete-folder.component.scss */ "./src/app/ssm/policy/policy-modal-delete-folder/policy-modal-delete-folder.component.scss")],
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            shared_services_folder_service__WEBPACK_IMPORTED_MODULE_3__["FolderService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__["NotifyService"]])
    ], PolicyModalDeleteFolderComponent);
    return PolicyModalDeleteFolderComponent;
}());



/***/ }),

/***/ "./src/app/ssm/policy/policy-modal-delete-folder/policy-modal-delete-folder.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/ssm/policy/policy-modal-delete-folder/policy-modal-delete-folder.module.ts ***!
  \********************************************************************************************/
/*! exports provided: PolicyModalFolderDeleteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyModalFolderDeleteModule", function() { return PolicyModalFolderDeleteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _policy_modal_delete_folder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./policy-modal-delete-folder.component */ "./src/app/ssm/policy/policy-modal-delete-folder/policy-modal-delete-folder.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PolicyModalFolderDeleteModule = /** @class */ (function () {
    function PolicyModalFolderDeleteModule() {
    }
    PolicyModalFolderDeleteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_policy_modal_delete_folder_component__WEBPACK_IMPORTED_MODULE_2__["PolicyModalDeleteFolderComponent"]],
            entryComponents: [_policy_modal_delete_folder_component__WEBPACK_IMPORTED_MODULE_2__["PolicyModalDeleteFolderComponent"]],
            exports: [_policy_modal_delete_folder_component__WEBPACK_IMPORTED_MODULE_2__["PolicyModalDeleteFolderComponent"]],
        })
    ], PolicyModalFolderDeleteModule);
    return PolicyModalFolderDeleteModule;
}());



/***/ }),

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



/***/ })

}]);
//# sourceMappingURL=policy-manage-folder-policy-manage-folder-module.c55fb68a08bdce8bb867.js.map