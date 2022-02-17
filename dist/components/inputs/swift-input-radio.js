"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _swiftInputRadioStyle = require("./swift-input-radio-style");

var _swiftLabel = _interopRequireDefault(require("./swift-label"));

var _jsxRuntime = require("react/jsx-runtime");

var SwiftInputRadio = function SwiftInputRadio(props) {
  //console.log("SwiftInputRadio - props", props)
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_swiftInputRadioStyle.SwiftInputRadiosStyled, {
      children: [props.label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
        children: props.label
      }), props.sublabel && /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
        type: "sublabel",
        children: props.sublabel
      }), props.values.map(function (elem) {
        var _elem$disabled;

        if (!elem.value && elem.name && elem.value !== '') {
          elem.value = elem.name.toLowerCase().replace(/  +/g, ' ').replace(/ /g, '-').replace(/[^\w-]+/g, '');
        }

        if (elem.type && elem.type == 'label') {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
            style: {
              marginTop: '6px'
            },
            children: elem.name
          });
        } //console.log("radio - value", elem)


        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputRadioStyle.SwiftInputRadioStyled, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
            htmlFor: props.name + '-' + elem.value,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "radio",
              name: props.name,
              disabled: (_elem$disabled = elem.disabled) !== null && _elem$disabled !== void 0 ? _elem$disabled : false,
              id: props.name + '-' + elem.value,
              checked: props.value === elem.value ? true : false,
              onChange: function onChange(e) {
                return props.onChange(elem.value, e);
              }
            }, props.name), elem.name && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: elem.name
            }), elem.link && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "swift_input_radio_label_link",
              children: elem.link.onClick ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                onClick: elem.link.onClick,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  children: elem.link.label || 'View'
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
                    d: "M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"
                  })
                })]
              }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                target: "_blank",
                href: elem.link.url ? elem.link.url : elem.link,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  children: elem.link.label || 'View'
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
                    d: "M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"
                  })
                })]
              })
            })]
          })
        }, props.name + '-' + elem.value);
      }), props.error && props.helperText ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
        error: true,
        children: props.helperText
      }) : null]
    })
  });
};

var _default = SwiftInputRadio;
exports.default = _default;