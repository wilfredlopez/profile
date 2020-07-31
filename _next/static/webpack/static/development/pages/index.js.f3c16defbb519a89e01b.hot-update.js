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
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "./node_modules/@material-ui/icons/LinkedIn.js");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "./node_modules/@material-ui/icons/Twitter.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Web__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Web */ "./node_modules/@material-ui/icons/Web.js");
/* harmony import */ var _material_ui_icons_Web__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Web__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _root_styles_getTheme__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @root/styles/getTheme */ "./src/styles/getTheme.ts");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\Layout\\SideDrawer.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



















 // import { NavLink } from "react-router-dom";





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
const StyledNavLink = styled_components__WEBPACK_IMPORTED_MODULE_23__["default"].a.withConfig({
  displayName: "SideDrawer__StyledNavLink",
  componentId: "evp6zq-0"
})(["color:", ";text-decoration:none;"], props => props.isActive ? _root_styles_getTheme__WEBPACK_IMPORTED_MODULE_18__["SECONDARY_COLOR"] : "inherit");
_c = StyledNavLink;
const SOCIAL_LINKS = [{
  href: "https://github.com/wilfredlopez",
  text: "Github",
  Icon: __jsx(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  })
}, {
  href: "https://www.linkedin.com/in/wilfred-lopez-a309b896",
  text: "LinkedIn",
  Icon: __jsx(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  })
}, {
  href: "https://twitter.com/wilfreddonaldlo?ref_src=twsrc%5Etfw",
  text: "@wilfreddonaldlo",
  Icon: __jsx(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  })
}];
const NAV_LINKS = [{
  href: "/",
  text: "Home",
  Icon: __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  })
}, {
  href: "/projects",
  text: "Showcase Projects",
  Icon: __jsx(_material_ui_icons_Web__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  })
}, {
  href: "/contact",
  text: "Contact",
  Icon: __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_21__["useRouter"])(); // const isBreakpoint = useMediaQuery(
  //   (theme: Theme) => theme.breakpoints.up("md"),
  //   {
  //     defaultMatches: true,
  //   },
  // );

  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_22___default.a.useState({
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
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_19__["default"])(classes.list, {
      [classes.fullList]: anchor === "top" || anchor === "bottom"
    }),
    role: "presentation",
    onClick: toggleDrawer(anchor, false),
    onKeyDown: toggleDrawer(anchor, false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
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
      lineNumber: 158,
      columnNumber: 11
    }
  }, __jsx(StyledNavLink, {
    isActive: href === router.pathname,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      color: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }, Icon ? Icon : __jsx(_material_ui_icons_DragHandle__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 34
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__["default"], {
    primary: text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  })))))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    button: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, "Social Media")), SOCIAL_LINKS.map(({
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
      lineNumber: 181,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      color: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 15
    }
  }, Icon ? Icon : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 32
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__["default"], {
    primary: text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 15
    }
  })))))); // const isOpen = state[anchor] || isBreakpoint;


  const isOpen = state[anchor];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_22___default.a.Fragment, {
    key: anchor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
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
      lineNumber: 207,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
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
      lineNumber: 218,
      columnNumber: 7
    }
  }, list(anchor)));
}

_s(SideDrawer, "wof15IH9TJrNHFphFvi0/C3cIq0=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_21__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU2lkZURyYXdlci50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibGlzdCIsIndpZHRoIiwiZnVsbExpc3QiLCJtZW51QnV0dG9uIiwibWluSGVpZ2h0IiwibWluV2lkdGgiLCJ6SW5kZXgiLCJTdHlsZWROYXZMaW5rIiwic3R5bGVkIiwiYSIsInByb3BzIiwiaXNBY3RpdmUiLCJTRUNPTkRBUllfQ09MT1IiLCJTT0NJQUxfTElOS1MiLCJocmVmIiwidGV4dCIsIkljb24iLCJOQVZfTElOS1MiLCJ2YXJpYW50cyIsIm9wZW4iLCJvcGFjaXR5IiwieCIsImNsb3NlZCIsImxpc3RJdGVtVmFyaWFudHMiLCJ5IiwiU2lkZURyYXdlciIsImFuY2hvciIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsInRvZ2dsZURyYXdlciIsImV2ZW50IiwidHlwZSIsImtleSIsImNsc3giLCJtYXAiLCJpbmRleCIsInBhdGhuYW1lIiwiY29sb3IiLCJpc09wZW4iLCJzdHlsZSIsInRpbWVvdXQiLCJleGl0IiwiZW50ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBRUMsS0FBRCxLQUFZO0FBQ3ZDQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFFO0FBREgsR0FEaUM7QUFJdkNDLFVBQVEsRUFBRTtB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QUFwQkY7QUFxQkUsV0FBTyxFQUFFYixZQUFZLENBQUNaLE1BQUQsRUFBUyxLQUFULENBckJ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBdUJHMUIsSUFBSSxDQUFDMEIsTUFBRCxDQXZCUCxDQWJGLENBREY7QUF5Q0Q7O0dBbkl1QkQsVTtVQUNONUIsUyxFQUVEZ0Msc0Q7OztNQUhPSixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5mM2MxNmRlZmJiNTE5YTg5ZTAxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3R5bGVkSHRtbExpbmsgfSBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkXCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG5cclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBEcmFnSGFuZGxlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RyYWdIYW5kbGVcIjtcclxuaW1wb3J0IEdpdEh1Ykljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9HaXRIdWJcIjtcclxuaW1wb3J0IEhvbWVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZVwiO1xyXG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlua2VkSW5cIjtcclxuaW1wb3J0IE1haWxJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCI7XHJcbmltcG9ydCBUd2l0dGVySWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXJcIjtcclxuaW1wb3J0IFdlYkljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9XZWJcIjtcclxuaW1wb3J0IHsgU0VDT05EQVJZX0NPTE9SIH0gZnJvbSBcIkByb290L3N0eWxlcy9nZXRUaGVtZVwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG4vLyBpbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IE5hdkxpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBsaXN0OiB7XHJcbiAgICB3aWR0aDogMjUwLFxyXG4gIH0sXHJcbiAgZnVsbExpc3Q6IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIC8vIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDAuNSksXHJcbiAgICAvLyBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDAuNSksXHJcbiAgICBtaW5IZWlnaHQ6IDUwLFxyXG4gICAgbWluV2lkdGg6IDUwLFxyXG4gICAgekluZGV4OiAxMDAxLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFN0eWxlZE5hdkxpbmsgPSBzdHlsZWQuYTx7IGlzQWN0aXZlPzogYm9vbGVhbiB9PmBcclxuICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMuaXNBY3RpdmUgPyBTRUNPTkRBUllfQ09MT1IgOiBcImluaGVyaXRcIn0gO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICBcclxuYDtcclxuXHJcbmludGVyZmFjZSBOYXZMaW5rSXRlbSB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGhyZWY6IHN0cmluZztcclxuICBJY29uPzogSlNYLkVsZW1lbnQ7XHJcbn1cclxuXHJcbmNvbnN0IFNPQ0lBTF9MSU5LUzogTmF2TGlua0l0ZW1bXSA9IFtcclxuICB7XHJcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS93aWxmcmVkbG9wZXpcIixcclxuICAgIHRleHQ6IFwiR2l0aHViXCIsXHJcbiAgICBJY29uOiA8R2l0SHViSWNvbiAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3dpbGZyZWQtbG9wZXotYTMwOWI4OTZcIixcclxuICAgIHRleHQ6IFwiTGlua2VkSW5cIixcclxuICAgIEljb246IDxMaW5rZWRJbkljb24gLz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBocmVmOiBcImh0dHBzOi8vdHdpdHRlci5jb20vd2lsZnJlZGRvbmFsZGxvP3JlZl9zcmM9dHdzcmMlNUV0ZndcIixcclxuICAgIHRleHQ6IFwiQHdpbGZyZWRkb25hbGRsb1wiLFxyXG4gICAgSWNvbjogPFR3aXR0ZXJJY29uIC8+LFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBOQVZfTElOS1M6IE5hdkxpbmtJdGVtW10gPSBbXHJcbiAge1xyXG4gICAgaHJlZjogXCIvXCIsXHJcbiAgICB0ZXh0OiBcIkhvbWVcIixcclxuICAgIEljb246IDxIb21lSWNvbiAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIGhyZWY6IFwiL3Byb2plY3RzXCIsXHJcbiAgICB0ZXh0OiBcIlNob3djYXNlIFByb2plY3RzXCIsXHJcbiAgICBJY29uOiA8V2ViSWNvbiAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIGhyZWY6IFwiL2NvbnRhY3RcIixcclxuICAgIHRleHQ6IFwiQ29udGFjdFwiLFxyXG4gICAgSWNvbjogPE1haWxJY29uIC8+LFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgdHlwZSBBbmNob3IgPSBcInRvcFwiIHwgXCJsZWZ0XCIgfCBcImJvdHRvbVwiIHwgXCJyaWdodFwiO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGFuY2hvcjogQW5jaG9yO1xyXG59XHJcblxyXG5jb25zdCB2YXJpYW50cyA9IHtcclxuICBvcGVuOiB7IG9wYWNpdHk6IDEsIHg6IDAgfSxcclxuICBjbG9zZWQ6IHsgb3BhY2l0eTogMCwgeDogXCItMTAwJVwiIH0sXHJcbn07XHJcblxyXG5jb25zdCBsaXN0SXRlbVZhcmlhbnRzID0ge1xyXG4gIG9wZW46IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB5OiAwLFxyXG4gIH0sXHJcbiAgY2xvc2VkOiB7IG9wYWNpdHk6IDAsIHk6IFwiLTEwMCVcIiB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZURyYXdlcih7IGFuY2hvciB9OiBQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIGNvbnN0IGlzQnJlYWtwb2ludCA9IHVzZU1lZGlhUXVlcnkoXHJcbiAgLy8gICAodGhlbWU6IFRoZW1lKSA9PiB0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpLFxyXG4gIC8vICAge1xyXG4gIC8vICAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcclxuICAvLyAgIH0sXHJcbiAgLy8gKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHRvcDogZmFsc2UsXHJcbiAgICBsZWZ0OiBmYWxzZSxcclxuICAgIGJvdHRvbTogZmFsc2UsXHJcbiAgICByaWdodDogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9IChhbmNob3I6IEFuY2hvciwgb3BlbjogYm9vbGVhbikgPT5cclxuICAgIChcclxuICAgICAgZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQgfCBSZWFjdC5Nb3VzZUV2ZW50LFxyXG4gICAgKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBldmVudC50eXBlID09PSBcImtleWRvd25cIiAmJlxyXG4gICAgICAgICgoZXZlbnQgYXMgUmVhY3QuS2V5Ym9hcmRFdmVudCkua2V5ID09PSBcIlRhYlwiIHx8XHJcbiAgICAgICAgICAoZXZlbnQgYXMgUmVhY3QuS2V5Ym9hcmRFdmVudCkua2V5ID09PSBcIlNoaWZ0XCIpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2FuY2hvcl06IG9wZW4gfSk7XHJcbiAgICB9O1xyXG5cclxuICBjb25zdCBsaXN0ID0gKGFuY2hvcjogQW5jaG9yKSA9PiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmxpc3QsIHtcclxuICAgICAgICBbY2xhc3Nlcy5mdWxsTGlzdF06IGFuY2hvciA9PT0gXCJ0b3BcIiB8fCBhbmNob3IgPT09IFwiYm90dG9tXCIsXHJcbiAgICAgIH0pfVxyXG4gICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cclxuICAgID5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge05BVl9MSU5LUy5tYXAoKHsgdGV4dCwgaHJlZiwgSWNvbiB9LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPE5hdkxpbmsga2V5PXt0ZXh0fSBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgPFN0eWxlZE5hdkxpbmsgaXNBY3RpdmU9e2hyZWYgPT09IHJvdXRlci5wYXRobmFtZX0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uIHN0eWxlPXt7IGNvbG9yOiBcImluaGVyaXRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge0ljb24gPyBJY29uIDogPERyYWdIYW5kbGVJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9TdHlsZWROYXZMaW5rPlxyXG4gICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPXtmYWxzZX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgU29jaWFsIE1lZGlhXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICB7U09DSUFMX0xJTktTLm1hcCgoeyB0ZXh0LCBJY29uLCBocmVmIH0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8U3R5bGVkSHRtbExpbmtcclxuICAgICAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICAgICAgdGl0bGU9e3RleHR9XHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICByb2xlPVwibGlua1wiXHJcbiAgICAgICAgICAgIGtleT17dGV4dH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uIHN0eWxlPXt7IGNvbG9yOiBcImluaGVyaXRcIiB9fT5cclxuICAgICAgICAgICAgICAgIHtJY29uID8gSWNvbiA6IDxNYWlsSWNvbiAvPn1cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L1N0eWxlZEh0bWxMaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICAvLyBjb25zdCBpc09wZW4gPSBzdGF0ZVthbmNob3JdIHx8IGlzQnJlYWtwb2ludDtcclxuICBjb25zdCBpc09wZW4gPSBzdGF0ZVthbmNob3JdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50IGtleT17YW5jaG9yfT5cclxuICAgICAgey8qIDxIaWRkZW4gbWRVcCBpbml0aWFsV2lkdGg9XCJzbVwiPiAqL31cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIC8vIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgdHJ1ZSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259XHJcbiAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICBhcmlhLWxhYmVsPVwibWVudVwiXHJcbiAgICAgID5cclxuICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIHsvKiA8L0hpZGRlbj4gKi99XHJcblxyXG4gICAgICA8RHJhd2VyXHJcbiAgICAgICAgaWQ9XCJuYXZiYXItZHJhd2VyXCJcclxuICAgICAgICBhbmNob3I9e2FuY2hvcn1cclxuICAgICAgICAvLyB2YXJpYW50PXtpc0JyZWFrcG9pbnQgPyBcInBlcm1hbmVudFwiIDogdW5kZWZpbmVkfVxyXG4gICAgICAgIG9wZW49e2lzT3Blbn1cclxuICAgICAgICAvLyBNb2RhbFByb3BzPXt7XHJcbiAgICAgICAgLy8gICBkaXNhYmxlU2Nyb2xsTG9jazogaXNCcmVha3BvaW50LFxyXG4gICAgICAgIC8vICAgc3R5bGU6IHtcclxuICAgICAgICAvLyAgICAgcG9zaXRpb246IGlzQnJlYWtwb2ludCA/IFwicmVsYXRpdmVcIiA6IFwiZml4ZWRcIixcclxuICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgLy8gfX1cclxuICAgICAgICBQYXBlclByb3BzPXt7XHJcbiAgICAgICAgICBzdHlsZTogeyB3aWR0aDogMjQwIH0sXHJcbiAgICAgICAgfX1cclxuICAgICAgICBTbGlkZVByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiB7XHJcbiAgICAgICAgICAgIGV4aXQ6IDMwMCxcclxuICAgICAgICAgICAgZW50ZXI6IDI1MCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfX1cclxuICAgICAgICAvLyBoaWRlQmFja2Ryb3A9e2lzQnJlYWtwb2ludH1cclxuICAgICAgICBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XHJcbiAgICAgID5cclxuICAgICAgICB7bGlzdChhbmNob3IpfVxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9