/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/config.ts":
/*!******************************!*\
  !*** ./src/common/config.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COPYRIGHT_KEYS: () => (/* binding */ COPYRIGHT_KEYS),
/* harmony export */   COPYRIGHT_TYPE: () => (/* binding */ COPYRIGHT_TYPE)
/* harmony export */ });
var COPYRIGHT_KEYS = /*#__PURE__*/function (COPYRIGHT_KEYS) {
  COPYRIGHT_KEYS["url"] = "url";
  COPYRIGHT_KEYS["title"] = "title";
  COPYRIGHT_KEYS["author"] = "author";
  COPYRIGHT_KEYS["license"] = "license";
  return COPYRIGHT_KEYS;
}({});
var COPYRIGHT_TYPE = /*#__PURE__*/function (COPYRIGHT_TYPE) {
  COPYRIGHT_TYPE["original"] = "original";
  COPYRIGHT_TYPE["translation"] = "translation";
  COPYRIGHT_TYPE["transport"] = "transport";
  COPYRIGHT_TYPE["modify"] = "modify";
  COPYRIGHT_TYPE["revive"] = "revive";
  return COPYRIGHT_TYPE;
}({});

/***/ }),

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);

flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('xypp/flarum-copyright-card', function () {
  console.log('[xypp/flarum-copyright-card] Hello, forum and admin!');
});

/***/ }),

/***/ "./src/forum/addCopyrightComponent.tsx":
/*!*********************************************!*\
  !*** ./src/forum/addCopyrightComponent.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDiscussionAction)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/utils/DiscussionControls */ "flarum/forum/utils/DiscussionControls");
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CopyrightConfigModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/CopyrightConfigModal */ "./src/forum/components/CopyrightConfigModal.tsx");
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/components/DiscussionComposer */ "flarum/forum/components/DiscussionComposer");
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6__);







function makeComposerBountyInput(composer) {
  return function () {
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(_components_CopyrightConfigModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: composer.composer.fields.copyright,
      onchange: function onchange(copyright) {
        if (!copyright) delete composer.composer.fields.copyright;else composer.composer.fields.copyright = copyright;
      }
    }, true);
  };
}
function addDiscussionAction() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)((flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_1___default()), 'moderationControls', function (items, discussion) {
    if (discussion.attribute("xypp-copyright.edit")) {
      items.add('xypp-copyright', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default().component({
        icon: 'fas fa-copyright',
        className: 'Button Button--link',
        onclick: function onclick() {
          flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(_components_CopyrightConfigModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
            value: discussion.attribute("copyright"),
            onchange: function onchange(copyright) {
              discussion.save({
                copyright: copyright
              });
            }
          }, true);
        }
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('xypp-copyright-card.forum.select-copyright')));
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)((flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_5___default().prototype), 'headerItems', function (items) {
    var canSet = !!(this.composer.fields.tags && this.composer.fields.tags.find(function (e) {
      return e.attribute("xypp-copyright.edit");
    }));
    if (canSet) {
      items.add('copyright', m("a", {
        className: "ComposerBody-copyright",
        onclick: makeComposerBountyInput(this)
      }, m("span", {
        className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6___default()('CopyrightLabel', !this.composer.fields.copyright && 'none')
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans("xypp-copyright-card.forum.select-copyright"))), 1);
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)((flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_5___default().prototype), 'data', function (data) {
    var _this$composer;
    if ((_this$composer = this.composer) != null && (_this$composer = _this$composer.fields) != null && _this$composer.copyright) {
      var _this$composer2;
      data.copyright = (_this$composer2 = this.composer) == null || (_this$composer2 = _this$composer2.fields) == null ? void 0 : _this$composer2.copyright;
    }
  });
}

/***/ }),

/***/ "./src/forum/addDiscussion.tsx":
/*!*************************************!*\
  !*** ./src/forum/addDiscussion.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDiscussion: () => (/* binding */ addDiscussion)
/* harmony export */ });
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/components/CommentPost */ "flarum/forum/components/CommentPost");
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CopyrightCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CopyrightCard */ "./src/forum/components/CopyrightCard.tsx");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/DiscussionListItem */ "flarum/forum/components/DiscussionListItem");
/* harmony import */ var flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5__);






function addDiscussion() {
  if ("bodyItems" in (flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_0___default().prototype)) (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_0___default().prototype), 'bodyItems', function (items) {
    var discussion = this.attrs.post.discussion();
    var hasTag = false;
    if (flarum.extensions['flarum-tags']) {
      var tags = discussion.tags();
      var force = flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.attribute("xypp-copyright-card.force-tag") || [];
      hasTag = !!(tags && tags.find(function (e) {
        return e && force.includes(e.id() + "");
      }));
    }
    if (discussion && this.attrs.post && this.attrs.post.number() == 1) {
      var copyright = discussion.attribute("copyright");
      if (copyright || hasTag) {
        items.add('copyright', _components_CopyrightCard__WEBPACK_IMPORTED_MODULE_2__.CopyrightCard.component({
          data: copyright
        }), 10000);
      }
    }
  });else (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_0___default().prototype), "content", function (items) {
    var discussion = this.attrs.post.discussion();
    var hasTag = false;
    if (flarum.extensions['flarum-tags']) {
      var tags = discussion.tags();
      var force = flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.attribute("xypp-copyright-card.force-tag") || [];
      hasTag = !!(tags && tags.find(function (e) {
        return e && force.includes(e.id() + "");
      }));
    }
    if (discussion && this.attrs.post && this.attrs.post.number() == 1) {
      var copyright = discussion.attribute("copyright");
      if (copyright || hasTag) {
        items.find(function (e) {
          return e.attrs.className == 'Post-body';
        }).children.unshift(_components_CopyrightCard__WEBPACK_IMPORTED_MODULE_2__.CopyrightCard.component({
          data: copyright
        }));
      }
    }
  });
  if ("mainItems" in (flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_4___default().prototype)) (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'mainItems', function (items) {
    var discussion = this.attrs.discussion;
    var copyright = discussion.attribute("copyright");
    if (copyright) {
      var title = items.get('title');
      items.add('title', m("div", {
        className: "copyright-title"
      }, m("div", {
        className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5___default()("copyright-prefix", copyright.current)
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('xypp-copyright-card.forum.prefix.' + copyright.current)), title), items.getPriority('title'));
    }
  });else (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'mainView', function (items) {
    var discussion = this.attrs.discussion;
    var copyright = discussion.attribute("copyright");
    if (copyright) {
      var title = items.children[0];
      items.children[0] = m("div", {
        className: "copyright-title"
      }, m("div", {
        className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5___default()("copyright-prefix", copyright.current)
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('xypp-copyright-card.forum.prefix.' + copyright.current)), title);
    }
  });
}

/***/ }),

/***/ "./src/forum/components/CopyrightCard.tsx":
/*!************************************************!*\
  !*** ./src/forum/components/CopyrightCard.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CopyrightCard: () => (/* binding */ CopyrightCard)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CopyrightPiece__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CopyrightPiece */ "./src/forum/components/CopyrightPiece.tsx");






var CopyrightCard = /*#__PURE__*/function (_Component) {
  function CopyrightCard() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CopyrightCard, _Component);
  var _proto = CopyrightCard.prototype;
  _proto.view = function view(vnode) {
    var _this$attrs$data, _this$attrs$data2;
    return m("div", {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2___default()("copyright-card", ((_this$attrs$data = this.attrs.data) == null ? void 0 : _this$attrs$data.current) || "none")
    }, m("div", {
      className: "copyright-current-type"
    }, m("i", {
      "class": "fas fa-copyright"
    }), flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans("xypp-copyright-card.forum.current." + (((_this$attrs$data2 = this.attrs.data) == null ? void 0 : _this$attrs$data2.current) || "none"))), m("div", null, this.pieces().toArray()));
  };
  _proto.pieces = function pieces() {
    var _this = this;
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default())();
    if (!this.attrs.data) return items;
    this.attrs.data.all.forEach(function (data, i) {
      var _this$attrs$data3;
      items.add(i + "", m(_CopyrightPiece__WEBPACK_IMPORTED_MODULE_5__.CopyrightPiece, {
        data: data,
        first: i == 0 && data.type == ((_this$attrs$data3 = _this.attrs.data) == null ? void 0 : _this$attrs$data3.current)
      }));
    });
    return items;
  };
  return CopyrightCard;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));

/***/ }),

/***/ "./src/forum/components/CopyrightConfigModal.tsx":
/*!*******************************************************!*\
  !*** ./src/forum/components/CopyrightConfigModal.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CopyrightConfigModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/config */ "./src/common/config.ts");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/Select */ "flarum/common/components/Select");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _CopyrightPiece__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CopyrightPiece */ "./src/forum/components/CopyrightPiece.tsx");
/* harmony import */ var _CopyrightPieceConfigModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CopyrightPieceConfigModal */ "./src/forum/components/CopyrightPieceConfigModal.tsx");











var CopyrightConfigModal = /*#__PURE__*/function (_Modal) {
  function CopyrightConfigModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;
    _this.values = [];
    _this.current = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(_common_config__WEBPACK_IMPORTED_MODULE_5__.COPYRIGHT_TYPE.original);
    _this.typeOpt = {};
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CopyrightConfigModal, _Modal);
  var _proto = CopyrightConfigModal.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this$attrs$value, _this$attrs$value2;
    _Modal.prototype.oninit.call(this, vnode);
    this.values = ((_this$attrs$value = this.attrs.value) == null ? void 0 : _this$attrs$value.all) || [];
    this.current(((_this$attrs$value2 = this.attrs.value) == null ? void 0 : _this$attrs$value2.current) || _common_config__WEBPACK_IMPORTED_MODULE_5__.COPYRIGHT_TYPE.original);
    for (var key in _common_config__WEBPACK_IMPORTED_MODULE_5__.COPYRIGHT_TYPE) {
      this.typeOpt[key] = flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans("xypp-copyright-card.forum.current." + key));
    }
  };
  _proto.className = function className() {
    return 'Modal Modal--small';
  };
  _proto.title = function title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-copyright-card.forum.modal.title');
  };
  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, this.items().toArray(), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "Button Button--primary Button--block",
      onclick: this.onsubmit.bind(this)
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-copyright-card.forum.config.submit')), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "Button Button--block Button--danger",
      onclick: this.clear.bind(this)
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-copyright-card.forum.config.clear')));
  };
  _proto.items = function items() {
    var _this2 = this;
    var item = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default())();
    item.add("current", m("div", {
      className: "Form-group"
    }, m("label", {
      "for": "xypp-copyright-current"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-copyright-card.forum.config.current')), m((flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_8___default()), {
      id: "xypp-copyright-current",
      options: this.typeOpt,
      onchange: this.current,
      value: this.current()
    })));
    this.values.forEach(function (piece, i) {
      return item.add("piece-" + i, _this2.piece(piece, i));
    });
    item.add("add", m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "Button Button--block",
      onclick: this.add.bind(this)
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-copyright-card.forum.config.add')));
    return item;
  };
  _proto.piece = function piece(value, i) {
    return m("div", {
      className: "config-piece"
    }, m(_CopyrightPiece__WEBPACK_IMPORTED_MODULE_9__.CopyrightPiece, {
      data: value
    }), m("div", null, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "Button Button--block",
      onclick: this.remove(i)
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-copyright-card.forum.config.remove')), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "Button Button--block",
      onclick: this.edit(i)
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-copyright-card.forum.config.edit'))));
  };
  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
    var result = {
      current: this.current(),
      all: this.values
    };
    this.attrs.onchange(result);
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().modal.close();
  };
  _proto.clear = function clear() {
    this.attrs.onchange(null);
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().modal.close();
  };
  _proto.remove = function remove(i) {
    var _this3 = this;
    return function () {
      _this3.values.splice(i, 1);
      m.redraw();
    }.bind(this);
  };
  _proto.edit = function edit(i) {
    var _this4 = this;
    return function () {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().modal.show(_CopyrightPieceConfigModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: _this4.values[i],
        onchange: function (value) {
          _this4.values[i] = value;
          m.redraw();
        }.bind(_this4)
      }, true);
    }.bind(this);
  };
  _proto.add = function add() {
    this.values.push({
      type: _common_config__WEBPACK_IMPORTED_MODULE_5__.COPYRIGHT_TYPE.original,
      author: '',
      license: '',
      title: '',
      url: ''
    });
    m.redraw();
  };
  return CopyrightConfigModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/CopyrightPiece.tsx":
/*!*************************************************!*\
  !*** ./src/forum/components/CopyrightPiece.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CopyrightPiece: () => (/* binding */ CopyrightPiece)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);





var CopyrightPiece = /*#__PURE__*/function (_Component) {
  function CopyrightPiece() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CopyrightPiece, _Component);
  var _proto = CopyrightPiece.prototype;
  _proto.view = function view(vnode) {
    return m("div", {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2___default()("copyright-piece", this.attrs.data.type)
    }, this.attrs.first ? "" : m("div", {
      className: "copyright-piece-type"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans("xypp-copyright-card.forum.type." + this.attrs.data.type)), m("div", {
      className: "copyright-piece-content"
    }, this.content().toArray()));
  };
  _proto.content = function content() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default())();
    if (this.attrs.data.author) {
      items.add("author", m("div", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('xypp-copyright-card.forum.copyright.author', {
        author: this.attrs.data.author
      })));
    }
    if (this.attrs.data.title) {
      items.add("title", m("div", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('xypp-copyright-card.forum.copyright.title', {
        title: this.attrs.data.title
      })));
    }
    if (this.attrs.data.url) {
      items.add("url", m("div", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('xypp-copyright-card.forum.copyright.url', {
        url: this.attrs.data.url,
        a: m("a", {
          href: this.attrs.data.url,
          target: "_blank"
        })
      })));
    }
    if (this.attrs.data.license) {
      items.add("license", m("div", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('xypp-copyright-card.forum.copyright.license', {
        license: this.attrs.data.license
      })));
    }
    return items;
  };
  return CopyrightPiece;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));

/***/ }),

/***/ "./src/forum/components/CopyrightPieceConfigModal.tsx":
/*!************************************************************!*\
  !*** ./src/forum/components/CopyrightPieceConfigModal.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CopyrightPieceConfigModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/config */ "./src/common/config.ts");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/Select */ "flarum/common/components/Select");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_8__);









var CopyrightPieceConfigModal = /*#__PURE__*/function (_Modal) {
  function CopyrightPieceConfigModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;
    _this.type = void 0;
    _this.values = {};
    _this.typeOpt = {};
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CopyrightPieceConfigModal, _Modal);
  var _proto = CopyrightPieceConfigModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    this.type = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(this.attrs.value.type || _common_config__WEBPACK_IMPORTED_MODULE_5__.COPYRIGHT_TYPE.original);
    for (var key in _common_config__WEBPACK_IMPORTED_MODULE_5__.COPYRIGHT_KEYS) {
      this.values[key] = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(this.attrs.value[key] || '');
    }
    for (var _key2 in _common_config__WEBPACK_IMPORTED_MODULE_5__.COPYRIGHT_TYPE) {
      this.typeOpt[_key2] = flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans("xypp-copyright-card.forum.type." + _key2));
    }
  };
  _proto.className = function className() {
    return 'Modal Modal--small';
  };
  _proto.title = function title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-copyright-card.forum.piece.piece');
  };
  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, this.fields().toArray(), m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "Button Button--primary Button--block",
      onclick: this.onsubmit.bind(this)
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-copyright-card.forum.piece.submit')))));
  };
  _proto.fields = function fields() {
    var list = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default())();
    list.add('type', m("div", {
      className: "Form-group"
    }, m("label", {
      "for": "xypp-copyright-type"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-copyright-card.forum.piece.type')), m((flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_8___default()), {
      id: "xypp-copyright-type",
      options: this.typeOpt,
      value: this.type(),
      onchange: this.type
    })));
    for (var key in _common_config__WEBPACK_IMPORTED_MODULE_5__.COPYRIGHT_KEYS) {
      var k = key;
      list.add(k, m("div", {
        className: "Form-group"
      }, m("label", {
        "for": "xypp-copyright-" + k
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans("xypp-copyright-card.forum.piece." + k)), m("input", {
        id: "xypp-copyright-" + k,
        required: true,
        className: "FormControl",
        type: "text",
        bidi: this.values[k]
      })));
    }
    return list;
  };
  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
    var value = {
      type: this.type()
    };
    for (var key in _common_config__WEBPACK_IMPORTED_MODULE_5__.COPYRIGHT_KEYS) {
      var k = key;
      if (this.values[k]()) value[k] = this.values[k]();
    }
    this.attrs.onchange(value);
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_4___default().modal.close();
  };
  return CopyrightPieceConfigModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/index.ts":
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _addDiscussion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addDiscussion */ "./src/forum/addDiscussion.tsx");
/* harmony import */ var _addCopyrightComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addCopyrightComponent */ "./src/forum/addCopyrightComponent.tsx");



flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('xypp/flarum-copyright-card', function () {
  (0,_addDiscussion__WEBPACK_IMPORTED_MODULE_1__.addDiscussion)();
  (0,_addCopyrightComponent__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Select":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Select']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Select'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/classList":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/classList']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/classList'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/CommentPost":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/CommentPost']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/CommentPost'];

/***/ }),

/***/ "flarum/forum/components/DiscussionComposer":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionComposer']" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/DiscussionComposer'];

/***/ }),

/***/ "flarum/forum/components/DiscussionListItem":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionListItem']" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/DiscussionListItem'];

/***/ }),

/***/ "flarum/forum/utils/DiscussionControls":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/utils/DiscussionControls']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/utils/DiscussionControls'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.ts");
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map