(function() {
var exports = {};
exports.id = 458;
exports.ids = [458,801];
exports.modules = {

/***/ 6711:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProductsByCategory": function() { return /* binding */ getProductsByCategory; },
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4717);

const getProductsByCategory = async category => {
  const values = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.listProductApi)();
  const valueObj = values.data.map(product => {
    return product;
  });
  const products = valueObj.filter(product => product.category === category);
  console.log(valueObj);
  return products;
};
function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({
      message: `Method ${req.method} is not allowed`
    });
  } else {
    const products = getProductsByCategory(req.query.category);
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [717], function() { return __webpack_exec__(6711); });
module.exports = __webpack_exports__;

})();