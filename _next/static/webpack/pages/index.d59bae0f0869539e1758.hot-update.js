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
/* harmony import */ var _wilfredlopez_react_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wilfredlopez/react-utils */ "./node_modules/@wilfredlopez/react-utils/dist/index.umd.js");
/* harmony import */ var _wilfredlopez_react_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wilfredlopez_react_utils__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _theme_getTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../theme/getTheme */ "./src/theme/getTheme.ts");
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
  const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["useTheme"])();
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
      lineNumber: 73,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
    style: props.dark ? {
      background: theme.palette.background.paper,
      color: 'inherit'
    } : {},
    className: classes.wrapper,
    elevation: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    mb: 2,
    pt: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx(_shared__WEBPACK_IMPORTED_MODULE_5__["DividerElement"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
      lineNumber: 92,
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
        lineNumber: 101,
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
        lineNumber: 102,
        columnNumber: 19
      }
    }));
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    pb: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  })));
};

_s(NpmPackages, "WypqbobPFaHJp3rzzJn4JzQvNiA=", false, function () {
  return [useNpmStyles, _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["useTheme"]];
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
  const matches = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_8__["default"])(theme.breakpoints.up('sm'));
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  const [copyMessageOpen, setCopyMessageOpenTo] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false);

  const _setPosition = Object(_wilfredlopez_react_utils__WEBPACK_IMPORTED_MODULE_7__["throttle"])(function () {
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
      lineNumber: 155,
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
      lineNumber: 165,
      columnNumber: 9
    }
  }, __jsx(_root_theme_Custom__WEBPACK_IMPORTED_MODULE_2__["BrandButton"], {
    color: "success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    display: "block",
    width: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
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
      lineNumber: 175,
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
      lineNumber: 189,
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
      color: 'inherit',
      style: {
        color: 'gray'
      },
      variant: 'caption'
    },
    subheader: data.command,
    action: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
      width: "100%",
      justifyContent: "flex-end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
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
        lineNumber: 216,
        columnNumber: 17
      }
    }, "Copy")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "body2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }
  }, data.description, __jsx(_shared__WEBPACK_IMPORTED_MODULE_5__["StyledHtmlLink"], {
    href: data.url,
    title: data.name + ' npm home',
    color: _theme_getTheme__WEBPACK_IMPORTED_MODULE_9__["SECONDARY_COLOR"],
    style: {
      display: 'block'
    },
    target: "_blank",
    rel: "noopener noreferrer",
    role: "link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 15
    }
  }, data.name))))));
}

_s2(NpmPackage, "uolQUklCQqj5SH/0vww0DBu/VQ4=", false, function () {
  return [useNpmStyles, _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["useTheme"], _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_8__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbnBtLXBhY2thZ2UvTnBtUGFja2FnZXMudHN4Il0sIm5hbWVzIjpbInNwcmluZyIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwidXNlTnBtU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwid3JhcHBlciIsImNvbG9yIiwiYmFja2dyb3VuZCIsImNhcmRSb290IiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJOcG1QYWNrYWdlcyIsInByb3BzIiwiY2xhc3NlcyIsInVzZVRoZW1lIiwicG9zaXRpb25zIiwidXNlUmVmIiwiY3VycmVudCIsIml0ZW1zIiwic2V0SXRlbXMiLCJSZWFjdCIsInVzZVN0YXRlIiwibGltaXQiLCJOUE1fUEFDS0FHRVMiLCJzbGljZSIsInNldFBvc2l0aW9uIiwiaSIsIm9mZnNldCIsIm1vdmVJdGVtIiwiZHJhZ09mZnNldCIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibW92ZSIsImRhcmsiLCJwYWxldHRlIiwicGFwZXIiLCJtYXAiLCJwYSIsImluZGV4IiwibmFtZSIsImxlbmd0aCIsIm9uVG9wIiwiekluZGV4IiwiZmxhdCIsInRyYW5zaXRpb24iLCJkZWxheSIsIk5wbVBhY2thZ2UiLCJkYXRhIiwidG90YWxJdGVtcyIsImlzRHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsIm1hdGNoZXMiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJ1cCIsInJlZiIsImNvcHlNZXNzYWdlT3BlbiIsInNldENvcHlNZXNzYWdlT3BlblRvIiwiX3NldFBvc2l0aW9uIiwidGhyb3R0bGUiLCJvZmZzZXRIZWlnaHQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJ1c2VFZmZlY3QiLCJwb3NpdGlvbiIsInNjYWxlIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiZSIsInBvaW50IiwieSIsImNvbXBvbmVudCIsInN0eWxlIiwiZm9udFNpemUiLCJ2YXJpYW50IiwiY29tbWFuZCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImRlc2NyaXB0aW9uIiwidXJsIiwiU0VDT05EQVJZX0NPTE9SIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFPQSxNQUFNQSxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFLFFBRE87QUFFYkMsV0FBUyxFQUFFLEdBRkU7QUFHYkMsU0FBTyxFQUFFO0FBSEksQ0FBZjtBQU1BLE1BQU1DLFlBQVksR0FBR0Msb0VBQVUsQ0FBQ0MsS0FBSyxJQUFJO0FBQ3ZDLFNBQU87QUFDTEMsV0FBTyxFQUFFO0FBQ1BDLFdBQUssRUFBRSxNQURBO0FBRVBDLGdCQUFVLEVBQUU7QUFGTCxLQURKO0FBS0xDLFlBQVEsRUFBRTtBQUNSRixXQUFLLEVBQUUsTUFEQztBQUVSQyxnQkFBVSxFQUFFLE1BRko7QUFHUkUsb0JBQWMsRUFBRSxRQUhSO0FBSVJDLFlBQU0sRUFBRSxHQUpBO0FBS1JDLGdCQUFVLEVBQUUsWUFMSjtBQU1SQyxhQUFPLEVBQUUsTUFORDtBQU9SQyxtQkFBYSxFQUFFO0FBUFA7QUFMTCxHQUFQO0FBZUQsQ0FoQjhCLENBQS9COztBQWtCQSxNQUFNQyxXQUFXLEdBQUlDLEtBQUQsSUFBa0I7QUFBQTs7QUFDcEMsUUFBTUMsT0FBTyxHQUFHZCxZQUFZLEVBQTVCO0FBRUEsUUFBTUUsS0FBSyxHQUFHYSxrRUFBUSxFQUF0QjtBQUVBLFFBQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBYSxFQUFiLENBQU4sQ0FBdUJDLE9BQXpDO0FBQ0EsUUFBTSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsSUFBb0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FDeEJULEtBQUssQ0FBQ1UsS0FBTixHQUFjQywwREFBWSxDQUFDQyxLQUFiLENBQW1CLENBQW5CLEVBQXNCWixLQUFL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QUFDLFNBWFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQTZDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3JCLElBQUksQ0FBQ2lDLFdBRFIsRUFHRSxNQUFDLHNEQUFEO0FBQ0UsUUFBSSxFQUFFakMsSUFBSSxDQUFDa0MsR0FEYjtBQUVFLFNBQUssRUFBRWxDLElBQUksQ0FBQ1IsSUFBTCxHQUFZLFdBRnJCO0FBR0UsU0FBSyxFQUFFMkMsK0RBSFQ7QUFJRSxTQUFLLEVBQUU7QUFDTHpFLGFBQU8sRUFBRTtBQURKLEtBSlQ7QUFPRSxVQUFNLEVBQUMsUUFQVDtBQVFFLE9BQUcsRUFBQyxxQkFSTjtBQVNFLFFBQUksRUFBQyxNQVRQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FXR3NDLElBQUksQ0FBQ1IsSUFYUixDQUhGLENBREYsQ0E3Q0YsQ0FkRixDQXJCRixDQURGO0FBd0dEOztJQTNIUU8sVTtVQUNTL0MsWSxFQUVGZSwwRCxFQUNFc0MsdUU7OztNQUpUTixVO0FBNkhNbkMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDU5YmFlMGYwODY5NTM5ZTE3NTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIENhcmQsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBtYWtlU3R5bGVzLFxyXG4gIFBhcGVyLFxyXG4gIFNuYWNrYmFyLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgdXNlVGhlbWUsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IE5ubVBhY2thZ2UsIE5QTV9QQUNLQUdFUyB9IGZyb20gJy4vTlBNX1BBQ0tBR0VTJ1xyXG5pbXBvcnQgeyBCcmFuZEJ1dHRvbiB9IGZyb20gJ0Byb290L3RoZW1lL0N1c3RvbSdcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBEaXZpZGVyRWxlbWVudCwgU3R5bGVkSHRtbExpbmsgfSBmcm9tICcuLi9zaGFyZWQnXHJcbmltcG9ydCB7IGZpbmRJbmRleCwgUG9zaXRpb24sIG1vdmUgfSBmcm9tICcuLi9zaGFyZWQvZmluZC1pbmRleCdcclxuaW1wb3J0IHsgREFSS19CQUNLR1JPVU5EX0NPTE9SIH0gZnJvbSAnQHJvb3QvdGhlbWUvZ2V0VGhlbWUnXHJcbmltcG9ydCB7IHRocm90dGxlIH0gZnJvbSAnQHdpbGZyZWRsb3Blei9yZWFjdC11dGlscydcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSdcclxuaW1wb3J0IHsgUFJJTUFSWV9DT0xPUiwgVEVSVElBUllfQ09MT1IsIFNFQ09OREFSWV9DT0xPUiB9IGZyb20gJy4uLy4uL3RoZW1lL2dldFRoZW1lJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBkYXJrPzogYm9vbGVhblxyXG4gIGxpbWl0PzogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IHNwcmluZyA9IHtcclxuICB0eXBlOiAnc3ByaW5nJyxcclxuICBzdGlmZm5lc3M6IDcwMCxcclxuICBkYW1waW5nOiAzMCxcclxufVxyXG5cclxuY29uc3QgdXNlTnBtU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHdyYXBwZXI6IHtcclxuICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxyXG4gICAgfSxcclxuICAgIGNhcmRSb290OiB7XHJcbiAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBoZWlnaHQ6IDIwMCxcclxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgfSxcclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBOcG1QYWNrYWdlcyA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlTnBtU3R5bGVzKClcclxuXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcblxyXG4gIGNvbnN0IHBvc2l0aW9ucyA9IHVzZVJlZjxQb3NpdGlvbltdPihbXSkuY3VycmVudFxyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gUmVhY3QudXNlU3RhdGUoXHJcbiAgICBwcm9wcy5saW1pdCA/IE5QTV9QQUNLQUdFUy5zbGljZSgwLCBwcm9wcy5saW1pdCkgOiBOUE1fUEFDS0FHRVNcclxuICApXHJcbiAgZnVuY3Rpb24gc2V0UG9zaXRpb24oaTogbnVtYmVyLCBvZmZzZXQ6IFBvc2l0aW9uKSB7XHJcbiAgICBwb3NpdGlvbnNbaV0gPSBvZmZzZXRcclxuICB9XHJcbiAgY29uc3QgbW92ZUl0ZW0gPSAoaTogbnVtYmVyLCBkcmFnT2Zmc2V0OiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gZmluZEluZGV4KGksIGRyYWdPZmZzZXQsIHBvc2l0aW9ucylcclxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gaSkge1xyXG4gICAgICBzZXRJdGVtcyhtb3ZlKGl0ZW1zLCBpLCB0YXJnZXRJbmRleCkpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8UGFwZXJcclxuICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICBwcm9wcy5kYXJrXHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgICAgICAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDoge31cclxuICAgICAgICB9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9XHJcbiAgICAgICAgZWxldmF0aW9uPXswfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxCb3ggbWI9ezJ9IHB0PXsyfT5cclxuICAgICAgICAgICAgPERpdmlkZXJFbGVtZW50PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGFsaWduPSdjZW50ZXInPk5QTSBQYWNrYWdlczwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9EaXZpZGVyRWxlbWVudD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgICAgIGp1c3RpZnk9J2NlbnRlcidcclxuICAgICAgICAgICAgYWxpZ25Db250ZW50PSdjZW50ZXInXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2l0ZW1zLm1hcCgocGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxHcmlkIGtleT17cGEubmFtZX0gaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgPE5wbVBhY2thZ2VcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtwYX1cclxuICAgICAgICAgICAgICAgICAgICB0b3RhbEl0ZW1zPXtpdGVtcy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgaT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZUl0ZW09e21vdmVJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uPXtzZXRQb3NpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDxCb3ggcGI9ezJ9IC8+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmludGVyZmFjZSBQYWNrUHJvcHMge1xyXG4gIGRhdGE6IE5ubVBhY2thZ2VcclxuICBpOiBudW1iZXJcclxuICB0b3RhbEl0ZW1zOiBudW1iZXJcclxuICBzZXRQb3NpdGlvbjogKGk6IG51bWJlciwgcG9zOiBQb3NpdGlvbikgPT4gdm9pZFxyXG4gIG1vdmVJdGVtOiAoaTogbnVtYmVyLCBkcmFnT2Zmc2V0OiBudW1iZXIpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3Qgb25Ub3AgPSB7IHpJbmRleDogMSB9XHJcbmNvbnN0IGZsYXQgPSB7XHJcbiAgekluZGV4OiAwLFxyXG4gIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuMyB9LFxyXG59XHJcblxyXG5mdW5jdGlvbiBOcG1QYWNrYWdlKHsgZGF0YSwgaSwgbW92ZUl0ZW0sIHNldFBvc2l0aW9uLCB0b3RhbEl0ZW1zIH06IFBhY2tQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VOcG1TdHlsZXMoKVxyXG4gIGNvbnN0IFtpc0RyYWdnaW5nLCBzZXREcmFnZ2luZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcclxuICBjb25zdCBtYXRjaGVzID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnc20nKSlcclxuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXHJcbiAgY29uc3QgW2NvcHlNZXNzYWdlT3Blbiwgc2V0Q29weU1lc3NhZ2VPcGVuVG9dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgX3NldFBvc2l0aW9uID0gdGhyb3R0bGUoZnVuY3Rpb24gKCkge1xyXG4gICAgc2V0UG9zaXRpb24oaSwge1xyXG4gICAgICBoZWlnaHQ6IHJlZi5jdXJyZW50IS5vZmZzZXRIZWlnaHQsXHJcbiAgICAgIHRvcDogcmVmLmN1cnJlbnQhLm9mZnNldFRvcCxcclxuICAgIH0pXHJcbiAgfSwgMTAwKVxyXG5cclxuICAvLyBVcGRhdGUgdGhlIG1lYXN1cmVkIHBvc2l0aW9uIG9mIHRoZSBpdGVtIHNvIHdlIGNhbiBjYWxjdWxhdGUgd2hlbiB3ZSBzaG91bGQgcmVhcnJhbmdlLlxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBfc2V0UG9zaXRpb24oKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U25hY2tiYXJcclxuICAgICAgICBvcGVuPXtjb3B5TWVzc2FnZU9wZW59XHJcbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MTAwMH1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRDb3B5TWVzc2FnZU9wZW5UbyhmYWxzZSlcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBwb3NpdGlvbj0nYWJzb2x1dGUnIGJvdHRvbT0nMCcgbGVmdD0nMjUlJyB3aWR0aD17NDAwfT5cclxuICAgICAgICAgIDxCcmFuZEJ1dHRvbiBjb2xvcj0nc3VjY2Vzcyc+XHJcbiAgICAgICAgICAgIHsvKiA8QWxlcnQgb25DbG9zZT17IHNldENvcHlNZXNzYWdlT3BlblRvKGZhbHNlKX0gc2V2ZXJpdHk9XCJzdWNjZXNzXCI+ICovfVxyXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9J2Jsb2NrJyB3aWR0aD0nMTAwJSc+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Q29waWVkIHRvIGNsaXBib2FyZDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHsvKiA8L0FsZXJ0PiAqL31cclxuICAgICAgICAgIDwvQnJhbmRCdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvU25hY2tiYXI+XHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgZHJhZz17bWF0Y2hlc31cclxuICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICBsYXlvdXRcclxuICAgICAgICBhbmltYXRlPXtpc0RyYWdnaW5nID8gb25Ub3AgOiBmbGF0fVxyXG4gICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDMgfX1cclxuICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMS4xMiB9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3NwcmluZ31cclxuICAgICAgICBkcmFnQ29uc3RyYWludHM9e3sgdG9wOiAxMCwgYm90dG9tOiAxMCwgbGVmdDogMTAsIHJpZ2h0OiAxMCB9fVxyXG4gICAgICAgIGRyYWdFbGFzdGljPXsxfVxyXG4gICAgICAgIG9uRHJhZ1N0YXJ0PXsoKSA9PiBzZXREcmFnZ2luZyh0cnVlKX1cclxuICAgICAgICBvbkRyYWdFbmQ9eygpID0+IHNldERyYWdnaW5nKGZhbHNlKX1cclxuICAgICAgICBvbkRyYWc9eyhlLCB7IHBvaW50IH0pID0+IG1vdmVJdGVtKGksIHBvaW50LnkpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkUm9vdH1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOlxyXG4gICAgICAgICAgICAvLyAgIGkgPT09IHRvdGFsSXRlbXMgLSAxID8gJ3JnYigyNTUgMjU1IDI1NSAvIDkwJSknIDogJ3doaXRlJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENhcmRIZWFkZXJcclxuICAgICAgICAgICAgdGl0bGU9e2RhdGEubmFtZX1cclxuICAgICAgICAgICAgdGl0bGVUeXBvZ3JhcGh5UHJvcHM9e3tcclxuICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiaDFcIixcclxuICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjNyZW0nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN1YmhlYWRlclR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheSdcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ6ICdjYXB0aW9uJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdWJoZWFkZXI9e2RhdGEuY29tbWFuZH1cclxuICAgICAgICAgICAgYWN0aW9uPXtcclxuICAgICAgICAgICAgICA8Qm94IHdpZHRoPScxMDAlJyBqdXN0aWZ5Q29udGVudD0nZmxleC1lbmQnPlxyXG4gICAgICAgICAgICAgICAgPEJyYW5kQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZGF0YS5jb21tYW5kIHx8ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldENvcHlNZXNzYWdlT3BlblRvKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEyLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgICAgY29sb3I9J3N1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIENvcHlcclxuICAgICAgICAgICAgICAgIDwvQnJhbmRCdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID48L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJz5cclxuICAgICAgICAgICAgICB7ZGF0YS5kZXNjcmlwdGlvbn1cclxuXHJcbiAgICAgICAgICAgICAgPFN0eWxlZEh0bWxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPXtkYXRhLnVybH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtkYXRhLm5hbWUgKyAnIG5wbSBob21lJ31cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtTRUNPTkRBUllfQ09MT1J9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgICAgICAgcm9sZT0nbGluaydcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvU3R5bGVkSHRtbExpbms+XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5wbVBhY2thZ2VzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=