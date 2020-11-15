webpackHotUpdate_N_E("pages/contact",{

/***/ "./src/components/shared/index.ts":
/*!****************************************!*\
  !*** ./src/components/shared/index.ts ***!
  \****************************************/
/*! exports provided: Responsive, Container, Segment, StyledLink, StyledHtmlLink, NonStyledAnchor, NonActiveLink, StyledButton, CircleButton, PrimaryBackgroundSection, DividerElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Responsive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Responsive */ "./src/components/shared/Responsive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Responsive", function() { return _Responsive__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container */ "./src/components/shared/Container.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _Container__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Segment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Segment */ "./src/components/shared/Segment.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Segment", function() { return _Segment__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StyledLink */ "./src/components/shared/StyledLink.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return _StyledLink__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledHtmlLink", function() { return _StyledLink__WEBPACK_IMPORTED_MODULE_3__["StyledHtmlLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NonStyledAnchor", function() { return _StyledLink__WEBPACK_IMPORTED_MODULE_3__["NonStyledAnchor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NonActiveLink", function() { return _StyledLink__WEBPACK_IMPORTED_MODULE_3__["NonActiveLink"]; });

/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StyledButton */ "./src/components/shared/StyledButton.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return _StyledButton__WEBPACK_IMPORTED_MODULE_4__["StyledButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleButton", function() { return _StyledButton__WEBPACK_IMPORTED_MODULE_4__["CircleButton"]; });

/* harmony import */ var _multi_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./multi-use */ "./src/components/shared/multi-use.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrimaryBackgroundSection", function() { return _multi_use__WEBPACK_IMPORTED_MODULE_5__["PrimaryBackgroundSection"]; });

/* harmony import */ var _DividerElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DividerElement */ "./src/components/shared/DividerElement.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DividerElement", function() { return _DividerElement__WEBPACK_IMPORTED_MODULE_6__["DividerElement"]; });



 // export { default as SidebarItem } from "./SidebarItem";






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

/***/ }),

/***/ "./src/components/shared/multi-use.ts":
/*!********************************************!*\
  !*** ./src/components/shared/multi-use.ts ***!
  \********************************************/
/*! exports provided: PrimaryBackgroundSection, FooterSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryBackgroundSection", function() { return PrimaryBackgroundSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterSection", function() { return FooterSection; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const PrimaryBackgroundSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "multi-use__PrimaryBackgroundSection",
  componentId: "sc-19lq2f4-0"
})(["background:", ";color:", ";margin:auto;display:flex;flex-direction:column;"], props => props.theme.colors[props.bgColor || 'dark'], props => props.theme.colors[props.textColor || 'light']);
const FooterSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "multi-use__FooterSection",
  componentId: "sc-19lq2f4-1"
})(["background:rgb(4,12,20);color:#ffffff;margin:auto;display:flex;flex-direction:column;"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL2luZGV4LnRzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvbXVsdGktdXNlLnRzIl0sIm5hbWVzIjpbIlByaW1hcnlCYWNrZ3JvdW5kU2VjdGlvbiIsInN0eWxlZCIsInNlY3Rpb24iLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwiYmdDb2xvciIsInRleHRDb2xvciIsIkZvb3RlclNlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFNQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHTyxNQUFNQSx3QkFBd0IsR0FBR0MseURBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSxtRkFJckJDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJGLEtBQUssQ0FBQ0csT0FBTixJQUFpQixNQUFwQyxDQUpZLEVBSzFCSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CRixLQUFLLENBQUNJLFNBQU4sSUFBbUIsT0FBdEMsQ0FMaUIsQ0FBOUI7QUFXQSxNQUFNQyxhQUFhLEdBQUdQLHlEQUFNLENBQUNDLE9BQVY7QUFBQTtBQUFBO0FBQUEsNkZBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRhY3QuYWRlYzM1ZjQ1OTNhMDI3YWNkNGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgUmVzcG9uc2l2ZSB9IGZyb20gXCIuL1Jlc3BvbnNpdmVcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb250YWluZXIgfSBmcm9tIFwiLi9Db250YWluZXJcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWdtZW50IH0gZnJvbSBcIi4vU2VnbWVudFwiO1xyXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIFNpZGViYXJJdGVtIH0gZnJvbSBcIi4vU2lkZWJhckl0ZW1cIjtcclxuZXhwb3J0IHtcclxuICBkZWZhdWx0IGFzIFN0eWxlZExpbmssXHJcbiAgU3R5bGVkSHRtbExpbmssXHJcbiAgTm9uU3R5bGVkQW5jaG9yLFxyXG4gIE5vbkFjdGl2ZUxpbmssXHJcbn0gZnJvbSBcIi4vU3R5bGVkTGlua1wiO1xyXG5leHBvcnQgeyBTdHlsZWRCdXR0b24sIENpcmNsZUJ1dHRvbiB9IGZyb20gXCIuL1N0eWxlZEJ1dHRvblwiO1xyXG5leHBvcnQgeyBQcmltYXJ5QmFja2dyb3VuZFNlY3Rpb24gfSBmcm9tIFwiLi9tdWx0aS11c2VcIjtcclxuZXhwb3J0IHsgRGl2aWRlckVsZW1lbnQgfSBmcm9tIFwiLi9EaXZpZGVyRWxlbWVudFwiO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBTdHlsZWRDb21wb25lbnRDb2xvcktleSB9IGZyb20gJy4uLy4uL3RoZW1lL2dldFRoZW1lJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFByaW1hcnlCYWNrZ3JvdW5kU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uPHtcclxuICBiZ0NvbG9yPzogU3R5bGVkQ29tcG9uZW50Q29sb3JLZXlcclxuICB0ZXh0Q29sb3I/OiBTdHlsZWRDb21wb25lbnRDb2xvcktleVxyXG59PmBcclxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9yc1twcm9wcy5iZ0NvbG9yIHx8ICdkYXJrJ119O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9yc1twcm9wcy50ZXh0Q29sb3IgfHwgJ2xpZ2h0J119O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb248e30+YFxyXG4gIGJhY2tncm91bmQ6IHJnYig0LCAxMiwgMjApO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==