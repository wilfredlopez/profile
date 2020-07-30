webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/pages/partials/Project.tsx":
/*!***************************************************!*\
  !*** ./src/components/pages/partials/Project.tsx ***!
  \***************************************************/
/*! exports provided: DividerElement, TitleLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividerElement", function() { return DividerElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleLink", function() { return TitleLink; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/shared */ "./src/components/shared/index.ts");
/* harmony import */ var _components_shared_SliderCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/shared/SliderCard */ "./src/components/shared/SliderCard.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _root_styles_Custom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @root/styles/Custom */ "./src/styles/Custom.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\pages\\partials\\Project.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






const DividerElement = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Project__DividerElement",
  componentId: "utympl-0"
})(["font-size:1rem;display:table;white-space:nowrap;height:auto;line-height:1;&::before,::after{content:\"\";display:table-cell;position:relative;top:50%;width:50%;background-repeat:no-repeat;}&::before{background-position:right 1em top 50%;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAACCAYAAACuTHuKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OThBRDY4OUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OThBRDY4QUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OEFENjg3Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5OEFENjg4Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VU513gAAADVJREFUeNrs0DENACAQBDBIWLGBJQby/mUcJn5sJXQmOQMAAAAAAJqt+2prAAAAAACg2xdgANk6BEVuJgyMAAAAAElFTkSuQmCC\");}&::after{background-position:left 1em top 50%;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAACCAYAAACuTHuKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OThBRDY4OUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OThBRDY4QUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OEFENjg3Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5OEFENjg4Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VU513gAAADVJREFUeNrs0DENACAQBDBIWLGBJQby/mUcJn5sJXQmOQMAAAAAAJqt+2prAAAAAACg2xdgANk6BEVuJgyMAAAAAElFTkSuQmCC\");}"]);
_c = DividerElement;
const TitleLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(_components_shared__WEBPACK_IMPORTED_MODULE_1__["StyledHtmlLink"]).withConfig({
  displayName: "Project__TitleLink",
  componentId: "utympl-1"
})(["font-size:1.2rem;color:", ";font-weight:500;"], props => props.theme.colors.secondary);
_c2 = TitleLink;

const Project = (_ref) => {
  let {
    url,
    name,
    title
  } = _ref,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["url", "name", "title"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(DividerElement, {
    className: "header project-tile",
    style: {
      margin: "1em 0em",
      textTransform: "uppercase"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 59,
      columnNumber: 9
    }
  }, name)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body1",
    component: "div",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    maxWidth: "sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, props.children), props.images.length > 1 && __jsx(_components_shared_SliderCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    imageData: props.images,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }))), props.images.length === 1 && __jsx("div", {
    style: {
      marginBottom: "1rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx(_components_shared__WEBPACK_IMPORTED_MODULE_1__["StyledHtmlLink"], {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      marginBottom: "1rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx(_root_styles_Custom__WEBPACK_IMPORTED_MODULE_4__["ImageButton"], {
    title: title,
    url: props.images[0].imgPath,
    width: 520,
    minHeight: 500,
    buttomProps: {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
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
  }, __jsx(_root_styles_Custom__WEBPACK_IMPORTED_MODULE_4__["BrandButton"], {
    color: props.key,
    size: "small",
    variant: "outlined",
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

_c3 = Project;
/* harmony default export */ __webpack_exports__["default"] = (Project);

var _c, _c2, _c3;

$RefreshReg$(_c, "DividerElement");
$RefreshReg$(_c2, "TitleLink");
$RefreshReg$(_c3, "Project");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/pages/partials/VapeMusic.tsx":
/*!*****************************************************!*\
  !*** ./src/components/pages/partials/VapeMusic.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/components/pages/partials/Project.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/components/pages/constants/index.tsx");
/* harmony import */ var _img_vapemusic_example_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../img/vapemusic-example.jpg */ "./src/img/vapemusic-example.jpg");
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\pages\\partials\\VapeMusic.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const VapeMusic = props => {
  return __jsx(_Project__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: "vape",
    images: [{
      label: "VapeMusic HomePage",
      imgPath: _img_vapemusic_example_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]
    }, {
      label: "VapeMusic Menu",
      imgPath: "https://res.cloudinary.com/wlopez/image/upload/v1591918889/vapemusic2/vapemusic-menu.jpg"
    }, {
      imgPath: "https://res.cloudinary.com/wlopez/image/upload/v1591921388/vapemusic2/vapemusic-pdp.jpg",
      label: "Audio Player"
    }],
    url: "https://vapemusic.club",
    name: "Vape Music",
    title: "Vape Music - Latin Music Listen & Download",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, _constants__WEBPACK_IMPORTED_MODULE_2__["vapeMusicDescription"]);
};

_c = VapeMusic;
/* harmony default export */ __webpack_exports__["default"] = (VapeMusic);

var _c;

$RefreshReg$(_c, "VapeMusic");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/styles/BrandButton.tsx":
/*!************************************!*\
  !*** ./src/styles/BrandButton.tsx ***!
  \************************************/
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


var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\styles\\BrandButton.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const DEFAULT_SHADOW = "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"; // Like https://github.com/brunobertolini/styled-by

const styledByColor = (property, mapping) => props => mapping[props[property]];

const styledBySize = (property, mapping) => props => mapping[props[property]];

const styles = theme => ({
  root: {
    background: styledByColor("color", {
      default: "#00796b",
      blue: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      primary: theme.palette.primary.dark,
      secondary: theme.palette.secondary.main,
      success: theme.palette.success.main,
      error: theme.palette.error.main,
      warning: theme.palette.warning.main,
      tertiary: theme.palette.tertiary.main,
      text: "inherit",
      vape: "red"
    }),
    borderRadius: theme.shape.borderRadius,
    border: 0,
    color: styledByColor("color", {
      default: "#fff",
      blue: "#fff",
      primary: theme.palette.primary.contrastText,
      secondary: theme.palette.secondary.contrastText,
      success: theme.palette.success.contrastText,
      error: theme.palette.error.contrastText,
      warning: theme.palette.warning.contrastText,
      tertiary: theme.palette.tertiary.contrastText,
      text: theme.palette.getContrastText(theme.palette.text.primary),
      vape: "white"
    }),
    height: styledBySize("size", {
      default: "40px",
      large: "48px",
      small: "20px"
    }),
    padding: styledBySize("size", {
      default: theme.spacing(0.5, 1),
      large: theme.spacing(1.5, 1.5),
      small: theme.spacing(1, 0.5)
    }),
    cursor: "pointer",
    ["&:hover"]: {
      background: styledByColor("color", {
        default: "rgb(0, 84, 74)",
        blue: "linear-gradient(45deg, rgb(0 137 247) 30%, rgb(10 138 168) 90%)",
        primary: theme.palette.primary.main,
        secondary: theme.palette.secondary.dark,
        success: theme.palette.success.dark,
        error: theme.palette.error.dark,
        warning: theme.palette.warning.dark,
        tertiary: theme.palette.tertiary.dark,
        text: theme.palette.text.primary,
        vape: "green"
      })
    },
    boxShadow: styledByColor("color", {
      default: DEFAULT_SHADOW,
      blue: "rgba(33, 203, 243, 0.3) 1px 2px 1px 1px",
      primary: theme.shadows[1],
      secondary: theme.shadows[2],
      success: theme.shadows[4],
      error: theme.shadows[2],
      warning: theme.shadows[2],
      tertiary: theme.shadows[2],
      text: theme.shadows[2],
      vape: theme.shadows[3]
    })
  }
});

const BrandButton = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)((_ref) => {
  let {
    classes,
    size,
    children,
    color
  } = _ref,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["classes", "size", "children", "color"]);

  return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.root
  }, other, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 3
    }
  }), children);
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9wYXJ0aWFscy9Qcm9qZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9wYXJ0aWFscy9WYXBlTXVzaWMudHN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvQnJhbmRCdXR0b24udHN4Il0sIm5hbWVzIjpbIkRpdmlkZXJFbGVtZW50Iiwic3R5bGVkIiwiZGl2IiwiVGl0bGVMaW5rIiwiU3R5bGVkSHRtbExpbmsiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwic2Vjb25kYXJ5IiwiUHJvamVjdCIsInVybCIsIm5hbWUiLCJ0aXRsZSIsIm1hcmdpbiIsInRleHRUcmFuc2Zvcm0iLCJjaGlsZHJlbiIsImltYWdlcyIsImxlbmd0aCIsIm1hcmdpbkJvdHRvbSIsImltZ1BhdGgiLCJwYWRkaW5nQm90dG9tIiwia2V5IiwidG9VcHBlckNhc2UiLCJWYXBlTXVzaWMiLCJsYWJlbCIsInZhcGVtdXNpY0ltZyIsInZhcGVNdXNpY0Rlc2NyaXB0aW9uIiwiREVGQVVMVF9TSEFET1ciLCJzdHlsZWRCeUNvbG9yIiwicHJvcGVydHkiLCJtYXBwaW5nIiwic3R5bGVkQnlTaXplIiwic3R5bGVzIiwicm9vdCIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwiYmx1ZSIsInByaW1hcnkiLCJwYWxldHRlIiwiZGFyayIsIm1haW4iLCJzdWNjZXNzIiwiZXJyb3IiLCJ3YXJuaW5nIiwidGVydGlhcnkiLCJ0ZXh0IiwidmFwZSIsImJvcmRlclJhZGl1cyIsInNoYXBlIiwiYm9yZGVyIiwiY29sb3IiLCJjb250cmFzdFRleHQiLCJnZXRDb250cmFzdFRleHQiLCJoZWlnaHQiLCJsYXJnZSIsInNtYWxsIiwicGFkZGluZyIsInNwYWNpbmciLCJjdXJzb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiQnJhbmRCdXR0b24iLCJ3aXRoU3R5bGVzIiwiY2xhc3NlcyIsInNpemUiLCJvdGhlciJdLCJt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YUFBTyxFQUFFckMsS0FBSyxDQUFDc0QsT0FBTixDQUFjLENBQWQsQ0FQdUI7QUFRaENoQixjQUFRLEVBQUV0QyxLQUFLLENBQUNzRCxPQUFOLENBQWMsQ0FBZCxDQVJzQjtBQVNoQ2YsVUFBSSxFQUFFdkMsS0FBSyxDQUFDc0QsT0FBTixDQUFjLENBQWQsQ0FUMEI7QUFVaENkLFVBQUksRUFBRXhDLEtBQUssQ0FBQ3NELE9BQU4sQ0FBYyxDQUFkO0FBVjBCLEtBQVY7QUFwRHBCO0FBRDBCLENBQW5CLENBQWY7O0FBb0VPLE1BQU1DLFdBQVcsR0FBR0MsMkVBQVUsQ0FBQzlCLE1BQUQsQ0FBVixDQUFtQjtBQUFBLE1BQzVDO0FBQUUrQixXQUFGO0FBQVdDLFFBQVg7QUFBaUJqRCxZQUFqQjtBQUEyQm1DO0FBQTNCLEdBRDRDO0FBQUEsTUFDUGUsS0FETzs7QUFBQSxTQUs1QyxNQUFDLGdFQUFEO0FBQVEsYUFBUyxFQUFFRixPQUFPLENBQUM5QjtBQUEzQixLQUFxQ2dDLEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBNkNsRCxRQUE3QyxDQUw0QztBQUFBLENBQW5CLENBQXBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5mODI4NTUyNDkwOGY4MDM3NjQyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3R5bGVkSHRtbExpbmsgfSBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkXCI7XHJcbmltcG9ydCBTbGlkZXJDYXJkLCB7IEltYWdlVG9TbGlkZXIgfSBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkL1NsaWRlckNhcmRcIjtcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcblxyXG4gIENvbnRhaW5lcixcclxuICBHcmlkLFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEJyYW5kQnV0dG9uLCBJbWFnZUJ1dHRvbiB9IGZyb20gXCJAcm9vdC9zdHlsZXMvQ3VzdG9tXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgaW1hZ2VzOiBJbWFnZVRvU2xpZGVyW107XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGtleTogXCJ2YXBlXCIgfCBcImV4cGVuc2VcIiB8IFwic2hvcFwiO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEaXZpZGVyRWxlbWVudCA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgJjo6YmVmb3JlLDo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG4gICY6OmJlZm9yZXtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDFlbSB0b3AgNTAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUJhQUFBQUFDQ0FZQUFBQ3VUSHVLQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5RnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5TMWpNREUwSURjNUxqRTFNVFE0TVN3Z01qQXhNeTh3TXk4eE15MHhNam93T1RveE5TQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJQ2hYYVc1a2IzZHpLU0lnZUcxd1RVMDZTVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRG8xT1RoQlJEWTRPVU5ETVRZeE1VVTBPVUUzTlVWR09FSkRNek16TWpFMk55SWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEbzFPVGhCUkRZNFFVTkRNVFl4TVVVME9VRTNOVVZHT0VKRE16TXpNakUyTnlJK0lEeDRiWEJOVFRwRVpYSnBkbVZrUm5KdmJTQnpkRkpsWmpwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qVTVPRUZFTmpnM1EwTXhOakV4UlRRNVFUYzFSVVk0UWtNek16TXlNVFkzSWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pVNU9FRkVOamc0UTBNeE5qRXhSVFE1UVRjMVJVWTRRa016TXpNeU1UWTNJaTgrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrVlU1MTNnQUFBRFZKUkVGVWVOcnMwREVOQUNBUUJEQklXTEdCSlFieS9tVWNKbjVzSlhRbU9RTUFBQUFBQUpxdCsycHJBQUFBQUFDZzJ4ZGdBTms2QkVWdUpneU1BQUFBQUVsRlRrU3VRbUNDXCIpO1xyXG4gIH1cclxuICAmOjphZnRlcntcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgMWVtIHRvcCA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQmFBQUFBQUNDQVlBQUFDdVRIdUtBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlGcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TlMxak1ERTBJRGM1TGpFMU1UUTRNU3dnTWpBeE15OHdNeTh4TXkweE1qb3dPVG94TlNBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElDaFhhVzVrYjNkektTSWdlRzF3VFUwNlNXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEbzFPVGhCUkRZNE9VTkRNVFl4TVVVME9VRTNOVVZHT0VKRE16TXpNakUyTnlJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRvMU9UaEJSRFk0UVVORE1UWXhNVVUwT1VFM05VVkdPRUpETXpNek1qRTJOeUkrSUR4NGJYQk5UVHBFWlhKcGRtVmtSbkp2YlNCemRGSmxaanBwYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2pVNU9FRkVOamczUTBNeE5qRXhSVFE1UVRjMVJVWTRRa016TXpNeU1UWTNJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPalU1T0VGRU5qZzRRME14TmpFeFJUUTVRVGMxUlVZNFFrTXpNek15TVRZM0lpOCtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtWVTUxM2dBQUFEVkpSRUZVZU5yczBERU5BQ0FRQkRCSVdMR0JKUWJ5L21VY0puNXNKWFFtT1FNQUFBQUFBSnF0KzJwckFBQUFBQUNnMnhkZ0FOazZCRVZ1Smd5TUFBQUFBRWxGVGtTdVFtQ0NcIik7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlTGluayA9IHN0eWxlZChTdHlsZWRIdG1sTGluaylgXHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG5gO1xyXG5cclxuY29uc3QgUHJvamVjdDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdXJsLCBuYW1lLCB0aXRsZSwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RGl2aWRlckVsZW1lbnRcclxuICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXIgcHJvamVjdC10aWxlXCJcclxuICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiMWVtIDBlbVwiLCB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VGl0bGVMaW5rXHJcbiAgICAgICAgICBocmVmPXt1cmx9XHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICB0aXRsZT17bmFtZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bmFtZX1cclxuICAgICAgICA8L1RpdGxlTGluaz5cclxuICAgICAgPC9EaXZpZGVyRWxlbWVudD5cclxuXHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIj5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICB7cHJvcHMuaW1hZ2VzLmxlbmd0aCA+IDEgJiZcclxuICAgICAgICAgICAgPFNsaWRlckNhcmQgaW1hZ2VEYXRhPXtwcm9wcy5pbWFnZXN9IC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICB7cHJvcHMuaW1hZ2VzLmxlbmd0aCA9PT0gMSAmJlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgIDxTdHlsZWRIdG1sTGlua1xyXG4gICAgICAgICAgICBocmVmPXt1cmx9XHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbWFnZUJ1dHRvblxyXG4gICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgICB1cmw9e3Byb3BzLmltYWdlc1swXS5pbWdQYXRofVxyXG4gICAgICAgICAgICAgIHdpZHRoPXs1MjB9XHJcbiAgICAgICAgICAgICAgbWluSGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgYnV0dG9tUHJvcHM9e3t9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TdHlsZWRIdG1sTGluaz5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogXCIxcmVtXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICA8QnJhbmRCdXR0b24gY29sb3I9e3Byb3BzLmtleX0gc2l6ZT1cInNtYWxsXCIgdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgIDxTdHlsZWRIdG1sTGluayBocmVmPXt1cmx9IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIiB0aXRsZT17bmFtZX0+XHJcbiAgICAgICAgICAgICAge25hbWUudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgPC9TdHlsZWRIdG1sTGluaz5cclxuICAgICAgICAgIDwvQnJhbmRCdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XHJcbmltcG9ydCB7IHZhcGVNdXNpY0Rlc2NyaXB0aW9uIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgdmFwZW11c2ljSW1nIGZyb20gXCIuLi8uLi8uLi9pbWcvdmFwZW11c2ljLWV4YW1wbGUuanBnXCI7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbn1cclxuXHJcbmNvbnN0IFZhcGVNdXNpYyA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb2plY3RcclxuICAgICAga2V5PVwidmFwZVwiXHJcbiAgICAgIGltYWdlcz17W3tcclxuICAgICAgICBsYWJlbDogXCJWYXBlTXVzaWMgSG9tZVBhZ2VcIixcclxuICAgICAgICBpbWdQYXRoOiB2YXBlbXVzaWNJbWcsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBsYWJlbDogXCJWYXBlTXVzaWMgTWVudVwiLFxyXG4gICAgICAgIGltZ1BhdGg6XHJcbiAgICAgICAgICBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3dsb3Blei9pbWFnZS91cGxvYWQvdjE1OTE5MTg4ODkvdmFwZW11c2ljMi92YXBlbXVzaWMtbWVudS5qcGdcIixcclxuICAgICAgfSwge1xyXG4gICAgICAgIGltZ1BhdGg6XHJcbiAgICAgICAgICBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3dsb3Blei9pbWFnZS91cGxvYWQvdjE1OTE5MjEzODgvdmFwZW11c2ljMi92YXBlbXVzaWMtcGRwLmpwZ1wiLFxyXG4gICAgICAgIGxhYmVsOiBcIkF1ZGlvIFBsYXllclwiLFxyXG4gICAgICB9XX1cclxuICAgICAgdXJsPVwiaHR0cHM6Ly92YXBlbXVzaWMuY2x1YlwiXHJcbiAgICAgIG5hbWU9XCJWYXBlIE11c2ljXCJcclxuICAgICAgdGl0bGU9XCJWYXBlIE11c2ljIC0gTGF0aW4gTXVzaWMgTGlzdGVuICYgRG93bmxvYWRcIlxyXG4gICAgPlxyXG4gICAgICB7dmFwZU11c2ljRGVzY3JpcHRpb259XHJcbiAgICA8L1Byb2plY3Q+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZhcGVNdXNpYztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRoZW1lLCB3aXRoU3R5bGVzLCBXaXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuXHJcbmludGVyZmFjZSBTdHlsZXMge1xyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb2xvcnNNYXBwaW5nIHtcclxuICBkZWZhdWx0OiBzdHJpbmc7XHJcbiAgYmx1ZTogc3RyaW5nO1xyXG4gIHZhcGU6IHN0cmluZztcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTaXplc01hcHBpbmcge1xyXG4gIGRlZmF1bHQ6IHN0cmluZztcclxuICBzbWFsbDogc3RyaW5nO1xyXG4gIGxhcmdlOiBzdHJpbmc7XHJcbiAgdmFwZTogc3RyaW5nO1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5leHBvcnQgdHlwZSBQYWxldHRlQ29sb3JLZXlzID1cclxuICB8IFwicHJpbWFyeVwiXHJcbiAgfCBcInNlY29uZGFyeVwiXHJcbiAgfCBcImVycm9yXCJcclxuICB8IFwid2FybmluZ1wiXHJcbiAgfCBcInRlcnRpYXJ5XCJcclxuICB8IFwic3VjY2Vzc1wiO1xyXG5cclxuaW50ZXJmYWNlIEJ1dHRvblN0eWxlcyBleHRlbmRzIFdpdGhTdHlsZXM8dHlwZW9mIHN0eWxlcz4ge1xyXG4gIGNvbG9yOlxyXG4gICAgfCBcInZhcGVcIlxyXG4gICAgfCBcImV4cGVuc2VcIlxyXG4gICAgfCBcInNob3BcIlxyXG4gICAgfCBcImRlZmF1bHRcIlxyXG4gICAgfCBcInRleHRcIlxyXG4gICAgfCBcImJsdWVcIlxyXG4gICAgfCBQYWxldHRlQ29sb3JLZXlzO1xyXG4gIHNpemU/OiBcInNtYWxsXCIgfCBcImRlZmF1bHRcIiB8IFwibGFyZ2VcIjtcclxuICAvKipcclxuICAgICAgICAgKiBUaGUgY29udGVudCBvZiB0aGUgYnV0dG9uLlxyXG4gICAgICAgICAqL1xyXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYnV0dG9uIHdpbGwgYmUgZGlzYWJsZWQuXHJcbiAgICAgICAgICAgKi9cclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIG5vIGVsZXZhdGlvbiBpcyB1c2VkLlxyXG4gICAgICAgICAgICovXHJcbiAgZGlzYWJsZUVsZXZhdGlvbj86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSAga2V5Ym9hcmQgZm9jdXMgcmlwcGxlIHdpbGwgYmUgZGlzYWJsZWQuXHJcbiAgICAgICAgICAgKi9cclxuICBkaXNhYmxlRm9jdXNSaXBwbGU/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogRWxlbWVudCBwbGFjZWQgYWZ0ZXIgdGhlIGNoaWxkcmVuLlxyXG4gICAgICAgICAgICovXHJcbiAgZW5kSWNvbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAvKipcclxuICAgICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGJ1dHRvbiB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cclxuICAgICAgICAgICAqL1xyXG4gIGZ1bGxXaWR0aD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBUaGUgVVJMIHRvIGxpbmsgdG8gd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXHJcbiAgICAgICAgICAgKiBJZiBkZWZpbmVkLCBhbiBgYWAgZWxlbWVudCB3aWxsIGJlIHVzZWQgYXMgdGhlIHJvb3Qgbm9kZS5cclxuICAgICAgICAgICAqL1xyXG4gIGhyZWY/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICAgICAgICAgKiBFbGVtZW50IHBsYWNlZCBiZWZvcmUgdGhlIGNoaWxkcmVuLlxyXG4gICAgICAgICAgICovXHJcbiAgc3RhcnRJY29uPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIC8qKlxyXG4gICAgICAgICAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxyXG4gICAgICAgICAgICovXHJcbiAgdmFyaWFudD86IFwidGV4dFwiIHwgXCJvdXRsaW5lZFwiIHwgXCJjb250YWluZWRcIjtcclxufVxyXG5cclxuY29uc3QgREVGQVVMVF9TSEFET1cgPVxyXG4gIFwiMHB4IDNweCAxcHggLTJweCByZ2JhKDAsMCwwLDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsMCwwLDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEyKVwiO1xyXG4vLyBMaWtlIGh0dHBzOi8vZ2l0aHViLmNvbS9icnVub2JlcnRvbGluaS9zdHlsZWQtYnlcclxuY29uc3Qgc3R5bGVkQnlDb2xvciA9IChwcm9wZXJ0eTogc3RyaW5nLCBtYXBwaW5nOiBDb2xvcnNNYXBwaW5nKSA9PlxyXG4gIChwcm9wczogU3R5bGVzKSA9PiBtYXBwaW5nW3Byb3BzW3Byb3BlcnR5XV07XHJcbmNvbnN0IHN0eWxlZEJ5U2l6ZSA9IChwcm9wZXJ0eTogc3RyaW5nLCBtYXBwaW5nOiBTaXplc01hcHBpbmcpID0+XHJcbiAgKHByb3BzOiBTdHlsZXMpID0+IG1hcHBpbmdbcHJvcHNbcHJvcGVydHldXTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgYmFja2dyb3VuZDogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgZGVmYXVsdDogXCIjMDA3OTZiXCIsXHJcbiAgICAgIGJsdWU6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjE5NkYzIDMwJSwgIzIxQ0JGMyA5MCUpXCIsXHJcbiAgICAgIHByaW1hcnk6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gICAgICBzZWNvbmRhcnk6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluLFxyXG4gICAgICBlcnJvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLFxyXG4gICAgICB3YXJuaW5nOiB0aGVtZS5wYWxldHRlLndhcm5pbmcubWFpbixcclxuICAgICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkubWFpbixcclxuICAgICAgdGV4dDogXCJpbmhlcml0XCIsXHJcbiAgICAgIHZhcGU6IFwicmVkXCIsXHJcbiAgICB9KSxcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxyXG4gICAgYm9yZGVyOiAwLFxyXG4gICAgY29sb3I6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgIGRlZmF1bHQ6IFwiI2ZmZlwiLFxyXG4gICAgICBibHVlOiBcIiNmZmZcIixcclxuICAgICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmNvbnRyYXN0VGV4dCxcclxuICAgICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXHJcbiAgICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5jb250cmFzdFRleHQsXHJcbiAgICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmNvbnRyYXN0VGV4dCxcclxuICAgICAgd2FybmluZzogdGhlbWUucGFsZXR0ZS53YXJuaW5nLmNvbnRyYXN0VGV4dCxcclxuICAgICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkuY29udHJhc3RUZXh0LFxyXG4gICAgICB0ZXh0OiB0aGVtZS5wYWxldHRlLmdldENvbnRyYXN0VGV4dCh0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSksXHJcbiAgICAgIHZhcGU6IFwid2hpdGVcIixcclxuICAgIH0pLFxyXG4gICAgaGVpZ2h0OiBzdHlsZWRCeVNpemUoXCJzaXplXCIsIHtcclxuICAgICAgZGVmYXVsdDogXCI0MHB4XCIsXHJcbiAgICAgIGxhcmdlOiBcIjQ4cHhcIixcclxuICAgICAgc21hbGw6IFwiMjBweFwiLFxyXG4gICAgfSksXHJcbiAgICBwYWRkaW5nOiBzdHlsZWRCeVNpemUoXCJzaXplXCIsIHtcclxuICAgICAgZGVmYXVsdDogdGhlbWUuc3BhY2luZygwLjUsIDEpLFxyXG4gICAgICBsYXJnZTogdGhlbWUuc3BhY2luZygxLjUsIDEuNSksXHJcbiAgICAgIHNtYWxsOiB0aGVtZS5zcGFjaW5nKDEsIDAuNSksXHJcbiAgICB9KSxcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICBbXCImOmhvdmVyXCJdOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHN0eWxlZEJ5Q29sb3IoXCJjb2xvclwiLCB7XHJcbiAgICAgICAgZGVmYXVsdDogXCJyZ2IoMCwgODQsIDc0KVwiLFxyXG4gICAgICAgIGJsdWU6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMCAxMzcgMjQ3KSAzMCUsIHJnYigxMCAxMzggMTY4KSA5MCUpXCIsXHJcbiAgICAgICAgcHJpbWFyeTogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAgICAgc2Vjb25kYXJ5OiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5kYXJrLFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5kYXJrLFxyXG4gICAgICAgIGVycm9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmRhcmssXHJcbiAgICAgICAgd2FybmluZzogdGhlbWUucGFsZXR0ZS53YXJuaW5nLmRhcmssXHJcbiAgICAgICAgdGVydGlhcnk6IHRoZW1lLnBhbGV0dGUudGVydGlhcnkuZGFyayxcclxuICAgICAgICB0ZXh0OiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICAgICB2YXBlOiBcImdyZWVuXCIsXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICAgIGJveFNoYWRvdzogc3R5bGVkQnlDb2xvcihcImNvbG9yXCIsIHtcclxuICAgICAgZGVmYXVsdDogREVGQVVMVF9TSEFET1csXHJcbiAgICAgIGJsdWU6IFwicmdiYSgzMywgMjAzLCAyNDMsIDAuMykgMXB4IDJweCAxcHggMXB4XCIsXHJcbiAgICAgIHByaW1hcnk6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICAgIHNlY29uZGFyeTogdGhlbWUuc2hhZG93c1syXSxcclxuICAgICAgc3VjY2VzczogdGhlbWUuc2hhZG93c1s0XSxcclxuICAgICAgZXJyb3I6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIHdhcm5pbmc6IHRoZW1lLnNoYWRvd3NbMl0sXHJcbiAgICAgIHRlcnRpYXJ5OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICB0ZXh0OiB0aGVtZS5zaGFkb3dzWzJdLFxyXG4gICAgICB2YXBlOiB0aGVtZS5zaGFkb3dzWzNdLFxyXG4gICAgfSksXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgQnJhbmRCdXR0b24gPSB3aXRoU3R5bGVzKHN0eWxlcykoKFxyXG4gIHsgY2xhc3Nlcywgc2l6ZSwgY2hpbGRyZW4sIGNvbG9yLCAuLi5vdGhlciB9OiBQcm9wc1dpdGhDaGlsZHJlbjxcclxuICAgIEJ1dHRvblN0eWxlc1xyXG4gID4sXHJcbikgPT4gKFxyXG4gIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHsuLi5vdGhlcn0+e2NoaWxkcmVufTwvQnV0dG9uPlxyXG4pKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==