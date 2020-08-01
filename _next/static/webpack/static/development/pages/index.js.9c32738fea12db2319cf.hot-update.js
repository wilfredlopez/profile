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
    tertiary: theme.palette.tertiary.light,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0JyYW5kQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJib3JkZXJTdGFydCIsInN0eWxlZEJ5Q29sb3IiLCJwcm9wZXJ0eSIsIm1hcHBpbmciLCJwcm9wcyIsInN0eWxlZEJ5U2l6ZSIsInN0eWxlcyIsInRoZW1lIiwiY29sb3IiLCJkZWZhdWx0IiwiYmx1ZSIsInByaW1hcnkiLCJwYWxldHRlIiwiY29udHJhc3RUZXh0Iiwic2Vjb25kYXJ5Iiwic3VjY2VzcyIsImVycm9yIiwid2FybmluZyIsInRlcnRpYXJ5IiwidGV4dCIsImdldENvbnRyYXN0VGV4dCIsInZhcGUiLCJleHBlbnNlIiwic2hvcCIsImNvbG9yT3V0bGluZSIsIm1haW4iLCJkYXJrIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRPdXRsaW5lIiwiYm9yZGVyIiwicm9vdCIsInRleHREZWNvcmF0aW9uIiwiYm9yZGVyUmFkaXVzIiwic2hhcGUiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwibGFyZ2UiLCJzbWFsbCIsInBhZGRpbmciLCJzcGFjaW5nIiwiY3Vyc29yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImNvbG9ySG92ZXIiLCJiZ3MiLCJiZ3NIb3ZlciIsImxpZ2h0IiwiZ2V0Q29sb3JGb3IiLCJtYXRjaENvbG9yIiwidXNlQnV0dG9uU3R5bGVzIiwibWFrZVN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsInN3aXRjaENvbG9yVG9SZWd1bGFyIiwidW5kZWZpbmVkIiwiYXNzZXJ0TmV2ZXIiLCJzd2l0Y2hDb2xvclRvQ3VzdG9tIiwiQnJhbmRCdXR0b24iLCJjaGlsZHJlbiIsInZhcmlhbnQiLCJjbGFzc05hbWUiLCJzaXplIiwib3RoZXIiLCJkZWZhdWx0Q29sb3IiLCJjdXN0b21Db2xvciIsImNsYXNzZXMiLCJjbHN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBcUlBLE1BQU1B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VjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVUpGLFFBVkksQ0FBUDtBQVlELENBdEJNOztHQUFNRCxXO1VBUUtQLGU7OztLQVJMTyxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy45YzMyNzM4ZmVhMTJkYjIzMTljZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlU3R5bGVzLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgVGhlbWUsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgYXNzZXJ0TmV2ZXIsIGFzc2VydCB9IGZyb20gXCJAd2lsZnJlZGxvcGV6L3JlYWN0LXV0aWxzXCI7XHJcblxyXG5pbnRlcmZhY2UgU3R5bGVzIHtcclxuICBjb2xvcjogc3RyaW5nO1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29sb3JzTWFwcGluZyB7XHJcbiAgZGVmYXVsdDogc3RyaW5nO1xyXG4gIGJsdWU6IHN0cmluZztcclxuICB2YXBlOiBzdHJpbmc7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU2l6ZXNNYXBwaW5nIHtcclxuICBkZWZhdWx0OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgc21hbGw6IHN0cmluZyB8IG51bWJlcjtcclxuICBsYXJnZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5leHBvcnQgdHlwZSBQYWxldHRlQ29sb3JLZXlzID1cclxuICB8IFwicHJpbWFyeVwiXHJcbiAgfCBcInNlY29uZGFyeVwiXHJcbiAgfCBcImVycm9yXCJcclxuICB8IFwid2FybmluZ1wiXHJcbiAgfCBcInRlcnRpYXJ5XCJcclxuICB8IFwic3VjY2Vzc1wiO1xyXG5cclxudHlwZSBSZWd1bGFyQnV0dG9uQ29sb3IgPSBcImluaGVyaXRcIiB8IFwicHJpbWFyeVwiIHwgXCJzZWNvbmRhcnlcIjtcclxuXHJcbnR5cGUgQ3VzdG9tQ29sb3IgPVxyXG4gIHwgXCJ2YXBlXCJcclxuICB8IFwiZXhwZW5zZVwiXHJcbiAgfCBcInNob3BcIlxyXG4gIHwgXCJ0ZXh0XCJcclxuICB8IFwiYmx1ZVwiXHJcbiAgfCBcImVycm9yXCJcclxuICB8IFwid2FybmluZ1wiXHJcbiAgfCBcInRlcnRpYXJ5XCJcclxuICB8IFwic3VjY2Vzc1wiXHJcbiAgfCBcImRlZmF1bHRcIjtcclxuXHJcbnR5cGUgQnV0dG9uU3R5bGVzQ29sb3IgPSBDdXN0b21Db2xvciB8IFJlZ3VsYXJCdXR0b25Db2xvcjtcclxuXHJcbi8vIGludGVyZmFjZSBCdXR0b25TdHlsZXMgZXh0ZW5kcyBXaXRoU3R5bGVzPHR5cGVvZiBzdHlsZXM+IHtcclxuLy8gICByZWY/OiBhbnk7XHJcbi8vICAgY29sb3I/OiBCdXR0b25TdHlsZXNDb2xvcjtcclxuLy8gICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbi8vICAgc2l6ZT86IFwibWVkaXVtXCIgfCBcImxhcmdlXCIgfCBcInNtYWxsXCIgfCBcImRlZmF1bHRcIjtcclxuLy8gICAvKipcclxuLy8gICAgICAgICAgKiBUaGUgY29udGVudCBvZiB0aGUgYnV0dG9uLlxyXG4vLyAgICAgICAgICAqL1xyXG4vLyAgIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4vLyAgIC8qKlxyXG4vLyAgICAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYnV0dG9uIHdpbGwgYmUgZGlzYWJsZWQuXHJcbi8vICAgICAgICAgICAgKi9cclxuLy8gICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbi8vICAgLyoqXHJcbi8vICAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIG5vIGVsZXZhdGlvbiBpcyB1c2VkLlxyXG4vLyAgICAgICAgICAgICovXHJcbi8vICAgZGlzYWJsZUVsZXZhdGlvbj86IGJvb2xlYW47XHJcbi8vICAgLyoqXHJcbi8vICAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSAga2V5Ym9hcmQgZm9jdXMgcmlwcGxlIHdpbGwgYmUgZGlzYWJsZWQuXHJcbi8vICAgICAgICAgICAgKi9cclxuLy8gICBkaXNhYmxlRm9jdXNSaXBwbGU/OiBib29sZWFuO1xyXG4vLyAgIC8qKlxyXG4vLyAgICAgICAgICAgICogRWxlbWVudCBwbGFjZWQgYWZ0ZXIgdGhlIGNoaWxkcmVuLlxyXG4vLyAgICAgICAgICAgICovXHJcbi8vICAgZW5kSWNvbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuLy8gICAvKipcclxuLy8gICAgICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGJ1dHRvbiB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cclxuLy8gICAgICAgICAgICAqL1xyXG4vLyAgIGZ1bGxXaWR0aD86IGJvb2xlYW47XHJcbi8vICAgLyoqXHJcbi8vICAgICAgICAgICAgKiBUaGUgVVJMIHRvIGxpbmsgdG8gd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXHJcbi8vICAgICAgICAgICAgKiBJZiBkZWZpbmVkLCBhbiBgYWAgZWxlbWVudCB3aWxsIGJlIHVzZWQgYXMgdGhlIHJvb3Qgbm9kZS5cclxuLy8gICAgICAgICAgICAqL1xyXG4vLyAgIGhyZWY/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbi8vICAgLyoqXHJcbi8vICAgICAgICAgICAgKiBFbGVtZW50IHBsYWNlZCBiZWZvcmUgdGhlIGNoaWxkcmVuLlxyXG4vLyAgICAgICAgICAgICovXHJcbi8vICAgc3RhcnRJY29uPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4vLyAgIC8qKlxyXG4vLyAgICAgICAgICAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxyXG4vLyAgICAgICAgICAgICovXHJcbi8vICAgdmFyaWFudD86IFwidGV4dFwiIHwgXCJvdXRsaW5lZFwiIHwgXCJjb250YWluZWRcIjtcclxuLy8gfVxyXG5cclxuaW50ZXJmYWNlIEJ1dHRvblN0eWxlcyB7XHJcbiAgcmVmPzogUmVhY3QuUmVmPEhUTUxCdXR0b25FbGVtZW50PjtcclxuICBjb2xvcj86IEJ1dHRvblN0eWxlc0NvbG9yO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBzaXplPzogXCJtZWRpdW1cIiB8IFwibGFyZ2VcIiB8IFwic21hbGxcIiB8IFwiZGVmYXVsdFwiO1xyXG4gIC8qKlxyXG4gICAgICAgICAqIFRoZSBjb250ZW50IG9mIHRoZSBidXR0b24uXHJcbiAgICAgICAgICovXHJcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBidXR0b24gd2lsbCBiZSBkaXNhYmxlZC5cclxuICAgICAgICAgICAqL1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIElmIGB0cnVlYCwgbm8gZWxldmF0aW9uIGlzIHVzZWQuXHJcbiAgICAgICAgICAgKi9cclxuICBkaXNhYmxlRWxldmF0aW9uPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIElmIGB0cnVlYCwgdGhlICBrZXlib2FyZCBmb2N1cyByaXBwbGUgd2lsbCBiZSBkaXNhYmxlZC5cclxuICAgICAgICAgICAqL1xyXG4gIGRpc2FibGVGb2N1c1JpcHBsZT86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBFbGVtZW50IHBsYWNlZCBhZnRlciB0aGUgY2hpbGRyZW4uXHJcbiAgICAgICAgICAgKi9cclxuICBlbmRJY29uPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYnV0dG9uIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxyXG4gICAgICAgICAgICovXHJcbiAgZnVsbFdpZHRoPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIFRoZSBVUkwgdG8gbGluayB0byB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cclxuICAgICAgICAgICAqIElmIGRlZmluZWQsIGFuIGBhYCBlbGVtZW50IHdpbGwgYmUgdXNlZCBhcyB0aGUgcm9vdCBub2RlLlxyXG4gICAgICAgICAgICovXHJcbiAgaHJlZj86IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgICAgICAgICAqIEVsZW1lbnQgcGxhY2VkIGJlZm9yZSB0aGUgY2hpbGRyZW4uXHJcbiAgICAgICAgICAgKi9cclxuICBzdGFydEljb24/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBUaGUgdmFyaWFudCB0byB1c2UuIERlZmF1bHRzIHRvIGNvbnRhaW5lZFxyXG4gICAgICAgICAgICovXHJcbiAgdmFyaWFudD86IFwidGV4dFwiIHwgXCJvdXRsaW5lZFwiIHwgXCJjb250YWluZWRcIjtcclxufVxyXG5cclxuY29uc3QgYm9yZGVyU3RhcnQgPSBcIjFweCBzb2xpZCBcIjtcclxuLy8gTGlrZSBodHRwczovL2dpdGh1Yi5jb20vYnJ1bm9iZXJ0b2xpbmkvc3R5bGVkLWJ5XHJcbmNvbnN0IHN0eWxlZEJ5Q29sb3IgPSAocHJvcGVydHk6IHN0cmluZywgbWFwcGluZzogQ29sb3JzTWFwcGluZykgPT5cclxuICAocHJvcHM6IFN0eWxlcykgPT4gbWFwcGluZ1twcm9wc1twcm9wZXJ0eV1dO1xyXG5jb25zdCBzdHlsZWRCeVNpemUgPSAocHJvcGVydHk6IHN0cmluZywgbWFwcGluZzogU2l6ZXNNYXBwaW5nKSA9PlxyXG4gIChwcm9wczogU3R5bGVzKSA9PiBtYXBwaW5nW3Byb3BzW3Byb3BlcnR5XV07XHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lKSA9PiAoe1xyXG4gIGNvbG9yOiB7XHJcbiAgICBjb2xvcjogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgZGVmYXVsdDogXCIjZmZmXCIsXHJcbiAgICAgIGJsdWU6IFwiI2ZmZlwiLFxyXG4gICAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0LFxyXG4gICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLmNvbnRyYXN0VGV4dCxcclxuICAgICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuY29udHJhc3RUZXh0LFxyXG4gICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcuY29udHJhc3RUZXh0LFxyXG4gICAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5jb250cmFzdFRleHQsXHJcbiAgICAgIHRleHQ6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5KSxcclxuICAgICAgdmFwZTogXCIjZmZmXCIsXHJcbiAgICAgIGV4cGVuc2U6IFwiI2ZmZlwiLFxyXG4gICAgICBzaG9wOiBcIiNmZmZcIixcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgY29sb3JPdXRsaW5lOiB7XHJcbiAgICBjb2xvcjogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgZGVmYXVsdDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgICAgYmx1ZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMyMTk2RjMgMzAlLCAjMjFDQkYzIDkwJSlcIixcclxuICAgICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgIHNlY29uZGFyeTogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLm1haW4sXHJcbiAgICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXHJcbiAgICAgIHdhcm5pbmc6IHRoZW1lLnBhbGV0dGUud2FybmluZy5tYWluLFxyXG4gICAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5tYWluLFxyXG4gICAgICB0ZXh0OiBcImluaGVyaXRcIixcclxuICAgICAgdmFwZTogXCIjZmYxZjAwXCIsXHJcbiAgICAgIGV4cGVuc2U6IFwiIzJlOWU3YVwiLFxyXG4gICAgICBzaG9wOiBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gICAgfSksXHJcbiAgICBbXCImOmhvdmVyIGEsICY6aG92ZXJcIl06IHtcclxuICAgICAgY29sb3I6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgICAgZGVmYXVsdDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgICAgICBibHVlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzIxOTZGMyAzMCUsICMyMUNCRjMgOTAlKVwiLFxyXG4gICAgICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgICAgIHNlY29uZGFyeTogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayxcclxuICAgICAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MuZGFyayxcclxuICAgICAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5kYXJrLFxyXG4gICAgICAgIHdhcm5pbmc6IHRoZW1lLnBhbGV0dGUud2FybmluZy5kYXJrLFxyXG4gICAgICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5LmRhcmssXHJcbiAgICAgICAgdGV4dDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgdmFwZTogXCIjZmYxZjAwXCIsXHJcbiAgICAgICAgZXhwZW5zZTogXCIjMmU5ZTdhXCIsXHJcbiAgICAgICAgc2hvcDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYmFja2dyb3VuZDoge1xyXG4gICAgYmFja2dyb3VuZDogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgZGVmYXVsdDogXCIjMDAwXCIsXHJcbiAgICAgIGJsdWU6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjE5NkYzIDMwJSwgIzIxQ0JGMyA5MCUpXCIsXHJcbiAgICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluLFxyXG4gICAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLFxyXG4gICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcubWFpbixcclxuICAgICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkubWFpbixcclxuICAgICAgdGV4dDogXCJpbmhlcml0XCIsXHJcbiAgICAgIHZhcGU6IFwiI2ZmMWYwMFwiLFxyXG4gICAgICBleHBlbnNlOiBcIiMyZTllN2FcIixcclxuICAgICAgc2hvcDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgIH0pLFxyXG4gICAgW1wiJjpob3ZlclwiXToge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICAgIGRlZmF1bHQ6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICAgICAgYmx1ZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigwIDEzNyAyNDcpIDMwJSwgcmdiKDEwIDEzOCAxNjgpIDkwJSlcIixcclxuICAgICAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmssXHJcbiAgICAgICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLmRhcmssXHJcbiAgICAgICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcclxuICAgICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcuZGFyayxcclxuICAgICAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5kYXJrLFxyXG4gICAgICAgIHRleHQ6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgICAgIHZhcGU6IFwiI2UwMWIwMFwiLFxyXG4gICAgICAgIGV4cGVuc2U6IFwiIzI4OGI2YlwiLFxyXG4gICAgICAgIHNob3A6IFwiIzAwMFwiLFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBiYWNrZ3JvdW5kT3V0bGluZToge1xyXG4gICAgYm9yZGVyOiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICBkZWZhdWx0OiBib3JkZXJTdGFydCArIFwiIzAwMFwiLFxyXG4gICAgICBibHVlOiBib3JkZXJTdGFydCArIFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjE5NkYzIDMwJSwgIzIxQ0JGMyA5MCUpXCIsXHJcbiAgICAgIHByaW1hcnk6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgIHNlY29uZGFyeTogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgICBzdWNjZXNzOiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluLFxyXG4gICAgICBlcnJvcjogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXHJcbiAgICAgIHdhcm5pbmc6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS53YXJuaW5nLm1haW4sXHJcbiAgICAgIHRlcnRpYXJ5OiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUudGVydGlhcnkubWFpbixcclxuICAgICAgdGV4dDogYm9yZGVyU3RhcnQgKyBcImluaGVyaXRcIixcclxuICAgICAgdmFwZTogYm9yZGVyU3RhcnQgKyBcIiNmZjFmMDBcIixcclxuICAgICAgZXhwZW5zZTogYm9yZGVyU3RhcnQgKyBcIiMyZTllN2FcIixcclxuICAgICAgc2hvcDogYm9yZGVyU3RhcnQgKyBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gICAgfSksXHJcbiAgICBbXCImOmhvdmVyXCJdOiB7XHJcbiAgICAgIGJvcmRlcjogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgICBkZWZhdWx0OiBib3JkZXJTdGFydCArIFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICAgICAgYmx1ZTogYm9yZGVyU3RhcnQgK1xyXG4gICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigwIDEzNyAyNDcpIDMwJSwgcmdiKDEwIDEzOCAxNjgpIDkwJSlcIixcclxuICAgICAgICBwcmltYXJ5OiBib3JkZXJTdGFydCArIHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgICAgIHNlY29uZGFyeTogYm9yZGVyU3RhcnQgKyB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5kYXJrLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS5zdWNjZXNzLmRhcmssXHJcbiAgICAgICAgZXJyb3I6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS5lcnJvci5kYXJrLFxyXG4gICAgICAgIHdhcm5pbmc6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS53YXJuaW5nLmRhcmssXHJcbiAgICAgICAgdGVydGlhcnk6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5kYXJrLFxyXG4gICAgICAgIHRleHQ6IGJvcmRlclN0YXJ0ICsgdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICAgICAgdmFwZTogYm9yZGVyU3RhcnQgKyBcIiNlMDFiMDBcIixcclxuICAgICAgICBleHBlbnNlOiBib3JkZXJTdGFydCArIFwiIzI4OGI2YlwiLFxyXG4gICAgICAgIHNob3A6IGJvcmRlclN0YXJ0ICsgXCIjMDAwXCIsXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJvb3Q6IHtcclxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxyXG4gICAgYm9yZGVyOiAwLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGhlaWdodDogc3R5bGVkQnlTaXplKFwic2l6ZVwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IDQwLFxyXG4gICAgICBsYXJnZTogNDgsXHJcbiAgICAgIHNtYWxsOiAyMCxcclxuICAgIH0pLFxyXG4gICAgcGFkZGluZzogc3R5bGVkQnlTaXplKFwic2l6ZVwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IHRoZW1lLnNwYWNpbmcoMS42LCAxLjQpLFxyXG4gICAgICBsYXJnZTogdGhlbWUuc3BhY2luZygyLCAxLjUpLFxyXG4gICAgICBzbWFsbDogdGhlbWUuc3BhY2luZygxLjEsIDAuNiksXHJcbiAgICB9KSxcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcblxyXG4gICAgYm94U2hhZG93OiBzdHlsZWRCeUNvbG9yKFwiY29sb3JcIiwge1xyXG4gICAgICBkZWZhdWx0OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgICBibHVlOiBcInJnYmEoMzMsIDIwMywgMjQzLCAwLjMpIDFweCAycHggMXB4IDFweFwiLFxyXG4gICAgICBwcmltYXJ5OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgICBzZWNvbmRhcnk6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIHN1Y2Nlc3M6IHRoZW1lLnNoYWRvd3NbNF0sXHJcbiAgICAgIGVycm9yOiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICB3YXJuaW5nOiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICB0ZXJ0aWFyeTogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgdGV4dDogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgdmFwZTogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIH0pLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IEJyYW5kQnV0dG9uUkFRID0gd2l0aFN0eWxlcyhzdHlsZXMpKChcclxuLy8gICB7IGNsYXNzZXMsIHZhcmlhbnQsIHNpemUsIGNoaWxkcmVuLCBjb2xvciwgcmVmLCAuLi5vdGhlciB9OiBQcm9wc1dpdGhDaGlsZHJlbjxcclxuLy8gICAgIEJ1dHRvblN0eWxlc1xyXG4vLyAgID4sXHJcbi8vICkgPT4ge1xyXG4vLyAgIGNvbnN0IGlzT3V0bGluZWQgPSB2YXJpYW50ID09PSBcIm91dGxpbmVkXCI7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxCdXR0b25cclxuLy8gICAgICAgY2xhc3NOYW1lPXtjbHN4KFtcclxuLy8gICAgICAgICB7IC4uLmNsYXNzZXMgfSxcclxuLy8gICAgICAgICBjbGFzc2VzLnJvb3QsXHJcbi8vICAgICAgICAgeyBbY2xhc3Nlcy5jb2xvck91dGxpbmVdOiBpc091dGxpbmVkIH0sXHJcbi8vICAgICAgICAgeyBbY2xhc3Nlcy5jb2xvcl06ICFpc091dGxpbmVkIH0sXHJcbi8vICAgICAgICAgeyBbY2xhc3Nlcy5iYWNrZ3JvdW5kT3V0bGluZV06IGlzT3V0bGluZWQgfSxcclxuLy8gICAgICAgICB7IFtjbGFzc2VzLmJhY2tncm91bmRdOiAhaXNPdXRsaW5lZCB9LFxyXG4vLyAgICAgICBdKX1cclxuLy8gICAgICAgdmFyaWFudD17dmFyaWFudH1cclxuLy8gICAgICAgc2l6ZT17c2l6ZSA9PT0gXCJkZWZhdWx0XCIgPyB1bmRlZmluZWQgOiBzaXplfVxyXG4vLyAgICAgICByZWY9e3JlZn1cclxuLy8gICAgICAgey4uLm90aGVyfVxyXG4vLyAgICAgPlxyXG4vLyAgICAgICB7Y2hpbGRyZW59XHJcbi8vICAgICA8L0J1dHRvbj5cclxuLy8gICApO1xyXG4vLyB9KTtcclxuLy8gQnJhbmRCdXR0b24uZGlzcGxheU5hbWUgPSBcIkJyYW5kQnV0dG9uXCI7XHJcblxyXG4vKipcclxuICogXHJcbiAqIE5FVyBXQVlcclxuICovXHJcblxyXG5jb25zdCBjb2xvciA9ICh0aGVtZTogVGhlbWUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZGVmYXVsdDogXCIjZmZmXCIsXHJcbiAgICBibHVlOiBcIiNmZmZcIixcclxuICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5jb250cmFzdFRleHQsXHJcbiAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5jb250cmFzdFRleHQsXHJcbiAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5jb250cmFzdFRleHQsXHJcbiAgICB3YXJuaW5nOiBcIiNmZmZcIixcclxuICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgIHRleHQ6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5KSxcclxuICAgIHZhcGU6IFwiI2ZmZlwiLFxyXG4gICAgZXhwZW5zZTogXCIjZmZmXCIsXHJcbiAgICBzaG9wOiBcIiNmZmZcIixcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgY29sb3JIb3ZlciA9ICh0aGVtZTogVGhlbWUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZGVmYXVsdDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgIGJsdWU6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjE5NkYzIDMwJSwgIzIxQ0JGMyA5MCUpXCIsXHJcbiAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgIHNlY29uZGFyeTogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayxcclxuICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5kYXJrLFxyXG4gICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcclxuICAgIHdhcm5pbmc6IHRoZW1lLnBhbGV0dGUud2FybmluZy5kYXJrLFxyXG4gICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkuZGFyayxcclxuICAgIHRleHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgdmFwZTogXCIjZmYxZjAwXCIsXHJcbiAgICBleHBlbnNlOiBcIiMyZTllN2FcIixcclxuICAgIHNob3A6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGJncyA9ICh0aGVtZTogVGhlbWUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZGVmYXVsdDogXCIjMDAwXCIsXHJcbiAgICBibHVlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzIxOTZGMyAzMCUsICMyMUNCRjMgOTAlKVwiLFxyXG4gICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MubWFpbixcclxuICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXHJcbiAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcubWFpbixcclxuICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5Lm1haW4sXHJcbiAgICB0ZXh0OiBcImluaGVyaXRcIixcclxuICAgIGV4cGVuc2U6IFwiIzJlOWU3YVwiLFxyXG4gICAgc2hvcDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgIHZhcGU6IFwiI2ZmMWYwMFwiLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBiZ3NIb3ZlciA9ICh0aGVtZTogVGhlbWUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZGVmYXVsdDogXCJyZ2IoMjAsIDIwLCAyMClcIixcclxuICAgIGJsdWU6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMCAxMzcgMjQ3KSAzMCUsIHJnYigxMCAxMzggMTY4KSA5MCUpXCIsXHJcbiAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcclxuICAgIHNlY29uZGFyeTogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayxcclxuICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5kYXJrLFxyXG4gICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFyayxcclxuICAgIHdhcm5pbmc6IHRoZW1lLnBhbGV0dGUud2FybmluZy5kYXJrLFxyXG4gICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkubGlnaHQsXHJcbiAgICB0ZXh0OiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgIHZhcGU6IFwiI2UwMWIwMFwiLFxyXG4gICAgZXhwZW5zZTogXCIjMjg4YjZiXCIsXHJcbiAgICBzaG9wOiBcIiMwMDBcIixcclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0Q29sb3JGb3IoXHJcbiAgbWF0Y2hDb2xvcjogQ3VzdG9tQ29sb3IgfCBcInByaW1hcnlcIiB8IFwic2Vjb25kYXJ5XCIsXHJcbiAgdGhlbWU6IFRoZW1lLFxyXG4pIHtcclxuICByZXR1cm4ge1xyXG4gICAgY29sb3I6IGNvbG9yKHRoZW1lKVttYXRjaENvbG9yXSxcclxuICAgIGJhY2tncm91bmQ6IGJncyh0aGVtZSlbbWF0Y2hDb2xvcl0sXHJcbiAgICBbXCImLk11aUJ1dHRvbi1vdXRsaW5lZFwiXToge1xyXG4gICAgICBjb2xvcjogYmdzKHRoZW1lKVttYXRjaENvbG9yXSxcclxuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkIGAgKyBiZ3ModGhlbWUpW21hdGNoQ29sb3JdLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICB9LFxyXG4gICAgW1wiJi5NdWlCdXR0b24tdGV4dFwiXToge1xyXG4gICAgICBjb2xvcjogYmdzKHRoZW1lKVttYXRjaENvbG9yXSxcclxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgfSxcclxuICAgIFtcIiY6aG92ZXJcIl06IHtcclxuICAgICAgYmFja2dyb3VuZDogYmdzSG92ZXIodGhlbWUpW21hdGNoQ29sb3JdLFxyXG4gICAgICBbXCImLk11aUJ1dHRvbi1vdXRsaW5lZCwmLk11aUJ1dHRvbi10ZXh0XCJdOiB7XHJcbiAgICAgICAgY29sb3I6IGNvbG9ySG92ZXIodGhlbWUpW21hdGNoQ29sb3JdLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgdXNlQnV0dG9uU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICB2YXBlOiBnZXRDb2xvckZvcihcInZhcGVcIiwgdGhlbWUpLFxyXG4gICAgZGVmYXVsdDogZ2V0Q29sb3JGb3IoXCJkZWZhdWx0XCIsIHRoZW1lKSxcclxuICAgIGJsdWU6IGdldENvbG9yRm9yKFwiYmx1ZVwiLCB0aGVtZSksXHJcbiAgICBwcmltYXJ5OiBnZXRDb2xvckZvcihcInByaW1hcnlcIiwgdGhlbWUpLFxyXG4gICAgc2Vjb25kYXJ5OiBnZXRDb2xvckZvcihcInNlY29uZGFyeVwiLCB0aGVtZSksXHJcbiAgICBzdWNjZXNzOiBnZXRDb2xvckZvcihcInN1Y2Nlc3NcIiwgdGhlbWUpLFxyXG4gICAgZXJyb3I6IGdldENvbG9yRm9yKFwiZXJyb3JcIiwgdGhlbWUpLFxyXG4gICAgd2FybmluZzogZ2V0Q29sb3JGb3IoXCJ3YXJuaW5nXCIsIHRoZW1lKSxcclxuICAgIHRlcnRpYXJ5OiBnZXRDb2xvckZvcihcInRlcnRpYXJ5XCIsIHRoZW1lKSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgY29sb3I6IGNvbG9yKHRoZW1lKS50ZXh0LFxyXG4gICAgICBiYWNrZ3JvdW5kOiBiZ3ModGhlbWUpLnRleHQsXHJcbiAgICAgIFtcIiY6aG92ZXJcIl06IHtcclxuICAgICAgICBjb2xvcjogY29sb3JIb3Zlcih0aGVtZSkudGV4dCxcclxuICAgICAgICBiYWNrZ3JvdW5kOiBiZ3NIb3Zlcih0aGVtZSkudGV4dCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBleHBlbnNlOiBnZXRDb2xvckZvcihcImV4cGVuc2VcIiwgdGhlbWUpLFxyXG4gICAgc2hvcDogZ2V0Q29sb3JGb3IoXCJzaG9wXCIsIHRoZW1lKSxcclxuICB9KVxyXG4pO1xyXG5cclxuZnVuY3Rpb24gc3dpdGNoQ29sb3JUb1JlZ3VsYXIoXHJcbiAgY29sb3I/OiBCdXR0b25TdHlsZXNDb2xvcixcclxuKSB7XHJcbiAgc3dpdGNoIChjb2xvcikge1xyXG4gICAgY2FzZSBcImJsdWVcIjpcclxuICAgIGNhc2UgXCJlcnJvclwiOlxyXG4gICAgY2FzZSBcImV4cGVuc2VcIjpcclxuICAgIGNhc2UgXCJzaG9wXCI6XHJcbiAgICBjYXNlIFwic3VjY2Vzc1wiOlxyXG4gICAgY2FzZSBcInRlcnRpYXJ5XCI6XHJcbiAgICBjYXNlIFwidGV4dFwiOlxyXG4gICAgY2FzZSBcInZhcGVcIjpcclxuICAgIGNhc2UgXCJ3YXJuaW5nXCI6XHJcbiAgICBjYXNlIFwiZGVmYXVsdFwiOlxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgY2FzZSBcImluaGVyaXRcIjpcclxuICAgIGNhc2UgXCJwcmltYXJ5XCI6XHJcbiAgICBjYXNlIFwic2Vjb25kYXJ5XCI6XHJcbiAgICBjYXNlIHVuZGVmaW5lZDpcclxuICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYXNzZXJ0TmV2ZXIoY29sb3IpO1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBzd2l0Y2hDb2xvclRvQ3VzdG9tKFxyXG4gIGNvbG9yPzogQnV0dG9uU3R5bGVzQ29sb3IsXHJcbikge1xyXG4gIHN3aXRjaCAoY29sb3IpIHtcclxuICAgIGNhc2UgXCJpbmhlcml0XCI6XHJcbiAgICBjYXNlIFwicHJpbWFyeVwiOlxyXG4gICAgY2FzZSBcInNlY29uZGFyeVwiOlxyXG4gICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICBjYXNlIFwiYmx1ZVwiOlxyXG4gICAgY2FzZSBcImVycm9yXCI6XHJcbiAgICBjYXNlIFwiZXhwZW5zZVwiOlxyXG4gICAgY2FzZSBcInNob3BcIjpcclxuICAgIGNhc2UgXCJzdWNjZXNzXCI6XHJcbiAgICBjYXNlIFwidGVydGlhcnlcIjpcclxuICAgIGNhc2UgXCJ0ZXh0XCI6XHJcbiAgICBjYXNlIFwidmFwZVwiOlxyXG4gICAgY2FzZSBcIndhcm5pbmdcIjpcclxuICAgIGNhc2UgXCJkZWZhdWx0XCI6XHJcbiAgICAgIHJldHVybiBjb2xvcjtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBhc3NlcnROZXZlcihjb2xvcik7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQnJhbmRCdXR0b24gPSAoXHJcbiAgeyBjaGlsZHJlbiwgdmFyaWFudCA9IFwiY29udGFpbmVkXCIsIGNsYXNzTmFtZSwgY29sb3IsIHNpemUsIC4uLm90aGVyIH06XHJcbiAgICBQcm9wc1dpdGhDaGlsZHJlbjxcclxuICAgICAgQnV0dG9uU3R5bGVzXHJcbiAgICA+LFxyXG4pID0+IHtcclxuICBjb25zdCBkZWZhdWx0Q29sb3IgPSBzd2l0Y2hDb2xvclRvUmVndWxhcihjb2xvcik7XHJcbiAgY29uc3QgY3VzdG9tQ29sb3IgPSBzd2l0Y2hDb2xvclRvQ3VzdG9tKGNvbG9yKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlQnV0dG9uU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiA8QnV0dG9uXHJcbiAgICBjb2xvcj17ZGVmYXVsdENvbG9yfVxyXG4gICAgdmFyaWFudD17dmFyaWFudH1cclxuICAgIHNpemU9e3NpemUgPT09IFwiZGVmYXVsdFwiID8gdW5kZWZpbmVkIDogc2l6ZX1cclxuICAgIHsuLi5vdGhlcn1cclxuICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgW3sgW2NsYXNzZXNbY3VzdG9tQ29sb3IgfHwgXCJkZWZhdWx0XCJdXTogY3VzdG9tQ29sb3IgfV0sXHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICl9XHJcbiAgPlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvQnV0dG9uPjtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==