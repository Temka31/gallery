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
      lineNumber: 32
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
      lineNumber: 33
    },
    __self: this
  }), __jsx("button", {
    variant: "primary",
    disabled: loading,
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, loading == "" ? "Загрузить" : "Загрузка..."), __jsx("button", {
    onClick: handleClickClear,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C"), __jsx("button", {
    onClick: onClickGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, group ? "Разгруппировать" : "Группировать"));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@restart/context/forwardRef.js":
false,

/***/ "./node_modules/@restart/hooks/esm/useCallbackRef.js":
false,

/***/ "./node_modules/@restart/hooks/esm/useCommittedRef.js":
false,

/***/ "./node_modules/@restart/hooks/esm/useEventCallback.js":
false,

/***/ "./node_modules/@restart/hooks/esm/useForceUpdate.js":
false,

/***/ "./node_modules/@restart/hooks/esm/useMergedRefs.js":
false,

/***/ "./node_modules/@restart/hooks/esm/useMounted.js":
false,

/***/ "./node_modules/@restart/hooks/esm/usePrevious.js":
false,

/***/ "./node_modules/@restart/hooks/esm/useTimeout.js":
false,

/***/ "./node_modules/@restart/hooks/esm/useUpdatedRef.js":
false,

/***/ "./node_modules/@restart/hooks/esm/useWillUnmount.js":
false,

/***/ "./node_modules/classnames/index.js":
false,

/***/ "./node_modules/dom-helpers/esm/activeElement.js":
false,

/***/ "./node_modules/dom-helpers/esm/addClass.js":
false,

/***/ "./node_modules/dom-helpers/esm/addEventListener.js":
false,

/***/ "./node_modules/dom-helpers/esm/camelize.js":
false,

/***/ "./node_modules/dom-helpers/esm/canUseDOM.js":
false,

/***/ "./node_modules/dom-helpers/esm/contains.js":
false,

/***/ "./node_modules/dom-helpers/esm/css.js":
false,

/***/ "./node_modules/dom-helpers/esm/getComputedStyle.js":
false,

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
false,

/***/ "./node_modules/dom-helpers/esm/hyphenate.js":
false,

/***/ "./node_modules/dom-helpers/esm/hyphenateStyle.js":
false,

/***/ "./node_modules/dom-helpers/esm/isDocument.js":
false,

/***/ "./node_modules/dom-helpers/esm/isTransform.js":
false,

/***/ "./node_modules/dom-helpers/esm/isWindow.js":
false,

/***/ "./node_modules/dom-helpers/esm/listen.js":
false,

/***/ "./node_modules/dom-helpers/esm/matches.js":
false,

/***/ "./node_modules/dom-helpers/esm/ownerDocument.js":
false,

/***/ "./node_modules/dom-helpers/esm/ownerWindow.js":
false,

/***/ "./node_modules/dom-helpers/esm/querySelectorAll.js":
false,

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
false,

/***/ "./node_modules/dom-helpers/esm/removeEventListener.js":
false,

/***/ "./node_modules/dom-helpers/esm/scrollbarSize.js":
false,

/***/ "./node_modules/dom-helpers/esm/transitionEnd.js":
false,

/***/ "./node_modules/invariant/browser.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
false,

/***/ "./node_modules/popper.js/dist/esm/popper.js":
false,

/***/ "./node_modules/prop-types-extra/lib/all.js":
false,

/***/ "./node_modules/prop-types-extra/lib/isRequiredForA11y.js":
false,

/***/ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/react-bootstrap/esm/AbstractNav.js":
false,

/***/ "./node_modules/react-bootstrap/esm/AbstractNavItem.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Accordion.js":
false,

/***/ "./node_modules/react-bootstrap/esm/AccordionCollapse.js":
false,

/***/ "./node_modules/react-bootstrap/esm/AccordionContext.js":
false,

/***/ "./node_modules/react-bootstrap/esm/AccordionToggle.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Alert.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Badge.js":
false,

/***/ "./node_modules/react-bootstrap/esm/BootstrapModalManager.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Breadcrumb.js":
false,

/***/ "./node_modules/react-bootstrap/esm/BreadcrumbItem.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Button.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ButtonGroup.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ButtonToolbar.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Card.js":
false,

/***/ "./node_modules/react-bootstrap/esm/CardColumns.js":
false,

/***/ "./node_modules/react-bootstrap/esm/CardContext.js":
false,

/***/ "./node_modules/react-bootstrap/esm/CardDeck.js":
false,

/***/ "./node_modules/react-bootstrap/esm/CardGroup.js":
false,

/***/ "./node_modules/react-bootstrap/esm/CardImg.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Carousel.js":
false,

/***/ "./node_modules/react-bootstrap/esm/CarouselCaption.js":
false,

/***/ "./node_modules/react-bootstrap/esm/CarouselItem.js":
false,

/***/ "./node_modules/react-bootstrap/esm/CloseButton.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Col.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Collapse.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Container.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Dropdown.js":
false,

/***/ "./node_modules/react-bootstrap/esm/DropdownButton.js":
false,

/***/ "./node_modules/react-bootstrap/esm/DropdownItem.js":
false,

/***/ "./node_modules/react-bootstrap/esm/DropdownMenu.js":
false,

/***/ "./node_modules/react-bootstrap/esm/DropdownToggle.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ElementChildren.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Fade.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Feedback.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Figure.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FigureCaption.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FigureImage.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Form.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormCheck.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormCheckInput.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormCheckLabel.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormContext.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormControl.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormGroup.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormLabel.js":
false,

/***/ "./node_modules/react-bootstrap/esm/FormText.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Image.js":
false,

/***/ "./node_modules/react-bootstrap/esm/InputGroup.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Jumbotron.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ListGroup.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ListGroupItem.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Media.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Modal.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ModalBody.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ModalContext.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ModalDialog.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ModalFooter.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ModalHeader.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ModalTitle.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Nav.js":
false,

/***/ "./node_modules/react-bootstrap/esm/NavContext.js":
false,

/***/ "./node_modules/react-bootstrap/esm/NavDropdown.js":
false,

/***/ "./node_modules/react-bootstrap/esm/NavItem.js":
false,

/***/ "./node_modules/react-bootstrap/esm/NavLink.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Navbar.js":
false,

/***/ "./node_modules/react-bootstrap/esm/NavbarBrand.js":
false,

/***/ "./node_modules/react-bootstrap/esm/NavbarCollapse.js":
false,

/***/ "./node_modules/react-bootstrap/esm/NavbarContext.js":
false,

/***/ "./node_modules/react-bootstrap/esm/NavbarToggle.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Overlay.js":
false,

/***/ "./node_modules/react-bootstrap/esm/OverlayTrigger.js":
false,

/***/ "./node_modules/react-bootstrap/esm/PageItem.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Pagination.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Popover.js":
false,

/***/ "./node_modules/react-bootstrap/esm/PopoverContent.js":
false,

/***/ "./node_modules/react-bootstrap/esm/PopoverTitle.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ProgressBar.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ResponsiveEmbed.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Row.js":
false,

/***/ "./node_modules/react-bootstrap/esm/SafeAnchor.js":
false,

/***/ "./node_modules/react-bootstrap/esm/SelectableContext.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Spinner.js":
false,

/***/ "./node_modules/react-bootstrap/esm/SplitButton.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Switch.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Tab.js":
false,

/***/ "./node_modules/react-bootstrap/esm/TabContainer.js":
false,

/***/ "./node_modules/react-bootstrap/esm/TabContent.js":
false,

/***/ "./node_modules/react-bootstrap/esm/TabContext.js":
false,

/***/ "./node_modules/react-bootstrap/esm/TabPane.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Table.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Tabs.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ThemeProvider.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Toast.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ToastBody.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ToastContext.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ToastHeader.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ToggleButton.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ToggleButtonGroup.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Tooltip.js":
false,

/***/ "./node_modules/react-bootstrap/esm/createChainedFunction.js":
false,

/***/ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js":
false,

/***/ "./node_modules/react-bootstrap/esm/divWithClassName.js":
false,

/***/ "./node_modules/react-bootstrap/esm/index.js":
false,

/***/ "./node_modules/react-bootstrap/esm/triggerBrowserReflow.js":
false,

/***/ "./node_modules/react-bootstrap/esm/useWrappedRefWithWarning.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
false,

/***/ "./node_modules/react-overlays/esm/Dropdown.js":
false,

/***/ "./node_modules/react-overlays/esm/DropdownContext.js":
false,

/***/ "./node_modules/react-overlays/esm/DropdownMenu.js":
false,

/***/ "./node_modules/react-overlays/esm/DropdownToggle.js":
false,

/***/ "./node_modules/react-overlays/esm/Modal.js":
false,

/***/ "./node_modules/react-overlays/esm/ModalManager.js":
false,

/***/ "./node_modules/react-overlays/esm/Overlay.js":
false,

/***/ "./node_modules/react-overlays/esm/usePopper.js":
false,

/***/ "./node_modules/react-overlays/esm/useRootClose.js":
false,

/***/ "./node_modules/react-overlays/esm/utils/isOverflowing.js":
false,

/***/ "./node_modules/react-overlays/esm/utils/manageAriaHidden.js":
false,

/***/ "./node_modules/react-overlays/esm/utils/ownerDocument.js":
false,

/***/ "./node_modules/react-overlays/esm/utils/useWaitForDOMRef.js":
false,

/***/ "./node_modules/react-transition-group/esm/Transition.js":
false,

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
false,

/***/ "./node_modules/react-transition-group/esm/config.js":
false,

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
false,

/***/ "./node_modules/uncontrollable/esm/hook.js":
false,

/***/ "./node_modules/uncontrollable/esm/index.js":
false,

/***/ "./node_modules/uncontrollable/esm/uncontrollable.js":
false,

/***/ "./node_modules/uncontrollable/esm/utils.js":
false,

/***/ "./node_modules/warning/warning.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false,

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

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
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

      setLoading("");
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
//# sourceMappingURL=index.js.3d8572c1a71a6ad50ddb.hot-update.js.map