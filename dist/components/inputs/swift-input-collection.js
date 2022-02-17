"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireWildcard(require("react"));

var _swiftInputCollectionStyle = require("./swift-input-collection-style");

var _swiftLabel = _interopRequireDefault(require("./swift-label"));

var _swiftInputText = _interopRequireDefault(require("./swift-input-text"));

var _swiftSelect = _interopRequireDefault(require("./swift-select"));

var _grid = require("../grid");

var _swiftInputCheckbox = _interopRequireDefault(require("./swift-input-checkbox"));

var _swiftDrop = _interopRequireDefault(require("./swift-drop"));

var _swiftInputColor = _interopRequireDefault(require("./swift-input-color"));

var _swiftInputHidden = _interopRequireDefault(require("./swift-input-hidden"));

var _swiftInputSelectModal = _interopRequireDefault(require("./swift-input-select-modal"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var SwiftInputCollection = function SwiftInputCollection(props) {
  var value = props.value,
      placeholders = props.placeholders,
      schema = props.schema,
      allowCreate = props.allowCreate,
      allowRemove = props.allowRemove;
  /*useEffect(() => {
  	console.log("collection value", value)
  }, [value])*/

  var lastInputRef = (0, _react.useRef)(null);

  var handleDelete = function handleDelete(index) {
    props.onChange([].concat((0, _toConsumableArray2.default)(value.slice(0, index)), (0, _toConsumableArray2.default)(value.slice(index + 1))));
  };

  var handleChange = function handleChange(index, fieldName, valNew) {
    //console.log("change", index, fieldName, valNew)
    if (index == value.length) {
      // this is the last one, create / add to list!
      props.onChange([].concat((0, _toConsumableArray2.default)(value), [(0, _defineProperty2.default)({}, fieldName, valNew)])); //elemIndex == 0 ? valNew : "", elemIndex == 1 ? valNew : ""]

      return;
    }

    props.onChange([].concat((0, _toConsumableArray2.default)(value.slice(0, index)), [_objectSpread(_objectSpread({}, value[index]), {}, (0, _defineProperty2.default)({}, fieldName, valNew))], (0, _toConsumableArray2.default)(value.slice(index + 1))));
  }; //console.log("colection,value", value)


  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_swiftInputCollectionStyle.SwiftInputCollectionStyled, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
        children: props.label
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "swift_input_collection_items",
      children: (allowCreate ? [].concat((0, _toConsumableArray2.default)(value), [[]]) : value).map(function (elem, i) {
        //console.log("elem", elem)
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_grid.Flex, {
          wrap: "wrap",
          gridColumnGap: elem.length !== 0 || schema.length > 1 ? 3 : 0,
          justify: "space-between",
          ref: i == Object.keys(value).length - 1 ? lastInputRef : null,
          children: [elem.length !== 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "swift_input_collection_item_index",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
              children: ["#", i + 1]
            })
          }), schema.filter(function (schemaItem) {
            if (!schemaItem.gate) return true;

            if (elem && Object.keys(elem).includes(schemaItem.gate.field)) {
              if (elem[schemaItem.gate.field] != schemaItem.gate.value) {
                return false;
              } else {
                return true;
              }
            }
          }).map(function (schemaItem, schemaIndex) {
            var _elem;

            if (schemaItem['type'] == 'hidden') {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputHidden.default, {
                type: "hidden",
                name: schemaItem['name'] || schemaIndex,
                value: elem[schemaItem['name'] || schemaIndex] || ''
              }, schemaIndex);
            } //console.log("schemaaaa", schemaItem, schemaItem["name"] || schemaIndex)


            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_grid.Box, {
              flex: "1",
              wrap: "wrap",
              children: schemaItem['type'] == 'checkbox' ?
              /*#__PURE__*/
              // doesnt work yet..
              (0, _jsxRuntime.jsx)(_swiftInputCheckbox.default, _objectSpread(_objectSpread({}, schemaItem), {}, {
                label: schemaItem['label'] || schemaItem['name'],
                name: (schemaItem['name'] || schemaIndex) + i,
                onChange: function onChange(e) {
                  handleChange(i, schemaItem['name'] || schemaIndex, elem[schemaItem['name'] || schemaIndex] && elem[schemaItem['name'] || schemaIndex] != 0 ? 0 : 1);
                },
                checked: elem[schemaItem['name'] || schemaIndex] == 1
              })) : schemaItem['type'] == 'select' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftSelect.default, _objectSpread(_objectSpread({}, schemaItem), {}, {
                label: schemaItem['label'] || schemaItem['name'],
                values: schemaItem.values || [],
                value: elem[schemaItem['name'] || schemaIndex] || '',
                name: schemaItem['name'] || schemaIndex,
                onChange: function onChange(e) {
                  handleChange(i, schemaItem['name'] || schemaIndex, e.currentTarget.value);
                }
              })) : schemaItem['type'] == 'color' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputColor.default, _objectSpread(_objectSpread({}, schemaItem), {}, {
                label: schemaItem['label'] || schemaItem['name'],
                name: schemaItem['name'] || schemaIndex,
                value: elem[schemaItem['name'] || schemaIndex] || '',
                onChange: function onChange(val) {
                  handleChange(i, schemaItem['name'] || schemaIndex, val);
                }
              })) : schemaItem['type'] == 'file' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftDrop.default, _objectSpread(_objectSpread({}, schemaItem), {}, {
                accept: null,
                maxSize: 10000000,
                status: elem[schemaItem['name'] || schemaIndex] ? 'success' : 'accept',
                files: (_elem = elem[schemaItem['name'] || schemaIndex]) !== null && _elem !== void 0 ? _elem : [],
                setFiles: function setFiles(vals) {
                  handleChange(i, schemaItem['name'] || schemaIndex, vals);
                }
              })) : schemaItem['type'] == 'select-modal' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputSelectModal.default, _objectSpread(_objectSpread({}, schemaItem), {}, {
                name: schemaItem['name'] || schemaIndex,
                onChange: function onChange(valNew) {
                  return handleChange(i, schemaItem['name'] || schemaIndex, valNew);
                },
                value: elem[schemaItem['name'] || schemaIndex] || ''
              })) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputText.default, _objectSpread(_objectSpread({}, schemaItem), {}, {
                //placeholder={placeholders && placeholders[0]}
                search: schemaItem['search'] || undefined,
                name: schemaItem['name'] || schemaIndex,
                onChange: function onChange(valNew) {
                  return handleChange(i, schemaItem['name'] || schemaIndex, valNew);
                },
                value: elem[schemaItem['name'] || schemaIndex] || ''
              }))
            }, schemaIndex);
          }), allowRemove && /*#__PURE__*/(0, _jsxRuntime.jsx)(_grid.Flex, {
            direction: "column",
            justify: "center",
            className: "swift_input_collection_item_actions",
            children: elem.length !== 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_grid.Flex, {
              className: "swift_input_collection_item_delete",
              flex: "",
              justify: "center",
              onClick: function onClick() {
                return handleDelete(i);
              },
              style: {
                opacity: i == value.length ? '0' : ''
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
            })
          })]
        }, 'collection-' + i);
      })
    }), props.error && props.helperText ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      error: true,
      children: props.helperText
    }) : null]
  });
};

SwiftInputCollection.defaultProps = {
  allowCreate: true,
  allowRemove: true
};
var _default = SwiftInputCollection;
exports.default = _default;