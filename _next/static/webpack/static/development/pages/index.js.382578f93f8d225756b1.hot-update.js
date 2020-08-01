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
/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/shared */ "./src/components/shared/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _partials_AllProjects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partials/AllProjects */ "./src/components/pages/partials/AllProjects.tsx");
/* harmony import */ var _root_context_PagesContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @root/context/PagesContext */ "./src/context/PagesContext.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _root_styles_Custom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @root/styles/Custom */ "./src/styles/Custom.tsx");
/* harmony import */ var _root_styles_useSharedStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @root/styles/useSharedStyles */ "./src/styles/useSharedStyles.ts");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\pages\\HomepageLayout.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



// import SocialMediaEmbeds from "./partials/SocialMediaEmbeds";








const StyledItem = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].li.withConfig({
  displayName: "HomepageLayout__StyledItem",
  componentId: "e0q1th-0"
})(["padding-top:0;padding-bottom:6px;display:flex;justify-content:flex-start;align-items:center;text-align:left;font-size:1.5rem;border-bottom:1px solid #dcd5d5;"]);
_c = StyledItem;
const SummaryLi = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].li.withConfig({
  displayName: "HomepageLayout__SummaryLi",
  componentId: "e0q1th-1"
})(["padding-top:2px;padding-bottom:2px;padding-left:12px;text-align:start;font-size:1.16rem;&::before{content:\"\u2022 \";}"]);
_c2 = SummaryLi;
const ExperienceSection = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section.withConfig({
  displayName: "HomepageLayout__ExperienceSection",
  componentId: "e0q1th-2"
})(["display:flex;flex-direction:column;align-items:center;"]);
_c3 = ExperienceSection;
const Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"]).withConfig({
  displayName: "HomepageLayout__Title",
  componentId: "e0q1th-3"
})(["text-decoration:underline;margin-bottom:30px !important;"]);
_c4 = Title;
const SectionGridStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"]).withConfig({
  displayName: "HomepageLayout__SectionGridStyled",
  componentId: "e0q1th-4"
})(["margin-top:50px !important;margin-bottom:50px !important;"]);
_c5 = SectionGridStyled;
const SUMMARY_TEXTS = ["Proficient knowledge of HTML 5, CSS 3, JavaScript.", "Experieced with MS Excel.", "Excellent communication skills, organization skills, and excellent attention to detail.", "Proficient knowledge of accessibility standards (Section 508/WCAG 2.0 Level A and AA).", "Good understanding of assistive technologies (JAWS, NVDA, VoiceOver).", "6 years of call center and Workforce Management experience.", "Proficient experience in QA testing methodology.", "Proven ability to document issues and bugs."];
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.9,
      staggerDirection: -1
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    transform: "translateY(-100px)",
    transition: {
      duration: 2
    }
  },
  show: {
    opacity: 1,
    transform: "translateY(0)",
    ease: [0.17, 0.67, 0.83, 0.67]
  }
};

const HomepageLayout = () => {
  _s();

  const {
    changePage
  } = Object(_root_context_PagesContext__WEBPACK_IMPORTED_MODULE_6__["usePagesContext"])();
  const prefersDarkMode = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"])("(prefers-color-scheme: dark)");
  const classes = Object(_root_styles_useSharedStyles__WEBPACK_IMPORTED_MODULE_9__["default"])();
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
      lineNumber: 125,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    style: {
      fontSize: "1.1em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, SUMMARY_TEXTS.map(text => {
    return __jsx(SummaryLi, {
      key: text,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 18
      }
    }, text);
  })));

  const educationList = _constants__WEBPACK_IMPORTED_MODULE_2__["education"].map(({
    label,
    Icon
  }) => {
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
      key: label,
      variants: item,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 7
      }
    }, __jsx(StyledItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
      variants: item,
      whileTap: {
        scale: 1.2
      },
      whileHover: {
        scale: 1.2
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "subtitle1",
      component: "h3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 15
      }
    }, Icon, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }
    }, " "), label)))));
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
        lineNumber: 162,
        columnNumber: 9
      }
    }, __jsx(ExperienceSection, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 11
      }
    }, Icon, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
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
        lineNumber: 167,
        columnNumber: 15
      }
    }, label, isCurrent && "(Actual)")), __jsx("em", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 13
      }
    }, location)));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
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
      lineNumber: 195,
      columnNumber: 9
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
      lineNumber: 202,
      columnNumber: 11
    }
  }, __jsx(SectionGridStyled, {
    item: true,
    xs: 12,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 13
    }
  }, __jsx(Title, {
    variant: "h4",
    component: "h2",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 15
    }
  }, "Experiences"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 15
    }
  }, experienceList), " "), __jsx(SectionGridStyled, {
    item: true,
    xs: 10,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 13
    }
  }, __jsx(Title, {
    variant: "h4",
    component: "h2",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 15
    }
  }, "Skills"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 15
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
    variants: container,
    initial: "hidden",
    animate: "show",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 17
    }
  }, educationList)))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    classes: {
      root: classes.minPaddingX
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 13
    }
  }, summary)), __jsx(SectionGridStyled, {
    container: true,
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
    whileHover: {
      scale: 1.3
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }
  }, __jsx(_root_styles_Custom__WEBPACK_IMPORTED_MODULE_8__["BrandButton"], {
    color: "default",
    size: "large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 17
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_3__["NonStyledAnchor"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 19
    }
  }, "Showcase Projects".toUpperCase())))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    id: "projects",
    classes: {
      root: classes.minPaddingX
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 9
    }
  }, __jsx(_partials_AllProjects__WEBPACK_IMPORTED_MODULE_5__["default"], {
    showSliderControls: false,
    loop: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 11
    }
  }))));
};

_s(HomepageLayout, "Defjq1P8+oVxXof664iti7j+4z8=", false, function () {
  return [_root_context_PagesContext__WEBPACK_IMPORTED_MODULE_6__["usePagesContext"], _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"], _root_styles_useSharedStyles__WEBPACK_IMPORTED_MODULE_9__["default"]];
});

_c6 = HomepageLayout;
/* harmony default export */ __webpack_exports__["default"] = (HomepageLayout);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "StyledItem");
$RefreshReg$(_c2, "SummaryLi");
$RefreshReg$(_c3, "ExperienceSection");
$RefreshReg$(_c4, "Title");
$RefreshReg$(_c5, "SectionGridStyled");
$RefreshReg$(_c6, "HomepageLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Ib21lcGFnZUxheW91dC50c3giXSwibmFtZXMiOlsiU3R5bGVkSXRlbSIsInN0eWxlZCIsImxpIiwiU3VtbWFyeUxpIiwiRXhwZXJpZW5jZVNlY3Rpb24iLCJzZWN0aW9uIiwiVGl0bGUiLCJUeXBvZ3JhcGh5IiwiU2VjdGlvbkdyaWRTdHlsZWQiLCJHcmlkIiwiU1VNTUFSWV9URVhUUyIsImNvbnRhaW5lciIsImhpZGRlbiIsIm9wYWNpdHkiLCJzaG93IiwidHJhbnNpdGlvbiIsImRlbGF5Q2hpbGRyZW4iLCJzdGFnZ2VyRGlyZWN0aW9uIiwiaXRlbSIsInRyYW5zZm9ybSIsImR1cmF0aW9uIiwiZWFzZSIsIkhvbWVwYWdlTGF5b3V0IiwiY2hhbmdlUGFnZSIsInVzZVBhZ2VzQ29udGV4dCIsInByZWZlcnNEYXJrTW9kZSIsInVzZU1lZGlhUXVlcnkiLCJjbGFzc2VzIiwidXNlU2hhcmVkU3R5bGVzIiwidXNlRWZmZWN0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJzdW1tYXJ5IiwiZm9udFNpemUiLCJtYXAiLCJ0ZXh0IiwiZWR1Y2F0aW9uTGlzdCIsImVkdWNhdGlvbiIsImxhYmVsIiwiSWNvbiIsInNjYWxlIiwiZXhwZXJpZW5jZUxpc3QiLCJleHBlcmllbmNlcyIsImlzQ3VycmVudCIsImxvY2F0aW9uIiwiY29sb3IiLCJyb290IiwibWluUGFkZGluZ1giLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVQTtBQUtBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLE1BQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsRUFBVjtBQUFBO0FBQUE7QUFBQSxxS0FBaEI7S0FBTUYsVTtBQWVOLE1BQU1HLFNBQVMsR0FBR0YseURBQU0sQ0FBQ0MsRUFB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Q0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csb0JBQW9CUSxXQUFwQixFQURILENBREYsQ0FKRixDQURGLENBREYsQ0E1REYsQ0FERixFQStFRSxNQUFDLDJEQUFEO0FBQ0UsTUFBRSxFQUFDLFVBREw7QUFFRSxXQUFPLEVBQUU7QUFDUEYsVUFBSSxFQUFFdEIsT0FBTyxDQUFDdUI7QUFEUCxLQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLDZEQUFEO0FBQWEsc0JBQWtCLEVBQUUsS0FBakM7QUFBd0MsUUFBSSxFQUFFLEtBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQS9FRixDQUxGLENBREY7QUFpR0QsQ0FoTEQ7O0dBQU01QixjO1VBQ21CRSwwRSxFQUNDRSwrRCxFQUNSRSxvRTs7O01BSFpOLGM7QUFpTFNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4zODI1NzhmOTNmOGQyMjU3NTZiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIExpc3QsXHJcbiAgdXNlTWVkaWFRdWVyeSxcclxuICBQYXBlcixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZWR1Y2F0aW9uLFxyXG4gIGV4cGVyaWVuY2VzLFxyXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgSG9tZXBhZ2VIZWFkaW5nIGZyb20gXCIuL3BhcnRpYWxzL0hvbWVwYWdlSGVhZGluZ1wiO1xyXG4vLyBpbXBvcnQgU29jaWFsTWVkaWFFbWJlZHMgZnJvbSBcIi4vcGFydGlhbHMvU29jaWFsTWVkaWFFbWJlZHNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgTm9uU3R5bGVkQW5jaG9yLFxyXG4gIFByaW1hcnlCYWNrZ3JvdW5kU2VjdGlvbixcclxufSBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBBbGxQcm9qZWN0cyBmcm9tIFwiLi9wYXJ0aWFscy9BbGxQcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyB1c2VQYWdlc0NvbnRleHQgfSBmcm9tIFwiQHJvb3QvY29udGV4dC9QYWdlc0NvbnRleHRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBCcmFuZEJ1dHRvbiB9IGZyb20gXCJAcm9vdC9zdHlsZXMvQ3VzdG9tXCI7XHJcblxyXG5pbXBvcnQgdXNlU2hhcmVkU3R5bGVzIGZyb20gXCJAcm9vdC9zdHlsZXMvdXNlU2hhcmVkU3R5bGVzXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5jb25zdCBTdHlsZWRJdGVtID0gc3R5bGVkLmxpYFxyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkNWQ1O1xyXG4gICAgLyogdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0OyAqL1xyXG4gICAgLyogJjpob3ZlcntcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCk7XHJcbiAgICB9ICovXHJcbmA7XHJcblxyXG5jb25zdCBTdW1tYXJ5TGkgPSBzdHlsZWQubGlgXHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgZm9udC1zaXplOiAxLjE2cmVtO1xyXG4gICAgJjo6YmVmb3Jle1xyXG4gICAgICBjb250ZW50OiBcIuKAoiBcIjtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IEV4cGVyaWVuY2VTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZChUeXBvZ3JhcGh5KTx7IGNvbXBvbmVudDogc3RyaW5nIH0+YFxyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcclxuYDtcclxuXHJcbmNvbnN0IFNlY3Rpb25HcmlkU3R5bGVkID0gc3R5bGVkKEdyaWQpYFxyXG4gIG1hcmdpbi10b3A6IDUwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbmA7XHJcblxyXG5jb25zdCBTVU1NQVJZX1RFWFRTID0gW1xyXG4gIFwiUHJvZmljaWVudCBrbm93bGVkZ2Ugb2YgSFRNTCA1LCBDU1MgMywgSmF2YVNjcmlwdC5cIixcclxuICBcIkV4cGVyaWVjZWQgd2l0aCBNUyBFeGNlbC5cIixcclxuICBcIkV4Y2VsbGVudCBjb21tdW5pY2F0aW9uIHNraWxscywgb3JnYW5pemF0aW9uIHNraWxscywgYW5kIGV4Y2VsbGVudCBhdHRlbnRpb24gdG8gZGV0YWlsLlwiLFxyXG4gIFwiUHJvZmljaWVudCBrbm93bGVkZ2Ugb2YgYWNjZXNzaWJpbGl0eSBzdGFuZGFyZHMgKFNlY3Rpb24gNTA4L1dDQUcgMi4wIExldmVsIEEgYW5kIEFBKS5cIixcclxuICBcIkdvb2QgdW5kZXJzdGFuZGluZyBvZiBhc3Npc3RpdmUgdGVjaG5vbG9naWVzIChKQVdTLCBOVkRBLCBWb2ljZU92ZXIpLlwiLFxyXG4gIFwiNiB5ZWFycyBvZiBjYWxsIGNlbnRlciBhbmQgV29ya2ZvcmNlIE1hbmFnZW1lbnQgZXhwZXJpZW5jZS5cIixcclxuICBcIlByb2ZpY2llbnQgZXhwZXJpZW5jZSBpbiBRQSB0ZXN0aW5nIG1ldGhvZG9sb2d5LlwiLFxyXG4gIFwiUHJvdmVuIGFiaWxpdHkgdG8gZG9jdW1lbnQgaXNzdWVzIGFuZCBidWdzLlwiLFxyXG5dO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0ge1xyXG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwIH0sXHJcbiAgc2hvdzoge1xyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgZGVsYXlDaGlsZHJlbjogMC45LFxyXG4gICAgICBzdGFnZ2VyRGlyZWN0aW9uOiAtMSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGl0ZW0gPSB7XHJcbiAgaGlkZGVuOiB7XHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTEwMHB4KVwiLFxyXG4gICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMiB9LFxyXG4gIH0sXHJcbiAgc2hvdzoge1xyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKDApXCIsXHJcbiAgICBlYXNlOiBbMC4xNywgMC42NywgMC44MywgMC42N10sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IEhvbWVwYWdlTGF5b3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY2hhbmdlUGFnZSB9ID0gdXNlUGFnZXNDb250ZXh0KCk7XHJcbiAgY29uc3QgcHJlZmVyc0RhcmtNb2RlID0gdXNlTWVkaWFRdWVyeShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIik7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVNoYXJlZFN0eWxlcygpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjaGFuZ2VQYWdlKFwiSG9tZVwiKTtcclxuICB9LCBbY2hhbmdlUGFnZV0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzdW1tYXJ5ID0gKFxyXG4gICAgPEdyaWQgaXRlbT5cclxuICAgICAgPExpc3Qgc3R5bGU9e3sgZm9udFNpemU6IFwiMS4xZW1cIiB9fT5cclxuICAgICAgICB7U1VNTUFSWV9URVhUUy5tYXAoKHRleHQpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8U3VtbWFyeUxpIGtleT17dGV4dH0+e3RleHR9PC9TdW1tYXJ5TGk+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZWR1Y2F0aW9uTGlzdCA9IGVkdWNhdGlvbi5tYXAoKHsgbGFiZWwsIEljb24gfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICBrZXk9e2xhYmVsfVxyXG4gICAgICAgIHZhcmlhbnRzPXtpdGVtfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFN0eWxlZEl0ZW0+XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIHZhcmlhbnRzPXtpdGVtfVxyXG4gICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAxLjIgfX1cclxuICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb21wb25lbnQ9XCJoM1wiPlxyXG4gICAgICAgICAgICAgICAge0ljb259XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57XCIgXCJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgPC9TdHlsZWRJdGVtPlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBleHBlcmllbmNlTGlzdCA9IGV4cGVyaWVuY2VzLm1hcChcclxuICAgICh7IEljb24sIGlzQ3VycmVudCwgbGFiZWwsIGxvY2F0aW9uIH0pID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8bGkga2V5PXtsYWJlbH0gY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgey8qIDxJY29uIG5hbWU9e2V4cC5pY29ufSAvPiAqL31cclxuICAgICAgICAgIDxFeHBlcmllbmNlU2VjdGlvbj5cclxuICAgICAgICAgICAge0ljb259XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoM1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogaXNDdXJyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogcHJlZmVyc0RhcmtNb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIiNjOGM4YzhcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCIjZmNmY2ZjXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgIHtpc0N1cnJlbnQgJiYgXCIoQWN0dWFsKVwifVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxlbT57bG9jYXRpb259PC9lbT5cclxuICAgICAgICAgIDwvRXhwZXJpZW5jZVNlY3Rpb24+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICB7LyogPFByaW1hcnlCYWNrZ3JvdW5kU2VjdGlvbj5cclxuICAgICAgICA8SG9tZXBhZ2VIZWFkaW5nIC8+XHJcbiAgICAgIDwvUHJpbWFyeUJhY2tncm91bmRTZWN0aW9uPiAqL31cclxuXHJcbiAgICAgIDxQYXBlcj5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBzcGFjaW5nPXswfVxyXG4gICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCJcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U2VjdGlvbkdyaWRTdHlsZWRcclxuICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgIHNtPXs0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDRcIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDJcIlxyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEV4cGVyaWVuY2VzXHJcbiAgICAgICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIHtleHBlcmllbmNlTGlzdH1cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICA8L1NlY3Rpb25HcmlkU3R5bGVkPlxyXG4gICAgICAgICAgICA8U2VjdGlvbkdyaWRTdHlsZWRcclxuICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgeHM9ezEwfVxyXG4gICAgICAgICAgICAgIHNtPXs0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRpdGxlIHZhcmlhbnQ9XCJoNFwiIGNvbXBvbmVudD1cImgyXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFNraWxsc1xyXG4gICAgICAgICAgICAgIDwvVGl0bGU+XHJcblxyXG4gICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJzaG93XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2VkdWNhdGlvbkxpc3R9XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8L1NlY3Rpb25HcmlkU3R5bGVkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLm1pblBhZGRpbmdYLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c3VtbWFyeX1cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8U2VjdGlvbkdyaWRTdHlsZWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4zIH19PlxyXG4gICAgICAgICAgICAgIDxCcmFuZEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8Tm9uU3R5bGVkQW5jaG9yPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcIlNob3djYXNlIFByb2plY3RzXCIudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgPC9Ob25TdHlsZWRBbmNob3I+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9CcmFuZEJ1dHRvbj5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPC9TZWN0aW9uR3JpZFN0eWxlZD5cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgIGlkPVwicHJvamVjdHNcIlxyXG4gICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICByb290OiBjbGFzc2VzLm1pblBhZGRpbmdYLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QWxsUHJvamVjdHMgc2hvd1NsaWRlckNvbnRyb2xzPXtmYWxzZX0gbG9vcD17ZmFsc2V9IC8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICAgIHsvKiA8U29jaWFsTWVkaWFFbWJlZHMgLz4gKi99XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9