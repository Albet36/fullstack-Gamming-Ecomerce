(function() {
var exports = {};
exports.id = 613;
exports.ids = [613];
exports.modules = {

/***/ 3687:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5198);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6842);
/* harmony import */ var _mantine_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import { addProduct } from '../../redux/product.slice';

const addProducts = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  const handleSubmit = e => {// dispatch(addProduct({e, toast}));
  };

  const form = (0,_mantine_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    initialValues: {
      product: String,
      category: String,
      image: String,
      price: Number
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    style: {
      textAlign: 'center'
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
      children: "Th\xEAm s\u1EA3n ph\u1EA9m"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
      sx: {
        maxWidth: 300
      },
      mx: "auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: form.onSubmit(handleSubmit),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.TextInput, _objectSpread({
          withAsterisk: true,
          label: "Products",
          placeholder: "product..."
        }, form.getInputProps('product'))), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.TextInput, _objectSpread({
          withAsterisk: true,
          label: "category",
          placeholder: "please category..."
        }, form.getInputProps('category'))), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.TextInput, _objectSpread({
          withAsterisk: true,
          label: "image",
          placeholder: "please parse link image URL..."
        }, form.getInputProps('image'))), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.TextInput, _objectSpread({
          withAsterisk: true,
          label: "Price",
          placeholder: "please price..."
        }, form.getInputProps('price'))), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {
          position: "right",
          mt: "md",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
            type: "submit",
            className: "bg-black text-white",
            children: "Submit"
          })
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (addProducts);

/***/ }),

/***/ 5198:
/***/ (function(module) {

"use strict";
module.exports = require("@mantine/core");;

/***/ }),

/***/ 6842:
/***/ (function(module) {

"use strict";
module.exports = require("@mantine/form");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 2034:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

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
var __webpack_exports__ = (__webpack_exec__(3687));
module.exports = __webpack_exports__;

})();