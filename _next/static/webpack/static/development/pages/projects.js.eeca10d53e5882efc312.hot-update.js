webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./src/components/Layout/SideDrawer.tsx":
/*!**********************************************!*\
  !*** ./src/components/Layout/SideDrawer.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideDrawer; });
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
/* harmony import */ var _root_theme_getTheme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @root/theme/getTheme */ "./src/theme/getTheme.ts");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _navlinks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./navlinks */ "./src/components/Layout/navlinks.tsx");


var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\Layout\\SideDrawer.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  menuButton: {
    // marginRight: theme.spacing(0.5),
    // marginLeft: theme.spacing(0.5),
    minHeight: 50,
    minWidth: 50,
    zIndex: 1001
  }
}));
const StyledNavLink = styled_components__WEBPACK_IMPORTED_MODULE_18__["default"].a.withConfig({
  displayName: "SideDrawer__StyledNavLink",
  componentId: "evp6zq-0"
})(["color:", ";font-weight:", ";text-decoration:none;&:hover{color:", "}"], props => props.isActive ? _root_theme_getTheme__WEBPACK_IMPORTED_MODULE_13__["SECONDARY_COLOR"] : "inherit", props => props.isActive ? "bold" : "normal", _root_theme_getTheme__WEBPACK_IMPORTED_MODULE_13__["SECONDARY_COLOR"]);
_c = StyledNavLink;
const variants = {
  open: {
    opacity: 1,
    x: 0
  },
  closed: {
    opacity: 0,
    x: "-100%"
  }
};
const listItemVariants = {
  open: {
    opacity: 1,
    y: 0
  },
  closed: {
    opacity: 0,
    y: "-100%"
  }
};
function SideDrawer({
  anchor
}) {
  _s();

  const classes = useStyles();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_16__["useRouter"])(); // const isBreakpoint = useMediaQuery(
  //   (theme: Theme) => theme.breakpoints.up("md"),
  //   {
  //     defaultMatches: true,
  //   },
  // );

  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_17___default.a.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState(_objectSpread(_objectSpread({}, state), {}, {
      [anchor]: open
    }));
  };

  const list = anchor => __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_14__["default"])(classes.list, {
      [classes.fullList]: anchor === "top" || anchor === "bottom"
    }),
    role: "presentation",
    onClick: toggleDrawer(anchor, false),
    onKeyDown: toggleDrawer(anchor, false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, _navlinks__WEBPACK_IMPORTED_MODULE_19__["NAV_LINKS"].map(({
    text,
    href,
    Icon
  }, index) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    key: text,
    href: href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx(StyledNavLink, {
    isActive: href === router.pathname,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      color: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, Icon ? Icon : __jsx(_material_ui_icons_DragHandle__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 34
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__["default"], {
    primary: text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  })))))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    button: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, "Social")), _navlinks__WEBPACK_IMPORTED_MODULE_19__["SOCIAL_LINKS"].map(({
    text,
    Icon,
    href
  }, index) => __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_1__["StyledHtmlLink"], {
    href: href,
    title: text,
    target: "_blank",
    rel: "noopener noreferrer",
    role: "link",
    key: text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      color: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, Icon ? Icon : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 32
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__["default"], {
    primary: text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  })))))); // const isOpen = state[anchor] || isBreakpoint;


  const isOpen = state[anchor];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_17___default.a.Fragment, {
    key: anchor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
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
      lineNumber: 164,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
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
        width: 240
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
      lineNumber: 175,
      columnNumber: 7
    }
  }, list(anchor)));
}

_s(SideDrawer, "wof15IH9TJrNHFphFvi0/C3cIq0=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_16__["useRouter"]];
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

/***/ }),

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

/***/ }),

/***/ "./src/components/partials/SiteFooter.tsx":
/*!************************************************!*\
  !*** ./src/components/partials/SiteFooter.tsx ***!
  \************************************************/
/*! exports provided: FooterNavLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterNavLink", function() { return FooterNavLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/components/shared/index.ts");
/* harmony import */ var _SocialList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SocialList */ "./src/components/partials/SocialList.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _root_theme_getTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @root/theme/getTheme */ "./src/theme/getTheme.ts");
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\partials\\SiteFooter.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import { NavLink } from "react-router-dom";







const FooterNavLink = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].a.withConfig({
  displayName: "SiteFooter__FooterNavLink",
  componentId: "sc-1livdpo-0"
})(["color:", ";font-weight:", ";text-decoration:none;cursor:pointer;&.item{color:", ";font-weight:500;}&:hover{color:", ";font-weight:500;}"], props => props.isActive ? _root_theme_getTheme__WEBPACK_IMPORTED_MODULE_7__["SECONDARY_COLOR"] : "inherit", props => props.isActive ? "bold" : "normal", _root_theme_getTheme__WEBPACK_IMPORTED_MODULE_7__["SECONDARY_COLOR"], _root_theme_getTheme__WEBPACK_IMPORTED_MODULE_7__["SECONDARY_COLOR"]);
_c = FooterNavLink;
const Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"]).withConfig({
  displayName: "SiteFooter__Title",
  componentId: "sc-1livdpo-1"
})([""]);
_c2 = Title;
const NonActiveLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(_shared__WEBPACK_IMPORTED_MODULE_3__["StyledHtmlLink"]).withConfig({
  displayName: "SiteFooter__NonActiveLink",
  componentId: "sc-1livdpo-2"
})(["color:'inherit';&:hover{color:", ";font-weight:500;}"], _root_theme_getTheme__WEBPACK_IMPORTED_MODULE_7__["SECONDARY_COLOR"]);
_c3 = NonActiveLink;

const SiteFooter = () => {
  _s();

  const {
    pathname
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  return __jsx(_shared__WEBPACK_IMPORTED_MODULE_3__["PrimaryBackgroundSection"], {
    style: {
      padding: "1em 0em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "space-around",
    alignContent: "center",
    alignItems: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    justify: "space-around",
    alignContent: "center",
    alignItems: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: "auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    id: "navbar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx(Title, {
    variant: "h6",
    component: "h1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }, "Pages")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 19
    }
  }, __jsx(FooterNavLink, {
    isActive: pathname === "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, "Home"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }, __jsx(FooterNavLink, {
    isActive: pathname === "/projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, "Showcase Projects"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 19
    }
  }, __jsx(FooterNavLink, {
    isActive: pathname === "/contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, "Contact"))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: "auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx(Title, {
    variant: "h6",
    component: "h2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }, "Showcase Projects")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx(NonActiveLink, {
    href: "https://vapemusic.club",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Vape Music",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, "Vape Music")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx(NonActiveLink, {
    href: "https://wilfredlopez.net/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }, "RetalMeNow")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, __jsx(NonActiveLink, {
    href: "https://wilfredexpensemanager.netlify.com",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 19
    }
  }, "Expenses Manager")))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: "auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, __jsx(Title, {
    variant: "h6",
    component: "h2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 19
    }
  }, "Social")), __jsx(_SocialList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    xs: 12,
    sm: 4,
    justify: "center",
    alignContent: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 19
    }
  }, "All Rights Reseved")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 19
    }
  }, "2020 \xA9 Wilfred Lopez"))))))));
};

_s(SiteFooter, "QpP2vYJstxsDz0K+Qwttl8PPVoY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c4 = SiteFooter;
/* harmony default export */ __webpack_exports__["default"] = (SiteFooter);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "FooterNavLink");
$RefreshReg$(_c2, "Title");
$RefreshReg$(_c3, "NonActiveLink");
$RefreshReg$(_c4, "SiteFooter");

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

/***/ }),

/***/ "./src/components/projects/Project.tsx":
/*!*********************************************!*\
  !*** ./src/components/projects/Project.tsx ***!
  \*********************************************/
/*! exports provided: TitleLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleLink", function() { return TitleLink; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/shared */ "./src/components/shared/index.ts");
/* harmony import */ var _components_shared_SliderCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/shared/SliderCard */ "./src/components/shared/SliderCard.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _root_theme_Custom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @root/theme/Custom */ "./src/theme/Custom.tsx");
/* harmony import */ var _root_theme_useSharedStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @root/theme/useSharedStyles */ "./src/theme/useSharedStyles.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\projects\\Project.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;








const TitleLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(_components_shared__WEBPACK_IMPORTED_MODULE_1__["StyledHtmlLink"]).withConfig({
  displayName: "Project__TitleLink",
  componentId: "d3i61s-0"
})(["font-size:1.2rem;color:", ";font-weight:500;"], props => props.theme.colors.secondary);
_c = TitleLink;

const Project = (_ref) => {
  _s();

  let {
    showSliderControls = true,
    url,
    name,
    title,
    loop
  } = _ref,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["showSliderControls", "url", "name", "title", "loop"]);

  const classes = Object(_root_theme_useSharedStyles__WEBPACK_IMPORTED_MODULE_5__["default"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_1__["DividerElement"], {
    className: "header project-tile",
    style: {
      textTransform: "uppercase",
      marginTop: "1rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(TitleLink, {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    title: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, name)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    maxWidth: "sm",
    style: {
      alignItems: "center",
      justifyContent: "center",
      margin: "auto",
      display: "flex",
      flexDirection: "column"
    },
    classes: {
      root: classes.minPaddingX
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body1",
    component: "div",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, props.description, props.images.length > 1 && __jsx(_components_shared_SliderCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    showControls: showSliderControls,
    imageData: props.images,
    height: 750,
    loop: loop,
    showTitle: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }))), props.images.length === 1 && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_1__["StyledHtmlLink"], {
    className: classes.minPaddingX.concat(" " + classes.flexCenter),
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      marginBottom: "1rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx(_root_theme_Custom__WEBPACK_IMPORTED_MODULE_4__["ImageButton"], {
    title: title,
    url: props.images[0].imgPath,
    width: 520,
    minHeight: 500,
    buttomProps: {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }))), __jsx("div", {
    style: {
      marginBottom: "1rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    alignItems: "center",
    justify: "center",
    style: {
      paddingBottom: "1rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx(_root_theme_Custom__WEBPACK_IMPORTED_MODULE_4__["BrandButton"], {
    color: props.classKey,
    size: "medium",
    variant: "contained",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_1__["StyledHtmlLink"], {
    href: url,
    className: "text-white",
    title: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, name.toUpperCase())))));
};

_s(Project, "J7JZJHGYvYRbvpJBSqBDmw6YWoM=", false, function () {
  return [_root_theme_useSharedStyles__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c2 = Project;
/* harmony default export */ __webpack_exports__["default"] = (Project);

var _c, _c2;

$RefreshReg$(_c, "TitleLink");
$RefreshReg$(_c2, "Project");

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

/***/ }),

/***/ "./src/components/shared/StyledLink.ts":
/*!*********************************************!*\
  !*** ./src/components/shared/StyledLink.ts ***!
  \*********************************************/
/*! exports provided: NonStyledAnchor, StyledLink, StyledHtmlLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonStyledAnchor", function() { return NonStyledAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHtmlLink", function() { return StyledHtmlLink; });
/* harmony import */ var _root_theme_getTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @root/theme/getTheme */ "./src/theme/getTheme.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


const NonStyledAnchor = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "StyledLink__NonStyledAnchor",
  componentId: "eum50p-0"
})(["color:inherit;text-decoration:none;&:hover{color:'inherit';text-decoration:none;}"]);
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "StyledLink",
  componentId: "eum50p-1"
})(["color:", ";text-decoration:none;&:hover{color:", "}"], props => props.color ? props.color : "inherit", _root_theme_getTheme__WEBPACK_IMPORTED_MODULE_0__["SECONDARY_COLOR"]);
const StyledHtmlLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "StyledLink__StyledHtmlLink",
  componentId: "eum50p-2"
})(["color:", ";text-decoration:none;"], props => props.color ? props.color : "inherit");
/* harmony default export */ __webpack_exports__["default"] = (StyledLink);

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

/***/ }),

/***/ "./src/styles/BrandButton.tsx":
false,

/***/ "./src/styles/Custom.tsx":
false,

/***/ "./src/styles/ImageButton.tsx":
false,

/***/ "./src/styles/WButton.tsx":
false,

/***/ "./src/styles/getTheme.ts":
false,

/***/ "./src/styles/useSharedStyles.ts":
false,

/***/ "./src/theme/BrandButton.tsx":
/*!***********************************!*\
  !*** ./src/theme/BrandButton.tsx ***!
  \***********************************/
/*! exports provided: BrandButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandButton", function() { return BrandButton; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _wilfredlopez_react_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wilfredlopez/react-utils */ "./node_modules/@wilfredlopez/react-utils/dist/index.es.js");



var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\theme\\BrandButton.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






const color = theme => {
  return {
    default: "#fff",
    blue: "#fff",
    primary: theme.palette.primary.contrastText,
    secondary: theme.palette.secondary.contrastText,
    success: theme.palette.success.contrastText,
    error: theme.palette.error.contrastText,
    warning: "#fff",
    tertiary: theme.palette.tertiary.contrastText,
    text: theme.palette.getContrastText(theme.palette.text.primary),
    vape: "#fff",
    expense: "#fff",
    shop: "#fff"
  };
};

const colorHover = theme => {
  return {
    default: "rgb(20, 20, 20)",
    blue: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    primary: theme.palette.primary.dark,
    secondary: theme.palette.secondary.dark,
    success: theme.palette.success.dark,
    error: theme.palette.error.dark,
    warning: theme.palette.warning.dark,
    tertiary: theme.palette.tertiary.dark,
    text: "inherit",
    vape: "#ff1f00",
    expense: "#2e9e7a",
    shop: "rgb(20, 20, 20)"
  };
};

const bgs = theme => {
  return {
    default: "#000",
    blue: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    success: theme.palette.success.main,
    error: theme.palette.error.main,
    warning: theme.palette.warning.main,
    tertiary: theme.palette.tertiary.main,
    text: "inherit",
    expense: "#2e9e7a",
    shop: "rgb(20, 20, 20)",
    vape: "#ff1f00"
  };
};

const bgsHover = theme => {
  return {
    default: "rgb(20, 20, 20)",
    blue: "linear-gradient(45deg, rgb(0 137 247) 30%, rgb(10 138 168) 90%)",
    primary: theme.palette.primary.dark,
    secondary: theme.palette.secondary.dark,
    success: theme.palette.success.dark,
    error: theme.palette.error.dark,
    warning: theme.palette.warning.dark,
    tertiary: theme.palette.tertiary.dark,
    text: theme.palette.text.primary,
    vape: "#e01b00",
    expense: "#288b6b",
    shop: "#000"
  };
};

function getColorFor(matchColor, theme) {
  return {
    color: color(theme)[matchColor],
    background: bgs(theme)[matchColor],
    ["&.MuiButton-outlined"]: {
      color: bgs(theme)[matchColor],
      border: `1px solid ` + bgs(theme)[matchColor],
      background: "transparent"
    },
    ["&.MuiButton-text"]: {
      color: bgs(theme)[matchColor],
      background: "transparent"
    },
    ["&:hover"]: {
      background: bgsHover(theme)[matchColor],
      ["&.MuiButton-outlined"]: {
        border: `1px solid ` + bgsHover(theme)[matchColor]
      },
      ["&.MuiButton-outlined,&.MuiButton-text"]: {
        color: colorHover(theme)[matchColor],
        background: "transparent"
      }
    }
  };
}

const useButtonStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
  vape: getColorFor("vape", theme),
  default: getColorFor("default", theme),
  blue: getColorFor("blue", theme),
  primary: getColorFor("primary", theme),
  secondary: getColorFor("secondary", theme),
  success: getColorFor("success", theme),
  error: getColorFor("error", theme),
  warning: getColorFor("warning", theme),
  tertiary: getColorFor("tertiary", theme),
  text: {
    color: color(theme).text,
    background: bgs(theme).text,
    ["&:hover"]: {
      color: colorHover(theme).text,
      background: bgsHover(theme).text
    }
  },
  expense: getColorFor("expense", theme),
  shop: getColorFor("shop", theme)
}));

function switchColorToRegular(color) {
  switch (color) {
    case "blue":
    case "error":
    case "expense":
    case "shop":
    case "success":
    case "tertiary":
    case "text":
    case "vape":
    case "warning":
    case "default":
      return undefined;

    case "inherit":
    case "primary":
    case "secondary":
    case undefined:
      return color;

    default:
      Object(_wilfredlopez_react_utils__WEBPACK_IMPORTED_MODULE_6__["assertNever"])(color);
      return undefined;
  }
}

function switchColorToCustom(color) {
  switch (color) {
    case "inherit":
    case "primary":
    case "secondary":
    case undefined:
      return undefined;

    case "blue":
    case "error":
    case "expense":
    case "shop":
    case "success":
    case "tertiary":
    case "text":
    case "vape":
    case "warning":
    case "default":
      return color;

    default:
      Object(_wilfredlopez_react_utils__WEBPACK_IMPORTED_MODULE_6__["assertNever"])(color);
      return undefined;
  }
}

const BrandButton = (_ref) => {
  _s();

  let {
    children,
    variant = "contained",
    className,
    color,
    size
  } = _ref,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children", "variant", "className", "color", "size"]);

  const defaultColor = switchColorToRegular(color);
  const customColor = switchColorToCustom(color);
  const classes = useButtonStyles();
  return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: defaultColor,
    variant: variant,
    size: size === "default" ? undefined : size
  }, other, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])([{
      [classes[customColor || "default"]]: customColor
    }], className),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 10
    }
  }), children);
};

_s(BrandButton, "3dpyZMJTjwpXVPOv55POxIibyys=", false, function () {
  return [useButtonStyles];
});

_c = BrandButton;

var _c;

$RefreshReg$(_c, "BrandButton");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/theme/Custom.tsx":
/*!******************************!*\
  !*** ./src/theme/Custom.tsx ***!
  \******************************/
/*! exports provided: WButton, WIconButton, ImageButton, BrandButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _WButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WButton */ "./src/theme/WButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WButton", function() { return _WButton__WEBPACK_IMPORTED_MODULE_0__["WButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WIconButton", function() { return _WButton__WEBPACK_IMPORTED_MODULE_0__["WIconButton"]; });

/* harmony import */ var _ImageButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageButton */ "./src/theme/ImageButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageButton", function() { return _ImageButton__WEBPACK_IMPORTED_MODULE_1__["ImageButton"]; });

/* harmony import */ var _BrandButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BrandButton */ "./src/theme/BrandButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrandButton", function() { return _BrandButton__WEBPACK_IMPORTED_MODULE_2__["BrandButton"]; });





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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/theme/ImageButton.tsx":
/*!***********************************!*\
  !*** ./src/theme/ImageButton.tsx ***!
  \***********************************/
/*! exports provided: ImageButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageButton", function() { return ImageButton; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");


var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\theme\\ImageButton.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const BORDER_RADIOUS = 2;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
    borderRadius: BORDER_RADIOUS
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important",
      // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        color: theme.palette.secondary.main,
        background: "rgb(255 255 255 / 93%)",
        border: "3px solid currentColor",
        transition: theme.transitions.create("opacity") // fontWeight: "bold",
        // border: "4px solid rgba(40, 40, 40,84%)",
        // background: "rgba(40, 40, 40,84%)",
        // borderRadius: theme.shape.borderRadius,

      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: BORDER_RADIOUS,
    backgroundSize: "cover",
    //   backgroundPosition: "center 40%",
    backgroundPosition: "center 0"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    borderRadius: theme.shape.borderRadius,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
}));
function ImageButton({
  title,
  width,
  url,
  minHeight = 250,
  buttomProps = {}
}) {
  _s();

  const classes = useStyles();
  return __jsx(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    focusRipple: true,
    key: title,
    className: classes.image,
    focusVisibleClassName: classes.focusVisible,
    style: {
      width: width,
      minHeight: minHeight
    }
  }, buttomProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 10
    }
  }), __jsx("span", {
    className: classes.imageSrc,
    style: {
      backgroundImage: `url(${url})`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }), __jsx("span", {
    className: classes.imageBackdrop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 5
    }
  }), __jsx("span", {
    className: classes.imageButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: "span",
    variant: "subtitle1",
    color: "inherit",
    className: classes.imageTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, title, __jsx("span", {
    className: classes.imageMarked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }))));
}

_s(ImageButton, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = ImageButton;

var _c;

$RefreshReg$(_c, "ImageButton");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/theme/WButton.tsx":
/*!*******************************!*\
  !*** ./src/theme/WButton.tsx ***!
  \*******************************/
/*! exports provided: WButton, WIconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WButton", function() { return WButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIconButton", function() { return WIconButton; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function getOverridesColor(colorKey, variant, theme) {
  return {
    color: theme.palette[colorKey][variant === "contained" ? "contrastText" : "main"]
  };
}

function getOverridesBackgroundContained(colorKey, theme) {
  return {
    backgroundColor: theme.palette[colorKey].main,
    "&:hover": {
      backgroundColor: theme.palette[colorKey].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.palette[colorKey].main
      }
    }
  };
}

const WButton = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(theme => ({
  root: props => props.variant === "contained" && props.color && props.color !== "inherit" && props.color !== "default" ? _objectSpread(_objectSpread({}, getOverridesColor(props.color, props.variant, theme)), getOverridesBackgroundContained(props.color, theme)) : (props.variant === "outlined" || props.variant === "text") && props.color && props.color !== "inherit" && props.color !== "default" ? _objectSpread({}, getOverridesColor(props.color, props.variant, theme)) : {}
}))(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"]);
const WIconButton = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(theme => ({
  root: props => props.color && props.color !== "inherit" && props.color !== "default" ? {
    color: theme.palette[props.color].main,
    ["&:disabled"]: {
      color: theme.palette.action.disabled
    },
    ["&:hover"]: {
      color: theme.palette[props.color].dark,
      backgroundColor: "transparent",
      cursor: "pointer"
    }
  } : {}
}))(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"]);


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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/theme/getTheme.ts":
/*!*******************************!*\
  !*** ./src/theme/getTheme.ts ***!
  \*******************************/
/*! exports provided: SECONDARY_COLOR, SECONDARY_COLOR_CONTRAST, PRIMARY_COLOR, TOOLBAR_MIN_HEIGHT, PRIMARY_COLOR_CONTRAST, DARK_COLOR, LIGHT_COLOR, TERTIARY_COLOR, TERTIARY_COLOR_CONTRAST, default, styledComponentsTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECONDARY_COLOR", function() { return SECONDARY_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECONDARY_COLOR_CONTRAST", function() { return SECONDARY_COLOR_CONTRAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMARY_COLOR", function() { return PRIMARY_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLBAR_MIN_HEIGHT", function() { return TOOLBAR_MIN_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMARY_COLOR_CONTRAST", function() { return PRIMARY_COLOR_CONTRAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_COLOR", function() { return DARK_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_COLOR", function() { return LIGHT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERTIARY_COLOR", function() { return TERTIARY_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERTIARY_COLOR_CONTRAST", function() { return TERTIARY_COLOR_CONTRAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styledComponentsTheme", function() { return styledComponentsTheme; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core_colors_blueGrey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors/blueGrey */ "./node_modules/@material-ui/core/colors/blueGrey.js");
/* harmony import */ var _material_ui_core_colors_blueGrey__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blueGrey__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/colors/teal */ "./node_modules/@material-ui/core/colors/teal.js");
/* harmony import */ var _material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





// export const SECONDARY_COLOR = secondary[500];
const SECONDARY_COLOR = _material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_3___default.a[400];
const SECONDARY_COLOR_CONTRAST = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]["white"];
let PRIMARY_COLOR = _material_ui_core_colors_blueGrey__WEBPACK_IMPORTED_MODULE_2___default.a[900];
const TOOLBAR_MIN_HEIGHT = 15;
const PRIMARY_COLOR_CONTRAST = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]["white"];
const DARK_COLOR = "#040c14";
const LIGHT_COLOR = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]["white"];
const TERTIARY_COLOR = "#c47070";
const TERTIARY_COLOR_CONTRAST = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]["white"];
const BORDER_RADIOUS = 4; //Cool Green /#38b584

function getTheme(prefersDarkMode = false) {
  // PRIMARY_COLOR = prefersDarkMode ? "#319ddf" : primary[900];
  PRIMARY_COLOR = prefersDarkMode ? "#040c14" : _material_ui_core_colors_blueGrey__WEBPACK_IMPORTED_MODULE_2___default.a[900];
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])({
    status: {
      danger: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"][500]
    },
    palette: {
      type: prefersDarkMode ? "dark" : "light",
      primary: {
        main: PRIMARY_COLOR,
        contrastText: PRIMARY_COLOR_CONTRAST
      },
      secondary: {
        main: SECONDARY_COLOR,
        contrastText: SECONDARY_COLOR_CONTRAST
      },
      tertiary: {
        main: TERTIARY_COLOR,
        dark: "#914345",
        light: "#f9a09e",
        contrastText: TERTIARY_COLOR_CONTRAST
      },
      success: _objectSpread(_objectSpread({}, _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["green"]), {}, {
        main: "#689f38"
      }),
      background: {
        // default: "#303030",
        default: prefersDarkMode ? "#272525" : "#fff"
      }
    },
    shape: {
      borderRadius: BORDER_RADIOUS
    },
    spacing: 16,
    props: {
      MuiPaper: {
        elevation: 3
      },
      MuiTextField: {
        InputLabelProps: {
          shrink: true
        }
      },
      MuiButton: {
        disableRipple: true
      },
      MuiCheckbox: {
        disableRipple: true
      }
    },
    overrides: {
      MuiPaper: {
        root: {
          color: prefersDarkMode ? "#d2d2d2" : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"]["white"],
          backgroundColor: prefersDarkMode ? "#2c2c2c" : "#303030"
        }
      },
      MuiMobileStepper: {
        root: {
          backgroundColor: "transparent"
        },
        positionBottom: {
          position: "absolute"
        }
      },
      MuiAppBar: {
        positionFixed: {
          zIndex: 1100
        }
      },
      MuiToolbar: {
        gutters: {
          minHeight: TOOLBAR_MIN_HEIGHT,
          "@media (min-width: 600px)": {
            minHeight: TOOLBAR_MIN_HEIGHT
          }
        },
        regular: {
          minHeight: TOOLBAR_MIN_HEIGHT,
          "@media (min-width: 600px)": {
            minHeight: TOOLBAR_MIN_HEIGHT
          }
        },
        root: {
          minHeight: TOOLBAR_MIN_HEIGHT,
          "@media (min-width: 600px)": {
            minHeight: TOOLBAR_MIN_HEIGHT
          }
        }
      },
      MuiFilledInput: {
        root: {
          backgroundColor: "transparent"
        }
      },
      MuiInputLabel: {
        root: {
          backgroundColor: "transparent"
        }
      },
      MuiButton: {
        root: {
          textTransform: "none"
        }
      }
    }
  });
  theme.palette.tertiary = theme.palette.augmentColor({
    main: "#c47070",
    dark: "#914345",
    light: "#f9a09e",
    contrastText: PRIMARY_COLOR_CONTRAST
  });
  return theme;
}
const styledComponentsTheme = {
  borderRadius: "5px",
  colors: {
    primary: PRIMARY_COLOR,
    primaryContrast: PRIMARY_COLOR_CONTRAST,
    secondary: SECONDARY_COLOR,
    secondaryContrast: SECONDARY_COLOR_CONTRAST,
    dark: DARK_COLOR,
    light: LIGHT_COLOR
  }
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/theme/useSharedStyles.ts":
/*!**************************************!*\
  !*** ./src/theme/useSharedStyles.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(_c = theme => Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
  root: {
    backgroundColor: theme.palette.common.black
  },
  noPaddingX: {
    paddingLeft: 0,
    paddingRight: 0
  },
  minPaddingX: {
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5)
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  constrainedSection: {
    marginLeft: "auto",
    [theme.breakpoints.only("md")]: {
      // position: "absolute",
      // right: 0,
      minWidth: theme.breakpoints.values.md + 20,
      color: "yellow",
      maxWidth: theme.breakpoints.values.md - 240
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.breakpoints.values.lg - 240,
      minWidth: theme.breakpoints.values.lg + 20,
      color: "blue"
    }
  }
})));

var _c, _c2;

$RefreshReg$(_c, "%default%$makeStyles");
$RefreshReg$(_c2, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU2lkZURyYXdlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbnBtLXBhY2thZ2UvTnBtUGFja2FnZXMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhcnRpYWxzL1NpdGVGb290ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9TdHlsZWRMaW5rLnRzIiwid2VicGFjazovLy8uL3NyYy90aGVtZS9CcmFuZEJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lL0N1c3RvbS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lL0ltYWdlQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvV0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lL2dldFRoZW1lLnRzIiwid2VicGFjazovLy8uL3NyYy90aGVtZS91c2VTaGFyZWRTdHlsZXMudHMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibGlzdCIsIndpZHRoIiwiZnVsbExpc3QiLCJtZW51QnV0dG9uIiwibWluSGVpZ2h0IiwibWluV2lkdGgiLCJ6SW5kZXgiLCJTdHlsZWROYXZMaW5rIiwic3R5bGVkIiwiYSIsInByb3BzIiwiaXNBY3RpdmUiLCJTRUNPTkRBUllfQ09MT1IiLCJ2YXJpYW50cyIsIm9wZW4iLCJvcGFjaXR5IiwieCIsImNsb3NlZCIsImxpc3RJdGVtVmFyaWFudHMiLCJ5IiwiU2lkZURyYXdlciIsImFuY2hvciIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsInRvZ2dsZURyYXdlciIsImV2ZW50IiwidHlwZSIsImtleSIsImNsc3giLCJOQVZfTElOS1MiLCJtYXAiLCJ0ZXh0IiwiaHJlZiIsIkljb24iLCJpbmRleCIsInBhdGhuYW1lIiwiY29sb3IiLCJTT0NJQUxfTElOS1MiLCJpc09wZW4iLCJzdHlsZSIsInRpbWVvdXQiLCJleGl0IiwiZW50ZXIiLCJzcHJpbmciLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwidXNlTnBtU3R5bGVzIiwid3JhcHBlciIsImJhY2tncm91bmQiLCJjYXJkUm9vdCIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiTnBtUGFja2FnZXMiLCJwb3NpdGlvbnMiLCJ1c2VSZWYiLCJjdXJyZW50IiwiaXRlbXMiLCJzZXRJdGVtcyIsIk5QTV9QQUNLQUdFUyIsInNldFBvc2l0aW9uIiwiaSIsIm9mZnNldCIsIm1vdmVJdGVtIiwiZHJhZ09mZnNldCIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibW92ZSIsInBhIiwibmFtZSIsImxlbmd0aCIsIm9uVG9wIiwiZmxhdCIsInRyYW5zaXRpb24iLCJkZWxheSIsIk5wbVBhY2thZ2UiLCJkYXRhIiwidG90YWxJdGVtcyIsImlzRHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsInJlZiIsImNvcHlNZXNzYWdlT3BlbiIsInNldENvcHlNZXNzYWdlT3BlblRvIiwidXNlRWZmZWN0Iiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0VG9wIiwic2NhbGUiLCJlIiwicG9pbnQiLCJjb21tYW5kIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwicG9zaXRpb24iLCJkZXNjcmlwdGlvbiIsIkZvb3Rlck5hdkxpbmsiLCJUaXRsZSIsIlR5cG9ncmFwaHkiLCJOb25BY3RpdmVMaW5rIiwiU3R5bGVkSHRtbExpbmsiLCJTaXRlRm9vdGVyIiwicGFkZGluZyIsIlRpdGxlTGluayIsImNvbG9ycyIsInNlY29uZGFyeSIsIlByb2plY3QiLCJzaG93U2xpZGVyQ29udHJvbHMiLCJ1cmwiLCJ0aXRsZSIsImxvb3AiLCJ1c2VTaGFyZWRTdHlsZXMiLCJ0ZXh0VHJhbnNmb3JtIiwibWFyZ2luVG9wIiwibWFyZ2luIiwicm9vdCIsIm1pblBhZGRpbmdYIiwiaW1hZ2VzIiwiY29uY2F0IiwiZmxleENlbnRlciIsIm1hcmdpbkJvdHRvbSIsImltZ1BhdGgiLCJwYWRkaW5nQm90dG9tIiwiY2xhc3NLZXkiLCJ0b1VwcGVyQ2FzZSIsIk5vblN0eWxlZEFuY2hvciIsIlN0eWxlZExpbmsiLCJkZWZhdWx0IiwiYmx1ZSIsInByaW1hcnkiLCJwYWxldHRlIiwiY29udHJhc3RUZXh0Iiwic3VjY2VzcyIsImVycm9yIiwid2FybmluZyIsInRlcnRpYXJ5IiwiZ2V0Q29udHJhc3RUZXh0IiwidmFwZSIsImV4cGVuc2UiLCJzaG9wIiwiY29sb3JIb3ZlciIsImRhcmsiLCJiZ3MiLCJtYWluIiwiYmdzSG92ZXIiLCJnZXRDb2xvckZvciIsIm1hdGNoQ29sb3IiLCJib3JkZXIiLCJ1c2VCdXR0b25TdHlsZXMiLCJjcmVhdGVTdHlsZXMiLCJzd2l0Y2hDb2xvclRvUmVndWxhciIsInVuZGVmaW5lZCIsImFzc2VydE5ldmVyIiwic3dpdGNoQ29sb3JUb0N1c3RvbSIsIkJyYW5kQnV0dG9uIiwiY2hpbGRyZW4iLCJ2YXJpYW50IiwiY2xhc3NOYW1lIiwic2l6ZSIsIm90aGVyIiwiZGVmYXVsdENvbG9yIiwiY3VzdG9tQ29sb3IiLCJCT1JERVJfUkFESU9VUyIsImZsZXhXcmFwIiwiYm9yZGVyUmFkaXVzIiwiaW1hZ2UiLCJicmVha3BvaW50cyIsImRvd24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImZvY3VzVmlzaWJsZSIsImltYWdlQnV0dG9uIiwiY29tbW9uIiwid2hpdGUiLCJpbWFnZVNyYyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiaW1hZ2VCYWNrZHJvcCIsInNoYXBlIiwiYmFja2dyb3VuZENvbG9yIiwiYmxhY2siLCJpbWFnZVRpdGxlIiwic3BhY2luZyIsImltYWdlTWFya2VkIiwiSW1hZ2VCdXR0b24iLCJidXR0b21Qcm9wcyIsImJhY2tncm91bmRJbWFnZSIsImdldE92ZXJyaWRlc0NvbG9yIiwiY29sb3JLZXkiLCJnZXRPdmVycmlkZXNCYWNrZ3JvdW5kQ29udGFpbmVkIiwiV0J1dHRvbiIsIndpdGhTdHlsZXMiLCJNdWlCdXR0b24iLCJXSWNvbkJ1dHRvbiIsImFjdGlvbiIsImRpc2FibGVkIiwiY3Vyc29yIiwiTXVpSWNvbkJ1dHRvbSIsIlNFQ09OREFSWV9DT0xPUl9DT05UUkFTVCIsIlBSSU1BUllfQ09MT1IiLCJUT09MQkFSX01JTl9IRUlHSFQiLCJQUklNQVJZX0NPTE9SX0NPTlRSQVNUIiwiREFSS19DT0xPUiIsIkxJR0hUX0NPTE9SIiwiVEVSVElBUllfQ09MT1IiLCJURVJUSUFSWV9DT0xPUl9DT05UUkFTVCIsImdldFRoZW1lIiwicHJlZmVyc0RhcmtNb2RlIiwiY3JlYXRlTXVpVGhlbWUiLCJzdGF0dXMiLCJkYW5nZXIiLCJyZWQiLCJsaWdodCIsImdyZWVuIiwiTXVpUGFwZXIiLCJlbGV2YXRpb24iLCJNdWlUZXh0RmllbGQiLCJJbnB1dExhYmVsUHJvcHMiLCJzaHJpbmsiLCJkaXNhYmxlUmlwcGxlIiwiTXVpQ2hlY2tib3giLCJvdmVycmlkZXMiLCJNdWlNb2JpbGVTdGVwcGVyIiwicG9zaXRpb25Cb3R0b20iLCJNdWlBcHBCYXIiLCJwb3NpdGlvbkZpeGVkIiwiTXVpVG9vbGJhciIsImd1dHRlcnMiLCJyZWd1bGFyIiwiTXVpRmlsbGVkSW5wdXQiLCJNdWlJbnB1dExhYmVsIiwiYXVnbWVudENvbG9yIiwic3R5bGVkQ29tcG9uZW50c1RoZW1lIiwicHJpbWFyeUNvbnRyYXN0Iiwic2Vjb25kYXJ5Q29udHJhc3QiLCJub1BhZGRpbmdYIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJjb25zdHJhaW5lZFNlY3Rpb24iLCJtYXJnaW5MZWZ0Iiwib25seSIsInZhbHVlcyIsIm1kIiwibWF4V2lkdGgiLCJ1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LFdBQU4sQ0FBa0IwRSxJQUFsQixDQUF1QixJQUF2QixDQUFELEdBQWdDO0FBQzlCO0FBQ0E7QUFDQXJQLGNBQVEsRUFBRU4sS0FBSyxDQUFDaUwsV0FBTixDQUFrQjJFLE1BQWxCLENBQXlCQyxFQUF6QixHQUE4QixFQUhWO0FBSTlCL00sV0FBSyxFQUFFLFFBSnVCO0FBSzlCZ04sY0FBUSxFQUFFOVAsS0FBSyxDQUFDaUwsV0FBTixDQUFrQjJFLE1BQWxCLENBQXlCQyxFQUF6QixHQUE4QjtBQUxWLEtBRmQ7QUFTbEIsS0FBQzdQLEtBQUssQ0FBQ2lMLFdBQU4sQ0FBa0I4RSxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzVCRCxjQUFRLEVBQUU5UCxLQUFLLENBQUNpTCxXQUFOLENBQWtCMkUsTUFBbEIsQ0FBeUJJLEVBQXpCLEdBQThCLEdBRFo7QUFFNUIxUCxjQUFRLEVBQUVOLEtBQUssQ0FBQ2lMLFdBQU4sQ0FBa0IyRSxNQUFsQixDQUF5QkksRUFBekIsR0FBOEIsRUFGWjtBQUc1QmxOLFdBQUssRUFBRTtBQUhxQjtBQVRaO0FBakJULENBQUQsQ0FEVyxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccHJvamVjdHMuanMuZWVjYTEwZDUzZTU4ODJlZmMzMTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0eWxlZEh0bWxMaW5rIH0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZFwiO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBEcmFnSGFuZGxlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RyYWdIYW5kbGVcIjtcclxuaW1wb3J0IE1haWxJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCI7XHJcbmltcG9ydCB7IFNFQ09OREFSWV9DT0xPUiB9IGZyb20gXCJAcm9vdC90aGVtZS9nZXRUaGVtZVwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgTmF2TGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IE5BVl9MSU5LUywgU09DSUFMX0xJTktTIH0gZnJvbSBcIi4vbmF2bGlua3NcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGxpc3Q6IHtcclxuICAgIHdpZHRoOiAyNTAsXHJcbiAgfSxcclxuICBmdWxsTGlzdDoge1xyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgLy8gbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMC41KSxcclxuICAgIC8vIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMC41KSxcclxuICAgIG1pbkhlaWdodDogNTAsXHJcbiAgICBtaW5XaWR0aDogNTAsXHJcbiAgICB6SW5kZXg6IDEwMDEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgU3R5bGVkTmF2TGluayA9IHN0eWxlZC5hPHsgaXNBY3RpdmU/OiBib29sZWFuIH0+YFxyXG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5pc0FjdGl2ZSA/IFNFQ09OREFSWV9DT0xPUiA6IFwiaW5oZXJpdFwifSA7XHJcbiAgICBmb250LXdlaWdodDogJHsocHJvcHMpID0+IHByb3BzLmlzQWN0aXZlID8gXCJib2xkXCIgOiBcIm5vcm1hbFwifTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgIGNvbG9yOiAke1NFQ09OREFSWV9DT0xPUn1cclxuICAgIH1cclxuICAgXHJcbmA7XHJcblxyXG5leHBvcnQgdHlwZSBBbmNob3IgPSBcInRvcFwiIHwgXCJsZWZ0XCIgfCBcImJvdHRvbVwiIHwgXCJyaWdodFwiO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGFuY2hvcjogQW5jaG9yO1xyXG59XHJcblxyXG5jb25zdCB2YXJpYW50cyA9IHtcclxuICBvcGVuOiB7IG9wYWNpdHk6IDEsIHg6IDAgfSxcclxuICBjbG9zZWQ6IHsgb3BhY2l0eTogMCwgeDogXCItMTAwJVwiIH0sXHJcbn07XHJcblxyXG5jb25zdCBsaXN0SXRlbVZhcmlhbnRzID0ge1xyXG4gIG9wZW46IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB5OiAwLFxyXG4gIH0sXHJcbiAgY2xvc2VkOiB7IG9wYWNpdHk6IDAsIHk6IFwiLTEwMCVcIiB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZURyYXdlcih7IGFuY2hvciB9OiBQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIGNvbnN0IGlzQnJlYWtwb2ludCA9IHVzZU1lZGlhUXVlcnkoXHJcbiAgLy8gICAodGhlbWU6IFRoZW1lKSA9PiB0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpLFxyXG4gIC8vICAge1xyXG4gIC8vICAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcclxuICAvLyAgIH0sXHJcbiAgLy8gKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHRvcDogZmFsc2UsXHJcbiAgICBsZWZ0OiBmYWxzZSxcclxuICAgIGJvdHRvbTogZmFsc2UsXHJcbiAgICByaWdodDogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9IChhbmNob3I6IEFuY2hvciwgb3BlbjogYm9vbGVhbikgPT5cclxuICAgIChcclxuICAgICAgZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQgfCBSZWFjdC5Nb3VzZUV2ZW50LFxyXG4gICAgKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBldmVudC50eXBlID09PSBcImtleWRvd25cIiAmJlxyXG4gICAgICAgICgoZXZlbnQgYXMgUmVhY3QuS2V5Ym9hcmRFdmVudCkua2V5ID09PSBcIlRhYlwiIHx8XHJcbiAgICAgICAgICAoZXZlbnQgYXMgUmVhY3QuS2V5Ym9hcmRFdmVudCkua2V5ID09PSBcIlNoaWZ0XCIpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2FuY2hvcl06IG9wZW4gfSk7XHJcbiAgICB9O1xyXG5cclxuICBjb25zdCBsaXN0ID0gKGFuY2hvcjogQW5jaG9yKSA9PiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmxpc3QsIHtcclxuICAgICAgICBbY2xhc3Nlcy5mdWxsTGlzdF06IGFuY2hvciA9PT0gXCJ0b3BcIiB8fCBhbmNob3IgPT09IFwiYm90dG9tXCIsXHJcbiAgICAgIH0pfVxyXG4gICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cclxuICAgID5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge05BVl9MSU5LUy5tYXAoKHsgdGV4dCwgaHJlZiwgSWNvbiB9LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPE5hdkxpbmsga2V5PXt0ZXh0fSBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgPFN0eWxlZE5hdkxpbmsgaXNBY3RpdmU9e2hyZWYgPT09IHJvdXRlci5wYXRobmFtZX0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uIHN0eWxlPXt7IGNvbG9yOiBcImluaGVyaXRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge0ljb24gPyBJY29uIDogPERyYWdIYW5kbGVJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9TdHlsZWROYXZMaW5rPlxyXG4gICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPXtmYWxzZX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgU29jaWFsXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICB7U09DSUFMX0xJTktTLm1hcCgoeyB0ZXh0LCBJY29uLCBocmVmIH0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8U3R5bGVkSHRtbExpbmtcclxuICAgICAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICAgICAgdGl0bGU9e3RleHR9XHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICByb2xlPVwibGlua1wiXHJcbiAgICAgICAgICAgIGtleT17dGV4dH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uIHN0eWxlPXt7IGNvbG9yOiBcImluaGVyaXRcIiB9fT5cclxuICAgICAgICAgICAgICAgIHtJY29uID8gSWNvbiA6IDxNYWlsSWNvbiAvPn1cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L1N0eWxlZEh0bWxMaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICAvLyBjb25zdCBpc09wZW4gPSBzdGF0ZVthbmNob3JdIHx8IGlzQnJlYWtwb2ludDtcclxuICBjb25zdCBpc09wZW4gPSBzdGF0ZVthbmNob3JdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50IGtleT17YW5jaG9yfT5cclxuICAgICAgey8qIDxIaWRkZW4gbWRVcCBpbml0aWFsV2lkdGg9XCJzbVwiPiAqL31cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIC8vIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgdHJ1ZSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259XHJcbiAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICBhcmlhLWxhYmVsPVwibWVudVwiXHJcbiAgICAgID5cclxuICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIHsvKiA8L0hpZGRlbj4gKi99XHJcblxyXG4gICAgICA8RHJhd2VyXHJcbiAgICAgICAgaWQ9XCJuYXZiYXItZHJhd2VyXCJcclxuICAgICAgICBhbmNob3I9e2FuY2hvcn1cclxuICAgICAgICAvLyB2YXJpYW50PXtpc0JyZWFrcG9pbnQgPyBcInBlcm1hbmVudFwiIDogdW5kZWZpbmVkfVxyXG4gICAgICAgIG9wZW49e2lzT3Blbn1cclxuICAgICAgICAvLyBNb2RhbFByb3BzPXt7XHJcbiAgICAgICAgLy8gICBkaXNhYmxlU2Nyb2xsTG9jazogaXNCcmVha3BvaW50LFxyXG4gICAgICAgIC8vICAgc3R5bGU6IHtcclxuICAgICAgICAvLyAgICAgcG9zaXRpb246IGlzQnJlYWtwb2ludCA/IFwicmVsYXRpdmVcIiA6IFwiZml4ZWRcIixcclxuICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgLy8gfX1cclxuICAgICAgICBQYXBlclByb3BzPXt7XHJcbiAgICAgICAgICBzdHlsZTogeyB3aWR0aDogMjQwIH0sXHJcbiAgICAgICAgfX1cclxuICAgICAgICBTbGlkZVByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiB7XHJcbiAgICAgICAgICAgIGV4aXQ6IDMwMCxcclxuICAgICAgICAgICAgZW50ZXI6IDI1MCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfX1cclxuICAgICAgICAvLyBoaWRlQmFja2Ryb3A9e2lzQnJlYWtwb2ludH1cclxuICAgICAgICBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XHJcbiAgICAgID5cclxuICAgICAgICB7bGlzdChhbmNob3IpfVxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEJveCxcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEdyaWQsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBQYXBlcixcclxuICBTbmFja2JhcixcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBObm1QYWNrYWdlLCBOUE1fUEFDS0FHRVMgfSBmcm9tIFwiLi9OUE1fUEFDS0FHRVNcIjtcclxuaW1wb3J0IHsgQnJhbmRCdXR0b24gfSBmcm9tIFwiQHJvb3QvdGhlbWUvQ3VzdG9tXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRGl2aWRlckVsZW1lbnQgfSBmcm9tIFwiLi4vc2hhcmVkXCI7XHJcbmltcG9ydCB7IGZpbmRJbmRleCwgUG9zaXRpb24sIG1vdmUgfSBmcm9tIFwiLi4vc2hhcmVkL2ZpbmQtaW5kZXhcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbn1cclxuXHJcbmNvbnN0IHNwcmluZyA9IHtcclxuICB0eXBlOiBcInNwcmluZ1wiLFxyXG4gIHN0aWZmbmVzczogNzAwLFxyXG4gIGRhbXBpbmc6IDMwLFxyXG59O1xyXG5cclxuY29uc3QgdXNlTnBtU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgd3JhcHBlcjoge1xyXG4gICAgICBjb2xvcjogXCIjMDAwXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxyXG4gICAgfSxcclxuICAgIGNhcmRSb290OiB7XHJcbiAgICAgIGNvbG9yOiBcIiMwMDBcIixcclxuICAgICAgYmFja2dyb3VuZDogXCIjZmZmXCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICBoZWlnaHQ6IDIwMCxcclxuICAgICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuXHJcbmNvbnN0IE5wbVBhY2thZ2VzID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VOcG1TdHlsZXMoKTtcclxuICBjb25zdCBwb3NpdGlvbnMgPSB1c2VSZWY8UG9zaXRpb25bXT4oW10pLmN1cnJlbnQ7XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShOUE1fUEFDS0FHRVMpO1xyXG4gIGNvbnN0IHNldFBvc2l0aW9uID0gKGk6IG51bWJlciwgb2Zmc2V0OiBQb3NpdGlvbikgPT4gKHBvc2l0aW9uc1tpXSA9IG9mZnNldCk7XHJcblxyXG4gIGNvbnN0IG1vdmVJdGVtID0gKGk6IG51bWJlciwgZHJhZ09mZnNldDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IGZpbmRJbmRleChpLCBkcmFnT2Zmc2V0LCBwb3NpdGlvbnMpO1xyXG4gICAgaWYgKHRhcmdldEluZGV4ICE9PSBpKSB7XHJcbiAgICAgIHNldEl0ZW1zKG1vdmUoaXRlbXMsIGksIHRhcmdldEluZGV4KSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBtYj17Mn0+XHJcbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0gZWxldmF0aW9uPXswfT5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEJveCBteT17Mn0+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyRWxlbWVudD5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj1cImNlbnRlclwiPk5QTSBQYWNrYWdlczwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9EaXZpZGVyRWxlbWVudD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2l0ZW1zLm1hcCgocGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxHcmlkIGtleT17cGEubmFtZX0gaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgIDxOcG1QYWNrYWdlXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE9e3BhfVxyXG4gICAgICAgICAgICAgICAgICB0b3RhbEl0ZW1zPXtpdGVtcy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgIGk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICBtb3ZlSXRlbT17bW92ZUl0ZW19XHJcbiAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uPXtzZXRQb3NpdGlvbn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPjtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIFBhY2tQcm9wcyB7XHJcbiAgZGF0YTogTm5tUGFja2FnZTtcclxuICBpOiBudW1iZXI7XHJcbiAgdG90YWxJdGVtczogbnVtYmVyO1xyXG4gIHNldFBvc2l0aW9uOiAoaTogbnVtYmVyLCBwb3M6IFBvc2l0aW9uKSA9PiB2b2lkO1xyXG4gIG1vdmVJdGVtOiAoaTogbnVtYmVyLCBkcmFnT2Zmc2V0OiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IG9uVG9wID0geyB6SW5kZXg6IDEgfTtcclxuY29uc3QgZmxhdCA9IHtcclxuICB6SW5kZXg6IDAsXHJcbiAgdHJhbnNpdGlvbjogeyBkZWxheTogMC4zIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBOcG1QYWNrYWdlKHsgZGF0YSwgaSwgbW92ZUl0ZW0sIHNldFBvc2l0aW9uLCB0b3RhbEl0ZW1zIH06IFBhY2tQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VOcG1TdHlsZXMoKTtcclxuICBjb25zdCBbaXNEcmFnZ2luZywgc2V0RHJhZ2dpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgW2NvcHlNZXNzYWdlT3Blbiwgc2V0Q29weU1lc3NhZ2VPcGVuVG9dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIFVwZGF0ZSB0aGUgbWVhc3VyZWQgcG9zaXRpb24gb2YgdGhlIGl0ZW0gc28gd2UgY2FuIGNhbGN1bGF0ZSB3aGVuIHdlIHNob3VsZCByZWFycmFuZ2UuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFBvc2l0aW9uKGksIHtcclxuICAgICAgaGVpZ2h0OiByZWYuY3VycmVudCEub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICB0b3A6IHJlZi5jdXJyZW50IS5vZmZzZXRUb3AsXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuICg8PlxyXG4gICAgPFNuYWNrYmFyXHJcbiAgICAgIG9wZW49e2NvcHlNZXNzYWdlT3Blbn1cclxuICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MTAwMH1cclxuICAgICAgb25DbG9zZT17KCkgPT4ge1xyXG4gICAgICAgIHNldENvcHlNZXNzYWdlT3BlblRvKGZhbHNlKTtcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPEJveCBwb3NpdGlvbj1cImFic29sdXRlXCIgYm90dG9tPVwiMFwiIGxlZnQ9XCIyNSVcIiB3aWR0aD17NDAwfT5cclxuICAgICAgICA8QnJhbmRCdXR0b24gY29sb3I9XCJzdWNjZXNzXCI+XHJcbiAgICAgICAgICB7LyogPEFsZXJ0IG9uQ2xvc2U9eyBzZXRDb3B5TWVzc2FnZU9wZW5UbyhmYWxzZSl9IHNldmVyaXR5PVwic3VjY2Vzc1wiPiAqL31cclxuICAgICAgICAgIDxCb3ggZGlzcGxheT1cImJsb2NrXCIgd2lkdGg9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIENvcGllZCB0byBjbGlwYm9hcmRcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICB7LyogPC9BbGVydD4gKi99XHJcbiAgICAgICAgPC9CcmFuZEJ1dHRvbj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L1NuYWNrYmFyPlxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgZHJhZz17dHJ1ZX1cclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgIGxheW91dFxyXG4gICAgICBhbmltYXRlPXtpc0RyYWdnaW5nID8gb25Ub3AgOiBmbGF0fVxyXG4gICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjAzIH19XHJcbiAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAxLjEyIH19XHJcbiAgICAgIHRyYW5zaXRpb249e3NwcmluZ31cclxuICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7IHRvcDogMTAsIGJvdHRvbTogMTAsIGxlZnQ6IDEwLCByaWdodDogMTAgfX1cclxuICAgICAgZHJhZ0VsYXN0aWM9ezF9XHJcbiAgICAgIG9uRHJhZ1N0YXJ0PXsoKSA9PiBzZXREcmFnZ2luZyh0cnVlKX1cclxuICAgICAgb25EcmFnRW5kPXsoKSA9PiBzZXREcmFnZ2luZyhmYWxzZSl9XHJcbiAgICAgIG9uRHJhZz17KGUsIHsgcG9pbnQgfSkgPT4gbW92ZUl0ZW0oaSwgcG9pbnQueSl9XHJcbiAgICA+XHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRSb290fVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBpID09PSAodG90YWxJdGVtcyAtIDEpXHJcbiAgICAgICAgICAgID8gXCJyZ2JhKDI0NywyNDcsIDI0NywuODMpXCJcclxuICAgICAgICAgICAgOiBcIndoaXRlXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJkSGVhZGVyXHJcbiAgICAgICAgICB0aXRsZT17ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgc3ViaGVhZGVyPXtkYXRhLmNvbW1hbmR9XHJcbiAgICAgICAgICBhY3Rpb249ezxCb3ggd2lkdGg9XCIxMDAlXCIganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxyXG4gICAgICAgICAgICA8QnJhbmRCdXR0b25cclxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGRhdGEuY29tbWFuZCB8fCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIHNldENvcHlNZXNzYWdlT3BlblRvKHRydWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICByaWdodDogMTIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDb3B5XHJcbiAgICAgICAgICAgIDwvQnJhbmRCdXR0b24+XHJcbiAgICAgICAgICA8L0JveD59XHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgICAge2RhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gIDwvPik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5wbVBhY2thZ2VzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgVHlwb2dyYXBoeSwgTGlzdCwgTGlzdEl0ZW0gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuLy8gaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBOYXZMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtcclxuICBQcmltYXJ5QmFja2dyb3VuZFNlY3Rpb24sXHJcbiAgU3R5bGVkSHRtbExpbmssXHJcbn0gZnJvbSBcIi4uL3NoYXJlZFwiO1xyXG5pbXBvcnQgU29jaWFsTGlzdCBmcm9tIFwiLi9Tb2NpYWxMaXN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTRUNPTkRBUllfQ09MT1IgfSBmcm9tIFwiQHJvb3QvdGhlbWUvZ2V0VGhlbWVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJOYXZMaW5rID0gc3R5bGVkLmE8eyBpc0FjdGl2ZT86IGJvb2xlYW4gfT5gXHJcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5pc0FjdGl2ZSA/IFNFQ09OREFSWV9DT0xPUiA6IFwiaW5oZXJpdFwifTtcclxuICBmb250LXdlaWdodDogJHsocHJvcHMpID0+IHByb3BzLmlzQWN0aXZlID8gXCJib2xkXCIgOiBcIm5vcm1hbFwifTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICYuaXRlbXtcclxuICAgIGNvbG9yOiR7U0VDT05EQVJZX0NPTE9SfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gICY6aG92ZXJ7XHJcbiAgICBjb2xvcjogJHtTRUNPTkRBUllfQ09MT1J9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZChUeXBvZ3JhcGh5KTx7IGNvbXBvbmVudD86IHN0cmluZyB9PmBcclxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbmA7XHJcblxyXG5jb25zdCBOb25BY3RpdmVMaW5rID0gc3R5bGVkKFN0eWxlZEh0bWxMaW5rKWBcclxuICAgIGNvbG9yOiAnaW5oZXJpdCc7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgY29sb3I6ICR7U0VDT05EQVJZX0NPTE9SfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2l0ZUZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFByaW1hcnlCYWNrZ3JvdW5kU2VjdGlvbiBzdHlsZT17eyBwYWRkaW5nOiBcIjFlbSAwZW1cIiB9fT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCJcclxuICAgICAgICAgIGFsaWduQ29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWFyb3VuZFwiXHJcbiAgICAgICAgICAgIGFsaWduQ29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbT17dHJ1ZX0geHM9ezEyfSBzbT1cImF1dG9cIj5cclxuICAgICAgICAgICAgICA8TGlzdCBpZD1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8VGl0bGUgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDFcIj5QYWdlczwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXJOYXZMaW5rIGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gXCIvXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9vdGVyTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXJOYXZMaW5rIGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gXCIvcHJvamVjdHNcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTaG93Y2FzZSBQcm9qZWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9vdGVyTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3Rlck5hdkxpbmsgaXNBY3RpdmU9e3BhdGhuYW1lID09PSBcIi9jb250YWN0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9vdGVyTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPVwiYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8VGl0bGUgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5TaG93Y2FzZSBQcm9qZWN0czwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8Tm9uQWN0aXZlTGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZhcGVtdXNpYy5jbHViXCJcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVmFwZSBNdXNpY1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBWYXBlIE11c2ljXHJcbiAgICAgICAgICAgICAgICAgIDwvTm9uQWN0aXZlTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxOb25BY3RpdmVMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd2lsZnJlZGxvcGV6Lm5ldC9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBSZXRhbE1lTm93XHJcbiAgICAgICAgICAgICAgICAgIDwvTm9uQWN0aXZlTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxOb25BY3RpdmVMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd2lsZnJlZGV4cGVuc2VtYW5hZ2VyLm5ldGxpZnkuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRXhwZW5zZXMgTWFuYWdlclxyXG4gICAgICAgICAgICAgICAgICA8L05vbkFjdGl2ZUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxUaXRsZSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFNvY2lhbFxyXG4gICAgICAgICAgICAgICAgICA8L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxTb2NpYWxMaXN0IC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICBzbT17NH1cclxuICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEFsbCBSaWdodHMgUmVzZXZlZFxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8cD4yMDIwICZjb3B5OyBXaWxmcmVkIExvcGV6PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9QcmltYXJ5QmFja2dyb3VuZFNlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpdGVGb290ZXI7XHJcbiIsImltcG9ydCB7IFN0eWxlZEh0bWxMaW5rIH0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZFwiO1xyXG5pbXBvcnQgU2xpZGVyQ2FyZCwgeyBJbWFnZVRvU2xpZGVyIH0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZC9TbGlkZXJDYXJkXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29udGFpbmVyLFxyXG4gIEdyaWQsXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgQnJhbmRCdXR0b24sIEltYWdlQnV0dG9uIH0gZnJvbSBcIkByb290L3RoZW1lL0N1c3RvbVwiO1xyXG5pbXBvcnQgdXNlU2hhcmVkU3R5bGVzIGZyb20gXCJAcm9vdC90aGVtZS91c2VTaGFyZWRTdHlsZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBEaXZpZGVyRWxlbWVudCB9IGZyb20gXCJAY29tcG9uZW50cy9zaGFyZWRcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgaW1hZ2VzOiBJbWFnZVRvU2xpZGVyW107XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGNsYXNzS2V5OiBcInZhcGVcIiB8IFwiZXhwZW5zZVwiIHwgXCJzaG9wXCI7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBzaG93U2xpZGVyQ29udHJvbHM/OiBib29sZWFuO1xyXG4gIGxvb3A/OiBib29sZWFuO1xyXG4gIGRlc2NyaXB0aW9uOiBKU1guRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlTGluayA9IHN0eWxlZChTdHlsZWRIdG1sTGluaylgXHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG5gO1xyXG5cclxuY29uc3QgUHJvamVjdDogUmVhY3QuRkM8UHJvcHM+ID0gKFxyXG4gIHsgc2hvd1NsaWRlckNvbnRyb2xzID0gdHJ1ZSwgdXJsLCBuYW1lLCB0aXRsZSwgbG9vcCwgLi4ucHJvcHMgfSxcclxuKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVNoYXJlZFN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RGl2aWRlckVsZW1lbnRcclxuICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXIgcHJvamVjdC10aWxlXCJcclxuICAgICAgICBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLCBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VGl0bGVMaW5rXHJcbiAgICAgICAgICBocmVmPXt1cmx9XHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICB0aXRsZT17bmFtZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bmFtZX1cclxuICAgICAgICA8L1RpdGxlTGluaz5cclxuICAgICAgPC9EaXZpZGVyRWxlbWVudD5cclxuXHJcbiAgICAgIDxDb250YWluZXJcclxuICAgICAgICBtYXhXaWR0aD1cInNtXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgIHJvb3Q6IGNsYXNzZXMubWluUGFkZGluZ1gsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAge3Byb3BzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAge3Byb3BzLmltYWdlcy5sZW5ndGggPiAxICYmXHJcbiAgICAgICAgICAgIDxTbGlkZXJDYXJkXHJcbiAgICAgICAgICAgICAgc2hvd0NvbnRyb2xzPXtzaG93U2xpZGVyQ29udHJvbHN9XHJcbiAgICAgICAgICAgICAgaW1hZ2VEYXRhPXtwcm9wcy5pbWFnZXN9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs3NTB9XHJcbiAgICAgICAgICAgICAgbG9vcD17bG9vcH1cclxuICAgICAgICAgICAgICBzaG93VGl0bGVcclxuICAgICAgICAgICAgLz59XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAge3Byb3BzLmltYWdlcy5sZW5ndGggPT09IDEgJiZcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFN0eWxlZEh0bWxMaW5rXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5taW5QYWRkaW5nWC5jb25jYXQoXCIgXCIgKyBjbGFzc2VzLmZsZXhDZW50ZXIpfVxyXG4gICAgICAgICAgICBocmVmPXt1cmx9XHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbWFnZUJ1dHRvblxyXG4gICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgICB1cmw9e3Byb3BzLmltYWdlc1swXS5pbWdQYXRofVxyXG4gICAgICAgICAgICAgIHdpZHRoPXs1MjB9XHJcbiAgICAgICAgICAgICAgbWluSGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgYnV0dG9tUHJvcHM9e3t9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TdHlsZWRIdG1sTGluaz5cclxuICAgICAgICA8L2Rpdj59XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxcmVtXCIgfX0gLz5cclxuICAgICAgPEdyaWRcclxuICAgICAgICBjb250YWluZXJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiBcIjFyZW1cIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgIDxCcmFuZEJ1dHRvbiBjb2xvcj17cHJvcHMuY2xhc3NLZXl9IHNpemU9XCJtZWRpdW1cIiB2YXJpYW50PVwiY29udGFpbmVkXCI+XHJcbiAgICAgICAgICAgIDxTdHlsZWRIdG1sTGluayBocmVmPXt1cmx9IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIiB0aXRsZT17bmFtZX0+XHJcbiAgICAgICAgICAgICAge25hbWUudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgPC9TdHlsZWRIdG1sTGluaz5cclxuICAgICAgICAgIDwvQnJhbmRCdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcclxuIiwiaW1wb3J0IHsgU0VDT05EQVJZX0NPTE9SIH0gZnJvbSBcIkByb290L3RoZW1lL2dldFRoZW1lXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTm9uU3R5bGVkQW5jaG9yID0gc3R5bGVkLmFgXHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICBjb2xvcjogJ2luaGVyaXQnO1xyXG4gICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYTx7IGNvbG9yPzogc3RyaW5nIH0+YFxyXG4gICAgY29sb3I6ICAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3IgPyBwcm9wcy5jb2xvciA6IFwiaW5oZXJpdFwifTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICBjb2xvcjogJHtTRUNPTkRBUllfQ09MT1J9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkSHRtbExpbmsgPSBzdHlsZWQuYTx7IGNvbG9yPzogc3RyaW5nIH0+YFxyXG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvciA/IHByb3BzLmNvbG9yIDogXCJpbmhlcml0XCJ9O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkTGluaztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMsIFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlU3R5bGVzLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgVGhlbWUsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgYXNzZXJ0TmV2ZXIgfSBmcm9tIFwiQHdpbGZyZWRsb3Blei9yZWFjdC11dGlsc1wiO1xyXG5cclxuZXhwb3J0IHR5cGUgUGFsZXR0ZUNvbG9yS2V5cyA9XHJcbiAgfCBcInByaW1hcnlcIlxyXG4gIHwgXCJzZWNvbmRhcnlcIlxyXG4gIHwgXCJlcnJvclwiXHJcbiAgfCBcIndhcm5pbmdcIlxyXG4gIHwgXCJ0ZXJ0aWFyeVwiXHJcbiAgfCBcInN1Y2Nlc3NcIjtcclxuXHJcbnR5cGUgUmVndWxhckJ1dHRvbkNvbG9yID0gXCJpbmhlcml0XCIgfCBcInByaW1hcnlcIiB8IFwic2Vjb25kYXJ5XCI7XHJcblxyXG50eXBlIEN1c3RvbUNvbG9yID1cclxuICB8IFwidmFwZVwiXHJcbiAgfCBcImV4cGVuc2VcIlxyXG4gIHwgXCJzaG9wXCJcclxuICB8IFwidGV4dFwiXHJcbiAgfCBcImJsdWVcIlxyXG4gIHwgXCJlcnJvclwiXHJcbiAgfCBcIndhcm5pbmdcIlxyXG4gIHwgXCJ0ZXJ0aWFyeVwiXHJcbiAgfCBcInN1Y2Nlc3NcIlxyXG4gIHwgXCJkZWZhdWx0XCI7XHJcblxyXG50eXBlIEJ1dHRvblN0eWxlc0NvbG9yID0gQ3VzdG9tQ29sb3IgfCBSZWd1bGFyQnV0dG9uQ29sb3I7XHJcblxyXG5pbnRlcmZhY2UgQnV0dG9uU3R5bGVzIHtcclxuICBvbkNsaWNrPzpcclxuICAgIHwgKChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQpXHJcbiAgICB8IHVuZGVmaW5lZDtcclxuICByZWY/OiBSZWFjdC5SZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xyXG4gIGNvbG9yPzogQnV0dG9uU3R5bGVzQ29sb3I7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIHN0eWxlPzogQ1NTUHJvcGVydGllcztcclxuICBzaXplPzogXCJtZWRpdW1cIiB8IFwibGFyZ2VcIiB8IFwic21hbGxcIiB8IFwiZGVmYXVsdFwiO1xyXG4gIC8qKlxyXG4gICAgICAgICAqIFRoZSBjb250ZW50IG9mIHRoZSBidXR0b24uXHJcbiAgICAgICAgICovXHJcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBidXR0b24gd2lsbCBiZSBkaXNhYmxlZC5cclxuICAgICAgICAgICAqL1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIElmIGB0cnVlYCwgbm8gZWxldmF0aW9uIGlzIHVzZWQuXHJcbiAgICAgICAgICAgKi9cclxuICBkaXNhYmxlRWxldmF0aW9uPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIElmIGB0cnVlYCwgdGhlICBrZXlib2FyZCBmb2N1cyByaXBwbGUgd2lsbCBiZSBkaXNhYmxlZC5cclxuICAgICAgICAgICAqL1xyXG4gIGRpc2FibGVGb2N1c1JpcHBsZT86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBFbGVtZW50IHBsYWNlZCBhZnRlciB0aGUgY2hpbGRyZW4uXHJcbiAgICAgICAgICAgKi9cclxuICBlbmRJY29uPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYnV0dG9uIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxyXG4gICAgICAgICAgICovXHJcbiAgZnVsbFdpZHRoPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIFRoZSBVUkwgdG8gbGluayB0byB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cclxuICAgICAgICAgICAqIElmIGRlZmluZWQsIGFuIGBhYCBlbGVtZW50IHdpbGwgYmUgdXNlZCBhcyB0aGUgcm9vdCBub2RlLlxyXG4gICAgICAgICAgICovXHJcbiAgaHJlZj86IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgICAgICAgICAqIEVsZW1lbnQgcGxhY2VkIGJlZm9yZSB0aGUgY2hpbGRyZW4uXHJcbiAgICAgICAgICAgKi9cclxuICBzdGFydEljb24/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBUaGUgdmFyaWFudCB0byB1c2UuIERlZmF1bHRzIHRvIGNvbnRhaW5lZFxyXG4gICAgICAgICAgICovXHJcbiAgdmFyaWFudD86IFwidGV4dFwiIHwgXCJvdXRsaW5lZFwiIHwgXCJjb250YWluZWRcIjtcclxufVxyXG5cclxuY29uc3QgY29sb3IgPSAodGhlbWU6IFRoZW1lKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRlZmF1bHQ6IFwiI2ZmZlwiLFxyXG4gICAgYmx1ZTogXCIjZmZmXCIsXHJcbiAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0LFxyXG4gICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXHJcbiAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MuY29udHJhc3RUZXh0LFxyXG4gICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuY29udHJhc3RUZXh0LFxyXG4gICAgd2FybmluZzogXCIjZmZmXCIsXHJcbiAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5jb250cmFzdFRleHQsXHJcbiAgICB0ZXh0OiB0aGVtZS5wYWxldHRlLmdldENvbnRyYXN0VGV4dCh0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSksXHJcbiAgICB2YXBlOiBcIiNmZmZcIixcclxuICAgIGV4cGVuc2U6IFwiI2ZmZlwiLFxyXG4gICAgc2hvcDogXCIjZmZmXCIsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGNvbG9ySG92ZXIgPSAodGhlbWU6IFRoZW1lKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRlZmF1bHQ6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICBibHVlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzIxOTZGMyAzMCUsICMyMUNCRjMgOTAlKVwiLFxyXG4gICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXHJcbiAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmssXHJcbiAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MuZGFyayxcclxuICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmRhcmssXHJcbiAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcuZGFyayxcclxuICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5LmRhcmssXHJcbiAgICB0ZXh0OiBcImluaGVyaXRcIixcclxuICAgIHZhcGU6IFwiI2ZmMWYwMFwiLFxyXG4gICAgZXhwZW5zZTogXCIjMmU5ZTdhXCIsXHJcbiAgICBzaG9wOiBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBiZ3MgPSAodGhlbWU6IFRoZW1lKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRlZmF1bHQ6IFwiIzAwMFwiLFxyXG4gICAgYmx1ZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMyMTk2RjMgMzAlLCAjMjFDQkYzIDkwJSlcIixcclxuICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLm1haW4sXHJcbiAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLFxyXG4gICAgd2FybmluZzogdGhlbWUucGFsZXR0ZS53YXJuaW5nLm1haW4sXHJcbiAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5tYWluLFxyXG4gICAgdGV4dDogXCJpbmhlcml0XCIsXHJcbiAgICBleHBlbnNlOiBcIiMyZTllN2FcIixcclxuICAgIHNob3A6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICB2YXBlOiBcIiNmZjFmMDBcIixcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgYmdzSG92ZXIgPSAodGhlbWU6IFRoZW1lKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRlZmF1bHQ6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICBibHVlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDAgMTM3IDI0NykgMzAlLCByZ2IoMTAgMTM4IDE2OCkgOTAlKVwiLFxyXG4gICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXHJcbiAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmssXHJcbiAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MuZGFyayxcclxuICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmRhcmssXHJcbiAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcuZGFyayxcclxuICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5LmRhcmssXHJcbiAgICB0ZXh0OiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgIHZhcGU6IFwiI2UwMWIwMFwiLFxyXG4gICAgZXhwZW5zZTogXCIjMjg4YjZiXCIsXHJcbiAgICBzaG9wOiBcIiMwMDBcIixcclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0Q29sb3JGb3IoXHJcbiAgbWF0Y2hDb2xvcjogQ3VzdG9tQ29sb3IgfCBcInByaW1hcnlcIiB8IFwic2Vjb25kYXJ5XCIsXHJcbiAgdGhlbWU6IFRoZW1lLFxyXG4pIHtcclxuICByZXR1cm4ge1xyXG4gICAgY29sb3I6IGNvbG9yKHRoZW1lKVttYXRjaENvbG9yXSxcclxuICAgIGJhY2tncm91bmQ6IGJncyh0aGVtZSlbbWF0Y2hDb2xvcl0sXHJcbiAgICBbXCImLk11aUJ1dHRvbi1vdXRsaW5lZFwiXToge1xyXG4gICAgICBjb2xvcjogYmdzKHRoZW1lKVttYXRjaENvbG9yXSxcclxuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkIGAgKyBiZ3ModGhlbWUpW21hdGNoQ29sb3JdLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICB9LFxyXG4gICAgW1wiJi5NdWlCdXR0b24tdGV4dFwiXToge1xyXG4gICAgICBjb2xvcjogYmdzKHRoZW1lKVttYXRjaENvbG9yXSxcclxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgfSxcclxuICAgIFtcIiY6aG92ZXJcIl06IHtcclxuICAgICAgYmFja2dyb3VuZDogYmdzSG92ZXIodGhlbWUpW21hdGNoQ29sb3JdLFxyXG4gICAgICBbXCImLk11aUJ1dHRvbi1vdXRsaW5lZFwiXToge1xyXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCBgICsgYmdzSG92ZXIodGhlbWUpW21hdGNoQ29sb3JdLFxyXG4gICAgICB9LFxyXG4gICAgICBbXCImLk11aUJ1dHRvbi1vdXRsaW5lZCwmLk11aUJ1dHRvbi10ZXh0XCJdOiB7XHJcbiAgICAgICAgY29sb3I6IGNvbG9ySG92ZXIodGhlbWUpW21hdGNoQ29sb3JdLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgdXNlQnV0dG9uU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICB2YXBlOiBnZXRDb2xvckZvcihcInZhcGVcIiwgdGhlbWUpLFxyXG4gICAgZGVmYXVsdDogZ2V0Q29sb3JGb3IoXCJkZWZhdWx0XCIsIHRoZW1lKSxcclxuICAgIGJsdWU6IGdldENvbG9yRm9yKFwiYmx1ZVwiLCB0aGVtZSksXHJcbiAgICBwcmltYXJ5OiBnZXRDb2xvckZvcihcInByaW1hcnlcIiwgdGhlbWUpLFxyXG4gICAgc2Vjb25kYXJ5OiBnZXRDb2xvckZvcihcInNlY29uZGFyeVwiLCB0aGVtZSksXHJcbiAgICBzdWNjZXNzOiBnZXRDb2xvckZvcihcInN1Y2Nlc3NcIiwgdGhlbWUpLFxyXG4gICAgZXJyb3I6IGdldENvbG9yRm9yKFwiZXJyb3JcIiwgdGhlbWUpLFxyXG4gICAgd2FybmluZzogZ2V0Q29sb3JGb3IoXCJ3YXJuaW5nXCIsIHRoZW1lKSxcclxuICAgIHRlcnRpYXJ5OiBnZXRDb2xvckZvcihcInRlcnRpYXJ5XCIsIHRoZW1lKSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgY29sb3I6IGNvbG9yKHRoZW1lKS50ZXh0LFxyXG4gICAgICBiYWNrZ3JvdW5kOiBiZ3ModGhlbWUpLnRleHQsXHJcbiAgICAgIFtcIiY6aG92ZXJcIl06IHtcclxuICAgICAgICBjb2xvcjogY29sb3JIb3Zlcih0aGVtZSkudGV4dCxcclxuICAgICAgICBiYWNrZ3JvdW5kOiBiZ3NIb3Zlcih0aGVtZSkudGV4dCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBleHBlbnNlOiBnZXRDb2xvckZvcihcImV4cGVuc2VcIiwgdGhlbWUpLFxyXG4gICAgc2hvcDogZ2V0Q29sb3JGb3IoXCJzaG9wXCIsIHRoZW1lKSxcclxuICB9KVxyXG4pO1xyXG5cclxuZnVuY3Rpb24gc3dpdGNoQ29sb3JUb1JlZ3VsYXIoXHJcbiAgY29sb3I/OiBCdXR0b25TdHlsZXNDb2xvcixcclxuKSB7XHJcbiAgc3dpdGNoIChjb2xvcikge1xyXG4gICAgY2FzZSBcImJsdWVcIjpcclxuICAgIGNhc2UgXCJlcnJvclwiOlxyXG4gICAgY2FzZSBcImV4cGVuc2VcIjpcclxuICAgIGNhc2UgXCJzaG9wXCI6XHJcbiAgICBjYXNlIFwic3VjY2Vzc1wiOlxyXG4gICAgY2FzZSBcInRlcnRpYXJ5XCI6XHJcbiAgICBjYXNlIFwidGV4dFwiOlxyXG4gICAgY2FzZSBcInZhcGVcIjpcclxuICAgIGNhc2UgXCJ3YXJuaW5nXCI6XHJcbiAgICBjYXNlIFwiZGVmYXVsdFwiOlxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgY2FzZSBcImluaGVyaXRcIjpcclxuICAgIGNhc2UgXCJwcmltYXJ5XCI6XHJcbiAgICBjYXNlIFwic2Vjb25kYXJ5XCI6XHJcbiAgICBjYXNlIHVuZGVmaW5lZDpcclxuICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYXNzZXJ0TmV2ZXIoY29sb3IpO1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBzd2l0Y2hDb2xvclRvQ3VzdG9tKFxyXG4gIGNvbG9yPzogQnV0dG9uU3R5bGVzQ29sb3IsXHJcbikge1xyXG4gIHN3aXRjaCAoY29sb3IpIHtcclxuICAgIGNhc2UgXCJpbmhlcml0XCI6XHJcbiAgICBjYXNlIFwicHJpbWFyeVwiOlxyXG4gICAgY2FzZSBcInNlY29uZGFyeVwiOlxyXG4gICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICBjYXNlIFwiYmx1ZVwiOlxyXG4gICAgY2FzZSBcImVycm9yXCI6XHJcbiAgICBjYXNlIFwiZXhwZW5zZVwiOlxyXG4gICAgY2FzZSBcInNob3BcIjpcclxuICAgIGNhc2UgXCJzdWNjZXNzXCI6XHJcbiAgICBjYXNlIFwidGVydGlhcnlcIjpcclxuICAgIGNhc2UgXCJ0ZXh0XCI6XHJcbiAgICBjYXNlIFwidmFwZVwiOlxyXG4gICAgY2FzZSBcIndhcm5pbmdcIjpcclxuICAgIGNhc2UgXCJkZWZhdWx0XCI6XHJcbiAgICAgIHJldHVybiBjb2xvcjtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBhc3NlcnROZXZlcihjb2xvcik7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQnJhbmRCdXR0b24gPSAoXHJcbiAgeyBjaGlsZHJlbiwgdmFyaWFudCA9IFwiY29udGFpbmVkXCIsIGNsYXNzTmFtZSwgY29sb3IsIHNpemUsIC4uLm90aGVyIH06XHJcbiAgICBQcm9wc1dpdGhDaGlsZHJlbjxcclxuICAgICAgQnV0dG9uU3R5bGVzXHJcbiAgICA+LFxyXG4pID0+IHtcclxuICBjb25zdCBkZWZhdWx0Q29sb3IgPSBzd2l0Y2hDb2xvclRvUmVndWxhcihjb2xvcik7XHJcbiAgY29uc3QgY3VzdG9tQ29sb3IgPSBzd2l0Y2hDb2xvclRvQ3VzdG9tKGNvbG9yKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlQnV0dG9uU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiA8QnV0dG9uXHJcbiAgICBjb2xvcj17ZGVmYXVsdENvbG9yfVxyXG4gICAgdmFyaWFudD17dmFyaWFudH1cclxuICAgIHNpemU9e3NpemUgPT09IFwiZGVmYXVsdFwiID8gdW5kZWZpbmVkIDogc2l6ZX1cclxuICAgIHsuLi5vdGhlcn1cclxuICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgW3sgW2NsYXNzZXNbY3VzdG9tQ29sb3IgfHwgXCJkZWZhdWx0XCJdXTogY3VzdG9tQ29sb3IgfV0sXHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICl9XHJcbiAgPlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvQnV0dG9uPjtcclxufTtcclxuIiwiZXhwb3J0IHsgV0J1dHRvbiwgV0ljb25CdXR0b24gfSBmcm9tIFwiLi9XQnV0dG9uXCI7XHJcbmV4cG9ydCB7IEltYWdlQnV0dG9uIH0gZnJvbSBcIi4vSW1hZ2VCdXR0b25cIjtcclxuZXhwb3J0IHsgQnJhbmRCdXR0b24gfSBmcm9tIFwiLi9CcmFuZEJ1dHRvblwiO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRoZW1lLCBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b25CYXNlLCB7IEJ1dHRvbkJhc2VQcm9wcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcblxyXG5jb25zdCBCT1JERVJfUkFESU9VUyA9IDI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgbWluV2lkdGg6IDMwMCxcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IEJPUkRFUl9SQURJT1VTLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIGhlaWdodDogMjAwLFxyXG5cclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIiwgLy8gT3ZlcnJpZGVzIGlubGluZS1zdHlsZVxyXG4gICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICB9LFxyXG4gICAgICBcIiY6aG92ZXIsICYkZm9jdXNWaXNpYmxlXCI6IHtcclxuICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgXCImICRpbWFnZUJhY2tkcm9wXCI6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuMTUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIiYgJGltYWdlTWFya2VkXCI6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIiYgJGltYWdlVGl0bGVcIjoge1xyXG4gICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYigyNTUgMjU1IDI1NSAvIDkzJSlcIixcclxuICAgICAgICAgIGJvcmRlcjogXCIzcHggc29saWQgY3VycmVudENvbG9yXCIsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJvcGFjaXR5XCIpLFxyXG4gICAgICAgICAgLy8gZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAvLyBib3JkZXI6IFwiNHB4IHNvbGlkIHJnYmEoNDAsIDQwLCA0MCw4NCUpXCIsXHJcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBcInJnYmEoNDAsIDQwLCA0MCw4NCUpXCIsXHJcbiAgICAgICAgICAvLyBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvY3VzVmlzaWJsZToge30sXHJcbiAgICBpbWFnZUJ1dHRvbjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cclxuICAgICAgbGVmdDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgICBpbWFnZVNyYzoge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBib3R0b206IDAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogQk9SREVSX1JBRElPVVMsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgIC8vICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciA0MCVcIixcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciAwXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGltYWdlQmFja2Ryb3A6IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgICAgb3BhY2l0eTogMC40LFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJvcGFjaXR5XCIpLFxyXG4gICAgfSxcclxuICAgIGltYWdlVGl0bGU6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZygyKX1weCAke3RoZW1lLnNwYWNpbmcoNCl9cHggJHt0aGVtZS5zcGFjaW5nKDEpICtcclxuICAgICAgICA2fXB4YCxcclxuICAgIH0sXHJcbiAgICBpbWFnZU1hcmtlZDoge1xyXG4gICAgICBoZWlnaHQ6IDMsXHJcbiAgICAgIHdpZHRoOiAxOCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgYm90dG9tOiAtMixcclxuICAgICAgbGVmdDogXCJjYWxjKDUwJSAtIDlweClcIixcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwib3BhY2l0eVwiKSxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmludGVyZmFjZSBJbWFnZUJ1dHRvblByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgbWluSGVpZ2h0PzogbnVtYmVyO1xyXG4gIGJ1dHRvbVByb3BzPzogQnV0dG9uQmFzZVByb3BzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSW1hZ2VCdXR0b24oXHJcbiAgeyB0aXRsZSwgd2lkdGgsIHVybCwgbWluSGVpZ2h0ID0gMjUwLCBidXR0b21Qcm9wcyA9IHt9IH06IEltYWdlQnV0dG9uUHJvcHMsXHJcbikge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIDxCdXR0b25CYXNlXHJcbiAgICBmb2N1c1JpcHBsZVxyXG4gICAga2V5PXt0aXRsZX1cclxuICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cclxuICAgIGZvY3VzVmlzaWJsZUNsYXNzTmFtZT17Y2xhc3Nlcy5mb2N1c1Zpc2libGV9XHJcbiAgICBzdHlsZT17e1xyXG4gICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgIG1pbkhlaWdodDogbWluSGVpZ2h0LFxyXG4gICAgfX1cclxuICAgIHsuLi5idXR0b21Qcm9wc31cclxuICA+XHJcbiAgICA8c3BhblxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VTcmN9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7dXJsfSlgLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUJhY2tkcm9wfSAvPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQnV0dG9ufT5cclxuICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVRpdGxlfVxyXG4gICAgICA+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZU1hcmtlZH0gLz5cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvQnV0dG9uQmFzZT47XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIHdpdGhTdHlsZXMsXHJcbiAgQ3JlYXRlQ1NTUHJvcGVydGllcyxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xyXG5pbXBvcnQgTXVpQnV0dG9uLCB7XHJcbiAgQnV0dG9uUHJvcHMsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgTXVpSWNvbkJ1dHRvbSwgeyBJY29uQnV0dG9uUHJvcHMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFBhbGV0dGVDb2xvcktleXMgPVxyXG4gIHwgXCJwcmltYXJ5XCJcclxuICB8IFwic2Vjb25kYXJ5XCJcclxuICB8IFwiZXJyb3JcIlxyXG4gIHwgXCJ3YXJuaW5nXCJcclxuICB8IFwidGVydGlhcnlcIlxyXG4gIHwgXCJzdWNjZXNzXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRPdmVycmlkZXNDb2xvcihcclxuICBjb2xvcktleTogUGFsZXR0ZUNvbG9yS2V5cyxcclxuICB2YXJpYW50OiBcInRleHRcIiB8IFwib3V0bGluZWRcIiB8IFwiY29udGFpbmVkXCIsXHJcbiAgdGhlbWU6IFRoZW1lLFxyXG4pOiBDcmVhdGVDU1NQcm9wZXJ0aWVzIHtcclxuICByZXR1cm4ge1xyXG4gICAgY29sb3I6IHRoZW1lXHJcbiAgICAgIC5wYWxldHRlW2NvbG9yS2V5XVt2YXJpYW50ID09PSBcImNvbnRhaW5lZFwiID8gXCJjb250cmFzdFRleHRcIiA6IFwibWFpblwiXSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPdmVycmlkZXNCYWNrZ3JvdW5kQ29udGFpbmVkKFxyXG4gIGNvbG9yS2V5OiBQYWxldHRlQ29sb3JLZXlzLFxyXG4gIHRoZW1lOiBUaGVtZSxcclxuKTogQ3JlYXRlQ1NTUHJvcGVydGllcyB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZVtjb2xvcktleV0ubWFpbixcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZVtjb2xvcktleV0uZGFyayxcclxuICAgICAgLy8gUmVzZXQgb24gdG91Y2ggZGV2aWNlcywgaXQgZG9lc24ndCBhZGQgc3BlY2lmaWNpdHlcclxuICAgICAgXCJAbWVkaWEgKGhvdmVyOiBub25lKVwiOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlW2NvbG9yS2V5XS5tYWluLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBXQnV0dG9uOiBSZWFjdC5Db21wb25lbnRUeXBlPEJ1dHRvblByb3BzPiA9IHdpdGhTdHlsZXMoKFxyXG4gIHRoZW1lOiBUaGVtZSxcclxuKSA9PiAoe1xyXG4gIHJvb3Q6IChwcm9wczogQnV0dG9uUHJvcHMpID0+XHJcbiAgICBwcm9wcy52YXJpYW50ID09PSBcImNvbnRhaW5lZFwiICYmIHByb3BzLmNvbG9yICYmXHJcbiAgICBwcm9wcy5jb2xvciAhPT0gXCJpbmhlcml0XCIgJiYgcHJvcHMuY29sb3IgIT09IFwiZGVmYXVsdFwiXHJcbiAgICAgID8ge1xyXG4gICAgICAgIC4uLmdldE92ZXJyaWRlc0NvbG9yKHByb3BzLmNvbG9yLCBwcm9wcy52YXJpYW50LCB0aGVtZSksXHJcbiAgICAgICAgLi4uZ2V0T3ZlcnJpZGVzQmFja2dyb3VuZENvbnRhaW5lZChwcm9wcy5jb2xvciwgdGhlbWUpLFxyXG4gICAgICB9XHJcbiAgICAgIDogKHByb3BzLnZhcmlhbnQgPT09IFwib3V0bGluZWRcIiB8fCBwcm9wcy52YXJpYW50ID09PSBcInRleHRcIikgJiZcclxuICAgICAgICBwcm9wcy5jb2xvciAmJlxyXG4gICAgICAgIHByb3BzLmNvbG9yICE9PSBcImluaGVyaXRcIiAmJiBwcm9wcy5jb2xvciAhPT0gXCJkZWZhdWx0XCJcclxuICAgICAgPyB7IC4uLmdldE92ZXJyaWRlc0NvbG9yKHByb3BzLmNvbG9yLCBwcm9wcy52YXJpYW50LCB0aGVtZSkgfVxyXG4gICAgICA6IHt9LFxyXG59KSkoTXVpQnV0dG9uKTtcclxuXHJcbmNvbnN0IFdJY29uQnV0dG9uOiBSZWFjdC5Db21wb25lbnRUeXBlPEljb25CdXR0b25Qcm9wcz4gPSB3aXRoU3R5bGVzKChcclxuICB0aGVtZTogVGhlbWUsXHJcbikgPT4gKHtcclxuICByb290OiAocHJvcHM6IEljb25CdXR0b25Qcm9wcykgPT5cclxuICAgIHByb3BzLmNvbG9yICYmXHJcbiAgICBwcm9wcy5jb2xvciAhPT0gXCJpbmhlcml0XCIgJiYgcHJvcHMuY29sb3IgIT09IFwiZGVmYXVsdFwiXHJcbiAgICAgID8ge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlW3Byb3BzLmNvbG9yXS5tYWluLFxyXG4gICAgICAgIFtcIiY6ZGlzYWJsZWRcIl06IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtcIiY6aG92ZXJcIl06IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlW3Byb3BzLmNvbG9yXS5kYXJrLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICAgOiB7fSxcclxufSkpKE11aUljb25CdXR0b20pO1xyXG5cclxuZXhwb3J0IHsgV0J1dHRvbiwgV0ljb25CdXR0b24gfTtcclxuIiwiaW1wb3J0IHsgY29tbW9uLCBncmVlbiwgcmVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG5pbXBvcnQgcHJpbWFyeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2JsdWVHcmV5XCI7XHJcbmltcG9ydCBzZWNvbmRhcnkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy90ZWFsXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlTXVpVGhlbWUsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBEZWZhdWx0VGhlbWUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuLy8gZXhwb3J0IGNvbnN0IFNFQ09OREFSWV9DT0xPUiA9IHNlY29uZGFyeVs1MDBdO1xyXG5leHBvcnQgY29uc3QgU0VDT05EQVJZX0NPTE9SID0gc2Vjb25kYXJ5WzQwMF07XHJcbmV4cG9ydCBjb25zdCBTRUNPTkRBUllfQ09MT1JfQ09OVFJBU1QgPSBjb21tb25bXCJ3aGl0ZVwiXTtcclxuZXhwb3J0IGxldCBQUklNQVJZX0NPTE9SOiBzdHJpbmcgPSBwcmltYXJ5WzkwMF07XHJcbmV4cG9ydCBjb25zdCBUT09MQkFSX01JTl9IRUlHSFQgPSAxNTtcclxuZXhwb3J0IGNvbnN0IFBSSU1BUllfQ09MT1JfQ09OVFJBU1QgPSBjb21tb25bXCJ3aGl0ZVwiXTtcclxuZXhwb3J0IGNvbnN0IERBUktfQ09MT1IgPSBcIiMwNDBjMTRcIjtcclxuZXhwb3J0IGNvbnN0IExJR0hUX0NPTE9SID0gY29tbW9uW1wid2hpdGVcIl07XHJcbmV4cG9ydCBjb25zdCBURVJUSUFSWV9DT0xPUiA9IFwiI2M0NzA3MFwiO1xyXG5leHBvcnQgY29uc3QgVEVSVElBUllfQ09MT1JfQ09OVFJBU1QgPSBjb21tb25bXCJ3aGl0ZVwiXTtcclxuXHJcbmNvbnN0IEJPUkRFUl9SQURJT1VTID0gNDtcclxuXHJcbi8vQ29vbCBHcmVlbiAvIzM4YjU4NFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaGVtZShwcmVmZXJzRGFya01vZGUgPSBmYWxzZSkge1xyXG4gIC8vIFBSSU1BUllfQ09MT1IgPSBwcmVmZXJzRGFya01vZGUgPyBcIiMzMTlkZGZcIiA6IHByaW1hcnlbOTAwXTtcclxuICBQUklNQVJZX0NPTE9SID0gcHJlZmVyc0RhcmtNb2RlID8gXCIjMDQwYzE0XCIgOiBwcmltYXJ5WzkwMF07XHJcblxyXG4gIGNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gICAgc3RhdHVzOiB7XHJcbiAgICAgIGRhbmdlcjogcmVkWzUwMF0sXHJcbiAgICB9LFxyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICB0eXBlOiBwcmVmZXJzRGFya01vZGUgPyBcImRhcmtcIiA6IFwibGlnaHRcIixcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIG1haW46IFBSSU1BUllfQ09MT1IsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiBQUklNQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBtYWluOiBTRUNPTkRBUllfQ09MT1IsXHJcblxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogU0VDT05EQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgICB9LFxyXG4gICAgICB0ZXJ0aWFyeToge1xyXG4gICAgICAgIG1haW46IFRFUlRJQVJZX0NPTE9SLFxyXG4gICAgICAgIGRhcms6IFwiIzkxNDM0NVwiLFxyXG4gICAgICAgIGxpZ2h0OiBcIiNmOWEwOWVcIixcclxuICAgICAgICBjb250cmFzdFRleHQ6IFRFUlRJQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiB7XHJcbiAgICAgICAgLi4uZ3JlZW4sXHJcbiAgICAgICAgbWFpbjogXCIjNjg5ZjM4XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICAvLyBkZWZhdWx0OiBcIiMzMDMwMzBcIixcclxuICAgICAgICBkZWZhdWx0OiBwcmVmZXJzRGFya01vZGUgPyBcIiMyNzI1MjVcIiA6IFwiI2ZmZlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNoYXBlOiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogQk9SREVSX1JBRElPVVMsXHJcbiAgICB9LFxyXG4gICAgc3BhY2luZzogMTYsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBNdWlQYXBlcjoge1xyXG4gICAgICAgIGVsZXZhdGlvbjogMyxcclxuICAgICAgfSxcclxuICAgICAgTXVpVGV4dEZpZWxkOiB7XHJcbiAgICAgICAgSW5wdXRMYWJlbFByb3BzOiB7XHJcbiAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpQnV0dG9uOiB7XHJcbiAgICAgICAgZGlzYWJsZVJpcHBsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgTXVpQ2hlY2tib3g6IHtcclxuICAgICAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG92ZXJyaWRlczoge1xyXG4gICAgICBNdWlQYXBlcjoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGNvbG9yOiBwcmVmZXJzRGFya01vZGUgPyBcIiNkMmQyZDJcIiA6IGNvbW1vbltcIndoaXRlXCJdLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcmVmZXJzRGFya01vZGUgPyBcIiMyYzJjMmNcIiA6IFwiIzMwMzAzMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aU1vYmlsZVN0ZXBwZXI6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uQm90dG9tOiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUFwcEJhcjoge1xyXG4gICAgICAgIHBvc2l0aW9uRml4ZWQ6IHtcclxuICAgICAgICAgIHpJbmRleDogMTEwMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlUb29sYmFyOiB7XHJcbiAgICAgICAgZ3V0dGVyczoge1xyXG4gICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiA2MDBweClcIjoge1xyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWd1bGFyOiB7XHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KVwiOiB7XHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgXCJAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpXCI6IHtcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUZpbGxlZElucHV0OiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpSW5wdXRMYWJlbDoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUJ1dHRvbjoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5ID0gdGhlbWUucGFsZXR0ZS5hdWdtZW50Q29sb3Ioe1xyXG4gICAgbWFpbjogXCIjYzQ3MDcwXCIsXHJcbiAgICBkYXJrOiBcIiM5MTQzNDVcIixcclxuICAgIGxpZ2h0OiBcIiNmOWEwOWVcIixcclxuICAgIGNvbnRyYXN0VGV4dDogUFJJTUFSWV9DT0xPUl9DT05UUkFTVCxcclxuICB9KTtcclxuICByZXR1cm4gdGhlbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdHlsZWRDb21wb25lbnRzVGhlbWU6IERlZmF1bHRUaGVtZSA9IHtcclxuICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgY29sb3JzOiB7XHJcbiAgICBwcmltYXJ5OiBQUklNQVJZX0NPTE9SLFxyXG4gICAgcHJpbWFyeUNvbnRyYXN0OiBQUklNQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgc2Vjb25kYXJ5OiBTRUNPTkRBUllfQ09MT1IsXHJcbiAgICBzZWNvbmRhcnlDb250cmFzdDogU0VDT05EQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgZGFyazogREFSS19DT0xPUixcclxuICAgIGxpZ2h0OiBMSUdIVF9DT0xPUixcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgIH0sXHJcbiAgICBub1BhZGRpbmdYOiB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAwLFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6IDAsXHJcbiAgICB9LFxyXG4gICAgbWluUGFkZGluZ1g6IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMC41KSxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDAuNSksXHJcbiAgICB9LFxyXG4gICAgZmxleENlbnRlcjoge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgY29uc3RyYWluZWRTZWN0aW9uOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMub25seShcIm1kXCIpXToge1xyXG4gICAgICAgIC8vIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgLy8gcmlnaHQ6IDAsXHJcbiAgICAgICAgbWluV2lkdGg6IHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy5tZCArIDIwLFxyXG4gICAgICAgIGNvbG9yOiBcInllbGxvd1wiLFxyXG4gICAgICAgIG1heFdpZHRoOiB0aGVtZS5icmVha3BvaW50cy52YWx1ZXMubWQgLSAyNDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcImxnXCIpXToge1xyXG4gICAgICAgIG1heFdpZHRoOiB0aGVtZS5icmVha3BvaW50cy52YWx1ZXMubGcgLSAyNDAsXHJcbiAgICAgICAgbWluV2lkdGg6IHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy5sZyArIDIwLFxyXG4gICAgICAgIGNvbG9yOiBcImJsdWVcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==