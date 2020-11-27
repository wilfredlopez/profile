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
  height = '81vh'
}) => {
  _s();

  const isSm = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_11__["default"])(theme => theme.breakpoints.down('md'));
  return __jsx(_shared__WEBPACK_IMPORTED_MODULE_3__["Responsive"], {
    style: {
      paddingBottom: isSm ? '4rem' : '0rem'
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
      height: isSm ? height : '63vh'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFydGlhbHMvSG9tZXBhZ2VIZWFkaW5nLnRzeCJdLCJuYW1lcyI6WyJTdHlsZWRBbmtlciIsInN0eWxlZCIsImEiLCJJdGVtIiwiZGl2IiwiSG9tZXBhZ2VIZWFkaW5nIiwiaGVpZ2h0IiwiaXNTbSIsInVzZU1lZGlhUXVlcnkiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwiZG93biIsInBhZGRpbmdCb3R0b20iLCJzY2FsZSIsInR5cGUiLCJ3aWxmcmVkSW1nIiwid2lkdGgiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJoaWRkZW4iLCJvcGFjaXR5IiwidmlzaWJsZSIsInRyYW5zaXRpb24iLCJkZWxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBTUEsTUFBTUEsV0FBVyxHQUFHQyx5REFBTSxDQUFDQyxDQUFWO0FBQUE7QUFBQTtBQUFBLDJDQUFqQjtLQUFNRixXO0FBSU4sTUFBTUcsSUFBSSxHQUFHRix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdHQUFWLEMsQ0FRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O01BaEJNRCxJOztBQWlCTixNQUFNRSxlQUFnQyxHQUFHLENBQUM7QUFBRUMsUUFBTSxHQUFHO0FBQVgsQ0FBRCxLQUF5QjtBQUFBOztBQUVoRSxRQUFNQyxJQUFJLEdBQUdDLGdGQUFhLENBQUVDLEtBQUQsSUFBa0JBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBbkIsQ0FBMUI7QUFFQSxTQUVFLE1BQUMsa0RBQUQ7QUFBWSxTQUFLLEVBQUU7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RVIsWUFBTSxFQUFFO0FBQVYsS0FBbkI7QUFBeUMsY0FBVSxFQUFFO0FBQUVQLFdBQUssRUFBRTtBQUFULEtBQXJEO0FBQXNFLFlBQVEsRUFBRTtBQUFFQSxXQUFLLEVBQUU7QUFBVCxLQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNFLFdBQU8sRUFBRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEWDtBQUVFLFNBQUssRUFBQyxTQUZSO0FBR0UsV0FBTyxFQUFDLFdBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsV0FBRDtBQUFhLFFBQUksRUFBQyx5QkFBbEI7QUFBNEMsU0FBSyxFQUFDLFlBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEYsQ0FERixDQUxGLENBaEVGLENBREYsQ0FIRixDQUZGO0FBNkZELENBakdEOztHQUFNUixlO1VBRVNHLHdFOzs7TUFGVEgsZTtBQWtHU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTFjZmFkYzY1ZjU3NDU3Zjk2MDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBBdmF0YXIsIFR5cG9ncmFwaHksIEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgd2lsZnJlZEltZyBmcm9tICdAcm9vdC9pbWcvd2lsZnJlZC1wcm9maWxlLnBuZydcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZSB9IGZyb20gJy4uL3NoYXJlZCdcclxuaW1wb3J0IFNlZ21lbnQgZnJvbSAnLi4vc2hhcmVkL1NlZ21lbnQnXHJcbmltcG9ydCBXb3JrSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvV29yaydcclxuaW1wb3J0IFJvb21JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Sb29tJ1xyXG4vLyBpbXBvcnQgSG9tZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ib21lXCI7XHJcbmltcG9ydCBNYWlsT3V0bGluZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01haWxPdXRsaW5lJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG4vLyBpbXBvcnQgeyBCcmFuZEJ1dHRvbiB9IGZyb20gXCJAcm9vdC90aGVtZS9DdXN0b21cIjtcclxuaW1wb3J0IFNjYWxlVXBEb3duQ29tcG9uZW50IGZyb20gJ0Bjb21wb25lbnRzL3NoYXJlZC9TY2FsZVVwRG93bkNvbXBvbmVudCdcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSdcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaGVpZ2h0Pzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZEFua2VyID0gc3R5bGVkLmFgXHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5gXHJcbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbmBcclxuXHJcbi8vIGNvbnN0IFBsYWNlc0dyaWQgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgZGlzcGxheTogZ3JpZDtcclxuLy8gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbi8vICAgICBncmlkLWdhcDogMXJlbTtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbi8vICAgICAmIGRpdntcclxuLy8gICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIH1cclxuLy8gYDtcclxuY29uc3QgSG9tZXBhZ2VIZWFkaW5nOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBoZWlnaHQgPSAnODF2aCcgfSkgPT4ge1xyXG5cclxuICBjb25zdCBpc1NtID0gdXNlTWVkaWFRdWVyeSgodGhlbWU6IFRoZW1lKSA9PiB0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpKVxyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxSZXNwb25zaXZlIHN0eWxlPXt7XHJcbiAgICAgIHBhZGRpbmdCb3R0b206IGlzU20gPyAnNHJlbScgOiAnMHJlbSdcclxuICAgIH19PlxyXG4gICAgICA8U2VnbWVudD5cclxuICAgICAgICA8Q29udGFpbmVyIGlkPSd3ZWxjb21lLXNlY3Rpb24nIHN0eWxlPXt7IGhlaWdodDogaXNTbSA/IGhlaWdodCA6ICc2M3ZoJyB9fT5cclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgc2NhbGU6IDEgfX1cclxuICAgICAgICAgICAgYW5pbWF0ZT17eyBzY2FsZTogWzEuMywgMV0gfX1cclxuICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdzcHJpbmcnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgc3JjPXt3aWxmcmVkSW1nfVxyXG4gICAgICAgICAgICAgIC8vIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3dsb3Blei9pbWFnZS91cGxvYWQvdjE1NjEyMDc5NDkvd2lsZnJlZFpvb21lZC5wbmdcIlxyXG4gICAgICAgICAgICAgIC8vIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogNDAwLFxyXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiA0MDAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcycmVtJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLy8gY2lyY3VsYXJcclxuICAgICAgICAgICAgICBhbHQ9J3dpbGZyZWQnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtLWF1dG8gYm9yZGVyLWZ1bGwgd2l0aC1zaGFkb3cnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcblxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgY29tcG9uZW50PSdoMSdcclxuICAgICAgICAgICAgdmFyaWFudD0naDMnXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgLy8gZm9udFNpemU6IFwiMmVtXCIsXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA1LFxyXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogJzAuNWVtJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFNjYWxlVXBEb3duQ29tcG9uZW50IGJhY2tncm91bmRzPXtbXSBhcyBhbnl9PlxyXG4gICAgICAgICAgICAgIFdJTEZSRUQgTE9QRVpcclxuICAgICAgICAgIDwvU2NhbGVVcERvd25Db21wb25lbnQ+XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8SXRlbT5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICBpbml0aWFsPSdoaWRkZW4nXHJcbiAgICAgICAgICAgICAgYW5pbWF0ZT0ndmlzaWJsZSdcclxuICAgICAgICAgICAgICB2YXJpYW50cz17e1xyXG4gICAgICAgICAgICAgICAgaGlkZGVuOiB7XHJcbiAgICAgICAgICAgICAgICAgIHNjYWxlOiAwLjgsXHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZToge1xyXG4gICAgICAgICAgICAgICAgICBzY2FsZTogMSxcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwLjQsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8V29ya0ljb24gLz5cclxuXHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+UXVhbGl0eSBBc3N1cmFuY2UvV2ViIERldmVsb3BtZW50PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxzbWFsbD5SZWFjdCwgTm9kZWpzLCBFeHByZXNzLCBNb25nb0RCLCBXZWIgQWNjZXNzaWJpbGl0eTwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICA8Um9vbUljb24gLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8c3Bhbj5HYXJmaWVsZCwgTkosIFVTQS48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdiBzdHlsZT17eyBtYXJnaW46ICcxcmVtIDAnIH19IHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUgfX0gd2hpbGVUYXA9e3sgc2NhbGU6IDEuMiB9fT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBlbmRJY29uPXs8TWFpbE91dGxpbmVJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkQW5rZXIgaHJlZj0nbWFpbHRvOmN1YmFtY0BnbWFpbC5jb20nIHRpdGxlPSdjb250YWN0IG1lJz5cclxuICAgICAgICAgICAgICAgICAgQ29udGFjdCBNZVxyXG4gICAgICAgICAgICA8L1N0eWxlZEFua2VyPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICA8L0l0ZW0+XHJcblxyXG5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9TZWdtZW50PlxyXG4gICAgPC9SZXNwb25zaXZlPlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZUhlYWRpbmdcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==