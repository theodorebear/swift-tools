"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _swiftInputTextStyle = require("./swift-input-text-style");

var _swiftLabel = _interopRequireDefault(require("./swift-label"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BarLoader = _interopRequireDefault(require("react-spinners/BarLoader"));

var _swiftButton = _interopRequireDefault(require("../buttons/swift-button"));

var _swiftIcon = _interopRequireDefault(require("../icons/swift-icon"));

var _reactInputMask = _interopRequireDefault(require("react-input-mask"));

var _cardValidator = _interopRequireDefault(require("card-validator"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var SwiftInputText = function SwiftInputText(props) {
  var _props$color, _props$onClick;

  //const innerRef = useRef();
  (0, _react.useEffect)(function () {
    var _props$fieldRef, _props$fieldRef$curre;

    if (props.autoFocus && props.fieldRef) (_props$fieldRef = props.fieldRef) === null || _props$fieldRef === void 0 ? void 0 : (_props$fieldRef$curre = _props$fieldRef.current) === null || _props$fieldRef$curre === void 0 ? void 0 : _props$fieldRef$curre.focus();
  }, []);
  var icon = props.icon,
      theme = props.theme,
      myRefs = props.myRefs,
      index = props.index; //const [searchValuePrev, setSearchResults] = useState(null)

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      searchResults = _useState2[0],
      setSearchResults = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      searchResultsLoading = _useState4[0],
      setSearchResultsLoading = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      searchSelectionVeneer = _useState6[0],
      setSearchSelectionVeneer = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      cardNumberValidate = _useState8[0],
      setCardNumberValidate = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      submitTimeout = _useState10[0],
      setSubmitTimeout = _useState10[1];

  var initialViewLoad = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    if (initialViewLoad.current || !props.search) {
      initialViewLoad.current = false;

      if (props.value && props.value != '' && props.search) {
        // props.value.length didnt work for integer values
        handleVeneerGet();
      } // this breaks inline / minimal card layouts, infinite loop.
      // if (props.mask || props.triggerInitialChain) {
      //   handleChange(props.value);
      // }


      return;
    } //console.log("SwiftInputText - value changed with search params: ", props.value, props.search)


    clearTimeout(submitTimeout);
    setSubmitTimeout(setTimeout(handleSearch, 500));
  }, [props.value]);

  var handleVeneerGet = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleVeneerGet() {
      return _ref.apply(this, arguments);
    };
  }();

  if ((!props.value || props.value == '') && searchSelectionVeneer) {
    // !props.value.length didnt work for integer values
    //console.log('SwiftInputText - reinitialized text input value is blank, setting veneer blank')
    setSearchSelectionVeneer(null);
  }

  var handleSearch = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _props$value$length;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(Object.keys(props.search).includes('min_length') && ((_props$value$length = props.value.length) !== null && _props$value$length !== void 0 ? _props$value$length : 0) < props.search.min_length)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              setSearchResults(null);
              setSearchResultsLoading(true); //  SWIFT-FORM PACKAGE SIMPLIFICATION
              //const { data } = await _inputSearch({ ...props.search, search: props.value });
              //console.log("SwiftInputText - search results", data)
              //setSearchResults(data.results);

              setSearchResultsLoading(false);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSearch() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleChange = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(val) {
      var ccValidate, cardExpValidate, valExp, _props$maskLen, cardExpCvv, valCvv, cardZip, valZip, valPhone;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (props.mask == 'number' && val.replace(/\D/g, '').length) {
                val = String(val);
                props.onChange(parseInt(val.replace(/\D/g, '')).toLocaleString());
              } else if (props.mask == 'card_number') {
                ccValidate = _cardValidator.default.number(val.replaceAll('_', '').replaceAll(' ', ''));
                setCardNumberValidate(ccValidate);
                props.onChange({
                  valid: ccValidate.isPotentiallyValid,
                  complete: ccValidate.isValid,
                  value: val.replaceAll('_', '').replaceAll(' ', ''),
                  value_masked: val,
                  type: ccValidate.card && ccValidate.card.type,
                  cvv_len: ccValidate.card && ccValidate.card.code && ccValidate.card.code.size
                });
              } else if (props.mask == 'card_expiration') {
                cardExpValidate = _cardValidator.default.expirationDate(val.replaceAll('_', '').replaceAll(' ', ''));
                valExp = {
                  valid: cardExpValidate.isPotentiallyValid,
                  complete: cardExpValidate.isValid,
                  value: val.replaceAll('_', '').replaceAll(' ', ''),
                  value_masked: val
                };
                props.onChange(valExp);
              } else if (props.mask == 'card_cvv') {
                cardExpCvv = _cardValidator.default.cvv(val.replaceAll('_', '').replaceAll(' ', ''), (_props$maskLen = props.maskLen) !== null && _props$maskLen !== void 0 ? _props$maskLen : 3);
                valCvv = {
                  valid: cardExpCvv.isPotentiallyValid,
                  complete: cardExpCvv.isValid,
                  value: val.replaceAll('_', '').replaceAll(' ', ''),
                  value_masked: val
                }; //console.log("exp_cvv",valCvv)

                props.onChange(valCvv);
              } else if (props.mask == 'zip_code') {
                cardZip = _cardValidator.default.postalCode(val.replaceAll('_', '').replaceAll(' ', ''), {
                  minLength: 5
                });
                valZip = {
                  valid: cardZip.isPotentiallyValid,
                  complete: cardZip.isValid,
                  value: val.replaceAll('_', '').replaceAll(' ', ''),
                  value_masked: val
                }; //console.log("zip_code",valZip)

                props.onChange(valZip);
              } else if (props.mask == 'phone') {
                valPhone = {
                  valid: true,
                  complete: val.replaceAll('_', '').length == 14 ? true : false,
                  value: val.replaceAll('_', '').replaceAll(' ', ''),
                  value_masked: val
                }; //console.log("zip_code",valPhone)

                props.onChange(valPhone);
              } else {
                val = String(val);
                props.onChange(val);
              }

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleChange(_x) {
      return _ref3.apply(this, arguments);
    };
  }(); // if(props.name === 'card_number') {
  //   console.log('swift input - props',props)
  //   console.log('swift input - typeof props.value',typeof props.value === 'object')
  //   console.log('swift input - props.mask',props.mask == "card_number")
  //   var valDisplay = 2
  //   if(props.mask == "card_number" && typeof props.value === 'object') {
  //     valDisplay = 1
  //   }
  //   console.log('swift input - valDisplay',valDisplay)
  // }
  //console.log(props.name+", ref= ",props.fieldRef)


  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_swiftInputTextStyle.SwiftInputTextStyled, {
    error: props.error && props.helperText ? true : false,
    entered: props.value.length > 0 ? true : false,
    searchResults: searchResults && searchResults.length ? true : false,
    searchResultsLoading: searchResultsLoading ? true : false,
    color: (_props$color = props.color) !== null && _props$color !== void 0 ? _props$color : undefined,
    theme: theme,
    children: [(props.label || !Object.keys(props).includes('label') || props.link) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "swift_input_text_label",
      children: [props.label ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
        theme: theme,
        htmlFor: 'swift_tools_form_input_text_' + props.name,
        children: props.label
      }) : !Object.keys(props).includes('label') ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
        theme: theme,
        htmlFor: 'swift_tools_form_input_text_' + props.name,
        children: props.name
      }) : null, props.link && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "swift_input_text_label_link",
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
          target: "_blank",
          href: props.link.url ? props.link.url : props.link,
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
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "swift_input_text_input",
      onClick: (_props$onClick = props.onClick) !== null && _props$onClick !== void 0 ? _props$onClick : undefined,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _classnames.default)('swift_input_text_input_element', props.error && props.helperText && 'error'),
        children: [icon ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftIcon.default, {
          className: "swift_input_text_input_icon",
          i: icon,
          color: props.icon_color || 'primary'
        }) : props.mask == 'card_number' ? cardNumberValidate && cardNumberValidate.card && cardNumberValidate.card.type ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftIcon.default, {
          className: "swift_input_text_input_icon",
          i: 'card_' + cardNumberValidate.card.type.replace('-', '_')
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftIcon.default, {
          className: "swift_input_text_input_icon",
          i: 'card_default'
        }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactInputMask.default, {
          type: props.type ? props.type : 'text',
          name: props.name,
          id: 'swift_tools_form_input_text_' + props.name,
          inputRef: function inputRef(el) {
            return myRefs.current[index] = el;
          },
          placeholder: props.placeholder // autoFocus={props.autoFocus}
          ,
          disabled: props.disabled,
          value: (0, _typeof2.default)(props.value) === 'object' && Object.keys(props.value).includes('value') ? props.value.value : props.value,
          mask: props.mask ? props.mask == 'phone' ? '(999) 999-9999' : props.mask == 'zip_code' ? '99999' : props.mask == 'card_cvv' && props.maskLen ? props.maskLen == 4 ? '9999' : '999' : props.mask == 'card_expiration' ? '99 / 99' : props.mask == 'card_number' ? cardNumberValidate && cardNumberValidate.card && cardNumberValidate.card.type == 'american-express' ? '9999 999999 99999' : cardNumberValidate && cardNumberValidate.card && cardNumberValidate.card.type == 'diners-club' ? '9999 999999 9999' : '9999 9999 9999 9999' : props.mask == 'ach_routing' ? '999999999' : null : null,
          maskChar: "_",
          onFocus: function onFocus(e) {// if (searchSelectionVeneer) {
            //   props.onChange('');
            // } else if (
            //   props.search &&
            //   Object.keys(props.search).includes('min_length') &&
            //   (props.value.length ?? 0) >= props.search.min_length
            // ) {
            //   //console.log("FOCUS SEARCH")
            //   handleSearch();
            // }
          },
          onBlur: function onBlur(e) {// setTimeout(function () {
            //   console.log("blurring!", document.activeElement)
            // }, 1)
            // if (!props.search || (Object.keys(props.search).includes('custom_allow') && props.search.custom_allow)) return;
            // if (e.currentTarget.value.length && !searchSelectionVeneer) {
            //   console.log('SwiftInputText - blurring searched input without setting veneer, setting blank');
            //   props.onChange('');
            //   setSearchSelectionVeneer(null);
            // }
            // if (!e.currentTarget.value.length && searchSelectionVeneer) {
            //   console.log('SwiftInputText - blurring searched input with no value but veneer, setting veneer blank');
            //   setSearchSelectionVeneer(null);
            // }
          },
          onChange: function onChange(e) {
            return handleChange(e.currentTarget.value);
          },
          autoCorrect: props.autoCorrect === false || props.search ? 'off' : 'on' // spellCheck={props.autoCorrect === false ? 'off' : 'on'}
          ,
          autoCapitalize: props.autoCapitalize === false || props.search ? 'off' : 'on',
          autoComplete: props.autoComplete === false || props.search ? 'off' : 'on'
        }), searchSelectionVeneer && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "swift_input_text_input_search_selection_veneer",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: searchSelectionVeneer
          })
        }), searchResultsLoading || searchResults ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "swift_input_text_input_search_results",
          children: [searchResultsLoading && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "swift_input_text_input_search_results_loading",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BarLoader.default, {})
          }), searchResults ? /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
            children: searchResults.map(function (elem) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                onMouseDown: function onMouseDown() {
                  var _props$search$field;

                  setSearchResults(null);
                  setSearchSelectionVeneer(elem['search_result_display']);
                  props.onChange(elem[(_props$search$field = props.search.field) !== null && _props$search$field !== void 0 ? _props$search$field : 'id']);
                },
                children: elem['search_result_display']
              }, elem['id']);
            })
          }) : null]
        }) : null]
      }), props.submit_button && /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftButton.default, _objectSpread(_objectSpread({
        className: "swift_input_text_submit_button"
      }, props.submit_button), {}, {
        children: props.submit_button.label || 'Submit'
      }))]
    }), props.sublabel ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      theme: theme,
      style: {
        marginTop: '8px',
        opacity: 0.4
      },
      className: "swift_input_text_sublabel",
      children: props.sublabel
    }) : null, props.error && props.helperText ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
      theme: theme,
      error: true,
      className: "swift_input_text_label_error",
      children: props.helperText
    }) : null]
  });
};

SwiftInputText.defaultProps = {
  icon: null,
  value: '',
  search: null,
  theme: 'default',
  fieldRef: null
};
var _default = SwiftInputText;
exports.default = _default;