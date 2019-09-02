(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('@angular-schule/okahyaogluapi', ['exports', '@angular/core', '@angular/common/http'], factory) :
    (global = global || self, factory((global['angular-schule'] = global['angular-schule'] || {}, global['angular-schule'].okahyaogluapi = {}), global.ng.core, global.ng.common.http));
}(this, function (exports, core, http) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
    * CustomHttpUrlEncodingCodec
    * Fix plus sign (+) not encoding, so sent as blank space
    * See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
    */
    var CustomHttpUrlEncodingCodec = /** @class */ (function (_super) {
        __extends(CustomHttpUrlEncodingCodec, _super);
        function CustomHttpUrlEncodingCodec() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomHttpUrlEncodingCodec.prototype.encodeKey = function (k) {
            k = _super.prototype.encodeKey.call(this, k);
            return k.replace(/\+/gi, '%2B');
        };
        CustomHttpUrlEncodingCodec.prototype.encodeValue = function (v) {
            v = _super.prototype.encodeValue.call(this, v);
            return v.replace(/\+/gi, '%2B');
        };
        return CustomHttpUrlEncodingCodec;
    }(http.HttpUrlEncodingCodec));

    var BASE_PATH = new core.InjectionToken('basePath');
    var COLLECTION_FORMATS = {
        'csv': ',',
        'tsv': '   ',
        'ssv': ' ',
        'pipes': '|'
    };

    var Configuration = /** @class */ (function () {
        function Configuration(configurationParameters) {
            if (configurationParameters === void 0) { configurationParameters = {}; }
            this.apiKeys = configurationParameters.apiKeys;
            this.username = configurationParameters.username;
            this.password = configurationParameters.password;
            this.accessToken = configurationParameters.accessToken;
            this.basePath = configurationParameters.basePath;
            this.withCredentials = configurationParameters.withCredentials;
        }
        /**
         * Select the correct content-type to use for a request.
         * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
         * If no content type is found return the first found type if the contentTypes is not empty
         * @param contentTypes - the array of content types that are available for selection
         * @returns the selected content-type or <code>undefined</code> if no selection could be made.
         */
        Configuration.prototype.selectHeaderContentType = function (contentTypes) {
            var _this = this;
            if (contentTypes.length == 0) {
                return undefined;
            }
            var type = contentTypes.find(function (x) { return _this.isJsonMime(x); });
            if (type === undefined) {
                return contentTypes[0];
            }
            return type;
        };
        /**
         * Select the correct accept content-type to use for a request.
         * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
         * If no content type is found return the first found type if the contentTypes is not empty
         * @param accepts - the array of content types that are available for selection.
         * @returns the selected content-type or <code>undefined</code> if no selection could be made.
         */
        Configuration.prototype.selectHeaderAccept = function (accepts) {
            var _this = this;
            if (accepts.length == 0) {
                return undefined;
            }
            var type = accepts.find(function (x) { return _this.isJsonMime(x); });
            if (type === undefined) {
                return accepts[0];
            }
            return type;
        };
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */
        Configuration.prototype.isJsonMime = function (mime) {
            var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
            return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        };
        return Configuration;
    }());

    /**
     * Squidex API for okahyaoglunet App
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: 1.0.0
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */
    var ProjectService = /** @class */ (function () {
        function ProjectService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'http://cms.okahyaoglu.net/api';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        ProjectService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        ProjectService.prototype.archiveProjectContent = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling archiveProjectContent.');
            }
            var headers = this.defaultHeaders;
            // authentication (squidex-oauth-auth) required
            if (this.configuration.accessToken) {
                var accessToken = typeof this.configuration.accessToken === 'function'
                    ? this.configuration.accessToken()
                    : this.configuration.accessToken;
                headers = headers.set('Authorization', 'Bearer ' + accessToken);
            }
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            return this.httpClient.put(this.basePath + "/content/okahyaoglunet/project/" + encodeURIComponent(String(id)) + "/archive", null, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ProjectService.prototype.createProjectContent = function (data, publish, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (data === null || data === undefined) {
                throw new Error('Required parameter data was null or undefined when calling createProjectContent.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (publish !== undefined && publish !== null) {
                queryParameters = queryParameters.set('publish', publish);
            }
            var headers = this.defaultHeaders;
            // authentication (squidex-oauth-auth) required
            if (this.configuration.accessToken) {
                var accessToken = typeof this.configuration.accessToken === 'function'
                    ? this.configuration.accessToken()
                    : this.configuration.accessToken;
                headers = headers.set('Authorization', 'Bearer ' + accessToken);
            }
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/content/okahyaoglunet/project", data, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ProjectService.prototype.deleteProjectContent = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling deleteProjectContent.');
            }
            var headers = this.defaultHeaders;
            // authentication (squidex-oauth-auth) required
            if (this.configuration.accessToken) {
                var accessToken = typeof this.configuration.accessToken === 'function'
                    ? this.configuration.accessToken()
                    : this.configuration.accessToken;
                headers = headers.set('Authorization', 'Bearer ' + accessToken);
            }
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            return this.httpClient.delete(this.basePath + "/content/okahyaoglunet/project/" + encodeURIComponent(String(id)) + "/", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ProjectService.prototype.getProjectContent = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProjectContent.');
            }
            var headers = this.defaultHeaders;
            // authentication (squidex-oauth-auth) required
            if (this.configuration.accessToken) {
                var accessToken = typeof this.configuration.accessToken === 'function'
                    ? this.configuration.accessToken()
                    : this.configuration.accessToken;
                headers = headers.set('Authorization', 'Bearer ' + accessToken);
            }
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            return this.httpClient.get(this.basePath + "/content/okahyaoglunet/project/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ProjectService.prototype.pathProjectContent = function (data, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (data === null || data === undefined) {
                throw new Error('Required parameter data was null or undefined when calling pathProjectContent.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling pathProjectContent.');
            }
            var headers = this.defaultHeaders;
            // authentication (squidex-oauth-auth) required
            if (this.configuration.accessToken) {
                var accessToken = typeof this.configuration.accessToken === 'function'
                    ? this.configuration.accessToken()
                    : this.configuration.accessToken;
                headers = headers.set('Authorization', 'Bearer ' + accessToken);
            }
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.patch(this.basePath + "/content/okahyaoglunet/project/" + encodeURIComponent(String(id)), data, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ProjectService.prototype.publishProjectContent = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling publishProjectContent.');
            }
            var headers = this.defaultHeaders;
            // authentication (squidex-oauth-auth) required
            if (this.configuration.accessToken) {
                var accessToken = typeof this.configuration.accessToken === 'function'
                    ? this.configuration.accessToken()
                    : this.configuration.accessToken;
                headers = headers.set('Authorization', 'Bearer ' + accessToken);
            }
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            return this.httpClient.put(this.basePath + "/content/okahyaoglunet/project/" + encodeURIComponent(String(id)) + "/publish", null, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ProjectService.prototype.queryProjectContents = function (top, skip, filter, search, orderby, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (top !== undefined && top !== null) {
                queryParameters = queryParameters.set('$top', top);
            }
            if (skip !== undefined && skip !== null) {
                queryParameters = queryParameters.set('$skip', skip);
            }
            if (filter !== undefined && filter !== null) {
                queryParameters = queryParameters.set('$filter', filter);
            }
            if (search !== undefined && search !== null) {
                queryParameters = queryParameters.set('$search', search);
            }
            if (orderby !== undefined && orderby !== null) {
                queryParameters = queryParameters.set('orderby', orderby);
            }
            var headers = this.defaultHeaders;
            // authentication (squidex-oauth-auth) required
            if (this.configuration.accessToken) {
                var accessToken = typeof this.configuration.accessToken === 'function'
                    ? this.configuration.accessToken()
                    : this.configuration.accessToken;
                headers = headers.set('Authorization', 'Bearer ' + accessToken);
            }
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            return this.httpClient.get(this.basePath + "/content/okahyaoglunet/project", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ProjectService.prototype.restoreProjectContent = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling restoreProjectContent.');
            }
            var headers = this.defaultHeaders;
            // authentication (squidex-oauth-auth) required
            if (this.configuration.accessToken) {
                var accessToken = typeof this.configuration.accessToken === 'function'
                    ? this.configuration.accessToken()
                    : this.configuration.accessToken;
                headers = headers.set('Authorization', 'Bearer ' + accessToken);
            }
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            return this.httpClient.put(this.basePath + "/content/okahyaoglunet/project/" + encodeURIComponent(String(id)) + "/restore", null, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ProjectService.prototype.unpublishProjectContent = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling unpublishProjectContent.');
            }
            var headers = this.defaultHeaders;
            // authentication (squidex-oauth-auth) required
            if (this.configuration.accessToken) {
                var accessToken = typeof this.configuration.accessToken === 'function'
                    ? this.configuration.accessToken()
                    : this.configuration.accessToken;
                headers = headers.set('Authorization', 'Bearer ' + accessToken);
            }
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            return this.httpClient.put(this.basePath + "/content/okahyaoglunet/project/" + encodeURIComponent(String(id)) + "/unpublish", null, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ProjectService.prototype.updateProjectContent = function (data, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (data === null || data === undefined) {
                throw new Error('Required parameter data was null or undefined when calling updateProjectContent.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateProjectContent.');
            }
            var headers = this.defaultHeaders;
            // authentication (squidex-oauth-auth) required
            if (this.configuration.accessToken) {
                var accessToken = typeof this.configuration.accessToken === 'function'
                    ? this.configuration.accessToken()
                    : this.configuration.accessToken;
                headers = headers.set('Authorization', 'Bearer ' + accessToken);
            }
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.put(this.basePath + "/content/okahyaoglunet/project/" + encodeURIComponent(String(id)), data, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ProjectService = __decorate([
            core.Injectable(),
            __param(1, core.Optional()), __param(1, core.Inject(BASE_PATH)), __param(2, core.Optional()),
            __metadata("design:paramtypes", [http.HttpClient, String, Configuration])
        ], ProjectService);
        return ProjectService;
    }());

    /**
     * Squidex API for okahyaoglunet App
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: 1.0.0
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */
    var WorkexperienceService = /** @class */ (function () {
        function WorkexperienceService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'http://cms.okahyaoglu.net/api';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        WorkexperienceService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        WorkexperienceService.prototype.archiveWorkexperienceContent = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling archiveWorkexperienceContent.');
            }
            var headers = this.defaultHeaders;
            // authentication (squidex-oauth-auth) required
            if (this.configuration.accessToken) {
                var accessToken = typeof this.configuration.accessToken === 'function'
                    ? this.configuration.accessToken()
                    : this.configuration.accessToken;
                headers = headers.set('Authorization', 'Bearer ' + accessToken);
            }
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            return this.httpClient.put(this.basePath + "/content/okahyaoglunet/workexperience/" + encodeURIComponent(String(id)) + "/archive", null, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        WorkexperienceService.prototype.createWorkexperienceContent = function (data, publish, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (data === null || data === undefined) {
                throw new Error('Required parameter data was null or undefined when calling createWorkexperienceContent.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (publish !== undefined && publish !== null) {
                queryParameters = queryParameters.set('publish', publish);
            }
            var headers = this.defaultHeaders;
            // authentication (squidex-oauth-auth) required
            if (this.configuration.accessToken) {
                var accessToken = typeof this.configuration.accessToken === 'function'
                    ? this.configuration.accessToken()
                    : this.configuration.accessToken;
                headers = headers.set('Authorization', 'Bearer ' + accessToken);
            }
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.post(this.basePath + "/content/okahyaoglunet/workexperience", data, {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        WorkexperienceService.prototype.deleteWorkexperienceContent = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling deleteWorkexperienceContent.');
            }
            var headers = this.defaultHeaders;
            // authentication (squidex-oauth-auth) required
            if (this.configuration.accessToken) {
                var accessToken = typeof this.configuration.accessToken === 'function'
                    ? this.configuration.accessToken()
                    : this.configuration.accessToken;
                headers = headers.set('Authorization', 'Bearer ' + accessToken);
            }
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            return this.httpClient.delete(this.basePath + "/content/okahyaoglunet/workexperience/" + encodeURIComponent(String(id)) + "/", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        WorkexperienceService.prototype.getWorkexperienceContent = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getWorkexperienceContent.');
            }
            var headers = this.defaultHeaders;
            // authentication (squidex-oauth-auth) required
            if (this.configuration.accessToken) {
                var accessToken = typeof this.configuration.accessToken === 'function'
                    ? this.configuration.accessToken()
                    : this.configuration.accessToken;
                headers = headers.set('Authorization', 'Bearer ' + accessToken);
            }
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            return this.httpClient.get(this.basePath + "/content/okahyaoglunet/workexperience/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        WorkexperienceService.prototype.pathWorkexperienceContent = function (data, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (data === null || data === undefined) {
                throw new Error('Required parameter data was null or undefined when calling pathWorkexperienceContent.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling pathWorkexperienceContent.');
            }
            var headers = this.defaultHeaders;
            // authentication (squidex-oauth-auth) required
            if (this.configuration.accessToken) {
                var accessToken = typeof this.configuration.accessToken === 'function'
                    ? this.configuration.accessToken()
                    : this.configuration.accessToken;
                headers = headers.set('Authorization', 'Bearer ' + accessToken);
            }
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.patch(this.basePath + "/content/okahyaoglunet/workexperience/" + encodeURIComponent(String(id)), data, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        WorkexperienceService.prototype.publishWorkexperienceContent = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling publishWorkexperienceContent.');
            }
            var headers = this.defaultHeaders;
            // authentication (squidex-oauth-auth) required
            if (this.configuration.accessToken) {
                var accessToken = typeof this.configuration.accessToken === 'function'
                    ? this.configuration.accessToken()
                    : this.configuration.accessToken;
                headers = headers.set('Authorization', 'Bearer ' + accessToken);
            }
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            return this.httpClient.put(this.basePath + "/content/okahyaoglunet/workexperience/" + encodeURIComponent(String(id)) + "/publish", null, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        WorkexperienceService.prototype.queryWorkexperienceContents = function (top, skip, filter, search, orderby, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (top !== undefined && top !== null) {
                queryParameters = queryParameters.set('$top', top);
            }
            if (skip !== undefined && skip !== null) {
                queryParameters = queryParameters.set('$skip', skip);
            }
            if (filter !== undefined && filter !== null) {
                queryParameters = queryParameters.set('$filter', filter);
            }
            if (search !== undefined && search !== null) {
                queryParameters = queryParameters.set('$search', search);
            }
            if (orderby !== undefined && orderby !== null) {
                queryParameters = queryParameters.set('orderby', orderby);
            }
            var headers = this.defaultHeaders;
            // authentication (squidex-oauth-auth) required
            if (this.configuration.accessToken) {
                var accessToken = typeof this.configuration.accessToken === 'function'
                    ? this.configuration.accessToken()
                    : this.configuration.accessToken;
                headers = headers.set('Authorization', 'Bearer ' + accessToken);
            }
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            return this.httpClient.get(this.basePath + "/content/okahyaoglunet/workexperience", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        WorkexperienceService.prototype.restoreWorkexperienceContent = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling restoreWorkexperienceContent.');
            }
            var headers = this.defaultHeaders;
            // authentication (squidex-oauth-auth) required
            if (this.configuration.accessToken) {
                var accessToken = typeof this.configuration.accessToken === 'function'
                    ? this.configuration.accessToken()
                    : this.configuration.accessToken;
                headers = headers.set('Authorization', 'Bearer ' + accessToken);
            }
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            return this.httpClient.put(this.basePath + "/content/okahyaoglunet/workexperience/" + encodeURIComponent(String(id)) + "/restore", null, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        WorkexperienceService.prototype.unpublishWorkexperienceContent = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling unpublishWorkexperienceContent.');
            }
            var headers = this.defaultHeaders;
            // authentication (squidex-oauth-auth) required
            if (this.configuration.accessToken) {
                var accessToken = typeof this.configuration.accessToken === 'function'
                    ? this.configuration.accessToken()
                    : this.configuration.accessToken;
                headers = headers.set('Authorization', 'Bearer ' + accessToken);
            }
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            return this.httpClient.put(this.basePath + "/content/okahyaoglunet/workexperience/" + encodeURIComponent(String(id)) + "/unpublish", null, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        WorkexperienceService.prototype.updateWorkexperienceContent = function (data, id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (data === null || data === undefined) {
                throw new Error('Required parameter data was null or undefined when calling updateWorkexperienceContent.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateWorkexperienceContent.');
            }
            var headers = this.defaultHeaders;
            // authentication (squidex-oauth-auth) required
            if (this.configuration.accessToken) {
                var accessToken = typeof this.configuration.accessToken === 'function'
                    ? this.configuration.accessToken()
                    : this.configuration.accessToken;
                headers = headers.set('Authorization', 'Bearer ' + accessToken);
            }
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [
                'application/json'
            ];
            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
            return this.httpClient.put(this.basePath + "/content/okahyaoglunet/workexperience/" + encodeURIComponent(String(id)), data, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        WorkexperienceService = __decorate([
            core.Injectable(),
            __param(1, core.Optional()), __param(1, core.Inject(BASE_PATH)), __param(2, core.Optional()),
            __metadata("design:paramtypes", [http.HttpClient, String, Configuration])
        ], WorkexperienceService);
        return WorkexperienceService;
    }());

    var APIS = [ProjectService, WorkexperienceService];

    var ApiModule = /** @class */ (function () {
        function ApiModule(parentModule, http) {
            if (parentModule) {
                throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
            }
            if (!http) {
                throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                    'See also https://github.com/angular/angular/issues/20575');
            }
        }
        ApiModule_1 = ApiModule;
        ApiModule.forRoot = function (configurationFactory) {
            return {
                ngModule: ApiModule_1,
                providers: [{ provide: Configuration, useFactory: configurationFactory }]
            };
        };
        var ApiModule_1;
        ApiModule = ApiModule_1 = __decorate([
            core.NgModule({
                imports: [],
                declarations: [],
                exports: [],
                providers: [
                    ProjectService,
                    WorkexperienceService
                ]
            }),
            __param(0, core.Optional()), __param(0, core.SkipSelf()),
            __param(1, core.Optional()),
            __metadata("design:paramtypes", [ApiModule,
                http.HttpClient])
        ], ApiModule);
        return ApiModule;
    }());

    exports.APIS = APIS;
    exports.ApiModule = ApiModule;
    exports.BASE_PATH = BASE_PATH;
    exports.COLLECTION_FORMATS = COLLECTION_FORMATS;
    exports.Configuration = Configuration;
    exports.ProjectService = ProjectService;
    exports.WorkexperienceService = WorkexperienceService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angular-schule-okahyaogluapi.umd.js.map
