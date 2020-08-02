webpackHotUpdate("static\\development\\pages\\projects.js",{

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
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\npm-package\\NpmPackages.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;







const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};
const useNpmStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => {
  return {
    wrapper: {
      color: "#000",
      background: "#fff"
    },
    cardRoot: {
      color: "#000",
      background: "#fff",
      justifyContent: "center",
      height: 200,
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column"
    }
  };
});

const NpmPackages = props => {
  _s();

  const classes = useNpmStyles();
  const positions = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])([]).current;
  const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(_NPM_PACKAGES__WEBPACK_IMPORTED_MODULE_1__["NPM_PACKAGES"]);

  const setPosition = (i, offset) => positions[i] = offset;

  const moveItem = (i, dragOffset) => {
    const targetIndex = Object(_shared_find_index__WEBPACK_IMPORTED_MODULE_6__["findIndex"])(i, dragOffset, positions);

    if (targetIndex !== i) {
      setItems(Object(_shared_find_index__WEBPACK_IMPORTED_MODULE_6__["move"])(items, i, targetIndex));
    }
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    mb: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
    className: classes.wrapper,
    elevation: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    my: 2,
    py: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx(_shared__WEBPACK_IMPORTED_MODULE_5__["DividerElement"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 68,
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
        lineNumber: 76,
        columnNumber: 22
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
        lineNumber: 77,
        columnNumber: 17
      }
    }));
  })))));
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
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  const [copyMessageOpen, setCopyMessageOpenTo] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false); // Update the measured position of the item so we can calculate when we should rearrange.

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(() => {
    setPosition(i, {
      height: ref.current.offsetHeight,
      top: ref.current.offsetTop
    });
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Snackbar"], {
    open: copyMessageOpen,
    autoHideDuration: 1000,
    onClose: () => {
      setCopyMessageOpenTo(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    position: "absolute",
    bottom: "0",
    left: "25%",
    width: 400,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, __jsx(_root_theme_Custom__WEBPACK_IMPORTED_MODULE_2__["BrandButton"], {
    color: "success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    display: "block",
    width: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, "Copied to clipboard"))))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    drag: true,
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
      lineNumber: 140,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    className: classes.cardRoot,
    style: {
      background: i === totalItems - 1 ? "rgba(247,247, 247,.83)" : "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardHeader"], {
    title: data.name,
    subheader: data.command,
    action: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
      width: "100%",
      justifyContent: "flex-end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 19
      }
    }, __jsx(_root_theme_Custom__WEBPACK_IMPORTED_MODULE_2__["BrandButton"], {
      size: "small",
      onClick: () => {
        navigator.clipboard.writeText(data.command || "");
        setCopyMessageOpenTo(true);
      },
      style: {
        position: "absolute",
        right: 12
      },
      variant: "outlined",
      color: "success",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 13
      }
    }, "Copy")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "body2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }, data.description)))));
}

_s2(NpmPackage, "NnuWrxZ3Xya0oe4tNBm98fphr+I=", false, function () {
  return [useNpmStyles];
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
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ucG0tcGFja2FnZS9OcG1QYWNrYWdlcy50c3giXSwibmFtZXMiOlsic3ByaW5nIiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJ1c2VOcG1TdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ3cmFwcGVyIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiY2FyZFJvb3QiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsImFsaWduSXRlbXMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIk5wbVBhY2thZ2VzIiwicHJvcHMiLCJjbGFzc2VzIiwicG9zaXRpb25zIiwidXNlUmVmIiwiY3VycmVudCIsIml0ZW1zIiwic2V0SXRlbXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiTlBNX1BBQ0tBR0VTIiwic2V0UG9zaXRpb24iLCJpIiwib2Zmc2V0IiwibW92ZUl0ZW0iLCJkcmFnT2Zmc2V0IiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtb3ZlIiwibWFwIiwicGEiLCJpbmRleCIsIm5hbWUiLCJsZW5ndGgiLCJvblRvcCIsInpJbmRleCIsImZsYXQiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJOcG1QYWNrYWdlIiwiZGF0YSIsInRvdGFsSXRlbXMiLCJpc0RyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJyZWYiLCJjb3B5TWVzc2FnZU9wZW4iLCJzZXRDb3B5TWVzc2FnZU9wZW5UbyIsInVzZUVmZmVjdCIsIm9mZnNldEhlaWdodCIsInRvcCIsIm9mZnNldFRvcCIsInNjYWxlIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiZSIsInBvaW50IiwieSIsImNvbW1hbmQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJwb3NpdGlvbiIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtB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Qyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dkLElBQUksQ0FBQ3VCLFdBRFIsQ0FERixDQTlCRixDQWRGLENBcEJNLENBQVI7QUF3RUQ7O0lBckZReEIsVTtVQUNTekMsWTs7O01BRFR5QyxVO0FBdUZNN0IsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2plY3RzLmpzLjQ2OGU5MmRiNGI0NjNlOWY3MWM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJveCxcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEdyaWQsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBQYXBlcixcclxuICBTbmFja2JhcixcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBObm1QYWNrYWdlLCBOUE1fUEFDS0FHRVMgfSBmcm9tIFwiLi9OUE1fUEFDS0FHRVNcIjtcclxuaW1wb3J0IHsgQnJhbmRCdXR0b24gfSBmcm9tIFwiQHJvb3QvdGhlbWUvQ3VzdG9tXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRGl2aWRlckVsZW1lbnQgfSBmcm9tIFwiLi4vc2hhcmVkXCI7XHJcbmltcG9ydCB7IGZpbmRJbmRleCwgUG9zaXRpb24sIG1vdmUgfSBmcm9tIFwiLi4vc2hhcmVkL2ZpbmQtaW5kZXhcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbn1cclxuXHJcbmNvbnN0IHNwcmluZyA9IHtcclxuICB0eXBlOiBcInNwcmluZ1wiLFxyXG4gIHN0aWZmbmVzczogNzAwLFxyXG4gIGRhbXBpbmc6IDMwLFxyXG59O1xyXG5cclxuY29uc3QgdXNlTnBtU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgd3JhcHBlcjoge1xyXG4gICAgICBjb2xvcjogXCIjMDAwXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxyXG4gICAgfSxcclxuICAgIGNhcmRSb290OiB7XHJcbiAgICAgIGNvbG9yOiBcIiMwMDBcIixcclxuICAgICAgYmFja2dyb3VuZDogXCIjZmZmXCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICBoZWlnaHQ6IDIwMCxcclxuICAgICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuXHJcbmNvbnN0IE5wbVBhY2thZ2VzID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VOcG1TdHlsZXMoKTtcclxuICBjb25zdCBwb3NpdGlvbnMgPSB1c2VSZWY8UG9zaXRpb25bXT4oW10pLmN1cnJlbnQ7XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShOUE1fUEFDS0FHRVMpO1xyXG4gIGNvbnN0IHNldFBvc2l0aW9uID0gKGk6IG51bWJlciwgb2Zmc2V0OiBQb3NpdGlvbikgPT4gKHBvc2l0aW9uc1tpXSA9IG9mZnNldCk7XHJcblxyXG4gIGNvbnN0IG1vdmVJdGVtID0gKGk6IG51bWJlciwgZHJhZ09mZnNldDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IGZpbmRJbmRleChpLCBkcmFnT2Zmc2V0LCBwb3NpdGlvbnMpO1xyXG4gICAgaWYgKHRhcmdldEluZGV4ICE9PSBpKSB7XHJcbiAgICAgIHNldEl0ZW1zKG1vdmUoaXRlbXMsIGksIHRhcmdldEluZGV4KSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBtYj17Mn0+XHJcbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0gZWxldmF0aW9uPXswfT5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEJveCBteT17Mn0gcHk9ezJ9PlxyXG4gICAgICAgICAgICA8RGl2aWRlckVsZW1lbnQ+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249XCJjZW50ZXJcIj5OUE0gUGFja2FnZXM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvRGl2aWRlckVsZW1lbnQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgYWxpZ25Db250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpdGVtcy5tYXAoKHBhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiA8R3JpZCBrZXk9e3BhLm5hbWV9IGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICA8TnBtUGFja2FnZVxyXG4gICAgICAgICAgICAgICAgICBkYXRhPXtwYX1cclxuICAgICAgICAgICAgICAgICAgdG90YWxJdGVtcz17aXRlbXMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICBpPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgbW92ZUl0ZW09e21vdmVJdGVtfVxyXG4gICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbj17c2V0UG9zaXRpb259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD47XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmludGVyZmFjZSBQYWNrUHJvcHMge1xyXG4gIGRhdGE6IE5ubVBhY2thZ2U7XHJcbiAgaTogbnVtYmVyO1xyXG4gIHRvdGFsSXRlbXM6IG51bWJlcjtcclxuICBzZXRQb3NpdGlvbjogKGk6IG51bWJlciwgcG9zOiBQb3NpdGlvbikgPT4gdm9pZDtcclxuICBtb3ZlSXRlbTogKGk6IG51bWJlciwgZHJhZ09mZnNldDogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBvblRvcCA9IHsgekluZGV4OiAxIH07XHJcbmNvbnN0IGZsYXQgPSB7XHJcbiAgekluZGV4OiAwLFxyXG4gIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuMyB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gTnBtUGFja2FnZSh7IGRhdGEsIGksIG1vdmVJdGVtLCBzZXRQb3NpdGlvbiwgdG90YWxJdGVtcyB9OiBQYWNrUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlTnBtU3R5bGVzKCk7XHJcbiAgY29uc3QgW2lzRHJhZ2dpbmcsIHNldERyYWdnaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFtjb3B5TWVzc2FnZU9wZW4sIHNldENvcHlNZXNzYWdlT3BlblRvXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAvLyBVcGRhdGUgdGhlIG1lYXN1cmVkIHBvc2l0aW9uIG9mIHRoZSBpdGVtIHNvIHdlIGNhbiBjYWxjdWxhdGUgd2hlbiB3ZSBzaG91bGQgcmVhcnJhbmdlLlxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRQb3NpdGlvbihpLCB7XHJcbiAgICAgIGhlaWdodDogcmVmLmN1cnJlbnQhLm9mZnNldEhlaWdodCxcclxuICAgICAgdG9wOiByZWYuY3VycmVudCEub2Zmc2V0VG9wLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoPD5cclxuICAgIDxTbmFja2JhclxyXG4gICAgICBvcGVuPXtjb3B5TWVzc2FnZU9wZW59XHJcbiAgICAgIGF1dG9IaWRlRHVyYXRpb249ezEwMDB9XHJcbiAgICAgIG9uQ2xvc2U9eygpID0+IHtcclxuICAgICAgICBzZXRDb3B5TWVzc2FnZU9wZW5UbyhmYWxzZSk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxCb3ggcG9zaXRpb249XCJhYnNvbHV0ZVwiIGJvdHRvbT1cIjBcIiBsZWZ0PVwiMjUlXCIgd2lkdGg9ezQwMH0+XHJcbiAgICAgICAgPEJyYW5kQnV0dG9uIGNvbG9yPVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgey8qIDxBbGVydCBvbkNsb3NlPXsgc2V0Q29weU1lc3NhZ2VPcGVuVG8oZmFsc2UpfSBzZXZlcml0eT1cInN1Y2Nlc3NcIj4gKi99XHJcbiAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJibG9ja1wiIHdpZHRoPVwiMTAwJVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICBDb3BpZWQgdG8gY2xpcGJvYXJkXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgey8qIDwvQWxlcnQ+ICovfVxyXG4gICAgICAgIDwvQnJhbmRCdXR0b24+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9TbmFja2Jhcj5cclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGRyYWc9e3RydWV9XHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBsYXlvdXRcclxuICAgICAgYW5pbWF0ZT17aXNEcmFnZ2luZyA/IG9uVG9wIDogZmxhdH1cclxuICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wMyB9fVxyXG4gICAgICB3aGlsZVRhcD17eyBzY2FsZTogMS4xMiB9fVxyXG4gICAgICB0cmFuc2l0aW9uPXtzcHJpbmd9XHJcbiAgICAgIGRyYWdDb25zdHJhaW50cz17eyB0b3A6IDEwLCBib3R0b206IDEwLCBsZWZ0OiAxMCwgcmlnaHQ6IDEwIH19XHJcbiAgICAgIGRyYWdFbGFzdGljPXsxfVxyXG4gICAgICBvbkRyYWdTdGFydD17KCkgPT4gc2V0RHJhZ2dpbmcodHJ1ZSl9XHJcbiAgICAgIG9uRHJhZ0VuZD17KCkgPT4gc2V0RHJhZ2dpbmcoZmFsc2UpfVxyXG4gICAgICBvbkRyYWc9eyhlLCB7IHBvaW50IH0pID0+IG1vdmVJdGVtKGksIHBvaW50LnkpfVxyXG4gICAgPlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkUm9vdH1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogaSA9PT0gKHRvdGFsSXRlbXMgLSAxKVxyXG4gICAgICAgICAgICA/IFwicmdiYSgyNDcsMjQ3LCAyNDcsLjgzKVwiXHJcbiAgICAgICAgICAgIDogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgICAgdGl0bGU9e2RhdGEubmFtZX1cclxuICAgICAgICAgIHN1YmhlYWRlcj17ZGF0YS5jb21tYW5kfVxyXG4gICAgICAgICAgYWN0aW9uPXs8Qm94IHdpZHRoPVwiMTAwJVwiIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgPEJyYW5kQnV0dG9uXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChkYXRhLmNvbW1hbmQgfHwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICBzZXRDb3B5TWVzc2FnZU9wZW5Ubyh0cnVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEyLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ29weVxyXG4gICAgICAgICAgICA8L0JyYW5kQnV0dG9uPlxyXG4gICAgICAgICAgPC9Cb3g+fVxyXG4gICAgICAgID5cclxuICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgIHtkYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICA8Lz4pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOcG1QYWNrYWdlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==