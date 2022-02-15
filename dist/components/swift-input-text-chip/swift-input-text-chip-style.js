"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftInputTextStyledChip = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SwiftInputTextStyledChip = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: block;\n\twidth: 100%;\n\t& > div {\n\t\tdisplay: block;\n\t\twidth: 100% !important;\n\t\toutline: none !important;\n\t\tborder: none;\n\t\tpadding: 3px 8px !important;\n\t\tcolor: inherit !important;\n\t\tbackground: transparent !important;\n\t\tborder-radius: 4px !important;\n\t\tborder: 2px solid rgba(0, 0, 0, 0.08) !important;\n\t\ttransition: all 0.12s ease-out !important;\n\t\tfont-size: 16px;\n\t\t& > div > input,\n\t\t& > div > input:hover,\n\t\t& > div > input:focus {\n\t\t\tbackground:transparent; !important;\n\t\t\toutline:none !important;\n\t\t\tfont-size:16px !important;\n\t\t\tfont-family:\"Lato\", \"open sans\", \"open-sans\", sans-serif !important;\n\t\t\tline-height: 22px;\n\t\t}\n\n\t\t& > div:not([role=combobox]) {\n\t\t\tbackground:#fff !important !important;\n\t\t\tpadding:0 !important;\n\t\t\tfont-size:14px !important;\n\t\t\tfont-weight:700 !important;\n\t\t\tdisplay:flex;\n\t\t\talign-items:center;\n\t\t\tpadding-left: 10px !important;\n\t\t\tspan {\n\t\t\t\tpadding: 3px 6px;\n\t\t\t    font-size: 20px;\n\t\t\t    opacity: 0.25;\n\t\t\t}\n\t\t}\n\n\t}\n\t& input:hover {\n\t\tbackground: #fafafa;\n\t\tcolor: #1e1e1e;\n\t}\n\t& input:focus {\n\t\tbackground: white;\n\t\tcolor: #1e1e1e;\n\t}\n\t", "\n\t", "\n"])), function (_ref) {
  var entered = _ref.entered;
  return entered && "\n\t\tinput,input:hover {\n\t\t\tbackground: white;\n\t\t\tcolor: #1e1e1e;\n\t\t}\n\t";
}, function (_ref2) {
  var error = _ref2.error;
  return error && "\n\t\tinput {\n    \t\tbackground: #fde0e0;\n    \t}\n\t";
});

exports.SwiftInputTextStyledChip = SwiftInputTextStyledChip;