(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/graphql.js":
/*!****************************!*\
  !*** ./src/api/graphql.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'apollo-server-express'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'merge-graphql-schemas'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _graphql_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphql/types */ \"./src/graphql/types/index.js\");\n/* harmony import */ var _graphql_resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/resolvers */ \"./src/graphql/resolvers/index.js\");\n\n\n\n\n\nconst attachGraphQL = (app, {\n  dataSources = {}\n} = {}) => {\n  const server = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'apollo-server-express'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n    typeDefs: !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'merge-graphql-schemas'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_graphql_types__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      all: true\n    }),\n    resolvers: !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'merge-graphql-schemas'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_graphql_resolvers__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n    dataSources,\n    context: () => {\n      return {\n        token: 'foo'\n      };\n    },\n    debug: true,\n    playground: true,\n    introspective: true\n  });\n  server.applyMiddleware({\n    app\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (attachGraphQL);\n\n//# sourceURL=webpack:///./src/api/graphql.js?");

/***/ }),

/***/ "./src/api/home.js":
/*!*************************!*\
  !*** ./src/api/home.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'ew-internals'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app => {\n  app.get('/', !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'ew-internals'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(async (req, res) => {\n    res.status(200).send('Hello from API');\n  }));\n});\n\n//# sourceURL=webpack:///./src/api/home.js?");

/***/ }),

/***/ "./src/database/entities/file.js":
/*!***************************************!*\
  !*** ./src/database/entities/file.js ***!
  \***************************************/
/*! exports provided: TABLE_NAME, schema, entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TABLE_NAME\", function() { return TABLE_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"schema\", function() { return schema; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"entity\", function() { return entity; });\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'typeorm'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\nconst TABLE_NAME = 'file';\nconst schema = {\n  name: TABLE_NAME,\n  columns: {\n    id: {\n      primary: true,\n      type: 'integer',\n      generated: 'increment',\n      nullable: false\n    },\n    url: {\n      type: 'varchar',\n      length: 300,\n      nullable: false\n    },\n    mime: {\n      type: 'varchar',\n      length: 50,\n      nullable: false\n    },\n    placeholder: {\n      type: 'bytea',\n      nullable: true\n    }\n  }\n};\nconst entity = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'typeorm'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(schema);\n\n//# sourceURL=webpack:///./src/database/entities/file.js?");

/***/ }),

/***/ "./src/database/entities/index.js":
/*!****************************************!*\
  !*** ./src/database/entities/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file */ \"./src/database/entities/file.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_file__WEBPACK_IMPORTED_MODULE_0__[\"entity\"]]);\n\n//# sourceURL=webpack:///./src/database/entities/index.js?");

/***/ }),

/***/ "./src/database/index.js":
/*!*******************************!*\
  !*** ./src/database/index.js ***!
  \*******************************/
/*! exports provided: Database */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Database\", function() { return Database; });\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'typeorm'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _migrations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./migrations */ \"./src/database/migrations/index.js\");\n/* harmony import */ var _migrations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_migrations__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities */ \"./src/database/entities/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass Database {\n  constructor({\n    url,\n    password\n  } = {}) {\n    this.connection = null;\n    this.url = url;\n    this.password = password;\n  }\n\n  async connect() {\n    this.connection = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'typeorm'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n      entities: _entities__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      migrations: (_migrations__WEBPACK_IMPORTED_MODULE_1___default()),\n      url: this.injectPassword(this.url, this.password),\n      type: 'postgres'\n    });\n  }\n\n  async migrate() {\n    return this.getConnection().runMigrations();\n  }\n\n  injectPassword(url, password = '') {\n    if (typeof password === 'string' && password.length) {\n      const oUrl = new URL(url);\n      oUrl.password = password;\n      url = oUrl.toString();\n    }\n\n    return url;\n  }\n\n  getConnection() {\n    return this.connection;\n  }\n\n  getRepository(entityName) {\n    const entity = this.getEntityList()[entityName];\n\n    if (entity) {\n      return this.getConnection().getRepository(entity);\n    }\n\n    return null;\n  }\n\n  getEntityList() {\n    if (!this.entityList) {\n      this.entityList = _entities__WEBPACK_IMPORTED_MODULE_2__[\"default\"].reduce((result, entity) => {\n        return _objectSpread({}, result, {\n          [entity.name]: entity\n        });\n      }, {});\n    }\n\n    return this.entityList;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/database/index.js?");

/***/ }),

/***/ "./src/database/migrations/index.js":
/*!******************************************!*\
  !*** ./src/database/migrations/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /app/src/database/migrations/index.js: Identifier 'Seed' has already been declared (3:14)\\n\\n  1 | import Seed from './seed';\\n  2 | \\n> 3 | export const [Seed];\\n    |               ^\\n  4 | \\n    at Parser.raise (/app/node_modules/@babel/parser/lib/index.js:6325:17)\\n    at ScopeHandler.checkRedeclarationInScope (/app/node_modules/@babel/parser/lib/index.js:3759:12)\\n    at ScopeHandler.declareName (/app/node_modules/@babel/parser/lib/index.js:3725:12)\\n    at Parser.checkLVal (/app/node_modules/@babel/parser/lib/index.js:8021:22)\\n    at Parser.checkLVal (/app/node_modules/@babel/parser/lib/index.js:8047:18)\\n    at Parser.parseVarId (/app/node_modules/@babel/parser/lib/index.js:10502:10)\\n    at Parser.parseVar (/app/node_modules/@babel/parser/lib/index.js:10477:12)\\n    at Parser.parseVarStatement (/app/node_modules/@babel/parser/lib/index.js:10299:10)\\n    at Parser.parseStatementContent (/app/node_modules/@babel/parser/lib/index.js:9896:21)\\n    at Parser.parseStatement (/app/node_modules/@babel/parser/lib/index.js:9829:17)\\n    at Parser.parseExportDeclaration (/app/node_modules/@babel/parser/lib/index.js:11017:17)\\n    at Parser.maybeParseExportDeclaration (/app/node_modules/@babel/parser/lib/index.js:10967:31)\\n    at Parser.parseExport (/app/node_modules/@babel/parser/lib/index.js:10896:29)\\n    at Parser.parseStatementContent (/app/node_modules/@babel/parser/lib/index.js:9933:27)\\n    at Parser.parseStatement (/app/node_modules/@babel/parser/lib/index.js:9829:17)\\n    at Parser.parseBlockOrModuleBlockBody (/app/node_modules/@babel/parser/lib/index.js:10405:25)\\n    at Parser.parseBlockBody (/app/node_modules/@babel/parser/lib/index.js:10392:10)\\n    at Parser.parseTopLevel (/app/node_modules/@babel/parser/lib/index.js:9758:10)\\n    at Parser.parse (/app/node_modules/@babel/parser/lib/index.js:11270:17)\\n    at parse (/app/node_modules/@babel/parser/lib/index.js:11306:38)\\n    at parser (/app/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\\n    at normalizeFile (/app/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\\n    at runSync (/app/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/app/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at process.nextTick (/app/node_modules/@babel/core/lib/transform.js:34:34)\\n    at process._tickCallback (internal/process/next_tick.js:172:11)\");\n\n//# sourceURL=webpack:///./src/database/migrations/index.js?");

/***/ }),

/***/ "./src/graphql/resolvers/hello.js":
/*!****************************************!*\
  !*** ./src/graphql/resolvers/hello.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Query: {\n    hello: (parent, parameters, {\n      dataSources\n    }) => {\n      return \"Hello!\";\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/graphql/resolvers/hello.js?");

/***/ }),

/***/ "./src/graphql/resolvers/index.js":
/*!****************************************!*\
  !*** ./src/graphql/resolvers/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello */ \"./src/graphql/resolvers/hello.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_hello__WEBPACK_IMPORTED_MODULE_0__[\"default\"]]);\n\n//# sourceURL=webpack:///./src/graphql/resolvers/index.js?");

/***/ }),

/***/ "./src/graphql/types/error.graphql":
/*!*****************************************!*\
  !*** ./src/graphql/types/error.graphql ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/graphql-tag/loader.js):\\nError: Cannot find module 'graphql/language/parser'\\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:571:15)\\n    at Function.Module._load (internal/modules/cjs/loader.js:497:25)\\n    at Module.require (internal/modules/cjs/loader.js:626:17)\\n    at require (/app/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\\n    at Object.<anonymous> (/app/node_modules/graphql-tag/src/index.js:1:76)\\n    at Module._compile (/app/node_modules/v8-compile-cache/v8-compile-cache.js:192:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:689:10)\\n    at Module.load (internal/modules/cjs/loader.js:589:32)\\n    at tryModuleLoad (internal/modules/cjs/loader.js:528:12)\\n    at Function.Module._load (internal/modules/cjs/loader.js:520:3)\\n    at Module.require (internal/modules/cjs/loader.js:626:17)\\n    at require (/app/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\\n    at Object.<anonymous> (/app/node_modules/graphql-tag/loader.js:4:13)\\n    at Module._compile (/app/node_modules/v8-compile-cache/v8-compile-cache.js:192:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:689:10)\\n    at Module.load (internal/modules/cjs/loader.js:589:32)\\n    at tryModuleLoad (internal/modules/cjs/loader.js:528:12)\\n    at Function.Module._load (internal/modules/cjs/loader.js:520:3)\\n    at Module.require (internal/modules/cjs/loader.js:626:17)\\n    at require (/app/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\\n    at loadLoader (/app/node_modules/loader-runner/lib/loadLoader.js:18:17)\\n    at iteratePitchingLoaders (/app/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\\n    at runLoaders (/app/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\\n    at NormalModule.doBuild (/app/node_modules/webpack/lib/NormalModule.js:281:3)\\n    at NormalModule.build (/app/node_modules/webpack/lib/NormalModule.js:427:15)\\n    at Compilation.buildModule (/app/node_modules/webpack/lib/Compilation.js:635:10)\\n    at factory.create (/app/node_modules/webpack/lib/Compilation.js:882:14)\\n    at factory (/app/node_modules/webpack/lib/NormalModuleFactory.js:409:6)\\n    at hooks.afterResolve.callAsync (/app/node_modules/webpack/lib/NormalModuleFactory.js:155:13)\\n    at AsyncSeriesWaterfallHook.eval [as callAsync] (eval at create (/app/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\");\n\n//# sourceURL=webpack:///./src/graphql/types/error.graphql?");

/***/ }),

/***/ "./src/graphql/types/hello.graphql":
/*!*****************************************!*\
  !*** ./src/graphql/types/hello.graphql ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/graphql-tag/loader.js):\\nError: Cannot find module 'graphql/language/parser'\\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:571:15)\\n    at Function.Module._load (internal/modules/cjs/loader.js:497:25)\\n    at Module.require (internal/modules/cjs/loader.js:626:17)\\n    at require (/app/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\\n    at Object.<anonymous> (/app/node_modules/graphql-tag/src/index.js:1:76)\\n    at Module._compile (/app/node_modules/v8-compile-cache/v8-compile-cache.js:192:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:689:10)\\n    at Module.load (internal/modules/cjs/loader.js:589:32)\\n    at tryModuleLoad (internal/modules/cjs/loader.js:528:12)\\n    at Function.Module._load (internal/modules/cjs/loader.js:520:3)\\n    at Module.require (internal/modules/cjs/loader.js:626:17)\\n    at require (/app/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\\n    at Object.<anonymous> (/app/node_modules/graphql-tag/loader.js:4:13)\\n    at Module._compile (/app/node_modules/v8-compile-cache/v8-compile-cache.js:192:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:689:10)\\n    at Module.load (internal/modules/cjs/loader.js:589:32)\\n    at tryModuleLoad (internal/modules/cjs/loader.js:528:12)\\n    at Function.Module._load (internal/modules/cjs/loader.js:520:3)\\n    at Module.require (internal/modules/cjs/loader.js:626:17)\\n    at require (/app/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\\n    at loadLoader (/app/node_modules/loader-runner/lib/loadLoader.js:18:17)\\n    at iteratePitchingLoaders (/app/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\\n    at runLoaders (/app/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\\n    at NormalModule.doBuild (/app/node_modules/webpack/lib/NormalModule.js:281:3)\\n    at NormalModule.build (/app/node_modules/webpack/lib/NormalModule.js:427:15)\\n    at Compilation.buildModule (/app/node_modules/webpack/lib/Compilation.js:635:10)\\n    at factory.create (/app/node_modules/webpack/lib/Compilation.js:882:14)\\n    at factory (/app/node_modules/webpack/lib/NormalModuleFactory.js:409:6)\\n    at hooks.afterResolve.callAsync (/app/node_modules/webpack/lib/NormalModuleFactory.js:155:13)\\n    at AsyncSeriesWaterfallHook.eval [as callAsync] (eval at create (/app/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\");\n\n//# sourceURL=webpack:///./src/graphql/types/hello.graphql?");

/***/ }),

/***/ "./src/graphql/types/index.js":
/*!************************************!*\
  !*** ./src/graphql/types/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _error_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.graphql */ \"./src/graphql/types/error.graphql\");\n/* harmony import */ var _error_graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_error_graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hello_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hello.graphql */ \"./src/graphql/types/hello.graphql\");\n/* harmony import */ var _hello_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hello_graphql__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_error_graphql__WEBPACK_IMPORTED_MODULE_0___default.a, _hello_graphql__WEBPACK_IMPORTED_MODULE_1___default.a]);\n\n//# sourceURL=webpack:///./src/graphql/types/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/polyfill'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _lib_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/application */ \"./src/lib/application.js\");\n\n\n_lib_application__WEBPACK_IMPORTED_MODULE_1__[\"default\"].make().then(app => app.launch());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lib/application.js":
/*!********************************!*\
  !*** ./src/lib/application.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(logger, _) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Application; });\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'express'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'cors'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'helmet'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'ew-internals'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database */ \"./src/database/index.js\");\n/* harmony import */ var _intercom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intercom */ \"./src/lib/intercom.js\");\n/* harmony import */ var _api_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/home */ \"./src/api/home.js\");\n/* harmony import */ var _api_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/graphql */ \"./src/api/graphql.js\");\n\n\n\n\n\n\n\n\nclass Application {\n  static async make() {\n    // logger.info('Initializing the application');\n    const instance = new this();\n    const app = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'express'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n    const settings = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'ew-internals'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n    instance.attachErrorHandler(app);\n    const host = await settings.get('network.host', 'localhost');\n    const port = await settings.get('network.port', 3000);\n    app.set('host', host);\n    app.set('port', port); // increase the default parse depth of a query string and disable allowPrototypes\n    // app.set('query parser', query => {\n    //   return qs.parse(query, { allowPrototypes: false, depth: 10 });\n    // });\n\n    this.attachCORS(app, settings);\n    app.use(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'helmet'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());\n    app.use(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'express'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).json()); // // turn on URL-encoded parser for REST services\n    // app.use(\n    //   express.urlencoded({\n    //     extended: true,\n    //   }),\n    // );\n\n    const database = new _database__WEBPACK_IMPORTED_MODULE_1__[\"Database\"]({\n      url: await settings.get('database.url', '')\n    });\n    await database.connect();\n\n    if (true) {\n      await database.migrate();\n    }\n\n    const intercom = new _intercom__WEBPACK_IMPORTED_MODULE_2__[\"InterCom\"]({\n      url: await settings.get('intercom.url', '')\n    });\n    await intercom.start();\n    Object(_api_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(app);\n    Object(_api_graphql__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(app, {\n      dataSources: {\n        database,\n        intercom\n      }\n    });\n    instance._express = app;\n    return instance;\n  }\n\n  attachErrorHandler(app) {\n    // catching async unhandled rejections\n    process.on('unhandledRejection', err => {\n      logger.error('Unhandled rejection', err);\n    }).on('uncaughtException', err => {\n      logger.error('Uncaught exception', err);\n    }); // catching normal unhandled exceptions\n\n    app.use((err, req, res, next) => {\n      logger.error('Uncaught exception', err);\n      res.send('Nasty error'); // todo: explain here\n    });\n  }\n\n  static attachCORS(app, settings) {\n    const parameters = {\n      origin: (origin, cb) => {\n        // allow requests with no origin, like mobile apps or curl requests\n        if (!origin) {\n          return cb(null, true);\n        } // get cors settings on each hit, to be able to change it at the run-time\n\n\n        settings.get('network.cors', null).then(corsSettings => {\n          const origins = _.isne(corsSettings) ? corsSettings.split(',').map(x => x.trim()) : [];\n          let match = false;\n\n          if (_.iane(origins)) {\n            // we have CORS settings\n            match = origins.indexOf(origin) >= 0;\n          }\n\n          if (match) {\n            return cb(null, true);\n          } else {\n            return cb(new Error('CORS mismatch'), false); // todo: throw 403\n          }\n        }).catch(error => {\n          logger.error('Error occurred when checking CORS', error);\n          return cb(new Error('CORS error'), false); // todo: throw 500\n        });\n      }\n    };\n    app.use(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'cors'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(parameters));\n  }\n\n  async listen() {\n    const port = this._express.get('port');\n\n    const host = this._express.get('host');\n\n    return new Promise(resolve => {\n      this._server = this._express.listen({\n        port\n      }, () => {\n        logger.info(`🚀 API is ready at http://${host}:${port}`, !false);\n        resolve();\n      });\n    });\n  }\n\n  async launch() {\n    await this.listen();\n  }\n\n  async shutdown() {\n    if (this._server) {\n      return new Promise(resolve => {\n        this._server.close(resolve);\n      });\n    }\n  }\n\n  getExpress() {\n    return this._express;\n  }\n\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'ew-internals'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))[\"logger\"], __webpack_require__(/*! ./src/lib/lodash.js */ \"./src/lib/lodash.js\")[\"default\"]))\n\n//# sourceURL=webpack:///./src/lib/application.js?");

/***/ }),

/***/ "./src/lib/intercom.js":
/*!*****************************!*\
  !*** ./src/lib/intercom.js ***!
  \*****************************/
/*! exports provided: InterCom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InterCom\", function() { return InterCom; });\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'ioredis'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\nclass InterCom {\n  constructor({\n    url,\n    streamName = 'intercom'\n  } = {}) {\n    this.url = url;\n    this.streamName = streamName;\n    this.enabled = false;\n    this.commandConnection = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'ioredis'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(url);\n    this.pollConnection = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'ioredis'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(url);\n    this.onHandlers = {};\n  }\n\n  async start() {\n    this.enabled = true;\n\n    while (this.enabled) {\n      const items = await this.xread();\n      items.forEach(event => {\n        if (this.onHandlers[event.name]) {\n          this.onHandlers[event.name].forEach(handler => {\n            handler(event.value);\n          });\n        }\n      });\n    }\n  }\n\n  stop() {\n    this.enabled = false;\n  }\n\n  async send(name, value = '') {\n    this.commandConnection.xadd(this.streamName, '*', 'event_name', name, 'value', value);\n  }\n\n  on(eventName, fn) {\n    if (typeof fn === 'function') {\n      this.onHandlers[eventName] = this.onHandlers[eventName] || [];\n      this.onHandlers[eventName].push(fn);\n    }\n  }\n\n  off(eventName, fn) {// todo\n  }\n\n  async xread() {\n    return new Promise((resolve, reject) => {\n      this.pollConnection.xread('BLOCK', 0, 'STREAMS', this.streamName, 'S', (err, stream) => {\n        if (err) {\n          reject(err);\n        } else if (stream) {\n          const streamData = stream.find(streamResult => streamResult[0] === this.streamName);\n\n          if (streamData) {\n            const events = streamData[1];\n            resolve(events.map(event => ({\n              name: event[1][1],\n              value: event[1][3]\n            })));\n          }\n        }\n      });\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/lib/intercom.js?");

/***/ }),

/***/ "./src/lib/lodash.js":
/*!***************************!*\
  !*** ./src/lib/lodash.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'lodash.isstring'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'lodash.isobject'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n // import random from lodash.random';\n// import isNumber from lodash.isnumber';\n// import isFunction from lodash.isfunction';\n// import union from 'lodash.union';\n// import intersection from lodash.intersection';\n// import difference from 'lodash.difference';\n// import get from lodash.get';\n// import cloneDeep from lodash.clonedeep';\n// import deepFreeze from deep-freeze-node';\n// import isEqual from lodash.isequal';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  isArray: Array.isArray,\n  isObject: !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'lodash.isobject'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n  iane: arg => {\n    return Array.isArray(arg) && arg.length > 0;\n  },\n  ione: arg => {\n    return !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'lodash.isobject'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(arg) && Object.keys(arg).length > 0;\n  },\n  isne: arg => {\n    return !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'lodash.isstring'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(arg) && arg.length > 0;\n  }\n});\n\n//# sourceURL=webpack:///./src/lib/lodash.js?");

/***/ })

/******/ })));