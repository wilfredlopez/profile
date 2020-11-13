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
      lineNumber: 71,
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
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    mb: 2,
    pt: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx(_shared__WEBPACK_IMPORTED_MODULE_5__["DividerElement"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
      lineNumber: 90,
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
        lineNumber: 99,
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
        lineNumber: 100,
        columnNumber: 19
      }
    }));
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    pb: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
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
      lineNumber: 153,
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
      lineNumber: 163,
      columnNumber: 9
    }
  }, __jsx(_root_theme_Custom__WEBPACK_IMPORTED_MODULE_2__["BrandButton"], {
    color: "success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    display: "block",
    width: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
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
      lineNumber: 173,
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
      lineNumber: 187,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardHeader"], {
    title: data.name,
    titleTypographyProps: {
      component: "h1",
      style: {
        fontSize: '1.3rem'
      }
    },
    subheaderTypographyProps: {
      color: 'primary',
      variant: 'caption'
    },
    subheader: data.command,
    action: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
      width: "100%",
      justifyContent: "flex-end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
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
        lineNumber: 211,
        columnNumber: 17
      }
    }, "Copy")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "body2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 13
    }
  }, data.description, __jsx(_shared__WEBPACK_IMPORTED_MODULE_5__["StyledHtmlLink"], {
    href: data.url,
    title: data.name + ' npm home',
    color: _root_theme_getTheme__WEBPACK_IMPORTED_MODULE_7__["SECONDARY_COLOR"],
    style: {
      display: 'block'
    },
    target: "_blank",
    rel: "noopener noreferrer",
    role: "link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbnBtLXBhY2thZ2UvTnBtUGFja2FnZXMudHN4Il0sIm5hbWVzIjpbInNwcmluZyIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwidXNlTnBtU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwid3JhcHBlciIsImNvbG9yIiwiYmFja2dyb3VuZCIsImNhcmRSb290IiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJOcG1QYWNrYWdlcyIsInByb3BzIiwiY2xhc3NlcyIsInBvc2l0aW9ucyIsInVzZVJlZiIsImN1cnJlbnQiLCJpdGVtcyIsInNldEl0ZW1zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxpbWl0IiwiTlBNX1BBQ0tBR0VTIiwic2xpY2UiLCJzZXRQb3NpdGlvbiIsImkiLCJvZmZzZXQiLCJtb3ZlSXRlbSIsImRyYWdPZmZzZXQiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1vdmUiLCJkYXJrIiwiREFSS19CQUNLR1JPVU5EX0NPTE9SIiwibWFwIiwicGEiLCJpbmRleCIsIm5hbWUiLCJsZW5ndGgiLCJvblRvcCIsInpJbmRleCIsImZsYXQiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJOcG1QYWNrYWdlIiwiZGF0YSIsInRvdGFsSXRlbXMiLCJpc0RyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJ1c2VUaGVtZSIsIm1hdGNoZXMiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJ1cCIsInJlZiIsImNvcHlNZXNzYWdlT3BlbiIsInNldENvcHlNZXNzYWdlT3BlblRvIiwiX3NldFBvc2l0aW9uIiwidGhyb3R0bGUiLCJvZmZzZXRIZWlnaHQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJ1c2VFZmZlY3QiLCJwb3NpdGlvbiIsInNjYWxlIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiZSIsInBvaW50IiwieSIsImNvbXBvbmVudCIsInN0eWxlIiwiZm9udFNpemUiLCJ2YXJpYW50IiwiY29tbWFuZCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImRlc2NyaXB0aW9uIiwidXJsIiwiU0VDT05EQVJZX0NPTE9SIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLE1BQU1BLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUUsUUFETztBQUViQyxXQUFTLEVBQUUsR0FGRTtBQUdiQyxTQUFPLEVBQUU7QUFISSxDQUFmO0FBTUEsTUFBTUMsWUFBWSxHQUFHQyxvRUFBVSxDQUFDQyxLQUFLLElBQUk7QUFDdkMsU0FBTztBQUNMQyxXQUFPLEVBQUU7QUFDUEMsV0FBSyxFQUFFLE1BREE7QUFFUEMsZ0JBQVUsRUFBRTtBQUZMLEtBREo7QUFLTEMsWUFBUSxFQUFFO0FBQ1JGLFdBQUssRUFBRSxNQURDO0FBRVJDLGdCQUFVLEVBQUUsTUFGSjtBQUdSRSxvQkFBYyxFQUFFLFFBSFI7QUFJUkMsWUFBTSxFQUFFLEdBSkE7QUFLUkMsZ0JBQVUsRUFBRSxZQUxKO0FBTVJDLGFBQU8sRUFBRSxNQU5EO0FBT1JDLG1CQUFhLEVBQUU7QUFQUDtBQUxMLEdBQVA7QUFlRCxDQWhCOEIsQ0FBL0I7O0FBa0JBLE1BQU1DLFdBQVcsR0FBSUMsS0FBRCxJQUFrQjtBQUFBOztBQUNwQyxRQUFNQyxPQUFPLEdBQUdkLFlBQVksRUFBNUI7QUFFQSxRQUFNZSxTQUFTLEdBQUdDLG9EQUFNLENBQWEsRUFBYixDQUFOLENBQXVCQyxPQUF6QztBQUNBLFFBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLElBQW9CQyw0Q0FBSyxDQUFDQyxRQUFOLENBQ3hCUixLQUFLLENBQUNTLEtBQU4sR0FBY0MsMERBQVksQ0FBQ0MsS0FBYixDQUFtQixDQUFuQixFQUFzQlgsS0FBSyxDQUFDUyxLQUE1QixDQUFkLEdBQW1E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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3RCLElBQUksQ0FBQ2tDLFdBRFIsRUFHRSxNQUFDLHNEQUFEO0FBQ0UsUUFBSSxFQUFFbEMsSUFBSSxDQUFDbUMsR0FEYjtBQUVFLFNBQUssRUFBRW5DLElBQUksQ0FBQ1IsSUFBTCxHQUFZLFdBRnJCO0FBR0UsU0FBSyxFQUFFNEMsb0VBSFQ7QUFJRSxTQUFLLEVBQUU7QUFDTHhFLGFBQU8sRUFBRTtBQURKLEtBSlQ7QUFPRSxVQUFNLEVBQUMsUUFQVDtBQVFFLE9BQUcsRUFBQyxxQkFSTjtBQVNFLFFBQUksRUFBQyxNQVRQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FXR29DLElBQUksQ0FBQ1IsSUFYUixDQUhGLENBREYsQ0ExQ0YsQ0FkRixDQXJCRixDQURGO0FBcUdEOztJQXhIUU8sVTtVQUNTN0MsWSxFQUVGa0QsMEQsRUFDRUUsdUU7OztNQUpUUCxVO0FBMEhNakMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2MzNzRlNTM5NjRmNzdiNzEwMDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIENhcmQsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBtYWtlU3R5bGVzLFxyXG4gIFBhcGVyLFxyXG4gIFNuYWNrYmFyLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgdXNlVGhlbWUsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IE5ubVBhY2thZ2UsIE5QTV9QQUNLQUdFUyB9IGZyb20gJy4vTlBNX1BBQ0tBR0VTJ1xyXG5pbXBvcnQgeyBCcmFuZEJ1dHRvbiB9IGZyb20gJ0Byb290L3RoZW1lL0N1c3RvbSdcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBEaXZpZGVyRWxlbWVudCwgU3R5bGVkSHRtbExpbmsgfSBmcm9tICcuLi9zaGFyZWQnXHJcbmltcG9ydCB7IGZpbmRJbmRleCwgUG9zaXRpb24sIG1vdmUgfSBmcm9tICcuLi9zaGFyZWQvZmluZC1pbmRleCdcclxuaW1wb3J0IHsgREFSS19CQUNLR1JPVU5EX0NPTE9SIH0gZnJvbSAnQHJvb3QvdGhlbWUvZ2V0VGhlbWUnXHJcbmltcG9ydCB7IHRocm90dGxlIH0gZnJvbSAnQHdpbGZyZWRsb3Blei9yZWFjdC11dGlscydcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSdcclxuaW1wb3J0IHsgUFJJTUFSWV9DT0xPUiwgVEVSVElBUllfQ09MT1IsIFNFQ09OREFSWV9DT0xPUiB9IGZyb20gJy4uLy4uL3RoZW1lL2dldFRoZW1lJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBkYXJrPzogYm9vbGVhblxyXG4gIGxpbWl0PzogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IHNwcmluZyA9IHtcclxuICB0eXBlOiAnc3ByaW5nJyxcclxuICBzdGlmZm5lc3M6IDcwMCxcclxuICBkYW1waW5nOiAzMCxcclxufVxyXG5cclxuY29uc3QgdXNlTnBtU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHdyYXBwZXI6IHtcclxuICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxyXG4gICAgfSxcclxuICAgIGNhcmRSb290OiB7XHJcbiAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBoZWlnaHQ6IDIwMCxcclxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgfSxcclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBOcG1QYWNrYWdlcyA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlTnBtU3R5bGVzKClcclxuXHJcbiAgY29uc3QgcG9zaXRpb25zID0gdXNlUmVmPFBvc2l0aW9uW10+KFtdKS5jdXJyZW50XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShcclxuICAgIHByb3BzLmxpbWl0ID8gTlBNX1BBQ0tBR0VTLnNsaWNlKDAsIHByb3BzLmxpbWl0KSA6IE5QTV9QQUNLQUdFU1xyXG4gIClcclxuICBmdW5jdGlvbiBzZXRQb3NpdGlvbihpOiBudW1iZXIsIG9mZnNldDogUG9zaXRpb24pIHtcclxuICAgIHBvc2l0aW9uc1tpXSA9IG9mZnNldFxyXG4gIH1cclxuICBjb25zdCBtb3ZlSXRlbSA9IChpOiBudW1iZXIsIGRyYWdPZmZzZXQ6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBmaW5kSW5kZXgoaSwgZHJhZ09mZnNldCwgcG9zaXRpb25zKVxyXG4gICAgaWYgKHRhcmdldEluZGV4ICE9PSBpKSB7XHJcbiAgICAgIHNldEl0ZW1zKG1vdmUoaXRlbXMsIGksIHRhcmdldEluZGV4KSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxQYXBlclxyXG4gICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgIHByb3BzLmRhcmtcclxuICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogREFSS19CQUNLR1JPVU5EX0NPTE9SLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDoge31cclxuICAgICAgICB9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9XHJcbiAgICAgICAgZWxldmF0aW9uPXswfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxCb3ggbWI9ezJ9IHB0PXsyfT5cclxuICAgICAgICAgICAgPERpdmlkZXJFbGVtZW50PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGFsaWduPSdjZW50ZXInPk5QTSBQYWNrYWdlczwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9EaXZpZGVyRWxlbWVudD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgICAgIGp1c3RpZnk9J2NlbnRlcidcclxuICAgICAgICAgICAgYWxpZ25Db250ZW50PSdjZW50ZXInXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2l0ZW1zLm1hcCgocGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxHcmlkIGtleT17cGEubmFtZX0gaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgPE5wbVBhY2thZ2VcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtwYX1cclxuICAgICAgICAgICAgICAgICAgICB0b3RhbEl0ZW1zPXtpdGVtcy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgaT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZUl0ZW09e21vdmVJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uPXtzZXRQb3NpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDxCb3ggcGI9ezJ9IC8+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmludGVyZmFjZSBQYWNrUHJvcHMge1xyXG4gIGRhdGE6IE5ubVBhY2thZ2VcclxuICBpOiBudW1iZXJcclxuICB0b3RhbEl0ZW1zOiBudW1iZXJcclxuICBzZXRQb3NpdGlvbjogKGk6IG51bWJlciwgcG9zOiBQb3NpdGlvbikgPT4gdm9pZFxyXG4gIG1vdmVJdGVtOiAoaTogbnVtYmVyLCBkcmFnT2Zmc2V0OiBudW1iZXIpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3Qgb25Ub3AgPSB7IHpJbmRleDogMSB9XHJcbmNvbnN0IGZsYXQgPSB7XHJcbiAgekluZGV4OiAwLFxyXG4gIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuMyB9LFxyXG59XHJcblxyXG5mdW5jdGlvbiBOcG1QYWNrYWdlKHsgZGF0YSwgaSwgbW92ZUl0ZW0sIHNldFBvc2l0aW9uLCB0b3RhbEl0ZW1zIH06IFBhY2tQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VOcG1TdHlsZXMoKVxyXG4gIGNvbnN0IFtpc0RyYWdnaW5nLCBzZXREcmFnZ2luZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcclxuICBjb25zdCBtYXRjaGVzID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnc20nKSlcclxuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXHJcbiAgY29uc3QgW2NvcHlNZXNzYWdlT3Blbiwgc2V0Q29weU1lc3NhZ2VPcGVuVG9dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgX3NldFBvc2l0aW9uID0gdGhyb3R0bGUoZnVuY3Rpb24gKCkge1xyXG4gICAgc2V0UG9zaXRpb24oaSwge1xyXG4gICAgICBoZWlnaHQ6IHJlZi5jdXJyZW50IS5vZmZzZXRIZWlnaHQsXHJcbiAgICAgIHRvcDogcmVmLmN1cnJlbnQhLm9mZnNldFRvcCxcclxuICAgIH0pXHJcbiAgfSwgMTAwKVxyXG5cclxuICAvLyBVcGRhdGUgdGhlIG1lYXN1cmVkIHBvc2l0aW9uIG9mIHRoZSBpdGVtIHNvIHdlIGNhbiBjYWxjdWxhdGUgd2hlbiB3ZSBzaG91bGQgcmVhcnJhbmdlLlxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBfc2V0UG9zaXRpb24oKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U25hY2tiYXJcclxuICAgICAgICBvcGVuPXtjb3B5TWVzc2FnZU9wZW59XHJcbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MTAwMH1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRDb3B5TWVzc2FnZU9wZW5UbyhmYWxzZSlcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBwb3NpdGlvbj0nYWJzb2x1dGUnIGJvdHRvbT0nMCcgbGVmdD0nMjUlJyB3aWR0aD17NDAwfT5cclxuICAgICAgICAgIDxCcmFuZEJ1dHRvbiBjb2xvcj0nc3VjY2Vzcyc+XHJcbiAgICAgICAgICAgIHsvKiA8QWxlcnQgb25DbG9zZT17IHNldENvcHlNZXNzYWdlT3BlblRvKGZhbHNlKX0gc2V2ZXJpdHk9XCJzdWNjZXNzXCI+ICovfVxyXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9J2Jsb2NrJyB3aWR0aD0nMTAwJSc+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Q29waWVkIHRvIGNsaXBib2FyZDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHsvKiA8L0FsZXJ0PiAqL31cclxuICAgICAgICAgIDwvQnJhbmRCdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvU25hY2tiYXI+XHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgZHJhZz17bWF0Y2hlc31cclxuICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICBsYXlvdXRcclxuICAgICAgICBhbmltYXRlPXtpc0RyYWdnaW5nID8gb25Ub3AgOiBmbGF0fVxyXG4gICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDMgfX1cclxuICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMS4xMiB9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3NwcmluZ31cclxuICAgICAgICBkcmFnQ29uc3RyYWludHM9e3sgdG9wOiAxMCwgYm90dG9tOiAxMCwgbGVmdDogMTAsIHJpZ2h0OiAxMCB9fVxyXG4gICAgICAgIGRyYWdFbGFzdGljPXsxfVxyXG4gICAgICAgIG9uRHJhZ1N0YXJ0PXsoKSA9PiBzZXREcmFnZ2luZyh0cnVlKX1cclxuICAgICAgICBvbkRyYWdFbmQ9eygpID0+IHNldERyYWdnaW5nKGZhbHNlKX1cclxuICAgICAgICBvbkRyYWc9eyhlLCB7IHBvaW50IH0pID0+IG1vdmVJdGVtKGksIHBvaW50LnkpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkUm9vdH1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOlxyXG4gICAgICAgICAgICAvLyAgIGkgPT09IHRvdGFsSXRlbXMgLSAxID8gJ3JnYigyNTUgMjU1IDI1NSAvIDkwJSknIDogJ3doaXRlJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENhcmRIZWFkZXJcclxuICAgICAgICAgICAgdGl0bGU9e2RhdGEubmFtZX1cclxuICAgICAgICAgICAgdGl0bGVUeXBvZ3JhcGh5UHJvcHM9e3tcclxuICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiaDFcIixcclxuICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjNyZW0nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN1YmhlYWRlclR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgdmFyaWFudDogJ2NhcHRpb24nXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN1YmhlYWRlcj17ZGF0YS5jb21tYW5kfVxyXG4gICAgICAgICAgICBhY3Rpb249e1xyXG4gICAgICAgICAgICAgIDxCb3ggd2lkdGg9JzEwMCUnIGp1c3RpZnlDb250ZW50PSdmbGV4LWVuZCc+XHJcbiAgICAgICAgICAgICAgICA8QnJhbmRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChkYXRhLmNvbW1hbmQgfHwgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29weU1lc3NhZ2VPcGVuVG8odHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMTIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcj0nc3VjY2VzcydcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQ29weVxyXG4gICAgICAgICAgICAgICAgPC9CcmFuZEJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPjwvQ2FyZEhlYWRlcj5cclxuICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInPlxyXG4gICAgICAgICAgICAgIHtkYXRhLmRlc2NyaXB0aW9ufVxyXG5cclxuICAgICAgICAgICAgICA8U3R5bGVkSHRtbExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e2RhdGEudXJsfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2RhdGEubmFtZSArICcgbnBtIGhvbWUnfVxyXG4gICAgICAgICAgICAgICAgY29sb3I9e1NFQ09OREFSWV9DT0xPUn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXHJcbiAgICAgICAgICAgICAgICByb2xlPSdsaW5rJ1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRIdG1sTGluaz5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTnBtUGFja2FnZXNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==