"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftCreditCardStyled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SwiftCreditCardStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t.form_braintree_credit_card_input {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\toutline: none;\n\t\tborder: none;\n\t\tpadding: 4px 16px 4px;\n\t\tcolor: inherit;\n\t\tborder-radius: 4px;\n\t\toverflow: hidden;\n\t\tfont-size: 16px;\n\t\tline-height: 30px;\n\n\t\tcolor: #1e1e1e;\n\n\t\tborder: 2px solid #e6e6e6;\n\t\tbackground: #f2f2f2;\n\t\tcolor: #1e1e1e;\n\n\t\ttransition: all 0.12s ease-out;\n\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tsvg {\n\t\t\twidth: 42px;\n\t\t\theight: 42px;\n\t\t\tmargin-right: 12px;\n\t\t\tmargin-left: -6px;\n\t\t}\n\n\t\t.form_braintree_credit_card_input_field {\n\t\t\tpadding: 6px 0;\n\t\t}\n\n\t\t.braintree_input {\n\t\t\theight: 30px;\n\t\t\tfont-family: 'Lato';\n\t\t}\n\t}\n"])));

exports.SwiftCreditCardStyled = SwiftCreditCardStyled;