import styled from "styled-components"
import { lighten, darken, transparentize, readableColor } from "polished"

export const SwiftInputMinMaxStyled = styled.div`
  display: block;
  width: 100%;

  .swift-input-minmax-inputs {
    display: flex;
    .swift-input-minmax-divider {
      margin: 0 6px;
      span {
        opacity: 0.4;
        display: block;
        font-size: 32px;
        line-height: 54px;
      }
    }
    .swift-input-minmax-input {
      flex: 1;
      .swift-input-minmax-input-wrapper {
        position: relative;
        input,
        .swift-input-minmax-input-veneer {
          display: block;
          width: 100%;
          outline: none;
          border: none;
          padding: 10px 16px 11px;
          color: inherit;
          border-radius: 4px;
          overflow: hidden;
          font-size: 16px;
          line-height: 29px;
          border: 2px solid ${(props) => darken(0.1, "#fff")};
          background: ${(props) => darken(0.05, "#fff")};
          color: #1e1e1e;

          ${(props) =>
            props.color &&
            props.color == "primary" &&
            `

            background: ${lighten(0.4, props.theme.color_primary)};
            border-color: ${props.theme.color_primary};
          `}
          transition: all 0.12s ease-out;
        }
        .swift-input-minmax-input-veneer {
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
        }
      }
      ul {
        margin-top: 8px;
        li {
          font-size: 14px;

          background: #fafafa;
          border-radius: 4px;
          margin-bottom: 4px;
          padding: 6px 12px;
          cursor: pointer;
          span {
            font-weight: 600;
            opacity: 0.6;
            -webkit-font-smoothing: antialiased;
          }

          &:hover {
            background: ${(props) => transparentize(0.6, props.theme.color_primary)};
            color: ${(props) => readableColor(props.theme.color_primary)};
            span {
              opacity: 1;
            }
          }

          &.active {
            background: ${(props) => props.theme.color_primary};
            color: ${(props) => readableColor(props.theme.color_primary)};
            span {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`
