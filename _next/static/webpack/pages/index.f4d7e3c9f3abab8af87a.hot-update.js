webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/home/ExperienceList.tsx":
/*!************************************************!*\
  !*** ./src/components/home/ExperienceList.tsx ***!
  \************************************************/
/*! exports provided: experiencesIcons, ExperienceList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experiencesIcons", function() { return experiencesIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceList", function() { return ExperienceList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme_getTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/getTheme */ "./src/theme/getTheme.ts");
var _jsxFileName = "D:\\WEB_DEV\\Personal_Projects\\wilfredlopez\\src\\components\\home\\ExperienceList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ExpIcon = __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaBriefcase"], {
  color: _theme_getTheme__WEBPACK_IMPORTED_MODULE_4__["SECONDARY_COLOR"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 17
  }
});

const experiencesIcons = [{
  Icon: ExpIcon,
  label: 'Web Production QA Analyst',
  location: 'Century 21 Stores',
  isCurrent: false
}, {
  Icon: ExpIcon,
  label: 'Suppor Center Specialist',
  location: 'Century 21 Stores',
  isCurrent: false
}, {
  Icon: ExpIcon,
  label: 'Mission Control Specialist',
  location: 'Teleperformance',
  isCurrent: false
}, {
  Icon: ExpIcon,
  label: 'Customer Service Representative',
  location: 'Teleperformance',
  isCurrent: false
}, {
  Icon: ExpIcon,
  label: 'Call Center QA Analyst',
  location: 'BM Teleservices',
  isCurrent: false
}];
const ExperienceSection = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].section.withConfig({
  displayName: "ExperienceList__ExperienceSection",
  componentId: "sc-1mdy98u-0"
})(["display:flex;flex-direction:column;align-items:center;"]);
_c = ExperienceSection;
const ExperienceList = () => {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, experiencesIcons.map(({
    Icon,
    isCurrent,
    label,
    location
  }) => {
    return __jsx("li", {
      key: label,
      className: "mb-1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }, __jsx(ExperienceSection, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, Icon, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "h6",
      component: "h3",
      style: {
        color: isCurrent ? 'blue' : 'inherit' // : prefersDarkMode
        // ? '#c8c8c8'
        // : '#fcfcfc',

      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    }, label, isCurrent && '(Actual)')), __jsx("em", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 15
      }
    }, location)));
  }));
};
_c2 = ExperienceList;

var _c, _c2;

$RefreshReg$(_c, "ExperienceSection");
$RefreshReg$(_c2, "ExperienceList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9FeHBlcmllbmNlTGlzdC50c3giXSwibmFtZXMiOlsiRXhwSWNvbiIsIlNFQ09OREFSWV9DT0xPUiIsImV4cGVyaWVuY2VzSWNvbnMiLCJJY29uIiwibGFiZWwiLCJsb2NhdGlvbiIsImlzQ3VycmVudCIsIkV4cGVyaWVuY2VTZWN0aW9uIiwic3R5bGVkIiwic2VjdGlvbiIsIkV4cGVyaWVuY2VMaXN0IiwibWFwIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE1BQUMsMERBQUQ7QUFBYSxPQUFLLEVBQUVDLCtEQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQWhCOztBQUVPLE1BQU1DLGdCQUFnQixHQUFHLENBQzlCO0FBQ0VDLE1BQUksRUFBRUgsT0FEUjtBQUVFSSxPQUFLLEVBQUUsMkJBRlQ7QUFHRUMsVUFBUSxFQUFFLG1CQUhaO0FBSUVDLFdBQVMsRUFBRTtBQUpiLENBRDhCLEVBTzlCO0FBQ0VILE1BQUksRUFBRUgsT0FEUjtBQUVFSSxPQUFLLEVBQUUsMEJBRlQ7QUFHRUMsVUFBUSxFQUFFLG1CQUhaO0FBSUVDLFdBQVMsRUFBRTtBQUpiLENBUDhCLEVBYTlCO0FBQ0VILE1BQUksRUFBRUgsT0FEUjtBQUVFSSxPQUFLLEVBQUUsNEJBRlQ7QUFHRUMsVUFBUSxFQUFFLGlCQUhaO0FBSUVDLFdBQVMsRUFBRTtBQUpiLENBYjhCLEVBbUI5QjtBQUNFSCxNQUFJLEVBQUVILE9BRFI7QUFFRUksT0FBSyxFQUFFLGlDQUZUO0FBR0VDLFVBQVEsRUFBRSxpQkFIWjtBQUlFQyxXQUFTLEVBQUU7QUFKYixDQW5COEIsRUF5QjlCO0FBQ0VILE1BQUksRUFBRUgsT0FEUjtBQUVFSSxPQUFLLEVBQUUsd0JBRlQ7QUFHRUMsVUFBUSxFQUFFLGlCQUhaO0FBSUVDLFdBQVMsRUFBRTtBQUpiLENBekI4QixDQUF6QjtBQWlDUCxNQUFNQyxpQkFBaUIsR0FBR0MseURBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSw4REFBdkI7S0FBTUYsaUI7QUFNQyxNQUFNRyxjQUFjLEdBQUcsTUFBTTtBQUNsQztBQUNBLFNBQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dSLGdCQUFnQixDQUFDUyxHQUFqQixDQUFxQixDQUFDO0FBQUVSLFFBQUY7QUFBUUcsYUFBUjtBQUFtQkYsU0FBbkI7QUFBMEJDO0FBQTFCLEdBQUQsS0FBMEM7QUFDOUQsV0FDRTtBQUFJLFNBQUcsRUFBRUQsS0FBVDtBQUFnQixlQUFTLEVBQUMsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVFLE1BQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxJQURILEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsNERBQUQ7QUFDRSxhQUFPLEVBQUMsSUFEVjtBQUVFLGVBQVMsRUFBQyxJQUZaO0FBR0UsV0FBSyxFQUFFO0FBQ0xTLGFBQUssRUFBRU4sU0FBUyxHQUNaLE1BRFksR0FDSCxTQUZSLENBR0w7QUFDQTtBQUNBOztBQUxLLE9BSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVdHRixLQVhILEVBWUdFLFNBQVMsSUFBSSxVQVpoQixDQURGLENBRkYsRUFrQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLRCxRQUFMLENBbEJGLENBRkYsQ0FERjtBQXlCRCxHQTFCQSxDQURILENBREY7QUErQkQsQ0FqQ007TUFBTUssYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNGQ3ZTNjOWYzYWJhYjhhZjg3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGYUJyaWVmY2FzZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5pbXBvcnQge1xyXG4gIExpc3QsXHJcbiAgLy8gdXNlTWVkaWFRdWVyeSAsXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgU0VDT05EQVJZX0NPTE9SIH0gZnJvbSAnLi4vLi4vdGhlbWUvZ2V0VGhlbWUnXHJcblxyXG5jb25zdCBFeHBJY29uID0gPEZhQnJpZWZjYXNlIGNvbG9yPXtTRUNPTkRBUllfQ09MT1J9IC8+XHJcblxyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXNJY29ucyA9IFtcclxuICB7XHJcbiAgICBJY29uOiBFeHBJY29uLFxyXG4gICAgbGFiZWw6ICdXZWIgUHJvZHVjdGlvbiBRQSBBbmFseXN0JyxcclxuICAgIGxvY2F0aW9uOiAnQ2VudHVyeSAyMSBTdG9yZXMnLFxyXG4gICAgaXNDdXJyZW50OiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEV4cEljb24sXHJcbiAgICBsYWJlbDogJ1N1cHBvciBDZW50ZXIgU3BlY2lhbGlzdCcsXHJcbiAgICBsb2NhdGlvbjogJ0NlbnR1cnkgMjEgU3RvcmVzJyxcclxuICAgIGlzQ3VycmVudDogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBFeHBJY29uLFxyXG4gICAgbGFiZWw6ICdNaXNzaW9uIENvbnRyb2wgU3BlY2lhbGlzdCcsXHJcbiAgICBsb2NhdGlvbjogJ1RlbGVwZXJmb3JtYW5jZScsXHJcbiAgICBpc0N1cnJlbnQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogRXhwSWNvbixcclxuICAgIGxhYmVsOiAnQ3VzdG9tZXIgU2VydmljZSBSZXByZXNlbnRhdGl2ZScsXHJcbiAgICBsb2NhdGlvbjogJ1RlbGVwZXJmb3JtYW5jZScsXHJcbiAgICBpc0N1cnJlbnQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogRXhwSWNvbixcclxuICAgIGxhYmVsOiAnQ2FsbCBDZW50ZXIgUUEgQW5hbHlzdCcsXHJcbiAgICBsb2NhdGlvbjogJ0JNIFRlbGVzZXJ2aWNlcycsXHJcbiAgICBpc0N1cnJlbnQ6IGZhbHNlLFxyXG4gIH0sXHJcbl0gYXMgY29uc3RcclxuXHJcbmNvbnN0IEV4cGVyaWVuY2VTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBFeHBlcmllbmNlTGlzdCA9ICgpID0+IHtcclxuICAvLyBjb25zdCBwcmVmZXJzRGFya01vZGUgPSB1c2VNZWRpYVF1ZXJ5KCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJylcclxuICByZXR1cm4gKFxyXG4gICAgPExpc3Q+XHJcbiAgICAgIHtleHBlcmllbmNlc0ljb25zLm1hcCgoeyBJY29uLCBpc0N1cnJlbnQsIGxhYmVsLCBsb2NhdGlvbiB9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxsaSBrZXk9e2xhYmVsfSBjbGFzc05hbWU9J21iLTEnPlxyXG4gICAgICAgICAgICB7LyogPEljb24gbmFtZT17ZXhwLmljb259IC8+ICovfVxyXG4gICAgICAgICAgICA8RXhwZXJpZW5jZVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAge0ljb259XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2g2J1xyXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9J2gzJ1xyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpc0N1cnJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgID8gJ2JsdWUnIDogJ2luaGVyaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gOiBwcmVmZXJzRGFya01vZGVcclxuICAgICAgICAgICAgICAgICAgICAvLyA/ICcjYzhjOGM4J1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIDogJyNmY2ZjZmMnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgIHtpc0N1cnJlbnQgJiYgJyhBY3R1YWwpJ31cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZW0+e2xvY2F0aW9ufTwvZW0+XHJcbiAgICAgICAgICAgIDwvRXhwZXJpZW5jZVNlY3Rpb24+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICA8L0xpc3Q+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=