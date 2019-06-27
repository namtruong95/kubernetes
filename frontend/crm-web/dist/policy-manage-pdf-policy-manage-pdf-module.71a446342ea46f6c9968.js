(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["policy-manage-pdf-policy-manage-pdf-module"],{

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

/***/ "./src/app/ssm/policy/policy-manage-pdf/policy-manage-pdf.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/ssm/policy/policy-manage-pdf/policy-manage-pdf.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\" *ngIf=\"canHandlePolicy\">\n    <button class=\"btn btn-primary\"\n      (click)=\"FileUpload.click()\"\n      [disabled]=\"isUploading\">\n      Upload Pdf\n      <i *ngIf=\"isUploading\" class=\"fa fa-refresh fa-spin\"></i>\n    </button>\n\n    <input\n      type=\"file\"\n      hidden\n      name=\"file\"\n      #FileUpload\n      multiple\n      (change)=\"getFile()\"\n      [attr.accept]=\"accept_file\">\n  </div>\n</div>\n\n<div class=\"table-responsive py-4\">\n  <span>Showing {{ query.from }} to {{ query.to }} of {{ query.totalElements }} entries</span>\n  <table class=\"table pdf-table\">\n    <thead>\n      <tr>\n        <th>Record ID</th>\n        <th class=\"cursor-pointer\">\n          File Name\n        </th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let file of files;\">\n        <td>{{ file.record_id }}</td>\n        <td>{{ file.fileName }}</td>\n        <td>\n          <button type=\"button\" class=\"mr-1 btn btn-primary\" (click)=\"downloadFile(file)\"><i class=\"fa fa-download\"></i></button>\n          <button type=\"button\" *ngIf=\"canHandlePolicy\" class=\"mr-1 btn btn-danger\" (click)=\"removeFile(file)\"><i class=\"fa fa-trash\"></i></button>\n        </td>\n      </tr>\n      <tr [ngClass]=\"{ 'hidden': files.length > 0 }\">\n        <td colspan=\"2\" class=\"text-center\">\n          Data not found\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"pagination mt-4\" [ngClass]=\"{ 'hidden': files.length === 0 }\">\n  <pagination\n    class=\"pagination-md\"\n    [totalItems]=\"query.totalElements\"\n    [(ngModel)]=\"query.currentPage\"\n    pageBtnClass=\"btn\"\n    [itemsPerPage]=\"query.size\"\n    [maxSize]=\"5\"\n    (pageChanged)=\"pageChanged($event)\"\n    previousText=\"&lsaquo;\"\n    nextText=\"&rsaquo;\"\n    firstText=\"&laquo;\"\n    lastText=\"&raquo;\">\n  </pagination>\n</div>\n"

/***/ }),

/***/ "./src/app/ssm/policy/policy-manage-pdf/policy-manage-pdf.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/ssm/policy/policy-manage-pdf/policy-manage-pdf.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pdf-table.table thead th,\n.pdf-table.table tbody td {\n  min-width: 200px; }\n  .pdf-table.table thead th:last-child,\n  .pdf-table.table tbody td:last-child {\n    max-width: 150px;\n    width: 150px; }\n"

/***/ }),

/***/ "./src/app/ssm/policy/policy-manage-pdf/policy-manage-pdf.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/ssm/policy/policy-manage-pdf/policy-manage-pdf.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PolicyManagePdfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyManagePdfComponent", function() { return PolicyManagePdfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_utils_query_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/utils/query-builder */ "./src/shared/utils/query-builder.ts");
/* harmony import */ var shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/utils/notify.service */ "./src/shared/utils/notify.service.ts");
/* harmony import */ var shared_services_uploader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/services/uploader.service */ "./src/shared/services/uploader.service.ts");
/* harmony import */ var app_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/role.service */ "./src/app/role.service.ts");
/* harmony import */ var shared_services_manage_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/services/manage-file.service */ "./src/shared/services/manage-file.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shared_services_folder_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/services/folder.service */ "./src/shared/services/folder.service.ts");
/* harmony import */ var shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/utils/event-emitter.service */ "./src/shared/utils/event-emitter.service.ts");
/* harmony import */ var constants_emitter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! constants/emitter */ "./src/constants/emitter.ts");
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











var PolicyManagePdfComponent = /** @class */ (function () {
    function PolicyManagePdfComponent(_notify, _uploader, _role, _manageFileSv, _route, _folderSv, _emitter) {
        this._notify = _notify;
        this._uploader = _uploader;
        this._role = _role;
        this._manageFileSv = _manageFileSv;
        this._route = _route;
        this._folderSv = _folderSv;
        this._emitter = _emitter;
        this.query = new shared_utils_query_builder__WEBPACK_IMPORTED_MODULE_1__["QueryBuilder"]();
        this.files = [];
        this.isUploading = false;
        this._mimeTypes = ['application/pdf', '.pdf'];
    }
    Object.defineProperty(PolicyManagePdfComponent.prototype, "accept_file", {
        get: function () {
            return this._mimeTypes.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolicyManagePdfComponent.prototype, "canHandlePolicy", {
        get: function () {
            return this._role.is_admin || this._role.is_sale_director;
        },
        enumerable: true,
        configurable: true
    });
    PolicyManagePdfComponent.prototype.ngOnInit = function () {
        this._getFiles();
        this._showFolder();
    };
    PolicyManagePdfComponent.prototype._getFiles = function () {
        var _this = this;
        var opts = __assign({}, this.query.queryJSON(), { folderId: this._route.snapshot.paramMap.get('id') });
        this._manageFileSv.getFiles(opts).subscribe(function (res) {
            _this.query.setQuery(res);
            _this.files = res.list;
        }, function (errors) {
            _this._notify.error(errors);
        });
    };
    PolicyManagePdfComponent.prototype._showFolder = function () {
        var _this = this;
        this._folderSv.showFolder(+this._route.snapshot.paramMap.get('id')).subscribe(function (res) {
            _this._emitter.publishData({
                type: constants_emitter__WEBPACK_IMPORTED_MODULE_10__["EMITTER_TYPE"].CHANGE_FOLDER,
                data: res.name,
            });
        });
    };
    PolicyManagePdfComponent.prototype.getFile = function () {
        var _this = this;
        var files = this._fileUpload.nativeElement.files;
        if (files.length === 0) {
            return;
        }
        var data = [];
        Array.from(files).forEach(function (file) {
            // Validator File Type
            if (_this._mimeTypes.indexOf(file.type) < 0) {
                _this._notify.error('You can not upload files that are not in pdf format');
                return;
            }
            // Validator File Size
            if (file.size >= 10485760) {
                _this._notify.error('You can not upload images larger than 10MB in size');
                return;
            }
            data.push({
                key: 'file',
                value: file,
            });
        });
        if (!data.length) {
            return;
        }
        this._uploadFile(data);
    };
    PolicyManagePdfComponent.prototype._uploadFile = function (data) {
        var _this = this;
        this.isUploading = true;
        var params = {
            folderId: this._route.snapshot.paramMap.get('id'),
        };
        this._uploader.store("manage-file", data, params).subscribe(function (res) {
            _this.isUploading = false;
            _this._notify.success("upload " + data.length + " files success");
            _this._getFiles();
            _this._removeFile();
        }, function (errors) {
            _this.isUploading = false;
            _this._notify.error(errors);
            _this._removeFile();
        });
    };
    PolicyManagePdfComponent.prototype._removeFile = function () {
        this._fileUpload.nativeElement.value = null;
    };
    PolicyManagePdfComponent.prototype.downloadFile = function (file) {
        var _this = this;
        this._manageFileSv.downloadFile(file.id).subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(res, file.fileName);
        }, function (errors) {
            _this._notify.error(errors);
        });
    };
    PolicyManagePdfComponent.prototype.removeFile = function (file) {
        var _this = this;
        this._manageFileSv.deleteFile(file.id).subscribe(function (res) {
            _this._notify.success("delete file success");
            _this._getFiles();
        }, function (errors) {
            _this._notify.error(errors);
        });
    };
    PolicyManagePdfComponent.prototype.pageChanged = function (event) {
        this.query.currentPage = event.page;
        this._getFiles();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('FileUpload'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PolicyManagePdfComponent.prototype, "_fileUpload", void 0);
    PolicyManagePdfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-policy-manage-pdf',
            template: __webpack_require__(/*! ./policy-manage-pdf.component.html */ "./src/app/ssm/policy/policy-manage-pdf/policy-manage-pdf.component.html"),
            styles: [__webpack_require__(/*! ./policy-manage-pdf.component.scss */ "./src/app/ssm/policy/policy-manage-pdf/policy-manage-pdf.component.scss")],
        }),
        __metadata("design:paramtypes", [shared_utils_notify_service__WEBPACK_IMPORTED_MODULE_2__["NotifyService"],
            shared_services_uploader_service__WEBPACK_IMPORTED_MODULE_3__["UploaderService"],
            app_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"],
            shared_services_manage_file_service__WEBPACK_IMPORTED_MODULE_5__["ManageFileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            shared_services_folder_service__WEBPACK_IMPORTED_MODULE_8__["FolderService"],
            shared_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"]])
    ], PolicyManagePdfComponent);
    return PolicyManagePdfComponent;
}());



/***/ }),

/***/ "./src/app/ssm/policy/policy-manage-pdf/policy-manage-pdf.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ssm/policy/policy-manage-pdf/policy-manage-pdf.module.ts ***!
  \**************************************************************************/
/*! exports provided: PolicyManagePdfModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyManagePdfModule", function() { return PolicyManagePdfModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _policy_manage_pdf_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./policy-manage-pdf.component */ "./src/app/ssm/policy/policy-manage-pdf/policy-manage-pdf.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var shared_services_manage_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/services/manage-file.service */ "./src/shared/services/manage-file.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _policy_manage_pdf_component__WEBPACK_IMPORTED_MODULE_2__["PolicyManagePdfComponent"],
    },
];
var PolicyManagePdfModule = /** @class */ (function () {
    function PolicyManagePdfModule() {
    }
    PolicyManagePdfModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
            declarations: [_policy_manage_pdf_component__WEBPACK_IMPORTED_MODULE_2__["PolicyManagePdfComponent"]],
            providers: [shared_services_manage_file_service__WEBPACK_IMPORTED_MODULE_6__["ManageFileService"]],
        })
    ], PolicyManagePdfModule);
    return PolicyManagePdfModule;
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



/***/ }),

/***/ "./src/models/manage-pdf.ts":
/*!**********************************!*\
  !*** ./src/models/manage-pdf.ts ***!
  \**********************************/
/*! exports provided: ManagePdf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePdf", function() { return ManagePdf; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ "./src/models/base.model.ts");
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder */ "./src/models/folder.ts");
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


var ManagePdf = /** @class */ (function (_super) {
    __extends(ManagePdf, _super);
    function ManagePdf() {
        return _super.call(this) || this;
    }
    Object.defineProperty(ManagePdf.prototype, "record_id", {
        get: function () {
            return this.recordId && ('00000' + this.recordId).substr(-5);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagePdf.prototype, "folder_record_id", {
        get: function () {
            return (this.folder ? this.folder.name : 'ROOT') + " - " + this.fileName;
        },
        enumerable: true,
        configurable: true
    });
    ManagePdf.prototype.deserialize = function (input) {
        if (!input) {
            return;
        }
        _super.prototype.deserialize.call(this, input);
        Object.assign(this, input);
        this.folder = input.folder instanceof _folder__WEBPACK_IMPORTED_MODULE_1__["Folder"] ? input.folder : new _folder__WEBPACK_IMPORTED_MODULE_1__["Folder"]().deserialize(input.folder);
        return this;
    };
    return ManagePdf;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]));



/***/ })

}]);
//# sourceMappingURL=policy-manage-pdf-policy-manage-pdf-module.71a446342ea46f6c9968.js.map