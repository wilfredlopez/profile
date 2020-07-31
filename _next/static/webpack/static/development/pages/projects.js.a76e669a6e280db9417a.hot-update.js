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




const borderStart = "1px solid "; // Like https://github.com/brunobertolini/styled-by

const styledByColor = (property, mapping) => props => mapping[props[property]];

const styledBySize = (property, mapping) => props => mapping[props[property]];

const styles = theme => ({
  color: {
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
    })
  },
  colorOutline: {
    color: styledByColor("color", {
      default: "rgb(20, 20, 20)",
      blue: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      primary: theme.palette.primary.main,
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
    ["&:hover a, &:hover"]: {
      color: styledByColor("color", {
        default: "rgb(20, 20, 20)",
        blue: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
        primary: theme.palette.primary.dark,
        secondary: theme.palette.secondary.dark,
        success: theme.palette.success.dark,
        error: theme.palette.error.dark,
        warning: theme.palette.warning.dark,
        tertiary: theme.palette.tertiary.dark,
        text: "inherit",
        vape: "#ff1f00",
        expense: "#2e9e7a",
        shop: "rgb(20, 20, 20)"
      })
    }
  },
  background: {
    background: styledByColor("color", {
      default: "#000",
      blue: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      primary: theme.palette.primary.main,
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
    ["&:hover"]: {
      background: styledByColor("color", {
        default: "rgb(20, 20, 20)",
        blue: "linear-gradient(45deg, rgb(0 137 247) 30%, rgb(10 138 168) 90%)",
        primary: theme.palette.primary.dark,
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
    }
  },
  backgroundOutline: {
    border: styledByColor("color", {
      default: borderStart + "#000",
      blue: borderStart + "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      primary: borderStart + theme.palette.primary.main,
      secondary: borderStart + theme.palette.secondary.main,
      success: borderStart + theme.palette.success.main,
      error: borderStart + theme.palette.error.main,
      warning: borderStart + theme.palette.warning.main,
      tertiary: borderStart + theme.palette.tertiary.main,
      text: borderStart + "inherit",
      vape: borderStart + "#ff1f00",
      expense: borderStart + "#2e9e7a",
      shop: borderStart + "rgb(20, 20, 20)"
    }),
    ["&:hover"]: {
      border: styledByColor("color", {
        default: borderStart + "rgb(20, 20, 20)",
        blue: borderStart + "linear-gradient(45deg, rgb(0 137 247) 30%, rgb(10 138 168) 90%)",
        primary: borderStart + theme.palette.primary.dark,
        secondary: borderStart + theme.palette.secondary.dark,
        success: borderStart + theme.palette.success.dark,
        error: borderStart + theme.palette.error.dark,
        warning: borderStart + theme.palette.warning.dark,
        tertiary: borderStart + theme.palette.tertiary.dark,
        text: borderStart + theme.palette.text.primary,
        vape: borderStart + "#e01b00",
        expense: borderStart + "#288b6b",
        shop: borderStart + "#000"
      })
    }
  },
  root: {
    borderRadius: theme.shape.borderRadius,
    border: 0,
    alignItems: "center",
    height: styledBySize("size", {
      default: 40,
      large: 48,
      small: 20
    }),
    padding: styledBySize("size", {
      default: theme.spacing(1.6, 1.4),
      large: theme.spacing(2, 1.5),
      small: theme.spacing(1.1, 0.6)
    }),
    cursor: "pointer",
    boxShadow: styledByColor("color", {
      default: theme.shadows[1],
      blue: "rgba(33, 203, 243, 0.3) 1px 2px 1px 1px",
      primary: theme.shadows[1],
      secondary: theme.shadows[2],
      success: theme.shadows[4],
      error: theme.shadows[2],
      warning: theme.shadows[2],
      tertiary: theme.shadows[2],
      text: theme.shadows[2],
      vape: theme.shadows[1]
    })
  }
});

const BrandButton = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)((_ref) => {
  let {
    classes,
    variant,
    size,
    children,
    color
  } = _ref,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["classes", "variant", "size", "children", "color"]);

  const isOutlined = variant === "outlined";
  return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])([classes.root, {
      [classes.colorOutline]: isOutlined
    }, {
      [classes.color]: !isOutlined
    }, {
      [classes.backgroundOutline]: isOutlined
    }, {
      [classes.background]: !isOutlined
    }]),
    variant: variant,
    size: size
  }, other, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 5
    }
  }), children);
});
BrandButton.displayName = "BrandButton";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0JyYW5kQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJib3JkZXJTdGFydCIsInN0eWxlZEJ5Q29sb3IiLCJwcm9wZXJ0eSIsIm1hcHBpbmciLCJwcm9wcyIsInN0eWxlZEJ5U2l6ZSIsInN0eWxlcyIsInRoZW1lIiwiY29sb3IiLCJkZWZhdWx0IiwiYmx1ZSIsInByaW1hcnkiLCJwYWxldHRlIiwiY29udHJhc3RUZXh0Iiwic2Vjb25kYXJ5Iiwic3VjY2VzcyIsImVycm9yIiwid2FybmluZyIsInRlcnRpYXJ5IiwidGV4dCIsImdldENvbnRyYXN0VGV4dCIsInZhcGUiLCJleHBlbnNlIiwic2hvcCIsImNvbG9yT3V0bGluZSIsIm1haW4iLCJkYXJrIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRPdXRsaW5lIiwiYm9yZGVyIiwicm9vdCIsImJvcmRlclJhZGl1cyIsInNoYXBlIiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImxhcmdlIiwic21hbGwiLCJwYWRkaW5nIiwic3BhY2luZyIsImN1cnNvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJCcmFuZEJ1dHRvbiIsIndpdGhTdHlsZXMiLCJjbGFzc2VzIiwidmFyaWFudCIsInNpemUiLCJjaGlsZHJlbiIsIm90aGVyIiwiaXNPdXRsaW5lZCIsImNsc3giLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQStFQSxNQUFNQSxXQUFXLEdBQUcsWUFBcEIsQyxDQUNBOztBQUNBLE1BQU1DLGFBQWEsR0FBRyxDQUFDQyxRQUFELEVBQW1CQyxPQUFuQixLQUNuQkMsS0FBRCxJQUFtQkQsT0FBTyxDQUFDQyxLQUFLLENBQUNGLFFBQUQsQ0FBTixDQUQ1Qjs7QUFFQSxNQUFNRyxZQUFZLEdBQUcsQ0FBQ0gsUUFBRCxFQUFtQkMsT0FBbkIsS0FDbEJDLEtBQUQsSUFBbUJELE9BQU8sQ0FBQ0MsS0FBSyxD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cEI7QUFsSDBCLENBQW5CLENBQWY7O0FBaUpPLE1BQU1DLFdBQVcsR0FBR0MsMkVBQVUsQ0FBQ3JDLE1BQUQsQ0FBVixDQUFtQixVQUl6QztBQUFBLE1BSEg7QUFBRXNDLFdBQUY7QUFBV0MsV0FBWDtBQUFvQkMsUUFBcEI7QUFBMEJDLFlBQTFCO0FBQW9DdkM7QUFBcEMsR0FHRztBQUFBLE1BSDJDd0MsS0FHM0M7O0FBQ0gsUUFBTUMsVUFBVSxHQUFHSixPQUFPLEtBQUssVUFBL0I7QUFDQSxTQUNFLE1BQUMsZ0VBQUQ7QUFDRSxhQUFTLEVBQUVLLG9EQUFJLENBQUMsQ0FDZE4sT0FBTyxDQUFDZCxJQURNLEVBRWQ7QUFBRSxPQUFDYyxPQUFPLENBQUNwQixZQUFULEdBQXdCeUI7QUFBMUIsS0FGYyxFQUdkO0FBQUUsT0FBQ0wsT0FBTyxDQUFDcEMsS0FBVCxHQUFpQixDQUFDeUM7QUFBcEIsS0FIYyxFQUlkO0FBQUUsT0FBQ0wsT0FBTyxDQUFDaEIsaUJBQVQsR0FBNkJxQjtBQUEvQixLQUpjLEVBS2Q7QUFBRSxPQUFDTCxPQUFPLENBQUNqQixVQUFULEdBQXNCLENBQUNzQjtBQUF6QixLQUxjLENBQUQsQ0FEakI7QUFRRSxXQUFPLEVBQUVKLE9BUlg7QUFTRSxRQUFJLEVBQUVDO0FBVFIsS0FVTUUsS0FWTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWUdELFFBWkgsQ0FERjtBQWdCRCxDQXRCMEIsQ0FBcEI7QUF3QlBMLFdBQVcsQ0FBQ1MsV0FBWixHQUEwQixhQUExQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccHJvamVjdHMuanMuYTc2ZTY2OWE2ZTI4MGRiOTQxN2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUaGVtZSwgd2l0aFN0eWxlcywgV2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG5pbnRlcmZhY2UgU3R5bGVzIHtcclxuICBjb2xvcjogc3RyaW5nO1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29sb3JzTWFwcGluZyB7XHJcbiAgZGVmYXVsdDogc3RyaW5nO1xyXG4gIGJsdWU6IHN0cmluZztcclxuICB2YXBlOiBzdHJpbmc7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU2l6ZXNNYXBwaW5nIHtcclxuICBkZWZhdWx0OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgc21hbGw6IHN0cmluZyB8IG51bWJlcjtcclxuICBsYXJnZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5leHBvcnQgdHlwZSBQYWxldHRlQ29sb3JLZXlzID1cclxuICB8IFwicHJpbWFyeVwiXHJcbiAgfCBcInNlY29uZGFyeVwiXHJcbiAgfCBcImVycm9yXCJcclxuICB8IFwid2FybmluZ1wiXHJcbiAgfCBcInRlcnRpYXJ5XCJcclxuICB8IFwic3VjY2Vzc1wiO1xyXG5cclxuaW50ZXJmYWNlIEJ1dHRvblN0eWxlcyBleHRlbmRzIFdpdGhTdHlsZXM8dHlwZW9mIHN0eWxlcz4ge1xyXG4gIHJlZj86IGFueTtcclxuICBjb2xvcjpcclxuICAgIHwgXCJ2YXBlXCJcclxuICAgIHwgXCJleHBlbnNlXCJcclxuICAgIHwgXCJzaG9wXCJcclxuICAgIHwgXCJkZWZhdWx0XCJcclxuICAgIHwgXCJ0ZXh0XCJcclxuICAgIHwgXCJibHVlXCJcclxuICAgIHwgUGFsZXR0ZUNvbG9yS2V5cztcclxuICBzaXplPzogXCJzbWFsbFwiIHwgXCJkZWZhdWx0XCIgfCBcImxhcmdlXCI7XHJcbiAgLyoqXHJcbiAgICAgICAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGJ1dHRvbi5cclxuICAgICAgICAgKi9cclxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAvKipcclxuICAgICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGJ1dHRvbiB3aWxsIGJlIGRpc2FibGVkLlxyXG4gICAgICAgICAgICovXHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogSWYgYHRydWVgLCBubyBlbGV2YXRpb24gaXMgdXNlZC5cclxuICAgICAgICAgICAqL1xyXG4gIGRpc2FibGVFbGV2YXRpb24/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogSWYgYHRydWVgLCB0aGUgIGtleWJvYXJkIGZvY3VzIHJpcHBsZSB3aWxsIGJlIGRpc2FibGVkLlxyXG4gICAgICAgICAgICovXHJcbiAgZGlzYWJsZUZvY3VzUmlwcGxlPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIEVsZW1lbnQgcGxhY2VkIGFmdGVyIHRoZSBjaGlsZHJlbi5cclxuICAgICAgICAgICAqL1xyXG4gIGVuZEljb24/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBidXR0b24gd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXHJcbiAgICAgICAgICAgKi9cclxuICBmdWxsV2lkdGg/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogVGhlIFVSTCB0byBsaW5rIHRvIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxyXG4gICAgICAgICAgICogSWYgZGVmaW5lZCwgYW4gYGFgIGVsZW1lbnQgd2lsbCBiZSB1c2VkIGFzIHRoZSByb290IG5vZGUuXHJcbiAgICAgICAgICAgKi9cclxuICBocmVmPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogRWxlbWVudCBwbGFjZWQgYmVmb3JlIHRoZSBjaGlsZHJlbi5cclxuICAgICAgICAgICAqL1xyXG4gIHN0YXJ0SWNvbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAvKipcclxuICAgICAgICAgICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cclxuICAgICAgICAgICAqL1xyXG4gIHZhcmlhbnQ/OiBcInRleHRcIiB8IFwib3V0bGluZWRcIiB8IFwiY29udGFpbmVkXCI7XHJcbn1cclxuXHJcbmNvbnN0IGJvcmRlclN0YXJ0ID0gXCIxcHggc29saWQgXCI7XHJcbi8vIExpa2UgaHR0cHM6Ly9naXRodWIuY29tL2JydW5vYmVydG9saW5pL3N0eWxlZC1ieVxyXG5jb25zdCBzdHlsZWRCeUNvbG9yID0gKHByb3BlcnR5OiBzdHJpbmcsIG1hcHBpbmc6IENvbG9yc01hcHBpbmcpID0+XHJcbiAgKHByb3BzOiBTdHlsZXMpID0+IG1hcHBpbmdbcHJvcHNbcHJvcGVydHldXTtcclxuY29uc3Qgc3R5bGVkQnlTaXplID0gKHByb3BlcnR5OiBzdHJpbmcsIG1hcHBpbmc6IFNpemVzTWFwcGluZykgPT5cclxuICAocHJvcHM6IFN0eWxlcykgPT4gbWFwcGluZ1twcm9wc1twcm9wZXJ0eV1dO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZSkgPT4gKHtcclxuICBjb2xvcjoge1xyXG4gICAgY29sb3I6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IFwiI2ZmZlwiLFxyXG4gICAgICBibHVlOiBcIiNmZmZcIixcclxuICAgICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXHJcbiAgICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5jb250cmFzdFRleHQsXHJcbiAgICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmNvbnRyYXN0VGV4dCxcclxuICAgICAgd2FybmluZzogdGhlbWUucGFsZXR0ZS53YXJuaW5nLmNvbnRyYXN0VGV4dCxcclxuICAgICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkuY29udHJhc3RUZXh0LFxyXG4gICAgICB0ZXh0OiB0aGVtZS5wYWxldHRlLmdldENvbnRyYXN0VGV4dCh0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSksXHJcbiAgICAgIHZhcGU6IFwiI2ZmZlwiLFxyXG4gICAgICBleHBlbnNlOiBcIiNmZmZcIixcclxuICAgICAgc2hvcDogXCIjZmZmXCIsXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIGNvbG9yT3V0bGluZToge1xyXG4gICAgY29sb3I6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICAgIGJsdWU6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjE5NkYzIDMwJSwgIzIxQ0JGMyA5MCUpXCIsXHJcbiAgICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluLFxyXG4gICAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLFxyXG4gICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcubWFpbixcclxuICAgICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkubWFpbixcclxuICAgICAgdGV4dDogXCJpbmhlcml0XCIsXHJcbiAgICAgIHZhcGU6IFwiI2ZmMWYwMFwiLFxyXG4gICAgICBleHBlbnNlOiBcIiMyZTllN2FcIixcclxuICAgICAgc2hvcDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgIH0pLFxyXG4gICAgW1wiJjpob3ZlciBhLCAmOmhvdmVyXCJdOiB7XHJcbiAgICAgIGNvbG9yOiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICAgIGRlZmF1bHQ6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICAgICAgYmx1ZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMyMTk2RjMgMzAlLCAjMjFDQkYzIDkwJSlcIixcclxuICAgICAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmssXHJcbiAgICAgICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLmRhcmssXHJcbiAgICAgICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcclxuICAgICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcuZGFyayxcclxuICAgICAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5kYXJrLFxyXG4gICAgICAgIHRleHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgIHZhcGU6IFwiI2ZmMWYwMFwiLFxyXG4gICAgICAgIGV4cGVuc2U6IFwiIzJlOWU3YVwiLFxyXG4gICAgICAgIHNob3A6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJhY2tncm91bmQ6IHtcclxuICAgIGJhY2tncm91bmQ6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IFwiIzAwMFwiLFxyXG4gICAgICBibHVlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzIxOTZGMyAzMCUsICMyMUNCRjMgOTAlKVwiLFxyXG4gICAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MubWFpbixcclxuICAgICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcclxuICAgICAgd2FybmluZzogdGhlbWUucGFsZXR0ZS53YXJuaW5nLm1haW4sXHJcbiAgICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5Lm1haW4sXHJcbiAgICAgIHRleHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICB2YXBlOiBcIiNmZjFmMDBcIixcclxuICAgICAgZXhwZW5zZTogXCIjMmU5ZTdhXCIsXHJcbiAgICAgIHNob3A6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICB9KSxcclxuICAgIFtcIiY6aG92ZXJcIl06IHtcclxuICAgICAgYmFja2dyb3VuZDogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgICBkZWZhdWx0OiBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gICAgICAgIGJsdWU6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMCAxMzcgMjQ3KSAzMCUsIHJnYigxMCAxMzggMTY4KSA5MCUpXCIsXHJcbiAgICAgICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXHJcbiAgICAgICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5kYXJrLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5kYXJrLFxyXG4gICAgICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmRhcmssXHJcbiAgICAgICAgd2FybmluZzogdGhlbWUucGFsZXR0ZS53YXJuaW5nLmRhcmssXHJcbiAgICAgICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkuZGFyayxcclxuICAgICAgICB0ZXh0OiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICAgICB2YXBlOiBcIiNlMDFiMDBcIixcclxuICAgICAgICBleHBlbnNlOiBcIiMyODhiNmJcIixcclxuICAgICAgICBzaG9wOiBcIiMwMDBcIixcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYmFja2dyb3VuZE91dGxpbmU6IHtcclxuICAgIGJvcmRlcjogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgZGVmYXVsdDogYm9yZGVyU3RhcnQgKyBcIiMwMDBcIixcclxuICAgICAgYmx1ZTogYm9yZGVyU3RhcnQgKyBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzIxOTZGMyAzMCUsICMyMUNCRjMgOTAlKVwiLFxyXG4gICAgICBwcmltYXJ5OiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgICBzZWNvbmRhcnk6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgICAgc3VjY2VzczogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MubWFpbixcclxuICAgICAgZXJyb3I6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLFxyXG4gICAgICB3YXJuaW5nOiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUud2FybmluZy5tYWluLFxyXG4gICAgICB0ZXJ0aWFyeTogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5Lm1haW4sXHJcbiAgICAgIHRleHQ6IGJvcmRlclN0YXJ0ICsgXCJpbmhlcml0XCIsXHJcbiAgICAgIHZhcGU6IGJvcmRlclN0YXJ0ICsgXCIjZmYxZjAwXCIsXHJcbiAgICAgIGV4cGVuc2U6IGJvcmRlclN0YXJ0ICsgXCIjMmU5ZTdhXCIsXHJcbiAgICAgIHNob3A6IGJvcmRlclN0YXJ0ICsgXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgIH0pLFxyXG4gICAgW1wiJjpob3ZlclwiXToge1xyXG4gICAgICBib3JkZXI6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgICAgZGVmYXVsdDogYm9yZGVyU3RhcnQgKyBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gICAgICAgIGJsdWU6IGJvcmRlclN0YXJ0ICtcclxuICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMCAxMzcgMjQ3KSAzMCUsIHJnYigxMCAxMzggMTY4KSA5MCUpXCIsXHJcbiAgICAgICAgcHJpbWFyeTogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgICBzZWNvbmRhcnk6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayxcclxuICAgICAgICBzdWNjZXNzOiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5kYXJrLFxyXG4gICAgICAgIGVycm9yOiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcclxuICAgICAgICB3YXJuaW5nOiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUud2FybmluZy5kYXJrLFxyXG4gICAgICAgIHRlcnRpYXJ5OiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUudGVydGlhcnkuZGFyayxcclxuICAgICAgICB0ZXh0OiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICAgIHZhcGU6IGJvcmRlclN0YXJ0ICsgXCIjZTAxYjAwXCIsXHJcbiAgICAgICAgZXhwZW5zZTogYm9yZGVyU3RhcnQgKyBcIiMyODhiNmJcIixcclxuICAgICAgICBzaG9wOiBib3JkZXJTdGFydCArIFwiIzAwMFwiLFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSxcclxuICByb290OiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcclxuICAgIGJvcmRlcjogMCxcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBoZWlnaHQ6IHN0eWxlZEJ5U2l6ZShcInNpemVcIiwge1xyXG4gICAgICBkZWZhdWx0OiA0MCxcclxuICAgICAgbGFyZ2U6IDQ4LFxyXG4gICAgICBzbWFsbDogMjAsXHJcbiAgICB9KSxcclxuICAgIHBhZGRpbmc6IHN0eWxlZEJ5U2l6ZShcInNpemVcIiwge1xyXG4gICAgICBkZWZhdWx0OiB0aGVtZS5zcGFjaW5nKDEuNiwgMS40KSxcclxuICAgICAgbGFyZ2U6IHRoZW1lLnNwYWNpbmcoMiwgMS41KSxcclxuICAgICAgc21hbGw6IHRoZW1lLnNwYWNpbmcoMS4xLCAwLjYpLFxyXG4gICAgfSksXHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG5cclxuICAgIGJveFNoYWRvdzogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgZGVmYXVsdDogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgICAgYmx1ZTogXCJyZ2JhKDMzLCAyMDMsIDI0MywgMC4zKSAxcHggMnB4IDFweCAxcHhcIixcclxuICAgICAgcHJpbWFyeTogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgICAgc2Vjb25kYXJ5OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICBzdWNjZXNzOiB0aGVtZS5zaGFkb3dzWzRdLFxyXG4gICAgICBlcnJvcjogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgd2FybmluZzogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgdGVydGlhcnk6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIHRleHQ6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIHZhcGU6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICB9KSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBCcmFuZEJ1dHRvbiA9IHdpdGhTdHlsZXMoc3R5bGVzKSgoXHJcbiAgeyBjbGFzc2VzLCB2YXJpYW50LCBzaXplLCBjaGlsZHJlbiwgY29sb3IsIC4uLm90aGVyIH06IFByb3BzV2l0aENoaWxkcmVuPFxyXG4gICAgQnV0dG9uU3R5bGVzXHJcbiAgPixcclxuKSA9PiB7XHJcbiAgY29uc3QgaXNPdXRsaW5lZCA9IHZhcmlhbnQgPT09IFwib3V0bGluZWRcIjtcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goW1xyXG4gICAgICAgIGNsYXNzZXMucm9vdCxcclxuICAgICAgICB7IFtjbGFzc2VzLmNvbG9yT3V0bGluZV06IGlzT3V0bGluZWQgfSxcclxuICAgICAgICB7IFtjbGFzc2VzLmNvbG9yXTogIWlzT3V0bGluZWQgfSxcclxuICAgICAgICB7IFtjbGFzc2VzLmJhY2tncm91bmRPdXRsaW5lXTogaXNPdXRsaW5lZCB9LFxyXG4gICAgICAgIHsgW2NsYXNzZXMuYmFja2dyb3VuZF06ICFpc091dGxpbmVkIH0sXHJcbiAgICAgIF0pfVxyXG4gICAgICB2YXJpYW50PXt2YXJpYW50fVxyXG4gICAgICBzaXplPXtzaXplfVxyXG4gICAgICB7Li4ub3RoZXJ9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQnV0dG9uPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuQnJhbmRCdXR0b24uZGlzcGxheU5hbWUgPSBcIkJyYW5kQnV0dG9uXCI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=