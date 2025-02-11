exports.id = 477;
exports.ids = [477];
exports.modules = {

/***/ 2477:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C$": function() { return /* binding */ cartReducer; },
/* harmony export */   "Xq": function() { return /* binding */ addToCart; },
/* harmony export */   "g1": function() { return /* binding */ incrementQuantity; },
/* harmony export */   "X1": function() { return /* binding */ decrementQuantity; },
/* harmony export */   "h2": function() { return /* binding */ removeFromCart; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find(item => item._id === action.payload._id);

      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push(_objectSpread(_objectSpread({}, action.payload), {}, {
          quantity: 1
        })); // localStorage.setItem('cart',JSON.stringify(state));
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find(item => item._id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.find(item => item._id === action.payload);

      if (item.quantity === 1) {
        const index = state.findIndex(item => item._id === action.payload);
        state.splice(index, 1);
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex(item => item._id === action.payload);
      state.splice(index, 1);
    }
  }
});
const cartReducer = cartSlice.reducer;
const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart
} = cartSlice.actions;

/***/ })

};
;