webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/shared/StyledLink.ts":
/*!*********************************************!*\
  !*** ./src/components/shared/StyledLink.ts ***!
  \*********************************************/
/*! exports provided: NonStyledAnchor, StyledHtmlLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonStyledAnchor", function() { return NonStyledAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHtmlLink", function() { return StyledHtmlLink; });
/* harmony import */ var _root_styles_getTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @root/styles/getTheme */ "./src/styles/getTheme.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

 // import { Link } from "react-router-dom";

const NonStyledAnchor = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "StyledLink__NonStyledAnchor",
  componentId: "eum50p-0"
})(["color:inherit;text-decoration:none;&:hover{color:'inherit'}"]);
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "StyledLink",
  componentId: "eum50p-1"
})(["color:inherit;text-decoration:none;&:hover{color:", "}"], _root_styles_getTheme__WEBPACK_IMPORTED_MODULE_0__["SECONDARY_COLOR"]);
const StyledHtmlLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "StyledLink__StyledHtmlLink",
  componentId: "eum50p-2"
})(["color:inherit;text-decoration:none;"]);
/* harmony default export */ __webpack_exports__["default"] = (StyledLink);

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

/***/ }),

/***/ "./src/components/shared/index.ts":
/*!****************************************!*\
  !*** ./src/components/shared/index.ts ***!
  \****************************************/
/*! exports provided: Responsive, Container, Segment, Sidebar, SidebarItem, StyledLink, StyledHtmlLink, StyledButton, CircleButton, PrimaryBackgroundSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Responsive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Responsive */ "./src/components/shared/Responsive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Responsive", function() { return _Responsive__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container */ "./src/components/shared/Container.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _Container__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Segment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Segment */ "./src/components/shared/Segment.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Segment", function() { return _Segment__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidebar */ "./src/components/shared/Sidebar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return _Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _SidebarItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SidebarItem */ "./src/components/shared/SidebarItem.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarItem", function() { return _SidebarItem__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StyledLink */ "./src/components/shared/StyledLink.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return _StyledLink__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledHtmlLink", function() { return _StyledLink__WEBPACK_IMPORTED_MODULE_5__["StyledHtmlLink"]; });

/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StyledButton */ "./src/components/shared/StyledButton.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return _StyledButton__WEBPACK_IMPORTED_MODULE_6__["StyledButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleButton", function() { return _StyledButton__WEBPACK_IMPORTED_MODULE_6__["CircleButton"]; });

/* harmony import */ var _multi_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./multi-use */ "./src/components/shared/multi-use.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrimaryBackgroundSection", function() { return _multi_use__WEBPACK_IMPORTED_MODULE_7__["PrimaryBackgroundSection"]; });










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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvU3R5bGVkTGluay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvaW5kZXgudHMiXSwibmFtZXMiOlsiTm9uU3R5bGVkQW5jaG9yIiwic3R5bGVkIiwiYSIsIlN0eWxlZExpbmsiLCJTRUNPTkRBUllfQ09MT1IiLCJTdHlsZWRIdG1sTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUVPLE1BQU1BLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsQ0FBVjtBQUFBO0FBQUE7QUFBQSxtRUFBckI7QUFRUCxNQUFNQyxVQUFVLEdBQUdGLHlEQUFNLENBQUNDLENBQVY7QUFBQTtBQUFBO0FBQUEsK0RBSUFFLHFFQUpBLENBQWhCO0FBUU8sTUFBTUMsY0FBYyxHQUFHSix5REFBTSxDQUFDQyxDQUFWO0FBQUE7QUFBQTtBQUFBLDJDQUFwQjtBQUtRQyx5RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5iNjA4NDJhODBkM2NkNTBmYTMyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0VDT05EQVJZX0NPTE9SIH0gZnJvbSBcIkByb290L3N0eWxlcy9nZXRUaGVtZVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG4vLyBpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBOb25TdHlsZWRBbmNob3IgPSBzdHlsZWQuYWBcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgIGNvbG9yOiAnaW5oZXJpdCdcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYWBcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgIGNvbG9yOiAke1NFQ09OREFSWV9DT0xPUn1cclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRIdG1sTGluayA9IHN0eWxlZC5hYFxyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRMaW5rO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFJlc3BvbnNpdmUgfSBmcm9tIFwiLi9SZXNwb25zaXZlXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFpbmVyIH0gZnJvbSBcIi4vQ29udGFpbmVyXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VnbWVudCB9IGZyb20gXCIuL1NlZ21lbnRcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTaWRlYmFyIH0gZnJvbSBcIi4vU2lkZWJhclwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpZGViYXJJdGVtIH0gZnJvbSBcIi4vU2lkZWJhckl0ZW1cIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdHlsZWRMaW5rLCBTdHlsZWRIdG1sTGluayB9IGZyb20gXCIuL1N0eWxlZExpbmtcIjtcclxuZXhwb3J0IHsgU3R5bGVkQnV0dG9uLCBDaXJjbGVCdXR0b24gfSBmcm9tIFwiLi9TdHlsZWRCdXR0b25cIjtcclxuZXhwb3J0IHsgUHJpbWFyeUJhY2tncm91bmRTZWN0aW9uIH0gZnJvbSBcIi4vbXVsdGktdXNlXCI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=