"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftInputCollectionStyled = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _templateObject;

var SwiftInputCollectionStyled = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n\t.swift_input_collection_item_actions {\n\t\t> div {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tcursor: pointer;\n\t\t\tsvg {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 16px;\n\t\t\t\theight: 16px;\n\t\t\t\topacity: 0.25;\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\tsvg {\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmargin-bottom: 8px;\n\t\t\t&.swift_input_collection_item_reorder {\n\t\t\t\tsvg {\n\t\t\t\t\twidth: 24px;\n\t\t\t\t\theight: 24px;\n\t\t\t\t}\n\t\t\t\tmargin-bottom: 0;\n\t\t\t}\n\t\t}\n\t}\n\t.swift_input_collection_items {\n\t\tpadding: 12px 18px;\n\t\tpadding-left: 12px;\n\t\tborder-radius: 4px;\n\t\tborder: 2px solid ", ";\n\n\t\tborder: 2px solid ", ";\n\n\t\t> div:not(:last-of-type) {\n\t\t\tmargin-bottom: 8px;\n\t\t}\n\n\t\t.swift_input_collection_item_index {\n\t\t\tpadding-top: 2px;\n\t\t\tspan {\n\t\t\t\tfont-size: 13px;\n\t\t\t\tfont-weight: 800;\n\t\t\t\topacity: 0.4;\n\t\t\t\tdisplay: block;\n\t\t\t\tmin-width: 14px;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t}\n\t}\n"])), function (props) {
  return (0, _polished.readableColor)(props.theme.color_body_bg, (0, _polished.darken)(0.15, props.theme.color_body_bg), (0, _polished.lighten)(0.15, props.theme.color_body_bg), false);
}, function (props) {
  return (0, _polished.darken)(0.15, "#fff");
});

exports.SwiftInputCollectionStyled = SwiftInputCollectionStyled;