import React, { useState } from 'react'
import { SwiftInputTimeStyled } from './swift-input-time-style'
import SwiftLabel from './swift-label'
import classNames from 'classnames'
import Moment from 'react-moment'
import moment from 'moment'
//import TimePicker from "rc-time-picker"
//import "rc-time-picker/assets/index.css"

const SwiftInputTime = (props) => {
  //console.log("sit - props", props)
  //const [open, setOpen] = useState(false)
  return (
    <SwiftInputTimeStyled error={props.error && props.helperText ? true : false} entered={props.value.length > 0 ? true : false}>
      <SwiftLabel>{props.label}</SwiftLabel>
      <div className="swift-input-date-moment-wrapper">
        {props.value ? (
          <>
            <div className="swift-input-date-moment">
              <Moment format="h:mm a" parse="H:mm:s" date={props.value} />
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
        TimePicker was here, removed because it didnt work with RemixJS!
      </div>
      {props.error && props.helperText ? <SwiftLabel error>{props.helperText}</SwiftLabel> : null}
    </SwiftInputTimeStyled>
  )
}

export default SwiftInputTime
