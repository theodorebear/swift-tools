import React, { useEffect, useState } from 'react'
import { SwiftDropdownStyled } from './swift-dropdown-style'
import classnames from 'classnames'
import SwiftIcon from '../icons/swift-icon'

const SwiftDropdown = (props) => {
  const { show, trigger, onTrigger, title, items, activeColor } = props

  useEffect(() => {}, [])

  return (
    <SwiftDropdownStyled
      show={show}
      activeColor={activeColor}
      onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
        onTrigger()
      }}
      position={props.position || 'right'}
      type={props.type}
    >
      <div className="dropdown_trigger">{trigger}</div>
      <div className="dropdown_main">
        <div className="dropdown_main_header">{title}</div>
        <ul>
          {items.map((elem, i) => (
            <li
              className={classnames([elem.active ? 'active' : null, elem.icon ? 'icon' : null])}
              onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                elem.onClick()
              }}
              key={'dropdown-elem-' + i}
            >
              <a
                onClick={(e) => {
                  e.stopPropagation()
                  if (elem.onClick) {
                    e.preventDefault()
                    elem.onClick()
                    onTrigger()
                  }
                }}
                href={elem.href ?? undefined}
                target={elem.target ?? undefined}
              >
                {elem.active ? <SwiftIcon i="check" /> : <SwiftIcon i={elem.icon} />}
                <span>{elem.name}</span>
                {elem.children ? <div className="_carat"></div> : null}
              </a>
              {elem.children ? (
                <ul>
                  {elem.children.map((elemChild, j) => (
                    <li
                      className={classnames([elemChild.active ? 'active' : null, elemChild.icon ? 'icon' : null])}
                      key={'dropdown-elem-' + i + '-child-' + j}
                    >
                      <a
                        onClick={(e) => {
                          e.stopPropagation()
                          elemChild.onClick()
                        }}
                      >
                        {elemChild.active ? <SwiftIcon i="check" /> : <SwiftIcon i={elemChild.icon} />}
                        <span>{elemChild.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </SwiftDropdownStyled>
  )
}

SwiftDropdown.defaultProps = {
  activeColor: '#1b6191',
}

export default SwiftDropdown
