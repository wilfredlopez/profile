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








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  toolbar: {
    transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    background: '#1b1f29',
    //theme.palette.grey[100],
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
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    position: "fixed",
    className: classes.toolbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(_SideDrawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    anchor: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Hidden"], {
    only: "xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.title,
    variant: "h6",
    component: "h1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "WilfredLopez")), __jsx("div", {
    className: classes.separator,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }), __jsx(_SideItems__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L05hdmlnYXRpb24udHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsImRpc3BsYXkiLCJ0b29sYmFyIiwidHJhbnNpdGlvbiIsImJhY2tncm91bmQiLCJjb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJ3aGl0ZSIsInRpdGxlIiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJzcGFjZXIiLCJzZXBhcmF0b3IiLCJmbGV4IiwibGlzdEl0ZW0iLCJqdXN0aWZ5Q29udGVudCIsIndoaXRlU3BhY2UiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJzZWNvbmRhcnkiLCJtYWluIiwiTmF2aWdhdGlvbiIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyxLQUFLLEtBQUs7QUFDckNDLE1BQUksRUFBRTtBQUNKQyxZQUFRLEVBQUUsQ0FETjtBQUVKQyxXQUFPLEVBQUU7QUFGTCxHQUQrQjtBQUtyQ0MsU0FBTyxFQUFFO0FBQ1BDLGNBQVUsRUFBRSw4Q0FETDtBQUVQQyxjQUFVLEVBQUUsU0FGTDtBQUVnQjtBQUN2QkMsU0FBSyxFQUFFUCxLQUFLLENBQUNRLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FIckIsQ0FHNEI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBUE8sR0FMNEI7QUFjckNDLE9BQUssRUFBRTtBQUNMVCxZQUFRLEVBQUUsQ0FETDtBQUVMVSxjQUFVLEVBQUVaLEtBQUssQ0FBQ2EsT0FBTixDQUFjLENBQWQ7QUFGUCxHQWQ4QjtBQWtCckNDLFFBQU0sRUFBRTtBQUNOWixZQUFRLEVBQUU7QUFESixHQWxCNkI7QUFxQnJDYSxXQUFTLEVBQUU7QUFDVEMsUUFBSSxFQUFFO0FBREcsR0FyQjBCO0FBd0JyQ0MsVUFBUSxFQUFFO0FBQ1JDLGtCQUFjLEVBQUUsUUFEUjtBQUVSQyxjQUFVLEVBQUUsUUFGSjtBQUdSUCxjQUFVLEVBQUUsRUFISjtBQUlSUSxjQUFVLEVBQUUsR0FKSjtBQUtSQyxZQUFRLEVBQUUsTUFMRjtBQU1SLHFEQUFpRDtBQUMvQ2QsV0FBSyxFQUFFUCxLQUFLLENBQUNRLE9BQU4sQ0FBY2MsU0FBZCxDQUF3QkMsSUFEZ0I7QUFFL0NqQixnQkFBVSxFQUFFO0FBRm1DO0FBTnpDO0FBeEIyQixDQUFMLENBQU4sQ0FBNUI7QUFxQ2UsU0FBU2tCLFVBQVQsR0FBc0I7QUFBQTs7QUFDbkMsUUFBTUMsT0FBTyxHQUFHM0IsU0FBUyxFQUF6QjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUUyQixPQUFPLENBQUN4QixJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFRLFlBQVEsRUFBQyxPQUFqQjtBQUF5QixhQUFTLEVBQUV3QixPQUFPLENBQUNyQixPQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFZLFVBQU0sRUFBQyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFHRSxNQUFDLHdEQUFEO0FBQVEsUUFBSSxFQUFDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFBWSxhQUFTLEVBQUVxQixPQUFPLENBQUNkLEtBQS9CO0FBQXNDLFdBQU8sRUFBQyxJQUE5QztBQUFtRCxhQUFTLEVBQUMsSUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQUhGLEVBUUU7QUFBSyxhQUFTLEVBQUVjLE9BQU8sQ0FBQ1YsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBY0UsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsQ0FERixDQURGLENBREY7QUFzQkQ7O0dBekJ1QlMsVTtVQUNOMUIsUzs7O0tBRE0wQixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRhY3QuZGE5YmNlN2U5NmE5YTYzYTVjNmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhpZGRlbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcidcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcidcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2lkZURyYXdlciBmcm9tICcuL1NpZGVEcmF3ZXInXHJcbmltcG9ydCBTaWRlSXRlbXMgZnJvbSAnLi9TaWRlSXRlbXMnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgfSxcclxuICB0b29sYmFyOiB7XHJcbiAgICB0cmFuc2l0aW9uOiAnd2lkdGggMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXMnLFxyXG4gICAgYmFja2dyb3VuZDogJyMxYjFmMjknLCAvL3RoZW1lLnBhbGV0dGUuZ3JleVsxMDBdLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAvL3RoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgIC8vIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIC8vIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgLy8gICB3aWR0aDogXCJjYWxjKDEwMCUgLSAyNDBweClcIixcclxuICAgIC8vIH0sXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgc3BhY2VyOiB7XHJcbiAgICBmbGV4R3JvdzogMixcclxuICB9LFxyXG4gIHNlcGFyYXRvcjoge1xyXG4gICAgZmxleDogJzEgMSBhdXRvJyxcclxuICB9LFxyXG4gIGxpc3RJdGVtOiB7XHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgIG1hcmdpbkxlZnQ6IDEyLFxyXG4gICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgICcmOmhvdmVyLCAmLk11aS1zZWxlY3RlZDpob3ZlciwgJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj0nZml4ZWQnIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxTaWRlRHJhd2VyIGFuY2hvcj0nbGVmdCcgLz5cclxuXHJcbiAgICAgICAgICA8SGlkZGVuIG9ubHk9J3hzJz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSB2YXJpYW50PSdoNicgY29tcG9uZW50PSdoMSc+XHJcbiAgICAgICAgICAgICAgV2lsZnJlZExvcGV6XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VwYXJhdG9yfSAvPlxyXG4gICAgICAgICAgey8qIDxIaWRkZW4gb25seT1cInhzXCI+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgV2lsZnJlZExvcGV6Lk5ldFxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0hpZGRlbj4gKi99XHJcbiAgICAgICAgICA8U2lkZUl0ZW1zIC8+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9