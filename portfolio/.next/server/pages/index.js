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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ \"theme-ui\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/header */ \"./src/components/header.jsx\");\n/* harmony import */ var _src_components_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/hero */ \"./src/components/hero.jsx\");\n/* harmony import */ var _src_components_skills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/skills */ \"./src/components/skills.jsx\");\n/* harmony import */ var _src_components_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/projects */ \"./src/components/projects.jsx\");\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Dev/PortfolioV1/PortfolioV1/portfolio/pages/index.jsx\";\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\n\n\n\n\nconst Index = () => {\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    sx: {\n      variant: 'containers.page'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_src_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_src_components_hero__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_src_components_skills__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_src_components_projects__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/NzBjNSJdLCJuYW1lcyI6WyJJbmRleCIsInZhcmlhbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUNsQixTQUNFO0FBQUssTUFBRSxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLHFEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLHFEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFLHFEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGO0FBUUQsQ0FURDs7QUFZZUQsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSdcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgSGVybyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9oZXJvJ1xuaW1wb3J0IFNraWxscyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9za2lsbHMnXG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMnXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3g9e3sgdmFyaWFudDogJ2NvbnRhaW5lcnMucGFnZScgfX0+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8SGVybyAvPlxuICAgICAgPFNraWxscy8+XG4gICAgICA8UHJvamVjdHMvPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ \"theme-ui\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Dev/PortfolioV1/PortfolioV1/portfolio/src/components/header.jsx\";\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\n\n\nconst Header = () => {\n  const [colorMode, setColorMode] = Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"useColorMode\"])();\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"header\", {\n    sx: {\n      variant: 'containers.header',\n      ':hover': {\n        cursor: 'pointer',\n        color: 'primary'\n      }\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    onClick: e => {\n      setColorMode(colorMode === 'light' ? 'dark' : 'light');\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, colorMode === 'light' ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaSun\"], {\n    size: 28,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 42\n    }\n  }) : Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaMoon\"], {\n    size: 28,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 64\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanN4PzQ1YmUiXSwibmFtZXMiOlsiSGVhZGVyIiwiY29sb3JNb2RlIiwic2V0Q29sb3JNb2RlIiwidXNlQ29sb3JNb2RlIiwidmFyaWFudCIsImN1cnNvciIsImNvbG9yIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLFFBQU0sQ0FBQ0MsU0FBRCxFQUFZQyxZQUFaLElBQTRCQyw2REFBWSxFQUE5QztBQUVBLFNBQ0k7QUFBUSxNQUFFLEVBQUU7QUFDUkMsYUFBTyxFQUFFLG1CQUREO0FBQ3NCLGdCQUFVO0FBQ3BDQyxjQUFNLEVBQUUsU0FENEI7QUFFcENDLGFBQUssRUFBRTtBQUY2QjtBQURoQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNSTtBQUNJLFdBQU8sRUFBR0MsQ0FBRCxJQUFPO0FBQ1pMLGtCQUFZLENBQUNELFNBQVMsS0FBSyxPQUFkLEdBQXdCLE1BQXhCLEdBQWlDLE9BQWxDLENBQVo7QUFDSCxLQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJS0EsU0FBUyxLQUFLLE9BQWQsR0FBd0IscURBQUMsb0RBQUQ7QUFBTyxRQUFJLEVBQUUsRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXhCLEdBQThDLHFEQUFDLHFEQUFEO0FBQVEsUUFBSSxFQUFFLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpuRCxDQU5KLENBREo7QUFnQkgsQ0FuQkQ7O0FBcUJlRCxxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2hlYWRlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IHVzZUNvbG9yTW9kZSB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsgRmFTdW4sIEZhTW9vbiB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW2NvbG9yTW9kZSwgc2V0Q29sb3JNb2RlXSA9IHVzZUNvbG9yTW9kZSgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIHN4PXt7XG4gICAgICAgICAgICB2YXJpYW50OiAnY29udGFpbmVycy5oZWFkZXInLCAnOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICAgICAgICB9XG4gICAgICAgIH19PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbG9yTW9kZShjb2xvck1vZGUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnKVxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIHtjb2xvck1vZGUgPT09ICdsaWdodCcgPyA8RmFTdW4gc2l6ZT17Mjh9IC8+IDogPEZhTW9vbiBzaXplPXsyOH0gLz59XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/header.jsx\n");

/***/ }),

/***/ "./src/components/hero.jsx":
/*!*********************************!*\
  !*** ./src/components/hero.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ \"theme-ui\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_me_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/me.jpg */ \"./public/me.jpg\");\n/* harmony import */ var _public_me_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_me_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/data */ \"./src/data/data.js\");\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_data__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Dev/PortfolioV1/PortfolioV1/portfolio/src/components/hero.jsx\";\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\n\n\n\n\nconst Hero = () => {\n  console.log(_data_data__WEBPACK_IMPORTED_MODULE_3___default.a);\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    sx: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'space-evenly',\n      '@media screen and (max-width: 1000px)': {\n        flexDirection: 'column'\n      }\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Image\"], {\n    src: _public_me_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,\n    sx: {\n      variant: 'containers.image',\n      '@media screen and (max-width: 1000px)': {\n        objectFit: 'contain'\n      }\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    sx: {\n      display: 'flex',\n      flexDirection: 'row'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    sx: {\n      color: 'primary'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 21\n    }\n  }, \"Hello\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 21\n    }\n  }, \", I'm Armaan\")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 17\n    }\n  }, _data_data__WEBPACK_IMPORTED_MODULE_3___default.a.hero), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    sx: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'space-evenly',\n      alignItems: 'center'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"a\", {\n    href: _data_data__WEBPACK_IMPORTED_MODULE_3___default.a.github,\n    sx: {\n      color: 'inherit',\n      ':hover': {\n        color: 'primary'\n      }\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 21\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaGithub\"], {\n    size: 35,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 25\n    }\n  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"a\", {\n    href: _data_data__WEBPACK_IMPORTED_MODULE_3___default.a.linkedin,\n    sx: {\n      color: 'inherit',\n      ':hover': {\n        color: 'primary'\n      }\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 21\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaLinkedin\"], {\n    size: 35,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 25\n    }\n  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"a\", {\n    href: \"mailto:dhanoa.armaan@outlook.com\",\n    sx: {\n      color: 'inherit',\n      ':hover': {\n        color: 'primary'\n      }\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 21\n    }\n  }, \"dhanoa.armaan@outlook.com\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZXJvLmpzeD8xM2M0Il0sIm5hbWVzIjpbIkhlcm8iLCJjb25zb2xlIiwibG9nIiwicGFnZURhdGEiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYXZhdGFyIiwidmFyaWFudCIsIm9iamVjdEZpdCIsImNvbG9yIiwiaGVybyIsImFsaWduSXRlbXMiLCJnaXRodWIiLCJsaW5rZWRpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFDZkMsU0FBTyxDQUFDQyxHQUFSLENBQVlDLGlEQUFaO0FBQ0EsU0FDSTtBQUFLLE1BQUUsRUFBRTtBQUNMQyxhQUFPLEVBQUUsTUFESjtBQUNZQyxtQkFBYSxFQUFFLEtBRDNCO0FBQ2tDQyxvQkFBYyxFQUFFLGNBRGxEO0FBQ2tFLCtDQUF5QztBQUM1R0QscUJBQWEsRUFBRTtBQUQ2RjtBQUQzRyxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSSxxREFBQyw4Q0FBRDtBQUFPLE9BQUcsRUFBRUUscURBQVo7QUFBb0IsTUFBRSxFQUFFO0FBQ3BCQyxhQUFPLEVBQUUsa0JBRFc7QUFDUywrQ0FBeUM7QUFDbEVDLGlCQUFTLEVBQUU7QUFEdUQ7QUFEbEQsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBVUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssTUFBRSxFQUFFO0FBQUVMLGFBQU8sRUFBRSxNQUFYO0FBQW1CQyxtQkFBYSxFQUFFO0FBQWxDLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksTUFBRSxFQUFFO0FBQUVLLFdBQUssRUFBRTtBQUFULEtBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixDQURKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLUCxpREFBUSxDQUFDUSxJQUFkLENBTEosRUFNSTtBQUFLLE1BQUUsRUFBRTtBQUFFUCxhQUFPLEVBQUUsTUFBWDtBQUFtQkMsbUJBQWEsRUFBRSxLQUFsQztBQUF5Q0Msb0JBQWMsRUFBRSxjQUF6RDtBQUF5RU0sZ0JBQVUsRUFBRTtBQUFyRixLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLFFBQUksRUFBRVQsaURBQVEsQ0FBQ1UsTUFBbEI7QUFBMEIsTUFBRSxFQUFFO0FBQzFCSCxXQUFLLEVBQUUsU0FEbUI7QUFDUixnQkFBVTtBQUN4QkEsYUFBSyxFQUFFO0FBRGlCO0FBREYsS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJLHFEQUFDLHVEQUFEO0FBQVUsUUFBSSxFQUFFLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQURKLEVBUUk7QUFBRyxRQUFJLEVBQUVQLGlEQUFRLENBQUNXLFFBQWxCO0FBQTRCLE1BQUUsRUFBRTtBQUM1QkosV0FBSyxFQUFFLFNBRHFCO0FBQ1YsZ0JBQVU7QUFDeEJBLGFBQUssRUFBRTtBQURpQjtBQURBLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSSxxREFBQyx5REFBRDtBQUFZLFFBQUksRUFBRSxFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosQ0FSSixFQWVJO0FBQUcsUUFBSSxFQUFDLGtDQUFSO0FBQTJDLE1BQUUsRUFBRTtBQUMzQ0EsV0FBSyxFQUFFLFNBRG9DO0FBQ3pCLGdCQUFVO0FBQ3hCQSxhQUFLLEVBQUU7QUFEaUI7QUFEZSxLQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQWZKLENBTkosQ0FWSixDQURKO0FBMkNILENBN0NEOztBQStDZVYsbUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZXJvLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IEZhR2l0aHViLCBGYUxpbmtlZGluIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXG5cbmltcG9ydCBhdmF0YXIgZnJvbSAnLi4vLi4vcHVibGljL21lLmpwZydcbmltcG9ydCBwYWdlRGF0YSBmcm9tICcuLi9kYXRhL2RhdGEnXG5cbmNvbnN0IEhlcm8gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2cocGFnZURhdGEpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzeD17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLCAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSc6IHtcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9fT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2F2YXRhcn0gc3g9e3tcbiAgICAgICAgICAgICAgICB2YXJpYW50OiAnY29udGFpbmVycy5pbWFnZScsICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpJzoge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb250YWluJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIHN4PXt7IGNvbG9yOiAncHJpbWFyeScgfX0+SGVsbG88L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDI+LCBJJ20gQXJtYWFuPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDM+e3BhZ2VEYXRhLmhlcm99PC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3BhZ2VEYXRhLmdpdGh1Yn0gc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnaW5oZXJpdCcsICc6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFHaXRodWIgc2l6ZT17MzV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cGFnZURhdGEubGlua2VkaW59IHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2luaGVyaXQnLCAnOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhTGlua2VkaW4gc2l6ZT17MzV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpkaGFub2EuYXJtYWFuQG91dGxvb2suY29tXCIgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnaW5oZXJpdCcsICc6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBkaGFub2EuYXJtYWFuQG91dGxvb2suY29tXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/hero.jsx\n");

/***/ }),

/***/ "./src/components/projects.jsx":
/*!*************************************!*\
  !*** ./src/components/projects.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ \"theme-ui\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Dev/PortfolioV1/PortfolioV1/portfolio/src/components/projects.jsx\";\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\nconst Projects = () => {\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    sx: {\n      mt: '2em',\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }, \"Projects\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }, \"Under construction \\uD83D\\uDC77\\uD83C\\uDFFD\\u200D\\u2642\\uFE0F\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }, \"Stay tuned!\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy5qc3g/YzEyOCJdLCJuYW1lcyI6WyJQcm9qZWN0cyIsIm10IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFDbkIsU0FDSTtBQUFLLE1BQUUsRUFBRTtBQUFDQyxRQUFFLEVBQUUsS0FBTDtBQUFZQyxhQUFPLEVBQUUsTUFBckI7QUFBNkJDLG1CQUFhLEVBQUUsUUFBNUM7QUFBc0RDLGdCQUFVLEVBQUU7QUFBbEUsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUVBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLENBREo7QUFPSCxDQVJEOztBQVVlSix1RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3Byb2plY3RzLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJ1xuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN4PXt7bXQ6ICcyZW0nLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgPGgyPlByb2plY3RzPC9oMj5cbiAgICAgICAgICAgIDxwPlVuZGVyIGNvbnN0cnVjdGlvbiDwn5G38J+PveKAjeKZgu+4jzwvcD5cbiAgICAgICAgICAgIDxwPlN0YXkgdHVuZWQhPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/projects.jsx\n");

/***/ }),

/***/ "./src/components/skills.jsx":
/*!***********************************!*\
  !*** ./src/components/skills.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ \"theme-ui\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Dev/PortfolioV1/PortfolioV1/portfolio/src/components/skills.jsx\";\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\n\nconst Skills = () => {\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    sx: {\n      mt: '2em',\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    sx: {\n      mb: '2em'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }, \"Languages/Tools\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    sx: {\n      variant: 'containers.skills'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaReact\"], {\n    size: 40,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 17\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaNodeJs\"], {\n    size: 40,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaCss3\"], {\n    size: 40,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaSwift\"], {\n    size: 40,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaJava\"], {\n    size: 40,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaAws\"], {\n    size: 40,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 17\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9za2lsbHMuanN4PzNiMjciXSwibmFtZXMiOlsiU2tpbGxzIiwibXQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtYiIsInZhcmlhbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDakIsU0FDSTtBQUFLLE1BQUUsRUFBRTtBQUFDQyxRQUFFLEVBQUUsS0FBTDtBQUFZQyxhQUFPLEVBQUUsTUFBckI7QUFBNkJDLG1CQUFhLEVBQUUsUUFBNUM7QUFBc0RDLGdCQUFVLEVBQUU7QUFBbEUsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxNQUFFLEVBQUU7QUFBRUMsUUFBRSxFQUFFO0FBQU4sS0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLEVBRUk7QUFBSyxNQUFFLEVBQUU7QUFBQ0MsYUFBTyxFQUFFO0FBQVYsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0kscURBQUMsc0RBQUQ7QUFBUyxRQUFJLEVBQUUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxxREFBQyx1REFBRDtBQUFVLFFBQUksRUFBRSxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSSxxREFBQyxxREFBRDtBQUFRLFFBQUksRUFBRSxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJLHFEQUFDLHNEQUFEO0FBQVMsUUFBSSxFQUFFLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0kscURBQUMscURBQUQ7QUFBUSxRQUFJLEVBQUUsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosRUFNSSxxREFBQyxvREFBRDtBQUFPLFFBQUksRUFBRSxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixDQUZKLENBREo7QUFhSCxDQWREOztBQWdCZU4scUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9za2lsbHMuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyBGYVJlYWN0LCBGYU5vZGVKcywgRmFDc3MzLCBGYVN3aWZ0LCBGYUphdmEsIEZhQXdzIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXG5cbmNvbnN0IFNraWxscyA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgc3g9e3ttdDogJzJlbScsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICA8aDIgc3g9e3sgbWI6ICcyZW0nfX0+TGFuZ3VhZ2VzL1Rvb2xzPC9oMj5cbiAgICAgICAgICAgIDxkaXYgc3g9e3t2YXJpYW50OiAnY29udGFpbmVycy5za2lsbHMnfX0+XG4gICAgICAgICAgICAgICAgPEZhUmVhY3Qgc2l6ZT17NDB9Lz5cbiAgICAgICAgICAgICAgICA8RmFOb2RlSnMgc2l6ZT17NDB9Lz5cbiAgICAgICAgICAgICAgICA8RmFDc3MzIHNpemU9ezQwfS8+XG4gICAgICAgICAgICAgICAgPEZhU3dpZnQgc2l6ZT17NDB9Lz5cbiAgICAgICAgICAgICAgICA8RmFKYXZhIHNpemU9ezQwfS8+XG4gICAgICAgICAgICAgICAgPEZhQXdzIHNpemU9ezQwfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/skills.jsx\n");

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const pageData = {\n  hero: 'Recent grad from the University of North Texas and aspiring full-stack developer. I like to keep things simple.',\n  linkedin: 'https://www.linkedin.com/in/armaandhanoa/',\n  github: 'https://github.com/armaan5'\n};\nmodule.exports = pageData;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9kYXRhLmpzP2Q1YzciXSwibmFtZXMiOlsicGFnZURhdGEiLCJoZXJvIiwibGlua2VkaW4iLCJnaXRodWIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFDQSxNQUFNQSxRQUFRLEdBQUc7QUFDYkMsTUFBSSxFQUFFLGlIQURPO0FBRWJDLFVBQVEsRUFBRSwyQ0FGRztBQUdiQyxRQUFNLEVBQUU7QUFISyxDQUFqQjtBQU1BQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJMLFFBQWpCIiwiZmlsZSI6Ii4vc3JjL2RhdGEvZGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgcGFnZURhdGEgPSB7XG4gICAgaGVybzogJ1JlY2VudCBncmFkIGZyb20gdGhlIFVuaXZlcnNpdHkgb2YgTm9ydGggVGV4YXMgYW5kIGFzcGlyaW5nIGZ1bGwtc3RhY2sgZGV2ZWxvcGVyLiBJIGxpa2UgdG8ga2VlcCB0aGluZ3Mgc2ltcGxlLicsXG4gICAgbGlua2VkaW46ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYXJtYWFuZGhhbm9hLycsXG4gICAgZ2l0aHViOiAnaHR0cHM6Ly9naXRodWIuY29tL2FybWFhbjUnLFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhZ2VEYXRhOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data/data.js\n");

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