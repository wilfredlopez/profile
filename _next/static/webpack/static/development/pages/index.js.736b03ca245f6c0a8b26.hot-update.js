webpackHotUpdate("static\\development\\pages\\index.js",{

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




const DEFAULT_SHADOW = "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)";
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
    ["&:hover MuiButton-label"]: {
      color: styledByColor("color", {
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
      })
    }
  },
  background: {
    background: styledByColor("color", {
      default: "#00796b",
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
        default: "rgb(0, 84, 74)",
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
      default: borderStart + "#00796b",
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
      boder: styledByColor("color", {
        default: borderStart + "rgb(0, 84, 74)",
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
    }])
  }, other, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0JyYW5kQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJERUZBVUxUX1NIQURPVyIsImJvcmRlclN0YXJ0Iiwic3R5bGVkQnlDb2xvciIsInByb3BlcnR5IiwibWFwcGluZyIsInByb3BzIiwic3R5bGVkQnlTaXplIiwic3R5bGVzIiwidGhlbWUiLCJjb2xvciIsImRlZmF1bHQiLCJibHVlIiwicHJpbWFyeSIsInBhbGV0dGUiLCJjb250cmFzdFRleHQiLCJzZWNvbmRhcnkiLCJzdWNjZXNzIiwiZXJyb3IiLCJ3YXJuaW5nIiwidGVydGlhcnkiLCJ0ZXh0IiwiZ2V0Q29udHJhc3RUZXh0IiwidmFwZSIsImV4cGVuc2UiLCJzaG9wIiwiY29sb3JPdXRsaW5lIiwiZGFyayIsIm1haW4iLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZE91dGxpbmUiLCJib3JkZXIiLCJib2RlciIsInJvb3QiLCJib3JkZXJSYWRpdXMiLCJzaGFwZSIsImhlaWdodCIsImxhcmdlIiwic21hbGwiLCJwYWRkaW5nIiwic3BhY2luZyIsImN1cnNvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJCcmFuZEJ1dHRvbiIsIndpdGhTdHlsZXMiLCJjbGFzc2VzIiwidmFyaWFudCIsInNpemUiLCJjaGlsZHJlbiIsIm90aGVyIiwiaXNPdXRsaW5lZCIsImNsc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE4RUEsTUFBTUEsY0FBYyxHQUNsQixzR0FERjtBQUdBLE1BQU1DLFdBQVcsR0FBRyxZQUFwQixDLENBQ0E7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHLENBQUNDLFFBQUQsRUFBbUJDLE9BQW5CLEtBQ25CQyxLQUFELElBQW1CRCxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsUUFBRCxDQUFOLENBRDVCOztBQUVBLE1BQU1HLFlBQVksR0FBRyxDQUFDSCxRQUFELEVBQW1CQyxPQUFuQixLQUNsQkMsS0FB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aUpPLE1BQU1DLFdBQVcsR0FBR0MsMkVBQVUsQ0FBQ3JDLE1BQUQsQ0FBVixDQUFtQixVQUl6QztBQUFBLE1BSEg7QUFBRXNDLFdBQUY7QUFBV0MsV0FBWDtBQUFvQkMsUUFBcEI7QUFBMEJDLFlBQTFCO0FBQW9DdkM7QUFBcEMsR0FHRztBQUFBLE1BSDJDd0MsS0FHM0M7O0FBQ0gsUUFBTUMsVUFBVSxHQUFHSixPQUFPLEtBQUssVUFBL0I7QUFDQSxTQUNFLE1BQUMsZ0VBQUQ7QUFDRSxhQUFTLEVBQUVLLG9EQUFJLENBQUMsQ0FDZE4sT0FBTyxDQUFDYixJQURNLEVBRWQ7QUFBRSxPQUFDYSxPQUFPLENBQUNwQixZQUFULEdBQXdCeUI7QUFBMUIsS0FGYyxFQUdkO0FBQUUsT0FBQ0wsT0FBTyxDQUFDcEMsS0FBVCxHQUFpQixDQUFDeUM7QUFBcEIsS0FIYyxFQUlkO0FBQUUsT0FBQ0wsT0FBTyxDQUFDaEIsaUJBQVQsR0FBNkJxQjtBQUEvQixLQUpjLEVBS2Q7QUFBRSxPQUFDTCxPQUFPLENBQUNqQixVQUFULEdBQXNCLENBQUNzQjtBQUF6QixLQUxjLENBQUQ7QUFEakIsS0FRTUQsS0FSTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVUdELFFBVkgsQ0FERjtBQWNELENBcEIwQixDQUFwQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNzM2YjAzY2EyNDVmNmMwYThiMjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUaGVtZSwgd2l0aFN0eWxlcywgV2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG5pbnRlcmZhY2UgU3R5bGVzIHtcclxuICBjb2xvcjogc3RyaW5nO1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29sb3JzTWFwcGluZyB7XHJcbiAgZGVmYXVsdDogc3RyaW5nO1xyXG4gIGJsdWU6IHN0cmluZztcclxuICB2YXBlOiBzdHJpbmc7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU2l6ZXNNYXBwaW5nIHtcclxuICBkZWZhdWx0OiBzdHJpbmc7XHJcbiAgc21hbGw6IHN0cmluZztcclxuICBsYXJnZTogc3RyaW5nO1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5leHBvcnQgdHlwZSBQYWxldHRlQ29sb3JLZXlzID1cclxuICB8IFwicHJpbWFyeVwiXHJcbiAgfCBcInNlY29uZGFyeVwiXHJcbiAgfCBcImVycm9yXCJcclxuICB8IFwid2FybmluZ1wiXHJcbiAgfCBcInRlcnRpYXJ5XCJcclxuICB8IFwic3VjY2Vzc1wiO1xyXG5cclxuaW50ZXJmYWNlIEJ1dHRvblN0eWxlcyBleHRlbmRzIFdpdGhTdHlsZXM8dHlwZW9mIHN0eWxlcz4ge1xyXG4gIGNvbG9yOlxyXG4gICAgfCBcInZhcGVcIlxyXG4gICAgfCBcImV4cGVuc2VcIlxyXG4gICAgfCBcInNob3BcIlxyXG4gICAgfCBcImRlZmF1bHRcIlxyXG4gICAgfCBcInRleHRcIlxyXG4gICAgfCBcImJsdWVcIlxyXG4gICAgfCBQYWxldHRlQ29sb3JLZXlzO1xyXG4gIHNpemU/OiBcInNtYWxsXCIgfCBcImRlZmF1bHRcIiB8IFwibGFyZ2VcIjtcclxuICAvKipcclxuICAgICAgICAgKiBUaGUgY29udGVudCBvZiB0aGUgYnV0dG9uLlxyXG4gICAgICAgICAqL1xyXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYnV0dG9uIHdpbGwgYmUgZGlzYWJsZWQuXHJcbiAgICAgICAgICAgKi9cclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIG5vIGVsZXZhdGlvbiBpcyB1c2VkLlxyXG4gICAgICAgICAgICovXHJcbiAgZGlzYWJsZUVsZXZhdGlvbj86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSAga2V5Ym9hcmQgZm9jdXMgcmlwcGxlIHdpbGwgYmUgZGlzYWJsZWQuXHJcbiAgICAgICAgICAgKi9cclxuICBkaXNhYmxlRm9jdXNSaXBwbGU/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogRWxlbWVudCBwbGFjZWQgYWZ0ZXIgdGhlIGNoaWxkcmVuLlxyXG4gICAgICAgICAgICovXHJcbiAgZW5kSWNvbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAvKipcclxuICAgICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGJ1dHRvbiB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cclxuICAgICAgICAgICAqL1xyXG4gIGZ1bGxXaWR0aD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBUaGUgVVJMIHRvIGxpbmsgdG8gd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXHJcbiAgICAgICAgICAgKiBJZiBkZWZpbmVkLCBhbiBgYWAgZWxlbWVudCB3aWxsIGJlIHVzZWQgYXMgdGhlIHJvb3Qgbm9kZS5cclxuICAgICAgICAgICAqL1xyXG4gIGhyZWY/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBFbGVtZW50IHBsYWNlZCBiZWZvcmUgdGhlIGNoaWxkcmVuLlxyXG4gICAgICAgICAgICovXHJcbiAgc3RhcnRJY29uPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxyXG4gICAgICAgICAgICovXHJcbiAgdmFyaWFudD86IFwidGV4dFwiIHwgXCJvdXRsaW5lZFwiIHwgXCJjb250YWluZWRcIjtcclxufVxyXG5cclxuY29uc3QgREVGQVVMVF9TSEFET1cgPVxyXG4gIFwiMHB4IDNweCAxcHggLTJweCByZ2JhKDAsMCwwLDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsMCwwLDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEyKVwiO1xyXG5cclxuY29uc3QgYm9yZGVyU3RhcnQgPSBcIjFweCBzb2xpZCBcIjtcclxuLy8gTGlrZSBodHRwczovL2dpdGh1Yi5jb20vYnJ1bm9iZXJ0b2xpbmkvc3R5bGVkLWJ5XHJcbmNvbnN0IHN0eWxlZEJ5Q29sb3IgPSAocHJvcGVydHk6IHN0cmluZywgbWFwcGluZzogQ29sb3JzTWFwcGluZykgPT5cclxuICAocHJvcHM6IFN0eWxlcykgPT4gbWFwcGluZ1twcm9wc1twcm9wZXJ0eV1dO1xyXG5jb25zdCBzdHlsZWRCeVNpemUgPSAocHJvcGVydHk6IHN0cmluZywgbWFwcGluZzogU2l6ZXNNYXBwaW5nKSA9PlxyXG4gIChwcm9wczogU3R5bGVzKSA9PiBtYXBwaW5nW3Byb3BzW3Byb3BlcnR5XV07XHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lKSA9PiAoe1xyXG4gIGNvbG9yOiB7XHJcbiAgICBjb2xvcjogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgZGVmYXVsdDogXCIjZmZmXCIsXHJcbiAgICAgIGJsdWU6IFwiI2ZmZlwiLFxyXG4gICAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0LFxyXG4gICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLmNvbnRyYXN0VGV4dCxcclxuICAgICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuY29udHJhc3RUZXh0LFxyXG4gICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcuY29udHJhc3RUZXh0LFxyXG4gICAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5jb250cmFzdFRleHQsXHJcbiAgICAgIHRleHQ6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5KSxcclxuICAgICAgdmFwZTogXCIjZmZmXCIsXHJcbiAgICAgIGV4cGVuc2U6IFwiI2ZmZlwiLFxyXG4gICAgICBzaG9wOiBcIiNmZmZcIixcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgY29sb3JPdXRsaW5lOiB7XHJcbiAgICBjb2xvcjogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgZGVmYXVsdDogXCIjMDA3OTZiXCIsXHJcbiAgICAgIGJsdWU6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjE5NkYzIDMwJSwgIzIxQ0JGMyA5MCUpXCIsXHJcbiAgICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluLFxyXG4gICAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLFxyXG4gICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcubWFpbixcclxuICAgICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkubWFpbixcclxuICAgICAgdGV4dDogXCJpbmhlcml0XCIsXHJcbiAgICAgIHZhcGU6IFwiI2ZmMWYwMFwiLFxyXG4gICAgICBleHBlbnNlOiBcIiMyZTllN2FcIixcclxuICAgICAgc2hvcDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgIH0pLFxyXG4gICAgW1wiJjpob3ZlciBNdWlCdXR0b24tbGFiZWxcIl06IHtcclxuICAgICAgY29sb3I6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgICAgZGVmYXVsdDogXCIjMDA3OTZiXCIsXHJcbiAgICAgICAgYmx1ZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMyMTk2RjMgMzAlLCAjMjFDQkYzIDkwJSlcIixcclxuICAgICAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICAgICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLm1haW4sXHJcbiAgICAgICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcclxuICAgICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcubWFpbixcclxuICAgICAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5tYWluLFxyXG4gICAgICAgIHRleHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgIHZhcGU6IFwiI2ZmMWYwMFwiLFxyXG4gICAgICAgIGV4cGVuc2U6IFwiIzJlOWU3YVwiLFxyXG4gICAgICAgIHNob3A6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJhY2tncm91bmQ6IHtcclxuICAgIGJhY2tncm91bmQ6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IFwiIzAwNzk2YlwiLFxyXG4gICAgICBibHVlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzIxOTZGMyAzMCUsICMyMUNCRjMgOTAlKVwiLFxyXG4gICAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MubWFpbixcclxuICAgICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcclxuICAgICAgd2FybmluZzogdGhlbWUucGFsZXR0ZS53YXJuaW5nLm1haW4sXHJcbiAgICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5Lm1haW4sXHJcbiAgICAgIHRleHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICB2YXBlOiBcIiNmZjFmMDBcIixcclxuICAgICAgZXhwZW5zZTogXCIjMmU5ZTdhXCIsXHJcbiAgICAgIHNob3A6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICB9KSxcclxuICAgIFtcIiY6aG92ZXJcIl06IHtcclxuICAgICAgYmFja2dyb3VuZDogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgICBkZWZhdWx0OiBcInJnYigwLCA4NCwgNzQpXCIsXHJcbiAgICAgICAgYmx1ZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigwIDEzNyAyNDcpIDMwJSwgcmdiKDEwIDEzOCAxNjgpIDkwJSlcIixcclxuICAgICAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmssXHJcbiAgICAgICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLmRhcmssXHJcbiAgICAgICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcclxuICAgICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcuZGFyayxcclxuICAgICAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5kYXJrLFxyXG4gICAgICAgIHRleHQ6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICAgIHZhcGU6IFwiI2UwMWIwMFwiLFxyXG4gICAgICAgIGV4cGVuc2U6IFwiIzI4OGI2YlwiLFxyXG4gICAgICAgIHNob3A6IFwiIzAwMFwiLFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBiYWNrZ3JvdW5kT3V0bGluZToge1xyXG4gICAgYm9yZGVyOiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICBkZWZhdWx0OiBib3JkZXJTdGFydCArIFwiIzAwNzk2YlwiLFxyXG4gICAgICBibHVlOiBib3JkZXJTdGFydCArIFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjE5NkYzIDMwJSwgIzIxQ0JGMyA5MCUpXCIsXHJcbiAgICAgIHByaW1hcnk6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgIHNlY29uZGFyeTogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgICBzdWNjZXNzOiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluLFxyXG4gICAgICBlcnJvcjogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXHJcbiAgICAgIHdhcm5pbmc6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS53YXJuaW5nLm1haW4sXHJcbiAgICAgIHRlcnRpYXJ5OiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUudGVydGlhcnkubWFpbixcclxuICAgICAgdGV4dDogYm9yZGVyU3RhcnQgKyBcImluaGVyaXRcIixcclxuICAgICAgdmFwZTogYm9yZGVyU3RhcnQgKyBcIiNmZjFmMDBcIixcclxuICAgICAgZXhwZW5zZTogYm9yZGVyU3RhcnQgKyBcIiMyZTllN2FcIixcclxuICAgICAgc2hvcDogYm9yZGVyU3RhcnQgKyBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gICAgfSksXHJcbiAgICBbXCImOmhvdmVyXCJdOiB7XHJcbiAgICAgIGJvZGVyOiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICAgIGRlZmF1bHQ6IGJvcmRlclN0YXJ0ICsgXCJyZ2IoMCwgODQsIDc0KVwiLFxyXG4gICAgICAgIGJsdWU6IGJvcmRlclN0YXJ0ICtcclxuICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMCAxMzcgMjQ3KSAzMCUsIHJnYigxMCAxMzggMTY4KSA5MCUpXCIsXHJcbiAgICAgICAgcHJpbWFyeTogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgICBzZWNvbmRhcnk6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayxcclxuICAgICAgICBzdWNjZXNzOiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5kYXJrLFxyXG4gICAgICAgIGVycm9yOiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcclxuICAgICAgICB3YXJuaW5nOiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUud2FybmluZy5kYXJrLFxyXG4gICAgICAgIHRlcnRpYXJ5OiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUudGVydGlhcnkuZGFyayxcclxuICAgICAgICB0ZXh0OiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICAgIHZhcGU6IGJvcmRlclN0YXJ0ICsgXCIjZTAxYjAwXCIsXHJcbiAgICAgICAgZXhwZW5zZTogYm9yZGVyU3RhcnQgKyBcIiMyODhiNmJcIixcclxuICAgICAgICBzaG9wOiBib3JkZXJTdGFydCArIFwiIzAwMFwiLFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSxcclxuICByb290OiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcclxuICAgIGJvcmRlcjogMCxcclxuXHJcbiAgICBoZWlnaHQ6IHN0eWxlZEJ5U2l6ZShcInNpemVcIiwge1xyXG4gICAgICBkZWZhdWx0OiBcIjQwcHhcIixcclxuICAgICAgbGFyZ2U6IFwiNDhweFwiLFxyXG4gICAgICBzbWFsbDogXCIyMHB4XCIsXHJcbiAgICB9KSxcclxuICAgIHBhZGRpbmc6IHN0eWxlZEJ5U2l6ZShcInNpemVcIiwge1xyXG4gICAgICBkZWZhdWx0OiB0aGVtZS5zcGFjaW5nKDAuNSwgMSksXHJcbiAgICAgIGxhcmdlOiB0aGVtZS5zcGFjaW5nKDEuNSwgMS41KSxcclxuICAgICAgc21hbGw6IHRoZW1lLnNwYWNpbmcoMSwgMC41KSxcclxuICAgIH0pLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuXHJcbiAgICBib3hTaGFkb3c6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IERFRkFVTFRfU0hBRE9XLFxyXG4gICAgICBibHVlOiBcInJnYmEoMzMsIDIwMywgMjQzLCAwLjMpIDFweCAycHggMXB4IDFweFwiLFxyXG4gICAgICBwcmltYXJ5OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgICBzZWNvbmRhcnk6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIHN1Y2Nlc3M6IHRoZW1lLnNoYWRvd3NbNF0sXHJcbiAgICAgIGVycm9yOiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICB3YXJuaW5nOiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICB0ZXJ0aWFyeTogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgdGV4dDogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgdmFwZTogdGhlbWUuc2hhZG93c1szXSxcclxuICAgIH0pLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJyYW5kQnV0dG9uID0gd2l0aFN0eWxlcyhzdHlsZXMpKChcclxuICB7IGNsYXNzZXMsIHZhcmlhbnQsIHNpemUsIGNoaWxkcmVuLCBjb2xvciwgLi4ub3RoZXIgfTogUHJvcHNXaXRoQ2hpbGRyZW48XHJcbiAgICBCdXR0b25TdHlsZXNcclxuICA+LFxyXG4pID0+IHtcclxuICBjb25zdCBpc091dGxpbmVkID0gdmFyaWFudCA9PT0gXCJvdXRsaW5lZFwiO1xyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChbXHJcbiAgICAgICAgY2xhc3Nlcy5yb290LFxyXG4gICAgICAgIHsgW2NsYXNzZXMuY29sb3JPdXRsaW5lXTogaXNPdXRsaW5lZCB9LFxyXG4gICAgICAgIHsgW2NsYXNzZXMuY29sb3JdOiAhaXNPdXRsaW5lZCB9LFxyXG4gICAgICAgIHsgW2NsYXNzZXMuYmFja2dyb3VuZE91dGxpbmVdOiBpc091dGxpbmVkIH0sXHJcbiAgICAgICAgeyBbY2xhc3Nlcy5iYWNrZ3JvdW5kXTogIWlzT3V0bGluZWQgfSxcclxuICAgICAgXSl9XHJcbiAgICAgIHsuLi5vdGhlcn1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9CdXR0b24+XHJcbiAgKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=