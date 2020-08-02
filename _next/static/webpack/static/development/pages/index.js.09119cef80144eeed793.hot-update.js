webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/home/ProjectGrid.tsx":
/*!*********************************************!*\
  !*** ./src/components/home/ProjectGrid.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/shared */ "./src/components/shared/index.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _root_styles_Custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @root/styles/Custom */ "./src/styles/Custom.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _projects_ProjectsArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects/ProjectsArray */ "./src/components/projects/ProjectsArray.ts");
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\home\\ProjectGrid.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





// const PArray = ProjectsArray.slice(0, 2);
const PArray = _projects_ProjectsArray__WEBPACK_IMPORTED_MODULE_4__["default"];

const ProjectGrid = props => {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    py: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    alignContent: "center",
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, PArray.map((proj, index) => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      key: `project-grid-${proj.name}-${index}`,
      item: true,
      xs: 12,
      sm: "auto",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 18
      }
    }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_0__["DividerElement"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, proj.name), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      mb: 1,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }), __jsx(_root_styles_Custom__WEBPACK_IMPORTED_MODULE_2__["ImageButton"], {
      title: proj.title,
      url: proj.images[0].imgPath,
      width: 500,
      minHeight: 700,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }));
  })));
};

_c = ProjectGrid;
/* harmony default export */ __webpack_exports__["default"] = (ProjectGrid);

var _c;

$RefreshReg$(_c, "ProjectGrid");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL1Byb2plY3RHcmlkLnRzeCJdLCJuYW1lcyI6WyJQQXJyYXkiLCJQcm9qZWN0c0FycmF5IiwiUHJvamVjdEdyaWQiLCJwcm9wcyIsIm1hcCIsInByb2oiLCJpbmRleCIsIm5hbWUiLCJ0aXRsZSIsImltYWdlcyIsImltZ1BhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQSxNQUFNQSxNQUFNLEdBQUdDLCtEQUFmOztBQUVBLE1BQU1DLFdBQVcsR0FBSUMsS0FBRCxJQUFrQjtBQUNwQyxTQUNFLE1BQUMscURBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBNEIsZ0JBQVksRUFBQyxRQUF6QztBQUFrRCxXQUFPLEVBQUMsUUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxNQUFNLENBQUNJLEdBQVAsQ0FBVyxDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FBaUI7QUFDM0IsV0FBTyxNQUFDLHNEQUFEO0FBQ0wsU0FBRyxFQUFHLGdCQUFlRCxJQUFJLENBQUNFLElBQUssSUFBR0QsS0FBTSxFQURuQztBQUVMLFVBQUksTUFGQztBQUdMLFFBQUUsRUFBRSxFQUhDO0FBSUwsUUFBRSxFQUFDLE1BSkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1MLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxJQUFJLENBQUNFLElBRFIsQ0FOSyxFQVNMLE1BQUMscURBQUQ7QUFBSyxRQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVEssRUFVTCxNQUFDLCtEQUFEO0FBQ0UsV0FBSyxFQUFFRixJQUFJLENBQUNHLEtBRGQ7QUFFRSxTQUFHLEVBQUVILElBQUksQ0FBQ0ksTUFBTCxDQUFZLENBQVosRUFBZUMsT0FGdEI7QUFHRSxXQUFLLEVBQUUsR0FIVDtBQUlFLGVBQVMsRUFBRSxHQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFWSyxDQUFQO0FBaUJELEdBbEJBLENBREgsQ0FERixDQURGO0FBeUJELENBMUJEOztLQUFNUixXO0FBNEJTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMDkxMTljZWY4MDE0NGVlZWQ3OTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpdmlkZXJFbGVtZW50IH0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBCb3gsIEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgSW1hZ2VCdXR0b24gfSBmcm9tIFwiQHJvb3Qvc3R5bGVzL0N1c3RvbVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9qZWN0c0FycmF5IGZyb20gXCIuLi9wcm9qZWN0cy9Qcm9qZWN0c0FycmF5XCI7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbn1cclxuXHJcbi8vIGNvbnN0IFBBcnJheSA9IFByb2plY3RzQXJyYXkuc2xpY2UoMCwgMik7XHJcbmNvbnN0IFBBcnJheSA9IFByb2plY3RzQXJyYXk7XHJcblxyXG5jb25zdCBQcm9qZWN0R3JpZCA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBweT17Mn0+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAge1BBcnJheS5tYXAoKHByb2osIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPEdyaWRcclxuICAgICAgICAgICAga2V5PXtgcHJvamVjdC1ncmlkLSR7cHJvai5uYW1lfS0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICBzbT1cImF1dG9cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RGl2aWRlckVsZW1lbnQ+XHJcbiAgICAgICAgICAgICAge3Byb2oubmFtZX1cclxuICAgICAgICAgICAgPC9EaXZpZGVyRWxlbWVudD5cclxuICAgICAgICAgICAgPEJveCBtYj17MX0gLz5cclxuICAgICAgICAgICAgPEltYWdlQnV0dG9uXHJcbiAgICAgICAgICAgICAgdGl0bGU9e3Byb2oudGl0bGV9XHJcbiAgICAgICAgICAgICAgdXJsPXtwcm9qLmltYWdlc1swXS5pbWdQYXRofVxyXG4gICAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgbWluSGVpZ2h0PXs3MDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdEdyaWQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=