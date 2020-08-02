webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/home/HomepageLayout.tsx":
/*!************************************************!*\
  !*** ./src/components/home/HomepageLayout.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/shared */ "./src/components/shared/index.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _root_context_PagesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @root/context/PagesContext */ "./src/context/PagesContext.tsx");
/* harmony import */ var _root_theme_useSharedStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @root/theme/useSharedStyles */ "./src/theme/useSharedStyles.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ExperienceList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ExperienceList */ "./src/components/home/ExperienceList.tsx");
/* harmony import */ var _EducationList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EducationList */ "./src/components/home/EducationList.tsx");
/* harmony import */ var _partials_HomepageHeading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../partials/HomepageHeading */ "./src/components/partials/HomepageHeading.tsx");
/* harmony import */ var _HomeProjectGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HomeProjectGrid */ "./src/components/home/HomeProjectGrid.tsx");
/* harmony import */ var _ShowCaseProjectButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShowCaseProjectButton */ "./src/components/home/ShowCaseProjectButton.tsx");



var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\home\\HomepageLayout.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
// import SocialMediaEmbeds from "./partials/SocialMediaEmbeds";











const StyledItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "HomepageLayout__StyledItem",
  componentId: "sc-18ypig9-0"
})(["padding-top:0;padding-bottom:6px;display:flex;justify-content:flex-start;align-items:center;text-align:left;font-size:1.5rem;border-bottom:1px solid #dcd5d5;"]);
const SummaryLi = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "HomepageLayout__SummaryLi",
  componentId: "sc-18ypig9-1"
})(["padding-top:2px;padding-bottom:2px;padding-left:12px;text-align:start;font-size:1.16rem;&::before{content:\"\u2022 \";}"]);
_c = SummaryLi;
const ExperienceSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "HomepageLayout__ExperienceSection",
  componentId: "sc-18ypig9-2"
})(["display:flex;flex-direction:column;align-items:center;"]);
const Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"]).withConfig({
  displayName: "HomepageLayout__Title",
  componentId: "sc-18ypig9-3"
})(["text-decoration:underline;margin-bottom:30px !important;"]);
_c2 = Title;
const SectionGridStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"]).withConfig({
  displayName: "HomepageLayout__SectionGridStyled",
  componentId: "sc-18ypig9-4"
})(["margin-top:50px !important;margin-bottom:50px !important;"]);
_c3 = SectionGridStyled;
const SUMMARY_TEXTS = ["Proficient knowledge of HTML 5, CSS 3, JavaScript.", "Experieced with MS Excel.", "Excellent communication skills, organization skills, and excellent attention to detail.", "Proficient knowledge of accessibility standards (Section 508/WCAG 2.0 Level A and AA).", "Good understanding of assistive technologies (JAWS, NVDA, VoiceOver).", "6 years of call center and Workforce Management experience.", "Proficient experience in QA testing methodology.", "Proven ability to document issues and bugs."];

var _StyledBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "HomepageLayout___StyledBox",
  componentId: "sc-18ypig9-5"
})({
  marginTop: 50
});

var _StyledBox2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "HomepageLayout___StyledBox2",
  componentId: "sc-18ypig9-6"
})({
  marginTop: 25
});

const HomepageLayout = () => {
  _s();

  const {
    changePage
  } = Object(_root_context_PagesContext__WEBPACK_IMPORTED_MODULE_3__["usePagesContext"])();
  const prefersDarkMode = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])("(prefers-color-scheme: dark)");
  const classes = Object(_root_theme_useSharedStyles__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    changePage("Home");
  }, [changePage]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);

  const summary = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    maxWidth: "md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    style: {
      fontSize: "1.1em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, SUMMARY_TEXTS.map(text => {
    return __jsx(SummaryLi, {
      key: text,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 20
      }
    }, text);
  }))));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_1__["PrimaryBackgroundSection"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, __jsx(_partials_HomepageHeading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    square: true,
    elevation: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 0,
    direction: "row",
    justify: "flex-start",
    alignItems: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    direction: "row",
    justify: "space-around",
    alignItems: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, __jsx(SectionGridStyled, {
    item: true,
    xs: 12,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, __jsx(Title, {
    variant: "h4",
    component: "h2",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }, "Experiences"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, __jsx(_ExperienceList__WEBPACK_IMPORTED_MODULE_6__["ExperienceList"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  })), " "), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 10,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
    xsDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }, __jsx(_StyledBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  })), __jsx(Title, {
    variant: "h4",
    component: "h2",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }, "Skills"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 15
    }
  }, __jsx(_EducationList__WEBPACK_IMPORTED_MODULE_7__["EducationList"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 17
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    classes: {
      root: classes.minPaddingX
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }, __jsx(_StyledBox2, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 15
    }
  }), summary)))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    pb: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    square: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    pt: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 9
    }
  }), __jsx(_ShowCaseProjectButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    variant: "outlined",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    id: "projects",
    classes: {
      root: classes.minPaddingX
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }
  }, __jsx(_HomeProjectGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 11
    }
  }))));
};

_s(HomepageLayout, "Defjq1P8+oVxXof664iti7j+4z8=", false, function () {
  return [_root_context_PagesContext__WEBPACK_IMPORTED_MODULE_3__["usePagesContext"], _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"], _root_theme_useSharedStyles__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

_c4 = HomepageLayout;
/* harmony default export */ __webpack_exports__["default"] = (HomepageLayout);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "SummaryLi");
$RefreshReg$(_c2, "Title");
$RefreshReg$(_c3, "SectionGridStyled");
$RefreshReg$(_c4, "HomepageLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL0hvbWVwYWdlTGF5b3V0LnRzeCJdLCJuYW1lcyI6WyJTdHlsZWRJdGVtIiwic3R5bGVkIiwibGkiLCJTdW1tYXJ5TGkiLCJFeHBlcmllbmNlU2VjdGlvbiIsInNlY3Rpb24iLCJUaXRsZSIsIlR5cG9ncmFwaHkiLCJTZWN0aW9uR3JpZFN0eWxlZCIsIkdyaWQiLCJTVU1NQVJZX1RFWFRTIiwibWFyZ2luVG9wIiwiSG9tZXBhZ2VMYXlvdXQiLCJjaGFuZ2VQYWdlIiwidXNlUGFnZXNDb250ZXh0IiwicHJlZmVyc0RhcmtNb2RlIiwidXNlTWVkaWFRdWVyeSIsImNsYXNzZXMiLCJ1c2VTaGFyZWRTdHlsZXMiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImxlZnQiLCJiZWhhdmlvciIsInN1bW1hcnkiLCJmb250U2l6ZSIsIm1hcCIsInRleHQiLCJyb290IiwibWluUGFkZGluZ1giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQWFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsRUFBVjtBQUFBO0FBQUE7QUFBQSxxS0FBaEI7QUFlQSxNQUFNQyxTQUFTLEdBQUdGLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsK0hBQWY7S0FBTUMsUztBQVdOLE1BQU1DLGlCQUFpQixHQUFHSCx5REFBTSxDQUFDSSxPQUFWO0FBQUE7QUFBQTtBQUFBLDhEQUF2QjtBQU1BLE1BQU1DLEtBQUssR0FBR0wsaUVBQU0sQ0FBQ00sNERBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxnRUFBWDtNQUFNRCxLO0FBS04sTUFBTUUsaUJBQWlCLEdBQUdQLGlFQUFNLENBQUNRLHNEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsaUVBQXZCO01BQU1ELGlC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QTtBQUFBLElBMUZGLEVBMkZFLE1BQUMsdURBQUQ7QUFBTyxVQUFNLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFHRSxNQUFDLCtEQUFEO0FBQXVCLFNBQUssRUFBQyxTQUE3QjtBQUF1QyxXQUFPLEVBQUMsVUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUUsTUFBQywyREFBRDtBQUNFLE1BQUUsRUFBQyxVQURMO0FBRUUsV0FBTyxFQUFFO0FBQ1BJLFVBQUksRUFBRVosT0FBTyxDQUFDYTtBQURQLEtBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBSkYsQ0EzRkYsQ0FERjtBQTRHRCxDQXZJRDs7R0FBTWxCLGM7VUFDbUJFLDBFLEVBQ0NFLCtELEVBQ1JFLG1FOzs7TUFIWk4sYztBQXdJU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjg2NGJhOTMyZDdjMjM1ZjY2MWU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgU29jaWFsTWVkaWFFbWJlZHMgZnJvbSBcIi4vcGFydGlhbHMvU29jaWFsTWVkaWFFbWJlZHNcIjtcclxuaW1wb3J0IHtcclxuICBQcmltYXJ5QmFja2dyb3VuZFNlY3Rpb24sXHJcbn0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZFwiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuXHJcbiAgSGlkZGVuLFxyXG4gIExpc3QsXHJcblxyXG4gIFBhcGVyLFxyXG4gIFR5cG9ncmFwaHksXHJcblxyXG4gIHVzZU1lZGlhUXVlcnksXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZVBhZ2VzQ29udGV4dCB9IGZyb20gXCJAcm9vdC9jb250ZXh0L1BhZ2VzQ29udGV4dFwiO1xyXG5pbXBvcnQgdXNlU2hhcmVkU3R5bGVzIGZyb20gXCJAcm9vdC90aGVtZS91c2VTaGFyZWRTdHlsZXNcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIGV4cGVyaWVuY2VzSWNvbnMsXHJcbiAgRXhwZXJpZW5jZUxpc3QsXHJcbn0gZnJvbSBcIi4vRXhwZXJpZW5jZUxpc3RcIjtcclxuaW1wb3J0IHsgZWR1Y2F0aW9uSWNvbnMsIEVkdWNhdGlvbkxpc3QgfSBmcm9tIFwiLi9FZHVjYXRpb25MaXN0XCI7XHJcbmltcG9ydCBIb21lcGFnZUhlYWRpbmcgZnJvbSBcIi4uL3BhcnRpYWxzL0hvbWVwYWdlSGVhZGluZ1wiO1xyXG5pbXBvcnQgSG9tZVByb2plY3RHcmlkIGZyb20gXCIuL0hvbWVQcm9qZWN0R3JpZFwiO1xyXG5pbXBvcnQgU2hvd0Nhc2VQcm9qZWN0QnV0dG9uIGZyb20gXCIuL1Nob3dDYXNlUHJvamVjdEJ1dHRvblwiO1xyXG5cclxuY29uc3QgU3R5bGVkSXRlbSA9IHN0eWxlZC5saWBcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZDVkNTtcclxuICAgIC8qIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluLW91dDsgKi9cclxuICAgIC8qICY6aG92ZXJ7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgpO1xyXG4gICAgfSAqL1xyXG5gO1xyXG5cclxuY29uc3QgU3VtbWFyeUxpID0gc3R5bGVkLmxpYFxyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGZvbnQtc2l6ZTogMS4xNnJlbTtcclxuICAgICY6OmJlZm9yZXtcclxuICAgICAgY29udGVudDogXCLigKIgXCI7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBFeHBlcmllbmNlU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQoVHlwb2dyYXBoeSk8eyBjb21wb25lbnQ6IHN0cmluZyB9PmBcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbmA7XHJcblxyXG5jb25zdCBTZWN0aW9uR3JpZFN0eWxlZCA9IHN0eWxlZChHcmlkKWBcclxuICBtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweCAhaW1wb3J0YW50O1xyXG5gO1xyXG5cclxuY29uc3QgU1VNTUFSWV9URVhUUyA9IFtcclxuICBcIlByb2ZpY2llbnQga25vd2xlZGdlIG9mIEhUTUwgNSwgQ1NTIDMsIEphdmFTY3JpcHQuXCIsXHJcbiAgXCJFeHBlcmllY2VkIHdpdGggTVMgRXhjZWwuXCIsXHJcbiAgXCJFeGNlbGxlbnQgY29tbXVuaWNhdGlvbiBza2lsbHMsIG9yZ2FuaXphdGlvbiBza2lsbHMsIGFuZCBleGNlbGxlbnQgYXR0ZW50aW9uIHRvIGRldGFpbC5cIixcclxuICBcIlByb2ZpY2llbnQga25vd2xlZGdlIG9mIGFjY2Vzc2liaWxpdHkgc3RhbmRhcmRzIChTZWN0aW9uIDUwOC9XQ0FHIDIuMCBMZXZlbCBBIGFuZCBBQSkuXCIsXHJcbiAgXCJHb29kIHVuZGVyc3RhbmRpbmcgb2YgYXNzaXN0aXZlIHRlY2hub2xvZ2llcyAoSkFXUywgTlZEQSwgVm9pY2VPdmVyKS5cIixcclxuICBcIjYgeWVhcnMgb2YgY2FsbCBjZW50ZXIgYW5kIFdvcmtmb3JjZSBNYW5hZ2VtZW50IGV4cGVyaWVuY2UuXCIsXHJcbiAgXCJQcm9maWNpZW50IGV4cGVyaWVuY2UgaW4gUUEgdGVzdGluZyBtZXRob2RvbG9neS5cIixcclxuICBcIlByb3ZlbiBhYmlsaXR5IHRvIGRvY3VtZW50IGlzc3VlcyBhbmQgYnVncy5cIixcclxuXTtcclxuXHJcbmNvbnN0IEhvbWVwYWdlTGF5b3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY2hhbmdlUGFnZSB9ID0gdXNlUGFnZXNDb250ZXh0KCk7XHJcbiAgY29uc3QgcHJlZmVyc0RhcmtNb2RlID0gdXNlTWVkaWFRdWVyeShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIik7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVNoYXJlZFN0eWxlcygpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjaGFuZ2VQYWdlKFwiSG9tZVwiKTtcclxuICB9LCBbY2hhbmdlUGFnZV0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzdW1tYXJ5ID0gKFxyXG4gICAgPEdyaWQgaXRlbT5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XHJcbiAgICAgICAgPExpc3Qgc3R5bGU9e3sgZm9udFNpemU6IFwiMS4xZW1cIiB9fT5cclxuICAgICAgICAgIHtTVU1NQVJZX1RFWFRTLm1hcCgodGV4dCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPFN1bW1hcnlMaSBrZXk9e3RleHR9Pnt0ZXh0fTwvU3VtbWFyeUxpPjtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPFByaW1hcnlCYWNrZ3JvdW5kU2VjdGlvbj5cclxuICAgICAgICA8SG9tZXBhZ2VIZWFkaW5nIC8+XHJcbiAgICAgIDwvUHJpbWFyeUJhY2tncm91bmRTZWN0aW9uPlxyXG4gICAgICA8UGFwZXIgc3F1YXJlIGVsZXZhdGlvbj17MH0+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgc3BhY2luZz17MH1cclxuICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICBqdXN0aWZ5PVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWFyb3VuZFwiXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFNlY3Rpb25HcmlkU3R5bGVkXHJcbiAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICBzbT17NH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg0XCJcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgyXCJcclxuICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBFeHBlcmllbmNlc1xyXG4gICAgICAgICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8RXhwZXJpZW5jZUxpc3QgLz5cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICA8L1NlY3Rpb25HcmlkU3R5bGVkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgeHM9ezEwfVxyXG4gICAgICAgICAgICAgIHNtPXs0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEhpZGRlbiB4c0Rvd24+XHJcbiAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgIGNzcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogNTAsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgIDxUaXRsZSB2YXJpYW50PVwiaDRcIiBjb21wb25lbnQ9XCJoMlwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBTa2lsbHNcclxuICAgICAgICAgICAgICA8L1RpdGxlPlxyXG5cclxuICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIDxFZHVjYXRpb25MaXN0IC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLm1pblBhZGRpbmdYLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBjc3M9e3tcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyNSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7c3VtbWFyeX1cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICB7LyogPFNob3dDYXNlUHJvamVjdEJ1dHRvbiAvPiAqL31cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIHsvKiA8Q29udGFpbmVyXHJcbiAgICAgICAgICBpZD1cInByb2plY3RzXCJcclxuICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5taW5QYWRkaW5nWCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFsbFByb2plY3RzXHJcbiAgICAgICAgICAgIGFkZE1hcmdpblRvcD17ZmFsc2V9XHJcbiAgICAgICAgICAgIHNob3dTbGlkZXJDb250cm9scz17ZmFsc2V9XHJcbiAgICAgICAgICAgIGxvb3A9e2ZhbHNlfVxyXG4gICAgICAgICAgICBsaW1pdFRvPXsyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbnRhaW5lcj4gKi99XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDxCb3ggcGI9ezJ9IC8+XHJcbiAgICAgIDxQYXBlciBzcXVhcmU+XHJcbiAgICAgICAgPEJveCBwdD17MX0gLz5cclxuXHJcbiAgICAgICAgPFNob3dDYXNlUHJvamVjdEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxyXG4gICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgIGlkPVwicHJvamVjdHNcIlxyXG4gICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICByb290OiBjbGFzc2VzLm1pblBhZGRpbmdYLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SG9tZVByb2plY3RHcmlkIC8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICAgIHsvKiA8U29jaWFsTWVkaWFFbWJlZHMgLz4gKi99XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9