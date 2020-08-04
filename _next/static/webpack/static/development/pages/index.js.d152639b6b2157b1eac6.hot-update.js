webpackHotUpdate("static\\development\\pages\\index.js",{

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
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\home\\HomeProjectGrid.tsx";
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
        lineNumber: 19,
        columnNumber: 18
      }
    }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_0__["DividerElement"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, proj.name), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      mb: 1,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
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
        lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL0hvbWVQcm9qZWN0R3JpZC50c3giXSwibmFtZXMiOlsiSG9tZVByb2plY3RHcmlkIiwibGltaXQiLCJQQXJyYXkiLCJQcm9qZWN0c0FycmF5Iiwic2xpY2UiLCJtYXAiLCJwcm9qIiwiaW5kZXgiLCJuYW1lIiwidXJsIiwidGl0bGUiLCJpbWFnZXMiLCJpbWdQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQTtBQUVBLE1BQU1BLGVBQWUsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFzQjtBQUM1QyxRQUFNQyxNQUFNLEdBQUdELEtBQUssR0FBR0UsK0RBQWEsQ0FBQ0MsS0FBZCxDQUFvQixDQUFwQixFQUF1QkgsS0FBdkIsQ0FBSCxHQUFtQ0UsK0RBQXZEO0FBQ0EsU0FDRSxNQUFDLHFEQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQTRCLGdCQUFZLEVBQUMsUUFBekM7QUFBa0QsV0FBTyxFQUFDLFFBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsTUFBTSxDQUFDRyxHQUFQLENBQVcsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWlCO0FBQzNCLFdBQU8sTUFBQyxzREFBRDtBQUNMLFNBQUcsRUFBRyxnQkFBZUQsSUFBSSxDQUFDRSxJQUFLLElBQUdELEtBQU0sRUFEbkM7QUFFTCxVQUFJLE1BRkM7QUFHTCxRQUFFLEVBQUUsRUFIQztBQUlMLFFBQUUsRUFBQyxNQUpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FNTCxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0QsSUFBSSxDQUFDRSxJQURSLENBTkssRUFTTCxNQUFDLHFEQUFEO0FBQUssUUFBRSxFQUFFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVRLLEVBVUwsTUFBQyw4REFBRDtBQUNFLGFBQU8sRUFBRUYsSUFBSSxDQUFDRyxHQURoQjtBQUVFLFdBQUssRUFBRUgsSUFBSSxDQUFDSSxLQUZkO0FBR0UsbUJBQWEsRUFBRUosSUFBSSxDQUFDSyxNQUFMLENBQVksQ0FBWixFQUFlQyxPQUhoQztBQUlFLFdBQUssRUFBRSxHQUpUO0FBS0UsZUFBUyxFQUFFLEdBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVZLLENBQVA7QUFrQkQsR0FuQkEsQ0FESCxDQURGLENBREY7QUEwQkQsQ0E1QkQ7O0tBQU1aLGU7QUE4QlNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kMTUyNjM5YjZiMjE1N2IxZWFjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGl2aWRlckVsZW1lbnQgfSBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEJveCwgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBJbWFnZUJ1dHRvbiB9IGZyb20gXCJAcm9vdC90aGVtZS9DdXN0b21cIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvamVjdHNBcnJheSBmcm9tIFwiLi4vcHJvamVjdHMvUHJvamVjdHNBcnJheVwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBsaW1pdD86IG51bWJlcjtcclxufVxyXG5cclxuLy8gY29uc3QgUEFycmF5ID0gUHJvamVjdHNBcnJheS5zbGljZSgwLCAyKTtcclxuXHJcbmNvbnN0IEhvbWVQcm9qZWN0R3JpZCA9ICh7IGxpbWl0IH06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgUEFycmF5ID0gbGltaXQgPyBQcm9qZWN0c0FycmF5LnNsaWNlKDAsIGxpbWl0KSA6IFByb2plY3RzQXJyYXk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggcHk9ezJ9PlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gYWxpZ25Db250ZW50PVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgIHtQQXJyYXkubWFwKChwcm9qLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxHcmlkXHJcbiAgICAgICAgICAgIGtleT17YHByb2plY3QtZ3JpZC0ke3Byb2oubmFtZX0tJHtpbmRleH1gfVxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgc209XCJhdXRvXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPERpdmlkZXJFbGVtZW50PlxyXG4gICAgICAgICAgICAgIHtwcm9qLm5hbWV9XHJcbiAgICAgICAgICAgIDwvRGl2aWRlckVsZW1lbnQ+XHJcbiAgICAgICAgICAgIDxCb3ggbWI9ezF9IC8+XHJcbiAgICAgICAgICAgIDxJbWFnZUJ1dHRvblxyXG4gICAgICAgICAgICAgIGxpbmtVcmw9e3Byb2oudXJsfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtwcm9qLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRVcmw9e3Byb2ouaW1hZ2VzWzBdLmltZ1BhdGh9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICBtaW5IZWlnaHQ9ezcwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD47XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUHJvamVjdEdyaWQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=