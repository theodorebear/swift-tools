"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftLineStyled = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var SwiftLineStyled = _styledComponents.default.hr(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n\tborder: none;\n\theight: 2px;\n\tbackground: ", ";\n\tmargin: 6px 0 3px;\n\topacity: 0.1;\n"])), function (props) {
  return props.theme.color_body_text;
});

exports.SwiftLineStyled = SwiftLineStyled;