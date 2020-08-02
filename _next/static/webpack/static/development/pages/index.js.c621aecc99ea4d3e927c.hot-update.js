webpackHotUpdate("static\\development\\pages\\index.js",{

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
        // border: "4px solid currentColor",
        border: "4px solid rgba(40, 40, 40,84%)",
        background: "rgba(40, 40, 40,84%)"
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
      lineNumber: 106,
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
      lineNumber: 117,
      columnNumber: 5
    }
  }), __jsx("span", {
    className: classes.imageBackdrop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }), __jsx("span", {
    className: classes.imageButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
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
      lineNumber: 125,
      columnNumber: 7
    }
  }, title, __jsx("span", {
    className: classes.imageMarked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0ltYWdlQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJCT1JERVJfUkFESU9VUyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJtaW5XaWR0aCIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiaW1hZ2UiLCJwb3NpdGlvbiIsImhlaWdodCIsImJyZWFrcG9pbnRzIiwiZG93biIsInpJbmRleCIsIm9wYWNpdHkiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiZm9jdXNWaXNpYmxlIiwiaW1hZ2VCdXR0b24iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJ3aGl0ZSIsImltYWdlU3JjIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJpbWFnZUJhY2tkcm9wIiwic2hhcGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJibGFjayIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImltYWdlVGl0bGUiLCJwYWRkaW5nIiwic3BhY2luZyIsImltYWdlTWFya2VkIiwiSW1hZ2VCdXR0b24iLCJ0aXRsZSIsInVybCIsIm1pbkhlaWdodCIsImJ1dHRvbVByb3BzIiwiY2xhc3NlcyIsImJhY2tncm91bmRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxjQUFjLEdBQUcsQ0FBdkI7QUFFQSxNQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUVDLEtBQUQsSUFDM0JDLDZFQUFZLENBQUM7QUFDWEMsTUFBSSxFQUFFO0FBQ0pDLFdBQU8sRUFBRSxNQURMO0FBRUpDLFlBQVEsRUFBRSxNQUZOO0FBR0pDLFlBQVEsRUFBRSxHQUhOO0FBSUpDLFNBQUssRUFBRSxNQUpIO0FBS0pDLGdCQUFZLEVBQUVWO0FBTFYsR0FESztBQVFYVyxPQUFLLEVBQUU7QUFDTEMsWUFBUSxFQUFFLFVBREw7QUFFTEMsVUFBTSxFQUFFLEdBRkg7QUFJTCxLQUFDVixLQUFLLENBQUNXLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQUQsR0FBZ0M7QUFDOUJOLFdBQUssRUFBRSxpQkFEdUI7QUFDSjtBQUMxQkksWUFBTSxFQUFFO0FBRnNCLEtBSjNCO0FBUUwsK0JBQTJCO0FBQ3pCRyxZQUFNLEVBQUUsQ0FEaUI7QUFFekIsMEJBQW9CO0FBQ2xCQyxlQUFPLEVBQUU7QUFEUyxPQUZLO0FBS3pCLHdCQUFrQjtBQUNoQkEsZUFBTyxFQUFFO0FBRE8sT0FMTztBQVF6Qix1QkFBaUI7QUFDZjtBQUNBQyxjQUFNLEVBQUUsZ0NBRk87QUFHZkMsa0JBQVUsRUFBRTtBQUhHO0FBUlE7QUFSdEIsR0FSSTtBQStCWEMsY0FBWSxFQUFFLEVBL0JIO0FBZ0NYQyxhQUFXLEVBQUU7QUFDWFQsWUFBUSxFQUFFLFVBREM7QUFHWFUsUUFBSSxFQUFFLENBSEs7QUFJWEMsU0FBSyxFQUFFLENBSkk7QUFLWEMsT0FBRyxFQUFFLENBTE07QUFNWEMsVUFBTSxFQUFFLENBTkc7QUFPWG5CLFdBQU8sRUFBRSxNQVBFO0FBUVhvQixjQUFVLEVBQUUsUUFSRDtBQVNYQyxrQkFBYyxFQUFFLFFBVEw7QUFVWEMsU0FBSyxFQUFFekIsS0FBSyxDQUFDMEIsT0FBTixDQUFjQyxNQUFkLENBQXFCQztBQVZqQixHQWhDRjtBQTRDWEMsVUFBUSxFQUFFO0FBQ1JwQixZQUFRLEVBQUUsVUFERjtBQUVSVSxRQUFJLEVBQUUsQ0FGRTtBQUdSQyxTQUFLLEVBQUUsQ0FIQztBQUlSQyxPQUFHLEVBQUUsQ0FKRztBQUtSQyxVQUFNLEVBQUUsQ0FMQTtBQU1SZixnQkFBWSxFQUFFVixjQU5OO0FBT1JpQyxrQkFBYyxFQUFFLE9BUFI7QUFRUjtBQUNBQyxzQkFBa0IsRUFBRTtBQVRaLEdBNUNDO0FBd0RYQyxlQUFhLEVBQUU7QUFDYnZCLFlBQVEsRUFBRSxVQURHO0FBRWJVLFFBQUksRUFBRSxDQUZPO0FBR2JaLGdCQUFZLEVBQUVQLEtBQUssQ0FBQ2lDLEtBQU4sQ0FBWTFCLFlBSGI7QUFJYmEsU0FBSyxFQUFFLENBSk07QUFLYkMsT0FBRyxFQUFFLENBTFE7QUFNYkMsVUFBTSxFQUFFLENBTks7QUFPYlksbUJBQWUsRUFBRWxDLEtBQUssQ0FBQzBCLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQlEsS0FQekI7QUFRYnJCLFdBQU8sRUFBRSxHQVJJO0FBU2JzQixjQUFVLEVBQUVwQyxLQUFLLENBQUNxQyxXQUFOLENBQWtCQyxNQUFsQixDQUF5QixTQUF6QjtBQVRDLEdBeERKO0FBbUVYQyxZQUFVLEVBQUU7QUFDVjlCLFlBQVEsRUFBRSxVQURBO0FBRVYrQixXQUFPLEVBQUcsR0FBRXhDLEtBQUssQ0FBQ3lDLE9BQU4sQ0FBYyxDQUFkLENBQWlCLE1BQUt6QyxLQUFLLENBQUN5QyxPQUFOLENBQWMsQ0FBZCxDQUFpQixNQUFLekMsS0FBSyxDQUFDeUMsT0FBTixDQUFjLENBQWQsSUFDdEQsQ0FBRTtBQUhNLEdBbkVEO0FBd0VYQyxhQUFXLEVBQUU7QUFDWGhDLFVBQU0sRUFBRSxDQURHO0FBRVhKLFNBQUssRUFBRSxFQUZJO0FBR1g0QixtQkFBZSxFQUFFbEMsS0FBSyxDQUFDMEIsT0FBTixDQUFjQyxNQUFkLENBQXFCQyxLQUgzQjtBQUlYbkIsWUFBUSxFQUFFLFVBSkM7QUFLWGEsVUFBTSxFQUFFLENBQUMsQ0FMRTtBQU1YSCxRQUFJLEVBQUUsaUJBTks7QUFPWGlCLGNBQVUsRUFBRXBDLEtBQUssQ0FBQ3FDLFdBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLFNBQXpCO0FBUEQ7QUF4RUYsQ0FBRCxDQURjLENBQTVCO0FBNkZPLFNBQVNLLFdBQVQsQ0FDTDtBQUFFQyxPQUFGO0FBQVN0QyxPQUFUO0FBQWdCdUMsS0FBaEI7QUFBcUJDLFdBQVMsR0FBRyxHQUFqQztBQUFzQ0MsYUFBVyxHQUFHO0FBQXBELENBREssRUFFTDtBQUFBOztBQUNBLFFBQU1DLE9BQU8sR0FBR2xELFNBQVMsRUFBekI7QUFFQSxTQUFPLE1BQUMsb0VBQUQ7QUFDTCxlQUFXLE1BRE47QUFFTCxPQUFHLEVBQUU4QyxLQUZBO0FBR0wsYUFBUyxFQUFFSSxPQUFPLENBQUN4QyxLQUhkO0FBSUwseUJBQXFCLEVBQUV3QyxPQUFPLENBQUMvQixZQUoxQjtBQUtMLFNBQUssRUFBRTtBQUNMWCxXQUFLLEVBQUVBLEtBREY7QUFFTHdDLGVBQVMsRUFBRUE7QUFGTjtBQUxGLEtBU0RDLFdBVEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVdMO0FBQ0UsYUFBUyxFQUFFQyxPQUFPLENBQUNuQixRQURyQjtBQUVFLFNBQUssRUFBRTtBQUNMb0IscUJBQWUsRUFBRyxPQUFNSixHQUFJO0FBRHZCLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhLLEVBaUJMO0FBQU0sYUFBUyxFQUFFRyxPQUFPLENBQUNoQixhQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJLLEVBa0JMO0FBQU0sYUFBUyxFQUFFZ0IsT0FBTyxDQUFDOUIsV0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLFdBQU8sRUFBQyxXQUZWO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFJRSxhQUFTLEVBQUU4QixPQUFPLENBQUNULFVBSnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR0ssS0FOSCxFQU9FO0FBQU0sYUFBUyxFQUFFSSxPQUFPLENBQUNOLFdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURGLENBbEJLLENBQVA7QUE4QkQ7O0dBbkNlQyxXO1VBR0U3QyxTOzs7S0FIRjZDLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmM2MjFhZWNjOTllYTRkM2U5MjdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRoZW1lLCBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b25CYXNlLCB7IEJ1dHRvbkJhc2VQcm9wcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcblxyXG5jb25zdCBCT1JERVJfUkFESU9VUyA9IDI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgbWluV2lkdGg6IDMwMCxcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IEJPUkRFUl9SQURJT1VTLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIGhlaWdodDogMjAwLFxyXG5cclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIiwgLy8gT3ZlcnJpZGVzIGlubGluZS1zdHlsZVxyXG4gICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICB9LFxyXG4gICAgICBcIiY6aG92ZXIsICYkZm9jdXNWaXNpYmxlXCI6IHtcclxuICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgXCImICRpbWFnZUJhY2tkcm9wXCI6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuMTUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIiYgJGltYWdlTWFya2VkXCI6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIiYgJGltYWdlVGl0bGVcIjoge1xyXG4gICAgICAgICAgLy8gYm9yZGVyOiBcIjRweCBzb2xpZCBjdXJyZW50Q29sb3JcIixcclxuICAgICAgICAgIGJvcmRlcjogXCI0cHggc29saWQgcmdiYSg0MCwgNDAsIDQwLDg0JSlcIixcclxuICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSg0MCwgNDAsIDQwLDg0JSlcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvY3VzVmlzaWJsZToge30sXHJcbiAgICBpbWFnZUJ1dHRvbjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cclxuICAgICAgbGVmdDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgICBpbWFnZVNyYzoge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBib3R0b206IDAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogQk9SREVSX1JBRElPVVMsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgIC8vICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciA0MCVcIixcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciAwXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGltYWdlQmFja2Ryb3A6IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgICAgb3BhY2l0eTogMC40LFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJvcGFjaXR5XCIpLFxyXG4gICAgfSxcclxuICAgIGltYWdlVGl0bGU6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZygyKX1weCAke3RoZW1lLnNwYWNpbmcoNCl9cHggJHt0aGVtZS5zcGFjaW5nKDEpICtcclxuICAgICAgICA2fXB4YCxcclxuICAgIH0sXHJcbiAgICBpbWFnZU1hcmtlZDoge1xyXG4gICAgICBoZWlnaHQ6IDMsXHJcbiAgICAgIHdpZHRoOiAxOCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgYm90dG9tOiAtMixcclxuICAgICAgbGVmdDogXCJjYWxjKDUwJSAtIDlweClcIixcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwib3BhY2l0eVwiKSxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmludGVyZmFjZSBJbWFnZUJ1dHRvblByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgbWluSGVpZ2h0PzogbnVtYmVyO1xyXG4gIGJ1dHRvbVByb3BzPzogQnV0dG9uQmFzZVByb3BzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSW1hZ2VCdXR0b24oXHJcbiAgeyB0aXRsZSwgd2lkdGgsIHVybCwgbWluSGVpZ2h0ID0gMjUwLCBidXR0b21Qcm9wcyA9IHt9IH06IEltYWdlQnV0dG9uUHJvcHMsXHJcbikge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIDxCdXR0b25CYXNlXHJcbiAgICBmb2N1c1JpcHBsZVxyXG4gICAga2V5PXt0aXRsZX1cclxuICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cclxuICAgIGZvY3VzVmlzaWJsZUNsYXNzTmFtZT17Y2xhc3Nlcy5mb2N1c1Zpc2libGV9XHJcbiAgICBzdHlsZT17e1xyXG4gICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgIG1pbkhlaWdodDogbWluSGVpZ2h0LFxyXG4gICAgfX1cclxuICAgIHsuLi5idXR0b21Qcm9wc31cclxuICA+XHJcbiAgICA8c3BhblxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VTcmN9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7dXJsfSlgLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUJhY2tkcm9wfSAvPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQnV0dG9ufT5cclxuICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVRpdGxlfVxyXG4gICAgICA+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZU1hcmtlZH0gLz5cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvQnV0dG9uQmFzZT47XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==