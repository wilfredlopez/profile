webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/partials/HomepageHeading.tsx":
/*!*****************************************************!*\
  !*** ./src/components/partials/HomepageHeading.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _root_img_wilfred_profile_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @root/img/wilfred-profile.png */ "./src/img/wilfred-profile.png");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/components/shared/index.ts");
/* harmony import */ var _shared_Segment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Segment */ "./src/components/shared/Segment.ts");
/* harmony import */ var _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Work */ "./node_modules/@material-ui/icons/Work.js");
/* harmony import */ var _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Room */ "./node_modules/@material-ui/icons/Room.js");
/* harmony import */ var _material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/MailOutline */ "./node_modules/@material-ui/icons/MailOutline.js");
/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_shared_ScaleUpDownComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/shared/ScaleUpDownComponent */ "./src/components/shared/ScaleUpDownComponent.tsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _jsxFileName = "D:\\WEB_DEV\\Personal_Projects\\wilfredlopez\\src\\components\\partials\\HomepageHeading.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 // import HomeIcon from "@material-ui/icons/Home";


 // import { BrandButton } from "@root/theme/Custom";



const StyledAnker = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].a.withConfig({
  displayName: "HomepageHeading__StyledAnker",
  componentId: "sc-1gjswsg-0"
})(["color:inherit;text-decoration:none;"]);
_c = StyledAnker;
const Item = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "HomepageHeading__Item",
  componentId: "sc-1gjswsg-1"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:1rem;"]); // const PlacesGrid = styled.div`
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     grid-gap: 1rem;
//     margin-bottom: 1rem;
//     & div{
//       display: flex;
//     }
// `;

_c2 = Item;

const HomepageHeading = ({
  height = '80vh'
}) => __jsx(_shared__WEBPACK_IMPORTED_MODULE_3__["Responsive"], {
  style: {
    paddingBottom: '4rem'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 3
  }
}, __jsx(_shared_Segment__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }
}, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  id: "welcome-section",
  style: {
    height
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 7
  }
}, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
  initial: {
    scale: 1
  },
  animate: {
    scale: [1.3, 1]
  },
  transition: {
    type: 'spring'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }
}, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
  src: _root_img_wilfred_profile_png__WEBPACK_IMPORTED_MODULE_2__["default"] // src="https://res.cloudinary.com/wlopez/image/upload/v1561207949/wilfredZoomed.png"
  // size="medium"
  ,
  style: {
    width: '100%',
    height: '100%',
    maxWidth: 400,
    maxHeight: 400,
    borderRadius: '2rem',
    margin: 'auto'
  } // circular
  ,
  alt: "wilfred",
  className: "m-auto border-full with-shadow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 11
  }
})), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
  component: "h1",
  variant: "h3",
  style: {
    // fontSize: "2em",
    fontWeight: 'normal',
    marginBottom: 5,
    marginTop: '0.5em'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 9
  }
}, __jsx(_components_shared_ScaleUpDownComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
  backgrounds: [],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 11
  }
}, "WILFRED LOPEZ")), __jsx(Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 9
  }
}, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
  initial: "hidden",
  animate: "visible",
  variants: {
    hidden: {
      scale: 0.8,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.4
      }
    }
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 11
  }
}, __jsx(_material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_5___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 13
  }
}), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 13
  }
}, "Quality Assurance/Web Development"), __jsx("small", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 13
  }
}, "React, Nodejs, Express, MongoDB, Web Accessibility"))), __jsx(Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 9
  }
}, __jsx(_material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_6___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 11
  }
}), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 11
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 13
  }
}, "Garfield, NJ, USA.")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
  style: {
    margin: '0 1rem'
  },
  whileHover: {
    scale: 1.05
  },
  whileTap: {
    scale: 1.2
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 11
  }
}, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  endIcon: __jsx(_material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 24
    }
  }),
  color: "primary",
  variant: "contained",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 13
  }
}, __jsx(StyledAnker, {
  href: "mailto:cubamc@gmail.com",
  title: "contact me",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 15
  }
}, "Contact Me")))))));

_c3 = HomepageHeading;
/* harmony default export */ __webpack_exports__["default"] = (HomepageHeading);

var _c, _c2, _c3;

$RefreshReg$(_c, "StyledAnker");
$RefreshReg$(_c2, "Item");
$RefreshReg$(_c3, "HomepageHeading");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFydGlhbHMvSG9tZXBhZ2VIZWFkaW5nLnRzeCJdLCJuYW1lcyI6WyJTdHlsZWRBbmtlciIsInN0eWxlZCIsImEiLCJJdGVtIiwiZGl2IiwiSG9tZXBhZ2VIZWFkaW5nIiwiaGVpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInNjYWxlIiwidHlwZSIsIndpbGZyZWRJbWciLCJ3aWR0aCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luIiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsImhpZGRlbiIsIm9wYWNpdHkiLCJ2aXNpYmxlIiwidHJhbnNpdGlvbiIsImRlbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBS0EsTUFBTUEsV0FBVyxHQUFHQyx5REFBTSxDQUFDQyxDQUFWO0FBQUE7QUFBQTtBQUFBLDJDQUFqQjtLQUFNRixXO0FBSU4sTUFBTUcsSUFBSSxHQUFHRix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdHQUFWLEMsQ0FRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O01BaEJNRCxJOztBQWlCTixNQUFNRSxlQUFnQyxHQUFHLENBQUM7QUFBRUMsUUFBTSxHQUFHO0FBQVgsQ0FBRCxLQUN2QyxNQUFDLGtEQUFEO0FBQVksT0FBSyxFQUFFO0FBQ2pCQyxpQkFBYSxFQUFFO0FBREUsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUdFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsMkRBQUQ7QUFBVyxJQUFFLEVBQUMsaUJBQWQ7QUFBZ0MsT0FBSyxFQUFFO0FBQUVEO0FB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LE9BQUssRUFBQyxTQUZSO0FBR0UsU0FBTyxFQUFDLFdBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUtFLE1BQUMsV0FBRDtBQUFhLE1BQUksRUFBQyx5QkFBbEI7QUFBNEMsT0FBSyxFQUFDLFlBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsQ0FERixDQUxGLENBaEVGLENBREYsQ0FIRixDQURGOztNQUFNSCxlO0FBNkZTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MTkzMGUwMWE2MzE1ZTMzNzg3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEF2YXRhciwgVHlwb2dyYXBoeSwgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB3aWxmcmVkSW1nIGZyb20gJ0Byb290L2ltZy93aWxmcmVkLXByb2ZpbGUucG5nJ1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlIH0gZnJvbSAnLi4vc2hhcmVkJ1xyXG5pbXBvcnQgU2VnbWVudCBmcm9tICcuLi9zaGFyZWQvU2VnbWVudCdcclxuaW1wb3J0IFdvcmtJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Xb3JrJ1xyXG5pbXBvcnQgUm9vbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Jvb20nXHJcbi8vIGltcG9ydCBIb21lSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVcIjtcclxuaW1wb3J0IE1haWxPdXRsaW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbE91dGxpbmUnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbi8vIGltcG9ydCB7IEJyYW5kQnV0dG9uIH0gZnJvbSBcIkByb290L3RoZW1lL0N1c3RvbVwiO1xyXG5pbXBvcnQgU2NhbGVVcERvd25Db21wb25lbnQgZnJvbSAnQGNvbXBvbmVudHMvc2hhcmVkL1NjYWxlVXBEb3duQ29tcG9uZW50J1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGhlaWdodD86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBTdHlsZWRBbmtlciA9IHN0eWxlZC5hYFxyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuYFxyXG5jb25zdCBJdGVtID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5gXHJcblxyXG4vLyBjb25zdCBQbGFjZXNHcmlkID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIGRpc3BsYXk6IGdyaWQ7XHJcbi8vICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4vLyAgICAgZ3JpZC1nYXA6IDFyZW07XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4vLyAgICAgJiBkaXZ7XHJcbi8vICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICB9XHJcbi8vIGA7XHJcbmNvbnN0IEhvbWVwYWdlSGVhZGluZzogUmVhY3QuRkM8UHJvcHM+ID0gKHsgaGVpZ2h0ID0gJzgwdmgnIH0pID0+IChcclxuICA8UmVzcG9uc2l2ZSBzdHlsZT17e1xyXG4gICAgcGFkZGluZ0JvdHRvbTogJzRyZW0nXHJcbiAgfX0+XHJcbiAgICA8U2VnbWVudD5cclxuICAgICAgPENvbnRhaW5lciBpZD0nd2VsY29tZS1zZWN0aW9uJyBzdHlsZT17eyBoZWlnaHQgfX0+XHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgIGluaXRpYWw9e3sgc2NhbGU6IDEgfX1cclxuICAgICAgICAgIGFuaW1hdGU9e3sgc2NhbGU6IFsxLjMsIDFdIH19XHJcbiAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzcHJpbmcnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgIHNyYz17d2lsZnJlZEltZ31cclxuICAgICAgICAgICAgLy8gc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU2MTIwNzk0OS93aWxmcmVkWm9vbWVkLnBuZ1wiXHJcbiAgICAgICAgICAgIC8vIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IDQwMCxcclxuICAgICAgICAgICAgICBtYXhIZWlnaHQ6IDQwMCxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcycmVtJyxcclxuICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLy8gY2lyY3VsYXJcclxuICAgICAgICAgICAgYWx0PSd3aWxmcmVkJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J20tYXV0byBib3JkZXItZnVsbCB3aXRoLXNoYWRvdydcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG5cclxuICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgY29tcG9uZW50PSdoMSdcclxuICAgICAgICAgIHZhcmlhbnQ9J2gzJ1xyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgLy8gZm9udFNpemU6IFwiMmVtXCIsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDUsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogJzAuNWVtJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNjYWxlVXBEb3duQ29tcG9uZW50IGJhY2tncm91bmRzPXtbXSBhcyBhbnl9PlxyXG4gICAgICAgICAgICBXSUxGUkVEIExPUEVaXHJcbiAgICAgICAgICA8L1NjYWxlVXBEb3duQ29tcG9uZW50PlxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8SXRlbT5cclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIGluaXRpYWw9J2hpZGRlbidcclxuICAgICAgICAgICAgYW5pbWF0ZT0ndmlzaWJsZSdcclxuICAgICAgICAgICAgdmFyaWFudHM9e3tcclxuICAgICAgICAgICAgICBoaWRkZW46IHtcclxuICAgICAgICAgICAgICAgIHNjYWxlOiAwLjgsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgdmlzaWJsZToge1xyXG4gICAgICAgICAgICAgICAgc2NhbGU6IDEsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICBkZWxheTogMC40LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8V29ya0ljb24gLz5cclxuXHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlF1YWxpdHkgQXNzdXJhbmNlL1dlYiBEZXZlbG9wbWVudDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPHNtYWxsPlJlYWN0LCBOb2RlanMsIEV4cHJlc3MsIE1vbmdvREIsIFdlYiBBY2Nlc3NpYmlsaXR5PC9zbWFsbD5cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICA8Um9vbUljb24gLz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPkdhcmZpZWxkLCBOSiwgVVNBLjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPG1vdGlvbi5kaXYgc3R5bGU9e3sgbWFyZ2luOiAnMCAxcmVtJyB9fSB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1IH19IHdoaWxlVGFwPXt7IHNjYWxlOiAxLjIgfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBlbmRJY29uPXs8TWFpbE91dGxpbmVJY29uIC8+fVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZEFua2VyIGhyZWY9J21haWx0bzpjdWJhbWNAZ21haWwuY29tJyB0aXRsZT0nY29udGFjdCBtZSc+XHJcbiAgICAgICAgICAgICAgICBDb250YWN0IE1lXHJcbiAgICAgICAgICAgIDwvU3R5bGVkQW5rZXI+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvSXRlbT5cclxuXHJcblxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvU2VnbWVudD5cclxuICA8L1Jlc3BvbnNpdmU+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlSGVhZGluZ1xyXG4iXSwic291cmNlUm9vdCI6IiJ9