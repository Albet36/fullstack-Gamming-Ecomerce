exports.id = 772;
exports.ids = [772];
exports.modules = {

/***/ 1772:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "if": function() { return /* binding */ listProduct; }
/* harmony export */ });
/* unused harmony exports getProduct, getProductByName */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_api_products_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4717);


const listProduct = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("/listProduct", async () => {
  try {
    const response = await (0,_pages_api_products_api__WEBPACK_IMPORTED_MODULE_1__.listProductApi)();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
const getProduct = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("/getProduct", async ({
  id
}) => {
  try {
    const response = await (0,_pages_api_products_api__WEBPACK_IMPORTED_MODULE_1__.getProductApi)(id);
    return response.data;
  } catch (err) {
    console.log("get api list Product errors");
  }
});
const getProductByName = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("/getProduct", async ({
  name
}) => {
  try {
    const response = await (0,_pages_api_products_api__WEBPACK_IMPORTED_MODULE_1__.getProductByNameApi)(name);
    return response.data;
  } catch (err) {
    console.log("get api list Product errors");
  }
});
const productSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "product",
  initialState: {
    product: null,
    error: "",
    loading: false
  },
  extraReducers: {
    /*  [login.pending] : (state, action) => {
         state.loading = true
     },
     [login.fulfilled] : (state, action) => {
         state.loading = false;
         localStorage.setItem("Profile", JSON.stringify({...action.payload}));
         state.user = action.payload
     }, */
    // [login.rejected] : (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload.message;
    // },
    [listProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [listProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    [listProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    } // [addProduct.pending] : (state, action) => {
    //     state.loading = true
    // },
    // [addProduct.fulfilled] : (state, action) => {
    //     state.loading = false;
    //     localStorage.setItem("Profile", JSON.stringify({...action.payload}));
    //     state.user = action.payload
    // },
    // [addProduct.rejected] : (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload.message;
    // }

  }
});
/* harmony default export */ __webpack_exports__["ZP"] = (productSlice.reducer);

/***/ })

};
;