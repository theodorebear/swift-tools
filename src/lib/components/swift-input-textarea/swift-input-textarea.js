import React from 'react'
import { SwiftInputTextareaStyled } from './swift-input-textarea-style'
import SwiftLabel from '../swift-label/swift-label'
import classNames from 'classnames'

const SwiftInputTextarea = (props) => {
  return (
    <SwiftInputTextareaStyled
      error={props.error && props.helperText ? true : false}
      entered={props.value.length > 0 ? true : false}
      height={props.height ?? undefined}
    >
      <SwiftLabel>{props.label}</SwiftLabel>
      <textarea
        name={props.name}
        autoFocus={props.autoFocus}
        disabled={props.disabled}
        onChange={props.onChange}
        value={props.value}
        autoCorrect={props.autoCorrect === false ? 'off' : 'on'}
        // spellCheck={props.autoCapitalize === false ? 'off' : 'on'}
        autoCapitalize={props.autoCapitalize === false ? 'off' : 'on'}
        autoComplete={props.autoComplete === false ? 'off' : 'on'}
        placeholder={props.placeholder ?? undefined}
      ></textarea>
      {props.error && props.helperText ? <SwiftLabel error>{props.helperText}</SwiftLabel> : null}
    </SwiftInputTextareaStyled>
  )
}

export default SwiftInputTextarea
