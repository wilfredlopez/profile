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
})(["color:", " !important;background:", " !important;"], props => props.theme.colors.light, props => props.theme.colors.secondary);
_c = StyledAppBar;
function Navigation() {
  _s();

  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx(StyledAppBar, {
    position: "fixed",
    className: classes.toolbar,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(_SideDrawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    anchor: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Hidden"], {
    only: "xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    component: "h1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "WilfredLopez")), __jsx("div", {
    className: classes.separator,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }), __jsx(_SideItems__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L05hdmlnYXRpb24udHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsImRpc3BsYXkiLCJ0b29sYmFyIiwidHJhbnNpdGlvbiIsInRpdGxlIiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJzcGFjZXIiLCJzZXBhcmF0b3IiLCJmbGV4IiwibGlzdEl0ZW0iLCJqdXN0aWZ5Q29udGVudCIsIndoaXRlU3BhY2UiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiYmFja2dyb3VuZCIsIlN0eWxlZEFwcEJhciIsInN0eWxlZCIsIkFwcEJhciIsInByb3BzIiwiY29sb3JzIiwibGlnaHQiLCJOYXZpZ2F0aW9uIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUNDLEtBQUssS0FBSztBQUNyQ0MsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRSxDQUROO0FBRUpDLFdBQU8sRUFBRTtBQUZMLEdBRCtCO0FBS3JDQyxTQUFPLEVBQUU7QUFDUEMsY0FBVSxFQUFFLDhDQURMLENBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBTE8sR0FMNEI7QUFZckNDLE9BQUssRUFBRTtBQUNMSixZQUFRLEVBQUUsQ0FETDtBQUVMSyxjQUFVLEVBQUVQLEtBQUssQ0FBQ1EsT0FBTixDQUFjLENBQWQ7QUFGUCxHQVo4QjtBQWdCckNDLFFBQU0sRUFBRTtBQUNOUCxZQUFRLEVBQUU7QUFESixHQWhCNkI7QUFtQnJDUSxXQUFTLEVBQUU7QUFDVEMsUUFBSSxFQUFFO0FBREcsR0FuQjBCO0FBc0JyQ0MsVUFBUSxFQUFFO0FBQ1JDLGtCQUFjLEVBQUUsUUFEUjtBQUVSQyxjQUFVLEVBQUUsUUFGSjtBQUdSUCxjQUFVLEVBQUUsRUFISjtBQUlSUSxjQUFVLEVBQUUsR0FKSjtBQUtSQyxZQUFRLEVBQUUsTUFMRjtBQU1SLHFEQUFpRDtBQUMvQ0MsV0FBSyxFQUFFakIsS0FBSyxDQUFDa0IsT0FBTixDQUFjQyxTQUFkLENBQXdCQyxJQURnQjtBQUUvQ0MsZ0JBQVUsRUFBRTtBQUZtQztBQU56QztBQXRCMkIsQ0FBTCxDQUFOLENBQTVCO0FBbUNBLE1BQU1DLFlBQVksR0FBR0MsaUVBQU0sQ0FBQ0MsZ0VBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSwwREFDUEMsS0FBSyxJQUFJQSxLQUFLLENBQUN6QixLQUFOLENBQVkwQixNQUFaLENBQW1CQyxLQURyQixFQUVGRixLQUFLLElBQUlBLEtBQUssQ0FBQ3pCLEtBQU4sQ0FBWTBCLE1BQVosQ0FBbUJQLFNBRjFCLENBQWxCO0tBQU1HLFk7QUFLUyxTQUFTTSxVQUFULEdBQXNCO0FBQUE7O0FBQ25DLFFBQU1DLE9BQU8sR0FBRy9CLFNBQVMsRUFBekI7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFFK0IsT0FBTyxDQUFDNUIsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsWUFBRDtBQUNFLFlBQVEsRUFBQyxPQURYO0FBRUUsYUFBUyxFQUFFNEIsT0FBTyxDQUFDekIsT0FGckI7QUFHRSxTQUFLLEVBQUMsV0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFZLFVBQU0sRUFBQyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFHRSxNQUFDLHdEQUFEO0FBQVEsUUFBSSxFQUFDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFDLElBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FIRixFQVFFO0FBQUssYUFBUyxFQUFFeUIsT0FBTyxDQUFDbkIsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBY0UsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsQ0FMRixDQURGLENBREY7QUEwQkQ7O0dBN0J1QmtCLFU7VUFDTjlCLFM7OztNQURNOEIsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy4zYzUzYWFhZGE1ZDJlZmEyYzhhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGlkZGVuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBTaWRlRHJhd2VyIGZyb20gJy4vU2lkZURyYXdlcidcclxuaW1wb3J0IFNpZGVJdGVtcyBmcm9tICcuL1NpZGVJdGVtcydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICB9LFxyXG4gIHRvb2xiYXI6IHtcclxuICAgIHRyYW5zaXRpb246ICd3aWR0aCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcycsXHJcbiAgICAvLyB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAvLyBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgIC8vICAgd2lkdGg6IFwiY2FsYygxMDAlIC0gMjQwcHgpXCIsXHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIHNwYWNlcjoge1xyXG4gICAgZmxleEdyb3c6IDIsXHJcbiAgfSxcclxuICBzZXBhcmF0b3I6IHtcclxuICAgIGZsZXg6ICcxIDEgYXV0bycsXHJcbiAgfSxcclxuICBsaXN0SXRlbToge1xyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAxMixcclxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICAnJjpob3ZlciwgJi5NdWktc2VsZWN0ZWQ6aG92ZXIsICYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpXHJcblxyXG5jb25zdCBTdHlsZWRBcHBCYXIgPSBzdHlsZWQoQXBwQmFyKWBcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMubGlnaHR9ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fSAhaW1wb3J0YW50O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxTdHlsZWRBcHBCYXJcclxuICAgICAgICBwb3NpdGlvbj0nZml4ZWQnXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9XHJcbiAgICAgICAgY29sb3I9J3NlY29uZGFyeSdcclxuICAgICAgPlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPFNpZGVEcmF3ZXIgYW5jaG9yPSdsZWZ0JyAvPlxyXG5cclxuICAgICAgICAgIDxIaWRkZW4gb25seT0neHMnPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNicgY29tcG9uZW50PSdoMSc+XHJcbiAgICAgICAgICAgICAgV2lsZnJlZExvcGV6XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VwYXJhdG9yfSAvPlxyXG4gICAgICAgICAgey8qIDxIaWRkZW4gb25seT1cInhzXCI+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgV2lsZnJlZExvcGV6Lk5ldFxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0hpZGRlbj4gKi99XHJcbiAgICAgICAgICA8U2lkZUl0ZW1zIC8+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L1N0eWxlZEFwcEJhcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9