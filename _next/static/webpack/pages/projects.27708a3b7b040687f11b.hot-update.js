webpackHotUpdate_N_E("pages/projects",{

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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "D:\\WEB_DEV\\Personal_Projects\\wilfredlopez\\src\\components\\shared\\SliderCard.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







 // import styled, {
//    keyframes
//   } from "styled-components";


 // const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;
// const ShowHideImage = styled.div<{ show: boolean }>`
//     /* display: ${(props) => props.show ? "block" : "none"}; */
//     /* transform: ${(props) =>
//   props.show ? "translate(0)" : "translate(-10000%)"}; */
//     transition: all 200ms ease-in-out;
//     /* animation: ${rotate} 2s linear; */
//     will-change: transform;
// `;

// const MAX_HEIGHT = 600;
const MIN_WIDTH = 500;
const BORDER_RADIUS = 6; // const Img = styled.div<{ url: string }>`
//         height:100%;
//     display: block;
//     max-width: 100%;
//     min-width: ${MIN_WIDTH}px;
//     min-height: 600px;
//     overflow: hidden;
//     width: 100%;
//     background: url(${(props) => props.url});
//     position: relative;
//     transition: background 1s ease-in;
//     background-size:cover;
//     background-repeat: no-repeat;
//     object-fit: cover;
// `;

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  sliderCardRoot: {
    minWidth: MIN_WIDTH,
    maxWidth: "100%",
    flexGrow: 1,
    margin: "auto",
    // marginBottom: "1rem",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important",
      // Overrides inline-style
      minWidth: "auto"
    }
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    // paddingLeft: theme.spacing(4),
    color: theme.palette.background.default,
    background: theme.palette.getContrastText(theme.palette.background.default),
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
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
    display: "block",
    maxWidth: "100%",
    minWidth: MIN_WIDTH,
    overflow: "hidden",
    width: "100%",
    position: "relative",
    transition: "all 200ms ease-in-out",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    [theme.breakpoints.down("xs")]: {
      width: "100% !important",
      // Overrides inline-style
      height: 100,
      minWidth: "auto"
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0
      }
    }
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1
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
  imageData,
  imageContainerClass,
  height = 500,
  showControlsInTitle = true,
  loop = false,
  showControls = true,
  showTitle = false,
  showBackdrop = false
}) {
  _s();

  var _imageData$activeStep;

  const classes = useStyles();
  const controls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_7__["useAnimation"])();
  const [activeStep, setActiveStep] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [goingBack, setGoingBack] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const maxSteps = imageData.length;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    // controls.set({
    //   opacity: 0,
    //   x: "-100px",
    // });
    controls.start({
      // opacity: 1,
      y: 0,
      x: 0,
      decelerate: 3000
    });
    return () => {
      controls.stop();
    };
  }, [activeStep]);

  const handleNext = () => {
    setActiveStep(prevActiveStep => {
      return prevActiveStep === imageData.length - 1 ? 0 : prevActiveStep + 1;
    });
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep === 0 ? 0 : prevActiveStep - 1);
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
        setGoingBack(true);
        backTimeout = window.setTimeout(() => {
          handleBack();
        }, time);
        return;
      }

      if (activeStep === 0) {
        setGoingBack(false);
        forwardTimeout = window.setTimeout(() => {
          handleNext();
        }, time);
      }

      if (!goingBack && activeStep < limit) {
        forwardTimeout = window.setTimeout(() => {
          handleNext();
        }, time);
      } else if (activeStep !== 0 && goingBack && activeStep < limit) {
        backTimeout = window.setTimeout(() => {
          handleBack();
        }, time);
      }
    }

    if (loop && maxSteps > 1) {
      autoPlay(7000);
    }

    return () => {
      clearTimeouts();
    };
  }, [activeStep, maxSteps, loop]);
  const shouldShowControlsInTitle = showControlsInTitle && maxSteps > 1;
  return __jsx("div", {
    className: classes.sliderCardRoot,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 5
    }
  }, showTitle && __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    square: true,
    elevation: 3,
    className: classes.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "subtitle2",
    component: "h4",
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 11
    }
  }, shouldShowControlsInTitle && __jsx(SliderBackButton, {
    disabled: activeStep === 0,
    handleBack: handleBack,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 13
    }
  }, (_imageData$activeStep = imageData[activeStep]) === null || _imageData$activeStep === void 0 ? void 0 : _imageData$activeStep.label), shouldShowControlsInTitle && __jsx(SliderNextButton, {
    disabled: activeStep === maxSteps - 1,
    handleNext: handleNext,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: imageContainerClass,
    style: {
      height: height,
      overflow: "hidden",
      minWidth: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__["AnimateSharedLayout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 9
    }
  }, imageData.map((data, index) => {
    if (index !== activeStep) return null;
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__["motion"].div, {
      layout: true,
      layoutId: "outline",
      key: index,
      title: data === null || data === void 0 ? void 0 : data.label,
      role: "img",
      style: {
        height: height,
        width: "100%",
        minWidth: "100%",
        overflow: "hidden",
        background: `url(${data.imgPath})`,
        position: "relative",
        transition: "background 1s ease-in",
        backgroundSize: "cover",
        backgroundPosition: "center 0",
        backgroundRepeat: "no-repeat",
        objectFit: "cover"
      },
      initial: goingBack ? {
        x: -100
      } : {
        // opacity: 0,
        x: 100
      },
      exit: goingBack ? {
        x: 100
      } : {
        x: -100
      },
      animate: controls,
      transition: {
        type: "spring",
        stiffness: 550,
        damping: 20
      },
      className: classes.img,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 20
      }
    }, showBackdrop && __jsx("span", {
      className: classes.imageBackdrop,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 17
      }
    }));
  }))), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), showControls && maxSteps > 1 && __jsx(_material_ui_core_MobileStepper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.stepper,
    steps: maxSteps,
    position: "static",
    variant: "progress",
    LinearProgressProps: {
      color: "secondary"
    },
    activeStep: activeStep,
    backButton: __jsx(SliderBackButton, {
      disabled: activeStep === 0,
      handleBack: handleBack,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 23
      }
    }),
    nextButton: __jsx(SliderNextButton, {
      disabled: activeStep === maxSteps - 1,
      handleNext: handleNext,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389,
        columnNumber: 23
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 9
    }
  }));
}

_s(SliderCard, "C2gM9BQU9mPtosRy5S8C464lC+k=", false, function () {
  return [useStyles, framer_motion__WEBPACK_IMPORTED_MODULE_7__["useAnimation"]];
});

_c = SliderCard;

function SliderNextButton({
  disabled,
  handleNext
}) {
  _s2();

  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
    size: "small",
    color: "inherit",
    onClick: handleNext,
    disabled: disabled,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 10
    }
  }, theme.direction === "rtl" ? __jsx(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5___default.a, {
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 9
    }
  }) : __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 9
    }
  }));
}

_s2(SliderNextButton, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function () {
  return [_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"]];
});

_c2 = SliderNextButton;

function SliderBackButton({
  disabled,
  handleBack
}) {
  _s3();

  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
    size: "small",
    color: "inherit",
    onClick: handleBack // disabled={activeStep === 0}
    ,
    disabled: disabled,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 10
    }
  }, theme.direction === "rtl" ? __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 9
    }
  }) : __jsx(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5___default.a, {
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 9
    }
  }));
}

_s3(SliderBackButton, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function () {
  return [_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"]];
});

_c3 = SliderBackButton;
/* harmony default export */ __webpack_exports__["default"] = (SliderCard);

var _c, _c2, _c3;

$RefreshReg$(_c, "SliderCard");
$RefreshReg$(_c2, "SliderNextButton");
$RefreshReg$(_c3, "SliderBackButton");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL1NsaWRlckNhcmQudHN4Il0sIm5hbWVzIjpbIk1JTl9XSURUSCIsIkJPUkRFUl9SQURJVVMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJzbGlkZXJDYXJkUm9vdCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJmbGV4R3JvdyIsIm1hcmdpbiIsInBvc2l0aW9uIiwiYnJlYWtwb2ludHMiLCJkb3duIiwid2lkdGgiLCJoZWFkZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwiY29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJnZXRDb250cmFzdFRleHQiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b20iLCJib3JkZXJSaWdodCIsImJvcmRlckxlZnQiLCJzdGVwcGVyIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwib3BhY2l0eSIsImZvY3VzVmlzaWJsZSIsImltZyIsIm92ZXJmbG93IiwidHJhbnNpdGlvbiIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwiekluZGV4IiwidGl0bGUiLCJmbGV4IiwiaW1hZ2VCYWNrZHJvcCIsImxlZnQiLCJib3JkZXJSYWRpdXMiLCJzaGFwZSIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiY29tbW9uIiwiYmxhY2siLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsIlNsaWRlckNhcmQiLCJpbWFnZURhdGEiLCJpbWFnZUNvbnRhaW5lckNsYXNzIiwic2hvd0NvbnRyb2xzSW5UaXRsZSIsImxvb3AiLCJzaG93Q29udHJvbHMiLCJzaG93VGl0bGUiLCJzaG93QmFja2Ryb3AiLCJjbGFzc2VzIiwiY29udHJvbHMiLCJ1c2VBbmltYXRpb24iLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsIlJlYWN0IiwidXNlU3RhdGUiLCJnb2luZ0JhY2siLCJzZXRHb2luZ0JhY2siLCJtYXhTdGVwcyIsImxlbmd0aCIsInVzZUVmZmVjdCIsInN0YXJ0IiwieSIsIngiLCJkZWNlbGVyYXRlIiwic3RvcCIsImhhbmRsZU5leHQiLCJwcmV2QWN0aXZlU3RlcCIsImhhbmRsZUJhY2siLCJiYWNrVGltZW91dCIsImZvcndhcmRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0cyIsIndpbmRvdyIsImNsZWFyVGltZW91dCIsImF1dG9QbGF5IiwidGltZSIsImxpbWl0Iiwic2V0VGltZW91dCIsInNob3VsZFNob3dDb250cm9sc0luVGl0bGUiLCJsYWJlbCIsIm1hcCIsImRhdGEiLCJpbmRleCIsImltZ1BhdGgiLCJiYWNrZ3JvdW5kUmVwZWF0Iiwib2JqZWN0Rml0IiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJTbGlkZXJOZXh0QnV0dG9uIiwiZGlzYWJsZWQiLCJ1c2VUaGVtZSIsImRpcmVjdGlvbiIsIlNsaWRlckJhY2tCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7O0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFtQkE7QUFDQSxNQUFNQSxTQUFTLEdBQUcsR0FBbEI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsQ0FBdEIsQyxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUVDLEtBQUQsS0FBWTtBQUN2Q0MsZ0JBQWMsRUFBRTtBQUNkQyxZQUFRLEVB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QixVQUhKLENBSUw7QUFKSztBQUtMLFlBQVEsRUFBRXNCLFFBTEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9KbkcsS0FBSyxDQUFDcUcsU0FBTixLQUFvQixLQUFwQixHQUNHLE1BQUMsNEVBQUQ7QUFBb0IsU0FBSyxFQUFDLFNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESCxHQUVHLE1BQUMsMkVBQUQ7QUFBbUIsU0FBSyxFQUFDLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUQyxDQUFQO0FBWUQ7O0lBaEJRQyxnQjtVQUdPRixpRTs7O01BSFBFLGdCO0FBa0JNcEQseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMuMjc3MDhhM2I3YjA0MDY4N2YxMWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIlxyXG5pbXBvcnQgTW9iaWxlU3RlcHBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTW9iaWxlU3RlcHBlclwiXHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIlxyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiXHJcbmltcG9ydCBLZXlib2FyZEFycm93TGVmdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dMZWZ0XCJcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dSaWdodCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dSaWdodFwiXHJcbmltcG9ydCB7IEFuaW1hdGVTaGFyZWRMYXlvdXQgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcbi8vIGltcG9ydCBzdHlsZWQsIHtcclxuLy8gICAga2V5ZnJhbWVzXHJcbi8vICAgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5cclxuLy8gY29uc3Qgcm90YXRlID0ga2V5ZnJhbWVzYFxyXG4vLyAgIGZyb20ge1xyXG4vLyAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbi8vICAgfVxyXG5cclxuLy8gICB0byB7XHJcbi8vICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4vLyAgIH1cclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFNob3dIaWRlSW1hZ2UgPSBzdHlsZWQuZGl2PHsgc2hvdzogYm9vbGVhbiB9PmBcclxuLy8gICAgIC8qIGRpc3BsYXk6ICR7KHByb3BzKSA9PiBwcm9wcy5zaG93ID8gXCJibG9ja1wiIDogXCJub25lXCJ9OyAqL1xyXG4vLyAgICAgLyogdHJhbnNmb3JtOiAkeyhwcm9wcykgPT5cclxuLy8gICBwcm9wcy5zaG93ID8gXCJ0cmFuc2xhdGUoMClcIiA6IFwidHJhbnNsYXRlKC0xMDAwMCUpXCJ9OyAqL1xyXG4vLyAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xyXG4vLyAgICAgLyogYW5pbWF0aW9uOiAke3JvdGF0ZX0gMnMgbGluZWFyOyAqL1xyXG4vLyAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuLy8gYDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VUb1NsaWRlciB7XHJcbiAgbGFiZWw/OiBzdHJpbmdcclxuICBpbWdQYXRoOiBzdHJpbmdcclxufVxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBpbWFnZURhdGE6IEltYWdlVG9TbGlkZXJbXVxyXG4gIGhlaWdodD86IG51bWJlclxyXG4gIHdpZHRoPzogbnVtYmVyXHJcbiAgbG9vcD86IGJvb2xlYW5cclxuICBzaG93Q29udHJvbHM/OiBib29sZWFuXHJcbiAgc2hvd0JhY2tkcm9wPzogYm9vbGVhblxyXG4gIHNob3dDb250cm9sc0luVGl0bGU/OiBib29sZWFuXHJcbiAgc2hvd1RpdGxlPzogYm9vbGVhblxyXG4gIGltYWdlQ29udGFpbmVyQ2xhc3M/OiBzdHJpbmdcclxufVxyXG5cclxuLy8gY29uc3QgTUFYX0hFSUdIVCA9IDYwMDtcclxuY29uc3QgTUlOX1dJRFRIID0gNTAwXHJcbmNvbnN0IEJPUkRFUl9SQURJVVMgPSA2XHJcblxyXG4vLyBjb25zdCBJbWcgPSBzdHlsZWQuZGl2PHsgdXJsOiBzdHJpbmcgfT5gXHJcbi8vICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIG1heC13aWR0aDogMTAwJTtcclxuLy8gICAgIG1pbi13aWR0aDogJHtNSU5fV0lEVEh9cHg7XHJcbi8vICAgICBtaW4taGVpZ2h0OiA2MDBweDtcclxuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGJhY2tncm91bmQ6IHVybCgkeyhwcm9wcykgPT4gcHJvcHMudXJsfSk7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDFzIGVhc2UtaW47XHJcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4vLyAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbi8vIGA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBzbGlkZXJDYXJkUm9vdDoge1xyXG4gICAgbWluV2lkdGg6IE1JTl9XSURUSCxcclxuICAgIG1heFdpZHRoOiBcIjEwMCVcIixcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIC8vIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgd2lkdGg6IFwiMTAwJSAhaW1wb3J0YW50XCIsIC8vIE92ZXJyaWRlcyBpbmxpbmUtc3R5bGVcclxuICAgICAgbWluV2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBoZWlnaHQ6IDUwLFxyXG4gICAgLy8gcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmdldENvbnRyYXN0VGV4dCh0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCksXHJcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBCT1JERVJfUkFESVVTLFxyXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IEJPUkRFUl9SQURJVVMsXHJcbiAgICAvLyBib3JkZXI6IGAxcHggb3V0c2V0ICR7dGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyfWAsXHJcblxyXG4gICAgYm9yZGVyQm90dG9tOiAwLFxyXG4gICAgYm9yZGVyUmlnaHQ6IDAsXHJcbiAgICBib3JkZXJMZWZ0OiAwLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICB9LFxyXG4gIHN0ZXBwZXI6IHtcclxuICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IEJPUkRFUl9SQURJVVMsXHJcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogQk9SREVSX1JBRElVUyxcclxuICAgIG9wYWNpdHk6IDAuOSxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0KSxcclxuICB9LFxyXG4gIGZvY3VzVmlzaWJsZToge30sXHJcbiAgaW1nOiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgbWluV2lkdGg6IE1JTl9XSURUSCxcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDIwMG1zIGVhc2UtaW4tb3V0XCIsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcblxyXG5cclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwieHNcIildOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLCAvLyBPdmVycmlkZXMgaW5saW5lLXN0eWxlXHJcbiAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICBtaW5XaWR0aDogXCJhdXRvXCIsXHJcbiAgICB9LFxyXG4gICAgXCImOmhvdmVyLCAmJGZvY3VzVmlzaWJsZVwiOiB7XHJcbiAgICAgIHpJbmRleDogMSxcclxuICAgICAgXCImICRpbWFnZUJhY2tkcm9wXCI6IHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBmbGV4OiAxLFxyXG4gIH0sXHJcbiAgaW1hZ2VCYWNrZHJvcDoge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIGxlZnQ6IDAsXHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgIG9wYWNpdHk6IDAuMTUsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJvcGFjaXR5XCIpLFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuZnVuY3Rpb24gU2xpZGVyQ2FyZChcclxuICB7XHJcbiAgICBpbWFnZURhdGEsXHJcbiAgICBpbWFnZUNvbnRhaW5lckNsYXNzLFxyXG4gICAgaGVpZ2h0ID0gNTAwLFxyXG4gICAgc2hvd0NvbnRyb2xzSW5UaXRsZSA9IHRydWUsXHJcbiAgICBsb29wID0gZmFsc2UsXHJcbiAgICBzaG93Q29udHJvbHMgPSB0cnVlLFxyXG4gICAgc2hvd1RpdGxlID0gZmFsc2UsXHJcbiAgICBzaG93QmFja2Ryb3AgPSBmYWxzZSxcclxuICB9OiBQcm9wcyxcclxuKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKVxyXG4gIGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IFJlYWN0LnVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2dvaW5nQmFjaywgc2V0R29pbmdCYWNrXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IG1heFN0ZXBzID0gaW1hZ2VEYXRhLmxlbmd0aFxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gY29udHJvbHMuc2V0KHtcclxuICAgIC8vICAgb3BhY2l0eTogMCxcclxuICAgIC8vICAgeDogXCItMTAwcHhcIixcclxuICAgIC8vIH0pO1xyXG4gICAgY29udHJvbHMuc3RhcnQoe1xyXG4gICAgICAvLyBvcGFjaXR5OiAxLFxyXG4gICAgICB5OiAwLFxyXG4gICAgICB4OiAwLFxyXG4gICAgICBkZWNlbGVyYXRlOiAzMDAwLFxyXG4gICAgfSlcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNvbnRyb2xzLnN0b3AoKVxyXG4gICAgfVxyXG4gIH0sIFthY3RpdmVTdGVwXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiB7XHJcbiAgICAgIHJldHVybiBwcmV2QWN0aXZlU3RlcCA9PT0gaW1hZ2VEYXRhLmxlbmd0aCAtIDEgPyAwIDogcHJldkFjdGl2ZVN0ZXAgKyAxXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PlxyXG4gICAgICBwcmV2QWN0aXZlU3RlcCA9PT0gMCA/IDAgOiBwcmV2QWN0aXZlU3RlcCAtIDFcclxuICAgIClcclxuICB9XHJcblxyXG4gIC8vICAgY29uc3QgaGFuZGxlU3RlcENoYW5nZSA9IChzdGVwOiBudW1iZXIpID0+IHtcclxuICAvLyAgICAgc2V0QWN0aXZlU3RlcChzdGVwKTtcclxuICAvLyAgIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgYmFja1RpbWVvdXQ6IG51bWJlclxyXG4gICAgbGV0IGZvcndhcmRUaW1lb3V0OiBudW1iZXJcclxuICAgIGZ1bmN0aW9uIGNsZWFyVGltZW91dHMoKSB7XHJcbiAgICAgIGlmIChiYWNrVGltZW91dCkge1xyXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoYmFja1RpbWVvdXQpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZvcndhcmRUaW1lb3V0KSB7XHJcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChmb3J3YXJkVGltZW91dClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGF1dG9QbGF5KHRpbWU6IG51bWJlcikge1xyXG4gICAgICBjb25zdCBsaW1pdCA9IG1heFN0ZXBzIC0gMVxyXG4gICAgICBpZiAoYWN0aXZlU3RlcCA9PT0gbGltaXQpIHtcclxuICAgICAgICBzZXRHb2luZ0JhY2sodHJ1ZSlcclxuICAgICAgICBiYWNrVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGhhbmRsZUJhY2soKVxyXG4gICAgICAgIH0sIHRpbWUpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGFjdGl2ZVN0ZXAgPT09IDApIHtcclxuICAgICAgICBzZXRHb2luZ0JhY2soZmFsc2UpXHJcbiAgICAgICAgZm9yd2FyZFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBoYW5kbGVOZXh0KClcclxuICAgICAgICB9LCB0aW1lKVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICAhZ29pbmdCYWNrICYmIGFjdGl2ZVN0ZXAgPCBsaW1pdFxyXG4gICAgICApIHtcclxuICAgICAgICBmb3J3YXJkVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGhhbmRsZU5leHQoKVxyXG4gICAgICAgIH0sIHRpbWUpXHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlU3RlcCAhPT0gMCAmJiBnb2luZ0JhY2sgJiYgYWN0aXZlU3RlcCA8IGxpbWl0KSB7XHJcbiAgICAgICAgYmFja1RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBoYW5kbGVCYWNrKClcclxuICAgICAgICB9LCB0aW1lKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobG9vcCAmJiBtYXhTdGVwcyA+IDEpIHtcclxuICAgICAgYXV0b1BsYXkoNzAwMClcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNsZWFyVGltZW91dHMoKVxyXG4gICAgfVxyXG4gIH0sIFthY3RpdmVTdGVwLCBtYXhTdGVwcywgbG9vcF0pXHJcblxyXG4gIGNvbnN0IHNob3VsZFNob3dDb250cm9sc0luVGl0bGUgPSBzaG93Q29udHJvbHNJblRpdGxlICYmIG1heFN0ZXBzID4gMVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2xpZGVyQ2FyZFJvb3R9PlxyXG4gICAgICB7c2hvd1RpdGxlICYmXHJcbiAgICAgICAgPFBhcGVyIHNxdWFyZSBlbGV2YXRpb249ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMlwiXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImg0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c2hvdWxkU2hvd0NvbnRyb2xzSW5UaXRsZSAmJlxyXG4gICAgICAgICAgICAgIDxTbGlkZXJCYWNrQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gMH1cclxuICAgICAgICAgICAgICAgIGhhbmRsZUJhY2s9e2hhbmRsZUJhY2t9XHJcbiAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIHtpbWFnZURhdGFbYWN0aXZlU3RlcF0/LmxhYmVsfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIHtzaG91bGRTaG93Q29udHJvbHNJblRpdGxlICYmXHJcbiAgICAgICAgICAgICAgPFNsaWRlck5leHRCdXR0b25cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVTdGVwID09PSBtYXhTdGVwcyAtIDF9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVOZXh0PXtoYW5kbGVOZXh0fVxyXG4gICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvUGFwZXI+fVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtpbWFnZUNvbnRhaW5lckNsYXNzfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgbWluV2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8QW5pbWF0ZVNoYXJlZExheW91dD5cclxuICAgICAgICAgIHtpbWFnZURhdGEubWFwKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IGFjdGl2ZVN0ZXApIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIHJldHVybiA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIGxheW91dFxyXG4gICAgICAgICAgICAgIGxheW91dElkPVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICB0aXRsZT17ZGF0YT8ubGFiZWx9XHJcbiAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7ZGF0YS5pbWdQYXRofSlgLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYmFja2dyb3VuZCAxcyBlYXNlLWluXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciAwXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBpbml0aWFsPXtnb2luZ0JhY2tcclxuICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICB4OiAtMTAwLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICAgIHg6IDEwMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZXhpdD17Z29pbmdCYWNrXHJcbiAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgeDogMTAwLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgIHg6IC0xMDAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiA1NTAsIGRhbXBpbmc6IDIwIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzaG93QmFja2Ryb3AgJiZcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUJhY2tkcm9wfSAvPn1cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9BbmltYXRlU2hhcmVkTGF5b3V0PlxyXG4gICAgICAgIHsvKiA8bW90aW9uLmRpdlxyXG4gICAgICAgICAga2V5PXthY3RpdmVTdGVwfVxyXG4gICAgICAgICAgdGl0bGU9e2ltYWdlRGF0YVthY3RpdmVTdGVwXT8ubGFiZWx9XHJcbiAgICAgICAgICByb2xlPVwiaW1nXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1pbldpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGB1cmwoJHtpbWFnZURhdGFbYWN0aXZlU3RlcF0uaW1nUGF0aH0pYCxcclxuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJiYWNrZ3JvdW5kIDFzIGVhc2UtaW5cIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciAwXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiBbMC41LCAwXSB9fVxyXG4gICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XHJcbiAgICAgICAgICAvLyBhbmltYXRlPXt7IG9wYWNpdHk6IFswLjUsIDAuOCwgMV0gfX1cclxuICAgICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgICAgZWFzaW5nczogW1wiZWFzZUluXCIsIFwiZWFzZU91dFwiXSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDAuOSxcclxuICAgICAgICAgICAgdHlwZTogXCJ0d2VlblwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIC8vIHRyYW5zaXRpb249e3sgdHlwZTogXCJpbmVydGlhXCIsIHZlbG9jaXR5OiAxIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtzaG93QmFja2Ryb3AgJiZcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQmFja2Ryb3B9IC8+fVxyXG4gICAgICAgIDwvbW90aW9uLmRpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8PlxyXG4gICAgICAgIHsvKiA8U2hvd0hpZGVJbWFnZSBzaG93PXt0cnVlfT5cclxuICAgICAgICAgIDxJbWdcclxuICAgICAgICAgICAgdXJsPXtpbWFnZURhdGFbYWN0aXZlU3RlcF0uaW1nUGF0aH1cclxuICAgICAgICAgICAgdGl0bGU9e2ltYWdlRGF0YVthY3RpdmVTdGVwXS5sYWJlbH1cclxuICAgICAgICAgICAgcm9sZT1cImltZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUJhY2tkcm9wfSAvPlxyXG4gICAgICAgICAgPC9JbWc+XHJcbiAgICAgICAgPC9TaG93SGlkZUltYWdlPiAqL31cclxuICAgICAgPC8+XHJcbiAgICAgIHtzaG93Q29udHJvbHMgJiYgbWF4U3RlcHMgPiAxICYmXHJcbiAgICAgICAgPE1vYmlsZVN0ZXBwZXJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGVwcGVyfVxyXG4gICAgICAgICAgc3RlcHM9e21heFN0ZXBzfVxyXG4gICAgICAgICAgcG9zaXRpb249XCJzdGF0aWNcIlxyXG4gICAgICAgICAgdmFyaWFudD1cInByb2dyZXNzXCJcclxuICAgICAgICAgIExpbmVhclByb2dyZXNzUHJvcHM9e3tcclxuICAgICAgICAgICAgY29sb3I6IFwic2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgYWN0aXZlU3RlcD17YWN0aXZlU3RlcH1cclxuICAgICAgICAgIGJhY2tCdXR0b249ezxTbGlkZXJCYWNrQnV0dG9uXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwfVxyXG4gICAgICAgICAgICBoYW5kbGVCYWNrPXtoYW5kbGVCYWNrfVxyXG4gICAgICAgICAgLz59XHJcbiAgICAgICAgICBuZXh0QnV0dG9uPXs8U2xpZGVyTmV4dEJ1dHRvblxyXG4gICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gbWF4U3RlcHMgLSAxfVxyXG4gICAgICAgICAgICBoYW5kbGVOZXh0PXtoYW5kbGVOZXh0fVxyXG4gICAgICAgICAgLz59XHJcbiAgICAgICAgLz59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNsaWRlck5leHRCdXR0b24oXHJcbiAgeyBkaXNhYmxlZCwgaGFuZGxlTmV4dCB9OiB7IGhhbmRsZU5leHQ6ICgpID0+IHZvaWQ7IGRpc2FibGVkOiBib29sZWFuIH0sXHJcbikge1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxyXG4gIHJldHVybiA8SWNvbkJ1dHRvblxyXG4gICAgc2l6ZT1cInNtYWxsXCJcclxuICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxyXG4gICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gID5cclxuICAgIHsvKiBOZXh0ICovfVxyXG4gICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gXCJydGxcIlxyXG4gICAgICA/IDxLZXlib2FyZEFycm93TGVmdCBjb2xvcj1cImluaGVyaXRcIiAvPlxyXG4gICAgICA6IDxLZXlib2FyZEFycm93UmlnaHQgY29sb3I9XCJpbmhlcml0XCIgLz59XHJcbiAgPC9JY29uQnV0dG9uPlxyXG59XHJcblxyXG5mdW5jdGlvbiBTbGlkZXJCYWNrQnV0dG9uKFxyXG4gIHsgZGlzYWJsZWQsIGhhbmRsZUJhY2sgfTogeyBoYW5kbGVCYWNrOiAoKSA9PiB2b2lkOyBkaXNhYmxlZDogYm9vbGVhbiB9LFxyXG4pIHtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcclxuICByZXR1cm4gPEljb25CdXR0b25cclxuICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgb25DbGljaz17aGFuZGxlQmFja31cclxuICAgIC8vIGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwfVxyXG4gICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gID5cclxuICAgIHt0aGVtZS5kaXJlY3Rpb24gPT09IFwicnRsXCJcclxuICAgICAgPyA8S2V5Ym9hcmRBcnJvd1JpZ2h0IGNvbG9yPVwiaW5oZXJpdFwiIC8+XHJcbiAgICAgIDogPEtleWJvYXJkQXJyb3dMZWZ0IGNvbG9yPVwiaW5oZXJpdFwiIC8+fVxyXG4gICAgey8qIEJhY2sgKi99XHJcbiAgPC9JY29uQnV0dG9uPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJDYXJkXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=