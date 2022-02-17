"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftFormStyled = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var SwiftFormStyled = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n\t.form {\n\t}\n\t.form > div:first-child > div:first-child {\n\t\tpadding-top: 0;\n\t}\n\t.status {\n\t\tpadding: 10px 18px;\n\t\tborder-radius: 2px;\n\t\tbackground: #1e1e1e;\n\t\tcolor: white;\n\t\tmargin-bottom: 6px;\n\t\t&.error {\n\t\t\tcolor: #fff;\n\t\t\tbackground: #de635d;\n\t\t}\n\t\t&.success {\n\t\t\tcolor: #fff;\n\t\t\tbackground: #5ab89e;\n\t\t}\n\t\t& span {\n\t\t\tfont-size: 14px;\n\t\t\tfont-weight: 600;\n\t\t\tdisplay: block;\n\t\t\t-webkit-font-smoothing: antialiased;\n\t\t}\n\t}\n\n\t.swift-form-element {\n\t}\n\n\t", "\n"])), function (props) {
  return props.theme == "default" ? "\n\n\t" : props.theme == "minimal" ? "\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\toutline: none;\n\t\tborder: none;\n\t\t/*padding: 10px 16px 11px;*/\n\t\tcolor: inherit;\n\t\tborder-radius: 4px;\n\t\toverflow: hidden;\n\t\tfont-size: 16px;\n\t\tline-height: 29px;\n\n\t\tborder: 2px solid #e6e6e6;\n\t\tbackground: #f2f2f2;\n\t\tcolor: #1e1e1e;\n\n\t\ttransition: all 0.12s ease-out;\n\t" : "";
});

exports.SwiftFormStyled = SwiftFormStyled;