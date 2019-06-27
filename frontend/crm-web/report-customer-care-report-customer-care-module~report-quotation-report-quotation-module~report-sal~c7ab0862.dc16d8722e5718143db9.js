(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-customer-care-report-customer-care-module~report-quotation-report-quotation-module~report-sal~c7ab0862"],{

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

/***/ "./src/app/dbr/report/report-filter/report-filter.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dbr/report/report-filter/report-filter.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form novalidate class=\"pt-2\">\n  <div class=\"row\">\n    <div class=\"col-lg-3 col-md-6 form-group\">\n      <label for=\"FromDate\">From Date</label>\n      <div class=\"input-group\">\n        <input type=\"text\" name=\"dateStart\" id=\"FromDate\"\n          class=\"form-control\"\n          [ngClass]=\"{ 'border-right-0': filterTerm.dateStart }\"\n          readonly\n          bsDatepicker\n          placeholder=\"please select start date\"\n          [(bsValue)]=\"filterTerm.dateStart\"\n          [bsConfig]=\"DATEPICKER_CONFIG\">\n\n        <div class=\"input-group-append\" *ngIf=\"filterTerm.dateStart\">\n          <span class=\"input-group-text bg--white\">\b<i class=\"fa fa-times cursor-pointer\" (click)=\"filterTerm.dateStart = null\"></i></span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 form-group\">\n      <label for=\"ToDate\">To Date</label>\n      <div class=\"input-group\">\n        <input type=\"text\" name=\"dateEnd\" id=\"ToDate\"\n          class=\"form-control\"\n          [ngClass]=\"{ 'border-right-0': filterTerm.dateEnd }\"\n          readonly\n          bsDatepicker\n          placeholder=\"please select end date\"\n          [(bsValue)]=\"filterTerm.dateEnd\"\n          [bsConfig]=\"DATEPICKER_CONFIG\">\n\n        <div class=\"input-group-append\" *ngIf=\"filterTerm.dateEnd\">\n          <span class=\"input-group-text bg--white\">\b<i class=\"fa fa-times cursor-pointer\" (click)=\"filterTerm.dateEnd = null\"></i></span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6\" *ngIf=\"roleAccess\">\n      <div class=\"form-group\">\n        <label for=\"Region\">Branch</label>\n        <ng-select\n          [items]=\"branches\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingBranch\"\n          placeholder=\"please select region\"\n          [searchable]=\"false\"\n          name=\"branches\"\n          [(ngModel)]=\"filterTerm.branchId\"\n          (ngModelChange)=\"changeBranch()\"\n          #Region=\"ngModel\"\n          bindLabel=\"name\"\n          bindValue=\"id\">\n        </ng-select>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 form-group\" *ngIf=\"roleAccessStaff\">\n      <label for=\"Name\">Staff</label>\n      <ng-select\n        [items]=\"staffs\"\n        class=\"text-left\"\n        [closeOnSelect]=\"true\"\n        [clearable]=\"true\"\n        [loading]=\"isLoadingStaff\"\n        placeholder=\"please select staff\"\n        [searchable]=\"true\"\n        name=\"assignedStaff\"\n        [(ngModel)]=\"filterTerm.assignedStaff\"\n        bindLabel=\"code_full_name\">\n      </ng-select>\n    </div>\n\n    <div class=\"col-12 form-group report-filter__btn\">\n      <button type=\"button\" class=\"btn btn-primary mr-2\"\n        (click)=\"exportReport()\">\n        <i class=\"fa fa-download mr-2\"></i>\n        Export\n      </button>\n\n      <button type=\"button\" class=\"btn btn-primary mr-2\"\n        (click)=\"previewReport()\">\n        <i class=\"fa fa-search mr-2\"></i>\n        Preview\n      </button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/dbr/report/report-filter/report-filter.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/dbr/report/report-filter/report-filter.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dbr/report/report-filter/report-filter.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dbr/report/report-filter/report-filter.component.ts ***!
  \*********************************************************************/
/*! exports provided: ReportFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportFilterComponent", function() { return ReportFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var constants_datepicker_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/datepicker-config */ "./src/constants/datepicker-config.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var app_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/role.service */ "./src/app/role.service.ts");
/* harmony import */ var shared_services_branch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/services/branch.service */ "./src/shared/services/branch.service.ts");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportFilterComponent = /** @class */ (function () {
    function ReportFilterComponent(_notify, _role, _branchSv, _userSv) {
        this._notify = _notify;
        this._role = _role;
        this._branchSv = _branchSv;
        this._userSv = _userSv;
        this.changeFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeTermPreviewReport = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterTerm = {
            dateStart: null,
            dateEnd: null,
            branchId: null,
            assignedStaff: null,
        };
        this.DATEPICKER_CONFIG = constants_datepicker_config__WEBPACK_IMPORTED_MODULE_1__["DATEPICKER_CONFIG"];
        // branches
        this.branches = [];
        this.isLoadingBranch = false;
        // staffs
        this.staffs = [];
        this.isLoadingStaff = false;
    }
    Object.defineProperty(ReportFilterComponent.prototype, "isEndAfterFrom", {
        get: function () {
            return (!!this.filterTerm.dateStart &&
                !!this.filterTerm.dateEnd &&
                moment__WEBPACK_IMPORTED_MODULE_2__(this.filterTerm.dateEnd).isBefore(moment__WEBPACK_IMPORTED_MODULE_2__(this.filterTerm.dateStart)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportFilterComponent.prototype, "roleAccess", {
        get: function () {
            return this._role.is_admin || this._role.is_sale_director;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportFilterComponent.prototype, "roleAccessStaff", {
        get: function () {
            return this.roleAccess || this._role.is_branch_director;
        },
        enumerable: true,
        configurable: true
    });
    ReportFilterComponent.prototype.ngOnInit = function () {
        this._getBranchList();
        this._getStaffs();
        this.previewReport();
    };
    ReportFilterComponent.prototype._getBranchList = function () {
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
    ReportFilterComponent.prototype.changeBranch = function () {
        this._getStaffs();
    };
    ReportFilterComponent.prototype._getStaffs = function () {
        var _this = this;
        if (this.roleAccessStaff) {
            this.isLoadingStaff = true;
            var opts = {};
            if (this.filterTerm.branchId) {
                opts.branchId = this.filterTerm.branchId;
            }
            this._userSv.getAllUsers(opts).subscribe(function (res) {
                _this.staffs = res;
                _this.isLoadingStaff = false;
            }, function (errors) {
                _this.isLoadingStaff = false;
                _this._notify.error(errors);
            });
        }
    };
    ReportFilterComponent.prototype._filterTermToJSON = function () {
        var params = {};
        if (this.filterTerm.dateStart) {
            params.dateFrom = moment__WEBPACK_IMPORTED_MODULE_2__(this.filterTerm.dateStart).format('YYYY-MM-DD');
        }
        if (this.filterTerm.dateEnd) {
            params.dateTo = moment__WEBPACK_IMPORTED_MODULE_2__(this.filterTerm.dateEnd).format('YYYY-MM-DD');
        }
        if (this.filterTerm.assignedStaff) {
            params.assignedStaffId = this.filterTerm.assignedStaff.id;
        }
        if (this.filterTerm.branchId) {
            params.branchId = this.filterTerm.branchId;
        }
        return params;
    };
    ReportFilterComponent.prototype.exportReport = function () {
        if (this.isEndAfterFrom) {
            this._notify.warning('Please select the end time after the start time');
            return;
        }
        this.changeFilter.emit(this._filterTermToJSON());
    };
    ReportFilterComponent.prototype.previewReport = function () {
        if (this.isEndAfterFrom) {
            this._notify.warning('Please select the end time after the start time');
            return;
        }
        this.changeTermPreviewReport.emit(this._filterTermToJSON());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ReportFilterComponent.prototype, "changeFilter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ReportFilterComponent.prototype, "changeTermPreviewReport", void 0);
    ReportFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-filter',
            template: __webpack_require__(/*! ./report-filter.component.html */ "./src/app/dbr/report/report-filter/report-filter.component.html"),
            styles: [__webpack_require__(/*! ./report-filter.component.scss */ "./src/app/dbr/report/report-filter/report-filter.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"],
            app_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"],
            shared_services_branch_service__WEBPACK_IMPORTED_MODULE_5__["BranchService"],
            shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], ReportFilterComponent);
    return ReportFilterComponent;
}());



/***/ }),

/***/ "./src/app/dbr/report/report-filter/report-filter.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/dbr/report/report-filter/report-filter.module.ts ***!
  \******************************************************************/
/*! exports provided: ReportFilterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportFilterModule", function() { return ReportFilterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _report_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-filter.component */ "./src/app/dbr/report/report-filter/report-filter.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ReportFilterModule = /** @class */ (function () {
    function ReportFilterModule() {
    }
    ReportFilterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"]],
            declarations: [_report_filter_component__WEBPACK_IMPORTED_MODULE_2__["ReportFilterComponent"]],
            exports: [_report_filter_component__WEBPACK_IMPORTED_MODULE_2__["ReportFilterComponent"]],
        })
    ], ReportFilterModule);
    return ReportFilterModule;
}());



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
//# sourceMappingURL=report-customer-care-report-customer-care-module~report-quotation-report-quotation-module~report-sal~c7ab0862.dc16d8722e5718143db9.js.map