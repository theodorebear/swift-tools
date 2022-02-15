"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftSelectStyled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SwiftSelectStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n\t", "\n"])), function (props) {
  return props.theme == "default" ? "\n\tdisplay: block;\n\twidth: 100%;\n\t& select {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\toutline: none;\n\t\tborder: none;\n\t\tpadding: 10px 16px 10px;\n\t\tcolor: inherit;\n\t\tborder-radius: 4px;\n\t\toverflow: hidden;\n\t\tfont-size: 16px;\n\t\tline-height: 30px;\n\t\tcolor: #1e1e1e;\n\n\t\tborder: 2px solid #e6e6e6;\n\t\tbackground: #f2f2f2;\n\t\tcolor: #1e1e1e;\n\n\t\ttransition: all 0.12s ease-out;\n\t\t-webkit-appearance: button;\n\t\t-moz-appearance: button;\n\t\t-webkit-user-select: none;\n\t\t-moz-user-select: none;\n\n\t\t-webkit-appearance: none;\n\t\t-moz-appearance: none;\n\t\ttext-indent: 1px;\n\t\ttext-overflow: '';\n\t}\n\t& select::-ms-expand {\n\t\tdisplay: none;\n\t}\n\tselect:hover,\n\tselect:focus {\n\t\tcolor: #1e1e1e;\n\t\tbackground: ".concat((0, _polished.darken)(0.1, '#fff'), ";\n\t\tcolor: #1e1e1e;\n\t}\n\n\t.swift_input_select_label {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tlabel {\n\t\t\tflex: 1;\n\t\t}\n\n\t\t.swift_input_select_label_link {\n\t\t\ta {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tpadding: 4px;\n\t\t\t\tspan {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tmargin-right: 4px;\n\t\t\t\t\tfont-size: 12px;\n\t\t\t\t\tfont-weight: 700;\n\t\t\t\t\tcolor: ").concat(props.theme.color_primary, ";\n\t\t\t\t}\n\t\t\t\tsvg {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\twidth: 8px;\n\t\t\t\t\theight: 8px;\n\t\t\t\t\tfill: ").concat(props.theme.color_primary, ";\n\t\t\t\t\ttransition: transform 0.15s ease-out;\n\t\t\t\t}\n\t\t\t\t&:hover {\n\t\t\t\t\tsvg {\n\t\t\t\t\t\ttransform: translateX(4px);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\n\t").concat(props.error ? "\n\t\tselect {\n    \t\tbackground: #fde0e0;\n    \t\tborder-color: #d44747;\n    \t}\n\t" : "", "\n\n\t") : props.theme == 'minimal' ? "\n\t\tdisplay: block;\n\twidth: 100%;\n\t& select {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\toutline: none;\n\t\tborder: none;\n\t\tpadding: 10px 16px 10px;\n\t\tcolor: inherit;\n\t\tborder-radius: 4px;\n\t\toverflow: hidden;\n\t\tfont-size: 16px;\n\t\tline-height: 34px;\n\n\t\tbackground: none;\n\n\t\ttransition: all 0.12s ease-out;\n\t\t-webkit-appearance: button;\n\t\t-moz-appearance: button;\n\t\t-webkit-user-select: none;\n\t\t-moz-user-select: none;\n\n\t\t-webkit-appearance: none;\n\t\t-moz-appearance: none;\n\t\ttext-indent: 1px;\n\t\ttext-overflow: '';\n\t}\n\t& select::-ms-expand {\n\t\tdisplay: none;\n\t}\n\tselect:hover,\n\tselect:focus {\n\t\tcolor: #1e1e1e;\n\t\tbackground: ".concat((0, _polished.darken)(0.1, '#fff'), ";\n\t\tcolor: #1e1e1e;\n\t}\n\n\t.swift_input_select_label,label {\n\t\tdisplay:none;\n\t}\n\n\t").concat(props.error ? "\n\t\tselect {\n    \t\tbackground: #fde0e0;\n    \t\tborder-color: #d44747;\n    \t}\n\t" : "", "\n\t") : props.theme == 'none' ? "\n\t\tselect {\n\t\t\twidth:100%;\n\t\t\toutline:none;\n\t\t\tpadding:12px 18px;\n\t\t\tborder:1px solid #000;\n\t\t}\n\t" : "";
});

exports.SwiftSelectStyled = SwiftSelectStyled;