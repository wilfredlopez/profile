webpackHotUpdate_N_E("pages/projects",{

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
      color: 'secondary',
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
    color: _root_theme_getTheme__WEBPACK_IMPORTED_MODULE_7__["TERTIARY_COLOR"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbnBtLXBhY2thZ2UvTnBtUGFja2FnZXMudHN4Il0sIm5hbWVzIjpbInNwcmluZyIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwidXNlTnBtU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwid3JhcHBlciIsImNvbG9yIiwiYmFja2dyb3VuZCIsImNhcmRSb290IiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJOcG1QYWNrYWdlcyIsInByb3BzIiwiY2xhc3NlcyIsInBvc2l0aW9ucyIsInVzZVJlZiIsImN1cnJlbnQiLCJpdGVtcyIsInNldEl0ZW1zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxpbWl0IiwiTlBNX1BBQ0tBR0VTIiwic2xpY2UiLCJzZXRQb3NpdGlvbiIsImkiLCJvZmZzZXQiLCJtb3ZlSXRlbSIsImRyYWdPZmZzZXQiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1vdmUiLCJkYXJrIiwiREFSS19CQUNLR1JPVU5EX0NPTE9SIiwibWFwIiwicGEiLCJpbmRleCIsIm5hbWUiLCJsZW5ndGgiLCJvblRvcCIsInpJbmRleCIsImZsYXQiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJOcG1QYWNrYWdlIiwiZGF0YSIsInRvdGFsSXRlbXMiLCJpc0RyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJ1c2VUaGVtZSIsIm1hdGNoZXMiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJ1cCIsInJlZiIsImNvcHlNZXNzYWdlT3BlbiIsInNldENvcHlNZXNzYWdlT3BlblRvIiwiX3NldFBvc2l0aW9uIiwidGhyb3R0bGUiLCJvZmZzZXRIZWlnaHQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJ1c2VFZmZlY3QiLCJwb3NpdGlvbiIsInNjYWxlIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiZSIsInBvaW50IiwieSIsImNvbXBvbmVudCIsInN0eWxlIiwiZm9udFNpemUiLCJ2YXJpYW50IiwiY29tbWFuZCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImRlc2NyaXB0aW9uIiwidXJsIiwiVEVSVElBUllfQ09MT1IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0EsTUFBTUEsTUFBTSxHQUFHO0FBQ2JDLE1BQUksRUFBRSxRQURPO0FBRWJDLFdBQVMsRUFBRSxHQUZFO0FBR2JDLFNBQU8sRUFBRTtBQUhJLENBQWY7QUFNQSxNQUFNQyxZQUFZLEdBQUdDLG9FQUFVLENBQUNDLEtBQUssSUFBSTtBQUN2QyxTQUFPO0FBQ0xDLFdBQU8sRUFBRTtBQUNQQyxXQUFLLEVBQUUsTUFEQTtBQUVQQyxnQkFBVSxFQUFFO0FBRkwsS0FESjtBQUtMQyxZQUFRLEVBQUU7QUFDUkYsV0FBSyxFQUFFLE1BREM7QUFFUkMsZ0JBQVUsRUFBRSxNQUZKO0FBR1JFLG9CQUFjLEVBQUUsUUFIUjtBQUlSQyxZQUFNLEVBQUUsR0FKQTtBQUtSQyxnQkFBVSxFQUFFLFlBTEo7QUFNUkMsYUFBTyxFQUFFLE1BTkQ7QUFPUkMsbUJBQWEsRUFBRTtBQVBQO0FBTEwsR0FBUDtBQWVELENBaEI4QixDQUEvQjs7QUFrQkEsTUFBTUMsV0FBVyxHQUFJQyxLQUFELElBQWtCO0FBQUE7O0FBQ3BDLFFBQU1DLE9BQU8sR0FBR2QsWUFBWSxFQUE1QjtBQUVBLFFBQU1lLFNBQVMsR0FBR0Msb0RBQU0sQ0FBYSxFQUFiLENBQU4sQ0FBdUJDLE9BQXpDO0FBQ0EsUUFBTSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsSUFBb0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FDeEJSLEtBQUssQ0FBQ1MsS0FBTixHQUFjQywwREFBWSxDQUFDQyxLQUFiLENBQW1CLENBQW5CLEVBQXNCWCxLQUFLLENBQUNTLEtBQTVCLENBQWQsR0FBbURD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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHdEIsSUFBSSxDQUFDa0MsV0FEUixFQUdFLE1BQUMsc0RBQUQ7QUFDRSxRQUFJLEVBQUVsQyxJQUFJLENBQUNtQyxHQURiO0FBRUUsU0FBSyxFQUFFbkMsSUFBSSxDQUFDUixJQUFMLEdBQVksV0FGckI7QUFHRSxTQUFLLEVBQUU0QyxtRUFIVDtBQUlFLFNBQUssRUFBRTtBQUNMeEUsYUFBTyxFQUFFO0FBREosS0FKVDtBQU9FLFVBQU0sRUFBQyxRQVBUO0FBUUUsT0FBRyxFQUFDLHFCQVJOO0FBU0UsUUFBSSxFQUFDLE1BVFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVdHb0MsSUFBSSxDQUFDUixJQVhSLENBSEYsQ0FERixDQTFDRixDQWRGLENBckJGLENBREY7QUFxR0Q7O0lBeEhRTyxVO1VBQ1M3QyxZLEVBRUZrRCwwRCxFQUNFRSx1RTs7O01BSlRQLFU7QUEwSE1qQywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy5kY2U0NGIzODVjYjBhNWQxOTNkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQ2FyZCxcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENvbnRhaW5lcixcclxuICBHcmlkLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgUGFwZXIsXHJcbiAgU25hY2tiYXIsXHJcbiAgVHlwb2dyYXBoeSxcclxuICB1c2VUaGVtZSxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgTm5tUGFja2FnZSwgTlBNX1BBQ0tBR0VTIH0gZnJvbSAnLi9OUE1fUEFDS0FHRVMnXHJcbmltcG9ydCB7IEJyYW5kQnV0dG9uIH0gZnJvbSAnQHJvb3QvdGhlbWUvQ3VzdG9tJ1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERpdmlkZXJFbGVtZW50LCBTdHlsZWRIdG1sTGluayB9IGZyb20gJy4uL3NoYXJlZCdcclxuaW1wb3J0IHsgZmluZEluZGV4LCBQb3NpdGlvbiwgbW92ZSB9IGZyb20gJy4uL3NoYXJlZC9maW5kLWluZGV4J1xyXG5pbXBvcnQgeyBEQVJLX0JBQ0tHUk9VTkRfQ09MT1IgfSBmcm9tICdAcm9vdC90aGVtZS9nZXRUaGVtZSdcclxuaW1wb3J0IHsgdGhyb3R0bGUgfSBmcm9tICdAd2lsZnJlZGxvcGV6L3JlYWN0LXV0aWxzJ1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5J1xyXG5pbXBvcnQgeyBQUklNQVJZX0NPTE9SLCBURVJUSUFSWV9DT0xPUiB9IGZyb20gJy4uLy4uL3RoZW1lL2dldFRoZW1lJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBkYXJrPzogYm9vbGVhblxyXG4gIGxpbWl0PzogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IHNwcmluZyA9IHtcclxuICB0eXBlOiAnc3ByaW5nJyxcclxuICBzdGlmZm5lc3M6IDcwMCxcclxuICBkYW1waW5nOiAzMCxcclxufVxyXG5cclxuY29uc3QgdXNlTnBtU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHdyYXBwZXI6IHtcclxuICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxyXG4gICAgfSxcclxuICAgIGNhcmRSb290OiB7XHJcbiAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBoZWlnaHQ6IDIwMCxcclxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgfSxcclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBOcG1QYWNrYWdlcyA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlTnBtU3R5bGVzKClcclxuXHJcbiAgY29uc3QgcG9zaXRpb25zID0gdXNlUmVmPFBvc2l0aW9uW10+KFtdKS5jdXJyZW50XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShcclxuICAgIHByb3BzLmxpbWl0ID8gTlBNX1BBQ0tBR0VTLnNsaWNlKDAsIHByb3BzLmxpbWl0KSA6IE5QTV9QQUNLQUdFU1xyXG4gIClcclxuICBmdW5jdGlvbiBzZXRQb3NpdGlvbihpOiBudW1iZXIsIG9mZnNldDogUG9zaXRpb24pIHtcclxuICAgIHBvc2l0aW9uc1tpXSA9IG9mZnNldFxyXG4gIH1cclxuICBjb25zdCBtb3ZlSXRlbSA9IChpOiBudW1iZXIsIGRyYWdPZmZzZXQ6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBmaW5kSW5kZXgoaSwgZHJhZ09mZnNldCwgcG9zaXRpb25zKVxyXG4gICAgaWYgKHRhcmdldEluZGV4ICE9PSBpKSB7XHJcbiAgICAgIHNldEl0ZW1zKG1vdmUoaXRlbXMsIGksIHRhcmdldEluZGV4KSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxQYXBlclxyXG4gICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgIHByb3BzLmRhcmtcclxuICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogREFSS19CQUNLR1JPVU5EX0NPTE9SLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDoge31cclxuICAgICAgICB9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9XHJcbiAgICAgICAgZWxldmF0aW9uPXswfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxCb3ggbWI9ezJ9IHB0PXsyfT5cclxuICAgICAgICAgICAgPERpdmlkZXJFbGVtZW50PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGFsaWduPSdjZW50ZXInPk5QTSBQYWNrYWdlczwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9EaXZpZGVyRWxlbWVudD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgICAgIGp1c3RpZnk9J2NlbnRlcidcclxuICAgICAgICAgICAgYWxpZ25Db250ZW50PSdjZW50ZXInXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2l0ZW1zLm1hcCgocGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxHcmlkIGtleT17cGEubmFtZX0gaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgPE5wbVBhY2thZ2VcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtwYX1cclxuICAgICAgICAgICAgICAgICAgICB0b3RhbEl0ZW1zPXtpdGVtcy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgaT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZUl0ZW09e21vdmVJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uPXtzZXRQb3NpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDxCb3ggcGI9ezJ9IC8+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmludGVyZmFjZSBQYWNrUHJvcHMge1xyXG4gIGRhdGE6IE5ubVBhY2thZ2VcclxuICBpOiBudW1iZXJcclxuICB0b3RhbEl0ZW1zOiBudW1iZXJcclxuICBzZXRQb3NpdGlvbjogKGk6IG51bWJlciwgcG9zOiBQb3NpdGlvbikgPT4gdm9pZFxyXG4gIG1vdmVJdGVtOiAoaTogbnVtYmVyLCBkcmFnT2Zmc2V0OiBudW1iZXIpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3Qgb25Ub3AgPSB7IHpJbmRleDogMSB9XHJcbmNvbnN0IGZsYXQgPSB7XHJcbiAgekluZGV4OiAwLFxyXG4gIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuMyB9LFxyXG59XHJcblxyXG5mdW5jdGlvbiBOcG1QYWNrYWdlKHsgZGF0YSwgaSwgbW92ZUl0ZW0sIHNldFBvc2l0aW9uLCB0b3RhbEl0ZW1zIH06IFBhY2tQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VOcG1TdHlsZXMoKVxyXG4gIGNvbnN0IFtpc0RyYWdnaW5nLCBzZXREcmFnZ2luZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcclxuICBjb25zdCBtYXRjaGVzID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnc20nKSlcclxuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXHJcbiAgY29uc3QgW2NvcHlNZXNzYWdlT3Blbiwgc2V0Q29weU1lc3NhZ2VPcGVuVG9dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgX3NldFBvc2l0aW9uID0gdGhyb3R0bGUoZnVuY3Rpb24gKCkge1xyXG4gICAgc2V0UG9zaXRpb24oaSwge1xyXG4gICAgICBoZWlnaHQ6IHJlZi5jdXJyZW50IS5vZmZzZXRIZWlnaHQsXHJcbiAgICAgIHRvcDogcmVmLmN1cnJlbnQhLm9mZnNldFRvcCxcclxuICAgIH0pXHJcbiAgfSwgMTAwKVxyXG5cclxuICAvLyBVcGRhdGUgdGhlIG1lYXN1cmVkIHBvc2l0aW9uIG9mIHRoZSBpdGVtIHNvIHdlIGNhbiBjYWxjdWxhdGUgd2hlbiB3ZSBzaG91bGQgcmVhcnJhbmdlLlxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBfc2V0UG9zaXRpb24oKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U25hY2tiYXJcclxuICAgICAgICBvcGVuPXtjb3B5TWVzc2FnZU9wZW59XHJcbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MTAwMH1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRDb3B5TWVzc2FnZU9wZW5UbyhmYWxzZSlcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBwb3NpdGlvbj0nYWJzb2x1dGUnIGJvdHRvbT0nMCcgbGVmdD0nMjUlJyB3aWR0aD17NDAwfT5cclxuICAgICAgICAgIDxCcmFuZEJ1dHRvbiBjb2xvcj0nc3VjY2Vzcyc+XHJcbiAgICAgICAgICAgIHsvKiA8QWxlcnQgb25DbG9zZT17IHNldENvcHlNZXNzYWdlT3BlblRvKGZhbHNlKX0gc2V2ZXJpdHk9XCJzdWNjZXNzXCI+ICovfVxyXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9J2Jsb2NrJyB3aWR0aD0nMTAwJSc+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Q29waWVkIHRvIGNsaXBib2FyZDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHsvKiA8L0FsZXJ0PiAqL31cclxuICAgICAgICAgIDwvQnJhbmRCdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvU25hY2tiYXI+XHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgZHJhZz17bWF0Y2hlc31cclxuICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICBsYXlvdXRcclxuICAgICAgICBhbmltYXRlPXtpc0RyYWdnaW5nID8gb25Ub3AgOiBmbGF0fVxyXG4gICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDMgfX1cclxuICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMS4xMiB9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3NwcmluZ31cclxuICAgICAgICBkcmFnQ29uc3RyYWludHM9e3sgdG9wOiAxMCwgYm90dG9tOiAxMCwgbGVmdDogMTAsIHJpZ2h0OiAxMCB9fVxyXG4gICAgICAgIGRyYWdFbGFzdGljPXsxfVxyXG4gICAgICAgIG9uRHJhZ1N0YXJ0PXsoKSA9PiBzZXREcmFnZ2luZyh0cnVlKX1cclxuICAgICAgICBvbkRyYWdFbmQ9eygpID0+IHNldERyYWdnaW5nKGZhbHNlKX1cclxuICAgICAgICBvbkRyYWc9eyhlLCB7IHBvaW50IH0pID0+IG1vdmVJdGVtKGksIHBvaW50LnkpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkUm9vdH1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOlxyXG4gICAgICAgICAgICAvLyAgIGkgPT09IHRvdGFsSXRlbXMgLSAxID8gJ3JnYigyNTUgMjU1IDI1NSAvIDkwJSknIDogJ3doaXRlJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENhcmRIZWFkZXJcclxuICAgICAgICAgICAgdGl0bGU9e2RhdGEubmFtZX1cclxuICAgICAgICAgICAgdGl0bGVUeXBvZ3JhcGh5UHJvcHM9e3tcclxuICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiaDFcIixcclxuICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjNyZW0nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN1YmhlYWRlclR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgICAgICAgICB2YXJpYW50OiAnY2FwdGlvbidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3ViaGVhZGVyPXtkYXRhLmNvbW1hbmR9XHJcbiAgICAgICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICAgICAgPEJveCB3aWR0aD0nMTAwJScganVzdGlmeUNvbnRlbnQ9J2ZsZXgtZW5kJz5cclxuICAgICAgICAgICAgICAgIDxCcmFuZEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGRhdGEuY29tbWFuZCB8fCAnJylcclxuICAgICAgICAgICAgICAgICAgICBzZXRDb3B5TWVzc2FnZU9wZW5Ubyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPSdzdWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBDb3B5XHJcbiAgICAgICAgICAgICAgICA8L0JyYW5kQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+PC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Mic+XHJcbiAgICAgICAgICAgICAge2RhdGEuZGVzY3JpcHRpb259XHJcblxyXG4gICAgICAgICAgICAgIDxTdHlsZWRIdG1sTGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj17ZGF0YS51cmx9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17ZGF0YS5uYW1lICsgJyBucG0gaG9tZSd9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj17VEVSVElBUllfQ09MT1J9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgICAgICAgcm9sZT0nbGluaydcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvU3R5bGVkSHRtbExpbms+XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5wbVBhY2thZ2VzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=