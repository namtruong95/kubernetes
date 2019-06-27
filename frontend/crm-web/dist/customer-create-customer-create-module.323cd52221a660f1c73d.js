(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-create-customer-create-module"],{

/***/ "./src/app/cim/customer-create/customer-create.component.html":
/*!********************************************************************!*\
  !*** ./src/app/cim/customer-create/customer-create.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #CustomerForm=\"ngForm\" novalidate>\n  <div class=\"row mb-4 customer-form-content\">\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"CustomerName\">Customer Name <i class=\"required\">&#40;*&#41;</i></label>\n        <input type=\"text\" id=\"CustomerName\"\n          autocomplete=\"new-name\"\n          class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': Name.dirty && Name.errors }\"\n          name=\"customer_name\"\n          placeholder=\"please enter name\"\n          [(ngModel)]=\"customer.customerName\"\n          #Name=\"ngModel\"\n          required>\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"Name.errors?.required\">\n          Please enter name\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"CustomerType\">Customer Type <i class=\"required\">&#40;*&#41;</i></label>\n        <ng-select\n          [items]=\"customerTypes\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [groupBy]=\"groupByFn\"\n          [loading]=\"isLoadingCustomerType\"\n          placeholder=\"please select type\"\n          [searchable]=\"false\"\n          name=\"customerTypes\"\n          [(ngModel)]=\"customer.customerType\"\n          bindLabel=\"name\"\n          #CustomerType=\"ngModel\"\n          required>\n        </ng-select>\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"CustomerType.errors?.required\">\n          Please select type\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"TypeInvestment\">Type of investment</label>\n        <ng-select\n          [items]=\"typeOfInvestments\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingTypeOfInvestment\"\n          placeholder=\"please select type of investment\"\n          [searchable]=\"false\"\n          name=\"typeOfInvestments\"\n          [(ngModel)]=\"customer.typeOfInvestment\"\n          bindLabel=\"name\">\n        </ng-select>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"TypeOfSale\">Type of Sale</label>\n        <ng-select\n          [items]=\"typeOfSales\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingTypeOfSale\"\n          placeholder=\"please select type of sale\"\n          [searchable]=\"false\"\n          name=\"typeOfSales\"\n          [(ngModel)]=\"customer.typeOfSale\"\n          bindLabel=\"name\">\n        </ng-select>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\" [hidden]=\"!canChangeBranch\">\n      <div class=\"form-group\">\n        <label for=\"AssignForBranch\">Assign For Branch</label>\n        <ng-select\n          [items]=\"branches\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingBranch\"\n          placeholder=\"please select assign for branch\"\n          [searchable]=\"false\"\n          name=\"assignedBranch\"\n          [(ngModel)]=\"customer.assignedBranchId\"\n          (ngModelChange)=\"findUsers()\"\n          #AssignForBranch=\"ngModel\"\n          bindLabel=\"name\"\n          bindValue=\"id\">\n        </ng-select>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12 form-group\">\n      <label for=\"Name\">Assigned For Sale</label>\n      <ng-select\n        [items]=\"users\"\n        class=\"text-left\"\n        [closeOnSelect]=\"true\"\n        [clearable]=\"true\"\n        [loading]=\"isLoadingUser\"\n        placeholder=\"please select user\"\n        [searchable]=\"true\"\n        name=\"user\"\n        [(ngModel)]=\"customer.assignedStaff\"\n        bindLabel=\"code_full_name\"\n        [disabled]=\"!canChangeAssignedStaff\">\n      </ng-select>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"CustomerStatus\">Customer Status</label>\n        <ng-select\n          [items]=\"CUSTOMER_STATUSES\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          placeholder=\"please select status\"\n          [searchable]=\"false\"\n          name=\"CUSTOMER_STATUSES\"\n          [(ngModel)]=\"customer.customerStatus\"\n          bindLabel=\"name\"\n          bindValue=\"value\">\n        </ng-select>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"Addess\">Address <i class=\"required\">&#40;*&#41;</i></label>\n        <input type=\"text\" id=\"Addess\"\n          autocomplete=\"new-address\"\n          class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': Address.dirty && Address.errors }\"\n          name=\"address\"\n          #Address=\"ngModel\"\n          placeholder=\"please enter address\"\n          [(ngModel)]=\"customer.address\"\n          required>\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"Address.errors?.required\">\n          Please enter address\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"Region\">Region <i class=\"required\">&#40;*&#41;</i></label>\n        <ng-select\n          [items]=\"branches\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingBranch\"\n          placeholder=\"please select region\"\n          [searchable]=\"false\"\n          name=\"branches\"\n          [(ngModel)]=\"customer.branchId\"\n          (ngModelChange)=\"getDistrictList(); getRegionAndZoomTo()\"\n          #Region=\"ngModel\"\n          bindLabel=\"name\"\n          bindValue=\"id\"\n          required>\n        </ng-select>\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"Region.errors?.required\">\n          Please select region\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"District\">District <i class=\"required\">&#40;*&#41;</i></label>\n        <ng-select\n          [items]=\"districts\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingDistrict\"\n          placeholder=\"please select district\"\n          [searchable]=\"false\"\n          name=\"districts\"\n          [(ngModel)]=\"customer.districtId\"\n          (ngModelChange)=\"getTownshipList(); getDistrictAndZoomTo()\"\n          #District=\"ngModel\"\n          bindLabel=\"name\"\n          bindValue=\"id\"\n          required>\n        </ng-select>\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"District.errors?.required\">\n          Please select district\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"Township\">Township <i class=\"required\">&#40;*&#41;</i></label>\n        <ng-select\n          [items]=\"townships\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingTownship\"\n          placeholder=\"please select township\"\n          [searchable]=\"false\"\n          name=\"townships\"\n          [(ngModel)]=\"customer.townshipId\"\n          (ngModelChange)=\"getTownshipAndZoomTo()\"\n          #Township=\"ngModel\"\n          bindLabel=\"name\"\n          bindValue=\"id\"\n          required>\n        </ng-select>\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"Township.errors?.required\">\n          Please select township\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"latitude\">Latitude <i class=\"required\">&#40;*&#41;</i></label>\n        <input type=\"number\" id=\"latitude\"\n          autocomplete=\"new-latitude\"\n          class=\"form-control\"\n          name=\"latitude\"\n          [ngClass]=\"{ 'is-invalid': Latitude.dirty && Latitude.errors }\"\n          #Latitude=\"ngModel\"\n          required\n          placeholder=\"please enter latitude\"\n          [(ngModel)]=\"customer.latitude\"\n          (ngModelChange)=\"changeLatLng()\"\n          (blur)=\"findAddressWithLatLng()\">\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"Latitude.errors?.required\">\n          Please enter latitude\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"longitude\">Longitude <i class=\"required\">&#40;*&#41;</i></label>\n        <input type=\"number\" id=\"longitude\"\n          autocomplete=\"new-longitude\"\n          class=\"form-control\"\n          name=\"longitude\"\n          [ngClass]=\"{ 'is-invalid': Longitude.dirty && Longitude.errors }\"\n          #Longitude=\"ngModel\"\n          required\n          placeholder=\"please enter longitude\"\n          [(ngModel)]=\"customer.longitude\"\n          (ngModelChange)=\"changeLatLng()\"\n          (blur)=\"findAddressWithLatLng()\">\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"Longitude.errors?.required\">\n          Please enter longitude\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"Catalog\">Catalog</label>\n        <ng-select\n          [items]=\"catalogs\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingCatalog\"\n          placeholder=\"please select catalog\"\n          [searchable]=\"false\"\n          name=\"catalogs\"\n          [(ngModel)]=\"customer.catalog\"\n          bindLabel=\"name\">\n        </ng-select>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"ContactName\">Contact Name</label>\n        <input type=\"text\" id=\"ContactName\"\n          autocomplete=\"new-catalog\"\n          class=\"form-control\"\n          name=\"contact_name\"\n          placeholder=\"please enter contact name\"\n          [(ngModel)]=\"customer.contactName\">\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"Phone\">Phone</label>\n        <input type=\"text\" id=\"Phone\"\n          autocomplete=\"new-phone\"\n          class=\"form-control\"\n          name=\"phone\"\n          placeholder=\"please enter phone\"\n          [(ngModel)]=\"customer.phone\">\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"Email\">Email</label>\n        <input type=\"text\" id=\"Email\"\n          autocomplete=\"new-email\"\n          class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': Email.dirty && Email.errors }\"\n          name=\"email\"\n          placeholder=\"please enter email\"\n          [(ngModel)]=\"customer.email\"\n          #Email=\"ngModel\"\n          [pattern]=\"rules.email\">\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"Email.errors?.pattern\">\n          The email address format is incorrect\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"Position\">Position</label>\n        <input type=\"text\" id=\"Position\"\n          autocomplete=\"new-position\"\n          class=\"form-control\"\n          name=\"position\"\n          placeholder=\"please enter position\"\n          [(ngModel)]=\"customer.position\">\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"Service\">Service</label>\n        <input type=\"text\" id=\"Service\"\n          autocomplete=\"new-service\"\n          class=\"form-control\"\n          name=\"service\"\n          placeholder=\"please enter service\"\n          [(ngModel)]=\"customer.service\">\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"Date\">Date</label>\n        <input type=\"text\" id=\"Date\"\n          autocomplete=\"new-date\"\n          readonly\n          placeholder=\"please select date\"\n          class=\"form-control\"\n          name=\"date\"\n          bsDatepicker\n          [(ngModel)]=\"customer.customerDateBinding\"\n          [bsConfig]=\"DATEPICKER_CONFIG\"\n          (bsValueChange)=\"onValueChange($event)\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <button type=\"button\" class=\"btn btn-primary\"\n      (click)=\"createCustomer(CustomerForm)\"\n      [disabled]=\"isLoading || CustomerForm.form.invalid || !customer.has_address\">\n      Create\n      <i *ngIf=\"isLoading\" class=\"fa fa-refresh fa-spin\"></i>\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/cim/customer-create/customer-create.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/cim/customer-create/customer-create.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cim/customer-create/customer-create.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/cim/customer-create/customer-create.component.ts ***!
  \******************************************************************/
/*! exports provided: CustomerCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCreateComponent", function() { return CustomerCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var models_customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/customer */ "./src/models/customer.ts");
/* harmony import */ var shared_services_customer_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/services/customer-type.service */ "./src/shared/services/customer-type.service.ts");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var constants_customer_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/customer-status */ "./src/constants/customer-status.ts");
/* harmony import */ var shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/services/customer-classification.service */ "./src/shared/services/customer-classification.service.ts");
/* harmony import */ var constants_datepicker_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! constants/datepicker-config */ "./src/constants/datepicker-config.ts");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
/* harmony import */ var shared_services_customer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/services/customer.service */ "./src/shared/services/customer.service.ts");
/* harmony import */ var constants_reg_exp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! constants/reg-exp */ "./src/constants/reg-exp.ts");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
/* harmony import */ var shared_services_branch_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/services/branch.service */ "./src/shared/services/branch.service.ts");
/* harmony import */ var shared_services_gmap_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/services/gmap.service */ "./src/shared/services/gmap.service.ts");
/* harmony import */ var app_role_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/role.service */ "./src/app/role.service.ts");
/* harmony import */ var app_services_root_scope_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/services/root-scope.service */ "./src/app/services/root-scope.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var CustomerCreateComponent = /** @class */ (function () {
    function CustomerCreateComponent(_customerTypeSv, _customerClassificationSv, _notify, _emitter, _customerSv, _userSv, _branchSv, _gmapSv, _role, _rootScope) {
        this._customerTypeSv = _customerTypeSv;
        this._customerClassificationSv = _customerClassificationSv;
        this._notify = _notify;
        this._emitter = _emitter;
        this._customerSv = _customerSv;
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
        this.CUSTOMER_STATUSES = constants_customer_status__WEBPACK_IMPORTED_MODULE_4__["CUSTOMER_STATUSES"];
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
        this.DATEPICKER_CONFIG = constants_datepicker_config__WEBPACK_IMPORTED_MODULE_6__["DATEPICKER_CONFIG"];
        this.isLoading = false;
        this.rules = constants_reg_exp__WEBPACK_IMPORTED_MODULE_10__["RegExp"];
        this._isChangeLatLng = false;
        this.groupByFn = function (item) { return item.child.state; };
        document.title = 'Mytel | create new customer';
    }
    Object.defineProperty(CustomerCreateComponent.prototype, "canChangeBranch", {
        get: function () {
            return this._role.is_admin || this._role.is_sale_director || this._role.is_branch_director;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerCreateComponent.prototype, "canChangeAssignedStaff", {
        get: function () {
            return (this._role.is_hq_sale_staff ||
                this._role.is_branch_sale_staff ||
                (this._role.is_branch_director && this.customer.assignedBranchId === this._rootScope.currentUser.branchId));
        },
        enumerable: true,
        configurable: true
    });
    CustomerCreateComponent.prototype.ngOnInit = function () {
        this.customer.setEmpty();
        this._getCustomerTypes();
        this._getTypeOfSales();
        this._getTypeOfInvestment();
        this._onEventEmitter();
        this._getCatalog();
        this._getBranchList();
        if (!this.canChangeBranch) {
            this._getUsers();
        }
    };
    CustomerCreateComponent.prototype.ngOnDestroy = function () {
        this._subscriber.unsubscribe();
    };
    CustomerCreateComponent.prototype._onEventEmitter = function () {
        var _this = this;
        this._subscriber = this._emitter.caseNumber$.subscribe(function (data) {
            if (data && (data.type === constants_emitter__WEBPACK_IMPORTED_MODULE_8__["EMITTER_TYPE"].GMAP_CLICK || data.type === constants_emitter__WEBPACK_IMPORTED_MODULE_8__["EMITTER_TYPE"].GMAP_PLACE_CHANGED)) {
                if (data.data.mode === 'create') {
                    _this.customer.latitude = data.data.lat;
                    _this.customer.longitude = data.data.lng;
                }
                return;
            }
        });
    };
    CustomerCreateComponent.prototype.changeLatLng = function () {
        this._isChangeLatLng = true;
    };
    CustomerCreateComponent.prototype.findAddressWithLatLng = function () {
        var _this = this;
        if (!this.customer.latitude || !this.customer.longitude || !this._isChangeLatLng) {
            return;
        }
        if (!constants_reg_exp__WEBPACK_IMPORTED_MODULE_10__["RegExp"].latitude.test(this.customer.latitude.toString()) ||
            !constants_reg_exp__WEBPACK_IMPORTED_MODULE_10__["RegExp"].longitude.test(this.customer.longitude.toString())) {
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
                        type: constants_emitter__WEBPACK_IMPORTED_MODULE_8__["EMITTER_TYPE"].GMAP_ZOOM_TO,
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
    CustomerCreateComponent.prototype._findAddressWithAddress = function (address, zoom) {
        var _this = this;
        this._gmapSv.findAddressWithAddress(address, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    // emit zoom to latlng
                    _this._emitter.publishData({
                        type: constants_emitter__WEBPACK_IMPORTED_MODULE_8__["EMITTER_TYPE"].GMAP_ZOOM_TO,
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
    CustomerCreateComponent.prototype.getRegionAndZoomTo = function () {
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
    CustomerCreateComponent.prototype.getDistrictAndZoomTo = function () {
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
    CustomerCreateComponent.prototype.getTownshipAndZoomTo = function () {
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
    CustomerCreateComponent.prototype._getBranchList = function () {
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
    CustomerCreateComponent.prototype.getDistrictList = function () {
        var _this = this;
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
            _this.customer.districtId = null;
            _this.isLoadingDistrict = false;
        }, function (errors) {
            _this.isLoadingDistrict = false;
            _this._notify.error(errors);
        });
    };
    CustomerCreateComponent.prototype.getTownshipList = function () {
        var _this = this;
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
            _this.customer.townshipId = null;
            _this.isLoadingTownship = false;
        }, function (errors) {
            _this.isLoadingTownship = false;
            _this._notify.error(errors);
        });
    };
    CustomerCreateComponent.prototype._getUsers = function (opts) {
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
    CustomerCreateComponent.prototype._getCustomerTypes = function () {
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
    CustomerCreateComponent.prototype._getTypeOfSales = function () {
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
    CustomerCreateComponent.prototype._getCatalog = function () {
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
    CustomerCreateComponent.prototype._getTypeOfInvestment = function () {
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
    CustomerCreateComponent.prototype.onValueChange = function (event) {
        this.customer.customerDate = event;
    };
    CustomerCreateComponent.prototype.createCustomer = function (form) {
        var _this = this;
        this.isLoading = true;
        this._customerSv.createCustomer(this.customer.toJSON()).subscribe(function (res) {
            _this._notify.success(res.meta.message);
            _this._emitter.publishData({
                type: constants_emitter__WEBPACK_IMPORTED_MODULE_8__["EMITTER_TYPE"].CREATE_CUSTOMER,
            });
            _this.isLoading = false;
            form.form.markAsPristine({ onlySelf: false });
        }, function (errors) {
            _this.isLoading = false;
            _this._notify.error(errors);
        }, function () {
            _this.customer = new models_customer__WEBPACK_IMPORTED_MODULE_1__["Customer"]();
            _this.customer.setEmpty();
        });
    };
    CustomerCreateComponent.prototype.findUsers = function () {
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
    CustomerCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-create',
            template: __webpack_require__(/*! ./customer-create.component.html */ "./src/app/cim/customer-create/customer-create.component.html"),
            styles: [__webpack_require__(/*! ./customer-create.component.scss */ "./src/app/cim/customer-create/customer-create.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_services_customer_type_service__WEBPACK_IMPORTED_MODULE_2__["CustomerTypeService"],
            shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_5__["CustomerClassificationService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"],
            shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_7__["EventEmitterService"],
            shared_services_customer_service__WEBPACK_IMPORTED_MODULE_9__["CustomerService"],
            shared_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
            shared_services_branch_service__WEBPACK_IMPORTED_MODULE_12__["BranchService"],
            shared_services_gmap_service__WEBPACK_IMPORTED_MODULE_13__["GmapService"],
            app_role_service__WEBPACK_IMPORTED_MODULE_14__["RoleService"],
            app_services_root_scope_service__WEBPACK_IMPORTED_MODULE_15__["RootScopeService"]])
    ], CustomerCreateComponent);
    return CustomerCreateComponent;
}());



/***/ }),

/***/ "./src/app/cim/customer-create/customer-create.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/cim/customer-create/customer-create.module.ts ***!
  \***************************************************************/
/*! exports provided: CustomerCreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCreateModule", function() { return CustomerCreateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customer_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-create.component */ "./src/app/cim/customer-create/customer-create.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var shared_services_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/services/customer.service */ "./src/shared/services/customer.service.ts");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _customer_create_component__WEBPACK_IMPORTED_MODULE_2__["CustomerCreateComponent"],
    },
];
var CustomerCreateModule = /** @class */ (function () {
    function CustomerCreateModule() {
    }
    CustomerCreateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot()],
            declarations: [_customer_create_component__WEBPACK_IMPORTED_MODULE_2__["CustomerCreateComponent"]],
            providers: [shared_services_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"], shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]],
        })
    ], CustomerCreateModule);
    return CustomerCreateModule;
}());



/***/ })

}]);
//# sourceMappingURL=customer-create-customer-create-module.323cd52221a660f1c73d.js.map