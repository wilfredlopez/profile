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
    subheader: data.command,
    action: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
      width: "100%",
      justifyContent: "flex-end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
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
        lineNumber: 205,
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
      lineNumber: 223,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "body2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
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
      lineNumber: 227,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbnBtLXBhY2thZ2UvTnBtUGFja2FnZXMudHN4Il0sIm5hbWVzIjpbInNwcmluZyIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwidXNlTnBtU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwid3JhcHBlciIsImNvbG9yIiwiYmFja2dyb3VuZCIsImNhcmRSb290IiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJOcG1QYWNrYWdlcyIsInByb3BzIiwiY2xhc3NlcyIsInBvc2l0aW9ucyIsInVzZVJlZiIsImN1cnJlbnQiLCJpdGVtcyIsInNldEl0ZW1zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxpbWl0IiwiTlBNX1BBQ0tBR0VTIiwic2xpY2UiLCJzZXRQb3NpdGlvbiIsImkiLCJvZmZzZXQiLCJtb3ZlSXRlbSIsImRyYWdPZmZzZXQiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1vdmUiLCJkYXJrIiwiREFSS19CQUNLR1JPVU5EX0NPTE9SIiwibWFwIiwicGEiLCJpbmRleCIsIm5hbWUiLCJsZW5ndGgiLCJvblRvcCIsInpJbmRleCIsImZsYXQiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJOcG1QYWNrYWdlIiwiZGF0YSIsInRvdGFsSXRlbXMiLCJpc0RyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJ1c2VUaGVtZSIsIm1hdGNoZXMiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJ1cCIsInJlZiIsImNvcHlNZXNzYWdlT3BlbiIsInNldENvcHlNZXNzYWdlT3BlblRvIiwiX3NldFBvc2l0aW9uIiwidGhyb3R0bGUiLCJvZmZzZXRIZWlnaHQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJ1c2VFZmZlY3QiLCJwb3NpdGlvbiIsInNjYWxlIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiZSIsInBvaW50IiwieSIsInN0eWxlIiwiZm9udFNpemUiLCJjb21tYW5kIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZGVzY3JpcHRpb24iLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLE1BQU1BLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUUsUUFETztBQUViQyxXQUFTLEVBQUUsR0FGRTtBQUdiQyxTQUFPLEVBQUU7QUFISSxDQUFmO0FBTUEsTUFBTUMsWUFBWSxHQUFHQyxvRUFBVSxDQUFDQyxLQUFLLElBQUk7QUFDdkMsU0FBTztBQUNMQyxXQUFPLEVBQUU7QUFDUEMsV0FBSyxFQUFFLE1BREE7QUFFUEMsZ0JBQVUsRUFBRTtBQUZMLEtBREo7QUFLTEMsWUFBUSxFQUFFO0FBQ1JGLFdBQUssRUFBRSxNQURDO0FBRVJDLGdCQUFVLEVBQUUsTUFGSjtBQUdSRSxvQkFBYyxFQUFFLFFBSFI7QUFJUkMsWUFBTSxFQUFFLEdBSkE7QUFLUkMsZ0JBQVUsRUFBRSxZQUxKO0FBTVJDLGFBQU8sRUFBRSxNQU5EO0FBT1JDLG1CQUFhLEVBQUU7QUFQUDtBQUxMLEdBQVA7QUFlRCxDQWhCOEIsQ0FBL0I7O0FBa0JBLE1BQU1DLFdBQVcsR0FBSUMsS0FBRCxJQUFrQjtBQUFBOztBQUNwQyxRQUFNQyxPQUFPLEdBQUdkLFlBQVksRUFBNUI7QUFFQSxRQUFNZSxTQUFTLEdBQUdDLG9EQUFNLENBQWEsRUFBYixDQUFOLENBQXVCQyxPQUF6QztBQUNBLFFBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLElBQW9CQyw0Q0FBSyxDQUFDQyxRQUFOLENBQ3hCUixLQUFLLENBQUNTLEtBQU4sR0FBY0MsMERBQVksQ0FBQ0MsS0FBYixDQUFtQixDQUFuQixFQUFzQlgsS0FBSyxDQUFDUyxLQUE1QixDQUFkLEdBQW1EQywwREFEM0IsQ0FBMUI7O0FBR0EsV0FBU0UsV0FBVCxDQUFxQkMsQ0FBckIsRUFBZ0NDLE1BQWhDLEVBQWtEO0FBQ2hEWixhQUFTLENBQUNXLENBQUQsQ0FBVCxHQUFlQyxNQUFmO0FBQ0Q7O0FBQ0QsUUFBTUMsUUFBUSxHQUFHLENBQUNGLENBQUQsRUFBWUcsVUFBWixLQUFtQztBQUNsRCxVQUFNQyxXQUFXLEdBQUdDLG9FQUFTLENBQUNMLENBQUQsRUFBSUcsVUFBSixFQUFnQmQsU0FBaEIsQ0FBN0I7O0FBQ0EsUUFBSWUsV0FBVyxLQUFLSixDQUFwQixFQUF1QjtBQUNyQlAsY0FBUSxDQUFDYSwrREFBSSxDQUFDZCxLQUFELEVBQVFRLENBQVIsRUFBV0ksV0FBWCxDQUFMLENBQVI7QUFDRDtBQUNGLEdBTEQ7O0FBTUEsU0FDRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQ0UsU0FBSyxFQUNIakIsS0FBSyxDQUFDb0IsSUFBTixHQUNJO0FBQ0U1QixnQkFBVSxFQUFFNkIsMEVBRGQ7QUFFRTlCLFdBQUssRUFBRTtBQUZULEtBREosR0FLSSxFQVBSO0FBU0UsYUFBUyxFQUFFVSxPQUFPLENBQUNYLE9BVHJCO0FBVUUsYUFBUyxFQUFFLENBVmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVlFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLE1BQUUsRUFBRSxDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFNBQUssRUFBQyxRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBREYsQ0FERixFQU1FLE1BQUMsc0RBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxXQUFPLEVBQUUsQ0FGWDtBQUdFLFdBQU8sRUFBQyxRQUhWO0FBSUUsZ0JBQVksRUFBQyxRQUpmO0FBS0UsY0FBVSxFQUFDLFFBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9HZSxLQUFLLENBQUNpQixHQUFOLENBQVUsQ0FBQ0MsRUFBRCxFQUFLQyxLQUFMLEtBQWU7QUFDeEIsV0FDRSxNQUFDLHNEQUFEO0FBQU0sU0FBRyxFQUFFRCxFQUFFLENBQUNFLElBQWQ7QUFBb0IsVUFBSSxNQUF4QjtBQUF5QixRQUFFLEVBQUUsRUFBN0I7QUFBaUMsUUFBRSxFQUFFLENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLFVBQUQ7QUFDRSxVQUFJLEVBQUVGLEVBRFI7QUFFRSxnQkFBVSxFQUFFbEIsS0FBSyxDQUFDcUIsTUFGcEI7QUFHRSxPQUFDLEVBQUVGLEtBSEw7QUFJRSxjQUFRLEVBQUVULFFBSlo7QUFLRSxpQkFBVyxFQUFFSCxXQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGO0FBV0QsR0FaQSxDQVBILENBTkYsQ0FaRixFQXdDRSxNQUFDLHFEQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhDRixDQURGLENBREY7QUE4Q0QsQ0E5REQ7O0dBQU1iLFc7VUFDWVosWTs7O0tBRFpZLFc7QUF3RU4sTUFBTTRCLEtBQUssR0FBRztBQUFFQyxRQUFNLEVBQUU7QUFBVixDQUFkO0FBQ0EsTUFBTUMsSUFBSSxHQUFHO0FBQ1hELFFBQU0sRUFBRSxDQURHO0FBRVhFLFlBQVUsRUFBRTtBQUFFQyxTQUFLLEVBQUU7QUFBVDtBQUZELENBQWI7O0FBS0EsU0FBU0MsVUFBVCxDQUFvQjtBQUFFQyxNQUFGO0FBQVFwQixHQUFSO0FBQVdFLFVBQVg7QUFBcUJILGFBQXJCO0FBQWtDc0I7QUFBbEMsQ0FBcEIsRUFBK0U7QUFBQTs7QUFDN0UsUUFBTWpDLE9BQU8sR0FBR2QsWUFBWSxFQUE1QjtBQUNBLFFBQU0sQ0FBQ2dELFVBQUQsRUFBYUMsV0FBYixJQUE0QjdCLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQWxDO0FBQ0EsUUFBTW5CLEtBQUssR0FBR2dELGtFQUFRLEVBQXRCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHQywrRUFBYSxDQUFDbEQsS0FBSyxDQUFDbUQsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxDQUE3QjtBQUNBLFFBQU1DLEdBQUcsR0FBR3ZDLG9EQUFNLENBQWlCLElBQWpCLENBQWxCO0FBQ0EsUUFBTSxDQUFDd0MsZUFBRCxFQUFrQkMsb0JBQWxCLElBQTBDckMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FBaEQ7O0FBQ0EsUUFBTXFDLFlBQVksR0FBR0MsMEVBQVEsQ0FBQyxZQUFZO0FBQ3hDbEMsZUFBVyxDQUFDQyxDQUFELEVBQUk7QUFDYmxCLFlBQU0sRUFBRStDLEdBQUcsQ0FBQ3RDLE9BQUosQ0FBYTJDLFlBRFI7QUFFYkMsU0FBRyxFQUFFTixHQUFHLENBQUN0QyxPQUFKLENBQWE2QztBQUZMLEtBQUosQ0FBWDtBQUlELEdBTDRCLEVBSzFCLEdBTDBCLENBQTdCLENBUDZFLENBYzdFOzs7QUFDQTFDLDhDQUFLLENBQUMyQyxTQUFOLENBQWdCLE1BQU07QUFDcEJMLGdCQUFZO0FBQ2IsR0FGRDtBQUlBLFNBQ0UsbUVBQ0UsTUFBQywwREFBRDtBQUNFLFFBQUksRUFBRUYsZUFEUjtBQUVFLG9CQUFnQixFQUFFLElBRnBCO0FBR0UsU0FBSyxFQUFFO0FBQ0xRLGNBQVEsRUFBRTtBQURMLEtBSFQ7QUFNRSxXQUFPLEVBQUUsTUFBTTtBQUNiUCwwQkFBb0IsQ0FBQyxLQUFELENBQXBCO0FBQ0QsS0FSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUUsTUFBQyxxREFBRDtBQUFLLFlBQVEsRUFBQyxVQUFkO0FBQXlCLFVBQU0sRUFBQyxHQUFoQztBQUFvQyxRQUFJLEVBQUMsS0FBekM7QUFBK0MsU0FBSyxFQUFFLEdBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQWEsU0FBSyxFQUFDLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLHFEQUFEO0FBQUssV0FBTyxFQUFDLE9BQWI7QUFBcUIsU0FBSyxFQUFDLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLENBRkYsQ0FERixDQVZGLENBREYsRUFxQkUsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxRQUFJLEVBQUVOLE9BRFI7QUFFRSxPQUFHLEVBQUVJLEdBRlA7QUFHRSxVQUFNLE1BSFI7QUFJRSxXQUFPLEVBQUVQLFVBQVUsR0FBR1IsS0FBSCxHQUFXRSxJQUpoQztBQUtFLGNBQVUsRUFBRTtBQUFFdUIsV0FBSyxFQUFFO0FBQVQsS0FMZDtBQU1FLFlBQVEsRUFBRTtBQUFFQSxXQUFLLEVBQUU7QUFBVCxLQU5aO0FBT0UsY0FBVSxFQUFFckUsTUFQZDtBQVFFLG1CQUFlLEVBQUU7QUFBRWlFLFNBQUcsRUFBRSxFQUFQO0FBQVdLLFlBQU0sRUFBRSxFQUFuQjtBQUF1QkMsVUFBSSxFQUFFLEVBQTdCO0FBQWlDQyxXQUFLLEVBQUU7QUFBeEMsS0FSbkI7QUFTRSxlQUFXLEVBQUUsQ0FUZjtBQVVFLGVBQVcsRUFBRSxNQUFNbkIsV0FBVyxDQUFDLElBQUQsQ0FWaEM7QUFXRSxhQUFTLEVBQUUsTUFBTUEsV0FBVyxDQUFDLEtBQUQsQ0FYOUI7QUFZRSxVQUFNLEVBQUUsQ0FBQ29CLENBQUQsRUFBSTtBQUFFQztBQUFGLEtBQUosS0FBa0IxQyxRQUFRLENBQUNGLENBQUQsRUFBSTRDLEtBQUssQ0FBQ0MsQ0FBVixDQVpwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBY0UsTUFBQyxzREFBRDtBQUNFLGFBQVMsRUFBRXpELE9BQU8sQ0FBQ1IsUUFEckI7QUFFRSxTQUFLLEVBQUU7QUFDTDBELGNBQVEsRUFBRSxVQURMO0FBRUwzRCxnQkFBVSxFQUFFLE9BRlAsQ0FHTDtBQUNBOztBQUpLLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFLE1BQUMsNERBQUQ7QUFDRSxTQUFLLEVBQUV5QyxJQUFJLENBQUNSLElBRGQ7QUFFRSx3QkFBb0IsRUFBRTtBQUNwQmtDLFdBQUssRUFBRTtBQUNMQyxnQkFBUSxFQUFFO0FBREw7QUFEYSxLQUZ4QjtBQU9FLGFBQVMsRUFBRTNCLElBQUksQ0FBQzRCLE9BUGxCO0FBUUUsVUFBTSxFQUNKLE1BQUMscURBQUQ7QUFBSyxXQUFLLEVBQUMsTUFBWDtBQUFrQixvQkFBYyxFQUFDLFVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDhEQUFEO0FBQ0UsVUFBSSxFQUFDLE9BRFA7QUFFRSxhQUFPLEVBQUUsTUFBTTtBQUNiQyxpQkFBUyxDQUFDQyxTQUFWLENBQW9CQyxTQUFwQixDQUE4Qi9CLElBQUksQ0FBQzRCLE9BQUwsSUFBZ0IsRUFBOUM7QUFDQWpCLDRCQUFvQixDQUFDLElBQUQsQ0FBcEI7QUFDRCxPQUxIO0FBTUUsV0FBSyxFQUFFO0FBQ0xPLGdCQUFRLEVBQUUsVUFETDtBQUVMSSxhQUFLLEVBQUU7QUFGRixPQU5UO0FBVUUsYUFBTyxFQUFDLFVBVlY7QUFXRSxXQUFLLEVBQUMsU0FYUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFxQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d0QixJQUFJLENBQUNnQyxXQURSLEVBR0UsTUFBQyxzREFBRDtBQUNFLFFBQUksRUFBRWhDLElBQUksQ0FBQ2lDLEdBRGI7QUFFRSxTQUFLLEVBQUVqQyxJQUFJLENBQUNSLElBQUwsR0FBWSxXQUZyQjtBQUdFLFNBQUssRUFBQyxNQUhSO0FBSUUsU0FBSyxFQUFFO0FBQ0w1QixhQUFPLEVBQUU7QUFESixLQUpUO0FBT0UsVUFBTSxFQUFDLFFBUFQ7QUFRRSxPQUFHLEVBQUMscUJBUk47QUFTRSxRQUFJLEVBQUMsTUFUUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0dvQyxJQUFJLENBQUNSLElBWFIsQ0FIRixDQURGLENBckNGLENBZEYsQ0FyQkYsQ0FERjtBQWdHRDs7SUFuSFFPLFU7VUFDUzdDLFksRUFFRmtELDBELEVBQ0VFLHVFOzs7TUFKVFAsVTtBQXFITWpDLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU5YTE0ZGFhNWI2Y2UyZjIyZGM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJveCxcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEdyaWQsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBQYXBlcixcclxuICBTbmFja2JhcixcclxuICBUeXBvZ3JhcGh5LFxyXG4gIHVzZVRoZW1lLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyBObm1QYWNrYWdlLCBOUE1fUEFDS0FHRVMgfSBmcm9tICcuL05QTV9QQUNLQUdFUydcclxuaW1wb3J0IHsgQnJhbmRCdXR0b24gfSBmcm9tICdAcm9vdC90aGVtZS9DdXN0b20nXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRGl2aWRlckVsZW1lbnQsIFN0eWxlZEh0bWxMaW5rIH0gZnJvbSAnLi4vc2hhcmVkJ1xyXG5pbXBvcnQgeyBmaW5kSW5kZXgsIFBvc2l0aW9uLCBtb3ZlIH0gZnJvbSAnLi4vc2hhcmVkL2ZpbmQtaW5kZXgnXHJcbmltcG9ydCB7IERBUktfQkFDS0dST1VORF9DT0xPUiB9IGZyb20gJ0Byb290L3RoZW1lL2dldFRoZW1lJ1xyXG5pbXBvcnQgeyB0aHJvdHRsZSB9IGZyb20gJ0B3aWxmcmVkbG9wZXovcmVhY3QtdXRpbHMnXHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGRhcms/OiBib29sZWFuXHJcbiAgbGltaXQ/OiBudW1iZXJcclxufVxyXG5cclxuY29uc3Qgc3ByaW5nID0ge1xyXG4gIHR5cGU6ICdzcHJpbmcnLFxyXG4gIHN0aWZmbmVzczogNzAwLFxyXG4gIGRhbXBpbmc6IDMwLFxyXG59XHJcblxyXG5jb25zdCB1c2VOcG1TdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgd3JhcHBlcjoge1xyXG4gICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXHJcbiAgICB9LFxyXG4gICAgY2FyZFJvb3Q6IHtcclxuICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGhlaWdodDogMjAwLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICB9LFxyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IE5wbVBhY2thZ2VzID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VOcG1TdHlsZXMoKVxyXG5cclxuICBjb25zdCBwb3NpdGlvbnMgPSB1c2VSZWY8UG9zaXRpb25bXT4oW10pLmN1cnJlbnRcclxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IFJlYWN0LnVzZVN0YXRlKFxyXG4gICAgcHJvcHMubGltaXQgPyBOUE1fUEFDS0FHRVMuc2xpY2UoMCwgcHJvcHMubGltaXQpIDogTlBNX1BBQ0tBR0VTXHJcbiAgKVxyXG4gIGZ1bmN0aW9uIHNldFBvc2l0aW9uKGk6IG51bWJlciwgb2Zmc2V0OiBQb3NpdGlvbikge1xyXG4gICAgcG9zaXRpb25zW2ldID0gb2Zmc2V0XHJcbiAgfVxyXG4gIGNvbnN0IG1vdmVJdGVtID0gKGk6IG51bWJlciwgZHJhZ09mZnNldDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IGZpbmRJbmRleChpLCBkcmFnT2Zmc2V0LCBwb3NpdGlvbnMpXHJcbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IGkpIHtcclxuICAgICAgc2V0SXRlbXMobW92ZShpdGVtcywgaSwgdGFyZ2V0SW5kZXgpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPFBhcGVyXHJcbiAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgcHJvcHMuZGFya1xyXG4gICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IERBUktfQkFDS0dST1VORF9DT0xPUixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn1cclxuICAgICAgICBlbGV2YXRpb249ezB9XHJcbiAgICAgID5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEJveCBtYj17Mn0gcHQ9ezJ9PlxyXG4gICAgICAgICAgICA8RGl2aWRlckVsZW1lbnQ+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249J2NlbnRlcic+TlBNIFBhY2thZ2VzPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0RpdmlkZXJFbGVtZW50PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgc3BhY2luZz17Mn1cclxuICAgICAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgICAgICBhbGlnbkNvbnRlbnQ9J2NlbnRlcidcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXRlbXMubWFwKChwYSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEdyaWQga2V5PXtwYS5uYW1lfSBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICA8TnBtUGFja2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e3BhfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsSXRlbXM9e2l0ZW1zLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICBpPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBtb3ZlSXRlbT17bW92ZUl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb249e3NldFBvc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPEJveCBwYj17Mn0gLz5cclxuICAgICAgPC9QYXBlcj5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuaW50ZXJmYWNlIFBhY2tQcm9wcyB7XHJcbiAgZGF0YTogTm5tUGFja2FnZVxyXG4gIGk6IG51bWJlclxyXG4gIHRvdGFsSXRlbXM6IG51bWJlclxyXG4gIHNldFBvc2l0aW9uOiAoaTogbnVtYmVyLCBwb3M6IFBvc2l0aW9uKSA9PiB2b2lkXHJcbiAgbW92ZUl0ZW06IChpOiBudW1iZXIsIGRyYWdPZmZzZXQ6IG51bWJlcikgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBvblRvcCA9IHsgekluZGV4OiAxIH1cclxuY29uc3QgZmxhdCA9IHtcclxuICB6SW5kZXg6IDAsXHJcbiAgdHJhbnNpdGlvbjogeyBkZWxheTogMC4zIH0sXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5wbVBhY2thZ2UoeyBkYXRhLCBpLCBtb3ZlSXRlbSwgc2V0UG9zaXRpb24sIHRvdGFsSXRlbXMgfTogUGFja1Byb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZU5wbVN0eWxlcygpXHJcbiAgY29uc3QgW2lzRHJhZ2dpbmcsIHNldERyYWdnaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxyXG4gIGNvbnN0IG1hdGNoZXMgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpKVxyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcclxuICBjb25zdCBbY29weU1lc3NhZ2VPcGVuLCBzZXRDb3B5TWVzc2FnZU9wZW5Ub10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBfc2V0UG9zaXRpb24gPSB0aHJvdHRsZShmdW5jdGlvbiAoKSB7XHJcbiAgICBzZXRQb3NpdGlvbihpLCB7XHJcbiAgICAgIGhlaWdodDogcmVmLmN1cnJlbnQhLm9mZnNldEhlaWdodCxcclxuICAgICAgdG9wOiByZWYuY3VycmVudCEub2Zmc2V0VG9wLFxyXG4gICAgfSlcclxuICB9LCAxMDApXHJcblxyXG4gIC8vIFVwZGF0ZSB0aGUgbWVhc3VyZWQgcG9zaXRpb24gb2YgdGhlIGl0ZW0gc28gd2UgY2FuIGNhbGN1bGF0ZSB3aGVuIHdlIHNob3VsZCByZWFycmFuZ2UuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIF9zZXRQb3NpdGlvbigpXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTbmFja2JhclxyXG4gICAgICAgIG9wZW49e2NvcHlNZXNzYWdlT3Blbn1cclxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXsxMDAwfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHtcclxuICAgICAgICAgIHNldENvcHlNZXNzYWdlT3BlblRvKGZhbHNlKVxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHBvc2l0aW9uPSdhYnNvbHV0ZScgYm90dG9tPScwJyBsZWZ0PScyNSUnIHdpZHRoPXs0MDB9PlxyXG4gICAgICAgICAgPEJyYW5kQnV0dG9uIGNvbG9yPSdzdWNjZXNzJz5cclxuICAgICAgICAgICAgey8qIDxBbGVydCBvbkNsb3NlPXsgc2V0Q29weU1lc3NhZ2VPcGVuVG8oZmFsc2UpfSBzZXZlcml0eT1cInN1Y2Nlc3NcIj4gKi99XHJcbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT0nYmxvY2snIHdpZHRoPScxMDAlJz5cclxuICAgICAgICAgICAgICA8c3Bhbj5Db3BpZWQgdG8gY2xpcGJvYXJkPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgey8qIDwvQWxlcnQ+ICovfVxyXG4gICAgICAgICAgPC9CcmFuZEJ1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9TbmFja2Jhcj5cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICBkcmFnPXttYXRjaGVzfVxyXG4gICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgIGxheW91dFxyXG4gICAgICAgIGFuaW1hdGU9e2lzRHJhZ2dpbmcgPyBvblRvcCA6IGZsYXR9XHJcbiAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wMyB9fVxyXG4gICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAxLjEyIH19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17c3ByaW5nfVxyXG4gICAgICAgIGRyYWdDb25zdHJhaW50cz17eyB0b3A6IDEwLCBib3R0b206IDEwLCBsZWZ0OiAxMCwgcmlnaHQ6IDEwIH19XHJcbiAgICAgICAgZHJhZ0VsYXN0aWM9ezF9XHJcbiAgICAgICAgb25EcmFnU3RhcnQ9eygpID0+IHNldERyYWdnaW5nKHRydWUpfVxyXG4gICAgICAgIG9uRHJhZ0VuZD17KCkgPT4gc2V0RHJhZ2dpbmcoZmFsc2UpfVxyXG4gICAgICAgIG9uRHJhZz17KGUsIHsgcG9pbnQgfSkgPT4gbW92ZUl0ZW0oaSwgcG9pbnQueSl9XHJcbiAgICAgID5cclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRSb290fVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6XHJcbiAgICAgICAgICAgIC8vICAgaSA9PT0gdG90YWxJdGVtcyAtIDEgPyAncmdiKDI1NSAyNTUgMjU1IC8gOTAlKScgOiAnd2hpdGUnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgICAgICB0aXRsZT17ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICB0aXRsZVR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEuMnJlbScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3ViaGVhZGVyPXtkYXRhLmNvbW1hbmR9XHJcbiAgICAgICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICAgICAgPEJveCB3aWR0aD0nMTAwJScganVzdGlmeUNvbnRlbnQ9J2ZsZXgtZW5kJz5cclxuICAgICAgICAgICAgICAgIDxCcmFuZEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGRhdGEuY29tbWFuZCB8fCAnJylcclxuICAgICAgICAgICAgICAgICAgICBzZXRDb3B5TWVzc2FnZU9wZW5Ubyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPSdzdWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBDb3B5XHJcbiAgICAgICAgICAgICAgICA8L0JyYW5kQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+PC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Mic+XHJcbiAgICAgICAgICAgICAge2RhdGEuZGVzY3JpcHRpb259XHJcblxyXG4gICAgICAgICAgICAgIDxTdHlsZWRIdG1sTGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj17ZGF0YS51cmx9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17ZGF0YS5uYW1lICsgJyBucG0gaG9tZSd9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj0nYmx1ZSdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXHJcbiAgICAgICAgICAgICAgICByb2xlPSdsaW5rJ1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRIdG1sTGluaz5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTnBtUGFja2FnZXNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==