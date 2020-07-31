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
      default: "40px important!",
      large: "48px important!",
      small: "20px important!"
    }),
    padding: styledBySize("size", {
      default: theme.spacing(0.5, 1) + " important!",
      large: theme.spacing(1.5, 1.5) + " important!",
      small: theme.spacing(1, 0.5) + " important!"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0JyYW5kQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJERUZBVUxUX1NIQURPVyIsImJvcmRlclN0YXJ0Iiwic3R5bGVkQnlDb2xvciIsInByb3BlcnR5IiwibWFwcGluZyIsInByb3BzIiwic3R5bGVkQnlTaXplIiwic3R5bGVzIiwidGhlbWUiLCJjb2xvciIsImRlZmF1bHQiLCJibHVlIiwicHJpbWFyeSIsInBhbGV0dGUiLCJjb250cmFzdFRleHQiLCJzZWNvbmRhcnkiLCJzdWNjZXNzIiwiZXJyb3IiLCJ3YXJuaW5nIiwidGVydGlhcnkiLCJ0ZXh0IiwiZ2V0Q29udHJhc3RUZXh0IiwidmFwZSIsImV4cGVuc2UiLCJzaG9wIiwiY29sb3JPdXRsaW5lIiwibWFpbiIsImRhcmsiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZE91dGxpbmUiLCJib3JkZXIiLCJyb290IiwiYm9yZGVyUmFkaXVzIiwic2hhcGUiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwibGFyZ2UiLCJzbWFsbCIsInBhZGRpbmciLCJzcGFjaW5nIiwiY3Vyc29yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsIkJyYW5kQnV0dG9uIiwid2l0aFN0eWxlcyIsImNsYXNzZXMiLCJ2YXJpYW50Iiwic2l6ZSIsImNoaWxkcmVuIiwib3RoZXIiLCJpc091dGxpbmVkIiwiY2xzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQThFQSxNQUFNQSxjQUFjLEdBQ2xCLHNHQURGO0FBR0EsTUFBTUMsV0FBVyxHQUFHLFlBQXBCLEMsQ0FDQTs7QUFDQSxNQUFNQyxhQUFhLEdBQUcsQ0FBQ0MsUUFBRCxFQUFtQkMsT0FBbkIsS0FDbkJDLEtBQUQsSUFBbUJELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixRQUFELENBQU4sQ0FENUI7O0FBRUEsTUFBTUcsWUFBWSxHQUFHLENBQUNILFFBQUQsRUFBbUJDLE9BQW5CLEtBQ2xC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RUFBRWQsS0FBSyxDQUFDa0MsT0FBTixDQUFjLENBQWQ7QUFWMEIsS0FBVjtBQWhCcEI7QUFsSDBCLENBQW5CLENBQWY7O0FBaUpPLE1BQU1DLFdBQVcsR0FBR0MsMkVBQVUsQ0FBQ3JDLE1BQUQsQ0FBVixDQUFtQixVQUl6QztBQUFBLE1BSEg7QUFBRXNDLFdBQUY7QUFBV0MsV0FBWDtBQUFvQkMsUUFBcEI7QUFBMEJDLFlBQTFCO0FBQW9DdkM7QUFBcEMsR0FHRztBQUFBLE1BSDJDd0MsS0FHM0M7O0FBQ0gsUUFBTUMsVUFBVSxHQUFHSixPQUFPLEtBQUssVUFBL0I7QUFDQSxTQUNFLE1BQUMsZ0VBQUQ7QUFDRSxhQUFTLEVBQUVLLG9EQUFJLENBQUMsQ0FDZE4sT0FBTyxDQUFDZCxJQURNLEVBRWQ7QUFBRSxPQUFDYyxPQUFPLENBQUNwQixZQUFULEdBQXdCeUI7QUFBMUIsS0FGYyxFQUdkO0FBQUUsT0FBQ0wsT0FBTyxDQUFDcEMsS0FBVCxHQUFpQixDQUFDeUM7QUFBcEIsS0FIYyxFQUlkO0FBQUUsT0FBQ0wsT0FBTyxDQUFDaEIsaUJBQVQsR0FBNkJxQjtBQUEvQixLQUpjLEVBS2Q7QUFBRSxPQUFDTCxPQUFPLENBQUNqQixVQUFULEdBQXNCLENBQUNzQjtBQUF6QixLQUxjLENBQUQ7QUFEakIsS0FRTUQsS0FSTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVUdELFFBVkgsQ0FERjtBQWNELENBcEIwQixDQUFwQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuY2JkMjFhNGIwNDQ1ZDI1ZGZjZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUaGVtZSwgd2l0aFN0eWxlcywgV2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG5pbnRlcmZhY2UgU3R5bGVzIHtcclxuICBjb2xvcjogc3RyaW5nO1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29sb3JzTWFwcGluZyB7XHJcbiAgZGVmYXVsdDogc3RyaW5nO1xyXG4gIGJsdWU6IHN0cmluZztcclxuICB2YXBlOiBzdHJpbmc7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU2l6ZXNNYXBwaW5nIHtcclxuICBkZWZhdWx0OiBzdHJpbmc7XHJcbiAgc21hbGw6IHN0cmluZztcclxuICBsYXJnZTogc3RyaW5nO1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5leHBvcnQgdHlwZSBQYWxldHRlQ29sb3JLZXlzID1cclxuICB8IFwicHJpbWFyeVwiXHJcbiAgfCBcInNlY29uZGFyeVwiXHJcbiAgfCBcImVycm9yXCJcclxuICB8IFwid2FybmluZ1wiXHJcbiAgfCBcInRlcnRpYXJ5XCJcclxuICB8IFwic3VjY2Vzc1wiO1xyXG5cclxuaW50ZXJmYWNlIEJ1dHRvblN0eWxlcyBleHRlbmRzIFdpdGhTdHlsZXM8dHlwZW9mIHN0eWxlcz4ge1xyXG4gIGNvbG9yOlxyXG4gICAgfCBcInZhcGVcIlxyXG4gICAgfCBcImV4cGVuc2VcIlxyXG4gICAgfCBcInNob3BcIlxyXG4gICAgfCBcImRlZmF1bHRcIlxyXG4gICAgfCBcInRleHRcIlxyXG4gICAgfCBcImJsdWVcIlxyXG4gICAgfCBQYWxldHRlQ29sb3JLZXlzO1xyXG4gIHNpemU/OiBcInNtYWxsXCIgfCBcImRlZmF1bHRcIiB8IFwibGFyZ2VcIjtcclxuICAvKipcclxuICAgICAgICAgKiBUaGUgY29udGVudCBvZiB0aGUgYnV0dG9uLlxyXG4gICAgICAgICAqL1xyXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYnV0dG9uIHdpbGwgYmUgZGlzYWJsZWQuXHJcbiAgICAgICAgICAgKi9cclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIG5vIGVsZXZhdGlvbiBpcyB1c2VkLlxyXG4gICAgICAgICAgICovXHJcbiAgZGlzYWJsZUVsZXZhdGlvbj86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSAga2V5Ym9hcmQgZm9jdXMgcmlwcGxlIHdpbGwgYmUgZGlzYWJsZWQuXHJcbiAgICAgICAgICAgKi9cclxuICBkaXNhYmxlRm9jdXNSaXBwbGU/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogRWxlbWVudCBwbGFjZWQgYWZ0ZXIgdGhlIGNoaWxkcmVuLlxyXG4gICAgICAgICAgICovXHJcbiAgZW5kSWNvbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAvKipcclxuICAgICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGJ1dHRvbiB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cclxuICAgICAgICAgICAqL1xyXG4gIGZ1bGxXaWR0aD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBUaGUgVVJMIHRvIGxpbmsgdG8gd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXHJcbiAgICAgICAgICAgKiBJZiBkZWZpbmVkLCBhbiBgYWAgZWxlbWVudCB3aWxsIGJlIHVzZWQgYXMgdGhlIHJvb3Qgbm9kZS5cclxuICAgICAgICAgICAqL1xyXG4gIGhyZWY/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBFbGVtZW50IHBsYWNlZCBiZWZvcmUgdGhlIGNoaWxkcmVuLlxyXG4gICAgICAgICAgICovXHJcbiAgc3RhcnRJY29uPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxyXG4gICAgICAgICAgICovXHJcbiAgdmFyaWFudD86IFwidGV4dFwiIHwgXCJvdXRsaW5lZFwiIHwgXCJjb250YWluZWRcIjtcclxufVxyXG5cclxuY29uc3QgREVGQVVMVF9TSEFET1cgPVxyXG4gIFwiMHB4IDNweCAxcHggLTJweCByZ2JhKDAsMCwwLDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsMCwwLDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEyKVwiO1xyXG5cclxuY29uc3QgYm9yZGVyU3RhcnQgPSBcIjFweCBzb2xpZCBcIjtcclxuLy8gTGlrZSBodHRwczovL2dpdGh1Yi5jb20vYnJ1bm9iZXJ0b2xpbmkvc3R5bGVkLWJ5XHJcbmNvbnN0IHN0eWxlZEJ5Q29sb3IgPSAocHJvcGVydHk6IHN0cmluZywgbWFwcGluZzogQ29sb3JzTWFwcGluZykgPT5cclxuICAocHJvcHM6IFN0eWxlcykgPT4gbWFwcGluZ1twcm9wc1twcm9wZXJ0eV1dO1xyXG5jb25zdCBzdHlsZWRCeVNpemUgPSAocHJvcGVydHk6IHN0cmluZywgbWFwcGluZzogU2l6ZXNNYXBwaW5nKSA9PlxyXG4gIChwcm9wczogU3R5bGVzKSA9PiBtYXBwaW5nW3Byb3BzW3Byb3BlcnR5XV07XHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lKSA9PiAoe1xyXG4gIGNvbG9yOiB7XHJcbiAgICBjb2xvcjogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgZGVmYXVsdDogXCIjZmZmXCIsXHJcbiAgICAgIGJsdWU6IFwiI2ZmZlwiLFxyXG4gICAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0LFxyXG4gICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLmNvbnRyYXN0VGV4dCxcclxuICAgICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuY29udHJhc3RUZXh0LFxyXG4gICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcuY29udHJhc3RUZXh0LFxyXG4gICAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5jb250cmFzdFRleHQsXHJcbiAgICAgIHRleHQ6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5KSxcclxuICAgICAgdmFwZTogXCIjZmZmXCIsXHJcbiAgICAgIGV4cGVuc2U6IFwiI2ZmZlwiLFxyXG4gICAgICBzaG9wOiBcIiNmZmZcIixcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgY29sb3JPdXRsaW5lOiB7XHJcbiAgICBjb2xvcjogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgZGVmYXVsdDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgICAgYmx1ZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMyMTk2RjMgMzAlLCAjMjFDQkYzIDkwJSlcIixcclxuICAgICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgIHNlY29uZGFyeTogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLm1haW4sXHJcbiAgICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXHJcbiAgICAgIHdhcm5pbmc6IHRoZW1lLnBhbGV0dGUud2FybmluZy5tYWluLFxyXG4gICAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5tYWluLFxyXG4gICAgICB0ZXh0OiBcImluaGVyaXRcIixcclxuICAgICAgdmFwZTogXCIjZmYxZjAwXCIsXHJcbiAgICAgIGV4cGVuc2U6IFwiIzJlOWU3YVwiLFxyXG4gICAgICBzaG9wOiBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gICAgfSksXHJcbiAgICBbXCImOmhvdmVyIGEsICY6aG92ZXJcIl06IHtcclxuICAgICAgY29sb3I6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgICAgZGVmYXVsdDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgICAgICBibHVlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzIxOTZGMyAzMCUsICMyMUNCRjMgOTAlKVwiLFxyXG4gICAgICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgICAgIHNlY29uZGFyeTogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayxcclxuICAgICAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MuZGFyayxcclxuICAgICAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5kYXJrLFxyXG4gICAgICAgIHdhcm5pbmc6IHRoZW1lLnBhbGV0dGUud2FybmluZy5kYXJrLFxyXG4gICAgICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5LmRhcmssXHJcbiAgICAgICAgdGV4dDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgdmFwZTogXCIjZmYxZjAwXCIsXHJcbiAgICAgICAgZXhwZW5zZTogXCIjMmU5ZTdhXCIsXHJcbiAgICAgICAgc2hvcDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYmFja2dyb3VuZDoge1xyXG4gICAgYmFja2dyb3VuZDogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgZGVmYXVsdDogXCIjMDAwXCIsXHJcbiAgICAgIGJsdWU6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjE5NkYzIDMwJSwgIzIxQ0JGMyA5MCUpXCIsXHJcbiAgICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluLFxyXG4gICAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLFxyXG4gICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcubWFpbixcclxuICAgICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkubWFpbixcclxuICAgICAgdGV4dDogXCJpbmhlcml0XCIsXHJcbiAgICAgIHZhcGU6IFwiI2ZmMWYwMFwiLFxyXG4gICAgICBleHBlbnNlOiBcIiMyZTllN2FcIixcclxuICAgICAgc2hvcDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgIH0pLFxyXG4gICAgW1wiJjpob3ZlclwiXToge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICAgIGRlZmF1bHQ6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICAgICAgYmx1ZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigwIDEzNyAyNDcpIDMwJSwgcmdiKDEwIDEzOCAxNjgpIDkwJSlcIixcclxuICAgICAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmssXHJcbiAgICAgICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLmRhcmssXHJcbiAgICAgICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcclxuICAgICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcuZGFyayxcclxuICAgICAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5kYXJrLFxyXG4gICAgICAgIHRleHQ6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICAgIHZhcGU6IFwiI2UwMWIwMFwiLFxyXG4gICAgICAgIGV4cGVuc2U6IFwiIzI4OGI2YlwiLFxyXG4gICAgICAgIHNob3A6IFwiIzAwMFwiLFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBiYWNrZ3JvdW5kT3V0bGluZToge1xyXG4gICAgYm9yZGVyOiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICBkZWZhdWx0OiBib3JkZXJTdGFydCArIFwiIzAwMFwiLFxyXG4gICAgICBibHVlOiBib3JkZXJTdGFydCArIFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjE5NkYzIDMwJSwgIzIxQ0JGMyA5MCUpXCIsXHJcbiAgICAgIHByaW1hcnk6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgIHNlY29uZGFyeTogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgICBzdWNjZXNzOiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluLFxyXG4gICAgICBlcnJvcjogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXHJcbiAgICAgIHdhcm5pbmc6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS53YXJuaW5nLm1haW4sXHJcbiAgICAgIHRlcnRpYXJ5OiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUudGVydGlhcnkubWFpbixcclxuICAgICAgdGV4dDogYm9yZGVyU3RhcnQgKyBcImluaGVyaXRcIixcclxuICAgICAgdmFwZTogYm9yZGVyU3RhcnQgKyBcIiNmZjFmMDBcIixcclxuICAgICAgZXhwZW5zZTogYm9yZGVyU3RhcnQgKyBcIiMyZTllN2FcIixcclxuICAgICAgc2hvcDogYm9yZGVyU3RhcnQgKyBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gICAgfSksXHJcbiAgICBbXCImOmhvdmVyXCJdOiB7XHJcbiAgICAgIGJvcmRlcjogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgICBkZWZhdWx0OiBib3JkZXJTdGFydCArIFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICAgICAgYmx1ZTogYm9yZGVyU3RhcnQgK1xyXG4gICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigwIDEzNyAyNDcpIDMwJSwgcmdiKDEwIDEzOCAxNjgpIDkwJSlcIixcclxuICAgICAgICBwcmltYXJ5OiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgICAgIHNlY29uZGFyeTogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5kYXJrLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS5zdWNjZXNzLmRhcmssXHJcbiAgICAgICAgZXJyb3I6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS5lcnJvci5kYXJrLFxyXG4gICAgICAgIHdhcm5pbmc6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS53YXJuaW5nLmRhcmssXHJcbiAgICAgICAgdGVydGlhcnk6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5kYXJrLFxyXG4gICAgICAgIHRleHQ6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICAgICAgdmFwZTogYm9yZGVyU3RhcnQgKyBcIiNlMDFiMDBcIixcclxuICAgICAgICBleHBlbnNlOiBib3JkZXJTdGFydCArIFwiIzI4OGI2YlwiLFxyXG4gICAgICAgIHNob3A6IGJvcmRlclN0YXJ0ICsgXCIjMDAwXCIsXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJvb3Q6IHtcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxyXG4gICAgYm9yZGVyOiAwLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGhlaWdodDogc3R5bGVkQnlTaXplKFwic2l6ZVwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IFwiNDBweCBpbXBvcnRhbnQhXCIsXHJcbiAgICAgIGxhcmdlOiBcIjQ4cHggaW1wb3J0YW50IVwiLFxyXG4gICAgICBzbWFsbDogXCIyMHB4IGltcG9ydGFudCFcIixcclxuICAgIH0pLFxyXG4gICAgcGFkZGluZzogc3R5bGVkQnlTaXplKFwic2l6ZVwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IHRoZW1lLnNwYWNpbmcoMC41LCAxKSArIFwiIGltcG9ydGFudCFcIixcclxuICAgICAgbGFyZ2U6IHRoZW1lLnNwYWNpbmcoMS41LCAxLjUpICsgXCIgaW1wb3J0YW50IVwiLFxyXG4gICAgICBzbWFsbDogdGhlbWUuc3BhY2luZygxLCAwLjUpICsgXCIgaW1wb3J0YW50IVwiLFxyXG4gICAgfSksXHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG5cclxuICAgIGJveFNoYWRvdzogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgZGVmYXVsdDogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgICAgYmx1ZTogXCJyZ2JhKDMzLCAyMDMsIDI0MywgMC4zKSAxcHggMnB4IDFweCAxcHhcIixcclxuICAgICAgcHJpbWFyeTogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgICAgc2Vjb25kYXJ5OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICBzdWNjZXNzOiB0aGVtZS5zaGFkb3dzWzRdLFxyXG4gICAgICBlcnJvcjogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgd2FybmluZzogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgdGVydGlhcnk6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIHRleHQ6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIHZhcGU6IHRoZW1lLnNoYWRvd3NbM10sXHJcbiAgICB9KSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBCcmFuZEJ1dHRvbiA9IHdpdGhTdHlsZXMoc3R5bGVzKSgoXHJcbiAgeyBjbGFzc2VzLCB2YXJpYW50LCBzaXplLCBjaGlsZHJlbiwgY29sb3IsIC4uLm90aGVyIH06IFByb3BzV2l0aENoaWxkcmVuPFxyXG4gICAgQnV0dG9uU3R5bGVzXHJcbiAgPixcclxuKSA9PiB7XHJcbiAgY29uc3QgaXNPdXRsaW5lZCA9IHZhcmlhbnQgPT09IFwib3V0bGluZWRcIjtcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goW1xyXG4gICAgICAgIGNsYXNzZXMucm9vdCxcclxuICAgICAgICB7IFtjbGFzc2VzLmNvbG9yT3V0bGluZV06IGlzT3V0bGluZWQgfSxcclxuICAgICAgICB7IFtjbGFzc2VzLmNvbG9yXTogIWlzT3V0bGluZWQgfSxcclxuICAgICAgICB7IFtjbGFzc2VzLmJhY2tncm91bmRPdXRsaW5lXTogaXNPdXRsaW5lZCB9LFxyXG4gICAgICAgIHsgW2NsYXNzZXMuYmFja2dyb3VuZF06ICFpc091dGxpbmVkIH0sXHJcbiAgICAgIF0pfVxyXG4gICAgICB7Li4ub3RoZXJ9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQnV0dG9uPlxyXG4gICk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9