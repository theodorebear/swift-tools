"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _swiftDropdownStyle = require("./swift-dropdown-style");

var _classnames = _interopRequireDefault(require("classnames"));

var _swiftIcon = _interopRequireDefault(require("../icons/swift-icon"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SwiftDropdown = function SwiftDropdown(props) {
  var show = props.show,
      trigger = props.trigger,
      onTrigger = props.onTrigger,
      title = props.title,
      items = props.items;
  (0, _react.useEffect)(function () {}, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_swiftDropdownStyle.SwiftDropdownStyled, {
    show: show,
    onClick: function onClick(e) {
      e.stopPropagation();
      e.preventDefault();
      onTrigger();
    },
    position: props.position || 'right',
    type: props.type,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "dropdown_trigger",
      children: trigger
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "dropdown_main",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "dropdown_main_header",
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
        children: items.map(function (elem, i) {
          var _elem$href, _elem$target;

          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
            className: (0, _classnames.default)([elem.active ? 'active' : null, elem.icon ? 'icon' : null]),
            onClick: function onClick(e) {
              e.stopPropagation();
              e.preventDefault();
              elem.onClick();
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
              onClick: function onClick(e) {
                e.stopPropagation();

                if (elem.onClick) {
                  e.preventDefault();
                  elem.onClick();
                  onTrigger();
                }
              },
              href: (_elem$href = elem.href) !== null && _elem$href !== void 0 ? _elem$href : undefined,
              target: (_elem$target = elem.target) !== null && _elem$target !== void 0 ? _elem$target : undefined,
              children: [elem.active ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftIcon.default, {
                i: "check"
              }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftIcon.default, {
                i: elem.icon
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: elem.name
              }), elem.children ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "_carat"
              }) : null]
            }), elem.children ? /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
              children: elem.children.map(function (elemChild, j) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                  className: (0, _classnames.default)([elemChild.active ? 'active' : null, elemChild.icon ? 'icon' : null]),
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                    onClick: function onClick(e) {
                      e.stopPropagation();
                      elemChild.onClick();
                    },
                    children: [elemChild.active ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftIcon.default, {
                      i: "check"
                    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftIcon.default, {
                      i: elemChild.icon
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      children: elemChild.name
                    })]
                  })
                }, 'dropdown-elem-' + i + '-child-' + j);
              })
            }) : null]
          }, 'dropdown-elem-' + i);
        })
      })]
    })]
  });
};

var _default = SwiftDropdown;
exports.default = _default;