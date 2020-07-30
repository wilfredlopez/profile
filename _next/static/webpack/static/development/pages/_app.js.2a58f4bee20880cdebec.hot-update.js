webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/Layout/SideItems.tsx":
/*!*********************************************!*\
  !*** ./src/components/Layout/SideItems.tsx ***!
  \*********************************************/
/*! exports provided: LinkedInButton, GithubButton, TwitterButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedInButton", function() { return LinkedInButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubButton", function() { return GithubButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterButton", function() { return TwitterButton; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "./node_modules/@material-ui/icons/LinkedIn.js");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "./node_modules/@material-ui/icons/Twitter.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\Layout\\SideItems.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







const LinkedInButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "SideItems__LinkedInButton",
  componentId: "sc-1bb16jl-0"
})(["background-color:#2867B2 !important;;color:white !important;;border-radius:6px !important;;box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08) !important;;padding:6px 8px !important;;font-size:0.81rem !important;;&:hover{background-color:#2c5789 !important;;}& span .text-inner{margin-top:2px !important;;}"]);
_c = LinkedInButton;
const GithubButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "SideItems__GithubButton",
  componentId: "sc-1bb16jl-1"
})(["background-color:#c4c7c9 !important;color:#24292e !important;@media (max-width:299px){display:none !important;}box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08) !important;;padding:6px 8px !important;;font-size:0.81rem !important;;&:hover{background-color:#8f9498 !important;;}& span{margin-left:3px;margin-right:3px;}"]);
_c2 = GithubButton;
const TwitterButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "SideItems__TwitterButton",
  componentId: "sc-1bb16jl-2"
})(["background-color:#078bdc !important;;color:#f8f8f8 !important;;box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08) !important;;padding:6px 8px !important;;font-size:0.81rem !important;;&:hover{background-color:#1DA1F2 !important;;}"]);
_c3 = TwitterButton;

const SideItems = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(GithubButton, {
    title: "Github",
    href: "https://github.com/wilfredlopez" //@ts-ignore
    ,
    target: "_blank",
    rel: "noopener noreferrer",
    role: "link",
    id: "profile-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }), " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, "Github")), __jsx(LinkedInButton, {
    role: "link",
    title: "LinkedIn",
    variant: "text",
    style: {
      marginLeft: "0.4em"
    },
    href: "https://www.linkedin.com/in/wilfred-lopez-a309b896" //@ts-ignore
    ,
    target: "_blank",
    rel: "noopener noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "text-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, "LinkedIn")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Hidden"], {
    xsDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx(TwitterButton, {
    style: {
      marginLeft: "0.5em"
    },
    href: "https://twitter.com/wilfreddonaldlo?ref_src=twsrc%5Etfw" //@ts-ignore
    ,
    rel: "noopener noreferrer" //@ts-ignore
    ,
    target: "_blank",
    title: "Twitter @WilfredonaldLo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }), "@wilfr..."))));
};

_c4 = SideItems;
/* harmony default export */ __webpack_exports__["default"] = (SideItems);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "LinkedInButton");
$RefreshReg$(_c2, "GithubButton");
$RefreshReg$(_c3, "TwitterButton");
$RefreshReg$(_c4, "SideItems");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU2lkZUl0ZW1zLnRzeCJdLCJuYW1lcyI6WyJMaW5rZWRJbkJ1dHRvbiIsInN0eWxlZCIsIkJ1dHRvbiIsIkdpdGh1YkJ1dHRvbiIsIlR3aXR0ZXJCdXR0b24iLCJTaWRlSXRlbXMiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVPLE1BQU1BLGNBQWMsR0FBR0MsaUVBQU0sQ0FBQ0MsZ0VBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSwwVUFBcEI7S0FBTUYsYztBQWVOLE1BQU1HLFlBQVksR0FBR0YsaUVBQU0sQ0FBQ0MsZ0VBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSx3VkFBbEI7TUFBTUMsWTtBQXVCTixNQUFNQyxhQUFhLEdBQUdILGlFQUFNLENBQUNDLGdFQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsK1BBQW5CO01BQU1FLGE7O0FBZWIsTUFBTUMsU0FBMEIsR0FBRyxNQUFNO0FBQ3ZDLFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0UsTUFBQyxZQUFEO0FBQ0UsU0FBSyxFQUFDLFFBRFI7QUFFRSxRQUFJLEVBQUMsaUNBRlAsQ0FHRTtBQUhGO0FBSUUsVUFBTSxFQUFDLFFBSlQ7QUFLRSxPQUFHLEVBQUMscUJBTE47QUFNRSxRQUFJLEVBQUMsTUFOUDtBQU9FLE1BQUUsRUFBQyxjQVBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVVHLEdBVkgsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEYsQ0FIRixFQW1CRSxNQUFDLGNBQUQ7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFNBQUssRUFBQyxVQUZSO0FBR0UsV0FBTyxFQUFDLE1BSFY7QUFJRSxTQUFLLEVBQUU7QUFBRUMsZ0JBQVUsRUFBRTtBQUFkLEtBSlQ7QUFLRSxRQUFJLEVBQUMsb0RBTFAsQ0FNRTtBQU5GO0FBT0UsVUFBTSxFQUFDLFFBUFQ7QUFRRSxPQUFHLEVBQUMscUJBUk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBV0U7QUFBTSxhQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRixDQW5CRixFQWtDRSxNQUFDLHdEQUFEO0FBQVEsVUFBTSxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGFBQUQ7QUFDRSxTQUFLLEVBQUU7QUFBRUEsZ0JBQVUsRUFBRTtBQUFkLEtBRFQ7QUFFRSxRQUFJLEVBQUMseURBRlAsQ0FHRTtBQUhGO0FBSUUsT0FBRyxFQUFDLHFCQUpOLENBS0U7QUFMRjtBQU1FLFVBQU0sRUFBQyxRQU5UO0FBT0UsU0FBSyxFQUFDLHlCQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixjQURGLENBbENGLENBREYsQ0FERjtBQXNERCxDQXZERDs7TUFBTUQsUztBQXlEU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuMmE1OGY0YmVlMjA4ODBjZGViZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3QsIEhpZGRlbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IEdpdEh1Ykljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9HaXRIdWJcIjtcclxuaW1wb3J0IExpbmtlZEluSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpbmtlZEluXCI7XHJcbmltcG9ydCBUd2l0dGVySWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXJcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtlZEluQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4NjdCMiAhaW1wb3J0YW50OztcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDs7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIDAuMTEpLCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA4KSAhaW1wb3J0YW50OztcclxuICAvKiBwYWRkaW5nOiA3cHggMTRweDsgKi9cclxuICBwYWRkaW5nOiA2cHggOHB4ICFpbXBvcnRhbnQ7O1xyXG4gICAgZm9udC1zaXplOiAwLjgxcmVtICFpbXBvcnRhbnQ7O1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjNTc4OSAhaW1wb3J0YW50OztcclxuICB9XHJcbiAgJiBzcGFuIC50ZXh0LWlubmVye1xyXG4gICAgbWFyZ2luLXRvcDogMnB4ICFpbXBvcnRhbnQ7O1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IEdpdGh1YkJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNGM3YzkgIWltcG9ydGFudDtcclxuICBjb2xvcjogICMyNDI5MmUgIWltcG9ydGFudDtcclxuICAvKiBAbWVkaWEgKG1heC13aWR0aDo0MjBweCl7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfSAqL1xyXG4gICBAbWVkaWEgKG1heC13aWR0aDoyOTlweCl7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIGJvcmRlci1yYWRpdXM6IDZweDsgKi9cclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSg1MCwgNTAsIDkzLCAwLjExKSwgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDs7XHJcbiAgLyogcGFkZGluZzogN3B4IDE0cHg7ICovXHJcbiAgcGFkZGluZzogNnB4IDhweCAhaW1wb3J0YW50OztcclxuICAgIGZvbnQtc2l6ZTogMC44MXJlbSAhaW1wb3J0YW50OztcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4Zjk0OTggIWltcG9ydGFudDs7XHJcbiAgfVxyXG4gICYgc3BhbntcclxuICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFR3aXR0ZXJCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc4YmRjICFpbXBvcnRhbnQ7O1xyXG4gIGNvbG9yOiAjZjhmOGY4ICFpbXBvcnRhbnQ7O1xyXG4gIC8qIGJvcmRlci1yYWRpdXM6IDZweDsgKi9cclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSg1MCwgNTAsIDkzLCAwLjExKSwgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDs7XHJcbiAgLyogcGFkZGluZzogN3B4IDE0cHg7ICovXHJcbiAgcGFkZGluZzogNnB4IDhweCAhaW1wb3J0YW50OztcclxuICAgIGZvbnQtc2l6ZTogMC44MXJlbSAhaW1wb3J0YW50OztcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxREExRjIgIWltcG9ydGFudDs7XHJcbiAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxufVxyXG5jb25zdCBTaWRlSXRlbXM6IFJlYWN0LkZDPFByb3BzPiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICB7LyogPEhpZGRlbiBvbmx5PVwieHNcIj4gKi99XHJcblxyXG4gICAgICAgIDxHaXRodWJCdXR0b25cclxuICAgICAgICAgIHRpdGxlPVwiR2l0aHViXCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vd2lsZnJlZGxvcGV6XCJcclxuICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgcm9sZT1cImxpbmtcIlxyXG4gICAgICAgICAgaWQ9XCJwcm9maWxlLWxpbmtcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxHaXRIdWJJY29uIC8+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgR2l0aHViXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9HaXRodWJCdXR0b24+XHJcbiAgICAgICAgey8qIDwvSGlkZGVuPiAqL31cclxuICAgICAgICA8TGlua2VkSW5CdXR0b25cclxuICAgICAgICAgIHJvbGU9XCJsaW5rXCJcclxuICAgICAgICAgIHRpdGxlPVwiTGlua2VkSW5cIlxyXG4gICAgICAgICAgdmFyaWFudD1cInRleHRcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIwLjRlbVwiIH19XHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3dpbGZyZWQtbG9wZXotYTMwOWI4OTZcIlxyXG4gICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpbmtlZEluSWNvbiAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pbm5lclwiPlxyXG4gICAgICAgICAgICBMaW5rZWRJblxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvTGlua2VkSW5CdXR0b24+XHJcbiAgICAgICAgPEhpZGRlbiB4c0Rvd24+XHJcbiAgICAgICAgICA8VHdpdHRlckJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjAuNWVtXCIgfX1cclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vd2lsZnJlZGRvbmFsZGxvP3JlZl9zcmM9dHdzcmMlNUV0ZndcIlxyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICB0aXRsZT1cIlR3aXR0ZXIgQFdpbGZyZWRvbmFsZExvXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFR3aXR0ZXJJY29uIC8+XHJcbiAgICAgICAgICAgIHsvKiBAd2lsZnJlZGRvbmFsZGxvICovfVxyXG4gICAgICAgICAgICBAd2lsZnIuLi5cclxuICAgICAgICAgIDwvVHdpdHRlckJ1dHRvbj5cclxuICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZUl0ZW1zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9