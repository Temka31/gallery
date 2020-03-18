webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/row */ "./components/row.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/card */ "./components/card.js");

var _jsxFileName = "/Users/tema/gallery/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var styles = {
  img: {
    display: "flex",
    flexWrap: "wrap",
    height: "100%",
    border: "1px solid black"
  }
};
function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=mouse"),
      url = _useState[0],
      setUrl = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      items = _useState2[0],
      setItems = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      tags = _useState3[0],
      setTags = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      group = _useState4[0],
      setGroup = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      tag = _useState5[0],
      setTag = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var handleClickLoading = function handleClickLoading(tag) {
    fetch("https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + tag).then(function (response) {
      return response.json();
    }).then(function (data) {
      if ("data" in data) {
        if ("embed_url" in data.data) {
          setItems([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(items), [{
            tag: tag,
            url: data.data.embed_url
          }]));
          addTag(tag);
        } else {
          alert("По тегу ничего не найдено");
        }
      } else {
        alert("Произошла http ошибка");
      }

      setLoading(false);
    });
  };

  var addTag = function addTag(tag) {
    if (!tags.includes(tag)) {
      setTags([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(tags), [tag]));
    }
  };

  var handleClickClear = function handleClickClear() {
    setItems([]);
  };

  var handelClickGroup = function handelClickGroup() {
    setGroup(!group);
  };

  var renderCards = function renderCards() {
    if (items.length > 0) {
      return __jsx("div", {
        style: styles.img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, items.map(function (item) {
        return __jsx(_components_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: item,
          key: item.url,
          setTage: setTag,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        });
      }));
    }
  };

  var renderCardsGroup = function renderCardsGroup() {
    if (items.length > 0) return tags.map(function (tag) {
      return __jsx("div", {
        key: tag,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, tag, __jsx("div", {
        style: styles.img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, items.map(function (item) {
        if (tag === item.tag) {
          return __jsx(_components_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
            item: item,
            key: item.url,
            setTage: setTag,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          });
        }
      })));
    });
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_components_row__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClickLoading: handleClickLoading,
    onClickClear: handleClickClear,
    onClickGroup: handelClickGroup,
    group: group,
    tag: tag,
    setTag: setTag,
    loading: loading,
    setLoading: setLoading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), group ? renderCardsGroup() : renderCards());
}

/***/ })

})
//# sourceMappingURL=index.js.853cdb386cc172c0c35e.hot-update.js.map