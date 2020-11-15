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
    changePage('Showcase');
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
  }, addMarginTop && __jsx("div", {
    style: {
      marginTop: '5rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 24
    }
  }), limitTo ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Paper"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlByb2plY3RzIiwibG9vcCIsInNob3dTbGlkZXJDb250cm9scyIsImxpbWl0VG8iLCJhZGRNYXJnaW5Ub3AiLCJjaGFuZ2VQYWdlIiwidXNlUGFnZXNDb250ZXh0IiwidXNlRWZmZWN0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJtYXJnaW5Ub3AiLCJQcm9qZWN0c0FycmF5Iiwic2xpY2UiLCJtYXAiLCJwcm9qIiwidGl0bGUiLCJjbGFzc0tleSIsImltYWdlcyIsInVybCIsIm5hbWUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVNBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQ2hCQyxNQUFJLEdBQUcsS0FEUztBQUVoQkMsb0JBQWtCLEdBQUcsSUFGTDtBQUdoQkMsU0FIZ0I7QUFJaEJDLGNBQVksR0FBRztBQUpDLENBQUQsS0FLSjtBQUFBOztBQUNYLFFBQU07QUFBRUM7QUFBRixNQUFpQkMsa0ZBQWUsRUFBdEM7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RGLGNBQVUsQ0FBQyxVQUFELENBQVY7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsVUFBRCxDQUZNLENBQVQ7QUFHQUUseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQjtBQUNkQyxTQUFHLEVBQUUsQ0FEUztBQUVkQyxVQUFJLEVBQUUsQ0FGUTtBQUdkQyxjQUFRLEVBQUU7QUFISSxLQUFoQjtBQUtELEdBTlEsRUFNTixFQU5NLENBQVQ7QUFPQSxTQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFR1IsWUFBWSxJQUFJO0FBQUssU0FBSyxFQUFFO0FBQUVTLGVBQVMsRUFBRTtBQUFiLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZuQixFQUdHVixPQUFPLEdBQ0osTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NXLHNEQUFhLENBQUNDLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUJaLE9BQXZCLEVBQWdDYSxHQUFoQyxDQUFvQ0MsSUFBSSxJQUN2QyxNQUFDLGdEQUFEO0FBQ0UsT0FBRyxFQUFFQSxJQUFJLENBQUNDLEtBRFo7QUFFRSxRQUFJLEVBQUVqQixJQUZSO0FBR0Usc0JBQWtCLEVBQUVDLGtCQUh0QjtBQUlFLFlBQVEsRUFBRWUsSUFBSSxDQUFDRSxRQUpqQjtBQUtFLFVBQU0sRUFBRUYsSUFBSSxDQUFDRyxNQUxmO0FBTUUsT0FBRyxFQUFFSCxJQUFJLENBQUNJLEdBTlo7QUFPRSxRQUFJLEVBQUVKLElBQUksQ0FBQ0ssSUFQYjtBQVFFLFNBQUssRUFBRUwsSUFBSSxDQUFDQyxLQVJkO0FBU0UsZUFBVyxFQUFFRCxJQUFJLENBQUNNLFdBVHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELENBREksR0FlSixNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUVQsc0RBQWEsQ0FBQ0UsR0FBZCxDQUFrQkMsSUFBSSxJQUM5QixNQUFDLGdEQUFEO0FBQ0UsT0FBRyxFQUFFQSxJQUFJLENBQUNDLEtBRFo7QUFFRSxRQUFJLEVBQUVqQixJQUZSO0FBR0Usc0JBQWtCLEVBQUVDLGtCQUh0QjtBQUlFLFlBQVEsRUFBRWUsSUFBSSxDQUFDRSxRQUpqQjtBQUtFLFVBQU0sRUFBRUYsSUFBSSxDQUFDRyxNQUxmO0FBTUUsT0FBRyxFQUFFSCxJQUFJLENBQUNJLEdBTlo7QUFPRSxRQUFJLEVBQUVKLElBQUksQ0FBQ0ssSUFQYjtBQVFFLFNBQUssRUFBRUwsSUFBSSxDQUFDQyxLQVJkO0FBU0UsZUFBVyxFQUFFRCxJQUFJLENBQUNNLFdBVHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEUSxDQUFSLENBbEJOLENBREY7QUFrQ0QsQ0FuREQ7O0dBQU12QixRO1VBTW1CTSwwRTs7O0tBTm5CTixRO0FBcURTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy5iYTgzMjAyMGY3ZjAxOWY2MDg0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IE5wbVBhY2thZ2VzIGZyb20gXCJAY29tcG9uZW50cy9ucG0tcGFja2FnZS9OcG1QYWNrYWdlc1wiO1xyXG5pbXBvcnQgeyB1c2VQYWdlc0NvbnRleHQgfSBmcm9tICdAcm9vdC9jb250ZXh0L1BhZ2VzQ29udGV4dCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvamVjdHNBcnJheSBmcm9tICcuL1Byb2plY3RzQXJyYXknXHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCdcclxuaW1wb3J0IHsgUGFwZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgbG9vcD86IGJvb2xlYW5cclxuICBzaG93U2xpZGVyQ29udHJvbHM/OiBib29sZWFuXHJcbiAgbGltaXRUbz86IG51bWJlclxyXG4gIGFkZE1hcmdpblRvcD86IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgUHJvamVjdHMgPSAoe1xyXG4gIGxvb3AgPSBmYWxzZSxcclxuICBzaG93U2xpZGVyQ29udHJvbHMgPSB0cnVlLFxyXG4gIGxpbWl0VG8sXHJcbiAgYWRkTWFyZ2luVG9wID0gdHJ1ZSxcclxufTogUHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNoYW5nZVBhZ2UgfSA9IHVzZVBhZ2VzQ29udGV4dCgpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoYW5nZVBhZ2UoJ1Nob3djYXNlJylcclxuICB9LCBbY2hhbmdlUGFnZV0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgfSlcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAge2FkZE1hcmdpblRvcCAmJiA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzVyZW0nIH19IC8+fVxyXG4gICAgICB7bGltaXRUb1xyXG4gICAgICAgID8gPFBhcGVyPlxyXG4gICAgICAgICAge1Byb2plY3RzQXJyYXkuc2xpY2UoMCwgbGltaXRUbykubWFwKHByb2ogPT4gKFxyXG4gICAgICAgICAgICA8UHJvamVjdFxyXG4gICAgICAgICAgICAgIGtleT17cHJvai50aXRsZX1cclxuICAgICAgICAgICAgICBsb29wPXtsb29wfVxyXG4gICAgICAgICAgICAgIHNob3dTbGlkZXJDb250cm9scz17c2hvd1NsaWRlckNvbnRyb2xzfVxyXG4gICAgICAgICAgICAgIGNsYXNzS2V5PXtwcm9qLmNsYXNzS2V5fVxyXG4gICAgICAgICAgICAgIGltYWdlcz17cHJvai5pbWFnZXN9XHJcbiAgICAgICAgICAgICAgdXJsPXtwcm9qLnVybH1cclxuICAgICAgICAgICAgICBuYW1lPXtwcm9qLm5hbWV9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3Byb2oudGl0bGV9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb2ouZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgID48L1Byb2plY3Q+XHJcbiAgICAgICAgICApKX08L1BhcGVyPlxyXG4gICAgICAgIDogPFBhcGVyPntQcm9qZWN0c0FycmF5Lm1hcChwcm9qID0+IChcclxuICAgICAgICAgIDxQcm9qZWN0XHJcbiAgICAgICAgICAgIGtleT17cHJvai50aXRsZX1cclxuICAgICAgICAgICAgbG9vcD17bG9vcH1cclxuICAgICAgICAgICAgc2hvd1NsaWRlckNvbnRyb2xzPXtzaG93U2xpZGVyQ29udHJvbHN9XHJcbiAgICAgICAgICAgIGNsYXNzS2V5PXtwcm9qLmNsYXNzS2V5fVxyXG4gICAgICAgICAgICBpbWFnZXM9e3Byb2ouaW1hZ2VzfVxyXG4gICAgICAgICAgICB1cmw9e3Byb2oudXJsfVxyXG4gICAgICAgICAgICBuYW1lPXtwcm9qLm5hbWV9XHJcbiAgICAgICAgICAgIHRpdGxlPXtwcm9qLnRpdGxlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvai5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgID48L1Byb2plY3Q+XHJcbiAgICAgICAgKSl9PC9QYXBlcj59XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==