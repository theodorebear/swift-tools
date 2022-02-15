"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _swiftButton = _interopRequireDefault(require("../swift-button/swift-button"));

var _swiftLabel = _interopRequireDefault(require("../swift-label/swift-label"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SwiftMultiButtonStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t.swift-input-button-select-wrapper {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\talign-items: flex-start;\n\t\tbutton {\n\t\t\tmargin-right: 8px;\n\t\t\tmargin-top: 8px;\n\t\t}\n\t\t.swift-input-button-select-values {\n\t\t\tflex: 1;\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\talign-items: center;\n\t\t}\n\t}\n"])));

var SwiftMultiButton = function SwiftMultiButton(props) {
  var values = props.values,
      onChange = props.onChange,
      selectMax = props.selectMax;
  var value = props.value && props.value != '' ? props.value.split(',') : props.value != '' ? [] : null; //console.log("swift-button-select.tsx - values", values)

  var handleClick = function handleClick(val) {
    if (!val) {
      // clicking on ALL button
      onChange(null);
      return;
    }

    if (!value || !value.length) {
      // first one added
      onChange(val);
      return;
    }

    if (value.includes(val)) {
      // removing this item
      onChange(value.filter(function (elem) {
        return elem != val;
      }).join(','));
    } else {
      // adding item to list
      if (!selectMax || value.length < selectMax) {
        console.log('adding item, under selectMax', selectMax);
        onChange([].concat(_toConsumableArray(value), [val]).join(','));
      } else {
        // adding item but at selectMax!
        console.log('adding item but at selectMax!');
        onChange([].concat(_toConsumableArray(value.slice(1)), [val]).join(','));
      }
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(SwiftMultiButtonStyled, {
    error: props.error && props.helperText ? true : false,
    entered: value && value.length > 0 ? true : false,
    children: [props.label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      style: {
        marginBottom: '0'
      },
      children: props.label
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "swift-input-button-select-wrapper",
      children: [props.selectAll && /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftButton.default, {
        type: "button",
        color: props.buttonColor,
        size: 'small',
        icon: props.selectAllIcon,
        fillType: !value || !value.length ? props.buttonFillTypeSelected : props.buttonFillType,
        onClick: function onClick() {
          return handleClick(null);
        },
        children: props.selectAllLabel
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "swift-input-button-select-values",
        children: values.map(function (elem) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftButton.default, _objectSpread(_objectSpread({}, elem), {}, {
            type: "button",
            size: 'small',
            color: props.buttonColor,
            fillType: value && value.includes(elem.value) ? props.buttonFillTypeSelected : props.buttonFillType,
            onClick: function onClick() {
              return handleClick(elem.value);
            },
            children: elem.name
          }));
        })
      })]
    }), props.error && props.helperText ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      error: true,
      children: props.helperText
    }) : null]
  });
};

SwiftMultiButton.defaultProps = {
  selectMax: null,
  selectAll: true,
  selectAllLabel: 'All',
  selectAllIcon: 'star',
  buttonColor: 'primary',
  buttonFillType: 'light',
  buttonFillTypeSelected: 'filled',
  onChange: function onChange() {}
};
var _default = SwiftMultiButton;
exports.default = _default;