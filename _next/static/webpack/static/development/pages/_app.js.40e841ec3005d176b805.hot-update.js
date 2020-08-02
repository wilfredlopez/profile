webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/theme/ThemeContainer.tsx":
/*!**************************************!*\
  !*** ./src/theme/ThemeContainer.tsx ***!
  \**************************************/
/*! exports provided: ThemeContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContainer", function() { return ThemeContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _getTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getTheme */ "./src/theme/getTheme.ts");
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\theme\\ThemeContainer.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // Configure JSS
// const generateClassName = createGenerateClassName({
//   productionPrefix: "Wilfred",
// });



function ThemeContainer(props) {
  _s();

  const prefersDarkMode = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["default"])("(prefers-color-scheme: dark)");
  const theme = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => Object(_getTheme__WEBPACK_IMPORTED_MODULE_5__["default"])(true), [prefersDarkMode]);
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: _getTheme__WEBPACK_IMPORTED_MODULE_5__["styledComponentsTheme"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), props.children));
}

_s(ThemeContainer, "s6GPQHExF/FrDfB4Jza+zlx2KnY=", false, function () {
  return [_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["default"]];
});

_c = ThemeContainer;

var _c;

$RefreshReg$(_c, "ThemeContainer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvVGhlbWVDb250YWluZXIudHN4Il0sIm5hbWVzIjpbIlRoZW1lQ29udGFpbmVyIiwicHJvcHMiLCJwcmVmZXJzRGFya01vZGUiLCJ1c2VNZWRpYVF1ZXJ5IiwidGhlbWUiLCJSZWFjdCIsInVzZU1lbW8iLCJnZXRUaGVtZSIsInN0eWxlZENvbXBvbmVudHNUaGVtZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQU9BO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFTyxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUFzRDtBQUFBOztBQUMzRCxRQUFNQyxlQUFlLEdBQUdDLCtFQUFhLENBQUMsOEJBQUQsQ0FBckM7QUFFQSxRQUFNQyxLQUFLLEdBQUdDLDRDQUFLLENBQUNDLE9BQU4sQ0FDWixNQUFNQyx5REFBUSxDQUFDLElBQUQsQ0FERixFQUVaLENBQUNMLGVBQUQsQ0FGWSxDQUFkO0FBS0EsU0FDRSxNQUFDLCtEQUFEO0FBQStCLFNBQUssRUFBRU0sK0RBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNFQUFEO0FBQWUsU0FBSyxFQUFFSixLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFR0gsS0FBSyxDQUFDUSxRQUZULENBREYsQ0FERjtBQVFEOztHQWhCZVQsYztVQUNVRyx1RTs7O0tBRFZILGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuNDBlODQxZWMzMDA1ZDE3NmI4MDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiO1xyXG5pbXBvcnQge1xyXG4gIC8vIGNyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lLFxyXG4gIC8vIFN0eWxlc1Byb3ZpZGVyLFxyXG4gIFRoZW1lUHJvdmlkZXIsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XHJcblxyXG4vLyBDb25maWd1cmUgSlNTXHJcblxyXG4vLyBjb25zdCBnZW5lcmF0ZUNsYXNzTmFtZSA9IGNyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lKHtcclxuLy8gICBwcm9kdWN0aW9uUHJlZml4OiBcIldpbGZyZWRcIixcclxuLy8gfSk7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgYXMgU3R5bGVkQ29tcG9uZW50c1RoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGdldFRoZW1lLCB7IHN0eWxlZENvbXBvbmVudHNUaGVtZSB9IGZyb20gXCIuL2dldFRoZW1lXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGhlbWVDb250YWluZXIocHJvcHM6IFByb3BzV2l0aENoaWxkcmVuPHt9Pikge1xyXG4gIGNvbnN0IHByZWZlcnNEYXJrTW9kZSA9IHVzZU1lZGlhUXVlcnkoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpO1xyXG5cclxuICBjb25zdCB0aGVtZSA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiBnZXRUaGVtZSh0cnVlKSxcclxuICAgIFtwcmVmZXJzRGFya01vZGVdLFxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkQ29tcG9uZW50c1RoZW1lUHJvdmlkZXIgdGhlbWU9e3N0eWxlZENvbXBvbmVudHNUaGVtZX0+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8L1N0eWxlZENvbXBvbmVudHNUaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==