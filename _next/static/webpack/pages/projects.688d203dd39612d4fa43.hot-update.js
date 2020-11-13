webpackHotUpdate_N_E("pages/projects",{

/***/ "./src/components/Layout/SideDrawer.tsx":
/*!**********************************************!*\
  !*** ./src/components/Layout/SideDrawer.tsx ***!
  \**********************************************/
/*! exports provided: StyledNavLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNavLink", function() { return StyledNavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideDrawer; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/shared */ "./src/components/shared/index.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_DragHandle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/DragHandle */ "./node_modules/@material-ui/icons/DragHandle.js");
/* harmony import */ var _material_ui_icons_DragHandle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DragHandle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _navlinks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navlinks */ "./src/components/Layout/navlinks.tsx");


var _jsxFileName = "D:\\WEB_DEV\\Personal_Projects\\wilfredlopez\\src\\components\\Layout\\SideDrawer.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  menuButton: {
    // marginRight: theme.spacing(0.5),
    // marginLeft: theme.spacing(0.5),
    minHeight: 50,
    minWidth: 50,
    zIndex: 1001
  }
}));
const StyledNavLink = styled_components__WEBPACK_IMPORTED_MODULE_17__["default"].a.withConfig({
  displayName: "SideDrawer__StyledNavLink",
  componentId: "evp6zq-0"
})(["color:", ";font-weight:", ";text-decoration:none;cursor:pointer;&:hover{color:", ";}"], props => props.isActive ? props.theme.colors.tertiary : 'inherit', props => props.isActive ? 'bold' : 'normal', props => props.theme.colors.tertiary);
_c = StyledNavLink;
const variants = {
  open: {
    opacity: 1,
    x: 0
  },
  closed: {
    opacity: 0,
    x: '-100%'
  }
};
const listItemVariants = {
  open: {
    opacity: 1,
    y: 0
  },
  closed: {
    opacity: 0,
    y: '-100%'
  }
};
function SideDrawer({
  anchor
}) {
  _s();

  const classes = useStyles();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_15__["useRouter"])(); // const isBreakpoint = useMediaQuery(
  //   (theme: Theme) => theme.breakpoints.up("md"),
  //   {
  //     defaultMatches: true,
  //   },
  // );

  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_16___default.a.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(_objectSpread(_objectSpread({}, state), {}, {
      [anchor]: open
    }));
  };

  const list = anchor => __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_13__["default"])(classes.list, {
      [classes.fullList]: anchor === 'top' || anchor === 'bottom'
    }),
    role: "presentation",
    onClick: toggleDrawer(anchor, false),
    onKeyDown: toggleDrawer(anchor, false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, _navlinks__WEBPACK_IMPORTED_MODULE_18__["NAV_LINKS"].map(({
    text,
    href,
    Icon
  }, index) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
    key: text,
    href: href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx(StyledNavLink, {
    isActive: href === router.pathname,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      color: 'inherit'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, Icon ? Icon : __jsx(_material_ui_icons_DragHandle__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 34
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__["default"], {
    primary: text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  })))))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    button: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, "Social")), _navlinks__WEBPACK_IMPORTED_MODULE_18__["SOCIAL_LINKS"].map(({
    text,
    Icon,
    href
  }, index) => __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_1__["StyledHtmlLink"], {
    href: href,
    title: text,
    target: "_blank",
    rel: "noopener noreferrer",
    role: "link",
    key: text + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      color: 'inherit'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, Icon ? Icon : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 32
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__["default"], {
    primary: text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  })))))); // const isOpen = state[anchor] || isBreakpoint;


  const isOpen = state[anchor];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_16___default.a.Fragment, {
    key: anchor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"] // edge="start"
  , {
    onClick: toggleDrawer(anchor, true),
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "navbar-drawer",
    anchor: anchor // variant={isBreakpoint ? "permanent" : undefined}
    ,
    open: isOpen // ModalProps={{
    //   disableScrollLock: isBreakpoint,
    //   style: {
    //     position: isBreakpoint ? "relative" : "fixed",
    //   },
    // }}
    ,
    PaperProps: {
      style: {
        width: 240,
        overflow: 'hidden'
      }
    },
    SlideProps: {
      timeout: {
        exit: 300,
        enter: 250
      }
    } // hideBackdrop={isBreakpoint}
    ,
    onClose: toggleDrawer(anchor, false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, list(anchor)));
}

_s(SideDrawer, "wof15IH9TJrNHFphFvi0/C3cIq0=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_15__["useRouter"]];
});

_c2 = SideDrawer;

var _c, _c2;

$RefreshReg$(_c, "StyledNavLink");
$RefreshReg$(_c2, "SideDrawer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1NpZGVEcmF3ZXIudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImxpc3QiLCJ3aWR0aCIsImZ1bGxMaXN0IiwibWVudUJ1dHRvbiIsIm1pbkhlaWdodCIsIm1pbldpZHRoIiwiekluZGV4IiwiU3R5bGVkTmF2TGluayIsInN0eWxlZCIsImEiLCJwcm9wcyIsImlzQWN0aXZlIiwiY29sb3JzIiwidGVydGlhcnkiLCJ2YXJpYW50cyIsIm9wZW4iLCJvcGFjaXR5IiwieCIsImNsb3NlZCIsImxpc3RJdGVtVmFyaWFudHMiLCJ5IiwiU2lkZURyYXdlciIsImFuY2hvciIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsInRvZ2dsZURyYXdlciIsImV2ZW50IiwidHlwZSIsImtleSIsImNsc3giLCJOQVZfTElOS1MiLCJtYXAiLCJ0ZXh0IiwiaHJlZiIsIkljb24iLCJpbmRleCIsInBhdGhuYW1lIiwiY29sb3IiLCJTT0NJQUxfTElOS1MiLCJpc09wZW4iLCJzdHlsZSIsIm92ZXJmbG93IiwidGltZW91dCIsImV4aXQiLCJlbnRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFFO0FBREgsR0FEK0I7QUFJckNDLFVBQVEsRUFBRTtBQUNSRCxTQUFLLEVBQUU7QUFE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O0FBRUUsVUFBTSxFQUFFbUIsTUFGVixDQUdFO0FBSEY7QUFJRSxRQUFJLEVBQUUwQixNQUpSLENBS0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkY7QUFXRSxjQUFVLEVBQUU7QUFDVkMsV0FBSyxFQUFFO0FBQUVoRCxhQUFLLEVBQUUsR0FBVDtBQUFjaUQsZ0JBQVEsRUFBRTtBQUF4QjtBQURHLEtBWGQ7QUFjRSxjQUFVLEVBQUU7QUFDVkMsYUFBTyxFQUFFO0FBQ1BDLFlBQUksRUFBRSxHQURDO0FBRVBDLGFBQUssRUFBRTtBQUZBO0FBREMsS0FkZCxDQW9CRTtBQXBCRjtBQXFCRSxXQUFPLEVBQUVuQixZQUFZLENBQUNaLE1BQUQsRUFBUyxLQUFULENBckJ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBdUJHdEIsSUFBSSxDQUFDc0IsTUFBRCxDQXZCUCxDQWJGLENBREY7QUF5Q0Q7O0dBOUh1QkQsVTtVQUNOeEIsUyxFQUVENEIsc0Q7OztNQUhPSixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzLjY4OGQyMDNkZDM5NjEyZDRmYTQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHlsZWRIdG1sTGluayB9IGZyb20gJ0Bjb21wb25lbnRzL3NoYXJlZCdcclxuaW1wb3J0IHsgQnV0dG9uLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInXHJcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJ1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0J1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nXHJcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uJ1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IERyYWdIYW5kbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EcmFnSGFuZGxlJ1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01haWwnXHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSdcclxuaW1wb3J0IHsgU0VDT05EQVJZX0NPTE9SIH0gZnJvbSAnQHJvb3QvdGhlbWUvZ2V0VGhlbWUnXHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXHJcbmltcG9ydCBOYXZMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgTkFWX0xJTktTLCBTT0NJQUxfTElOS1MgfSBmcm9tICcuL25hdmxpbmtzJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHsgfVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGxpc3Q6IHtcclxuICAgIHdpZHRoOiAyNTAsXHJcbiAgfSxcclxuICBmdWxsTGlzdDoge1xyXG4gICAgd2lkdGg6ICdhdXRvJyxcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIC8vIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDAuNSksXHJcbiAgICAvLyBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDAuNSksXHJcbiAgICBtaW5IZWlnaHQ6IDUwLFxyXG4gICAgbWluV2lkdGg6IDUwLFxyXG4gICAgekluZGV4OiAxMDAxLFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZE5hdkxpbmsgPSBzdHlsZWQuYTx7IGlzQWN0aXZlPzogYm9vbGVhbiB9PmBcclxuICBjb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuaXNBY3RpdmUgPyBwcm9wcy50aGVtZS5jb2xvcnMudGVydGlhcnkgOiAnaW5oZXJpdCcpfTtcclxuICBmb250LXdlaWdodDogJHtwcm9wcyA9PiAocHJvcHMuaXNBY3RpdmUgPyAnYm9sZCcgOiAnbm9ybWFsJyl9O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGVydGlhcnl9O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IHR5cGUgQW5jaG9yID0gJ3RvcCcgfCAnbGVmdCcgfCAnYm90dG9tJyB8ICdyaWdodCdcclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBhbmNob3I6IEFuY2hvclxyXG59XHJcblxyXG5jb25zdCB2YXJpYW50cyA9IHtcclxuICBvcGVuOiB7IG9wYWNpdHk6IDEsIHg6IDAgfSxcclxuICBjbG9zZWQ6IHsgb3BhY2l0eTogMCwgeDogJy0xMDAlJyB9LFxyXG59XHJcblxyXG5jb25zdCBsaXN0SXRlbVZhcmlhbnRzID0ge1xyXG4gIG9wZW46IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB5OiAwLFxyXG4gIH0sXHJcbiAgY2xvc2VkOiB7IG9wYWNpdHk6IDAsIHk6ICctMTAwJScgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZURyYXdlcih7IGFuY2hvciB9OiBQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAvLyBjb25zdCBpc0JyZWFrcG9pbnQgPSB1c2VNZWRpYVF1ZXJ5KFxyXG4gIC8vICAgKHRoZW1lOiBUaGVtZSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKSxcclxuICAvLyAgIHtcclxuICAvLyAgICAgZGVmYXVsdE1hdGNoZXM6IHRydWUsXHJcbiAgLy8gICB9LFxyXG4gIC8vICk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICB0b3A6IGZhbHNlLFxyXG4gICAgbGVmdDogZmFsc2UsXHJcbiAgICBib3R0b206IGZhbHNlLFxyXG4gICAgcmlnaHQ6IGZhbHNlLFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9IChhbmNob3I6IEFuY2hvciwgb3BlbjogYm9vbGVhbikgPT4gKFxyXG4gICAgZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQgfCBSZWFjdC5Nb3VzZUV2ZW50XHJcbiAgKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJyAmJlxyXG4gICAgICAoKGV2ZW50IGFzIFJlYWN0LktleWJvYXJkRXZlbnQpLmtleSA9PT0gJ1RhYicgfHxcclxuICAgICAgICAoZXZlbnQgYXMgUmVhY3QuS2V5Ym9hcmRFdmVudCkua2V5ID09PSAnU2hpZnQnKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFthbmNob3JdOiBvcGVuIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBsaXN0ID0gKGFuY2hvcjogQW5jaG9yKSA9PiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmxpc3QsIHtcclxuICAgICAgICBbY2xhc3Nlcy5mdWxsTGlzdF06IGFuY2hvciA9PT0gJ3RvcCcgfHwgYW5jaG9yID09PSAnYm90dG9tJyxcclxuICAgICAgfSl9XHJcbiAgICAgIHJvbGU9J3ByZXNlbnRhdGlvbidcclxuICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cclxuICAgID5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge05BVl9MSU5LUy5tYXAoKHsgdGV4dCwgaHJlZiwgSWNvbiB9LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPE5hdkxpbmsga2V5PXt0ZXh0fSBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgPFN0eWxlZE5hdkxpbmsgaXNBY3RpdmU9e2hyZWYgPT09IHJvdXRlci5wYXRobmFtZX0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24gc3R5bGU9e3sgY29sb3I6ICdpbmhlcml0JyB9fT5cclxuICAgICAgICAgICAgICAgICAge0ljb24gPyBJY29uIDogPERyYWdIYW5kbGVJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9TdHlsZWROYXZMaW5rPlxyXG4gICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPXtmYWxzZX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNic+U29jaWFsPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAge1NPQ0lBTF9MSU5LUy5tYXAoKHsgdGV4dCwgSWNvbiwgaHJlZiB9LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPFN0eWxlZEh0bWxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgICAgIHRpdGxlPXt0ZXh0fVxyXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgICByb2xlPSdsaW5rJ1xyXG4gICAgICAgICAgICBrZXk9e3RleHQgKyBpbmRleH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uIHN0eWxlPXt7IGNvbG9yOiAnaW5oZXJpdCcgfX0+XHJcbiAgICAgICAgICAgICAgICB7SWNvbiA/IEljb24gOiA8TWFpbEljb24gLz59XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9TdHlsZWRIdG1sTGluaz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG5cclxuICAvLyBjb25zdCBpc09wZW4gPSBzdGF0ZVthbmNob3JdIHx8IGlzQnJlYWtwb2ludDtcclxuICBjb25zdCBpc09wZW4gPSBzdGF0ZVthbmNob3JdXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXthbmNob3J9PlxyXG4gICAgICB7LyogPEhpZGRlbiBtZFVwIGluaXRpYWxXaWR0aD1cInNtXCI+ICovfVxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgLy8gZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCB0cnVlKX1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn1cclxuICAgICAgICBjb2xvcj0naW5oZXJpdCdcclxuICAgICAgICBhcmlhLWxhYmVsPSdtZW51J1xyXG4gICAgICA+XHJcbiAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICB7LyogPC9IaWRkZW4+ICovfVxyXG5cclxuICAgICAgPERyYXdlclxyXG4gICAgICAgIGlkPSduYXZiYXItZHJhd2VyJ1xyXG4gICAgICAgIGFuY2hvcj17YW5jaG9yfVxyXG4gICAgICAgIC8vIHZhcmlhbnQ9e2lzQnJlYWtwb2ludCA/IFwicGVybWFuZW50XCIgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgb3Blbj17aXNPcGVufVxyXG4gICAgICAgIC8vIE1vZGFsUHJvcHM9e3tcclxuICAgICAgICAvLyAgIGRpc2FibGVTY3JvbGxMb2NrOiBpc0JyZWFrcG9pbnQsXHJcbiAgICAgICAgLy8gICBzdHlsZToge1xyXG4gICAgICAgIC8vICAgICBwb3NpdGlvbjogaXNCcmVha3BvaW50ID8gXCJyZWxhdGl2ZVwiIDogXCJmaXhlZFwiLFxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyB9fVxyXG4gICAgICAgIFBhcGVyUHJvcHM9e3tcclxuICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiAyNDAsIG92ZXJmbG93OiAnaGlkZGVuJyB9LFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgU2xpZGVQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDoge1xyXG4gICAgICAgICAgICBleGl0OiAzMDAsXHJcbiAgICAgICAgICAgIGVudGVyOiAyNTAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgLy8gaGlkZUJhY2tkcm9wPXtpc0JyZWFrcG9pbnR9XHJcbiAgICAgICAgb25DbG9zZT17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICA+XHJcbiAgICAgICAge2xpc3QoYW5jaG9yKX1cclxuICAgICAgPC9EcmF3ZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9