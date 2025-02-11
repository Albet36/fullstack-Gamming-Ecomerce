exports.id = 722;
exports.ids = [722];
exports.modules = {

/***/ 5406:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_cart_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2477);
/* harmony import */ var _styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8763);
/* harmony import */ var _styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_4__);







const ProductCard = ({
  product
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      src: product.image,
      className: "w-[220px] h-[330px]",
      alt: "My Image"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
      href: `/${product.product}`,
      className: `${(_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().title)}`,
      children: product.product
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
      className: (_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().category),
      children: product.category
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
      children: ["$ ", product.price]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex justify-between gap-5",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: () => dispatch((0,_redux_cart_slice__WEBPACK_IMPORTED_MODULE_3__/* .addToCart */ .Xq)(product)),
        className: (_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
        children: "Add to Cart"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: () => dispatch((0,_redux_cart_slice__WEBPACK_IMPORTED_MODULE_3__/* .addToCart */ .Xq)(product)),
        className: (_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
        children: "Buy Now"
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ProductCard);

/***/ }),

/***/ 8763:
/***/ (function(module) {

// Exports
module.exports = {
	"card": "ProductCard_card__2KbQ0",
	"title": "ProductCard_title__2uzUv",
	"category": "ProductCard_category__2rr-m",
	"button": "ProductCard_button__AJUue"
};


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


/***/ })

};
;