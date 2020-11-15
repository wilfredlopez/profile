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



let SECONDARY_COLOR = _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_2___default.a['500']; // common['white'] //

const SECONDARY_COLOR_CONTRAST = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['black'];
let PRIMARY_COLOR = '#f25022'; //'#af6800' //'#b73e35' // primary[700] // '#032e4e'

const PRIMARY_COLOR_CONTRAST = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['white'];
const TOOLBAR_MIN_HEIGHT = 50; // export const DARK_COLOR = '#040c14'

let DARK_COLOR = '#ffffff';
let LIGHT_COLOR = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['black'];
const TERTIARY_COLOR = '#ff6c42'; //'#ff9800' // '#76b9ff' // '#8c2f2f' // '#20bfad'

const TERTIARY_COLOR_CONTRAST = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['white'];
const DARK_BACKGROUND_COLOR = '#424242'; //'#303030'

const BORDER_RADIOUS = 4; //Cool Green #38b584 or #76b9ff

function getTheme(prefersDarkMode = false) {
  // const prefersDarkMode = true
  PRIMARY_COLOR = prefersDarkMode ? '#040c14' : PRIMARY_COLOR;
  SECONDARY_COLOR = prefersDarkMode ? 'rgb(145 45 17)' : SECONDARY_COLOR;
  LIGHT_COLOR = prefersDarkMode ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['white'] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['black'];
  DARK_COLOR = prefersDarkMode ? '#040c14' : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['white'];
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
        default: LIGHT_COLOR
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL2dldFRoZW1lLnRzIl0sIm5hbWVzIjpbIlNFQ09OREFSWV9DT0xPUiIsInNlY29uZGFyeSIsIlNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCIsImNvbW1vbiIsIlBSSU1BUllfQ09MT1IiLCJQUklNQVJZX0NPTE9SX0NPTlRSQVNUIiwiVE9PTEJBUl9NSU5fSEVJR0hUIiwiREFSS19DT0xPUiIsIkxJR0hUX0NPTE9SIiwiVEVSVElBUllfQ09MT1IiLCJURVJUSUFSWV9DT0xPUl9DT05UUkFTVCIsIkRBUktfQkFDS0dST1VORF9DT0xPUiIsIkJPUkRFUl9SQURJT1VTIiwiZ2V0VGhlbWUiLCJwcmVmZXJzRGFya01vZGUiLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwic3RhdHVzIiwicmVkIiwiZGFuZ2VyIiwicGFsZXR0ZSIsInR5cGUiLCJwcmltYXJ5IiwibWFpbiIsImNvbnRyYXN0VGV4dCIsInRlcnRpYXJ5IiwiZGFyayIsImxpZ2h0Iiwic3VjY2VzcyIsImdyZWVuIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsInNwYWNpbmciLCJwcm9wcyIsIk11aVBhcGVyIiwiZWxldmF0aW9uIiwiTXVpVGV4dEZpZWxkIiwiSW5wdXRMYWJlbFByb3BzIiwic2hyaW5rIiwiTXVpQnV0dG9uIiwiZGlzYWJsZVJpcHBsZSIsIk11aUNoZWNrYm94Iiwib3ZlcnJpZGVzIiwicm9vdCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiTXVpTW9iaWxlU3RlcHBlciIsInBvc2l0aW9uQm90dG9tIiwicG9zaXRpb24iLCJNdWlBcHBCYXIiLCJwb3NpdGlvbkZpeGVkIiwiekluZGV4IiwiTXVpVG9vbGJhciIsImd1dHRlcnMiLCJtaW5IZWlnaHQiLCJyZWd1bGFyIiwiTXVpRmlsbGVkSW5wdXQiLCJNdWlJbnB1dExhYmVsIiwidGV4dFRyYW5zZm9ybSIsImF1Z21lbnRDb2xvciIsInN0eWxlZENvbXBvbmVudHNUaGVtZSIsImNvbG9ycyIsInByaW1hcnlDb250cmFzdCIsInNlY29uZGFyeUNvbnRyYXN0IiwidGVydGlhcnlDb250cmFzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFHTyxJQUFJQSxlQUF1QixHQUFHQyxvRUFBUyxDQUFDLEtBQUQsQ0FBdkMsQyxDQUErQzs7QUFDL0MsTUFBTUMsd0JBQXdCLEdBQUdDLCtEQUFNLENBQUMsT0FBRCxDQUF2QztBQUVBLElBQUlDLGFBQXFCLEdBQUcsU0FBNUIsQyxDQUFzQzs7QUFDdEMsTUFBTUMsc0JBQXNCLEdBQUdGLCtEQUFNLENBQUMsT0FBRCxDQUFyQztBQUVBLE1BQU1HLGtCQUFrQixHQUFHLEVBQTNCLEMsQ0FDUDs7QUFDTyxJQUFJQyxVQUFVLEdBQUcsU0FBakI7QUFDQSxJQUFJQyxXQUFtQixHQUFHTCwrREFBTSxDQUFDLE9BQUQsQ0FBaEM7QUFDQSxNQUFNTSxjQUFjLEdBQUcsU0FBdkIsQyxDQUFpQzs7QUFDakMsTUFBTUMsdUJBQXVCLEdBQUdQLCtEQUFNLENBQUMsT0FBRCxDQUF0QztBQUNBLE1BQU1RLHFCQUFxQixHQUFHLFNBQTlCLEMsQ0FBd0M7O0FBQy9DLE1BQU1DLGNBQWMsR0FBRyxDQUF2QixDLENBRUE7O0FBQ2UsU0FBU0MsUUFBVCxDQUFrQkMsZUFBZSxHQUFHLEtBQXBDLEVBQTJDO0FBQ3hEO0FBQ0FWLGVBQWEsR0FBR1UsZUFBZSxHQUFHLFNBQUgsR0FBZVYsYUFBOUM7QUFDQUosaUJBQWUsR0FBR2MsZUFBZSxHQUFHLGdCQUFILEdBQXNCZCxlQUF2RDtBQUNBUSxhQUFXLEdBQUdNLGVBQWUsR0FBR1gsK0RBQU0sQ0FBQyxPQUFELENBQVQsR0FBcUJBLCtEQUFNLENBQUMsT0FBRCxDQUF4RDtBQUNBSSxZQUFVLEdBQUdPLGVBQWUsR0FBRyxTQUFILEdBQWVYLCtEQUFNLENBQUMsT0FBRCxDQUFqRDtBQUNBLFFBQU1ZLEtBQUssR0FBR0Ms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LFNBSDJDO0FBSWxESCxnQkFBWSxFQUFFbkI7QUFKb0MsR0FBM0IsQ0FBekI7QUFNQSxTQUFPVSxLQUFQO0FBQ0Q7QUFFTSxNQUFNK0MscUJBQW1DLEdBQUc7QUFDakQ3QixjQUFZLEVBQUUsS0FEbUM7QUFFakQ4QixRQUFNLEVBQUU7QUFDTnpDLFdBQU8sRUFBRWxCLGFBREg7QUFFTjRELG1CQUFlLEVBQUUzRCxzQkFGWDtBQUdOSixhQUFTLEVBQUVELGVBSEw7QUFJTmlFLHFCQUFpQixFQUFFL0Qsd0JBSmI7QUFLTnVCLFlBQVEsRUFBRWhCLGNBTEo7QUFNTnlELG9CQUFnQixFQUFFeEQsdUJBTlo7QUFPTmdCLFFBQUksRUFBRW5CLFVBUEE7QUFRTm9CLFNBQUssRUFBRW5CO0FBUkQ7QUFGeUMsQ0FBNUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTk5ZWQzZjg2ZThiNzQwNDc1Y2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbW1vbiwgZ3JlZW4sIHJlZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuLy8gaW1wb3J0IHByaW1hcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3RlYWwnXHJcbmltcG9ydCBzZWNvbmRhcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2JsdWUnXHJcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBEZWZhdWx0VGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBsZXQgU0VDT05EQVJZX0NPTE9SOiBzdHJpbmcgPSBzZWNvbmRhcnlbJzUwMCddIC8vIGNvbW1vblsnd2hpdGUnXSAvL1xyXG5leHBvcnQgY29uc3QgU0VDT05EQVJZX0NPTE9SX0NPTlRSQVNUID0gY29tbW9uWydibGFjayddXHJcblxyXG5leHBvcnQgbGV0IFBSSU1BUllfQ09MT1I6IHN0cmluZyA9ICcjZjI1MDIyJyAvLycjYWY2ODAwJyAvLycjYjczZTM1JyAvLyBwcmltYXJ5WzcwMF0gLy8gJyMwMzJlNGUnXHJcbmV4cG9ydCBjb25zdCBQUklNQVJZX0NPTE9SX0NPTlRSQVNUID0gY29tbW9uWyd3aGl0ZSddXHJcblxyXG5leHBvcnQgY29uc3QgVE9PTEJBUl9NSU5fSEVJR0hUID0gNTBcclxuLy8gZXhwb3J0IGNvbnN0IERBUktfQ09MT1IgPSAnIzA0MGMxNCdcclxuZXhwb3J0IGxldCBEQVJLX0NPTE9SID0gJyNmZmZmZmYnXHJcbmV4cG9ydCBsZXQgTElHSFRfQ09MT1I6IHN0cmluZyA9IGNvbW1vblsnYmxhY2snXVxyXG5leHBvcnQgY29uc3QgVEVSVElBUllfQ09MT1IgPSAnI2ZmNmM0MicgLy8nI2ZmOTgwMCcgLy8gJyM3NmI5ZmYnIC8vICcjOGMyZjJmJyAvLyAnIzIwYmZhZCdcclxuZXhwb3J0IGNvbnN0IFRFUlRJQVJZX0NPTE9SX0NPTlRSQVNUID0gY29tbW9uWyd3aGl0ZSddXHJcbmV4cG9ydCBjb25zdCBEQVJLX0JBQ0tHUk9VTkRfQ09MT1IgPSAnIzQyNDI0MicgLy8nIzMwMzAzMCdcclxuY29uc3QgQk9SREVSX1JBRElPVVMgPSA0XHJcblxyXG4vL0Nvb2wgR3JlZW4gIzM4YjU4NCBvciAjNzZiOWZmXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRoZW1lKHByZWZlcnNEYXJrTW9kZSA9IGZhbHNlKSB7XHJcbiAgLy8gY29uc3QgcHJlZmVyc0RhcmtNb2RlID0gdHJ1ZVxyXG4gIFBSSU1BUllfQ09MT1IgPSBwcmVmZXJzRGFya01vZGUgPyAnIzA0MGMxNCcgOiBQUklNQVJZX0NPTE9SXHJcbiAgU0VDT05EQVJZX0NPTE9SID0gcHJlZmVyc0RhcmtNb2RlID8gJ3JnYigxNDUgNDUgMTcpJyA6IFNFQ09OREFSWV9DT0xPUlxyXG4gIExJR0hUX0NPTE9SID0gcHJlZmVyc0RhcmtNb2RlID8gY29tbW9uWyd3aGl0ZSddIDogY29tbW9uWydibGFjayddXHJcbiAgREFSS19DT0xPUiA9IHByZWZlcnNEYXJrTW9kZSA/ICcjMDQwYzE0JyA6IGNvbW1vblsnd2hpdGUnXVxyXG4gIGNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gICAgc3RhdHVzOiB7XHJcbiAgICAgIC4uLnJlZCxcclxuICAgICAgZGFuZ2VyOiByZWRbNTAwXSxcclxuICAgIH0sXHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHR5cGU6IHByZWZlcnNEYXJrTW9kZSA/ICdkYXJrJyA6ICdsaWdodCcsXHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBtYWluOiBQUklNQVJZX0NPTE9SLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogUFJJTUFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbWFpbjogU0VDT05EQVJZX0NPTE9SLFxyXG5cclxuICAgICAgICBjb250cmFzdFRleHQ6IFNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgICAgfSxcclxuICAgICAgdGVydGlhcnk6IHtcclxuICAgICAgICBtYWluOiBURVJUSUFSWV9DT0xPUixcclxuICAgICAgICBkYXJrOiAnIzkxNDM0NScsXHJcbiAgICAgICAgbGlnaHQ6ICcjZjlhMDllJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6IFRFUlRJQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiB7XHJcbiAgICAgICAgLi4uZ3JlZW4sXHJcbiAgICAgICAgbWFpbjogJyMzMTY1MDMnLFxyXG4gICAgICB9LFxyXG4gICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgLy8gZGVmYXVsdDogXCIjMzAzMDMwXCIsXHJcbiAgICAgICAgZGVmYXVsdDogTElHSFRfQ09MT1IsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2hhcGU6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiBCT1JERVJfUkFESU9VUyxcclxuICAgIH0sXHJcbiAgICBzcGFjaW5nOiAxNixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIE11aVBhcGVyOiB7XHJcbiAgICAgICAgZWxldmF0aW9uOiAzLFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlUZXh0RmllbGQ6IHtcclxuICAgICAgICBJbnB1dExhYmVsUHJvcHM6IHtcclxuICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlCdXR0b246IHtcclxuICAgICAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlDaGVja2JveDoge1xyXG4gICAgICAgIGRpc2FibGVSaXBwbGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgb3ZlcnJpZGVzOiB7XHJcbiAgICAgIE11aVBhcGVyOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgY29sb3I6IHByZWZlcnNEYXJrTW9kZSA/ICcjZDJkMmQyJyA6IGNvbW1vblsnd2hpdGUnXSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJlZmVyc0RhcmtNb2RlID8gJyMyYzJjMmMnIDogREFSS19CQUNLR1JPVU5EX0NPTE9SLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aU1vYmlsZVN0ZXBwZXI6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbkJvdHRvbToge1xyXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpQXBwQmFyOiB7XHJcbiAgICAgICAgcG9zaXRpb25GaXhlZDoge1xyXG4gICAgICAgICAgekluZGV4OiAxMTAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aVRvb2xiYXI6IHtcclxuICAgICAgICBndXR0ZXJzOiB7XHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgICdAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpJzoge1xyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWd1bGFyOiB7XHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgICdAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpJzoge1xyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgICdAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpJzoge1xyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpRmlsbGVkSW5wdXQ6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpSW5wdXRMYWJlbDoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlCdXR0b246IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSlcclxuXHJcbiAgdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeSA9IHRoZW1lLnBhbGV0dGUuYXVnbWVudENvbG9yKHtcclxuICAgIG1haW46ICcjYzQ3MDcwJyxcclxuICAgIGRhcms6ICcjOTE0MzQ1JyxcclxuICAgIGxpZ2h0OiAnI2Y5YTA5ZScsXHJcbiAgICBjb250cmFzdFRleHQ6IFBSSU1BUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgfSlcclxuICByZXR1cm4gdGhlbWVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0eWxlZENvbXBvbmVudHNUaGVtZTogRGVmYXVsdFRoZW1lID0ge1xyXG4gIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgY29sb3JzOiB7XHJcbiAgICBwcmltYXJ5OiBQUklNQVJZX0NPTE9SLFxyXG4gICAgcHJpbWFyeUNvbnRyYXN0OiBQUklNQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgc2Vjb25kYXJ5OiBTRUNPTkRBUllfQ09MT1IsXHJcbiAgICBzZWNvbmRhcnlDb250cmFzdDogU0VDT05EQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgdGVydGlhcnk6IFRFUlRJQVJZX0NPTE9SLFxyXG4gICAgdGVydGlhcnlDb250cmFzdDogVEVSVElBUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICBkYXJrOiBEQVJLX0NPTE9SLFxyXG4gICAgbGlnaHQ6IExJR0hUX0NPTE9SLFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFN0eWxlZENvbXBvbmVudENvbG9yS2V5ID0ga2V5b2YgRGVmYXVsdFRoZW1lWydjb2xvcnMnXVxyXG4iXSwic291cmNlUm9vdCI6IiJ9