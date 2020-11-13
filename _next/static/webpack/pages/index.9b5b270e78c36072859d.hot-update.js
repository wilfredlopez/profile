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
  label: 'VapeMusic Menu',
  imgPath: 'https://res.cloudinary.com/wlopez/image/upload/v1591918889/vapemusic2/vapemusic-menu.jpg'
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

/***/ "./src/components/projects/vapemusic.jpg":
/*!***********************************************!*\
  !*** ./src/components/projects/vapemusic.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/images/vapemusic-8ade9e5e4be003554c5a2bbf5037d4cc.jpg");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvaW1hZ2VzLnRzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy92YXBlbXVzaWMuanBnIl0sIm5hbWVzIjpbIkV4cGVuc2VNYW5nZXJJbWFnZXMiLCJsYWJlbCIsImltZ1BhdGgiLCJ2YXBlTXVzaWNJbWFnZXMiLCJ2bWltYWdlIiwidmFwZW11c2ljSW1nIiwicmV0YWlsTWVOb3dJbWFnZXMiLCJyZXRhaWxtZW5vd0ltZyIsImNvcm9uYVZpcnVzSW1hZ2VzIiwiVHdvRGVhbEltYWdlcyIsInh5TXVzaWMiLCJQUk9KRUNUX0lNQUdFUyIsInZhcGVNdXNpYyIsInJldGFpbE1lTm93IiwiRXhwZW5zZU1hbmdlciIsImNvcm9uYVZpcnVzIiwiVHdvRGVhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTUEsbUJBQW9DLEdBQUcsQ0FDM0M7QUFDRUMsT0FBSyxFQUFFLFlBRFQ7QUFFRUMsU0FBTyxFQUNMO0FBSEosQ0FEMkMsRUFNM0M7QUFDRUEsU0FBTyxFQUNMLHlGQUZKO0FBR0VELE9BQUssRUFBRTtBQUhULENBTjJDLEVBVzNDO0FBQ0VDLFNBQU8sRUFDTCwyRkFGSjtBQUdFRCxPQUFLLEVBQUU7QUFIVCxDQVgyQyxFQWdCM0M7QUFDRUMsU0FBTyxFQUNMLG1IQUZKO0FBR0VELE9BQUssRUFBRTtBQUhULENBaEIyQyxDQUE3QztBQXVCQTtBQUVBLE1BQU1FLGVBQWdDLEdBQUcsQ0FDdkM7QUFDRUYsT0FBSyxFQUFFLG9CQURUO0FBRUVDLFNBQU8sRUFBRUUsc0RBQU9BO0FBRmxCLENBRHVDLEVBS3ZDO0FBQ0VILE9BQUssRUFBRSxnQkFEVDtBQUVFQyxTQUFPLEVBQ0w7QUFISixDQUx1QyxFQVV2QztBQUNFQSxTQUFPLEVBQ0wsb0ZBRko7QUFHRUQsT0FBSyxFQUFFO0FBSFQsQ0FWdUMsRUFldkM7QUFDRUEsT0FBSyxFQUFFLFlBRFQ7QUFFRUMsU0FBTyxFQUFFRyxrRUFBWUE7QUFGdkIsQ0FmdUMsQ0FBekM7QUFxQkEsTUFBTUMsaUJBQWtDLEdBQUcsQ0FDekM7QUFBRUwsT0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLFNBQU8sRUFBRUssNkRBQWNBO0FBQXZDLENBRHlDLENBQTNDO0FBSUEsTUFBTUMsaUJBQWtDLEdBQUcsQ0FDekM7QUFDRVAsT0FBSyxFQUFFLG1CQURUO0FBRUVDLFNBQU8sRUFDTDtBQUhKLENBRHlDLEVBTXpDO0FBQ0VELE9BQUssRUFBRSxVQURUO0FBRUVDLFNBQU8sRUFDTDtBQUhKLENBTnlDLENBQTNDO0FBYUEsTUFBTU8sYUFBOEIsR0FBRyxDQUNyQztBQUNFUCxTQUFPLEVBQ0wsMkdBRko7QUFHRUQsT0FBSyxFQUFFO0FBSFQsQ0FEcUMsRUFNckM7QUFDRUMsU0FBTyxFQUNMLHNHQUZKO0FBR0VELE9BQUssRUFBRTtBQUhULENBTnFDLENBQXZDO0FBYUEsTUFBTVMsT0FBd0IsR0FBRyxDQUMvQjtBQUNFUixTQUFPLEVBQ0wsNEdBRko7QUFHRUQsT0FBSyxFQUFFO0FBSFQsQ0FEK0IsRUFNL0I7QUFDRUMsU0FBTyxFQUNMLDRHQUZKO0FBR0VELE9BQUssRUFBRTtBQUhULENBTitCLEVBVy9CO0FBQ0VDLFNBQU8sRUFDTCw0R0FGSjtBQUdFRCxPQUFLLEVBQUU7QUFIVCxDQVgrQixFQWdCL0I7QUFDRUMsU0FBTyxFQUNMLDRHQUZKO0FBR0VELE9BQUssRUFBRTtBQUhULENBaEIrQixDQUFqQztBQXVCTyxNQUFNVSxjQUFjLEdBQUc7QUFDNUJDLFdBQVMsRUFBRVQsZUFEaUI7QUFFNUJVLGFBQVcsRUFBRVAsaUJBRmU7QUFHNUJRLGVBQWEsRUFBRWQsbUJBSGE7QUFJNUJlLGFBQVcsRUFBRVAsaUJBSmU7QUFLNUJRLFNBQU8sRUFBRVAsYUFMbUI7QUFNNUJDO0FBTjRCLENBQXZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R1A7QUFBZSxvSUFBcUUsRSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45YjViMjcwZTc4YzM2MDcyODU5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1hZ2VUb1NsaWRlciB9IGZyb20gJ0Bjb21wb25lbnRzL3NoYXJlZC9TbGlkZXJDYXJkJ1xyXG5pbXBvcnQgcmV0YWlsbWVub3dJbWcgZnJvbSAnLi4vLi4vaW1nL3JldGFpbG1lbm93LmpwZWcnXHJcbmltcG9ydCB2YXBlbXVzaWNJbWcgZnJvbSAnLi4vLi4vaW1nL3ZhcGVtdXNpYy1leGFtcGxlLmpwZydcclxuXHJcbmNvbnN0IEV4cGVuc2VNYW5nZXJJbWFnZXM6IEltYWdlVG9TbGlkZXJbXSA9IFtcclxuICB7XHJcbiAgICBsYWJlbDogJ0xvZ2luIFBhZ2UnLFxyXG4gICAgaW1nUGF0aDpcclxuICAgICAgJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3dsb3Blei9pbWFnZS91cGxvYWQvdjE1OTYzODU0MTIvd2lsZnJlZGxvcGV6LXByb2ZpbGUtcGFnZS9leHBlbnNlLW1hbmFnZXItbG9naW4uanBnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltZ1BhdGg6XHJcbiAgICAgICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS93bG9wZXovaW1hZ2UvdXBsb2FkL3YxNTk2MjI3NDk5L0VYUEVOU0UtTUFOQUdFUi1TSE9XQ0FTRS5qcGcnLFxyXG4gICAgbGFiZWw6ICdSZWNlbnQgRXhwZW5zZXMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nUGF0aDpcclxuICAgICAgJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3dsb3Blei9pbWFnZS91cGxvYWQvdjE1OTYyMjc0OTUvRVhQRU5TRS1NQU5BR0VSLVNIT1dDQVNFXzIuanBnJyxcclxuICAgIGxhYmVsOiAnTW9udGhseSBTdW1tYXJ5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltZ1BhdGg6XHJcbiAgICAgICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS93bG9wZXovaW1hZ2UvdXBsb2FkL3YxNTk2Mzg1MzkyL3dpbGZyZWRsb3Blei1wcm9maWxlLXBhZ2UvZXhwZW5zZS1tYW5hZ2VyLXJlZ2lzdGVyLmpwZycsXHJcbiAgICBsYWJlbDogJ1JlZ2lzdGVyIFBhZ2UnLFxyXG4gIH0sXHJcbl1cclxuXHJcbmltcG9ydCB2bWltYWdlIGZyb20gJy4vdmFwZW11c2ljLmpwZydcclxuXHJcbmNvbnN0IHZhcGVNdXNpY0ltYWdlczogSW1hZ2VUb1NsaWRlcltdID0gW1xyXG4gIHtcclxuICAgIGxhYmVsOiAnVmFwZU11c2ljIEhvbWVQYWdlJyxcclxuICAgIGltZ1BhdGg6IHZtaW1hZ2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ1ZhcGVNdXNpYyBNZW51JyxcclxuICAgIGltZ1BhdGg6XHJcbiAgICAgICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS93bG9wZXovaW1hZ2UvdXBsb2FkL3YxNTkxOTE4ODg5L3ZhcGVtdXNpYzIvdmFwZW11c2ljLW1lbnUuanBnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltZ1BhdGg6XHJcbiAgICAgICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS93bG9wZXovaW1hZ2UvdXBsb2FkL3YxNTk2MjI3NTA4L1ZBUEVNVVNJQ19EQVJLX01PREUuanBnJyxcclxuICAgIGxhYmVsOiAnRGFyayBNb2RlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnQ2F0ZWdvcmllcycsXHJcbiAgICBpbWdQYXRoOiB2YXBlbXVzaWNJbWcsXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3QgcmV0YWlsTWVOb3dJbWFnZXM6IEltYWdlVG9TbGlkZXJbXSA9IFtcclxuICB7IGxhYmVsOiAnUERQJywgaW1nUGF0aDogcmV0YWlsbWVub3dJbWcgfSxcclxuXVxyXG5cclxuY29uc3QgY29yb25hVmlydXNJbWFnZXM6IEltYWdlVG9TbGlkZXJbXSA9IFtcclxuICB7XHJcbiAgICBsYWJlbDogJ0Nhc2VzIFBlciBDb3VudHJ5JyxcclxuICAgIGltZ1BhdGg6XHJcbiAgICAgICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS93bG9wZXovaW1hZ2UvdXBsb2FkL3YxNTk2MzM1MTQ0L3dpbGZyZWRsb3Blei1wcm9maWxlLXBhZ2UvQ29yb25hLWNvdW50cmllcy5qcGcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdIb21lUGFnZScsXHJcbiAgICBpbWdQYXRoOlxyXG4gICAgICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU5NjMzNTE3My93aWxmcmVkbG9wZXotcHJvZmlsZS1wYWdlL2Nvcm9uYS1ob21lLXBhZ2UuanBnJyxcclxuICB9LFxyXG5dXHJcblxyXG5jb25zdCBUd29EZWFsSW1hZ2VzOiBJbWFnZVRvU2xpZGVyW10gPSBbXHJcbiAge1xyXG4gICAgaW1nUGF0aDpcclxuICAgICAgJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3dsb3Blei9pbWFnZS91cGxvYWQvdjE1OTY1MDU5NTUvd2lsZnJlZGxvcGV6LXByb2ZpbGUtcGFnZS8yZGVhbC1wYWdpbmF0aW9uLmpwZycsXHJcbiAgICBsYWJlbDogJ1Byb2R1Y3QgUGFnaW5hdGlvbicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWdQYXRoOlxyXG4gICAgICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU5NjUwNTk0Ni93aWxmcmVkbG9wZXotcHJvZmlsZS1wYWdlLzItZGVhbC1jYXJ0LmpwZycsXHJcbiAgICBsYWJlbDogJ1Byb2R1Y3RzIEluIENhcnQnLFxyXG4gIH0sXHJcbl1cclxuXHJcbmNvbnN0IHh5TXVzaWM6IEltYWdlVG9TbGlkZXJbXSA9IFtcclxuICB7XHJcbiAgICBpbWdQYXRoOlxyXG4gICAgICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU5Nzc2NjU5Ni93aWxmcmVkbG9wZXotcHJvZmlsZS1wYWdlL1hZTVVTSUMtRVhBTVBMRS0xLmpwZycsXHJcbiAgICBsYWJlbDogJ0hvbWVwYWdlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltZ1BhdGg6XHJcbiAgICAgICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS93bG9wZXovaW1hZ2UvdXBsb2FkL3YxNTk3NzY2NjQ4L3dpbGZyZWRsb3Blei1wcm9maWxlLXBhZ2UvWFlNVVNJQy1FWEFNUExFLTIuanBnJyxcclxuICAgIGxhYmVsOiAnTXVzaWMgUGxheWVyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltZ1BhdGg6XHJcbiAgICAgICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS93bG9wZXovaW1hZ2UvdXBsb2FkL3YxNTk3NzY2NTYzL3dpbGZyZWRsb3Blei1wcm9maWxlLXBhZ2UvWFlNVVNJQy1FWEFNUExFLTMuanBnJyxcclxuICAgIGxhYmVsOiAnU2VhcmNoIFBhZ2UnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nUGF0aDpcclxuICAgICAgJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3dsb3Blei9pbWFnZS91cGxvYWQvdjE1OTc3NjY1NjMvd2lsZnJlZGxvcGV6LXByb2ZpbGUtcGFnZS9YWU1VU0lDLUVYQU1QTEUtNC5qcGcnLFxyXG4gICAgbGFiZWw6ICdVc2VyIExpYnJhcnknLFxyXG4gIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBQUk9KRUNUX0lNQUdFUyA9IHtcclxuICB2YXBlTXVzaWM6IHZhcGVNdXNpY0ltYWdlcyxcclxuICByZXRhaWxNZU5vdzogcmV0YWlsTWVOb3dJbWFnZXMsXHJcbiAgRXhwZW5zZU1hbmdlcjogRXhwZW5zZU1hbmdlckltYWdlcyxcclxuICBjb3JvbmFWaXJ1czogY29yb25hVmlydXNJbWFnZXMsXHJcbiAgVHdvRGVhbDogVHdvRGVhbEltYWdlcyxcclxuICB4eU11c2ljLFxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvdmFwZW11c2ljLThhZGU5ZTVlNGJlMDAzNTU0YzVhMmJiZjUwMzdkNGNjLmpwZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=