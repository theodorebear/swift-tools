import styled from 'styled-components'
import { darken, lighten, transparentize, readableColor } from 'polished'

export const SwiftButtonStyled = styled.button`
  margin: 0;
  padding: 0;
  border: 0;

  ${(props) =>
    props.theme == 'default'
      ? `
    position: relative;
    padding: 9px 18px;
    font-weight: 700;
    font-size: 15px;
    line-height: 32px;
    border-radius: 2px;
    border: 2px solid black;
    outline: none;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;


    ${
      props.fillType == 'filled'
        ? `
        color: ${readableColor(props.buttonColor)};
        background: ${props.buttonColor};
        border-color: ${props.buttonColor};
        i {
          svg {
            fill: ${readableColor(props.buttonColor)};
          }
        }
        &:hover {
          background:${darken(0.05, props.buttonColor)};
        }
      `
        : props.fillType == 'light'
        ? `
        color: ${props.buttonColor};
        background: ${transparentize(0.7, props.buttonColor)};
        border-color: ${props.buttonColor};
        i {
          svg {
            fill: ${props.buttonColor};
          }
        }
        &:hover {
          color:${readableColor(props.buttonColor)};
          background:${props.buttonColor};
          svg {
            fill: ${readableColor(props.buttonColor)};
          }
        }
      `
        : null
    }

    ${
      props.flip &&
      `
      flex-direction:row-reverse;
      i ~ span {
        margin-right: 8px;
      }
      svg ~ span {
        margin-right: 8px;
      }
      .swift_button_icon ~ span {
        margin-right: 8px;
      }
    `
    }

    svg {
      display: block;
      width: 18px;
      height: 18px;
      fill: white;
    }
    span {
      font-weight: inherit;
      white-space: nowrap;
      display: block;
      line-height: inherit;
    }

    ${
      !props.flip &&
      `
    i ~ span {
      margin-left: 8px;
    }
    svg ~ span {
      margin-left: 8px;
    }
    .swift_button_icon ~ span {
      margin-left: 8px;
    }
    `
    }


    span {
      ~ i,
      .swift_button_icon {
        margin-left: 8px;
      }
    }

    ${
      props.size == 'small' &&
      `
      padding: 8px 12px;
      font-size:11px;
      line-height: 15px;
      border-width:1.5px;
      svg {
        width:13px;
        height:13px;
      }
    `
    }

      &.disabled {
        cursor: not-allowed !important;
          background: #bbb;
          color: #444;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          pointer-events: none;
          cursor: not-allowed !important;
          border-color: #bbb;
          svg {
            opacity: 0.25;
            path {
              fill: #444;
            }
          }
      }

      .loader {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        & > span {
          display: block;
          width: 100%;
        }
      }

      ${
        props.inlineForm &&
        props.theme != 'minimal' &&
        `
        @media screen and (min-width: 48em) {
          width:100%;
          margin-top:24px;
          /*text-align:center;
          justify-content: center;*/
        }
      `
      }

      ${
        props.width == 'full' &&
        `
        width:100%;
        text-align:center;
        justify-content: center;
        a {
          justify-content:center;
        }
      `
      }
  `
      : props.theme == 'minimal'
      ? `
    width:100%;
    display:block;
    @media screen and (min-width: 48em) {
      width:inherit;
      display:inherit;
        border-top-right-radius:2px;
        border-bottom-right-radius:4px;
    }
      flex:1;
      width:100%;
      border:1px solid #000;
      padding: 10px 18px 11px;
      display:flex;
      align-items:center;
      justify-content:center;
      font-weight: 700;
      font-size: 15px;
      line-height: 32px;

      

      color: ${readableColor(props.buttonColor)};
      background: ${props.buttonColor};
      border-color: ${props.buttonColor};
      i {
        svg {
          fill: ${readableColor(props.buttonColor)};
        }
      }
      &:hover {
        background:${darken(0.05, props.buttonColor)};
      }
      i {
        display:none;
        margin-right:8px;
        svg {
          width:16px;
          height:16px;
        }
      }

  `
      : props.theme == 'none'
      ? `
      width:100%;
      border:1px solid #000;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:8px 16px;

      color: ${readableColor(props.buttonColor)};
      background: ${props.buttonColor};
      border-color: ${props.buttonColor};
      i {
        svg {
          fill: ${readableColor(props.buttonColor)};
        }
      }
      &:hover {
        background:${darken(0.05, props.buttonColor)};
      }
      i {
        display:none;
        margin-right:8px;
        svg {
          width:16px;
          height:16px;
        }
      }
  `
      : ``}
`
