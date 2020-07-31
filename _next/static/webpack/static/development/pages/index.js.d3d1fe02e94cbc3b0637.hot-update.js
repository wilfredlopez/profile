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
  PRIMARY_COLOR = prefersDarkMode ? "#040c14" : _material_ui_core_colors_blueGrey__WEBPACK_IMPORTED_MODULE_2___default.a[900];
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])({
    status: {
      danger: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"][500]
    },
    classes: {
      constrained: {
        maxWidth: 945,
        marginLeft: "auto"
      },
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
        default: prefersDarkMode ? "#272525" : "#fff"
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
          zIndex: 1100
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dldFRoZW1lLnRzIl0sIm5hbWVzIjpbIlNFQ09OREFSWV9DT0xPUiIsInNlY29uZGFyeSIsIlNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCIsImNvbW1vbiIsIlBSSU1BUllfQ09MT1IiLCJwcmltYXJ5IiwiVE9PTEJBUl9NSU5fSEVJR0hUIiwiUFJJTUFSWV9DT0xPUl9DT05UUkFTVCIsIkRBUktfQ09MT1IiLCJMSUdIVF9DT0xPUiIsIkJPUkRFUl9SQURJT1VTIiwiZ2V0VGhlbWUiLCJwcmVmZXJzRGFya01vZGUiLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwic3RhdHVzIiwiZGFuZ2VyIiwicmVkIiwiY2xhc3NlcyIsImNvbnN0cmFpbmVkIiwibWF4V2lkdGgiLCJtYXJnaW5MZWZ0IiwidGV4dENvbnRyYXN0IiwiY29sb3IiLCJwYWxldHRlIiwidHlwZSIsIm1haW4iLCJjb250cmFzdFRleHQiLCJ0ZXJ0aWFyeSIsImRhcmsiLCJsaWdodCIsInN1Y2Nlc3MiLCJncmVlbiIsImJhY2tncm91bmQiLCJkZWZhdWx0Iiwic2hhcGUiLCJib3JkZXJSYWRpdXMiLCJzcGFjaW5nIiwicHJvcHMiLCJNdWlQYXBlciIsImVsZXZhdGlvbiIsIk11aVRleHRGaWVsZCIsIklucHV0TGFiZWxQcm9wcyIsInNocmluayIsIk11aUJ1dHRvbiIsImRpc2FibGVSaXBwbGUiLCJNdWlDaGVja2JveCIsIm92ZXJyaWRlcyIsInJvb3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJNdWlNb2JpbGVTdGVwcGVyIiwicG9zaXRpb25Cb3R0b20iLCJwb3NpdGlvbiIsIk11aUFwcEJhciIsInBvc2l0aW9uRml4ZWQiLCJ6SW5kZXgiLCJNdWlUb29sYmFyIiwiZ3V0dGVycyIsIm1pbkhlaWdodCIsInJlZ3VsYXIiLCJNdWlGaWxsZWRJbnB1dCIsIk11aUlucHV0TGFiZWwiLCJ0ZXh0VHJhbnNmb3JtIiwiYXVnbWVudENvbG9yIiwic3R5bGVkQ29tcG9u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QUFlLEVBQUUzRCxzQkFGWDtBQUdOTixhQUFTLEVBQUVELGVBSEw7QUFJTm1FLHFCQUFpQixFQUFFakUsd0JBSmI7QUFLTjJCLFFBQUksRUFBRXJCLFVBTEE7QUFNTnNCLFNBQUssRUFBRXJCO0FBTkQ7QUFGeUMsQ0FBNUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmQzZDFmZTAyZTk0Y2JjM2IwNjM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21tb24sIGdyZWVuLCByZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XHJcbmltcG9ydCBwcmltYXJ5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZUdyZXlcIjtcclxuaW1wb3J0IHNlY29uZGFyeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3RlYWxcIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVNdWlUaGVtZSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IERlZmF1bHRUaGVtZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5leHBvcnQgY29uc3QgU0VDT05EQVJZX0NPTE9SID0gc2Vjb25kYXJ5WzUwMF07XHJcbmV4cG9ydCBjb25zdCBTRUNPTkRBUllfQ09MT1JfQ09OVFJBU1QgPSBjb21tb25bXCJ3aGl0ZVwiXTtcclxuZXhwb3J0IGxldCBQUklNQVJZX0NPTE9SOiBzdHJpbmcgPSBwcmltYXJ5WzkwMF07XHJcbmV4cG9ydCBjb25zdCBUT09MQkFSX01JTl9IRUlHSFQgPSAxNTtcclxuZXhwb3J0IGNvbnN0IFBSSU1BUllfQ09MT1JfQ09OVFJBU1QgPSBjb21tb25bXCJ3aGl0ZVwiXTtcclxuZXhwb3J0IGNvbnN0IERBUktfQ09MT1IgPSBcIiMwNDBjMTRcIjtcclxuZXhwb3J0IGNvbnN0IExJR0hUX0NPTE9SID0gY29tbW9uW1wid2hpdGVcIl07XHJcbmNvbnN0IEJPUkRFUl9SQURJT1VTID0gNDtcclxuXHJcbi8vQ29vbCBHcmVlbiAvIzM4YjU4NFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaGVtZShwcmVmZXJzRGFya01vZGUgPSBmYWxzZSkge1xyXG4gIC8vIFBSSU1BUllfQ09MT1IgPSBwcmVmZXJzRGFya01vZGUgPyBcIiMzMTlkZGZcIiA6IHByaW1hcnlbOTAwXTtcclxuICBQUklNQVJZX0NPTE9SID0gcHJlZmVyc0RhcmtNb2RlID8gXCIjMDQwYzE0XCIgOiBwcmltYXJ5WzkwMF07XHJcblxyXG4gIGNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gICAgc3RhdHVzOiB7XHJcbiAgICAgIGRhbmdlcjogcmVkWzUwMF0sXHJcbiAgICB9LFxyXG4gICAgY2xhc3Nlczoge1xyXG4gICAgICBjb25zdHJhaW5lZDoge1xyXG4gICAgICAgIG1heFdpZHRoOiA5NDUsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRleHRDb250cmFzdDoge1xyXG4gICAgICAgIGNvbG9yOiBjb21tb25bXCJ3aGl0ZVwiXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHR5cGU6IHByZWZlcnNEYXJrTW9kZSA/IFwiZGFya1wiIDogXCJsaWdodFwiLFxyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbWFpbjogUFJJTUFSWV9DT0xPUixcclxuICAgICAgICBjb250cmFzdFRleHQ6IFBSSU1BUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIG1haW46IFNFQ09OREFSWV9DT0xPUixcclxuXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiBTRUNPTkRBUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRlcnRpYXJ5OiB7XHJcbiAgICAgICAgbWFpbjogXCIjYzQ3MDcwXCIsXHJcbiAgICAgICAgZGFyazogXCIjOTE0MzQ1XCIsXHJcbiAgICAgICAgbGlnaHQ6IFwiI2Y5YTA5ZVwiLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogUFJJTUFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgICAgfSxcclxuICAgICAgc3VjY2Vzczoge1xyXG4gICAgICAgIC4uLmdyZWVuLFxyXG4gICAgICAgIG1haW46IFwiIzY4OWYzOFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgLy8gZGVmYXVsdDogXCIjMzAzMDMwXCIsXHJcbiAgICAgICAgZGVmYXVsdDogcHJlZmVyc0RhcmtNb2RlID8gXCIjMjcyNTI1XCIgOiBcIiNmZmZcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzaGFwZToge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IEJPUkRFUl9SQURJT1VTLFxyXG4gICAgfSxcclxuICAgIHNwYWNpbmc6IDE2LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgTXVpUGFwZXI6IHtcclxuICAgICAgICBlbGV2YXRpb246IDMsXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aVRleHRGaWVsZDoge1xyXG4gICAgICAgIElucHV0TGFiZWxQcm9wczoge1xyXG4gICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUJ1dHRvbjoge1xyXG4gICAgICAgIGRpc2FibGVSaXBwbGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUNoZWNrYm94OiB7XHJcbiAgICAgICAgZGlzYWJsZVJpcHBsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBvdmVycmlkZXM6IHtcclxuICAgICAgTXVpUGFwZXI6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBjb2xvcjogcHJlZmVyc0RhcmtNb2RlID8gXCIjZDJkMmQyXCIgOiBjb21tb25bXCJ3aGl0ZVwiXSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJlZmVyc0RhcmtNb2RlID8gXCIjMmMyYzJjXCIgOiBcIiMzMDMwMzBcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlNb2JpbGVTdGVwcGVyOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbkJvdHRvbToge1xyXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlBcHBCYXI6IHtcclxuICAgICAgICBwb3NpdGlvbkZpeGVkOiB7XHJcbiAgICAgICAgICB6SW5kZXg6IDExMDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpVG9vbGJhcjoge1xyXG4gICAgICAgIGd1dHRlcnM6IHtcclxuICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgXCJAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpXCI6IHtcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVndWxhcjoge1xyXG4gICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiA2MDBweClcIjoge1xyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KVwiOiB7XHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlGaWxsZWRJbnB1dDoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUlucHV0TGFiZWw6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlCdXR0b246IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeSA9IHRoZW1lLnBhbGV0dGUuYXVnbWVudENvbG9yKHtcclxuICAgIG1haW46IFwiI2M0NzA3MFwiLFxyXG4gICAgZGFyazogXCIjOTE0MzQ1XCIsXHJcbiAgICBsaWdodDogXCIjZjlhMDllXCIsXHJcbiAgICBjb250cmFzdFRleHQ6IFBSSU1BUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHRoZW1lO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3R5bGVkQ29tcG9uZW50c1RoZW1lOiBEZWZhdWx0VGhlbWUgPSB7XHJcbiAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gIGNvbG9yczoge1xyXG4gICAgcHJpbWFyeTogUFJJTUFSWV9DT0xPUixcclxuICAgIHByaW1hcnlDb250cmFzdDogUFJJTUFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgIHNlY29uZGFyeTogU0VDT05EQVJZX0NPTE9SLFxyXG4gICAgc2Vjb25kYXJ5Q29udHJhc3Q6IFNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgIGRhcms6IERBUktfQ09MT1IsXHJcbiAgICBsaWdodDogTElHSFRfQ09MT1IsXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==