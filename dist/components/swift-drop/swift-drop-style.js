"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiftDropStyled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*
 *    "SwiftDrop" Styled Component
 */
var SwiftDropStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t._swift_drop_box {\n\t\twidth: 200px;\n\t\tmax-width: 100%;\n\t\tmin-height: 200px;\n\t\tborder-width: 2px;\n\t\tborder-radius: 2px;\n\t\tborder-style: dashed;\n\t\tbackground-color: #cceffe;\n\t\tcolor: #1794ca;\n\t\tborder-color: #1794ca;\n\t\toutline: none;\n\t\ttransition: all 0.05s ease-out;\n\t\tcursor: pointer;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tposition: relative;\n\t}\n\t", "\n\n\t", "\n\t\n\t", "\n\n    ", "\n\n\t._swift_drop_box_icon {\n\t\tdisplay: block;\n\t\tmargin-bottom: 8px;\n\t\topacity: 0.4;\n\t}\n\n\t._swift_drop_box_actions {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tpadding: 4px;\n\t\ta {\n\t\t\tdisplay: block;\n\t\t\tpadding: 4px;\n\t\t\tcursor: pointer;\n\t\t\tsvg {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 12px;\n\t\t\t\theight: 12px;\n\t\t\t\topacity: 0.25;\n\t\t\t\tpath {\n\t\t\t\t}\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\tsvg {\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t._swift_drop_box_header {\n\t\tdisplay: inline-flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\ttext-align: center;\n\t\tflex-direction: column;\n\t\tflex: 1;\n\t\tpadding: 18px;\n\t\tsvg {\n\t\t\tdisplay: block;\n\t\t\twidth: 32px;\n\t\t\theight: 32px;\n\t\t\tmargin-bottom: 8px;\n\t\t\tpath {\n\t\t\t\tfill: #1794ca;\n\t\t\t}\n\t\t}\n\t\tstrong {\n\t\t\tfont-size: 15px;\n\t\t\tfont-weight: 600;\n\t\t\tmargin-bottom: 0;\n\t\t\tdisplay: block;\n\t\t}\n\t\tsmall {\n\t\t\tfont-size: 12px;\n\t\t\tfont-weight: 600;\n\t\t\topacity: 0.75;\n\t\t\tmargin-top: 2px;\n\t\t\tdisplay: block;\n\t\t}\n\t}\n\n\t._swift_drop_box_progress {\n\t\tpadding: 0 18px 18px;\n\t\t._swift_drop_box_progress_bar {\n\t\t\tposition: relative;\n\t\t\theight: 6px;\n\t\t\tbackground: hsla(198, 80%, 80%, 1);\n\t\t\tborder-radius: 6px;\n\t\t\toverflow: hidden;\n\t\t\t._swift_drop_box_progress_bar_progress {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 0;\n\t\t\t\tbottom: 0;\n\t\t\t\tbackground: #1794ca;\n\t\t\t}\n\t\t}\n\t}\n\n\t._swift_drop_box_list {\n\t\tmargin-top: 6px;\n\t\tpadding: 0;\n\t\tlist-style-type: none;\n\t\tpadding: 18px;\n\t\tpadding-top: 0;\n\t\tmargin: 0;\n\t\tli {\n\t\t\tpadding: 0;\n\t\t\tlist-style-type: none;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tmargin-top: 6px;\n\t\t\t._swift_drop_box_list_item_icon {\n\t\t\t\tmargin-right: 6px;\n\t\t\t}\n\t\t\t&.uploading ._swift_drop_box_list_item_icon {\n\t\t\t\t-moz-animation: blink normal 1.5s infinite ease-in-out; /* Firefox */\n\t\t\t\t-webkit-animation: blink normal 1.5s infinite ease-in-out; /* Webkit */\n\t\t\t\t-ms-animation: blink normal 1.5s infinite ease-in-out; /* IE */\n\t\t\t\tanimation: blink normal 1.5s infinite ease-in-out; /* Opera */\n\t\t\t}\n\t\t\t._swift_drop_box_list_item_text {\n\t\t\t\tflex: 1;\n\t\t\t\tmax-width: 100%;\n\t\t\t\t/*max-width: calc(100% - 32px);*/\n\t\t\t\t._swift_drop_box_list_item_text_title {\n\t\t\t\t\t/*margin-bottom: 6px;*/\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t}\n\t\t\t\t._swift_drop_box_list_item_text_title_content {\n\t\t\t\t\tmin-width: 0;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\ttext-overflow: ellipsis;\n\t\t\t\t\tflex: 1;\n\t\t\t\t\tmax-width: 112px;\n\t\t\t\t\tspan {\n\t\t\t\t\t\tline-height: 12px;\n\t\t\t\t\t\tfont-size: 12px;\n\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\tflex: 1;\n\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t\ttext-overflow: ellipsis;\n\t\t\t\t\t\twhite-space: nowrap;\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tsmall {\n\t\t\t\t\tline-height: 12px;\n\t\t\t\t\tfont-size: 12px;\n\t\t\t\t\tfont-weight: 700;\n\t\t\t\t}\n\t\t\t\t._swift_drop_box_list_item_text_bar {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\theight: 6px;\n\t\t\t\t\tbackground: hsla(198, 80%, 80%, 1);\n\t\t\t\t\tborder-radius: 6px;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t._swift_drop_box_list_item_text_bar_progress {\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\ttop: 0;\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\tbackground: #1794ca;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@keyframes blink {\n\t\t0% {\n\t\t\topacity: 1;\n\t\t}\n\t\t50% {\n\t\t\topacity: 0.5;\n\t\t}\n\t\t100% {\n\t\t\topacity: 1;\n\t\t}\n\t}\n"])), function (_ref) {
  var is_active = _ref.is_active;
  return is_active && "\n    \t._swift_drop_box {\n\t    \t/*border-color: #2196f3*/\n\t    }\n    ";
}, function (_ref2) {
  var is_accept = _ref2.is_accept;
  return is_accept && "\n    \t._swift_drop_box {\n\t    \t/*border-color: #00e676;*/\n\t\t\t/*background-color: rgb(230, 255, 229);*/\n\n\t    }\n\t    ._swift_drop_box_icon {\n\t\t\t/*color: #00e676;*/\n\t\t\topacity: 1;\n\t\t}\n    ";
}, function (_ref3) {
  var is_reject = _ref3.is_reject;
  return is_reject && "\n    \t._swift_drop_box {\n\t    \t/*border-color: #ff1744;*/\n\t\t\t/*background-color: #ffe7ec;*/\n\t    }\n\t    ._swift_drop_box_icon {\n\t\t\t/*color: #ff1744;*/\n\t\t\topacity: 1;\n\t\t}\n    ";
}, function (_ref4) {
  var is_accepted = _ref4.is_accepted;
  return is_accepted && "\n    \t._swift_drop_box_header {\n\t\t\talign-items: flex-start;\n\t\t\tflex: initial;\n\t\t}\n    ";
});

exports.SwiftDropStyled = SwiftDropStyled;