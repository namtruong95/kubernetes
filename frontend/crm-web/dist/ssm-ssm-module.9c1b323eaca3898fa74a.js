(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ssm-ssm-module"],{

/***/ "./src/app/ssm/ssm.component.html":
/*!****************************************!*\
  !*** ./src/app/ssm/ssm.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/ssm/ssm.component.scss":
/*!****************************************!*\
  !*** ./src/app/ssm/ssm.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ssm/ssm.component.ts":
/*!**************************************!*\
  !*** ./src/app/ssm/ssm.component.ts ***!
  \**************************************/
/*! exports provided: SsmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsmComponent", function() { return SsmComponent; });
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

var SsmComponent = /** @class */ (function () {
    function SsmComponent() {
    }
    SsmComponent.prototype.ngOnInit = function () { };
    SsmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ssm',
            template: __webpack_require__(/*! ./ssm.component.html */ "./src/app/ssm/ssm.component.html"),
            styles: [__webpack_require__(/*! ./ssm.component.scss */ "./src/app/ssm/ssm.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], SsmComponent);
    return SsmComponent;
}());



/***/ }),

/***/ "./src/app/ssm/ssm.module.ts":
/*!***********************************!*\
  !*** ./src/app/ssm/ssm.module.ts ***!
  \***********************************/
/*! exports provided: SsmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsmModule", function() { return SsmModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ssm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ssm.component */ "./src/app/ssm/ssm.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _ssm_component__WEBPACK_IMPORTED_MODULE_2__["SsmComponent"],
        children: [
            {
                path: 'policy',
                loadChildren: './policy/policy.module#PolicyModule',
            },
            {
                path: 'bts',
                loadChildren: './bts/bts.module#BtsModule',
            },
            {
                path: 'quotation',
                loadChildren: './quotation/quotation.module#QuotationModule',
            },
            {
                path: 'proposal',
                loadChildren: './proposal/proposal.module#ProposalModule',
            },
            {
                path: '',
                redirectTo: 'policy',
                pathMatch: 'full',
            },
        ],
    },
];
var SsmModule = /** @class */ (function () {
    function SsmModule() {
    }
    SsmModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_ssm_component__WEBPACK_IMPORTED_MODULE_2__["SsmComponent"]],
        })
    ], SsmModule);
    return SsmModule;
}());



/***/ })

}]);
//# sourceMappingURL=ssm-ssm-module.9c1b323eaca3898fa74a.js.map