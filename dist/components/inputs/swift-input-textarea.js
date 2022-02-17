"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _swiftInputTextareaStyle = require("./swift-input-textarea-style");

var _swiftLabel = _interopRequireDefault(require("./swift-label"));

var _classnames = _interopRequireDefault(require("classnames"));

var _jsxRuntime = require("react/jsx-runtime");

var SwiftInputTextarea = function SwiftInputTextarea(props) {
  var _props$height, _props$placeholder;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_swiftInputTextareaStyle.SwiftInputTextareaStyled, {
    error: props.error && props.helperText ? true : false,
    entered: props.value.length > 0 ? true : false,
    height: (_props$height = props.height) !== null && _props$height !== void 0 ? _props$height : undefined,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      children: props.label
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
      name: props.name,
      autoFocus: props.autoFocus,
      disabled: props.disabled,
      onChange: props.onChange,
      value: props.value,
      autoCorrect: props.autoCorrect === false ? 'off' : 'on' // spellCheck={props.autoCapitalize === false ? 'off' : 'on'}
      ,
      autoCapitalize: props.autoCapitalize === false ? 'off' : 'on',
      autoComplete: props.autoComplete === false ? 'off' : 'on',
      placeholder: (_props$placeholder = props.placeholder) !== null && _props$placeholder !== void 0 ? _props$placeholder : undefined
    }), props.error && props.helperText ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      error: true,
      children: props.helperText
    }) : null]
  });
};

var _default = SwiftInputTextarea;
exports.default = _default;