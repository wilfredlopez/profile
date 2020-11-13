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
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        backgroundPosition: "center 0"
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
        lineNumber: 327,
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
        lineNumber: 386,
        columnNumber: 23
      }
    }),
    nextButton: __jsx(SliderNextButton, {
      disabled: activeStep === maxSteps - 1,
      handleNext: handleNext,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 23
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
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
      lineNumber: 403,
      columnNumber: 10
    }
  }, theme.direction === "rtl" ? __jsx(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5___default.a, {
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 9
    }
  }) : __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
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
      lineNumber: 420,
      columnNumber: 10
    }
  }, theme.direction === "rtl" ? __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 9
    }
  }) : __jsx(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5___default.a, {
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL1NsaWRlckNhcmQudHN4Il0sIm5hbWVzIjpbIk1JTl9XSURUSCIsIkJPUkRFUl9SQURJVVMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJzbGlkZXJDYXJkUm9vdCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJmbGV4R3JvdyIsIm1hcmdpbiIsInBvc2l0aW9uIiwiYnJlYWtwb2ludHMiLCJkb3duIiwid2lkdGgiLCJoZWFkZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwiY29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJnZXRDb250cmFzdFRleHQiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b20iLCJib3JkZXJSaWdodCIsImJvcmRlckxlZnQiLCJzdGVwcGVyIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwib3BhY2l0eSIsImZvY3VzVmlzaWJsZSIsImltZyIsIm92ZXJmbG93IiwidHJhbnNpdGlvbiIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwiekluZGV4IiwidGl0bGUiLCJmbGV4IiwiaW1hZ2VCYWNrZHJvcCIsImxlZnQiLCJib3JkZXJSYWRpdXMiLCJzaGFwZSIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiY29tbW9uIiwiYmxhY2siLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsIlNsaWRlckNhcmQiLCJpbWFnZURhdGEiLCJpbWFnZUNvbnRhaW5lckNsYXNzIiwic2hvd0NvbnRyb2xzSW5UaXRsZSIsImxvb3AiLCJzaG93Q29udHJvbHMiLCJzaG93VGl0bGUiLCJzaG93QmFja2Ryb3AiLCJjbGFzc2VzIiwiY29udHJvbHMiLCJ1c2VBbmltYXRpb24iLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsIlJlYWN0IiwidXNlU3RhdGUiLCJnb2luZ0JhY2siLCJzZXRHb2luZ0JhY2siLCJtYXhTdGVwcyIsImxlbmd0aCIsInVzZUVmZmVjdCIsInN0YXJ0IiwieSIsIngiLCJkZWNlbGVyYXRlIiwic3RvcCIsImhhbmRsZU5leHQiLCJwcmV2QWN0aXZlU3RlcCIsImhhbmRsZUJhY2siLCJiYWNrVGltZW91dCIsImZvcndhcmRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0cyIsIndpbmRvdyIsImNsZWFyVGltZW91dCIsImF1dG9QbGF5IiwidGltZSIsImxpbWl0Iiwic2V0VGltZW91dCIsInNob3VsZFNob3dDb250cm9sc0luVGl0bGUiLCJsYWJlbCIsIm1hcCIsImRhdGEiLCJpbmRleCIsImltZ1BhdGgiLCJiYWNrZ3JvdW5kUmVwZWF0Iiwib2JqZWN0Rml0IiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJTbGlkZXJOZXh0QnV0dG9uIiwiZGlzYWJsZWQiLCJ1c2VUaGVtZSIsImRpcmVjdGlvbiIsIlNsaWRlckJhY2tCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7O0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFtQkE7QUFDQSxNQUFNQSxTQUFTLEdBQUcsR0FBbEI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsQ0FBdEIsQyxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUVDLEtBQUQsS0FBWTtBQUN2Q0MsZ0JBQWMsRUFBRTtBQUNkQyxZQUFRLEVBQUVOLFNBREk7QUFFZE8sWUFBUSxFQUFFLE1BRkk7QUFHZEMsWUFBUSxFQUFFLENBSEk7QUFJZEMsVUFBTSxFQUFFLE1BSk07QUFLZDtBQUNBQyxZQUFRLEVBQUUsVUFOSTtBQU9kLEtBQUNOLEtBQUssQ0FBQ08sV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxHQUFnQztBQUM5QkMsV0FBSyxFQUFFLGlCQUR1QjtBQUNKO0FBQzFCUCxjQUFRLEVBQUU7QUFGb0I7QUFQbEIsR0FEdUI7QUFhdkNRLFFBQU0sRUFBRTtBQUNOQyxXQUFPLEVBQUUsTUFESDtBQUVOQyxjQUFVLEVBQUUsUUFGTjtBQUdOQyxrQkFBYyxFQUFFLFFBSFY7QUFJTkMsVUFBTSxFQUFFLEVBSkY7QUFLTjtBQUNBQyxTQUFLLEVBQUVmLEtBQUssQ0FBQ2dCLE9BQU4sQ0FBY0MsVUFBZCxDQUF5QkMsT0FOMUI7QUFPTkQsY0FBVSxFQUFFakIsS0FBSyxDQUFDZ0IsT0FBTixDQUFjRyxlQUFkLENBQThCbkIsS0FBSyxDQUFDZ0IsT0FBTixDQUFjQyxVQUFkLENBQXlCQyxPQUF2RCxDQVBOO0FBUU5FLHVCQUFtQixFQUFFdkIsYUFSZjtBQVNOd0Isd0JBQW9CLEVBQUV4QixhQVRoQjtBQVVOO0FBRUF5QixnQkFBWSxFQUFFLENBWlI7QUFhTkMsZUFBVyxFQUFFLENBYlA7QUFjTkMsY0FBVSxFQUFFLENBZE47QUFlTmxCLFlBQVEsRUFBRTtBQWZKLEdBYitCO0FBOEJ2Q21CLFNBQU8sRUFBRTtBQUNQQywwQkFBc0IsRUFBRTdCLGFBRGpCO0FBRVA4QiwyQkFBdUIsRUFBRTlCLGFBRmxCO0FBR1ArQixXQUFPLEVBQUUsR0FIRjtBQUlQYixTQUFLLEVBQUVmLEtBQUssQ0FBQ2dCLE9BQU4sQ0FBY0MsVUFBZCxDQUF5QkMsT0FKekI7QUFLUEQsY0FBVSxFQUFFakIsS0FBSyxDQUFDZ0IsT0FBTixDQUFjRyxlQUFkLENBQThCbkIsS0FBSyxDQUFDZ0IsT0FBTixDQUFjQyxVQUFkLENBQXlCQyxPQUF2RDtBQUxMLEdBOUI4QjtBQXFDdkNXLGNBQVksRUFBRSxFQXJDeUI7QUFzQ3ZDQyxLQUFHLEVBQUU7QUFDSGhCLFVBQU0sRUFBRSxNQURMO0FBRUhILFdBQU8sRUFBRSxPQUZOO0FBR0hSLFlBQVEsRUFBRSxNQUhQO0FBSUhELFlBQVEsRUFBRU4sU0FKUDtBQUtIbUMsWUFBUSxFQUFFLFFBTFA7QUFNSHRCLFNBQUssRUFBRSxNQU5KO0FBT0hILFlBQVEsRUFBRSxVQVBQO0FBUUgwQixjQUFVLEVBQUUsdUJBUlQ7QUFTSEMsc0JBQWtCLEVBQUUsUUFUakI7QUFVSEMsa0JBQWMsRUFBRSxPQVZiO0FBYUgsS0FBQ2xDLEtBQUssQ0FBQ08sV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxHQUFnQztBQUM5QkMsV0FBSyxFQUFFLGlCQUR1QjtBQUNKO0FBQzFCSyxZQUFNLEVBQUUsR0FGc0I7QUFHOUJaLGNBQVEsRUFBRTtBQUhvQixLQWI3QjtBQWtCSCwrQkFBMkI7QUFDekJpQyxZQUFNLEVBQUUsQ0FEaUI7QUFFekIsMEJBQW9CO0FBQ2xCUCxlQUFPLEVBQUU7QUFEUztBQUZLO0FBbEJ4QixHQXRDa0M7QUErRHZDUSxPQUFLLEVBQUU7QUFDTHpCLFdBQU8sRUFBRSxNQURKO0FBRUxFLGtCQUFjLEVBQUUsZUFGWDtBQUdMRCxjQUFVLEVBQUUsUUFIUDtBQUlMeUIsUUFBSSxFQUFFO0FBSkQsR0EvRGdDO0FBcUV2Q0MsZUFBYSxFQUFFO0FBQ2JoQyxZQUFRLEVBQUUsVUFERztBQUViaUMsUUFBSSxFQUFFLENBRk87QUFHYkMsZ0JBQVksRUFBRXhDLEtBQUssQ0FBQ3lDLEtBQU4sQ0FBWUQsWUFIYjtBQUliRSxTQUFLLEVBQUUsQ0FKTTtBQUtiQyxPQUFHLEVBQUUsQ0FMUTtBQU1iQyxVQUFNLEVBQUUsQ0FOSztBQU9iQyxtQkFBZSxFQUFFN0MsS0FBSyxDQUFDZ0IsT0FBTixDQUFjOEIsTUFBZCxDQUFxQkMsS0FQekI7QUFRYm5CLFdBQU8sRUFBRSxJQVJJO0FBU2JJLGNBQVUsRUFBRWhDLEtBQUssQ0FBQ2dELFdBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLFNBQXpCO0FBVEM7QUFyRXdCLENBQVosQ0FBRCxDQUE1Qjs7QUFrRkEsU0FBU0MsVUFBVCxDQUNFO0FBQ0VDLFdBREY7QUFFRUMscUJBRkY7QUFHRXRDLFFBQU0sR0FBRyxHQUhYO0FBSUV1QyxxQkFBbUIsR0FBRyxJQUp4QjtBQUtFQyxNQUFJLEdBQUcsS0FMVDtBQU1FQyxjQUFZLEdBQUcsSUFOakI7QUFPRUMsV0FBUyxHQUFHLEtBUGQ7QUFRRUMsY0FBWSxHQUFHO0FBUmpCLENBREYsRUFXRTtBQUFBOztBQUFBOztBQUNBLFFBQU1DLE9BQU8sR0FBRzVELFNBQVMsRUFBekI7QUFDQSxRQUFNNkQsUUFBUSxHQUFHQyxrRUFBWSxFQUE3QjtBQUNBLFFBQU0sQ0FBQ0MsVUFBRCxFQUFhQyxhQUFiLElBQThCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUFwQztBQUNBLFFBQU0sQ0FBQ0MsU0FBRCxFQUFZQyxZQUFaLElBQTRCSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUFsQztBQUNBLFFBQU1HLFFBQVEsR0FBR2hCLFNBQVMsQ0FBQ2lCLE1BQTNCO0FBRUFMLDhDQUFLLENBQUNNLFNBQU4sQ0FBZ0IsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBVixZQUFRLENBQUNXLEtBQVQsQ0FBZTtBQUNiO0FBQ0FDLE9BQUMsRUFBRSxDQUZVO0FBR2JDLE9BQUMsRUFBRSxDQUhVO0FBSWJDLGdCQUFVLEVBQUU7QUFKQyxLQUFmO0FBTUEsV0FBTyxNQUFNO0FBQ1hkLGNBQVEsQ0FBQ2UsSUFBVDtBQUNELEtBRkQ7QUFHRCxHQWRELEVBY0csQ0FBQ2IsVUFBRCxDQWRIOztBQWdCQSxRQUFNYyxVQUFVLEdBQUcsTUFBTTtBQUN2QmIsaUJBQWEsQ0FBRWMsY0FBRCxJQUFvQjtBQUNoQyxhQUFPQSxjQUFjLEtBQUt6QixTQUFTLENBQUNpQixNQUFWLEdBQW1CLENBQXRDLEdBQTBDLENBQTFDLEdBQThDUSxjQUFjLEdBQUcsQ0FBdEU7QUFDRCxLQUZZLENBQWI7QUFHRCxHQUpEOztBQU1BLFFBQU1DLFVBQVUsR0FBRyxNQUFNO0FBQ3ZCZixpQkFBYSxDQUFFYyxjQUFELElBQ1pBLGNBQWMsS0FBSyxDQUFuQixHQUF1QixDQUF2QixHQUEyQkEsY0FBYyxHQUFHLENBRGpDLENBQWI7QUFHRCxHQUpELENBN0JBLENBbUNBO0FBQ0E7QUFDQTs7O0FBRUFiLDhDQUFLLENBQUNNLFNBQU4sQ0FBZ0IsTUFBTTtBQUNwQixRQUFJUyxXQUFKO0FBQ0EsUUFBSUMsY0FBSjs7QUFDQSxhQUFTQyxhQUFULEdBQXlCO0FBQ3ZCLFVBQUlGLFdBQUosRUFBaUI7QUFDZkcsY0FBTSxDQUFDQyxZQUFQLENBQW9CSixXQUFwQjtBQUNEOztBQUNELFVBQUlDLGNBQUosRUFBb0I7QUFDbEJFLGNBQU0sQ0FBQ0MsWUFBUCxDQUFvQkgsY0FBcEI7QUFDRDtBQUNGOztBQUVELGFBQVNJLFFBQVQsQ0FBa0JDLElBQWxCLEVBQWdDO0FBQzlCLFlBQU1DLEtBQUssR0FBR2xCLFFBQVEsR0FBRyxDQUF6Qjs7QUFDQSxVQUFJTixVQUFVLEtBQUt3QixLQUFuQixFQUEwQjtBQUN4Qm5CLG9CQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FZLG1CQUFXLEdBQUdHLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQixNQUFNO0FBQ3BDVCxvQkFBVTtBQUNYLFNBRmEsRUFFWE8sSUFGVyxDQUFkO0FBR0E7QUFDRDs7QUFDRCxVQUFJdkIsVUFBVSxLQUFLLENBQW5CLEVBQXNCO0FBQ3BCSyxvQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBYSxzQkFBYyxHQUFHRSxNQUFNLENBQUNLLFVBQVAsQ0FBa0IsTUFBTTtBQUN2Q1gsb0JBQVU7QUFDWCxTQUZnQixFQUVkUyxJQUZjLENBQWpCO0FBR0Q7O0FBQ0QsVUFDRSxDQUFDbkIsU0FBRCxJQUFjSixVQUFVLEdBQUd3QixLQUQ3QixFQUVFO0FBQ0FOLHNCQUFjLEdBQUdFLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQixNQUFNO0FBQ3ZDWCxvQkFBVTtBQUNYLFNBRmdCLEVBRWRTLElBRmMsQ0FBakI7QUFHRCxPQU5ELE1BTU8sSUFBSXZCLFVBQVUsS0FBSyxDQUFmLElBQW9CSSxTQUFwQixJQUFpQ0osVUFBVSxHQUFHd0IsS0FBbEQsRUFBeUQ7QUFDOURQLG1CQUFXLEdBQUdHLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQixNQUFNO0FBQ3BDVCxvQkFBVTtBQUNYLFNBRmEsRUFFWE8sSUFGVyxDQUFkO0FBR0Q7QUFDRjs7QUFDRCxRQUFJOUIsSUFBSSxJQUFJYSxRQUFRLEdBQUcsQ0FBdkIsRUFBMEI7QUFDeEJnQixjQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0Q7O0FBQ0QsV0FBTyxNQUFNO0FBQ1hILG1CQUFhO0FBQ2QsS0FGRDtBQUdELEdBN0NELEVBNkNHLENBQUNuQixVQUFELEVBQWFNLFFBQWIsRUFBdUJiLElBQXZCLENBN0NIO0FBK0NBLFFBQU1pQyx5QkFBeUIsR0FBR2xDLG1CQUFtQixJQUFJYyxRQUFRLEdBQUcsQ0FBcEU7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFFVCxPQUFPLENBQUN6RCxjQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d1RCxTQUFTLElBQ1IsTUFBQywrREFBRDtBQUFPLFVBQU0sTUFBYjtBQUFjLGFBQVMsRUFBRSxDQUF6QjtBQUE0QixhQUFTLEVBQUVFLE9BQU8sQ0FBQ2hELE1BQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsV0FBTyxFQUFDLFdBRFY7QUFFRSxhQUFTLEVBQUMsSUFGWjtBQUdFLGFBQVMsRUFBRWdELE9BQU8sQ0FBQ3RCLEtBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR21ELHlCQUF5QixJQUN4QixNQUFDLGdCQUFEO0FBQ0UsWUFBUSxFQUFFMUIsVUFBVSxLQUFLLENBRDNCO0FBRUUsY0FBVSxFQUFFZ0IsVUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUNHMUIsU0FBUyxDQUFDVSxVQUFELENBRFosMERBQ0csc0JBQXVCMkIsS0FEMUIsQ0FWRixFQWFHRCx5QkFBeUIsSUFDeEIsTUFBQyxnQkFBRDtBQUNFLFlBQVEsRUFBRTFCLFVBQVUsS0FBS00sUUFBUSxHQUFHLENBRHRDO0FBRUUsY0FBVSxFQUFFUSxVQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkSixDQURGLENBRkosRUF1QkU7QUFDRSxhQUFTLEVBQUV2QixtQkFEYjtBQUVFLFNBQUssRUFBRTtBQUNMdEMsWUFBTSxFQUFFQSxNQURIO0FBRUxpQixjQUFRLEVBQUUsUUFGTDtBQUdMN0IsY0FBUSxFQUFFO0FBSEwsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUUsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dpRCxTQUFTLENBQUNzQyxHQUFWLENBQWMsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWlCO0FBQzlCLFFBQUlBLEtBQUssS0FBSzlCLFVBQWQsRUFBMEIsT0FBTyxJQUFQO0FBQzFCLFdBQU8sTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDTCxZQUFNLE1BREQ7QUFFTCxjQUFRLEVBQUMsU0FGSjtBQUdMLFNBQUcsRUFBRThCLEtBSEE7QUFJTCxXQUFLLEVBQUVELElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFRixLQUpSO0FBS0wsVUFBSSxFQUFDLEtBTEE7QUFNTCxXQUFLLEVBQUU7QUFDTDFFLGNBQU0sRUFBRUEsTUFESDtBQUVMTCxhQUFLLEVBQUUsTUFGRjtBQUdMUCxnQkFBUSxFQUFFLE1BSEw7QUFJTDZCLGdCQUFRLEVBQUUsUUFKTDtBQUtMZCxrQkFBVSxFQUFHLE9BQU15RSxJQUFJLENBQUNFLE9BQVEsR0FMM0I7QUFNTHRGLGdCQUFRLEVBQUUsVUFOTDtBQU9MMEIsa0JBQVUsRUFBRSx1QkFQUDtBQVFMRSxzQkFBYyxFQUFFLE9BUlg7QUFTTDJELHdCQUFnQixFQUFFLFdBVGI7QUFVTEMsaUJBQVMsRUFBRSxPQVZOO0FBV0w3RCwwQkFBa0IsRUFBRTtBQVhmLE9BTkY7QUFvQkwsYUFBTyxFQUFFZ0MsU0FBUyxHQUNkO0FBQ0FPLFNBQUMsRUFBRSxDQUFDO0FBREosT0FEYyxHQUlkO0FBQ0E7QUFDQUEsU0FBQyxFQUFFO0FBRkgsT0F4QkM7QUE0QkwsVUFBSSxFQUFFUCxTQUFTLEdBQ1g7QUFDQU8sU0FBQyxFQUFFO0FBREgsT0FEVyxHQUlYO0FBQ0FBLFNBQUMsRUFBRSxDQUFDO0FBREosT0FoQ0M7QUFtQ0wsYUFBTyxFQUFFYixRQW5DSjtBQW9DTCxnQkFBVSxFQUFFO0FBQUVvQyxZQUFJLEVBQUUsUUFBUjtBQUFrQkMsaUJBQVMsRUFBRSxHQUE3QjtBQUFrQ0MsZUFBTyxFQUFFO0FBQTNDLE9BcENQO0FBcUNMLGVBQVMsRUFBRXZDLE9BQU8sQ0FBQzVCLEdBckNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0F1Q0oyQixZQUFZLElBQ1g7QUFBTSxlQUFTLEVBQUVDLE9BQU8sQ0FBQ3BCLGFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUF4Q0csQ0FBUDtBQTBDRCxHQTVDQSxDQURILENBUkYsQ0F2QkYsRUErR0Usa0VBL0dGLEVBMkhHaUIsWUFBWSxJQUFJWSxRQUFRLEdBQUcsQ0FBM0IsSUFDQyxNQUFDLHVFQUFEO0FBQ0UsYUFBUyxFQUFFVCxPQUFPLENBQUNqQyxPQURyQjtBQUVFLFNBQUssRUFBRTBDLFFBRlQ7QUFHRSxZQUFRLEVBQUMsUUFIWDtBQUlFLFdBQU8sRUFBQyxVQUpWO0FBS0UsdUJBQW1CLEVBQUU7QUFDbkJwRCxXQUFLLEVBQUU7QUFEWSxLQUx2QjtBQVFFLGNBQVUsRUFBRThDLFVBUmQ7QUFTRSxjQUFVLEVBQUUsTUFBQyxnQkFBRDtBQUNWLGNBQVEsRUFBRUEsVUFBVSxLQUFLLENBRGY7QUFFVixnQkFBVSxFQUFFZ0IsVUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVGQ7QUFhRSxjQUFVLEVBQUUsTUFBQyxnQkFBRDtBQUNWLGNBQVEsRUFBRWhCLFVBQVUsS0FBS00sUUFBUSxHQUFHLENBRDFCO0FBRVYsZ0JBQVUsRUFBRVEsVUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BYmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVISixDQURGO0FBaUpEOztHQXBQUXpCLFU7VUFZU3BELFMsRUFDQzhELDBEOzs7S0FiVlYsVTs7QUFzUFQsU0FBU2dELGdCQUFULENBQ0U7QUFBRUMsVUFBRjtBQUFZeEI7QUFBWixDQURGLEVBRUU7QUFBQTs7QUFDQSxRQUFNM0UsS0FBSyxHQUFHb0cseUVBQVEsRUFBdEI7QUFDQSxTQUFPLE1BQUMsNERBQUQ7QUFDTCxRQUFJLEVBQUMsT0FEQTtBQUVMLFNBQUssRUFBQyxTQUZEO0FBR0wsV0FBTyxFQUFFekIsVUFISjtBQUlMLFlBQVEsRUFBRXdCLFFBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9KbkcsS0FBSyxDQUFDcUcsU0FBTixLQUFvQixLQUFwQixHQUNHLE1BQUMsMkVBQUQ7QUFBbUIsU0FBSyxFQUFDLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESCxHQUVHLE1BQUMsNEVBQUQ7QUFBb0IsU0FBSyxFQUFDLFNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUQyxDQUFQO0FBV0Q7O0lBZlFILGdCO1VBR09FLGlFOzs7TUFIUEYsZ0I7O0FBaUJULFNBQVNJLGdCQUFULENBQ0U7QUFBRUgsVUFBRjtBQUFZdEI7QUFBWixDQURGLEVBRUU7QUFBQTs7QUFDQSxRQUFNN0UsS0FBSyxHQUFHb0cseUVBQVEsRUFBdEI7QUFDQSxTQUFPLE1BQUMsNERBQUQ7QUFDTCxRQUFJLEVBQUMsT0FEQTtBQUVMLFNBQUssRUFBQyxTQUZEO0FBR0wsV0FBTyxFQUFFdkIsVUFISixDQUlMO0FBSks7QUFLTCxZQUFRLEVBQUVzQixRQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPSm5HLEtBQUssQ0FBQ3FHLFNBQU4sS0FBb0IsS0FBcEIsR0FDRyxNQUFDLDRFQUFEO0FBQW9CLFNBQUssRUFBQyxTQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREgsR0FFRyxNQUFDLDJFQUFEO0FBQW1CLFNBQUssRUFBQyxTQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEMsQ0FBUDtBQVlEOztJQWhCUUMsZ0I7VUFHT0YsaUU7OztNQUhQRSxnQjtBQWtCTXBELHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzLjFjNjI0MjU5MTNhMDFiYzlkODI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCJcclxuaW1wb3J0IE1vYmlsZVN0ZXBwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01vYmlsZVN0ZXBwZXJcIlxyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCJcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIlxyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0xlZnQgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93TGVmdFwiXHJcbmltcG9ydCBLZXlib2FyZEFycm93UmlnaHQgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93UmlnaHRcIlxyXG5pbXBvcnQgeyBBbmltYXRlU2hhcmVkTGF5b3V0IH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG4vLyBpbXBvcnQgc3R5bGVkLCB7XHJcbi8vICAgIGtleWZyYW1lc1xyXG4vLyAgIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuXHJcbi8vIGNvbnN0IHJvdGF0ZSA9IGtleWZyYW1lc2BcclxuLy8gICBmcm9tIHtcclxuLy8gICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgdG8ge1xyXG4vLyAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuLy8gICB9XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTaG93SGlkZUltYWdlID0gc3R5bGVkLmRpdjx7IHNob3c6IGJvb2xlYW4gfT5gXHJcbi8vICAgICAvKiBkaXNwbGF5OiAkeyhwcm9wcykgPT4gcHJvcHMuc2hvdyA/IFwiYmxvY2tcIiA6IFwibm9uZVwifTsgKi9cclxuLy8gICAgIC8qIHRyYW5zZm9ybTogJHsocHJvcHMpID0+XHJcbi8vICAgcHJvcHMuc2hvdyA/IFwidHJhbnNsYXRlKDApXCIgOiBcInRyYW5zbGF0ZSgtMTAwMDAlKVwifTsgKi9cclxuLy8gICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcclxuLy8gICAgIC8qIGFuaW1hdGlvbjogJHtyb3RhdGV9IDJzIGxpbmVhcjsgKi9cclxuLy8gICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbi8vIGA7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlVG9TbGlkZXIge1xyXG4gIGxhYmVsPzogc3RyaW5nXHJcbiAgaW1nUGF0aDogc3RyaW5nXHJcbn1cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaW1hZ2VEYXRhOiBJbWFnZVRvU2xpZGVyW11cclxuICBoZWlnaHQ/OiBudW1iZXJcclxuICB3aWR0aD86IG51bWJlclxyXG4gIGxvb3A/OiBib29sZWFuXHJcbiAgc2hvd0NvbnRyb2xzPzogYm9vbGVhblxyXG4gIHNob3dCYWNrZHJvcD86IGJvb2xlYW5cclxuICBzaG93Q29udHJvbHNJblRpdGxlPzogYm9vbGVhblxyXG4gIHNob3dUaXRsZT86IGJvb2xlYW5cclxuICBpbWFnZUNvbnRhaW5lckNsYXNzPzogc3RyaW5nXHJcbn1cclxuXHJcbi8vIGNvbnN0IE1BWF9IRUlHSFQgPSA2MDA7XHJcbmNvbnN0IE1JTl9XSURUSCA9IDUwMFxyXG5jb25zdCBCT1JERVJfUkFESVVTID0gNlxyXG5cclxuLy8gY29uc3QgSW1nID0gc3R5bGVkLmRpdjx7IHVybDogc3RyaW5nIH0+YFxyXG4vLyAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbi8vICAgICBtaW4td2lkdGg6ICR7TUlOX1dJRFRIfXB4O1xyXG4vLyAgICAgbWluLWhlaWdodDogNjAwcHg7XHJcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB1cmwoJHsocHJvcHMpID0+IHByb3BzLnVybH0pO1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxcyBlYXNlLWluO1xyXG4vLyAgICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4vLyAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuLy8gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4vLyBgO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgc2xpZGVyQ2FyZFJvb3Q6IHtcclxuICAgIG1pbldpZHRoOiBNSU5fV0lEVEgsXHJcbiAgICBtYXhXaWR0aDogXCIxMDAlXCIsXHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAvLyBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwieHNcIildOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLCAvLyBPdmVycmlkZXMgaW5saW5lLXN0eWxlXHJcbiAgICAgIG1pbldpZHRoOiBcImF1dG9cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBoZWFkZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgaGVpZ2h0OiA1MCxcclxuICAgIC8vIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5nZXRDb250cmFzdFRleHQodGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQpLFxyXG4gICAgYm9yZGVyVG9wTGVmdFJhZGl1czogQk9SREVSX1JBRElVUyxcclxuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBCT1JERVJfUkFESVVTLFxyXG4gICAgLy8gYm9yZGVyOiBgMXB4IG91dHNldCAke3RoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcn1gLFxyXG5cclxuICAgIGJvcmRlckJvdHRvbTogMCxcclxuICAgIGJvcmRlclJpZ2h0OiAwLFxyXG4gICAgYm9yZGVyTGVmdDogMCxcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgfSxcclxuICBzdGVwcGVyOiB7XHJcbiAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiBCT1JERVJfUkFESVVTLFxyXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IEJPUkRFUl9SQURJVVMsXHJcbiAgICBvcGFjaXR5OiAwLjksXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmdldENvbnRyYXN0VGV4dCh0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCksXHJcbiAgfSxcclxuICBmb2N1c1Zpc2libGU6IHt9LFxyXG4gIGltZzoge1xyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgIG1heFdpZHRoOiBcIjEwMCVcIixcclxuICAgIG1pbldpZHRoOiBNSU5fV0lEVEgsXHJcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAyMDBtcyBlYXNlLWluLW91dFwiLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG5cclxuXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xyXG4gICAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIiwgLy8gT3ZlcnJpZGVzIGlubGluZS1zdHlsZVxyXG4gICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgbWluV2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgfSxcclxuICAgIFwiJjpob3ZlciwgJiRmb2N1c1Zpc2libGVcIjoge1xyXG4gICAgICB6SW5kZXg6IDEsXHJcbiAgICAgIFwiJiAkaW1hZ2VCYWNrZHJvcFwiOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgZmxleDogMSxcclxuICB9LFxyXG4gIGltYWdlQmFja2Ryb3A6IHtcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICByaWdodDogMCxcclxuICAgIHRvcDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICBvcGFjaXR5OiAwLjE1LFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwib3BhY2l0eVwiKSxcclxuICB9LFxyXG59KSlcclxuXHJcbmZ1bmN0aW9uIFNsaWRlckNhcmQoXHJcbiAge1xyXG4gICAgaW1hZ2VEYXRhLFxyXG4gICAgaW1hZ2VDb250YWluZXJDbGFzcyxcclxuICAgIGhlaWdodCA9IDUwMCxcclxuICAgIHNob3dDb250cm9sc0luVGl0bGUgPSB0cnVlLFxyXG4gICAgbG9vcCA9IGZhbHNlLFxyXG4gICAgc2hvd0NvbnRyb2xzID0gdHJ1ZSxcclxuICAgIHNob3dUaXRsZSA9IGZhbHNlLFxyXG4gICAgc2hvd0JhY2tkcm9wID0gZmFsc2UsXHJcbiAgfTogUHJvcHMsXHJcbikge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IGNvbnRyb2xzID0gdXNlQW5pbWF0aW9uKClcclxuICBjb25zdCBbYWN0aXZlU3RlcCwgc2V0QWN0aXZlU3RlcF0gPSBSZWFjdC51c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtnb2luZ0JhY2ssIHNldEdvaW5nQmFja10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBtYXhTdGVwcyA9IGltYWdlRGF0YS5sZW5ndGhcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbnRyb2xzLnNldCh7XHJcbiAgICAvLyAgIG9wYWNpdHk6IDAsXHJcbiAgICAvLyAgIHg6IFwiLTEwMHB4XCIsXHJcbiAgICAvLyB9KTtcclxuICAgIGNvbnRyb2xzLnN0YXJ0KHtcclxuICAgICAgLy8gb3BhY2l0eTogMSxcclxuICAgICAgeTogMCxcclxuICAgICAgeDogMCxcclxuICAgICAgZGVjZWxlcmF0ZTogMzAwMCxcclxuICAgIH0pXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjb250cm9scy5zdG9wKClcclxuICAgIH1cclxuICB9LCBbYWN0aXZlU3RlcF0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4ge1xyXG4gICAgICByZXR1cm4gcHJldkFjdGl2ZVN0ZXAgPT09IGltYWdlRGF0YS5sZW5ndGggLSAxID8gMCA6IHByZXZBY3RpdmVTdGVwICsgMVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJhY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT5cclxuICAgICAgcHJldkFjdGl2ZVN0ZXAgPT09IDAgPyAwIDogcHJldkFjdGl2ZVN0ZXAgLSAxXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvLyAgIGNvbnN0IGhhbmRsZVN0ZXBDaGFuZ2UgPSAoc3RlcDogbnVtYmVyKSA9PiB7XHJcbiAgLy8gICAgIHNldEFjdGl2ZVN0ZXAoc3RlcCk7XHJcbiAgLy8gICB9O1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGJhY2tUaW1lb3V0OiBudW1iZXJcclxuICAgIGxldCBmb3J3YXJkVGltZW91dDogbnVtYmVyXHJcbiAgICBmdW5jdGlvbiBjbGVhclRpbWVvdXRzKCkge1xyXG4gICAgICBpZiAoYmFja1RpbWVvdXQpIHtcclxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGJhY2tUaW1lb3V0KVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChmb3J3YXJkVGltZW91dCkge1xyXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoZm9yd2FyZFRpbWVvdXQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhdXRvUGxheSh0aW1lOiBudW1iZXIpIHtcclxuICAgICAgY29uc3QgbGltaXQgPSBtYXhTdGVwcyAtIDFcclxuICAgICAgaWYgKGFjdGl2ZVN0ZXAgPT09IGxpbWl0KSB7XHJcbiAgICAgICAgc2V0R29pbmdCYWNrKHRydWUpXHJcbiAgICAgICAgYmFja1RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBoYW5kbGVCYWNrKClcclxuICAgICAgICB9LCB0aW1lKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGlmIChhY3RpdmVTdGVwID09PSAwKSB7XHJcbiAgICAgICAgc2V0R29pbmdCYWNrKGZhbHNlKVxyXG4gICAgICAgIGZvcndhcmRUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgaGFuZGxlTmV4dCgpXHJcbiAgICAgICAgfSwgdGltZSlcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIWdvaW5nQmFjayAmJiBhY3RpdmVTdGVwIDwgbGltaXRcclxuICAgICAgKSB7XHJcbiAgICAgICAgZm9yd2FyZFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBoYW5kbGVOZXh0KClcclxuICAgICAgICB9LCB0aW1lKVxyXG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZVN0ZXAgIT09IDAgJiYgZ29pbmdCYWNrICYmIGFjdGl2ZVN0ZXAgPCBsaW1pdCkge1xyXG4gICAgICAgIGJhY2tUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgaGFuZGxlQmFjaygpXHJcbiAgICAgICAgfSwgdGltZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGxvb3AgJiYgbWF4U3RlcHMgPiAxKSB7XHJcbiAgICAgIGF1dG9QbGF5KDcwMDApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhclRpbWVvdXRzKClcclxuICAgIH1cclxuICB9LCBbYWN0aXZlU3RlcCwgbWF4U3RlcHMsIGxvb3BdKVxyXG5cclxuICBjb25zdCBzaG91bGRTaG93Q29udHJvbHNJblRpdGxlID0gc2hvd0NvbnRyb2xzSW5UaXRsZSAmJiBtYXhTdGVwcyA+IDFcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNsaWRlckNhcmRSb290fT5cclxuICAgICAge3Nob3dUaXRsZSAmJlxyXG4gICAgICAgIDxQYXBlciBzcXVhcmUgZWxldmF0aW9uPXszfSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIlxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Nob3VsZFNob3dDb250cm9sc0luVGl0bGUgJiZcclxuICAgICAgICAgICAgICA8U2xpZGVyQmFja0J1dHRvblxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVN0ZXAgPT09IDB9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVCYWNrPXtoYW5kbGVCYWNrfVxyXG4gICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICB7aW1hZ2VEYXRhW2FjdGl2ZVN0ZXBdPy5sYWJlbH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICB7c2hvdWxkU2hvd0NvbnRyb2xzSW5UaXRsZSAmJlxyXG4gICAgICAgICAgICAgIDxTbGlkZXJOZXh0QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gbWF4U3RlcHMgLSAxfVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlTmV4dD17aGFuZGxlTmV4dH1cclxuICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L1BhcGVyPn1cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17aW1hZ2VDb250YWluZXJDbGFzc31cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgIG1pbldpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEFuaW1hdGVTaGFyZWRMYXlvdXQ+XHJcbiAgICAgICAgICB7aW1hZ2VEYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBhY3RpdmVTdGVwKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICByZXR1cm4gPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICBsYXlvdXRcclxuICAgICAgICAgICAgICBsYXlvdXRJZD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e2RhdGE/LmxhYmVsfVxyXG4gICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYHVybCgke2RhdGEuaW1nUGF0aH0pYCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQgMXMgZWFzZS1pblwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXIgMFwiLFxyXG5cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGluaXRpYWw9e2dvaW5nQmFja1xyXG4gICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgIHg6IC0xMDAsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgICAgLy8gb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgICAgeDogMTAwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBleGl0PXtnb2luZ0JhY2tcclxuICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICB4OiAxMDAsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgICAgeDogLTEwMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiBcInNwcmluZ1wiLCBzdGlmZm5lc3M6IDU1MCwgZGFtcGluZzogMjAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3Nob3dCYWNrZHJvcCAmJlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQmFja2Ryb3B9IC8+fVxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L0FuaW1hdGVTaGFyZWRMYXlvdXQ+XHJcbiAgICAgICAgey8qIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICBrZXk9e2FjdGl2ZVN0ZXB9XHJcbiAgICAgICAgICB0aXRsZT17aW1hZ2VEYXRhW2FjdGl2ZVN0ZXBdPy5sYWJlbH1cclxuICAgICAgICAgIHJvbGU9XCJpbWdcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgbWluV2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogYHVybCgke2ltYWdlRGF0YVthY3RpdmVTdGVwXS5pbWdQYXRofSlgLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQgMXMgZWFzZS1pblwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyIDBcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IFswLjUsIDBdIH19XHJcbiAgICAgICAgICBhbmltYXRlPXtjb250cm9sc31cclxuICAgICAgICAgIC8vIGFuaW1hdGU9e3sgb3BhY2l0eTogWzAuNSwgMC44LCAxXSB9fVxyXG4gICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICBlYXNpbmdzOiBbXCJlYXNlSW5cIiwgXCJlYXNlT3V0XCJdLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMC45LFxyXG4gICAgICAgICAgICB0eXBlOiBcInR3ZWVuXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgLy8gdHJhbnNpdGlvbj17eyB0eXBlOiBcImluZXJ0aWFcIiwgdmVsb2NpdHk6IDEgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Nob3dCYWNrZHJvcCAmJlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCYWNrZHJvcH0gLz59XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDw+XHJcbiAgICAgICAgey8qIDxTaG93SGlkZUltYWdlIHNob3c9e3RydWV9PlxyXG4gICAgICAgICAgPEltZ1xyXG4gICAgICAgICAgICB1cmw9e2ltYWdlRGF0YVthY3RpdmVTdGVwXS5pbWdQYXRofVxyXG4gICAgICAgICAgICB0aXRsZT17aW1hZ2VEYXRhW2FjdGl2ZVN0ZXBdLmxhYmVsfVxyXG4gICAgICAgICAgICByb2xlPVwiaW1nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQmFja2Ryb3B9IC8+XHJcbiAgICAgICAgICA8L0ltZz5cclxuICAgICAgICA8L1Nob3dIaWRlSW1hZ2U+ICovfVxyXG4gICAgICA8Lz5cclxuICAgICAge3Nob3dDb250cm9scyAmJiBtYXhTdGVwcyA+IDEgJiZcclxuICAgICAgICA8TW9iaWxlU3RlcHBlclxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN0ZXBwZXJ9XHJcbiAgICAgICAgICBzdGVwcz17bWF4U3RlcHN9XHJcbiAgICAgICAgICBwb3NpdGlvbj1cInN0YXRpY1wiXHJcbiAgICAgICAgICB2YXJpYW50PVwicHJvZ3Jlc3NcIlxyXG4gICAgICAgICAgTGluZWFyUHJvZ3Jlc3NQcm9wcz17e1xyXG4gICAgICAgICAgICBjb2xvcjogXCJzZWNvbmRhcnlcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBhY3RpdmVTdGVwPXthY3RpdmVTdGVwfVxyXG4gICAgICAgICAgYmFja0J1dHRvbj17PFNsaWRlckJhY2tCdXR0b25cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVN0ZXAgPT09IDB9XHJcbiAgICAgICAgICAgIGhhbmRsZUJhY2s9e2hhbmRsZUJhY2t9XHJcbiAgICAgICAgICAvPn1cclxuICAgICAgICAgIG5leHRCdXR0b249ezxTbGlkZXJOZXh0QnV0dG9uXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVTdGVwID09PSBtYXhTdGVwcyAtIDF9XHJcbiAgICAgICAgICAgIGhhbmRsZU5leHQ9e2hhbmRsZU5leHR9XHJcbiAgICAgICAgICAvPn1cclxuICAgICAgICAvPn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gU2xpZGVyTmV4dEJ1dHRvbihcclxuICB7IGRpc2FibGVkLCBoYW5kbGVOZXh0IH06IHsgaGFuZGxlTmV4dDogKCkgPT4gdm9pZDsgZGlzYWJsZWQ6IGJvb2xlYW4gfSxcclxuKSB7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcbiAgcmV0dXJuIDxJY29uQnV0dG9uXHJcbiAgICBzaXplPVwic21hbGxcIlxyXG4gICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9XHJcbiAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgPlxyXG4gICAgey8qIE5leHQgKi99XHJcbiAgICB7dGhlbWUuZGlyZWN0aW9uID09PSBcInJ0bFwiXHJcbiAgICAgID8gPEtleWJvYXJkQXJyb3dMZWZ0IGNvbG9yPVwiaW5oZXJpdFwiIC8+XHJcbiAgICAgIDogPEtleWJvYXJkQXJyb3dSaWdodCBjb2xvcj1cImluaGVyaXRcIiAvPn1cclxuICA8L0ljb25CdXR0b24+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNsaWRlckJhY2tCdXR0b24oXHJcbiAgeyBkaXNhYmxlZCwgaGFuZGxlQmFjayB9OiB7IGhhbmRsZUJhY2s6ICgpID0+IHZvaWQ7IGRpc2FibGVkOiBib29sZWFuIH0sXHJcbikge1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxyXG4gIHJldHVybiA8SWNvbkJ1dHRvblxyXG4gICAgc2l6ZT1cInNtYWxsXCJcclxuICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICBvbkNsaWNrPXtoYW5kbGVCYWNrfVxyXG4gICAgLy8gZGlzYWJsZWQ9e2FjdGl2ZVN0ZXAgPT09IDB9XHJcbiAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgPlxyXG4gICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gXCJydGxcIlxyXG4gICAgICA/IDxLZXlib2FyZEFycm93UmlnaHQgY29sb3I9XCJpbmhlcml0XCIgLz5cclxuICAgICAgOiA8S2V5Ym9hcmRBcnJvd0xlZnQgY29sb3I9XCJpbmhlcml0XCIgLz59XHJcbiAgICB7LyogQmFjayAqL31cclxuICA8L0ljb25CdXR0b24+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlckNhcmRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==