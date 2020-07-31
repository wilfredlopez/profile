webpackHotUpdate("static\\development\\pages\\_app.js",{

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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_DragHandle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/DragHandle */ "./node_modules/@material-ui/icons/DragHandle.js");
/* harmony import */ var _material_ui_icons_DragHandle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DragHandle__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "./node_modules/@material-ui/icons/LinkedIn.js");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "./node_modules/@material-ui/icons/Twitter.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Web__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Web */ "./node_modules/@material-ui/icons/Web.js");
/* harmony import */ var _material_ui_icons_Web__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Web__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @components/shared */ "./src/components/shared/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _root_styles_getTheme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @root/styles/getTheme */ "./src/styles/getTheme.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_23__);


var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\Layout\\SideDrawer.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



















 // import { NavLink } from "react-router-dom";





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(theme => ({
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
const StyledNavLink = styled_components__WEBPACK_IMPORTED_MODULE_21__["default"].a.withConfig({
  displayName: "SideDrawer__StyledNavLink",
  componentId: "evp6zq-0"
})(["color:", ";text-decoration:none;"], props => props.isActive ? _root_styles_getTheme__WEBPACK_IMPORTED_MODULE_22__["SECONDARY_COLOR"] : "inherit");
_c = StyledNavLink;
const SOCIAL_LINKS = [{
  href: "https://github.com/wilfredlopez",
  text: "Github",
  Icon: __jsx(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  })
}, {
  href: "https://www.linkedin.com/in/wilfred-lopez-a309b896",
  text: "LinkedIn",
  Icon: __jsx(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  })
}, {
  href: "https://twitter.com/wilfreddonaldlo?ref_src=twsrc%5Etfw",
  text: "@wilfreddonaldlo",
  Icon: __jsx(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  })
}];
const NAV_LINKS = [{
  href: "/",
  text: "Home",
  Icon: __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  })
}, {
  href: "/projects",
  text: "Showcase Projects",
  Icon: __jsx(_material_ui_icons_Web__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  })
}, {
  href: "/contact",
  text: "Contact",
  Icon: __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  })
}];
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
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_23__["useRouter"])(); // const theme = useTheme()

  const isBreakpoint = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"])(theme => theme.breakpoints.up("md"), {
    defaultMatches: true
  });
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_19___default.a.useState({
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
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_17__["default"])(classes.list, {
      [classes.fullList]: anchor === "top" || anchor === "bottom"
    }),
    role: "presentation",
    onClick: toggleDrawer(anchor, false),
    onKeyDown: toggleDrawer(anchor, false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, NAV_LINKS.map(({
    text,
    href,
    Icon
  }, index) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_20___default.a, {
    key: text,
    href: href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, __jsx(StyledNavLink, {
    isActive: href === router.pathname,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      color: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 17
    }
  }, Icon ? Icon : __jsx(_material_ui_icons_DragHandle__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 34
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    primary: text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 17
    }
  })))))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    button: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }
  }, "Social Media")), SOCIAL_LINKS.map(({
    text,
    Icon,
    href
  }, index) => __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_18__["StyledHtmlLink"], {
    href: href,
    title: text,
    target: "_blank",
    rel: "noopener noreferrer",
    role: "link",
    key: text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      color: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 15
    }
  }, Icon ? Icon : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 32
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    primary: text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 15
    }
  }))))));

  const isOpen = state[anchor] || isBreakpoint;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_19___default.a.Fragment, {
    key: anchor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Hidden"], {
    mdUp: true,
    initialWidth: "sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    edge: "start",
    onClick: toggleDrawer(anchor, true),
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "navbar-drawer",
    anchor: anchor,
    variant: "permanent" // open={isOpen}
    // ModalProps={{
    //   disableScrollLock: true,
    //   style: {
    //     position: "relative",
    //   },
    // }}
    // PaperProps={{
    //   style: {
    //     width: 240,
    //   },
    // }}
    // SlideProps={{
    //   timeout: {
    //     exit: 300,
    //     enter: 250,
    //   },
    // }}
    // hideBackdrop={isBreakpoint}
    ,
    onClose: toggleDrawer(anchor, false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }
  }, list(anchor)));
}

_s(SideDrawer, "df+iMRug+XvJx3bcY9usCMfbJsw=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_23__["useRouter"], _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"]];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU2lkZURyYXdlci50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibGlzdCIsIndpZHRoIiwiZnVsbExpc3QiLCJtZW51QnV0dG9uIiwibWluSGVpZ2h0IiwibWluV2lkdGgiLCJ6SW5kZXgiLCJTdHlsZWROYXZMaW5rIiwic3R5bGVkIiwiYSIsInByb3BzIiwiaXNBY3RpdmUiLCJTRUNPTkRBUllfQ09MT1IiLCJTT0NJQUxfTElOS1MiLCJocmVmIiwidGV4dCIsIkljb24iLCJOQVZfTElOS1MiLCJ2YXJpYW50cyIsIm9wZW4iLCJvcGFjaXR5IiwieCIsImNsb3NlZCIsImxpc3RJdGVtVmFyaWFudHMiLCJ5IiwiU2lkZURyYXdlciIsImFuY2hvciIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0JyZWFrcG9pbnQiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJ1cCIsImRlZmF1bHRNYXRjaGVzIiwic3RhdGUiLCJzZXRTdGF0ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJ0b2dnbGVEcmF3ZXIiLCJldmVudCIsInR5cGUiLCJrZXkiLCJjbHN4IiwibWFwIiwiaW5kZXgiLCJwYXRobmFtZSIsImNvbG9yIiwiaXNPcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUVDLEtBQUQsS0FBWTtBQUN2Q0MsTUFBSSxFQUFFO0FBQ0pDLFNBQUss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RSxFQUFDLGVBREw7QUFFRSxVQUFNLEVBQUV1QixNQUZWO0FBR0UsV0FBTyxFQUFDLFdBSFYsQ0FJRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRCRjtBQXVCRSxXQUFPLEVBQUVpQixZQUFZLENBQUNqQixNQUFELEVBQVMsS0FBVCxDQXZCdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXlCRzFCLElBQUksQ0FBQzBCLE1BQUQsQ0F6QlAsQ0FiRixDQURGO0FBMkNEOztHQXJJdUJELFU7VUFDTjVCLFMsRUFFRGdDLHNELEVBR01FLCtEOzs7TUFOQ04sVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5hYWI4ZmY5MDM2ZTk4Y2UxNmYzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgSGlkZGVuLFxyXG4gIEljb25CdXR0b24sXHJcbiAgVGhlbWUsXHJcbiAgVHlwb2dyYXBoeSxcclxuICB1c2VNZWRpYVF1ZXJ5LFxyXG4gIHVzZVRoZW1lLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBEcmFnSGFuZGxlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RyYWdIYW5kbGVcIjtcclxuaW1wb3J0IEdpdEh1Ykljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9HaXRIdWJcIjtcclxuaW1wb3J0IEhvbWVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZVwiO1xyXG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlua2VkSW5cIjtcclxuaW1wb3J0IE1haWxJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCI7XHJcbmltcG9ydCBUd2l0dGVySWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXJcIjtcclxuaW1wb3J0IFdlYkljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9XZWJcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgU3R5bGVkSHRtbExpbmsgfSBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBOYXZMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgUFJJTUFSWV9DT0xPUiwgU0VDT05EQVJZX0NPTE9SIH0gZnJvbSBcIkByb290L3N0eWxlcy9nZXRUaGVtZVwiO1xyXG5pbXBvcnQgeyB1c2VQYWdlc0NvbnRleHQgfSBmcm9tIFwiQHJvb3QvY29udGV4dC9QYWdlc0NvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGxpc3Q6IHtcclxuICAgIHdpZHRoOiAyNTAsXHJcbiAgfSxcclxuICBmdWxsTGlzdDoge1xyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgLy8gbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMC41KSxcclxuICAgIC8vIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMC41KSxcclxuICAgIG1pbkhlaWdodDogNTAsXHJcbiAgICBtaW5XaWR0aDogNTAsXHJcbiAgICB6SW5kZXg6IDEwMDEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgU3R5bGVkTmF2TGluayA9IHN0eWxlZC5hPHsgaXNBY3RpdmU/OiBib29sZWFuIH0+YFxyXG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5pc0FjdGl2ZSA/IFNFQ09OREFSWV9DT0xPUiA6IFwiaW5oZXJpdFwifSA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIFxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIE5hdkxpbmtJdGVtIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIEljb24/OiBKU1guRWxlbWVudDtcclxufVxyXG5cclxuY29uc3QgU09DSUFMX0xJTktTOiBOYXZMaW5rSXRlbVtdID0gW1xyXG4gIHtcclxuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL3dpbGZyZWRsb3BlelwiLFxyXG4gICAgdGV4dDogXCJHaXRodWJcIixcclxuICAgIEljb246IDxHaXRIdWJJY29uIC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vd2lsZnJlZC1sb3Blei1hMzA5Yjg5NlwiLFxyXG4gICAgdGV4dDogXCJMaW5rZWRJblwiLFxyXG4gICAgSWNvbjogPExpbmtlZEluSWNvbiAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIGhyZWY6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS93aWxmcmVkZG9uYWxkbG8/cmVmX3NyYz10d3NyYyU1RXRmd1wiLFxyXG4gICAgdGV4dDogXCJAd2lsZnJlZGRvbmFsZGxvXCIsXHJcbiAgICBJY29uOiA8VHdpdHRlckljb24gLz4sXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IE5BVl9MSU5LUzogTmF2TGlua0l0ZW1bXSA9IFtcclxuICB7XHJcbiAgICBocmVmOiBcIi9cIixcclxuICAgIHRleHQ6IFwiSG9tZVwiLFxyXG4gICAgSWNvbjogPEhvbWVJY29uIC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaHJlZjogXCIvcHJvamVjdHNcIixcclxuICAgIHRleHQ6IFwiU2hvd2Nhc2UgUHJvamVjdHNcIixcclxuICAgIEljb246IDxXZWJJY29uIC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaHJlZjogXCIvY29udGFjdFwiLFxyXG4gICAgdGV4dDogXCJDb250YWN0XCIsXHJcbiAgICBJY29uOiA8TWFpbEljb24gLz4sXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCB0eXBlIEFuY2hvciA9IFwidG9wXCIgfCBcImxlZnRcIiB8IFwiYm90dG9tXCIgfCBcInJpZ2h0XCI7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgYW5jaG9yOiBBbmNob3I7XHJcbn1cclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIG9wZW46IHsgb3BhY2l0eTogMSwgeDogMCB9LFxyXG4gIGNsb3NlZDogeyBvcGFjaXR5OiAwLCB4OiBcIi0xMDAlXCIgfSxcclxufTtcclxuXHJcbmNvbnN0IGxpc3RJdGVtVmFyaWFudHMgPSB7XHJcbiAgb3Blbjoge1xyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIHk6IDAsXHJcbiAgfSxcclxuICBjbG9zZWQ6IHsgb3BhY2l0eTogMCwgeTogXCItMTAwJVwiIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlRHJhd2VyKHsgYW5jaG9yIH06IFByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcbiAgY29uc3QgaXNCcmVha3BvaW50ID0gdXNlTWVkaWFRdWVyeShcclxuICAgICh0aGVtZTogVGhlbWUpID0+IHRoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIiksXHJcbiAgICB7XHJcbiAgICAgIGRlZmF1bHRNYXRjaGVzOiB0cnVlLFxyXG4gICAgfSxcclxuICApO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgdG9wOiBmYWxzZSxcclxuICAgIGxlZnQ6IGZhbHNlLFxyXG4gICAgYm90dG9tOiBmYWxzZSxcclxuICAgIHJpZ2h0OiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKGFuY2hvcjogQW5jaG9yLCBvcGVuOiBib29sZWFuKSA9PlxyXG4gICAgKFxyXG4gICAgICBldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudCB8IFJlYWN0Lk1vdXNlRXZlbnQsXHJcbiAgICApID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGV2ZW50LnR5cGUgPT09IFwia2V5ZG93blwiICYmXHJcbiAgICAgICAgKChldmVudCBhcyBSZWFjdC5LZXlib2FyZEV2ZW50KS5rZXkgPT09IFwiVGFiXCIgfHxcclxuICAgICAgICAgIChldmVudCBhcyBSZWFjdC5LZXlib2FyZEV2ZW50KS5rZXkgPT09IFwiU2hpZnRcIilcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbYW5jaG9yXTogb3BlbiB9KTtcclxuICAgIH07XHJcblxyXG4gIGNvbnN0IGxpc3QgPSAoYW5jaG9yOiBBbmNob3IpID0+IChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubGlzdCwge1xyXG4gICAgICAgIFtjbGFzc2VzLmZ1bGxMaXN0XTogYW5jaG9yID09PSBcInRvcFwiIHx8IGFuY2hvciA9PT0gXCJib3R0b21cIixcclxuICAgICAgfSl9XHJcbiAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XHJcbiAgICAgIG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgPlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICB7TkFWX0xJTktTLm1hcCgoeyB0ZXh0LCBocmVmLCBJY29uIH0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8TmF2TGluayBrZXk9e3RleHR9IGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICA8U3R5bGVkTmF2TGluayBpc0FjdGl2ZT17aHJlZiA9PT0gcm91dGVyLnBhdGhuYW1lfT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24gc3R5bGU9e3sgY29sb3I6IFwiaW5oZXJpdFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7SWNvbiA/IEljb24gOiA8RHJhZ0hhbmRsZUljb24gLz59XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGV4dH0gLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L1N0eWxlZE5hdkxpbms+XHJcbiAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvTGlzdD5cclxuICAgICAgPERpdmlkZXIgLz5cclxuXHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIDxMaXN0SXRlbSBidXR0b249e2ZhbHNlfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICBTb2NpYWwgTWVkaWFcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIHtTT0NJQUxfTElOS1MubWFwKCh7IHRleHQsIEljb24sIGhyZWYgfSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxTdHlsZWRIdG1sTGlua1xyXG4gICAgICAgICAgICBocmVmPXtocmVmfVxyXG4gICAgICAgICAgICB0aXRsZT17dGV4dH1cclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJsaW5rXCJcclxuICAgICAgICAgICAga2V5PXt0ZXh0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24gc3R5bGU9e3sgY29sb3I6IFwiaW5oZXJpdFwiIH19PlxyXG4gICAgICAgICAgICAgICAge0ljb24gPyBJY29uIDogPE1haWxJY29uIC8+fVxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGV4dH0gLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDwvU3R5bGVkSHRtbExpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGlzT3BlbiA9IHN0YXRlW2FuY2hvcl0gfHwgaXNCcmVha3BvaW50O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50IGtleT17YW5jaG9yfT5cclxuICAgICAgPEhpZGRlbiBtZFVwIGluaXRpYWxXaWR0aD1cInNtXCI+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCB0cnVlKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufVxyXG4gICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJtZW51XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDwvSGlkZGVuPlxyXG5cclxuICAgICAgPERyYXdlclxyXG4gICAgICAgIGlkPVwibmF2YmFyLWRyYXdlclwiXHJcbiAgICAgICAgYW5jaG9yPXthbmNob3J9XHJcbiAgICAgICAgdmFyaWFudD1cInBlcm1hbmVudFwiXHJcbiAgICAgICAgLy8gb3Blbj17aXNPcGVufVxyXG4gICAgICAgIC8vIE1vZGFsUHJvcHM9e3tcclxuICAgICAgICAvLyAgIGRpc2FibGVTY3JvbGxMb2NrOiB0cnVlLFxyXG4gICAgICAgIC8vICAgc3R5bGU6IHtcclxuICAgICAgICAvLyAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgLy8gfX1cclxuICAgICAgICAvLyBQYXBlclByb3BzPXt7XHJcbiAgICAgICAgLy8gICBzdHlsZToge1xyXG4gICAgICAgIC8vICAgICB3aWR0aDogMjQwLFxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyB9fVxyXG4gICAgICAgIC8vIFNsaWRlUHJvcHM9e3tcclxuICAgICAgICAvLyAgIHRpbWVvdXQ6IHtcclxuICAgICAgICAvLyAgICAgZXhpdDogMzAwLFxyXG4gICAgICAgIC8vICAgICBlbnRlcjogMjUwLFxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyB9fVxyXG4gICAgICAgIC8vIGhpZGVCYWNrZHJvcD17aXNCcmVha3BvaW50fVxyXG4gICAgICAgIG9uQ2xvc2U9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtsaXN0KGFuY2hvcil9XHJcbiAgICAgIDwvRHJhd2VyPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=