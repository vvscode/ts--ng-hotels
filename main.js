(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-hotels-main>\n</ng-hotels-main>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-hotels';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-hotels-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/pages/main/main.component.ts");
/* harmony import */ var _pages_main_list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/main/list/list.component */ "./src/app/pages/main/list/list.component.ts");
/* harmony import */ var _pages_main_weather_weather_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/main/weather/weather.component */ "./src/app/pages/main/weather/weather.component.ts");
/* harmony import */ var _pages_main_selected_item_selected_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/main/selected-item/selected-item.component */ "./src/app/pages/main/selected-item/selected-item.component.ts");
/* harmony import */ var _pages_main_list_item_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/main/list/item/item.component */ "./src/app/pages/main/list/item/item.component.ts");
/* harmony import */ var _pipes_format_phone_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/format-phone.pipe */ "./src/app/pipes/format-phone.pipe.ts");
/* harmony import */ var _pipes_filter_by_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/filter-by.pipe */ "./src/app/pipes/filter-by.pipe.ts");
/* harmony import */ var _pipes_map_by_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/map-by.pipe */ "./src/app/pipes/map-by.pipe.ts");
/* harmony import */ var _pipes_uniq_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/uniq.pipe */ "./src/app/pipes/uniq.pipe.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _common_api_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/api-interceptor */ "./src/app/common/api-interceptor.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./store */ "./src/app/store/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_effects_items_effect__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./store/effects/items.effect */ "./src/app/store/effects/items.effect.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                _pages_main_list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
                _pages_main_weather_weather_component__WEBPACK_IMPORTED_MODULE_7__["WeatherComponent"],
                _pages_main_selected_item_selected_item_component__WEBPACK_IMPORTED_MODULE_8__["SelectedItemComponent"],
                _pages_main_list_item_item_component__WEBPACK_IMPORTED_MODULE_9__["ItemComponent"],
                _pipes_format_phone_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatPhonePipe"],
                _pipes_filter_by_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterByPipe"],
                _pipes_map_by_pipe__WEBPACK_IMPORTED_MODULE_12__["MapByPipe"],
                _pipes_uniq_pipe__WEBPACK_IMPORTED_MODULE_13__["UniqPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_19__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__["EffectsModule"].forRoot([_store_effects_items_effect__WEBPACK_IMPORTED_MODULE_21__["GetItemsEffect"], _store_effects_items_effect__WEBPACK_IMPORTED_MODULE_21__["SetTypeEffect"]]),
                _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].production ? [] : _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__["StoreDevtoolsModule"].instrument(),
            ],
            providers: [
                {
                    provide: _config__WEBPACK_IMPORTED_MODULE_14__["BASE_API_PATH"],
                    useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].baseApiPath,
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _common_api_interceptor__WEBPACK_IMPORTED_MODULE_16__["ApiInterceptor"],
                    multi: true,
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/api-interceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/common/api-interceptor.ts ***!
  \*******************************************/
/*! exports provided: ApiInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return ApiInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ApiInterceptor = /** @class */ (function () {
    function ApiInterceptor(_baseApiPath) {
        this._baseApiPath = _baseApiPath;
    }
    // tslint:disable no-any
    ApiInterceptor.prototype.intercept = function (req, next) {
        var jsonReq = req.clone({
            url: "" + this._baseApiPath + req.url,
        });
        return next.handle(jsonReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(this._isHttpResponse), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res.clone({ body: res.body && res.body.data });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }));
    };
    ApiInterceptor.prototype._isHttpResponse = function (event) {
        if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
            return true;
        }
        return false;
    };
    ApiInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_config__WEBPACK_IMPORTED_MODULE_4__["BASE_API_PATH"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], ApiInterceptor);
    return ApiInterceptor;
}());



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: BASE_API_PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_API_PATH", function() { return BASE_API_PATH; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var BASE_API_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('BASE_URL');


/***/ }),

/***/ "./src/app/pages/main/list/item/item.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/main/list/item/item.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"activity-row\">\n  <div class=\"activity-desc\">\n    <h5>{{item.social_info.title}}</h5>\n    <p>{{item.address}}</p>\n    <p>{{item.type}}</p>\n    <h6>{{item.phone| formatPhone}}</h6>\n  </div>\n  <div class=\"activity-img\">\n    <ul>\n      <li><img [src]=\"item.img\" alt=\"\" /></li>\n      <li><img [src]=\"item.social_info.img\" alt=\"\" /></li>\n    </ul>\n  </div>\n  <div class=\"clear\"> </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/main/list/item/item.component.less":
/*!**********************************************************!*\
  !*** ./src/app/pages/main/list/item/item.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vbGlzdC9pdGVtL2l0ZW0uY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/main/list/item/item.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/main/list/item/item.component.ts ***!
  \********************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemComponent.prototype, "item", void 0);
    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-hotels-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/pages/main/list/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.less */ "./src/app/pages/main/list/item/item.component.less")]
        })
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/pages/main/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/main/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"activeItem\" class=\"element-bg-img\">\n  <img [src]=\"(activeItem | async)?.img\" alt=\"\" class=\"img-responsive\" />\n</div>\n<div class=\"element-left-bottom\">\n  <div class=\"ele-strip\">\n    <ul>\n      <li\n        *ngFor=\"let item of (list | async | mapBy: 'type' | uniq)\"\n        [ngClass]=\"{ 'anc-bor': item === activeType }\"\n        (click)=\"setActiveType(item)\"\n      >\n        <a href=\"#{{ item }}\">{{ item | titlecase }}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"village\">\n    <h3>Righteous indignation & like about {{ activeType }}</h3>\n    <span class=\"line\"> </span>\n    <div class=\"activity_box\">\n      <div class=\"scrollbar\" id=\"style-2\">\n        <ng-hotels-item\n          *ngFor=\"let item of (list | async | filterBy: 'type':activeType)\"\n          [item]=\"item\"\n          (click)=\"onCardClick(item)\"\n        ></ng-hotels-item>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/main/list/list.component.less":
/*!*****************************************************!*\
  !*** ./src/app/pages/main/list/list.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vbGlzdC9saXN0LmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/pages/main/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/main/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_store_actions_items_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/actions/items.action */ "./src/app/store/actions/items.action.ts");




var ListComponent = /** @class */ (function () {
    function ListComponent(_store) {
        var _this = this;
        this._store = _store;
        _store.dispatch(new src_app_store_actions_items_action__WEBPACK_IMPORTED_MODULE_3__["GetItemsPending"]());
        this.list = _store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('items'));
        this.activeItem = _store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('activeItem'));
        _store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('activeType'))
            .subscribe(function (type) { return (_this.activeType = type); });
    }
    ListComponent.prototype.setActiveType = function (type) {
        this._store.dispatch(new src_app_store_actions_items_action__WEBPACK_IMPORTED_MODULE_3__["SetActiveType"](type));
    };
    ListComponent.prototype.onCardClick = function (item) {
        this._store.dispatch(new src_app_store_actions_items_action__WEBPACK_IMPORTED_MODULE_3__["SetActiveItem"](item));
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-hotels-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/pages/main/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.less */ "./src/app/pages/main/list/list.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/main/main.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/main/main.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hot Weather Widget</h1>\n<div class=\"element\">\n  <div class=\"element-left\">\n    <ng-hotels-list></ng-hotels-list>\n  </div>\n  <div class=\"element-right\">\n    <ng-hotels-weather></ng-hotels-weather>>\n    <ng-hotels-selected-item></ng-hotels-selected-item>\n  </div>\n  <div class=\"clear\"> </div>\n</div>\n<div class=\"copy-right\">\n  <p>© 2015 Hot Weather Widget. All rights reserved | Design by <a href=\"http://w3layouts.com/\" target=\"_blank\">\n      W3layouts </a></p>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/main/main.component.less":
/*!************************************************!*\
  !*** ./src/app/pages/main/main.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-hotels-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/pages/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.less */ "./src/app/pages/main/main.component.less")]
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/pages/main/selected-item/selected-item.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/main/selected-item/selected-item.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(socialInfo$ | async) as socialInfo\" class=\"teddy-bear\">\n  <div class=\"teddy-text\">\n    <h4>{{ socialInfo.title }}</h4>\n    <span class=\"w-line\"> </span>\n    <img [src]=\"socialInfo.img\" alt=\"\" class=\"img-responsive\" />\n  </div>\n  <div class=\"teddy-follow\">\n    <ul>\n      <li class=\"folw-h\">\n        <h3>{{ socialInfo.followers }}</h3>\n        <p>Followers</p>\n      </li>\n      <li>\n        <h3>{{ socialInfo.following }}</h3>\n        <p>Following</p>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/main/selected-item/selected-item.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/pages/main/selected-item/selected-item.component.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vc2VsZWN0ZWQtaXRlbS9zZWxlY3RlZC1pdGVtLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/pages/main/selected-item/selected-item.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/main/selected-item/selected-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: SelectedItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedItemComponent", function() { return SelectedItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var SelectedItemComponent = /** @class */ (function () {
    function SelectedItemComponent(_store) {
        this._store = _store;
        this.socialInfo$ = _store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(function (state) {
            return (state.activeItem || {}).social_info;
        }));
    }
    SelectedItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-hotels-selected-item',
            template: __webpack_require__(/*! ./selected-item.component.html */ "./src/app/pages/main/selected-item/selected-item.component.html"),
            styles: [__webpack_require__(/*! ./selected-item.component.less */ "./src/app/pages/main/selected-item/selected-item.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], SelectedItemComponent);
    return SelectedItemComponent;
}());



/***/ }),

/***/ "./src/app/pages/main/weather/weather.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/main/weather/weather.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(weather$ | async) as weather\" class=\"temperatur\">\n  <h5>{{ weather.title }}</h5>\n  <span class=\"w-line\"> </span> <span class=\"cloud\"> </span>\n  <h2>{{ weather.temperature }}<sup class=\"degree\">°</sup></h2>\n  <h6>Water {{ weather.water }}<sup class=\"degree\">°</sup></h6>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/main/weather/weather.component.less":
/*!***********************************************************!*\
  !*** ./src/app/pages/main/weather/weather.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/pages/main/weather/weather.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/main/weather/weather.component.ts ***!
  \*********************************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(_store) {
        this._store = _store;
        this.weather$ = _store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(function (state) { return (state.activeItem || {}).weather; }));
    }
    WeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-hotels-weather',
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/pages/main/weather/weather.component.html"),
            styles: [__webpack_require__(/*! ./weather.component.less */ "./src/app/pages/main/weather/weather.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "./src/app/pipes/filter-by.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/filter-by.pipe.ts ***!
  \*****************************************/
/*! exports provided: FilterByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByPipe", function() { return FilterByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterByPipe = /** @class */ (function () {
    function FilterByPipe() {
    }
    FilterByPipe.prototype.transform = function (value, fieldName, fieldValue) {
        if (value && value.filter) {
            return value.filter(function (el) { return el[fieldName] === fieldValue; });
        }
        return value;
    };
    FilterByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterBy',
        })
    ], FilterByPipe);
    return FilterByPipe;
}());



/***/ }),

/***/ "./src/app/pipes/format-phone.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/format-phone.pipe.ts ***!
  \********************************************/
/*! exports provided: FormatPhonePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatPhonePipe", function() { return FormatPhonePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormatPhonePipe = /** @class */ (function () {
    function FormatPhonePipe() {
    }
    FormatPhonePipe.prototype.transform = function (value) {
        return value.replace(/(\d{3})(\d{3})(\d+)/, '($1) $2-$3');
    };
    FormatPhonePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'formatPhone',
        })
    ], FormatPhonePipe);
    return FormatPhonePipe;
}());



/***/ }),

/***/ "./src/app/pipes/map-by.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/map-by.pipe.ts ***!
  \**************************************/
/*! exports provided: MapByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapByPipe", function() { return MapByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapByPipe = /** @class */ (function () {
    function MapByPipe() {
    }
    // tslint:disable no-any
    MapByPipe.prototype.transform = function (value, fieldName) {
        if (Array.isArray(value)) {
            return value.map(function (el) { return el[fieldName]; });
        }
        return value;
    };
    MapByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'mapBy',
        })
    ], MapByPipe);
    return MapByPipe;
}());



/***/ }),

/***/ "./src/app/pipes/uniq.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/uniq.pipe.ts ***!
  \************************************/
/*! exports provided: UniqPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqPipe", function() { return UniqPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UniqPipe = /** @class */ (function () {
    function UniqPipe() {
    }
    // tslint:disable no-any
    UniqPipe.prototype.transform = function (value) {
        if (Array.isArray(value)) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](new Set(value).values());
        }
        return null;
    };
    UniqPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'uniq',
        })
    ], UniqPipe);
    return UniqPipe;
}());



/***/ }),

/***/ "./src/app/store/actions/items.action.ts":
/*!***********************************************!*\
  !*** ./src/app/store/actions/items.action.ts ***!
  \***********************************************/
/*! exports provided: GET_ITEMS_PENDING, GET_ITEMS_SUCCESS, GET_ITEMS_ERROR, SET_ACTIVE_ITEM, SET_ACTIVE_TYPE, GetItemsPending, GetItemsSuccess, GetItemsError, SetActiveItem, SetActiveType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ITEMS_PENDING", function() { return GET_ITEMS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ITEMS_SUCCESS", function() { return GET_ITEMS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ITEMS_ERROR", function() { return GET_ITEMS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ACTIVE_ITEM", function() { return SET_ACTIVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ACTIVE_TYPE", function() { return SET_ACTIVE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetItemsPending", function() { return GetItemsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetItemsSuccess", function() { return GetItemsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetItemsError", function() { return GetItemsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetActiveItem", function() { return SetActiveItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetActiveType", function() { return SetActiveType; });
var GET_ITEMS_PENDING = 'GET_ITEMS_PENDING';
var GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
var GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';
var SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM';
var SET_ACTIVE_TYPE = 'SET_ACTIVE_TYPE';
var GetItemsPending = /** @class */ (function () {
    function GetItemsPending() {
        this.type = GET_ITEMS_PENDING;
    }
    return GetItemsPending;
}());

var GetItemsSuccess = /** @class */ (function () {
    function GetItemsSuccess(payload) {
        this.payload = payload;
        this.type = GET_ITEMS_SUCCESS;
    }
    return GetItemsSuccess;
}());

var GetItemsError = /** @class */ (function () {
    function GetItemsError() {
        this.type = GET_ITEMS_ERROR;
    }
    return GetItemsError;
}());

var SetActiveItem = /** @class */ (function () {
    function SetActiveItem(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_ITEM;
    }
    return SetActiveItem;
}());

var SetActiveType = /** @class */ (function () {
    function SetActiveType(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_TYPE;
    }
    return SetActiveType;
}());



/***/ }),

/***/ "./src/app/store/effects/items.effect.ts":
/*!***********************************************!*\
  !*** ./src/app/store/effects/items.effect.ts ***!
  \***********************************************/
/*! exports provided: GetItemsEffect, SetTypeEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetItemsEffect", function() { return GetItemsEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTypeEffect", function() { return SetTypeEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_items_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/items.action */ "./src/app/store/actions/items.action.ts");








var GetItemsEffect = /** @class */ (function () {
    function GetItemsEffect(_http, _actions$) {
        var _this = this;
        this._http = _http;
        this._actions$ = _actions$;
        this.items$$ = this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_items_action__WEBPACK_IMPORTED_MODULE_7__["GET_ITEMS_PENDING"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this._http.get("/items/data.json").pipe(
            // If successful, dispatch success action with result)
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (items) { return [
                new _actions_items_action__WEBPACK_IMPORTED_MODULE_7__["GetItemsSuccess"](items),
                new _actions_items_action__WEBPACK_IMPORTED_MODULE_7__["SetActiveType"](items[0] ? items[0].type : ''),
                new _actions_items_action__WEBPACK_IMPORTED_MODULE_7__["SetActiveItem"](items[0] || null),
            ]; }), 
            // If request fails, dispatch failed action
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_items_action__WEBPACK_IMPORTED_MODULE_7__["GetItemsError"]()); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], GetItemsEffect.prototype, "items$$", void 0);
    GetItemsEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]])
    ], GetItemsEffect);
    return GetItemsEffect;
}());

var SetTypeEffect = /** @class */ (function () {
    function SetTypeEffect(_store, _actions$) {
        var _this = this;
        this._store = _store;
        this._actions$ = _actions$;
        this.currentItem$ = this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_items_action__WEBPACK_IMPORTED_MODULE_7__["SET_ACTIVE_TYPE"]), 
        // tslint:disable-next-line
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (action) {
            return _this._store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])('items'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (items) {
                var item = items.find(function (el) { return el.type === action.payload; });
                return new _actions_items_action__WEBPACK_IMPORTED_MODULE_7__["SetActiveItem"](item);
            }), 
            // If request fails, dispatch failed action
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_items_action__WEBPACK_IMPORTED_MODULE_7__["GetItemsError"]()); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SetTypeEffect.prototype, "currentItem$", void 0);
    SetTypeEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]])
    ], SetTypeEffect);
    return SetTypeEffect;
}());



/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _reducers_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/items */ "./src/app/store/reducers/items.ts");
/* harmony import */ var _reducers_activeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/activeItem */ "./src/app/store/reducers/activeItem.ts");
/* harmony import */ var _reducers_activeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/activeType */ "./src/app/store/reducers/activeType.ts");



var reducers = {
    items: _reducers_items__WEBPACK_IMPORTED_MODULE_0__["items"],
    activeItem: _reducers_activeItem__WEBPACK_IMPORTED_MODULE_1__["activeItem"],
    activeType: _reducers_activeType__WEBPACK_IMPORTED_MODULE_2__["activeType"],
};


/***/ }),

/***/ "./src/app/store/reducers/activeItem.ts":
/*!**********************************************!*\
  !*** ./src/app/store/reducers/activeItem.ts ***!
  \**********************************************/
/*! exports provided: activeItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeItem", function() { return activeItem; });
/* harmony import */ var _actions_items_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/items.action */ "./src/app/store/actions/items.action.ts");

var defaultState = null;
function activeItem(state, 
// tslint:disable-next-line
action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case _actions_items_action__WEBPACK_IMPORTED_MODULE_0__["SET_ACTIVE_ITEM"]: {
            return action.payload;
        }
    }
    return state;
}


/***/ }),

/***/ "./src/app/store/reducers/activeType.ts":
/*!**********************************************!*\
  !*** ./src/app/store/reducers/activeType.ts ***!
  \**********************************************/
/*! exports provided: activeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeType", function() { return activeType; });
/* harmony import */ var _actions_items_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/items.action */ "./src/app/store/actions/items.action.ts");

var defaultState = '';
function activeType(state, 
// tslint:disable-next-line
action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case _actions_items_action__WEBPACK_IMPORTED_MODULE_0__["SET_ACTIVE_TYPE"]: {
            return action.payload;
        }
    }
    return state;
}


/***/ }),

/***/ "./src/app/store/reducers/items.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/items.ts ***!
  \*****************************************/
/*! exports provided: items */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "items", function() { return items; });
/* harmony import */ var _actions_items_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/items.action */ "./src/app/store/actions/items.action.ts");

var defaultState = [];
function items(state, 
// tslint:disable-next-line
action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case _actions_items_action__WEBPACK_IMPORTED_MODULE_0__["GET_ITEMS_SUCCESS"]: {
            return action.payload;
        }
    }
    return state;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseApiPath: '/assets/api',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vvscode/repo/ts--ng-hotels/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map