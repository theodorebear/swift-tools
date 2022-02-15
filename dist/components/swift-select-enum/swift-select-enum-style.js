"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SwiftSelectEnumStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: block;\n\twidth: 100%;\n\n\t.swift_select_enum_elem {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\toutline: none;\n\t\tborder: none;\n\t\tpadding: 0px;\n\t\tcolor: inherit;\n\t\tborder-radius: 4px;\n\t\toverflow: hidden;\n\t\tfont-size: 16px;\n\n\t\tcolor: #1e1e1e;\n\n\t\tborder: 2px solid #e6e6e6;\n\t\tbackground: #f2f2f2;\n\t\tcolor: #1e1e1e;\n\n\t\ttransition: all 0.12s ease-out;\n\t\t-webkit-appearance: button;\n\t\t-moz-appearance: button;\n\t\t-webkit-user-select: none;\n\t\t-moz-user-select: none;\n\n\t\t-webkit-appearance: none;\n\t\t-moz-appearance: none;\n\t\ttext-indent: 1px;\n\t\ttext-overflow: '';\n\t\tli {\n\t\t\tflex-shrink: 0;\n\t\t\tflex-grow: 1;\n\t\t\tfont-size: 13px;\n\t\t\tline-height: 20px;\n\t\t\tpadding: 15px 6px 16px;\n\t\t\tfont-weight: 600;\n\t\t\ttext-align: center;\n\t\t\tcursor: pointer;\n\t\t\t&:hover {\n\t\t\t\tbackground: #e6e6e6;\n\t\t\t\tcolor: #1e1e1e;\n\t\t\t}\n\t\t\t&.active {\n\t\t\t\tbackground: #ff5d00;\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t\t&:first-of-type {\n\t\t\t\tpadding-left: 8px;\n\t\t\t}\n\t\t\t&:last-of-type {\n\t\t\t\tpadding-right: 8px;\n\t\t\t}\n\t\t}\n\t}\n"])), function (props) {
  return (0, _polished.readableColor)('#FF5D00');
});

var _default = SwiftSelectEnumStyled;
exports.default = _default;