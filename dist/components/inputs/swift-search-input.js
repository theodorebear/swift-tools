"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SwiftSearchInputStyled = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n\tborder: 2px solid\n\t\t", ";\n\tbackground: ", ";\n\tcolor: #1e1e1e;\n\n\tborder: 2px solid ", ";\n\tbackground: #f2f2f2;\n\tcolor: #1e1e1e;\n\n\ttransition: all 0.12s ease-out;\n\tborder-radius: 4px;\n\twidth: 100%;\n\tform {\n\t\tdisplay: flex;\n\t\tinput {\n\t\t\tflex: 1;\n\t\t\tbackground: transparent;\n\t\t\tmargin: 0;\n\t\t\tpadding: 10px 16px 11px;\n\t\t\tborder: 0;\n\t\t\toutline: none;\n\t\t\twidth: 100%;\n\t\t\tfont-size: 16px;\n\t\t}\n\t\tbutton {\n\t\t\tbackground: transparent;\n\t\t\tborder: 0;\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\topacity: 0.5;\n\t\t\tpadding: 0 6px;\n\t\t\tcursor: pointer;\n\t\t\tsvg {\n\t\t\t\twidth: 14px;\n\t\t\t\theight: 14px;\n\t\t\t\tdisplay: block;\n\t\t\t\tpath {\n\t\t\t\t\tfill: #1e1e1e;\n\t\t\t\t}\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\t}\n"])), function (props) {
  return (0, _polished.readableColor)(props.theme.color_body_bg, (0, _polished.darken)(0.15, props.theme.color_body_bg), (0, _polished.lighten)(0.15, props.theme.color_body_bg), false);
}, function (props) {
  return (0, _polished.readableColor)(props.theme.color_body_bg, (0, _polished.darken)(0.05, props.theme.color_body_bg), (0, _polished.lighten)(0.05, props.theme.color_body_bg), false);
}, function (props) {
  return (0, _polished.darken)(0.15, '#fff');
});

var SwiftSearchInput = function SwiftSearchInput(props) {
  var value = props.value,
      onSubmit = props.onSubmit,
      timeout = props.timeout,
      placeholder = props.placeholder,
      autoFocus = props.autoFocus;
  var innerRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var _innerRef$current;

    if (autoFocus && innerRef) innerRef === null || innerRef === void 0 ? void 0 : (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 ? void 0 : _innerRef$current.focus();
  }, []);
  var form = (0, _react.useRef)(null);
  var initialViewLoad = (0, _react.useRef)(true);

  var _useState = (0, _react.useState)(value),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      submitTimeout = _useState4[0],
      setSubmitTimeout = _useState4[1];

  (0, _react.useEffect)(function () {
    if (initialViewLoad.current) {
      initialViewLoad.current = false;
      return;
    }

    clearTimeout(submitTimeout);
    setSubmitTimeout(setTimeout(function (e) {
      handleSubmit(e);
    }, val == '' ? 0 : timeout !== null && timeout !== void 0 ? timeout : 2000));
  }, [val]);

  var handleSubmit = function handleSubmit(e) {
    if (e) e.preventDefault();
    clearTimeout(submitTimeout);
    onSubmit(val);
  };

  var handleChange = function handleChange(e) {
    var valNew = e.target.value;
    setVal(valNew);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SwiftSearchInputStyled, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
      onSubmit: handleSubmit,
      ref: form,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        ref: innerRef,
        type: "text",
        name: "phrase",
        placeholder: placeholder ? placeholder : 'Search...',
        value: val,
        onChange: function onChange(e) {
          return handleChange(e);
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        type: "submit",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
            d: "M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"
          })
        })
      })]
    })
  });
};

SwiftSearchInput.defaultProps = {
  autoFocus: false
};
var _default = SwiftSearchInput;
exports.default = _default;