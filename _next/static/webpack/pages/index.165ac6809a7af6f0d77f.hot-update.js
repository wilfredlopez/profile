webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _footer_SiteFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/SiteFooter */ "./src/components/footer/SiteFooter.tsx");
/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowUp */ "./node_modules/@material-ui/icons/KeyboardArrowUp.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "D:\\WEB_DEV\\Personal_Projects\\wilfredlopez\\src\\components\\PageWrapper.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const PageWrapper = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_Layout_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "back-to-top-anchor",
    style: {
      minHeight: 0,
      marginBottom: '3.1rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), props.children, __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(_footer_SiteFooter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  })), __jsx(_Layout_BackToTop__WEBPACK_IMPORTED_MODULE_3__["ScrollTop"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Fab"], {
    color: "primary",
    size: "small",
    "aria-label": "scroll back to top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }))));
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnZVdyYXBwZXIudHN4Il0sIm5hbWVzIjpbIlBhZ2VXcmFwcGVyIiwicHJvcHMiLCJtaW5IZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsTUFBTUEsV0FBVyxHQUFJQyxLQUFELElBQXFDO0FBQ3ZELFNBQ0UsbUVBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFHRTtBQUNFLE1BQUUsRUFBQyxvQkFETDtBQUVFLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUUsQ0FBYjtBQUFnQkMsa0JBQVksRUFBRTtBQUE5QixLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQVFHRixLQUFLLENBQUNHLFFBUlQsRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FWRixFQWNFLE1BQUMsMkRBQUQseUZBQWVILEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFLE1BQUMscURBQUQ7QUFBSyxTQUFLLEVBQUMsU0FBWDtBQUFxQixRQUFJLEVBQUMsT0FBMUI7QUFBa0Msa0JBQVcsb0JBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBZEYsQ0FERjtBQXNCRCxDQXZCRDs7S0FBTUQsVztBQXlCU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTY1YWM2ODA5YTdhZjZmMGQ3N2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhYiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU2Nyb2xsVG9wIH0gZnJvbSAnLi9MYXlvdXQvQmFja1RvVG9wJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL0xheW91dC9OYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgU2l0ZUZvb3RlciBmcm9tICcuL2Zvb3Rlci9TaXRlRm9vdGVyJ1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1VwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd1VwJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHsgfVxyXG5cclxuY29uc3QgUGFnZVdyYXBwZXIgPSAocHJvcHM6IFByb3BzV2l0aENoaWxkcmVuPFByb3BzPikgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICB7LyogLy9OZWVkZWQgZm9yIHRoZSBzY3JvbGwgdG9wIHRvIHdvcmsuIGFsc28gbWFyZ2luIHRvIGFjY291bnQgZm9yIHRoZSBmaXhlZCBwb3NpdGlvbiBvZiB0aGUgTmF2aWdhdGlvbi4gICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgaWQ9J2JhY2stdG8tdG9wLWFuY2hvcidcclxuICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IDAsIG1hcmdpbkJvdHRvbTogJzMuMXJlbScgfX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuXHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPFNpdGVGb290ZXIgLz5cclxuICAgICAgPC9mb290ZXI+XHJcblxyXG4gICAgICA8U2Nyb2xsVG9wIHsuLi5wcm9wc30+XHJcbiAgICAgICAgPEZhYiBjb2xvcj0ncHJpbWFyeScgc2l6ZT0nc21hbGwnIGFyaWEtbGFiZWw9J3Njcm9sbCBiYWNrIHRvIHRvcCc+XHJcbiAgICAgICAgICA8S2V5Ym9hcmRBcnJvd1VwSWNvbiAvPlxyXG4gICAgICAgIDwvRmFiPlxyXG4gICAgICA8L1Njcm9sbFRvcD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVdyYXBwZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==