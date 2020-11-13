webpackHotUpdate_N_E("pages/_app",{

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
let PRIMARY_COLOR = '#f25022'; //'#af6800' //'#b73e35' // primary[700] // '#032e4e'

const PRIMARY_COLOR_CONTRAST = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['white'];
const TOOLBAR_MIN_HEIGHT = 50;
const DARK_COLOR = '#040c14';
const LIGHT_COLOR = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['white'];
const TERTIARY_COLOR = '#ff9800'; // '#76b9ff' // '#8c2f2f' // '#20bfad'

const TERTIARY_COLOR_CONTRAST = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['white'];
const DARK_BACKGROUND_COLOR = '#424242'; //'#303030'

const BORDER_RADIOUS = 4; //Cool Green #38b584 or #76b9ff

function getTheme(_prefersDarkMode = false) {
  const prefersDarkMode = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL2dldFRoZW1lLnRzIl0sIm5hbWVzIjpbIlNFQ09OREFSWV9DT0xPUiIsInNlY29uZGFyeSIsIlNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCIsImNvbW1vbiIsIlBSSU1BUllfQ09MT1IiLCJQUklNQVJZX0NPTE9SX0NPTlRSQVNUIiwiVE9PTEJBUl9NSU5fSEVJR0hUIiwiREFSS19DT0xPUiIsIkxJR0hUX0NPTE9SIiwiVEVSVElBUllfQ09MT1IiLCJURVJUSUFSWV9DT0xPUl9DT05UUkFTVCIsIkRBUktfQkFDS0dST1VORF9DT0xPUiIsIkJPUkRFUl9SQURJT1VTIiwiZ2V0VGhlbWUiLCJfcHJlZmVyc0RhcmtNb2RlIiwicHJlZmVyc0RhcmtNb2RlIiwidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInN0YXR1cyIsInJlZCIsImRhbmdlciIsInBhbGV0dGUiLCJ0eXBlIiwicHJpbWFyeSIsIm1haW4iLCJjb250cmFzdFRleHQiLCJ0ZXJ0aWFyeSIsImRhcmsiLCJsaWdodCIsInN1Y2Nlc3MiLCJncmVlbiIsImJhY2tncm91bmQiLCJkZWZhdWx0Iiwic2hhcGUiLCJib3JkZXJSYWRpdXMiLCJzcGFjaW5nIiwicHJvcHMiLCJNdWlQYXBlciIsImVsZXZhdGlvbiIsIk11aVRleHRGaWVsZCIsIklucHV0TGFiZWxQcm9wcyIsInNocmluayIsIk11aUJ1dHRvbiIsImRpc2FibGVSaXBwbGUiLCJNdWlDaGVja2JveCIsIm92ZXJyaWRlcyIsInJvb3QiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsIk11aU1vYmlsZVN0ZXBwZXIiLCJwb3NpdGlvbkJvdHRvbSIsInBvc2l0aW9uIiwiTXVpQXBwQmFyIiwicG9zaXRpb25GaXhlZCIsInpJbmRleCIsIk11aVRvb2xiYXIiLCJndXR0ZXJzIiwibWluSGVpZ2h0IiwicmVndWxhciIsIk11aUZpbGxlZElucHV0IiwiTXVpSW5wdXRMYWJlbCIsInRleHRUcmFuc2Zvcm0iLCJhdWdtZW50Q29sb3IiLCJzdHlsZWRDb21wb25lbnRzVGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5Q29udHJhc3QiLCJzZWNvbmRhcnlDb250cmFzdCIsInRlcnRpYXJ5Q29udHJhc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBR08sSUFBSUEsZUFBdUIsR0FBR0Msb0VBQVMsQ0FBQyxLQUFELENBQXZDLEMsQ0FBK0M7O0FBQy9DLE1BQU1DLHdCQUF3QixHQUFHQywrREFBTSxDQUFDLE9BQUQsQ0FBdkM7QUFFQSxJQUFJQyxhQUFxQixHQUFHLFNBQTVCLEMsQ0FBc0M7O0FBQ3RDLE1BQU1DLHNCQUFzQixHQUFHRiwrREFBTSxDQUFDLE9BQUQsQ0FBckM7QUFFQSxNQUFNRyxrQkFBa0IsR0FBRyxFQUEzQjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxTQUFuQjtBQUNBLE1BQU1DLFdBQVcsR0FBR0wsK0RBQU0sQ0FBQyxPQUFELENBQTFCO0FBQ0EsTUFBTU0sY0FBYyxHQUFHLFNBQXZCLEMsQ0FBaUM7O0FBQ2pDLE1BQU1DLHVCQUF1QixHQUFHUCwrREFBTSxDQUFDLE9BQUQsQ0FBdEM7QUFDQSxNQUFNUSxxQkFBcUIsR0FBRyxTQUE5QixDLENBQXdDOztBQUMvQyxNQUFNQyxjQUFjLEdBQUcsQ0FBdkIsQyxDQUVBOztBQUNlLFNBQVNDLFFBQVQsQ0FBa0JDLGdCQUFnQixHQUFHLEtBQXJDLEVBQTRDO0FBQ3pELFFBQU1DLGVBQWUsR0FBRyxJQUF4QjtBQUNBWCxlQUFhLEdBQUdXLGVBQWUsR0FBRyxTQUFILEdBQWVYLGFBQTlDO0FBQ0FKLGlCQUFlLEdBQUdlLGVBQWUsR0FBRyxjQUFILEdBQW9CZixlQUFyRDtBQUVBLFFBQU1nQixLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDM0JDLFVBQU0sa0NBQ0RDLDREQURDO0FBRUpDLFlBQU0sRUFBRUQsNERBQUcsQ0FBQyxHQUFEO0FBRlAsTUFEcUI7QUFLM0JFLFdBQU8sRUFBRTtBQUNQQyxV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QyxHQUFHO0FBQ2pEN0IsY0FBWSxFQUFFLEtBRG1DO0FBRWpEOEIsUUFBTSxFQUFFO0FBQ056QyxXQUFPLEVBQUVuQixhQURIO0FBRU42RCxtQkFBZSxFQUFFNUQsc0JBRlg7QUFHTkosYUFBUyxFQUFFRCxlQUhMO0FBSU5rRSxxQkFBaUIsRUFBRWhFLHdCQUpiO0FBS053QixZQUFRLEVBQUVqQixjQUxKO0FBTU4wRCxvQkFBZ0IsRUFBRXpELHVCQU5aO0FBT05pQixRQUFJLEVBQUVwQixVQVBBO0FBUU5xQixTQUFLLEVBQUVwQjtBQVJEO0FBRnlDLENBQTVDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZTQ1OTRmNmFiOTc1ZGJiODE1MzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbW1vbiwgZ3JlZW4sIHJlZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuLy8gaW1wb3J0IHByaW1hcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3RlYWwnXHJcbmltcG9ydCBzZWNvbmRhcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2JsdWUnXHJcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBEZWZhdWx0VGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBsZXQgU0VDT05EQVJZX0NPTE9SOiBzdHJpbmcgPSBzZWNvbmRhcnlbJzIwMCddIC8vIGNvbW1vblsnd2hpdGUnXSAvL1xyXG5leHBvcnQgY29uc3QgU0VDT05EQVJZX0NPTE9SX0NPTlRSQVNUID0gY29tbW9uWydibGFjayddXHJcblxyXG5leHBvcnQgbGV0IFBSSU1BUllfQ09MT1I6IHN0cmluZyA9ICcjZjI1MDIyJyAvLycjYWY2ODAwJyAvLycjYjczZTM1JyAvLyBwcmltYXJ5WzcwMF0gLy8gJyMwMzJlNGUnXHJcbmV4cG9ydCBjb25zdCBQUklNQVJZX0NPTE9SX0NPTlRSQVNUID0gY29tbW9uWyd3aGl0ZSddXHJcblxyXG5leHBvcnQgY29uc3QgVE9PTEJBUl9NSU5fSEVJR0hUID0gNTBcclxuZXhwb3J0IGNvbnN0IERBUktfQ09MT1IgPSAnIzA0MGMxNCdcclxuZXhwb3J0IGNvbnN0IExJR0hUX0NPTE9SID0gY29tbW9uWyd3aGl0ZSddXHJcbmV4cG9ydCBjb25zdCBURVJUSUFSWV9DT0xPUiA9ICcjZmY5ODAwJyAvLyAnIzc2YjlmZicgLy8gJyM4YzJmMmYnIC8vICcjMjBiZmFkJ1xyXG5leHBvcnQgY29uc3QgVEVSVElBUllfQ09MT1JfQ09OVFJBU1QgPSBjb21tb25bJ3doaXRlJ11cclxuZXhwb3J0IGNvbnN0IERBUktfQkFDS0dST1VORF9DT0xPUiA9ICcjNDI0MjQyJyAvLycjMzAzMDMwJ1xyXG5jb25zdCBCT1JERVJfUkFESU9VUyA9IDRcclxuXHJcbi8vQ29vbCBHcmVlbiAjMzhiNTg0IG9yICM3NmI5ZmZcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGhlbWUoX3ByZWZlcnNEYXJrTW9kZSA9IGZhbHNlKSB7XHJcbiAgY29uc3QgcHJlZmVyc0RhcmtNb2RlID0gdHJ1ZVxyXG4gIFBSSU1BUllfQ09MT1IgPSBwcmVmZXJzRGFya01vZGUgPyAnIzA0MGMxNCcgOiBQUklNQVJZX0NPTE9SXHJcbiAgU0VDT05EQVJZX0NPTE9SID0gcHJlZmVyc0RhcmtNb2RlID8gJ3JnYigxIDUxIDQ1KScgOiBTRUNPTkRBUllfQ09MT1JcclxuXHJcbiAgY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgICBzdGF0dXM6IHtcclxuICAgICAgLi4ucmVkLFxyXG4gICAgICBkYW5nZXI6IHJlZFs1MDBdLFxyXG4gICAgfSxcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgdHlwZTogcHJlZmVyc0RhcmtNb2RlID8gJ2RhcmsnIDogJ2xpZ2h0JyxcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIG1haW46IFBSSU1BUllfQ09MT1IsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiBQUklNQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBtYWluOiBTRUNPTkRBUllfQ09MT1IsXHJcblxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogU0VDT05EQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgICB9LFxyXG4gICAgICB0ZXJ0aWFyeToge1xyXG4gICAgICAgIG1haW46IFRFUlRJQVJZX0NPTE9SLFxyXG4gICAgICAgIGRhcms6ICcjOTE0MzQ1JyxcclxuICAgICAgICBsaWdodDogJyNmOWEwOWUnLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogVEVSVElBUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IHtcclxuICAgICAgICAuLi5ncmVlbixcclxuICAgICAgICBtYWluOiAnIzMxNjUwMycsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICAvLyBkZWZhdWx0OiBcIiMzMDMwMzBcIixcclxuICAgICAgICBkZWZhdWx0OiBwcmVmZXJzRGFya01vZGUgPyAnIzI3MjUyNScgOiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2hhcGU6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiBCT1JERVJfUkFESU9VUyxcclxuICAgIH0sXHJcbiAgICBzcGFjaW5nOiAxNixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIE11aVBhcGVyOiB7XHJcbiAgICAgICAgZWxldmF0aW9uOiAzLFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlUZXh0RmllbGQ6IHtcclxuICAgICAgICBJbnB1dExhYmVsUHJvcHM6IHtcclxuICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlCdXR0b246IHtcclxuICAgICAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlDaGVja2JveDoge1xyXG4gICAgICAgIGRpc2FibGVSaXBwbGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgb3ZlcnJpZGVzOiB7XHJcbiAgICAgIE11aVBhcGVyOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgY29sb3I6IHByZWZlcnNEYXJrTW9kZSA/ICcjZDJkMmQyJyA6IGNvbW1vblsnd2hpdGUnXSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJlZmVyc0RhcmtNb2RlID8gJyMyYzJjMmMnIDogREFSS19CQUNLR1JPVU5EX0NPTE9SLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aU1vYmlsZVN0ZXBwZXI6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbkJvdHRvbToge1xyXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpQXBwQmFyOiB7XHJcbiAgICAgICAgcG9zaXRpb25GaXhlZDoge1xyXG4gICAgICAgICAgekluZGV4OiAxMTAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aVRvb2xiYXI6IHtcclxuICAgICAgICBndXR0ZXJzOiB7XHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgICdAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpJzoge1xyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWd1bGFyOiB7XHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgICdAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpJzoge1xyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgICdAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpJzoge1xyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpRmlsbGVkSW5wdXQ6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpSW5wdXRMYWJlbDoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlCdXR0b246IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSlcclxuXHJcbiAgdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeSA9IHRoZW1lLnBhbGV0dGUuYXVnbWVudENvbG9yKHtcclxuICAgIG1haW46ICcjYzQ3MDcwJyxcclxuICAgIGRhcms6ICcjOTE0MzQ1JyxcclxuICAgIGxpZ2h0OiAnI2Y5YTA5ZScsXHJcbiAgICBjb250cmFzdFRleHQ6IFBSSU1BUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgfSlcclxuICByZXR1cm4gdGhlbWVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0eWxlZENvbXBvbmVudHNUaGVtZTogRGVmYXVsdFRoZW1lID0ge1xyXG4gIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgY29sb3JzOiB7XHJcbiAgICBwcmltYXJ5OiBQUklNQVJZX0NPTE9SLFxyXG4gICAgcHJpbWFyeUNvbnRyYXN0OiBQUklNQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgc2Vjb25kYXJ5OiBTRUNPTkRBUllfQ09MT1IsXHJcbiAgICBzZWNvbmRhcnlDb250cmFzdDogU0VDT05EQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgdGVydGlhcnk6IFRFUlRJQVJZX0NPTE9SLFxyXG4gICAgdGVydGlhcnlDb250cmFzdDogVEVSVElBUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICBkYXJrOiBEQVJLX0NPTE9SLFxyXG4gICAgbGlnaHQ6IExJR0hUX0NPTE9SLFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFN0eWxlZENvbXBvbmVudENvbG9yS2V5ID0ga2V5b2YgRGVmYXVsdFRoZW1lWydjb2xvcnMnXVxyXG4iXSwic291cmNlUm9vdCI6IiJ9