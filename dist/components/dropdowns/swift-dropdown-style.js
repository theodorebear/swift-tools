"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftDropdownStyled = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _templateObject;

var SwiftDropdownStyled = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n  display: inline-block;\n  .dropdown_trigger {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    h2 {\n    }\n    ._carat {\n      margin-left: 5px;\n      margin-right: 5px;\n    }\n    svg {\n      width: 18px;\n      height: 18px;\n      opacity: 0.33;\n      path {\n      }\n    }\n    &:hover svg {\n      opacity: 1;\n    }\n  }\n\n  .dropdown_main {\n    position: absolute;\n    left: calc(100% - 37px);\n    top: calc(100% + 4px);\n    background: white;\n    color: #1e1e1e;\n    min-width: 260px;\n    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);\n    border-radius: 2px;\n    z-index: 150;\n    display: none;\n    &:after {\n      content: '';\n      display: block;\n      position: absolute;\n      bottom: 100%;\n      left: 16px;\n      border-bottom: 12px solid white;\n      border-left: 12px solid transparent;\n      border-right: 12px solid transparent;\n      pointer-events: none;\n    }\n    /*&:before {\n        content: \"\";\n        position: absolute;\n        transform: rotate(45deg);\n        width: 16.97px;\n        height: 16.97px;\n        top: -8px;\n        left: 20px;\n        z-index: -1;\n        box-shadow: 0px 0px 10px 0px red;\n    }*/\n    & .dropdown_main_header {\n      padding: 15px 16px;\n      font-size: 14px;\n      font-weight: 600;\n      opacity: 0.5;\n    }\n    & ul {\n      & li {\n        position: relative;\n        border-top: 1px solid rgba(247, 247, 247, 1);\n        a {\n          padding: 14px 18px;\n          cursor: pointer;\n          display: flex;\n          align-items: center;\n\n          svg {\n            position: absolute;\n            top: calc(50% - 9px);\n            left: 18px;\n            width: 18px;\n            height: 18px;\n            opacity: 0.5;\n          }\n          & span {\n            flex: 1;\n            font-size: 14px;\n            font-weight: 800;\n            -webkit-font-smoothing: antialiased;\n            opacity: 0.9;\n          }\n          & ._carat {\n            transform: rotate(-90deg);\n          }\n          &:hover {\n            background: ", ";\n            svg {\n              opacity: 1;\n              & path {\n                fill: ", ";\n              }\n            }\n          }\n        }\n        &.icon > a {\n          padding-left: 48px;\n        }\n        &.active > a {\n          background: ", ";\n          color: ", ";\n          padding-left: 48px;\n          > svg {\n            & path {\n              fill: ", ";\n            }\n            opacity: 1;\n          }\n        }\n        ul {\n          position: absolute;\n          left: 100%;\n          top: 0;\n          min-width: 260px;\n          box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);\n          border-radius: 2px;\n          background: white;\n          color: #1e1e1e;\n          display: none;\n          max-height: 600px;\n          overflow-y: auto;\n        }\n        &:hover ul {\n          display: block;\n        }\n      }\n    }\n  }\n  .dropdown_mainable {\n    position: relative;\n    cursor: pointer;\n    &.active .dropdown_main {\n      display: block;\n    }\n  }\n\n  ", "\n\n  ", "\n\n    ", "\n"])), function (props) {
  return (0, _polished.transparentize)(0.95, props.theme.color_primary);
}, function (props) {
  return props.theme.color_primary;
}, function (props) {
  return (0, _polished.transparentize)(0.9, props.theme.color_primary);
}, function (props) {
  return props.theme.color_primary;
}, function (props) {
  return props.theme.color_primary;
}, function (_ref) {
  var show = _ref.show;
  return show && "\n    .dropdown_trigger {\n      svg {\n        opacity: 1;\n      }\n    }\n    .dropdown_main {\n      display:block;\n    }\n    ";
}, function (_ref2) {
  var position = _ref2.position;
  return position == 'left' && "\n.dropdown_main {\n  left: initial;\n  right: 5px;\n  &:after {\n    left:initial;\n    right:16px;\n  }\n}\n    ";
}, function (_ref3) {
  var position = _ref3.position,
      type = _ref3.type;
  return position == 'left' && type == 'dots' && "\n    .dropdown_main {\n      right: -19px;\n    }\n    ";
});

exports.SwiftDropdownStyled = SwiftDropdownStyled;