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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SideDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SideDrawer */ "./src/components/Layout/SideDrawer.tsx");
/* harmony import */ var _SideItems__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SideItems */ "./src/components/Layout/SideItems.tsx");
var _jsxFileName = "D:\\WEB_DEV\\Personal_Projects\\wilfredlopez\\src\\components\\Layout\\Navigation.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  toolbar: {
    transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' // width: "100%",
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
const StyledAppBar = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "Navigation__StyledAppBar",
  componentId: "nmb9kn-0"
})(["color:", " !important;"], props => props.theme.colors.light);
_c = StyledAppBar;
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
  }, __jsx(StyledAppBar, {
    position: "fixed",
    className: classes.toolbar,
    color: "secondary",
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
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(_SideDrawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    anchor: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Hidden"], {
    only: "xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    component: "h1",
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "WilfredLopez")), __jsx("div", {
    className: classes.separator,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }), __jsx(_SideItems__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }))));
}

_s(Navigation, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c2 = Navigation;

var _c, _c2;

$RefreshReg$(_c, "StyledAppBar");
$RefreshReg$(_c2, "Navigation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L05hdmlnYXRpb24udHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsImRpc3BsYXkiLCJ0b29sYmFyIiwidHJhbnNpdGlvbiIsInRpdGxlIiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJzcGFjZXIiLCJzZXBhcmF0b3IiLCJmbGV4IiwibGlzdEl0ZW0iLCJqdXN0aWZ5Q29udGVudCIsIndoaXRlU3BhY2UiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiYmFja2dyb3VuZCIsIlN0eWxlZEFwcEJhciIsInN0eWxlZCIsIkFwcEJhciIsInByb3BzIiwiY29sb3JzIiwibGlnaHQiLCJOYXZpZ2F0aW9uIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUNDLEtBQUssS0FBSztBQUNyQ0MsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRSxDQUROO0FBRUpDLFdBQU8sRUFBRTtBQUZMLEdBRCtCO0FBS3JDQyxTQUFPLEVBQUU7QUFDUEMsY0FBVSxFQUFFLDhDQURMLENBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBTE8sR0FMNEI7QUFZckNDLE9BQUssRUFBRTtBQUNMSixZQUFRLEVBQUUsQ0FETDtBQUVMSyxjQUFVLEVBQUVQLEtBQUssQ0FBQ1EsT0FBTixDQUFjLENBQWQ7QUFGUCxHQVo4QjtBQWdCckNDLFFBQU0sRUFBRTtBQUNOUCxZQUFRLEVBQUU7QUFESixHQWhCNkI7QUFtQnJDUSxXQUFTLEVBQUU7QUFDVEMsUUFBSSxFQUFFO0FBREcsR0FuQjBCO0FBc0JyQ0MsVUFBUSxFQUFFO0FBQ1JDLGtCQUFjLEVBQUUsUUFEUjtBQUVSQyxjQUFVLEVBQUUsUUFGSjtBQUdSUCxjQUFVLEVBQUUsRUFISjtBQUlSUSxjQUFVLEVBQUUsR0FKSjtBQUtSQyxZQUFRLEVBQUUsTUFMRjtBQU1SLHFEQUFpRDtBQUMvQ0MsV0FBSyxFQUFFakIsS0FBSyxDQUFDa0IsT0FBTixDQUFjQyxTQUFkLENBQXdCQyxJQURnQjtBQUUvQ0MsZ0JBQVUsRUFBRTtBQUZtQztBQU56QztBQXRCMkIsQ0FBTCxDQUFOLENBQTVCO0FBbUNBLE1BQU1DLFlBQVksR0FBR0MsaUVBQU0sQ0FBQ0MsZ0VBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSwrQkFDUEMsS0FBSyxJQUFJQSxLQUFLLENBQUN6QixLQUFOLENBQVkwQixNQUFaLENBQW1CQyxLQURyQixDQUFsQjtLQUFNTCxZO0FBSVMsU0FBU00sVUFBVCxHQUFzQjtBQUFBOztBQUNuQyxRQUFNQyxPQUFPLEdBQUcvQixTQUFTLEVBQXpCO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRStCLE9BQU8sQ0FBQzVCLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFlBQUQ7QUFDRSxZQUFRLEVBQUMsT0FEWDtBQUVFLGFBQVMsRUFBRTRCLE9BQU8sQ0FBQ3pCLE9BRnJCO0FBR0UsU0FBSyxFQUFDLFdBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBWSxVQUFNLEVBQUMsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBR0UsTUFBQyx3REFBRDtBQUFRLFFBQUksRUFBQyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLGFBQVMsRUFBQyxJQUFuQztBQUF3QyxhQUFTLEVBQUV5QixPQUFPLENBQUN2QixLQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBSEYsRUFRRTtBQUFLLGFBQVMsRUFBRXVCLE9BQU8sQ0FBQ25CLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQWNFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLENBTEYsQ0FERixDQURGO0FBMEJEOztHQTdCdUJrQixVO1VBQ045QixTOzs7TUFETThCLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMuOTg3NzlkYTExNmUwMWMyODNkNWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhpZGRlbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcidcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcidcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgU2lkZURyYXdlciBmcm9tICcuL1NpZGVEcmF3ZXInXHJcbmltcG9ydCBTaWRlSXRlbXMgZnJvbSAnLi9TaWRlSXRlbXMnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgfSxcclxuICB0b29sYmFyOiB7XHJcbiAgICB0cmFuc2l0aW9uOiAnd2lkdGggMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXMnLFxyXG4gICAgLy8gd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgLy8gW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAvLyAgIHdpZHRoOiBcImNhbGMoMTAwJSAtIDI0MHB4KVwiLFxyXG4gICAgLy8gfSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBzcGFjZXI6IHtcclxuICAgIGZsZXhHcm93OiAyLFxyXG4gIH0sXHJcbiAgc2VwYXJhdG9yOiB7XHJcbiAgICBmbGV4OiAnMSAxIGF1dG8nLFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgbWFyZ2luTGVmdDogMTIsXHJcbiAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgJyY6aG92ZXIsICYuTXVpLXNlbGVjdGVkOmhvdmVyLCAmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuY29uc3QgU3R5bGVkQXBwQmFyID0gc3R5bGVkKEFwcEJhcilgXHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmxpZ2h0fSAhaW1wb3J0YW50O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxTdHlsZWRBcHBCYXJcclxuICAgICAgICBwb3NpdGlvbj0nZml4ZWQnXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9XHJcbiAgICAgICAgY29sb3I9J3NlY29uZGFyeSdcclxuICAgICAgPlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPFNpZGVEcmF3ZXIgYW5jaG9yPSdsZWZ0JyAvPlxyXG5cclxuICAgICAgICAgIDxIaWRkZW4gb25seT0neHMnPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNicgY29tcG9uZW50PSdoMScgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgICBXaWxmcmVkTG9wZXpcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZXBhcmF0b3J9IC8+XHJcbiAgICAgICAgICB7LyogPEhpZGRlbiBvbmx5PVwieHNcIj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICBXaWxmcmVkTG9wZXouTmV0XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvSGlkZGVuPiAqL31cclxuICAgICAgICAgIDxTaWRlSXRlbXMgLz5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvU3R5bGVkQXBwQmFyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=