(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["config-config-module"],{

/***/ "./src/app/config/config-device-type/config-device-type.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/config/config-device-type/config-device-type.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-4\">\n    <h6>Komponentenart</h6>\n  </div>\n  <div class=\"col-4\">\n    <h6>Komponentenattribute</h6>\n  </div>\n  <div class=\"col-4\">\n  </div>\n</div>\n<div class=\"row row-height\">\n  <div class=\"col-4\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let type of sortedDeviceTypes(); let i = index;\" (click)=\"setTypeActive(i)\"\n        [ngClass]=\"{'active': activeType == i}\">{{ type.bezeichnung }}</li>\n    </ul>\n  </div>\n  <div class=\"col-4\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let attribute of sortedDeviceAttributes(); let i = index;\"\n        (click)=\"toggleDeviceAttribute(i)\" [ngClass]=\"{'active': checkDeviceAttributeActive(i)}\">\n        {{ attribute.bezeichnung }}<button class=\"float-right\" *ngIf=\"!checkAttributeDeleteable(i)\"\n          (click)=\"deleteDeviceAttribute(i);$event.stopPropagation();\" id=\"delete-attribute\">x</button></li>\n    </ul>\n  </div>\n  <div class=\"col-4\">\n    <div class=\"form-check\">\n      <input *ngIf=\"deviceTypes.length > 0 && deviceAttributes.length > 0\" class=\"form-check-input\" type=\"checkbox\"\n        [(ngModel)]=\"deviceTypes[activeType].is_software\" id=\"isSoftware\"><label class=\"form-check-label\"\n        for=\"isSoftware\">Software</label>\n    </div>\n    <div>\n      <button id=\"btn-save\" (click)=\"saveDeviceType()\">Speichern</button>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"form-group row\">\n      <div class=\"col-3\">\n        <input type=\"text\" class=\"form-control\" id=\"new-device-type\" [formControl]=\"newDeviceType\"\n          placeholder=\"Neuer Typ\">\n      </div>\n      <div class=\"col-1\">\n        <button (click)=\"addNewDeviceType()\" id=\"add-new-type\">+</button>\n      </div>\n      <div class=\"col-3\">\n        <input type=\"text\" class=\"form-control\" id=\"new-attribute\" [formControl]=\"newDeviceAttribute\"\n          placeholder=\"Neues Attribute\">\n      </div>\n      <div class=\"col-1\">\n        <button [disabled]=\"!checkDuplicateDeviceAttribute()\" (click)=\"addNewDeviceAttribute()\"\n          id=\"add-new-attribute\">+</button>\n      </div>\n      <div class=\"col-3\">\n        <button id=\"delete-type\" (click)=\"deleteDeviceType()\">Löschen</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/config/config-device-type/config-device-type.component.less":
/*!*****************************************************************************!*\
  !*** ./src/app/config/config-device-type/config-device-type.component.less ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#btn-save {\n  margin-top: 100%;\n  margin-bottom: 5%;\n}\n.row-height {\n  height: 420px;\n}\nul {\n  max-height: 400px;\n  overflow: hidden;\n  overflow-y: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcndpdHpsL0RvY3VtZW50cy9FbnR3aWNrbHVuZy9Bbmd1bGFyIFdvcmtzcGFjZS9pdC12ZXJ3YWx0dW5nL2Zyb250ZW5kL3NyYy9hcHAvY29uZmlnL2NvbmZpZy1kZXZpY2UtdHlwZS9jb25maWctZGV2aWNlLXR5cGUuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbmZpZy9jb25maWctZGV2aWNlLXR5cGUvY29uZmlnLWRldmljZS10eXBlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGO0FERUE7RUFDRSxhQUFBO0FDQUY7QURHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvY29uZmlnL2NvbmZpZy1kZXZpY2UtdHlwZS9jb25maWctZGV2aWNlLXR5cGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYnRuLXNhdmUge1xuICBtYXJnaW4tdG9wOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLnJvdy1oZWlnaHQge1xuICBoZWlnaHQ6IDQyMHB4O1xufVxuXG51bCB7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuIiwiI2J0bi1zYXZlIHtcbiAgbWFyZ2luLXRvcDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG4ucm93LWhlaWdodCB7XG4gIGhlaWdodDogNDIwcHg7XG59XG51bCB7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/config/config-device-type/config-device-type.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/config/config-device-type/config-device-type.component.ts ***!
  \***************************************************************************/
/*! exports provided: ConfigDeviceTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigDeviceTypeComponent", function() { return ConfigDeviceTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_api_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/api-client.service */ "./src/app/core/api-client.service.ts");




var ConfigDeviceTypeComponent = /** @class */ (function () {
    function ConfigDeviceTypeComponent(api) {
        this.api = api;
        this.deviceTypes = [];
        this.deviceAttributes = [];
        this.activeType = 0;
        this.newDeviceType = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.newDeviceAttribute = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    ConfigDeviceTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getAllComponentAttributes().then(function (resp) { return _this.deviceAttributes = resp; });
        this.api.getAllComponentType().then(function (resp) { return _this.deviceTypes = resp; });
    };
    /**
     * Sets selected deviceType active.
     * Therefor the index of the selected type is safed
     * and value of the software flag is set.
     * @param index of selected deviceType list item
     */
    ConfigDeviceTypeComponent.prototype.setTypeActive = function (index) {
        this.activeType = index;
    };
    /**
     * Adds or removes the id of the clicked attribute from the active deviceType.
     * @param index of selected attribute list item
     */
    ConfigDeviceTypeComponent.prototype.toggleDeviceAttribute = function (index) {
        var attribute = this.deviceAttributes[index];
        if (attribute) {
            var id_1 = attribute.id;
            if (this.deviceTypes[this.activeType].attribute.find(function (attr) { return attr.id === id_1; }) === undefined) {
                this.deviceTypes[this.activeType].attribute.push(attribute);
            }
            else {
                var found = this.deviceTypes[this.activeType].attribute.findIndex(function (attr) { return attr.id === id_1; });
                this.deviceTypes[this.activeType].attribute.splice(found, 1);
            }
        }
    };
    /**
     * Checks if the current deviceType has the passed attribute set.
     * @param index of current attibute list item
     * @returns <code>true</code> if deviceType has attribute set else <code>false</code>
     */
    ConfigDeviceTypeComponent.prototype.checkDeviceAttributeActive = function (index) {
        var attribute = this.deviceAttributes[index];
        var deviceType = this.deviceTypes[this.activeType];
        var retVal = false;
        if (attribute && deviceType) {
            var id_2 = attribute.id;
            retVal = deviceType.attribute.find(function (attr) { return attr.id === id_2; }) !== undefined;
        }
        return retVal;
    };
    /**
     * Adds a new deviceType to the list.
     * This deviceType will only be persisted when be saved by btn click.
     */
    ConfigDeviceTypeComponent.prototype.addNewDeviceType = function () {
        this.deviceTypes.push({
            id: null,
            bezeichnung: this.newDeviceType.value,
            attribute: [],
            is_software: false
        });
        this.newDeviceType.setValue('');
    };
    /**
     * Adds a new deviceAttribute to the list.
     * Directly saved in database.
     */
    ConfigDeviceTypeComponent.prototype.addNewDeviceAttribute = function () {
        var _this = this;
        this.api.addComponentAttribute(this.newDeviceAttribute.value).then(function () {
            _this.api.getAllComponentAttributes().then(function (resp) { return _this.deviceAttributes = resp; });
            _this.newDeviceAttribute.setValue('');
        });
    };
    /**
     * Checks if the current new deviceAttribute exits already.
     * @returns <code>true</code> when already exits else <code>false</code>
     */
    ConfigDeviceTypeComponent.prototype.checkDuplicateDeviceAttribute = function () {
        var _this = this;
        return this.deviceAttributes.find(function (attr) { return attr.bezeichnung === _this.newDeviceAttribute.value; }) === undefined;
    };
    /**
     * Saves the current deviceType.
     */
    ConfigDeviceTypeComponent.prototype.saveDeviceType = function () {
        var _this = this;
        var currentDevice = this.deviceTypes[this.activeType];
        currentDevice.attribute = currentDevice.attribute.filter(function (attr) { return _this.deviceAttributes.some(function (dattr) { return dattr.id === attr.id; }); });
        if (!currentDevice.id) {
            this.api.addNewComponentType(currentDevice).then(function () { return _this.api.getAllComponentType().then(function (resp) { return _this.deviceTypes = resp; }); });
        }
        else {
            this.api.updateComponentType(currentDevice).then();
        }
    };
    /**
     * Deletes the current deviceType
     */
    ConfigDeviceTypeComponent.prototype.deleteDeviceType = function () {
        var _this = this;
        this.api.deleteComponentType(this.deviceTypes[this.activeType].id).then(function () {
            _this.api.getAllComponentType().then(function (resp) {
                _this.deviceTypes = resp;
                _this.activeType = 0;
            });
        });
    };
    /**
     * Checks if the passed attribute is deleteable.
     * Therefor it can not be used by a deviceType.
     * @param index of current device attribute
     * @returns <code>true</code> if attribute is not used else <code>false</code>
     */
    ConfigDeviceTypeComponent.prototype.checkAttributeDeleteable = function (index) {
        var attribute = this.deviceAttributes[index];
        var retVal = false;
        if (attribute) {
            retVal = this.deviceTypes.find(function (type) { return type.attribute.find(function (attr) { return attribute.id === attr.id; }) !== undefined; }) !== undefined;
        }
        return retVal;
    };
    /**
     * Deletes the passed device attribute.
     * @param index of selected device attribute
     */
    ConfigDeviceTypeComponent.prototype.deleteDeviceAttribute = function (index) {
        var _this = this;
        this.api.deleteComponentAttribute(this.deviceAttributes[index].id).then(function () {
            return _this.api.getAllComponentAttributes().then(function (resp) { return _this.deviceAttributes = resp; });
        });
    };
    /**
     * Sorts the deviceType array alphabetically and returns it.
     */
    ConfigDeviceTypeComponent.prototype.sortedDeviceTypes = function () {
        return this.deviceTypes.sort(function (a, b) { return a.bezeichnung.localeCompare(b.bezeichnung); });
    };
    /**
     * Sorts the deviceAttribute array alphabetically and returns it.
     */
    ConfigDeviceTypeComponent.prototype.sortedDeviceAttributes = function () {
        return this.deviceAttributes.sort(function (a, b) { return a.bezeichnung.localeCompare(b.bezeichnung); });
    };
    ConfigDeviceTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-config-device-type',
            template: __webpack_require__(/*! ./config-device-type.component.html */ "./src/app/config/config-device-type/config-device-type.component.html"),
            styles: [__webpack_require__(/*! ./config-device-type.component.less */ "./src/app/config/config-device-type/config-device-type.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_api_client_service__WEBPACK_IMPORTED_MODULE_3__["ApiClientService"]])
    ], ConfigDeviceTypeComponent);
    return ConfigDeviceTypeComponent;
}());



/***/ }),

/***/ "./src/app/config/config-overview/config-overview.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/config/config-overview/config-overview.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"button\" id=\"configUser\" value=\"Benutzer verwalten\" class=\"button\" routerLink=\"/masterdata/user\">\n<input type=\"button\" id=\"configSupplier\" value=\"Lieferanten verwalten\" class=\"button\" routerLink=\"/masterdata/supplier\">\n<input type=\"button\" id=\"configDevice\" value=\"Komponentenart verwalten\" class=\"button\" routerLink=\"/masterdata/devicetype\">"

/***/ }),

/***/ "./src/app/config/config-overview/config-overview.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/config/config-overview/config-overview.component.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n  margin-right: 15em;\n  margin-top: 2em;\n  width: 300px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcndpdHpsL0RvY3VtZW50cy9FbnR3aWNrbHVuZy9Bbmd1bGFyIFdvcmtzcGFjZS9pdC12ZXJ3YWx0dW5nL2Zyb250ZW5kL3NyYy9hcHAvY29uZmlnL2NvbmZpZy1vdmVydmlldy9jb25maWctb3ZlcnZpZXcuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbmZpZy9jb25maWctb3ZlcnZpZXcvY29uZmlnLW92ZXJ2aWV3LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29uZmlnL2NvbmZpZy1vdmVydmlldy9jb25maWctb3ZlcnZpZXcuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ue1xuICAgIG1hcmdpbi1yaWdodDogMTVlbTtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgd2lkdGg6IDMwMHB4O1xufSIsIi5idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDE1ZW07XG4gIG1hcmdpbi10b3A6IDJlbTtcbiAgd2lkdGg6IDMwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/config/config-overview/config-overview.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/config/config-overview/config-overview.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConfigOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigOverviewComponent", function() { return ConfigOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigOverviewComponent = /** @class */ (function () {
    function ConfigOverviewComponent() {
    }
    ConfigOverviewComponent.prototype.ngOnInit = function () {
    };
    ConfigOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-config-overview',
            template: __webpack_require__(/*! ./config-overview.component.html */ "./src/app/config/config-overview/config-overview.component.html"),
            styles: [__webpack_require__(/*! ./config-overview.component.less */ "./src/app/config/config-overview/config-overview.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigOverviewComponent);
    return ConfigOverviewComponent;
}());



/***/ }),

/***/ "./src/app/config/config-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/config/config-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ConfigRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigRoutingModule", function() { return ConfigRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_overview_config_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config-overview/config-overview.component */ "./src/app/config/config-overview/config-overview.component.ts");
/* harmony import */ var _config_user_config_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config-user/config-user.component */ "./src/app/config/config-user/config-user.component.ts");
/* harmony import */ var _config_supplier_config_supplier_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config-supplier/config-supplier.component */ "./src/app/config/config-supplier/config-supplier.component.ts");
/* harmony import */ var _config_device_type_config_device_type_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config-device-type/config-device-type.component */ "./src/app/config/config-device-type/config-device-type.component.ts");







var routes = [
    { path: '', component: _config_overview_config_overview_component__WEBPACK_IMPORTED_MODULE_3__["ConfigOverviewComponent"] },
    { path: 'user', component: _config_user_config_user_component__WEBPACK_IMPORTED_MODULE_4__["ConfigUserComponent"] },
    { path: 'supplier', component: _config_supplier_config_supplier_component__WEBPACK_IMPORTED_MODULE_5__["ConfigSupplierComponent"] },
    { path: 'devicetype', component: _config_device_type_config_device_type_component__WEBPACK_IMPORTED_MODULE_6__["ConfigDeviceTypeComponent"] }
];
var ConfigRoutingModule = /** @class */ (function () {
    function ConfigRoutingModule() {
    }
    ConfigRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ConfigRoutingModule);
    return ConfigRoutingModule;
}());



/***/ }),

/***/ "./src/app/config/config-supplier/config-supplier.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/config/config-supplier/config-supplier.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6>Lieferantenverwaltung</h6>\n<form *ngIf=\"form\" [formGroup]=\"form\">\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Firmenname*</th>\n        <th scope=\"col\">Straße*</th>\n        <th scope=\"col\">PLZ*</th>\n        <th scope=\"col\">Ort*</th>\n        <th scope=\"col\">Telefon*</th>\n        <th scope=\"col\">Mobil</th>\n        <th scope=\"col\">Fax</th>\n        <th scope=\"col\">Mail</th>\n        <th scope=\"col\">Aktion</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let deliverer of this.form.get('deliverers').controls; let i = index\" formArrayName=\"deliverers\">\n        <ng-container [formGroupName]=\"i\">\n          <td>\n            <input class=\"form-control\" id=\"fn-{{i}}\" type=\"text\" formControlName=\"companyname\">\n          </td>\n          <td>\n            <input class=\"form-control\" id=\"street-{{i}}\" type=\"text\" formControlName=\"street\">\n          </td>\n          <td>\n            <input class=\"form-control\" id=\"plz-{{i}}\" type=\"number\" formControlName=\"plz\">\n          </td>\n          <td>\n            <input class=\"form-control\" id=\"place-{{i}}\" type=\"text\" formControlName=\"place\">\n          </td>\n          <td>\n            <input class=\"form-control\" id=\"tel-{{i}}\" type=\"text\" formControlName=\"tel\">\n          </td>\n          <td>\n            <input class=\"form-control\" id=\"mobile-{{i}}\" type=\"text\" formControlName=\"mobile\">\n          </td>\n          <td>\n            <input class=\"form-control\" id=\"fax-{{i}}\" type=\"text\" formControlName=\"fax\">\n          </td>\n          <td>\n            <input class=\"form-control\" id=\"mail-{{i}}\" type=\"email\" formControlName=\"email\">\n          </td>\n          <td>\n            <button [disabled]=\"!form.get('deliverers').controls[i].valid\" (click)=saveChange(deliverer)>Ändern</button>\n            <button (click)=\"deleteDeliverer(deliverer.value.id)\">Löschen</button>\n          </td>\n        </ng-container>\n      </tr>\n      <ng-container formGroupName=\"addDeliverer\">\n        <tr>\n          <td>\n            <input class=\"form-control\" id=\"fn\" type=\"text\" formControlName=\"companyname\">\n          </td>\n          <td>\n            <input class=\"form-control\" id=\"street\" type=\"text\" formControlName=\"street\">\n          </td>\n          <td>\n            <input class=\"form-control\" id=\"plz\" type=\"number\" formControlName=\"plz\">\n          </td>\n          <td>\n            <input class=\"form-control\" id=\"place\" type=\"text\" formControlName=\"place\">\n          </td>\n          <td>\n            <input class=\"form-control\" id=\"tel\" type=\"text\" formControlName=\"tel\">\n          </td>\n          <td>\n            <input class=\"form-control\" id=\"mobile\" type=\"text\" formControlName=\"mobile\">\n          </td>\n          <td>\n            <input class=\"form-control\" id=\"fax\" type=\"text\" formControlName=\"fax\">\n          </td>\n          <td>\n            <input class=\"form-control\" id=\"mail\" type=\"email\" formControlName=\"email\">\n          </td>\n          <td>\n            <button [disabled]=\"!form.get('addDeliverer').valid\" (click)=saveDeliverer()>Speichern</button>\n          </td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</form>\n"

/***/ }),

/***/ "./src/app/config/config-supplier/config-supplier.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/config/config-supplier/config-supplier.component.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZy9jb25maWctc3VwcGxpZXIvY29uZmlnLXN1cHBsaWVyLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/config/config-supplier/config-supplier.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/config/config-supplier/config-supplier.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConfigSupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigSupplierComponent", function() { return ConfigSupplierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_core_api_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/api-client.service */ "./src/app/core/api-client.service.ts");
/* harmony import */ var src_app_fe_entities_deliverer_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/fe-entities/deliverer.entity */ "./src/app/fe-entities/deliverer.entity.ts");






var ConfigSupplierComponent = /** @class */ (function () {
    function ConfigSupplierComponent(builder, api) {
        this.builder = builder;
        this.api = api;
    }
    ConfigSupplierComponent.prototype.ngOnInit = function () {
        this.reloadTable();
    };
    ConfigSupplierComponent.prototype.reloadTable = function () {
        var _this = this;
        this.api.getAllDeliverer().then(function (resp) {
            _this.form = _this.builder.group({
                addDeliverer: _this.buildDelivererGroup(new src_app_fe_entities_deliverer_entity__WEBPACK_IMPORTED_MODULE_5__["Deliverer"]()),
                deliverers: _this.builder.array(resp
                    .sort(function (a, b) { return a.companyname.localeCompare(b.companyname); })
                    .map(function (del) { return _this.buildDelivererGroup(del); }))
            });
        });
    };
    ConfigSupplierComponent.prototype.buildDelivererGroup = function (del) {
        return this.builder.group({
            id: del.id,
            companyname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](del.companyname, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](del.street, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            plz: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](del.plz, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            place: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](del.place, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            tel: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](del.tel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](del.mobile, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](del.fax, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](del.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    ConfigSupplierComponent.prototype.saveDeliverer = function () {
        var _this = this;
        var newDeliverer = this.form.get('addDeliverer').value;
        this.api.addDeliverer(newDeliverer).then(function (res) {
            if (!(res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"])) {
                _this.reloadTable();
            }
        });
    };
    ConfigSupplierComponent.prototype.saveChange = function (control) {
        var _this = this;
        this.api.updateDeliverer(control.value).then(function () { return _this.reloadTable(); });
    };
    ConfigSupplierComponent.prototype.deleteDeliverer = function (id) {
        var _this = this;
        this.api.deleteDeliverer(id).then(function () { return _this.reloadTable(); });
    };
    ConfigSupplierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-config-supplier',
            template: __webpack_require__(/*! ./config-supplier.component.html */ "./src/app/config/config-supplier/config-supplier.component.html"),
            styles: [__webpack_require__(/*! ./config-supplier.component.less */ "./src/app/config/config-supplier/config-supplier.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_core_api_client_service__WEBPACK_IMPORTED_MODULE_4__["ApiClientService"]])
    ], ConfigSupplierComponent);
    return ConfigSupplierComponent;
}());



/***/ }),

/***/ "./src/app/config/config-user/config-user.component.html":
/*!***************************************************************!*\
  !*** ./src/app/config/config-user/config-user.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6>Benutzerverwaltung</h6>\n<form *ngIf=\"form\" [formGroup]=\"form\">\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Benutzername</th>\n        <th scope=\"col\">Vorname</th>\n        <th scope=\"col\">Nachname</th>\n        <th scope=\"col\">Rechtegruppe</th>\n        <th scope=\"col\">Neues Passwort</th>\n        <th scope=\"col\">Aktion</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let user of users; let i = index\" formArrayName=\"users\">\n        <ng-container [formGroupName]=\"i\">\n\n          <td>{{user.username}}</td>\n          <td>{{user.firstname}}</td>\n          <td>{{user.lastname}}</td>\n          <td><select class=\"form-control\" id=\"role-{{i}}\" formControlName=\"groupid\">\n              <option *ngFor=\"let role of roles\" [value]=\"role.id\">{{ role.bezeichnung }}</option>\n            </select></td>\n          <td>\n            <input class=\"form-control\" id=\"pw-{{i}}\" type=\"password\" formControlName=\"pw\">\n          </td>\n          <td>\n            <button [disabled]=\"!form.get('users').controls[i].valid\" (click)=saveChange(i)>Ändern</button>\n            <button (click)=\"deleteUser(i)\">Löschen</button>\n          </td>\n        </ng-container>\n      </tr>\n      <ng-container formGroupName=\"addUser\">\n        <tr>\n          <td>\n            <input class=\"form-control\" id=\"addusername\" formControlName=\"username\">\n          </td>\n          <td>\n            <input class=\"form-control\" id=\"addfirstname\" formControlName=\"firstname\">\n          </td>\n          <td>\n            <input class=\"form-control\" id=\"addlastname\" formControlName=\"lastname\">\n          </td>\n          <td>\n            <select class=\"form-control\" id=\"addRole\" formControlName=\"groupid\">\n              <option *ngFor=\"let role of roles\" [value]=\"role.id\">{{ role.bezeichnung }}</option>\n            </select>\n          </td>\n          <td>\n            <input type=\"password\" class=\"form-control\" id=\"addpw\" formControlName=\"pw\">\n          </td>\n          <td>\n            <button [disabled]=\"!form.get('addUser').valid\" (click)=saveUser()>Speichern</button>\n          </td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</form>\n"

/***/ }),

/***/ "./src/app/config/config-user/config-user.component.less":
/*!***************************************************************!*\
  !*** ./src/app/config/config-user/config-user.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZy9jb25maWctdXNlci9jb25maWctdXNlci5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/config/config-user/config-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/config/config-user/config-user.component.ts ***!
  \*************************************************************/
/*! exports provided: ConfigUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigUserComponent", function() { return ConfigUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_api_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/api-client.service */ "./src/app/core/api-client.service.ts");





var ConfigUserComponent = /** @class */ (function () {
    function ConfigUserComponent(builder, api) {
        this.builder = builder;
        this.api = api;
        this.roles = [];
    }
    ConfigUserComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.reloadTable();
                return [2 /*return*/];
            });
        });
    };
    ConfigUserComponent.prototype.saveChange = function (index) {
        var changes = this.form.get('users').controls[index].value;
        var uid = this.users[index].userid;
        var pwchange = {
            id: uid,
            pw: changes.pw
        };
        var rolechange = {
            id: uid,
            groupid: changes.groupid
        };
        if (changes.pw.trim() !== '') {
            this.api.setUserPassword(pwchange).then();
        }
        this.api.setUserGroupChange(rolechange).then();
    };
    ConfigUserComponent.prototype.reloadTable = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.getAllGroups().subscribe(function (obs) { return _this.roles = obs.sort(function (a, b) { return a.bezeichnung.localeCompare(b.bezeichnung); }); });
                        return [4 /*yield*/, this.api.getAllUser().then(function (obs) { return _this.users = obs.sort(function (a, b) { return a.username.localeCompare(b.username); }); })];
                    case 1:
                        _a.sent();
                        this.form = this.builder.group({
                            addUser: this.builder.group({
                                username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                                firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                                lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                                groupid: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                                pw: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                            }),
                            users: this.builder.array([])
                        });
                        this.users.forEach(function (user) {
                            return _this.form.get('users').push(_this.builder.group({
                                groupid: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](user.groupid, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                                pw: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                            }));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfigUserComponent.prototype.deleteUser = function (index) {
        var _this = this;
        this.api.deleteUser(this.users[index].userid).then(function () { return _this.reloadTable(); });
    };
    ConfigUserComponent.prototype.saveUser = function () {
        var _this = this;
        var newUser = this.form.get('addUser').value;
        this.api.registerUser(newUser).then(function (res) {
            if (!(res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"])) {
                _this.reloadTable();
            }
        });
    };
    ConfigUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-config-user',
            template: __webpack_require__(/*! ./config-user.component.html */ "./src/app/config/config-user/config-user.component.html"),
            styles: [__webpack_require__(/*! ./config-user.component.less */ "./src/app/config/config-user/config-user.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _core_api_client_service__WEBPACK_IMPORTED_MODULE_4__["ApiClientService"]])
    ], ConfigUserComponent);
    return ConfigUserComponent;
}());



/***/ }),

/***/ "./src/app/config/config.module.ts":
/*!*****************************************!*\
  !*** ./src/app/config/config.module.ts ***!
  \*****************************************/
/*! exports provided: ConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModule", function() { return ConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _config_device_type_config_device_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config-device-type/config-device-type.component */ "./src/app/config/config-device-type/config-device-type.component.ts");
/* harmony import */ var _config_overview_config_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config-overview/config-overview.component */ "./src/app/config/config-overview/config-overview.component.ts");
/* harmony import */ var _config_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config-routing.module */ "./src/app/config/config-routing.module.ts");
/* harmony import */ var _config_supplier_config_supplier_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config-supplier/config-supplier.component */ "./src/app/config/config-supplier/config-supplier.component.ts");
/* harmony import */ var _config_user_config_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config-user/config-user.component */ "./src/app/config/config-user/config-user.component.ts");










var ConfigModule = /** @class */ (function () {
    function ConfigModule() {
    }
    ConfigModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_config_overview_config_overview_component__WEBPACK_IMPORTED_MODULE_6__["ConfigOverviewComponent"], _config_user_config_user_component__WEBPACK_IMPORTED_MODULE_9__["ConfigUserComponent"], _config_supplier_config_supplier_component__WEBPACK_IMPORTED_MODULE_8__["ConfigSupplierComponent"], _config_device_type_config_device_type_component__WEBPACK_IMPORTED_MODULE_5__["ConfigDeviceTypeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _config_routing_module__WEBPACK_IMPORTED_MODULE_7__["ConfigRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]
            ]
        })
    ], ConfigModule);
    return ConfigModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-client.service */ "./src/app/core/api-client.service.ts");




var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            providers: [_api_client_service__WEBPACK_IMPORTED_MODULE_3__["ApiClientService"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/fe-entities/deliverer.entity.ts":
/*!*************************************************!*\
  !*** ./src/app/fe-entities/deliverer.entity.ts ***!
  \*************************************************/
/*! exports provided: Deliverer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deliverer", function() { return Deliverer; });
var Deliverer = /** @class */ (function () {
    function Deliverer() {
    }
    return Deliverer;
}());



/***/ })

}]);
//# sourceMappingURL=config-config-module.js.map