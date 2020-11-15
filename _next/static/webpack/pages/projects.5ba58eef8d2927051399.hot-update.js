webpackHotUpdate_N_E("pages/projects",{

/***/ "./src/pages/projects.tsx":
/*!********************************!*\
  !*** ./src/pages/projects.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_projects_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/projects/index */ "./src/components/projects/index.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PageWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/PageWrapper */ "./src/components/PageWrapper.tsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _root_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @root/animation */ "./src/animation/index.ts");
/* harmony import */ var _components_npm_package_NpmPackages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/npm-package/NpmPackages */ "./src/components/npm-package/NpmPackages.tsx");
var _jsxFileName = "D:\\WEB_DEV\\Personal_Projects\\wilfredlopez\\src\\pages\\projects.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import Projects from "@components/pages/Projects";








// import SliderCard from "@components/shared/SliderCard";
// import { PROJECT_IMAGES } from "@components/pages/constants/projectImages";
// const allImages = [
//   ...PROJECT_IMAGES.ExpenseManger,
//   ...PROJECT_IMAGES.retailMeNow,
//   ...PROJECT_IMAGES.vapeMusic,
// ];
const projects = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    initial: "initial",
    animate: "animate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("title", {
    key: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Showcase Projects | Wilfred Lopez"), __jsx("link", {
    rel: "canonical",
    href: "https://wilfredlopez.net/projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    variants: {
      animate: {
        transition: {
          staggerChildren: 0.1
        }
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_components_PageWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    variants: _root_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(_components_projects_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }), __jsx(_components_npm_package_NpmPackages__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (projects);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3RzLnRzeCJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwiZmFkZUluVXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUNyQixTQUNFLG1FQUNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksV0FBTyxFQUFDLFNBQXBCO0FBQThCLFdBQU8sRUFBQyxTQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxPQUFHLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsV0FBVjtBQUFzQixRQUFJLEVBQUMsbUNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0UsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxZQUFRLEVBQUU7QUFDUkMsYUFBTyxFQUFFO0FBQ1BDLGtCQUFVLEVBQUU7QUFDVkMseUJBQWUsRUFBRTtBQURQO0FBREw7QUFERCxLQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLFlBQVEsRUFBRUMsd0RBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBRkYsQ0FURixDQUxGLENBREYsQ0FERjtBQWdDRCxDQWpDRDs7QUFtQ2VKLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzLjViYTU4ZWVmOGQyOTI3MDUxMzk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuLy8gaW1wb3J0IFByb2plY3RzIGZyb20gXCJAY29tcG9uZW50cy9wYWdlcy9Qcm9qZWN0c1wiO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIkBjb21wb25lbnRzL3Byb2plY3RzL2luZGV4XCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tIFwiQGNvbXBvbmVudHMvUGFnZVdyYXBwZXJcIlxyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcbmltcG9ydCB7IGZhZGVJblVwIH0gZnJvbSBcIkByb290L2FuaW1hdGlvblwiXHJcbmltcG9ydCBOcG1QYWNrYWdlcyBmcm9tIFwiQGNvbXBvbmVudHMvbnBtLXBhY2thZ2UvTnBtUGFja2FnZXNcIlxyXG5pbXBvcnQgeyBQYXBlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuLy8gaW1wb3J0IFNsaWRlckNhcmQgZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZC9TbGlkZXJDYXJkXCI7XHJcbi8vIGltcG9ydCB7IFBST0pFQ1RfSU1BR0VTIH0gZnJvbSBcIkBjb21wb25lbnRzL3BhZ2VzL2NvbnN0YW50cy9wcm9qZWN0SW1hZ2VzXCI7XHJcblxyXG4vLyBjb25zdCBhbGxJbWFnZXMgPSBbXHJcbi8vICAgLi4uUFJPSkVDVF9JTUFHRVMuRXhwZW5zZU1hbmdlcixcclxuLy8gICAuLi5QUk9KRUNUX0lNQUdFUy5yZXRhaWxNZU5vdyxcclxuLy8gICAuLi5QUk9KRUNUX0lNQUdFUy52YXBlTXVzaWMsXHJcbi8vIF07XHJcblxyXG5jb25zdCBwcm9qZWN0cyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG1vdGlvbi5kaXYgaW5pdGlhbD1cImluaXRpYWxcIiBhbmltYXRlPVwiYW5pbWF0ZVwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlIGtleT1cInRpdGxlXCI+U2hvd2Nhc2UgUHJvamVjdHMgfCBXaWxmcmVkIExvcGV6PC90aXRsZT5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL3dpbGZyZWRsb3Blei5uZXQvcHJvamVjdHNcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgdmFyaWFudHM9e3tcclxuICAgICAgICAgICAgYW5pbWF0ZToge1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4xLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQYWdlV3JhcHBlcj5cclxuXHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtmYWRlSW5VcH0+XHJcbiAgICAgICAgICAgICAgPFByb2plY3RzIC8+XHJcbiAgICAgICAgICAgICAgPE5wbVBhY2thZ2VzIC8+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgey8qIDxTbGlkZXJDYXJkXHJcbiAgICAgICAgICBpbWFnZURhdGE9e2FsbEltYWdlc31cclxuICAgICAgICAgIHNob3dDb250cm9scz17ZmFsc2V9XHJcbiAgICAgICAgICBsb29wXHJcbiAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICA8L1BhZ2VXcmFwcGVyPlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0c1xyXG4iXSwic291cmNlUm9vdCI6IiJ9