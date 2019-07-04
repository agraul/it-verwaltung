(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./config/config.module": [
		"./src/app/config/config.module.ts",
		"config-config-module"
	],
	"./device/device.module": [
		"./src/app/device/device.module.ts",
		"common",
		"device-device-module"
	],
	"./room/room.module": [
		"./src/app/room/room.module.ts",
		"common",
		"room-room-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/log-in/log-in.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");






var routes = [
    {
        path: '',
        redirectTo: '/rooms',
        pathMatch: 'full'
    },
    {
        path: 'rooms',
        loadChildren: './room/room.module#RoomModule',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'devices',
        loadChildren: './device/device.module#DeviceModule',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'masterdata',
        loadChildren: './config/config.module#ConfigModule',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'logIn',
        component: _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__["LogInComponent"]
    },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"site-header sticky-top py-1\">\n  <div class=\"container d-flex flex-column flex-md-row justify-content-between\">\n    <a class=\"py-2\" href=\"#\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"currentColor\"\n        stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" class=\"d-block mx-auto\" role=\"img\"\n        viewBox=\"0 0 24 24\" focusable=\"false\">\n        <title>Product</title>\n        <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n        <path d=\"M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94\">\n        </path>\n      </svg>\n    </a>\n    \n    <a class=\"py-2 d-none d-md-inline-block\" routerLink=\"/rooms\" routerLinkActive=\"active\">Räume</a>\n    <a class=\"py-2 d-none d-md-inline-block\" routerLink=\"/devices\" routerLinkActive=\"active\">Geräte</a>\n    <a class=\"py-2 d-none d-md-inline-block\" routerLink=\"/masterdata\" routerLinkActive=\"active\">Stammdaten</a>\n    \n    <a class=\"py-2 d-none d-md-inline-block\" routerLink=\"/logIn\" routerLinkActive=\"active\"></a>\n    <a class=\"py-2 d-none d-md-inline-block\" routerLink=\"/rooms/detailed\" routerLinkActive=\"active\"></a>\n    <a class=\"py-2 d-none d-md-inline-block\" routerLink=\"/devices/detailed\"\n      routerLinkActive=\"active\"></a>\n    <a class=\"py-2 d-none d-md-inline-block\" routerLink=\"/masterdata/user\" routerLinkActive=\"active\"></a>\n    <a class=\"py-2 d-none d-md-inline-block\" routerLink=\"/masterdata/supplier\"\n      routerLinkActive=\"active\"></a>\n     \n    <a class=\"py-2 d-none d-md-inline-block\" routerLink=\"/masterdata/devicetype\"\n      routerLinkActive=\"active\"></a>\n       <div id=\"userButton\" class=\"py-2 d-none d-md-inline-block\" *ngIf=\"isLoggedIn()\">\n    <a (click)=\"openDropdown()\" class=\"fas fa-chevron-down\" id=\"icon\"></a><a (click)=\"openDropdown()\">{{setUserName()}}</a><br>\n        <a *ngIf=\"showDropdown\" (click)=\"logOut()\"routerLink=\"/logIn\" id=\"logOut\">logout</a>\n    </div>\n      \n  </div>\n</nav>\n\n<div class=\"container mt-2\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Custom translucent site header\n */\n.site-header {\n  background-color: rgba(0, 0, 0, 0.85);\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}\n.site-header a {\n  color: #999;\n  -webkit-transition: ease-in-out color 0.15s;\n  transition: ease-in-out color 0.15s;\n}\n.site-header a:hover {\n  color: #fff;\n  text-decoration: none;\n}\n.site-header a.active {\n  color: green;\n}\n#icon {\n  color: #999;\n}\n#icon a.hover {\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL2NocmlzdG9waGVyd2l0emwvRG9jdW1lbnRzL0VudHdpY2tsdW5nL0FuZ3VsYXIgV29ya3NwYWNlL2l0LXZlcndhbHR1bmcvZnJvbnRlbmQvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUNFRjtFQUNBLHFDQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQ0FBQTtBREFBO0FDRUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7RUFBQSxtQ0FBQTtBREFBO0FDRUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURBQTtBQ0dBO0VBQ0ksWUFBQTtBRERKO0FDSUE7RUFDQSxXQUFBO0FERkE7QUNDQTtFQUdJLFdBQUE7QURESiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDdXN0b20gdHJhbnNsdWNlbnQgc2l0ZSBoZWFkZXJcbiAqL1xuLnNpdGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcbn1cbi5zaXRlLWhlYWRlciBhIHtcbiAgY29sb3I6ICM5OTk7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IGNvbG9yIDAuMTVzO1xufVxuLnNpdGUtaGVhZGVyIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnNpdGUtaGVhZGVyIGEuYWN0aXZlIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuI2ljb24ge1xuICBjb2xvcjogIzk5OTtcbn1cbiNpY29uIGEuaG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbiIsIi8qXG4gKiBDdXN0b20gdHJhbnNsdWNlbnQgc2l0ZSBoZWFkZXJcbiAqL1xuXG4uc2l0ZS1oZWFkZXIge1xuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuODUpO1xuLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG5iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG59XG4uc2l0ZS1oZWFkZXIgYSB7XG5jb2xvcjogIzk5OTtcbnRyYW5zaXRpb246IGVhc2UtaW4tb3V0IGNvbG9yIC4xNXM7XG59XG4uc2l0ZS1oZWFkZXIgYTpob3ZlciB7XG5jb2xvcjogI2ZmZjtcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi8vIFNldHMgdGhlIGNvbG9yIG9mIGFjdGl2ZSBuYXZiYXIgZWxlbWVudFxuLnNpdGUtaGVhZGVyIGEuYWN0aXZle1xuICAgIGNvbG9yOmdyZWVuO1xufVxuXG4jaWNvbntcbmNvbG9yOiAjOTk5O1xuYS5ob3ZlcntcbiAgICBjb2xvcjojZmZmO1xufVxufVxuIl19 */"

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
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'it-verwaltung';
        this.showDropdown = false;
        this.userName = '50cent';
    }
    AppComponent.prototype.isLoggedIn = function () {
        return this.auth.isLoggedIn;
    };
    AppComponent.prototype.setUserName = function () {
        if (this.isLoggedIn()) {
            this.userName = this.auth.userName;
        }
        return this.userName;
    };
    AppComponent.prototype.logOut = function () {
        this.showDropdown = false;
        this.userName = '';
        this.auth.logout();
    };
    AppComponent.prototype.openDropdown = function () {
        if (this.showDropdown === false) {
            this.showDropdown = true;
        }
        else {
            this.showDropdown = false;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/log-in/log-in.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_7__["LogInComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['logIn']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_api_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/api-client.service */ "./src/app/core/api-client.service.ts");
/* harmony import */ var _fe_entities_user_login_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fe-entities/user-login-entity */ "./src/app/fe-entities/user-login-entity.ts");




var AuthService = /** @class */ (function () {
    function AuthService(apiClient) {
        this.apiClient = apiClient;
        this.isLoggedIn = false;
        this.isAdmin = false;
        this.userName = '';
    }
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.requestToken(username, password).then(function (resp) {
            if (resp) {
                _this.userName = username;
                _this.isLoggedIn = true;
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    AuthService.prototype.requestToken = function (usr, pwd) {
        var _this = this;
        var jwtDecode = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
        var creds = new _fe_entities_user_login_entity__WEBPACK_IMPORTED_MODULE_3__["UserLogIn"](usr, pwd);
        return this.apiClient.logInAndGetToken(creds).then(function (resp) {
            var token = resp[0].token;
            _this.isAdmin = jwtDecode(token).admin;
            localStorage.setItem('token', token);
            return true;
        }, function () { return false; });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_api_client_service__WEBPACK_IMPORTED_MODULE_2__["ApiClientService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

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
                raeume_id: 2,
                lieferant_id: 2,
                einkaufsdatum: '2019-07-13',
                gewaehrleistungsdauer: 12,
                notiz: 'Ein komischer Rechner',
                hersteller: 'Apple',
                beleg_id: 1234,
                komponentenartenid: 1,
                attribute: [
                    { id: 2, value: '4GB RAM' },
                    { id: 1, value: '293474-34764' },
                    { id: 3, value: 'GTX 2070' }
                ]
            });
        }
        else {
            return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/component/detail?id=' + id).toPromise();
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
    ApiClientService.prototype.updateComponent = function (body) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/component/update', body).toPromise();
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
    ApiClientService.prototype.createNewRoom = function (body) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/room/add', body).toPromise();
    };
    ApiClientService.prototype.getRoomDetail = function (id) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/room/detail?id=' + id).toPromise();
    };
    ApiClientService.prototype.deleteRoom = function (id) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/room/delete?id=' + id).toPromise();
    };
    ApiClientService.prototype.editRoom = function (body) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/room/edit', body).toPromise();
    };
    ApiClientService.prototype.changeRoomNote = function (body) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/room/note', body).toPromise();
    };
    ApiClientService.prototype.getAllComponents = function () {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isMock) {
            return Promise.resolve([
                {
                    id: 1,
                    bezeichnung: 'Computer',
                    raeume_id: 222,
                    lieferant_id: 48768,
                    einkaufsdatum: '2019-07-13',
                    gewaehrleistungsdauer: 12,
                    notiz: 'Ein komischer Rechner',
                    hersteller: 'Apple',
                    beleg_id: 1234,
                    komponentenartenid: 1,
                    attribute: [
                        { id: 2, value: '4GB RAM' },
                        { id: 1, value: '293474-34764' },
                        { id: 3, value: 'GTX 2070' }
                    ]
                },
                {
                    id: 12,
                    bezeichnung: 'Computer',
                    raeume_id: 222,
                    lieferant_id: 48768,
                    einkaufsdatum: '2019-07-13',
                    gewaehrleistungsdauer: 12,
                    notiz: 'Ein komischer Rechner',
                    hersteller: 'Apple',
                    beleg_id: 1234,
                    komponentenartenid: 1,
                    attribute: [
                        { id: 2, value: '4GB RAM' },
                        { id: 1, value: '293474-34764' },
                        { id: 3, value: 'GTX 2070' }
                    ]
                },
                {
                    id: 13,
                    bezeichnung: 'Computer',
                    raeume_id: 222,
                    lieferant_id: 48768,
                    einkaufsdatum: '2019-07-13',
                    gewaehrleistungsdauer: 12,
                    notiz: 'Ein komischer Rechner',
                    hersteller: 'Apple',
                    beleg_id: 1234,
                    komponentenartenid: 1,
                    attribute: [
                        { id: 2, value: '4GB RAM' },
                        { id: 1, value: '293474-34764' },
                        { id: 3, value: 'GTX 2070' }
                    ]
                },
                {
                    id: 14,
                    bezeichnung: 'Computer',
                    raeume_id: 222,
                    lieferant_id: 48768,
                    einkaufsdatum: '2019-07-13',
                    gewaehrleistungsdauer: 12,
                    notiz: 'Ein komischer Rechner',
                    hersteller: 'Apple',
                    beleg_id: 1234,
                    komponentenartenid: 1,
                    attribute: [
                        { id: 2, value: '4GB RAM' },
                        { id: 1, value: '293474-34764' },
                        { id: 3, value: 'GTX 2070' }
                    ]
                },
                {
                    id: 15,
                    bezeichnung: 'Computer',
                    raeume_id: 222,
                    lieferant_id: 48768,
                    einkaufsdatum: '2019-07-13',
                    gewaehrleistungsdauer: 12,
                    notiz: 'Ein komischer Rechner',
                    hersteller: 'Apple',
                    beleg_id: 1234,
                    komponentenartenid: 1,
                    attribute: [
                        { id: 2, value: '4GB RAM' },
                        { id: 1, value: '293474-34764' },
                        { id: 3, value: 'GTX 2070' }
                    ]
                },
                {
                    id: 16,
                    bezeichnung: 'Computer',
                    raeume_id: 222,
                    lieferant_id: 48768,
                    einkaufsdatum: '2019-07-13',
                    gewaehrleistungsdauer: 12,
                    notiz: 'Ein komischer Rechner',
                    hersteller: 'Apple',
                    beleg_id: 1234,
                    komponentenartenid: 1,
                    attribute: [
                        { id: 2, value: '4GB RAM' },
                        { id: 1, value: '293474-34764' },
                        { id: 3, value: 'GTX 2070' }
                    ]
                },
                {
                    id: 17,
                    bezeichnung: 'Computer',
                    raeume_id: 222,
                    lieferant_id: 48768,
                    einkaufsdatum: '2019-07-13',
                    gewaehrleistungsdauer: 12,
                    notiz: 'Ein komischer Rechner',
                    hersteller: 'Apple',
                    beleg_id: 1234,
                    komponentenartenid: 1,
                    attribute: [
                        { id: 2, value: '4GB RAM' },
                        { id: 1, value: '293474-34764' },
                        { id: 3, value: 'GTX 2070' }
                    ]
                },
                {
                    id: 18,
                    bezeichnung: 'Computer',
                    raeume_id: 222,
                    lieferant_id: 48768,
                    einkaufsdatum: '2019-07-13',
                    gewaehrleistungsdauer: 12,
                    notiz: 'Ein komischer Rechner',
                    hersteller: 'Apple',
                    beleg_id: 1234,
                    komponentenartenid: 1,
                    attribute: [
                        { id: 2, value: '4GB RAM' },
                        { id: 1, value: '293474-34764' },
                        { id: 3, value: 'GTX 2070' }
                    ]
                },
                {
                    id: 19,
                    bezeichnung: 'Computer',
                    raeume_id: 222,
                    lieferant_id: 48768,
                    einkaufsdatum: '2019-07-13',
                    gewaehrleistungsdauer: 12,
                    notiz: 'Ein komischer Rechner',
                    hersteller: 'Apple',
                    beleg_id: 1234,
                    komponentenartenid: 1,
                    attribute: [
                        { id: 2, value: '4GB RAM' },
                        { id: 1, value: '293474-34764' },
                        { id: 3, value: 'GTX 2070' }
                    ]
                },
                {
                    id: 20,
                    bezeichnung: 'Computer',
                    raeume_id: 222,
                    lieferant_id: 48768,
                    einkaufsdatum: '2019-07-13',
                    gewaehrleistungsdauer: 12,
                    notiz: 'Ein komischer Rechner',
                    hersteller: 'Apple',
                    beleg_id: 1234,
                    komponentenartenid: 1,
                    attribute: [
                        { id: 2, value: '4GB RAM' },
                        { id: 1, value: '293474-34764' },
                        { id: 3, value: 'GTX 2070' }
                    ]
                },
                {
                    id: 21,
                    bezeichnung: 'Computer',
                    raeume_id: 222,
                    lieferant_id: 48768,
                    einkaufsdatum: '2019-07-13',
                    gewaehrleistungsdauer: 12,
                    notiz: 'Ein komischer Rechner',
                    hersteller: 'Apple',
                    beleg_id: 1234,
                    komponentenartenid: 1,
                    attribute: [
                        { id: 2, value: '4GB RAM' },
                        { id: 1, value: '293474-34764' },
                        { id: 3, value: 'GTX 2070' }
                    ]
                },
                {
                    id: 22,
                    bezeichnung: 'Computer',
                    raeume_id: 222,
                    lieferant_id: 48768,
                    einkaufsdatum: '2019-07-13',
                    gewaehrleistungsdauer: 12,
                    notiz: 'Ein komischer Rechner',
                    hersteller: 'Apple',
                    beleg_id: 1234,
                    komponentenartenid: 1,
                    attribute: [
                        { id: 2, value: '4GB RAM' },
                        { id: 1, value: '293474-34764' },
                        { id: 3, value: 'GTX 2070' }
                    ]
                }
            ]);
        }
        else {
            return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/component/all').toPromise();
        }
    };
    ApiClientService.prototype.changeRoom = function (id, roomId) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/room/changeRoom?id=' + id + '&room_id=' + roomId).toPromise();
    };
    ApiClientService.prototype.logInAndGetToken = function (creds) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + '/user/login?usr=' + creds.username + '&pw=' + creds.passwort).toPromise();
    };
    ApiClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiClientService);
    return ApiClientService;
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-interceptor */ "./src/app/core/http-interceptor.ts");






var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            providers: [_api_client_service__WEBPACK_IMPORTED_MODULE_3__["ApiClientService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _http_interceptor__WEBPACK_IMPORTED_MODULE_5__["TokenInterceptor"],
                    multi: true
                }]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/http-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/core/http-interceptor.ts ***!
  \******************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "" + this.auth.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/fe-entities/user-login-entity.ts":
/*!**************************************************!*\
  !*** ./src/app/fe-entities/user-login-entity.ts ***!
  \**************************************************/
/*! exports provided: UserLogIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogIn", function() { return UserLogIn; });
var UserLogIn = /** @class */ (function () {
    function UserLogIn(username, passwort) {
        this.username = username;
        this.passwort = passwort;
    }
    return UserLogIn;
}());



/***/ }),

/***/ "./src/app/log-in/log-in.component.html":
/*!**********************************************!*\
  !*** ./src/app/log-in/log-in.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"loginForm\">\n  <div id=\"loginLine\">\n    <p id=\"logIn\">Login</p>\n  </div>\n  <div id=\"inputValues\">\n  Benutzer <br><input [(ngModel)]=\"userName\" type=\"input\" id=\"userNm\"><br>\n  Passwort <br> <input [(ngModel)]=\"passWord\" type=\"password\" id=\"passWd\">\n  <p *ngIf=\"showValidationMessage\" id=\"errorMessage\">Falsches Passwort oder Benutzername.</p>\n  <br *ngIf=\"!showValidationMessage\">\n  <br *ngIf=\"!showValidationMessage\">\n  <input type=\"button\" id=\"sendBtn\" (click)=\"secureAndSend(userName, passWord, true)\" value=\"Anmelden\">\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/log-in/log-in.component.less":
/*!**********************************************!*\
  !*** ./src/app/log-in/log-in.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#loginForm {\n  margin-right: 30%;\n  margin-left: 30%;\n  margin-top: 20%;\n  border-width: 1px;\n  border-color: black;\n  border-style: solid;\n}\n#logIn {\n  font: 1.2em sans-serif;\n  margin-bottom: 3px;\n  margin-left: 5px;\n  margin-top: 3px;\n}\n#loginLine {\n  border-bottom: 1px;\n  border-bottom-color: black;\n  border-bottom-style: solid;\n}\n#inputValues {\n  margin-top: 1em;\n  margin-left: 30%;\n  margin-right: 30%;\n  margin-bottom: 1em;\n}\n#sendBtn {\n  width: 170px;\n}\n#errorMessage {\n  color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcndpdHpsL0RvY3VtZW50cy9FbnR3aWNrbHVuZy9Bbmd1bGFyIFdvcmtzcGFjZS9pdC12ZXJ3YWx0dW5nL2Zyb250ZW5kL3NyYy9hcHAvbG9nLWluL2xvZy1pbi5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbG9nLWluL2xvZy1pbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNBSjtBREdBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0FDREo7QURJQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNGSjtBREtBO0VBQ0ksWUFBQTtBQ0hKO0FETUE7RUFDSSxVQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luRm9ybXtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbiNsb2dJbntcbiAgICBmb250OiAxLjJlbSBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi10b3A6M3B4O1xufVxuXG4jbG9naW5MaW5le1xuICAgIGJvcmRlci1ib3R0b206IDFweDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbn1cblxuI2lucHV0VmFsdWVze1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICAgIG1hcmdpbi1yaWdodDogMzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuI3NlbmRCdG57XG4gICAgd2lkdGg6IDE3MHB4O1xufVxuXG4jZXJyb3JNZXNzYWdle1xuICAgIGNvbG9yOiByZWQ7XG59IiwiI2xvZ2luRm9ybSB7XG4gIG1hcmdpbi1yaWdodDogMzAlO1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuI2xvZ0luIHtcbiAgZm9udDogMS4yZW0gc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG4jbG9naW5MaW5lIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG59XG4jaW5wdXRWYWx1ZXMge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIG1hcmdpbi1yaWdodDogMzAlO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4jc2VuZEJ0biB7XG4gIHdpZHRoOiAxNzBweDtcbn1cbiNlcnJvck1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/log-in/log-in.component.ts":
/*!********************************************!*\
  !*** ./src/app/log-in/log-in.component.ts ***!
  \********************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _log_in_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-in.mock */ "./src/app/log-in/log-in.mock.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");





var LogInComponent = /** @class */ (function () {
    function LogInComponent(router, authentication) {
        this.router = router;
        this.authentication = authentication;
        this.users = _log_in_mock__WEBPACK_IMPORTED_MODULE_3__["USERS"];
        this.userName = '';
        this.passWord = '';
        this.showValidationMessage = false;
    }
    LogInComponent.prototype.ngOnInit = function () { };
    LogInComponent.prototype.secureAndSend = function (username, password) {
        var _this = this;
        this.authentication.login(username, password).then(function (resp) {
            if (resp) {
                _this.router.navigateByUrl(_this.authentication.redirectUrl ? _this.router.parseUrl(_this.authentication.redirectUrl) : '/rooms');
            }
            else {
                console.log("falsches PW");
                _this.showValidationMessage = true;
            }
        });
    };
    LogInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-log-in',
            template: __webpack_require__(/*! ./log-in.component.html */ "./src/app/log-in/log-in.component.html"),
            styles: [__webpack_require__(/*! ./log-in.component.less */ "./src/app/log-in/log-in.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LogInComponent);
    return LogInComponent;
}());



/***/ }),

/***/ "./src/app/log-in/log-in.mock.ts":
/*!***************************************!*\
  !*** ./src/app/log-in/log-in.mock.ts ***!
  \***************************************/
/*! exports provided: USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
var USERS = [
    {
        userid: 1,
        username: 'Larve',
        pw: 'hallo',
        groupid: 1,
        firstname: '',
        lastname: ''
    },
    {
        userid: 2,
        username: 'Larvenmensch',
        pw: 'hallohallo',
        groupid: 1,
        firstname: '',
        lastname: ''
    }
];


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"complete\">\n<p id=\"headline\">Die Seite existiert Leider nicht!</p>\n<a routerLink=\"/rooms\" >Zurück zu den Räumen</a>\n</div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.less":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#complete {\n  margin-left: 2em;\n  margin-top: 2em;\n}\n#headline {\n  font-size: 1.3em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcndpdHpsL0RvY3VtZW50cy9FbnR3aWNrbHVuZy9Bbmd1bGFyIFdvcmtzcGFjZS9pdC12ZXJ3YWx0dW5nL2Zyb250ZW5kL3NyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7QURFQTtFQUNJLGdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb21wbGV0ZXtcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuI2hlYWRsaW5le1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG59IiwiI2NvbXBsZXRlIHtcbiAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxuI2hlYWRsaW5lIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.less */ "./src/app/page-not-found/page-not-found.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



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
    url: 'http://116.203.81.6/api/v1',
    isMock: false
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

module.exports = __webpack_require__(/*! /Users/christopherwitzl/Documents/Entwicklung/Angular Workspace/it-verwaltung/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map