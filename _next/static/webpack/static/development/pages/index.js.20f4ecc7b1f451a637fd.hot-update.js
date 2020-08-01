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
      delayChildren: 2,
      staggerDirection: -1
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    transform: "translateY(-100px)",
    transition: {
      type: "spring"
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
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].li, {
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
        lineNumber: 146,
        columnNumber: 15
      }
    }, Icon, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
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
        lineNumber: 161,
        columnNumber: 9
      }
    }, __jsx(ExperienceSection, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 11
      }
    }, Icon, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
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
        lineNumber: 166,
        columnNumber: 15
      }
    }, label, isCurrent && "(Actual)")), __jsx("em", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 13
      }
    }, location)));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
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
      lineNumber: 194,
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
      lineNumber: 201,
      columnNumber: 11
    }
  }, __jsx(SectionGridStyled, {
    item: true,
    xs: 12,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 13
    }
  }, __jsx(Title, {
    variant: "h4",
    component: "h2",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 15
    }
  }, "Experiences"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 15
    }
  }, experienceList), " "), __jsx(SectionGridStyled, {
    item: true,
    xs: 10,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }
  }, __jsx(Title, {
    variant: "h4",
    component: "h2",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 15
    }
  }, "Skills"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 15
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].ul, {
    variants: container,
    initial: "hidden",
    animate: "show",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 17
    }
  }, educationList)))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    classes: {
      root: classes.minPaddingX
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }
  }, summary)), __jsx(SectionGridStyled, {
    container: true,
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
    whileHover: {
      scale: 1.3
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }
  }, __jsx(_root_styles_Custom__WEBPACK_IMPORTED_MODULE_8__["BrandButton"], {
    color: "default",
    size: "large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 17
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_3__["NonStyledAnchor"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
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
      lineNumber: 272,
      columnNumber: 9
    }
  }, __jsx(_partials_AllProjects__WEBPACK_IMPORTED_MODULE_5__["default"], {
    showSliderControls: false,
    loop: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Ib21lcGFnZUxheW91dC50c3giXSwibmFtZXMiOlsiU3R5bGVkSXRlbSIsInN0eWxlZCIsImxpIiwiU3VtbWFyeUxpIiwiRXhwZXJpZW5jZVNlY3Rpb24iLCJzZWN0aW9uIiwiVGl0bGUiLCJUeXBvZ3JhcGh5IiwiU2VjdGlvbkdyaWRTdHlsZWQiLCJHcmlkIiwiU1VNTUFSWV9URVhUUyIsImNvbnRhaW5lciIsImhpZGRlbiIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJzaG93IiwidHJhbnNpdGlvbiIsImRlbGF5Q2hpbGRyZW4iLCJzdGFnZ2VyRGlyZWN0aW9uIiwiaXRlbSIsInR5cGUiLCJIb21lcGFnZUxheW91dCIsImNoYW5nZVBhZ2UiLCJ1c2VQYWdlc0NvbnRleHQiLCJwcmVmZXJzRGFya01vZGUiLCJ1c2VNZWRpYVF1ZXJ5IiwiY2xhc3NlcyIsInVzZVNoYXJlZFN0eWxlcyIsInVzZUVmZmVjdCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwic3VtbWFyeSIsImZvbnRTaXplIiwibWFwIiwidGV4dCIsImVkdWNhdGlvbkxpc3QiLCJlZHVjYXRpb24iLCJsYWJlbCIsIkljb24iLCJzY2FsZSIsImV4cGVyaWVuY2VMaXN0IiwiZXhwZXJpZW5jZXMiLCJpc0N1cnJlbnQiLCJsb2NhdGlvbiIsImNvbG9yIiwicm9vdCIsIm1pblBhZGRpbmdYIiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBVUE7QUFLQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxNQUFNQSxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEscUtBQWhCO0tBQU1GLFU7QUFlTixNQUFNRyxTQUFTLEdBQUdGLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsK0hBQWY7TUFBTUMsUztBQVdOLE1BQU1DLGlCQUFpQixHQUFHSCx5REFBTSxDQUFDSSxPQUFWO0FBQUE7QUFBQTtBQUFBLDhEQUF2QjtNQUFNRCxpQjtBQU1OLE1BQU1FLEtBQUssR0FBR0wsaUVBQU0sQ0FBQ00sNERBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxnRUFBWDtNQUFNRCxLO0FBS04sTUFBTUUsaUJBQWlCLEdBQUdQLGlFQUFNLENBQUNRLHNEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsaUVBQXZCO01BQU1ELGlCO0FBS04sTUFBTUUsYUFBYSxHQUFHLENBQ3BCLG9EQURvQixFQUVwQiwyQkFGb0IsRUFHcEIseUZBSG9CLEVBSXBCLHdGQUpvQixFQUtwQix1RUFMb0IsRUFNcEIsNkRBTm9CLEVBT3BCLGtEQVBvQixFQVFwQiw2Q0FSb0IsQ0FBdEI7QUFXQSxNQUFNQyxTQUFTLEdBQUc7QUFDaEJDLFFBQU0sRUFBRTtBQUFFQyxXQUFPLEVBQUUsQ0FBWDtBQUFjQyxhQUFTLEVBQUU7QUFBekIsR0FEUTtBQUVoQkMsTUFBSSxFQUFFO0FBQ0pGLFdBQU8sRUFBRSxDQURMO0FBRUpDLGFBQVMsRUFBRSxlQUZQO0FBR0pFLGNBQVUsRUFBRTtBQUNWQyxtQkFBYSxFQUFFLENBREw7QUFFVkMsc0JBQWdCLEVBQUUsQ0FBQztBQUZUO0FBSFI7QUFGVSxDQUFsQjtBQVlBLE1BQU1DLElBQUksR0FBRztBQUNYUCxRQUFNLEVBQUU7QUFDTkMsV0FBTyxFQUFFLENBREg7QUFFTkMsYUFBUyxFQUFFLG9CQUZMO0FBR05FLGNBQVUsRUFBRTtBQUFFSSxVQUFJLEVBQUU7QUFBUjtBQUhOLEdBREc7QUFNWEwsTUFBSSxFQUFFO0FBQ0pGLFdBQU8sRUFBRSxDQURMO0FBRUpDLGFBQVMsRUFBRTtBQUZQO0FBTkssQ0FBYjs7QUFZQSxNQUFNTyxjQUFjLEdBQUcsTUFBTTtBQUFBOztBQUMzQixRQUFNO0FBQUVDO0FBQUYsTUFBaUJDLGtGQUFlLEVBQXRDO0FBQ0EsUUFBTUMsZUFBZSxHQUFHQyx1RUFBYSxDQUFDLDhCQUFELENBQXJDO0FBQ0EsUUFBTUMsT0FBTyxHQUFHQyw0RUFBZSxFQUEvQjtBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDZE4sY0FBVSxDQUFDLE1BQUQsQ0FBVjtBQUNELEdBRlEsRUFFTixDQUFDQSxVQUFELENBRk0sQ0FBVDtBQUdBTSx5REFBUyxDQUFDLE1BQU07QUFDZEMsVUFBTSxDQUFDQyxRQUFQLENBQWdCO0FBQ2RDLFNBQUcsRUFBRSxDQURTO0FBRWRDLFVBQUksRUFBRSxDQUZRO0FBR2RDLGNBQVEsRUFBRTtBQUhJLEtBQWhCO0FBS0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFRQSxRQUFNQyxPQUFPLEdBQ1gsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUU7QUFBWixLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3pCLGFBQWEsQ0FBQzBCLEdBQWQsQ0FBbUJDLElBQUQsSUFBVTtBQUMzQixXQUFPLE1BQUMsU0FBRDtBQUFXLFNBQUcsRUFBRUEsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF1QkEsSUFBdkIsQ0FBUDtBQUNELEdBRkEsQ0FESCxDQURGLENBREY7O0FBVUEsUUFBTUMsYUFBYSxHQUFHQyxvREFBUyxDQUFDSCxHQUFWLENBQWMsQ0FBQztBQUFFSSxTQUFGO0FBQVNDO0FBQVQsR0FBRCxLQUFxQjtBQUN2RCxXQUNFLE1BQUMscURBQUQsQ0FBUSxFQUFSO0FBQ0UsU0FBRyxFQUFFRCxLQURQO0FBRUUsY0FBUSxFQUFFckIsSUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUUsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxtRUFDRSxNQUFDLHFEQUFELENBQVEsR0FBUjtBQUNFLGNBQVEsRUFBRTtBQUFFdUIsYUFBSyxFQUFFO0FBQVQsT0FEWjtBQUVFLGdCQUFVLEVBQUU7QUFBRUEsYUFBSyxFQUFFO0FBQVQsT0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUUsTUFBQyw0REFBRDtBQUFZLGFBQU8sRUFBQyxXQUFwQjtBQUFnQyxlQUFTLEVBQUMsSUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxJQURILEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFPLEdBQVAsQ0FGRixFQUdHRCxLQUhILENBSkYsQ0FERixDQURGLENBSkYsQ0FERjtBQXFCRCxHQXRCcUIsQ0FBdEI7QUF3QkEsUUFBTUcsY0FBYyxHQUFHQyxzREFBVyxDQUFDUixHQUFaLENBQ3JCLENBQUM7QUFBRUssUUFBRjtBQUFRSSxhQUFSO0FBQW1CTCxTQUFuQjtBQUEwQk07QUFBMUIsR0FBRCxLQUEwQztBQUN4QyxXQUNFO0FBQUksU0FBRyxFQUFFTixLQUFUO0FBQWdCLGVBQVMsRUFBQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUUsTUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dDLElBREgsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw0REFBRDtBQUNFLGFBQU8sRUFBQyxJQURWO0FBRUUsZUFBUyxFQUFDLElBRlo7QUFHRSxXQUFLLEVBQUU7QUFDTE0sYUFBSyxFQUFFRixTQUFTLEdBQ1osTUFEWSxHQUVackIsZUFBZSxHQUNmLFNBRGUsR0FFZjtBQUxDLE9BSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVdHZ0IsS0FYSCxFQVlHSyxTQUFTLElBQUksVUFaaEIsQ0FERixDQUZGLEVBa0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0MsUUFBTCxDQWxCRixDQUZGLENBREY7QUF5QkQsR0EzQm9CLENBQXZCO0FBNkJBLFNBQ0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxXQUFPLEVBQUUsQ0FGWDtBQUdFLGFBQVMsRUFBQyxLQUhaO0FBSUUsV0FBTyxFQUFDLFlBSlY7QUFLRSxjQUFVLEVBQUMsWUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyxzREFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLFFBQUksTUFGTjtBQUdFLGFBQVMsRUFBQyxLQUhaO0FBSUUsV0FBTyxFQUFDLGNBSlY7QUFLRSxjQUFVLEVBQUMsWUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyxpQkFBRDtBQUNFLFFBQUksTUFETjtBQUVFLE1BQUUsRUFBRSxFQUZOO0FBR0UsTUFBRSxFQUFFLENBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsS0FBRDtBQUNFLFdBQU8sRUFBQyxJQURWO0FBRUUsYUFBUyxFQUFDLElBRlo7QUFHRSxTQUFLLEVBQUMsUUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLEVBWUUsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILGNBREgsQ0FaRixFQWVHLEdBZkgsQ0FQRixFQXdCRSxNQUFDLGlCQUFEO0FBQ0UsUUFBSSxNQUROO0FBRUUsTUFBRSxFQUFFLEVBRk47QUFHRSxNQUFFLEVBQUUsQ0FITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyxLQUFEO0FBQU8sV0FBTyxFQUFDLElBQWY7QUFBb0IsYUFBUyxFQUFDLElBQTlCO0FBQW1DLFNBQUssRUFBQyxRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsRUFTRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFELENBQVEsRUFBUjtBQUNFLFlBQVEsRUFBRWhDLFNBRFo7QUFFRSxXQUFPLEVBQUMsUUFGVjtBQUdFLFdBQU8sRUFBQyxNQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRzJCLGFBTEgsQ0FERixDQVRGLENBeEJGLENBUEYsRUFtREUsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUMsWUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFDRSxXQUFPLEVBQUU7QUFDUFUsVUFBSSxFQUFFdEIsT0FBTyxDQUFDdUI7QUFEUCxLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR2YsT0FMSCxDQURGLENBbkRGLEVBNERFLE1BQUMsaUJBQUQ7QUFBbUIsYUFBUyxNQUE1QjtBQUE2QixXQUFPLEVBQUMsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQsQ0FBUSxHQUFSO0FBQVksY0FBVSxFQUFFO0FBQUVRLFdBQUssRUFBRTtBQUFULEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQ0UsU0FBSyxFQUFDLFNBRFI7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxvQkFBb0JRLFdBQXBCLEVBREgsQ0FERixDQUpGLENBREYsQ0FERixDQTVERixDQURGLEVBK0VFLE1BQUMsMkRBQUQ7QUFDRSxNQUFFLEVBQUMsVUFETDtBQUVFLFdBQU8sRUFBRTtBQUNQRixVQUFJLEVBQUV0QixPQUFPLENBQUN1QjtBQURQLEtBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsNkRBQUQ7QUFBYSxzQkFBa0IsRUFBRSxLQUFqQztBQUF3QyxRQUFJLEVBQUUsS0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBL0VGLENBTEYsQ0FERjtBQWlHRCxDQS9LRDs7R0FBTTVCLGM7VUFDbUJFLDBFLEVBQ0NFLCtELEVBQ1JFLG9FOzs7TUFIWk4sYztBQWdMU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjIwZjRlY2M3YjFmNDUxYTYzN2ZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENvbnRhaW5lcixcclxuICBHcmlkLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgTGlzdCxcclxuICB1c2VNZWRpYVF1ZXJ5LFxyXG4gIFBhcGVyLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBlZHVjYXRpb24sXHJcbiAgZXhwZXJpZW5jZXMsXHJcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBIb21lcGFnZUhlYWRpbmcgZnJvbSBcIi4vcGFydGlhbHMvSG9tZXBhZ2VIZWFkaW5nXCI7XHJcbi8vIGltcG9ydCBTb2NpYWxNZWRpYUVtYmVkcyBmcm9tIFwiLi9wYXJ0aWFscy9Tb2NpYWxNZWRpYUVtYmVkc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBOb25TdHlsZWRBbmNob3IsXHJcbiAgUHJpbWFyeUJhY2tncm91bmRTZWN0aW9uLFxyXG59IGZyb20gXCJAY29tcG9uZW50cy9zaGFyZWRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEFsbFByb2plY3RzIGZyb20gXCIuL3BhcnRpYWxzL0FsbFByb2plY3RzXCI7XHJcbmltcG9ydCB7IHVzZVBhZ2VzQ29udGV4dCB9IGZyb20gXCJAcm9vdC9jb250ZXh0L1BhZ2VzQ29udGV4dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEJyYW5kQnV0dG9uIH0gZnJvbSBcIkByb290L3N0eWxlcy9DdXN0b21cIjtcclxuXHJcbmltcG9ydCB1c2VTaGFyZWRTdHlsZXMgZnJvbSBcIkByb290L3N0eWxlcy91c2VTaGFyZWRTdHlsZXNcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmNvbnN0IFN0eWxlZEl0ZW0gPSBzdHlsZWQubGlgXHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2Q1ZDU7XHJcbiAgICAvKiB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7ICovXHJcbiAgICAvKiAmOmhvdmVye1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4KTtcclxuICAgIH0gKi9cclxuYDtcclxuXHJcbmNvbnN0IFN1bW1hcnlMaSA9IHN0eWxlZC5saWBcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBmb250LXNpemU6IDEuMTZyZW07XHJcbiAgICAmOjpiZWZvcmV7XHJcbiAgICAgIGNvbnRlbnQ6IFwi4oCiIFwiO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgRXhwZXJpZW5jZVNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkKFR5cG9ncmFwaHkpPHsgY29tcG9uZW50OiBzdHJpbmcgfT5gXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG5gO1xyXG5cclxuY29uc3QgU2VjdGlvbkdyaWRTdHlsZWQgPSBzdHlsZWQoR3JpZClgXHJcbiAgbWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHggIWltcG9ydGFudDtcclxuYDtcclxuXHJcbmNvbnN0IFNVTU1BUllfVEVYVFMgPSBbXHJcbiAgXCJQcm9maWNpZW50IGtub3dsZWRnZSBvZiBIVE1MIDUsIENTUyAzLCBKYXZhU2NyaXB0LlwiLFxyXG4gIFwiRXhwZXJpZWNlZCB3aXRoIE1TIEV4Y2VsLlwiLFxyXG4gIFwiRXhjZWxsZW50IGNvbW11bmljYXRpb24gc2tpbGxzLCBvcmdhbml6YXRpb24gc2tpbGxzLCBhbmQgZXhjZWxsZW50IGF0dGVudGlvbiB0byBkZXRhaWwuXCIsXHJcbiAgXCJQcm9maWNpZW50IGtub3dsZWRnZSBvZiBhY2Nlc3NpYmlsaXR5IHN0YW5kYXJkcyAoU2VjdGlvbiA1MDgvV0NBRyAyLjAgTGV2ZWwgQSBhbmQgQUEpLlwiLFxyXG4gIFwiR29vZCB1bmRlcnN0YW5kaW5nIG9mIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMgKEpBV1MsIE5WREEsIFZvaWNlT3ZlcikuXCIsXHJcbiAgXCI2IHllYXJzIG9mIGNhbGwgY2VudGVyIGFuZCBXb3JrZm9yY2UgTWFuYWdlbWVudCBleHBlcmllbmNlLlwiLFxyXG4gIFwiUHJvZmljaWVudCBleHBlcmllbmNlIGluIFFBIHRlc3RpbmcgbWV0aG9kb2xvZ3kuXCIsXHJcbiAgXCJQcm92ZW4gYWJpbGl0eSB0byBkb2N1bWVudCBpc3N1ZXMgYW5kIGJ1Z3MuXCIsXHJcbl07XHJcblxyXG5jb25zdCBjb250YWluZXIgPSB7XHJcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC0xMDBweClcIiB9LFxyXG4gIHNob3c6IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgwKVwiLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkZWxheUNoaWxkcmVuOiAyLFxyXG4gICAgICBzdGFnZ2VyRGlyZWN0aW9uOiAtMSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGl0ZW0gPSB7XHJcbiAgaGlkZGVuOiB7XHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTEwMHB4KVwiLFxyXG4gICAgdHJhbnNpdGlvbjogeyB0eXBlOiBcInNwcmluZ1wiIH0sXHJcbiAgfSxcclxuICBzaG93OiB7XHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoMClcIixcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgSG9tZXBhZ2VMYXlvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBjaGFuZ2VQYWdlIH0gPSB1c2VQYWdlc0NvbnRleHQoKTtcclxuICBjb25zdCBwcmVmZXJzRGFya01vZGUgPSB1c2VNZWRpYVF1ZXJ5KFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU2hhcmVkU3R5bGVzKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoYW5nZVBhZ2UoXCJIb21lXCIpO1xyXG4gIH0sIFtjaGFuZ2VQYWdlXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHN1bW1hcnkgPSAoXHJcbiAgICA8R3JpZCBpdGVtPlxyXG4gICAgICA8TGlzdCBzdHlsZT17eyBmb250U2l6ZTogXCIxLjFlbVwiIH19PlxyXG4gICAgICAgIHtTVU1NQVJZX1RFWFRTLm1hcCgodGV4dCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxTdW1tYXJ5TGkga2V5PXt0ZXh0fT57dGV4dH08L1N1bW1hcnlMaT47XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG5cclxuICBjb25zdCBlZHVjYXRpb25MaXN0ID0gZWR1Y2F0aW9uLm1hcCgoeyBsYWJlbCwgSWNvbiB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8bW90aW9uLmxpXHJcbiAgICAgICAga2V5PXtsYWJlbH1cclxuICAgICAgICB2YXJpYW50cz17aXRlbX1cclxuICAgICAgPlxyXG4gICAgICAgIDxTdHlsZWRJdGVtPlxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMS4yIH19XHJcbiAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29tcG9uZW50PVwiaDNcIj5cclxuICAgICAgICAgICAgICAgIHtJY29ufVxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e1wiIFwifTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIDwvU3R5bGVkSXRlbT5cclxuICAgICAgPC9tb3Rpb24ubGk+XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBleHBlcmllbmNlTGlzdCA9IGV4cGVyaWVuY2VzLm1hcChcclxuICAgICh7IEljb24sIGlzQ3VycmVudCwgbGFiZWwsIGxvY2F0aW9uIH0pID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8bGkga2V5PXtsYWJlbH0gY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgey8qIDxJY29uIG5hbWU9e2V4cC5pY29ufSAvPiAqL31cclxuICAgICAgICAgIDxFeHBlcmllbmNlU2VjdGlvbj5cclxuICAgICAgICAgICAge0ljb259XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoM1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogaXNDdXJyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogcHJlZmVyc0RhcmtNb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIiNjOGM4YzhcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCIjZmNmY2ZjXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgIHtpc0N1cnJlbnQgJiYgXCIoQWN0dWFsKVwifVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxlbT57bG9jYXRpb259PC9lbT5cclxuICAgICAgICAgIDwvRXhwZXJpZW5jZVNlY3Rpb24+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICB7LyogPFByaW1hcnlCYWNrZ3JvdW5kU2VjdGlvbj5cclxuICAgICAgICA8SG9tZXBhZ2VIZWFkaW5nIC8+XHJcbiAgICAgIDwvUHJpbWFyeUJhY2tncm91bmRTZWN0aW9uPiAqL31cclxuXHJcbiAgICAgIDxQYXBlcj5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBzcGFjaW5nPXswfVxyXG4gICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCJcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U2VjdGlvbkdyaWRTdHlsZWRcclxuICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgIHNtPXs0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDRcIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDJcIlxyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEV4cGVyaWVuY2VzXHJcbiAgICAgICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIHtleHBlcmllbmNlTGlzdH1cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICA8L1NlY3Rpb25HcmlkU3R5bGVkPlxyXG4gICAgICAgICAgICA8U2VjdGlvbkdyaWRTdHlsZWRcclxuICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgeHM9ezEwfVxyXG4gICAgICAgICAgICAgIHNtPXs0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRpdGxlIHZhcmlhbnQ9XCJoNFwiIGNvbXBvbmVudD1cImgyXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFNraWxsc1xyXG4gICAgICAgICAgICAgIDwvVGl0bGU+XHJcblxyXG4gICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgPG1vdGlvbi51bFxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50cz17Y29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT1cInNob3dcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7ZWR1Y2F0aW9uTGlzdH1cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLnVsPlxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPC9TZWN0aW9uR3JpZFN0eWxlZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiZmxleC1zdGFydFwiPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5taW5QYWRkaW5nWCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3N1bW1hcnl9XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPFNlY3Rpb25HcmlkU3R5bGVkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMyB9fT5cclxuICAgICAgICAgICAgICA8QnJhbmRCdXR0b25cclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgPE5vblN0eWxlZEFuY2hvcj5cclxuICAgICAgICAgICAgICAgICAgICB7XCJTaG93Y2FzZSBQcm9qZWN0c1wiLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvTm9uU3R5bGVkQW5jaG9yPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7LyogPC9CdXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvQnJhbmRCdXR0b24+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgIDwvU2VjdGlvbkdyaWRTdHlsZWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgICBpZD1cInByb2plY3RzXCJcclxuICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5taW5QYWRkaW5nWCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFsbFByb2plY3RzIHNob3dTbGlkZXJDb250cm9scz17ZmFsc2V9IGxvb3A9e2ZhbHNlfSAvPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgICB7LyogPFNvY2lhbE1lZGlhRW1iZWRzIC8+ICovfVxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZUxheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==