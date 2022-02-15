"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _swiftFormStyle = require("./swift-form-style");

var _formik = require("formik");

var _classnames = _interopRequireDefault(require("classnames"));

var _swiftDrop = _interopRequireDefault(require("./swift-drop/swift-drop"));

var _swiftInputText = _interopRequireDefault(require("./swift-input-text/swift-input-text"));

var _swiftInputTextselect = _interopRequireDefault(require("./swift-input-textselect/swift-input-textselect"));

var _swiftInputColor = _interopRequireDefault(require("./swift-input-color/swift-input-color"));

var _swiftInputDate = _interopRequireDefault(require("./swift-input-date/swift-input-date"));

var _swiftInputCollection = _interopRequireDefault(require("./swift-input-collection/swift-input-collection"));

var _swiftInputTime = _interopRequireDefault(require("./swift-input-time/swift-input-time"));

var _swiftInputSlider = _interopRequireDefault(require("./swift-input-slider/swift-input-slider"));

var _swiftInputTextChip = _interopRequireDefault(require("./swift-input-text-chip/swift-input-text-chip"));

var _swiftInputCode = _interopRequireDefault(require("./swift-input-code/swift-input-code"));

var _swiftCreditCard = _interopRequireDefault(require("./swift-credit-card"));

var _swiftButton = _interopRequireDefault(require("./swift-button/swift-button"));

var _swiftInputSelectModal = _interopRequireDefault(require("./swift-input-select-modal/swift-input-select-modal"));

var _swiftLabel = _interopRequireDefault(require("./swift-label/swift-label"));

var _swiftDivider = _interopRequireDefault(require("./swiftDivider"));

var _swiftInputHidden = _interopRequireDefault(require("./swift-input-hidden/swift-input-hidden"));

var _swiftInputCheckbox = _interopRequireDefault(require("./swift-input-checkbox/swift-input-checkbox"));

var _swiftInputCheckboxGroup = _interopRequireDefault(require("./swift-input-checkbox-group/swift-input-checkbox-group"));

var _swiftInputRadio = _interopRequireDefault(require("./swift-input-radio/swift-input-radio"));

var _swiftInputMulticheckbox = _interopRequireDefault(require("./swift-input-multicheckbox/swift-input-multicheckbox"));

var _swiftInputTextarea = _interopRequireDefault(require("./swift-input-textarea/swift-input-textarea"));

var _swiftSelect = _interopRequireDefault(require("./swift-select/swift-select"));

var _swiftMultiselect = _interopRequireDefault(require("./swift-multiselect/swift-multiselect"));

var _swiftSubtitle = _interopRequireDefault(require("./swift-subtitle/swift-subtitle"));

var _swiftTitle = _interopRequireDefault(require("./swift-title/swift-title"));

var _swiftSelectEnum = _interopRequireDefault(require("./swift-select-enum/swift-select-enum"));

var _swiftLine = _interopRequireDefault(require("./swift-line/swift-line"));

var _swiftMultibutton = _interopRequireDefault(require("./swift-multibutton/swift-multibutton"));

var _grid = require("./grid");

var _cardValidator = _interopRequireDefault(require("card-validator"));

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

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var utilizeFocus = function utilizeFocus() {
  var ref = /*#__PURE__*/_react.default.createRef();

  var setFocus = function setFocus() {
    ref.current && ref.current.focus();
  };

  return {
    setFocus: setFocus,
    ref: ref
  };
};

var SwiftFormItem = function SwiftFormItem(props) {
  var _item$disabled, _item$handleClick, _item$disabled2, _values$item$key, _item$disabled3, _item$min, _item$max, _item$step, _item$valueType, _values$item$key2, _item$emptyValue, _item$emptyLabel, _item$emptyValue2, _item$emptyLabel2, _item$emptyValue3, _item$emptyLabel3, _values$item$key3, _item$disabled4, _item$color, _item$icon, _item$onClick, _values$item$key4, _item$suggestions, _values$item$key5, _item$disabled5, _item$placeholder, _item$autoFocus, _values$item$key6, _item$disabled6, _item$height, _item$placeholder2, _item$autoFocus2, _values$item$key7, _item$disabled7, _item$autoFocus3, _values$item$key8, _item$disabled8, _item$autoFocus4, _values$item$key9, _item$disabled9, _item$autoFocus5, _values$item$key10, _item$disabled10, _item$autoFocus6, _values$item$key11, _item$disabled11, _item$autoFocus7, _item$clearable, _values$item$key12;

  var item = props.item,
      index = props.index,
      fields = props.fields,
      values = props.values,
      touched = props.touched,
      errors = props.errors,
      setFieldValue = props.setFieldValue,
      setValues = props.setValues,
      isSubmitting = props.isSubmitting,
      inline = props.inline,
      handleBlur = props.handleBlur,
      step = props.step,
      setStep = props.setStep,
      steps = props.steps,
      handleChange = props.handleChange,
      setBraintreeTokenize = props.setBraintreeTokenize,
      theme = props.theme,
      myRefs = props.myRefs,
      submitRef = props.submitRef;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: item.type === 'line' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLine.default, _objectSpread(_objectSpread({}, item), {}, {
      color: item.color || undefined
    })) : item.type === 'title' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftTitle.default, {
      theme: theme,
      children: item.label
    }) : item.type === 'subtitle' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftSubtitle.default, {
      theme: theme,
      children: item.label
    }) : item.type === 'jsx' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: item.jsx
    }) : item.type === 'checkbox' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputCheckbox.default, {
      label: item.label,
      name: item.key,
      onChange: function onChange(e) {
        if (item.onChange) {
          item.onChange(!values[item.key]);
        }

        setFieldValue(item.key, values[item.key] == 1 ? 0 : 1);
      },
      checked: values[item.key] == 1 ? true : false,
      disabled: (_item$disabled = item.disabled) !== null && _item$disabled !== void 0 ? _item$disabled : undefined,
      handleClick: (_item$handleClick = item.handleClick) !== null && _item$handleClick !== void 0 ? _item$handleClick : undefined
    }) : item.type === 'checkbox-group' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputCheckboxGroup.default, {
      label: item.label,
      name: item.key,
      onChange: function onChange(vals) {
        if (item.onChange) {
          item.onChange(vals);
        }

        setFieldValue(item.key, vals);
      },
      value: values[item.key] || [],
      checked: values[item.key] ? true : false,
      disabled: (_item$disabled2 = item.disabled) !== null && _item$disabled2 !== void 0 ? _item$disabled2 : undefined
    }) : item.type === 'radio' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputRadio.default, _objectSpread(_objectSpread({}, item), {}, {
      name: item.key,
      value: (_values$item$key = values[item.key]) !== null && _values$item$key !== void 0 ? _values$item$key : '',
      values: item.values || [],
      onChange: function onChange(val, e) {
        if (item.onChange) {
          item.onChange(val);
        }

        setFieldValue(item.key, val);
      },
      helperText: touched[item.key] && errors[item.key],
      error: Boolean(touched[item.key] && errors[item.key])
    })) : item.type === 'label' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      theme: theme,
      children: item.label
    }) : item.type === 'divider' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftDivider.default, {}) : item.type === 'multiselect' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftMultiselect.default, {
      values: item.values || [],
      labelAvailable: item.labelAvailable,
      label: item.label,
      value: item.value,
      name: item.key,
      helperText: touched[item.key] && errors[item.key],
      error: Boolean(touched[item.key] && errors[item.key]),
      onChange: function onChange(e) {
        setFieldValue(item.key, e);
      }
    }) : item.type === 'slider' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputSlider.default, {
      label: item.label,
      name: item.key,
      value: values[item.key] || item.min || 0,
      disabled: (_item$disabled3 = item.disabled) !== null && _item$disabled3 !== void 0 ? _item$disabled3 : undefined,
      min: (_item$min = item.min) !== null && _item$min !== void 0 ? _item$min : undefined,
      max: (_item$max = item.max) !== null && _item$max !== void 0 ? _item$max : undefined,
      step: (_item$step = item.step) !== null && _item$step !== void 0 ? _item$step : undefined,
      onBlur: function onBlur(e) {
        handleBlur(e);

        if (item.onBlur) {
          item.onBlur(e);
        }
      },
      valueType: (_item$valueType = item.valueType) !== null && _item$valueType !== void 0 ? _item$valueType : null,
      helperText: touched[item.key] && errors[item.key],
      error: Boolean(touched[item.key] && errors[item.key]),
      onChange: function onChange(val) {
        if (item.onChange) {
          item.onChange(val);
        }

        setFieldValue(item.key, val);
      }
    }) : item.type === 'multicheckbox' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputMulticheckbox.default, _objectSpread(_objectSpread({}, item), {}, {
      values: item.values ? item.values.map(function (val) {
        return _objectSpread(_objectSpread({}, val), {}, {
          value: String(val.value)
        });
      }) : [],
      value: (_values$item$key2 = values[item.key]) !== null && _values$item$key2 !== void 0 ? _values$item$key2 : null,
      name: item.key,
      helperText: touched[item.key] && errors[item.key],
      error: Boolean(touched[item.key] && errors[item.key]),
      onChange: function onChange(e) {
        //console.log('SwiftInputMultiCheckbox - changed', e)
        //console.log("SwiftInputMultiCheckbox - changing!", e)
        if (item.onChange) {
          item.onChange(e);
        }

        setFieldValue(item.key, e);
      }
    })) : item.type === 'multibutton' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftMultibutton.default, _objectSpread(_objectSpread({}, item), {}, {
      value: String(values[item.key]),
      values: item.values ? item.values.map(function (val) {
        return _objectSpread(_objectSpread({}, val), {}, {
          value: String(val.value)
        });
      }) : [],
      onChange: function onChange(val) {
        console.log('multibutton changing!', val);

        if (item.onChange) {
          item.onChange(val);
        }

        setFieldValue(item.key, val);
      },
      helperText: touched[item.key] && errors[item.key],
      error: Boolean(touched[item.key] && errors[item.key])
    })) : item.type === 'select' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftSelect.default, _objectSpread(_objectSpread({}, item), {}, {
      label: item.label,
      values: item.values || [],
      value: values[item.key],
      name: item.key,
      emptyValue: (_item$emptyValue = item.emptyValue) !== null && _item$emptyValue !== void 0 ? _item$emptyValue : true,
      emptyLabel: (_item$emptyLabel = item.emptyLabel) !== null && _item$emptyLabel !== void 0 ? _item$emptyLabel : undefined,
      helperText: touched[item.key] && errors[item.key],
      error: Boolean(touched[item.key] && errors[item.key]),
      onChange: function onChange(e) {
        if (item.onChange) {
          item.onChange(e.currentTarget.value);
        }

        setFieldValue(item.key, e.currentTarget.value);
      },
      theme: theme
    })) : item.type === 'select-modal' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputSelectModal.default, _objectSpread(_objectSpread({}, item), {}, {
      values: item.values || [],
      value: values[item.key],
      name: item.key,
      emptyValue: (_item$emptyValue2 = item.emptyValue) !== null && _item$emptyValue2 !== void 0 ? _item$emptyValue2 : true,
      emptyLabel: (_item$emptyLabel2 = item.emptyLabel) !== null && _item$emptyLabel2 !== void 0 ? _item$emptyLabel2 : undefined,
      helperText: touched[item.key] && errors[item.key],
      error: Boolean(touched[item.key] && errors[item.key]),
      onChange: function onChange(val) {
        if (item.onChange) {
          item.onChange(val);
        }

        setFieldValue(item.key, val);
      }
    })) : item.type === 'select-enum' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftSelectEnum.default, {
      label: item.label,
      values: item.values || [],
      value: values[item.key],
      name: item.key,
      emptyValue: (_item$emptyValue3 = item.emptyValue) !== null && _item$emptyValue3 !== void 0 ? _item$emptyValue3 : true,
      emptyLabel: (_item$emptyLabel3 = item.emptyLabel) !== null && _item$emptyLabel3 !== void 0 ? _item$emptyLabel3 : undefined,
      helperText: touched[item.key] && errors[item.key],
      error: Boolean(touched[item.key] && errors[item.key]),
      onChange: function onChange(val) {
        if (item.onChange) {
          item.onChange(val);
        }

        setFieldValue(item.key, val);
      }
    }) : item.type === 'file' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftDrop.default, _objectSpread(_objectSpread({}, item), {}, {
      accept: null,
      status: values[item.key] ? 'success' : 'accept' //onChange={(vals) => {
      //  if (item.onChange) {
      //    item.onChange(vals)
      //  }
      //}}
      ,
      files: (_values$item$key3 = values[item.key]) !== null && _values$item$key3 !== void 0 ? _values$item$key3 : [],
      setFiles: function setFiles(vals) {
        //console.log("drop setting files", vals)
        setFieldValue(item.key, vals);

        if (item.onChange) {
          item.onChange(vals);
        }
      }
    })) : item.type === 'submit' || item.type === 'button' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "swift-form-element",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftButton.default, _objectSpread(_objectSpread({}, item), {}, {
        type: item.type || 'submit',
        disabled: (_item$disabled4 = item.disabled) !== null && _item$disabled4 !== void 0 ? _item$disabled4 : isSubmitting == true,
        loading: isSubmitting == true && item.type === 'submit' ? true : false,
        inlineForm: inline && fields.filter(function (f) {
          return f.type != 'submit' && f.label && f.label.length > 0;
        }).length > 0 ? true : false,
        theme: theme,
        width: item.width || item.gridColSpan ? 'full' : '' //color={item.type === "submit" && isSubmitting == "success" ? "green" : item.color || "primary"}
        //icon={item.type === "submit" && isSubmitting == "success" ? "check" : item.icon ?? undefined}
        ,
        color: (_item$color = item.color) !== null && _item$color !== void 0 ? _item$color : undefined,
        icon: (_item$icon = item.icon) !== null && _item$icon !== void 0 ? _item$icon : undefined,
        fillType: item.fillType || undefined,
        onClick: item.action && item.action == 'back' && step > 1 ? function () {
          return setStep(step - 1);
        } : (_item$onClick = item.onClick) !== null && _item$onClick !== void 0 ? _item$onClick : undefined,
        children: item.label
      }))
    }) : item.type === 'text-chip' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputTextChip.default, {
      label: item.label,
      value: (_values$item$key4 = values[item.key]) !== null && _values$item$key4 !== void 0 ? _values$item$key4 : '',
      suggestions: (_item$suggestions = item.suggestions) !== null && _item$suggestions !== void 0 ? _item$suggestions : [],
      onChange: function onChange(val) {
        //console.log("text-chip updated!", val)
        setFieldValue(item.key, val);
      }
    }) : item.type === 'password' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputText.default, {
      fullWidth: true,
      variant: "filled",
      label: item.label,
      name: item.key,
      value: (_values$item$key5 = values[item.key]) !== null && _values$item$key5 !== void 0 ? _values$item$key5 : '',
      disabled: (_item$disabled5 = item.disabled) !== null && _item$disabled5 !== void 0 ? _item$disabled5 : undefined,
      onBlur: function onBlur(e) {
        handleBlur(e);

        if (item.onBlur) {
          item.onBlur(e);
        }
      },
      placeholder: (_item$placeholder = item.placeholder) !== null && _item$placeholder !== void 0 ? _item$placeholder : undefined,
      type: item.type,
      autoCorrect: item.autoCorrect,
      autoComplete: item.autoComplete,
      autoFocus: (_item$autoFocus = item.autoFocus) !== null && _item$autoFocus !== void 0 ? _item$autoFocus : undefined,
      helperText: touched[item.key] && errors[item.key],
      error: Boolean(touched[item.key] && errors[item.key]),
      onChange: function onChange(val) {
        if (item.onChange) {
          item.onChange(val);
        }

        setFieldValue(item.key, val);
      },
      theme: theme
    }) : item.type === 'textarea' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputTextarea.default, {
      fullWidth: true,
      variant: "filled",
      label: item.label,
      name: item.key,
      value: (_values$item$key6 = values[item.key]) !== null && _values$item$key6 !== void 0 ? _values$item$key6 : '',
      disabled: (_item$disabled6 = item.disabled) !== null && _item$disabled6 !== void 0 ? _item$disabled6 : undefined,
      onBlur: function onBlur(e) {
        handleBlur(e);

        if (item.onBlur) {
          item.onBlur(e);
        }
      },
      height: (_item$height = item.height) !== null && _item$height !== void 0 ? _item$height : undefined,
      placeholder: (_item$placeholder2 = item.placeholder) !== null && _item$placeholder2 !== void 0 ? _item$placeholder2 : undefined,
      autoCorrect: item.autoCorrect,
      autoComplete: item.autoComplete,
      autoFocus: (_item$autoFocus2 = item.autoFocus) !== null && _item$autoFocus2 !== void 0 ? _item$autoFocus2 : undefined,
      helperText: touched[item.key] && errors[item.key],
      error: Boolean(touched[item.key] && errors[item.key]),
      onChange: function onChange(val) {
        if (item.onChange) {
          item.onChange(val.currentTarget.value);
        }

        handleChange(val);
      }
    }) : item.type === 'collection' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputCollection.default, _objectSpread(_objectSpread({}, item), {}, {
      value: values[item.key] ? values[item.key].constructor.name == 'Object' ? Object.entries(values[item.key]) : values[item.key] : [],
      schema: item.schema || [{
        type: 'text',
        label: 'Label'
      }, {
        type: 'text',
        label: 'Value'
      }],
      label: item.label,
      onChange: function onChange(val) {
        if (item.onChange) {
          item.onChange(val);
        }

        setFieldValue(item.key, val);
      }
    })) : item.type === 'date' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputDate.default, {
      fullWidth: true,
      variant: "filled",
      label: item.label,
      name: item.key,
      value: (_values$item$key7 = values[item.key]) !== null && _values$item$key7 !== void 0 ? _values$item$key7 : '',
      disabled: (_item$disabled7 = item.disabled) !== null && _item$disabled7 !== void 0 ? _item$disabled7 : undefined,
      onBlur: function onBlur(e) {
        handleBlur(e);

        if (item.onBlur) {
          item.onBlur(e);
        }
      },
      autoCorrect: item.autoCorrect,
      autoComplete: item.autoComplete,
      autoFocus: (_item$autoFocus3 = item.autoFocus) !== null && _item$autoFocus3 !== void 0 ? _item$autoFocus3 : undefined,
      helperText: touched[item.key] && errors[item.key],
      error: Boolean(touched[item.key] && errors[item.key]),
      onChange: function onChange(val) {
        setFieldValue(item.key, val);
      }
    }) : item.type === 'time' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputTime.default, {
      fullWidth: true,
      variant: "filled",
      label: item.label,
      name: item.key,
      value: (_values$item$key8 = values[item.key]) !== null && _values$item$key8 !== void 0 ? _values$item$key8 : '',
      disabled: (_item$disabled8 = item.disabled) !== null && _item$disabled8 !== void 0 ? _item$disabled8 : undefined,
      onBlur: function onBlur(e) {
        handleBlur(e);

        if (item.onBlur) {
          item.onBlur(e);
        }
      },
      autoCorrect: item.autoCorrect,
      autoComplete: item.autoComplete,
      autoFocus: (_item$autoFocus4 = item.autoFocus) !== null && _item$autoFocus4 !== void 0 ? _item$autoFocus4 : undefined,
      helperText: touched[item.key] && errors[item.key],
      error: Boolean(touched[item.key] && errors[item.key]),
      onChange: function onChange(e) {
        setFieldValue(item.key, e);
      }
    }) : item.type === 'credit_card' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftCreditCard.default, {
      setBraintreeTokenize: setBraintreeTokenize
    }) : item.type === 'code' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputCode.default, {
      fullWidth: true,
      variant: "filled",
      label: item.label,
      name: item.key,
      value: (_values$item$key9 = values[item.key]) !== null && _values$item$key9 !== void 0 ? _values$item$key9 : '',
      disabled: (_item$disabled9 = item.disabled) !== null && _item$disabled9 !== void 0 ? _item$disabled9 : undefined,
      onBlur: function onBlur(e) {
        handleBlur(e);

        if (item.onBlur) {
          item.onBlur(e);
        }
      },
      format: item.format || false,
      autoCorrect: item.autoCorrect,
      autoComplete: item.autoComplete,
      autoFocus: (_item$autoFocus5 = item.autoFocus) !== null && _item$autoFocus5 !== void 0 ? _item$autoFocus5 : undefined,
      helperText: touched[item.key] && errors[item.key],
      error: Boolean(touched[item.key] && errors[item.key]) //onChange={handleChange}
      ,
      onChange: function onChange(e) {
        //console.log("code field updateing", e)
        if (item.onChange) {
          item.onChange(e);
        }

        setFieldValue(item.key, e);
      }
    }) : item.type === 'color' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputColor.default, {
      fullWidth: true,
      variant: "filled",
      label: item.label,
      name: item.key,
      value: (_values$item$key10 = values[item.key]) !== null && _values$item$key10 !== void 0 ? _values$item$key10 : '',
      disabled: (_item$disabled10 = item.disabled) !== null && _item$disabled10 !== void 0 ? _item$disabled10 : undefined,
      onBlur: function onBlur(e) {
        handleBlur(e);

        if (item.onBlur) {
          item.onBlur(e);
        }
      },
      autoCorrect: item.autoCorrect,
      autoComplete: item.autoComplete,
      autoFocus: (_item$autoFocus6 = item.autoFocus) !== null && _item$autoFocus6 !== void 0 ? _item$autoFocus6 : undefined,
      helperText: touched[item.key] && errors[item.key],
      error: Boolean(touched[item.key] && errors[item.key]),
      onChange: function onChange(val) {
        //console.log("COLOR CHANGE", val)
        setFieldValue(item.key, val);
      }
    }) : item.type === 'text_select' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputTextselect.default, {
      fullWidth: true,
      variant: "filled",
      label: item.label,
      name: item.key,
      value: (_values$item$key11 = values[item.key]) !== null && _values$item$key11 !== void 0 ? _values$item$key11 : '',
      disabled: (_item$disabled11 = item.disabled) !== null && _item$disabled11 !== void 0 ? _item$disabled11 : undefined,
      onBlur: function onBlur(e) {
        handleBlur(e);

        if (item.onBlur) {
          item.onBlur(e);
        }
      },
      values: item.values || [],
      autoCorrect: item.autoCorrect,
      autoComplete: item.autoComplete,
      autoFocus: (_item$autoFocus7 = item.autoFocus) !== null && _item$autoFocus7 !== void 0 ? _item$autoFocus7 : undefined,
      helperText: touched[item.key] && errors[item.key],
      error: Boolean(touched[item.key] && errors[item.key]),
      onChange: function onChange(e) {
        setFieldValue(item.key, e);
      },
      mask: item.mask,
      mask_message_none: item.mask_message_none,
      mask_prefix: item.mask_prefix,
      mask_suffix: item.mask_suffix,
      clearable: (_item$clearable = item.clearable) !== null && _item$clearable !== void 0 ? _item$clearable : undefined
    }) : item.type === 'text' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputText.default, _objectSpread(_objectSpread({}, item), {}, {
      index: index,
      name: item.key,
      value: (_values$item$key12 = values[item.key]) !== null && _values$item$key12 !== void 0 ? _values$item$key12 : '',
      onBlur: function onBlur(e) {
        handleBlur(e);

        if (item.onBlur) {
          item.onBlur(e);
        }
      },
      autoCorrect: item.autoCorrect && !item.search ? true : false,
      autoComplete: item.autoComplete && !item.search ? true : false,
      autoCapitalize: item.autoCapitalize && !item.search ? true : false,
      helperText: touched[item.key] && errors[item.key],
      error: Boolean(touched[item.key] && errors[item.key]),
      theme: theme //fieldRef={fieldRef}
      ,
      myRefs: myRefs,
      maskLen: item.mask === 'card_cvv' ? fields.filter(function (fieldOther) {
        return fieldOther.mask == 'card_number';
      }).length > 0 && values[fields.filter(function (fieldOther) {
        return fieldOther.mask == 'card_number';
      })[0].key] ? values[fields.filter(function (fieldOther) {
        return fieldOther.mask == 'card_number';
      })[0].key].cvv_len : 3 : undefined,
      onChange: function onChange(val) {
        if (item.onChange) {
          item.onChange(val);
        }

        if (_typeof(val) === 'object') {
          //console.log("PROPS - ONCHANGE - OBJECT, KEY = "+item.key+", VALUE = ",val)
          setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, item.key, val)));

          if (val.complete) {
            // autofocus next!!
            //consolecc_expitem, setting focus to next!")
            var fieldsInputs = fields.filter(function (elem) {
              return !['title', 'subtitle', 'label'].includes(elem.type);
            });
            var fieldsInputsCurrentIndex = fieldsInputs.findIndex(function (elem) {
              return elem.key == item.key;
            }); //console.log("fieldsInputs",fieldsInputs)
            //console.log("fieldsInputsCurrentIndex",fieldsInputsCurrentIndex)

            if (typeof fieldsInputs[fieldsInputsCurrentIndex + 1] !== 'undefined') {
              var fieldsIndexNext = fields.findIndex(function (elem) {
                return elem.key == fieldsInputs[fieldsInputsCurrentIndex + 1].key;
              }); //console.log("fieldsIndexNext",fieldsIndexNext)

              setTimeout(function () {
                if (fields[fieldsIndexNext].type == 'submit' && submitRef && submitRef.current) {// last form element is complete, next form element is submit button, do we autosubmit here? maybe make it an option.
                  // submitRef.current.submit()
                } else if (typeof myRefs.current[fieldsIndexNext] !== 'undefined' && typeof myRefs.current[fieldsIndexNext].focus !== 'undefined') {
                  myRefs.current[fieldsIndexNext].focus();
                }
              }, 75);
            } // var fieldRefIndex = fields.findIndex(elem => elem.key == 'card_expiration')
            // myRefs.current[fieldRefIndex].focus()

          }
        } else {
          setFieldValue(item.key, val);
          var valNew = val;
          fields.forEach(function (otherItem) {
            if (otherItem.chain && (otherItem.chain.field == item.key || otherItem.chain.fields && otherItem.chain.fields.includes(item.key))) {
              //console.log(valNew)
              if (!valNew || !valNew.length) {
                setFieldValue(otherItem.key, '');
              } else if (otherItem.chain.type == 'path') {
                var permalink = '/' + valNew.toLowerCase().replace(/  +/g, ' ').replace(/ /g, '-').replace(/[^\w-]+/g, '') + (otherItem.chain.append ? otherItem.chain.append : '');
                setFieldValue(otherItem.key, permalink != '/home' ? permalink : '/');
              } else if (otherItem.chain.type == 'permalink') {
                var _permalink = valNew.toLowerCase().replace(/  +/g, ' ').replace(/ /g, '-').replace(/[^\w-]+/g, '') + (otherItem.chain.append ? otherItem.chain.append : '');

                setFieldValue(otherItem.key, _permalink);
              } else if (otherItem.chain.type == 'component') {
                var _permalink2 = valNew.toLowerCase().replace(/  +/g, ' ').replace(/ /g, ' ').replace(/[^\w-]+/g, ' ').split(' ').map(function (word) {
                  return word ? word[0].toUpperCase() + word.substring(1) : null;
                }).join('') + (otherItem.chain.append ? otherItem.chain.append : '');

                setFieldValue(otherItem.key, _permalink2);
              } else if (otherItem.chain.type == 'multiply') {
                var _otherItem$chain$init;

                var valCalculated = (_otherItem$chain$init = otherItem.chain.initial) !== null && _otherItem$chain$init !== void 0 ? _otherItem$chain$init : 1;
                otherItem.chain.fields.forEach(function (field) {
                  var valCurrent = field == item.key ? valNew : values[field];
                  valCurrent = parseFloat(String(valCurrent).replace(/[^0-9\.]+/g, ''));

                  if (!valCurrent) {
                    valCalculated = 0;
                  } else {
                    valCalculated *= valCurrent;
                  }
                });
                setFieldValue(otherItem.key, Math.round(valCalculated));
              } else if (otherItem.chain.type == 'divide') {
                var _otherItem$chain$init2;

                //console.log('dividing')
                var valCalculated = (_otherItem$chain$init2 = otherItem.chain.initial) !== null && _otherItem$chain$init2 !== void 0 ? _otherItem$chain$init2 : 1;
                otherItem.chain.fields.forEach(function (field, i) {
                  var valCurrent = field == item.key ? valNew : values[field];
                  valCurrent = parseFloat(String(valCurrent).replace(/[^0-9\.]+/g, '')); //console.log('dividing by: ' + valCurrent)

                  if (!valCurrent) {
                    valCalculated = 0;
                  } else if (i == 0) {
                    valCalculated *= valCurrent; // numerator - first one is multiplied
                  } else {
                    valCalculated /= valCurrent;
                  }
                });
                setFieldValue(otherItem.key, Math.round(valCalculated));
              }
            }
          });
        }
      }
    })) : null
  });
};

var SwiftFormSubmitRef = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _useFormikContext = (0, _formik.useFormikContext)(),
      submitForm = _useFormikContext.submitForm;

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      submit: function submit() {
        submitForm();
      }
    };
  });
  return null;
});

var SwiftForm = function SwiftForm(props) {
  var _props$className;

  var fields = props.fields,
      steps = props.steps,
      easyFiles = props.easyFiles,
      inline = props.inline,
      submitRef = props.submitRef;

  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      step = _useState2[0],
      setStep = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      braintreeTokenize = _useState4[0],
      setBraintreeTokenize = _useState4[1];

  var initialValues = {};
  fields.forEach(function (item) {
    //if (item.keys) {
    //  initialValues[item.keys[0]] = item.value ?? ''
    //  initialValues[item.keys[1]] = item.value ?? ''
    //} else {
    if (['line', 'subtitle', 'title', 'label'].includes(item.type)) return;

    if (item.type == 'file' && !item.value) {
      initialValues[item.key] = [];
    } else if (item.type == 'file' && item.value.constructor.name != 'Array') {
      initialValues[item.key] = [{
        name: item.value.substring(item.value.lastIndexOf('/') + 1),
        url: item.value
      }];
    } else if (item.type == 'file' && item.value.constructor.name == 'Array') {
      initialValues[item.key] = item.value.map(function (val) {
        return _objectSpread(_objectSpread({}, val), {}, {
          name: val.url.substring(val.url.lastIndexOf('/') + 1)
        });
      }); // [{ name: item.value.substring(item.value.lastIndexOf('/') + 1), url: item.value }]
    } else if (item.type == 'multicheckbox') {
      var _item$value;

      initialValues[item.key] = item.value == null ? null : (_item$value = item.value) !== null && _item$value !== void 0 ? _item$value : '';
    } else {
      var _item$value2;

      initialValues[item.key] = (_item$value2 = item.value) !== null && _item$value2 !== void 0 ? _item$value2 : '';
    } //item['fieldRef'] = useRef(null)
    //}

  });
  var myRefs = (0, _react.useRef)([]); // useEffect(() => {
  //   // getting refs!
  //   fields.forEach(function (item,i) {
  //     fields[i].ref = utilizeFocus()
  //   })
  // })
  //console.log("SF - props ", props)

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftFormStyle.SwiftFormStyled, {
    style: props.style,
    className: (_props$className = props.className) !== null && _props$className !== void 0 ? _props$className : undefined,
    theme: props.theme,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Formik, {
      enableReinitialize: true,
      initialStatus: {
        type: null,
        text: null
      },
      initialValues: initialValues,
      onSubmit: function onSubmit(values, _ref) {
        var setStatus = _ref.setStatus,
            setSubmitting = _ref.setSubmitting,
            resetForm = _ref.resetForm;
        // reset status on every submit to recalculate status
        setStatus({
          type: null,
          text: null
        }); // multistep form and we're not completed yet

        if (steps > 1 && step < steps) {
          setStep(step + 1);
          setSubmitting(false);
          return;
        }

        var res = null;

        var valsSubmit = _objectSpread({}, values);

        if (easyFiles) {
          fields.filter(function (field) {
            return field.type == 'file';
          }).forEach(function (field) {
            if (valsSubmit[field.key] && valsSubmit[field.key].length > 0) {
              if (field.output_format && field.output_format == 'json') {
                valsSubmit[field.key] = JSON.stringify(valsSubmit[field.key][0]['output_json']);
              } else {
                valsSubmit[field.key] = valsSubmit[field.key][0]['url'];
              }
            } else {
              valsSubmit[field.key] = '';
            }
          });
        } // do we have a credit_card in this form? get nonce.


        if (braintreeTokenize) {
          try {
            Promise.resolve(braintreeTokenize()).then(function (btt) {
              try {
                console.log('swift-form.tsx - braintreeTokenize result', btt);

                if (btt.nonce) {
                  res = props.onSubmit(_objectSpread(_objectSpread({}, valsSubmit), {}, {
                    nonce: btt.nonce
                  }), {
                    setStatus: setStatus
                  });
                  Promise.resolve(res).then(function (data) {
                    if (typeof data === 'undefined' || data) {
                      // returned, this happens if NOT rerouting on success, set submitting false
                      setSubmitting(false);
                    }

                    if (data && data.error) {
                      // error on submitting form
                      setStatus({
                        type: 'error',
                        text: data.error
                      });
                    } else if (props.resetOnSubmit) {
                      // no error in onSubmit, reset form?
                      //alert("resetting form")
                      resetForm();
                    }
                  });
                } else {
                  setSubmitting(false);
                  setStatus({
                    type: 'error',
                    text: 'Failed to tokenize card details.'
                  });
                  return;
                }
              } catch (e) {
                setSubmitting(false);
                setStatus({
                  type: 'error',
                  text: e.message
                });
                return;
              }
            }).catch(function (e) {
              console.log('braintreeTokenize() error - ', e);
              setSubmitting(false);

              if (e.details && e.details.invalidFields) {
                setStatus({
                  type: 'error',
                  text: 'Payment fields invalid: ' + Object.keys(e.details.invalidFields).join(', ')
                });
              } else {
                setStatus({
                  type: 'error',
                  text: e.message
                });
              }

              return;
            });
          } catch (e) {
            setSubmitting(false);
            setStatus({
              type: 'error',
              text: e.message
            });
            return;
          }
        } else {
          // form without credit_card fields, submit as usual!
          res = props.onSubmit(valsSubmit, {
            setStatus: setStatus
          });
          Promise.resolve(res).then(function (data) {
            //console.log("formik complete!", data)
            if (data && data.error) {
              // error on submitting form
              setStatus({
                type: 'error',
                text: data.error
              });
            } else if (props.resetOnSubmit) {
              // no error in onSubmit, reset form?
              //alert("resetting form")
              resetForm();
            } // if (steps == 1 && (typeof data === "undefined" || data)) {
            //   // returned, this happens if NOT rerouting on success, set submitting false
            //   setSubmitting("success")
            //   setTimeout(function () {
            //     setSubmitting(false)
            //   }, 1000)
            // }


            if (typeof data === 'undefined' || data) {
              // returned, this happens if NOT rerouting on success, set submitting false
              setSubmitting(false);
            }
          });
        }
      },
      validate: function validate(values) {
        var errors = {};
        fields.forEach(function (item) {
          //console.log("validating?", item)
          // is field gated based on another field? skip.
          if (item.gate && (Object.keys(item.gate).includes('value') && values[item.gate.field] != item.gate.value || Object.keys(item.gate).includes('contains') && !(values[item.gate.field] || '').includes(item.gate.contains))) {
            return;
          } // is field part of a multi-step form? skip.


          if (steps > 1 && item.step && item.step != step) {
            return;
          }

          if (item.validate) {
            // console.log("validating item!", item)
            // console.log("validate: value: ", values[item.key])
            if (values[item.key] == '' && values[item.key] !== '0' && values[item.key] !== 0) {
              errors[item.key] = 'This field is required!';
            } else if (item.validate === 'email' && !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values[item.key]) && values[item.key] !== 'root') {
              errors[item.key] = 'An email address is required.';
            } else if (item.validate === 'phone' && !/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(values[item.key])) {
              errors[item.key] = 'Enter a valid phone number.';
            } else if (item.validate === 'zip_code' && !values[item.key].complete) {
              errors[item.key] = 'Enter a valid zip code.';
            } else if (item.validate === 'card_number' && !values[item.key].complete) {
              errors[item.key] = 'Enter a valid credit card number.';
            } else if (item.validate === 'card_expiration' && !values[item.key].complete) {
              errors[item.key] = 'Enter a valid expiration date.';
            } else if (item.validate === 'password') {
              if (values[item.key].length < 8) {
                errors[item.key] = 'Password must be 8+ chars.';
              } else if (!/[a-z]/.test(values[item.key])) {
                errors[item.key] = 'Password must have a lowercase letter.';
              } else if (!/[A-Z]/.test(values[item.key])) {
                errors[item.key] = 'Password must have an uppercase letter.';
              } else if (!/[~`!#$@%^&*+=\-[\]\\';,/{}|\\":<>?]/g.test(values[item.key])) {
                errors[item.key] = 'Password must have a symbol.';
              }
            } else if (item.validate === 'password_confirm') {
              fields.forEach(function (i) {
                if (i.validate === 'password' && values[i.key] !== values[item.key]) {
                  errors[item.key] = 'Passwords must match.';
                }
              });
            } else if (item.validate === 'ach_routing' && values[item.key].replace(/[\W_]+/g, '').length != 9) {
              errors[item.key] = 'Enter a 9-digit routing number.';
            } else if (item.validate === 'ach_account' && !/^([a-zA-Z0-9 _-]+)$/.test(String(values[item.key]).toLowerCase())) {
              errors[item.key] = 'Enter a valid account number.';
            } else if (item.validate === 'card_cvv' && !values[item.key].complete) {
              errors[item.key] = 'Enter a valid CVV.';
            }
          }
        }); // minimal theme - would like to set global status here, not sure if possible.
        // if(errors.length > 0) {
        //   setStatus({
        //     type: 'error',
        //     text: "Please check for errors.",
        //   });
        // }

        return errors;
      },
      children: function children(_ref2) {
        var _props$gridGap;

        var values = _ref2.values,
            status = _ref2.status,
            errors = _ref2.errors,
            touched = _ref2.touched,
            handleBlur = _ref2.handleBlur,
            handleChange = _ref2.handleChange,
            handleSubmit = _ref2.handleSubmit,
            isSubmitting = _ref2.isSubmitting,
            setFieldValue = _ref2.setFieldValue,
            setValues = _ref2.setValues,
            setFieldTouched = _ref2.setFieldTouched,
            theme = _ref2.theme;
        var formRows = props.gridRows || 1;
        var formCols = inline ? fields.length : props.gridCols || 4;
        var formGap = props.theme == 'minimal' ? 0 : (_props$gridGap = props.gridGap) !== null && _props$gridGap !== void 0 ? _props$gridGap : 3;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
          onSubmit: handleSubmit,
          autoComplete: "off",
          autoCorrect: "off",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(SwiftFormSubmitRef, {
            ref: submitRef
          }), status.text ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _classnames.default)('status', status.type),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: status.text
            })
          }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_grid.Box, {
            flex: "1",
            display: inline ? ['grid', 'grid', 'flex'] : 'grid',
            flexWrap: inline ? 'wrap' : undefined,
            gridGap: formGap,
            gridTemplateColumns: !inline ? 'repeat(' + formCols + ', 1fr)' : undefined,
            gridAutoRows: !inline ? 'min-content' : undefined,
            children: fields.map(function (item, index) {
              var _item$value3, _item$value4;

              if (item.type === 'hidden') return /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputHidden.default, {
                type: "hidden",
                name: item.key,
                value: (_item$value3 = item.value) !== null && _item$value3 !== void 0 ? _item$value3 : ''
              }, item.key || index);
              if (item.type === 'multibutton' && item.values && item.values.length == 1) return /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputHidden.default, {
                type: "hidden",
                name: item.key,
                value: (_item$value4 = item.value) !== null && _item$value4 !== void 0 ? _item$value4 : ''
              }, item.key || index);
              var itemColSpan = ['line', 'subtitle', 'title', 'label'].includes(item.type) ? formCols : item.gridColSpan || formCols;
              var itemRowSpan = item.gridRowSpan || props.gridRows; // is field gated based on another field? skip.

              if (item.gate && (Object.keys(item.gate).includes('value') && values[item.gate.field] != item.gate.value || Object.keys(item.gate).includes('contains') && !(values[item.gate.field] || '').includes(item.gate.contains))) {
                return null;
              } // is field part of a multi-step form? skip.


              if (steps > 1 && item.step && item.step != step) {
                return null;
              }

              if (inline) {
                var _item$width, _props$theme;

                var inlineItemFlex = item.flex && item.width != 'full' ? item.flex : undefined;
                var inlineItemWidth = item.width == 'full' ? '100%' : (_item$width = item.width) !== null && _item$width !== void 0 ? _item$width : undefined; //console.log("----1")
                //console.log(values['card_number'])
                //console.log(!values['card_number'].length)
                //console.log(values['card_number'].includes('_'))
                //console.log("----2")
                //console.log("card number test",values['card_number'],(!values['card_number'] || !values['card_number']['complete']))

                if (props.type == 'card' && props.theme == 'minimal' && item.type == 'text' && (!values['card_number'] || !values['card_number']['complete'])) {
                  if (item.mask != 'card_number') {
                    inlineItemWidth = 0;
                    inlineItemFlex = null;
                  } else {
                    inlineItemWidth = null;
                    inlineItemFlex = 1;
                  }
                }

                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_grid.Box, {
                  flex: inlineItemFlex,
                  w: inlineItemWidth,
                  id: 'swift-form-element-' + item.key,
                  style: {
                    marginLeft: item.indent ? item.indent + 'px' : ''
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SwiftFormItem, {
                    item: item,
                    index: index,
                    values: values,
                    touched: touched,
                    errors: errors,
                    setFieldValue: setFieldValue,
                    setValues: setValues,
                    isSubmitting: isSubmitting,
                    inline: inline,
                    handleBlur: handleBlur,
                    step: step,
                    setStep: setStep,
                    steps: steps,
                    handleChange: handleChange,
                    setBraintreeTokenize: setBraintreeTokenize,
                    fields: fields,
                    theme: (_props$theme = props.theme) !== null && _props$theme !== void 0 ? _props$theme : 'default',
                    myRefs: myRefs,
                    submitRef: submitRef
                  })
                }, item.key || index);
              } else {
                var _props$theme2;

                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_grid.GridItem, {
                  rowSpan: itemRowSpan,
                  colSpan: !inline ? [formCols, formCols, itemColSpan] : [formCols, formCols, undefined],
                  id: 'swift-form-element-' + item.key,
                  style: {
                    marginLeft: item.indent ? item.indent + 'px' : ''
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SwiftFormItem, {
                    item: item,
                    index: index,
                    values: values,
                    touched: touched,
                    errors: errors,
                    setFieldValue: setFieldValue,
                    setValues: setValues,
                    isSubmitting: isSubmitting,
                    inline: inline,
                    handleBlur: handleBlur,
                    step: step,
                    setStep: setStep,
                    steps: steps,
                    handleChange: handleChange,
                    setBraintreeTokenize: setBraintreeTokenize,
                    fields: fields,
                    theme: (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 ? _props$theme2 : 'default',
                    myRefs: myRefs,
                    submitRef: submitRef
                  })
                }, item.key || index);
              }
            })
          })]
        });
      }
    })
  });
};

SwiftForm.defaultProps = {
  fields: [],
  style: {},
  resetOnSubmit: true,
  steps: 1,
  inline: false,
  easyFiles: false,
  setContext: function setContext() {},
  submitRef: null
};
var _default = SwiftForm;
exports.default = _default;