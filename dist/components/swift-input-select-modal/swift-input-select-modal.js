"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _swiftLabel = _interopRequireDefault(require("../swift-label/swift-label"));

var _swiftInputSelectModalStyle = require("./swift-input-select-modal-style");

var _classnames = _interopRequireDefault(require("classnames"));

var _reactBootstrap = require("react-bootstrap");

var _swiftForm = _interopRequireDefault(require("../swift-form"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SwiftSelectModal = function SwiftSelectModal(props) {
  var _props$search;

  //console.log('SwiftSelect: props', props)
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var handleSubmit = function handleSubmit(vals) {
    console.log('submit', vals);
    var val = vals.values ? vals.values.map(function (elem) {
      return elem.value;
    }).join(',') : null;
    console.log(val);
    props.onChange(val);
    setModal(null);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_swiftInputSelectModalStyle.SwiftSelectModalStyled, {
      error: props.error && props.helperText ? true : false,
      entered: props.value && props.value.length > 0 ? true : false,
      children: [(props.label || !Object.keys(props).includes('label') || props.link) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "swift_input_select_label",
        children: [props.label ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
          children: props.label
        }) : !Object.keys(props).includes('label') ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
          children: props.name
        }) : null, props.link && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "swift_input_select_label_link",
          children: props.link.onClick ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
            onClick: props.link.onClick,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: props.link.label || 'View'
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
            href: props.link.url ? props.link.url : props.link,
            target: "_blank",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: props.link.label || 'View'
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
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "",
        style: {
          cursor: 'pointer'
        },
        onClick: function onClick() {
          return setModal(true);
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          disabled: true,
          value: props.value && props.value.length > 0 ? props.value.split(',').length + ' ' + props.itemName + (props.value.split(',').length > 1 ? 's' : '') : '',
          placeholder: 'Select...'
        })
      }), props.sublabel ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
        style: {
          marginTop: '8px',
          opacity: 0.4
        },
        children: props.sublabel
      }) : null, props.error && props.helperText ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
        error: true,
        children: props.helperText
      }) : null]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Modal, {
      show: modal,
      onHide: function onHide() {
        return setModal(null);
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Header, {
        closeButton: true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Modal.Title, {
          children: ["Select ", props.label]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Modal.Body, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftForm.default, {
          onSubmit: handleSubmit,
          fields: [{
            key: 'values',
            type: 'collection',
            label: props.label,
            value: props.value && props.value.length > 0 ? props.value.split(',').map(function (elem) {
              return {
                value: elem
              };
            }) : [],
            schema: [{
              name: 'value',
              type: 'text',
              label: '',
              search: (_props$search = props.search) !== null && _props$search !== void 0 ? _props$search : undefined,
              placeholder: 'Search ' + props.label + '...'
            }]
          }, {
            key: 'submit',
            type: 'submit',
            label: 'Submit'
          }]
        })
      })]
    })]
  });
};

SwiftSelectModal.defaultProps = {
  emptyValue: true,
  itemName: 'item'
};
var _default = SwiftSelectModal;
exports.default = _default;