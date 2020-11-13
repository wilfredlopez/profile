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
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
var _jsxFileName = "D:\\WEB_DEV\\Personal_Projects\\wilfredlopez\\src\\components\\partials\\HomepageHeading.tsx",
    _s = $RefreshSig$();

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
}) => {
  _s();

  const isSm = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_11__["default"])(theme => theme.breakpoints.up('md'));
  return __jsx(_shared__WEBPACK_IMPORTED_MODULE_3__["Responsive"], {
    style: {
      paddingBottom: isSm ? '4rem' : '0'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(_shared_Segment__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 51,
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
      lineNumber: 52,
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
      lineNumber: 59,
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
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx(_components_shared_ScaleUpDownComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    backgrounds: [],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, "WILFRED LOPEZ")), __jsx(Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, "Quality Assurance/Web Development"), __jsx("small", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, "React, Nodejs, Express, MongoDB, Web Accessibility"))), __jsx(Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
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
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    endIcon: __jsx(_material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 26
      }
    }),
    color: "primary",
    variant: "contained",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, __jsx(StyledAnker, {
    href: "mailto:cubamc@gmail.com",
    title: "contact me",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, "Contact Me")))))));
};

_s(HomepageHeading, "RktCVptvc0wgBnFn5+cANo8c/Mo=", false, function () {
  return [_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_11__["default"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFydGlhbHMvSG9tZXBhZ2VIZWFkaW5nLnRzeCJdLCJuYW1lcyI6WyJTdHlsZWRBbmtlciIsInN0eWxlZCIsImEiLCJJdGVtIiwiZGl2IiwiSG9tZXBhZ2VIZWFkaW5nIiwiaGVpZ2h0IiwiaXNTbSIsInVzZU1lZGlhUXVlcnkiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwidXAiLCJwYWRkaW5nQm90dG9tIiwic2NhbGUiLCJ0eXBlIiwid2lsZnJlZEltZyIsIndpZHRoIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiaGlkZGVuIiwib3BhY2l0eSIsInZpc2libGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQU1BLE1BQU1BLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsQ0FBVjtBQUFBO0FBQUE7QUFBQSwyQ0FBakI7S0FBTUYsVztBQUlOLE1BQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSx3R0FBVixDLENBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztNQWhCTUQsSTs7QUFpQk4sTUFBTUUsZUFBZ0MsR0FBRyxDQUFDO0FBQUVDLFFBQU0sR0FBRztBQUFYLENBQUQsS0FBeUI7QUFBQTs7QUFFaEUsUUFBTUMsSUFBSSxHQUFHQyxnRkFBYSxDQUFFQyxLQUFELElBQWtCQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQW5CLENBQTFCO0FBRUEsU0FFRSxNQUFDLGtEQUFEO0FBQVksU0FBSyxFQUFFO0FB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RUFBRTtBQUFFUCxXQUFLLEVBQUU7QUFBVCxLQUFyRDtBQUFzRSxZQUFRLEVBQUU7QUFBRUEsV0FBSyxFQUFFO0FBQVQsS0FBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxXQUFPLEVBQUUsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFg7QUFFRSxTQUFLLEVBQUMsU0FGUjtBQUdFLFdBQU8sRUFBQyxXQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLFdBQUQ7QUFBYSxRQUFJLEVBQUMseUJBQWxCO0FBQTRDLFNBQUssRUFBQyxZQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGLENBREYsQ0FMRixDQWhFRixDQURGLENBSEYsQ0FGRjtBQTZGRCxDQWpHRDs7R0FBTVIsZTtVQUVTRyx3RTs7O01BRlRILGU7QUFrR1NBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNhOWIyNjM4ZDE1NWMyYjA4MGJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbnRhaW5lciwgQXZhdGFyLCBUeXBvZ3JhcGh5LCBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHdpbGZyZWRJbWcgZnJvbSAnQHJvb3QvaW1nL3dpbGZyZWQtcHJvZmlsZS5wbmcnXHJcbmltcG9ydCB7IFJlc3BvbnNpdmUgfSBmcm9tICcuLi9zaGFyZWQnXHJcbmltcG9ydCBTZWdtZW50IGZyb20gJy4uL3NoYXJlZC9TZWdtZW50J1xyXG5pbXBvcnQgV29ya0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1dvcmsnXHJcbmltcG9ydCBSb29tSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUm9vbSdcclxuLy8gaW1wb3J0IEhvbWVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZVwiO1xyXG5pbXBvcnQgTWFpbE91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NYWlsT3V0bGluZSdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuLy8gaW1wb3J0IHsgQnJhbmRCdXR0b24gfSBmcm9tIFwiQHJvb3QvdGhlbWUvQ3VzdG9tXCI7XHJcbmltcG9ydCBTY2FsZVVwRG93bkNvbXBvbmVudCBmcm9tICdAY29tcG9uZW50cy9zaGFyZWQvU2NhbGVVcERvd25Db21wb25lbnQnXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknXHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGhlaWdodD86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBTdHlsZWRBbmtlciA9IHN0eWxlZC5hYFxyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuYFxyXG5jb25zdCBJdGVtID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5gXHJcblxyXG4vLyBjb25zdCBQbGFjZXNHcmlkID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIGRpc3BsYXk6IGdyaWQ7XHJcbi8vICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4vLyAgICAgZ3JpZC1nYXA6IDFyZW07XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4vLyAgICAgJiBkaXZ7XHJcbi8vICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICB9XHJcbi8vIGA7XHJcbmNvbnN0IEhvbWVwYWdlSGVhZGluZzogUmVhY3QuRkM8UHJvcHM+ID0gKHsgaGVpZ2h0ID0gJzgwdmgnIH0pID0+IHtcclxuXHJcbiAgY29uc3QgaXNTbSA9IHVzZU1lZGlhUXVlcnkoKHRoZW1lOiBUaGVtZSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJykpXHJcblxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPFJlc3BvbnNpdmUgc3R5bGU9e3tcclxuICAgICAgcGFkZGluZ0JvdHRvbTogaXNTbSA/ICc0cmVtJyA6ICcwJ1xyXG4gICAgfX0+XHJcbiAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgIDxDb250YWluZXIgaWQ9J3dlbGNvbWUtc2VjdGlvbicgc3R5bGU9e3sgaGVpZ2h0IH19PlxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgaW5pdGlhbD17eyBzY2FsZTogMSB9fVxyXG4gICAgICAgICAgICBhbmltYXRlPXt7IHNjYWxlOiBbMS4zLCAxXSB9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ3NwcmluZycsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICBzcmM9e3dpbGZyZWRJbWd9XHJcbiAgICAgICAgICAgICAgLy8gc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU2MTIwNzk0OS93aWxmcmVkWm9vbWVkLnBuZ1wiXHJcbiAgICAgICAgICAgICAgLy8gc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiA0MDAsXHJcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IDQwMCxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzJyZW0nLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvLyBjaXJjdWxhclxyXG4gICAgICAgICAgICAgIGFsdD0nd2lsZnJlZCdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J20tYXV0byBib3JkZXItZnVsbCB3aXRoLXNoYWRvdydcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuXHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9J2gxJ1xyXG4gICAgICAgICAgICB2YXJpYW50PSdoMydcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAvLyBmb250U2l6ZTogXCIyZW1cIixcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDUsXHJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMC41ZW0nLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U2NhbGVVcERvd25Db21wb25lbnQgYmFja2dyb3VuZHM9e1tdIGFzIGFueX0+XHJcbiAgICAgICAgICAgICAgV0lMRlJFRCBMT1BFWlxyXG4gICAgICAgICAgPC9TY2FsZVVwRG93bkNvbXBvbmVudD5cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIGluaXRpYWw9J2hpZGRlbidcclxuICAgICAgICAgICAgICBhbmltYXRlPSd2aXNpYmxlJ1xyXG4gICAgICAgICAgICAgIHZhcmlhbnRzPXt7XHJcbiAgICAgICAgICAgICAgICBoaWRkZW46IHtcclxuICAgICAgICAgICAgICAgICAgc2NhbGU6IDAuOCxcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB7XHJcbiAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLFxyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDAuNCxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxXb3JrSWNvbiAvPlxyXG5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5RdWFsaXR5IEFzc3VyYW5jZS9XZWIgRGV2ZWxvcG1lbnQ8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPHNtYWxsPlJlYWN0LCBOb2RlanMsIEV4cHJlc3MsIE1vbmdvREIsIFdlYiBBY2Nlc3NpYmlsaXR5PC9zbWFsbD5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICAgIDxSb29tSWNvbiAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuPkdhcmZpZWxkLCBOSiwgVVNBLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IHN0eWxlPXt7IG1hcmdpbjogJzFyZW0gMCcgfX0gd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNSB9fSB3aGlsZVRhcD17eyBzY2FsZTogMS4yIH19PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGVuZEljb249ezxNYWlsT3V0bGluZUljb24gLz59XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRBbmtlciBocmVmPSdtYWlsdG86Y3ViYW1jQGdtYWlsLmNvbScgdGl0bGU9J2NvbnRhY3QgbWUnPlxyXG4gICAgICAgICAgICAgICAgICBDb250YWN0IE1lXHJcbiAgICAgICAgICAgIDwvU3R5bGVkQW5rZXI+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgIDwvSXRlbT5cclxuXHJcblxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L1NlZ21lbnQ+XHJcbiAgICA8L1Jlc3BvbnNpdmU+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlSGVhZGluZ1xyXG4iXSwic291cmNlUm9vdCI6IiJ9