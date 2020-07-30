webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/styles/getTheme.ts":
/*!********************************!*\
  !*** ./src/styles/getTheme.ts ***!
  \********************************/
/*! exports provided: SECONDARY_COLOR, SECONDARY_COLOR_CONTRAST, PRIMARY_COLOR, TOOLBAR_MIN_HEIGHT, PRIMARY_COLOR_CONTRAST, DARK_COLOR, LIGHT_COLOR, default, styledComponentsTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECONDARY_COLOR", function() { return SECONDARY_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECONDARY_COLOR_CONTRAST", function() { return SECONDARY_COLOR_CONTRAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMARY_COLOR", function() { return PRIMARY_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLBAR_MIN_HEIGHT", function() { return TOOLBAR_MIN_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMARY_COLOR_CONTRAST", function() { return PRIMARY_COLOR_CONTRAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_COLOR", function() { return DARK_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_COLOR", function() { return LIGHT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styledComponentsTheme", function() { return styledComponentsTheme; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core_colors_blueGrey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors/blueGrey */ "./node_modules/@material-ui/core/colors/blueGrey.js");
/* harmony import */ var _material_ui_core_colors_blueGrey__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blueGrey__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/colors/teal */ "./node_modules/@material-ui/core/colors/teal.js");
/* harmony import */ var _material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





const SECONDARY_COLOR = _material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_3___default.a[500];
const SECONDARY_COLOR_CONTRAST = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]["white"];
let PRIMARY_COLOR = _material_ui_core_colors_blueGrey__WEBPACK_IMPORTED_MODULE_2___default.a[900];
const TOOLBAR_MIN_HEIGHT = 15;
const PRIMARY_COLOR_CONTRAST = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]["white"];
const DARK_COLOR = "#040c14";
const LIGHT_COLOR = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]["white"];
const BORDER_RADIOUS = 4; //Cool Green /#38b584

function getTheme(prefersDarkMode = false) {
  // PRIMARY_COLOR = prefersDarkMode ? "#319ddf" : primary[900];
  PRIMARY_COLOR = prefersDarkMode ? "#10a96d" : _material_ui_core_colors_blueGrey__WEBPACK_IMPORTED_MODULE_2___default.a[900];
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])({
    status: {
      danger: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"][500]
    },
    classes: {
      textContrast: {
        color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]["white"]
      }
    },
    palette: {
      type: prefersDarkMode ? "dark" : "light",
      primary: {
        main: PRIMARY_COLOR,
        contrastText: PRIMARY_COLOR_CONTRAST
      },
      secondary: {
        main: SECONDARY_COLOR,
        contrastText: SECONDARY_COLOR_CONTRAST
      },
      tertiary: {
        main: "#c47070",
        dark: "#914345",
        light: "#f9a09e",
        contrastText: PRIMARY_COLOR_CONTRAST
      },
      success: _objectSpread(_objectSpread({}, _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["green"]), {}, {
        main: "#689f38"
      }),
      background: {
        // default: "#303030",
        default: "#272525"
      }
    },
    shape: {
      borderRadius: BORDER_RADIOUS
    },
    spacing: 16,
    props: {
      MuiPaper: {
        elevation: 3
      },
      MuiTextField: {
        InputLabelProps: {
          shrink: true
        }
      },
      MuiButton: {
        disableRipple: true
      },
      MuiCheckbox: {
        disableRipple: true
      }
    },
    overrides: {
      MuiPaper: {
        root: {
          color: prefersDarkMode ? "#d2d2d2" : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]["white"],
          backgroundColor: prefersDarkMode ? "#2c2c2c" : "#303030"
        }
      },
      MuiMobileStepper: {
        root: {
          backgroundColor: "transparent"
        },
        positionBottom: {
          position: "absolute"
        }
      },
      MuiAppBar: {
        positionFixed: {
          zIndex: 1000
        }
      },
      MuiToolbar: {
        gutters: {
          minHeight: TOOLBAR_MIN_HEIGHT,
          "@media (min-width: 600px)": {
            minHeight: TOOLBAR_MIN_HEIGHT
          }
        },
        regular: {
          minHeight: TOOLBAR_MIN_HEIGHT,
          "@media (min-width: 600px)": {
            minHeight: TOOLBAR_MIN_HEIGHT
          }
        },
        root: {
          minHeight: TOOLBAR_MIN_HEIGHT,
          "@media (min-width: 600px)": {
            minHeight: TOOLBAR_MIN_HEIGHT
          }
        }
      },
      MuiFilledInput: {
        root: {
          backgroundColor: "transparent"
        }
      },
      MuiInputLabel: {
        root: {
          backgroundColor: "transparent"
        }
      },
      MuiButton: {
        root: {
          textTransform: "none"
        }
      }
    }
  });
  theme.palette.tertiary = theme.palette.augmentColor({
    main: "#c47070",
    dark: "#914345",
    light: "#f9a09e",
    contrastText: PRIMARY_COLOR_CONTRAST
  });
  return theme;
}
const styledComponentsTheme = {
  borderRadius: "5px",
  colors: {
    primary: PRIMARY_COLOR,
    primaryContrast: PRIMARY_COLOR_CONTRAST,
    secondary: SECONDARY_COLOR,
    secondaryContrast: SECONDARY_COLOR_CONTRAST,
    dark: DARK_COLOR,
    light: LIGHT_COLOR
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dldFRoZW1lLnRzIl0sIm5hbWVzIjpbIlNFQ09OREFSWV9DT0xPUiIsInNlY29uZGFyeSIsIlNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCIsImNvbW1vbiIsIlBSSU1BUllfQ09MT1IiLCJwcmltYXJ5IiwiVE9PTEJBUl9NSU5fSEVJR0hUIiwiUFJJTUFSWV9DT0xPUl9DT05UUkFTVCIsIkRBUktfQ09MT1IiLCJMSUdIVF9DT0xPUiIsIkJPUkRFUl9SQURJT1VTIiwiZ2V0VGhlbWUiLCJwcmVmZXJzRGFya01vZGUiLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwic3RhdHVzIiwiZGFuZ2VyIiwicmVkIiwiY2xhc3NlcyIsInRleHRDb250cmFzdCIsImNvbG9yIiwicGFsZXR0ZSIsInR5cGUiLCJtYWluIiwiY29udHJhc3RUZXh0IiwidGVydGlhcnkiLCJkYXJrIiwibGlnaHQiLCJzdWNjZXNzIiwiZ3JlZW4iLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwic3BhY2luZyIsInByb3BzIiwiTXVpUGFwZXIiLCJlbGV2YXRpb24iLCJNdWlUZXh0RmllbGQiLCJJbnB1dExhYmVsUHJvcHMiLCJzaHJpbmsiLCJNdWlCdXR0b24iLCJkaXNhYmxlUmlwcGxlIiwiTXVpQ2hlY2tib3giLCJvdmVycmlkZXMiLCJyb290IiwiYmFja2dyb3VuZENvbG9yIiwiTXVpTW9iaWxlU3RlcHBlciIsInBvc2l0aW9uQm90dG9tIiwicG9zaXRpb24iLCJNdWlBcHBCYXIiLCJwb3NpdGlvbkZpeGVkIiwiekluZGV4IiwiTXVpVG9vbGJhciIsImd1dHRlcnMiLCJtaW5IZWlnaHQiLCJyZWd1bGFyIiwiTXVpRmlsbGVkSW5wdXQiLCJNdWlJbnB1dExhYmVsIiwidGV4dFRyYW5zZm9ybSIsImF1Z21lbnRDb2xvciIsInN0eWxlZENvbXBvbmVudHNUaGVtZSIsImNvbG9ycyIsInByaW1hcnlDb250cmFzdCIs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ZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kNjY1M2ZlNTRmZTkxYThhZTBmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tbW9uLCBncmVlbiwgcmVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG5pbXBvcnQgcHJpbWFyeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2JsdWVHcmV5XCI7XHJcbmltcG9ydCBzZWNvbmRhcnkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy90ZWFsXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlTXVpVGhlbWUsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBEZWZhdWx0VGhlbWUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuZXhwb3J0IGNvbnN0IFNFQ09OREFSWV9DT0xPUiA9IHNlY29uZGFyeVs1MDBdO1xyXG5leHBvcnQgY29uc3QgU0VDT05EQVJZX0NPTE9SX0NPTlRSQVNUID0gY29tbW9uW1wid2hpdGVcIl07XHJcbmV4cG9ydCBsZXQgUFJJTUFSWV9DT0xPUjogc3RyaW5nID0gcHJpbWFyeVs5MDBdO1xyXG5leHBvcnQgY29uc3QgVE9PTEJBUl9NSU5fSEVJR0hUID0gMTU7XHJcbmV4cG9ydCBjb25zdCBQUklNQVJZX0NPTE9SX0NPTlRSQVNUID0gY29tbW9uW1wid2hpdGVcIl07XHJcbmV4cG9ydCBjb25zdCBEQVJLX0NPTE9SID0gXCIjMDQwYzE0XCI7XHJcbmV4cG9ydCBjb25zdCBMSUdIVF9DT0xPUiA9IGNvbW1vbltcIndoaXRlXCJdO1xyXG5jb25zdCBCT1JERVJfUkFESU9VUyA9IDQ7XHJcblxyXG4vL0Nvb2wgR3JlZW4gLyMzOGI1ODRcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGhlbWUocHJlZmVyc0RhcmtNb2RlID0gZmFsc2UpIHtcclxuICAvLyBQUklNQVJZX0NPTE9SID0gcHJlZmVyc0RhcmtNb2RlID8gXCIjMzE5ZGRmXCIgOiBwcmltYXJ5WzkwMF07XHJcbiAgUFJJTUFSWV9DT0xPUiA9IHByZWZlcnNEYXJrTW9kZSA/IFwiIzEwYTk2ZFwiIDogcHJpbWFyeVs5MDBdO1xyXG5cclxuICBjb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcclxuICAgIHN0YXR1czoge1xyXG4gICAgICBkYW5nZXI6IHJlZFs1MDBdLFxyXG4gICAgfSxcclxuICAgIGNsYXNzZXM6IHtcclxuICAgICAgdGV4dENvbnRyYXN0OiB7XHJcbiAgICAgICAgY29sb3I6IGNvbW1vbltcIndoaXRlXCJdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgdHlwZTogcHJlZmVyc0RhcmtNb2RlID8gXCJkYXJrXCIgOiBcImxpZ2h0XCIsXHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBtYWluOiBQUklNQVJZX0NPTE9SLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogUFJJTUFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbWFpbjogU0VDT05EQVJZX0NPTE9SLFxyXG5cclxuICAgICAgICBjb250cmFzdFRleHQ6IFNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgICAgfSxcclxuICAgICAgdGVydGlhcnk6IHtcclxuICAgICAgICBtYWluOiBcIiNjNDcwNzBcIixcclxuICAgICAgICBkYXJrOiBcIiM5MTQzNDVcIixcclxuICAgICAgICBsaWdodDogXCIjZjlhMDllXCIsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiBQUklNQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiB7XHJcbiAgICAgICAgLi4uZ3JlZW4sXHJcbiAgICAgICAgbWFpbjogXCIjNjg5ZjM4XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICAvLyBkZWZhdWx0OiBcIiMzMDMwMzBcIixcclxuICAgICAgICBkZWZhdWx0OiBcIiMyNzI1MjVcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzaGFwZToge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IEJPUkRFUl9SQURJT1VTLFxyXG4gICAgfSxcclxuICAgIHNwYWNpbmc6IDE2LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgTXVpUGFwZXI6IHtcclxuICAgICAgICBlbGV2YXRpb246IDMsXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aVRleHRGaWVsZDoge1xyXG4gICAgICAgIElucHV0TGFiZWxQcm9wczoge1xyXG4gICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUJ1dHRvbjoge1xyXG4gICAgICAgIGRpc2FibGVSaXBwbGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUNoZWNrYm94OiB7XHJcbiAgICAgICAgZGlzYWJsZVJpcHBsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBvdmVycmlkZXM6IHtcclxuICAgICAgTXVpUGFwZXI6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBjb2xvcjogcHJlZmVyc0RhcmtNb2RlID8gXCIjZDJkMmQyXCIgOiBjb21tb25bXCJ3aGl0ZVwiXSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJlZmVyc0RhcmtNb2RlID8gXCIjMmMyYzJjXCIgOiBcIiMzMDMwMzBcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlNb2JpbGVTdGVwcGVyOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbkJvdHRvbToge1xyXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlBcHBCYXI6IHtcclxuICAgICAgICBwb3NpdGlvbkZpeGVkOiB7XHJcbiAgICAgICAgICB6SW5kZXg6IDEwMDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpVG9vbGJhcjoge1xyXG4gICAgICAgIGd1dHRlcnM6IHtcclxuICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgXCJAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpXCI6IHtcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVndWxhcjoge1xyXG4gICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiA2MDBweClcIjoge1xyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KVwiOiB7XHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlGaWxsZWRJbnB1dDoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUlucHV0TGFiZWw6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlCdXR0b246IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeSA9IHRoZW1lLnBhbGV0dGUuYXVnbWVudENvbG9yKHtcclxuICAgIG1haW46IFwiI2M0NzA3MFwiLFxyXG4gICAgZGFyazogXCIjOTE0MzQ1XCIsXHJcbiAgICBsaWdodDogXCIjZjlhMDllXCIsXHJcbiAgICBjb250cmFzdFRleHQ6IFBSSU1BUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHRoZW1lO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3R5bGVkQ29tcG9uZW50c1RoZW1lOiBEZWZhdWx0VGhlbWUgPSB7XHJcbiAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gIGNvbG9yczoge1xyXG4gICAgcHJpbWFyeTogUFJJTUFSWV9DT0xPUixcclxuICAgIHByaW1hcnlDb250cmFzdDogUFJJTUFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgIHNlY29uZGFyeTogU0VDT05EQVJZX0NPTE9SLFxyXG4gICAgc2Vjb25kYXJ5Q29udHJhc3Q6IFNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgIGRhcms6IERBUktfQ09MT1IsXHJcbiAgICBsaWdodDogTElHSFRfQ09MT1IsXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==