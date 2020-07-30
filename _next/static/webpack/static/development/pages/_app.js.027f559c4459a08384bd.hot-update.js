webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/styles/ThemeContainer.tsx":
/*!***************************************!*\
  !*** ./src/styles/ThemeContainer.tsx ***!
  \***************************************/
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
/* harmony import */ var _getTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getTheme */ "./src/styles/getTheme.ts");
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\styles\\ThemeContainer.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // Configure JSS
// const generateClassName = createGenerateClassName({
//   productionPrefix: "Wilfred",
// });



function ThemeContainer(props) {
  _s();

  const prefersDarkMode = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["default"])("(prefers-color-scheme: dark)");
  const theme = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => Object(_getTheme__WEBPACK_IMPORTED_MODULE_5__["default"])(prefersDarkMode), [prefersDarkMode]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL1RoZW1lQ29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJUaGVtZUNvbnRhaW5lciIsInByb3BzIiwicHJlZmVyc0RhcmtNb2RlIiwidXNlTWVkaWFRdWVyeSIsInRoZW1lIiwiUmVhY3QiLCJ1c2VNZW1vIiwiZ2V0VGhlbWUiLCJzdHlsZWRDb21wb25lbnRzVGhlbWUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FPQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBRU8sU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBc0Q7QUFBQTs7QUFDM0QsUUFBTUMsZUFBZSxHQUFHQywrRUFBYSxDQUFDLDhCQUFELENBQXJDO0FBRUEsUUFBTUMsS0FBSyxHQUFHQyw0Q0FBSyxDQUFDQyxPQUFOLENBQ1osTUFBTUMseURBQVEsQ0FBQ0wsZUFBRCxDQURGLEVBRVosQ0FBQ0EsZUFBRCxDQUZZLENBQWQ7QUFLQSxTQUNFLE1BQUMsK0RBQUQ7QUFBK0IsU0FBSyxFQUFFTSwrREFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0VBQUQ7QUFBZSxTQUFLLEVBQUVKLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVHSCxLQUFLLENBQUNRLFFBRlQsQ0FERixDQURGO0FBUUQ7O0dBaEJlVCxjO1VBQ1VHLHVFOzs7S0FEVkgsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy4wMjdmNTU5YzQ0NTlhMDgzODRiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCI7XHJcbmltcG9ydCB7XHJcbiAgLy8gY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUsXHJcbiAgLy8gU3R5bGVzUHJvdmlkZXIsXHJcbiAgVGhlbWVQcm92aWRlcixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcclxuXHJcbi8vIENvbmZpZ3VyZSBKU1NcclxuXHJcbi8vIGNvbnN0IGdlbmVyYXRlQ2xhc3NOYW1lID0gY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUoe1xyXG4vLyAgIHByb2R1Y3Rpb25QcmVmaXg6IFwiV2lsZnJlZFwiLFxyXG4vLyB9KTtcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciBhcyBTdHlsZWRDb21wb25lbnRzVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgZ2V0VGhlbWUsIHsgc3R5bGVkQ29tcG9uZW50c1RoZW1lIH0gZnJvbSBcIi4vZ2V0VGhlbWVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUaGVtZUNvbnRhaW5lcihwcm9wczogUHJvcHNXaXRoQ2hpbGRyZW48e30+KSB7XHJcbiAgY29uc3QgcHJlZmVyc0RhcmtNb2RlID0gdXNlTWVkaWFRdWVyeShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIik7XHJcblxyXG4gIGNvbnN0IHRoZW1lID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+IGdldFRoZW1lKHByZWZlcnNEYXJrTW9kZSksXHJcbiAgICBbcHJlZmVyc0RhcmtNb2RlXSxcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZENvbXBvbmVudHNUaGVtZVByb3ZpZGVyIHRoZW1lPXtzdHlsZWRDb21wb25lbnRzVGhlbWV9PlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC9TdHlsZWRDb21wb25lbnRzVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=