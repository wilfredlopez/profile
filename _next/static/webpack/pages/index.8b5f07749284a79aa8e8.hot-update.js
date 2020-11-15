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
      color: 'white'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbnBtLXBhY2thZ2UvTnBtUGFja2FnZXMudHN4Il0sIm5hbWVzIjpbInNwcmluZyIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwidXNlTnBtU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwid3JhcHBlciIsImNvbG9yIiwiYmFja2dyb3VuZCIsImNhcmRSb290IiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJOcG1QYWNrYWdlcyIsInByb3BzIiwiY2xhc3NlcyIsInVzZVRoZW1lIiwicG9zaXRpb25zIiwidXNlUmVmIiwiY3VycmVudCIsIml0ZW1zIiwic2V0SXRlbXMiLCJSZWFjdCIsInVzZVN0YXRlIiwibGltaXQiLCJOUE1fUEFDS0FHRVMiLCJzbGljZSIsInNldFBvc2l0aW9uIiwiaSIsIm9mZnNldCIsIm1vdmVJdGVtIiwiZHJhZ09mZnNldCIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibW92ZSIsImRhcmsiLCJwYWxldHRlIiwicGFwZXIiLCJtYXAiLCJwYSIsImluZGV4IiwibmFtZSIsImxlbmd0aCIsIm9uVG9wIiwiekluZGV4IiwiZmxhdCIsInRyYW5zaXRpb24iLCJkZWxheSIsIk5wbVBhY2thZ2UiLCJkYXRhIiwidG90YWxJdGVtcyIsImlzRHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsIm1hdGNoZXMiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJ1cCIsInJlZiIsImNvcHlNZXNzYWdlT3BlbiIsInNldENvcHlNZXNzYWdlT3BlblRvIiwiX3NldFBvc2l0aW9uIiwidGhyb3R0bGUiLCJvZmZzZXRIZWlnaHQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJ1c2VFZmZlY3QiLCJwb3NpdGlvbiIsInNjYWxlIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiZSIsInBvaW50IiwieSIsImNvbXBvbmVudCIsInN0eWxlIiwiZm9udFNpemUiLCJ2YXJpYW50IiwiY29tbWFuZCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImRlc2NyaXB0aW9uIiwidXJsIiwiU0VDT05EQVJZX0NPTE9SIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFPQSxNQUFNQSxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFLFFBRE87QUFFYkMsV0FBUyxFQUFFLEdBRkU7QUFHYkMsU0FBTyxFQUFFO0FBSEksQ0FBZjtBQU1BLE1BQU1DLFlBQVksR0FBR0Msb0VBQVUsQ0FBQ0MsS0FBSyxJQUFJO0FBQ3ZDLFNBQU87QUFDTEMsV0FBTyxFQUFFO0FBQ1BDLFdBQUssRUFBRSxNQURBO0FBRVBDLGdCQUFVLEVBQUU7QUFGTCxLQURKO0FBS0xDLFlBQVEsRUFBRTtBQUNSRixXQUFLLEVBQUUsTUFEQztBQUVSQyxnQkFBVSxFQUFFLE1BRko7QUFHUkUsb0JBQWMsRUFBRSxRQUhSO0FBSVJDLFlBQU0sRUFBRSxHQUpBO0FBS1JDLGdCQUFVLEVBQUUsWUFMSjtBQU1SQyxhQUFPLEVBQUUsTUFORDtBQU9SQyxtQkFBYSxFQUFFO0FBUFA7QUFMTCxHQUFQO0FBZUQsQ0FoQjhCLENBQS9COztBQWtCQSxNQUFNQyxXQUFXLEdBQUlDLEtBQUQsSUFBa0I7QUFBQTs7QUFDcEMsUUFBTUMsT0FBTyxHQUFHZCxZQUFZLEVBQTVCO0FBRUEsUUFBTUUsS0FBSyxHQUFHYSxrRUFBUSxFQUF0QjtBQUVBLFFBQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBYSxFQUFiLENBQU4sQ0FBdUJDLE9BQXpDO0FBQ0EsUUFBTSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsSUFBb0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FDeEJULEtBQUssQ0FBQ1UsS0FBTixHQUFjQywwREFBWSxDQUFDQyxLQUFiLENBQW1CLENBQW5CLEVBQXNCWixLQUFL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QUFDLFNBWFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQTZDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3JCLElBQUksQ0FBQ2lDLFdBRFIsRUFHRSxNQUFDLHNEQUFEO0FBQ0UsUUFBSSxFQUFFakMsSUFBSSxDQUFDa0MsR0FEYjtBQUVFLFNBQUssRUFBRWxDLElBQUksQ0FBQ1IsSUFBTCxHQUFZLFdBRnJCO0FBR0UsU0FBSyxFQUFFMkMsK0RBSFQ7QUFJRSxTQUFLLEVBQUU7QUFDTHpFLGFBQU8sRUFBRTtBQURKLEtBSlQ7QUFPRSxVQUFNLEVBQUMsUUFQVDtBQVFFLE9BQUcsRUFBQyxxQkFSTjtBQVNFLFFBQUksRUFBQyxNQVRQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FXR3NDLElBQUksQ0FBQ1IsSUFYUixDQUhGLENBREYsQ0E3Q0YsQ0FkRixDQXJCRixDQURGO0FBd0dEOztJQTNIUU8sVTtVQUNTL0MsWSxFQUVGZSwwRCxFQUNFc0MsdUU7OztNQUpUTixVO0FBNkhNbkMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGI1ZjA3NzQ5Mjg0YTc5YWE4ZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIENhcmQsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBtYWtlU3R5bGVzLFxyXG4gIFBhcGVyLFxyXG4gIFNuYWNrYmFyLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgdXNlVGhlbWUsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IE5ubVBhY2thZ2UsIE5QTV9QQUNLQUdFUyB9IGZyb20gJy4vTlBNX1BBQ0tBR0VTJ1xyXG5pbXBvcnQgeyBCcmFuZEJ1dHRvbiB9IGZyb20gJ0Byb290L3RoZW1lL0N1c3RvbSdcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBEaXZpZGVyRWxlbWVudCwgU3R5bGVkSHRtbExpbmsgfSBmcm9tICcuLi9zaGFyZWQnXHJcbmltcG9ydCB7IGZpbmRJbmRleCwgUG9zaXRpb24sIG1vdmUgfSBmcm9tICcuLi9zaGFyZWQvZmluZC1pbmRleCdcclxuaW1wb3J0IHsgREFSS19CQUNLR1JPVU5EX0NPTE9SIH0gZnJvbSAnQHJvb3QvdGhlbWUvZ2V0VGhlbWUnXHJcbmltcG9ydCB7IHRocm90dGxlIH0gZnJvbSAnQHdpbGZyZWRsb3Blei9yZWFjdC11dGlscydcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSdcclxuaW1wb3J0IHsgUFJJTUFSWV9DT0xPUiwgVEVSVElBUllfQ09MT1IsIFNFQ09OREFSWV9DT0xPUiB9IGZyb20gJy4uLy4uL3RoZW1lL2dldFRoZW1lJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBkYXJrPzogYm9vbGVhblxyXG4gIGxpbWl0PzogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IHNwcmluZyA9IHtcclxuICB0eXBlOiAnc3ByaW5nJyxcclxuICBzdGlmZm5lc3M6IDcwMCxcclxuICBkYW1waW5nOiAzMCxcclxufVxyXG5cclxuY29uc3QgdXNlTnBtU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHdyYXBwZXI6IHtcclxuICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxyXG4gICAgfSxcclxuICAgIGNhcmRSb290OiB7XHJcbiAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBoZWlnaHQ6IDIwMCxcclxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgfSxcclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBOcG1QYWNrYWdlcyA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlTnBtU3R5bGVzKClcclxuXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcblxyXG4gIGNvbnN0IHBvc2l0aW9ucyA9IHVzZVJlZjxQb3NpdGlvbltdPihbXSkuY3VycmVudFxyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gUmVhY3QudXNlU3RhdGUoXHJcbiAgICBwcm9wcy5saW1pdCA/IE5QTV9QQUNLQUdFUy5zbGljZSgwLCBwcm9wcy5saW1pdCkgOiBOUE1fUEFDS0FHRVNcclxuICApXHJcbiAgZnVuY3Rpb24gc2V0UG9zaXRpb24oaTogbnVtYmVyLCBvZmZzZXQ6IFBvc2l0aW9uKSB7XHJcbiAgICBwb3NpdGlvbnNbaV0gPSBvZmZzZXRcclxuICB9XHJcbiAgY29uc3QgbW92ZUl0ZW0gPSAoaTogbnVtYmVyLCBkcmFnT2Zmc2V0OiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gZmluZEluZGV4KGksIGRyYWdPZmZzZXQsIHBvc2l0aW9ucylcclxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gaSkge1xyXG4gICAgICBzZXRJdGVtcyhtb3ZlKGl0ZW1zLCBpLCB0YXJnZXRJbmRleCkpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8UGFwZXJcclxuICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICBwcm9wcy5kYXJrXHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfVxyXG4gICAgICAgIGVsZXZhdGlvbj17MH1cclxuICAgICAgPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Qm94IG1iPXsyfSBwdD17Mn0+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyRWxlbWVudD5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj0nY2VudGVyJz5OUE0gUGFja2FnZXM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvRGl2aWRlckVsZW1lbnQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXHJcbiAgICAgICAgICAgIGFsaWduQ29udGVudD0nY2VudGVyJ1xyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpdGVtcy5tYXAoKHBhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBrZXk9e3BhLm5hbWV9IGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgIDxOcG1QYWNrYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17cGF9XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxJdGVtcz17aXRlbXMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgIGk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVJdGVtPXttb3ZlSXRlbX1cclxuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbj17c2V0UG9zaXRpb259XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Qm94IHBiPXsyfSAvPlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5pbnRlcmZhY2UgUGFja1Byb3BzIHtcclxuICBkYXRhOiBObm1QYWNrYWdlXHJcbiAgaTogbnVtYmVyXHJcbiAgdG90YWxJdGVtczogbnVtYmVyXHJcbiAgc2V0UG9zaXRpb246IChpOiBudW1iZXIsIHBvczogUG9zaXRpb24pID0+IHZvaWRcclxuICBtb3ZlSXRlbTogKGk6IG51bWJlciwgZHJhZ09mZnNldDogbnVtYmVyKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IG9uVG9wID0geyB6SW5kZXg6IDEgfVxyXG5jb25zdCBmbGF0ID0ge1xyXG4gIHpJbmRleDogMCxcclxuICB0cmFuc2l0aW9uOiB7IGRlbGF5OiAwLjMgfSxcclxufVxyXG5cclxuZnVuY3Rpb24gTnBtUGFja2FnZSh7IGRhdGEsIGksIG1vdmVJdGVtLCBzZXRQb3NpdGlvbiwgdG90YWxJdGVtcyB9OiBQYWNrUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlTnBtU3R5bGVzKClcclxuICBjb25zdCBbaXNEcmFnZ2luZywgc2V0RHJhZ2dpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcbiAgY29uc3QgbWF0Y2hlcyA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJykpXHJcbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxyXG4gIGNvbnN0IFtjb3B5TWVzc2FnZU9wZW4sIHNldENvcHlNZXNzYWdlT3BlblRvXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IF9zZXRQb3NpdGlvbiA9IHRocm90dGxlKGZ1bmN0aW9uICgpIHtcclxuICAgIHNldFBvc2l0aW9uKGksIHtcclxuICAgICAgaGVpZ2h0OiByZWYuY3VycmVudCEub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICB0b3A6IHJlZi5jdXJyZW50IS5vZmZzZXRUb3AsXHJcbiAgICB9KVxyXG4gIH0sIDEwMClcclxuXHJcbiAgLy8gVXBkYXRlIHRoZSBtZWFzdXJlZCBwb3NpdGlvbiBvZiB0aGUgaXRlbSBzbyB3ZSBjYW4gY2FsY3VsYXRlIHdoZW4gd2Ugc2hvdWxkIHJlYXJyYW5nZS5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgX3NldFBvc2l0aW9uKClcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgb3Blbj17Y29weU1lc3NhZ2VPcGVufVxyXG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezEwMDB9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0Q29weU1lc3NhZ2VPcGVuVG8oZmFsc2UpXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggcG9zaXRpb249J2Fic29sdXRlJyBib3R0b209JzAnIGxlZnQ9JzI1JScgd2lkdGg9ezQwMH0+XHJcbiAgICAgICAgICA8QnJhbmRCdXR0b24gY29sb3I9J3N1Y2Nlc3MnPlxyXG4gICAgICAgICAgICB7LyogPEFsZXJ0IG9uQ2xvc2U9eyBzZXRDb3B5TWVzc2FnZU9wZW5UbyhmYWxzZSl9IHNldmVyaXR5PVwic3VjY2Vzc1wiPiAqL31cclxuICAgICAgICAgICAgPEJveCBkaXNwbGF5PSdibG9jaycgd2lkdGg9JzEwMCUnPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkNvcGllZCB0byBjbGlwYm9hcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB7LyogPC9BbGVydD4gKi99XHJcbiAgICAgICAgICA8L0JyYW5kQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L1NuYWNrYmFyPlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGRyYWc9e21hdGNoZXN9XHJcbiAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgbGF5b3V0XHJcbiAgICAgICAgYW5pbWF0ZT17aXNEcmFnZ2luZyA/IG9uVG9wIDogZmxhdH1cclxuICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjAzIH19XHJcbiAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDEuMTIgfX1cclxuICAgICAgICB0cmFuc2l0aW9uPXtzcHJpbmd9XHJcbiAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7IHRvcDogMTAsIGJvdHRvbTogMTAsIGxlZnQ6IDEwLCByaWdodDogMTAgfX1cclxuICAgICAgICBkcmFnRWxhc3RpYz17MX1cclxuICAgICAgICBvbkRyYWdTdGFydD17KCkgPT4gc2V0RHJhZ2dpbmcodHJ1ZSl9XHJcbiAgICAgICAgb25EcmFnRW5kPXsoKSA9PiBzZXREcmFnZ2luZyhmYWxzZSl9XHJcbiAgICAgICAgb25EcmFnPXsoZSwgeyBwb2ludCB9KSA9PiBtb3ZlSXRlbShpLCBwb2ludC55KX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJkXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZFJvb3R9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDpcclxuICAgICAgICAgICAgLy8gICBpID09PSB0b3RhbEl0ZW1zIC0gMSA/ICdyZ2IoMjU1IDI1NSAyNTUgLyA5MCUpJyA6ICd3aGl0ZScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDYXJkSGVhZGVyXHJcbiAgICAgICAgICAgIHRpdGxlPXtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgIHRpdGxlVHlwb2dyYXBoeVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBcImgxXCIsXHJcbiAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS4zcmVtJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdWJoZWFkZXJUeXBvZ3JhcGh5UHJvcHM9e3tcclxuICAgICAgICAgICAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2dyYXknXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB2YXJpYW50OiAnY2FwdGlvbidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3ViaGVhZGVyPXtkYXRhLmNvbW1hbmR9XHJcbiAgICAgICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICAgICAgPEJveCB3aWR0aD0nMTAwJScganVzdGlmeUNvbnRlbnQ9J2ZsZXgtZW5kJz5cclxuICAgICAgICAgICAgICAgIDxCcmFuZEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGRhdGEuY29tbWFuZCB8fCAnJylcclxuICAgICAgICAgICAgICAgICAgICBzZXRDb3B5TWVzc2FnZU9wZW5Ubyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPSdzdWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBDb3B5XHJcbiAgICAgICAgICAgICAgICA8L0JyYW5kQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+PC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Mic+XHJcbiAgICAgICAgICAgICAge2RhdGEuZGVzY3JpcHRpb259XHJcblxyXG4gICAgICAgICAgICAgIDxTdHlsZWRIdG1sTGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj17ZGF0YS51cmx9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17ZGF0YS5uYW1lICsgJyBucG0gaG9tZSd9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj17U0VDT05EQVJZX0NPTE9SfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcclxuICAgICAgICAgICAgICAgIHJvbGU9J2xpbmsnXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2RhdGEubmFtZX1cclxuICAgICAgICAgICAgICA8L1N0eWxlZEh0bWxMaW5rPlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOcG1QYWNrYWdlc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9