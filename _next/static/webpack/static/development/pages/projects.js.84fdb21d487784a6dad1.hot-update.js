webpackHotUpdate("static\\development\\pages\\projects.js",{

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
  backgroundUrl,
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
      backgroundImage: `url(${backgroundUrl})`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvSW1hZ2VCdXR0b24udHN4Il0sIm5hbWVzIjpbIkJPUkRFUl9SQURJT1VTIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1pbldpZHRoIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJpbWFnZSIsInBvc2l0aW9uIiwiaGVpZ2h0IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiekluZGV4Iiwib3BhY2l0eSIsImNvbG9yIiwicGFsZXR0ZSIsInNlY29uZGFyeSIsIm1haW4iLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZm9jdXNWaXNpYmxlIiwiaW1hZ2VCdXR0b24iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJjb21tb24iLCJ3aGl0ZSIsImltYWdlU3JjIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJpbWFnZUJhY2tkcm9wIiwic2hhcGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJibGFjayIsImltYWdlVGl0bGUiLCJwYWRkaW5nIiwic3BhY2luZyIsImltYWdlTWFya2VkIiwiSW1hZ2VCdXR0b24iLCJ0aXRsZSIsImJhY2tncm91bmRVcmwiLCJtaW5IZWlnaHQiLCJidXR0b21Qcm9wcyIsImNsYXNzZXMiLCJiYWNrZ3JvdW5kSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsY0FBYyxHQUFHLENBQXZCO0FBRUEsTUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFFQyxLQUFELElBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLE1BQUksRUFBRTtBQUNKQyxXQUFPLEVBQUUsTUFETDtBQUVKQyxZQUFRLEVB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QUFBQTtBQUFBLEtBTUdLLEtBTkgsRUFPRTtBQUFNLGFBQVMsRUFBRUksT0FBTyxDQUFDTixXQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERixDQWxCSyxDQUFQO0FBOEJEOztHQXBDZUMsVztVQUlFL0MsUzs7O0tBSkYrQyxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwcm9qZWN0cy5qcy44NGZkYjIxZDQ4Nzc4NGE2ZGFkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUaGVtZSwgbWFrZVN0eWxlcywgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQnV0dG9uQmFzZSwgeyBCdXR0b25CYXNlUHJvcHMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZVwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5cclxuY29uc3QgQk9SREVSX1JBRElPVVMgPSAyO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgIG1pbldpZHRoOiAzMDAsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBCT1JERVJfUkFESU9VUyxcclxuICAgIH0sXHJcbiAgICBpbWFnZToge1xyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICBoZWlnaHQ6IDIwMCxcclxuXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwieHNcIildOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJSAhaW1wb3J0YW50XCIsIC8vIE92ZXJyaWRlcyBpbmxpbmUtc3R5bGVcclxuICAgICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgfSxcclxuICAgICAgXCImOmhvdmVyLCAmJGZvY3VzVmlzaWJsZVwiOiB7XHJcbiAgICAgICAgekluZGV4OiAxLFxyXG4gICAgICAgIFwiJiAkaW1hZ2VCYWNrZHJvcFwiOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjE1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCImICRpbWFnZU1hcmtlZFwiOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCImICRpbWFnZVRpdGxlXCI6IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2IoMjU1IDI1NSAyNTUgLyA5MyUpXCIsXHJcbiAgICAgICAgICBib3JkZXI6IFwiM3B4IHNvbGlkIGN1cnJlbnRDb2xvclwiLFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwib3BhY2l0eVwiKSxcclxuICAgICAgICAgIC8vIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgLy8gYm9yZGVyOiBcIjRweCBzb2xpZCByZ2JhKDQwLCA0MCwgNDAsODQlKVwiLFxyXG4gICAgICAgICAgLy8gYmFja2dyb3VuZDogXCJyZ2JhKDQwLCA0MCwgNDAsODQlKVwiLFxyXG4gICAgICAgICAgLy8gYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBmb2N1c1Zpc2libGU6IHt9LFxyXG4gICAgaW1hZ2VCdXR0b246IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VTcmM6IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IEJPUkRFUl9SQURJT1VTLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAvLyAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXIgNDAlXCIsXHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXIgMFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBpbWFnZUJhY2tkcm9wOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBib3R0b206IDAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICAgIG9wYWNpdHk6IDAuNCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwib3BhY2l0eVwiKSxcclxuICAgIH0sXHJcbiAgICBpbWFnZVRpdGxlOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcoMil9cHggJHt0aGVtZS5zcGFjaW5nKDQpfXB4ICR7dGhlbWUuc3BhY2luZygxKSArXHJcbiAgICAgICAgNn1weGAsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VNYXJrZWQ6IHtcclxuICAgICAgaGVpZ2h0OiAzLFxyXG4gICAgICB3aWR0aDogMTgsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGJvdHRvbTogLTIsXHJcbiAgICAgIGxlZnQ6IFwiY2FsYyg1MCUgLSA5cHgpXCIsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIm9wYWNpdHlcIiksXHJcbiAgICB9LFxyXG4gIH0pXHJcbik7XHJcblxyXG5pbnRlcmZhY2UgSW1hZ2VCdXR0b25Qcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGJhY2tncm91bmRVcmw6IHN0cmluZztcclxuICBtaW5IZWlnaHQ/OiBudW1iZXI7XHJcbiAgYnV0dG9tUHJvcHM/OiBCdXR0b25CYXNlUHJvcHM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJbWFnZUJ1dHRvbihcclxuICB7IHRpdGxlLCB3aWR0aCwgYmFja2dyb3VuZFVybCwgbWluSGVpZ2h0ID0gMjUwLCBidXR0b21Qcm9wcyA9IHt9IH06XHJcbiAgICBJbWFnZUJ1dHRvblByb3BzLFxyXG4pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiA8QnV0dG9uQmFzZVxyXG4gICAgZm9jdXNSaXBwbGVcclxuICAgIGtleT17dGl0bGV9XHJcbiAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9XHJcbiAgICBmb2N1c1Zpc2libGVDbGFzc05hbWU9e2NsYXNzZXMuZm9jdXNWaXNpYmxlfVxyXG4gICAgc3R5bGU9e3tcclxuICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICBtaW5IZWlnaHQ6IG1pbkhlaWdodCxcclxuICAgIH19XHJcbiAgICB7Li4uYnV0dG9tUHJvcHN9XHJcbiAgPlxyXG4gICAgPHNwYW5cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlU3JjfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmRVcmx9KWAsXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQmFja2Ryb3B9IC8+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCdXR0b259PlxyXG4gICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlVGl0bGV9XHJcbiAgICAgID5cclxuICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlTWFya2VkfSAvPlxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9CdXR0b25CYXNlPjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9