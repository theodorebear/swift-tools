import React, { useRef, useEffect, useState } from 'react'
import { SwiftInputTextSelectStyled } from './swift-input-textselect-style'
import SwiftLabel from './swift-label'
import classNames from 'classnames'
import NumberFormat from 'react-number-format'

const SwiftInputTextSelect = (props) => {
  const innerRef = useRef()
  const [focused, setFocused] = useState(false)
  useEffect(() => {
    if (props.autoFocus && innerRef) innerRef?.current?.focus()
  }, [])

  return (
    <SwiftInputTextSelectStyled
      error={props.error && props.helperText ? true : false}
      entered={props.value ? true : false}
      valuesCount={props.values ? props.values.length : 0}
    >
      <SwiftLabel>{props.label}</SwiftLabel>
      <div className="swift_input_textselect_input_wrapper">
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
        />

        {focused && props.values && props.values.length ? (
          <div className="swift_input_textselect_input_values">
            <ul>
              {props.values.map((elem, i) => (
                <li
                  key={i}
                  onMouseDown={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    props.onChange(elem['value'])
                    innerRef.current.blur()
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                  }}
                >
                  {elem['name']}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {props.mask && !focused && (
          <div className="swift_input_textselect_input_mask">
            {props.value || props.value === 0 ? (
              <>
                {props.mask == 'financial' ? (
                  <NumberFormat
                    value={props.value}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={props.mask_prefix || '$'}
                    suffix={props.mask_suffix}
                  />
                ) : props.mask == 'number' ? (
                  <NumberFormat
                    value={props.value}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={props.mask_prefix}
                    suffix={props.mask_suffix}
                  />
                ) : (
                  ''
                )}
              </>
            ) : (
              <>{props.mask_message_none}</>
            )}
          </div>
        )}

        {props.clearable && props.value ? (
          <div onClick={() => props.onChange('')} className="swift_input_textselect_input_clear">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
            </svg>
          </div>
        ) : null}
      </div>
      {props.error && props.helperText ? <SwiftLabel error>{props.helperText}</SwiftLabel> : null}
    </SwiftInputTextSelectStyled>
  )
}

export default SwiftInputTextSelect
