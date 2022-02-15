"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _swiftInputCodeStyle = require("./swift-input-code-style");

var _swiftLabel = _interopRequireDefault(require("../swift-label/swift-label"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactSimpleCodeEditor = _interopRequireDefault(require("react-simple-code-editor"));

var _prismCore = require("prismjs/components/prism-core");

require("prismjs/components/prism-clike");

require("prismjs/components/prism-javascript");

var _jsBeautify = require("js-beautify");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SwiftInputCode = function SwiftInputCode(props) {
  var innerRef = (0, _react.useRef)();
  console.log('SIC - props', props);

  var _useState = (0, _react.useState)(props.value),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];
  /*useEffect(() => {
    if (innerRef) {
      if (props.autoFocus) innerRef?.current?.focus()
    }
  }, [])*/

  /*useEffect(() => {
    console.log('value', value)
    //if (props.value.length) formatContent(props.value)
  }, [value])*/


  (0, _react.useEffect)(function () {
    //console.log('SwiftInputCode - props.value changed', props.value.length)
    setValue(props.value);
  }, [props.value]);

  var formatContent = function formatContent(strVal) {
    //console.log('formatContent running', strVal)
    if (props.format == 'json' && strVal.length > 0) {
      strVal = JSON.stringify(JSON.parse(strVal), null, 2);
      props.onChange(strVal);
    } else if (props.format == 'html' && strVal.length > 0) {
      strVal = (0, _jsBeautify.html_beautify)(strVal);
      props.onChange(strVal);
    } else if (props.format == 'css' && strVal.length > 0) {
      strVal = (0, _jsBeautify.css_beautify)(strVal, {});
      props.onChange(strVal);
    } else {
      props.onChange(strVal);
    }
    /*if (!props.format || !strVal || !strVal.length) {
      props.onChange(strVal)
    } else if (props.format == 'html') {
      strVal = prettier.format(strVal, {
        parser: 'html',
        plugins: [html],
      })
      props.onChange(strVal)
    } else if (props.format == 'css') {
      strVal = prettier.format(strVal, {
        parser: 'css',
        plugins: [postcss],
      })
      props.onChange(strVal)
    } else if (props.format == 'json') {
      //const strValPretty = prettier.format(strVal, {
      //  semi: false,
      //  parser: "babel",
      //  plugins: [babel],
      //})
      strVal = JSON.stringify(JSON.parse(strVal), null, 2)
      props.onChange(strVal)
    }*/


    setValue(strVal);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_swiftInputCodeStyle.SwiftInputCodeStyled, {
    error: props.error && props.helperText ? true : false,
    entered: value.length > 0 ? true : false,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      children: props.label
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "textarea",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSimpleCodeEditor.default, {
        value: value,
        onValueChange: setValue,
        ref: innerRef,
        onBlur: function onBlur(e) {
          return formatContent(e.target.value);
        },
        highlight: function highlight(code) {
          return (0, _prismCore.highlight)(code, _prismCore.languages.js);
        },
        padding: 10,
        style: {
          minHeight: 320,
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12
        }
      })
    }), props.error && props.helperText ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      error: true,
      children: props.helperText
    }) : null]
  });
};

var _default = SwiftInputCode;
exports.default = _default;