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
    color: "primary",
    size: "large",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Ib21lcGFnZUxheW91dC50c3giXSwibmFtZXMiOlsiU3R5bGVkSXRlbSIsInN0eWxlZCIsImxpIiwiU3VtbWFyeUxpIiwiRXhwZXJpZW5jZVNlY3Rpb24iLCJzZWN0aW9uIiwiVGl0bGUiLCJUeXBvZ3JhcGh5IiwiU1VNTUFSWV9URVhUUyIsInZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInZpc2libGUiLCJIb21lcGFnZUxheW91dCIsImNoYW5nZVBhZ2UiLCJ1c2VQYWdlc0NvbnRleHQiLCJwcmVmZXJzRGFya01vZGUiLCJ1c2VNZWRpYVF1ZXJ5IiwidXNlRWZmZWN0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJzdW1tYXJ5IiwiZm9udFNpemUiLCJtYXAiLCJ0ZXh0IiwiZWR1Y2F0aW9uTGlzdCIsImVkdWNhdGlvbiIsImxhYmVsIiwiSWNvbiIsImV4cGVyaWVuY2VMaXN0IiwiZXhwZXJpZW5jZXMiLCJpc0N1cnJlbnQiLCJsb2NhdGlvbiIsImNvbG9yIiwicGFkZGluZyIsInRvVXBwZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBVUE7Q0FLQTs7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEseU9BQWhCO0tBQU1GLFU7QUFlTixNQUFNRyxTQUFTLEdBQUdGLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsK0hBQWY7TUFBTUMsUztBQVdOLE1BQU1DLGlCQUFpQixHQUFHSCx5REFBTSxDQUFDSSxPQUFWO0FBQUE7QUFBQTtBQUFBLDhEQUF2QjtNQUFNRCxpQjtBQU1OLE1BQU1FLEtBQUssR0FBR0wsaUVBQU0sQ0FBQ00sNERBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxrQ0FB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QXJDRixDQURGLENBREYsRUFtREUsTUFBQywwREFBRDtBQUFTLFNBQUssRUFBRTtBQUFFRCxhQUFPLEVBQUU7QUFBWCxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFXLE1BQUUsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBbkRGLENBSkYsQ0FERjtBQWlFRCxDQXJJRDs7R0FBTXhCLGM7VUFDbUJFLDBFLEVBQ0NFLCtEOzs7TUFGcEJKLGM7QUFzSVNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5hMTM3M2MyMzU5MzU1MDVhZDg4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIExpc3QsXHJcbiAgdXNlTWVkaWFRdWVyeSxcclxuICBQYXBlcixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZWR1Y2F0aW9uLFxyXG4gIGV4cGVyaWVuY2VzLFxyXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgSG9tZXBhZ2VIZWFkaW5nIGZyb20gXCIuL3BhcnRpYWxzL0hvbWVwYWdlSGVhZGluZ1wiO1xyXG4vLyBpbXBvcnQgU29jaWFsTWVkaWFFbWJlZHMgZnJvbSBcIi4vcGFydGlhbHMvU29jaWFsTWVkaWFFbWJlZHNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgU2VnbWVudCxcclxuICBTdHlsZWRMaW5rLFxyXG4gIFByaW1hcnlCYWNrZ3JvdW5kU2VjdGlvbixcclxufSBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBBbGxQcm9qZWN0cyBmcm9tIFwiLi9wYXJ0aWFscy9BbGxQcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyB1c2VQYWdlc0NvbnRleHQgfSBmcm9tIFwiQHJvb3QvY29udGV4dC9QYWdlc0NvbnRleHRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBCcmFuZEJ1dHRvbiB9IGZyb20gXCJAcm9vdC9zdHlsZXMvQ3VzdG9tXCI7XHJcbmNvbnN0IFN0eWxlZEl0ZW0gPSBzdHlsZWQubGlgXHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2Q1ZDU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4KTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFN1bW1hcnlMaSA9IHN0eWxlZC5saWBcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBmb250LXNpemU6IDEuMTZyZW07XHJcbiAgICAmOjpiZWZvcmV7XHJcbiAgICAgIGNvbnRlbnQ6IFwi4oCiIFwiO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgRXhwZXJpZW5jZVNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkKFR5cG9ncmFwaHkpPHsgY29tcG9uZW50OiBzdHJpbmcgfT5gXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbmA7XHJcblxyXG5jb25zdCBTVU1NQVJZX1RFWFRTID0gW1xyXG4gIFwiUHJvZmljaWVudCBrbm93bGVkZ2Ugb2YgSFRNTCA1LCBDU1MgMywgSmF2YVNjcmlwdC5cIixcclxuICBcIkV4cGVyaWVjZWQgd2l0aCBNUyBFeGNlbC5cIixcclxuICBcIkV4Y2VsbGVudCBjb21tdW5pY2F0aW9uIHNraWxscywgb3JnYW5pemF0aW9uIHNraWxscywgYW5kIGV4Y2VsbGVudCBhdHRlbnRpb24gdG8gZGV0YWlsLlwiLFxyXG4gIFwiUHJvZmljaWVudCBrbm93bGVkZ2Ugb2YgYWNjZXNzaWJpbGl0eSBzdGFuZGFyZHMgKFNlY3Rpb24gNTA4L1dDQUcgMi4wIExldmVsIEEgYW5kIEFBKS5cIixcclxuICBcIkdvb2QgdW5kZXJzdGFuZGluZyBvZiBhc3Npc3RpdmUgdGVjaG5vbG9naWVzIChKQVdTLCBOVkRBLCBWb2ljZU92ZXIpLlwiLFxyXG4gIFwiNiB5ZWFycyBvZiBjYWxsIGNlbnRlciBhbmQgV29ya2ZvcmNlIE1hbmFnZW1lbnQgZXhwZXJpZW5jZS5cIixcclxuICBcIlByb2ZpY2llbnQgZXhwZXJpZW5jZSBpbiBRQSB0ZXN0aW5nIG1ldGhvZG9sb2d5LlwiLFxyXG4gIFwiUHJvdmVuIGFiaWxpdHkgdG8gZG9jdW1lbnQgaXNzdWVzIGFuZCBidWdzLlwiLFxyXG5dO1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAuNSB9LFxyXG4gIHZpc2libGU6IHsgb3BhY2l0eTogMSB9LFxyXG59O1xyXG5cclxuY29uc3QgSG9tZXBhZ2VMYXlvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBjaGFuZ2VQYWdlIH0gPSB1c2VQYWdlc0NvbnRleHQoKTtcclxuICBjb25zdCBwcmVmZXJzRGFya01vZGUgPSB1c2VNZWRpYVF1ZXJ5KFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoYW5nZVBhZ2UoXCJIb21lXCIpO1xyXG4gIH0sIFtjaGFuZ2VQYWdlXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHN1bW1hcnkgPSAoXHJcbiAgICA8R3JpZCBpdGVtPlxyXG4gICAgICA8TGlzdCBzdHlsZT17eyBmb250U2l6ZTogXCIxLjFlbVwiIH19PlxyXG4gICAgICAgIHtTVU1NQVJZX1RFWFRTLm1hcCgodGV4dCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxTdW1tYXJ5TGkga2V5PXt0ZXh0fT57dGV4dH08L1N1bW1hcnlMaT47XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG5cclxuICBjb25zdCBlZHVjYXRpb25MaXN0ID0gZWR1Y2F0aW9uLm1hcCgoeyBsYWJlbCwgSWNvbiB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U3R5bGVkSXRlbSBrZXk9e2xhYmVsfT5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbXBvbmVudD1cImgzXCI+XHJcbiAgICAgICAgICAgIHtJY29ufVxyXG4gICAgICAgICAgICA8c3Bhbj57XCIgXCJ9PC9zcGFuPlxyXG4gICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvU3R5bGVkSXRlbT5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGV4cGVyaWVuY2VMaXN0ID0gZXhwZXJpZW5jZXMubWFwKFxyXG4gICAgKHsgSWNvbiwgaXNDdXJyZW50LCBsYWJlbCwgbG9jYXRpb24gfSkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBrZXk9e2xhYmVsfSBjbGFzc05hbWU9XCJtYi0xXCI+XHJcbiAgICAgICAgICB7LyogPEljb24gbmFtZT17ZXhwLmljb259IC8+ICovfVxyXG4gICAgICAgICAge0ljb259XHJcbiAgICAgICAgICA8RXhwZXJpZW5jZVNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoM1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogaXNDdXJyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogcHJlZmVyc0RhcmtNb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIiNjOGM4YzhcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCIjZmNmY2ZjXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgIHtpc0N1cnJlbnQgJiYgXCIoQWN0dWFsKVwifVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxlbT57bG9jYXRpb259PC9lbT5cclxuICAgICAgICAgIDwvRXhwZXJpZW5jZVNlY3Rpb24+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8UHJpbWFyeUJhY2tncm91bmRTZWN0aW9uPlxyXG4gICAgICAgIDxIb21lcGFnZUhlYWRpbmcgLz5cclxuICAgICAgPC9QcmltYXJ5QmFja2dyb3VuZFNlY3Rpb24+XHJcbiAgICAgIDxQYXBlcj5cclxuICAgICAgICA8U2VnbWVudCBzdHlsZT17eyBwYWRkaW5nOiBcIjJlbSAwZW1cIiB9fT5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBzcGFjaW5nPXswfVxyXG4gICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgICBqdXN0aWZ5PVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCJcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlIHZhcmlhbnQ9XCJoNFwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgIEV4cGVyaWVuY2VzXHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIHtleHBlcmllbmNlTGlzdH1cclxuICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IHNtPXs0fT5cclxuICAgICAgICAgICAgICAgIDxUaXRsZSB2YXJpYW50PVwiaDRcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICBTa2lsbHNcclxuICAgICAgICAgICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgICAge2VkdWNhdGlvbkxpc3R9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiZmxleC1zdGFydFwiPlxyXG4gICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICB7c3VtbWFyeX1cclxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxCcmFuZEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwibGFyZ2VcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPiAqL31cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgPFN0eWxlZExpbms+e1wiU2hvd2Nhc2UgUHJvamVjdHNcIi50b1VwcGVyQ2FzZSgpfTwvU3R5bGVkTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIHsvKiA8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgPC9CcmFuZEJ1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICAgICAgPFNlZ21lbnQgc3R5bGU9e3sgcGFkZGluZzogXCIyZW0gMGVtXCIgfX0+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIGlkPVwicHJvamVjdHNcIj5cclxuICAgICAgICAgICAgPEFsbFByb2plY3RzIC8+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICAgIHsvKiA8U29jaWFsTWVkaWFFbWJlZHMgLz4gKi99XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9