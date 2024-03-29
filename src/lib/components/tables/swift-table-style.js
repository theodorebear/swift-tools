import styled from "styled-components"
import { lighten, darken, transparentize, readableColor } from "polished"

/*
 *    "SwiftTable" Styled Component
 */
const SwiftTableStyled = {}

SwiftTableStyled["root"] = styled.div`
  display: block;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  ${(props) =>
    props.dropdown &&
    `
   padding-bottom:242px;
  `}
`
SwiftTableStyled["table"] = styled.table`
  width: 100%;
  margin: 0;
  padding: 0;
  background: white;
  color: #000;
`

SwiftTableStyled["cell"] = styled.td`
  display: table-cell;
  font-size: 12px;
  vertical-align: middle;
  position: relative;

  ${({ dragSortable }) =>
    dragSortable &&
    `
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  `}

  > div,
  > a {
    padding: 10px;
    display: block;
    word-break: break-all;
  }
  &:first-of-type {
    > div,
    > a {
      padding-left: 18px;
    }
  }
  &:last-of-type {
    > div,
    > a {
      padding-right: 18px;
    }
  }

  > .swift-table-cell-link {
    cursor: pointer;
    &:hover {
      background: ${(props) => darken(0.02, "#fff")};
    }
  }

  border-bottom: 1px solid ${(props) => darken(0.05, "#fff")};

  max-width: 40vw;
  .swift-table-body-cell-link {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  color: inherit;
  max-height: 72px;

  span {
    display: block;
    font-weight: inherit;
    margin-right: 4px;
  }
  svg {
    display: block;
    width: 22px;
    height: 22px;
    path {
      fill: #000;
    }
    margin-right: 4px;
  }
  time {
    opacity: 0.75;
    font-weight: inherit;
    color: inherit;
    white-space: nowrap;
  }

  &[data-type="media"] {
    width: 172px;
  }
  &[data-type="boolean"],
  &[data-type="options"] {
    width: 52px;
    white-space: nowrap;
  }

  &[data-type="bubbles"] > a {
    padding-top: 2px;
    padding-bottom: 2px;
  }

  &[data-type="number"] {
    white-space: nowrap;
  }
  &[data-type="status"] {
    white-space: nowrap;
  }
  &[data-type="stats"] ul {
    display: flex;
    li {
      text-align: center;
      flex-basis: 33.3%;
      padding: 0 4px;
      strong {
        font-size: 15px;
        line-height: 100%;
        display: block;
      }
      span {
        white-space: nowrap;
        margin: 0;
        font-size: 11px;
        -webkit-font-smoothing: antialiased;
        line-height: 100%;
        display: block;
      }
    }
  }

  ${({ nowrap }) =>
    nowrap &&
    `
    white-space:nowrap;
  `}

  .swift_table_cell_media {
    background-size: cover;
    background-position: center;
    flex: 1;
    &:after {
      content: "";
      display: block;
      padding-top: 100%;
    }
  }

  .swift_table_cell_bubbles {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    li {
      margin-right: 8px;
      &:not(.plain) {
        background: #dae4ea;
        color: rgb(27 97 145);
        padding: 4px 10px;
        font-size: 13px;
        font-weight: 600;
        border-radius: 4px;
      }
      &.plain {
        opacity: 0.75;
        -webkit-font-smoothing: antialiased;
      }
    }
  }

  .swift_table_cell_tooltip {
    display: none;
    position: absolute;
    font-weight: 700;
    top: 100%;
    left: 0;
    background: rgba(0, 0, 0, 0.78);
    color: #fff;
    border-radius: 3px;
    padding: 4px 8px;
    font-size: 10px;
    ::after {
      content: "";
      display: block;
      border-bottom: 4px solid rgba(0, 0, 0, 0.78);
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      position: absolute;
      bottom: 100%;
      left: 16px;
    }
  }
  &:hover .swift_table_cell_tooltip {
    display: block;
  }

  ${({ checkbox }) =>
    checkbox &&
    `
      > a,>div {
        padding: 2px 8px;
        padding-right: 0px;
        user-select: none;
       }

      
      width: 20px;
    }

    &:first-of-type {
    > div,
    > a {
      padding-left:8px;
    }
  }
  }`}

  ${({ handle }) =>
    handle &&
    `
    cursor:pointer;
      width: 20px;
  `}

  ${({ full }) =>
    full &&
    `
    width:100%;
  `}
`

SwiftTableStyled["cellContent"] = styled.div`
  display: flex;
  align-items: center;
  ${({ textAlign }) =>
    textAlign == "right" &&
    `
  justify-content: flex-end;
  `}

  svg {
    width: 18px;
    height: 18px;
  }
  span {
    font-weight: inherit;
  }
`

SwiftTableStyled["headerCell"] = styled.td`
  cursor: pointer;
  display: table-cell;

  vertical-align: middle;
  padding: 10px;
  font-size: 12px;
  border-bottom: 2px solid ${(props) => darken(0.1, "#fff")};

  > div {
    display: flex;
    align-items: center;
    font-weight: inherit;
  }
  text-transform: uppercase;
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
  font-size: 13px;

  span {
    display: block;
    font-weight: inherit;
    margin-right: 4px;
    white-space: nowrap;
  }
  svg {
    display: block;
    width: 14px;
    height: 14px;
  }
  .swift_table_header_cell_sort {
    display: block;
    width: 14px;
    height: 14px;
    transform: rotate(90deg);
    transition: transform 0.15s ease-out;
    path {
      fill: #000;
    }
  }
  ${({ active, sortable }) =>
    !active &&
    sortable &&
    `
    span {
      opacity:0.6;
    }
    .swift_table_header_cell_sort {
      opacity: 0;
      pointer-events: none;
    }
    &:hover {
      span {
        opacity:0.9;
      }
      .swift_table_header_cell_sort {
        opacity: 0.4;
      }
    }
  }`}

  &:first-of-type {
    padding-left: 18px;
  }
  &:last-of-type {
    padding-right: 18px;
  }

  ${({ checkbox }) =>
    checkbox &&
    `
     padding: 2px 8px;
     padding-right: 0px;
     &:first-of-type { 
       padding-left:8px;
    }
  }`}

  ${({ reverse }) =>
    reverse &&
    `
    .swift_table_header_cell_sort {
      transform: rotate(-90deg);
    }
  }`}
`

SwiftTableStyled["header"] = styled.thead``
SwiftTableStyled["body"] = styled.tbody``

SwiftTableStyled["row"] = styled.tr`
  ${({ links }) =>
    links &&
    `
      cursor:pointer;
      &:hover td {
          background: ${darken(0.02, "#fff")};
          color: #1b6191;
      }
   `}

  ${({ inactive }) =>
    inactive &&
    `
      opacity:0.5;
  `}
`

SwiftTableStyled["loading"] = styled.section`
  width: 100%;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h3 {
    margin-top: 12px;
    font-size: 0.75em;
    font-weight: 700;
    opacity: 0.5;
    font-style: italic;
    -webkit-font-smoothing: antialiased;
  }
`

export default SwiftTableStyled
