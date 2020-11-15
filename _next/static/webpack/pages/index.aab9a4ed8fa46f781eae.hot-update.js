webpackHotUpdate_N_E("pages/index",{

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



var _jsxFileName = "D:\\WEB_DEV\\Personal_Projects\\wilfredlopez\\src\\components\\home\\HomepageLayout.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
// import SocialMediaEmbeds from "./partials/SocialMediaEmbeds";











const SummaryLi = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "HomepageLayout__SummaryLi",
  componentId: "sc-18ypig9-0"
})(["padding-top:2px;padding-bottom:2px;padding-left:12px;text-align:start;font-size:1.16rem;&::before{content:'\u2022 ';}"]);
_c = SummaryLi;
const Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"]).withConfig({
  displayName: "HomepageLayout__Title",
  componentId: "sc-18ypig9-1"
})(["text-decoration:underline;margin-bottom:30px !important;"]);
_c2 = Title;
const SectionGridStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"]).withConfig({
  displayName: "HomepageLayout__SectionGridStyled",
  componentId: "sc-18ypig9-2"
})(["margin-top:50px !important;margin-bottom:50px !important;"]);
_c3 = SectionGridStyled;
const SUMMARY_TEXTS = ['Proficient knowledge of HTML 5, CSS 3, JavaScript.', 'Experieced with MS Excel.', 'Excellent communication skills, organization skills, and excellent attention to detail.', 'Proficient knowledge of accessibility standards (Section 508/WCAG 2.0 Level A and AA).', 'Good understanding of assistive technologies (JAWS, NVDA, VoiceOver).', '6 years of call center and Workforce Management experience.', 'Proficient experience in QA testing methodology.', 'Proven ability to document issues and bugs.'];

var _StyledBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "HomepageLayout___StyledBox",
  componentId: "sc-18ypig9-3"
})({
  marginTop: 50
});

var _StyledBox2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "HomepageLayout___StyledBox2",
  componentId: "sc-18ypig9-4"
})({
  marginTop: 25
});

const HomepageLayout = () => {
  _s();

  const {
    changePage
  } = Object(_root_context_PagesContext__WEBPACK_IMPORTED_MODULE_3__["usePagesContext"])();
  const classes = Object(_root_theme_useSharedStyles__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    changePage('Home');
  }, [changePage]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  const summary = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    maxWidth: "md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    style: {
      fontSize: '1.1em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, SUMMARY_TEXTS.map(text => {
    return __jsx(SummaryLi, {
      key: text,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 20
      }
    }, text);
  }))));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_1__["PrimaryBackgroundSection"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(_partials_HomepageHeading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    square: true,
    elevation: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
      lineNumber: 89,
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
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx(SectionGridStyled, {
    item: true,
    xs: 12,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx(Title, {
    variant: "h4",
    component: "h2",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, "Experiences"), __jsx(_ExperienceList__WEBPACK_IMPORTED_MODULE_6__["ExperienceList"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }), ' '), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 10,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
    xsDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, __jsx(_StyledBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  })), __jsx(Title, {
    variant: "h4",
    component: "h2",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, "Skills"), __jsx(_EducationList__WEBPACK_IMPORTED_MODULE_7__["EducationList"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    classes: {
      root: classes.minPaddingX
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx(_StyledBox2, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }), summary)))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    pb: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    square: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    pt: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    align: "center",
    variant: "h4",
    component: "h2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }
  }, "Showcase Projects"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    id: "projects",
    classes: {
      root: classes.minPaddingX
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }, __jsx(_HomeProjectGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    limit: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  })), __jsx(_ShowCaseProjectButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    variant: "outlined",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    pb: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  })));
};

_s(HomepageLayout, "sFh+bzUsZGM6cCMpl4E+1thChp4=", false, function () {
  return [_root_context_PagesContext__WEBPACK_IMPORTED_MODULE_3__["usePagesContext"], _root_theme_useSharedStyles__WEBPACK_IMPORTED_MODULE_4__["default"]];
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
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Ib21lcGFnZUxheW91dC50c3giXSwibmFtZXMiOlsiU3VtbWFyeUxpIiwic3R5bGVkIiwibGkiLCJUaXRsZSIsIlR5cG9ncmFwaHkiLCJTZWN0aW9uR3JpZFN0eWxlZCIsIkdyaWQiLCJTVU1NQVJZX1RFWFRTIiwibWFyZ2luVG9wIiwiSG9tZXBhZ2VMYXlvdXQiLCJjaGFuZ2VQYWdlIiwidXNlUGFnZXNDb250ZXh0IiwiY2xhc3NlcyIsInVzZVNoYXJlZFN0eWxlcyIsInVzZUVmZmVjdCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwic3VtbWFyeSIsImZvbnRTaXplIiwibWFwIiwidGV4dCIsInJvb3QiLCJtaW5QYWRkaW5nWCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLDZIQUFmO0tBQU1GLFM7QUFXTixNQUFNRyxLQUFLLEdBQUdGLGlFQUFNLENBQUNHLDREQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsZ0VBQVg7TUFBTUQsSztBQUtOLE1BQU1FLGlCQUFpQixHQUFHSixpRUFBTSxDQUFDSyxzREFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGlFQUF2QjtNQUFNRCxpQjtBQUtOLE1BQU1FLGFBQWEsR0FBRyxDQUNwQixvREFEb0IsRUFFcEIsMkJBRm9CLEVBR3BCLHlGQUhvQixFQUlwQix3RkFKb0IsRUFLcEIsdUVBTG9CLEVBTXBCLDZEQU5vQixFQU9wQixrREFQb0IsRUFRcEIsNkNBUm9CLENBQXRCOzs7OztHQXNFdUI7QUFDSEMsV0FBUyxFQUFFO0FBRFIsQzs7Ozs7R0FvQkY7QUFDSEEsV0FBUyxFQUFFO0FBRFIs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QUFEO0FBQ0UsTUFBRSxFQUFDLFVBREw7QUFFRSxXQUFPLEVBQUU7QUFDUEksVUFBSSxFQUFFWixPQUFPLENBQUNhO0FBRFAsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyx3REFBRDtBQUFpQixTQUFLLEVBQUUsQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBUEYsRUFlRSxNQUFDLCtEQUFEO0FBQXVCLFNBQUssRUFBQyxTQUE3QjtBQUF1QyxXQUFPLEVBQUMsVUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZGLEVBZ0JFLE1BQUMscURBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLENBN0VGLENBREY7QUFtR0QsQ0E3SEQ7O0dBQU1oQixjO1VBQ21CRSwwRSxFQUNQRSxtRTs7O01BRlpKLGM7QUE4SFNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFhYjlhNGVkOGZhNDZmNzgxZWFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgU29jaWFsTWVkaWFFbWJlZHMgZnJvbSBcIi4vcGFydGlhbHMvU29jaWFsTWVkaWFFbWJlZHNcIjtcclxuaW1wb3J0IHsgUHJpbWFyeUJhY2tncm91bmRTZWN0aW9uIH0gZnJvbSAnQGNvbXBvbmVudHMvc2hhcmVkJ1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBIaWRkZW4sXHJcbiAgTGlzdCxcclxuICBQYXBlcixcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyB1c2VQYWdlc0NvbnRleHQgfSBmcm9tICdAcm9vdC9jb250ZXh0L1BhZ2VzQ29udGV4dCdcclxuaW1wb3J0IHVzZVNoYXJlZFN0eWxlcyBmcm9tICdAcm9vdC90aGVtZS91c2VTaGFyZWRTdHlsZXMnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgRXhwZXJpZW5jZUxpc3QgfSBmcm9tICcuL0V4cGVyaWVuY2VMaXN0J1xyXG5pbXBvcnQgeyBFZHVjYXRpb25MaXN0IH0gZnJvbSAnLi9FZHVjYXRpb25MaXN0J1xyXG5pbXBvcnQgSG9tZXBhZ2VIZWFkaW5nIGZyb20gJy4uL3BhcnRpYWxzL0hvbWVwYWdlSGVhZGluZydcclxuaW1wb3J0IEhvbWVQcm9qZWN0R3JpZCBmcm9tICcuL0hvbWVQcm9qZWN0R3JpZCdcclxuaW1wb3J0IFNob3dDYXNlUHJvamVjdEJ1dHRvbiBmcm9tICcuL1Nob3dDYXNlUHJvamVjdEJ1dHRvbidcclxuXHJcbmNvbnN0IFN1bW1hcnlMaSA9IHN0eWxlZC5saWBcclxuICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIGZvbnQtc2l6ZTogMS4xNnJlbTtcclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ+KAoiAnO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQoVHlwb2dyYXBoeSkgPHsgY29tcG9uZW50OiBzdHJpbmcgfT5gXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG5gXHJcblxyXG5jb25zdCBTZWN0aW9uR3JpZFN0eWxlZCA9IHN0eWxlZChHcmlkKWBcclxuICBtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweCAhaW1wb3J0YW50O1xyXG5gXHJcblxyXG5jb25zdCBTVU1NQVJZX1RFWFRTID0gW1xyXG4gICdQcm9maWNpZW50IGtub3dsZWRnZSBvZiBIVE1MIDUsIENTUyAzLCBKYXZhU2NyaXB0LicsXHJcbiAgJ0V4cGVyaWVjZWQgd2l0aCBNUyBFeGNlbC4nLFxyXG4gICdFeGNlbGxlbnQgY29tbXVuaWNhdGlvbiBza2lsbHMsIG9yZ2FuaXphdGlvbiBza2lsbHMsIGFuZCBleGNlbGxlbnQgYXR0ZW50aW9uIHRvIGRldGFpbC4nLFxyXG4gICdQcm9maWNpZW50IGtub3dsZWRnZSBvZiBhY2Nlc3NpYmlsaXR5IHN0YW5kYXJkcyAoU2VjdGlvbiA1MDgvV0NBRyAyLjAgTGV2ZWwgQSBhbmQgQUEpLicsXHJcbiAgJ0dvb2QgdW5kZXJzdGFuZGluZyBvZiBhc3Npc3RpdmUgdGVjaG5vbG9naWVzIChKQVdTLCBOVkRBLCBWb2ljZU92ZXIpLicsXHJcbiAgJzYgeWVhcnMgb2YgY2FsbCBjZW50ZXIgYW5kIFdvcmtmb3JjZSBNYW5hZ2VtZW50IGV4cGVyaWVuY2UuJyxcclxuICAnUHJvZmljaWVudCBleHBlcmllbmNlIGluIFFBIHRlc3RpbmcgbWV0aG9kb2xvZ3kuJyxcclxuICAnUHJvdmVuIGFiaWxpdHkgdG8gZG9jdW1lbnQgaXNzdWVzIGFuZCBidWdzLicsXHJcbl1cclxuXHJcbmNvbnN0IEhvbWVwYWdlTGF5b3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY2hhbmdlUGFnZSB9ID0gdXNlUGFnZXNDb250ZXh0KClcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU2hhcmVkU3R5bGVzKClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY2hhbmdlUGFnZSgnSG9tZScpXHJcbiAgfSwgW2NoYW5nZVBhZ2VdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IHN1bW1hcnkgPSAoXHJcbiAgICA8R3JpZCBpdGVtPlxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPSdtZCc+XHJcbiAgICAgICAgPExpc3Qgc3R5bGU9e3sgZm9udFNpemU6ICcxLjFlbScgfX0+XHJcbiAgICAgICAgICB7U1VNTUFSWV9URVhUUy5tYXAodGV4dCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8U3VtbWFyeUxpIGtleT17dGV4dH0+e3RleHR9PC9TdW1tYXJ5TGk+XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9HcmlkPlxyXG4gIClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPFByaW1hcnlCYWNrZ3JvdW5kU2VjdGlvbj5cclxuICAgICAgICA8UGFwZXI+XHJcblxyXG4gICAgICAgICAgPEhvbWVwYWdlSGVhZGluZyAvPlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDwvUHJpbWFyeUJhY2tncm91bmRTZWN0aW9uPlxyXG4gICAgICA8UGFwZXIgc3F1YXJlIGVsZXZhdGlvbj17MH0+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgc3BhY2luZz17MH1cclxuICAgICAgICAgIGRpcmVjdGlvbj0ncm93J1xyXG4gICAgICAgICAganVzdGlmeT0nZmxleC1zdGFydCdcclxuICAgICAgICAgIGFsaWduSXRlbXM9J2ZsZXgtc3RhcnQnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgZGlyZWN0aW9uPSdyb3cnXHJcbiAgICAgICAgICAgIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCdcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz0nZmxleC1zdGFydCdcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFNlY3Rpb25HcmlkU3R5bGVkIGl0ZW0geHM9ezEyfSBzbT17NH0+XHJcbiAgICAgICAgICAgICAgPFRpdGxlIHZhcmlhbnQ9J2g0JyBjb21wb25lbnQ9J2gyJyBhbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIEV4cGVyaWVuY2VzXHJcbiAgICAgICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICAgICAgICA8RXhwZXJpZW5jZUxpc3QgLz57JyAnfVxyXG4gICAgICAgICAgICA8L1NlY3Rpb25HcmlkU3R5bGVkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IHNtPXs0fT5cclxuICAgICAgICAgICAgICA8SGlkZGVuIHhzRG93bj5cclxuICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgY3NzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA1MCxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgPFRpdGxlIHZhcmlhbnQ9J2g0JyBjb21wb25lbnQ9J2gyJyBhbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIFNraWxsc1xyXG4gICAgICAgICAgICAgIDwvVGl0bGU+XHJcblxyXG4gICAgICAgICAgICAgIDxFZHVjYXRpb25MaXN0IC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT0nZmxleC1zdGFydCc+XHJcbiAgICAgICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLm1pblBhZGRpbmdYLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBjc3M9e3tcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyNSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7c3VtbWFyeX1cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICB7LyogPFNob3dDYXNlUHJvamVjdEJ1dHRvbiAvPiAqL31cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIHsvKiA8Q29udGFpbmVyXHJcbiAgICAgICAgICBpZD1cInByb2plY3RzXCJcclxuICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5taW5QYWRkaW5nWCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFsbFByb2plY3RzXHJcbiAgICAgICAgICAgIGFkZE1hcmdpblRvcD17ZmFsc2V9XHJcbiAgICAgICAgICAgIHNob3dTbGlkZXJDb250cm9scz17ZmFsc2V9XHJcbiAgICAgICAgICAgIGxvb3A9e2ZhbHNlfVxyXG4gICAgICAgICAgICBsaW1pdFRvPXsyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbnRhaW5lcj4gKi99XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDxCb3ggcGI9ezJ9IC8+XHJcbiAgICAgIDxQYXBlciBzcXVhcmU+XHJcbiAgICAgICAgPEJveCBwdD17MX0gLz5cclxuXHJcbiAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249J2NlbnRlcicgdmFyaWFudD0naDQnIGNvbXBvbmVudD0naDInPlxyXG4gICAgICAgICAgU2hvd2Nhc2UgUHJvamVjdHNcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgIGlkPSdwcm9qZWN0cydcclxuICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5taW5QYWRkaW5nWCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEhvbWVQcm9qZWN0R3JpZCBsaW1pdD17NH0gLz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8U2hvd0Nhc2VQcm9qZWN0QnV0dG9uIGNvbG9yPSdpbmhlcml0JyB2YXJpYW50PSdvdXRsaW5lZCcgLz5cclxuICAgICAgICA8Qm94IHBiPXsyfSAvPlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgICB7LyogPFNvY2lhbE1lZGlhRW1iZWRzIC8+ICovfVxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSG9tZXBhZ2VMYXlvdXRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==