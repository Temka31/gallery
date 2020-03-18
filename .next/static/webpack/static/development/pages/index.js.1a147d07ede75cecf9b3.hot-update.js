webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/row.js":
/*!***************************!*\
  !*** ./components/row.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Row; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tema/gallery/components/row.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Row(_ref) {
  var onClickLoading = _ref.onClickLoading,
      onClickClear = _ref.onClickClear,
      onClickGroup = _ref.onClickGroup,
      group = _ref.group,
      tag = _ref.tag,
      setTag = _ref.setTag,
      loading = _ref.loading,
      setLoading = _ref.setLoading;

  var handleChangeTag = function handleChangeTag(event) {
    setTag(event.target.value);
  };

  var handleClick = function handleClick() {
    if (tag == "") {
      alert("заполните поле 'тег'");
    } else {
      onClickLoading(tag);
      setLoading("disabled");
      setTag("");
    }
  };

  var handleClickClear = function handleClickClear() {
    onClickClear();
    setTag("");
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    name: "tag",
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u0433",
    value: tag,
    onChange: handleChangeTag,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("button", {
    variant: "primary",
    disabled: loading,
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, loading == "" ? "Загрузить" : "Загрузка..."), __jsx("button", {
    onClick: handleClickClear,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C"), __jsx("button", {
    onClick: onClickGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, group ? "Разгруппировать" : "Группировать"));
}

/***/ })

})
//# sourceMappingURL=index.js.1a147d07ede75cecf9b3.hot-update.js.map