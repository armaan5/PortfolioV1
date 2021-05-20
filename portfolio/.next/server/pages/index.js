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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ \"theme-ui\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/header */ \"./src/components/header.jsx\");\n/* harmony import */ var _src_components_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/hero */ \"./src/components/hero.jsx\");\n/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/data/data */ \"./src/data/data.js\");\n/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_data_data__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Dev/PortfolioV1/portfolio/pages/index.jsx\";\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\n\n\n\n\nconst Index = () => {\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_src_data_data__WEBPACK_IMPORTED_MODULE_4___default.a.Provider, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 3\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    sx: {\n      variant: 'containers.page'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_src_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_src_components_hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/NzBjNSJdLCJuYW1lcyI6WyJJbmRleCIsInZhcmlhbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxNQUFNO0FBQ2xCLFNBQ0EscURBQUMscURBQUQsQ0FBYSxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE1BQUUsRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBVixLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxxREFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURBO0FBUUQsQ0FURDs7QUFZZUQsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgSGVybyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9oZXJvJ1xuaW1wb3J0IFBhZ2VDb250ZXh0IGZyb20gJy4uL3NyYy9kYXRhL2RhdGEnXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICA8UGFnZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgPGRpdiBzeD17e3ZhcmlhbnQ6ICdjb250YWluZXJzLnBhZ2UnfX0+XG4gICAgICA8SGVhZGVyLz5cbiAgICAgIDxIZXJvLz5cbiAgICA8L2Rpdj5cbiAgPC9QYWdlQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ \"theme-ui\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Dev/PortfolioV1/portfolio/src/components/header.jsx\";\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\n\n\nconst Header = () => {\n  const [colorMode, setColorMode] = Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"useColorMode\"])();\n\n  const handleColorChange = () => {\n    setColorMode(colorMode === 'light' ? 'dark' : 'light');\n  };\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"header\", {\n    sx: {\n      variant: 'containers.header'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, \"Armaan Dhanoa\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    onClick: e => {\n      setColorMode(colorMode === 'light' ? 'dark' : 'light');\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, colorMode === 'light' ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaSun\"], {\n    size: 28,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 42\n    }\n  }) : Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaMoon\"], {\n    size: 28,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 63\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanN4PzQ1YmUiXSwibmFtZXMiOlsiSGVhZGVyIiwiY29sb3JNb2RlIiwic2V0Q29sb3JNb2RlIiwidXNlQ29sb3JNb2RlIiwiaGFuZGxlQ29sb3JDaGFuZ2UiLCJ2YXJpYW50IiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLFFBQU0sQ0FBQ0MsU0FBRCxFQUFZQyxZQUFaLElBQTRCQyw2REFBWSxFQUE5Qzs7QUFDQSxRQUFNQyxpQkFBaUIsR0FBRyxNQUFNO0FBQUVGLGdCQUFZLENBQUNELFNBQVMsS0FBSyxPQUFkLEdBQXdCLE1BQXhCLEdBQWlDLE9BQWxDLENBQVo7QUFBd0QsR0FBMUY7O0FBRUEsU0FDSTtBQUFRLE1BQUUsRUFBRTtBQUFFSSxhQUFPLEVBQUU7QUFBWCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLEVBRUk7QUFDSSxXQUFPLEVBQUdDLENBQUQsSUFBTztBQUNaSixrQkFBWSxDQUFDRCxTQUFTLEtBQUssT0FBZCxHQUF3QixNQUF4QixHQUFpQyxPQUFsQyxDQUFaO0FBQ0gsS0FITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUtBLFNBQVMsS0FBSyxPQUFkLEdBQXdCLHFEQUFDLG9EQUFEO0FBQU8sUUFBSSxFQUFFLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUF4QixHQUE2QyxxREFBQyxxREFBRDtBQUFRLFFBQUksRUFBRSxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKbEQsQ0FGSixDQURKO0FBWUgsQ0FoQkQ7O0FBa0JlRCxxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2hlYWRlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IHVzZUNvbG9yTW9kZSB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsgRmFTdW4sIEZhTW9vbiB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW2NvbG9yTW9kZSwgc2V0Q29sb3JNb2RlXSA9IHVzZUNvbG9yTW9kZSgpXG4gICAgY29uc3QgaGFuZGxlQ29sb3JDaGFuZ2UgPSAoKSA9PiB7IHNldENvbG9yTW9kZShjb2xvck1vZGUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnKSB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIHN4PXt7IHZhcmlhbnQ6ICdjb250YWluZXJzLmhlYWRlcicgfX0+XG4gICAgICAgICAgICA8aDI+QXJtYWFuIERoYW5vYTwvaDI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29sb3JNb2RlKGNvbG9yTW9kZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCcpXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAge2NvbG9yTW9kZSA9PT0gJ2xpZ2h0JyA/IDxGYVN1biBzaXplPXsyOH0vPiA6IDxGYU1vb24gc2l6ZT17Mjh9Lz59XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/header.jsx\n");

/***/ }),

/***/ "./src/components/hero.jsx":
/*!*********************************!*\
  !*** ./src/components/hero.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ \"theme-ui\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_me_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/me.jpg */ \"./public/me.jpg\");\n/* harmony import */ var _public_me_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_me_jpg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/data */ \"./src/data/data.js\");\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_data__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Dev/PortfolioV1/portfolio/src/components/hero.jsx\";\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\n\n\n\n\n\nconst Hero = () => {\n  const data = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_data_data__WEBPACK_IMPORTED_MODULE_4___default.a);\n  console.log(_data_data__WEBPACK_IMPORTED_MODULE_4___default.a);\n  console.log(data);\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    sx: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'space-around'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Image\"], {\n    src: _public_me_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,\n    sx: {\n      height: '250px',\n      borderRadius: '4px'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    sx: {\n      display: 'flex',\n      flexDirection: 'row'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    sx: {\n      color: 'primary'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 21\n    }\n  }, \"Hello\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 21\n    }\n  }, \", I'm Armaan\")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }, \"Recent grad from the University of North Texas and full-stack developer\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    sx: {\n      display: 'flex',\n      flexDirection: 'row'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"a\", {\n    href: \"https://github.com/armaan5\",\n    sx: {\n      color: 'inherit'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 21\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaGithub\"], {\n    size: 35,\n    sx: {\n      mr: '2em'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 25\n    }\n  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"a\", {\n    href: \"https://www.linkedin.com/in/armaandhanoa/\",\n    sx: {\n      color: 'inherit'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 21\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaLinkedin\"], {\n    size: 35,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 25\n    }\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZXJvLmpzeD8xM2M0Il0sIm5hbWVzIjpbIkhlcm8iLCJkYXRhIiwidXNlQ29udGV4dCIsIlBhZ2VDb250ZXh0IiwiY29uc29sZSIsImxvZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhdmF0YXIiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsIm1yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFDZixRQUFNQyxJQUFJLEdBQUdDLHdEQUFVLENBQUNDLGlEQUFELENBQXZCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixpREFBWjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjtBQUNBLFNBQ0k7QUFBSyxNQUFFLEVBQUU7QUFBRUssYUFBTyxFQUFFLE1BQVg7QUFBbUJDLG1CQUFhLEVBQUUsS0FBbEM7QUFBeUNDLG9CQUFjLEVBQUU7QUFBekQsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0kscURBQUMsOENBQUQ7QUFBTyxPQUFHLEVBQUVDLHFEQUFaO0FBQW9CLE1BQUUsRUFBRTtBQUFFQyxZQUFNLEVBQUUsT0FBVjtBQUFtQkMsa0JBQVksRUFBRTtBQUFqQyxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxNQUFFLEVBQUU7QUFBRUwsYUFBTyxFQUFFLE1BQVg7QUFBbUJDLG1CQUFhLEVBQUU7QUFBbEMsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxNQUFFLEVBQUU7QUFBRUssV0FBSyxFQUFFO0FBQVQsS0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLENBREosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtFQUxKLEVBTUk7QUFBSyxNQUFFLEVBQUU7QUFBRU4sYUFBTyxFQUFFLE1BQVg7QUFBbUJDLG1CQUFhLEVBQUU7QUFBbEMsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxRQUFJLEVBQUMsNEJBQVI7QUFBcUMsTUFBRSxFQUFFO0FBQUNLLFdBQUssRUFBRTtBQUFSLEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxxREFBQyx1REFBRDtBQUFVLFFBQUksRUFBRSxFQUFoQjtBQUFvQixNQUFFLEVBQUU7QUFBQ0MsUUFBRSxFQUFFO0FBQUwsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSTtBQUFHLFFBQUksRUFBQywyQ0FBUjtBQUFvRCxNQUFFLEVBQUU7QUFBQ0QsV0FBSyxFQUFFO0FBQVIsS0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLHFEQUFDLHlEQUFEO0FBQVksUUFBSSxFQUFFLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUpKLENBTkosQ0FGSixDQURKO0FBb0JILENBeEJEOztBQTBCZVosbUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZXJvLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZhR2l0aHViLCBGYUxpbmtlZGluIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXG5cbmltcG9ydCBhdmF0YXIgZnJvbSAnLi4vLi4vcHVibGljL21lLmpwZydcbmltcG9ydCBQYWdlQ29udGV4dCBmcm9tICcuLi9kYXRhL2RhdGEnXG5cbmNvbnN0IEhlcm8gPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHVzZUNvbnRleHQoUGFnZUNvbnRleHQpXG4gICAgY29uc29sZS5sb2coUGFnZUNvbnRleHQpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyB9fT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2F2YXRhcn0gc3g9e3sgaGVpZ2h0OiAnMjUwcHgnLCBib3JkZXJSYWRpdXM6ICc0cHgnIH19IC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIHN4PXt7IGNvbG9yOiAncHJpbWFyeScgfX0+SGVsbG88L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDI+LCBJJ20gQXJtYWFuPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDM+UmVjZW50IGdyYWQgZnJvbSB0aGUgVW5pdmVyc2l0eSBvZiBOb3J0aCBUZXhhcyBhbmQgZnVsbC1zdGFjayBkZXZlbG9wZXI8L2gzPlxuICAgICAgICAgICAgICAgIDxkaXYgc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYXJtYWFuNVwiIHN4PXt7Y29sb3I6ICdpbmhlcml0J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhR2l0aHViIHNpemU9ezM1fSBzeD17e21yOiAnMmVtJ319Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FybWFhbmRoYW5vYS9cIiBzeD17e2NvbG9yOiAnaW5oZXJpdCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYUxpbmtlZGluIHNpemU9ezM1fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/hero.jsx\n");

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nconst pageData = {\n  hero: 'Recent grad from the University of North Texas and full-stack developer',\n  linkedin: 'https://www.linkedin.com/in/armaandhanoa/',\n  github: 'https://github.com/armaan5'\n};\nconst PageContext = /*#__PURE__*/(0, _react.createContext)(pageData);\nconsole.log(PageContext);\nmodule.exports = PageContext;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9kYXRhLmpzP2Q1YzciXSwibmFtZXMiOlsicGFnZURhdGEiLCJoZXJvIiwibGlua2VkaW4iLCJnaXRodWIiLCJQYWdlQ29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUdBLE1BQU1BLFFBQVEsR0FBRztBQUNiQyxNQUFJLEVBQUUseUVBRE87QUFFYkMsVUFBUSxFQUFFLDJDQUZHO0FBR2JDLFFBQU0sRUFBRTtBQUhLLENBQWpCO0FBTUEsTUFBTUMsV0FBVyxnQkFBRywwQkFBY0osUUFBZCxDQUFwQjtBQUNBSyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBWjtBQUNBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLFdBQWpCIiwiZmlsZSI6Ii4vc3JjL2RhdGEvZGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcblxuXG5jb25zdCBwYWdlRGF0YSA9IHtcbiAgICBoZXJvOiAnUmVjZW50IGdyYWQgZnJvbSB0aGUgVW5pdmVyc2l0eSBvZiBOb3J0aCBUZXhhcyBhbmQgZnVsbC1zdGFjayBkZXZlbG9wZXInLFxuICAgIGxpbmtlZGluOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FybWFhbmRoYW5vYS8nLFxuICAgIGdpdGh1YjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcm1hYW41Jyxcbn1cblxuY29uc3QgUGFnZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHBhZ2VEYXRhKVxuY29uc29sZS5sb2coUGFnZUNvbnRleHQpXG5tb2R1bGUuZXhwb3J0cyA9IFBhZ2VDb250ZXh0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data/data.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiP2Q2NmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/fa\n");

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