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
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\home\\Experiences.tsx";
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
const experienceList = () => {
  var _s = $RefreshSig$();

  return experiencesIcons.map(_s(({
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
        lineNumber: 54,
        columnNumber: 9
      }
    }, __jsx(ExperienceSection, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }, Icon, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
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
        lineNumber: 59,
        columnNumber: 15
      }
    }, label, isCurrent && "(Actual)")), __jsx("em", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }, location)));
  }, "v573EQ7Q7ijbpf9ebr3rWzvwHWg=", false, function () {
    return [_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"]];
  }));
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL0V4cGVyaWVuY2VzLnRzeCJdLCJuYW1lcyI6WyJFeHBJY29uIiwiZXhwZXJpZW5jZXNJY29ucyIsIkljb24iLCJsYWJlbCIsImxvY2F0aW9uIiwiaXNDdXJyZW50IiwiRXhwZXJpZW5jZVNlY3Rpb24iLCJzdHlsZWQiLCJzZWN0aW9uIiwiZXhwZXJpZW5jZUxpc3QiLCJtYXAiLCJwcmVmZXJzRGFya01vZGUiLCJ1c2VNZWRpYVF1ZXJ5IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE1BQUMsMERBQUQ7QUFBYSxPQUFLLEVBQUMsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFoQjs7QUFFTyxNQUFNQyxnQkFBZ0IsR0FBRyxDQUM5QjtBQUNFQyxNQUFJLEVBQUVGLE9BRFI7QUFFRUcsT0FBSyxFQUFFLDJCQUZUO0FBR0VDLFVBQVEsRUFBRSxtQkFIWjtBQUlFQyxXQUFTLEVBQUU7QUFKYixDQUQ4QixFQU85QjtBQUNFSCxNQUFJLEVBQUVGLE9BRFI7QUFFRUcsT0FBSyxFQUFFLDBCQUZUO0FBR0VDLFVBQVEsRUFBRSxtQkFIWjtBQUlFQyxXQUFTLEVBQUU7QUFKYixDQVA4QixFQWE5QjtBQUNFSCxNQUFJLEVBQUVGLE9BRFI7QUFFRUcsT0FBSyxFQUFFLDRCQUZUO0FBR0VDLFVBQVEsRUFBRSxpQkFIWjtBQUlFQyxXQUFTLEVBQUU7QUFKYixDQWI4QixFQW1COUI7QUFDRUgsTUFBSSxFQUFFRixPQURSO0FBRUVHLE9BQUssRUFBRSxpQ0FGVDtBQUdFQyxVQUFRLEVBQUUsaUJBSFo7QUFJRUMsV0FBUyxFQUFFO0FBSmIsQ0FuQjhCLEVBeUI5QjtBQUNFSCxNQUFJLEVBQUVGLE9BRFI7QUFFRUcsT0FBSyxFQUFFLHdCQUZUO0FBR0VDLFVBQVEsRUFBRSxpQkFIWjtBQUlFQyxXQUFTLEVBQUU7QUFKYixDQXpCOEIsQ0FBekI7QUFpQ1AsTUFBTUMsaUJBQWlCLEdBQUdDLHlEQUFNLENBQUNDLE9BQVY7QUFBQTtBQUFBO0FBQUEsOERBQXZCO0tBQU1GLGlCO0FBTUMsTUFBTUcsY0FBYyxHQUFHO0FBQUE7O0FBQUEsU0FDNUJSLGdCQUFnQixDQUFDUyxHQUFqQixJQUNFLENBQUM7QUFBRVIsUUFBRjtBQUFRRyxhQUFSO0FBQW1CRixTQUFuQjtBQUEwQkM7QUFBMUIsR0FBRCxLQUEwQztBQUFBOztBQUN4QyxVQUFNTyxlQUFlLEdBQUdDLHVFQUFhLENBQUMsOEJBQUQsQ0FBckM7QUFDQSxXQUNFO0FBQUksU0FBRyxFQUFFVCxLQUFUO0FBQWdCLGVBQVMsRUFBQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUUsTUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELElBREgsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw0REFBRDtBQUNFLGFBQU8sRUFBQyxJQURWO0FBRUUsZUFBUyxFQUFDLElBRlo7QUFHRSxXQUFLLEVBQUU7QUFDTFcsYUFBSyxFQUFFUixTQUFTLEdBQ1osTUFEWSxHQUVaTSxlQUFlLEdBQ2YsU0FEZSxHQUVmO0FBTEMsT0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BV0dSLEtBWEgsRUFZR0UsU0FBUyxJQUFJLFVBWmhCLENBREYsQ0FGRixFQWtCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtELFFBQUwsQ0FsQkYsQ0FGRixDQURGO0FBeUJELEdBNUJIO0FBQUEsWUFFNEJRLCtEQUY1QjtBQUFBLEtBRDRCO0FBQUEsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjNkNmRjMDdhMmUwNzE2ZjA2MGIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRmFCcmllZmNhc2UsXHJcbn0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IEV4cEljb24gPSA8RmFCcmllZmNhc2UgY29sb3I9XCIjMDA3OTZiXCIgLz47XHJcblxyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXNJY29ucyA9IFtcclxuICB7XHJcbiAgICBJY29uOiBFeHBJY29uLFxyXG4gICAgbGFiZWw6IFwiV2ViIFByb2R1Y3Rpb24gUUEgQW5hbHlzdFwiLFxyXG4gICAgbG9jYXRpb246IFwiQ2VudHVyeSAyMSBTdG9yZXNcIixcclxuICAgIGlzQ3VycmVudDogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBFeHBJY29uLFxyXG4gICAgbGFiZWw6IFwiU3VwcG9yIENlbnRlciBTcGVjaWFsaXN0XCIsXHJcbiAgICBsb2NhdGlvbjogXCJDZW50dXJ5IDIxIFN0b3Jlc1wiLFxyXG4gICAgaXNDdXJyZW50OiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEV4cEljb24sXHJcbiAgICBsYWJlbDogXCJNaXNzaW9uIENvbnRyb2wgU3BlY2lhbGlzdFwiLFxyXG4gICAgbG9jYXRpb246IFwiVGVsZXBlcmZvcm1hbmNlXCIsXHJcbiAgICBpc0N1cnJlbnQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogRXhwSWNvbixcclxuICAgIGxhYmVsOiBcIkN1c3RvbWVyIFNlcnZpY2UgUmVwcmVzZW50YXRpdmVcIixcclxuICAgIGxvY2F0aW9uOiBcIlRlbGVwZXJmb3JtYW5jZVwiLFxyXG4gICAgaXNDdXJyZW50OiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEV4cEljb24sXHJcbiAgICBsYWJlbDogXCJDYWxsIENlbnRlciBRQSBBbmFseXN0XCIsXHJcbiAgICBsb2NhdGlvbjogXCJCTSBUZWxlc2VydmljZXNcIixcclxuICAgIGlzQ3VycmVudDogZmFsc2UsXHJcbiAgfSxcclxuXSBhcyBjb25zdDtcclxuXHJcbmNvbnN0IEV4cGVyaWVuY2VTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZUxpc3QgPSAoKSA9PlxyXG4gIGV4cGVyaWVuY2VzSWNvbnMubWFwKFxyXG4gICAgKHsgSWNvbiwgaXNDdXJyZW50LCBsYWJlbCwgbG9jYXRpb24gfSkgPT4ge1xyXG4gICAgICBjb25zdCBwcmVmZXJzRGFya01vZGUgPSB1c2VNZWRpYVF1ZXJ5KFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8bGkga2V5PXtsYWJlbH0gY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgey8qIDxJY29uIG5hbWU9e2V4cC5pY29ufSAvPiAqL31cclxuICAgICAgICAgIDxFeHBlcmllbmNlU2VjdGlvbj5cclxuICAgICAgICAgICAge0ljb259XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoM1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogaXNDdXJyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogcHJlZmVyc0RhcmtNb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIiNjOGM4YzhcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCIjZmNmY2ZjXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgIHtpc0N1cnJlbnQgJiYgXCIoQWN0dWFsKVwifVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxlbT57bG9jYXRpb259PC9lbT5cclxuICAgICAgICAgIDwvRXhwZXJpZW5jZVNlY3Rpb24+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==