(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotation-quotation-module"],{

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

/***/ "./src/app/ssm/quotation/quotation-list/quotation-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-list/quotation-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive py-4\">\n  <span>Showing {{ query.from }} to {{ query.to }} of {{ query.totalElements }} entries</span>\n  <table class=\"table quotation-table\">\n    <thead>\n      <tr>\n        <th>Action</th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('customerName')\">\n          Cusotmer Name\n          <i class=\"fa {{ getClassOrder('customerName') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('typeOfServiceName')\">\n          Service Term\n          <i class=\"fa {{ getClassOrder('typeOfServiceName') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('serviceTermName')\">\n          Type Of Service\n          <i class=\"fa {{ getClassOrder('serviceTermName') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('bandWidth')\">\n          Bandwidth (Mbps)\n          <i class=\"fa {{ getClassOrder('bandWidth') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('distance')\">\n          Distance  (km)\n          <i class=\"fa {{ getClassOrder('distance') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('otcNum')\">\n          OTC (MMK)\n          <i class=\"fa {{ getClassOrder('otcNum') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('mrcNum')\">\n          MRC (MMK)\n          <i class=\"fa {{ getClassOrder('mrcNum') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('total')\">\n          Total Price (MMK)\n          <i class=\"fa {{ getClassOrder('total') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('reduceMrc')\">\n          Reduce MRC (%)\n          <i class=\"fa {{ getClassOrder('reduceMrc') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('reduceOtc')\">\n          Reduce OTC (%)\n          <i class=\"fa {{ getClassOrder('reduceOtc') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('totalTax')\">\n          Real Price (MMK)\n          <i class=\"fa {{ getClassOrder('totalTax') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('timeForHire')\">\n          Time For Hire (months)\n          <i class=\"fa {{ getClassOrder('timeForHire') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('timeForProvide')\">\n          Time For Provide (days)\n          <i class=\"fa {{ getClassOrder('timeForProvide') }}\"></i>\n        </th>\n        <th class=\"cursor-pointer\" (click)=\"addOrder('staffName')\">\n          Sale Staff\n          <i class=\"fa {{ getClassOrder('staffName') }}\"></i>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let quotation of quotationList;\">\n        <td>\n          <button type=\"button\" class=\"mr-1 btn btn-info\" appBtnDblClick (click)=\"exportQuotation(quotation.id)\"><i class=\"far fa-file-pdf\"></i></button>\n          <button type=\"button\" class=\"mr-1 btn btn-info\" (click)=\"editQuotation(quotation)\"><i class=\"fa fa-edit\"></i></button>\n          <button type=\"button\" class=\"mr-1 btn btn-danger\" (click)=\"removeQuotation(quotation)\"><i class=\"fa fa-trash\"></i></button>\n        </td>\n        <td>{{ quotation.customerName }}</td>\n        <td>{{ quotation.typeOfServiceName }}</td>\n        <td>{{ quotation.serviceTermName }}</td>\n        <td>{{ quotation.bandWidth }}</td>\n        <td>{{ quotation.distance }}</td>\n        <td>{{ quotation.otc }}</td>\n        <td>{{ quotation.mrc }}</td>\n        <td>{{ quotation.totalStr }}</td>\n        <td>{{ quotation.reduceMrc }}</td>\n        <td>{{ quotation.reduceOtc }}</td>\n        <td>{{ quotation.totalTaxStr }}</td>\n        <td>{{ quotation.timeForHire }}</td>\n        <td>{{ quotation.timeForProvide }}</td>\n        <td>{{ quotation.staffName }}</td>\n      </tr>\n      <tr [ngClass]=\"{ 'hidden': quotationList.length > 0 }\">\n        <td colspan=\"14\" class=\"text-center\">\n          Data not found\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"pagination mt-4\" [ngClass]=\"{ 'hidden': quotationList.length === 0 }\">\n  <pagination\n    class=\"pagination-md\"\n    [totalItems]=\"query.totalElements\"\n    [(ngModel)]=\"query.currentPage\"\n    pageBtnClass=\"btn\"\n    [itemsPerPage]=\"query.size\"\n    [maxSize]=\"5\"\n    (pageChanged)=\"pageChanged($event)\"\n    previousText=\"&lsaquo;\"\n    nextText=\"&rsaquo;\"\n    firstText=\"&laquo;\"\n    lastText=\"&raquo;\">\n  </pagination>\n</div>\n"

/***/ }),

/***/ "./src/app/ssm/quotation/quotation-list/quotation-list.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-list/quotation-list.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quotation-table.table thead th,\n.quotation-table.table tbody td {\n  min-width: 200px; }\n  .quotation-table.table thead th:first-child,\n  .quotation-table.table tbody td:first-child {\n    max-width: 150px; }\n  .quotation-table.table thead th:nth-child(13), .quotation-table.table thead th:nth-child(14),\n  .quotation-table.table tbody td:nth-child(13),\n  .quotation-table.table tbody td:nth-child(14) {\n    min-width: 230px; }\n"

/***/ }),

/***/ "./src/app/ssm/quotation/quotation-list/quotation-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-list/quotation-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: QuotationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationListComponent", function() { return QuotationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_utils_query_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/utils/query-builder */ "./src/shared/utils/query-builder.ts");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/orderBy */ "./node_modules/lodash/orderBy.js");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/clone */ "./node_modules/lodash/clone.js");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_clone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var shared_services_quotation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/services/quotation.service */ "./src/shared/services/quotation.service.ts");
/* harmony import */ var _quotation_modal_delete_quotation_modal_delete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../quotation-modal-delete/quotation-modal-delete.component */ "./src/app/ssm/quotation/quotation-modal-delete/quotation-modal-delete.component.ts");
/* harmony import */ var _quotation_modal_edit_quotation_modal_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../quotation-modal-edit/quotation-modal-edit.component */ "./src/app/ssm/quotation/quotation-modal-edit/quotation-modal-edit.component.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
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













var QuotationListComponent = /** @class */ (function () {
    function QuotationListComponent(_notify, _emitter, _modalService, _quotationSv) {
        this._notify = _notify;
        this._emitter = _emitter;
        this._modalService = _modalService;
        this._quotationSv = _quotationSv;
        this.isLoadingExportPdf = false;
        this.query = new shared_utils_query_builder__WEBPACK_IMPORTED_MODULE_1__["QueryBuilder"]();
        this.quotationList = [];
        this._orderArr = [];
        this._filterQuery = {};
    }
    Object.defineProperty(QuotationListComponent.prototype, "orderColumnName", {
        get: function () {
            return this._orderArr.map(function (item) {
                return item.columnName;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuotationListComponent.prototype, "orderType", {
        get: function () {
            return this._orderArr.map(function (item) {
                return item.type;
            });
        },
        enumerable: true,
        configurable: true
    });
    QuotationListComponent.prototype.ngOnInit = function () {
        this._filterQuotations();
        this._onEventEmitter();
    };
    QuotationListComponent.prototype.ngOnDestroy = function () {
        this._subscriber.unsubscribe();
    };
    QuotationListComponent.prototype._onEventEmitter = function () {
        var _this = this;
        this._subscriber = this._emitter.caseNumber$.subscribe(function (data) {
            if (data && data.type === constants_emitter__WEBPACK_IMPORTED_MODULE_6__["EMITTER_TYPE"].FILTER_QUOTATION) {
                _this.query.resetQuery();
                _this._filterQuery = data.params;
                _this._filterQuotations();
            }
            if (data && data.type === constants_emitter__WEBPACK_IMPORTED_MODULE_6__["EMITTER_TYPE"].CREATE_QUOTATION) {
                _this.query.resetQuery();
                _this._filterQuotations();
            }
        });
    };
    QuotationListComponent.prototype._filterQuotations = function () {
        var _this = this;
        var parmas = __assign({}, this.query.queryJSON(), this._filterQuery);
        this._quotationSv.filterQuotations(parmas).subscribe(function (res) {
            _this.quotationList = res.quotationList;
            _this.query.setQuery(res);
        }, function (errors) {
            _this._notify.error(errors);
        });
    };
    QuotationListComponent.prototype.editQuotation = function (quotation) {
        var config = {
            class: 'modal-lg',
            initialState: {
                quotation: lodash_clone__WEBPACK_IMPORTED_MODULE_3__(quotation),
            },
        };
        this._openModal(_quotation_modal_edit_quotation_modal_edit_component__WEBPACK_IMPORTED_MODULE_10__["QuotationModalEditComponent"], config);
    };
    QuotationListComponent.prototype.removeQuotation = function (quotation) {
        var config = {
            class: 'modal-md',
            initialState: {
                quotation: quotation,
            },
        };
        this._openModal(_quotation_modal_delete_quotation_modal_delete_component__WEBPACK_IMPORTED_MODULE_9__["QuotationModalDeleteComponent"], config);
    };
    QuotationListComponent.prototype.addOrder = function (columnName) {
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
    QuotationListComponent.prototype._orderCustomer = function () {
        this.quotationList = lodash_orderBy__WEBPACK_IMPORTED_MODULE_2__(this.quotationList, this.orderColumnName, this.orderType);
    };
    QuotationListComponent.prototype.getClassOrder = function (columnName) {
        if (this._orderArr.length > 0 && this._orderArr[0].columnName === columnName) {
            if (this._orderArr[0].type === 'desc') {
                return 'fa-sort-down';
            }
            return 'fa-sort-up';
        }
        return 'fa-sort';
    };
    QuotationListComponent.prototype._openModal = function (comp, config) {
        var _this = this;
        var subscribe = this._modalService.onHidden.subscribe(function (reason) {
            subscribe.unsubscribe();
            if (reason === 'reload') {
                _this._filterQuotations();
            }
        });
        this._modalService.show(comp, config);
    };
    QuotationListComponent.prototype.pageChanged = function (event) {
        this.query.currentPage = event.page;
        this._filterQuotations();
    };
    QuotationListComponent.prototype.exportQuotation = function (id) {
        var _this = this;
        var params = {
            quotationId: id,
        };
        this.isLoadingExportPdf = true;
        this._quotationSv.exportQuotation(params).subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_11__["saveAs"])(res, "quotation-" + moment__WEBPACK_IMPORTED_MODULE_12__().unix() + ".pdf");
            _this.isLoadingExportPdf = false;
        }, function (errors) {
            _this.isLoadingExportPdf = false;
            _this._notify.error(errors);
        });
    };
    QuotationListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quotation-list',
            template: __webpack_require__(/*! ./quotation-list.component.html */ "./src/app/ssm/quotation/quotation-list/quotation-list.component.html"),
            styles: [__webpack_require__(/*! ./quotation-list.component.scss */ "./src/app/ssm/quotation/quotation-list/quotation-list.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"],
            shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"],
            shared_services_quotation_service__WEBPACK_IMPORTED_MODULE_8__["QuotationService"]])
    ], QuotationListComponent);
    return QuotationListComponent;
}());



/***/ }),

/***/ "./src/app/ssm/quotation/quotation-list/quotation-list.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-list/quotation-list.module.ts ***!
  \***********************************************************************/
/*! exports provided: QuotationListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationListModule", function() { return QuotationListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _quotation_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quotation-list.component */ "./src/app/ssm/quotation/quotation-list/quotation-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var shared_services_quotation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/services/quotation.service */ "./src/shared/services/quotation.service.ts");
/* harmony import */ var shared_utils_no_dbl_click_no_dbl_click_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/utils/no-dbl-click/no-dbl-click.module */ "./src/shared/utils/no-dbl-click/no-dbl-click.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var QuotationListModule = /** @class */ (function () {
    function QuotationListModule() {
    }
    QuotationListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(), shared_utils_no_dbl_click_no_dbl_click_module__WEBPACK_IMPORTED_MODULE_7__["NoDblClickModule"]],
            declarations: [_quotation_list_component__WEBPACK_IMPORTED_MODULE_2__["QuotationListComponent"]],
            exports: [_quotation_list_component__WEBPACK_IMPORTED_MODULE_2__["QuotationListComponent"]],
            providers: [shared_services_quotation_service__WEBPACK_IMPORTED_MODULE_6__["QuotationService"]],
        })
    ], QuotationListModule);
    return QuotationListModule;
}());



/***/ }),

/***/ "./src/app/ssm/quotation/quotation-map/quotation-map.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-map/quotation-map.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map\n  [latitude]=\"lat\"\n  [longitude]=\"lng\"\n  [zoom]=\"zoom\"\n  [disableDoubleClickZoom]=\"true\"\n  [disableDefaultUI]=\"false\"\n  [zoomControl]=\"true\"\n  [gestureHandling]=\"'coopeative'\">\n\n  <agm-marker\n      *ngFor=\"let m of markers; let i = index\"\n      [latitude]=\"m.lat\"\n      [longitude]=\"m.lng\"\n      [label]=\"m.label\"\n      [iconUrl]=\"m.iconUrl\"\n      [markerDraggable]=\"m.draggable\">\n  </agm-marker>\n</agm-map>\n"

/***/ }),

/***/ "./src/app/ssm/quotation/quotation-map/quotation-map.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-map/quotation-map.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 100%;\n  min-height: 500px;\n  max-height: 500px; }\n\n@media (max-width: 991.98px) {\n  agm-map {\n    height: 500px;\n    margin-top: 20px; } }\n"

/***/ }),

/***/ "./src/app/ssm/quotation/quotation-map/quotation-map.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-map/quotation-map.component.ts ***!
  \************************************************************************/
/*! exports provided: QuotationMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationMapComponent", function() { return QuotationMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var constants_gmap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/gmap */ "./src/constants/gmap.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuotationMapComponent = /** @class */ (function () {
    function QuotationMapComponent(_emitter, _router) {
        this._emitter = _emitter;
        this._router = _router;
        this.lat = constants_gmap__WEBPACK_IMPORTED_MODULE_4__["GMAP_DEFAULT"].LAT;
        this.lng = constants_gmap__WEBPACK_IMPORTED_MODULE_4__["GMAP_DEFAULT"].LNG;
        this.zoom = 12;
        this.markers = [];
    }
    QuotationMapComponent.prototype.ngOnInit = function () {
        if (this.markersInput && this.markersInput.length > 0) {
            this.markers = this.markersInput;
            this.lat = this.markersInput[0].lat;
            this.lng = this.markersInput[0].lng;
        }
        this._onEventEmitter();
    };
    QuotationMapComponent.prototype.ngOnDestroy = function () {
        this._subscriber.unsubscribe();
        this._subscriberRouter.unsubscribe();
    };
    QuotationMapComponent.prototype._onEventEmitter = function () {
        var _this = this;
        this._subscriber = this._emitter.caseNumber$.subscribe(function (data) {
            if (data && data.type === constants_emitter__WEBPACK_IMPORTED_MODULE_2__["EMITTER_TYPE"].GMAP_DISTANCE) {
                _this.markers = data.data;
                if (data.data && data.data.length > 0) {
                    _this.lat = data.data[0].lat || constants_gmap__WEBPACK_IMPORTED_MODULE_4__["GMAP_DEFAULT"].LAT;
                    _this.lng = data.data[0].lng || constants_gmap__WEBPACK_IMPORTED_MODULE_4__["GMAP_DEFAULT"].LNG;
                }
                else {
                    _this.lat = constants_gmap__WEBPACK_IMPORTED_MODULE_4__["GMAP_DEFAULT"].LAT;
                    _this.lng = constants_gmap__WEBPACK_IMPORTED_MODULE_4__["GMAP_DEFAULT"].LNG;
                }
            }
            if (data && data.type === constants_emitter__WEBPACK_IMPORTED_MODULE_2__["EMITTER_TYPE"].CHANGE_CUSTOMER_QUOTATION) {
                if (data.data) {
                    _this.lat = data.data.lat;
                    _this.lng = data.data.lng;
                    _this.markers = [data.data];
                }
            }
        });
        this._subscriberRouter = this._router.events.subscribe(function (res) {
            if (res instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.lat = constants_gmap__WEBPACK_IMPORTED_MODULE_4__["GMAP_DEFAULT"].LAT;
                _this.lng = constants_gmap__WEBPACK_IMPORTED_MODULE_4__["GMAP_DEFAULT"].LNG;
                _this.markers = [];
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('markersInput'),
        __metadata("design:type", Array)
    ], QuotationMapComponent.prototype, "markersInput", void 0);
    QuotationMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quotation-map',
            template: __webpack_require__(/*! ./quotation-map.component.html */ "./src/app/ssm/quotation/quotation-map/quotation-map.component.html"),
            styles: [__webpack_require__(/*! ./quotation-map.component.scss */ "./src/app/ssm/quotation/quotation-map/quotation-map.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_1__["EventEmitterService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], QuotationMapComponent);
    return QuotationMapComponent;
}());



/***/ }),

/***/ "./src/app/ssm/quotation/quotation-map/quotation-map.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-map/quotation-map.module.ts ***!
  \*********************************************************************/
/*! exports provided: QuotationMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationMapModule", function() { return QuotationMapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _quotation_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quotation-map.component */ "./src/app/ssm/quotation/quotation-map/quotation-map.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/snazzy-info-window */ "./node_modules/@agm/snazzy-info-window/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var QuotationMapModule = /** @class */ (function () {
    function QuotationMapModule() {
    }
    QuotationMapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                    // please get your own API key here:
                    // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
                    apiKey: environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].gm_api_key,
                    libraries: ['places'],
                    apiVersion: '3.31',
                }),
                _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_5__["AgmSnazzyInfoWindowModule"],
            ],
            declarations: [_quotation_map_component__WEBPACK_IMPORTED_MODULE_2__["QuotationMapComponent"]],
            exports: [_quotation_map_component__WEBPACK_IMPORTED_MODULE_2__["QuotationMapComponent"]],
        })
    ], QuotationMapModule);
    return QuotationMapModule;
}());



/***/ }),

/***/ "./src/app/ssm/quotation/quotation-modal-delete/quotation-modal-delete.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-modal-delete/quotation-modal-delete.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h5 class=\"modal-title\">Do you want to delete?</h5>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n      <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n    <div class=\"text-center\">\n      <button type=\"button\" class=\"btn btn-secondary w-25 mr-2\" (click)=\"close()\">Cancel</button>\n      <button type=\"button\" class=\"btn btn-primary w-25 ml-2\" (click)=\"removeQuotation()\"\n      [disabled]=\"isLoading\">\n      OK\n      <i *ngIf=\"isLoading\" class=\"fa fa-refresh fa-spin\"></i>\n    </button>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/ssm/quotation/quotation-modal-delete/quotation-modal-delete.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-modal-delete/quotation-modal-delete.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ssm/quotation/quotation-modal-delete/quotation-modal-delete.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-modal-delete/quotation-modal-delete.component.ts ***!
  \******************************************************************************************/
/*! exports provided: QuotationModalDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationModalDeleteComponent", function() { return QuotationModalDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var shared_services_quotation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/services/quotation.service */ "./src/shared/services/quotation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuotationModalDeleteComponent = /** @class */ (function () {
    function QuotationModalDeleteComponent(_bsModalRef, _modalService, _quotationSv, _notify) {
        this._bsModalRef = _bsModalRef;
        this._modalService = _modalService;
        this._quotationSv = _quotationSv;
        this._notify = _notify;
        this.isLoading = false;
    }
    QuotationModalDeleteComponent.prototype.ngOnInit = function () { };
    QuotationModalDeleteComponent.prototype.removeQuotation = function () {
        var _this = this;
        this.isLoading = true;
        this._quotationSv.deleteQuotation(this.quotation.id).subscribe(function (res) {
            _this._notify.success('delete quotation successs');
            _this.close('reload');
            _this.isLoading = false;
        }, function (errors) {
            _this.isLoading = false;
            _this._notify.error(errors);
        });
    };
    QuotationModalDeleteComponent.prototype.close = function (reason) {
        this._modalService.setDismissReason(reason);
        this._bsModalRef.hide();
    };
    QuotationModalDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quotation-modal-delete',
            template: __webpack_require__(/*! ./quotation-modal-delete.component.html */ "./src/app/ssm/quotation/quotation-modal-delete/quotation-modal-delete.component.html"),
            styles: [__webpack_require__(/*! ./quotation-modal-delete.component.scss */ "./src/app/ssm/quotation/quotation-modal-delete/quotation-modal-delete.component.scss")],
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            shared_services_quotation_service__WEBPACK_IMPORTED_MODULE_3__["QuotationService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__["NotifyService"]])
    ], QuotationModalDeleteComponent);
    return QuotationModalDeleteComponent;
}());



/***/ }),

/***/ "./src/app/ssm/quotation/quotation-modal-delete/quotation-modal-delete.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-modal-delete/quotation-modal-delete.module.ts ***!
  \***************************************************************************************/
/*! exports provided: QuotationModalDeleteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationModalDeleteModule", function() { return QuotationModalDeleteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _quotation_modal_delete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quotation-modal-delete.component */ "./src/app/ssm/quotation/quotation-modal-delete/quotation-modal-delete.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuotationModalDeleteModule = /** @class */ (function () {
    function QuotationModalDeleteModule() {
    }
    QuotationModalDeleteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_quotation_modal_delete_component__WEBPACK_IMPORTED_MODULE_2__["QuotationModalDeleteComponent"]],
            entryComponents: [_quotation_modal_delete_component__WEBPACK_IMPORTED_MODULE_2__["QuotationModalDeleteComponent"]],
            exports: [_quotation_modal_delete_component__WEBPACK_IMPORTED_MODULE_2__["QuotationModalDeleteComponent"]],
        })
    ], QuotationModalDeleteModule);
    return QuotationModalDeleteModule;
}());



/***/ }),

/***/ "./src/app/ssm/quotation/quotation-modal-edit/quotation-modal-edit.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-modal-edit/quotation-modal-edit.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Update Quotation</h5>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n\n<div class=\"modal-body customer-edit\">\n  <form #QuotationForm=\"ngForm\" autocomplete=\"off\" novalidate>\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"SaleActivity\">Customer Name <i class=\"required\">&#40;*&#41;</i></label>\n        <ng-select\n          [items]=\"customers | async\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingCusotmer\"\n          placeholder=\"please select customer\"\n          [searchable]=\"true\"\n          name=\"customer\"\n          [(ngModel)]=\"quotation.customer\"\n          bindLabel=\"customerName\"\n          [typeahead]=\"customerInput$\"\n          (change)=\"changeCusotmer()\"\n          required>\n        </ng-select>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"typeOfService\">Service Term <i class=\"required\">&#40;*&#41;</i></label>\n        <ng-select\n          [items]=\"typeOfServices\"\n          class=\"text-left\"\n          [closeOnSelect]=\"true\"\n          [clearable]=\"true\"\n          [loading]=\"isLoadingTypeOfService\"\n          placeholder=\"please select service term\"\n          [searchable]=\"false\"\n          name=\"typeOfService\"\n          [(ngModel)]=\"quotation.typeOfService\"\n          (change)=\"filterPolicies()\"\n          bindLabel=\"name\"\n          required>\n        </ng-select>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"serviceTerm\">Type Of Service <i class=\"required\">&#40;*&#41;</i></label>\n          <ng-select\n            [items]=\"serviceTerms\"\n            class=\"text-left\"\n            [closeOnSelect]=\"true\"\n            [clearable]=\"true\"\n            [loading]=\"isLoadingServiceTerm\"\n            placeholder=\"please select type of service\"\n            [searchable]=\"false\"\n            name=\"serviceTerm\"\n            [(ngModel)]=\"quotation.serviceTerm\"\n            (change)=\"filterPolicies()\"\n            bindLabel=\"name\"\n            required>\n          </ng-select>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"bandWidth\">Bandwidth (Mbps) <i class=\"required\">&#40;*&#41;</i></label>\n        <input type=\"text\" id=\"bandWidth\"\n          autocomplete=\"new-bandWidth\"\n          class=\"form-control\"\n          name=\"bandWidth\"\n          appNumbericValidator\n          placeholder=\"please enter band width\"\n          (keydown.enter)=\"filterPolicies()\"\n          (blur)=\"filterPolicies()\"\n          [(ngModel)]=\"quotation.bandWidth\"\n          required>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"otc\">OTC (MMK) <i class=\"required\">&#40;*&#41;</i></label>\n        <input type=\"text\" id=\"otc\"\n          autocomplete=\"new-otc\"\n          class=\"form-control\"\n          name=\"otc\"\n          #OTC\n          placeholder=\"please enter otc site\"\n          [ngModel]=\"quotation.otc\"\n          (ngModelChange)=\"changeOtc()\"\n          required>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"mrc\">MRC (MMK)\n          <i class=\"required\">&#40;*&#41;</i>\n          {{ minMaxMrc }}\n        </label>\n        <input type=\"text\" id=\"mrc\"\n          autocomplete=\"new-mrc\"\n          class=\"form-control\"\n          name=\"mrc\"\n          #MRC\n          placeholder=\"please enter mrc\"\n          [ngModel]=\"quotation.mrc\"\n          (ngModelChange)=\"changeMrc()\"\n          required>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"reduceOtc\">Reduce OTC (%) <i class=\"required\">&#40;*&#41;</i></label>\n        <input type=\"text\" id=\"reduceOtc\"\n          autocomplete=\"new-reduceOtc\"\n          class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': ReduceOTC1.dirty && ReduceOTC1.errors }\"\n          name=\"reduceOtc\"\n          appNumbericValidator\n          min=\"0\"\n          max=\"100\"\n          placeholder=\"please enter reduce OTC\"\n          #ReduceOTC\n          #ReduceOTC1=\"ngModel\"\n          [(ngModel)]=\"quotation.reduceOtc\"\n          required>\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"ReduceOTC1.dirty && ReduceOTC1.errors?.appNumbericValidator\">Reduce OTC operation must be an integer within 0 and 100</div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"reduceMrc\">Reduce MRC (%) <i class=\"required\">&#40;*&#41;</i></label>\n        <input type=\"text\" id=\"reduceMrc\"\n          autocomplete=\"new-reduceMrc\"\n          class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': ReduceMRC1.dirty && ReduceMRC1.errors }\"\n          name=\"reduceMrc\"\n          appNumbericValidator\n          max=\"100\"\n          min=\"0\"\n          #ReduceMRC\n          #ReduceMRC1=\"ngModel\"\n          placeholder=\"please enter reduce MRC\"\n          [(ngModel)]=\"quotation.reduceMrc\"\n          required>\n\n        <div class=\"invalid-feedback\"\n          *ngIf=\"ReduceMRC1.dirty && ReduceMRC1.errors?.appNumbericValidator\">Reduce MRC operation must be an integer within 0 and 100</div>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"timeForHire\">Time For Hire (months)</label>\n        <input type=\"text\" id=\"timeForHire\"\n          autocomplete=\"new-timeForHire\"\n          class=\"form-control\"\n          name=\"timeForHire\"\n          appNumbericValidator\n          min=\"0\"\n          placeholder=\"please enter time for hire\"\n          [(ngModel)]=\"quotation.timeForHire\">\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"saleStaff\">Sale Staff</label>\n          <ng-select\n            [items]=\"staffs\"\n            class=\"text-left\"\n            [closeOnSelect]=\"true\"\n            [clearable]=\"true\"\n            [loading]=\"isLoadingStaff\"\n            placeholder=\"please select  sale staff\"\n            [searchable]=\"true\"\n            name=\"staff\"\n            [compareWith]=\"compareWithFn\"\n            [(ngModel)]=\"quotation.assignedStaff\"\n            bindLabel=\"code_full_name\">\n          </ng-select>\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"timeForProvide\">Time For Provide (days)</label>\n        <input type=\"text\" id=\"timeForProvide\"\n          autocomplete=\"new-timeForProvide\"\n          class=\"form-control\"\n          name=\"timeForProvide\"\n          appNumbericValidator\n          min=\"0\"\n          placeholder=\"please enter time for provide\"\n          [(ngModel)]=\"quotation.timeForProvide\">\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label>distance (km)</label>\n        <input type=\"text\"\n          class=\"form-control-plaintext\"\n          name=\"distance\"\n          readonly\n          [ngModel]=\"quotation.distance_km\">\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"totalPrice\">Total Price (MMK)</label>\n        <input type=\"text\" id=\"totalPrice\"\n          autocomplete=\"new-totalPrice\"\n          class=\"form-control-plaintext\"\n          name=\"totalPrice\"\n          readonly\n          placeholder=\"please enter total rrice\"\n          [ngModel]=\"quotation.totalStr\">\n      </div>\n\n      <div class=\"col-lg-6 col-md-12 form-group\">\n        <label for=\"realPrice\">Real Price (MMK)</label>\n        <input type=\"text\" id=\"realPrice\"\n          autocomplete=\"new-realPrice\"\n          class=\"form-control-plaintext\"\n          name=\"realPrice\"\n          readonly\n          [ngModel]=\"quotation.totalTaxStr\">\n      </div>\n\n    </div>\n\n    <div class=\"row mb-4\">\n      <div class=\"col-12 gmap\">\n        <app-quotation-map [markersInput]=\"quotation.markers\"></app-quotation-map>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12 text-center\">\n        <button type=\"button\" class=\"btn btn-secondary w-25 mr-2\" (click)=\"close()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary w-25 ml-2\"\n          (click)=\"updateQuotation()\"\n          [disabled]=\"isLoading || QuotationForm.form.invalid\">\n          OK\n          <i *ngIf=\"isLoading\" class=\"fa fa-refresh fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/ssm/quotation/quotation-modal-edit/quotation-modal-edit.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-modal-edit/quotation-modal-edit.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gmap {\n  height: 500px; }\n"

/***/ }),

/***/ "./src/app/ssm/quotation/quotation-modal-edit/quotation-modal-edit.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-modal-edit/quotation-modal-edit.component.ts ***!
  \**************************************************************************************/
/*! exports provided: QuotationModalEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationModalEditComponent", function() { return QuotationModalEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/concat */ "./node_modules/rxjs/internal/observable/concat.js");
/* harmony import */ var rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/tap */ "./node_modules/rxjs/internal/operators/tap.js");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var shared_services_customer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/services/customer.service */ "./src/shared/services/customer.service.ts");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var shared_services_gmap_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/services/gmap.service */ "./src/shared/services/gmap.service.ts");
/* harmony import */ var shared_helpers_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! shared/helpers/helpers */ "./src/shared/helpers/helpers.ts");
/* harmony import */ var shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! shared/services/customer-classification.service */ "./src/shared/services/customer-classification.service.ts");
/* harmony import */ var shared_services_bts_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! shared/services/bts.service */ "./src/shared/services/bts.service.ts");
/* harmony import */ var shared_services_quotation_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! shared/services/quotation.service */ "./src/shared/services/quotation.service.ts");
/* harmony import */ var shared_services_policy_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! shared/services/policy.service */ "./src/shared/services/policy.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
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





















var QuotationModalEditComponent = /** @class */ (function () {
    function QuotationModalEditComponent(_customerSv, _emitter, _gmapSv, _notify, _customerClassificationSv, _btsSv, _quotationSv, _policySv, _userSv, _bsModalRef, _modalService) {
        this._customerSv = _customerSv;
        this._emitter = _emitter;
        this._gmapSv = _gmapSv;
        this._notify = _notify;
        this._customerClassificationSv = _customerClassificationSv;
        this._btsSv = _btsSv;
        this._quotationSv = _quotationSv;
        this._policySv = _policySv;
        this._userSv = _userSv;
        this._bsModalRef = _bsModalRef;
        this._modalService = _modalService;
        this.customers = Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        this.customerInput$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isLoadingCusotmer = false;
        // type of serivice
        this.isLoadingTypeOfService = false;
        this.typeOfServices = [];
        // service term
        this.isLoadingServiceTerm = false;
        this.serviceTerms = [];
        // sale staffs
        this.staffs = [];
        this.isLoadingStaff = false;
        this.isLoadingBts = false;
        this.btsList = [];
        this.isLoading = false;
        this.compareWithFn = function (a, b) {
            return a.fullName === b.fullName;
        };
    }
    Object.defineProperty(QuotationModalEditComponent.prototype, "btsMakers", {
        get: function () {
            return this.btsList.map(function (bts) {
                return bts.markerToJSON();
            });
        },
        enumerable: true,
        configurable: true
    });
    QuotationModalEditComponent.prototype.ngOnInit = function () {
        this._initSearchCustomers();
        this._getServicesterm();
        this._getTypeOfServices();
        this._getAllBts();
        this._getStaffs();
    };
    QuotationModalEditComponent.prototype._getStaffs = function () {
        var _this = this;
        this.isLoadingStaff = true;
        this._userSv.getAllUsers().subscribe(function (res) {
            _this.staffs = res;
            _this.isLoadingStaff = false;
        }, function (errors) {
            _this.isLoadingStaff = false;
            _this._notify.error(errors);
        });
    };
    QuotationModalEditComponent.prototype._getAllBts = function () {
        var _this = this;
        this.isLoadingBts = true;
        this._btsSv.getAllBts().subscribe(function (res) {
            _this.btsList = res.btsList;
            _this.isLoadingBts = false;
        }, function (errors) {
            _this._notify.error(errors);
            _this.isLoadingBts = false;
        });
    };
    QuotationModalEditComponent.prototype._getServicesterm = function () {
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
    QuotationModalEditComponent.prototype._getTypeOfServices = function () {
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
    QuotationModalEditComponent.prototype._initSearchCustomers = function () {
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
    QuotationModalEditComponent.prototype._searchCustomers = function (customers) {
        var _this = this;
        this.customers = Object(rxjs_internal_observable_concat__WEBPACK_IMPORTED_MODULE_3__["concat"])(Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(customers), // default items
        this.customerInput$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return (_this.isLoadingCusotmer = true); }), Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (term) {
            return _this._customerSv
                .filterCustomers({
                page: 0,
                size: 100,
                sort: 'asc',
                column: 'id',
                txtSearch: term || '',
            })
                .map(function (res) { return res.customerList; })
                .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function () { return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }), // empty list on error
            Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return (_this.isLoadingCusotmer = false); }));
        })));
    };
    QuotationModalEditComponent.prototype.changeCusotmer = function () {
        var _this = this;
        if (!this.quotation.customer || !this.quotation.customer.has_address) {
            this._notify.warning('please select customer or change location for cusotmer');
            return;
        }
        if (this.quotation.customer.assignedStaff) {
            this.quotation.assignedStaff = this.quotation.customer.assignedStaff;
        }
        if (this.btsList.length === 0) {
            this._notify.warning('bts not found');
            return;
        }
        var params = {
            origins: [shared_helpers_helpers__WEBPACK_IMPORTED_MODULE_14__["Helpers"].origins(this.quotation.customer.gmapToJSON())],
            destinations: shared_helpers_helpers__WEBPACK_IMPORTED_MODULE_14__["Helpers"].destinations(this.btsMakers),
        };
        this._gmapSv.matrixDistance(params, function (res, status) {
            if (status === 'OK') {
                var min_1 = null;
                if (res.rows.length > 0) {
                    res.rows[0].elements.forEach(function (value, key) {
                        if (value.status === 'OK' && (!min_1 || value.distance.value < min_1.value)) {
                            min_1 = __assign({}, value.distance, { key: key });
                        }
                    });
                }
                if (min_1) {
                    _this.quotation.distance = Math.round((min_1.value / 1000) * 10) / 10;
                    _this._emitter.publishData({
                        type: constants_emitter__WEBPACK_IMPORTED_MODULE_11__["EMITTER_TYPE"].GMAP_DISTANCE,
                        mode: 'create',
                        data: [
                            __assign({}, _this.quotation.customer.gmapToJSON(), { label: _this.quotation.customer.address, iconUrl: 'https://png.icons8.com/office/30/000000/administrator-male.png' }),
                            _this.btsList[min_1.key].markerToJSON(),
                        ],
                    });
                }
                else {
                    _this._notify.warning('data not found');
                    _this.quotation.distance = 0;
                    _this._emitter.publishData({
                        type: constants_emitter__WEBPACK_IMPORTED_MODULE_11__["EMITTER_TYPE"].GMAP_DISTANCE,
                        mode: 'create',
                        data: [],
                    });
                }
                setTimeout(function () {
                    _this.filterPolicies();
                }, 0);
            }
        });
    };
    QuotationModalEditComponent.prototype.filterPolicies = function () {
        var _this = this;
        if (!this.quotation.canFilterPolicy) {
            return;
        }
        this._policySv.findPolicy(this.quotation.findPolicyToJSON()).subscribe(function (res) {
            if (res) {
                _this.quotation.mrc = (+res.mrcMin).format();
                _this.quotation.otc = (+res.otc).format();
                _this.minMaxMrc = "(min=" + (+res.mrcMin).format() + "; max=" + (+res.mrcMax).format() + ")";
            }
            else {
                _this.minMaxMrc = '';
            }
        }, function (errors) {
            _this._notify.error(errors);
        });
    };
    // public changeReduceOtc(event) {
    //   if (event > 100) {
    //     this.quotation.reduceOtc = 100;
    //     this.ReduceOTC.nativeElement.value = this.quotation.reduceOtc;
    //     return;
    //   }
    //   if (event < 0) {
    //     this.quotation.reduceOtc = 0;
    //     this.ReduceOTC.nativeElement.value = this.quotation.reduceOtc;
    //     return;
    //   }
    //   this.quotation.reduceOtc = event;
    // }
    // public changeReduceMrc(event) {
    //   if (event > 100) {
    //     this.quotation.reduceMrc = 100;
    //     this.ReduceMRC.nativeElement.value = this.quotation.reduceMrc;
    //     return;
    //   }
    //   if (event < 0) {
    //     this.quotation.reduceMrc = 0;
    //     this.ReduceMRC.nativeElement.value = this.quotation.reduceMrc;
    //     return;
    //   }
    //   this.quotation.reduceMrc = event;
    // }
    QuotationModalEditComponent.prototype.updateQuotation = function () {
        var _this = this;
        this.isLoading = true;
        this._quotationSv.updateQuotation(this.quotation.id, this.quotation.toJSON()).subscribe(function (res) {
            _this.isLoading = false;
            _this._notify.success('update quotation success');
            _this.close('reload');
        }, function (errors) {
            _this.isLoading = false;
            _this._notify.error(errors);
        });
    };
    QuotationModalEditComponent.prototype.close = function (reason) {
        this._modalService.setDismissReason(reason);
        this._bsModalRef.hide();
    };
    QuotationModalEditComponent.prototype.changeOtc = function () {
        if (isNaN(this.OTC.nativeElement.value.toNumber()) || this.OTC.nativeElement.value.toNumber() < 0) {
            this.OTC.nativeElement.value = this.quotation.otc;
            return;
        }
        this.quotation.otc = this.OTC.nativeElement.value.toNumber().format();
    };
    QuotationModalEditComponent.prototype.changeMrc = function () {
        if (isNaN(this.MRC.nativeElement.value.toNumber()) || this.MRC.nativeElement.value.toNumber() < 0) {
            this.MRC.nativeElement.value = this.quotation.mrc;
            return;
        }
        this.quotation.mrc = this.MRC.nativeElement.value.toNumber().format();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ReduceMRC'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], QuotationModalEditComponent.prototype, "ReduceMRC", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ReduceOTC'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], QuotationModalEditComponent.prototype, "ReduceOTC", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('OTC'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], QuotationModalEditComponent.prototype, "OTC", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MRC'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], QuotationModalEditComponent.prototype, "MRC", void 0);
    QuotationModalEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quotation-modal-edit',
            template: __webpack_require__(/*! ./quotation-modal-edit.component.html */ "./src/app/ssm/quotation/quotation-modal-edit/quotation-modal-edit.component.html"),
            styles: [__webpack_require__(/*! ./quotation-modal-edit.component.scss */ "./src/app/ssm/quotation/quotation-modal-edit/quotation-modal-edit.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_services_customer_service__WEBPACK_IMPORTED_MODULE_9__["CustomerService"],
            shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__["EventEmitterService"],
            shared_services_gmap_service__WEBPACK_IMPORTED_MODULE_13__["GmapService"],
            shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_12__["NotifyService"],
            shared_services_customer_classification_service__WEBPACK_IMPORTED_MODULE_15__["CustomerClassificationService"],
            shared_services_bts_service__WEBPACK_IMPORTED_MODULE_16__["BtsService"],
            shared_services_quotation_service__WEBPACK_IMPORTED_MODULE_17__["QuotationService"],
            shared_services_policy_service__WEBPACK_IMPORTED_MODULE_18__["PolicyService"],
            shared_services_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__["BsModalService"]])
    ], QuotationModalEditComponent);
    return QuotationModalEditComponent;
}());



/***/ }),

/***/ "./src/app/ssm/quotation/quotation-modal-edit/quotation-modal-edit.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/ssm/quotation/quotation-modal-edit/quotation-modal-edit.module.ts ***!
  \***********************************************************************************/
/*! exports provided: QuotationModalEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationModalEditModule", function() { return QuotationModalEditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _quotation_modal_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quotation-modal-edit.component */ "./src/app/ssm/quotation/quotation-modal-edit/quotation-modal-edit.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _quotation_map_quotation_map_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../quotation-map/quotation-map.module */ "./src/app/ssm/quotation/quotation-map/quotation-map.module.ts");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/services/user.service */ "./src/shared/services/user.service.ts");
/* harmony import */ var shared_validators_numberic_validator_numberic_validator_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/validators/numberic-validator/numberic-validator.module */ "./src/shared/validators/numberic-validator/numberic-validator.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var QuotationModalEditModule = /** @class */ (function () {
    function QuotationModalEditModule() {
    }
    QuotationModalEditModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                _quotation_map_quotation_map_module__WEBPACK_IMPORTED_MODULE_6__["QuotationMapModule"],
                shared_validators_numberic_validator_numberic_validator_module__WEBPACK_IMPORTED_MODULE_8__["NumbericValidatorModule"],
            ],
            declarations: [_quotation_modal_edit_component__WEBPACK_IMPORTED_MODULE_2__["QuotationModalEditComponent"]],
            entryComponents: [_quotation_modal_edit_component__WEBPACK_IMPORTED_MODULE_2__["QuotationModalEditComponent"]],
            exports: [_quotation_modal_edit_component__WEBPACK_IMPORTED_MODULE_2__["QuotationModalEditComponent"]],
            providers: [shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]],
        })
    ], QuotationModalEditModule);
    return QuotationModalEditModule;
}());



/***/ }),

/***/ "./src/app/ssm/quotation/quotation.component.html":
/*!********************************************************!*\
  !*** ./src/app/ssm/quotation/quotation.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav nav-tabs cim-tabs mb-4\">\n  <a class=\"nav-item nav-link\" [routerLink]=\"['/ssm', 'quotation', 'filters']\" routerLinkActive=\"active\">Quotation Information</a>\n  <a class=\"nav-item nav-link\" [routerLink]=\"['/ssm', 'quotation', 'create']\" routerLinkActive=\"active\">Quotation Create</a>\n</nav>\n\n<div class=\"row m-0\">\n  <div class=\"col-lg-6 col-md-12\">\n    <router-outlet></router-outlet>\n  </div>\n\n  <div class=\"col-lg-6 col-md-12 gmap\">\n    <app-quotation-map></app-quotation-map>\n  </div>\n</div>\n\n<div>\n  <app-quotation-list></app-quotation-list>\n</div>\n"

/***/ }),

/***/ "./src/app/ssm/quotation/quotation.component.scss":
/*!********************************************************!*\
  !*** ./src/app/ssm/quotation/quotation.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ssm/quotation/quotation.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ssm/quotation/quotation.component.ts ***!
  \******************************************************/
/*! exports provided: QuotationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationComponent", function() { return QuotationComponent; });
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

var QuotationComponent = /** @class */ (function () {
    function QuotationComponent() {
    }
    QuotationComponent.prototype.ngOnInit = function () { };
    QuotationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quotation',
            template: __webpack_require__(/*! ./quotation.component.html */ "./src/app/ssm/quotation/quotation.component.html"),
            styles: [__webpack_require__(/*! ./quotation.component.scss */ "./src/app/ssm/quotation/quotation.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], QuotationComponent);
    return QuotationComponent;
}());



/***/ }),

/***/ "./src/app/ssm/quotation/quotation.module.ts":
/*!***************************************************!*\
  !*** ./src/app/ssm/quotation/quotation.module.ts ***!
  \***************************************************/
/*! exports provided: QuotationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationModule", function() { return QuotationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _quotation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quotation.component */ "./src/app/ssm/quotation/quotation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quotation_list_quotation_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quotation-list/quotation-list.module */ "./src/app/ssm/quotation/quotation-list/quotation-list.module.ts");
/* harmony import */ var _quotation_map_quotation_map_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quotation-map/quotation-map.module */ "./src/app/ssm/quotation/quotation-map/quotation-map.module.ts");
/* harmony import */ var _quotation_modal_delete_quotation_modal_delete_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quotation-modal-delete/quotation-modal-delete.module */ "./src/app/ssm/quotation/quotation-modal-delete/quotation-modal-delete.module.ts");
/* harmony import */ var _quotation_modal_edit_quotation_modal_edit_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quotation-modal-edit/quotation-modal-edit.module */ "./src/app/ssm/quotation/quotation-modal-edit/quotation-modal-edit.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _quotation_component__WEBPACK_IMPORTED_MODULE_2__["QuotationComponent"],
        children: [
            {
                path: 'filters',
                loadChildren: './quotation-filter/quotation-filter.module#QuotationFilterModule',
            },
            {
                path: 'create',
                loadChildren: './quotation-create/quotation-create.module#QuotationCreateModule',
            },
            {
                path: '',
                redirectTo: 'filters',
                pathMatch: 'full',
            },
        ],
    },
];
var QuotationModule = /** @class */ (function () {
    function QuotationModule() {
    }
    QuotationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _quotation_list_quotation_list_module__WEBPACK_IMPORTED_MODULE_4__["QuotationListModule"],
                _quotation_map_quotation_map_module__WEBPACK_IMPORTED_MODULE_5__["QuotationMapModule"],
                _quotation_modal_delete_quotation_modal_delete_module__WEBPACK_IMPORTED_MODULE_6__["QuotationModalDeleteModule"],
                _quotation_modal_edit_quotation_modal_edit_module__WEBPACK_IMPORTED_MODULE_7__["QuotationModalEditModule"],
            ],
            declarations: [_quotation_component__WEBPACK_IMPORTED_MODULE_2__["QuotationComponent"]],
        })
    ], QuotationModule);
    return QuotationModule;
}());



/***/ }),

/***/ "./src/shared/utils/no-dbl-click/btn-dbl-click.directive.ts":
/*!******************************************************************!*\
  !*** ./src/shared/utils/no-dbl-click/btn-dbl-click.directive.ts ***!
  \******************************************************************/
/*! exports provided: BtnDblClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnDblClickDirective", function() { return BtnDblClickDirective; });
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

var BtnDblClickDirective = /** @class */ (function () {
    function BtnDblClickDirective() {
    }
    BtnDblClickDirective.prototype.clickEvent = function (event) {
        event.srcElement.setAttribute('disabled', true);
        event.srcElement.classList.add('disabled');
        setTimeout(function () {
            event.srcElement.removeAttribute('disabled');
            event.srcElement.classList.remove('disabled');
        }, 500);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BtnDblClickDirective.prototype, "clickEvent", null);
    BtnDblClickDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appBtnDblClick]',
        }),
        __metadata("design:paramtypes", [])
    ], BtnDblClickDirective);
    return BtnDblClickDirective;
}());



/***/ }),

/***/ "./src/shared/utils/no-dbl-click/no-dbl-click.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/utils/no-dbl-click/no-dbl-click.directive.ts ***!
  \*****************************************************************/
/*! exports provided: NoDblClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoDblClickDirective", function() { return NoDblClickDirective; });
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

var NoDblClickDirective = /** @class */ (function () {
    function NoDblClickDirective() {
    }
    NoDblClickDirective.prototype.clickEvent = function (event) {
        event.srcElement.parentElement.setAttribute('disabled', true);
        event.srcElement.parentElement.classList.add('disabled');
        setTimeout(function () {
            event.srcElement.parentElement.removeAttribute('disabled');
            event.srcElement.parentElement.classList.remove('disabled');
        }, 500);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NoDblClickDirective.prototype, "clickEvent", null);
    NoDblClickDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appNoDblClick]',
        }),
        __metadata("design:paramtypes", [])
    ], NoDblClickDirective);
    return NoDblClickDirective;
}());



/***/ }),

/***/ "./src/shared/utils/no-dbl-click/no-dbl-click.module.ts":
/*!**************************************************************!*\
  !*** ./src/shared/utils/no-dbl-click/no-dbl-click.module.ts ***!
  \**************************************************************/
/*! exports provided: NoDblClickModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoDblClickModule", function() { return NoDblClickModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _no_dbl_click_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-dbl-click.directive */ "./src/shared/utils/no-dbl-click/no-dbl-click.directive.ts");
/* harmony import */ var _btn_dbl_click_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./btn-dbl-click.directive */ "./src/shared/utils/no-dbl-click/btn-dbl-click.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NoDblClickModule = /** @class */ (function () {
    function NoDblClickModule() {
    }
    NoDblClickModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_no_dbl_click_directive__WEBPACK_IMPORTED_MODULE_2__["NoDblClickDirective"], _btn_dbl_click_directive__WEBPACK_IMPORTED_MODULE_3__["BtnDblClickDirective"]],
            exports: [_no_dbl_click_directive__WEBPACK_IMPORTED_MODULE_2__["NoDblClickDirective"], _btn_dbl_click_directive__WEBPACK_IMPORTED_MODULE_3__["BtnDblClickDirective"]],
        })
    ], NoDblClickModule);
    return NoDblClickModule;
}());



/***/ })

}]);
//# sourceMappingURL=quotation-quotation-module.460fc74c32970bbc4855.js.map