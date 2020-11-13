webpackHotUpdate_N_E("pages/index",{

/***/ "./src/theme/getTheme.ts":
/*!*******************************!*\
  !*** ./src/theme/getTheme.ts ***!
  \*******************************/
/*! exports provided: SECONDARY_COLOR, SECONDARY_COLOR_CONTRAST, PRIMARY_COLOR, PRIMARY_COLOR_CONTRAST, TOOLBAR_MIN_HEIGHT, DARK_COLOR, LIGHT_COLOR, TERTIARY_COLOR, TERTIARY_COLOR_CONTRAST, DARK_BACKGROUND_COLOR, default, styledComponentsTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECONDARY_COLOR", function() { return SECONDARY_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECONDARY_COLOR_CONTRAST", function() { return SECONDARY_COLOR_CONTRAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMARY_COLOR", function() { return PRIMARY_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMARY_COLOR_CONTRAST", function() { return PRIMARY_COLOR_CONTRAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLBAR_MIN_HEIGHT", function() { return TOOLBAR_MIN_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_COLOR", function() { return DARK_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_COLOR", function() { return LIGHT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERTIARY_COLOR", function() { return TERTIARY_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERTIARY_COLOR_CONTRAST", function() { return TERTIARY_COLOR_CONTRAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_BACKGROUND_COLOR", function() { return DARK_BACKGROUND_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styledComponentsTheme", function() { return styledComponentsTheme; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "./node_modules/@material-ui/core/colors/blue.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // import primary from '@material-ui/core/colors/teal'



let SECONDARY_COLOR = _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_2___default.a['200']; // common['white'] //

const SECONDARY_COLOR_CONTRAST = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['black'];
let PRIMARY_COLOR = '#b73e35'; // primary[700] // '#032e4e'

const PRIMARY_COLOR_CONTRAST = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['white'];
const TOOLBAR_MIN_HEIGHT = 50;
const DARK_COLOR = '#424242'; // '#040c14'

const LIGHT_COLOR = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['white'];
const TERTIARY_COLOR = '#ff9800'; // '#76b9ff' // '#8c2f2f' // '#20bfad'

const TERTIARY_COLOR_CONTRAST = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['white'];
const DARK_BACKGROUND_COLOR = '#424242'; //'#303030'

const BORDER_RADIOUS = 4; //Cool Green #38b584 or #76b9ff

function getTheme(prefersDarkMode = false) {
  PRIMARY_COLOR = prefersDarkMode ? '#040c14' : PRIMARY_COLOR;
  SECONDARY_COLOR = prefersDarkMode ? 'rgb(1 51 45)' : SECONDARY_COLOR;
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
    status: _objectSpread(_objectSpread({}, _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"]), {}, {
      danger: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"][500]
    }),
    palette: {
      type: prefersDarkMode ? 'dark' : 'light',
      primary: {
        main: PRIMARY_COLOR,
        contrastText: PRIMARY_COLOR_CONTRAST
      },
      secondary: {
        main: SECONDARY_COLOR,
        contrastText: SECONDARY_COLOR_CONTRAST
      },
      tertiary: {
        main: TERTIARY_COLOR,
        dark: '#914345',
        light: '#f9a09e',
        contrastText: TERTIARY_COLOR_CONTRAST
      },
      success: _objectSpread(_objectSpread({}, _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["green"]), {}, {
        main: '#316503'
      }),
      background: {
        // default: "#303030",
        default: prefersDarkMode ? '#272525' : '#fff'
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
          color: prefersDarkMode ? '#d2d2d2' : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['white'],
          backgroundColor: prefersDarkMode ? '#2c2c2c' : DARK_BACKGROUND_COLOR
        }
      },
      MuiMobileStepper: {
        root: {
          backgroundColor: 'transparent'
        },
        positionBottom: {
          position: 'absolute'
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
          '@media (min-width: 600px)': {
            minHeight: TOOLBAR_MIN_HEIGHT
          }
        },
        regular: {
          minHeight: TOOLBAR_MIN_HEIGHT,
          '@media (min-width: 600px)': {
            minHeight: TOOLBAR_MIN_HEIGHT
          }
        },
        root: {
          minHeight: TOOLBAR_MIN_HEIGHT,
          '@media (min-width: 600px)': {
            minHeight: TOOLBAR_MIN_HEIGHT
          }
        }
      },
      MuiFilledInput: {
        root: {
          backgroundColor: 'transparent'
        }
      },
      MuiInputLabel: {
        root: {
          backgroundColor: 'transparent'
        }
      },
      MuiButton: {
        root: {
          textTransform: 'none'
        }
      }
    }
  });
  theme.palette.tertiary = theme.palette.augmentColor({
    main: '#c47070',
    dark: '#914345',
    light: '#f9a09e',
    contrastText: PRIMARY_COLOR_CONTRAST
  });
  return theme;
}
const styledComponentsTheme = {
  borderRadius: '5px',
  colors: {
    primary: PRIMARY_COLOR,
    primaryContrast: PRIMARY_COLOR_CONTRAST,
    secondary: SECONDARY_COLOR,
    secondaryContrast: SECONDARY_COLOR_CONTRAST,
    tertiary: TERTIARY_COLOR,
    tertiaryContrast: TERTIARY_COLOR_CONTRAST,
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
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL2dldFRoZW1lLnRzIl0sIm5hbWVzIjpbIlNFQ09OREFSWV9DT0xPUiIsInNlY29uZGFyeSIsIlNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCIsImNvbW1vbiIsIlBSSU1BUllfQ09MT1IiLCJQUklNQVJZX0NPTE9SX0NPTlRSQVNUIiwiVE9PTEJBUl9NSU5fSEVJR0hUIiwiREFSS19DT0xPUiIsIkxJR0hUX0NPTE9SIiwiVEVSVElBUllfQ09MT1IiLCJURVJUSUFSWV9DT0xPUl9DT05UUkFTVCIsIkRBUktfQkFDS0dST1VORF9DT0xPUiIsIkJPUkRFUl9SQURJT1VTIiwiZ2V0VGhlbWUiLCJwcmVmZXJzRGFya01vZGUiLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwic3RhdHVzIiwicmVkIiwiZGFuZ2VyIiwicGFsZXR0ZSIsInR5cGUiLCJwcmltYXJ5IiwibWFpbiIsImNvbnRyYXN0VGV4dCIsInRlcnRpYXJ5IiwiZGFyayIsImxpZ2h0Iiwic3VjY2VzcyIsImdyZWVuIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsInNwYWNpbmciLCJwcm9wcyIsIk11aVBhcGVyIiwiZWxldmF0aW9uIiwiTXVpVGV4dEZpZWxkIiwiSW5wdXRMYWJlbFByb3BzIiwic2hyaW5rIiwiTXVpQnV0dG9uIiwiZGlzYWJsZVJpcHBsZSIsIk11aUNoZWNrYm94Iiwib3ZlcnJpZGVzIiwicm9vdCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiTXVpTW9iaWxlU3RlcHBlciIsInBvc2l0aW9uQm90dG9tIiwicG9zaXRpb24iLCJNdWlBcHBCYXIiLCJwb3NpdGlvbkZpeGVkIiwiekluZGV4IiwiTXVpVG9vbGJhciIsImd1dHRlcnMiLCJtaW5IZWlnaHQiLCJyZWd1bGFyIiwiTXVpRmlsbGVkSW5wdXQiLCJNdWlJbnB1dExhYmVsIiwidGV4dFRyYW5zZm9ybSIsImF1Z21lbnRDb2xvciIsInN0eWxlZENvbXBvbmVudHNUaGVtZSIsImNvbG9ycyIsInByaW1hcnlDb250cmFzdCIsInNlY29uZGFyeUNvbnRyYXN0IiwidGVydGlhcnlDb250cmFzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFHTyxJQUFJQSxlQUF1QixHQUFHQyxvRUFBUyxDQUFDLEtBQUQsQ0FBdkMsQyxDQUErQzs7QUFDL0MsTUFBTUMsd0JBQXdCLEdBQUdDLCtEQUFNLENBQUMsT0FBRCxDQUF2QztBQUVBLElBQUlDLGFBQXFCLEdBQUcsU0FBNUIsQyxDQUFzQzs7QUFDdEMsTUFBTUMsc0JBQXNCLEdBQUdGLCtEQUFNLENBQUMsT0FBRCxDQUFyQztBQUVBLE1BQU1HLGtCQUFrQixHQUFHLEVBQTNCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFNBQW5CLEMsQ0FBNkI7O0FBQzdCLE1BQU1DLFdBQVcsR0FBR0wsK0RBQU0sQ0FBQyxPQUFELENBQTFCO0FBQ0EsTUFBTU0sY0FBYyxHQUFHLFNBQXZCLEMsQ0FBaUM7O0FBQ2pDLE1BQU1DLHVCQUF1QixHQUFHUCwrREFBTSxDQUFDLE9BQUQsQ0FBdEM7QUFDQSxNQUFNUSxxQkFBcUIsR0FBRyxTQUE5QixDLENBQXdDOztBQUMvQyxNQUFNQyxjQUFjLEdBQUcsQ0FBdkIsQyxDQUVBOztBQUNlLFNBQVNDLFFBQVQsQ0FBa0JDLGVBQWUsR0FBRyxLQUFwQyxFQUEyQztBQUN4RFYsZUFBYSxHQUFHVSxlQUFlLEdBQUcsU0FBSCxHQUFlVixhQUE5QztBQUNBSixpQkFBZSxHQUFHYyxlQUFlLEdBQUcsY0FBSCxHQUFvQmQsZUFBckQ7QUFFQSxRQUFNZSxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDM0JDLFVBQU0sa0NBQ0RDLDREQURDO0FBRUpDLFlBQU0sRUFBRUQsNERBQUcsQ0FBQyxHQUFEO0FBRlAsTUFEcUI7QUFLM0JFLFdBQU8sRUFBRTtBQUNQQyxVQUFJLEVBQUVQLGVBQWUsR0FBRyxNQUFILEdBQVksT0FEMUI7QUFF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UUFBTSxFQUFFO0FBQ056QyxXQUFPLEVBQUVsQixhQURIO0FBRU40RCxtQkFBZSxFQUFFM0Qsc0JBRlg7QUFHTkosYUFBUyxFQUFFRCxlQUhMO0FBSU5pRSxxQkFBaUIsRUFBRS9ELHdCQUpiO0FBS051QixZQUFRLEVBQUVoQixjQUxKO0FBTU55RCxvQkFBZ0IsRUFBRXhELHVCQU5aO0FBT05nQixRQUFJLEVBQUVuQixVQVBBO0FBUU5vQixTQUFLLEVBQUVuQjtBQVJEO0FBRnlDLENBQTVDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZhZTUzNmZmMjcyZWQ2MDU0NmEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21tb24sIGdyZWVuLCByZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbi8vIGltcG9ydCBwcmltYXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy90ZWFsJ1xyXG5pbXBvcnQgc2Vjb25kYXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ibHVlJ1xyXG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgRGVmYXVsdFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgbGV0IFNFQ09OREFSWV9DT0xPUjogc3RyaW5nID0gc2Vjb25kYXJ5WycyMDAnXSAvLyBjb21tb25bJ3doaXRlJ10gLy9cclxuZXhwb3J0IGNvbnN0IFNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCA9IGNvbW1vblsnYmxhY2snXVxyXG5cclxuZXhwb3J0IGxldCBQUklNQVJZX0NPTE9SOiBzdHJpbmcgPSAnI2I3M2UzNScgLy8gcHJpbWFyeVs3MDBdIC8vICcjMDMyZTRlJ1xyXG5leHBvcnQgY29uc3QgUFJJTUFSWV9DT0xPUl9DT05UUkFTVCA9IGNvbW1vblsnd2hpdGUnXVxyXG5cclxuZXhwb3J0IGNvbnN0IFRPT0xCQVJfTUlOX0hFSUdIVCA9IDUwXHJcbmV4cG9ydCBjb25zdCBEQVJLX0NPTE9SID0gJyM0MjQyNDInIC8vICcjMDQwYzE0J1xyXG5leHBvcnQgY29uc3QgTElHSFRfQ09MT1IgPSBjb21tb25bJ3doaXRlJ11cclxuZXhwb3J0IGNvbnN0IFRFUlRJQVJZX0NPTE9SID0gJyNmZjk4MDAnIC8vICcjNzZiOWZmJyAvLyAnIzhjMmYyZicgLy8gJyMyMGJmYWQnXHJcbmV4cG9ydCBjb25zdCBURVJUSUFSWV9DT0xPUl9DT05UUkFTVCA9IGNvbW1vblsnd2hpdGUnXVxyXG5leHBvcnQgY29uc3QgREFSS19CQUNLR1JPVU5EX0NPTE9SID0gJyM0MjQyNDInIC8vJyMzMDMwMzAnXHJcbmNvbnN0IEJPUkRFUl9SQURJT1VTID0gNFxyXG5cclxuLy9Db29sIEdyZWVuICMzOGI1ODQgb3IgIzc2YjlmZlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaGVtZShwcmVmZXJzRGFya01vZGUgPSBmYWxzZSkge1xyXG4gIFBSSU1BUllfQ09MT1IgPSBwcmVmZXJzRGFya01vZGUgPyAnIzA0MGMxNCcgOiBQUklNQVJZX0NPTE9SXHJcbiAgU0VDT05EQVJZX0NPTE9SID0gcHJlZmVyc0RhcmtNb2RlID8gJ3JnYigxIDUxIDQ1KScgOiBTRUNPTkRBUllfQ09MT1JcclxuXHJcbiAgY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgICBzdGF0dXM6IHtcclxuICAgICAgLi4ucmVkLFxyXG4gICAgICBkYW5nZXI6IHJlZFs1MDBdLFxyXG4gICAgfSxcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgdHlwZTogcHJlZmVyc0RhcmtNb2RlID8gJ2RhcmsnIDogJ2xpZ2h0JyxcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIG1haW46IFBSSU1BUllfQ09MT1IsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiBQUklNQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBtYWluOiBTRUNPTkRBUllfQ09MT1IsXHJcblxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogU0VDT05EQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgICB9LFxyXG4gICAgICB0ZXJ0aWFyeToge1xyXG4gICAgICAgIG1haW46IFRFUlRJQVJZX0NPTE9SLFxyXG4gICAgICAgIGRhcms6ICcjOTE0MzQ1JyxcclxuICAgICAgICBsaWdodDogJyNmOWEwOWUnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogVEVSVElBUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IHtcclxuICAgICAgICAuLi5ncmVlbixcclxuICAgICAgICBtYWluOiAnIzMxNjUwMycsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICAvLyBkZWZhdWx0OiBcIiMzMDMwMzBcIixcclxuICAgICAgICBkZWZhdWx0OiBwcmVmZXJzRGFya01vZGUgPyAnIzI3MjUyNScgOiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2hhcGU6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiBCT1JERVJfUkFESU9VUyxcclxuICAgIH0sXHJcbiAgICBzcGFjaW5nOiAxNixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIE11aVBhcGVyOiB7XHJcbiAgICAgICAgZWxldmF0aW9uOiAzLFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlUZXh0RmllbGQ6IHtcclxuICAgICAgICBJbnB1dExhYmVsUHJvcHM6IHtcclxuICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlCdXR0b246IHtcclxuICAgICAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlDaGVja2JveDoge1xyXG4gICAgICAgIGRpc2FibGVSaXBwbGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgb3ZlcnJpZGVzOiB7XHJcbiAgICAgIE11aVBhcGVyOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgY29sb3I6IHByZWZlcnNEYXJrTW9kZSA/ICcjZDJkMmQyJyA6IGNvbW1vblsnd2hpdGUnXSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJlZmVyc0RhcmtNb2RlID8gJyMyYzJjMmMnIDogREFSS19CQUNLR1JPVU5EX0NPTE9SLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aU1vYmlsZVN0ZXBwZXI6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbkJvdHRvbToge1xyXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpQXBwQmFyOiB7XHJcbiAgICAgICAgcG9zaXRpb25GaXhlZDoge1xyXG4gICAgICAgICAgekluZGV4OiAxMTAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aVRvb2xiYXI6IHtcclxuICAgICAgICBndXR0ZXJzOiB7XHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgICdAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpJzoge1xyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWd1bGFyOiB7XHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgICdAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpJzoge1xyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgICdAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpJzoge1xyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpRmlsbGVkSW5wdXQ6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpSW5wdXRMYWJlbDoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlCdXR0b246IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSlcclxuXHJcbiAgdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeSA9IHRoZW1lLnBhbGV0dGUuYXVnbWVudENvbG9yKHtcclxuICAgIG1haW46ICcjYzQ3MDcwJyxcclxuICAgIGRhcms6ICcjOTE0MzQ1JyxcclxuICAgIGxpZ2h0OiAnI2Y5YTA5ZScsXHJcbiAgICBjb250cmFzdFRleHQ6IFBSSU1BUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgfSlcclxuICByZXR1cm4gdGhlbWVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0eWxlZENvbXBvbmVudHNUaGVtZTogRGVmYXVsdFRoZW1lID0ge1xyXG4gIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgY29sb3JzOiB7XHJcbiAgICBwcmltYXJ5OiBQUklNQVJZX0NPTE9SLFxyXG4gICAgcHJpbWFyeUNvbnRyYXN0OiBQUklNQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgc2Vjb25kYXJ5OiBTRUNPTkRBUllfQ09MT1IsXHJcbiAgICBzZWNvbmRhcnlDb250cmFzdDogU0VDT05EQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgdGVydGlhcnk6IFRFUlRJQVJZX0NPTE9SLFxyXG4gICAgdGVydGlhcnlDb250cmFzdDogVEVSVElBUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICBkYXJrOiBEQVJLX0NPTE9SLFxyXG4gICAgbGlnaHQ6IExJR0hUX0NPTE9SLFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFN0eWxlZENvbXBvbmVudENvbG9yS2V5ID0ga2V5b2YgRGVmYXVsdFRoZW1lWydjb2xvcnMnXVxyXG4iXSwic291cmNlUm9vdCI6IiJ9