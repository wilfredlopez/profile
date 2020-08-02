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
  return __jsx("span", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL0V4cGVyaWVuY2VMaXN0LnRzeCJdLCJuYW1lcyI6WyJFeHBJY29uIiwiZXhwZXJpZW5jZXNJY29ucyIsIkljb24iLCJsYWJlbCIsImxvY2F0aW9uIiwiaXNDdXJyZW50IiwiRXhwZXJpZW5jZVNlY3Rpb24iLCJzdHlsZWQiLCJzZWN0aW9uIiwiRXhwZXJpZW5jZUxpc3QiLCJwcmVmZXJzRGFya01vZGUiLCJ1c2VNZWRpYVF1ZXJ5IiwibWFwIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsTUFBQywwREFBRDtBQUFhLE9BQUssRUFBQyxTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQWhCOztBQUVPLE1BQU1DLGdCQUFnQixHQUFHLENBQzlCO0FBQ0VDLE1BQUksRUFBRUYsT0FEUjtBQUVFRyxPQUFLLEVBQUUsMkJBRlQ7QUFHRUMsVUFBUSxFQUFFLG1CQUhaO0FBSUVDLFdBQVMsRUFBRTtBQUpiLENBRDhCLEVBTzlCO0FBQ0VILE1BQUksRUFBRUYsT0FEUjtBQUVFRyxPQUFLLEVBQUUsMEJBRlQ7QUFHRUMsVUFBUSxFQUFFLG1CQUhaO0FBSUVDLFdBQVMsRUFBRTtBQUpiLENBUDhCLEVBYTlCO0FBQ0VILE1BQUksRUFBRUYsT0FEUjtBQUVFRyxPQUFLLEVBQUUsNEJBRlQ7QUFHRUMsVUFBUSxFQUFFLGlCQUhaO0FBSUVDLFdBQVMsRUFBRTtBQUpiLENBYjhCLEVBbUI5QjtBQUNFSCxNQUFJLEVBQUVGLE9BRFI7QUFFRUcsT0FBSyxFQUFFLGlDQUZUO0FBR0VDLFVBQVEsRUFBRSxpQkFIWjtBQUlFQyxXQUFTLEVBQUU7QUFKYixDQW5COEIsRUF5QjlCO0FBQ0VILE1BQUksRUFBRUYsT0FEUjtBQUVFRyxPQUFLLEVBQUUsd0JBRlQ7QUFHRUMsVUFBUSxFQUFFLGlCQUhaO0FBSUVDLFdBQVMsRUFBRTtBQUpiLENBekI4QixDQUF6QjtBQWlDUCxNQUFNQyxpQkFBaUIsR0FBR0MseURBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSw4REFBdkI7S0FBTUYsaUI7QUFNQyxNQUFNRyxjQUFjLEdBQUcsTUFBTTtBQUFBOztBQUNsQyxRQUFNQyxlQUFlLEdBQUdDLHVFQUFhLENBQUMsOEJBQUQsQ0FBckM7QUFDQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSlYsZ0JBQWdCLENBQUNXLEdBQWpCLENBQ0MsQ0FBQztBQUFFVixRQUFGO0FBQVFHLGFBQVI7QUFBbUJGLFNBQW5CO0FBQTBCQztBQUExQixHQUFELEtBQTBDO0FBQ3hDLFdBQ0U7QUFBSSxTQUFHLEVBQUVELEtBQVQ7QUFBZ0IsZUFBUyxFQUFDLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFRSxNQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0QsSUFESCxFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDREQUFEO0FBQ0UsYUFBTyxFQUFDLElBRFY7QUFFRSxlQUFTLEVBQUMsSUFGWjtBQUdFLFdBQUssRUFBRTtBQUNMVyxhQUFLLEVBQUVSLFNBQVMsR0FDWixNQURZLEdBRVpLLGVBQWUsR0FDZixTQURlLEdBRWY7QUFMQyxPQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FXR1AsS0FYSCxFQVlHRSxTQUFTLElBQUksVUFaaEIsQ0FERixDQUZGLEVBa0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0QsUUFBTCxDQWxCRixDQUZGLENBREY7QUF5QkQsR0EzQkYsQ0FESSxDQUFQO0FBK0JELENBakNNOztHQUFNSyxjO1VBQ2FFLCtEOzs7TUFEYkYsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZTIxMzQ1M2EyYTFlZDlkNDZiYzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBGYUJyaWVmY2FzZSxcclxufSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgdXNlTWVkaWFRdWVyeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgRXhwSWNvbiA9IDxGYUJyaWVmY2FzZSBjb2xvcj1cIiMwMDc5NmJcIiAvPjtcclxuXHJcbmV4cG9ydCBjb25zdCBleHBlcmllbmNlc0ljb25zID0gW1xyXG4gIHtcclxuICAgIEljb246IEV4cEljb24sXHJcbiAgICBsYWJlbDogXCJXZWIgUHJvZHVjdGlvbiBRQSBBbmFseXN0XCIsXHJcbiAgICBsb2NhdGlvbjogXCJDZW50dXJ5IDIxIFN0b3Jlc1wiLFxyXG4gICAgaXNDdXJyZW50OiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEV4cEljb24sXHJcbiAgICBsYWJlbDogXCJTdXBwb3IgQ2VudGVyIFNwZWNpYWxpc3RcIixcclxuICAgIGxvY2F0aW9uOiBcIkNlbnR1cnkgMjEgU3RvcmVzXCIsXHJcbiAgICBpc0N1cnJlbnQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogRXhwSWNvbixcclxuICAgIGxhYmVsOiBcIk1pc3Npb24gQ29udHJvbCBTcGVjaWFsaXN0XCIsXHJcbiAgICBsb2NhdGlvbjogXCJUZWxlcGVyZm9ybWFuY2VcIixcclxuICAgIGlzQ3VycmVudDogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBFeHBJY29uLFxyXG4gICAgbGFiZWw6IFwiQ3VzdG9tZXIgU2VydmljZSBSZXByZXNlbnRhdGl2ZVwiLFxyXG4gICAgbG9jYXRpb246IFwiVGVsZXBlcmZvcm1hbmNlXCIsXHJcbiAgICBpc0N1cnJlbnQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogRXhwSWNvbixcclxuICAgIGxhYmVsOiBcIkNhbGwgQ2VudGVyIFFBIEFuYWx5c3RcIixcclxuICAgIGxvY2F0aW9uOiBcIkJNIFRlbGVzZXJ2aWNlc1wiLFxyXG4gICAgaXNDdXJyZW50OiBmYWxzZSxcclxuICB9LFxyXG5dIGFzIGNvbnN0O1xyXG5cclxuY29uc3QgRXhwZXJpZW5jZVNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBFeHBlcmllbmNlTGlzdCA9ICgpID0+IHtcclxuICBjb25zdCBwcmVmZXJzRGFya01vZGUgPSB1c2VNZWRpYVF1ZXJ5KFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKTtcclxuICByZXR1cm4gPHNwYW4+XHJcbiAgICB7ZXhwZXJpZW5jZXNJY29ucy5tYXAoXHJcbiAgICAgICh7IEljb24sIGlzQ3VycmVudCwgbGFiZWwsIGxvY2F0aW9uIH0pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGxpIGtleT17bGFiZWx9IGNsYXNzTmFtZT1cIm1iLTFcIj5cclxuICAgICAgICAgICAgey8qIDxJY29uIG5hbWU9e2V4cC5pY29ufSAvPiAqL31cclxuICAgICAgICAgICAgPEV4cGVyaWVuY2VTZWN0aW9uPlxyXG4gICAgICAgICAgICAgIHtJY29ufVxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoM1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGlzQ3VycmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImJsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBwcmVmZXJzRGFya01vZGVcclxuICAgICAgICAgICAgICAgICAgICAgID8gXCIjYzhjOGM4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCIjZmNmY2ZjXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAge2lzQ3VycmVudCAmJiBcIihBY3R1YWwpXCJ9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGVtPntsb2NhdGlvbn08L2VtPlxyXG4gICAgICAgICAgICA8L0V4cGVyaWVuY2VTZWN0aW9uPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApO1xyXG4gICAgICB9LFxyXG4gICAgKX1cclxuICA8L3NwYW4+O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9