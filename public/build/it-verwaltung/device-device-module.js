(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-device-module"],{

/***/ "./src/app/device/add-device-card/add-device-card.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/device/add-device-card/add-device-card.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"createNewDevice()\" class=\"card rounded-0\">\n    <div class=\"card-body\" >\n        <i class=\"fas fa-plus\" ></i>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/device/add-device-card/add-device-card.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/device/add-device-card/add-device-card.component.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\napp-room-card {\n  padding: 10px;\n}\napp-add-device-card {\n  padding: 10px;\n}\ndiv.ex1 {\n  max-height: 500px;\n  overflow: scroll;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcndpdHpsL0RvY3VtZW50cy9FbnR3aWNrbHVuZy9Bbmd1bGFyIFdvcmtzcGFjZS9pdC12ZXJ3YWx0dW5nL2Zyb250ZW5kL3NyYy9hcHAvZGV2aWNlL2FkZC1kZXZpY2UtY2FyZC9hZGQtZGV2aWNlLWNhcmQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2RldmljZS9hZGQtZGV2aWNlLWNhcmQvYWRkLWRldmljZS1jYXJkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUlBLG9CQUFBO0VBSUEsYUFBQTtFQUdBLGVBQUE7RUFDQSx1QkFBQTtVQUFBLDJCQUFBO0FDSEo7QURNRTtFQUNFLGFBQUE7QUNKSjtBRE1FO0VBQ0UsYUFBQTtBQ0pKO0FET0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9kZXZpY2UvYWRkLWRldmljZS1jYXJkL2FkZC1kZXZpY2UtY2FyZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgXG4gICAgXG4gICAgXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgXG4gIGFwcC1yb29tLWNhcmQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgYXBwLWFkZC1kZXZpY2UtY2FyZCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICBcbiAgZGl2LmV4MSB7XG4gICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgfSIsIi5mbGV4LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuYXBwLXJvb20tY2FyZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5hcHAtYWRkLWRldmljZS1jYXJkIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbmRpdi5leDEge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/device/add-device-card/add-device-card.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/device/add-device-card/add-device-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddDeviceCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDeviceCardComponent", function() { return AddDeviceCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AddDeviceCardComponent = /** @class */ (function () {
    function AddDeviceCardComponent(router) {
        this.router = router;
    }
    AddDeviceCardComponent.prototype.ngOnInit = function () {
    };
    AddDeviceCardComponent.prototype.createNewDevice = function () {
        this.router.navigate(['devices/create']);
    };
    AddDeviceCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-device-card',
            template: __webpack_require__(/*! ./add-device-card.component.html */ "./src/app/device/add-device-card/add-device-card.component.html"),
            styles: [__webpack_require__(/*! ./add-device-card.component.less */ "./src/app/device/add-device-card/add-device-card.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddDeviceCardComponent);
    return AddDeviceCardComponent;
}());



/***/ }),

/***/ "./src/app/device/device-card/device-card.component.html":
/*!***************************************************************!*\
  !*** ./src/app/device/device-card/device-card.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-item card rounded-0\" >\n    <div class=\"card-header\">\n            {{card.header}}\n        <span *ngIf=\"card.has_badge == true\" class=\"badge badge-primary\" style=\"float: right\">\n                <i class=\"far fa-comment-alt\"></i>\n        </span>\n    </div>\n    <div class=\"card-body\" style=\"margin: 0 auto; padding-top: 1px; padding-bottom: 1px\">\n        <div class=\"row\">{{card.body}}</div>\n        <div class=\"row\">{{card.footer}}</div>\n    </div>\n    \n</div>"

/***/ }),

/***/ "./src/app/device/device-card/device-card.component.less":
/*!***************************************************************!*\
  !*** ./src/app/device/device-card/device-card.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS9kZXZpY2UtY2FyZC9kZXZpY2UtY2FyZC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/device/device-card/device-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/device/device-card/device-card.component.ts ***!
  \*************************************************************/
/*! exports provided: DeviceCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceCardComponent", function() { return DeviceCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeviceCardComponent = /** @class */ (function () {
    function DeviceCardComponent() {
        this.card = {};
    }
    DeviceCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeviceCardComponent.prototype, "card", void 0);
    DeviceCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-card',
            template: __webpack_require__(/*! ./device-card.component.html */ "./src/app/device/device-card/device-card.component.html"),
            styles: [__webpack_require__(/*! ./device-card.component.less */ "./src/app/device/device-card/device-card.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeviceCardComponent);
    return DeviceCardComponent;
}());



/***/ }),

/***/ "./src/app/device/device-detailed/device-detailed.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/device/device-detailed/device-detailed.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a *ngIf=\"!flagExtendable\" (click)=\"blueprint()\" class=\"float-right text-primary\">Als Vorlage verwenden...</a>\n<h5>{{ title }}:</h5>\n<form *ngIf=\"form\" [formGroup]=\"basicForm\" class=\"mt-2\">\n  <div class=\"row mb-3\">\n    <label for=\"deviceType\" class=\"col-3 col-form-label\">Komponentenart*</label>\n    <div class=\"col-6\">\n      <select class=\"form-control\" id=\"deviceType\" formControlName=\"deviceType\" (change)=\"changeType()\">\n        <option disabled selected></option>\n        <option *ngFor=\"let type of sortedDeviceTypes()\" [value]=\"type.id\">{{ type.bezeichnung }}</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"row mt-1\">\n    <label for=\"producer\" class=\"col-3 col-form-label\">Hersteller*</label>\n    <div class=\"col-6\">\n      <input type=\"text\" class=\"form-control\" id=\"producer\" formControlName=\"producer\">\n    </div>\n  </div>\n  <div class=\"row mt-1\">\n    <label for=\"name\" class=\"col-3 col-form-label\">Bezeichnung*</label>\n    <div class=\"col-6\">\n      <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\n    </div>\n  </div>\n  <div class=\"row mt-1\">\n    <label for=\"deliverer\" class=\"col-3 col-form-label\">Lieferant*</label>\n    <div class=\"col-6\">\n      <select class=\"form-control\" id=\"deliverer\" formControlName=\"deliverer\">\n        <option disabled selected></option>\n        <option *ngFor=\"let deliverer of sortedDeliverers()\" [value]=\"deliverer.id\">{{ deliverer.companyname }}</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"row mt-1\">\n    <label for=\"purchase\" class=\"col-3 col-form-label\">Einkaufsdatum*</label>\n    <div class=\"col-6\">\n      <input type=\"date\" class=\"form-control\" id=\"purchase\" formControlName=\"purchase\">\n    </div>\n  </div>\n  <div class=\"row mt-1\">\n    <label for=\"warranty\" class=\"col-3 col-form-label\">Gewährleistungdauer*</label>\n    <div class=\"col-6\">\n      <input type=\"number\" class=\"form-control\" id=\"warranty\" formControlName=\"warranty\">\n    </div>\n  </div>\n  <div class=\"row mt-1\">\n    <label for=\"proof\" class=\"col-3 col-form-label\">BelegId*</label>\n    <div class=\"col-6\">\n      <input type=\"number\" class=\"form-control\" id=\"proof\" formControlName=\"proof\">\n    </div>\n  </div>\n  <div *ngIf=\"!isDeviceTypeSW()\" class=\"row mt-1\">\n    <label for=\"room\" class=\"col-3 col-form-label\">Raum*</label>\n    <div class=\"col-6\">\n      <select class=\"form-control\" id=\"room\" formControlName=\"room\">\n        <option disabled selected></option>\n        <option *ngFor=\"let room of sortedRooms()\" [value]=\"room.id\">{{ room.nr }}</option>\n      </select>\n    </div>\n  </div>\n  <div *ngIf=\"isDeviceTypeSet()\" class=\"mt-4\" formArrayName=\"attributes\">\n    <div class=\"row mt-1\" *ngFor=\"let attribute of currentAttributes; let i = index\">\n      <label for=\"input-{{ i }}\" class=\"col-3 col-form-label\">{{ attribute.bezeichnung }}</label>\n      <div class=\"col-6\">\n        <input type=\"text\" class=\"form-control\" id=\"input-{{ i }}\" [formControlName]=\"i\">\n      </div>\n    </div>\n    <app-multi-input [extendable]=\"flagExtendable\" [label]=\"getMultiLabel()\" [form]=\"multiForm\" [rooms]=\"rooms\">\n    </app-multi-input>\n  </div>\n</form>\n<button class=\"mt-2\" (click)=\"save()\" *ngIf=\"!flagReadOnly\" [disabled]=\"!enableSaveBtn()\">Speichern</button>\n"

/***/ }),

/***/ "./src/app/device/device-detailed/device-detailed.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/device/device-detailed/device-detailed.component.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  margin-right: 26%;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcndpdHpsL0RvY3VtZW50cy9FbnR3aWNrbHVuZy9Bbmd1bGFyIFdvcmtzcGFjZS9pdC12ZXJ3YWx0dW5nL2Zyb250ZW5kL3NyYy9hcHAvZGV2aWNlL2RldmljZS1kZXRhaWxlZC9kZXZpY2UtZGV0YWlsZWQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2RldmljZS9kZXZpY2UtZGV0YWlsZWQvZGV2aWNlLWRldGFpbGVkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kZXZpY2UvZGV2aWNlLWRldGFpbGVkL2RldmljZS1kZXRhaWxlZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICAgIG1hcmdpbi1yaWdodDogMjYlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsImEge1xuICBtYXJnaW4tcmlnaHQ6IDI2JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/device/device-detailed/device-detailed.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/device/device-detailed/device-detailed.component.ts ***!
  \*********************************************************************/
/*! exports provided: DeviceDetailedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceDetailedComponent", function() { return DeviceDetailedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_api_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/api-client.service */ "./src/app/core/api-client.service.ts");





var DeviceDetailedComponent = /** @class */ (function () {
    function DeviceDetailedComponent(formBuilder, route, api) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.api = api;
        this.flagExtendable = true;
        this.flagReadOnly = false;
    }
    DeviceDetailedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getAllDeliverer().then(function (resp) { return _this.deliverers = resp; });
        this.api.getAllRooms().then(function (resp) { return _this.rooms = resp; });
        this.api.getAllComponentType().then(function (resp) { return _this.deviceTypes = resp; });
        var id = this.route.snapshot.paramMap.get('id');
        this.multiForm = this.formBuilder.group({
            array: this.formBuilder.array([''])
        });
        if (id === 'create') {
            this.basicForm = this.formBuilder.group({
                id: '',
                producer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                room: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                purchase: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                warranty: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                deliverer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                proof: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                deviceType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                attributes: this.formBuilder.array([])
            });
        }
        else {
            this.api.getComponentById(Number(id)).then(function (resp) {
                _this.flagExtendable = false;
                var selectedDevice = resp;
                _this.basicForm = _this.formBuilder.group({
                    id: selectedDevice.id,
                    producer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](selectedDevice.hersteller, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](selectedDevice.bezeichnung, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    room: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](selectedDevice.raumId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    purchase: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](selectedDevice.einkaufsdatum, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    warranty: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](selectedDevice.geweahrleistungsdauer, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    deliverer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](selectedDevice.lieferantId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    proof: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](selectedDevice.belegId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    deviceType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
                        value: selectedDevice.komponentenArtId,
                        disabled: true
                    }),
                    attributes: _this.formBuilder.array([])
                });
                _this.changeType(selectedDevice.komponentenAttribute);
                if (!_this.isDeviceTypeSW()) {
                    _this.multiForm.get('array').controls[0].setValue(selectedDevice.komponentenAttribute.find(function (attr) { return attr.id === _this.getIdOfSerialnumber(); }).value);
                }
                else {
                    _this.api.getAllRoomsToSoftware(Number(id)).then(function (res) {
                        res.forEach(function (room) {
                            _this.multiForm.get('array').push(_this.formBuilder.control(room.sir_r_id));
                        });
                        _this.multiForm.get('array').removeAt(0);
                    });
                }
            });
        }
        if (this.flagReadOnly) {
            this.basicForm.disable();
            this.multiForm.disable();
        }
    };
    Object.defineProperty(DeviceDetailedComponent.prototype, "title", {
        get: function () {
            return this.flagExtendable ? 'Neue Komponente' : (this.basicForm.value.name ? this.basicForm.value.name : 'Komponente');
        },
        enumerable: true,
        configurable: true
    });
    DeviceDetailedComponent.prototype.sortedRooms = function () {
        return this.rooms ? this.rooms.sort(function (a, b) { return a.nr.localeCompare(b.nr); }) : [];
    };
    DeviceDetailedComponent.prototype.sortedDeviceTypes = function () {
        return this.deviceTypes ? this.deviceTypes.sort(function (a, b) {
            return a.bezeichnung.localeCompare(b.bezeichnung);
        }) : [];
    };
    DeviceDetailedComponent.prototype.sortedDeliverers = function () {
        return this.deliverers ? this.deliverers.sort(function (a, b) {
            return a.companyname.localeCompare(b.companyname);
        }) : [];
    };
    DeviceDetailedComponent.prototype.getAttributes = function (values) {
        var _this = this;
        var att = this.deviceTypes
            .find(function (type) { return type.id === Number(_this.basicForm.get('deviceType').value); })
            .attribute.filter(function (attr) { return attr.bezeichnung !== 'Seriennummer'; });
        var formArray = this.basicForm.get('attributes');
        formArray.controls.splice(0);
        if (values) {
            var _loop_1 = function (i) {
                var attrValue = values.find(function (val) { return Number(val.id) === Number(i.id); });
                formArray.push(this_1.formBuilder.control(attrValue ? attrValue.value : ''));
            };
            var this_1 = this;
            for (var _i = 0, att_1 = att; _i < att_1.length; _i++) {
                var i = att_1[_i];
                _loop_1(i);
            }
        }
        else {
            for (var _a = 0, att_2 = att; _a < att_2.length; _a++) {
                var i = att_2[_a];
                formArray.push(this.formBuilder.control(''));
            }
        }
        return att;
    };
    DeviceDetailedComponent.prototype.isDeviceTypeSet = function () {
        return this.basicForm.get('deviceType').value !== '';
    };
    DeviceDetailedComponent.prototype.getSelectedDeviceType = function () {
        var _this = this;
        return this.sortedDeviceTypes().find(function (type) { return type.id === Number(_this.basicForm.get('deviceType').value); });
    };
    DeviceDetailedComponent.prototype.isDeviceTypeSW = function () {
        return this.getSelectedDeviceType()
            ? this.getSelectedDeviceType().is_software
            : false;
    };
    DeviceDetailedComponent.prototype.getMultiLabel = function () {
        return this.isDeviceTypeSW() ? 'Raum' : 'Seriennummer';
    };
    DeviceDetailedComponent.prototype.save = function () {
        var _this = this;
        if (this.isDeviceTypeSW()) {
            var returnObj = {
                hersteller: this.basicForm.value.producer,
                bezeichnung: this.basicForm.value.name,
                geweahrleistungsdauer: this.basicForm.value.warranty,
                lieferantId: this.basicForm.value.deliverer,
                komponentenArtId: this.basicForm.controls.deviceType.value,
                komponentenAttribute: this.mapAttributes(),
                raumId: null,
                belegId: this.basicForm.value.proof,
                einkaufsdatum: this.basicForm.value.purchase,
                id: this.basicForm.value.id,
                notiz: null
            };
            var raeume_1 = this.multiForm.get('array').value.filter(function (room) { return room; });
            this.api.createNewComponent(returnObj).then(function (resp) {
                var id = resp.id;
                _this.api.removeRoomsToSoftware(id).then(function () {
                    raeume_1.forEach(function (raum) { return _this.api.addSoftwareToRoom({
                        component_Id: id,
                        room_id: raum
                    }); });
                });
            });
        }
        else {
            var returnObj_1 = {
                hersteller: this.basicForm.value.producer,
                bezeichnung: this.basicForm.value.name,
                geweahrleistungsdauer: this.basicForm.value.warranty,
                lieferantId: this.basicForm.value.deliverer,
                komponentenArtId: this.basicForm.controls.deviceType.value,
                komponentenAttribute: this.mapAttributes(),
                raumId: this.basicForm.value.room,
                belegId: this.basicForm.value.proof,
                einkaufsdatum: this.basicForm.value.purchase,
                id: this.basicForm.value.id,
                notiz: null
            };
            var serialId_1 = this.getIdOfSerialnumber();
            this.multiForm.get('array').value.forEach(function (serial) {
                if (serial) {
                    var current = returnObj_1;
                    current.komponentenAttribute.push({
                        id: serialId_1,
                        value: serial
                    });
                    console.log(current, '!');
                    // TODO: send !!!HERE!!! to BE;
                    current.komponentenAttribute.pop();
                }
            });
        }
    };
    DeviceDetailedComponent.prototype.changeType = function (values) {
        if (this.currentTypeId === this.getSelectedDeviceType().id) {
            return;
        }
        this.currentTypeId = this.getSelectedDeviceType().id;
        this.currentAttributes = this.getAttributes(values);
    };
    DeviceDetailedComponent.prototype.mapAttributes = function () {
        var i;
        var retVal = [];
        for (i = 0; i < this.currentAttributes.length; i++) {
            retVal.push({
                id: this.currentAttributes[i].id,
                value: this.basicForm.value.attributes[i]
            });
        }
        return retVal;
    };
    DeviceDetailedComponent.prototype.getIdOfSerialnumber = function () {
        return this.getSelectedDeviceType().attribute.find(function (type) { return type.bezeichnung === 'Seriennummer'; }).id;
    };
    DeviceDetailedComponent.prototype.blueprint = function () {
        this.flagExtendable = true;
        this.basicForm.get('id').setValue(null);
        if (!this.isDeviceTypeSW()) {
            this.multiForm.get('array').controls[0].setValue('');
        }
    };
    DeviceDetailedComponent.prototype.enableSaveBtn = function () {
        if (this.isDeviceTypeSW()) {
            return this.basicForm.valid;
        }
        else {
            return this.basicForm.valid && this.multiForm.get('array').value.find(function (value) { return value; });
        }
    };
    DeviceDetailedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-detailed',
            template: __webpack_require__(/*! ./device-detailed.component.html */ "./src/app/device/device-detailed/device-detailed.component.html"),
            styles: [__webpack_require__(/*! ./device-detailed.component.less */ "./src/app/device/device-detailed/device-detailed.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_api_client_service__WEBPACK_IMPORTED_MODULE_4__["ApiClientService"]])
    ], DeviceDetailedComponent);
    return DeviceDetailedComponent;
}());



/***/ }),

/***/ "./src/app/device/device-detailed/multi-input/multi-input.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/device/device-detailed/multi-input/multi-input.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n  <div formArrayName=\"array\">\n    <ng-container *ngFor=\"let control of array.controls; let i = index\">\n    <div class=\"row mt-1\">\n      <label class=\"col-3 col-form-label\"><ng-container *ngIf=\"i === 0\" >{{ label }}*</ng-container></label>\n      <div class=\"col-6\">\n        <ng-template [ngIf]=\"!isSelect\" [ngIfElse]=\"roomSelects\">\n        <input type=\"text\" class=\"form-control\" id=\"input-{{ i }}\" formControlName=\"{{ i }}\">\n        </ng-template>\n        <ng-template #roomSelects>\n            <select class=\"form-control\" id=\"select-{{ i }}\" formControlName=\"{{ i }}\">\n                <option disabled selected hidden></option>\n                <option *ngFor=\"let room of availableRooms(i)\" [value]=\"room.id\">{{ room.nr }}</option>\n              </select>\n        </ng-template>\n      </div>\n      <div *ngIf=\"array.controls.length > 1\"class=\"col\">\n        <button class=\"delete-btn\" (click)=\"removeItem(i)\">x</button>\n      </div>\n    </div>\n    </ng-container>\n    <div class=\"row\">\n    <div class=\"col-3\"></div>\n    <div *ngIf=\"isSelect || extendable\" class=\"col-6\">\n    <button class=\"ml-5\" *ngIf=\"!isSelect || rooms.length - array.controls.length > 0\" (click)=\"addItem()\">+</button>\n  </div>\n  </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/device/device-detailed/multi-input/multi-input.component.less":
/*!*******************************************************************************!*\
  !*** ./src/app/device/device-detailed/multi-input/multi-input.component.less ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-btn {\n  margin-left: -10%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcndpdHpsL0RvY3VtZW50cy9FbnR3aWNrbHVuZy9Bbmd1bGFyIFdvcmtzcGFjZS9pdC12ZXJ3YWx0dW5nL2Zyb250ZW5kL3NyYy9hcHAvZGV2aWNlL2RldmljZS1kZXRhaWxlZC9tdWx0aS1pbnB1dC9tdWx0aS1pbnB1dC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvZGV2aWNlL2RldmljZS1kZXRhaWxlZC9tdWx0aS1pbnB1dC9tdWx0aS1pbnB1dC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kZXZpY2UvZGV2aWNlLWRldGFpbGVkL211bHRpLWlucHV0L211bHRpLWlucHV0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbGV0ZS1idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAlO1xufSIsIi5kZWxldGUtYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/device/device-detailed/multi-input/multi-input.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/device/device-detailed/multi-input/multi-input.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MultiInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiInputComponent", function() { return MultiInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var MultiInputComponent = /** @class */ (function () {
    function MultiInputComponent(builder) {
        this.builder = builder;
        this.rooms = [];
    }
    MultiInputComponent.prototype.ngOnInit = function () {
        if (!this.form) {
            this.form = this.builder.group({
                array: this.builder.array([])
            });
            this.addItem();
        }
    };
    Object.defineProperty(MultiInputComponent.prototype, "isSelect", {
        get: function () {
            return this.label !== 'Seriennummer';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiInputComponent.prototype, "array", {
        get: function () {
            return this.form.get('array');
        },
        enumerable: true,
        configurable: true
    });
    MultiInputComponent.prototype.addItem = function () {
        this.array.push(this.builder.control(''));
    };
    MultiInputComponent.prototype.removeItem = function (index) {
        this.array.removeAt(index);
        this.array.updateValueAndValidity();
    };
    MultiInputComponent.prototype.availableRooms = function (index) {
        var _this = this;
        var id;
        if (index !== undefined && this.array.controls[index]) {
            id = Number(this.array.controls[index].value);
        }
        return this.rooms.filter(function (room) { return !_this.array.value.some(function (val) { return Number(val) === room.id; }) || room.id === id; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], MultiInputComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MultiInputComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MultiInputComponent.prototype, "rooms", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MultiInputComponent.prototype, "extendable", void 0);
    MultiInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multi-input',
            template: __webpack_require__(/*! ./multi-input.component.html */ "./src/app/device/device-detailed/multi-input/multi-input.component.html"),
            styles: [__webpack_require__(/*! ./multi-input.component.less */ "./src/app/device/device-detailed/multi-input/multi-input.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], MultiInputComponent);
    return MultiInputComponent;
}());



/***/ }),

/***/ "./src/app/device/device-overview/device-overview.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/device/device-overview/device-overview.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid d-flex flex-column\">\n        <div class=\"row\">\n    \n    \n            <!--Searchbar with Icon-->\n            <div class=\"row no-gutters\">\n                <div class=\"col-md-8\">\n                     <input [(ngModel)]=\"searchText\" class=\"form-control border-secondary border-right-0 rounded-0\" type=\"search\" value=\"Suche\" id=\"example-search-input4\">\n                </div>\n                <div class=\"col-auto\">\n                     <button class=\"btn btn-outline-secondary border-left-0 rounded-0 rounded-right\" type=\"button\">\n                        <i class=\"fa fa-search\"></i>\n                     </button>\n                </div>\n            </div>\n      \n        </div>\n        <hr>\n        <div class=\"ex1\">\n            <div class=\"flex-container\">\n                <app-device-card *ngFor=\"let deviceCard of deviceCards; let i = index\" [card]=\"deviceCard\" (click)=\"showDetailedDevice(devices[i].id)\" ></app-device-card>\n                <app-add-device-card></app-add-device-card>\n            </div>\n        </div>\n\n</div>"

/***/ }),

/***/ "./src/app/device/device-overview/device-overview.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/device/device-overview/device-overview.component.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\napp-device-card {\n  padding: 10px;\n}\napp-add-device-card {\n  padding: 10px;\n}\ndiv.ex1 {\n  max-height: 500px;\n  overflow: scroll;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcndpdHpsL0RvY3VtZW50cy9FbnR3aWNrbHVuZy9Bbmd1bGFyIFdvcmtzcGFjZS9pdC12ZXJ3YWx0dW5nL2Zyb250ZW5kL3NyYy9hcHAvZGV2aWNlL2RldmljZS1vdmVydmlldy9kZXZpY2Utb3ZlcnZpZXcuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2RldmljZS9kZXZpY2Utb3ZlcnZpZXcvZGV2aWNlLW92ZXJ2aWV3LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUlBLG9CQUFBO0VBSUEsYUFBQTtFQUdBLGVBQUE7RUFDQSx1QkFBQTtVQUFBLDJCQUFBO0FDSEo7QURNRTtFQUNFLGFBQUE7QUNKSjtBRE1FO0VBQ0UsYUFBQTtBQ0pKO0FET0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9kZXZpY2UvZGV2aWNlLW92ZXJ2aWV3L2RldmljZS1vdmVydmlldy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgXG4gICAgXG4gICAgXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgXG4gIGFwcC1kZXZpY2UtY2FyZCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICBhcHAtYWRkLWRldmljZS1jYXJkIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIFxuICBkaXYuZXgxIHtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICB9XG4gICIsIi5mbGV4LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuYXBwLWRldmljZS1jYXJkIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbmFwcC1hZGQtZGV2aWNlLWNhcmQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuZGl2LmV4MSB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/device/device-overview/device-overview.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/device/device-overview/device-overview.component.ts ***!
  \*********************************************************************/
/*! exports provided: DeviceOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceOverviewComponent", function() { return DeviceOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_fe_entities_card_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/fe-entities/card.entity */ "./src/app/fe-entities/card.entity.ts");




var DeviceOverviewComponent = /** @class */ (function () {
    function DeviceOverviewComponent(_router) {
        this._router = _router;
        this.SearchText = '';
    }
    DeviceOverviewComponent.prototype.ngOnInit = function () {
        this.devices = this.getDevices();
        this.deviceAttributes = this.getDeviceAttributes();
        this.deviceCards = this.mapToDCards(this.devices);
    };
    DeviceOverviewComponent.prototype.getDevices = function () {
        return [
            {
                id: 11,
                bezeichnung: 'Computer',
                raumId: 222,
                lieferantId: 48768,
                einkaufsdatum: '2019-07-13',
                geweahrleistungsdauer: 12,
                notiz: 'Ein komischer Rechner',
                hersteller: 'Apple',
                belegId: 1234,
                komponentenArtId: 1,
                komponentenAttribute: [
                    { id: 2, value: '4GB RAM' },
                    { id: 1, value: '293474-34764' },
                    { id: 3, value: 'GTX 2070' }
                ]
            },
            {
                id: 11,
                bezeichnung: 'Computer',
                raumId: 222,
                lieferantId: 48768,
                einkaufsdatum: '2019-07-13',
                geweahrleistungsdauer: 12,
                notiz: 'Ein komischer Rechner',
                hersteller: 'Apple',
                belegId: 1234,
                komponentenArtId: 1,
                komponentenAttribute: [
                    { id: 2, value: '4GB RAM' },
                    { id: 1, value: '293474-34764' },
                    { id: 3, value: 'GTX 2070' }
                ]
            },
            {
                id: 12,
                bezeichnung: 'Computer',
                raumId: 222,
                lieferantId: 48768,
                einkaufsdatum: '2019-07-13',
                geweahrleistungsdauer: 12,
                notiz: 'Ein komischer Rechner',
                hersteller: 'Apple',
                belegId: 1234,
                komponentenArtId: 1,
                komponentenAttribute: [
                    { id: 2, value: '4GB RAM' },
                    { id: 1, value: '293474-34764' },
                    { id: 3, value: 'GTX 2070' }
                ]
            },
            {
                id: 13,
                bezeichnung: 'Computer',
                raumId: 222,
                lieferantId: 48768,
                einkaufsdatum: '2019-07-13',
                geweahrleistungsdauer: 12,
                notiz: 'Ein komischer Rechner',
                hersteller: 'Apple',
                belegId: 1234,
                komponentenArtId: 1,
                komponentenAttribute: [
                    { id: 2, value: '4GB RAM' },
                    { id: 1, value: '293474-34764' },
                    { id: 3, value: 'GTX 2070' }
                ]
            },
            {
                id: 11,
                bezeichnung: 'Computer',
                raumId: 222,
                lieferantId: 48768,
                einkaufsdatum: '2019-07-13',
                geweahrleistungsdauer: 12,
                notiz: 'Ein komischer Rechner',
                hersteller: 'Apple',
                belegId: 1234,
                komponentenArtId: 1,
                komponentenAttribute: [
                    { id: 2, value: '4GB RAM' },
                    { id: 1, value: '293474-34764' },
                    { id: 3, value: 'GTX 2070' }
                ]
            },
            {
                id: 11,
                bezeichnung: 'Computer',
                raumId: 222,
                lieferantId: 48768,
                einkaufsdatum: '2019-07-13',
                geweahrleistungsdauer: 12,
                notiz: 'Ein komischer Rechner',
                hersteller: 'Apple',
                belegId: 1234,
                komponentenArtId: 1,
                komponentenAttribute: [
                    { id: 2, value: '4GB RAM' },
                    { id: 1, value: '293474-34764' },
                    { id: 3, value: 'GTX 2070' }
                ]
            },
            {
                id: 11,
                bezeichnung: 'Computer',
                raumId: 222,
                lieferantId: 48768,
                einkaufsdatum: '2019-07-13',
                geweahrleistungsdauer: 12,
                notiz: 'Ein komischer Rechner',
                hersteller: 'Apple',
                belegId: 1234,
                komponentenArtId: 1,
                komponentenAttribute: [
                    { id: 2, value: '4GB RAM' },
                    { id: 1, value: '293474-34764' },
                    { id: 3, value: 'GTX 2070' }
                ]
            },
            {
                id: 11,
                bezeichnung: 'Computer',
                raumId: 222,
                lieferantId: 48768,
                einkaufsdatum: '2019-07-13',
                geweahrleistungsdauer: 12,
                notiz: 'Ein komischer Rechner',
                hersteller: 'Apple',
                belegId: 1234,
                komponentenArtId: 1,
                komponentenAttribute: [
                    { id: 2, value: '4GB RAM' },
                    { id: 1, value: '293474-34764' },
                    { id: 3, value: 'GTX 2070' }
                ]
            },
            {
                id: 11,
                bezeichnung: 'Computer',
                raumId: 222,
                lieferantId: 48768,
                einkaufsdatum: '2019-07-13',
                geweahrleistungsdauer: 12,
                notiz: 'Ein komischer Rechner',
                hersteller: 'Apple',
                belegId: 1234,
                komponentenArtId: 1,
                komponentenAttribute: [
                    { id: 2, value: '4GB RAM' },
                    { id: 1, value: '293474-34764' },
                    { id: 3, value: 'GTX 2070' }
                ]
            },
            {
                id: 11,
                bezeichnung: 'Computer',
                raumId: 222,
                lieferantId: 48768,
                einkaufsdatum: '2019-07-13',
                geweahrleistungsdauer: 12,
                notiz: 'Ein komischer Rechner',
                hersteller: 'Apple',
                belegId: 1234,
                komponentenArtId: 1,
                komponentenAttribute: [
                    { id: 2, value: '4GB RAM' },
                    { id: 1, value: '293474-34764' },
                    { id: 3, value: 'GTX 2070' }
                ]
            },
            {
                id: 11,
                bezeichnung: 'Computer',
                raumId: 222,
                lieferantId: 48768,
                einkaufsdatum: '2019-07-13',
                geweahrleistungsdauer: 12,
                notiz: 'Ein komischer Rechner',
                hersteller: 'Apple',
                belegId: 1234,
                komponentenArtId: 1,
                komponentenAttribute: [
                    { id: 2, value: '4GB RAM' },
                    { id: 1, value: '293474-34764' },
                    { id: 3, value: 'GTX 2070' }
                ]
            },
            {
                id: 11,
                bezeichnung: 'Computer',
                raumId: 222,
                lieferantId: 48768,
                einkaufsdatum: '2019-07-13',
                geweahrleistungsdauer: 12,
                notiz: 'Ein komischer Rechner',
                hersteller: 'Apple',
                belegId: 1234,
                komponentenArtId: 1,
                komponentenAttribute: [
                    { id: 2, value: '4GB RAM' },
                    { id: 1, value: '293474-34764' },
                    { id: 3, value: 'GTX 2070' }
                ]
            }
        ];
    };
    DeviceOverviewComponent.prototype.getDeviceAttributes = function () {
        return [
            {
                id: 1,
                bezeichnung: 'Seriennummer'
            },
            {
                id: 2,
                bezeichung: 'RAM Größe'
            },
            {
                id: 3,
                bezeichnung: 'Lumen'
            }
        ];
    };
    DeviceOverviewComponent.prototype.mapToDCards = function (devices) {
        var _this = this;
        var cards = [];
        for (var i = 0; i < devices.length; i++) {
            var card = new src_app_fe_entities_card_entity__WEBPACK_IMPORTED_MODULE_3__["Card"](devices[i].bezeichnung, devices[i].hersteller, false, devices[i].komponentenAttribute.find(function (attr) { return attr.id === _this.getSeriennummerId(); }).value);
            cards[i] = card;
        }
        return cards;
    };
    DeviceOverviewComponent.prototype.showDetailedDevice = function (id) {
        this._router.navigate(['devices/' + id]);
    };
    DeviceOverviewComponent.prototype.getSeriennummerId = function () {
        return this.getDeviceAttributes().find(function (attr) { return attr.bezeichnung === 'Seriennummer'; }).id;
    };
    DeviceOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-overview',
            template: __webpack_require__(/*! ./device-overview.component.html */ "./src/app/device/device-overview/device-overview.component.html"),
            styles: [__webpack_require__(/*! ./device-overview.component.less */ "./src/app/device/device-overview/device-overview.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DeviceOverviewComponent);
    return DeviceOverviewComponent;
}());



/***/ }),

/***/ "./src/app/device/device-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/device/device-routing.module.ts ***!
  \*************************************************/
/*! exports provided: DeviceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceRoutingModule", function() { return DeviceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _device_overview_device_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device-overview/device-overview.component */ "./src/app/device/device-overview/device-overview.component.ts");
/* harmony import */ var _device_detailed_device_detailed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./device-detailed/device-detailed.component */ "./src/app/device/device-detailed/device-detailed.component.ts");





var routes = [
    { path: '', component: _device_overview_device_overview_component__WEBPACK_IMPORTED_MODULE_3__["DeviceOverviewComponent"] },
    { path: ':id', component: _device_detailed_device_detailed_component__WEBPACK_IMPORTED_MODULE_4__["DeviceDetailedComponent"] }
];
var DeviceRoutingModule = /** @class */ (function () {
    function DeviceRoutingModule() {
    }
    DeviceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DeviceRoutingModule);
    return DeviceRoutingModule;
}());



/***/ }),

/***/ "./src/app/device/device.module.ts":
/*!*****************************************!*\
  !*** ./src/app/device/device.module.ts ***!
  \*****************************************/
/*! exports provided: DeviceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceModule", function() { return DeviceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _device_detailed_device_detailed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./device-detailed/device-detailed.component */ "./src/app/device/device-detailed/device-detailed.component.ts");
/* harmony import */ var _device_overview_device_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./device-overview/device-overview.component */ "./src/app/device/device-overview/device-overview.component.ts");
/* harmony import */ var _device_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-routing.module */ "./src/app/device/device-routing.module.ts");
/* harmony import */ var _device_detailed_multi_input_multi_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./device-detailed/multi-input/multi-input.component */ "./src/app/device/device-detailed/multi-input/multi-input.component.ts");
/* harmony import */ var _device_card_device_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./device-card/device-card.component */ "./src/app/device/device-card/device-card.component.ts");
/* harmony import */ var _add_device_card_add_device_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-device-card/add-device-card.component */ "./src/app/device/add-device-card/add-device-card.component.ts");










var DeviceModule = /** @class */ (function () {
    function DeviceModule() {
    }
    DeviceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_device_overview_device_overview_component__WEBPACK_IMPORTED_MODULE_5__["DeviceOverviewComponent"], _device_detailed_device_detailed_component__WEBPACK_IMPORTED_MODULE_4__["DeviceDetailedComponent"], _device_detailed_multi_input_multi_input_component__WEBPACK_IMPORTED_MODULE_7__["MultiInputComponent"], _device_card_device_card_component__WEBPACK_IMPORTED_MODULE_8__["DeviceCardComponent"], _add_device_card_add_device_card_component__WEBPACK_IMPORTED_MODULE_9__["AddDeviceCardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _device_routing_module__WEBPACK_IMPORTED_MODULE_6__["DeviceRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ]
        })
    ], DeviceModule);
    return DeviceModule;
}());



/***/ })

}]);
//# sourceMappingURL=device-device-module.js.map