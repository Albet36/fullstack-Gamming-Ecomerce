exports.id = 955;
exports.ids = [955];
exports.modules = {

/***/ 7153:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signIn": function() { return /* binding */ signIn; },
/* harmony export */   "signUp": function() { return /* binding */ signUp; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const HOST = 'http://localhost:2001';
const signIn = async formData => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${HOST}/auth`, formData);
};
const signUp = async formData => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${HOST}/auth/register`, formData);
};

/***/ }),

/***/ 8955:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x4": function() { return /* binding */ login; },
/* harmony export */   "av": function() { return /* binding */ setUser; },
/* harmony export */   "wt": function() { return /* binding */ setLogout; }
/* harmony export */ });
/* unused harmony export register */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_api_auth_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7153);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2311);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/login", async ({
  formValue,
  toast,
  router
}) => {
  try {
    const response = await (0,_pages_api_auth_api__WEBPACK_IMPORTED_MODULE_1__.signIn)(formValue);
    toast.success("Login successfully");
    router.push('/');
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
const register = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/register", async ({
  formValue,
  navigate,
  toast
}) => {
  try {
    const response = await api.signUp(formValue);
    toast.success("Register successfully");
    navigate("/login");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state, action) => {
      localStorage.removeItem("Profile");
      next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/auth');
      state.user = null;
    }
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("Profile", JSON.stringify(_objectSpread({}, action.payload))); //    setCookie("ProfileUser", JSON.stringify({...action.payload.oldUser}));         

      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [register.pending]: (state, action) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("Profile", JSON.stringify(_objectSpread({}, action.payload)));
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    }
  }
});
const {
  setUser,
  setLogout
} = authSlice.actions;
/* harmony default export */ __webpack_exports__["ZP"] = (authSlice.reducer);

/***/ })

};
;