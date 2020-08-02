webpackHotUpdate("static\\development\\pages\\index.js",{

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

/***/ "./src/components/custom-icons/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/custom-icons/index.tsx ***!
  \***********************************************/
/*! exports provided: experiences, education */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experiences", function() { return experiences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "education", function() { return education; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _TypescriptIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TypescriptIcon */ "./src/components/custom-icons/TypescriptIcon.tsx");
/* harmony import */ var _GraphQLIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GraphQLIcon */ "./src/components/custom-icons/GraphQLIcon.tsx");
/* harmony import */ var _root_theme_getTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @root/theme/getTheme */ "./src/theme/getTheme.ts");
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\custom-icons\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ExpIcon = __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaBriefcase"], {
  color: "#00796b",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 17
  }
});

const experiences = [{
  Icon: ExpIcon,
  label: "Web Production QA Analyst",
  location: "Century 21 Stores",
  isCurrent: false
}, {
  Icon: ExpIcon,
  label: "Suppor Center Specialist",
  location: "Century 21 Stores",
  isCurrent: false
}, {
  Icon: ExpIcon,
  label: "Mission Control Specialist",
  location: "Teleperformance",
  isCurrent: false
}, {
  Icon: ExpIcon,
  label: "Customer Service Representative",
  location: "Teleperformance",
  isCurrent: false
}, {
  Icon: ExpIcon,
  label: "Call Center QA Analyst",
  location: "BM Teleservices",
  isCurrent: false
}];
const SIZE = "24px";
const education = [{
  Icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaReact"], {
    style: {
      fill: "#61dafb"
    },
    size: SIZE,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }),
  label: "React"
}, {
  Icon: __jsx(_TypescriptIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sizeInPx: SIZE,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }),
  label: "Typescript"
}, {
  Icon: __jsx(_GraphQLIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sizeInPx: SIZE,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }),
  label: "GraphQL"
}, {
  Icon: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoLogoNodejs"], {
    size: SIZE,
    color: "#215732",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }),
  label: "NodeJS with Express and MongoDB"
}, {
  Icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaUniversalAccess"], {
    size: SIZE,
    color: _root_theme_getTheme__WEBPACK_IMPORTED_MODULE_5__["SECONDARY_COLOR"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }),
  label: "Web Accessibility"
}, {
  Icon: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoLogoJavascript"], {
    size: SIZE,
    color: "#ffe302",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }),
  label: "Javascript"
}, {
  Icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaJira"], {
    size: SIZE,
    color: "#172B4D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }),
  label: "Confluence Jira"
}, {
  Icon: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoLogoSass"], {
    size: SIZE,
    color: "#c69",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }),
  label: "SASS / CSS3"
}, {
  Icon: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoLogoHtml5"], {
    size: SIZE,
    color: "e34f26",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }),
  label: "HTML 5"
}, {
  Icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaSalesforce"], {
    size: SIZE,
    color: "#009EDB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }),
  label: "Salesforce Commerce Cloud"
}, {
  Icon: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoMdCalendar"], {
    size: SIZE,
    color: _root_theme_getTheme__WEBPACK_IMPORTED_MODULE_5__["SECONDARY_COLOR"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }),
  label: "Workforce Management"
}, {
  Icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaMicrosoft"], {
    size: SIZE,
    color: "#F25022",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }),
  label: "Microsoft Office, Excel VBA"
}, {
  Icon: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoMdChatboxes"], {
    size: SIZE,
    color: _root_theme_getTheme__WEBPACK_IMPORTED_MODULE_5__["SECONDARY_COLOR"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }),
  label: "Bilingual (English, Spanish)"
}];

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

/***/ "./src/components/home/HomeProjectGrid.tsx":
/*!*************************************************!*\
  !*** ./src/components/home/HomeProjectGrid.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/shared */ "./src/components/shared/index.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _root_theme_Custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @root/theme/Custom */ "./src/theme/Custom.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _projects_ProjectsArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects/ProjectsArray */ "./src/components/projects/ProjectsArray.ts");
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\home\\HomeProjectGrid.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





// const PArray = ProjectsArray.slice(0, 2);
const PArray = _projects_ProjectsArray__WEBPACK_IMPORTED_MODULE_4__["default"];

const HomeProjectGrid = props => {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    py: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    alignContent: "center",
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, PArray.map((proj, index) => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      key: `project-grid-${proj.name}-${index}`,
      item: true,
      xs: 12,
      sm: "auto",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 18
      }
    }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_0__["DividerElement"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, proj.name), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      mb: 1,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }), __jsx(_root_theme_Custom__WEBPACK_IMPORTED_MODULE_2__["ImageButton"], {
      title: proj.title,
      url: proj.images[0].imgPath,
      width: 500,
      minHeight: 700,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }));
  })));
};

_c = HomeProjectGrid;
/* harmony default export */ __webpack_exports__["default"] = (HomeProjectGrid);

var _c;

$RefreshReg$(_c, "HomeProjectGrid");

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

/***/ "./src/components/home/HomepageLayout.tsx":
/*!************************************************!*\
  !*** ./src/components/home/HomepageLayout.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/shared */ "./src/components/shared/index.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _root_context_PagesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @root/context/PagesContext */ "./src/context/PagesContext.tsx");
/* harmony import */ var _root_theme_useSharedStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @root/theme/useSharedStyles */ "./src/theme/useSharedStyles.ts");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _custom_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../custom-icons */ "./src/components/custom-icons/index.tsx");
/* harmony import */ var _partials_HomepageHeading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../partials/HomepageHeading */ "./src/components/partials/HomepageHeading.tsx");
/* harmony import */ var _HomeProjectGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HomeProjectGrid */ "./src/components/home/HomeProjectGrid.tsx");
/* harmony import */ var _ShowCaseProjectButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShowCaseProjectButton */ "./src/components/home/ShowCaseProjectButton.tsx");



var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\home\\HomepageLayout.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
// import SocialMediaEmbeds from "./partials/SocialMediaEmbeds";











const StyledItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "HomepageLayout__StyledItem",
  componentId: "sc-18ypig9-0"
})(["padding-top:0;padding-bottom:6px;display:flex;justify-content:flex-start;align-items:center;text-align:left;font-size:1.5rem;border-bottom:1px solid #dcd5d5;"]);
_c = StyledItem;
const SummaryLi = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "HomepageLayout__SummaryLi",
  componentId: "sc-18ypig9-1"
})(["padding-top:2px;padding-bottom:2px;padding-left:12px;text-align:start;font-size:1.16rem;&::before{content:\"\u2022 \";}"]);
_c2 = SummaryLi;
const ExperienceSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "HomepageLayout__ExperienceSection",
  componentId: "sc-18ypig9-2"
})(["display:flex;flex-direction:column;align-items:center;"]);
_c3 = ExperienceSection;
const Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"]).withConfig({
  displayName: "HomepageLayout__Title",
  componentId: "sc-18ypig9-3"
})(["text-decoration:underline;margin-bottom:30px !important;"]);
_c4 = Title;
const SectionGridStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"]).withConfig({
  displayName: "HomepageLayout__SectionGridStyled",
  componentId: "sc-18ypig9-4"
})(["margin-top:50px !important;margin-bottom:50px !important;"]);
_c5 = SectionGridStyled;
const SUMMARY_TEXTS = ["Proficient knowledge of HTML 5, CSS 3, JavaScript.", "Experieced with MS Excel.", "Excellent communication skills, organization skills, and excellent attention to detail.", "Proficient knowledge of accessibility standards (Section 508/WCAG 2.0 Level A and AA).", "Good understanding of assistive technologies (JAWS, NVDA, VoiceOver).", "6 years of call center and Workforce Management experience.", "Proficient experience in QA testing methodology.", "Proven ability to document issues and bugs."];

var _StyledBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "HomepageLayout___StyledBox",
  componentId: "sc-18ypig9-5"
})({
  marginTop: 50
});

var _StyledBox2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "HomepageLayout___StyledBox2",
  componentId: "sc-18ypig9-6"
})({
  marginTop: 25
});

const HomepageLayout = () => {
  _s();

  const {
    changePage
  } = Object(_root_context_PagesContext__WEBPACK_IMPORTED_MODULE_3__["usePagesContext"])();
  const prefersDarkMode = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])("(prefers-color-scheme: dark)");
  const classes = Object(_root_theme_useSharedStyles__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    changePage("Home");
  }, [changePage]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);

  const summary = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    maxWidth: "md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    style: {
      fontSize: "1.1em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, SUMMARY_TEXTS.map(text => {
    return __jsx(SummaryLi, {
      key: text,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 20
      }
    }, text);
  }))));

  const educationList = _custom_icons__WEBPACK_IMPORTED_MODULE_7__["education"].map(({
    label,
    Icon
  }, index) => {
    return __jsx(StyledItem, {
      key: label + "-" + index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 7
      }
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
      whileTap: {
        scale: 1.2
      },
      whileHover: {
        scale: 1.3
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "subtitle1",
      component: "h3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }
    }, Icon, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 15
      }
    }, " "), label))));
  });
  const experienceList = _custom_icons__WEBPACK_IMPORTED_MODULE_7__["experiences"].map(({
    Icon,
    isCurrent,
    label,
    location
  }) => {
    return __jsx("li", {
      key: label,
      className: "mb-1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }
    }, __jsx(ExperienceSection, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }
    }, Icon, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "h6",
      component: "h3",
      style: {
        color: isCurrent ? "blue" : prefersDarkMode ? "#c8c8c8" : "#fcfcfc"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 15
      }
    }, label, isCurrent && "(Actual)")), __jsx("em", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 13
      }
    }, location)));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 5
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_1__["PrimaryBackgroundSection"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  }, __jsx(_partials_HomepageHeading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    square: true,
    elevation: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 0,
    direction: "row",
    justify: "flex-start",
    alignItems: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    direction: "row",
    justify: "space-around",
    alignItems: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }, __jsx(SectionGridStyled, {
    item: true,
    xs: 12,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }, __jsx(Title, {
    variant: "h4",
    component: "h2",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 15
    }
  }, "Experiences"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 15
    }
  }, experienceList), " "), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 10,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
    xsDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 15
    }
  }, __jsx(_StyledBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 17
    }
  })), __jsx(Title, {
    variant: "h4",
    component: "h2",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 15
    }
  }, "Skills"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 15
    }
  }, educationList))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    classes: {
      root: classes.minPaddingX
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 13
    }
  }, __jsx(_StyledBox2, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 15
    }
  }), summary)))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    pb: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    square: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    pt: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 9
    }
  }), __jsx(_ShowCaseProjectButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    variant: "outlined",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    id: "projects",
    classes: {
      root: classes.minPaddingX
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 9
    }
  }, __jsx(_HomeProjectGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 11
    }
  }))));
};

_s(HomepageLayout, "Defjq1P8+oVxXof664iti7j+4z8=", false, function () {
  return [_root_context_PagesContext__WEBPACK_IMPORTED_MODULE_3__["usePagesContext"], _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"], _root_theme_useSharedStyles__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

_c6 = HomepageLayout;
/* harmony default export */ __webpack_exports__["default"] = (HomepageLayout);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "StyledItem");
$RefreshReg$(_c2, "SummaryLi");
$RefreshReg$(_c3, "ExperienceSection");
$RefreshReg$(_c4, "Title");
$RefreshReg$(_c5, "SectionGridStyled");
$RefreshReg$(_c6, "HomepageLayout");

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

/***/ "./src/components/home/ShowCaseProjectButton.tsx":
/*!*******************************************************!*\
  !*** ./src/components/home/ShowCaseProjectButton.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/shared */ "./src/components/shared/index.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _root_theme_Custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @root/theme/Custom */ "./src/theme/Custom.tsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\home\\ShowCaseProjectButton.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;







const ShowCaseProjectButton = ({
  color = "default",
  size = "large",
  variant
}) => {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "center",
    style: {
      marginTop: 25,
      marginBottom: 25
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    whileHover: {
      scale: 1.3
    },
    whileTap: {
      scale: 1.3
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(_root_theme_Custom__WEBPACK_IMPORTED_MODULE_2__["BrandButton"], {
    color: color,
    size: size,
    variant: variant,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_0__["NonStyledAnchor"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Showcase Projects".toUpperCase())))));
};

_c = ShowCaseProjectButton;
/* harmony default export */ __webpack_exports__["default"] = (ShowCaseProjectButton);

var _c;

$RefreshReg$(_c, "ShowCaseProjectButton");

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

/***/ "./src/components/shared/ScaleUpDownComponent.tsx":
/*!********************************************************!*\
  !*** ./src/components/shared/ScaleUpDownComponent.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_theme_getTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @root/theme/getTheme */ "./src/theme/getTheme.ts");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\shared\\ScaleUpDownComponent.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const scaleTransition = {
  scale: {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeOut" // repeatDelay: 0.5,

  },
  backgroundColor: {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.5
  }
};

const ScaleUpDownComponent = ({
  backgrounds = [_root_theme_getTheme__WEBPACK_IMPORTED_MODULE_0__["TERTIARY_COLOR"], _root_theme_getTheme__WEBPACK_IMPORTED_MODULE_0__["SECONDARY_COLOR"]],
  scaleTo = 1,
  children
}) => {
  let animate = {
    scale: [0.9, scaleTo]
  };

  if (backgrounds.length > 0) {
    animate.backgroundColor = backgrounds;
  }

  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    style: {
      marginTop: 20,
      marginBottom: 20,
      borderRadius: 6
    },
    transition: scaleTransition,
    animate: animate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, children);
};

_c = ScaleUpDownComponent;
/* harmony default export */ __webpack_exports__["default"] = (ScaleUpDownComponent);

var _c;

$RefreshReg$(_c, "ScaleUpDownComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU2lkZURyYXdlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY3VzdG9tLWljb25zL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL0hvbWVQcm9qZWN0R3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Ib21lcGFnZUxheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9TaG93Q2FzZVByb2plY3RCdXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhcnRpYWxzL1NpdGVGb290ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9TY2FsZVVwRG93bkNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL1N0eWxlZExpbmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lL0JyYW5kQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvQ3VzdG9tLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvSW1hZ2VCdXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy90aGVtZS9XQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvZ2V0VGhlbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lL3VzZVNoYXJlZFN0eWxlcy50cyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJsaXN0Iiwid2lkdGgiLCJmdWxsTGlzdCIsIm1lbnVCdXR0b24iLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsInpJbmRleCIsIlN0eWxlZE5hdkxpbmsiLCJzdHlsZWQiLCJhIiwicHJvcHMiLCJpc0FjdGl2ZSIsIlNFQ09OREFSWV9DT0xPUiIsInZhcmlhbnRzIiwib3BlbiIsIm9wYWNpdHkiLCJ4IiwiY2xvc2VkIiwibGlzdEl0ZW1WYXJpYW50cyIsInkiLCJTaWRlRHJhd2VyIiwiYW5jaG9yIiwiY2xhc3NlcyIsInJvdXRlciIsInVzZVJvdXRlciIsInN0YXRlIiwic2V0U3RhdGUiLCJSZWFjdCIsInVzZVN0YXRlIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwidG9nZ2xlRHJhd2VyIiwiZXZlbnQiLCJ0eXBlIiwia2V5IiwiY2xzeCIsIk5BVl9MSU5LUyIsIm1hcCIsInRleHQiLCJocmVmIiwiSWNvbiIsImluZGV4IiwicGF0aG5hbWUiLCJjb2xvciIsIlNPQ0lBTF9MSU5LUyIsImlzT3BlbiIsInN0eWxlIiwidGltZW91dCIsImV4aXQiLCJlbnRlciIsIkV4cEljb24iLCJleHBlcmllbmNlcyIsImxhYmVsIiwibG9jYXRpb24iLCJpc0N1cnJlbnQiLCJTSVpFIiwiZWR1Y2F0aW9uIiwiZmlsbCIsIlBBcnJheSIsIlByb2plY3RzQXJyYXkiLCJIb21lUHJvamVjdEdyaWQiLCJwcm9qIiwibmFtZSIsInRpdGxlIiwiaW1hZ2VzIiwiaW1nUGF0aCIsIlN0eWxlZEl0ZW0iLCJsaSIsIlN1bW1hcnlMaSIsIkV4cGVyaWVuY2VTZWN0aW9uIiwic2VjdGlvbiIsIlRpdGxlIiwiVHlwb2dyYXBoeSIsIlNlY3Rpb25HcmlkU3R5bGVkIiwiR3JpZCIsIlNVTU1BUllfVEVYVFMiLCJtYXJnaW5Ub3AiLCJIb21lcGFnZUxheW91dCIsImNoYW5nZVBhZ2UiLCJ1c2VQYWdlc0NvbnRleHQiLCJwcmVmZXJzRGFya01vZGUiLCJ1c2VNZWRpYVF1ZXJ5IiwidXNlU2hhcmVkU3R5bGVzIiwidXNlRWZmZWN0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsInN1bW1hcnkiLCJmb250U2l6ZSIsImVkdWNhdGlvbkxpc3QiLCJzY2FsZSIsImV4cGVyaWVuY2VMaXN0Iiwicm9vdCIsIm1pblBhZGRpbmdYIiwiU2hvd0Nhc2VQcm9qZWN0QnV0dG9uIiwic2l6ZSIsInZhcmlhbnQiLCJtYXJnaW5Cb3R0b20iLCJ0b1VwcGVyQ2FzZSIsIkZvb3Rlck5hdkxpbmsiLCJOb25BY3RpdmVMaW5rIiwiU3R5bGVkSHRtbExpbmsiLCJTaXRlRm9vdGVyIiwicGFkZGluZyIsInNjYWxlVHJhbnNpdGlvbiIsImR1cmF0aW9uIiwieW95byIsIkluZmluaXR5IiwiZWFzZSIsImJhY2tncm91bmRDb2xvciIsInJlcGVhdERlbGF5IiwiU2NhbGVVcERvd25Db21wb25lbnQiLCJiYWNrZ3JvdW5kcyIsIlRFUlRJQVJZX0NPTE9SIiwic2NhbGVUbyIsImNoaWxkcmVuIiwiYW5pbWF0ZSIsImxlbmd0aCIsImJvcmRlclJhZGl1cyIsIk5vblN0eWxlZEFuY2hvciIsIlN0eWxlZExpbmsiLCJkZWZhdWx0IiwiYmx1ZSIsInByaW1hcnkiLCJwYWxldHRlIiwiY29udHJhc3RUZXh0Iiwic2Vjb25kYXJ5Iiwic3VjY2VzcyIsImVycm9yIiwid2FybmluZyIsInRlcnRpYXJ5IiwiZ2V0Q29udHJhc3RUZXh0IiwidmFwZSIsImV4cGVuc2UiLCJzaG9wIiwiY29sb3JIb3ZlciIsImRhcmsiLCJiZ3MiLCJtYWluIiwiYmdzSG92ZXIiLCJnZXRDb2xvckZvciIsIm1hdGNoQ29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwidXNlQnV0dG9uU3R5bGVzIiwiY3JlYXRlU3R5bGVzIiwic3dpdGNoQ29sb3JUb1JlZ3VsYXIiLCJ1bmRlZmluZWQiLCJhc3NlcnROZXZlciIsInN3aXRjaENvbG9yVG9DdXN0b20iLCJCcmFuZEJ1dHRvbiIsImNsYXNzTmFtZSIsIm90aGVyIiwiZGVmYXVsdENvbG9yIiwiY3VzdG9tQ29sb3IiLCJCT1JERVJfUkFESU9VUyIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImltYWdlIiwicG9zaXRpb24iLCJoZWlnaHQiLCJicmVha3BvaW50cyIsImRvd24iLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJmb2N1c1Zpc2libGUiLCJpbWFnZUJ1dHRvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImNvbW1vbiIsIndoaXRlIiwiaW1hZ2VTcmMiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImltYWdlQmFja2Ryb3AiLCJzaGFwZSIsImJsYWNrIiwiaW1hZ2VUaXRsZSIsInNwYWNpbmciLCJpbWFnZU1hcmtlZCIsIkltYWdlQnV0dG9uIiwidXJsIiwiYnV0dG9tUHJvcHMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJnZXRPdmVycmlkZXNDb2xvciIsImNvbG9yS2V5IiwiZ2V0T3ZlcnJpZGVzQmFja2dyb3VuZENvbnRhaW5lZCIsIldCdXR0b24iLCJ3aXRoU3R5bGVzIiwiTXVpQnV0dG9uIiwiV0ljb25CdXR0b24iLCJhY3Rpb24iLCJkaXNhYmxlZCIsImN1cnNvciIsIk11aUljb25CdXR0b20iLCJTRUNPTkRBUllfQ09MT1JfQ09OVFJBU1QiLCJQUklNQVJZX0NPTE9SIiwiVE9PTEJBUl9NSU5fSEVJR0hUIiwiUFJJTUFSWV9DT0xPUl9DT05UUkFTVCIsIkRBUktfQ09MT1IiLCJMSUdIVF9DT0xPUiIsIlRFUlRJQVJZX0NPTE9SX0NPTlRSQVNUIiwiZ2V0VGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInN0YXR1cyIsImRhbmdlciIsInJlZCIsImxpZ2h0IiwiZ3JlZW4iLCJNdWlQYXBlciIsImVsZXZhdGlvbiIsIk11aVRleHRGaWVsZCIsIklucHV0TGFiZWxQcm9wcyIsInNocmluayIsImRpc2FibGVSaXBwbGUiLCJNdWlDaGVja2JveCIsIm92ZXJyaWRlcyIsIk11aU1vYmlsZVN0ZXBwZXIiLCJwb3NpdGlvbkJvdHRvbSIsIk11aUFwcEJhciIsInBvc2l0aW9uRml4ZWQiLCJNdWlUb29sYmFyIiwiZ3V0dGVycyIsInJlZ3VsYXIiLCJNdWlGaWxsZWRJbnB1dCIsIk11aUlucHV0TGFiZWwiLCJ0ZXh0VHJhbnNmb3JtIiwiYXVnbWVudENvbG9yIiwic3R5bGVkQ29tcG9uZW50c1RoZW1lIiwiY29sb3JzIiwicHJpbWFyeUNvbnRyYXN0Iiwic2Vjb25kYXJ5Q29udHJhc3QiLCJub1BhZGRpbmdYIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJmbGV4Q2VudGVyIiwiY29uc3RyYWluZWRTZWN0aW9uIiwibWFyZ2luTGVmdCIsIm9ubHkiLCJ2YWx1ZXMiLCJtZCIsIm1heFdpZHRoIiwidXAiLCJsZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0EsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFFQyxLQUFELEtBQVk7QUFDdkNDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVBQUU7QUFESCxHQURpQztBQUl2Q0MsVUFBUSxFQUFFO0FBQ1JELFNBQUssRUFBRTtBQURDLEdBSjZCO0FBT3ZDRSxZQUFVLEVBQUU7QUFDVjtBQUNBO0FBQ0FDLGFBQVMsRUFBRSxFQUhEO0FBSVZDLFlBQVEsRUFBRSxFQUpBO0FBS1ZDLFVBQU0sRUFBRTtBQUxFO0FBUDJCLENBQVosQ0FBRCxDQUE1QjtBQWdCQSxNQUFNQyxhQUFhLEdBQUdDLDBEQUFNLENBQUNDLENBQVY7QUFBQTtBQUFBO0FBQUEsNkVBQ0xDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxRQUFOLEdBQWlCQyxxRUFBakIsR0FBbUMsU0FEeEMsRUFFQ0YsS0FBRCxJQUFXQSxLQUFLLENBQUNDLFFBQU4sR0FBaUIsTUFBakIsR0FBMEIsUUFGckMsRUFLSkMscUVBTEksQ0FBbkI7S0FBTUwsYTtBQWVOLE1BQU1NLFFBQVEsR0FBRztBQUNmQyxNQUFJLEVBQUU7QUFBRUMsV0FBTyxFQUFFLENBQVg7QUFBY0MsS0FBQyxFQUFFO0FBQWpCLEdBRFM7QUFFZkMsUUFBTSxFQUFFO0FBQUVGLFdBQU8sRUFBRSxDQUFYO0FBQWNDLEtBQUMsRUFBRTtBQUFqQjtBQUZPLENBQWpCO0FBS0Es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QVcsRUFBRTtBQUNYNkksZUFBVyxFQUFFN08sS0FBSyxDQUFDc0wsT0FBTixDQUFjLEdBQWQsQ0FERjtBQUVYd0QsZ0JBQVksRUFBRTlPLEtBQUssQ0FBQ3NMLE9BQU4sQ0FBYyxHQUFkO0FBRkgsR0FSRjtBQVlYeUQsWUFBVSxFQUFFO0FBQ1ZoRixXQUFPLEVBQUUsTUFEQztBQUVWYSxrQkFBYyxFQUFFLFFBRk47QUFHVkQsY0FBVSxFQUFFO0FBSEYsR0FaRDtBQWlCWHFFLG9CQUFrQixFQUFFO0FBQ2xCQyxjQUFVLEVBQUUsTUFETTtBQUVsQixLQUFDalAsS0FBSyxDQUFDb0ssV0FBTixDQUFrQjhFLElBQWxCLENBQXVCLElBQXZCLENBQUQsR0FBZ0M7QUFDOUI7QUFDQTtBQUNBNU8sY0FBUSxFQUFFTixLQUFLLENBQUNvSyxXQUFOLENBQWtCK0UsTUFBbEIsQ0FBeUJDLEVBQXpCLEdBQThCLEVBSFY7QUFJOUJ0TSxXQUFLLEVBQUUsUUFKdUI7QUFLOUJ1TSxjQUFRLEVBQUVyUCxLQUFLLENBQUNvSyxXQUFOLENBQWtCK0UsTUFBbEIsQ0FBeUJDLEVBQXpCLEdBQThCO0FBTFYsS0FGZDtBQVNsQixLQUFDcFAsS0FBSyxDQUFDb0ssV0FBTixDQUFrQmtGLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDNUJELGNBQVEsRUFBRXJQLEtBQUssQ0FBQ29LLFdBQU4sQ0FBa0IrRSxNQUFsQixDQUF5QkksRUFBekIsR0FBOEIsR0FEWjtBQUU1QmpQLGNBQVEsRUFBRU4sS0FBSyxDQUFDb0ssV0FBTixDQUFrQitFLE1BQWxCLENBQXlCSSxFQUF6QixHQUE4QixFQUZaO0FBRzVCek0sV0FBSyxFQUFFO0FBSHFCO0FBVFo7QUFqQlQsQ0FBRCxDQURXLENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5lZWNhMTBkNTNlNTg4MmVmYzMxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3R5bGVkSHRtbExpbmsgfSBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkXCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCI7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvblwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IERyYWdIYW5kbGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRHJhZ0hhbmRsZVwiO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCI7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIjtcclxuaW1wb3J0IHsgU0VDT05EQVJZX0NPTE9SIH0gZnJvbSBcIkByb290L3RoZW1lL2dldFRoZW1lXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBOYXZMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTkFWX0xJTktTLCBTT0NJQUxfTElOS1MgfSBmcm9tIFwiLi9uYXZsaW5rc1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgbGlzdDoge1xyXG4gICAgd2lkdGg6IDI1MCxcclxuICB9LFxyXG4gIGZ1bGxMaXN0OiB7XHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgfSxcclxuICBtZW51QnV0dG9uOiB7XHJcbiAgICAvLyBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygwLjUpLFxyXG4gICAgLy8gbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygwLjUpLFxyXG4gICAgbWluSGVpZ2h0OiA1MCxcclxuICAgIG1pbldpZHRoOiA1MCxcclxuICAgIHpJbmRleDogMTAwMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBTdHlsZWROYXZMaW5rID0gc3R5bGVkLmE8eyBpc0FjdGl2ZT86IGJvb2xlYW4gfT5gXHJcbiAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLmlzQWN0aXZlID8gU0VDT05EQVJZX0NPTE9SIDogXCJpbmhlcml0XCJ9IDtcclxuICAgIGZvbnQtd2VpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMuaXNBY3RpdmUgPyBcImJvbGRcIiA6IFwibm9ybWFsXCJ9O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgY29sb3I6ICR7U0VDT05EQVJZX0NPTE9SfVxyXG4gICAgfVxyXG4gICBcclxuYDtcclxuXHJcbmV4cG9ydCB0eXBlIEFuY2hvciA9IFwidG9wXCIgfCBcImxlZnRcIiB8IFwiYm90dG9tXCIgfCBcInJpZ2h0XCI7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgYW5jaG9yOiBBbmNob3I7XHJcbn1cclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIG9wZW46IHsgb3BhY2l0eTogMSwgeDogMCB9LFxyXG4gIGNsb3NlZDogeyBvcGFjaXR5OiAwLCB4OiBcIi0xMDAlXCIgfSxcclxufTtcclxuXHJcbmNvbnN0IGxpc3RJdGVtVmFyaWFudHMgPSB7XHJcbiAgb3Blbjoge1xyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIHk6IDAsXHJcbiAgfSxcclxuICBjbG9zZWQ6IHsgb3BhY2l0eTogMCwgeTogXCItMTAwJVwiIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlRHJhd2VyKHsgYW5jaG9yIH06IFByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gY29uc3QgaXNCcmVha3BvaW50ID0gdXNlTWVkaWFRdWVyeShcclxuICAvLyAgICh0aGVtZTogVGhlbWUpID0+IHRoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIiksXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIGRlZmF1bHRNYXRjaGVzOiB0cnVlLFxyXG4gIC8vICAgfSxcclxuICAvLyApO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgdG9wOiBmYWxzZSxcclxuICAgIGxlZnQ6IGZhbHNlLFxyXG4gICAgYm90dG9tOiBmYWxzZSxcclxuICAgIHJpZ2h0OiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKGFuY2hvcjogQW5jaG9yLCBvcGVuOiBib29sZWFuKSA9PlxyXG4gICAgKFxyXG4gICAgICBldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudCB8IFJlYWN0Lk1vdXNlRXZlbnQsXHJcbiAgICApID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGV2ZW50LnR5cGUgPT09IFwia2V5ZG93blwiICYmXHJcbiAgICAgICAgKChldmVudCBhcyBSZWFjdC5LZXlib2FyZEV2ZW50KS5rZXkgPT09IFwiVGFiXCIgfHxcclxuICAgICAgICAgIChldmVudCBhcyBSZWFjdC5LZXlib2FyZEV2ZW50KS5rZXkgPT09IFwiU2hpZnRcIilcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbYW5jaG9yXTogb3BlbiB9KTtcclxuICAgIH07XHJcblxyXG4gIGNvbnN0IGxpc3QgPSAoYW5jaG9yOiBBbmNob3IpID0+IChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubGlzdCwge1xyXG4gICAgICAgIFtjbGFzc2VzLmZ1bGxMaXN0XTogYW5jaG9yID09PSBcInRvcFwiIHx8IGFuY2hvciA9PT0gXCJib3R0b21cIixcclxuICAgICAgfSl9XHJcbiAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XHJcbiAgICAgIG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgPlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICB7TkFWX0xJTktTLm1hcCgoeyB0ZXh0LCBocmVmLCBJY29uIH0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8TmF2TGluayBrZXk9e3RleHR9IGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICA8U3R5bGVkTmF2TGluayBpc0FjdGl2ZT17aHJlZiA9PT0gcm91dGVyLnBhdGhuYW1lfT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24gc3R5bGU9e3sgY29sb3I6IFwiaW5oZXJpdFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7SWNvbiA/IEljb24gOiA8RHJhZ0hhbmRsZUljb24gLz59XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGV4dH0gLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L1N0eWxlZE5hdkxpbms+XHJcbiAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvTGlzdD5cclxuICAgICAgPERpdmlkZXIgLz5cclxuXHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIDxMaXN0SXRlbSBidXR0b249e2ZhbHNlfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICBTb2NpYWxcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIHtTT0NJQUxfTElOS1MubWFwKCh7IHRleHQsIEljb24sIGhyZWYgfSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxTdHlsZWRIdG1sTGlua1xyXG4gICAgICAgICAgICBocmVmPXtocmVmfVxyXG4gICAgICAgICAgICB0aXRsZT17dGV4dH1cclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJsaW5rXCJcclxuICAgICAgICAgICAga2V5PXt0ZXh0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24gc3R5bGU9e3sgY29sb3I6IFwiaW5oZXJpdFwiIH19PlxyXG4gICAgICAgICAgICAgICAge0ljb24gPyBJY29uIDogPE1haWxJY29uIC8+fVxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGV4dH0gLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDwvU3R5bGVkSHRtbExpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIC8vIGNvbnN0IGlzT3BlbiA9IHN0YXRlW2FuY2hvcl0gfHwgaXNCcmVha3BvaW50O1xyXG4gIGNvbnN0IGlzT3BlbiA9IHN0YXRlW2FuY2hvcl07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXthbmNob3J9PlxyXG4gICAgICB7LyogPEhpZGRlbiBtZFVwIGluaXRpYWxXaWR0aD1cInNtXCI+ICovfVxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgLy8gZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCB0cnVlKX1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn1cclxuICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJtZW51XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgey8qIDwvSGlkZGVuPiAqL31cclxuXHJcbiAgICAgIDxEcmF3ZXJcclxuICAgICAgICBpZD1cIm5hdmJhci1kcmF3ZXJcIlxyXG4gICAgICAgIGFuY2hvcj17YW5jaG9yfVxyXG4gICAgICAgIC8vIHZhcmlhbnQ9e2lzQnJlYWtwb2ludCA/IFwicGVybWFuZW50XCIgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgb3Blbj17aXNPcGVufVxyXG4gICAgICAgIC8vIE1vZGFsUHJvcHM9e3tcclxuICAgICAgICAvLyAgIGRpc2FibGVTY3JvbGxMb2NrOiBpc0JyZWFrcG9pbnQsXHJcbiAgICAgICAgLy8gICBzdHlsZToge1xyXG4gICAgICAgIC8vICAgICBwb3NpdGlvbjogaXNCcmVha3BvaW50ID8gXCJyZWxhdGl2ZVwiIDogXCJmaXhlZFwiLFxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyB9fVxyXG4gICAgICAgIFBhcGVyUHJvcHM9e3tcclxuICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiAyNDAgfSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIFNsaWRlUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IHtcclxuICAgICAgICAgICAgZXhpdDogMzAwLFxyXG4gICAgICAgICAgICBlbnRlcjogMjUwLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIC8vIGhpZGVCYWNrZHJvcD17aXNCcmVha3BvaW50fVxyXG4gICAgICAgIG9uQ2xvc2U9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtsaXN0KGFuY2hvcil9XHJcbiAgICAgIDwvRHJhd2VyPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBGYVJlYWN0LFxyXG4gIEZhTWljcm9zb2Z0LFxyXG4gIEZhU2FsZXNmb3JjZSxcclxuICBGYUppcmEsXHJcbiAgRmFVbml2ZXJzYWxBY2Nlc3MsXHJcbiAgRmFCcmllZmNhc2UsXHJcbiAgLy8gRmFEYXRhYmFzZSxcclxufSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgSW9Mb2dvSmF2YXNjcmlwdCxcclxuICBJb0xvZ29TYXNzLFxyXG4gIElvTG9nb0h0bWw1LFxyXG4gIElvTG9nb05vZGVqcyxcclxuICBJb01kQ2FsZW5kYXIsXHJcbiAgSW9NZENoYXRib3hlcyxcclxufSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IFR5cGVzY3JpcHRJY29uIGZyb20gXCIuL1R5cGVzY3JpcHRJY29uXCI7XHJcbmltcG9ydCBHcmFwaFFsSWNvbiBmcm9tIFwiLi9HcmFwaFFMSWNvblwiO1xyXG5pbXBvcnQgeyBTRUNPTkRBUllfQ09MT1IgfSBmcm9tIFwiQHJvb3QvdGhlbWUvZ2V0VGhlbWVcIjtcclxuXHJcbmNvbnN0IEV4cEljb24gPSA8RmFCcmllZmNhc2UgY29sb3I9XCIjMDA3OTZiXCIgLz47XHJcblxyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXMgPSBbXHJcbiAge1xyXG4gICAgSWNvbjogRXhwSWNvbixcclxuICAgIGxhYmVsOiBcIldlYiBQcm9kdWN0aW9uIFFBIEFuYWx5c3RcIixcclxuICAgIGxvY2F0aW9uOiBcIkNlbnR1cnkgMjEgU3RvcmVzXCIsXHJcbiAgICBpc0N1cnJlbnQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogRXhwSWNvbixcclxuICAgIGxhYmVsOiBcIlN1cHBvciBDZW50ZXIgU3BlY2lhbGlzdFwiLFxyXG4gICAgbG9jYXRpb246IFwiQ2VudHVyeSAyMSBTdG9yZXNcIixcclxuICAgIGlzQ3VycmVudDogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBFeHBJY29uLFxyXG4gICAgbGFiZWw6IFwiTWlzc2lvbiBDb250cm9sIFNwZWNpYWxpc3RcIixcclxuICAgIGxvY2F0aW9uOiBcIlRlbGVwZXJmb3JtYW5jZVwiLFxyXG4gICAgaXNDdXJyZW50OiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEV4cEljb24sXHJcbiAgICBsYWJlbDogXCJDdXN0b21lciBTZXJ2aWNlIFJlcHJlc2VudGF0aXZlXCIsXHJcbiAgICBsb2NhdGlvbjogXCJUZWxlcGVyZm9ybWFuY2VcIixcclxuICAgIGlzQ3VycmVudDogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBFeHBJY29uLFxyXG4gICAgbGFiZWw6IFwiQ2FsbCBDZW50ZXIgUUEgQW5hbHlzdFwiLFxyXG4gICAgbG9jYXRpb246IFwiQk0gVGVsZXNlcnZpY2VzXCIsXHJcbiAgICBpc0N1cnJlbnQ6IGZhbHNlLFxyXG4gIH0sXHJcbl0gYXMgY29uc3Q7XHJcbmNvbnN0IFNJWkUgPSBcIjI0cHhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlZHVjYXRpb24gPSBbXHJcbiAgeyBJY29uOiA8RmFSZWFjdCBzdHlsZT17eyBmaWxsOiBcIiM2MWRhZmJcIiB9fSBzaXplPXtTSVpFfSAvPiwgbGFiZWw6IFwiUmVhY3RcIiB9LFxyXG4gIHsgSWNvbjogPFR5cGVzY3JpcHRJY29uIHNpemVJblB4PXtTSVpFfSAvPiwgbGFiZWw6IFwiVHlwZXNjcmlwdFwiIH0sXHJcbiAgeyBJY29uOiA8R3JhcGhRbEljb24gc2l6ZUluUHg9e1NJWkV9IC8+LCBsYWJlbDogXCJHcmFwaFFMXCIgfSxcclxuICB7XHJcbiAgICBJY29uOiA8SW9Mb2dvTm9kZWpzIHNpemU9e1NJWkV9IGNvbG9yPVwiIzIxNTczMlwiIC8+LFxyXG4gICAgbGFiZWw6IFwiTm9kZUpTIHdpdGggRXhwcmVzcyBhbmQgTW9uZ29EQlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogPEZhVW5pdmVyc2FsQWNjZXNzIHNpemU9e1NJWkV9IGNvbG9yPXtTRUNPTkRBUllfQ09MT1J9IC8+LFxyXG4gICAgbGFiZWw6IFwiV2ViIEFjY2Vzc2liaWxpdHlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IDxJb0xvZ29KYXZhc2NyaXB0IHNpemU9e1NJWkV9IGNvbG9yPVwiI2ZmZTMwMlwiIC8+LFxyXG4gICAgbGFiZWw6IFwiSmF2YXNjcmlwdFwiLFxyXG4gIH0sXHJcbiAgeyBJY29uOiA8RmFKaXJhIHNpemU9e1NJWkV9IGNvbG9yPVwiIzE3MkI0RFwiIC8+LCBsYWJlbDogXCJDb25mbHVlbmNlIEppcmFcIiB9LFxyXG4gIHsgSWNvbjogPElvTG9nb1Nhc3Mgc2l6ZT17U0laRX0gY29sb3I9XCIjYzY5XCIgLz4sIGxhYmVsOiBcIlNBU1MgLyBDU1MzXCIgfSxcclxuICB7IEljb246IDxJb0xvZ29IdG1sNSBzaXplPXtTSVpFfSBjb2xvcj1cImUzNGYyNlwiIC8+LCBsYWJlbDogXCJIVE1MIDVcIiB9LFxyXG4gIHtcclxuICAgIEljb246IDxGYVNhbGVzZm9yY2Ugc2l6ZT17U0laRX0gY29sb3I9XCIjMDA5RURCXCIgLz4sXHJcbiAgICBsYWJlbDogXCJTYWxlc2ZvcmNlIENvbW1lcmNlIENsb3VkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiA8SW9NZENhbGVuZGFyIHNpemU9e1NJWkV9IGNvbG9yPXtTRUNPTkRBUllfQ09MT1J9IC8+LFxyXG4gICAgbGFiZWw6IFwiV29ya2ZvcmNlIE1hbmFnZW1lbnRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IDxGYU1pY3Jvc29mdCBzaXplPXtTSVpFfSBjb2xvcj1cIiNGMjUwMjJcIiAvPixcclxuICAgIGxhYmVsOiBcIk1pY3Jvc29mdCBPZmZpY2UsIEV4Y2VsIFZCQVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogPElvTWRDaGF0Ym94ZXMgc2l6ZT17U0laRX0gY29sb3I9e1NFQ09OREFSWV9DT0xPUn0gLz4sXHJcbiAgICBsYWJlbDogXCJCaWxpbmd1YWwgKEVuZ2xpc2gsIFNwYW5pc2gpXCIsXHJcbiAgfSxcclxuXSBhcyBjb25zdDtcclxuIiwiaW1wb3J0IHsgRGl2aWRlckVsZW1lbnQgfSBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEJveCwgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBJbWFnZUJ1dHRvbiB9IGZyb20gXCJAcm9vdC90aGVtZS9DdXN0b21cIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvamVjdHNBcnJheSBmcm9tIFwiLi4vcHJvamVjdHMvUHJvamVjdHNBcnJheVwiO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG59XHJcblxyXG4vLyBjb25zdCBQQXJyYXkgPSBQcm9qZWN0c0FycmF5LnNsaWNlKDAsIDIpO1xyXG5jb25zdCBQQXJyYXkgPSBQcm9qZWN0c0FycmF5O1xyXG5cclxuY29uc3QgSG9tZVByb2plY3RHcmlkID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHB5PXsyfT5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGFsaWduQ29udGVudD1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICB7UEFycmF5Lm1hcCgocHJvaiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8R3JpZFxyXG4gICAgICAgICAgICBrZXk9e2Bwcm9qZWN0LWdyaWQtJHtwcm9qLm5hbWV9LSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgIHNtPVwiYXV0b1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyRWxlbWVudD5cclxuICAgICAgICAgICAgICB7cHJvai5uYW1lfVxyXG4gICAgICAgICAgICA8L0RpdmlkZXJFbGVtZW50PlxyXG4gICAgICAgICAgICA8Qm94IG1iPXsxfSAvPlxyXG4gICAgICAgICAgICA8SW1hZ2VCdXR0b25cclxuICAgICAgICAgICAgICB0aXRsZT17cHJvai50aXRsZX1cclxuICAgICAgICAgICAgICB1cmw9e3Byb2ouaW1hZ2VzWzBdLmltZ1BhdGh9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICBtaW5IZWlnaHQ9ezcwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD47XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUHJvamVjdEdyaWQ7XHJcbiIsIi8vIGltcG9ydCBTb2NpYWxNZWRpYUVtYmVkcyBmcm9tIFwiLi9wYXJ0aWFscy9Tb2NpYWxNZWRpYUVtYmVkc1wiO1xyXG5pbXBvcnQge1xyXG4gIFByaW1hcnlCYWNrZ3JvdW5kU2VjdGlvbixcclxufSBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkXCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIENvbnRhaW5lcixcclxuICBHcmlkLFxyXG5cclxuICBIaWRkZW4sXHJcbiAgTGlzdCxcclxuXHJcbiAgUGFwZXIsXHJcbiAgVHlwb2dyYXBoeSxcclxuXHJcbiAgdXNlTWVkaWFRdWVyeSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlUGFnZXNDb250ZXh0IH0gZnJvbSBcIkByb290L2NvbnRleHQvUGFnZXNDb250ZXh0XCI7XHJcbmltcG9ydCB1c2VTaGFyZWRTdHlsZXMgZnJvbSBcIkByb290L3RoZW1lL3VzZVNoYXJlZFN0eWxlc1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgZWR1Y2F0aW9uLFxyXG4gIGV4cGVyaWVuY2VzLFxyXG59IGZyb20gXCIuLi9jdXN0b20taWNvbnNcIjtcclxuaW1wb3J0IEhvbWVwYWdlSGVhZGluZyBmcm9tIFwiLi4vcGFydGlhbHMvSG9tZXBhZ2VIZWFkaW5nXCI7XHJcbmltcG9ydCBIb21lUHJvamVjdEdyaWQgZnJvbSBcIi4vSG9tZVByb2plY3RHcmlkXCI7XHJcbmltcG9ydCBTaG93Q2FzZVByb2plY3RCdXR0b24gZnJvbSBcIi4vU2hvd0Nhc2VQcm9qZWN0QnV0dG9uXCI7XHJcblxyXG5jb25zdCBTdHlsZWRJdGVtID0gc3R5bGVkLmxpYFxyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkNWQ1O1xyXG4gICAgLyogdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0OyAqL1xyXG4gICAgLyogJjpob3ZlcntcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCk7XHJcbiAgICB9ICovXHJcbmA7XHJcblxyXG5jb25zdCBTdW1tYXJ5TGkgPSBzdHlsZWQubGlgXHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgZm9udC1zaXplOiAxLjE2cmVtO1xyXG4gICAgJjo6YmVmb3Jle1xyXG4gICAgICBjb250ZW50OiBcIuKAoiBcIjtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IEV4cGVyaWVuY2VTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZChUeXBvZ3JhcGh5KTx7IGNvbXBvbmVudDogc3RyaW5nIH0+YFxyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcclxuYDtcclxuXHJcbmNvbnN0IFNlY3Rpb25HcmlkU3R5bGVkID0gc3R5bGVkKEdyaWQpYFxyXG4gIG1hcmdpbi10b3A6IDUwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbmA7XHJcblxyXG5jb25zdCBTVU1NQVJZX1RFWFRTID0gW1xyXG4gIFwiUHJvZmljaWVudCBrbm93bGVkZ2Ugb2YgSFRNTCA1LCBDU1MgMywgSmF2YVNjcmlwdC5cIixcclxuICBcIkV4cGVyaWVjZWQgd2l0aCBNUyBFeGNlbC5cIixcclxuICBcIkV4Y2VsbGVudCBjb21tdW5pY2F0aW9uIHNraWxscywgb3JnYW5pemF0aW9uIHNraWxscywgYW5kIGV4Y2VsbGVudCBhdHRlbnRpb24gdG8gZGV0YWlsLlwiLFxyXG4gIFwiUHJvZmljaWVudCBrbm93bGVkZ2Ugb2YgYWNjZXNzaWJpbGl0eSBzdGFuZGFyZHMgKFNlY3Rpb24gNTA4L1dDQUcgMi4wIExldmVsIEEgYW5kIEFBKS5cIixcclxuICBcIkdvb2QgdW5kZXJzdGFuZGluZyBvZiBhc3Npc3RpdmUgdGVjaG5vbG9naWVzIChKQVdTLCBOVkRBLCBWb2ljZU92ZXIpLlwiLFxyXG4gIFwiNiB5ZWFycyBvZiBjYWxsIGNlbnRlciBhbmQgV29ya2ZvcmNlIE1hbmFnZW1lbnQgZXhwZXJpZW5jZS5cIixcclxuICBcIlByb2ZpY2llbnQgZXhwZXJpZW5jZSBpbiBRQSB0ZXN0aW5nIG1ldGhvZG9sb2d5LlwiLFxyXG4gIFwiUHJvdmVuIGFiaWxpdHkgdG8gZG9jdW1lbnQgaXNzdWVzIGFuZCBidWdzLlwiLFxyXG5dO1xyXG5cclxuY29uc3QgSG9tZXBhZ2VMYXlvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBjaGFuZ2VQYWdlIH0gPSB1c2VQYWdlc0NvbnRleHQoKTtcclxuICBjb25zdCBwcmVmZXJzRGFya01vZGUgPSB1c2VNZWRpYVF1ZXJ5KFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU2hhcmVkU3R5bGVzKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoYW5nZVBhZ2UoXCJIb21lXCIpO1xyXG4gIH0sIFtjaGFuZ2VQYWdlXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHN1bW1hcnkgPSAoXHJcbiAgICA8R3JpZCBpdGVtPlxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cclxuICAgICAgICA8TGlzdCBzdHlsZT17eyBmb250U2l6ZTogXCIxLjFlbVwiIH19PlxyXG4gICAgICAgICAge1NVTU1BUllfVEVYVFMubWFwKCh0ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8U3VtbWFyeUxpIGtleT17dGV4dH0+e3RleHR9PC9TdW1tYXJ5TGk+O1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG5cclxuICBjb25zdCBlZHVjYXRpb25MaXN0ID0gZWR1Y2F0aW9uLm1hcCgoeyBsYWJlbCwgSWNvbiB9LCBpbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN0eWxlZEl0ZW0ga2V5PXtsYWJlbCArIFwiLVwiICsgaW5kZXh9PlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMS4yIH19XHJcbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29tcG9uZW50PVwiaDNcIj5cclxuICAgICAgICAgICAgICB7SWNvbn1cclxuICAgICAgICAgICAgICA8c3Bhbj57XCIgXCJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L1N0eWxlZEl0ZW0+XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBleHBlcmllbmNlTGlzdCA9IGV4cGVyaWVuY2VzLm1hcChcclxuICAgICh7IEljb24sIGlzQ3VycmVudCwgbGFiZWwsIGxvY2F0aW9uIH0pID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8bGkga2V5PXtsYWJlbH0gY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgey8qIDxJY29uIG5hbWU9e2V4cC5pY29ufSAvPiAqL31cclxuICAgICAgICAgIDxFeHBlcmllbmNlU2VjdGlvbj5cclxuICAgICAgICAgICAge0ljb259XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoM1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogaXNDdXJyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogcHJlZmVyc0RhcmtNb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIiNjOGM4YzhcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCIjZmNmY2ZjXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgIHtpc0N1cnJlbnQgJiYgXCIoQWN0dWFsKVwifVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxlbT57bG9jYXRpb259PC9lbT5cclxuICAgICAgICAgIDwvRXhwZXJpZW5jZVNlY3Rpb24+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8UHJpbWFyeUJhY2tncm91bmRTZWN0aW9uPlxyXG4gICAgICAgIDxIb21lcGFnZUhlYWRpbmcgLz5cclxuICAgICAgPC9QcmltYXJ5QmFja2dyb3VuZFNlY3Rpb24+XHJcbiAgICAgIDxQYXBlciBzcXVhcmUgZWxldmF0aW9uPXswfT5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBzcGFjaW5nPXswfVxyXG4gICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCJcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U2VjdGlvbkdyaWRTdHlsZWRcclxuICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgIHNtPXs0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDRcIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDJcIlxyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEV4cGVyaWVuY2VzXHJcbiAgICAgICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIHtleHBlcmllbmNlTGlzdH1cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICA8L1NlY3Rpb25HcmlkU3R5bGVkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgeHM9ezEwfVxyXG4gICAgICAgICAgICAgIHNtPXs0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEhpZGRlbiB4c0Rvd24+XHJcbiAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgIGNzcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogNTAsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgIDxUaXRsZSB2YXJpYW50PVwiaDRcIiBjb21wb25lbnQ9XCJoMlwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBTa2lsbHNcclxuICAgICAgICAgICAgICA8L1RpdGxlPlxyXG5cclxuICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIHtlZHVjYXRpb25MaXN0fVxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiZmxleC1zdGFydFwiPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5taW5QYWRkaW5nWCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgY3NzPXt7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMjUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3N1bW1hcnl9XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgey8qIDxTaG93Q2FzZVByb2plY3RCdXR0b24gLz4gKi99XHJcbiAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICB7LyogPENvbnRhaW5lclxyXG4gICAgICAgICAgaWQ9XCJwcm9qZWN0c1wiXHJcbiAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMubWluUGFkZGluZ1gsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBbGxQcm9qZWN0c1xyXG4gICAgICAgICAgICBhZGRNYXJnaW5Ub3A9e2ZhbHNlfVxyXG4gICAgICAgICAgICBzaG93U2xpZGVyQ29udHJvbHM9e2ZhbHNlfVxyXG4gICAgICAgICAgICBsb29wPXtmYWxzZX1cclxuICAgICAgICAgICAgbGltaXRUbz17Mn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db250YWluZXI+ICovfVxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgICA8Qm94IHBiPXsyfSAvPlxyXG4gICAgICA8UGFwZXIgc3F1YXJlPlxyXG4gICAgICAgIDxCb3ggcHQ9ezF9IC8+XHJcblxyXG4gICAgICAgIDxTaG93Q2FzZVByb2plY3RCdXR0b24gY29sb3I9XCJpbmhlcml0XCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cclxuICAgICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgICBpZD1cInByb2plY3RzXCJcclxuICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5taW5QYWRkaW5nWCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEhvbWVQcm9qZWN0R3JpZCAvPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgICB7LyogPFNvY2lhbE1lZGlhRW1iZWRzIC8+ICovfVxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZUxheW91dDtcclxuIiwiaW1wb3J0IHsgTm9uU3R5bGVkQW5jaG9yIH0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEJyYW5kQnV0dG9uIH0gZnJvbSBcIkByb290L3RoZW1lL0N1c3RvbVwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY29sb3I/OlxyXG4gICAgfCBcInRleHRcIlxyXG4gICAgfCBcImluaGVyaXRcIlxyXG4gICAgfCBcImRlZmF1bHRcIlxyXG4gICAgfCBcInZhcGVcIlxyXG4gICAgfCBcImV4cGVuc2VcIlxyXG4gICAgfCBcInNob3BcIlxyXG4gICAgfCBcImJsdWVcIlxyXG4gICAgfCBcImVycm9yXCJcclxuICAgIHwgXCJ3YXJuaW5nXCJcclxuICAgIHwgXCJ0ZXJ0aWFyeVwiXHJcbiAgICB8IFwic3VjY2Vzc1wiXHJcbiAgICB8IFwicHJpbWFyeVwiXHJcbiAgICB8IFwic2Vjb25kYXJ5XCI7XHJcbiAgc2l6ZT86IFwiZGVmYXVsdFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIiB8IFwic21hbGxcIjtcclxuICB2YXJpYW50PzogXCJ0ZXh0XCIgfCBcIm91dGxpbmVkXCIgfCBcImNvbnRhaW5lZFwiO1xyXG59XHJcblxyXG5jb25zdCBTaG93Q2FzZVByb2plY3RCdXR0b24gPSAoXHJcbiAgeyBjb2xvciA9IFwiZGVmYXVsdFwiLCBzaXplID0gXCJsYXJnZVwiLCB2YXJpYW50IH06IFByb3BzLFxyXG4pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRcclxuICAgICAgY29udGFpbmVyXHJcbiAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDI1LCBtYXJnaW5Cb3R0b206IDI1IH19XHJcbiAgICA+XHJcbiAgICAgIDxtb3Rpb24uZGl2IHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMyB9fSB3aGlsZVRhcD17eyBzY2FsZTogMS4zIH19PlxyXG4gICAgICAgIDxCcmFuZEJ1dHRvblxyXG4gICAgICAgICAgY29sb3I9e2NvbG9yfVxyXG4gICAgICAgICAgc2l6ZT17c2l6ZX1cclxuICAgICAgICAgIHZhcmlhbnQ9e3ZhcmlhbnR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxyXG4gICAgICAgICAgICA8Tm9uU3R5bGVkQW5jaG9yPlxyXG4gICAgICAgICAgICAgIHtcIlNob3djYXNlIFByb2plY3RzXCIudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgPC9Ob25TdHlsZWRBbmNob3I+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9CcmFuZEJ1dHRvbj5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93Q2FzZVByb2plY3RCdXR0b247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBUeXBvZ3JhcGh5LCBMaXN0LCBMaXN0SXRlbSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG4vLyBpbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IE5hdkxpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge1xyXG4gIFByaW1hcnlCYWNrZ3JvdW5kU2VjdGlvbixcclxuICBTdHlsZWRIdG1sTGluayxcclxufSBmcm9tIFwiLi4vc2hhcmVkXCI7XHJcbmltcG9ydCBTb2NpYWxMaXN0IGZyb20gXCIuL1NvY2lhbExpc3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFNFQ09OREFSWV9DT0xPUiB9IGZyb20gXCJAcm9vdC90aGVtZS9nZXRUaGVtZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3Rlck5hdkxpbmsgPSBzdHlsZWQuYTx7IGlzQWN0aXZlPzogYm9vbGVhbiB9PmBcclxuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLmlzQWN0aXZlID8gU0VDT05EQVJZX0NPTE9SIDogXCJpbmhlcml0XCJ9O1xyXG4gIGZvbnQtd2VpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMuaXNBY3RpdmUgPyBcImJvbGRcIiA6IFwibm9ybWFsXCJ9O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJi5pdGVte1xyXG4gICAgY29sb3I6JHtTRUNPTkRBUllfQ09MT1J9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgJjpob3ZlcntcclxuICAgIGNvbG9yOiAke1NFQ09OREFSWV9DT0xPUn07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkKFR5cG9ncmFwaHkpPHsgY29tcG9uZW50Pzogc3RyaW5nIH0+YFxyXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuYDtcclxuXHJcbmNvbnN0IE5vbkFjdGl2ZUxpbmsgPSBzdHlsZWQoU3R5bGVkSHRtbExpbmspYFxyXG4gICAgY29sb3I6ICdpbmhlcml0JztcclxuICAgICY6aG92ZXJ7XHJcbiAgICBjb2xvcjogJHtTRUNPTkRBUllfQ09MT1J9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTaXRlRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UHJpbWFyeUJhY2tncm91bmRTZWN0aW9uIHN0eWxlPXt7IHBhZGRpbmc6IFwiMWVtIDBlbVwiIH19PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1hcm91bmRcIlxyXG4gICAgICAgICAgYWxpZ25Db250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCJcclxuICAgICAgICAgICAgYWxpZ25Db250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtPXt0cnVlfSB4cz17MTJ9IHNtPVwiYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxMaXN0IGlkPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxUaXRsZSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMVwiPlBhZ2VzPC9UaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3Rlck5hdkxpbmsgaXNBY3RpdmU9e3BhdGhuYW1lID09PSBcIi9cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb290ZXJOYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL3Byb2plY3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3Rlck5hdkxpbmsgaXNBY3RpdmU9e3BhdGhuYW1lID09PSBcIi9wcm9qZWN0c1wifT5cclxuICAgICAgICAgICAgICAgICAgICAgIFNob3djYXNlIFByb2plY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb290ZXJOYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyTmF2TGluayBpc0FjdGl2ZT17cGF0aG5hbWUgPT09IFwiL2NvbnRhY3RcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb290ZXJOYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxUaXRsZSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlNob3djYXNlIFByb2plY3RzPC9UaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxOb25BY3RpdmVMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmFwZW11c2ljLmNsdWJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJWYXBlIE11c2ljXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFZhcGUgTXVzaWNcclxuICAgICAgICAgICAgICAgICAgPC9Ob25BY3RpdmVMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE5vbkFjdGl2ZUxpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93aWxmcmVkbG9wZXoubmV0L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFJldGFsTWVOb3dcclxuICAgICAgICAgICAgICAgICAgPC9Ob25BY3RpdmVMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE5vbkFjdGl2ZUxpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93aWxmcmVkZXhwZW5zZW1hbmFnZXIubmV0bGlmeS5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBFeHBlbnNlcyBNYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICAgIDwvTm9uQWN0aXZlTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT1cImF1dG9cIj5cclxuICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPFRpdGxlIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU29jaWFsXHJcbiAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPFNvY2lhbExpc3QgLz5cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgIHNtPXs0fVxyXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgIGFsaWduQ29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQWxsIFJpZ2h0cyBSZXNldmVkXHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjIwMjAgJmNvcHk7IFdpbGZyZWQgTG9wZXo8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1ByaW1hcnlCYWNrZ3JvdW5kU2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2l0ZUZvb3RlcjtcclxuIiwiaW1wb3J0IHtcclxuICBQUklNQVJZX0NPTE9SLFxyXG4gIFNFQ09OREFSWV9DT0xPUixcclxuICBURVJUSUFSWV9DT0xPUixcclxufSBmcm9tIFwiQHJvb3QvdGhlbWUvZ2V0VGhlbWVcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uUHJvcHMsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAvKipcclxuICAgKiBudW1iZXIgdG8gc2NhbGUgdXAgdG8uIGRlZmF1bHRzIHRvIDEuMlxyXG4gICAqL1xyXG4gIHNjYWxlVG8/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogYSB0dXBsZSBvZiBzdHJpbmdzIG9mIGNvbG9ycy4gZGVmYXVsdHMgdG8gW1wiI2ZmNjY5OVwiLCBcIiM2NjY2ZmZcIl1cclxuICAgKiBwYXNzIGFuIGVtcHR5IGFycmF5IHRvIGRpc2FibGUgdGhlIGVmZmVjdFxyXG4gICAqL1xyXG4gIGJhY2tncm91bmRzPzogW3N0cmluZywgc3RyaW5nXTtcclxufVxyXG5cclxuY29uc3Qgc2NhbGVUcmFuc2l0aW9uID0ge1xyXG4gIHNjYWxlOiB7XHJcbiAgICBkdXJhdGlvbjogMC44LFxyXG4gICAgeW95bzogSW5maW5pdHksXHJcbiAgICBlYXNlOiBcImVhc2VPdXRcIixcclxuICAgIC8vIHJlcGVhdERlbGF5OiAwLjUsXHJcbiAgfSxcclxuICBiYWNrZ3JvdW5kQ29sb3I6IHtcclxuICAgIGR1cmF0aW9uOiAwLjgsXHJcbiAgICB5b3lvOiBJbmZpbml0eSxcclxuICAgIGVhc2U6IFwiZWFzZU91dFwiLFxyXG4gICAgcmVwZWF0RGVsYXk6IDAuNSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgU2NhbGVVcERvd25Db21wb25lbnQgPSAoXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZHMgPSBbVEVSVElBUllfQ09MT1IsIFNFQ09OREFSWV9DT0xPUl0sXHJcbiAgICBzY2FsZVRvID0gMSxcclxuICAgIGNoaWxkcmVuLFxyXG4gIH06IFByb3BzV2l0aENoaWxkcmVuPFByb3BzPixcclxuKSA9PiB7XHJcbiAgbGV0IGFuaW1hdGU6IEFuaW1hdGlvblByb3BzW1wiYW5pbWF0ZVwiXSA9IHtcclxuICAgIHNjYWxlOiBbMC45LCBzY2FsZVRvXSxcclxuICB9O1xyXG4gIGlmIChiYWNrZ3JvdW5kcy5sZW5ndGggPiAwKSB7XHJcbiAgICBhbmltYXRlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRzO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCwgbWFyZ2luQm90dG9tOiAyMCwgYm9yZGVyUmFkaXVzOiA2IH19XHJcbiAgICAgIHRyYW5zaXRpb249e3NjYWxlVHJhbnNpdGlvbn1cclxuICAgICAgYW5pbWF0ZT17YW5pbWF0ZX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY2FsZVVwRG93bkNvbXBvbmVudDtcclxuIiwiaW1wb3J0IHsgU0VDT05EQVJZX0NPTE9SIH0gZnJvbSBcIkByb290L3RoZW1lL2dldFRoZW1lXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTm9uU3R5bGVkQW5jaG9yID0gc3R5bGVkLmFgXHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICBjb2xvcjogJ2luaGVyaXQnO1xyXG4gICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYTx7IGNvbG9yPzogc3RyaW5nIH0+YFxyXG4gICAgY29sb3I6ICAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3IgPyBwcm9wcy5jb2xvciA6IFwiaW5oZXJpdFwifTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICBjb2xvcjogJHtTRUNPTkRBUllfQ09MT1J9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkSHRtbExpbmsgPSBzdHlsZWQuYTx7IGNvbG9yPzogc3RyaW5nIH0+YFxyXG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvciA/IHByb3BzLmNvbG9yIDogXCJpbmhlcml0XCJ9O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkTGluaztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMsIFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlU3R5bGVzLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgVGhlbWUsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgYXNzZXJ0TmV2ZXIgfSBmcm9tIFwiQHdpbGZyZWRsb3Blei9yZWFjdC11dGlsc1wiO1xyXG5cclxuZXhwb3J0IHR5cGUgUGFsZXR0ZUNvbG9yS2V5cyA9XHJcbiAgfCBcInByaW1hcnlcIlxyXG4gIHwgXCJzZWNvbmRhcnlcIlxyXG4gIHwgXCJlcnJvclwiXHJcbiAgfCBcIndhcm5pbmdcIlxyXG4gIHwgXCJ0ZXJ0aWFyeVwiXHJcbiAgfCBcInN1Y2Nlc3NcIjtcclxuXHJcbnR5cGUgUmVndWxhckJ1dHRvbkNvbG9yID0gXCJpbmhlcml0XCIgfCBcInByaW1hcnlcIiB8IFwic2Vjb25kYXJ5XCI7XHJcblxyXG50eXBlIEN1c3RvbUNvbG9yID1cclxuICB8IFwidmFwZVwiXHJcbiAgfCBcImV4cGVuc2VcIlxyXG4gIHwgXCJzaG9wXCJcclxuICB8IFwidGV4dFwiXHJcbiAgfCBcImJsdWVcIlxyXG4gIHwgXCJlcnJvclwiXHJcbiAgfCBcIndhcm5pbmdcIlxyXG4gIHwgXCJ0ZXJ0aWFyeVwiXHJcbiAgfCBcInN1Y2Nlc3NcIlxyXG4gIHwgXCJkZWZhdWx0XCI7XHJcblxyXG50eXBlIEJ1dHRvblN0eWxlc0NvbG9yID0gQ3VzdG9tQ29sb3IgfCBSZWd1bGFyQnV0dG9uQ29sb3I7XHJcblxyXG5pbnRlcmZhY2UgQnV0dG9uU3R5bGVzIHtcclxuICBvbkNsaWNrPzpcclxuICAgIHwgKChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQpXHJcbiAgICB8IHVuZGVmaW5lZDtcclxuICByZWY/OiBSZWFjdC5SZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xyXG4gIGNvbG9yPzogQnV0dG9uU3R5bGVzQ29sb3I7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIHN0eWxlPzogQ1NTUHJvcGVydGllcztcclxuICBzaXplPzogXCJtZWRpdW1cIiB8IFwibGFyZ2VcIiB8IFwic21hbGxcIiB8IFwiZGVmYXVsdFwiO1xyXG4gIC8qKlxyXG4gICAgICAgICAqIFRoZSBjb250ZW50IG9mIHRoZSBidXR0b24uXHJcbiAgICAgICAgICovXHJcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBidXR0b24gd2lsbCBiZSBkaXNhYmxlZC5cclxuICAgICAgICAgICAqL1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIElmIGB0cnVlYCwgbm8gZWxldmF0aW9uIGlzIHVzZWQuXHJcbiAgICAgICAgICAgKi9cclxuICBkaXNhYmxlRWxldmF0aW9uPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIElmIGB0cnVlYCwgdGhlICBrZXlib2FyZCBmb2N1cyByaXBwbGUgd2lsbCBiZSBkaXNhYmxlZC5cclxuICAgICAgICAgICAqL1xyXG4gIGRpc2FibGVGb2N1c1JpcHBsZT86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBFbGVtZW50IHBsYWNlZCBhZnRlciB0aGUgY2hpbGRyZW4uXHJcbiAgICAgICAgICAgKi9cclxuICBlbmRJY29uPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYnV0dG9uIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxyXG4gICAgICAgICAgICovXHJcbiAgZnVsbFdpZHRoPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgICAgICAgICAqIFRoZSBVUkwgdG8gbGluayB0byB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cclxuICAgICAgICAgICAqIElmIGRlZmluZWQsIGFuIGBhYCBlbGVtZW50IHdpbGwgYmUgdXNlZCBhcyB0aGUgcm9vdCBub2RlLlxyXG4gICAgICAgICAgICovXHJcbiAgaHJlZj86IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgICAgICAgICAqIEVsZW1lbnQgcGxhY2VkIGJlZm9yZSB0aGUgY2hpbGRyZW4uXHJcbiAgICAgICAgICAgKi9cclxuICBzdGFydEljb24/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBUaGUgdmFyaWFudCB0byB1c2UuIERlZmF1bHRzIHRvIGNvbnRhaW5lZFxyXG4gICAgICAgICAgICovXHJcbiAgdmFyaWFudD86IFwidGV4dFwiIHwgXCJvdXRsaW5lZFwiIHwgXCJjb250YWluZWRcIjtcclxufVxyXG5cclxuY29uc3QgY29sb3IgPSAodGhlbWU6IFRoZW1lKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRlZmF1bHQ6IFwiI2ZmZlwiLFxyXG4gICAgYmx1ZTogXCIjZmZmXCIsXHJcbiAgICBwcmltYXJ5OiB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0LFxyXG4gICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXHJcbiAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MuY29udHJhc3RUZXh0LFxyXG4gICAgZXJyb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuY29udHJhc3RUZXh0LFxyXG4gICAgd2FybmluZzogXCIjZmZmXCIsXHJcbiAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5jb250cmFzdFRleHQsXHJcbiAgICB0ZXh0OiB0aGVtZS5wYWxldHRlLmdldENvbnRyYXN0VGV4dCh0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSksXHJcbiAgICB2YXBlOiBcIiNmZmZcIixcclxuICAgIGV4cGVuc2U6IFwiI2ZmZlwiLFxyXG4gICAgc2hvcDogXCIjZmZmXCIsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGNvbG9ySG92ZXIgPSAodGhlbWU6IFRoZW1lKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRlZmF1bHQ6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICBibHVlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzIxOTZGMyAzMCUsICMyMUNCRjMgOTAlKVwiLFxyXG4gICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXHJcbiAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmssXHJcbiAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MuZGFyayxcclxuICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmRhcmssXHJcbiAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcuZGFyayxcclxuICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5LmRhcmssXHJcbiAgICB0ZXh0OiBcImluaGVyaXRcIixcclxuICAgIHZhcGU6IFwiI2ZmMWYwMFwiLFxyXG4gICAgZXhwZW5zZTogXCIjMmU5ZTdhXCIsXHJcbiAgICBzaG9wOiBcInJnYigyMCwgMjAsIDIwKVwiLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBiZ3MgPSAodGhlbWU6IFRoZW1lKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRlZmF1bHQ6IFwiIzAwMFwiLFxyXG4gICAgYmx1ZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMyMTk2RjMgMzAlLCAjMjFDQkYzIDkwJSlcIixcclxuICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgc3VjY2VzczogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLm1haW4sXHJcbiAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLFxyXG4gICAgd2FybmluZzogdGhlbWUucGFsZXR0ZS53YXJuaW5nLm1haW4sXHJcbiAgICB0ZXJ0aWFyeTogdGhlbWUucGFsZXR0ZS50ZXJ0aWFyeS5tYWluLFxyXG4gICAgdGV4dDogXCJpbmhlcml0XCIsXHJcbiAgICBleHBlbnNlOiBcIiMyZTllN2FcIixcclxuICAgIHNob3A6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICB2YXBlOiBcIiNmZjFmMDBcIixcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgYmdzSG92ZXIgPSAodGhlbWU6IFRoZW1lKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRlZmF1bHQ6IFwicmdiKDIwLCAyMCwgMjApXCIsXHJcbiAgICBibHVlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDAgMTM3IDI0NykgMzAlLCByZ2IoMTAgMTM4IDE2OCkgOTAlKVwiLFxyXG4gICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXHJcbiAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmssXHJcbiAgICBzdWNjZXNzOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MuZGFyayxcclxuICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmRhcmssXHJcbiAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcuZGFyayxcclxuICAgIHRlcnRpYXJ5OiB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5LmRhcmssXHJcbiAgICB0ZXh0OiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgIHZhcGU6IFwiI2UwMWIwMFwiLFxyXG4gICAgZXhwZW5zZTogXCIjMjg4YjZiXCIsXHJcbiAgICBzaG9wOiBcIiMwMDBcIixcclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0Q29sb3JGb3IoXHJcbiAgbWF0Y2hDb2xvcjogQ3VzdG9tQ29sb3IgfCBcInByaW1hcnlcIiB8IFwic2Vjb25kYXJ5XCIsXHJcbiAgdGhlbWU6IFRoZW1lLFxyXG4pIHtcclxuICByZXR1cm4ge1xyXG4gICAgY29sb3I6IGNvbG9yKHRoZW1lKVttYXRjaENvbG9yXSxcclxuICAgIGJhY2tncm91bmQ6IGJncyh0aGVtZSlbbWF0Y2hDb2xvcl0sXHJcbiAgICBbXCImLk11aUJ1dHRvbi1vdXRsaW5lZFwiXToge1xyXG4gICAgICBjb2xvcjogYmdzKHRoZW1lKVttYXRjaENvbG9yXSxcclxuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkIGAgKyBiZ3ModGhlbWUpW21hdGNoQ29sb3JdLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICB9LFxyXG4gICAgW1wiJi5NdWlCdXR0b24tdGV4dFwiXToge1xyXG4gICAgICBjb2xvcjogYmdzKHRoZW1lKVttYXRjaENvbG9yXSxcclxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgfSxcclxuICAgIFtcIiY6aG92ZXJcIl06IHtcclxuICAgICAgYmFja2dyb3VuZDogYmdzSG92ZXIodGhlbWUpW21hdGNoQ29sb3JdLFxyXG4gICAgICBbXCImLk11aUJ1dHRvbi1vdXRsaW5lZFwiXToge1xyXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCBgICsgYmdzSG92ZXIodGhlbWUpW21hdGNoQ29sb3JdLFxyXG4gICAgICB9LFxyXG4gICAgICBbXCImLk11aUJ1dHRvbi1vdXRsaW5lZCwmLk11aUJ1dHRvbi10ZXh0XCJdOiB7XHJcbiAgICAgICAgY29sb3I6IGNvbG9ySG92ZXIodGhlbWUpW21hdGNoQ29sb3JdLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgdXNlQnV0dG9uU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICB2YXBlOiBnZXRDb2xvckZvcihcInZhcGVcIiwgdGhlbWUpLFxyXG4gICAgZGVmYXVsdDogZ2V0Q29sb3JGb3IoXCJkZWZhdWx0XCIsIHRoZW1lKSxcclxuICAgIGJsdWU6IGdldENvbG9yRm9yKFwiYmx1ZVwiLCB0aGVtZSksXHJcbiAgICBwcmltYXJ5OiBnZXRDb2xvckZvcihcInByaW1hcnlcIiwgdGhlbWUpLFxyXG4gICAgc2Vjb25kYXJ5OiBnZXRDb2xvckZvcihcInNlY29uZGFyeVwiLCB0aGVtZSksXHJcbiAgICBzdWNjZXNzOiBnZXRDb2xvckZvcihcInN1Y2Nlc3NcIiwgdGhlbWUpLFxyXG4gICAgZXJyb3I6IGdldENvbG9yRm9yKFwiZXJyb3JcIiwgdGhlbWUpLFxyXG4gICAgd2FybmluZzogZ2V0Q29sb3JGb3IoXCJ3YXJuaW5nXCIsIHRoZW1lKSxcclxuICAgIHRlcnRpYXJ5OiBnZXRDb2xvckZvcihcInRlcnRpYXJ5XCIsIHRoZW1lKSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgY29sb3I6IGNvbG9yKHRoZW1lKS50ZXh0LFxyXG4gICAgICBiYWNrZ3JvdW5kOiBiZ3ModGhlbWUpLnRleHQsXHJcbiAgICAgIFtcIiY6aG92ZXJcIl06IHtcclxuICAgICAgICBjb2xvcjogY29sb3JIb3Zlcih0aGVtZSkudGV4dCxcclxuICAgICAgICBiYWNrZ3JvdW5kOiBiZ3NIb3Zlcih0aGVtZSkudGV4dCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBleHBlbnNlOiBnZXRDb2xvckZvcihcImV4cGVuc2VcIiwgdGhlbWUpLFxyXG4gICAgc2hvcDogZ2V0Q29sb3JGb3IoXCJzaG9wXCIsIHRoZW1lKSxcclxuICB9KVxyXG4pO1xyXG5cclxuZnVuY3Rpb24gc3dpdGNoQ29sb3JUb1JlZ3VsYXIoXHJcbiAgY29sb3I/OiBCdXR0b25TdHlsZXNDb2xvcixcclxuKSB7XHJcbiAgc3dpdGNoIChjb2xvcikge1xyXG4gICAgY2FzZSBcImJsdWVcIjpcclxuICAgIGNhc2UgXCJlcnJvclwiOlxyXG4gICAgY2FzZSBcImV4cGVuc2VcIjpcclxuICAgIGNhc2UgXCJzaG9wXCI6XHJcbiAgICBjYXNlIFwic3VjY2Vzc1wiOlxyXG4gICAgY2FzZSBcInRlcnRpYXJ5XCI6XHJcbiAgICBjYXNlIFwidGV4dFwiOlxyXG4gICAgY2FzZSBcInZhcGVcIjpcclxuICAgIGNhc2UgXCJ3YXJuaW5nXCI6XHJcbiAgICBjYXNlIFwiZGVmYXVsdFwiOlxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgY2FzZSBcImluaGVyaXRcIjpcclxuICAgIGNhc2UgXCJwcmltYXJ5XCI6XHJcbiAgICBjYXNlIFwic2Vjb25kYXJ5XCI6XHJcbiAgICBjYXNlIHVuZGVmaW5lZDpcclxuICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYXNzZXJ0TmV2ZXIoY29sb3IpO1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBzd2l0Y2hDb2xvclRvQ3VzdG9tKFxyXG4gIGNvbG9yPzogQnV0dG9uU3R5bGVzQ29sb3IsXHJcbikge1xyXG4gIHN3aXRjaCAoY29sb3IpIHtcclxuICAgIGNhc2UgXCJpbmhlcml0XCI6XHJcbiAgICBjYXNlIFwicHJpbWFyeVwiOlxyXG4gICAgY2FzZSBcInNlY29uZGFyeVwiOlxyXG4gICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICBjYXNlIFwiYmx1ZVwiOlxyXG4gICAgY2FzZSBcImVycm9yXCI6XHJcbiAgICBjYXNlIFwiZXhwZW5zZVwiOlxyXG4gICAgY2FzZSBcInNob3BcIjpcclxuICAgIGNhc2UgXCJzdWNjZXNzXCI6XHJcbiAgICBjYXNlIFwidGVydGlhcnlcIjpcclxuICAgIGNhc2UgXCJ0ZXh0XCI6XHJcbiAgICBjYXNlIFwidmFwZVwiOlxyXG4gICAgY2FzZSBcIndhcm5pbmdcIjpcclxuICAgIGNhc2UgXCJkZWZhdWx0XCI6XHJcbiAgICAgIHJldHVybiBjb2xvcjtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBhc3NlcnROZXZlcihjb2xvcik7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQnJhbmRCdXR0b24gPSAoXHJcbiAgeyBjaGlsZHJlbiwgdmFyaWFudCA9IFwiY29udGFpbmVkXCIsIGNsYXNzTmFtZSwgY29sb3IsIHNpemUsIC4uLm90aGVyIH06XHJcbiAgICBQcm9wc1dpdGhDaGlsZHJlbjxcclxuICAgICAgQnV0dG9uU3R5bGVzXHJcbiAgICA+LFxyXG4pID0+IHtcclxuICBjb25zdCBkZWZhdWx0Q29sb3IgPSBzd2l0Y2hDb2xvclRvUmVndWxhcihjb2xvcik7XHJcbiAgY29uc3QgY3VzdG9tQ29sb3IgPSBzd2l0Y2hDb2xvclRvQ3VzdG9tKGNvbG9yKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlQnV0dG9uU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiA8QnV0dG9uXHJcbiAgICBjb2xvcj17ZGVmYXVsdENvbG9yfVxyXG4gICAgdmFyaWFudD17dmFyaWFudH1cclxuICAgIHNpemU9e3NpemUgPT09IFwiZGVmYXVsdFwiID8gdW5kZWZpbmVkIDogc2l6ZX1cclxuICAgIHsuLi5vdGhlcn1cclxuICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgW3sgW2NsYXNzZXNbY3VzdG9tQ29sb3IgfHwgXCJkZWZhdWx0XCJdXTogY3VzdG9tQ29sb3IgfV0sXHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICl9XHJcbiAgPlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvQnV0dG9uPjtcclxufTtcclxuIiwiZXhwb3J0IHsgV0J1dHRvbiwgV0ljb25CdXR0b24gfSBmcm9tIFwiLi9XQnV0dG9uXCI7XHJcbmV4cG9ydCB7IEltYWdlQnV0dG9uIH0gZnJvbSBcIi4vSW1hZ2VCdXR0b25cIjtcclxuZXhwb3J0IHsgQnJhbmRCdXR0b24gfSBmcm9tIFwiLi9CcmFuZEJ1dHRvblwiO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRoZW1lLCBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b25CYXNlLCB7IEJ1dHRvbkJhc2VQcm9wcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcblxyXG5jb25zdCBCT1JERVJfUkFESU9VUyA9IDI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgbWluV2lkdGg6IDMwMCxcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IEJPUkRFUl9SQURJT1VTLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIGhlaWdodDogMjAwLFxyXG5cclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIiwgLy8gT3ZlcnJpZGVzIGlubGluZS1zdHlsZVxyXG4gICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICB9LFxyXG4gICAgICBcIiY6aG92ZXIsICYkZm9jdXNWaXNpYmxlXCI6IHtcclxuICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgXCImICRpbWFnZUJhY2tkcm9wXCI6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuMTUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIiYgJGltYWdlTWFya2VkXCI6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIiYgJGltYWdlVGl0bGVcIjoge1xyXG4gICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYigyNTUgMjU1IDI1NSAvIDkzJSlcIixcclxuICAgICAgICAgIGJvcmRlcjogXCIzcHggc29saWQgY3VycmVudENvbG9yXCIsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJvcGFjaXR5XCIpLFxyXG4gICAgICAgICAgLy8gZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAvLyBib3JkZXI6IFwiNHB4IHNvbGlkIHJnYmEoNDAsIDQwLCA0MCw4NCUpXCIsXHJcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBcInJnYmEoNDAsIDQwLCA0MCw4NCUpXCIsXHJcbiAgICAgICAgICAvLyBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvY3VzVmlzaWJsZToge30sXHJcbiAgICBpbWFnZUJ1dHRvbjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cclxuICAgICAgbGVmdDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgICBpbWFnZVNyYzoge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBib3R0b206IDAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogQk9SREVSX1JBRElPVVMsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgIC8vICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciA0MCVcIixcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciAwXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGltYWdlQmFja2Ryb3A6IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgICAgb3BhY2l0eTogMC40LFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJvcGFjaXR5XCIpLFxyXG4gICAgfSxcclxuICAgIGltYWdlVGl0bGU6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZygyKX1weCAke3RoZW1lLnNwYWNpbmcoNCl9cHggJHt0aGVtZS5zcGFjaW5nKDEpICtcclxuICAgICAgICA2fXB4YCxcclxuICAgIH0sXHJcbiAgICBpbWFnZU1hcmtlZDoge1xyXG4gICAgICBoZWlnaHQ6IDMsXHJcbiAgICAgIHdpZHRoOiAxOCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgYm90dG9tOiAtMixcclxuICAgICAgbGVmdDogXCJjYWxjKDUwJSAtIDlweClcIixcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwib3BhY2l0eVwiKSxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmludGVyZmFjZSBJbWFnZUJ1dHRvblByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgbWluSGVpZ2h0PzogbnVtYmVyO1xyXG4gIGJ1dHRvbVByb3BzPzogQnV0dG9uQmFzZVByb3BzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSW1hZ2VCdXR0b24oXHJcbiAgeyB0aXRsZSwgd2lkdGgsIHVybCwgbWluSGVpZ2h0ID0gMjUwLCBidXR0b21Qcm9wcyA9IHt9IH06IEltYWdlQnV0dG9uUHJvcHMsXHJcbikge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIDxCdXR0b25CYXNlXHJcbiAgICBmb2N1c1JpcHBsZVxyXG4gICAga2V5PXt0aXRsZX1cclxuICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cclxuICAgIGZvY3VzVmlzaWJsZUNsYXNzTmFtZT17Y2xhc3Nlcy5mb2N1c1Zpc2libGV9XHJcbiAgICBzdHlsZT17e1xyXG4gICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgIG1pbkhlaWdodDogbWluSGVpZ2h0LFxyXG4gICAgfX1cclxuICAgIHsuLi5idXR0b21Qcm9wc31cclxuICA+XHJcbiAgICA8c3BhblxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VTcmN9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7dXJsfSlgLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUJhY2tkcm9wfSAvPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQnV0dG9ufT5cclxuICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVRpdGxlfVxyXG4gICAgICA+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZU1hcmtlZH0gLz5cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvQnV0dG9uQmFzZT47XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIHdpdGhTdHlsZXMsXHJcbiAgQ3JlYXRlQ1NTUHJvcGVydGllcyxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xyXG5pbXBvcnQgTXVpQnV0dG9uLCB7XHJcbiAgQnV0dG9uUHJvcHMsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgTXVpSWNvbkJ1dHRvbSwgeyBJY29uQnV0dG9uUHJvcHMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFBhbGV0dGVDb2xvcktleXMgPVxyXG4gIHwgXCJwcmltYXJ5XCJcclxuICB8IFwic2Vjb25kYXJ5XCJcclxuICB8IFwiZXJyb3JcIlxyXG4gIHwgXCJ3YXJuaW5nXCJcclxuICB8IFwidGVydGlhcnlcIlxyXG4gIHwgXCJzdWNjZXNzXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRPdmVycmlkZXNDb2xvcihcclxuICBjb2xvcktleTogUGFsZXR0ZUNvbG9yS2V5cyxcclxuICB2YXJpYW50OiBcInRleHRcIiB8IFwib3V0bGluZWRcIiB8IFwiY29udGFpbmVkXCIsXHJcbiAgdGhlbWU6IFRoZW1lLFxyXG4pOiBDcmVhdGVDU1NQcm9wZXJ0aWVzIHtcclxuICByZXR1cm4ge1xyXG4gICAgY29sb3I6IHRoZW1lXHJcbiAgICAgIC5wYWxldHRlW2NvbG9yS2V5XVt2YXJpYW50ID09PSBcImNvbnRhaW5lZFwiID8gXCJjb250cmFzdFRleHRcIiA6IFwibWFpblwiXSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPdmVycmlkZXNCYWNrZ3JvdW5kQ29udGFpbmVkKFxyXG4gIGNvbG9yS2V5OiBQYWxldHRlQ29sb3JLZXlzLFxyXG4gIHRoZW1lOiBUaGVtZSxcclxuKTogQ3JlYXRlQ1NTUHJvcGVydGllcyB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZVtjb2xvcktleV0ubWFpbixcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZVtjb2xvcktleV0uZGFyayxcclxuICAgICAgLy8gUmVzZXQgb24gdG91Y2ggZGV2aWNlcywgaXQgZG9lc24ndCBhZGQgc3BlY2lmaWNpdHlcclxuICAgICAgXCJAbWVkaWEgKGhvdmVyOiBub25lKVwiOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlW2NvbG9yS2V5XS5tYWluLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBXQnV0dG9uOiBSZWFjdC5Db21wb25lbnRUeXBlPEJ1dHRvblByb3BzPiA9IHdpdGhTdHlsZXMoKFxyXG4gIHRoZW1lOiBUaGVtZSxcclxuKSA9PiAoe1xyXG4gIHJvb3Q6IChwcm9wczogQnV0dG9uUHJvcHMpID0+XHJcbiAgICBwcm9wcy52YXJpYW50ID09PSBcImNvbnRhaW5lZFwiICYmIHByb3BzLmNvbG9yICYmXHJcbiAgICBwcm9wcy5jb2xvciAhPT0gXCJpbmhlcml0XCIgJiYgcHJvcHMuY29sb3IgIT09IFwiZGVmYXVsdFwiXHJcbiAgICAgID8ge1xyXG4gICAgICAgIC4uLmdldE92ZXJyaWRlc0NvbG9yKHByb3BzLmNvbG9yLCBwcm9wcy52YXJpYW50LCB0aGVtZSksXHJcbiAgICAgICAgLi4uZ2V0T3ZlcnJpZGVzQmFja2dyb3VuZENvbnRhaW5lZChwcm9wcy5jb2xvciwgdGhlbWUpLFxyXG4gICAgICB9XHJcbiAgICAgIDogKHByb3BzLnZhcmlhbnQgPT09IFwib3V0bGluZWRcIiB8fCBwcm9wcy52YXJpYW50ID09PSBcInRleHRcIikgJiZcclxuICAgICAgICBwcm9wcy5jb2xvciAmJlxyXG4gICAgICAgIHByb3BzLmNvbG9yICE9PSBcImluaGVyaXRcIiAmJiBwcm9wcy5jb2xvciAhPT0gXCJkZWZhdWx0XCJcclxuICAgICAgPyB7IC4uLmdldE92ZXJyaWRlc0NvbG9yKHByb3BzLmNvbG9yLCBwcm9wcy52YXJpYW50LCB0aGVtZSkgfVxyXG4gICAgICA6IHt9LFxyXG59KSkoTXVpQnV0dG9uKTtcclxuXHJcbmNvbnN0IFdJY29uQnV0dG9uOiBSZWFjdC5Db21wb25lbnRUeXBlPEljb25CdXR0b25Qcm9wcz4gPSB3aXRoU3R5bGVzKChcclxuICB0aGVtZTogVGhlbWUsXHJcbikgPT4gKHtcclxuICByb290OiAocHJvcHM6IEljb25CdXR0b25Qcm9wcykgPT5cclxuICAgIHByb3BzLmNvbG9yICYmXHJcbiAgICBwcm9wcy5jb2xvciAhPT0gXCJpbmhlcml0XCIgJiYgcHJvcHMuY29sb3IgIT09IFwiZGVmYXVsdFwiXHJcbiAgICAgID8ge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlW3Byb3BzLmNvbG9yXS5tYWluLFxyXG4gICAgICAgIFtcIiY6ZGlzYWJsZWRcIl06IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtcIiY6aG92ZXJcIl06IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlW3Byb3BzLmNvbG9yXS5kYXJrLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICAgOiB7fSxcclxufSkpKE11aUljb25CdXR0b20pO1xyXG5cclxuZXhwb3J0IHsgV0J1dHRvbiwgV0ljb25CdXR0b24gfTtcclxuIiwiaW1wb3J0IHsgY29tbW9uLCBncmVlbiwgcmVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG5pbXBvcnQgcHJpbWFyeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2JsdWVHcmV5XCI7XHJcbmltcG9ydCBzZWNvbmRhcnkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy90ZWFsXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlTXVpVGhlbWUsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBEZWZhdWx0VGhlbWUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuLy8gZXhwb3J0IGNvbnN0IFNFQ09OREFSWV9DT0xPUiA9IHNlY29uZGFyeVs1MDBdO1xyXG5leHBvcnQgY29uc3QgU0VDT05EQVJZX0NPTE9SID0gc2Vjb25kYXJ5WzQwMF07XHJcbmV4cG9ydCBjb25zdCBTRUNPTkRBUllfQ09MT1JfQ09OVFJBU1QgPSBjb21tb25bXCJ3aGl0ZVwiXTtcclxuZXhwb3J0IGxldCBQUklNQVJZX0NPTE9SOiBzdHJpbmcgPSBwcmltYXJ5WzkwMF07XHJcbmV4cG9ydCBjb25zdCBUT09MQkFSX01JTl9IRUlHSFQgPSAxNTtcclxuZXhwb3J0IGNvbnN0IFBSSU1BUllfQ09MT1JfQ09OVFJBU1QgPSBjb21tb25bXCJ3aGl0ZVwiXTtcclxuZXhwb3J0IGNvbnN0IERBUktfQ09MT1IgPSBcIiMwNDBjMTRcIjtcclxuZXhwb3J0IGNvbnN0IExJR0hUX0NPTE9SID0gY29tbW9uW1wid2hpdGVcIl07XHJcbmV4cG9ydCBjb25zdCBURVJUSUFSWV9DT0xPUiA9IFwiI2M0NzA3MFwiO1xyXG5leHBvcnQgY29uc3QgVEVSVElBUllfQ09MT1JfQ09OVFJBU1QgPSBjb21tb25bXCJ3aGl0ZVwiXTtcclxuXHJcbmNvbnN0IEJPUkRFUl9SQURJT1VTID0gNDtcclxuXHJcbi8vQ29vbCBHcmVlbiAvIzM4YjU4NFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaGVtZShwcmVmZXJzRGFya01vZGUgPSBmYWxzZSkge1xyXG4gIC8vIFBSSU1BUllfQ09MT1IgPSBwcmVmZXJzRGFya01vZGUgPyBcIiMzMTlkZGZcIiA6IHByaW1hcnlbOTAwXTtcclxuICBQUklNQVJZX0NPTE9SID0gcHJlZmVyc0RhcmtNb2RlID8gXCIjMDQwYzE0XCIgOiBwcmltYXJ5WzkwMF07XHJcblxyXG4gIGNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gICAgc3RhdHVzOiB7XHJcbiAgICAgIGRhbmdlcjogcmVkWzUwMF0sXHJcbiAgICB9LFxyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICB0eXBlOiBwcmVmZXJzRGFya01vZGUgPyBcImRhcmtcIiA6IFwibGlnaHRcIixcclxuICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgIG1haW46IFBSSU1BUllfQ09MT1IsXHJcbiAgICAgICAgY29udHJhc3RUZXh0OiBQUklNQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBtYWluOiBTRUNPTkRBUllfQ09MT1IsXHJcblxyXG4gICAgICAgIGNvbnRyYXN0VGV4dDogU0VDT05EQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgICB9LFxyXG4gICAgICB0ZXJ0aWFyeToge1xyXG4gICAgICAgIG1haW46IFRFUlRJQVJZX0NPTE9SLFxyXG4gICAgICAgIGRhcms6IFwiIzkxNDM0NVwiLFxyXG4gICAgICAgIGxpZ2h0OiBcIiNmOWEwOWVcIixcclxuICAgICAgICBjb250cmFzdFRleHQ6IFRFUlRJQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiB7XHJcbiAgICAgICAgLi4uZ3JlZW4sXHJcbiAgICAgICAgbWFpbjogXCIjNjg5ZjM4XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICAvLyBkZWZhdWx0OiBcIiMzMDMwMzBcIixcclxuICAgICAgICBkZWZhdWx0OiBwcmVmZXJzRGFya01vZGUgPyBcIiMyNzI1MjVcIiA6IFwiI2ZmZlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNoYXBlOiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogQk9SREVSX1JBRElPVVMsXHJcbiAgICB9LFxyXG4gICAgc3BhY2luZzogMTYsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBNdWlQYXBlcjoge1xyXG4gICAgICAgIGVsZXZhdGlvbjogMyxcclxuICAgICAgfSxcclxuICAgICAgTXVpVGV4dEZpZWxkOiB7XHJcbiAgICAgICAgSW5wdXRMYWJlbFByb3BzOiB7XHJcbiAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpQnV0dG9uOiB7XHJcbiAgICAgICAgZGlzYWJsZVJpcHBsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgTXVpQ2hlY2tib3g6IHtcclxuICAgICAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG92ZXJyaWRlczoge1xyXG4gICAgICBNdWlQYXBlcjoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGNvbG9yOiBwcmVmZXJzRGFya01vZGUgPyBcIiNkMmQyZDJcIiA6IGNvbW1vbltcIndoaXRlXCJdLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcmVmZXJzRGFya01vZGUgPyBcIiMyYzJjMmNcIiA6IFwiIzMwMzAzMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aU1vYmlsZVN0ZXBwZXI6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uQm90dG9tOiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUFwcEJhcjoge1xyXG4gICAgICAgIHBvc2l0aW9uRml4ZWQ6IHtcclxuICAgICAgICAgIHpJbmRleDogMTEwMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlUb29sYmFyOiB7XHJcbiAgICAgICAgZ3V0dGVyczoge1xyXG4gICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiA2MDBweClcIjoge1xyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWd1bGFyOiB7XHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFRPT0xCQVJfTUlOX0hFSUdIVCxcclxuICAgICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KVwiOiB7XHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIG1pbkhlaWdodDogVE9PTEJBUl9NSU5fSEVJR0hULFxyXG4gICAgICAgICAgXCJAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpXCI6IHtcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBUT09MQkFSX01JTl9IRUlHSFQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUZpbGxlZElucHV0OiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgTXVpSW5wdXRMYWJlbDoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aUJ1dHRvbjoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICB0aGVtZS5wYWxldHRlLnRlcnRpYXJ5ID0gdGhlbWUucGFsZXR0ZS5hdWdtZW50Q29sb3Ioe1xyXG4gICAgbWFpbjogXCIjYzQ3MDcwXCIsXHJcbiAgICBkYXJrOiBcIiM5MTQzNDVcIixcclxuICAgIGxpZ2h0OiBcIiNmOWEwOWVcIixcclxuICAgIGNvbnRyYXN0VGV4dDogUFJJTUFSWV9DT0xPUl9DT05UUkFTVCxcclxuICB9KTtcclxuICByZXR1cm4gdGhlbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdHlsZWRDb21wb25lbnRzVGhlbWU6IERlZmF1bHRUaGVtZSA9IHtcclxuICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgY29sb3JzOiB7XHJcbiAgICBwcmltYXJ5OiBQUklNQVJZX0NPTE9SLFxyXG4gICAgcHJpbWFyeUNvbnRyYXN0OiBQUklNQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgc2Vjb25kYXJ5OiBTRUNPTkRBUllfQ09MT1IsXHJcbiAgICBzZWNvbmRhcnlDb250cmFzdDogU0VDT05EQVJZX0NPTE9SX0NPTlRSQVNULFxyXG4gICAgZGFyazogREFSS19DT0xPUixcclxuICAgIGxpZ2h0OiBMSUdIVF9DT0xPUixcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgIH0sXHJcbiAgICBub1BhZGRpbmdYOiB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAwLFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6IDAsXHJcbiAgICB9LFxyXG4gICAgbWluUGFkZGluZ1g6IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMC41KSxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDAuNSksXHJcbiAgICB9LFxyXG4gICAgZmxleENlbnRlcjoge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgY29uc3RyYWluZWRTZWN0aW9uOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMub25seShcIm1kXCIpXToge1xyXG4gICAgICAgIC8vIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgLy8gcmlnaHQ6IDAsXHJcbiAgICAgICAgbWluV2lkdGg6IHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy5tZCArIDIwLFxyXG4gICAgICAgIGNvbG9yOiBcInllbGxvd1wiLFxyXG4gICAgICAgIG1heFdpZHRoOiB0aGVtZS5icmVha3BvaW50cy52YWx1ZXMubWQgLSAyNDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcImxnXCIpXToge1xyXG4gICAgICAgIG1heFdpZHRoOiB0aGVtZS5icmVha3BvaW50cy52YWx1ZXMubGcgLSAyNDAsXHJcbiAgICAgICAgbWluV2lkdGg6IHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy5sZyArIDIwLFxyXG4gICAgICAgIGNvbG9yOiBcImJsdWVcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==