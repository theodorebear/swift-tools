"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _swiftInputTextselectStyle = require("./swift-input-textselect-style");

var _swiftLabel = _interopRequireDefault(require("./swift-label"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SwiftInputTextSelect = function SwiftInputTextSelect(props) {
  var innerRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      focused = _useState2[0],
      setFocused = _useState2[1];

  (0, _react.useEffect)(function () {
    var _innerRef$current;

    if (props.autoFocus && innerRef) innerRef === null || innerRef === void 0 ? void 0 : (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 ? void 0 : _innerRef$current.focus();
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_swiftInputTextselectStyle.SwiftInputTextSelectStyled, {
    error: props.error && props.helperText ? true : false,
    entered: props.value ? true : false,
    valuesCount: props.values ? props.values.length : 0,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      children: props.label
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "swift_input_textselect_input_wrapper",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        type: props.type ? props.type : 'text',
        name: props.name,
        ref: innerRef // autoFocus={props.autoFocus}
        ,
        disabled: props.disabled,
        value: props.value,
        onChange: function onChange(e) {
          return props.onChange(e.currentTarget.value);
        },
        autoCorrect: "off" // spellCheck={props.autoCorrect === false ? 'off' : 'on'}
        ,
        autoCapitalize: "off",
        autoComplete: "off",
        onFocus: function onFocus() {
          return setFocused(true);
        },
        onBlur: function onBlur() {
          return setFocused(false);
        }
      }), focused && props.values && props.values.length ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "swift_input_textselect_input_values",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
          children: props.values.map(function (elem, i) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
              onMouseDown: function onMouseDown(e) {
                e.stopPropagation();
                e.preventDefault();
                props.onChange(elem['value']);
                innerRef.current.blur();
              },
              onClick: function onClick(e) {
                e.stopPropagation();
                e.preventDefault();
              },
              children: elem['name']
            }, i);
          })
        })
      }) : null, props.mask && !focused && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "swift_input_textselect_input_mask",
        children: props.value || props.value === 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
          children: props.mask == 'financial' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNumberFormat.default, {
            value: props.value,
            displayType: 'text',
            thousandSeparator: true,
            prefix: props.mask_prefix || '$',
            suffix: props.mask_suffix
          }) : props.mask == 'number' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNumberFormat.default, {
            value: props.value,
            displayType: 'text',
            thousandSeparator: true,
            prefix: props.mask_prefix,
            suffix: props.mask_suffix
          }) : ''
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
          children: props.mask_message_none
        })
      }), props.clearable && props.value ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        onClick: function onClick() {
          return props.onChange('');
        },
        className: "swift_input_textselect_input_clear",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
            d: "M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"
          })
        })
      }) : null]
    }), props.error && props.helperText ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      error: true,
      children: props.helperText
    }) : null]
  });
};

var _default = SwiftInputTextSelect;
exports.default = _default;