"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftInputColorStyled = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _templateObject;

var SwiftInputColorStyled = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n\tdisplay: block;\n\twidth: 100%;\n\n\t.swift_input_color_window {\n\t\tdisplay: flex;\n\t\tfont-size: 16px;\n\n\t\tborder: 2px solid #e6e6e6;\n\t\tbackground: #f2f2f2;\n\t\tcolor: #1e1e1e;\n\n\t\tborder-radius: 4px;\n\t\tpadding-right: 0;\n\n\t\t&:hover {\n\t\t\tbackground: ", ";\n\n\t\t\tbackground: #e6e6e6;\n\t\t\tcolor: #1e1e1e;\n\t\t}\n\n\t\t.swift_input_color_swatch {\n\t\t\tflex: 1;\n\n\t\t\tpadding: 10px 16px 11px;\n\n\t\t\tcursor: pointer;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\n\t\t\t", "\n\t\t\t.swift_input_color_swatch_view {\n\t\t\t\theight: 18px;\n\t\t\t\twidth: 18px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tmargin-right: 12px;\n\t\t\t\tborder: 2px solid\n\t\t\t\t\t", ";\n\t\t\t\tborder: 2px solid ", ";\n\t\t\t}\n\t\t}\n\n\t\t.swift_input_color_clear {\n\t\t\tpadding: 0 8px;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tcursor: pointer;\n\t\t\tsvg {\n\t\t\t\theight: 12px;\n\t\t\t\theight: 12px;\n\t\t\t\topacity: 0.25;\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\tsvg {\n\t\t\t\t\topacity: 0.5;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t.swift_input_color_swatch_picker {\n\t\t.swift_input_color_swatch_picker_cover {\n\t\t\tposition: fixed;\n\t\t\ttop: 0px;\n\t\t\tright: 0px;\n\t\t\tbottom: 0px;\n\t\t\tleft: 0px;\n\t\t}\n\t}\n\n\tinput {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\toutline: none;\n\t\tborder: none;\n\t\tpadding: 10px 16px 11px;\n\t\tcolor: inherit;\n\t\tborder-radius: 4px;\n\t\toverflow: hidden;\n\n\t\tcolor: #1e1e1e;\n\n\t\tborder: 2px solid #e6e6e6;\n\t\tbackground: #f2f2f2;\n\t\tcolor: #1e1e1e;\n\t\ttransition: all 0.12s ease-out;\n\t}\n\tinput:hover,\n\tinput:focus {\n\t\tcolor: #1e1e1e;\n\n\t\tbackground: #e6e6e6;\n\t\tcolor: #1e1e1e;\n\t}\n\t", "\n\t", "\n"])), function (props) {
  return (0, _polished.readableColor)(props.theme.color_body_bg, (0, _polished.darken)(0.15, props.theme.color_body_bg), (0, _polished.lighten)(0.15, props.theme.color_body_bg), false);
}, function (showPicker) {
  return showPicker && "\n\t\t\tbackground: ".concat(function (props) {
    return (0, _polished.readableColor)(props.theme.color_body_bg, (0, _polished.darken)(0.15, props.theme.color_body_bg), (0, _polished.lighten)(0.15, props.theme.color_body_bg), false);
  }, ";\n\n\t\t\tbackground: #e6e6e6;\n\t\t\tcolor: #1e1e1e;\n\t\t\tcolor: #1e1e1e;\n\t\t");
}, function (props) {
  return (0, _polished.readableColor)(props.theme.color_body_bg, (0, _polished.darken)(0.2, props.theme.color_body_bg), (0, _polished.lighten)(0.2, props.theme.color_body_bg), false);
}, function (props) {
  return (0, _polished.darken)(0.2, '#fff');
}, function (props) {
  return props.entered && "\n\t\tinput,input:hover {\n\t\t\tbackground: ".concat(function (props) {
    return (0, _polished.readableColor)(props.theme.color_body_bg, (0, _polished.darken)(0.15, props.theme.color_body_bg), (0, _polished.lighten)(0.15, props.theme.color_body_bg), false);
  }, ";\n\t\t\tcolor: ").concat(props.theme.color_body_text, ";\n\n\t\t\tbackground: #e6e6e6;\n\t\t\tcolor: #1e1e1e;\n\t\t}\n\t");
}, function (props) {
  return props.error && "\n\t\tinput {\n    \t\tbackground: #fde0e0;\n    \t}\n\t";
});

exports.SwiftInputColorStyled = SwiftInputColorStyled;