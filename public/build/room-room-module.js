(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["room-room-module"],{

/***/ "./src/app/room/add-card/add-card.component.html":
/*!*******************************************************!*\
  !*** ./src/app/room/add-card/add-card.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card rounded-0\">\n  <div class=\"card-body\" >\n      <i class=\"fas fa-plus\" ></i>\n  </div>\n</div>"

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

/***/ "./src/app/room/room-card/room-card.component.html":
/*!*********************************************************!*\
  !*** ./src/app/room/room-card/room-card.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-item card rounded-0\" >\n    <div class=\"card-header\">\n            {{card.header}}\n        <span *ngIf=\"card.has_badge == true\" class=\"badge badge-primary\" style=\"float: right\">\n                <i class=\"far fa-comment-alt\"></i>\n        </span>\n    </div>\n    <div class=\"card-body\" style=\"margin: 0 auto; padding-top: 1px; padding-bottom: 1px\">\n        <div class=\"row\">{{card.body}}</div>\n        <div class=\"row\">{{card.footer}}</div>\n    </div>\n    \n</div>"

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

module.exports = "<div class=\"container-fluid\">\n\n        <div class=\"row\">\n            <b class=\"col-2\">\n                Raum {{room.nr}}\n            </b>\n            <b class=\"col\">\n                {{room.bezeichnung}}\n            </b>\n        </div> \n        <hr>\n        <div class=\"ex1\">\n            <b>Hardware:</b>\n            <br>\n            <br>\n            \n            <div class=\"flex-container\" style=\"padding: 1%\">\n                <app-room-card *ngFor=\"let component of overViewHComponents; let i = index\" [card]=\"component\" (click)=\"showDetailedHCard(room.komponenten[i].id)\" ></app-room-card>\n                <app-add-card></app-add-card>\n            </div>\n\n            <hr>\n            <b>Software:</b>\n            <br>\n            <br>\n            <div class=\"flex-container\" style=\"padding: 1%\">\n                <app-room-card  *ngFor=\"let component of overViewSComponents\" [card]=\"component\" ></app-room-card>\n                <app-add-card></app-add-card>\n            </div>\n        </div>\n        <hr >\n        <div class=\"row form-group\">\n            <label for=\"exampleFormControlTextarea1\"><b>Raumkommentar:</b></label>\n            <textarea [(ngModel)]=\"roomComment\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n        </div>\n        <div class=\"row\" style=\"float: right\">\n            <button (click)=\"saveComment(room.id)\" type=\"button\" class=\"btn btn-primary\">Speichern</button>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/room/room-detailed/room-detailed.component.less":
/*!*****************************************************************!*\
  !*** ./src/app/room/room-detailed/room-detailed.component.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\ndiv.ex1 {\n  max-height: 500px;\n  overflow: scroll;\n}\napp-room-card {\n  padding: 10px;\n}\napp-add-card {\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcndpdHpsL0RvY3VtZW50cy9FbnR3aWNrbHVuZy9Bbmd1bGFyIFdvcmtzcGFjZS9pdC12ZXJ3YWx0dW5nL2Zyb250ZW5kL3NyYy9hcHAvcm9vbS9yb29tLWRldGFpbGVkL3Jvb20tZGV0YWlsZWQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3Jvb20vcm9vbS1kZXRhaWxlZC9yb29tLWRldGFpbGVkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUlBLG9CQUFBO0VBSUEsYUFBQTtFQUdBLGVBQUE7RUFDQSx1QkFBQTtVQUFBLDJCQUFBO0FDSEo7QURLRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNISjtBREtBO0VBQ0UsYUFBQTtBQ0hGO0FES0E7RUFDRSxhQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9yb29tL3Jvb20tZGV0YWlsZWQvcm9vbS1kZXRhaWxlZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgIFxuICAgIFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIFxuICAgIC13ZWJraXQtZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG4gIGRpdi5leDEge1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gIH1cbmFwcC1yb29tLWNhcmQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuYXBwLWFkZC1jYXJkIHtcbiAgcGFkZGluZzogMTBweDtcbn0iLCIuZmxleC1jb250YWluZXIge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbmRpdi5leDEge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbmFwcC1yb29tLWNhcmQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuYXBwLWFkZC1jYXJkIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbiJdfQ== */"

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
        this.room = {
            id: 1,
            nr: '222',
            bezeichnung: 'Computerraum',
            notiz: 'Platzhalter fuer Raumnotiz',
            komponenten: [
                {
                    id: 5555,
                    bezeichnung: 'Computer',
                    hersteller: 'Lenovo',
                    seriennummer: '478348384',
                    is_software: false
                },
                {
                    id: 5556,
                    bezeichnung: 'Computer',
                    hersteller: 'hp',
                    seriennummer: '478348385',
                    is_software: false
                },
                {
                    id: 5557,
                    bezeichnung: 'Computer',
                    hersteller: 'Apple',
                    seriennummer: '478348386',
                    is_software: false
                },
                {
                    id: 5557,
                    bezeichnung: 'Powerpoint',
                    hersteller: 'Microsoft',
                    seriennummer: '4543-4343-65-665',
                    is_software: true
                }, {
                    id: 5555,
                    bezeichnung: 'Computer',
                    hersteller: 'Lenovo',
                    seriennummer: '478348384',
                    is_software: false
                },
                {
                    id: 5556,
                    bezeichnung: 'Computer',
                    hersteller: 'hp',
                    seriennummer: '478348385',
                    is_software: false
                },
                {
                    id: 5557,
                    bezeichnung: 'Computer',
                    hersteller: 'Apple',
                    seriennummer: '478348386',
                    is_software: false
                },
                {
                    id: 5557,
                    bezeichnung: 'Powerpoint',
                    hersteller: 'Microsoft',
                    seriennummer: '4543-4343-65-665',
                    is_software: true
                }, {
                    id: 5555,
                    bezeichnung: 'Computer',
                    hersteller: 'Lenovo',
                    seriennummer: '478348384',
                    is_software: false
                },
                {
                    id: 5556,
                    bezeichnung: 'Computer',
                    hersteller: 'hp',
                    seriennummer: '478348385',
                    is_software: false
                },
                {
                    id: 5557,
                    bezeichnung: 'Computer',
                    hersteller: 'Apple',
                    seriennummer: '478348386',
                    is_software: false
                },
                {
                    id: 5557,
                    bezeichnung: 'Powerpoint',
                    hersteller: 'Microsoft',
                    seriennummer: '4543-4343-65-665',
                    is_software: true
                },
                {
                    id: 5555,
                    bezeichnung: 'Computer',
                    hersteller: 'Lenovo',
                    seriennummer: '478348384',
                    is_software: false
                },
                {
                    id: 5556,
                    bezeichnung: 'Computer',
                    hersteller: 'hp',
                    seriennummer: '478348385',
                    is_software: false
                },
                {
                    id: 5557,
                    bezeichnung: 'Computer',
                    hersteller: 'Apple',
                    seriennummer: '478348386',
                    is_software: false
                },
                {
                    id: 5557,
                    bezeichnung: 'Powerpoint',
                    hersteller: 'Microsoft',
                    seriennummer: '4543-4343-65-665',
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

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n\n\n        <!--Searchbar with Icon-->\n        <div class=\"row no-gutters\">\n            <div class=\"col-md-8\">\n                 <input [(ngModel)]=\"searchText\" class=\"form-control border-secondary border-right-0 rounded-0\" type=\"search\" value=\"Suche\" id=\"example-search-input4\">\n            </div>\n            <div class=\"col-auto\">\n                 <button class=\"btn btn-outline-secondary border-left-0 rounded-0 rounded-right\" type=\"button\">\n                    <i class=\"fa fa-search\"></i>\n                 </button>\n            </div>\n        </div>\n  \n    </div>\n    <hr>\n    <b>Räume:</b>\n    <div class=\"ex1\">\n        <div class=\"flex-container\">\n            <app-room-card  *ngFor=\"let room of overViewRooms\" [card]=\"room\" (click)=\"showDetailedCard(room.header)\"></app-room-card>\n            <app-add-card></app-add-card>\n        </div>\n    </div>\n</div>"

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




var RoomOverviewComponent = /** @class */ (function () {
    function RoomOverviewComponent(router) {
        this.router = router;
        this.searchText = '';
    }
    RoomOverviewComponent.prototype.ngOnInit = function () {
        this.rooms = this.getRooms();
        this.overViewRooms = this.mapRoomsToCard(this.rooms);
    };
    RoomOverviewComponent.prototype.getRooms = function () {
        // TODO add api call for db entries
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
                nr: '222',
                bezeichnung: 'Computerraum',
                hat_notiz: false,
                komponenten_arten: null
            },
            {
                id: 3,
                nr: '222',
                bezeichnung: 'Computerraum',
                hat_notiz: true,
                komponenten_arten: null
            }
        ];
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
    RoomOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-room-overview',
            template: __webpack_require__(/*! ./room-overview.component.html */ "./src/app/room/room-overview/room-overview.component.html"),
            styles: [__webpack_require__(/*! ./room-overview.component.less */ "./src/app/room/room-overview/room-overview.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RoomOverviewComponent);
    return RoomOverviewComponent;
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
/* harmony import */ var _room_overview_room_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room-overview/room-overview.component */ "./src/app/room/room-overview/room-overview.component.ts");
/* harmony import */ var _room_detailed_room_detailed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./room-detailed/room-detailed.component */ "./src/app/room/room-detailed/room-detailed.component.ts");





var routes = [
    { path: '', component: _room_overview_room_overview_component__WEBPACK_IMPORTED_MODULE_3__["RoomOverviewComponent"] },
    { path: ':id', component: _room_detailed_room_detailed_component__WEBPACK_IMPORTED_MODULE_4__["RoomDetailedComponent"] }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _room_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room-routing.module */ "./src/app/room/room-routing.module.ts");
/* harmony import */ var _room_overview_room_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./room-overview/room-overview.component */ "./src/app/room/room-overview/room-overview.component.ts");
/* harmony import */ var _room_detailed_room_detailed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./room-detailed/room-detailed.component */ "./src/app/room/room-detailed/room-detailed.component.ts");
/* harmony import */ var _room_card_room_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./room-card/room-card.component */ "./src/app/room/room-card/room-card.component.ts");
/* harmony import */ var _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-card/add-card.component */ "./src/app/room/add-card/add-card.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var RoomModule = /** @class */ (function () {
    function RoomModule() {
    }
    RoomModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_room_overview_room_overview_component__WEBPACK_IMPORTED_MODULE_4__["RoomOverviewComponent"], _room_detailed_room_detailed_component__WEBPACK_IMPORTED_MODULE_5__["RoomDetailedComponent"], _room_card_room_card_component__WEBPACK_IMPORTED_MODULE_6__["RoomCardComponent"], _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_7__["AddCardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _room_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoomRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ]
        })
    ], RoomModule);
    return RoomModule;
}());



/***/ })

}]);
//# sourceMappingURL=room-room-module.js.map