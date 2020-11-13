webpackHotUpdate_N_E("pages/index",{

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








const GRADIANT = 'linear-gradient(0deg, #e6491d 40%, #d6431a 50%, #9a2f11 100%)'; // 'linear-gradient(180deg, rgb(132 78 0) 45%, rgb(255 157 4) 100%)' // 'linear-gradient(180deg, rgb(35 35 35) 45%, rgb(191 115 1) 100%)'

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  toolbar: {
    transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    background: GRADIANT,
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
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    position: "fixed",
    className: classes.toolbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(_SideDrawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    anchor: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Hidden"], {
    only: "xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.title,
    variant: "h6",
    component: "h1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "WilfredLopez")), __jsx("div", {
    className: classes.separator,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }), __jsx(_SideItems__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L05hdmlnYXRpb24udHN4Il0sIm5hbWVzIjpbIkdSQURJQU5UIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwiZGlzcGxheSIsInRvb2xiYXIiLCJ0cmFuc2l0aW9uIiwiYmFja2dyb3VuZCIsImNvbG9yIiwicGFsZXR0ZSIsImNvbW1vbiIsIndoaXRlIiwidGl0bGUiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsInNwYWNlciIsInNlcGFyYXRvciIsImZsZXgiLCJsaXN0SXRlbSIsImp1c3RpZnlDb250ZW50Iiwid2hpdGVTcGFjZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInNlY29uZGFyeSIsIm1haW4iLCJOYXZpZ2F0aW9uIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxNQUFNQSxRQUFRLEdBQUcsK0RBQWpCLEMsQ0FBaUY7O0FBRWpGLE1BQU1DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxNQUFJLEVBQUU7QUFDSkMsWUFBUSxFQUFFLENBRE47QUFFSkMsV0FBTyxFQUFFO0FBRkwsR0FEK0I7QUFLckNDLFNBQU8sRUFBRTtBQUNQQyxjQUFVLEVBQUUsOENBREw7QUFFUEMsY0FBVSxFQUFFVCxRQUZMO0FBRWM7QUFDckJVLFNBQUssRUFBRVAsS0FBSyxDQUFDUSxPQUFOLENBQWNDLE1BQWQsQ0FBcUJDLEtBSHJCLENBRzRCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQVBPLEdBTDRCO0FBY3JDQyxPQUFLLEVBQUU7QUFDTFQsWUFBUSxFQUFFLENBREw7QUFFTFUsY0FBVSxFQUFFWixLQUFLLENBQUNhLE9BQU4sQ0FBYyxDQUFkO0FBRlAsR0FkOEI7QUFrQnJDQyxRQUFNLEVBQUU7QUFDTlosWUFBUSxFQUFFO0FBREosR0FsQjZCO0FBcUJyQ2EsV0FBUyxFQUFFO0FBQ1RDLFFBQUksRUFBRTtBQURHLEdBckIwQjtBQXdCckNDLFVBQVEsRUFBRTtBQUNSQyxrQkFBYyxFQUFFLFFBRFI7QUFFUkMsY0FBVSxFQUFFLFFBRko7QUFHUlAsY0FBVSxFQUFFLEVBSEo7QUFJUlEsY0FBVSxFQUFFLEdBSko7QUFLUkMsWUFBUSxFQUFFLE1BTEY7QUFNUixxREFBaUQ7QUFDL0NkLFdBQUssRUFBRVAsS0FBSyxDQUFDUSxPQUFOLENBQWNjLFNBQWQsQ0FBd0JDLElBRGdCO0FBRS9DakIsZ0JBQVUsRUFBRTtBQUZtQztBQU56QztBQXhCMkIsQ0FBTCxDQUFOLENBQTVCO0FBcUNlLFNBQVNrQixVQUFULEdBQXNCO0FBQUE7O0FBQ25DLFFBQU1DLE9BQU8sR0FBRzNCLFNBQVMsRUFBekI7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFFMkIsT0FBTyxDQUFDeEIsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBUSxZQUFRLEVBQUMsT0FBakI7QUFBeUIsYUFBUyxFQUFFd0IsT0FBTyxDQUFDckIsT0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBWSxVQUFNLEVBQUMsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBR0UsTUFBQyx3REFBRDtBQUFRLFFBQUksRUFBQyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQVksYUFBUyxFQUFFcUIsT0FBTyxDQUFDZCxLQUEvQjtBQUFzQyxXQUFPLEVBQUMsSUFBOUM7QUFBbUQsYUFBUyxFQUFDLElBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FIRixFQVFFO0FBQUssYUFBUyxFQUFFYyxPQUFPLENBQUNWLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQWNFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLENBREYsQ0FERixDQURGO0FBc0JEOztHQXpCdUJTLFU7VUFDTjFCLFM7OztLQURNMEIsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNWIxMmU2Y2EwOTcxOTFhZmRlMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGlkZGVuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTaWRlRHJhd2VyIGZyb20gJy4vU2lkZURyYXdlcidcclxuaW1wb3J0IFNpZGVJdGVtcyBmcm9tICcuL1NpZGVJdGVtcydcclxuXHJcblxyXG5jb25zdCBHUkFESUFOVCA9ICdsaW5lYXItZ3JhZGllbnQoMGRlZywgI2U2NDkxZCA0MCUsICNkNjQzMWEgNTAlLCAjOWEyZjExIDEwMCUpJyAvLyAnbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiKDEzMiA3OCAwKSA0NSUsIHJnYigyNTUgMTU3IDQpIDEwMCUpJyAvLyAnbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiKDM1IDM1IDM1KSA0NSUsIHJnYigxOTEgMTE1IDEpIDEwMCUpJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIH0sXHJcbiAgdG9vbGJhcjoge1xyXG4gICAgdHJhbnNpdGlvbjogJ3dpZHRoIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zJyxcclxuICAgIGJhY2tncm91bmQ6IEdSQURJQU5ULC8vJyNhZjY4MDAnLCAvLycjMWIxZjI5JywgLy90aGVtZS5wYWxldHRlLmdyZXlbMTAwXSxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSwgLy90aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXHJcbiAgICAvLyB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAvLyBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgIC8vICAgd2lkdGg6IFwiY2FsYygxMDAlIC0gMjQwcHgpXCIsXHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIHNwYWNlcjoge1xyXG4gICAgZmxleEdyb3c6IDIsXHJcbiAgfSxcclxuICBzZXBhcmF0b3I6IHtcclxuICAgIGZsZXg6ICcxIDEgYXV0bycsXHJcbiAgfSxcclxuICBsaXN0SXRlbToge1xyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAxMixcclxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICAnJjpob3ZlciwgJi5NdWktc2VsZWN0ZWQ6aG92ZXIsICYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249J2ZpeGVkJyBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XHJcbiAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICA8U2lkZURyYXdlciBhbmNob3I9J2xlZnQnIC8+XHJcblxyXG4gICAgICAgICAgPEhpZGRlbiBvbmx5PSd4cyc+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gdmFyaWFudD0naDYnIGNvbXBvbmVudD0naDEnPlxyXG4gICAgICAgICAgICAgIFdpbGZyZWRMb3BlelxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlcGFyYXRvcn0gLz5cclxuICAgICAgICAgIHsvKiA8SGlkZGVuIG9ubHk9XCJ4c1wiPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgIFdpbGZyZWRMb3Blei5OZXRcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9IaWRkZW4+ICovfVxyXG4gICAgICAgICAgPFNpZGVJdGVtcyAvPlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==