(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1180:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./styles/CategoryCard.module.css
var CategoryCard_module = __webpack_require__(4718);
var CategoryCard_module_default = /*#__PURE__*/__webpack_require__.n(CategoryCard_module);
;// CONCATENATED MODULE: ./components/products/CategoryCard.jsx






const CategoryCard = ({
  image,
  name
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (CategoryCard_module_default()).card,
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      className: (CategoryCard_module_default()).image,
      src: image,
      height: 700,
      width: 1300
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/category/${name.toLowerCase()}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (CategoryCard_module_default()).info,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: name
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "SHOP NOW"
        })]
      })
    })]
  });
};

/* harmony default export */ var products_CategoryCard = (CategoryCard);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(8409);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./pages/index.js





const HomePage = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
    className: (Home_module_default()).container,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Home_module_default()).small,
      children: [/*#__PURE__*/jsx_runtime_.jsx(products_CategoryCard, {
        image: "https://imgur.com/uKQqsuA.png",
        name: "Xbox"
      }), /*#__PURE__*/jsx_runtime_.jsx(products_CategoryCard, {
        image: "https://imgur.com/3Y1DLYC.png",
        name: "PS5"
      }), /*#__PURE__*/jsx_runtime_.jsx(products_CategoryCard, {
        image: "https://imgur.com/Dm212HS.png",
        name: "Switch"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Home_module_default()).large,
      children: [/*#__PURE__*/jsx_runtime_.jsx(products_CategoryCard, {
        image: "https://imgur.com/qb6IW1f.png",
        name: "PC"
      }), /*#__PURE__*/jsx_runtime_.jsx(products_CategoryCard, {
        image: "https://imgur.com/HsUfuRU.png",
        name: "Accessories"
      })]
    })]
  });
};

/* harmony default export */ var pages = (HomePage);

/***/ }),

/***/ 4718:
/***/ (function(module) {

// Exports
module.exports = {
	"card": "CategoryCard_card__3ePk6",
	"image": "CategoryCard_image__3wO6F",
	"info": "CategoryCard_info__3bv7Q"
};


/***/ }),

/***/ 8409:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"small": "Home_small__3E-wM",
	"large": "Home_large__2CaPN"
};


/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [374,675,664], function() { return __webpack_exec__(1180); });
module.exports = __webpack_exports__;

})();