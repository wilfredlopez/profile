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
    ["&:hover a, &:hover"]: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0JyYW5kQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJERUZBVUxUX1NIQURPVyIsImJvcmRlclN0YXJ0Iiwic3R5bGVkQnlDb2xvciIsInByb3BlcnR5IiwibWFwcGluZyIsInByb3BzIiwic3R5bGVkQnlTaXplIiwic3R5bGVzIiwidGhlbWUiLCJjb2xvciIsImRlZmF1bHQiLCJibHVlIiwicHJpbWFyeSIsInBhbGV0dGUiLCJjb250cmFzdFRleHQiLCJzZWNvbmRhcnkiLCJzdWNjZXNzIiwiZXJyb3IiLCJ3YXJuaW5nIiwidGVydGlhcnkiLCJ0ZXh0IiwiZ2V0Q29udHJhc3RUZXh0IiwidmFwZSIsImV4cGVuc2UiLCJzaG9wIiwiY29sb3JPdXRsaW5lIiwiZGFyayIsIm1haW4iLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZE91dGxpbmUiLCJib3JkZXIiLCJib2RlciIsInJvb3QiLCJib3JkZXJSYWRpdXMiLCJzaGFwZSIsImhlaWdodCIsImxhcmdlIiwic21hbGwiLCJwYWRkaW5nIiwic3BhY2luZyIsImN1cnNvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJCcmFuZEJ1dHRvbiIsIndpdGhTdHlsZXMiLCJjbGFzc2VzIiwidmFyaWFudCIsInNpemUiLCJjaGlsZHJlbiIsIm90aGVyIiwiaXNPdXRsaW5lZCIsImNsc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE4RUEsTUFBTUEsY0FBYyxHQUNsQixzR0FERjtBQUdBLE1BQU1DLFdBQVcsR0FBRyxZQUFwQixDLENBQ0E7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHLENBQUNDLFFBQUQsRUFBbUJDLE9BQW5CLEtBQ25CQyxLQUFELElBQW1CRCxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsUUFBRCxDQUFOLENBRDVCOztBQUVBLE1BQU1HLFlBQVksR0FBRyxDQUFDSCxRQUFELEVBQW1CQyxPQUFuQixLQUNsQkMsS0FB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Sk8sTUFBTUMsV0FBVyxHQUFHQywyRUFBVSxDQUFDckMsTUFBRCxDQUFWLENBQW1CLFVBSXpDO0FBQUEsTUFISDtBQUFFc0MsV0FBRjtBQUFXQyxXQUFYO0FBQW9CQyxRQUFwQjtBQUEwQkMsWUFBMUI7QUFBb0N2QztBQUFwQyxHQUdHO0FBQUEsTUFIMkN3QyxLQUczQzs7QUFDSCxRQUFNQyxVQUFVLEdBQUdKLE9BQU8sS0FBSyxVQUEvQjtBQUNBLFNBQ0UsTUFBQyxnRUFBRDtBQUNFLGFBQVMsRUFBRUssb0RBQUksQ0FBQyxDQUNkTixPQUFPLENBQUNiLElBRE0sRUFFZDtBQUFFLE9BQUNhLE9BQU8sQ0FBQ3BCLFlBQVQsR0FBd0J5QjtBQUExQixLQUZjLEVBR2Q7QUFBRSxPQUFDTCxPQUFPLENBQUNwQyxLQUFULEdBQWlCLENBQUN5QztBQUFwQixLQUhjLEVBSWQ7QUFBRSxPQUFDTCxPQUFPLENBQUNoQixpQkFBVCxHQUE2QnFCO0FBQS9CLEtBSmMsRUFLZDtBQUFFLE9BQUNMLE9BQU8sQ0FBQ2pCLFVBQVQsR0FBc0IsQ0FBQ3NCO0FBQXpCLEtBTGMsQ0FBRDtBQURqQixLQVFNRCxLQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFVR0QsUUFWSCxDQURGO0FBY0QsQ0FwQjBCLENBQXBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jYmM1OWRiNDI0OTg1OGUyMWY0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRoZW1lLCB3aXRoU3R5bGVzLCBXaXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuXHJcbmludGVyZmFjZSBTdHlsZXMge1xyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb2xvcnNNYXBwaW5nIHtcclxuICBkZWZhdWx0OiBzdHJpbmc7XHJcbiAgYmx1ZTogc3RyaW5nO1xyXG4gIHZhcGU6IHN0cmluZztcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTaXplc01hcHBpbmcge1xyXG4gIGRlZmF1bHQ6IHN0cmluZztcclxuICBzbWFsbDogc3RyaW5nO1xyXG4gIGxhcmdlOiBzdHJpbmc7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcbmV4cG9ydCB0eXBlIFBhbGV0dGVDb2xvcktleXMgPVxyXG4gIHwgXCJwcmltYXJ5XCJcclxuICB8IFwic2Vjb25kYXJ5XCJcclxuICB8IFwiZXJyb3JcIlxyXG4gIHwgXCJ3YXJuaW5nXCJcclxuICB8IFwidGVydGlhcnlcIlxyXG4gIHwgXCJzdWNjZXNzXCI7XHJcblxyXG5pbnRlcmZhY2UgQnV0dG9uU3R5bGVzIGV4dGVuZHMgV2l0aFN0eWxlczx0eXBlb2Ygc3R5bGVzPiB7XHJcbiAgY29sb3I6XHJcbiAgICB8IFwidmFwZVwiXHJcbiAgICB8IFwiZXhwZW5zZVwiXHJcbiAgICB8IFwic2hvcFwiXHJcbiAgICB8IFwiZGVmYXVsdFwiXHJcbiAgICB8IFwidGV4dFwiXHJcbiAgICB8IFwiYmx1ZVwiXHJcbiAgICB8IFBhbGV0dGVDb2xvcktleXM7XHJcbiAgc2l6ZT86IFwic21hbGxcIiB8IFwiZGVmYXVsdFwiIHwgXCJsYXJnZVwiO1xyXG4gIC8qKlxyXG4gICAgICAgICAqIFRoZSBjb250ZW50IG9mIHRoZSBidXR0b24uXHJcbiAgICAgICAgICovXHJcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBidXR0b24gd2lsbCBiZSBkaXNhYmxlZC5cclxuICAgICAgICAgICAqL1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIElmIGB0cnVlYCwgbm8gZWxldmF0aW9uIGlzIHVzZWQuXHJcbiAgICAgICAgICAgKi9cclxuICBkaXNhYmxlRWxldmF0aW9uPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIElmIGB0cnVlYCwgdGhlICBrZXlib2FyZCBmb2N1cyByaXBwbGUgd2lsbCBiZSBkaXNhYmxlZC5cclxuICAgICAgICAgICAqL1xyXG4gIGRpc2FibGVGb2N1c1JpcHBsZT86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBFbGVtZW50IHBsYWNlZCBhZnRlciB0aGUgY2hpbGRyZW4uXHJcbiAgICAgICAgICAgKi9cclxuICBlbmRJY29uPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYnV0dG9uIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxyXG4gICAgICAgICAgICovXHJcbiAgZnVsbFdpZHRoPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIFRoZSBVUkwgdG8gbGluayB0byB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cclxuICAgICAgICAgICAqIElmIGRlZmluZWQsIGFuIGBhYCBlbGVtZW50IHdpbGwgYmUgdXNlZCBhcyB0aGUgcm9vdCBub2RlLlxyXG4gICAgICAgICAgICovXHJcbiAgaHJlZj86IHN0cmluZztcclxuICAvKipcclxuICAgICAgICAgICAqIEVsZW1lbnQgcGxhY2VkIGJlZm9yZSB0aGUgY2hpbGRyZW4uXHJcbiAgICAgICAgICAgKi9cclxuICBzdGFydEljb24/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXHJcbiAgICAgICAgICAgKi9cclxuICB2YXJpYW50PzogXCJ0ZXh0XCIgfCBcIm91dGxpbmVkXCIgfCBcImNvbnRhaW5lZFwiO1xyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX1NIQURPVyA9XHJcbiAgXCIwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwwLDAsMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMTIpXCI7XHJcblxyXG5jb25zdCBib3JkZXJTdGFydCA9IFwiMXB4IHNvbGlkIFwiO1xyXG4vLyBMaWtlIGh0dHBzOi8vZ2l0aHViLmNvbS9icnVub2JlcnRvbGluaS9zdHlsZWQtYnlcclxuY29uc3Qgc3R5bGVkQnlDb2xvciA9IChwcm9wZXJ0eTogc3RyaW5nLCBtYXBwaW5nOiBDb2xvcnNNYXBwaW5nKSA9PlxyXG4gIChwcm9wczogU3R5bGVzKSA9PiBtYXBwaW5nW3Byb3BzW3Byb3BlcnR5XV07XHJcbmNvbnN0IHN0eWxlZEJ5U2l6ZSA9IChwcm9wZXJ0eTogc3RyaW5nLCBtYXBwaW5nOiBTaXplc01hcHBpbmcpID0+XHJcbiAgKHByb3BzOiBTdHlsZXMpID0+IG1hcHBpbmdbcHJvcHNbcHJvcGVydHldXTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWUpID0+ICh7XHJcbiAgY29sb3I6IHtcclxuICAgIGNvbG9yOiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICBkZWZhdWx0OiBcIiNmZmZcIixcclxuICAgICAgYmx1ZTogXCIjZmZmXCIsXHJcbiAgICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5jb250cmFzdFRleHQsXHJcbiAgICAgIHNlY29uZGFyeTogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuY29udHJhc3RUZXh0LFxyXG4gICAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MuY29udHJhc3RUZXh0LFxyXG4gICAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5jb250cmFzdFRleHQsXHJcbiAgICAgIHdhcm5pbmc6IHRoZW1lLnBhbGV0dGUud2FybmluZy5jb250cmFzdFRleHQsXHJcbiAgICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgICAgdGV4dDogdGhlbWUucGFsZXR0ZS5nZXRDb250cmFzdFRleHQodGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnkpLFxyXG4gICAgICB2YXBlOiBcIiNmZmZcIixcclxuICAgICAgZXhwZW5zZTogXCIjZmZmXCIsXHJcbiAgICAgIHNob3A6IFwiI2ZmZlwiLFxyXG4gICAgfSksXHJcbiAgfSxcclxuICBjb2xvck91dGxpbmU6IHtcclxuICAgIGNvbG9yOiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICBkZWZhdWx0OiBcIiMwMDc5NmJcIixcclxuICAgICAgYmx1ZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMyMTk2RjMgMzAlLCAjMjFDQkYzIDkwJSlcIixcclxuICAgICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXHJcbiAgICAgIHNlY29uZGFyeTogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLm1haW4sXHJcbiAgICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXHJcbiAgICAgIHdhcm5pbmc6IHRoZW1lLnBhbGV0dGUud2FybmluZy5tYWluLFxyXG4gICAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5tYWluLFxyXG4gICAgICB0ZXh0OiBcImluaGVyaXRcIixcclxuICAgICAgdmFwZTogXCIjZmYxZjAwXCIsXHJcbiAgICAgIGV4cGVuc2U6IFwiIzJlOWU3YVwiLFxyXG4gICAgICBzaG9wOiBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gICAgfSksXHJcbiAgICBbXCImOmhvdmVyIGEsICY6aG92ZXJcIl06IHtcclxuICAgICAgY29sb3I6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgICAgZGVmYXVsdDogXCIjMDA3OTZiXCIsXHJcbiAgICAgICAgYmx1ZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMyMTk2RjMgMzAlLCAjMjFDQkYzIDkwJSlcIixcclxuICAgICAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICAgICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLm1haW4sXHJcbiAgICAgICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcclxuICAgICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcubWFpbixcclxuICAgICAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5tYWluLFxyXG4gICAgICAgIHRleHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgIHZhcGU6IFwiI2ZmMWYwMFwiLFxyXG4gICAgICAgIGV4cGVuc2U6IFwiIzJlOWU3YVwiLFxyXG4gICAgICAgIHNob3A6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJhY2tncm91bmQ6IHtcclxuICAgIGJhY2tncm91bmQ6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IFwiIzAwNzk2YlwiLFxyXG4gICAgICBibHVlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzIxOTZGMyAzMCUsICMyMUNCRjMgOTAlKVwiLFxyXG4gICAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MubWFpbixcclxuICAgICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcclxuICAgICAgd2FybmluZzogdGhlbWUucGFsZXR0ZS53YXJuaW5nLm1haW4sXHJcbiAgICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5Lm1haW4sXHJcbiAgICAgIHRleHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICB2YXBlOiBcIiNmZjFmMDBcIixcclxuICAgICAgZXhwZW5zZTogXCIjMmU5ZTdhXCIsXHJcbiAgICAgIHNob3A6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICB9KSxcclxuICAgIFtcIiY6aG92ZXJcIl06IHtcclxuICAgICAgYmFja2dyb3VuZDogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgICBkZWZhdWx0OiBcInJnYigwLCA4NCwgNzQpXCIsXHJcbiAgICAgICAgYmx1ZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigwIDEzNyAyNDcpIDMwJSwgcmdiKDEwIDEzOCAxNjgpIDkwJSlcIixcclxuICAgICAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmssXHJcbiAgICAgICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLmRhcmssXHJcbiAgICAgICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcclxuICAgICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcuZGFyayxcclxuICAgICAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5kYXJrLFxyXG4gICAgICAgIHRleHQ6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICAgIHZhcGU6IFwiI2UwMWIwMFwiLFxyXG4gICAgICAgIGV4cGVuc2U6IFwiIzI4OGI2YlwiLFxyXG4gICAgICAgIHNob3A6IFwiIzAwMFwiLFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBiYWNrZ3JvdW5kT3V0bGluZToge1xyXG4gICAgYm9yZGVyOiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICBkZWZhdWx0OiBib3JkZXJTdGFydCArIFwiIzAwNzk2YlwiLFxyXG4gICAgICBibHVlOiBib3JkZXJTdGFydCArIFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjE5NkYzIDMwJSwgIzIxQ0JGMyA5MCUpXCIsXHJcbiAgICAgIHByaW1hcnk6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgIHNlY29uZGFyeTogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgICBzdWNjZXNzOiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluLFxyXG4gICAgICBlcnJvcjogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXHJcbiAgICAgIHdhcm5pbmc6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS53YXJuaW5nLm1haW4sXHJcbiAgICAgIHRlcnRpYXJ5OiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUudGVydGlhcnkubWFpbixcclxuICAgICAgdGV4dDogYm9yZGVyU3RhcnQgKyBcImluaGVyaXRcIixcclxuICAgICAgdmFwZTogYm9yZGVyU3RhcnQgKyBcIiNmZjFmMDBcIixcclxuICAgICAgZXhwZW5zZTogYm9yZGVyU3RhcnQgKyBcIiMyZTllN2FcIixcclxuICAgICAgc2hvcDogYm9yZGVyU3RhcnQgKyBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gICAgfSksXHJcbiAgICBbXCImOmhvdmVyXCJdOiB7XHJcbiAgICAgIGJvZGVyOiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICAgIGRlZmF1bHQ6IGJvcmRlclN0YXJ0ICsgXCJyZ2IoMCwgODQsIDc0KVwiLFxyXG4gICAgICAgIGJsdWU6IGJvcmRlclN0YXJ0ICtcclxuICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMCAxMzcgMjQ3KSAzMCUsIHJnYigxMCAxMzggMTY4KSA5MCUpXCIsXHJcbiAgICAgICAgcHJpbWFyeTogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgICBzZWNvbmRhcnk6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayxcclxuICAgICAgICBzdWNjZXNzOiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5kYXJrLFxyXG4gICAgICAgIGVycm9yOiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcclxuICAgICAgICB3YXJuaW5nOiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUud2FybmluZy5kYXJrLFxyXG4gICAgICAgIHRlcnRpYXJ5OiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUudGVydGlhcnkuZGFyayxcclxuICAgICAgICB0ZXh0OiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICAgIHZhcGU6IGJvcmRlclN0YXJ0ICsgXCIjZTAxYjAwXCIsXHJcbiAgICAgICAgZXhwZW5zZTogYm9yZGVyU3RhcnQgKyBcIiMyODhiNmJcIixcclxuICAgICAgICBzaG9wOiBib3JkZXJTdGFydCArIFwiIzAwMFwiLFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSxcclxuICByb290OiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcclxuICAgIGJvcmRlcjogMCxcclxuXHJcbiAgICBoZWlnaHQ6IHN0eWxlZEJ5U2l6ZShcInNpemVcIiwge1xyXG4gICAgICBkZWZhdWx0OiBcIjQwcHhcIixcclxuICAgICAgbGFyZ2U6IFwiNDhweFwiLFxyXG4gICAgICBzbWFsbDogXCIyMHB4XCIsXHJcbiAgICB9KSxcclxuICAgIHBhZGRpbmc6IHN0eWxlZEJ5U2l6ZShcInNpemVcIiwge1xyXG4gICAgICBkZWZhdWx0OiB0aGVtZS5zcGFjaW5nKDAuNSwgMSksXHJcbiAgICAgIGxhcmdlOiB0aGVtZS5zcGFjaW5nKDEuNSwgMS41KSxcclxuICAgICAgc21hbGw6IHRoZW1lLnNwYWNpbmcoMSwgMC41KSxcclxuICAgIH0pLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuXHJcbiAgICBib3hTaGFkb3c6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IERFRkFVTFRfU0hBRE9XLFxyXG4gICAgICBibHVlOiBcInJnYmEoMzMsIDIwMywgMjQzLCAwLjMpIDFweCAycHggMXB4IDFweFwiLFxyXG4gICAgICBwcmltYXJ5OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgICBzZWNvbmRhcnk6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIHN1Y2Nlc3M6IHRoZW1lLnNoYWRvd3NbNF0sXHJcbiAgICAgIGVycm9yOiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICB3YXJuaW5nOiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICB0ZXJ0aWFyeTogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgdGV4dDogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgdmFwZTogdGhlbWUuc2hhZG93c1szXSxcclxuICAgIH0pLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJyYW5kQnV0dG9uID0gd2l0aFN0eWxlcyhzdHlsZXMpKChcclxuICB7IGNsYXNzZXMsIHZhcmlhbnQsIHNpemUsIGNoaWxkcmVuLCBjb2xvciwgLi4ub3RoZXIgfTogUHJvcHNXaXRoQ2hpbGRyZW48XHJcbiAgICBCdXR0b25TdHlsZXNcclxuICA+LFxyXG4pID0+IHtcclxuICBjb25zdCBpc091dGxpbmVkID0gdmFyaWFudCA9PT0gXCJvdXRsaW5lZFwiO1xyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChbXHJcbiAgICAgICAgY2xhc3Nlcy5yb290LFxyXG4gICAgICAgIHsgW2NsYXNzZXMuY29sb3JPdXRsaW5lXTogaXNPdXRsaW5lZCB9LFxyXG4gICAgICAgIHsgW2NsYXNzZXMuY29sb3JdOiAhaXNPdXRsaW5lZCB9LFxyXG4gICAgICAgIHsgW2NsYXNzZXMuYmFja2dyb3VuZE91dGxpbmVdOiBpc091dGxpbmVkIH0sXHJcbiAgICAgICAgeyBbY2xhc3Nlcy5iYWNrZ3JvdW5kXTogIWlzT3V0bGluZWQgfSxcclxuICAgICAgXSl9XHJcbiAgICAgIHsuLi5vdGhlcn1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9CdXR0b24+XHJcbiAgKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=