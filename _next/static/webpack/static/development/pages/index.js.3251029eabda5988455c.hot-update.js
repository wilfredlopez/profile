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
      delayChildren: 0.5,
      staggerDirection: -1
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
      lineNumber: 117,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    style: {
      fontSize: "1.1em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, SUMMARY_TEXTS.map(text => {
    return __jsx(SummaryLi, {
      key: text,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
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
        lineNumber: 128,
        columnNumber: 7
      }
    }, __jsx(StyledItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
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
        lineNumber: 134,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "subtitle1",
      component: "h3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 15
      }
    }, Icon, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
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
        lineNumber: 150,
        columnNumber: 9
      }
    }, __jsx(ExperienceSection, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 11
      }
    }, Icon, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
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
        lineNumber: 155,
        columnNumber: 15
      }
    }, label, isCurrent && "(Actual)")), __jsx("em", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 13
      }
    }, location)));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
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
      lineNumber: 183,
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
      lineNumber: 190,
      columnNumber: 11
    }
  }, __jsx(SectionGridStyled, {
    item: true,
    xs: 12,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  }, __jsx(Title, {
    variant: "h4",
    component: "h2",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 15
    }
  }, "Experiences"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 15
    }
  }, experienceList), " "), __jsx(SectionGridStyled, {
    item: true,
    xs: 10,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }
  }, __jsx(Title, {
    variant: "h4",
    component: "h2",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 15
    }
  }, "Skills"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 15
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
    variants: container,
    initial: "hidden",
    animate: "show",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 17
    }
  }, educationList)))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    classes: {
      root: classes.minPaddingX
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }
  }, summary)), __jsx(SectionGridStyled, {
    container: true,
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
    whileHover: {
      scale: 1.3
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 13
    }
  }, __jsx(_root_styles_Custom__WEBPACK_IMPORTED_MODULE_8__["BrandButton"], {
    color: "default",
    size: "large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 17
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_3__["NonStyledAnchor"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
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
      lineNumber: 261,
      columnNumber: 9
    }
  }, __jsx(_partials_AllProjects__WEBPACK_IMPORTED_MODULE_5__["default"], {
    showSliderControls: false,
    loop: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Ib21lcGFnZUxheW91dC50c3giXSwibmFtZXMiOlsiU3R5bGVkSXRlbSIsInN0eWxlZCIsImxpIiwiU3VtbWFyeUxpIiwiRXhwZXJpZW5jZVNlY3Rpb24iLCJzZWN0aW9uIiwiVGl0bGUiLCJUeXBvZ3JhcGh5IiwiU2VjdGlvbkdyaWRTdHlsZWQiLCJHcmlkIiwiU1VNTUFSWV9URVhUUyIsImNvbnRhaW5lciIsImhpZGRlbiIsIm9wYWNpdHkiLCJzaG93IiwidHJhbnNpdGlvbiIsImRlbGF5Q2hpbGRyZW4iLCJzdGFnZ2VyRGlyZWN0aW9uIiwiaXRlbSIsImR1cmF0aW9uIiwiSG9tZXBhZ2VMYXlvdXQiLCJjaGFuZ2VQYWdlIiwidXNlUGFnZXNDb250ZXh0IiwicHJlZmVyc0RhcmtNb2RlIiwidXNlTWVkaWFRdWVyeSIsImNsYXNzZXMiLCJ1c2VTaGFyZWRTdHlsZXMiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImxlZnQiLCJiZWhhdmlvciIsInN1bW1hcnkiLCJmb250U2l6ZSIsIm1hcCIsInRleHQiLCJlZHVjYXRpb25MaXN0IiwiZWR1Y2F0aW9uIiwibGFiZWwiLCJJY29uIiwic2NhbGUiLCJleHBlcmllbmNlTGlzdCIsImV4cGVyaWVuY2VzIiwiaXNDdXJyZW50IiwibG9jYXRpb24iLCJjb2xvciIsInJvb3QiLCJtaW5QYWRkaW5nWCIsInRvVXBwZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVVBO0FBS0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsTUFBTUEsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLHFLQUFoQjtLQUFNRixVO0FBZU4sTUFBTUcsU0FBUyxHQUFHRix5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLCtI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QUVFLFdBQU8sRUFBRTtBQUNQRixVQUFJLEVBQUV0QixPQUFPLENBQUN1QjtBQURQLEtBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsNkRBQUQ7QUFBYSxzQkFBa0IsRUFBRSxLQUFqQztBQUF3QyxRQUFJLEVBQUUsS0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBL0VGLENBTEYsQ0FERjtBQWlHRCxDQTVLRDs7R0FBTTVCLGM7VUFDbUJFLDBFLEVBQ0NFLCtELEVBQ1JFLG9FOzs7TUFIWk4sYztBQTZLU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjMyNTEwMjllYWJkYTU5ODg0NTVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENvbnRhaW5lcixcclxuICBHcmlkLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgTGlzdCxcclxuICB1c2VNZWRpYVF1ZXJ5LFxyXG4gIFBhcGVyLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBlZHVjYXRpb24sXHJcbiAgZXhwZXJpZW5jZXMsXHJcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBIb21lcGFnZUhlYWRpbmcgZnJvbSBcIi4vcGFydGlhbHMvSG9tZXBhZ2VIZWFkaW5nXCI7XHJcbi8vIGltcG9ydCBTb2NpYWxNZWRpYUVtYmVkcyBmcm9tIFwiLi9wYXJ0aWFscy9Tb2NpYWxNZWRpYUVtYmVkc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBOb25TdHlsZWRBbmNob3IsXHJcbiAgUHJpbWFyeUJhY2tncm91bmRTZWN0aW9uLFxyXG59IGZyb20gXCJAY29tcG9uZW50cy9zaGFyZWRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEFsbFByb2plY3RzIGZyb20gXCIuL3BhcnRpYWxzL0FsbFByb2plY3RzXCI7XHJcbmltcG9ydCB7IHVzZVBhZ2VzQ29udGV4dCB9IGZyb20gXCJAcm9vdC9jb250ZXh0L1BhZ2VzQ29udGV4dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEJyYW5kQnV0dG9uIH0gZnJvbSBcIkByb290L3N0eWxlcy9DdXN0b21cIjtcclxuXHJcbmltcG9ydCB1c2VTaGFyZWRTdHlsZXMgZnJvbSBcIkByb290L3N0eWxlcy91c2VTaGFyZWRTdHlsZXNcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmNvbnN0IFN0eWxlZEl0ZW0gPSBzdHlsZWQubGlgXHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2Q1ZDU7XHJcbiAgICAvKiB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7ICovXHJcbiAgICAvKiAmOmhvdmVye1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4KTtcclxuICAgIH0gKi9cclxuYDtcclxuXHJcbmNvbnN0IFN1bW1hcnlMaSA9IHN0eWxlZC5saWBcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBmb250LXNpemU6IDEuMTZyZW07XHJcbiAgICAmOjpiZWZvcmV7XHJcbiAgICAgIGNvbnRlbnQ6IFwi4oCiIFwiO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgRXhwZXJpZW5jZVNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkKFR5cG9ncmFwaHkpPHsgY29tcG9uZW50OiBzdHJpbmcgfT5gXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG5gO1xyXG5cclxuY29uc3QgU2VjdGlvbkdyaWRTdHlsZWQgPSBzdHlsZWQoR3JpZClgXHJcbiAgbWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHggIWltcG9ydGFudDtcclxuYDtcclxuXHJcbmNvbnN0IFNVTU1BUllfVEVYVFMgPSBbXHJcbiAgXCJQcm9maWNpZW50IGtub3dsZWRnZSBvZiBIVE1MIDUsIENTUyAzLCBKYXZhU2NyaXB0LlwiLFxyXG4gIFwiRXhwZXJpZWNlZCB3aXRoIE1TIEV4Y2VsLlwiLFxyXG4gIFwiRXhjZWxsZW50IGNvbW11bmljYXRpb24gc2tpbGxzLCBvcmdhbml6YXRpb24gc2tpbGxzLCBhbmQgZXhjZWxsZW50IGF0dGVudGlvbiB0byBkZXRhaWwuXCIsXHJcbiAgXCJQcm9maWNpZW50IGtub3dsZWRnZSBvZiBhY2Nlc3NpYmlsaXR5IHN0YW5kYXJkcyAoU2VjdGlvbiA1MDgvV0NBRyAyLjAgTGV2ZWwgQSBhbmQgQUEpLlwiLFxyXG4gIFwiR29vZCB1bmRlcnN0YW5kaW5nIG9mIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMgKEpBV1MsIE5WREEsIFZvaWNlT3ZlcikuXCIsXHJcbiAgXCI2IHllYXJzIG9mIGNhbGwgY2VudGVyIGFuZCBXb3JrZm9yY2UgTWFuYWdlbWVudCBleHBlcmllbmNlLlwiLFxyXG4gIFwiUHJvZmljaWVudCBleHBlcmllbmNlIGluIFFBIHRlc3RpbmcgbWV0aG9kb2xvZ3kuXCIsXHJcbiAgXCJQcm92ZW4gYWJpbGl0eSB0byBkb2N1bWVudCBpc3N1ZXMgYW5kIGJ1Z3MuXCIsXHJcbl07XHJcblxyXG5jb25zdCBjb250YWluZXIgPSB7XHJcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcclxuICBzaG93OiB7XHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkZWxheUNoaWxkcmVuOiAwLjUsXHJcbiAgICAgIHN0YWdnZXJEaXJlY3Rpb246IC0xLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgaXRlbSA9IHtcclxuICBoaWRkZW46IHsgb3BhY2l0eTogMCwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMiB9IH0sXHJcbiAgc2hvdzogeyBvcGFjaXR5OiAxIH0sXHJcbn07XHJcblxyXG5jb25zdCBIb21lcGFnZUxheW91dCA9ICgpID0+IHtcclxuICBjb25zdCB7IGNoYW5nZVBhZ2UgfSA9IHVzZVBhZ2VzQ29udGV4dCgpO1xyXG4gIGNvbnN0IHByZWZlcnNEYXJrTW9kZSA9IHVzZU1lZGlhUXVlcnkoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTaGFyZWRTdHlsZXMoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY2hhbmdlUGFnZShcIkhvbWVcIik7XHJcbiAgfSwgW2NoYW5nZVBhZ2VdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc3VtbWFyeSA9IChcclxuICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgIDxMaXN0IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuMWVtXCIgfX0+XHJcbiAgICAgICAge1NVTU1BUllfVEVYVFMubWFwKCh0ZXh0KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPFN1bW1hcnlMaSBrZXk9e3RleHR9Pnt0ZXh0fTwvU3VtbWFyeUxpPjtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGVkdWNhdGlvbkxpc3QgPSBlZHVjYXRpb24ubWFwKCh7IGxhYmVsLCBJY29uIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAga2V5PXtsYWJlbH1cclxuICAgICAgICB2YXJpYW50cz17aXRlbX1cclxuICAgICAgPlxyXG4gICAgICAgIDxTdHlsZWRJdGVtPlxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgd2hpbGVUYXA9e3sgc2NhbGU6IDEuMiB9fSB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbXBvbmVudD1cImgzXCI+XHJcbiAgICAgICAgICAgICAgICB7SWNvbn1cclxuICAgICAgICAgICAgICAgIDxzcGFuPntcIiBcIn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICA8L1N0eWxlZEl0ZW0+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGV4cGVyaWVuY2VMaXN0ID0gZXhwZXJpZW5jZXMubWFwKFxyXG4gICAgKHsgSWNvbiwgaXNDdXJyZW50LCBsYWJlbCwgbG9jYXRpb24gfSkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBrZXk9e2xhYmVsfSBjbGFzc05hbWU9XCJtYi0xXCI+XHJcbiAgICAgICAgICB7LyogPEljb24gbmFtZT17ZXhwLmljb259IC8+ICovfVxyXG4gICAgICAgICAgPEV4cGVyaWVuY2VTZWN0aW9uPlxyXG4gICAgICAgICAgICB7SWNvbn1cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgzXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBpc0N1cnJlbnRcclxuICAgICAgICAgICAgICAgICAgICA/IFwiYmx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBwcmVmZXJzRGFya01vZGVcclxuICAgICAgICAgICAgICAgICAgICA/IFwiI2M4YzhjOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIiNmY2ZjZmNcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAge2lzQ3VycmVudCAmJiBcIihBY3R1YWwpXCJ9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGVtPntsb2NhdGlvbn08L2VtPlxyXG4gICAgICAgICAgPC9FeHBlcmllbmNlU2VjdGlvbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIHsvKiA8UHJpbWFyeUJhY2tncm91bmRTZWN0aW9uPlxyXG4gICAgICAgIDxIb21lcGFnZUhlYWRpbmcgLz5cclxuICAgICAgPC9QcmltYXJ5QmFja2dyb3VuZFNlY3Rpb24+ICovfVxyXG5cclxuICAgICAgPFBhcGVyPlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIHNwYWNpbmc9ezB9XHJcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAganVzdGlmeT1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1hcm91bmRcIlxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uR3JpZFN0eWxlZFxyXG4gICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgc209ezR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMlwiXHJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRXhwZXJpZW5jZXNcclxuICAgICAgICAgICAgICA8L1RpdGxlPlxyXG4gICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAge2V4cGVyaWVuY2VMaXN0fVxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvU2VjdGlvbkdyaWRTdHlsZWQ+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uR3JpZFN0eWxlZFxyXG4gICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICB4cz17MTB9XHJcbiAgICAgICAgICAgICAgc209ezR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VGl0bGUgdmFyaWFudD1cImg0XCIgY29tcG9uZW50PVwiaDJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgU2tpbGxzXHJcbiAgICAgICAgICAgICAgPC9UaXRsZT5cclxuXHJcbiAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50cz17Y29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT1cInNob3dcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7ZWR1Y2F0aW9uTGlzdH1cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvU2VjdGlvbkdyaWRTdHlsZWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImZsZXgtc3RhcnRcIj5cclxuICAgICAgICAgICAgPENvbnRhaW5lclxyXG4gICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMubWluUGFkZGluZ1gsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzdW1tYXJ5fVxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxTZWN0aW9uR3JpZFN0eWxlZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdiB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjMgfX0+XHJcbiAgICAgICAgICAgICAgPEJyYW5kQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxOb25TdHlsZWRBbmNob3I+XHJcbiAgICAgICAgICAgICAgICAgICAge1wiU2hvd2Nhc2UgUHJvamVjdHNcIi50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICA8L05vblN0eWxlZEFuY2hvcj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPiAqL31cclxuICAgICAgICAgICAgICAgICAgey8qIDwvQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L0JyYW5kQnV0dG9uPlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICA8L1NlY3Rpb25HcmlkU3R5bGVkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgPENvbnRhaW5lclxyXG4gICAgICAgICAgaWQ9XCJwcm9qZWN0c1wiXHJcbiAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMubWluUGFkZGluZ1gsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBbGxQcm9qZWN0cyBzaG93U2xpZGVyQ29udHJvbHM9e2ZhbHNlfSBsb29wPXtmYWxzZX0gLz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9QYXBlcj5cclxuICAgICAgey8qIDxTb2NpYWxNZWRpYUVtYmVkcyAvPiAqL31cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSG9tZXBhZ2VMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=