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
/* harmony import */ var _root_styles_useSharedStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @root/styles/useSharedStyles */ "./src/styles/useSharedStyles.ts");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\pages\\HomepageLayout.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import SocialMediaEmbeds from "./partials/SocialMediaEmbeds";









const StyledItem = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].li.withConfig({
  displayName: "HomepageLayout__StyledItem",
  componentId: "e0q1th-0"
})(["padding-top:0;padding-bottom:6px;display:flex;justify-content:flex-start;align-items:center;text-align:left;font-size:1.5rem;border-bottom:1px solid #dcd5d5;"]);
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
})(["text-decoration:underline;margin-bottom:30px !important;"]);
_c4 = Title;
const SectionGridStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"]).withConfig({
  displayName: "HomepageLayout__SectionGridStyled",
  componentId: "e0q1th-4"
})(["margin-top:50px !important;margin-bottom:50px !important;"]);
_c5 = SectionGridStyled;
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
  const classes = Object(_root_styles_useSharedStyles__WEBPACK_IMPORTED_MODULE_10__["default"])();
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
      lineNumber: 106,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    style: {
      fontSize: "1.1em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, SUMMARY_TEXTS.map(text => {
    return __jsx(SummaryLi, {
      key: text,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
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
        lineNumber: 117,
        columnNumber: 7
      }
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
      whileHover: {
        scale: 1.2
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "subtitle1",
      component: "h3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }
    }, Icon, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 15
      }
    }, " "), label))));
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
        lineNumber: 134,
        columnNumber: 9
      }
    }, __jsx(ExperienceSection, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 11
      }
    }, Icon, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
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
        lineNumber: 139,
        columnNumber: 15
      }
    }, label, isCurrent && "(Actual)")), __jsx("em", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 13
      }
    }, location)));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 5
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_4__["PrimaryBackgroundSection"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, __jsx(_partials_HomepageHeading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
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
      lineNumber: 167,
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
      lineNumber: 174,
      columnNumber: 11
    }
  }, __jsx(SectionGridStyled, {
    item: true,
    xs: 12,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }, __jsx(Title, {
    variant: "h4",
    component: "h2",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 15
    }
  }, "Experiences"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 15
    }
  }, experienceList), " "), __jsx(SectionGridStyled, {
    item: true,
    xs: 10,
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
  }, "Skills"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 15
    }
  }, educationList))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    classes: {
      root: classes.minPaddingX
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 13
    }
  }, summary)), __jsx(SectionGridStyled, {
    container: true,
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
    whileHover: {
      scale: 1.3
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 13
    }
  }, __jsx(_root_styles_Custom__WEBPACK_IMPORTED_MODULE_9__["BrandButton"], {
    color: "blue",
    size: "large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 17
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_4__["NonStyledAnchor"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
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
      lineNumber: 235,
      columnNumber: 9
    }
  }, __jsx(_partials_AllProjects__WEBPACK_IMPORTED_MODULE_6__["default"], {
    showSliderControls: false,
    loop: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 11
    }
  }))));
};

_s(HomepageLayout, "Defjq1P8+oVxXof664iti7j+4z8=", false, function () {
  return [_root_context_PagesContext__WEBPACK_IMPORTED_MODULE_7__["usePagesContext"], _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"], _root_styles_useSharedStyles__WEBPACK_IMPORTED_MODULE_10__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Ib21lcGFnZUxheW91dC50c3giXSwibmFtZXMiOlsiU3R5bGVkSXRlbSIsInN0eWxlZCIsImxpIiwiU3VtbWFyeUxpIiwiRXhwZXJpZW5jZVNlY3Rpb24iLCJzZWN0aW9uIiwiVGl0bGUiLCJUeXBvZ3JhcGh5IiwiU2VjdGlvbkdyaWRTdHlsZWQiLCJHcmlkIiwiU1VNTUFSWV9URVhUUyIsInZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInZpc2libGUiLCJIb21lcGFnZUxheW91dCIsImNoYW5nZVBhZ2UiLCJ1c2VQYWdlc0NvbnRleHQiLCJwcmVmZXJzRGFya01vZGUiLCJ1c2VNZWRpYVF1ZXJ5IiwiY2xhc3NlcyIsInVzZVNoYXJlZFN0eWxlcyIsInVzZUVmZmVjdCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwic3VtbWFyeSIsImZvbnRTaXplIiwibWFwIiwidGV4dCIsImVkdWNhdGlvbkxpc3QiLCJlZHVjYXRpb24iLCJsYWJlbCIsIkljb24iLCJzY2FsZSIsImV4cGVyaWVuY2VMaXN0IiwiZXhwZXJpZW5jZXMiLCJpc0N1cnJlbnQiLCJsb2NhdGlvbiIsImNvbG9yIiwicm9vdCIsIm1pblBhZGRpbmdYIiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVVBO0NBS0E7O0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLE1BQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsRUFBVjtBQUFBO0FBQUE7QUFBQSxxS0FBaEI7S0FBTUYsVTtBQWVOLE1BQU1HLFNBQVMsR0FBR0YseURBQU0sQ0FBQ0MsRUFBVjtBQUFBO0FBQUE7QUFBQSwrSEFBZjtNQUFNQyxTO0FBV04sTUFBTUMsaUJBQWlCLEdBQUdILHlEQUFNLENBQUNJLE9BQVY7QUFBQTtBQUFB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QixXQUFPLEVBQUMsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQsQ0FBUSxHQUFSO0FBQVksY0FBVSxFQUFFO0FBQUVRLFdBQUssRUFBRTtBQUFULEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQWEsU0FBSyxFQUFDLE1BQW5CO0FBQTBCLFFBQUksRUFBQyxPQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxvQkFBb0JRLFdBQXBCLEVBREgsQ0FERixDQURGLENBREYsQ0FERixDQXJERixDQURGLEVBcUVFLE1BQUMsMkRBQUQ7QUFDRSxNQUFFLEVBQUMsVUFETDtBQUVFLFdBQU8sRUFBRTtBQUNQRixVQUFJLEVBQUV0QixPQUFPLENBQUN1QjtBQURQLEtBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsNkRBQUQ7QUFBYSxzQkFBa0IsRUFBRSxLQUFqQztBQUF3QyxRQUFJLEVBQUUsS0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBckVGLENBTEYsQ0FERjtBQXVGRCxDQTdKRDs7R0FBTTVCLGM7VUFDbUJFLDBFLEVBQ0NFLCtELEVBQ1JFLHFFOzs7TUFIWk4sYztBQThKU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjEwYmRmZjE1MGZlYWYxNWYxOTI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENvbnRhaW5lcixcclxuICBHcmlkLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgTGlzdCxcclxuICB1c2VNZWRpYVF1ZXJ5LFxyXG4gIFBhcGVyLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBlZHVjYXRpb24sXHJcbiAgZXhwZXJpZW5jZXMsXHJcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBIb21lcGFnZUhlYWRpbmcgZnJvbSBcIi4vcGFydGlhbHMvSG9tZXBhZ2VIZWFkaW5nXCI7XHJcbi8vIGltcG9ydCBTb2NpYWxNZWRpYUVtYmVkcyBmcm9tIFwiLi9wYXJ0aWFscy9Tb2NpYWxNZWRpYUVtYmVkc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBOb25TdHlsZWRBbmNob3IsXHJcbiAgUHJpbWFyeUJhY2tncm91bmRTZWN0aW9uLFxyXG59IGZyb20gXCJAY29tcG9uZW50cy9zaGFyZWRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEFsbFByb2plY3RzIGZyb20gXCIuL3BhcnRpYWxzL0FsbFByb2plY3RzXCI7XHJcbmltcG9ydCB7IHVzZVBhZ2VzQ29udGV4dCB9IGZyb20gXCJAcm9vdC9jb250ZXh0L1BhZ2VzQ29udGV4dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEJyYW5kQnV0dG9uIH0gZnJvbSBcIkByb290L3N0eWxlcy9DdXN0b21cIjtcclxuXHJcbmltcG9ydCB1c2VTaGFyZWRTdHlsZXMgZnJvbSBcIkByb290L3N0eWxlcy91c2VTaGFyZWRTdHlsZXNcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmNvbnN0IFN0eWxlZEl0ZW0gPSBzdHlsZWQubGlgXHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2Q1ZDU7XHJcbiAgICAvKiB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7ICovXHJcbiAgICAvKiAmOmhvdmVye1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4KTtcclxuICAgIH0gKi9cclxuYDtcclxuXHJcbmNvbnN0IFN1bW1hcnlMaSA9IHN0eWxlZC5saWBcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBmb250LXNpemU6IDEuMTZyZW07XHJcbiAgICAmOjpiZWZvcmV7XHJcbiAgICAgIGNvbnRlbnQ6IFwi4oCiIFwiO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgRXhwZXJpZW5jZVNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkKFR5cG9ncmFwaHkpPHsgY29tcG9uZW50OiBzdHJpbmcgfT5gXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG5gO1xyXG5cclxuY29uc3QgU2VjdGlvbkdyaWRTdHlsZWQgPSBzdHlsZWQoR3JpZClgXHJcbiAgbWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHggIWltcG9ydGFudDtcclxuYDtcclxuXHJcbmNvbnN0IFNVTU1BUllfVEVYVFMgPSBbXHJcbiAgXCJQcm9maWNpZW50IGtub3dsZWRnZSBvZiBIVE1MIDUsIENTUyAzLCBKYXZhU2NyaXB0LlwiLFxyXG4gIFwiRXhwZXJpZWNlZCB3aXRoIE1TIEV4Y2VsLlwiLFxyXG4gIFwiRXhjZWxsZW50IGNvbW11bmljYXRpb24gc2tpbGxzLCBvcmdhbml6YXRpb24gc2tpbGxzLCBhbmQgZXhjZWxsZW50IGF0dGVudGlvbiB0byBkZXRhaWwuXCIsXHJcbiAgXCJQcm9maWNpZW50IGtub3dsZWRnZSBvZiBhY2Nlc3NpYmlsaXR5IHN0YW5kYXJkcyAoU2VjdGlvbiA1MDgvV0NBRyAyLjAgTGV2ZWwgQSBhbmQgQUEpLlwiLFxyXG4gIFwiR29vZCB1bmRlcnN0YW5kaW5nIG9mIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMgKEpBV1MsIE5WREEsIFZvaWNlT3ZlcikuXCIsXHJcbiAgXCI2IHllYXJzIG9mIGNhbGwgY2VudGVyIGFuZCBXb3JrZm9yY2UgTWFuYWdlbWVudCBleHBlcmllbmNlLlwiLFxyXG4gIFwiUHJvZmljaWVudCBleHBlcmllbmNlIGluIFFBIHRlc3RpbmcgbWV0aG9kb2xvZ3kuXCIsXHJcbiAgXCJQcm92ZW4gYWJpbGl0eSB0byBkb2N1bWVudCBpc3N1ZXMgYW5kIGJ1Z3MuXCIsXHJcbl07XHJcblxyXG5jb25zdCB2YXJpYW50cyA9IHtcclxuICBoaWRkZW46IHsgb3BhY2l0eTogMC41IH0sXHJcbiAgdmlzaWJsZTogeyBvcGFjaXR5OiAxIH0sXHJcbn07XHJcblxyXG5jb25zdCBIb21lcGFnZUxheW91dCA9ICgpID0+IHtcclxuICBjb25zdCB7IGNoYW5nZVBhZ2UgfSA9IHVzZVBhZ2VzQ29udGV4dCgpO1xyXG4gIGNvbnN0IHByZWZlcnNEYXJrTW9kZSA9IHVzZU1lZGlhUXVlcnkoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTaGFyZWRTdHlsZXMoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY2hhbmdlUGFnZShcIkhvbWVcIik7XHJcbiAgfSwgW2NoYW5nZVBhZ2VdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc3VtbWFyeSA9IChcclxuICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgIDxMaXN0IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuMWVtXCIgfX0+XHJcbiAgICAgICAge1NVTU1BUllfVEVYVFMubWFwKCh0ZXh0KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPFN1bW1hcnlMaSBrZXk9e3RleHR9Pnt0ZXh0fTwvU3VtbWFyeUxpPjtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGVkdWNhdGlvbkxpc3QgPSBlZHVjYXRpb24ubWFwKCh7IGxhYmVsLCBJY29uIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTdHlsZWRJdGVtIGtleT17bGFiZWx9PlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8bW90aW9uLmRpdiB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb21wb25lbnQ9XCJoM1wiPlxyXG4gICAgICAgICAgICAgIHtJY29ufVxyXG4gICAgICAgICAgICAgIDxzcGFuPntcIiBcIn08L3NwYW4+XHJcbiAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvU3R5bGVkSXRlbT5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGV4cGVyaWVuY2VMaXN0ID0gZXhwZXJpZW5jZXMubWFwKFxyXG4gICAgKHsgSWNvbiwgaXNDdXJyZW50LCBsYWJlbCwgbG9jYXRpb24gfSkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBrZXk9e2xhYmVsfSBjbGFzc05hbWU9XCJtYi0xXCI+XHJcbiAgICAgICAgICB7LyogPEljb24gbmFtZT17ZXhwLmljb259IC8+ICovfVxyXG4gICAgICAgICAgPEV4cGVyaWVuY2VTZWN0aW9uPlxyXG4gICAgICAgICAgICB7SWNvbn1cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgzXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBpc0N1cnJlbnRcclxuICAgICAgICAgICAgICAgICAgICA/IFwiYmx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBwcmVmZXJzRGFya01vZGVcclxuICAgICAgICAgICAgICAgICAgICA/IFwiI2M4YzhjOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIiNmY2ZjZmNcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAge2lzQ3VycmVudCAmJiBcIihBY3R1YWwpXCJ9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGVtPntsb2NhdGlvbn08L2VtPlxyXG4gICAgICAgICAgPC9FeHBlcmllbmNlU2VjdGlvbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxQcmltYXJ5QmFja2dyb3VuZFNlY3Rpb24+XHJcbiAgICAgICAgPEhvbWVwYWdlSGVhZGluZyAvPlxyXG4gICAgICA8L1ByaW1hcnlCYWNrZ3JvdW5kU2VjdGlvbj5cclxuXHJcbiAgICAgIDxQYXBlcj5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBzcGFjaW5nPXswfVxyXG4gICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCJcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U2VjdGlvbkdyaWRTdHlsZWRcclxuICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgIHNtPXs0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDRcIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDJcIlxyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEV4cGVyaWVuY2VzXHJcbiAgICAgICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIHtleHBlcmllbmNlTGlzdH1cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICA8L1NlY3Rpb25HcmlkU3R5bGVkPlxyXG4gICAgICAgICAgICA8U2VjdGlvbkdyaWRTdHlsZWRcclxuICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgeHM9ezEwfVxyXG4gICAgICAgICAgICAgIHNtPXs0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRpdGxlIHZhcmlhbnQ9XCJoNFwiIGNvbXBvbmVudD1cImgyXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFNraWxsc1xyXG4gICAgICAgICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICB7ZWR1Y2F0aW9uTGlzdH1cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvU2VjdGlvbkdyaWRTdHlsZWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImZsZXgtc3RhcnRcIj5cclxuICAgICAgICAgICAgPENvbnRhaW5lclxyXG4gICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMubWluUGFkZGluZ1gsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzdW1tYXJ5fVxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxTZWN0aW9uR3JpZFN0eWxlZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdiB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjMgfX0+XHJcbiAgICAgICAgICAgICAgPEJyYW5kQnV0dG9uIGNvbG9yPVwiYmx1ZVwiIHNpemU9XCJsYXJnZVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8Tm9uU3R5bGVkQW5jaG9yPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcIlNob3djYXNlIFByb2plY3RzXCIudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgPC9Ob25TdHlsZWRBbmNob3I+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9CcmFuZEJ1dHRvbj5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPC9TZWN0aW9uR3JpZFN0eWxlZD5cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgIGlkPVwicHJvamVjdHNcIlxyXG4gICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICByb290OiBjbGFzc2VzLm1pblBhZGRpbmdYLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QWxsUHJvamVjdHMgc2hvd1NsaWRlckNvbnRyb2xzPXtmYWxzZX0gbG9vcD17ZmFsc2V9IC8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICAgIHsvKiA8U29jaWFsTWVkaWFFbWJlZHMgLz4gKi99XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9