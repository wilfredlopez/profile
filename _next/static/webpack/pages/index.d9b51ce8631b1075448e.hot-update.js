webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/npm-package/NpmPackages.tsx":
/*!****************************************************!*\
  !*** ./src/components/npm-package/NpmPackages.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _NPM_PACKAGES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NPM_PACKAGES */ "./src/components/npm-package/NPM_PACKAGES.ts");
/* harmony import */ var _root_theme_Custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @root/theme/Custom */ "./src/theme/Custom.tsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/components/shared/index.ts");
/* harmony import */ var _shared_find_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/find-index */ "./src/components/shared/find-index.ts");
/* harmony import */ var _root_theme_getTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @root/theme/getTheme */ "./src/theme/getTheme.ts");
/* harmony import */ var _wilfredlopez_react_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wilfredlopez/react-utils */ "./node_modules/@wilfredlopez/react-utils/dist/index.umd.js");
/* harmony import */ var _wilfredlopez_react_utils__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wilfredlopez_react_utils__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
var _jsxFileName = "D:\\WEB_DEV\\Personal_Projects\\wilfredlopez\\src\\components\\npm-package\\NpmPackages.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;










const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30
};
const useNpmStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => {
  return {
    wrapper: {
      color: '#000',
      background: '#fff'
    },
    cardRoot: {
      color: '#000',
      background: '#fff',
      justifyContent: 'center',
      height: 200,
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column'
    }
  };
});

const NpmPackages = props => {
  _s();

  const classes = useNpmStyles();
  const positions = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])([]).current;
  const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(props.limit ? _NPM_PACKAGES__WEBPACK_IMPORTED_MODULE_1__["NPM_PACKAGES"].slice(0, props.limit) : _NPM_PACKAGES__WEBPACK_IMPORTED_MODULE_1__["NPM_PACKAGES"]);

  function setPosition(i, offset) {
    positions[i] = offset;
  }

  const moveItem = (i, dragOffset) => {
    const targetIndex = Object(_shared_find_index__WEBPACK_IMPORTED_MODULE_6__["findIndex"])(i, dragOffset, positions);

    if (targetIndex !== i) {
      setItems(Object(_shared_find_index__WEBPACK_IMPORTED_MODULE_6__["move"])(items, i, targetIndex));
    }
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
    style: props.dark ? {
      background: _root_theme_getTheme__WEBPACK_IMPORTED_MODULE_7__["DARK_BACKGROUND_COLOR"],
      color: 'white'
    } : {},
    className: classes.wrapper,
    elevation: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    mb: 2,
    pt: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx(_shared__WEBPACK_IMPORTED_MODULE_5__["DividerElement"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, "NPM Packages"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    container: true,
    spacing: 2,
    justify: "center",
    alignContent: "center",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, items.map((pa, index) => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
      key: pa.name,
      item: true,
      xs: 12,
      md: 6,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }, __jsx(NpmPackage, {
      data: pa,
      totalItems: items.length,
      i: index,
      moveItem: moveItem,
      setPosition: setPosition,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 19
      }
    }));
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    pb: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  })));
};

_s(NpmPackages, "fAcm85uzH02mlcn0oWbnO1pssFM=", false, function () {
  return [useNpmStyles];
});

_c = NpmPackages;
const onTop = {
  zIndex: 1
};
const flat = {
  zIndex: 0,
  transition: {
    delay: 0.3
  }
};

function NpmPackage({
  data,
  i,
  moveItem,
  setPosition,
  totalItems
}) {
  _s2();

  const classes = useNpmStyles();
  const [isDragging, setDragging] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false);
  const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["useTheme"])();
  const matches = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__["default"])(theme.breakpoints.up('sm'));
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  const [copyMessageOpen, setCopyMessageOpenTo] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false);

  const _setPosition = Object(_wilfredlopez_react_utils__WEBPACK_IMPORTED_MODULE_8__["throttle"])(function () {
    setPosition(i, {
      height: ref.current.offsetHeight,
      top: ref.current.offsetTop
    });
  }, 100); // Update the measured position of the item so we can calculate when we should rearrange.


  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(() => {
    _setPosition();
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Snackbar"], {
    open: copyMessageOpen,
    autoHideDuration: 1000,
    style: {
      position: 'relative'
    },
    onClose: () => {
      setCopyMessageOpenTo(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    position: "absolute",
    bottom: "0",
    left: "25%",
    width: 400,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }, __jsx(_root_theme_Custom__WEBPACK_IMPORTED_MODULE_2__["BrandButton"], {
    color: "success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    display: "block",
    width: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 15
    }
  }, "Copied to clipboard"))))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    drag: matches,
    ref: ref,
    layout: true,
    animate: isDragging ? onTop : flat,
    whileHover: {
      scale: 1.03
    },
    whileTap: {
      scale: 1.12
    },
    transition: spring,
    dragConstraints: {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10
    },
    dragElastic: 1,
    onDragStart: () => setDragging(true),
    onDragEnd: () => setDragging(false),
    onDrag: (e, {
      point
    }) => moveItem(i, point.y),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    className: classes.cardRoot,
    style: {
      position: 'relative',
      background: 'white' // background:
      //   i === totalItems - 1 ? 'rgb(255 255 255 / 90%)' : 'white',

    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardHeader"], {
    title: data.name,
    titleTypographyProps: {
      style: {
        fontSize: '1.2rem'
      }
    },
    subheaderTypographyProps: {
      color: 'secondary'
    },
    subheader: data.command,
    action: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
      width: "100%",
      justifyContent: "flex-end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 15
      }
    }, __jsx(_root_theme_Custom__WEBPACK_IMPORTED_MODULE_2__["BrandButton"], {
      size: "small",
      onClick: () => {
        navigator.clipboard.writeText(data.command || '');
        setCopyMessageOpenTo(true);
      },
      style: {
        position: 'absolute',
        right: 12
      },
      variant: "outlined",
      color: "success",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }
    }, "Copy")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "body2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 13
    }
  }, data.description, __jsx(_shared__WEBPACK_IMPORTED_MODULE_5__["StyledHtmlLink"], {
    href: data.url,
    title: data.name + ' npm home',
    color: "blue",
    style: {
      display: 'block'
    },
    target: "_blank",
    rel: "noopener noreferrer",
    role: "link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 15
    }
  }, data.name))))));
}

_s2(NpmPackage, "uolQUklCQqj5SH/0vww0DBu/VQ4=", false, function () {
  return [useNpmStyles, _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["useTheme"], _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__["default"]];
});

_c2 = NpmPackage;
/* harmony default export */ __webpack_exports__["default"] = (NpmPackages);

var _c, _c2;

$RefreshReg$(_c, "NpmPackages");
$RefreshReg$(_c2, "NpmPackage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbnBtLXBhY2thZ2UvTnBtUGFja2FnZXMudHN4Il0sIm5hbWVzIjpbInNwcmluZyIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwidXNlTnBtU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwid3JhcHBlciIsImNvbG9yIiwiYmFja2dyb3VuZCIsImNhcmRSb290IiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJOcG1QYWNrYWdlcyIsInByb3BzIiwiY2xhc3NlcyIsInBvc2l0aW9ucyIsInVzZVJlZiIsImN1cnJlbnQiLCJpdGVtcyIsInNldEl0ZW1zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxpbWl0IiwiTlBNX1BBQ0tBR0VTIiwic2xpY2UiLCJzZXRQb3NpdGlvbiIsImkiLCJvZmZzZXQiLCJtb3ZlSXRlbSIsImRyYWdPZmZzZXQiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1vdmUiLCJkYXJrIiwiREFSS19CQUNLR1JPVU5EX0NPTE9SIiwibWFwIiwicGEiLCJpbmRleCIsIm5hbWUiLCJsZW5ndGgiLCJvblRvcCIsInpJbmRleCIsImZsYXQiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJOcG1QYWNrYWdlIiwiZGF0YSIsInRvdGFsSXRlbXMiLCJpc0RyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJ1c2VUaGVtZSIsIm1hdGNoZXMiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJ1cCIsInJlZiIsImNvcHlNZXNzYWdlT3BlbiIsInNldENvcHlNZXNzYWdlT3BlblRvIiwiX3NldFBvc2l0aW9uIiwidGhyb3R0bGUiLCJvZmZzZXRIZWlnaHQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJ1c2VFZmZlY3QiLCJwb3NpdGlvbiIsInNjYWxlIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiZSIsInBvaW50IiwieSIsInN0eWxlIiwiZm9udFNpemUiLCJjb21tYW5kIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZGVzY3JpcHRpb24iLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLE1BQU1BLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUUsUUFETztBQUViQyxXQUFTLEVBQUUsR0FGRTtBQUdiQyxTQUFPLEVBQUU7QUFISSxDQUFmO0FBTUEsTUFBTUMsWUFBWSxHQUFHQyxvRUFBVSxDQUFDQyxLQUFLLElBQUk7QUFDdkMsU0FBTztBQUNMQyxXQUFPLEVBQUU7QUFDUEMsV0FBSyxFQUFFLE1BREE7QUFFUEMsZ0JBQVUsRUFBRTtBQUZMLEtBREo7QUFLTEMsWUFBUSxFQUFFO0FBQ1JGLFdBQUssRUFBRSxNQURDO0FBRVJDLGdCQUFVLEVBQUUsTUFGSjtBQUdSRSxvQkFBYyxFQUFFLFFBSFI7QUFJUkMsWUFBTSxFQUFFLEdBSkE7QUFLUkMsZ0JBQVUsRUFBRSxZQUxKO0FBTVJDLGFBQU8sRUFBRSxNQU5EO0FBT1JDLG1CQUFhLEVBQUU7QUFQUDtBQUxMLEdBQVA7QUFlRCxDQWhCOEIsQ0FBL0I7O0FBa0JBLE1BQU1DLFdBQVcsR0FBSUMsS0FBRCxJQUFrQjtBQUFBOztBQUNwQyxRQUFNQyxPQUFPLEdBQUdkLFlBQVksRUFBNUI7QUFFQSxRQUFNZSxTQUFTLEdBQUdDLG9EQUFNLENBQWEsRUFBYixDQUFOLENBQXVCQyxPQUF6QztBQUNBLFFBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLElBQW9CQyw0Q0FBSyxDQUFDQyxRQUFOLENBQ3hCUixLQUFLLENBQUNTLEtBQU4sR0FBY0MsMERBQVksQ0FBQ0MsS0FBYixDQUFtQixDQUFuQixFQUFzQlgsS0FBSyxDQUFDUyxLQUE1QixDQUFkLEdBQW1EQywwREFEM0IsQ0FBMUI7O0FBR0EsV0FBU0UsV0FBVCxDQUFxQkMsQ0FBckIs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QTtBQUFBO0FBQUEsS0FDR3RCLElBQUksQ0FBQ2dDLFdBRFIsRUFHRSxNQUFDLHNEQUFEO0FBQ0UsUUFBSSxFQUFFaEMsSUFBSSxDQUFDaUMsR0FEYjtBQUVFLFNBQUssRUFBRWpDLElBQUksQ0FBQ1IsSUFBTCxHQUFZLFdBRnJCO0FBR0UsU0FBSyxFQUFDLE1BSFI7QUFJRSxTQUFLLEVBQUU7QUFDTDVCLGFBQU8sRUFBRTtBQURKLEtBSlQ7QUFPRSxVQUFNLEVBQUMsUUFQVDtBQVFFLE9BQUcsRUFBQyxxQkFSTjtBQVNFLFFBQUksRUFBQyxNQVRQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FXR29DLElBQUksQ0FBQ1IsSUFYUixDQUhGLENBREYsQ0F4Q0YsQ0FkRixDQXJCRixDQURGO0FBbUdEOztJQXRIUU8sVTtVQUNTN0MsWSxFQUVGa0QsMEQsRUFDRUUsdUU7OztNQUpUUCxVO0FBd0hNakMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDliNTFjZTg2MzFiMTA3NTQ0OGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIENhcmQsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBtYWtlU3R5bGVzLFxyXG4gIFBhcGVyLFxyXG4gIFNuYWNrYmFyLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgdXNlVGhlbWUsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IE5ubVBhY2thZ2UsIE5QTV9QQUNLQUdFUyB9IGZyb20gJy4vTlBNX1BBQ0tBR0VTJ1xyXG5pbXBvcnQgeyBCcmFuZEJ1dHRvbiB9IGZyb20gJ0Byb290L3RoZW1lL0N1c3RvbSdcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBEaXZpZGVyRWxlbWVudCwgU3R5bGVkSHRtbExpbmsgfSBmcm9tICcuLi9zaGFyZWQnXHJcbmltcG9ydCB7IGZpbmRJbmRleCwgUG9zaXRpb24sIG1vdmUgfSBmcm9tICcuLi9zaGFyZWQvZmluZC1pbmRleCdcclxuaW1wb3J0IHsgREFSS19CQUNLR1JPVU5EX0NPTE9SIH0gZnJvbSAnQHJvb3QvdGhlbWUvZ2V0VGhlbWUnXHJcbmltcG9ydCB7IHRocm90dGxlIH0gZnJvbSAnQHdpbGZyZWRsb3Blei9yZWFjdC11dGlscydcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSdcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgZGFyaz86IGJvb2xlYW5cclxuICBsaW1pdD86IG51bWJlclxyXG59XHJcblxyXG5jb25zdCBzcHJpbmcgPSB7XHJcbiAgdHlwZTogJ3NwcmluZycsXHJcbiAgc3RpZmZuZXNzOiA3MDAsXHJcbiAgZGFtcGluZzogMzAsXHJcbn1cclxuXHJcbmNvbnN0IHVzZU5wbVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB3cmFwcGVyOiB7XHJcbiAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcclxuICAgIH0sXHJcbiAgICBjYXJkUm9vdDoge1xyXG4gICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgaGVpZ2h0OiAyMDAsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIH0sXHJcbiAgfVxyXG59KVxyXG5cclxuY29uc3QgTnBtUGFja2FnZXMgPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZU5wbVN0eWxlcygpXHJcblxyXG4gIGNvbnN0IHBvc2l0aW9ucyA9IHVzZVJlZjxQb3NpdGlvbltdPihbXSkuY3VycmVudFxyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gUmVhY3QudXNlU3RhdGUoXHJcbiAgICBwcm9wcy5saW1pdCA/IE5QTV9QQUNLQUdFUy5zbGljZSgwLCBwcm9wcy5saW1pdCkgOiBOUE1fUEFDS0FHRVNcclxuICApXHJcbiAgZnVuY3Rpb24gc2V0UG9zaXRpb24oaTogbnVtYmVyLCBvZmZzZXQ6IFBvc2l0aW9uKSB7XHJcbiAgICBwb3NpdGlvbnNbaV0gPSBvZmZzZXRcclxuICB9XHJcbiAgY29uc3QgbW92ZUl0ZW0gPSAoaTogbnVtYmVyLCBkcmFnT2Zmc2V0OiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gZmluZEluZGV4KGksIGRyYWdPZmZzZXQsIHBvc2l0aW9ucylcclxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gaSkge1xyXG4gICAgICBzZXRJdGVtcyhtb3ZlKGl0ZW1zLCBpLCB0YXJnZXRJbmRleCkpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8UGFwZXJcclxuICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICBwcm9wcy5kYXJrXHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IERBUktfQkFDS0dST1VORF9DT0xPUixcclxuICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfVxyXG4gICAgICAgIGVsZXZhdGlvbj17MH1cclxuICAgICAgPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Qm94IG1iPXsyfSBwdD17Mn0+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyRWxlbWVudD5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj0nY2VudGVyJz5OUE0gUGFja2FnZXM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvRGl2aWRlckVsZW1lbnQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXHJcbiAgICAgICAgICAgIGFsaWduQ29udGVudD0nY2VudGVyJ1xyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpdGVtcy5tYXAoKHBhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBrZXk9e3BhLm5hbWV9IGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgIDxOcG1QYWNrYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17cGF9XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxJdGVtcz17aXRlbXMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgIGk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVJdGVtPXttb3ZlSXRlbX1cclxuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbj17c2V0UG9zaXRpb259XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Qm94IHBiPXsyfSAvPlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5pbnRlcmZhY2UgUGFja1Byb3BzIHtcclxuICBkYXRhOiBObm1QYWNrYWdlXHJcbiAgaTogbnVtYmVyXHJcbiAgdG90YWxJdGVtczogbnVtYmVyXHJcbiAgc2V0UG9zaXRpb246IChpOiBudW1iZXIsIHBvczogUG9zaXRpb24pID0+IHZvaWRcclxuICBtb3ZlSXRlbTogKGk6IG51bWJlciwgZHJhZ09mZnNldDogbnVtYmVyKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IG9uVG9wID0geyB6SW5kZXg6IDEgfVxyXG5jb25zdCBmbGF0ID0ge1xyXG4gIHpJbmRleDogMCxcclxuICB0cmFuc2l0aW9uOiB7IGRlbGF5OiAwLjMgfSxcclxufVxyXG5cclxuZnVuY3Rpb24gTnBtUGFja2FnZSh7IGRhdGEsIGksIG1vdmVJdGVtLCBzZXRQb3NpdGlvbiwgdG90YWxJdGVtcyB9OiBQYWNrUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlTnBtU3R5bGVzKClcclxuICBjb25zdCBbaXNEcmFnZ2luZywgc2V0RHJhZ2dpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcbiAgY29uc3QgbWF0Y2hlcyA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJykpXHJcbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxyXG4gIGNvbnN0IFtjb3B5TWVzc2FnZU9wZW4sIHNldENvcHlNZXNzYWdlT3BlblRvXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IF9zZXRQb3NpdGlvbiA9IHRocm90dGxlKGZ1bmN0aW9uICgpIHtcclxuICAgIHNldFBvc2l0aW9uKGksIHtcclxuICAgICAgaGVpZ2h0OiByZWYuY3VycmVudCEub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICB0b3A6IHJlZi5jdXJyZW50IS5vZmZzZXRUb3AsXHJcbiAgICB9KVxyXG4gIH0sIDEwMClcclxuXHJcbiAgLy8gVXBkYXRlIHRoZSBtZWFzdXJlZCBwb3NpdGlvbiBvZiB0aGUgaXRlbSBzbyB3ZSBjYW4gY2FsY3VsYXRlIHdoZW4gd2Ugc2hvdWxkIHJlYXJyYW5nZS5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgX3NldFBvc2l0aW9uKClcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgb3Blbj17Y29weU1lc3NhZ2VPcGVufVxyXG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezEwMDB9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0Q29weU1lc3NhZ2VPcGVuVG8oZmFsc2UpXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggcG9zaXRpb249J2Fic29sdXRlJyBib3R0b209JzAnIGxlZnQ9JzI1JScgd2lkdGg9ezQwMH0+XHJcbiAgICAgICAgICA8QnJhbmRCdXR0b24gY29sb3I9J3N1Y2Nlc3MnPlxyXG4gICAgICAgICAgICB7LyogPEFsZXJ0IG9uQ2xvc2U9eyBzZXRDb3B5TWVzc2FnZU9wZW5UbyhmYWxzZSl9IHNldmVyaXR5PVwic3VjY2Vzc1wiPiAqL31cclxuICAgICAgICAgICAgPEJveCBkaXNwbGF5PSdibG9jaycgd2lkdGg9JzEwMCUnPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkNvcGllZCB0byBjbGlwYm9hcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB7LyogPC9BbGVydD4gKi99XHJcbiAgICAgICAgICA8L0JyYW5kQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L1NuYWNrYmFyPlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGRyYWc9e21hdGNoZXN9XHJcbiAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgbGF5b3V0XHJcbiAgICAgICAgYW5pbWF0ZT17aXNEcmFnZ2luZyA/IG9uVG9wIDogZmxhdH1cclxuICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjAzIH19XHJcbiAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDEuMTIgfX1cclxuICAgICAgICB0cmFuc2l0aW9uPXtzcHJpbmd9XHJcbiAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7IHRvcDogMTAsIGJvdHRvbTogMTAsIGxlZnQ6IDEwLCByaWdodDogMTAgfX1cclxuICAgICAgICBkcmFnRWxhc3RpYz17MX1cclxuICAgICAgICBvbkRyYWdTdGFydD17KCkgPT4gc2V0RHJhZ2dpbmcodHJ1ZSl9XHJcbiAgICAgICAgb25EcmFnRW5kPXsoKSA9PiBzZXREcmFnZ2luZyhmYWxzZSl9XHJcbiAgICAgICAgb25EcmFnPXsoZSwgeyBwb2ludCB9KSA9PiBtb3ZlSXRlbShpLCBwb2ludC55KX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJkXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZFJvb3R9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDpcclxuICAgICAgICAgICAgLy8gICBpID09PSB0b3RhbEl0ZW1zIC0gMSA/ICdyZ2IoMjU1IDI1NSAyNTUgLyA5MCUpJyA6ICd3aGl0ZScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDYXJkSGVhZGVyXHJcbiAgICAgICAgICAgIHRpdGxlPXtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgIHRpdGxlVHlwb2dyYXBoeVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS4ycmVtJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdWJoZWFkZXJUeXBvZ3JhcGh5UHJvcHM9e3tcclxuICAgICAgICAgICAgICBjb2xvcjogJ3NlY29uZGFyeSdcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3ViaGVhZGVyPXtkYXRhLmNvbW1hbmR9XHJcbiAgICAgICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICAgICAgPEJveCB3aWR0aD0nMTAwJScganVzdGlmeUNvbnRlbnQ9J2ZsZXgtZW5kJz5cclxuICAgICAgICAgICAgICAgIDxCcmFuZEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGRhdGEuY29tbWFuZCB8fCAnJylcclxuICAgICAgICAgICAgICAgICAgICBzZXRDb3B5TWVzc2FnZU9wZW5Ubyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPSdzdWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBDb3B5XHJcbiAgICAgICAgICAgICAgICA8L0JyYW5kQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+PC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Mic+XHJcbiAgICAgICAgICAgICAge2RhdGEuZGVzY3JpcHRpb259XHJcblxyXG4gICAgICAgICAgICAgIDxTdHlsZWRIdG1sTGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj17ZGF0YS51cmx9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17ZGF0YS5uYW1lICsgJyBucG0gaG9tZSd9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj0nYmx1ZSdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXHJcbiAgICAgICAgICAgICAgICByb2xlPSdsaW5rJ1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRIdG1sTGluaz5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTnBtUGFja2FnZXNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==