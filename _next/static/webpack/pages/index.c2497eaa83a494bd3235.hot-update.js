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
  height = '81vh'
}) => {
  return __jsx(_shared__WEBPACK_IMPORTED_MODULE_3__["Responsive"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx(_shared_Segment__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    id: "welcome-section",
    style: {
      height
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
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
      lineNumber: 47,
      columnNumber: 11
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
      lineNumber: 54,
      columnNumber: 13
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
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx(_components_shared_ScaleUpDownComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    backgrounds: [],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "WILFRED LOPEZ")), __jsx(Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
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
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, "Quality Assurance/Web Development"), __jsx("small", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, "React, Nodejs, Express, MongoDB, Web Accessibility"))), __jsx(Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, "Garfield, NJ, USA.")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
    style: {
      margin: '1rem 0'
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
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    endIcon: __jsx(_material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 26
      }
    }),
    color: "primary",
    variant: "contained",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, __jsx(StyledAnker, {
    href: "mailto:cubamc@gmail.com",
    title: "contact me",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, "Contact Me")))))));
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFydGlhbHMvSG9tZXBhZ2VIZWFkaW5nLnRzeCJdLCJuYW1lcyI6WyJTdHlsZWRBbmtlciIsInN0eWxlZCIsImEiLCJJdGVtIiwiZGl2IiwiSG9tZXBhZ2VIZWFkaW5nIiwiaGVpZ2h0Iiwic2NhbGUiLCJ0eXBlIiwid2lsZnJlZEltZyIsIndpZHRoIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiaGlkZGVuIiwib3BhY2l0eSIsInZpc2libGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFLQSxNQUFNQSxXQUFXLEdBQUdDLHlEQUFNLENBQUNDLENBQVY7QUFBQTtBQUFBO0FBQUEsMkNBQWpCO0tBQU1GLFc7QUFJTixNQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0dBQVYsQyxDQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7TUFoQk1ELEk7O0FBaUJOLE1BQU1FLGVBQWdDLEdBQUcsQ0FBQztBQUFFQyxRQUFNLEdBQUc7QUFBWCxDQUFELEtBQXlCO0FBR2hFLFNBRUUsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFXLE1BQUUsRUFBQyxpQkFBZDtBQUFnQyxTQUFLLEVBQUU7QUFBRUE7QUFBRixLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0Us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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsV0FBRDtBQUFhLFFBQUksRUFBQyx5QkFBbEI7QUFBNEMsU0FBSyxFQUFDLFlBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEYsQ0FERixDQUxGLENBaEVGLENBREYsQ0FERixDQUZGO0FBMkZELENBOUZEOztNQUFNRixlO0FBK0ZTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMjQ5N2VhYTgzYTQ5NGJkMzIzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEF2YXRhciwgVHlwb2dyYXBoeSwgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB3aWxmcmVkSW1nIGZyb20gJ0Byb290L2ltZy93aWxmcmVkLXByb2ZpbGUucG5nJ1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlIH0gZnJvbSAnLi4vc2hhcmVkJ1xyXG5pbXBvcnQgU2VnbWVudCBmcm9tICcuLi9zaGFyZWQvU2VnbWVudCdcclxuaW1wb3J0IFdvcmtJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Xb3JrJ1xyXG5pbXBvcnQgUm9vbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Jvb20nXHJcbi8vIGltcG9ydCBIb21lSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVcIjtcclxuaW1wb3J0IE1haWxPdXRsaW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbE91dGxpbmUnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbi8vIGltcG9ydCB7IEJyYW5kQnV0dG9uIH0gZnJvbSBcIkByb290L3RoZW1lL0N1c3RvbVwiO1xyXG5pbXBvcnQgU2NhbGVVcERvd25Db21wb25lbnQgZnJvbSAnQGNvbXBvbmVudHMvc2hhcmVkL1NjYWxlVXBEb3duQ29tcG9uZW50J1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGhlaWdodD86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBTdHlsZWRBbmtlciA9IHN0eWxlZC5hYFxyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuYFxyXG5jb25zdCBJdGVtID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5gXHJcblxyXG4vLyBjb25zdCBQbGFjZXNHcmlkID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIGRpc3BsYXk6IGdyaWQ7XHJcbi8vICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4vLyAgICAgZ3JpZC1nYXA6IDFyZW07XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4vLyAgICAgJiBkaXZ7XHJcbi8vICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICB9XHJcbi8vIGA7XHJcbmNvbnN0IEhvbWVwYWdlSGVhZGluZzogUmVhY3QuRkM8UHJvcHM+ID0gKHsgaGVpZ2h0ID0gJzgxdmgnIH0pID0+IHtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPFJlc3BvbnNpdmU+XHJcbiAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgIDxDb250YWluZXIgaWQ9J3dlbGNvbWUtc2VjdGlvbicgc3R5bGU9e3sgaGVpZ2h0IH19PlxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgaW5pdGlhbD17eyBzY2FsZTogMSB9fVxyXG4gICAgICAgICAgICBhbmltYXRlPXt7IHNjYWxlOiBbMS4zLCAxXSB9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ3NwcmluZycsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICBzcmM9e3dpbGZyZWRJbWd9XHJcbiAgICAgICAgICAgICAgLy8gc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU2MTIwNzk0OS93aWxmcmVkWm9vbWVkLnBuZ1wiXHJcbiAgICAgICAgICAgICAgLy8gc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiA0MDAsXHJcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IDQwMCxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzJyZW0nLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvLyBjaXJjdWxhclxyXG4gICAgICAgICAgICAgIGFsdD0nd2lsZnJlZCdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J20tYXV0byBib3JkZXItZnVsbCB3aXRoLXNoYWRvdydcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuXHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9J2gxJ1xyXG4gICAgICAgICAgICB2YXJpYW50PSdoMydcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAvLyBmb250U2l6ZTogXCIyZW1cIixcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDUsXHJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMC41ZW0nLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U2NhbGVVcERvd25Db21wb25lbnQgYmFja2dyb3VuZHM9e1tdIGFzIGFueX0+XHJcbiAgICAgICAgICAgICAgV0lMRlJFRCBMT1BFWlxyXG4gICAgICAgICAgPC9TY2FsZVVwRG93bkNvbXBvbmVudD5cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIGluaXRpYWw9J2hpZGRlbidcclxuICAgICAgICAgICAgICBhbmltYXRlPSd2aXNpYmxlJ1xyXG4gICAgICAgICAgICAgIHZhcmlhbnRzPXt7XHJcbiAgICAgICAgICAgICAgICBoaWRkZW46IHtcclxuICAgICAgICAgICAgICAgICAgc2NhbGU6IDAuOCxcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB7XHJcbiAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLFxyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDAuNCxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxXb3JrSWNvbiAvPlxyXG5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5RdWFsaXR5IEFzc3VyYW5jZS9XZWIgRGV2ZWxvcG1lbnQ8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPHNtYWxsPlJlYWN0LCBOb2RlanMsIEV4cHJlc3MsIE1vbmdvREIsIFdlYiBBY2Nlc3NpYmlsaXR5PC9zbWFsbD5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICAgIDxSb29tSWNvbiAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuPkdhcmZpZWxkLCBOSiwgVVNBLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IHN0eWxlPXt7IG1hcmdpbjogJzFyZW0gMCcgfX0gd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNSB9fSB3aGlsZVRhcD17eyBzY2FsZTogMS4yIH19PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGVuZEljb249ezxNYWlsT3V0bGluZUljb24gLz59XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRBbmtlciBocmVmPSdtYWlsdG86Y3ViYW1jQGdtYWlsLmNvbScgdGl0bGU9J2NvbnRhY3QgbWUnPlxyXG4gICAgICAgICAgICAgICAgICBDb250YWN0IE1lXHJcbiAgICAgICAgICAgIDwvU3R5bGVkQW5rZXI+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgIDwvSXRlbT5cclxuXHJcblxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L1NlZ21lbnQ+XHJcbiAgICA8L1Jlc3BvbnNpdmU+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlSGVhZGluZ1xyXG4iXSwic291cmNlUm9vdCI6IiJ9