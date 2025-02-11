(function() {
var exports = {};
exports.id = 694;
exports.ids = [694,458,801];
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

/***/ 5711:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_products_ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5406);
/* harmony import */ var _styles_ShopPage_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6337);
/* harmony import */ var _styles_ShopPage_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_ShopPage_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_products_category___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6711);







const CategoryPage = ({
  products
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (_styles_ShopPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
      className: (_styles_ShopPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),
      children: ["Results for ", router.query.category]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_styles_ShopPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().cards),
      children: products.map(product => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_ProductCard__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        product: product
      }, product._id))
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryPage);
async function getServerSideProps(ctx) {
  const category = ctx.query.category;
  const products = await (0,_api_products_category___WEBPACK_IMPORTED_MODULE_3__.getProductsByCategory)(category);
  return {
    props: {
      products
    }
  };
}

/***/ }),

/***/ 6139:
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [374,675,717,477,722], function() { return __webpack_exec__(5711); });
module.exports = __webpack_exports__;

})();