(function() {
var exports = {};
exports.id = 345;
exports.ids = [345,801];
exports.modules = {

/***/ 5954:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5198);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_ShopPage_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6337);
/* harmony import */ var _styles_ShopPage_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_ShopPage_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_products_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4717);





 // import { listProduct } from './api/products/api';

const ShopPage = () => {
  const {
    0: products,
    1: setProducts
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");

  const getAllProduct = async () => {
    let response = await (0,_api_products_api__WEBPACK_IMPORTED_MODULE_3__.listProductApi)();
    setProducts(response.data);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    getAllProduct();
  }, []);

  const handleChange = e => {
    const data = e.target.value;
    console.log(data); // setProducts(e.target.value);

    if (data.length != "") {
      const valueSearch = products.filter(i => i.product.match(data));
      return setProducts(valueSearch);
    } else {
      return getAllProduct();
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: `${(_styles_ShopPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().container)}, px-48`,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
      className: "text-center text-2xl",
      children: "Danh s\xE1ch s\u1EA3n ph\u1EA9m"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_styles_ShopPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: "/product/add",
            children: "Th\xEAm s\u1EA3n ph\u1EA9m"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
          onChange: handleChange,
          type: "text"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Table, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
            children: "T\xEAn s\u1EA3n ph\u1EA9m"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
            children: "Th\u1EC3 lo\u1EA1i"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
            children: "URL \u1EA3nh"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
            children: "Gi\xE1 ti\u1EC1n"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
            children: "Action"
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
        children: products && products.map(product => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            children: product.product
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            children: product.category
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            children: product.image
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            children: product.price
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              href: `/product/${product.product}`,
              className: "bg-black text-white p-2 rounded-lg",
              style: {
                marginRight: 5
              },
              children: "S\u1EEDa"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
              onClick: () => (0,_api_products_api__WEBPACK_IMPORTED_MODULE_3__.deleteProduct)(product._id),
              className: "bg-black text-white",
              style: {
                marginRight: 5
              },
              children: "Xo\xE1"
            })]
          })]
        }, product.product))
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ShopPage);

/***/ }),

/***/ 6337:
/***/ (function(module) {

// Exports
module.exports = {
	"title": "ShopPage_title__2DKE5",
	"container": "ShopPage_container__3eHCH",
	"cards": "ShopPage_cards__1pLy7",
	"form": "ShopPage_form__-plrt"
};


/***/ }),

/***/ 5198:
/***/ (function(module) {

"use strict";
module.exports = require("@mantine/core");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [717], function() { return __webpack_exec__(5954); });
module.exports = __webpack_exports__;

})();