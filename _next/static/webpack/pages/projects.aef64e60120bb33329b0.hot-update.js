webpackHotUpdate_N_E("pages/projects",{

/***/ "./src/components/Layout/Navigation.tsx":
/*!**********************************************!*\
  !*** ./src/components/Layout/Navigation.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SideDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SideDrawer */ "./src/components/Layout/SideDrawer.tsx");
/* harmony import */ var _SideItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SideItems */ "./src/components/Layout/SideItems.tsx");
var _jsxFileName = "D:\\WEB_DEV\\Personal_Projects\\wilfredlopez\\src\\components\\Layout\\Navigation.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







 // const GRADIANT = 'linear-gradient(0deg, #2f946d 40%, #30a275 50%, #298a64 100%)'

const GRADIANT = 'linear-gradient(0deg, #e6491d 40%, #d6431a 50%, #9a2f11 100%)'; // 'linear-gradient(180deg, rgb(132 78 0) 45%, rgb(255 157 4) 100%)' // 'linear-gradient(180deg, rgb(35 35 35) 45%, rgb(191 115 1) 100%)'

const GRADIANT_DARK = 'linear-gradient(0deg, #982f11 40%, #922d11 50%, #4c1709 100%)';
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  toolbar: {
    transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    background: theme.palette.type === 'dark' ? GRADIANT_DARK : GRADIANT,
    //'#af6800', //'#1b1f29', //theme.palette.grey[100],
    color: theme.palette.common.white //theme.palette.secondary.contrastText,
    // width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   width: "calc(100% - 240px)",
    // },

  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(1)
  },
  spacer: {
    flexGrow: 2
  },
  separator: {
    flex: '1 1 auto'
  },
  listItem: {
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    marginLeft: 12,
    fontWeight: 500,
    fontSize: '1rem',
    '&:hover, &.Mui-selected:hover, &.Mui-selected': {
      color: theme.palette.secondary.main,
      background: 'transparent'
    }
  }
}));
function Navigation() {
  _s();

  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    position: "fixed",
    className: classes.toolbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(_SideDrawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    anchor: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Hidden"], {
    only: "xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.title,
    variant: "h6",
    component: "h1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "WilfredLopez")), __jsx("div", {
    className: classes.separator,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }), __jsx(_SideItems__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }))));
}

_s(Navigation, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Navigation;

var _c;

$RefreshReg$(_c, "Navigation");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L05hdmlnYXRpb24udHN4Il0sIm5hbWVzIjpbIkdSQURJQU5UIiwiR1JBRElBTlRfREFSSyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsImRpc3BsYXkiLCJ0b29sYmFyIiwidHJhbnNpdGlvbiIsImJhY2tncm91bmQiLCJwYWxldHRlIiwidHlwZSIsImNvbG9yIiwiY29tbW9uIiwid2hpdGUiLCJ0aXRsZSIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwic3BhY2VyIiwic2VwYXJhdG9yIiwiZmxleCIsImxpc3RJdGVtIiwianVzdGlmeUNvbnRlbnQiLCJ3aGl0ZVNwYWNlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwic2Vjb25kYXJ5IiwibWFpbiIsIk5hdmlnYXRpb24iLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQTs7QUFDQSxNQUFNQSxRQUFRLEdBQUcsK0RBQWpCLEMsQ0FBaUY7O0FBQ2pGLE1BQU1DLGFBQWEsR0FBRywrREFBdEI7QUFFQSxNQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUNDLEtBQUssS0FBSztBQUNyQ0MsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRSxDQUROO0FBRUpDLFdBQU8sRUFBRTtBQUZMLEdBRCtCO0FBS3JDQyxTQUFPLEVBQUU7QUFDUEMsY0FBVSxFQUFFLDhDQURMO0FBRVBDLGNBQVUsRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWNDLElBQWQsS0FBdUIsTUFBdkIsR0FBZ0NYLGFBQWhDLEdBQWdERCxRQUZyRDtBQUU4RDtBQUNyRWEsU0FBSyxFQUFFVCxLQUFLLENBQUNPLE9BQU4sQ0FBY0csTUFBZCxDQUFxQkMsS0FIckIsQ0FHNEI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBUE8sR0FMNEI7QUFjckNDLE9BQUssRUFBRTtBQUNMVixZQUFRLEVBQUUsQ0FETDtBQUVMVyxjQUFVLEVBQUViLEtBQUssQ0FBQ2MsT0FBTixDQUFjLENBQWQ7QUFGUCxHQWQ4QjtBQWtCckNDLFFBQU0sRUFBRTtBQUNOYixZQUFRLEVBQUU7QUFESixHQWxCNkI7QUFxQnJDYyxXQUFTLEVBQUU7QUFDVEMsUUFBSSxFQUFFO0FBREcsR0FyQjBCO0FBd0JyQ0MsVUFBUSxFQUFFO0FBQ1JDLGtCQUFjLEVBQUUsUUFEUjtBQUVSQyxjQUFVLEVBQUUsUUFGSjtBQUdSUCxjQUFVLEVBQUUsRUFISjtBQUlSUSxjQUFVLEVBQUUsR0FKSjtBQUtSQyxZQUFRLEVBQUUsTUFMRjtBQU1SLHFEQUFpRDtBQUMvQ2IsV0FBSyxFQUFFVCxLQUFLLENBQUNPLE9BQU4sQ0FBY2dCLFNBQWQsQ0FBd0JDLElBRGdCO0FBRS9DbEIsZ0JBQVUsRUFBRTtBQUZtQztBQU56QztBQXhCMkIsQ0FBTCxDQUFOLENBQTVCO0FBcUNlLFNBQVNtQixVQUFULEdBQXNCO0FBQUE7O0FBQ25DLFFBQU1DLE9BQU8sR0FBRzVCLFNBQVMsRUFBekI7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFFNEIsT0FBTyxDQUFDekIsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBUSxZQUFRLEVBQUMsT0FBakI7QUFBeUIsYUFBUyxFQUFFeUIsT0FBTyxDQUFDdEIsT0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBWSxVQUFNLEVBQUMsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBR0UsTUFBQyx3REFBRDtBQUFRLFFBQUksRUFBQyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQVksYUFBUyxFQUFFc0IsT0FBTyxDQUFDZCxLQUEvQjtBQUFzQyxXQUFPLEVBQUMsSUFBOUM7QUFBbUQsYUFBUyxFQUFDLElBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FIRixFQVFFO0FBQUssYUFBUyxFQUFFYyxPQUFPLENBQUNWLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQWNFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLENBREYsQ0FERixDQURGO0FBc0JEOztHQXpCdUJTLFU7VUFDTjNCLFM7OztLQURNMkIsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy5hZWY2NGU2MDEyMGJiMzMzMjliMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGlkZGVuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTaWRlRHJhd2VyIGZyb20gJy4vU2lkZURyYXdlcidcclxuaW1wb3J0IFNpZGVJdGVtcyBmcm9tICcuL1NpZGVJdGVtcydcclxuXHJcblxyXG4vLyBjb25zdCBHUkFESUFOVCA9ICdsaW5lYXItZ3JhZGllbnQoMGRlZywgIzJmOTQ2ZCA0MCUsICMzMGEyNzUgNTAlLCAjMjk4YTY0IDEwMCUpJ1xyXG5jb25zdCBHUkFESUFOVCA9ICdsaW5lYXItZ3JhZGllbnQoMGRlZywgI2U2NDkxZCA0MCUsICNkNjQzMWEgNTAlLCAjOWEyZjExIDEwMCUpJyAvLyAnbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiKDEzMiA3OCAwKSA0NSUsIHJnYigyNTUgMTU3IDQpIDEwMCUpJyAvLyAnbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiKDM1IDM1IDM1KSA0NSUsIHJnYigxOTEgMTE1IDEpIDEwMCUpJ1xyXG5jb25zdCBHUkFESUFOVF9EQVJLID0gJ2xpbmVhci1ncmFkaWVudCgwZGVnLCAjOTgyZjExIDQwJSwgIzkyMmQxMSA1MCUsICM0YzE3MDkgMTAwJSknXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgfSxcclxuICB0b29sYmFyOiB7XHJcbiAgICB0cmFuc2l0aW9uOiAnd2lkdGggMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXMnLFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyBHUkFESUFOVF9EQVJLIDogR1JBRElBTlQsLy8nI2FmNjgwMCcsIC8vJyMxYjFmMjknLCAvL3RoZW1lLnBhbGV0dGUuZ3JleVsxMDBdLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAvL3RoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgIC8vIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIC8vIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgLy8gICB3aWR0aDogXCJjYWxjKDEwMCUgLSAyNDBweClcIixcclxuICAgIC8vIH0sXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgc3BhY2VyOiB7XHJcbiAgICBmbGV4R3JvdzogMixcclxuICB9LFxyXG4gIHNlcGFyYXRvcjoge1xyXG4gICAgZmxleDogJzEgMSBhdXRvJyxcclxuICB9LFxyXG4gIGxpc3RJdGVtOiB7XHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgIG1hcmdpbkxlZnQ6IDEyLFxyXG4gICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgICcmOmhvdmVyLCAmLk11aS1zZWxlY3RlZDpob3ZlciwgJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj0nZml4ZWQnIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxTaWRlRHJhd2VyIGFuY2hvcj0nbGVmdCcgLz5cclxuXHJcbiAgICAgICAgICA8SGlkZGVuIG9ubHk9J3hzJz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSB2YXJpYW50PSdoNicgY29tcG9uZW50PSdoMSc+XHJcbiAgICAgICAgICAgICAgV2lsZnJlZExvcGV6XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VwYXJhdG9yfSAvPlxyXG4gICAgICAgICAgey8qIDxIaWRkZW4gb25seT1cInhzXCI+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgV2lsZnJlZExvcGV6Lk5ldFxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0hpZGRlbj4gKi99XHJcbiAgICAgICAgICA8U2lkZUl0ZW1zIC8+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9