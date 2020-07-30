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
    variants: {
      start: {
        scale: 0.9
      },
      end: {
        scale: 1
      }
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
      lineNumber: 72,
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
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }), " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: "text-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, "LinkedIn")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Hidden"], {
    smDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
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
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU2lkZUl0ZW1zLnRzeCJdLCJuYW1lcyI6WyJMaW5rZWRJbkJ1dHRvbiIsInN0eWxlZCIsIkJ1dHRvbiIsIkdpdGh1YkJ1dHRvbiIsIlR3aXR0ZXJCdXR0b24iLCJTaWRlSXRlbXMiLCJzdGFydCIsInNjYWxlIiwiZW5kIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFTyxNQUFNQSxjQUFjLEdBQUdDLGlFQUFNLENBQUNDLGdFQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsMFVBQXBCO0tBQU1GLGM7QUFlTixNQUFNRyxZQUFZLEdBQUdGLGlFQUFNLENBQUNDLGdFQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsdVNBQWxCO01BQU1DLFk7QUFrQk4sTUFBTUMsYUFBYSxHQUFHSCxpRUFBTSxDQUFDQyxnRUFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLCtQQUFuQjtNQUFNRSxhOztBQWViLE1BQU1DLFNBQTBCLEdBQUcsTUFBTTtBQUN2QyxTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsWUFBUSxFQUFFO0FBQ1JDLFdBQUssRUFBRTtBQUNMQyxhQUFLLEVBQUU7QUFERixPQURDO0FBSVJDLFNBQUcsRUFBRTtBQUNIRCxhQUFLLEVBQUU7QUFESjtBQUpHLEtBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsWUFBRDtBQUNFLFNBQUssRUFBQyxRQURSO0FBRUUsUUFBSSxFQUFDLGlDQUZQLENBR0U7QUFIRjtBQUlFLFVBQU0sRUFBQyxRQUpUO0FBS0UsT0FBRyxFQUFDLHFCQUxOO0FBTUUsUUFBSSxFQUFDLE1BTlA7QUFPRSxNQUFFLEVBQUMsY0FQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVRyxHQVZILEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLENBRkYsRUFrQkUsTUFBQyxjQUFEO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxTQUFLLEVBQUMsVUFGUjtBQUdFLFdBQU8sRUFBQyxNQUhWO0FBSUUsU0FBSyxFQUFFO0FBQUVFLGdCQUFVLEVBQUU7QUFBZCxLQUpUO0FBS0UsUUFBSSxFQUFDLG9EQUxQLENBTUU7QUFORjtBQU9FLFVBQU0sRUFBQyxRQVBUO0FBUUUsT0FBRyxFQUFDLHFCQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFO0FBQU0sYUFBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEYsQ0FsQkYsRUFpQ0UsTUFBQyx3REFBRDtBQUFRLFVBQU0sTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxhQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVBLGdCQUFVLEVBQUU7QUFBZCxLQURUO0FBRUUsUUFBSSxFQUFDLHlEQUZQLENBR0U7QUFIRjtBQUlFLE9BQUcsRUFBQyxxQkFKTixDQUtFO0FBTEY7QUFNRSxVQUFNLEVBQUMsUUFOVDtBQU9FLFNBQUssRUFBQyx5QkFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYscUJBREYsQ0FqQ0YsQ0FWRixDQURGLENBREY7QUErREQsQ0FoRUQ7O01BQU1KLFM7QUFrRVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmY3ZGI5NTBmZTQxNTE2NjllNzc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0LCBIaWRkZW4gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViXCI7XHJcbmltcG9ydCBMaW5rZWRJbkljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9MaW5rZWRJblwiO1xyXG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rZWRJbkJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODY3QjIgIWltcG9ydGFudDs7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50OztcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSg1MCwgNTAsIDkzLCAwLjExKSwgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDs7XHJcbiAgLyogcGFkZGluZzogN3B4IDE0cHg7ICovXHJcbiAgcGFkZGluZzogNnB4IDhweCAhaW1wb3J0YW50OztcclxuICAgIGZvbnQtc2l6ZTogMC44MXJlbSAhaW1wb3J0YW50OztcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzU3ODkgIWltcG9ydGFudDs7XHJcbiAgfVxyXG4gICYgc3BhbiAudGV4dC1pbm5lcntcclxuICAgIG1hcmdpbi10b3A6IDJweCAhaW1wb3J0YW50OztcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBHaXRodWJCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjN2M5ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICAjMjQyOTJlICFpbXBvcnRhbnQ7O1xyXG5cclxuICAvKiBib3JkZXItcmFkaXVzOiA2cHg7ICovXHJcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoNTAsIDUwLCA5MywgMC4xMSksIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7O1xyXG4gIC8qIHBhZGRpbmc6IDdweCAxNHB4OyAqL1xyXG4gIHBhZGRpbmc6IDZweCA4cHggIWltcG9ydGFudDs7XHJcbiAgICBmb250LXNpemU6IDAuODFyZW0gIWltcG9ydGFudDs7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY5NDk4ICFpbXBvcnRhbnQ7O1xyXG4gIH1cclxuICAmIHNwYW57XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUd2l0dGVyQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3OGJkYyAhaW1wb3J0YW50OztcclxuICBjb2xvcjogI2Y4ZjhmOCAhaW1wb3J0YW50OztcclxuICAvKiBib3JkZXItcmFkaXVzOiA2cHg7ICovXHJcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoNTAsIDUwLCA5MywgMC4xMSksIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7O1xyXG4gIC8qIHBhZGRpbmc6IDdweCAxNHB4OyAqL1xyXG4gIHBhZGRpbmc6IDZweCA4cHggIWltcG9ydGFudDs7XHJcbiAgICBmb250LXNpemU6IDAuODFyZW0gIWltcG9ydGFudDs7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURBMUYyICFpbXBvcnRhbnQ7O1xyXG4gIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbn1cclxuY29uc3QgU2lkZUl0ZW1zOiBSZWFjdC5GQzxQcm9wcz4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICB2YXJpYW50cz17e1xyXG4gICAgICAgICAgc3RhcnQ6IHtcclxuICAgICAgICAgICAgc2NhbGU6IDAuOSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlbmQ6IHtcclxuICAgICAgICAgICAgc2NhbGU6IDEsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIHsvKiA8SGlkZGVuIG9ubHk9XCJ4c1wiPiAqL31cclxuICAgICAgICAgIDxHaXRodWJCdXR0b25cclxuICAgICAgICAgICAgdGl0bGU9XCJHaXRodWJcIlxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3dpbGZyZWRsb3BlelwiXHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgcm9sZT1cImxpbmtcIlxyXG4gICAgICAgICAgICBpZD1cInByb2ZpbGUtbGlua1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHaXRIdWJJY29uIC8+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgR2l0aHViXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvR2l0aHViQnV0dG9uPlxyXG4gICAgICAgICAgey8qIDwvSGlkZGVuPiAqL31cclxuICAgICAgICAgIDxMaW5rZWRJbkJ1dHRvblxyXG4gICAgICAgICAgICByb2xlPVwibGlua1wiXHJcbiAgICAgICAgICAgIHRpdGxlPVwiTGlua2VkSW5cIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMC40ZW1cIiB9fVxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3dpbGZyZWQtbG9wZXotYTMwOWI4OTZcIlxyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rZWRJbkljb24gLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgIExpbmtlZEluXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvTGlua2VkSW5CdXR0b24+XHJcbiAgICAgICAgICA8SGlkZGVuIHNtRG93bj5cclxuICAgICAgICAgICAgPFR3aXR0ZXJCdXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjAuNWVtXCIgfX1cclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS93aWxmcmVkZG9uYWxkbG8/cmVmX3NyYz10d3NyYyU1RXRmd1wiXHJcbiAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICB0aXRsZT1cIlR3aXR0ZXIgQFdpbGZyZWRvbmFsZExvXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUd2l0dGVySWNvbiAvPlxyXG4gICAgICAgICAgICAgIEB3aWxmcmVkZG9uYWxkbG9cclxuICAgICAgICAgICAgPC9Ud2l0dGVyQnV0dG9uPlxyXG4gICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlSXRlbXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=