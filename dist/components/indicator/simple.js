"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var dotPulse = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t0% {\n\t\ttransform: scale(0);\n\t\topacity: 0;\n\t}\n\t25% {\n\t\ttransform: scale(0);\n\t\topacity: 0.1;\n\t}\n\t50% {\n\t\ttransform: scale(0.1);\n\t\topacity: 0.3;\n\t}\n\t75% {\n\t\ttransform: scale(0.5);\n\t\topacity: 0.5;\n\t}\n\t100% {\n\t\ttransform: scale(1);\n\t\topacity: 0;\n\t}\n"])));

var IndicatorSimpleStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\talign-items: center;\n\t.indicator_simple_dot {\n\t\tposition: relative;\n\t\tmargin-right: 8px;\n\t\twidth: 12px;\n\t\theight: 12px;\n\t\t.pulse {\n\t\t\twidth: 12px;\n\t\t\theight: 12px;\n\t\t\tborder: 6px solid ", ";\n\t\t\tborder-radius: 50%;\n\t\t\tz-index: 10;\n\t\t\tposition: absolute;\n\t\t}\n\n\t\t.dot {\n\t\t\tborder: 10px solid ", ";\n\t\t\tbackground: transparent;\n\t\t\tborder-radius: 50%;\n\t\t\theight: 30px;\n\t\t\twidth: 30px;\n\t\t\tanimation: ", " 3s ease-out;\n\t\t\tanimation-iteration-count: infinite;\n\t\t\tposition: absolute;\n\t\t\ttop: 50%;\n\t\t\tleft: 50%;\n\t\t\tmargin-left: -15px;\n\t\t\tmargin-top: -15px;\n\t\t\tz-index: 1;\n\t\t\topacity: 0;\n\t\t}\n\t}\n\tspan {\n\t\tdisplay: block;\n\t\tfont-size: 16px;\n\t\tfont-weight: 600;\n\t\topacity: 0.75;\n\t\t-webkit-font-smoothing: antialiased;\n\t}\n"])), function (props) {
  return props.color;
}, function (props) {
  return props.color;
}, dotPulse);

var IndicatorSimple = function IndicatorSimple(props) {
  var _props$style;

  var color = '#24cc29';

  if (props.color == 'red') {
    color = 'red';
  } else if (props.color == 'gray') {
    color = '#666666';
  } else {
    color = props.color;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(IndicatorSimpleStyled, {
    color: color,
    className: props.className,
    style: (_props$style = props.style) !== null && _props$style !== void 0 ? _props$style : undefined,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "indicator_simple_dot",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "dot"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pulse"
      })]
    }), props.name && props.name.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: props.name
    })]
  });
};

IndicatorSimple.defaultProps = {
  color: 'gray',
  name: null,
  className: null
};
var _default = IndicatorSimple;
exports.default = _default;