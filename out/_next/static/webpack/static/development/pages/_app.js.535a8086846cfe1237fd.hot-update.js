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
      lineNumber: 122,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
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
      lineNumber: 132,
      columnNumber: 11
    }
  }, __jsx(StyledNavLink, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_22__["motion"].div, {
    animate: state[anchor] ? "open" : "closed",
    variants: {
      open: {
        opacity: 1,
        x: 0
      },
      closed: {
        opacity: 1,
        x: "-100%"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      color: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 19
    }
  }, Icon ? Icon : __jsx(_material_ui_icons_DragHandle__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 36
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    primary: text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 19
    }
  }))))))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    button: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
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
      lineNumber: 163,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      color: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 15
    }
  }, Icon ? Icon : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 32
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    primary: text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 15
    }
  }))))));

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_19___default.a.Fragment, {
    key: anchor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_22__["motion"].div, {
    animate: state[anchor] ? "closed" : "open",
    variants: variants,
    whileHover: {
      scale: 1.2
    },
    whileTap: {
      scale: 1.2
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
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
      lineNumber: 192,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
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
      lineNumber: 203,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU2lkZURyYXdlci50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibGlzdCIsIndpZHRoIiwiZnVsbExpc3QiLCJtZW51QnV0dG9uIiwiU3R5bGVkTmF2TGluayIsInN0eWxlZCIsImEiLCJTT0NJQUxfTElOS1MiLCJocmVmIiwidGV4dCIsIkljb24iLCJOQVZfTElOS1MiLCJ2YXJpYW50cyIsIm9wZW4iLCJvcGFjaXR5IiwieCIsImNsb3NlZCIsIlNpZGVEcmF3ZXIiLCJhbmNob3IiLCJjbGFzc2VzIiwic3RhdGUiLCJzZXRTdGF0ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJ0b2dnbGVEcmF3ZXIiLCJldmVudCIsInR5cGUiLCJrZXkiLCJjbHN4IiwibWFwIiwiaW5kZXgiLCJjb2xvciIsInNjYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUtBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBRUMsS0FBRCxLQUFZO0FBQ3ZDQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFFO0FBREgsR0FEaUM7QUFJdkNDLFVBQVEsRUFBRTtBQUNSRCxTQUFLLEVBQUU7QUFEQyxHQUo2QjtBQU92Q0UsWUFBVSxFQUFFLENBQ1Y7QUFEVTtBQVAyQixDQUFaLENBQUQsQ0FBNUI7QUFZQSxNQUFNQyxhQUFhLEdBQUdDLDBEQUFNLENBQUNDLENBQVY7QUFBQTtBQUFBO0FBQUEsMkNBQW5CO0tBQU1GLGE7QUFXTixNQUFNRyxZQUEyQixHQUFH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QUFELENBQU8sUUFBUDtBQUFnQixPQUFHLEVBQUVTLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFELENBQVEsR0FBUjtBQUNFLFdBQU8sRUFBRUUsS0FBSyxDQUFDRixNQUFELENBQUwsR0FBZ0IsUUFBaEIsR0FBMkIsTUFEdEM7QUFFRSxZQUFRLEVBQUVOLFFBRlo7QUFHRSxjQUFVLEVBQUU7QUFBRXdCLFdBQUssRUFBRTtBQUFULEtBSGQ7QUFJRSxZQUFRLEVBQUU7QUFBRUEsV0FBSyxFQUFFO0FBQVQsS0FKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyw0REFBRDtBQUNFLFdBQU8sRUFBRVIsWUFBWSxDQUFDVixNQUFELEVBQVMsSUFBVCxDQUR2QjtBQUVFLFFBQUksRUFBQyxPQUZQO0FBR0UsYUFBUyxFQUFFQyxPQUFPLENBQUNoQixVQUhyQjtBQUlFLFNBQUssRUFBQyxTQUpSO0FBS0Usa0JBQVcsTUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FORixDQURGLEVBa0JFLE1BQUMsZ0VBQUQsQ0FDRTtBQURGO0FBRUUsVUFBTSxFQUFFZSxNQUZWO0FBR0UsUUFBSSxFQUFFRSxLQUFLLENBQUNGLE1BQUQsQ0FIYjtBQUlFLFdBQU8sRUFBRVUsWUFBWSxDQUFDVixNQUFELEVBQVMsS0FBVCxDQUp2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUdsQixJQUFJLENBQUNrQixNQUFELENBTlAsQ0FsQkYsQ0FERixDQURGO0FBK0JEOztHQXJIdUJELFU7VUFDTnBCLFM7OztNQURNb0IsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy41MzVhODA4Njg0NmNmZTEyMzdmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWNvbkJ1dHRvbiwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBEcmFnSGFuZGxlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RyYWdIYW5kbGVcIjtcclxuaW1wb3J0IEdpdEh1Ykljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9HaXRIdWJcIjtcclxuaW1wb3J0IEhvbWVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZVwiO1xyXG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlua2VkSW5cIjtcclxuaW1wb3J0IE1haWxJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCI7XHJcbmltcG9ydCBUd2l0dGVySWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXJcIjtcclxuaW1wb3J0IFdlYkljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9XZWJcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgU3R5bGVkSHRtbExpbmsgfSBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBOYXZMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGxpc3Q6IHtcclxuICAgIHdpZHRoOiAyNTAsXHJcbiAgfSxcclxuICBmdWxsTGlzdDoge1xyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgLy8gbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgU3R5bGVkTmF2TGluayA9IHN0eWxlZC5hYFxyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgTmF2TGlua0l0ZW0ge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBocmVmOiBzdHJpbmc7XHJcbiAgSWNvbj86IEpTWC5FbGVtZW50O1xyXG59XHJcblxyXG5jb25zdCBTT0NJQUxfTElOS1M6IE5hdkxpbmtJdGVtW10gPSBbXHJcbiAge1xyXG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vd2lsZnJlZGxvcGV6XCIsXHJcbiAgICB0ZXh0OiBcIkdpdGh1YlwiLFxyXG4gICAgSWNvbjogPEdpdEh1Ykljb24gLz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi93aWxmcmVkLWxvcGV6LWEzMDliODk2XCIsXHJcbiAgICB0ZXh0OiBcIkxpbmtlZEluXCIsXHJcbiAgICBJY29uOiA8TGlua2VkSW5JY29uIC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaHJlZjogXCJodHRwczovL3R3aXR0ZXIuY29tL3dpbGZyZWRkb25hbGRsbz9yZWZfc3JjPXR3c3JjJTVFdGZ3XCIsXHJcbiAgICB0ZXh0OiBcIkB3aWxmcmVkZG9uYWxkbG9cIixcclxuICAgIEljb246IDxUd2l0dGVySWNvbiAvPixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgTkFWX0xJTktTOiBOYXZMaW5rSXRlbVtdID0gW1xyXG4gIHtcclxuICAgIGhyZWY6IFwiL1wiLFxyXG4gICAgdGV4dDogXCJIb21lXCIsXHJcbiAgICBJY29uOiA8SG9tZUljb24gLz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBocmVmOiBcIi9wcm9qZWN0c1wiLFxyXG4gICAgdGV4dDogXCJTaG93Y2FzZSBQcm9qZWN0c1wiLFxyXG4gICAgSWNvbjogPFdlYkljb24gLz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBocmVmOiBcIi9jb250YWN0XCIsXHJcbiAgICB0ZXh0OiBcIkNvbnRhY3RcIixcclxuICAgIEljb246IDxNYWlsSWNvbiAvPixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IHR5cGUgQW5jaG9yID0gXCJ0b3BcIiB8IFwibGVmdFwiIHwgXCJib3R0b21cIiB8IFwicmlnaHRcIjtcclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBhbmNob3I6IEFuY2hvcjtcclxufVxyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgb3BlbjogeyBvcGFjaXR5OiAxLCB4OiAwIH0sXHJcbiAgY2xvc2VkOiB7IG9wYWNpdHk6IDAsIHg6IFwiLTEwMCVcIiB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZURyYXdlcih7IGFuY2hvciB9OiBQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHRvcDogZmFsc2UsXHJcbiAgICBsZWZ0OiBmYWxzZSxcclxuICAgIGJvdHRvbTogZmFsc2UsXHJcbiAgICByaWdodDogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9IChhbmNob3I6IEFuY2hvciwgb3BlbjogYm9vbGVhbikgPT5cclxuICAgIChcclxuICAgICAgZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQgfCBSZWFjdC5Nb3VzZUV2ZW50LFxyXG4gICAgKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBldmVudC50eXBlID09PSBcImtleWRvd25cIiAmJlxyXG4gICAgICAgICgoZXZlbnQgYXMgUmVhY3QuS2V5Ym9hcmRFdmVudCkua2V5ID09PSBcIlRhYlwiIHx8XHJcbiAgICAgICAgICAoZXZlbnQgYXMgUmVhY3QuS2V5Ym9hcmRFdmVudCkua2V5ID09PSBcIlNoaWZ0XCIpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2FuY2hvcl06IG9wZW4gfSk7XHJcbiAgICB9O1xyXG5cclxuICBjb25zdCBsaXN0ID0gKGFuY2hvcjogQW5jaG9yKSA9PiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmxpc3QsIHtcclxuICAgICAgICBbY2xhc3Nlcy5mdWxsTGlzdF06IGFuY2hvciA9PT0gXCJ0b3BcIiB8fCBhbmNob3IgPT09IFwiYm90dG9tXCIsXHJcbiAgICAgIH0pfVxyXG4gICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cclxuICAgID5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge05BVl9MSU5LUy5tYXAoKHsgdGV4dCwgaHJlZiwgSWNvbiB9LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPE5hdkxpbmsga2V5PXt0ZXh0fSBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgPFN0eWxlZE5hdkxpbms+XHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3N0YXRlW2FuY2hvcl0gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cz17e1xyXG4gICAgICAgICAgICAgICAgICBvcGVuOiB7IG9wYWNpdHk6IDEsIHg6IDAgfSxcclxuICAgICAgICAgICAgICAgICAgY2xvc2VkOiB7IG9wYWNpdHk6IDEsIHg6IFwiLTEwMCVcIiB9LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24gc3R5bGU9e3sgY29sb3I6IFwiaW5oZXJpdFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtJY29uID8gSWNvbiA6IDxEcmFnSGFuZGxlSWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGV4dH0gLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICA8L1N0eWxlZE5hdkxpbms+XHJcbiAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvTGlzdD5cclxuICAgICAgPERpdmlkZXIgLz5cclxuXHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIDxMaXN0SXRlbSBidXR0b249e2ZhbHNlfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICBTb2NpYWwgTWVkaWFcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIHtTT0NJQUxfTElOS1MubWFwKCh7IHRleHQsIEljb24sIGhyZWYgfSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxTdHlsZWRIdG1sTGlua1xyXG4gICAgICAgICAgICBocmVmPXtocmVmfVxyXG4gICAgICAgICAgICB0aXRsZT17dGV4dH1cclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJsaW5rXCJcclxuICAgICAgICAgICAga2V5PXt0ZXh0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24gc3R5bGU9e3sgY29sb3I6IFwiaW5oZXJpdFwiIH19PlxyXG4gICAgICAgICAgICAgICAge0ljb24gPyBJY29uIDogPE1haWxJY29uIC8+fVxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGV4dH0gLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDwvU3R5bGVkSHRtbExpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXthbmNob3J9PlxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICBhbmltYXRlPXtzdGF0ZVthbmNob3JdID8gXCJjbG9zZWRcIiA6IFwib3BlblwifVxyXG4gICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19XHJcbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMS4yIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgdHJ1ZSl9XHJcbiAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufVxyXG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwibWVudVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuXHJcbiAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgLy8gaWQ9XCJuYXZiYXJcIlxyXG4gICAgICAgICAgYW5jaG9yPXthbmNob3J9XHJcbiAgICAgICAgICBvcGVuPXtzdGF0ZVthbmNob3JdfVxyXG4gICAgICAgICAgb25DbG9zZT17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsaXN0KGFuY2hvcil9XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=