"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftInputCheckboxStyled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SwiftInputCheckboxStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t", "\n\tlabel {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tpadding: 3px 0;\n\t\t-webkit-font-smoothing: antialiased;\n\t\tcursor: pointer;\n\t\tfont-size: 16px;\n\n\t\t.swift_input_checkbox_box {\n\t\t\twidth: 18px;\n\t\t\theight: 18px;\n\t\t\tborder: 2px solid rgba(0, 0, 0, 0.08);\n\t\t\tbackground: #fff;\n\t\t\tborder-radius: 4px;\n\t\t\t", "\n\t\t\tdisplay:flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tsvg {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 12px;\n\t\t\t\theight: 12px;\n\t\t\t\topacity: 1;\n\t\t\t\tfill: ", ";\n\t\t\t\ttransform: scale(0);\n\t\t\t\tmargin: 0;\n\t\t\t\tpath {\n\t\t\t\t\tfill: ", ";\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tinput {\n\t\t\tdisplay: none;\n\t\t\t&:checked ~ .swift_input_checkbox_box {\n\t\t\t\tbackground: #5ab89e;\n\t\t\t\tsvg {\n\t\t\t\t\ttransform: scale(1);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tspan {\n\t\t\topacity: 0.6;\n\t\t\tfont-size: 14px;\n\t\t\tfont-weight: 700;\n\t\t\tflex: 1;\n\t\t\tdisplay: block;\n\t\t}\n\t}\n"])), function (_ref) {
  var hasLabel = _ref.hasLabel;
  return hasLabel && "width: 100%;";
}, function (_ref2) {
  var hasLabel = _ref2.hasLabel;
  return hasLabel && "margin-right: 8px;";
}, function (_ref3) {
  var theme = _ref3.theme;
  return (0, _polished.readableColor)('#5ab89e');
}, function (_ref4) {
  var theme = _ref4.theme;
  return (0, _polished.readableColor)('#5ab89e');
});

exports.SwiftInputCheckboxStyled = SwiftInputCheckboxStyled;