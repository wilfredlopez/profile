webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/shared/SliderCard.tsx":
/*!**********************************************!*\
  !*** ./src/components/shared/SliderCard.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_MobileStepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/MobileStepper */ "./node_modules/@material-ui/core/esm/MobileStepper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowLeft */ "./node_modules/@material-ui/icons/KeyboardArrowLeft.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "./node_modules/@material-ui/icons/KeyboardArrowRight.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\shared\\SliderCard.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const rotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const ShowHideImage = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "SliderCard__ShowHideImage",
  componentId: "fq8fpx-0"
})(["transition:all 200ms ease-in-out;will-change:transform;"]);
_c = ShowHideImage;
// const MAX_HEIGHT = 600;
const MAX_WIDTH = 500;
const BORDER_RADIUS = 6;
const Img = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "SliderCard__Img",
  componentId: "fq8fpx-1"
})(["height:100%;display:block;max-width:", "px;min-height:600px;overflow:hidden;width:100%;background:url(", ");position:relative;transition:background 1s ease-in;background-size:cover;background-repeat:no-repeat;object-fit:cover;"], MAX_WIDTH, props => props.url);
_c2 = Img;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    maxWidth: MAX_WIDTH,
    flexGrow: 1,
    margin: "auto",
    marginBottom: "1rem",
    position: "relative"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    // paddingLeft: theme.spacing(4),
    // backgroundColor: theme.palette.background.default,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.getContrastText(theme.palette.background.default),
    // borderTopLeftRadius: BORDER_RADIUS,
    // borderTopRightRadius: BORDER_RADIUS,
    // border: `1px outset ${theme.palette.background.paper}`,
    borderBottom: 0,
    borderRight: 0,
    borderLeft: 0,
    position: "relative"
  },
  stepper: {
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
    opacity: 0.9,
    background: theme.palette.getContrastText(theme.palette.background.default)
  },
  focusVisible: {},
  img: {
    height: "100%",
    // maxHeight: MAX_HEIGHT,
    display: "block",
    maxWidth: MAX_WIDTH,
    overflow: "hidden",
    width: "100%",
    position: "relative",
    transition: "all 200ms ease-in-out",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important",
      // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0
      }
    }
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    borderRadius: theme.shape.borderRadius,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.15,
    transition: theme.transitions.create("opacity")
  }
}));

function SliderCard({
  imageData
}) {
  _s();

  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  const [activeStep, setActiveStep] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const maxSteps = imageData.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => {
      return prevActiveStep + 1;
    });
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }; //   const handleStepChange = (step: number) => {
  //     setActiveStep(step);
  //   };


  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    let backTimeout;
    let forwardTimeout;

    function clearTimeouts() {
      if (backTimeout) {
        window.clearTimeout(backTimeout);
      }

      if (forwardTimeout) {
        window.clearTimeout(forwardTimeout);
      }
    }

    function autoPlay(time) {
      const limit = maxSteps - 1;

      if (activeStep === limit) {
        backTimeout = window.setTimeout(() => {
          setActiveStep(0);
        }, time);
        return;
      }

      if (activeStep < limit) {
        forwardTimeout = window.setTimeout(() => {
          handleNext();
        }, time);
      }
    }

    if (maxSteps > 1) {
      autoPlay(7000);
    }

    return () => {
      clearTimeouts();
    };
  }, [activeStep, maxSteps]);
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    square: true,
    elevation: 3,
    className: classes.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "subtitle2",
    component: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }, imageData[activeStep].label)), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ShowHideImage, {
    show: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  }, __jsx(Img, {
    url: imageData[activeStep].imgPath,
    title: imageData[activeStep].label,
    role: "img",
    className: classes.img,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: classes.imageBackdrop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  })))), maxSteps > 1 && __jsx(_material_ui_core_MobileStepper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.stepper,
    steps: maxSteps,
    position: "static",
    variant: "progress",
    LinearProgressProps: {
      color: "secondary"
    },
    activeStep: activeStep,
    nextButton: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
      size: "small",
      onClick: handleNext,
      disabled: activeStep === maxSteps - 1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 23
      }
    }, theme.direction === "rtl" ? __jsx(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 17
      }
    }) : __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 17
      }
    })),
    backButton: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
      size: "small",
      onClick: handleBack,
      disabled: activeStep === 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 23
      }
    }, theme.direction === "rtl" ? __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 42
      }
    }) : __jsx(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 15
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 9
    }
  }));
}

_s(SliderCard, "64aYeK4P1idLiHVOakPk4SmWJGQ=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"]];
});

_c3 = SliderCard;
/* harmony default export */ __webpack_exports__["default"] = (SliderCard);

var _c, _c2, _c3;

$RefreshReg$(_c, "ShowHideImage");
$RefreshReg$(_c2, "Img");
$RefreshReg$(_c3, "SliderCard");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvU2xpZGVyQ2FyZC50c3giXSwibmFtZXMiOlsicm90YXRlIiwia2V5ZnJhbWVzIiwiU2hvd0hpZGVJbWFnZSIsInN0eWxlZCIsImRpdiIsIk1BWF9XSURUSCIsIkJPUkRFUl9SQURJVVMiLCJJbWciLCJwcm9wcyIsInVybCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXhXaWR0aCIsImZsZXhHcm93IiwibWFyZ2luIiwibWFyZ2luQm90dG9tIiwicG9zaXRpb24iLCJoZWFkZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwiY29sb3IiLCJnZXRDb250cmFzdFRleHQiLCJib3JkZXJCb3R0b20iLCJib3JkZXJSaWdodCIsImJvcmRlckxlZnQiLCJzdGVwcGVyIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwib3BhY2l0eSIsImZvY3VzVmlzaWJsZSIsImltZyIsIm92ZXJmbG93Iiwid2lkdGgiLCJ0cmFuc2l0aW9uIiwiYnJlYWtwb2ludHMiLCJkb3duIiwiekluZGV4IiwiaW1hZ2VCYWNrZHJvcCIsImxlZnQiLCJib3JkZXJSYWRpdXMiLCJzaGFwZSIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiY29tbW9uIiwiYmxhY2siLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsIlNsaWRlckNhcmQiLCJpbWFnZURhdGEiLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsIlJlYWN0IiwidXNlU3RhdGUiLCJtYXhTdGVwcyIsImxlbmd0aCIsImhhbmRsZU5leHQiLCJwcmV2QWN0aXZlU3RlcCIsImhhbmRsZUJhY2siLCJ1c2VFZmZlY3QiLCJiYWNrVGltZW91dCIsImZvcndhcmRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0cyIsIndpbmRvdyIsImNsZWFyVGltZW91dCIsImF1dG9QbGF5IiwidGltZSIsImxpbWl0Iiwic2V0VGltZW91dCIsImxhYmVsIiwiaW1nUGF0aCIsImRpcmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsTUFBTSxHQUFHQyxtRUFBSCxnRUFBWjtBQVVBLE1BQU1DLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrREFBbkI7S0FBTUYsYTtBQWtCTjtBQUNBLE1BQU1HLFNBQVMsR0FBRyxHQUFsQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxDQUF0QjtBQUVBLE1BQU1DLEdBQUcsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyT0FHUUMsU0FIUixFQVFjRyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsR0FSOUIsQ0FBVDtNQUFNRixHO0FBZ0JOLE1BQU1HLFNBQVMsR0FBR0MsMkVBQVUsQ0FBRUMsS0FBRCxLQUFZO0FBQ3ZDQyxNQUFJLEVBQUU7QUFDSkMsWUFBUSxFQUFFVCxTQUROO0FBRUpVLFlBQVEsRUFBRSxDQUZOO0FBR0pDLFVBQU0sRUFBRSxNQUhKO0FBSUpDLGdCQUFZLEVBQUUsTUFKVjtBQUtKQyxZQUFRLEVBQUU7QUFMTixHQURpQztBQVF2Q0MsUUFBTSxFQUFFO0FBQ05DLFdBQU8sRUFBRSxNQURIO0FBRU5DLGNBQVUsRUFBRSxRQUZOO0FBR05DLGtCQUFjLEVBQUUsUUFIVjtBQUlOQyxVQUFNLEVBQUUsRUFKRjtBQUtOO0FBQ0E7QUFDQUMsbUJBQWUsRUFBRVosS0FBSyxDQUFDYSxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDLE9BUHBDO0FBUU5DLFNBQUssRUFBRWhCLEtBQUssQ0FBQ2EsT0FBTixDQUFjSSxlQUFkLENBQThCakIsS0FBSyxDQUFD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Q0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS1RoRCxLQUFLLENBQUNxRSxTQUFOLEtBQW9CLEtBQXBCLEdBQTRCLE1BQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUE1QixHQUNDLE1BQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5RLENBbkJkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQ0osQ0FERjtBQWtFRDs7R0F6SFF6QixVO1VBQ1M5QyxTLEVBQ0ZpRCxpRTs7O01BRlBILFU7QUEySE1BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5hMmFiZGU2NTA5NDNiMzk5ZjRhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IE1vYmlsZVN0ZXBwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01vYmlsZVN0ZXBwZXJcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0xlZnQgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93TGVmdFwiO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1JpZ2h0IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd1JpZ2h0XCI7XHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmNvbnN0IHJvdGF0ZSA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTaG93SGlkZUltYWdlID0gc3R5bGVkLmRpdjx7IHNob3c6IGJvb2xlYW4gfT5gXHJcbiAgICAvKiBkaXNwbGF5OiAkeyhwcm9wcykgPT4gcHJvcHMuc2hvdyA/IFwiYmxvY2tcIiA6IFwibm9uZVwifTsgKi9cclxuICAgIC8qIHRyYW5zZm9ybTogJHsocHJvcHMpID0+XHJcbiAgcHJvcHMuc2hvdyA/IFwidHJhbnNsYXRlKDApXCIgOiBcInRyYW5zbGF0ZSgtMTAwMDAlKVwifTsgKi9cclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcclxuICAgIC8qIGFuaW1hdGlvbjogJHtyb3RhdGV9IDJzIGxpbmVhcjsgKi9cclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbmA7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlVG9TbGlkZXIge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgaW1nUGF0aDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGltYWdlRGF0YTogSW1hZ2VUb1NsaWRlcltdO1xyXG59XHJcblxyXG4vLyBjb25zdCBNQVhfSEVJR0hUID0gNjAwO1xyXG5jb25zdCBNQVhfV0lEVEggPSA1MDA7XHJcbmNvbnN0IEJPUkRFUl9SQURJVVMgPSA2O1xyXG5cclxuY29uc3QgSW1nID0gc3R5bGVkLmRpdjx7IHVybDogc3RyaW5nIH0+YFxyXG4gICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6ICR7TUFYX1dJRFRIfXB4O1xyXG4gICAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgKi9cclxuICAgIGJhY2tncm91bmQ6IHVybCgkeyhwcm9wcykgPT4gcHJvcHMudXJsfSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDFzIGVhc2UtaW47XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbmA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBtYXhXaWR0aDogTUFYX1dJRFRILFxyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgfSxcclxuICBoZWFkZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgaGVpZ2h0OiA1MCxcclxuICAgIC8vIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5nZXRDb250cmFzdFRleHQodGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQpLFxyXG4gICAgLy8gYm9yZGVyVG9wTGVmdFJhZGl1czogQk9SREVSX1JBRElVUyxcclxuICAgIC8vIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBCT1JERVJfUkFESVVTLFxyXG4gICAgLy8gYm9yZGVyOiBgMXB4IG91dHNldCAke3RoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcn1gLFxyXG5cclxuICAgIGJvcmRlckJvdHRvbTogMCxcclxuICAgIGJvcmRlclJpZ2h0OiAwLFxyXG4gICAgYm9yZGVyTGVmdDogMCxcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgfSxcclxuICBzdGVwcGVyOiB7XHJcbiAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiBCT1JERVJfUkFESVVTLFxyXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IEJPUkRFUl9SQURJVVMsXHJcbiAgICBvcGFjaXR5OiAwLjksXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmdldENvbnRyYXN0VGV4dCh0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCksXHJcbiAgfSxcclxuICBmb2N1c1Zpc2libGU6IHt9LFxyXG4gIGltZzoge1xyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIC8vIG1heEhlaWdodDogTUFYX0hFSUdIVCxcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgIG1heFdpZHRoOiBNQVhfV0lEVEgsXHJcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAyMDBtcyBlYXNlLWluLW91dFwiLFxyXG5cclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwieHNcIildOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLCAvLyBPdmVycmlkZXMgaW5saW5lLXN0eWxlXHJcbiAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgfSxcclxuICAgIFwiJjpob3ZlciwgJiRmb2N1c1Zpc2libGVcIjoge1xyXG4gICAgICB6SW5kZXg6IDEsXHJcbiAgICAgIFwiJiAkaW1hZ2VCYWNrZHJvcFwiOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZUJhY2tkcm9wOiB7XHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgbGVmdDogMCxcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBib3R0b206IDAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrLFxyXG4gICAgb3BhY2l0eTogMC4xNSxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIm9wYWNpdHlcIiksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gU2xpZGVyQ2FyZCh7IGltYWdlRGF0YSB9OiBQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgW2FjdGl2ZVN0ZXAsIHNldEFjdGl2ZVN0ZXBdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgbWF4U3RlcHMgPSBpbWFnZURhdGEubGVuZ3RoO1xyXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4ge1xyXG4gICAgICByZXR1cm4gcHJldkFjdGl2ZVN0ZXAgKyAxO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCAtIDEpO1xyXG4gIH07XHJcblxyXG4gIC8vICAgY29uc3QgaGFuZGxlU3RlcENoYW5nZSA9IChzdGVwOiBudW1iZXIpID0+IHtcclxuICAvLyAgICAgc2V0QWN0aXZlU3RlcChzdGVwKTtcclxuICAvLyAgIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgYmFja1RpbWVvdXQ6IG51bWJlcjtcclxuICAgIGxldCBmb3J3YXJkVGltZW91dDogbnVtYmVyO1xyXG4gICAgZnVuY3Rpb24gY2xlYXJUaW1lb3V0cygpIHtcclxuICAgICAgaWYgKGJhY2tUaW1lb3V0KSB7XHJcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChiYWNrVGltZW91dCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZvcndhcmRUaW1lb3V0KSB7XHJcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChmb3J3YXJkVGltZW91dCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhdXRvUGxheSh0aW1lOiBudW1iZXIpIHtcclxuICAgICAgY29uc3QgbGltaXQgPSBtYXhTdGVwcyAtIDE7XHJcbiAgICAgIGlmIChhY3RpdmVTdGVwID09PSBsaW1pdCkge1xyXG4gICAgICAgIGJhY2tUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0QWN0aXZlU3RlcCgwKTtcclxuICAgICAgICB9LCB0aW1lKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgIGFjdGl2ZVN0ZXAgPCBsaW1pdFxyXG4gICAgICApIHtcclxuICAgICAgICBmb3J3YXJkVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGhhbmRsZU5leHQoKTtcclxuICAgICAgICB9LCB0aW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG1heFN0ZXBzID4gMSkge1xyXG4gICAgICBhdXRvUGxheSg3MDAwKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNsZWFyVGltZW91dHMoKTtcclxuICAgIH07XHJcbiAgfSwgW2FjdGl2ZVN0ZXAsIG1heFN0ZXBzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPFBhcGVyIHNxdWFyZSBlbGV2YXRpb249ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb21wb25lbnQ9XCJoNFwiPlxyXG4gICAgICAgICAge2ltYWdlRGF0YVthY3RpdmVTdGVwXS5sYWJlbH1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvUGFwZXI+XHJcblxyXG4gICAgICA8PlxyXG4gICAgICAgIDxTaG93SGlkZUltYWdlIHNob3c9e3RydWV9PlxyXG4gICAgICAgICAgPEltZ1xyXG4gICAgICAgICAgICB1cmw9e2ltYWdlRGF0YVthY3RpdmVTdGVwXS5pbWdQYXRofVxyXG4gICAgICAgICAgICB0aXRsZT17aW1hZ2VEYXRhW2FjdGl2ZVN0ZXBdLmxhYmVsfVxyXG4gICAgICAgICAgICByb2xlPVwiaW1nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQmFja2Ryb3B9IC8+XHJcbiAgICAgICAgICA8L0ltZz5cclxuICAgICAgICAgIHsvKiA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgIHNyYz17aW1hZ2VEYXRhW2FjdGl2ZVN0ZXBdLmltZ1BhdGh9XHJcbiAgICAgICAgICAgIGFsdD17aW1hZ2VEYXRhW2FjdGl2ZVN0ZXBdLmxhYmVsfVxyXG4gICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgPC9TaG93SGlkZUltYWdlPlxyXG4gICAgICAgIHsvKiB7aW1hZ2VEYXRhLm1hcCgoc3RlcCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxTaG93SGlkZUltYWdlIHNob3c9e2FjdGl2ZVN0ZXAgPT09IGluZGV4fSBrZXk9e3N0ZXAubGFiZWx9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgICBzcmM9e3N0ZXAuaW1nUGF0aH1cclxuICAgICAgICAgICAgICBhbHQ9e3N0ZXAubGFiZWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1Nob3dIaWRlSW1hZ2U+XHJcbiAgICAgICAgKSl9ICovfVxyXG4gICAgICA8Lz5cclxuICAgICAge21heFN0ZXBzID4gMSAmJlxyXG4gICAgICAgIDxNb2JpbGVTdGVwcGVyXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3RlcHBlcn1cclxuICAgICAgICAgIHN0ZXBzPXttYXhTdGVwc31cclxuICAgICAgICAgIHBvc2l0aW9uPVwic3RhdGljXCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJwcm9ncmVzc1wiXHJcbiAgICAgICAgICBMaW5lYXJQcm9ncmVzc1Byb3BzPXt7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcInNlY29uZGFyeVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGFjdGl2ZVN0ZXA9e2FjdGl2ZVN0ZXB9XHJcbiAgICAgICAgICBuZXh0QnV0dG9uPXs8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gbWF4U3RlcHMgLSAxfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7LyogTmV4dCAqL31cclxuICAgICAgICAgICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gXCJydGxcIlxyXG4gICAgICAgICAgICAgID8gPEtleWJvYXJkQXJyb3dMZWZ0IC8+XHJcbiAgICAgICAgICAgICAgOiA8S2V5Ym9hcmRBcnJvd1JpZ2h0IC8+fVxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPn1cclxuICAgICAgICAgIGJhY2tCdXR0b249ezxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJhY2t9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGhlbWUuZGlyZWN0aW9uID09PSBcInJ0bFwiID8gPEtleWJvYXJkQXJyb3dSaWdodCAvPlxyXG4gICAgICAgICAgICA6IDxLZXlib2FyZEFycm93TGVmdCAvPn1cclxuICAgICAgICAgICAgey8qIEJhY2sgKi99XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+fVxyXG4gICAgICAgIC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==