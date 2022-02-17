"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftInputTextSelectStyled = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _templateObject;

var SwiftInputTextSelectStyled = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n\tdisplay: block;\n\twidth: 100%;\n\tinput,\n\t.swift_input_textselect_input_mask {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\toutline: none;\n\t\tborder: none;\n\t\tpadding: 10px 16px 11px;\n\t\tfont-size: 16px;\n\t\tline-height: 29px;\n\t\tcolor: inherit;\n\t\tborder-radius: 4px;\n\t\toverflow: hidden;\n\n\t\tcolor: #1e1e1e;\n\n\t\tborder: 2px solid #e6e6e6;\n\t\tbackground: #f2f2f2;\n\t\tcolor: #1e1e1e;\n\n\t\ttransition: all 0.12s ease-out;\n\t}\n\tinput:hover,\n\tinput:focus {\n\t\tcolor: #1e1e1e;\n\n\t\tborder: 2px solid #e6e6e6;\n\t\tbackground: ", ";\n\t\tcolor: #1e1e1e;\n\t}\n\n\t.swift_input_textselect_input_clear {\n\t\tposition: absolute;\n\t\tright: 0;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tpadding: 0 12px;\n\t\tz-index: 5;\n\t\tcursor: pointer;\n\t\topacity: 0.5;\n\t\t&:hover {\n\t\t\topacity: 1;\n\t\t}\n\t\tsvg {\n\t\t\tdisplay: block;\n\t\t\twidth: 10px;\n\t\t\theight: 10px;\n\t\t\tpath {\n\t\t\t\tfill: #1e1e1e;\n\t\t\t}\n\t\t}\n\t}\n\n\t.swift_input_textselect_input_wrapper {\n\t\tposition: relative;\n\t\t", "\n\t\t.swift_input_textselect_input_values {\n\t\t\tposition: absolute;\n\t\t\ttop: 100%;\n\t\t\tleft: 0;\n\t\t\tright: 0;\n\t\t\tz-index: 6;\n\n\t\t\tborder: 2px solid\n\t\t\t\t", ";\n\t\t\tcolor: #1e1e1e;\n\n\t\t\tborder: 2px solid #e6e6e6;\n\t\t\tbackground: #f2f2f2;\n\t\t\tcolor: #1e1e1e;\n\n\t\t\tborder-top: none;\n\n\t\t\tul {\n\t\t\t\tli {\n\t\t\t\t\tfont-size: 13px;\n\t\t\t\t\tfont-weight: 700;\n\t\t\t\t\tpadding: 6px 12px;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tbackground: #ff5d00;\n\t\t\t\t\t\tcolor: ", ";\n\n\t\t\t\t\t\tbackground: ", ";\n\t\t\t\t\t\tcolor: #1e1e1e;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t.swift_input_textselect_input_mask {\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\tright: 0;\n\t\t\tbottom: 0;\n\t\t\topacity: 1;\n\t\t\tpointer-events: none;\n\t\t}\n\t}\n\n\t", "\n\t", "\n"])), function (props) {
  return (0, _polished.darken)(0.1, '#fff');
}, function (props) {
  return props.valuesCount > 0 && "\n\t\t\tinput:focus {\n\t\t\t\tborder-bottom-left-radius: 0;\n\t\t\t\tborder-bottom-right-radius: 0;\n\t\t\t}\n\t\t";
}, function (props) {
  return (0, _polished.readableColor)(props.theme.color_body_bg, (0, _polished.darken)(0.15, props.theme.color_body_bg), (0, _polished.lighten)(0.15, props.theme.color_body_bg), false);
}, function (props) {
  return (0, _polished.readableColor)('#FF5D00');
}, function (props) {
  return (0, _polished.darken)(0.1, '#fff');
}, function (props) {
  return props.entered && "\n\t\tinput,input:hover,\n\t\t.swift_input_textselect_input_mask {\n\t\t\tbackground: ".concat((0, _polished.readableColor)(props.theme.color_body_bg, (0, _polished.darken)(0.15, props.theme.color_body_bg), (0, _polished.lighten)(0.15, props.theme.color_body_bg), false), ";\n\t\t\tcolor: ").concat(props.theme.color_body_text, ";\n\n\t\t\tborder: 2px solid ").concat((0, _polished.darken)(0.1, '#fff'), ";\n\t\t\tbackground: ").concat((0, _polished.darken)(0.1, '#fff'), ";\n\t\t\tcolor: #1e1e1e;\n\t\t}\n\t");
}, function (props) {
  return props.error && "\n\t\tinput {\n    \t\tbackground: #fde0e0;\n    \t}\n\t";
});

exports.SwiftInputTextSelectStyled = SwiftInputTextSelectStyled;