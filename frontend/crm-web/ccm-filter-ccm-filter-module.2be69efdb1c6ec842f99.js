(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ccm-filter-ccm-filter-module"],{

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

/***/ "./src/app/ccm/ccm-filter/ccm-filter.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ccm/ccm-filter/ccm-filter.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form novalidate>\n  <div class=\"row mb-4 customer-form-content\">\n    <div class=\"col-lg-3 col-md-6 form-group\">\n      <label>Customer</label>\n      <ng-select\n        [items]=\"customers | async\"\n        class=\"text-left\"\n        [closeOnSelect]=\"true\"\n        [clearable]=\"true\"\n        [loading]=\"isLoadingCusotmer\"\n        placeholder=\"please select customer\"\n        [searchable]=\"true\"\n        name=\"customer\"\n        [(ngModel)]=\"filterTerm.customer\"\n        bindLabel=\"customerName\"\n        [typeahead]=\"customerInput$\">\n      </ng-select>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6\" *ngIf=\"roleAccess\">\n      <div class=\"form-group\">\n        <label for=\"Region\">Branch</label>\n        <ng-select\n          [items]=\"branches\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingBranch\"\n          placeholder=\"please select region\"\n          [searchable]=\"false\"\n          name=\"branches\"\n          [(ngModel)]=\"filterTerm.branchId\"\n          #Region=\"ngModel\"\n          bindLabel=\"name\"\n          bindValue=\"id\">\n        </ng-select>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 form-group\">\n      <label>Status</label>\n      <ng-select\n        [items]=\"CARE_ACTIVITY_STATUSES\"\n        class=\"text-left\"\n        [closeOnSelect]=\"true\"\n        [clearable]=\"true\"\n        [loading]=\"false\"\n        placeholder=\"please select status\"\n        [searchable]=\"false\"\n        name=\"status\"\n        [(ngModel)]=\"filterTerm.status\"\n        bindLabel=\"name\"\n        bindValue=\"value\">\n      </ng-select>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 form-group\">\n      <label for=\"Date\">Date</label>\n      <div class=\"input-group\">\n        <input type=\"text\" id=\"Date\"\n          readonly\n          placeholder=\"please select date\"\n          class=\"form-control\"\n          [ngClass]=\"{ 'border-right-0': filterTerm.dateActivity }\"\n          name=\"date\"\n          bsDatepicker\n          [(bsValue)]=\"filterTerm.dateActivity\"\n          [ngModel]=\"filterTerm.dateActivity\"\n          [bsConfig]=\"DATEPICKER_CONFIG\"\n          (bsValueChange)=\"onValueChange($event)\">\n\n        <div class=\"input-group-append\" *ngIf=\"filterTerm.dateActivity\">\n          <span class=\"input-group-text bg--white\">\b<i class=\"fa fa-times cursor-pointer\" (click)=\"filterTerm.dateActivity = ''\"></i></span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 form-group ccm-filter__btn\">\n      <button type=\"button\" class=\"btn btn-primary\"\n        (click)=\"filterCareActivity()\">\n        <i class=\"fa fa-search\"></i>\n        Filter\n      </button>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <button type=\"button\" class=\"btn btn-primary mr-2\"\n        [disabled]=\"!ccmSv.date\"\n        (click)=\"downloadCCM()\">\n        <i class=\"fa fa-download mr-2\"></i>\n        Export</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/ccm/ccm-filter/ccm-filter.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/ccm/ccm-filter/ccm-filter.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ccm-filter__btn {\n  margin-top: 31px; }\n  .ccm-filter__btn button {\n    width: 100px; }\n"

/***/ }),

/***/ "./src/app/ccm/ccm-filter/ccm-filter.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ccm/ccm-filter/ccm-filter.component.ts ***!
  \********************************************************/
/*! exports provided: CcmFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcmFilterComponent", function() { return CcmFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var shared_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/services/customer.service */ "./src/shared/services/customer.service.ts");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/observable/concat */ "./node_modules/rxjs/internal/observable/concat.js");
/* harmony import */ var rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/operators/tap */ "./node_modules/rxjs/internal/operators/tap.js");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var constants_care_activity__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! constants/care-activity */ "./src/constants/care-activity.ts");
/* harmony import */ var constants_datepicker_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! constants/datepicker-config */ "./src/constants/datepicker-config.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var shared_services_care_activity_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! shared/services/care-activity.service */ "./src/shared/services/care-activity.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _ccm_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ccm.service */ "./src/app/ccm/ccm.service.ts");
/* harmony import */ var app_role_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/role.service */ "./src/app/role.service.ts");
/* harmony import */ var shared_services_branch_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! shared/services/branch.service */ "./src/shared/services/branch.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var CcmFilterComponent = /** @class */ (function () {
    function CcmFilterComponent(_customerSv, _emitter, _notify, _careActivitySv, ccmSv, role, _branchSv) {
        this._customerSv = _customerSv;
        this._emitter = _emitter;
        this._notify = _notify;
        this._careActivitySv = _careActivitySv;
        this.ccmSv = ccmSv;
        this.role = role;
        this._branchSv = _branchSv;
        this.filterTerm = {
            customer: null,
            status: null,
            dateActivity: null,
            branchId: null,
        };
        // branches
        this.branches = [];
        this.isLoadingBranch = false;
        this.CARE_ACTIVITY_STATUSES = constants_care_activity__WEBPACK_IMPORTED_MODULE_13__["CARE_ACTIVITY_STATUSES"];
        this.DATEPICKER_CONFIG = constants_datepicker_config__WEBPACK_IMPORTED_MODULE_14__["DATEPICKER_CONFIG"];
        this.customers = Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        this.customerInput$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isLoadingCusotmer = false;
    }
    Object.defineProperty(CcmFilterComponent.prototype, "roleAccess", {
        get: function () {
            return this.role.is_admin || this.role.is_sale_director;
        },
        enumerable: true,
        configurable: true
    });
    CcmFilterComponent.prototype.ngOnInit = function () {
        this._initSearchCustomers();
        this._onEventEmitter();
        this._getBranchList();
    };
    CcmFilterComponent.prototype.ngOnDestroy = function () {
        this.subscriber.unsubscribe();
    };
    CcmFilterComponent.prototype._onEventEmitter = function () {
        this.subscriber = this._emitter.caseNumber$.subscribe(function (res) { });
    };
    CcmFilterComponent.prototype._getBranchList = function () {
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
    CcmFilterComponent.prototype._initSearchCustomers = function () {
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
    CcmFilterComponent.prototype._searchCustomers = function (customers) {
        var _this = this;
        this.customers = Object(rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_7__["concat"])(Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(customers), // default items
        this.customerInput$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])(), Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_10__["tap"])(function () { return (_this.isLoadingCusotmer = true); }), Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (term) {
            return _this._customerSv
                .filterCustomers({
                page: 0,
                size: 100,
                sort: 'asc',
                column: 'id',
                txtSearch: term || '',
            })
                .map(function (res) { return res.customerList; })
                .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_12__["catchError"])(function () { return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])([]); }), // empty list on error
            Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_10__["tap"])(function () { return (_this.isLoadingCusotmer = false); }));
        })));
    };
    CcmFilterComponent.prototype.onValueChange = function (event) {
        this.filterTerm.dateActivity = event;
    };
    CcmFilterComponent.prototype.filterCareActivity = function () {
        var params = {};
        if (this.filterTerm.customer) {
            params.customerId = this.filterTerm.customer.id;
        }
        if (this.filterTerm.status) {
            params.status = this.filterTerm.status;
        }
        if (this.filterTerm.dateActivity) {
            params.dateActivity = moment__WEBPACK_IMPORTED_MODULE_15__(this.filterTerm.dateActivity).format('YYYY/MM/DD');
        }
        if (this.filterTerm.branchId) {
            params.branchId = this.filterTerm.branchId;
        }
        this._emitter.publishData({
            type: constants_emitter__WEBPACK_IMPORTED_MODULE_5__["EMITTER_TYPE"].FILTER_CARE_ACTIVITY,
            params: params,
        });
    };
    CcmFilterComponent.prototype.downloadCCM = function () {
        var _this = this;
        if (!this.ccmSv.date) {
            return;
        }
        var params = {
            date: this.ccmSv.date,
        };
        if (this.filterTerm.customer) {
            params.customerId = this.filterTerm.customer.id;
        }
        if (this.filterTerm.status) {
            params.status = this.filterTerm.status;
        }
        if (this.filterTerm.dateActivity) {
            params.dateActivity = moment__WEBPACK_IMPORTED_MODULE_15__(this.filterTerm.dateActivity).format('YYYY/MM/DD');
        }
        this._careActivitySv.exportCCM(params).subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_17__["saveAs"])(res, "customer-care-activity-" + moment__WEBPACK_IMPORTED_MODULE_15__().unix() + ".xlsx");
        }, function (errors) {
            _this._notify.error(errors);
        });
    };
    CcmFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccm-filter',
            template: __webpack_require__(/*! ./ccm-filter.component.html */ "./src/app/ccm/ccm-filter/ccm-filter.component.html"),
            styles: [__webpack_require__(/*! ./ccm-filter.component.scss */ "./src/app/ccm/ccm-filter/ccm-filter.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"],
            shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"],
            shared_services_care_activity_service__WEBPACK_IMPORTED_MODULE_16__["CareActivityService"],
            _ccm_service__WEBPACK_IMPORTED_MODULE_18__["CcmService"],
            app_role_service__WEBPACK_IMPORTED_MODULE_19__["RoleService"],
            shared_services_branch_service__WEBPACK_IMPORTED_MODULE_20__["BranchService"]])
    ], CcmFilterComponent);
    return CcmFilterComponent;
}());



/***/ }),

/***/ "./src/app/ccm/ccm-filter/ccm-filter.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/ccm/ccm-filter/ccm-filter.module.ts ***!
  \*****************************************************/
/*! exports provided: CcmFilterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcmFilterModule", function() { return CcmFilterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ccm_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ccm-filter.component */ "./src/app/ccm/ccm-filter/ccm-filter.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var shared_services_care_activity_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/services/care-activity.service */ "./src/shared/services/care-activity.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _ccm_filter_component__WEBPACK_IMPORTED_MODULE_2__["CcmFilterComponent"],
    },
];
var CcmFilterModule = /** @class */ (function () {
    function CcmFilterModule() {
    }
    CcmFilterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot()],
            declarations: [_ccm_filter_component__WEBPACK_IMPORTED_MODULE_2__["CcmFilterComponent"]],
            providers: [shared_services_care_activity_service__WEBPACK_IMPORTED_MODULE_7__["CareActivityService"]],
        })
    ], CcmFilterModule);
    return CcmFilterModule;
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
//# sourceMappingURL=ccm-filter-ccm-filter-module.2be69efdb1c6ec842f99.js.map