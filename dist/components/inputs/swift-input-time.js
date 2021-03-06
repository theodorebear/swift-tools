"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _swiftInputTimeStyle = require("./swift-input-time-style");

var _swiftLabel = _interopRequireDefault(require("./swift-label"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactMoment = _interopRequireDefault(require("react-moment"));

var _moment = _interopRequireDefault(require("moment"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//import TimePicker from "rc-time-picker"
//import "rc-time-picker/assets/index.css"
var SwiftInputTime = function SwiftInputTime(props) {
  //console.log("sit - props", props)
  //const [open, setOpen] = useState(false)
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_swiftInputTimeStyle.SwiftInputTimeStyled, {
    error: props.error && props.helperText ? true : false,
    entered: props.value.length > 0 ? true : false,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      children: props.label
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "swift-input-date-moment-wrapper",
      children: [props.value ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "swift-input-date-moment",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMoment.default, {
            format: "h:mm a",
            parse: "H:mm:s",
            date: props.value
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "swift-input-date-moment-clear",
          onClick: function onClick(e) {
            e.preventDefault();
            e.stopPropagation();
            props.onChange('');
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
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "swift-input-date-moment"
      }), "TimePicker was here, removed because it didnt work with RemixJS!"]
    }), props.error && props.helperText ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      error: true,
      children: props.helperText
    }) : null]
  });
};

var _default = SwiftInputTime;
exports.default = _default;