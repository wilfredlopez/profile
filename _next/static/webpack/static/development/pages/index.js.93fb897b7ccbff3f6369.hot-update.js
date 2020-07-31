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


var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\PageWrapper.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const PageWrapper = props => {
  _s();

  const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(_Layout_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
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
      lineNumber: 17,
      columnNumber: 7
    }
  }), props.children, __jsx("footer", {
    style: theme.styles.constrained,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_pages_partials_SiteFooter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })), __jsx(_Layout_BackToTop__WEBPACK_IMPORTED_MODULE_3__["ScrollTop"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Fab"], {
    color: "secondary",
    size: "small",
    "aria-label": "scroll back to top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }))));
};

_s(PageWrapper, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYWdlV3JhcHBlci50c3giXSwibmFtZXMiOlsiUGFnZVdyYXBwZXIiLCJwcm9wcyIsInRoZW1lIiwidXNlVGhlbWUiLCJtaW5IZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJjaGlsZHJlbiIsInN0eWxlcyIsImNvbnN0cmFpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQSxNQUFNQSxXQUFXLEdBQUlDLEtBQUQsSUFBcUM7QUFBQTs7QUFDdkQsUUFBTUMsS0FBSyxHQUFHQyxrRUFBUSxFQUF0QjtBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBR0U7QUFDRSxNQUFFLEVBQUMsb0JBREw7QUFFRSxTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFLENBQWI7QUFBZ0JDLGtCQUFZLEVBQUU7QUFBOUIsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFRR0osS0FBSyxDQUFDSyxRQVJULEVBVUU7QUFBUSxTQUFLLEVBQUVKLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxXQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FWRixFQWNFLE1BQUMsMkRBQUQseUZBQWVQLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFLE1BQUMscURBQUQ7QUFDRSxTQUFLLEVBQUMsV0FEUjtBQUVFLFFBQUksRUFBQyxPQUZQO0FBR0Usa0JBQVcsb0JBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBREYsQ0FkRixDQURGO0FBMEJELENBNUJEOztHQUFNRCxXO1VBQ1VHLDBEOzs7S0FEVkgsVztBQThCU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjkzZmI4OTdiN2NjYmZmM2Y2MzY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWIsIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTY3JvbGxUb3AgfSBmcm9tIFwiLi9MYXlvdXQvQmFja1RvVG9wXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL0xheW91dC9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBTaXRlRm9vdGVyIGZyb20gXCIuL3BhZ2VzL3BhcnRpYWxzL1NpdGVGb290ZXJcIjtcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dVcEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93VXBcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbn1cclxuXHJcbmNvbnN0IFBhZ2VXcmFwcGVyID0gKHByb3BzOiBQcm9wc1dpdGhDaGlsZHJlbjxQcm9wcz4pID0+IHtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgIHsvKiAvL05lZWRlZCBmb3IgdGhlIHNjcm9sbCB0b3AgdG8gd29yay4gYWxzbyBtYXJnaW4gdG8gYWNjb3VudCBmb3IgdGhlIGZpeGVkIHBvc2l0aW9uIG9mIHRoZSBOYXZpZ2F0aW9uLiAgKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBpZD1cImJhY2stdG8tdG9wLWFuY2hvclwiXHJcbiAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiAwLCBtYXJnaW5Cb3R0b206IFwiM3JlbVwiIH19XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcblxyXG4gICAgICA8Zm9vdGVyIHN0eWxlPXt0aGVtZS5zdHlsZXMuY29uc3RyYWluZWR9PlxyXG4gICAgICAgIDxTaXRlRm9vdGVyIC8+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG5cclxuICAgICAgPFNjcm9sbFRvcCB7Li4ucHJvcHN9PlxyXG4gICAgICAgIDxGYWJcclxuICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwic2Nyb2xsIGJhY2sgdG8gdG9wXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8S2V5Ym9hcmRBcnJvd1VwSWNvbiAvPlxyXG4gICAgICAgIDwvRmFiPlxyXG4gICAgICA8L1Njcm9sbFRvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlV3JhcHBlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==