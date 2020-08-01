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
        color: bgs(theme)[matchColor],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0JyYW5kQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJib3JkZXJTdGFydCIsInN0eWxlZEJ5Q29sb3IiLCJwcm9wZXJ0eSIsIm1hcHBpbmciLCJwcm9wcyIsInN0eWxlZEJ5U2l6ZSIsInN0eWxlcyIsInRoZW1lIiwiY29sb3IiLCJkZWZhdWx0IiwiYmx1ZSIsInByaW1hcnkiLCJwYWxldHRlIiwiY29udHJhc3RUZXh0Iiwic2Vjb25kYXJ5Iiwic3VjY2VzcyIsImVycm9yIiwid2FybmluZyIsInRlcnRpYXJ5IiwidGV4dCIsImdldENvbnRyYXN0VGV4dCIsInZhcGUiLCJleHBlbnNlIiwic2hvcCIsImNvbG9yT3V0bGluZSIsIm1haW4iLCJkYXJrIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRPdXRsaW5lIiwiYm9yZGVyIiwicm9vdCIsInRleHREZWNvcmF0aW9uIiwiYm9yZGVyUmFkaXVzIiwic2hhcGUiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwibGFyZ2UiLCJzbWFsbCIsInBhZGRpbmciLCJzcGFjaW5nIiwiY3Vyc29yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImNvbG9ySG92ZXIiLCJiZ3MiLCJiZ3NIb3ZlciIsImdldENvbG9yRm9yIiwibWF0Y2hDb2xvciIsInVzZUJ1dHRvblN0eWxlcyIsIm1ha2VTdHlsZXMiLCJjcmVhdGVTdHlsZXMiLCJzd2l0Y2hDb2xvclRvUmVndWxhciIsInVuZGVmaW5lZCIsImFzc2VydE5ldmVyIiwic3dpdGNoQ29sb3JUb0N1c3RvbSIsIkJyYW5kQnV0dG9uIiwiY2hpbGRyZW4iLCJ2YXJpYW50IiwiY2xhc3NOYW1lIiwic2l6ZSIsIm90aGVyIiwiZGVmYXVsdENvbG9yIiwiY3VzdG9tQ29sb3IiLCJjbGFzc2VzIiwiY2xzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQXFJQSxNQUFNQSxXQUFXLEdB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVUpGLFFBVkksQ0FBUDtBQVlELENBdEJNOztHQUFNRCxXO1VBUUtQLGU7OztLQVJMTyxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yNDM0ZWMyMTdjMGEyYjcyZmI0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlU3R5bGVzLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgVGhlbWUsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgYXNzZXJ0TmV2ZXIsIGFzc2VydCB9IGZyb20gXCJAd2lsZnJlZGxvcGV6L3JlYWN0LXV0aWxzXCI7XHJcblxyXG5pbnRlcmZhY2UgU3R5bGVzIHtcclxuICBjb2xvcjogc3RyaW5nO1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29sb3JzTWFwcGluZyB7XHJcbiAgZGVmYXVsdDogc3RyaW5nO1xyXG4gIGJsdWU6IHN0cmluZztcclxuICB2YXBlOiBzdHJpbmc7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU2l6ZXNNYXBwaW5nIHtcclxuICBkZWZhdWx0OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgc21hbGw6IHN0cmluZyB8IG51bWJlcjtcclxuICBsYXJnZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5leHBvcnQgdHlwZSBQYWxldHRlQ29sb3JLZXlzID1cclxuICB8IFwicHJpbWFyeVwiXHJcbiAgfCBcInNlY29uZGFyeVwiXHJcbiAgfCBcImVycm9yXCJcclxuICB8IFwid2FybmluZ1wiXHJcbiAgfCBcInRlcnRpYXJ5XCJcclxuICB8IFwic3VjY2Vzc1wiO1xyXG5cclxudHlwZSBSZWd1bGFyQnV0dG9uQ29sb3IgPSBcImluaGVyaXRcIiB8IFwicHJpbWFyeVwiIHwgXCJzZWNvbmRhcnlcIjtcclxuXHJcbnR5cGUgQ3VzdG9tQ29sb3IgPVxyXG4gIHwgXCJ2YXBlXCJcclxuICB8IFwiZXhwZW5zZVwiXHJcbiAgfCBcInNob3BcIlxyXG4gIHwgXCJ0ZXh0XCJcclxuICB8IFwiYmx1ZVwiXHJcbiAgfCBcImVycm9yXCJcclxuICB8IFwid2FybmluZ1wiXHJcbiAgfCBcInRlcnRpYXJ5XCJcclxuICB8IFwic3VjY2Vzc1wiXHJcbiAgfCBcImRlZmF1bHRcIjtcclxuXHJcbnR5cGUgQnV0dG9uU3R5bGVzQ29sb3IgPSBDdXN0b21Db2xvciB8IFJlZ3VsYXJCdXR0b25Db2xvcjtcclxuXHJcbi8vIGludGVyZmFjZSBCdXR0b25TdHlsZXMgZXh0ZW5kcyBXaXRoU3R5bGVzPHR5cGVvZiBzdHlsZXM+IHtcclxuLy8gICByZWY/OiBhbnk7XHJcbi8vICAgY29sb3I/OiBCdXR0b25TdHlsZXNDb2xvcjtcclxuLy8gICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbi8vICAgc2l6ZT86IFwibWVkaXVtXCIgfCBcImxhcmdlXCIgfCBcInNtYWxsXCIgfCBcImRlZmF1bHRcIjtcclxuLy8gICAvKipcclxuLy8gICAgICAgICAgKiBUaGUgY29udGVudCBvZiB0aGUgYnV0dG9uLlxyXG4vLyAgICAgICAgICAqL1xyXG4vLyAgIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4vLyAgIC8qKlxyXG4vLyAgICAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYnV0dG9uIHdpbGwgYmUgZGlzYWJsZWQuXHJcbi8vICAgICAgICAgICAgKi9cclxuLy8gICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbi8vICAgLyoqXHJcbi8vICAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIG5vIGVsZXZhdGlvbiBpcyB1c2VkLlxyXG4vLyAgICAgICAgICAgICovXHJcbi8vICAgZGlzYWJsZUVsZXZhdGlvbj86IGJvb2xlYW47XHJcbi8vICAgLyoqXHJcbi8vICAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSAga2V5Ym9hcmQgZm9jdXMgcmlwcGxlIHdpbGwgYmUgZGlzYWJsZWQuXHJcbi8vICAgICAgICAgICAgKi9cclxuLy8gICBkaXNhYmxlRm9jdXNSaXBwbGU/OiBib29sZWFuO1xyXG4vLyAgIC8qKlxyXG4vLyAgICAgICAgICAgICogRWxlbWVudCBwbGFjZWQgYWZ0ZXIgdGhlIGNoaWxkcmVuLlxyXG4vLyAgICAgICAgICAgICovXHJcbi8vICAgZW5kSWNvbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuLy8gICAvKipcclxuLy8gICAgICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGJ1dHRvbiB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cclxuLy8gICAgICAgICAgICAqL1xyXG4vLyAgIGZ1bGxXaWR0aD86IGJvb2xlYW47XHJcbi8vICAgLyoqXHJcbi8vICAgICAgICAgICAgKiBUaGUgVVJMIHRvIGxpbmsgdG8gd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXHJcbi8vICAgICAgICAgICAgKiBJZiBkZWZpbmVkLCBhbiBgYWAgZWxlbWVudCB3aWxsIGJlIHVzZWQgYXMgdGhlIHJvb3Qgbm9kZS5cclxuLy8gICAgICAgICAgICAqL1xyXG4vLyAgIGhyZWY/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbi8vICAgLyoqXHJcbi8vICAgICAgICAgICAgKiBFbGVtZW50IHBsYWNlZCBiZWZvcmUgdGhlIGNoaWxkcmVuLlxyXG4vLyAgICAgICAgICAgICovXHJcbi8vICAgc3RhcnRJY29uPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4vLyAgIC8qKlxyXG4vLyAgICAgICAgICAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxyXG4vLyAgICAgICAgICAgICovXHJcbi8vICAgdmFyaWFudD86IFwidGV4dFwiIHwgXCJvdXRsaW5lZFwiIHwgXCJjb250YWluZWRcIjtcclxuLy8gfVxyXG5cclxuaW50ZXJmYWNlIEJ1dHRvblN0eWxlcyB7XHJcbiAgcmVmPzogUmVhY3QuUmVmPEhUTUxCdXR0b25FbGVtZW50PjtcclxuICBjb2xvcj86IEJ1dHRvblN0eWxlc0NvbG9yO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBzaXplPzogXCJtZWRpdW1cIiB8IFwibGFyZ2VcIiB8IFwic21hbGxcIiB8IFwiZGVmYXVsdFwiO1xyXG4gIC8qKlxyXG4gICAgICAgICAqIFRoZSBjb250ZW50IG9mIHRoZSBidXR0b24uXHJcbiAgICAgICAgICovXHJcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBidXR0b24gd2lsbCBiZSBkaXNhYmxlZC5cclxuICAgICAgICAgICAqL1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIElmIGB0cnVlYCwgbm8gZWxldmF0aW9uIGlzIHVzZWQuXHJcbiAgICAgICAgICAgKi9cclxuICBkaXNhYmxlRWxldmF0aW9uPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIElmIGB0cnVlYCwgdGhlICBrZXlib2FyZCBmb2N1cyByaXBwbGUgd2lsbCBiZSBkaXNhYmxlZC5cclxuICAgICAgICAgICAqL1xyXG4gIGRpc2FibGVGb2N1c1JpcHBsZT86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBFbGVtZW50IHBsYWNlZCBhZnRlciB0aGUgY2hpbGRyZW4uXHJcbiAgICAgICAgICAgKi9cclxuICBlbmRJY29uPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYnV0dG9uIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxyXG4gICAgICAgICAgICovXHJcbiAgZnVsbFdpZHRoPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIFRoZSBVUkwgdG8gbGluayB0byB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cclxuICAgICAgICAgICAqIElmIGRlZmluZWQsIGFuIGBhYCBlbGVtZW50IHdpbGwgYmUgdXNlZCBhcyB0aGUgcm9vdCBub2RlLlxyXG4gICAgICAgICAgICovXHJcbiAgaHJlZj86IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgICAgICAgICAqIEVsZW1lbnQgcGxhY2VkIGJlZm9yZSB0aGUgY2hpbGRyZW4uXHJcbiAgICAgICAgICAgKi9cclxuICBzdGFydEljb24/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBUaGUgdmFyaWFudCB0byB1c2UuIERlZmF1bHRzIHRvIGNvbnRhaW5lZFxyXG4gICAgICAgICAgICovXHJcbiAgdmFyaWFudD86IFwidGV4dFwiIHwgXCJvdXRsaW5lZFwiIHwgXCJjb250YWluZWRcIjtcclxufVxyXG5cclxuY29uc3QgYm9yZGVyU3RhcnQgPSBcIjFweCBzb2xpZCBcIjtcclxuLy8gTGlrZSBodHRwczovL2dpdGh1Yi5jb20vYnJ1bm9iZXJ0b2xpbmkvc3R5bGVkLWJ5XHJcbmNvbnN0IHN0eWxlZEJ5Q29sb3IgPSAocHJvcGVydHk6IHN0cmluZywgbWFwcGluZzogQ29sb3JzTWFwcGluZykgPT5cclxuICAocHJvcHM6IFN0eWxlcykgPT4gbWFwcGluZ1twcm9wc1twcm9wZXJ0eV1dO1xyXG5jb25zdCBzdHlsZWRCeVNpemUgPSAocHJvcGVydHk6IHN0cmluZywgbWFwcGluZzogU2l6ZXNNYXBwaW5nKSA9PlxyXG4gIChwcm9wczogU3R5bGVzKSA9PiBtYXBwaW5nW3Byb3BzW3Byb3BlcnR5XV07XHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lKSA9PiAoe1xyXG4gIGNvbG9yOiB7XHJcbiAgICBjb2xvcjogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgZGVmYXVsdDogXCIjZmZmXCIsXHJcbiAgICAgIGJsdWU6IFwiI2ZmZlwiLFxyXG4gICAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0LFxyXG4gICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLmNvbnRyYXN0VGV4dCxcclxuICAgICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuY29udHJhc3RUZXh0LFxyXG4gICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcuY29udHJhc3RUZXh0LFxyXG4gICAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5jb250cmFzdFRleHQsXHJcbiAgICAgIHRleHQ6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5KSxcclxuICAgICAgdmFwZTogXCIjZmZmXCIsXHJcbiAgICAgIGV4cGVuc2U6IFwiI2ZmZlwiLFxyXG4gICAgICBzaG9wOiBcIiNmZmZcIixcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgY29sb3JPdXRsaW5lOiB7XHJcbiAgICBjb2xvcjogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgZGVmYXVsdDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgICAgYmx1ZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMyMTk2RjMgMzAlLCAjMjFDQkYzIDkwJSlcIixcclxuICAgICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgIHNlY29uZGFyeTogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLm1haW4sXHJcbiAgICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXHJcbiAgICAgIHdhcm5pbmc6IHRoZW1lLnBhbGV0dGUud2FybmluZy5tYWluLFxyXG4gICAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5tYWluLFxyXG4gICAgICB0ZXh0OiBcImluaGVyaXRcIixcclxuICAgICAgdmFwZTogXCIjZmYxZjAwXCIsXHJcbiAgICAgIGV4cGVuc2U6IFwiIzJlOWU3YVwiLFxyXG4gICAgICBzaG9wOiBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gICAgfSksXHJcbiAgICBbXCImOmhvdmVyIGEsICY6aG92ZXJcIl06IHtcclxuICAgICAgY29sb3I6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgICAgZGVmYXVsdDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgICAgICBibHVlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzIxOTZGMyAzMCUsICMyMUNCRjMgOTAlKVwiLFxyXG4gICAgICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgICAgIHNlY29uZGFyeTogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayxcclxuICAgICAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MuZGFyayxcclxuICAgICAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5kYXJrLFxyXG4gICAgICAgIHdhcm5pbmc6IHRoZW1lLnBhbGV0dGUud2FybmluZy5kYXJrLFxyXG4gICAgICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5LmRhcmssXHJcbiAgICAgICAgdGV4dDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgdmFwZTogXCIjZmYxZjAwXCIsXHJcbiAgICAgICAgZXhwZW5zZTogXCIjMmU5ZTdhXCIsXHJcbiAgICAgICAgc2hvcDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYmFja2dyb3VuZDoge1xyXG4gICAgYmFja2dyb3VuZDogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgZGVmYXVsdDogXCIjMDAwXCIsXHJcbiAgICAgIGJsdWU6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjE5NkYzIDMwJSwgIzIxQ0JGMyA5MCUpXCIsXHJcbiAgICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluLFxyXG4gICAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLFxyXG4gICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcubWFpbixcclxuICAgICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkubWFpbixcclxuICAgICAgdGV4dDogXCJpbmhlcml0XCIsXHJcbiAgICAgIHZhcGU6IFwiI2ZmMWYwMFwiLFxyXG4gICAgICBleHBlbnNlOiBcIiMyZTllN2FcIixcclxuICAgICAgc2hvcDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgIH0pLFxyXG4gICAgW1wiJjpob3ZlclwiXToge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICAgIGRlZmF1bHQ6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICAgICAgYmx1ZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigwIDEzNyAyNDcpIDMwJSwgcmdiKDEwIDEzOCAxNjgpIDkwJSlcIixcclxuICAgICAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmssXHJcbiAgICAgICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLmRhcmssXHJcbiAgICAgICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcclxuICAgICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcuZGFyayxcclxuICAgICAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5kYXJrLFxyXG4gICAgICAgIHRleHQ6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICAgIHZhcGU6IFwiI2UwMWIwMFwiLFxyXG4gICAgICAgIGV4cGVuc2U6IFwiIzI4OGI2YlwiLFxyXG4gICAgICAgIHNob3A6IFwiIzAwMFwiLFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBiYWNrZ3JvdW5kT3V0bGluZToge1xyXG4gICAgYm9yZGVyOiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICBkZWZhdWx0OiBib3JkZXJTdGFydCArIFwiIzAwMFwiLFxyXG4gICAgICBibHVlOiBib3JkZXJTdGFydCArIFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjE5NkYzIDMwJSwgIzIxQ0JGMyA5MCUpXCIsXHJcbiAgICAgIHByaW1hcnk6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgIHNlY29uZGFyeTogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgICBzdWNjZXNzOiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluLFxyXG4gICAgICBlcnJvcjogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXHJcbiAgICAgIHdhcm5pbmc6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS53YXJuaW5nLm1haW4sXHJcbiAgICAgIHRlcnRpYXJ5OiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUudGVydGlhcnkubWFpbixcclxuICAgICAgdGV4dDogYm9yZGVyU3RhcnQgKyBcImluaGVyaXRcIixcclxuICAgICAgdmFwZTogYm9yZGVyU3RhcnQgKyBcIiNmZjFmMDBcIixcclxuICAgICAgZXhwZW5zZTogYm9yZGVyU3RhcnQgKyBcIiMyZTllN2FcIixcclxuICAgICAgc2hvcDogYm9yZGVyU3RhcnQgKyBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gICAgfSksXHJcbiAgICBbXCImOmhvdmVyXCJdOiB7XHJcbiAgICAgIGJvcmRlcjogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgICBkZWZhdWx0OiBib3JkZXJTdGFydCArIFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICAgICAgYmx1ZTogYm9yZGVyU3RhcnQgK1xyXG4gICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigwIDEzNyAyNDcpIDMwJSwgcmdiKDEwIDEzOCAxNjgpIDkwJSlcIixcclxuICAgICAgICBwcmltYXJ5OiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgICAgIHNlY29uZGFyeTogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5kYXJrLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS5zdWNjZXNzLmRhcmssXHJcbiAgICAgICAgZXJyb3I6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS5lcnJvci5kYXJrLFxyXG4gICAgICAgIHdhcm5pbmc6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS53YXJuaW5nLmRhcmssXHJcbiAgICAgICAgdGVydGlhcnk6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5kYXJrLFxyXG4gICAgICAgIHRleHQ6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICAgICAgdmFwZTogYm9yZGVyU3RhcnQgKyBcIiNlMDFiMDBcIixcclxuICAgICAgICBleHBlbnNlOiBib3JkZXJTdGFydCArIFwiIzI4OGI2YlwiLFxyXG4gICAgICAgIHNob3A6IGJvcmRlclN0YXJ0ICsgXCIjMDAwXCIsXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJvb3Q6IHtcclxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxyXG4gICAgYm9yZGVyOiAwLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGhlaWdodDogc3R5bGVkQnlTaXplKFwic2l6ZVwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IDQwLFxyXG4gICAgICBsYXJnZTogNDgsXHJcbiAgICAgIHNtYWxsOiAyMCxcclxuICAgIH0pLFxyXG4gICAgcGFkZGluZzogc3R5bGVkQnlTaXplKFwic2l6ZVwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IHRoZW1lLnNwYWNpbmcoMS42LCAxLjQpLFxyXG4gICAgICBsYXJnZTogdGhlbWUuc3BhY2luZygyLCAxLjUpLFxyXG4gICAgICBzbWFsbDogdGhlbWUuc3BhY2luZygxLjEsIDAuNiksXHJcbiAgICB9KSxcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcblxyXG4gICAgYm94U2hhZG93OiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICBkZWZhdWx0OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgICBibHVlOiBcInJnYmEoMzMsIDIwMywgMjQzLCAwLjMpIDFweCAycHggMXB4IDFweFwiLFxyXG4gICAgICBwcmltYXJ5OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgICBzZWNvbmRhcnk6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIHN1Y2Nlc3M6IHRoZW1lLnNoYWRvd3NbNF0sXHJcbiAgICAgIGVycm9yOiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICB3YXJuaW5nOiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICB0ZXJ0aWFyeTogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgdGV4dDogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgdmFwZTogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIH0pLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IEJyYW5kQnV0dG9uUkFRID0gd2l0aFN0eWxlcyhzdHlsZXMpKChcclxuLy8gICB7IGNsYXNzZXMsIHZhcmlhbnQsIHNpemUsIGNoaWxkcmVuLCBjb2xvciwgcmVmLCAuLi5vdGhlciB9OiBQcm9wc1dpdGhDaGlsZHJlbjxcclxuLy8gICAgIEJ1dHRvblN0eWxlc1xyXG4vLyAgID4sXHJcbi8vICkgPT4ge1xyXG4vLyAgIGNvbnN0IGlzT3V0bGluZWQgPSB2YXJpYW50ID09PSBcIm91dGxpbmVkXCI7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxCdXR0b25cclxuLy8gICAgICAgY2xhc3NOYW1lPXtjbHN4KFtcclxuLy8gICAgICAgICB7IC4uLmNsYXNzZXMgfSxcclxuLy8gICAgICAgICBjbGFzc2VzLnJvb3QsXHJcbi8vICAgICAgICAgeyBbY2xhc3Nlcy5jb2xvck91dGxpbmVdOiBpc091dGxpbmVkIH0sXHJcbi8vICAgICAgICAgeyBbY2xhc3Nlcy5jb2xvcl06ICFpc091dGxpbmVkIH0sXHJcbi8vICAgICAgICAgeyBbY2xhc3Nlcy5iYWNrZ3JvdW5kT3V0bGluZV06IGlzT3V0bGluZWQgfSxcclxuLy8gICAgICAgICB7IFtjbGFzc2VzLmJhY2tncm91bmRdOiAhaXNPdXRsaW5lZCB9LFxyXG4vLyAgICAgICBdKX1cclxuLy8gICAgICAgdmFyaWFudD17dmFyaWFudH1cclxuLy8gICAgICAgc2l6ZT17c2l6ZSA9PT0gXCJkZWZhdWx0XCIgPyB1bmRlZmluZWQgOiBzaXplfVxyXG4vLyAgICAgICByZWY9e3JlZn1cclxuLy8gICAgICAgey4uLm90aGVyfVxyXG4vLyAgICAgPlxyXG4vLyAgICAgICB7Y2hpbGRyZW59XHJcbi8vICAgICA8L0J1dHRvbj5cclxuLy8gICApO1xyXG4vLyB9KTtcclxuLy8gQnJhbmRCdXR0b24uZGlzcGxheU5hbWUgPSBcIkJyYW5kQnV0dG9uXCI7XHJcblxyXG4vKipcclxuICogXHJcbiAqIE5FVyBXQVlcclxuICovXHJcblxyXG5jb25zdCBjb2xvciA9ICh0aGVtZTogVGhlbWUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZGVmYXVsdDogXCIjZmZmXCIsXHJcbiAgICBibHVlOiBcIiNmZmZcIixcclxuICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5jb250cmFzdFRleHQsXHJcbiAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5jb250cmFzdFRleHQsXHJcbiAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5jb250cmFzdFRleHQsXHJcbiAgICB3YXJuaW5nOiBcIiNmZmZcIixcclxuICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgIHRleHQ6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5KSxcclxuICAgIHZhcGU6IFwiI2ZmZlwiLFxyXG4gICAgZXhwZW5zZTogXCIjZmZmXCIsXHJcbiAgICBzaG9wOiBcIiNmZmZcIixcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgY29sb3JIb3ZlciA9ICh0aGVtZTogVGhlbWUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZGVmYXVsdDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgIGJsdWU6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjE5NkYzIDMwJSwgIzIxQ0JGMyA5MCUpXCIsXHJcbiAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgIHNlY29uZGFyeTogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayxcclxuICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5kYXJrLFxyXG4gICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcclxuICAgIHdhcm5pbmc6IHRoZW1lLnBhbGV0dGUud2FybmluZy5kYXJrLFxyXG4gICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkuZGFyayxcclxuICAgIHRleHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgdmFwZTogXCIjZmYxZjAwXCIsXHJcbiAgICBleHBlbnNlOiBcIiMyZTllN2FcIixcclxuICAgIHNob3A6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGJncyA9ICh0aGVtZTogVGhlbWUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZGVmYXVsdDogXCIjMDAwXCIsXHJcbiAgICBibHVlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzIxOTZGMyAzMCUsICMyMUNCRjMgOTAlKVwiLFxyXG4gICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MubWFpbixcclxuICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXHJcbiAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcubWFpbixcclxuICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5Lm1haW4sXHJcbiAgICB0ZXh0OiBcImluaGVyaXRcIixcclxuICAgIGV4cGVuc2U6IFwiIzJlOWU3YVwiLFxyXG4gICAgc2hvcDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgIHZhcGU6IFwiI2ZmMWYwMFwiLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBiZ3NIb3ZlciA9ICh0aGVtZTogVGhlbWUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZGVmYXVsdDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgIGJsdWU6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMCAxMzcgMjQ3KSAzMCUsIHJnYigxMCAxMzggMTY4KSA5MCUpXCIsXHJcbiAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgIHNlY29uZGFyeTogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayxcclxuICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5kYXJrLFxyXG4gICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcclxuICAgIHdhcm5pbmc6IHRoZW1lLnBhbGV0dGUud2FybmluZy5kYXJrLFxyXG4gICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkuZGFyayxcclxuICAgIHRleHQ6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgdmFwZTogXCIjZTAxYjAwXCIsXHJcbiAgICBleHBlbnNlOiBcIiMyODhiNmJcIixcclxuICAgIHNob3A6IFwiIzAwMFwiLFxyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRDb2xvckZvcihcclxuICBtYXRjaENvbG9yOiBDdXN0b21Db2xvciB8IFwicHJpbWFyeVwiIHwgXCJzZWNvbmRhcnlcIixcclxuICB0aGVtZTogVGhlbWUsXHJcbikge1xyXG4gIHJldHVybiB7XHJcbiAgICBjb2xvcjogY29sb3IodGhlbWUpW21hdGNoQ29sb3JdLFxyXG4gICAgYmFja2dyb3VuZDogYmdzKHRoZW1lKVttYXRjaENvbG9yXSxcclxuICAgIFtcIiYuTXVpQnV0dG9uLW91dGxpbmVkXCJdOiB7XHJcbiAgICAgIGNvbG9yOiBiZ3ModGhlbWUpW21hdGNoQ29sb3JdLFxyXG4gICAgICBib3JkZXI6IGAxcHggc29saWQgYCArIGJncyh0aGVtZSlbbWF0Y2hDb2xvcl0sXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgIH0sXHJcbiAgICBbXCImLk11aUJ1dHRvbi10ZXh0XCJdOiB7XHJcbiAgICAgIGNvbG9yOiBiZ3ModGhlbWUpW21hdGNoQ29sb3JdLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICB9LFxyXG4gICAgW1wiJjpob3ZlclwiXToge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBiZ3NIb3Zlcih0aGVtZSlbbWF0Y2hDb2xvcl0sXHJcbiAgICAgIFtcIiYuTXVpQnV0dG9uLW91dGxpbmVkLCYuTXVpQnV0dG9uLXRleHRcIl06IHtcclxuICAgICAgICBjb2xvcjogYmdzKHRoZW1lKVttYXRjaENvbG9yXSxcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IHVzZUJ1dHRvblN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgdmFwZTogZ2V0Q29sb3JGb3IoXCJ2YXBlXCIsIHRoZW1lKSxcclxuICAgIGRlZmF1bHQ6IGdldENvbG9yRm9yKFwiZGVmYXVsdFwiLCB0aGVtZSksXHJcbiAgICBibHVlOiBnZXRDb2xvckZvcihcImJsdWVcIiwgdGhlbWUpLFxyXG4gICAgcHJpbWFyeTogZ2V0Q29sb3JGb3IoXCJwcmltYXJ5XCIsIHRoZW1lKSxcclxuICAgIHNlY29uZGFyeTogZ2V0Q29sb3JGb3IoXCJzZWNvbmRhcnlcIiwgdGhlbWUpLFxyXG4gICAgc3VjY2VzczogZ2V0Q29sb3JGb3IoXCJzdWNjZXNzXCIsIHRoZW1lKSxcclxuICAgIGVycm9yOiBnZXRDb2xvckZvcihcImVycm9yXCIsIHRoZW1lKSxcclxuICAgIHdhcm5pbmc6IGdldENvbG9yRm9yKFwid2FybmluZ1wiLCB0aGVtZSksXHJcbiAgICB0ZXJ0aWFyeTogZ2V0Q29sb3JGb3IoXCJ0ZXJ0aWFyeVwiLCB0aGVtZSksXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgIGNvbG9yOiBjb2xvcih0aGVtZSkudGV4dCxcclxuICAgICAgYmFja2dyb3VuZDogYmdzKHRoZW1lKS50ZXh0LFxyXG4gICAgICBbXCImOmhvdmVyXCJdOiB7XHJcbiAgICAgICAgY29sb3I6IGNvbG9ySG92ZXIodGhlbWUpLnRleHQsXHJcbiAgICAgICAgYmFja2dyb3VuZDogYmdzSG92ZXIodGhlbWUpLnRleHQsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXhwZW5zZTogZ2V0Q29sb3JGb3IoXCJleHBlbnNlXCIsIHRoZW1lKSxcclxuICAgIHNob3A6IGdldENvbG9yRm9yKFwic2hvcFwiLCB0aGVtZSksXHJcbiAgfSlcclxuKTtcclxuXHJcbmZ1bmN0aW9uIHN3aXRjaENvbG9yVG9SZWd1bGFyKFxyXG4gIGNvbG9yPzogQnV0dG9uU3R5bGVzQ29sb3IsXHJcbikge1xyXG4gIHN3aXRjaCAoY29sb3IpIHtcclxuICAgIGNhc2UgXCJibHVlXCI6XHJcbiAgICBjYXNlIFwiZXJyb3JcIjpcclxuICAgIGNhc2UgXCJleHBlbnNlXCI6XHJcbiAgICBjYXNlIFwic2hvcFwiOlxyXG4gICAgY2FzZSBcInN1Y2Nlc3NcIjpcclxuICAgIGNhc2UgXCJ0ZXJ0aWFyeVwiOlxyXG4gICAgY2FzZSBcInRleHRcIjpcclxuICAgIGNhc2UgXCJ2YXBlXCI6XHJcbiAgICBjYXNlIFwid2FybmluZ1wiOlxyXG4gICAgY2FzZSBcImRlZmF1bHRcIjpcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGNhc2UgXCJpbmhlcml0XCI6XHJcbiAgICBjYXNlIFwicHJpbWFyeVwiOlxyXG4gICAgY2FzZSBcInNlY29uZGFyeVwiOlxyXG4gICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGFzc2VydE5ldmVyKGNvbG9yKTtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gc3dpdGNoQ29sb3JUb0N1c3RvbShcclxuICBjb2xvcj86IEJ1dHRvblN0eWxlc0NvbG9yLFxyXG4pIHtcclxuICBzd2l0Y2ggKGNvbG9yKSB7XHJcbiAgICBjYXNlIFwiaW5oZXJpdFwiOlxyXG4gICAgY2FzZSBcInByaW1hcnlcIjpcclxuICAgIGNhc2UgXCJzZWNvbmRhcnlcIjpcclxuICAgIGNhc2UgdW5kZWZpbmVkOlxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgY2FzZSBcImJsdWVcIjpcclxuICAgIGNhc2UgXCJlcnJvclwiOlxyXG4gICAgY2FzZSBcImV4cGVuc2VcIjpcclxuICAgIGNhc2UgXCJzaG9wXCI6XHJcbiAgICBjYXNlIFwic3VjY2Vzc1wiOlxyXG4gICAgY2FzZSBcInRlcnRpYXJ5XCI6XHJcbiAgICBjYXNlIFwidGV4dFwiOlxyXG4gICAgY2FzZSBcInZhcGVcIjpcclxuICAgIGNhc2UgXCJ3YXJuaW5nXCI6XHJcbiAgICBjYXNlIFwiZGVmYXVsdFwiOlxyXG4gICAgICByZXR1cm4gY29sb3I7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYXNzZXJ0TmV2ZXIoY29sb3IpO1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEJyYW5kQnV0dG9uID0gKFxyXG4gIHsgY2hpbGRyZW4sIHZhcmlhbnQgPSBcImNvbnRhaW5lZFwiLCBjbGFzc05hbWUsIGNvbG9yLCBzaXplLCAuLi5vdGhlciB9OlxyXG4gICAgUHJvcHNXaXRoQ2hpbGRyZW48XHJcbiAgICAgIEJ1dHRvblN0eWxlc1xyXG4gICAgPixcclxuKSA9PiB7XHJcbiAgY29uc3QgZGVmYXVsdENvbG9yID0gc3dpdGNoQ29sb3JUb1JlZ3VsYXIoY29sb3IpO1xyXG4gIGNvbnN0IGN1c3RvbUNvbG9yID0gc3dpdGNoQ29sb3JUb0N1c3RvbShjb2xvcik7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZUJ1dHRvblN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gPEJ1dHRvblxyXG4gICAgY29sb3I9e2RlZmF1bHRDb2xvcn1cclxuICAgIHZhcmlhbnQ9e3ZhcmlhbnR9XHJcbiAgICBzaXplPXtzaXplID09PSBcImRlZmF1bHRcIiA/IHVuZGVmaW5lZCA6IHNpemV9XHJcbiAgICB7Li4ub3RoZXJ9XHJcbiAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgIFt7IFtjbGFzc2VzW2N1c3RvbUNvbG9yIHx8IFwiZGVmYXVsdFwiXV06IGN1c3RvbUNvbG9yIH1dLFxyXG4gICAgICBjbGFzc05hbWUsXHJcbiAgICApfVxyXG4gID5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L0J1dHRvbj47XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=