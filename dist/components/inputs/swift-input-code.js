"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _swiftInputCodeStyle = require("./swift-input-code-style");

var _swiftLabel = _interopRequireDefault(require("./swift-label"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactSimpleCodeEditor = _interopRequireDefault(require("react-simple-code-editor"));

var _prismCore = require("prismjs/components/prism-core");

require("prismjs/components/prism-clike");

require("prismjs/components/prism-javascript");

var _jsBeautify = require("js-beautify");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//import "prismjs/themes/prism.css";
//import 'prism-themes/themes/prism-synthwave84.css';
//import prettier from 'prettier/standalone'
//import postcss from 'prettier/parser-postcss'
//import html from 'prettier/parser-html'
//import babel from 'prettier/parser-babel'
//import prettify from 'html-prettify'
//import cssbeautify from 'cssbeautify'
var SwiftInputCode = function SwiftInputCode(props) {
  var innerRef = (0, _react.useRef)();
  console.log('SIC - props', props);

  var _useState = (0, _react.useState)(props.value),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
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