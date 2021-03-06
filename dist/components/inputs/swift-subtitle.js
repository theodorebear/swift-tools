"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var SwiftSubtitleStyled = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n\n\t", "\n"])), function (props) {
  return props.theme == "default" ? "\n\t\tmargin-left: 0px;\n\t\th4 {\n\t\t\tfont-size: 16px;\n\t\t\topacity: 0.85;\n\t\t\tfont-weight: 800;\n\t\t}\n\t" : props.theme == "none" ? "\n\t\tfont-weight:600;\n\t" : "";
});

var SwiftSubtitle = function SwiftSubtitle(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SwiftSubtitleStyled, _objectSpread(_objectSpread({}, props), {}, {
    className: "swift_subtitle",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
      children: props.children
    })
  }));
};

SwiftSubtitle.defaultProps = {
  theme: "default"
};
var _default = SwiftSubtitle;
exports.default = _default;