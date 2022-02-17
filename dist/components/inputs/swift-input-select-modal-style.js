"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftSelectModalStyled = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _templateObject;

var SwiftSelectModalStyled = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n\tdisplay: block;\n\twidth: 100%;\n\t& input {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\toutline: none;\n\t\tborder: none;\n\t\tpadding: 10px 16px 10px;\n\t\tcolor: inherit;\n\t\tborder-radius: 4px;\n\t\toverflow: hidden;\n\t\tfont-size: 16px;\n\t\tline-height: 30px;\n\t\tborder: 2px solid\n\t\t\t", ";\n\n\t\tcolor: #1e1e1e;\n\n\t\tborder: 2px solid #e6e6e6;\n\t\tbackground: #f2f2f2;\n\t\tcolor: #1e1e1e;\n\n\t\ttransition: all 0.12s ease-out;\n\t\t-webkit-appearance: button;\n\t\t-moz-appearance: button;\n\t\t-webkit-user-select: none;\n\t\t-moz-user-select: none;\n\n\t\t-webkit-appearance: none;\n\t\t-moz-appearance: none;\n\t\ttext-indent: 1px;\n\t\ttext-overflow: '';\n\t}\n\t& input::-ms-expand {\n\t\tdisplay: none;\n\t}\n\tinput:hover,\n\tinput:focus {\n\t\tcolor: #1e1e1e;\n\n\t\tbackground: ", ";\n\t\tcolor: #1e1e1e;\n\t}\n\n\t.swift_input_select_label {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tlabel {\n\t\t\tflex: 1;\n\t\t}\n\n\t\t.swift_input_select_label_link {\n\t\t\ta {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tpadding: 4px;\n\t\t\t\tspan {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tmargin-right: 4px;\n\t\t\t\t\tfont-size: 12px;\n\t\t\t\t\tfont-weight: 700;\n\t\t\t\t\tcolor: ", ";\n\t\t\t\t}\n\t\t\t\tsvg {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\twidth: 8px;\n\t\t\t\t\theight: 8px;\n\t\t\t\t\tfill: ", ";\n\t\t\t\t\ttransition: transform 0.15s ease-out;\n\t\t\t\t}\n\t\t\t\t&:hover {\n\t\t\t\t\tsvg {\n\t\t\t\t\t\ttransform: translateX(4px);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t", "\n\t", "\n"])), function (props) {
  return (0, _polished.readableColor)(props.theme.color_body_bg, (0, _polished.darken)(0.1, props.theme.color_body_bg), (0, _polished.lighten)(0.1, props.theme.color_body_bg), false);
}, function (props) {
  return (0, _polished.darken)(0.1, '#fff');
}, function (props) {
  return props.theme.color_primary;
}, function (props) {
  return props.theme.color_primary;
}, function (props) {
  return props.entered && "\n\t\tselect,select:hover {\n\t\t\tbackground: ".concat(function (props) {
    return (0, _polished.readableColor)(props.theme.color_body_bg, (0, _polished.darken)(0.15, props.theme.color_body_bg), (0, _polished.lighten)(0.15, props.theme.color_body_bg), false);
  }, ";;\n\t\t\tcolor: ").concat(props.theme.color_body_text, ";\n\n\t\t\tbackground: ").concat(function (props) {
    return (0, _polished.darken)(0.1, '#fff');
  }, ";\n\t\t\tcolor: #1e1e1e;\n\n\t\t}\n\t");
}, function (props) {
  return props.error && "\n\t\tselect {\n    \t\tbackground: #fde0e0;\n    \t}\n\t";
});

exports.SwiftSelectModalStyled = SwiftSelectModalStyled;