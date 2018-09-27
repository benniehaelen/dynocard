(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/core/base/base-component.ts":
/*!*********************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/base/base-component.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// libs
var rxjs_1 = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
        this.destroy$ = new rxjs_1.Subject();
    }
    BaseComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;


/***/ }),

/***/ "../../libs/core/base/index.ts":
/*!************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/base/index.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./base-component */ "../../libs/core/base/base-component.ts"));


/***/ }),

/***/ "../../libs/core/core.module.ts":
/*!*************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/core.module.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
// libs
var nx_1 = __webpack_require__(/*! @nrwl/nx */ "../../node_modules/@nrwl/nx/esm5/nrwl-nx.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var utils_1 = __webpack_require__(/*! @iot-edge-dynocard/utils */ "../../libs/utils/index.ts");
// app
var environment_1 = __webpack_require__(/*! ./environments/environment */ "../../libs/core/environments/environment.ts");
var services_1 = __webpack_require__(/*! ./services */ "../../libs/core/services/index.ts");
var log_service_1 = __webpack_require__(/*! ./services/log.service */ "../../libs/core/services/log.service.ts");
/**
 * DEBUGGING
 */
log_service_1.LogService.DEBUG.LEVEL_4 = !environment_1.environment.production;
exports.BASE_PROVIDERS = services_1.CORE_PROVIDERS.concat([
    {
        provide: common_1.APP_BASE_HREF,
        useValue: '/'
    }
]);
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule, lang, translate) {
        utils_1.throwIfAlreadyLoaded(parentModule, 'CoreModule');
        // ensure default platform language is set
        translate.use(lang);
    }
    CoreModule_1 = CoreModule;
    // configuredProviders: *required to configure WindowService and others per platform
    CoreModule.forRoot = function (configuredProviders) {
        return {
            ngModule: CoreModule_1,
            providers: exports.BASE_PROVIDERS.concat(configuredProviders)
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, nx_1.NxModule.forRoot()]
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.SkipSelf()),
        __param(1, core_1.Inject(services_1.PlatformLanguageToken)),
        __metadata("design:paramtypes", [CoreModule, String, core_2.TranslateService])
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());
exports.CoreModule = CoreModule;


/***/ }),

/***/ "../../libs/core/environments/environment.ts":
/*!**************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/environments/environment.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    api_url: 'http://127.0.0.1:4000',
    baseRoutePath: ''
};


/***/ }),

/***/ "../../libs/core/index.ts":
/*!*******************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/index.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./base */ "../../libs/core/base/index.ts"));
__export(__webpack_require__(/*! ./environments/environment */ "../../libs/core/environments/environment.ts"));
__export(__webpack_require__(/*! ./services */ "../../libs/core/services/index.ts"));
var core_module_1 = __webpack_require__(/*! ./core.module */ "../../libs/core/core.module.ts");
exports.CoreModule = core_module_1.CoreModule;


/***/ }),

/***/ "../../libs/core/services/data.service.ts":
/*!***********************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/services/data.service.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// data.service.ts - For Web
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
var DataService = /** @class */ (function () {
    function DataService(http) {
        // this.mockDataInit();
        this.http = http;
        this.mockData = {};
        this.requestOptions = {};
    }
    // async mockDataInit() {
    // // For Web
    // if (!isNativeScript()) {
    //   // resolve mockdata with webpack at compile time so its available for web, because web has no filesystem access like native
    //   require('file-loader!../../../apps/web-dynocard/src/assets/dataset1.csv')
    //     .then((response) => {
    //       this.mockData = response;
    //     })
    //     .catch((err) => {
    //       return err;
    //     });
    //
    //   // For nativescript
    // }
    // else {
    //   // Nativescript will use `file-system` to access the file locally, at a different path than webpack
    //   this.fileReader.readJSON("../../assets/mock-data/course-plan")
    //     .then((response) => {
    //       this.mockData = response;
    //     })
    //     .catch((err) => {
    //       err;
    //     });
    // }
    // }
    DataService.prototype.get = function (url, requestOptionsArgs, options) {
        var self = this;
        // clear and reset the state of headers before each request, to prevent issues with mixing states between requests
        delete this.requestOptions;
        if (options) {
            if (!options.mockData) {
            }
            else if (options.mockData === true) {
                // Until nodejs server is setup, just return json directly here
                // passed in value should be relative too `src` root i.e. if its located at ./src/path-to-asset/here.txt, then just enter path-to-asset/here.txt
                var mockData = this.mockData[options.mockDataFile];
                return rxjs_1.of(mockData);
            }
            else if (!options.mockData === true) {
                throw new Error("mockData not set to boolean type. Must be true or false.");
            }
        }
        // The Angular HttpClient Way
        var requestOptions = {
            // headers: contentHeaders
            headers: new http_1.HttpHeaders({
                'Accept': 'application/json'
            })
        };
        return this.http
            .get(url, requestOptionsArgs
            ? requestOptionsArgs
            : requestOptions)
            .pipe(
        // retry(3), // retry a failed request up to 3 times
        operators_1.catchError(this.handleError('GET')));
    };
    DataService.prototype.post = function (url, body, contentType, requestOptionsArgs, options) {
        var self = this;
        // clear and reset the state of headers before each request, to prevent issues with mixing states between requests
        delete this.requestOptions;
        // The Angular HttpClient Way
        // return new Promise((resolve, reject) => {
        var requestOptions = {
            // headers: contentHeaders
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };
        return this.http
            .post(url, body, requestOptionsArgs
            ? requestOptionsArgs
            : requestOptions)
            .pipe(
        // retry(3), // retry a failed request up to 3 times
        operators_1.catchError(this.handleError('POST')));
    };
    DataService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error('error: ', error);
            console.error(operation + " failed: " + error.message);
            var errorMessage = error || 'Server error';
            if (error.error) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('An error occurred:', error.error.message);
                errorMessage = error.error.message;
                // Status Code 0 probable means CORS was not enabled on the API endpoint
            }
            else if (error.status === 0) {
                // A client-side or network error occurred. Handle it accordingly.
                var corsMessage = 'This most likely means that CORS is not enabled for the requested API endpoint. Enable `Access-Control-Allow-Origin` on the server and try again';
                console.error('DataService: An error occurred:', error);
                console.error('DataService: ', corsMessage);
                errorMessage = corsMessage;
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.error("Backend returned code " + error.status + ", " +
                    ("body was: " + error.error));
            }
            // return an observable with a user-facing error message
            return rxjs_1.throwError({
                message: error.message,
                displayMessage: errorMessage
            });
        };
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "../../libs/core/services/index.ts":
/*!****************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/services/index.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var log_service_1 = __webpack_require__(/*! ./log.service */ "../../libs/core/services/log.service.ts");
var window_service_1 = __webpack_require__(/*! ./window.service */ "../../libs/core/services/window.service.ts");
var data_service_1 = __webpack_require__(/*! ./data.service */ "../../libs/core/services/data.service.ts");
var url_managing_service_1 = __webpack_require__(/*! ./url-managing.service */ "../../libs/core/services/url-managing.service.ts");
exports.CORE_PROVIDERS = [log_service_1.LogService, window_service_1.WindowService, data_service_1.DataService,
    url_managing_service_1.UrlManagingService];
__export(__webpack_require__(/*! ./data.service */ "../../libs/core/services/data.service.ts"));
__export(__webpack_require__(/*! ./log.service */ "../../libs/core/services/log.service.ts"));
__export(__webpack_require__(/*! ./window.service */ "../../libs/core/services/window.service.ts"));
__export(__webpack_require__(/*! ./tokens */ "../../libs/core/services/tokens.ts"));
__export(__webpack_require__(/*! ./url-managing.service */ "../../libs/core/services/url-managing.service.ts"));


/***/ }),

/***/ "../../libs/core/services/log.service.ts":
/*!**********************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/services/log.service.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var LogService = /** @class */ (function () {
    function LogService() {
    }
    LogService_1 = LogService;
    // info (extra messages like analytics)
    // use LEVEL_5 to see only these
    LogService.prototype.info = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (LogService_1.DEBUG.LEVEL_5 || LogService_1.DEBUG.LEVEL_4) {
            // extra messages
            console.info(msg);
        }
    };
    // debug (standard output)
    LogService.prototype.debug = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (LogService_1.DEBUG.LEVEL_4 || LogService_1.DEBUG.LEVEL_3) {
            // console.debug does not work on {N} apps... use `log`
            console.log(msg);
        }
    };
    // error
    LogService.prototype.error = function () {
        var err = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            err[_i] = arguments[_i];
        }
        if (LogService_1.DEBUG.LEVEL_4 ||
            LogService_1.DEBUG.LEVEL_3 ||
            LogService_1.DEBUG.LEVEL_2) {
            console.error(err);
        }
    };
    // warn
    LogService.prototype.warn = function () {
        var warn = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            warn[_i] = arguments[_i];
        }
        if (LogService_1.DEBUG.LEVEL_4 ||
            LogService_1.DEBUG.LEVEL_3 ||
            LogService_1.DEBUG.LEVEL_1) {
            console.warn(warn);
        }
    };
    LogService.DEBUG = {
        LEVEL_1: false,
        LEVEL_2: false,
        LEVEL_3: false,
        LEVEL_4: false,
        LEVEL_5: false // just info (excluding all else)
    };
    LogService = LogService_1 = __decorate([
        core_1.Injectable()
    ], LogService);
    return LogService;
    var LogService_1;
}());
exports.LogService = LogService;


/***/ }),

/***/ "../../libs/core/services/tokens.ts":
/*!*****************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/services/tokens.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/**
 * Various InjectionTokens shared across all platforms
 * Always suffix with 'Token' for clarity and consistency
 */
exports.PlatformLanguageToken = new core_1.InjectionToken('PlatformLanguage');


/***/ }),

/***/ "../../libs/core/services/url-managing.service.ts":
/*!*******************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/services/url-managing.service.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// url-managing.service.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class manages URL building for API calls in components.
 */
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var prodUrl = 'https://iotdynocardmoxa.azurewebsites.net';
var hostName = prodUrl;
var UrlManagingService = /** @class */ (function () {
    function UrlManagingService() {
        // These are all site root relative
        this.baseApiRoute = hostName + '/api';
        this.getDynoCardSampleData = this.baseApiRoute + '/DynoCardSampleData';
    }
    UrlManagingService = __decorate([
        core_1.Injectable()
    ], UrlManagingService);
    return UrlManagingService;
}());
exports.UrlManagingService = UrlManagingService;


/***/ }),

/***/ "../../libs/core/services/window.service.ts":
/*!*************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/core/services/window.service.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
// app
var utils_1 = __webpack_require__(/*! @iot-edge-dynocard/utils */ "../../libs/utils/index.ts");
var WindowPlatformService = /** @class */ (function () {
    function WindowPlatformService() {
        this.navigator = {};
        this.location = {};
        // ...You can expand support for more window methods as you need them here...
    }
    WindowPlatformService.prototype.alert = function (msg) { };
    WindowPlatformService.prototype.confirm = function (msg) { };
    WindowPlatformService.prototype.setTimeout = function (handler, timeout) {
        return 0;
    };
    WindowPlatformService.prototype.clearTimeout = function (timeoutId) { };
    WindowPlatformService.prototype.setInterval = function (handler, ms) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return 0;
    };
    WindowPlatformService.prototype.clearInterval = function (intervalId) { };
    WindowPlatformService = __decorate([
        core_1.Injectable()
    ], WindowPlatformService);
    return WindowPlatformService;
}());
exports.WindowPlatformService = WindowPlatformService;
var WindowService = /** @class */ (function () {
    function WindowService(_platformWindow) {
        this._platformWindow = _platformWindow;
    }
    Object.defineProperty(WindowService.prototype, "navigator", {
        get: function () {
            return this._platformWindow.navigator;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowService.prototype, "location", {
        get: function () {
            return this._platformWindow.location;
        },
        enumerable: true,
        configurable: true
    });
    WindowService.prototype.alert = function (msg) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var result = _this._platformWindow.alert(msg);
            if (utils_1.isObject(result) && result.then) {
                // console.log('WindowService -- using result.then promise');
                result.then(resolve, reject);
            }
            else {
                resolve();
            }
        });
    };
    WindowService.prototype.confirm = function (msg, action /* used for fancyalerts on mobile*/) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var result = _this._platformWindow.confirm(msg, utils_1.isNativeScript() ? action : undefined);
            if (utils_1.isObject(result) && result.then) {
                result.then(resolve, reject);
            }
            else if (result) {
                resolve();
            }
            else {
                reject();
            }
        });
    };
    WindowService.prototype.setTimeout = function (handler, timeout) {
        return this._platformWindow.setTimeout(handler, timeout);
    };
    WindowService.prototype.clearTimeout = function (timeoutId) {
        return this._platformWindow.clearTimeout(timeoutId);
    };
    WindowService.prototype.setInterval = function (handler, ms) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return this._platformWindow.setInterval(handler, ms, args);
    };
    WindowService.prototype.clearInterval = function (intervalId) {
        return this._platformWindow.clearInterval(intervalId);
    };
    WindowService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [WindowPlatformService])
    ], WindowService);
    return WindowService;
}());
exports.WindowService = WindowService;


/***/ }),

/***/ "../../libs/features/charts/base/dyno-card-base.component.ts":
/*!******************************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/features/charts/base/dyno-card-base.component.ts ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @iot-edge-dynocard/core */ "../../libs/core/index.ts");
var DynoCardBaseComponent = /** @class */ (function (_super) {
    __extends(DynoCardBaseComponent, _super);
    function DynoCardBaseComponent() {
        var _this = _super.call(this) || this;
        _this.text = 'DynoCard Chart';
        return _this;
    }
    return DynoCardBaseComponent;
}(core_1.BaseComponent));
exports.DynoCardBaseComponent = DynoCardBaseComponent;


/***/ }),

/***/ "../../libs/features/charts/base/index.ts":
/*!***********************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/features/charts/base/index.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./dyno-card-base.component */ "../../libs/features/charts/base/dyno-card-base.component.ts"));


/***/ }),

/***/ "../../libs/features/charts/index.ts":
/*!******************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/features/charts/index.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./base */ "../../libs/features/charts/base/index.ts"));


/***/ }),

/***/ "../../libs/features/index.ts":
/*!***********************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/features/index.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./ui */ "../../libs/features/ui/index.ts"));
__export(__webpack_require__(/*! ./charts */ "../../libs/features/charts/index.ts"));


/***/ }),

/***/ "../../libs/features/ui/base/header.base-component.ts":
/*!***********************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/features/ui/base/header.base-component.ts ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
// libs
var base_1 = __webpack_require__(/*! @iot-edge-dynocard/core/base */ "../../libs/core/base/index.ts");
var HeaderBaseComponent = /** @class */ (function (_super) {
    __extends(HeaderBaseComponent, _super);
    function HeaderBaseComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tappedRight = new core_1.EventEmitter();
        return _this;
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HeaderBaseComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HeaderBaseComponent.prototype, "rightButton", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], HeaderBaseComponent.prototype, "tappedRight", void 0);
    return HeaderBaseComponent;
}(base_1.BaseComponent));
exports.HeaderBaseComponent = HeaderBaseComponent;


/***/ }),

/***/ "../../libs/features/ui/base/index.ts":
/*!*******************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/features/ui/base/index.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./header.base-component */ "../../libs/features/ui/base/header.base-component.ts"));


/***/ }),

/***/ "../../libs/features/ui/index.ts":
/*!**************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/features/ui/index.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./base */ "../../libs/features/ui/base/index.ts"));
var ui_module_1 = __webpack_require__(/*! ./ui.module */ "../../libs/features/ui/ui.module.ts");
exports.UISharedModule = ui_module_1.UISharedModule;


/***/ }),

/***/ "../../libs/features/ui/pipes/date-order.pipe.ts":
/*!******************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/features/ui/pipes/date-order.pipe.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var DateOrderPipe = /** @class */ (function () {
    function DateOrderPipe() {
    }
    DateOrderPipe.prototype.transform = function (value, sortBy) {
        if (value) {
            return value.sort(function (a, b) {
                if (!a[sortBy]) {
                    throw new Error("Incorrect orderByDate property");
                }
                var dateA = new Date(a[sortBy]).getTime();
                var dateB = new Date(b[sortBy]).getTime();
                return dateB - dateA;
            });
        }
    };
    DateOrderPipe = __decorate([
        core_1.Pipe({
            name: 'orderByDate',
            pure: true
        })
    ], DateOrderPipe);
    return DateOrderPipe;
}());
exports.DateOrderPipe = DateOrderPipe;


/***/ }),

/***/ "../../libs/features/ui/pipes/index.ts":
/*!********************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/features/ui/pipes/index.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var date_order_pipe_1 = __webpack_require__(/*! ./date-order.pipe */ "../../libs/features/ui/pipes/date-order.pipe.ts");
exports.PIPES = [date_order_pipe_1.DateOrderPipe];


/***/ }),

/***/ "../../libs/features/ui/ui.module.ts":
/*!******************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/features/ui/ui.module.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var pipes_1 = __webpack_require__(/*! ./pipes */ "../../libs/features/ui/pipes/index.ts");
var MODULES = [core_2.TranslateModule];
var UISharedModule = /** @class */ (function () {
    function UISharedModule() {
    }
    UISharedModule = __decorate([
        core_1.NgModule({
            imports: MODULES.slice(),
            declarations: pipes_1.PIPES.slice(),
            exports: MODULES.concat(pipes_1.PIPES)
        })
    ], UISharedModule);
    return UISharedModule;
}());
exports.UISharedModule = UISharedModule;


/***/ }),

/***/ "../../libs/utils/angular.ts":
/*!**********************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/utils/angular.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import " + moduleName + " in the AppModule only.");
    }
}
exports.throwIfAlreadyLoaded = throwIfAlreadyLoaded;


/***/ }),

/***/ "../../libs/utils/index.ts":
/*!********************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/utils/index.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./angular */ "../../libs/utils/angular.ts"));
__export(__webpack_require__(/*! ./objects */ "../../libs/utils/objects.ts"));
__export(__webpack_require__(/*! ./platform */ "../../libs/utils/platform.ts"));


/***/ }),

/***/ "../../libs/utils/objects.ts":
/*!**********************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/utils/objects.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = function (arg) {
    return typeof arg === 'string';
};
exports.isObject = function (arg) {
    return arg && typeof arg === 'object';
};


/***/ }),

/***/ "../../libs/utils/platform.ts":
/*!***********************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/libs/utils/platform.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * NativeScript helpers
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determine if running on native iOS mobile app
 */
function isIOS() {
    return typeof NSObject !== 'undefined' && typeof NSString !== 'undefined';
}
exports.isIOS = isIOS;
/**
 * Determine if running on native Android mobile app
 */
function isAndroid() {
    return typeof android !== 'undefined' && typeof java !== 'undefined';
}
exports.isAndroid = isAndroid;
/**
 * Determine if running on native iOS or Android mobile app
 */
function isNativeScript() {
    return isIOS() || isAndroid();
}
exports.isNativeScript = isNativeScript;


/***/ }),

/***/ "../../xplat/web/core/base/app.base-component.ts":
/*!******************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/core/base/app.base-component.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// libs
var core_1 = __webpack_require__(/*! @iot-edge-dynocard/core */ "../../libs/core/index.ts");
var AppBaseComponent = /** @class */ (function (_super) {
    __extends(AppBaseComponent, _super);
    function AppBaseComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AppBaseComponent;
}(core_1.BaseComponent));
exports.AppBaseComponent = AppBaseComponent;


/***/ }),

/***/ "../../xplat/web/core/base/index.ts":
/*!*****************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/core/base/index.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./app.base-component */ "../../xplat/web/core/base/app.base-component.ts"));


/***/ }),

/***/ "../../xplat/web/core/core.module.ts":
/*!******************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/core/core.module.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
// libs
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var http_loader_1 = __webpack_require__(/*! @ngx-translate/http-loader */ "../../node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
var utils_1 = __webpack_require__(/*! @iot-edge-dynocard/utils */ "../../libs/utils/index.ts");
var core_3 = __webpack_require__(/*! @iot-edge-dynocard/core */ "../../libs/core/index.ts");
// bring in custom web services here...
// factories
function winFactory() {
    return window;
}
exports.winFactory = winFactory;
function platformLangFactory() {
    var browserLang = window.navigator.language || 'en'; // fallback English
    // browser language has 2 codes, ex: 'en-US'
    return browserLang.split('-')[0];
}
exports.platformLangFactory = platformLangFactory;
function createTranslateLoader(http) {
    return new http_loader_1.TranslateHttpLoader(http, "/assets/i18n/", '.json');
}
exports.createTranslateLoader = createTranslateLoader;
var DynocardCoreModule = /** @class */ (function () {
    function DynocardCoreModule(parentModule) {
        utils_1.throwIfAlreadyLoaded(parentModule, 'DynocardCoreModule');
    }
    DynocardCoreModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                core_3.CoreModule.forRoot([
                    {
                        provide: core_3.PlatformLanguageToken,
                        useFactory: platformLangFactory
                    },
                    {
                        provide: core_3.WindowPlatformService,
                        useFactory: winFactory
                    }
                ]),
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: createTranslateLoader,
                        deps: [http_1.HttpClient]
                    }
                })
            ]
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [DynocardCoreModule])
    ], DynocardCoreModule);
    return DynocardCoreModule;
}());
exports.DynocardCoreModule = DynocardCoreModule;


/***/ }),

/***/ "../../xplat/web/core/index.ts":
/*!************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/core/index.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./base */ "../../xplat/web/core/base/index.ts"));
var core_module_1 = __webpack_require__(/*! ./core.module */ "../../xplat/web/core/core.module.ts");
exports.DynocardCoreModule = core_module_1.DynocardCoreModule;


/***/ }),

/***/ "../../xplat/web/features/charts/charts.module.ts":
/*!*******************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/features/charts/charts.module.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var ui_module_1 = __webpack_require__(/*! ../ui/ui.module */ "../../xplat/web/features/ui/ui.module.ts");
var components_1 = __webpack_require__(/*! ./components */ "../../xplat/web/features/charts/components/index.ts");
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        core_1.NgModule({
            imports: [ui_module_1.UIModule],
            declarations: components_1.CHARTS_COMPONENTS.slice(),
            exports: components_1.CHARTS_COMPONENTS.slice()
        })
    ], ChartsModule);
    return ChartsModule;
}());
exports.ChartsModule = ChartsModule;


/***/ }),

/***/ "../../xplat/web/features/charts/components/charts/dynocard.component.html":
/*!********************************************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/features/charts/components/charts/dynocard.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<h3>{{text}} - API loaded data</h3>-->\n<!--<div>{{chartData | json}}</div>-->\n\n<h3>Graph: Dyno Card</h3>\n<div #controls></div>\n<svg width=\"960\" height=\"800\"></svg>\n\n"

/***/ }),

/***/ "../../xplat/web/features/charts/components/charts/dynocard.component.ts":
/*!******************************************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/features/charts/components/charts/dynocard.component.ts ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var features_1 = __webpack_require__(/*! @iot-edge-dynocard/features */ "../../libs/features/index.ts");
var core_2 = __webpack_require__(/*! @iot-edge-dynocard/core */ "../../libs/core/index.ts");
var core_3 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
// import * as d3 from "d3v4";
var d3 = __webpack_require__(/*! d3 */ "../../node_modules/d3/d3.js");
var _ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
// import * as $ from "jQuery";
var $ = __webpack_require__(/*! jquery/dist/jquery.min.js */ "../../node_modules/jquery/dist/jquery.min.js");
;
var VisualUpdateType;
(function (VisualUpdateType) {
    VisualUpdateType[VisualUpdateType["Data"] = 2] = "Data";
    VisualUpdateType[VisualUpdateType["Resize"] = 4] = "Resize";
    VisualUpdateType[VisualUpdateType["ViewMode"] = 8] = "ViewMode";
    VisualUpdateType[VisualUpdateType["Style"] = 16] = "Style";
    VisualUpdateType[VisualUpdateType["ResizeEnd"] = 32] = "ResizeEnd";
    VisualUpdateType[VisualUpdateType["All"] = 62] = "All";
})(VisualUpdateType || (VisualUpdateType = {}));
var DataColumns = /** @class */ (function () {
    function DataColumns() {
    }
    DataColumns.pumpId = "Pump_ID";
    DataColumns.eventId = "Event_ID";
    DataColumns.cardHeaderId = "CardHeader_ID";
    DataColumns.epocDate = "EPOC_DATE";
    DataColumns.startDate = "startDate";
    DataColumns.endDate = "endDate";
    DataColumns.cardType = "Card_Type";
    DataColumns.cardId = "Card_ID";
    DataColumns.position = "Position";
    DataColumns.load = "Load";
    return DataColumns;
}());
exports.DataColumns = DataColumns;
var DynoCardComponent = /** @class */ (function (_super) {
    __extends(DynoCardComponent, _super);
    function DynoCardComponent(dataService, urlManagingService) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.urlManagingService = urlManagingService;
        _this.eventSelVal = 'all';
        _this.pumpSelVal = 'all';
        _this.isDropDownRender = false;
        _this.margin = { top: 150, right: 100, bottom: -200, left: 0 };
        _this.totalAnimationTime = 2000;
        _this.svgCanvasWidth = 1400;
        _this.svgCanvasHeight = 560;
        _this.loadChartData();
        return _this;
    }
    DynoCardComponent.prototype.ngOnInit = function () {
        this.controls.nativeElement.appendChild(this.createInitialHeader());
        var animateButton = this.createAnimationButton();
        document.getElementById("buttonDiv").appendChild(animateButton);
    };
    DynoCardComponent.prototype.loadChartData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService.get(this.urlManagingService.getDynoCardSampleData, null, { mockData: true }).toPromise()
                            .then(function (response) {
                            _this.chartData = response;
                            _this.renderChart();
                        })
                            .catch(function (error) {
                            console.log('DynoCardComponent.loadChartData() Error:', error);
                            return error;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DynoCardComponent.prototype.rowConversion = function (d, columns) {
        // const parseTime = d3.timeParse("%Y%m%d");
        for (var i = 1, n = columns.length, c = void 0; i < n; ++i)
            d[c = columns[i]] = +d[c];
        return d;
    };
    DynoCardComponent.prototype.renderChart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, childNodes, pumpDD, eventDD, startDatePicker, endDatePicker, xMax, xAxisLine, yAxisLine;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.dynoCardSvg = d3.select("svg");
                        this.surCrdSvgGrp = this.dynoCardSvg.append("g").classed("sur-svg-grp-cls", true);
                        this.surCrdSvgGrp.attr({ id: "surfaceCard" });
                        this.pumpCrdSvgGrp = this.dynoCardSvg.append("g").classed("pump-svg-grp-cls", true);
                        this.pumpCrdSvgGrp.attr({ id: "pumpCard" });
                        this.xAxisGroup = this.dynoCardSvg.append("g").classed("x-axis", true);
                        this.yAxisGroupSurface = this.dynoCardSvg.append("g").classed("y-axis", true);
                        this.yAxisGroupPump = this.dynoCardSvg.append("g").classed("y-axis-pump", true);
                        _a = this;
                        return [4 /*yield*/, this.getTableData()];
                    case 1:
                        _a.dataSet = _b.sent();
                        console.log('this.getTableData(): ', this.dataSet);
                        this.dynoCardSvg.attr({
                            width: this.svgCanvasWidth,
                            height: this.svgCanvasHeight = this.svgCanvasHeight - this.margin.top - this.margin.bottom
                        });
                        childNodes = document.getElementById("controlDiv");
                        while (childNodes.firstChild) {
                            childNodes.removeChild(childNodes.firstChild);
                        }
                        pumpDD = this.createDropDown(DataColumns.pumpId);
                        eventDD = this.createDropDown(DataColumns.eventId);
                        startDatePicker = this.createDateTimePicker(DataColumns.startDate);
                        endDatePicker = this.createDateTimePicker(DataColumns.endDate);
                        document.getElementById("controlDiv").appendChild(pumpDD);
                        document.getElementById("controlDiv").appendChild(startDatePicker);
                        document.getElementById("controlDiv").appendChild(endDatePicker);
                        document.getElementById("controlDiv").appendChild(eventDD);
                        this.dynoCardSvg.selectAll("line").remove();
                        this.dynoCardSvg.append("line").attr({
                            x1: this.margin.right,
                            y1: this.svgCanvasHeight / 2,
                            x2: this.svgCanvasWidth,
                            y2: this.svgCanvasHeight / 2,
                            "stroke-width": 0.5,
                            "stroke": "gray"
                        });
                        xMax = d3.max(this.dataSet.dataPoints, function (d) { return d.position; });
                        this.xAxis_Position = d3.scale.linear().domain([-1, xMax]).range([0, this.svgCanvasWidth]);
                        this.yAxis_Load = d3.scale.linear().domain(d3.extent(this.dataSet.dataPoints, function (d) { return d.load; })).range([this.svgCanvasHeight / 2, 0]);
                        xAxisLine = d3.svg.axis().scale(this.xAxis_Position).orient("bottom").tickSize(5).tickFormat(function (d) { return d + ' in'; });
                        this.xAxisGroup.call(xAxisLine).attr({
                            transform: "translate(" + this.margin.right + ", " + (this.svgCanvasHeight - 20) + ")"
                        });
                        yAxisLine = d3.svg.axis().scale(this.yAxis_Load).orient("left").tickSize(5).tickFormat(function (d) {
                            return Number(d) / 1 + ' klb';
                        });
                        this.yAxisGroupSurface.call(yAxisLine).attr({
                            transform: "translate(" + this.margin.right + ", 5)"
                        });
                        this.yAxisGroupPump.call(yAxisLine).attr({
                            transform: "translate(" + this.margin.right + ", " + (this.svgCanvasHeight / 2) + ")"
                        });
                        //-- Define Path Draw function
                        this.drawLineFunc = d3.svg.line().interpolate("cardinal")
                            .x(function (dp) {
                            return _this.xAxis_Position(dp.position);
                        })
                            .y(function (dp) {
                            return _this.yAxis_Load(dp.load);
                        });
                        //d3v4
                        // this.drawLineFunc = d3.line<DataPoint>()
                        //   .x((dp: DataPoint) => {
                        //     return this.xAxis_Position(dp.position);
                        //   })
                        //   .y((dp: DataPoint) => {
                        //     return this.yAxis_Load(dp.load);
                        //   })
                        //   .curve(d3.curveCardinal);
                        //this.updateDynoCardGraph(options);
                        this.animateGraph(this.updateGraphData());
                        return [2 /*return*/];
                }
            });
        });
    };
    DynoCardComponent.prototype.getTableData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // let sampleData: DataPoint[] = [];
            var retDataView;
            d3.csv("assets/dataset1.csv")
                .get(function (error, data) {
                if (error)
                    reject(error);
                // console.log(data);
                // sampleData = data;
                retDataView = {
                    dataPoints: data,
                    maxValue: d3.max(data, function (d) { return d.load; })
                };
                // what is supposed to go here?
                // const dataView = options.dataViews[0].table.rows;
                // const columnArr = options.dataViews[0].table.columns;
                ////
                // const dataView = [{ data: 123 }];
                // const columnArr = [
                //   {
                //     roles: { Pump_ID: true }
                //   },
                //   {
                //     roles: { Event_ID: true }
                //   },
                //   {
                //     roles: { CardHeader_ID: true }
                //   },
                //   {
                //     roles: { Card_Type: true }
                //   },
                //   {
                //     roles: { EPOC_DATE: true }
                //   },
                //   {
                //     roles: { Card_ID: true }
                //   },
                //   {
                //     roles: { Position: true }
                //   },
                //   {
                //     roles: { Load: true }
                //   }
                // ];
                // const columnPos: any[] = [];
                // for (let i = 0; i < columnArr.length; i++) {
                //   columnPos.push(String(Object.keys(columnArr[i].roles)[0]));
                // }
                // console.log(columnPos);
                // for (let i = 0; i < dataView.length; i++) {
                //   retDataView.dataPoints.push({
                //     pumpId: <number>+dataView[i][columnPos.indexOf(DataColumns.pumpId)],
                //     eventId: <number>+dataView[i][columnPos.indexOf(DataColumns.eventId)],
                //     cardHeaderId: <number> +dataView[i][columnPos.indexOf(DataColumns.cardHeaderId)],
                //     epocDate: <number>+dataView[i][columnPos.indexOf(DataColumns.epocDate)],
                //     cardType: <string>dataView[i][columnPos.indexOf(DataColumns.cardType)],
                //     cardId: <number>dataView[i][columnPos.indexOf(DataColumns.cardId)],
                //     position: <number>dataView[i][columnPos.indexOf(DataColumns.position)],
                //     load: <number>+dataView[i][columnPos.indexOf(DataColumns.load)]
                //   });
                // }
                console.log(retDataView);
                resolve(retDataView);
            }.bind(_this));
        });
    };
    DynoCardComponent.prototype.renderCard = function (ci, surCardData, pumpCardData) {
        var plotSurfacePath = this.surCrdSvgGrp.selectAll("path" + ci).data([surCardData]);
        plotSurfacePath.enter().append("path").classed("path-cls", true);
        plotSurfacePath.exit().remove();
        plotSurfacePath.attr("stroke", "steelblue")
            .attr("stroke-width", 2)
            .attr("fill", "none")
            .attr("d", this.drawLineFunc);
        this.plotteSurfacedPath = d3.select(document.getElementById("surfaceCard")).selectAll("path");
        var surfacePathLength = this.plotteSurfacedPath.node().getTotalLength();
        plotSurfacePath
            .attr("stroke-dasharray", surfacePathLength + " " + surfacePathLength)
            .attr("stroke-dashoffset", surfacePathLength)
            .transition()
            .duration(1000)
            .ease("linear")
            .attr("stroke-dashoffset", 0);
        var plotPumpPath = this.pumpCrdSvgGrp.selectAll("path" + ci).data([pumpCardData]);
        plotPumpPath.enter().append("path").classed("path-cls", true);
        plotPumpPath.exit().remove();
        plotPumpPath.attr("stroke", "brown")
            .attr("stroke-width", 2)
            .attr("fill", "none")
            .attr("d", this.drawLineFunc);
        this.plottePumpPath = d3.select(document.getElementById("pumpCard")).selectAll("path");
        var pumpPathLength = this.plottePumpPath.node().getTotalLength();
        plotPumpPath
            .attr("stroke-dasharray", pumpPathLength + " " + pumpPathLength)
            .attr("stroke-dashoffset", pumpPathLength)
            .transition()
            .duration(1000)
            .ease("linear")
            .attr("stroke-dashoffset", 0);
        this.surCrdSvgGrp.attr({
            transform: "translate(10,0)"
        });
        this.surCrdSvgGrp.attr({
            transform: "translate(" + this.margin.right + ",0)"
        });
        this.pumpCrdSvgGrp.attr({
            transform: "translate(" + this.margin.right + "," + (this.svgCanvasHeight / 2 - 30) + ")"
        });
    };
    DynoCardComponent.prototype.animateGraph = function (argGraphDataSet) {
        var _this = this;
        var allDataPoints = _.sortBy(argGraphDataSet, 'cardId');
        var surfaceDataGrp = _.groupBy(_.filter(allDataPoints, { 'cardType': 'S' }), 'cardHeaderId');
        var pumpCardDataGrp = _.groupBy(_.filter(allDataPoints, { 'cardType': 'P' }), 'cardHeaderId');
        var surCardDataArr = _.map(surfaceDataGrp, surfaceDataGrp.value);
        var pumpCardDataArr = _.map(pumpCardDataGrp, pumpCardDataGrp.value);
        this.surCrdSvgGrp.selectAll("path").remove();
        this.pumpCrdSvgGrp.selectAll("path").remove();
        var _loop_1 = function (ci) {
            var surCardData = surCardDataArr[ci];
            var pumpCardData = pumpCardDataArr[ci];
            setTimeout(function () {
                _this.renderCard(ci, surCardData, pumpCardData);
            }, +ci * this_1.totalAnimationTime);
        };
        var this_1 = this;
        for (var ci in surCardDataArr) {
            _loop_1(ci);
        }
    };
    DynoCardComponent.prototype.updateGraphData = function () {
        var retGraphDataSet = _.sortBy(this.dataSet.dataPoints, 'cardId');
        if (this.pumpSelVal !== 'all')
            retGraphDataSet = _.filter(this.dataSet.dataPoints, { 'pumpId': +this.pumpSelVal });
        var startDateTime = new Date(String($("#" + DataColumns.startDate).val())).getTime() / 1000;
        var endDateTime = new Date(String($("#" + DataColumns.endDate).val())).getTime() / 1000;
        if (!isNaN(startDateTime) && !isNaN(endDateTime)) {
            retGraphDataSet = _.filter(this.dataSet.dataPoints, function (d) {
                if (d.epocDate >= startDateTime && d.epocDate <= endDateTime) {
                    return true;
                }
            });
        }
        if (this.eventSelVal !== 'all')
            retGraphDataSet = _.filter(retGraphDataSet, { 'eventId': +this.eventSelVal });
        return retGraphDataSet;
    };
    DynoCardComponent.prototype.createInitialHeader = function () {
        var baseDiv = document.createElement("div");
        baseDiv.setAttribute("class", "container-fluid");
        var reportTitle = document.createElement("p");
        reportTitle.setAttribute("class", "text-center");
        // reportTitle.appendChild(document.createTextNode(" Graph: Dyno Card"));
        baseDiv.appendChild(reportTitle);
        var controlDivRow = document.createElement("div");
        controlDivRow.setAttribute("class", "form-inline");
        var controlDiv = document.createElement("div");
        controlDiv.setAttribute("id", "controlDiv");
        controlDiv.setAttribute("class", "row");
        controlDivRow.appendChild(controlDiv);
        baseDiv.appendChild(controlDivRow);
        var dynoCardDiv = document.createElement("div");
        dynoCardDiv.setAttribute("id", "dynoCardDiv");
        dynoCardDiv.setAttribute("class", "row");
        baseDiv.appendChild(dynoCardDiv);
        baseDiv.appendChild(document.createElement("hr"));
        var buttonDiv = document.createElement("div");
        buttonDiv.setAttribute("id", "buttonDiv");
        buttonDiv.setAttribute("class", "row");
        baseDiv.appendChild(buttonDiv);
        return baseDiv;
    };
    DynoCardComponent.prototype.createDateTimePicker = function (argDateType) {
        var _this = this;
        var ddDiv = document.createElement("div");
        ddDiv.setAttribute("class", "col-xs-3 form-group");
        ddDiv.setAttribute("id", "datePicker1");
        var dateDiv = document.createElement("div");
        dateDiv.setAttribute("class", "input-group");
        dateDiv.setAttribute("id", argDateType + "Picker");
        var dateInput = document.createElement("input");
        dateInput.setAttribute("class", "form-control");
        dateInput.setAttribute("type", "text");
        dateInput.setAttribute("id", argDateType);
        dateInput.onchange = function () {
            _this.rerenderEventDropDown();
        };
        var spanOuter = document.createElement("span");
        spanOuter.setAttribute("class", "input-group-addon");
        var spanIcon = document.createElement("span");
        spanIcon.setAttribute("class", "glyphicon glyphicon-calendar");
        spanOuter.appendChild(spanIcon);
        if (argDateType === DataColumns.startDate) {
            dateInput.setAttribute("placeholder", "Start Date");
            dateInput.setAttribute("value", "04/08/1996 12:00 AM");
        }
        else {
            dateInput.setAttribute("placeholder", "End Date");
            dateInput.setAttribute("value", "04/08/2019 12:00 AM");
        }
        // spanOuter.addEventListener("mouseover", function (event) {
        // });
        spanOuter.onmouseover = function (event) {
            console.log(event);
            $('#' + argDateType + "Picker").datetimepicker();
        };
        spanOuter.onclick = function () {
            _this.rerenderEventDropDown();
        };
        dateDiv.appendChild(dateInput);
        dateDiv.appendChild(spanOuter);
        ddDiv.appendChild(dateDiv);
        return ddDiv;
    };
    DynoCardComponent.prototype.createAnimationButton = function () {
        var animationButton = document.createElement("button");
        animationButton.setAttribute("type", "button");
        animationButton.setAttribute("class", "btn btn-success center-block");
        animationButton.textContent = "Run DynoCard Animation";
        animationButton.onclick = function () {
            this.animateGraph(this.updateGraphData());
        }.bind(this);
        return animationButton;
    };
    DynoCardComponent.prototype.rerenderEventDropDown = function () {
        var eventDD = document.getElementById(DataColumns.eventId);
        while (eventDD.firstChild) {
            eventDD.removeChild(eventDD.firstChild);
        }
        this.eventSelVal = 'all';
        var updatedDataSet = this.updateGraphData();
        var tmpEventDDList = _.uniq(_.map(updatedDataSet, 'eventId'));
        var allOp = document.createElement("option");
        if (tmpEventDDList.length > 0) {
            allOp.text = "All";
            allOp.value = "all";
        }
        else {
            allOp.text = "No Event";
            allOp.value = "No";
        }
        eventDD.appendChild(allOp);
        for (var i = 0; i < tmpEventDDList.length; i++) {
            var option = document.createElement("option");
            option.value = String(tmpEventDDList[i]);
            option.text = String(tmpEventDDList[i]);
            eventDD.appendChild(option);
        }
    };
    DynoCardComponent.prototype.createDropDown = function (argDropDownType) {
        var _this = this;
        var ddDiv = document.createElement("div");
        // let ddLabel: HTMLElement;
        ddDiv.setAttribute("class", "col-xs-3 input-group");
        var labelDiv = document.createElement("div");
        labelDiv.setAttribute("class", "input-group-addon");
        var dropDown = document.createElement("select");
        dropDown.setAttribute("class", "form-control");
        dropDown.setAttribute("id", argDropDownType);
        var dropDownData = [];
        if (argDropDownType === DataColumns.pumpId) {
            labelDiv.appendChild(document.createTextNode("Pump: "));
            var pumpIdList = _.uniq(_.map(this.dataSet.dataPoints, 'pumpId'));
            dropDownData = _.map(pumpIdList, function (item) { return String(item); });
        }
        else if (argDropDownType === DataColumns.cardType) {
            labelDiv.appendChild(document.createTextNode("Card Type"));
            dropDownData = _.uniq(_.map(this.dataSet.dataPoints, 'cardType'));
            this.cardTypeDDList = dropDownData;
        }
        else if (argDropDownType === DataColumns.eventId) {
            labelDiv.appendChild(document.createTextNode("Event:  "));
            dropDownData = _.uniq(_.map(this.dataSet.dataPoints, 'eventId'));
            this.eventIdDDList = dropDownData;
        }
        //Create and append the options
        var allOp = document.createElement("option");
        allOp.text = "All";
        allOp.value = "all";
        dropDown.appendChild(allOp);
        for (var i = 0; i < dropDownData.length; i++) {
            var option = document.createElement("option");
            option.value = dropDownData[i];
            option.text = dropDownData[i];
            dropDown.appendChild(option);
        }
        // dropDown.ondblclick=()=>{
        //     if (argDropDownType == DataColumns.eventId){
        //         this.rerenderEventDropDown();
        //     }
        // }
        dropDown.onchange = function (event) {
            var selVal = $("#" + argDropDownType).val();
            if (argDropDownType === DataColumns.pumpId) {
                _this.pumpSelVal = selVal;
                _this.resetOtherControls();
            }
            else if (argDropDownType === DataColumns.eventId)
                _this.eventSelVal = selVal;
            _this.animateGraph(_this.updateGraphData());
        };
        ddDiv.appendChild(labelDiv);
        ddDiv.appendChild(dropDown);
        return ddDiv;
    };
    DynoCardComponent.prototype.resetOtherControls = function () {
        $("#" + DataColumns.eventId).val('all');
        $("#" + DataColumns.startDate).val('');
        $("#" + DataColumns.endDate).val('');
        this.eventSelVal = 'all';
    };
    __decorate([
        core_3.ViewChild('controls'),
        __metadata("design:type", core_3.ElementRef)
    ], DynoCardComponent.prototype, "controls", void 0);
    DynoCardComponent = __decorate([
        core_1.Component({
            selector: 'dynocard-chart',
            template: __webpack_require__(/*! ./dynocard.component.html */ "../../xplat/web/features/charts/components/charts/dynocard.component.html"),
            styles: [__webpack_require__(/*! ./dynocard.style.css */ "../../xplat/web/features/charts/components/charts/dynocard.style.css")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [core_2.DataService, core_2.UrlManagingService])
    ], DynoCardComponent);
    return DynoCardComponent;
}(features_1.DynoCardBaseComponent));
exports.DynoCardComponent = DynoCardComponent;


/***/ }),

/***/ "../../xplat/web/features/charts/components/charts/dynocard.style.css":
/*!***************************************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/features/charts/components/charts/dynocard.style.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.axis--x path {*/\n  /*display : none;*/\n  /*}*/\n  /*.line {*/\n  /*fill         : none;*/\n  /*stroke       : steelblue;*/\n  /*stroke-width : 1.5px;*/\n  /*}*/\n  /**/\n  /*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n  /*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n  html {\n  font-family: sans-serif;\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n}\n  body {\n  margin: 0;\n}\n  article,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n  audio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\n  audio:not([controls]) {\n  display: none;\n  height: 0;\n}\n  [hidden],\ntemplate {\n  display: none;\n}\n  a {\n  background-color: transparent;\n}\n  a:active,\na:hover {\n  outline: 0;\n}\n  abbr[title] {\n  border-bottom: 1px dotted;\n}\n  b,\nstrong {\n  font-weight: bold;\n}\n  dfn {\n  font-style: italic;\n}\n  h1 {\n  margin: .67em 0;\n  font-size: 2em;\n}\n  mark {\n  color: #000;\n  background: #ff0;\n}\n  small {\n  font-size: 80%;\n}\n  sub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n  sup {\n  top: -.5em;\n}\n  sub {\n  bottom: -.25em;\n}\n  img {\n  border: 0;\n}\n  svg:not(:root) {\n  overflow: hidden;\n}\n  figure {\n  margin: 1em 40px;\n}\n  hr {\n  height: 0;\n  box-sizing: content-box;\n}\n  pre {\n  overflow: auto;\n}\n  code,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n  button,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\n  button {\n  overflow: visible;\n}\n  button,\nselect {\n  text-transform: none;\n}\n  button,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n  button[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n  button::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n  input {\n  line-height: normal;\n}\n  input[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n  input[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n  input[type=\"search\"] {\n  box-sizing: content-box;\n  -webkit-appearance: textfield;\n}\n  input[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n  fieldset {\n  padding: .35em .625em .75em;\n  margin: 0 2px;\n  border: 1px solid #c0c0c0;\n}\n  legend {\n  padding: 0;\n  border: 0;\n}\n  textarea {\n  overflow: auto;\n}\n  optgroup {\n  font-weight: bold;\n}\n  table {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n  td,\nth {\n  padding: 0;\n}\n  /*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n  @media print {\n  *,\n  *:before,\n  *:after {\n    color: #000 !important;\n    text-shadow: none !important;\n    background: transparent !important;\n    box-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  .navbar {\n    display: none;\n  }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n  .label {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n  @font-face {\n  font-family: 'Glyphicons Halflings';\n\n  src: url('glyphicons-halflings-regular.eot');\n  src: url('glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('glyphicons-halflings-regular.woff2') format('woff2'), url('glyphicons-halflings-regular.woff') format('woff'), url('glyphicons-halflings-regular.ttf') format('truetype'), url('glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');\n}\n  .glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n  .glyphicon-asterisk:before {\n  content: \"\\002a\";\n}\n  .glyphicon-plus:before {\n  content: \"\\002b\";\n}\n  .glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20ac\";\n}\n  .glyphicon-minus:before {\n  content: \"\\2212\";\n}\n  .glyphicon-cloud:before {\n  content: \"\\2601\";\n}\n  .glyphicon-envelope:before {\n  content: \"\\2709\";\n}\n  .glyphicon-pencil:before {\n  content: \"\\270f\";\n}\n  .glyphicon-glass:before {\n  content: \"\\e001\";\n}\n  .glyphicon-music:before {\n  content: \"\\e002\";\n}\n  .glyphicon-search:before {\n  content: \"\\e003\";\n}\n  .glyphicon-heart:before {\n  content: \"\\e005\";\n}\n  .glyphicon-star:before {\n  content: \"\\e006\";\n}\n  .glyphicon-star-empty:before {\n  content: \"\\e007\";\n}\n  .glyphicon-user:before {\n  content: \"\\e008\";\n}\n  .glyphicon-film:before {\n  content: \"\\e009\";\n}\n  .glyphicon-th-large:before {\n  content: \"\\e010\";\n}\n  .glyphicon-th:before {\n  content: \"\\e011\";\n}\n  .glyphicon-th-list:before {\n  content: \"\\e012\";\n}\n  .glyphicon-ok:before {\n  content: \"\\e013\";\n}\n  .glyphicon-remove:before {\n  content: \"\\e014\";\n}\n  .glyphicon-zoom-in:before {\n  content: \"\\e015\";\n}\n  .glyphicon-zoom-out:before {\n  content: \"\\e016\";\n}\n  .glyphicon-off:before {\n  content: \"\\e017\";\n}\n  .glyphicon-signal:before {\n  content: \"\\e018\";\n}\n  .glyphicon-cog:before {\n  content: \"\\e019\";\n}\n  .glyphicon-trash:before {\n  content: \"\\e020\";\n}\n  .glyphicon-home:before {\n  content: \"\\e021\";\n}\n  .glyphicon-file:before {\n  content: \"\\e022\";\n}\n  .glyphicon-time:before {\n  content: \"\\e023\";\n}\n  .glyphicon-road:before {\n  content: \"\\e024\";\n}\n  .glyphicon-download-alt:before {\n  content: \"\\e025\";\n}\n  .glyphicon-download:before {\n  content: \"\\e026\";\n}\n  .glyphicon-upload:before {\n  content: \"\\e027\";\n}\n  .glyphicon-inbox:before {\n  content: \"\\e028\";\n}\n  .glyphicon-play-circle:before {\n  content: \"\\e029\";\n}\n  .glyphicon-repeat:before {\n  content: \"\\e030\";\n}\n  .glyphicon-refresh:before {\n  content: \"\\e031\";\n}\n  .glyphicon-list-alt:before {\n  content: \"\\e032\";\n}\n  .glyphicon-lock:before {\n  content: \"\\e033\";\n}\n  .glyphicon-flag:before {\n  content: \"\\e034\";\n}\n  .glyphicon-headphones:before {\n  content: \"\\e035\";\n}\n  .glyphicon-volume-off:before {\n  content: \"\\e036\";\n}\n  .glyphicon-volume-down:before {\n  content: \"\\e037\";\n}\n  .glyphicon-volume-up:before {\n  content: \"\\e038\";\n}\n  .glyphicon-qrcode:before {\n  content: \"\\e039\";\n}\n  .glyphicon-barcode:before {\n  content: \"\\e040\";\n}\n  .glyphicon-tag:before {\n  content: \"\\e041\";\n}\n  .glyphicon-tags:before {\n  content: \"\\e042\";\n}\n  .glyphicon-book:before {\n  content: \"\\e043\";\n}\n  .glyphicon-bookmark:before {\n  content: \"\\e044\";\n}\n  .glyphicon-print:before {\n  content: \"\\e045\";\n}\n  .glyphicon-camera:before {\n  content: \"\\e046\";\n}\n  .glyphicon-font:before {\n  content: \"\\e047\";\n}\n  .glyphicon-bold:before {\n  content: \"\\e048\";\n}\n  .glyphicon-italic:before {\n  content: \"\\e049\";\n}\n  .glyphicon-text-height:before {\n  content: \"\\e050\";\n}\n  .glyphicon-text-width:before {\n  content: \"\\e051\";\n}\n  .glyphicon-align-left:before {\n  content: \"\\e052\";\n}\n  .glyphicon-align-center:before {\n  content: \"\\e053\";\n}\n  .glyphicon-align-right:before {\n  content: \"\\e054\";\n}\n  .glyphicon-align-justify:before {\n  content: \"\\e055\";\n}\n  .glyphicon-list:before {\n  content: \"\\e056\";\n}\n  .glyphicon-indent-left:before {\n  content: \"\\e057\";\n}\n  .glyphicon-indent-right:before {\n  content: \"\\e058\";\n}\n  .glyphicon-facetime-video:before {\n  content: \"\\e059\";\n}\n  .glyphicon-picture:before {\n  content: \"\\e060\";\n}\n  .glyphicon-map-marker:before {\n  content: \"\\e062\";\n}\n  .glyphicon-adjust:before {\n  content: \"\\e063\";\n}\n  .glyphicon-tint:before {\n  content: \"\\e064\";\n}\n  .glyphicon-edit:before {\n  content: \"\\e065\";\n}\n  .glyphicon-share:before {\n  content: \"\\e066\";\n}\n  .glyphicon-check:before {\n  content: \"\\e067\";\n}\n  .glyphicon-move:before {\n  content: \"\\e068\";\n}\n  .glyphicon-step-backward:before {\n  content: \"\\e069\";\n}\n  .glyphicon-fast-backward:before {\n  content: \"\\e070\";\n}\n  .glyphicon-backward:before {\n  content: \"\\e071\";\n}\n  .glyphicon-play:before {\n  content: \"\\e072\";\n}\n  .glyphicon-pause:before {\n  content: \"\\e073\";\n}\n  .glyphicon-stop:before {\n  content: \"\\e074\";\n}\n  .glyphicon-forward:before {\n  content: \"\\e075\";\n}\n  .glyphicon-fast-forward:before {\n  content: \"\\e076\";\n}\n  .glyphicon-step-forward:before {\n  content: \"\\e077\";\n}\n  .glyphicon-eject:before {\n  content: \"\\e078\";\n}\n  .glyphicon-chevron-left:before {\n  content: \"\\e079\";\n}\n  .glyphicon-chevron-right:before {\n  content: \"\\e080\";\n}\n  .glyphicon-plus-sign:before {\n  content: \"\\e081\";\n}\n  .glyphicon-minus-sign:before {\n  content: \"\\e082\";\n}\n  .glyphicon-remove-sign:before {\n  content: \"\\e083\";\n}\n  .glyphicon-ok-sign:before {\n  content: \"\\e084\";\n}\n  .glyphicon-question-sign:before {\n  content: \"\\e085\";\n}\n  .glyphicon-info-sign:before {\n  content: \"\\e086\";\n}\n  .glyphicon-screenshot:before {\n  content: \"\\e087\";\n}\n  .glyphicon-remove-circle:before {\n  content: \"\\e088\";\n}\n  .glyphicon-ok-circle:before {\n  content: \"\\e089\";\n}\n  .glyphicon-ban-circle:before {\n  content: \"\\e090\";\n}\n  .glyphicon-arrow-left:before {\n  content: \"\\e091\";\n}\n  .glyphicon-arrow-right:before {\n  content: \"\\e092\";\n}\n  .glyphicon-arrow-up:before {\n  content: \"\\e093\";\n}\n  .glyphicon-arrow-down:before {\n  content: \"\\e094\";\n}\n  .glyphicon-share-alt:before {\n  content: \"\\e095\";\n}\n  .glyphicon-resize-full:before {\n  content: \"\\e096\";\n}\n  .glyphicon-resize-small:before {\n  content: \"\\e097\";\n}\n  .glyphicon-exclamation-sign:before {\n  content: \"\\e101\";\n}\n  .glyphicon-gift:before {\n  content: \"\\e102\";\n}\n  .glyphicon-leaf:before {\n  content: \"\\e103\";\n}\n  .glyphicon-fire:before {\n  content: \"\\e104\";\n}\n  .glyphicon-eye-open:before {\n  content: \"\\e105\";\n}\n  .glyphicon-eye-close:before {\n  content: \"\\e106\";\n}\n  .glyphicon-warning-sign:before {\n  content: \"\\e107\";\n}\n  .glyphicon-plane:before {\n  content: \"\\e108\";\n}\n  .glyphicon-calendar:before {\n  content: \"\\e109\";\n}\n  .glyphicon-random:before {\n  content: \"\\e110\";\n}\n  .glyphicon-comment:before {\n  content: \"\\e111\";\n}\n  .glyphicon-magnet:before {\n  content: \"\\e112\";\n}\n  .glyphicon-chevron-up:before {\n  content: \"\\e113\";\n}\n  .glyphicon-chevron-down:before {\n  content: \"\\e114\";\n}\n  .glyphicon-retweet:before {\n  content: \"\\e115\";\n}\n  .glyphicon-shopping-cart:before {\n  content: \"\\e116\";\n}\n  .glyphicon-folder-close:before {\n  content: \"\\e117\";\n}\n  .glyphicon-folder-open:before {\n  content: \"\\e118\";\n}\n  .glyphicon-resize-vertical:before {\n  content: \"\\e119\";\n}\n  .glyphicon-resize-horizontal:before {\n  content: \"\\e120\";\n}\n  .glyphicon-hdd:before {\n  content: \"\\e121\";\n}\n  .glyphicon-bullhorn:before {\n  content: \"\\e122\";\n}\n  .glyphicon-bell:before {\n  content: \"\\e123\";\n}\n  .glyphicon-certificate:before {\n  content: \"\\e124\";\n}\n  .glyphicon-thumbs-up:before {\n  content: \"\\e125\";\n}\n  .glyphicon-thumbs-down:before {\n  content: \"\\e126\";\n}\n  .glyphicon-hand-right:before {\n  content: \"\\e127\";\n}\n  .glyphicon-hand-left:before {\n  content: \"\\e128\";\n}\n  .glyphicon-hand-up:before {\n  content: \"\\e129\";\n}\n  .glyphicon-hand-down:before {\n  content: \"\\e130\";\n}\n  .glyphicon-circle-arrow-right:before {\n  content: \"\\e131\";\n}\n  .glyphicon-circle-arrow-left:before {\n  content: \"\\e132\";\n}\n  .glyphicon-circle-arrow-up:before {\n  content: \"\\e133\";\n}\n  .glyphicon-circle-arrow-down:before {\n  content: \"\\e134\";\n}\n  .glyphicon-globe:before {\n  content: \"\\e135\";\n}\n  .glyphicon-wrench:before {\n  content: \"\\e136\";\n}\n  .glyphicon-tasks:before {\n  content: \"\\e137\";\n}\n  .glyphicon-filter:before {\n  content: \"\\e138\";\n}\n  .glyphicon-briefcase:before {\n  content: \"\\e139\";\n}\n  .glyphicon-fullscreen:before {\n  content: \"\\e140\";\n}\n  .glyphicon-dashboard:before {\n  content: \"\\e141\";\n}\n  .glyphicon-paperclip:before {\n  content: \"\\e142\";\n}\n  .glyphicon-heart-empty:before {\n  content: \"\\e143\";\n}\n  .glyphicon-link:before {\n  content: \"\\e144\";\n}\n  .glyphicon-phone:before {\n  content: \"\\e145\";\n}\n  .glyphicon-pushpin:before {\n  content: \"\\e146\";\n}\n  .glyphicon-usd:before {\n  content: \"\\e148\";\n}\n  .glyphicon-gbp:before {\n  content: \"\\e149\";\n}\n  .glyphicon-sort:before {\n  content: \"\\e150\";\n}\n  .glyphicon-sort-by-alphabet:before {\n  content: \"\\e151\";\n}\n  .glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\e152\";\n}\n  .glyphicon-sort-by-order:before {\n  content: \"\\e153\";\n}\n  .glyphicon-sort-by-order-alt:before {\n  content: \"\\e154\";\n}\n  .glyphicon-sort-by-attributes:before {\n  content: \"\\e155\";\n}\n  .glyphicon-sort-by-attributes-alt:before {\n  content: \"\\e156\";\n}\n  .glyphicon-unchecked:before {\n  content: \"\\e157\";\n}\n  .glyphicon-expand:before {\n  content: \"\\e158\";\n}\n  .glyphicon-collapse-down:before {\n  content: \"\\e159\";\n}\n  .glyphicon-collapse-up:before {\n  content: \"\\e160\";\n}\n  .glyphicon-log-in:before {\n  content: \"\\e161\";\n}\n  .glyphicon-flash:before {\n  content: \"\\e162\";\n}\n  .glyphicon-log-out:before {\n  content: \"\\e163\";\n}\n  .glyphicon-new-window:before {\n  content: \"\\e164\";\n}\n  .glyphicon-record:before {\n  content: \"\\e165\";\n}\n  .glyphicon-save:before {\n  content: \"\\e166\";\n}\n  .glyphicon-open:before {\n  content: \"\\e167\";\n}\n  .glyphicon-saved:before {\n  content: \"\\e168\";\n}\n  .glyphicon-import:before {\n  content: \"\\e169\";\n}\n  .glyphicon-export:before {\n  content: \"\\e170\";\n}\n  .glyphicon-send:before {\n  content: \"\\e171\";\n}\n  .glyphicon-floppy-disk:before {\n  content: \"\\e172\";\n}\n  .glyphicon-floppy-saved:before {\n  content: \"\\e173\";\n}\n  .glyphicon-floppy-remove:before {\n  content: \"\\e174\";\n}\n  .glyphicon-floppy-save:before {\n  content: \"\\e175\";\n}\n  .glyphicon-floppy-open:before {\n  content: \"\\e176\";\n}\n  .glyphicon-credit-card:before {\n  content: \"\\e177\";\n}\n  .glyphicon-transfer:before {\n  content: \"\\e178\";\n}\n  .glyphicon-cutlery:before {\n  content: \"\\e179\";\n}\n  .glyphicon-header:before {\n  content: \"\\e180\";\n}\n  .glyphicon-compressed:before {\n  content: \"\\e181\";\n}\n  .glyphicon-earphone:before {\n  content: \"\\e182\";\n}\n  .glyphicon-phone-alt:before {\n  content: \"\\e183\";\n}\n  .glyphicon-tower:before {\n  content: \"\\e184\";\n}\n  .glyphicon-stats:before {\n  content: \"\\e185\";\n}\n  .glyphicon-sd-video:before {\n  content: \"\\e186\";\n}\n  .glyphicon-hd-video:before {\n  content: \"\\e187\";\n}\n  .glyphicon-subtitles:before {\n  content: \"\\e188\";\n}\n  .glyphicon-sound-stereo:before {\n  content: \"\\e189\";\n}\n  .glyphicon-sound-dolby:before {\n  content: \"\\e190\";\n}\n  .glyphicon-sound-5-1:before {\n  content: \"\\e191\";\n}\n  .glyphicon-sound-6-1:before {\n  content: \"\\e192\";\n}\n  .glyphicon-sound-7-1:before {\n  content: \"\\e193\";\n}\n  .glyphicon-copyright-mark:before {\n  content: \"\\e194\";\n}\n  .glyphicon-registration-mark:before {\n  content: \"\\e195\";\n}\n  .glyphicon-cloud-download:before {\n  content: \"\\e197\";\n}\n  .glyphicon-cloud-upload:before {\n  content: \"\\e198\";\n}\n  .glyphicon-tree-conifer:before {\n  content: \"\\e199\";\n}\n  .glyphicon-tree-deciduous:before {\n  content: \"\\e200\";\n}\n  .glyphicon-cd:before {\n  content: \"\\e201\";\n}\n  .glyphicon-save-file:before {\n  content: \"\\e202\";\n}\n  .glyphicon-open-file:before {\n  content: \"\\e203\";\n}\n  .glyphicon-level-up:before {\n  content: \"\\e204\";\n}\n  .glyphicon-copy:before {\n  content: \"\\e205\";\n}\n  .glyphicon-paste:before {\n  content: \"\\e206\";\n}\n  .glyphicon-alert:before {\n  content: \"\\e209\";\n}\n  .glyphicon-equalizer:before {\n  content: \"\\e210\";\n}\n  .glyphicon-king:before {\n  content: \"\\e211\";\n}\n  .glyphicon-queen:before {\n  content: \"\\e212\";\n}\n  .glyphicon-pawn:before {\n  content: \"\\e213\";\n}\n  .glyphicon-bishop:before {\n  content: \"\\e214\";\n}\n  .glyphicon-knight:before {\n  content: \"\\e215\";\n}\n  .glyphicon-baby-formula:before {\n  content: \"\\e216\";\n}\n  .glyphicon-tent:before {\n  content: \"\\26fa\";\n}\n  .glyphicon-blackboard:before {\n  content: \"\\e218\";\n}\n  .glyphicon-bed:before {\n  content: \"\\e219\";\n}\n  .glyphicon-apple:before {\n  content: \"\\f8ff\";\n}\n  .glyphicon-erase:before {\n  content: \"\\e221\";\n}\n  .glyphicon-hourglass:before {\n  content: \"\\231b\";\n}\n  .glyphicon-lamp:before {\n  content: \"\\e223\";\n}\n  .glyphicon-duplicate:before {\n  content: \"\\e224\";\n}\n  .glyphicon-piggy-bank:before {\n  content: \"\\e225\";\n}\n  .glyphicon-scissors:before {\n  content: \"\\e226\";\n}\n  .glyphicon-bitcoin:before {\n  content: \"\\e227\";\n}\n  .glyphicon-btc:before {\n  content: \"\\e227\";\n}\n  .glyphicon-xbt:before {\n  content: \"\\e227\";\n}\n  .glyphicon-yen:before {\n  content: \"\\00a5\";\n}\n  .glyphicon-jpy:before {\n  content: \"\\00a5\";\n}\n  .glyphicon-ruble:before {\n  content: \"\\20bd\";\n}\n  .glyphicon-rub:before {\n  content: \"\\20bd\";\n}\n  .glyphicon-scale:before {\n  content: \"\\e230\";\n}\n  .glyphicon-ice-lolly:before {\n  content: \"\\e231\";\n}\n  .glyphicon-ice-lolly-tasted:before {\n  content: \"\\e232\";\n}\n  .glyphicon-education:before {\n  content: \"\\e233\";\n}\n  .glyphicon-option-horizontal:before {\n  content: \"\\e234\";\n}\n  .glyphicon-option-vertical:before {\n  content: \"\\e235\";\n}\n  .glyphicon-menu-hamburger:before {\n  content: \"\\e236\";\n}\n  .glyphicon-modal-window:before {\n  content: \"\\e237\";\n}\n  .glyphicon-oil:before {\n  content: \"\\e238\";\n}\n  .glyphicon-grain:before {\n  content: \"\\e239\";\n}\n  .glyphicon-sunglasses:before {\n  content: \"\\e240\";\n}\n  .glyphicon-text-size:before {\n  content: \"\\e241\";\n}\n  .glyphicon-text-color:before {\n  content: \"\\e242\";\n}\n  .glyphicon-text-background:before {\n  content: \"\\e243\";\n}\n  .glyphicon-object-align-top:before {\n  content: \"\\e244\";\n}\n  .glyphicon-object-align-bottom:before {\n  content: \"\\e245\";\n}\n  .glyphicon-object-align-horizontal:before {\n  content: \"\\e246\";\n}\n  .glyphicon-object-align-left:before {\n  content: \"\\e247\";\n}\n  .glyphicon-object-align-vertical:before {\n  content: \"\\e248\";\n}\n  .glyphicon-object-align-right:before {\n  content: \"\\e249\";\n}\n  .glyphicon-triangle-right:before {\n  content: \"\\e250\";\n}\n  .glyphicon-triangle-left:before {\n  content: \"\\e251\";\n}\n  .glyphicon-triangle-bottom:before {\n  content: \"\\e252\";\n}\n  .glyphicon-triangle-top:before {\n  content: \"\\e253\";\n}\n  .glyphicon-console:before {\n  content: \"\\e254\";\n}\n  .glyphicon-superscript:before {\n  content: \"\\e255\";\n}\n  .glyphicon-subscript:before {\n  content: \"\\e256\";\n}\n  .glyphicon-menu-left:before {\n  content: \"\\e257\";\n}\n  .glyphicon-menu-right:before {\n  content: \"\\e258\";\n}\n  .glyphicon-menu-down:before {\n  content: \"\\e259\";\n}\n  .glyphicon-menu-up:before {\n  content: \"\\e260\";\n}\n  * {\n  box-sizing: border-box;\n}\n  *:before,\n*:after {\n  box-sizing: border-box;\n}\n  html {\n  font-size: 10px;\n\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n  body {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333;\n  background-color: #fff;\n}\n  input,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n  a {\n  color: #337ab7;\n  text-decoration: none;\n}\n  a:hover,\na:focus {\n  color: #23527c;\n  text-decoration: underline;\n}\n  a:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n  figure {\n  margin: 0;\n}\n  img {\n  vertical-align: middle;\n}\n  .img-responsive,\n.thumbnail > img,\n.thumbnail a > img,\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n  .img-rounded {\n  border-radius: 6px;\n}\n  .img-thumbnail {\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  transition: all .2s ease-in-out;\n}\n  .img-circle {\n  border-radius: 50%;\n}\n  hr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eee;\n}\n  .sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n  .sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n  [role=\"button\"] {\n  cursor: pointer;\n}\n  h1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\n  h1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small,\nh1 .small,\nh2 .small,\nh3 .small,\nh4 .small,\nh5 .small,\nh6 .small,\n.h1 .small,\n.h2 .small,\n.h3 .small,\n.h4 .small,\n.h5 .small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n}\n  h1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n  h1 small,\n.h1 small,\nh2 small,\n.h2 small,\nh3 small,\n.h3 small,\nh1 .small,\n.h1 .small,\nh2 .small,\n.h2 .small,\nh3 .small,\n.h3 .small {\n  font-size: 65%;\n}\n  h4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n  h4 small,\n.h4 small,\nh5 small,\n.h5 small,\nh6 small,\n.h6 small,\nh4 .small,\n.h4 .small,\nh5 .small,\n.h5 .small,\nh6 .small,\n.h6 .small {\n  font-size: 75%;\n}\n  h1,\n.h1 {\n  font-size: 36px;\n}\n  h2,\n.h2 {\n  font-size: 30px;\n}\n  h3,\n.h3 {\n  font-size: 24px;\n}\n  h4,\n.h4 {\n  font-size: 18px;\n}\n  h5,\n.h5 {\n  font-size: 14px;\n}\n  h6,\n.h6 {\n  font-size: 12px;\n}\n  p {\n  margin: 0 0 10px;\n}\n  .lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n  @media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\n  small,\n.small {\n  font-size: 85%;\n}\n  mark,\n.mark {\n  padding: .2em;\n  background-color: #fcf8e3;\n}\n  .text-left {\n  text-align: left;\n}\n  .text-right {\n  text-align: right;\n}\n  .text-center {\n  text-align: center;\n}\n  .text-justify {\n  text-align: justify;\n}\n  .text-nowrap {\n  white-space: nowrap;\n}\n  .text-lowercase {\n  text-transform: lowercase;\n}\n  .text-uppercase {\n  text-transform: uppercase;\n}\n  .text-capitalize {\n  text-transform: capitalize;\n}\n  .text-muted {\n  color: #777;\n}\n  .text-primary {\n  color: #337ab7;\n}\n  a.text-primary:hover,\na.text-primary:focus {\n  color: #286090;\n}\n  .text-success {\n  color: #3c763d;\n}\n  a.text-success:hover,\na.text-success:focus {\n  color: #2b542c;\n}\n  .text-info {\n  color: #31708f;\n}\n  a.text-info:hover,\na.text-info:focus {\n  color: #245269;\n}\n  .text-warning {\n  color: #8a6d3b;\n}\n  a.text-warning:hover,\na.text-warning:focus {\n  color: #66512c;\n}\n  .text-danger {\n  color: #a94442;\n}\n  a.text-danger:hover,\na.text-danger:focus {\n  color: #843534;\n}\n  .bg-primary {\n  color: #fff;\n  background-color: #337ab7;\n}\n  a.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090;\n}\n  .bg-success {\n  background-color: #dff0d8;\n}\n  a.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3;\n}\n  .bg-info {\n  background-color: #d9edf7;\n}\n  a.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee;\n}\n  .bg-warning {\n  background-color: #fcf8e3;\n}\n  a.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5;\n}\n  .bg-danger {\n  background-color: #f2dede;\n}\n  a.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9;\n}\n  .page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eee;\n}\n  ul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n  ul ul,\nol ul,\nul ol,\nol ol {\n  margin-bottom: 0;\n}\n  .list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n  .list-inline {\n  padding-left: 0;\n  margin-left: -5px;\n  list-style: none;\n}\n  .list-inline > li {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n}\n  dl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n  dt,\ndd {\n  line-height: 1.42857143;\n}\n  dt {\n  font-weight: bold;\n}\n  dd {\n  margin-left: 0;\n}\n  @media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    overflow: hidden;\n    clear: left;\n    text-align: right;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\n  abbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777;\n}\n  .initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n  blockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eee;\n}\n  blockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\n  blockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857143;\n  color: #777;\n}\n  blockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014 \\00A0';\n}\n  .blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  text-align: right;\n  border-right: 5px solid #eee;\n  border-left: 0;\n}\n  .blockquote-reverse footer:before,\nblockquote.pull-right footer:before,\n.blockquote-reverse small:before,\nblockquote.pull-right small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n  .blockquote-reverse footer:after,\nblockquote.pull-right footer:after,\n.blockquote-reverse small:after,\nblockquote.pull-right small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right .small:after {\n  content: '\\00A0 \\2014';\n}\n  address {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857143;\n}\n  code,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\n  code {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n}\n  kbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n}\n  kbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  box-shadow: none;\n}\n  pre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n  pre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n  .pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n  .container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n  @media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n  @media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n  @media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n  .container-fluid {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n  .row {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n  .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n  .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n  .col-xs-12 {\n  width: 100%;\n}\n  .col-xs-11 {\n  width: 91.66666667%;\n}\n  .col-xs-10 {\n  width: 83.33333333%;\n}\n  .col-xs-9 {\n  width: 75%;\n}\n  .col-xs-8 {\n  width: 66.66666667%;\n}\n  .col-xs-7 {\n  width: 58.33333333%;\n}\n  .col-xs-6 {\n  width: 50%;\n}\n  .col-xs-5 {\n  width: 41.66666667%;\n}\n  .col-xs-4 {\n  width: 33.33333333%;\n}\n  .col-xs-3 {\n  width: 25%;\n}\n  .col-xs-2 {\n  width: 16.66666667%;\n}\n  .col-xs-1 {\n  width: 8.33333333%;\n}\n  .col-xs-pull-12 {\n  right: 100%;\n}\n  .col-xs-pull-11 {\n  right: 91.66666667%;\n}\n  .col-xs-pull-10 {\n  right: 83.33333333%;\n}\n  .col-xs-pull-9 {\n  right: 75%;\n}\n  .col-xs-pull-8 {\n  right: 66.66666667%;\n}\n  .col-xs-pull-7 {\n  right: 58.33333333%;\n}\n  .col-xs-pull-6 {\n  right: 50%;\n}\n  .col-xs-pull-5 {\n  right: 41.66666667%;\n}\n  .col-xs-pull-4 {\n  right: 33.33333333%;\n}\n  .col-xs-pull-3 {\n  right: 25%;\n}\n  .col-xs-pull-2 {\n  right: 16.66666667%;\n}\n  .col-xs-pull-1 {\n  right: 8.33333333%;\n}\n  .col-xs-pull-0 {\n  right: auto;\n}\n  .col-xs-push-12 {\n  left: 100%;\n}\n  .col-xs-push-11 {\n  left: 91.66666667%;\n}\n  .col-xs-push-10 {\n  left: 83.33333333%;\n}\n  .col-xs-push-9 {\n  left: 75%;\n}\n  .col-xs-push-8 {\n  left: 66.66666667%;\n}\n  .col-xs-push-7 {\n  left: 58.33333333%;\n}\n  .col-xs-push-6 {\n  left: 50%;\n}\n  .col-xs-push-5 {\n  left: 41.66666667%;\n}\n  .col-xs-push-4 {\n  left: 33.33333333%;\n}\n  .col-xs-push-3 {\n  left: 25%;\n}\n  .col-xs-push-2 {\n  left: 16.66666667%;\n}\n  .col-xs-push-1 {\n  left: 8.33333333%;\n}\n  .col-xs-push-0 {\n  left: auto;\n}\n  .col-xs-offset-12 {\n  margin-left: 100%;\n}\n  .col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n  .col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n  .col-xs-offset-9 {\n  margin-left: 75%;\n}\n  .col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n  .col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n  .col-xs-offset-6 {\n  margin-left: 50%;\n}\n  .col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n  .col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n  .col-xs-offset-3 {\n  margin-left: 25%;\n}\n  .col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n  .col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n  .col-xs-offset-0 {\n  margin-left: 0;\n}\n  @media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left;\n  }\n  .col-sm-12 {\n    width: 100%;\n  }\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n  .col-sm-9 {\n    width: 75%;\n  }\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n  .col-sm-6 {\n    width: 50%;\n  }\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n  .col-sm-3 {\n    width: 25%;\n  }\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n  .col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n  .col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n  .col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n  .col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-sm-pull-0 {\n    right: auto;\n  }\n  .col-sm-push-12 {\n    left: 100%;\n  }\n  .col-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .col-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .col-sm-push-9 {\n    left: 75%;\n  }\n  .col-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .col-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .col-sm-push-6 {\n    left: 50%;\n  }\n  .col-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .col-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .col-sm-push-3 {\n    left: 25%;\n  }\n  .col-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .col-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .col-sm-push-0 {\n    left: auto;\n  }\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-sm-offset-0 {\n    margin-left: 0;\n  }\n}\n  @media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left;\n  }\n  .col-md-12 {\n    width: 100%;\n  }\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n  .col-md-9 {\n    width: 75%;\n  }\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n  .col-md-6 {\n    width: 50%;\n  }\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n  .col-md-3 {\n    width: 25%;\n  }\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n  .col-md-pull-12 {\n    right: 100%;\n  }\n  .col-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-md-pull-9 {\n    right: 75%;\n  }\n  .col-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-md-pull-6 {\n    right: 50%;\n  }\n  .col-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-md-pull-3 {\n    right: 25%;\n  }\n  .col-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-md-pull-0 {\n    right: auto;\n  }\n  .col-md-push-12 {\n    left: 100%;\n  }\n  .col-md-push-11 {\n    left: 91.66666667%;\n  }\n  .col-md-push-10 {\n    left: 83.33333333%;\n  }\n  .col-md-push-9 {\n    left: 75%;\n  }\n  .col-md-push-8 {\n    left: 66.66666667%;\n  }\n  .col-md-push-7 {\n    left: 58.33333333%;\n  }\n  .col-md-push-6 {\n    left: 50%;\n  }\n  .col-md-push-5 {\n    left: 41.66666667%;\n  }\n  .col-md-push-4 {\n    left: 33.33333333%;\n  }\n  .col-md-push-3 {\n    left: 25%;\n  }\n  .col-md-push-2 {\n    left: 16.66666667%;\n  }\n  .col-md-push-1 {\n    left: 8.33333333%;\n  }\n  .col-md-push-0 {\n    left: auto;\n  }\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-md-offset-0 {\n    margin-left: 0;\n  }\n}\n  @media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left;\n  }\n  .col-lg-12 {\n    width: 100%;\n  }\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n  .col-lg-9 {\n    width: 75%;\n  }\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n  .col-lg-6 {\n    width: 50%;\n  }\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n  .col-lg-3 {\n    width: 25%;\n  }\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n  .col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n  .col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n  .col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n  .col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-lg-pull-0 {\n    right: auto;\n  }\n  .col-lg-push-12 {\n    left: 100%;\n  }\n  .col-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .col-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .col-lg-push-9 {\n    left: 75%;\n  }\n  .col-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .col-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .col-lg-push-6 {\n    left: 50%;\n  }\n  .col-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .col-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .col-lg-push-3 {\n    left: 25%;\n  }\n  .col-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .col-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .col-lg-push-0 {\n    left: auto;\n  }\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-lg-offset-0 {\n    margin-left: 0;\n  }\n}\n  table {\n  background-color: transparent;\n}\n  caption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777;\n  text-align: left;\n}\n  th {\n  text-align: left;\n}\n  .table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n  .table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n  .table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd;\n}\n  .table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n  .table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n  .table .table {\n  background-color: #fff;\n}\n  .table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n  .table-bordered {\n  border: 1px solid #ddd;\n}\n  .table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n  .table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n  .table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n  .table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\n  table col[class*=\"col-\"] {\n  position: static;\n  display: table-column;\n  float: none;\n}\n  table td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  display: table-cell;\n  float: none;\n}\n  .table > thead > tr > td.active,\n.table > tbody > tr > td.active,\n.table > tfoot > tr > td.active,\n.table > thead > tr > th.active,\n.table > tbody > tr > th.active,\n.table > tfoot > tr > th.active,\n.table > thead > tr.active > td,\n.table > tbody > tr.active > td,\n.table > tfoot > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr.active > th,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n  .table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n  .table > thead > tr > td.success,\n.table > tbody > tr > td.success,\n.table > tfoot > tr > td.success,\n.table > thead > tr > th.success,\n.table > tbody > tr > th.success,\n.table > tfoot > tr > th.success,\n.table > thead > tr.success > td,\n.table > tbody > tr.success > td,\n.table > tfoot > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr.success > th,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n  .table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n  .table > thead > tr > td.info,\n.table > tbody > tr > td.info,\n.table > tfoot > tr > td.info,\n.table > thead > tr > th.info,\n.table > tbody > tr > th.info,\n.table > tfoot > tr > th.info,\n.table > thead > tr.info > td,\n.table > tbody > tr.info > td,\n.table > tfoot > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr.info > th,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n  .table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n  .table > thead > tr > td.warning,\n.table > tbody > tr > td.warning,\n.table > tfoot > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > tbody > tr > th.warning,\n.table > tfoot > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > tbody > tr.warning > td,\n.table > tfoot > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n  .table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n  .table > thead > tr > td.danger,\n.table > tbody > tr > td.danger,\n.table > tfoot > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > tbody > tr > th.danger,\n.table > tfoot > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > tbody > tr.danger > td,\n.table > tfoot > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n  .table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n  .table-responsive {\n  min-height: .01%;\n  overflow-x: auto;\n}\n  @media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\n  fieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n  legend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\n  label {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n  input[type=\"search\"] {\n  box-sizing: border-box;\n}\n  input[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\n  input[type=\"file\"] {\n  display: block;\n}\n  input[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\n  select[multiple],\nselect[size] {\n  height: auto;\n}\n  input[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n  output {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n}\n  .form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n  .form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n}\n  .form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n  .form-control:-ms-input-placeholder {\n  color: #999;\n}\n  .form-control::-webkit-input-placeholder {\n  color: #999;\n}\n  .form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n  .form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eee;\n  opacity: 1;\n}\n  .form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\n  textarea.form-control {\n  height: auto;\n}\n  input[type=\"search\"] {\n  -webkit-appearance: none;\n}\n  @media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px;\n  }\n  input[type=\"date\"].input-sm,\n  input[type=\"time\"].input-sm,\n  input[type=\"datetime-local\"].input-sm,\n  input[type=\"month\"].input-sm,\n  .input-group-sm input[type=\"date\"],\n  .input-group-sm input[type=\"time\"],\n  .input-group-sm input[type=\"datetime-local\"],\n  .input-group-sm input[type=\"month\"] {\n    line-height: 30px;\n  }\n  input[type=\"date\"].input-lg,\n  input[type=\"time\"].input-lg,\n  input[type=\"datetime-local\"].input-lg,\n  input[type=\"month\"].input-lg,\n  .input-group-lg input[type=\"date\"],\n  .input-group-lg input[type=\"time\"],\n  .input-group-lg input[type=\"datetime-local\"],\n  .input-group-lg input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n  .form-group {\n  margin-bottom: 15px;\n}\n  .radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n  .radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n  .radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-top: 4px \\9;\n  margin-left: -20px;\n}\n  .radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n  .radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  vertical-align: middle;\n  cursor: pointer;\n}\n  .radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\n  input[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"].disabled,\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\nfieldset[disabled] input[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n  .radio-inline.disabled,\n.checkbox-inline.disabled,\nfieldset[disabled] .radio-inline,\nfieldset[disabled] .checkbox-inline {\n  cursor: not-allowed;\n}\n  .radio.disabled label,\n.checkbox.disabled label,\nfieldset[disabled] .radio label,\nfieldset[disabled] .checkbox label {\n  cursor: not-allowed;\n}\n  .form-control-static {\n  min-height: 34px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n}\n  .form-control-static.input-lg,\n.form-control-static.input-sm {\n  padding-right: 0;\n  padding-left: 0;\n}\n  .input-sm {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n  select.input-sm {\n  height: 30px;\n  line-height: 30px;\n}\n  textarea.input-sm,\nselect[multiple].input-sm {\n  height: auto;\n}\n  .form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n  .form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px;\n}\n  .form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n  .form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n  .input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n  select.input-lg {\n  height: 46px;\n  line-height: 46px;\n}\n  textarea.input-lg,\nselect[multiple].input-lg {\n  height: auto;\n}\n  .form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n  .form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px;\n}\n  .form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n  .form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n  .has-feedback {\n  position: relative;\n}\n  .has-feedback .form-control {\n  padding-right: 42.5px;\n}\n  .form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n  .input-lg + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n  .input-sm + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n  .has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n  .has-success .form-control {\n  border-color: #3c763d;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n  .has-success .form-control:focus {\n  border-color: #2b542c;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n}\n  .has-success .input-group-addon {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #3c763d;\n}\n  .has-success .form-control-feedback {\n  color: #3c763d;\n}\n  .has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n  .has-warning .form-control {\n  border-color: #8a6d3b;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n  .has-warning .form-control:focus {\n  border-color: #66512c;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n}\n  .has-warning .input-group-addon {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #8a6d3b;\n}\n  .has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n  .has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n  .has-error .form-control {\n  border-color: #a94442;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n  .has-error .form-control:focus {\n  border-color: #843534;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n}\n  .has-error .input-group-addon {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #a94442;\n}\n  .has-error .form-control-feedback {\n  color: #a94442;\n}\n  .has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n  .has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n  .help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n  @media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n  .form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 7px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n  .form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n  .form-horizontal .form-group {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n  @media (min-width: 768px) {\n  .form-horizontal .control-label {\n    padding-top: 7px;\n    margin-bottom: 0;\n    text-align: right;\n  }\n}\n  .form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n  @media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px;\n  }\n}\n  @media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px;\n  }\n}\n  .btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n  .btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n  .btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n  .btn:active,\n.btn.active {\n  background-image: none;\n  outline: 0;\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n  .btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  filter: alpha(opacity=65);\n  box-shadow: none;\n  opacity: .65;\n}\n  a.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n  .btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n  .btn-default:focus,\n.btn-default.focus {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c;\n}\n  .btn-default:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n  .btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n  .btn-default:active:hover,\n.btn-default.active:hover,\n.open > .dropdown-toggle.btn-default:hover,\n.btn-default:active:focus,\n.btn-default.active:focus,\n.open > .dropdown-toggle.btn-default:focus,\n.btn-default:active.focus,\n.btn-default.active.focus,\n.open > .dropdown-toggle.btn-default.focus {\n  color: #333;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n  .btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  background-image: none;\n}\n  .btn-default.disabled:hover,\n.btn-default[disabled]:hover,\nfieldset[disabled] .btn-default:hover,\n.btn-default.disabled:focus,\n.btn-default[disabled]:focus,\nfieldset[disabled] .btn-default:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default.focus {\n  background-color: #fff;\n  border-color: #ccc;\n}\n  .btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n  .btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n  .btn-primary:focus,\n.btn-primary.focus {\n  color: #fff;\n  background-color: #286090;\n  border-color: #122b40;\n}\n  .btn-primary:hover {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n  .btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n  .btn-primary:active:hover,\n.btn-primary.active:hover,\n.open > .dropdown-toggle.btn-primary:hover,\n.btn-primary:active:focus,\n.btn-primary.active:focus,\n.open > .dropdown-toggle.btn-primary:focus,\n.btn-primary:active.focus,\n.btn-primary.active.focus,\n.open > .dropdown-toggle.btn-primary.focus {\n  color: #fff;\n  background-color: #204d74;\n  border-color: #122b40;\n}\n  .btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  background-image: none;\n}\n  .btn-primary.disabled:hover,\n.btn-primary[disabled]:hover,\nfieldset[disabled] .btn-primary:hover,\n.btn-primary.disabled:focus,\n.btn-primary[disabled]:focus,\nfieldset[disabled] .btn-primary:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary.focus {\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n  .btn-primary .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n  .btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n  .btn-success:focus,\n.btn-success.focus {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #255625;\n}\n  .btn-success:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n  .btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n  .btn-success:active:hover,\n.btn-success.active:hover,\n.open > .dropdown-toggle.btn-success:hover,\n.btn-success:active:focus,\n.btn-success.active:focus,\n.open > .dropdown-toggle.btn-success:focus,\n.btn-success:active.focus,\n.btn-success.active.focus,\n.open > .dropdown-toggle.btn-success.focus {\n  color: #fff;\n  background-color: #398439;\n  border-color: #255625;\n}\n  .btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  background-image: none;\n}\n  .btn-success.disabled:hover,\n.btn-success[disabled]:hover,\nfieldset[disabled] .btn-success:hover,\n.btn-success.disabled:focus,\n.btn-success[disabled]:focus,\nfieldset[disabled] .btn-success:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success.focus {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n  .btn-success .badge {\n  color: #5cb85c;\n  background-color: #fff;\n}\n  .btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n  .btn-info:focus,\n.btn-info.focus {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #1b6d85;\n}\n  .btn-info:hover {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n  .btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n  .btn-info:active:hover,\n.btn-info.active:hover,\n.open > .dropdown-toggle.btn-info:hover,\n.btn-info:active:focus,\n.btn-info.active:focus,\n.open > .dropdown-toggle.btn-info:focus,\n.btn-info:active.focus,\n.btn-info.active.focus,\n.open > .dropdown-toggle.btn-info.focus {\n  color: #fff;\n  background-color: #269abc;\n  border-color: #1b6d85;\n}\n  .btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  background-image: none;\n}\n  .btn-info.disabled:hover,\n.btn-info[disabled]:hover,\nfieldset[disabled] .btn-info:hover,\n.btn-info.disabled:focus,\n.btn-info[disabled]:focus,\nfieldset[disabled] .btn-info:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info.focus {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n  .btn-info .badge {\n  color: #5bc0de;\n  background-color: #fff;\n}\n  .btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n  .btn-warning:focus,\n.btn-warning.focus {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #985f0d;\n}\n  .btn-warning:hover {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n  .btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n  .btn-warning:active:hover,\n.btn-warning.active:hover,\n.open > .dropdown-toggle.btn-warning:hover,\n.btn-warning:active:focus,\n.btn-warning.active:focus,\n.open > .dropdown-toggle.btn-warning:focus,\n.btn-warning:active.focus,\n.btn-warning.active.focus,\n.open > .dropdown-toggle.btn-warning.focus {\n  color: #fff;\n  background-color: #d58512;\n  border-color: #985f0d;\n}\n  .btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  background-image: none;\n}\n  .btn-warning.disabled:hover,\n.btn-warning[disabled]:hover,\nfieldset[disabled] .btn-warning:hover,\n.btn-warning.disabled:focus,\n.btn-warning[disabled]:focus,\nfieldset[disabled] .btn-warning:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning.focus {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n  .btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #fff;\n}\n  .btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n  .btn-danger:focus,\n.btn-danger.focus {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #761c19;\n}\n  .btn-danger:hover {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n  .btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n  .btn-danger:active:hover,\n.btn-danger.active:hover,\n.open > .dropdown-toggle.btn-danger:hover,\n.btn-danger:active:focus,\n.btn-danger.active:focus,\n.open > .dropdown-toggle.btn-danger:focus,\n.btn-danger:active.focus,\n.btn-danger.active.focus,\n.open > .dropdown-toggle.btn-danger.focus {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #761c19;\n}\n  .btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  background-image: none;\n}\n  .btn-danger.disabled:hover,\n.btn-danger[disabled]:hover,\nfieldset[disabled] .btn-danger:hover,\n.btn-danger.disabled:focus,\n.btn-danger[disabled]:focus,\nfieldset[disabled] .btn-danger:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger.focus {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n  .btn-danger .badge {\n  color: #d9534f;\n  background-color: #fff;\n}\n  .btn-link {\n  font-weight: normal;\n  color: #337ab7;\n  border-radius: 0;\n}\n  .btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  box-shadow: none;\n}\n  .btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n  .btn-link:hover,\n.btn-link:focus {\n  color: #23527c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n  .btn-link[disabled]:hover,\nfieldset[disabled] .btn-link:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:focus {\n  color: #777;\n  text-decoration: none;\n}\n  .btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n  .btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n  .btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n  .btn-block {\n  display: block;\n  width: 100%;\n}\n  .btn-block + .btn-block {\n  margin-top: 5px;\n}\n  input[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n  .fade {\n  opacity: 0;\n  transition: opacity .15s linear;\n}\n  .fade.in {\n  opacity: 1;\n}\n  .collapse {\n  display: none;\n}\n  .collapse.in {\n  display: block;\n}\n  tr.collapse.in {\n  display: table-row;\n}\n  tbody.collapse.in {\n  display: table-row-group;\n}\n  .collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition-timing-function: ease;\n  transition-duration: .35s;\n  transition-property: height, visibility;\n}\n  .caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n  .dropup,\n.dropdown {\n  position: relative;\n}\n  .dropdown-toggle:focus {\n  outline: 0;\n}\n  .dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: 4px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n}\n  .dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n  .dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n  .dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #333;\n  white-space: nowrap;\n}\n  .dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  color: #262626;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n  .dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #337ab7;\n  outline: 0;\n}\n  .dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777;\n}\n  .dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n}\n  .open > .dropdown-menu {\n  display: block;\n}\n  .open > a {\n  outline: 0;\n}\n  .dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n  .dropdown-menu-left {\n  right: auto;\n  left: 0;\n}\n  .dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: #777;\n  white-space: nowrap;\n}\n  .dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 990;\n}\n  .pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n  .dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  content: \"\";\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n}\n  .dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n  @media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n  .navbar-right .dropdown-menu-left {\n    right: auto;\n    left: 0;\n  }\n}\n  .btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n  .btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n  .btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus,\n.btn-group > .btn:active,\n.btn-group-vertical > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n  .btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n  .btn-toolbar {\n  margin-left: -5px;\n}\n  .btn-toolbar .btn,\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n  .btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n  .btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n  .btn-group > .btn:first-child {\n  margin-left: 0;\n}\n  .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n  .btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n  .btn-group > .btn-group {\n  float: left;\n}\n  .btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n  .btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n  .btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n  .btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n  .btn-group > .btn + .dropdown-toggle {\n  padding-right: 8px;\n  padding-left: 8px;\n}\n  .btn-group > .btn-lg + .dropdown-toggle {\n  padding-right: 12px;\n  padding-left: 12px;\n}\n  .btn-group.open .dropdown-toggle {\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n  .btn-group.open .dropdown-toggle.btn-link {\n  box-shadow: none;\n}\n  .btn .caret {\n  margin-left: 0;\n}\n  .btn-lg .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n  .dropup .btn-lg .caret {\n  border-width: 0 5px 5px;\n}\n  .btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n  .btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n  .btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n  .btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n  .btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n  .btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n  .btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n  .btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n  .btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n  .btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n  .btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  display: table-cell;\n  float: none;\n  width: 1%;\n}\n  .btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n  .btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n  [data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n  .input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n  .input-group[class*=\"col-\"] {\n  float: none;\n  padding-right: 0;\n  padding-left: 0;\n}\n  .input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n  .input-group .form-control:focus {\n  z-index: 3;\n}\n  .input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n  select.input-group-lg > .form-control,\nselect.input-group-lg > .input-group-addon,\nselect.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  line-height: 46px;\n}\n  textarea.input-group-lg > .form-control,\ntextarea.input-group-lg > .input-group-addon,\ntextarea.input-group-lg > .input-group-btn > .btn,\nselect[multiple].input-group-lg > .form-control,\nselect[multiple].input-group-lg > .input-group-addon,\nselect[multiple].input-group-lg > .input-group-btn > .btn {\n  height: auto;\n}\n  .input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n  select.input-group-sm > .form-control,\nselect.input-group-sm > .input-group-addon,\nselect.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  line-height: 30px;\n}\n  textarea.input-group-sm > .form-control,\ntextarea.input-group-sm > .input-group-addon,\ntextarea.input-group-sm > .input-group-btn > .btn,\nselect[multiple].input-group-sm > .form-control,\nselect[multiple].input-group-sm > .input-group-addon,\nselect[multiple].input-group-sm > .input-group-btn > .btn {\n  height: auto;\n}\n  .input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n  .input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n  .input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n  .input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555;\n  text-align: center;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n  .input-group-addon.input-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n  .input-group-addon.input-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 6px;\n}\n  .input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n  .input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n  .input-group-addon:first-child {\n  border-right: 0;\n}\n  .input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n  .input-group-addon:last-child {\n  border-left: 0;\n}\n  .input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n  .input-group-btn > .btn {\n  position: relative;\n}\n  .input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n  .input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n  .input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n  .input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  z-index: 2;\n  margin-left: -1px;\n}\n  .nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n  .nav > li {\n  position: relative;\n  display: block;\n}\n  .nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n  .nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n  .nav > li.disabled > a {\n  color: #777;\n}\n  .nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777;\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n  .nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eee;\n  border-color: #337ab7;\n}\n  .nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n  .nav > li > a > img {\n  max-width: none;\n}\n  .nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n  .nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n  .nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n  .nav-tabs > li > a:hover {\n  border-color: #eee #eee #ddd;\n}\n  .nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555;\n  cursor: default;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n}\n  .nav-tabs.nav-justified {\n  width: 100%;\n  border-bottom: 0;\n}\n  .nav-tabs.nav-justified > li {\n  float: none;\n}\n  .nav-tabs.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n  .nav-tabs.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n  @media (min-width: 768px) {\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n  .nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n  .nav-tabs.nav-justified > .active > a,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n  @media (min-width: 768px) {\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n  .nav-pills > li {\n  float: left;\n}\n  .nav-pills > li > a {\n  border-radius: 4px;\n}\n  .nav-pills > li + li {\n  margin-left: 2px;\n}\n  .nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #337ab7;\n}\n  .nav-stacked > li {\n  float: none;\n}\n  .nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n  .nav-justified {\n  width: 100%;\n}\n  .nav-justified > li {\n  float: none;\n}\n  .nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n  .nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n  @media (min-width: 768px) {\n  .nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n  .nav-tabs-justified {\n  border-bottom: 0;\n}\n  .nav-tabs-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n  .nav-tabs-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n  @media (min-width: 768px) {\n  .nav-tabs-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n  .tab-content > .tab-pane {\n  display: none;\n}\n  .tab-content > .active {\n  display: block;\n}\n  .nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n  .navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n  @media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n  @media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n  .navbar-collapse {\n  padding-right: 15px;\n  padding-left: 15px;\n  overflow-x: visible;\n  -webkit-overflow-scrolling: touch;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n}\n  .navbar-collapse.in {\n  overflow-y: auto;\n}\n  @media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    box-shadow: none;\n  }\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n  .navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n  @media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n  .container > .navbar-header,\n.container-fluid > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n  @media (min-width: 768px) {\n  .container > .navbar-header,\n  .container-fluid > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n  .navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n  @media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n  .navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n  @media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n  .navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n  .navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n  .navbar-brand {\n  float: left;\n  height: 50px;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n}\n  .navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n  .navbar-brand > img {\n  display: block;\n}\n  @media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n  .navbar-toggle {\n  position: relative;\n  float: right;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-right: 15px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n  .navbar-toggle:focus {\n  outline: 0;\n}\n  .navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n  .navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n  @media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n  .navbar-nav {\n  margin: 7.5px -15px;\n}\n  .navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n  @media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n  }\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n  @media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n  .navbar-nav > li {\n    float: left;\n  }\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n  .navbar-form {\n  padding: 10px 15px;\n  margin-top: 8px;\n  margin-right: -15px;\n  margin-bottom: 8px;\n  margin-left: -15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n}\n  @media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n  @media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n  @media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin-right: 0;\n    margin-left: 0;\n    border: 0;\n    box-shadow: none;\n  }\n}\n  .navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n  .navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n  .navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n  .navbar-btn.btn-sm {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n  .navbar-btn.btn-xs {\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n  .navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n  @media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-right: 15px;\n    margin-left: 15px;\n  }\n}\n  @media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n  .navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n  .navbar-default .navbar-brand {\n  color: #777;\n}\n  .navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent;\n}\n  .navbar-default .navbar-text {\n  color: #777;\n}\n  .navbar-default .navbar-nav > li > a {\n  color: #777;\n}\n  .navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #333;\n  background-color: transparent;\n}\n  .navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n  .navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n  .navbar-default .navbar-toggle {\n  border-color: #ddd;\n}\n  .navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #ddd;\n}\n  .navbar-default .navbar-toggle .icon-bar {\n  background-color: #888;\n}\n  .navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #e7e7e7;\n}\n  .navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n  @media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333;\n    background-color: transparent;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n  .navbar-default .navbar-link {\n  color: #777;\n}\n  .navbar-default .navbar-link:hover {\n  color: #333;\n}\n  .navbar-default .btn-link {\n  color: #777;\n}\n  .navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #333;\n}\n  .navbar-default .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-default .btn-link:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #ccc;\n}\n  .navbar-inverse {\n  background-color: #222;\n  border-color: #080808;\n}\n  .navbar-inverse .navbar-brand {\n  color: #9d9d9d;\n}\n  .navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #fff;\n  background-color: transparent;\n}\n  .navbar-inverse .navbar-text {\n  color: #9d9d9d;\n}\n  .navbar-inverse .navbar-nav > li > a {\n  color: #9d9d9d;\n}\n  .navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: transparent;\n}\n  .navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n  .navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #444;\n  background-color: transparent;\n}\n  .navbar-inverse .navbar-toggle {\n  border-color: #333;\n}\n  .navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #333;\n}\n  .navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n  .navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #101010;\n}\n  .navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n  @media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #9d9d9d;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: transparent;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #444;\n    background-color: transparent;\n  }\n}\n  .navbar-inverse .navbar-link {\n  color: #9d9d9d;\n}\n  .navbar-inverse .navbar-link:hover {\n  color: #fff;\n}\n  .navbar-inverse .btn-link {\n  color: #9d9d9d;\n}\n  .navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #fff;\n}\n  .navbar-inverse .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #444;\n}\n  .breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n  .breadcrumb > li {\n  display: inline-block;\n}\n  .breadcrumb > li + li:before {\n  padding: 0 5px;\n  color: #ccc;\n  content: \"/\\00a0\";\n}\n  .breadcrumb > .active {\n  color: #777;\n}\n  .pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n  .pagination > li {\n  display: inline;\n}\n  .pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  margin-left: -1px;\n  line-height: 1.42857143;\n  color: #337ab7;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n  .pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n  .pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n  .pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n  z-index: 2;\n  color: #23527c;\n  background-color: #eee;\n  border-color: #ddd;\n}\n  .pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  z-index: 3;\n  color: #fff;\n  cursor: default;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n  .pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n  border-color: #ddd;\n}\n  .pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n  .pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n  .pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n  .pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n  .pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n  .pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n  .pager {\n  padding-left: 0;\n  margin: 20px 0;\n  text-align: center;\n  list-style: none;\n}\n  .pager li {\n  display: inline;\n}\n  .pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n  .pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n  .pager .next > a,\n.pager .next > span {\n  float: right;\n}\n  .pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n  .pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n}\n  .label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\n  a.label:hover,\na.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n  .label:empty {\n  display: none;\n}\n  .btn .label {\n  position: relative;\n  top: -1px;\n}\n  .label-default {\n  background-color: #777;\n}\n  .label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n  .label-primary {\n  background-color: #337ab7;\n}\n  .label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #286090;\n}\n  .label-success {\n  background-color: #5cb85c;\n}\n  .label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #449d44;\n}\n  .label-info {\n  background-color: #5bc0de;\n}\n  .label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #31b0d5;\n}\n  .label-warning {\n  background-color: #f0ad4e;\n}\n  .label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #ec971f;\n}\n  .label-danger {\n  background-color: #d9534f;\n}\n  .label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #c9302c;\n}\n  .badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  background-color: #777;\n  border-radius: 10px;\n}\n  .badge:empty {\n  display: none;\n}\n  .btn .badge {\n  position: relative;\n  top: -1px;\n}\n  .btn-xs .badge,\n.btn-group-xs > .btn .badge {\n  top: 0;\n  padding: 1px 5px;\n}\n  a.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n  .list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n  .list-group-item > .badge {\n  float: right;\n}\n  .list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n  .nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n  .jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eee;\n}\n  .jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n  .jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n  .jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n  .container .jumbotron,\n.container-fluid .jumbotron {\n  padding-right: 15px;\n  padding-left: 15px;\n  border-radius: 6px;\n}\n  .jumbotron .container {\n  max-width: 100%;\n}\n  @media screen and (min-width: 768px) {\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    padding-right: 60px;\n    padding-left: 60px;\n  }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n  .thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  transition: border .2s ease-in-out;\n}\n  .thumbnail > img,\n.thumbnail a > img {\n  margin-right: auto;\n  margin-left: auto;\n}\n  a.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7;\n}\n  .thumbnail .caption {\n  padding: 9px;\n  color: #333;\n}\n  .alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n  .alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n  .alert .alert-link {\n  font-weight: bold;\n}\n  .alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n  .alert > p + p {\n  margin-top: 5px;\n}\n  .alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n  .alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n  .alert-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n  .alert-success hr {\n  border-top-color: #c9e2b3;\n}\n  .alert-success .alert-link {\n  color: #2b542c;\n}\n  .alert-info {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n  .alert-info hr {\n  border-top-color: #a6e1ec;\n}\n  .alert-info .alert-link {\n  color: #245269;\n}\n  .alert-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n  .alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n  .alert-warning .alert-link {\n  color: #66512c;\n}\n  .alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n  .alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n  .alert-danger .alert-link {\n  color: #843534;\n}\n  @-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n  @keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n  .progress {\n  height: 20px;\n  margin-bottom: 20px;\n  overflow: hidden;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n}\n  .progress-bar {\n  float: left;\n  width: 0;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n  transition: width .6s ease;\n}\n  .progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px;\n}\n  .progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n          animation: progress-bar-stripes 2s linear infinite;\n}\n  .progress-bar-success {\n  background-color: #5cb85c;\n}\n  .progress-striped .progress-bar-success {\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n  .progress-bar-info {\n  background-color: #5bc0de;\n}\n  .progress-striped .progress-bar-info {\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n  .progress-bar-warning {\n  background-color: #f0ad4e;\n}\n  .progress-striped .progress-bar-warning {\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n  .progress-bar-danger {\n  background-color: #d9534f;\n}\n  .progress-striped .progress-bar-danger {\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n  .media {\n  margin-top: 15px;\n}\n  .media:first-child {\n  margin-top: 0;\n}\n  .media,\n.media-body {\n  overflow: hidden;\n  zoom: 1;\n}\n  .media-body {\n  width: 10000px;\n}\n  .media-object {\n  display: block;\n}\n  .media-object.img-thumbnail {\n  max-width: none;\n}\n  .media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n  .media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n  .media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n  .media-middle {\n  vertical-align: middle;\n}\n  .media-bottom {\n  vertical-align: bottom;\n}\n  .media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n  .media-list {\n  padding-left: 0;\n  list-style: none;\n}\n  .list-group {\n  padding-left: 0;\n  margin-bottom: 20px;\n}\n  .list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n  .list-group-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n  .list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n  a.list-group-item,\nbutton.list-group-item {\n  color: #555;\n}\n  a.list-group-item .list-group-item-heading,\nbutton.list-group-item .list-group-item-heading {\n  color: #333;\n}\n  a.list-group-item:hover,\nbutton.list-group-item:hover,\na.list-group-item:focus,\nbutton.list-group-item:focus {\n  color: #555;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n  button.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n  .list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #eee;\n}\n  .list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n  .list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777;\n}\n  .list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n  .list-group-item.active .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n  .list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #c7ddef;\n}\n  .list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\n  a.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d;\n}\n  a.list-group-item-success .list-group-item-heading,\nbutton.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\n  a.list-group-item-success:hover,\nbutton.list-group-item-success:hover,\na.list-group-item-success:focus,\nbutton.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\n  a.list-group-item-success.active,\nbutton.list-group-item-success.active,\na.list-group-item-success.active:hover,\nbutton.list-group-item-success.active:hover,\na.list-group-item-success.active:focus,\nbutton.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n  .list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\n  a.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f;\n}\n  a.list-group-item-info .list-group-item-heading,\nbutton.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\n  a.list-group-item-info:hover,\nbutton.list-group-item-info:hover,\na.list-group-item-info:focus,\nbutton.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\n  a.list-group-item-info.active,\nbutton.list-group-item-info.active,\na.list-group-item-info.active:hover,\nbutton.list-group-item-info.active:hover,\na.list-group-item-info.active:focus,\nbutton.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n  .list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\n  a.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b;\n}\n  a.list-group-item-warning .list-group-item-heading,\nbutton.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\n  a.list-group-item-warning:hover,\nbutton.list-group-item-warning:hover,\na.list-group-item-warning:focus,\nbutton.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\n  a.list-group-item-warning.active,\nbutton.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\nbutton.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus,\nbutton.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n  .list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\n  a.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442;\n}\n  a.list-group-item-danger .list-group-item-heading,\nbutton.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\n  a.list-group-item-danger:hover,\nbutton.list-group-item-danger:hover,\na.list-group-item-danger:focus,\nbutton.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\n  a.list-group-item-danger.active,\nbutton.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\nbutton.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus,\nbutton.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n  .list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n  .list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n  .panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n}\n  .panel-body {\n  padding: 15px;\n}\n  .panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n  .panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n  .panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n  .panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n  color: inherit;\n}\n  .panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n  .panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n  .panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n  .panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n  .panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n  .panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n  .panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n  .list-group + .panel-footer {\n  border-top-width: 0;\n}\n  .panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n  .panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n  .panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n  .panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n  .panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n  .panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n  .panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n  .panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n  .panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n  .panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n  .panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd;\n}\n  .panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n  .panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n  .panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n  .panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n  .panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n  .panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n  .panel > .table-responsive {\n  margin-bottom: 0;\n  border: 0;\n}\n  .panel-group {\n  margin-bottom: 20px;\n}\n  .panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n  .panel-group .panel + .panel {\n  margin-top: 5px;\n}\n  .panel-group .panel-heading {\n  border-bottom: 0;\n}\n  .panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n  border-top: 1px solid #ddd;\n}\n  .panel-group .panel-footer {\n  border-top: 0;\n}\n  .panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #ddd;\n}\n  .panel-default {\n  border-color: #ddd;\n}\n  .panel-default > .panel-heading {\n  color: #333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n  .panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ddd;\n}\n  .panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333;\n}\n  .panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ddd;\n}\n  .panel-primary {\n  border-color: #337ab7;\n}\n  .panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n  .panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #337ab7;\n}\n  .panel-primary > .panel-heading .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n  .panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #337ab7;\n}\n  .panel-success {\n  border-color: #d6e9c6;\n}\n  .panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n  .panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n  .panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n  .panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n  .panel-info {\n  border-color: #bce8f1;\n}\n  .panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n  .panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n  .panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n  .panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n  .panel-warning {\n  border-color: #faebcc;\n}\n  .panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n  .panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n  .panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n  .panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n  .panel-danger {\n  border-color: #ebccd1;\n}\n  .panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n  .panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n  .panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n  .panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n  .embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n  .embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n  .embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n  .embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n  .well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n}\n  .well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, .15);\n}\n  .well-lg {\n  padding: 24px;\n  border-radius: 6px;\n}\n  .well-sm {\n  padding: 9px;\n  border-radius: 3px;\n}\n  .close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  filter: alpha(opacity=20);\n  opacity: .2;\n}\n  .close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n  button.close {\n  -webkit-appearance: none;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n  .modal-open {\n  overflow: hidden;\n}\n  .modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n  .modal.fade .modal-dialog {\n  transition:         -webkit-transform .3s ease-out;\n  transition:         transform .3s ease-out;\n  transition:         transform .3s ease-out, -webkit-transform .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n          transform: translate(0, -25%);\n}\n  .modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n  .modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n  .modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n  .modal-content {\n  position: relative;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  outline: 0;\n  box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n}\n  .modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n  .modal-backdrop.fade {\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n  .modal-backdrop.in {\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n  .modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n  .modal-header .close {\n  margin-top: -2px;\n}\n  .modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n  .modal-body {\n  position: relative;\n  padding: 15px;\n}\n  .modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n  .modal-footer .btn + .btn {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n  .modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n  .modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n  .modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n  @media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n  .modal-content {\n    box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n  }\n  .modal-sm {\n    width: 300px;\n  }\n}\n  @media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n  .tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  white-space: normal;\n  filter: alpha(opacity=0);\n  opacity: 0;\n\n  line-break: auto;\n}\n  .tooltip.in {\n  filter: alpha(opacity=90);\n  opacity: .9;\n}\n  .tooltip.top {\n  padding: 5px 0;\n  margin-top: -3px;\n}\n  .tooltip.right {\n  padding: 0 5px;\n  margin-left: 3px;\n}\n  .tooltip.bottom {\n  padding: 5px 0;\n  margin-top: 3px;\n}\n  .tooltip.left {\n  padding: 0 5px;\n  margin-left: -3px;\n}\n  .tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px;\n}\n  .tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n  .tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n  .tooltip.top-left .tooltip-arrow {\n  right: 5px;\n  bottom: 0;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n  .tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n  .tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n  .tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n  .tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n  .tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n  .tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n  .popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  white-space: normal;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n\n  line-break: auto;\n}\n  .popover.top {\n  margin-top: -10px;\n}\n  .popover.right {\n  margin-left: 10px;\n}\n  .popover.bottom {\n  margin-top: 10px;\n}\n  .popover.left {\n  margin-left: -10px;\n}\n  .popover-title {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0;\n}\n  .popover-content {\n  padding: 9px 14px;\n}\n  .popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n  .popover > .arrow {\n  border-width: 11px;\n}\n  .popover > .arrow:after {\n  content: \"\";\n  border-width: 10px;\n}\n  .popover.top > .arrow {\n  bottom: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-color: #999;\n  border-top-color: rgba(0, 0, 0, .25);\n  border-bottom-width: 0;\n}\n  .popover.top > .arrow:after {\n  bottom: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-color: #fff;\n  border-bottom-width: 0;\n}\n  .popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-right-color: #999;\n  border-right-color: rgba(0, 0, 0, .25);\n  border-left-width: 0;\n}\n  .popover.right > .arrow:after {\n  bottom: -10px;\n  left: 1px;\n  content: \" \";\n  border-right-color: #fff;\n  border-left-width: 0;\n}\n  .popover.bottom > .arrow {\n  top: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999;\n  border-bottom-color: rgba(0, 0, 0, .25);\n}\n  .popover.bottom > .arrow:after {\n  top: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n  .popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999;\n  border-left-color: rgba(0, 0, 0, .25);\n}\n  .popover.left > .arrow:after {\n  right: 1px;\n  bottom: -10px;\n  content: \" \";\n  border-right-width: 0;\n  border-left-color: #fff;\n}\n  .carousel {\n  position: relative;\n}\n  .carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n  .carousel-inner > .item {\n  position: relative;\n  display: none;\n  transition: .6s ease-in-out left;\n}\n  .carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  line-height: 1;\n}\n  @media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .item {\n    transition:         -webkit-transform .6s ease-in-out;\n    transition:         transform .6s ease-in-out;\n    transition:         transform .6s ease-in-out, -webkit-transform .6s ease-in-out;\n\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n            perspective: 1000px;\n  }\n  .carousel-inner > .item.next,\n  .carousel-inner > .item.active.right {\n    left: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n  .carousel-inner > .item.prev,\n  .carousel-inner > .item.active.left {\n    left: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n  .carousel-inner > .item.next.left,\n  .carousel-inner > .item.prev.right,\n  .carousel-inner > .item.active {\n    left: 0;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n  .carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n  .carousel-inner > .active {\n  left: 0;\n}\n  .carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n  .carousel-inner > .next {\n  left: 100%;\n}\n  .carousel-inner > .prev {\n  left: -100%;\n}\n  .carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n  .carousel-inner > .active.left {\n  left: -100%;\n}\n  .carousel-inner > .active.right {\n  left: 100%;\n}\n  .carousel-control {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 15%;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n  background-color: rgba(0, 0, 0, 0);\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n  .carousel-control.left {\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n  background-repeat: repeat-x;\n}\n  .carousel-control.right {\n  right: 0;\n  left: auto;\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n  background-repeat: repeat-x;\n}\n  .carousel-control:hover,\n.carousel-control:focus {\n  color: #fff;\n  text-decoration: none;\n  filter: alpha(opacity=90);\n  outline: 0;\n  opacity: .9;\n}\n  .carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  z-index: 5;\n  display: inline-block;\n  margin-top: -10px;\n}\n  .carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n  .carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n  .carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  font-family: serif;\n  line-height: 1;\n}\n  .carousel-control .icon-prev:before {\n  content: '\\2039';\n}\n  .carousel-control .icon-next:before {\n  content: '\\203a';\n}\n  .carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  padding-left: 0;\n  margin-left: -30%;\n  text-align: center;\n  list-style: none;\n}\n  .carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #fff;\n  border-radius: 10px;\n}\n  .carousel-indicators .active {\n  width: 12px;\n  height: 12px;\n  margin: 0;\n  background-color: #fff;\n}\n  .carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n}\n  .carousel-caption .btn {\n  text-shadow: none;\n}\n  @media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px;\n  }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px;\n  }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px;\n  }\n  .carousel-caption {\n    right: 20%;\n    left: 20%;\n    padding-bottom: 30px;\n  }\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n  .clearfix:before,\n.clearfix:after,\n.dl-horizontal dd:before,\n.dl-horizontal dd:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after,\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after,\n.btn-toolbar:before,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after,\n.nav:before,\n.nav:after,\n.navbar:before,\n.navbar:after,\n.navbar-header:before,\n.navbar-header:after,\n.navbar-collapse:before,\n.navbar-collapse:after,\n.pager:before,\n.pager:after,\n.panel-body:before,\n.panel-body:after,\n.modal-header:before,\n.modal-header:after,\n.modal-footer:before,\n.modal-footer:after {\n  display: table;\n  content: \" \";\n}\n  .clearfix:after,\n.dl-horizontal dd:after,\n.container:after,\n.container-fluid:after,\n.row:after,\n.form-horizontal .form-group:after,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:after,\n.nav:after,\n.navbar:after,\n.navbar-header:after,\n.navbar-collapse:after,\n.pager:after,\n.panel-body:after,\n.modal-header:after,\n.modal-footer:after {\n  clear: both;\n}\n  .center-block {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n  .pull-right {\n  float: right !important;\n}\n  .pull-left {\n  float: left !important;\n}\n  .hide {\n  display: none !important;\n}\n  .show {\n  display: block !important;\n}\n  .invisible {\n  visibility: hidden;\n}\n  .text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n  .hidden {\n  display: none !important;\n}\n  .affix {\n  position: fixed;\n}\n  @-ms-viewport {\n  width: device-width;\n}\n  .visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n  display: none !important;\n}\n  .visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n  @media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n  table.visible-xs {\n    display: table !important;\n  }\n  tr.visible-xs {\n    display: table-row !important;\n  }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n  @media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n  @media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n  @media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n  @media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n  table.visible-sm {\n    display: table !important;\n  }\n  tr.visible-sm {\n    display: table-row !important;\n  }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n  @media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n  @media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n  @media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n  @media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n  table.visible-md {\n    display: table !important;\n  }\n  tr.visible-md {\n    display: table-row !important;\n  }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n  @media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n  @media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n  @media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n  @media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n  table.visible-lg {\n    display: table !important;\n  }\n  tr.visible-lg {\n    display: table-row !important;\n  }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n  @media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n  @media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n  @media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n  @media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n  @media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n  @media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n  @media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n  .visible-print {\n  display: none !important;\n}\n  @media print {\n  .visible-print {\n    display: block !important;\n  }\n  table.visible-print {\n    display: table !important;\n  }\n  tr.visible-print {\n    display: table-row !important;\n  }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n  .visible-print-block {\n  display: none !important;\n}\n  @media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n  .visible-print-inline {\n  display: none !important;\n}\n  @media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n  .visible-print-inline-block {\n  display: none !important;\n}\n  @media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n  @media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n  /*!\n * Datetimepicker for Bootstrap 3\n * version : 4.17.47\n * https://github.com/Eonasdan/bootstrap-datetimepicker/\n */\n  .bootstrap-datetimepicker-widget{list-style:none}\n  .bootstrap-datetimepicker-widget.dropdown-menu{display:block;margin:2px 0;padding:4px;width:19em}\n  @media (min-width:768px){.bootstrap-datetimepicker-widget.dropdown-menu.timepicker-sbs{width:38em}}\n  @media (min-width:992px){.bootstrap-datetimepicker-widget.dropdown-menu.timepicker-sbs{width:38em}}\n  @media (min-width:1200px){.bootstrap-datetimepicker-widget.dropdown-menu.timepicker-sbs{width:38em}}\n  .bootstrap-datetimepicker-widget.dropdown-menu:before,.bootstrap-datetimepicker-widget.dropdown-menu:after{content:'';display:inline-block;position:absolute}\n  .bootstrap-datetimepicker-widget.dropdown-menu.bottom:before{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #ccc;border-bottom-color:rgba(0,0,0,0.2);top:-7px;left:7px}\n  .bootstrap-datetimepicker-widget.dropdown-menu.bottom:after{border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid white;top:-6px;left:8px}\n  .bootstrap-datetimepicker-widget.dropdown-menu.top:before{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #ccc;border-top-color:rgba(0,0,0,0.2);bottom:-7px;left:6px}\n  .bootstrap-datetimepicker-widget.dropdown-menu.top:after{border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid white;bottom:-6px;left:7px}\n  .bootstrap-datetimepicker-widget.dropdown-menu.pull-right:before{left:auto;right:6px}\n  .bootstrap-datetimepicker-widget.dropdown-menu.pull-right:after{left:auto;right:7px}\n  .bootstrap-datetimepicker-widget .list-unstyled{margin:0}\n  .bootstrap-datetimepicker-widget a[data-action]{padding:6px 0}\n  .bootstrap-datetimepicker-widget a[data-action]:active{box-shadow:none}\n  .bootstrap-datetimepicker-widget .timepicker-hour,.bootstrap-datetimepicker-widget .timepicker-minute,.bootstrap-datetimepicker-widget .timepicker-second{width:54px;font-weight:bold;font-size:1.2em;margin:0}\n  .bootstrap-datetimepicker-widget button[data-action]{padding:6px}\n  .bootstrap-datetimepicker-widget .btn[data-action=\"incrementHours\"]::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Increment Hours\"}\n  .bootstrap-datetimepicker-widget .btn[data-action=\"incrementMinutes\"]::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Increment Minutes\"}\n  .bootstrap-datetimepicker-widget .btn[data-action=\"decrementHours\"]::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Decrement Hours\"}\n  .bootstrap-datetimepicker-widget .btn[data-action=\"decrementMinutes\"]::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Decrement Minutes\"}\n  .bootstrap-datetimepicker-widget .btn[data-action=\"showHours\"]::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Show Hours\"}\n  .bootstrap-datetimepicker-widget .btn[data-action=\"showMinutes\"]::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Show Minutes\"}\n  .bootstrap-datetimepicker-widget .btn[data-action=\"togglePeriod\"]::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Toggle AM/PM\"}\n  .bootstrap-datetimepicker-widget .btn[data-action=\"clear\"]::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Clear the picker\"}\n  .bootstrap-datetimepicker-widget .btn[data-action=\"today\"]::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Set the date to today\"}\n  .bootstrap-datetimepicker-widget .picker-switch{text-align:center}\n  .bootstrap-datetimepicker-widget .picker-switch::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Toggle Date and Time Screens\"}\n  .bootstrap-datetimepicker-widget .picker-switch td{padding:0;margin:0;height:auto;width:auto;line-height:inherit}\n  .bootstrap-datetimepicker-widget .picker-switch td span{line-height:2.5;height:2.5em;width:100%}\n  .bootstrap-datetimepicker-widget table{width:100%;margin:0}\n  .bootstrap-datetimepicker-widget table td,.bootstrap-datetimepicker-widget table th{text-align:center;border-radius:4px}\n  .bootstrap-datetimepicker-widget table th{height:20px;line-height:20px;width:20px}\n  .bootstrap-datetimepicker-widget table th.picker-switch{width:145px}\n  .bootstrap-datetimepicker-widget table th.disabled,.bootstrap-datetimepicker-widget table th.disabled:hover{background:none;color:#777;cursor:not-allowed}\n  .bootstrap-datetimepicker-widget table th.prev::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Previous Month\"}\n  .bootstrap-datetimepicker-widget table th.next::after{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0;content:\"Next Month\"}\n  .bootstrap-datetimepicker-widget table thead tr:first-child th{cursor:pointer}\n  .bootstrap-datetimepicker-widget table thead tr:first-child th:hover{background:#eee}\n  .bootstrap-datetimepicker-widget table td{height:54px;line-height:54px;width:54px}\n  .bootstrap-datetimepicker-widget table td.cw{font-size:.8em;height:20px;line-height:20px;color:#777}\n  .bootstrap-datetimepicker-widget table td.day{height:20px;line-height:20px;width:20px}\n  .bootstrap-datetimepicker-widget table td.day:hover,.bootstrap-datetimepicker-widget table td.hour:hover,.bootstrap-datetimepicker-widget table td.minute:hover,.bootstrap-datetimepicker-widget table td.second:hover{background:#eee;cursor:pointer}\n  .bootstrap-datetimepicker-widget table td.old,.bootstrap-datetimepicker-widget table td.new{color:#777}\n  .bootstrap-datetimepicker-widget table td.today{position:relative}\n  .bootstrap-datetimepicker-widget table td.today:before{content:'';display:inline-block;border:solid transparent;border-width:0 0 7px 7px;border-bottom-color:#337ab7;border-top-color:rgba(0,0,0,0.2);position:absolute;bottom:4px;right:4px}\n  .bootstrap-datetimepicker-widget table td.active,.bootstrap-datetimepicker-widget table td.active:hover{background-color:#337ab7;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25)}\n  .bootstrap-datetimepicker-widget table td.active.today:before{border-bottom-color:#fff}\n  .bootstrap-datetimepicker-widget table td.disabled,.bootstrap-datetimepicker-widget table td.disabled:hover{background:none;color:#777;cursor:not-allowed}\n  .bootstrap-datetimepicker-widget table td span{display:inline-block;width:54px;height:54px;line-height:54px;margin:2px 1.5px;cursor:pointer;border-radius:4px}\n  .bootstrap-datetimepicker-widget table td span:hover{background:#eee}\n  .bootstrap-datetimepicker-widget table td span.active{background-color:#337ab7;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25)}\n  .bootstrap-datetimepicker-widget table td span.old{color:#777}\n  .bootstrap-datetimepicker-widget table td span.disabled,.bootstrap-datetimepicker-widget table td span.disabled:hover{background:none;color:#777;cursor:not-allowed}\n  .bootstrap-datetimepicker-widget.usetwentyfour td.hour{height:27px;line-height:27px}\n  .bootstrap-datetimepicker-widget.wider{width:21em}\n  .bootstrap-datetimepicker-widget .datepicker-decades .decade{line-height:1.8em !important}\n  .input-group.date .input-group-addon{cursor:pointer}\n  .sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}\n  svg {\n  display : block;\n  margin: 20px 0;\n}\n  p {\n  font-size   : 20px;\n  font-weight : bold;\n  color       : steelblue;\n}\n  #datePicker1 {\n  float : none;\n}\n  #controlDiv {\n  padding          : 5px;\n  margin           : 5px;\n  background-color : #F7F7F7;\n}\n  .x-axis path,\n.x-axis line {\n  fill            : none;\n  stroke          : brown;\n  shape-rendering : crispEdges;\n  stroke-width    : 2px;\n}\n  .x-axis text {\n  font-family : sans-serif;\n  font-style  : italic;\n  font-size   : 14px;\n  font-weight : bold;\n  fill        : brown;\n\n}\n  .y-axis path .y-axis line {\n  stroke-width : 2px;\n  fill         : blueviolet;\n}\n  .y-axis path,\n.y-axis line {\n  fill            : none;\n  stroke          : steelblue;\n  shape-rendering : crispEdges;\n  stroke-width    : 3px;\n}\n  .y-axis text {\n  font-family : sans-serif;\n  font-style  : italic;\n  font-size   : 14px;\n  fill        : steelblue;\n\n}\n  .y-axis-pump path,\n.y-axis-pump line {\n  fill            : none;\n  stroke          : brown;\n  shape-rendering : crispEdges;\n  stroke-width    : 3px;\n}\n  .y-axis-pump text {\n  font-family : sans-serif;\n  font-style  : italic;\n  font-size   : 14px;\n  fill        : brown;\n\n}\n\n\n"

/***/ }),

/***/ "../../xplat/web/features/charts/components/index.ts":
/*!**********************************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/features/charts/components/index.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var dynocard_component_1 = __webpack_require__(/*! ./charts/dynocard.component */ "../../xplat/web/features/charts/components/charts/dynocard.component.ts");
exports.CHARTS_COMPONENTS = [dynocard_component_1.DynoCardComponent];
__export(__webpack_require__(/*! ./charts/dynocard.component */ "../../xplat/web/features/charts/components/charts/dynocard.component.ts"));


/***/ }),

/***/ "../../xplat/web/features/charts/index.ts":
/*!***********************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/features/charts/index.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components */ "../../xplat/web/features/charts/components/index.ts"));
__export(__webpack_require__(/*! ./charts.module */ "../../xplat/web/features/charts/charts.module.ts"));


/***/ }),

/***/ "../../xplat/web/features/index.ts":
/*!****************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/features/index.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./ui */ "../../xplat/web/features/ui/index.ts"));
__export(__webpack_require__(/*! ./charts */ "../../xplat/web/features/charts/index.ts"));


/***/ }),

/***/ "../../xplat/web/features/ui/index.ts":
/*!*******************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/features/ui/index.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ui_module_1 = __webpack_require__(/*! ./ui.module */ "../../xplat/web/features/ui/ui.module.ts");
exports.UIModule = ui_module_1.UIModule;


/***/ }),

/***/ "../../xplat/web/features/ui/ui.module.ts":
/*!***********************************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/features/ui/ui.module.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
// libs
var features_1 = __webpack_require__(/*! @iot-edge-dynocard/features */ "../../libs/features/index.ts");
var MODULES = [
    common_1.CommonModule,
    router_1.RouterModule,
    forms_1.FormsModule,
    forms_1.ReactiveFormsModule,
    features_1.UISharedModule
];
var UIModule = /** @class */ (function () {
    function UIModule() {
    }
    UIModule = __decorate([
        core_1.NgModule({
            imports: MODULES.slice(),
            exports: MODULES.slice(),
        })
    ], UIModule);
    return UIModule;
}());
exports.UIModule = UIModule;


/***/ }),

/***/ "../../xplat/web/index.ts":
/*!*******************************************************************!*\
  !*** /home/flytoy/DevSource/iot-edge-dynocard/xplat/web/index.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./core */ "../../xplat/web/core/index.ts"));
__export(__webpack_require__(/*! ./features */ "../../xplat/web/features/index.ts"));


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-20\">\n  <dynocard-chart></dynocard-chart>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
// xplat
var web_1 = __webpack_require__(/*! @iot-edge-dynocard/web */ "../../xplat/web/index.ts");
var core_2 = __webpack_require__(/*! @iot-edge-dynocard/core */ "../../libs/core/index.ts");
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(dataService) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        return _this;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'iot-edge-dynocard-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [core_2.DataService])
    ], AppComponent);
    return AppComponent;
}(web_1.AppBaseComponent));
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
// app
var core_module_1 = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
var shared_module_1 = __webpack_require__(/*! ./features/shared/shared.module */ "./src/app/features/shared/shared.module.ts");
var web_1 = __webpack_require__(/*! @iot-edge-dynocard/web */ "../../xplat/web/index.ts");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [core_module_1.CoreModule, shared_module_1.SharedModule, web_1.ChartsModule],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
// xplat
var web_1 = __webpack_require__(/*! @iot-edge-dynocard/web */ "../../xplat/web/index.ts");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [web_1.DynocardCoreModule]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;


/***/ }),

/***/ "./src/app/features/shared/shared.module.ts":
/*!**************************************************!*\
  !*** ./src/app/features/shared/shared.module.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
// xplat
var web_1 = __webpack_require__(/*! @iot-edge-dynocard/web */ "../../xplat/web/index.ts");
var MODULES = [web_1.UIModule];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: MODULES.slice(),
            exports: MODULES.slice()
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
// libs
var core_2 = __webpack_require__(/*! @iot-edge-dynocard/core */ "../../libs/core/index.ts");
// app
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
if (core_2.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/flytoy/DevSource/iot-edge-dynocard/apps/web-dynocard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map