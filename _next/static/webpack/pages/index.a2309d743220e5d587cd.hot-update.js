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
/* harmony import */ var _vapemusic_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vapemusic.jpg */ "./src/components/projects/vapemusic.jpg");
/* harmony import */ var _vapemusic_about_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vapemusic-about.jpg */ "./src/components/projects/vapemusic-about.jpg");
/* harmony import */ var _vm_dark_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vm-dark.png */ "./src/components/projects/vm-dark.png");

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
  imgPath: _vapemusic_jpg__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  label: 'VapeMusic About',
  imgPath: _vapemusic_about_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  imgPath: _vm_dark_png__WEBPACK_IMPORTED_MODULE_3__["default"],
  label: 'Dark Mode'
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

/***/ "./src/components/projects/vm-dark.png":
/*!*********************************************!*\
  !*** ./src/components/projects/vm-dark.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/images/vm-dark-534aeb11d5b4e6596f736afae63819d1.png");

/***/ }),

/***/ "./src/img/vapemusic-example.jpg":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvaW1hZ2VzLnRzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy92bS1kYXJrLnBuZyJdLCJuYW1lcyI6WyJFeHBlbnNlTWFuZ2VySW1hZ2VzIiwibGFiZWwiLCJpbWdQYXRoIiwidmFwZU11c2ljSW1hZ2VzIiwidm1pbWFnZSIsInZhcGVtdXNpY2Fib3V0Iiwidm1kYXJrIiwicmV0YWlsTWVOb3dJbWFnZXMiLCJyZXRhaWxtZW5vd0ltZyIsImNvcm9uYVZpcnVzSW1hZ2VzIiwiVHdvRGVhbEltYWdlcyIsInh5TXVzaWMiLCJQUk9KRUNUX0lNQUdFUyIsInZhcGVNdXNpYyIsInJldGFpbE1lTm93IiwiRXhwZW5zZU1hbmdlciIsImNvcm9uYVZpcnVzIiwiVHdvRGVhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0EsTUFBTUEsbUJBQW9DLEdBQUcsQ0FDM0M7QUFDRUMsT0FBSyxFQUFFLFlBRFQ7QUFFRUMsU0FBTyxFQUNMO0FBSEosQ0FEMkMsRUFNM0M7QUFDRUEsU0FBTyxFQUNMLHlGQUZKO0FBR0VELE9BQUssRUFBRTtBQUhULENBTjJDLEVBVzNDO0FBQ0VDLFNBQU8sRUFDTCwyRkFGSjtBQUdFRCxPQUFLLEVBQUU7QUFIVCxDQVgyQyxFQWdCM0M7QUFDRUMsU0FBTyxFQUNMLG1IQUZKO0FBR0VELE9BQUssRUFBRTtBQUhULENBaEIyQyxDQUE3QztBQXVCQTtBQUNBO0FBQ0E7QUFFQSxNQUFNRSxlQUFnQyxHQUFHLENBQ3ZDO0FBQ0VGLE9BQUssRUFBRSxvQkFEVDtBQUVFQyxTQUFPLEVBQUVFLHNEQUFPQTtBQUZsQixDQUR1QyxFQUt2QztBQUNFSCxPQUFLLEVBQUUsaUJBRFQ7QUFFRUMsU0FBTyxFQUFFRyw0REFBY0E7QUFGekIsQ0FMdUMsRUFTdkM7QUFDRUgsU0FBTyxFQUFFSSxvREFEWDtBQUVFTCxPQUFLLEVBQUU7QUFGVCxDQVR1QyxDQUF6QztBQWVBLE1BQU1NLGlCQUFrQyxHQUFHLENBQ3pDO0FBQUVOLE9BQUssRUFBRSxLQUFUO0FBQWdCQyxTQUFPLEVBQUVNLDZEQUFjQTtBQUF2QyxDQUR5QyxDQUEzQztBQUlBLE1BQU1DLGlCQUFrQyxHQUFHLENBQ3pDO0FBQ0VSLE9BQUssRUFBRSxtQkFEVDtBQUVFQyxTQUFPLEVBQ0w7QUFISixDQUR5QyxFQU16QztBQUNFRCxPQUFLLEVBQUUsVUFEVDtBQUVFQyxTQUFPLEVBQ0w7QUFISixDQU55QyxDQUEzQztBQWFBLE1BQU1RLGFBQThCLEdBQUcsQ0FDckM7QUFDRVIsU0FBTyxFQUNMLDJHQUZKO0FBR0VELE9BQUssRUFBRTtBQUhULENBRHFDLEVBTXJDO0FBQ0VDLFNBQU8sRUFDTCxzR0FGSjtBQUdFRCxPQUFLLEVBQUU7QUFIVCxDQU5xQyxDQUF2QztBQWFBLE1BQU1VLE9BQXdCLEdBQUcsQ0FDL0I7QUFDRVQsU0FBTyxFQUNMLDRHQUZKO0FBR0VELE9BQUssRUFBRTtBQUhULENBRCtCLEVBTS9CO0FBQ0VDLFNBQU8sRUFDTCw0R0FGSjtBQUdFRCxPQUFLLEVBQUU7QUFIVCxDQU4rQixFQVcvQjtBQUNFQyxTQUFPLEVBQ0wsNEdBRko7QUFHRUQsT0FBSyxFQUFFO0FBSFQsQ0FYK0IsRUFnQi9CO0FBQ0VDLFNBQU8sRUFDTCw0R0FGSjtBQUdFRCxPQUFLLEVBQUU7QUFIVCxDQWhCK0IsQ0FBakM7QUF1Qk8sTUFBTVcsY0FBYyxHQUFHO0FBQzVCQyxXQUFTLEVBQUVWLGVBRGlCO0FBRTVCVyxhQUFXLEVBQUVQLGlCQUZlO0FBRzVCUSxlQUFhLEVBQUVmLG1CQUhhO0FBSTVCZ0IsYUFBVyxFQUFFUCxpQkFKZTtBQUs1QlEsU0FBTyxFQUFFUCxhQUxtQjtBQU01QkM7QUFONEIsQ0FBdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HUDtBQUFlLGtJQUFtRSxFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEyMzA5ZDc0MzIyMGU1ZDU4N2NkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbWFnZVRvU2xpZGVyIH0gZnJvbSAnQGNvbXBvbmVudHMvc2hhcmVkL1NsaWRlckNhcmQnXHJcbmltcG9ydCByZXRhaWxtZW5vd0ltZyBmcm9tICcuLi8uLi9pbWcvcmV0YWlsbWVub3cuanBlZydcclxuaW1wb3J0IHZhcGVtdXNpY0ltZyBmcm9tICcuLi8uLi9pbWcvdmFwZW11c2ljLWV4YW1wbGUuanBnJ1xyXG5cclxuY29uc3QgRXhwZW5zZU1hbmdlckltYWdlczogSW1hZ2VUb1NsaWRlcltdID0gW1xyXG4gIHtcclxuICAgIGxhYmVsOiAnTG9naW4gUGFnZScsXHJcbiAgICBpbWdQYXRoOlxyXG4gICAgICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU5NjM4NTQxMi93aWxmcmVkbG9wZXotcHJvZmlsZS1wYWdlL2V4cGVuc2UtbWFuYWdlci1sb2dpbi5qcGcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nUGF0aDpcclxuICAgICAgJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3dsb3Blei9pbWFnZS91cGxvYWQvdjE1OTYyMjc0OTkvRVhQRU5TRS1NQU5BR0VSLVNIT1dDQVNFLmpwZycsXHJcbiAgICBsYWJlbDogJ1JlY2VudCBFeHBlbnNlcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWdQYXRoOlxyXG4gICAgICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU5NjIyNzQ5NS9FWFBFTlNFLU1BTkFHRVItU0hPV0NBU0VfMi5qcGcnLFxyXG4gICAgbGFiZWw6ICdNb250aGx5IFN1bW1hcnknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nUGF0aDpcclxuICAgICAgJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3dsb3Blei9pbWFnZS91cGxvYWQvdjE1OTYzODUzOTIvd2lsZnJlZGxvcGV6LXByb2ZpbGUtcGFnZS9leHBlbnNlLW1hbmFnZXItcmVnaXN0ZXIuanBnJyxcclxuICAgIGxhYmVsOiAnUmVnaXN0ZXIgUGFnZScsXHJcbiAgfSxcclxuXVxyXG5cclxuaW1wb3J0IHZtaW1hZ2UgZnJvbSAnLi92YXBlbXVzaWMuanBnJ1xyXG5pbXBvcnQgdmFwZW11c2ljYWJvdXQgZnJvbSAnLi92YXBlbXVzaWMtYWJvdXQuanBnJ1xyXG5pbXBvcnQgdm1kYXJrIGZyb20gJy4vdm0tZGFyay5wbmcnXHJcblxyXG5jb25zdCB2YXBlTXVzaWNJbWFnZXM6IEltYWdlVG9TbGlkZXJbXSA9IFtcclxuICB7XHJcbiAgICBsYWJlbDogJ1ZhcGVNdXNpYyBIb21lUGFnZScsXHJcbiAgICBpbWdQYXRoOiB2bWltYWdlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdWYXBlTXVzaWMgQWJvdXQnLFxyXG4gICAgaW1nUGF0aDogdmFwZW11c2ljYWJvdXQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWdQYXRoOiB2bWRhcmssXHJcbiAgICBsYWJlbDogJ0RhcmsgTW9kZScsXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3QgcmV0YWlsTWVOb3dJbWFnZXM6IEltYWdlVG9TbGlkZXJbXSA9IFtcclxuICB7IGxhYmVsOiAnUERQJywgaW1nUGF0aDogcmV0YWlsbWVub3dJbWcgfSxcclxuXVxyXG5cclxuY29uc3QgY29yb25hVmlydXNJbWFnZXM6IEltYWdlVG9TbGlkZXJbXSA9IFtcclxuICB7XHJcbiAgICBsYWJlbDogJ0Nhc2VzIFBlciBDb3VudHJ5JyxcclxuICAgIGltZ1BhdGg6XHJcbiAgICAgICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS93bG9wZXovaW1hZ2UvdXBsb2FkL3YxNTk2MzM1MTQ0L3dpbGZyZWRsb3Blei1wcm9maWxlLXBhZ2UvQ29yb25hLWNvdW50cmllcy5qcGcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdIb21lUGFnZScsXHJcbiAgICBpbWdQYXRoOlxyXG4gICAgICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU5NjMzNTE3My93aWxmcmVkbG9wZXotcHJvZmlsZS1wYWdlL2Nvcm9uYS1ob21lLXBhZ2UuanBnJyxcclxuICB9LFxyXG5dXHJcblxyXG5jb25zdCBUd29EZWFsSW1hZ2VzOiBJbWFnZVRvU2xpZGVyW10gPSBbXHJcbiAge1xyXG4gICAgaW1nUGF0aDpcclxuICAgICAgJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3dsb3Blei9pbWFnZS91cGxvYWQvdjE1OTY1MDU5NTUvd2lsZnJlZGxvcGV6LXByb2ZpbGUtcGFnZS8yZGVhbC1wYWdpbmF0aW9uLmpwZycsXHJcbiAgICBsYWJlbDogJ1Byb2R1Y3QgUGFnaW5hdGlvbicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWdQYXRoOlxyXG4gICAgICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU5NjUwNTk0Ni93aWxmcmVkbG9wZXotcHJvZmlsZS1wYWdlLzItZGVhbC1jYXJ0LmpwZycsXHJcbiAgICBsYWJlbDogJ1Byb2R1Y3RzIEluIENhcnQnLFxyXG4gIH0sXHJcbl1cclxuXHJcbmNvbnN0IHh5TXVzaWM6IEltYWdlVG9TbGlkZXJbXSA9IFtcclxuICB7XHJcbiAgICBpbWdQYXRoOlxyXG4gICAgICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2xvcGV6L2ltYWdlL3VwbG9hZC92MTU5Nzc2NjU5Ni93aWxmcmVkbG9wZXotcHJvZmlsZS1wYWdlL1hZTVVTSUMtRVhBTVBMRS0xLmpwZycsXHJcbiAgICBsYWJlbDogJ0hvbWVwYWdlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltZ1BhdGg6XHJcbiAgICAgICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS93bG9wZXovaW1hZ2UvdXBsb2FkL3YxNTk3NzY2NjQ4L3dpbGZyZWRsb3Blei1wcm9maWxlLXBhZ2UvWFlNVVNJQy1FWEFNUExFLTIuanBnJyxcclxuICAgIGxhYmVsOiAnTXVzaWMgUGxheWVyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltZ1BhdGg6XHJcbiAgICAgICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS93bG9wZXovaW1hZ2UvdXBsb2FkL3YxNTk3NzY2NTYzL3dpbGZyZWRsb3Blei1wcm9maWxlLXBhZ2UvWFlNVVNJQy1FWEFNUExFLTMuanBnJyxcclxuICAgIGxhYmVsOiAnU2VhcmNoIFBhZ2UnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nUGF0aDpcclxuICAgICAgJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3dsb3Blei9pbWFnZS91cGxvYWQvdjE1OTc3NjY1NjMvd2lsZnJlZGxvcGV6LXByb2ZpbGUtcGFnZS9YWU1VU0lDLUVYQU1QTEUtNC5qcGcnLFxyXG4gICAgbGFiZWw6ICdVc2VyIExpYnJhcnknLFxyXG4gIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBQUk9KRUNUX0lNQUdFUyA9IHtcclxuICB2YXBlTXVzaWM6IHZhcGVNdXNpY0ltYWdlcyxcclxuICByZXRhaWxNZU5vdzogcmV0YWlsTWVOb3dJbWFnZXMsXHJcbiAgRXhwZW5zZU1hbmdlcjogRXhwZW5zZU1hbmdlckltYWdlcyxcclxuICBjb3JvbmFWaXJ1czogY29yb25hVmlydXNJbWFnZXMsXHJcbiAgVHdvRGVhbDogVHdvRGVhbEltYWdlcyxcclxuICB4eU11c2ljLFxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvdm0tZGFyay01MzRhZWIxMWQ1YjRlNjU5NmY3MzZhZmFlNjM4MTlkMS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9