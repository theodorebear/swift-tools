"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftInputTextareaStyled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SwiftInputTextareaStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: block;\n\twidth: 100%;\n\ttextarea {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\toutline: none;\n\t\tborder: none;\n\t\theight: ", ";\n\t\tpadding: 10px 16px 11px;\n\t\tcolor: inherit;\n\t\tborder-radius: 4px;\n\t\tfont-size: 16px;\n\t\tline-height: 21px;\n\t\toverflow: hidden;\n\t\toverflow-y: auto;\n\t\tresize: none;\n\n\t\tborder: 2px solid #e6e6e6;\n\t\tbackground: #f2f2f2;\n\t\tcolor: #1e1e1e;\n\n\t\ttransition: all 0.12s ease-out;\n\t}\n\ttextarea:hover,\n\ttextarea:focus {\n\t\tcolor: #1e1e1e;\n\n\t\tbackground: #f2f2f2;\n\t\tcolor: #1e1e1e;\n\t}\n\t", "\n\t", "\n"])), function (props) {
  return props.height ? props.height + 'px' : '120px';
}, function (props) {
  return props.entered && "\n\t\ttextarea,textarea:hover {\n\t\t\tbackground: ".concat(function (props) {
    return (0, _polished.readableColor)(props.theme.color_body_bg, (0, _polished.darken)(0.15, props.theme.color_body_bg), (0, _polished.lighten)(0.15, props.theme.color_body_bg), false);
  }, ";;\n\t\t\tcolor: ").concat(props.theme.color_body_text, ";\n\n\t\t\tbackground: #e6e6e6;\n\t\t\tcolor: #1e1e1e;\n\t\t}\n\t");
}, function (props) {
  return props.error && "\n\t\ttextarea {\n    \t\tbackground: #fde0e0;\n    \t}\n\t";
});

exports.SwiftInputTextareaStyled = SwiftInputTextareaStyled;