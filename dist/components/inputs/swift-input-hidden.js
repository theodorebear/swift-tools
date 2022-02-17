"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

var SwiftInputHidden = function SwiftInputHidden(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
    type: "hidden",
    name: props.name,
    value: props.value
  });
};

var _default = SwiftInputHidden;
exports.default = _default;