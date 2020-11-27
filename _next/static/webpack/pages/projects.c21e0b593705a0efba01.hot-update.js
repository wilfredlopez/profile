webpackHotUpdate_N_E("pages/projects",{

/***/ "./src/components/projects/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/projects/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_context_PagesContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @root/context/PagesContext */ "./src/context/PagesContext.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectsArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsArray */ "./src/components/projects/ProjectsArray.ts");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Project */ "./src/components/projects/Project.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "D:\\WEB_DEV\\Personal_Projects\\wilfredlopez\\src\\components\\projects\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import NpmPackages from "@components/npm-package/NpmPackages";






const Projects = ({
  loop = false,
  showSliderControls = true,
  limitTo,
  addMarginTop = true
}) => {
  _s();

  const {
    changePage
  } = Object(_root_context_PagesContext__WEBPACK_IMPORTED_MODULE_0__["usePagesContext"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    changePage('Featured');
  }, [changePage]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, limitTo ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Paper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, _ProjectsArray__WEBPACK_IMPORTED_MODULE_2__["default"].slice(0, limitTo).map(proj => __jsx(_Project__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: proj.title,
    loop: loop,
    showSliderControls: showSliderControls,
    classKey: proj.classKey,
    images: proj.images,
    url: proj.url,
    name: proj.name,
    title: proj.title,
    description: proj.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }))) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Paper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, _ProjectsArray__WEBPACK_IMPORTED_MODULE_2__["default"].map(proj => __jsx(_Project__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: proj.title,
    loop: loop,
    showSliderControls: showSliderControls,
    classKey: proj.classKey,
    images: proj.images,
    url: proj.url,
    name: proj.name,
    title: proj.title,
    description: proj.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }))));
};

_s(Projects, "nC1ZKDSBPqkPTRpzyOmjL3d7Meo=", false, function () {
  return [_root_context_PagesContext__WEBPACK_IMPORTED_MODULE_0__["usePagesContext"]];
});

_c = Projects;
/* harmony default export */ __webpack_exports__["default"] = (Projects);

var _c;

$RefreshReg$(_c, "Projects");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlByb2plY3RzIiwibG9vcCIsInNob3dTbGlkZXJDb250cm9scyIsImxpbWl0VG8iLCJhZGRNYXJnaW5Ub3AiLCJjaGFuZ2VQYWdlIiwidXNlUGFnZXNDb250ZXh0IiwidXNlRWZmZWN0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJQcm9qZWN0c0FycmF5Iiwic2xpY2UiLCJtYXAiLCJwcm9qIiwidGl0bGUiLCJjbGFzc0tleSIsImltYWdlcyIsInVybCIsIm5hbWUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVNBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQ2hCQyxNQUFJLEdBQUcsS0FEUztBQUVoQkMsb0JBQWtCLEdBQUcsSUFGTDtBQUdoQkMsU0FIZ0I7QUFJaEJDLGNBQVksR0FBRztBQUpDLENBQUQsS0FLSjtBQUFBOztBQUNYLFFBQU07QUFBRUM7QUFBRixNQUFpQkMsa0ZBQWUsRUFBdEM7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RGLGNBQVUsQ0FBQyxVQUFELENBQVY7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsVUFBRCxDQUZNLENBQVQ7QUFHQUUseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQjtBQUNkQyxTQUFHLEVBQUUsQ0FEUztBQUVkQyxVQUFJLEVBQUUsQ0FGUTtBQUdkQyxjQUFRLEVBQUU7QUFISSxLQUFoQjtBQUtELEdBTlEsRUFNTixFQU5NLENBQVQ7QUFPQSxTQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHR1QsT0FBTyxHQUNKLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDVSxzREFBYSxDQUFDQyxLQUFkLENBQW9CLENBQXBCLEVBQXVCWCxPQUF2QixFQUFnQ1ksR0FBaEMsQ0FBb0NDLElBQUksSUFDdkMsTUFBQyxnREFBRDtBQUNFLE9BQUcsRUFBRUEsSUFBSSxDQUFDQyxLQURaO0FBRUUsUUFBSSxFQUFFaEIsSUFGUjtBQUdFLHNCQUFrQixFQUFFQyxrQkFIdEI7QUFJRSxZQUFRLEVBQUVjLElBQUksQ0FBQ0UsUUFKakI7QUFLRSxVQUFNLEVBQUVGLElBQUksQ0FBQ0csTUFMZjtBQU1FLE9BQUcsRUFBRUgsSUFBSSxDQUFDSSxHQU5aO0FBT0UsUUFBSSxFQUFFSixJQUFJLENBQUNLLElBUGI7QUFRRSxTQUFLLEVBQUVMLElBQUksQ0FBQ0MsS0FSZDtBQVNFLGVBQVcsRUFBRUQsSUFBSSxDQUFDTSxXQVRwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxDQURJLEdBZUosTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFULHNEQUFhLENBQUNFLEdBQWQsQ0FBa0JDLElBQUksSUFDOUIsTUFBQyxnREFBRDtBQUNFLE9BQUcsRUFBRUEsSUFBSSxDQUFDQyxLQURaO0FBRUUsUUFBSSxFQUFFaEIsSUFGUjtBQUdFLHNCQUFrQixFQUFFQyxrQkFIdEI7QUFJRSxZQUFRLEVBQUVjLElBQUksQ0FBQ0UsUUFKakI7QUFLRSxVQUFNLEVBQUVGLElBQUksQ0FBQ0csTUFMZjtBQU1FLE9BQUcsRUFBRUgsSUFBSSxDQUFDSSxHQU5aO0FBT0UsUUFBSSxFQUFFSixJQUFJLENBQUNLLElBUGI7QUFRRSxTQUFLLEVBQUVMLElBQUksQ0FBQ0MsS0FSZDtBQVNFLGVBQVcsRUFBRUQsSUFBSSxDQUFDTSxXQVRwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFEsQ0FBUixDQWxCTixDQURGO0FBa0NELENBbkREOztHQUFNdEIsUTtVQU1tQk0sMEU7OztLQU5uQk4sUTtBQXFEU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMuYzIxZTBiNTkzNzA1YTBlZmJhMDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBOcG1QYWNrYWdlcyBmcm9tIFwiQGNvbXBvbmVudHMvbnBtLXBhY2thZ2UvTnBtUGFja2FnZXNcIjtcclxuaW1wb3J0IHsgdXNlUGFnZXNDb250ZXh0IH0gZnJvbSAnQHJvb3QvY29udGV4dC9QYWdlc0NvbnRleHQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb2plY3RzQXJyYXkgZnJvbSAnLi9Qcm9qZWN0c0FycmF5J1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnXHJcbmltcG9ydCB7IFBhcGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGxvb3A/OiBib29sZWFuXHJcbiAgc2hvd1NsaWRlckNvbnRyb2xzPzogYm9vbGVhblxyXG4gIGxpbWl0VG8/OiBudW1iZXJcclxuICBhZGRNYXJnaW5Ub3A/OiBib29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IFByb2plY3RzID0gKHtcclxuICBsb29wID0gZmFsc2UsXHJcbiAgc2hvd1NsaWRlckNvbnRyb2xzID0gdHJ1ZSxcclxuICBsaW1pdFRvLFxyXG4gIGFkZE1hcmdpblRvcCA9IHRydWUsXHJcbn06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGFuZ2VQYWdlIH0gPSB1c2VQYWdlc0NvbnRleHQoKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjaGFuZ2VQYWdlKCdGZWF0dXJlZCcpXHJcbiAgfSwgW2NoYW5nZVBhZ2VdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgIHsvKiB7YWRkTWFyZ2luVG9wICYmIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnNXJlbScgfX0gLz59ICovfVxyXG4gICAgICB7bGltaXRUb1xyXG4gICAgICAgID8gPFBhcGVyPlxyXG4gICAgICAgICAge1Byb2plY3RzQXJyYXkuc2xpY2UoMCwgbGltaXRUbykubWFwKHByb2ogPT4gKFxyXG4gICAgICAgICAgICA8UHJvamVjdFxyXG4gICAgICAgICAgICAgIGtleT17cHJvai50aXRsZX1cclxuICAgICAgICAgICAgICBsb29wPXtsb29wfVxyXG4gICAgICAgICAgICAgIHNob3dTbGlkZXJDb250cm9scz17c2hvd1NsaWRlckNvbnRyb2xzfVxyXG4gICAgICAgICAgICAgIGNsYXNzS2V5PXtwcm9qLmNsYXNzS2V5fVxyXG4gICAgICAgICAgICAgIGltYWdlcz17cHJvai5pbWFnZXN9XHJcbiAgICAgICAgICAgICAgdXJsPXtwcm9qLnVybH1cclxuICAgICAgICAgICAgICBuYW1lPXtwcm9qLm5hbWV9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3Byb2oudGl0bGV9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb2ouZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgID48L1Byb2plY3Q+XHJcbiAgICAgICAgICApKX08L1BhcGVyPlxyXG4gICAgICAgIDogPFBhcGVyPntQcm9qZWN0c0FycmF5Lm1hcChwcm9qID0+IChcclxuICAgICAgICAgIDxQcm9qZWN0XHJcbiAgICAgICAgICAgIGtleT17cHJvai50aXRsZX1cclxuICAgICAgICAgICAgbG9vcD17bG9vcH1cclxuICAgICAgICAgICAgc2hvd1NsaWRlckNvbnRyb2xzPXtzaG93U2xpZGVyQ29udHJvbHN9XHJcbiAgICAgICAgICAgIGNsYXNzS2V5PXtwcm9qLmNsYXNzS2V5fVxyXG4gICAgICAgICAgICBpbWFnZXM9e3Byb2ouaW1hZ2VzfVxyXG4gICAgICAgICAgICB1cmw9e3Byb2oudXJsfVxyXG4gICAgICAgICAgICBuYW1lPXtwcm9qLm5hbWV9XHJcbiAgICAgICAgICAgIHRpdGxlPXtwcm9qLnRpdGxlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvai5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgID48L1Byb2plY3Q+XHJcbiAgICAgICAgKSl9PC9QYXBlcj59XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==