"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _swiftInputCheckboxStyle = require("./swift-input-checkbox-style");

var _swiftLabel = _interopRequireDefault(require("../swift-label/swift-label"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwiftInputCheckbox = function SwiftInputCheckbox(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputCheckboxStyle.SwiftInputCheckboxStyled, {
    hasLabel: props.label ? true : false,
    onClick: function onClick(e) {
      if (props.handleClick) props.handleClick();
    },
    className: "swift_input_checkbox",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
      htmlFor: props.name,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        type: "checkbox",
        id: props.name,
        checked: props.checked,
        onChange: props.onChange,
        onClick: function onClick(e) {
          e.stopPropagation();
        },
        disabled: props.disabled
      }, props.key), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "swift_input_checkbox_box",
        onClick: function onClick(e) {
          e.stopPropagation();
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
            d: "M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z"
          })
        })
      }), props.label && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "swift_input_checkbox_label",
        children: props.label
      })]
    })
  });
};

var _default = SwiftInputCheckbox;
exports.default = _default;