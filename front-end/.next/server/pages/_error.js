(function() {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 3490:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Page404": function() { return /* binding */ Page404; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/ComponentPage404.jsx


const ComponentPage404 = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "404 NotFound"
    })
  });
};
;// CONCATENATED MODULE: ./pages/_error.jsx



const Page404 = () => {
  const router = (0,router_.useRouter)();

  const handleInvalidPathClick = () => {
    router.push('/invalid-path');
  };

  return /*#__PURE__*/jsx_runtime_.jsx(ComponentPage404, {});
};

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
var __webpack_exports__ = (__webpack_exec__(3490));
module.exports = __webpack_exports__;

})();