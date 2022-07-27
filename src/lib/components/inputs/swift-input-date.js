import React, { useState, useEffect, useRef } from 'react'
import { SwiftInputDateStyled } from './swift-input-date-style'
import SwiftLabel from './swift-label'
import classNames from 'classnames'
//import DatePicker from 'react-datepicker'
//import "react-datepicker/dist/react-datepicker.css"
import Moment from 'react-moment'
import { SwiftMomentDateFormats } from '../time'

//import DayPicker from 'react-day-picker'
//import 'react-day-picker/lib/style.css'

const formatDate = (d) => {
  if (d instanceof Date && !isNaN(d.valueOf())) {
    const year = d.getFullYear()
    const month = `${d.getMonth() + 1}`
    const day = `${d.getDate()}`
    return `${month}/${day}/${year}`
  }
  return ''
}

const SwiftInputDate = (props) => {
  const innerRef = useRef()
  const [focused, setFocused] = useState(false)
  const [overlayFocused, setOverlayFocused] = useState(false)

  const handleDayChange = (selectedDay, modifiers, dayPickerInput) => {
    const input = dayPickerInput.getInput()
    console.log(selectedDay, modifiers, dayPickerInput, input)

    // this.setState({
    //   selectedDay,
    //   isEmpty: !input.value.trim(),
    //   isDisabled: modifiers.disabled === true,
    // });
  }

  // useEffect(() => {
  //   console.log('overlayFocused', overlayFocused)
  // }, [overlayFocused])
  // useEffect(() => {
  //   console.log('focused', focused)
  // }, [focused])

  const handleDayClick = (day, modifiers, e) => {
    //console.log('day clicked', day, modifiers, e)
    const dayFormatted = formatDate(day)
    //console.log('dayFormatted', dayFormatted)
    innerRef.current.blur()
    props.onChange(dayFormatted)
    //     const value = formatDate(day, format, dayPickerProps.locale);
    // this.setState({ value, typedValue: '', month: day }, () => {
    //   if (onDayChange) {
    //     onDayChange(day, modifiers, this);
    //   }
    //   this.hideAfterDayClick();
    // });
  }

  return (
    <SwiftInputDateStyled
      error={props.error && props.helperText ? true : false}
      entered={props.value.length > 0 ? true : false}
      focused={focused}
    >
      <SwiftLabel>{props.label}</SwiftLabel>
      <div className="swift-input-date-moment-wrapper">
        {props.value ? (
          <>
            <div className="swift-input-date-moment">
              <Moment calendar={SwiftMomentDateFormats}>{props.value}</Moment>
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

        <input
          type={'text'}
          name={props.name}
          ref={innerRef}
          // autoFocus={props.autoFocus}
          disabled={props.disabled}
          value={props.value}
          //onChange={(e) => props.onChange(e.currentTarget.value)}
          autoCorrect="off"
          // spellCheck={props.autoCorrect === false ? 'off' : 'on'}
          autoCapitalize="off"
          autoComplete="off"
          onFocus={() => {
            //console.log('input focus!')
            setFocused(true)
            setTimeout(() => {
              setOverlayFocused(false)
            }, 2)
          }}
          onBlur={() => {
            setTimeout(() => {
              if (!overlayFocused) {
                //console.log('setting focused falssseee')
                setFocused(false)
              }
            }, 1)
          }}
        />
        {focused && (
          <div
            tabIndex={0} // tabIndex is necessary to catch focus/blur events on Safari
            onMouseDown={(e) => {
              //console.log('overlay focus!', innerRef.current)
              e.preventDefault()
              //setOverlayFocused(true)

              //innerRef.current.focus()
            }}
            onBlur={(e) => {
              setOverlayFocused(false)
            }}
          >
            {/*<DayPicker
              selectedDays={new Date()}
              onDayClick={handleDayClick}
              onMouseDown={(e) => {
                e.stopPropagation()
                e.preventDefault()
              }}
            />*/}
          </div>
        )}
      </div>
      {props.error && props.helperText ? <SwiftLabel error>{props.helperText}</SwiftLabel> : null}
    </SwiftInputDateStyled>
  )
}

export default SwiftInputDate
