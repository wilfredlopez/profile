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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvU2NhbGVVcERvd25Db21wb25lbnQudHN4Il0sIm5hbWVzIjpbInNjYWxlVHJhbnNpdGlvbiIsInNjYWxlIiwiZHVyYXRpb24iLCJ5b3lvIiwiSW5maW5pdHkiLCJlYXNlIiwiYmFja2dyb3VuZENvbG9yIiwicmVwZWF0RGVsYXkiLCJTY2FsZVVwRG93bkNvbXBvbmVudCIsImJhY2tncm91bmRzIiwiVEVSVElBUllfQ09MT1IiLCJTRUNPTkRBUllfQ09MT1IiLCJzY2FsZVRvIiwiY2hpbGRyZW4iLCJhbmltYXRlIiwibGVuZ3RoIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBS0E7QUFDQTtBQWNBLE1BQU1BLGVBQWUsR0FBRztBQUN0QkMsT0FBSyxFQUFFO0FBQ0xDLFlBQVEsRUFBRSxHQURMO0FBRUxDLFFBQUksRUFBRUMsUUFGRDtBQUdMQyxRQUFJLEVBQUUsU0FIRCxDQUlMOztBQUpLLEdBRGU7QUFPdEJDLGlCQUFlLEVBQUU7QUFDZkosWUFBUSxFQUFFLEdBREs7QUFFZkMsUUFBSSxFQUFFQyxRQUZTO0FBR2ZDLFFBQUksRUFBRSxTQUhTO0FBSWZFLGVBQVcsRUFBRTtBQUpFO0FBUEssQ0FBeEI7O0FBZUEsTUFBTUMsb0JBQW9CLEdBQUcsQ0FDM0I7QUFDRUMsYUFBVyxHQUFHLENBQUNDLG9FQUFELEVBQWlCQyxxRUFBakIsQ0FEaEI7QUFFRUMsU0FBTyxHQUFHLENBRlo7QUFHRUM7QUFIRixDQUQyQixLQU14QjtBQUNILE1BQUlDLE9BQWtDLEdBQUc7QUFDdkNiLFNBQUssRUFBRSxDQUFDLEdBQUQsRUFBTVcsT0FBTjtBQURnQyxHQUF6Qzs7QUFHQSxNQUFJSCxXQUFXLENBQUNNLE1BQVosR0FBcUIsQ0FBekIsRUFBNEI7QUFDMUJELFdBQU8sQ0FBQ1IsZUFBUixHQUEwQkcsV0FBMUI7QUFDRDs7QUFDRCxTQUNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsU0FBSyxFQUFFO0FBQUVPLGVBQVMsRUFBRSxFQUFiO0FBQWlCQyxrQkFBWSxFQUFFLEVBQS9CO0FBQW1DQyxrQkFBWSxFQUFFO0FBQWpELEtBRFQ7QUFFRSxjQUFVLEVBQUVsQixlQUZkO0FBR0UsV0FBTyxFQUFFYyxPQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR0QsUUFMSCxDQURGO0FBU0QsQ0F0QkQ7O0tBQU1MLG9CO0FBd0JTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYmZlZWZiMjljNmVhNDQ0OGM3ZjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgUFJJTUFSWV9DT0xPUixcclxuICBTRUNPTkRBUllfQ09MT1IsXHJcbiAgVEVSVElBUllfQ09MT1IsXHJcbn0gZnJvbSBcIkByb290L3N0eWxlcy9nZXRUaGVtZVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25Qcm9wcywgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIC8qKlxyXG4gICAqIG51bWJlciB0byBzY2FsZSB1cCB0by4gZGVmYXVsdHMgdG8gMS4yXHJcbiAgICovXHJcbiAgc2NhbGVUbz86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBhIHR1cGxlIG9mIHN0cmluZ3Mgb2YgY29sb3JzLiBkZWZhdWx0cyB0byBbXCIjZmY2Njk5XCIsIFwiIzY2NjZmZlwiXVxyXG4gICAqIHBhc3MgYW4gZW1wdHkgYXJyYXkgdG8gZGlzYWJsZSB0aGUgZWZmZWN0XHJcbiAgICovXHJcbiAgYmFja2dyb3VuZHM/OiBbc3RyaW5nLCBzdHJpbmddO1xyXG59XHJcblxyXG5jb25zdCBzY2FsZVRyYW5zaXRpb24gPSB7XHJcbiAgc2NhbGU6IHtcclxuICAgIGR1cmF0aW9uOiAwLjgsXHJcbiAgICB5b3lvOiBJbmZpbml0eSxcclxuICAgIGVhc2U6IFwiZWFzZU91dFwiLFxyXG4gICAgLy8gcmVwZWF0RGVsYXk6IDAuNSxcclxuICB9LFxyXG4gIGJhY2tncm91bmRDb2xvcjoge1xyXG4gICAgZHVyYXRpb246IDAuOCxcclxuICAgIHlveW86IEluZmluaXR5LFxyXG4gICAgZWFzZTogXCJlYXNlT3V0XCIsXHJcbiAgICByZXBlYXREZWxheTogMC41LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBTY2FsZVVwRG93bkNvbXBvbmVudCA9IChcclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kcyA9IFtURVJUSUFSWV9DT0xPUiwgU0VDT05EQVJZX0NPTE9SXSxcclxuICAgIHNjYWxlVG8gPSAxLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgfTogUHJvcHNXaXRoQ2hpbGRyZW48UHJvcHM+LFxyXG4pID0+IHtcclxuICBsZXQgYW5pbWF0ZTogQW5pbWF0aW9uUHJvcHNbXCJhbmltYXRlXCJdID0ge1xyXG4gICAgc2NhbGU6IFswLjksIHNjYWxlVG9dLFxyXG4gIH07XHJcbiAgaWYgKGJhY2tncm91bmRzLmxlbmd0aCA+IDApIHtcclxuICAgIGFuaW1hdGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZHM7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwLCBtYXJnaW5Cb3R0b206IDIwLCBib3JkZXJSYWRpdXM6IDYgfX1cclxuICAgICAgdHJhbnNpdGlvbj17c2NhbGVUcmFuc2l0aW9ufVxyXG4gICAgICBhbmltYXRlPXthbmltYXRlfVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjYWxlVXBEb3duQ29tcG9uZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9