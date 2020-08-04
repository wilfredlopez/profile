webpackHotUpdate("static\\development\\pages\\projects.js",{

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


var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\projects\\Project.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;








const TitleLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(_components_shared__WEBPACK_IMPORTED_MODULE_1__["StyledHtmlLink"]).withConfig({
  displayName: "Project__TitleLink",
  componentId: "d3i61s-0"
})(["font-size:1.2rem;color:", ";font-weight:500;"], props => props.theme.colors.secondary);
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_1__["StyledHtmlLink"], {
    className: classes.minPaddingX.concat(" " + classes.flexCenter),
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      marginBottom: "1rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx(_root_theme_Custom__WEBPACK_IMPORTED_MODULE_4__["ImageButton"], {
    title: title,
    backgroundUrl: props.images[0].imgPath,
    width: 520,
    minHeight: 500,
    buttomProps: {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }))), __jsx("div", {
    style: {
      marginBottom: "1rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx(_root_theme_Custom__WEBPACK_IMPORTED_MODULE_4__["BrandButton"], {
    color: props.classKey,
    size: "medium",
    variant: "contained",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_1__["StyledHtmlLink"], {
    href: url,
    className: "text-white",
    title: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/***/ }),

/***/ "./src/theme/ImageButton.tsx":
/*!***********************************!*\
  !*** ./src/theme/ImageButton.tsx ***!
  \***********************************/
/*! exports provided: ImageButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageButton", function() { return ImageButton; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");


var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\theme\\ImageButton.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const BORDER_RADIOUS = 2;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
    borderRadius: BORDER_RADIOUS
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important",
      // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        color: theme.palette.secondary.main,
        background: "rgb(255 255 255 / 93%)",
        border: "3px solid currentColor",
        transition: theme.transitions.create("opacity") // fontWeight: "bold",
        // border: "4px solid rgba(40, 40, 40,84%)",
        // background: "rgba(40, 40, 40,84%)",
        // borderRadius: theme.shape.borderRadius,

      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: BORDER_RADIOUS,
    backgroundSize: "cover",
    //   backgroundPosition: "center 40%",
    backgroundPosition: "center 0"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    borderRadius: theme.shape.borderRadius,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
}));
function ImageButton({
  title,
  width,
  backgroundUrl: url,
  minHeight = 250,
  buttomProps = {}
}) {
  _s();

  const classes = useStyles();
  return __jsx(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    focusRipple: true,
    key: title,
    className: classes.image,
    focusVisibleClassName: classes.focusVisible,
    style: {
      width: width,
      minHeight: minHeight
    }
  }, buttomProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 10
    }
  }), __jsx("span", {
    className: classes.imageSrc,
    style: {
      backgroundImage: `url(${url})`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }), __jsx("span", {
    className: classes.imageBackdrop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 5
    }
  }), __jsx("span", {
    className: classes.imageButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: "span",
    variant: "subtitle1",
    color: "inherit",
    className: classes.imageTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, title, __jsx("span", {
    className: classes.imageMarked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }))));
}

_s(ImageButton, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = ImageButton;

var _c;

$RefreshReg$(_c, "ImageButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvSW1hZ2VCdXR0b24udHN4Il0sIm5hbWVzIjpbIlRpdGxlTGluayIsInN0eWxlZCIsIlN0eWxlZEh0bWxMaW5rIiwicHJvcHMiLCJ0aGVtZSIsImNvbG9ycyIsInNlY29uZGFyeSIsIlByb2plY3QiLCJzaG93U2xpZGVyQ29udHJvbHMiLCJ1cmwiLCJuYW1lIiwidGl0bGUiLCJsb29wIiwiY2xhc3NlcyIsInVzZVNoYXJlZFN0eWxlcyIsInRleHRUcmFuc2Zvcm0iLCJtYXJnaW5Ub3AiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW4iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInJvb3QiLCJtaW5QYWRkaW5nWCIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwibGVuZ3RoIiwiY29uY2F0IiwiZmxleENlbnRlciIsIm1hcmdpbkJvdHRvbSIsImltZ1BhdGgiLCJwYWRkaW5nQm90dG9tIiwiY2xhc3NLZXkiLCJ0b1VwcGVyQ2FzZSIsIkJPUkRFUl9SQURJT1VTIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsImZsZXhXcmFwIiwibWluV2lkdGgiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImltYWdlIiwicG9zaXRpb24iLCJoZWlnaHQiLCJicmVha3BvaW50cyIsImRvd24iLCJ6SW5kZXgiLCJvcGFjaXR5IiwiY29sb3IiLCJwYWxldHRlIiwibWFpbiIsImJhY2tncm91bmQiLCJib3JkZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJmb2N1c1Zpc2libGUiLCJpbWFnZUJ1dHRvbiIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImNvbW1vbiIsIndoaXRlIiwiaW1hZ2VTcmMiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImltYWdlQmFja2Ryb3AiLCJzaGFwZSIsImJhY2tncm91bmRDb2xvciIsImJsYWNrIiwiaW1hZ2VUaXRsZSIsInBhZGRpbmciLCJzcGFjaW5nIiwiaW1hZ2VNYXJrZWQiLCJJbWFnZUJ1dHRvbiIsImJhY2tncm91bmRVcmwiLCJtaW5IZWlnaHQiLCJidXR0b21Qcm9wcyIsImJhY2tncm91bmRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFPLE1BQU1BLFNBQVMsR0FBR0MsaUVBQU0sQ0FBQ0MsaUVBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxxREFFVkMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsU0FGbkIsQ0FBZjtLQUFNTixTOztBQU1iLE1BQU1PLE9BQXdCLEdBQUcsVUFFNUI7QUFBQTs7QUFBQSxNQURIO0FBQUVDLHNCQUFrQixHQUFHLElBQXZCO0FBQTZCQyxPQUE3QjtBQUFrQ0MsUUFBbEM7QUFBd0NDLFNBQXhDO0FBQStDQztBQUEvQyxHQUNHO0FBQUEsTUFEcURULEtBQ3JEOztBQUNILFFBQU1VLE9BQU8sR0FBR0MsMkVBQWUsRUFBL0I7QUFDQSxTQUNFLG1FQUNFLE1BQUMsaUVBQUQ7QUFDRSxhQUFTLEVBQUMscUJBRFo7QUFFRSxTQUFLLEVBQUU7QUFBRUMsbUJBQWEsRUFBRSxXQUFqQjtBQUE4QkMsZUFBUyxFQUFFO0FBQXpDLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsU0FBRDtBQUNFLFFBQUksRUFBRVAsR0FEUjtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDLHFCQUhOO0FBSUUsU0FBSyxFQUFFQyxJQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR0EsSUFOSCxDQUpGLENBREYsRUFlRSxNQUFDLDJEQUFEO0FBQ0UsWUFBUSxFQUFDLElBRFg7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QUFBLElBakJLLEVBa0JMO0FBQU0sYUFBUyxFQUFFdkQsT0FBTyxDQUFDNkMsV0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLFdBQU8sRUFBQyxXQUZWO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFJRSxhQUFTLEVBQUU3QyxPQUFPLENBQUMyRCxVQUpyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUc3RCxLQU5ILEVBT0U7QUFBTSxhQUFTLEVBQUVFLE9BQU8sQ0FBQzhELFdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURGLENBbEJLLENBQVA7QUE4QkQ7O0dBcENlQyxXO1VBSUV6QyxTOzs7S0FKRnlDLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2plY3RzLmpzLmEzMjZiMjUwMjVlYjM4Y2E4MjUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHlsZWRIdG1sTGluayB9IGZyb20gXCJAY29tcG9uZW50cy9zaGFyZWRcIjtcclxuaW1wb3J0IFNsaWRlckNhcmQsIHsgSW1hZ2VUb1NsaWRlciB9IGZyb20gXCJAY29tcG9uZW50cy9zaGFyZWQvU2xpZGVyQ2FyZFwiO1xyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBHcmlkLFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEJyYW5kQnV0dG9uLCBJbWFnZUJ1dHRvbiB9IGZyb20gXCJAcm9vdC90aGVtZS9DdXN0b21cIjtcclxuaW1wb3J0IHVzZVNoYXJlZFN0eWxlcyBmcm9tIFwiQHJvb3QvdGhlbWUvdXNlU2hhcmVkU3R5bGVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgRGl2aWRlckVsZW1lbnQgfSBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIGltYWdlczogSW1hZ2VUb1NsaWRlcltdO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBjbGFzc0tleTogXCJ2YXBlXCIgfCBcImV4cGVuc2VcIiB8IFwic2hvcFwiO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgc2hvd1NsaWRlckNvbnRyb2xzPzogYm9vbGVhbjtcclxuICBsb29wPzogYm9vbGVhbjtcclxuICBkZXNjcmlwdGlvbjogSlNYLkVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZUxpbmsgPSBzdHlsZWQoU3R5bGVkSHRtbExpbmspYFxyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnNlY29uZGFyeX07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuYDtcclxuXHJcbmNvbnN0IFByb2plY3Q6IFJlYWN0LkZDPFByb3BzPiA9IChcclxuICB7IHNob3dTbGlkZXJDb250cm9scyA9IHRydWUsIHVybCwgbmFtZSwgdGl0bGUsIGxvb3AsIC4uLnByb3BzIH0sXHJcbikgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTaGFyZWRTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPERpdmlkZXJFbGVtZW50XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyIHByb2plY3QtdGlsZVwiXHJcbiAgICAgICAgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiwgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRpdGxlTGlua1xyXG4gICAgICAgICAgaHJlZj17dXJsfVxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgdGl0bGU9e25hbWV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge25hbWV9XHJcbiAgICAgICAgPC9UaXRsZUxpbms+XHJcbiAgICAgIDwvRGl2aWRlckVsZW1lbnQ+XHJcblxyXG4gICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgbWF4V2lkdGg9XCJzbVwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICByb290OiBjbGFzc2VzLm1pblBhZGRpbmdYLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgIHtwcm9wcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIHtwcm9wcy5pbWFnZXMubGVuZ3RoID4gMSAmJlxyXG4gICAgICAgICAgICA8U2xpZGVyQ2FyZFxyXG4gICAgICAgICAgICAgIHNob3dDb250cm9scz17c2hvd1NsaWRlckNvbnRyb2xzfVxyXG4gICAgICAgICAgICAgIGltYWdlRGF0YT17cHJvcHMuaW1hZ2VzfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17NzUwfVxyXG4gICAgICAgICAgICAgIGxvb3A9e2xvb3B9XHJcbiAgICAgICAgICAgICAgc2hvd1RpdGxlXHJcbiAgICAgICAgICAgIC8+fVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIHtwcm9wcy5pbWFnZXMubGVuZ3RoID09PSAxICYmXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxTdHlsZWRIdG1sTGlua1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWluUGFkZGluZ1guY29uY2F0KFwiIFwiICsgY2xhc3Nlcy5mbGV4Q2VudGVyKX1cclxuICAgICAgICAgICAgaHJlZj17dXJsfVxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2VCdXR0b25cclxuICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZFVybD17cHJvcHMuaW1hZ2VzWzBdLmltZ1BhdGh9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezUyMH1cclxuICAgICAgICAgICAgICBtaW5IZWlnaHQ9ezUwMH1cclxuICAgICAgICAgICAgICBidXR0b21Qcm9wcz17e319XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1N0eWxlZEh0bWxMaW5rPlxyXG4gICAgICAgIDwvZGl2Pn1cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjFyZW1cIiB9fSAvPlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiMXJlbVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgPEJyYW5kQnV0dG9uIGNvbG9yPXtwcm9wcy5jbGFzc0tleX0gc2l6ZT1cIm1lZGl1bVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj5cclxuICAgICAgICAgICAgPFN0eWxlZEh0bWxMaW5rIGhyZWY9e3VybH0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIHRpdGxlPXtuYW1lfT5cclxuICAgICAgICAgICAgICB7bmFtZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICA8L1N0eWxlZEh0bWxMaW5rPlxyXG4gICAgICAgICAgPC9CcmFuZEJ1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRoZW1lLCBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b25CYXNlLCB7IEJ1dHRvbkJhc2VQcm9wcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcblxyXG5jb25zdCBCT1JERVJfUkFESU9VUyA9IDI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgbWluV2lkdGg6IDMwMCxcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IEJPUkRFUl9SQURJT1VTLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIGhlaWdodDogMjAwLFxyXG5cclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIiwgLy8gT3ZlcnJpZGVzIGlubGluZS1zdHlsZVxyXG4gICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICB9LFxyXG4gICAgICBcIiY6aG92ZXIsICYkZm9jdXNWaXNpYmxlXCI6IHtcclxuICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgXCImICRpbWFnZUJhY2tkcm9wXCI6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuMTUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIiYgJGltYWdlTWFya2VkXCI6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIiYgJGltYWdlVGl0bGVcIjoge1xyXG4gICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYigyNTUgMjU1IDI1NSAvIDkzJSlcIixcclxuICAgICAgICAgIGJvcmRlcjogXCIzcHggc29saWQgY3VycmVudENvbG9yXCIsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJvcGFjaXR5XCIpLFxyXG4gICAgICAgICAgLy8gZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAvLyBib3JkZXI6IFwiNHB4IHNvbGlkIHJnYmEoNDAsIDQwLCA0MCw4NCUpXCIsXHJcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBcInJnYmEoNDAsIDQwLCA0MCw4NCUpXCIsXHJcbiAgICAgICAgICAvLyBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvY3VzVmlzaWJsZToge30sXHJcbiAgICBpbWFnZUJ1dHRvbjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cclxuICAgICAgbGVmdDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgICBpbWFnZVNyYzoge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBib3R0b206IDAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogQk9SREVSX1JBRElPVVMsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgIC8vICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciA0MCVcIixcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciAwXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGltYWdlQmFja2Ryb3A6IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgICAgb3BhY2l0eTogMC40LFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJvcGFjaXR5XCIpLFxyXG4gICAgfSxcclxuICAgIGltYWdlVGl0bGU6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZygyKX1weCAke3RoZW1lLnNwYWNpbmcoNCl9cHggJHt0aGVtZS5zcGFjaW5nKDEpICtcclxuICAgICAgICA2fXB4YCxcclxuICAgIH0sXHJcbiAgICBpbWFnZU1hcmtlZDoge1xyXG4gICAgICBoZWlnaHQ6IDMsXHJcbiAgICAgIHdpZHRoOiAxOCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgYm90dG9tOiAtMixcclxuICAgICAgbGVmdDogXCJjYWxjKDUwJSAtIDlweClcIixcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwib3BhY2l0eVwiKSxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmludGVyZmFjZSBJbWFnZUJ1dHRvblByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgYmFja2dyb3VuZFVybDogc3RyaW5nO1xyXG4gIG1pbkhlaWdodD86IG51bWJlcjtcclxuICBidXR0b21Qcm9wcz86IEJ1dHRvbkJhc2VQcm9wcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEltYWdlQnV0dG9uKFxyXG4gIHsgdGl0bGUsIHdpZHRoLCBiYWNrZ3JvdW5kVXJsOiB1cmwsIG1pbkhlaWdodCA9IDI1MCwgYnV0dG9tUHJvcHMgPSB7fSB9OlxyXG4gICAgSW1hZ2VCdXR0b25Qcm9wcyxcclxuKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gPEJ1dHRvbkJhc2VcclxuICAgIGZvY3VzUmlwcGxlXHJcbiAgICBrZXk9e3RpdGxlfVxyXG4gICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxyXG4gICAgZm9jdXNWaXNpYmxlQ2xhc3NOYW1lPXtjbGFzc2VzLmZvY3VzVmlzaWJsZX1cclxuICAgIHN0eWxlPXt7XHJcbiAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgbWluSGVpZ2h0OiBtaW5IZWlnaHQsXHJcbiAgICB9fVxyXG4gICAgey4uLmJ1dHRvbVByb3BzfVxyXG4gID5cclxuICAgIDxzcGFuXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVNyY31cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt1cmx9KWAsXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQmFja2Ryb3B9IC8+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCdXR0b259PlxyXG4gICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlVGl0bGV9XHJcbiAgICAgID5cclxuICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlTWFya2VkfSAvPlxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9CdXR0b25CYXNlPjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9