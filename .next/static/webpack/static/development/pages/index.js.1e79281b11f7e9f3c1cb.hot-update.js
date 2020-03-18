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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
var _jsxFileName = "/Users/tema/gallery/components/row.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var styles = {
  root: {
    display: "flex",
    flexWrap: "wrap"
  }
};
var useStyles = makeStyles(function (theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    }
  };
});
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
      setLoading(true);
      setTag("");
    }
  };

  var handleClickClear = function handleClickClear() {
    onClickClear();
    setTag("");
  };

  return __jsx("div", {
    style: styles.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "outlined-basic",
    label: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u0433",
    variant: "outlined",
    type: "text",
    name: "tagName",
    value: tag,
    onChange: handleChangeTag,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "contained",
    color: "primary",
    disabled: loading,
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, loading == "" ? "Загрузить" : "Загрузка..."), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "contained",
    color: "secondary",
    onClick: handleClickClear,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "contained",
    onClick: onClickGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, group ? "Разгруппировать" : "Группировать"), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "outlined-basic",
    label: "Outlined",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.1e79281b11f7e9f3c1cb.hot-update.js.map