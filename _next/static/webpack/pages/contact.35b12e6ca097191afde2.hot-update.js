webpackHotUpdate_N_E("pages/contact",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L05hdmlnYXRpb24udHN4Il0sIm5hbWVzIjpbIkdSQURJQU5UIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwiZGlzcGxheSIsInRvb2xiYXIiLCJ0cmFuc2l0aW9uIiwiYmFja2dyb3VuZCIsImNvbG9yIiwicGFsZXR0ZSIsImNvbW1vbiIsIndoaXRlIiwidGl0bGUiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsInNwYWNlciIsInNlcGFyYXRvciIsImZsZXgiLCJsaXN0SXRlbSIsImp1c3RpZnlDb250ZW50Iiwid2hpdGVTcGFjZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInNlY29uZGFyeSIsIm1haW4iLCJOYXZpZ2F0aW9uIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxNQUFNQSxRQUFRLEdBQUcsK0RBQWpCLEMsQ0FBaUY7O0FBRWpGLE1BQU1DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxNQUFJLEVBQUU7QUFDSkMsWUFBUSxFQUFFLENBRE47QUFFSkMsV0FBTyxFQUFFO0FBRkwsR0FEK0I7QUFLckNDLFNBQU8sRUFBRTtBQUNQQyxjQUFVLEVBQUUsOENBREw7QUFFUEMsY0FBVSxFQUFFVCxRQUZMO0FBRWM7QUFDckJVLFNBQUssRUFBRVAsS0FBSyxDQUFDUSxPQUFOLENBQWNDLE1BQWQsQ0FBcUJDLEtBSHJCLENBRzRCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQVBPLEdBTDRCO0FBY3JDQyxPQUFLLEVBQUU7QUFDTFQsWUFBUSxFQUFFLENBREw7QUFFTFUsY0FBVSxFQUFFWixLQUFLLENBQUNhLE9BQU4sQ0FBYyxDQUFkO0FBRlAsR0FkOEI7QUFrQnJDQyxRQUFNLEVBQUU7QUFDTlosWUFBUSxFQUFFO0FBREosR0FsQjZCO0FBcUJyQ2EsV0FBUyxFQUFFO0FBQ1RDLFFBQUksRUFBRTtBQURHLEdBckIwQjtBQXdCckNDLFVBQVEsRUFBRTtBQUNSQyxrQkFBYyxFQUFFLFFBRFI7QUFFUkMsY0FBVSxFQUFFLFFBRko7QUFHUlAsY0FBVSxFQUFFLEVBSEo7QUFJUlEsY0FBVSxFQUFFLEdBSko7QUFLUkMsWUFBUSxFQUFFLE1BTEY7QUFNUixxREFBaUQ7QUFDL0NkLFdBQUssRUFBRVAsS0FBSyxDQUFDUSxPQUFOLENBQWNjLFNBQWQsQ0FBd0JDLElBRGdCO0FBRS9DakIsZ0JBQVUsRUFBRTtBQUZtQztBQU56QztBQXhCMkIsQ0FBTCxDQUFOLENBQTVCO0FBcUNlLFNBQVNrQixVQUFULEdBQXNCO0FBQUE7O0FBQ25DLFFBQU1DLE9BQU8sR0FBRzNCLFNBQVMsRUFBekI7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFFMkIsT0FBTyxDQUFDeEIsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBUSxZQUFRLEVBQUMsT0FBakI7QUFBeUIsYUFBUyxFQUFFd0IsT0FBTyxDQUFDckIsT0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBWSxVQUFNLEVBQUMsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBR0UsTUFBQyx3REFBRDtBQUFRLFFBQUksRUFBQyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQVksYUFBUyxFQUFFcUIsT0FBTyxDQUFDZCxLQUEvQjtBQUFzQyxXQUFPLEVBQUMsSUFBOUM7QUFBbUQsYUFBUyxFQUFDLElBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FIRixFQVFFO0FBQUssYUFBUyxFQUFFYyxPQUFPLENBQUNWLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQWNFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLENBREYsQ0FERixDQURGO0FBc0JEOztHQXpCdUJTLFU7VUFDTjFCLFM7OztLQURNMEIsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250YWN0LjM1YjEyZTZjYTA5NzE5MWFmZGUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIaWRkZW4gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNpZGVEcmF3ZXIgZnJvbSAnLi9TaWRlRHJhd2VyJ1xyXG5pbXBvcnQgU2lkZUl0ZW1zIGZyb20gJy4vU2lkZUl0ZW1zJ1xyXG5cclxuXHJcbmNvbnN0IEdSQURJQU5UID0gJ2xpbmVhci1ncmFkaWVudCgwZGVnLCAjZTY0OTFkIDQwJSwgI2Q2NDMxYSA1MCUsICM5YTJmMTEgMTAwJSknIC8vICdsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoMTMyIDc4IDApIDQ1JSwgcmdiKDI1NSAxNTcgNCkgMTAwJSknIC8vICdsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoMzUgMzUgMzUpIDQ1JSwgcmdiKDE5MSAxMTUgMSkgMTAwJSknXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgfSxcclxuICB0b29sYmFyOiB7XHJcbiAgICB0cmFuc2l0aW9uOiAnd2lkdGggMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXMnLFxyXG4gICAgYmFja2dyb3VuZDogR1JBRElBTlQsLy8nI2FmNjgwMCcsIC8vJyMxYjFmMjknLCAvL3RoZW1lLnBhbGV0dGUuZ3JleVsxMDBdLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAvL3RoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgIC8vIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIC8vIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgLy8gICB3aWR0aDogXCJjYWxjKDEwMCUgLSAyNDBweClcIixcclxuICAgIC8vIH0sXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgc3BhY2VyOiB7XHJcbiAgICBmbGV4R3JvdzogMixcclxuICB9LFxyXG4gIHNlcGFyYXRvcjoge1xyXG4gICAgZmxleDogJzEgMSBhdXRvJyxcclxuICB9LFxyXG4gIGxpc3RJdGVtOiB7XHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgIG1hcmdpbkxlZnQ6IDEyLFxyXG4gICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgICcmOmhvdmVyLCAmLk11aS1zZWxlY3RlZDpob3ZlciwgJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj0nZml4ZWQnIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxTaWRlRHJhd2VyIGFuY2hvcj0nbGVmdCcgLz5cclxuXHJcbiAgICAgICAgICA8SGlkZGVuIG9ubHk9J3hzJz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSB2YXJpYW50PSdoNicgY29tcG9uZW50PSdoMSc+XHJcbiAgICAgICAgICAgICAgV2lsZnJlZExvcGV6XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VwYXJhdG9yfSAvPlxyXG4gICAgICAgICAgey8qIDxIaWRkZW4gb25seT1cInhzXCI+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgV2lsZnJlZExvcGV6Lk5ldFxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0hpZGRlbj4gKi99XHJcbiAgICAgICAgICA8U2lkZUl0ZW1zIC8+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9