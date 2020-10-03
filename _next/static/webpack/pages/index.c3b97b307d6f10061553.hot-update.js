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
  const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(_NPM_PACKAGES__WEBPACK_IMPORTED_MODULE_1__["NPM_PACKAGES"]);

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
      lineNumber: 66,
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
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    mb: 2,
    pt: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx(_shared__WEBPACK_IMPORTED_MODULE_5__["DividerElement"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
      lineNumber: 85,
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
        lineNumber: 94,
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
        lineNumber: 95,
        columnNumber: 19
      }
    }));
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    pb: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  })));
};

_s(NpmPackages, "EhLRqd7uqIykNZYwXC2rRgagbRc=", false, function () {
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
      lineNumber: 148,
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
      lineNumber: 158,
      columnNumber: 9
    }
  }, __jsx(_root_theme_Custom__WEBPACK_IMPORTED_MODULE_2__["BrandButton"], {
    color: "success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    display: "block",
    width: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
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
      lineNumber: 168,
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
      lineNumber: 182,
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
        lineNumber: 200,
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
        lineNumber: 201,
        columnNumber: 17
      }
    }, "Copy")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "body2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
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
      lineNumber: 223,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbnBtLXBhY2thZ2UvTnBtUGFja2FnZXMudHN4Il0sIm5hbWVzIjpbInNwcmluZyIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwidXNlTnBtU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwid3JhcHBlciIsImNvbG9yIiwiYmFja2dyb3VuZCIsImNhcmRSb290IiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJOcG1QYWNrYWdlcyIsInByb3BzIiwiY2xhc3NlcyIsInBvc2l0aW9ucyIsInVzZVJlZiIsImN1cnJlbnQiLCJpdGVtcyIsInNldEl0ZW1zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIk5QTV9QQUNLQUdFUyIsInNldFBvc2l0aW9uIiwiaSIsIm9mZnNldCIsIm1vdmVJdGVtIiwiZHJhZ09mZnNldCIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibW92ZSIsImRhcmsiLCJEQVJLX0JBQ0tHUk9VTkRfQ09MT1IiLCJtYXAiLCJwYSIsImluZGV4IiwibmFtZSIsImxlbmd0aCIsIm9uVG9wIiwiekluZGV4IiwiZmxhdCIsInRyYW5zaXRpb24iLCJkZWxheSIsIk5wbVBhY2thZ2UiLCJkYXRhIiwidG90YWxJdGVtcyIsImlzRHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsInVzZVRoZW1lIiwibWF0Y2hlcyIsInVzZU1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsInVwIiwicmVmIiwiY29weU1lc3NhZ2VPcGVuIiwic2V0Q29weU1lc3NhZ2VPcGVuVG8iLCJfc2V0UG9zaXRpb24iLCJ0aHJvdHRsZSIsIm9mZnNldEhlaWdodCIsInRvcCIsIm9mZnNldFRvcCIsInVzZUVmZmVjdCIsInBvc2l0aW9uIiwic2NhbGUiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJlIiwicG9pbnQiLCJ5Iiwic3R5bGUiLCJmb250U2l6ZSIsImNvbW1hbmQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJkZXNjcmlwdGlvbiIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUEsTUFBTUEsTUFBTSxHQUFHO0FBQ2JDLE1BQUksRUFBRSxRQURPO0FBRWJDLFdBQVMsRUFBRSxHQUZFO0FBR2JDLFNBQU8sRUFBRTtBQUhJLENBQWY7QUFNQSxNQUFNQyxZQUFZLEdBQUdDLG9FQUFVLENBQUNDLEtBQUssSUFBSTtBQUN2QyxTQUFPO0FBQ0xDLFdBQU8sRUFBRTtBQUNQQyxXQUFLLEVBQUUsTUFEQTtBQUVQQyxnQkFBVSxFQUFFO0FBRkwsS0FESjtBQUtMQyxZQUFRLEVBQUU7QUFDUkYsV0FBSyxFQUFFLE1BREM7QUFFUkMsZ0JBQVUsRUFBRSxNQUZKO0FBR1JFLG9CQUFjLEVBQUUsUUFIUjtBQUlSQyxZQUFNLEVBQUUsR0FKQTtBQUtSQyxnQkFBVSxFQUFFLFlBTEo7QUFNUkMsYUFBTyxFQUFFLE1BTkQ7QUFPUkMsbUJBQWEsRUFBRTtBQVBQO0FBTEwsR0FBUDtBQWVELENBaEI4QixDQUEvQjs7QUFrQkEsTUFBTUMsV0FBVyxHQUFJQyxLQUFELElBQWtCO0FBQUE7O0FBQ3BDLFFBQU1DLE9BQU8sR0FBR2QsWUFBWSxFQUE1QjtBQUNBLFFBQU1lLFNBQVMsR0FBR0Msb0RBQU0sQ0FBYSxFQUFiLENBQU4sQ0FBdUJDLE9BQXpDO0FBQ0EsUUFBTSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsSUFBb0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsMERBQWYsQ0FBMUI7O0FBQ0EsV0FBU0MsV0FBVCxDQUFxQkMsQ0FBckIsRUFBZ0NDLE1BQWhDLEVBQWtEO0FBQ2hEVixhQUFTLENBQUNTLENBQUQsQ0FBVCxHQUFlQyxNQUFmO0FBQ0Q7O0FBQ0QsUUFBTUMsUUFBUSxHQUFHLENBQUNGLENBQUQsRUFBWUcsVUFB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LFNBQUssRUFBRTtBQUNMMUIsYUFBTyxFQUFFO0FBREosS0FKVDtBQU9FLFVBQU0sRUFBQyxRQVBUO0FBUUUsT0FBRyxFQUFDLHFCQVJOO0FBU0UsUUFBSSxFQUFDLE1BVFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVdHa0MsSUFBSSxDQUFDUixJQVhSLENBSEYsQ0FERixDQXJDRixDQWRGLENBckJGLENBREY7QUFnR0Q7O0lBbkhRTyxVO1VBQ1MzQyxZLEVBRUZnRCwwRCxFQUNFRSx1RTs7O01BSlRQLFU7QUFxSE0vQiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jM2I5N2IzMDdkNmYxMDA2MTU1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQ2FyZCxcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENvbnRhaW5lcixcclxuICBHcmlkLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgUGFwZXIsXHJcbiAgU25hY2tiYXIsXHJcbiAgVHlwb2dyYXBoeSxcclxuICB1c2VUaGVtZSxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgTm5tUGFja2FnZSwgTlBNX1BBQ0tBR0VTIH0gZnJvbSAnLi9OUE1fUEFDS0FHRVMnXHJcbmltcG9ydCB7IEJyYW5kQnV0dG9uIH0gZnJvbSAnQHJvb3QvdGhlbWUvQ3VzdG9tJ1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERpdmlkZXJFbGVtZW50LCBTdHlsZWRIdG1sTGluayB9IGZyb20gJy4uL3NoYXJlZCdcclxuaW1wb3J0IHsgZmluZEluZGV4LCBQb3NpdGlvbiwgbW92ZSB9IGZyb20gJy4uL3NoYXJlZC9maW5kLWluZGV4J1xyXG5pbXBvcnQgeyBEQVJLX0JBQ0tHUk9VTkRfQ09MT1IgfSBmcm9tICdAcm9vdC90aGVtZS9nZXRUaGVtZSdcclxuaW1wb3J0IHsgdGhyb3R0bGUgfSBmcm9tICdAd2lsZnJlZGxvcGV6L3JlYWN0LXV0aWxzJ1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5J1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBkYXJrPzogYm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBzcHJpbmcgPSB7XHJcbiAgdHlwZTogJ3NwcmluZycsXHJcbiAgc3RpZmZuZXNzOiA3MDAsXHJcbiAgZGFtcGluZzogMzAsXHJcbn1cclxuXHJcbmNvbnN0IHVzZU5wbVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB3cmFwcGVyOiB7XHJcbiAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcclxuICAgIH0sXHJcbiAgICBjYXJkUm9vdDoge1xyXG4gICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgaGVpZ2h0OiAyMDAsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIH0sXHJcbiAgfVxyXG59KVxyXG5cclxuY29uc3QgTnBtUGFja2FnZXMgPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZU5wbVN0eWxlcygpXHJcbiAgY29uc3QgcG9zaXRpb25zID0gdXNlUmVmPFBvc2l0aW9uW10+KFtdKS5jdXJyZW50XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShOUE1fUEFDS0FHRVMpXHJcbiAgZnVuY3Rpb24gc2V0UG9zaXRpb24oaTogbnVtYmVyLCBvZmZzZXQ6IFBvc2l0aW9uKSB7XHJcbiAgICBwb3NpdGlvbnNbaV0gPSBvZmZzZXRcclxuICB9XHJcbiAgY29uc3QgbW92ZUl0ZW0gPSAoaTogbnVtYmVyLCBkcmFnT2Zmc2V0OiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gZmluZEluZGV4KGksIGRyYWdPZmZzZXQsIHBvc2l0aW9ucylcclxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gaSkge1xyXG4gICAgICBzZXRJdGVtcyhtb3ZlKGl0ZW1zLCBpLCB0YXJnZXRJbmRleCkpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8UGFwZXJcclxuICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICBwcm9wcy5kYXJrXHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogREFSS19CQUNLR1JPVU5EX0NPTE9SLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfVxyXG4gICAgICAgIGVsZXZhdGlvbj17MH1cclxuICAgICAgPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Qm94IG1iPXsyfSBwdD17Mn0+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyRWxlbWVudD5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj0nY2VudGVyJz5OUE0gUGFja2FnZXM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvRGl2aWRlckVsZW1lbnQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXHJcbiAgICAgICAgICAgIGFsaWduQ29udGVudD0nY2VudGVyJ1xyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpdGVtcy5tYXAoKHBhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBrZXk9e3BhLm5hbWV9IGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgIDxOcG1QYWNrYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17cGF9XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxJdGVtcz17aXRlbXMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgIGk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVJdGVtPXttb3ZlSXRlbX1cclxuICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbj17c2V0UG9zaXRpb259XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Qm94IHBiPXsyfSAvPlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5pbnRlcmZhY2UgUGFja1Byb3BzIHtcclxuICBkYXRhOiBObm1QYWNrYWdlXHJcbiAgaTogbnVtYmVyXHJcbiAgdG90YWxJdGVtczogbnVtYmVyXHJcbiAgc2V0UG9zaXRpb246IChpOiBudW1iZXIsIHBvczogUG9zaXRpb24pID0+IHZvaWRcclxuICBtb3ZlSXRlbTogKGk6IG51bWJlciwgZHJhZ09mZnNldDogbnVtYmVyKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IG9uVG9wID0geyB6SW5kZXg6IDEgfVxyXG5jb25zdCBmbGF0ID0ge1xyXG4gIHpJbmRleDogMCxcclxuICB0cmFuc2l0aW9uOiB7IGRlbGF5OiAwLjMgfSxcclxufVxyXG5cclxuZnVuY3Rpb24gTnBtUGFja2FnZSh7IGRhdGEsIGksIG1vdmVJdGVtLCBzZXRQb3NpdGlvbiwgdG90YWxJdGVtcyB9OiBQYWNrUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlTnBtU3R5bGVzKClcclxuICBjb25zdCBbaXNEcmFnZ2luZywgc2V0RHJhZ2dpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcbiAgY29uc3QgbWF0Y2hlcyA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJykpXHJcbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxyXG4gIGNvbnN0IFtjb3B5TWVzc2FnZU9wZW4sIHNldENvcHlNZXNzYWdlT3BlblRvXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IF9zZXRQb3NpdGlvbiA9IHRocm90dGxlKGZ1bmN0aW9uICgpIHtcclxuICAgIHNldFBvc2l0aW9uKGksIHtcclxuICAgICAgaGVpZ2h0OiByZWYuY3VycmVudCEub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICB0b3A6IHJlZi5jdXJyZW50IS5vZmZzZXRUb3AsXHJcbiAgICB9KVxyXG4gIH0sIDEwMClcclxuXHJcbiAgLy8gVXBkYXRlIHRoZSBtZWFzdXJlZCBwb3NpdGlvbiBvZiB0aGUgaXRlbSBzbyB3ZSBjYW4gY2FsY3VsYXRlIHdoZW4gd2Ugc2hvdWxkIHJlYXJyYW5nZS5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgX3NldFBvc2l0aW9uKClcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgb3Blbj17Y29weU1lc3NhZ2VPcGVufVxyXG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezEwMDB9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0Q29weU1lc3NhZ2VPcGVuVG8oZmFsc2UpXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggcG9zaXRpb249J2Fic29sdXRlJyBib3R0b209JzAnIGxlZnQ9JzI1JScgd2lkdGg9ezQwMH0+XHJcbiAgICAgICAgICA8QnJhbmRCdXR0b24gY29sb3I9J3N1Y2Nlc3MnPlxyXG4gICAgICAgICAgICB7LyogPEFsZXJ0IG9uQ2xvc2U9eyBzZXRDb3B5TWVzc2FnZU9wZW5UbyhmYWxzZSl9IHNldmVyaXR5PVwic3VjY2Vzc1wiPiAqL31cclxuICAgICAgICAgICAgPEJveCBkaXNwbGF5PSdibG9jaycgd2lkdGg9JzEwMCUnPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkNvcGllZCB0byBjbGlwYm9hcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB7LyogPC9BbGVydD4gKi99XHJcbiAgICAgICAgICA8L0JyYW5kQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L1NuYWNrYmFyPlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGRyYWc9e21hdGNoZXN9XHJcbiAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgbGF5b3V0XHJcbiAgICAgICAgYW5pbWF0ZT17aXNEcmFnZ2luZyA/IG9uVG9wIDogZmxhdH1cclxuICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjAzIH19XHJcbiAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDEuMTIgfX1cclxuICAgICAgICB0cmFuc2l0aW9uPXtzcHJpbmd9XHJcbiAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7IHRvcDogMTAsIGJvdHRvbTogMTAsIGxlZnQ6IDEwLCByaWdodDogMTAgfX1cclxuICAgICAgICBkcmFnRWxhc3RpYz17MX1cclxuICAgICAgICBvbkRyYWdTdGFydD17KCkgPT4gc2V0RHJhZ2dpbmcodHJ1ZSl9XHJcbiAgICAgICAgb25EcmFnRW5kPXsoKSA9PiBzZXREcmFnZ2luZyhmYWxzZSl9XHJcbiAgICAgICAgb25EcmFnPXsoZSwgeyBwb2ludCB9KSA9PiBtb3ZlSXRlbShpLCBwb2ludC55KX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJkXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZFJvb3R9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDpcclxuICAgICAgICAgICAgLy8gICBpID09PSB0b3RhbEl0ZW1zIC0gMSA/ICdyZ2IoMjU1IDI1NSAyNTUgLyA5MCUpJyA6ICd3aGl0ZScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDYXJkSGVhZGVyXHJcbiAgICAgICAgICAgIHRpdGxlPXtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgIHRpdGxlVHlwb2dyYXBoeVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS4ycmVtJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdWJoZWFkZXI9e2RhdGEuY29tbWFuZH1cclxuICAgICAgICAgICAgYWN0aW9uPXtcclxuICAgICAgICAgICAgICA8Qm94IHdpZHRoPScxMDAlJyBqdXN0aWZ5Q29udGVudD0nZmxleC1lbmQnPlxyXG4gICAgICAgICAgICAgICAgPEJyYW5kQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZGF0YS5jb21tYW5kIHx8ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldENvcHlNZXNzYWdlT3BlblRvKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEyLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgICAgY29sb3I9J3N1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIENvcHlcclxuICAgICAgICAgICAgICAgIDwvQnJhbmRCdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID48L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJz5cclxuICAgICAgICAgICAgICB7ZGF0YS5kZXNjcmlwdGlvbn1cclxuXHJcbiAgICAgICAgICAgICAgPFN0eWxlZEh0bWxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPXtkYXRhLnVybH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtkYXRhLm5hbWUgKyAnIG5wbSBob21lJ31cclxuICAgICAgICAgICAgICAgIGNvbG9yPSdibHVlJ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcclxuICAgICAgICAgICAgICAgIHJvbGU9J2xpbmsnXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2RhdGEubmFtZX1cclxuICAgICAgICAgICAgICA8L1N0eWxlZEh0bWxMaW5rPlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOcG1QYWNrYWdlc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9