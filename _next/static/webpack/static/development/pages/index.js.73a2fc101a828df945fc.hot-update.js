webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/shared */ "./src/components/shared/index.ts");


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
  backgroundUrl,
  minHeight = 250,
  buttomProps = {},
  linkUrl
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
      lineNumber: 113,
      columnNumber: 10
    }
  }), __jsx("span", {
    className: classes.imageSrc,
    style: {
      backgroundImage: `url(${backgroundUrl})`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }
  }), __jsx("span", {
    className: classes.imageBackdrop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 5
    }
  }), __jsx("span", {
    className: classes.imageButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
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
      lineNumber: 132,
      columnNumber: 7
    }
  }, linkUrl ? __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_5__["NonStyledAnchor"], {
    href: linkUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, title) : {
    title
  }, __jsx("span", {
    className: classes.imageMarked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvSW1hZ2VCdXR0b24udHN4Il0sIm5hbWVzIjpbIkJPUkRFUl9SQURJT1VTIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1pbldpZHRoIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJpbWFnZSIsInBvc2l0aW9uIiwiaGVpZ2h0IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiekluZGV4Iiwib3BhY2l0eSIsImNvbG9yIiwicGFsZXR0ZSIsInNlY29uZGFyeSIsIm1haW4iLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZm9jdXNWaXNpYmxlIiwiaW1hZ2VCdXR0b24iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJjb21tb24iLCJ3aGl0ZSIsImltYWdlU3JjIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJpbWFnZUJhY2tkcm9wIiwic2hhcGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJibGFjayIsImltYWdlVGl0bGUiLCJwYWRkaW5nIiwic3BhY2luZyIsImltYWdlTWFya2VkIiwiSW1hZ2VCdXR0b24iLCJ0aXRsZSIsImJhY2tncm91bmRVcmwiLCJtaW5IZWlnaHQiLCJidXR0b21Qcm9wcyIsImxpbmtVcmwiLCJjbGFzc2VzIiwiYmFja2dyb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLGNBQWMsR0FBRyxDQUF2QjtBQUVBLE1BQU1DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBRUMsS0FBRCxJQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxNQUFJLEVBQUU7QUFDSkMsV0FBTyxFQUFFLE1B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SnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR1MsT0FBTyxHQUNKLE1BQUMsa0VBQUQ7QUFDQSxRQUFJLEVBQUVBLE9BRE47QUFFQSxVQUFNLEVBQUMsUUFGUDtBQUdBLE9BQUcsRUFBQyxxQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0NKLEtBTEQsQ0FESSxHQVFKO0FBQUVBO0FBQUYsR0FkTixFQWdCRTtBQUFNLGFBQVMsRUFBRUssT0FBTyxDQUFDUCxXQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLENBREYsQ0FsQkssQ0FBUDtBQXVDRDs7R0E3Q2VDLFc7VUFJRS9DLFM7OztLQUpGK0MsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNzNhMmZjMTAxYTgyOGRmOTQ1ZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGhlbWUsIG1ha2VTdHlsZXMsIGNyZWF0ZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEJ1dHRvbkJhc2UsIHsgQnV0dG9uQmFzZVByb3BzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2VcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IHsgTm9uU3R5bGVkQW5jaG9yIH0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZFwiO1xyXG5jb25zdCBCT1JERVJfUkFESU9VUyA9IDI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgbWluV2lkdGg6IDMwMCxcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IEJPUkRFUl9SQURJT1VTLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIGhlaWdodDogMjAwLFxyXG5cclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIiwgLy8gT3ZlcnJpZGVzIGlubGluZS1zdHlsZVxyXG4gICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICB9LFxyXG4gICAgICBcIiY6aG92ZXIsICYkZm9jdXNWaXNpYmxlXCI6IHtcclxuICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgXCImICRpbWFnZUJhY2tkcm9wXCI6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuMTUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIiYgJGltYWdlTWFya2VkXCI6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIiYgJGltYWdlVGl0bGVcIjoge1xyXG4gICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYigyNTUgMjU1IDI1NSAvIDkzJSlcIixcclxuICAgICAgICAgIGJvcmRlcjogXCIzcHggc29saWQgY3VycmVudENvbG9yXCIsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJvcGFjaXR5XCIpLFxyXG4gICAgICAgICAgLy8gZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAvLyBib3JkZXI6IFwiNHB4IHNvbGlkIHJnYmEoNDAsIDQwLCA0MCw4NCUpXCIsXHJcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBcInJnYmEoNDAsIDQwLCA0MCw4NCUpXCIsXHJcbiAgICAgICAgICAvLyBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvY3VzVmlzaWJsZToge30sXHJcbiAgICBpbWFnZUJ1dHRvbjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cclxuICAgICAgbGVmdDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgICBpbWFnZVNyYzoge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBib3R0b206IDAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogQk9SREVSX1JBRElPVVMsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgIC8vICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciA0MCVcIixcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciAwXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGltYWdlQmFja2Ryb3A6IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgICAgb3BhY2l0eTogMC40LFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJvcGFjaXR5XCIpLFxyXG4gICAgfSxcclxuICAgIGltYWdlVGl0bGU6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZygyKX1weCAke3RoZW1lLnNwYWNpbmcoNCl9cHggJHt0aGVtZS5zcGFjaW5nKDEpICtcclxuICAgICAgICA2fXB4YCxcclxuICAgIH0sXHJcbiAgICBpbWFnZU1hcmtlZDoge1xyXG4gICAgICBoZWlnaHQ6IDMsXHJcbiAgICAgIHdpZHRoOiAxOCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgYm90dG9tOiAtMixcclxuICAgICAgbGVmdDogXCJjYWxjKDUwJSAtIDlweClcIixcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwib3BhY2l0eVwiKSxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmludGVyZmFjZSBJbWFnZUJ1dHRvblByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgYmFja2dyb3VuZFVybDogc3RyaW5nO1xyXG4gIG1pbkhlaWdodD86IG51bWJlcjtcclxuICBidXR0b21Qcm9wcz86IEJ1dHRvbkJhc2VQcm9wcztcclxuICBsaW5rVXJsPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSW1hZ2VCdXR0b24oXHJcbiAgeyB0aXRsZSwgd2lkdGgsIGJhY2tncm91bmRVcmwsIG1pbkhlaWdodCA9IDI1MCwgYnV0dG9tUHJvcHMgPSB7fSwgbGlua1VybCB9OlxyXG4gICAgSW1hZ2VCdXR0b25Qcm9wcyxcclxuKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gPEJ1dHRvbkJhc2VcclxuICAgIGZvY3VzUmlwcGxlXHJcbiAgICBrZXk9e3RpdGxlfVxyXG4gICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxyXG4gICAgZm9jdXNWaXNpYmxlQ2xhc3NOYW1lPXtjbGFzc2VzLmZvY3VzVmlzaWJsZX1cclxuICAgIHN0eWxlPXt7XHJcbiAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgbWluSGVpZ2h0OiBtaW5IZWlnaHQsXHJcbiAgICB9fVxyXG4gICAgey4uLmJ1dHRvbVByb3BzfVxyXG4gID5cclxuICAgIDxzcGFuXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVNyY31cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kVXJsfSlgLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUJhY2tkcm9wfSAvPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQnV0dG9ufT5cclxuICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVRpdGxlfVxyXG4gICAgICA+XHJcbiAgICAgICAge2xpbmtVcmxcclxuICAgICAgICAgID8gPE5vblN0eWxlZEFuY2hvclxyXG4gICAgICAgICAgICBocmVmPXtsaW5rVXJsfVxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9Ob25TdHlsZWRBbmNob3I+XHJcbiAgICAgICAgICA6IHsgdGl0bGUgfX1cclxuXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlTWFya2VkfSAvPlxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9CdXR0b25CYXNlPjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9