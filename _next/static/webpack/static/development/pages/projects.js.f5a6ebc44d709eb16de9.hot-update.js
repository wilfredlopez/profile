webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./src/styles/BrandButton.tsx":
/*!************************************!*\
  !*** ./src/styles/BrandButton.tsx ***!
  \************************************/
/*! exports provided: BrandButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandButton", function() { return BrandButton; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");


var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\styles\\BrandButton.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const DEFAULT_SHADOW = "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"; // Like https://github.com/brunobertolini/styled-by

const styledByColor = (property, mapping) => props => mapping[props[property]];

const styledBySize = (property, mapping) => props => mapping[props[property]];

const styles = theme => ({
  root: {
    background: styledByColor("color", {
      default: "#00796b",
      blue: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      primary: theme.palette.primary.dark,
      secondary: theme.palette.secondary.main,
      success: theme.palette.success.main,
      error: theme.palette.error.main,
      warning: theme.palette.warning.main,
      tertiary: theme.palette.tertiary.main,
      text: "inherit",
      vape: "red"
    }),
    borderRadius: theme.shape.borderRadius,
    border: 0,
    color: styledByColor("color", {
      default: "#fff",
      blue: "#fff",
      primary: theme.palette.primary.contrastText,
      secondary: theme.palette.secondary.contrastText,
      success: theme.palette.success.contrastText,
      error: theme.palette.error.contrastText,
      warning: theme.palette.warning.contrastText,
      tertiary: theme.palette.tertiary.contrastText,
      text: theme.palette.getContrastText(theme.palette.text.primary),
      vape: "white"
    }),
    height: styledBySize("size", {
      default: "40px",
      large: "48px",
      small: "20px"
    }),
    padding: styledBySize("size", {
      default: theme.spacing(0.5, 1),
      large: theme.spacing(1.5, 1.5),
      small: theme.spacing(1, 0.5)
    }),
    cursor: "pointer",
    ["&:hover"]: {
      background: styledByColor("color", {
        default: "rgb(0, 84, 74)",
        blue: "linear-gradient(45deg, rgb(0 137 247) 30%, rgb(10 138 168) 90%)",
        primary: theme.palette.primary.main,
        secondary: theme.palette.secondary.dark,
        success: theme.palette.success.dark,
        error: theme.palette.error.dark,
        warning: theme.palette.warning.dark,
        tertiary: theme.palette.tertiary.dark,
        text: theme.palette.text.primary,
        vape: "green"
      })
    },
    boxShadow: styledByColor("color", {
      default: DEFAULT_SHADOW,
      blue: "rgba(33, 203, 243, 0.3) 1px 2px 1px 1px",
      primary: theme.shadows[1],
      secondary: theme.shadows[2],
      success: theme.shadows[4],
      error: theme.shadows[2],
      warning: theme.shadows[2],
      tertiary: theme.shadows[2],
      text: theme.shadows[2],
      vape: theme.shadows[3]
    })
  }
});

const BrandButton = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)((_ref) => {
  let {
    classes,
    size,
    children,
    color
  } = _ref,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["classes", "size", "children", "color"]);

  return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.root
  }, other, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 3
    }
  }), children);
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0JyYW5kQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJERUZBVUxUX1NIQURPVyIsInN0eWxlZEJ5Q29sb3IiLCJwcm9wZXJ0eSIsIm1hcHBpbmciLCJwcm9wcyIsInN0eWxlZEJ5U2l6ZSIsInN0eWxlcyIsInRoZW1lIiwicm9vdCIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwiYmx1ZSIsInByaW1hcnkiLCJwYWxldHRlIiwiZGFyayIsInNlY29uZGFyeSIsIm1haW4iLCJzdWNjZXNzIiwiZXJyb3IiLCJ3YXJuaW5nIiwidGVydGlhcnkiLCJ0ZXh0IiwidmFwZSIsImJvcmRlclJhZGl1cyIsInNoYXBlIiwiYm9yZGVyIiwiY29sb3IiLCJjb250cmFzdFRleHQiLCJnZXRDb250cmFzdFRleHQiLCJoZWlnaHQiLCJsYXJnZSIsInNtYWxsIiwicGFkZGluZyIsInNwYWNpbmciLCJjdXJzb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiQnJhbmRCdXR0b24iLCJ3aXRoU3R5bGVzIiwiY2xhc3NlcyIsInNpemUiLCJjaGlsZHJlbiIsIm90aGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBOEVBLE1BQU1BLGNBQWMsR0FDbEIsc0dBREYsQyxDQUVBOztBQUNBLE1BQU1DLGFBQWEsR0FBRyxDQUFDQyxRQUFELEVBQW1CQyxPQUFuQixLQUNuQkMsS0FBRCxJQUFtQkQsT0FBTyxDQUFDQyxLQUFLLENBQUNGLFFBQUQsQ0FBTixDQUQ1Qjs7QUFFQSxNQUFNRyxZQUFZLEdBQUcsQ0FBQ0gsUUFBRCxFQUFtQkMsT0FBbkIsS0FDbEJDLEtBQUQsSUFBbUJELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixRQUFELENBQU4sQ0FENUI7O0FBR0EsTUFBTUksTUFBTSxHQUFJQyxLQUFELEtBQW1CO0FBQ2hDQyxNQUFJLEVBQUU7QUFDSkMsY0FBVSxFQUFFUixhQUFhLENBQUMsT0FBRCxFQUFVO0FB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QUFTLEVBQUVILE9BQU8sQ0FBQy9CO0FBQTNCLEtBQXFDa0MsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUE2Q0QsUUFBN0MsQ0FMNEM7QUFBQSxDQUFuQixDQUFwQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccHJvamVjdHMuanMuZjVhNmViYzQ0ZDcwOWViMTZkZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUaGVtZSwgd2l0aFN0eWxlcywgV2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcblxyXG5pbnRlcmZhY2UgU3R5bGVzIHtcclxuICBjb2xvcjogc3RyaW5nO1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29sb3JzTWFwcGluZyB7XHJcbiAgZGVmYXVsdDogc3RyaW5nO1xyXG4gIGJsdWU6IHN0cmluZztcclxuICB2YXBlOiBzdHJpbmc7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU2l6ZXNNYXBwaW5nIHtcclxuICBkZWZhdWx0OiBzdHJpbmc7XHJcbiAgc21hbGw6IHN0cmluZztcclxuICBsYXJnZTogc3RyaW5nO1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5leHBvcnQgdHlwZSBQYWxldHRlQ29sb3JLZXlzID1cclxuICB8IFwicHJpbWFyeVwiXHJcbiAgfCBcInNlY29uZGFyeVwiXHJcbiAgfCBcImVycm9yXCJcclxuICB8IFwid2FybmluZ1wiXHJcbiAgfCBcInRlcnRpYXJ5XCJcclxuICB8IFwic3VjY2Vzc1wiO1xyXG5cclxuaW50ZXJmYWNlIEJ1dHRvblN0eWxlcyBleHRlbmRzIFdpdGhTdHlsZXM8dHlwZW9mIHN0eWxlcz4ge1xyXG4gIGNvbG9yOlxyXG4gICAgfCBcInZhcGVcIlxyXG4gICAgfCBcImV4cGVuc2VcIlxyXG4gICAgfCBcInNob3BcIlxyXG4gICAgfCBcImRlZmF1bHRcIlxyXG4gICAgfCBcInRleHRcIlxyXG4gICAgfCBcImJsdWVcIlxyXG4gICAgfCBQYWxldHRlQ29sb3JLZXlzO1xyXG4gIHNpemU/OiBcInNtYWxsXCIgfCBcImRlZmF1bHRcIiB8IFwibGFyZ2VcIjtcclxuICAvKipcclxuICAgICAgICAgKiBUaGUgY29udGVudCBvZiB0aGUgYnV0dG9uLlxyXG4gICAgICAgICAqL1xyXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYnV0dG9uIHdpbGwgYmUgZGlzYWJsZWQuXHJcbiAgICAgICAgICAgKi9cclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIG5vIGVsZXZhdGlvbiBpcyB1c2VkLlxyXG4gICAgICAgICAgICovXHJcbiAgZGlzYWJsZUVsZXZhdGlvbj86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSAga2V5Ym9hcmQgZm9jdXMgcmlwcGxlIHdpbGwgYmUgZGlzYWJsZWQuXHJcbiAgICAgICAgICAgKi9cclxuICBkaXNhYmxlRm9jdXNSaXBwbGU/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogRWxlbWVudCBwbGFjZWQgYWZ0ZXIgdGhlIGNoaWxkcmVuLlxyXG4gICAgICAgICAgICovXHJcbiAgZW5kSWNvbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAvKipcclxuICAgICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGJ1dHRvbiB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cclxuICAgICAgICAgICAqL1xyXG4gIGZ1bGxXaWR0aD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBUaGUgVVJMIHRvIGxpbmsgdG8gd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXHJcbiAgICAgICAgICAgKiBJZiBkZWZpbmVkLCBhbiBgYWAgZWxlbWVudCB3aWxsIGJlIHVzZWQgYXMgdGhlIHJvb3Qgbm9kZS5cclxuICAgICAgICAgICAqL1xyXG4gIGhyZWY/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBFbGVtZW50IHBsYWNlZCBiZWZvcmUgdGhlIGNoaWxkcmVuLlxyXG4gICAgICAgICAgICovXHJcbiAgc3RhcnRJY29uPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxyXG4gICAgICAgICAgICovXHJcbiAgdmFyaWFudD86IFwidGV4dFwiIHwgXCJvdXRsaW5lZFwiIHwgXCJjb250YWluZWRcIjtcclxufVxyXG5cclxuY29uc3QgREVGQVVMVF9TSEFET1cgPVxyXG4gIFwiMHB4IDNweCAxcHggLTJweCByZ2JhKDAsMCwwLDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsMCwwLDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEyKVwiO1xyXG4vLyBMaWtlIGh0dHBzOi8vZ2l0aHViLmNvbS9icnVub2JlcnRvbGluaS9zdHlsZWQtYnlcclxuY29uc3Qgc3R5bGVkQnlDb2xvciA9IChwcm9wZXJ0eTogc3RyaW5nLCBtYXBwaW5nOiBDb2xvcnNNYXBwaW5nKSA9PlxyXG4gIChwcm9wczogU3R5bGVzKSA9PiBtYXBwaW5nW3Byb3BzW3Byb3BlcnR5XV07XHJcbmNvbnN0IHN0eWxlZEJ5U2l6ZSA9IChwcm9wZXJ0eTogc3RyaW5nLCBtYXBwaW5nOiBTaXplc01hcHBpbmcpID0+XHJcbiAgKHByb3BzOiBTdHlsZXMpID0+IG1hcHBpbmdbcHJvcHNbcHJvcGVydHldXTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgYmFja2dyb3VuZDogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgZGVmYXVsdDogXCIjMDA3OTZiXCIsXHJcbiAgICAgIGJsdWU6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjE5NkYzIDMwJSwgIzIxQ0JGMyA5MCUpXCIsXHJcbiAgICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluLFxyXG4gICAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLFxyXG4gICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcubWFpbixcclxuICAgICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkubWFpbixcclxuICAgICAgdGV4dDogXCJpbmhlcml0XCIsXHJcbiAgICAgIHZhcGU6IFwicmVkXCIsXHJcbiAgICB9KSxcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxyXG4gICAgYm9yZGVyOiAwLFxyXG4gICAgY29sb3I6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IFwiI2ZmZlwiLFxyXG4gICAgICBibHVlOiBcIiNmZmZcIixcclxuICAgICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXHJcbiAgICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5jb250cmFzdFRleHQsXHJcbiAgICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmNvbnRyYXN0VGV4dCxcclxuICAgICAgd2FybmluZzogdGhlbWUucGFsZXR0ZS53YXJuaW5nLmNvbnRyYXN0VGV4dCxcclxuICAgICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkuY29udHJhc3RUZXh0LFxyXG4gICAgICB0ZXh0OiB0aGVtZS5wYWxldHRlLmdldENvbnRyYXN0VGV4dCh0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSksXHJcbiAgICAgIHZhcGU6IFwid2hpdGVcIixcclxuICAgIH0pLFxyXG4gICAgaGVpZ2h0OiBzdHlsZWRCeVNpemUoXCJzaXplXCIsIHtcclxuICAgICAgZGVmYXVsdDogXCI0MHB4XCIsXHJcbiAgICAgIGxhcmdlOiBcIjQ4cHhcIixcclxuICAgICAgc21hbGw6IFwiMjBweFwiLFxyXG4gICAgfSksXHJcbiAgICBwYWRkaW5nOiBzdHlsZWRCeVNpemUoXCJzaXplXCIsIHtcclxuICAgICAgZGVmYXVsdDogdGhlbWUuc3BhY2luZygwLjUsIDEpLFxyXG4gICAgICBsYXJnZTogdGhlbWUuc3BhY2luZygxLjUsIDEuNSksXHJcbiAgICAgIHNtYWxsOiB0aGVtZS5zcGFjaW5nKDEsIDAuNSksXHJcbiAgICB9KSxcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICBbXCImOmhvdmVyXCJdOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgICAgZGVmYXVsdDogXCJyZ2IoMCwgODQsIDc0KVwiLFxyXG4gICAgICAgIGJsdWU6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMCAxMzcgMjQ3KSAzMCUsIHJnYigxMCAxMzggMTY4KSA5MCUpXCIsXHJcbiAgICAgICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5kYXJrLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5kYXJrLFxyXG4gICAgICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmRhcmssXHJcbiAgICAgICAgd2FybmluZzogdGhlbWUucGFsZXR0ZS53YXJuaW5nLmRhcmssXHJcbiAgICAgICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkuZGFyayxcclxuICAgICAgICB0ZXh0OiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICAgICB2YXBlOiBcImdyZWVuXCIsXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICAgIGJveFNoYWRvdzogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgZGVmYXVsdDogREVGQVVMVF9TSEFET1csXHJcbiAgICAgIGJsdWU6IFwicmdiYSgzMywgMjAzLCAyNDMsIDAuMykgMXB4IDJweCAxcHggMXB4XCIsXHJcbiAgICAgIHByaW1hcnk6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICAgIHNlY29uZGFyeTogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgc3VjY2VzczogdGhlbWUuc2hhZG93c1s0XSxcclxuICAgICAgZXJyb3I6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIHdhcm5pbmc6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIHRlcnRpYXJ5OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICB0ZXh0OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICB2YXBlOiB0aGVtZS5zaGFkb3dzWzNdLFxyXG4gICAgfSksXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgQnJhbmRCdXR0b24gPSB3aXRoU3R5bGVzKHN0eWxlcykoKFxyXG4gIHsgY2xhc3Nlcywgc2l6ZSwgY2hpbGRyZW4sIGNvbG9yLCAuLi5vdGhlciB9OiBQcm9wc1dpdGhDaGlsZHJlbjxcclxuICAgIEJ1dHRvblN0eWxlc1xyXG4gID4sXHJcbikgPT4gKFxyXG4gIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHsuLi5vdGhlcn0+e2NoaWxkcmVufTwvQnV0dG9uPlxyXG4pKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==