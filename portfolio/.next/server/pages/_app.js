module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ \"theme-ui\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme */ \"./theme.js\");\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Dev/PortfolioV1/portfolio/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"ThemeProvider\"], {\n    theme: _theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEdBQVQsQ0FBYTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBYixFQUF1QztBQUNwRCxTQUNFLHFEQUFDLHNEQUFEO0FBQWUsU0FBSyxFQUFFQyw4Q0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxTQUFELGtDQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGLENBREY7QUFPRCIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L2Rpdj4gICAgICBcbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./theme.js":
/*!******************!*\
  !*** ./theme.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _theme_ui_presets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/presets */ \"@theme-ui/presets\");\n/* harmony import */ var _theme_ui_presets__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_theme_ui_presets__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst theme = _objectSpread(_objectSpread({}, _theme_ui_presets__WEBPACK_IMPORTED_MODULE_0__[\"swiss\"]), {}, {\n  colors: _objectSpread({}, _theme_ui_presets__WEBPACK_IMPORTED_MODULE_0__[\"swiss\"].colors),\n  containers: {\n    page: {\n      width: '100%',\n      display: 'flex',\n      flexDirection: 'column',\n      m: 0,\n      mx: 'auto',\n      px: '20em'\n    },\n    header: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'space-between',\n      my: '2em',\n      px: '4em'\n    }\n  },\n  styles: _objectSpread({}, _theme_ui_presets__WEBPACK_IMPORTED_MODULE_0__[\"swiss\"].styles)\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZS5qcz82OTczIl0sIm5hbWVzIjpbInRoZW1lIiwic3dpc3MiLCJjb2xvcnMiLCJjb250YWluZXJzIiwicGFnZSIsIndpZHRoIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtIiwibXgiLCJweCIsImhlYWRlciIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm15Iiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxLQUFLLG1DQUNOQyx1REFETTtBQUVUQyxRQUFNLG9CQUNERCx1REFBSyxDQUFDQyxNQURMLENBRkc7QUFLVEMsWUFBVSxFQUFFO0FBQ1ZDLFFBQUksRUFBRTtBQUNKQyxXQUFLLEVBQUUsTUFESDtBQUVKQyxhQUFPLEVBQUUsTUFGTDtBQUdKQyxtQkFBYSxFQUFFLFFBSFg7QUFJSkMsT0FBQyxFQUFFLENBSkM7QUFLSkMsUUFBRSxFQUFFLE1BTEE7QUFNSkMsUUFBRSxFQUFFO0FBTkEsS0FESTtBQVNWQyxVQUFNLEVBQUU7QUFDTkwsYUFBTyxFQUFFLE1BREg7QUFFTk0sZ0JBQVUsRUFBRSxRQUZOO0FBR05DLG9CQUFjLEVBQUUsZUFIVjtBQUlOQyxRQUFFLEVBQUUsS0FKRTtBQUtOSixRQUFFLEVBQUU7QUFMRTtBQVRFLEdBTEg7QUFzQlRLLFFBQU0sb0JBQ0RkLHVEQUFLLENBQUNjLE1BREw7QUF0QkcsRUFBWDs7QUEwQmVmLG9FQUFmIiwiZmlsZSI6Ii4vdGhlbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzd2lzcyB9IGZyb20gJ0B0aGVtZS11aS9wcmVzZXRzJ1xuXG5jb25zdCB0aGVtZSA9IHtcbiAgLi4uc3dpc3MsXG4gIGNvbG9yczoge1xuICAgIC4uLnN3aXNzLmNvbG9ycyxcbiAgfSxcbiAgY29udGFpbmVyczoge1xuICAgIHBhZ2U6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIG06IDAsXG4gICAgICBteDogJ2F1dG8nLFxuICAgICAgcHg6ICcyMGVtJ1xuICAgIH0sXG4gICAgaGVhZGVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICBteTogJzJlbScsXG4gICAgICBweDogJzRlbSdcbiAgICB9LFxuICB9LFxuICBzdHlsZXM6IHtcbiAgICAuLi5zd2lzcy5zdHlsZXNcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgdGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./theme.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@theme-ui/presets":
/*!************************************!*\
  !*** external "@theme-ui/presets" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@theme-ui/presets\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdGhlbWUtdWkvcHJlc2V0c1wiP2QwOTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHRoZW1lLXVpL3ByZXNldHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdGhlbWUtdWkvcHJlc2V0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@theme-ui/presets\n");

/***/ }),

/***/ "theme-ui":
/*!***************************!*\
  !*** external "theme-ui" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"theme-ui\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aGVtZS11aVwiP2I0NGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoidGhlbWUtdWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aGVtZS11aVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///theme-ui\n");

/***/ })

/******/ });