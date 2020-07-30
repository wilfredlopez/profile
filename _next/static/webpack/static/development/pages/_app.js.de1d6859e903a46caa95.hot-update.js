webpackHotUpdate("static\\development\\pages\\_app.js",{

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
const BORDER_RADIOUS = 4;
function getTheme(prefersDarkMode = false) {
  PRIMARY_COLOR = prefersDarkMode ? "#60a0c7" : _material_ui_core_colors_blueGrey__WEBPACK_IMPORTED_MODULE_2___default.a[900];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dldFRoZW1lLnRzIl0sIm5hbWVzIjpbIlNFQ09OREFSWV9DT0xPUiIsInNlY29uZGFyeSIsIlNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCIsImNvbW1vbiIsIlBSSU1BUllfQ09MT1IiLCJwcmltYXJ5IiwiVE9PTEJBUl9NSU5fSEVJR0hUIiwiUFJJTUFSWV9DT0xPUl9DT05UUkFTVCIsIkRBUktfQ09MT1IiLCJMSUdIVF9DT0xPUiIsIkJPUkRFUl9SQURJT1VTIiwiZ2V0VGhlbWUiLCJwcmVmZXJzRGFya01vZGUiLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwic3RhdHVzIiwiZGFuZ2VyIiwicmVkIiwiY2xhc3NlcyIsInRleHRDb250cmFzdCIsImNvbG9yIiwicGFsZXR0ZSIsInR5cGUiLCJtYWluIiwiY29udHJhc3RUZXh0IiwidGVydGlhcnkiLCJkYXJrIiwibGlnaHQiLCJzdWNjZXNzIiwiZ3JlZW4iLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwic3BhY2luZyIsInByb3BzIiwiTXVpUGFwZXIiLCJlbGV2YXRpb24iLCJNdWlUZXh0RmllbGQiLCJJbnB1dExhYmVsUHJvcHMiLCJzaHJpbmsiLCJNdWlCdXR0b24iLCJkaXNhYmxlUmlwcGxlIiwiTXVpQ2hlY2tib3giLCJvdmVycmlkZXMiLCJyb290IiwiYmFja2dyb3VuZENvbG9yIiwiTXVpTW9iaWxlU3RlcHBlciIsInBvc2l0aW9uQm90dG9tIiwicG9zaXRpb24iLCJNdWlBcHBCYXIiLCJwb3NpdGlvbkZpeGVkIiwiekluZGV4IiwiTXVpVG9vbGJhciIsImd1dHRlcnMiLCJtaW5IZWlnaHQiLCJyZWd1bGFyIiwiTXVpRmlsbGVkSW5wdXQiLCJNdWlJbnB1dExhYmVsIiwidGV4dFRyYW5zZm9ybSIsImF1Z21lbnRDb2xvciIsInN0eWxlZENvbXBvbmVudHNUaGVtZSIsImNvbG9ycyIsInByaW1hcnlDb250cmFzdCIs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L3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuZGUxZDY4NTllOTAzYTQ2Y2FhOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbW1vbiwgZ3JlZW4sIHJlZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIjtcclxuaW1wb3J0IHByaW1hcnkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ibHVlR3JleVwiO1xyXG5pbXBvcnQgc2Vjb25kYXJ5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvdGVhbFwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZU11aVRoZW1lLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgRGVmYXVsdFRoZW1lIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmV4cG9ydCBjb25zdCBTRUNPTkRBUllfQ09MT1IgPSBzZWNvbmRhcnlbNTAwXTtcclxuZXhwb3J0IGNvbnN0IFNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCA9IGNvbW1vbltcIndoaXRlXCJdO1xyXG5leHBvcnQgbGV0IFBSSU1BUllfQ09MT1I6IHN0cmluZyA9IHByaW1hcnlbOTAwXTtcclxuZXhwb3J0IGNvbnN0IFRPT0xCQVJfTUlOX0hFSUdIVCA9IDE1O1xyXG5leHBvcnQgY29uc3QgUFJJTUFSWV9DT0xPUl9DT05UUkFTVCA9IGNvbW1vbltcIndoaXRlXCJdO1xyXG5leHBvcnQgY29uc3QgREFSS19DT0xPUiA9IFwiIzA0MGMxNFwiO1xyXG5leHBvcnQgY29uc3QgTElHSFRfQ09MT1IgPSBjb21tb25bXCJ3aGl0ZVwiXTtcclxuY29uc3QgQk9SREVSX1JBRElPVVMgPSA0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGhlbWUocHJlZmVyc0RhcmtNb2RlID0gZmFsc2UpIHtcclxuICBQUklNQVJZX0NPTE9SID0gcHJlZmVyc0RhcmtNb2RlID8gXCIjNjBhMGM3XCIgOiBwcmltYXJ5WzkwMF07XHJcblxyXG4gIGNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gICAgc3RhdHVzOiB7XHJcbiAgICAgIGRhbmdlcjogcmVkWzUwMF0sXHJcbiAgICB9LFxyXG4gICAgY2xhc3Nlczoge1xyXG4gICAgICB0ZXh0Q29udHJhc3Q6IHtcclxuICAgICAgICBjb2xvcjogY29tbW9uW1wid2hpdGVcIl0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICB0eXBlOiBwcmVmZXJzRGFya01vZGUgPyBcImRhcmtcIiA6IFwibGlnaHRcIixcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIG1haW46IFBSSU1BUllfQ09MT1IsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiBQUklNQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBtYWluOiBTRUNPTkRBUllfQ09MT1IsXHJcblxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogU0VDT05EQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgICB9LFxyXG4gICAgICB0ZXJ0aWFyeToge1xyXG4gICAgICAgIG1haW46IFwiI2M0NzA3MFwiLFxyXG4gICAgICAgIGRhcms6IFwiIzkxNDM0NVwiLFxyXG4gICAgICAgIGxpZ2h0OiBcIiNmOWEwOWVcIixcclxuICAgICAgICBjb250cmFzdFRleHQ6IFBSSU1BUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IHtcclxuICAgICAgICAuLi5ncmVlbixcclxuICAgICAgICBtYWluOiBcIiM2ODlmMzhcIixcclxuICAgICAgfSxcclxuICAgICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgIC8vIGRlZmF1bHQ6IFwiIzMwMzAzMFwiLFxyXG4gICAgICAgIGRlZmF1bHQ6IFwiIzI3MjUyNVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNoYXBlOiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogQk9SREVSX1JBRElPVVMsXHJcbiAgICB9LFxyXG4gICAgc3BhY2luZzogMTYsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBNdWlQYXBlcjoge1xyXG4gICAgICAgIGVsZXZhdGlvbjogMyxcclxuICAgICAgfSxcclxuICAgICAgTXVpVGV4dEZpZWxkOiB7XHJcbiAgICAgICAgSW5wdXRMYWJlbFByb3BzOiB7XHJcbiAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpQnV0dG9uOiB7XHJcbiAgICAgICAgZGlzYWJsZVJpcHBsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgTXVpQ2hlY2tib3g6IHtcclxuICAgICAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG92ZXJyaWRlczoge1xyXG4gICAgICBNdWlQYXBlcjoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGNvbG9yOiBwcmVmZXJzRGFya01vZGUgPyBcIiNkMmQyZDJcIiA6IGNvbW1vbltcIndoaXRlXCJdLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcmVmZXJzRGFya01vZGUgPyBcIiMyYzJjMmNcIiA6IFwiIzMwMzAzMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aU1vYmlsZVN0ZXBwZXI6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uQm90dG9tOiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUFwcEJhcjoge1xyXG4gICAgICAgIHBvc2l0aW9uRml4ZWQ6IHtcclxuICAgICAgICAgIHpJbmRleDogMTAwMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlUb29sYmFyOiB7XHJcbiAgICAgICAgZ3V0dGVyczoge1xyXG4gICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiA2MDBweClcIjoge1xyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWd1bGFyOiB7XHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KVwiOiB7XHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgXCJAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpXCI6IHtcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUZpbGxlZElucHV0OiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpSW5wdXRMYWJlbDoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUJ1dHRvbjoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5ID0gdGhlbWUucGFsZXR0ZS5hdWdtZW50Q29sb3Ioe1xyXG4gICAgbWFpbjogXCIjYzQ3MDcwXCIsXHJcbiAgICBkYXJrOiBcIiM5MTQzNDVcIixcclxuICAgIGxpZ2h0OiBcIiNmOWEwOWVcIixcclxuICAgIGNvbnRyYXN0VGV4dDogUFJJTUFSWV9DT0xPUl9DT05UUkFTVCxcclxuICB9KTtcclxuICByZXR1cm4gdGhlbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdHlsZWRDb21wb25lbnRzVGhlbWU6IERlZmF1bHRUaGVtZSA9IHtcclxuICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgY29sb3JzOiB7XHJcbiAgICBwcmltYXJ5OiBQUklNQVJZX0NPTE9SLFxyXG4gICAgcHJpbWFyeUNvbnRyYXN0OiBQUklNQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgc2Vjb25kYXJ5OiBTRUNPTkRBUllfQ09MT1IsXHJcbiAgICBzZWNvbmRhcnlDb250cmFzdDogU0VDT05EQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgZGFyazogREFSS19DT0xPUixcclxuICAgIGxpZ2h0OiBMSUdIVF9DT0xPUixcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9