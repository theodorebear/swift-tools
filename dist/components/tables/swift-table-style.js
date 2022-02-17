"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

/*
 *    "SwiftTable" Styled Component
 */
var SwiftTableStyled = {};
SwiftTableStyled['root'] = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n  ", "\n"])), function (props) {
  return props.dropdown && "\n   padding-bottom:242px;\n  ";
});
SwiftTableStyled['table'] = _styledComponents.default.table(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  ", "\n"])), function (props) {
  return props.links && "\n    tr:hover {\n      td {\n        background: ".concat(function (props) {
    return (0, _polished.darken)(0.02, '#fff');
  }, ";\n       }\n    }\n  ");
});
SwiftTableStyled['cell'] = _styledComponents.default.td(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  display: table-cell;\n  font-size: 12px;\n  vertical-align: middle;\n\n  ", "\n\n  > div,\n  > a {\n    padding: 10px;\n    display: block;\n    word-break: break-all;\n  }\n  &:first-of-type {\n    > div,\n    > a {\n      padding-left: 18px;\n    }\n  }\n  &:last-of-type {\n    > div,\n    > a {\n      padding-right: 18px;\n    }\n  }\n\n  > a.swift-table-cell-link {\n    cursor: pointer;\n    &:hover {\n      text-decoration: underline !important;\n    }\n  }\n\n  border-bottom: 1px solid ", ";\n\n  max-width: 40vw;\n  .swift-table-body-cell-link {\n    cursor: pointer;\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n  color: inherit;\n  max-height: 72px;\n\n  span {\n    display: block;\n    font-weight: inherit;\n    margin-right: 4px;\n  }\n  svg {\n    display: block;\n    width: 22px;\n    height: 22px;\n    path {\n      fill: #000;\n    }\n    margin-right: 4px;\n  }\n  time {\n    opacity: 0.75;\n    font-weight: inherit;\n    color: inherit;\n    white-space: nowrap;\n  }\n\n  &[data-type='media'] {\n    width: 172px;\n  }\n  &[data-type='boolean'],\n  &[data-type='options'] {\n    width: 52px;\n    white-space: nowrap;\n  }\n\n  &[data-type='number'] {\n    white-space: nowrap;\n  }\n\n  ", "\n\n  .swift_table_cell_media {\n    background-size: cover;\n    background-position: center;\n    flex: 1;\n    &:after {\n      content: '';\n      display: block;\n      padding-top: 100%;\n    }\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var dragSortable = _ref.dragSortable;
  return dragSortable && "\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  ";
}, function (props) {
  return (0, _polished.darken)(0.05, '#fff');
}, function (_ref2) {
  var nowrap = _ref2.nowrap;
  return nowrap && "\n    white-space:nowrap;\n  ";
}, function (_ref3) {
  var checkbox = _ref3.checkbox;
  return checkbox && "\n      > a,>div {\n        padding: 2px 8px;\n        padding-right: 0px;\n        user-select: none;\n       }\n\n      \n      width: 20px;\n    }\n\n    &:first-of-type {\n    > div,\n    > a {\n      padding-left:8px;\n    }\n  }\n  }";
}, function (_ref4) {
  var handle = _ref4.handle;
  return handle && "\n    cursor:pointer;\n      width: 20px;\n  ";
}, function (_ref5) {
  var full = _ref5.full;
  return full && "\n    width:100%;\n  ";
});
SwiftTableStyled['cellContent'] = _styledComponents.default.div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n  ", "\n\n  svg {\n    width: 18px;\n    height: 18px;\n  }\n  span {\n    font-weight: inherit;\n  }\n"])), function (_ref6) {
  var textAlign = _ref6.textAlign;
  return textAlign == 'right' && "\n  justify-content: flex-end;\n  ";
});
SwiftTableStyled['headerCell'] = _styledComponents.default.td(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n  cursor: pointer;\n  display: table-cell;\n\n  vertical-align: middle;\n  padding: 10px;\n  font-size: 12px;\n  border-bottom: 2px solid ", ";\n\n  > div {\n    display: flex;\n    align-items: center;\n    font-weight: inherit;\n  }\n  text-transform: uppercase;\n  font-weight: 600;\n  -webkit-font-smoothing: antialiased;\n  font-size: 13px;\n\n  span {\n    display: block;\n    font-weight: inherit;\n    margin-right: 4px;\n    white-space: nowrap;\n  }\n  svg {\n    display: block;\n    width: 14px;\n    height: 14px;\n  }\n  .swift_table_header_cell_sort {\n    display: block;\n    width: 14px;\n    height: 14px;\n    transform: rotate(90deg);\n    transition: transform 0.15s ease-out;\n    path {\n      fill: #000;\n    }\n  }\n  ", "\n\n  &:first-of-type {\n    padding-left: 18px;\n  }\n  &:last-of-type {\n    padding-right: 18px;\n  }\n\n  ", "\n\n  ", "\n"])), function (props) {
  return (0, _polished.darken)(0.1, '#fff');
}, function (_ref7) {
  var active = _ref7.active,
      sortable = _ref7.sortable;
  return !active && sortable && "\n    span {\n      opacity:0.6;\n    }\n    .swift_table_header_cell_sort {\n      opacity: 0;\n      pointer-events: none;\n    }\n    &:hover {\n      span {\n        opacity:0.9;\n      }\n      .swift_table_header_cell_sort {\n        opacity: 0.4;\n      }\n    }\n  }";
}, function (_ref8) {
  var checkbox = _ref8.checkbox;
  return checkbox && "\n     padding: 2px 8px;\n     padding-right: 0px;\n     &:first-of-type { \n       padding-left:8px;\n    }\n  }";
}, function (_ref9) {
  var reverse = _ref9.reverse;
  return reverse && "\n    .swift_table_header_cell_sort {\n      transform: rotate(-90deg);\n    }\n  }";
});
SwiftTableStyled['header'] = _styledComponents.default.thead(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)([""])));
SwiftTableStyled['body'] = _styledComponents.default.tbody(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2.default)([""])));
SwiftTableStyled['row'] = _styledComponents.default.tr(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n\n  ", "\n"])), function (_ref10) {
  var links = _ref10.links;
  return links && "\n      cursor:pointer;\n      &:hover {\n          background: ".concat(function (props) {
    return (0, _polished.darken)(0.05, '#fff');
  }, ";\n      }\n    }\n  }");
}, function (_ref11) {
  var inactive = _ref11.inactive;
  return inactive && "\n      opacity:0.5;\n    }\n  }";
});
SwiftTableStyled['loading'] = _styledComponents.default.section(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2.default)(["\n  width: 100%;\n  min-height: 180px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  & h3 {\n    margin-top: 12px;\n    font-size: 0.75em;\n    font-weight: 700;\n    opacity: 0.5;\n    font-style: italic;\n    -webkit-font-smoothing: antialiased;\n  }\n"])));
var _default = SwiftTableStyled;
exports.default = _default;