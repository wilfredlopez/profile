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
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SideDrawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SideDrawer */ "./src/components/Layout/SideDrawer.tsx");
/* harmony import */ var _components_shared_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/shared/Logo */ "./src/components/shared/Logo.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\WEB_DEV\\Personal_Projects\\wilfredlopez\\src\\components\\Layout\\Navigation.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





 // import SideItems from './SideItems'


 // const GRADIANT = 'linear-gradient(0deg, #2f946d 40%, #30a275 50%, #298a64 100%)'
// const GRADIANT = 'linear-gradient(0deg, #e6491d 40%, #d6431a 50%, #9a2f11 100%)' // 'linear-gradient(180deg, rgb(132 78 0) 45%, rgb(255 157 4) 100%)' // 'linear-gradient(180deg, rgb(35 35 35) 45%, rgb(191 115 1) 100%)'

const GRADIANT = 'linear-gradient(0deg, #863f41 40%, #8a4143 50%, #914345 100%)';
const GRADIANT_DARK = 'linear-gradient(0deg, #101010 40%, #101010 50%, #171717 100%)'; //'linear-gradient(0deg, #982f11 40%, #922d11 50%, #4c1709 100%)'

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
  titleContainer: {
    flexGrow: 1,
    display: 'flex'
  },
  title: {
    marginLeft: theme.spacing(1),
    marginTop: 'auto',
    marginBottom: 'auto',
    letterSpacing: '0.07em',
    fontSize: '1rem'
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
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0__["default"], {
    position: "fixed",
    className: classes.toolbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: classes.titleContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(_components_shared_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.title,
    variant: "h1",
    component: "h1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, "Wilfred Lopez"))), __jsx("div", {
    className: classes.separator,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }), __jsx(_SideDrawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    anchor: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L05hdmlnYXRpb24udHN4Il0sIm5hbWVzIjpbIkdSQURJQU5UIiwiR1JBRElBTlRfREFSSyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsImRpc3BsYXkiLCJ0b29sYmFyIiwidHJhbnNpdGlvbiIsImJhY2tncm91bmQiLCJwYWxldHRlIiwidHlwZSIsImNvbG9yIiwiY29tbW9uIiwid2hpdGUiLCJ0aXRsZUNvbnRhaW5lciIsInRpdGxlIiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJsZXR0ZXJTcGFjaW5nIiwiZm9udFNpemUiLCJzcGFjZXIiLCJzZXBhcmF0b3IiLCJmbGV4IiwibGlzdEl0ZW0iLCJqdXN0aWZ5Q29udGVudCIsIndoaXRlU3BhY2UiLCJmb250V2VpZ2h0Iiwic2Vjb25kYXJ5IiwibWFpbiIsIk5hdmlnYXRpb24iLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtDQUlBO0FBQ0E7O0FBQ0EsTUFBTUEsUUFBUSxHQUFHLCtEQUFqQjtBQUNBLE1BQU1DLGFBQWEsR0FBRywrREFBdEIsQyxDQUFzRjs7QUFFdEYsTUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyxLQUFLLEtBQUs7QUFDckNDLE1BQUksRUFBRTtBQUNKQyxZQUFRLEVBQUUsQ0FETjtBQUVKQyxXQUFPLEVBQUU7QUFGTCxHQUQrQjtBQUtyQ0MsU0FBTyxFQUFFO0FBQ1BDLGNBQVUsRUFBRSw4Q0FETDtBQUVQQyxjQUFVLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFjQyxJQUFkLEtBQXVCLE1BQXZCLEdBQWdDWCxhQUFoQyxHQUFnREQsUUFGckQ7QUFFOEQ7QUFDckVhLFNBQUssRUFBRVQsS0FBSyxDQUFDTyxPQUFOLENBQWNHLE1BQWQsQ0FBcUJDLEtBSHJCLENBRzRCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQVBPLEdBTDRCO0FBY3JDQyxnQkFBYyxFQUFFO0FBQ2RWLFlBQVEsRUFBRSxDQURJO0FBRWRDLFdBQU8sRUFBRTtBQUZLLEdBZHFCO0FBa0JyQ1UsT0FBSyxFQUFFO0FBQ0xDLGNBQVUsRUFBRWQsS0FBSyxDQUFDZSxPQUFOLENBQWMsQ0FBZCxDQURQO0FBRUxDLGFBQVMsRUFBRSxNQUZOO0FBR0xDLGdCQUFZLEVBQUUsTUFIVDtBQUlMQyxpQkFBYSxFQUFFLFFBSlY7QUFLTEMsWUFBUSxFQUFFO0FBTEwsR0FsQjhCO0FBMEJyQ0MsUUFBTSxFQUFFO0FBQ05sQixZQUFRLEVBQUU7QUFESixHQTFCNkI7QUE2QnJDbUIsV0FBUyxFQUFFO0FBQ1RDLFFBQUksRUFBRTtBQURHLEdBN0IwQjtBQWdDckNDLFVBQVEsRUFBRTtBQUNSQyxrQkFBYyxFQUFFLFFBRFI7QUFFUkMsY0FBVSxFQUFFLFFBRko7QUFHUlgsY0FBVSxFQUFFLEVBSEo7QUFJUlksY0FBVSxFQUFFLEdBSko7QUFLUlAsWUFBUSxFQUFFLE1BTEY7QUFNUixxREFBaUQ7QUFDL0NWLFdBQUssRUFBRVQsS0FBSyxDQUFDTyxPQUFOLENBQWNvQixTQUFkLENBQXdCQyxJQURnQjtBQUUvQ3RCLGdCQUFVLEVBQUU7QUFGbUM7QUFOekM7QUFoQzJCLENBQUwsQ0FBTixDQUE1QjtBQTZDZSxTQUFTdUIsVUFBVCxHQUFzQjtBQUFBOztBQUNuQyxRQUFNQyxPQUFPLEdBQUdoQyxTQUFTLEVBQXpCO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRWdDLE9BQU8sQ0FBQzdCLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQVEsWUFBUSxFQUFDLE9BQWpCO0FBQXlCLGFBQVMsRUFBRTZCLE9BQU8sQ0FBQzFCLE9BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFMEIsT0FBTyxDQUFDbEIsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxvRUFBRDtBQUFZLGFBQVMsRUFBRWtCLE9BQU8sQ0FBQ2pCLEtBQS9CO0FBQXNDLFdBQU8sRUFBQyxJQUE5QztBQUFtRCxhQUFTLEVBQUMsSUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixDQURGLENBREYsRUFXRTtBQUFLLGFBQVMsRUFBRWlCLE9BQU8sQ0FBQ1QsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBa0JFLE1BQUMsbURBQUQ7QUFBWSxVQUFNLEVBQUMsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxCRixDQURGLENBREYsQ0FERjtBQTBCRDs7R0E3QnVCUSxVO1VBQ04vQixTOzs7S0FETStCLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2MzZGRlNjU4N2ZlMTJmODU2OTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhpZGRlbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcidcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcidcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2lkZURyYXdlciBmcm9tICcuL1NpZGVEcmF3ZXInXHJcbi8vIGltcG9ydCBTaWRlSXRlbXMgZnJvbSAnLi9TaWRlSXRlbXMnXHJcbmltcG9ydCBMb2dvIGZyb20gJ0Bjb21wb25lbnRzL3NoYXJlZC9Mb2dvJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5cclxuLy8gY29uc3QgR1JBRElBTlQgPSAnbGluZWFyLWdyYWRpZW50KDBkZWcsICMyZjk0NmQgNDAlLCAjMzBhMjc1IDUwJSwgIzI5OGE2NCAxMDAlKSdcclxuLy8gY29uc3QgR1JBRElBTlQgPSAnbGluZWFyLWdyYWRpZW50KDBkZWcsICNlNjQ5MWQgNDAlLCAjZDY0MzFhIDUwJSwgIzlhMmYxMSAxMDAlKScgLy8gJ2xpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigxMzIgNzggMCkgNDUlLCByZ2IoMjU1IDE1NyA0KSAxMDAlKScgLy8gJ2xpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigzNSAzNSAzNSkgNDUlLCByZ2IoMTkxIDExNSAxKSAxMDAlKSdcclxuY29uc3QgR1JBRElBTlQgPSAnbGluZWFyLWdyYWRpZW50KDBkZWcsICM4NjNmNDEgNDAlLCAjOGE0MTQzIDUwJSwgIzkxNDM0NSAxMDAlKSdcclxuY29uc3QgR1JBRElBTlRfREFSSyA9ICdsaW5lYXItZ3JhZGllbnQoMGRlZywgIzEwMTAxMCA0MCUsICMxMDEwMTAgNTAlLCAjMTcxNzE3IDEwMCUpJyAvLydsaW5lYXItZ3JhZGllbnQoMGRlZywgIzk4MmYxMSA0MCUsICM5MjJkMTEgNTAlLCAjNGMxNzA5IDEwMCUpJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIH0sXHJcbiAgdG9vbGJhcjoge1xyXG4gICAgdHJhbnNpdGlvbjogJ3dpZHRoIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zJyxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gR1JBRElBTlRfREFSSyA6IEdSQURJQU5ULC8vJyNhZjY4MDAnLCAvLycjMWIxZjI5JywgLy90aGVtZS5wYWxldHRlLmdyZXlbMTAwXSxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSwgLy90aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXHJcbiAgICAvLyB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAvLyBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgIC8vICAgd2lkdGg6IFwiY2FsYygxMDAlIC0gMjQwcHgpXCIsXHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcbiAgdGl0bGVDb250YWluZXI6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIG1hcmdpblRvcDogJ2F1dG8nLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnYXV0bycsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wN2VtJyxcclxuICAgIGZvbnRTaXplOiAnMXJlbSdcclxuXHJcbiAgfSxcclxuICBzcGFjZXI6IHtcclxuICAgIGZsZXhHcm93OiAyLFxyXG4gIH0sXHJcbiAgc2VwYXJhdG9yOiB7XHJcbiAgICBmbGV4OiAnMSAxIGF1dG8nLFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgbWFyZ2luTGVmdDogMTIsXHJcbiAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgJyY6aG92ZXIsICYuTXVpLXNlbGVjdGVkOmhvdmVyLCAmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPSdmaXhlZCcgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlQ29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJoMVwiIGNvbXBvbmVudD0naDEnPlxyXG4gICAgICAgICAgICAgICAgV2lsZnJlZCBMb3BlelxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgey8qIDxIaWRkZW4gb25seT0neHMnPlxyXG4gICAgICAgICAgICAgIDwvSGlkZGVuPiAqL31cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VwYXJhdG9yfSAvPlxyXG4gICAgICAgICAgey8qIDxIaWRkZW4gb25seT1cInhzXCI+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgV2lsZnJlZExvcGV6Lk5ldFxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0hpZGRlbj4gKi99XHJcbiAgICAgICAgICB7LyogPFNpZGVJdGVtcyAvPiAqL31cclxuICAgICAgICAgIDxTaWRlRHJhd2VyIGFuY2hvcj1cInJpZ2h0XCIgLz5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=