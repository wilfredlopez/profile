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
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 17
      }
    }) : __jsx(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvU2xpZGVyQ2FyZC50c3giXSwibmFtZXMiOlsicm90YXRlIiwia2V5ZnJhbWVzIiwiU2hvd0hpZGVJbWFnZSIsInN0eWxlZCIsImRpdiIsIk1BWF9XSURUSCIsIkJPUkRFUl9SQURJVVMiLCJJbWciLCJwcm9wcyIsInVybCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXhXaWR0aCIsImZsZXhHcm93IiwibWFyZ2luIiwibWFyZ2luQm90dG9tIiwicG9zaXRpb24iLCJoZWFkZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwiY29sb3IiLCJnZXRDb250cmFzdFRleHQiLCJib3JkZXJCb3R0b20iLCJib3JkZXJSaWdodCIsImJvcmRlckxlZnQiLCJzdGVwcGVyIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwib3BhY2l0eSIsImZvY3VzVmlzaWJsZSIsImltZyIsIm92ZXJmbG93Iiwid2lkdGgiLCJ0cmFuc2l0aW9uIiwiYnJlYWtwb2ludHMiLCJkb3duIiwiekluZGV4IiwiaW1hZ2VCYWNrZHJvcCIsImxlZnQiLCJib3JkZXJSYWRpdXMiLCJzaGFwZSIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiY29tbW9uIiwiYmxhY2siLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsIlNsaWRlckNhcmQiLCJpbWFnZURhdGEiLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsIlJlYWN0IiwidXNlU3RhdGUiLCJtYXhTdGVwcyIsImxlbmd0aCIsImhhbmRsZU5leHQiLCJwcmV2QWN0aXZlU3RlcCIsImhhbmRsZUJhY2siLCJ1c2VFZmZlY3QiLCJiYWNrVGltZW91dCIsImZvcndhcmRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0cyIsIndpbmRvdyIsImNsZWFyVGltZW91dCIsImF1dG9QbGF5IiwidGltZSIsImxpbWl0Iiwic2V0VGltZW91dCIsImxhYmVsIiwiaW1nUGF0aCIsImRpcmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsTUFBTSxHQUFHQyxtRUFBSCxnRUFBWjtBQVVBLE1BQU1DLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrREFBbkI7S0FBTUYsYTtBQWtCTjtBQUNBLE1BQU1HLFNBQVMsR0FBRyxHQUFsQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxDQUF0QjtBQUVBLE1BQU1DLEdBQUcsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyT0FHUUMsU0FIUixFQVFjRyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsR0FSOUIsQ0FBVDtNQUFNRixHO0FBZ0JOLE1BQU1HLFNBQVMsR0FBR0MsMkVBQVUsQ0FBRUMsS0FBRCxLQUFZO0FBQ3ZDQyxNQUFJLEVBQUU7QUFDSkMsWUFBUSxFQUFFVCxTQUROO0FBRUpVLFlBQVEsRUFBRSxDQUZOO0FBR0pDLFVBQU0sRUFBRSxNQUhKO0FBSUpDLGdCQUFZLEVBQUUsTUFKVjtBQUtKQyxZQUFRLEVBQUU7QUFMTixHQURpQztBQVF2Q0MsUUFBTSxFQUFFO0FBQ05DLFdBQU8sRUFBRSxNQURIO0FBRU5DLGNBQVUsRUFBRSxRQUZOO0FBR05DLGtCQUFjLEVBQUUsUUFIVjtBQUlOQyxVQUFNLEVBQUUsRUFKRjtBQUtOO0FBQ0E7QUFDQUMsbUJBQWUsRUFBRVosS0FBSyxDQUFDYSxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDLE9BUHBDO0FBUU5DLFNBQUssRUFBRWhCLEtBQUssQ0FBQ2EsT0FBTixDQUFjSSxlQUFkLENBQThCakIsS0FBSyxDQUFD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QUE7QUFBQTtBQUFBO0FBQUEsTUFUTSxDQVRkO0FBb0JFLGNBQVUsRUFBRSxNQUFDLDREQUFEO0FBQ1YsVUFBSSxFQUFDLE9BREs7QUFFVixXQUFLLEVBQUMsU0FGSTtBQUdWLGFBQU8sRUFBRWIsVUFIQztBQUlWLGNBQVEsRUFBRVIsVUFBVSxLQUFLLENBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1UaEQsS0FBSyxDQUFDcUUsU0FBTixLQUFvQixLQUFwQixHQUNHLE1BQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURILEdBRUcsTUFBQywyRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUk0sQ0FwQmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxDSixDQURGO0FBcUVEOztHQTVIUXpCLFU7VUFDUzlDLFMsRUFDRmlELGlFOzs7TUFGUEgsVTtBQThITUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjUyYzFjNmFkODNjZTQ5MGU3NTA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTW9iaWxlU3RlcHBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTW9iaWxlU3RlcHBlclwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBLZXlib2FyZEFycm93TGVmdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dMZWZ0XCI7XHJcbmltcG9ydCBLZXlib2FyZEFycm93UmlnaHQgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93UmlnaHRcIjtcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3Qgcm90YXRlID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNob3dIaWRlSW1hZ2UgPSBzdHlsZWQuZGl2PHsgc2hvdzogYm9vbGVhbiB9PmBcclxuICAgIC8qIGRpc3BsYXk6ICR7KHByb3BzKSA9PiBwcm9wcy5zaG93ID8gXCJibG9ja1wiIDogXCJub25lXCJ9OyAqL1xyXG4gICAgLyogdHJhbnNmb3JtOiAkeyhwcm9wcykgPT5cclxuICBwcm9wcy5zaG93ID8gXCJ0cmFuc2xhdGUoMClcIiA6IFwidHJhbnNsYXRlKC0xMDAwMCUpXCJ9OyAqL1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgLyogYW5pbWF0aW9uOiAke3JvdGF0ZX0gMnMgbGluZWFyOyAqL1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuYDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VUb1NsaWRlciB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBpbWdQYXRoOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaW1hZ2VEYXRhOiBJbWFnZVRvU2xpZGVyW107XHJcbn1cclxuXHJcbi8vIGNvbnN0IE1BWF9IRUlHSFQgPSA2MDA7XHJcbmNvbnN0IE1BWF9XSURUSCA9IDUwMDtcclxuY29uc3QgQk9SREVSX1JBRElVUyA9IDY7XHJcblxyXG5jb25zdCBJbWcgPSBzdHlsZWQuZGl2PHsgdXJsOiBzdHJpbmcgfT5gXHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1heC13aWR0aDogJHtNQVhfV0lEVEh9cHg7XHJcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAqL1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR7KHByb3BzKSA9PiBwcm9wcy51cmx9KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMXMgZWFzZS1pbjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuYDtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1heFdpZHRoOiBNQVhfV0lEVEgsXHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBoZWlnaHQ6IDUwLFxyXG4gICAgLy8gcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmdldENvbnRyYXN0VGV4dCh0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCksXHJcbiAgICAvLyBib3JkZXJUb3BMZWZ0UmFkaXVzOiBCT1JERVJfUkFESVVTLFxyXG4gICAgLy8gYm9yZGVyVG9wUmlnaHRSYWRpdXM6IEJPUkRFUl9SQURJVVMsXHJcbiAgICAvLyBib3JkZXI6IGAxcHggb3V0c2V0ICR7dGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyfWAsXHJcblxyXG4gICAgYm9yZGVyQm90dG9tOiAwLFxyXG4gICAgYm9yZGVyUmlnaHQ6IDAsXHJcbiAgICBib3JkZXJMZWZ0OiAwLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICB9LFxyXG4gIHN0ZXBwZXI6IHtcclxuICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IEJPUkRFUl9SQURJVVMsXHJcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogQk9SREVSX1JBRElVUyxcclxuICAgIG9wYWNpdHk6IDAuOSxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0KSxcclxuICB9LFxyXG4gIGZvY3VzVmlzaWJsZToge30sXHJcbiAgaW1nOiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgLy8gbWF4SGVpZ2h0OiBNQVhfSEVJR0hULFxyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgbWF4V2lkdGg6IE1BWF9XSURUSCxcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDIwMG1zIGVhc2UtaW4tb3V0XCIsXHJcblxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgd2lkdGg6IFwiMTAwJSAhaW1wb3J0YW50XCIsIC8vIE92ZXJyaWRlcyBpbmxpbmUtc3R5bGVcclxuICAgICAgaGVpZ2h0OiAxMDAsXHJcbiAgICB9LFxyXG4gICAgXCImOmhvdmVyLCAmJGZvY3VzVmlzaWJsZVwiOiB7XHJcbiAgICAgIHpJbmRleDogMSxcclxuICAgICAgXCImICRpbWFnZUJhY2tkcm9wXCI6IHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlQmFja2Ryb3A6IHtcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICByaWdodDogMCxcclxuICAgIHRvcDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICBvcGFjaXR5OiAwLjE1LFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwib3BhY2l0eVwiKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBTbGlkZXJDYXJkKHsgaW1hZ2VEYXRhIH06IFByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBbYWN0aXZlU3RlcCwgc2V0QWN0aXZlU3RlcF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCBtYXhTdGVwcyA9IGltYWdlRGF0YS5sZW5ndGg7XHJcbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiB7XHJcbiAgICAgIHJldHVybiBwcmV2QWN0aXZlU3RlcCArIDE7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVCYWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwIC0gMSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gICBjb25zdCBoYW5kbGVTdGVwQ2hhbmdlID0gKHN0ZXA6IG51bWJlcikgPT4ge1xyXG4gIC8vICAgICBzZXRBY3RpdmVTdGVwKHN0ZXApO1xyXG4gIC8vICAgfTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBiYWNrVGltZW91dDogbnVtYmVyO1xyXG4gICAgbGV0IGZvcndhcmRUaW1lb3V0OiBudW1iZXI7XHJcbiAgICBmdW5jdGlvbiBjbGVhclRpbWVvdXRzKCkge1xyXG4gICAgICBpZiAoYmFja1RpbWVvdXQpIHtcclxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGJhY2tUaW1lb3V0KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZm9yd2FyZFRpbWVvdXQpIHtcclxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGZvcndhcmRUaW1lb3V0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGF1dG9QbGF5KHRpbWU6IG51bWJlcikge1xyXG4gICAgICBjb25zdCBsaW1pdCA9IG1heFN0ZXBzIC0gMTtcclxuICAgICAgaWYgKGFjdGl2ZVN0ZXAgPT09IGxpbWl0KSB7XHJcbiAgICAgICAgYmFja1RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRBY3RpdmVTdGVwKDApO1xyXG4gICAgICAgIH0sIHRpbWUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgYWN0aXZlU3RlcCA8IGxpbWl0XHJcbiAgICAgICkge1xyXG4gICAgICAgIGZvcndhcmRUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgaGFuZGxlTmV4dCgpO1xyXG4gICAgICAgIH0sIHRpbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobWF4U3RlcHMgPiAxKSB7XHJcbiAgICAgIGF1dG9QbGF5KDcwMDApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJUaW1lb3V0cygpO1xyXG4gICAgfTtcclxuICB9LCBbYWN0aXZlU3RlcCwgbWF4U3RlcHNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8UGFwZXIgc3F1YXJlIGVsZXZhdGlvbj17M30gY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbXBvbmVudD1cImg0XCI+XHJcbiAgICAgICAgICB7aW1hZ2VEYXRhW2FjdGl2ZVN0ZXBdLmxhYmVsfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9QYXBlcj5cclxuXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFNob3dIaWRlSW1hZ2Ugc2hvdz17dHJ1ZX0+XHJcbiAgICAgICAgICA8SW1nXHJcbiAgICAgICAgICAgIHVybD17aW1hZ2VEYXRhW2FjdGl2ZVN0ZXBdLmltZ1BhdGh9XHJcbiAgICAgICAgICAgIHRpdGxlPXtpbWFnZURhdGFbYWN0aXZlU3RlcF0ubGFiZWx9XHJcbiAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCYWNrZHJvcH0gLz5cclxuICAgICAgICAgIDwvSW1nPlxyXG4gICAgICAgICAgey8qIDxpbWdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgc3JjPXtpbWFnZURhdGFbYWN0aXZlU3RlcF0uaW1nUGF0aH1cclxuICAgICAgICAgICAgYWx0PXtpbWFnZURhdGFbYWN0aXZlU3RlcF0ubGFiZWx9XHJcbiAgICAgICAgICAvPiAqL31cclxuICAgICAgICA8L1Nob3dIaWRlSW1hZ2U+XHJcbiAgICAgICAgey8qIHtpbWFnZURhdGEubWFwKChzdGVwLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPFNob3dIaWRlSW1hZ2Ugc2hvdz17YWN0aXZlU3RlcCA9PT0gaW5kZXh9IGtleT17c3RlcC5sYWJlbH0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgIHNyYz17c3RlcC5pbWdQYXRofVxyXG4gICAgICAgICAgICAgIGFsdD17c3RlcC5sYWJlbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvU2hvd0hpZGVJbWFnZT5cclxuICAgICAgICApKX0gKi99XHJcbiAgICAgIDwvPlxyXG4gICAgICB7bWF4U3RlcHMgPiAxICYmXHJcbiAgICAgICAgPE1vYmlsZVN0ZXBwZXJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGVwcGVyfVxyXG4gICAgICAgICAgc3RlcHM9e21heFN0ZXBzfVxyXG4gICAgICAgICAgcG9zaXRpb249XCJzdGF0aWNcIlxyXG4gICAgICAgICAgdmFyaWFudD1cInByb2dyZXNzXCJcclxuICAgICAgICAgIExpbmVhclByb2dyZXNzUHJvcHM9e3tcclxuICAgICAgICAgICAgY29sb3I6IFwic2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgYWN0aXZlU3RlcD17YWN0aXZlU3RlcH1cclxuICAgICAgICAgIG5leHRCdXR0b249ezxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVTdGVwID09PSBtYXhTdGVwcyAtIDF9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsvKiBOZXh0ICovfVxyXG4gICAgICAgICAgICB7dGhlbWUuZGlyZWN0aW9uID09PSBcInJ0bFwiXHJcbiAgICAgICAgICAgICAgPyA8S2V5Ym9hcmRBcnJvd0xlZnQgY29sb3I9XCJpbmhlcml0XCIgLz5cclxuICAgICAgICAgICAgICA6IDxLZXlib2FyZEFycm93UmlnaHQgY29sb3I9XCJpbmhlcml0XCIgLz59XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+fVxyXG4gICAgICAgICAgYmFja0J1dHRvbj17PEljb25CdXR0b25cclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQmFja31cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVN0ZXAgPT09IDB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aGVtZS5kaXJlY3Rpb24gPT09IFwicnRsXCJcclxuICAgICAgICAgICAgICA/IDxLZXlib2FyZEFycm93UmlnaHQgLz5cclxuICAgICAgICAgICAgICA6IDxLZXlib2FyZEFycm93TGVmdCAvPn1cclxuICAgICAgICAgICAgey8qIEJhY2sgKi99XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+fVxyXG4gICAgICAgIC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==