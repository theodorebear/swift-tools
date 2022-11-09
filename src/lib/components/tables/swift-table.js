import { useState, Fragment, useContext } from "react"
import SwiftTableStyled from "./swift-table-style"
//import _ from "lodash"
import Moment from "react-moment"
//import PuffLoader from "react-spinners/PuffLoader"
import BarLoader from "react-spinners/BarLoader"
import SwiftInputCheckbox from "../inputs/swift-input-checkbox"
import { lighten, darken, transparentize, readableColor } from "polished"
import React, { Component } from "react"
import { render } from "react-dom"
import { SortableContainer, SortableElement, SortableHandle } from "react-sortable-hoc"
import { arrayMoveImmutable } from "../../helpers"
import { calendarFormats } from "../../helpers/calendar"
import Modal from "react-bootstrap/Modal"
import SwiftForm from "../forms"
import SwiftDropdown from "../dropdowns"
import { SwiftLinkContext } from "../providers"
import SwiftIcon from "../icons"

const SwiftTableHandle = SortableHandle(() => <span>::</span>)

const SwiftTableCellContent = ({ rowKey, data, index, cellValue, column, inactive_string, dropdown, setDropdown, config }) => {
  //console.log("cell content", { rowKey, data, index, cellValue, column, inactive_string, dropdown, setDropdown })
  //return <>hi</>
  return (
    <SwiftTableStyled.cellContent
      type={column["type"]}
      textAlign={column["textAlign"] || undefined}
      style={{
        minWidth: column["minWidth"] || undefined,
        ...(config && config.style ? config.style : []),
        ...(Object.keys(column).includes("style") ? column["style"] : {}),
        ...(cellValue && typeof cellValue === "object" && Object.keys(cellValue).includes("style") ? cellValue["style"] : {}),
      }}
    >
      {cellValue != null ? (
        column["type"] == "datetime" ? (
          <Moment format="YYYY-MM-DD HH:mm:ss">{cellValue}</Moment>
        ) : column["type"] == "date" ? (
          <Moment format="YYYY-MM-DD">{cellValue}</Moment>
        ) : column["type"] == "datetime_recent" ? (
          <Moment calendar={calendarFormats["datetime"]}>{cellValue}</Moment>
        ) : column["type"] == "date_recent" ? (
          <Moment calendar={calendarFormats["date"]}>{cellValue}</Moment>
        ) : column["type"] == "stats" ? (
          <ul>
            {cellValue.items.map((elem) => (
              <li>
                <strong style={elem.style ?? {}}>{elem.value || 0}</strong>
                <span>{elem.name}</span>
              </li>
            ))}
          </ul>
        ) : column["type"] == "icon" ? (
          <>
            <SwiftIcon i={cellValue.icon} color={cellValue.color ?? "#333"} />
            {cellValue.value && <span>{cellValue.value}</span>}
          </>
        ) : column["type"] == "stack" ? (
          <ul>
            {cellValue.items.map((elem) => (
              <li style={elem.style ?? {}}>{elem.name}</li>
            ))}
          </ul>
        ) : column["type"] == "boolean" ? (
          <>
            {cellValue && cellValue !== "0" && cellValue !== 0 ? (
              <>
                {column["icon"] ? (
                  <div dangerouslySetInnerHTML={{ __html: column["icon"] }} />
                ) : (
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
                  </svg>
                )}
              </>
            ) : Object.keys(column).includes("showFalse") && column["showFalse"] ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15.538l-3.592-3.548 3.546-3.587-1.416-1.403-3.545 3.589-3.588-3.543-1.405 1.405 3.593 3.552-3.547 3.592 1.405 1.405 3.555-3.596 3.591 3.55 1.403-1.416z" />
                </svg>
              </>
            ) : (
              ""
            )}
          </>
        ) : column["type"] == "number" && cellValue.length ? (
          <>{Number(cellValue).toLocaleString()}</>
        ) : column["type"] == "dollar" ? (
          <>${Number(cellValue).toLocaleString()}</>
        ) : column["type"] == "media" && cellValue.length && cellValue.includes("yout") ? (
          <div className="global_aspect_video">
            <iframe src={cellValue} />
          </div>
        ) : column["type"] == "bubbles" ? (
          <ul className="swift_table_cell_bubbles">
            {cellValue.items.map((item) => (
              <li className={item.plain ? "plain" : null} style={item.style ?? {}}>
                {item.name}
              </li>
            ))}
          </ul>
        ) : column["type"] == "media" && cellValue.length ? (
          <div
            className="swift_table_cell_media"
            style={{
              backgroundImage: "url(" + cellValue + ")",
            }}
          ></div>
        ) : column["type"] == "options" ? (
          <>
            {data["options"].length > 0 && (
              <SwiftDropdown
                trigger={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
                  </svg>
                }
                title="Manage"
                show={dropdown == rowKey ? true : false}
                position="left"
                type="dots"
                onTrigger={() => {
                  setDropdown(dropdown != rowKey ? rowKey : null)
                }}
                items={data["options"].map((option) => ({
                  ...option,
                  onClick: () => {
                    setDropdown(null)
                    option.onClick()
                  },
                }))}
              />
            )}
          </>
        ) : typeof cellValue === "object" && Object.keys(cellValue).includes("name") ? (
          <>{cellValue.name}</>
        ) : (
          <>{cellValue}</>
        )
      ) : null}

      {index == 0 && data.config && data.config.inactive && inactive_string ? <>&nbsp;({inactive_string})</> : ""}
    </SwiftTableStyled.cellContent>
  )
}

const SwiftTableCell = ({ config, link, rowKey, data, index, cellValue, column, inactive_string, dropdown, setDropdown }) => {
  const CustomLink = useContext(SwiftLinkContext)

  /*{CustomLink ? (
                <CustomLink href={link.path} to={link.path}>
                  <span>{link.text}</span>
                  <SwiftIcon i="next" />
                </CustomLink>
              ) : (*/

  var cellHref = null
  var cellHandleClick = null
  if (config && config.fields && config.fields[column["name"]] && config.fields[column["name"]]["link"]) {
    // link - cell level via config->field->link
    cellHref = config.fields[column["name"]]["link"]
  } else if (config && config.fields && config.fields[column["name"]] && config.fields[column["name"]]["handleClick"]) {
    // onclick - cell level via config->field->handleClick
    cellHandleClick = () => config.fields[column["name"]]["handleClick"](data)
  } else if (link) {
    // link - row level but easier to only use row level to trigger hover state but apply actual link here in each cell level
    cellHref = link
  }

  return (
    <>
      {cellHref ? (
        <>
          {CustomLink ? (
            <CustomLink href={cellHref} to={cellHref} className="swift-table-cell-link" target={cellHref.includes("http") ? "_blank" : ""}>
              <SwiftTableCellContent
                rowKey={rowKey}
                cellValue={cellValue}
                column={column}
                data={data}
                index={index}
                inactive_string={inactive_string}
                dropdown={dropdown}
                setDropdown={setDropdown}
                config={config && config.fields && config.fields[column["name"]]}
              />
            </CustomLink>
          ) : (
            <a href={cellHref} className="swift-table-cell-link" target={cellHref.includes("http") ? "_blank" : ""}>
              <SwiftTableCellContent
                rowKey={rowKey}
                cellValue={cellValue}
                column={column}
                data={data}
                index={index}
                inactive_string={inactive_string}
                dropdown={dropdown}
                setDropdown={setDropdown}
                config={config && config.fields && config.fields[column["name"]]}
              />
            </a>
          )}
        </>
      ) : cellHandleClick ? (
        <div className="swift-table-cell-link" onClick={cellHandleClick}>
          <SwiftTableCellContent
            rowKey={rowKey}
            cellValue={cellValue}
            column={column}
            data={data}
            index={index}
            inactive_string={inactive_string}
            dropdown={dropdown}
            setDropdown={setDropdown}
            config={config && config.fields && config.fields[column["name"]]}
          />
        </div>
      ) : (
        <div className="">
          <SwiftTableCellContent
            rowKey={rowKey}
            cellValue={cellValue}
            column={column}
            data={data}
            index={index}
            inactive_string={inactive_string}
            dropdown={dropdown}
            setDropdown={setDropdown}
            config={config && config.fields && config.fields[column["name"]]}
          />
        </div>
      )}
    </>
  )
}

const SortableRow = SortableElement(
  ({ value: data, links, multiSelect, checkable, handleCheck, handleSelect, columns, rowsSelectedAll, rowsSelected, sortable, dragSortable, inactive_string, dropdown, setDropdown }) => {
    var link = null
    if (links) {
      link = links
      Object.keys(data).forEach((key) => {
        link = link.replace("{" + key + "}", data[key])
      })
    }

    // todo what if no ID?
    const key = "swiftTableBodyCell-" + data.id

    var rowHref = null
    var rowHandleClick = null
    if (data.config && data.config["handleClick"]) {
      // onclick - row level via cell->config->handleClick
      rowHandleClick = () => data.config["handleClick"](data)
    } else if (data && data["handleClick"]) {
      // onclick - row level via cell->handleClick
      rowHandleClick = () => data["handleClick"](data)
    } else if (link) {
      // link - row level
      rowHref = link // BUT its hard to put a <a> here, so will just calculate this to see if we highlight on hover, and do link in cell still.
    }

    return (
      <Fragment key={key}>
        <SwiftTableStyled.row inactive={data.config && data.config.inactive ? 1 : 0} links={rowHandleClick || rowHref ? 1 : 0} onClick={rowHandleClick ?? (() => {})}>
          {multiSelect ? (
            <SwiftTableStyled.cell checkbox>
              <div>
                <SwiftInputCheckbox
                  checked={rowsSelectedAll ? true : rowsSelected.includes(data.id) ? true : false}
                  onChange={(e) => handleSelect(data.id, e.currentTarget.checked, e.nativeEvent.shiftKey)}
                />
              </div>
            </SwiftTableStyled.cell>
          ) : checkable ? (
            <SwiftTableStyled.cell checkbox>
              <div>
                <SwiftInputCheckbox checked={data.checked ? true : false} onChange={(e) => handleCheck(data.id, !data.checked)} />
              </div>
            </SwiftTableStyled.cell>
          ) : null}
          {columns.map((column, index) => {
            var cellValue = data[column["name"]]
            //console.log('swift-table.tsx - column', column)
            //console.log('swift-table.tsx - cellValue', cellValue)
            if ((cellValue == null || cellValue == "") && column["name_fallback"] && data[column["name_fallback"]] != null) {
              cellValue = data[column["name_fallback"]]
            }

            //console.log('swift-table.tsx - cellValue2', cellValue)
            return (
              <SwiftTableStyled.cell key={`${key}-field${index}`} data-type={column["type"]} full={column.full} nowrap={column.nowrap} sortable={sortable} dragSortable={dragSortable}>
                <SwiftTableCell
                  link={link}
                  config={data.config}
                  rowKey={key}
                  cellValue={cellValue}
                  column={column}
                  data={data}
                  index={index}
                  inactive_string={inactive_string}
                  dropdown={dropdown}
                  setDropdown={setDropdown}
                />
                {cellValue !== null && typeof cellValue === "object" && Object.keys(cellValue).includes("tooltip") && <span className="swift_table_cell_tooltip">{cellValue.tooltip}</span>}
              </SwiftTableStyled.cell>
            )
          })}
          {dragSortable && (
            <SwiftTableStyled.cell handle>
              <SwiftTableHandle />
            </SwiftTableStyled.cell>
          )}
        </SwiftTableStyled.row>

        {data.children && data.children.length > 0 && Array.isArray(data.children) ? (
          <>
            {data.children.map((elemChild) => (
              <SwiftTableStyled.row>
                {columns.map((column, index) => {
                  var cellValue = elemChild[column["name"]]
                  if ((cellValue == null || cellValue == "") && column["name_fallback"] && elemChild[column["name_fallback"]] != null) {
                    cellValue = elemChild[column["name_fallback"]]
                  }

                  if (index == 0) {
                    cellValue = <>&#8627; {cellValue}</>
                  }
                  var linkChild = null
                  if (links) {
                    linkChild = links
                    Object.keys(data).forEach((key) => {
                      linkChild = linkChild.replace("{" + key + "}", elemChild[key])
                    })
                  }
                  return (
                    <SwiftTableStyled.cell key={`cell_${column.name}`} data-type={column["type"]}>
                      <SwiftTableCell
                        link={linkChild}
                        config={data.config}
                        rowKey={key}
                        cellValue={cellValue}
                        column={column}
                        data={elemChild}
                        index={index}
                        inactive_string={inactive_string}
                        dropdown={dropdown}
                        setDropdown={setDropdown}
                      />
                    </SwiftTableStyled.cell>
                  )
                })}
              </SwiftTableStyled.row>
            ))}
          </>
        ) : null}
      </Fragment>
    )
  }
)

const SortableTable = SortableContainer(
  ({ items, links, multiSelect, checkable, handleCheck, handleSelect, columns, rowsSelectedAll, rowsSelected, sortable, dragSortable, inactive_string, dropdown, setDropdown }) => {
    //console.log('swift-table.tsx - items', items)
    return (
      <SwiftTableStyled.body>
        {items.map((value, index) => (
          <SortableRow
            rowsSelectedAll={rowsSelectedAll}
            rowsSelected={rowsSelected}
            columns={columns}
            multiSelect={multiSelect}
            handleSelect={handleSelect}
            checkable={checkable}
            handleCheck={handleCheck}
            links={links}
            index={index}
            value={value}
            key={"swiftTableBodyCell-" + (value.id || index)}
            disabled={!dragSortable ?? false}
            sortable={sortable}
            dragSortable={dragSortable}
            inactive_string={inactive_string}
            dropdown={dropdown}
            setDropdown={setDropdown}
          />
        ))}
      </SwiftTableStyled.body>
    )
  }
)

const SwiftTable = (props) => {
  const {
    columns,
    columnsShow,
    sortField,
    sortDirection,
    data,
    isLoading,
    filterTotal,
    filterLimit,
    links,
    multiSelect,
    checkable,
    handleCheck,
    rowsSelected,
    setRowsSelected,
    rowsSelectedAll,
    setRowsSelectedAll,
    sortable,
    dragSortable,
    dragSortUpdate,
    inactive_string,
    columnsVisible,
  } = props

  const [modal, setModal] = useState(null)
  const [dropdown, setDropdown] = useState(null)

  const handleSelect = (id, checked, shiftKey) => {
    console.log("ST handleSelect", id, checked, shiftKey)

    if (id) {
      //console.log('ST - specific checked', id)
      // specific checkbox !
      if (!shiftKey) {
        var ids = [id]
      } else if (rowsSelected.length > 0 && data && data.length > 0) {
        // shift key press
        var ids = []
        var a = data.findIndex((c) => {
          return c["id"] == rowsSelected[rowsSelected.length - 1]
        })
        var b = data.findIndex((c) => {
          return c["id"] == id
        })
        let clientA = Math.min(a, b)
        let clientB = Math.max(a, b)
        //console.log('shift event', clientA, clientB, rowsSelected)
        for (var i = clientA; i <= clientB; i++) {
          let idCurrent = data[i]["id"]
          if (!rowsSelected.includes(idCurrent)) {
            ids = [idCurrent, ...ids]
          }
        }
      }
      console.log("ST - checked, ids", ids)

      if (checked) {
        setRowsSelected([...rowsSelected, ...ids])
        // if all rows are checked, check 'all' instead of individual ids - this causes issues with filtered list
        // search a client, it filters down to one element, then checking that element checks 'all' which sends and deletes all in list (bc search param is not taken into account...)
        /*if (data.map((elem) => elem.id).every((v) => [...rowsSelected, ...ids].includes(v))) {
          setRowsSelectedAll('all')
          setRowsSelected([])
        }*/
      } else {
        if (rowsSelectedAll) {
          // all pages selected, unchecking individual - here we could do a complex "excluded list"
          // but short term cop-out is just deselecting all so there is less confusion.
          setRowsSelectedAll(null)
          setRowsSelected([])
        } else if (rowsSelectedAll) {
          setRowsSelectedAll(null)
          var rows = data.filter((elem) => elem.id != id).map((elem) => elem.id)
          setRowsSelected(rows)
        } else {
          var index = rowsSelected.findIndex((c) => {
            return c == id
          })
          //console.log('index', index)
          setRowsSelected([...rowsSelected.slice(0, index), ...rowsSelected.slice(index + 1)])
        }
      }
    } else {
      //console.log('ST - all checked')
      // all checkbox !
      if (checked) {
        if (filterLimit && filterTotal && filterLimit < filterTotal) {
          // we specified a filter limit (current page) and total (all matched) and there appears to be more pages
          // so open clarify modal?
          setModal("swift_table_selected_all_clarify")
        } else {
          setRowsSelectedAll("all")
        }
      } else {
        setRowsSelectedAll(null)
        setRowsSelected([])
      }
    }
  }

  //console.log('SwiftTable - columns', columns)
  // console.log("sortField", sortField);
  // console.log("sortDirection", sortDirection);

  return (
    <>
      {!isLoading ? (
        <SwiftTableStyled.root dropdown={dropdown} className={props.className ?? undefined}>
          <SwiftTableStyled.table links={links}>
            {columnsVisible && (
              <SwiftTableStyled.header>
                <SwiftTableStyled.row>
                  {multiSelect ? (
                    <SwiftTableStyled.headerCell checkbox>
                      <SwiftInputCheckbox checked={rowsSelectedAll ? true : false} onChange={(e) => handleSelect(null, e.currentTarget.checked, e.nativeEvent.shiftKey)} />
                    </SwiftTableStyled.headerCell>
                  ) : null}
                  {columns.map((column, i) => (
                    <SwiftTableStyled.headerCell
                      key={"swiftTableHeaderCell-" + (column["id"] ?? column["name"])}
                      active={column["name"] == sortField ? true : false}
                      reverse={column["name"] == sortField && sortDirection != "asc" ? true : false}
                      sortable={sortable}
                      dragSortable={dragSortable}
                      colSpan={i == 0 && checkable ? 2 : 1}
                    >
                      {column["type"] != "options" ? (
                        <div onClick={Object.keys(column).includes("sortable") && column["sortable"] && props.sortUpdate ? () => props.sortUpdate(column["name"]) : () => {}}>
                          <span title={column["title"]} dangerouslySetInnerHTML={{ __html: column["icon"] || column["title"] }}></span>
                          {sortable && Object.keys(column).includes("sortable") && column["sortable"] && (
                            <svg className="swift_table_header_cell_sort" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z" />
                            </svg>
                          )}
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </SwiftTableStyled.headerCell>
                  ))}
                  {dragSortable && <SwiftTableStyled.headerCell></SwiftTableStyled.headerCell>}
                </SwiftTableStyled.row>
              </SwiftTableStyled.header>
            )}
            <SortableTable
              rowsSelectedAll={rowsSelectedAll}
              rowsSelected={rowsSelected}
              columns={columns}
              multiSelect={multiSelect}
              checkable={checkable}
              handleCheck={handleCheck}
              handleSelect={handleSelect}
              links={links}
              items={data}
              sortable={sortable}
              dragSortable={dragSortable}
              distance={5}
              onSortEnd={({ oldIndex, newIndex }) => {
                let newData = arrayMoveImmutable(data, oldIndex, newIndex)
                dragSortUpdate(newData.map((elem, i) => ({ ...elem, sort_order: i })))
              }}
              useDragHandle={true}
              //getHelperDimensions={({ node }) => ({
              //  width: node.offsetWidth,
              //  height: 48,
              //})}
              dropdown={dropdown}
              setDropdown={setDropdown}
              inactive_string={inactive_string}
            />
            {/*<SwiftTableStyled.body>
              {data.length
                ? data.map((data) => (
                    <SortableRow
                      rowsSelectedAll={rowsSelectedAll}
                      rowsSelected={rowsSelected}
                      columns={columns}
                      multiSelect={multiSelect}
                      links={links}
                      value={data}
                      key={"swiftTableBodyCell-" + data.id}
                      onSelect={onSelect}
                    />
                  ))
                : ""}
            </SwiftTableStyled.body>*/}
          </SwiftTableStyled.table>
        </SwiftTableStyled.root>
      ) : (
        <SwiftTableStyled.loading>
          <BarLoader />
        </SwiftTableStyled.loading>
      )}

      <Modal show={modal == "swift_table_selected_all_clarify" ? true : false} onHide={() => setModal(null)}>
        <Modal.Header closeButton>
          <Modal.Title>Select All Rows</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Would you like to select: </p>

          <SwiftForm
            onSubmit={(vals) => {
              if (vals.selection == "visible") {
                setRowsSelectedAll(null)
                setRowsSelected(data.map((elem) => elem.id))
                setModal(null)
              } else if (vals.selection == "all") {
                setRowsSelectedAll(true)
                setRowsSelected([])
                setModal(null)
              } else {
                setRowsSelectedAll(null)
                setRowsSelected([])
                setModal(null)
              }
            }}
            fields={[
              { type: "subtitle", label: "What would you like to select?" },
              {
                key: "selection",
                value: "visible",
                values: [
                  {
                    name: "This page only (" + Math.min(filterLimit, filterTotal) + " items)",
                    value: "visible",
                  },
                  {
                    name: "All pages (" + filterTotal + " items)",
                    value: "all",
                  },
                  ...(rowsSelected.length > 0 || rowsSelectedAll
                    ? [
                        {
                          name: "Deselect all rows",
                          value: "",
                        },
                      ]
                    : []),
                ],
                type: "radio",
              },
              {
                key: "submit",
                type: "submit",
                color: "primary",
                label: "Select",
              },
            ]}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}

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
  checkable: false,
  handleCheck: () => {},
  rowsSelected: [],
  setRowsSelected: () => {},
  rowsSelectedAll: null,
  setRowsSelectedAll: () => {},
  sortable: false,
  dragSortable: false,
  dragSortUpdate: () => {},
  inactive_string: "Inactive",
  columnsVisible: true,
}

export default SwiftTable
