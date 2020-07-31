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
      default: "40px",
      large: "48px",
      small: "20px"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0JyYW5kQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJERUZBVUxUX1NIQURPVyIsImJvcmRlclN0YXJ0Iiwic3R5bGVkQnlDb2xvciIsInByb3BlcnR5IiwibWFwcGluZyIsInByb3BzIiwic3R5bGVkQnlTaXplIiwic3R5bGVzIiwidGhlbWUiLCJjb2xvciIsImRlZmF1bHQiLCJibHVlIiwicHJpbWFyeSIsInBhbGV0dGUiLCJjb250cmFzdFRleHQiLCJzZWNvbmRhcnkiLCJzdWNjZXNzIiwiZXJyb3IiLCJ3YXJuaW5nIiwidGVydGlhcnkiLCJ0ZXh0IiwiZ2V0Q29udHJhc3RUZXh0IiwidmFwZSIsImV4cGVuc2UiLCJzaG9wIiwiY29sb3JPdXRsaW5lIiwibWFpbiIsImRhcmsiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZE91dGxpbmUiLCJib3JkZXIiLCJyb290IiwiYm9yZGVyUmFkaXVzIiwic2hhcGUiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwibGFyZ2UiLCJzbWFsbCIsInBhZGRpbmciLCJzcGFjaW5nIiwiY3Vyc29yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsIkJyYW5kQnV0dG9uIiwid2l0aFN0eWxlcyIsImNsYXNzZXMiLCJ2YXJpYW50Iiwic2l6ZSIsImNoaWxkcmVuIiwib3RoZXIiLCJpc091dGxpbmVkIiwiY2xzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQThFQSxNQUFNQSxjQUFjLEdBQ2xCLHNHQURGO0FBR0EsTUFBTUMsV0FBVyxHQUFHLFlBQXBCLEMsQ0FDQTs7QUFDQSxNQUFNQyxhQUFhLEdBQUcsQ0FBQ0MsUUFBRCxFQUFtQkMsT0FBbkIsS0FDbkJDLEtBQUQsSUFBbUJELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixRQUFELENBQU4sQ0FENUI7O0FBRUEsTUFBTUcsWUFBWSxHQUFHLENBQUNILFFBQUQsRUFBbUJDLE9BQW5CLEtBQ2xC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QUVkLEtBQUssQ0FBQ2tDLE9BQU4sQ0FBYyxDQUFkO0FBVjBCLEtBQVY7QUFoQnBCO0FBbEgwQixDQUFuQixDQUFmOztBQWlKTyxNQUFNQyxXQUFXLEdBQUdDLDJFQUFVLENBQUNyQyxNQUFELENBQVYsQ0FBbUIsVUFJekM7QUFBQSxNQUhIO0FBQUVzQyxXQUFGO0FBQVdDLFdBQVg7QUFBb0JDLFFBQXBCO0FBQTBCQyxZQUExQjtBQUFvQ3ZDO0FBQXBDLEdBR0c7QUFBQSxNQUgyQ3dDLEtBRzNDOztBQUNILFFBQU1DLFVBQVUsR0FBR0osT0FBTyxLQUFLLFVBQS9CO0FBQ0EsU0FDRSxNQUFDLGdFQUFEO0FBQ0UsYUFBUyxFQUFFSyxvREFBSSxDQUFDLENBQ2ROLE9BQU8sQ0FBQ2QsSUFETSxFQUVkO0FBQUUsT0FBQ2MsT0FBTyxDQUFDcEIsWUFBVCxHQUF3QnlCO0FBQTFCLEtBRmMsRUFHZDtBQUFFLE9BQUNMLE9BQU8sQ0FBQ3BDLEtBQVQsR0FBaUIsQ0FBQ3lDO0FBQXBCLEtBSGMsRUFJZDtBQUFFLE9BQUNMLE9BQU8sQ0FBQ2hCLGlCQUFULEdBQTZCcUI7QUFBL0IsS0FKYyxFQUtkO0FBQUUsT0FBQ0wsT0FBTyxDQUFDakIsVUFBVCxHQUFzQixDQUFDc0I7QUFBekIsS0FMYyxDQUFEO0FBRGpCLEtBUU1ELEtBUk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVVHRCxRQVZILENBREY7QUFjRCxDQXBCMEIsQ0FBcEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjY0MThiNzBjMzYwMDVlZWE2MWQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGhlbWUsIHdpdGhTdHlsZXMsIFdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuaW50ZXJmYWNlIFN0eWxlcyB7XHJcbiAgY29sb3I6IHN0cmluZztcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIENvbG9yc01hcHBpbmcge1xyXG4gIGRlZmF1bHQ6IHN0cmluZztcclxuICBibHVlOiBzdHJpbmc7XHJcbiAgdmFwZTogc3RyaW5nO1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFNpemVzTWFwcGluZyB7XHJcbiAgZGVmYXVsdDogc3RyaW5nO1xyXG4gIHNtYWxsOiBzdHJpbmc7XHJcbiAgbGFyZ2U6IHN0cmluZztcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuZXhwb3J0IHR5cGUgUGFsZXR0ZUNvbG9yS2V5cyA9XHJcbiAgfCBcInByaW1hcnlcIlxyXG4gIHwgXCJzZWNvbmRhcnlcIlxyXG4gIHwgXCJlcnJvclwiXHJcbiAgfCBcIndhcm5pbmdcIlxyXG4gIHwgXCJ0ZXJ0aWFyeVwiXHJcbiAgfCBcInN1Y2Nlc3NcIjtcclxuXHJcbmludGVyZmFjZSBCdXR0b25TdHlsZXMgZXh0ZW5kcyBXaXRoU3R5bGVzPHR5cGVvZiBzdHlsZXM+IHtcclxuICBjb2xvcjpcclxuICAgIHwgXCJ2YXBlXCJcclxuICAgIHwgXCJleHBlbnNlXCJcclxuICAgIHwgXCJzaG9wXCJcclxuICAgIHwgXCJkZWZhdWx0XCJcclxuICAgIHwgXCJ0ZXh0XCJcclxuICAgIHwgXCJibHVlXCJcclxuICAgIHwgUGFsZXR0ZUNvbG9yS2V5cztcclxuICBzaXplPzogXCJzbWFsbFwiIHwgXCJkZWZhdWx0XCIgfCBcImxhcmdlXCI7XHJcbiAgLyoqXHJcbiAgICAgICAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGJ1dHRvbi5cclxuICAgICAgICAgKi9cclxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAvKipcclxuICAgICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGJ1dHRvbiB3aWxsIGJlIGRpc2FibGVkLlxyXG4gICAgICAgICAgICovXHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogSWYgYHRydWVgLCBubyBlbGV2YXRpb24gaXMgdXNlZC5cclxuICAgICAgICAgICAqL1xyXG4gIGRpc2FibGVFbGV2YXRpb24/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogSWYgYHRydWVgLCB0aGUgIGtleWJvYXJkIGZvY3VzIHJpcHBsZSB3aWxsIGJlIGRpc2FibGVkLlxyXG4gICAgICAgICAgICovXHJcbiAgZGlzYWJsZUZvY3VzUmlwcGxlPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIEVsZW1lbnQgcGxhY2VkIGFmdGVyIHRoZSBjaGlsZHJlbi5cclxuICAgICAgICAgICAqL1xyXG4gIGVuZEljb24/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBidXR0b24gd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXHJcbiAgICAgICAgICAgKi9cclxuICBmdWxsV2lkdGg/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogVGhlIFVSTCB0byBsaW5rIHRvIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxyXG4gICAgICAgICAgICogSWYgZGVmaW5lZCwgYW4gYGFgIGVsZW1lbnQgd2lsbCBiZSB1c2VkIGFzIHRoZSByb290IG5vZGUuXHJcbiAgICAgICAgICAgKi9cclxuICBocmVmPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogRWxlbWVudCBwbGFjZWQgYmVmb3JlIHRoZSBjaGlsZHJlbi5cclxuICAgICAgICAgICAqL1xyXG4gIHN0YXJ0SWNvbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAvKipcclxuICAgICAgICAgICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cclxuICAgICAgICAgICAqL1xyXG4gIHZhcmlhbnQ/OiBcInRleHRcIiB8IFwib3V0bGluZWRcIiB8IFwiY29udGFpbmVkXCI7XHJcbn1cclxuXHJcbmNvbnN0IERFRkFVTFRfU0hBRE9XID1cclxuICBcIjBweCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLDAsMCwwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xMilcIjtcclxuXHJcbmNvbnN0IGJvcmRlclN0YXJ0ID0gXCIxcHggc29saWQgXCI7XHJcbi8vIExpa2UgaHR0cHM6Ly9naXRodWIuY29tL2JydW5vYmVydG9saW5pL3N0eWxlZC1ieVxyXG5jb25zdCBzdHlsZWRCeUNvbG9yID0gKHByb3BlcnR5OiBzdHJpbmcsIG1hcHBpbmc6IENvbG9yc01hcHBpbmcpID0+XHJcbiAgKHByb3BzOiBTdHlsZXMpID0+IG1hcHBpbmdbcHJvcHNbcHJvcGVydHldXTtcclxuY29uc3Qgc3R5bGVkQnlTaXplID0gKHByb3BlcnR5OiBzdHJpbmcsIG1hcHBpbmc6IFNpemVzTWFwcGluZykgPT5cclxuICAocHJvcHM6IFN0eWxlcykgPT4gbWFwcGluZ1twcm9wc1twcm9wZXJ0eV1dO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZSkgPT4gKHtcclxuICBjb2xvcjoge1xyXG4gICAgY29sb3I6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IFwiI2ZmZlwiLFxyXG4gICAgICBibHVlOiBcIiNmZmZcIixcclxuICAgICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXHJcbiAgICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5jb250cmFzdFRleHQsXHJcbiAgICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmNvbnRyYXN0VGV4dCxcclxuICAgICAgd2FybmluZzogdGhlbWUucGFsZXR0ZS53YXJuaW5nLmNvbnRyYXN0VGV4dCxcclxuICAgICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkuY29udHJhc3RUZXh0LFxyXG4gICAgICB0ZXh0OiB0aGVtZS5wYWxldHRlLmdldENvbnRyYXN0VGV4dCh0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSksXHJcbiAgICAgIHZhcGU6IFwiI2ZmZlwiLFxyXG4gICAgICBleHBlbnNlOiBcIiNmZmZcIixcclxuICAgICAgc2hvcDogXCIjZmZmXCIsXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIGNvbG9yT3V0bGluZToge1xyXG4gICAgY29sb3I6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICAgIGJsdWU6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjE5NkYzIDMwJSwgIzIxQ0JGMyA5MCUpXCIsXHJcbiAgICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluLFxyXG4gICAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLFxyXG4gICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcubWFpbixcclxuICAgICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkubWFpbixcclxuICAgICAgdGV4dDogXCJpbmhlcml0XCIsXHJcbiAgICAgIHZhcGU6IFwiI2ZmMWYwMFwiLFxyXG4gICAgICBleHBlbnNlOiBcIiMyZTllN2FcIixcclxuICAgICAgc2hvcDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgIH0pLFxyXG4gICAgW1wiJjpob3ZlciBhLCAmOmhvdmVyXCJdOiB7XHJcbiAgICAgIGNvbG9yOiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICAgIGRlZmF1bHQ6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICAgICAgYmx1ZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMyMTk2RjMgMzAlLCAjMjFDQkYzIDkwJSlcIixcclxuICAgICAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmssXHJcbiAgICAgICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLmRhcmssXHJcbiAgICAgICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcclxuICAgICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcuZGFyayxcclxuICAgICAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5kYXJrLFxyXG4gICAgICAgIHRleHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgIHZhcGU6IFwiI2ZmMWYwMFwiLFxyXG4gICAgICAgIGV4cGVuc2U6IFwiIzJlOWU3YVwiLFxyXG4gICAgICAgIHNob3A6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJhY2tncm91bmQ6IHtcclxuICAgIGJhY2tncm91bmQ6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IFwiIzAwMFwiLFxyXG4gICAgICBibHVlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzIxOTZGMyAzMCUsICMyMUNCRjMgOTAlKVwiLFxyXG4gICAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MubWFpbixcclxuICAgICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcclxuICAgICAgd2FybmluZzogdGhlbWUucGFsZXR0ZS53YXJuaW5nLm1haW4sXHJcbiAgICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5Lm1haW4sXHJcbiAgICAgIHRleHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICB2YXBlOiBcIiNmZjFmMDBcIixcclxuICAgICAgZXhwZW5zZTogXCIjMmU5ZTdhXCIsXHJcbiAgICAgIHNob3A6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICB9KSxcclxuICAgIFtcIiY6aG92ZXJcIl06IHtcclxuICAgICAgYmFja2dyb3VuZDogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgICBkZWZhdWx0OiBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gICAgICAgIGJsdWU6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMCAxMzcgMjQ3KSAzMCUsIHJnYigxMCAxMzggMTY4KSA5MCUpXCIsXHJcbiAgICAgICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXHJcbiAgICAgICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5kYXJrLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5kYXJrLFxyXG4gICAgICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmRhcmssXHJcbiAgICAgICAgd2FybmluZzogdGhlbWUucGFsZXR0ZS53YXJuaW5nLmRhcmssXHJcbiAgICAgICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkuZGFyayxcclxuICAgICAgICB0ZXh0OiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICAgICB2YXBlOiBcIiNlMDFiMDBcIixcclxuICAgICAgICBleHBlbnNlOiBcIiMyODhiNmJcIixcclxuICAgICAgICBzaG9wOiBcIiMwMDBcIixcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYmFja2dyb3VuZE91dGxpbmU6IHtcclxuICAgIGJvcmRlcjogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgZGVmYXVsdDogYm9yZGVyU3RhcnQgKyBcIiMwMDBcIixcclxuICAgICAgYmx1ZTogYm9yZGVyU3RhcnQgKyBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzIxOTZGMyAzMCUsICMyMUNCRjMgOTAlKVwiLFxyXG4gICAgICBwcmltYXJ5OiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgICBzZWNvbmRhcnk6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgICAgc3VjY2VzczogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MubWFpbixcclxuICAgICAgZXJyb3I6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLFxyXG4gICAgICB3YXJuaW5nOiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUud2FybmluZy5tYWluLFxyXG4gICAgICB0ZXJ0aWFyeTogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5Lm1haW4sXHJcbiAgICAgIHRleHQ6IGJvcmRlclN0YXJ0ICsgXCJpbmhlcml0XCIsXHJcbiAgICAgIHZhcGU6IGJvcmRlclN0YXJ0ICsgXCIjZmYxZjAwXCIsXHJcbiAgICAgIGV4cGVuc2U6IGJvcmRlclN0YXJ0ICsgXCIjMmU5ZTdhXCIsXHJcbiAgICAgIHNob3A6IGJvcmRlclN0YXJ0ICsgXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgIH0pLFxyXG4gICAgW1wiJjpob3ZlclwiXToge1xyXG4gICAgICBib3JkZXI6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgICAgZGVmYXVsdDogYm9yZGVyU3RhcnQgKyBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gICAgICAgIGJsdWU6IGJvcmRlclN0YXJ0ICtcclxuICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMCAxMzcgMjQ3KSAzMCUsIHJnYigxMCAxMzggMTY4KSA5MCUpXCIsXHJcbiAgICAgICAgcHJpbWFyeTogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgICBzZWNvbmRhcnk6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayxcclxuICAgICAgICBzdWNjZXNzOiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5kYXJrLFxyXG4gICAgICAgIGVycm9yOiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcclxuICAgICAgICB3YXJuaW5nOiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUud2FybmluZy5kYXJrLFxyXG4gICAgICAgIHRlcnRpYXJ5OiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUudGVydGlhcnkuZGFyayxcclxuICAgICAgICB0ZXh0OiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICAgIHZhcGU6IGJvcmRlclN0YXJ0ICsgXCIjZTAxYjAwXCIsXHJcbiAgICAgICAgZXhwZW5zZTogYm9yZGVyU3RhcnQgKyBcIiMyODhiNmJcIixcclxuICAgICAgICBzaG9wOiBib3JkZXJTdGFydCArIFwiIzAwMFwiLFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSxcclxuICByb290OiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcclxuICAgIGJvcmRlcjogMCxcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBoZWlnaHQ6IHN0eWxlZEJ5U2l6ZShcInNpemVcIiwge1xyXG4gICAgICBkZWZhdWx0OiBcIjQwcHhcIixcclxuICAgICAgbGFyZ2U6IFwiNDhweFwiLFxyXG4gICAgICBzbWFsbDogXCIyMHB4XCIsXHJcbiAgICB9KSxcclxuICAgIHBhZGRpbmc6IHN0eWxlZEJ5U2l6ZShcInNpemVcIiwge1xyXG4gICAgICBkZWZhdWx0OiB0aGVtZS5zcGFjaW5nKDAuNSwgMSkgKyBcIiBpbXBvcnRhbnQhXCIsXHJcbiAgICAgIGxhcmdlOiB0aGVtZS5zcGFjaW5nKDEuNSwgMS41KSArIFwiIGltcG9ydGFudCFcIixcclxuICAgICAgc21hbGw6IHRoZW1lLnNwYWNpbmcoMSwgMC41KSArIFwiIGltcG9ydGFudCFcIixcclxuICAgIH0pLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuXHJcbiAgICBib3hTaGFkb3c6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICAgIGJsdWU6IFwicmdiYSgzMywgMjAzLCAyNDMsIDAuMykgMXB4IDJweCAxcHggMXB4XCIsXHJcbiAgICAgIHByaW1hcnk6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICAgIHNlY29uZGFyeTogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgc3VjY2VzczogdGhlbWUuc2hhZG93c1s0XSxcclxuICAgICAgZXJyb3I6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIHdhcm5pbmc6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIHRlcnRpYXJ5OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICB0ZXh0OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICB2YXBlOiB0aGVtZS5zaGFkb3dzWzNdLFxyXG4gICAgfSksXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgQnJhbmRCdXR0b24gPSB3aXRoU3R5bGVzKHN0eWxlcykoKFxyXG4gIHsgY2xhc3NlcywgdmFyaWFudCwgc2l6ZSwgY2hpbGRyZW4sIGNvbG9yLCAuLi5vdGhlciB9OiBQcm9wc1dpdGhDaGlsZHJlbjxcclxuICAgIEJ1dHRvblN0eWxlc1xyXG4gID4sXHJcbikgPT4ge1xyXG4gIGNvbnN0IGlzT3V0bGluZWQgPSB2YXJpYW50ID09PSBcIm91dGxpbmVkXCI7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b25cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFtcclxuICAgICAgICBjbGFzc2VzLnJvb3QsXHJcbiAgICAgICAgeyBbY2xhc3Nlcy5jb2xvck91dGxpbmVdOiBpc091dGxpbmVkIH0sXHJcbiAgICAgICAgeyBbY2xhc3Nlcy5jb2xvcl06ICFpc091dGxpbmVkIH0sXHJcbiAgICAgICAgeyBbY2xhc3Nlcy5iYWNrZ3JvdW5kT3V0bGluZV06IGlzT3V0bGluZWQgfSxcclxuICAgICAgICB7IFtjbGFzc2VzLmJhY2tncm91bmRdOiAhaXNPdXRsaW5lZCB9LFxyXG4gICAgICBdKX1cclxuICAgICAgey4uLm90aGVyfVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0J1dHRvbj5cclxuICApO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==