webpackHotUpdate_N_E("pages/_app",{

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
var _jsxFileName = "D:\\WEB_DEV\\Personal_Projects\\wilfredlopez\\src\\theme\\ThemeContainer.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // Configure JSS
// const generateClassName = createGenerateClassName({
//   productionPrefix: "Wilfred",
// });



function ThemeContainer(props) {
  _s();

  const prefersDarkMode = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["default"])('(prefers-color-scheme: dark)');
  const theme = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => Object(_getTheme__WEBPACK_IMPORTED_MODULE_5__["default"])(prefersDarkMode), [prefersDarkMode]);
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: _getTheme__WEBPACK_IMPORTED_MODULE_5__["styledComponentsTheme"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL1RoZW1lQ29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJUaGVtZUNvbnRhaW5lciIsInByb3BzIiwicHJlZmVyc0RhcmtNb2RlIiwidXNlTWVkaWFRdWVyeSIsInRoZW1lIiwiUmVhY3QiLCJ1c2VNZW1vIiwiZ2V0VGhlbWUiLCJzdHlsZWRDb21wb25lbnRzVGhlbWUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FPQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBRU8sU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBc0Q7QUFBQTs7QUFDM0QsUUFBTUMsZUFBZSxHQUFHQywrRUFBYSxDQUFDLDhCQUFELENBQXJDO0FBRUEsUUFBTUMsS0FBSyxHQUFHQyw0Q0FBSyxDQUFDQyxPQUFOLENBQWMsTUFBTUMseURBQVEsQ0FBQ0wsZUFBRCxDQUE1QixFQUErQyxDQUMzREEsZUFEMkQsQ0FBL0MsQ0FBZDtBQUlBLFNBQ0UsTUFBQywrREFBRDtBQUErQixTQUFLLEVBQUVNLCtEQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzRUFBRDtBQUFlLFNBQUssRUFBRUosS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUdILEtBQUssQ0FBQ1EsUUFGVCxDQURGLENBREY7QUFRRDs7R0FmZVQsYztVQUNVRyx1RTs7O0tBRFZILGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jMGU2OGMzOGJjZjVjMWM4N2NiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknXHJcbmltcG9ydCB7XHJcbiAgLy8gY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUsXHJcbiAgLy8gU3R5bGVzUHJvdmlkZXIsXHJcbiAgVGhlbWVQcm92aWRlcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSdcclxuXHJcbi8vIENvbmZpZ3VyZSBKU1NcclxuXHJcbi8vIGNvbnN0IGdlbmVyYXRlQ2xhc3NOYW1lID0gY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUoe1xyXG4vLyAgIHByb2R1Y3Rpb25QcmVmaXg6IFwiV2lsZnJlZFwiLFxyXG4vLyB9KTtcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciBhcyBTdHlsZWRDb21wb25lbnRzVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgZ2V0VGhlbWUsIHsgc3R5bGVkQ29tcG9uZW50c1RoZW1lIH0gZnJvbSAnLi9nZXRUaGVtZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUaGVtZUNvbnRhaW5lcihwcm9wczogUHJvcHNXaXRoQ2hpbGRyZW48e30+KSB7XHJcbiAgY29uc3QgcHJlZmVyc0RhcmtNb2RlID0gdXNlTWVkaWFRdWVyeSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpXHJcblxyXG4gIGNvbnN0IHRoZW1lID0gUmVhY3QudXNlTWVtbygoKSA9PiBnZXRUaGVtZShwcmVmZXJzRGFya01vZGUpLCBbXHJcbiAgICBwcmVmZXJzRGFya01vZGUsXHJcbiAgXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRDb21wb25lbnRzVGhlbWVQcm92aWRlciB0aGVtZT17c3R5bGVkQ29tcG9uZW50c1RoZW1lfT5cclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvU3R5bGVkQ29tcG9uZW50c1RoZW1lUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=