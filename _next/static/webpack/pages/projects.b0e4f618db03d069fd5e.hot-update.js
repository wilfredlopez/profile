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
      flexDirection: 'column',
      borderRadius: '1.8rem'
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
      lineNumber: 74,
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
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    mb: 2,
    pt: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx(_shared__WEBPACK_IMPORTED_MODULE_5__["DividerElement"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    align: "center",
    className: "caption-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
      lineNumber: 93,
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
        lineNumber: 102,
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
        lineNumber: 103,
        columnNumber: 19
      }
    }));
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    pb: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
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
      lineNumber: 156,
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
      lineNumber: 166,
      columnNumber: 9
    }
  }, __jsx(_root_theme_Custom__WEBPACK_IMPORTED_MODULE_2__["BrandButton"], {
    color: "success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    display: "block",
    width: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
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
      lineNumber: 176,
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
      lineNumber: 190,
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
        lineNumber: 217,
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
        lineNumber: 218,
        columnNumber: 17
      }
    }, "Copy")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "body2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
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
      lineNumber: 240,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbnBtLXBhY2thZ2UvTnBtUGFja2FnZXMudHN4Il0sIm5hbWVzIjpbInNwcmluZyIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwidXNlTnBtU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwid3JhcHBlciIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJwcmltYXJ5IiwiYmFja2dyb3VuZCIsInBhcGVyIiwiY2FyZFJvb3QiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsImFsaWduSXRlbXMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImJvcmRlclJhZGl1cyIsIk5wbVBhY2thZ2VzIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJwb3NpdGlvbnMiLCJ1c2VSZWYiLCJjdXJyZW50IiwiaXRlbXMiLCJzZXRJdGVtcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJsaW1pdCIsIk5QTV9QQUNLQUdFUyIsInNsaWNlIiwic2V0UG9zaXRpb24iLCJpIiwib2Zmc2V0IiwibW92ZUl0ZW0iLCJkcmFnT2Zmc2V0IiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtb3ZlIiwiZGFyayIsIm1hcCIsInBhIiwiaW5kZXgiLCJuYW1lIiwibGVuZ3RoIiwib25Ub3AiLCJ6SW5kZXgiLCJmbGF0IiwidHJhbnNpdGlvbiIsImRlbGF5IiwiTnBtUGFja2FnZSIsImRhdGEiLCJ0b3RhbEl0ZW1zIiwiaXNEcmFnZ2luZyIsInNldERyYWdnaW5nIiwibWF0Y2hlcyIsInVzZU1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsInVwIiwicmVmIiwiY29weU1lc3NhZ2VPcGVuIiwic2V0Q29weU1lc3NhZ2VPcGVuVG8iLCJfc2V0UG9zaXRpb24iLCJ0aHJvdHRsZSIsIm9mZnNldEhlaWdodCIsInRvcCIsIm9mZnNldFRvcCIsInVzZUVmZmVjdCIsInBvc2l0aW9uIiwic2NhbGUiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJlIiwicG9pbnQiLCJ5IiwiY29tcG9uZW50Iiwic3R5bGUiLCJmb250U2l6ZSIsInZhcmlhbnQiLCJjb21tYW5kIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJTRUNPTkRBUllfQ09MT1IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU9BLE1BQU1BLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUUsUUFETztBQUViQyxXQUFTLEVBQUUsR0FGRTtBQUdiQyxTQUFPLEVBQUU7QUFISSxDQUFmO0FBTUEsTUFBTUMsWUFBWSxHQUFHQyxvRUFBVSxDQUFDQyxLQUFLLElBQUk7QUFDdkMsU0FBTztBQUNMQyxXQUFPLEVBQUU7QUFDUEMsV0FBSyxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQkMsT0FEbkI7QUFFUEMsZ0JBQVUsRUFBRU4sS0FBSyxDQUFDRyxPQUFOLENBQWNHLFVBQWQsQ0FBeUJDO0FBRjlCLEtBREo7QUFLTEMsWUFBUSxFQUFFO0FBQ1JOLFdBQUssRUFBRSxNQURDO0FBRVJJLGdCQUFVLEVBQUUsTUFGSjtBQUdSRyxvQkFBYyxFQUFFLFFBSFI7QUFJUkMsWUFBTSxFQUFFLEdBSkE7QUFLUkMsZ0JBQVUsRUFBRSxZQUxKO0FBTVJDLGFBQU8sRUFBRSxNQU5EO0FBT1JDLG1CQUFhLEVBQUUsUUFQUDtBQVFSQyxrQkFBWSxFQUFFO0FBUk47QUFMTCxHQUFQO0FBZ0JELENBakI4QixDQUEvQjs7QUFtQkEsTUFBTUMsV0FBVyxHQUFJQyxLQUFELElBQWtCO0FBQUE7O0FBQ3BDLFFBQU1DLE9BQU8sR0FBR25CLFlBQVksRUFBNUI7QUFFQSxRQUFNRSxLQUFLLEdBQUdrQixrRUFBUSxFQUF0QjtBQUVBLFFBQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBYSxFQUFiLENBQU4sQ0FBdUJDLE9B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LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJveCxcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEdyaWQsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBQYXBlcixcclxuICBTbmFja2JhcixcclxuICBUeXBvZ3JhcGh5LFxyXG4gIHVzZVRoZW1lLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyBObm1QYWNrYWdlLCBOUE1fUEFDS0FHRVMgfSBmcm9tICcuL05QTV9QQUNLQUdFUydcclxuaW1wb3J0IHsgQnJhbmRCdXR0b24gfSBmcm9tICdAcm9vdC90aGVtZS9DdXN0b20nXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRGl2aWRlckVsZW1lbnQsIFN0eWxlZEh0bWxMaW5rIH0gZnJvbSAnLi4vc2hhcmVkJ1xyXG5pbXBvcnQgeyBmaW5kSW5kZXgsIFBvc2l0aW9uLCBtb3ZlIH0gZnJvbSAnLi4vc2hhcmVkL2ZpbmQtaW5kZXgnXHJcbmltcG9ydCB7IERBUktfQkFDS0dST1VORF9DT0xPUiB9IGZyb20gJ0Byb290L3RoZW1lL2dldFRoZW1lJ1xyXG5pbXBvcnQgeyB0aHJvdHRsZSB9IGZyb20gJ0B3aWxmcmVkbG9wZXovcmVhY3QtdXRpbHMnXHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknXHJcbmltcG9ydCB7IFBSSU1BUllfQ09MT1IsIFRFUlRJQVJZX0NPTE9SLCBTRUNPTkRBUllfQ09MT1IgfSBmcm9tICcuLi8uLi90aGVtZS9nZXRUaGVtZSdcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgZGFyaz86IGJvb2xlYW5cclxuICBsaW1pdD86IG51bWJlclxyXG59XHJcblxyXG5jb25zdCBzcHJpbmcgPSB7XHJcbiAgdHlwZTogJ3NwcmluZycsXHJcbiAgc3RpZmZuZXNzOiA3MDAsXHJcbiAgZGFtcGluZzogMzAsXHJcbn1cclxuXHJcbmNvbnN0IHVzZU5wbVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB3cmFwcGVyOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyXHJcbiAgICB9LFxyXG4gICAgY2FyZFJvb3Q6IHtcclxuICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGhlaWdodDogMjAwLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzEuOHJlbSdcclxuICAgIH0sXHJcbiAgfVxyXG59KVxyXG5cclxuY29uc3QgTnBtUGFja2FnZXMgPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZU5wbVN0eWxlcygpXHJcblxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxyXG5cclxuICBjb25zdCBwb3NpdGlvbnMgPSB1c2VSZWY8UG9zaXRpb25bXT4oW10pLmN1cnJlbnRcclxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IFJlYWN0LnVzZVN0YXRlKFxyXG4gICAgcHJvcHMubGltaXQgPyBOUE1fUEFDS0FHRVMuc2xpY2UoMCwgcHJvcHMubGltaXQpIDogTlBNX1BBQ0tBR0VTXHJcbiAgKVxyXG4gIGZ1bmN0aW9uIHNldFBvc2l0aW9uKGk6IG51bWJlciwgb2Zmc2V0OiBQb3NpdGlvbikge1xyXG4gICAgcG9zaXRpb25zW2ldID0gb2Zmc2V0XHJcbiAgfVxyXG4gIGNvbnN0IG1vdmVJdGVtID0gKGk6IG51bWJlciwgZHJhZ09mZnNldDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IGZpbmRJbmRleChpLCBkcmFnT2Zmc2V0LCBwb3NpdGlvbnMpXHJcbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IGkpIHtcclxuICAgICAgc2V0SXRlbXMobW92ZShpdGVtcywgaSwgdGFyZ2V0SW5kZXgpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPFBhcGVyXHJcbiAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgcHJvcHMuZGFya1xyXG4gICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfVxyXG4gICAgICAgIGVsZXZhdGlvbj17MH1cclxuICAgICAgPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Qm94IG1iPXsyfSBwdD17Mn0+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyRWxlbWVudD5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj0nY2VudGVyJyBjbGFzc05hbWU9XCJjYXB0aW9uLXRleHRcIj48Yj5OUE0gUGFja2FnZXM8L2I+PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0RpdmlkZXJFbGVtZW50PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgc3BhY2luZz17Mn1cclxuICAgICAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgICAgICBhbGlnbkNvbnRlbnQ9J2NlbnRlcidcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXRlbXMubWFwKChwYSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEdyaWQga2V5PXtwYS5uYW1lfSBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICA8TnBtUGFja2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e3BhfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsSXRlbXM9e2l0ZW1zLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICBpPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBtb3ZlSXRlbT17bW92ZUl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb249e3NldFBvc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPEJveCBwYj17Mn0gLz5cclxuICAgICAgPC9QYXBlcj5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuaW50ZXJmYWNlIFBhY2tQcm9wcyB7XHJcbiAgZGF0YTogTm5tUGFja2FnZVxyXG4gIGk6IG51bWJlclxyXG4gIHRvdGFsSXRlbXM6IG51bWJlclxyXG4gIHNldFBvc2l0aW9uOiAoaTogbnVtYmVyLCBwb3M6IFBvc2l0aW9uKSA9PiB2b2lkXHJcbiAgbW92ZUl0ZW06IChpOiBudW1iZXIsIGRyYWdPZmZzZXQ6IG51bWJlcikgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBvblRvcCA9IHsgekluZGV4OiAxIH1cclxuY29uc3QgZmxhdCA9IHtcclxuICB6SW5kZXg6IDAsXHJcbiAgdHJhbnNpdGlvbjogeyBkZWxheTogMC4zIH0sXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5wbVBhY2thZ2UoeyBkYXRhLCBpLCBtb3ZlSXRlbSwgc2V0UG9zaXRpb24sIHRvdGFsSXRlbXMgfTogUGFja1Byb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZU5wbVN0eWxlcygpXHJcbiAgY29uc3QgW2lzRHJhZ2dpbmcsIHNldERyYWdnaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxyXG4gIGNvbnN0IG1hdGNoZXMgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpKVxyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcclxuICBjb25zdCBbY29weU1lc3NhZ2VPcGVuLCBzZXRDb3B5TWVzc2FnZU9wZW5Ub10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBfc2V0UG9zaXRpb24gPSB0aHJvdHRsZShmdW5jdGlvbiAoKSB7XHJcbiAgICBzZXRQb3NpdGlvbihpLCB7XHJcbiAgICAgIGhlaWdodDogcmVmLmN1cnJlbnQhLm9mZnNldEhlaWdodCxcclxuICAgICAgdG9wOiByZWYuY3VycmVudCEub2Zmc2V0VG9wLFxyXG4gICAgfSlcclxuICB9LCAxMDApXHJcblxyXG4gIC8vIFVwZGF0ZSB0aGUgbWVhc3VyZWQgcG9zaXRpb24gb2YgdGhlIGl0ZW0gc28gd2UgY2FuIGNhbGN1bGF0ZSB3aGVuIHdlIHNob3VsZCByZWFycmFuZ2UuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIF9zZXRQb3NpdGlvbigpXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTbmFja2JhclxyXG4gICAgICAgIG9wZW49e2NvcHlNZXNzYWdlT3Blbn1cclxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXsxMDAwfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHtcclxuICAgICAgICAgIHNldENvcHlNZXNzYWdlT3BlblRvKGZhbHNlKVxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHBvc2l0aW9uPSdhYnNvbHV0ZScgYm90dG9tPScwJyBsZWZ0PScyNSUnIHdpZHRoPXs0MDB9PlxyXG4gICAgICAgICAgPEJyYW5kQnV0dG9uIGNvbG9yPSdzdWNjZXNzJz5cclxuICAgICAgICAgICAgey8qIDxBbGVydCBvbkNsb3NlPXsgc2V0Q29weU1lc3NhZ2VPcGVuVG8oZmFsc2UpfSBzZXZlcml0eT1cInN1Y2Nlc3NcIj4gKi99XHJcbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT0nYmxvY2snIHdpZHRoPScxMDAlJz5cclxuICAgICAgICAgICAgICA8c3Bhbj5Db3BpZWQgdG8gY2xpcGJvYXJkPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgey8qIDwvQWxlcnQ+ICovfVxyXG4gICAgICAgICAgPC9CcmFuZEJ1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9TbmFja2Jhcj5cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICBkcmFnPXttYXRjaGVzfVxyXG4gICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgIGxheW91dFxyXG4gICAgICAgIGFuaW1hdGU9e2lzRHJhZ2dpbmcgPyBvblRvcCA6IGZsYXR9XHJcbiAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wMyB9fVxyXG4gICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAxLjEyIH19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17c3ByaW5nfVxyXG4gICAgICAgIGRyYWdDb25zdHJhaW50cz17eyB0b3A6IDEwLCBib3R0b206IDEwLCBsZWZ0OiAxMCwgcmlnaHQ6IDEwIH19XHJcbiAgICAgICAgZHJhZ0VsYXN0aWM9ezF9XHJcbiAgICAgICAgb25EcmFnU3RhcnQ9eygpID0+IHNldERyYWdnaW5nKHRydWUpfVxyXG4gICAgICAgIG9uRHJhZ0VuZD17KCkgPT4gc2V0RHJhZ2dpbmcoZmFsc2UpfVxyXG4gICAgICAgIG9uRHJhZz17KGUsIHsgcG9pbnQgfSkgPT4gbW92ZUl0ZW0oaSwgcG9pbnQueSl9XHJcbiAgICAgID5cclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRSb290fVxyXG4gICAgICAgICAgZWxldmF0aW9uPXsyfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6XHJcbiAgICAgICAgICAgIC8vICAgaSA9PT0gdG90YWxJdGVtcyAtIDEgPyAncmdiKDI1NSAyNTUgMjU1IC8gOTAlKScgOiAnd2hpdGUnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgICAgICB0aXRsZT17ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICB0aXRsZVR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogXCJoMVwiLFxyXG4gICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEuM3JlbScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3ViaGVhZGVyVHlwb2dyYXBoeVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdncmF5J1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgdmFyaWFudDogJ2NhcHRpb24nXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN1YmhlYWRlcj17ZGF0YS5jb21tYW5kfVxyXG4gICAgICAgICAgICBhY3Rpb249e1xyXG4gICAgICAgICAgICAgIDxCb3ggd2lkdGg9JzEwMCUnIGp1c3RpZnlDb250ZW50PSdmbGV4LWVuZCc+XHJcbiAgICAgICAgICAgICAgICA8QnJhbmRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChkYXRhLmNvbW1hbmQgfHwgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29weU1lc3NhZ2VPcGVuVG8odHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMTIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcj0nc3VjY2VzcydcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQ29weVxyXG4gICAgICAgICAgICAgICAgPC9CcmFuZEJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPjwvQ2FyZEhlYWRlcj5cclxuICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInPlxyXG4gICAgICAgICAgICAgIHtkYXRhLmRlc2NyaXB0aW9ufVxyXG5cclxuICAgICAgICAgICAgICA8U3R5bGVkSHRtbExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e2RhdGEudXJsfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2RhdGEubmFtZSArICcgbnBtIGhvbWUnfVxyXG4gICAgICAgICAgICAgICAgY29sb3I9e1NFQ09OREFSWV9DT0xPUn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXHJcbiAgICAgICAgICAgICAgICByb2xlPSdsaW5rJ1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRIdG1sTGluaz5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTnBtUGFja2FnZXNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==