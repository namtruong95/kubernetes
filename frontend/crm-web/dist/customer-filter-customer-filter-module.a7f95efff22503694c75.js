(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-filter-customer-filter-module"],{

/***/ "./node_modules/file-saver/FileSaver.js":
/*!**********************************************!*\
  !*** ./node_modules/file-saver/FileSaver.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
		, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
		, arbitrary_revoke_timeout = 1000 * 40 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			setTimeout(revoker, arbitrary_revoke_timeout);
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, force = type === force_saveable_type
				, object_url
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
							var popup = view.open(url, '_blank');
							if(!popup) view.location.href = url;
							url=undefined; // release reference before dispatching
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (!object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (force) {
						view.location.href = object_url;
					} else {
						var opened = view.open(object_url, "_blank");
						if (!opened) {
							// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
			;
			filesaver.readyState = filesaver.INIT;

			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}

			fs_error();
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function(){};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
  module.exports.saveAs = saveAs;
} else if (("function" !== "undefined" && __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") !== null) && (__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") !== null)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    return saveAs;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./src/app/cim/customer-filter/customer-filter.component.html":
/*!********************************************************************!*\
  !*** ./src/app/cim/customer-filter/customer-filter.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form novalidate>\n  <div class=\"row mb-4 customer-form-content\">\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"CustomerName\">Customer Name</label>\n        <input type=\"text\" id=\"CustomerName\"\n          autocomplete=\"new-name\"\n          class=\"form-control\"\n          name=\"customer_name\"\n          placeholder=\"please enter name\"\n          [(ngModel)]=\"filterTerm.txtSearch\">\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"CustomerType\">Customer Type</label>\n        <ng-select\n          [items]=\"customerTypes\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [groupBy]=\"groupByFn\"\n          [loading]=\"isLoadingCustomerType\"\n          placeholder=\"please select type\"\n          [searchable]=\"false\"\n          name=\"customerTypes\"\n          [(ngModel)]=\"filterTerm.customerType\"\n          bindLabel=\"name\">\n        </ng-select>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"TypeInvestment\">Type of investment</label>\n        <ng-select\n          [items]=\"typeOfInvestments\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingTypeOfInvestment\"\n          placeholder=\"please select type of investment\"\n          [searchable]=\"false\"\n          name=\"typeOfInvestments\"\n          [(ngModel)]=\"filterTerm.typeOfInvestment\"\n          bindLabel=\"name\">\n        </ng-select>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"CustomerStatus\">Customer Status</label>\n        <ng-select\n          [items]=\"CUSTOMER_STATUSES\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          placeholder=\"please select status\"\n          [searchable]=\"false\"\n          name=\"CUSTOMER_STATUSES\"\n          [(ngModel)]=\"filterTerm.customerStatus\"\n          bindLabel=\"name\"\n          bindValue=\"value\">\n        </ng-select>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\" *ngIf=\"roleAccess\">\n      <div class=\"form-group\">\n        <label for=\"Region\">Region</label>\n        <ng-select\n          [items]=\"branches\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingBranch\"\n          placeholder=\"please select region\"\n          [searchable]=\"false\"\n          name=\"branches\"\n          [(ngModel)]=\"filterTerm.branchId\"\n          #Region=\"ngModel\"\n          bindLabel=\"name\"\n          bindValue=\"id\">\n        </ng-select>\n      </div>\n    </div>\n\n    <div class=\"col-12\">\n      <div class=\"form-group\">\n        <button type=\"button\" class=\"btn btn-primary\"\n          (click)=\"filterCustomers()\">\n          <i class=\"fa fa-search mr-2\"></i>\n          Filter\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <button type=\"button\"\n      class=\"btn btn-primary mr-2\"\n      (click)=\"FileUpload.click()\"\n      [disabled]=\"isLoading\">\n      <i class=\"fa fa-upload mr-2\"></i>\n      Import\n      <i *ngIf=\"isLoading\" class=\"fa fa-refresh fa-spin\"></i>\n    </button>\n\n    <button *ngIf=\"canExportCustomer\" type=\"button\" class=\"btn btn-primary mr-2\"\n      (click)=\"downloadCustomer()\"\n      [disabled]=\"!cimSv.date\">\n      <i class=\"fa fa-download mr-2\"></i>\n      Export\n    </button>\n\n    <button type=\"button\" class=\"btn btn-primary mr-2\"\n      (click)=\"downloadTemplate()\">\n      <i class=\"fa fa-download mr-2\"></i>\n      Template\n    </button>\n  </div>\n\n  <input\n    type=\"file\"\n    hidden\n    name=\"file\"\n    #FileUpload\n    (change)=\"getFile()\"\n    [attr.accept]=\"accept_file\">\n\n</form>\n"

/***/ }),

/***/ "./src/app/cim/customer-filter/customer-filter.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/cim/customer-filter/customer-filter.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cim/customer-filter/customer-filter.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/cim/customer-filter/customer-filter.component.ts ***!
  \******************************************************************/
/*! exports provided: CustomerFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFilterComponent", function() { return CustomerFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_customer_type_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/customer-type.service */ "./src/shared/services/customer-type.service.ts");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var constants_customer_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/customer-status */ "./src/constants/customer-status.ts");
/* harmony import */ var shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/services/customer-classification.service */ "./src/shared/services/customer-classification.service.ts");
/* harmony import */ var constants_datepicker_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! constants/datepicker-config */ "./src/constants/datepicker-config.ts");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
/* harmony import */ var shared_services_uploader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/services/uploader.service */ "./src/shared/services/uploader.service.ts");
/* harmony import */ var shared_services_customer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/services/customer.service */ "./src/shared/services/customer.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _cim_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../cim.service */ "./src/app/cim/cim.service.ts");
/* harmony import */ var shared_utils_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/utils/helpers */ "./src/shared/utils/helpers.ts");
/* harmony import */ var app_role_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/role.service */ "./src/app/role.service.ts");
/* harmony import */ var shared_services_branch_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! shared/services/branch.service */ "./src/shared/services/branch.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var CustomerFilterComponent = /** @class */ (function () {
    function CustomerFilterComponent(_customerTypeSv, _customerClassificationSv, _notify, _emitter, _uploader, _customerSv, cimSv, role, _branchSv) {
        this._customerTypeSv = _customerTypeSv;
        this._customerClassificationSv = _customerClassificationSv;
        this._notify = _notify;
        this._emitter = _emitter;
        this._uploader = _uploader;
        this._customerSv = _customerSv;
        this.cimSv = cimSv;
        this.role = role;
        this._branchSv = _branchSv;
        this._mimeTypes = [
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            '.xls',
            '.xlsx',
        ];
        this.isLoading = false;
        this.filterTerm = {
            txtSearch: '',
            customerType: null,
            typeOfInvestment: null,
            customerStatus: null,
            sort: 'desc',
            column: 'id',
            branchId: null,
        };
        // customer types
        this.customerTypes = [];
        this.isLoadingCustomerType = false;
        // customer status
        this.CUSTOMER_STATUSES = constants_customer_status__WEBPACK_IMPORTED_MODULE_3__["CUSTOMER_STATUSES"];
        // type of sale
        this.typeOfSales = [];
        this.isLoadingTypeOfSale = false;
        // type of investment
        this.typeOfInvestments = [];
        this.isLoadingTypeOfInvestment = false;
        // branches
        this.branches = [];
        this.isLoadingBranch = false;
        // datepicker config
        this.DATEPICKER_CONFIG = constants_datepicker_config__WEBPACK_IMPORTED_MODULE_5__["DATEPICKER_CONFIG"];
        this.groupByFn = function (item) { return item.child.state; };
        document.title = 'Mytel | filter customer';
    }
    Object.defineProperty(CustomerFilterComponent.prototype, "accept_file", {
        get: function () {
            return this._mimeTypes.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerFilterComponent.prototype, "roleAccess", {
        get: function () {
            return this.role.is_admin || this.role.is_sale_director;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerFilterComponent.prototype, "canExportCustomer", {
        get: function () {
            return this.roleAccess || this.role.is_branch_director;
        },
        enumerable: true,
        configurable: true
    });
    CustomerFilterComponent.prototype.ngOnInit = function () {
        this._getCustomerTypes();
        this._getTypeOfSales();
        this._getTypeOfInvestment();
        this._onEventEmitter();
        this._getBranchList();
    };
    CustomerFilterComponent.prototype.ngOnDestroy = function () {
        this._subscriber.unsubscribe();
    };
    CustomerFilterComponent.prototype.downloadCustomer = function () {
        var _this = this;
        if (!this.cimSv.date) {
            return;
        }
        var params = {
            date: this.cimSv.date,
        };
        if (this.filterTerm.sort) {
            params.sort = this.filterTerm.sort;
        }
        if (this.filterTerm.column) {
            params.column = this.filterTerm.column;
        }
        if (this.filterTerm.date) {
            params.date = this.filterTerm.date;
        }
        if (this.filterTerm.txtSearch) {
            params.txtSearch = this.filterTerm.txtSearch.trim();
        }
        if (this.filterTerm.customerType) {
            params.customerTypeId = this.filterTerm.customerType.id;
        }
        if (this.filterTerm.typeOfInvestment) {
            params.typeOfInvestmentId = this.filterTerm.typeOfInvestment.id;
        }
        if (this.filterTerm.customerStatus !== null && this.filterTerm.customerStatus !== undefined) {
            params.customerStatus = this.filterTerm.customerStatus.toString();
        }
        // if (this.filterTerm.typeOfContact) {
        //   params.typeOfContactId = this.filterTerm.typeOfContact.id;
        // }
        this._customerSv.exportCustomer(params).subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_10__["saveAs"])(res, "Customers-" + moment__WEBPACK_IMPORTED_MODULE_11__().unix() + ".xlsx");
        }, function (errors) {
            _this._notify.error(errors);
        });
    };
    CustomerFilterComponent.prototype._onEventEmitter = function () {
        this._subscriber = this._emitter.caseNumber$.subscribe(function (data) { });
    };
    CustomerFilterComponent.prototype._getBranchList = function () {
        var _this = this;
        if (this.roleAccess) {
            this.isLoadingBranch = true;
            this._branchSv.getBranchList().subscribe(function (res) {
                _this.branches = res.branches;
                _this.isLoadingBranch = false;
            }, function (errors) {
                _this.isLoadingBranch = false;
                _this._notify.error(errors);
            });
        }
    };
    CustomerFilterComponent.prototype._getCustomerTypes = function () {
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
    CustomerFilterComponent.prototype._getTypeOfSales = function () {
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
    CustomerFilterComponent.prototype._getTypeOfInvestment = function () {
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
    CustomerFilterComponent.prototype.filterCustomers = function () {
        var params = {};
        if (this.filterTerm.txtSearch) {
            params.txtSearch = this.filterTerm.txtSearch;
        }
        if (this.filterTerm.customerType) {
            params.customerTypeId = this.filterTerm.customerType.id;
        }
        if (this.filterTerm.typeOfInvestment) {
            params.typeOfInvestmentId = this.filterTerm.typeOfInvestment.id;
        }
        if (this.filterTerm.customerStatus !== null && this.filterTerm.customerStatus !== undefined) {
            params.customerStatus = this.filterTerm.customerStatus.toString();
        }
        if (this.filterTerm.typeOfContact) {
            params.typeOfContactId = this.filterTerm.typeOfContact.id;
        }
        if (this.filterTerm.branchId) {
            params.branchId = this.filterTerm.branchId;
        }
        this._emitter.publishData({
            type: constants_emitter__WEBPACK_IMPORTED_MODULE_7__["EMITTER_TYPE"].FILTER_CUSTOMER,
            params: params,
        });
    };
    // upload file
    CustomerFilterComponent.prototype.getFile = function () {
        var _this = this;
        var file = this._fileUpload.nativeElement.files[0];
        if (!file) {
            return;
        }
        // Validator File Type
        if (this._mimeTypes.indexOf(file.type) < 0) {
            this._notify.error('You can not upload files that are not in xls, xlsx format');
            return;
        }
        // Validator File Size
        if (file.size >= 10485760) {
            this._notify.error('You can not upload images larger than 10MB in size');
            return;
        }
        var data = [
            {
                key: 'file',
                value: file,
            },
        ];
        this.isLoading = true;
        this._uploader.store("customers/import", data).subscribe(function (res) {
            _this.isLoading = false;
            if (res.data.done && res.data.done > 0) {
                _this._notify.success("import success " + res.data.done + " rows");
            }
            if (res.data.failed && res.data.failed > 0) {
                _this._notify.error("import failed " + res.data.failed + " rows");
            }
            if (res.data.duplicate && res.data.duplicate > 0) {
                _this._notify.warning("import duplicate " + res.data.duplicate + " rows");
            }
            _this._emitter.publishData({
                type: constants_emitter__WEBPACK_IMPORTED_MODULE_7__["EMITTER_TYPE"].CREATE_CUSTOMER,
            });
            _this._removeFile();
        }, function (errors) {
            _this.isLoading = false;
            _this._notify.error(errors);
            _this._removeFile();
        });
    };
    CustomerFilterComponent.prototype._removeFile = function () {
        this._fileUpload.nativeElement.value = null;
    };
    CustomerFilterComponent.prototype.downloadTemplate = function () {
        shared_utils_helpers__WEBPACK_IMPORTED_MODULE_13__["Helpers"].downloadFileFromUri('/assets/Template_CIM_v2.xlsx', 'Template CIM.xlsx');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('FileUpload'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CustomerFilterComponent.prototype, "_fileUpload", void 0);
    CustomerFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-filter',
            template: __webpack_require__(/*! ./customer-filter.component.html */ "./src/app/cim/customer-filter/customer-filter.component.html"),
            styles: [__webpack_require__(/*! ./customer-filter.component.scss */ "./src/app/cim/customer-filter/customer-filter.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_services_customer_type_service__WEBPACK_IMPORTED_MODULE_1__["CustomerTypeService"],
            shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_4__["CustomerClassificationService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__["NotifyService"],
            shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__["EventEmitterService"],
            shared_services_uploader_service__WEBPACK_IMPORTED_MODULE_8__["UploaderService"],
            shared_services_customer_service__WEBPACK_IMPORTED_MODULE_9__["CustomerService"],
            _cim_service__WEBPACK_IMPORTED_MODULE_12__["CimService"],
            app_role_service__WEBPACK_IMPORTED_MODULE_14__["RoleService"],
            shared_services_branch_service__WEBPACK_IMPORTED_MODULE_15__["BranchService"]])
    ], CustomerFilterComponent);
    return CustomerFilterComponent;
}());



/***/ }),

/***/ "./src/app/cim/customer-filter/customer-filter.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/cim/customer-filter/customer-filter.module.ts ***!
  \***************************************************************/
/*! exports provided: CustomerFilterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFilterModule", function() { return CustomerFilterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _customer_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-filter.component */ "./src/app/cim/customer-filter/customer-filter.component.ts");
/* harmony import */ var shared_services_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/services/customer.service */ "./src/shared/services/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _customer_filter_component__WEBPACK_IMPORTED_MODULE_6__["CustomerFilterComponent"],
    },
];
var CustomerFilterModule = /** @class */ (function () {
    function CustomerFilterModule() {
    }
    CustomerFilterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot()],
            declarations: [_customer_filter_component__WEBPACK_IMPORTED_MODULE_6__["CustomerFilterComponent"]],
            providers: [shared_services_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"]],
        })
    ], CustomerFilterModule);
    return CustomerFilterModule;
}());



/***/ })

}]);
//# sourceMappingURL=customer-filter-customer-filter-module.a7f95efff22503694c75.js.map