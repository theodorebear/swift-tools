"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _swiftLabel = _interopRequireDefault(require("../swift-label/swift-label"));

var _swiftMultiselectStyle = require("./swift-multiselect-style");

var _swiftButton = _interopRequireDefault(require("../swift-button/swift-button"));

var _classnames = _interopRequireDefault(require("classnames"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

Array.prototype.immutableMove = function (old_index, new_index) {
  var copy = Object.assign([], this);

  if (new_index >= copy.length) {
    var k = new_index - copy.length;

    while (k-- + 1) {
      copy.push(undefined);
    }
  }

  copy.splice(new_index, 0, copy.splice(old_index, 1)[0]);
  return copy;
};

var SwiftMultiSelect = function SwiftMultiSelect(props) {
  var values = props.values,
      labelAvailable = props.labelAvailable,
      label = props.label,
      error = props.error,
      onChange = props.onChange;

  var _useState = (0, _react.useState)(values.filter(function (val) {
    return !props.value.includes(val.val);
  })),
      _useState2 = _slicedToArray(_useState, 2),
      valuesAvailable = _useState2[0],
      setValuesAvailable = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      valuesAvailableSelected = _useState4[0],
      setValuesAvailableSelected = _useState4[1];

  var _useState5 = (0, _react.useState)(values.filter(function (val) {
    return props.value.includes(val.val);
  }).sort(function (a, b) {
    return props.value.indexOf(a.val) > props.value.indexOf(b.val) ? 1 : -1;
  })),
      _useState6 = _slicedToArray(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      valueSelected = _useState8[0],
      setValueSelected = _useState8[1];

  (0, _react.useEffect)(function () {
    onChange(value.map(function (e) {
      return e.val;
    }));
  }, [value]);

  var handleRightChange = function handleRightChange(e) {
    var value = Array.from(e.target.selectedOptions, function (option) {
      return option.value;
    });
    setValueSelected(value);
    setValuesAvailableSelected([]);
  };

  var handleAvailableChange = function handleAvailableChange(e) {
    var value = Array.from(e.target.selectedOptions, function (option) {
      return option.value;
    });
    setValuesAvailableSelected(value);
    setValueSelected([]);
  };

  var handleAvailableButtonClick = function handleAvailableButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();
    var newValuesAvailable = [].concat(_toConsumableArray(valuesAvailable), _toConsumableArray(values.filter(function (val) {
      return valueSelected.includes(val.val);
    })));
    setValuesAvailable(newValuesAvailable);
    var newValue = value.filter(function (val) {
      return !valueSelected.includes(val.val);
    });
    setValue(newValue); //setValuesAvailable()

    setValuesAvailableSelected([].concat(_toConsumableArray(valuesAvailableSelected), _toConsumableArray(valueSelected)));
    setValueSelected([]);
  };

  var handleRightButtonClick = function handleRightButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();
    var newValue = [].concat(_toConsumableArray(value), _toConsumableArray(values.filter(function (val) {
      return valuesAvailableSelected.includes(val.val);
    })));
    setValue(newValue);
    var newValuesAvailable = valuesAvailable.filter(function (val) {
      return !valuesAvailableSelected.includes(val.val);
    });
    setValuesAvailable(newValuesAvailable); //setValue()

    setValueSelected([].concat(_toConsumableArray(valueSelected), _toConsumableArray(valuesAvailableSelected)));
    setValuesAvailableSelected([]);
  };

  var handleUpButtonClick = function handleUpButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();
    var index = value.findIndex(function (val) {
      return val.val == valueSelected[0];
    }); //console.log("i", index)
    //console.log(value)
    //console.log(value.immutableMove(index, index - 1))

    setValue(value.immutableMove(index, index - 1));
  };

  var handleDownButtonClick = function handleDownButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();
    var index = value.findIndex(function (val) {
      return val.val == valueSelected[0];
    });
    setValue(value.immutableMove(index, index + 1));
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftMultiselectStyle.SwiftMultiSelectStyled, {
    error: error && props.helperText ? true : false,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "swift-multiselect-window",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "swift-multiselect-side",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
          children: labelAvailable
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
          multiple: true,
          onChange: handleAvailableChange,
          value: valuesAvailableSelected,
          children: valuesAvailable.map(function (val, i) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: val['val'],
              children: val['label']
            }, 'swift-multiselect-' + labelAvailable + i);
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "swift-multiselect-center",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftButton.default, {
          disabled: !valuesAvailableSelected.length,
          onClick: handleRightButtonClick,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
              d: "M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftButton.default, {
          disabled: !valueSelected.length,
          onClick: handleAvailableButtonClick,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
              d: "M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"
            })
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "swift-multiselect-side",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
          children: label
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
          multiple: true,
          onChange: handleRightChange,
          value: valueSelected,
          children: value.map(function (val, i) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: val['val'],
              children: val['label']
            }, 'swift-multiselect-' + label + i);
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "swift-multiselect-right",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftButton.default, {
          disabled: valueSelected.length != 1 || value.length == 1 || valueSelected[0] == value[0],
          onClick: handleUpButtonClick,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
              d: "M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftButton.default, {
          disabled: valueSelected.length != 1 || value.length == 1 || valueSelected[0] == value[value.length - 1],
          onClick: handleDownButtonClick,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
              d: "M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"
            })
          })
        })]
      })]
    })
  });
};

var _default = SwiftMultiSelect;
exports.default = _default;