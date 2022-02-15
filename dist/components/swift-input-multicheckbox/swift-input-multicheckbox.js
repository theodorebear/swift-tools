"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _swiftInputMulticheckboxStyle = require("./swift-input-multicheckbox-style");

var _swiftLabel = _interopRequireDefault(require("../swift-label/swift-label"));

var _swiftInputCheckbox = _interopRequireDefault(require("../swift-input-checkbox/swift-input-checkbox"));

var _grid = require("../grid");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var SwiftInputMultiCheckbox = function SwiftInputMultiCheckbox(props) {
  var value = props.value,
      values = props.values,
      name = props.name,
      _onChange = props.onChange,
      key = props.key,
      cols = props.cols; // console.log('SwiftInputMultiCheckbox ----')
  // console.log('SwiftInputMultiCheckbox - values', values)
  // console.log('SwiftInputMultiCheckbox - ', props, ' = ', value)

  var everyChecked = true;

  if (value == null) {
    everyChecked = false;
  } else if (value != null) {
    values.map(function (elem) {
      if (!elem.value.split(',').every(function (v) {
        return value.split(',').includes(v);
      })) {
        everyChecked = false;
      }
    });
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_swiftInputMulticheckboxStyle.SwiftInputMultiCheckboxStyled, {
    count: props.values ? props.values.length : 0,
    cols: cols,
    border: props.border,
    valuesInline: props.valuesInline,
    children: [props.label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      children: props.label
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "swift_input_multicheckbox_window",
      children: [props.selectAll && /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputCheckbox.default, {
        label: 'Select All',
        name: name,
        onChange: function onChange(e) {
          if (e.currentTarget.checked) {
            _onChange(null);
          } else {
            _onChange('');
          }
        },
        checked: value == null || everyChecked ? true : false,
        disabled: false
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "swift_input_multicheckbox_values",
        children: values.map(function (elem, i) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputCheckbox.default, {
              label: elem.name,
              value: elem.value,
              onChange: function onChange(e) {
                var valueSplit = value ? value.split(',') : [];
                var valueAll = [];
                values.forEach(function (v) {
                  valueAll = [].concat(_toConsumableArray(valueAll), _toConsumableArray(v.value.split(',')));
                });
                if (value == null) valueSplit = valueAll; //console.log('vsplit - ', valueSplit)
                //console.log('valueAll - ', valueAll)

                if (e.currentTarget.checked) {
                  // add value to value
                  var valueNew = [].concat(_toConsumableArray(valueSplit), _toConsumableArray(elem.value.split(','))).join(',');

                  if (valueNew.split(',').length == valueAll.length) {
                    valueNew = null;
                  }
                } else {
                  // remove this value from value
                  var valueNew = _toConsumableArray(valueSplit.filter(function (v) {
                    return !elem.value.split(',').includes(v);
                  })).join(','); // if (valueNew == '') {
                  // 	valueNew = null;
                  // }

                } //console.log('vnew - ', valueNew)


                props.onChange(valueNew);
              },
              checked: value == null || value && elem.value.split(',').every(function (v) {
                return value.split(',').includes(v);
              }) ? true : false,
              disabled: false
            })
          }, i)
          /*false && value.includes(elem.value) ? (
          		<div className="swift_input_multicheckbox_children">
          			<SwiftInputCheckbox
          				label="All Subtypes"
          				value=""
          				checked={value == '' || value.includes(elem.value) ? true : false}
          				disabled={false}
          			/>
          			{elem.children.map((subElem) => (
          				<SwiftInputCheckbox
          					label={subElem.name}
          					value={subElem.value}
          					checked={value == '' || value.includes(elem.value) ? true : false}
          					disabled={false}
          				/>
          			))}
          		</div>
          	) : null*/
          ;
        })
      })]
    }), props.error && props.helperText ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      error: true,
      children: props.helperText
    }) : null]
  });
};

SwiftInputMultiCheckbox.defaultProps = {
  cols: 1,
  border: true,
  selectAll: true,
  valuesInline: false
};
var _default = SwiftInputMultiCheckbox;
exports.default = _default;