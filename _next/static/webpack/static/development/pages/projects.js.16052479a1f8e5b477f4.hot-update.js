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
    pb: 2,
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
    pt: 2,
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
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    pb: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
      lineNumber: 122,
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
      lineNumber: 129,
      columnNumber: 7
    }
  }, __jsx(_root_theme_Custom__WEBPACK_IMPORTED_MODULE_2__["BrandButton"], {
    color: "success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    display: "block",
    width: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
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
      lineNumber: 141,
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
      lineNumber: 155,
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
        lineNumber: 166,
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
        lineNumber: 167,
        columnNumber: 13
      }
    }, "Copy")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "body2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ucG0tcGFja2FnZS9OcG1QYWNrYWdlcy50c3giXSwibmFtZXMiOlsic3ByaW5nIiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJ1c2VOcG1TdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ3cmFwcGVyIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiY2FyZFJvb3QiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsImFsaWduSXRlbXMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIk5wbVBhY2thZ2VzIiwicHJvcHMiLCJjbGFzc2VzIiwicG9zaXRpb25zIiwidXNlUmVmIiwiY3VycmVudCIsIml0ZW1zIiwic2V0SXRlbXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiTlBNX1BBQ0tBR0VTIiwic2V0UG9zaXRpb24iLCJpIiwib2Zmc2V0IiwibW92ZUl0ZW0iLCJkcmFnT2Zmc2V0IiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtb3ZlIiwibWFwIiwicGEiLCJpbmRleCIsIm5hbWUiLCJsZW5ndGgiLCJvblRvcCIsInpJbmRleCIsImZsYXQiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJOcG1QYWNrYWdlIiwiZGF0YSIsInRvdGFsSXRlbXMiLCJpc0RyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJyZWYiLCJjb3B5TWVzc2FnZU9wZW4iLCJzZXRDb3B5TWVzc2FnZU9wZW5UbyIsInVzZUVmZmVjdCIsIm9mZnNldEhlaWdodCIsInRvcCIsIm9mZnNldFRvcCIsInNjYWxlIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiZSIsInBvaW50IiwieSIsImNvbW1hbmQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJwb3NpdGlvbiIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtB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QUFBO0FBQUE7QUFBQTtBQUFBLGNBRE0sQ0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUE4QkUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dkLElBQUksQ0FBQ3VCLFdBRFIsQ0FERixDQTlCRixDQWRGLENBcEJNLENBQVI7QUF3RUQ7O0lBckZReEIsVTtVQUNTekMsWTs7O01BRFR5QyxVO0FBdUZNN0IsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2plY3RzLmpzLjE2MDUyNDc5YTFmOGU1YjQ3N2Y0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJveCxcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEdyaWQsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBQYXBlcixcclxuICBTbmFja2JhcixcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBObm1QYWNrYWdlLCBOUE1fUEFDS0FHRVMgfSBmcm9tIFwiLi9OUE1fUEFDS0FHRVNcIjtcclxuaW1wb3J0IHsgQnJhbmRCdXR0b24gfSBmcm9tIFwiQHJvb3QvdGhlbWUvQ3VzdG9tXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRGl2aWRlckVsZW1lbnQgfSBmcm9tIFwiLi4vc2hhcmVkXCI7XHJcbmltcG9ydCB7IGZpbmRJbmRleCwgUG9zaXRpb24sIG1vdmUgfSBmcm9tIFwiLi4vc2hhcmVkL2ZpbmQtaW5kZXhcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbn1cclxuXHJcbmNvbnN0IHNwcmluZyA9IHtcclxuICB0eXBlOiBcInNwcmluZ1wiLFxyXG4gIHN0aWZmbmVzczogNzAwLFxyXG4gIGRhbXBpbmc6IDMwLFxyXG59O1xyXG5cclxuY29uc3QgdXNlTnBtU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgd3JhcHBlcjoge1xyXG4gICAgICBjb2xvcjogXCIjMDAwXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxyXG4gICAgfSxcclxuICAgIGNhcmRSb290OiB7XHJcbiAgICAgIGNvbG9yOiBcIiMwMDBcIixcclxuICAgICAgYmFja2dyb3VuZDogXCIjZmZmXCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICBoZWlnaHQ6IDIwMCxcclxuICAgICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuXHJcbmNvbnN0IE5wbVBhY2thZ2VzID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VOcG1TdHlsZXMoKTtcclxuICBjb25zdCBwb3NpdGlvbnMgPSB1c2VSZWY8UG9zaXRpb25bXT4oW10pLmN1cnJlbnQ7XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShOUE1fUEFDS0FHRVMpO1xyXG4gIGNvbnN0IHNldFBvc2l0aW9uID0gKGk6IG51bWJlciwgb2Zmc2V0OiBQb3NpdGlvbikgPT4gKHBvc2l0aW9uc1tpXSA9IG9mZnNldCk7XHJcblxyXG4gIGNvbnN0IG1vdmVJdGVtID0gKGk6IG51bWJlciwgZHJhZ09mZnNldDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IGZpbmRJbmRleChpLCBkcmFnT2Zmc2V0LCBwb3NpdGlvbnMpO1xyXG4gICAgaWYgKHRhcmdldEluZGV4ICE9PSBpKSB7XHJcbiAgICAgIHNldEl0ZW1zKG1vdmUoaXRlbXMsIGksIHRhcmdldEluZGV4KSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBwYj17Mn0+XHJcbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0gZWxldmF0aW9uPXswfT5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEJveCBteT17Mn0gcHQ9ezJ9PlxyXG4gICAgICAgICAgICA8RGl2aWRlckVsZW1lbnQ+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249XCJjZW50ZXJcIj5OUE0gUGFja2FnZXM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvRGl2aWRlckVsZW1lbnQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgYWxpZ25Db250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpdGVtcy5tYXAoKHBhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiA8R3JpZCBrZXk9e3BhLm5hbWV9IGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICA8TnBtUGFja2FnZVxyXG4gICAgICAgICAgICAgICAgICBkYXRhPXtwYX1cclxuICAgICAgICAgICAgICAgICAgdG90YWxJdGVtcz17aXRlbXMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICBpPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgbW92ZUl0ZW09e21vdmVJdGVtfVxyXG4gICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbj17c2V0UG9zaXRpb259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD47XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDxCb3ggcGI9ezJ9IC8+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIFBhY2tQcm9wcyB7XHJcbiAgZGF0YTogTm5tUGFja2FnZTtcclxuICBpOiBudW1iZXI7XHJcbiAgdG90YWxJdGVtczogbnVtYmVyO1xyXG4gIHNldFBvc2l0aW9uOiAoaTogbnVtYmVyLCBwb3M6IFBvc2l0aW9uKSA9PiB2b2lkO1xyXG4gIG1vdmVJdGVtOiAoaTogbnVtYmVyLCBkcmFnT2Zmc2V0OiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IG9uVG9wID0geyB6SW5kZXg6IDEgfTtcclxuY29uc3QgZmxhdCA9IHtcclxuICB6SW5kZXg6IDAsXHJcbiAgdHJhbnNpdGlvbjogeyBkZWxheTogMC4zIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBOcG1QYWNrYWdlKHsgZGF0YSwgaSwgbW92ZUl0ZW0sIHNldFBvc2l0aW9uLCB0b3RhbEl0ZW1zIH06IFBhY2tQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VOcG1TdHlsZXMoKTtcclxuICBjb25zdCBbaXNEcmFnZ2luZywgc2V0RHJhZ2dpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgW2NvcHlNZXNzYWdlT3Blbiwgc2V0Q29weU1lc3NhZ2VPcGVuVG9dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIFVwZGF0ZSB0aGUgbWVhc3VyZWQgcG9zaXRpb24gb2YgdGhlIGl0ZW0gc28gd2UgY2FuIGNhbGN1bGF0ZSB3aGVuIHdlIHNob3VsZCByZWFycmFuZ2UuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFBvc2l0aW9uKGksIHtcclxuICAgICAgaGVpZ2h0OiByZWYuY3VycmVudCEub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICB0b3A6IHJlZi5jdXJyZW50IS5vZmZzZXRUb3AsXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuICg8PlxyXG4gICAgPFNuYWNrYmFyXHJcbiAgICAgIG9wZW49e2NvcHlNZXNzYWdlT3Blbn1cclxuICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MTAwMH1cclxuICAgICAgb25DbG9zZT17KCkgPT4ge1xyXG4gICAgICAgIHNldENvcHlNZXNzYWdlT3BlblRvKGZhbHNlKTtcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPEJveCBwb3NpdGlvbj1cImFic29sdXRlXCIgYm90dG9tPVwiMFwiIGxlZnQ9XCIyNSVcIiB3aWR0aD17NDAwfT5cclxuICAgICAgICA8QnJhbmRCdXR0b24gY29sb3I9XCJzdWNjZXNzXCI+XHJcbiAgICAgICAgICB7LyogPEFsZXJ0IG9uQ2xvc2U9eyBzZXRDb3B5TWVzc2FnZU9wZW5UbyhmYWxzZSl9IHNldmVyaXR5PVwic3VjY2Vzc1wiPiAqL31cclxuICAgICAgICAgIDxCb3ggZGlzcGxheT1cImJsb2NrXCIgd2lkdGg9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIENvcGllZCB0byBjbGlwYm9hcmRcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICB7LyogPC9BbGVydD4gKi99XHJcbiAgICAgICAgPC9CcmFuZEJ1dHRvbj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L1NuYWNrYmFyPlxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgZHJhZz17dHJ1ZX1cclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgIGxheW91dFxyXG4gICAgICBhbmltYXRlPXtpc0RyYWdnaW5nID8gb25Ub3AgOiBmbGF0fVxyXG4gICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjAzIH19XHJcbiAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAxLjEyIH19XHJcbiAgICAgIHRyYW5zaXRpb249e3NwcmluZ31cclxuICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7IHRvcDogMTAsIGJvdHRvbTogMTAsIGxlZnQ6IDEwLCByaWdodDogMTAgfX1cclxuICAgICAgZHJhZ0VsYXN0aWM9ezF9XHJcbiAgICAgIG9uRHJhZ1N0YXJ0PXsoKSA9PiBzZXREcmFnZ2luZyh0cnVlKX1cclxuICAgICAgb25EcmFnRW5kPXsoKSA9PiBzZXREcmFnZ2luZyhmYWxzZSl9XHJcbiAgICAgIG9uRHJhZz17KGUsIHsgcG9pbnQgfSkgPT4gbW92ZUl0ZW0oaSwgcG9pbnQueSl9XHJcbiAgICA+XHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRSb290fVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBpID09PSAodG90YWxJdGVtcyAtIDEpXHJcbiAgICAgICAgICAgID8gXCJyZ2JhKDI0NywyNDcsIDI0NywuODMpXCJcclxuICAgICAgICAgICAgOiBcIndoaXRlXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJkSGVhZGVyXHJcbiAgICAgICAgICB0aXRsZT17ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgc3ViaGVhZGVyPXtkYXRhLmNvbW1hbmR9XHJcbiAgICAgICAgICBhY3Rpb249ezxCb3ggd2lkdGg9XCIxMDAlXCIganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxyXG4gICAgICAgICAgICA8QnJhbmRCdXR0b25cclxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGRhdGEuY29tbWFuZCB8fCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIHNldENvcHlNZXNzYWdlT3BlblRvKHRydWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICByaWdodDogMTIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDb3B5XHJcbiAgICAgICAgICAgIDwvQnJhbmRCdXR0b24+XHJcbiAgICAgICAgICA8L0JveD59XHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgICAge2RhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gIDwvPik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5wbVBhY2thZ2VzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9