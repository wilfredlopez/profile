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
})(["font-size:1.2rem;color:", ";font-weight:500;"], props => props.theme.colors.primary);
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
      marginTop: "2rem"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdC50c3giXSwibmFtZXMiOlsiVGl0bGVMaW5rIiwic3R5bGVkIiwiU3R5bGVkSHRtbExpbmsiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsIlByb2plY3QiLCJzaG93U2xpZGVyQ29udHJvbHMiLCJ1cmwiLCJuYW1lIiwidGl0bGUiLCJsb29wIiwiY2xhc3NlcyIsInVzZVNoYXJlZFN0eWxlcyIsInRleHRUcmFuc2Zvcm0iLCJtYXJnaW5Ub3AiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW4iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInJvb3QiLCJtaW5QYWRkaW5nWCIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwibGVuZ3RoIiwibWFyZ2luQm90dG9tIiwiY29uY2F0IiwiZmxleENlbnRlciIsImltZ1BhdGgiLCJwYWRkaW5nQm90dG9tIiwiY2xhc3NLZXkiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFPLE1BQU1BLFNBQVMsR0FBR0MsaUVBQU0sQ0FBQ0MsaUVBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxxREFFVkMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsT0FGbkIsQ0FBZjtLQUFNTixTOztBQU1iLE1BQU1PLE9BQXdCLEdBQUcsVUFFNUI7QUFBQTs7QUFBQSxNQURIO0FBQUVDLHNCQUFrQixHQUFHLElBQXZCO0FBQTZCQyxPQUE3QjtBQUFrQ0MsUUFBbEM7QUFBd0NDLFNBQXhDO0FBQStDQztBQUEvQyxHQUNHO0FBQUEsTUFEcURULEtBQ3JEOztBQUNILFFBQU1VLE9BQU8sR0FBR0MsMkVBQWUsRUFBL0I7QUFDQSxTQUNFLG1FQUNFLE1BQUMsaUVBQUQ7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QTJCLGFBQVMsRUFBQyxZQUFyQztBQUFrRCxTQUFLLEVBQUVDLElBQXpEO0FBQStELFdBQU8sTUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxJQUFJLENBQUN1QixXQUFMLEVBREgsQ0FERixDQURGLENBTkYsQ0F6REYsQ0FERjtBQTBFRCxDQTlFRDs7R0FBTTFCLE87VUFHWU8sbUU7OztNQUhaUCxPO0FBZ0ZTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy5iZWM2ODYxOWY3MTQ1YmRkYmQ1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3R5bGVkSHRtbExpbmsgfSBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkXCJcclxuaW1wb3J0IFNsaWRlckNhcmQsIHsgSW1hZ2VUb1NsaWRlciB9IGZyb20gXCJAY29tcG9uZW50cy9zaGFyZWQvU2xpZGVyQ2FyZFwiXHJcbmltcG9ydCB7XHJcbiAgQ29udGFpbmVyLFxyXG4gIEdyaWQsXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgeyBCcmFuZEJ1dHRvbiwgSW1hZ2VCdXR0b24gfSBmcm9tIFwiQHJvb3QvdGhlbWUvQ3VzdG9tXCJcclxuaW1wb3J0IHVzZVNoYXJlZFN0eWxlcyBmcm9tIFwiQHJvb3QvdGhlbWUvdXNlU2hhcmVkU3R5bGVzXCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgRGl2aWRlckVsZW1lbnQgfSBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkXCJcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgdXJsOiBzdHJpbmdcclxuICBpbWFnZXM6IEltYWdlVG9TbGlkZXJbXVxyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIGNsYXNzS2V5OiBcInZhcGVcIiB8IFwiZXhwZW5zZVwiIHwgXCJzaG9wXCJcclxuICB0aXRsZTogc3RyaW5nXHJcbiAgc2hvd1NsaWRlckNvbnRyb2xzPzogYm9vbGVhblxyXG4gIGxvb3A/OiBib29sZWFuXHJcbiAgZGVzY3JpcHRpb246IEpTWC5FbGVtZW50XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZUxpbmsgPSBzdHlsZWQoU3R5bGVkSHRtbExpbmspYFxyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbmBcclxuXHJcbmNvbnN0IFByb2plY3Q6IFJlYWN0LkZDPFByb3BzPiA9IChcclxuICB7IHNob3dTbGlkZXJDb250cm9scyA9IHRydWUsIHVybCwgbmFtZSwgdGl0bGUsIGxvb3AsIC4uLnByb3BzIH0sXHJcbikgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTaGFyZWRTdHlsZXMoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RGl2aWRlckVsZW1lbnRcclxuICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXIgcHJvamVjdC10aWxlXCJcclxuICAgICAgICBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLCBtYXJnaW5Ub3A6IFwiMnJlbVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VGl0bGVMaW5rXHJcbiAgICAgICAgICBocmVmPXt1cmx9XHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICB0aXRsZT17bmFtZX1cclxuICAgICAgICAgIG5vSG92ZXJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bmFtZX1cclxuICAgICAgICA8L1RpdGxlTGluaz5cclxuICAgICAgPC9EaXZpZGVyRWxlbWVudD5cclxuXHJcbiAgICAgIDxDb250YWluZXJcclxuICAgICAgICBtYXhXaWR0aD1cInNtXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgIHJvb3Q6IGNsYXNzZXMubWluUGFkZGluZ1gsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAge3Byb3BzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAge3Byb3BzLmltYWdlcy5sZW5ndGggPiAxICYmXHJcbiAgICAgICAgICAgIDxTbGlkZXJDYXJkXHJcbiAgICAgICAgICAgICAgc2hvd0NvbnRyb2xzPXtzaG93U2xpZGVyQ29udHJvbHN9XHJcbiAgICAgICAgICAgICAgaW1hZ2VEYXRhPXtwcm9wcy5pbWFnZXN9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs3NTB9XHJcbiAgICAgICAgICAgICAgbG9vcD17bG9vcH1cclxuICAgICAgICAgICAgICBzaG93VGl0bGVcclxuICAgICAgICAgICAgLz59XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAge3Byb3BzLmltYWdlcy5sZW5ndGggPT09IDEgJiZcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxyXG4gICAgICAgIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5taW5QYWRkaW5nWC5jb25jYXQoXCIgXCIgKyBjbGFzc2VzLmZsZXhDZW50ZXIpfT5cclxuICAgICAgICAgIDxJbWFnZUJ1dHRvblxyXG4gICAgICAgICAgICBsaW5rVXJsPXt1cmx9XHJcbiAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgYmFja2dyb3VuZFVybD17cHJvcHMuaW1hZ2VzWzBdLmltZ1BhdGh9XHJcbiAgICAgICAgICAgIHdpZHRoPXs1MjB9XHJcbiAgICAgICAgICAgIG1pbkhlaWdodD17NTAwfVxyXG4gICAgICAgICAgICBidXR0b21Qcm9wcz17e319XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICA8L2Rpdj59XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxcmVtXCIgfX0gLz5cclxuICAgICAgPEdyaWRcclxuICAgICAgICBjb250YWluZXJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiBcIjFyZW1cIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgIDxCcmFuZEJ1dHRvbiBjb2xvcj17cHJvcHMuY2xhc3NLZXl9IHNpemU9XCJtZWRpdW1cIiB2YXJpYW50PVwiY29udGFpbmVkXCI+XHJcbiAgICAgICAgICAgIDxTdHlsZWRIdG1sTGluayBocmVmPXt1cmx9IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIiB0aXRsZT17bmFtZX0gbm9Ib3Zlcj5cclxuICAgICAgICAgICAgICB7bmFtZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICA8L1N0eWxlZEh0bWxMaW5rPlxyXG4gICAgICAgICAgPC9CcmFuZEJ1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9