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
      color: theme.palette.text.primary,
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
    className: "caption-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 67
    }
  }, "NPM Packages")))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
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
    elevation: 2,
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
        lineNumber: 216,
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
        lineNumber: 217,
        columnNumber: 17
      }
    }, "Copy")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "body2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
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
      lineNumber: 239,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbnBtLXBhY2thZ2UvTnBtUGFja2FnZXMudHN4Il0sIm5hbWVzIjpbInNwcmluZyIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwidXNlTnBtU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwid3JhcHBlciIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJwcmltYXJ5IiwiYmFja2dyb3VuZCIsInBhcGVyIiwiY2FyZFJvb3QiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsImFsaWduSXRlbXMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIk5wbVBhY2thZ2VzIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJwb3NpdGlvbnMiLCJ1c2VSZWYiLCJjdXJyZW50IiwiaXRlbXMiLCJzZXRJdGVtcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJsaW1pdCIsIk5QTV9QQUNLQUdFUyIsInNsaWNlIiwic2V0UG9zaXRpb24iLCJpIiwib2Zmc2V0IiwibW92ZUl0ZW0iLCJkcmFnT2Zmc2V0IiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtb3ZlIiwiZGFyayIsIm1hcCIsInBhIiwiaW5kZXgiLCJuYW1lIiwibGVuZ3RoIiwib25Ub3AiLCJ6SW5kZXgiLCJmbGF0IiwidHJhbnNpdGlvbiIsImRlbGF5IiwiTnBtUGFja2FnZSIsImRhdGEiLCJ0b3RhbEl0ZW1zIiwiaXNEcmFnZ2luZyIsInNldERyYWdnaW5nIiwibWF0Y2hlcyIsInVzZU1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsInVwIiwicmVmIiwiY29weU1lc3NhZ2VPcGVuIiwic2V0Q29weU1lc3NhZ2VPcGVuVG8iLCJfc2V0UG9zaXRpb24iLCJ0aHJvdHRsZSIsIm9mZnNldEhlaWdodCIsInRvcCIsIm9mZnNldFRvcCIsInVzZUVmZmVjdCIsInBvc2l0aW9uIiwic2NhbGUiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJlIiwicG9pbnQiLCJ5IiwiY29tcG9uZW50Iiwic3R5bGUiLCJmb250U2l6ZSIsInZhcmlhbnQiLCJjb21tYW5kIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJTRUNPTkRBUllfQ09MT1IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU9BLE1BQU1BLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUUsUUFETztBQUViQyxXQUFTLEVBQUUsR0FGRTtBQUdiQyxTQUFPLEVBQUU7QUFISSxDQUFmO0FBTUEsTUFBTUMsWUFBWSxHQUFHQyxvRUFBVSxDQUFDQyxLQUFLLElBQUk7QUFDdkMsU0FBTztBQUNMQyxXQUFPLEVBQUU7QUFDUEMsV0FBSyxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQkMsT0FEbkI7QUFFUEMsZ0JBQVUsRUFBRU4sS0FBSyxDQUFDRyxPQUFOLENBQWNHLFVBQWQsQ0FBeUJDO0FBRjlCLEtBREo7QUFLTEMsWUFBUSxFQUFFO0FBQ1JOLFdBQUssRUFBRSxNQURDO0FBRVJJLGdCQUFVLEVBQUUsTUFGSjtBQUdSRyxvQkFBYyxFQUFFLFFBSFI7QUFJUkMsWUFBTSxFQUFFLEdBSkE7QUFLUkMsZ0JBQVUsRUFBRSxZQUxKO0FBTVJDLGFBQU8sRUFBRSxNQU5EO0FBT1JDLG1CQUFhLEVBQUU7QUFQUDtBQUxMLEdBQVA7QUFlRCxDQWhCOEIsQ0FBL0I7O0FBa0JBLE1BQU1DLFdBQVcsR0FBSUMsS0FBRCxJQUFrQjtBQUFBOztBQUNwQyxRQUFNQyxPQUFPLEdBQUdsQixZQUFZLEVBQTVCO0FBRUEsUUFBTUUsS0FBSyxHQUFHaUIsa0VBQVEsRUFBdEI7QUFFQSxRQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQWEsRUFBYixDQUFOLENBQXVCQyxPQUF6QztBQUNBLFFBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLElB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QkMsU0FBcEIsQ0FBOEJoQyxJQUFJLENBQUM2QixPQUFMLElBQWdCLEVBQTlDO0FBQ0FuQiw0QkFBb0IsQ0FBQyxJQUFELENBQXBCO0FBQ0QsT0FMSDtBQU1FLFdBQUssRUFBRTtBQUNMTyxnQkFBUSxFQUFFLFVBREw7QUFFTEksYUFBSyxFQUFFO0FBRkYsT0FOVDtBQVVFLGFBQU8sRUFBQyxVQVZWO0FBV0UsV0FBSyxFQUFDLFNBWFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQThDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3JCLElBQUksQ0FBQ2lDLFdBRFIsRUFHRSxNQUFDLHNEQUFEO0FBQ0UsUUFBSSxFQUFFakMsSUFBSSxDQUFDa0MsR0FEYjtBQUVFLFNBQUssRUFBRWxDLElBQUksQ0FBQ1IsSUFBTCxHQUFZLFdBRnJCO0FBR0UsU0FBSyxFQUFFMkMsK0RBSFQ7QUFJRSxTQUFLLEVBQUU7QUFDTHZFLGFBQU8sRUFBRTtBQURKLEtBSlQ7QUFPRSxVQUFNLEVBQUMsUUFQVDtBQVFFLE9BQUcsRUFBQyxxQkFSTjtBQVNFLFFBQUksRUFBQyxNQVRQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FXR29DLElBQUksQ0FBQ1IsSUFYUixDQUhGLENBREYsQ0E5Q0YsQ0FkRixDQXJCRixDQURGO0FBeUdEOztJQTVIUU8sVTtVQUNTakQsWSxFQUVGbUIsMEQsRUFDRW9DLHVFOzs7TUFKVE4sVTtBQThITWpDLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZlMTMyZGIwZDQ5Y2VhMTg0OTBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJveCxcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEdyaWQsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBQYXBlcixcclxuICBTbmFja2JhcixcclxuICBUeXBvZ3JhcGh5LFxyXG4gIHVzZVRoZW1lLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyBObm1QYWNrYWdlLCBOUE1fUEFDS0FHRVMgfSBmcm9tICcuL05QTV9QQUNLQUdFUydcclxuaW1wb3J0IHsgQnJhbmRCdXR0b24gfSBmcm9tICdAcm9vdC90aGVtZS9DdXN0b20nXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRGl2aWRlckVsZW1lbnQsIFN0eWxlZEh0bWxMaW5rIH0gZnJvbSAnLi4vc2hhcmVkJ1xyXG5pbXBvcnQgeyBmaW5kSW5kZXgsIFBvc2l0aW9uLCBtb3ZlIH0gZnJvbSAnLi4vc2hhcmVkL2ZpbmQtaW5kZXgnXHJcbmltcG9ydCB7IERBUktfQkFDS0dST1VORF9DT0xPUiB9IGZyb20gJ0Byb290L3RoZW1lL2dldFRoZW1lJ1xyXG5pbXBvcnQgeyB0aHJvdHRsZSB9IGZyb20gJ0B3aWxmcmVkbG9wZXovcmVhY3QtdXRpbHMnXHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknXHJcbmltcG9ydCB7IFBSSU1BUllfQ09MT1IsIFRFUlRJQVJZX0NPTE9SLCBTRUNPTkRBUllfQ09MT1IgfSBmcm9tICcuLi8uLi90aGVtZS9nZXRUaGVtZSdcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgZGFyaz86IGJvb2xlYW5cclxuICBsaW1pdD86IG51bWJlclxyXG59XHJcblxyXG5jb25zdCBzcHJpbmcgPSB7XHJcbiAgdHlwZTogJ3NwcmluZycsXHJcbiAgc3RpZmZuZXNzOiA3MDAsXHJcbiAgZGFtcGluZzogMzAsXHJcbn1cclxuXHJcbmNvbnN0IHVzZU5wbVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB3cmFwcGVyOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyXHJcbiAgICB9LFxyXG4gICAgY2FyZFJvb3Q6IHtcclxuICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGhlaWdodDogMjAwLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICB9LFxyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IE5wbVBhY2thZ2VzID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VOcG1TdHlsZXMoKVxyXG5cclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcclxuXHJcbiAgY29uc3QgcG9zaXRpb25zID0gdXNlUmVmPFBvc2l0aW9uW10+KFtdKS5jdXJyZW50XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShcclxuICAgIHByb3BzLmxpbWl0ID8gTlBNX1BBQ0tBR0VTLnNsaWNlKDAsIHByb3BzLmxpbWl0KSA6IE5QTV9QQUNLQUdFU1xyXG4gIClcclxuICBmdW5jdGlvbiBzZXRQb3NpdGlvbihpOiBudW1iZXIsIG9mZnNldDogUG9zaXRpb24pIHtcclxuICAgIHBvc2l0aW9uc1tpXSA9IG9mZnNldFxyXG4gIH1cclxuICBjb25zdCBtb3ZlSXRlbSA9IChpOiBudW1iZXIsIGRyYWdPZmZzZXQ6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBmaW5kSW5kZXgoaSwgZHJhZ09mZnNldCwgcG9zaXRpb25zKVxyXG4gICAgaWYgKHRhcmdldEluZGV4ICE9PSBpKSB7XHJcbiAgICAgIHNldEl0ZW1zKG1vdmUoaXRlbXMsIGksIHRhcmdldEluZGV4KSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxQYXBlclxyXG4gICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgIHByb3BzLmRhcmtcclxuICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn1cclxuICAgICAgICBlbGV2YXRpb249ezB9XHJcbiAgICAgID5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEJveCBtYj17Mn0gcHQ9ezJ9PlxyXG4gICAgICAgICAgICA8RGl2aWRlckVsZW1lbnQ+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249J2NlbnRlcicgY2xhc3NOYW1lPVwiY2FwdGlvbi10ZXh0XCI+PGI+TlBNIFBhY2thZ2VzPC9iPjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9EaXZpZGVyRWxlbWVudD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgICAgIGp1c3RpZnk9J2NlbnRlcidcclxuICAgICAgICAgICAgYWxpZ25Db250ZW50PSdjZW50ZXInXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2l0ZW1zLm1hcCgocGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxHcmlkIGtleT17cGEubmFtZX0gaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgPE5wbVBhY2thZ2VcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtwYX1cclxuICAgICAgICAgICAgICAgICAgICB0b3RhbEl0ZW1zPXtpdGVtcy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgaT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZUl0ZW09e21vdmVJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uPXtzZXRQb3NpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDxCb3ggcGI9ezJ9IC8+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmludGVyZmFjZSBQYWNrUHJvcHMge1xyXG4gIGRhdGE6IE5ubVBhY2thZ2VcclxuICBpOiBudW1iZXJcclxuICB0b3RhbEl0ZW1zOiBudW1iZXJcclxuICBzZXRQb3NpdGlvbjogKGk6IG51bWJlciwgcG9zOiBQb3NpdGlvbikgPT4gdm9pZFxyXG4gIG1vdmVJdGVtOiAoaTogbnVtYmVyLCBkcmFnT2Zmc2V0OiBudW1iZXIpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3Qgb25Ub3AgPSB7IHpJbmRleDogMSB9XHJcbmNvbnN0IGZsYXQgPSB7XHJcbiAgekluZGV4OiAwLFxyXG4gIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuMyB9LFxyXG59XHJcblxyXG5mdW5jdGlvbiBOcG1QYWNrYWdlKHsgZGF0YSwgaSwgbW92ZUl0ZW0sIHNldFBvc2l0aW9uLCB0b3RhbEl0ZW1zIH06IFBhY2tQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VOcG1TdHlsZXMoKVxyXG4gIGNvbnN0IFtpc0RyYWdnaW5nLCBzZXREcmFnZ2luZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcclxuICBjb25zdCBtYXRjaGVzID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnc20nKSlcclxuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXHJcbiAgY29uc3QgW2NvcHlNZXNzYWdlT3Blbiwgc2V0Q29weU1lc3NhZ2VPcGVuVG9dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgX3NldFBvc2l0aW9uID0gdGhyb3R0bGUoZnVuY3Rpb24gKCkge1xyXG4gICAgc2V0UG9zaXRpb24oaSwge1xyXG4gICAgICBoZWlnaHQ6IHJlZi5jdXJyZW50IS5vZmZzZXRIZWlnaHQsXHJcbiAgICAgIHRvcDogcmVmLmN1cnJlbnQhLm9mZnNldFRvcCxcclxuICAgIH0pXHJcbiAgfSwgMTAwKVxyXG5cclxuICAvLyBVcGRhdGUgdGhlIG1lYXN1cmVkIHBvc2l0aW9uIG9mIHRoZSBpdGVtIHNvIHdlIGNhbiBjYWxjdWxhdGUgd2hlbiB3ZSBzaG91bGQgcmVhcnJhbmdlLlxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBfc2V0UG9zaXRpb24oKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U25hY2tiYXJcclxuICAgICAgICBvcGVuPXtjb3B5TWVzc2FnZU9wZW59XHJcbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MTAwMH1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRDb3B5TWVzc2FnZU9wZW5UbyhmYWxzZSlcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBwb3NpdGlvbj0nYWJzb2x1dGUnIGJvdHRvbT0nMCcgbGVmdD0nMjUlJyB3aWR0aD17NDAwfT5cclxuICAgICAgICAgIDxCcmFuZEJ1dHRvbiBjb2xvcj0nc3VjY2Vzcyc+XHJcbiAgICAgICAgICAgIHsvKiA8QWxlcnQgb25DbG9zZT17IHNldENvcHlNZXNzYWdlT3BlblRvKGZhbHNlKX0gc2V2ZXJpdHk9XCJzdWNjZXNzXCI+ICovfVxyXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9J2Jsb2NrJyB3aWR0aD0nMTAwJSc+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Q29waWVkIHRvIGNsaXBib2FyZDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHsvKiA8L0FsZXJ0PiAqL31cclxuICAgICAgICAgIDwvQnJhbmRCdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvU25hY2tiYXI+XHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgZHJhZz17bWF0Y2hlc31cclxuICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICBsYXlvdXRcclxuICAgICAgICBhbmltYXRlPXtpc0RyYWdnaW5nID8gb25Ub3AgOiBmbGF0fVxyXG4gICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDMgfX1cclxuICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMS4xMiB9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3NwcmluZ31cclxuICAgICAgICBkcmFnQ29uc3RyYWludHM9e3sgdG9wOiAxMCwgYm90dG9tOiAxMCwgbGVmdDogMTAsIHJpZ2h0OiAxMCB9fVxyXG4gICAgICAgIGRyYWdFbGFzdGljPXsxfVxyXG4gICAgICAgIG9uRHJhZ1N0YXJ0PXsoKSA9PiBzZXREcmFnZ2luZyh0cnVlKX1cclxuICAgICAgICBvbkRyYWdFbmQ9eygpID0+IHNldERyYWdnaW5nKGZhbHNlKX1cclxuICAgICAgICBvbkRyYWc9eyhlLCB7IHBvaW50IH0pID0+IG1vdmVJdGVtKGksIHBvaW50LnkpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkUm9vdH1cclxuICAgICAgICAgIGVsZXZhdGlvbj17Mn1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOlxyXG4gICAgICAgICAgICAvLyAgIGkgPT09IHRvdGFsSXRlbXMgLSAxID8gJ3JnYigyNTUgMjU1IDI1NSAvIDkwJSknIDogJ3doaXRlJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENhcmRIZWFkZXJcclxuICAgICAgICAgICAgdGl0bGU9e2RhdGEubmFtZX1cclxuICAgICAgICAgICAgdGl0bGVUeXBvZ3JhcGh5UHJvcHM9e3tcclxuICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiaDFcIixcclxuICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjNyZW0nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN1YmhlYWRlclR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheSdcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ6ICdjYXB0aW9uJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdWJoZWFkZXI9e2RhdGEuY29tbWFuZH1cclxuICAgICAgICAgICAgYWN0aW9uPXtcclxuICAgICAgICAgICAgICA8Qm94IHdpZHRoPScxMDAlJyBqdXN0aWZ5Q29udGVudD0nZmxleC1lbmQnPlxyXG4gICAgICAgICAgICAgICAgPEJyYW5kQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZGF0YS5jb21tYW5kIHx8ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldENvcHlNZXNzYWdlT3BlblRvKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEyLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgICAgY29sb3I9J3N1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIENvcHlcclxuICAgICAgICAgICAgICAgIDwvQnJhbmRCdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID48L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJz5cclxuICAgICAgICAgICAgICB7ZGF0YS5kZXNjcmlwdGlvbn1cclxuXHJcbiAgICAgICAgICAgICAgPFN0eWxlZEh0bWxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPXtkYXRhLnVybH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtkYXRhLm5hbWUgKyAnIG5wbSBob21lJ31cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtTRUNPTkRBUllfQ09MT1J9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgICAgICAgcm9sZT0nbGluaydcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvU3R5bGVkSHRtbExpbms+XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5wbVBhY2thZ2VzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=