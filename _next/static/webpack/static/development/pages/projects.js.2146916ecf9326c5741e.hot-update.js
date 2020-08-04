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
      lineNumber: 121,
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
      lineNumber: 132,
      columnNumber: 5
    }
  }), __jsx("span", {
    className: classes.imageBackdrop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 5
    }
  }), __jsx("span", {
    className: classes.imageButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
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
      lineNumber: 140,
      columnNumber: 7
    }
  }, linkUrl ? __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_5__["NonStyledAnchor"], {
    href: linkUrl,
    target: linkTarget,
    rel: linkTarget === "_blank" ? "noopener noreferrer" : undefined,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, title) : {
    title
  }, __jsx("span", {
    className: classes.imageMarked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvSW1hZ2VCdXR0b24udHN4Il0sIm5hbWVzIjpbIkJPUkRFUl9SQURJT1VTIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1pbldpZHRoIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJpbWFnZSIsInBvc2l0aW9uIiwiaGVpZ2h0IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiekluZGV4Iiwib3BhY2l0eSIsImNvbG9yIiwicGFsZXR0ZSIsInNlY29uZGFyeSIsIm1haW4iLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZm9jdXNWaXNpYmxlIiwiaW1hZ2VCdXR0b24iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJjb21tb24iLCJ3aGl0ZSIsImltYWdlU3JjIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJpbWFnZUJhY2tkcm9wIiwic2hhcGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJibGFjayIsImltYWdlVGl0bGUiLCJwYWRkaW5nIiwic3BhY2luZyIsImltYWdlTWFya2VkIiwiSW1hZ2VCdXR0b24iLCJ0aXRsZSIsImJhY2tncm91bmRVcmwiLCJtaW5IZWlnaHQiLCJidXR0b21Qcm9wcyIsImxpbmtVcmwiLCJsaW5rVGFyZ2V0IiwiY2xhc3NlcyIsImJhY2tncm91bmRJbWFnZSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxjQUFjLEdBQUcsQ0FBdkI7QUFFQSxNQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUVDLEtBQUQsSUFDM0JDLDZFQUFZLENBQUM7QUFDWEMsTUFBSSxFQUFFO0FBQ0pDLFdBQU8sRUFBRSxNQURMO0FBRUpDLFlBQVEsRUFBRSxNQUZOO0FBR0pDLFlBQVEsRUFBRSxHQUhOO0FBSUpDLFNBQUssRUFBRSxNQUpIO0FBS0pDLGdCQUFZLEVBQUVWO0FBTFYsR0FESztBQVFYVyxPQUFLLEVBQUU7QUFDTEMsWUFBUSxFQUFFLFVBREw7QUFFTEMsVUFBTSxFQUFFLEdBRkg7QUFJTCxLQUFDVixLQUFLLENBQUNXLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQUQsR0FBZ0M7QUFDOUJOLFdBQUssRUFBRSxpQkFEdUI7QUFDSjtBQUMxQkksWUFBTSxFQUFFO0FBRnNCLEtBSjNCO0FBUUwsK0JBQTJCO0FBQ3pCRyxZQUFNLEVBQUUsQ0FEaUI7QUFFekIsMEJBQW9CO0FBQ2xCQyxlQUFPLEVBQUU7QUFEUyxPQUZLO0FBS3pCLHdCQUFrQjtBQUNoQkEsZUFBTyxFQUFFO0FBRE8sT0FMTztBQVF6Qix1QkFBaUI7QUFDZkMsYUFBSyxFQUFFZixLQUFLLENBQUNnQixPQUFOLENBQWNDLFNBQWQsQ0FBd0JDLElBRGhCO0FBRWZDLGtCQUFVLEVBQUUsd0JBRkc7QUFHZkMsY0FBTSxFQUFFLHdCQUhPO0FBSWZDLGtCQUFVLEVBQUVyQixLQUFLLENBQUNzQixXQUFOLENBQWtCQyxNQUFsQixDQUF5QixTQUF6QixDQUpHLENBS2Y7QUFDQTtBQUNBO0FBQ0E7O0FBUmU7QUFSUTtBQVJ0QixHQVJJO0FBb0NYQyxjQUFZLEVBQUUsRUFwQ0g7QUFxQ1hDLGFBQVcsRUFBRTtBQUNYaEIsWUFBUSxFQUFFLFVBREM7QUFHWGlCLFFBQUksRUFBRSxDQUhLO0FBSVhDLFNBQUssRUFBRSxDQUpJO0FBS1hDLE9BQUcsRUFBRSxDQUxNO0FBTVhDLFVBQU0sRUFBRSxDQU5HO0FBT1gxQixXQUFPLEVBQUUsTUFQRTtBQVFYMkIsY0FBVSxFQUFFLFFBUkQ7QUFTWEMsa0JBQWMsRUFBRSxRQVRMO0FBVVhoQixTQUFLLEVBQUVmLEtBQUssQ0FBQ2dCLE9BQU4sQ0FBY2dCLE1BQWQsQ0FBcUJDO0FBVmpCLEdBckNGO0FBaURYQyxVQUFRLEVBQUU7QUFDUnpCLFlBQVEsRUFBRSxVQURGO0FBRVJpQixRQUFJLEVBQUUsQ0FGRTtBQUdSQyxTQUFLLEVBQUUsQ0FIQztBQUlSQyxPQUFHLEVBQUUsQ0FKRztBQUtSQyxVQUFNLEVBQUUsQ0FMQTtBQU1SdEIsZ0JBQVksRUFBRVYsY0FOTjtBQU9Sc0Msa0JBQWMsRUFBRSxPQVBSO0FBUVI7QUFDQUMsc0JBQWtCLEVBQUU7QUFUWixHQWpEQztBQTZEWEMsZUFBYSxFQUFFO0FBQ2I1QixZQUFRLEVBQUUsVUFERztBQUViaUIsUUFBSSxFQUFFLENBRk87QUFHYm5CLGdCQUFZLEVBQUVQLEtBQUssQ0FBQ3NDLEtBQU4sQ0FBWS9CLFlBSGI7QUFJYm9CLFNBQUssRUFBRSxDQUpNO0FBS2JDLE9BQUcsRUFBRSxDQUxRO0FBTWJDLFVBQU0sRUFBRSxDQU5LO0FBT2JVLG1CQUFlLEVBQUV2QyxLQUFLLENBQUNnQixPQUFOLENBQWNnQixNQUFkLENBQXFCUSxLQVB6QjtBQVFiMUIsV0FBTyxFQUFFLEdBUkk7QUFTYk8sY0FBVSxFQUFFckIsS0FBSyxDQUFDc0IsV0FBTixDQUFrQkMsTUFBbEIsQ0FBeUIsU0FBekI7QUFUQyxHQTdESjtBQXdFWGtCLFlBQVUsRUFBRTtBQUNWaEMsWUFBUSxFQUFFLFVBREE7QUFFVmlDLFdBQU8sRUFBRyxHQUFFMUMsS0FBSyxDQUFDMkMsT0FBTixDQUFjLENBQWQsQ0FBaUIsTUFBSzNDLEtBQUssQ0FBQzJDLE9BQU4sQ0FBYyxDQUFkLENBQWlCLE1BQUszQyxLQUFLLENBQUMyQyxPQUFOLENBQWMsQ0FBZCxJQUN0RCxDQUFFO0FBSE0sR0F4RUQ7QUE2RVhDLGFBQVcsRUFBRTtBQUNYbEMsVUFBTSxFQUFFLENBREc7QUFFWEosU0FBSyxFQUFFLEVBRkk7QUFHWGlDLG1CQUFlLEVBQUV2QyxLQUFLLENBQUNnQixPQUFOLENBQWNnQixNQUFkLENBQXFCQyxLQUgzQjtBQUlYeEIsWUFBUSxFQUFFLFVBSkM7QUFLWG9CLFVBQU0sRUFBRSxDQUFDLENBTEU7QUFNWEgsUUFBSSxFQUFFLGlCQU5LO0FBT1hMLGNBQVUsRUFBRXJCLEtBQUssQ0FBQ3NCLFdBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLFNBQXpCO0FBUEQ7QUE3RUYsQ0FBRCxDQURjLENBQTVCO0FBb0dPLFNBQVNzQixXQUFULENBQ0w7QUFDRUMsT0FERjtBQUVFeEMsT0FGRjtBQUdFeUMsZUFIRjtBQUlFQyxXQUFTLEdBQUcsR0FKZDtBQUtFQyxhQUFXLEdBQUcsRUFMaEI7QUFNRUMsU0FORjtBQU9FQyxZQUFVLEdBQUc7QUFQZixDQURLLEVBVUw7QUFBQTs7QUFDQSxRQUFNQyxPQUFPLEdBQUd0RCxTQUFTLEVBQXpCO0FBRUEsU0FBTyxNQUFDLG9FQUFEO0FBQ0wsZUFBVyxNQUROO0FBRUwsT0FBRyxFQUFFZ0QsS0FGQTtBQUdMLGFBQVMsRUFBRU0sT0FBTyxDQUFDNUMsS0FIZDtBQUlMLHlCQUFxQixFQUFFNEMsT0FBTyxDQUFDNUIsWUFKMUI7QUFLTCxTQUFLLEVBQUU7QUFDTGxCLFdBQUssRUFBRUEsS0FERjtBQUVMMEMsZUFBUyxFQUFFQTtBQUZOO0FBTEYsS0FTREMsV0FUQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BV0w7QUFDRSxhQUFTLEVBQUVHLE9BQU8sQ0FBQ2xCLFFBRHJCO0FBRUUsU0FBSyxFQUFFO0FBQ0xtQixxQkFBZSxFQUFHLE9BQU1OLGFBQWM7QUFEakMsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEssRUFpQkw7QUFBTSxhQUFTLEVBQUVLLE9BQU8sQ0FBQ2YsYUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCSyxFQWtCTDtBQUFNLGFBQVMsRUFBRWUsT0FBTyxDQUFDM0IsV0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLFdBQU8sRUFBQyxXQUZWO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFJRSxhQUFTLEVBQUUyQixPQUFPLENBQUNYLFVBSnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR1MsT0FBTyxHQUNKLE1BQUMsa0VBQUQ7QUFDQSxRQUFJLEVBQUVBLE9BRE47QUFFQSxVQUFNLEVBQUVDLFVBRlI7QUFHQSxPQUFHLEVBQUVBLFVBQVUsS0FBSyxRQUFmLEdBQTBCLHFCQUExQixHQUFrREcsU0FIdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtDUixLQUxELENBREksR0FRSjtBQUFFQTtBQUFGLEdBZE4sRUFnQkU7QUFBTSxhQUFTLEVBQUVNLE9BQU8sQ0FBQ1IsV0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixDQURGLENBbEJLLENBQVA7QUF1Q0Q7O0dBcERlQyxXO1VBV0UvQyxTOzs7S0FYRitDLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2plY3RzLmpzLjIxNDY5MTZlY2Y5MzI2YzU3NDFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRoZW1lLCBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b25CYXNlLCB7IEJ1dHRvbkJhc2VQcm9wcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCB7IE5vblN0eWxlZEFuY2hvciB9IGZyb20gXCJAY29tcG9uZW50cy9zaGFyZWRcIjtcclxuY29uc3QgQk9SREVSX1JBRElPVVMgPSAyO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgIG1pbldpZHRoOiAzMDAsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBCT1JERVJfUkFESU9VUyxcclxuICAgIH0sXHJcbiAgICBpbWFnZToge1xyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICBoZWlnaHQ6IDIwMCxcclxuXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwieHNcIildOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJSAhaW1wb3J0YW50XCIsIC8vIE92ZXJyaWRlcyBpbmxpbmUtc3R5bGVcclxuICAgICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgfSxcclxuICAgICAgXCImOmhvdmVyLCAmJGZvY3VzVmlzaWJsZVwiOiB7XHJcbiAgICAgICAgekluZGV4OiAxLFxyXG4gICAgICAgIFwiJiAkaW1hZ2VCYWNrZHJvcFwiOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjE1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCImICRpbWFnZU1hcmtlZFwiOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCImICRpbWFnZVRpdGxlXCI6IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2IoMjU1IDI1NSAyNTUgLyA5MyUpXCIsXHJcbiAgICAgICAgICBib3JkZXI6IFwiM3B4IHNvbGlkIGN1cnJlbnRDb2xvclwiLFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwib3BhY2l0eVwiKSxcclxuICAgICAgICAgIC8vIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgLy8gYm9yZGVyOiBcIjRweCBzb2xpZCByZ2JhKDQwLCA0MCwgNDAsODQlKVwiLFxyXG4gICAgICAgICAgLy8gYmFja2dyb3VuZDogXCJyZ2JhKDQwLCA0MCwgNDAsODQlKVwiLFxyXG4gICAgICAgICAgLy8gYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBmb2N1c1Zpc2libGU6IHt9LFxyXG4gICAgaW1hZ2VCdXR0b246IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VTcmM6IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IEJPUkRFUl9SQURJT1VTLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAvLyAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXIgNDAlXCIsXHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXIgMFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBpbWFnZUJhY2tkcm9wOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBib3R0b206IDAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICAgIG9wYWNpdHk6IDAuNCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwib3BhY2l0eVwiKSxcclxuICAgIH0sXHJcbiAgICBpbWFnZVRpdGxlOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcoMil9cHggJHt0aGVtZS5zcGFjaW5nKDQpfXB4ICR7dGhlbWUuc3BhY2luZygxKSArXHJcbiAgICAgICAgNn1weGAsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VNYXJrZWQ6IHtcclxuICAgICAgaGVpZ2h0OiAzLFxyXG4gICAgICB3aWR0aDogMTgsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGJvdHRvbTogLTIsXHJcbiAgICAgIGxlZnQ6IFwiY2FsYyg1MCUgLSA5cHgpXCIsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIm9wYWNpdHlcIiksXHJcbiAgICB9LFxyXG4gIH0pXHJcbik7XHJcblxyXG5pbnRlcmZhY2UgSW1hZ2VCdXR0b25Qcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGJhY2tncm91bmRVcmw6IHN0cmluZztcclxuICBtaW5IZWlnaHQ/OiBudW1iZXI7XHJcbiAgYnV0dG9tUHJvcHM/OiBCdXR0b25CYXNlUHJvcHM7XHJcbiAgbGlua1VybD86IHN0cmluZztcclxuICBsaW5rVGFyZ2V0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSW1hZ2VCdXR0b24oXHJcbiAge1xyXG4gICAgdGl0bGUsXHJcbiAgICB3aWR0aCxcclxuICAgIGJhY2tncm91bmRVcmwsXHJcbiAgICBtaW5IZWlnaHQgPSAyNTAsXHJcbiAgICBidXR0b21Qcm9wcyA9IHt9LFxyXG4gICAgbGlua1VybCxcclxuICAgIGxpbmtUYXJnZXQgPSBcIl9ibGFua1wiLFxyXG4gIH06IEltYWdlQnV0dG9uUHJvcHMsXHJcbikge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIDxCdXR0b25CYXNlXHJcbiAgICBmb2N1c1JpcHBsZVxyXG4gICAga2V5PXt0aXRsZX1cclxuICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cclxuICAgIGZvY3VzVmlzaWJsZUNsYXNzTmFtZT17Y2xhc3Nlcy5mb2N1c1Zpc2libGV9XHJcbiAgICBzdHlsZT17e1xyXG4gICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgIG1pbkhlaWdodDogbWluSGVpZ2h0LFxyXG4gICAgfX1cclxuICAgIHsuLi5idXR0b21Qcm9wc31cclxuICA+XHJcbiAgICA8c3BhblxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VTcmN9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZFVybH0pYCxcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCYWNrZHJvcH0gLz5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUJ1dHRvbn0+XHJcbiAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VUaXRsZX1cclxuICAgICAgPlxyXG4gICAgICAgIHtsaW5rVXJsXHJcbiAgICAgICAgICA/IDxOb25TdHlsZWRBbmNob3JcclxuICAgICAgICAgICAgaHJlZj17bGlua1VybH1cclxuICAgICAgICAgICAgdGFyZ2V0PXtsaW5rVGFyZ2V0fVxyXG4gICAgICAgICAgICByZWw9e2xpbmtUYXJnZXQgPT09IFwiX2JsYW5rXCIgPyBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9Ob25TdHlsZWRBbmNob3I+XHJcbiAgICAgICAgICA6IHsgdGl0bGUgfX1cclxuXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlTWFya2VkfSAvPlxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9CdXR0b25CYXNlPjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9