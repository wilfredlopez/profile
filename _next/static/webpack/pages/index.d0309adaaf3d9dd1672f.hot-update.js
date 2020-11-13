webpackHotUpdate_N_E("pages/index",{

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


var _jsxFileName = "D:\\WEB_DEV\\Personal_Projects\\wilfredlopez\\src\\theme\\ImageButton.tsx",
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
        color: theme.palette.primary.main,
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
  linkUrl,
  linkTarget = "_blank"
}) {
  _s();

  const classes = useStyles();
  const Wrapper = linkUrl ? WithLink : WithSpan;
  return __jsx(Wrapper, {
    linkTarget: linkTarget,
    linkUrl: linkUrl || "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 10
    }
  }, __jsx(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
      lineNumber: 123,
      columnNumber: 5
    }
  }), __jsx("span", {
    className: classes.imageSrc,
    style: {
      backgroundImage: `url(${backgroundUrl})`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }), __jsx("span", {
    className: classes.imageBackdrop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }), __jsx("span", {
    className: classes.imageButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: "span",
    variant: "subtitle1",
    color: "inherit",
    className: classes.imageTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, title, __jsx("span", {
    className: classes.imageMarked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  })))));
}

_s(ImageButton, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = ImageButton;

const WithLink = ({
  linkTarget,
  linkUrl,
  children
}) => {
  return __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_5__["NonStyledAnchor"], {
    href: linkUrl,
    target: linkTarget,
    rel: linkTarget === "_blank" ? "noopener noreferrer" : undefined,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 10
    }
  }, children);
};

_c2 = WithLink;

const WithSpan = ({
  children
}) => __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 171,
    columnNumber: 60
  }
}, children);

_c3 = WithSpan;

var _c, _c2, _c3;

$RefreshReg$(_c, "ImageButton");
$RefreshReg$(_c2, "WithLink");
$RefreshReg$(_c3, "WithSpan");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL0ltYWdlQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJCT1JERVJfUkFESU9VUyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJtaW5XaWR0aCIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiaW1hZ2UiLCJwb3NpdGlvbiIsImhlaWdodCIsImJyZWFrcG9pbnRzIiwiZG93biIsInpJbmRleCIsIm9wYWNpdHkiLCJjb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImJhY2tncm91bmQiLCJib3JkZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJmb2N1c1Zpc2libGUiLCJpbWFnZUJ1dHRvbiIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImNvbW1vbiIsIndoaXRlIiwiaW1hZ2VTcmMiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImltYWdlQmFja2Ryb3AiLCJzaGFwZSIsImJhY2tncm91bmRDb2xvciIsImJsYWNrIiwiaW1hZ2VUaXRsZSIsInBhZGRpbmciLCJzcGFjaW5nIiwiaW1hZ2VNYXJrZWQiLCJJbWFnZUJ1dHRvbiIsInRpdGxlIiwiYmFja2dyb3VuZFVybCIsIm1pbkhlaWdodCIsImJ1dHRvbVByb3BzIiwibGlua1VybCIsImxpbmtUYXJnZXQiLCJjbGFzc2VzIiwiV3JhcHBlciIsIldpdGhMaW5rIiwiV2l0aFNwYW4iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjaGlsZHJlbiIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxjQUFjLEdBQUcsQ0FBdkI7QUFFQSxNQUFNQyxTQUFTLEdBQUdD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T0FBTyxDQUFDZixhQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJGLEVBa0JFO0FBQU0sYUFBUyxFQUFFZSxPQUFPLENBQUMzQixXQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLGFBQVMsRUFBQyxNQURaO0FBRUUsV0FBTyxFQUFDLFdBRlY7QUFHRSxTQUFLLEVBQUMsU0FIUjtBQUlFLGFBQVMsRUFBRTJCLE9BQU8sQ0FBQ1gsVUFKckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HSyxLQU5ILEVBUUU7QUFBTSxhQUFTLEVBQUVNLE9BQU8sQ0FBQ1IsV0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREYsQ0FsQkYsQ0FESyxDQUFQO0FBaUNEOztHQS9DZUMsVztVQVdFL0MsUzs7O0tBWEYrQyxXOztBQWlEaEIsTUFBTVMsUUFBUSxHQUFHLENBQ2Y7QUFBRUgsWUFBRjtBQUFjRCxTQUFkO0FBQXVCTztBQUF2QixDQURlLEtBSVo7QUFDSCxTQUFPLE1BQUMsa0VBQUQ7QUFDTCxRQUFJLEVBQUVQLE9BREQ7QUFFTCxVQUFNLEVBQUVDLFVBRkg7QUFHTCxPQUFHLEVBQUVBLFVBQVUsS0FBSyxRQUFmLEdBQTBCLHFCQUExQixHQUFrRE8sU0FIbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtKRCxRQUxJLENBQVA7QUFPRCxDQVpEOztNQUFNSCxROztBQWNOLE1BQU1DLFFBQVEsR0FBRyxDQUFDO0FBQUVFO0FBQUYsQ0FBRCxLQUEwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ3hEQSxRQUR3RCxDQUEzRDs7TUFBTUYsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMDMwOWFkYWFmM2Q5ZGQxNjcyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgVGhlbWUsIG1ha2VTdHlsZXMsIGNyZWF0ZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIlxyXG5pbXBvcnQgQnV0dG9uQmFzZSwgeyBCdXR0b25CYXNlUHJvcHMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZVwiXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCJcclxuaW1wb3J0IHsgTm9uU3R5bGVkQW5jaG9yIH0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZFwiXHJcbmNvbnN0IEJPUkRFUl9SQURJT1VTID0gMlxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgIG1pbldpZHRoOiAzMDAsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBCT1JERVJfUkFESU9VUyxcclxuICAgIH0sXHJcbiAgICBpbWFnZToge1xyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICBoZWlnaHQ6IDIwMCxcclxuXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwieHNcIildOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJSAhaW1wb3J0YW50XCIsIC8vIE92ZXJyaWRlcyBpbmxpbmUtc3R5bGVcclxuICAgICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgfSxcclxuICAgICAgXCImOmhvdmVyLCAmJGZvY3VzVmlzaWJsZVwiOiB7XHJcbiAgICAgICAgekluZGV4OiAxLFxyXG4gICAgICAgIFwiJiAkaW1hZ2VCYWNrZHJvcFwiOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjE1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCImICRpbWFnZU1hcmtlZFwiOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCImICRpbWFnZVRpdGxlXCI6IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiKDI1NSAyNTUgMjU1IC8gOTMlKVwiLFxyXG4gICAgICAgICAgYm9yZGVyOiBcIjNweCBzb2xpZCBjdXJyZW50Q29sb3JcIixcclxuICAgICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIm9wYWNpdHlcIiksXHJcbiAgICAgICAgICAvLyBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgIC8vIGJvcmRlcjogXCI0cHggc29saWQgcmdiYSg0MCwgNDAsIDQwLDg0JSlcIixcclxuICAgICAgICAgIC8vIGJhY2tncm91bmQ6IFwicmdiYSg0MCwgNDAsIDQwLDg0JSlcIixcclxuICAgICAgICAgIC8vIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZm9jdXNWaXNpYmxlOiB7fSxcclxuICAgIGltYWdlQnV0dG9uOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBib3R0b206IDAsXHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgfSxcclxuICAgIGltYWdlU3JjOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiBCT1JERVJfUkFESU9VUyxcclxuICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgLy8gICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyIDQwJVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyIDBcIixcclxuICAgIH0sXHJcblxyXG4gICAgaW1hZ2VCYWNrZHJvcDoge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrLFxyXG4gICAgICBvcGFjaXR5OiAwLjQsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIm9wYWNpdHlcIiksXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VUaXRsZToge1xyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nKDIpfXB4ICR7dGhlbWUuc3BhY2luZyg0KX1weCAke3RoZW1lLnNwYWNpbmcoMSkgK1xyXG4gICAgICAgIDZ9cHhgLFxyXG4gICAgfSxcclxuICAgIGltYWdlTWFya2VkOiB7XHJcbiAgICAgIGhlaWdodDogMyxcclxuICAgICAgd2lkdGg6IDE4LFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBib3R0b206IC0yLFxyXG4gICAgICBsZWZ0OiBcImNhbGMoNTAlIC0gOXB4KVwiLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJvcGFjaXR5XCIpLFxyXG4gICAgfSxcclxuICB9KVxyXG4pXHJcblxyXG5pbnRlcmZhY2UgSW1hZ2VCdXR0b25Qcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZ1xyXG4gIHdpZHRoOiBudW1iZXJcclxuICBiYWNrZ3JvdW5kVXJsOiBzdHJpbmdcclxuICBtaW5IZWlnaHQ/OiBudW1iZXJcclxuICBidXR0b21Qcm9wcz86IEJ1dHRvbkJhc2VQcm9wc1xyXG4gIGxpbmtVcmw/OiBzdHJpbmdcclxuICBsaW5rVGFyZ2V0Pzogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJbWFnZUJ1dHRvbihcclxuICB7XHJcbiAgICB0aXRsZSxcclxuICAgIHdpZHRoLFxyXG4gICAgYmFja2dyb3VuZFVybCxcclxuICAgIG1pbkhlaWdodCA9IDI1MCxcclxuICAgIGJ1dHRvbVByb3BzID0ge30sXHJcbiAgICBsaW5rVXJsLFxyXG4gICAgbGlua1RhcmdldCA9IFwiX2JsYW5rXCIsXHJcbiAgfTogSW1hZ2VCdXR0b25Qcm9wcyxcclxuKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgV3JhcHBlciA9IGxpbmtVcmwgPyBXaXRoTGluayA6IFdpdGhTcGFuXHJcblxyXG4gIHJldHVybiA8V3JhcHBlciBsaW5rVGFyZ2V0PXtsaW5rVGFyZ2V0fSBsaW5rVXJsPXtsaW5rVXJsIHx8IFwiXCJ9PlxyXG4gICAgPEJ1dHRvbkJhc2VcclxuICAgICAgZm9jdXNSaXBwbGVcclxuICAgICAga2V5PXt0aXRsZX1cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxyXG4gICAgICBmb2N1c1Zpc2libGVDbGFzc05hbWU9e2NsYXNzZXMuZm9jdXNWaXNpYmxlfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICBtaW5IZWlnaHQ6IG1pbkhlaWdodCxcclxuICAgICAgfX1cclxuICAgICAgey4uLmJ1dHRvbVByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVNyY31cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZFVybH0pYCxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCYWNrZHJvcH0gLz5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQnV0dG9ufT5cclxuICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VUaXRsZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcblxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlTWFya2VkfSAvPlxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9CdXR0b25CYXNlPlxyXG4gIDwvV3JhcHBlcj5cclxufVxyXG5cclxuY29uc3QgV2l0aExpbmsgPSAoXHJcbiAgeyBsaW5rVGFyZ2V0LCBsaW5rVXJsLCBjaGlsZHJlbiB9OiBQcm9wc1dpdGhDaGlsZHJlbjxcclxuICAgIHsgbGlua1VybDogc3RyaW5nOyBsaW5rVGFyZ2V0OiBzdHJpbmcgfVxyXG4gID4sXHJcbikgPT4ge1xyXG4gIHJldHVybiA8Tm9uU3R5bGVkQW5jaG9yXHJcbiAgICBocmVmPXtsaW5rVXJsfVxyXG4gICAgdGFyZ2V0PXtsaW5rVGFyZ2V0fVxyXG4gICAgcmVsPXtsaW5rVGFyZ2V0ID09PSBcIl9ibGFua1wiID8gXCJub29wZW5lciBub3JlZmVycmVyXCIgOiB1bmRlZmluZWR9XHJcbiAgPlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvTm9uU3R5bGVkQW5jaG9yPlxyXG59XHJcblxyXG5jb25zdCBXaXRoU3BhbiA9ICh7IGNoaWxkcmVuIH06IFByb3BzV2l0aENoaWxkcmVuPHt9PikgPT4gKDxzcGFuPlxyXG4gIHtjaGlsZHJlbn1cclxuPC9zcGFuPilcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==