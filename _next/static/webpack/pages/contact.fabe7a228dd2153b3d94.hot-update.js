webpackHotUpdate_N_E("pages/contact",{

/***/ "./node_modules/@material-ui/icons/YouTube.js":
false,

/***/ "./src/components/partials/SocialList.tsx":
/*!************************************************!*\
  !*** ./src/components/partials/SocialList.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/shared */ "./src/components/shared/index.ts");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "./node_modules/@material-ui/icons/Twitter.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Layout_SideItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Layout/SideItems */ "./src/components/Layout/SideItems.tsx");
var _jsxFileName = "D:\\WEB_DEV\\Personal_Projects\\wilfredlopez\\src\\components\\partials\\SocialList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const socialMedia = [{
  label: 'LinedIn',
  Icon: __jsx(_Layout_SideItems__WEBPACK_IMPORTED_MODULE_6__["LinkedInIconStyled"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }),
  url: 'https://www.linkedin.com/in/wilfred-lopez-a309b896/'
}, {
  label: 'Github',
  Icon: __jsx(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      color: '#8f9498'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }),
  url: 'https://github.com/wilfredlopez'
}, {
  label: 'Twitter',
  Icon: __jsx(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      color: '#1DA1F2'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }),
  url: 'https://twitter.com/wilfreddonaldlo'
}, // {
//   label: "Facebook",
//   Icon: <FacebookIconStyled />,
//   url: "https://www.facebook.com/WilfredDonaldLo",
// },
{
  label: 'Instagram',
  Icon: __jsx(_Layout_SideItems__WEBPACK_IMPORTED_MODULE_6__["InstagramIconStyled"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }),
  url: 'https://www.instagram.com/wilfredlopez/'
} // {
//   label: "YouTube",
//   Icon: <YouTubeIcon style={{ color: "#FF0000" }} />,
//   url:
//     "https://www.youtube.com/channel/UCbJgT2f4AXpLxE0f9n-GCBg?view_as=subscriber",
// },
];
const Flexible = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].span.withConfig({
  displayName: "SocialList__Flexible",
  componentId: "sc-1yo5prn-0"
})(["display:flex;align-items:center;& span{margin-right:4px;}"]);
_c = Flexible;

const SocialList = () => {
  const listItems = socialMedia.map(({
    Icon,
    label,
    url
  }) => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      key: label,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 7
      }
    }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], {
      href: url,
      target: "_blank",
      rel: "noopener noreferrer",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }
    }, __jsx(Flexible, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, Icon), label)));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 10
    }
  }, listItems);
};

_c2 = SocialList;
/* harmony default export */ __webpack_exports__["default"] = (SocialList);

var _c, _c2;

$RefreshReg$(_c, "Flexible");
$RefreshReg$(_c2, "SocialList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFydGlhbHMvU29jaWFsTGlzdC50c3giXSwibmFtZXMiOlsic29jaWFsTWVkaWEiLCJsYWJlbCIsIkljb24iLCJ1cmwiLCJjb2xvciIsIkZsZXhpYmxlIiwic3R5bGVkIiwic3BhbiIsIlNvY2lhbExpc3QiLCJsaXN0SXRlbXMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFNQSxNQUFNQSxXQUFXLEdBQUcsQ0FDbEI7QUFDRUMsT0FBSyxFQUFFLFNBRFQ7QUFFRUMsTUFBSSxFQUFFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZSO0FBSUVDLEtBQUcsRUFBRTtBQUpQLENBRGtCLEVBT2xCO0FBQ0VGLE9BQUssRUFBRSxRQURUO0FBRUVDLE1BQUksRUFBRSxNQUFDLGdFQUFEO0FBQVksU0FBSyxFQUFFO0FBQUVFLFdBQUssRUFBRTtBQUFULEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGUjtBQUdFRCxLQUFHLEVBQUU7QUFIUCxDQVBrQixFQWFsQjtBQUNFRixPQUFLLEVBQUUsU0FEVDtBQUVFQyxNQUFJLEVBQUUsTUFBQyxpRUFBRDtBQUFhLFNBQUssRUFBRTtBQUFFRSxXQUFLLEVBQUU7QUFBVCxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRlI7QUFHRUQsS0FBRyxFQUFFO0FBSFAsQ0Fia0IsRUFrQmxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFRixPQUFLLEVBQUUsV0FEVDtBQUVFQyxNQUFJLEVBQUUsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRlI7QUFHRUMsS0FBRyxFQUFFO0FBSFAsQ0F2QmtCLENBNEJsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQ2tCLENBQXBCO0FBb0NBLE1BQU1FLFFBQVEsR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSxpRUFBZDtLQUFNRixROztBQVFOLE1BQU1HLFVBQVUsR0FBRyxNQUFNO0FBQ3ZCLFFBQU1DLFNBQVMsR0FBR1QsV0FBVyxDQUFDVSxHQUFaLENBQWdCLENBQUM7QUFBRVIsUUFBRjtBQUFRRCxTQUFSO0FBQWVFO0FBQWYsR0FBRCxLQUEwQjtBQUMxRCxXQUNFLE1BQUMsMERBQUQ7QUFBVSxTQUFHLEVBQUVGLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsNkRBQUQ7QUFBWSxVQUFJLEVBQUVFLEdBQWxCO0FBQXVCLFlBQU0sRUFBQyxRQUE5QjtBQUF1QyxTQUFHLEVBQUMscUJBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT0QsSUFBUCxDQURGLEVBRUdELEtBRkgsQ0FERixDQURGLENBREY7QUFVRCxHQVhpQixDQUFsQjtBQVlBLFNBQU8sTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQlEsU0FBakIsQ0FBUDtBQUNELENBZEQ7O01BQU1ELFU7QUFnQlNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRhY3QuZmFiZTdhMjI4ZGQyMTUzYjNkOTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgU3R5bGVkTGluayB9IGZyb20gJ0Bjb21wb25lbnRzL3NoYXJlZCdcclxuXHJcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9HaXRIdWInXHJcbmltcG9ydCBZb3VUdWJlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvWW91VHViZSdcclxuaW1wb3J0IFR3aXR0ZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge1xyXG4gIEZhY2Vib29rSWNvblN0eWxlZCxcclxuICBJbnN0YWdyYW1JY29uU3R5bGVkLFxyXG4gIExpbmtlZEluSWNvblN0eWxlZCxcclxufSBmcm9tICcuLi9MYXlvdXQvU2lkZUl0ZW1zJ1xyXG5cclxuY29uc3Qgc29jaWFsTWVkaWEgPSBbXHJcbiAge1xyXG4gICAgbGFiZWw6ICdMaW5lZEluJyxcclxuICAgIEljb246IDxMaW5rZWRJbkljb25TdHlsZWQgLz4sXHJcblxyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3dpbGZyZWQtbG9wZXotYTMwOWI4OTYvJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnR2l0aHViJyxcclxuICAgIEljb246IDxHaXRIdWJJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzhmOTQ5OCcgfX0gLz4sXHJcbiAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vd2lsZnJlZGxvcGV6JyxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBsYWJlbDogJ1R3aXR0ZXInLFxyXG4gICAgSWNvbjogPFR3aXR0ZXJJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzFEQTFGMicgfX0gLz4sXHJcbiAgICB1cmw6ICdodHRwczovL3R3aXR0ZXIuY29tL3dpbGZyZWRkb25hbGRsbycsXHJcbiAgfSxcclxuICAvLyB7XHJcbiAgLy8gICBsYWJlbDogXCJGYWNlYm9va1wiLFxyXG4gIC8vICAgSWNvbjogPEZhY2Vib29rSWNvblN0eWxlZCAvPixcclxuICAvLyAgIHVybDogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vV2lsZnJlZERvbmFsZExvXCIsXHJcbiAgLy8gfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0luc3RhZ3JhbScsXHJcbiAgICBJY29uOiA8SW5zdGFncmFtSWNvblN0eWxlZCAvPixcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vd2lsZnJlZGxvcGV6LycsXHJcbiAgfSxcclxuICAvLyB7XHJcbiAgLy8gICBsYWJlbDogXCJZb3VUdWJlXCIsXHJcbiAgLy8gICBJY29uOiA8WW91VHViZUljb24gc3R5bGU9e3sgY29sb3I6IFwiI0ZGMDAwMFwiIH19IC8+LFxyXG4gIC8vICAgdXJsOlxyXG4gIC8vICAgICBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNiSmdUMmY0QVhwTHhFMGY5bi1HQ0JnP3ZpZXdfYXM9c3Vic2NyaWJlclwiLFxyXG4gIC8vIH0sXHJcbl0gYXMgY29uc3RcclxuXHJcbmNvbnN0IEZsZXhpYmxlID0gc3R5bGVkLnNwYW5gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICYgc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFNvY2lhbExpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgbGlzdEl0ZW1zID0gc29jaWFsTWVkaWEubWFwKCh7IEljb24sIGxhYmVsLCB1cmwgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExpc3RJdGVtIGtleT17bGFiZWx9PlxyXG4gICAgICAgIDxTdHlsZWRMaW5rIGhyZWY9e3VybH0gdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcic+XHJcbiAgICAgICAgICA8RmxleGlibGU+XHJcbiAgICAgICAgICAgIDxzcGFuPntJY29ufTwvc3Bhbj5cclxuICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgPC9GbGV4aWJsZT5cclxuICAgICAgICA8L1N0eWxlZExpbms+XHJcbiAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICApXHJcbiAgfSlcclxuICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PntsaXN0SXRlbXN9PC9SZWFjdC5GcmFnbWVudD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29jaWFsTGlzdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9