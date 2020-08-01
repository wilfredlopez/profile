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
    color: "default",
    size: "large",
    className: classes.minPaddingX,
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
      lineNumber: 227,
      columnNumber: 17
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_4__["NonStyledAnchor"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
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
      lineNumber: 239,
      columnNumber: 9
    }
  }, __jsx(_partials_AllProjects__WEBPACK_IMPORTED_MODULE_6__["default"], {
    showSliderControls: false,
    loop: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Ib21lcGFnZUxheW91dC50c3giXSwibmFtZXMiOlsiU3R5bGVkSXRlbSIsInN0eWxlZCIsImxpIiwiU3VtbWFyeUxpIiwiRXhwZXJpZW5jZVNlY3Rpb24iLCJzZWN0aW9uIiwiVGl0bGUiLCJUeXBvZ3JhcGh5IiwiU2VjdGlvbkdyaWRTdHlsZWQiLCJHcmlkIiwiU1VNTUFSWV9URVhUUyIsInZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInZpc2libGUiLCJIb21lcGFnZUxheW91dCIsImNoYW5nZVBhZ2UiLCJ1c2VQYWdlc0NvbnRleHQiLCJwcmVmZXJzRGFya01vZGUiLCJ1c2VNZWRpYVF1ZXJ5IiwiY2xhc3NlcyIsInVzZVNoYXJlZFN0eWxlcyIsInVzZUVmZmVjdCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwic3VtbWFyeSIsImZvbnRTaXplIiwibWFwIiwidGV4dCIsImVkdWNhdGlvbkxpc3QiLCJlZHVjYXRpb24iLCJsYWJlbCIsIkljb24iLCJzY2FsZSIsImV4cGVyaWVuY2VMaXN0IiwiZXhwZXJpZW5jZXMiLCJpc0N1cnJlbnQiLCJsb2NhdGlvbiIsImNvbG9yIiwicm9vdCIsIm1pblBhZGRpbmdYIiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVVBO0NBS0E7O0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLE1BQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsRUFBVjtBQUFBO0FBQUE7QUFBQSxxS0FBaEI7S0FBTUYsVTtBQWVOLE1BQU1HLFNBQVMsR0FBR0YseURBQU0sQ0FBQ0MsRUFBVjtBQUFBO0FBQUE7QUFBQSwrSEFBZjtNQUFNQyxTO0FBV04sTUFBTUMsaUJBQWlCLEdBQUdILHlEQUFNLENBQUNJLE9BQVY7QUFBQTtBQUFB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QixXQUFPLEVBQUMsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQsQ0FBUSxHQUFSO0FBQVksY0FBVSxFQUFFO0FBQUVRLFdBQUssRUFBRTtBQUFULEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQ0UsU0FBSyxFQUFDLFNBRFI7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLGFBQVMsRUFBRWhCLE9BQU8sQ0FBQ3VCLFdBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLG9CQUFvQkMsV0FBcEIsRUFESCxDQURGLENBTEYsQ0FERixDQURGLENBckRGLENBREYsRUF5RUUsTUFBQywyREFBRDtBQUNFLE1BQUUsRUFBQyxVQURMO0FBRUUsV0FBTyxFQUFFO0FBQ1BGLFVBQUksRUFBRXRCLE9BQU8sQ0FBQ3VCO0FBRFAsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyw2REFBRDtBQUFhLHNCQUFrQixFQUFFLEtBQWpDO0FBQXdDLFFBQUksRUFBRSxLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0F6RUYsQ0FMRixDQURGO0FBMkZELENBaktEOztHQUFNNUIsYztVQUNtQkUsMEUsRUFDQ0UsK0QsRUFDUkUscUU7OztNQUhaTixjO0FBa0tTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOTc5NjgyMDdjODg1OWRlMTdkOTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ29udGFpbmVyLFxyXG4gIEdyaWQsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBMaXN0LFxyXG4gIHVzZU1lZGlhUXVlcnksXHJcbiAgUGFwZXIsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGVkdWNhdGlvbixcclxuICBleHBlcmllbmNlcyxcclxufSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IEhvbWVwYWdlSGVhZGluZyBmcm9tIFwiLi9wYXJ0aWFscy9Ib21lcGFnZUhlYWRpbmdcIjtcclxuLy8gaW1wb3J0IFNvY2lhbE1lZGlhRW1iZWRzIGZyb20gXCIuL3BhcnRpYWxzL1NvY2lhbE1lZGlhRW1iZWRzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIE5vblN0eWxlZEFuY2hvcixcclxuICBQcmltYXJ5QmFja2dyb3VuZFNlY3Rpb24sXHJcbn0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgQWxsUHJvamVjdHMgZnJvbSBcIi4vcGFydGlhbHMvQWxsUHJvamVjdHNcIjtcclxuaW1wb3J0IHsgdXNlUGFnZXNDb250ZXh0IH0gZnJvbSBcIkByb290L2NvbnRleHQvUGFnZXNDb250ZXh0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgQnJhbmRCdXR0b24gfSBmcm9tIFwiQHJvb3Qvc3R5bGVzL0N1c3RvbVwiO1xyXG5cclxuaW1wb3J0IHVzZVNoYXJlZFN0eWxlcyBmcm9tIFwiQHJvb3Qvc3R5bGVzL3VzZVNoYXJlZFN0eWxlc1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxuY29uc3QgU3R5bGVkSXRlbSA9IHN0eWxlZC5saWBcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZDVkNTtcclxuICAgIC8qIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluLW91dDsgKi9cclxuICAgIC8qICY6aG92ZXJ7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgpO1xyXG4gICAgfSAqL1xyXG5gO1xyXG5cclxuY29uc3QgU3VtbWFyeUxpID0gc3R5bGVkLmxpYFxyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGZvbnQtc2l6ZTogMS4xNnJlbTtcclxuICAgICY6OmJlZm9yZXtcclxuICAgICAgY29udGVudDogXCLigKIgXCI7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBFeHBlcmllbmNlU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQoVHlwb2dyYXBoeSk8eyBjb21wb25lbnQ6IHN0cmluZyB9PmBcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbmA7XHJcblxyXG5jb25zdCBTZWN0aW9uR3JpZFN0eWxlZCA9IHN0eWxlZChHcmlkKWBcclxuICBtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweCAhaW1wb3J0YW50O1xyXG5gO1xyXG5cclxuY29uc3QgU1VNTUFSWV9URVhUUyA9IFtcclxuICBcIlByb2ZpY2llbnQga25vd2xlZGdlIG9mIEhUTUwgNSwgQ1NTIDMsIEphdmFTY3JpcHQuXCIsXHJcbiAgXCJFeHBlcmllY2VkIHdpdGggTVMgRXhjZWwuXCIsXHJcbiAgXCJFeGNlbGxlbnQgY29tbXVuaWNhdGlvbiBza2lsbHMsIG9yZ2FuaXphdGlvbiBza2lsbHMsIGFuZCBleGNlbGxlbnQgYXR0ZW50aW9uIHRvIGRldGFpbC5cIixcclxuICBcIlByb2ZpY2llbnQga25vd2xlZGdlIG9mIGFjY2Vzc2liaWxpdHkgc3RhbmRhcmRzIChTZWN0aW9uIDUwOC9XQ0FHIDIuMCBMZXZlbCBBIGFuZCBBQSkuXCIsXHJcbiAgXCJHb29kIHVuZGVyc3RhbmRpbmcgb2YgYXNzaXN0aXZlIHRlY2hub2xvZ2llcyAoSkFXUywgTlZEQSwgVm9pY2VPdmVyKS5cIixcclxuICBcIjYgeWVhcnMgb2YgY2FsbCBjZW50ZXIgYW5kIFdvcmtmb3JjZSBNYW5hZ2VtZW50IGV4cGVyaWVuY2UuXCIsXHJcbiAgXCJQcm9maWNpZW50IGV4cGVyaWVuY2UgaW4gUUEgdGVzdGluZyBtZXRob2RvbG9neS5cIixcclxuICBcIlByb3ZlbiBhYmlsaXR5IHRvIGRvY3VtZW50IGlzc3VlcyBhbmQgYnVncy5cIixcclxuXTtcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLjUgfSxcclxuICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEgfSxcclxufTtcclxuXHJcbmNvbnN0IEhvbWVwYWdlTGF5b3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY2hhbmdlUGFnZSB9ID0gdXNlUGFnZXNDb250ZXh0KCk7XHJcbiAgY29uc3QgcHJlZmVyc0RhcmtNb2RlID0gdXNlTWVkaWFRdWVyeShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIik7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVNoYXJlZFN0eWxlcygpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjaGFuZ2VQYWdlKFwiSG9tZVwiKTtcclxuICB9LCBbY2hhbmdlUGFnZV0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzdW1tYXJ5ID0gKFxyXG4gICAgPEdyaWQgaXRlbT5cclxuICAgICAgPExpc3Qgc3R5bGU9e3sgZm9udFNpemU6IFwiMS4xZW1cIiB9fT5cclxuICAgICAgICB7U1VNTUFSWV9URVhUUy5tYXAoKHRleHQpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8U3VtbWFyeUxpIGtleT17dGV4dH0+e3RleHR9PC9TdW1tYXJ5TGk+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZWR1Y2F0aW9uTGlzdCA9IGVkdWNhdGlvbi5tYXAoKHsgbGFiZWwsIEljb24gfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN0eWxlZEl0ZW0ga2V5PXtsYWJlbH0+XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxtb3Rpb24uZGl2IHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMiB9fT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbXBvbmVudD1cImgzXCI+XHJcbiAgICAgICAgICAgICAge0ljb259XHJcbiAgICAgICAgICAgICAgPHNwYW4+e1wiIFwifTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9TdHlsZWRJdGVtPlxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZXhwZXJpZW5jZUxpc3QgPSBleHBlcmllbmNlcy5tYXAoXHJcbiAgICAoeyBJY29uLCBpc0N1cnJlbnQsIGxhYmVsLCBsb2NhdGlvbiB9KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGtleT17bGFiZWx9IGNsYXNzTmFtZT1cIm1iLTFcIj5cclxuICAgICAgICAgIHsvKiA8SWNvbiBuYW1lPXtleHAuaWNvbn0gLz4gKi99XHJcbiAgICAgICAgICA8RXhwZXJpZW5jZVNlY3Rpb24+XHJcbiAgICAgICAgICAgIHtJY29ufVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IGlzQ3VycmVudFxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJibHVlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IHByZWZlcnNEYXJrTW9kZVxyXG4gICAgICAgICAgICAgICAgICAgID8gXCIjYzhjOGM4XCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiI2ZjZmNmY1wiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICB7aXNDdXJyZW50ICYmIFwiKEFjdHVhbClcIn1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZW0+e2xvY2F0aW9ufTwvZW0+XHJcbiAgICAgICAgICA8L0V4cGVyaWVuY2VTZWN0aW9uPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPFByaW1hcnlCYWNrZ3JvdW5kU2VjdGlvbj5cclxuICAgICAgICA8SG9tZXBhZ2VIZWFkaW5nIC8+XHJcbiAgICAgIDwvUHJpbWFyeUJhY2tncm91bmRTZWN0aW9uPlxyXG5cclxuICAgICAgPFBhcGVyPlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIHNwYWNpbmc9ezB9XHJcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAganVzdGlmeT1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1hcm91bmRcIlxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uR3JpZFN0eWxlZFxyXG4gICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgc209ezR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMlwiXHJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRXhwZXJpZW5jZXNcclxuICAgICAgICAgICAgICA8L1RpdGxlPlxyXG4gICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAge2V4cGVyaWVuY2VMaXN0fVxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvU2VjdGlvbkdyaWRTdHlsZWQ+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uR3JpZFN0eWxlZFxyXG4gICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICB4cz17MTB9XHJcbiAgICAgICAgICAgICAgc209ezR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VGl0bGUgdmFyaWFudD1cImg0XCIgY29tcG9uZW50PVwiaDJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgU2tpbGxzXHJcbiAgICAgICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIHtlZHVjYXRpb25MaXN0fVxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPC9TZWN0aW9uR3JpZFN0eWxlZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiZmxleC1zdGFydFwiPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5taW5QYWRkaW5nWCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3N1bW1hcnl9XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPFNlY3Rpb25HcmlkU3R5bGVkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMyB9fT5cclxuICAgICAgICAgICAgICA8QnJhbmRCdXR0b25cclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1pblBhZGRpbmdYfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgPE5vblN0eWxlZEFuY2hvcj5cclxuICAgICAgICAgICAgICAgICAgICB7XCJTaG93Y2FzZSBQcm9qZWN0c1wiLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvTm9uU3R5bGVkQW5jaG9yPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7LyogPC9CdXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvQnJhbmRCdXR0b24+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgIDwvU2VjdGlvbkdyaWRTdHlsZWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgICBpZD1cInByb2plY3RzXCJcclxuICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5taW5QYWRkaW5nWCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFsbFByb2plY3RzIHNob3dTbGlkZXJDb250cm9scz17ZmFsc2V9IGxvb3A9e2ZhbHNlfSAvPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgICB7LyogPFNvY2lhbE1lZGlhRW1iZWRzIC8+ICovfVxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZUxheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==