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
  SECONDARY_COLOR = prefersDarkMode ? 'rgb(145 45 17)' : SECONDARY_COLOR;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL2dldFRoZW1lLnRzIl0sIm5hbWVzIjpbIlNFQ09OREFSWV9DT0xPUiIsInNlY29uZGFyeSIsIlNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCIsImNvbW1vbiIsIlBSSU1BUllfQ09MT1IiLCJQUklNQVJZX0NPTE9SX0NPTlRSQVNUIiwiVE9PTEJBUl9NSU5fSEVJR0hUIiwiREFSS19DT0xPUiIsIkxJR0hUX0NPTE9SIiwiVEVSVElBUllfQ09MT1IiLCJURVJUSUFSWV9DT0xPUl9DT05UUkFTVCIsIkRBUktfQkFDS0dST1VORF9DT0xPUiIsIkJPUkRFUl9SQURJT1VTIiwiZ2V0VGhlbWUiLCJfcHJlZmVyc0RhcmtNb2RlIiwicHJlZmVyc0RhcmtNb2RlIiwidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInN0YXR1cyIsInJlZCIsImRhbmdlciIsInBhbGV0dGUiLCJ0eXBlIiwicHJpbWFyeSIsIm1haW4iLCJjb250cmFzdFRleHQiLCJ0ZXJ0aWFyeSIsImRhcmsiLCJsaWdodCIsInN1Y2Nlc3MiLCJncmVlbiIsImJhY2tncm91bmQiLCJkZWZhdWx0Iiwic2hhcGUiLCJib3JkZXJSYWRpdXMiLCJzcGFjaW5nIiwicHJvcHMiLCJNdWlQYXBlciIsImVsZXZhdGlvbiIsIk11aVRleHRGaWVsZCIsIklucHV0TGFiZWxQcm9wcyIsInNocmluayIsIk11aUJ1dHRvbiIsImRpc2FibGVSaXBwbGUiLCJNdWlDaGVja2JveCIsIm92ZXJyaWRlcyIsInJvb3QiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsIk11aU1vYmlsZVN0ZXBwZXIiLCJwb3NpdGlvbkJvdHRvbSIsInBvc2l0aW9uIiwiTXVpQXBwQmFyIiwicG9zaXRpb25GaXhlZCIsInpJbmRleCIsIk11aVRvb2xiYXIiLCJndXR0ZXJzIiwibWluSGVpZ2h0IiwicmVndWxhciIsIk11aUZpbGxlZElucHV0IiwiTXVpSW5wdXRMYWJlbCIsInRleHRUcmFuc2Zvcm0iLCJhdWdtZW50Q29sb3IiLCJzdHlsZWRDb21wb25lbnRzVGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5Q29udHJhc3QiLCJzZWNvbmRhcnlDb250cmFzdCIsInRlcnRpYXJ5Q29udHJhc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBR08sSUFBSUEsZUFBdUIsR0FBR0Msb0VBQVMsQ0FBQyxLQUFELENBQXZDLEMsQ0FBK0M7O0FBQy9DLE1BQU1DLHdCQUF3QixHQUFHQywrREFBTSxDQUFDLE9BQUQsQ0FBdkM7QUFFQSxJQUFJQyxhQUFxQixHQUFHLFNBQTVCLEMsQ0FBc0M7O0FBQ3RDLE1BQU1DLHNCQUFzQixHQUFHRiwrREFBTSxDQUFDLE9BQUQsQ0FBckM7QUFFQSxNQUFNRyxrQkFBa0IsR0FBRyxFQUEzQjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxTQUFuQjtBQUNBLE1BQU1DLFdBQVcsR0FBR0wsK0RBQU0sQ0FBQyxPQUFELENBQTFCO0FBQ0EsTUFBTU0sY0FBYyxHQUFHLFNBQXZCLEMsQ0FBaUM7O0FBQ2pDLE1BQU1DLHVCQUF1QixHQUFHUCwrREFBTSxDQUFDLE9BQUQsQ0FBdEM7QUFDQSxNQUFNUSxxQkFBcUIsR0FBRyxTQUE5QixDLENBQXdDOztBQUMvQyxNQUFNQyxjQUFjLEdBQUcsQ0FBdkIsQyxDQUVBOztBQUNlLFNBQVNDLFFBQVQsQ0FBa0JDLGdCQUFnQixHQUFHLEtBQXJDLEVBQTRDO0FBQ3pELFFBQU1DLGVBQWUsR0FBRyxJQUF4QjtBQUNBWCxlQUFhLEdBQUdXLGVBQWUsR0FBRyxTQUFILEdBQWVYLGFBQTlDO0FBQ0FKLGlCQUFlLEdBQUdlLGVBQWUsR0FBRyxnQkFBSCxHQUFzQmYsZUFBdkQ7QUFFQSxRQUFNZ0IsS0FBSyxHQUFHQywrRUFBYyxDQUFDO0FBQzNCQyxVQUFNLGtDQUNEQyw0REFEQztBQUVKQyxZQUFNLEVBQUVELDREQUFHLENBQUMsR0FBRDtBQUZQLE1BRHFCO0FBSzNCRSxXQUFPLEVBQUU7QUFDUEMsVUFBSSxFQUFFUCxlQUFlLEdBQUcsTUFBSCxHQUFZLE9BRDFCO0FBRVBRLGFBQU8sRUFBRTtBQUNQQyxZQUFJLEVBQUVwQixhQURDO0FBRVBxQixvQkFBWSxFQUFFcEI7QUFGUCxPQUZGO0FBTVBKLGVBQVMsRUFBRTtBQUNUdUIsWUFBSSxFQUFFeEIsZUFERztBQUdUeUIsb0JBQVksRUFBRXZCO0FBSEwsT0FOSjtBQVdQd0IsY0FBUSxFQUFFO0FBQ1JGLFlBQUksRUFBRWYsY0FERTtBQUVSa0IsWUFBSSxFQUFFLFNBRkU7QUFHUkMsYUFBSyxFQUFFLFNBSEM7QUFJUkgsb0JBQVksRUFBRWY7QUFKTixPQVhIO0FBaUJQbUIsYUFBTyxrQ0FDRkMsOERBREU7QUFFTE4sWUFBSSxFQUFFO0FBRkQsUUFqQkE7QUFxQlBPLGdCQUFVLEVBQUU7QUFDVjtBQUNBQyxlQUFPLEVBQUVqQixlQUFlLEdBQUcsU0FBSCxHQUFlO0FBRjdCO0FBckJMLEtBTGtCO0FBK0IzQmtCLFNBQUssRUFBRTtBQUNMQyxrQkFBWSxFQUFFdEI7QUFEVCxLQS9Cb0I7QUFrQzNCdUIsV0FBTyxFQUFFLEVBbENrQjtBQW1DM0JDLFNBQUssRUFBRTtBQUNMQyxjQUFRLEVBQUU7QUFDUkMsaUJBQVMsRUFBRTtBQURILE9BREw7QUFJTEMsa0JBQVksRUFBRTtBQUNaQyx1QkFBZSxFQUFFO0FBQ2ZDLGdCQUFNLEVBQUU7QUFETztBQURMLE9BSlQ7QUFTTEMsZUFBUyxFQUFFO0FBQ1RDLHFCQUFhLEVBQUU7QUFETixPQVROO0FBWUxDLGlCQUFXLEVBQUU7QUFDWEQscUJBQWEsRUFBRTtBQURKO0FBWlIsS0FuQ29CO0FBbUQzQkUsYUFBUyxFQUFFO0FBQ1RSLGNBQVEsRUFBRTtBQUNSUyxZQUFJLEVBQUU7QUFDSkMsZUFBSyxFQUFFaEMsZUFBZSxHQUFHLFNBQUgsR0FBZVosK0RBQU0sQ0FBQyxPQUFELENBRHZDO0FBRUo2Qyx5QkFBZSxFQUFFakMsZUFBZSxHQUFHLFNBQUgsR0FBZUo7QUFGM0M7QUFERSxPQUREO0FBT1RzQyxzQkFBZ0IsRUFBRTtBQUNoQkgsWUFBSSxFQUFFO0FBQ0pFLHlCQUFlLEVBQUU7QUFEYixTQURVO0FBSWhCRSxzQkFBYyxFQUFFO0FBQ2RDLGtCQUFRLEVBQUU7QUFESTtBQUpBLE9BUFQ7QUFlVEMsZUFBUyxFQUFFO0FBQ1RDLHFCQUFhLEVBQUU7QUFDYkMsZ0JBQU0sRUFBRTtBQURLO0FBRE4sT0FmRjtBQW9CVEMsZ0JBQVUsRUFBRTtBQUNWQyxlQUFPLEVBQUU7QUFDUEMsbUJBQVMsRUFBRW5ELGtCQURKO0FBRVAsdUNBQTZCO0FBQzNCbUQscUJBQVMsRUFBRW5EO0FBRGdCO0FBRnRCLFNBREM7QUFPVm9ELGVBQU8sRUFBRTtBQUNQRCxtQkFBUyxFQUFFbkQsa0JBREo7QUFFUCx1Q0FBNkI7QUFDM0JtRCxxQkFBUyxFQUFFbkQ7QUFEZ0I7QUFGdEIsU0FQQztBQWFWd0MsWUFBSSxFQUFFO0FBQ0pXLG1CQUFTLEVBQUVuRCxrQkFEUDtBQUVKLHVDQUE2QjtBQUMzQm1ELHFCQUFTLEVBQUVuRDtBQURnQjtBQUZ6QjtBQWJJLE9BcEJIO0FBd0NUcUQsb0JBQWMsRUFBRTtBQUNkYixZQUFJLEVBQUU7QUFDSkUseUJBQWUsRUFBRTtBQURiO0FBRFEsT0F4Q1A7QUE2Q1RZLG1CQUFhLEVBQUU7QUFDYmQsWUFBSSxFQUFFO0FBQ0pFLHlCQUFlLEVBQUU7QUFEYjtBQURPLE9BN0NOO0FBa0RUTixlQUFTLEVBQUU7QUFDVEksWUFBSSxFQUFFO0FBQ0plLHVCQUFhLEVBQUU7QUFEWDtBQURHO0FBbERGO0FBbkRnQixHQUFELENBQTVCO0FBNkdBN0MsT0FBSyxDQUFDSyxPQUFOLENBQWNLLFFBQWQsR0FBeUJWLEtBQUssQ0FBQ0ssT0FBTixDQUFjeUMsWUFBZCxDQUEyQjtBQUNsRHRDLFFBQUksRUFBRSxTQUQ0QztBQUVsREcsUUFBSSxFQUFFLFNBRjRDO0FBR2xEQyxTQUFLLEVBQUUsU0FIMkM7QUFJbERILGdCQUFZLEVBQUVwQjtBQUpvQyxHQUEzQixDQUF6QjtBQU1BLFNBQU9XLEtBQVA7QUFDRDtBQUVNLE1BQU0rQyxxQkFBbUMsR0FBRztBQUNqRDdCLGNBQVksRUFBRSxLQURtQztBQUVqRDhCLFFBQU0sRUFBRTtBQUNOekMsV0FBTyxFQUFFbkIsYUFESDtBQUVONkQsbUJBQWUsRUFBRTVELHNCQUZYO0FBR05KLGFBQVMsRUFBRUQsZUFITDtBQUlOa0UscUJBQWlCLEVBQUVoRSx3QkFKYjtBQUtOd0IsWUFBUSxFQUFFakIsY0FMSjtBQU1OMEQsb0JBQWdCLEVBQUV6RCx1QkFOWjtBQU9OaUIsUUFBSSxFQUFFcEIsVUFQQTtBQVFOcUIsU0FBSyxFQUFFcEI7QUFSRDtBQUZ5QyxDQUE1QyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yZmJiMDhjZmVhMTkxNTZkZDAwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tbW9uLCBncmVlbiwgcmVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJ1xyXG4vLyBpbXBvcnQgcHJpbWFyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvdGVhbCdcclxuaW1wb3J0IHNlY29uZGFyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZSdcclxuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IERlZmF1bHRUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGxldCBTRUNPTkRBUllfQ09MT1I6IHN0cmluZyA9IHNlY29uZGFyeVsnMjAwJ10gLy8gY29tbW9uWyd3aGl0ZSddIC8vXHJcbmV4cG9ydCBjb25zdCBTRUNPTkRBUllfQ09MT1JfQ09OVFJBU1QgPSBjb21tb25bJ2JsYWNrJ11cclxuXHJcbmV4cG9ydCBsZXQgUFJJTUFSWV9DT0xPUjogc3RyaW5nID0gJyNmMjUwMjInIC8vJyNhZjY4MDAnIC8vJyNiNzNlMzUnIC8vIHByaW1hcnlbNzAwXSAvLyAnIzAzMmU0ZSdcclxuZXhwb3J0IGNvbnN0IFBSSU1BUllfQ09MT1JfQ09OVFJBU1QgPSBjb21tb25bJ3doaXRlJ11cclxuXHJcbmV4cG9ydCBjb25zdCBUT09MQkFSX01JTl9IRUlHSFQgPSA1MFxyXG5leHBvcnQgY29uc3QgREFSS19DT0xPUiA9ICcjMDQwYzE0J1xyXG5leHBvcnQgY29uc3QgTElHSFRfQ09MT1IgPSBjb21tb25bJ3doaXRlJ11cclxuZXhwb3J0IGNvbnN0IFRFUlRJQVJZX0NPTE9SID0gJyNmZjk4MDAnIC8vICcjNzZiOWZmJyAvLyAnIzhjMmYyZicgLy8gJyMyMGJmYWQnXHJcbmV4cG9ydCBjb25zdCBURVJUSUFSWV9DT0xPUl9DT05UUkFTVCA9IGNvbW1vblsnd2hpdGUnXVxyXG5leHBvcnQgY29uc3QgREFSS19CQUNLR1JPVU5EX0NPTE9SID0gJyM0MjQyNDInIC8vJyMzMDMwMzAnXHJcbmNvbnN0IEJPUkRFUl9SQURJT1VTID0gNFxyXG5cclxuLy9Db29sIEdyZWVuICMzOGI1ODQgb3IgIzc2YjlmZlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaGVtZShfcHJlZmVyc0RhcmtNb2RlID0gZmFsc2UpIHtcclxuICBjb25zdCBwcmVmZXJzRGFya01vZGUgPSB0cnVlXHJcbiAgUFJJTUFSWV9DT0xPUiA9IHByZWZlcnNEYXJrTW9kZSA/ICcjMDQwYzE0JyA6IFBSSU1BUllfQ09MT1JcclxuICBTRUNPTkRBUllfQ09MT1IgPSBwcmVmZXJzRGFya01vZGUgPyAncmdiKDE0NSA0NSAxNyknIDogU0VDT05EQVJZX0NPTE9SXHJcblxyXG4gIGNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gICAgc3RhdHVzOiB7XHJcbiAgICAgIC4uLnJlZCxcclxuICAgICAgZGFuZ2VyOiByZWRbNTAwXSxcclxuICAgIH0sXHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIHR5cGU6IHByZWZlcnNEYXJrTW9kZSA/ICdkYXJrJyA6ICdsaWdodCcsXHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBtYWluOiBQUklNQVJZX0NPTE9SLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogUFJJTUFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbWFpbjogU0VDT05EQVJZX0NPTE9SLFxyXG5cclxuICAgICAgICBjb250cmFzdFRleHQ6IFNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgICAgfSxcclxuICAgICAgdGVydGlhcnk6IHtcclxuICAgICAgICBtYWluOiBURVJUSUFSWV9DT0xPUixcclxuICAgICAgICBkYXJrOiAnIzkxNDM0NScsXHJcbiAgICAgICAgbGlnaHQ6ICcjZjlhMDllJyxcclxuICAgICAgICBjb250cmFzdFRleHQ6IFRFUlRJQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiB7XHJcbiAgICAgICAgLi4uZ3JlZW4sXHJcbiAgICAgICAgbWFpbjogJyMzMTY1MDMnLFxyXG4gICAgICB9LFxyXG4gICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgLy8gZGVmYXVsdDogXCIjMzAzMDMwXCIsXHJcbiAgICAgICAgZGVmYXVsdDogcHJlZmVyc0RhcmtNb2RlID8gJyMyNzI1MjUnIDogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNoYXBlOiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogQk9SREVSX1JBRElPVVMsXHJcbiAgICB9LFxyXG4gICAgc3BhY2luZzogMTYsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBNdWlQYXBlcjoge1xyXG4gICAgICAgIGVsZXZhdGlvbjogMyxcclxuICAgICAgfSxcclxuICAgICAgTXVpVGV4dEZpZWxkOiB7XHJcbiAgICAgICAgSW5wdXRMYWJlbFByb3BzOiB7XHJcbiAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpQnV0dG9uOiB7XHJcbiAgICAgICAgZGlzYWJsZVJpcHBsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgTXVpQ2hlY2tib3g6IHtcclxuICAgICAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG92ZXJyaWRlczoge1xyXG4gICAgICBNdWlQYXBlcjoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGNvbG9yOiBwcmVmZXJzRGFya01vZGUgPyAnI2QyZDJkMicgOiBjb21tb25bJ3doaXRlJ10sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByZWZlcnNEYXJrTW9kZSA/ICcjMmMyYzJjJyA6IERBUktfQkFDS0dST1VORF9DT0xPUixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlNb2JpbGVTdGVwcGVyOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zaXRpb25Cb3R0b206IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUFwcEJhcjoge1xyXG4gICAgICAgIHBvc2l0aW9uRml4ZWQ6IHtcclxuICAgICAgICAgIHpJbmRleDogMTEwMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlUb29sYmFyOiB7XHJcbiAgICAgICAgZ3V0dGVyczoge1xyXG4gICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICAnQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSc6IHtcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVndWxhcjoge1xyXG4gICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICAnQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSc6IHtcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICAnQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSc6IHtcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUZpbGxlZElucHV0OiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUlucHV0TGFiZWw6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpQnV0dG9uOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pXHJcblxyXG4gIHRoZW1lLnBhbGV0dGUudGVydGlhcnkgPSB0aGVtZS5wYWxldHRlLmF1Z21lbnRDb2xvcih7XHJcbiAgICBtYWluOiAnI2M0NzA3MCcsXHJcbiAgICBkYXJrOiAnIzkxNDM0NScsXHJcbiAgICBsaWdodDogJyNmOWEwOWUnLFxyXG4gICAgY29udHJhc3RUZXh0OiBQUklNQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gIH0pXHJcbiAgcmV0dXJuIHRoZW1lXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdHlsZWRDb21wb25lbnRzVGhlbWU6IERlZmF1bHRUaGVtZSA9IHtcclxuICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gIGNvbG9yczoge1xyXG4gICAgcHJpbWFyeTogUFJJTUFSWV9DT0xPUixcclxuICAgIHByaW1hcnlDb250cmFzdDogUFJJTUFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgIHNlY29uZGFyeTogU0VDT05EQVJZX0NPTE9SLFxyXG4gICAgc2Vjb25kYXJ5Q29udHJhc3Q6IFNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgIHRlcnRpYXJ5OiBURVJUSUFSWV9DT0xPUixcclxuICAgIHRlcnRpYXJ5Q29udHJhc3Q6IFRFUlRJQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgZGFyazogREFSS19DT0xPUixcclxuICAgIGxpZ2h0OiBMSUdIVF9DT0xPUixcclxuICB9LFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTdHlsZWRDb21wb25lbnRDb2xvcktleSA9IGtleW9mIERlZmF1bHRUaGVtZVsnY29sb3JzJ11cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==