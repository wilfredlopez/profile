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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvSW1hZ2VCdXR0b24udHN4Il0sIm5hbWVzIjpbIkJPUkRFUl9SQURJT1VTIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1pbldpZHRoIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJpbWFnZSIsInBvc2l0aW9uIiwiaGVpZ2h0IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiekluZGV4Iiwib3BhY2l0eSIsImNvbG9yIiwicGFsZXR0ZSIsInNlY29uZGFyeSIsIm1haW4iLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZm9jdXNWaXNpYmxlIiwiaW1hZ2VCdXR0b24iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJjb21tb24iLCJ3aGl0ZSIsImltYWdlU3JjIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJpbWFnZUJhY2tkcm9wIiwic2hhcGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJibGFjayIsImltYWdlVGl0bGUiLCJwYWRkaW5nIiwic3BhY2luZyIsImltYWdlTWFya2VkIiwiSW1hZ2VCdXR0b24iLCJ0aXRsZSIsImJhY2tncm91bmRVcmwiLCJtaW5IZWlnaHQiLCJidXR0b21Qcm9wcyIsImxpbmtVcmwiLCJsaW5rVGFyZ2V0IiwiY2xhc3NlcyIsIldyYXBwZXIiLCJXaXRoTGluayIsIldpdGhTcGFuIiwiYmFja2dyb3VuZEltYWdlIiwiY2hpbGRyZW4iLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsY0FBYyxHQUFHLENBQXZCO0FBRUEsTUFBTUMsU0FBUyxHQUFHQywy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QUFPLENBQUNmLGFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsRUFrQkU7QUFBTSxhQUFTLEVBQUVlLE9BQU8sQ0FBQzNCLFdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxFQUFDLE1BRFo7QUFFRSxXQUFPLEVBQUMsV0FGVjtBQUdFLFNBQUssRUFBQyxTQUhSO0FBSUUsYUFBUyxFQUFFMkIsT0FBTyxDQUFDWCxVQUpyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUdLLEtBTkgsRUFRRTtBQUFNLGFBQVMsRUFBRU0sT0FBTyxDQUFDUixXQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FERixDQWxCRixDQURLLENBQVA7QUFpQ0Q7O0dBL0NlQyxXO1VBV0UvQyxTOzs7S0FYRitDLFc7O0FBaURoQixNQUFNUyxRQUFRLEdBQUcsQ0FDZjtBQUFFSCxZQUFGO0FBQWNELFNBQWQ7QUFBdUJPO0FBQXZCLENBRGUsS0FJWjtBQUNILFNBQU8sTUFBQyxrRUFBRDtBQUNMLFFBQUksRUFBRVAsT0FERDtBQUVMLFVBQU0sRUFBRUMsVUFGSDtBQUdMLE9BQUcsRUFBRUEsVUFBVSxLQUFLLFFBQWYsR0FBMEIscUJBQTFCLEdBQWtETyxTQUhsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0pELFFBTEksQ0FBUDtBQU9ELENBWkQ7O01BQU1ILFE7O0FBY04sTUFBTUMsUUFBUSxHQUFHLENBQUM7QUFBRUU7QUFBRixDQUFELEtBQTBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDeERBLFFBRHdELENBQTNEOztNQUFNRixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy40YmJlYmE4OTdkMmY4YmJjMzUzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRoZW1lLCBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b25CYXNlLCB7IEJ1dHRvbkJhc2VQcm9wcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCB7IE5vblN0eWxlZEFuY2hvciB9IGZyb20gXCJAY29tcG9uZW50cy9zaGFyZWRcIjtcclxuY29uc3QgQk9SREVSX1JBRElPVVMgPSAyO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgIG1pbldpZHRoOiAzMDAsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBCT1JERVJfUkFESU9VUyxcclxuICAgIH0sXHJcbiAgICBpbWFnZToge1xyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICBoZWlnaHQ6IDIwMCxcclxuXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwieHNcIildOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJSAhaW1wb3J0YW50XCIsIC8vIE92ZXJyaWRlcyBpbmxpbmUtc3R5bGVcclxuICAgICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgfSxcclxuICAgICAgXCImOmhvdmVyLCAmJGZvY3VzVmlzaWJsZVwiOiB7XHJcbiAgICAgICAgekluZGV4OiAxLFxyXG4gICAgICAgIFwiJiAkaW1hZ2VCYWNrZHJvcFwiOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjE1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCImICRpbWFnZU1hcmtlZFwiOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCImICRpbWFnZVRpdGxlXCI6IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2IoMjU1IDI1NSAyNTUgLyA5MyUpXCIsXHJcbiAgICAgICAgICBib3JkZXI6IFwiM3B4IHNvbGlkIGN1cnJlbnRDb2xvclwiLFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwib3BhY2l0eVwiKSxcclxuICAgICAgICAgIC8vIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgLy8gYm9yZGVyOiBcIjRweCBzb2xpZCByZ2JhKDQwLCA0MCwgNDAsODQlKVwiLFxyXG4gICAgICAgICAgLy8gYmFja2dyb3VuZDogXCJyZ2JhKDQwLCA0MCwgNDAsODQlKVwiLFxyXG4gICAgICAgICAgLy8gYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBmb2N1c1Zpc2libGU6IHt9LFxyXG4gICAgaW1hZ2VCdXR0b246IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VTcmM6IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IEJPUkRFUl9SQURJT1VTLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAvLyAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXIgNDAlXCIsXHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXIgMFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBpbWFnZUJhY2tkcm9wOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBib3R0b206IDAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICAgIG9wYWNpdHk6IDAuNCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwib3BhY2l0eVwiKSxcclxuICAgIH0sXHJcbiAgICBpbWFnZVRpdGxlOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcoMil9cHggJHt0aGVtZS5zcGFjaW5nKDQpfXB4ICR7dGhlbWUuc3BhY2luZygxKSArXHJcbiAgICAgICAgNn1weGAsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VNYXJrZWQ6IHtcclxuICAgICAgaGVpZ2h0OiAzLFxyXG4gICAgICB3aWR0aDogMTgsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGJvdHRvbTogLTIsXHJcbiAgICAgIGxlZnQ6IFwiY2FsYyg1MCUgLSA5cHgpXCIsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIm9wYWNpdHlcIiksXHJcbiAgICB9LFxyXG4gIH0pXHJcbik7XHJcblxyXG5pbnRlcmZhY2UgSW1hZ2VCdXR0b25Qcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGJhY2tncm91bmRVcmw6IHN0cmluZztcclxuICBtaW5IZWlnaHQ/OiBudW1iZXI7XHJcbiAgYnV0dG9tUHJvcHM/OiBCdXR0b25CYXNlUHJvcHM7XHJcbiAgbGlua1VybD86IHN0cmluZztcclxuICBsaW5rVGFyZ2V0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSW1hZ2VCdXR0b24oXHJcbiAge1xyXG4gICAgdGl0bGUsXHJcbiAgICB3aWR0aCxcclxuICAgIGJhY2tncm91bmRVcmwsXHJcbiAgICBtaW5IZWlnaHQgPSAyNTAsXHJcbiAgICBidXR0b21Qcm9wcyA9IHt9LFxyXG4gICAgbGlua1VybCxcclxuICAgIGxpbmtUYXJnZXQgPSBcIl9ibGFua1wiLFxyXG4gIH06IEltYWdlQnV0dG9uUHJvcHMsXHJcbikge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBXcmFwcGVyID0gbGlua1VybCA/IFdpdGhMaW5rIDogV2l0aFNwYW47XHJcblxyXG4gIHJldHVybiA8V3JhcHBlciBsaW5rVGFyZ2V0PXtsaW5rVGFyZ2V0fSBsaW5rVXJsPXtsaW5rVXJsIHx8IFwiXCJ9PlxyXG4gICAgPEJ1dHRvbkJhc2VcclxuICAgICAgZm9jdXNSaXBwbGVcclxuICAgICAga2V5PXt0aXRsZX1cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxyXG4gICAgICBmb2N1c1Zpc2libGVDbGFzc05hbWU9e2NsYXNzZXMuZm9jdXNWaXNpYmxlfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICBtaW5IZWlnaHQ6IG1pbkhlaWdodCxcclxuICAgICAgfX1cclxuICAgICAgey4uLmJ1dHRvbVByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVNyY31cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZFVybH0pYCxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCYWNrZHJvcH0gLz5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQnV0dG9ufT5cclxuICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VUaXRsZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcblxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlTWFya2VkfSAvPlxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9CdXR0b25CYXNlPlxyXG4gIDwvV3JhcHBlcj47XHJcbn1cclxuXHJcbmNvbnN0IFdpdGhMaW5rID0gKFxyXG4gIHsgbGlua1RhcmdldCwgbGlua1VybCwgY2hpbGRyZW4gfTogUHJvcHNXaXRoQ2hpbGRyZW48XHJcbiAgICB7IGxpbmtVcmw6IHN0cmluZzsgbGlua1RhcmdldDogc3RyaW5nIH1cclxuICA+LFxyXG4pID0+IHtcclxuICByZXR1cm4gPE5vblN0eWxlZEFuY2hvclxyXG4gICAgaHJlZj17bGlua1VybH1cclxuICAgIHRhcmdldD17bGlua1RhcmdldH1cclxuICAgIHJlbD17bGlua1RhcmdldCA9PT0gXCJfYmxhbmtcIiA/IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiIDogdW5kZWZpbmVkfVxyXG4gID5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L05vblN0eWxlZEFuY2hvcj47XHJcbn07XHJcblxyXG5jb25zdCBXaXRoU3BhbiA9ICh7IGNoaWxkcmVuIH06IFByb3BzV2l0aENoaWxkcmVuPHt9PikgPT4gKDxzcGFuPlxyXG4gIHtjaGlsZHJlbn1cclxuPC9zcGFuPik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=