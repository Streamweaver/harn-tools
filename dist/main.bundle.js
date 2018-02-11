webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_main_page_main_page_component__ = __webpack_require__("../../../../../src/app/core/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/core/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prices_price_list_price_list_component__ = __webpack_require__("../../../../../src/app/prices/price-list/price-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__travel_distance_distance_component__ = __webpack_require__("../../../../../src/app/travel/distance/distance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__names_name_generator_name_generator_component__ = __webpack_require__("../../../../../src/app/names/name-generator/name-generator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manors_manor_manor_component__ = __webpack_require__("../../../../../src/app/manors/manor/manor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__armor_armor_list_armor_list_component__ = __webpack_require__("../../../../../src/app/armor/armor-list/armor-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__core_main_page_main_page_component__["a" /* MainPageComponent */] },
    { path: 'manors', component: __WEBPACK_IMPORTED_MODULE_7__manors_manor_manor_component__["a" /* ManorComponent */] },
    { path: 'travel', component: __WEBPACK_IMPORTED_MODULE_4__travel_distance_distance_component__["a" /* DistanceComponent */] },
    { path: 'names', component: __WEBPACK_IMPORTED_MODULE_5__names_name_generator_name_generator_component__["a" /* NameGeneratorComponent */] },
    { path: 'armor', component: __WEBPACK_IMPORTED_MODULE_8__armor_armor_list_armor_list_component__["a" /* ArmorListComponent */] },
    { path: 'prices', component: __WEBPACK_IMPORTED_MODULE_3__prices_price_list_price_list_component__["a" /* PriceListComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__core_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "  <app-nav></app-nav>\n<main role=\"main\">\n\n    <router-outlet></router-outlet>\n\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__armor_armor_module__ = __webpack_require__("../../../../../src/app/armor/armor.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manors_manors_module__ = __webpack_require__("../../../../../src/app/manors/manors.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__prices_prices_module__ = __webpack_require__("../../../../../src/app/prices/prices.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__travel_travel_module__ = __webpack_require__("../../../../../src/app/travel/travel.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__names_names_module__ = __webpack_require__("../../../../../src/app/names/names.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_6__manors_manors_module__["a" /* ManorsModule */],
                __WEBPACK_IMPORTED_MODULE_8__travel_travel_module__["a" /* TravelModule */],
                __WEBPACK_IMPORTED_MODULE_9__names_names_module__["a" /* NamesModule */],
                __WEBPACK_IMPORTED_MODULE_4__armor_armor_module__["a" /* ArmorModule */],
                __WEBPACK_IMPORTED_MODULE_7__prices_prices_module__["a" /* PricesModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/armor/armor-list/armor-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid page\">\n  <h2>Armor, because.... look out behind you!!!</h2>\n  <div class=\"row\">\n\n    <div class=\"col-md-4\">\n      <div class=\"card border border-dark\">\n        <div class=\"card-header bg-dark text-light\"><h5 class=\"card-title col-xs-8\">Available Armor</h5>\n        </div>\n        <div class=\"card-header text-center pb-1 pt-1\">\n          <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"First group\">\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"filterArmor()\">All</button>\n            <button\n              type=\"button\"\n              class=\"btn btn-secondary\"\n              *ngFor=\"let armortType of armorTypes\"\n              (click)=\"filterArmor(armortType)\">{{armortType | titlecase}}</button>\n          </div>\n        </div>\n        <div class=\"card-body\">\n\n          <div *ngFor=\"let item of armorDisplayList\" class=\"list-group-item row\" draggable [dragScope]=\"'rack'\" [dragData]=\"item\">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <h5 class=\"mb-1\">{{item.name | titlecase}}</h5>\n              <small>{{item.basePrice}}d/{{item.baseWeight}}lb</small>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4\">\n      <div class=\"card border border-dark fixed\">\n        <div class=\"card-header bg-dark\"><h5 class=\"card-title text-light\">Armor Worn</h5></div>\n        <div class=\"card-body\" droppable [dropScope]=\"'rack'\" (onDrop)=\"onItemDrop($event)\">\n          <div *ngIf=\"armorWorn < 1\" class=\"text-center\">\n            <h4><i class=\"fas fa-caret-square-down\"></i> Drag and Drop armor here</h4>\n          </div>\n          <div *ngFor=\"let item of armorWorn\" draggable [dragScope]=\"'trash'\" [dragData]=\"item\">\n            <div class=\"list-group-item\">\n              <div class=\"d-flex\">\n                <h5 class=\"mr-auto p-1\">{{item.name | titlecase}}</h5>\n                <div class=\"p-1 pr-2\">{{item.price()}}d/{{item.baseWeight}}lb</div>\n                <div class=\"p-1 text-center\">Qlty:\n                  <a (click)=\"item.decreaseQuality()\"><i class=\"far fa-minus-square\"></i></a>\n                  {{item.quality}}\n                  <a (click)=\"item.increaseQuality()\"><i class=\"far fa-plus-square\"></i></a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer pb-3 pt-3\" droppable [dropScope]=\"'trash'\" (onDrop)=\"onTrashDrop($event)\">\n          <h5 [hidden]=\"armorWorn < 1\"><i class=\"fas fa-trash\"></i> Drop here to remove</h5>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4\">\n      <app-protection-table [armorWorn]=\"armorWorn\"></app-protection-table>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/armor/armor-list/armor-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fixed {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 3.0rem;\n  z-index: 999; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/armor/armor-list/armor-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArmorListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_armor_data__ = __webpack_require__("../../../../../src/app/armor/shared/armor.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_armor_model__ = __webpack_require__("../../../../../src/app/armor/shared/armor.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_armor_service__ = __webpack_require__("../../../../../src/app/armor/shared/armor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArmorListComponent = (function () {
    function ArmorListComponent(armorService) {
        this.armorService = armorService;
    }
    ArmorListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.armorTypes = __WEBPACK_IMPORTED_MODULE_2__shared_armor_data__["b" /* ArmorTypes */];
        this.armorLoaded = false;
        this.armorService.loadArmor().subscribe(function (armorList) { return _this.armorList = armorList; }, function (err) { return console.log(err); }, function () {
            _this.armorList = _this.sortArmorList(_this.armorList);
            _this.filterArmor();
            _this.armorLoaded = true;
        });
        this.armorWorn = [];
    };
    ArmorListComponent.prototype.onItemDrop = function (e) {
        var data = e.dragData;
        if (data) {
            this.addWornArmor(e.dragData);
        }
    };
    ArmorListComponent.prototype.onTrashDrop = function (e) {
        if (e.dragData instanceof __WEBPACK_IMPORTED_MODULE_3__shared_armor_model__["a" /* ArmorPiece */]) {
            this.removeWornArmor(e.dragData);
        }
    };
    ArmorListComponent.prototype.addWornArmor = function (data) {
        this.armorWorn.push(new __WEBPACK_IMPORTED_MODULE_3__shared_armor_model__["a" /* ArmorPiece */](data));
    };
    ArmorListComponent.prototype.removeWornArmor = function (data) {
        var idx = this.armorWorn.indexOf(data);
        if (idx > -1) {
            this.armorWorn.splice(idx, 1);
        }
    };
    ArmorListComponent.prototype.filterArmor = function (armorType) {
        if (armorType === void 0) { armorType = null; }
        if (armorType === null) {
            this.armorDisplayList = this.armorList;
        }
        else {
            this.armorDisplayList = this.armorList.filter(function (armor) { return armor.type === armorType; });
        }
    };
    ArmorListComponent.prototype.sortArmorList = function (armorList) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["orderBy"](armorList, [
            'type',
            'skull',
            'face',
            'neck',
            'shoulders',
            'thoraxFront',
            'thoraxBack',
            'abdomenFront',
            'abdomenBack',
            'hips',
            'upperArms',
            'elbows',
            'hands',
            'groin',
            'thighs',
            'knees',
            'feet'
        ], [
            'asc',
            'desc',
            'desc',
            'desc',
            'desc',
            'desc',
            'desc',
            'desc',
            'desc',
            'desc',
            'desc',
            'desc',
            'desc',
            'desc',
            'desc',
            'desc',
            'desc',
        ]);
    };
    ArmorListComponent.prototype.armorCoverageDescription = function (armor) {
        var props = [];
        for (var prop in armor) {
            if (typeof armor[prop] === 'boolean' && armor[prop]) {
                props.push(prop);
            }
        }
        return props.join('-');
    };
    ArmorListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-armor-list',
            template: __webpack_require__("../../../../../src/app/armor/armor-list/armor-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/armor/armor-list/armor-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_armor_service__["a" /* ArmorService */]])
    ], ArmorListComponent);
    return ArmorListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/armor/armor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArmorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_drag_drop__ = __webpack_require__("../../../../ng-drag-drop/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_drag_drop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_drag_drop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_armor_service__ = __webpack_require__("../../../../../src/app/armor/shared/armor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__armor_list_armor_list_component__ = __webpack_require__("../../../../../src/app/armor/armor-list/armor-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__protection_table_protection_table_component__ = __webpack_require__("../../../../../src/app/armor/protection-table/protection-table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ArmorModule = (function () {
    function ArmorModule() {
    }
    ArmorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng_drag_drop__["NgDragDropModule"].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__armor_list_armor_list_component__["a" /* ArmorListComponent */], __WEBPACK_IMPORTED_MODULE_5__protection_table_protection_table_component__["a" /* ProtectionTableComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_armor_service__["a" /* ArmorService */]]
        })
    ], ArmorModule);
    return ArmorModule;
}());



/***/ }),

/***/ "../../../../../src/app/armor/protection-table/protection-table.component.html":
/***/ (function(module, exports) {

module.exports = "<h5>Total Protection Values</h5>\n<table class=\"table table-striped table-bordered table-sm\">\n  <thead class=\"thead-light\">\n  <tr>\n    <th class=\"font-weight-bold\">Location</th>\n    <th class=\"font-weight-bold text-center\">B</th>\n    <th class=\"font-weight-bold text-center\">E</th>\n    <th class=\"font-weight-bold text-center\">P</th>\n    <th class=\"font-weight-bold text-center\">F</th>\n  </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let location of locationList\">\n      <tr>\n        <td class=\"font-weight-bold\">{{locationLabels[location] | titlecase}}</td>\n        <ng-container *ngFor=\"let damageType of damageTypes\">\n          <td class=\"text-center\">{{locationProtection(location, damageType)}}</td>\n        </ng-container>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n<strong>Weight:</strong> {{totalWeight() | number}} lbs / <strong>Value: {{totalValue() | number}} d</strong>\n"

/***/ }),

/***/ "../../../../../src/app/armor/protection-table/protection-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/armor/protection-table/protection-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtectionTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_armor_data__ = __webpack_require__("../../../../../src/app/armor/shared/armor.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProtectionTableComponent = (function () {
    function ProtectionTableComponent() {
        this.locationLabels = __WEBPACK_IMPORTED_MODULE_1__shared_armor_data__["a" /* ArmorLocationLabels */];
    }
    ProtectionTableComponent.prototype.ngOnInit = function () {
        this.parseLocationList();
        this.damageTypes = __WEBPACK_IMPORTED_MODULE_1__shared_armor_data__["c" /* DamageTypes */];
    };
    ProtectionTableComponent.prototype.locationProtection = function (location, damageType) {
        var protection = 0;
        for (var _i = 0, _a = this.armorWorn; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item[location]) {
                protection += item.protection(damageType);
            }
        }
        return protection;
    };
    ProtectionTableComponent.prototype.totalWeight = function () {
        var weight = 0;
        for (var _i = 0, _a = this.armorWorn; _i < _a.length; _i++) {
            var item = _a[_i];
            weight += item.baseWeight;
        }
        return weight;
    };
    ProtectionTableComponent.prototype.totalValue = function () {
        var price = 0;
        for (var _i = 0, _a = this.armorWorn; _i < _a.length; _i++) {
            var item = _a[_i];
            price += item.price();
        }
        return price;
    };
    ProtectionTableComponent.prototype.parseLocationList = function () {
        var locations = [];
        for (var location_1 in __WEBPACK_IMPORTED_MODULE_1__shared_armor_data__["a" /* ArmorLocationLabels */]) {
            if (location_1) {
                location_1 = __WEBPACK_IMPORTED_MODULE_2_lodash__["lowerFirst"](location_1);
                locations.push(location_1);
            }
        }
        this.locationList = locations;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('armorWorn'),
        __metadata("design:type", Array)
    ], ProtectionTableComponent.prototype, "armorWorn", void 0);
    ProtectionTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-protection-table',
            template: __webpack_require__("../../../../../src/app/armor/protection-table/protection-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/armor/protection-table/protection-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProtectionTableComponent);
    return ProtectionTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/armor/shared/armor.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ArmorTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DamageTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ProtectionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArmorLocationLabels; });
var ArmorTypes = [
    'cloth',
    'quilt',
    'leather',
    'kurbul',
    'ring',
    'mail',
    'scale',
    'plate'
];
var DamageTypes = [
    'blunt', 'edge', 'point', 'fire'
];
var ProtectionValue = {
    'cloth': {
        'blunt': 1,
        'edge': 1,
        'point': 1,
        'fire': 1,
    },
    'quilt': {
        'blunt': 5,
        'edge': 3,
        'point': 2,
        'fire': 4,
    },
    'leather': {
        'blunt': 2,
        'edge': 4,
        'point': 3,
        'fire': 3,
    },
    'kurbul': {
        'blunt': 4,
        'edge': 5,
        'point': 4,
        'fire': 3,
    },
    'ring': {
        'blunt': 3,
        'edge': 6,
        'point': 4,
        'fire': 3,
    },
    'mail': {
        'blunt': 2,
        'edge': 8,
        'point': 5,
        'fire': 1,
    },
    'scale': {
        'blunt': 5,
        'edge': 9,
        'point': 4,
        'fire': 5,
    },
    'plate': {
        'blunt': 6,
        'edge': 10,
        'point': 6,
        'fire': 2,
    },
};
/**
 * This is a map of ArmorLocation to the field label in the object.
 * @type {string}
 */
var ArmorLocationLabels = {
    skull: 'skull',
    face: 'face',
    neck: 'neck',
    shoulders: 'shoulders',
    upperArms: 'upper arms',
    elbows: 'elbows',
    forearms: 'forearms',
    hands: 'hands',
    thoraxFront: 'thorax (front)',
    thoraxBack: 'thorax (back)',
    abdomenFront: 'abdomen (front)',
    abdomenBack: 'abdomen (back)',
    hips: 'hips',
    groin: 'groin',
    thighs: 'thighs',
    knees: 'knees',
    calves: 'calves',
    feet: 'feet'
};


/***/ }),

/***/ "../../../../../src/app/armor/shared/armor.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArmorPiece; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__armor_data__ = __webpack_require__("../../../../../src/app/armor/shared/armor.data.ts");

var ArmorPiece = (function () {
    function ArmorPiece(init) {
        Object.assign(this, init);
        this.quality = 1;
    }
    Object.defineProperty(ArmorPiece.prototype, "quality", {
        get: function () {
            return this._quality;
        },
        set: function (n) {
            this._quality = n;
        },
        enumerable: true,
        configurable: true
    });
    ArmorPiece.prototype.increaseQuality = function () {
        if (this.quality === 1 + this.maxQuality()) {
            return;
        }
        if (this.quality === -1) {
            this.quality = 1;
        }
        else {
            this.quality += 1;
        }
    };
    ArmorPiece.prototype.decreaseQuality = function () {
        if (this.quality === -1 * this.maxQuality()) {
            return;
        }
        if (this.quality === 1) {
            this.quality = -1;
        }
        else {
            this.quality -= 1;
        }
    };
    ArmorPiece.prototype.maxQuality = function () {
        return Math.max(__WEBPACK_IMPORTED_MODULE_0__armor_data__["d" /* ProtectionValue */][this.type]['blunt'], __WEBPACK_IMPORTED_MODULE_0__armor_data__["d" /* ProtectionValue */][this.type]['edge'], __WEBPACK_IMPORTED_MODULE_0__armor_data__["d" /* ProtectionValue */][this.type]['point'], __WEBPACK_IMPORTED_MODULE_0__armor_data__["d" /* ProtectionValue */][this.type]['fire']);
    };
    ArmorPiece.prototype.price = function () {
        var price = this.basePrice * this.quality;
        if (this.quality >= 0 && this.quality <= 1) {
            price = this.basePrice;
        }
        if (this.quality > 1) {
            price = this.basePrice * 2 * (this.quality - 1);
        }
        if (this.quality < 0) {
            price = this.basePrice / (Math.abs(this.quality) + 1);
        }
        return parseFloat(price.toFixed(1));
    };
    ArmorPiece.prototype.protection = function (aspect) {
        var base = __WEBPACK_IMPORTED_MODULE_0__armor_data__["d" /* ProtectionValue */][this.type][aspect];
        var mod = this.qualityMod();
        var adjusted = mod + base < 0 ? 0 : mod + base;
        return Math.min(adjusted, base * 2);
    };
    ArmorPiece.prototype.qualityMod = function () {
        if (this.quality === 0) {
            return 0;
        }
        if (this.quality < 0) {
            return this.quality;
        }
        return this.quality - 1;
    };
    return ArmorPiece;
}());



/***/ }),

/***/ "../../../../../src/app/armor/shared/armor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArmorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArmorService = (function () {
    function ArmorService(http) {
        this.http = http;
    }
    ArmorService.prototype.loadArmor = function () {
        if (!this.armorList) {
            this.armorList = this.http.get('assets/data/armor.data.json');
        }
        return this.armorList;
    };
    ArmorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ArmorService);
    return ArmorService;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav_nav_component__ = __webpack_require__("../../../../../src/app/core/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_page_main_page_component__ = __webpack_require__("../../../../../src/app/core/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/core/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loading_spinner_loading_spinner_component__ = __webpack_require__("../../../../../src/app/core/loading-spinner/loading-spinner.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__nav_nav_component__["a" /* NavComponent */], __WEBPACK_IMPORTED_MODULE_4__main_page_main_page_component__["a" /* MainPageComponent */], __WEBPACK_IMPORTED_MODULE_6__loading_spinner_loading_spinner_component__["a" /* LoadingSpinnerComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__nav_nav_component__["a" /* NavComponent */], __WEBPACK_IMPORTED_MODULE_4__main_page_main_page_component__["a" /* MainPageComponent */], __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */], __WEBPACK_IMPORTED_MODULE_6__loading_spinner_loading_spinner_component__["a" /* LoadingSpinnerComponent */]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/loading-spinner/loading-spinner.component.html":
/***/ (function(module, exports) {

module.exports = "{{msg}}\n<div class=\"spinner\">\n  <div class=\"bounce1\"></div>\n  <div class=\"bounce2\"></div>\n  <div class=\"bounce3\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/loading-spinner/loading-spinner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner {\n  width: 70px;\n  text-align: center; }\n\n.spinner > div {\n  width: 18px;\n  height: 18px;\n  background-color: #333;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both; }\n\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s; }\n\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s; }\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/loading-spinner/loading-spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingSpinnerComponent = (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LoadingSpinnerComponent.prototype, "msg", void 0);
    LoadingSpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loading-spinner',
            template: __webpack_require__("../../../../../src/app/core/loading-spinner/loading-spinner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/loading-spinner/loading-spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container page\">\n\n  <!-- Introduction Row -->\n  <h1 class=\"my-4\">Harn Tools</h1>\n  <p>This site contains a few tools I created to support play in my <a href=\"\" target=\"_blank\">Harn</a> and <a href=\"\" target=\"_blank\">HarnMaster</a> table-top RPG. </p>\n\n  <!-- Team Members Row -->\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n      <a routerLink=\"armor\">\n        <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"assets/images/armor.png\" alt=\"Armor\">\n      </a>\n      <h3>Armor Calculator</h3>\n      <p>Drag and Drop interface for armor in Harn calculates protection, weight, and value.</p>\n    </div>\n    <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n      <a routerLink=\"prices\">\n        <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"assets/images/prices.png\" alt=\"Ledger\">\n      </a>\n      <h3>Price List</h3>\n      <p>A Harnic Price List that with basic search and filtering options, compiled by various members of the harn community.</p>\n    </div>\n    <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n      <a routerLink=\"names\">\n        <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"assets/images/names.png\" alt=\"Harnic Names\">\n      </a>\n      <h3>Name Generator</h3>\n      <p>Generates random names for various culture on Harn.</p>\n    </div>\n    <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n      <a routerLink=\"travel\">\n        <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"assets/images/travel.png\" alt=\"Travel\">\n      </a>\n      <h3>Travel Distances/Converter</h3>\n      <p>Converts distances between various units and provides a dynamic travel speed table.</p>\n    </div>\n    <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n      <a routerLink=\"manors\">\n        <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"assets/images/manor.png\" alt=\"Manor House\">\n      </a>\n      <h3>Manor Generator</h3>\n      <p>Generates a manor and villiage based on rules form the Harn Manor supplement and allows users to tweak and edit details as needed.</p>\n    </div>\n    <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n      <a href=\"https://docs.google.com/spreadsheets/d/11ioQW6WoxajkDGNq4EYeV0BL3xMUUxg224tiV5jDcW8/copy?usp=sharing\" target=\"_blank\">\n        <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"assets/images/skillscalc.png\" alt=\"Spreadsheet\">\n      </a>\n      <h3>Skills Calculator <i class=\"fas fa-external-link-alt\"></i></h3>\n      <p>External Link to copy a Google Sheet for calculating Harn Character skills.</p>\n    </div>\n    <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n      <a href=\"https://docs.google.com/spreadsheets/d/11ioQW6WoxajkDGNq4EYeV0BL3xMUUxg224tiV5jDcW8/copy?usp=sharing\" target=\"_blank\">\n        <img class=\"img-fluid d-block mx-auto\" src=\"assets/images/Roll20_Logo_200.png\" alt=\"Roll 20 Logo\">\n      </a>\n      <h3>Roll20 Character Sheet <i class=\"fas fa-external-link-alt\"></i></h3>\n      <p>External Link the github repo for the Roll20 Harn Character Sheet I created.  It is included on Roll20 already under the heading Harn (simple).</p>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/main-page/main-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/main-page/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainPageComponent = (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__("../../../../../src/app/core/main-page/main-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/main-page/main-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/\">Harn Tools</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/\" [routerLinkActive]=\"['active']\">Home</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"dropdownToolsMenu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Tools</a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownToolsMenu\">\n          <a class=\"dropdown-item\" [routerLink]=\"['names']\" [routerLinkActive]=\"['active']\">Names</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['manors']\" [routerLinkActive]=\"['active']\">Manor</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['travel']\" [routerLinkActive]=\"['active']\">Travel</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['armor']\" [routerLinkActive]=\"['active']\">Armor</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['prices']\" [routerLinkActive]=\"['active']\">Prices</a>\n          <a class=\"dropdown-item disabled\" href=\"#\">Weather</a>\n          <a class=\"dropdown-item disabled\" href=\"#\">Treasure</a>\n\n\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://github.com/Streamweaver/harn-roll20\" target=\"_blank\">Roll20 Charsheet</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"dropdownLinksMenu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Info</a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownLinksMenu\">\n          <a class=\"dropdown-item disabled\" href=\"http://columbiagames.com/harn/index.html\" target=\"_blank\">Harn@ColbumbiaGames</a>\n          <a class=\"dropdown-item disabled\" href=\"http://www.kelestia.com/\" target=\"_blank\">Harn@Kelestia</a>\n          <a class=\"dropdown-item disabled\" href=\"https://www.lythia.com/\" target=\"_blank\">Lythia.com</a>\n          <a class=\"dropdown-item disabled\" href=\"http://www.quicenter.com/harn/default_en.asp\" target=\"_blank\">Fenhorns Harnpage</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/core/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/core/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"container text-center\">\n    <h1 class=\"display-3\">404 Error<br>Page Not Found</h1>\n    <p>There are many pages on the internet, this is not one of them.  What were you thinking?!?</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/core/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manors/crop-list/crop-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-sm\" *ngIf=\"!showGenerationInput\">\n  <thead class=\"thead-dark\">\n  <tr>\n    <th class=\"font-weight-bold\">Crops</th>\n    <th class=\"font-weight-bold text-center\" width=\"10%\">RI</th>\n    <th class=\"font-weight-bold text-center\" width=\"10%\">Yield</th>\n    <th class=\"font-weight-bold text-center\" width=\"15%\">Acres</th>\n    <th class=\"font-weight-bold text-center\" width=\"10%\">Labor</th>\n    <th class=\"font-weight-bold text-right\" width=\"15%\">Kind</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let crop of manor.crops\">\n    <td>{{crop.cropType}}</td>\n    <td class=\"text-center\">{{reeveIndex(crop)}}</td>\n    <td class=\"text-center\">{{cropYield(crop)}}</td>\n    <td width=\"10%\">\n      <div class=\"input-group input-group-sm\">\n        <input type=\"number\" class=\"form-control text-center\" [(ngModel)]=\"crop.acres\" (input)=\"updateTotals()\">\n      </div>\n    </td>\n    <td class=\"text-center\">{{cropLabor(crop)}}</td>\n    <td class=\"text-right\">{{cropKind(crop) | number}}</td>\n  </tr>\n  <tr class=\"table-summary\">\n    <td class=\"text-right font-weight-bold\" colspan=\"3\">Totals:</td>\n    <td class=\"text-right font-weight-bold text-center\" [ngClass]=\"{'alert alert-danger': warnTotalAcres()}\">{{cropTotals.acres | number}}</td>\n    <td class=\"text-right font-weight-bold text-center\">{{cropTotals.labor | number}}</td>\n    <td class=\"text-right font-weight-bold\">{{cropTotals.kind | number}}d</td>\n  </tr>\n  <tr class=\"alert alert-danger\" *ngIf=\"warnTotalAcres()\">\n    <td colspan=\"6\">\n      Total acres used for crops and herds cannot exceed cleared acres.  Adjust until the total is below.\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/manors/crop-list/crop-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manors/crop-list/crop-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_manor_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/manor.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_data_service__ = __webpack_require__("../../../../../src/app/manors/shared/services/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utilities__ = __webpack_require__("../../../../../src/app/manors/shared/utilities.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CropListComponent = (function () {
    function CropListComponent(dataService) {
        this.dataService = dataService;
    }
    CropListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.crops.subscribe(function (ct) { return _this.cropTotals = ct; });
        this.dataService.herds.subscribe(function (ht) { return _this.herdTotals = ht; });
        this.dataService.showGenerationInput.subscribe(function (g) { return _this.showGenerationInput = g; });
    };
    CropListComponent.prototype.reeveIndex = function (crop) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__shared_utilities__["b" /* checkResultIndex */])(crop.checkResult);
    };
    CropListComponent.prototype.cropKind = function (crop) {
        return Math.floor(crop.acres * this.cropYield(crop));
    };
    CropListComponent.prototype.cropYield = function (crop) {
        var result = Math.floor(crop.baseYield *
            this.manor.landQuality *
            this.manor.fiefIndex *
            this.manor.weatherIndex *
            Object(__WEBPACK_IMPORTED_MODULE_3__shared_utilities__["b" /* checkResultIndex */])(crop.checkResult));
        return result;
    };
    CropListComponent.prototype.cropLabor = function (crop) {
        return crop.baseLabor * crop.acres;
    };
    CropListComponent.prototype.updateTotals = function () {
        var totals = {
            kind: 0,
            labor: 0,
            acres: 0
        };
        for (var _i = 0, _a = this.manor.crops; _i < _a.length; _i++) {
            var crop = _a[_i];
            totals.kind += this.cropKind(crop);
            totals.labor += this.cropLabor(crop);
            totals.acres += crop.acres;
        }
        this.dataService.setCropTotals(totals);
    };
    CropListComponent.prototype.warnTotalAcres = function () {
        var usedAcres = this.herdTotals.acres + this.cropTotals.acres;
        return usedAcres > this.manor.clearedAcres;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('manor'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_models_manor_model__["a" /* Manor */])
    ], CropListComponent.prototype, "manor", void 0);
    CropListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-crop-list',
            template: __webpack_require__("../../../../../src/app/manors/crop-list/crop-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manors/crop-list/crop-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_shared_data_service__["a" /* SharedDataService */]])
    ], CropListComponent);
    return CropListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manors/fief-budget/fief-budget.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-sm\" [formGroup]=\"budgetForm\" *ngIf=\"!showGenerationInput\">\n  <thead class=\"thead-dark\">\n  <tr>\n    <th class=\"font-weight-bold\">Fief's Budget</th>\n    <th class=\"font-weight-bold text-center\" width=\"10%\">RI</th>\n    <th class=\"font-weight-bold text-center\"width=\"10%\">Yield</th>\n    <th class=\"font-weight-bold text-center\" width=\"15%\">Acres</th>\n    <th class=\"font-weight-bold text-center\" width=\"10%\">Labor</th>\n    <th class=\"font-weight-bold text-right\" width=\"15%\">Kind</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr [ngClass]=\"{'alert alert-danger': budgetForm.controls['woodsWorked'].invalid && (budgetForm.controls['woodsWorked'].dirty || budgetForm.controls['woodsWorked'].touched)}\">\n    <td>Woods</td>\n    <td class=\"text-center\">{{checkResultIndex(manor.woods.checkResult)}}</td>\n    <td class=\"text-center\">{{woodsYield()}}</td>\n    <td class=\"text-center\">\n      <div class=\"input-group input-group-sm\">\n        <input type=\"number\" class=\"form-control text-center\" formControlName=\"woodsWorked\"\n               [(ngModel)]=\"manor.woods.acresWorked\">\n      </div>\n    </td>\n    <td class=\"text-center\">{{woodsLabor()}}</td>\n    <td class=\"text-right\">{{woodsKind() | number}}d</td>\n  </tr>\n  <tr>\n    <td>Crop</td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-center\">{{crops.acres | number}}</td>\n    <td class=\"text-center\">{{crops.labor | number}}</td>\n    <td class=\"text-right\">{{crops.kind | number}}</td>\n  </tr>\n  <tr>\n    <td>Pastures</td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-center\">{{herds.acres | number}}</td>\n    <td class=\"text-center\">{{herds.labor | number}}</td>\n    <td class=\"text-right\">{{herds.kind | number}}</td>\n  </tr>\n  <tr>\n    <td>Waste</td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-center\">{{manor.waste}}</td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-right\"></td>\n  </tr>\n  <tr class=\"table-summary\">\n    <td class=\"font-weight-bold\">Harvest Total:</td>\n    <td class=\" text-center\"></td>\n    <td class=\" text-center\"></td>\n    <td class=\" text-center\"></td>\n    <td class=\" text-center font-weight-bold\">{{totalHarvestLabor() | number}}</td>\n    <td class=\" text-right font-weight-bold\">{{totalHarvestKind() | number }}d</td>\n  </tr>\n  <tr [ngClass]=\"{'alert alert-danger': budgetForm.controls['cropSeed'].invalid && (budgetForm.controls['cropSeed'].dirty || budgetForm.controls['cropSeed'].touched)}\">\n    <td>Crop Seed</td>\n    <td class=\"text-center\">{{beadleIndex(manor.cropSeed.checkResult)}}</td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-center\">\n      <div class=\"input-group input-group-sm\">\n        <input type=\"number\" class=\"form-control text-center\" formControlName=\"cropSeed\"\n               [(ngModel)]=\"manor.cropSeed.acresPlanned\">\n      </div>\n    </td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-right\">{{cropSeedKind() | number}}d</td>\n  </tr>\n  <tr *ngIf=\"budgetForm.controls['cropSeed'].invalid && (budgetForm.controls['cropSeed'].dirty || budgetForm.controls['cropSeed'].touched)\" class=\"alert alert-danger small\">\n    <td colspan=\"6\">\n      <div *ngIf=\"budgetForm.controls['cropSeed'].errors.required\">\n        Required\n      </div>\n      <div *ngIf=\"budgetForm.controls['cropSeed'].errors.min\">\n        cannot be less than 0\n      </div>\n    </td>\n  </tr>\n\n  <tr [ngClass]=\"{'alert alert-danger': budgetForm.controls['winterFeed'].invalid && (budgetForm.controls['winterFeed'].dirty || budgetForm.controls['winterFeed'].touched)}\">\n    <td>Winter Feed</td>\n    <td class=\"text-center\">{{beadleIndex(manor.winterFeed.checkResult)}}</td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-center\">\n      <div class=\"input-group input-group-sm\">\n        <input type=\"number\" class=\"form-control text-center\" formControlName=\"winterFeed\"\n               [(ngModel)]=\"manor.winterFeed.acresPlanned\">\n      </div>\n    </td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-right\">{{winterFeedKind() | number}}d</td>\n  </tr>\n  <tr *ngIf=\"budgetForm.controls['winterFeed'].invalid && (budgetForm.controls['winterFeed'].dirty || budgetForm.controls['winterFeed'].touched)\" class=\"alert alert-danger small\">\n    <td colspan=\"6\">\n      <div *ngIf=\"budgetForm.controls['winterFeed'].errors.required\">\n        Required\n      </div>\n      <div *ngIf=\"budgetForm.controls['winterFeed'].errors.min\">\n        cannot be less than 0\n      </div>\n    </td>\n  </tr>\n\n  <tr>\n    <td>Fief maintenance</td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-center\">\n      <div class=\"input-group input-group-sm\">\n        <input type=\"number\" class=\"form-control text-center\" formControlName=\"fiefMaintenance\"\n               [(ngModel)]=\"manor.fiefMaintenance\">\n      </div>\n    </td>\n    <td class=\"text-center\">{{fiefMaintLabor() | number}}</td>\n    <td class=\"text-right\">{{fiefMaintKind() | number}}d</td>\n  </tr>\n  <tr>\n    <td>Assart</td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-center\">\n      <div class=\"input-group input-group-sm\">\n        <input type=\"number\" class=\"form-control text-center\" formControlName=\"assart\" [(ngModel)]=\"manor.assart\">\n      </div>\n    </td>\n    <td class=\"text-center\">{{assartLabor() | number}}</td>\n    <td class=\"text-right\">{{assartKind() | number}}d</td>\n  </tr>\n  <tr class=\"table-summary\">\n    <td class=\"font-weight-bold \">Fief Total:</td>\n    <td class=\" text-center\"></td>\n    <td class=\" text-center\"></td>\n    <td class=\" text-center\"></td>\n    <td class=\"table-danger font-weight-bold text-center\" [ngClass]=\"{'table-invalid': warnLabor}\">\n   {{fiefIncomeLabor() | number}}\n    </td>\n    <td class=\"font-weight-bold text-right\">{{fiefIncomeKind() | number}}d</td>\n  </tr>\n  <tr *ngIf=\"warnLabor\">\n    <td colspan=\"6\" class=\"alert alert-danger\">\n      Current work plan requires more labor than is available, adjust to reduce below Labor Obligation.\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/manors/fief-budget/fief-budget.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manors/fief-budget/fief-budget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiefBudgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_manor_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/manor.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_shared_data_service__ = __webpack_require__("../../../../../src/app/manors/shared/services/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_utilities__ = __webpack_require__("../../../../../src/app/manors/shared/utilities.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FiefBudgetComponent = (function () {
    function FiefBudgetComponent(dataService, fb) {
        this.dataService = dataService;
        this.fb = fb;
        this.beadleIndex = __WEBPACK_IMPORTED_MODULE_4__shared_utilities__["a" /* beadleResultIndex */];
    }
    FiefBudgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.crops.subscribe(function (cropTotals) { return (_this.crops = cropTotals); });
        this.dataService.herds.subscribe(function (herdTotals) { return (_this.herds = herdTotals); });
        this.dataService.showGenerationInput.subscribe(function (g) { return _this.showGenerationInput = g; });
        this.createForm();
        this.warnLabor = false;
    };
    Object.defineProperty(FiefBudgetComponent.prototype, "manor", {
        get: function () {
            return this._manor;
        },
        set: function (manor) {
            this._manor = manor;
        },
        enumerable: true,
        configurable: true
    });
    FiefBudgetComponent.prototype.createForm = function () {
        this.budgetForm = this.fb.group({
            woodsWorked: [0, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].max(this.manor.woodlandAcres)
                ]],
            cropSeed: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)]],
            winterFeed: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)]],
            fiefMaintenance: [0, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].max(this.manor.clearedAcres)
                ]],
            assart: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].max(this.manor.woodlandAcres)]]
        });
    };
    FiefBudgetComponent.prototype.checkResultIndex = function (cr) {
        return Object(__WEBPACK_IMPORTED_MODULE_4__shared_utilities__["b" /* checkResultIndex */])(cr);
    };
    FiefBudgetComponent.prototype.woodsYield = function () {
        return Math.floor(this.manor.woods.basicYield *
            this.manor.fiefIndex *
            this.manor.landQuality *
            this.manor.weatherIndex);
    };
    FiefBudgetComponent.prototype.woodsLabor = function () {
        return this.manor.woods.acresWorked * 3;
    };
    FiefBudgetComponent.prototype.woodsKind = function () {
        return this.woodsYield() * this.manor.woods.acresWorked;
    };
    FiefBudgetComponent.prototype.totalHarvestLabor = function () {
        return this.woodsLabor() + this.crops.labor + this.herds.labor;
    };
    FiefBudgetComponent.prototype.totalHarvestKind = function () {
        return this.woodsKind() + this.herds.kind + this.crops.kind;
    };
    FiefBudgetComponent.prototype.cropSeedKind = function () {
        return Math.floor(this.manor.cropSeed.acresPlanned *
            12 *
            Object(__WEBPACK_IMPORTED_MODULE_4__shared_utilities__["a" /* beadleResultIndex */])(this.manor.cropSeed.checkResult));
    };
    FiefBudgetComponent.prototype.winterFeedKind = function () {
        return Math.floor(this.manor.winterFeed.acresPlanned *
            12 *
            Object(__WEBPACK_IMPORTED_MODULE_4__shared_utilities__["a" /* beadleResultIndex */])(this.manor.winterFeed.checkResult));
    };
    FiefBudgetComponent.prototype.fiefMaintLabor = function () {
        return Math.floor(this.manor.fiefMaintenance * this.manor.fiefIndex * 3);
    };
    FiefBudgetComponent.prototype.fiefMaintKind = function () {
        return this.manor.fiefMaintenance * this.manor.fiefIndex * 6;
    };
    FiefBudgetComponent.prototype.assartLabor = function () {
        return this.manor.assart * 30;
    };
    FiefBudgetComponent.prototype.assartKind = function () {
        return this.manor.assart * 120;
    };
    FiefBudgetComponent.prototype.fiefIncomeLabor = function () {
        var labor = this.totalHarvestLabor() + this.fiefMaintLabor();
        this.warnLabor = labor > this.manor.population.tenantLaborPool();
        return labor;
    };
    FiefBudgetComponent.prototype.fiefIncomeKind = function () {
        var income = this.totalHarvestKind() -
            this.cropSeedKind() -
            this.winterFeedKind() -
            this.fiefMaintKind() -
            this.assartKind();
        income = Math.floor(income);
        this.dataService.setFiefIncome(income);
        return income;
    };
    FiefBudgetComponent.prototype.ngDoCheck = function () {
        this.budgetForm.controls['woodsWorked'].setValidators([
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0),
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].max(this.manor.woodlandAcres)
        ]);
        this.budgetForm.controls['woodsWorked'].updateValueAndValidity();
        this.budgetForm.controls['fiefMaintenance'].setValidators([
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0),
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].max(this.manor.clearedAcres)
        ]);
        this.budgetForm.controls['fiefMaintenance'].updateValueAndValidity();
        this.budgetForm.controls['assart'].setValidators([
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0),
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].max(this.manor.woodlandAcres)
        ]);
        this.budgetForm.controls['assart'].updateValueAndValidity();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('manor'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_models_manor_model__["a" /* Manor */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_models_manor_model__["a" /* Manor */]])
    ], FiefBudgetComponent.prototype, "manor", null);
    FiefBudgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fief-budget',
            template: __webpack_require__("../../../../../src/app/manors/fief-budget/fief-budget.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manors/fief-budget/fief-budget.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_shared_data_service__["a" /* SharedDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], FiefBudgetComponent);
    return FiefBudgetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manors/general-data/general-data.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-sm\" [formGroup]=\"generalDataForm\">\n  <thead class=\"thead-dark\">\n  <tr>\n    <th colspan=\"2\">Information</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>\n    <td width=\"66%\">\n      Topology\n    </td>\n    <td width=\"34%\">\n      <div class=\"input-group input-group-sm\" *ngIf=\"showGenerationInput\">\n        <select class=\"px-1 py-1 col-sm-12\" formControlName=\"topology\"\n                [(ngModel)]=\"manor.topology\" (change)=\"onTopologySelect()\">\n          <option *ngFor=\"let topography of topologyChoices()\" [value]=\"topography\"\n                  [selected]=\"manor.topology === topography\">{{topography}}\n          </option>\n        </select>\n      </div>\n      <span *ngIf=\"!showGenerationInput\">{{manor.topology}}</span>\n    </td>\n  </tr>\n  <tr class=\"table-section\">\n    <td width=\"66%\">\n      Gross Acres\n    </td>\n    <td width=\"34%\">\n      <div class=\"input-group input-group-sm\" *ngIf=\"showGenerationInput\">\n        <input type=\"number\" class=\"form-control\" formControlName=\"grossAcres\"\n               (change)=\"onGrossAcresChange()\" [(ngModel)]=\"manor.grossAcres\">\n      </div>\n      <span *ngIf=\"!showGenerationInput\">{{manor.grossAcres}}</span>\n    </td>\n  </tr>\n  <tr [ngClass]=\"{'alert alert-danger': generalDataForm.controls['woodlandAcres'].invalid && (generalDataForm.controls['woodlandAcres'].dirty || generalDataForm.controls['woodlandAcres'].touched)}\">\n    <td width=\"66%\">\n      - Woodland Acres\n    </td>\n    <td width=\"34%\">\n      <div class=\"input-group input-group-sm\" *ngIf=\"showGenerationInput\">\n        <input type=\"number\" class=\"form-control\" formControlName=\"woodlandAcres\"\n               (change)=\"onWoodlandAcresChange()\" [(ngModel)]=\"manor.woodlandAcres\">\n      </div>\n      <span *ngIf=\"!showGenerationInput\">{{manor.woodlandAcres}}</span>\n    </td>\n  </tr>\n  <tr *ngIf=\"generalDataForm.controls['woodlandAcres'].invalid && (generalDataForm.controls['woodlandAcres'].dirty || generalDataForm.controls['woodlandAcres'].touched)\" class=\"alert alert-danger small\">\n    <td colspan=\"2\">\n    <div *ngIf=\"generalDataForm.controls['woodlandAcres'].errors.required\">\n      Required\n    </div>\n    <div *ngIf=\"generalDataForm.controls['woodlandAcres'].errors.min\">\n      cannot be less than 0\n    </div>\n    <div *ngIf=\"generalDataForm.controls['woodlandAcres'].errors.maxGrossAcres\">\n      cannot be more than Gross Acres\n    </div>\n    </td>\n  </tr>\n\n  <tr [ngClass]=\"{'alert alert-danger': generalDataForm.controls['clearedAcres'].invalid && (generalDataForm.controls['clearedAcres'].dirty || generalDataForm.controls['clearedAcres'].touched)}\">\n    <td width=\"66%\">\n      = Cleared Acres\n    </td>\n    <td width=\"34%\">\n      <div class=\"input-group input-group-sm\" *ngIf=\"showGenerationInput\">\n        <input type=\"number\" class=\"form-control\" formControlName=\"clearedAcres\"\n               (change)=\"onClearedAcresChange()\" [(ngModel)]=\"manor.clearedAcres\">\n      </div>\n      <span *ngIf=\"!showGenerationInput\">{{manor.clearedAcres}}</span>\n    </td>\n  </tr>\n  <tr *ngIf=\"generalDataForm.controls['clearedAcres'].invalid && (generalDataForm.controls['clearedAcres'].dirty || generalDataForm.controls['clearedAcres'].touched)\" class=\"alert alert-danger small\">\n    <td colspan=\"2\">\n      <div *ngIf=\"generalDataForm.controls['clearedAcres'].errors.required\">\n        Required\n      </div>\n      <div *ngIf=\"generalDataForm.controls['clearedAcres'].errors.min\">\n        cannot be less than 0\n      </div>\n      <div *ngIf=\"generalDataForm.controls['clearedAcres'].errors.maxGrossAcres\">\n        cannot be more than Gross Acres\n      </div>\n    </td>\n  </tr>\n\n  <tr>\n    <td width=\"66%\">\n      - Tenant Acres\n    </td>\n    <td width=\"34%\">\n      {{manor.population.tenantAcres()}}\n    </td>\n  </tr>\n  <tr>\n    <td width=\"66%\">\n      = Demesne Acres\n    </td>\n    <td width=\"34%\">\n      {{manor.demenseAcres()}}\n    </td>\n  </tr>\n  <tr class=\"table-section\">\n  <td width=\"66%\">\n    Labor Pool\n  </td>\n  <td width=\"34%\">\n    {{manor.population.tenantLaborPool()}}\n  </td>\n  </tr>\n  <tr>\n  <td width=\"66%\">\n    Labor Obligation\n  </td>\n  <td width=\"34%\">\n    {{manor.population.tenantLaborDays()}}\n  </td>\n\n  </tr>\n  <tr class=\"table-section\" [ngClass]=\"{'alert alert-danger': generalDataForm.controls['landQuality'].invalid && (generalDataForm.controls['landQuality'].dirty || generalDataForm.controls['landQuality'].touched)}\">\n    <td width=\"66%\">\n      Land Quality\n    </td>\n    <td width=\"34%\">\n      <div class=\"input-group input-group-sm\" *ngIf=\"showGenerationInput\">\n        <input type=\"number\" class=\"form-control\" formControlName=\"landQuality\" [(ngModel)]=\"manor.landQuality\">\n      </div>\n      <span *ngIf=\"!showGenerationInput\">{{manor.landQuality}}</span>\n    </td>\n  </tr>\n  <tr *ngIf=\"generalDataForm.controls['landQuality'].invalid && (generalDataForm.controls['landQuality'].dirty || generalDataForm.controls['landQuality'].touched)\" class=\"alert alert-danger small\">\n    <td colspan=\"2\">\n      <div *ngIf=\"generalDataForm.controls['landQuality'].errors.required\">\n        Required\n      </div>\n      <div *ngIf=\"generalDataForm.controls['landQuality'].errors.min\">\n        cannot be less than 0.75\n      </div>\n      <div *ngIf=\"generalDataForm.controls['landQuality'].errors.max\">\n        cannot be more than 1.3\n      </div>\n    </td>\n  </tr>\n\n  <tr [ngClass]=\"{'alert alert-danger': generalDataForm.controls['fiefIndex'].invalid && (generalDataForm.controls['fiefIndex'].dirty || generalDataForm.controls['fiefIndex'].touched)}\">\n    <td width=\"66%\">\n      Fief Index\n    </td>\n    <td width=\"34%\">\n      <div class=\"input-group input-group-sm\" *ngIf=\"showGenerationInput\">\n        <input type=\"number\" class=\"form-control\" formControlName=\"fiefIndex\" [(ngModel)]=\"manor.fiefIndex\">\n      </div>\n      <span *ngIf=\"!showGenerationInput\">{{manor.fiefIndex}}</span>\n    </td>\n  </tr>\n  <tr *ngIf=\"generalDataForm.controls['fiefIndex'].invalid && (generalDataForm.controls['fiefIndex'].dirty || generalDataForm.controls['fiefIndex'].touched)\" class=\"alert alert-danger small\">\n    <td colspan=\"2\">\n      <div *ngIf=\"generalDataForm.controls['fiefIndex'].errors.required\">\n        Required\n      </div>\n      <div *ngIf=\"generalDataForm.controls['fiefIndex'].errors.min\">\n        cannot be less than 0.75\n      </div>\n      <div *ngIf=\"generalDataForm.controls['fiefIndex'].errors.max\">\n        cannot be more than 1.25\n      </div>\n    </td>\n  </tr>\n\n  <tr [ngClass]=\"{'alert alert-danger': generalDataForm.controls['tradeIndex'].invalid && (generalDataForm.controls['tradeIndex'].dirty || generalDataForm.controls['tradeIndex'].touched)}\">\n    <td width=\"66%\">\n      Trade Index\n    </td>\n    <td width=\"34%\">\n      <div class=\"input-group input-group-sm\" *ngIf=\"showGenerationInput\">\n        <input type=\"number\" class=\"form-control\" formControlName=\"tradeIndex\" [(ngModel)]=\"manor.tradeIndex\">\n      </div>\n      <span *ngIf=\"!showGenerationInput\">{{manor.tradeIndex}}</span>\n    </td>\n  </tr>\n  <tr *ngIf=\"generalDataForm.controls['tradeIndex'].invalid && (generalDataForm.controls['tradeIndex'].dirty || generalDataForm.controls['tradeIndex'].touched)\" class=\"alert alert-danger small\">\n    <td colspan=\"2\">\n      <div *ngIf=\"generalDataForm.controls['tradeIndex'].errors.required\">\n        Required\n      </div>\n      <div *ngIf=\"generalDataForm.controls['tradeIndex'].errors.min\">\n        cannot be less than 0.5\n      </div>\n      <div *ngIf=\"generalDataForm.controls['tradeIndex'].errors.max\">\n        cannot be more than 1.7\n      </div>\n    </td>\n  </tr>\n\n  <tr class=\"table-section\">\n    <td width=\"66%\">\n      Year\n    </td>\n    <td width=\"34%\">\n      <div class=\"input-group input-group-sm\">\n        <input type=\"number\" class=\"form-control\" formControlName=\"year\" [(ngModel)]=\"manor.year\">\n      </div>\n    </td>\n  </tr>\n\n  <tr [ngClass]=\"{'alert alert-danger': generalDataForm.controls['weatherIndex'].invalid && (generalDataForm.controls['weatherIndex'].dirty || generalDataForm.controls['weatherIndex'].touched)}\">\n    <td width=\"66%\">\n      Weather Index\n    </td>\n    <td width=\"34%\">\n      <div class=\"input-group input-group-sm\" *ngIf=\"showGenerationInput\">\n        <input #weatherIndex type=\"number\" class=\"form-control\" formControlName=\"weatherIndex\" [(ngModel)]=\"manor.weatherIndex\">\n      </div>\n      <span *ngIf=\"!showGenerationInput\">{{manor.weatherIndex}}</span>\n    </td>\n  </tr>\n  <tr *ngIf=\"generalDataForm.controls['weatherIndex'].invalid && (generalDataForm.controls['weatherIndex'].dirty || generalDataForm.controls['weatherIndex'].touched)\" class=\"alert alert-danger small\">\n    <td colspan=\"2\">\n      <div *ngIf=\"generalDataForm.controls['weatherIndex'].errors.required\">\n        Required\n      </div>\n      <div *ngIf=\"generalDataForm.controls['weatherIndex'].errors.min\">\n        cannot be less than 0.65\n      </div>\n      <div *ngIf=\"generalDataForm.controls['weatherIndex'].errors.max\">\n        cannot be more than 1.35\n      </div>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/manors/general-data/general-data.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manors/general-data/general-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_generators_number_generator__ = __webpack_require__("../../../../../src/app/shared/generators/number-generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_manor_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/manor.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_shared_data_service__ = __webpack_require__("../../../../../src/app/manors/shared/services/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_utilities__ = __webpack_require__("../../../../../src/app/manors/shared/utilities.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GeneralDataComponent = (function () {
    function GeneralDataComponent(fb, dataService) {
        this.fb = fb;
        this.dataService = dataService;
    }
    GeneralDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dice = new __WEBPACK_IMPORTED_MODULE_2__shared_generators_number_generator__["b" /* NumberGenerator */]();
        this.dataService.showGenerationInput.subscribe(function (g) { return _this.showGenerationInput = g; });
        this.createForm();
    };
    GeneralDataComponent.prototype.createForm = function () {
        this.generalDataForm = this.fb.group({
            year: [null],
            topology: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            grossAcres: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)]],
            woodlandAcres: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_5__shared_utilities__["d" /* maxGrossAcres */]]],
            clearedAcres: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_5__shared_utilities__["d" /* maxGrossAcres */]]],
            landQuality: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0.75), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].max(1.3)]],
            fiefIndex: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0.75), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].max(1.25)]],
            tradeIndex: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0.5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].max(1.7)]],
            weatherIndex: [0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0.65), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].max(1.35)])]
        });
    };
    /**
     * Recalculates Woodland and Cleared Acre values based on values from the
     * Topology table in Harn Manor.
     */
    GeneralDataComponent.prototype.onTopologySelect = function () {
        var woodlandRatio = __WEBPACK_IMPORTED_MODULE_3__shared_models_manor_model__["e" /* TopologyEffects */][this.manor.topology].woods -
            10 +
            this.dice.rollTotal(6, 3);
        this.manor.woodlandAcres = Math.floor(this.manor.grossAcres * woodlandRatio / 100);
        this.manor.clearedAcres = this.manor.grossAcres - this.manor.woodlandAcres;
    };
    /**
     * When gross acres is changed it recalculates cleared acres and woodland acres to the same percent.
     */
    GeneralDataComponent.prototype.onGrossAcresChange = function () {
        var oldTotal = this.manor.woodlandAcres + this.manor.clearedAcres;
        var woodlandPercent = this.manor.woodlandAcres / oldTotal;
        this.manor.woodlandAcres = Math.floor(this.manor.grossAcres * woodlandPercent);
        this.manor.clearedAcres = this.manor.grossAcres - this.manor.woodlandAcres;
    };
    /**
     * When woodland acres are changed, recalculate cleared acres to compensate.
     */
    GeneralDataComponent.prototype.onWoodlandAcresChange = function () {
        this.manor.clearedAcres = this.manor.grossAcres - this.manor.woodlandAcres;
    };
    /**
     * When cleared acres are changed, recalculate woodland acres to compensate.
     */
    GeneralDataComponent.prototype.onClearedAcresChange = function () {
        this.manor.woodlandAcres = this.manor.grossAcres - this.manor.clearedAcres;
    };
    /**
     * Parses a string array of topologies from the enum for use in select option.
     * @returns {string[]}
     */
    GeneralDataComponent.prototype.topologyChoices = function () {
        var keys = Object.keys(__WEBPACK_IMPORTED_MODULE_3__shared_models_manor_model__["d" /* Topology */]);
        return keys;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('manor'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__shared_models_manor_model__["a" /* Manor */])
    ], GeneralDataComponent.prototype, "manor", void 0);
    GeneralDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-general-data',
            template: __webpack_require__("../../../../../src/app/manors/general-data/general-data.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manors/general-data/general-data.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_shared_data_service__["a" /* SharedDataService */]])
    ], GeneralDataComponent);
    return GeneralDataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manors/herd-list/herd-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-sm\" *ngIf=\"!showGenerationInput\">\n  <thead class=\"thead-dark\">\n  <tr>\n    <th class=\"font-weight-bold\">Herds</th>\n    <th class=\"font-weight-bold text-center\" width=\"10%\">RI</th>\n    <th class=\"font-weight-bold text-center\" width=\"10%\">Yield</th>\n    <th class=\"font-weight-bold text-center\" width=\"15%\">Acres</th>\n    <th class=\"font-weight-bold text-center\" width=\"10%\">Labor</th>\n    <th class=\"font-weight-bold text-right\" width=\"15%\">Kind</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let herd of manor.livestock\">\n    <td >{{herd.herdType}}: {{herdHeadCount(herd)}}</td>\n    <td class=\"text-center\">{{herderIndex(herd)}}</td>\n    <td class=\"text-center\">{{herdYield(herd)}}</td>\n    <td >\n      <div class=\"input-group input-group-sm\">\n        <input type=\"number\" class=\"form-control text-center\" [(ngModel)]=\"herd.acres\" (input)=\"updateTotals()\">\n      </div>\n    </td>\n    <td class=\"text-center\">{{herdLabor(herd)}}</td>\n    <td class=\"text-right\">{{herdKind(herd) | number}}</td>\n  </tr>\n  <tr class=\"table-summary\">\n    <td class=\"text-right font-weight-bold\" colspan=\"3\">Totals:</td>\n    <td class=\"text-right font-weight-bold text-center\"  [ngClass]=\"{'alert alert-danger': warnTotalAcres()}\">{{herdTotals.acres | number}}</td>\n    <td class=\"text-right font-weight-bold text-center\">{{herdTotals.labor | number}}</td>\n    <td class=\"text-right font-weight-bold\">{{herdTotals.kind | number}}d</td>\n  </tr>\n  <tr *ngIf=\"warnTotalAcres()\">\n    <td class=\"alert alert-danger\"  colspan=\"6\">\n      Total acres used for crops and herds cannot exceed cleared acres.  Adjust until the total is below.\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/manors/herd-list/herd-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manors/herd-list/herd-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HerdListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_manor_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/manor.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_data_service__ = __webpack_require__("../../../../../src/app/manors/shared/services/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utilities__ = __webpack_require__("../../../../../src/app/manors/shared/utilities.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HerdListComponent = (function () {
    function HerdListComponent(dataService) {
        this.dataService = dataService;
    }
    HerdListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.herds.subscribe(function (ht) { return _this.herdTotals = ht; });
        this.dataService.crops.subscribe(function (ct) { return _this.cropTotals = ct; });
        this.dataService.showGenerationInput.subscribe(function (g) { return _this.showGenerationInput = g; });
    };
    HerdListComponent.prototype.herderIndex = function (herd) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__shared_utilities__["b" /* checkResultIndex */])(herd.checkResult);
    };
    HerdListComponent.prototype.herdYield = function (herd) {
        var result = Math.floor(herd.baseYield *
            this.manor.landQuality *
            this.manor.fiefIndex *
            this.manor.weatherIndex *
            Object(__WEBPACK_IMPORTED_MODULE_3__shared_utilities__["b" /* checkResultIndex */])(herd.checkResult));
        return result;
    };
    HerdListComponent.prototype.herdHeadCount = function (herd) {
        return Math.floor(herd.acres * herd.graze);
    };
    HerdListComponent.prototype.herdLabor = function (herd) {
        return this.herdHeadCount(herd) * herd.baseLabor;
    };
    HerdListComponent.prototype.herdKind = function (herd) {
        return this.herdHeadCount(herd) * this.herdYield(herd);
    };
    HerdListComponent.prototype.updateTotals = function () {
        var total = { kind: 0, labor: 0, acres: 0 };
        for (var _i = 0, _a = this.manor.livestock; _i < _a.length; _i++) {
            var herd = _a[_i];
            total.kind += this.herdKind(herd);
            total.labor += this.herdLabor(herd);
            total.acres += herd.acres;
        }
        this.dataService.setHerdTotals(total);
    };
    HerdListComponent.prototype.warnTotalAcres = function () {
        var usedAcres = this.herdTotals.acres + this.cropTotals.acres;
        return usedAcres > this.manor.clearedAcres;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('manor'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_models_manor_model__["a" /* Manor */])
    ], HerdListComponent.prototype, "manor", void 0);
    HerdListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-herd-list',
            template: __webpack_require__("../../../../../src/app/manors/herd-list/herd-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manors/herd-list/herd-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_shared_data_service__["a" /* SharedDataService */]])
    ], HerdListComponent);
    return HerdListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manors/household-list/household-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-sm\" *ngIf=\"!showGenerationInput\">\n  <thead class=\"thead-dark\">\n  <tr>\n    <th width=\"40%\">Lord's Household Member</th>\n    <th width=\"10%\">ML</th>\n    <th width=\"10%\">Each</th>\n    <th width=\"10%\">#</th>\n    <th width=\"15%\">Total</th>\n    <th width=\"15%\">Loyalty</th>\n  </tr>\n  </thead>\n  <tbody>\n  <ng-container *ngFor=\"let member of manor.population.household\">\n    <tr>\n      <td>{{member.displayName()}}</td>\n      <td>{{member.ml}}</td>\n      <td>{{member.each}}</td>\n      <td>{{member.count}}</td>\n      <td>{{member.count * member.each | number}}d</td>\n      <td>{{member.loyalty}}</td>\n    </tr>\n  </ng-container>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/manors/household-list/household-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manors/household-list/household-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseholdListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_shared_data_service__ = __webpack_require__("../../../../../src/app/manors/shared/services/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_generators_household_generator__ = __webpack_require__("../../../../../src/app/manors/shared/generators/household.generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_manor_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/manor.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HouseholdListComponent = (function () {
    function HouseholdListComponent(dataService) {
        this.dataService = dataService;
    }
    HouseholdListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._hg = new __WEBPACK_IMPORTED_MODULE_2__shared_generators_household_generator__["a" /* HouseholdGenerator */]();
        this.dataService.householdKind.subscribe(function (k) { return (_this.householdKind = k); });
        this.dataService.showGenerationInput.subscribe(function (g) { return _this.showGenerationInput = g; });
    };
    HouseholdListComponent.prototype.updateTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.manor.population.household; _i < _a.length; _i++) {
            var member = _a[_i];
            total += member.each * member.count;
        }
        this.dataService.setHouseholdKind(total);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('manor'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__shared_models_manor_model__["a" /* Manor */])
    ], HouseholdListComponent.prototype, "manor", void 0);
    HouseholdListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-household-list',
            template: __webpack_require__("../../../../../src/app/manors/household-list/household-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manors/household-list/household-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_shared_data_service__["a" /* SharedDataService */]])
    ], HouseholdListComponent);
    return HouseholdListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manors/household-member/household-member.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col\">\n  <div class=\"input-group input-group-sm\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"member.title\">\n  </div>\n</div>\n<div class=\"col-sm-1 text-center\">\n  <div class=\"input-group input-group-sm\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"member.ml\">\n  </div>\n</div>\n<div class=\"col-sm-1 text-center\">\n  <div class=\"input-group input-group-sm\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"member.each\">\n  </div>\n</div>\n<div class=\"col-sm-1 text-center\">\n  <div class=\"input-group input-group-sm\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"member.count\">\n  </div>\n</div>\n<div class=\"col-sm-1 text-center\">\n  <div class=\"input-group input-group-sm\">\n    <input type=\"text\" class=\"form-control\" [value]=\"member.count * member.each\" disabled>\n  </div>\n</div>\n<div class=\"col-sm-1 text-center\">\n  <div class=\"input-group input-group-sm\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"member.loyalty\">\n  </div>\n</div>\n<div class=\"col-sm-1 text-center\">\n  <div class=\"input-group input-group-sm\">\n    <button type=\"button\" class=\"btn btn-secondary btn-sm\">\n      <i class=\"far fa-trash-alt\"></i>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/manors/household-member/household-member.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manors/household-member/household-member.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseholdMemberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_housemember_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/housemember.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HouseholdMemberComponent = (function () {
    function HouseholdMemberComponent() {
    }
    HouseholdMemberComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('member'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_models_housemember_model__["a" /* HouseholdMember */])
    ], HouseholdMemberComponent.prototype, "member", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('idx'),
        __metadata("design:type", Number)
    ], HouseholdMemberComponent.prototype, "idx", void 0);
    HouseholdMemberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-household-member]',
            template: __webpack_require__("../../../../../src/app/manors/household-member/household-member.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manors/household-member/household-member.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HouseholdMemberComponent);
    return HouseholdMemberComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manors/lords-budget/lords-budget.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-sm\" [formGroup]=\"lordsBudgetForm\" *ngIf=\"!showGenerationInput\">\n  <thead class=\"thead-dark\n\">\n  <tr>\n    <th class=\"font-weight-bold\">Lord's Budget</th>\n    <th class=\"font-weight-bold text-center\" width=\"10%\">CR</th>\n    <th class=\"font-weight-bold text-right\" width=\"15%\">Kind</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>\n    <td >Demesne Income</td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-right\">{{demesneIncome() | number}}d</td>\n  </tr>\n  <tr>\n    <td >Tenant Rents & Fees</td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-right\">{{this.tenants.rent + this.tenants.fees | number}}d</td>\n  </tr>\n  <tr>\n    <td >Glebe Revenue</td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-right\">{{getGlebeRevenue() | number}}d</td>\n  </tr>\n  <tr [ngClass]=\"{'alert alert-danger': lordsBudgetForm.controls['taxes'].invalid && (lordsBudgetForm.controls['taxes'].dirty || lordsBudget.Formcontrols['taxes'].touched)}\">\n    <td >Taxes & Tolls</td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-right\">\n      <div class=\"input-group input-group-sm\">\n        <input type=\"number\" class=\"form-control text-right\" formControlName=\"taxes\" [(ngModel)]=\"manor.taxIncome\">\n      </div>\n    </td>\n  </tr>\n  <tr *ngIf=\"lordsBudgetForm.controls['taxes'].invalid && (lordsBudgetForm.controls['taxes'].dirty || lordsBudgetForm.controls['taxes'].touched)\" class=\"alert alert-danger small\">\n    <td colspan=\"3\">\n      <div *ngIf=\"lordsBudgetForm.controls['taxes'].errors.required\">\n        Required\n      </div>\n      <div *ngIf=\"lordsBudgetForm.controls['taxes'].errors.min\">\n        cannot be less than 0\n      </div>\n    </td>\n  </tr>\n\n  <tr [ngClass]=\"{'alert alert-danger': lordsBudgetForm.controls['amercements'].invalid && (lordsBudgetForm.controls['amercements'].dirty || lordsBudget.Formcontrols['amercements'].touched)}\">\n    <td >Amercements</td>\n    <td class=\"text-center\">{{manor.amercements.beadleCheck}}</td>\n    <td class=\"text-right\">\n      <div class=\"input-group input-group-sm\">\n        <input type=\"number\" class=\"form-control text-right\" formControlName=\"amercements\"\n               [(ngModel)]=\"manor.amercements.amount\">\n      </div>\n    </td>\n  </tr>\n  <tr *ngIf=\"lordsBudgetForm.controls['amercements'].invalid && (lordsBudgetForm.controls['amercements'].dirty || lordsBudgetForm.controls['amercements'].touched)\" class=\"alert alert-danger small\">\n    <td colspan=\"3\">\n      <div *ngIf=\"lordsBudgetForm.controls['amercements'].errors.required\">\n        Required\n      </div>\n      <div *ngIf=\"lordsBudgetForm.controls['amercements'].errors.min\">\n        cannot be less than 0\n      </div>\n    </td>\n  </tr>\n\n  <tr [ngClass]=\"{'alert alert-danger': lordsBudgetForm.controls['feudalIncome'].invalid && (lordsBudgetForm.controls['feudalIncome'].dirty || lordsBudget.Formcontrols['feudalIncome'].touched)}\">\n    <td >Feudal Income</td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-right\">\n      <div class=\"input-group input-group-sm\">\n        <input type=\"number\" class=\"form-control text-right\" formControlName=\"feudalIncome\"\n               [(ngModel)]=\"manor.feudalIncome\">\n      </div>\n    </td>\n  </tr>\n  <tr *ngIf=\"lordsBudgetForm.controls['feudalIncome'].invalid && (lordsBudgetForm.controls['feudalIncome'].dirty || lordsBudgetForm.controls['feudalIncome'].touched)\" class=\"alert alert-danger small\">\n    <td colspan=\"3\">\n      <div *ngIf=\"lordsBudgetForm.controls['feudalIncome'].errors.required\">\n        Required\n      </div>\n      <div *ngIf=\"lordsBudgetForm.controls['feudalIncome'].errors.min\">\n        cannot be less than 0\n      </div>\n    </td>\n  </tr>\n\n  <tr class=\"table-summary\">\n    <td class=\"font-weight-bold\">Total Income</td>\n    <td class=\"font-weight-bold text-center\"></td>\n    <td class=\"font-weight-bold text-right\">{{totalIncome() | number}}d</td>\n  </tr>\n  <tr>\n    <td >Household</td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-right\">{{householdKind | number}}d</td>\n  </tr>\n\n  <tr [ngClass]=\"{'alert alert-danger': lordsBudgetForm.controls['feudalPayments'].invalid && (lordsBudgetForm.controls['feudalPayments'].dirty || lordsBudget.Formcontrols['feudalPayments'].touched)}\">\n    <td>Feudal Payments</td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-right\">\n      <div class=\"input-group input-group-sm\">\n        <input type=\"number\" class=\"form-control text-right\" formControlName=\"feudalPayments\"\n               [(ngModel)]=\"manor.feudalPayments\">\n      </div>\n    </td>\n  </tr>\n  <tr *ngIf=\"lordsBudgetForm.controls['feudalPayments'].invalid && (lordsBudgetForm.controls['feudalPayments'].dirty || lordsBudgetForm.controls['feudalPayments'].touched)\" class=\"alert alert-danger small\">\n    <td colspan=\"3\">\n      <div *ngIf=\"lordsBudgetForm.controls['feudalPayments'].errors.required\">\n        Required\n      </div>\n      <div *ngIf=\"lordsBudgetForm.controls['feudalPayments'].errors.min\">\n        cannot be less than 0\n      </div>\n    </td>\n  </tr>\n\n  <tr [ngClass]=\"{'alert alert-danger': lordsBudgetForm.controls['tithe'].invalid && (lordsBudgetForm.controls['tithe'].dirty || lordsBudget.Formcontrols['tithe'].touched)}\">\n    <td >Tithe</td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-right\">\n      <div class=\"input-group input-group-sm\">\n        <input type=\"number\" class=\"form-control text-right\" formControlName=\"tithe\" [(ngModel)]=\"manor.tithe\">\n      </div>\n    </td>\n  </tr>\n  <tr *ngIf=\"lordsBudgetForm.controls['tithe'].invalid && (lordsBudgetForm.controls['tithe'].dirty || lordsBudgetForm.controls['tithe'].touched)\" class=\"alert alert-danger small\">\n    <td colspan=\"3\">\n      <div *ngIf=\"lordsBudgetForm.controls['tithe'].errors.required\">\n        Required\n      </div>\n      <div *ngIf=\"lordsBudgetForm.controls['tithe'].errors.min\">\n        cannot be less than 0\n      </div>\n    </td>\n  </tr>\n\n  <tr [ngClass]=\"{'alert alert-danger': lordsBudgetForm.controls['laborHired'].invalid && (lordsBudgetForm.controls['laborHired'].dirty || lordsBudget.Formcontrols['laborHired'].touched)}\">\n    <td >Labor Hired</td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-right\">\n      <div class=\"input-group input-group-sm\">\n        <input type=\"number\" class=\"form-control text-right\" formControlName=\"laborHired\"\n               [(ngModel)]=\"manor.laborHired\">\n      </div>\n    </td>\n  </tr>\n  <tr *ngIf=\"lordsBudgetForm.controls['laborHired'].invalid && (lordsBudgetForm.controls['laborHired'].dirty || lordsBudgetForm.controls['laborHired'].touched)\" class=\"alert alert-danger small\">\n    <td colspan=\"3\">\n      <div *ngIf=\"lordsBudgetForm.controls['laborHired'].errors.required\">\n        Required\n      </div>\n      <div *ngIf=\"lordsBudgetForm.controls['laborHired'].errors.min\">\n        cannot be less than 0\n      </div>\n    </td>\n  </tr>\n\n  <tr [ngClass]=\"{'alert alert-danger': lordsBudgetForm.controls['politicalExpenses'].invalid && (lordsBudgetForm.controls['politicalExpenses'].dirty || lordsBudget.Formcontrols['politicalExpenses'].touched)}\">\n    <td >Political Expenses</td>\n    <td class=\"text-center\"></td>\n    <td class=\"text-right\">\n      <div class=\"input-group input-group-sm\">\n        <input type=\"number\" class=\"form-control text-right\" formControlName=\"politicalExpenses\"\n               [(ngModel)]=\"manor.politicalExpenses\">\n      </div>\n    </td>\n  </tr>\n  <tr *ngIf=\"lordsBudgetForm.controls['politicalExpenses'].invalid && (lordsBudgetForm.controls['politicalExpenses'].dirty || lordsBudgetForm.controls['politicalExpenses'].touched)\" class=\"alert alert-danger small\">\n    <td colspan=\"3\">\n      <div *ngIf=\"lordsBudgetForm.controls['politicalExpenses'].errors.required\">\n        Required\n      </div>\n      <div *ngIf=\"lordsBudgetForm.controls['politicalExpenses'].errors.min\">\n        cannot be less than 0\n      </div>\n    </td>\n  </tr>\n\n  <tr class=\"table-summary\">\n    <td class=\"font-weight-bold\">Total Expenses</td>\n    <td class=\"font-weight-bold text-center\"></td>\n    <td class=\"font-weight-bold text-right\">{{totalExpenses() | number}}d</td>\n  </tr>\n  <tr class=\"table-success\">\n    <td class=\"font-weight-bold\">To Privy Purse</td>\n    <td class=\"font-weight-bold text-center\"></td>\n    <td class=\"font-weight-bold text-right\">{{privyPurse() | number}}d</td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/manors/lords-budget/lords-budget.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manors/lords-budget/lords-budget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LordsBudgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_manor_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/manor.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_shared_data_service__ = __webpack_require__("../../../../../src/app/manors/shared/services/shared-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LordsBudgetComponent = (function () {
    function LordsBudgetComponent(dataService, fb) {
        this.dataService = dataService;
        this.fb = fb;
    }
    LordsBudgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.dataService.fiefIncome.subscribe(function (income) { return (_this.fiefIncome = income); });
        this.dataService.tenants.subscribe(function (t) { return (_this.tenants = t); });
        this.dataService.householdKind.subscribe(function (k) { return (_this.householdKind = k); });
        this.dataService.showGenerationInput.subscribe(function (g) { return _this.showGenerationInput = g; });
    };
    LordsBudgetComponent.prototype.createForm = function () {
        this.lordsBudgetForm = this.fb.group({
            taxes: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)]],
            amercements: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)]],
            feudalIncome: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)]],
            feudalPayments: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)]],
            tithe: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)]],
            laborHired: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)]],
            politicalExpenses: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)]]
        });
    };
    LordsBudgetComponent.prototype.demesneIncome = function () {
        return Math.floor(this.fiefIncome * this.manor.demenseAcres() / this.manor.clearedAcres);
    };
    LordsBudgetComponent.prototype.getGlebeRevenue = function () {
        return Math.floor(this.manor.population.glebeRevenue() * 0.5);
    };
    LordsBudgetComponent.prototype.totalIncome = function () {
        var income = this.demesneIncome();
        income += this.tenants.rent + this.tenants.fees;
        income += this.getGlebeRevenue();
        income += this.manor.taxIncome;
        income += this.manor.amercements.amount;
        income += this.manor.feudalIncome;
        income = Math.floor(income);
        this.manor.totalIncome = income;
        return income;
    };
    LordsBudgetComponent.prototype.totalExpenses = function () {
        var expenses = this.householdKind;
        expenses += this.manor.feudalPayments;
        expenses += this.manor.tithe;
        expenses += this.manor.laborHired;
        expenses += this.manor.politicalExpenses;
        return expenses;
    };
    LordsBudgetComponent.prototype.privyPurse = function () {
        return this.totalIncome() - this.totalExpenses();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('manor'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_models_manor_model__["a" /* Manor */])
    ], LordsBudgetComponent.prototype, "manor", void 0);
    LordsBudgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lords-budget',
            template: __webpack_require__("../../../../../src/app/manors/lords-budget/lords-budget.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manors/lords-budget/lords-budget.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_shared_data_service__["a" /* SharedDataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], LordsBudgetComponent);
    return LordsBudgetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manors/manor/manor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row title-box bg-dark text-white page px-3 py-2 mx-1\">\n  <div class=\"col\">\n    <strong>Manor Budget</strong>\n  </div>\n  <div class=\"col text-right h4\">{{manor?.name}}<span *ngIf=\"manor && manor.realm\">, {{manor.realm}}</span></div>\n</div>\n<div class=\"container-fluid mb-2\">\n\n  <div class=\"row mx-2 form-inline\" [formGroup]=\"manorForm\">\n    <div class=\"input-group input-group-sm col-md-4\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\">Name:</span>\n      </div>\n      <input type=\"text\" class=\"form-control\" formControlName=\"name\" [(ngModel)]=\"manor.name\" placeholder=\"Name of Manor\">\n    </div>\n    <div class=\"input-group input-group-sm col-md-4\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\">Realm:</span>\n      </div>\n      <input type=\"text\" class=\"form-control\" formControlName=\"realm\" [(ngModel)]=\"manor.realm\" placeholder=\"Name of Kingdom\">\n    </div>\n    <div class=\"col-md-4 text-right\">\n    <button class=\"btn btn-sm btn-primary\" (click)=\"onGenerateClick()\" *ngIf=\"showGenerationInput\">\n      <i class=\"fas fa-users\"></i>\n      Generate\n    </button>\n    <button class=\"btn btn-sm btn-danger\" (click)=\"onResetClick()\" *ngIf=\"!showGenerationInput\">\n      <i class=\"far fa-trash-alt\"></i>\n      Reset\n    </button>\n    </div>\n  </div>\n\n  <hr class=\"small\">\n\n  <div class=\"row sm-gutters\">\n    <div class=\"col-md-4\">\n      <app-general-data [manor]=\"manor\"></app-general-data>\n    </div>\n    <div class=\"col\">\n      <app-household-list [manor]=\"manor\"></app-household-list>\n      <app-policies [policies]=\"manor.policies\"></app-policies>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <app-fief-budget [manor]=\"manor\"></app-fief-budget>\n    </div>\n    <div class=\"col\">\n      <app-crop-list [manor]=\"manor\"></app-crop-list>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <app-lords-budget [manor]=\"manor\"></app-lords-budget>\n    </div>\n    <div class=\"col\">\n      <app-herd-list [manor]=\"manor\"></app-herd-list>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <p class=\"lead\">\n        <strong>Notes:</strong> {{manor.notes.join('. ')}}\n      </p>\n    </div>\n  </div>\n</div>\n\n<app-tenant-list [manor]=\"manor\"></app-tenant-list>\n"

/***/ }),

/***/ "../../../../../src/app/manors/manor/manor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manors/manor/manor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_generators_number_generator__ = __webpack_require__("../../../../../src/app/shared/generators/number-generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crop_list_crop_list_component__ = __webpack_require__("../../../../../src/app/manors/crop-list/crop-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__herd_list_herd_list_component__ = __webpack_require__("../../../../../src/app/manors/herd-list/herd-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__household_list_household_list_component__ = __webpack_require__("../../../../../src/app/manors/household-list/household-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lords_budget_lords_budget_component__ = __webpack_require__("../../../../../src/app/manors/lords-budget/lords-budget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_generators_craftsman_generator__ = __webpack_require__("../../../../../src/app/manors/shared/generators/craftsman-generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_generators_crop_generator__ = __webpack_require__("../../../../../src/app/manors/shared/generators/crop.generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_generators_fief_generator__ = __webpack_require__("../../../../../src/app/manors/shared/generators/fief.generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_generators_herd_generator__ = __webpack_require__("../../../../../src/app/manors/shared/generators/herd.generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_generators_household_generator__ = __webpack_require__("../../../../../src/app/manors/shared/generators/household.generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_generators_lordsexpense_generator__ = __webpack_require__("../../../../../src/app/manors/shared/generators/lordsexpense.generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_generators_lordsincome_generator__ = __webpack_require__("../../../../../src/app/manors/shared/generators/lordsincome.generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_generators_tenant_generator__ = __webpack_require__("../../../../../src/app/manors/shared/generators/tenant-generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_generators_tenant_officer_generator__ = __webpack_require__("../../../../../src/app/manors/shared/generators/tenant-officer.generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_generators_yeoman_generator__ = __webpack_require__("../../../../../src/app/manors/shared/generators/yeoman-generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_models_manor_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/manor.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_services_manor_service__ = __webpack_require__("../../../../../src/app/manors/shared/services/manor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_services_shared_data_service__ = __webpack_require__("../../../../../src/app/manors/shared/services/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__tenant_list_tenant_list_component__ = __webpack_require__("../../../../../src/app/manors/tenant-list/tenant-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var ManorComponent = (function () {
    function ManorComponent(dataService, manorService, fb) {
        this.dataService = dataService;
        this.manorService = manorService;
        this.fb = fb;
    }
    ManorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dice = new __WEBPACK_IMPORTED_MODULE_2__shared_generators_number_generator__["b" /* NumberGenerator */]();
        this.manor = __WEBPACK_IMPORTED_MODULE_17__shared_models_manor_model__["b" /* ManorFactory */].getManor();
        this.dataService.showGenerationInput.subscribe(function (g) { return _this.showGenerationInput = g; });
        this.createForm();
        this.tenantGenerator = new __WEBPACK_IMPORTED_MODULE_14__shared_generators_tenant_generator__["a" /* TenantGenerator */]();
        this.craftsmanGenerator = new __WEBPACK_IMPORTED_MODULE_7__shared_generators_craftsman_generator__["a" /* CraftsmanGenerator */]();
        this.yeomanGenerator = new __WEBPACK_IMPORTED_MODULE_16__shared_generators_yeoman_generator__["a" /* YeomanGenerator */]();
        this.officerGenerator = new __WEBPACK_IMPORTED_MODULE_15__shared_generators_tenant_officer_generator__["a" /* TenantOfficerGenerator */]();
        this.householdGenerator = new __WEBPACK_IMPORTED_MODULE_11__shared_generators_household_generator__["a" /* HouseholdGenerator */]();
        this.cropGenerator = new __WEBPACK_IMPORTED_MODULE_8__shared_generators_crop_generator__["a" /* CropGenerator */]();
        this.herdGenerator = new __WEBPACK_IMPORTED_MODULE_10__shared_generators_herd_generator__["a" /* HerdGenerator */]();
        this.fiefGenerator = new __WEBPACK_IMPORTED_MODULE_9__shared_generators_fief_generator__["a" /* FiefGenerator */]();
        this.lordsIncomeGenerator = new __WEBPACK_IMPORTED_MODULE_13__shared_generators_lordsincome_generator__["a" /* LordsIncomeGenerator */]();
        this.lordsExpenseGenerator = new __WEBPACK_IMPORTED_MODULE_12__shared_generators_lordsexpense_generator__["a" /* LordsExpenseGenerator */]();
        this._reset();
    };
    ManorComponent.prototype._reset = function () {
        this.manor.reset();
        this.dataService.reset();
        this.setShowGenerationInput(true);
    };
    ManorComponent.prototype.onResetClick = function () {
        this._reset();
    };
    ManorComponent.prototype.onGenerateClick = function () {
        this.toggleShowGenerationInput();
        this.tenantGenerator.generateTenants(this.manor);
        this.craftsmanGenerator.assignCraftsmen(this.manor);
        this.yeomanGenerator.recruitYeoman(this.manor);
        this.officerGenerator.electOfficers(this.manor);
        this.householdGenerator.generateHousehold(this.manor);
        this.cropGenerator.generateCrops(this.manor);
        this.herdGenerator.generateHerds(this.manor);
        this.fiefGenerator.generateFief(this.manor);
        this.tenantListComponent.updateTotals();
        this.householdListComponent.updateTotal();
        this.cropListComponent.updateTotals();
        this.herdListComponent.updateTotals();
        this.lordsIncomeGenerator.generateIncome(this.manor);
        this.lordsBudgetComponent.totalIncome(); // Allows totals to be calculated and continues below.
        this.lordsExpenseGenerator.generateExpenses(this.manor);
    };
    ManorComponent.prototype.createForm = function () {
        this.manorForm = this.fb.group({
            name: [''],
            realm: [''],
        });
    };
    ManorComponent.prototype.toggleShowGenerationInput = function () {
        this.setShowGenerationInput(!this.showGenerationInput);
    };
    ManorComponent.prototype.setShowGenerationInput = function (b) {
        this.showGenerationInput = b;
        this.dataService.setShowGenerationInput(b);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__crop_list_crop_list_component__["a" /* CropListComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__crop_list_crop_list_component__["a" /* CropListComponent */])
    ], ManorComponent.prototype, "cropListComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__herd_list_herd_list_component__["a" /* HerdListComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__herd_list_herd_list_component__["a" /* HerdListComponent */])
    ], ManorComponent.prototype, "herdListComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_20__tenant_list_tenant_list_component__["a" /* TenantListComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_20__tenant_list_tenant_list_component__["a" /* TenantListComponent */])
    ], ManorComponent.prototype, "tenantListComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__household_list_household_list_component__["a" /* HouseholdListComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__household_list_household_list_component__["a" /* HouseholdListComponent */])
    ], ManorComponent.prototype, "householdListComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__lords_budget_lords_budget_component__["a" /* LordsBudgetComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__lords_budget_lords_budget_component__["a" /* LordsBudgetComponent */])
    ], ManorComponent.prototype, "lordsBudgetComponent", void 0);
    ManorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manor',
            template: __webpack_require__("../../../../../src/app/manors/manor/manor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manors/manor/manor.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_19__shared_services_shared_data_service__["a" /* SharedDataService */],
            __WEBPACK_IMPORTED_MODULE_18__shared_services_manor_service__["a" /* ManorService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ManorComponent);
    return ManorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manors/manors-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManorsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manor_manor_component__ = __webpack_require__("../../../../../src/app/manors/manor/manor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{ path: 'manors', component: __WEBPACK_IMPORTED_MODULE_2__manor_manor_component__["a" /* ManorComponent */] }];
var ManorsRoutingModule = (function () {
    function ManorsRoutingModule() {
    }
    ManorsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], ManorsRoutingModule);
    return ManorsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/manors/manors.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManorsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crop_list_crop_list_component__ = __webpack_require__("../../../../../src/app/manors/crop-list/crop-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fief_budget_fief_budget_component__ = __webpack_require__("../../../../../src/app/manors/fief-budget/fief-budget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__general_data_general_data_component__ = __webpack_require__("../../../../../src/app/manors/general-data/general-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__herd_list_herd_list_component__ = __webpack_require__("../../../../../src/app/manors/herd-list/herd-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__household_list_household_list_component__ = __webpack_require__("../../../../../src/app/manors/household-list/household-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__household_member_household_member_component__ = __webpack_require__("../../../../../src/app/manors/household-member/household-member.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lords_budget_lords_budget_component__ = __webpack_require__("../../../../../src/app/manors/lords-budget/lords-budget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__manor_manor_component__ = __webpack_require__("../../../../../src/app/manors/manor/manor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__manors_routing_module__ = __webpack_require__("../../../../../src/app/manors/manors-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__policies_policies_component__ = __webpack_require__("../../../../../src/app/manors/policies/policies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_manor_service__ = __webpack_require__("../../../../../src/app/manors/shared/services/manor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_services_shared_data_service__ = __webpack_require__("../../../../../src/app/manors/shared/services/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tenant_list_tenant_list_component__ = __webpack_require__("../../../../../src/app/manors/tenant-list/tenant-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tenant_tenant_component__ = __webpack_require__("../../../../../src/app/manors/tenant/tenant.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var ManorsModule = (function () {
    function ManorsModule() {
    }
    ManorsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_11__manors_routing_module__["a" /* ManorsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__shared_services_shared_data_service__["a" /* SharedDataService */], __WEBPACK_IMPORTED_MODULE_13__shared_services_manor_service__["a" /* ManorService */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__manor_manor_component__["a" /* ManorComponent */],
                __WEBPACK_IMPORTED_MODULE_15__tenant_list_tenant_list_component__["a" /* TenantListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__tenant_tenant_component__["a" /* TenantComponent */],
                __WEBPACK_IMPORTED_MODULE_7__household_list_household_list_component__["a" /* HouseholdListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__household_member_household_member_component__["a" /* HouseholdMemberComponent */],
                __WEBPACK_IMPORTED_MODULE_3__crop_list_crop_list_component__["a" /* CropListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__general_data_general_data_component__["a" /* GeneralDataComponent */],
                __WEBPACK_IMPORTED_MODULE_12__policies_policies_component__["a" /* PoliciesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__herd_list_herd_list_component__["a" /* HerdListComponent */],
                __WEBPACK_IMPORTED_MODULE_4__fief_budget_fief_budget_component__["a" /* FiefBudgetComponent */],
                __WEBPACK_IMPORTED_MODULE_9__lords_budget_lords_budget_component__["a" /* LordsBudgetComponent */]
            ]
        })
    ], ManorsModule);
    return ManorsModule;
}());



/***/ }),

/***/ "../../../../../src/app/manors/policies/policies.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" [formGroup]=\"policiesForm\" *ngIf=\"showGenerationInput\">\n  <div class=\"col\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Tenant Policies\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6 col-xsm-6 small\">Base Rent</div>\n          <div class=\"col-sm-6 small\">\n            <div class=\"input-group input-group-sm\">\n              <input type=\"number\" class=\"form-control\" aria-label=\"Small\" aria-describedby=\"inputGroup-sizing-sm\"\n                     formControlName=\"baseRent\"\n                     [(ngModel)]=\"policies.baseRent\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6 col-xsm-6 small\">Freeholder Rent</div>\n          <div class=\"col-sm-6 small\">\n            <div class=\"input-group input-group-sm\">\n              <input type=\"number\" class=\"form-control\" aria-label=\"Small\" aria-describedby=\"inputGroup-sizing-sm\"\n                     formControlName=\"freeholderRent\"\n                     [(ngModel)]=\"policies.freeholderRent\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6 col-xsm-6 small\">Serf Labor</div>\n          <div class=\"col-sm-6 small\">\n            <div class=\"input-group input-group-sm\">\n              <input type=\"number\" class=\"form-control\" aria-label=\"Small\" aria-describedby=\"inputGroup-sizing-sm\"\n                     formControlName=\"serfLabor\"\n                     [(ngModel)]=\"policies.serfLabor\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Feudal Policies\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6 col-xsm-6 small\">\n            <div class=\"form-check form-check-inline\">\n              <input type=\"checkbox\" class=\"form-check-input form-check-input-condensed\"\n                     formConrol=\"policies.isSlaveState\"\n                     (change)=\"policies.isSlaveState = !policies.isSlaveState\">\n              <label class=\"form-check-label\">Slave State?</label>\n            </div>\n\n          </div>\n          <div class=\"col-md-6 col-sm-6 col-xsm-6 small\">\n            <div class=\"form-check form-check-inline\">\n              <input type=\"checkbox\" class=\"form-check-input form-check-input-condensed\"\n                     formConrol=\"policies.isBaliffRun\"\n                     (change)=\"policies.isBailiffRun = !policies.isBailiffRun\">\n              <label class=\"form-check-label\">Bailiff Run?</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6 col-xsm-6 small\">Acres/Heavy Horse</div>\n          <div class=\"col-sm-6 small\">\n            <div class=\"input-group input-group-sm\">\n              <input type=\"number\" class=\"form-control\" aria-label=\"Small\" aria-describedby=\"inputGroup-sizing-sm\"\n                     formControlName=\"foAcresPerHH\"\n                     [(ngModel)]=\"policies.foAcresPerHH\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6 col-xsm-6 small\">Acres/Light Foot</div>\n          <div class=\"col-sm-6 small\">\n            <div class=\"input-group input-group-sm\">\n              <input type=\"number\" class=\"form-control\" aria-label=\"Small\" aria-describedby=\"inputGroup-sizing-sm\"\n                     formControlName=\"foAcresPerLF\"\n                     [(ngModel)]=\"policies.foAcresPerLF\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/manors/policies/policies.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manors/policies/policies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoliciesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_manor_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/manor.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_shared_data_service__ = __webpack_require__("../../../../../src/app/manors/shared/services/shared-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PoliciesComponent = (function () {
    function PoliciesComponent(fb, dataService) {
        this.fb = fb;
        this.dataService = dataService;
    }
    PoliciesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.initForm();
        this.dataService.showGenerationInput.subscribe(function (g) { return _this.showGenerationInput = g; });
    };
    PoliciesComponent.prototype.createForm = function () {
        this.policiesForm = this.fb.group({
            baseRent: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(30), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].max(120)]],
            freeholderRent: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].max(12)]],
            serfLabor: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].max(8)]],
            foAcresPerHH: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)]],
            foAcresPerLF: [0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            isSlaveState: '',
            isBailiffRun: '',
        });
    };
    PoliciesComponent.prototype.initForm = function () {
        this.policiesForm.patchValue(this.policies);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('policies'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_models_manor_model__["c" /* Policies */])
    ], PoliciesComponent.prototype, "policies", void 0);
    PoliciesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-policies',
            template: __webpack_require__("../../../../../src/app/manors/policies/policies.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manors/policies/policies.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_shared_data_service__["a" /* SharedDataService */]])
    ], PoliciesComponent);
    return PoliciesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manors/shared/generators/craftsman-generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultCraftsmanTable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CraftsmanGenerator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_random_weighted_choice__ = __webpack_require__("../../../../random-weighted-choice/lib/random-weighted-choice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_random_weighted_choice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_random_weighted_choice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_manor_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/manor.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/tenant.model.ts");



var defaultCraftsmanTable = [
    { weight: 25, id: __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].Miller },
    { weight: 20, id: __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].Metalsmith },
    { weight: 15, id: __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].Woodcrafter },
    { weight: 10, id: __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].Salter },
    { weight: 5, id: __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].Hideworker },
    { weight: 5, id: __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].Timberwright },
    { weight: 5, id: __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].Charcoaler },
    { weight: 5, id: __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].Shipwright },
    { weight: 5, id: __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].Innkeeper },
    { weight: 2, id: __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].Ostler },
    { weight: 2, id: __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].Potter },
    { weight: 2, id: __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].Apothecary },
    { weight: 2, id: __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].Glassworker },
    { weight: 1, id: __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].Weaponsmith },
    { weight: 1, id: __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].Armourer }
];
var CraftsmanGenerator = (function () {
    function CraftsmanGenerator() {
    }
    CraftsmanGenerator.prototype.assignCraftsmen = function (manor) {
        var craft;
        for (var _i = 0, _a = manor.population.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            if (tenant.occupation === __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["c" /* TenantType */].CRAFTSMAN && tenant.craft === null) {
                tenant.craft = this.getCraft(manor);
                this._adjustFees(tenant);
            }
        }
        this._noteMissing(manor);
    };
    /**
     * Gets a random craft based on remaining values in the crafting table
     * or returns default GMDetermine craft if all are taken.
     * @param {Manor} manor
     * @returns {Craftsman}
     */
    CraftsmanGenerator.prototype.getCraft = function (manor) {
        var craftsmanTable = this.getCrafterTable(manor);
        if (craftsmanTable.length > 1) {
            return __WEBPACK_IMPORTED_MODULE_0_random_weighted_choice__(craftsmanTable);
        }
        return this.firstOpenCraft(manor);
    };
    CraftsmanGenerator.prototype._exists = function (manor, craft) {
        for (var _i = 0, _a = manor.population.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            if (tenant.craft === craft) {
                return true;
            }
        }
        return false;
    };
    CraftsmanGenerator.prototype.firstOpenCraft = function (manor) {
        var crafters = this.getCrafters(manor);
        if (crafters.length > 0) {
            return crafters[0];
        }
        return __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].GMDetermine;
    };
    CraftsmanGenerator.prototype._adjustFees = function (t) {
        t.fees = t.fees + __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["d" /* craftsmanFees */][t.craft];
        if (t.craft === __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].GMDetermine) {
            t.notes.push('Determine craft and reassess fees');
        }
        else {
            t.notes.push('Includes ' + __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["d" /* craftsmanFees */][t.craft] + ' guild fees');
        }
    };
    CraftsmanGenerator.prototype._noteMissing = function (manor) {
        if (!this._exists(manor, __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].Miller)) {
            manor.notes.push('No Miller!');
        }
        if (!this._exists(manor, __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].Metalsmith)) {
            manor.notes.push('No Metalsmith!');
        }
        if (!this._exists(manor, __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].Woodcrafter)) {
            manor.notes.push('No Woodcrafter!');
        }
    };
    CraftsmanGenerator.prototype.getCrafterTable = function (manor) {
        var weightedTable = [];
        for (var _i = 0, defaultCraftsmanTable_1 = defaultCraftsmanTable; _i < defaultCraftsmanTable_1.length; _i++) {
            var item = defaultCraftsmanTable_1[_i];
            if (manor.topology !== __WEBPACK_IMPORTED_MODULE_1__models_manor_model__["d" /* Topology */].Coastal && item.id === __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].Shipwright) {
                continue; // Don't add shipwright if not a coastal town.
            }
            if (this._exists(manor, item.id)) {
                continue;
            }
            if (item.id === __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["a" /* Craftsman */].Timberwright) {
                item.weight = Math.floor(manor.woodlandAcres / manor.grossAcres * 50);
            }
            weightedTable.push(item);
        }
        return weightedTable;
    };
    CraftsmanGenerator.prototype.getCrafters = function (manor) {
        var crafters = [];
        for (var _i = 0, _a = this.getCrafterTable(manor); _i < _a.length; _i++) {
            var item = _a[_i];
            crafters.push(item.id);
        }
        return crafters;
    };
    return CraftsmanGenerator;
}());



/***/ }),

/***/ "../../../../../src/app/manors/shared/generators/crop.generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropGenerator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_random_weighted_choice__ = __webpack_require__("../../../../random-weighted-choice/lib/random-weighted-choice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_random_weighted_choice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_random_weighted_choice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_generators_number_generator__ = __webpack_require__("../../../../../src/app/shared/generators/number-generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_crop_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/crop.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_manor_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/manor.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_utilities__ = __webpack_require__("../../../../../src/app/manors/shared/utilities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_tenant_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/tenant.model.ts");






var plantingTable = [
    { weight: 10, id: __WEBPACK_IMPORTED_MODULE_2__models_crop_model__["b" /* CropType */].Rye },
    { weight: 15, id: __WEBPACK_IMPORTED_MODULE_2__models_crop_model__["b" /* CropType */].Barley },
    { weight: 15, id: __WEBPACK_IMPORTED_MODULE_2__models_crop_model__["b" /* CropType */].Oats },
    { weight: 25, id: __WEBPACK_IMPORTED_MODULE_2__models_crop_model__["b" /* CropType */].Hay },
    { weight: 10, id: __WEBPACK_IMPORTED_MODULE_2__models_crop_model__["b" /* CropType */].Vegetables },
    { weight: 5, id: __WEBPACK_IMPORTED_MODULE_2__models_crop_model__["b" /* CropType */].Flax },
    { weight: 5, id: __WEBPACK_IMPORTED_MODULE_2__models_crop_model__["b" /* CropType */].Wheat },
    { weight: 15, id: __WEBPACK_IMPORTED_MODULE_2__models_crop_model__["b" /* CropType */].Fruit }
];
var CropGenerator = (function () {
    function CropGenerator() {
        this.dice = new __WEBPACK_IMPORTED_MODULE_1__shared_generators_number_generator__["b" /* NumberGenerator */]();
        this.cf = new __WEBPACK_IMPORTED_MODULE_2__models_crop_model__["a" /* CropFactory */]();
    }
    /**
     * Initilizes a manor with all crops in the enum at zero.
     * @param {Manor} manor
     */
    CropGenerator.prototype.initCrops = function (manor) {
        for (var _i = 0, CropTypes_1 = __WEBPACK_IMPORTED_MODULE_2__models_crop_model__["c" /* CropTypes */]; _i < CropTypes_1.length; _i++) {
            var cropType = CropTypes_1[_i];
            this.addParcel(manor, cropType, 0);
        }
    };
    /**
     * Checks if a particular cropType exists in the crops array.
     * @param {Manor} manor
     * @param {CropType} cropType
     * @returns {boolean}
     */
    CropGenerator.prototype.cropExists = function (manor, cropType) {
        for (var _i = 0, _a = manor.crops; _i < _a.length; _i++) {
            var crop = _a[_i];
            if (crop.cropType === cropType) {
                return true;
            }
        }
        return false;
    };
    CropGenerator.prototype.generateCrops = function (manor) {
        this.initCrops(manor);
        var acresPlanted = 0;
        for (var _i = 0, _a = manor.crops; _i < _a.length; _i++) {
            var crop = _a[_i];
            acresPlanted += crop.acres;
        }
        var targetAcres = this.targetAcres(manor);
        var planting = acresPlanted < targetAcres;
        while (planting) {
            var cropType = __WEBPACK_IMPORTED_MODULE_0_random_weighted_choice__(plantingTable);
            var plantedParcel = this.dice.rollTotal(6, 3);
            if (targetAcres - acresPlanted < plantedParcel) {
                plantedParcel = targetAcres - acresPlanted;
                planting = false;
            }
            acresPlanted += plantedParcel; // Add it to the planted fields total
            this.addParcel(manor, cropType, plantedParcel);
        }
        this.reeveCheck(manor);
    };
    /**
     * Returns a small variation on the topology effect on the percent of crops planted.
     * @param {Manor} manor
     * @returns {number}
     */
    CropGenerator.prototype.targetAcres = function (manor) {
        var percentCrops = (__WEBPACK_IMPORTED_MODULE_3__models_manor_model__["e" /* TopologyEffects */][manor.topology].crops - 5 + this.dice.rollDie(10)) / 100;
        return Math.floor(manor.clearedAcres * percentCrops);
    };
    /**
     * Generates a check result by the reeve for a given crop.
     * @param manor
     */
    CropGenerator.prototype.reeveCheck = function (manor) {
        var ml = 0;
        for (var _i = 0, _a = manor.population.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            if (tenant.office === __WEBPACK_IMPORTED_MODULE_5__models_tenant_model__["b" /* Officer */].Reeve) {
                ml = tenant.ml;
            }
        }
        for (var _b = 0, _c = manor.crops; _b < _c.length; _b++) {
            var crop = _c[_b];
            crop.checkResult = Object(__WEBPACK_IMPORTED_MODULE_4__shared_utilities__["c" /* checkSkill */])(ml + crop.hardiness);
        }
    };
    /**
     * Adds acres of cropType to manor, creating cropType if it does not exist.
     * @param manor
     * @param cropType
     * @param acres
     */
    CropGenerator.prototype.addParcel = function (manor, cropType, acres) {
        if (!this.cropExists(manor, cropType)) {
            var crop = this.cf.newCrop(cropType);
            crop.acres = acres;
            manor.crops.push(crop);
            return;
        }
        for (var _i = 0, _a = manor.crops; _i < _a.length; _i++) {
            var crop = _a[_i];
            if (crop.cropType === cropType) {
                crop.acres += acres;
            }
        }
    };
    return CropGenerator;
}());



/***/ }),

/***/ "../../../../../src/app/manors/shared/generators/fief.generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiefGenerator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__ = __webpack_require__("../../../../../src/app/shared/generators/number-generator.ts");

var FiefGenerator = (function () {
    function FiefGenerator() {
        this.dice = new __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["b" /* NumberGenerator */]();
    }
    FiefGenerator.prototype.generateFief = function (manor) {
        this.woodAcresWorked(manor);
        this.cropSeedStored(manor);
        this.winterFeedStored(manor);
        this.fiefMaintenance(manor);
        this.assart(manor);
    };
    FiefGenerator.prototype.woodAcresWorked = function (manor) {
        if (manor.woods.acresWorked !== 0) {
            return;
        }
        manor.woods.acresWorked = manor.woodlandAcres;
    };
    FiefGenerator.prototype.cropSeedStored = function (manor) {
        if (manor.cropSeed.acresPlanned !== 0) {
            return;
        }
        manor.crops.forEach(function (c) { return (manor.cropSeed.acresPlanned += c.acres); });
    };
    FiefGenerator.prototype.winterFeedStored = function (manor) {
        if (manor.winterFeed.acresPlanned !== 0) {
            return;
        }
        var springHerdAcres = 0;
        manor.livestock.forEach(function (h) { return (springHerdAcres += h.acres); });
        manor.winterFeed.acresPlanned = Math.floor(springHerdAcres / 2);
    };
    FiefGenerator.prototype.fiefMaintenance = function (manor) {
        if (manor.fiefMaintenance !== 0) {
            return;
        }
        manor.fiefMaintenance = manor.clearedAcres;
    };
    FiefGenerator.prototype.assart = function (manor) {
        if (manor.assart !== 0) {
            return;
        }
        manor.assart = Math.floor(manor.woodlandAcres * 0.02);
    };
    return FiefGenerator;
}());



/***/ }),

/***/ "../../../../../src/app/manors/shared/generators/herd.generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HerdGenerator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_random_weighted_choice__ = __webpack_require__("../../../../random-weighted-choice/lib/random-weighted-choice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_random_weighted_choice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_random_weighted_choice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_generators_number_generator__ = __webpack_require__("../../../../../src/app/shared/generators/number-generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_herd_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/herd.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utilities__ = __webpack_require__("../../../../../src/app/manors/shared/utilities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_tenant_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/tenant.model.ts");





var liveStockTable = [
    { weight: 15, id: __WEBPACK_IMPORTED_MODULE_2__models_herd_model__["b" /* HerdType */].Cows },
    { weight: 30, id: __WEBPACK_IMPORTED_MODULE_2__models_herd_model__["b" /* HerdType */].Goats },
    { weight: 40, id: __WEBPACK_IMPORTED_MODULE_2__models_herd_model__["b" /* HerdType */].Sheep },
    { weight: 15, id: __WEBPACK_IMPORTED_MODULE_2__models_herd_model__["b" /* HerdType */].Swine }
];
var HerdGenerator = (function () {
    function HerdGenerator() {
        this.dice = new __WEBPACK_IMPORTED_MODULE_1__shared_generators_number_generator__["b" /* NumberGenerator */]();
        this.hf = new __WEBPACK_IMPORTED_MODULE_2__models_herd_model__["a" /* HerdFactory */]();
    }
    /**
     * Initializes herds of each livestock type in the manor at zero.
     * @param {Manor} manor
     */
    HerdGenerator.prototype.initHerds = function (manor) {
        for (var _i = 0, Livestock_1 = __WEBPACK_IMPORTED_MODULE_2__models_herd_model__["c" /* Livestock */]; _i < Livestock_1.length; _i++) {
            var herdType = Livestock_1[_i];
            this.addParcel(manor, herdType, 0);
        }
    };
    /**
     * Adds oxen at 20% of target acres and returns the number of acres of oxen added
     * @param {Manor} manor
     * @returns {number} Acres of oxen added.
     */
    HerdGenerator.prototype.addOxen = function (manor, targetAcres) {
        for (var _i = 0, _a = manor.livestock; _i < _a.length; _i++) {
            var herd = _a[_i];
            if (herd.herdType === __WEBPACK_IMPORTED_MODULE_2__models_herd_model__["b" /* HerdType */].Oxen && herd.acres > 0) {
                return 0;
            }
        }
        var oxenAcres = Math.floor(targetAcres * 0.2);
        this.addParcel(manor, __WEBPACK_IMPORTED_MODULE_2__models_herd_model__["b" /* HerdType */].Oxen, oxenAcres);
        return oxenAcres;
    };
    HerdGenerator.prototype.generateHerds = function (manor) {
        this.initHerds(manor);
        var acresGrazed = 0;
        for (var _i = 0, _a = manor.livestock; _i < _a.length; _i++) {
            var herd = _a[_i];
            acresGrazed += herd.acres;
        }
        // set target acres to remaining clearedAcres not planted
        var targetAcres = manor.clearedAcres;
        for (var _b = 0, _c = manor.crops; _b < _c.length; _b++) {
            var crop = _c[_b];
            targetAcres -= crop.acres;
        }
        targetAcres -= this.addOxen(manor, targetAcres);
        // We're herding if acresGrazed is less than targetAcres.
        var herding = acresGrazed < targetAcres;
        while (herding) {
            var herdType = __WEBPACK_IMPORTED_MODULE_0_random_weighted_choice__(liveStockTable);
            var grazedParcel = this.dice.rollTotal(6, 3);
            // if parcel to be grazed less than target just return remaining acres.
            if (targetAcres - acresGrazed < grazedParcel) {
                grazedParcel = targetAcres - acresGrazed;
                herding = false;
            }
            acresGrazed += grazedParcel;
            this.addParcel(manor, herdType, grazedParcel);
        }
        this.herderCheck(manor);
    };
    HerdGenerator.prototype.herderCheck = function (manor) {
        var ml = 0;
        for (var _i = 0, _a = manor.population.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            if (tenant.office === __WEBPACK_IMPORTED_MODULE_4__models_tenant_model__["b" /* Officer */].Herder) {
                ml = tenant.ml;
            }
        }
        for (var _b = 0, _c = manor.livestock; _b < _c.length; _b++) {
            var herd = _c[_b];
            var eml = ml + herd.hardiness;
            herd.checkResult = Object(__WEBPACK_IMPORTED_MODULE_3__shared_utilities__["c" /* checkSkill */])(eml);
        }
    };
    /**
     * Adds acres of herdType to manor, creating herdType if it does not exist.
     * @param {Manor} manor
     * @param {HerdType} herdType
     * @param {number} acres
     */
    HerdGenerator.prototype.addParcel = function (manor, herdType, acres) {
        if (!this.herdExists(manor, herdType)) {
            var herd = this.hf.newHerd(herdType);
            herd.acres = acres;
            manor.livestock.push(herd);
            return;
        }
        for (var _i = 0, _a = manor.livestock; _i < _a.length; _i++) {
            var herd = _a[_i];
            if (herd.herdType === herdType) {
                herd.acres += acres;
            }
        }
    };
    /**
     * Checks if a particular herdType exists in the manor.livestock array.
     * @param {Manor} manor
     * @param {HerdType} herdType
     * @returns {boolean}
     */
    HerdGenerator.prototype.herdExists = function (manor, herdType) {
        for (var _i = 0, _a = manor.livestock; _i < _a.length; _i++) {
            var herd = _a[_i];
            if (herd.herdType === herdType) {
                return true;
            }
        }
        return false;
    };
    return HerdGenerator;
}());



/***/ }),

/***/ "../../../../../src/app/manors/shared/generators/household.generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseholdGenerator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__ = __webpack_require__("../../../../../src/app/shared/generators/number-generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_housemember_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/housemember.model.ts");


/**
 * Determines the number of household nobles based on the effective acres.  Manors held
 * by baliffs should have a lower effective acres as they are not on the level of a real
 * fiefholder.  Numbers extrapolated from table on Manor 17.  Bailiff and family assessed
 * at 2/3rd the 'value' of a fiefholder based on data on Manor 18.
 * NOTE: Min servant count is Nobles + 3, craftsmen count Nobles - 5;
 * @param eAcres Number of effective acres to use for generation - 300 to 600 for bailiffs.
 */
function numberOfHouseholdNobles(eAcres) {
    var size = eAcres / 300 + 1;
    size = size < 5 ? 5 : size;
    return size;
}
var HouseholdGenerator = (function () {
    function HouseholdGenerator() {
        this.dice = new __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["b" /* NumberGenerator */]();
    }
    HouseholdGenerator.prototype.generateHousehold = function (manor) {
        this.generateBaseHousehold(manor);
        this.generateExtraServants(manor);
    };
    HouseholdGenerator.prototype.generateBaseHousehold = function (manor) {
        if (manor.population.household.length > 0) {
            return; // don't generate if members exist.
        }
        this.addHouseMember(manor, this.generateHouseMember(__WEBPACK_IMPORTED_MODULE_1__models_housemember_model__["b" /* Noble */].Fiefholder, 3000, 1, null));
        this.addHouseMember(manor, this.generateHouseMember(__WEBPACK_IMPORTED_MODULE_1__models_housemember_model__["b" /* Noble */].Spouse, 2000, 1, 70));
        this.addHouseMember(manor, this.generateHouseMember(__WEBPACK_IMPORTED_MODULE_1__models_housemember_model__["b" /* Noble */].LadyInWaiting, 1500, 1, 70));
        var numOffspring = this.dice.rollThresholds(6, 3);
        this.addHouseMember(manor, this.generateHouseMember(__WEBPACK_IMPORTED_MODULE_1__models_housemember_model__["b" /* Noble */].Offspring, 1000, numOffspring, 70));
        this.addHouseMember(manor, this.generateHouseMember(__WEBPACK_IMPORTED_MODULE_1__models_housemember_model__["c" /* Servant */].Chamberlain, 800, 1, 50));
        this.addHouseMember(manor, this.generateHouseMember(__WEBPACK_IMPORTED_MODULE_1__models_housemember_model__["c" /* Servant */].Cook, 500, 1, 50));
        this.addHouseMember(manor, this.generateHouseMember(__WEBPACK_IMPORTED_MODULE_1__models_housemember_model__["c" /* Servant */].Alewife, 400, 1, 50));
        this.addHouseMember(manor, this.generateHouseMember(__WEBPACK_IMPORTED_MODULE_1__models_housemember_model__["c" /* Servant */].Domestic, 300, 3 + numOffspring, 50));
    };
    HouseholdGenerator.prototype.generateStables = function (manor) {
    };
    HouseholdGenerator.prototype.generateCraftsmen = function (manor) {
    };
    HouseholdGenerator.prototype.generateExtraServants = function (manor) {
    };
    HouseholdGenerator.prototype.addHouseMember = function (manor, member) {
        if (member.count !== 0) {
            manor.population.household.push(member);
        }
    };
    HouseholdGenerator.prototype.generateHouseMember = function (role, each, count, loyaltybase) {
        var hm = new __WEBPACK_IMPORTED_MODULE_1__models_housemember_model__["a" /* HouseholdMember */](role);
        hm.ml = this.dice.rollTotal(6, 3) * 5 + 25;
        hm.each = each;
        hm.count = count;
        hm.loyalty = loyaltybase !== null ? this.dice.rollTotal(6, 5) + loyaltybase : null;
        return hm;
    };
    return HouseholdGenerator;
}());



/***/ }),

/***/ "../../../../../src/app/manors/shared/generators/lordsexpense.generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LordsExpenseGenerator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__ = __webpack_require__("../../../../../src/app/shared/generators/number-generator.ts");

var LordsExpenseGenerator = (function () {
    function LordsExpenseGenerator() {
        this.dice = new __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["b" /* NumberGenerator */]();
    }
    LordsExpenseGenerator.prototype.generateExpenses = function (manor) {
        this.politicalExpenses(manor);
        this.tithe(manor);
        this.laborHired(manor);
        this.feudalPayments(manor);
        this.laborHired(manor);
    };
    /**
     * Sets Political Expenses to the minimum required to keep the manor.  Does nothign if value is above zero.
     * @param {Manor} manor
     */
    LordsExpenseGenerator.prototype.politicalExpenses = function (manor) {
        if (manor.politicalExpenses !== 0) {
            return;
        }
        manor.politicalExpenses = manor.grossAcres;
    };
    LordsExpenseGenerator.prototype.tithe = function (manor) {
        if (manor.tithe !== 0) {
            return;
        }
        manor.tithe = Math.floor(manor.totalIncome * 0.1);
    };
    LordsExpenseGenerator.prototype.feudalPayments = function (manor) {
        if (manor.feudalPayments !== 0) {
            return;
        }
        var payment = 3 * manor.grossAcres;
        if (manor.policies.isPayingScootage) {
            payment = 5 * manor.grossAcres;
        }
        if (manor.policies.isBailiffRun) {
            payment = manor.totalIncome / 3;
        }
        manor.feudalPayments = Math.floor(payment);
    };
    LordsExpenseGenerator.prototype.laborHired = function (manor) {
        if (manor.laborHired !== 0) {
            return;
        }
        var lh = manor.demenseAcres() * 8 - manor.population.tenantLaborDays();
        manor.laborHired = lh > 0 ? lh : 0;
    };
    return LordsExpenseGenerator;
}());



/***/ }),

/***/ "../../../../../src/app/manors/shared/generators/lordsincome.generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LordsIncomeGenerator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__ = __webpack_require__("../../../../../src/app/shared/generators/number-generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tenant_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/tenant.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities__ = __webpack_require__("../../../../../src/app/manors/shared/utilities.ts");



var LordsIncomeGenerator = (function () {
    function LordsIncomeGenerator() {
        this.dice = new __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["b" /* NumberGenerator */]();
    }
    LordsIncomeGenerator.prototype.generateIncome = function (manor) {
        this.taxes(manor);
        this.amercements(manor);
    };
    /**
     * Sets manor taxes to the random value from the book if it is set to 0.  Does nothing if above zero.
     * @param {Manor} manor
     */
    LordsIncomeGenerator.prototype.taxes = function (manor) {
        if (manor.taxIncome !== 0) {
            return;
        }
        manor.taxIncome = Math.floor(this.dice.rollTotal(6, 3) * 240 * manor.tradeIndex);
    };
    /**
     * Sets Amercements by the amount from the book including modification by the beadle check.  Does nothing if value
     * is above 0.
     * @param {Manor} manor
     */
    LordsIncomeGenerator.prototype.amercements = function (manor) {
        if (manor.amercements.amount !== 0) {
            return;
        }
        for (var _i = 0, _a = manor.population.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            if (tenant.office === __WEBPACK_IMPORTED_MODULE_1__models_tenant_model__["b" /* Officer */].Beadle) {
                manor.amercements.beadleCheck = Object(__WEBPACK_IMPORTED_MODULE_2__utilities__["c" /* checkSkill */])(tenant.ml);
            }
        }
        manor.amercements.amount = Math.floor(this.dice.rollDie(6) *
            manor.population.tenants.length *
            Object(__WEBPACK_IMPORTED_MODULE_2__utilities__["a" /* beadleResultIndex */])(manor.amercements.beadleCheck));
    };
    return LordsIncomeGenerator;
}());



/***/ }),

/***/ "../../../../../src/app/manors/shared/generators/tenant-generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantGenerator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_random_weighted_choice__ = __webpack_require__("../../../../random-weighted-choice/lib/random-weighted-choice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_random_weighted_choice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_random_weighted_choice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_generators_number_generator__ = __webpack_require__("../../../../../src/app/shared/generators/number-generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_manor_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/manor.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/tenant.model.ts");




var CLASSTABLE = [
    { weight: 10, id: __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].CRAFTSMAN },
    { weight: 15, id: __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].FARMER },
    { weight: 35, id: __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].VILLEIN },
    { weight: 20, id: __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].HALFVILLEIN },
    { weight: 10, id: __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].COTTAR },
    { weight: 10, id: __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].SLAVE }
];
var TenantGenerator = (function () {
    function TenantGenerator() {
        this._dice = new __WEBPACK_IMPORTED_MODULE_1__shared_generators_number_generator__["b" /* NumberGenerator */]();
    }
    /**
     * Begins the generation process for manor passed.
     *
     * @param {Manor} manor
     */
    TenantGenerator.prototype.generateTenants = function (manor) {
        var tenantCapacity = manor.clearedAcres / 40 * manor.landQuality;
        var tenantsNeeded = tenantCapacity - manor.population.tenants.length;
        for (var i = 0; i < tenantsNeeded; i++) {
            manor.population.tenants.push(this._generateTenant(manor));
        }
    };
    /**
     * Yields a single tenant for addition to the manor.
     *
     * @returns {ITenant}
     * @private
     */
    TenantGenerator.prototype._generateTenant = function (manor) {
        var tenant = {
            occupation: null,
            craft: null,
            military: null,
            office: null,
            size: 0,
            ml: 0,
            serf_acres: 0,
            free_acres: 0,
            labor_days: 0,
            rent: 0,
            fees: 0,
            notes: []
        };
        this._generateTenantClass(manor, tenant);
        this._generateTenantSize(tenant);
        this._generateML(tenant);
        this._generateTenantSerfAcres(tenant);
        this._generateTenantFreeAcres(tenant);
        this._assessLaborDays(tenant);
        this._assignSpecialTrade(manor, tenant);
        this._assessRent(tenant);
        this._assessFees(tenant);
        return tenant;
    };
    TenantGenerator.prototype._generateTenantClass = function (manor, t) {
        var tClass = __WEBPACK_IMPORTED_MODULE_0_random_weighted_choice__(CLASSTABLE);
        if (!manor.policies.isSlaveState && tClass === __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].SLAVE) {
            tClass = __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].COTTAR;
        }
        t.occupation = tClass;
    };
    TenantGenerator.prototype._generateTenantSize = function (t) {
        var size = this._dice.rollDie(6);
        if (t.occupation === __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].VILLEIN) {
            size = size + 2;
        }
        else if (t.occupation !== __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].COTTAR) {
            size = size + 1;
        }
        t.size = size;
    };
    TenantGenerator.prototype._generateML = function (t) {
        t.ml = 25 + this._dice.rollTotal(6, 3) * 5;
    };
    TenantGenerator.prototype._generateTenantSerfAcres = function (t) {
        switch (t.occupation) {
            case __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].VILLEIN:
                t.serf_acres = this._dice.rollDie(20) + 20;
                break;
            case __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].HALFVILLEIN:
                t.serf_acres = this._dice.rollDie(10) + 10;
                break;
            case __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].COTTAR:
                t.serf_acres = this._dice.rollDie(6) - 1;
                break;
            default:
                t.serf_acres = 0;
                break;
        }
    };
    TenantGenerator.prototype._generateTenantFreeAcres = function (t) {
        switch (t.occupation) {
            case __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].CRAFTSMAN:
                t.free_acres = this._dice.rollDie(6) * 5;
                break;
            case __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].FARMER:
                t.free_acres = this._dice.rollDie(6) * 5;
                break;
            case __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].VILLEIN:
                t.free_acres =
                    this._dice.rollDie(25) % 5 === 0 ? this._dice.rollDie(6) * 5 : 0;
                break;
            default:
                t.free_acres = 0;
        }
    };
    /**
     * Assigns fisherman and trappers in coastal and woodland manors.
     *
     * @param {ITenant} t
     * @private
     */
    TenantGenerator.prototype._assignSpecialTrade = function (manor, t) {
        if (t.occupation === __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].CRAFTSMAN ||
            t.occupation === __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].PRIEST) {
            return;
        }
        if (t.free_acres + t.serf_acres > 39) {
            return;
        }
        var ta = t.free_acres + t.serf_acres;
        var chanceMod = ta >= 20 ? Math.floor((ta - 15) / 5) : 0;
        if (this._dice.rollTotal(6, 3) - chanceMod > 10) {
            if (manor.topology === __WEBPACK_IMPORTED_MODULE_2__models_manor_model__["d" /* Topology */].Coastal) {
                t.occupation = __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].FISHERMAN;
            }
            else if (manor.topology === __WEBPACK_IMPORTED_MODULE_2__models_manor_model__["d" /* Topology */].Forest) {
                t.occupation = __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].TRAPPER;
            }
        }
    };
    TenantGenerator.prototype._assessRent = function (t) {
        var base = t.occupation === __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].SLAVE ? 0 : 60;
        t.rent = base + 6 * t.free_acres;
    };
    TenantGenerator.prototype._assessFees = function (t) {
        if (t.occupation === __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].SLAVE) {
            t.fees = 0;
            return;
        }
        t.fees = 6 + t.free_acres + t.serf_acres;
        if (t.occupation === __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].FISHERMAN) {
            var activityRate = 40 - t.serf_acres - t.free_acres;
            var fishingFee = 24 + this._dice.rollTotal(6, 2) * activityRate;
            t.fees += fishingFee;
            t.notes.push("Fee includes " + fishingFee + "d for fishing");
        }
        else if (t.occupation === __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].TRAPPER) {
            var activityRate = 40 - t.serf_acres - t.free_acres;
            var trappingFee = 24 + this._dice.rollTotal(6, 2) * activityRate;
            t.fees += trappingFee;
            t.notes.push("Fee includes " + trappingFee + "d for trapping");
        }
    };
    TenantGenerator.prototype._assessLaborDays = function (t) {
        t.labor_days =
            t.occupation === __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].SLAVE ? 200 * t.size : 4 * t.serf_acres;
    };
    return TenantGenerator;
}());



/***/ }),

/***/ "../../../../../src/app/manors/shared/generators/tenant-officer.generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantOfficerGenerator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__ = __webpack_require__("../../../../../src/app/shared/generators/number-generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_manor_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/manor.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/tenant.model.ts");



var TenantOfficerGenerator = (function () {
    function TenantOfficerGenerator() {
        this._dice = new __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["b" /* NumberGenerator */]();
    }
    /**
     * Initiates selection of each of the officer types in the manor.
     * @param {Manor} manor
     */
    TenantOfficerGenerator.prototype.electOfficers = function (manor) {
        this._selectSerfOfficer(manor, __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["b" /* Officer */].Reeve);
        this._selectSerfOfficer(manor, __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["b" /* Officer */].Woodward);
        this._selectSerfOfficer(manor, __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["b" /* Officer */].Herder);
        if (manor.topology === __WEBPACK_IMPORTED_MODULE_1__models_manor_model__["d" /* Topology */].Coastal) {
            this._selectSerfOfficer(manor, __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["b" /* Officer */].FishWarden);
        }
        if (manor.topology === __WEBPACK_IMPORTED_MODULE_1__models_manor_model__["d" /* Topology */].Forest) {
            this._selectSerfOfficer(manor, __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["b" /* Officer */].ForestWarden);
        }
        this._selectBeadle(manor);
        var glebeChance = manor.population.glebeRevenue();
        if (this._dice.rollDie(100) < glebeChance) {
            this._selectGlebe(manor);
        }
        else {
            manor.notes.push('No active Glebe');
        }
    };
    /**
     * Iterates through the serf officer pool to determine which to assign offices.
     * It may further modify the serf officer pool depending on office and topology
     * so you don't end up with things like Fisherman being the Herder.
     * @param {Officer} o
     * @private
     */
    TenantOfficerGenerator.prototype._selectSerfOfficer = function (manor, o) {
        if (this._isOfficeFilled(manor, o)) {
            return; // jump over if the office is already filled.
        }
        var selected = false;
        var tenants = this._serfOfficerPool(manor);
        if (o === __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["b" /* Officer */].Herder ||
            o === __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["b" /* Officer */].Beadle ||
            o === __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["b" /* Officer */].Woodward) {
            tenants = tenants.filter(function (t) { return t.occupation !== __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["c" /* TenantType */].FISHERMAN; });
        }
        if (o === __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["b" /* Officer */].Reeve) {
            tenants = tenants.filter(function (t) { return t.occupation !== __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["c" /* TenantType */].FISHERMAN || __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["c" /* TenantType */].TRAPPER; });
        }
        if (o === __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["b" /* Officer */].ForestWarden) {
            tenants = tenants.filter(function (t) { return t.occupation === __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["c" /* TenantType */].TRAPPER; });
        }
        if (o === __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["b" /* Officer */].FishWarden) {
            tenants = tenants.filter(function (t) { return t.occupation === __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["c" /* TenantType */].FISHERMAN; });
        }
        do {
            for (var _i = 0, tenants_1 = tenants; _i < tenants_1.length; _i++) {
                var tenant = tenants_1[_i];
                if (this._dice.rollDie(100) < 81) {
                    selected = this._assignOffice(o, tenant);
                    break;
                }
            }
            tenants = this._serfOfficerPool(manor);
        } while (!selected && tenants.length > 0);
    };
    /**
     * Assigns the office of Beadle from the pool of yeoman, or passes it to a Serf
     * if no yeoman available or selected.
     * @private
     */
    TenantOfficerGenerator.prototype._selectBeadle = function (manor) {
        if (this._isOfficeFilled(manor, __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["b" /* Officer */].Beadle)) {
            return; // jump over if the office is already filled.
        }
        var selected = false;
        var tenants = this._beadlePool(manor);
        do {
            for (var _i = 0, tenants_2 = tenants; _i < tenants_2.length; _i++) {
                var tenant = tenants_2[_i];
                if (this._dice.rollDie(100) < 81) {
                    selected = this._assignOffice(__WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["b" /* Officer */].Beadle, tenant);
                    break;
                }
            }
            if (!selected) {
                this._selectSerfOfficer(manor, __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["b" /* Officer */].Beadle);
            }
            tenants = this._beadlePool(manor);
        } while (!selected && tenants.length > 0);
    };
    /**
     * Picks the first tenant that isn't an officer, craftsman or yeoman and assign them
     * as the Glebe, modifying all data as appropriate for the position.
     * @private
     */
    TenantOfficerGenerator.prototype._selectGlebe = function (manor) {
        if (this._isOfficeFilled(manor, __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["b" /* Officer */].Glebe)) {
            return; // jump over if the office is already filled.
        }
        for (var _i = 0, _a = manor.population.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            if (tenant.craft === null &&
                tenant.military === null &&
                tenant.office === null) {
                tenant.office = __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["b" /* Officer */].Glebe;
                tenant.occupation = __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["c" /* TenantType */].PRIEST;
                tenant.labor_days = 0;
                tenant.serf_acres = 0;
                tenant.rent = 0;
                tenant.fees = 0;
                tenant.free_acres = this._dice.rollTotal(6, 2) * 5;
                var glebeRevenue = manor.population.glebeRevenue();
                tenant.notes = []; // reset all notes.
                tenant.notes.push('Glebe revenues ' + glebeRevenue + 'd');
                break;
            }
        }
    };
    TenantOfficerGenerator.prototype._getTenantAcres = function (manor) {
        var tenantAcres = 0;
        for (var _i = 0, _a = manor.population.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            if (tenant.office !== __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["b" /* Officer */].Glebe) {
                tenantAcres += tenant.free_acres + tenant.serf_acres;
            }
        }
        return tenantAcres;
    };
    TenantOfficerGenerator.prototype._serfOfficerPool = function (manor) {
        var tenants = manor.population.tenants.filter(function (tenant) {
            return tenant.serf_acres > 0 &&
                tenant.office === null &&
                tenant.military === null &&
                tenant.occupation !== __WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["c" /* TenantType */].SLAVE;
        });
        tenants = tenants.sort(function (a, b) {
            return Math.pow(a.serf_acres, 2) * a.ml > Math.pow(b.serf_acres, 2) * b.ml ? -1 : 1;
        });
        return tenants;
    };
    TenantOfficerGenerator.prototype._beadlePool = function (manor) {
        var tenants = manor.population.tenants.filter(function (tenant) { return tenant.office === null && tenant.military !== null; });
        tenants = tenants.sort(function (a, b) {
            var aTotal = Math.pow((a.free_acres + a.serf_acres), 2) * a.ml;
            var bTotal = Math.pow((b.free_acres + b.serf_acres), 2) * b.ml;
            return aTotal > bTotal ? -1 : 1;
        });
        return tenants;
    };
    TenantOfficerGenerator.prototype._isOfficeFilled = function (manor, o) {
        for (var _i = 0, _a = manor.population.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            if (__WEBPACK_IMPORTED_MODULE_2__models_tenant_model__["b" /* Officer */][tenant.office] === o) {
                return true;
            }
        }
        return false;
    };
    /**
     * Attempts to assign the office to the tenant, and returns true if assined.  if the office is already filled
     * for some reason, it returns false
     * @param o Officer position to assign
     * @param tenant Tenant to be assigned office.
     */
    TenantOfficerGenerator.prototype._assignOffice = function (o, tenant) {
        if (tenant.office === null) {
            tenant.office = o;
            tenant.notes.push('Labor served as officer.');
            tenant.labor_days = 0;
            return true;
        }
        return false;
    };
    return TenantOfficerGenerator;
}());



/***/ }),

/***/ "../../../../../src/app/manors/shared/generators/yeoman-generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MilitaryAcres */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YeomanGenerator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_random_weighted_choice__ = __webpack_require__("../../../../random-weighted-choice/lib/random-weighted-choice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_random_weighted_choice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_random_weighted_choice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_generators_number_generator__ = __webpack_require__("../../../../../src/app/shared/generators/number-generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_military_models__ = __webpack_require__("../../../../../src/app/manors/shared/models/military.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/tenant.model.ts");




/**
 * Genreal odds of recruitment of each class type
 * @type {{}
 */
var recruitmentTable = [
    { weight: 50, id: __WEBPACK_IMPORTED_MODULE_2__models_military_models__["a" /* Military */].LF },
    { weight: 20, id: __WEBPACK_IMPORTED_MODULE_2__models_military_models__["a" /* Military */].MF },
    { weight: 20, id: __WEBPACK_IMPORTED_MODULE_2__models_military_models__["a" /* Military */].LB },
    { weight: 10, id: __WEBPACK_IMPORTED_MODULE_2__models_military_models__["a" /* Military */].LH },
];
/**
 * Free acres recieved (+1d10) for each class type.
 * @type {{Military: number}}
 */
var MilitaryAcres = (_a = {},
    _a[__WEBPACK_IMPORTED_MODULE_2__models_military_models__["a" /* Military */].LF] = 10,
    _a[__WEBPACK_IMPORTED_MODULE_2__models_military_models__["a" /* Military */].MF] = 20,
    _a[__WEBPACK_IMPORTED_MODULE_2__models_military_models__["a" /* Military */].LB] = 40,
    _a[__WEBPACK_IMPORTED_MODULE_2__models_military_models__["a" /* Military */].LH] = 60,
    _a);
/**
 * Class to determine the feudal obligation of a manor, and walk through the recruitment of
 * Yeoman based on the minimum obligation.
 */
var YeomanGenerator = (function () {
    function YeomanGenerator() {
        this._dice = new __WEBPACK_IMPORTED_MODULE_1__shared_generators_number_generator__["b" /* NumberGenerator */]();
    }
    /**
     * Handles recruitment for manor passed to it.
     * @param {Manor} manor
     */
    YeomanGenerator.prototype.recruitYeoman = function (manor) {
        this._recruitmentPts = this.lightFoodObligation(manor) * __WEBPACK_IMPORTED_MODULE_2__models_military_models__["b" /* MilitaryData */][__WEBPACK_IMPORTED_MODULE_2__models_military_models__["a" /* Military */].LF].pts; // calculate obligation.
        for (var _i = 0, _a = manor.population.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            if (tenant.military !== null) {
                this._recruitmentPts -= __WEBPACK_IMPORTED_MODULE_2__models_military_models__["b" /* MilitaryData */][tenant.military].pts;
            }
        }
        while (this._recruitableFamers(manor) && this._recruitmentPts > 1) {
            var rank = this._getNextValidSoldier();
            this._draftFarmer(manor, rank);
        }
        this._adjustAcres(manor);
        this._adjustRent(manor);
        this._adjustFees(manor);
        this._noteMilitaryService(manor);
        this._noteFeudalObligation(manor);
    };
    /**
     * Gets
     * @returns {Military}
     * @private
     */
    YeomanGenerator.prototype._getNextValidSoldier = function () {
        var rank;
        do {
            rank = __WEBPACK_IMPORTED_MODULE_0_random_weighted_choice__(recruitmentTable);
        } while (__WEBPACK_IMPORTED_MODULE_2__models_military_models__["b" /* MilitaryData */][rank].pts > this._recruitmentPts || this._recruitmentPts < 2);
        this._recruitmentPts -= __WEBPACK_IMPORTED_MODULE_2__models_military_models__["b" /* MilitaryData */][rank].pts;
        return rank;
    };
    YeomanGenerator.prototype._recruitableFamers = function (manor) {
        var recruitableFamers = false;
        for (var _i = 0, _a = manor.population.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            if (tenant.occupation === __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].FARMER && tenant.military === null) {
                recruitableFamers = true;
            }
        }
        return recruitableFamers;
    };
    YeomanGenerator.prototype._draftFarmer = function (manor, rank) {
        for (var _i = 0, _a = manor.population.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            if (tenant.occupation === __WEBPACK_IMPORTED_MODULE_3__models_tenant_model__["c" /* TenantType */].FARMER && tenant.military === null) {
                tenant.military = rank;
                break;
            }
        }
    };
    /**
     * Recalculates tenant free acres based on any military rank.
     * @private
     */
    YeomanGenerator.prototype._adjustAcres = function (manor) {
        for (var _i = 0, _a = manor.population.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            if (tenant.military !== null) {
                tenant.free_acres = this._dice.rollDie(10) + MilitaryAcres[tenant.military];
            }
        }
    };
    /**
     * Recalculates any tenant fees based on military rules.
     * Doesn't actually differ from Freeman but leaving incase I change them later.
     * @private
     */
    YeomanGenerator.prototype._adjustFees = function (manor) {
        for (var _i = 0, _a = manor.population.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            if (tenant.military !== null) {
                tenant.fees = 60 + tenant.free_acres;
            }
        }
    };
    /**
     * Recalculates any tenant rent based on military rules.
     * @private
     */
    YeomanGenerator.prototype._adjustRent = function (manor) {
        for (var _i = 0, _a = manor.population.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            if (tenant.military !== null) {
                tenant.rent = 60 + tenant.free_acres;
            }
        }
    };
    /**
     * Pushes a comment on the Feudal Obligation into the manor Notes.
     * @private
     */
    YeomanGenerator.prototype._noteFeudalObligation = function (manor) {
        manor.notes.push('Feaudal Obligation: ' + this.heavyHorseObligation(manor) + 'HH/' + this.lightFoodObligation(manor) + 'LF');
    };
    YeomanGenerator.prototype._noteMilitaryService = function (manor) {
        for (var _i = 0, _a = manor.population.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            if (tenant.military !== null) {
                tenant.notes.push('Military service owed.');
            }
        }
    };
    /**
     * Calculates if a manor reaches minimum heavy horse obligation.
     * @returns {number} returns 1 if it meets it and 0 if not.
     */
    YeomanGenerator.prototype.heavyHorseObligation = function (manor) {
        return (manor.grossAcres - manor.policies.foAcresPerHH >= 0) ? 1 : 0;
    };
    /**
     * Calculates the LF obligation remaining after any Heavy Horse obligation is met.
     * @returns {number} of LF equivalent troops.
     */
    YeomanGenerator.prototype.lightFoodObligation = function (manor) {
        var foLeft = manor.grossAcres - this.heavyHorseObligation(manor) * manor.policies.foAcresPerHH;
        return Math.floor(foLeft / manor.policies.foAcresPerLF);
    };
    return YeomanGenerator;
}());

var _a;


/***/ }),

/***/ "../../../../../src/app/manors/shared/models/crop.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Crop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CropType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CropTypes; });
/* unused harmony export CropData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__ = __webpack_require__("../../../../../src/app/shared/generators/number-generator.ts");

var Crop = (function () {
    function Crop(cropType, baseYield, baseLabor, hardiness) {
        this.cropType = cropType;
        this.acres = 0;
        this.baseYield = baseYield;
        this.baseLabor = baseLabor;
        this.checkResult = __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["a" /* CheckResult */].CF;
        this.hardiness = hardiness;
    }
    return Crop;
}());

var CropFactory = (function () {
    function CropFactory() {
    }
    CropFactory.prototype.newCrop = function (ct) {
        return new Crop(ct, CropData[ct].baseYield, CropData[ct].baseLabor, CropData[ct].hardiness);
    };
    return CropFactory;
}());

var CropType;
(function (CropType) {
    CropType["Rye"] = "Rye";
    CropType["Barley"] = "Barley";
    CropType["Oats"] = "Oats";
    CropType["Hay"] = "Hay";
    CropType["Vegetables"] = "Vegetables";
    CropType["Flax"] = "Flax";
    CropType["Wheat"] = "Wheat";
    CropType["Fruit"] = "Fruit";
})(CropType || (CropType = {}));
var CropTypes = [
    CropType.Rye,
    CropType.Barley,
    CropType.Oats,
    CropType.Hay,
    CropType.Vegetables,
    CropType.Flax,
    CropType.Wheat,
    CropType.Fruit
];
var CropData = (_a = {},
    _a[CropType.Rye] = {
        hardiness: 10,
        baseLabor: 5,
        baseYield: 45
    },
    _a[CropType.Barley] = {
        hardiness: 20,
        baseLabor: 6,
        baseYield: 48
    },
    _a[CropType.Oats] = {
        hardiness: 15,
        baseLabor: 5,
        baseYield: 42
    },
    _a[CropType.Hay] = {
        hardiness: 20,
        baseLabor: 5,
        baseYield: 40
    },
    _a[CropType.Vegetables] = {
        hardiness: 0,
        baseLabor: 8,
        baseYield: 80
    },
    _a[CropType.Flax] = {
        hardiness: -10,
        baseLabor: 6,
        baseYield: 66
    },
    _a[CropType.Wheat] = {
        hardiness: -20,
        baseLabor: 6,
        baseYield: 72
    },
    _a[CropType.Fruit] = {
        hardiness: -30,
        baseLabor: 7,
        baseYield: 90
    },
    _a);
var _a;


/***/ }),

/***/ "../../../../../src/app/manors/shared/models/herd.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Herd */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HerdFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HerdType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Livestock; });
/* unused harmony export HerdData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__ = __webpack_require__("../../../../../src/app/shared/generators/number-generator.ts");

var Herd = (function () {
    function Herd(herdType, graze, baseYield, baseLabor, hardiness, checkResult) {
        this.herdType = herdType;
        this.acres = 0;
        this.graze = graze;
        this.baseYield = baseYield;
        this.baseLabor = baseLabor;
        this.hardiness = hardiness;
        this.checkResult = checkResult;
    }
    return Herd;
}());

var HerdFactory = (function () {
    function HerdFactory() {
    }
    HerdFactory.prototype.newHerd = function (ht) {
        return new Herd(ht, HerdData[ht].graze, HerdData[ht].baseYield, HerdData[ht].baseLabor, HerdData[ht].hardiness, __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["a" /* CheckResult */].CF);
    };
    return HerdFactory;
}());

var HerdType;
(function (HerdType) {
    HerdType["Oxen"] = "Oxen";
    HerdType["Cows"] = "Cows";
    HerdType["Goats"] = "Goats";
    HerdType["Sheep"] = "Sheep";
    HerdType["Swine"] = "Swine";
    HerdType["Horses"] = "Horses"; // not really used by have data.
})(HerdType || (HerdType = {}));
var Livestock = [
    HerdType.Oxen,
    HerdType.Cows,
    HerdType.Goats,
    HerdType.Sheep,
    HerdType.Swine
];
var HerdData = (_a = {},
    _a[HerdType.Oxen] = {
        graze: 0.5,
        baseLabor: 17,
        baseYield: 130,
        hardiness: 0
    },
    _a[HerdType.Cows] = {
        graze: 0.5,
        baseLabor: 20,
        baseYield: 188,
        hardiness: -5
    },
    _a[HerdType.Goats] = {
        graze: 2,
        baseLabor: 5,
        baseYield: 40,
        hardiness: 10
    },
    _a[HerdType.Sheep] = {
        graze: 3,
        baseLabor: 3,
        baseYield: 33,
        hardiness: -10
    },
    _a[HerdType.Swine] = {
        graze: 10,
        baseLabor: 4,
        baseYield: 15,
        hardiness: 5
    },
    _a[HerdType.Horses] = {
        graze: 1,
        baseLabor: 4,
        baseYield: 0,
        hardiness: 5
    },
    _a);
var _a;


/***/ }),

/***/ "../../../../../src/app/manors/shared/models/housemember.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseholdMember; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Noble; });
/* unused harmony export Stable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Servant; });
var HouseholdMember = (function () {
    function HouseholdMember(role, name) {
        if (name === void 0) { name = null; }
        this.name = name;
        this.role = role;
        this.ml = 0;
        this.each = 0;
        this.count = 1;
        this.loyalty = 0;
    }
    HouseholdMember.prototype.displayName = function () {
        var name = this.role;
        if (this.name) {
            name = this.name + ' (' + this.role + ')';
        }
        return name;
    };
    return HouseholdMember;
}());

var Noble;
(function (Noble) {
    Noble["Fiefholder"] = "Fiefholder";
    Noble["Spouse"] = "Spouse";
    Noble["LadyInWaiting"] = "Lady-in-Waiting";
    Noble["Offspring"] = "Offspring";
    Noble["Relative"] = "Relative";
    Noble["Squire"] = "Squire";
    Noble["Bailiff"] = "Bailiff";
    Noble["Steward"] = "Steward";
})(Noble || (Noble = {}));
var Stable;
(function (Stable) {
    Stable["Warhorse"] = "Warhorse";
    Stable["Palfrey"] = "Palfrey";
})(Stable || (Stable = {}));
var Servant;
(function (Servant) {
    Servant["Chamberlain"] = "Chamberlain";
    Servant["Cook"] = "Cook";
    Servant["Baker"] = "Baker";
    Servant["Alewife"] = "Alewife";
    Servant["Gardener"] = "Gardener";
    Servant["Nursemaid"] = "Nursemaid";
    Servant["Domestic"] = "Domestic";
})(Servant || (Servant = {}));


/***/ }),

/***/ "../../../../../src/app/manors/shared/models/manor.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Policies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ManorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Topology; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TopologyEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Manor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__ = __webpack_require__("../../../../../src/app/shared/generators/number-generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__population_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/population.model.ts");


var Policies = (function () {
    function Policies() {
        this.baseRent = 60;
        this.freeholderRent = 6;
        this.serfLabor = 4;
        this.isSlaveState = false;
        this.isBailiffRun = false;
        this.isPayingScootage = false;
        this.foAcresPerHH = 1500;
        this.foAcresPerLF = 600;
    }
    return Policies;
}());

var ManorFactory = (function () {
    function ManorFactory() {
    }
    ManorFactory.getManor = function () {
        return new Manor();
    };
    return ManorFactory;
}());

var Topology;
(function (Topology) {
    Topology["Lowlands"] = "Lowlands";
    Topology["Highlands"] = "Highlands";
    Topology["Coastal"] = "Coastal";
    Topology["Forest"] = "Forest";
})(Topology || (Topology = {}));
var TopologyEffects = (_a = {},
    _a[Topology.Lowlands] = {
        woods: 20,
        crops: 67,
        pasture: 33
    },
    _a[Topology.Highlands] = {
        woods: 20,
        crops: 50,
        pasture: 50
    },
    _a[Topology.Coastal] = {
        woods: 30,
        crops: 67,
        pasture: 33
    },
    _a[Topology.Forest] = {
        woods: 50,
        crops: 67,
        pasture: 33
    },
    _a);
var Manor = (function () {
    function Manor() {
        this.dice = new __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["b" /* NumberGenerator */]();
        this.reset();
    }
    Manor.prototype.reset = function () {
        this.name = '';
        this.realm = '';
        this.year = null;
        this.topology = Topology.Lowlands;
        this.grossAcres = 600 + this.dice.rollTotal(100, 15);
        this.setWoodlandAcres();
        this.clearedAcres = this.grossAcres - this.woodlandAcres;
        this.landQuality = parseFloat((0.74 + this.dice.rollDie(51) / 100).toFixed(2));
        this.setFiefIndex();
        this.setWeatherIndex();
        this.tradeIndex = 0.5;
        this.policies = new Policies();
        this.population = new __WEBPACK_IMPORTED_MODULE_1__population_model__["a" /* Population */]();
        this.crops = [];
        this.livestock = [];
        this.woods = {
            basicYield: 18,
            acresWorked: 0,
            checkResult: __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["a" /* CheckResult */].CF
        };
        this.waste = 0;
        this.cropSeed = { acresPlanned: 0, checkResult: __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["a" /* CheckResult */].CF };
        this.winterFeed = { acresPlanned: 0, checkResult: __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["a" /* CheckResult */].CF };
        this.fiefMaintenance = 0;
        this.assart = 0;
        this.taxIncome = 0;
        this.amercements = { amount: 0, beadleCheck: __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["a" /* CheckResult */].CF };
        this.feudalIncome = 0;
        this.totalIncome = 0;
        this.feudalPayments = 0;
        this.tithe = 0;
        this.laborHired = 0;
        this.politicalExpenses = 0;
        this.privyPurse = 0;
        this.notes = [];
    };
    Manor.prototype.setWoodlandAcres = function () {
        var woodsPercent = (TopologyEffects[this.topology].woods - 5 + this.dice.rollDie(10)) / 100;
        this.woodlandAcres = Math.floor(this.grossAcres * woodsPercent);
    };
    /**
     * The total Cleared Acres remaining for
     * the fiefholder’s own use. It is equal to Cleared Acres minus Tenant Acres.
     */
    Manor.prototype.demenseAcres = function () {
        return this.clearedAcres - this.population.tenantAcres();
    };
    /**
     * Sets manor fief index randomly.
     *
     * An index ranging from 0.75 to 1.25 which reflects the quality of capital assets
     * on the fief, such as barns, granaries, roads, bridges, ditches, canals, and duck
     * ponds. It also reflects quality of livestock, seed stocks, etc. FI is generated
     * on the Fief Index table or can be set by the GM within the range given allowing
     * for the effects of war, floods, etc.
     */
    Manor.prototype.setFiefIndex = function () {
        this.fiefIndex = parseFloat((this.dice.rollTotal(6, 2) * 0.05 + 0.65).toFixed(2));
    };
    Manor.prototype.setWeatherIndex = function () {
        var roll = this.dice.rollTotal(6, 3);
        roll = roll > 10 ? roll - 1 : roll;
        this.weatherIndex = parseFloat(((50 + roll * 5) / 100).toFixed(2));
    };
    return Manor;
}());

var _a;


/***/ }),

/***/ "../../../../../src/app/manors/shared/models/military.models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Military; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MilitaryData; });
var Military;
(function (Military) {
    Military["LF"] = "Light Foot";
    Military["MF"] = "Medium Foot";
    Military["SB"] = "Shortbow";
    Military["LB"] = "Longbow";
    Military["LH"] = "Light Horse";
    Military["MH"] = "Medium Horse";
    Military["HH"] = "Heavy Horse";
})(Military || (Military = {}));
var MilitaryData = (_a = {},
    _a[Military.LF] = {
        pts: 2,
        title: 'Light Foot',
        kind: 0
    },
    _a[Military.MF] = {
        pts: 3,
        title: 'Medium Foot',
        kind: 0
    },
    _a[Military.SB] = {
        pts: 4,
        title: 'Shortbow',
        kind: 0
    },
    _a[Military.LB] = {
        pts: 6,
        title: 'Longbow',
        kind: 0
    },
    _a[Military.LH] = {
        pts: 6,
        title: 'Light Horse',
        kind: 0
    },
    _a[Military.MH] = {
        pts: 8,
        title: 'Medium Horse',
        kind: 0
    },
    _a[Military.HH] = {
        pts: 10,
        title: 'Heavy Horse',
        kind: 0
    },
    _a);
var _a;


/***/ }),

/***/ "../../../../../src/app/manors/shared/models/population.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Population; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tenant_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/tenant.model.ts");

var Population = (function () {
    function Population() {
        this.tenants = [];
        this.household = [];
    }
    Population.prototype.tenantSize = function () {
        var total = 0;
        for (var _i = 0, _a = this.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            total += tenant.size;
        }
        return total;
    };
    Population.prototype.tenantAcres = function () {
        var total = 0;
        for (var _i = 0, _a = this.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            total += tenant.serf_acres + tenant.free_acres;
        }
        return total;
    };
    Population.prototype.tenantFreeAcres = function () {
        var total = 0;
        for (var _i = 0, _a = this.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            total += tenant.free_acres;
        }
        return total;
    };
    Population.prototype.tenantSerfAcres = function () {
        var total = 0;
        for (var _i = 0, _a = this.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            total += tenant.serf_acres;
        }
        return total;
    };
    Population.prototype.tenantLaborDays = function () {
        var total = 0;
        for (var _i = 0, _a = this.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            total += tenant.labor_days;
        }
        return total;
    };
    Population.prototype.tenantFees = function () {
        var total = 0;
        for (var _i = 0, _a = this.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            total += tenant.fees;
        }
        return total;
    };
    Population.prototype.tenantRent = function () {
        var total = 0;
        for (var _i = 0, _a = this.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            total += tenant.rent;
        }
        return total;
    };
    Population.prototype.tenantLaborPool = function () {
        return this.tenants.length * 500;
    };
    Population.prototype.glebeRevenue = function () {
        var glebeAcres = 0;
        var totalAcres = 0; // doing again since this saves another for loop.
        for (var _i = 0, _a = this.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            totalAcres += tenant.serf_acres + tenant.free_acres;
            if (tenant.office === __WEBPACK_IMPORTED_MODULE_0__tenant_model__["b" /* Officer */].Glebe) {
                glebeAcres += tenant.free_acres;
            }
        }
        totalAcres = totalAcres - glebeAcres;
        return totalAcres * 5 + glebeAcres * 60;
    };
    Population.prototype.householdTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.household; _i < _a.length; _i++) {
            var member = _a[_i];
            total += member.each * member.count;
        }
        return total;
    };
    return Population;
}());



/***/ }),

/***/ "../../../../../src/app/manors/shared/models/tenant.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Craftsman; });
/* unused harmony export craftsmanCost */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return craftsmanFees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TenantType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Officer; });
/**
 * List of craftsman that can appear in a village or manor.
 */
var Craftsman;
(function (Craftsman) {
    Craftsman["Miller"] = "Miller";
    Craftsman["Metalsmith"] = "Metalsmith";
    Craftsman["Woodcrafter"] = "Woodcrafter";
    Craftsman["Salter"] = "Salter";
    Craftsman["Hideworker"] = "Hideworker";
    Craftsman["Timberwright"] = "Timberwright";
    Craftsman["Charcoaler"] = "Charcoaler";
    Craftsman["Shipwright"] = "Shipwright";
    Craftsman["Innkeeper"] = "Innkeeper";
    Craftsman["Ostler"] = "Ostler";
    Craftsman["Potter"] = "Potter";
    Craftsman["Apothecary"] = "Apothecary";
    Craftsman["Glassworker"] = "Glassworker";
    Craftsman["Weaponsmith"] = "Weaponsmith";
    Craftsman["Armourer"] = "Armourer";
    Craftsman["Clothier"] = "Clothier";
    Craftsman["Harper"] = "Harper";
    Craftsman["Herald"] = "Herald";
    Craftsman["Litigant"] = "Litigant";
    Craftsman["Mason"] = "Mason";
    Craftsman["Physician"] = "Physician";
    Craftsman["Priest"] = "Priest";
    Craftsman["Sage"] = "Sage/Tutor";
    Craftsman["Scribe"] = "Scribe";
    Craftsman["Teamster"] = "Teamster";
    Craftsman["GMDetermine"] = "GM Determine";
})(Craftsman || (Craftsman = {}));
/**
 * Used to calculate cost for household
 * @type {{}}
 */
var craftsmanCost = (_a = {},
    _a[Craftsman.Clothier] = 900,
    _a[Craftsman.Harper] = 600,
    _a[Craftsman.Herald] = 1200,
    _a[Craftsman.Hideworker] = 900,
    _a[Craftsman.Litigant] = 1100,
    _a[Craftsman.Mason] = 1500,
    _a[Craftsman.Metalsmith] = 1100,
    _a[Craftsman.Ostler] = 1300,
    _a[Craftsman.Physician] = 1200,
    _a[Craftsman.Priest] = 800,
    _a[Craftsman.Sage] = 1200,
    _a[Craftsman.Scribe] = 800,
    _a[Craftsman.Salter] = 700,
    _a[Craftsman.Teamster] = 900,
    _a[Craftsman.Timberwright] = 1200,
    _a[Craftsman.Weaponsmith] = 1800,
    _a[Craftsman.Woodcrafter] = 1000,
    _a);
/**
 * Used to calculate fees as part of village census.
 * @type {{}}
 */
var craftsmanFees = (_b = {},
    _b[Craftsman.Miller] = 240,
    _b[Craftsman.Metalsmith] = 144,
    _b[Craftsman.Woodcrafter] = 120,
    _b[Craftsman.Salter] = 120,
    _b[Craftsman.Hideworker] = 144,
    _b[Craftsman.Timberwright] = 216,
    _b[Craftsman.Charcoaler] = 180,
    _b[Craftsman.Shipwright] = 144,
    _b[Craftsman.Innkeeper] = 216,
    _b[Craftsman.Ostler] = 180,
    _b[Craftsman.Potter] = 120,
    _b[Craftsman.Apothecary] = 120,
    _b[Craftsman.Glassworker] = 120,
    _b[Craftsman.Weaponsmith] = 220,
    _b[Craftsman.Armourer] = 220,
    _b[Craftsman.GMDetermine] = 0,
    _b);
var TenantType;
(function (TenantType) {
    TenantType["CRAFTSMAN"] = "Craftsman";
    TenantType["FARMER"] = "Farmer";
    TenantType["VILLEIN"] = "Villein";
    TenantType["HALFVILLEIN"] = "Half-Villein";
    TenantType["COTTAR"] = "Cottar";
    TenantType["SLAVE"] = "Slave/Thrall";
    TenantType["PRIEST"] = "Priest";
    TenantType["FISHERMAN"] = "Fisherman";
    TenantType["TRAPPER"] = "Trapper";
})(TenantType || (TenantType = {}));
var Officer;
(function (Officer) {
    Officer["Reeve"] = "Reeve";
    Officer["Woodward"] = "Woodward";
    Officer["Herder"] = "Herder";
    Officer["Beadle"] = "Beadle";
    Officer["Glebe"] = "Glebe";
    Officer["FishWarden"] = "Fish Warden";
    Officer["ForestWarden"] = "Forest Warden";
})(Officer || (Officer = {}));
var _a, _b;


/***/ }),

/***/ "../../../../../src/app/manors/shared/services/manor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_manor_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/manor.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManorService = (function () {
    function ManorService() {
    }
    ManorService.prototype.getManor = function () {
        if (!this.manor) {
            this.reset();
        }
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(this.manor);
    };
    ManorService.prototype.updateManor = function (manor) {
        this.manor = manor;
    };
    ManorService.prototype.updatePoliciesProperty = function (p, v) {
        if (this.manor.policies[p]) {
            this.manor.policies[p] = v;
        }
    };
    ManorService.prototype.reset = function () {
        this.manor = __WEBPACK_IMPORTED_MODULE_1__models_manor_model__["b" /* ManorFactory */].getManor();
    };
    ManorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ManorService);
    return ManorService;
}());



/***/ }),

/***/ "../../../../../src/app/manors/shared/services/shared-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedDataService = (function () {
    function SharedDataService() {
        this.cropSummaries = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({
            acres: 0,
            labor: 0,
            kind: 0
        });
        this.crops = this.cropSummaries.asObservable();
        this.herdSummaries = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({
            acres: 0,
            labor: 0,
            kind: 0
        });
        this.herds = this.herdSummaries.asObservable();
        this.tenantSummaries = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({
            serf_acres: 0,
            free_acres: 0,
            labor: 0,
            size: 0,
            fees: 0,
            rent: 0
        });
        this.tenants = this.tenantSummaries.asObservable();
        this.fiefIncomeBehavior = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
        this.fiefIncome = this.fiefIncomeBehavior.asObservable();
        this.fiefLaborBehavior = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
        this.fiefLabor = this.fiefLaborBehavior.asObservable();
        this.householdKindBehavior = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
        this.householdKind = this.householdKindBehavior.asObservable();
        this.totalIncomeBehavior = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
        this.totalIncome = this.totalIncomeBehavior.asObservable();
        this.generatedInputBehavior = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](true);
        this.showGenerationInput = this.generatedInputBehavior.asObservable();
    }
    SharedDataService.prototype.reset = function () {
        this.setCropTotals({ acres: 0, labor: 0, kind: 0 });
        this.setHerdTotals({ acres: 0, labor: 0, kind: 0 });
        this.setTenantTotals({ serf_acres: 0, free_acres: 0, labor: 0, size: 0, fees: 0, rent: 0 });
        this.setFiefIncome(0);
        this.setFiefLabor(0);
        this.setHouseholdKind(0);
        this.setTotalIncome(0);
        this.setShowGenerationInput(true);
    };
    SharedDataService.prototype.setCropTotals = function (ct) {
        this.cropSummaries.next(ct);
    };
    SharedDataService.prototype.setHerdTotals = function (ht) {
        this.herdSummaries.next(ht);
    };
    SharedDataService.prototype.setTenantTotals = function (tt) {
        this.tenantSummaries.next(tt);
    };
    SharedDataService.prototype.setFiefIncome = function (d) {
        this.fiefIncomeBehavior.next(d);
    };
    SharedDataService.prototype.setFiefLabor = function (l) {
        this.fiefLaborBehavior.next(l);
    };
    SharedDataService.prototype.setHouseholdKind = function (d) {
        this.householdKindBehavior.next(d);
    };
    SharedDataService.prototype.setTotalIncome = function (d) {
        this.totalIncomeBehavior.next(d);
    };
    SharedDataService.prototype.setShowGenerationInput = function (b) {
        this.generatedInputBehavior.next(b);
    };
    SharedDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SharedDataService);
    return SharedDataService;
}());



/***/ }),

/***/ "../../../../../src/app/manors/shared/utilities.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = checkResultIndex;
/* harmony export (immutable) */ __webpack_exports__["a"] = beadleResultIndex;
/* harmony export (immutable) */ __webpack_exports__["c"] = checkSkill;
/* harmony export (immutable) */ __webpack_exports__["d"] = maxGrossAcres;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__ = __webpack_require__("../../../../../src/app/shared/generators/number-generator.ts");

var dice = new __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["b" /* NumberGenerator */]();
function checkResultIndex(cr) {
    switch (cr) {
        case __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["a" /* CheckResult */].CS:
            return 1.1;
        case __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["a" /* CheckResult */].MS:
            return 1;
        case __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["a" /* CheckResult */].MF:
            return 0.95;
        default:
            return 0.9;
    }
}
function beadleResultIndex(cr) {
    var beadleIndex = 0;
    switch (cr) {
        case __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["a" /* CheckResult */].CS:
            beadleIndex = 0.95;
            break;
        case __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["a" /* CheckResult */].MS:
            beadleIndex = 0.9;
            break;
        case __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["a" /* CheckResult */].MF:
            beadleIndex = 0.85;
            break;
        default:
            beadleIndex = 0.8;
            break;
    }
    return beadleIndex;
}
function checkSkill(eml) {
    var result = dice.rollDie(100);
    if (result <= eml || result < 5) {
        if (result % 5 === 0) {
            return __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["a" /* CheckResult */].CS;
        }
        return __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["a" /* CheckResult */].MS;
    }
    else {
        if (result % 5 === 0) {
            return __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["a" /* CheckResult */].CF;
        }
        return __WEBPACK_IMPORTED_MODULE_0__shared_generators_number_generator__["a" /* CheckResult */].MF;
    }
}
function maxGrossAcres(c) {
    var group = c.parent;
    var grossAcres;
    if (group) {
        grossAcres = group.controls['grossAcres'].value;
    }
    if (grossAcres && grossAcres < c.value) {
        return { maxGrossAcres: { valid: false } };
    }
    return null;
}


/***/ }),

/***/ "../../../../../src/app/manors/tenant-list/tenant-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row title-box bg-dark text-white px-3 py-2 mx-1\" *ngIf=\"!showGenerationInput\">\n  <div class=\"col\">\n    <strong>Manor Census ({{ manor.population.tenants.length}})</strong>\n  </div>\n  <div class=\"col text-right\">\n    <strong>{{manor.name}}</strong>\n  </div>\n</div>\n<div class=\"container-fluid mb-2\" *ngIf=\"!showGenerationInput\">\n  <table class=\"table table-striped table-sm\">\n    <thead class=\"thead-light\">\n    <tr>\n      <th class=\"font-weight-bold\">Occupation</th>\n      <th class=\"font-weight-bold text-center\" width=\"10%\">Size</th>\n      <th class=\"font-weight-bold text-center\" width=\"10%\">ML</th>\n      <th class=\"font-weight-bold text-center\" width=\"10%\">Serf</th>\n      <th class=\"font-weight-bold text-center\" width=\"10%\">Free</th>\n      <th class=\"font-weight-bold text-center\" width=\"10%\">Labor</th>\n      <th class=\"font-weight-bold text-center\" width=\"10%\">Rent</th>\n      <th class=\"font-weight-bold text-center\" width=\"10%\">Fees</th>\n      <th class=\"font-weight-bold\">Notes</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr app-tenant *ngFor=\"let tenant of manor.population.tenants\" [tenant]=\"tenant\">\n\n    </tr>\n    <tr class=\"table-summary\">\n      <td class=\"font-weight-bold text-right\">Totals:</td>\n      <td class=\"font-weight-bold text-center\">{{tenantTotals.size}}</td>\n      <td class=\"font-weight-bold text-center\"></td>\n      <td class=\"font-weight-bold text-center\">{{tenantTotals.serf_acres | number}}</td>\n      <td class=\"font-weight-bold text-center\">{{tenantTotals.free_acres | number}}</td>\n      <td class=\"font-weight-bold text-center\">{{tenantTotals.labor | number}}</td>\n      <td class=\"font-weight-bold text-center\">{{tenantTotals.rent | number}}d</td>\n      <td class=\"font-weight-bold text-center\">{{tenantTotals.fees | number}}d</td>\n      <td class=\"font-weight-bold text-center\"></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/manors/tenant-list/tenant-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manors/tenant-list/tenant-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_manor_model__ = __webpack_require__("../../../../../src/app/manors/shared/models/manor.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_data_service__ = __webpack_require__("../../../../../src/app/manors/shared/services/shared-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TenantListComponent = (function () {
    function TenantListComponent(dataService) {
        this.dataService = dataService;
    }
    TenantListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.tenants.subscribe(function (tt) { return _this.tenantTotals = tt; });
        this.dataService.showGenerationInput.subscribe(function (g) { return _this.showGenerationInput = g; });
    };
    TenantListComponent.prototype.updateTotals = function () {
        var tenantTotals = { serf_acres: 0, free_acres: 0, labor: 0, size: 0, fees: 0, rent: 0 };
        for (var _i = 0, _a = this.manor.population.tenants; _i < _a.length; _i++) {
            var tenant = _a[_i];
            tenantTotals.serf_acres += tenant.serf_acres;
            tenantTotals.free_acres += tenant.free_acres;
            tenantTotals.size += tenant.size;
            tenantTotals.labor += tenant.labor_days;
            tenantTotals.fees += tenant.fees;
            tenantTotals.rent += tenant.rent;
        }
        this.dataService.setTenantTotals(tenantTotals);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('manor'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_models_manor_model__["a" /* Manor */])
    ], TenantListComponent.prototype, "manor", void 0);
    TenantListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tenant-list',
            template: __webpack_require__("../../../../../src/app/manors/tenant-list/tenant-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manors/tenant-list/tenant-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_shared_data_service__["a" /* SharedDataService */]])
    ], TenantListComponent);
    return TenantListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manors/tenant/tenant.component.html":
/***/ (function(module, exports) {

module.exports = "<td>{{title()}}</td>\n<td class=\"text-center\">{{tenant.size}}</td>\n<td class=\"text-center\">{{tenant.ml}}</td>\n<td class=\"text-center\">{{tenant.serf_acres}}</td>\n<td class=\"text-center\">{{tenant.free_acres}}</td>\n<td class=\"text-center\">{{tenant.labor_days}}</td>\n<td class=\"text-center\">{{tenant.rent}}</td>\n<td class=\"text-center\">{{tenant.fees}}</td>\n<td>{{tenant.notes.join('. ')}}</td>\n"

/***/ }),

/***/ "../../../../../src/app/manors/tenant/tenant.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manors/tenant/tenant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TenantComponent = (function () {
    function TenantComponent() {
    }
    TenantComponent.prototype.ngOnInit = function () {
    };
    TenantComponent.prototype.title = function () {
        var title = 'Unknown';
        if (this.tenant.military !== null) {
            title = 'Yeoman: ' + this.tenant.military;
        }
        else if (this.tenant.craft !== null) {
            title = this.tenant.craft;
        }
        else if (this.tenant.occupation !== null) {
            title = this.tenant.occupation;
        }
        title = this.tenant.office !== null ? title + '/' + this.tenant.office : title;
        return title;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tenant'),
        __metadata("design:type", Object)
    ], TenantComponent.prototype, "tenant", void 0);
    TenantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-tenant]',
            template: __webpack_require__("../../../../../src/app/manors/tenant/tenant.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manors/tenant/tenant.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TenantComponent);
    return TenantComponent;
}());



/***/ }),

/***/ "../../../../../src/app/names/name-generator/name-generator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container page\">\n  <h1>Random Harnic Names</h1>\n  <p>This is a simple name generator that pulls from lists medeival names listed in england ~1400-1600. I will\n    eventulaly expand this to include options for Ivinian, Jarin and other names but for now this should be suitable for\n    most feudal kingdom names.</p>\n  <div class=\"row\">\n    <div class=\"col-xs-10 col-sm-10 col-md-6 mt-1\">\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Gender\">\n        <button type=\"button\" class=\"btn btn-secondary btn-outline-dark\"\n                [ngClass]=\"selectedGender === gender.FEMALE ? 'active btn-dark' : null\"\n                (click)=\"onGenderSelect(gender.FEMALE)\"\n        >Female\n        </button>\n        <button type=\"button\" class=\"btn btn-secondary btn-outline-dark\"\n                [ngClass]=\"selectedGender === gender.MALE ? 'active btn-dark' : null\"\n                (click)=\"onGenderSelect(gender.MALE)\"\n        >Male\n        </button>\n      </div>\n    </div>\n    <div class=\"col-xs-10 col-sm-10 col-md-6 mt-1\">\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Culture\">\n        <button type=\"button\" class=\"btn btn-secondary btn-outline-dark\" (click)=\"onCultureSelect(culture.ENGLISH)\"\n                [ngClass]=\"selectedCulture === culture.ENGLISH ? 'active btn-dark' : null\">Feudal\n        </button>\n        <button type=\"button\" class=\"btn btn-secondary btn-outline-dark\" (click)=\"onCultureSelect(culture.WELSH)\"\n                [ngClass]=\"selectedCulture === culture.WELSH ? 'active btn-dark' : null\">Jarin\n        </button>\n        <button type=\"button\" class=\"btn btn-secondary btn-outline-dark\" (click)=\"onCultureSelect(culture.SAXON)\"\n                [ngClass]=\"selectedCulture === culture.SAXON ? 'active btn-dark' : null\">Pharic\n        </button>\n        <button type=\"button\" class=\"btn btn-secondary btn-outline-dark\" (click)=\"onCultureSelect(culture.SCANDINAVIAN)\"\n                [ngClass]=\"selectedCulture === culture.SCANDINAVIAN ? 'active btn-dark' : null\">Ivinian\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-10 col-sm-10 col-md-6\">\n      <h6 class=\"mt-2\">Select Gender or Culture to Generate</h6>\n      <ul>\n        <li *ngFor=\"let name of generatedNames\">{{name}}</li>\n      </ul>\n      <app-loading-spinner *ngIf=\"showSpinner\" [msg]=\"'Loading names ...'\"></app-loading-spinner>\n    </div>\n    <div class=\"col-xs-10 col-sm-10 col-md-6\">\n      <ul>\n        <li><strong>Feudal:</strong> Includes most common harnic names among the main kingdoms of Harn and the Thardic\n          Republic. In this generator this includes lists of names and surnames derived from cencus in England between\n          the 15th and 16th centry.\n        </li>\n        <li><strong>Jarin:</strong> Includes the older tribal/clannish cultures on Harn. Somtimes these names appear in\n          the Feudal Kingdoms, particularly in families on the frontier. These names are also common in Harnic Barbarian\n          Jarin clans. In this generator this draws from a list of Welsh and Celtic names from the mid to early middle\n          ages.\n        </li>\n        <li><strong>Pharic:</strong> Includes various barbarian groups of Pharic origin on Harn such as the Chelni,\n          Gozyda, Hodiri, Kath, Pagaelin and Tulwyn. In this generator this draws from a list of Saxon names from the\n          early-mid middle ages.\n        </li>\n        <li><strong>Ivanian:</strong> Includes anyone of Ivanian descent, includin the occupying clans in Orbaal. In th\n          is generator this includes list of Scandinavian names from the mid to late middle ages.\n        </li>\n        <li><strong>Orbaleese (Not Implemented):</strong> Includes the Orbaleese Jarin people in northern Harn and some\n          northern Harnic Barbarian clans. In this generator this includes list of Scots and Celtic names.\n        </li>\n      </ul>\n      <h5>Note on Surnames</h5>\n      <p>Cultures that return only a given name don't have a deep tradition of lasting family surnames. This is common\n        in most of the regions of Harn outside the main Feudal Kingdoms. Instead they often use descriptive, bynames or\n        generational names such as 'the Red Beard' or 'daugher/son of' but even these practices vary greatly between\n        groups. Some may use a clan name, others may have multiple descriptive names. Often in the Feudal Kingdoms,\n        outsiders are referred to by their ehtnic group such as 'Wulfgar the Ivinian' or 'Grogar the Hodiri'.</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/names/name-generator/name-generator.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/names/name-generator/name-generator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameGeneratorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_names_service__ = __webpack_require__("../../../../../src/app/names/shared/names.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_gender_enum__ = __webpack_require__("../../../../../src/app/names/shared/gender.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_culture_enum__ = __webpack_require__("../../../../../src/app/names/shared/culture.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NameGeneratorComponent = (function () {
    function NameGeneratorComponent(namesService) {
        this.namesService = namesService;
        this.gender = __WEBPACK_IMPORTED_MODULE_2__shared_gender_enum__["a" /* Gender */];
        this.culture = __WEBPACK_IMPORTED_MODULE_3__shared_culture_enum__["a" /* Culture */];
    }
    NameGeneratorComponent.prototype.ngOnInit = function () {
        this.showSpinner = true;
        this.generatedNames = [];
        this.selectedGender = __WEBPACK_IMPORTED_MODULE_2__shared_gender_enum__["a" /* Gender */].FEMALE;
        this.selectedCulture = __WEBPACK_IMPORTED_MODULE_3__shared_culture_enum__["a" /* Culture */].ENGLISH;
        this.loadNames();
    };
    NameGeneratorComponent.prototype.loadNames = function () {
        var _this = this;
        this.showSpinner = true;
        switch (this.selectedCulture) {
            case __WEBPACK_IMPORTED_MODULE_3__shared_culture_enum__["a" /* Culture */].ENGLISH:
                this.namesService.getEnglishNames().subscribe(function (nameData) { _this.nameData = nameData; }, function (err) { return console.log(err); }, function () {
                    _this.showSpinner = false;
                    _this.generateRandomNames(10);
                });
                break;
            case __WEBPACK_IMPORTED_MODULE_3__shared_culture_enum__["a" /* Culture */].WELSH:
                this.namesService.getWelshNames().subscribe(function (nameData) { return _this.nameData = nameData; }, function (err) { return console.log(err); }, function () {
                    _this.showSpinner = false;
                    _this.generateRandomNames(10);
                });
                break;
            case __WEBPACK_IMPORTED_MODULE_3__shared_culture_enum__["a" /* Culture */].SAXON:
                this.namesService.getSaxonNames().subscribe(function (nameData) { return _this.nameData = nameData; }, function (err) { return console.log(err); }, function () {
                    _this.showSpinner = false;
                    _this.generateRandomNames(10);
                });
                break;
            case __WEBPACK_IMPORTED_MODULE_3__shared_culture_enum__["a" /* Culture */].SCANDINAVIAN:
                this.namesService.getScandinavianNames().subscribe(function (nameData) { return _this.nameData = nameData; }, function (err) { return console.log(err); }, function () {
                    _this.showSpinner = false;
                    _this.generateRandomNames(10);
                });
                break;
            default:
                this.nameData = { givenNames: { male: [], female: [] }, surnames: [] };
                break;
        }
    };
    NameGeneratorComponent.prototype.onGenderSelect = function (g) {
        this.selectedGender = g;
        this.generateRandomNames(10);
    };
    NameGeneratorComponent.prototype.onCultureSelect = function (c) {
        if (this.selectedCulture !== c) {
            this.selectedCulture = c;
            this.loadNames();
        }
        else {
            this.generateRandomNames(10);
        }
    };
    NameGeneratorComponent.prototype.generateRandomNames = function (n) {
        n = Math.min(n, this.numberNames());
        var result = [];
        var gn = (this.selectedGender === __WEBPACK_IMPORTED_MODULE_2__shared_gender_enum__["a" /* Gender */].FEMALE) ? this.getFemaleFirstNames(n) : this.getMaleFirstNames(n);
        var sn = this.getRandomSurnames(n);
        for (var i = 0; i < n; i++) {
            if (gn.length < i) {
                break;
            }
            var name_1 = gn[i];
            if (sn.length > i) {
                name_1 += ' ' + sn[i];
            }
            result.push(name_1);
        }
        this.generatedNames = result;
    };
    NameGeneratorComponent.prototype.numberNames = function () {
        var givenNameLength = 0;
        if (this.selectedGender === __WEBPACK_IMPORTED_MODULE_2__shared_gender_enum__["a" /* Gender */].FEMALE) {
            givenNameLength = this.nameData.givenNames.female.length;
        }
        else {
            givenNameLength = this.nameData.givenNames.male.length;
        }
        if (this.nameData.surnames.length === 0) {
            return givenNameLength;
        }
        return Math.max(this.nameData.surnames.length, givenNameLength);
    };
    NameGeneratorComponent.prototype.getMaleFirstNames = function (n) {
        var result = [];
        for (var i = 0; i < n; i++) {
            result.push(this.nameData.givenNames.male[Math.floor(Math.random() * this.nameData.givenNames.male.length)]);
        }
        return result;
    };
    NameGeneratorComponent.prototype.getFemaleFirstNames = function (n) {
        var result = [];
        for (var i = 0; i < n; i++) {
            result.push(this.nameData.givenNames.female[Math.floor(Math.random() * this.nameData.givenNames.female.length)]);
        }
        return result;
    };
    NameGeneratorComponent.prototype.getRandomSurnames = function (n) {
        if (n === void 0) { n = 1; }
        var result = [];
        if (this.nameData.surnames.length > 0) {
            for (var i = 0; i < n; i++) {
                result.push(this.nameData.surnames[Math.floor(Math.random() * this.nameData.surnames.length)]);
            }
        }
        return result;
    };
    NameGeneratorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-name-generator',
            template: __webpack_require__("../../../../../src/app/names/name-generator/name-generator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/names/name-generator/name-generator.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_names_service__["a" /* NamesService */]])
    ], NameGeneratorComponent);
    return NameGeneratorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/names/names.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NamesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__name_generator_name_generator_component__ = __webpack_require__("../../../../../src/app/names/name-generator/name-generator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_names_service__ = __webpack_require__("../../../../../src/app/names/shared/names.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NamesModule = (function () {
    function NamesModule() {
    }
    NamesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__name_generator_name_generator_component__["a" /* NameGeneratorComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__shared_names_service__["a" /* NamesService */]]
        })
    ], NamesModule);
    return NamesModule;
}());



/***/ }),

/***/ "../../../../../src/app/names/shared/culture.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Culture; });
var Culture;
(function (Culture) {
    Culture[Culture["ENGLISH"] = 0] = "ENGLISH";
    Culture[Culture["WELSH"] = 1] = "WELSH";
    Culture[Culture["SAXON"] = 2] = "SAXON";
    Culture[Culture["SCANDINAVIAN"] = 3] = "SCANDINAVIAN";
})(Culture || (Culture = {}));


/***/ }),

/***/ "../../../../../src/app/names/shared/gender.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gender; });
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender || (Gender = {}));


/***/ }),

/***/ "../../../../../src/app/names/shared/names.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NamesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NamesService = (function () {
    function NamesService(http) {
        this.http = http;
    }
    NamesService.prototype.getEnglishNames = function () {
        return this.getNames('assets/data/EnglishNames.data.json');
    };
    NamesService.prototype.getWelshNames = function () {
        return this.getNames('assets/data/WelshNames.data.json');
    };
    NamesService.prototype.getSaxonNames = function () {
        return this.getNames('assets/data/SaxonNames.data.json');
    };
    NamesService.prototype.getScandinavianNames = function () {
        return this.getNames('assets/data/ScandinavianNames.data.json');
    };
    /**
     * Loads name data from the named file.
     * @param {string} f string of namedata json file
     */
    NamesService.prototype.getNames = function (f) {
        this.nameData = this.http.get(f);
        return this.nameData;
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    NamesService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    NamesService.prototype.log = function (message) {
        console.log('Names Service: ' + message);
    };
    NamesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NamesService);
    return NamesService;
}());



/***/ }),

/***/ "../../../../../src/app/prices/price-list/price-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid page\">\n  <h2>Harnic Price List</h2>\n  <div>A growing list of {{priceList.length}} items sold across Harn.  Invididual prices may vary based on supply and demand, or the fiat of local monpolies. Some modifications by me but data largely derived from several community efforts aggregated and modified further in <a href=\"https://www.lythia.com/game_aides/comprehensive-pricelist/\" target=\"_blank\">Leitchy's Comprehensive Price list</a> on <a href=\"https://www.lythia.com\" target=\"_blank\">Lythia.com</a></div>\n  <app-loading-spinner *ngIf=\"!pricesReady\" [msg]=\"'Loading Prices ...'\"></app-loading-spinner>\n\n  <div class=\"form-inline\" *ngIf=\"pricesReady\">\n    <div class=\"input-group mb-2 mr-sm-2\">\n      <label class=\"my-1 mr-2\" for=\"itemSearchInput\">Search: </label>\n      <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" id=\"itemSearchInput\" [formControl]=\"searchField\" placeholder=\"Type an item name or category ...\">\n    </div>\n    <div class=\"input-group mb-2 mr-sm-2\">\n      <label class=\"my-1 mr-2\">Vendor: </label>\n      <select class=\"custom-select\" class=\"condensed list-group-item\" id=\"vendorSelect\" (change)=\"onVendorSelect($event.target.value)\">\n        <option value=\"\">Any</option>\n        <option *ngFor=\"let vendor of vendors\" value=\"{{vendor}}\">{{vendor | titlecase}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-header title-box bg-dark text-light px-3 py-3 mx-1 d-flex w-100 justify-content-between row\">\n          <h4 class=\"pb-0 mb-0 col-8\">Price List ({{filteredPrices.length}})</h4>\n          <div class=\"align-self-end d-flex col-4 m-0 p-0 justify-content-end btn-lg\" *ngIf=\"currentMaxPages() > 1\">\n            <div><a (click)=\"onPageBackClick()\" class=\"px-2\"><i class=\"far fa-caret-square-left large\"></i></a></div>\n            <div>Page {{currentPage}} of {{currentMaxPages()}}</div>\n            <div><a (click)=\"onPageForwardClick()\" class=\"px-2 btn-lg\"><i class=\"far fa-caret-square-right\"></i></a></div>\n          </div>\n        </div>\n        <div class=\"card-body pt-1\">\n          <div class=\"list-group-item list-group-item-action flex-column p-0 py-1\" *ngFor=\"let item of pageList()\">\n            <div class=\"d-flex w-100 justify-content-between row m-0\"  draggable [dragScope]=\"'cart'\" [dragData]=\"item.id\">\n              <div class=\"align-items-start col-10\">\n                <h5>{{item.name | titlecase}}</h5>\n                <div><strong>{{item.vendor | titlecase}}</strong><span *ngIf=\"item.notes\">, {{item.notes}}</span></div>\n              </div>\n              <div class=\"align-items-end col-2 p-0 m-0\">\n                <div><span *ngIf=\"item.price\">{{item.price}} <small>d</small></span></div>\n                <div class=\"text-muted\"><span *ngIf=\"item.weight\">{{item.weight}} <small>lbs</small></span></div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"list-group-item list-group-item-action flex-column\" *ngIf=\"filteredPrices.length < 1\">\n            <div class=\"d-flex w-100 justify-content-between text-center\">\n              <div *ngIf=\"isFilterEmpty; then searchprompt else noresults\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"col\">\n      <div class=\"card fixed\">\n        <div class=\"card-header title-box bg-dark text-light py-3\">\n          <h4 class=\"m-0 p-0\">Purchases</h4>\n        </div>\n        <div class=\"card-body pt-1\" droppable [dropScope]=\"'cart'\" (onDrop)=\"onItemDrop($event)\">\n\n          <div *ngIf=\"cartList < 1\" class=\"text-center\">\n            <h4><i class=\"fas fa-caret-square-down\"></i> Drag and Drop armor here</h4>\n          </div>\n\n          <div class=\"list-group-item list-group-item-action flex-column p-0 py-1\" *ngFor=\"let cartItem of cartList\">\n            <div class=\"d-flex w-100 justify-content-between row m-0\" draggable [dragScope]=\"'trash'\" [dragData]=\"cartItem.id\">\n              <div class=\"align-items-start col-10\">\n                <h5>{{cartItem.name | titlecase}}</h5>\n                <div>\n                  <strong>{{cartItem.totalPrice()}}<small>d</small></strong>;\n                  <strong>{{cartItem.totalWeight()}} <small>lbs</small></strong>\n                </div>\n              </div>\n              <div class=\"align-items-end col-2 p-0 m-0\">\n                <div class=\"p-1 text-center\">#:\n                  <a (click)=\"cartItem.removeOne()\"><i class=\"far fa-minus-square\"></i></a>\n                  {{cartItem.quantity}}\n                  <a (click)=\"cartItem.addOne()\"><i class=\"far fa-plus-square\"></i></a>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"d-flex w-100 justify-content-between row m-0 pt-2\">\n            <div><strong>Weight: {{totalWeight()}} <small>lbs</small></strong></div>\n            <div><strong>Price: {{totalPrice()}} <small>d</small></strong></div>\n          </div>\n        </div>\n\n        <div class=\"card-footer pb-3 pt-3\" droppable [dropScope]=\"'trash'\" (onDrop)=\"onTrashDrop($event)\">\n          <h5 [hidden]=\"cartList < 1\"><i class=\"fas fa-trash\"></i> Drop here to remove</h5>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n</div>\n\n<ng-template #searchprompt><h5>Enter a search term or select a vendor to display prices</h5></ng-template>\n<ng-template #noresults><h5>No items found.</h5></ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/prices/price-list/price-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fixed {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 3.0rem;\n  z-index: 999; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/prices/price-list/price-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_price_listing_model__ = __webpack_require__("../../../../../src/app/prices/shared/price-listing.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_price_service__ = __webpack_require__("../../../../../src/app/prices/shared/price.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PriceListComponent = (function () {
    function PriceListComponent(priceService) {
        this.priceService = priceService;
    }
    PriceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clearFilters();
        this.vendors = [];
        this.pricesReady = false;
        this.searchField = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.filteredPrices = [];
        this.cartList = [];
        this.currentVendor = '';
        this.currentSearchTerm = '';
        this.currentPage = 1;
        this.itemsPerPage = 20;
        this.searchField.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(function (term) {
            _this.onSearchPrices(term);
        });
        this.priceService.priceList.subscribe(function (priceList) { return _this.priceList = priceList; }, function (err) { return console.log(err); }, function () {
            _this.sortPrices();
            _this.parseVendors();
            _this.applyFilters();
            _this.pricesReady = true;
        });
        this.parseVendors();
    };
    PriceListComponent.prototype.localPrices = function (price) {
        var priceLabel = [];
        if (price / 240 > 1) {
            priceLabel.push({ coin: 'L', amount: Math.floor(price / 240) });
            price = price % 240;
        }
        if (price >= 1) {
            priceLabel.push({ coin: 'd', amount: Math.floor(price) });
            price = price % 1;
        }
        if (price > 0) {
            priceLabel.push({ coin: 'f', amount: price * 4 });
        }
        return priceLabel;
    };
    // Paging
    PriceListComponent.prototype.pageList = function () {
        var indexStart = this.currentPage - 1;
        return this.filteredPrices.slice(indexStart * this.itemsPerPage, (indexStart + 1) * this.itemsPerPage);
    };
    PriceListComponent.prototype.onPageForwardClick = function () {
        this.currentPage = __WEBPACK_IMPORTED_MODULE_2_lodash__["clamp"](this.currentPage + 1, 1, this.currentMaxPages());
    };
    PriceListComponent.prototype.onPageBackClick = function () {
        this.currentPage = __WEBPACK_IMPORTED_MODULE_2_lodash__["clamp"](this.currentPage - 1, 1, this.currentMaxPages());
    };
    PriceListComponent.prototype.currentMaxPages = function () {
        return Math.ceil(this.filteredPrices.length / this.itemsPerPage);
    };
    // Searching and Sorting
    PriceListComponent.prototype.onSearchPrices = function (term) {
        this.currentSearchTerm = term;
        this.filterIncludes('name', term);
    };
    PriceListComponent.prototype.onVendorSelect = function (rule) {
        this.currentVendor = rule;
        this.filterExact('vendor', rule);
    };
    PriceListComponent.prototype.sortPrices = function () {
        this.priceList = __WEBPACK_IMPORTED_MODULE_2_lodash__["sortBy"](this.priceList, ['vendor', 'name']);
    };
    PriceListComponent.prototype.parseVendors = function () {
        for (var _i = 0, _a = this.priceList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (this.vendors.indexOf(item.vendor) < 0) {
                this.vendors.push(item.vendor);
            }
            this.vendors = this.vendors.sort();
        }
    };
    // Filtering prices
    PriceListComponent.prototype.applyFilters = function () {
        this.currentPage = 1;
        if (this.isFilterEmpty()) {
            this.filteredPrices = this.priceList;
        }
        else {
            this.filteredPrices = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](this.priceList, __WEBPACK_IMPORTED_MODULE_2_lodash__["conforms"](this.filters));
        }
    };
    PriceListComponent.prototype.filterExact = function (property, rule) {
        if (this.filters[property] !== rule) {
            if (!rule) {
                this.removeFilter(property);
            }
            else {
                this.filters[property] = function (val) { return val === rule; };
            }
            this.applyFilters();
        }
    };
    PriceListComponent.prototype.filterIncludes = function (property, rule) {
        if (this.filters[property] !== rule) {
            if (!rule) {
                this.removeFilter(property);
            }
            else {
                this.filters[property] = function (val) { return val.includes(rule.toLowerCase()); };
            }
            this.applyFilters();
        }
    };
    PriceListComponent.prototype.removeFilter = function (property) {
        delete this.filters[property];
    };
    PriceListComponent.prototype.clearFilters = function () {
        this.filters = {};
    };
    PriceListComponent.prototype.isFilterEmpty = function () {
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.filters);
    };
    // Drag and Drop
    PriceListComponent.prototype.onItemDrop = function (e) {
        var data = e.dragData;
        if (data) {
            this.purchaseItem(data);
        }
    };
    PriceListComponent.prototype.onTrashDrop = function (e) {
        var data = e.dragData;
        if (data) {
            this.deleteItem(data);
        }
    };
    PriceListComponent.prototype.purchaseItem = function (itemId) {
        var item = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](this.cartList, { id: itemId });
        if (item) {
            item.addOne();
        }
        else {
            item = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](this.priceList, { id: itemId });
            this.cartList.push(new __WEBPACK_IMPORTED_MODULE_5__shared_price_listing_model__["a" /* CartItem */](item));
        }
    };
    PriceListComponent.prototype.deleteItem = function (itemId) {
        var idx = this.cartList.indexOf(__WEBPACK_IMPORTED_MODULE_2_lodash__["find"](this.cartList, { id: itemId }));
        if (idx > -1) {
            this.cartList.splice(idx, 1);
        }
    };
    PriceListComponent.prototype.totalWeight = function () {
        var weight = 0;
        for (var _i = 0, _a = this.cartList; _i < _a.length; _i++) {
            var item = _a[_i];
            weight += item.totalWeight();
        }
        return weight;
    };
    PriceListComponent.prototype.totalPrice = function () {
        var price = 0;
        for (var _i = 0, _a = this.cartList; _i < _a.length; _i++) {
            var item = _a[_i];
            price += item.totalPrice();
        }
        return price;
    };
    PriceListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-price-list',
            template: __webpack_require__("../../../../../src/app/prices/price-list/price-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/prices/price-list/price-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__shared_price_service__["a" /* PriceService */]])
    ], PriceListComponent);
    return PriceListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/prices/prices.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_drag_drop__ = __webpack_require__("../../../../ng-drag-drop/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_drag_drop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_drag_drop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_price_service__ = __webpack_require__("../../../../../src/app/prices/shared/price.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__price_list_price_list_component__ = __webpack_require__("../../../../../src/app/prices/price-list/price-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PricesModule = (function () {
    function PricesModule() {
    }
    PricesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng_drag_drop__["NgDragDropModule"].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__price_list_price_list_component__["a" /* PriceListComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__shared_price_service__["a" /* PriceService */]]
        })
    ], PricesModule);
    return PricesModule;
}());



/***/ }),

/***/ "../../../../../src/app/prices/shared/price-listing.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItem; });
var CartItem = (function () {
    function CartItem(init) {
        Object.assign(this, init);
        this._quantity = 1;
    }
    CartItem.prototype.addOne = function () {
        this._quantity += 1;
    };
    CartItem.prototype.removeOne = function () {
        this._quantity = this.quantity - 1 < 1 ? 1 : this.quantity - 1;
    };
    Object.defineProperty(CartItem.prototype, "quantity", {
        get: function () {
            return this._quantity;
        },
        enumerable: true,
        configurable: true
    });
    CartItem.prototype.totalPrice = function () {
        if (!this.price) {
            return 0;
        }
        return this.price * this.quantity;
    };
    CartItem.prototype.totalWeight = function () {
        if (!this.weight) {
            return 0;
        }
        return this.weight * this.quantity;
    };
    return CartItem;
}());



/***/ }),

/***/ "../../../../../src/app/prices/shared/price.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PriceService = (function () {
    function PriceService(http) {
        this.http = http;
        this.loadPrices();
    }
    PriceService.prototype.loadPrices = function () {
        this.priceList = this.http.get('assets/data/expandedprice.data.json');
    };
    PriceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PriceService);
    return PriceService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/generators/number-generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NumberGenerator; });
var CheckResult;
(function (CheckResult) {
    CheckResult[CheckResult["CF"] = 0] = "CF";
    CheckResult[CheckResult["MF"] = 1] = "MF";
    CheckResult[CheckResult["MS"] = 2] = "MS";
    CheckResult[CheckResult["CS"] = 3] = "CS";
})(CheckResult || (CheckResult = {}));
var NumberGenerator = (function () {
    function NumberGenerator() {
    }
    NumberGenerator.prototype.rollDie = function (sides) {
        return this.numberBetween(1, sides);
    };
    NumberGenerator.prototype.rollGaussianDie = function (sides) {
        return this.gaussianNumberBetween(1, sides);
    };
    NumberGenerator.prototype.rollDice = function (sides, times) {
        var retVal = new Array();
        for (var n = 0; n < times; n++) {
            retVal.push(this.rollDie(sides));
        }
        return retVal;
    };
    NumberGenerator.prototype.numberBetween = function (min, max) {
        return this.numBetween(Math.random(), min, max);
    };
    /**
     * Returns the sum of times number of sides dice.
     * @param sides type of dice to roll
     * @param times number of dice to roll
     */
    NumberGenerator.prototype.rollTotal = function (sides, times) {
        var roll = this.rollDice(sides, times);
        return roll.reduce(function (a, b) { return a + b; });
    };
    /**
     * Similar to 'Success Dice', rolls 6ds and counts number above a threshold.
     */
    NumberGenerator.prototype.rollThresholds = function (times, threshold) {
        var count = 0;
        for (var i = 0; i < times; i++) {
            count += this.rollDie(6) > threshold ? 1 : 0;
        }
        return count;
    };
    NumberGenerator.prototype.checkResult = function (eml) {
        var result = this.rollDie(100);
        if (result <= eml) {
            if (result % 5 === 0) {
                return CheckResult.CS;
            }
            return CheckResult.MS;
        }
        else {
            if (result % 5 === 0) {
                return CheckResult.CF;
            }
            return CheckResult.MF;
        }
    };
    NumberGenerator.prototype.gaussianNumberBetween = function (min, max) {
        var half = (max - min) / 2;
        return Math.round(min + half + half * this.gaussianNumber());
    };
    NumberGenerator.prototype.gaussianNumber = function () {
        while (true) {
            var r = Math.sqrt(-2 * Math.log(Math.random()));
            var t = 2 * Math.PI * Math.random();
            var x = r * Math.cos(t) / 2.8;
            if (x > -1 && x < 1) {
                return x;
            }
        }
    };
    NumberGenerator.prototype.numBetween = function (source, min, max) {
        min = Number(min);
        max = Number(max);
        return Math.floor(source * (max - min + 1)) + min;
    };
    return NumberGenerator;
}());



/***/ }),

/***/ "../../../../../src/app/travel/distance/distance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container page\">\n  <h1>Distance & Travel Tool</h1>\n  <p>This is used to calculate various distances and travel rates in Harn.</p>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-1\">\n      <div class=\"card\">\n        <div class=\"card-header\"><h4>Distance Conversion</h4></div>\n        <div class=\"card-body\" [formGroup]=\"distanceForm\">\n          <div class=\"form-group row\">\n            <label class=\"col-sm-4 col-form-label\">Leagues</label>\n            <div class=\"col\">\n              <input type=\"number\" class=\"form-control\" (input)=\"onLeagueChange()\" formControlName=\"leagues\" name=\"leagues\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-4 col-form-label\">Map Hexes</label>\n            <div class=\"col\">\n              <input type=\"number\" class=\"form-control\" (input)=\"onHexesChange()\" formControlName=\"hexes\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-4 col-form-label\">Miles<small>*</small></label>\n            <div class=\"col\">\n              <input type=\"number\" class=\"form-control\" (input)=\"onMilesChange()\" formControlName=\"miles\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-4 col-form-label\">Kilometers<small>*</small></label>\n            <div class=\"col\">\n              <input type=\"number\" class=\"form-control\" (input)=\"onKilometersChange()\" formControlName=\"km\">\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer\"><small>* Miles & Kilometers use round conversion numbers for consistency with Harn World.</small></div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8 mt-1\">\n      <app-movement [distances]=\"distanceForm\"></app-movement>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/travel/distance/distance.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/travel/distance/distance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DistanceComponent = (function () {
    function DistanceComponent(fb) {
        this.fb = fb;
    }
    DistanceComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.onLeagueChange();
    };
    DistanceComponent.prototype.createForm = function () {
        this.distanceForm = this.fb.group({
            leagues: [5, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)]],
            hexes: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)]],
            miles: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)]],
            km: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)]]
        });
    };
    DistanceComponent.prototype.onLeagueChange = function () {
        if (this.distanceForm.valid) {
            this.distanceForm.controls['hexes'].setValue(this._round(this.distanceForm.controls['leagues'].value * .2));
            this.distanceForm.controls['miles'].setValue(this._round(this.distanceForm.controls['leagues'].value * 2.5));
            this.distanceForm.controls['km'].setValue(this._round(this.distanceForm.controls['leagues'].value * 4));
        }
    };
    DistanceComponent.prototype.onHexesChange = function () {
        if (this.distanceForm.valid) {
            this.distanceForm.controls['leagues'].setValue(this._round(this.distanceForm.controls['hexes'].value * 5));
            this.distanceForm.controls['miles'].setValue(this._round(this.distanceForm.controls['hexes'].value * 12.5));
            this.distanceForm.controls['km'].setValue(this._round(this.distanceForm.controls['hexes'].value * 20));
        }
    };
    DistanceComponent.prototype.onMilesChange = function () {
        if (this.distanceForm.valid) {
            this.distanceForm.controls['leagues'].setValue(this._round(this.distanceForm.controls['miles'].value * 0.4));
            this.distanceForm.controls['hexes'].setValue(this._round(this.distanceForm.controls['miles'].value * 0.08));
            this.distanceForm.controls['km'].setValue(this._round(this.distanceForm.controls['miles'].value * 1.6));
        }
    };
    DistanceComponent.prototype.onKilometersChange = function () {
        if (this.distanceForm.valid) {
            this.distanceForm.controls['leagues'].setValue(this._round(this.distanceForm.controls['km'].value * 0.25));
            this.distanceForm.controls['hexes'].setValue(this._round(this.distanceForm.controls['km'].value * 0.05));
            this.distanceForm.controls['miles'].setValue(this._round(this.distanceForm.controls['km'].value * 0.625));
        }
    };
    DistanceComponent.prototype._round = function (n) {
        return parseFloat(n.toFixed(2));
    };
    DistanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-distance',
            template: __webpack_require__("../../../../../src/app/travel/distance/distance.component.html"),
            styles: [__webpack_require__("../../../../../src/app/travel/distance/distance.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], DistanceComponent);
    return DistanceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/travel/movement/movement.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3>Travel Times & Rates</h3>\n  </div>\n  <div class=\"card-body\">\n    <h3>Conditions</h3>\n    <div class=\"row mb-4\">\n      <div class=\"col\">\n        <div class=\"form-check\">\n          <input class=\"form-check-input form-check-input-condensed\" type=\"checkbox\"\n                 (click)=\"onSnowClick('lightSnow')\"\n                 [(ngModel)]=\"conditions.ground.lightSnow\"\n                 [checked]=\"conditions.ground.lightSnow\"\n          >\n          <label class=\"form-check-label\">Light Snow</label>\n        </div>\n        <div class=\"form-check\">\n          <input class=\"form-check-input form-check-input-condensed\" type=\"checkbox\"\n                 (click)=\"onSnowClick('snow')\"\n                 [(ngModel)]=\"conditions.ground.snow\"\n                 [checked]=\"conditions.ground.snow\"\n          >\n          <label class=\"form-check-label\">Moderate Snow</label>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"form-check\">\n          <input class=\"form-check-input form-check-input-condensed\" type=\"checkbox\"\n                 (click)=\"onSnowClick('deepSnow')\"\n                 [(ngModel)]=\"conditions.ground.deepSnow\"\n                 [checked]=\"conditions.ground.deepSnow\"\n          >\n          <label class=\"form-check-label\">Deep Snow</label>\n        </div>\n        <div class=\"form-check\">\n          <input class=\"form-check-input form-check-input-condensed\" type=\"checkbox\"\n                 [(ngModel)]=\"conditions.ground.mud\"\n                 [checked]=\"conditions.ground.mud\"\n          >\n          <label class=\"form-check-label\">Mud</label>\n        </div>\n      </div>\n      <div class=\"col\">\n\n        <div class=\"form-check\">\n          <input class=\"form-check-input form-check-input-condensed\" type=\"checkbox\"\n                 (click)=\"onRainClick()\"\n                 [(ngModel)]=\"conditions.weather.rain\"\n                 [checked]=\"conditions.weather.rain\"\n          >\n          <label class=\"form-check-label\">Rain</label>\n        </div>\n        <div class=\"form-check\">\n          <input class=\"form-check-input form-check-input-condensed\" type=\"checkbox\"\n                 (click)=\"onBlizzardClick()\"\n                 [(ngModel)]=\"conditions.weather.blizzard\"\n                 [checked]=\"conditions.weather.blizzard\"\n          >\n          <label class=\"form-check-label\">Storm/Blizzard</label>\n        </div>\n      </div>\n\n    </div>\n\n    <ul class=\"nav nav-tabs mx-2\">\n      <li class=\"nav-item\" (click)=\"onTravelTabsClick()\">\n        <a class=\"nav-link\" [ngClass]=\"{'active': displayTravelTimes}\">Travel Times</a>\n      </li>\n      <li class=\"nav-item\" (click)=\"onTravelTabsClick()\">\n        <a class=\"nav-link\" [ngClass]=\"{'active': !displayTravelTimes}\">Travel Rates/Hour</a>\n      </li>\n    </ul>\n    <div class=\"row\">\n      <div class=\"col pb-1 pt-1\">\n        <div class=\"btn-group btn-group-sm btn-group-toggle mr-3\" role=\"group\">\n          <button type=\"button\" class=\"btn btn-secondary btn-dark\" (click)=\"onUnitSelectClick(leagues)\"\n                  [ngClass]=\"{'active': selectedUnits === leagues}\">Leagues\n          </button>\n          <button type=\"button\" class=\"btn btn-secondary btn-dark\" (click)=\"onUnitSelectClick(hexes)\"\n                  [ngClass]=\"{'active': selectedUnits === hexes}\">Hexes\n          </button>\n          <button type=\"button\" class=\"btn btn-secondary btn-dark\" (click)=\"onUnitSelectClick(miles)\"\n                  [ngClass]=\"{'active': selectedUnits === miles}\">Miles\n          </button>\n          <button type=\"button\" class=\"btn btn-secondary btn-dark\" (click)=\"onUnitSelectClick(km)\"\n                  [ngClass]=\"{'active': selectedUnits === km}\">Km\n          </button>\n        </div>\n        <h5 class=\"d-inline-block\" *ngIf=\"displayTravelTimes\">Total hours to travel {{distances.controls[unitChoices[selectedUnits]].value}} {{unitChoices[selectedUnits]}}.</h5>\n      </div>\n\n    </div>\n\n    <table class=\"table table-striped table-hover table-sm\" *ngIf=\"!displayTravelTimes\">\n      <thead>\n      <tr>\n        <th><h5>Flat Terrain</h5></th>\n        <th class=\"text-center\">Foot</th>\n        <th class=\"text-center\">Horse</th>\n        <th class=\"text-center\">Cart</th>\n        <th class=\"text-center\">Wagon</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let mr of movementRatesFlat\">\n        <td>{{mr.path}}</td>\n        <td class=\"text-center\">{{adjustedRate(mr.foot)}}</td>\n        <td class=\"text-center\">{{adjustedRate(mr.horse)}}</td>\n        <td class=\"text-center\">{{adjustedRate(mr.cart)}}</td>\n        <td class=\"text-center\">{{adjustedRate(mr.wagon)}}</td>\n      </tr>\n      </tbody>\n    </table>\n    <table class=\"table table-striped table-hover table-sm\" *ngIf=\"!displayTravelTimes\">\n      <thead>\n      <tr>\n        <th><h5>Rough/Hilly Terrain</h5></th>\n        <th class=\"text-center\">Foot</th>\n        <th class=\"text-center\">Horse</th>\n        <th class=\"text-center\">Cart</th>\n        <th class=\"text-center\">Wagon</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let mr of movementRatesRough\">\n        <td>{{mr.path}}</td>\n        <td class=\"text-center\">{{adjustedRate(mr.foot)}}</td>\n        <td class=\"text-center\">{{adjustedRate(mr.horse)}}</td>\n        <td class=\"text-center\">{{adjustedRate(mr.cart)}}</td>\n        <td class=\"text-center\">{{adjustedRate(mr.wagon)}}</td>\n      </tr>\n      </tbody>\n    </table>\n    <table class=\"table table-striped table-hover table-sm\" *ngIf=\"!displayTravelTimes\">\n      <thead>\n      <tr>\n        <th><h5>Mountain Terrain</h5></th>\n        <th class=\"text-center\">Foot</th>\n        <th class=\"text-center\">Horse</th>\n        <th class=\"text-center\">Cart</th>\n        <th class=\"text-center\">Wagon</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let mr of movementRatesMountain\">\n        <td>{{mr.path}}</td>\n        <td class=\"text-center\">{{adjustedRate(mr.foot)}}</td>\n        <td class=\"text-center\">{{adjustedRate(mr.horse)}}</td>\n        <td class=\"text-center\">{{adjustedRate(mr.cart)}}</td>\n        <td class=\"text-center\">{{adjustedRate(mr.wagon)}}</td>\n      </tr>\n      </tbody>\n    </table>\n\n\n    <table class=\"table table-striped table-hover table-sm\" *ngIf=\"displayTravelTimes\">\n      <thead>\n      <tr>\n        <th><h5>Flat Terrain</h5></th>\n        <th class=\"text-center\">Foot</th>\n        <th class=\"text-center\">Horse</th>\n        <th class=\"text-center\">Cart</th>\n        <th class=\"text-center\">Wagon</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let mr of movementRatesFlat\">\n        <td>{{mr.path}}</td>\n        <td class=\"text-center\">{{travelTimeDisplay(mr.foot)}}</td>\n        <td class=\"text-center\">{{travelTimeDisplay(mr.horse)}}</td>\n        <td class=\"text-center\">{{travelTimeDisplay(mr.cart)}}</td>\n        <td class=\"text-center\">{{travelTimeDisplay(mr.wagon)}}</td>\n      </tr>\n      </tbody>\n    </table>\n    <table class=\"table table-striped table-hover table-sm\" *ngIf=\"displayTravelTimes\">\n      <thead>\n      <tr>\n        <th><h5>Rough/Hilly Terrain</h5></th>\n        <th class=\"text-center\">Foot</th>\n        <th class=\"text-center\">Horse</th>\n        <th class=\"text-center\">Cart</th>\n        <th class=\"text-center\">Wagon</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let mr of movementRatesRough\">\n        <td>{{mr.path}}</td>\n        <td class=\"text-center\">{{travelTimeDisplay(mr.foot)}}</td>\n        <td class=\"text-center\">{{travelTimeDisplay(mr.horse)}}</td>\n        <td class=\"text-center\">{{travelTimeDisplay(mr.cart)}}</td>\n        <td class=\"text-center\">{{travelTimeDisplay(mr.wagon)}}</td>\n      </tr>\n      </tbody>\n    </table>\n    <table class=\"table table-striped table-hover table-sm\" *ngIf=\"displayTravelTimes\">\n      <thead>\n      <tr>\n        <th><h5>Mountain Terrain</h5></th>\n        <th class=\"text-center\">Foot</th>\n        <th class=\"text-center\">Horse</th>\n        <th class=\"text-center\">Cart</th>\n        <th class=\"text-center\">Wagon</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let mr of movementRatesMountain\">\n        <td>{{mr.path}}</td>\n        <td class=\"text-center\">{{travelTimeDisplay(mr.foot)}}</td>\n        <td class=\"text-center\">{{travelTimeDisplay(mr.horse)}}</td>\n        <td class=\"text-center\">{{travelTimeDisplay(mr.cart)}}</td>\n        <td class=\"text-center\">{{travelTimeDisplay(mr.wagon)}}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/travel/movement/movement.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/travel/movement/movement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_units_enum__ = __webpack_require__("../../../../../src/app/travel/shared/units.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovementComponent = (function () {
    function MovementComponent() {
        this.leagues = __WEBPACK_IMPORTED_MODULE_1__shared_units_enum__["a" /* Units */].LEAGUES;
        this.hexes = __WEBPACK_IMPORTED_MODULE_1__shared_units_enum__["a" /* Units */].HEXES;
        this.miles = __WEBPACK_IMPORTED_MODULE_1__shared_units_enum__["a" /* Units */].MILES;
        this.km = __WEBPACK_IMPORTED_MODULE_1__shared_units_enum__["a" /* Units */].KILOMETERS;
        this.unitChoices = (_a = {},
            _a[__WEBPACK_IMPORTED_MODULE_1__shared_units_enum__["a" /* Units */].LEAGUES] = 'leagues',
            _a[__WEBPACK_IMPORTED_MODULE_1__shared_units_enum__["a" /* Units */].HEXES] = 'hexes',
            _a[__WEBPACK_IMPORTED_MODULE_1__shared_units_enum__["a" /* Units */].MILES] = 'miles',
            _a[__WEBPACK_IMPORTED_MODULE_1__shared_units_enum__["a" /* Units */].KILOMETERS] = 'km',
            _a);
        this.conditions = {
            weather: {
                rain: false,
                blizzard: false
            },
            ground: {
                mud: false,
                lightSnow: false,
                snow: false,
                deepSnow: false
            }
        };
        var _a;
    }
    MovementComponent.prototype.ngOnInit = function () {
        this._loadMovementRates();
        this.selectedUnits = __WEBPACK_IMPORTED_MODULE_1__shared_units_enum__["a" /* Units */].KILOMETERS;
        this.displayTravelTimes = true;
    };
    /**
     * Sets any snow condition not passed to function as false.
     * @param {string} c - condition name to keep true.
     */
    MovementComponent.prototype.onSnowClick = function (c) {
        for (var _i = 0, _a = ['lightSnow', 'snow', 'deepSnow']; _i < _a.length; _i++) {
            var condition = _a[_i];
            if (condition !== c) {
                this.conditions.ground[condition] = false;
            }
        }
    };
    MovementComponent.prototype.onRainClick = function () {
        this.conditions.weather.blizzard = false;
    };
    MovementComponent.prototype.onBlizzardClick = function () {
        this.conditions.weather.rain = false;
    };
    /**
     * Toggles the display variable for Travel Times or Travel Rates.
     */
    MovementComponent.prototype.onTravelTabsClick = function () {
        this.displayTravelTimes = !this.displayTravelTimes;
    };
    /**
     * Returns a display value for the travel time calculations.
     * @param {number} rate
     * @returns {string}
     */
    MovementComponent.prototype.travelTimeDisplay = function (rate) {
        var tt = this.calculateHours(rate);
        if (tt === Infinity) {
            return 'n/a';
        }
        return tt + ' hrs';
    };
    /**
     * Calculates the number if hours it would take to travel the current distances value.
     * @param {number} Base rate of travel for selected units per hour.
     * @returns {number}
     */
    MovementComponent.prototype.calculateHours = function (rate) {
        var adjustedRate = rate * 0.25 * this.conditionsAdjustment();
        // distance / adjustedRate = hours
        var travelHours = this.distances.controls['leagues'].value / adjustedRate;
        return parseFloat(travelHours.toFixed(1));
    };
    MovementComponent.prototype.adjustedRate = function (rate) {
        var adjustedRate = 0;
        switch (this.selectedUnits) {
            case __WEBPACK_IMPORTED_MODULE_1__shared_units_enum__["a" /* Units */].LEAGUES:
                adjustedRate = rate * 0.25;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__shared_units_enum__["a" /* Units */].HEXES:
                adjustedRate = rate * 0.25 * 0.2;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__shared_units_enum__["a" /* Units */].MILES:
                adjustedRate = rate * 0.25 * 2.5;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__shared_units_enum__["a" /* Units */].KILOMETERS:
                adjustedRate = rate * 0.25 * 4;
                break;
            default:
                adjustedRate = rate;
                break;
        }
        adjustedRate = adjustedRate * this.conditionsAdjustment();
        return parseFloat(adjustedRate.toFixed(2));
    };
    MovementComponent.prototype.conditionsAdjustment = function () {
        var condition = 1;
        condition = ((this.conditions.ground.mud) ? condition * .5 : condition);
        condition = ((this.conditions.weather.rain) ? condition * .9 : condition);
        condition = ((this.conditions.weather.blizzard) ? condition * .25 : condition);
        condition = ((this.conditions.ground.lightSnow) ? condition * .8 : condition);
        condition = ((this.conditions.ground.snow) ? condition * .7 : condition);
        condition = ((this.conditions.ground.deepSnow) ? condition * .25 : condition);
        return condition;
    };
    MovementComponent.prototype.getUnitLabel = function () {
        return 'uknown';
    };
    MovementComponent.prototype.onUnitSelectClick = function (u) {
        this.selectedUnits = u;
    };
    MovementComponent.prototype._loadMovementRates = function () {
        this.movementRatesFlat = [
            {
                terrain: 'Flat',
                path: 'Paved Road',
                foot: 5,
                horse: 10,
                cart: 5,
                wagon: 5
            },
            {
                terrain: 'Flat',
                path: 'Unpaved Road',
                foot: 5,
                horse: 9,
                cart: 5,
                wagon: 4
            },
            {
                terrain: 'Flat',
                path: 'Trail',
                foot: 5,
                horse: 9,
                cart: 4,
                wagon: 3
            },
            {
                terrain: 'Flat',
                path: 'Cropland/Pasture',
                foot: 4,
                horse: 6,
                cart: 2,
                wagon: 1
            },
            {
                terrain: 'Flat',
                path: 'Mixed Woodland',
                foot: 5,
                horse: 6,
                cart: 2,
                wagon: 1
            },
            {
                terrain: 'Flat',
                path: 'Heathland',
                foot: 4,
                horse: 6,
                cart: 0.5,
                wagon: 0.5
            },
            {
                terrain: 'Flat',
                path: 'Mixed Forest',
                foot: 3,
                horse: 4,
                cart: 0.5,
                wagon: 0.5
            },
            {
                terrain: 'Flat',
                path: 'Needleleaf Forest',
                foot: 3,
                horse: 5,
                cart: 1,
                wagon: 0.5
            },
            {
                terrain: 'Flat',
                path: 'Swamp',
                foot: 1,
                horse: 1,
                cart: 0,
                wagon: 0
            },
        ];
        this.movementRatesRough = [{
                terrain: 'Rough',
                path: 'Paved Road',
                foot: 4,
                horse: 9,
                cart: 4,
                wagon: 4
            },
            {
                terrain: 'Rough',
                path: 'Unpaved Road',
                foot: 4,
                horse: 8,
                cart: 4,
                wagon: 3
            },
            {
                terrain: 'Rough',
                path: 'Trail',
                foot: 4,
                horse: 7,
                cart: 2,
                wagon: 1
            },
            {
                terrain: 'Rough',
                path: 'Cropland/Pasture',
                foot: 3,
                horse: 5,
                cart: 1,
                wagon: 0.5
            },
            {
                terrain: 'Rough',
                path: 'Mixed Woodland',
                foot: 3,
                horse: 5,
                cart: 1,
                wagon: 0.5
            },
            {
                terrain: 'Rough',
                path: 'Heathland',
                foot: 3,
                horse: 5,
                cart: 0.5,
                wagon: 0.5
            },
            {
                terrain: 'Rough',
                path: 'Mixed Forest',
                foot: 2,
                horse: 2,
                cart: 0.5,
                wagon: 0
            },
            {
                terrain: 'Rough',
                path: 'Needleleaf Forest',
                foot: 2,
                horse: 3,
                cart: 0.5,
                wagon: 0
            }];
        this.movementRatesMountain = [
            {
                terrain: 'Mountain',
                path: 'Paved Road',
                foot: 3,
                horse: 6,
                cart: 3,
                wagon: 2
            },
            {
                terrain: 'Mountain',
                path: 'Unpaved Road',
                foot: 3,
                horse: 6,
                cart: 2,
                wagon: 1
            },
            {
                terrain: 'Mountain',
                path: 'Trail',
                foot: 3,
                horse: 5,
                cart: 1,
                wagon: 0.5
            },
            {
                terrain: 'Mountain',
                path: 'Woodland',
                foot: 2,
                horse: 4,
                cart: 0,
                wagon: 0
            },
            {
                terrain: 'Mountain',
                path: 'Alpine Vegitation',
                foot: 2,
                horse: 4,
                cart: 0,
                wagon: 0
            },
            {
                terrain: 'Mountain',
                path: 'Mixed Forest',
                foot: 1,
                horse: 1,
                cart: 0,
                wagon: 0
            },
            {
                terrain: 'Mountain',
                path: 'Needleleaf Forest',
                foot: 1,
                horse: 2,
                cart: 0,
                wagon: 0
            },
            {
                terrain: 'Mountain',
                path: 'Ice/Snow/Rockfield',
                foot: 1,
                horse: 2,
                cart: 0,
                wagon: 0
            }
        ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('distances'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */])
    ], MovementComponent.prototype, "distances", void 0);
    MovementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-movement',
            template: __webpack_require__("../../../../../src/app/travel/movement/movement.component.html"),
            styles: [__webpack_require__("../../../../../src/app/travel/movement/movement.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MovementComponent);
    return MovementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/travel/shared/units.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Units; });
var Units;
(function (Units) {
    Units[Units["LEAGUES"] = 0] = "LEAGUES";
    Units[Units["HEXES"] = 1] = "HEXES";
    Units[Units["MILES"] = 2] = "MILES";
    Units[Units["KILOMETERS"] = 3] = "KILOMETERS";
})(Units || (Units = {}));


/***/ }),

/***/ "../../../../../src/app/travel/travel.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__distance_distance_component__ = __webpack_require__("../../../../../src/app/travel/distance/distance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movement_movement_component__ = __webpack_require__("../../../../../src/app/travel/movement/movement.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TravelModule = (function () {
    function TravelModule() {
    }
    TravelModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__distance_distance_component__["a" /* DistanceComponent */], __WEBPACK_IMPORTED_MODULE_4__movement_movement_component__["a" /* MovementComponent */]]
        })
    ], TravelModule);
    return TravelModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map