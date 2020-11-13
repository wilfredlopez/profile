webpackHotUpdate_N_E("pages/projects",{

/***/ "./node_modules/@material-ui/core/colors/blue.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/colors/blue.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
var _default = blue;
exports.default = _default;

/***/ }),

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
/* harmony import */ var _material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors/teal */ "./node_modules/@material-ui/core/colors/teal.js");
/* harmony import */ var _material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "./node_modules/@material-ui/core/colors/blue.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





let SECONDARY_COLOR = _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_3___default.a['600']; // common['white'] //

const SECONDARY_COLOR_CONTRAST = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['black'];
let PRIMARY_COLOR = _material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_2___default.a[700]; // '#032e4e'

const PRIMARY_COLOR_CONTRAST = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['white'];
const TOOLBAR_MIN_HEIGHT = 50;
const DARK_COLOR = '#040c14';
const LIGHT_COLOR = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['white'];
const TERTIARY_COLOR = '#317fd0'; // '#8c2f2f' // '#20bfad'

const TERTIARY_COLOR_CONTRAST = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['white'];
const DARK_BACKGROUND_COLOR = '#303030';
const BORDER_RADIOUS = 4; //Cool Green /#38b584

function getTheme(prefersDarkMode = false) {
  PRIMARY_COLOR = prefersDarkMode ? '#040c14' : PRIMARY_COLOR;
  SECONDARY_COLOR = prefersDarkMode ? 'rgb(1 51 45)' : SECONDARY_COLOR;
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ibHVlLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvdGhlbWUvZ2V0VGhlbWUudHMiXSwibmFtZXMiOlsiU0VDT05EQVJZX0NPTE9SIiwic2Vjb25kYXJ5IiwiU0VDT05EQVJZX0NPTE9SX0NPTlRSQVNUIiwiY29tbW9uIiwiUFJJTUFSWV9DT0xPUiIsInByaW1hcnkiLCJQUklNQVJZX0NPTE9SX0NPTlRSQVNUIiwiVE9PTEJBUl9NSU5fSEVJR0hUIiwiREFSS19DT0xPUiIsIkxJR0hUX0NPTE9SIiwiVEVSVElBUllfQ09MT1IiLCJURVJUSUFSWV9DT0xPUl9DT05UUkFTVCIsIkRBUktfQkFDS0dST1VORF9DT0xPUiIsIkJPUkRFUl9SQURJT1VTIiwiZ2V0VGhlbWUiLCJwcmVmZXJzRGFya01vZGUiLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwic3RhdHVzIiwicmVkIiwiZGFuZ2VyIiwicGFsZXR0ZSIsInR5cGUiLCJtYWluIiwiY29udHJhc3RUZXh0IiwidGVydGlhcnkiLCJkYXJrIiwibGlnaHQiLCJzdWNjZXNzIiwiZ3JlZW4iLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwic3BhY2luZyIsInByb3BzIiwiTXVpUGFwZXIiLCJlbGV2YXRpb24iLCJNdWlUZXh0RmllbGQiLCJJbnB1dExhYmVsUHJvcHMiLCJzaHJpbmsiLCJNdWlCdXR0b24iLCJkaXNhYmxlUmlwcGxlIiwiTXVpQ2hlY2tib3giLCJvdmVycmlkZXMiLCJyb290IiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJNdWlNb2JpbGVTdGVwcGVyIiwicG9zaXRpb25Cb3R0b20iLCJwb3NpdGlvbiIsIk11aUFwcEJhciIsInBvc2l0aW9uRml4ZWQiLCJ6SW5kZXgiLCJNdWlUb29sYmFyIiwiZ3V0dGVycyIsIm1pbkhlaWdodCIsInJlZ3VsYXIiLCJNdWlGaWxsZWRJbnB1dCIsIk11aUlucHV0TGFiZWwiLCJ0ZXh0VHJhbnNmb3JtIiwiYXVnbWVudENvbG9yIiwic3R5bGVkQ29tcG9uZW50c1RoZW1lIiwiY29sb3JzIiwicHJpbWFyeUNvbnRyYXN0Iiwic2Vjb25kYXJ5Q29udHJhc3QiLCJ0ZXJ0aWFyeUNvbnRyYXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFJQSxlQUF1QixHQUFHQyxvRUFBUyxDQUFDLEtBQUQsQ0FBdkMsQyxDQUErQzs7QUFDL0MsTUFBTUMsd0JBQXdCLEdBQUdDLCtEQUFNLENBQUMsT0FBRCxDQUF2QztBQUVBLElBQUlDLGFBQXFCLEdBQUdDLG9FQUFPLENBQUMsR0FBRCxDQUFuQyxDLENBQXlDOztBQUN6QyxNQUFNQyxzQkFBc0IsR0FBR0gsK0RBQU0sQ0FBQyxPQUFELENBQXJDO0FBRUEsTUFBTUksa0JBQWtCLEdBQUcsRUFBM0I7QUFDQSxNQUFNQyxVQUFVLEdBQUcsU0FBbkI7QUFDQSxNQUFNQyxXQUFXLEdBQUdOLCtEQUFNLENBQUMsT0FBRCxDQUExQjtBQUNBLE1BQU1PLGNBQWMsR0FBRyxTQUF2QixDLENBQWlDOztBQUNqQyxNQUFNQyx1QkFBdUIsR0FBR1IsK0RBQU0sQ0FBQyxPQUFELENBQXRDO0FBQ0EsTUFBTVMscUJBQXFCLEdBQUcsU0FBOUI7QUFDUCxNQUFNQyxjQUFjLEdBQUcsQ0FBdkIsQyxDQUVBOztBQUNlLFNBQVNDLFFBQVQsQ0FBa0JDLGVBQWUsR0FBRyxLQUFwQyxFQUEyQztBQUN4RFgsZUFBYSxHQUFHVyxlQUFlLEdBQUcsU0FBSCxHQUFlWCxhQUE5QztBQUNBSixp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QU4sQ0FBY3dDLFlBQWQsQ0FBMkI7QUFDbER0QyxRQUFJLEVBQUUsU0FENEM7QUFFbERHLFFBQUksRUFBRSxTQUY0QztBQUdsREMsU0FBSyxFQUFFLFNBSDJDO0FBSWxESCxnQkFBWSxFQUFFbEI7QUFKb0MsR0FBM0IsQ0FBekI7QUFNQSxTQUFPVSxLQUFQO0FBQ0Q7QUFFTSxNQUFNOEMscUJBQW1DLEdBQUc7QUFDakQ3QixjQUFZLEVBQUUsS0FEbUM7QUFFakQ4QixRQUFNLEVBQUU7QUFDTjFELFdBQU8sRUFBRUQsYUFESDtBQUVONEQsbUJBQWUsRUFBRTFELHNCQUZYO0FBR05MLGFBQVMsRUFBRUQsZUFITDtBQUlOaUUscUJBQWlCLEVBQUUvRCx3QkFKYjtBQUtOdUIsWUFBUSxFQUFFZixjQUxKO0FBTU53RCxvQkFBZ0IsRUFBRXZELHVCQU5aO0FBT05lLFFBQUksRUFBRWxCLFVBUEE7QUFRTm1CLFNBQUssRUFBRWxCO0FBUkQ7QUFGeUMsQ0FBNUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMuZmQ5NTk3MDkzYzE1NTcyZmRkOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGJsdWUgPSB7XG4gIDUwOiAnI2UzZjJmZCcsXG4gIDEwMDogJyNiYmRlZmInLFxuICAyMDA6ICcjOTBjYWY5JyxcbiAgMzAwOiAnIzY0YjVmNicsXG4gIDQwMDogJyM0MmE1ZjUnLFxuICA1MDA6ICcjMjE5NmYzJyxcbiAgNjAwOiAnIzFlODhlNScsXG4gIDcwMDogJyMxOTc2ZDInLFxuICA4MDA6ICcjMTU2NWMwJyxcbiAgOTAwOiAnIzBkNDdhMScsXG4gIEExMDA6ICcjODJiMWZmJyxcbiAgQTIwMDogJyM0NDhhZmYnLFxuICBBNDAwOiAnIzI5NzlmZicsXG4gIEE3MDA6ICcjMjk2MmZmJ1xufTtcbnZhciBfZGVmYXVsdCA9IGJsdWU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJpbXBvcnQgeyBjb21tb24sIGdyZWVuLCByZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbmltcG9ydCBwcmltYXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy90ZWFsJ1xyXG5pbXBvcnQgc2Vjb25kYXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ibHVlJ1xyXG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgRGVmYXVsdFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgbGV0IFNFQ09OREFSWV9DT0xPUjogc3RyaW5nID0gc2Vjb25kYXJ5Wyc2MDAnXSAvLyBjb21tb25bJ3doaXRlJ10gLy9cclxuZXhwb3J0IGNvbnN0IFNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCA9IGNvbW1vblsnYmxhY2snXVxyXG5cclxuZXhwb3J0IGxldCBQUklNQVJZX0NPTE9SOiBzdHJpbmcgPSBwcmltYXJ5WzcwMF0gLy8gJyMwMzJlNGUnXHJcbmV4cG9ydCBjb25zdCBQUklNQVJZX0NPTE9SX0NPTlRSQVNUID0gY29tbW9uWyd3aGl0ZSddXHJcblxyXG5leHBvcnQgY29uc3QgVE9PTEJBUl9NSU5fSEVJR0hUID0gNTBcclxuZXhwb3J0IGNvbnN0IERBUktfQ09MT1IgPSAnIzA0MGMxNCdcclxuZXhwb3J0IGNvbnN0IExJR0hUX0NPTE9SID0gY29tbW9uWyd3aGl0ZSddXHJcbmV4cG9ydCBjb25zdCBURVJUSUFSWV9DT0xPUiA9ICcjMzE3ZmQwJyAvLyAnIzhjMmYyZicgLy8gJyMyMGJmYWQnXHJcbmV4cG9ydCBjb25zdCBURVJUSUFSWV9DT0xPUl9DT05UUkFTVCA9IGNvbW1vblsnd2hpdGUnXVxyXG5leHBvcnQgY29uc3QgREFSS19CQUNLR1JPVU5EX0NPTE9SID0gJyMzMDMwMzAnXHJcbmNvbnN0IEJPUkRFUl9SQURJT1VTID0gNFxyXG5cclxuLy9Db29sIEdyZWVuIC8jMzhiNTg0XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRoZW1lKHByZWZlcnNEYXJrTW9kZSA9IGZhbHNlKSB7XHJcbiAgUFJJTUFSWV9DT0xPUiA9IHByZWZlcnNEYXJrTW9kZSA/ICcjMDQwYzE0JyA6IFBSSU1BUllfQ09MT1JcclxuICBTRUNPTkRBUllfQ09MT1IgPSBwcmVmZXJzRGFya01vZGUgPyAncmdiKDEgNTEgNDUpJyA6IFNFQ09OREFSWV9DT0xPUlxyXG5cclxuICBjb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcclxuICAgIHN0YXR1czoge1xyXG4gICAgICAuLi5yZWQsXHJcbiAgICAgIGRhbmdlcjogcmVkWzUwMF0sXHJcbiAgICB9LFxyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICB0eXBlOiBwcmVmZXJzRGFya01vZGUgPyAnZGFyaycgOiAnbGlnaHQnLFxyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbWFpbjogUFJJTUFSWV9DT0xPUixcclxuICAgICAgICBjb250cmFzdFRleHQ6IFBSSU1BUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIG1haW46IFNFQ09OREFSWV9DT0xPUixcclxuXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiBTRUNPTkRBUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRlcnRpYXJ5OiB7XHJcbiAgICAgICAgbWFpbjogVEVSVElBUllfQ09MT1IsXHJcbiAgICAgICAgZGFyazogJyM5MTQzNDUnLFxyXG4gICAgICAgIGxpZ2h0OiAnI2Y5YTA5ZScsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiBURVJUSUFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgICAgfSxcclxuICAgICAgc3VjY2Vzczoge1xyXG4gICAgICAgIC4uLmdyZWVuLFxyXG4gICAgICAgIG1haW46ICcjMzE2NTAzJyxcclxuICAgICAgfSxcclxuICAgICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgIC8vIGRlZmF1bHQ6IFwiIzMwMzAzMFwiLFxyXG4gICAgICAgIGRlZmF1bHQ6IHByZWZlcnNEYXJrTW9kZSA/ICcjMjcyNTI1JyA6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzaGFwZToge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IEJPUkRFUl9SQURJT1VTLFxyXG4gICAgfSxcclxuICAgIHNwYWNpbmc6IDE2LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgTXVpUGFwZXI6IHtcclxuICAgICAgICBlbGV2YXRpb246IDMsXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aVRleHRGaWVsZDoge1xyXG4gICAgICAgIElucHV0TGFiZWxQcm9wczoge1xyXG4gICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUJ1dHRvbjoge1xyXG4gICAgICAgIGRpc2FibGVSaXBwbGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUNoZWNrYm94OiB7XHJcbiAgICAgICAgZGlzYWJsZVJpcHBsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBvdmVycmlkZXM6IHtcclxuICAgICAgTXVpUGFwZXI6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBjb2xvcjogcHJlZmVyc0RhcmtNb2RlID8gJyNkMmQyZDInIDogY29tbW9uWyd3aGl0ZSddLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcmVmZXJzRGFya01vZGUgPyAnIzJjMmMyYycgOiBEQVJLX0JBQ0tHUk9VTkRfQ09MT1IsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpTW9iaWxlU3RlcHBlcjoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uQm90dG9tOiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlBcHBCYXI6IHtcclxuICAgICAgICBwb3NpdGlvbkZpeGVkOiB7XHJcbiAgICAgICAgICB6SW5kZXg6IDExMDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpVG9vbGJhcjoge1xyXG4gICAgICAgIGd1dHRlcnM6IHtcclxuICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgJ0BtZWRpYSAobWluLXdpZHRoOiA2MDBweCknOiB7XHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZ3VsYXI6IHtcclxuICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgJ0BtZWRpYSAobWluLXdpZHRoOiA2MDBweCknOiB7XHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgJ0BtZWRpYSAobWluLXdpZHRoOiA2MDBweCknOiB7XHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlGaWxsZWRJbnB1dDoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlJbnB1dExhYmVsOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUJ1dHRvbjoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KVxyXG5cclxuICB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5ID0gdGhlbWUucGFsZXR0ZS5hdWdtZW50Q29sb3Ioe1xyXG4gICAgbWFpbjogJyNjNDcwNzAnLFxyXG4gICAgZGFyazogJyM5MTQzNDUnLFxyXG4gICAgbGlnaHQ6ICcjZjlhMDllJyxcclxuICAgIGNvbnRyYXN0VGV4dDogUFJJTUFSWV9DT0xPUl9DT05UUkFTVCxcclxuICB9KVxyXG4gIHJldHVybiB0aGVtZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3R5bGVkQ29tcG9uZW50c1RoZW1lOiBEZWZhdWx0VGhlbWUgPSB7XHJcbiAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICBjb2xvcnM6IHtcclxuICAgIHByaW1hcnk6IFBSSU1BUllfQ09MT1IsXHJcbiAgICBwcmltYXJ5Q29udHJhc3Q6IFBSSU1BUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICBzZWNvbmRhcnk6IFNFQ09OREFSWV9DT0xPUixcclxuICAgIHNlY29uZGFyeUNvbnRyYXN0OiBTRUNPTkRBUllfQ09MT1JfQ09OVFJBU1QsXHJcbiAgICB0ZXJ0aWFyeTogVEVSVElBUllfQ09MT1IsXHJcbiAgICB0ZXJ0aWFyeUNvbnRyYXN0OiBURVJUSUFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgIGRhcms6IERBUktfQ09MT1IsXHJcbiAgICBsaWdodDogTElHSFRfQ09MT1IsXHJcbiAgfSxcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU3R5bGVkQ29tcG9uZW50Q29sb3JLZXkgPSBrZXlvZiBEZWZhdWx0VGhlbWVbJ2NvbG9ycyddXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=