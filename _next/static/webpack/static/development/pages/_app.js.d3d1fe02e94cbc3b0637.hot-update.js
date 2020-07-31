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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dldFRoZW1lLnRzIl0sIm5hbWVzIjpbIlNFQ09OREFSWV9DT0xPUiIsInNlY29uZGFyeSIsIlNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCIsImNvbW1vbiIsIlBSSU1BUllfQ09MT1IiLCJwcmltYXJ5IiwiVE9PTEJBUl9NSU5fSEVJR0hUIiwiUFJJTUFSWV9DT0xPUl9DT05UUkFTVCIsIkRBUktfQ09MT1IiLCJMSUdIVF9DT0xPUiIsIkJPUkRFUl9SQURJT1VTIiwiZ2V0VGhlbWUiLCJwcmVmZXJzRGFya01vZGUiLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwic3RhdHVzIiwiZGFuZ2VyIiwicmVkIiwiY2xhc3NlcyIsImNvbnN0cmFpbmVkIiwibWF4V2lkdGgiLCJtYXJnaW5MZWZ0IiwidGV4dENvbnRyYXN0IiwiY29sb3IiLCJwYWxldHRlIiwidHlwZSIsIm1haW4iLCJjb250cmFzdFRleHQiLCJ0ZXJ0aWFyeSIsImRhcmsiLCJsaWdodCIsInN1Y2Nlc3MiLCJncmVlbiIsImJhY2tncm91bmQiLCJkZWZhdWx0Iiwic2hhcGUiLCJib3JkZXJSYWRpdXMiLCJzcGFjaW5nIiwicHJvcHMiLCJNdWlQYXBlciIsImVsZXZhdGlvbiIsIk11aVRleHRGaWVsZCIsIklucHV0TGFiZWxQcm9wcyIsInNocmluayIsIk11aUJ1dHRvbiIsImRpc2FibGVSaXBwbGUiLCJNdWlDaGVja2JveCIsIm92ZXJyaWRlcyIsInJvb3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJNdWlNb2JpbGVTdGVwcGVyIiwicG9zaXRpb25Cb3R0b20iLCJwb3NpdGlvbiIsIk11aUFwcEJhciIsInBvc2l0aW9uRml4ZWQiLCJ6SW5kZXgiLCJNdWlUb29sYmFyIiwiZ3V0dGVycyIsIm1pbkhlaWdodCIsInJlZ3VsYXIiLCJNdWlGaWxsZWRJbnB1dCIsIk11aUlucHV0TGFiZWwiLCJ0ZXh0VHJhbnNmb3JtIiwiYXVnbWVudENvbG9yIiwic3R5bGVkQ29tcG9uZW50c1RoZW1lIiwiY29sb3JzIiwicHJpbWFyeUNvbnRyYXN0Iiwic2Vjb25kYXJ5Q29udHJhc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSU8sTUFBTUEsZUFBZSxHQUFHQyxvRUFBUyxDQUFDLEdBQUQsQ0FBakM7QUFDQSxNQUFNQyx3QkFBd0IsR0FBR0MsK0RBQU0sQ0FBQyxPQUFELENBQXZDO0FBQ0EsSUFBSUMsYUFBcUIsR0FBR0Msd0VBQU8sQ0FBQyxHQUFELENBQW5DO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsRUFBM0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBR0osK0RBQU0sQ0FBQyxPQUFELENBQXJDO0FBQ0EsTUFBTUssVUFBVSxHQUFHLFNBQW5CO0FBQ0EsTUFBTUMsV0FBVyxHQUFHTiwrREFBTSxDQUFDLE9BQUQsQ0FBMUI7QUFDUCxNQUFNTyxjQUFjLEdBQUcsQ0FBdkIsQyxDQUVBOztBQUNlLFNBQVNDLFFBQVQsQ0FBa0JDLGVBQWUsR0FBRyxLQUFwQyxFQUEyQztBQUN4RDtBQUNBUixlQUFhLEdBQUdRLGVBQWUsR0FBRyxTQUFILEdBQWVQLHdFQUFPLENBQUMsR0FBRCxDQUFyRDtBQUVBLFFBQU1RLEtBQUssR0FBR0MsK0VBQWMsQ0FBQztBQUMzQkMsVUFBTSxFQUFFO0FBQ05DLFlBQU0sRUFBRUMsNERBQUcsQ0FBQyxHQUFEO0FBREwsS0FEbUI7QUFJM0JDLFdBQU8sRUFBRTtBQUNQQyxpQkFBVyxFQUFFO0FBQ1hDLGdCQUFRLEVBQUUsR0FEQztBQUVYQyxrQkFBVSxFQUFFO0FBRkQsT0FETjtBQUtQQyxrQkFBWSxFQUFFO0FBQ1pDLGFBQUssRUFBRXBCLCtEQUFNLENBQUMsT0FBRDtBQUREO0FBTFAsS0FKa0I7QUFhM0JxQixXQUFPLEVBQUU7QUFDUEMsVUFBSSxFQUFFYixlQUFlLEdBQUcsTUFBSCxHQUFZLE9BRDFCO0FBRVBQLGFBQU8sRUFBRTtBQUNQcUIsWUFBSSxFQUFFdEIsYUFEQztBQUVQdUIsb0JBQVksRUFBRXBCO0FBRlAsT0FGRjtBQU1QTixlQUFTLEVBQUU7QUFDVHlCLFlBQUksRUFBRTFCLGVBREc7QUFHVDJCLG9CQUFZLEVBQUV6QjtBQUhMLE9BTko7QUFXUDBCLGNBQVEsRUFBRTtBQUNSRixZQUFJLEVBQUUsU0FERTtBQUVSRyxZQUFJLEVBQUUsU0FGRTtBQUdSQyxhQUFLLEVBQUUsU0FIQztBQUlSSCxvQkFBWSxFQUFFcEI7QUFKTixPQVhIO0FBaUJQd0IsYUFBTyxrQ0FDRkMsOERBREU7QUFFTE4sWUFBSSxFQUFFO0FBRkQsUUFqQkE7QUFxQlBPLGdCQUFVLEVBQUU7QUFDVjtBQUNBQyxlQUFPLEVBQUV0QixlQUFlLEdBQUcsU0FBSCxHQUFlO0FBRjdCO0FBckJMLEtBYmtCO0FBdUMzQnVCLFNBQUssRUFBRTtBQUNMQyxrQkFBWSxFQUFFMUI7QUFEVCxLQXZDb0I7QUEwQzNCMkIsV0FBTyxFQUFFLEVBMUNrQjtBQTJDM0JDLFNBQUssRUFBRTtBQUNMQyxjQUFRLEVBQUU7QUFDUkMsaUJBQVMsRUFBRTtBQURILE9BREw7QUFJTEMsa0JBQVksRUFBRTtBQUNaQyx1QkFBZSxFQUFFO0FBQ2ZDLGdCQUFNLEVBQUU7QUFETztBQURMLE9BSlQ7QUFTTEMsZUFBUyxFQUFFO0FBQ1RDLHFCQUFhLEVBQUU7QUFETixPQVROO0FBWUxDLGlCQUFXLEVBQUU7QUFDWEQscUJBQWEsRUFBRTtBQURKO0FBWlIsS0EzQ29CO0FBMkQzQkUsYUFBUyxFQUFFO0FBQ1RSLGNBQVEsRUFBRTtBQUNSUyxZQUFJLEVBQUU7QUFDSnpCLGVBQUssRUFBRVgsZUFBZSxHQUFHLFNBQUgsR0FBZVQsK0RBQU0sQ0FBQyxPQUFELENBRHZDO0FBRUo4Qyx5QkFBZSxFQUFFckMsZUFBZSxHQUFHLFNBQUgsR0FBZTtBQUYzQztBQURFLE9BREQ7QUFPVHNDLHNCQUFnQixFQUFFO0FBQ2hCRixZQUFJLEVBQUU7QUFDSkMseUJBQWUsRUFBRTtBQURiLFNBRFU7QUFJaEJFLHNCQUFjLEVBQUU7QUFDZEMsa0JBQVEsRUFBRTtBQURJO0FBSkEsT0FQVDtBQWVUQyxlQUFTLEVBQUU7QUFDVEMscUJBQWEsRUFBRTtBQUNiQyxnQkFBTSxFQUFFO0FBREs7QUFETixPQWZGO0FBb0JUQyxnQkFBVSxFQUFFO0FBQ1ZDLGVBQU8sRUFBRTtBQUNQQyxtQkFBUyxFQUFFcEQsa0JBREo7QUFFUCx1Q0FBNkI7QUFDM0JvRCxxQkFBUyxFQUFFcEQ7QUFEZ0I7QUFGdEIsU0FEQztBQU9WcUQsZUFBTyxFQUFFO0FBQ1BELG1CQUFTLEVBQUVwRCxrQkFESjtBQUVQLHVDQUE2QjtBQUMzQm9ELHFCQUFTLEVBQUVwRDtBQURnQjtBQUZ0QixTQVBDO0FBYVYwQyxZQUFJLEVBQUU7QUFDSlUsbUJBQVMsRUFBRXBELGtCQURQO0FBRUosdUNBQTZCO0FBQzNCb0QscUJBQVMsRUFBRXBEO0FBRGdCO0FBRnpCO0FBYkksT0FwQkg7QUF3Q1RzRCxvQkFBYyxFQUFFO0FBQ2RaLFlBQUksRUFBRTtBQUNKQyx5QkFBZSxFQUFFO0FBRGI7QUFEUSxPQXhDUDtBQTZDVFksbUJBQWEsRUFBRTtBQUNiYixZQUFJLEVBQUU7QUFDSkMseUJBQWUsRUFBRTtBQURiO0FBRE8sT0E3Q047QUFrRFRMLGVBQVMsRUFBRTtBQUNUSSxZQUFJLEVBQUU7QUFDSmMsdUJBQWEsRUFBRTtBQURYO0FBREc7QUFsREY7QUEzRGdCLEdBQUQsQ0FBNUI7QUFxSEFqRCxPQUFLLENBQUNXLE9BQU4sQ0FBY0ksUUFBZCxHQUF5QmYsS0FBSyxDQUFDVyxPQUFOLENBQWN1QyxZQUFkLENBQTJCO0FBQ2xEckMsUUFBSSxFQUFFLFNBRDRDO0FBRWxERyxRQUFJLEVBQUUsU0FGNEM7QUFHbERDLFNBQUssRUFBRSxTQUgyQztBQUlsREgsZ0JBQVksRUFBRXBCO0FBSm9DLEdBQTNCLENBQXpCO0FBTUEsU0FBT00sS0FBUDtBQUNEO0FBRU0sTUFBTW1ELHFCQUFtQyxHQUFHO0FBQ2pENUIsY0FBWSxFQUFFLEtBRG1DO0FBRWpENkIsUUFBTSxFQUFFO0FBQ041RCxXQUFPLEVBQUVELGFBREg7QUFFTjhELG1CQUFlLEVBQUUzRCxzQkFGWDtBQUdOTixhQUFTLEVBQUVELGVBSEw7QUFJTm1FLHFCQUFpQixFQUFFakUsd0JBSmI7QUFLTjJCLFFBQUksRUFBRXJCLFVBTEE7QUFNTnNCLFNBQUssRUFBRXJCO0FBTkQ7QUFGeUMsQ0FBNUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuZDNkMWZlMDJlOTRjYmMzYjA2MzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbW1vbiwgZ3JlZW4sIHJlZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIjtcclxuaW1wb3J0IHByaW1hcnkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ibHVlR3JleVwiO1xyXG5pbXBvcnQgc2Vjb25kYXJ5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvdGVhbFwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZU11aVRoZW1lLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgRGVmYXVsdFRoZW1lIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmV4cG9ydCBjb25zdCBTRUNPTkRBUllfQ09MT1IgPSBzZWNvbmRhcnlbNTAwXTtcclxuZXhwb3J0IGNvbnN0IFNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCA9IGNvbW1vbltcIndoaXRlXCJdO1xyXG5leHBvcnQgbGV0IFBSSU1BUllfQ09MT1I6IHN0cmluZyA9IHByaW1hcnlbOTAwXTtcclxuZXhwb3J0IGNvbnN0IFRPT0xCQVJfTUlOX0hFSUdIVCA9IDE1O1xyXG5leHBvcnQgY29uc3QgUFJJTUFSWV9DT0xPUl9DT05UUkFTVCA9IGNvbW1vbltcIndoaXRlXCJdO1xyXG5leHBvcnQgY29uc3QgREFSS19DT0xPUiA9IFwiIzA0MGMxNFwiO1xyXG5leHBvcnQgY29uc3QgTElHSFRfQ09MT1IgPSBjb21tb25bXCJ3aGl0ZVwiXTtcclxuY29uc3QgQk9SREVSX1JBRElPVVMgPSA0O1xyXG5cclxuLy9Db29sIEdyZWVuIC8jMzhiNTg0XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRoZW1lKHByZWZlcnNEYXJrTW9kZSA9IGZhbHNlKSB7XHJcbiAgLy8gUFJJTUFSWV9DT0xPUiA9IHByZWZlcnNEYXJrTW9kZSA/IFwiIzMxOWRkZlwiIDogcHJpbWFyeVs5MDBdO1xyXG4gIFBSSU1BUllfQ09MT1IgPSBwcmVmZXJzRGFya01vZGUgPyBcIiMwNDBjMTRcIiA6IHByaW1hcnlbOTAwXTtcclxuXHJcbiAgY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgICBzdGF0dXM6IHtcclxuICAgICAgZGFuZ2VyOiByZWRbNTAwXSxcclxuICAgIH0sXHJcbiAgICBjbGFzc2VzOiB7XHJcbiAgICAgIGNvbnN0cmFpbmVkOiB7XHJcbiAgICAgICAgbWF4V2lkdGg6IDk0NSxcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcclxuICAgICAgfSxcclxuICAgICAgdGV4dENvbnRyYXN0OiB7XHJcbiAgICAgICAgY29sb3I6IGNvbW1vbltcIndoaXRlXCJdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgdHlwZTogcHJlZmVyc0RhcmtNb2RlID8gXCJkYXJrXCIgOiBcImxpZ2h0XCIsXHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBtYWluOiBQUklNQVJZX0NPTE9SLFxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogUFJJTUFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgbWFpbjogU0VDT05EQVJZX0NPTE9SLFxyXG5cclxuICAgICAgICBjb250cmFzdFRleHQ6IFNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCxcclxuICAgICAgfSxcclxuICAgICAgdGVydGlhcnk6IHtcclxuICAgICAgICBtYWluOiBcIiNjNDcwNzBcIixcclxuICAgICAgICBkYXJrOiBcIiM5MTQzNDVcIixcclxuICAgICAgICBsaWdodDogXCIjZjlhMDllXCIsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiBQUklNQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiB7XHJcbiAgICAgICAgLi4uZ3JlZW4sXHJcbiAgICAgICAgbWFpbjogXCIjNjg5ZjM4XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICAvLyBkZWZhdWx0OiBcIiMzMDMwMzBcIixcclxuICAgICAgICBkZWZhdWx0OiBwcmVmZXJzRGFya01vZGUgPyBcIiMyNzI1MjVcIiA6IFwiI2ZmZlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNoYXBlOiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogQk9SREVSX1JBRElPVVMsXHJcbiAgICB9LFxyXG4gICAgc3BhY2luZzogMTYsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBNdWlQYXBlcjoge1xyXG4gICAgICAgIGVsZXZhdGlvbjogMyxcclxuICAgICAgfSxcclxuICAgICAgTXVpVGV4dEZpZWxkOiB7XHJcbiAgICAgICAgSW5wdXRMYWJlbFByb3BzOiB7XHJcbiAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpQnV0dG9uOiB7XHJcbiAgICAgICAgZGlzYWJsZVJpcHBsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgTXVpQ2hlY2tib3g6IHtcclxuICAgICAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG92ZXJyaWRlczoge1xyXG4gICAgICBNdWlQYXBlcjoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGNvbG9yOiBwcmVmZXJzRGFya01vZGUgPyBcIiNkMmQyZDJcIiA6IGNvbW1vbltcIndoaXRlXCJdLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcmVmZXJzRGFya01vZGUgPyBcIiMyYzJjMmNcIiA6IFwiIzMwMzAzMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aU1vYmlsZVN0ZXBwZXI6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uQm90dG9tOiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUFwcEJhcjoge1xyXG4gICAgICAgIHBvc2l0aW9uRml4ZWQ6IHtcclxuICAgICAgICAgIHpJbmRleDogMTEwMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlUb29sYmFyOiB7XHJcbiAgICAgICAgZ3V0dGVyczoge1xyXG4gICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiA2MDBweClcIjoge1xyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWd1bGFyOiB7XHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KVwiOiB7XHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgXCJAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpXCI6IHtcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUZpbGxlZElucHV0OiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpSW5wdXRMYWJlbDoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUJ1dHRvbjoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5ID0gdGhlbWUucGFsZXR0ZS5hdWdtZW50Q29sb3Ioe1xyXG4gICAgbWFpbjogXCIjYzQ3MDcwXCIsXHJcbiAgICBkYXJrOiBcIiM5MTQzNDVcIixcclxuICAgIGxpZ2h0OiBcIiNmOWEwOWVcIixcclxuICAgIGNvbnRyYXN0VGV4dDogUFJJTUFSWV9DT0xPUl9DT05UUkFTVCxcclxuICB9KTtcclxuICByZXR1cm4gdGhlbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdHlsZWRDb21wb25lbnRzVGhlbWU6IERlZmF1bHRUaGVtZSA9IHtcclxuICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgY29sb3JzOiB7XHJcbiAgICBwcmltYXJ5OiBQUklNQVJZX0NPTE9SLFxyXG4gICAgcHJpbWFyeUNvbnRyYXN0OiBQUklNQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgc2Vjb25kYXJ5OiBTRUNPTkRBUllfQ09MT1IsXHJcbiAgICBzZWNvbmRhcnlDb250cmFzdDogU0VDT05EQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgZGFyazogREFSS19DT0xPUixcclxuICAgIGxpZ2h0OiBMSUdIVF9DT0xPUixcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9