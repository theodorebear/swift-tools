import React from 'react'
import SwiftLabel from './swift-label'
import { SwiftSelectStyled } from './swift-select-style'
import classNames from 'classnames'

const SwiftSelect = (props) => {
  //console.log('SwiftSelect: props', props)

  const { theme } = props

  return (
    <SwiftSelectStyled
      error={props.error && props.helperText ? true : false}
      entered={props.value && props.value.length > 0 ? true : false}
      theme={theme}
    >
      <div className="swift_input_select_label">
        {!props.label || (props.label && props.label.length > 0 && <SwiftLabel theme={theme}>{props.label ?? props.name}</SwiftLabel>)}
        {props.link && (
          <div className="swift_input_select_label_link">
            {props.link.onClick ? (
              <a onClick={props.link.onClick}>
                <span>{props.link.label || 'View'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z" />
                </svg>
              </a>
            ) : (
              <a target="_blank" href={props.link.url ? props.link.url : props.link}>
                <span>{props.link.label || 'View'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
      <div className={classNames('swift_input_select_input_element', props.error && props.helperText && 'error')}>
        <select name={props.name} value={props.value ?? ''} onChange={props.onChange}>
          {(props.emptyValue ? [{ name: props.emptyLabel ?? '', value: '' }, ...props.values] : props.values).map((item, index) => (
            <option
              key={item.value || item.value === null ? item.value : item.name}
              value={
                item.value || item.value === 0 || item.value === '0'
                  ? item.value
                  : item.value === null || item.value === ''
                  ? ''
                  : item.name
              }
              disabled={item.disabled ?? undefined}
            >
              {item.name}
            </option>
          ))}
        </select>
      </div>
      {props.sublabel ? (
        <SwiftLabel theme={theme} style={{ marginTop: '8px', opacity: 0.4 }} className="swift_input_text_sublabel">
          {props.sublabel}
        </SwiftLabel>
      ) : null}
      {props.error && props.helperText ? (
        <SwiftLabel theme={theme} error className="swift_input_text_label_error">
          {props.helperText}
        </SwiftLabel>
      ) : null}
    </SwiftSelectStyled>
  )
}
SwiftSelect.defaultProps = {
  emptyValue: true,
  theme: 'default',
}

export default SwiftSelect
