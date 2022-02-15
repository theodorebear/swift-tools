"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftInputDateStyled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SwiftInputDateStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: block;\n  width: 100%;\n\n  .swift-input-date-moment-wrapper {\n    position: relative;\n  }\n\n  & input,\n  .swift-input-date-moment {\n    display: block;\n    width: 100%;\n    outline: none;\n    border: none;\n    padding: 10px 16px;\n    color: inherit;\n    font-size: 16px;\n    background: transparent;\n    border-radius: 4px;\n    overflow: hidden;\n    border: 2px solid rgba(0, 0, 0, 0.08);\n    transition: all 0.12s ease-out;\n\n    border: 2px solid #e6e6e6;\n    background: #f2f2f2;\n    color: #1e1e1e;\n  }\n  .react-datepicker-wrapper {\n    width: 100%;\n    opacity: 0;\n  }\n  & input:hover,\n  .swift-input-date-moment:hover {\n    background: #fafafa;\n    color: #1e1e1e;\n  }\n  & input:focus {\n    background: white;\n    color: #1e1e1e;\n  }\n\n  .react-datepicker-popper {\n    z-index: 5;\n  }\n\n  .swift-input-date-moment {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    pointer-events: none;\n    z-index: 1;\n    display: flex;\n    align-items: center;\n  }\n  .swift-input-date-moment-clear {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    z-index: 10;\n\n    padding: 0 8px;\n    svg {\n      height: 12px;\n      height: 12px;\n      opacity: 0.25;\n    }\n    &:hover {\n      svg {\n        opacity: 0.5;\n      }\n    }\n  }\n  ", "\n  ", "\n"])), function (_ref) {
  var entered = _ref.entered;
  return entered && "\n    input,input:hover {\n      background: white;\n      color: #1e1e1e;\n    }\n  ";
}, function (_ref2) {
  var error = _ref2.error;
  return error && "\n    input {\n        background: #fde0e0;\n      }\n  ";
});

exports.SwiftInputDateStyled = SwiftInputDateStyled;