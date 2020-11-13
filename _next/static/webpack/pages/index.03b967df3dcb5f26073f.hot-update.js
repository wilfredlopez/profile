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
/* harmony import */ var _material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors/teal */ "./node_modules/@material-ui/core/colors/teal.js");
/* harmony import */ var _material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




let SECONDARY_COLOR = _material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_2___default.a[700];
const SECONDARY_COLOR_CONTRAST = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['white']; // export let PRIMARY_COLOR: string = primary['900']

let PRIMARY_COLOR = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]['white']; // '#032e4e'
// export let PRIMARY_COLOR: string = '#00463e' || '#032e4e'
// export const TOOLBAR_MIN_HEIGHT = 15

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
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL2dldFRoZW1lLnRzIl0sIm5hbWVzIjpbIlNFQ09OREFSWV9DT0xPUiIsInNlY29uZGFyeSIsIlNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCIsImNvbW1vbiIsIlBSSU1BUllfQ09MT1IiLCJUT09MQkFSX01JTl9IRUlHSFQiLCJQUklNQVJZX0NPTE9SX0NPTlRSQVNUIiwiREFSS19DT0xPUiIsIkxJR0hUX0NPTE9SIiwiVEVSVElBUllfQ09MT1IiLCJURVJUSUFSWV9DT0xPUl9DT05UUkFTVCIsIkRBUktfQkFDS0dST1VORF9DT0xPUiIsIkJPUkRFUl9SQURJT1VTIiwiZ2V0VGhlbWUiLCJwcmVmZXJzRGFya01vZGUiLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwic3RhdHVzIiwiZGFuZ2VyIiwicmVkIiwicGFsZXR0ZSIsInR5cGUiLCJwcmltYXJ5IiwibWFpbiIsImNvbnRyYXN0VGV4dCIsInRlcnRpYXJ5IiwiZGFyayIsImxpZ2h0Iiwic3VjY2VzcyIsImdyZWVuIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsInNwYWNpbmciLCJwcm9wcyIsIk11aVBhcGVyIiwiZWxldmF0aW9uIiwiTXVpVGV4dEZpZWxkIiwiSW5wdXRMYWJlbFByb3BzIiwic2hyaW5rIiwiTXVpQnV0dG9uIiwiZGlzYWJsZVJpcHBsZSIsIk11aUNoZWNrYm94Iiwib3ZlcnJpZGVzIiwicm9vdCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiTXVpTW9iaWxlU3RlcHBlciIsInBvc2l0aW9uQm90dG9tIiwicG9zaXRpb24iLCJNdWlBcHBCYXIiLCJwb3NpdGlvbkZpeGVkIiwiekluZGV4IiwiTXVpVG9vbGJhciIsImd1dHRlcnMiLCJtaW5IZWlnaHQiLCJyZWd1bGFyIiwiTXVpRmlsbGVkSW5wdXQiLCJNdWlJbnB1dExhYmVsIiwidGV4dFRyYW5zZm9ybSIsImF1Z21lbnRDb2xvciIsInN0eWxlZENvbXBvbmVudHNUaGVtZSIsImNvbG9ycyIsInByaW1hcnlDb250cmFzdCIsInNlY29uZGFyeUNvbnRyYXN0IiwidGVydGlhcnlDb250cmFzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQUlBLGVBQXVCLEdBQUdDLG9FQUFTLENBQUMsR0FBRCxDQUF2QztBQUNBLE1BQU1DLHdCQUF3QixHQUFHQywrREFBTSxDQUFDLE9BQUQsQ0FBdkMsQyxDQUNQOztBQUNPLElBQUlDLGFBQXFCLEdBQUdELCtEQUFNLENBQUMsT0FBRCxDQUFsQyxDLENBQTRDO0FBQ25EO0FBRUE7O0FBQ08sTUFBTUUsa0JBQWtCLEdBQUcsRUFBM0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBR0gsK0RBQU0sQ0FBQyxPQUFELENBQXJDO0FBQ0EsTUFBTUksVUFBVSxHQUFHLFNBQW5CO0FBQ0EsTUFBTUMsV0FBVyxHQUFHTCwrREFBTSxDQUFDLE9BQUQsQ0FBMUI7QUFDQSxNQUFNTSxjQUFjLEdBQUcsU0FBdkIsQyxDQUFpQzs7QUFDakMsTUFBTUMsdUJBQXVCLEdBQUdQLCtEQUFNLENBQUMsT0FBRCxDQUF0QztBQUNBLE1BQU1RLHFCQUFxQixHQUFHLFNBQTlCO0FBQ1AsTUFBTUMsY0FBYyxHQUFHLENBQXZCLEMsQ0FFQTs7QUFDZSxTQUFTQyxRQUFULENBQWtCQyxlQUFlLEdBQUcsS0FBcEMsRUFBMkM7QUFDeEQ7QUFDQVYsZUFBYSxHQUFHVSxlQUFlLEdBQUcsU0FBSCxHQUFlVixhQUE5QztBQUNBSixpQkFBZSxHQUFHYyxlQUFlLEdBQUcsY0FBSCxHQUFvQmQsZUFBckQ7QUFDQSxRQUFNZSxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDM0JDLFVBQU0sRUFBRTtBQUNOQyxZQUFNLEVBQUVDLDREQUFHLENBQUMsR0FBRDtBQURMLEtBRG1CO0FBSTNCQyxXQUFPLEVBQUU7QUFDUEMsVUFBSSxFQUFFUCxlQUFlLEdBQUcsTUFBSCxHQUFZLE9BRDFCO0FB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LFFBQU0sRUFBRTtBQUNOekMsV0FBTyxFQUFFbEIsYUFESDtBQUVONEQsbUJBQWUsRUFBRTFELHNCQUZYO0FBR05MLGFBQVMsRUFBRUQsZUFITDtBQUlOaUUscUJBQWlCLEVBQUUvRCx3QkFKYjtBQUtOdUIsWUFBUSxFQUFFaEIsY0FMSjtBQU1OeUQsb0JBQWdCLEVBQUV4RCx1QkFOWjtBQU9OZ0IsUUFBSSxFQUFFbkIsVUFQQTtBQVFOb0IsU0FBSyxFQUFFbkI7QUFSRDtBQUZ5QyxDQUE1QyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wM2I5NjdkZjNkY2I1ZjI2MDczZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tbW9uLCBncmVlbiwgcmVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJ1xyXG5pbXBvcnQgc2Vjb25kYXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy90ZWFsJ1xyXG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgRGVmYXVsdFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmV4cG9ydCBsZXQgU0VDT05EQVJZX0NPTE9SOiBzdHJpbmcgPSBzZWNvbmRhcnlbNzAwXVxyXG5leHBvcnQgY29uc3QgU0VDT05EQVJZX0NPTE9SX0NPTlRSQVNUID0gY29tbW9uWyd3aGl0ZSddXHJcbi8vIGV4cG9ydCBsZXQgUFJJTUFSWV9DT0xPUjogc3RyaW5nID0gcHJpbWFyeVsnOTAwJ11cclxuZXhwb3J0IGxldCBQUklNQVJZX0NPTE9SOiBzdHJpbmcgPSBjb21tb25bJ3doaXRlJ10gLy8gJyMwMzJlNGUnXHJcbi8vIGV4cG9ydCBsZXQgUFJJTUFSWV9DT0xPUjogc3RyaW5nID0gJyMwMDQ2M2UnIHx8ICcjMDMyZTRlJ1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IFRPT0xCQVJfTUlOX0hFSUdIVCA9IDE1XHJcbmV4cG9ydCBjb25zdCBUT09MQkFSX01JTl9IRUlHSFQgPSA1MFxyXG5leHBvcnQgY29uc3QgUFJJTUFSWV9DT0xPUl9DT05UUkFTVCA9IGNvbW1vblsnYmxhY2snXVxyXG5leHBvcnQgY29uc3QgREFSS19DT0xPUiA9ICcjMDQwYzE0J1xyXG5leHBvcnQgY29uc3QgTElHSFRfQ09MT1IgPSBjb21tb25bJ3doaXRlJ11cclxuZXhwb3J0IGNvbnN0IFRFUlRJQVJZX0NPTE9SID0gJyM4YzJmMmYnIC8vICcjMjBiZmFkJ1xyXG5leHBvcnQgY29uc3QgVEVSVElBUllfQ09MT1JfQ09OVFJBU1QgPSBjb21tb25bJ3doaXRlJ11cclxuZXhwb3J0IGNvbnN0IERBUktfQkFDS0dST1VORF9DT0xPUiA9ICcjMzAzMDMwJ1xyXG5jb25zdCBCT1JERVJfUkFESU9VUyA9IDRcclxuXHJcbi8vQ29vbCBHcmVlbiAvIzM4YjU4NFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaGVtZShwcmVmZXJzRGFya01vZGUgPSBmYWxzZSkge1xyXG4gIC8vIFBSSU1BUllfQ09MT1IgPSBwcmVmZXJzRGFya01vZGUgPyBcIiMzMTlkZGZcIiA6IHByaW1hcnlbOTAwXTtcclxuICBQUklNQVJZX0NPTE9SID0gcHJlZmVyc0RhcmtNb2RlID8gJyMwNDBjMTQnIDogUFJJTUFSWV9DT0xPUlxyXG4gIFNFQ09OREFSWV9DT0xPUiA9IHByZWZlcnNEYXJrTW9kZSA/ICdyZ2IoMSA1MSA0NSknIDogU0VDT05EQVJZX0NPTE9SXHJcbiAgY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgICBzdGF0dXM6IHtcclxuICAgICAgZGFuZ2VyOiByZWRbNTAwXSxcclxuICAgIH0sXHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHR5cGU6IHByZWZlcnNEYXJrTW9kZSA/ICdkYXJrJyA6ICdsaWdodCcsXHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBtYWluOiBQUklNQVJZX0NPTE9SLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogUFJJTUFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbWFpbjogU0VDT05EQVJZX0NPTE9SLFxyXG5cclxuICAgICAgICBjb250cmFzdFRleHQ6IFNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgICAgfSxcclxuICAgICAgdGVydGlhcnk6IHtcclxuICAgICAgICBtYWluOiBURVJUSUFSWV9DT0xPUixcclxuICAgICAgICBkYXJrOiAnIzkxNDM0NScsXHJcbiAgICAgICAgbGlnaHQ6ICcjZjlhMDllJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6IFRFUlRJQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiB7XHJcbiAgICAgICAgLi4uZ3JlZW4sXHJcbiAgICAgICAgbWFpbjogJyMzMTY1MDMnLFxyXG4gICAgICB9LFxyXG4gICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgLy8gZGVmYXVsdDogXCIjMzAzMDMwXCIsXHJcbiAgICAgICAgZGVmYXVsdDogcHJlZmVyc0RhcmtNb2RlID8gJyMyNzI1MjUnIDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNoYXBlOiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogQk9SREVSX1JBRElPVVMsXHJcbiAgICB9LFxyXG4gICAgc3BhY2luZzogMTYsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBNdWlQYXBlcjoge1xyXG4gICAgICAgIGVsZXZhdGlvbjogMyxcclxuICAgICAgfSxcclxuICAgICAgTXVpVGV4dEZpZWxkOiB7XHJcbiAgICAgICAgSW5wdXRMYWJlbFByb3BzOiB7XHJcbiAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpQnV0dG9uOiB7XHJcbiAgICAgICAgZGlzYWJsZVJpcHBsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgTXVpQ2hlY2tib3g6IHtcclxuICAgICAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG92ZXJyaWRlczoge1xyXG4gICAgICBNdWlQYXBlcjoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGNvbG9yOiBwcmVmZXJzRGFya01vZGUgPyAnI2QyZDJkMicgOiBjb21tb25bJ3doaXRlJ10sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByZWZlcnNEYXJrTW9kZSA/ICcjMmMyYzJjJyA6IERBUktfQkFDS0dST1VORF9DT0xPUixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlNb2JpbGVTdGVwcGVyOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zaXRpb25Cb3R0b206IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUFwcEJhcjoge1xyXG4gICAgICAgIHBvc2l0aW9uRml4ZWQ6IHtcclxuICAgICAgICAgIHpJbmRleDogMTEwMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlUb29sYmFyOiB7XHJcbiAgICAgICAgZ3V0dGVyczoge1xyXG4gICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICAnQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSc6IHtcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVndWxhcjoge1xyXG4gICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICAnQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSc6IHtcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICAnQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSc6IHtcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUZpbGxlZElucHV0OiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUlucHV0TGFiZWw6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpQnV0dG9uOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pXHJcblxyXG4gIHRoZW1lLnBhbGV0dGUudGVydGlhcnkgPSB0aGVtZS5wYWxldHRlLmF1Z21lbnRDb2xvcih7XHJcbiAgICBtYWluOiAnI2M0NzA3MCcsXHJcbiAgICBkYXJrOiAnIzkxNDM0NScsXHJcbiAgICBsaWdodDogJyNmOWEwOWUnLFxyXG4gICAgY29udHJhc3RUZXh0OiBQUklNQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gIH0pXHJcbiAgcmV0dXJuIHRoZW1lXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdHlsZWRDb21wb25lbnRzVGhlbWU6IERlZmF1bHRUaGVtZSA9IHtcclxuICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gIGNvbG9yczoge1xyXG4gICAgcHJpbWFyeTogUFJJTUFSWV9DT0xPUixcclxuICAgIHByaW1hcnlDb250cmFzdDogUFJJTUFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgIHNlY29uZGFyeTogU0VDT05EQVJZX0NPTE9SLFxyXG4gICAgc2Vjb25kYXJ5Q29udHJhc3Q6IFNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgIHRlcnRpYXJ5OiBURVJUSUFSWV9DT0xPUixcclxuICAgIHRlcnRpYXJ5Q29udHJhc3Q6IFRFUlRJQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgZGFyazogREFSS19DT0xPUixcclxuICAgIGxpZ2h0OiBMSUdIVF9DT0xPUixcclxuICB9LFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTdHlsZWRDb21wb25lbnRDb2xvcktleSA9IGtleW9mIERlZmF1bHRUaGVtZVsnY29sb3JzJ11cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==