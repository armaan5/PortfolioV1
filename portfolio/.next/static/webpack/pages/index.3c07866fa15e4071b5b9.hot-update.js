webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/header.jsx":
/*!***********************************!*\
  !*** ./src/components/header.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_armaandhanoa_Documents_Dev_PortfolioV1_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/theme-ui.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Dev/PortfolioV1/portfolio/src/components/header.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var _useColorMode = Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"useColorMode\"])(),\n      _useColorMode2 = Object(_Users_armaandhanoa_Documents_Dev_PortfolioV1_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useColorMode, 2),\n      colorMode = _useColorMode2[0],\n      setColorMode = _useColorMode2[1];\n\n  var handleColorChange = function handleColorChange() {\n    setColorMode(colorMode === 'light' ? 'dark' : 'light');\n  };\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"header\", {\n    sx: {\n      variant: 'containers.header'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, \"Armaan Dhanoa\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"div\", {\n    onClick: function onClick(e) {\n      setColorMode(colorMode === 'light' ? 'dark' : 'light');\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, colorMode === 'light' ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaSun\"], {\n    size: 28,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 42\n    }\n  }) : Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaMoon\"], {\n    size: 28,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 63\n    }\n  })));\n};\n\n_s(Header, \"Cg19MR8e07Q3SRC3E07ExjOIoZ8=\", false, function () {\n  return [theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"useColorMode\"]];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzeD80NWJlIl0sIm5hbWVzIjpbIkhlYWRlciIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsInNldENvbG9yTW9kZSIsImhhbmRsZUNvbG9yQ2hhbmdlIiwidmFyaWFudCIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsc0JBQ2lCQyw2REFBWSxFQUQ3QjtBQUFBO0FBQUEsTUFDVkMsU0FEVTtBQUFBLE1BQ0NDLFlBREQ7O0FBRWpCLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUFFRCxnQkFBWSxDQUFDRCxTQUFTLEtBQUssT0FBZCxHQUF3QixNQUF4QixHQUFpQyxPQUFsQyxDQUFaO0FBQXdELEdBQTFGOztBQUVBLFNBQ0k7QUFBUSxNQUFFLEVBQUU7QUFBRUcsYUFBTyxFQUFFO0FBQVgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUVJO0FBQ0ksV0FBTyxFQUFFLGlCQUFDQyxDQUFELEVBQU87QUFDWkgsa0JBQVksQ0FBQ0QsU0FBUyxLQUFLLE9BQWQsR0FBd0IsTUFBeEIsR0FBaUMsT0FBbEMsQ0FBWjtBQUNILEtBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlLQSxTQUFTLEtBQUssT0FBZCxHQUF3QixxREFBQyxvREFBRDtBQUFPLFFBQUksRUFBRSxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBeEIsR0FBNkMscURBQUMscURBQUQ7QUFBUSxRQUFJLEVBQUUsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSmxELENBRkosQ0FESjtBQVlILENBaEJEOztHQUFNRixNO1VBQ2dDQyxxRDs7O0tBRGhDRCxNO0FBa0JTQSxxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2hlYWRlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IHVzZUNvbG9yTW9kZSB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsgRmFTdW4sIEZhTW9vbiB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW2NvbG9yTW9kZSwgc2V0Q29sb3JNb2RlXSA9IHVzZUNvbG9yTW9kZSgpXG4gICAgY29uc3QgaGFuZGxlQ29sb3JDaGFuZ2UgPSAoKSA9PiB7IHNldENvbG9yTW9kZShjb2xvck1vZGUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnKSB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIHN4PXt7IHZhcmlhbnQ6ICdjb250YWluZXJzLmhlYWRlcicgfX0+XG4gICAgICAgICAgICA8aDI+QXJtYWFuIERoYW5vYTwvaDI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29sb3JNb2RlKGNvbG9yTW9kZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCcpXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAge2NvbG9yTW9kZSA9PT0gJ2xpZ2h0JyA/IDxGYVN1biBzaXplPXsyOH0vPiA6IDxGYU1vb24gc2l6ZT17Mjh9Lz59XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/header.jsx\n");

/***/ })

})