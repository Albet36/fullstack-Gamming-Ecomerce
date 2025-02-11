(function() {
var exports = {};
exports.id = 500;
exports.ids = [500,801];
exports.modules = {

/***/ 7153:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signIn": function() { return /* binding */ signIn; },
/* harmony export */   "signUp": function() { return /* binding */ signUp; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const HOST = 'http://localhost:2001';
const signIn = async formData => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${HOST}/auth`, formData);
};
const signUp = async formData => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${HOST}/auth/register`, formData);
};

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(7153));
module.exports = __webpack_exports__;

})();