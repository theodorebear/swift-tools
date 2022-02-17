"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calendarFormats = void 0;
exports.getEasyDate = getEasyDate;
var calendarFormats = {
  date: {
    lastDay: '[Yesterday]',
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    lastWeek: '[last] dddd',
    nextWeek: 'dddd',
    sameElse: 'L'
  },
  datetime: {
    lastDay: '[Yesterday at] LT',
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    lastWeek: '[last] dddd [at] LT',
    nextWeek: 'dddd [at] LT',
    sameElse: 'L LT'
  }
};
exports.calendarFormats = calendarFormats;

function getEasyDate() {
  var date = new Date();
  var year = date.getFullYear();
  var month = (1 + date.getMonth()).toString().padStart(2, '0');
  var day = date.getDate().toString().padStart(2, '0');
  return year + '/' + month + '/' + day;
}