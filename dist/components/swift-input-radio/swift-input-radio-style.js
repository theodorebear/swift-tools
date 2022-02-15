"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftInputRadiosStyled = exports.SwiftInputRadioStyled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SwiftInputRadiosStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\twidth: 100%;\n\tlabel {\n\t\tmargin-left: 0;\n\t}\n"])));

exports.SwiftInputRadiosStyled = SwiftInputRadiosStyled;

var SwiftInputRadioStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-basis: 100%;\n\n\tinput {\n\t\twidth: 18px;\n\t\theight: 18px;\n\t\tborder: 2px solid rgba(0, 0, 0, 0.08);\n\t\toutline: none;\n\t}\n\tspan {\n\t\tdisplay: block;\n\t\tfont-weight: inherit;\n\t\tmargin-left: 8px;\n\t}\n\tlabel {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\topacity: 0.8;\n\t\tfont-size: 13px;\n\t\tfont-weight: 600;\n\t\tpadding: 4px 0;\n\t\t-webkit-font-smoothing: antialiased;\n\t\tcursor: pointer;\n\t\tspan {\n\t\t\tfont-weight: inherit;\n\t\t\tfont-weight: 800;\n\t\t}\n\t}\n\n\t.swift_input_radio_label_link {\n\t\ta {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tpadding: 4px;\n\t\t\tspan {\n\t\t\t\tdisplay: block;\n\t\t\t\tmargin-right: 4px;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tfont-weight: 700;\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t\tsvg {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 8px;\n\t\t\t\theight: 8px;\n\t\t\t\tfill: ", ";\n\t\t\t\ttransition: transform 0.15s ease-out;\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\tsvg {\n\t\t\t\t\ttransform: translateX(4px);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"])), function (props) {
  return props.theme.color_primary;
}, function (props) {
  return props.theme.color_primary;
});

exports.SwiftInputRadioStyled = SwiftInputRadioStyled;