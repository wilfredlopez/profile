webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _vapemusic_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vapemusic.jpg */ "./src/components/projects/vapemusic.jpg");
/* harmony import */ var _vapemusic_about_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vapemusic-about.jpg */ "./src/components/projects/vapemusic-about.jpg");


const ExpenseMangerImages = [{
  label: 'Login Page',
  imgPath: 'https://res.cloudinary.com/wlopez/image/upload/v1596385412/wilfredlopez-profile-page/expense-manager-login.jpg'
}, {
  imgPath: 'https://res.cloudinary.com/wlopez/image/upload/v1596227499/EXPENSE-MANAGER-SHOWCASE.jpg',
  label: 'Recent Expenses'
}, {
  imgPath: 'https://res.cloudinary.com/wlopez/image/upload/v1596227495/EXPENSE-MANAGER-SHOWCASE_2.jpg',
  label: 'Monthly Summary'
}, {
  imgPath: 'https://res.cloudinary.com/wlopez/image/upload/v1596385392/wilfredlopez-profile-page/expense-manager-register.jpg',
  label: 'Register Page'
}];


const vapeMusicImages = [{
  label: 'VapeMusic HomePage',
  imgPath: _vapemusic_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  label: 'VapeMusic About',
  imgPath: _vapemusic_about_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  imgPath: 'https://res.cloudinary.com/wlopez/image/upload/v1596227508/VAPEMUSIC_DARK_MODE.jpg',
  label: 'Dark Mode'
}, {
  label: 'Categories',
  imgPath: _img_vapemusic_example_jpg__WEBPACK_IMPORTED_MODULE_1__["default"]
}];
const retailMeNowImages = [{
  label: 'PDP',
  imgPath: _img_retailmenow_jpeg__WEBPACK_IMPORTED_MODULE_0__["default"]
}];
const coronaVirusImages = [{
  label: 'Cases Per Country',
  imgPath: 'https://res.cloudinary.com/wlopez/image/upload/v1596335144/wilfredlopez-profile-page/Corona-countries.jpg'
}, {
  label: 'HomePage',
  imgPath: 'https://res.cloudinary.com/wlopez/image/upload/v1596335173/wilfredlopez-profile-page/corona-home-page.jpg'
}];
const TwoDealImages = [{
  imgPath: 'https://res.cloudinary.com/wlopez/image/upload/v1596505955/wilfredlopez-profile-page/2deal-pagination.jpg',
  label: 'Product Pagination'
}, {
  imgPath: 'https://res.cloudinary.com/wlopez/image/upload/v1596505946/wilfredlopez-profile-page/2-deal-cart.jpg',
  label: 'Products In Cart'
}];
const xyMusic = [{
  imgPath: 'https://res.cloudinary.com/wlopez/image/upload/v1597766596/wilfredlopez-profile-page/XYMUSIC-EXAMPLE-1.jpg',
  label: 'Homepage'
}, {
  imgPath: 'https://res.cloudinary.com/wlopez/image/upload/v1597766648/wilfredlopez-profile-page/XYMUSIC-EXAMPLE-2.jpg',
  label: 'Music Player'
}, {
  imgPath: 'https://res.cloudinary.com/wlopez/image/upload/v1597766563/wilfredlopez-profile-page/XYMUSIC-EXAMPLE-3.jpg',
  label: 'Search Page'
}, {
  imgPath: 'https://res.cloudinary.com/wlopez/image/upload/v1597766563/wilfredlopez-profile-page/XYMUSIC-EXAMPLE-4.jpg',
  label: 'User Library'
}];
const PROJECT_IMAGES = {
  vapeMusic: vapeMusicImages,
  retailMeNow: retailMeNowImages,
  ExpenseManger: ExpenseMangerImages,
  coronaVirus: coronaVirusImages,
  TwoDeal: TwoDealImages,
  xyMusic
};

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

/***/ }),

/***/ "./src/components/projects/vapemusic-about.jpg":
/*!*****************************************************!*\
  !*** ./src/components/projects/vapemusic-about.jpg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/images/vapemusic-about-de5a84ec61259115521f397ceab9ddf0.jpg");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvaW1hZ2VzLnRzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy92YXBlbXVzaWMtYWJvdXQuanBnIl0sIm5hbWVzIjpbIkV4cGVuc2VNYW5nZXJJbWFnZXMiLCJsYWJlbCIsImltZ1BhdGgiLCJ2YXBlTXVzaWNJbWFnZXMiLCJ2bWltYWdlIiwidmFwZW11c2ljYWJvdXQiLCJ2YXBlbXVzaWNJbWciLCJyZXRhaWxNZU5vd0ltYWdlcyIsInJldGFpbG1lbm93SW1nIiwiY29yb25hVmlydXNJbWFnZXMiLCJUd29EZWFsSW1hZ2VzIiwieHlNdXNpYyIsIlBST0pFQ1RfSU1BR0VTIiwidmFwZU11c2ljIiwicmV0YWlsTWVOb3ciLCJFeHBlbnNlTWFuZ2VyIiwiY29yb25hVmlydXMiLCJUd29EZWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLG1CQUFvQyxHQUFHLENBQzNDO0FBQ0VDLE9BQUssRUFBRSxZQURUO0FBRUVDLFNBQU8sRUFDTDtBQUhKLENBRDJDLEVBTTNDO0FBQ0VBLFNBQU8sRUFDTCx5RkFGSjtBQUdFRCxPQUFLLEVBQUU7QUFIVCxDQU4yQyxFQVczQztBQUNFQyxTQUFPLEVBQ0wsMkZBRko7QUFHRUQsT0FBSyxFQUFFO0FBSFQsQ0FYMkMsRUFnQjNDO0FBQ0VDLFNBQU8sRUFDTCxtSEFGSjtBQUdFRCxPQUFLLEVBQUU7QUFIVCxDQWhCMkMsQ0FBN0M7QUF1QkE7QUFDQTtBQUVBLE1BQU1FLGVBQWdDLEdBQUcsQ0FDdkM7QUFDRUYsT0FBSyxFQUFFLG9CQURUO0FBRUVDLFNBQU8sRUFBRUUsc0RBQU9BO0FBRmxCLENBRHVDLEVBS3ZDO0FBQ0VILE9BQUssRUFBRSxpQkFEVDtBQUVFQyxTQUFPLEVBQUVHLDREQUFjQTtBQUZ6QixDQUx1QyxFQVN2QztBQUNFSCxTQUFPLEVBQ0wsb0ZBRko7QUFHRUQsT0FBSyxFQUFFO0FBSFQsQ0FUdUMsRUFjdkM7QUFDRUEsT0FBSyxFQUFFLFlBRFQ7QUFFRUMsU0FBTyxFQUFFSSxrRUFBWUE7QUFGdkIsQ0FkdUMsQ0FBekM7QUFvQkEsTUFBTUMsaUJBQWtDLEdBQUcsQ0FDekM7QUFBRU4sT0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLFNBQU8sRUFBRU0sNkRBQWNBO0FBQXZDLENBRHlDLENBQTNDO0FBSUEsTUFBTUMsaUJBQWtDLEdBQUcsQ0FDekM7QUFDRVIsT0FBSyxFQUFFLG1CQURUO0FBRUVDLFNBQU8sRUFDTDtBQUhKLENBRHlDLEVBTXpDO0FBQ0VELE9BQUssRUFBRSxVQURUO0FBRUVDLFNBQU8sRUFDTDtBQUhKLENBTnlDLENBQTNDO0FBYUEsTUFBTVEsYUFBOEIsR0FBRyxDQUNyQztBQUNFUixTQUFPLEVBQ0wsMkdBRko7QUFHRUQsT0FBSyxFQUFFO0FBSFQsQ0FEcUMsRUFNckM7QUFDRUMsU0FBTyxFQUNMLHNHQUZKO0FBR0VELE9BQUssRUFBRTtBQUhULENBTnFDLENBQXZDO0FBYUEsTUFBTVUsT0FBd0IsR0FBRyxDQUMvQjtBQUNFVCxTQUFPLEVBQ0wsNEdBRko7QUFHRUQsT0FBSyxFQUFFO0FBSFQsQ0FEK0IsRUFNL0I7QUFDRUMsU0FBTyxFQUNMLDRHQUZKO0FBR0VELE9BQUssRUFBRTtBQUhULENBTitCLEVBVy9CO0FBQ0VDLFNBQU8sRUFDTCw0R0FGSjtBQUdFRCxPQUFLLEVBQUU7QUFIVCxDQVgrQixFQWdCL0I7QUFDRUMsU0FBTyxFQUNMLDRHQUZKO0FBR0VELE9BQUssRUFBRTtBQUhULENBaEIrQixDQUFqQztBQXVCTyxNQUFNVyxjQUFjLEdBQUc7QUFDNUJDLFdBQVMsRUFBRVYsZUFEaUI7QUFFNUJXLGFBQVcsRUFBRVAsaUJBRmU7QUFHNUJRLGVBQWEsRUFBRWYsbUJBSGE7QUFJNUJnQixhQUFXLEVBQUVQLGlCQUplO0FBSzVCUSxTQUFPLEVBQUVQLGFBTG1CO0FBTTVCQztBQU40QixDQUF2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdQO0FBQWUsMElBQTJFLEUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmQ2OTE0NjRhNmU1NGQxMTUxMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEltYWdlVG9TbGlkZXIgfSBmcm9tICdAY29tcG9uZW50cy9zaGFyZWQvU2xpZGVyQ2FyZCdcclxuaW1wb3J0IHJldGFpbG1lbm93SW1nIGZyb20gJy4uLy4uL2ltZy9yZXRhaWxtZW5vdy5qcGVnJ1xyXG5pbXBvcnQgdmFwZW11c2ljSW1nIGZyb20gJy4uLy4uL2ltZy92YXBlbXVzaWMtZXhhbXBsZS5qcGcnXHJcblxyXG5jb25zdCBFeHBlbnNlTWFuZ2VySW1hZ2VzOiBJbWFnZVRvU2xpZGVyW10gPSBbXHJcbiAge1xyXG4gICAgbGFiZWw6ICdMb2dpbiBQYWdlJyxcclxuICAgIGltZ1BhdGg6XHJcbiAgICAgICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS93bG9wZXovaW1hZ2UvdXBsb2FkL3YxNTk2Mzg1NDEyL3dpbGZyZWRsb3Blei1wcm9maWxlLXBhZ2UvZXhwZW5zZS1tYW5hZ2VyLWxvZ2luLmpwZycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWdQYXRoOlxyXG4gICAgICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU5NjIyNzQ5OS9FWFBFTlNFLU1BTkFHRVItU0hPV0NBU0UuanBnJyxcclxuICAgIGxhYmVsOiAnUmVjZW50IEV4cGVuc2VzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltZ1BhdGg6XHJcbiAgICAgICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS93bG9wZXovaW1hZ2UvdXBsb2FkL3YxNTk2MjI3NDk1L0VYUEVOU0UtTUFOQUdFUi1TSE9XQ0FTRV8yLmpwZycsXHJcbiAgICBsYWJlbDogJ01vbnRobHkgU3VtbWFyeScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWdQYXRoOlxyXG4gICAgICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU5NjM4NTM5Mi93aWxmcmVkbG9wZXotcHJvZmlsZS1wYWdlL2V4cGVuc2UtbWFuYWdlci1yZWdpc3Rlci5qcGcnLFxyXG4gICAgbGFiZWw6ICdSZWdpc3RlciBQYWdlJyxcclxuICB9LFxyXG5dXHJcblxyXG5pbXBvcnQgdm1pbWFnZSBmcm9tICcuL3ZhcGVtdXNpYy5qcGcnXHJcbmltcG9ydCB2YXBlbXVzaWNhYm91dCBmcm9tICcuL3ZhcGVtdXNpYy1hYm91dC5qcGcnXHJcblxyXG5jb25zdCB2YXBlTXVzaWNJbWFnZXM6IEltYWdlVG9TbGlkZXJbXSA9IFtcclxuICB7XHJcbiAgICBsYWJlbDogJ1ZhcGVNdXNpYyBIb21lUGFnZScsXHJcbiAgICBpbWdQYXRoOiB2bWltYWdlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdWYXBlTXVzaWMgQWJvdXQnLFxyXG4gICAgaW1nUGF0aDogdmFwZW11c2ljYWJvdXQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWdQYXRoOlxyXG4gICAgICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU5NjIyNzUwOC9WQVBFTVVTSUNfREFSS19NT0RFLmpwZycsXHJcbiAgICBsYWJlbDogJ0RhcmsgTW9kZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0NhdGVnb3JpZXMnLFxyXG4gICAgaW1nUGF0aDogdmFwZW11c2ljSW1nLFxyXG4gIH0sXHJcbl1cclxuXHJcbmNvbnN0IHJldGFpbE1lTm93SW1hZ2VzOiBJbWFnZVRvU2xpZGVyW10gPSBbXHJcbiAgeyBsYWJlbDogJ1BEUCcsIGltZ1BhdGg6IHJldGFpbG1lbm93SW1nIH0sXHJcbl1cclxuXHJcbmNvbnN0IGNvcm9uYVZpcnVzSW1hZ2VzOiBJbWFnZVRvU2xpZGVyW10gPSBbXHJcbiAge1xyXG4gICAgbGFiZWw6ICdDYXNlcyBQZXIgQ291bnRyeScsXHJcbiAgICBpbWdQYXRoOlxyXG4gICAgICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU5NjMzNTE0NC93aWxmcmVkbG9wZXotcHJvZmlsZS1wYWdlL0Nvcm9uYS1jb3VudHJpZXMuanBnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnSG9tZVBhZ2UnLFxyXG4gICAgaW1nUGF0aDpcclxuICAgICAgJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3dsb3Blei9pbWFnZS91cGxvYWQvdjE1OTYzMzUxNzMvd2lsZnJlZGxvcGV6LXByb2ZpbGUtcGFnZS9jb3JvbmEtaG9tZS1wYWdlLmpwZycsXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3QgVHdvRGVhbEltYWdlczogSW1hZ2VUb1NsaWRlcltdID0gW1xyXG4gIHtcclxuICAgIGltZ1BhdGg6XHJcbiAgICAgICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS93bG9wZXovaW1hZ2UvdXBsb2FkL3YxNTk2NTA1OTU1L3dpbGZyZWRsb3Blei1wcm9maWxlLXBhZ2UvMmRlYWwtcGFnaW5hdGlvbi5qcGcnLFxyXG4gICAgbGFiZWw6ICdQcm9kdWN0IFBhZ2luYXRpb24nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nUGF0aDpcclxuICAgICAgJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3dsb3Blei9pbWFnZS91cGxvYWQvdjE1OTY1MDU5NDYvd2lsZnJlZGxvcGV6LXByb2ZpbGUtcGFnZS8yLWRlYWwtY2FydC5qcGcnLFxyXG4gICAgbGFiZWw6ICdQcm9kdWN0cyBJbiBDYXJ0JyxcclxuICB9LFxyXG5dXHJcblxyXG5jb25zdCB4eU11c2ljOiBJbWFnZVRvU2xpZGVyW10gPSBbXHJcbiAge1xyXG4gICAgaW1nUGF0aDpcclxuICAgICAgJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3dsb3Blei9pbWFnZS91cGxvYWQvdjE1OTc3NjY1OTYvd2lsZnJlZGxvcGV6LXByb2ZpbGUtcGFnZS9YWU1VU0lDLUVYQU1QTEUtMS5qcGcnLFxyXG4gICAgbGFiZWw6ICdIb21lcGFnZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWdQYXRoOlxyXG4gICAgICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU5Nzc2NjY0OC93aWxmcmVkbG9wZXotcHJvZmlsZS1wYWdlL1hZTVVTSUMtRVhBTVBMRS0yLmpwZycsXHJcbiAgICBsYWJlbDogJ011c2ljIFBsYXllcicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWdQYXRoOlxyXG4gICAgICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU5Nzc2NjU2My93aWxmcmVkbG9wZXotcHJvZmlsZS1wYWdlL1hZTVVTSUMtRVhBTVBMRS0zLmpwZycsXHJcbiAgICBsYWJlbDogJ1NlYXJjaCBQYWdlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltZ1BhdGg6XHJcbiAgICAgICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS93bG9wZXovaW1hZ2UvdXBsb2FkL3YxNTk3NzY2NTYzL3dpbGZyZWRsb3Blei1wcm9maWxlLXBhZ2UvWFlNVVNJQy1FWEFNUExFLTQuanBnJyxcclxuICAgIGxhYmVsOiAnVXNlciBMaWJyYXJ5JyxcclxuICB9LFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgUFJPSkVDVF9JTUFHRVMgPSB7XHJcbiAgdmFwZU11c2ljOiB2YXBlTXVzaWNJbWFnZXMsXHJcbiAgcmV0YWlsTWVOb3c6IHJldGFpbE1lTm93SW1hZ2VzLFxyXG4gIEV4cGVuc2VNYW5nZXI6IEV4cGVuc2VNYW5nZXJJbWFnZXMsXHJcbiAgY29yb25hVmlydXM6IGNvcm9uYVZpcnVzSW1hZ2VzLFxyXG4gIFR3b0RlYWw6IFR3b0RlYWxJbWFnZXMsXHJcbiAgeHlNdXNpYyxcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3ZhcGVtdXNpYy1hYm91dC1kZTVhODRlYzYxMjU5MTE1NTIxZjM5N2NlYWI5ZGRmMC5qcGdcIjsiXSwic291cmNlUm9vdCI6IiJ9