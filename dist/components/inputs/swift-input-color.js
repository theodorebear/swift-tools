"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _swiftInputColorStyle = require("./swift-input-color-style");

var _swiftLabel = _interopRequireDefault(require("./swift-label"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactColor = require("react-color");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SwiftInputColor = function SwiftInputColor(props) {
  var innerRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      showPicker = _useState2[0],
      setShowPicker = _useState2[1];

  var handleClick = function handleClick() {
    setShowPicker(!showPicker);
  };

  var handleClose = function handleClose() {
    setShowPicker(false);
  };

  (0, _react.useEffect)(function () {
    var _innerRef$current;

    if (props.autoFocus && innerRef) innerRef === null || innerRef === void 0 ? void 0 : (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 ? void 0 : _innerRef$current.focus();
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_swiftInputColorStyle.SwiftInputColorStyled, {
    error: props.error && props.helperText ? true : false,
    entered: props.value.length > 0 ? true : false,
    showPicker: showPicker,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      children: props.label
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "swift_input_color_window",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "swift_input_color_swatch",
        onClick: handleClick,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "swift_input_color_swatch_view",
          style: {
            background: props.value
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: props.value
        })]
      }), props.value && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "swift_input_color_clear",
        onClick: function onClick() {
          return props.onChange('');
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
            d: "M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
          })
        })
      })]
    }), showPicker ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "swift_input_color_swatch_picker",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "swift_input_color_swatch_picker_cover",
        onClick: handleClose
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactColor.SketchPicker, {
        color: props.value,
        onChange: function onChange(val) {
          return props.onChange(val.hex);
        }
      })]
    }) : null, props.error && props.helperText ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      error: true,
      children: props.helperText
    }) : null]
  });
};

var _default = SwiftInputColor;
exports.default = _default;