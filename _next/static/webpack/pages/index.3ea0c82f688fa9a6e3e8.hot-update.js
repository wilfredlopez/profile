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

let PRIMARY_COLOR = '#032e4e'; // export let PRIMARY_COLOR: string = '#00463e' || '#032e4e'

const TOOLBAR_MIN_HEIGHT = 50;
const PRIMARY_COLOR_CONTRAST = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['black'];
const DARK_COLOR = '#040c14';
const LIGHT_COLOR = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['white'];
const TERTIARY_COLOR = '#317fd0'; // '#8c2f2f' // '#20bfad'

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL2dldFRoZW1lLnRzIl0sIm5hbWVzIjpbIlNFQ09OREFSWV9DT0xPUiIsImNvbW1vbiIsIlNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCIsIlBSSU1BUllfQ09MT1IiLCJUT09MQkFSX01JTl9IRUlHSFQiLCJQUklNQVJZX0NPTE9SX0NPTlRSQVNUIiwiREFSS19DT0xPUiIsIkxJR0hUX0NPTE9SIiwiVEVSVElBUllfQ09MT1IiLCJURVJUSUFSWV9DT0xPUl9DT05UUkFTVCIsIkRBUktfQkFDS0dST1VORF9DT0xPUiIsIkJPUkRFUl9SQURJT1VTIiwiZ2V0VGhlbWUiLCJwcmVmZXJzRGFya01vZGUiLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwic3RhdHVzIiwiZGFuZ2VyIiwicmVkIiwicGFsZXR0ZSIsInR5cGUiLCJwcmltYXJ5IiwibWFpbiIsImNvbnRyYXN0VGV4dCIsInNlY29uZGFyeSIsInRlcnRpYXJ5IiwiZGFyayIsImxpZ2h0Iiwic3VjY2VzcyIsImdyZWVuIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsInNwYWNpbmciLCJwcm9wcyIsIk11aVBhcGVyIiwiZWxldmF0aW9uIiwiTXVpVGV4dEZpZWxkIiwiSW5wdXRMYWJlbFByb3BzIiwic2hyaW5rIiwiTXVpQnV0dG9uIiwiZGlzYWJsZVJpcHBsZSIsIk11aUNoZWNrYm94Iiwib3ZlcnJpZGVzIiwicm9vdCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiTXVpTW9iaWxlU3RlcHBlciIsInBvc2l0aW9uQm90dG9tIiwicG9zaXRpb24iLCJNdWlBcHBCYXIiLCJwb3NpdGlvbkZpeGVkIiwiekluZGV4IiwiTXVpVG9vbGJhciIsImd1dHRlcnMiLCJtaW5IZWlnaHQiLCJyZWd1bGFyIiwiTXVpRmlsbGVkSW5wdXQiLCJNdWlJbnB1dExhYmVsIiwidGV4dFRyYW5zZm9ybSIsImF1Z21lbnRDb2xvciIsInN0eWxlZENvbXBvbmVudHNUaGVtZSIsImNvbG9ycyIsInByaW1hcnlDb250cmFzdCIsInNlY29uZGFyeUNvbnRyYXN0IiwidGVydGlhcnlDb250cmFzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUVPLElBQUlBLGVBQXVCLEdBQUdDLCtEQUFNLENBQUMsT0FBRCxDQUFwQyxDLENBQThDOztBQUM5QyxNQUFNQyx3QkFBd0IsR0FBR0QsK0RBQU0sQ0FBQyxPQUFELENBQXZDLEMsQ0FDUDs7QUFDTyxJQUFJRSxhQUFxQixHQUFHLFNBQTVCLEMsQ0FDUDs7QUFFTyxNQUFNQyxrQkFBa0IsR0FBRyxFQUEzQjtBQUNBLE1BQU1DLHNCQUFzQixHQUFHSiwrREFBTSxDQUFDLE9BQUQsQ0FBckM7QUFDQSxNQUFNSyxVQUFVLEdBQUcsU0FBbkI7QUFDQSxNQUFNQyxXQUFXLEdBQUdOLCtEQUFNLENBQUMsT0FBRCxDQUExQjtBQUNBLE1BQU1PLGNBQWMsR0FBRyxTQUF2QixDLENBQWlDOztBQUNqQyxNQUFNQyx1QkFBdUIsR0FBR1IsK0RBQU0sQ0FBQyxPQUFELENBQXRDO0FBQ0EsTUFBTVMscUJBQXFCLEdBQUcsU0FBOUI7QUFDUCxNQUFNQyxjQUFjLEdBQUcsQ0FBdkIsQyxDQUVBOztBQUNlLFNBQVNDLFFBQVQsQ0FBa0JDLGVBQWUsR0FBRyxLQUFwQyxFQUEyQztBQUN4RDtBQUNBVixlQUFhLEdBQUdVLGVBQWUsR0FBRyxTQUFILEdBQWVWLGFBQTlDO0FBQ0FILGlCQUFlLEdBQUdhLGVBQWUsR0FBRyxjQUFILEdBQW9CYixlQUFyRDtBQUNBLFFBQU1jLEtBQUssR0FBR0MsK0VBQWMsQ0FBQztBQUMzQkMsVUFBTSxFQUFFO0FBQ05DLFlBQU0sRUFBRUMsNERBQUcsQ0FBQyxHQUFEO0FBREwsS0FEbUI7QUFJM0JDLFdBQU8sRUFBRTtBQUNQQyxVQUFJLEVBQUVQLGVBQWUsR0FBRyxNQUFILEdBQVksT0FEMUI7QUFFUFEsYUFBTyxFQUFFO0FBQ1BDLFlBQUks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QUVsQixhQURIO0FBRU42RCxtQkFBZSxFQUFFM0Qsc0JBRlg7QUFHTm1CLGFBQVMsRUFBRXhCLGVBSEw7QUFJTmlFLHFCQUFpQixFQUFFL0Qsd0JBSmI7QUFLTnVCLFlBQVEsRUFBRWpCLGNBTEo7QUFNTjBELG9CQUFnQixFQUFFekQsdUJBTlo7QUFPTmlCLFFBQUksRUFBRXBCLFVBUEE7QUFRTnFCLFNBQUssRUFBRXBCO0FBUkQ7QUFGeUMsQ0FBNUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2VhMGM4MmY2ODhmYTlhNmUzZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbW1vbiwgZ3JlZW4sIHJlZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuLy8gaW1wb3J0IHNlY29uZGFyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvdGVhbCdcclxuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IERlZmF1bHRUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5leHBvcnQgbGV0IFNFQ09OREFSWV9DT0xPUjogc3RyaW5nID0gY29tbW9uWyd3aGl0ZSddIC8vIHNlY29uZGFyeVs3MDBdXHJcbmV4cG9ydCBjb25zdCBTRUNPTkRBUllfQ09MT1JfQ09OVFJBU1QgPSBjb21tb25bJ2JsYWNrJ11cclxuLy8gZXhwb3J0IGxldCBQUklNQVJZX0NPTE9SOiBzdHJpbmcgPSBwcmltYXJ5Wyc5MDAnXVxyXG5leHBvcnQgbGV0IFBSSU1BUllfQ09MT1I6IHN0cmluZyA9ICcjMDMyZTRlJ1xyXG4vLyBleHBvcnQgbGV0IFBSSU1BUllfQ09MT1I6IHN0cmluZyA9ICcjMDA0NjNlJyB8fCAnIzAzMmU0ZSdcclxuXHJcbmV4cG9ydCBjb25zdCBUT09MQkFSX01JTl9IRUlHSFQgPSA1MFxyXG5leHBvcnQgY29uc3QgUFJJTUFSWV9DT0xPUl9DT05UUkFTVCA9IGNvbW1vblsnYmxhY2snXVxyXG5leHBvcnQgY29uc3QgREFSS19DT0xPUiA9ICcjMDQwYzE0J1xyXG5leHBvcnQgY29uc3QgTElHSFRfQ09MT1IgPSBjb21tb25bJ3doaXRlJ11cclxuZXhwb3J0IGNvbnN0IFRFUlRJQVJZX0NPTE9SID0gJyMzMTdmZDAnIC8vICcjOGMyZjJmJyAvLyAnIzIwYmZhZCdcclxuZXhwb3J0IGNvbnN0IFRFUlRJQVJZX0NPTE9SX0NPTlRSQVNUID0gY29tbW9uWyd3aGl0ZSddXHJcbmV4cG9ydCBjb25zdCBEQVJLX0JBQ0tHUk9VTkRfQ09MT1IgPSAnIzMwMzAzMCdcclxuY29uc3QgQk9SREVSX1JBRElPVVMgPSA0XHJcblxyXG4vL0Nvb2wgR3JlZW4gLyMzOGI1ODRcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGhlbWUocHJlZmVyc0RhcmtNb2RlID0gZmFsc2UpIHtcclxuICAvLyBQUklNQVJZX0NPTE9SID0gcHJlZmVyc0RhcmtNb2RlID8gXCIjMzE5ZGRmXCIgOiBwcmltYXJ5WzkwMF07XHJcbiAgUFJJTUFSWV9DT0xPUiA9IHByZWZlcnNEYXJrTW9kZSA/ICcjMDQwYzE0JyA6IFBSSU1BUllfQ09MT1JcclxuICBTRUNPTkRBUllfQ09MT1IgPSBwcmVmZXJzRGFya01vZGUgPyAncmdiKDEgNTEgNDUpJyA6IFNFQ09OREFSWV9DT0xPUlxyXG4gIGNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gICAgc3RhdHVzOiB7XHJcbiAgICAgIGRhbmdlcjogcmVkWzUwMF0sXHJcbiAgICB9LFxyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICB0eXBlOiBwcmVmZXJzRGFya01vZGUgPyAnZGFyaycgOiAnbGlnaHQnLFxyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbWFpbjogUFJJTUFSWV9DT0xPUixcclxuICAgICAgICBjb250cmFzdFRleHQ6IFBSSU1BUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIG1haW46IFNFQ09OREFSWV9DT0xPUixcclxuXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiBTRUNPTkRBUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRlcnRpYXJ5OiB7XHJcbiAgICAgICAgbWFpbjogVEVSVElBUllfQ09MT1IsXHJcbiAgICAgICAgZGFyazogJyM5MTQzNDUnLFxyXG4gICAgICAgIGxpZ2h0OiAnI2Y5YTA5ZScsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiBURVJUSUFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgICAgfSxcclxuICAgICAgc3VjY2Vzczoge1xyXG4gICAgICAgIC4uLmdyZWVuLFxyXG4gICAgICAgIG1haW46ICcjMzE2NTAzJyxcclxuICAgICAgfSxcclxuICAgICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgIC8vIGRlZmF1bHQ6IFwiIzMwMzAzMFwiLFxyXG4gICAgICAgIGRlZmF1bHQ6IHByZWZlcnNEYXJrTW9kZSA/ICcjMjcyNTI1JyA6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzaGFwZToge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IEJPUkRFUl9SQURJT1VTLFxyXG4gICAgfSxcclxuICAgIHNwYWNpbmc6IDE2LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgTXVpUGFwZXI6IHtcclxuICAgICAgICBlbGV2YXRpb246IDMsXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aVRleHRGaWVsZDoge1xyXG4gICAgICAgIElucHV0TGFiZWxQcm9wczoge1xyXG4gICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUJ1dHRvbjoge1xyXG4gICAgICAgIGRpc2FibGVSaXBwbGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUNoZWNrYm94OiB7XHJcbiAgICAgICAgZGlzYWJsZVJpcHBsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBvdmVycmlkZXM6IHtcclxuICAgICAgTXVpUGFwZXI6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBjb2xvcjogcHJlZmVyc0RhcmtNb2RlID8gJyNkMmQyZDInIDogY29tbW9uWyd3aGl0ZSddLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcmVmZXJzRGFya01vZGUgPyAnIzJjMmMyYycgOiBEQVJLX0JBQ0tHUk9VTkRfQ09MT1IsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpTW9iaWxlU3RlcHBlcjoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uQm90dG9tOiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlBcHBCYXI6IHtcclxuICAgICAgICBwb3NpdGlvbkZpeGVkOiB7XHJcbiAgICAgICAgICB6SW5kZXg6IDExMDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpVG9vbGJhcjoge1xyXG4gICAgICAgIGd1dHRlcnM6IHtcclxuICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgJ0BtZWRpYSAobWluLXdpZHRoOiA2MDBweCknOiB7XHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZ3VsYXI6IHtcclxuICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgJ0BtZWRpYSAobWluLXdpZHRoOiA2MDBweCknOiB7XHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgJ0BtZWRpYSAobWluLXdpZHRoOiA2MDBweCknOiB7XHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlGaWxsZWRJbnB1dDoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlJbnB1dExhYmVsOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUJ1dHRvbjoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KVxyXG5cclxuICB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5ID0gdGhlbWUucGFsZXR0ZS5hdWdtZW50Q29sb3Ioe1xyXG4gICAgbWFpbjogJyNjNDcwNzAnLFxyXG4gICAgZGFyazogJyM5MTQzNDUnLFxyXG4gICAgbGlnaHQ6ICcjZjlhMDllJyxcclxuICAgIGNvbnRyYXN0VGV4dDogUFJJTUFSWV9DT0xPUl9DT05UUkFTVCxcclxuICB9KVxyXG4gIHJldHVybiB0aGVtZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3R5bGVkQ29tcG9uZW50c1RoZW1lOiBEZWZhdWx0VGhlbWUgPSB7XHJcbiAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICBjb2xvcnM6IHtcclxuICAgIHByaW1hcnk6IFBSSU1BUllfQ09MT1IsXHJcbiAgICBwcmltYXJ5Q29udHJhc3Q6IFBSSU1BUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICBzZWNvbmRhcnk6IFNFQ09OREFSWV9DT0xPUixcclxuICAgIHNlY29uZGFyeUNvbnRyYXN0OiBTRUNPTkRBUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICB0ZXJ0aWFyeTogVEVSVElBUllfQ09MT1IsXHJcbiAgICB0ZXJ0aWFyeUNvbnRyYXN0OiBURVJUSUFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgIGRhcms6IERBUktfQ09MT1IsXHJcbiAgICBsaWdodDogTElHSFRfQ09MT1IsXHJcbiAgfSxcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU3R5bGVkQ29tcG9uZW50Q29sb3JLZXkgPSBrZXlvZiBEZWZhdWx0VGhlbWVbJ2NvbG9ycyddXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=