"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _swiftInputSliderStyle = require("./swift-input-slider-style");

var _swiftLabel = _interopRequireDefault(require("../swift-label/swift-label"));

var _reactInputSlider = _interopRequireDefault(require("react-input-slider"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwiftInputSlider = function SwiftInputSlider(props) {
  var min = props.min,
      max = props.max,
      step = props.step,
      valueType = props.valueType;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_swiftInputSliderStyle.SwiftInputSliderStyled, {
    hasLabel: props.label ? true : false,
    onClick: function onClick(e) {
      if (props.handleClick) props.handleClick();
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_swiftLabel.default, {
      children: [props.label, ":\xA0", /*#__PURE__*/(0, _jsxRuntime.jsx)("u", {
        children: valueType == '%' ? props.value + '%' : valueType == '$' ? '$' + props.value.toLocaleString() : valueType ? props.value + ' ' + valueType : props.value
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "swift_input_slider_element",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactInputSlider.default, {
        axis: "x",
        x: props.value || min,
        onChange: function onChange(_ref) {
          var x = _ref.x;
          return props.onChange(x);
        },
        xmin: min || 0,
        xmax: max || 100,
        xstep: step || 1,
        styles: {
          track: {//backgroundColor: "blue",
          },
          active: {},
          thumb: {},
          disabled: {
            opacity: 0.5
          }
        }
      })
    })]
  });
};

var _default = SwiftInputSlider;
exports.default = _default;