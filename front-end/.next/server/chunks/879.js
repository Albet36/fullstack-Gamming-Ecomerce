exports.id = 879;
exports.ids = [879];
exports.modules = {

/***/ 2879:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_auth_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8955);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const initialState = {
  username: "",
  password: ""
};

const LoginComponent = () => {
  const {
    0: formValue,
    1: setFormValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState);
  const {
    username,
    password
  } = formValue;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  const handleSubmit = e => {
    e.preventDefault();

    if (username && password) {
      dispatch((0,_redux_auth_slice__WEBPACK_IMPORTED_MODULE_3__/* .login */ .x4)({
        formValue,
        toast: react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast,
        router
      }));
    }
  };

  const onInputChange = e => {
    let {
      name,
      value
    } = e.target;
    setFormValue(_objectSpread(_objectSpread({}, formValue), {}, {
      [name]: value
    }));
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "px-[500px]",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "container p-5 mt-36 bg-green-300 rounded-xl",
      style: {
        textAlign: 'center'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        action: "",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("legend", {
          className: "text-[50px]",
          children: "Login"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "form-group m-5",
          style: {
            margin: '30px 0'
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            type: "text",
            className: "form-control outline-none bg-slate-100 p-3",
            name: "username",
            value: username,
            onChange: onInputChange,
            placeholder: "username...."
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "form-group m-5",
          style: {
            margin: '30px 0'
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            type: "password",
            className: "form-control outline-none bg-slate-100 p-3",
            name: "password",
            value: password,
            onChange: onInputChange,
            placeholder: "Password..."
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
          type: "submit",
          className: "btn btn-primary my-5 border px-5 py-2",
          onClick: handleSubmit,
          children: "Submit"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          href: "/auth/register",
          className: "hover:text-red-300 transition",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "m-1",
            children: "Don't have an account ? sign up"
          })
        })]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (LoginComponent);

/***/ })

};
;