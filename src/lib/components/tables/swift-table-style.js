import styled from 'styled-components'
import { lighten, darken, transparentize, readableColor } from 'polished'

/*
 *    "SwiftTable" Styled Component
 */
const SwiftTableStyled = {}

SwiftTableStyled['root'] = styled.div`
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
SwiftTableStyled['table'] = styled.table`
  width: 100%;
  margin: 0;
  padding: 0;
  ${(props) =>
    props.links &&
    `
    tr:hover {
      td {
        background: ${(props) => darken(0.02, '#fff')};
       }
    }
  `}
`

SwiftTableStyled['cell'] = styled.td`
  display: table-cell;
  font-size: 12px;
  vertical-align: middle;

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

  > a.swift-table-cell-link {
    cursor: pointer;
    &:hover {
      text-decoration: underline !important;
    }
  }

  border-bottom: 1px solid ${(props) => darken(0.05, '#fff')};

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

  &[data-type='media'] {
    width: 172px;
  }
  &[data-type='boolean'],
  &[data-type='options'] {
    width: 52px;
    white-space: nowrap;
  }

  &[data-type='number'] {
    white-space: nowrap;
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
      content: '';
      display: block;
      padding-top: 100%;
    }
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

SwiftTableStyled['cellContent'] = styled.div`
  display: flex;
  align-items: center;
  ${({ textAlign }) =>
    textAlign == 'right' &&
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

SwiftTableStyled['headerCell'] = styled.td`
  cursor: pointer;
  display: table-cell;

  vertical-align: middle;
  padding: 10px;
  font-size: 12px;
  border-bottom: 2px solid ${(props) => darken(0.1, '#fff')};

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

SwiftTableStyled['header'] = styled.thead``
SwiftTableStyled['body'] = styled.tbody``

SwiftTableStyled['row'] = styled.tr`
  ${({ links }) =>
    links &&
    `
      cursor:pointer;
      &:hover {
          background: ${(props) => darken(0.05, '#fff')};
      }
    }
  }`}

  ${({ inactive }) =>
    inactive &&
    `
      opacity:0.5;
    }
  }`}
`

SwiftTableStyled['loading'] = styled.section`
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
