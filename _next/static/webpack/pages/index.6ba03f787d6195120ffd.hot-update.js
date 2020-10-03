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
  }, __jsx(_partials_HomepageHeading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    square: true,
    elevation: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 86,
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
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx(SectionGridStyled, {
    item: true,
    xs: 12,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx(Title, {
    variant: "h4",
    component: "h2",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, "Experiences"), __jsx(_ExperienceList__WEBPACK_IMPORTED_MODULE_6__["ExperienceList"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }), ' '), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 10,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
    xsDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  }, __jsx(_StyledBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  })), __jsx(Title, {
    variant: "h4",
    component: "h2",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, "Skills"), __jsx(_EducationList__WEBPACK_IMPORTED_MODULE_7__["EducationList"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    classes: {
      root: classes.minPaddingX
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx(_StyledBox2, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }), summary)))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    pb: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    square: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    pt: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    align: "center",
    variant: "h4",
    component: "h2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
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
      lineNumber: 162,
      columnNumber: 9
    }
  }, __jsx(_HomeProjectGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    limit: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  })), __jsx(_ShowCaseProjectButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    variant: "outlined",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    pb: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Ib21lcGFnZUxheW91dC50c3giXSwibmFtZXMiOlsiU3VtbWFyeUxpIiwic3R5bGVkIiwibGkiLCJUaXRsZSIsIlR5cG9ncmFwaHkiLCJTZWN0aW9uR3JpZFN0eWxlZCIsIkdyaWQiLCJTVU1NQVJZX1RFWFRTIiwibWFyZ2luVG9wIiwiSG9tZXBhZ2VMYXlvdXQiLCJjaGFuZ2VQYWdlIiwidXNlUGFnZXNDb250ZXh0IiwiY2xhc3NlcyIsInVzZVNoYXJlZFN0eWxlcyIsInVzZUVmZmVjdCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwic3VtbWFyeSIsImZvbnRTaXplIiwibWFwIiwidGV4dCIsInJvb3QiLCJtaW5QYWRkaW5nWCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLDZIQUFmO0tBQU1GLFM7QUFXTixNQUFNRyxLQUFLLEdBQUdGLGlFQUFNLENBQUNHLDREQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsZ0VBQVg7TUFBTUQsSztBQUtOLE1BQU1FLGlCQUFpQixHQUFHSixpRUFBTSxDQUFDSyxzREFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGlFQUF2QjtNQUFNRCxpQjtBQUtOLE1BQU1FLGFBQWEsR0FBRyxDQUNwQixvREFEb0IsRUFFcEIsMkJBRm9CLEVBR3BCLHlGQUhvQixFQUlwQix3RkFKb0IsRUFLcEIsdUVBTG9CLEVBTXBCLDZEQU5vQixFQU9wQixrREFQb0IsRUFRcEIsNkNBUm9CLENBQXRCOzs7OztHQW1FdUI7QUFDSEMsV0FBUyxFQUFFO0FBRFIsQzs7Ozs7R0FvQkY7QUFDSEEsV0FBUyxFQUFFO0FBRFIs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T0FBTyxDQUFDYTtBQURQLEtBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsd0RBQUQ7QUFBaUIsU0FBSyxFQUFFLENBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQVBGLEVBZUUsTUFBQywrREFBRDtBQUF1QixTQUFLLEVBQUMsU0FBN0I7QUFBdUMsV0FBTyxFQUFDLFVBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRixFQWdCRSxNQUFDLHFEQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixDQTFFRixDQURGO0FBZ0dELENBMUhEOztHQUFNaEIsYztVQUNtQkUsMEUsRUFDUEUsbUU7OztNQUZaSixjO0FBMkhTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YmEwM2Y3ODdkNjE5NTEyMGZmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFNvY2lhbE1lZGlhRW1iZWRzIGZyb20gXCIuL3BhcnRpYWxzL1NvY2lhbE1lZGlhRW1iZWRzXCI7XHJcbmltcG9ydCB7IFByaW1hcnlCYWNrZ3JvdW5kU2VjdGlvbiB9IGZyb20gJ0Bjb21wb25lbnRzL3NoYXJlZCdcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEdyaWQsXHJcbiAgSGlkZGVuLFxyXG4gIExpc3QsXHJcbiAgUGFwZXIsXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgdXNlUGFnZXNDb250ZXh0IH0gZnJvbSAnQHJvb3QvY29udGV4dC9QYWdlc0NvbnRleHQnXHJcbmltcG9ydCB1c2VTaGFyZWRTdHlsZXMgZnJvbSAnQHJvb3QvdGhlbWUvdXNlU2hhcmVkU3R5bGVzJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IEV4cGVyaWVuY2VMaXN0IH0gZnJvbSAnLi9FeHBlcmllbmNlTGlzdCdcclxuaW1wb3J0IHsgRWR1Y2F0aW9uTGlzdCB9IGZyb20gJy4vRWR1Y2F0aW9uTGlzdCdcclxuaW1wb3J0IEhvbWVwYWdlSGVhZGluZyBmcm9tICcuLi9wYXJ0aWFscy9Ib21lcGFnZUhlYWRpbmcnXHJcbmltcG9ydCBIb21lUHJvamVjdEdyaWQgZnJvbSAnLi9Ib21lUHJvamVjdEdyaWQnXHJcbmltcG9ydCBTaG93Q2FzZVByb2plY3RCdXR0b24gZnJvbSAnLi9TaG93Q2FzZVByb2plY3RCdXR0b24nXHJcblxyXG5jb25zdCBTdW1tYXJ5TGkgPSBzdHlsZWQubGlgXHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTJweDtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBmb250LXNpemU6IDEuMTZyZW07XHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICfigKIgJztcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkKFR5cG9ncmFwaHkpPHsgY29tcG9uZW50OiBzdHJpbmcgfT5gXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG5gXHJcblxyXG5jb25zdCBTZWN0aW9uR3JpZFN0eWxlZCA9IHN0eWxlZChHcmlkKWBcclxuICBtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweCAhaW1wb3J0YW50O1xyXG5gXHJcblxyXG5jb25zdCBTVU1NQVJZX1RFWFRTID0gW1xyXG4gICdQcm9maWNpZW50IGtub3dsZWRnZSBvZiBIVE1MIDUsIENTUyAzLCBKYXZhU2NyaXB0LicsXHJcbiAgJ0V4cGVyaWVjZWQgd2l0aCBNUyBFeGNlbC4nLFxyXG4gICdFeGNlbGxlbnQgY29tbXVuaWNhdGlvbiBza2lsbHMsIG9yZ2FuaXphdGlvbiBza2lsbHMsIGFuZCBleGNlbGxlbnQgYXR0ZW50aW9uIHRvIGRldGFpbC4nLFxyXG4gICdQcm9maWNpZW50IGtub3dsZWRnZSBvZiBhY2Nlc3NpYmlsaXR5IHN0YW5kYXJkcyAoU2VjdGlvbiA1MDgvV0NBRyAyLjAgTGV2ZWwgQSBhbmQgQUEpLicsXHJcbiAgJ0dvb2QgdW5kZXJzdGFuZGluZyBvZiBhc3Npc3RpdmUgdGVjaG5vbG9naWVzIChKQVdTLCBOVkRBLCBWb2ljZU92ZXIpLicsXHJcbiAgJzYgeWVhcnMgb2YgY2FsbCBjZW50ZXIgYW5kIFdvcmtmb3JjZSBNYW5hZ2VtZW50IGV4cGVyaWVuY2UuJyxcclxuICAnUHJvZmljaWVudCBleHBlcmllbmNlIGluIFFBIHRlc3RpbmcgbWV0aG9kb2xvZ3kuJyxcclxuICAnUHJvdmVuIGFiaWxpdHkgdG8gZG9jdW1lbnQgaXNzdWVzIGFuZCBidWdzLicsXHJcbl1cclxuXHJcbmNvbnN0IEhvbWVwYWdlTGF5b3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY2hhbmdlUGFnZSB9ID0gdXNlUGFnZXNDb250ZXh0KClcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU2hhcmVkU3R5bGVzKClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY2hhbmdlUGFnZSgnSG9tZScpXHJcbiAgfSwgW2NoYW5nZVBhZ2VdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IHN1bW1hcnkgPSAoXHJcbiAgICA8R3JpZCBpdGVtPlxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPSdtZCc+XHJcbiAgICAgICAgPExpc3Qgc3R5bGU9e3sgZm9udFNpemU6ICcxLjFlbScgfX0+XHJcbiAgICAgICAgICB7U1VNTUFSWV9URVhUUy5tYXAodGV4dCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8U3VtbWFyeUxpIGtleT17dGV4dH0+e3RleHR9PC9TdW1tYXJ5TGk+XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9HcmlkPlxyXG4gIClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPFByaW1hcnlCYWNrZ3JvdW5kU2VjdGlvbj5cclxuICAgICAgICA8SG9tZXBhZ2VIZWFkaW5nIC8+XHJcbiAgICAgIDwvUHJpbWFyeUJhY2tncm91bmRTZWN0aW9uPlxyXG4gICAgICA8UGFwZXIgc3F1YXJlIGVsZXZhdGlvbj17MH0+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgc3BhY2luZz17MH1cclxuICAgICAgICAgIGRpcmVjdGlvbj0ncm93J1xyXG4gICAgICAgICAganVzdGlmeT0nZmxleC1zdGFydCdcclxuICAgICAgICAgIGFsaWduSXRlbXM9J2ZsZXgtc3RhcnQnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgZGlyZWN0aW9uPSdyb3cnXHJcbiAgICAgICAgICAgIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCdcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz0nZmxleC1zdGFydCdcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFNlY3Rpb25HcmlkU3R5bGVkIGl0ZW0geHM9ezEyfSBzbT17NH0+XHJcbiAgICAgICAgICAgICAgPFRpdGxlIHZhcmlhbnQ9J2g0JyBjb21wb25lbnQ9J2gyJyBhbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIEV4cGVyaWVuY2VzXHJcbiAgICAgICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICAgICAgICA8RXhwZXJpZW5jZUxpc3QgLz57JyAnfVxyXG4gICAgICAgICAgICA8L1NlY3Rpb25HcmlkU3R5bGVkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IHNtPXs0fT5cclxuICAgICAgICAgICAgICA8SGlkZGVuIHhzRG93bj5cclxuICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgY3NzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA1MCxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgPFRpdGxlIHZhcmlhbnQ9J2g0JyBjb21wb25lbnQ9J2gyJyBhbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIFNraWxsc1xyXG4gICAgICAgICAgICAgIDwvVGl0bGU+XHJcblxyXG4gICAgICAgICAgICAgIDxFZHVjYXRpb25MaXN0IC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT0nZmxleC1zdGFydCc+XHJcbiAgICAgICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLm1pblBhZGRpbmdYLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBjc3M9e3tcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyNSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7c3VtbWFyeX1cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICB7LyogPFNob3dDYXNlUHJvamVjdEJ1dHRvbiAvPiAqL31cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIHsvKiA8Q29udGFpbmVyXHJcbiAgICAgICAgICBpZD1cInByb2plY3RzXCJcclxuICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5taW5QYWRkaW5nWCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFsbFByb2plY3RzXHJcbiAgICAgICAgICAgIGFkZE1hcmdpblRvcD17ZmFsc2V9XHJcbiAgICAgICAgICAgIHNob3dTbGlkZXJDb250cm9scz17ZmFsc2V9XHJcbiAgICAgICAgICAgIGxvb3A9e2ZhbHNlfVxyXG4gICAgICAgICAgICBsaW1pdFRvPXsyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbnRhaW5lcj4gKi99XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDxCb3ggcGI9ezJ9IC8+XHJcbiAgICAgIDxQYXBlciBzcXVhcmU+XHJcbiAgICAgICAgPEJveCBwdD17MX0gLz5cclxuXHJcbiAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249J2NlbnRlcicgdmFyaWFudD0naDQnIGNvbXBvbmVudD0naDInPlxyXG4gICAgICAgICAgU2hvd2Nhc2UgUHJvamVjdHNcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgIGlkPSdwcm9qZWN0cydcclxuICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5taW5QYWRkaW5nWCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEhvbWVQcm9qZWN0R3JpZCBsaW1pdD17NH0gLz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8U2hvd0Nhc2VQcm9qZWN0QnV0dG9uIGNvbG9yPSdpbmhlcml0JyB2YXJpYW50PSdvdXRsaW5lZCcgLz5cclxuICAgICAgICA8Qm94IHBiPXsyfSAvPlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgICB7LyogPFNvY2lhbE1lZGlhRW1iZWRzIC8+ICovfVxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSG9tZXBhZ2VMYXlvdXRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==