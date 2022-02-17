import React, { useState } from 'react'
import { SwiftInputDateStyled } from './swift-input-date-style'
import SwiftLabel from './swift-label'
import classNames from 'classnames'
//import DatePicker from 'react-datepicker'
//import "react-datepicker/dist/react-datepicker.css"
import Moment from 'react-moment'

const SwiftInputDate = (props) => {
  const calendarDateStrings = {
    lastDay: '[Yesterday]',
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    lastWeek: '[last] dddd',
    nextWeek: 'dddd',
    sameElse: 'L',
  }
  return (
    <SwiftInputDateStyled error={props.error && props.helperText ? true : false} entered={props.value.length > 0 ? true : false}>
      <SwiftLabel>{props.label}</SwiftLabel>
      <div className="swift-input-date-moment-wrapper">
        {props.value ? (
          <>
            <div className="swift-input-date-moment">
              <Moment calendar={calendarDateStrings}>{props.value}</Moment>
            </div>
            <div
              className="swift-input-date-moment-clear"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                props.onChange('')
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
              </svg>
            </div>
          </>
        ) : (
          <div className="swift-input-date-moment"></div>
        )}
        DatePicker WAS HERE, didnt work with RemixJS
      </div>
      {props.error && props.helperText ? <SwiftLabel error>{props.helperText}</SwiftLabel> : null}
    </SwiftInputDateStyled>
  )
}

export default SwiftInputDate
