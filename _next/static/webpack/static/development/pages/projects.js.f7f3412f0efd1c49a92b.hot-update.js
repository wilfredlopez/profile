webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./src/styles/ImageButton.tsx":
/*!************************************!*\
  !*** ./src/styles/ImageButton.tsx ***!
  \************************************/
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


var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\styles\\ImageButton.tsx",
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
        background: theme.palette.common.white,
        border: "2px solid currentColor" // fontWeight: "bold",
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
  url,
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
      lineNumber: 110,
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
      lineNumber: 121,
      columnNumber: 5
    }
  }), __jsx("span", {
    className: classes.imageBackdrop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }), __jsx("span", {
    className: classes.imageButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
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
      lineNumber: 129,
      columnNumber: 7
    }
  }, title, __jsx("span", {
    className: classes.imageMarked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0ltYWdlQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJCT1JERVJfUkFESU9VUyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJtaW5XaWR0aCIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiaW1hZ2UiLCJwb3NpdGlvbiIsImhlaWdodCIsImJyZWFrcG9pbnRzIiwiZG93biIsInpJbmRleCIsIm9wYWNpdHkiLCJjb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiYmFja2dyb3VuZCIsImNvbW1vbiIsIndoaXRlIiwiYm9yZGVyIiwiZm9jdXNWaXNpYmxlIiwiaW1hZ2VCdXR0b24iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJpbWFnZVNyYyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiaW1hZ2VCYWNrZHJvcCIsInNoYXBlIiwiYmFja2dyb3VuZENvbG9yIiwiYmxhY2siLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJpbWFnZVRpdGxlIiwicGFkZGluZyIsInNwYWNpbmciLCJpbWFnZU1hcmtlZCIsIkltYWdlQnV0dG9uIiwidGl0bGUiLCJ1cmwiLCJtaW5IZWlnaHQiLCJidXR0b21Qcm9wcyIsImNsYXNzZXMiLCJiYWNrZ3JvdW5kSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsY0FBYyxHQUFHLENBQXZCO0FBRUEsTUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFFQyxLQUFELElBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLE1BQUksRUFBRTtBQUNKQyxXQUFPLEVBQUUsTUFETDtBQUVKQyxZQUFRLEVBQUUsTUFGTjtB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T0FBTyxDQUFDTixXQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERixDQWxCSyxDQUFQO0FBOEJEOztHQW5DZUMsVztVQUdFL0MsUzs7O0tBSEYrQyxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwcm9qZWN0cy5qcy5mN2YzNDEyZjBlZmQxYzQ5YTkyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUaGVtZSwgbWFrZVN0eWxlcywgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQnV0dG9uQmFzZSwgeyBCdXR0b25CYXNlUHJvcHMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZVwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5cclxuY29uc3QgQk9SREVSX1JBRElPVVMgPSAyO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgIG1pbldpZHRoOiAzMDAsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBCT1JERVJfUkFESU9VUyxcclxuICAgIH0sXHJcbiAgICBpbWFnZToge1xyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICBoZWlnaHQ6IDIwMCxcclxuXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwieHNcIildOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJSAhaW1wb3J0YW50XCIsIC8vIE92ZXJyaWRlcyBpbmxpbmUtc3R5bGVcclxuICAgICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgfSxcclxuICAgICAgXCImOmhvdmVyLCAmJGZvY3VzVmlzaWJsZVwiOiB7XHJcbiAgICAgICAgekluZGV4OiAxLFxyXG4gICAgICAgIFwiJiAkaW1hZ2VCYWNrZHJvcFwiOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjE1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCImICRpbWFnZU1hcmtlZFwiOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCImICRpbWFnZVRpdGxlXCI6IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIGN1cnJlbnRDb2xvclwiLFxyXG4gICAgICAgICAgLy8gZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAvLyBib3JkZXI6IFwiNHB4IHNvbGlkIHJnYmEoNDAsIDQwLCA0MCw4NCUpXCIsXHJcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBcInJnYmEoNDAsIDQwLCA0MCw4NCUpXCIsXHJcbiAgICAgICAgICAvLyBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvY3VzVmlzaWJsZToge30sXHJcbiAgICBpbWFnZUJ1dHRvbjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cclxuICAgICAgbGVmdDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgICBpbWFnZVNyYzoge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBib3R0b206IDAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogQk9SREVSX1JBRElPVVMsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgIC8vICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciA0MCVcIixcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciAwXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGltYWdlQmFja2Ryb3A6IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgICAgb3BhY2l0eTogMC40LFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJvcGFjaXR5XCIpLFxyXG4gICAgfSxcclxuICAgIGltYWdlVGl0bGU6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZygyKX1weCAke3RoZW1lLnNwYWNpbmcoNCl9cHggJHt0aGVtZS5zcGFjaW5nKDEpICtcclxuICAgICAgICA2fXB4YCxcclxuICAgIH0sXHJcbiAgICBpbWFnZU1hcmtlZDoge1xyXG4gICAgICBoZWlnaHQ6IDMsXHJcbiAgICAgIHdpZHRoOiAxOCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgYm90dG9tOiAtMixcclxuICAgICAgbGVmdDogXCJjYWxjKDUwJSAtIDlweClcIixcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwib3BhY2l0eVwiKSxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmludGVyZmFjZSBJbWFnZUJ1dHRvblByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgbWluSGVpZ2h0PzogbnVtYmVyO1xyXG4gIGJ1dHRvbVByb3BzPzogQnV0dG9uQmFzZVByb3BzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSW1hZ2VCdXR0b24oXHJcbiAgeyB0aXRsZSwgd2lkdGgsIHVybCwgbWluSGVpZ2h0ID0gMjUwLCBidXR0b21Qcm9wcyA9IHt9IH06IEltYWdlQnV0dG9uUHJvcHMsXHJcbikge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIDxCdXR0b25CYXNlXHJcbiAgICBmb2N1c1JpcHBsZVxyXG4gICAga2V5PXt0aXRsZX1cclxuICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cclxuICAgIGZvY3VzVmlzaWJsZUNsYXNzTmFtZT17Y2xhc3Nlcy5mb2N1c1Zpc2libGV9XHJcbiAgICBzdHlsZT17e1xyXG4gICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgIG1pbkhlaWdodDogbWluSGVpZ2h0LFxyXG4gICAgfX1cclxuICAgIHsuLi5idXR0b21Qcm9wc31cclxuICA+XHJcbiAgICA8c3BhblxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VTcmN9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7dXJsfSlgLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUJhY2tkcm9wfSAvPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQnV0dG9ufT5cclxuICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVRpdGxlfVxyXG4gICAgICA+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZU1hcmtlZH0gLz5cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvQnV0dG9uQmFzZT47XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==