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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");


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
  menuButton: {// marginRight: theme.spacing(2),
  }
}));
const StyledNavLink = styled_components__WEBPACK_IMPORTED_MODULE_21__["default"].a.withConfig({
  displayName: "SideDrawer__StyledNavLink",
  componentId: "evp6zq-0"
})(["color:inherit;text-decoration:none;"]);
_c = StyledNavLink;
const SOCIAL_LINKS = [{
  href: "https://github.com/wilfredlopez",
  text: "Github",
  Icon: __jsx(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 60,
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
      lineNumber: 65,
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
      lineNumber: 73,
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
      lineNumber: 78,
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
      lineNumber: 83,
      columnNumber: 11
    }
  })
}];
function SideDrawer({
  anchor
}) {
  _s();

  const classes = useStyles();
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
      lineNumber: 116,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
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
      lineNumber: 126,
      columnNumber: 11
    }
  }, __jsx(StyledNavLink, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      color: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, Icon ? Icon : __jsx(_material_ui_icons_DragHandle__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 34
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    primary: text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  })))))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    button: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
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
      lineNumber: 149,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      color: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }, Icon ? Icon : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 32
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    primary: text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }))))));

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_19___default.a.Fragment, {
    key: anchor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_22__["motion"].div, {
    animate: {
      scale: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: toggleDrawer(anchor, true),
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__["default"] // id="navbar"
  , {
    anchor: anchor,
    open: state[anchor],
    onClose: toggleDrawer(anchor, false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, list(anchor))));
}

_s(SideDrawer, "41r89AhyNc7MNIuHQ43L2377ofI=", false, function () {
  return [useStyles];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU2lkZURyYXdlci50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibGlzdCIsIndpZHRoIiwiZnVsbExpc3QiLCJtZW51QnV0dG9uIiwiU3R5bGVkTmF2TGluayIsInN0eWxlZCIsImEiLCJTT0NJQUxfTElOS1MiLCJocmVmIiwidGV4dCIsIkljb24iLCJOQVZfTElOS1MiLCJTaWRlRHJhd2VyIiwiYW5jaG9yIiwiY2xhc3NlcyIsInN0YXRlIiwic2V0U3RhdGUiLCJSZWFjdCIsInVzZVN0YXRlIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwidG9nZ2xlRHJhd2VyIiwib3BlbiIsImV2ZW50IiwidHlwZSIsImtleSIsImNsc3giLCJtYXAiLCJpbmRleCIsImNvbG9yIiwic2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBS0EsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFFQyxLQUFELEtBQVk7QUFDdkNDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVBQUU7QUFESCxHQURpQztBQUl2Q0MsVUFBUSxFQUFFO0FBQ1JELFNBQUssRUFBRTtBQURDLEdBSjZCO0FBT3ZDRSxZQUFVLEVBQUUsQ0FDVjtBQURVO0FBUDJCLENBQVosQ0FBRCxDQUE1QjtBQVlBLE1BQU1DLGFBQWEsR0FBR0MsMERBQU0sQ0FBQ0MsQ0FBVjtBQUFBO0FBQUE7QUFBQSwyQ0FBbkI7S0FBTUYsYTtBQVdOLE1BQU1HLFlBQTJCLEdBQUcsQ0FDbEM7QUFDRUMsTUFBSSxFQUFFLGlDQURSO0FBRUVD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VSxNQUZWO0FBR0UsUUFBSSxFQUFFRSxLQUFLLENBQUNGLE1BQUQsQ0FIYjtBQUlFLFdBQU8sRUFBRVUsWUFBWSxDQUFDVixNQUFELEVBQVMsS0FBVCxDQUp2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUdiLElBQUksQ0FBQ2EsTUFBRCxDQU5QLENBZEYsQ0FERixDQURGO0FBMkJEOztHQXpHdUJELFU7VUFDTmYsUzs7O01BRE1lLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuODdlNjcyNTg5MmZiNjcyYzNmYmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEljb25CdXR0b24sIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcclxuaW1wb3J0IERyYXdlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCI7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgRHJhZ0hhbmRsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EcmFnSGFuZGxlXCI7XHJcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViXCI7XHJcbmltcG9ydCBIb21lSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVcIjtcclxuaW1wb3J0IExpbmtlZEluSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpbmtlZEluXCI7XHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxcIjtcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiO1xyXG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCI7XHJcbmltcG9ydCBXZWJJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV2ViXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB7IFN0eWxlZEh0bWxMaW5rIH0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTmF2TGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBsaXN0OiB7XHJcbiAgICB3aWR0aDogMjUwLFxyXG4gIH0sXHJcbiAgZnVsbExpc3Q6IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIC8vIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFN0eWxlZE5hdkxpbmsgPSBzdHlsZWQuYWBcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIE5hdkxpbmtJdGVtIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIEljb24/OiBKU1guRWxlbWVudDtcclxufVxyXG5cclxuY29uc3QgU09DSUFMX0xJTktTOiBOYXZMaW5rSXRlbVtdID0gW1xyXG4gIHtcclxuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL3dpbGZyZWRsb3BlelwiLFxyXG4gICAgdGV4dDogXCJHaXRodWJcIixcclxuICAgIEljb246IDxHaXRIdWJJY29uIC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vd2lsZnJlZC1sb3Blei1hMzA5Yjg5NlwiLFxyXG4gICAgdGV4dDogXCJMaW5rZWRJblwiLFxyXG4gICAgSWNvbjogPExpbmtlZEluSWNvbiAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIGhyZWY6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS93aWxmcmVkZG9uYWxkbG8/cmVmX3NyYz10d3NyYyU1RXRmd1wiLFxyXG4gICAgdGV4dDogXCJAd2lsZnJlZGRvbmFsZGxvXCIsXHJcbiAgICBJY29uOiA8VHdpdHRlckljb24gLz4sXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IE5BVl9MSU5LUzogTmF2TGlua0l0ZW1bXSA9IFtcclxuICB7XHJcbiAgICBocmVmOiBcIi9cIixcclxuICAgIHRleHQ6IFwiSG9tZVwiLFxyXG4gICAgSWNvbjogPEhvbWVJY29uIC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaHJlZjogXCIvcHJvamVjdHNcIixcclxuICAgIHRleHQ6IFwiU2hvd2Nhc2UgUHJvamVjdHNcIixcclxuICAgIEljb246IDxXZWJJY29uIC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaHJlZjogXCIvY29udGFjdFwiLFxyXG4gICAgdGV4dDogXCJDb250YWN0XCIsXHJcbiAgICBJY29uOiA8TWFpbEljb24gLz4sXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCB0eXBlIEFuY2hvciA9IFwidG9wXCIgfCBcImxlZnRcIiB8IFwiYm90dG9tXCIgfCBcInJpZ2h0XCI7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgYW5jaG9yOiBBbmNob3I7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZURyYXdlcih7IGFuY2hvciB9OiBQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHRvcDogZmFsc2UsXHJcbiAgICBsZWZ0OiBmYWxzZSxcclxuICAgIGJvdHRvbTogZmFsc2UsXHJcbiAgICByaWdodDogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9IChhbmNob3I6IEFuY2hvciwgb3BlbjogYm9vbGVhbikgPT5cclxuICAgIChcclxuICAgICAgZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQgfCBSZWFjdC5Nb3VzZUV2ZW50LFxyXG4gICAgKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBldmVudC50eXBlID09PSBcImtleWRvd25cIiAmJlxyXG4gICAgICAgICgoZXZlbnQgYXMgUmVhY3QuS2V5Ym9hcmRFdmVudCkua2V5ID09PSBcIlRhYlwiIHx8XHJcbiAgICAgICAgICAoZXZlbnQgYXMgUmVhY3QuS2V5Ym9hcmRFdmVudCkua2V5ID09PSBcIlNoaWZ0XCIpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2FuY2hvcl06IG9wZW4gfSk7XHJcbiAgICB9O1xyXG5cclxuICBjb25zdCBsaXN0ID0gKGFuY2hvcjogQW5jaG9yKSA9PiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmxpc3QsIHtcclxuICAgICAgICBbY2xhc3Nlcy5mdWxsTGlzdF06IGFuY2hvciA9PT0gXCJ0b3BcIiB8fCBhbmNob3IgPT09IFwiYm90dG9tXCIsXHJcbiAgICAgIH0pfVxyXG4gICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cclxuICAgID5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge05BVl9MSU5LUy5tYXAoKHsgdGV4dCwgaHJlZiwgSWNvbiB9LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPE5hdkxpbmsga2V5PXt0ZXh0fSBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgPFN0eWxlZE5hdkxpbms+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uIHN0eWxlPXt7IGNvbG9yOiBcImluaGVyaXRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge0ljb24gPyBJY29uIDogPERyYWdIYW5kbGVJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9TdHlsZWROYXZMaW5rPlxyXG4gICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPXtmYWxzZX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgU29jaWFsIE1lZGlhXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICB7U09DSUFMX0xJTktTLm1hcCgoeyB0ZXh0LCBJY29uLCBocmVmIH0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8U3R5bGVkSHRtbExpbmtcclxuICAgICAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICAgICAgdGl0bGU9e3RleHR9XHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICByb2xlPVwibGlua1wiXHJcbiAgICAgICAgICAgIGtleT17dGV4dH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uIHN0eWxlPXt7IGNvbG9yOiBcImluaGVyaXRcIiB9fT5cclxuICAgICAgICAgICAgICAgIHtJY29uID8gSWNvbiA6IDxNYWlsSWNvbiAvPn1cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L1N0eWxlZEh0bWxMaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17YW5jaG9yfT5cclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgYW5pbWF0ZT17eyBzY2FsZTogMSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIHRydWUpfVxyXG4gICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn1cclxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm1lbnVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgLy8gaWQ9XCJuYXZiYXJcIlxyXG4gICAgICAgICAgYW5jaG9yPXthbmNob3J9XHJcbiAgICAgICAgICBvcGVuPXtzdGF0ZVthbmNob3JdfVxyXG4gICAgICAgICAgb25DbG9zZT17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsaXN0KGFuY2hvcil9XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=