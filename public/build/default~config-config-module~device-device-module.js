(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~config-config-module~device-device-module"],{

/***/ "./src/app/core/api-client.service.ts":
/*!********************************************!*\
  !*** ./src/app/core/api-client.service.ts ***!
  \********************************************/
/*! exports provided: ApiClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiClientService", function() { return ApiClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var ApiClientService = /** @class */ (function () {
    function ApiClientService(httpClient) {
        this.httpClient = httpClient;
    }
    ApiClientService.prototype.getAllRooms = function () {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isMock) {
            return Promise.resolve([
                {
                    id: 1,
                    nr: '123',
                    bezeichnung: 'Computerraum',
                    hat_notiz: true,
                    komponenten_arten: ['PC', 'Beamer', 'Switch']
                },
                {
                    id: 2,
                    nr: '022',
                    bezeichnung: 'Computerraum',
                    hat_notiz: false,
                    komponenten_arten: null
                },
                {
                    id: 3,
                    nr: '324',
                    bezeichnung: 'Elektro',
                    hat_notiz: true,
                    komponenten_arten: ['PC', 'Beamer']
                }
            ]);
        }
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/room/all').toPromise();
    };
    ApiClientService.prototype.getAllGroups = function () {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isMock) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([
                {
                    id: 1,
                    bezeichnung: 'Lehrkraft',
                    privilegiert: false
                },
                {
                    id: 2,
                    bezeichnung: 'Systembetreuer',
                    privilegiert: true
                }
            ]);
        }
        else {
            return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/group/all');
        }
    };
    ApiClientService.prototype.getAllUser = function () {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isMock) {
            return Promise.resolve([
                {
                    userid: 1,
                    username: 'ln@b3.de',
                    lastname: 'Nürnberger',
                    firstname: 'Lukas',
                    groupid: 2,
                    pw: '123'
                }
            ]);
        }
        else {
            return this.httpClient
                .get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/user/all')
                .toPromise();
        }
    };
    ApiClientService.prototype.setUserPassword = function (body) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isMock) {
            return Promise.resolve();
        }
        else {
            return this.httpClient
                .post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/user/setpassword', body)
                .toPromise();
        }
    };
    ApiClientService.prototype.setUserGroupChange = function (body) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isMock) {
            return Promise.resolve();
        }
        else {
            return this.httpClient
                .post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/user/changegroup', body)
                .toPromise();
        }
    };
    ApiClientService.prototype.deleteUser = function (id) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isMock) {
            return Promise.resolve();
        }
        else {
            return this.httpClient
                .get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/user/delete?id=' + id)
                .toPromise();
        }
    };
    ApiClientService.prototype.registerUser = function (body) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isMock) {
            return Promise.resolve();
        }
        else {
            return this.httpClient
                .post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/user/register', body)
                .toPromise();
        }
    };
    ApiClientService.prototype.getAllDeliverer = function () {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isMock) {
            return Promise.resolve([
                {
                    id: 1,
                    companyname: 'Tall Software',
                    street: 'Tallstrasse 13',
                    plz: '96047',
                    place: 'Bamberg',
                    tel: '0951000000',
                    mobile: '0873 376461',
                    fax: '040-999 8888',
                    email: 'Tall.Software@gmail.de'
                },
                {
                    id: 2,
                    companyname: 'Easy Hardware',
                    street: 'Nordweg 33',
                    plz: '14770',
                    place: 'Brandenburg',
                    tel: '0338100000',
                    mobile: '0929 123458',
                    fax: '040-999 7889',
                    email: 'Easy.Hardware@gmail.de'
                }
            ]);
        }
        else {
            return this.httpClient
                .get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/supplier/all')
                .toPromise();
        }
    };
    ApiClientService.prototype.addDeliverer = function (body) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isMock) {
            return Promise.resolve();
        }
        else {
            return this.httpClient
                .post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/supplier/add', body)
                .toPromise();
        }
    };
    ApiClientService.prototype.deleteDeliverer = function (id) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isMock) {
            return Promise.resolve();
        }
        else {
            return this.httpClient
                .get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/supplier/delete?id=' + id)
                .toPromise();
        }
    };
    ApiClientService.prototype.updateDeliverer = function (body) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isMock) {
            return Promise.resolve();
        }
        else {
            return this.httpClient
                .post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/supplier/update', body)
                .toPromise();
        }
    };
    ApiClientService.prototype.getAllComponentAttributes = function () {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isMock) {
            return Promise.resolve([
                {
                    id: 1,
                    bezeichnung: 'Seriennummer',
                },
                {
                    id: 2,
                    bezeichnung: 'RAM'
                },
                {
                    id: 3,
                    bezeichnung: 'CPU'
                },
                {
                    id: 4,
                    bezeichnung: 'Festplatte'
                },
                {
                    id: 5,
                    bezeichnung: 'Festplatten Typ'
                },
                {
                    id: 6,
                    bezeichnung: 'Grafikausgang'
                },
                {
                    id: 19,
                    bezeichnung: 'Versionsnummer'
                },
                {
                    id: 20,
                    bezeichnung: 'Lizenztyp'
                },
                {
                    id: 21,
                    bezeichnung: 'Lizenzanzahl'
                },
                {
                    id: 22,
                    bezeichnung: 'Lizenzlaufzeit'
                },
                {
                    id: 23,
                    bezeichnung: 'Lizenzinformationen'
                },
                {
                    id: 24,
                    bezeichnung: 'Installationshinweise'
                },
                {
                    id: 7,
                    bezeichnung: 'Anzahl Ports'
                },
                {
                    id: 8,
                    bezeichnung: 'Uplinktyp'
                },
                {
                    id: 9,
                    bezeichnung: 'IP'
                },
                {
                    id: 18,
                    bezeichnung: 'Anschlusstyp'
                }
            ]);
        }
        else {
            return this.httpClient
                .get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/componentattribute/all')
                .toPromise();
        }
    };
    ApiClientService.prototype.addComponentAttribute = function (bez) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isMock) {
            return Promise.resolve();
        }
        else {
            return this.httpClient
                .post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/componentattribute/add', { attribute: bez })
                .toPromise();
        }
    };
    ApiClientService.prototype.deleteComponentAttribute = function (id) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isMock) {
            return Promise.resolve();
        }
        else {
            return this.httpClient
                .get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/componentattribute/delete?id=' + id)
                .toPromise();
        }
    };
    ApiClientService.prototype.getAllComponentType = function () {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isMock) {
            return Promise.resolve([
                {
                    id: 1,
                    bezeichnung: 'PC',
                    is_software: false,
                    attribute: [
                        {
                            id: 1,
                            bezeichnung: 'Seriennummer'
                        },
                        {
                            id: 2,
                            bezeichnung: 'RAM'
                        },
                        {
                            id: 3,
                            bezeichnung: 'CPU'
                        }
                    ]
                },
                {
                    id: 2,
                    bezeichnung: 'Switch',
                    is_software: false,
                    attribute: [
                        {
                            id: 1,
                            bezeichnung: 'Seriennummer'
                        },
                        {
                            id: 7,
                            bezeichnung: 'Anzahl Ports'
                        },
                        {
                            id: 8,
                            bezeichnung: 'Uplinktyp'
                        }
                    ]
                },
                {
                    id: 3,
                    bezeichnung: 'Router',
                    is_software: false,
                    attribute: [
                        {
                            id: 1,
                            bezeichnung: 'Seriennummer'
                        },
                        {
                            id: 7,
                            bezeichnung: 'Anzahl Ports'
                        },
                        {
                            id: 9,
                            bezeichnung: 'IP'
                        }
                    ]
                },
                {
                    id: 7,
                    bezeichnung: 'Visualizer',
                    is_software: false,
                    attribute: [
                        {
                            id: 1,
                            bezeichnung: 'Seriennummer'
                        },
                        {
                            id: 18,
                            bezeichnung: 'Anschlusstyp'
                        }
                    ]
                },
                {
                    id: 8,
                    bezeichnung: 'Software',
                    is_software: true,
                    attribute: [
                        {
                            id: 19,
                            bezeichnung: 'Versionsnummer'
                        },
                        {
                            id: 20,
                            bezeichnung: 'Lizenztyp'
                        },
                        {
                            id: 21,
                            bezeichnung: 'Lizenzanzahl'
                        },
                        {
                            id: 22,
                            bezeichnung: 'Lizenzlaufzeit'
                        },
                        {
                            id: 23,
                            bezeichnung: 'Lizenzinformationen'
                        },
                        {
                            id: 24,
                            bezeichnung: 'Installationshinweise'
                        }
                    ]
                }
            ]);
        }
        else {
            return this.httpClient
                .get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/componenttype/all')
                .toPromise();
        }
    };
    ApiClientService.prototype.deleteComponentType = function (id) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isMock) {
            return Promise.resolve();
        }
        else {
            return this.httpClient
                .get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/componenttype/delete?id=' + id)
                .toPromise();
        }
    };
    ApiClientService.prototype.addNewComponentType = function (body) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isMock) {
            return Promise.resolve();
        }
        else {
            return this.httpClient
                .post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/componenttype/add', body)
                .toPromise();
        }
    };
    ApiClientService.prototype.updateComponentType = function (body) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isMock) {
            return Promise.resolve();
        }
        else {
            return this.httpClient
                .post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/componenttype/update', body)
                .toPromise();
        }
    };
    ApiClientService.prototype.getComponentById = function (id) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isMock) {
            return Promise.resolve({
                id: 11,
                bezeichnung: 'Computer',
                raumId: 2,
                lieferantId: 2,
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
            });
        }
        else {
            this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/component/detail?id=' + id).toPromise();
        }
    };
    ApiClientService.prototype.createNewComponent = function (body) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isMock) {
            return Promise.resolve({
                id: Math.random() * 100
            });
        }
        else {
            return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/component/add', body).toPromise();
        }
    };
    ApiClientService.prototype.removeRoomsToSoftware = function (id) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/software/delete?id=' + id).toPromise();
    };
    ApiClientService.prototype.addSoftwareToRoom = function (body) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/software/add', body).toPromise();
    };
    ApiClientService.prototype.getAllRoomsToSoftware = function (id) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/software/all?id=' + id).toPromise();
    };
    ApiClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiClientService);
    return ApiClientService;
}());



/***/ })

}]);
//# sourceMappingURL=default~config-config-module~device-device-module.js.map