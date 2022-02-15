"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _swiftLabel = _interopRequireDefault(require("../swift-label/swift-label"));

var _swiftSelectEnumStyle = _interopRequireDefault(require("./swift-select-enum-style"));

var _classnames = _interopRequireDefault(require("classnames"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwiftSelectEnum = function SwiftSelectEnum(props) {
  var _props$label;

  //console.log('SwiftSelectEnum: props', props)
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_swiftSelectEnumStyle.default, {
    error: props.error && props.helperText ? true : false,
    entered: props.value && props.value.length > 0 ? true : false,
    children: [!props.label || props.label && props.label.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      children: (_props$label = props.label) !== null && _props$label !== void 0 ? _props$label : props.name
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
      className: "swift_select_enum_elem",
      children: props.values.map(function (val, i) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          onClick: function onClick() {
            return props.onChange(val['value']);
          },
          className: (0, _classnames.default)({
            active: props.value == val['value']
          }),
          children: val['name']
        }, i);
      })
    }), props.error && props.helperText ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      error: true,
      children: props.helperText
    }) : null]
  });
};

var _default = SwiftSelectEnum;
exports.default = _default;