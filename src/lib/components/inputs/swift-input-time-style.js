import styled from 'styled-components'
import { lighten, darken, transparentize, readableColor } from 'polished'

export const SwiftInputTimeStyled = styled.div`
  display: block;
  width: 100%;

  .swift-input-date-moment-wrapper {
    position: relative;
  }

  & input,
  .swift-input-date-moment {
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

    border: 2px solid #e6e6e6;
    background: #f2f2f2;
    color: #1e1e1e;

    transition: all 0.12s ease-out;
  }

  .rc-time-picker {
    .rc-time-picker-input {
      height: auto;
      font-size: inherit;
    }
  }
  & input:hover,
  .swift-input-date-moment:hover {
    background: #fafafa;
    color: #1e1e1e;
  }
  & input:focus {
    background: white;
    color: #1e1e1e;
  }

  .swift-input-date-moment {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    pointer-events: none;
  }
  .swift-input-date-moment-clear {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    cursor: pointer;
    z-index: 10;

    padding: 0 8px;
    svg {
      height: 12px;
      height: 12px;
      opacity: 0.25;
    }
    &:hover {
      svg {
        opacity: 0.5;
      }
    }
  }
  ${({ entered }) =>
    entered &&
    `
    input,input:hover {
      background: white;
      color: #1e1e1e;
    }
  `}
  ${({ error }) =>
    error &&
    `
    input {
        background: #fde0e0;
      }
  `}
`
