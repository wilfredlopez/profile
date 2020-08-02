webpackHotUpdate("static\\development\\pages\\contact.js",{

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
  let animate = {
    scale: [0.9, scaleTo]
  };

  if (backgrounds.length > 0) {
    animate.backgroundColor = backgrounds;
  }

  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    style: {
      marginTop: 20,
      marginBottom: 20,
      borderRadius: 6
    },
    transition: scaleTransition,
    animate: animate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvU2NhbGVVcERvd25Db21wb25lbnQudHN4Il0sIm5hbWVzIjpbInNjYWxlVHJhbnNpdGlvbiIsInNjYWxlIiwiZHVyYXRpb24iLCJ5b3lvIiwiSW5maW5pdHkiLCJlYXNlIiwiYmFja2dyb3VuZENvbG9yIiwicmVwZWF0RGVsYXkiLCJTY2FsZVVwRG93bkNvbXBvbmVudCIsImJhY2tncm91bmRzIiwiVEVSVElBUllfQ09MT1IiLCJTRUNPTkRBUllfQ09MT1IiLCJzY2FsZVRvIiwiY2hpbGRyZW4iLCJhbmltYXRlIiwibGVuZ3RoIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBS0E7QUFDQTtBQWNBLE1BQU1BLGVBQWUsR0FBRztBQUN0QkMsT0FBSyxFQUFFO0FBQ0xDLFlBQVEsRUFBRSxHQURMO0FBRUxDLFFBQUksRUFBRUMsUUFGRDtBQUdMQyxRQUFJLEVBQUUsU0FIRCxDQUlMOztBQUpLLEdBRGU7QUFPdEJDLGlCQUFlLEVBQUU7QUFDZkosWUFBUSxFQUFFLEdBREs7QUFFZkMsUUFBSSxFQUFFQyxRQUZTO0FBR2ZDLFFBQUksRUFBRSxTQUhTO0FBSWZFLGVBQVcsRUFBRTtBQUpFO0FBUEssQ0FBeEI7O0FBZUEsTUFBTUMsb0JBQW9CLEdBQUcsQ0FDM0I7QUFDRUMsYUFBVyxHQUFHLENBQUNDLG9FQUFELEVBQWlCQyxxRUFBakIsQ0FEaEI7QUFFRUMsU0FBTyxHQUFHLENBRlo7QUFHRUM7QUFIRixDQUQyQixLQU14QjtBQUNILE1BQUlDLE9BQWtDLEdBQUc7QUFDdkNiLFNBQUssRUFBRSxDQUFDLEdBQUQsRUFBTVcsT0FBTjtBQURnQyxHQUF6Qzs7QUFHQSxNQUFJSCxXQUFXLENBQUNNLE1BQVosR0FBcUIsQ0FBekIsRUFBNEI7QUFDMUJELFdBQU8sQ0FBQ1IsZUFBUixHQUEwQkcsV0FBMUI7QUFDRDs7QUFDRCxTQUNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsU0FBSyxFQUFFO0FBQUVPLGVBQVMsRUFBRSxFQUFiO0FBQWlCQyxrQkFBWSxFQUFFLEVBQS9CO0FBQW1DQyxrQkFBWSxFQUFFO0FBQWpELEtBRFQ7QUFFRSxjQUFVLEVBQUVsQixlQUZkO0FBR0UsV0FBTyxFQUFFYyxPQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR0QsUUFMSCxDQURGO0FBU0QsQ0F0QkQ7O0tBQU1MLG9CO0FBd0JTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY29udGFjdC5qcy5iZmVlZmIyOWM2ZWE0NDQ4YzdmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBQUklNQVJZX0NPTE9SLFxyXG4gIFNFQ09OREFSWV9DT0xPUixcclxuICBURVJUSUFSWV9DT0xPUixcclxufSBmcm9tIFwiQHJvb3Qvc3R5bGVzL2dldFRoZW1lXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvblByb3BzLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgLyoqXHJcbiAgICogbnVtYmVyIHRvIHNjYWxlIHVwIHRvLiBkZWZhdWx0cyB0byAxLjJcclxuICAgKi9cclxuICBzY2FsZVRvPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIGEgdHVwbGUgb2Ygc3RyaW5ncyBvZiBjb2xvcnMuIGRlZmF1bHRzIHRvIFtcIiNmZjY2OTlcIiwgXCIjNjY2NmZmXCJdXHJcbiAgICogcGFzcyBhbiBlbXB0eSBhcnJheSB0byBkaXNhYmxlIHRoZSBlZmZlY3RcclxuICAgKi9cclxuICBiYWNrZ3JvdW5kcz86IFtzdHJpbmcsIHN0cmluZ107XHJcbn1cclxuXHJcbmNvbnN0IHNjYWxlVHJhbnNpdGlvbiA9IHtcclxuICBzY2FsZToge1xyXG4gICAgZHVyYXRpb246IDAuOCxcclxuICAgIHlveW86IEluZmluaXR5LFxyXG4gICAgZWFzZTogXCJlYXNlT3V0XCIsXHJcbiAgICAvLyByZXBlYXREZWxheTogMC41LFxyXG4gIH0sXHJcbiAgYmFja2dyb3VuZENvbG9yOiB7XHJcbiAgICBkdXJhdGlvbjogMC44LFxyXG4gICAgeW95bzogSW5maW5pdHksXHJcbiAgICBlYXNlOiBcImVhc2VPdXRcIixcclxuICAgIHJlcGVhdERlbGF5OiAwLjUsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IFNjYWxlVXBEb3duQ29tcG9uZW50ID0gKFxyXG4gIHtcclxuICAgIGJhY2tncm91bmRzID0gW1RFUlRJQVJZX0NPTE9SLCBTRUNPTkRBUllfQ09MT1JdLFxyXG4gICAgc2NhbGVUbyA9IDEsXHJcbiAgICBjaGlsZHJlbixcclxuICB9OiBQcm9wc1dpdGhDaGlsZHJlbjxQcm9wcz4sXHJcbikgPT4ge1xyXG4gIGxldCBhbmltYXRlOiBBbmltYXRpb25Qcm9wc1tcImFuaW1hdGVcIl0gPSB7XHJcbiAgICBzY2FsZTogWzAuOSwgc2NhbGVUb10sXHJcbiAgfTtcclxuICBpZiAoYmFja2dyb3VuZHMubGVuZ3RoID4gMCkge1xyXG4gICAgYW5pbWF0ZS5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kcztcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogMjAsIG1hcmdpbkJvdHRvbTogMjAsIGJvcmRlclJhZGl1czogNiB9fVxyXG4gICAgICB0cmFuc2l0aW9uPXtzY2FsZVRyYW5zaXRpb259XHJcbiAgICAgIGFuaW1hdGU9e2FuaW1hdGV9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2NhbGVVcERvd25Db21wb25lbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=