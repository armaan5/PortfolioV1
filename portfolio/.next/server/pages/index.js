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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ \"theme-ui\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/header */ \"./src/components/header.jsx\");\n/* harmony import */ var _src_components_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/hero */ \"./src/components/hero.jsx\");\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Dev/PortfolioV1/portfolio/pages/index.jsx\";\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\n\n\nconst Index = ({\n  content\n}) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n  sx: {\n    height: `calc(100vh - 60px)`\n  },\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 3\n  }\n}, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n  sx: {\n    variant: 'containers.page'\n  },\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }\n}, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_src_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 7\n  }\n}), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_src_components_hero__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 7\n  }\n})));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nfunction getStaticProps() {\n  // get data from CMS\n  return {\n    props: {\n      content: {\n        title: 'Hey, I\\'m Armaan!'\n      }\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/NzBjNSJdLCJuYW1lcyI6WyJJbmRleCIsImNvbnRlbnQiLCJoZWlnaHQiLCJ2YXJpYW50IiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9wcyIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFFO0FBQUNDO0FBQUQsQ0FBRixLQUNaO0FBQUssSUFBRSxFQUFFO0FBQUVDLFVBQU0sRUFBRztBQUFYLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssSUFBRSxFQUFFO0FBQUNDLFdBQU8sRUFBRTtBQUFWLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLHFEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUVFLHFEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixDQURGLENBREY7O0FBVWVILG9FQUFmO0FBRU8sU0FBU0ksY0FBVCxHQUEwQjtBQUMvQjtBQUVBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xKLGFBQU8sRUFBRTtBQUNQSyxhQUFLLEVBQUU7QUFEQTtBQURKO0FBREYsR0FBUDtBQU9EIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCBIZXJvIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL2hlcm8nXG5cbmNvbnN0IEluZGV4ID0gKCB7Y29udGVudH0gKSA9PiAoXG4gIDxkaXYgc3g9e3sgaGVpZ2h0OiBgY2FsYygxMDB2aCAtIDYwcHgpYH19PlxuICAgIDxkaXYgc3g9e3t2YXJpYW50OiAnY29udGFpbmVycy5wYWdlJ319PlxuICAgICAgPEhlYWRlci8+XG4gICAgICA8SGVyby8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PiBcbilcblxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIGdldCBkYXRhIGZyb20gQ01TXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY29udGVudDoge1xuICAgICAgICB0aXRsZTogJ0hleSwgSVxcJ20gQXJtYWFuISdcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "./public/me.jpg":
/*!***********************!*\
  !*** ./public/me.jpg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/me-148ee677272ef0bb497494884d777216.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvbWUuanBnPzM1OWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9wdWJsaWMvbWUuanBnLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21lLTE0OGVlNjc3MjcyZWYwYmI0OTc0OTQ4ODRkNzc3MjE2LmpwZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/me.jpg\n");

/***/ }),

/***/ "./src/components/header.jsx":
/*!***********************************!*\
  !*** ./src/components/header.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ \"theme-ui\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Dev/PortfolioV1/portfolio/src/components/header.jsx\";\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\nconst Header = () => {\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"header\", {\n    sx: {\n      variant: 'containers.header'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }, \"Armaan Dhanoa\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }, \"light/dark\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanN4PzQ1YmUiXSwibmFtZXMiOlsiSGVhZGVyIiwidmFyaWFudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLFNBQ0k7QUFBUSxNQUFFLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosQ0FESjtBQU1ILENBUEQ7O0FBU2VELHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJ1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8aGVhZGVyIHN4PXt7IHZhcmlhbnQ6ICdjb250YWluZXJzLmhlYWRlcid9fT5cbiAgICAgICAgICAgIDxoMj5Bcm1hYW4gRGhhbm9hPC9oMj5cbiAgICAgICAgICAgIDxwPmxpZ2h0L2Rhcms8L3A+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/header.jsx\n");

/***/ }),

/***/ "./src/components/hero.jsx":
/*!*********************************!*\
  !*** ./src/components/hero.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ \"theme-ui\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_me_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/me.jpg */ \"./public/me.jpg\");\n/* harmony import */ var _public_me_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_me_jpg__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Dev/PortfolioV1/portfolio/src/components/hero.jsx\";\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\n\n\nconst Hero = () => {\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    sx: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'space-around'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Image\"], {\n    src: _public_me_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,\n    sx: {\n      height: '250px',\n      borderRadius: '4px'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 17\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    sx: {\n      display: 'flex',\n      flexDirection: 'row'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 21\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    sx: {\n      color: 'primary'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 25\n    }\n  }, \"Hello\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 25\n    }\n  }, \", I'm Armaan\")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 21\n    }\n  }, \"Recent grad from the University of North Texas, and aspiring full-stack developer\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZXJvLmpzeD8xM2M0Il0sIm5hbWVzIjpbIkhlcm8iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYXZhdGFyIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUNmLFNBQ1E7QUFBSyxNQUFFLEVBQUU7QUFBQ0MsYUFBTyxFQUFFLE1BQVY7QUFBa0JDLG1CQUFhLEVBQUUsS0FBakM7QUFBd0NDLG9CQUFjLEVBQUU7QUFBeEQsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0kscURBQUMsOENBQUQ7QUFBTyxPQUFHLEVBQUVDLHFEQUFaO0FBQW9CLE1BQUUsRUFBRTtBQUFDQyxZQUFNLEVBQUUsT0FBVDtBQUFrQkMsa0JBQVksRUFBRTtBQUFoQyxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxNQUFFLEVBQUU7QUFBQ0wsYUFBTyxFQUFFLE1BQVY7QUFBa0JDLG1CQUFhLEVBQUU7QUFBakMsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxNQUFFLEVBQUU7QUFBQ0ssV0FBSyxFQUFFO0FBQVIsS0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLENBREosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlGQUxKLENBRkosQ0FEUjtBQVlILENBYkQ7O0FBZWVQLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvaGVyby5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgYXZhdGFyIGZyb20gJy4uLy4uL3B1YmxpYy9tZS5qcGcnXG5cbmNvbnN0IEhlcm8gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3g9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCd9fT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXthdmF0YXJ9IHN4PXt7aGVpZ2h0OiAnMjUwcHgnLCBib3JkZXJSYWRpdXM6ICc0cHgnfX0vPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3g9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3g9e3tjb2xvcjogJ3ByaW1hcnknfX0+SGVsbG88L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPiwgSSdtIEFybWFhbjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDM+UmVjZW50IGdyYWQgZnJvbSB0aGUgVW5pdmVyc2l0eSBvZiBOb3J0aCBUZXhhcywgYW5kIGFzcGlyaW5nIGZ1bGwtc3RhY2sgZGV2ZWxvcGVyPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZXJvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/hero.jsx\n");

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