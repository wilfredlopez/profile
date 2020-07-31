webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/PageWrapper.tsx":
/*!****************************************!*\
  !*** ./src/components/PageWrapper.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout_BackToTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout/BackToTop */ "./src/components/Layout/BackToTop.tsx");
/* harmony import */ var _Layout_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout/Navigation */ "./src/components/Layout/Navigation.tsx");
/* harmony import */ var _pages_partials_SiteFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/partials/SiteFooter */ "./src/components/pages/partials/SiteFooter.tsx");
/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowUp */ "./node_modules/@material-ui/icons/KeyboardArrowUp.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _root_styles_useSharedStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @root/styles/useSharedStyles */ "./src/styles/useSharedStyles.ts");


var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\PageWrapper.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








const PageWrapper = props => {
  _s();

  const classes = Object(_root_styles_useSharedStyles__WEBPACK_IMPORTED_MODULE_7__["default"])();
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_Layout_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "back-to-top-anchor",
    style: {
      minHeight: 0,
      marginBottom: "3rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), props.children, __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(_pages_partials_SiteFooter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  })), __jsx(_Layout_BackToTop__WEBPACK_IMPORTED_MODULE_3__["ScrollTop"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Fab"], {
    color: "secondary",
    size: "small",
    "aria-label": "scroll back to top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }))));
};

_s(PageWrapper, "J7JZJHGYvYRbvpJBSqBDmw6YWoM=", false, function () {
  return [_root_styles_useSharedStyles__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c = PageWrapper;
/* harmony default export */ __webpack_exports__["default"] = (PageWrapper);

var _c;

$RefreshReg$(_c, "PageWrapper");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYWdlV3JhcHBlci50c3giXSwibmFtZXMiOlsiUGFnZVdyYXBwZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTaGFyZWRTdHlsZXMiLCJtaW5IZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0EsTUFBTUEsV0FBVyxHQUFJQyxLQUFELElBQXFDO0FBQUE7O0FBQ3ZELFFBQU1DLE9BQU8sR0FBR0MsNEVBQWUsRUFBL0I7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdFO0FBQ0UsTUFBRSxFQUFDLG9CQURMO0FBRUUsU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRSxDQUFiO0FBQWdCQyxrQkFBWSxFQUFFO0FBQTlCLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBUUdKLEtBQUssQ0FBQ0ssUUFSVCxFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVZGLEVBY0UsTUFBQywyREFBRCx5RkFBZUwsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0UsTUFBQyxxREFBRDtBQUNFLFNBQUssRUFBQyxXQURSO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxrQkFBVyxvQkFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERixDQWRGLENBREY7QUEwQkQsQ0E1QkQ7O0dBQU1ELFc7VUFDWUcsb0U7OztLQURaSCxXO0FBOEJTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYWY3YjgwYTM5NWE3ZDU2OWRlYjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhYiwgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNjcm9sbFRvcCB9IGZyb20gXCIuL0xheW91dC9CYWNrVG9Ub3BcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4vTGF5b3V0L05hdmlnYXRpb25cIjtcclxuaW1wb3J0IFNpdGVGb290ZXIgZnJvbSBcIi4vcGFnZXMvcGFydGlhbHMvU2l0ZUZvb3RlclwiO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1VwSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dVcFwiO1xyXG5pbXBvcnQgdXNlU2hhcmVkU3R5bGVzIGZyb20gXCJAcm9vdC9zdHlsZXMvdXNlU2hhcmVkU3R5bGVzXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG59XHJcblxyXG5jb25zdCBQYWdlV3JhcHBlciA9IChwcm9wczogUHJvcHNXaXRoQ2hpbGRyZW48UHJvcHM+KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVNoYXJlZFN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICB7LyogLy9OZWVkZWQgZm9yIHRoZSBzY3JvbGwgdG9wIHRvIHdvcmsuIGFsc28gbWFyZ2luIHRvIGFjY291bnQgZm9yIHRoZSBmaXhlZCBwb3NpdGlvbiBvZiB0aGUgTmF2aWdhdGlvbi4gICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgaWQ9XCJiYWNrLXRvLXRvcC1hbmNob3JcIlxyXG4gICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogMCwgbWFyZ2luQm90dG9tOiBcIjNyZW1cIiB9fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG5cclxuICAgICAgPGZvb3Rlcj5cclxuICAgICAgICA8U2l0ZUZvb3RlciAvPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuXHJcbiAgICAgIDxTY3JvbGxUb3Agey4uLnByb3BzfT5cclxuICAgICAgICA8RmFiXHJcbiAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cInNjcm9sbCBiYWNrIHRvIHRvcFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEtleWJvYXJkQXJyb3dVcEljb24gLz5cclxuICAgICAgICA8L0ZhYj5cclxuICAgICAgPC9TY3JvbGxUb3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVdyYXBwZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=