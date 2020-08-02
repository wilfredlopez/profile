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






const ProjectGrid = props => {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    py: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
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
      lineNumber: 12,
      columnNumber: 7
    }
  }, _projects_ProjectsArray__WEBPACK_IMPORTED_MODULE_4__["default"].map((proj, index) => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      key: `project-grid-${proj.name}-${index}`,
      item: true,
      xs: 12,
      sm: "auto",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 18
      }
    }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_0__["DividerElement"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, proj.name), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      mb: 1,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
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
        lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL1Byb2plY3RHcmlkLnRzeCJdLCJuYW1lcyI6WyJQcm9qZWN0R3JpZCIsInByb3BzIiwiUHJvamVjdHNBcnJheSIsIm1hcCIsInByb2oiLCJpbmRleCIsIm5hbWUiLCJ0aXRsZSIsImltYWdlcyIsImltZ1BhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLE1BQU1BLFdBQVcsR0FBSUMsS0FBRCxJQUFrQjtBQUNwQyxTQUNFLE1BQUMscURBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBNEIsZ0JBQVksRUFBQyxRQUF6QztBQUFrRCxXQUFPLEVBQUMsUUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQywrREFBYSxDQUFDQyxHQUFkLENBQWtCLENBQUNDLElBQUQsRUFBT0MsS0FBUCxLQUFpQjtBQUNsQyxXQUFPLE1BQUMsc0RBQUQ7QUFDTCxTQUFHLEVBQUcsZ0JBQWVELElBQUksQ0FBQ0UsSUFBSyxJQUFHRCxLQUFNLEVBRG5DO0FBRUwsVUFBSSxNQUZDO0FBR0wsUUFBRSxFQUFFLEVBSEM7QUFJTCxRQUFFLEVBQUMsTUFKRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTUwsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELElBQUksQ0FBQ0UsSUFEUixDQU5LLEVBU0wsTUFBQyxxREFBRDtBQUFLLFFBQUUsRUFBRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFUSyxFQVVMLE1BQUMsK0RBQUQ7QUFDRSxXQUFLLEVBQUVGLElBQUksQ0FBQ0csS0FEZDtBQUVFLFNBQUcsRUFBRUgsSUFBSSxDQUFDSSxNQUFMLENBQVksQ0FBWixFQUFlQyxPQUZ0QjtBQUdFLFdBQUssRUFBRSxHQUhUO0FBSUUsZUFBUyxFQUFFLEdBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVZLLENBQVA7QUFpQkQsR0FsQkEsQ0FESCxDQURGLENBREY7QUF5QkQsQ0ExQkQ7O0tBQU1ULFc7QUE0QlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kNzg0ODUyZmY4NzA4MjBlOTAwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGl2aWRlckVsZW1lbnQgfSBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEJveCwgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBJbWFnZUJ1dHRvbiB9IGZyb20gXCJAcm9vdC9zdHlsZXMvQ3VzdG9tXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2plY3RzQXJyYXkgZnJvbSBcIi4uL3Byb2plY3RzL1Byb2plY3RzQXJyYXlcIjtcclxuaW50ZXJmYWNlIFByb3BzIHtcclxufVxyXG5cclxuY29uc3QgUHJvamVjdEdyaWQgPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggcHk9ezJ9PlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gYWxpZ25Db250ZW50PVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgIHtQcm9qZWN0c0FycmF5Lm1hcCgocHJvaiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8R3JpZFxyXG4gICAgICAgICAgICBrZXk9e2Bwcm9qZWN0LWdyaWQtJHtwcm9qLm5hbWV9LSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgIHNtPVwiYXV0b1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyRWxlbWVudD5cclxuICAgICAgICAgICAgICB7cHJvai5uYW1lfVxyXG4gICAgICAgICAgICA8L0RpdmlkZXJFbGVtZW50PlxyXG4gICAgICAgICAgICA8Qm94IG1iPXsxfSAvPlxyXG4gICAgICAgICAgICA8SW1hZ2VCdXR0b25cclxuICAgICAgICAgICAgICB0aXRsZT17cHJvai50aXRsZX1cclxuICAgICAgICAgICAgICB1cmw9e3Byb2ouaW1hZ2VzWzBdLmltZ1BhdGh9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICBtaW5IZWlnaHQ9ezcwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD47XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0R3JpZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==