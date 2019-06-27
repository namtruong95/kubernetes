(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bts-create-bts-create-module"],{

/***/ "./src/app/ssm/bts/bts-create/bts-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/ssm/bts/bts-create/bts-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #BtsForm=\"ngForm\" novalidate>\n  <div class=\"row mb-4 bts-form-content\">\n    <div class=\"col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"siteCode\">Site Code <i class=\"required\">&#40;*&#41;</i></label>\n        <input type=\"text\" id=\"siteCode\"\n          autocomplete=\"new-siteCode\"\n          class=\"form-control\"\n          name=\"siteCode\"\n          [ngClass]=\"{ 'is-invalid': SiteCode.dirty && SiteCode.errors }\"\n          #SiteCode=\"ngModel\"\n          required\n          placeholder=\"please enter site code\"\n          [(ngModel)]=\"bts.siteCode\">\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"SiteCode.errors?.required\">\n          Please enter site code\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"address\">Address <i class=\"required\">&#40;*&#41;</i></label>\n        <input type=\"text\" id=\"address\"\n          autocomplete=\"new-address\"\n          class=\"form-control\"\n          name=\"address\"\n          [ngClass]=\"{ 'is-invalid': Address.dirty && Address.errors }\"\n          #Address=\"ngModel\"\n          required\n          placeholder=\"please enter address\"\n          [(ngModel)]=\"bts.address\">\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"Address.errors?.required\">\n          Please enter address\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"latitude\">Latitude <i class=\"required\">&#40;*&#41;</i></label>\n        <input type=\"number\" id=\"latitude\"\n          autocomplete=\"new-latitude\"\n          class=\"form-control\"\n          name=\"latitude\"\n          [ngClass]=\"{ 'is-invalid': Latitude.dirty && Latitude.errors }\"\n          #Latitude=\"ngModel\"\n          required\n          placeholder=\"please enter latitude\"\n          [(ngModel)]=\"bts.latitude\"\n          (ngModelChange)=\"changeLatLng()\"\n          (blur)=\"findAddressWithLatLng()\">\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"Latitude.errors?.required\">\n          Please enter latitude\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"longitude\">Longitude <i class=\"required\">&#40;*&#41;</i></label>\n        <input type=\"number\" id=\"longitude\"\n          autocomplete=\"new-longitude\"\n          class=\"form-control\"\n          name=\"longitude\"\n          [ngClass]=\"{ 'is-invalid': Longitude.dirty && Longitude.errors }\"\n          #Longitude=\"ngModel\"\n          required\n          placeholder=\"please enter longitude\"\n          [(ngModel)]=\"bts.longitude\"\n          (ngModelChange)=\"changeLatLng()\"\n          (blur)=\"findAddressWithLatLng()\">\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"Longitude.errors?.required\">\n          Please enter longitude\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"Region\">State/Region <i class=\"required\">&#40;*&#41;</i></label>\n        <ng-select\n          [items]=\"branches\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingBranch\"\n          placeholder=\"please select state/region\"\n          [searchable]=\"false\"\n          name=\"branches\"\n          [(ngModel)]=\"bts.branchId\"\n          (ngModelChange)=\"getDistrictList(); getRegionAndZoomTo()\"\n          #Region=\"ngModel\"\n          bindLabel=\"name\"\n          bindValue=\"id\"\n          required>\n        </ng-select>\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"Region.errors?.required\">\n          Please select state/region\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"District\">District <i class=\"required\">&#40;*&#41;</i></label>\n        <ng-select\n          [items]=\"districts\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingDistrict\"\n          placeholder=\"please select district\"\n          [searchable]=\"false\"\n          name=\"districts\"\n          [(ngModel)]=\"bts.districtId\"\n          (ngModelChange)=\"getTownshipList(); getDistrictAndZoomTo()\"\n          #District=\"ngModel\"\n          bindLabel=\"name\"\n          bindValue=\"id\"\n          required>\n        </ng-select>\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"District.errors?.required\">\n          Please select district\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"Township\">Township <i class=\"required\">&#40;*&#41;</i></label>\n        <ng-select\n          [items]=\"townships\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingTownship\"\n          placeholder=\"please select township\"\n          [searchable]=\"false\"\n          name=\"townships\"\n          [(ngModel)]=\"bts.townshipId\"\n          (ngModelChange)=\"getTownshipAndZoomTo()\"\n          #Township=\"ngModel\"\n          bindLabel=\"name\"\n          bindValue=\"id\"\n          required>\n        </ng-select>\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"Township.errors?.required\">\n          Please select township\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <button type=\"button\" class=\"btn btn-primary\"\n      (click)=\"createBts(BtsForm)\"\n      [disabled]=\"isLoading || BtsForm.form.invalid\">\n      Create\n      <i *ngIf=\"isLoading\" class=\"fa fa-refresh fa-spin\"></i>\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/ssm/bts/bts-create/bts-create.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/ssm/bts/bts-create/bts-create.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ssm/bts/bts-create/bts-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/ssm/bts/bts-create/bts-create.component.ts ***!
  \************************************************************/
/*! exports provided: BtsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtsCreateComponent", function() { return BtsCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var models_bts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/bts */ "./src/models/bts.ts");
/* harmony import */ var shared_services_bts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/services/bts.service */ "./src/shared/services/bts.service.ts");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
/* harmony import */ var shared_services_branch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/services/branch.service */ "./src/shared/services/branch.service.ts");
/* harmony import */ var shared_services_gmap_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/services/gmap.service */ "./src/shared/services/gmap.service.ts");
/* harmony import */ var constants_reg_exp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! constants/reg-exp */ "./src/constants/reg-exp.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BtsCreateComponent = /** @class */ (function () {
    function BtsCreateComponent(_notify, _emitter, _btsSv, _branchSv, _gmapSv) {
        this._notify = _notify;
        this._emitter = _emitter;
        this._btsSv = _btsSv;
        this._branchSv = _branchSv;
        this._gmapSv = _gmapSv;
        this.bts = new models_bts__WEBPACK_IMPORTED_MODULE_1__["Bts"]();
        this.isLoading = false;
        // branches
        this.branches = [];
        this.isLoadingBranch = false;
        // districts
        this.districts = [];
        this.isLoadingDistrict = false;
        // townships
        this.townships = [];
        this.isLoadingTownship = false;
        this._isChangeLatLng = false;
    }
    BtsCreateComponent.prototype.ngOnInit = function () {
        this._getBranchList();
        this._onEventEmitter();
    };
    BtsCreateComponent.prototype.ngOnDestroy = function () {
        if (this._subscriber) {
            this._subscriber.unsubscribe();
        }
    };
    BtsCreateComponent.prototype._onEventEmitter = function () {
        var _this = this;
        this._subscriber = this._emitter.caseNumber$.subscribe(function (data) {
            if (data && (data.type === constants_emitter__WEBPACK_IMPORTED_MODULE_5__["EMITTER_TYPE"].GMAP_CLICK || data.type === constants_emitter__WEBPACK_IMPORTED_MODULE_5__["EMITTER_TYPE"].GMAP_PLACE_CHANGED)) {
                if (data.data.mode === 'create') {
                    _this.bts.latitude = data.data.lat;
                    _this.bts.longitude = data.data.lng;
                }
            }
        });
    };
    BtsCreateComponent.prototype.changeLatLng = function () {
        this._isChangeLatLng = true;
    };
    BtsCreateComponent.prototype.findAddressWithLatLng = function () {
        var _this = this;
        if (!this.bts.latitude || !this.bts.longitude || !this._isChangeLatLng) {
            return;
        }
        if (!constants_reg_exp__WEBPACK_IMPORTED_MODULE_8__["RegExp"].latitude.test(this.bts.latitude.toString()) || !constants_reg_exp__WEBPACK_IMPORTED_MODULE_8__["RegExp"].longitude.test(this.bts.longitude.toString())) {
            this._notify.warning('latitude or longitude format is incorrect!');
            return;
        }
        // call api
        var data = {
            lat: this.bts.latitude,
            lng: this.bts.longitude,
        };
        this._gmapSv.findAddressWithLocation(data, function (results, status) {
            _this._isChangeLatLng = false;
            if (status === 'OK') {
                if (results[0]) {
                    // emit zoom to latlng
                    _this._emitter.publishData({
                        type: constants_emitter__WEBPACK_IMPORTED_MODULE_5__["EMITTER_TYPE"].GMAP_ZOOM_TO,
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
    BtsCreateComponent.prototype._findAddressWithAddress = function (address, zoom) {
        var _this = this;
        this._gmapSv.findAddressWithAddress(address, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    // emit zoom to latlng
                    _this._emitter.publishData({
                        type: constants_emitter__WEBPACK_IMPORTED_MODULE_5__["EMITTER_TYPE"].GMAP_ZOOM_TO,
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
    BtsCreateComponent.prototype.getRegionAndZoomTo = function () {
        var _this = this;
        var address = '';
        var iState = this.branches.findIndex(function (item) { return item.id === _this.bts.branchId; });
        if (iState >= 0) {
            address += this.branches[iState].name + " State, Myanmar (Burma)";
        }
        if (address) {
            this._findAddressWithAddress(address, 5);
        }
    };
    BtsCreateComponent.prototype.getDistrictAndZoomTo = function () {
        var _this = this;
        var address = '';
        var iDistrict = this.districts.findIndex(function (item) { return item.id === _this.bts.districtId; });
        if (iDistrict >= 0) {
            address += this.districts[iDistrict].name + " District";
        }
        var iState = this.branches.findIndex(function (item) { return item.id === _this.bts.branchId; });
        if (iState >= 0) {
            address += ", " + this.branches[iState].name + " State, Myanmar (Burma)";
        }
        if (address) {
            this._findAddressWithAddress(address, 7);
        }
    };
    BtsCreateComponent.prototype.getTownshipAndZoomTo = function () {
        var _this = this;
        var address = '';
        var iTownship = this.townships.findIndex(function (item) { return item.id === _this.bts.townshipId; });
        if (iTownship >= 0) {
            address += "" + this.townships[iTownship].name;
        }
        var iDistrict = this.districts.findIndex(function (item) { return item.id === _this.bts.districtId; });
        if (iDistrict >= 0) {
            address += ", " + this.districts[iDistrict].name + " District";
        }
        var iState = this.branches.findIndex(function (item) { return item.id === _this.bts.branchId; });
        if (iState >= 0) {
            address += ", " + this.branches[iState].name + " State, Myanmar (Burma)";
        }
        if (address) {
            this._findAddressWithAddress(address, 9);
        }
    };
    BtsCreateComponent.prototype._getBranchList = function () {
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
    BtsCreateComponent.prototype.getDistrictList = function () {
        var _this = this;
        if (!this.bts.branchId) {
            this.districts = [];
            this.bts.districtId = null;
            return;
        }
        this.isLoadingDistrict = true;
        var opts = {
            branchId: this.bts.branchId,
        };
        this._branchSv.getDistrictList(opts).subscribe(function (res) {
            _this.districts = res.districts;
            _this.bts.districtId = null;
            _this.isLoadingDistrict = false;
        }, function (errors) {
            _this.isLoadingDistrict = false;
            _this._notify.error(errors);
        });
    };
    BtsCreateComponent.prototype.getTownshipList = function () {
        var _this = this;
        if (!this.bts.districtId) {
            this.townships = [];
            this.bts.townshipId = null;
            return;
        }
        this.isLoadingTownship = true;
        var opts = {
            districtId: this.bts.districtId,
            branchId: this.bts.branchId,
        };
        this._branchSv.getTownshipList(opts).subscribe(function (res) {
            _this.townships = res.townships;
            _this.bts.townshipId = null;
            _this.isLoadingTownship = false;
        }, function (errors) {
            _this.isLoadingTownship = false;
            _this._notify.error(errors);
        });
    };
    BtsCreateComponent.prototype.createBts = function (form) {
        var _this = this;
        this.isLoading = true;
        this._btsSv.createBTS(this.bts.toJSON()).subscribe(function (res) {
            _this._notify.success(res.meta.message);
            _this._emitter.publishData({
                type: constants_emitter__WEBPACK_IMPORTED_MODULE_5__["EMITTER_TYPE"].CREATE_BTS,
            });
            _this.isLoading = false;
            form.form.markAsPristine({ onlySelf: false });
        }, function (errors) {
            _this.isLoading = false;
            _this._notify.error(errors);
        }, function () {
            setTimeout(function () {
                _this.bts = new models_bts__WEBPACK_IMPORTED_MODULE_1__["Bts"]();
            }, 0);
        });
    };
    BtsCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bts-create',
            template: __webpack_require__(/*! ./bts-create.component.html */ "./src/app/ssm/bts/bts-create/bts-create.component.html"),
            styles: [__webpack_require__(/*! ./bts-create.component.scss */ "./src/app/ssm/bts/bts-create/bts-create.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"],
            shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
            shared_services_bts_service__WEBPACK_IMPORTED_MODULE_2__["BtsService"],
            shared_services_branch_service__WEBPACK_IMPORTED_MODULE_6__["BranchService"],
            shared_services_gmap_service__WEBPACK_IMPORTED_MODULE_7__["GmapService"]])
    ], BtsCreateComponent);
    return BtsCreateComponent;
}());



/***/ }),

/***/ "./src/app/ssm/bts/bts-create/bts-create.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/ssm/bts/bts-create/bts-create.module.ts ***!
  \*********************************************************/
/*! exports provided: BtsCreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtsCreateModule", function() { return BtsCreateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bts_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bts-create.component */ "./src/app/ssm/bts/bts-create/bts-create.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var shared_services_bts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/services/bts.service */ "./src/shared/services/bts.service.ts");
/* harmony import */ var shared_services_branch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/services/branch.service */ "./src/shared/services/branch.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _bts_create_component__WEBPACK_IMPORTED_MODULE_2__["BtsCreateComponent"],
    },
];
var BtsCreateModule = /** @class */ (function () {
    function BtsCreateModule() {
    }
    BtsCreateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"]],
            declarations: [_bts_create_component__WEBPACK_IMPORTED_MODULE_2__["BtsCreateComponent"]],
            providers: [shared_services_bts_service__WEBPACK_IMPORTED_MODULE_5__["BtsService"], shared_services_branch_service__WEBPACK_IMPORTED_MODULE_6__["BranchService"]],
        })
    ], BtsCreateModule);
    return BtsCreateModule;
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



/***/ }),

/***/ "./src/shared/services/bts.service.ts":
/*!********************************************!*\
  !*** ./src/shared/services/bts.service.ts ***!
  \********************************************/
/*! exports provided: BtsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtsService", function() { return BtsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/shared/services/api.service.ts");
/* harmony import */ var models_bts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models/bts */ "./src/models/bts.ts");
/* harmony import */ var _download_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./download.service */ "./src/shared/services/download.service.ts");
/* harmony import */ var app_services_root_scope_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/root-scope.service */ "./src/app/services/root-scope.service.ts");
/* harmony import */ var app_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/role.service */ "./src/app/role.service.ts");
/* harmony import */ var app_guard_roles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/guard/roles */ "./src/app/guard/roles.ts");
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







var BtsService = /** @class */ (function () {
    function BtsService(_api, _download, _rootScope, _role) {
        this._api = _api;
        this._download = _download;
        this._rootScope = _rootScope;
        this._role = _role;
    }
    BtsService.prototype.filterBTS = function (opts) {
        if (opts === void 0) { opts = {}; }
        var _opts = {
            role: this._rootScope.currentUser.id ? this._rootScope.currentUser.role : app_guard_roles__WEBPACK_IMPORTED_MODULE_6__["Roles"].MYTEL_ADMIN,
        };
        if (this._role.is_branch_director || this._role.is_branch_sale_staff || this._role.is_hq_sale_staff) {
            _opts.branchId =
                this._rootScope.currentUser.id && this._rootScope.currentUser.branchId
                    ? this._rootScope.currentUser.branchId
                    : 0;
        }
        return this._api.get("bts/filters", __assign({}, _opts, opts)).map(function (res) {
            res.data.btsList = res.data.btsList.map(function (item) { return new models_bts__WEBPACK_IMPORTED_MODULE_2__["Bts"]().deserialize(item); });
            return res.data;
        });
    };
    BtsService.prototype.createBTS = function (data) {
        return this._api.post("bts", data);
    };
    BtsService.prototype.updateBTS = function (id, data) {
        return this._api.put("bts/" + id, data);
    };
    BtsService.prototype.removeBTS = function (id) {
        return this._api.delete("bts/" + id);
    };
    BtsService.prototype.getAllBts = function (params) {
        return this._api.get("bts/getAll", params).map(function (res) {
            res.data.btsList = res.data.btsList.map(function (item) { return new models_bts__WEBPACK_IMPORTED_MODULE_2__["Bts"]().deserialize(item); });
            return res.data;
        });
    };
    BtsService.prototype.exportBts = function (opts) {
        if (opts === void 0) { opts = {}; }
        var _opts = {
            role: this._rootScope.currentUser.id ? this._rootScope.currentUser.role : app_guard_roles__WEBPACK_IMPORTED_MODULE_6__["Roles"].MYTEL_ADMIN,
        };
        if (this._role.is_branch_director || this._role.is_branch_sale_staff || this._role.is_hq_sale_staff) {
            _opts.branchId =
                this._rootScope.currentUser.id && this._rootScope.currentUser.branchId
                    ? this._rootScope.currentUser.branchId
                    : 0;
        }
        return this._download.get("bts/export", __assign({}, _opts, opts));
    };
    BtsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _download_service__WEBPACK_IMPORTED_MODULE_3__["DownloadService"],
            app_services_root_scope_service__WEBPACK_IMPORTED_MODULE_4__["RootScopeService"],
            app_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"]])
    ], BtsService);
    return BtsService;
}());



/***/ })

}]);
//# sourceMappingURL=bts-create-bts-create-module.d5e3c7c4522152d73867.js.map