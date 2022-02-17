"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _swiftTableStyle = _interopRequireDefault(require("./swift-table-style"));

var _reactMoment = _interopRequireDefault(require("react-moment"));

var _BarLoader = _interopRequireDefault(require("react-spinners/BarLoader"));

var _swiftInputCheckbox = _interopRequireDefault(require("../inputs/swift-input-checkbox"));

var _polished = require("polished");

var _reactDom = require("react-dom");

var _reactSortableHoc = require("react-sortable-hoc");

var _calendar = require("../../helpers/calendar");

var _Modal = _interopRequireDefault(require("react-bootstrap/Modal"));

var _swiftForm = _interopRequireDefault(require("../forms/swift-form"));

var _swiftDropdown = _interopRequireDefault(require("../dropdowns/swift-dropdown"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var SwiftTableHandle = (0, _reactSortableHoc.SortableHandle)(function () {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    children: "::"
  });
});

var SwiftTableCellContent = function SwiftTableCellContent(_ref) {
  var rowKey = _ref.rowKey,
      data = _ref.data,
      index = _ref.index,
      cellValue = _ref.cellValue,
      column = _ref.column,
      inactive_string = _ref.inactive_string,
      dropdown = _ref.dropdown,
      setDropdown = _ref.setDropdown,
      config = _ref.config;
  //console.log('cell content', { rowKey, data, index, cellValue, column, inactive_string, dropdown, setDropdown  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftTableStyle.default.cellContent, {
    textAlign: column['textAlign'] || undefined,
    style: _objectSpread({
      minWidth: column['minWidth'] || undefined
    }, config && config.style ? config.style : []),
    children: cellValue != null ? column['type'] == 'datetime' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMoment.default, {
      calendar: _calendar.calendarFormats['datetime'],
      children: cellValue
    }) : column['type'] == 'date' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMoment.default, {
      calendar: _calendar.calendarFormats['date'],
      children: cellValue
    }) : column['type'] == 'boolean' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: cellValue && cellValue !== '0' && cellValue !== 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: column['icon'] ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: column['icon']
          }
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
          width: "24",
          height: "24",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
            d: "M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"
          })
        })
      }) : Object.keys(column).includes('showFalse') && column['showFalse'] ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
            d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15.538l-3.592-3.548 3.546-3.587-1.416-1.403-3.545 3.589-3.588-3.543-1.405 1.405 3.593 3.552-3.547 3.592 1.405 1.405 3.555-3.596 3.591 3.55 1.403-1.416z"
          })
        })
      }) : ''
    }) : column['type'] == 'number' && cellValue.length ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: Number(cellValue).toLocaleString()
    }) : column['type'] == 'dollar' ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: ["$", Number(cellValue).toLocaleString()]
    }) : column['type'] == 'media' && cellValue.length && cellValue.includes('yout') ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "global_aspect_video",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("iframe", {
        src: cellValue
      })
    }) : column['type'] == 'media' && cellValue.length ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "swift_table_cell_media",
      style: {
        backgroundImage: 'url(' + cellValue + ')'
      }
    }) : column['type'] == 'options' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: data['options'].length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftDropdown.default, {
        trigger: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
            d: "M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"
          })
        }),
        title: "Manage",
        show: dropdown == rowKey ? true : false,
        position: "left",
        type: "dots",
        onTrigger: function onTrigger() {
          setDropdown(dropdown != rowKey ? rowKey : null);
        },
        items: data['options'].map(function (option) {
          return _objectSpread(_objectSpread({}, option), {}, {
            onClick: function onClick() {
              setDropdown(null);
              option.onClick();
            }
          });
        })
      })
    }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [cellValue, " ", index == 0 && data.config && data.config.inactive ? '(' + inactive_string + ')' : '']
    }) : null
  });
};

var SwiftTableCell = function SwiftTableCell(_ref2) {
  var config = _ref2.config,
      link = _ref2.link,
      rowKey = _ref2.rowKey,
      data = _ref2.data,
      index = _ref2.index,
      cellValue = _ref2.cellValue,
      column = _ref2.column,
      inactive_string = _ref2.inactive_string,
      dropdown = _ref2.dropdown,
      setDropdown = _ref2.setDropdown;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: config && config.fields && config.fields[column['name']] && config.fields[column['name']]['link'] ? /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      href: config.fields[column['name']]['link'],
      className: "swift-table-cell-link",
      target: config.fields[column['name']]['link'].includes('http') ? '_blank' : '',
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SwiftTableCellContent, {
        rowKey: rowKey,
        cellValue: cellValue,
        column: column,
        data: data,
        index: index,
        inactive_string: inactive_string,
        dropdown: dropdown,
        setDropdown: setDropdown,
        config: config && config.fields && config.fields[column['name']]
      })
    }) : config && config['onClick'] ? /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      className: "swift-table-cell-link",
      onClick: function onClick() {
        return config['onClick'](data);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SwiftTableCellContent, {
        rowKey: rowKey,
        cellValue: cellValue,
        column: column,
        data: data,
        index: index,
        inactive_string: inactive_string,
        dropdown: dropdown,
        setDropdown: setDropdown,
        config: config && config.fields && config.fields[column['name']]
      })
    }) : config && config.fields && config.fields[column['name']] && config.fields[column['name']]['onClick'] ? /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      className: "swift-table-cell-link",
      onClick: config.fields[column['name']]['onClick'],
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SwiftTableCellContent, {
        rowKey: rowKey,
        cellValue: cellValue,
        column: column,
        data: data,
        index: index,
        inactive_string: inactive_string,
        dropdown: dropdown,
        setDropdown: setDropdown,
        config: config && config.fields && config.fields[column['name']]
      })
    }) : data && data['handleClick'] ? /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      className: "swift-table-cell-link",
      onClick: data['handleClick'],
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SwiftTableCellContent, {
        rowKey: rowKey,
        cellValue: cellValue,
        column: column,
        data: data,
        index: index,
        inactive_string: inactive_string,
        dropdown: dropdown,
        setDropdown: setDropdown,
        config: config && config.fields && config.fields[column['name']]
      })
    }) : link ? /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      href: link,
      target: link.includes('http') ? '_blank' : '',
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SwiftTableCellContent, {
        rowKey: rowKey,
        cellValue: cellValue,
        column: column,
        data: data,
        index: index,
        inactive_string: inactive_string,
        dropdown: dropdown,
        setDropdown: setDropdown,
        config: config && config.fields && config.fields[column['name']]
      })
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SwiftTableCellContent, {
        rowKey: rowKey,
        cellValue: cellValue,
        column: column,
        data: data,
        index: index,
        inactive_string: inactive_string,
        dropdown: dropdown,
        setDropdown: setDropdown,
        config: config && config.fields && config.fields[column['name']]
      })
    })
  });
};

var SortableRow = (0, _reactSortableHoc.SortableElement)(function (_ref3) {
  var data = _ref3.value,
      links = _ref3.links,
      multiSelect = _ref3.multiSelect,
      handleSelect = _ref3.handleSelect,
      columns = _ref3.columns,
      rowsSelectedAll = _ref3.rowsSelectedAll,
      rowsSelected = _ref3.rowsSelected,
      sortable = _ref3.sortable,
      dragSortable = _ref3.dragSortable,
      inactive_string = _ref3.inactive_string,
      dropdown = _ref3.dropdown,
      setDropdown = _ref3.setDropdown;
  var link = null;

  if (links) {
    link = links;
    Object.keys(data).forEach(function (key) {
      link = link.replace('{' + key + '}', data[key]);
    });
  } // todo what if no ID?


  var key = 'swiftTableBodyCell-' + data.id;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_swiftTableStyle.default.row, {
      inactive: data.config && data.config.inactive ? 1 : 0,
      children: [multiSelect && /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftTableStyle.default.cell, {
        checkbox: true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputCheckbox.default, {
            checked: rowsSelectedAll ? true : rowsSelected.includes(data.id) ? true : false,
            onChange: function onChange(e) {
              return handleSelect(data.id, e.currentTarget.checked, e.nativeEvent.shiftKey);
            }
          })
        })
      }), columns.map(function (column, index) {
        var cellValue = data[column['name']]; //console.log('swift-table.tsx - column', column)
        //console.log('swift-table.tsx - cellValue', cellValue)

        if ((cellValue == null || cellValue == '') && column['name_fallback'] && data[column['name_fallback']] != null) {
          cellValue = data[column['name_fallback']];
        } //console.log('swift-table.tsx - cellValue2', cellValue)


        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftTableStyle.default.cell, {
          "data-type": column['type'],
          full: column.full,
          nowrap: column.nowrap,
          sortable: sortable,
          dragSortable: dragSortable,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SwiftTableCell, {
            link: link,
            config: data.config,
            rowKey: key,
            cellValue: cellValue,
            column: column,
            data: data,
            index: index,
            inactive_string: inactive_string,
            dropdown: dropdown,
            setDropdown: setDropdown
          })
        }, "".concat(key, "-field").concat(index));
      }), dragSortable && /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftTableStyle.default.cell, {
        handle: true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SwiftTableHandle, {})
      })]
    }), data.children && data.children.length > 0 && Array.isArray(data.children) ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: data.children.map(function (elemChild) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftTableStyle.default.row, {
          children: columns.map(function (column, index) {
            var cellValue = elemChild[column['name']];

            if ((cellValue == null || cellValue == '') && column['name_fallback'] && elemChild[column['name_fallback']] != null) {
              cellValue = elemChild[column['name_fallback']];
            }

            if (index == 0) {
              cellValue = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
                children: ["\u21B3 ", cellValue]
              });
            }

            var linkChild = null;

            if (links) {
              linkChild = links;
              Object.keys(data).forEach(function (key) {
                linkChild = linkChild.replace('{' + key + '}', elemChild[key]);
              });
            }

            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftTableStyle.default.cell, {
              "data-type": column['type'],
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SwiftTableCell, {
                link: linkChild,
                config: data.config,
                rowKey: key,
                cellValue: cellValue,
                column: column,
                data: elemChild,
                index: index,
                inactive_string: inactive_string,
                dropdown: dropdown,
                setDropdown: setDropdown
              })
            }, "cell_".concat(column.name));
          })
        });
      })
    }) : null]
  }, key);
});
var SortableTable = (0, _reactSortableHoc.SortableContainer)(function (_ref4) {
  var items = _ref4.items,
      links = _ref4.links,
      multiSelect = _ref4.multiSelect,
      handleSelect = _ref4.handleSelect,
      columns = _ref4.columns,
      rowsSelectedAll = _ref4.rowsSelectedAll,
      rowsSelected = _ref4.rowsSelected,
      sortable = _ref4.sortable,
      dragSortable = _ref4.dragSortable,
      inactive_string = _ref4.inactive_string,
      dropdown = _ref4.dropdown,
      setDropdown = _ref4.setDropdown;
  //console.log('swift-table.tsx - items', items)
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftTableStyle.default.body, {
    children: items.map(function (value, index) {
      var _dragSortable;

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(SortableRow, {
        rowsSelectedAll: rowsSelectedAll,
        rowsSelected: rowsSelected,
        columns: columns,
        multiSelect: multiSelect,
        handleSelect: handleSelect,
        links: links,
        index: index,
        value: value,
        disabled: (_dragSortable = !dragSortable) !== null && _dragSortable !== void 0 ? _dragSortable : false,
        sortable: sortable,
        dragSortable: dragSortable,
        inactive_string: inactive_string,
        dropdown: dropdown,
        setDropdown: setDropdown
      }, 'swiftTableBodyCell-' + (value.id || index));
    })
  });
});

var SwiftTable = function SwiftTable(props) {
  var _props$className;

  var columns = props.columns,
      columnsShow = props.columnsShow,
      sortField = props.sortField,
      sortDirection = props.sortDirection,
      data = props.data,
      isLoading = props.isLoading,
      filterTotal = props.filterTotal,
      filterLimit = props.filterLimit,
      links = props.links,
      multiSelect = props.multiSelect,
      rowsSelected = props.rowsSelected,
      setRowsSelected = props.setRowsSelected,
      rowsSelectedAll = props.rowsSelectedAll,
      setRowsSelectedAll = props.setRowsSelectedAll,
      sortable = props.sortable,
      dragSortable = props.dragSortable,
      dragSortUpdate = props.dragSortUpdate,
      inactive_string = props.inactive_string,
      columnsVisible = props.columnsVisible;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      dropdown = _useState4[0],
      setDropdown = _useState4[1];

  var handleSelect = function handleSelect(id, checked, shiftKey) {
    console.log('ST handleSelect', id, checked, shiftKey);

    if (id) {
      //console.log('ST - specific checked', id)
      // specific checkbox !
      if (!shiftKey) {
        var ids = [id];
      } else if (rowsSelected.length > 0 && data && data.length > 0) {
        // shift key press
        var ids = [];
        var a = data.findIndex(function (c) {
          return c['id'] == rowsSelected[rowsSelected.length - 1];
        });
        var b = data.findIndex(function (c) {
          return c['id'] == id;
        });
        var clientA = Math.min(a, b);
        var clientB = Math.max(a, b); //console.log('shift event', clientA, clientB, rowsSelected)

        for (var i = clientA; i <= clientB; i++) {
          var idCurrent = data[i]['id'];

          if (!rowsSelected.includes(idCurrent)) {
            ids = [idCurrent].concat((0, _toConsumableArray2.default)(ids));
          }
        }
      }

      console.log('ST - checked, ids', ids);

      if (checked) {
        setRowsSelected([].concat((0, _toConsumableArray2.default)(rowsSelected), (0, _toConsumableArray2.default)(ids))); // if all rows are checked, check 'all' instead of individual ids - this causes issues with filtered list
        // search a client, it filters down to one element, then checking that element checks 'all' which sends and deletes all in list (bc search param is not taken into account...)

        /*if (data.map((elem) => elem.id).every((v) => [...rowsSelected, ...ids].includes(v))) {
          setRowsSelectedAll('all')
          setRowsSelected([])
        }*/
      } else {
        if (rowsSelectedAll) {
          setRowsSelectedAll(null);
          var rows = data.filter(function (elem) {
            return elem.id != id;
          }).map(function (elem) {
            return elem.id;
          });
          setRowsSelected(rows);
        } else {
          var index = rowsSelected.findIndex(function (c) {
            return c == id;
          }); //console.log('index', index)

          setRowsSelected([].concat((0, _toConsumableArray2.default)(rowsSelected.slice(0, index)), (0, _toConsumableArray2.default)(rowsSelected.slice(index + 1))));
        }
      }
    } else {
      //console.log('ST - all checked')
      // all checkbox !
      if (checked) {
        if (filterLimit && filterTotal && filterLimit < filterTotal) {
          // we specified a filter limit (current page) and total (all matched) and there appears to be more pages
          // so open clarify modal?
          setModal('swift_table_selected_all_clarify');
        } else {
          setRowsSelectedAll('all');
        }
      } else {
        setRowsSelectedAll(null);
        setRowsSelected([]);
      }
    }
  };

  console.log('SwiftTable - columns', columns); // console.log("sortField", sortField);
  // console.log("sortDirection", sortDirection);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [!isLoading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftTableStyle.default.root, {
      dropdown: dropdown,
      className: (_props$className = props.className) !== null && _props$className !== void 0 ? _props$className : undefined,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_swiftTableStyle.default.table, {
        links: links,
        children: [columnsVisible && /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftTableStyle.default.header, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_swiftTableStyle.default.row, {
            children: [multiSelect && /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftTableStyle.default.headerCell, {
              checkbox: true,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftInputCheckbox.default, {
                checked: rowsSelectedAll ? true : false,
                onChange: function onChange(e) {
                  return handleSelect(null, e.currentTarget.checked, e.nativeEvent.shiftKey);
                }
              })
            }), columns.map(function (column) {
              var _column$id;

              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftTableStyle.default.headerCell, {
                active: column['name'] == sortField ? true : false,
                reverse: column['name'] == sortField && sortDirection != 'asc' ? true : false,
                sortable: sortable,
                dragSortable: dragSortable,
                children: column['type'] != 'options' ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  onClick: Object.keys(column).includes('sortable') && column['sortable'] && props.sortUpdate ? function () {
                    return props.sortUpdate(column['name']);
                  } : function () {},
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    title: column['title'],
                    dangerouslySetInnerHTML: {
                      __html: column['icon'] || column['title']
                    }
                  }), sortable && Object.keys(column).includes('sortable') && column['sortable'] && /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
                    className: "swift_table_header_cell_sort",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
                      d: "M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z"
                    })
                  })]
                }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {})
              }, 'swiftTableHeaderCell-' + ((_column$id = column['id']) !== null && _column$id !== void 0 ? _column$id : column['name']));
            }), dragSortable && /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftTableStyle.default.headerCell, {})]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(SortableTable, {
          rowsSelectedAll: rowsSelectedAll,
          rowsSelected: rowsSelected,
          columns: columns,
          multiSelect: multiSelect,
          handleSelect: handleSelect,
          links: links,
          items: data,
          sortable: sortable,
          dragSortable: dragSortable,
          distance: 5,
          onSortEnd: function onSortEnd(_ref5) {
            var oldIndex = _ref5.oldIndex,
                newIndex = _ref5.newIndex;
            console.log('Swift-Tools - SwiftTable - OnSortEnd triggered, but not implemented.'); //dragSortUpdate(arrayMoveImmutable(data, oldIndex, newIndex))
            //dragSortUpdate(data)
          },
          useDragHandle: true //getHelperDimensions={({ node }) => ({
          //  width: node.offsetWidth,
          //  height: 48,
          //})}
          ,
          dropdown: dropdown,
          setDropdown: setDropdown,
          inactive_string: inactive_string
        })]
      })
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftTableStyle.default.loading, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BarLoader.default, {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Modal.default, {
      show: modal == 'swift_table_selected_all_clarify' ? true : false,
      onHide: function onHide() {
        return setModal(null);
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Modal.default.Header, {
        closeButton: true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Modal.default.Title, {
          children: "Select All Rows"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Modal.default.Body, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: "Would you like to select: "
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_swiftForm.default, {
          onSubmit: function onSubmit(vals) {
            setRowsSelectedAll(vals.selection);
            setRowsSelected([]);
            setModal(null);
          },
          fields: [{
            key: 'selection',
            value: 'visible',
            values: [{
              name: 'All visible rows (' + Math.min(filterLimit, filterTotal) + ')',
              value: 'visible'
            }, {
              name: 'All rows matching this filter (' + filterTotal + ')',
              value: 'all'
            }].concat((0, _toConsumableArray2.default)(rowsSelected.length > 0 || rowsSelectedAll ? [{
              name: 'Deselect all rows',
              value: ''
            }] : [])),
            type: 'radio'
          }, {
            key: 'submit',
            type: 'submit',
            color: 'primary',
            label: 'Select'
          }]
        })]
      })]
    })]
  });
};

SwiftTable.defaultProps = {
  columns: [],
  sortField: null,
  sortDirection: null,
  filterLimit: null,
  filterTotal: null,
  data: [],
  items: [],
  isLoading: false,
  links: undefined,
  multiSelect: false,
  rowsSelected: [],
  setRowsSelected: function setRowsSelected() {},
  rowsSelectedAll: null,
  setRowsSelectedAll: function setRowsSelectedAll() {},
  sortable: false,
  dragSortable: false,
  dragSortUpdate: function dragSortUpdate() {},
  inactive_string: 'Inactive',
  columnsVisible: true
};
var _default = SwiftTable;
exports.default = _default;