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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\Layout\\SideItems.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;








const LinkedInButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "SideItems__LinkedInButton",
  componentId: "sc-1bb16jl-0"
})(["background-color:#2867B2 !important;;color:white !important;;border-radius:6px !important;;box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08) !important;;padding:6px 8px !important;;font-size:0.81rem !important;;&:hover{background-color:#2c5789 !important;;}& span .text-inner{margin-top:2px !important;;}"]);
_c = LinkedInButton;
const GithubButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "SideItems__GithubButton",
  componentId: "sc-1bb16jl-1"
})(["background-color:#c4c7c9 !important;color:#24292e !important;;box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08) !important;;padding:6px 8px !important;;font-size:0.81rem !important;;&:hover{background-color:#8f9498 !important;;}& span{margin-left:3px;margin-right:3px;}"]);
_c2 = GithubButton;
const TwitterButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "SideItems__TwitterButton",
  componentId: "sc-1bb16jl-2"
})(["background-color:#078bdc !important;;color:#f8f8f8 !important;;box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08) !important;;padding:6px 8px !important;;font-size:0.81rem !important;;&:hover{background-color:#1DA1F2 !important;;}"]);
_c3 = TwitterButton;

const SideItems = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    transition: {
      from: {
        scale: 1
      },
      to: {
        scale: 2
      },
      loop: {
        loop: Infinity,
        ease: "linear",
        duration: 2
      }
    },
    animate: {
      scale: 1
    },
    initial: {
      scale: 0.9
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
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
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }), " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
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
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: "text-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "LinkedIn")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Hidden"], {
    smDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
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
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }), "@wilfreddonaldlo")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU2lkZUl0ZW1zLnRzeCJdLCJuYW1lcyI6WyJMaW5rZWRJbkJ1dHRvbiIsInN0eWxlZCIsIkJ1dHRvbiIsIkdpdGh1YkJ1dHRvbiIsIlR3aXR0ZXJCdXR0b24iLCJTaWRlSXRlbXMiLCJmcm9tIiwic2NhbGUiLCJ0byIsImxvb3AiLCJJbmZpbml0eSIsImVhc2UiLCJkdXJhdGlvbiIsIm1hcmdpbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRU8sTUFBTUEsY0FBYyxHQUFHQyxpRUFBTSxDQUFDQyxnRUFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDBVQUFwQjtLQUFNRixjO0FBZU4sTUFBTUcsWUFBWSxHQUFHRixpRUFBTSxDQUFDQyxnRUFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHVTQUFsQjtNQUFNQyxZO0FBa0JOLE1BQU1DLGFBQWEsR0FBR0gsaUVBQU0sQ0FBQ0MsZ0VBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSwrUEFBbkI7TUFBTUUsYTs7QUFlYixNQUFNQyxTQUEwQixHQUFHLE1BQU07QUFDdkMsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLGNBQVUsRUFBRTtBQUNWQyxVQUFJLEVBQUU7QUFDSkMsYUFBSyxFQUFFO0FBREgsT0FESTtBQUlWQyxRQUFFLEVBQUU7QUFDRkQsYUFBSyxFQUFFO0FBREwsT0FKTTtBQU9WRSxVQUFJLEVBQUU7QUFDSkEsWUFBSSxFQUFFQyxRQURGO0FBRUpDLFlBQUksRUFBRSxRQUZGO0FBR0pDLGdCQUFRLEVBQUU7QUFITjtBQVBJLEtBRGQ7QUFjRSxXQUFPLEVBQUU7QUFBRUwsV0FBSyxFQUFFO0FBQVQsS0FkWDtBQWVFLFdBQU8sRUFBRTtBQUFFQSxXQUFLLEVBQUU7QUFBVCxLQWZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FpQkUsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQyxZQUFEO0FBQ0UsU0FBSyxFQUFDLFFBRFI7QUFFRSxRQUFJLEVBQUMsaUNBRlAsQ0FHRTtBQUhGO0FBSUUsVUFBTSxFQUFDLFFBSlQ7QUFLRSxPQUFHLEVBQUMscUJBTE47QUFNRSxRQUFJLEVBQUMsTUFOUDtBQU9FLE1BQUUsRUFBQyxjQVBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVVHLEdBVkgsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEYsQ0FGRixFQWtCRSxNQUFDLGNBQUQ7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFNBQUssRUFBQyxVQUZSO0FBR0UsV0FBTyxFQUFDLE1BSFY7QUFJRSxTQUFLLEVBQUU7QUFBRU0sZ0JBQVUsRUFBRTtBQUFkLEtBSlQ7QUFLRSxRQUFJLEVBQUMsb0RBTFAsQ0FNRTtBQU5GO0FBT0UsVUFBTSxFQUFDLFFBUFQ7QUFRRSxPQUFHLEVBQUMscUJBUk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBV0U7QUFBTSxhQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRixDQWxCRixFQWlDRSxNQUFDLHdEQUFEO0FBQVEsVUFBTSxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGFBQUQ7QUFDRSxTQUFLLEVBQUU7QUFBRUEsZ0JBQVUsRUFBRTtBQUFkLEtBRFQ7QUFFRSxRQUFJLEVBQUMseURBRlAsQ0FHRTtBQUhGO0FBSUUsT0FBRyxFQUFDLHFCQUpOLENBS0U7QUFMRjtBQU1FLFVBQU0sRUFBQyxRQU5UO0FBT0UsU0FBSyxFQUFDLHlCQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixxQkFERixDQWpDRixDQWpCRixDQURGLENBREY7QUFzRUQsQ0F2RUQ7O01BQU1SLFM7QUF5RVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjZiNzRhMWQzNTM0NTVjYzE0OTlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0LCBIaWRkZW4gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViXCI7XHJcbmltcG9ydCBMaW5rZWRJbkljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9MaW5rZWRJblwiO1xyXG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rZWRJbkJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODY3QjIgIWltcG9ydGFudDs7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50OztcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSg1MCwgNTAsIDkzLCAwLjExKSwgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDs7XHJcbiAgLyogcGFkZGluZzogN3B4IDE0cHg7ICovXHJcbiAgcGFkZGluZzogNnB4IDhweCAhaW1wb3J0YW50OztcclxuICAgIGZvbnQtc2l6ZTogMC44MXJlbSAhaW1wb3J0YW50OztcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzU3ODkgIWltcG9ydGFudDs7XHJcbiAgfVxyXG4gICYgc3BhbiAudGV4dC1pbm5lcntcclxuICAgIG1hcmdpbi10b3A6IDJweCAhaW1wb3J0YW50OztcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBHaXRodWJCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjN2M5ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICAjMjQyOTJlICFpbXBvcnRhbnQ7O1xyXG5cclxuICAvKiBib3JkZXItcmFkaXVzOiA2cHg7ICovXHJcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoNTAsIDUwLCA5MywgMC4xMSksIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7O1xyXG4gIC8qIHBhZGRpbmc6IDdweCAxNHB4OyAqL1xyXG4gIHBhZGRpbmc6IDZweCA4cHggIWltcG9ydGFudDs7XHJcbiAgICBmb250LXNpemU6IDAuODFyZW0gIWltcG9ydGFudDs7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY5NDk4ICFpbXBvcnRhbnQ7O1xyXG4gIH1cclxuICAmIHNwYW57XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUd2l0dGVyQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3OGJkYyAhaW1wb3J0YW50OztcclxuICBjb2xvcjogI2Y4ZjhmOCAhaW1wb3J0YW50OztcclxuICAvKiBib3JkZXItcmFkaXVzOiA2cHg7ICovXHJcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoNTAsIDUwLCA5MywgMC4xMSksIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7O1xyXG4gIC8qIHBhZGRpbmc6IDdweCAxNHB4OyAqL1xyXG4gIHBhZGRpbmc6IDZweCA4cHggIWltcG9ydGFudDs7XHJcbiAgICBmb250LXNpemU6IDAuODFyZW0gIWltcG9ydGFudDs7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURBMUYyICFpbXBvcnRhbnQ7O1xyXG4gIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbn1cclxuY29uc3QgU2lkZUl0ZW1zOiBSZWFjdC5GQzxQcm9wcz4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICBmcm9tOiB7XHJcbiAgICAgICAgICAgIHNjYWxlOiAxLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRvOiB7XHJcbiAgICAgICAgICAgIHNjYWxlOiAyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxvb3A6IHtcclxuICAgICAgICAgICAgbG9vcDogSW5maW5pdHksXHJcbiAgICAgICAgICAgIGVhc2U6IFwibGluZWFyXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3sgc2NhbGU6IDEgfX1cclxuICAgICAgICBpbml0aWFsPXt7IHNjYWxlOiAwLjkgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgey8qIDxIaWRkZW4gb25seT1cInhzXCI+ICovfVxyXG4gICAgICAgICAgPEdpdGh1YkJ1dHRvblxyXG4gICAgICAgICAgICB0aXRsZT1cIkdpdGh1YlwiXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vd2lsZnJlZGxvcGV6XCJcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICByb2xlPVwibGlua1wiXHJcbiAgICAgICAgICAgIGlkPVwicHJvZmlsZS1saW5rXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdpdEh1Ykljb24gLz5cclxuICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICBHaXRodWJcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9HaXRodWJCdXR0b24+XHJcbiAgICAgICAgICB7LyogPC9IaWRkZW4+ICovfVxyXG4gICAgICAgICAgPExpbmtlZEluQnV0dG9uXHJcbiAgICAgICAgICAgIHJvbGU9XCJsaW5rXCJcclxuICAgICAgICAgICAgdGl0bGU9XCJMaW5rZWRJblwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIwLjRlbVwiIH19XHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vd2lsZnJlZC1sb3Blei1hMzA5Yjg5NlwiXHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpbmtlZEluSWNvbiAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgTGlua2VkSW5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9MaW5rZWRJbkJ1dHRvbj5cclxuICAgICAgICAgIDxIaWRkZW4gc21Eb3duPlxyXG4gICAgICAgICAgICA8VHdpdHRlckJ1dHRvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMC41ZW1cIiB9fVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3dpbGZyZWRkb25hbGRsbz9yZWZfc3JjPXR3c3JjJTVFdGZ3XCJcclxuICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiVHdpdHRlciBAV2lsZnJlZG9uYWxkTG9cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFR3aXR0ZXJJY29uIC8+XHJcbiAgICAgICAgICAgICAgQHdpbGZyZWRkb25hbGRsb1xyXG4gICAgICAgICAgICA8L1R3aXR0ZXJCdXR0b24+XHJcbiAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVJdGVtcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==