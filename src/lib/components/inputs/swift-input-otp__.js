import React, { useRef, useEffect, useState } from 'react'
import { SwiftInputOTPStyled } from './swift-input-otp-style'
import SwiftLabel from './swift-label'
import classNames from 'classnames'
import NumberFormat from 'react-number-format'

const SwiftInputOTP = (props) => {
  const innerRef = useRef()
  const [focused, setFocused] = useState(false)
  useEffect(() => {
    if (props.autoFocus && innerRef) innerRef?.current?.focus()
  }, [])

  return (
    <SwiftInputOTPStyled
      error={props.error && props.helperText ? true : false}
      entered={props.value ? true : false}
      valuesCount={props.values ? props.values.length : 0}
    >
      <SwiftLabel>{props.label}</SwiftLabel>
      <div className="swift_input_otp_input_wrapper">
        <ul className="swift_input_otp_input_wrapper_bg">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <input
          type={props.type ? props.type : 'text'}
          name={props.name}
          ref={innerRef}
          // autoFocus={props.autoFocus}
          disabled={props.disabled}
          value={props.value}
          onChange={(e) => props.onChange(e.currentTarget.value)}
          autoCorrect="off"
          // spellCheck={props.autoCorrect === false ? 'off' : 'on'}
          autoCapitalize="off"
          autoComplete="off"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          maxLength={6}
        />

        {props.clearable && props.value ? (
          <div onClick={() => props.onChange('')} className="swift_input_otp_input_clear">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
            </svg>
          </div>
        ) : null}
      </div>
      {props.error && props.helperText ? <SwiftLabel error>{props.helperText}</SwiftLabel> : null}
    </SwiftInputOTPStyled>
  )
}

export default SwiftInputOTP
