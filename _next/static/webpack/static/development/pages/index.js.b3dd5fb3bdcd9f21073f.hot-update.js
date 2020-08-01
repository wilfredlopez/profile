webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/shared/ScaleUpDownComponent.tsx":
/*!********************************************************!*\
  !*** ./src/components/shared/ScaleUpDownComponent.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_styles_getTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @root/styles/getTheme */ "./src/styles/getTheme.ts");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\shared\\ScaleUpDownComponent.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const scaleTransition = {
  scale: {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeOut" // repeatDelay: 0.5,

  },
  backgroundColor: {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.5
  }
};

const ScaleUpDownComponent = ({
  backgrounds = [_root_styles_getTheme__WEBPACK_IMPORTED_MODULE_0__["TERTIARY_COLOR"], _root_styles_getTheme__WEBPACK_IMPORTED_MODULE_0__["SECONDARY_COLOR"]],
  scaleTo = 1,
  children
}) => {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    style: {
      marginTop: 20,
      marginBottom: 20,
      borderRadius: 6
    },
    transition: scaleTransition,
    animate: {
      scale: [0.9, scaleTo],
      backgroundColor: backgrounds
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, children);
};

_c = ScaleUpDownComponent;
/* harmony default export */ __webpack_exports__["default"] = (ScaleUpDownComponent);

var _c;

$RefreshReg$(_c, "ScaleUpDownComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvU2NhbGVVcERvd25Db21wb25lbnQudHN4Il0sIm5hbWVzIjpbInNjYWxlVHJhbnNpdGlvbiIsInNjYWxlIiwiZHVyYXRpb24iLCJ5b3lvIiwiSW5maW5pdHkiLCJlYXNlIiwiYmFja2dyb3VuZENvbG9yIiwicmVwZWF0RGVsYXkiLCJTY2FsZVVwRG93bkNvbXBvbmVudCIsImJhY2tncm91bmRzIiwiVEVSVElBUllfQ09MT1IiLCJTRUNPTkRBUllfQ09MT1IiLCJzY2FsZVRvIiwiY2hpbGRyZW4iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJib3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQUNBO0FBY0EsTUFBTUEsZUFBZSxHQUFHO0FBQ3RCQyxPQUFLLEVBQUU7QUFDTEMsWUFBUSxFQUFFLEdBREw7QUFFTEMsUUFBSSxFQUFFQyxRQUZEO0FBR0xDLFFBQUksRUFBRSxTQUhELENBSUw7O0FBSkssR0FEZTtBQU90QkMsaUJBQWUsRUFBRTtBQUNmSixZQUFRLEVBQUUsR0FESztBQUVmQyxRQUFJLEVBQUVDLFFBRlM7QUFHZkMsUUFBSSxFQUFFLFNBSFM7QUFJZkUsZUFBVyxFQUFFO0FBSkU7QUFQSyxDQUF4Qjs7QUFlQSxNQUFNQyxvQkFBb0IsR0FBRyxDQUMzQjtBQUNFQyxhQUFXLEdBQUcsQ0FBQ0Msb0VBQUQsRUFBaUJDLHFFQUFqQixDQURoQjtBQUVFQyxTQUFPLEdBQUcsQ0FGWjtBQUdFQztBQUhGLENBRDJCLEtBTXhCO0FBQ0gsU0FDRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUUsRUFBYjtBQUFpQkMsa0JBQVksRUFBRSxFQUEvQjtBQUFtQ0Msa0JBQVksRUFBRTtBQUFqRCxLQURUO0FBRUUsY0FBVSxFQUFFaEIsZUFGZDtBQUdFLFdBQU8sRUFBRTtBQUNQQyxXQUFLLEVBQUUsQ0FBQyxHQUFELEVBQU1XLE9BQU4sQ0FEQTtBQUVQTixxQkFBZSxFQUFFRztBQUZWLEtBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFHSSxRQVJILENBREY7QUFZRCxDQW5CRDs7S0FBTUwsb0I7QUFxQlNBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5iM2RkNWZiM2JkY2Q5ZjIxMDczZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBQUklNQVJZX0NPTE9SLFxyXG4gIFNFQ09OREFSWV9DT0xPUixcclxuICBURVJUSUFSWV9DT0xPUixcclxufSBmcm9tIFwiQHJvb3Qvc3R5bGVzL2dldFRoZW1lXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAvKipcclxuICAgKiBudW1iZXIgdG8gc2NhbGUgdXAgdG8uIGRlZmF1bHRzIHRvIDEuMlxyXG4gICAqL1xyXG4gIHNjYWxlVG8/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogYSB0dXBsZSBvZiBzdHJpbmdzIG9mIGNvbG9ycy4gZGVmYXVsdHMgdG8gW1wiI2ZmNjY5OVwiLCBcIiM2NjY2ZmZcIl1cclxuICAgKiBwYXNzIGFuIGVtcHR5IGFycmF5IHRvIGRpc2FibGUgdGhlIGVmZmVjdFxyXG4gICAqL1xyXG4gIGJhY2tncm91bmRzPzogW3N0cmluZywgc3RyaW5nXTtcclxufVxyXG5cclxuY29uc3Qgc2NhbGVUcmFuc2l0aW9uID0ge1xyXG4gIHNjYWxlOiB7XHJcbiAgICBkdXJhdGlvbjogMC44LFxyXG4gICAgeW95bzogSW5maW5pdHksXHJcbiAgICBlYXNlOiBcImVhc2VPdXRcIixcclxuICAgIC8vIHJlcGVhdERlbGF5OiAwLjUsXHJcbiAgfSxcclxuICBiYWNrZ3JvdW5kQ29sb3I6IHtcclxuICAgIGR1cmF0aW9uOiAwLjgsXHJcbiAgICB5b3lvOiBJbmZpbml0eSxcclxuICAgIGVhc2U6IFwiZWFzZU91dFwiLFxyXG4gICAgcmVwZWF0RGVsYXk6IDAuNSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgU2NhbGVVcERvd25Db21wb25lbnQgPSAoXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZHMgPSBbVEVSVElBUllfQ09MT1IsIFNFQ09OREFSWV9DT0xPUl0sXHJcbiAgICBzY2FsZVRvID0gMSxcclxuICAgIGNoaWxkcmVuLFxyXG4gIH06IFByb3BzV2l0aENoaWxkcmVuPFByb3BzPixcclxuKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogMjAsIG1hcmdpbkJvdHRvbTogMjAsIGJvcmRlclJhZGl1czogNiB9fVxyXG4gICAgICB0cmFuc2l0aW9uPXtzY2FsZVRyYW5zaXRpb259XHJcbiAgICAgIGFuaW1hdGU9e3tcclxuICAgICAgICBzY2FsZTogWzAuOSwgc2NhbGVUb10sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kcyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY2FsZVVwRG93bkNvbXBvbmVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==