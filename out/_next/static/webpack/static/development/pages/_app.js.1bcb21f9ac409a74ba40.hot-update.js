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
      imageBackdrop: {
        position: "absolute",
        left: 0,
        borderRadius: BORDER_RADIOUS,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]["black"],
        opacity: 0.4 // transition: theme.transitions.create("opacity"),

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
        default: "#fff"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dldFRoZW1lLnRzIl0sIm5hbWVzIjpbIlNFQ09OREFSWV9DT0xPUiIsInNlY29uZGFyeSIsIlNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCIsImNvbW1vbiIsIlBSSU1BUllfQ09MT1IiLCJwcmltYXJ5IiwiVE9PTEJBUl9NSU5fSEVJR0hUIiwiUFJJTUFSWV9DT0xPUl9DT05UUkFTVCIsIkRBUktfQ09MT1IiLCJMSUdIVF9DT0xPUiIsIkJPUkRFUl9SQURJT1VTIiwiZ2V0VGhlbWUiLCJwcmVmZXJzRGFya01vZGUiLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwic3RhdHVzIiwiZGFuZ2VyIiwicmVkIiwiY2xhc3NlcyIsImltYWdlQmFja2Ryb3AiLCJwb3NpdGlvbiIsImxlZnQiLCJib3JkZXJSYWRpdXMiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsIm9wYWNpdHkiLCJwYWxldHRlIiwidHlwZSIsIm1haW4iLCJjb250cmFzdFRleHQiLCJ0ZXJ0aWFyeSIsImRhcmsiLCJsaWdodCIsInN1Y2Nlc3MiLCJncmVlbiIsImJhY2tncm91bmQiLCJkZWZhdWx0Iiwic2hhcGUiLCJzcGFjaW5nIiwicHJvcHMiLCJNdWlQYXBlciIsImVsZXZhdGlvbiIsIk11aVRleHRGaWVsZCIsIklucHV0TGFiZWxQcm9wcyIsInNocmluayIsIk11aUJ1dHRvbiIsImRpc2FibGVSaXBwbGUiLCJNdWlDaGVja2JveCIsIm92ZXJyaWRlcyIsInJvb3QiLCJjb2xvciIsIk11aU1vYmlsZVN0ZXBwZXIiLCJwb3NpdGlvbkJvdHRvbSIsIk11aUFwcEJhciIsInBvc2l0aW9uRml4ZWQiLCJ6SW5kZXgiLCJNdWlUb29sYmFyIiwiZ3V0dGVycyIsIm1pbkhlaWdodCIsInJlZ3VsYXIiLCJNdWlGaWxsZWRJbnB1dCIsIk11aUlucHV0TGFiZWwiLCJ0ZXh0VHJhbnNmb3JtIiwiYXVnbWVudENvbG9yIiwic3R5bGVkQ29t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QUNqRDVDLGNBQVksRUFBRSxLQURtQztBQUVqRDZDLFFBQU0sRUFBRTtBQUNOOUQsV0FBTyxFQUFFRCxhQURIO0FBRU5nRSxtQkFBZSxFQUFFN0Qsc0JBRlg7QUFHTk4sYUFBUyxFQUFFRCxlQUhMO0FBSU5xRSxxQkFBaUIsRUFBRW5FLHdCQUpiO0FBS04rQixRQUFJLEVBQUV6QixVQUxBO0FBTU4wQixTQUFLLEVBQUV6QjtBQU5EO0FBRnlDLENBQTVDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjFiY2IyMWY5YWM0MDlhNzRiYTQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21tb24sIGdyZWVuLCByZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XHJcbmltcG9ydCBwcmltYXJ5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZUdyZXlcIjtcclxuaW1wb3J0IHNlY29uZGFyeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3RlYWxcIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVNdWlUaGVtZSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IERlZmF1bHRUaGVtZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5leHBvcnQgY29uc3QgU0VDT05EQVJZX0NPTE9SID0gc2Vjb25kYXJ5WzUwMF07XHJcbmV4cG9ydCBjb25zdCBTRUNPTkRBUllfQ09MT1JfQ09OVFJBU1QgPSBjb21tb25bXCJ3aGl0ZVwiXTtcclxuZXhwb3J0IGxldCBQUklNQVJZX0NPTE9SOiBzdHJpbmcgPSBwcmltYXJ5WzkwMF07XHJcbmV4cG9ydCBjb25zdCBUT09MQkFSX01JTl9IRUlHSFQgPSAxNTtcclxuZXhwb3J0IGNvbnN0IFBSSU1BUllfQ09MT1JfQ09OVFJBU1QgPSBjb21tb25bXCJ3aGl0ZVwiXTtcclxuZXhwb3J0IGNvbnN0IERBUktfQ09MT1IgPSBcIiMwNDBjMTRcIjtcclxuZXhwb3J0IGNvbnN0IExJR0hUX0NPTE9SID0gY29tbW9uW1wid2hpdGVcIl07XHJcbmNvbnN0IEJPUkRFUl9SQURJT1VTID0gNDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRoZW1lKHByZWZlcnNEYXJrTW9kZSA9IGZhbHNlKSB7XHJcbiAgUFJJTUFSWV9DT0xPUiA9IHByZWZlcnNEYXJrTW9kZSA/IFwiIzYwYTBjN1wiIDogcHJpbWFyeVs5MDBdO1xyXG5cclxuICBjb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcclxuICAgIHN0YXR1czoge1xyXG4gICAgICBkYW5nZXI6IHJlZFs1MDBdLFxyXG4gICAgfSxcclxuICAgIGNsYXNzZXM6IHtcclxuICAgICAgaW1hZ2VCYWNrZHJvcDoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IEJPUkRFUl9SQURJT1VTLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb21tb25bXCJibGFja1wiXSxcclxuICAgICAgICBvcGFjaXR5OiAwLjQsXHJcbiAgICAgICAgLy8gdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwib3BhY2l0eVwiKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHR5cGU6IHByZWZlcnNEYXJrTW9kZSA/IFwiZGFya1wiIDogXCJsaWdodFwiLFxyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbWFpbjogUFJJTUFSWV9DT0xPUixcclxuICAgICAgICBjb250cmFzdFRleHQ6IFBSSU1BUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIG1haW46IFNFQ09OREFSWV9DT0xPUixcclxuXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiBTRUNPTkRBUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRlcnRpYXJ5OiB7XHJcbiAgICAgICAgbWFpbjogXCIjYzQ3MDcwXCIsXHJcbiAgICAgICAgZGFyazogXCIjOTE0MzQ1XCIsXHJcbiAgICAgICAgbGlnaHQ6IFwiI2Y5YTA5ZVwiLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogUFJJTUFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgICAgfSxcclxuICAgICAgc3VjY2Vzczoge1xyXG4gICAgICAgIC4uLmdyZWVuLFxyXG4gICAgICAgIG1haW46IFwiIzY4OWYzOFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgLy8gZGVmYXVsdDogXCIjMzAzMDMwXCIsXHJcbiAgICAgICAgZGVmYXVsdDogXCIjZmZmXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2hhcGU6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiBCT1JERVJfUkFESU9VUyxcclxuICAgIH0sXHJcbiAgICBzcGFjaW5nOiAxNixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIE11aVBhcGVyOiB7XHJcbiAgICAgICAgZWxldmF0aW9uOiAzLFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlUZXh0RmllbGQ6IHtcclxuICAgICAgICBJbnB1dExhYmVsUHJvcHM6IHtcclxuICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlCdXR0b246IHtcclxuICAgICAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlDaGVja2JveDoge1xyXG4gICAgICAgIGRpc2FibGVSaXBwbGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgb3ZlcnJpZGVzOiB7XHJcbiAgICAgIE11aVBhcGVyOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgY29sb3I6IHByZWZlcnNEYXJrTW9kZSA/IFwiI2QyZDJkMlwiIDogY29tbW9uW1wid2hpdGVcIl0sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByZWZlcnNEYXJrTW9kZSA/IFwiIzJjMmMyY1wiIDogXCIjMzAzMDMwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpTW9iaWxlU3RlcHBlcjoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zaXRpb25Cb3R0b206IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpQXBwQmFyOiB7XHJcbiAgICAgICAgcG9zaXRpb25GaXhlZDoge1xyXG4gICAgICAgICAgekluZGV4OiAxMDAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aVRvb2xiYXI6IHtcclxuICAgICAgICBndXR0ZXJzOiB7XHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KVwiOiB7XHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZ3VsYXI6IHtcclxuICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgXCJAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpXCI6IHtcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiA2MDBweClcIjoge1xyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpRmlsbGVkSW5wdXQ6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlJbnB1dExhYmVsOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpQnV0dG9uOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHRoZW1lLnBhbGV0dGUudGVydGlhcnkgPSB0aGVtZS5wYWxldHRlLmF1Z21lbnRDb2xvcih7XHJcbiAgICBtYWluOiBcIiNjNDcwNzBcIixcclxuICAgIGRhcms6IFwiIzkxNDM0NVwiLFxyXG4gICAgbGlnaHQ6IFwiI2Y5YTA5ZVwiLFxyXG4gICAgY29udHJhc3RUZXh0OiBQUklNQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gIH0pO1xyXG4gIHJldHVybiB0aGVtZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0eWxlZENvbXBvbmVudHNUaGVtZTogRGVmYXVsdFRoZW1lID0ge1xyXG4gIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICBjb2xvcnM6IHtcclxuICAgIHByaW1hcnk6IFBSSU1BUllfQ09MT1IsXHJcbiAgICBwcmltYXJ5Q29udHJhc3Q6IFBSSU1BUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICBzZWNvbmRhcnk6IFNFQ09OREFSWV9DT0xPUixcclxuICAgIHNlY29uZGFyeUNvbnRyYXN0OiBTRUNPTkRBUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICBkYXJrOiBEQVJLX0NPTE9SLFxyXG4gICAgbGlnaHQ6IExJR0hUX0NPTE9SLFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=