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
    textDecoration: "none",
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
}); // export const BrandButtonRAQ = withStyles(styles)((
//   { classes, variant, size, children, color, ref, ...other }: PropsWithChildren<
//     ButtonStyles
//   >,
// ) => {
//   const isOutlined = variant === "outlined";
//   return (
//     <Button
//       className={clsx([
//         { ...classes },
//         classes.root,
//         { [classes.colorOutline]: isOutlined },
//         { [classes.color]: !isOutlined },
//         { [classes.backgroundOutline]: isOutlined },
//         { [classes.background]: !isOutlined },
//       ])}
//       variant={variant}
//       size={size === "default" ? undefined : size}
//       ref={ref}
//       {...other}
//     >
//       {children}
//     </Button>
//   );
// });
// BrandButton.displayName = "BrandButton";

/**
 * 
 * NEW WAY
 */


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
      lineNumber: 507,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0JyYW5kQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJib3JkZXJTdGFydCIsInN0eWxlZEJ5Q29sb3IiLCJwcm9wZXJ0eSIsIm1hcHBpbmciLCJwcm9wcyIsInN0eWxlZEJ5U2l6ZSIsInN0eWxlcyIsInRoZW1lIiwiY29sb3IiLCJkZWZhdWx0IiwiYmx1ZSIsInByaW1hcnkiLCJwYWxldHRlIiwiY29udHJhc3RUZXh0Iiwic2Vjb25kYXJ5Iiwic3VjY2VzcyIsImVycm9yIiwid2FybmluZyIsInRlcnRpYXJ5IiwidGV4dCIsImdldENvbnRyYXN0VGV4dCIsInZhcGUiLCJleHBlbnNlIiwic2hvcCIsImNvbG9yT3V0bGluZSIsIm1haW4iLCJkYXJrIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRPdXRsaW5lIiwiYm9yZGVyIiwicm9vdCIsInRleHREZWNvcmF0aW9uIiwiYm9yZGVyUmFkaXVzIiwic2hhcGUiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwibGFyZ2UiLCJzbWFsbCIsInBhZGRpbmciLCJzcGFjaW5nIiwiY3Vyc29yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImNvbG9ySG92ZXIiLCJiZ3MiLCJiZ3NIb3ZlciIsImdldENvbG9yRm9yIiwibWF0Y2hDb2xvciIsInVzZUJ1dHRvblN0eWxlcyIsIm1ha2VTdHlsZXMiLCJjcmVhdGVTdHlsZXMiLCJzd2l0Y2hDb2xvclRvUmVndWxhciIsInVuZGVmaW5lZCIsImFzc2VydE5ldmVyIiwic3dpdGNoQ29sb3JUb0N1c3RvbSIsIkJyYW5kQnV0dG9uIiwiY2hpbGRyZW4iLCJ2YXJpYW50IiwiY2xhc3NOYW1lIiwic2l6ZSIsIm90aGVyIiwiZGVmYXVsdENvbG9yIiwiY3VzdG9tQ29sb3IiLCJjbGFzc2VzIiwiY2xzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQXFJQSxNQUFNQSxXQUFXLEdB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFVSkYsUUFWSSxDQUFQO0FBWUQsQ0F0Qk07O0dBQU1ELFc7VUFRS1AsZTs7O0tBUkxPLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmI5ZjFjM2JiMzg3NjhmZDcxYmQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVTdHlsZXMsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBUaGVtZSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgeyBhc3NlcnROZXZlciwgYXNzZXJ0IH0gZnJvbSBcIkB3aWxmcmVkbG9wZXovcmVhY3QtdXRpbHNcIjtcclxuXHJcbmludGVyZmFjZSBTdHlsZXMge1xyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb2xvcnNNYXBwaW5nIHtcclxuICBkZWZhdWx0OiBzdHJpbmc7XHJcbiAgYmx1ZTogc3RyaW5nO1xyXG4gIHZhcGU6IHN0cmluZztcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTaXplc01hcHBpbmcge1xyXG4gIGRlZmF1bHQ6IHN0cmluZyB8IG51bWJlcjtcclxuICBzbWFsbDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIGxhcmdlOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcbmV4cG9ydCB0eXBlIFBhbGV0dGVDb2xvcktleXMgPVxyXG4gIHwgXCJwcmltYXJ5XCJcclxuICB8IFwic2Vjb25kYXJ5XCJcclxuICB8IFwiZXJyb3JcIlxyXG4gIHwgXCJ3YXJuaW5nXCJcclxuICB8IFwidGVydGlhcnlcIlxyXG4gIHwgXCJzdWNjZXNzXCI7XHJcblxyXG50eXBlIFJlZ3VsYXJCdXR0b25Db2xvciA9IFwiaW5oZXJpdFwiIHwgXCJwcmltYXJ5XCIgfCBcInNlY29uZGFyeVwiO1xyXG5cclxudHlwZSBDdXN0b21Db2xvciA9XHJcbiAgfCBcInZhcGVcIlxyXG4gIHwgXCJleHBlbnNlXCJcclxuICB8IFwic2hvcFwiXHJcbiAgfCBcInRleHRcIlxyXG4gIHwgXCJibHVlXCJcclxuICB8IFwiZXJyb3JcIlxyXG4gIHwgXCJ3YXJuaW5nXCJcclxuICB8IFwidGVydGlhcnlcIlxyXG4gIHwgXCJzdWNjZXNzXCJcclxuICB8IFwiZGVmYXVsdFwiO1xyXG5cclxudHlwZSBCdXR0b25TdHlsZXNDb2xvciA9IEN1c3RvbUNvbG9yIHwgUmVndWxhckJ1dHRvbkNvbG9yO1xyXG5cclxuLy8gaW50ZXJmYWNlIEJ1dHRvblN0eWxlcyBleHRlbmRzIFdpdGhTdHlsZXM8dHlwZW9mIHN0eWxlcz4ge1xyXG4vLyAgIHJlZj86IGFueTtcclxuLy8gICBjb2xvcj86IEJ1dHRvblN0eWxlc0NvbG9yO1xyXG4vLyAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuLy8gICBzaXplPzogXCJtZWRpdW1cIiB8IFwibGFyZ2VcIiB8IFwic21hbGxcIiB8IFwiZGVmYXVsdFwiO1xyXG4vLyAgIC8qKlxyXG4vLyAgICAgICAgICAqIFRoZSBjb250ZW50IG9mIHRoZSBidXR0b24uXHJcbi8vICAgICAgICAgICovXHJcbi8vICAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbi8vICAgLyoqXHJcbi8vICAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBidXR0b24gd2lsbCBiZSBkaXNhYmxlZC5cclxuLy8gICAgICAgICAgICAqL1xyXG4vLyAgIGRpc2FibGVkPzogYm9vbGVhbjtcclxuLy8gICAvKipcclxuLy8gICAgICAgICAgICAqIElmIGB0cnVlYCwgbm8gZWxldmF0aW9uIGlzIHVzZWQuXHJcbi8vICAgICAgICAgICAgKi9cclxuLy8gICBkaXNhYmxlRWxldmF0aW9uPzogYm9vbGVhbjtcclxuLy8gICAvKipcclxuLy8gICAgICAgICAgICAqIElmIGB0cnVlYCwgdGhlICBrZXlib2FyZCBmb2N1cyByaXBwbGUgd2lsbCBiZSBkaXNhYmxlZC5cclxuLy8gICAgICAgICAgICAqL1xyXG4vLyAgIGRpc2FibGVGb2N1c1JpcHBsZT86IGJvb2xlYW47XHJcbi8vICAgLyoqXHJcbi8vICAgICAgICAgICAgKiBFbGVtZW50IHBsYWNlZCBhZnRlciB0aGUgY2hpbGRyZW4uXHJcbi8vICAgICAgICAgICAgKi9cclxuLy8gICBlbmRJY29uPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4vLyAgIC8qKlxyXG4vLyAgICAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYnV0dG9uIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxyXG4vLyAgICAgICAgICAgICovXHJcbi8vICAgZnVsbFdpZHRoPzogYm9vbGVhbjtcclxuLy8gICAvKipcclxuLy8gICAgICAgICAgICAqIFRoZSBVUkwgdG8gbGluayB0byB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cclxuLy8gICAgICAgICAgICAqIElmIGRlZmluZWQsIGFuIGBhYCBlbGVtZW50IHdpbGwgYmUgdXNlZCBhcyB0aGUgcm9vdCBub2RlLlxyXG4vLyAgICAgICAgICAgICovXHJcbi8vICAgaHJlZj86IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuLy8gICAvKipcclxuLy8gICAgICAgICAgICAqIEVsZW1lbnQgcGxhY2VkIGJlZm9yZSB0aGUgY2hpbGRyZW4uXHJcbi8vICAgICAgICAgICAgKi9cclxuLy8gICBzdGFydEljb24/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbi8vICAgLyoqXHJcbi8vICAgICAgICAgICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXHJcbi8vICAgICAgICAgICAgKi9cclxuLy8gICB2YXJpYW50PzogXCJ0ZXh0XCIgfCBcIm91dGxpbmVkXCIgfCBcImNvbnRhaW5lZFwiO1xyXG4vLyB9XHJcblxyXG5pbnRlcmZhY2UgQnV0dG9uU3R5bGVzIHtcclxuICByZWY/OiBSZWFjdC5SZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xyXG4gIGNvbG9yPzogQnV0dG9uU3R5bGVzQ29sb3I7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIHNpemU/OiBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiIHwgXCJzbWFsbFwiIHwgXCJkZWZhdWx0XCI7XHJcbiAgLyoqXHJcbiAgICAgICAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGJ1dHRvbi5cclxuICAgICAgICAgKi9cclxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAvKipcclxuICAgICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGJ1dHRvbiB3aWxsIGJlIGRpc2FibGVkLlxyXG4gICAgICAgICAgICovXHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogSWYgYHRydWVgLCBubyBlbGV2YXRpb24gaXMgdXNlZC5cclxuICAgICAgICAgICAqL1xyXG4gIGRpc2FibGVFbGV2YXRpb24/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogSWYgYHRydWVgLCB0aGUgIGtleWJvYXJkIGZvY3VzIHJpcHBsZSB3aWxsIGJlIGRpc2FibGVkLlxyXG4gICAgICAgICAgICovXHJcbiAgZGlzYWJsZUZvY3VzUmlwcGxlPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIEVsZW1lbnQgcGxhY2VkIGFmdGVyIHRoZSBjaGlsZHJlbi5cclxuICAgICAgICAgICAqL1xyXG4gIGVuZEljb24/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBidXR0b24gd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXHJcbiAgICAgICAgICAgKi9cclxuICBmdWxsV2lkdGg/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogVGhlIFVSTCB0byBsaW5rIHRvIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxyXG4gICAgICAgICAgICogSWYgZGVmaW5lZCwgYW4gYGFgIGVsZW1lbnQgd2lsbCBiZSB1c2VkIGFzIHRoZSByb290IG5vZGUuXHJcbiAgICAgICAgICAgKi9cclxuICBocmVmPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogRWxlbWVudCBwbGFjZWQgYmVmb3JlIHRoZSBjaGlsZHJlbi5cclxuICAgICAgICAgICAqL1xyXG4gIHN0YXJ0SWNvbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAvKipcclxuICAgICAgICAgICAqIFRoZSB2YXJpYW50IHRvIHVzZS4gRGVmYXVsdHMgdG8gY29udGFpbmVkXHJcbiAgICAgICAgICAgKi9cclxuICB2YXJpYW50PzogXCJ0ZXh0XCIgfCBcIm91dGxpbmVkXCIgfCBcImNvbnRhaW5lZFwiO1xyXG59XHJcblxyXG5jb25zdCBib3JkZXJTdGFydCA9IFwiMXB4IHNvbGlkIFwiO1xyXG4vLyBMaWtlIGh0dHBzOi8vZ2l0aHViLmNvbS9icnVub2JlcnRvbGluaS9zdHlsZWQtYnlcclxuY29uc3Qgc3R5bGVkQnlDb2xvciA9IChwcm9wZXJ0eTogc3RyaW5nLCBtYXBwaW5nOiBDb2xvcnNNYXBwaW5nKSA9PlxyXG4gIChwcm9wczogU3R5bGVzKSA9PiBtYXBwaW5nW3Byb3BzW3Byb3BlcnR5XV07XHJcbmNvbnN0IHN0eWxlZEJ5U2l6ZSA9IChwcm9wZXJ0eTogc3RyaW5nLCBtYXBwaW5nOiBTaXplc01hcHBpbmcpID0+XHJcbiAgKHByb3BzOiBTdHlsZXMpID0+IG1hcHBpbmdbcHJvcHNbcHJvcGVydHldXTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWUpID0+ICh7XHJcbiAgY29sb3I6IHtcclxuICAgIGNvbG9yOiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICBkZWZhdWx0OiBcIiNmZmZcIixcclxuICAgICAgYmx1ZTogXCIjZmZmXCIsXHJcbiAgICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5jb250cmFzdFRleHQsXHJcbiAgICAgIHNlY29uZGFyeTogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuY29udHJhc3RUZXh0LFxyXG4gICAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MuY29udHJhc3RUZXh0LFxyXG4gICAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5jb250cmFzdFRleHQsXHJcbiAgICAgIHdhcm5pbmc6IHRoZW1lLnBhbGV0dGUud2FybmluZy5jb250cmFzdFRleHQsXHJcbiAgICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgICAgdGV4dDogdGhlbWUucGFsZXR0ZS5nZXRDb250cmFzdFRleHQodGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnkpLFxyXG4gICAgICB2YXBlOiBcIiNmZmZcIixcclxuICAgICAgZXhwZW5zZTogXCIjZmZmXCIsXHJcbiAgICAgIHNob3A6IFwiI2ZmZlwiLFxyXG4gICAgfSksXHJcbiAgfSxcclxuICBjb2xvck91dGxpbmU6IHtcclxuICAgIGNvbG9yOiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICBkZWZhdWx0OiBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gICAgICBibHVlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzIxOTZGMyAzMCUsICMyMUNCRjMgOTAlKVwiLFxyXG4gICAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MubWFpbixcclxuICAgICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcclxuICAgICAgd2FybmluZzogdGhlbWUucGFsZXR0ZS53YXJuaW5nLm1haW4sXHJcbiAgICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5Lm1haW4sXHJcbiAgICAgIHRleHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICB2YXBlOiBcIiNmZjFmMDBcIixcclxuICAgICAgZXhwZW5zZTogXCIjMmU5ZTdhXCIsXHJcbiAgICAgIHNob3A6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICB9KSxcclxuICAgIFtcIiY6aG92ZXIgYSwgJjpob3ZlclwiXToge1xyXG4gICAgICBjb2xvcjogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgICBkZWZhdWx0OiBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gICAgICAgIGJsdWU6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjE5NkYzIDMwJSwgIzIxQ0JGMyA5MCUpXCIsXHJcbiAgICAgICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXHJcbiAgICAgICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5kYXJrLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5kYXJrLFxyXG4gICAgICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmRhcmssXHJcbiAgICAgICAgd2FybmluZzogdGhlbWUucGFsZXR0ZS53YXJuaW5nLmRhcmssXHJcbiAgICAgICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkuZGFyayxcclxuICAgICAgICB0ZXh0OiBcImluaGVyaXRcIixcclxuICAgICAgICB2YXBlOiBcIiNmZjFmMDBcIixcclxuICAgICAgICBleHBlbnNlOiBcIiMyZTllN2FcIixcclxuICAgICAgICBzaG9wOiBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBiYWNrZ3JvdW5kOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICBkZWZhdWx0OiBcIiMwMDBcIixcclxuICAgICAgYmx1ZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMyMTk2RjMgMzAlLCAjMjFDQkYzIDkwJSlcIixcclxuICAgICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgIHNlY29uZGFyeTogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLm1haW4sXHJcbiAgICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXHJcbiAgICAgIHdhcm5pbmc6IHRoZW1lLnBhbGV0dGUud2FybmluZy5tYWluLFxyXG4gICAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5tYWluLFxyXG4gICAgICB0ZXh0OiBcImluaGVyaXRcIixcclxuICAgICAgdmFwZTogXCIjZmYxZjAwXCIsXHJcbiAgICAgIGV4cGVuc2U6IFwiIzJlOWU3YVwiLFxyXG4gICAgICBzaG9wOiBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gICAgfSksXHJcbiAgICBbXCImOmhvdmVyXCJdOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgICAgZGVmYXVsdDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgICAgICBibHVlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDAgMTM3IDI0NykgMzAlLCByZ2IoMTAgMTM4IDE2OCkgOTAlKVwiLFxyXG4gICAgICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgICAgIHNlY29uZGFyeTogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayxcclxuICAgICAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MuZGFyayxcclxuICAgICAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5kYXJrLFxyXG4gICAgICAgIHdhcm5pbmc6IHRoZW1lLnBhbGV0dGUud2FybmluZy5kYXJrLFxyXG4gICAgICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5LmRhcmssXHJcbiAgICAgICAgdGV4dDogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICAgICAgdmFwZTogXCIjZTAxYjAwXCIsXHJcbiAgICAgICAgZXhwZW5zZTogXCIjMjg4YjZiXCIsXHJcbiAgICAgICAgc2hvcDogXCIjMDAwXCIsXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJhY2tncm91bmRPdXRsaW5lOiB7XHJcbiAgICBib3JkZXI6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IGJvcmRlclN0YXJ0ICsgXCIjMDAwXCIsXHJcbiAgICAgIGJsdWU6IGJvcmRlclN0YXJ0ICsgXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMyMTk2RjMgMzAlLCAjMjFDQkYzIDkwJSlcIixcclxuICAgICAgcHJpbWFyeTogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgICAgc2Vjb25kYXJ5OiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICAgIHN1Y2Nlc3M6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS5zdWNjZXNzLm1haW4sXHJcbiAgICAgIGVycm9yOiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcclxuICAgICAgd2FybmluZzogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLndhcm5pbmcubWFpbixcclxuICAgICAgdGVydGlhcnk6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5tYWluLFxyXG4gICAgICB0ZXh0OiBib3JkZXJTdGFydCArIFwiaW5oZXJpdFwiLFxyXG4gICAgICB2YXBlOiBib3JkZXJTdGFydCArIFwiI2ZmMWYwMFwiLFxyXG4gICAgICBleHBlbnNlOiBib3JkZXJTdGFydCArIFwiIzJlOWU3YVwiLFxyXG4gICAgICBzaG9wOiBib3JkZXJTdGFydCArIFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICB9KSxcclxuICAgIFtcIiY6aG92ZXJcIl06IHtcclxuICAgICAgYm9yZGVyOiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICAgIGRlZmF1bHQ6IGJvcmRlclN0YXJ0ICsgXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgICAgICBibHVlOiBib3JkZXJTdGFydCArXHJcbiAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDAgMTM3IDI0NykgMzAlLCByZ2IoMTAgMTM4IDE2OCkgOTAlKVwiLFxyXG4gICAgICAgIHByaW1hcnk6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXHJcbiAgICAgICAgc2Vjb25kYXJ5OiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmssXHJcbiAgICAgICAgc3VjY2VzczogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MuZGFyayxcclxuICAgICAgICBlcnJvcjogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLmVycm9yLmRhcmssXHJcbiAgICAgICAgd2FybmluZzogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLndhcm5pbmcuZGFyayxcclxuICAgICAgICB0ZXJ0aWFyeTogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5LmRhcmssXHJcbiAgICAgICAgdGV4dDogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICAgICB2YXBlOiBib3JkZXJTdGFydCArIFwiI2UwMWIwMFwiLFxyXG4gICAgICAgIGV4cGVuc2U6IGJvcmRlclN0YXJ0ICsgXCIjMjg4YjZiXCIsXHJcbiAgICAgICAgc2hvcDogYm9yZGVyU3RhcnQgKyBcIiMwMDBcIixcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcm9vdDoge1xyXG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICBib3JkZXI6IDAsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgaGVpZ2h0OiBzdHlsZWRCeVNpemUoXCJzaXplXCIsIHtcclxuICAgICAgZGVmYXVsdDogNDAsXHJcbiAgICAgIGxhcmdlOiA0OCxcclxuICAgICAgc21hbGw6IDIwLFxyXG4gICAgfSksXHJcbiAgICBwYWRkaW5nOiBzdHlsZWRCeVNpemUoXCJzaXplXCIsIHtcclxuICAgICAgZGVmYXVsdDogdGhlbWUuc3BhY2luZygxLjYsIDEuNCksXHJcbiAgICAgIGxhcmdlOiB0aGVtZS5zcGFjaW5nKDIsIDEuNSksXHJcbiAgICAgIHNtYWxsOiB0aGVtZS5zcGFjaW5nKDEuMSwgMC42KSxcclxuICAgIH0pLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuXHJcbiAgICBib3hTaGFkb3c6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICAgIGJsdWU6IFwicmdiYSgzMywgMjAzLCAyNDMsIDAuMykgMXB4IDJweCAxcHggMXB4XCIsXHJcbiAgICAgIHByaW1hcnk6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICAgIHNlY29uZGFyeTogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgc3VjY2VzczogdGhlbWUuc2hhZG93c1s0XSxcclxuICAgICAgZXJyb3I6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIHdhcm5pbmc6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIHRlcnRpYXJ5OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICB0ZXh0OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICB2YXBlOiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgfSksXHJcbiAgfSxcclxufSk7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgQnJhbmRCdXR0b25SQVEgPSB3aXRoU3R5bGVzKHN0eWxlcykoKFxyXG4vLyAgIHsgY2xhc3NlcywgdmFyaWFudCwgc2l6ZSwgY2hpbGRyZW4sIGNvbG9yLCByZWYsIC4uLm90aGVyIH06IFByb3BzV2l0aENoaWxkcmVuPFxyXG4vLyAgICAgQnV0dG9uU3R5bGVzXHJcbi8vICAgPixcclxuLy8gKSA9PiB7XHJcbi8vICAgY29uc3QgaXNPdXRsaW5lZCA9IHZhcmlhbnQgPT09IFwib3V0bGluZWRcIjtcclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPEJ1dHRvblxyXG4vLyAgICAgICBjbGFzc05hbWU9e2Nsc3goW1xyXG4vLyAgICAgICAgIHsgLi4uY2xhc3NlcyB9LFxyXG4vLyAgICAgICAgIGNsYXNzZXMucm9vdCxcclxuLy8gICAgICAgICB7IFtjbGFzc2VzLmNvbG9yT3V0bGluZV06IGlzT3V0bGluZWQgfSxcclxuLy8gICAgICAgICB7IFtjbGFzc2VzLmNvbG9yXTogIWlzT3V0bGluZWQgfSxcclxuLy8gICAgICAgICB7IFtjbGFzc2VzLmJhY2tncm91bmRPdXRsaW5lXTogaXNPdXRsaW5lZCB9LFxyXG4vLyAgICAgICAgIHsgW2NsYXNzZXMuYmFja2dyb3VuZF06ICFpc091dGxpbmVkIH0sXHJcbi8vICAgICAgIF0pfVxyXG4vLyAgICAgICB2YXJpYW50PXt2YXJpYW50fVxyXG4vLyAgICAgICBzaXplPXtzaXplID09PSBcImRlZmF1bHRcIiA/IHVuZGVmaW5lZCA6IHNpemV9XHJcbi8vICAgICAgIHJlZj17cmVmfVxyXG4vLyAgICAgICB7Li4ub3RoZXJ9XHJcbi8vICAgICA+XHJcbi8vICAgICAgIHtjaGlsZHJlbn1cclxuLy8gICAgIDwvQnV0dG9uPlxyXG4vLyAgICk7XHJcbi8vIH0pO1xyXG4vLyBCcmFuZEJ1dHRvbi5kaXNwbGF5TmFtZSA9IFwiQnJhbmRCdXR0b25cIjtcclxuXHJcbi8qKlxyXG4gKiBcclxuICogTkVXIFdBWVxyXG4gKi9cclxuXHJcbmNvbnN0IGNvbG9yID0gKHRoZW1lOiBUaGVtZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBkZWZhdWx0OiBcIiNmZmZcIixcclxuICAgIGJsdWU6IFwiI2ZmZlwiLFxyXG4gICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgIHNlY29uZGFyeTogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuY29udHJhc3RUZXh0LFxyXG4gICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLmNvbnRyYXN0VGV4dCxcclxuICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmNvbnRyYXN0VGV4dCxcclxuICAgIHdhcm5pbmc6IFwiI2ZmZlwiLFxyXG4gICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkuY29udHJhc3RUZXh0LFxyXG4gICAgdGV4dDogdGhlbWUucGFsZXR0ZS5nZXRDb250cmFzdFRleHQodGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnkpLFxyXG4gICAgdmFwZTogXCIjZmZmXCIsXHJcbiAgICBleHBlbnNlOiBcIiNmZmZcIixcclxuICAgIHNob3A6IFwiI2ZmZlwiLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBjb2xvckhvdmVyID0gKHRoZW1lOiBUaGVtZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBkZWZhdWx0OiBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gICAgYmx1ZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMyMTk2RjMgMzAlLCAjMjFDQkYzIDkwJSlcIixcclxuICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5kYXJrLFxyXG4gICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLmRhcmssXHJcbiAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5kYXJrLFxyXG4gICAgd2FybmluZzogdGhlbWUucGFsZXR0ZS53YXJuaW5nLmRhcmssXHJcbiAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5kYXJrLFxyXG4gICAgdGV4dDogXCJpbmhlcml0XCIsXHJcbiAgICB2YXBlOiBcIiNmZjFmMDBcIixcclxuICAgIGV4cGVuc2U6IFwiIzJlOWU3YVwiLFxyXG4gICAgc2hvcDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgYmdzID0gKHRoZW1lOiBUaGVtZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBkZWZhdWx0OiBcIiMwMDBcIixcclxuICAgIGJsdWU6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjE5NkYzIDMwJSwgIzIxQ0JGMyA5MCUpXCIsXHJcbiAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgIHNlY29uZGFyeTogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluLFxyXG4gICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcclxuICAgIHdhcm5pbmc6IHRoZW1lLnBhbGV0dGUud2FybmluZy5tYWluLFxyXG4gICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkubWFpbixcclxuICAgIHRleHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgZXhwZW5zZTogXCIjMmU5ZTdhXCIsXHJcbiAgICBzaG9wOiBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gICAgdmFwZTogXCIjZmYxZjAwXCIsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGJnc0hvdmVyID0gKHRoZW1lOiBUaGVtZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBkZWZhdWx0OiBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gICAgYmx1ZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigwIDEzNyAyNDcpIDMwJSwgcmdiKDEwIDEzOCAxNjgpIDkwJSlcIixcclxuICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5kYXJrLFxyXG4gICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLmRhcmssXHJcbiAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5kYXJrLFxyXG4gICAgd2FybmluZzogdGhlbWUucGFsZXR0ZS53YXJuaW5nLmRhcmssXHJcbiAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5kYXJrLFxyXG4gICAgdGV4dDogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICB2YXBlOiBcIiNlMDFiMDBcIixcclxuICAgIGV4cGVuc2U6IFwiIzI4OGI2YlwiLFxyXG4gICAgc2hvcDogXCIjMDAwXCIsXHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldENvbG9yRm9yKFxyXG4gIG1hdGNoQ29sb3I6IEN1c3RvbUNvbG9yIHwgXCJwcmltYXJ5XCIgfCBcInNlY29uZGFyeVwiLFxyXG4gIHRoZW1lOiBUaGVtZSxcclxuKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbG9yOiBjb2xvcih0aGVtZSlbbWF0Y2hDb2xvcl0sXHJcbiAgICBiYWNrZ3JvdW5kOiBiZ3ModGhlbWUpW21hdGNoQ29sb3JdLFxyXG4gICAgW1wiJi5NdWlCdXR0b24tb3V0bGluZWRcIl06IHtcclxuICAgICAgY29sb3I6IGJncyh0aGVtZSlbbWF0Y2hDb2xvcl0sXHJcbiAgICAgIGJvcmRlcjogYDFweCBzb2xpZCBgICsgYmdzKHRoZW1lKVttYXRjaENvbG9yXSxcclxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgfSxcclxuICAgIFtcIiYuTXVpQnV0dG9uLXRleHRcIl06IHtcclxuICAgICAgY29sb3I6IGJncyh0aGVtZSlbbWF0Y2hDb2xvcl0sXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgIH0sXHJcbiAgICBbXCImOmhvdmVyXCJdOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJnc0hvdmVyKHRoZW1lKVttYXRjaENvbG9yXSxcclxuICAgICAgW1wiJi5NdWlCdXR0b24tb3V0bGluZWQsJi5NdWlCdXR0b24tdGV4dFwiXToge1xyXG4gICAgICAgIGNvbG9yOiBjb2xvckhvdmVyKHRoZW1lKVttYXRjaENvbG9yXSxcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IHVzZUJ1dHRvblN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgdmFwZTogZ2V0Q29sb3JGb3IoXCJ2YXBlXCIsIHRoZW1lKSxcclxuICAgIGRlZmF1bHQ6IGdldENvbG9yRm9yKFwiZGVmYXVsdFwiLCB0aGVtZSksXHJcbiAgICBibHVlOiBnZXRDb2xvckZvcihcImJsdWVcIiwgdGhlbWUpLFxyXG4gICAgcHJpbWFyeTogZ2V0Q29sb3JGb3IoXCJwcmltYXJ5XCIsIHRoZW1lKSxcclxuICAgIHNlY29uZGFyeTogZ2V0Q29sb3JGb3IoXCJzZWNvbmRhcnlcIiwgdGhlbWUpLFxyXG4gICAgc3VjY2VzczogZ2V0Q29sb3JGb3IoXCJzdWNjZXNzXCIsIHRoZW1lKSxcclxuICAgIGVycm9yOiBnZXRDb2xvckZvcihcImVycm9yXCIsIHRoZW1lKSxcclxuICAgIHdhcm5pbmc6IGdldENvbG9yRm9yKFwid2FybmluZ1wiLCB0aGVtZSksXHJcbiAgICB0ZXJ0aWFyeTogZ2V0Q29sb3JGb3IoXCJ0ZXJ0aWFyeVwiLCB0aGVtZSksXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgIGNvbG9yOiBjb2xvcih0aGVtZSkudGV4dCxcclxuICAgICAgYmFja2dyb3VuZDogYmdzKHRoZW1lKS50ZXh0LFxyXG4gICAgICBbXCImOmhvdmVyXCJdOiB7XHJcbiAgICAgICAgY29sb3I6IGNvbG9ySG92ZXIodGhlbWUpLnRleHQsXHJcbiAgICAgICAgYmFja2dyb3VuZDogYmdzSG92ZXIodGhlbWUpLnRleHQsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXhwZW5zZTogZ2V0Q29sb3JGb3IoXCJleHBlbnNlXCIsIHRoZW1lKSxcclxuICAgIHNob3A6IGdldENvbG9yRm9yKFwic2hvcFwiLCB0aGVtZSksXHJcbiAgfSlcclxuKTtcclxuXHJcbmZ1bmN0aW9uIHN3aXRjaENvbG9yVG9SZWd1bGFyKFxyXG4gIGNvbG9yPzogQnV0dG9uU3R5bGVzQ29sb3IsXHJcbikge1xyXG4gIHN3aXRjaCAoY29sb3IpIHtcclxuICAgIGNhc2UgXCJibHVlXCI6XHJcbiAgICBjYXNlIFwiZXJyb3JcIjpcclxuICAgIGNhc2UgXCJleHBlbnNlXCI6XHJcbiAgICBjYXNlIFwic2hvcFwiOlxyXG4gICAgY2FzZSBcInN1Y2Nlc3NcIjpcclxuICAgIGNhc2UgXCJ0ZXJ0aWFyeVwiOlxyXG4gICAgY2FzZSBcInRleHRcIjpcclxuICAgIGNhc2UgXCJ2YXBlXCI6XHJcbiAgICBjYXNlIFwid2FybmluZ1wiOlxyXG4gICAgY2FzZSBcImRlZmF1bHRcIjpcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGNhc2UgXCJpbmhlcml0XCI6XHJcbiAgICBjYXNlIFwicHJpbWFyeVwiOlxyXG4gICAgY2FzZSBcInNlY29uZGFyeVwiOlxyXG4gICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGFzc2VydE5ldmVyKGNvbG9yKTtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gc3dpdGNoQ29sb3JUb0N1c3RvbShcclxuICBjb2xvcj86IEJ1dHRvblN0eWxlc0NvbG9yLFxyXG4pIHtcclxuICBzd2l0Y2ggKGNvbG9yKSB7XHJcbiAgICBjYXNlIFwiaW5oZXJpdFwiOlxyXG4gICAgY2FzZSBcInByaW1hcnlcIjpcclxuICAgIGNhc2UgXCJzZWNvbmRhcnlcIjpcclxuICAgIGNhc2UgdW5kZWZpbmVkOlxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgY2FzZSBcImJsdWVcIjpcclxuICAgIGNhc2UgXCJlcnJvclwiOlxyXG4gICAgY2FzZSBcImV4cGVuc2VcIjpcclxuICAgIGNhc2UgXCJzaG9wXCI6XHJcbiAgICBjYXNlIFwic3VjY2Vzc1wiOlxyXG4gICAgY2FzZSBcInRlcnRpYXJ5XCI6XHJcbiAgICBjYXNlIFwidGV4dFwiOlxyXG4gICAgY2FzZSBcInZhcGVcIjpcclxuICAgIGNhc2UgXCJ3YXJuaW5nXCI6XHJcbiAgICBjYXNlIFwiZGVmYXVsdFwiOlxyXG4gICAgICByZXR1cm4gY29sb3I7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYXNzZXJ0TmV2ZXIoY29sb3IpO1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEJyYW5kQnV0dG9uID0gKFxyXG4gIHsgY2hpbGRyZW4sIHZhcmlhbnQgPSBcImNvbnRhaW5lZFwiLCBjbGFzc05hbWUsIGNvbG9yLCBzaXplLCAuLi5vdGhlciB9OlxyXG4gICAgUHJvcHNXaXRoQ2hpbGRyZW48XHJcbiAgICAgIEJ1dHRvblN0eWxlc1xyXG4gICAgPixcclxuKSA9PiB7XHJcbiAgY29uc3QgZGVmYXVsdENvbG9yID0gc3dpdGNoQ29sb3JUb1JlZ3VsYXIoY29sb3IpO1xyXG4gIGNvbnN0IGN1c3RvbUNvbG9yID0gc3dpdGNoQ29sb3JUb0N1c3RvbShjb2xvcik7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZUJ1dHRvblN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gPEJ1dHRvblxyXG4gICAgY29sb3I9e2RlZmF1bHRDb2xvcn1cclxuICAgIHZhcmlhbnQ9e3ZhcmlhbnR9XHJcbiAgICBzaXplPXtzaXplID09PSBcImRlZmF1bHRcIiA/IHVuZGVmaW5lZCA6IHNpemV9XHJcbiAgICB7Li4ub3RoZXJ9XHJcbiAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgIFt7IFtjbGFzc2VzW2N1c3RvbUNvbG9yIHx8IFwiZGVmYXVsdFwiXV06IGN1c3RvbUNvbG9yIH1dLFxyXG4gICAgICBjbGFzc05hbWUsXHJcbiAgICApfVxyXG4gID5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L0J1dHRvbj47XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=