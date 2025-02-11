exports.id = 717;
exports.ids = [717];
exports.modules = {

/***/ 4717:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listProductApi": function() { return /* binding */ listProductApi; },
/* harmony export */   "addProductApi": function() { return /* binding */ addProductApi; },
/* harmony export */   "getProductApi": function() { return /* binding */ getProductApi; },
/* harmony export */   "getProductByNameApi": function() { return /* binding */ getProductByNameApi; },
/* harmony export */   "updateProduct": function() { return /* binding */ updateProduct; },
/* harmony export */   "deleteProduct": function() { return /* binding */ deleteProduct; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const URL = "http://localhost:2001";
const listProductApi = async () => {
  try {
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${URL}/product`);
  } catch (error) {
    console.log("call api loi roi", error);
  }
};
const addProductApi = async () => {
  try {
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${URL}/product`);
  } catch (error) {
    console.log("call api loi roi", error);
  }
};
const getProductApi = async id => {
  try {
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${URL}/product/${id}`);
  } catch (error) {
    console.log("call api loi roi", error);
  }
};
const getProductByNameApi = async name => {
  try {
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${URL}/product/${name}`);
  } catch (error) {
    console.log("call api loi roi", error);
  }
};
const updateProduct = async (id, data) => {
  try {
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${URL}/product/${id}`, data);
  } catch (error) {
    console.log("call api loi roi", error);
  }
};
const deleteProduct = async id => {
  try {
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().delete(`${URL}/product/${id}`);
  } catch (error) {
    console.log("call api loi roi", error);
  }
};

/***/ })

};
;