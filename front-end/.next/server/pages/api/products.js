(function() {
var exports = {};
exports.id = 221;
exports.ids = [221,801];
exports.modules = {

/***/ 9970:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryListProduct": function() { return /* binding */ queryListProduct; },
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4717);

const queryListProduct = async () => {};
function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({
      message: `Method ${req.method} is not allowed`
    });
  } else {
    const products = listProducts();
    res.status(200).json(products);
  }
}

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [717], function() { return __webpack_exec__(9970); });
module.exports = __webpack_exports__;

})();