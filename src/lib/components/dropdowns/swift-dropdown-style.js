import styled from 'styled-components'
import { transparentize } from 'polished'

export const SwiftDropdownStyled = styled.div`
  position: relative;
  display: inline-block;
  .dropdown_trigger {
    display: flex;
    align-items: center;
    cursor: pointer;
    h2 {
    }
    ._carat {
      margin-left: 5px;
      margin-right: 5px;
    }
    svg {
      width: 18px;
      height: 18px;
      opacity: 0.33;
      path {
      }
    }
    &:hover svg {
      opacity: 1;
    }
  }

  .dropdown_main {
    position: absolute;
    left: calc(100% - 37px);
    top: calc(100% + 4px);
    background: white;
    color: #1e1e1e;
    min-width: 260px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    z-index: 150;
    display: none;
    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 100%;
      left: 16px;
      border-bottom: 12px solid white;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
      pointer-events: none;
    }
    /*&:before {
        content: "";
        position: absolute;
        transform: rotate(45deg);
        width: 16.97px;
        height: 16.97px;
        top: -8px;
        left: 20px;
        z-index: -1;
        box-shadow: 0px 0px 10px 0px red;
    }*/
    & .dropdown_main_header {
      padding: 15px 16px;
      font-size: 14px;
      font-weight: 600;
      opacity: 0.5;
    }
    & ul {
      & li {
        position: relative;
        border-top: 1px solid rgba(247, 247, 247, 1);
        a {
          padding: 14px 18px;
          cursor: pointer;
          display: flex;
          align-items: center;

          svg {
            position: absolute;
            top: calc(50% - 9px);
            left: 18px;
            width: 18px;
            height: 18px;
            opacity: 0.5;
          }
          & span {
            flex: 1;
            font-size: 14px;
            font-weight: 800;
            -webkit-font-smoothing: antialiased;
            opacity: 0.9;
          }
          & ._carat {
            transform: rotate(-90deg);
          }
          &:hover {
            background: ${(props) => transparentize(0.95, props.theme.color_primary)};
            svg {
              opacity: 1;
              & path {
                fill: ${(props) => props.theme.color_primary};
              }
            }
          }
        }
        &.icon > a {
          padding-left: 48px;
        }
        &.active > a {
          background: ${(props) => transparentize(0.9, props.theme.color_primary)};
          color: ${(props) => props.theme.color_primary};
          padding-left: 48px;
          > svg {
            & path {
              fill: ${(props) => props.theme.color_primary};
            }
            opacity: 1;
          }
        }
        ul {
          position: absolute;
          left: 100%;
          top: 0;
          min-width: 260px;
          box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
          border-radius: 2px;
          background: white;
          color: #1e1e1e;
          display: none;
          max-height: 600px;
          overflow-y: auto;
        }
        &:hover ul {
          display: block;
        }
      }
    }
  }
  .dropdown_mainable {
    position: relative;
    cursor: pointer;
    &.active .dropdown_main {
      display: block;
    }
  }

  ${({ show }) =>
    show &&
    `
    .dropdown_trigger {
      svg {
        opacity: 1;
      }
    }
    .dropdown_main {
      display:block;
    }
    `}

  ${({ position }) =>
    position == 'left' &&
    `
.dropdown_main {
  left: initial;
  right: 5px;
  &:after {
    left:initial;
    right:16px;
  }
}
    `}

    ${({ position, type }) =>
    position == 'left' &&
    type == 'dots' &&
    `
    .dropdown_main {
      right: -19px;
    }
    `}
`
