"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftButtonStyled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SwiftButtonStyled = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n  ", "\n\n  \n"])), function (props) {
  return props.theme == "default" ? "\n    position: relative;\n      a {\n        padding: 9px 18px;\n        font-weight: 700;\n        font-size: 15px;\n        line-height: 32px;\n        border-radius: 2px;\n        border: 2px solid black;\n        outline: none;\n        -webkit-font-smoothing: antialiased;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n\n        ".concat(props.fillType == "filled" ? "\n            color: ".concat((0, _polished.readableColor)(props.buttonColor), ";\n            background: ").concat(props.buttonColor, ";\n            border-color: ").concat(props.buttonColor, ";\n            i {\n              svg {\n                fill: ").concat((0, _polished.readableColor)(props.buttonColor), ";\n              }\n            }\n            &:hover {\n              background:").concat((0, _polished.darken)(0.05, props.buttonColor), ";\n            }\n          ") : props.fillType == "light" ? "\n            color: ".concat(props.buttonColor, ";\n            background: ").concat((0, _polished.transparentize)(0.7, props.buttonColor), ";\n            border-color: ").concat(props.buttonColor, ";\n            i {\n              svg {\n                fill: ").concat(props.buttonColor, ";\n              }\n            }\n            &:hover {\n              color:").concat((0, _polished.readableColor)(props.buttonColor), ";\n              background:").concat(props.buttonColor, ";\n              svg {\n                fill: ").concat((0, _polished.readableColor)(props.buttonColor), ";\n              }\n            }\n          ") : null, "\n\n        ").concat(props.flip && "\n          flex-direction:row-reverse;\n          i ~ span {\n            margin-right: 8px;\n          }\n          svg ~ span {\n            margin-right: 8px;\n          }\n          .swift_button_icon ~ span {\n            margin-right: 8px;\n          }\n        ", "\n\n        svg {\n          display: block;\n          width: 18px;\n          height: 18px;\n          fill: white;\n        }\n        span {\n          font-weight: inherit;\n          white-space: nowrap;\n          display: block;\n          line-height: inherit;\n        }\n\n        ").concat(!props.flip && "\n        i ~ span {\n          margin-left: 8px;\n        }\n        svg ~ span {\n          margin-left: 8px;\n        }\n        .swift_button_icon ~ span {\n          margin-left: 8px;\n        }\n        ", "\n\n\n        span {\n          ~ i,\n          .swift_button_icon {\n            margin-left: 8px;\n          }\n        }\n\n        ").concat(props.size == 'small' && "\n          padding: 8px 12px;\n          font-size:13px;\n          line-height: 15px;\n          svg {\n            width:15px;\n            height:15px;\n          }\n        ", "\n      }\n\n      &.disabled {\n        cursor: not-allowed !important;\n        a {\n          background: #bbb;\n          color: #444;\n          border-top-left-radius: 0;\n          border-top-right-radius: 0;\n          pointer-events: none;\n          cursor: not-allowed !important;\n          border-color: #bbb;\n          svg {\n            opacity: 0.25;\n            path {\n              fill: #444;\n            }\n          }\n        }\n      }\n\n      .loader {\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        right: 0px;\n        & > span {\n          display: block;\n          width: 100%;\n        }\n      }\n\n      ").concat(props.inlineForm && props.theme != "minimal" && "\n        @media screen and (min-width: 48em) {\n          width:100%;\n          margin-top:24px;\n          /*text-align:center;\n          justify-content: center;*/\n        }\n      ", "\n\n      ").concat(props.width == 'full' && "\n        width:100%;\n        text-align:center;\n        justify-content: center;\n        a {\n          justify-content:center;\n        }\n      ", "\n  ") : props.theme == "minimal" ? "\n    width:100%;\n    display:block;\n    @media screen and (min-width: 48em) {\n      width:inherit;\n      display:inherit;\n      a {\n        border-top-right-radius:2px;\n        border-bottom-right-radius:4px;\n      }\n    }\n    a {\n      flex:1;\n      width:100%;\n      border:1px solid #000;\n      padding: 10px 18px 11px;\n      display:flex;\n      align-items:center;\n      justify-content:center;\n      font-weight: 700;\n      font-size: 15px;\n      line-height: 32px;\n\n      \n\n      color: ".concat((0, _polished.readableColor)(props.buttonColor), ";\n      background: ").concat(props.buttonColor, ";\n      border-color: ").concat(props.buttonColor, ";\n      i {\n        svg {\n          fill: ").concat((0, _polished.readableColor)(props.buttonColor), ";\n        }\n      }\n      &:hover {\n        background:").concat((0, _polished.darken)(0.05, props.buttonColor), ";\n      }\n      i {\n        display:none;\n        margin-right:8px;\n        svg {\n          width:16px;\n          height:16px;\n        }\n      }\n    }\n\n  ") : props.theme == "none" ? "\n    a {\n      width:100%;\n      border:1px solid #000;\n      display:flex;\n      align-items:center;\n      justify-content:center;\n      padding:8px 16px;\n\n      color: ".concat((0, _polished.readableColor)(props.buttonColor), ";\n      background: ").concat(props.buttonColor, ";\n      border-color: ").concat(props.buttonColor, ";\n      i {\n        svg {\n          fill: ").concat((0, _polished.readableColor)(props.buttonColor), ";\n        }\n      }\n      &:hover {\n        background:").concat((0, _polished.darken)(0.05, props.buttonColor), ";\n      }\n      i {\n        display:none;\n        margin-right:8px;\n        svg {\n          width:16px;\n          height:16px;\n        }\n      }\n    }\n  ") : "";
});

exports.SwiftButtonStyled = SwiftButtonStyled;