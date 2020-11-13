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
      marginTop: "1rem"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdC50c3giXSwibmFtZXMiOlsiVGl0bGVMaW5rIiwic3R5bGVkIiwiU3R5bGVkSHRtbExpbmsiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsIlByb2plY3QiLCJzaG93U2xpZGVyQ29udHJvbHMiLCJ1cmwiLCJuYW1lIiwidGl0bGUiLCJsb29wIiwiY2xhc3NlcyIsInVzZVNoYXJlZFN0eWxlcyIsInRleHRUcmFuc2Zvcm0iLCJtYXJnaW5Ub3AiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW4iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInJvb3QiLCJtaW5QYWRkaW5nWCIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwibGVuZ3RoIiwibWFyZ2luQm90dG9tIiwiY29uY2F0IiwiZmxleENlbnRlciIsImltZ1BhdGgiLCJwYWRkaW5nQm90dG9tIiwiY2xhc3NLZXkiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFPLE1BQU1BLFNBQVMsR0FBR0MsaUVBQU0sQ0FBQ0MsaUVBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxxREFFVkMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsT0FGbkIsQ0FBZjtLQUFNTixTOztBQU1iLE1BQU1PLE9BQXdCLEdBQUcsVUFFNUI7QUFBQTs7QUFBQSxNQURIO0FBQUVDLHNCQUFrQixHQUFHLElBQXZCO0FBQTZCQyxPQUE3QjtBQUFrQ0MsUUFBbEM7QUFBd0NDLFNBQXhDO0FBQStDQztBQUEvQyxHQUNHO0FBQUEsTUFEcURULEtBQ3JEOztBQUNILFFBQU1VLE9BQU8sR0FBR0MsMkVBQWUsRUFBL0I7QUFDQSxTQUNFLG1FQUNFLE1BQUMsaUVBQUQ7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QTJCLGFBQVMsRUFBQyxZQUFyQztBQUFrRCxTQUFLLEVBQUVDLElBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsSUFBSSxDQUFDdUIsV0FBTCxFQURILENBREYsQ0FERixDQU5GLENBekRGLENBREY7QUEwRUQsQ0E5RUQ7O0dBQU0xQixPO1VBR1lPLG1FOzs7TUFIWlAsTztBQWdGU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMuNzc2ZTQ2NTllMDZhM2ViODVlZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0eWxlZEh0bWxMaW5rIH0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZFwiXHJcbmltcG9ydCBTbGlkZXJDYXJkLCB7IEltYWdlVG9TbGlkZXIgfSBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkL1NsaWRlckNhcmRcIlxyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBHcmlkLFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IHsgQnJhbmRCdXR0b24sIEltYWdlQnV0dG9uIH0gZnJvbSBcIkByb290L3RoZW1lL0N1c3RvbVwiXHJcbmltcG9ydCB1c2VTaGFyZWRTdHlsZXMgZnJvbSBcIkByb290L3RoZW1lL3VzZVNoYXJlZFN0eWxlc1wiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IERpdmlkZXJFbGVtZW50IH0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZFwiXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHVybDogc3RyaW5nXHJcbiAgaW1hZ2VzOiBJbWFnZVRvU2xpZGVyW11cclxuICBuYW1lOiBzdHJpbmdcclxuICBjbGFzc0tleTogXCJ2YXBlXCIgfCBcImV4cGVuc2VcIiB8IFwic2hvcFwiXHJcbiAgdGl0bGU6IHN0cmluZ1xyXG4gIHNob3dTbGlkZXJDb250cm9scz86IGJvb2xlYW5cclxuICBsb29wPzogYm9vbGVhblxyXG4gIGRlc2NyaXB0aW9uOiBKU1guRWxlbWVudFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGVMaW5rID0gc3R5bGVkKFN0eWxlZEh0bWxMaW5rKWBcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG5gXHJcblxyXG5jb25zdCBQcm9qZWN0OiBSZWFjdC5GQzxQcm9wcz4gPSAoXHJcbiAgeyBzaG93U2xpZGVyQ29udHJvbHMgPSB0cnVlLCB1cmwsIG5hbWUsIHRpdGxlLCBsb29wLCAuLi5wcm9wcyB9LFxyXG4pID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU2hhcmVkU3R5bGVzKClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPERpdmlkZXJFbGVtZW50XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyIHByb2plY3QtdGlsZVwiXHJcbiAgICAgICAgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiwgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRpdGxlTGlua1xyXG4gICAgICAgICAgaHJlZj17dXJsfVxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgdGl0bGU9e25hbWV9XHJcbiAgICAgICAgICBub0hvdmVyXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge25hbWV9XHJcbiAgICAgICAgPC9UaXRsZUxpbms+XHJcbiAgICAgIDwvRGl2aWRlckVsZW1lbnQ+XHJcblxyXG4gICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgbWF4V2lkdGg9XCJzbVwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICByb290OiBjbGFzc2VzLm1pblBhZGRpbmdYLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgIHtwcm9wcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIHtwcm9wcy5pbWFnZXMubGVuZ3RoID4gMSAmJlxyXG4gICAgICAgICAgICA8U2xpZGVyQ2FyZFxyXG4gICAgICAgICAgICAgIHNob3dDb250cm9scz17c2hvd1NsaWRlckNvbnRyb2xzfVxyXG4gICAgICAgICAgICAgIGltYWdlRGF0YT17cHJvcHMuaW1hZ2VzfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17NzUwfVxyXG4gICAgICAgICAgICAgIGxvb3A9e2xvb3B9XHJcbiAgICAgICAgICAgICAgc2hvd1RpdGxlXHJcbiAgICAgICAgICAgIC8+fVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIHtwcm9wcy5pbWFnZXMubGVuZ3RoID09PSAxICYmXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIixcclxuICAgICAgICB9fSBjbGFzc05hbWU9e2NsYXNzZXMubWluUGFkZGluZ1guY29uY2F0KFwiIFwiICsgY2xhc3Nlcy5mbGV4Q2VudGVyKX0+XHJcbiAgICAgICAgICA8SW1hZ2VCdXR0b25cclxuICAgICAgICAgICAgbGlua1VybD17dXJsfVxyXG4gICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRVcmw9e3Byb3BzLmltYWdlc1swXS5pbWdQYXRofVxyXG4gICAgICAgICAgICB3aWR0aD17NTIwfVxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ9ezUwMH1cclxuICAgICAgICAgICAgYnV0dG9tUHJvcHM9e3t9fVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPC9kaXY+fVxyXG5cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMXJlbVwiIH19IC8+XHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogXCIxcmVtXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICA8QnJhbmRCdXR0b24gY29sb3I9e3Byb3BzLmNsYXNzS2V5fSBzaXplPVwibWVkaXVtXCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlxyXG4gICAgICAgICAgICA8U3R5bGVkSHRtbExpbmsgaHJlZj17dXJsfSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgdGl0bGU9e25hbWV9PlxyXG4gICAgICAgICAgICAgIHtuYW1lLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgIDwvU3R5bGVkSHRtbExpbms+XHJcbiAgICAgICAgICA8L0JyYW5kQnV0dG9uPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=