import React from 'react'
import SwiftLabel from '../swift-label/swift-label'
import SwiftSelectEnumStyled from './swift-select-enum-style'
import classnames from 'classnames'

const SwiftSelectEnum = (props) => {
  //console.log('SwiftSelectEnum: props', props)

  return (
    <SwiftSelectEnumStyled
      error={props.error && props.helperText ? true : false}
      entered={props.value && props.value.length > 0 ? true : false}
    >
      {!props.label || (props.label && props.label.length > 0 && <SwiftLabel>{props.label ?? props.name}</SwiftLabel>)}
      <ul className="swift_select_enum_elem">
        {props.values.map((val, i) => (
          <li key={i} onClick={() => props.onChange(val['value'])} className={classnames({ active: props.value == val['value'] })}>
            {val['name']}
          </li>
        ))}
      </ul>
      {/*<select name={props.name} value={props.value ?? ''} onChange={props.onChange}>
        {(props.emptyValue ? [{ name: props.emptyLabel ?? '', value: '' }, ...props.values] : props.values).map((item, index) => (
          <option
            key={item.value || item.value === null ? item.value : item.name}
            value={
              item.value || item.value === 0 || item.value === '0' ? item.value : item.value === null || item.value === '' ? '' : item.name
            }
          >
            {item.name}
          </option>
        ))}
      </select>*/}
      {props.error && props.helperText ? <SwiftLabel error>{props.helperText}</SwiftLabel> : null}
    </SwiftSelectEnumStyled>
  )
}

export default SwiftSelectEnum
