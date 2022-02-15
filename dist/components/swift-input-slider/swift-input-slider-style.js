"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftInputSliderStyled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SwiftInputSliderStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t.swift_input_slider_element {\n\t\tpadding: 8px;\n\t\t> div {\n\t\t\twidth: 100%;\n\t\t\tdisplay: block;\n\t\t\t> div:first-of-type {\n\t\t\t\tbackground: ", ";\n\t\t\t}\n\t\t\t> div:last-of-type > div {\n\t\t\t\tbackground: #ff5d00;\n\t\t\t}\n\t\t}\n\t}\n"])), function (props) {
  return (0, _polished.darken)(0.075, props.theme.color_primary);
});

exports.SwiftInputSliderStyled = SwiftInputSliderStyled;