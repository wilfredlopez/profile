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
      color: 'inherit',
      background: theme.palette.background.paper
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbnBtLXBhY2thZ2UvTnBtUGFja2FnZXMudHN4Il0sIm5hbWVzIjpbInNwcmluZyIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwidXNlTnBtU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwid3JhcHBlciIsImNvbG9yIiwiYmFja2dyb3VuZCIsInBhbGV0dGUiLCJwYXBlciIsImNhcmRSb290IiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJOcG1QYWNrYWdlcyIsInByb3BzIiwiY2xhc3NlcyIsInVzZVRoZW1lIiwicG9zaXRpb25zIiwidXNlUmVmIiwiY3VycmVudCIsIml0ZW1zIiwic2V0SXRlbXMiLCJSZWFjdCIsInVzZVN0YXRlIiwibGltaXQiLCJOUE1fUEFDS0FHRVMiLCJzbGljZSIsInNldFBvc2l0aW9uIiwiaSIsIm9mZnNldCIsIm1vdmVJdGVtIiwiZHJhZ09mZnNldCIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibW92ZSIsImRhcmsiLCJtYXAiLCJwYSIsImluZGV4IiwibmFtZSIsImxlbmd0aCIsIm9uVG9wIiwiekluZGV4IiwiZmxhdCIsInRyYW5zaXRpb24iLCJkZWxheSIsIk5wbVBhY2thZ2UiLCJkYXRhIiwidG90YWxJdGVtcyIsImlzRHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsIm1hdGNoZXMiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJ1cCIsInJlZiIsImNvcHlNZXNzYWdlT3BlbiIsInNldENvcHlNZXNzYWdlT3BlblRvIiwiX3NldFBvc2l0aW9uIiwidGhyb3R0bGUiLCJvZmZzZXRIZWlnaHQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJ1c2VFZmZlY3QiLCJwb3NpdGlvbiIsInNjYWxlIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiZSIsInBvaW50IiwieSIsImNvbXBvbmVudCIsInN0eWxlIiwiZm9udFNpemUiLCJ2YXJpYW50IiwiY29tbWFuZCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImRlc2NyaXB0aW9uIiwidXJsIiwiU0VDT05EQVJZX0NPTE9SIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFPQSxNQUFNQSxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFLFFBRE87QUFFYkMsV0FBUyxFQUFFLEdBRkU7QUFHYkMsU0FBTyxFQUFFO0FBSEksQ0FBZjtBQU1BLE1BQU1DLFlBQVksR0FBR0Msb0VBQVUsQ0FBQ0MsS0FBSyxJQUFJO0FBQ3ZDLFNBQU87QUFDTEMsV0FBTyxFQUFFO0FBQ1BDLFdBQUssRUFBRSxTQURBO0FBRVBDLGdCQUFVLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjRCxVQUFkLENBQXlCRTtBQUY5QixLQURKO0FBS0xDLFlBQVEsRUFBRTtBQUNSSixXQUFLLEVBQUUsTUFEQztBQUVSQyxnQkFBVSxFQUFFLE1BRko7QUFHUkksb0JBQWMsRUFBRSxRQUhSO0FBSVJDLFlBQU0sRUFBRSxHQUpBO0FBS1JDLGdCQUFVLEVBQUUsWUFMSjtBQU1SQyxhQUFPLEVBQUUsTUFORDtBQU9SQyxtQkFBYSxFQUFFO0FBUFA7QUFMTCxHQUFQO0FBZUQsQ0FoQjhCLENBQS9COztBQWtCQSxNQUFNQyxXQUFXLEdBQUlDLEtBQUQsSUFBa0I7QUFBQTs7QUFDcEMsUUFBTUMsT0FBTyxHQUFHaEIsWUFBWSxFQUE1QjtBQUVBLFFBQU1FLEtBQUssR0FBR2Usa0VBQVEsRUFBdEI7QUFFQSxRQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQWEsRUFBYixDQUFOLENBQXVCQyxPQUF6QztBQUNBLFFBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLElBQW9CQyw0Q0FBSyxDQUFDQyxRQUFOLENBQ3hCVCxLQUFLLENBQUNVLEtBQU4sR0FBY0MsMERB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QU5UO0FBVUUsYUFBTyxFQUFDLFVBVlY7QUFXRSxXQUFLLEVBQUMsU0FYUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBNkNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHckIsSUFBSSxDQUFDaUMsV0FEUixFQUdFLE1BQUMsc0RBQUQ7QUFDRSxRQUFJLEVBQUVqQyxJQUFJLENBQUNrQyxHQURiO0FBRUUsU0FBSyxFQUFFbEMsSUFBSSxDQUFDUixJQUFMLEdBQVksV0FGckI7QUFHRSxTQUFLLEVBQUUyQywrREFIVDtBQUlFLFNBQUssRUFBRTtBQUNMdkUsYUFBTyxFQUFFO0FBREosS0FKVDtBQU9FLFVBQU0sRUFBQyxRQVBUO0FBUUUsT0FBRyxFQUFDLHFCQVJOO0FBU0UsUUFBSSxFQUFDLE1BVFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVdHb0MsSUFBSSxDQUFDUixJQVhSLENBSEYsQ0FERixDQTdDRixDQWRGLENBckJGLENBREY7QUF3R0Q7O0lBM0hRTyxVO1VBQ1MvQyxZLEVBRUZpQiwwRCxFQUNFb0MsdUU7OztNQUpUTixVO0FBNkhNakMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjNjNjMwMDhhOWI1ZmMyZGEzMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIENhcmQsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBtYWtlU3R5bGVzLFxyXG4gIFBhcGVyLFxyXG4gIFNuYWNrYmFyLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgdXNlVGhlbWUsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7IE5ubVBhY2thZ2UsIE5QTV9QQUNLQUdFUyB9IGZyb20gJy4vTlBNX1BBQ0tBR0VTJ1xyXG5pbXBvcnQgeyBCcmFuZEJ1dHRvbiB9IGZyb20gJ0Byb290L3RoZW1lL0N1c3RvbSdcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBEaXZpZGVyRWxlbWVudCwgU3R5bGVkSHRtbExpbmsgfSBmcm9tICcuLi9zaGFyZWQnXHJcbmltcG9ydCB7IGZpbmRJbmRleCwgUG9zaXRpb24sIG1vdmUgfSBmcm9tICcuLi9zaGFyZWQvZmluZC1pbmRleCdcclxuaW1wb3J0IHsgREFSS19CQUNLR1JPVU5EX0NPTE9SIH0gZnJvbSAnQHJvb3QvdGhlbWUvZ2V0VGhlbWUnXHJcbmltcG9ydCB7IHRocm90dGxlIH0gZnJvbSAnQHdpbGZyZWRsb3Blei9yZWFjdC11dGlscydcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSdcclxuaW1wb3J0IHsgUFJJTUFSWV9DT0xPUiwgVEVSVElBUllfQ09MT1IsIFNFQ09OREFSWV9DT0xPUiB9IGZyb20gJy4uLy4uL3RoZW1lL2dldFRoZW1lJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBkYXJrPzogYm9vbGVhblxyXG4gIGxpbWl0PzogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IHNwcmluZyA9IHtcclxuICB0eXBlOiAnc3ByaW5nJyxcclxuICBzdGlmZm5lc3M6IDcwMCxcclxuICBkYW1waW5nOiAzMCxcclxufVxyXG5cclxuY29uc3QgdXNlTnBtU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHdyYXBwZXI6IHtcclxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyXHJcbiAgICB9LFxyXG4gICAgY2FyZFJvb3Q6IHtcclxuICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGhlaWdodDogMjAwLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICB9LFxyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IE5wbVBhY2thZ2VzID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VOcG1TdHlsZXMoKVxyXG5cclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcclxuXHJcbiAgY29uc3QgcG9zaXRpb25zID0gdXNlUmVmPFBvc2l0aW9uW10+KFtdKS5jdXJyZW50XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShcclxuICAgIHByb3BzLmxpbWl0ID8gTlBNX1BBQ0tBR0VTLnNsaWNlKDAsIHByb3BzLmxpbWl0KSA6IE5QTV9QQUNLQUdFU1xyXG4gIClcclxuICBmdW5jdGlvbiBzZXRQb3NpdGlvbihpOiBudW1iZXIsIG9mZnNldDogUG9zaXRpb24pIHtcclxuICAgIHBvc2l0aW9uc1tpXSA9IG9mZnNldFxyXG4gIH1cclxuICBjb25zdCBtb3ZlSXRlbSA9IChpOiBudW1iZXIsIGRyYWdPZmZzZXQ6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBmaW5kSW5kZXgoaSwgZHJhZ09mZnNldCwgcG9zaXRpb25zKVxyXG4gICAgaWYgKHRhcmdldEluZGV4ICE9PSBpKSB7XHJcbiAgICAgIHNldEl0ZW1zKG1vdmUoaXRlbXMsIGksIHRhcmdldEluZGV4KSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxQYXBlclxyXG4gICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgIHByb3BzLmRhcmtcclxuICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn1cclxuICAgICAgICBlbGV2YXRpb249ezB9XHJcbiAgICAgID5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEJveCBtYj17Mn0gcHQ9ezJ9PlxyXG4gICAgICAgICAgICA8RGl2aWRlckVsZW1lbnQ+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249J2NlbnRlcic+TlBNIFBhY2thZ2VzPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0RpdmlkZXJFbGVtZW50PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgc3BhY2luZz17Mn1cclxuICAgICAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgICAgICBhbGlnbkNvbnRlbnQ9J2NlbnRlcidcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXRlbXMubWFwKChwYSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEdyaWQga2V5PXtwYS5uYW1lfSBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICA8TnBtUGFja2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e3BhfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsSXRlbXM9e2l0ZW1zLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICBpPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBtb3ZlSXRlbT17bW92ZUl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb249e3NldFBvc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPEJveCBwYj17Mn0gLz5cclxuICAgICAgPC9QYXBlcj5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuaW50ZXJmYWNlIFBhY2tQcm9wcyB7XHJcbiAgZGF0YTogTm5tUGFja2FnZVxyXG4gIGk6IG51bWJlclxyXG4gIHRvdGFsSXRlbXM6IG51bWJlclxyXG4gIHNldFBvc2l0aW9uOiAoaTogbnVtYmVyLCBwb3M6IFBvc2l0aW9uKSA9PiB2b2lkXHJcbiAgbW92ZUl0ZW06IChpOiBudW1iZXIsIGRyYWdPZmZzZXQ6IG51bWJlcikgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBvblRvcCA9IHsgekluZGV4OiAxIH1cclxuY29uc3QgZmxhdCA9IHtcclxuICB6SW5kZXg6IDAsXHJcbiAgdHJhbnNpdGlvbjogeyBkZWxheTogMC4zIH0sXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5wbVBhY2thZ2UoeyBkYXRhLCBpLCBtb3ZlSXRlbSwgc2V0UG9zaXRpb24sIHRvdGFsSXRlbXMgfTogUGFja1Byb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZU5wbVN0eWxlcygpXHJcbiAgY29uc3QgW2lzRHJhZ2dpbmcsIHNldERyYWdnaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxyXG4gIGNvbnN0IG1hdGNoZXMgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpKVxyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcclxuICBjb25zdCBbY29weU1lc3NhZ2VPcGVuLCBzZXRDb3B5TWVzc2FnZU9wZW5Ub10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBfc2V0UG9zaXRpb24gPSB0aHJvdHRsZShmdW5jdGlvbiAoKSB7XHJcbiAgICBzZXRQb3NpdGlvbihpLCB7XHJcbiAgICAgIGhlaWdodDogcmVmLmN1cnJlbnQhLm9mZnNldEhlaWdodCxcclxuICAgICAgdG9wOiByZWYuY3VycmVudCEub2Zmc2V0VG9wLFxyXG4gICAgfSlcclxuICB9LCAxMDApXHJcblxyXG4gIC8vIFVwZGF0ZSB0aGUgbWVhc3VyZWQgcG9zaXRpb24gb2YgdGhlIGl0ZW0gc28gd2UgY2FuIGNhbGN1bGF0ZSB3aGVuIHdlIHNob3VsZCByZWFycmFuZ2UuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIF9zZXRQb3NpdGlvbigpXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTbmFja2JhclxyXG4gICAgICAgIG9wZW49e2NvcHlNZXNzYWdlT3Blbn1cclxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXsxMDAwfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHtcclxuICAgICAgICAgIHNldENvcHlNZXNzYWdlT3BlblRvKGZhbHNlKVxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHBvc2l0aW9uPSdhYnNvbHV0ZScgYm90dG9tPScwJyBsZWZ0PScyNSUnIHdpZHRoPXs0MDB9PlxyXG4gICAgICAgICAgPEJyYW5kQnV0dG9uIGNvbG9yPSdzdWNjZXNzJz5cclxuICAgICAgICAgICAgey8qIDxBbGVydCBvbkNsb3NlPXsgc2V0Q29weU1lc3NhZ2VPcGVuVG8oZmFsc2UpfSBzZXZlcml0eT1cInN1Y2Nlc3NcIj4gKi99XHJcbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT0nYmxvY2snIHdpZHRoPScxMDAlJz5cclxuICAgICAgICAgICAgICA8c3Bhbj5Db3BpZWQgdG8gY2xpcGJvYXJkPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgey8qIDwvQWxlcnQ+ICovfVxyXG4gICAgICAgICAgPC9CcmFuZEJ1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9TbmFja2Jhcj5cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICBkcmFnPXttYXRjaGVzfVxyXG4gICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgIGxheW91dFxyXG4gICAgICAgIGFuaW1hdGU9e2lzRHJhZ2dpbmcgPyBvblRvcCA6IGZsYXR9XHJcbiAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wMyB9fVxyXG4gICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAxLjEyIH19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17c3ByaW5nfVxyXG4gICAgICAgIGRyYWdDb25zdHJhaW50cz17eyB0b3A6IDEwLCBib3R0b206IDEwLCBsZWZ0OiAxMCwgcmlnaHQ6IDEwIH19XHJcbiAgICAgICAgZHJhZ0VsYXN0aWM9ezF9XHJcbiAgICAgICAgb25EcmFnU3RhcnQ9eygpID0+IHNldERyYWdnaW5nKHRydWUpfVxyXG4gICAgICAgIG9uRHJhZ0VuZD17KCkgPT4gc2V0RHJhZ2dpbmcoZmFsc2UpfVxyXG4gICAgICAgIG9uRHJhZz17KGUsIHsgcG9pbnQgfSkgPT4gbW92ZUl0ZW0oaSwgcG9pbnQueSl9XHJcbiAgICAgID5cclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRSb290fVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6XHJcbiAgICAgICAgICAgIC8vICAgaSA9PT0gdG90YWxJdGVtcyAtIDEgPyAncmdiKDI1NSAyNTUgMjU1IC8gOTAlKScgOiAnd2hpdGUnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgICAgICB0aXRsZT17ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICB0aXRsZVR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogXCJoMVwiLFxyXG4gICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEuM3JlbScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3ViaGVhZGVyVHlwb2dyYXBoeVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdncmF5J1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgdmFyaWFudDogJ2NhcHRpb24nXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN1YmhlYWRlcj17ZGF0YS5jb21tYW5kfVxyXG4gICAgICAgICAgICBhY3Rpb249e1xyXG4gICAgICAgICAgICAgIDxCb3ggd2lkdGg9JzEwMCUnIGp1c3RpZnlDb250ZW50PSdmbGV4LWVuZCc+XHJcbiAgICAgICAgICAgICAgICA8QnJhbmRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChkYXRhLmNvbW1hbmQgfHwgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29weU1lc3NhZ2VPcGVuVG8odHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMTIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcj0nc3VjY2VzcydcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQ29weVxyXG4gICAgICAgICAgICAgICAgPC9CcmFuZEJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPjwvQ2FyZEhlYWRlcj5cclxuICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInPlxyXG4gICAgICAgICAgICAgIHtkYXRhLmRlc2NyaXB0aW9ufVxyXG5cclxuICAgICAgICAgICAgICA8U3R5bGVkSHRtbExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e2RhdGEudXJsfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2RhdGEubmFtZSArICcgbnBtIGhvbWUnfVxyXG4gICAgICAgICAgICAgICAgY29sb3I9e1NFQ09OREFSWV9DT0xPUn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXHJcbiAgICAgICAgICAgICAgICByb2xlPSdsaW5rJ1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRIdG1sTGluaz5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTnBtUGFja2FnZXNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==