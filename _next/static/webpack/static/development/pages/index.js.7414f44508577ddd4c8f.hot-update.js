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
    opacity: 0,
    transform: "translateY(-100px)"
  },
  show: {
    opacity: 1,
    transform: "translateY(0)",
    transition: {
      delayChildren: 0.9,
      staggerDirection: 1
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 2
    }
  },
  show: {
    opacity: 1
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
      lineNumber: 118,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    style: {
      fontSize: "1.1em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, SUMMARY_TEXTS.map(text => {
    return __jsx(SummaryLi, {
      key: text,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
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
        lineNumber: 129,
        columnNumber: 7
      }
    }, __jsx(StyledItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
      whileTap: {
        scale: 1.2
      },
      whileHover: {
        scale: 1.2
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "subtitle1",
      component: "h3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 15
      }
    }, Icon, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
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
        lineNumber: 151,
        columnNumber: 9
      }
    }, __jsx(ExperienceSection, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 11
      }
    }, Icon, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
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
        lineNumber: 156,
        columnNumber: 15
      }
    }, label, isCurrent && "(Actual)")), __jsx("em", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 13
      }
    }, location)));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
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
      lineNumber: 184,
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
      lineNumber: 191,
      columnNumber: 11
    }
  }, __jsx(SectionGridStyled, {
    item: true,
    xs: 12,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }
  }, __jsx(Title, {
    variant: "h4",
    component: "h2",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 15
    }
  }, "Experiences"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 15
    }
  }, experienceList), " "), __jsx(SectionGridStyled, {
    item: true,
    xs: 10,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 13
    }
  }, __jsx(Title, {
    variant: "h4",
    component: "h2",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 15
    }
  }, "Skills"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 15
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
    variants: container,
    initial: "hidden",
    animate: "show",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 17
    }
  }, educationList)))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    classes: {
      root: classes.minPaddingX
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 13
    }
  }, summary)), __jsx(SectionGridStyled, {
    container: true,
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
    whileHover: {
      scale: 1.3
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 13
    }
  }, __jsx(_root_styles_Custom__WEBPACK_IMPORTED_MODULE_8__["BrandButton"], {
    color: "default",
    size: "large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 17
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_3__["NonStyledAnchor"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
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
      lineNumber: 262,
      columnNumber: 9
    }
  }, __jsx(_partials_AllProjects__WEBPACK_IMPORTED_MODULE_5__["default"], {
    showSliderControls: false,
    loop: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Ib21lcGFnZUxheW91dC50c3giXSwibmFtZXMiOlsiU3R5bGVkSXRlbSIsInN0eWxlZCIsImxpIiwiU3VtbWFyeUxpIiwiRXhwZXJpZW5jZVNlY3Rpb24iLCJzZWN0aW9uIiwiVGl0bGUiLCJUeXBvZ3JhcGh5IiwiU2VjdGlvbkdyaWRTdHlsZWQiLCJHcmlkIiwiU1VNTUFSWV9URVhUUyIsImNvbnRhaW5lciIsImhpZGRlbiIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJzaG93IiwidHJhbnNpdGlvbiIsImRlbGF5Q2hpbGRyZW4iLCJzdGFnZ2VyRGlyZWN0aW9uIiwiaXRlbSIsImR1cmF0aW9uIiwiSG9tZXBhZ2VMYXlvdXQiLCJjaGFuZ2VQYWdlIiwidXNlUGFnZXNDb250ZXh0IiwicHJlZmVyc0RhcmtNb2RlIiwidXNlTWVkaWFRdWVyeSIsImNsYXNzZXMiLCJ1c2VTaGFyZWRTdHlsZXMiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImxlZnQiLCJiZWhhdmlvciIsInN1bW1hcnkiLCJmb250U2l6ZSIsIm1hcCIsInRleHQiLCJlZHVjYXRpb25MaXN0IiwiZWR1Y2F0aW9uIiwibGFiZWwiLCJJY29uIiwic2NhbGUiLCJleHBlcmllbmNlTGlzdCIsImV4cGVyaWVuY2VzIiwiaXNDdXJyZW50IiwibG9jYXRpb24iLCJjb2xvciIsInJvb3QiLCJtaW5QYWRkaW5nWCIsInRvVXBwZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVVBO0FBS0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsTUFBTUEsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLHFLQUFoQjtLQUFNRixVO0FBZU4sTUFBTUcsU0FBUyxHQUFHRix5REFBTSxDQUFDQyxFQUFWO0FBQUE7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LENBNURGLENBREYsRUErRUUsTUFBQywyREFBRDtBQUNFLE1BQUUsRUFBQyxVQURMO0FBRUUsV0FBTyxFQUFFO0FBQ1BGLFVBQUksRUFBRXRCLE9BQU8sQ0FBQ3VCO0FBRFAsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyw2REFBRDtBQUFhLHNCQUFrQixFQUFFLEtBQWpDO0FBQXdDLFFBQUksRUFBRSxLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0EvRUYsQ0FMRixDQURGO0FBaUdELENBNUtEOztHQUFNNUIsYztVQUNtQkUsMEUsRUFDQ0UsK0QsRUFDUkUsb0U7OztNQUhaTixjO0FBNktTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNzQxNGY0NDUwODU3N2RkZDRjOGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ29udGFpbmVyLFxyXG4gIEdyaWQsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBMaXN0LFxyXG4gIHVzZU1lZGlhUXVlcnksXHJcbiAgUGFwZXIsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGVkdWNhdGlvbixcclxuICBleHBlcmllbmNlcyxcclxufSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IEhvbWVwYWdlSGVhZGluZyBmcm9tIFwiLi9wYXJ0aWFscy9Ib21lcGFnZUhlYWRpbmdcIjtcclxuLy8gaW1wb3J0IFNvY2lhbE1lZGlhRW1iZWRzIGZyb20gXCIuL3BhcnRpYWxzL1NvY2lhbE1lZGlhRW1iZWRzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIE5vblN0eWxlZEFuY2hvcixcclxuICBQcmltYXJ5QmFja2dyb3VuZFNlY3Rpb24sXHJcbn0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgQWxsUHJvamVjdHMgZnJvbSBcIi4vcGFydGlhbHMvQWxsUHJvamVjdHNcIjtcclxuaW1wb3J0IHsgdXNlUGFnZXNDb250ZXh0IH0gZnJvbSBcIkByb290L2NvbnRleHQvUGFnZXNDb250ZXh0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgQnJhbmRCdXR0b24gfSBmcm9tIFwiQHJvb3Qvc3R5bGVzL0N1c3RvbVwiO1xyXG5cclxuaW1wb3J0IHVzZVNoYXJlZFN0eWxlcyBmcm9tIFwiQHJvb3Qvc3R5bGVzL3VzZVNoYXJlZFN0eWxlc1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxuY29uc3QgU3R5bGVkSXRlbSA9IHN0eWxlZC5saWBcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZDVkNTtcclxuICAgIC8qIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluLW91dDsgKi9cclxuICAgIC8qICY6aG92ZXJ7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgpO1xyXG4gICAgfSAqL1xyXG5gO1xyXG5cclxuY29uc3QgU3VtbWFyeUxpID0gc3R5bGVkLmxpYFxyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGZvbnQtc2l6ZTogMS4xNnJlbTtcclxuICAgICY6OmJlZm9yZXtcclxuICAgICAgY29udGVudDogXCLigKIgXCI7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBFeHBlcmllbmNlU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQoVHlwb2dyYXBoeSk8eyBjb21wb25lbnQ6IHN0cmluZyB9PmBcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbmA7XHJcblxyXG5jb25zdCBTZWN0aW9uR3JpZFN0eWxlZCA9IHN0eWxlZChHcmlkKWBcclxuICBtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweCAhaW1wb3J0YW50O1xyXG5gO1xyXG5cclxuY29uc3QgU1VNTUFSWV9URVhUUyA9IFtcclxuICBcIlByb2ZpY2llbnQga25vd2xlZGdlIG9mIEhUTUwgNSwgQ1NTIDMsIEphdmFTY3JpcHQuXCIsXHJcbiAgXCJFeHBlcmllY2VkIHdpdGggTVMgRXhjZWwuXCIsXHJcbiAgXCJFeGNlbGxlbnQgY29tbXVuaWNhdGlvbiBza2lsbHMsIG9yZ2FuaXphdGlvbiBza2lsbHMsIGFuZCBleGNlbGxlbnQgYXR0ZW50aW9uIHRvIGRldGFpbC5cIixcclxuICBcIlByb2ZpY2llbnQga25vd2xlZGdlIG9mIGFjY2Vzc2liaWxpdHkgc3RhbmRhcmRzIChTZWN0aW9uIDUwOC9XQ0FHIDIuMCBMZXZlbCBBIGFuZCBBQSkuXCIsXHJcbiAgXCJHb29kIHVuZGVyc3RhbmRpbmcgb2YgYXNzaXN0aXZlIHRlY2hub2xvZ2llcyAoSkFXUywgTlZEQSwgVm9pY2VPdmVyKS5cIixcclxuICBcIjYgeWVhcnMgb2YgY2FsbCBjZW50ZXIgYW5kIFdvcmtmb3JjZSBNYW5hZ2VtZW50IGV4cGVyaWVuY2UuXCIsXHJcbiAgXCJQcm9maWNpZW50IGV4cGVyaWVuY2UgaW4gUUEgdGVzdGluZyBtZXRob2RvbG9neS5cIixcclxuICBcIlByb3ZlbiBhYmlsaXR5IHRvIGRvY3VtZW50IGlzc3VlcyBhbmQgYnVncy5cIixcclxuXTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IHtcclxuICBoaWRkZW46IHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTEwMHB4KVwiIH0sXHJcbiAgc2hvdzoge1xyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKDApXCIsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGRlbGF5Q2hpbGRyZW46IDAuOSxcclxuICAgICAgc3RhZ2dlckRpcmVjdGlvbjogMSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGl0ZW0gPSB7XHJcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDIgfSB9LFxyXG4gIHNob3c6IHsgb3BhY2l0eTogMSB9LFxyXG59O1xyXG5cclxuY29uc3QgSG9tZXBhZ2VMYXlvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBjaGFuZ2VQYWdlIH0gPSB1c2VQYWdlc0NvbnRleHQoKTtcclxuICBjb25zdCBwcmVmZXJzRGFya01vZGUgPSB1c2VNZWRpYVF1ZXJ5KFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU2hhcmVkU3R5bGVzKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoYW5nZVBhZ2UoXCJIb21lXCIpO1xyXG4gIH0sIFtjaGFuZ2VQYWdlXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHN1bW1hcnkgPSAoXHJcbiAgICA8R3JpZCBpdGVtPlxyXG4gICAgICA8TGlzdCBzdHlsZT17eyBmb250U2l6ZTogXCIxLjFlbVwiIH19PlxyXG4gICAgICAgIHtTVU1NQVJZX1RFWFRTLm1hcCgodGV4dCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxTdW1tYXJ5TGkga2V5PXt0ZXh0fT57dGV4dH08L1N1bW1hcnlMaT47XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG5cclxuICBjb25zdCBlZHVjYXRpb25MaXN0ID0gZWR1Y2F0aW9uLm1hcCgoeyBsYWJlbCwgSWNvbiB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGtleT17bGFiZWx9XHJcbiAgICAgICAgdmFyaWFudHM9e2l0ZW19XHJcbiAgICAgID5cclxuICAgICAgICA8U3R5bGVkSXRlbT5cclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IHdoaWxlVGFwPXt7IHNjYWxlOiAxLjIgfX0gd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb21wb25lbnQ9XCJoM1wiPlxyXG4gICAgICAgICAgICAgICAge0ljb259XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57XCIgXCJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgPC9TdHlsZWRJdGVtPlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBleHBlcmllbmNlTGlzdCA9IGV4cGVyaWVuY2VzLm1hcChcclxuICAgICh7IEljb24sIGlzQ3VycmVudCwgbGFiZWwsIGxvY2F0aW9uIH0pID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8bGkga2V5PXtsYWJlbH0gY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgey8qIDxJY29uIG5hbWU9e2V4cC5pY29ufSAvPiAqL31cclxuICAgICAgICAgIDxFeHBlcmllbmNlU2VjdGlvbj5cclxuICAgICAgICAgICAge0ljb259XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoM1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogaXNDdXJyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogcHJlZmVyc0RhcmtNb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIiNjOGM4YzhcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCIjZmNmY2ZjXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgIHtpc0N1cnJlbnQgJiYgXCIoQWN0dWFsKVwifVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxlbT57bG9jYXRpb259PC9lbT5cclxuICAgICAgICAgIDwvRXhwZXJpZW5jZVNlY3Rpb24+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICB7LyogPFByaW1hcnlCYWNrZ3JvdW5kU2VjdGlvbj5cclxuICAgICAgICA8SG9tZXBhZ2VIZWFkaW5nIC8+XHJcbiAgICAgIDwvUHJpbWFyeUJhY2tncm91bmRTZWN0aW9uPiAqL31cclxuXHJcbiAgICAgIDxQYXBlcj5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBzcGFjaW5nPXswfVxyXG4gICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCJcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U2VjdGlvbkdyaWRTdHlsZWRcclxuICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgIHNtPXs0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDRcIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDJcIlxyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEV4cGVyaWVuY2VzXHJcbiAgICAgICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIHtleHBlcmllbmNlTGlzdH1cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICA8L1NlY3Rpb25HcmlkU3R5bGVkPlxyXG4gICAgICAgICAgICA8U2VjdGlvbkdyaWRTdHlsZWRcclxuICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgeHM9ezEwfVxyXG4gICAgICAgICAgICAgIHNtPXs0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRpdGxlIHZhcmlhbnQ9XCJoNFwiIGNvbXBvbmVudD1cImgyXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFNraWxsc1xyXG4gICAgICAgICAgICAgIDwvVGl0bGU+XHJcblxyXG4gICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJzaG93XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2VkdWNhdGlvbkxpc3R9XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8L1NlY3Rpb25HcmlkU3R5bGVkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLm1pblBhZGRpbmdYLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c3VtbWFyeX1cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8U2VjdGlvbkdyaWRTdHlsZWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4zIH19PlxyXG4gICAgICAgICAgICAgIDxCcmFuZEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8Tm9uU3R5bGVkQW5jaG9yPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcIlNob3djYXNlIFByb2plY3RzXCIudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgPC9Ob25TdHlsZWRBbmNob3I+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9CcmFuZEJ1dHRvbj5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPC9TZWN0aW9uR3JpZFN0eWxlZD5cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgIGlkPVwicHJvamVjdHNcIlxyXG4gICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICByb290OiBjbGFzc2VzLm1pblBhZGRpbmdYLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QWxsUHJvamVjdHMgc2hvd1NsaWRlckNvbnRyb2xzPXtmYWxzZX0gbG9vcD17ZmFsc2V9IC8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICAgIHsvKiA8U29jaWFsTWVkaWFFbWJlZHMgLz4gKi99XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9