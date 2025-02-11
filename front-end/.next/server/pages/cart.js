(function() {
var exports = {};
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 289:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_cart_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2477);
/* harmony import */ var _styles_CartPage_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2658);
/* harmony import */ var _styles_CartPage_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_CartPage_module_css__WEBPACK_IMPORTED_MODULE_4__);








const CartPage = () => {
  const cart = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.cart);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  console.log(cart);

  const getTotalPrice = () => {
    return cart.reduce((accumulator, item) => Math.round(accumulator + item.quantity * item.price), 0);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: (_styles_CartPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: cart.length === 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
      children: "Your Cart is Empty!"
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_CartPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          children: "Image"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          children: "Product"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          children: "Price"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          children: "Quantity"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          children: "Actions"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          children: "Total Price"
        })]
      }), cart.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_CartPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().body),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_styles_CartPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
            src: item.image,
            height: "90",
            width: "65"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          children: item.product
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
          children: ["$ ", item.price]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          children: item.quantity
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: (_styles_CartPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttons),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: () => dispatch((0,_redux_cart_slice__WEBPACK_IMPORTED_MODULE_3__/* .incrementQuantity */ .g1)(item._id)),
            children: "+"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: () => dispatch((0,_redux_cart_slice__WEBPACK_IMPORTED_MODULE_3__/* .decrementQuantity */ .X1)(item._id)),
            children: "-"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: () => dispatch((0,_redux_cart_slice__WEBPACK_IMPORTED_MODULE_3__/* .removeFromCart */ .h2)(item._id)),
            children: "x"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
          children: ["$ ", Math.round(item.quantity * item.price)]
        })]
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
        children: ["Grand Total: $ ", getTotalPrice()]
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CartPage);

/***/ }),

/***/ 2658:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "CartPage_container__13dhG",
	"header": "CartPage_header__nGAuq",
	"body": "CartPage_body__2kF27",
	"image": "CartPage_image__1VZY8",
	"buttons": "CartPage_buttons__3qoAF"
};


/***/ }),

/***/ 6139:
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [374,675,477], function() { return __webpack_exec__(289); });
module.exports = __webpack_exports__;

})();