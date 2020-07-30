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
    color: theme.palette.background.default,
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
      lineNumber: 183,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    square: true,
    elevation: 3,
    className: classes.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "subtitle2",
    component: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, imageData[activeStep].label)), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ShowHideImage, {
    show: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
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
      lineNumber: 192,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: classes.imageBackdrop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
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
      color: "inherit",
      onClick: handleNext,
      disabled: activeStep === maxSteps - 1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 23
      }
    }, theme.direction === "rtl" ? __jsx(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5___default.a, {
      color: "inherit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 17
      }
    }) : __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
      color: "inherit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 17
      }
    })),
    backButton: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
      size: "small",
      color: "inherit",
      onClick: handleBack,
      disabled: activeStep === 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 23
      }
    }, theme.direction === "rtl" ? __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
      color: "inherit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 17
      }
    }) : __jsx(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5___default.a, {
      color: "inherit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 17
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvU2xpZGVyQ2FyZC50c3giXSwibmFtZXMiOlsicm90YXRlIiwia2V5ZnJhbWVzIiwiU2hvd0hpZGVJbWFnZSIsInN0eWxlZCIsImRpdiIsIk1BWF9XSURUSCIsIkJPUkRFUl9SQURJVVMiLCJJbWciLCJwcm9wcyIsInVybCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXhXaWR0aCIsImZsZXhHcm93IiwibWFyZ2luIiwibWFyZ2luQm90dG9tIiwicG9zaXRpb24iLCJoZWFkZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwiY29sb3IiLCJnZXRDb250cmFzdFRleHQiLCJib3JkZXJCb3R0b20iLCJib3JkZXJSaWdodCIsImJvcmRlckxlZnQiLCJzdGVwcGVyIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwib3BhY2l0eSIsImZvY3VzVmlzaWJsZSIsImltZyIsIm92ZXJmbG93Iiwid2lkdGgiLCJ0cmFuc2l0aW9uIiwiYnJlYWtwb2ludHMiLCJkb3duIiwiekluZGV4IiwiaW1hZ2VCYWNrZHJvcCIsImxlZnQiLCJib3JkZXJSYWRpdXMiLCJzaGFwZSIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiY29tbW9uIiwiYmxhY2siLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsIlNsaWRlckNhcmQiLCJpbWFnZURhdGEiLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsIlJlYWN0IiwidXNlU3RhdGUiLCJtYXhTdGVwcyIsImxlbmd0aCIsImhhbmRsZU5leHQiLCJwcmV2QWN0aXZlU3RlcCIsImhhbmRsZUJhY2siLCJ1c2VFZmZlY3QiLCJiYWNrVGltZW91dCIsImZvcndhcmRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0cyIsIndpbmRvdyIsImNsZWFyVGltZW91dCIsImF1dG9QbGF5IiwidGltZSIsImxpbWl0Iiwic2V0VGltZW91dCIsImxhYmVsIiwiaW1nUGF0aCIsImRpcmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsTUFBTSxHQUFHQyxtRUFBSCxnRUFBWjtBQVVBLE1BQU1DLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrREFBbkI7S0FBTUYsYTtBQWtCTjtBQUNBLE1BQU1HLFNBQVMsR0FBRyxHQUFsQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxDQUF0QjtBQUVBLE1BQU1DLEdBQUcsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyT0FHUUMsU0FIUixFQVFjRyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsR0FSOUIsQ0FBVDtNQUFNRixHO0FBZ0JOLE1BQU1HLFNBQVMsR0FBR0MsMkVBQVUsQ0FBRUMsS0FBRCxLQUFZO0FBQ3ZDQyxNQUFJLEVBQUU7QUFDSkMsWUFBUSxFQUFFVCxTQUROO0FBRUpVLFlBQVEsRUFBRSxDQUZOO0FBR0pDLFVBQU0sRUFBRSxNQUhKO0FBSUpDLGdCQUFZLEVBQUUsTUFKVjtBQUtKQyxZQUFRLEVBQUU7QUFMTixHQURpQztBQVF2Q0MsUUFBTSxFQUFFO0FBQ05DLFdBQU8sRUFBRSxNQURIO0FBRU5DLGNBQVUsRUFBRSxRQUZOO0FBR05DLGtCQUFjLEVBQUUsUUFIVjtBQUlOQyxVQUFNLEVBQUUsRUFKRjtBQUtOO0FBQ0E7QUFDQUMsbUJBQWUsRUFBRVosS0FBSyxDQUFDYSxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDLE9BUHBDO0FBUU5DLFNBQUssRUFBRWhCLEtBQUssQ0FBQ2EsT0FBTixDQUFjSSxlQUFkLENBQThCakIsS0FBSyxDQUFD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QUE7QUFBQTtBQUFBO0FBQUEsTUFUTSxDQVRkO0FBb0JFLGNBQVUsRUFBRSxNQUFDLDREQUFEO0FBQ1YsVUFBSSxFQUFDLE9BREs7QUFFVixXQUFLLEVBQUMsU0FGSTtBQUdWLGFBQU8sRUFBRWIsVUFIQztBQUlWLGNBQVEsRUFBRVIsVUFBVSxLQUFLLENBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1UaEQsS0FBSyxDQUFDcUUsU0FBTixLQUFvQixLQUFwQixHQUNHLE1BQUMsNEVBQUQ7QUFBb0IsV0FBSyxFQUFDLFNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESCxHQUVHLE1BQUMsMkVBQUQ7QUFBbUIsV0FBSyxFQUFDLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFSTSxDQXBCZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbENKLENBREY7QUFxRUQ7O0dBNUhRekIsVTtVQUNTOUMsUyxFQUNGaUQsaUU7OztNQUZQSCxVO0FBOEhNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYWNiOTRlMzk1OTg1ZWU0OTg2ODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBNb2JpbGVTdGVwcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Nb2JpbGVTdGVwcGVyXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dMZWZ0IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd0xlZnRcIjtcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dSaWdodCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dSaWdodFwiO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCByb3RhdGUgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2hvd0hpZGVJbWFnZSA9IHN0eWxlZC5kaXY8eyBzaG93OiBib29sZWFuIH0+YFxyXG4gICAgLyogZGlzcGxheTogJHsocHJvcHMpID0+IHByb3BzLnNob3cgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07ICovXHJcbiAgICAvKiB0cmFuc2Zvcm06ICR7KHByb3BzKSA9PlxyXG4gIHByb3BzLnNob3cgPyBcInRyYW5zbGF0ZSgwKVwiIDogXCJ0cmFuc2xhdGUoLTEwMDAwJSlcIn07ICovXHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAvKiBhbmltYXRpb246ICR7cm90YXRlfSAycyBsaW5lYXI7ICovXHJcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbWFnZVRvU2xpZGVyIHtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGltZ1BhdGg6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBpbWFnZURhdGE6IEltYWdlVG9TbGlkZXJbXTtcclxufVxyXG5cclxuLy8gY29uc3QgTUFYX0hFSUdIVCA9IDYwMDtcclxuY29uc3QgTUFYX1dJRFRIID0gNTAwO1xyXG5jb25zdCBCT1JERVJfUkFESVVTID0gNjtcclxuXHJcbmNvbnN0IEltZyA9IHN0eWxlZC5kaXY8eyB1cmw6IHN0cmluZyB9PmBcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAke01BWF9XSURUSH1weDtcclxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHsocHJvcHMpID0+IHByb3BzLnVybH0pO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxcyBlYXNlLWluO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG5gO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWF4V2lkdGg6IE1BWF9XSURUSCxcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gIH0sXHJcbiAgaGVhZGVyOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGhlaWdodDogNTAsXHJcbiAgICAvLyBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgIC8vIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0KSxcclxuICAgIC8vIGJvcmRlclRvcExlZnRSYWRpdXM6IEJPUkRFUl9SQURJVVMsXHJcbiAgICAvLyBib3JkZXJUb3BSaWdodFJhZGl1czogQk9SREVSX1JBRElVUyxcclxuICAgIC8vIGJvcmRlcjogYDFweCBvdXRzZXQgJHt0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXJ9YCxcclxuXHJcbiAgICBib3JkZXJCb3R0b206IDAsXHJcbiAgICBib3JkZXJSaWdodDogMCxcclxuICAgIGJvcmRlckxlZnQ6IDAsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gIH0sXHJcbiAgc3RlcHBlcjoge1xyXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogQk9SREVSX1JBRElVUyxcclxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBCT1JERVJfUkFESVVTLFxyXG4gICAgb3BhY2l0eTogMC45LFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5nZXRDb250cmFzdFRleHQodGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQpLFxyXG4gIH0sXHJcbiAgZm9jdXNWaXNpYmxlOiB7fSxcclxuICBpbWc6IHtcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAvLyBtYXhIZWlnaHQ6IE1BWF9IRUlHSFQsXHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICBtYXhXaWR0aDogTUFYX1dJRFRILFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMjAwbXMgZWFzZS1pbi1vdXRcIixcclxuXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xyXG4gICAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIiwgLy8gT3ZlcnJpZGVzIGlubGluZS1zdHlsZVxyXG4gICAgICBoZWlnaHQ6IDEwMCxcclxuICAgIH0sXHJcbiAgICBcIiY6aG92ZXIsICYkZm9jdXNWaXNpYmxlXCI6IHtcclxuICAgICAgekluZGV4OiAxLFxyXG4gICAgICBcIiYgJGltYWdlQmFja2Ryb3BcIjoge1xyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW1hZ2VCYWNrZHJvcDoge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIGxlZnQ6IDAsXHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgIG9wYWNpdHk6IDAuMTUsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJvcGFjaXR5XCIpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIFNsaWRlckNhcmQoeyBpbWFnZURhdGEgfTogUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IG1heFN0ZXBzID0gaW1hZ2VEYXRhLmxlbmd0aDtcclxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHtcclxuICAgICAgcmV0dXJuIHByZXZBY3RpdmVTdGVwICsgMTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJhY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4gcHJldkFjdGl2ZVN0ZXAgLSAxKTtcclxuICB9O1xyXG5cclxuICAvLyAgIGNvbnN0IGhhbmRsZVN0ZXBDaGFuZ2UgPSAoc3RlcDogbnVtYmVyKSA9PiB7XHJcbiAgLy8gICAgIHNldEFjdGl2ZVN0ZXAoc3RlcCk7XHJcbiAgLy8gICB9O1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGJhY2tUaW1lb3V0OiBudW1iZXI7XHJcbiAgICBsZXQgZm9yd2FyZFRpbWVvdXQ6IG51bWJlcjtcclxuICAgIGZ1bmN0aW9uIGNsZWFyVGltZW91dHMoKSB7XHJcbiAgICAgIGlmIChiYWNrVGltZW91dCkge1xyXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoYmFja1RpbWVvdXQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmb3J3YXJkVGltZW91dCkge1xyXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoZm9yd2FyZFRpbWVvdXQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXV0b1BsYXkodGltZTogbnVtYmVyKSB7XHJcbiAgICAgIGNvbnN0IGxpbWl0ID0gbWF4U3RlcHMgLSAxO1xyXG4gICAgICBpZiAoYWN0aXZlU3RlcCA9PT0gbGltaXQpIHtcclxuICAgICAgICBiYWNrVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHNldEFjdGl2ZVN0ZXAoMCk7XHJcbiAgICAgICAgfSwgdGltZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICBhY3RpdmVTdGVwIDwgbGltaXRcclxuICAgICAgKSB7XHJcbiAgICAgICAgZm9yd2FyZFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBoYW5kbGVOZXh0KCk7XHJcbiAgICAgICAgfSwgdGltZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChtYXhTdGVwcyA+IDEpIHtcclxuICAgICAgYXV0b1BsYXkoNzAwMCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhclRpbWVvdXRzKCk7XHJcbiAgICB9O1xyXG4gIH0sIFthY3RpdmVTdGVwLCBtYXhTdGVwc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxQYXBlciBzcXVhcmUgZWxldmF0aW9uPXszfSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29tcG9uZW50PVwiaDRcIj5cclxuICAgICAgICAgIHtpbWFnZURhdGFbYWN0aXZlU3RlcF0ubGFiZWx9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L1BhcGVyPlxyXG5cclxuICAgICAgPD5cclxuICAgICAgICA8U2hvd0hpZGVJbWFnZSBzaG93PXt0cnVlfT5cclxuICAgICAgICAgIDxJbWdcclxuICAgICAgICAgICAgdXJsPXtpbWFnZURhdGFbYWN0aXZlU3RlcF0uaW1nUGF0aH1cclxuICAgICAgICAgICAgdGl0bGU9e2ltYWdlRGF0YVthY3RpdmVTdGVwXS5sYWJlbH1cclxuICAgICAgICAgICAgcm9sZT1cImltZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUJhY2tkcm9wfSAvPlxyXG4gICAgICAgICAgPC9JbWc+XHJcbiAgICAgICAgICB7LyogPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICBzcmM9e2ltYWdlRGF0YVthY3RpdmVTdGVwXS5pbWdQYXRofVxyXG4gICAgICAgICAgICBhbHQ9e2ltYWdlRGF0YVthY3RpdmVTdGVwXS5sYWJlbH1cclxuICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgIDwvU2hvd0hpZGVJbWFnZT5cclxuICAgICAgICB7Lyoge2ltYWdlRGF0YS5tYXAoKHN0ZXAsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8U2hvd0hpZGVJbWFnZSBzaG93PXthY3RpdmVTdGVwID09PSBpbmRleH0ga2V5PXtzdGVwLmxhYmVsfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgc3JjPXtzdGVwLmltZ1BhdGh9XHJcbiAgICAgICAgICAgICAgYWx0PXtzdGVwLmxhYmVsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TaG93SGlkZUltYWdlPlxyXG4gICAgICAgICkpfSAqL31cclxuICAgICAgPC8+XHJcbiAgICAgIHttYXhTdGVwcyA+IDEgJiZcclxuICAgICAgICA8TW9iaWxlU3RlcHBlclxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN0ZXBwZXJ9XHJcbiAgICAgICAgICBzdGVwcz17bWF4U3RlcHN9XHJcbiAgICAgICAgICBwb3NpdGlvbj1cInN0YXRpY1wiXHJcbiAgICAgICAgICB2YXJpYW50PVwicHJvZ3Jlc3NcIlxyXG4gICAgICAgICAgTGluZWFyUHJvZ3Jlc3NQcm9wcz17e1xyXG4gICAgICAgICAgICBjb2xvcjogXCJzZWNvbmRhcnlcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBhY3RpdmVTdGVwPXthY3RpdmVTdGVwfVxyXG4gICAgICAgICAgbmV4dEJ1dHRvbj17PEljb25CdXR0b25cclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dH1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVN0ZXAgPT09IG1heFN0ZXBzIC0gMX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgey8qIE5leHQgKi99XHJcbiAgICAgICAgICAgIHt0aGVtZS5kaXJlY3Rpb24gPT09IFwicnRsXCJcclxuICAgICAgICAgICAgICA/IDxLZXlib2FyZEFycm93TGVmdCBjb2xvcj1cImluaGVyaXRcIiAvPlxyXG4gICAgICAgICAgICAgIDogPEtleWJvYXJkQXJyb3dSaWdodCBjb2xvcj1cImluaGVyaXRcIiAvPn1cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj59XHJcbiAgICAgICAgICBiYWNrQnV0dG9uPXs8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCYWNrfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gMH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gXCJydGxcIlxyXG4gICAgICAgICAgICAgID8gPEtleWJvYXJkQXJyb3dSaWdodCBjb2xvcj1cImluaGVyaXRcIiAvPlxyXG4gICAgICAgICAgICAgIDogPEtleWJvYXJkQXJyb3dMZWZ0IGNvbG9yPVwiaW5oZXJpdFwiIC8+fVxyXG4gICAgICAgICAgICB7LyogQmFjayAqL31cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj59XHJcbiAgICAgICAgLz59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9