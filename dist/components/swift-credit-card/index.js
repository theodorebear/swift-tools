"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBraintreeFields = require("react-braintree-fields");

var _indexStyle = require("./index-style");

var _swiftLabel = _interopRequireDefault(require("../swift-label/swift-label"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactSpinners = require("react-spinners");

var _swiftIcon = _interopRequireDefault(require("../swift-icon/swift-icon"));

var _grid = require("../grid");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SwiftCreditCard = function SwiftCreditCard(props) {
  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      tokenize = _useState2[0],
      setTokenize = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      cardType = _useState4[0],
      setCardType = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      authorization = _useState6[0],
      setAuthorization = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      error = _useState8[0],
      setError = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      token = _useState10[0],
      setToken = _useState10[1];

  var _useState11 = (0, _react.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      focusedFieldName = _useState12[0],
      setFocusedField = _useState12[1];

  var numberField = _react.default.useRef();

  var cvvField = _react.default.useRef();

  var cardholderNameField = _react.default.useRef(); // get BraintreeClient::generateToken() from server to use in form!


  (0, _react.useEffect)(function () {
    handleBillingIntent();
  }, []);

  function handleBillingIntent() {
    return _handleBillingIntent.apply(this, arguments);
  }

  function _handleBillingIntent() {
    _handleBillingIntent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleBillingIntent.apply(this, arguments);
  }

  var onFieldBlur = function onFieldBlur(field, event) {
    return setFocusedField('');
  };

  var onFieldFocus = function onFieldFocus(field, event) {
    return setFocusedField(event.emittedBy);
  };

  if (!authorization) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSpinners.BarLoader, {})
    });
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_indexStyle.SwiftCreditCardStyled, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBraintreeFields.Braintree, {
      className: "form_braintree_credit_card_provider",
      authorization: authorization,
      onAuthorizationSuccess: function onAuthorizationSuccess() {//numberField.current.focus()
      },
      onDataCollectorInstanceReady: function onDataCollectorInstanceReady(collector) {// DO SOMETHING with Braintree collector as needed
      },
      onError: function onError(newError) {
        setError(newError.message || String(newError));
      },
      onCardTypeChange: function onCardTypeChange(_ref) {
        var cards = _ref.cards;

        if (1 === cards.length) {
          var _cards = _slicedToArray(cards, 1),
              card = _cards[0];

          setCardType(card.type);

          if (card.code && card.code.name) {//cvvField.current.setPlaceholder(card.code.name)
          } else {//cvvField.current.setPlaceholder("CVV")
          }
        } else {
          setCardType(''); //cvvField.current.setPlaceholder("CVV")
        }
      },
      getTokenRef: function getTokenRef(ref) {
        if (props.setBraintreeTokenize && ref) {
          props.setBraintreeTokenize(function () {
            return ref;
          });
        }
      },
      styles: {
        //form: {
        //    height: '24px',
        //},
        form: {},
        input: {
          'font-size': '16px',
          'font-family': 'lato',
          '-webkit-box-shadow': '0 0 0 30px #f2f2f2 inset !important'
        },
        //"input:-webkit-autofill":
        '.valid': {
          'background-color': 'inherit'
        } //':focus': {
        //    color: 'blue',
        //},

      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_grid.Grid, {
        gap: 3,
        templateColumns: 'repeat(' + 4 + ', 1fr)',
        autoRows: "min-content",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_grid.GridItem, {
          rowSpan: 1,
          colSpan: 2,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
            children: "Credit Card #"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "form_braintree_credit_card_input",
            children: [cardType == 'visa' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftIcon.default, {
              i: "cc_visa"
            }) : cardType == 'master-card' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftIcon.default, {
              i: "cc_mastercard"
            }) : cardType == 'american-express' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftIcon.default, {
              i: "cc_amex"
            }) : cardType == 'discover' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftIcon.default, {
              i: "cc_discover"
            }) : cardType == 'diners-club' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftIcon.default, {
              i: "cc_diners"
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftIcon.default, {
              i: "cc"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "form_braintree_credit_card_input_field",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBraintreeFields.HostedField, {
                type: "number",
                className: (0, _classnames.default)({
                  braintree_input: true,
                  focused: 'number' === focusedFieldName
                }),
                onBlur: onFieldBlur,
                onFocus: onFieldFocus,
                prefill: process.env.NODE_ENV == 'development' ? '' : undefined,
                ref: numberField
              })
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_grid.GridItem, {
          rowSpan: 1,
          colSpan: 2,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
            children: "Name on Card"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "form_braintree_credit_card_input",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "form_braintree_credit_card_input_field",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBraintreeFields.HostedField, {
                type: "cardholderName",
                className: (0, _classnames.default)({
                  braintree_input: true,
                  focused: 'cardholderName' === focusedFieldName
                }),
                onBlur: onFieldBlur,
                onFocus: onFieldFocus,
                placeholder: "",
                ref: cardholderNameField,
                prefill: process.env.NODE_ENV == 'development' ? '' : undefined
              })
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_grid.GridItem, {
          rowSpan: 1,
          colSpan: 2,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
            children: "Expiration Date"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "form_braintree_credit_card_input",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "form_braintree_credit_card_input_field",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBraintreeFields.HostedField, {
                type: "expirationDate",
                onBlur: onFieldBlur,
                onFocus: onFieldFocus,
                placeholder: "MM / YYYY",
                prefill: process.env.NODE_ENV == 'development' ? '' : undefined,
                className: (0, _classnames.default)({
                  braintree_input: true,
                  focused: 'expirationDate' === focusedFieldName
                })
              })
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_grid.GridItem, {
          rowSpan: 1,
          colSpan: 2,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftLabel.default, {
            children: "CVV"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "form_braintree_credit_card_input",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "form_braintree_credit_card_input_field",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBraintreeFields.HostedField, {
                type: "cvv",
                placeholder: "555",
                prefill: process.env.NODE_ENV == 'development' ? '' : undefined,
                ref: cvvField,
                className: (0, _classnames.default)({
                  braintree_input: true,
                  focused: 'CVV' === focusedFieldName
                })
              })
            })
          })]
        })]
      })
    })
  });
};

var _default = SwiftCreditCard;
exports.default = _default;