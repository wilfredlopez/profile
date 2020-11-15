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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
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
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    variants: _root_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx(_components_projects_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), __jsx(_components_npm_package_NpmPackages__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  })))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3RzLnRzeCJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwiZmFkZUluVXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFDckIsU0FDRSxtRUFDRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLFdBQU8sRUFBQyxTQUFwQjtBQUE4QixXQUFPLEVBQUMsU0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sT0FBRyxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FERixFQUVFO0FBQU0sT0FBRyxFQUFDLFdBQVY7QUFBc0IsUUFBSSxFQUFDLG1DQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsWUFBUSxFQUFFO0FBQ1JDLGFBQU8sRUFBRTtBQUNQQyxrQkFBVSxFQUFFO0FBQ1ZDLHlCQUFlLEVBQUU7QUFEUDtBQURMO0FBREQsS0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxZQUFRLEVBQUVDLHdEQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUZGLENBREYsQ0FURixDQUxGLENBREYsQ0FERjtBQWtDRCxDQW5DRDs7QUFxQ2VKLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzLmE0ODI1YjY0NzBjZTNhNGZhZTdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuLy8gaW1wb3J0IFByb2plY3RzIGZyb20gXCJAY29tcG9uZW50cy9wYWdlcy9Qcm9qZWN0c1wiO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIkBjb21wb25lbnRzL3Byb2plY3RzL2luZGV4XCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tIFwiQGNvbXBvbmVudHMvUGFnZVdyYXBwZXJcIlxyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcbmltcG9ydCB7IGZhZGVJblVwIH0gZnJvbSBcIkByb290L2FuaW1hdGlvblwiXHJcbmltcG9ydCBOcG1QYWNrYWdlcyBmcm9tIFwiQGNvbXBvbmVudHMvbnBtLXBhY2thZ2UvTnBtUGFja2FnZXNcIlxyXG5pbXBvcnQgeyBQYXBlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuLy8gaW1wb3J0IFNsaWRlckNhcmQgZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZC9TbGlkZXJDYXJkXCI7XHJcbi8vIGltcG9ydCB7IFBST0pFQ1RfSU1BR0VTIH0gZnJvbSBcIkBjb21wb25lbnRzL3BhZ2VzL2NvbnN0YW50cy9wcm9qZWN0SW1hZ2VzXCI7XHJcblxyXG4vLyBjb25zdCBhbGxJbWFnZXMgPSBbXHJcbi8vICAgLi4uUFJPSkVDVF9JTUFHRVMuRXhwZW5zZU1hbmdlcixcclxuLy8gICAuLi5QUk9KRUNUX0lNQUdFUy5yZXRhaWxNZU5vdyxcclxuLy8gICAuLi5QUk9KRUNUX0lNQUdFUy52YXBlTXVzaWMsXHJcbi8vIF07XHJcblxyXG5jb25zdCBwcm9qZWN0cyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG1vdGlvbi5kaXYgaW5pdGlhbD1cImluaXRpYWxcIiBhbmltYXRlPVwiYW5pbWF0ZVwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlIGtleT1cInRpdGxlXCI+U2hvd2Nhc2UgUHJvamVjdHMgfCBXaWxmcmVkIExvcGV6PC90aXRsZT5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL3dpbGZyZWRsb3Blei5uZXQvcHJvamVjdHNcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgdmFyaWFudHM9e3tcclxuICAgICAgICAgICAgYW5pbWF0ZToge1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4xLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQYWdlV3JhcHBlcj5cclxuICAgICAgICAgICAgPFBhcGVyPlxyXG5cclxuICAgICAgICAgICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17ZmFkZUluVXB9PlxyXG4gICAgICAgICAgICAgICAgPFByb2plY3RzIC8+XHJcbiAgICAgICAgICAgICAgICA8TnBtUGFja2FnZXMgLz5cclxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIHsvKiA8U2xpZGVyQ2FyZFxyXG4gICAgICAgICAgaW1hZ2VEYXRhPXthbGxJbWFnZXN9XHJcbiAgICAgICAgICBzaG93Q29udHJvbHM9e2ZhbHNlfVxyXG4gICAgICAgICAgbG9vcFxyXG4gICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgPC9QYWdlV3JhcHBlcj5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==