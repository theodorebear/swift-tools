"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BarLoader = _interopRequireDefault(require("react-spinners/BarLoader"));

var _swiftButtonStyle = require("./swift-button-style");

var _polished = require("polished");

var _swiftIcon = _interopRequireDefault(require("../swift-icon/swift-icon"));

var _simple = _interopRequireDefault(require("../indicator/simple"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SwiftButtonContent = function SwiftButtonContent(props) {
  //console.log("SPC props", props);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [props.loading ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "loader",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BarLoader.default, {})
    }) : null, props.disabled && props.disabledPrompt ? props.disabledPrompt : props.icon && props.children ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftIcon.default, {
        i: props.icon
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: props.children
      })]
    }) : props.icon ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftIcon.default, {
      i: props.icon
    }) : props.indicator && props.children ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_simple.default, {
        color: props.indicator
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: props.children
      })]
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: props.children
    })]
  });
};

var SwiftButton = function SwiftButton(props) {
  var _props$flip, _props$size, _props$inlineForm, _props$width, _props$variant, _props$fillType, _props$color, _props$disabled, _props$loading, _props$style, _props$indicator, _props$iconPos, _props$shallow, _props$target, _props$download;

  (0, _react.useEffect)(function () {}, [props]);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftButtonStyle.SwiftButtonStyled, {
      className: (0, _classnames.default)(props.disabled ? 'disabled' : null, props.className || null, 'swift-button'),
      flip: (_props$flip = props.flip) !== null && _props$flip !== void 0 ? _props$flip : null,
      type: props.type,
      size: (_props$size = props.size) !== null && _props$size !== void 0 ? _props$size : null,
      inlineForm: (_props$inlineForm = props.inlineForm) !== null && _props$inlineForm !== void 0 ? _props$inlineForm : null,
      width: (_props$width = props.width) !== null && _props$width !== void 0 ? _props$width : null,
      variant: (_props$variant = props.variant) !== null && _props$variant !== void 0 ? _props$variant : null,
      fillType: (_props$fillType = props.fillType) !== null && _props$fillType !== void 0 ? _props$fillType : 'filled',
      buttonColor: (_props$color = props.color) !== null && _props$color !== void 0 ? _props$color : '#5ab89e',
      disabled: (_props$disabled = props.disabled) !== null && _props$disabled !== void 0 ? _props$disabled : null,
      isLoading: (_props$loading = props.loading) !== null && _props$loading !== void 0 ? _props$loading : undefined,
      style: (_props$style = props.style) !== null && _props$style !== void 0 ? _props$style : undefined,
      indicator: (_props$indicator = props.indicator) !== null && _props$indicator !== void 0 ? _props$indicator : undefined,
      iconPos: (_props$iconPos = props.iconPos) !== null && _props$iconPos !== void 0 ? _props$iconPos : undefined,
      onClick: props.onClick ? props.onClick : props.modal ? function () {
        return setModal(props.modal);
      } : undefined,
      theme: props.theme,
      children: props.href ? /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: props.href,
        shallow: (_props$shallow = props.shallow) !== null && _props$shallow !== void 0 ? _props$shallow : false,
        target: (_props$target = props.target) !== null && _props$target !== void 0 ? _props$target : undefined,
        download: (_props$download = props.download) !== null && _props$download !== void 0 ? _props$download : undefined,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SwiftButtonContent, _objectSpread({}, props))
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SwiftButtonContent, _objectSpread({}, props))
      })
    })
  });
};

SwiftButton.defaultProps = {
  theme: "default"
};
var _default = SwiftButton;
exports.default = _default;