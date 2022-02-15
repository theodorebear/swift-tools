import React, { useRef, useEffect, useState } from 'react'
import { SwiftInputTextStyled } from './swift-input-text-style'
import SwiftLabel from '../swift-label/swift-label'
//import { _inputSearch } from "../../../ajax/agent/global"
import classNames from 'classnames'
import BarLoader from 'react-spinners/BarLoader'
import SwiftButton from '../swift-button/swift-button'
import SwiftIcon from '../swift-icon/swift-icon'
import InputMask from 'react-input-mask'
import valid from 'card-validator'

const SwiftInputText = (props) => {
  //const innerRef = useRef();
  useEffect(() => {
    if (props.autoFocus && props.fieldRef) props.fieldRef?.current?.focus()
  }, [])
  const { icon, theme, myRefs, index } = props

  //const [searchValuePrev, setSearchResults] = useState(null)

  const [searchResults, setSearchResults] = useState(null)
  const [searchResultsLoading, setSearchResultsLoading] = useState(false)
  const [searchSelectionVeneer, setSearchSelectionVeneer] = useState(null)

  const [cardNumberValidate, setCardNumberValidate] = useState(null)

  const [submitTimeout, setSubmitTimeout] = useState(null)
  const initialViewLoad = useRef(true)
  useEffect(() => {
    if (initialViewLoad.current || !props.search) {
      initialViewLoad.current = false
      if (props.value && props.value != '' && props.search) {
        // props.value.length didnt work for integer values
        handleVeneerGet()
      }
      // this breaks inline / minimal card layouts, infinite loop.
      // if (props.mask || props.triggerInitialChain) {
      //   handleChange(props.value);
      // }
      return
    }
    //console.log("SwiftInputText - value changed with search params: ", props.value, props.search)
    clearTimeout(submitTimeout)
    setSubmitTimeout(setTimeout(handleSearch, 500))
  }, [props.value])

  const handleVeneerGet = async () => {
    //  SWIFT-FORM PACKAGE SIMPLIFICATION
    /*
    const { data } = await _inputSearch({ ...props.search, search: props.value, type: "direct" })
    if (data.results && data.results.length > 0 && data.results[0].search_result_display) {
      //console.log('SwiftInputText - handleVeneerGet found!', data)
      setSearchSelectionVeneer(data.results[0].search_result_display)
    } else {
      setSearchSelectionVeneer(null)
    }
    */
  }

  if ((!props.value || props.value == '') && searchSelectionVeneer) {
    // !props.value.length didnt work for integer values
    //console.log('SwiftInputText - reinitialized text input value is blank, setting veneer blank')
    setSearchSelectionVeneer(null)
  }

  const handleSearch = async () => {
    if (Object.keys(props.search).includes('min_length') && (props.value.length ?? 0) < props.search.min_length) {
      return
    }
    setSearchResults(null)
    setSearchResultsLoading(true)

    //  SWIFT-FORM PACKAGE SIMPLIFICATION
    //const { data } = await _inputSearch({ ...props.search, search: props.value });
    //console.log("SwiftInputText - search results", data)
    //setSearchResults(data.results);
    setSearchResultsLoading(false)
  }

  const handleChange = async (val) => {
    if (props.mask == 'number' && val.replace(/\D/g, '').length) {
      val = String(val)
      props.onChange(parseInt(val.replace(/\D/g, '')).toLocaleString())
    } else if (props.mask == 'card_number') {
      var ccValidate = valid.number(val.replaceAll('_', '').replaceAll(' ', ''))
      setCardNumberValidate(ccValidate)
      props.onChange({
        valid: ccValidate.isPotentiallyValid,
        complete: ccValidate.isValid,
        value: val.replaceAll('_', '').replaceAll(' ', ''),
        value_masked: val,
        type: ccValidate.card && ccValidate.card.type,
        cvv_len: ccValidate.card && ccValidate.card.code && ccValidate.card.code.size,
      })
    } else if (props.mask == 'card_expiration') {
      var cardExpValidate = valid.expirationDate(val.replaceAll('_', '').replaceAll(' ', ''))
      const valExp = {
        valid: cardExpValidate.isPotentiallyValid,
        complete: cardExpValidate.isValid,
        value: val.replaceAll('_', '').replaceAll(' ', ''),
        value_masked: val,
      }
      props.onChange(valExp)
    } else if (props.mask == 'card_cvv') {
      var cardExpCvv = valid.cvv(val.replaceAll('_', '').replaceAll(' ', ''), props.maskLen ?? 3)
      const valCvv = {
        valid: cardExpCvv.isPotentiallyValid,
        complete: cardExpCvv.isValid,
        value: val.replaceAll('_', '').replaceAll(' ', ''),
        value_masked: val,
      }
      //console.log("exp_cvv",valCvv)
      props.onChange(valCvv)
    } else if (props.mask == 'zip_code') {
      var cardZip = valid.postalCode(val.replaceAll('_', '').replaceAll(' ', ''), { minLength: 5 })
      const valZip = {
        valid: cardZip.isPotentiallyValid,
        complete: cardZip.isValid,
        value: val.replaceAll('_', '').replaceAll(' ', ''),
        value_masked: val,
      }
      //console.log("zip_code",valZip)
      props.onChange(valZip)
    } else if (props.mask == 'phone') {
      const valPhone = {
        valid: true,
        complete: val.replaceAll('_', '').length == 14 ? true : false,
        value: val.replaceAll('_', '').replaceAll(' ', ''),
        value_masked: val,
      }
      //console.log("zip_code",valPhone)
      props.onChange(valPhone)
    } else {
      val = String(val)
      props.onChange(val)
    }
  }

  // if(props.name === 'card_number') {
  //   console.log('swift input - props',props)
  //   console.log('swift input - typeof props.value',typeof props.value === 'object')
  //   console.log('swift input - props.mask',props.mask == "card_number")

  //   var valDisplay = 2
  //   if(props.mask == "card_number" && typeof props.value === 'object') {
  //     valDisplay = 1
  //   }
  //   console.log('swift input - valDisplay',valDisplay)
  // }

  //console.log(props.name+", ref= ",props.fieldRef)

  return (
    <SwiftInputTextStyled
      error={props.error && props.helperText ? true : false}
      entered={props.value.length > 0 ? true : false}
      searchResults={searchResults && searchResults.length ? true : false}
      searchResultsLoading={searchResultsLoading ? true : false}
      color={props.color ?? undefined}
      theme={theme}
    >
      {(props.label || !Object.keys(props).includes('label') || props.link) && (
        <div className="swift_input_text_label">
          {props.label ? (
            <SwiftLabel theme={theme} htmlFor={'swift_tools_form_input_text_' + props.name}>
              {props.label}
            </SwiftLabel>
          ) : !Object.keys(props).includes('label') ? (
            <SwiftLabel theme={theme} htmlFor={'swift_tools_form_input_text_' + props.name}>
              {props.name}
            </SwiftLabel>
          ) : null}
          {props.link && (
            <div className="swift_input_text_label_link">
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
      )}
      <div className="swift_input_text_input" onClick={props.onClick ?? undefined}>
        <div className={classNames('swift_input_text_input_element', props.error && props.helperText && 'error')}>
          {icon ? (
            <SwiftIcon className="swift_input_text_input_icon" i={icon} color={props.icon_color || 'primary'} />
          ) : props.mask == 'card_number' ? (
            cardNumberValidate && cardNumberValidate.card && cardNumberValidate.card.type ? (
              <SwiftIcon className="swift_input_text_input_icon" i={'card_' + cardNumberValidate.card.type.replace('-', '_')} />
            ) : (
              <SwiftIcon className="swift_input_text_input_icon" i={'card_default'} />
            )
          ) : null}
          <InputMask
            type={props.type ? props.type : 'text'}
            name={props.name}
            id={'swift_tools_form_input_text_' + props.name}
            inputRef={(el) => (myRefs.current[index] = el)}
            placeholder={props.placeholder}
            // autoFocus={props.autoFocus}
            disabled={props.disabled}
            value={typeof props.value === 'object' && Object.keys(props.value).includes('value') ? props.value.value : props.value}
            mask={
              props.mask
                ? props.mask == 'phone'
                  ? '(999) 999-9999'
                  : props.mask == 'zip_code'
                  ? '99999'
                  : props.mask == 'card_cvv' && props.maskLen
                  ? props.maskLen == 4
                    ? '9999'
                    : '999'
                  : props.mask == 'card_expiration'
                  ? '99 / 99'
                  : props.mask == 'card_number'
                  ? cardNumberValidate && cardNumberValidate.card && cardNumberValidate.card.type == 'american-express'
                    ? '9999 999999 99999'
                    : cardNumberValidate && cardNumberValidate.card && cardNumberValidate.card.type == 'diners-club'
                    ? '9999 999999 9999'
                    : '9999 9999 9999 9999'
                  : props.mask == 'ach_routing'
                  ? '999999999'
                  : null
                : null
            }
            maskChar="_"
            onFocus={(e) => {
              // if (searchSelectionVeneer) {
              //   props.onChange('');
              // } else if (
              //   props.search &&
              //   Object.keys(props.search).includes('min_length') &&
              //   (props.value.length ?? 0) >= props.search.min_length
              // ) {
              //   //console.log("FOCUS SEARCH")
              //   handleSearch();
              // }
            }}
            onBlur={(e) => {
              // setTimeout(function () {
              //   console.log("blurring!", document.activeElement)
              // }, 1)
              // if (!props.search || (Object.keys(props.search).includes('custom_allow') && props.search.custom_allow)) return;
              // if (e.currentTarget.value.length && !searchSelectionVeneer) {
              //   console.log('SwiftInputText - blurring searched input without setting veneer, setting blank');
              //   props.onChange('');
              //   setSearchSelectionVeneer(null);
              // }
              // if (!e.currentTarget.value.length && searchSelectionVeneer) {
              //   console.log('SwiftInputText - blurring searched input with no value but veneer, setting veneer blank');
              //   setSearchSelectionVeneer(null);
              // }
            }}
            onChange={(e) => handleChange(e.currentTarget.value)}
            autoCorrect={props.autoCorrect === false || props.search ? 'off' : 'on'}
            // spellCheck={props.autoCorrect === false ? 'off' : 'on'}
            autoCapitalize={props.autoCapitalize === false || props.search ? 'off' : 'on'}
            autoComplete={props.autoComplete === false || props.search ? 'off' : 'on'}
          />
          {searchSelectionVeneer && (
            <div className="swift_input_text_input_search_selection_veneer">
              <span>{searchSelectionVeneer}</span>
            </div>
          )}
          {searchResultsLoading || searchResults ? (
            <div className="swift_input_text_input_search_results">
              {searchResultsLoading && (
                <div className="swift_input_text_input_search_results_loading">
                  <BarLoader />
                </div>
              )}
              {searchResults ? (
                <ul>
                  {searchResults.map((elem) => (
                    <li
                      key={elem['id']}
                      onMouseDown={() => {
                        setSearchResults(null)
                        setSearchSelectionVeneer(elem['search_result_display'])
                        props.onChange(elem[props.search.field ?? 'id'])
                      }}
                    >
                      {elem['search_result_display']}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}
        </div>

        {props.submit_button && (
          <SwiftButton className="swift_input_text_submit_button" {...props.submit_button}>
            {props.submit_button.label || 'Submit'}
          </SwiftButton>
        )}
      </div>

      {props.sublabel ? (
        <SwiftLabel theme={theme} style={{ marginTop: '8px', opacity: 0.4 }} className="swift_input_text_sublabel">
          {props.sublabel}
        </SwiftLabel>
      ) : null}
      {props.error && props.helperText ? (
        <SwiftLabel theme={theme} error={true} className="swift_input_text_label_error">
          {props.helperText}
        </SwiftLabel>
      ) : null}
    </SwiftInputTextStyled>
  )
}
SwiftInputText.defaultProps = {
  icon: null,
  value: '',
  search: null,
  theme: 'default',
  fieldRef: null,
}

export default SwiftInputText
