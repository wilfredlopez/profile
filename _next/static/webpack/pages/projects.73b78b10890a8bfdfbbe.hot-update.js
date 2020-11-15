webpackHotUpdate_N_E("pages/projects",{

/***/ "./src/components/projects/Project.tsx":
/*!*********************************************!*\
  !*** ./src/components/projects/Project.tsx ***!
  \*********************************************/
/*! exports provided: TitleLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleLink", function() { return TitleLink; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/shared */ "./src/components/shared/index.ts");
/* harmony import */ var _components_shared_SliderCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/shared/SliderCard */ "./src/components/shared/SliderCard.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _root_theme_Custom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @root/theme/Custom */ "./src/theme/Custom.tsx");
/* harmony import */ var _root_theme_useSharedStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @root/theme/useSharedStyles */ "./src/theme/useSharedStyles.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "D:\\WEB_DEV\\Personal_Projects\\wilfredlopez\\src\\components\\projects\\Project.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;








const TitleLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(_components_shared__WEBPACK_IMPORTED_MODULE_1__["StyledHtmlLink"]).withConfig({
  displayName: "Project__TitleLink",
  componentId: "d3i61s-0"
})(["font-size:1.2rem;color:", ";font-weight:500;"], props => props.theme.colors.dark);
_c = TitleLink;

const Project = (_ref) => {
  _s();

  let {
    showSliderControls = true,
    url,
    name,
    title,
    loop
  } = _ref,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["showSliderControls", "url", "name", "title", "loop"]);

  const classes = Object(_root_theme_useSharedStyles__WEBPACK_IMPORTED_MODULE_5__["default"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_1__["DividerElement"], {
    className: "header project-tile",
    style: {
      textTransform: "uppercase",
      marginTop: "2rem",
      paddingTop: '2rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(TitleLink, {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    title: name,
    noHover: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, name)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    maxWidth: "sm",
    style: {
      alignItems: "center",
      justifyContent: "center",
      margin: "auto",
      display: "flex",
      flexDirection: "column"
    },
    classes: {
      root: classes.minPaddingX
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body1",
    component: "div",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, props.description, props.images.length > 1 && __jsx(_components_shared_SliderCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    showControls: showSliderControls,
    imageData: props.images,
    height: 750,
    loop: loop,
    showTitle: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }))), props.images.length === 1 && __jsx("div", {
    style: {
      marginBottom: "1rem"
    },
    className: classes.minPaddingX.concat(" " + classes.flexCenter),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(_root_theme_Custom__WEBPACK_IMPORTED_MODULE_4__["ImageButton"], {
    linkUrl: url,
    title: title,
    backgroundUrl: props.images[0].imgPath,
    width: 520,
    minHeight: 500,
    buttomProps: {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: {
      marginBottom: "1rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    alignItems: "center",
    justify: "center",
    style: {
      paddingBottom: "1rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(_root_theme_Custom__WEBPACK_IMPORTED_MODULE_4__["BrandButton"], {
    color: props.classKey,
    size: "medium",
    variant: "contained",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_1__["StyledHtmlLink"], {
    href: url,
    className: "text-white",
    title: name,
    noHover: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, name.toUpperCase())))));
};

_s(Project, "J7JZJHGYvYRbvpJBSqBDmw6YWoM=", false, function () {
  return [_root_theme_useSharedStyles__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c2 = Project;
/* harmony default export */ __webpack_exports__["default"] = (Project);

var _c, _c2;

$RefreshReg$(_c, "TitleLink");
$RefreshReg$(_c2, "Project");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdC50c3giXSwibmFtZXMiOlsiVGl0bGVMaW5rIiwic3R5bGVkIiwiU3R5bGVkSHRtbExpbmsiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwiZGFyayIsIlByb2plY3QiLCJzaG93U2xpZGVyQ29udHJvbHMiLCJ1cmwiLCJuYW1lIiwidGl0bGUiLCJsb29wIiwiY2xhc3NlcyIsInVzZVNoYXJlZFN0eWxlcyIsInRleHRUcmFuc2Zvcm0iLCJtYXJnaW5Ub3AiLCJwYWRkaW5nVG9wIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJyb290IiwibWluUGFkZGluZ1giLCJkZXNjcmlwdGlvbiIsImltYWdlcyIsImxlbmd0aCIsIm1hcmdpbkJvdHRvbSIsImNvbmNhdCIsImZsZXhDZW50ZXIiLCJpbWdQYXRoIiwicGFkZGluZ0JvdHRvbSIsImNsYXNzS2V5IiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFhTyxNQUFNQSxTQUFTLEdBQUdDLGlFQUFNLENBQUNDLGlFQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEscURBRVZDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLElBRm5CLENBQWY7S0FBTU4sUzs7QUFNYixNQUFNTyxPQUF3QixHQUFHLFVBRTVCO0FBQUE7O0FBQUEsTUFESDtBQUFFQyxzQkFBa0IsR0FBRyxJQUF2QjtBQUE2QkMsT0FBN0I7QUFBa0NDLFFBQWxDO0FBQXdDQyxTQUF4QztBQUErQ0M7QUFBL0MsR0FDRztBQUFBLE1BRHFEVCxLQUNyRDs7QUFDSCxRQUFNVSxPQUFPLEdBQUdDLDJFQUFlLEVBQS9CO0FBQ0EsU0FDRSxtRUFDRSxN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QUMsaUVBQUQ7QUFBZ0IsUUFBSSxFQUFFeEIsR0FBdEI7QUFBMkIsYUFBUyxFQUFDLFlBQXJDO0FBQWtELFNBQUssRUFBRUMsSUFBekQ7QUFBK0QsV0FBTyxNQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLElBQUksQ0FBQ3dCLFdBQUwsRUFESCxDQURGLENBREYsQ0FORixDQXpERixDQURGO0FBMEVELENBOUVEOztHQUFNM0IsTztVQUdZTyxtRTs7O01BSFpQLE87QUFnRlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzLjczYjc4YjEwODkwYThiZmRmYmJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHlsZWRIdG1sTGluayB9IGZyb20gXCJAY29tcG9uZW50cy9zaGFyZWRcIlxyXG5pbXBvcnQgU2xpZGVyQ2FyZCwgeyBJbWFnZVRvU2xpZGVyIH0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZC9TbGlkZXJDYXJkXCJcclxuaW1wb3J0IHtcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCB7IEJyYW5kQnV0dG9uLCBJbWFnZUJ1dHRvbiB9IGZyb20gXCJAcm9vdC90aGVtZS9DdXN0b21cIlxyXG5pbXBvcnQgdXNlU2hhcmVkU3R5bGVzIGZyb20gXCJAcm9vdC90aGVtZS91c2VTaGFyZWRTdHlsZXNcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBEaXZpZGVyRWxlbWVudCB9IGZyb20gXCJAY29tcG9uZW50cy9zaGFyZWRcIlxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB1cmw6IHN0cmluZ1xyXG4gIGltYWdlczogSW1hZ2VUb1NsaWRlcltdXHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgY2xhc3NLZXk6IFwidmFwZVwiIHwgXCJleHBlbnNlXCIgfCBcInNob3BcIlxyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBzaG93U2xpZGVyQ29udHJvbHM/OiBib29sZWFuXHJcbiAgbG9vcD86IGJvb2xlYW5cclxuICBkZXNjcmlwdGlvbjogSlNYLkVsZW1lbnRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlTGluayA9IHN0eWxlZChTdHlsZWRIdG1sTGluaylgXHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZGFya307XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuYFxyXG5cclxuY29uc3QgUHJvamVjdDogUmVhY3QuRkM8UHJvcHM+ID0gKFxyXG4gIHsgc2hvd1NsaWRlckNvbnRyb2xzID0gdHJ1ZSwgdXJsLCBuYW1lLCB0aXRsZSwgbG9vcCwgLi4ucHJvcHMgfSxcclxuKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVNoYXJlZFN0eWxlcygpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxEaXZpZGVyRWxlbWVudFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImhlYWRlciBwcm9qZWN0LXRpbGVcIlxyXG4gICAgICAgIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIG1hcmdpblRvcDogXCIycmVtXCIsIHBhZGRpbmdUb3A6ICcycmVtJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRpdGxlTGlua1xyXG4gICAgICAgICAgaHJlZj17dXJsfVxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgdGl0bGU9e25hbWV9XHJcbiAgICAgICAgICBub0hvdmVyXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge25hbWV9XHJcbiAgICAgICAgPC9UaXRsZUxpbms+XHJcbiAgICAgIDwvRGl2aWRlckVsZW1lbnQ+XHJcblxyXG4gICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgbWF4V2lkdGg9XCJzbVwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICByb290OiBjbGFzc2VzLm1pblBhZGRpbmdYLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgIHtwcm9wcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIHtwcm9wcy5pbWFnZXMubGVuZ3RoID4gMSAmJlxyXG4gICAgICAgICAgICA8U2xpZGVyQ2FyZFxyXG4gICAgICAgICAgICAgIHNob3dDb250cm9scz17c2hvd1NsaWRlckNvbnRyb2xzfVxyXG4gICAgICAgICAgICAgIGltYWdlRGF0YT17cHJvcHMuaW1hZ2VzfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17NzUwfVxyXG4gICAgICAgICAgICAgIGxvb3A9e2xvb3B9XHJcbiAgICAgICAgICAgICAgc2hvd1RpdGxlXHJcbiAgICAgICAgICAgIC8+fVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIHtwcm9wcy5pbWFnZXMubGVuZ3RoID09PSAxICYmXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIixcclxuICAgICAgICB9fSBjbGFzc05hbWU9e2NsYXNzZXMubWluUGFkZGluZ1guY29uY2F0KFwiIFwiICsgY2xhc3Nlcy5mbGV4Q2VudGVyKX0+XHJcbiAgICAgICAgICA8SW1hZ2VCdXR0b25cclxuICAgICAgICAgICAgbGlua1VybD17dXJsfVxyXG4gICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRVcmw9e3Byb3BzLmltYWdlc1swXS5pbWdQYXRofVxyXG4gICAgICAgICAgICB3aWR0aD17NTIwfVxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ9ezUwMH1cclxuICAgICAgICAgICAgYnV0dG9tUHJvcHM9e3t9fVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPC9kaXY+fVxyXG5cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMXJlbVwiIH19IC8+XHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogXCIxcmVtXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICA8QnJhbmRCdXR0b24gY29sb3I9e3Byb3BzLmNsYXNzS2V5fSBzaXplPVwibWVkaXVtXCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlxyXG4gICAgICAgICAgICA8U3R5bGVkSHRtbExpbmsgaHJlZj17dXJsfSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgdGl0bGU9e25hbWV9IG5vSG92ZXI+XHJcbiAgICAgICAgICAgICAge25hbWUudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgPC9TdHlsZWRIdG1sTGluaz5cclxuICAgICAgICAgIDwvQnJhbmRCdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==