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
      delayChildren: 0.1,
      staggerDirection: -1,
      duration: .5
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    transform: "translateY(-100px)",
    transition: {
      duration: 0.2
    }
  },
  show: {
    opacity: 1,
    transform: "translateY(0)"
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
      lineNumber: 126,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    style: {
      fontSize: "1.1em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, SUMMARY_TEXTS.map(text => {
    return __jsx(SummaryLi, {
      key: text,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 18
      }
    }, text);
  })));

  const educationList = _constants__WEBPACK_IMPORTED_MODULE_2__["education"].map(({
    label,
    Icon
  }) => {
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].li, {
      key: label,
      variants: item,
      animate: "show",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 7
      }
    }, __jsx(StyledItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
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
        lineNumber: 144,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "subtitle1",
      component: "h3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 15
      }
    }, Icon, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
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
        lineNumber: 163,
        columnNumber: 9
      }
    }, __jsx(ExperienceSection, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 11
      }
    }, Icon, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
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
        lineNumber: 168,
        columnNumber: 15
      }
    }, label, isCurrent && "(Actual)")), __jsx("em", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 13
      }
    }, location)));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
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
      lineNumber: 196,
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
      lineNumber: 203,
      columnNumber: 11
    }
  }, __jsx(SectionGridStyled, {
    item: true,
    xs: 12,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 13
    }
  }, __jsx(Title, {
    variant: "h4",
    component: "h2",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 15
    }
  }, "Experiences"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 15
    }
  }, experienceList), " "), __jsx(SectionGridStyled, {
    item: true,
    xs: 10,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 13
    }
  }, __jsx(Title, {
    variant: "h4",
    component: "h2",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 15
    }
  }, "Skills"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 15
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].ul, {
    variants: container,
    initial: "hidden",
    animate: "show",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 17
    }
  }, educationList)))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    classes: {
      root: classes.minPaddingX
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }
  }, summary)), __jsx(SectionGridStyled, {
    container: true,
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
    whileHover: {
      scale: 1.3
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 13
    }
  }, __jsx(_root_styles_Custom__WEBPACK_IMPORTED_MODULE_8__["BrandButton"], {
    color: "default",
    size: "large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 17
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_3__["NonStyledAnchor"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
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
      lineNumber: 274,
      columnNumber: 9
    }
  }, __jsx(_partials_AllProjects__WEBPACK_IMPORTED_MODULE_5__["default"], {
    showSliderControls: false,
    loop: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Ib21lcGFnZUxheW91dC50c3giXSwibmFtZXMiOlsiU3R5bGVkSXRlbSIsInN0eWxlZCIsImxpIiwiU3VtbWFyeUxpIiwiRXhwZXJpZW5jZVNlY3Rpb24iLCJzZWN0aW9uIiwiVGl0bGUiLCJUeXBvZ3JhcGh5IiwiU2VjdGlvbkdyaWRTdHlsZWQiLCJHcmlkIiwiU1VNTUFSWV9URVhUUyIsImNvbnRhaW5lciIsImhpZGRlbiIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJzaG93IiwidHJhbnNpdGlvbiIsImRlbGF5Q2hpbGRyZW4iLCJzdGFnZ2VyRGlyZWN0aW9uIiwiZHVyYXRpb24iLCJpdGVtIiwiSG9tZXBhZ2VMYXlvdXQiLCJjaGFuZ2VQYWdlIiwidXNlUGFnZXNDb250ZXh0IiwicHJlZmVyc0RhcmtNb2RlIiwidXNlTWVkaWFRdWVyeSIsImNsYXNzZXMiLCJ1c2VTaGFyZWRTdHlsZXMiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImxlZnQiLCJiZWhhdmlvciIsInN1bW1hcnkiLCJmb250U2l6ZSIsIm1hcCIsInRleHQiLCJlZHVjYXRpb25MaXN0IiwiZWR1Y2F0aW9uIiwibGFiZWwiLCJJY29uIiwic2NhbGUiLCJleHBlcmllbmNlTGlzdCIsImV4cGVyaWVuY2VzIiwiaXNDdXJyZW50IiwibG9jYXRpb24iLCJjb2xvciIsInJvb3QiLCJtaW5QYWRkaW5nWCIsInRvVXBwZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVVBO0FBS0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsTUFBTUEsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLHFLQUFoQjtLQUFNRixVO0FBZU4sTUFBTUcsU0FBUyxHQUFHRix5REFBTSxDQUFDQyxFQUFWO0FBQUE7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LGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxvQkFBb0JRLFdBQXBCLEVBREgsQ0FERixDQUpGLENBREYsQ0FERixDQTVERixDQURGLEVBK0VFLE1BQUMsMkRBQUQ7QUFDRSxNQUFFLEVBQUMsVUFETDtBQUVFLFdBQU8sRUFBRTtBQUNQRixVQUFJLEVBQUV0QixPQUFPLENBQUN1QjtBQURQLEtBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsNkRBQUQ7QUFBYSxzQkFBa0IsRUFBRSxLQUFqQztBQUF3QyxRQUFJLEVBQUUsS0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBL0VGLENBTEYsQ0FERjtBQWlHRCxDQWhMRDs7R0FBTTVCLGM7VUFDbUJFLDBFLEVBQ0NFLCtELEVBQ1JFLG9FOzs7TUFIWk4sYztBQWlMU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjY0ZGEzMWY5YWRmNTYyODdjYTA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENvbnRhaW5lcixcclxuICBHcmlkLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgTGlzdCxcclxuICB1c2VNZWRpYVF1ZXJ5LFxyXG4gIFBhcGVyLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBlZHVjYXRpb24sXHJcbiAgZXhwZXJpZW5jZXMsXHJcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBIb21lcGFnZUhlYWRpbmcgZnJvbSBcIi4vcGFydGlhbHMvSG9tZXBhZ2VIZWFkaW5nXCI7XHJcbi8vIGltcG9ydCBTb2NpYWxNZWRpYUVtYmVkcyBmcm9tIFwiLi9wYXJ0aWFscy9Tb2NpYWxNZWRpYUVtYmVkc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBOb25TdHlsZWRBbmNob3IsXHJcbiAgUHJpbWFyeUJhY2tncm91bmRTZWN0aW9uLFxyXG59IGZyb20gXCJAY29tcG9uZW50cy9zaGFyZWRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEFsbFByb2plY3RzIGZyb20gXCIuL3BhcnRpYWxzL0FsbFByb2plY3RzXCI7XHJcbmltcG9ydCB7IHVzZVBhZ2VzQ29udGV4dCB9IGZyb20gXCJAcm9vdC9jb250ZXh0L1BhZ2VzQ29udGV4dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEJyYW5kQnV0dG9uIH0gZnJvbSBcIkByb290L3N0eWxlcy9DdXN0b21cIjtcclxuXHJcbmltcG9ydCB1c2VTaGFyZWRTdHlsZXMgZnJvbSBcIkByb290L3N0eWxlcy91c2VTaGFyZWRTdHlsZXNcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmNvbnN0IFN0eWxlZEl0ZW0gPSBzdHlsZWQubGlgXHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2Q1ZDU7XHJcbiAgICAvKiB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7ICovXHJcbiAgICAvKiAmOmhvdmVye1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4KTtcclxuICAgIH0gKi9cclxuYDtcclxuXHJcbmNvbnN0IFN1bW1hcnlMaSA9IHN0eWxlZC5saWBcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBmb250LXNpemU6IDEuMTZyZW07XHJcbiAgICAmOjpiZWZvcmV7XHJcbiAgICAgIGNvbnRlbnQ6IFwi4oCiIFwiO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgRXhwZXJpZW5jZVNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkKFR5cG9ncmFwaHkpPHsgY29tcG9uZW50OiBzdHJpbmcgfT5gXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG5gO1xyXG5cclxuY29uc3QgU2VjdGlvbkdyaWRTdHlsZWQgPSBzdHlsZWQoR3JpZClgXHJcbiAgbWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHggIWltcG9ydGFudDtcclxuYDtcclxuXHJcbmNvbnN0IFNVTU1BUllfVEVYVFMgPSBbXHJcbiAgXCJQcm9maWNpZW50IGtub3dsZWRnZSBvZiBIVE1MIDUsIENTUyAzLCBKYXZhU2NyaXB0LlwiLFxyXG4gIFwiRXhwZXJpZWNlZCB3aXRoIE1TIEV4Y2VsLlwiLFxyXG4gIFwiRXhjZWxsZW50IGNvbW11bmljYXRpb24gc2tpbGxzLCBvcmdhbml6YXRpb24gc2tpbGxzLCBhbmQgZXhjZWxsZW50IGF0dGVudGlvbiB0byBkZXRhaWwuXCIsXHJcbiAgXCJQcm9maWNpZW50IGtub3dsZWRnZSBvZiBhY2Nlc3NpYmlsaXR5IHN0YW5kYXJkcyAoU2VjdGlvbiA1MDgvV0NBRyAyLjAgTGV2ZWwgQSBhbmQgQUEpLlwiLFxyXG4gIFwiR29vZCB1bmRlcnN0YW5kaW5nIG9mIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMgKEpBV1MsIE5WREEsIFZvaWNlT3ZlcikuXCIsXHJcbiAgXCI2IHllYXJzIG9mIGNhbGwgY2VudGVyIGFuZCBXb3JrZm9yY2UgTWFuYWdlbWVudCBleHBlcmllbmNlLlwiLFxyXG4gIFwiUHJvZmljaWVudCBleHBlcmllbmNlIGluIFFBIHRlc3RpbmcgbWV0aG9kb2xvZ3kuXCIsXHJcbiAgXCJQcm92ZW4gYWJpbGl0eSB0byBkb2N1bWVudCBpc3N1ZXMgYW5kIGJ1Z3MuXCIsXHJcbl07XHJcblxyXG5jb25zdCBjb250YWluZXIgPSB7XHJcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC0xMDBweClcIiB9LFxyXG4gIHNob3c6IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgwKVwiLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkZWxheUNoaWxkcmVuOiAwLjEsXHJcbiAgICAgIHN0YWdnZXJEaXJlY3Rpb246IC0xLFxyXG4gICAgICBkdXJhdGlvbjogLjUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBpdGVtID0ge1xyXG4gIGhpZGRlbjoge1xyXG4gICAgb3BhY2l0eTogMCxcclxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC0xMDBweClcIixcclxuICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuMiB9LFxyXG4gIH0sXHJcbiAgc2hvdzoge1xyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKDApXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IEhvbWVwYWdlTGF5b3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY2hhbmdlUGFnZSB9ID0gdXNlUGFnZXNDb250ZXh0KCk7XHJcbiAgY29uc3QgcHJlZmVyc0RhcmtNb2RlID0gdXNlTWVkaWFRdWVyeShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIik7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVNoYXJlZFN0eWxlcygpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjaGFuZ2VQYWdlKFwiSG9tZVwiKTtcclxuICB9LCBbY2hhbmdlUGFnZV0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzdW1tYXJ5ID0gKFxyXG4gICAgPEdyaWQgaXRlbT5cclxuICAgICAgPExpc3Qgc3R5bGU9e3sgZm9udFNpemU6IFwiMS4xZW1cIiB9fT5cclxuICAgICAgICB7U1VNTUFSWV9URVhUUy5tYXAoKHRleHQpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8U3VtbWFyeUxpIGtleT17dGV4dH0+e3RleHR9PC9TdW1tYXJ5TGk+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZWR1Y2F0aW9uTGlzdCA9IGVkdWNhdGlvbi5tYXAoKHsgbGFiZWwsIEljb24gfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPG1vdGlvbi5saVxyXG4gICAgICAgIGtleT17bGFiZWx9XHJcbiAgICAgICAgdmFyaWFudHM9e2l0ZW19XHJcbiAgICAgICAgYW5pbWF0ZT1cInNob3dcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPFN0eWxlZEl0ZW0+XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAxLjIgfX1cclxuICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb21wb25lbnQ9XCJoM1wiPlxyXG4gICAgICAgICAgICAgICAge0ljb259XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57XCIgXCJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgPC9TdHlsZWRJdGVtPlxyXG4gICAgICA8L21vdGlvbi5saT5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGV4cGVyaWVuY2VMaXN0ID0gZXhwZXJpZW5jZXMubWFwKFxyXG4gICAgKHsgSWNvbiwgaXNDdXJyZW50LCBsYWJlbCwgbG9jYXRpb24gfSkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBrZXk9e2xhYmVsfSBjbGFzc05hbWU9XCJtYi0xXCI+XHJcbiAgICAgICAgICB7LyogPEljb24gbmFtZT17ZXhwLmljb259IC8+ICovfVxyXG4gICAgICAgICAgPEV4cGVyaWVuY2VTZWN0aW9uPlxyXG4gICAgICAgICAgICB7SWNvbn1cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgzXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBpc0N1cnJlbnRcclxuICAgICAgICAgICAgICAgICAgICA/IFwiYmx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBwcmVmZXJzRGFya01vZGVcclxuICAgICAgICAgICAgICAgICAgICA/IFwiI2M4YzhjOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIiNmY2ZjZmNcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAge2lzQ3VycmVudCAmJiBcIihBY3R1YWwpXCJ9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGVtPntsb2NhdGlvbn08L2VtPlxyXG4gICAgICAgICAgPC9FeHBlcmllbmNlU2VjdGlvbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIHsvKiA8UHJpbWFyeUJhY2tncm91bmRTZWN0aW9uPlxyXG4gICAgICAgIDxIb21lcGFnZUhlYWRpbmcgLz5cclxuICAgICAgPC9QcmltYXJ5QmFja2dyb3VuZFNlY3Rpb24+ICovfVxyXG5cclxuICAgICAgPFBhcGVyPlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIHNwYWNpbmc9ezB9XHJcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAganVzdGlmeT1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1hcm91bmRcIlxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uR3JpZFN0eWxlZFxyXG4gICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgc209ezR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMlwiXHJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRXhwZXJpZW5jZXNcclxuICAgICAgICAgICAgICA8L1RpdGxlPlxyXG4gICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAge2V4cGVyaWVuY2VMaXN0fVxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvU2VjdGlvbkdyaWRTdHlsZWQ+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uR3JpZFN0eWxlZFxyXG4gICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICB4cz17MTB9XHJcbiAgICAgICAgICAgICAgc209ezR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VGl0bGUgdmFyaWFudD1cImg0XCIgY29tcG9uZW50PVwiaDJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgU2tpbGxzXHJcbiAgICAgICAgICAgICAgPC9UaXRsZT5cclxuXHJcbiAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLnVsXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtjb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICBhbmltYXRlPVwic2hvd1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtlZHVjYXRpb25MaXN0fVxyXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24udWw+XHJcbiAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8L1NlY3Rpb25HcmlkU3R5bGVkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLm1pblBhZGRpbmdYLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c3VtbWFyeX1cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8U2VjdGlvbkdyaWRTdHlsZWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4zIH19PlxyXG4gICAgICAgICAgICAgIDxCcmFuZEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8Tm9uU3R5bGVkQW5jaG9yPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcIlNob3djYXNlIFByb2plY3RzXCIudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgPC9Ob25TdHlsZWRBbmNob3I+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9CcmFuZEJ1dHRvbj5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPC9TZWN0aW9uR3JpZFN0eWxlZD5cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgIGlkPVwicHJvamVjdHNcIlxyXG4gICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICByb290OiBjbGFzc2VzLm1pblBhZGRpbmdYLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QWxsUHJvamVjdHMgc2hvd1NsaWRlckNvbnRyb2xzPXtmYWxzZX0gbG9vcD17ZmFsc2V9IC8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICAgIHsvKiA8U29jaWFsTWVkaWFFbWJlZHMgLz4gKi99XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9