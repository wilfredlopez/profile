webpackHotUpdate("static\\development\\pages\\index.js",{

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
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\home\\ExperienceList.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ExpIcon = __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaBriefcase"], {
  color: "#00796b",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 17
  }
});

const experiencesIcons = [{
  Icon: ExpIcon,
  label: "Web Production QA Analyst",
  location: "Century 21 Stores",
  isCurrent: false
}, {
  Icon: ExpIcon,
  label: "Suppor Center Specialist",
  location: "Century 21 Stores",
  isCurrent: false
}, {
  Icon: ExpIcon,
  label: "Mission Control Specialist",
  location: "Teleperformance",
  isCurrent: false
}, {
  Icon: ExpIcon,
  label: "Customer Service Representative",
  location: "Teleperformance",
  isCurrent: false
}, {
  Icon: ExpIcon,
  label: "Call Center QA Analyst",
  location: "BM Teleservices",
  isCurrent: false
}];
const ExperienceSection = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].section.withConfig({
  displayName: "ExperienceList__ExperienceSection",
  componentId: "sc-1mdy98u-0"
})(["display:flex;flex-direction:column;align-items:center;"]);
_c = ExperienceSection;
const ExperienceList = () => {
  _s();

  const prefersDarkMode = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])("(prefers-color-scheme: dark)");
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 10
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
        lineNumber: 55,
        columnNumber: 11
      }
    }, __jsx(ExperienceSection, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }, Icon, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "h6",
      component: "h3",
      style: {
        color: isCurrent ? "blue" : prefersDarkMode ? "#c8c8c8" : "#fcfcfc"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }, label, isCurrent && "(Actual)")), __jsx("em", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 15
      }
    }, location)));
  }));
};

_s(ExperienceList, "v573EQ7Q7ijbpf9ebr3rWzvwHWg=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL0V4cGVyaWVuY2VMaXN0LnRzeCJdLCJuYW1lcyI6WyJFeHBJY29uIiwiZXhwZXJpZW5jZXNJY29ucyIsIkljb24iLCJsYWJlbCIsImxvY2F0aW9uIiwiaXNDdXJyZW50IiwiRXhwZXJpZW5jZVNlY3Rpb24iLCJzdHlsZWQiLCJzZWN0aW9uIiwiRXhwZXJpZW5jZUxpc3QiLCJwcmVmZXJzRGFya01vZGUiLCJ1c2VNZWRpYVF1ZXJ5IiwibWFwIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsTUFBQywwREFBRDtBQUFhLE9BQUssRUFBQyxTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQWhCOztBQUVPLE1BQU1DLGdCQUFnQixHQUFHLENBQzlCO0FBQ0VDLE1BQUksRUFBRUYsT0FEUjtBQUVFRyxPQUFLLEVBQUUsMkJBRlQ7QUFHRUMsVUFBUSxFQUFFLG1CQUhaO0FBSUVDLFdBQVMsRUFBRTtBQUpiLENBRDhCLEVBTzlCO0FBQ0VILE1BQUksRUFBRUYsT0FEUjtBQUVFRyxPQUFLLEVBQUUsMEJBRlQ7QUFHRUMsVUFBUSxFQUFFLG1CQUhaO0FBSUVDLFdBQVMsRUFBRTtBQUpiLENBUDhCLEVBYTlCO0FBQ0VILE1BQUksRUFBRUYsT0FEUjtBQUVFRyxPQUFLLEVBQUUsNEJBRlQ7QUFHRUMsVUFBUSxFQUFFLGlCQUhaO0FBSUVDLFdBQVMsRUFBRTtBQUpiLENBYjhCLEVBbUI5QjtBQUNFSCxNQUFJLEVBQUVGLE9BRFI7QUFFRUcsT0FBSyxFQUFFLGlDQUZUO0FBR0VDLFVBQVEsRUFBRSxpQkFIWjtBQUlFQyxXQUFTLEVBQUU7QUFKYixDQW5COEIsRUF5QjlCO0FBQ0VILE1BQUksRUFBRUYsT0FEUjtBQUVFRyxPQUFLLEVBQUUsd0JBRlQ7QUFHRUMsVUFBUSxFQUFFLGlCQUhaO0FBSUVDLFdBQVMsRUFBRTtBQUpiLENBekI4QixDQUF6QjtBQWlDUCxNQUFNQyxpQkFBaUIsR0FBR0MseURBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSw4REFBdkI7S0FBTUYsaUI7QUFNQyxNQUFNRyxjQUFjLEdBQUcsTUFBTTtBQUFBOztBQUNsQyxRQUFNQyxlQUFlLEdBQUdDLHVFQUFhLENBQUMsOEJBQUQsQ0FBckM7QUFDQSxTQUFPLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNKVixnQkFBZ0IsQ0FBQ1csR0FBakIsQ0FDQyxDQUFDO0FBQUVWLFFBQUY7QUFBUUcsYUFBUjtBQUFtQkYsU0FBbkI7QUFBMEJDO0FBQTFCLEdBQUQsS0FBMEM7QUFDeEMsV0FDRTtBQUFJLFNBQUcsRUFBRUQsS0FBVDtBQUFnQixlQUFTLEVBQUMsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVFLE1BQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxJQURILEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsNERBQUQ7QUFDRSxhQUFPLEVBQUMsSUFEVjtBQUVFLGVBQVMsRUFBQyxJQUZaO0FBR0UsV0FBSyxFQUFFO0FBQ0xXLGFBQUssRUFBRVIsU0FBUyxHQUNaLE1BRFksR0FFWkssZUFBZSxHQUNmLFNBRGUsR0FFZjtBQUxDLE9BSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVdHUCxLQVhILEVBWUdFLFNBQVMsSUFBSSxVQVpoQixDQURGLENBRkYsRUFrQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLRCxRQUFMLENBbEJGLENBRkYsQ0FERjtBQXlCRCxHQTNCRixDQURJLENBQVA7QUErQkQsQ0FqQ007O0dBQU1LLGM7VUFDYUUsK0Q7OztNQURiRixjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4xYzBlMWU5MTQ1NDcyNGRlN2Q3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEZhQnJpZWZjYXNlLFxyXG59IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBMaXN0LCBUeXBvZ3JhcGh5LCB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBFeHBJY29uID0gPEZhQnJpZWZjYXNlIGNvbG9yPVwiIzAwNzk2YlwiIC8+O1xyXG5cclxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzSWNvbnMgPSBbXHJcbiAge1xyXG4gICAgSWNvbjogRXhwSWNvbixcclxuICAgIGxhYmVsOiBcIldlYiBQcm9kdWN0aW9uIFFBIEFuYWx5c3RcIixcclxuICAgIGxvY2F0aW9uOiBcIkNlbnR1cnkgMjEgU3RvcmVzXCIsXHJcbiAgICBpc0N1cnJlbnQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogRXhwSWNvbixcclxuICAgIGxhYmVsOiBcIlN1cHBvciBDZW50ZXIgU3BlY2lhbGlzdFwiLFxyXG4gICAgbG9jYXRpb246IFwiQ2VudHVyeSAyMSBTdG9yZXNcIixcclxuICAgIGlzQ3VycmVudDogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBFeHBJY29uLFxyXG4gICAgbGFiZWw6IFwiTWlzc2lvbiBDb250cm9sIFNwZWNpYWxpc3RcIixcclxuICAgIGxvY2F0aW9uOiBcIlRlbGVwZXJmb3JtYW5jZVwiLFxyXG4gICAgaXNDdXJyZW50OiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEV4cEljb24sXHJcbiAgICBsYWJlbDogXCJDdXN0b21lciBTZXJ2aWNlIFJlcHJlc2VudGF0aXZlXCIsXHJcbiAgICBsb2NhdGlvbjogXCJUZWxlcGVyZm9ybWFuY2VcIixcclxuICAgIGlzQ3VycmVudDogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBFeHBJY29uLFxyXG4gICAgbGFiZWw6IFwiQ2FsbCBDZW50ZXIgUUEgQW5hbHlzdFwiLFxyXG4gICAgbG9jYXRpb246IFwiQk0gVGVsZXNlcnZpY2VzXCIsXHJcbiAgICBpc0N1cnJlbnQ6IGZhbHNlLFxyXG4gIH0sXHJcbl0gYXMgY29uc3Q7XHJcblxyXG5jb25zdCBFeHBlcmllbmNlU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEV4cGVyaWVuY2VMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHByZWZlcnNEYXJrTW9kZSA9IHVzZU1lZGlhUXVlcnkoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpO1xyXG4gIHJldHVybiA8TGlzdD5cclxuICAgIHtleHBlcmllbmNlc0ljb25zLm1hcChcclxuICAgICAgKHsgSWNvbiwgaXNDdXJyZW50LCBsYWJlbCwgbG9jYXRpb24gfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtsYWJlbH0gY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgICB7LyogPEljb24gbmFtZT17ZXhwLmljb259IC8+ICovfVxyXG4gICAgICAgICAgICA8RXhwZXJpZW5jZVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAge0ljb259XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgzXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogaXNDdXJyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiYmx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IHByZWZlcnNEYXJrTW9kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIiNjOGM4YzhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIiNmY2ZjZmNcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICB7aXNDdXJyZW50ICYmIFwiKEFjdHVhbClcIn1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZW0+e2xvY2F0aW9ufTwvZW0+XHJcbiAgICAgICAgICAgIDwvRXhwZXJpZW5jZVNlY3Rpb24+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICApfVxyXG4gIDwvTGlzdD47XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=