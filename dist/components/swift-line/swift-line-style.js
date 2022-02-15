"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftLineStyled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SwiftLineStyled = _styledComponents.default.hr(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tborder: none;\n\theight: 2px;\n\tbackground: ", ";\n\tmargin: 6px 0 3px;\n\topacity: 0.1;\n"])), function (props) {
  return props.theme.color_body_text;
});

exports.SwiftLineStyled = SwiftLineStyled;