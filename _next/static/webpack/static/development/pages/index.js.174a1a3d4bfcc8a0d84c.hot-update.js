webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/pages/HomepageLayout.tsx":
/*!*************************************************!*\
  !*** ./src/components/pages/HomepageLayout.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/components/pages/constants/index.tsx");
/* harmony import */ var _partials_HomepageHeading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/HomepageHeading */ "./src/components/pages/partials/HomepageHeading.tsx");
/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/shared */ "./src/components/shared/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _partials_AllProjects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partials/AllProjects */ "./src/components/pages/partials/AllProjects.tsx");
/* harmony import */ var _root_context_PagesContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @root/context/PagesContext */ "./src/context/PagesContext.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _root_styles_Custom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @root/styles/Custom */ "./src/styles/Custom.tsx");
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\pages\\HomepageLayout.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import SocialMediaEmbeds from "./partials/SocialMediaEmbeds";







const StyledItem = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].li.withConfig({
  displayName: "HomepageLayout__StyledItem",
  componentId: "e0q1th-0"
})(["padding-top:0;padding-bottom:6px;display:flex;justify-content:flex-start;align-items:center;text-align:left;font-size:1.5rem;border-bottom:1px solid #dcd5d5;transition:all 100ms ease-in-out;&:hover{transform:translate(10px);}"]);
_c = StyledItem;
const SummaryLi = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].li.withConfig({
  displayName: "HomepageLayout__SummaryLi",
  componentId: "e0q1th-1"
})(["padding-top:2px;padding-bottom:2px;padding-left:12px;text-align:start;font-size:1.16rem;&::before{content:\"\u2022 \";}"]);
_c2 = SummaryLi;
const ExperienceSection = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].section.withConfig({
  displayName: "HomepageLayout__ExperienceSection",
  componentId: "e0q1th-2"
})(["display:flex;flex-direction:column;align-items:center;"]);
_c3 = ExperienceSection;
const Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"]).withConfig({
  displayName: "HomepageLayout__Title",
  componentId: "e0q1th-3"
})(["text-decoration:underline;"]);
_c4 = Title;
const SUMMARY_TEXTS = ["Proficient knowledge of HTML 5, CSS 3, JavaScript.", "Experieced with MS Excel.", "Excellent communication skills, organization skills, and excellent attention to detail.", "Proficient knowledge of accessibility standards (Section 508/WCAG 2.0 Level A and AA).", "Good understanding of assistive technologies (JAWS, NVDA, VoiceOver).", "6 years of call center and Workforce Management experience.", "Proficient experience in QA testing methodology.", "Proven ability to document issues and bugs."];
const variants = {
  hidden: {
    opacity: 0.5
  },
  visible: {
    opacity: 1
  }
};

const HomepageLayout = () => {
  _s();

  const {
    changePage
  } = Object(_root_context_PagesContext__WEBPACK_IMPORTED_MODULE_7__["usePagesContext"])();
  const prefersDarkMode = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"])("(prefers-color-scheme: dark)");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    changePage("Home");
  }, [changePage]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);

  const summary = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    style: {
      fontSize: "1.1em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, SUMMARY_TEXTS.map(text => {
    return __jsx(SummaryLi, {
      key: text,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 18
      }
    }, text);
  })));

  const educationList = _constants__WEBPACK_IMPORTED_MODULE_2__["education"].map(({
    label,
    Icon
  }) => {
    return __jsx(StyledItem, {
      key: label,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 7
      }
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "subtitle1",
      component: "h3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }
    }, Icon, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }
    }, " "), label)));
  });
  const experienceList = _constants__WEBPACK_IMPORTED_MODULE_2__["experiences"].map(({
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
        lineNumber: 123,
        columnNumber: 9
      }
    }, Icon, __jsx(ExperienceSection, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 11
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h6",
      component: "h3",
      style: {
        color: isCurrent ? "blue" : prefersDarkMode ? "#c8c8c8" : "#fcfcfc"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 15
      }
    }, label, isCurrent && "(Actual)")), __jsx("em", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 13
      }
    }, location)));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 5
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_4__["PrimaryBackgroundSection"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, __jsx(_partials_HomepageHeading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
    style: {
      padding: "2em 0em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 0,
    direction: "row",
    justify: "flex-start",
    alignItems: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    direction: "row",
    justify: "space-around",
    alignItems: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 15
    }
  }, __jsx(Title, {
    variant: "h4",
    component: "h2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, "Experiences"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  }, experienceList), " "), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 10,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 15
    }
  }, __jsx(Title, {
    variant: "h4",
    component: "h2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }, "Skills"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, educationList))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 15
    }
  }, summary)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  }, __jsx(_root_styles_Custom__WEBPACK_IMPORTED_MODULE_9__["BrandButton"], {
    color: "tertiary",
    size: "large",
    variant: "outlined",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 17
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_4__["StyledLink"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 19
    }
  }, "Showcase Projects".toUpperCase())))))), __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
    style: {
      padding: "2em 0em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    id: "projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 11
    }
  }, __jsx(_partials_AllProjects__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }
  })))));
};

_s(HomepageLayout, "OEf6p7nUWUH3NtAdDHXYHXiwQ0Q=", false, function () {
  return [_root_context_PagesContext__WEBPACK_IMPORTED_MODULE_7__["usePagesContext"], _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"]];
});

_c5 = HomepageLayout;
/* harmony default export */ __webpack_exports__["default"] = (HomepageLayout);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "StyledItem");
$RefreshReg$(_c2, "SummaryLi");
$RefreshReg$(_c3, "ExperienceSection");
$RefreshReg$(_c4, "Title");
$RefreshReg$(_c5, "HomepageLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Ib21lcGFnZUxheW91dC50c3giXSwibmFtZXMiOlsiU3R5bGVkSXRlbSIsInN0eWxlZCIsImxpIiwiU3VtbWFyeUxpIiwiRXhwZXJpZW5jZVNlY3Rpb24iLCJzZWN0aW9uIiwiVGl0bGUiLCJUeXBvZ3JhcGh5IiwiU1VNTUFSWV9URVhUUyIsInZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInZpc2libGUiLCJIb21lcGFnZUxheW91dCIsImNoYW5nZVBhZ2UiLCJ1c2VQYWdlc0NvbnRleHQiLCJwcmVmZXJzRGFya01vZGUiLCJ1c2VNZWRpYVF1ZXJ5IiwidXNlRWZmZWN0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJzdW1tYXJ5IiwiZm9udFNpemUiLCJtYXAiLCJ0ZXh0IiwiZWR1Y2F0aW9uTGlzdCIsImVkdWNhdGlvbiIsImxhYmVsIiwiSWNvbiIsImV4cGVyaWVuY2VMaXN0IiwiZXhwZXJpZW5jZXMiLCJpc0N1cnJlbnQiLCJsb2NhdGlvbiIsImNvbG9yIiwicGFkZGluZyIsInRvVXBwZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBVUE7Q0FLQTs7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEseU9BQWhCO0tBQU1GLFU7QUFlTixNQUFNRyxTQUFTLEdBQUdGLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsK0hBQWY7TUFBTUMsUztBQVdOLE1BQU1DLGlCQUFpQixHQUFHSCx5REFBTSxDQUFDSSxPQUFWO0FBQUE7QUFBQTtBQUFBLDhEQUF2QjtNQUFNRCxpQjtBQU1OLE1BQU1FLEtBQUssR0FBR0wsaUVBQU0sQ0FBQ00sNERBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxrQ0FB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LEVBQWIsQ0FERixDQUZGLENBREYsQ0FyQ0YsQ0FERixDQURGLEVBbURFLE1BQUMsMERBQUQ7QUFBUyxTQUFLLEVBQUU7QUFBRUQsYUFBTyxFQUFFO0FBQVgsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBVyxNQUFFLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQW5ERixDQUpGLENBREY7QUFpRUQsQ0FySUQ7O0dBQU14QixjO1VBQ21CRSwwRSxFQUNDRSwrRDs7O01BRnBCSixjO0FBc0lTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMTc0YTFhM2Q0YmZjYzhhMGQ4NGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ29udGFpbmVyLFxyXG4gIEdyaWQsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBMaXN0LFxyXG4gIHVzZU1lZGlhUXVlcnksXHJcbiAgUGFwZXIsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGVkdWNhdGlvbixcclxuICBleHBlcmllbmNlcyxcclxufSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IEhvbWVwYWdlSGVhZGluZyBmcm9tIFwiLi9wYXJ0aWFscy9Ib21lcGFnZUhlYWRpbmdcIjtcclxuLy8gaW1wb3J0IFNvY2lhbE1lZGlhRW1iZWRzIGZyb20gXCIuL3BhcnRpYWxzL1NvY2lhbE1lZGlhRW1iZWRzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIFNlZ21lbnQsXHJcbiAgU3R5bGVkTGluayxcclxuICBQcmltYXJ5QmFja2dyb3VuZFNlY3Rpb24sXHJcbn0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgQWxsUHJvamVjdHMgZnJvbSBcIi4vcGFydGlhbHMvQWxsUHJvamVjdHNcIjtcclxuaW1wb3J0IHsgdXNlUGFnZXNDb250ZXh0IH0gZnJvbSBcIkByb290L2NvbnRleHQvUGFnZXNDb250ZXh0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgQnJhbmRCdXR0b24gfSBmcm9tIFwiQHJvb3Qvc3R5bGVzL0N1c3RvbVwiO1xyXG5jb25zdCBTdHlsZWRJdGVtID0gc3R5bGVkLmxpYFxyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkNWQ1O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdW1tYXJ5TGkgPSBzdHlsZWQubGlgXHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgZm9udC1zaXplOiAxLjE2cmVtO1xyXG4gICAgJjo6YmVmb3Jle1xyXG4gICAgICBjb250ZW50OiBcIuKAoiBcIjtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IEV4cGVyaWVuY2VTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZChUeXBvZ3JhcGh5KTx7IGNvbXBvbmVudDogc3RyaW5nIH0+YFxyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5gO1xyXG5cclxuY29uc3QgU1VNTUFSWV9URVhUUyA9IFtcclxuICBcIlByb2ZpY2llbnQga25vd2xlZGdlIG9mIEhUTUwgNSwgQ1NTIDMsIEphdmFTY3JpcHQuXCIsXHJcbiAgXCJFeHBlcmllY2VkIHdpdGggTVMgRXhjZWwuXCIsXHJcbiAgXCJFeGNlbGxlbnQgY29tbXVuaWNhdGlvbiBza2lsbHMsIG9yZ2FuaXphdGlvbiBza2lsbHMsIGFuZCBleGNlbGxlbnQgYXR0ZW50aW9uIHRvIGRldGFpbC5cIixcclxuICBcIlByb2ZpY2llbnQga25vd2xlZGdlIG9mIGFjY2Vzc2liaWxpdHkgc3RhbmRhcmRzIChTZWN0aW9uIDUwOC9XQ0FHIDIuMCBMZXZlbCBBIGFuZCBBQSkuXCIsXHJcbiAgXCJHb29kIHVuZGVyc3RhbmRpbmcgb2YgYXNzaXN0aXZlIHRlY2hub2xvZ2llcyAoSkFXUywgTlZEQSwgVm9pY2VPdmVyKS5cIixcclxuICBcIjYgeWVhcnMgb2YgY2FsbCBjZW50ZXIgYW5kIFdvcmtmb3JjZSBNYW5hZ2VtZW50IGV4cGVyaWVuY2UuXCIsXHJcbiAgXCJQcm9maWNpZW50IGV4cGVyaWVuY2UgaW4gUUEgdGVzdGluZyBtZXRob2RvbG9neS5cIixcclxuICBcIlByb3ZlbiBhYmlsaXR5IHRvIGRvY3VtZW50IGlzc3VlcyBhbmQgYnVncy5cIixcclxuXTtcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLjUgfSxcclxuICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEgfSxcclxufTtcclxuXHJcbmNvbnN0IEhvbWVwYWdlTGF5b3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY2hhbmdlUGFnZSB9ID0gdXNlUGFnZXNDb250ZXh0KCk7XHJcbiAgY29uc3QgcHJlZmVyc0RhcmtNb2RlID0gdXNlTWVkaWFRdWVyeShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjaGFuZ2VQYWdlKFwiSG9tZVwiKTtcclxuICB9LCBbY2hhbmdlUGFnZV0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzdW1tYXJ5ID0gKFxyXG4gICAgPEdyaWQgaXRlbT5cclxuICAgICAgPExpc3Qgc3R5bGU9e3sgZm9udFNpemU6IFwiMS4xZW1cIiB9fT5cclxuICAgICAgICB7U1VNTUFSWV9URVhUUy5tYXAoKHRleHQpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8U3VtbWFyeUxpIGtleT17dGV4dH0+e3RleHR9PC9TdW1tYXJ5TGk+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZWR1Y2F0aW9uTGlzdCA9IGVkdWNhdGlvbi5tYXAoKHsgbGFiZWwsIEljb24gfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN0eWxlZEl0ZW0ga2V5PXtsYWJlbH0+XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb21wb25lbnQ9XCJoM1wiPlxyXG4gICAgICAgICAgICB7SWNvbn1cclxuICAgICAgICAgICAgPHNwYW4+e1wiIFwifTwvc3Bhbj5cclxuICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L1N0eWxlZEl0ZW0+XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBleHBlcmllbmNlTGlzdCA9IGV4cGVyaWVuY2VzLm1hcChcclxuICAgICh7IEljb24sIGlzQ3VycmVudCwgbGFiZWwsIGxvY2F0aW9uIH0pID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8bGkga2V5PXtsYWJlbH0gY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgey8qIDxJY29uIG5hbWU9e2V4cC5pY29ufSAvPiAqL31cclxuICAgICAgICAgIHtJY29ufVxyXG4gICAgICAgICAgPEV4cGVyaWVuY2VTZWN0aW9uPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IGlzQ3VycmVudFxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJibHVlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IHByZWZlcnNEYXJrTW9kZVxyXG4gICAgICAgICAgICAgICAgICAgID8gXCIjYzhjOGM4XCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiI2ZjZmNmY1wiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICB7aXNDdXJyZW50ICYmIFwiKEFjdHVhbClcIn1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZW0+e2xvY2F0aW9ufTwvZW0+XHJcbiAgICAgICAgICA8L0V4cGVyaWVuY2VTZWN0aW9uPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPFByaW1hcnlCYWNrZ3JvdW5kU2VjdGlvbj5cclxuICAgICAgICA8SG9tZXBhZ2VIZWFkaW5nIC8+XHJcbiAgICAgIDwvUHJpbWFyeUJhY2tncm91bmRTZWN0aW9uPlxyXG4gICAgICA8UGFwZXI+XHJcbiAgICAgICAgPFNlZ21lbnQgc3R5bGU9e3sgcGFkZGluZzogXCIyZW0gMGVtXCIgfX0+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgc3BhY2luZz17MH1cclxuICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgICAganVzdGlmeT1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWFyb3VuZFwiXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cclxuICAgICAgICAgICAgICAgIDxUaXRsZSB2YXJpYW50PVwiaDRcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICBFeHBlcmllbmNlc1xyXG4gICAgICAgICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgICB7ZXhwZXJpZW5jZUxpc3R9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBzbT17NH0+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGUgdmFyaWFudD1cImg0XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgICAgICAgU2tpbGxzXHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIHtlZHVjYXRpb25MaXN0fVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImZsZXgtc3RhcnRcIj5cclxuICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAge3N1bW1hcnl9XHJcbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8QnJhbmRCdXR0b24gY29sb3I9XCJ0ZXJ0aWFyeVwiIHNpemU9XCJsYXJnZVwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPiAqL31cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgPFN0eWxlZExpbms+e1wiU2hvd2Nhc2UgUHJvamVjdHNcIi50b1VwcGVyQ2FzZSgpfTwvU3R5bGVkTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIHsvKiA8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgPC9CcmFuZEJ1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICAgICAgPFNlZ21lbnQgc3R5bGU9e3sgcGFkZGluZzogXCIyZW0gMGVtXCIgfX0+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIGlkPVwicHJvamVjdHNcIj5cclxuICAgICAgICAgICAgPEFsbFByb2plY3RzIC8+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICAgIHsvKiA8U29jaWFsTWVkaWFFbWJlZHMgLz4gKi99XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9