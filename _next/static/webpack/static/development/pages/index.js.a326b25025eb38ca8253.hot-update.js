webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/home/HomeProjectGrid.tsx":
/*!*************************************************!*\
  !*** ./src/components/home/HomeProjectGrid.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/shared */ "./src/components/shared/index.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _root_theme_Custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @root/theme/Custom */ "./src/theme/Custom.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _projects_ProjectsArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects/ProjectsArray */ "./src/components/projects/ProjectsArray.ts");
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\home\\HomeProjectGrid.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






// const PArray = ProjectsArray.slice(0, 2);
const HomeProjectGrid = ({
  limit
}) => {
  const PArray = limit ? _projects_ProjectsArray__WEBPACK_IMPORTED_MODULE_4__["default"].slice(0, limit) : _projects_ProjectsArray__WEBPACK_IMPORTED_MODULE_4__["default"];
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    py: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    alignContent: "center",
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, PArray.map((proj, index) => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      key: `project-grid-${proj.name}-${index}`,
      item: true,
      xs: 12,
      sm: "auto",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 18
      }
    }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_0__["DividerElement"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, proj.name), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      mb: 1,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }), __jsx(_root_theme_Custom__WEBPACK_IMPORTED_MODULE_2__["ImageButton"], {
      title: proj.title,
      backgroundUrl: proj.images[0].imgPath,
      width: 500,
      minHeight: 700,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }));
  })));
};

_c = HomeProjectGrid;
/* harmony default export */ __webpack_exports__["default"] = (HomeProjectGrid);

var _c;

$RefreshReg$(_c, "HomeProjectGrid");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL0hvbWVQcm9qZWN0R3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lL0ltYWdlQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJIb21lUHJvamVjdEdyaWQiLCJsaW1pdCIsIlBBcnJheSIsIlByb2plY3RzQXJyYXkiLCJzbGljZSIsIm1hcCIsInByb2oiLCJpbmRleCIsIm5hbWUiLCJ0aXRsZSIsImltYWdlcyIsImltZ1BhdGgiLCJCT1JERVJfUkFESU9VUyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJtaW5XaWR0aCIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiaW1hZ2UiLCJwb3NpdGlvbiIsImhlaWdodCIsImJyZWFrcG9pbnRzIiwiZG93biIsInpJbmRleCIsIm9wYWNpdHkiLCJjb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiYmFja2dyb3VuZCIsImJvcmRlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImZvY3VzVmlzaWJsZSIsImltYWdlQnV0dG9uIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiY29tbW9uIiwid2hpdGUiLCJpbWFnZVNyYyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiaW1hZ2VCYWNrZHJvcCIsInNoYXBlIiwiYmFja2dyb3VuZENvbG9yIiwiYmxhY2siLCJpbWFnZVRpdGxlIiwicGFkZGluZyIsInNwYWNpbmciLCJpbWFnZU1hcmtlZCIsIkltYWdlQnV0dG9uIiwiYmFja2dyb3VuZFVybCIsInVybCIsIm1pbkhlaWdodCIsImJ1dHRvbVByb3BzIiwiY2xhc3NlcyIsImJhY2tncm91bmRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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Q0xpQixxQkFBZSxFQUFHLE9BQU1KLEdBQUk7QUFEdkIsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEssRUFpQkw7QUFBTSxhQUFTLEVBQUVHLE9BQU8sQ0FBQ2IsYUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCSyxFQWtCTDtBQUFNLGFBQVMsRUFBRWEsT0FBTyxDQUFDekIsV0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLFdBQU8sRUFBQyxXQUZWO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFJRSxhQUFTLEVBQUV5QixPQUFPLENBQUNULFVBSnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRy9DLEtBTkgsRUFPRTtBQUFNLGFBQVMsRUFBRXdELE9BQU8sQ0FBQ04sV0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBREYsQ0FsQkssQ0FBUDtBQThCRDs7R0FwQ2VDLFc7VUFJRS9DLFM7OztLQUpGK0MsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYTMyNmIyNTAyNWViMzhjYTgyNTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpdmlkZXJFbGVtZW50IH0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBCb3gsIEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgSW1hZ2VCdXR0b24gfSBmcm9tIFwiQHJvb3QvdGhlbWUvQ3VzdG9tXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2plY3RzQXJyYXkgZnJvbSBcIi4uL3Byb2plY3RzL1Byb2plY3RzQXJyYXlcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgbGltaXQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8vIGNvbnN0IFBBcnJheSA9IFByb2plY3RzQXJyYXkuc2xpY2UoMCwgMik7XHJcblxyXG5jb25zdCBIb21lUHJvamVjdEdyaWQgPSAoeyBsaW1pdCB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFBBcnJheSA9IGxpbWl0ID8gUHJvamVjdHNBcnJheS5zbGljZSgwLCBsaW1pdCkgOiBQcm9qZWN0c0FycmF5O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHB5PXsyfT5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGFsaWduQ29udGVudD1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICB7UEFycmF5Lm1hcCgocHJvaiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8R3JpZFxyXG4gICAgICAgICAgICBrZXk9e2Bwcm9qZWN0LWdyaWQtJHtwcm9qLm5hbWV9LSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgIHNtPVwiYXV0b1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyRWxlbWVudD5cclxuICAgICAgICAgICAgICB7cHJvai5uYW1lfVxyXG4gICAgICAgICAgICA8L0RpdmlkZXJFbGVtZW50PlxyXG4gICAgICAgICAgICA8Qm94IG1iPXsxfSAvPlxyXG4gICAgICAgICAgICA8SW1hZ2VCdXR0b25cclxuICAgICAgICAgICAgICB0aXRsZT17cHJvai50aXRsZX1cclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kVXJsPXtwcm9qLmltYWdlc1swXS5pbWdQYXRofVxyXG4gICAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgbWluSGVpZ2h0PXs3MDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVByb2plY3RHcmlkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRoZW1lLCBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b25CYXNlLCB7IEJ1dHRvbkJhc2VQcm9wcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcblxyXG5jb25zdCBCT1JERVJfUkFESU9VUyA9IDI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgbWluV2lkdGg6IDMwMCxcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IEJPUkRFUl9SQURJT1VTLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIGhlaWdodDogMjAwLFxyXG5cclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIiwgLy8gT3ZlcnJpZGVzIGlubGluZS1zdHlsZVxyXG4gICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICB9LFxyXG4gICAgICBcIiY6aG92ZXIsICYkZm9jdXNWaXNpYmxlXCI6IHtcclxuICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgXCImICRpbWFnZUJhY2tkcm9wXCI6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuMTUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIiYgJGltYWdlTWFya2VkXCI6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIiYgJGltYWdlVGl0bGVcIjoge1xyXG4gICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYigyNTUgMjU1IDI1NSAvIDkzJSlcIixcclxuICAgICAgICAgIGJvcmRlcjogXCIzcHggc29saWQgY3VycmVudENvbG9yXCIsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJvcGFjaXR5XCIpLFxyXG4gICAgICAgICAgLy8gZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAvLyBib3JkZXI6IFwiNHB4IHNvbGlkIHJnYmEoNDAsIDQwLCA0MCw4NCUpXCIsXHJcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBcInJnYmEoNDAsIDQwLCA0MCw4NCUpXCIsXHJcbiAgICAgICAgICAvLyBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvY3VzVmlzaWJsZToge30sXHJcbiAgICBpbWFnZUJ1dHRvbjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cclxuICAgICAgbGVmdDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgICBpbWFnZVNyYzoge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBib3R0b206IDAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogQk9SREVSX1JBRElPVVMsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgIC8vICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciA0MCVcIixcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciAwXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGltYWdlQmFja2Ryb3A6IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgICAgb3BhY2l0eTogMC40LFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJvcGFjaXR5XCIpLFxyXG4gICAgfSxcclxuICAgIGltYWdlVGl0bGU6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZygyKX1weCAke3RoZW1lLnNwYWNpbmcoNCl9cHggJHt0aGVtZS5zcGFjaW5nKDEpICtcclxuICAgICAgICA2fXB4YCxcclxuICAgIH0sXHJcbiAgICBpbWFnZU1hcmtlZDoge1xyXG4gICAgICBoZWlnaHQ6IDMsXHJcbiAgICAgIHdpZHRoOiAxOCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgYm90dG9tOiAtMixcclxuICAgICAgbGVmdDogXCJjYWxjKDUwJSAtIDlweClcIixcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwib3BhY2l0eVwiKSxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmludGVyZmFjZSBJbWFnZUJ1dHRvblByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgYmFja2dyb3VuZFVybDogc3RyaW5nO1xyXG4gIG1pbkhlaWdodD86IG51bWJlcjtcclxuICBidXR0b21Qcm9wcz86IEJ1dHRvbkJhc2VQcm9wcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEltYWdlQnV0dG9uKFxyXG4gIHsgdGl0bGUsIHdpZHRoLCBiYWNrZ3JvdW5kVXJsOiB1cmwsIG1pbkhlaWdodCA9IDI1MCwgYnV0dG9tUHJvcHMgPSB7fSB9OlxyXG4gICAgSW1hZ2VCdXR0b25Qcm9wcyxcclxuKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gPEJ1dHRvbkJhc2VcclxuICAgIGZvY3VzUmlwcGxlXHJcbiAgICBrZXk9e3RpdGxlfVxyXG4gICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxyXG4gICAgZm9jdXNWaXNpYmxlQ2xhc3NOYW1lPXtjbGFzc2VzLmZvY3VzVmlzaWJsZX1cclxuICAgIHN0eWxlPXt7XHJcbiAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgbWluSGVpZ2h0OiBtaW5IZWlnaHQsXHJcbiAgICB9fVxyXG4gICAgey4uLmJ1dHRvbVByb3BzfVxyXG4gID5cclxuICAgIDxzcGFuXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVNyY31cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt1cmx9KWAsXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQmFja2Ryb3B9IC8+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCdXR0b259PlxyXG4gICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlVGl0bGV9XHJcbiAgICAgID5cclxuICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlTWFya2VkfSAvPlxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9CdXR0b25CYXNlPjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9