"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _swiftInputCheckboxGroupStyle = require("./swift-input-checkbox-group-style");

var _swiftInputCheckbox = _interopRequireDefault(require("../swift-input-checkbox/swift-input-checkbox"));

var _swiftLabel = _interopRequireDefault(require("../swift-label/swift-label"));

var _jsxRuntime = require("react/jsx-runtime");

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

var SwiftInputCheckboxGroup = function SwiftInputCheckboxGroup(props) {
  //console.log('SICG - ', props)
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_swiftInputCheckboxGroupStyle.SwiftInputCheckboxGroupStyled, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      children: props.label
    }), props.value.map(function (elem) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputCheckbox.default, {
        label: elem.label,
        name: elem.key,
        onChange: function onChange(e) {
          //console.log("SwiftInputCheckboxGroup, value change", e.currentTarget.value, elem.key)
          var newVal = [];

          if (elem.key.includes('*')) {
            newVal = _toConsumableArray(props.value.map(function (val) {
              return _objectSpread(_objectSpread({}, val), {}, {
                value: elem.value ? 0 : 1
              });
            }));
          } else {
            newVal = _toConsumableArray(props.value.map(function (val) {
              return _objectSpread(_objectSpread({}, val), {}, {
                value: val.key == elem.key ? val.value ? 0 : 1 : val.value
              });
            })); // 1+ unchecked, uncheck select all

            if (newVal.filter(function (elem) {
              return !elem.value;
            }).length) {
              newVal = _toConsumableArray(newVal.map(function (val) {
                return _objectSpread(_objectSpread({}, val), {}, {
                  value: val.key.includes('*') ? 0 : val.value
                });
              }));
            } // 0 unchecked, check select all


            if (newVal.filter(function (elem) {
              return !elem.value;
            }).length == 1) {
              newVal = _toConsumableArray(newVal.map(function (val) {
                return _objectSpread(_objectSpread({}, val), {}, {
                  value: val.key.includes('*') ? 1 : val.value
                });
              }));
            }
          } //console.log(newVal)


          props.onChange(newVal);
        },
        checked: elem.value,
        disabled: elem.disabled || false
      });
    })]
  });
};

var _default = SwiftInputCheckboxGroup;
exports.default = _default;