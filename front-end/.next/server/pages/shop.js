(function() {
var exports = {};
exports.id = 800;
exports.ids = [800,801];
exports.modules = {

/***/ 2151:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ shop; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./components/products/ProductCard.jsx
var ProductCard = __webpack_require__(5406);
// EXTERNAL MODULE: ./redux/product.slice.js
var product_slice = __webpack_require__(1772);
// EXTERNAL MODULE: ./styles/ShopPage.module.css
var ShopPage_module = __webpack_require__(6337);
var ShopPage_module_default = /*#__PURE__*/__webpack_require__.n(ShopPage_module);
;// CONCATENATED MODULE: external "jsonwebtoken"
var external_jsonwebtoken_namespaceObject = require("jsonwebtoken");;
;// CONCATENATED MODULE: ./pages/shop.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const ShopPage = () => {
  const dispatch = (0,external_react_redux_.useDispatch)(); // const [products,setProducts] = useState();

  const {
    product
  } = (0,external_react_redux_.useSelector)(state => _objectSpread({}, state.product));

  const getAllProduct = async () => {
    dispatch((0,product_slice/* listProduct */.if)());
  }; // setProducts(product)


  (0,external_react_.useEffect)(() => {
    getAllProduct();
  }, []);

  const handleChange = e => {
    const data = e.target.value;
    console.log(data); // setProducts(e.target.value);
    // if (data.length != "") {
    //   const valueSearch = product.filter((i) => i.product.match(data));
    //   return setProducts(valueSearch);
    // } else {
    //   return getAllProduct();
    // }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (ShopPage_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: (ShopPage_module_default()).title,
      children: "All Results"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (ShopPage_module_default()).form,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "/product/add",
            className: "",
            children: "Th\xEAm s\u1EA3n ph\u1EA9m"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          onChange: handleChange,
          type: "text"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (ShopPage_module_default()).cards,
      children: product && product.map(produc => /*#__PURE__*/jsx_runtime_.jsx(ProductCard/* default */.Z, {
        product: produc
      }, produc._id))
    })]
  });
};

/* harmony default export */ var shop = (ShopPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [374,675,717,477,772,722], function() { return __webpack_exec__(2151); });
module.exports = __webpack_exports__;

})();