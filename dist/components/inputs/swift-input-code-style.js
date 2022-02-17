"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftInputCodeStyled = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _templateObject;

var SwiftInputCodeStyled = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tmax-width: 100%;\n\t& .textarea {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\toutline: none;\n\t\tborder: none;\n\t\t/*height: 320px;*/\n\t\tfont-size: 16px;\n\n\t\tbackground: #1e1e1e;\n\t\tcolor: #fff;\n\t\t.punctuation,\n\t\t.keyword,\n\t\tpre {\n\t\t\tcolor: #fff;\n\t\t}\n\t\tpadding: 0;\n\t\tborder-radius: 4px;\n\t\toverflow: hidden;\n\n\t\t/**/\n\t\ttransition: all 0.12s ease-out;\n\n\t\tmax-height: 640px;\n\t\tmax-width: calc(100vw - 300px);\n\t\toverflow: scroll;\n\t\t&::-webkit-scrollbar {\n\t\t\twidth: 5px;\n\t\t\theight: 5px;\n\t\t\tbackground-color: #000;\n\t\t}\n\t\t&::-webkit-scrollbar-thumb {\n\t\t\tbackground: #666;\n\t\t}\n\t\tflex: 1;\n\t}\n"])));

exports.SwiftInputCodeStyled = SwiftInputCodeStyled;