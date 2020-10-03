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








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  toolbar: {
    transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    background: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText // width: "100%",
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
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    position: "fixed",
    className: classes.toolbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(_SideDrawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    anchor: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Hidden"], {
    only: "xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    component: "h1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "WilfredLopez")), __jsx("div", {
    className: classes.separator,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }), __jsx(_SideItems__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L05hdmlnYXRpb24udHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsImRpc3BsYXkiLCJ0b29sYmFyIiwidHJhbnNpdGlvbiIsImJhY2tncm91bmQiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwiZGFyayIsImNvbG9yIiwiY29udHJhc3RUZXh0IiwidGl0bGUiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsInNwYWNlciIsInNlcGFyYXRvciIsImZsZXgiLCJsaXN0SXRlbSIsImp1c3RpZnlDb250ZW50Iiwid2hpdGVTcGFjZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm1haW4iLCJOYXZpZ2F0aW9uIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUNDLEtBQUssS0FBSztBQUNyQ0MsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRSxDQUROO0FBRUpDLFdBQU8sRUFBRTtBQUZMLEdBRCtCO0FBS3JDQyxTQUFPLEVBQUU7QUFDUEMsY0FBVSxFQUFFLDhDQURMO0FBRVBDLGNBQVUsRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWNDLFNBQWQsQ0FBd0JDLElBRjdCO0FBR1BDLFNBQUssRUFBRVYsS0FBSyxDQUFDTyxPQUFOLENBQWNDLFNBQWQsQ0FBd0JHLFlBSHhCLENBSVA7QUFDQTtBQUNBO0FBQ0E7O0FBUE8sR0FMNEI7QUFjckNDLE9BQUssRUFBRTtBQUNMVixZQUFRLEVBQUUsQ0FETDtBQUVMVyxjQUFVLEVBQUViLEtBQUssQ0FBQ2MsT0FBTixDQUFjLENBQWQ7QUFGUCxHQWQ4QjtBQWtCckNDLFFBQU0sRUFBRTtBQUNOYixZQUFRLEVBQUU7QUFESixHQWxCNkI7QUFxQnJDYyxXQUFTLEVBQUU7QUFDVEMsUUFBSSxFQUFFO0FBREcsR0FyQjBCO0FBd0JyQ0MsVUFBUSxFQUFFO0FBQ1JDLGtCQUFjLEVBQUUsUUFEUjtBQUVSQyxjQUFVLEVBQUUsUUFGSjtBQUdSUCxjQUFVLEVBQUUsRUFISjtBQUlSUSxjQUFVLEVBQUUsR0FKSjtBQUtSQyxZQUFRLEVBQUUsTUFMRjtBQU1SLHFEQUFpRDtBQUMvQ1osV0FBSyxFQUFFVixLQUFLLENBQUNPLE9BQU4sQ0FBY0MsU0FBZCxDQUF3QmUsSUFEZ0I7QUFFL0NqQixnQkFBVSxFQUFFO0FBRm1DO0FBTnpDO0FBeEIyQixDQUFMLENBQU4sQ0FBNUI7QUFxQ2UsU0FBU2tCLFVBQVQsR0FBc0I7QUFBQTs7QUFDbkMsUUFBTUMsT0FBTyxHQUFHM0IsU0FBUyxFQUF6QjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUUyQixPQUFPLENBQUN4QixJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFRLFlBQVEsRUFBQyxPQUFqQjtBQUF5QixhQUFTLEVBQUV3QixPQUFPLENBQUNyQixPQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFZLFVBQU0sRUFBQyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFHRSxNQUFDLHdEQUFEO0FBQVEsUUFBSSxFQUFDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFDLElBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FIRixFQVFFO0FBQUssYUFBUyxFQUFFcUIsT0FBTyxDQUFDVCxTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFjRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixDQURGLENBREYsQ0FERjtBQXNCRDs7R0F6QnVCUSxVO1VBQ04xQixTOzs7S0FETTBCLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMuY2E3MjhmNGY5MGMzZTU3MDhlYWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhpZGRlbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcidcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcidcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgU2lkZURyYXdlciBmcm9tICcuL1NpZGVEcmF3ZXInXHJcbmltcG9ydCBTaWRlSXRlbXMgZnJvbSAnLi9TaWRlSXRlbXMnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgfSxcclxuICB0b29sYmFyOiB7XHJcbiAgICB0cmFuc2l0aW9uOiAnd2lkdGggMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXMnLFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXHJcbiAgICAvLyB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAvLyBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgIC8vICAgd2lkdGg6IFwiY2FsYygxMDAlIC0gMjQwcHgpXCIsXHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIHNwYWNlcjoge1xyXG4gICAgZmxleEdyb3c6IDIsXHJcbiAgfSxcclxuICBzZXBhcmF0b3I6IHtcclxuICAgIGZsZXg6ICcxIDEgYXV0bycsXHJcbiAgfSxcclxuICBsaXN0SXRlbToge1xyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAxMixcclxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICAnJjpob3ZlciwgJi5NdWktc2VsZWN0ZWQ6aG92ZXIsICYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249J2ZpeGVkJyBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XHJcbiAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICA8U2lkZURyYXdlciBhbmNob3I9J2xlZnQnIC8+XHJcblxyXG4gICAgICAgICAgPEhpZGRlbiBvbmx5PSd4cyc+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2JyBjb21wb25lbnQ9J2gxJz5cclxuICAgICAgICAgICAgICBXaWxmcmVkTG9wZXpcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZXBhcmF0b3J9IC8+XHJcbiAgICAgICAgICB7LyogPEhpZGRlbiBvbmx5PVwieHNcIj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICBXaWxmcmVkTG9wZXouTmV0XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvSGlkZGVuPiAqL31cclxuICAgICAgICAgIDxTaWRlSXRlbXMgLz5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=