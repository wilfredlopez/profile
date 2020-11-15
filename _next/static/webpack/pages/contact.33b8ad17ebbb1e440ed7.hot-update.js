webpackHotUpdate_N_E("pages/contact",{

/***/ "./src/components/footer/SiteFooter.tsx":
/*!**********************************************!*\
  !*** ./src/components/footer/SiteFooter.tsx ***!
  \**********************************************/
/*! exports provided: FooterNavLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterNavLink", function() { return FooterNavLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _partials_SocialList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../partials/SocialList */ "./src/components/partials/SocialList.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ProjectLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProjectLinks */ "./src/components/footer/ProjectLinks.tsx");
/* harmony import */ var _shared_multi_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/multi-use */ "./src/components/shared/multi-use.ts");
var _jsxFileName = "D:\\WEB_DEV\\Personal_Projects\\wilfredlopez\\src\\components\\footer\\SiteFooter.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import { NavLink } from "react-router-dom";







const FooterNavLink = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].a.withConfig({
  displayName: "SiteFooter__FooterNavLink",
  componentId: "csh0dv-0"
})(["color:", ";font-weight:", ";text-decoration:none;cursor:pointer;&.item{color:", ";font-weight:500;}&:hover{color:", ";font-weight:500;}"], props => props.isActive ? props.theme.colors.tertiary : 'inherit', props => props.isActive ? 'bold' : 'normal', props => props.theme.colors.tertiary, props => props.theme.colors.tertiary);
_c = FooterNavLink;
const FooterTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"]).withConfig({
  displayName: "SiteFooter__FooterTitle",
  componentId: "csh0dv-1"
})([""]);
_c2 = FooterTitle;

const SiteFooter = () => {
  _s();

  const {
    pathname
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  return __jsx(_shared_multi_use__WEBPACK_IMPORTED_MODULE_7__["FooterSection"], {
    style: {
      padding: '1em 0em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "space-around",
    alignContent: "center",
    alignItems: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    justify: "space-around",
    alignContent: "center",
    alignItems: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: "auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    id: "navbar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx(FooterTitle, {
    variant: "h6",
    component: "h1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, "Pages")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 19
    }
  }, __jsx(FooterNavLink, {
    isActive: pathname === '/',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, "Home"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, __jsx(FooterNavLink, {
    isActive: pathname === '/projects',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, "Showcase Projects"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, __jsx(FooterNavLink, {
    isActive: pathname === '/contact',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, "Contact"))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: "auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx(FooterTitle, {
    variant: "h6",
    component: "h2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  }, "Showcase Projects")), __jsx(_ProjectLinks__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: "auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx(FooterTitle, {
    variant: "h6",
    component: "h2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  }, "Social")), __jsx(_partials_SocialList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    xs: 12,
    sm: 4,
    justify: "center",
    alignContent: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 19
    }
  }, "All Rights Reseved")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 19
    }
  }, "2020 \xA9 Wilfred Lopez"))))))));
};

_s(SiteFooter, "QpP2vYJstxsDz0K+Qwttl8PPVoY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c3 = SiteFooter;
/* harmony default export */ __webpack_exports__["default"] = (SiteFooter);

var _c, _c2, _c3;

$RefreshReg$(_c, "FooterNavLink");
$RefreshReg$(_c2, "FooterTitle");
$RefreshReg$(_c3, "SiteFooter");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL1NpdGVGb290ZXIudHN4Il0sIm5hbWVzIjpbIkZvb3Rlck5hdkxpbmsiLCJzdHlsZWQiLCJhIiwicHJvcHMiLCJpc0FjdGl2ZSIsInRoZW1lIiwiY29sb3JzIiwidGVydGlhcnkiLCJGb290ZXJUaXRsZSIsIlR5cG9ncmFwaHkiLCJTaXRlRm9vdGVyIiwicGF0aG5hbWUiLCJ1c2VSb3V0ZXIiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsQ0FBVjtBQUFBO0FBQUE7QUFBQSxnSkFDZkMsS0FBSyxJQUFLQSxLQUFLLENBQUNDLFFBQU4sR0FBaUJELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxRQUFwQyxHQUErQyxTQUQxQyxFQUVUSixLQUFLLElBQUtBLEtBQUssQ0FBQ0MsUUFBTixHQUFpQixNQUFqQixHQUEwQixRQUYzQixFQU1iRCxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxRQU5mLEVBVWJKLEtBQUssSUFBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLFFBVmYsQ0FBbkI7S0FBTVAsYTtBQWViLE1BQU1RLFdBQVcsR0FBR1AsaUVBQU0sQ0FBQ1EsNERBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxRQUFqQjtNQUFNRCxXOztBQUlOLE1BQU1FLFVBQVUsR0FBRyxNQUFNO0FBQUE7O0FBQ3ZCLFFBQU07QUFBRUM7QUFBRixNQUFlQyw2REFBUyxFQUE5QjtBQUNBLFNBQ0UsTUFBQywrREFBRDtBQUFlLFNBQUssRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0Us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O0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxXQUFEO0FBQWEsV0FBTyxFQUFDLElBQXJCO0FBQTBCLGFBQVMsRUFBQyxJQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FERixFQU1FLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREYsQ0EvQ0YsRUF5REUsTUFBQyxzREFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLFFBQUksTUFGTjtBQUdFLE1BQUUsRUFBRSxFQUhOO0FBSUUsTUFBRSxFQUFFLENBSk47QUFLRSxXQUFPLEVBQUMsUUFMVjtBQU1FLGdCQUFZLEVBQUMsUUFOZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUUsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLENBREYsRUFJRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLENBSkYsQ0FSRixDQXpERixDQU5GLENBREYsQ0FERixDQURGO0FBd0ZELENBMUZEOztHQUFNRCxVO1VBQ2lCRSxxRDs7O01BRGpCRixVO0FBNEZTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250YWN0LjMzYjhhZDE3ZWJiYjFlNDQwZWQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgVHlwb2dyYXBoeSwgTGlzdCwgTGlzdEl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuLy8gaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBOYXZMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgUHJpbWFyeUJhY2tncm91bmRTZWN0aW9uIH0gZnJvbSAnLi4vc2hhcmVkJ1xyXG5pbXBvcnQgU29jaWFsTGlzdCBmcm9tICcuLi9wYXJ0aWFscy9Tb2NpYWxMaXN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFByb2plY3RMaW5rcyBmcm9tICcuL1Byb2plY3RMaW5rcydcclxuaW1wb3J0IHsgRm9vdGVyU2VjdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9tdWx0aS11c2UnXHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyTmF2TGluayA9IHN0eWxlZC5hPHsgaXNBY3RpdmU/OiBib29sZWFuIH0+YFxyXG4gIGNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5pc0FjdGl2ZSA/IHByb3BzLnRoZW1lLmNvbG9ycy50ZXJ0aWFyeSA6ICdpbmhlcml0Jyl9O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5pc0FjdGl2ZSA/ICdib2xkJyA6ICdub3JtYWwnKX07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmLml0ZW0ge1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRlcnRpYXJ5fTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRlcnRpYXJ5fTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBGb290ZXJUaXRsZSA9IHN0eWxlZChUeXBvZ3JhcGh5KSA8eyBjb21wb25lbnQ/OiBzdHJpbmcgfT5gXHJcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG5gXHJcblxyXG5jb25zdCBTaXRlRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb290ZXJTZWN0aW9uIHN0eWxlPXt7IHBhZGRpbmc6ICcxZW0gMGVtJyB9fT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnXHJcbiAgICAgICAgICBhbGlnbkNvbnRlbnQ9J2NlbnRlcidcclxuICAgICAgICAgIGFsaWduSXRlbXM9J2ZsZXgtc3RhcnQnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAganVzdGlmeT0nc3BhY2UtYXJvdW5kJ1xyXG4gICAgICAgICAgICBhbGlnbkNvbnRlbnQ9J2NlbnRlcidcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz0nZmxleC1zdGFydCdcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbT17dHJ1ZX0geHM9ezEyfSBzbT0nYXV0byc+XHJcbiAgICAgICAgICAgICAgPExpc3QgaWQ9J25hdmJhcic+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb290ZXJUaXRsZSB2YXJpYW50PSdoNicgY29tcG9uZW50PSdoMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgUGFnZXNcclxuICAgICAgICAgICAgICAgICAgPC9Gb290ZXJUaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXJOYXZMaW5rIGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvb3Rlck5hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9Jy9wcm9qZWN0cyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3Rlck5hdkxpbmsgaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL3Byb2plY3RzJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTaG93Y2FzZSBQcm9qZWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9vdGVyTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj0nL2NvbnRhY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXJOYXZMaW5rIGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy9jb250YWN0J30+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb290ZXJOYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209J2F1dG8nPlxyXG4gICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9vdGVyVGl0bGUgdmFyaWFudD0naDYnIGNvbXBvbmVudD0naDInPlxyXG4gICAgICAgICAgICAgICAgICAgIFNob3djYXNlIFByb2plY3RzXHJcbiAgICAgICAgICAgICAgICAgIDwvRm9vdGVyVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPFByb2plY3RMaW5rcyAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209J2F1dG8nPlxyXG4gICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9vdGVyVGl0bGUgdmFyaWFudD0naDYnIGNvbXBvbmVudD0naDInPlxyXG4gICAgICAgICAgICAgICAgICAgIFNvY2lhbFxyXG4gICAgICAgICAgICAgICAgICA8L0Zvb3RlclRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxTb2NpYWxMaXN0IC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICBzbT17NH1cclxuICAgICAgICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgYWxpZ25Db250ZW50PSdjZW50ZXInXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPkFsbCBSaWdodHMgUmVzZXZlZDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjIwMjAgJmNvcHk7IFdpbGZyZWQgTG9wZXo8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0Zvb3RlclNlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaXRlRm9vdGVyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=