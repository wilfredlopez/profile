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
/* harmony import */ var _wilfredlopez_react_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wilfredlopez/react-utils */ "./node_modules/@wilfredlopez/react-utils/dist/index.es.js");



var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\styles\\BrandButton.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






const color = theme => {
  return {
    default: "#fff",
    blue: "#fff",
    primary: theme.palette.primary.contrastText,
    secondary: theme.palette.secondary.contrastText,
    success: theme.palette.success.contrastText,
    error: theme.palette.error.contrastText,
    warning: "#fff",
    tertiary: theme.palette.tertiary.contrastText,
    text: theme.palette.getContrastText(theme.palette.text.primary),
    vape: "#fff",
    expense: "#fff",
    shop: "#fff"
  };
};

const colorHover = theme => {
  return {
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
  };
};

const bgs = theme => {
  return {
    default: "#000",
    blue: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    success: theme.palette.success.main,
    error: theme.palette.error.main,
    warning: theme.palette.warning.main,
    tertiary: theme.palette.tertiary.main,
    text: "inherit",
    expense: "#2e9e7a",
    shop: "rgb(20, 20, 20)",
    vape: "#ff1f00"
  };
};

const bgsHover = theme => {
  return {
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
  };
};

function getColorFor(matchColor, theme) {
  return {
    color: color(theme)[matchColor],
    background: bgs(theme)[matchColor],
    ["&.MuiButton-outlined"]: {
      color: bgs(theme)[matchColor],
      border: `1px solid ` + bgs(theme)[matchColor],
      background: "transparent"
    },
    ["&.MuiButton-text"]: {
      color: bgs(theme)[matchColor],
      background: "transparent"
    },
    ["&:hover"]: {
      background: bgsHover(theme)[matchColor],
      ["&.MuiButton-outlined"]: {
        border: `1px solid ` + bgsHover(theme)[matchColor]
      },
      ["&.MuiButton-outlined,&.MuiButton-text"]: {
        color: colorHover(theme)[matchColor],
        background: "transparent"
      }
    }
  };
}

const useButtonStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
  vape: getColorFor("vape", theme),
  default: getColorFor("default", theme),
  blue: getColorFor("blue", theme),
  primary: getColorFor("primary", theme),
  secondary: getColorFor("secondary", theme),
  success: getColorFor("success", theme),
  error: getColorFor("error", theme),
  warning: getColorFor("warning", theme),
  tertiary: getColorFor("tertiary", theme),
  text: {
    color: color(theme).text,
    background: bgs(theme).text,
    ["&:hover"]: {
      color: colorHover(theme).text,
      background: bgsHover(theme).text
    }
  },
  expense: getColorFor("expense", theme),
  shop: getColorFor("shop", theme)
}));

function switchColorToRegular(color) {
  switch (color) {
    case "blue":
    case "error":
    case "expense":
    case "shop":
    case "success":
    case "tertiary":
    case "text":
    case "vape":
    case "warning":
    case "default":
      return undefined;

    case "inherit":
    case "primary":
    case "secondary":
    case undefined:
      return color;

    default:
      Object(_wilfredlopez_react_utils__WEBPACK_IMPORTED_MODULE_6__["assertNever"])(color);
      return undefined;
  }
}

function switchColorToCustom(color) {
  switch (color) {
    case "inherit":
    case "primary":
    case "secondary":
    case undefined:
      return undefined;

    case "blue":
    case "error":
    case "expense":
    case "shop":
    case "success":
    case "tertiary":
    case "text":
    case "vape":
    case "warning":
    case "default":
      return color;

    default:
      Object(_wilfredlopez_react_utils__WEBPACK_IMPORTED_MODULE_6__["assertNever"])(color);
      return undefined;
  }
}

const BrandButton = (_ref) => {
  _s();

  let {
    children,
    variant = "contained",
    className,
    color,
    size
  } = _ref,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children", "variant", "className", "color", "size"]);

  const defaultColor = switchColorToRegular(color);
  const customColor = switchColorToCustom(color);
  const classes = useButtonStyles();
  return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: defaultColor,
    variant: variant,
    size: size === "default" ? undefined : size
  }, other, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])([{
      [classes[customColor || "default"]]: customColor
    }], className),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 10
    }
  }), children);
};

_s(BrandButton, "3dpyZMJTjwpXVPOv55POxIibyys=", false, function () {
  return [useButtonStyles];
});

_c = BrandButton;

var _c;

$RefreshReg$(_c, "BrandButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0JyYW5kQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJjb2xvciIsInRoZW1lIiwiZGVmYXVsdCIsImJsdWUiLCJwcmltYXJ5IiwicGFsZXR0ZSIsImNvbnRyYXN0VGV4dCIsInNlY29uZGFyeSIsInN1Y2Nlc3MiLCJlcnJvciIsIndhcm5pbmciLCJ0ZXJ0aWFyeSIsInRleHQiLCJnZXRDb250cmFzdFRleHQiLCJ2YXBlIiwiZXhwZW5zZSIsInNob3AiLCJjb2xvckhvdmVyIiwiZGFyayIsImJncyIsIm1haW4iLCJiZ3NIb3ZlciIsImdldENvbG9yRm9yIiwibWF0Y2hDb2xvciIsImJhY2tncm91bmQiLCJib3JkZXIiLCJ1c2VCdXR0b25TdHlsZXMiLCJtYWtlU3R5bGVzIiwiY3JlYXRlU3R5bGVzIiwic3dpdGNoQ29sb3JUb1JlZ3VsYXIiLCJ1bmRlZmluZWQiLCJhc3NlcnROZXZlciIsInN3aXRjaENvbG9yVG9DdXN0b20iLCJCcmFuZEJ1dHRvbiIsImNoaWxkcmVuIiwidmFyaWFudCIsImNsYXNzTmFtZSIsInNpemUiLCJvdGhlciIsImRlZmF1bHRDb2xvciIsImN1c3RvbUNvbG9yIiwiY2xhc3NlcyIsImNsc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7O0FBc0VBLE1BQU1BLEtBQUssR0FBSUMsS0FBRCxJQUFrQjtBQUM5QixTQUFPO0FBQ0xDLFdBQU8sRUFBRSxNQURKO0FBRUxDLFFBQUksRUFBRSxNQUZEO0FBR0xDLFdBQU8sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWNELE9BQWQsQ0FBc0JFLFlBSDFCO0FBSUxDLGFBQVMsRUFBRU4sS0FBSyxDQUFDSSxPQUFOLENBQWNFLFNBQWQsQ0FBd0JELFlBSjlCO0FBS0xFLFdBQU8sRUFBRVAsS0FBSyxDQUFDSSxPQUFOLENBQWNHLE9BQWQsQ0FBc0JGLFlBTDFCO0FBTUxHLFNBQUssRUFB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LG1CQUFtQixDQUFDaEMsS0FBRCxDQUF2QztBQUNBLFFBQU15QyxPQUFPLEdBQUdmLGVBQWUsRUFBL0I7QUFFQSxTQUFPLE1BQUMsZ0VBQUQ7QUFDTCxTQUFLLEVBQUVhLFlBREY7QUFFTCxXQUFPLEVBQUVKLE9BRko7QUFHTCxRQUFJLEVBQUVFLElBQUksS0FBSyxTQUFULEdBQXFCUCxTQUFyQixHQUFpQ087QUFIbEMsS0FJREMsS0FKQztBQUtMLGFBQVMsRUFBRUksb0RBQUksQ0FDYixDQUFDO0FBQUUsT0FBQ0QsT0FBTyxDQUFDRCxXQUFXLElBQUksU0FBaEIsQ0FBUixHQUFxQ0E7QUFBdkMsS0FBRCxDQURhLEVBRWJKLFNBRmEsQ0FMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVUpGLFFBVkksQ0FBUDtBQVlELENBdEJNOztHQUFNRCxXO1VBUUtQLGU7OztLQVJMTyxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5mODI2MzI2ZDZhOTg2OTJiNGU3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlU3R5bGVzLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgVGhlbWUsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgYXNzZXJ0TmV2ZXIgfSBmcm9tIFwiQHdpbGZyZWRsb3Blei9yZWFjdC11dGlsc1wiO1xyXG5cclxuZXhwb3J0IHR5cGUgUGFsZXR0ZUNvbG9yS2V5cyA9XHJcbiAgfCBcInByaW1hcnlcIlxyXG4gIHwgXCJzZWNvbmRhcnlcIlxyXG4gIHwgXCJlcnJvclwiXHJcbiAgfCBcIndhcm5pbmdcIlxyXG4gIHwgXCJ0ZXJ0aWFyeVwiXHJcbiAgfCBcInN1Y2Nlc3NcIjtcclxuXHJcbnR5cGUgUmVndWxhckJ1dHRvbkNvbG9yID0gXCJpbmhlcml0XCIgfCBcInByaW1hcnlcIiB8IFwic2Vjb25kYXJ5XCI7XHJcblxyXG50eXBlIEN1c3RvbUNvbG9yID1cclxuICB8IFwidmFwZVwiXHJcbiAgfCBcImV4cGVuc2VcIlxyXG4gIHwgXCJzaG9wXCJcclxuICB8IFwidGV4dFwiXHJcbiAgfCBcImJsdWVcIlxyXG4gIHwgXCJlcnJvclwiXHJcbiAgfCBcIndhcm5pbmdcIlxyXG4gIHwgXCJ0ZXJ0aWFyeVwiXHJcbiAgfCBcInN1Y2Nlc3NcIlxyXG4gIHwgXCJkZWZhdWx0XCI7XHJcblxyXG50eXBlIEJ1dHRvblN0eWxlc0NvbG9yID0gQ3VzdG9tQ29sb3IgfCBSZWd1bGFyQnV0dG9uQ29sb3I7XHJcblxyXG5pbnRlcmZhY2UgQnV0dG9uU3R5bGVzIHtcclxuICByZWY/OiBSZWFjdC5SZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xyXG4gIGNvbG9yPzogQnV0dG9uU3R5bGVzQ29sb3I7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIHNpemU/OiBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiIHwgXCJzbWFsbFwiIHwgXCJkZWZhdWx0XCI7XHJcbiAgLyoqXHJcbiAgICAgICAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGJ1dHRvbi5cclxuICAgICAgICAgKi9cclxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAvKipcclxuICAgICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGJ1dHRvbiB3aWxsIGJlIGRpc2FibGVkLlxyXG4gICAgICAgICAgICovXHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogSWYgYHRydWVgLCBubyBlbGV2YXRpb24gaXMgdXNlZC5cclxuICAgICAgICAgICAqL1xyXG4gIGRpc2FibGVFbGV2YXRpb24/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogSWYgYHRydWVgLCB0aGUgIGtleWJvYXJkIGZvY3VzIHJpcHBsZSB3aWxsIGJlIGRpc2FibGVkLlxyXG4gICAgICAgICAgICovXHJcbiAgZGlzYWJsZUZvY3VzUmlwcGxlPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIEVsZW1lbnQgcGxhY2VkIGFmdGVyIHRoZSBjaGlsZHJlbi5cclxuICAgICAgICAgICAqL1xyXG4gIGVuZEljb24/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBidXR0b24gd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXHJcbiAgICAgICAgICAgKi9cclxuICBmdWxsV2lkdGg/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogVGhlIFVSTCB0byBsaW5rIHRvIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxyXG4gICAgICAgICAgICogSWYgZGVmaW5lZCwgYW4gYGFgIGVsZW1lbnQgd2lsbCBiZSB1c2VkIGFzIHRoZSByb290IG5vZGUuXHJcbiAgICAgICAgICAgKi9cclxuICBocmVmPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogRWxlbWVudCBwbGFjZWQgYmVmb3JlIHRoZSBjaGlsZHJlbi5cclxuICAgICAgICAgICAqL1xyXG4gIHN0YXJ0SWNvbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAvKipcclxuICAgICAgICAgICAqIFRoZSB2YXJpYW50IHRvIHVzZS4gRGVmYXVsdHMgdG8gY29udGFpbmVkXHJcbiAgICAgICAgICAgKi9cclxuICB2YXJpYW50PzogXCJ0ZXh0XCIgfCBcIm91dGxpbmVkXCIgfCBcImNvbnRhaW5lZFwiO1xyXG59XHJcblxyXG5jb25zdCBjb2xvciA9ICh0aGVtZTogVGhlbWUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZGVmYXVsdDogXCIjZmZmXCIsXHJcbiAgICBibHVlOiBcIiNmZmZcIixcclxuICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5jb250cmFzdFRleHQsXHJcbiAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5jb250cmFzdFRleHQsXHJcbiAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5jb250cmFzdFRleHQsXHJcbiAgICB3YXJuaW5nOiBcIiNmZmZcIixcclxuICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgIHRleHQ6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5KSxcclxuICAgIHZhcGU6IFwiI2ZmZlwiLFxyXG4gICAgZXhwZW5zZTogXCIjZmZmXCIsXHJcbiAgICBzaG9wOiBcIiNmZmZcIixcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgY29sb3JIb3ZlciA9ICh0aGVtZTogVGhlbWUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZGVmYXVsdDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgIGJsdWU6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjE5NkYzIDMwJSwgIzIxQ0JGMyA5MCUpXCIsXHJcbiAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgIHNlY29uZGFyeTogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayxcclxuICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5kYXJrLFxyXG4gICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcclxuICAgIHdhcm5pbmc6IHRoZW1lLnBhbGV0dGUud2FybmluZy5kYXJrLFxyXG4gICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkuZGFyayxcclxuICAgIHRleHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgdmFwZTogXCIjZmYxZjAwXCIsXHJcbiAgICBleHBlbnNlOiBcIiMyZTllN2FcIixcclxuICAgIHNob3A6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGJncyA9ICh0aGVtZTogVGhlbWUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZGVmYXVsdDogXCIjMDAwXCIsXHJcbiAgICBibHVlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzIxOTZGMyAzMCUsICMyMUNCRjMgOTAlKVwiLFxyXG4gICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MubWFpbixcclxuICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXHJcbiAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcubWFpbixcclxuICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5Lm1haW4sXHJcbiAgICB0ZXh0OiBcImluaGVyaXRcIixcclxuICAgIGV4cGVuc2U6IFwiIzJlOWU3YVwiLFxyXG4gICAgc2hvcDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgIHZhcGU6IFwiI2ZmMWYwMFwiLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBiZ3NIb3ZlciA9ICh0aGVtZTogVGhlbWUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZGVmYXVsdDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgIGJsdWU6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMCAxMzcgMjQ3KSAzMCUsIHJnYigxMCAxMzggMTY4KSA5MCUpXCIsXHJcbiAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgIHNlY29uZGFyeTogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayxcclxuICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5kYXJrLFxyXG4gICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcclxuICAgIHdhcm5pbmc6IHRoZW1lLnBhbGV0dGUud2FybmluZy5kYXJrLFxyXG4gICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkuZGFyayxcclxuICAgIHRleHQ6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgdmFwZTogXCIjZTAxYjAwXCIsXHJcbiAgICBleHBlbnNlOiBcIiMyODhiNmJcIixcclxuICAgIHNob3A6IFwiIzAwMFwiLFxyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRDb2xvckZvcihcclxuICBtYXRjaENvbG9yOiBDdXN0b21Db2xvciB8IFwicHJpbWFyeVwiIHwgXCJzZWNvbmRhcnlcIixcclxuICB0aGVtZTogVGhlbWUsXHJcbikge1xyXG4gIHJldHVybiB7XHJcbiAgICBjb2xvcjogY29sb3IodGhlbWUpW21hdGNoQ29sb3JdLFxyXG4gICAgYmFja2dyb3VuZDogYmdzKHRoZW1lKVttYXRjaENvbG9yXSxcclxuICAgIFtcIiYuTXVpQnV0dG9uLW91dGxpbmVkXCJdOiB7XHJcbiAgICAgIGNvbG9yOiBiZ3ModGhlbWUpW21hdGNoQ29sb3JdLFxyXG4gICAgICBib3JkZXI6IGAxcHggc29saWQgYCArIGJncyh0aGVtZSlbbWF0Y2hDb2xvcl0sXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgIH0sXHJcbiAgICBbXCImLk11aUJ1dHRvbi10ZXh0XCJdOiB7XHJcbiAgICAgIGNvbG9yOiBiZ3ModGhlbWUpW21hdGNoQ29sb3JdLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICB9LFxyXG4gICAgW1wiJjpob3ZlclwiXToge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBiZ3NIb3Zlcih0aGVtZSlbbWF0Y2hDb2xvcl0sXHJcbiAgICAgIFtcIiYuTXVpQnV0dG9uLW91dGxpbmVkXCJdOiB7XHJcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkIGAgKyBiZ3NIb3Zlcih0aGVtZSlbbWF0Y2hDb2xvcl0sXHJcbiAgICAgIH0sXHJcbiAgICAgIFtcIiYuTXVpQnV0dG9uLW91dGxpbmVkLCYuTXVpQnV0dG9uLXRleHRcIl06IHtcclxuICAgICAgICBjb2xvcjogY29sb3JIb3Zlcih0aGVtZSlbbWF0Y2hDb2xvcl0sXHJcbiAgICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCB1c2VCdXR0b25TdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHZhcGU6IGdldENvbG9yRm9yKFwidmFwZVwiLCB0aGVtZSksXHJcbiAgICBkZWZhdWx0OiBnZXRDb2xvckZvcihcImRlZmF1bHRcIiwgdGhlbWUpLFxyXG4gICAgYmx1ZTogZ2V0Q29sb3JGb3IoXCJibHVlXCIsIHRoZW1lKSxcclxuICAgIHByaW1hcnk6IGdldENvbG9yRm9yKFwicHJpbWFyeVwiLCB0aGVtZSksXHJcbiAgICBzZWNvbmRhcnk6IGdldENvbG9yRm9yKFwic2Vjb25kYXJ5XCIsIHRoZW1lKSxcclxuICAgIHN1Y2Nlc3M6IGdldENvbG9yRm9yKFwic3VjY2Vzc1wiLCB0aGVtZSksXHJcbiAgICBlcnJvcjogZ2V0Q29sb3JGb3IoXCJlcnJvclwiLCB0aGVtZSksXHJcbiAgICB3YXJuaW5nOiBnZXRDb2xvckZvcihcIndhcm5pbmdcIiwgdGhlbWUpLFxyXG4gICAgdGVydGlhcnk6IGdldENvbG9yRm9yKFwidGVydGlhcnlcIiwgdGhlbWUpLFxyXG4gICAgdGV4dDoge1xyXG4gICAgICBjb2xvcjogY29sb3IodGhlbWUpLnRleHQsXHJcbiAgICAgIGJhY2tncm91bmQ6IGJncyh0aGVtZSkudGV4dCxcclxuICAgICAgW1wiJjpob3ZlclwiXToge1xyXG4gICAgICAgIGNvbG9yOiBjb2xvckhvdmVyKHRoZW1lKS50ZXh0LFxyXG4gICAgICAgIGJhY2tncm91bmQ6IGJnc0hvdmVyKHRoZW1lKS50ZXh0LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGV4cGVuc2U6IGdldENvbG9yRm9yKFwiZXhwZW5zZVwiLCB0aGVtZSksXHJcbiAgICBzaG9wOiBnZXRDb2xvckZvcihcInNob3BcIiwgdGhlbWUpLFxyXG4gIH0pXHJcbik7XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hDb2xvclRvUmVndWxhcihcclxuICBjb2xvcj86IEJ1dHRvblN0eWxlc0NvbG9yLFxyXG4pIHtcclxuICBzd2l0Y2ggKGNvbG9yKSB7XHJcbiAgICBjYXNlIFwiYmx1ZVwiOlxyXG4gICAgY2FzZSBcImVycm9yXCI6XHJcbiAgICBjYXNlIFwiZXhwZW5zZVwiOlxyXG4gICAgY2FzZSBcInNob3BcIjpcclxuICAgIGNhc2UgXCJzdWNjZXNzXCI6XHJcbiAgICBjYXNlIFwidGVydGlhcnlcIjpcclxuICAgIGNhc2UgXCJ0ZXh0XCI6XHJcbiAgICBjYXNlIFwidmFwZVwiOlxyXG4gICAgY2FzZSBcIndhcm5pbmdcIjpcclxuICAgIGNhc2UgXCJkZWZhdWx0XCI6XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICBjYXNlIFwiaW5oZXJpdFwiOlxyXG4gICAgY2FzZSBcInByaW1hcnlcIjpcclxuICAgIGNhc2UgXCJzZWNvbmRhcnlcIjpcclxuICAgIGNhc2UgdW5kZWZpbmVkOlxyXG4gICAgICByZXR1cm4gY29sb3I7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBhc3NlcnROZXZlcihjb2xvcik7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHN3aXRjaENvbG9yVG9DdXN0b20oXHJcbiAgY29sb3I/OiBCdXR0b25TdHlsZXNDb2xvcixcclxuKSB7XHJcbiAgc3dpdGNoIChjb2xvcikge1xyXG4gICAgY2FzZSBcImluaGVyaXRcIjpcclxuICAgIGNhc2UgXCJwcmltYXJ5XCI6XHJcbiAgICBjYXNlIFwic2Vjb25kYXJ5XCI6XHJcbiAgICBjYXNlIHVuZGVmaW5lZDpcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGNhc2UgXCJibHVlXCI6XHJcbiAgICBjYXNlIFwiZXJyb3JcIjpcclxuICAgIGNhc2UgXCJleHBlbnNlXCI6XHJcbiAgICBjYXNlIFwic2hvcFwiOlxyXG4gICAgY2FzZSBcInN1Y2Nlc3NcIjpcclxuICAgIGNhc2UgXCJ0ZXJ0aWFyeVwiOlxyXG4gICAgY2FzZSBcInRleHRcIjpcclxuICAgIGNhc2UgXCJ2YXBlXCI6XHJcbiAgICBjYXNlIFwid2FybmluZ1wiOlxyXG4gICAgY2FzZSBcImRlZmF1bHRcIjpcclxuICAgICAgcmV0dXJuIGNvbG9yO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGFzc2VydE5ldmVyKGNvbG9yKTtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCcmFuZEJ1dHRvbiA9IChcclxuICB7IGNoaWxkcmVuLCB2YXJpYW50ID0gXCJjb250YWluZWRcIiwgY2xhc3NOYW1lLCBjb2xvciwgc2l6ZSwgLi4ub3RoZXIgfTpcclxuICAgIFByb3BzV2l0aENoaWxkcmVuPFxyXG4gICAgICBCdXR0b25TdHlsZXNcclxuICAgID4sXHJcbikgPT4ge1xyXG4gIGNvbnN0IGRlZmF1bHRDb2xvciA9IHN3aXRjaENvbG9yVG9SZWd1bGFyKGNvbG9yKTtcclxuICBjb25zdCBjdXN0b21Db2xvciA9IHN3aXRjaENvbG9yVG9DdXN0b20oY29sb3IpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VCdXR0b25TdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIDxCdXR0b25cclxuICAgIGNvbG9yPXtkZWZhdWx0Q29sb3J9XHJcbiAgICB2YXJpYW50PXt2YXJpYW50fVxyXG4gICAgc2l6ZT17c2l6ZSA9PT0gXCJkZWZhdWx0XCIgPyB1bmRlZmluZWQgOiBzaXplfVxyXG4gICAgey4uLm90aGVyfVxyXG4gICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICBbeyBbY2xhc3Nlc1tjdXN0b21Db2xvciB8fCBcImRlZmF1bHRcIl1dOiBjdXN0b21Db2xvciB9XSxcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgKX1cclxuICA+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9CdXR0b24+O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9