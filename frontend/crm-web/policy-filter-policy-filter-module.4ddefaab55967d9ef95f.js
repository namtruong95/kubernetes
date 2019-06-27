(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["policy-filter-policy-filter-module"],{

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

/***/ "./src/app/ssm/policy/policy-filter/policy-filter.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/ssm/policy/policy-filter/policy-filter.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form novalidate>\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"PolicyName\">Policy Name</label>\n        <input type=\"text\" id=\"PolicyName\"\n          autocomplete=\"new-name\"\n          class=\"form-control\"\n          name=\"policyName\"\n          placeholder=\"please enter policy name\"\n          [(ngModel)]=\"filterTerm.policyName\">\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"serviceTerm\">Type Of Service</label>\n        <ng-select\n          [items]=\"serviceTerms\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingServiceTerm\"\n          placeholder=\"please select type of service\"\n          [searchable]=\"false\"\n          name=\"serviceTerm\"\n          [(ngModel)]=\"filterTerm.serviceTerm\"\n          bindLabel=\"name\">\n        </ng-select>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"form-group\">\n        <label for=\"typeOfService\">Service Term</label>\n        <ng-select\n          [items]=\"typeOfServices\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingTypeOfService\"\n          placeholder=\"please select service term\"\n          [searchable]=\"false\"\n          name=\"typeOfServices\"\n          [(ngModel)]=\"filterTerm.typeOfService\"\n          bindLabel=\"name\">\n        </ng-select>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 form-group policy-filter__btn\">\n      <button type=\"button\" class=\"btn btn-primary\"\n        (click)=\"filterPolicy()\">\n        <i class=\"fa fa-search mr-2\"></i>\n        Filter\n      </button>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <button type=\"button\" class=\"btn btn-primary mr-2\"\n        (click)=\"exportPolicy()\">\n        <i class=\"fa fa-download mr-2\"></i>\n        Export\n      </button>\n      <!-- <button type=\"button\" class=\"btn btn-primary mx-2\">Import</button> -->\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/ssm/policy/policy-filter/policy-filter.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/ssm/policy/policy-filter/policy-filter.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".policy-filter__btn {\n  margin-top: 31px; }\n  .policy-filter__btn button {\n    width: 100px; }\n"

/***/ }),

/***/ "./src/app/ssm/policy/policy-filter/policy-filter.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ssm/policy/policy-filter/policy-filter.component.ts ***!
  \*********************************************************************/
/*! exports provided: PolicyFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyFilterComponent", function() { return PolicyFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/services/customer-classification.service */ "./src/shared/services/customer-classification.service.ts");
/* harmony import */ var shared_services_policy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/services/policy.service */ "./src/shared/services/policy.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
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








var PolicyFilterComponent = /** @class */ (function () {
    function PolicyFilterComponent(_emitter, _notify, _customerClassificationSv, _policySv) {
        this._emitter = _emitter;
        this._notify = _notify;
        this._customerClassificationSv = _customerClassificationSv;
        this._policySv = _policySv;
        this.filterTerm = {
            policyName: '',
            serviceTerm: null,
            typeOfService: null,
        };
        // type of serivice
        this.isLoadingTypeOfService = false;
        this.typeOfServices = [];
        // service term
        this.isLoadingServiceTerm = false;
        this.serviceTerms = [];
    }
    Object.defineProperty(PolicyFilterComponent.prototype, "filterToJSON", {
        get: function () {
            var params = {};
            if (this.filterTerm.policyName) {
                params.policyName = this.filterTerm.policyName.trim();
            }
            if (this.filterTerm.serviceTerm) {
                params.serviceTermId = this.filterTerm.serviceTerm.id;
            }
            if (this.filterTerm.typeOfService) {
                params.typeOfServiceId = this.filterTerm.typeOfService.id;
            }
            return params;
        },
        enumerable: true,
        configurable: true
    });
    PolicyFilterComponent.prototype.ngOnInit = function () {
        this._getTypeOfServices();
        this._getServicesterm();
    };
    PolicyFilterComponent.prototype.filterPolicy = function () {
        this._emitter.publishData({
            type: constants_emitter__WEBPACK_IMPORTED_MODULE_2__["EMITTER_TYPE"].FILTER_POLICY,
            params: this.filterToJSON,
        });
    };
    PolicyFilterComponent.prototype._getTypeOfServices = function () {
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
    PolicyFilterComponent.prototype._getServicesterm = function () {
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
    PolicyFilterComponent.prototype.exportPolicy = function () {
        var _this = this;
        var params = __assign({}, this.filterToJSON, { sort: 'asc', column: 'id' });
        this._policySv.exportPolicy(params).subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(res, "policy-" + moment__WEBPACK_IMPORTED_MODULE_7__().unix() + ".xlsx");
        }, function (errors) {
            _this._notify.error(errors);
        });
    };
    PolicyFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-policy-filter',
            template: __webpack_require__(/*! ./policy-filter.component.html */ "./src/app/ssm/policy/policy-filter/policy-filter.component.html"),
            styles: [__webpack_require__(/*! ./policy-filter.component.scss */ "./src/app/ssm/policy/policy-filter/policy-filter.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_1__["EventEmitterService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"],
            shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_4__["CustomerClassificationService"],
            shared_services_policy_service__WEBPACK_IMPORTED_MODULE_5__["PolicyService"]])
    ], PolicyFilterComponent);
    return PolicyFilterComponent;
}());



/***/ }),

/***/ "./src/app/ssm/policy/policy-filter/policy-filter.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/ssm/policy/policy-filter/policy-filter.module.ts ***!
  \******************************************************************/
/*! exports provided: PolicyFilterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyFilterModule", function() { return PolicyFilterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _policy_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./policy-filter.component */ "./src/app/ssm/policy/policy-filter/policy-filter.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/services/customer-classification.service */ "./src/shared/services/customer-classification.service.ts");
/* harmony import */ var shared_services_policy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/services/policy.service */ "./src/shared/services/policy.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _policy_filter_component__WEBPACK_IMPORTED_MODULE_2__["PolicyFilterComponent"],
    },
];
var PolicyFilterModule = /** @class */ (function () {
    function PolicyFilterModule() {
    }
    PolicyFilterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"]],
            declarations: [_policy_filter_component__WEBPACK_IMPORTED_MODULE_2__["PolicyFilterComponent"]],
            providers: [shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_6__["CustomerClassificationService"], shared_services_policy_service__WEBPACK_IMPORTED_MODULE_7__["PolicyService"]],
        })
    ], PolicyFilterModule);
    return PolicyFilterModule;
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

/***/ "./src/models/customer-classification.ts":
/*!***********************************************!*\
  !*** ./src/models/customer-classification.ts ***!
  \***********************************************/
/*! exports provided: CustomerClassification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerClassification", function() { return CustomerClassification; });
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

var CustomerClassification = /** @class */ (function (_super) {
    __extends(CustomerClassification, _super);
    function CustomerClassification() {
        return _super.call(this) || this;
    }
    Object.defineProperty(CustomerClassification.prototype, "name", {
        get: function () {
            return this._name || '';
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: true,
        configurable: true
    });
    CustomerClassification.prototype.deserialize = function (input) {
        if (!input) {
            return;
        }
        _super.prototype.deserialize.call(this, input);
        Object.assign(this, input);
        return this;
    };
    return CustomerClassification;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]));



/***/ })

}]);
//# sourceMappingURL=policy-filter-policy-filter-module.4ddefaab55967d9ef95f.js.map