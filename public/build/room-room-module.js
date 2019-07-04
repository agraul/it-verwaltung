(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["room-room-module"],{

/***/ "./src/app/room/add-card/add-card.component.html":
/*!*******************************************************!*\
  !*** ./src/app/room/add-card/add-card.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card rounded-0\" style=\"cursor: pointer;\">\n  <div class=\"card-body\" >\n      <i class=\"fas fa-plus\" ></i>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/room/add-card/add-card.component.less":
/*!*******************************************************!*\
  !*** ./src/app/room/add-card/add-card.component.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb20vYWRkLWNhcmQvYWRkLWNhcmQuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/room/add-card/add-card.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/room/add-card/add-card.component.ts ***!
  \*****************************************************/
/*! exports provided: AddCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardComponent", function() { return AddCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddCardComponent = /** @class */ (function () {
    function AddCardComponent() {
    }
    AddCardComponent.prototype.ngOnInit = function () {
    };
    AddCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-card',
            template: __webpack_require__(/*! ./add-card.component.html */ "./src/app/room/add-card/add-card.component.html"),
            styles: [__webpack_require__(/*! ./add-card.component.less */ "./src/app/room/add-card/add-card.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddCardComponent);
    return AddCardComponent;
}());



/***/ }),

/***/ "./src/app/room/room-add/room-add.component.html":
/*!*******************************************************!*\
  !*** ./src/app/room/room-add/room-add.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div class=\"row\">\n    <h5>Raum hinzufügen:</h5>\n  </div>\n  <hr>\n  <div *ngIf=\"warn\" class=\"alert alert-danger\" role=\"alert\">\n    Bitte füllen Sie alle Pflichtfelder aus!\n  </div>\n  <div class=\"row mt-1\">\n    <label for=\"nr\" class=\"col-3 col-form-label\">Raumnummer*</label>\n    <div class=\"col-6\">\n      <input [(ngModel)]=\"room.nr\" type=\"text\" class=\"form-control\" id=\"nr\">\n    </div>\n  </div>\n    \n  <div class=\"row mt-1\">\n    <label for=\"bezeichnung\" class=\"col-3 col-form-label\">Bezeichnung*</label>\n    <div class=\"col-6\">\n      <input [(ngModel)]=\"room.bezeichnung\" type=\"text\" class=\"form-control\" id=\"bezeichnung\">\n    </div>\n  </div>\n\n  <div class=\"row mt-1\">\n    <label for=\"notiz\" class=\"col-3 col-form-label\">Raumnotiz</label>\n    <div class=\"col-6\">\n      <input [(ngModel)]=\"room.notiz\" type=\"text\" class=\"form-control\" id=\"notiz\">\n    </div>\n  </div>\n  <hr>\n  <button class=\"btn btn-primary\" (click)=\"addRoom()\">\n    Raum hinzufügen\n  </button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/room/room-add/room-add.component.less":
/*!*******************************************************!*\
  !*** ./src/app/room/room-add/room-add.component.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb20vcm9vbS1hZGQvcm9vbS1hZGQuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/room/room-add/room-add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/room/room-add/room-add.component.ts ***!
  \*****************************************************/
/*! exports provided: RoomAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomAddComponent", function() { return RoomAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_api_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/api-client.service */ "./src/app/core/api-client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RoomAddComponent = /** @class */ (function () {
    function RoomAddComponent(api, router) {
        this.api = api;
        this.router = router;
        this.room = {
            nr: '',
            bezeichnung: '',
            notiz: ''
        };
        this.warn = false;
    }
    RoomAddComponent.prototype.ngOnInit = function () {
    };
    RoomAddComponent.prototype.addRoom = function () {
        var _this = this;
        if (this.room.nr != '' && this.room.bezeichnung != '') {
            this.api.createNewRoom(this.room).then(function () {
                _this.router.navigate(['/rooms']);
            });
        }
        else {
            this.warn = true;
        }
    };
    RoomAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-room-add',
            template: __webpack_require__(/*! ./room-add.component.html */ "./src/app/room/room-add/room-add.component.html"),
            styles: [__webpack_require__(/*! ./room-add.component.less */ "./src/app/room/room-add/room-add.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_api_client_service__WEBPACK_IMPORTED_MODULE_2__["ApiClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RoomAddComponent);
    return RoomAddComponent;
}());



/***/ }),

/***/ "./src/app/room/room-card/room-card.component.html":
/*!*********************************************************!*\
  !*** ./src/app/room/room-card/room-card.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-item card rounded-0\" style=\"cursor: pointer;\">\n    <div class=\"card-header\">\n            {{card.header}}\n        <span *ngIf=\"card.has_badge == true\" class=\"badge badge-primary\" style=\"float: right\">\n                <i class=\"far fa-comment-alt\"></i>\n        </span>\n    </div>\n    <div class=\"card-body\" style=\"margin: 0 auto; padding-top: 1px; padding-bottom: 1px\">\n        <div class=\"row\">{{card.body}}</div>\n        <div class=\"row\">{{card.footer}}</div>\n    </div>\n    \n</div>"

/***/ }),

/***/ "./src/app/room/room-card/room-card.component.less":
/*!*********************************************************!*\
  !*** ./src/app/room/room-card/room-card.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb20vcm9vbS1jYXJkL3Jvb20tY2FyZC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/room/room-card/room-card.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/room/room-card/room-card.component.ts ***!
  \*******************************************************/
/*! exports provided: RoomCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomCardComponent", function() { return RoomCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RoomCardComponent = /** @class */ (function () {
    function RoomCardComponent() {
        this.card = {};
    }
    RoomCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoomCardComponent.prototype, "card", void 0);
    RoomCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-room-card',
            template: __webpack_require__(/*! ./room-card.component.html */ "./src/app/room/room-card/room-card.component.html"),
            styles: [__webpack_require__(/*! ./room-card.component.less */ "./src/app/room/room-card/room-card.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RoomCardComponent);
    return RoomCardComponent;
}());



/***/ }),

/***/ "./src/app/room/room-detailed/room-detailed.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/room/room-detailed/room-detailed.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n        <div class=\"row\">\n            <b class=\"col-2\">\n                Raum {{room.nr}}\n            </b>\n            <b class=\"col\">\n                {{room.bezeichnung}}\n            </b>\n        </div> \n        <hr>\n        <div class=\"ex1\">\n            <b>Hardware:</b>\n            <br>\n            <br>\n            \n            <div class=\"flex-container\" style=\"padding: 1%\">\n                <app-room-card *ngFor=\"let component of overViewHComponents; let i = index\" [card]=\"component\" (click)=\"clickCard(room.komponenten[i].id)\" [ngClass]=\"{'active': isCardSelected(room.komponenten[i].id)}\" ></app-room-card>\n                <app-add-card></app-add-card>\n            </div>\n\n            <hr>\n            <b>Software:</b>\n            <br>\n            <br>\n            <div class=\"flex-container\" style=\"padding: 1%\">\n                <app-room-card  *ngFor=\"let component of overViewSComponents;\" [card]=\"component\"></app-room-card>\n                <app-add-card></app-add-card>\n            </div>\n        </div>\n\n        <hr>\n        <footer>\n            <nav class=\"navbar navbar-expand-lg navbar-light bg-dark\">\n                <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                    <button (click)=\"toggleSelectMode()\" class=\"btn btn-success\">{{selectButtonValue}}</button>\n                    <button (click)=\"rejectDevices()\" *ngIf=\"selectModeActive\" style=\"float: right\" type=\"button\" class=\"btn btn-danger\">Ausmustern</button>\n                    <button (click)=\"maintainDevices()\" *ngIf=\"selectModeActive\" style=\"float: right\" type=\"button\" class=\"btn btn-danger\">Warten</button>\n                </div>\n            </nav>\n        </footer>\n\n        <hr >\n        <div class=\"row form-group\">\n            <label for=\"exampleFormControlTextarea1\"><b>Raumkommentar:</b></label>\n            <textarea [(ngModel)]=\"roomComment\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n        </div>\n        <div class=\"row\" style=\"float: right\">\n            <button (click)=\"saveComment(room.id)\" type=\"button\" class=\"btn btn-primary\">Speichern</button>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/room/room-detailed/room-detailed.component.less":
/*!*****************************************************************!*\
  !*** ./src/app/room/room-detailed/room-detailed.component.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\ndiv.ex1 {\n  max-height: 500px;\n  overflow: scroll;\n}\napp-room-card {\n  padding: 10px;\n}\napp-add-card {\n  padding: 10px;\n}\n.footer {\n  position: relative;\n  bottom: 0;\n  height: 60px;\n  width: 100%;\n  padding-top: 20px;\n  background-color: #214761;\n  color: #FFFFFF;\n}\n.active {\n  color: green;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcndpdHpsL0RvY3VtZW50cy9FbnR3aWNrbHVuZy9Bbmd1bGFyIFdvcmtzcGFjZS9pdC12ZXJ3YWx0dW5nL2Zyb250ZW5kL3NyYy9hcHAvcm9vbS9yb29tLWRldGFpbGVkL3Jvb20tZGV0YWlsZWQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3Jvb20vcm9vbS1kZXRhaWxlZC9yb29tLWRldGFpbGVkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUlBLG9CQUFBO0VBSUEsYUFBQTtFQUdBLGVBQUE7RUFDQSx1QkFBQTtVQUFBLDJCQUFBO0FDSEo7QURLRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNISjtBREtBO0VBQ0UsYUFBQTtBQ0hGO0FES0E7RUFDRSxhQUFBO0FDSEY7QURLQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNIRjtBREtBO0VBQ0UsWUFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcm9vbS9yb29tLWRldGFpbGVkL3Jvb20tZGV0YWlsZWQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICBcbiAgICBcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBcbiAgICAtd2Via2l0LWZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuICBkaXYuZXgxIHtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICB9XG5hcHAtcm9vbS1jYXJkIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbmFwcC1hZGQtY2FyZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uZm9vdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOjIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTQ3NjE7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmFjdGl2ZSB7XG4gIGNvbG9yOiBncmVlbjtcbn0iLCIuZmxleC1jb250YWluZXIge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbmRpdi5leDEge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbmFwcC1yb29tLWNhcmQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuYXBwLWFkZC1jYXJkIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5mb290ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTQ3NjE7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmFjdGl2ZSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/room/room-detailed/room-detailed.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/room/room-detailed/room-detailed.component.ts ***!
  \***************************************************************/
/*! exports provided: RoomDetailedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomDetailedComponent", function() { return RoomDetailedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_fe_entities_card_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/fe-entities/card.entity */ "./src/app/fe-entities/card.entity.ts");




var RoomDetailedComponent = /** @class */ (function () {
    function RoomDetailedComponent(_router, _route) {
        this._router = _router;
        this._route = _route;
        // For Selecting Devices
        this.selectedDevices = new Array();
        this.selectModeActive = false;
        this.selectButtonValue = 'Auswahl';
        this.room = {
            id: 1,
            nr: "222",
            bezeichnung: "Computerraum",
            notiz: "Platzhalter fuer Raumnotiz",
            komponenten: [
                {
                    id: 5555,
                    bezeichnung: "Computer",
                    hersteller: "Lenovo",
                    seriennummer: "478348384",
                    is_software: false
                },
                {
                    id: 5556,
                    bezeichnung: "Computer",
                    hersteller: "hp",
                    seriennummer: "478348385",
                    is_software: false
                },
                {
                    id: 5557,
                    bezeichnung: "Computer",
                    hersteller: "Apple",
                    seriennummer: "478348386",
                    is_software: false
                },
                {
                    id: 5558,
                    bezeichnung: "Powerpoint",
                    hersteller: "Microsoft",
                    seriennummer: "4543-4343-65-665",
                    is_software: true
                }, {
                    id: 5559,
                    bezeichnung: "Computer",
                    hersteller: "Lenovo",
                    seriennummer: "478348384",
                    is_software: false
                },
                {
                    id: 5560,
                    bezeichnung: "Computer",
                    hersteller: "hp",
                    seriennummer: "478348385",
                    is_software: false
                },
                {
                    id: 5561,
                    bezeichnung: "Computer",
                    hersteller: "Apple",
                    seriennummer: "478348386",
                    is_software: false
                },
                {
                    id: 5562,
                    bezeichnung: "Powerpoint",
                    hersteller: "Microsoft",
                    seriennummer: "4543-4343-65-665",
                    is_software: true
                }, {
                    id: 5563,
                    bezeichnung: "Computer",
                    hersteller: "Lenovo",
                    seriennummer: "478348384",
                    is_software: false
                },
                {
                    id: 5564,
                    bezeichnung: "Computer",
                    hersteller: "hp",
                    seriennummer: "478348385",
                    is_software: false
                },
                {
                    id: 5565,
                    bezeichnung: "Computer",
                    hersteller: "Apple",
                    seriennummer: "478348386",
                    is_software: false
                },
                {
                    id: 5566,
                    bezeichnung: "Powerpoint",
                    hersteller: "Microsoft",
                    seriennummer: "4543-4343-65-665",
                    is_software: true
                },
                {
                    id: 5567,
                    bezeichnung: "Computer",
                    hersteller: "Lenovo",
                    seriennummer: "478348384",
                    is_software: false
                },
                {
                    id: 5568,
                    bezeichnung: "Computer",
                    hersteller: "hp",
                    seriennummer: "478348385",
                    is_software: false
                },
                {
                    id: 5569,
                    bezeichnung: "Computer",
                    hersteller: "Apple",
                    seriennummer: "478348386",
                    is_software: false
                },
                {
                    id: 5570,
                    bezeichnung: "Powerpoint",
                    hersteller: "Microsoft",
                    seriennummer: "4543-4343-65-665",
                    is_software: true
                }
            ]
        };
    }
    RoomDetailedComponent.prototype.ngOnInit = function () {
        this.getRoom();
        this.overViewHComponents = this.mapHToCards(this.room.komponenten);
        this.overViewSComponents = this.mapSToCards(this.room.komponenten);
        this.roomComment = this.room.notiz;
    };
    /**
     * Maps The Components which are Hardware, to Card Array for displaying
     * @param comps
     */
    RoomDetailedComponent.prototype.mapHToCards = function (comps) {
        var cards = [];
        var cardCounter = 0;
        for (var i = 0; i < comps.length; i++) {
            // Wenn Hardware
            if (!comps[i].is_software) {
                var card = new src_app_fe_entities_card_entity__WEBPACK_IMPORTED_MODULE_3__["Card"](comps[i].bezeichnung, comps[i].hersteller, false, comps[i].seriennummer);
                cards[cardCounter++] = card;
            }
        }
        return cards;
    };
    RoomDetailedComponent.prototype.mapSToCards = function (comps) {
        var cards = [];
        var cardCounter = 0;
        for (var i = 0; i < comps.length; i++) {
            // Wenn Hardware
            if (comps[i].is_software) {
                var card = new src_app_fe_entities_card_entity__WEBPACK_IMPORTED_MODULE_3__["Card"](comps[i].bezeichnung, comps[i].seriennummer, false);
                cards[cardCounter++] = card;
            }
        }
        return cards;
    };
    RoomDetailedComponent.prototype.clickCard = function (id) {
        if (!this.selectModeActive) {
            this._router.navigate(['devices/' + id]);
        }
        else {
            // IF Device is not selected
            if (!this.selectedDevices.find(function (resp) { return resp === id; })) {
                this.selectedDevices.push(id);
            }
            else {
                // IF device is already selected
                var index = this.selectedDevices.indexOf(id, 0);
                if (index > -1) {
                    this.selectedDevices.splice(index, 1);
                }
            }
        }
        console.log(this.selectedDevices);
    };
    RoomDetailedComponent.prototype.rejectDevices = function () {
        var devicesToReject = this.selectedDevices;
        //TODO Api call for moving Devices in Ausmusterung
    };
    RoomDetailedComponent.prototype.maintainDevices = function () {
        var devicesToMaintain = this.selectedDevices;
        //TODO API call for moving Devices in Wartung
    };
    RoomDetailedComponent.prototype.showDetailedHCard = function (id) {
        this._router.navigate(['devices/' + id]);
    };
    RoomDetailedComponent.prototype.getRoom = function () {
        var roomId = this.getRoomId();
        // TODO get specific room from db
        return;
    };
    RoomDetailedComponent.prototype.getRoomId = function () {
        return this._route.snapshot.url[0].path;
    };
    RoomDetailedComponent.prototype.saveComment = function (id) {
        // TODO save the comment to db
    };
    RoomDetailedComponent.prototype.toggleSelectMode = function () {
        if (this.selectModeActive) {
            this.selectModeActive = false;
            this.selectedDevices = new Array();
            this.selectButtonValue = 'Auswählen';
        }
        else {
            this.selectModeActive = true;
            this.selectButtonValue = 'Aufheben';
        }
    };
    RoomDetailedComponent.prototype.isCardSelected = function (id) {
        if (this.selectedDevices.find(function (resp) { return resp === id; })) {
            return true;
        }
        else {
            return false;
        }
    };
    RoomDetailedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-room-detailed',
            template: __webpack_require__(/*! ./room-detailed.component.html */ "./src/app/room/room-detailed/room-detailed.component.html"),
            styles: [__webpack_require__(/*! ./room-detailed.component.less */ "./src/app/room/room-detailed/room-detailed.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RoomDetailedComponent);
    return RoomDetailedComponent;
}());



/***/ }),

/***/ "./src/app/room/room-overview/room-overview.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/room/room-overview/room-overview.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n\n\n    <!--Searchbar with Icon-->\n    <div class=\"row no-gutters\">\n      <div class=\"col-md-8\">\n        <input [(ngModel)]=\"searchText\" class=\"form-control border-secondary border-right-0 rounded-0\" type=\"search\"\n          value=\"Suche\" id=\"example-search-input4\">\n      </div>\n      <div class=\"col-auto\">\n        <button class=\"btn btn-outline-secondary border-left-0 rounded-0 rounded-right\" type=\"button\">\n          <i class=\"fa fa-search\"></i>\n        </button>\n      </div>\n    </div>\n\n  </div>\n  <hr>\n  <b>Räume:</b>\n  <div class=\"ex1\">\n    <div class=\"flex-container\" *ngIf=\"rooms\">\n      <app-room-card *ngFor=\"let room of (overViewRooms | roomPipe:searchText)\" [card]=\"room\"\n        (click)=\"showDetailedCard(room.header)\"></app-room-card>\n      <app-add-card (click)=\"showAddRoom()\"></app-add-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/room/room-overview/room-overview.component.less":
/*!*****************************************************************!*\
  !*** ./src/app/room/room-overview/room-overview.component.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\napp-room-card {\n  padding: 10px;\n}\napp-add-card {\n  padding: 10px;\n}\ndiv.ex1 {\n  max-height: 500px;\n  overflow: scroll;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcndpdHpsL0RvY3VtZW50cy9FbnR3aWNrbHVuZy9Bbmd1bGFyIFdvcmtzcGFjZS9pdC12ZXJ3YWx0dW5nL2Zyb250ZW5kL3NyYy9hcHAvcm9vbS9yb29tLW92ZXJ2aWV3L3Jvb20tb3ZlcnZpZXcuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3Jvb20vcm9vbS1vdmVydmlldy9yb29tLW92ZXJ2aWV3LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUlBLG9CQUFBO0VBSUEsYUFBQTtFQUdBLGVBQUE7RUFDQSx1QkFBQTtVQUFBLDJCQUFBO0FDSEY7QURNQTtFQUNFLGFBQUE7QUNKRjtBRE1BO0VBQ0UsYUFBQTtBQ0pGO0FET0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9yb29tL3Jvb20tb3ZlcnZpZXcvcm9vbS1vdmVydmlldy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcblxuICBcbiAgXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgXG4gIC13ZWJraXQtZmxleC1mbG93OiByb3cgd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbmFwcC1yb29tLWNhcmQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuYXBwLWFkZC1jYXJkIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuZGl2LmV4MSB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG5cblxuICAiLCIuZmxleC1jb250YWluZXIge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbmFwcC1yb29tLWNhcmQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuYXBwLWFkZC1jYXJkIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbmRpdi5leDEge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/room/room-overview/room-overview.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/room/room-overview/room-overview.component.ts ***!
  \***************************************************************/
/*! exports provided: RoomOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomOverviewComponent", function() { return RoomOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_fe_entities_card_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/fe-entities/card.entity */ "./src/app/fe-entities/card.entity.ts");
/* harmony import */ var src_app_core_api_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/api-client.service */ "./src/app/core/api-client.service.ts");





var RoomOverviewComponent = /** @class */ (function () {
    function RoomOverviewComponent(router, api) {
        this.router = router;
        this.api = api;
        this.searchText = '';
    }
    RoomOverviewComponent.prototype.ngOnInit = function () {
        this.getRooms();
    };
    RoomOverviewComponent.prototype.getRooms = function () {
        var _this = this;
        this.api.getAllRooms().then(function (resp) {
            _this.rooms = resp;
            _this.overViewRooms = _this.mapRoomsToCard(_this.rooms);
        });
        // TODO add api call for db entries
        /*
        return [
          {
            id: 1,
            nr: '222',
            bezeichnung: 'Computerraum',
            hat_notiz: true,
            komponenten_arten: null
          },
          {
            id: 2,
            nr: '223',
            bezeichnung: 'Computerraum',
            hat_notiz: false,
            komponenten_arten: null
          }
          , {
            id: 3,
            nr: '224',
            bezeichnung: 'Computerraum',
            hat_notiz: true,
            komponenten_arten: null
          }
        ]; */
    };
    /**
     *  Maps the room-array to card-array, for overview cards
     * @param rooms
     */
    RoomOverviewComponent.prototype.mapRoomsToCard = function (rooms) {
        var cards = [];
        for (var i = 0; i < rooms.length; i++) {
            var card = new src_app_fe_entities_card_entity__WEBPACK_IMPORTED_MODULE_3__["Card"](rooms[i].nr, rooms[i].bezeichnung, rooms[i].hat_notiz);
            cards[i] = card;
        }
        return cards;
    };
    /**
     *  navigates to detailed view
     * @param id
     */
    RoomOverviewComponent.prototype.showDetailedCard = function (id) {
        this.router.navigate(['rooms/' + id]);
    };
    RoomOverviewComponent.prototype.showAddRoom = function () {
        this.router.navigate(['rooms/add']);
    };
    RoomOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-room-overview',
            template: __webpack_require__(/*! ./room-overview.component.html */ "./src/app/room/room-overview/room-overview.component.html"),
            styles: [__webpack_require__(/*! ./room-overview.component.less */ "./src/app/room/room-overview/room-overview.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_core_api_client_service__WEBPACK_IMPORTED_MODULE_4__["ApiClientService"]])
    ], RoomOverviewComponent);
    return RoomOverviewComponent;
}());



/***/ }),

/***/ "./src/app/room/room-pipe.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/room/room-pipe.pipe.ts ***!
  \****************************************/
/*! exports provided: RoomPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomPipePipe", function() { return RoomPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RoomPipePipe = /** @class */ (function () {
    function RoomPipePipe() {
    }
    RoomPipePipe.prototype.transform = function (allRooms, search) {
        if (!allRooms || !search) {
            return allRooms;
        }
        return allRooms.filter(function (room) { return room.header === search || room.body === search; });
    };
    RoomPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'roomPipe'
        })
    ], RoomPipePipe);
    return RoomPipePipe;
}());



/***/ }),

/***/ "./src/app/room/room-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/room/room-routing.module.ts ***!
  \*********************************************/
/*! exports provided: RoomRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomRoutingModule", function() { return RoomRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _room_add_room_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room-add/room-add.component */ "./src/app/room/room-add/room-add.component.ts");
/* harmony import */ var _room_detailed_room_detailed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./room-detailed/room-detailed.component */ "./src/app/room/room-detailed/room-detailed.component.ts");
/* harmony import */ var _room_overview_room_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./room-overview/room-overview.component */ "./src/app/room/room-overview/room-overview.component.ts");






var routes = [
    { path: '', component: _room_overview_room_overview_component__WEBPACK_IMPORTED_MODULE_5__["RoomOverviewComponent"] },
    { path: 'add', component: _room_add_room_add_component__WEBPACK_IMPORTED_MODULE_3__["RoomAddComponent"] },
    { path: ':id', component: _room_detailed_room_detailed_component__WEBPACK_IMPORTED_MODULE_4__["RoomDetailedComponent"] },
];
var RoomRoutingModule = /** @class */ (function () {
    function RoomRoutingModule() {
    }
    RoomRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RoomRoutingModule);
    return RoomRoutingModule;
}());



/***/ }),

/***/ "./src/app/room/room.module.ts":
/*!*************************************!*\
  !*** ./src/app/room/room.module.ts ***!
  \*************************************/
/*! exports provided: RoomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomModule", function() { return RoomModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-card/add-card.component */ "./src/app/room/add-card/add-card.component.ts");
/* harmony import */ var _room_add_room_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./room-add/room-add.component */ "./src/app/room/room-add/room-add.component.ts");
/* harmony import */ var _room_card_room_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./room-card/room-card.component */ "./src/app/room/room-card/room-card.component.ts");
/* harmony import */ var _room_detailed_room_detailed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./room-detailed/room-detailed.component */ "./src/app/room/room-detailed/room-detailed.component.ts");
/* harmony import */ var _room_overview_room_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./room-overview/room-overview.component */ "./src/app/room/room-overview/room-overview.component.ts");
/* harmony import */ var _room_pipe_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./room-pipe.pipe */ "./src/app/room/room-pipe.pipe.ts");
/* harmony import */ var _room_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./room-routing.module */ "./src/app/room/room-routing.module.ts");











var RoomModule = /** @class */ (function () {
    function RoomModule() {
    }
    RoomModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_room_overview_room_overview_component__WEBPACK_IMPORTED_MODULE_8__["RoomOverviewComponent"], _room_detailed_room_detailed_component__WEBPACK_IMPORTED_MODULE_7__["RoomDetailedComponent"], _room_card_room_card_component__WEBPACK_IMPORTED_MODULE_6__["RoomCardComponent"], _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_4__["AddCardComponent"], _room_pipe_pipe__WEBPACK_IMPORTED_MODULE_9__["RoomPipePipe"], _room_add_room_add_component__WEBPACK_IMPORTED_MODULE_5__["RoomAddComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _room_routing_module__WEBPACK_IMPORTED_MODULE_10__["RoomRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], RoomModule);
    return RoomModule;
}());



/***/ })

}]);
//# sourceMappingURL=room-room-module.js.map