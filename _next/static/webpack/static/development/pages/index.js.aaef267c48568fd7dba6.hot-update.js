webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/styles/useSharedStyles.ts":
/*!***************************************!*\
  !*** ./src/styles/useSharedStyles.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(_c = theme => Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
  root: {
    backgroundColor: theme.palette.common.black
  },
  constrainedSection: {
    marginLeft: "auto",
    [theme.breakpoints.only("md")]: {
      // position: "absolute",
      // right: 0,
      // minWidth: theme.breakpoints.values.md,
      paddingLeft: "auto",
      color: "yellow",
      minWidth: theme.breakpoints.values.md - 240
    },
    [theme.breakpoints.up("lg")]: {
      minWidth: theme.breakpoints.values.lg - 240,
      color: "blue"
    }
  }
})));

var _c, _c2;

$RefreshReg$(_c, "%default%$makeStyles");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3VzZVNoYXJlZFN0eWxlcy50cyJdLCJuYW1lcyI6WyJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImNvbW1vbiIsImJsYWNrIiwiY29uc3RyYWluZWRTZWN0aW9uIiwibWFyZ2luTGVmdCIsImJyZWFrcG9pbnRzIiwib25seSIsInBhZGRpbmdMZWZ0IiwiY29sb3IiLCJtaW5XaWR0aCIsInZhbHVlcyIsIm1kIiwidXAiLCJsZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVlLHFFQUFBQSxvRUFBVSxNQUFFQyxLQUFELElBQ3hCQyxzRUFBWSxDQUFDO0FBQ1hDLE1BQUksRUFBRTtBQUNKQyxtQkFBZSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkM7QUFEbEMsR0FESztBQUlYQyxvQkFBa0IsRUFBRTtBQUNsQkMsY0FBVSxFQUFFLE1BRE07QUFFbEIsS0FBQ1IsS0FBSyxDQUFDUyxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFELEdBQWdDO0FBQzlCO0FBQ0E7QUFDQTtBQUNBQyxpQkFBVyxFQUFFLE1BSmlCO0FBSzlCQyxXQUFLLEVBQUUsUUFMdUI7QUFPOUJDLGNBQVEsRUFBRWIsS0FBSyxDQUFDUyxXQUFOLENBQWtCSyxNQUFsQixDQUF5QkMsRUFBekIsR0FBOEI7QUFQVixLQUZkO0FBV2xCLEtBQUNmLEtBQUssQ0FBQ1MsV0FBTixDQUFrQk8sRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUM1QkgsY0FBUSxFQUFFYixLQUFLLENBQUNTLFdBQU4sQ0FBa0JLLE1BQWxCLENBQXlCRyxFQUF6QixHQUE4QixHQURaO0FBRTVCTCxXQUFLLEVBQUU7QUFGcUI7QUFYWjtBQUpULENBQUQsQ0FEVyxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYWFlZjI2N2M0ODU2OGZkN2RiYTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrLFxyXG4gICAgfSxcclxuICAgIGNvbnN0cmFpbmVkU2VjdGlvbjoge1xyXG4gICAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLm9ubHkoXCJtZFwiKV06IHtcclxuICAgICAgICAvLyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIC8vIHJpZ2h0OiAwLFxyXG4gICAgICAgIC8vIG1pbldpZHRoOiB0aGVtZS5icmVha3BvaW50cy52YWx1ZXMubWQsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6IFwiYXV0b1wiLFxyXG4gICAgICAgIGNvbG9yOiBcInllbGxvd1wiLFxyXG5cclxuICAgICAgICBtaW5XaWR0aDogdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLm1kIC0gMjQwLFxyXG4gICAgICB9LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJsZ1wiKV06IHtcclxuICAgICAgICBtaW5XaWR0aDogdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLmxnIC0gMjQwLFxyXG4gICAgICAgIGNvbG9yOiBcImJsdWVcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==