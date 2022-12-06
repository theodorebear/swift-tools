import React, { useState, useEffect, useRef } from "react"
import { SwiftInputMinMaxStyled } from "./swift-input-minmax-style"
import SwiftLabel from "./swift-label"
import classNames from "classnames"
import { numberShorten } from "../../helpers"

const SwiftInputMinMax = (props) => {
  //console.log('SwiftInputMinMax - props', props)

  const { value, suggestions, suggestionLabels, suggestionFormat, emptyLabel, format, onChange, onSelectMax, allowEqual } = props

  const [focus, setFocus] = useState(null)
  const [maxFocused, setMaxFocused] = useState(null)
  const [minFocused, setMinFocused] = useState(null)

  const refMin = useRef(false)
  const refMax = useRef(false)

  const [valueMin, setValueMin] = useState("")
  const [valueMax, setValueMax] = useState("")

  useEffect(() => {
    if (focus == "max" && refMax && refMax.current) {
      //console.log('focusing refmax!! ', refMax)
      refMax.current.focus()
    }
  }, [focus])

  const handleChange = () => {
    var vMin = parseInt(valueMin)
    var vMax = parseInt(valueMax)

    if (vMin && vMax) {
      // validate that this min < max and max > min
      if (vMin > vMax) {
        console.log("handleChange, and its greater than the max!!")
        setValueMax("")
        vMax = ""
      } else if (vMax < vMin) {
        console.log("handleChange, and its less than the min!!")
        setValueMin("")
        vMin = ""
      }
    }

    // determine combined value
    var vBoth = null
    if (vMin && vMax) {
      vBoth = vMin + "-" + vMax
    } else if (vMin) {
      vBoth = vMin + "+"
    } else if (vMax) {
      vBoth = vMax + "-"
    }

    // send to onchange
    onChange({
      value: vBoth,
      value_min: vMin,
      value_max: vMax,
    })
  }

  useEffect(() => {
    console.log("SwiftInputMinMax - value changing", value)
    if (!value) {
      setValueMin("")
      setValueMax("")
      return
    }
    if (value.includes("+")) {
      setValueMin(value.replace("+", ""))
      setValueMax("")
    } else if (value.charAt(value.length - 1) == "-") {
      setValueMax(value.replace("-", ""))
      setValueMin("")
    } else if (value.includes("-")) {
      const valueSplit = value.split("-")
      setValueMin(valueSplit[0])
      setValueMax(valueSplit[1])
    }
  }, [value])

  return (
    <SwiftInputMinMaxStyled error={props.error && props.helperText ? true : false}>
      {props.label && props.label.length > 0 && <SwiftLabel>{props.label}</SwiftLabel>}
      <div className="swift-input-minmax-inputs">
        <div className="swift-input-minmax-input min">
          <div className="swift-input-minmax-input-wrapper">
            <input
              type="text"
              ref={refMin}
              value={valueMin}
              onChange={({ currentTarget: { value: val } }) => {
                setValueMin(val)
              }}
              onFocus={(e) => {
                e.target.select()
                setFocus("min")
                setMinFocused(true)
              }}
              onBlur={() => {
                setMinFocused(false)
                handleChange()
              }}
            />
            {!minFocused && (!valueMin || format == "cost") ? (
              <div className="swift-input-minmax-input-veneer">{!minFocused && !valueMin ? emptyLabel : !minFocused && format == "cost" ? "$" + parseInt(valueMin).toLocaleString() : null}</div>
            ) : null}
          </div>

          {/*suggestions && focus == "min" && (*/}
          {suggestions && minFocused && (
            <ul>
              <li
                onMouseDown={() => {
                  setValueMin("")
                  setFocus("max")
                }}
                className={!valueMin ? "active" : ""}
              >
                <span>No Minimum</span>
              </li>
              {suggestions.slice(0, 8).map((elem, i) => (
                <li
                  key={i}
                  onMouseDown={() => {
                    setValueMin(elem)
                    setFocus("max")
                  }}
                  className={valueMin && elem == valueMin ? "active" : ""}
                >
                  <span>
                    {suggestionLabels && Object.keys(suggestionLabels).includes("" + elem)
                      ? suggestionLabels[elem]
                      : format == "cost"
                      ? "$" + numberShorten(elem)
                      : elem == 1 && suggestionFormat != "%s" && suggestionFormat.charAt(suggestionFormat.length - 1) == "s"
                      ? suggestionFormat.substr(0, suggestionFormat.length - 1).replace("%s", elem)
                      : suggestionFormat.replace("%s", elem)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="swift-input-minmax-divider">
          <span>-</span>
        </div>
        <div className="swift-input-minmax-input max">
          <div className="swift-input-minmax-input-wrapper">
            <input
              type="text"
              ref={refMax}
              value={valueMax}
              onChange={({ currentTarget: { value: val } }) => {
                setValueMax(val)
              }}
              onFocus={(e) => {
                setFocus("max")
                setMaxFocused(true)
                e.target.select()
              }}
              onBlur={() => {
                setMaxFocused(false)
                handleChange()
              }}
            />

            {!maxFocused && (!valueMax || format == "cost") ? (
              <div className="swift-input-minmax-input-veneer">{!maxFocused && !valueMax ? emptyLabel : !maxFocused && format == "cost" ? "$" + parseInt(valueMax).toLocaleString() : null}</div>
            ) : null}
          </div>
          {suggestions && maxFocused && (
            <ul>
              {suggestions
                .filter((elem) => !valueMin || valueMin <= elem)
                .slice(0, 8)
                .map((elem, i) => (
                  <li
                    key={i}
                    onMouseDown={() => {
                      setValueMax(elem)
                    }}
                    className={valueMax && elem == valueMax ? "active" : ""}
                  >
                    <span>
                      {suggestionLabels && Object.keys(suggestionLabels).includes("" + elem)
                        ? suggestionLabels[elem]
                        : format == "cost"
                        ? "$" + numberShorten(elem)
                        : elem == 1 && suggestionFormat != "%s" && suggestionFormat.charAt(suggestionFormat.length - 1) == "s"
                        ? suggestionFormat.substr(0, suggestionFormat.length - 1).replace("%s", elem)
                        : suggestionFormat.replace("%s", elem)}
                    </span>
                  </li>
                ))}
              <li
                onMouseDown={() => {
                  setValueMax("")
                }}
                className={!valueMax ? "active" : ""}
              >
                <span>No Maximum</span>
              </li>
            </ul>
          )}
        </div>
      </div>
      {props.error && props.helperText ? <SwiftLabel error>{props.helperText}</SwiftLabel> : null}
    </SwiftInputMinMaxStyled>
  )
}
SwiftInputMinMax.defaultProps = {
  value: null,
  onChange: () => {},
  suggestions: null,
  suggestionLabels: null,
  suggestionFormat: "%s",
  emptyLabel: "Any",
  format: null,
  allowEqual: false,
  onSelectMax: () => {},
}

export default SwiftInputMinMax
