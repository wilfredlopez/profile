webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/home/HomeProjectGrid.tsx":
/*!*************************************************!*\
  !*** ./src/components/home/HomeProjectGrid.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/shared */ "./src/components/shared/index.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _root_theme_Custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @root/theme/Custom */ "./src/theme/Custom.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _projects_ProjectsArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects/ProjectsArray */ "./src/components/projects/ProjectsArray.ts");
var _jsxFileName = "D:\\WEB_DEV\\Personal_Projects\\wilfredlopez\\src\\components\\home\\HomeProjectGrid.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






// const PArray = ProjectsArray.slice(0, 2);
const HomeProjectGrid = ({
  limit
}) => {
  const PArray = limit ? _projects_ProjectsArray__WEBPACK_IMPORTED_MODULE_4__["default"].slice(0, limit) : _projects_ProjectsArray__WEBPACK_IMPORTED_MODULE_4__["default"];
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    py: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
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
      lineNumber: 17,
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
        lineNumber: 21,
        columnNumber: 18
      }
    }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_0__["DividerElement"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, proj.name), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      mb: 1,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }), __jsx(_root_theme_Custom__WEBPACK_IMPORTED_MODULE_2__["ImageButton"], {
      linkUrl: proj.url,
      title: proj.title,
      backgroundUrl: proj.images[0].imgPath,
      width: 500,
      minHeight: 700,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }));
  })));
};

_c = HomeProjectGrid;
/* harmony default export */ __webpack_exports__["default"] = (HomeProjectGrid);

var _c;

$RefreshReg$(_c, "HomeProjectGrid");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Ib21lUHJvamVjdEdyaWQudHN4Il0sIm5hbWVzIjpbIkhvbWVQcm9qZWN0R3JpZCIsImxpbWl0IiwiUEFycmF5IiwiUHJvamVjdHNBcnJheSIsInNsaWNlIiwibWFwIiwicHJvaiIsImluZGV4IiwibmFtZSIsInVybCIsInRpdGxlIiwiaW1hZ2VzIiwiaW1nUGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUE7QUFFQSxNQUFNQSxlQUFlLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBc0I7QUFDNUMsUUFBTUMsTUFBTSxHQUFHRCxLQUFLLEdBQUdFLCtEQUFhLENBQUNDLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUJILEtBQXZCLENBQUgsR0FBbUNFLCtEQUF2RDtBQUNBLFNBQ0UsTUFBQyxxREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBRUUsYUFBUyxNQUZYO0FBRVksV0FBTyxFQUFFLENBRnJCO0FBRXdCLGdCQUFZLEVBQUMsUUFGckM7QUFFOEMsV0FBTyxFQUFDLFFBRnREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHR0QsTUFBTSxDQUFDRyxHQUFQLENBQVcsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWlCO0FBQzNCLFdBQU8sTUFBQyxzREFBRDtBQUNMLFNBQUcsRUFBRyxnQkFBZUQsSUFBSSxDQUFDRSxJQUFLLElBQUdELEtBQU0sRUFEbkM7QUFFTCxVQUFJLE1BRkM7QUFHTCxRQUFFLEVBQUUsRUFIQztBQUlMLFFBQUUsRUFBQyxNQUpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FNTCxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0QsSUFBSSxDQUFDRSxJQURSLENBTkssRUFTTCxNQUFDLHFEQUFEO0FBQUssUUFBRSxFQUFFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVRLLEVBVUwsTUFBQyw4REFBRDtBQUNFLGFBQU8sRUFBRUYsSUFBSSxDQUFDRyxHQURoQjtBQUVFLFdBQUssRUFBRUgsSUFBSSxDQUFDSSxLQUZkO0FBR0UsbUJBQWEsRUFBRUosSUFBSSxDQUFDSyxNQUFMLENBQVksQ0FBWixFQUFlQyxPQUhoQztBQUlFLFdBQUssRUFBRSxHQUpUO0FBS0UsZUFBUyxFQUFFLEdBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVZLLENBQVA7QUFrQkQsR0FuQkEsQ0FISCxDQURGLENBREY7QUE0QkQsQ0E5QkQ7O0tBQU1aLGU7QUFnQ1NBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVjOTZjMGM3MjRiM2RhZjQ1MDI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXZpZGVyRWxlbWVudCB9IGZyb20gXCJAY29tcG9uZW50cy9zaGFyZWRcIlxyXG5pbXBvcnQgeyBCb3gsIEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgeyBJbWFnZUJ1dHRvbiB9IGZyb20gXCJAcm9vdC90aGVtZS9DdXN0b21cIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFByb2plY3RzQXJyYXkgZnJvbSBcIi4uL3Byb2plY3RzL1Byb2plY3RzQXJyYXlcIlxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBsaW1pdD86IG51bWJlclxyXG59XHJcblxyXG4vLyBjb25zdCBQQXJyYXkgPSBQcm9qZWN0c0FycmF5LnNsaWNlKDAsIDIpO1xyXG5cclxuY29uc3QgSG9tZVByb2plY3RHcmlkID0gKHsgbGltaXQgfTogUHJvcHMpID0+IHtcclxuICBjb25zdCBQQXJyYXkgPSBsaW1pdCA/IFByb2plY3RzQXJyYXkuc2xpY2UoMCwgbGltaXQpIDogUHJvamVjdHNBcnJheVxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHB5PXsyfT5cclxuICAgICAgPEdyaWRcclxuXHJcbiAgICAgICAgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGFsaWduQ29udGVudD1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICB7UEFycmF5Lm1hcCgocHJvaiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8R3JpZFxyXG4gICAgICAgICAgICBrZXk9e2Bwcm9qZWN0LWdyaWQtJHtwcm9qLm5hbWV9LSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgIHNtPVwiYXV0b1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyRWxlbWVudD5cclxuICAgICAgICAgICAgICB7cHJvai5uYW1lfVxyXG4gICAgICAgICAgICA8L0RpdmlkZXJFbGVtZW50PlxyXG4gICAgICAgICAgICA8Qm94IG1iPXsxfSAvPlxyXG4gICAgICAgICAgICA8SW1hZ2VCdXR0b25cclxuICAgICAgICAgICAgICBsaW5rVXJsPXtwcm9qLnVybH1cclxuICAgICAgICAgICAgICB0aXRsZT17cHJvai50aXRsZX1cclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kVXJsPXtwcm9qLmltYWdlc1swXS5pbWdQYXRofVxyXG4gICAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgbWluSGVpZ2h0PXs3MDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVByb2plY3RHcmlkXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=