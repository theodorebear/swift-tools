"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _swiftLabel = _interopRequireDefault(require("../swift-label/swift-label"));

var _swiftSelectStyle = require("./swift-select-style");

var _classnames = _interopRequireDefault(require("classnames"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var SwiftSelect = function SwiftSelect(props) {
  var _props$label, _props$value, _props$emptyLabel;

  //console.log('SwiftSelect: props', props)
  var theme = props.theme;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_swiftSelectStyle.SwiftSelectStyled, {
    error: props.error && props.helperText ? true : false,
    entered: props.value && props.value.length > 0 ? true : false,
    theme: theme,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "swift_input_select_label",
      children: [!props.label || props.label && props.label.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
        theme: theme,
        children: (_props$label = props.label) !== null && _props$label !== void 0 ? _props$label : props.name
      }), props.link && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "swift_input_select_label_link",
        children: props.link.onClick ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
          onClick: props.link.onClick,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: props.link.label || 'View'
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
              d: "M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"
            })
          })]
        }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
          target: "_blank",
          href: props.link.url ? props.link.url : props.link,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: props.link.label || 'View'
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
              d: "M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"
            })
          })]
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames.default)("swift_input_select_input_element", props.error && props.helperText && 'error'),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
        name: props.name,
        value: (_props$value = props.value) !== null && _props$value !== void 0 ? _props$value : '',
        onChange: props.onChange,
        children: (props.emptyValue ? [{
          name: (_props$emptyLabel = props.emptyLabel) !== null && _props$emptyLabel !== void 0 ? _props$emptyLabel : '',
          value: ''
        }].concat(_toConsumableArray(props.values)) : props.values).map(function (item, index) {
          var _item$disabled;

          return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
            value: item.value || item.value === 0 || item.value === '0' ? item.value : item.value === null || item.value === '' ? '' : item.name,
            disabled: (_item$disabled = item.disabled) !== null && _item$disabled !== void 0 ? _item$disabled : undefined,
            children: item.name
          }, item.value || item.value === null ? item.value : item.name);
        })
      })
    }), props.sublabel ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      theme: theme,
      style: {
        marginTop: '8px',
        opacity: 0.4
      },
      className: "swift_input_text_sublabel",
      children: props.sublabel
    }) : null, props.error && props.helperText ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      theme: theme,
      error: true,
      className: "swift_input_text_label_error",
      children: props.helperText
    }) : null]
  });
};

SwiftSelect.defaultProps = {
  emptyValue: true,
  theme: 'default'
};
var _default = SwiftSelect;
exports.default = _default;