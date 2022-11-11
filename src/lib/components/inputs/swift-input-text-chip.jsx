import React, { useState } from "react"
import { SwiftInputTextStyledChip } from "./swift-input-text-chip-style"
import SwiftLabel from "./swift-label"
import classNames from "classnames"
//import Chips, { Chip } from 'react-chips'

const SwiftInputTextChip = (props) => {
  const { value } = props
  var valueArr = value.length ? value.split(",") : []

  const addChip = (val) => {
    props.onChange({ ...valueArr, val }.join(","))
  }
  const removeChip = (index) => {
    props.onChange({ ...valueArr.filter((v) => v != value) }.join(","))
  }
  const onChange = (val) => {
    props.onChange(val.join(","))
  }

  return (
    <SwiftInputTextStyledChip error={props.error && props.helperText ? true : false} entered={props.value && props.value.length > 0 ? true : false}>
      <SwiftLabel>{props.label}</SwiftLabel>
      {/*<Chips
        value={props.value.length ? props.value.split(',') : []}
        onChange={onChange}
        suggestions={props.suggestions.filter((sugg) => !value || !value.split(',').includes(sugg)) || []}
        alwaysRenderSuggestions={true}
      />*/}
      {props.error && props.helperText ? <SwiftLabel error>{props.helperText}</SwiftLabel> : null}
    </SwiftInputTextStyledChip>
  )
}

export default SwiftInputTextChip
