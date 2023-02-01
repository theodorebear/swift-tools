import styled from "styled-components"
import { lighten, darken, transparentize, readableColor } from "polished"

export const SwiftTabs = styled.section`
  background: #fff;
  color: #1e1e1e;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
      &:after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: #1b6191;
        opacity: 0;
      }
      svg {
        display: block;
        width: 22px;
        height: 22px;
        & + span {
          margin-left: 8px;
        }
      }
      i {
        svg {
          display: block;
          width: 22px;
          height: 22px;
        }
        & + span {
          margin-left: 8px;
        }
      }
      &:not(.active) {
        background: #fafafa;
        span {
          opacity: 0.5;
        }
      }
      &:hover {
        &:after {
          opacity: 0.5;
        }
      }
      &.active {
        svg {
          fill: #1b6191;
        }
        &:after {
          opacity: 1;
        }
      }
      span {
        font-size: 14px;
        font-weight: 800;
        -webkit-font-smoothing: antialiased;
        flex: 1;
        display: block;
        white-space: nowrap;
      }
      small {
        font-size: 13px;
        font-weight: 600;
        opacity: 0.65;
        -webkit-font-smoothing: antialiased;
        margin-left: 8px;
        display: block;
      }
      & div,
      & a {
        padding: 12px 18px;
        display: flex;
        align-items: center;
      }
      a {
        display: flex;
        color: inherit;
        align: center;
        svg {
          display: block;
          width: 18px;
          height: 18px;
          margin-right: 12px;
          opacity: 0.75;
        }
      }
    }
  }
`
export const SwiftTabsContent = styled.section`
  padding: 12px 0;
`
