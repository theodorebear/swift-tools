"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftLabelStyled = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _templateObject;

var SwiftLabelStyled = _styledComponents.default.label(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n\n\t", "\n"])), function (props) {
  return props.theme == "default" ? "\t\n\t\tdisplay: block;\n\t\topacity: 0.8;\n\t\tfont-size: 14px;\n\t\tline-height: 18px;\n\t\tfont-weight: 700;\n\t\tmargin-bottom: 6px;\n\t\tmargin-left: 0px;\n\t\t-webkit-font-smoothing: antialiased;\n\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tsvg {\n\t\t\twidth: 16px;\n\t\t\theight: 16px;\n\t\t\tmargin-right: 6px;\n\t\t}\n\t\tspan {\n\t\t\tflex: 1;\n\t\t\tdisplay: block;\n\t\t\tfont-weight: inherit;\n\t\t}\n\t\tstrong {\n\t\t\tfont-weight: 800;\n\t\t}\n\n\t\t".concat(props.type == "sublabel" ? "\n\t\t\tfont-size:12px;\n\t\t\tfont-weight:600;\n\t\t" : "", "\n\n\t\t").concat(props.color == "primary" ? "\n\t\t    color: ".concat(props.theme.color_primary, ";\n\t\t   \tsvg {\n\t\t   \t\tpath {\n\t\t   \t\t\tfill: ").concat(props.theme.color_primary, ";\n\t\t   \t\t}\n\t\t   \t}\n\t    ") : "", "\n\n\t\t").concat(props.error ? "\n\t    \tcolor: #d44747;\n\t\t\tfont-weight: 700;\n\t\t\tmargin-top: 6px;\n\t\t\topacity: 1;\n\t\t\tmargin-bottom: 0;\n\t\t" : "", "\n\n\t") : props.theme == 'none' ? "\n\t\t".concat(props.error && "\n\t    \tcolor: #d44747;\n\t\t", "\n\t") : "";
});

exports.SwiftLabelStyled = SwiftLabelStyled;