webpackHotUpdate_N_E("pages/index",{

/***/ "./src/theme/getTheme.ts":
/*!*******************************!*\
  !*** ./src/theme/getTheme.ts ***!
  \*******************************/
/*! exports provided: SECONDARY_COLOR, SECONDARY_COLOR_CONTRAST, PRIMARY_COLOR, TOOLBAR_MIN_HEIGHT, PRIMARY_COLOR_CONTRAST, DARK_COLOR, LIGHT_COLOR, TERTIARY_COLOR, TERTIARY_COLOR_CONTRAST, DARK_BACKGROUND_COLOR, default, styledComponentsTheme */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERTIARY_COLOR", function() { return TERTIARY_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERTIARY_COLOR_CONTRAST", function() { return TERTIARY_COLOR_CONTRAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_BACKGROUND_COLOR", function() { return DARK_BACKGROUND_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styledComponentsTheme", function() { return styledComponentsTheme; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // import secondary from '@material-ui/core/colors/teal'


let SECONDARY_COLOR = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['white']; // secondary[700]

const SECONDARY_COLOR_CONTRAST = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['black']; // export let PRIMARY_COLOR: string = primary['900']

let PRIMARY_COLOR = 'green'; //'#032e4e'
// export let PRIMARY_COLOR: string = '#00463e' || '#032e4e'

const TOOLBAR_MIN_HEIGHT = 50;
const PRIMARY_COLOR_CONTRAST = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['black'];
const DARK_COLOR = '#040c14';
const LIGHT_COLOR = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['white'];
const TERTIARY_COLOR = '#8c2f2f'; // '#20bfad'

const TERTIARY_COLOR_CONTRAST = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['white'];
const DARK_BACKGROUND_COLOR = '#303030';
const BORDER_RADIOUS = 4; //Cool Green /#38b584

function getTheme(prefersDarkMode = false) {
  // PRIMARY_COLOR = prefersDarkMode ? "#319ddf" : primary[900];
  PRIMARY_COLOR = prefersDarkMode ? '#040c14' : PRIMARY_COLOR;
  SECONDARY_COLOR = prefersDarkMode ? 'rgb(1 51 45)' : SECONDARY_COLOR;
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])({
    status: {
      danger: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"][500]
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL2dldFRoZW1lLnRzIl0sIm5hbWVzIjpbIlNFQ09OREFSWV9DT0xPUiIsImNvbW1vbiIsIlNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCIsIlBSSU1BUllfQ09MT1IiLCJUT09MQkFSX01JTl9IRUlHSFQiLCJQUklNQVJZX0NPTE9SX0NPTlRSQVNUIiwiREFSS19DT0xPUiIsIkxJR0hUX0NPTE9SIiwiVEVSVElBUllfQ09MT1IiLCJURVJUSUFSWV9DT0xPUl9DT05UUkFTVCIsIkRBUktfQkFDS0dST1VORF9DT0xPUiIsIkJPUkRFUl9SQURJT1VTIiwiZ2V0VGhlbWUiLCJwcmVmZXJzRGFya01vZGUiLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwic3RhdHVzIiwiZGFuZ2VyIiwicmVkIiwicGFsZXR0ZSIsInR5cGUiLCJwcmltYXJ5IiwibWFpbiIsImNvbnRyYXN0VGV4dCIsInNlY29uZGFyeSIsInRlcnRpYXJ5IiwiZGFyayIsImxpZ2h0Iiwic3VjY2VzcyIsImdyZWVuIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsInNwYWNpbmciLCJwcm9wcyIsIk11aVBhcGVyIiwiZWxldmF0aW9uIiwiTXVpVGV4dEZpZWxkIiwiSW5wdXRMYWJlbFByb3BzIiwic2hyaW5rIiwiTXVpQnV0dG9uIiwiZGlzYWJsZVJpcHBsZSIsIk11aUNoZWNrYm94Iiwib3ZlcnJpZGVzIiwicm9vdCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiTXVpTW9iaWxlU3RlcHBlciIsInBvc2l0aW9uQm90dG9tIiwicG9zaXRpb24iLCJNdWlBcHBCYXIiLCJwb3NpdGlvbkZpeGVkIiwiekluZGV4IiwiTXVpVG9vbGJhciIsImd1dHRlcnMiLCJtaW5IZWlnaHQiLCJyZWd1bGFyIiwiTXVpRmlsbGVkSW5wdXQiLCJNdWlJbnB1dExhYmVsIiwidGV4dFRyYW5zZm9ybSIsImF1Z21lbnRDb2xvciIsInN0eWxlZENvbXBvbmVudHNUaGVtZSIsImNvbG9ycyIsInByaW1hcnlDb250cmFzdCIsInNlY29uZGFyeUNvbnRyYXN0IiwidGVydGlhcnlDb250cmFzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUVPLElBQUlBLGVBQXVCLEdBQUdDLCtEQUFNLENBQUMsT0FBRCxDQUFwQyxDLENBQThDOztBQUM5QyxNQUFNQyx3QkFBd0IsR0FBR0QsK0RBQU0sQ0FBQyxPQUFELENBQXZDLEMsQ0FDUDs7QUFDTyxJQUFJRSxhQUFxQixHQUFHLE9BQTVCLEMsQ0FBb0M7QUFDM0M7O0FBRU8sTUFBTUMsa0JBQWtCLEdBQUcsRUFBM0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBR0osK0RBQU0sQ0FBQyxPQUFELENBQXJDO0FBQ0EsTUFBTUssVUFBVSxHQUFHLFNBQW5CO0FBQ0EsTUFBTUMsV0FBVyxHQUFHTiwrREFBTSxDQUFDLE9BQUQsQ0FBMUI7QUFDQSxNQUFNTyxjQUFjLEdBQUcsU0FBdkIsQyxDQUFpQzs7QUFDakMsTUFBTUMsdUJBQXVCLEdBQUdSLCtEQUFNLENBQUMsT0FBRCxDQUF0QztBQUNBLE1BQU1TLHFCQUFxQixHQUFHLFNBQTlCO0FBQ1AsTUFBTUMsY0FBYyxHQUFHLENBQXZCLEMsQ0FFQTs7QUFDZSxTQUFTQyxRQUFULENBQWtCQyxlQUFlLEdBQUcsS0FBcEMsRUFBMkM7QUFDeEQ7QUFDQVYsZUFBYSxHQUFHVSxlQUFlLEdBQUcsU0FBSCxHQUFlVixhQUE5QztBQUNBSCxpQkFBZSxHQUFHYSxlQUFlLEdBQUcsY0FBSCxHQUFvQmIsZUFBckQ7QUFDQSxRQUFNYyxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDM0JDLFVBQU0sRUFBRTtBQUNOQyxZQUFNLEVBQUVDLDREQUFHLENBQUMsR0FBRDtBQURMLEtBRG1CO0FBSTNCQyxXQUFPLEVBQUU7QUFDUEMsVUFBSSxFQUFFUCxlQUFlLEdBQUcsTUFBSCxHQUFZLE9BRDFCO0FBRVBRLGFBQU8sRUFBRTtBQUNQ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V0FBTyxFQUFFbEIsYUFESDtBQUVONkQsbUJBQWUsRUFBRTNELHNCQUZYO0FBR05tQixhQUFTLEVBQUV4QixlQUhMO0FBSU5pRSxxQkFBaUIsRUFBRS9ELHdCQUpiO0FBS051QixZQUFRLEVBQUVqQixjQUxKO0FBTU4wRCxvQkFBZ0IsRUFBRXpELHVCQU5aO0FBT05pQixRQUFJLEVBQUVwQixVQVBBO0FBUU5xQixTQUFLLEVBQUVwQjtBQVJEO0FBRnlDLENBQTVDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVjOTY3Yzg5Y2EyM2Q4NDgwODZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21tb24sIGdyZWVuLCByZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbi8vIGltcG9ydCBzZWNvbmRhcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3RlYWwnXHJcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBEZWZhdWx0VGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuZXhwb3J0IGxldCBTRUNPTkRBUllfQ09MT1I6IHN0cmluZyA9IGNvbW1vblsnd2hpdGUnXSAvLyBzZWNvbmRhcnlbNzAwXVxyXG5leHBvcnQgY29uc3QgU0VDT05EQVJZX0NPTE9SX0NPTlRSQVNUID0gY29tbW9uWydibGFjayddXHJcbi8vIGV4cG9ydCBsZXQgUFJJTUFSWV9DT0xPUjogc3RyaW5nID0gcHJpbWFyeVsnOTAwJ11cclxuZXhwb3J0IGxldCBQUklNQVJZX0NPTE9SOiBzdHJpbmcgPSAnZ3JlZW4nIC8vJyMwMzJlNGUnXHJcbi8vIGV4cG9ydCBsZXQgUFJJTUFSWV9DT0xPUjogc3RyaW5nID0gJyMwMDQ2M2UnIHx8ICcjMDMyZTRlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFRPT0xCQVJfTUlOX0hFSUdIVCA9IDUwXHJcbmV4cG9ydCBjb25zdCBQUklNQVJZX0NPTE9SX0NPTlRSQVNUID0gY29tbW9uWydibGFjayddXHJcbmV4cG9ydCBjb25zdCBEQVJLX0NPTE9SID0gJyMwNDBjMTQnXHJcbmV4cG9ydCBjb25zdCBMSUdIVF9DT0xPUiA9IGNvbW1vblsnd2hpdGUnXVxyXG5leHBvcnQgY29uc3QgVEVSVElBUllfQ09MT1IgPSAnIzhjMmYyZicgLy8gJyMyMGJmYWQnXHJcbmV4cG9ydCBjb25zdCBURVJUSUFSWV9DT0xPUl9DT05UUkFTVCA9IGNvbW1vblsnd2hpdGUnXVxyXG5leHBvcnQgY29uc3QgREFSS19CQUNLR1JPVU5EX0NPTE9SID0gJyMzMDMwMzAnXHJcbmNvbnN0IEJPUkRFUl9SQURJT1VTID0gNFxyXG5cclxuLy9Db29sIEdyZWVuIC8jMzhiNTg0XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRoZW1lKHByZWZlcnNEYXJrTW9kZSA9IGZhbHNlKSB7XHJcbiAgLy8gUFJJTUFSWV9DT0xPUiA9IHByZWZlcnNEYXJrTW9kZSA/IFwiIzMxOWRkZlwiIDogcHJpbWFyeVs5MDBdO1xyXG4gIFBSSU1BUllfQ09MT1IgPSBwcmVmZXJzRGFya01vZGUgPyAnIzA0MGMxNCcgOiBQUklNQVJZX0NPTE9SXHJcbiAgU0VDT05EQVJZX0NPTE9SID0gcHJlZmVyc0RhcmtNb2RlID8gJ3JnYigxIDUxIDQ1KScgOiBTRUNPTkRBUllfQ09MT1JcclxuICBjb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcclxuICAgIHN0YXR1czoge1xyXG4gICAgICBkYW5nZXI6IHJlZFs1MDBdLFxyXG4gICAgfSxcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgdHlwZTogcHJlZmVyc0RhcmtNb2RlID8gJ2RhcmsnIDogJ2xpZ2h0JyxcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIG1haW46IFBSSU1BUllfQ09MT1IsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiBQUklNQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBtYWluOiBTRUNPTkRBUllfQ09MT1IsXHJcblxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogU0VDT05EQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgICB9LFxyXG4gICAgICB0ZXJ0aWFyeToge1xyXG4gICAgICAgIG1haW46IFRFUlRJQVJZX0NPTE9SLFxyXG4gICAgICAgIGRhcms6ICcjOTE0MzQ1JyxcclxuICAgICAgICBsaWdodDogJyNmOWEwOWUnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogVEVSVElBUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IHtcclxuICAgICAgICAuLi5ncmVlbixcclxuICAgICAgICBtYWluOiAnIzMxNjUwMycsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICAvLyBkZWZhdWx0OiBcIiMzMDMwMzBcIixcclxuICAgICAgICBkZWZhdWx0OiBwcmVmZXJzRGFya01vZGUgPyAnIzI3MjUyNScgOiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2hhcGU6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiBCT1JERVJfUkFESU9VUyxcclxuICAgIH0sXHJcbiAgICBzcGFjaW5nOiAxNixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIE11aVBhcGVyOiB7XHJcbiAgICAgICAgZWxldmF0aW9uOiAzLFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlUZXh0RmllbGQ6IHtcclxuICAgICAgICBJbnB1dExhYmVsUHJvcHM6IHtcclxuICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlCdXR0b246IHtcclxuICAgICAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlDaGVja2JveDoge1xyXG4gICAgICAgIGRpc2FibGVSaXBwbGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgb3ZlcnJpZGVzOiB7XHJcbiAgICAgIE11aVBhcGVyOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgY29sb3I6IHByZWZlcnNEYXJrTW9kZSA/ICcjZDJkMmQyJyA6IGNvbW1vblsnd2hpdGUnXSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJlZmVyc0RhcmtNb2RlID8gJyMyYzJjMmMnIDogREFSS19CQUNLR1JPVU5EX0NPTE9SLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aU1vYmlsZVN0ZXBwZXI6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbkJvdHRvbToge1xyXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpQXBwQmFyOiB7XHJcbiAgICAgICAgcG9zaXRpb25GaXhlZDoge1xyXG4gICAgICAgICAgekluZGV4OiAxMTAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aVRvb2xiYXI6IHtcclxuICAgICAgICBndXR0ZXJzOiB7XHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgICdAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpJzoge1xyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWd1bGFyOiB7XHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgICdAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpJzoge1xyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgICdAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpJzoge1xyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpRmlsbGVkSW5wdXQ6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpSW5wdXRMYWJlbDoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlCdXR0b246IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSlcclxuXHJcbiAgdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeSA9IHRoZW1lLnBhbGV0dGUuYXVnbWVudENvbG9yKHtcclxuICAgIG1haW46ICcjYzQ3MDcwJyxcclxuICAgIGRhcms6ICcjOTE0MzQ1JyxcclxuICAgIGxpZ2h0OiAnI2Y5YTA5ZScsXHJcbiAgICBjb250cmFzdFRleHQ6IFBSSU1BUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgfSlcclxuICByZXR1cm4gdGhlbWVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0eWxlZENvbXBvbmVudHNUaGVtZTogRGVmYXVsdFRoZW1lID0ge1xyXG4gIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgY29sb3JzOiB7XHJcbiAgICBwcmltYXJ5OiBQUklNQVJZX0NPTE9SLFxyXG4gICAgcHJpbWFyeUNvbnRyYXN0OiBQUklNQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgc2Vjb25kYXJ5OiBTRUNPTkRBUllfQ09MT1IsXHJcbiAgICBzZWNvbmRhcnlDb250cmFzdDogU0VDT05EQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgdGVydGlhcnk6IFRFUlRJQVJZX0NPTE9SLFxyXG4gICAgdGVydGlhcnlDb250cmFzdDogVEVSVElBUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICBkYXJrOiBEQVJLX0NPTE9SLFxyXG4gICAgbGlnaHQ6IExJR0hUX0NPTE9SLFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFN0eWxlZENvbXBvbmVudENvbG9yS2V5ID0ga2V5b2YgRGVmYXVsdFRoZW1lWydjb2xvcnMnXVxyXG4iXSwic291cmNlUm9vdCI6IiJ9