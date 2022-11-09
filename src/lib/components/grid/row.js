import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import SwiftGridCol from "./column"

const SwiftGridRow = ({ children, className, id, breakpoints = [769], spacing = [12], flexDirections, maxColumnCount = 8 }) => {
  return (
    <Wrapper
      className={className}
      id={id}
      breakpoint={breakpoints[0]}
      breakpointTwo={breakpoints[1] || breakpoints[0]}
      spacingX={spacing[0]}
      spacingY={typeof spacing[1] === "number" ? spacing[1] : spacing[0]}
      flexDirections={flexDirections || null}
      maxColumnCount={maxColumnCount}
    >
      {React.Children.toArray(children).map((item, i) => {
        return (
          item && (
            <SwiftGridCol
              breakpoints={breakpoints}
              widths={item.props.widths}
              offsets={item.props.offsets}
              maxColumnCount={maxColumnCount}
              className={item.props.className}
              id={item.props.id}
              key={i}
              spacing={item.props.spacing || spacing}
            >
              {item.props.children}
            </SwiftGridCol>
          )
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `};
  margin: 0 -${(props) => props.spacingX}px 0 -${(props) => props.spacingX}px;
  width: ${(props) => (props.standardWidth ? "100%" : `calc(100% + ${props.spacingX * 2}px)`)};
  @media (min-width: ${(props) => props.breakpoint}px) {
    flex-direction: ${(props) => (props.flexDirections ? props.flexDirections[0] || "row" : "row")};
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: ${(props) => (props.standardWidth ? "0" : `0 -${props.spacingX}px 0 -${props.spacingX}px`)};
  }
`

// ${(props) =>
//   props.flexDirections &&
//   props.flexDirections[1] &&
//   css`
// @media (min-width: ${props.breakpointTwo}px) {
//   flex-direction: ${
//     props.flexDirections ? props.flexDirections[1] || 'row' : 'row'
//   };
//   display: flex;
//   justify-content: flex-start;
//   flex-wrap: wrap;
//   margin: 0 -${props.spacingX}px 0 -${props.spacingX}px;
// `};
// ${(props) =>
//   props.flexDirections &&
//   props.flexDirections[2] &&
//   css`
// @media (min-width: ${props.breakpointThree}px) {
//   flex-direction: ${
//     props.flexDirections ? props.flexDirections[2] || 'row' : 'row'
//   };
//   display: flex;
//   justify-content: flex-start;
//   flex-wrap: wrap;
//   margin: 0 -${props.spacingX}px 0 -${props.spacingX}px;
// `};

export default SwiftGridRow
