"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftMultiSelectStyled = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var SwiftMultiSelectStyled = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n\twidth: 100%;\n\t.swift-multiselect-window {\n\t\tdisplay: flex;\n\t\tpadding: 12px 0;\n\n\t\t.swift-multiselect-side {\n\t\t\tflex: 1;\n\t\t\tselect {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 100%;\n\t\t\t\toutline: none;\n\t\t\t\tbackground: transparent;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tborder: 2px solid rgba(0, 0, 0, 0.08);\n\t\t\t\ttransition: all 0.12s ease-out;\n\t\t\t\tmin-height: 240px;\n\t\t\t\tfont-size: 16px;\n\t\t\t\toption {\n\t\t\t\t\tfont-size: 13px;\n\t\t\t\t\tpadding: 6px 10px;\n\t\t\t\t\tfont-weight: 600;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.swift-multiselect-center {\n\t\t\tmargin: 0 12px;\n\t\t\tpadding-top: 24px;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t\tbutton {\n\t\t\t\tmargin: 6px 0;\n\t\t\t\tsvg {\n\t\t\t\t\tpath {\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t&:last-of-type {\n\t\t\t\t\tsvg {\n\t\t\t\t\t\ttransform: rotate(180deg);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.swift-multiselect-right {\n\t\t\tmargin-left: 12px;\n\t\t\tpadding-top: 24px;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t\tbutton {\n\t\t\t\tmargin: 6px 0;\n\t\t\t\tsvg {\n\t\t\t\t\ttransform: rotate(-90deg);\n\t\t\t\t\tpath {\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t&:last-of-type {\n\t\t\t\t\tsvg {\n\t\t\t\t\t\ttransform: rotate(90deg);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"])));

exports.SwiftMultiSelectStyled = SwiftMultiSelectStyled;