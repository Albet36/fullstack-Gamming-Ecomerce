(function() {
var exports = {};
exports.id = 888;
exports.ids = [888,801];
exports.modules = {

/***/ 9478:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./redux/auth.slice.js
var auth_slice = __webpack_require__(8955);
// EXTERNAL MODULE: ./styles/Navbar.module.css
var Navbar_module = __webpack_require__(4643);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./components/layouts/Navbar.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Navbar = () => {
  var _user$result, _user$result2;

  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    user
  } = (0,external_react_redux_.useSelector)(state => _objectSpread({}, state.auth));
  const {
    0: dropdown,
    1: setDropdown
  } = (0,external_react_.useState)();

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  (0,external_react_.useEffect)(() => {
    const users = JSON.parse(localStorage.getItem("Profile"));
    dispatch((0,auth_slice/* setUser */.av)(users));
  }, []);

  const handleLogout = () => {
    dispatch((0,auth_slice/* setLogout */.wt)());
  };

  const cart = (0,external_react_redux_.useSelector)(state => state.cart);
  console.log(cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    className: (Navbar_module_default()).navbar,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
      className: (Navbar_module_default()).logo,
      children: "Shop Gamming"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: (Navbar_module_default()).links,
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (Navbar_module_default()).navlink,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: "Home"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (Navbar_module_default()).navlink,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: "Shop"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (Navbar_module_default()).navlink,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/product",
          children: "Manager Product"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (Navbar_module_default()).navlink,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/cart",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            children: ["Cart (", getItemsCount(), ")"]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (Navbar_module_default()).navlink,
        children: user !== null && user !== void 0 && (_user$result = user.result) !== null && _user$result !== void 0 && _user$result._id ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "relative inline-block text-left",
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            type: "button",
            className: "inline-flex justify-center w-full  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            id: "options-menu",
            "aria-haspopup": "true",
            "aria-expanded": "true",
            onClick: handleDropdown,
            "aria-controls": "options-menu",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: user === null || user === void 0 ? void 0 : (_user$result2 = user.result) === null || _user$result2 === void 0 ? void 0 : _user$result2.avatar,
              className: "w-10 h-10 rounded-full"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `origin-top-right absolute right-[-20px] mt-2 w-[5rem] text-center rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 ${dropdown ? '' : 'hidden'}`,
            role: "menu",
            "aria-orientation": "vertical",
            "aria-labelledby": "options-menu",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "py-1",
              role: "none",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "/profile",
                className: "cursor-pointer block  py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                children: "Profile"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                onClick: handleLogout,
                className: "cursor-pointer block  py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                children: "Logout"
              })]
            })
          })]
        }) : /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "/auth",
          className: "cursor-pointer",
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "login"
          })
        })
      })]
    })]
  });
};

/* harmony default export */ var layouts_Navbar = (Navbar);
// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(2202);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/layouts/Footer.jsx




const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: (Footer_module_default()).footer,
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      className: (Footer_module_default()).brand,
      children: "Hoang Anh"
    }), " \xA9", ' ', new Date().getFullYear()]
  });
};

/* harmony default export */ var layouts_Footer = (Footer);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
// EXTERNAL MODULE: ./redux/cart.slice.js
var cart_slice = __webpack_require__(2477);
// EXTERNAL MODULE: ./redux/product.slice.js
var product_slice = __webpack_require__(1772);
;// CONCATENATED MODULE: ./redux/store.js




const reducer = {
  cart: cart_slice/* cartReducer */.C$,
  auth: auth_slice/* default */.ZP,
  product: product_slice/* default */.ZP
};
const store = (0,toolkit_.configureStore)({
  reducer
});
/* harmony default export */ var redux_store = (store);
;// CONCATENATED MODULE: ./components/layouts/MainLayout.jsx






const MainLayout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(layouts_Navbar, {}), children, /*#__PURE__*/jsx_runtime_.jsx(layouts_Footer, {})]
  });
};

/* harmony default export */ var layouts_MainLayout = (MainLayout);
;// CONCATENATED MODULE: ./components/layouts/AuthLayout.jsx



const AuthLayout = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: children
  });
};

/* harmony default export */ var layouts_AuthLayout = (AuthLayout);
;// CONCATENATED MODULE: ./pages/_app.js


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function MyApp({
  Component,
  pageProps
}) {
  const router = (0,router_.useRouter)();
  const path = router === null || router === void 0 ? void 0 : router.pathname;

  if (path.startsWith("/auth")) {
    return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
      store: redux_store,
      children: /*#__PURE__*/jsx_runtime_.jsx(layouts_AuthLayout, {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "wrapper",
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
        })
      })
    });
  } else {
    return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
      store: redux_store,
      children: /*#__PURE__*/jsx_runtime_.jsx(layouts_MainLayout, {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "wrapper",
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
        })
      })
    });
  }
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 2202:
/***/ (function(module) {

// Exports
module.exports = {
	"footer": "Footer_footer__317iK",
	"brand": "Footer_brand__1V94a"
};


/***/ }),

/***/ 4643:
/***/ (function(module) {

// Exports
module.exports = {
	"navbar": "Navbar_navbar__3KWoz",
	"logo": "Navbar_logo__gT4EI",
	"links": "Navbar_links__IKuKL",
	"navlink": "Navbar_navlink__1Lgq-"
};


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

/***/ 2311:
/***/ (function(module) {

"use strict";
module.exports = require("cookies-next");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [374,664,717,955,477,772], function() { return __webpack_exec__(9478); });
module.exports = __webpack_exports__;

})();