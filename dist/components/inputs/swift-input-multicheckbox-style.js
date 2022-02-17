"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftInputMultiCheckboxStyled = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _templateObject;

var SwiftInputMultiCheckboxStyled = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n\t", "\n\t", "\n\n\t", "\n\n\t\n\n\t.swift_input_multicheckbox_children {\n\t\t> div {\n\t\t\tpadding: 0;\n\t\t\tposition: relative;\n\t\t\tpadding-left: 24px;\n\t\t\t&:after {\n\t\t\t\tcontent: \"\";\n\t\t\t\tdisplay: block;\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 8px;\n\t\t\t\ttop: 0;\n\t\t\t\theight: 100%;\n\t\t\t\twidth: 2px;\n\t\t\t\tbackground: #1e1e1e;\n\t\t\t\topacity: 0.2;\n\t\t\t}\n\t\t\t&:last-of-type:after {\n\t\t\t\theight: calc(50% + 2px);\n\t\t\t}\n\t\t\t&:before {\n\t\t\t\tcontent: \"\";\n\t\t\t\tdisplay: block;\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 10px;\n\t\t\t\ttop: 50%;\n\t\t\t\twidth: 8px;\n\t\t\t\theight: 2px;\n\t\t\t\tbackground: #1e1e1e;\n\t\t\t\topacity: 0.2;\n\t\t\t}\n\t\t}\n\t}\n"])), function (props) {
  return props.border && "\n\t\t.swift_input_multicheckbox_window {\n\t\t\tborder: 2px solid\n\t\t\t\t".concat((0, _polished.readableColor)(props.theme.color_body_bg, (0, _polished.darken)(0.15, props.theme.color_body_bg), (0, _polished.lighten)(0.15, props.theme.color_body_bg), false), ";\n\t\t\tbackground: ").concat((0, _polished.readableColor)(props.theme.color_body_bg, (0, _polished.darken)(0.05, props.theme.color_body_bg), (0, _polished.lighten)(0.05, props.theme.color_body_bg), false), ";\n\n\t\t\tborder: 2px solid ").concat((0, _polished.darken)(0.15, "#fff"), ";\n\t\t\tbackground: ").concat((0, _polished.darken)(0.05, "#fff"), ";\n\t\t\tcolor: #1e1e1e;\n\n\t\t\tpadding: 4px 8px;\n\t\t\theight: 220px;\n\t\t\tmax-height: 220px;\n\t\t\toverflow: scroll;\n\t\t\toverflow-x: hidden;\n\t\t\tfont-size: 16px;\n\t\t}\n\t");
}, function (_ref) {
  var count = _ref.count,
      cols = _ref.cols;
  return cols == 2 && ".swift_input_multicheckbox_values {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\t> div {\n\t\t\tflex-basis: 50%;\n\t\t}\n\t}";
}, function (_ref2) {
  var valuesInline = _ref2.valuesInline;
  return valuesInline && ".swift_input_multicheckbox_values {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\t> div {\n\t\t\twidth:auto;\n\t\t\tpadding-right:18px;\n\t\t}\n\t}";
});

exports.SwiftInputMultiCheckboxStyled = SwiftInputMultiCheckboxStyled;