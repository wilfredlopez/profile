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
  }, _projects_ProjectsArray__WEBPACK_IMPORTED_MODULE_4__["default"].map(proj => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
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
        lineNumber: 15,
        columnNumber: 13
      }
    }, proj.name), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      mb: 1,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
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
        lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL1Byb2plY3RHcmlkLnRzeCJdLCJuYW1lcyI6WyJQcm9qZWN0R3JpZCIsInByb3BzIiwiUHJvamVjdHNBcnJheSIsIm1hcCIsInByb2oiLCJuYW1lIiwidGl0bGUiLCJpbWFnZXMiLCJpbWdQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxNQUFNQSxXQUFXLEdBQUlDLEtBQUQsSUFBa0I7QUFDcEMsU0FDRSxNQUFDLHFEQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQTRCLGdCQUFZLEVBQUMsUUFBekM7QUFBa0QsV0FBTyxFQUFDLFFBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsK0RBQWEsQ0FBQ0MsR0FBZCxDQUFtQkMsSUFBRCxJQUFVO0FBQzNCLFdBQU8sTUFBQyxzREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxFQUFmO0FBQW1CLFFBQUUsRUFBQyxNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0wsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dBLElBQUksQ0FBQ0MsSUFEUixDQURLLEVBSUwsTUFBQyxxREFBRDtBQUFLLFFBQUUsRUFBRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKSyxFQUtMLE1BQUMsK0RBQUQ7QUFDRSxXQUFLLEVBQUVELElBQUksQ0FBQ0UsS0FEZDtBQUVFLFNBQUcsRUFBRUYsSUFBSSxDQUFDRyxNQUFMLENBQVksQ0FBWixFQUFlQyxPQUZ0QjtBQUdFLFdBQUssRUFBRSxHQUhUO0FBSUUsZUFBUyxFQUFFLEdBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxLLENBQVA7QUFZRCxHQWJBLENBREgsQ0FERixDQURGO0FBb0JELENBckJEOztLQUFNUixXO0FBdUJTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuM2M0MmE1MTQ2YmQxMjBjYTQxOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpdmlkZXJFbGVtZW50IH0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBCb3gsIEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgSW1hZ2VCdXR0b24gfSBmcm9tIFwiQHJvb3Qvc3R5bGVzL0N1c3RvbVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9qZWN0c0FycmF5IGZyb20gXCIuLi9wcm9qZWN0cy9Qcm9qZWN0c0FycmF5XCI7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbn1cclxuXHJcbmNvbnN0IFByb2plY3RHcmlkID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHB5PXsyfT5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGFsaWduQ29udGVudD1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICB7UHJvamVjdHNBcnJheS5tYXAoKHByb2opID0+IHtcclxuICAgICAgICAgIHJldHVybiA8R3JpZCBpdGVtIHhzPXsxMn0gc209XCJhdXRvXCI+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyRWxlbWVudD5cclxuICAgICAgICAgICAgICB7cHJvai5uYW1lfVxyXG4gICAgICAgICAgICA8L0RpdmlkZXJFbGVtZW50PlxyXG4gICAgICAgICAgICA8Qm94IG1iPXsxfSAvPlxyXG4gICAgICAgICAgICA8SW1hZ2VCdXR0b25cclxuICAgICAgICAgICAgICB0aXRsZT17cHJvai50aXRsZX1cclxuICAgICAgICAgICAgICB1cmw9e3Byb2ouaW1hZ2VzWzBdLmltZ1BhdGh9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICBtaW5IZWlnaHQ9ezcwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD47XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0R3JpZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==