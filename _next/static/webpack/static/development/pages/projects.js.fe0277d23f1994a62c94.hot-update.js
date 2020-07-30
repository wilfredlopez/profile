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
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");


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
      vape: "#ff1f00",
      expense: "#2e9e7a",
      shop: "rgb(20, 20, 20)"
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
      vape: "#fff",
      expense: "#fff",
      shop: "#fff"
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
        vape: "#e01b00",
        expense: "#288b6b",
        shop: "#000"
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
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])([classes.root])
  }, other, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0JyYW5kQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJERUZBVUxUX1NIQURPVyIsInN0eWxlZEJ5Q29sb3IiLCJwcm9wZXJ0eSIsIm1hcHBpbmciLCJwcm9wcyIsInN0eWxlZEJ5U2l6ZSIsInN0eWxlcyIsInRoZW1lIiwicm9vdCIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwiYmx1ZSIsInByaW1hcnkiLCJwYWxldHRlIiwiZGFyayIsInNlY29uZGFyeSIsIm1haW4iLCJzdWNjZXNzIiwiZXJyb3IiLCJ3YXJuaW5nIiwidGVydGlhcnkiLCJ0ZXh0IiwidmFwZSIsImV4cGVuc2UiLCJzaG9wIiwiYm9yZGVyUmFkaXVzIiwic2hhcGUiLCJib3JkZXIiLCJjb2xvciIsImNvbnRyYXN0VGV4dCIsImdldENvbnRyYXN0VGV4dCIsImhlaWdodCIsImxhcmdlIiwic21hbGwiLCJwYWRkaW5nIiwic3BhY2luZyIsImN1cnNvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJCcmFuZEJ1dHRvbiIsIndpdGhTdHlsZXMiLCJjbGFzc2VzIiwic2l6ZSIsImNoaWxkcmVuIiwib3RoZXIiLCJjbHN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBOEVBLE1BQU1BLGNBQWMsR0FDbEIsc0dBREYsQyxDQUVBOztBQUNBLE1BQU1DLGFBQWEsR0FBRyxDQUFDQyxRQUFELEVBQW1CQyxPQUFuQixLQUNuQkMsS0FBRCxJQUFtQkQsT0FBTyxDQUFDQyxLQUFLLENBQUNGLFFBQUQsQ0FBTixDQUQ1Qjs7QUFFQSxNQUFNRyxZQUFZLEdBQUcsQ0FBQ0gsUUFBRCxFQUFtQkMsT0FBbkIsS0FDbEJDLEtBQUQsSUFBbUJELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixRQUFELENBQU4sQ0FENUI7O0FBR0EsTUFBTUksTUFBTSxHQUFJQyxLQUFELEtBQW1CO0FBQ2hDQyxNQUFJLEVBQUU7QUFDSkMsY0FB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Q0FBbkIsQ0FBZjs7QUEwRU8sTUFBTUMsV0FBVyxHQUFHQywyRUFBVSxDQUFDbEMsTUFBRCxDQUFWLENBQW1CO0FBQUEsTUFDNUM7QUFBRW1DLFdBQUY7QUFBV0MsUUFBWDtBQUFpQkMsWUFBakI7QUFBMkJmO0FBQTNCLEdBRDRDO0FBQUEsTUFDUGdCLEtBRE87O0FBQUEsU0FLNUMsTUFBQyxnRUFBRDtBQUNFLGFBQVMsRUFBRUMsb0RBQUksQ0FBQyxDQUNkSixPQUFPLENBQUNqQyxJQURNLENBQUQ7QUFEakIsS0FJTW9DLEtBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1HRCxRQU5ILENBTDRDO0FBQUEsQ0FBbkIsQ0FBcEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2plY3RzLmpzLmZlMDI3N2QyM2YxOTk0YTYyYzk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGhlbWUsIHdpdGhTdHlsZXMsIFdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuaW50ZXJmYWNlIFN0eWxlcyB7XHJcbiAgY29sb3I6IHN0cmluZztcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIENvbG9yc01hcHBpbmcge1xyXG4gIGRlZmF1bHQ6IHN0cmluZztcclxuICBibHVlOiBzdHJpbmc7XHJcbiAgdmFwZTogc3RyaW5nO1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFNpemVzTWFwcGluZyB7XHJcbiAgZGVmYXVsdDogc3RyaW5nO1xyXG4gIHNtYWxsOiBzdHJpbmc7XHJcbiAgbGFyZ2U6IHN0cmluZztcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuZXhwb3J0IHR5cGUgUGFsZXR0ZUNvbG9yS2V5cyA9XHJcbiAgfCBcInByaW1hcnlcIlxyXG4gIHwgXCJzZWNvbmRhcnlcIlxyXG4gIHwgXCJlcnJvclwiXHJcbiAgfCBcIndhcm5pbmdcIlxyXG4gIHwgXCJ0ZXJ0aWFyeVwiXHJcbiAgfCBcInN1Y2Nlc3NcIjtcclxuXHJcbmludGVyZmFjZSBCdXR0b25TdHlsZXMgZXh0ZW5kcyBXaXRoU3R5bGVzPHR5cGVvZiBzdHlsZXM+IHtcclxuICBjb2xvcjpcclxuICAgIHwgXCJ2YXBlXCJcclxuICAgIHwgXCJleHBlbnNlXCJcclxuICAgIHwgXCJzaG9wXCJcclxuICAgIHwgXCJkZWZhdWx0XCJcclxuICAgIHwgXCJ0ZXh0XCJcclxuICAgIHwgXCJibHVlXCJcclxuICAgIHwgUGFsZXR0ZUNvbG9yS2V5cztcclxuICBzaXplPzogXCJzbWFsbFwiIHwgXCJkZWZhdWx0XCIgfCBcImxhcmdlXCI7XHJcbiAgLyoqXHJcbiAgICAgICAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGJ1dHRvbi5cclxuICAgICAgICAgKi9cclxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAvKipcclxuICAgICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGJ1dHRvbiB3aWxsIGJlIGRpc2FibGVkLlxyXG4gICAgICAgICAgICovXHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogSWYgYHRydWVgLCBubyBlbGV2YXRpb24gaXMgdXNlZC5cclxuICAgICAgICAgICAqL1xyXG4gIGRpc2FibGVFbGV2YXRpb24/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogSWYgYHRydWVgLCB0aGUgIGtleWJvYXJkIGZvY3VzIHJpcHBsZSB3aWxsIGJlIGRpc2FibGVkLlxyXG4gICAgICAgICAgICovXHJcbiAgZGlzYWJsZUZvY3VzUmlwcGxlPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIEVsZW1lbnQgcGxhY2VkIGFmdGVyIHRoZSBjaGlsZHJlbi5cclxuICAgICAgICAgICAqL1xyXG4gIGVuZEljb24/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBidXR0b24gd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXHJcbiAgICAgICAgICAgKi9cclxuICBmdWxsV2lkdGg/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogVGhlIFVSTCB0byBsaW5rIHRvIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxyXG4gICAgICAgICAgICogSWYgZGVmaW5lZCwgYW4gYGFgIGVsZW1lbnQgd2lsbCBiZSB1c2VkIGFzIHRoZSByb290IG5vZGUuXHJcbiAgICAgICAgICAgKi9cclxuICBocmVmPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogRWxlbWVudCBwbGFjZWQgYmVmb3JlIHRoZSBjaGlsZHJlbi5cclxuICAgICAgICAgICAqL1xyXG4gIHN0YXJ0SWNvbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAvKipcclxuICAgICAgICAgICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cclxuICAgICAgICAgICAqL1xyXG4gIHZhcmlhbnQ/OiBcInRleHRcIiB8IFwib3V0bGluZWRcIiB8IFwiY29udGFpbmVkXCI7XHJcbn1cclxuXHJcbmNvbnN0IERFRkFVTFRfU0hBRE9XID1cclxuICBcIjBweCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLDAsMCwwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xMilcIjtcclxuLy8gTGlrZSBodHRwczovL2dpdGh1Yi5jb20vYnJ1bm9iZXJ0b2xpbmkvc3R5bGVkLWJ5XHJcbmNvbnN0IHN0eWxlZEJ5Q29sb3IgPSAocHJvcGVydHk6IHN0cmluZywgbWFwcGluZzogQ29sb3JzTWFwcGluZykgPT5cclxuICAocHJvcHM6IFN0eWxlcykgPT4gbWFwcGluZ1twcm9wc1twcm9wZXJ0eV1dO1xyXG5jb25zdCBzdHlsZWRCeVNpemUgPSAocHJvcGVydHk6IHN0cmluZywgbWFwcGluZzogU2l6ZXNNYXBwaW5nKSA9PlxyXG4gIChwcm9wczogU3R5bGVzKSA9PiBtYXBwaW5nW3Byb3BzW3Byb3BlcnR5XV07XHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGJhY2tncm91bmQ6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IFwiIzAwNzk2YlwiLFxyXG4gICAgICBibHVlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzIxOTZGMyAzMCUsICMyMUNCRjMgOTAlKVwiLFxyXG4gICAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MubWFpbixcclxuICAgICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcclxuICAgICAgd2FybmluZzogdGhlbWUucGFsZXR0ZS53YXJuaW5nLm1haW4sXHJcbiAgICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5Lm1haW4sXHJcbiAgICAgIHRleHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICB2YXBlOiBcIiNmZjFmMDBcIixcclxuICAgICAgZXhwZW5zZTogXCIjMmU5ZTdhXCIsXHJcbiAgICAgIHNob3A6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICB9KSxcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxyXG4gICAgYm9yZGVyOiAwLFxyXG4gICAgY29sb3I6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IFwiI2ZmZlwiLFxyXG4gICAgICBibHVlOiBcIiNmZmZcIixcclxuICAgICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXHJcbiAgICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5jb250cmFzdFRleHQsXHJcbiAgICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmNvbnRyYXN0VGV4dCxcclxuICAgICAgd2FybmluZzogdGhlbWUucGFsZXR0ZS53YXJuaW5nLmNvbnRyYXN0VGV4dCxcclxuICAgICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkuY29udHJhc3RUZXh0LFxyXG4gICAgICB0ZXh0OiB0aGVtZS5wYWxldHRlLmdldENvbnRyYXN0VGV4dCh0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSksXHJcbiAgICAgIHZhcGU6IFwiI2ZmZlwiLFxyXG4gICAgICBleHBlbnNlOiBcIiNmZmZcIixcclxuICAgICAgc2hvcDogXCIjZmZmXCIsXHJcbiAgICB9KSxcclxuICAgIGhlaWdodDogc3R5bGVkQnlTaXplKFwic2l6ZVwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IFwiNDBweFwiLFxyXG4gICAgICBsYXJnZTogXCI0OHB4XCIsXHJcbiAgICAgIHNtYWxsOiBcIjIwcHhcIixcclxuICAgIH0pLFxyXG4gICAgcGFkZGluZzogc3R5bGVkQnlTaXplKFwic2l6ZVwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IHRoZW1lLnNwYWNpbmcoMC41LCAxKSxcclxuICAgICAgbGFyZ2U6IHRoZW1lLnNwYWNpbmcoMS41LCAxLjUpLFxyXG4gICAgICBzbWFsbDogdGhlbWUuc3BhY2luZygxLCAwLjUpLFxyXG4gICAgfSksXHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgW1wiJjpob3ZlclwiXToge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICAgIGRlZmF1bHQ6IFwicmdiKDAsIDg0LCA3NClcIixcclxuICAgICAgICBibHVlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDAgMTM3IDI0NykgMzAlLCByZ2IoMTAgMTM4IDE2OCkgOTAlKVwiLFxyXG4gICAgICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgICAgIHNlY29uZGFyeTogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayxcclxuICAgICAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MuZGFyayxcclxuICAgICAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5kYXJrLFxyXG4gICAgICAgIHdhcm5pbmc6IHRoZW1lLnBhbGV0dGUud2FybmluZy5kYXJrLFxyXG4gICAgICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5LmRhcmssXHJcbiAgICAgICAgdGV4dDogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICAgICAgdmFwZTogXCIjZTAxYjAwXCIsXHJcbiAgICAgICAgZXhwZW5zZTogXCIjMjg4YjZiXCIsXHJcbiAgICAgICAgc2hvcDogXCIjMDAwXCIsXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICAgIGJveFNoYWRvdzogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgZGVmYXVsdDogREVGQVVMVF9TSEFET1csXHJcbiAgICAgIGJsdWU6IFwicmdiYSgzMywgMjAzLCAyNDMsIDAuMykgMXB4IDJweCAxcHggMXB4XCIsXHJcbiAgICAgIHByaW1hcnk6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICAgIHNlY29uZGFyeTogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgc3VjY2VzczogdGhlbWUuc2hhZG93c1s0XSxcclxuICAgICAgZXJyb3I6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIHdhcm5pbmc6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIHRlcnRpYXJ5OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICB0ZXh0OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICB2YXBlOiB0aGVtZS5zaGFkb3dzWzNdLFxyXG4gICAgfSksXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgQnJhbmRCdXR0b24gPSB3aXRoU3R5bGVzKHN0eWxlcykoKFxyXG4gIHsgY2xhc3Nlcywgc2l6ZSwgY2hpbGRyZW4sIGNvbG9yLCAuLi5vdGhlciB9OiBQcm9wc1dpdGhDaGlsZHJlbjxcclxuICAgIEJ1dHRvblN0eWxlc1xyXG4gID4sXHJcbikgPT4gKFxyXG4gIDxCdXR0b25cclxuICAgIGNsYXNzTmFtZT17Y2xzeChbXHJcbiAgICAgIGNsYXNzZXMucm9vdCxcclxuICAgIF0pfVxyXG4gICAgey4uLm90aGVyfVxyXG4gID5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L0J1dHRvbj5cclxuKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=