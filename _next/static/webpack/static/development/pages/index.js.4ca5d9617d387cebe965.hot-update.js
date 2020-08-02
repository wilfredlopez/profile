webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/home/Experiences.tsx":
/*!*********************************************!*\
  !*** ./src/components/home/Experiences.tsx ***!
  \*********************************************/
/*! exports provided: experiencesIcons, experienceList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experiencesIcons", function() { return experiencesIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experienceList", function() { return experienceList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\home\\Experiences.tsx",
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
  displayName: "Experiences__ExperienceSection",
  componentId: "lmt0s6-0"
})(["display:flex;flex-direction:column;align-items:center;"]);
_c = ExperienceSection;
const experienceList = experiencesIcons.map(_s(({
  Icon,
  isCurrent,
  label,
  location
}) => {
  _s();

  const prefersDarkMode = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])("(prefers-color-scheme: dark)");
  return __jsx("li", {
    key: label,
    className: "mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(ExperienceSection, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, Icon, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
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
      lineNumber: 58,
      columnNumber: 13
    }
  }, label, isCurrent && "(Actual)")), __jsx("em", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, location)));
}, "v573EQ7Q7ijbpf9ebr3rWzvwHWg=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"]];
}));

var _c;

$RefreshReg$(_c, "ExperienceSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL0V4cGVyaWVuY2VzLnRzeCJdLCJuYW1lcyI6WyJFeHBJY29uIiwiZXhwZXJpZW5jZXNJY29ucyIsIkljb24iLCJsYWJlbCIsImxvY2F0aW9uIiwiaXNDdXJyZW50IiwiRXhwZXJpZW5jZVNlY3Rpb24iLCJzdHlsZWQiLCJzZWN0aW9uIiwiZXhwZXJpZW5jZUxpc3QiLCJtYXAiLCJwcmVmZXJzRGFya01vZGUiLCJ1c2VNZWRpYVF1ZXJ5IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsTUFBQywwREFBRDtBQUFhLE9BQUssRUFBQyxTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQWhCOztBQUVPLE1BQU1DLGdCQUFnQixHQUFHLENBQzlCO0FBQ0VDLE1BQUksRUFBRUYsT0FEUjtBQUVFRyxPQUFLLEVBQUUsMkJBRlQ7QUFHRUMsVUFBUSxFQUFFLG1CQUhaO0FBSUVDLFdBQVMsRUFBRTtBQUpiLENBRDhCLEVBTzlCO0FBQ0VILE1BQUksRUFBRUYsT0FEUjtBQUVFRyxPQUFLLEVBQUUsMEJBRlQ7QUFHRUMsVUFBUSxFQUFFLG1CQUhaO0FBSUVDLFdBQVMsRUFBRTtBQUpiLENBUDhCLEVBYTlCO0FBQ0VILE1BQUksRUFBRUYsT0FEUjtBQUVFRyxPQUFLLEVBQUUsNEJBRlQ7QUFHRUMsVUFBUSxFQUFFLGlCQUhaO0FBSUVDLFdBQVMsRUFBRTtBQUpiLENBYjhCLEVBbUI5QjtBQUNFSCxNQUFJLEVBQUVGLE9BRFI7QUFFRUcsT0FBSyxFQUFFLGlDQUZUO0FBR0VDLFVBQVEsRUFBRSxpQkFIWjtBQUlFQyxXQUFTLEVBQUU7QUFKYixDQW5COEIsRUF5QjlCO0FBQ0VILE1BQUksRUFBRUYsT0FEUjtBQUVFRyxPQUFLLEVBQUUsd0JBRlQ7QUFHRUMsVUFBUSxFQUFFLGlCQUhaO0FBSUVDLFdBQVMsRUFBRTtBQUpiLENBekI4QixDQUF6QjtBQWlDUCxNQUFNQyxpQkFBaUIsR0FBR0MseURBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSw4REFBdkI7S0FBTUYsaUI7QUFNQyxNQUFNRyxjQUFjLEdBQUdSLGdCQUFnQixDQUFDUyxHQUFqQixJQUM1QixDQUFDO0FBQUVSLE1BQUY7QUFBUUcsV0FBUjtBQUFtQkYsT0FBbkI7QUFBMEJDO0FBQTFCLENBQUQsS0FBMEM7QUFBQTs7QUFDeEMsUUFBTU8sZUFBZSxHQUFHQyx1RUFBYSxDQUFDLDhCQUFELENBQXJDO0FBQ0EsU0FDRTtBQUFJLE9BQUcsRUFBRVQsS0FBVDtBQUFnQixhQUFTLEVBQUMsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxJQURILEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFDRSxXQUFPLEVBQUMsSUFEVjtBQUVFLGFBQVMsRUFBQyxJQUZaO0FBR0UsU0FBSyxFQUFFO0FBQ0xXLFdBQUssRUFBRVIsU0FBUyxHQUNaLE1BRFksR0FFWk0sZUFBZSxHQUNmLFNBRGUsR0FFZjtBQUxDLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVdHUixLQVhILEVBWUdFLFNBQVMsSUFBSSxVQVpoQixDQURGLENBRkYsRUFrQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLRCxRQUFMLENBbEJGLENBRkYsQ0FERjtBQXlCRCxDQTVCMkI7QUFBQSxVQUVGUSwrREFGRTtBQUFBLEdBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy40Y2E1ZDk2MTdkMzg3Y2ViZTk2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEZhQnJpZWZjYXNlLFxyXG59IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBFeHBJY29uID0gPEZhQnJpZWZjYXNlIGNvbG9yPVwiIzAwNzk2YlwiIC8+O1xyXG5cclxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzSWNvbnMgPSBbXHJcbiAge1xyXG4gICAgSWNvbjogRXhwSWNvbixcclxuICAgIGxhYmVsOiBcIldlYiBQcm9kdWN0aW9uIFFBIEFuYWx5c3RcIixcclxuICAgIGxvY2F0aW9uOiBcIkNlbnR1cnkgMjEgU3RvcmVzXCIsXHJcbiAgICBpc0N1cnJlbnQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogRXhwSWNvbixcclxuICAgIGxhYmVsOiBcIlN1cHBvciBDZW50ZXIgU3BlY2lhbGlzdFwiLFxyXG4gICAgbG9jYXRpb246IFwiQ2VudHVyeSAyMSBTdG9yZXNcIixcclxuICAgIGlzQ3VycmVudDogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBFeHBJY29uLFxyXG4gICAgbGFiZWw6IFwiTWlzc2lvbiBDb250cm9sIFNwZWNpYWxpc3RcIixcclxuICAgIGxvY2F0aW9uOiBcIlRlbGVwZXJmb3JtYW5jZVwiLFxyXG4gICAgaXNDdXJyZW50OiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEV4cEljb24sXHJcbiAgICBsYWJlbDogXCJDdXN0b21lciBTZXJ2aWNlIFJlcHJlc2VudGF0aXZlXCIsXHJcbiAgICBsb2NhdGlvbjogXCJUZWxlcGVyZm9ybWFuY2VcIixcclxuICAgIGlzQ3VycmVudDogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBFeHBJY29uLFxyXG4gICAgbGFiZWw6IFwiQ2FsbCBDZW50ZXIgUUEgQW5hbHlzdFwiLFxyXG4gICAgbG9jYXRpb246IFwiQk0gVGVsZXNlcnZpY2VzXCIsXHJcbiAgICBpc0N1cnJlbnQ6IGZhbHNlLFxyXG4gIH0sXHJcbl0gYXMgY29uc3Q7XHJcblxyXG5jb25zdCBFeHBlcmllbmNlU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VMaXN0ID0gZXhwZXJpZW5jZXNJY29ucy5tYXAoXHJcbiAgKHsgSWNvbiwgaXNDdXJyZW50LCBsYWJlbCwgbG9jYXRpb24gfSkgPT4ge1xyXG4gICAgY29uc3QgcHJlZmVyc0RhcmtNb2RlID0gdXNlTWVkaWFRdWVyeShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8bGkga2V5PXtsYWJlbH0gY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgIHsvKiA8SWNvbiBuYW1lPXtleHAuaWNvbn0gLz4gKi99XHJcbiAgICAgICAgPEV4cGVyaWVuY2VTZWN0aW9uPlxyXG4gICAgICAgICAge0ljb259XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDNcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogaXNDdXJyZW50XHJcbiAgICAgICAgICAgICAgICAgID8gXCJibHVlXCJcclxuICAgICAgICAgICAgICAgICAgOiBwcmVmZXJzRGFya01vZGVcclxuICAgICAgICAgICAgICAgICAgPyBcIiNjOGM4YzhcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiI2ZjZmNmY1wiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAge2lzQ3VycmVudCAmJiBcIihBY3R1YWwpXCJ9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGVtPntsb2NhdGlvbn08L2VtPlxyXG4gICAgICAgIDwvRXhwZXJpZW5jZVNlY3Rpb24+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApO1xyXG4gIH0sXHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=