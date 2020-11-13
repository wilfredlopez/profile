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
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body1",
    component: "div",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
      lineNumber: 67,
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
      lineNumber: 77,
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
      lineNumber: 80,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: {
      marginBottom: "1rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx(_root_theme_Custom__WEBPACK_IMPORTED_MODULE_4__["BrandButton"], {
    color: props.classKey,
    size: "medium",
    variant: "contained",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_1__["StyledHtmlLink"], {
    href: url,
    className: "text-white",
    title: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdC50c3giXSwibmFtZXMiOlsiVGl0bGVMaW5rIiwic3R5bGVkIiwiU3R5bGVkSHRtbExpbmsiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwiZGFyayIsIlByb2plY3QiLCJzaG93U2xpZGVyQ29udHJvbHMiLCJ1cmwiLCJuYW1lIiwidGl0bGUiLCJsb29wIiwiY2xhc3NlcyIsInVzZVNoYXJlZFN0eWxlcyIsInRleHRUcmFuc2Zvcm0iLCJtYXJnaW5Ub3AiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW4iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInJvb3QiLCJtaW5QYWRkaW5nWCIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwibGVuZ3RoIiwibWFyZ2luQm90dG9tIiwiY29uY2F0IiwiZmxleENlbnRlciIsImltZ1BhdGgiLCJwYWRkaW5nQm90dG9tIiwiY2xhc3NLZXkiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFPLE1BQU1BLFNBQVMsR0FBR0MsaUVBQU0sQ0FBQ0MsaUVBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxxREFFVkMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsSUFGbkIsQ0FBZjtLQUFNTixTOztBQU1iLE1BQU1PLE9BQXdCLEdBQUcsVUFFNUI7QUFBQTs7QUFBQSxNQURIO0FBQUVDLHNCQUFrQixHQUFHLElBQXZCO0FBQTZCQyxPQUE3QjtBQUFrQ0MsUUFBbEM7QUFBd0NDLFNBQXhDO0FBQStDQztBQUEvQyxHQUNHO0FBQUEsTUFEcURULEtBQ3JEOztBQUNILFFBQU1VLE9BQU8sR0FBR0MsMkVBQWUsRUFBL0I7QUFDQSxTQUNFLG1FQUNFLE1BQUMsaUVBQUQ7QUFD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QUFBa0QsU0FBSyxFQUFFQyxJQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLElBQUksQ0FBQ3VCLFdBQUwsRUFESCxDQURGLENBREYsQ0FORixDQXhERixDQURGO0FBeUVELENBN0VEOztHQUFNMUIsTztVQUdZTyxtRTs7O01BSFpQLE87QUErRVNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzLmQ0MGI0Y2U2YzdkNmQzZTFjYmUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHlsZWRIdG1sTGluayB9IGZyb20gXCJAY29tcG9uZW50cy9zaGFyZWRcIlxyXG5pbXBvcnQgU2xpZGVyQ2FyZCwgeyBJbWFnZVRvU2xpZGVyIH0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZC9TbGlkZXJDYXJkXCJcclxuaW1wb3J0IHtcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCB7IEJyYW5kQnV0dG9uLCBJbWFnZUJ1dHRvbiB9IGZyb20gXCJAcm9vdC90aGVtZS9DdXN0b21cIlxyXG5pbXBvcnQgdXNlU2hhcmVkU3R5bGVzIGZyb20gXCJAcm9vdC90aGVtZS91c2VTaGFyZWRTdHlsZXNcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBEaXZpZGVyRWxlbWVudCB9IGZyb20gXCJAY29tcG9uZW50cy9zaGFyZWRcIlxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB1cmw6IHN0cmluZ1xyXG4gIGltYWdlczogSW1hZ2VUb1NsaWRlcltdXHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgY2xhc3NLZXk6IFwidmFwZVwiIHwgXCJleHBlbnNlXCIgfCBcInNob3BcIlxyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBzaG93U2xpZGVyQ29udHJvbHM/OiBib29sZWFuXHJcbiAgbG9vcD86IGJvb2xlYW5cclxuICBkZXNjcmlwdGlvbjogSlNYLkVsZW1lbnRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlTGluayA9IHN0eWxlZChTdHlsZWRIdG1sTGluaylgXHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZGFya307XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuYFxyXG5cclxuY29uc3QgUHJvamVjdDogUmVhY3QuRkM8UHJvcHM+ID0gKFxyXG4gIHsgc2hvd1NsaWRlckNvbnRyb2xzID0gdHJ1ZSwgdXJsLCBuYW1lLCB0aXRsZSwgbG9vcCwgLi4ucHJvcHMgfSxcclxuKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVNoYXJlZFN0eWxlcygpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxEaXZpZGVyRWxlbWVudFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImhlYWRlciBwcm9qZWN0LXRpbGVcIlxyXG4gICAgICAgIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIG1hcmdpblRvcDogXCIxcmVtXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUaXRsZUxpbmtcclxuICAgICAgICAgIGhyZWY9e3VybH1cclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgIHRpdGxlPXtuYW1lfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgIDwvVGl0bGVMaW5rPlxyXG4gICAgICA8L0RpdmlkZXJFbGVtZW50PlxyXG5cclxuICAgICAgPENvbnRhaW5lclxyXG4gICAgICAgIG1heFdpZHRoPVwic21cIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgcm9vdDogY2xhc3Nlcy5taW5QYWRkaW5nWCxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICB7cHJvcHMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICB7cHJvcHMuaW1hZ2VzLmxlbmd0aCA+IDEgJiZcclxuICAgICAgICAgICAgPFNsaWRlckNhcmRcclxuICAgICAgICAgICAgICBzaG93Q29udHJvbHM9e3Nob3dTbGlkZXJDb250cm9sc31cclxuICAgICAgICAgICAgICBpbWFnZURhdGE9e3Byb3BzLmltYWdlc31cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezc1MH1cclxuICAgICAgICAgICAgICBsb29wPXtsb29wfVxyXG4gICAgICAgICAgICAgIHNob3dUaXRsZVxyXG4gICAgICAgICAgICAvPn1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICB7cHJvcHMuaW1hZ2VzLmxlbmd0aCA9PT0gMSAmJlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXHJcbiAgICAgICAgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLm1pblBhZGRpbmdYLmNvbmNhdChcIiBcIiArIGNsYXNzZXMuZmxleENlbnRlcil9PlxyXG4gICAgICAgICAgPEltYWdlQnV0dG9uXHJcbiAgICAgICAgICAgIGxpbmtVcmw9e3VybH1cclxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kVXJsPXtwcm9wcy5pbWFnZXNbMF0uaW1nUGF0aH1cclxuICAgICAgICAgICAgd2lkdGg9ezUyMH1cclxuICAgICAgICAgICAgbWluSGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgIGJ1dHRvbVByb3BzPXt7fX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgIDwvZGl2Pn1cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjFyZW1cIiB9fSAvPlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiMXJlbVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgPEJyYW5kQnV0dG9uIGNvbG9yPXtwcm9wcy5jbGFzc0tleX0gc2l6ZT1cIm1lZGl1bVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj5cclxuICAgICAgICAgICAgPFN0eWxlZEh0bWxMaW5rIGhyZWY9e3VybH0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIHRpdGxlPXtuYW1lfT5cclxuICAgICAgICAgICAgICB7bmFtZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICA8L1N0eWxlZEh0bWxMaW5rPlxyXG4gICAgICAgICAgPC9CcmFuZEJ1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9