"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _swiftInputCheckboxGroupStyle = require("./swift-input-checkbox-group-style");

var _swiftInputCheckbox = _interopRequireDefault(require("./swift-input-checkbox"));

var _swiftLabel = _interopRequireDefault(require("./swift-label"));

var _jsxRuntime = require("react/jsx-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
            newVal = (0, _toConsumableArray2.default)(props.value.map(function (val) {
              return _objectSpread(_objectSpread({}, val), {}, {
                value: elem.value ? 0 : 1
              });
            }));
          } else {
            newVal = (0, _toConsumableArray2.default)(props.value.map(function (val) {
              return _objectSpread(_objectSpread({}, val), {}, {
                value: val.key == elem.key ? val.value ? 0 : 1 : val.value
              });
            })); // 1+ unchecked, uncheck select all

            if (newVal.filter(function (elem) {
              return !elem.value;
            }).length) {
              newVal = (0, _toConsumableArray2.default)(newVal.map(function (val) {
                return _objectSpread(_objectSpread({}, val), {}, {
                  value: val.key.includes('*') ? 0 : val.value
                });
              }));
            } // 0 unchecked, check select all


            if (newVal.filter(function (elem) {
              return !elem.value;
            }).length == 1) {
              newVal = (0, _toConsumableArray2.default)(newVal.map(function (val) {
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