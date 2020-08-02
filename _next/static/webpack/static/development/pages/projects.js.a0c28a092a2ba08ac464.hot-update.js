webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./pages/projects.tsx":
/*!****************************!*\
  !*** ./pages/projects.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_projects_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/projects/index */ "./src/components/projects/index.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PageWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/PageWrapper */ "./src/components/PageWrapper.tsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _root_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @root/animation */ "./src/animation/index.ts");
/* harmony import */ var _components_npm_package_NpmPackages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/npm-package/NpmPackages */ "./src/components/npm-package/NpmPackages.tsx");
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\pages\\projects.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import Projects from "@components/pages/Projects";






 // import SliderCard from "@components/shared/SliderCard";
// import { PROJECT_IMAGES } from "@components/pages/constants/projectImages";
// const allImages = [
//   ...PROJECT_IMAGES.ExpenseManger,
//   ...PROJECT_IMAGES.retailMeNow,
//   ...PROJECT_IMAGES.vapeMusic,
// ];

const projects = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    initial: "initial",
    animate: "animate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("title", {
    key: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Showcase Projects | Wilfred Lopez"), __jsx("link", {
    rel: "canonical",
    href: "https://wilfredlopez.net/projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    variants: {
      animate: {
        transition: {
          staggerChildren: 0.1
        }
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_components_PageWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    variants: _root_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(_components_projects_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }), __jsx(_components_npm_package_NpmPackages__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (projects);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/pages/projects/Project.tsx":
false,

/***/ "./src/components/pages/projects/ProjectsArray.ts":
false,

/***/ "./src/components/pages/projects/descriptions.tsx":
false,

/***/ "./src/components/pages/projects/images.ts":
false,

/***/ "./src/components/pages/projects/index.tsx":
false,

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
/* harmony import */ var _root_styles_Custom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @root/styles/Custom */ "./src/styles/Custom.tsx");
/* harmony import */ var _root_styles_useSharedStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @root/styles/useSharedStyles */ "./src/styles/useSharedStyles.ts");
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

  const classes = Object(_root_styles_useSharedStyles__WEBPACK_IMPORTED_MODULE_5__["default"])();
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
  }, __jsx(_root_styles_Custom__WEBPACK_IMPORTED_MODULE_4__["ImageButton"], {
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
  }, __jsx(_root_styles_Custom__WEBPACK_IMPORTED_MODULE_4__["BrandButton"], {
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
  return [_root_styles_useSharedStyles__WEBPACK_IMPORTED_MODULE_5__["default"]];
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

/***/ "./src/components/projects/ProjectsArray.ts":
/*!**************************************************!*\
  !*** ./src/components/projects/ProjectsArray.ts ***!
  \**************************************************/
/*! exports provided: projects, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
/* harmony import */ var _descriptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./descriptions */ "./src/components/projects/descriptions.tsx");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/components/projects/images.ts");


const corona = {
  classKey: "shop",
  images: _images__WEBPACK_IMPORTED_MODULE_1__["PROJECT_IMAGES"].coronaVirus,
  url: "https://status-coronavirus.netlify.app/global",
  name: "COVID-19 Status",
  title: "COVID-19 - Coronavirus Status",
  description: _descriptions__WEBPACK_IMPORTED_MODULE_0__["coronaVirusDescription"]
};
const vapeMusic = {
  classKey: "vape",
  images: _images__WEBPACK_IMPORTED_MODULE_1__["PROJECT_IMAGES"].vapeMusic,
  url: "https://vapemusic.club",
  name: "Vape Music",
  title: "Vape Music - Latin Music Listen & Download",
  description: _descriptions__WEBPACK_IMPORTED_MODULE_0__["vapeMusicDescription"]
};
const retailmeNow = {
  classKey: "shop",
  images: _images__WEBPACK_IMPORTED_MODULE_1__["PROJECT_IMAGES"].retailMeNow,
  url: "#",
  name: "RetalMeNow",
  title: "RetalMeNow - Shop Online",
  description: _descriptions__WEBPACK_IMPORTED_MODULE_0__["retailmeNowDescription"]
};
const expenseManager = {
  classKey: "expense",
  images: _images__WEBPACK_IMPORTED_MODULE_1__["PROJECT_IMAGES"].ExpenseManger,
  url: "https://wilfredexpensemanager.netlify.app",
  name: "Expenses Manager",
  title: "Expenses Manager - Manage your personal finances",
  description: _descriptions__WEBPACK_IMPORTED_MODULE_0__["expenseManagerDescription"]
};
const projects = [vapeMusic, expenseManager, corona, retailmeNow];
/* harmony default export */ __webpack_exports__["default"] = (projects);

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

/***/ "./src/components/projects/descriptions.tsx":
/*!**************************************************!*\
  !*** ./src/components/projects/descriptions.tsx ***!
  \**************************************************/
/*! exports provided: retailmeNowDescription, expenseManagerDescription, vapeMusicDescription, coronaVirusDescription, easyTodosDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retailmeNowDescription", function() { return retailmeNowDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expenseManagerDescription", function() { return expenseManagerDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vapeMusicDescription", function() { return vapeMusicDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coronaVirusDescription", function() { return coronaVirusDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easyTodosDescription", function() { return easyTodosDescription; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\projects\\descriptions.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const retailmeNowDescription = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, "RetalMeNow an online retail store."), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, "Technologies: NextJS, GraphQL, NodeJS, Material-IU."));
const expenseManagerDescription = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}, "Expenses Manager is a Windows/Mac/IOS, Android and Web Application that helps you manage your personal finances and keeping track of your income and expenses."), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }
}, "Technologies: Ionic, GraphQL, NodeJS."));
const vapeMusicDescription = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
}, "Progressive Web App for listening and downloading promotional music."), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }
}, "Technologies: GraphQL, NodeJS, React, Apollo, Ionic."));
const coronaVirusDescription = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }
}, "Updated information about COVID-19."), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }
}, "Technologies: Apollo Server/Client, Typeorm, MongoDB, TypeGraphQL, Ionic, React, NodeJS, Express."));
const easyTodosDescription = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ", __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }
}, " ", "EasyTodos is a simple solution to keep track of your daily tasks. This app is great to manage your daily job or just to have a place to keep relevant information that regards to a particular task."), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }
}, "All todos have a \"Notes\" section that can be styled and edited very easy. You can filter the list, mark a todo as completed or find a completed todo an have it listed back again."));

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

/***/ "./src/components/projects/images.ts":
/*!*******************************************!*\
  !*** ./src/components/projects/images.ts ***!
  \*******************************************/
/*! exports provided: PROJECT_IMAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_IMAGES", function() { return PROJECT_IMAGES; });
/* harmony import */ var _img_retailmenow_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/retailmenow.jpeg */ "./src/img/retailmenow.jpeg");
/* harmony import */ var _img_vapemusic_example_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/vapemusic-example.jpg */ "./src/img/vapemusic-example.jpg");


const ExpenseMangerImages = [{
  label: "Login Page",
  imgPath: "https://res.cloudinary.com/wlopez/image/upload/v1596385412/wilfredlopez-profile-page/expense-manager-login.jpg"
}, {
  imgPath: "https://res.cloudinary.com/wlopez/image/upload/v1596227499/EXPENSE-MANAGER-SHOWCASE.jpg",
  label: "Recent Expenses"
}, {
  imgPath: "https://res.cloudinary.com/wlopez/image/upload/v1596227495/EXPENSE-MANAGER-SHOWCASE_2.jpg",
  label: "Monthly Summary"
}, {
  imgPath: "https://res.cloudinary.com/wlopez/image/upload/v1596385392/wilfredlopez-profile-page/expense-manager-register.jpg",
  label: "Register Page"
}];
const vapeMusicImages = [{
  label: "VapeMusic HomePage",
  imgPath: "https://res.cloudinary.com/wlopez/image/upload/v1596223814/VAPEMUSIC_SHOWCASE_1.jpg"
}, {
  label: "VapeMusic Menu",
  imgPath: "https://res.cloudinary.com/wlopez/image/upload/v1591918889/vapemusic2/vapemusic-menu.jpg"
}, {
  imgPath: "https://res.cloudinary.com/wlopez/image/upload/v1596227508/VAPEMUSIC_DARK_MODE.jpg",
  label: "Dark Mode"
}, {
  label: "Categories",
  imgPath: _img_vapemusic_example_jpg__WEBPACK_IMPORTED_MODULE_1__["default"]
}];
const retailMeNowImages = [{
  label: "PDP",
  imgPath: _img_retailmenow_jpeg__WEBPACK_IMPORTED_MODULE_0__["default"]
}];
const coronaVirusImages = [{
  label: "HomePage",
  imgPath: "https://res.cloudinary.com/wlopez/image/upload/v1596335173/wilfredlopez-profile-page/corona-home-page.jpg"
}, {
  label: "Cases Per Country",
  imgPath: "https://res.cloudinary.com/wlopez/image/upload/v1596335144/wilfredlopez-profile-page/Corona-countries.jpg"
}];
const PROJECT_IMAGES = {
  vapeMusic: vapeMusicImages,
  retailMeNow: retailMeNowImages,
  ExpenseManger: ExpenseMangerImages,
  coronaVirus: coronaVirusImages
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/projects/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/projects/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_context_PagesContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @root/context/PagesContext */ "./src/context/PagesContext.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectsArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsArray */ "./src/components/projects/ProjectsArray.ts");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Project */ "./src/components/projects/Project.tsx");
var _jsxFileName = "C:\\Users\\wilfr\\Desktop\\development\\dec-2019\\wilfredlopez\\src\\components\\projects\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Projects = ({
  loop = false,
  showSliderControls = true,
  limitTo,
  addMarginTop = true
}) => {
  _s();

  const {
    changePage
  } = Object(_root_context_PagesContext__WEBPACK_IMPORTED_MODULE_0__["usePagesContext"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    changePage("Showcase");
  }, [changePage]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, addMarginTop && __jsx("div", {
    style: {
      marginTop: "5rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), limitTo ? _ProjectsArray__WEBPACK_IMPORTED_MODULE_2__["default"].slice(0, limitTo).map(proj => __jsx(_Project__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: proj.title,
    loop: loop,
    showSliderControls: showSliderControls,
    classKey: proj.classKey,
    images: proj.images,
    url: proj.url,
    name: proj.name,
    title: proj.title,
    description: proj.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 58
    }
  })) : _ProjectsArray__WEBPACK_IMPORTED_MODULE_2__["default"].map(proj => __jsx(_Project__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: proj.title,
    loop: loop,
    showSliderControls: showSliderControls,
    classKey: proj.classKey,
    images: proj.images,
    url: proj.url,
    name: proj.name,
    title: proj.title,
    description: proj.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  })));
};

_s(Projects, "nC1ZKDSBPqkPTRpzyOmjL3d7Meo=", false, function () {
  return [_root_context_PagesContext__WEBPACK_IMPORTED_MODULE_0__["usePagesContext"]];
});

_c = Projects;
/* harmony default export */ __webpack_exports__["default"] = (Projects);

var _c;

$RefreshReg$(_c, "Projects");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9qZWN0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdHNBcnJheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9kZXNjcmlwdGlvbnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL2ltYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9pbmRleC50c3giXSwibmFtZXMiOlsicHJvamVjdHMiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInN0YWdnZXJDaGlsZHJlbiIsImZhZGVJblVwIiwiVGl0bGVMaW5rIiwic3R5bGVkIiwiU3R5bGVkSHRtbExpbmsiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwic2Vjb25kYXJ5IiwiUHJvamVjdCIsInNob3dTbGlkZXJDb250cm9scyIsInVybCIsIm5hbWUiLCJ0aXRsZSIsImxvb3AiLCJjbGFzc2VzIiwidXNlU2hhcmVkU3R5bGVzIiwidGV4dFRyYW5zZm9ybSIsIm1hcmdpblRvcCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwicm9vdCIsIm1pblBhZGRpbmdYIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJsZW5ndGgiLCJjb25jYXQiLCJmbGV4Q2VudGVyIiwibWFyZ2luQm90dG9tIiwiaW1nUGF0aCIsInBhZGRpbmdCb3R0b20iLCJjbGFzc0tleSIsInRvVXBwZXJDYXNlIiwiY29yb25hIiwiUFJPSkVDVF9JTUFHRVMiLCJjb3JvbmFWaXJ1cyIsImNvcm9uYVZpcnVzRGVzY3JpcHRpb24iLCJ2YXBlTXVzaWMiLCJ2YXBlTXVzaWNEZXNjcmlwdGlvbiIsInJldGFpbG1lTm93IiwicmV0YWlsTWVOb3ciLCJyZXRhaWxtZU5vd0Rlc2NyaXB0aW9uIiwiZXhwZW5zZU1hbmFnZXIiLCJFeHBlbnNlTWFuZ2VyIiwiZXhwZW5zZU1hbmFnZXJEZXNjcmlwdGlvbiIsImVhc3lUb2Rvc0Rlc2NyaXB0aW9uIiwiRXhwZW5zZU1hbmdlckltYWdlcyIsImxhYmVsIiwidmFwZU11c2ljSW1hZ2VzIiwidmFwZW11c2ljSW1nIiwicmV0YWlsTWVOb3dJbWFnZXMiLCJyZXRhaWxtZW5vd0ltZyIsImNvcm9uYVZpcnVzSW1hZ2VzIiwiUHJvamVjdHMiLCJsaW1pdFRvIiwiYWRkTWFyZ2luVG9wIiwiY2hhbmdlUGFnZSIsInVzZVBhZ2VzQ29udGV4dCIsInVzZUVmZmVjdCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwiUHJvamVjdHNBcnJheSIsInNsaWNlIiwibWFwIiwicHJvaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUNyQixTQUNFLG1FQUNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksV0FBTyxFQUFDLFNBQXBCO0FBQThCLFdBQU8sRUFBQyxTQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxPQUFHLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsV0FBVjtBQUFzQixRQUFJLEVBQUMsbUNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0UsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxZQUFRLEVBQUU7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amVjdHMuanMuYTBjMjhhMDkyYTJiYTA4YWM0NjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IFByb2plY3RzIGZyb20gXCJAY29tcG9uZW50cy9wYWdlcy9Qcm9qZWN0c1wiO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIkBjb21wb25lbnRzL3Byb2plY3RzL2luZGV4XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFBhZ2VXcmFwcGVyIGZyb20gXCJAY29tcG9uZW50cy9QYWdlV3JhcHBlclwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyBmYWRlSW5VcCB9IGZyb20gXCJAcm9vdC9hbmltYXRpb25cIjtcclxuaW1wb3J0IE5wbVBhY2thZ2VzIGZyb20gXCJAY29tcG9uZW50cy9ucG0tcGFja2FnZS9OcG1QYWNrYWdlc1wiO1xyXG5cclxuLy8gaW1wb3J0IFNsaWRlckNhcmQgZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZC9TbGlkZXJDYXJkXCI7XHJcbi8vIGltcG9ydCB7IFBST0pFQ1RfSU1BR0VTIH0gZnJvbSBcIkBjb21wb25lbnRzL3BhZ2VzL2NvbnN0YW50cy9wcm9qZWN0SW1hZ2VzXCI7XHJcblxyXG4vLyBjb25zdCBhbGxJbWFnZXMgPSBbXHJcbi8vICAgLi4uUFJPSkVDVF9JTUFHRVMuRXhwZW5zZU1hbmdlcixcclxuLy8gICAuLi5QUk9KRUNUX0lNQUdFUy5yZXRhaWxNZU5vdyxcclxuLy8gICAuLi5QUk9KRUNUX0lNQUdFUy52YXBlTXVzaWMsXHJcbi8vIF07XHJcblxyXG5jb25zdCBwcm9qZWN0cyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG1vdGlvbi5kaXYgaW5pdGlhbD1cImluaXRpYWxcIiBhbmltYXRlPVwiYW5pbWF0ZVwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlIGtleT1cInRpdGxlXCI+U2hvd2Nhc2UgUHJvamVjdHMgfCBXaWxmcmVkIExvcGV6PC90aXRsZT5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL3dpbGZyZWRsb3Blei5uZXQvcHJvamVjdHNcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgdmFyaWFudHM9e3tcclxuICAgICAgICAgICAgYW5pbWF0ZToge1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4xLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQYWdlV3JhcHBlcj5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e2ZhZGVJblVwfT5cclxuICAgICAgICAgICAgICA8UHJvamVjdHMgLz5cclxuICAgICAgICAgICAgICA8TnBtUGFja2FnZXMgLz5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICB7LyogPFNsaWRlckNhcmRcclxuICAgICAgICAgIGltYWdlRGF0YT17YWxsSW1hZ2VzfVxyXG4gICAgICAgICAgc2hvd0NvbnRyb2xzPXtmYWxzZX1cclxuICAgICAgICAgIGxvb3BcclxuICAgICAgICAvPiAqL31cclxuICAgICAgICAgIDwvUGFnZVdyYXBwZXI+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHM7XHJcbiIsImltcG9ydCB7IFN0eWxlZEh0bWxMaW5rIH0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZFwiO1xyXG5pbXBvcnQgU2xpZGVyQ2FyZCwgeyBJbWFnZVRvU2xpZGVyIH0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZC9TbGlkZXJDYXJkXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29udGFpbmVyLFxyXG4gIEdyaWQsXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgQnJhbmRCdXR0b24sIEltYWdlQnV0dG9uIH0gZnJvbSBcIkByb290L3N0eWxlcy9DdXN0b21cIjtcclxuaW1wb3J0IHVzZVNoYXJlZFN0eWxlcyBmcm9tIFwiQHJvb3Qvc3R5bGVzL3VzZVNoYXJlZFN0eWxlc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IERpdmlkZXJFbGVtZW50IH0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZFwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB1cmw6IHN0cmluZztcclxuICBpbWFnZXM6IEltYWdlVG9TbGlkZXJbXTtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgY2xhc3NLZXk6IFwidmFwZVwiIHwgXCJleHBlbnNlXCIgfCBcInNob3BcIjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHNob3dTbGlkZXJDb250cm9scz86IGJvb2xlYW47XHJcbiAgbG9vcD86IGJvb2xlYW47XHJcbiAgZGVzY3JpcHRpb246IEpTWC5FbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGVMaW5rID0gc3R5bGVkKFN0eWxlZEh0bWxMaW5rKWBcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbmA7XHJcblxyXG5jb25zdCBQcm9qZWN0OiBSZWFjdC5GQzxQcm9wcz4gPSAoXHJcbiAgeyBzaG93U2xpZGVyQ29udHJvbHMgPSB0cnVlLCB1cmwsIG5hbWUsIHRpdGxlLCBsb29wLCAuLi5wcm9wcyB9LFxyXG4pID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU2hhcmVkU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxEaXZpZGVyRWxlbWVudFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImhlYWRlciBwcm9qZWN0LXRpbGVcIlxyXG4gICAgICAgIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIG1hcmdpblRvcDogXCIxcmVtXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUaXRsZUxpbmtcclxuICAgICAgICAgIGhyZWY9e3VybH1cclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgIHRpdGxlPXtuYW1lfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgIDwvVGl0bGVMaW5rPlxyXG4gICAgICA8L0RpdmlkZXJFbGVtZW50PlxyXG5cclxuICAgICAgPENvbnRhaW5lclxyXG4gICAgICAgIG1heFdpZHRoPVwic21cIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgcm9vdDogY2xhc3Nlcy5taW5QYWRkaW5nWCxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICB7cHJvcHMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICB7cHJvcHMuaW1hZ2VzLmxlbmd0aCA+IDEgJiZcclxuICAgICAgICAgICAgPFNsaWRlckNhcmRcclxuICAgICAgICAgICAgICBzaG93Q29udHJvbHM9e3Nob3dTbGlkZXJDb250cm9sc31cclxuICAgICAgICAgICAgICBpbWFnZURhdGE9e3Byb3BzLmltYWdlc31cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezc1MH1cclxuICAgICAgICAgICAgICBsb29wPXtsb29wfVxyXG4gICAgICAgICAgICAgIHNob3dUaXRsZVxyXG4gICAgICAgICAgICAvPn1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICB7cHJvcHMuaW1hZ2VzLmxlbmd0aCA9PT0gMSAmJlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8U3R5bGVkSHRtbExpbmtcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1pblBhZGRpbmdYLmNvbmNhdChcIiBcIiArIGNsYXNzZXMuZmxleENlbnRlcil9XHJcbiAgICAgICAgICAgIGhyZWY9e3VybH1cclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEltYWdlQnV0dG9uXHJcbiAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgIHVybD17cHJvcHMuaW1hZ2VzWzBdLmltZ1BhdGh9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezUyMH1cclxuICAgICAgICAgICAgICBtaW5IZWlnaHQ9ezUwMH1cclxuICAgICAgICAgICAgICBidXR0b21Qcm9wcz17e319XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1N0eWxlZEh0bWxMaW5rPlxyXG4gICAgICAgIDwvZGl2Pn1cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjFyZW1cIiB9fSAvPlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiMXJlbVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgPEJyYW5kQnV0dG9uIGNvbG9yPXtwcm9wcy5jbGFzc0tleX0gc2l6ZT1cIm1lZGl1bVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj5cclxuICAgICAgICAgICAgPFN0eWxlZEh0bWxMaW5rIGhyZWY9e3VybH0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIHRpdGxlPXtuYW1lfT5cclxuICAgICAgICAgICAgICB7bmFtZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICA8L1N0eWxlZEh0bWxMaW5rPlxyXG4gICAgICAgICAgPC9CcmFuZEJ1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xyXG4iLCJpbXBvcnQgeyBJbWFnZVRvU2xpZGVyIH0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZC9TbGlkZXJDYXJkXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNvcm9uYVZpcnVzRGVzY3JpcHRpb24sXHJcbiAgZXhwZW5zZU1hbmFnZXJEZXNjcmlwdGlvbixcclxuICByZXRhaWxtZU5vd0Rlc2NyaXB0aW9uLFxyXG4gIHZhcGVNdXNpY0Rlc2NyaXB0aW9uLFxyXG59IGZyb20gXCIuL2Rlc2NyaXB0aW9uc1wiO1xyXG5pbXBvcnQgeyBQUk9KRUNUX0lNQUdFUyB9IGZyb20gXCIuL2ltYWdlc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0IHtcclxuICBjbGFzc0tleTogXCJzaG9wXCIgfCBcInZhcGVcIiB8IFwiZXhwZW5zZVwiO1xyXG4gIGltYWdlczogSW1hZ2VUb1NsaWRlcltdO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBKU1guRWxlbWVudDtcclxufVxyXG5cclxuY29uc3QgY29yb25hOiBQcm9qZWN0ID0ge1xyXG4gIGNsYXNzS2V5OiBcInNob3BcIixcclxuICBpbWFnZXM6IFBST0pFQ1RfSU1BR0VTLmNvcm9uYVZpcnVzLFxyXG4gIHVybDogXCJodHRwczovL3N0YXR1cy1jb3JvbmF2aXJ1cy5uZXRsaWZ5LmFwcC9nbG9iYWxcIixcclxuICBuYW1lOiBcIkNPVklELTE5IFN0YXR1c1wiLFxyXG4gIHRpdGxlOiBcIkNPVklELTE5IC0gQ29yb25hdmlydXMgU3RhdHVzXCIsXHJcbiAgZGVzY3JpcHRpb246IGNvcm9uYVZpcnVzRGVzY3JpcHRpb24sXHJcbn07XHJcblxyXG5jb25zdCB2YXBlTXVzaWM6IFByb2plY3QgPSB7XHJcbiAgY2xhc3NLZXk6IFwidmFwZVwiLFxyXG4gIGltYWdlczogUFJPSkVDVF9JTUFHRVMudmFwZU11c2ljLFxyXG4gIHVybDogXCJodHRwczovL3ZhcGVtdXNpYy5jbHViXCIsXHJcbiAgbmFtZTogXCJWYXBlIE11c2ljXCIsXHJcbiAgdGl0bGU6IFwiVmFwZSBNdXNpYyAtIExhdGluIE11c2ljIExpc3RlbiAmIERvd25sb2FkXCIsXHJcbiAgZGVzY3JpcHRpb246IHZhcGVNdXNpY0Rlc2NyaXB0aW9uLFxyXG59O1xyXG5cclxuY29uc3QgcmV0YWlsbWVOb3c6IFByb2plY3QgPSB7XHJcbiAgY2xhc3NLZXk6IFwic2hvcFwiLFxyXG4gIGltYWdlczogUFJPSkVDVF9JTUFHRVMucmV0YWlsTWVOb3csXHJcbiAgdXJsOiBcIiNcIixcclxuICBuYW1lOiBcIlJldGFsTWVOb3dcIixcclxuICB0aXRsZTogXCJSZXRhbE1lTm93IC0gU2hvcCBPbmxpbmVcIixcclxuICBkZXNjcmlwdGlvbjogcmV0YWlsbWVOb3dEZXNjcmlwdGlvbixcclxufTtcclxuXHJcbmNvbnN0IGV4cGVuc2VNYW5hZ2VyOiBQcm9qZWN0ID0ge1xyXG4gIGNsYXNzS2V5OiBcImV4cGVuc2VcIixcclxuICBpbWFnZXM6IFBST0pFQ1RfSU1BR0VTLkV4cGVuc2VNYW5nZXIsXHJcbiAgdXJsOiBcImh0dHBzOi8vd2lsZnJlZGV4cGVuc2VtYW5hZ2VyLm5ldGxpZnkuYXBwXCIsXHJcbiAgbmFtZTogXCJFeHBlbnNlcyBNYW5hZ2VyXCIsXHJcbiAgdGl0bGU6IFwiRXhwZW5zZXMgTWFuYWdlciAtIE1hbmFnZSB5b3VyIHBlcnNvbmFsIGZpbmFuY2VzXCIsXHJcbiAgZGVzY3JpcHRpb246IGV4cGVuc2VNYW5hZ2VyRGVzY3JpcHRpb24sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHM6IFByb2plY3RbXSA9IFtcclxuICB2YXBlTXVzaWMsXHJcbiAgZXhwZW5zZU1hbmFnZXIsXHJcbiAgY29yb25hLFxyXG4gIHJldGFpbG1lTm93LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZXRhaWxtZU5vd0Rlc2NyaXB0aW9uOiBKU1guRWxlbWVudCA9IChcclxuICA8PlxyXG4gICAgPHA+UmV0YWxNZU5vdyBhbiBvbmxpbmUgcmV0YWlsIHN0b3JlLjwvcD5cclxuICAgIDxwPlxyXG4gICAgICBUZWNobm9sb2dpZXM6IE5leHRKUywgR3JhcGhRTCwgTm9kZUpTLCBNYXRlcmlhbC1JVS5cclxuICAgIDwvcD5cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBleHBlbnNlTWFuYWdlckRlc2NyaXB0aW9uID0gKFxyXG4gIDw+XHJcbiAgICA8cD5cclxuICAgICAgRXhwZW5zZXMgTWFuYWdlciBpcyBhIFdpbmRvd3MvTWFjL0lPUywgQW5kcm9pZCBhbmQgV2ViIEFwcGxpY2F0aW9uIHRoYXRcclxuICAgICAgaGVscHMgeW91IG1hbmFnZSB5b3VyIHBlcnNvbmFsIGZpbmFuY2VzIGFuZCBrZWVwaW5nIHRyYWNrIG9mIHlvdXIgaW5jb21lXHJcbiAgICAgIGFuZCBleHBlbnNlcy5cclxuICAgIDwvcD5cclxuICAgIDxwPlxyXG4gICAgICBUZWNobm9sb2dpZXM6IElvbmljLCBHcmFwaFFMLCBOb2RlSlMuXHJcbiAgICA8L3A+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgdmFwZU11c2ljRGVzY3JpcHRpb24gPSAoXHJcbiAgPD5cclxuICAgIDxwPlxyXG4gICAgICBQcm9ncmVzc2l2ZSBXZWIgQXBwIGZvciBsaXN0ZW5pbmcgYW5kIGRvd25sb2FkaW5nIHByb21vdGlvbmFsIG11c2ljLlxyXG4gICAgPC9wPlxyXG4gICAgPHA+XHJcbiAgICAgIFRlY2hub2xvZ2llczogR3JhcGhRTCwgTm9kZUpTLCBSZWFjdCwgQXBvbGxvLCBJb25pYy5cclxuICAgIDwvcD5cclxuICAgIHsvKiA8cD5cclxuICAgICAgVGhlIGFkbWluIGNhbiBhZGQvcmVtb3ZlLCB1cGxvYWQgaW1hZ2UgYW5kIGF1ZGlvIGRpcmVjdGx5IGZyb20gdGhlIHNpdGUuXHJcbiAgICA8L3A+XHJcbiAgICA8cD5cclxuICAgICAgU29uZ3MgYXJlIGRpc3RyaWJ1dGVkIGJ5IGdlbnJlIGFuZCBhcnRpc3RzLCBVc2VycyBjYW4gc2VhcmNoLCBhZGQgc29uZ3MgdG9cclxuICAgICAgdGhlIHBsYXlsaXN0IGFuZCB1c2UgdGhlIEF1ZGlvIFBsYXllciB0byBzd2l0Y2ggZnJvbSBzb25nIHRvIHNvbmcuXHJcbiAgICA8L3A+ICovfVxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvcm9uYVZpcnVzRGVzY3JpcHRpb24gPSAoXHJcbiAgPD5cclxuICAgIDxwPlxyXG4gICAgICBVcGRhdGVkIGluZm9ybWF0aW9uIGFib3V0IENPVklELTE5LlxyXG4gICAgPC9wPlxyXG4gICAgPHA+XHJcbiAgICAgIFRlY2hub2xvZ2llczogQXBvbGxvIFNlcnZlci9DbGllbnQsIFR5cGVvcm0sIE1vbmdvREIsIFR5cGVHcmFwaFFMLCBJb25pYyxcclxuICAgICAgUmVhY3QsIE5vZGVKUywgRXhwcmVzcy5cclxuICAgIDwvcD5cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBlYXN5VG9kb3NEZXNjcmlwdGlvbiA9IChcclxuICA8PlxyXG4gICAge1wiIFwifVxyXG4gICAgPHA+XHJcbiAgICAgIHtcIiBcIn1cclxuICAgICAgRWFzeVRvZG9zIGlzIGEgc2ltcGxlIHNvbHV0aW9uIHRvIGtlZXAgdHJhY2sgb2YgeW91ciBkYWlseSB0YXNrcy4gVGhpcyBhcHBcclxuICAgICAgaXMgZ3JlYXQgdG8gbWFuYWdlIHlvdXIgZGFpbHkgam9iIG9yIGp1c3QgdG8gaGF2ZSBhIHBsYWNlIHRvIGtlZXAgcmVsZXZhbnRcclxuICAgICAgaW5mb3JtYXRpb24gdGhhdCByZWdhcmRzIHRvIGEgcGFydGljdWxhciB0YXNrLlxyXG4gICAgPC9wPlxyXG4gICAgPHA+XHJcbiAgICAgIEFsbCB0b2RvcyBoYXZlIGEgXCJOb3Rlc1wiIHNlY3Rpb24gdGhhdCBjYW4gYmUgc3R5bGVkIGFuZCBlZGl0ZWQgdmVyeSBlYXN5LlxyXG4gICAgICBZb3UgY2FuIGZpbHRlciB0aGUgbGlzdCwgbWFyayBhIHRvZG8gYXMgY29tcGxldGVkIG9yIGZpbmQgYSBjb21wbGV0ZWQgdG9kb1xyXG4gICAgICBhbiBoYXZlIGl0IGxpc3RlZCBiYWNrIGFnYWluLlxyXG4gICAgPC9wPlxyXG4gIDwvPlxyXG4pO1xyXG4iLCJpbXBvcnQgeyBJbWFnZVRvU2xpZGVyIH0gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZC9TbGlkZXJDYXJkXCI7XHJcbmltcG9ydCByZXRhaWxtZW5vd0ltZyBmcm9tIFwiLi4vLi4vaW1nL3JldGFpbG1lbm93LmpwZWdcIjtcclxuaW1wb3J0IHZhcGVtdXNpY0ltZyBmcm9tIFwiLi4vLi4vaW1nL3ZhcGVtdXNpYy1leGFtcGxlLmpwZ1wiO1xyXG5cclxuY29uc3QgRXhwZW5zZU1hbmdlckltYWdlczogSW1hZ2VUb1NsaWRlcltdID0gW1xyXG4gIHtcclxuICAgIGxhYmVsOiBcIkxvZ2luIFBhZ2VcIixcclxuICAgIGltZ1BhdGg6XHJcbiAgICAgIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU5NjM4NTQxMi93aWxmcmVkbG9wZXotcHJvZmlsZS1wYWdlL2V4cGVuc2UtbWFuYWdlci1sb2dpbi5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltZ1BhdGg6XHJcbiAgICAgIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU5NjIyNzQ5OS9FWFBFTlNFLU1BTkFHRVItU0hPV0NBU0UuanBnXCIsXHJcbiAgICBsYWJlbDogXCJSZWNlbnQgRXhwZW5zZXNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltZ1BhdGg6XHJcbiAgICAgIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU5NjIyNzQ5NS9FWFBFTlNFLU1BTkFHRVItU0hPV0NBU0VfMi5qcGdcIixcclxuICAgIGxhYmVsOiBcIk1vbnRobHkgU3VtbWFyeVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nUGF0aDpcclxuICAgICAgXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS93bG9wZXovaW1hZ2UvdXBsb2FkL3YxNTk2Mzg1MzkyL3dpbGZyZWRsb3Blei1wcm9maWxlLXBhZ2UvZXhwZW5zZS1tYW5hZ2VyLXJlZ2lzdGVyLmpwZ1wiLFxyXG4gICAgbGFiZWw6IFwiUmVnaXN0ZXIgUGFnZVwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCB2YXBlTXVzaWNJbWFnZXM6IEltYWdlVG9TbGlkZXJbXSA9IFt7XHJcbiAgbGFiZWw6IFwiVmFwZU11c2ljIEhvbWVQYWdlXCIsXHJcbiAgaW1nUGF0aDpcclxuICAgIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU5NjIyMzgxNC9WQVBFTVVTSUNfU0hPV0NBU0VfMS5qcGdcIixcclxufSwge1xyXG4gIGxhYmVsOiBcIlZhcGVNdXNpYyBNZW51XCIsXHJcbiAgaW1nUGF0aDpcclxuICAgIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU5MTkxODg4OS92YXBlbXVzaWMyL3ZhcGVtdXNpYy1tZW51LmpwZ1wiLFxyXG59LCB7XHJcbiAgaW1nUGF0aDpcclxuICAgIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU5NjIyNzUwOC9WQVBFTVVTSUNfREFSS19NT0RFLmpwZ1wiLFxyXG4gIGxhYmVsOiBcIkRhcmsgTW9kZVwiLFxyXG59LCB7XHJcbiAgbGFiZWw6IFwiQ2F0ZWdvcmllc1wiLFxyXG4gIGltZ1BhdGg6IHZhcGVtdXNpY0ltZyxcclxufV07XHJcblxyXG5jb25zdCByZXRhaWxNZU5vd0ltYWdlczogSW1hZ2VUb1NsaWRlcltdID0gW1xyXG4gIHsgbGFiZWw6IFwiUERQXCIsIGltZ1BhdGg6IHJldGFpbG1lbm93SW1nIH0sXHJcbl07XHJcblxyXG5jb25zdCBjb3JvbmFWaXJ1c0ltYWdlczogSW1hZ2VUb1NsaWRlcltdID0gW1xyXG4gIHtcclxuICAgIGxhYmVsOiBcIkhvbWVQYWdlXCIsXHJcbiAgICBpbWdQYXRoOlxyXG4gICAgICBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3dsb3Blei9pbWFnZS91cGxvYWQvdjE1OTYzMzUxNzMvd2lsZnJlZGxvcGV6LXByb2ZpbGUtcGFnZS9jb3JvbmEtaG9tZS1wYWdlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6IFwiQ2FzZXMgUGVyIENvdW50cnlcIixcclxuICAgIGltZ1BhdGg6XHJcbiAgICAgIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU5NjMzNTE0NC93aWxmcmVkbG9wZXotcHJvZmlsZS1wYWdlL0Nvcm9uYS1jb3VudHJpZXMuanBnXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBQUk9KRUNUX0lNQUdFUyA9IHtcclxuICB2YXBlTXVzaWM6IHZhcGVNdXNpY0ltYWdlcyxcclxuICByZXRhaWxNZU5vdzogcmV0YWlsTWVOb3dJbWFnZXMsXHJcbiAgRXhwZW5zZU1hbmdlcjogRXhwZW5zZU1hbmdlckltYWdlcyxcclxuICBjb3JvbmFWaXJ1czogY29yb25hVmlydXNJbWFnZXMsXHJcbn07XHJcbiIsImltcG9ydCBOcG1QYWNrYWdlcyBmcm9tIFwiQGNvbXBvbmVudHMvbnBtLXBhY2thZ2UvTnBtUGFja2FnZXNcIjtcclxuaW1wb3J0IHsgdXNlUGFnZXNDb250ZXh0IH0gZnJvbSBcIkByb290L2NvbnRleHQvUGFnZXNDb250ZXh0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2plY3RzQXJyYXkgZnJvbSBcIi4vUHJvamVjdHNBcnJheVwiO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGxvb3A/OiBib29sZWFuO1xyXG4gIHNob3dTbGlkZXJDb250cm9scz86IGJvb2xlYW47XHJcbiAgbGltaXRUbz86IG51bWJlcjtcclxuICBhZGRNYXJnaW5Ub3A/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBQcm9qZWN0cyA9IChcclxuICB7IGxvb3AgPSBmYWxzZSwgc2hvd1NsaWRlckNvbnRyb2xzID0gdHJ1ZSwgbGltaXRUbywgYWRkTWFyZ2luVG9wID0gdHJ1ZSB9OlxyXG4gICAgUHJvcHMsXHJcbikgPT4ge1xyXG4gIGNvbnN0IHsgY2hhbmdlUGFnZSB9ID0gdXNlUGFnZXNDb250ZXh0KCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoYW5nZVBhZ2UoXCJTaG93Y2FzZVwiKTtcclxuICB9LCBbY2hhbmdlUGFnZV0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIHthZGRNYXJnaW5Ub3AgJiZcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCI1cmVtXCIgfX0gLz59XHJcbiAgICAgIHtsaW1pdFRvXHJcbiAgICAgICAgPyBQcm9qZWN0c0FycmF5LnNsaWNlKDAsIGxpbWl0VG8pLm1hcCgocHJvaikgPT4gKDxQcm9qZWN0XHJcbiAgICAgICAgICBrZXk9e3Byb2oudGl0bGV9XHJcbiAgICAgICAgICBsb29wPXtsb29wfVxyXG4gICAgICAgICAgc2hvd1NsaWRlckNvbnRyb2xzPXtzaG93U2xpZGVyQ29udHJvbHN9XHJcbiAgICAgICAgICBjbGFzc0tleT17cHJvai5jbGFzc0tleX1cclxuICAgICAgICAgIGltYWdlcz17cHJvai5pbWFnZXN9XHJcbiAgICAgICAgICB1cmw9e3Byb2oudXJsfVxyXG4gICAgICAgICAgbmFtZT17cHJvai5uYW1lfVxyXG4gICAgICAgICAgdGl0bGU9e3Byb2oudGl0bGV9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvai5kZXNjcmlwdGlvbn1cclxuICAgICAgICA+XHJcbiAgICAgICAgPC9Qcm9qZWN0PikpXHJcbiAgICAgICAgOiBQcm9qZWN0c0FycmF5Lm1hcCgoXHJcbiAgICAgICAgICBwcm9qLFxyXG4gICAgICAgICkgPT4gKDxQcm9qZWN0XHJcbiAgICAgICAgICBrZXk9e3Byb2oudGl0bGV9XHJcbiAgICAgICAgICBsb29wPXtsb29wfVxyXG4gICAgICAgICAgc2hvd1NsaWRlckNvbnRyb2xzPXtzaG93U2xpZGVyQ29udHJvbHN9XHJcbiAgICAgICAgICBjbGFzc0tleT17cHJvai5jbGFzc0tleX1cclxuICAgICAgICAgIGltYWdlcz17cHJvai5pbWFnZXN9XHJcbiAgICAgICAgICB1cmw9e3Byb2oudXJsfVxyXG4gICAgICAgICAgbmFtZT17cHJvai5uYW1lfVxyXG4gICAgICAgICAgdGl0bGU9e3Byb2oudGl0bGV9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvai5kZXNjcmlwdGlvbn1cclxuICAgICAgICA+XHJcbiAgICAgICAgPC9Qcm9qZWN0PikpfVxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=