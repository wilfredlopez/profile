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
      shop: "#000"
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
        expense: "#288b6b"
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
      lineNumber: 167,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0JyYW5kQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJERUZBVUxUX1NIQURPVyIsInN0eWxlZEJ5Q29sb3IiLCJwcm9wZXJ0eSIsIm1hcHBpbmciLCJwcm9wcyIsInN0eWxlZEJ5U2l6ZSIsInN0eWxlcyIsInRoZW1lIiwicm9vdCIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwiYmx1ZSIsInByaW1hcnkiLCJwYWxldHRlIiwiZGFyayIsInNlY29uZGFyeSIsIm1haW4iLCJzdWNjZXNzIiwiZXJyb3IiLCJ3YXJuaW5nIiwidGVydGlhcnkiLCJ0ZXh0IiwidmFwZSIsImV4cGVuc2UiLCJzaG9wIiwiYm9yZGVyUmFkaXVzIiwic2hhcGUiLCJib3JkZXIiLCJjb2xvciIsImNvbnRyYXN0VGV4dCIsImdldENvbnRyYXN0VGV4dCIsImhlaWdodCIsImxhcmdlIiwic21hbGwiLCJwYWRkaW5nIiwic3BhY2luZyIsImN1cnNvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJCcmFuZEJ1dHRvbiIsIndpdGhTdHlsZXMiLCJjbGFzc2VzIiwic2l6ZSIsImNoaWxkcmVuIiwib3RoZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUE4RUEsTUFBTUEsY0FBYyxHQUNsQixzR0FERixDLENBRUE7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHLENBQUNDLFFBQUQsRUFBbUJDLE9BQW5CLEtBQ25CQyxLQUFELElBQW1CRCxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsUUFBRCxDQUFOLENBRDVCOztBQUVBLE1BQU1HLFlBQVksR0FBRyxDQUFDSCxRQUFELEVBQW1CQyxPQUFuQixLQUNsQkMsS0FBRCxJQUFtQkQsT0FBTyxDQUFDQyxLQUFLLENBQUNGLFFBQUQsQ0FBTixDQUQ1Qjs7QUFHQSxNQUFNSSxNQUFNLEdBQUlDLEtBQUQsS0FBbUI7QUFDaENDLE1BQUksRUFBRTtBQUNKQyxjQUFVLEVBQUVSLGFBQWEs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RUFBVSxDQUFDbEMsTUFBRCxDQUFWLENBQW1CO0FBQUEsTUFDNUM7QUFBRW1DLFdBQUY7QUFBV0MsUUFBWDtBQUFpQkMsWUFBakI7QUFBMkJmO0FBQTNCLEdBRDRDO0FBQUEsTUFDUGdCLEtBRE87O0FBQUEsU0FLNUMsTUFBQyxnRUFBRDtBQUFRLGFBQVMsRUFBRUgsT0FBTyxDQUFDakM7QUFBM0IsS0FBcUNvQyxLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTZDRCxRQUE3QyxDQUw0QztBQUFBLENBQW5CLENBQXBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5mOTUyMjM1OTBkZjQ4ZDI3OTIwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRoZW1lLCB3aXRoU3R5bGVzLCBXaXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuXHJcbmludGVyZmFjZSBTdHlsZXMge1xyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb2xvcnNNYXBwaW5nIHtcclxuICBkZWZhdWx0OiBzdHJpbmc7XHJcbiAgYmx1ZTogc3RyaW5nO1xyXG4gIHZhcGU6IHN0cmluZztcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTaXplc01hcHBpbmcge1xyXG4gIGRlZmF1bHQ6IHN0cmluZztcclxuICBzbWFsbDogc3RyaW5nO1xyXG4gIGxhcmdlOiBzdHJpbmc7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcbmV4cG9ydCB0eXBlIFBhbGV0dGVDb2xvcktleXMgPVxyXG4gIHwgXCJwcmltYXJ5XCJcclxuICB8IFwic2Vjb25kYXJ5XCJcclxuICB8IFwiZXJyb3JcIlxyXG4gIHwgXCJ3YXJuaW5nXCJcclxuICB8IFwidGVydGlhcnlcIlxyXG4gIHwgXCJzdWNjZXNzXCI7XHJcblxyXG5pbnRlcmZhY2UgQnV0dG9uU3R5bGVzIGV4dGVuZHMgV2l0aFN0eWxlczx0eXBlb2Ygc3R5bGVzPiB7XHJcbiAgY29sb3I6XHJcbiAgICB8IFwidmFwZVwiXHJcbiAgICB8IFwiZXhwZW5zZVwiXHJcbiAgICB8IFwic2hvcFwiXHJcbiAgICB8IFwiZGVmYXVsdFwiXHJcbiAgICB8IFwidGV4dFwiXHJcbiAgICB8IFwiYmx1ZVwiXHJcbiAgICB8IFBhbGV0dGVDb2xvcktleXM7XHJcbiAgc2l6ZT86IFwic21hbGxcIiB8IFwiZGVmYXVsdFwiIHwgXCJsYXJnZVwiO1xyXG4gIC8qKlxyXG4gICAgICAgICAqIFRoZSBjb250ZW50IG9mIHRoZSBidXR0b24uXHJcbiAgICAgICAgICovXHJcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBidXR0b24gd2lsbCBiZSBkaXNhYmxlZC5cclxuICAgICAgICAgICAqL1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIElmIGB0cnVlYCwgbm8gZWxldmF0aW9uIGlzIHVzZWQuXHJcbiAgICAgICAgICAgKi9cclxuICBkaXNhYmxlRWxldmF0aW9uPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIElmIGB0cnVlYCwgdGhlICBrZXlib2FyZCBmb2N1cyByaXBwbGUgd2lsbCBiZSBkaXNhYmxlZC5cclxuICAgICAgICAgICAqL1xyXG4gIGRpc2FibGVGb2N1c1JpcHBsZT86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBFbGVtZW50IHBsYWNlZCBhZnRlciB0aGUgY2hpbGRyZW4uXHJcbiAgICAgICAgICAgKi9cclxuICBlbmRJY29uPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYnV0dG9uIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxyXG4gICAgICAgICAgICovXHJcbiAgZnVsbFdpZHRoPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIFRoZSBVUkwgdG8gbGluayB0byB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cclxuICAgICAgICAgICAqIElmIGRlZmluZWQsIGFuIGBhYCBlbGVtZW50IHdpbGwgYmUgdXNlZCBhcyB0aGUgcm9vdCBub2RlLlxyXG4gICAgICAgICAgICovXHJcbiAgaHJlZj86IHN0cmluZztcclxuICAvKipcclxuICAgICAgICAgICAqIEVsZW1lbnQgcGxhY2VkIGJlZm9yZSB0aGUgY2hpbGRyZW4uXHJcbiAgICAgICAgICAgKi9cclxuICBzdGFydEljb24/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXHJcbiAgICAgICAgICAgKi9cclxuICB2YXJpYW50PzogXCJ0ZXh0XCIgfCBcIm91dGxpbmVkXCIgfCBcImNvbnRhaW5lZFwiO1xyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX1NIQURPVyA9XHJcbiAgXCIwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwwLDAsMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMTIpXCI7XHJcbi8vIExpa2UgaHR0cHM6Ly9naXRodWIuY29tL2JydW5vYmVydG9saW5pL3N0eWxlZC1ieVxyXG5jb25zdCBzdHlsZWRCeUNvbG9yID0gKHByb3BlcnR5OiBzdHJpbmcsIG1hcHBpbmc6IENvbG9yc01hcHBpbmcpID0+XHJcbiAgKHByb3BzOiBTdHlsZXMpID0+IG1hcHBpbmdbcHJvcHNbcHJvcGVydHldXTtcclxuY29uc3Qgc3R5bGVkQnlTaXplID0gKHByb3BlcnR5OiBzdHJpbmcsIG1hcHBpbmc6IFNpemVzTWFwcGluZykgPT5cclxuICAocHJvcHM6IFN0eWxlcykgPT4gbWFwcGluZ1twcm9wc1twcm9wZXJ0eV1dO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICBkZWZhdWx0OiBcIiMwMDc5NmJcIixcclxuICAgICAgYmx1ZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMyMTk2RjMgMzAlLCAjMjFDQkYzIDkwJSlcIixcclxuICAgICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXHJcbiAgICAgIHNlY29uZGFyeTogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLm1haW4sXHJcbiAgICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXHJcbiAgICAgIHdhcm5pbmc6IHRoZW1lLnBhbGV0dGUud2FybmluZy5tYWluLFxyXG4gICAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5tYWluLFxyXG4gICAgICB0ZXh0OiBcImluaGVyaXRcIixcclxuICAgICAgdmFwZTogXCIjZmYxZjAwXCIsXHJcbiAgICAgIGV4cGVuc2U6IFwiIzJlOWU3YVwiLFxyXG4gICAgICBzaG9wOiBcIiMwMDBcIixcclxuICAgIH0pLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICBib3JkZXI6IDAsXHJcbiAgICBjb2xvcjogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgZGVmYXVsdDogXCIjZmZmXCIsXHJcbiAgICAgIGJsdWU6IFwiI2ZmZlwiLFxyXG4gICAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0LFxyXG4gICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLmNvbnRyYXN0VGV4dCxcclxuICAgICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuY29udHJhc3RUZXh0LFxyXG4gICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcuY29udHJhc3RUZXh0LFxyXG4gICAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5jb250cmFzdFRleHQsXHJcbiAgICAgIHRleHQ6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5KSxcclxuICAgICAgdmFwZTogXCIjZmZmXCIsXHJcbiAgICAgIGV4cGVuc2U6IFwiI2ZmZlwiLFxyXG4gICAgICBzaG9wOiBcIiNmZmZcIixcclxuICAgIH0pLFxyXG4gICAgaGVpZ2h0OiBzdHlsZWRCeVNpemUoXCJzaXplXCIsIHtcclxuICAgICAgZGVmYXVsdDogXCI0MHB4XCIsXHJcbiAgICAgIGxhcmdlOiBcIjQ4cHhcIixcclxuICAgICAgc21hbGw6IFwiMjBweFwiLFxyXG4gICAgfSksXHJcbiAgICBwYWRkaW5nOiBzdHlsZWRCeVNpemUoXCJzaXplXCIsIHtcclxuICAgICAgZGVmYXVsdDogdGhlbWUuc3BhY2luZygwLjUsIDEpLFxyXG4gICAgICBsYXJnZTogdGhlbWUuc3BhY2luZygxLjUsIDEuNSksXHJcbiAgICAgIHNtYWxsOiB0aGVtZS5zcGFjaW5nKDEsIDAuNSksXHJcbiAgICB9KSxcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICBbXCImOmhvdmVyXCJdOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgICAgZGVmYXVsdDogXCJyZ2IoMCwgODQsIDc0KVwiLFxyXG4gICAgICAgIGJsdWU6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMCAxMzcgMjQ3KSAzMCUsIHJnYigxMCAxMzggMTY4KSA5MCUpXCIsXHJcbiAgICAgICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5kYXJrLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5kYXJrLFxyXG4gICAgICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmRhcmssXHJcbiAgICAgICAgd2FybmluZzogdGhlbWUucGFsZXR0ZS53YXJuaW5nLmRhcmssXHJcbiAgICAgICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkuZGFyayxcclxuICAgICAgICB0ZXh0OiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICAgICB2YXBlOiBcIiNlMDFiMDBcIixcclxuICAgICAgICBleHBlbnNlOiBcIiMyODhiNmJcIixcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gICAgYm94U2hhZG93OiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICBkZWZhdWx0OiBERUZBVUxUX1NIQURPVyxcclxuICAgICAgYmx1ZTogXCJyZ2JhKDMzLCAyMDMsIDI0MywgMC4zKSAxcHggMnB4IDFweCAxcHhcIixcclxuICAgICAgcHJpbWFyeTogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgICAgc2Vjb25kYXJ5OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICBzdWNjZXNzOiB0aGVtZS5zaGFkb3dzWzRdLFxyXG4gICAgICBlcnJvcjogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgd2FybmluZzogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgdGVydGlhcnk6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIHRleHQ6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIHZhcGU6IHRoZW1lLnNoYWRvd3NbM10sXHJcbiAgICB9KSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBCcmFuZEJ1dHRvbiA9IHdpdGhTdHlsZXMoc3R5bGVzKSgoXHJcbiAgeyBjbGFzc2VzLCBzaXplLCBjaGlsZHJlbiwgY29sb3IsIC4uLm90aGVyIH06IFByb3BzV2l0aENoaWxkcmVuPFxyXG4gICAgQnV0dG9uU3R5bGVzXHJcbiAgPixcclxuKSA9PiAoXHJcbiAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gey4uLm90aGVyfT57Y2hpbGRyZW59PC9CdXR0b24+XHJcbikpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9