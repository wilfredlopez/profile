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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9wYXJ0aWFscy9Qcm9qZWN0LnRzeCJdLCJuYW1lcyI6WyJEaXZpZGVyRWxlbWVudCIsInN0eWxlZCIsImRpdiIsIlRpdGxlTGluayIsIlN0eWxlZEh0bWxMaW5rIiwicHJvcHMiLCJ0aGVtZSIsImNvbG9ycyIsInNlY29uZGFyeSIsIlByb2plY3QiLCJ1cmwiLCJuYW1lIiwidGl0bGUiLCJtYXJnaW4iLCJ0ZXh0VHJhbnNmb3JtIiwiY2hpbGRyZW4iLCJpbWFnZXMiLCJsZW5ndGgiLCJtYXJnaW5Cb3R0b20iLCJpbWdQYXRoIiwicGFkZGluZ0JvdHRvbSIsImtleSIsInRvVXBwZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFVTyxNQUFNQSxjQUFjLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdTRGQUFwQjtLQUFNRixjO0FBd0JOLE1BQU1HLFNBQVMsR0FBR0YsaUVBQU0sQ0FBQ0csaUVBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxxREFFVkMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsU0FGbkIsQ0FBZjtNQUFNTCxTOztBQU1iLE1BQU1NLE9BQXdCLEdBQUcsVUFBb0M7QUFBQSxNQUFuQztBQUFFQyxPQUFGO0FBQU9DLFFBQVA7QUFBYUM7QUFBYixHQUFtQztBQUFBLE1BQVpQLEtBQVk7O0FBQ25FLFNBQ0UsbUVBQ0UsTUFBQyxjQUFEO0FBQ0UsYUFBUyxFQUFDLHFCQURaO0FBRUUsU0FBSyxFQUFFO0FBQUVRLFlBQU0sRUFBRSxTQUFWO0FBQXFCQyxtQkFBYSxFQUFFO0FBQXBDLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsU0FBRDtBQUNFLFFBQUksRUFBRUosR0FEUjtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDLHFCQUhOO0FBSUUsU0FBSyxFQUFFQyxJQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR0EsSUFOSCxDQUpGLENBREYsRUFlRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLGFBQVMsRUFBQyxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBVyxZQUFRLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixLQUFLLENBQUNVLFFBRFQsQ0FERixFQUlHVixLQUFLLENBQUNXLE1BQU4sQ0FBYUMsTUFBYixHQUFzQixDQUF0QixJQUNDLE1BQUMscUVBQUQ7QUFBWSxhQUFTLEVBQUVaLEtBQUssQ0FBQ1csTUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBREYsQ0FmRixFQXlCR1gsS0FBSyxDQUFDVyxNQUFOLENBQWFDLE1BQWIsS0FBd0IsQ0FBeEIsSUFDQztBQUFLLFNBQUssRUFBRTtBQUFFQyxrQkFBWSxFQUFFO0FBQWhCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFDRSxRQUFJLEVBQUVSLEdBRFI7QUFFRSxVQUFNLEVBQUMsUUFGVDtBQUdFLE9BQUcsRUFBQyxxQkFITjtBQUlFLFNBQUssRUFBRTtBQUNMUSxrQkFBWSxFQUFFO0FBRFQsS0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUUsTUFBQywrREFBRDtBQUNFLFNBQUssRUFBRU4sS0FEVDtBQUVFLE9BQUcsRUFBRVAsS0FBSyxDQUFDVyxNQUFOLENBQWEsQ0FBYixFQUFnQkcsT0FGdkI7QUFHRSxTQUFLLEVBQUUsR0FIVDtBQUlFLGFBQVMsRUFBRSxHQUpiO0FBS0UsZUFBVyxFQUFFLEVBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREYsQ0ExQkosRUE0Q0UsTUFBQyxzREFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLGNBQVUsRUFBQyxRQUZiO0FBR0UsV0FBTyxFQUFDLFFBSFY7QUFJRSxTQUFLLEVBQUU7QUFBRUMsbUJBQWEsRUFBRTtBQUFqQixLQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQWEsU0FBSyxFQUFFZixLQUFLLENBQUNnQixHQUExQjtBQUErQixRQUFJLEVBQUMsT0FBcEM7QUFBNEMsV0FBTyxFQUFDLFdBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlFQUFEO0FBQWdCLFFBQUksRUFBRVgsR0FBdEI7QUFBMkIsYUFBUyxFQUFDLFlBQXJDO0FBQWtELFNBQUssRUFBRUMsSUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxJQUFJLENBQUNXLFdBQUwsRUFESCxDQURGLENBREYsQ0FORixDQTVDRixDQURGO0FBNkRELENBOUREOztNQUFNYixPO0FBZ0VTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuM2FhMjY0MjlhMzJjNTY3M2U4ZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0eWxlZEh0bWxMaW5rIH0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZFwiO1xyXG5pbXBvcnQgU2xpZGVyQ2FyZCwgeyBJbWFnZVRvU2xpZGVyIH0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZC9TbGlkZXJDYXJkXCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG5cclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBCcmFuZEJ1dHRvbiwgSW1hZ2VCdXR0b24gfSBmcm9tIFwiQHJvb3Qvc3R5bGVzL0N1c3RvbVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIGltYWdlczogSW1hZ2VUb1NsaWRlcltdO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBrZXk6IFwidmFwZVwiIHwgXCJleHBlbnNlXCIgfCBcInNob3BcIjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGl2aWRlckVsZW1lbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICY6OmJlZm9yZSw6OmFmdGVye1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIH1cclxuICAmOjpiZWZvcmV7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxZW0gdG9wIDUwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFCYUFBQUFBQ0NBWUFBQUN1VEh1S0FBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeUZwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOUzFqTURFMElEYzVMakUxTVRRNE1Td2dNakF4TXk4d015OHhNeTB4TWpvd09Ub3hOU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESUNoWGFXNWtiM2R6S1NJZ2VHMXdUVTA2U1c1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRvMU9UaEJSRFk0T1VORE1UWXhNVVUwT1VFM05VVkdPRUpETXpNek1qRTJOeUlnZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG8xT1RoQlJEWTRRVU5ETVRZeE1VVTBPVUUzTlVWR09FSkRNek16TWpFMk55SStJRHg0YlhCTlRUcEVaWEpwZG1Wa1JuSnZiU0J6ZEZKbFpqcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPalU1T0VGRU5qZzNRME14TmpFeFJUUTVRVGMxUlVZNFFrTXpNek15TVRZM0lpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09qVTVPRUZFTmpnNFEwTXhOakV4UlRRNVFUYzFSVVk0UWtNek16TXlNVFkzSWk4K0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K1ZVNTEzZ0FBQURWSlJFRlVlTnJzMERFTkFDQVFCREJJV0xHQkpRYnkvbVVjSm41c0pYUW1PUU1BQUFBQUFKcXQrMnByQUFBQUFBQ2cyeGRnQU5rNkJFVnVKZ3lNQUFBQUFFbEZUa1N1UW1DQ1wiKTtcclxuICB9XHJcbiAgJjo6YWZ0ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDFlbSB0b3AgNTAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUJhQUFBQUFDQ0FZQUFBQ3VUSHVLQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5RnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5TMWpNREUwSURjNUxqRTFNVFE0TVN3Z01qQXhNeTh3TXk4eE15MHhNam93T1RveE5TQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJQ2hYYVc1a2IzZHpLU0lnZUcxd1RVMDZTVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRG8xT1RoQlJEWTRPVU5ETVRZeE1VVTBPVUUzTlVWR09FSkRNek16TWpFMk55SWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEbzFPVGhCUkRZNFFVTkRNVFl4TVVVME9VRTNOVVZHT0VKRE16TXpNakUyTnlJK0lEeDRiWEJOVFRwRVpYSnBkbVZrUm5KdmJTQnpkRkpsWmpwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qVTVPRUZFTmpnM1EwTXhOakV4UlRRNVFUYzFSVVk0UWtNek16TXlNVFkzSWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pVNU9FRkVOamc0UTBNeE5qRXhSVFE1UVRjMVJVWTRRa016TXpNeU1UWTNJaTgrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrVlU1MTNnQUFBRFZKUkVGVWVOcnMwREVOQUNBUUJEQklXTEdCSlFieS9tVWNKbjVzSlhRbU9RTUFBQUFBQUpxdCsycHJBQUFBQUFDZzJ4ZGdBTms2QkVWdUpneU1BQUFBQUVsRlRrU3VRbUNDXCIpO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZUxpbmsgPSBzdHlsZWQoU3R5bGVkSHRtbExpbmspYFxyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnNlY29uZGFyeX07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuYDtcclxuXHJcbmNvbnN0IFByb2plY3Q6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHVybCwgbmFtZSwgdGl0bGUsIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPERpdmlkZXJFbGVtZW50XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyIHByb2plY3QtdGlsZVwiXHJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjFlbSAwZW1cIiwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRpdGxlTGlua1xyXG4gICAgICAgICAgaHJlZj17dXJsfVxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgdGl0bGU9e25hbWV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge25hbWV9XHJcbiAgICAgICAgPC9UaXRsZUxpbms+XHJcbiAgICAgIDwvRGl2aWRlckVsZW1lbnQ+XHJcblxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAge3Byb3BzLmltYWdlcy5sZW5ndGggPiAxICYmXHJcbiAgICAgICAgICAgIDxTbGlkZXJDYXJkIGltYWdlRGF0YT17cHJvcHMuaW1hZ2VzfSAvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAge3Byb3BzLmltYWdlcy5sZW5ndGggPT09IDEgJiZcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICA8U3R5bGVkSHRtbExpbmtcclxuICAgICAgICAgICAgaHJlZj17dXJsfVxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2VCdXR0b25cclxuICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgdXJsPXtwcm9wcy5pbWFnZXNbMF0uaW1nUGF0aH1cclxuICAgICAgICAgICAgICB3aWR0aD17NTIwfVxyXG4gICAgICAgICAgICAgIG1pbkhlaWdodD17NTAwfVxyXG4gICAgICAgICAgICAgIGJ1dHRvbVByb3BzPXt7fX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvU3R5bGVkSHRtbExpbms+XHJcbiAgICAgICAgPC9kaXY+fVxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiMXJlbVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgPEJyYW5kQnV0dG9uIGNvbG9yPXtwcm9wcy5rZXl9IHNpemU9XCJzbWFsbFwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj5cclxuICAgICAgICAgICAgPFN0eWxlZEh0bWxMaW5rIGhyZWY9e3VybH0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIHRpdGxlPXtuYW1lfT5cclxuICAgICAgICAgICAgICB7bmFtZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICA8L1N0eWxlZEh0bWxMaW5rPlxyXG4gICAgICAgICAgPC9CcmFuZEJ1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9