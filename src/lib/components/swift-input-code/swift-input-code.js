import React, { useRef, useEffect, useState } from 'react'
import { SwiftInputCodeStyled } from './swift-input-code-style'
import SwiftLabel from '../swift-label/swift-label'
import classNames from 'classnames'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
//import "prismjs/themes/prism.css";
//import 'prism-themes/themes/prism-synthwave84.css';
//import prettier from 'prettier/standalone'
//import postcss from 'prettier/parser-postcss'
//import html from 'prettier/parser-html'
//import babel from 'prettier/parser-babel'

//import prettify from 'html-prettify'
//import cssbeautify from 'cssbeautify'

import { html_beautify, css_beautify } from 'js-beautify'

const SwiftInputCode = (props) => {
  const innerRef = useRef()

  console.log('SIC - props', props)

  const [value, setValue] = useState(props.value)

  /*useEffect(() => {
    if (innerRef) {
      if (props.autoFocus) innerRef?.current?.focus()
    }
  }, [])*/

  /*useEffect(() => {
    console.log('value', value)
    //if (props.value.length) formatContent(props.value)
  }, [value])*/

  useEffect(() => {
    //console.log('SwiftInputCode - props.value changed', props.value.length)
    setValue(props.value)
  }, [props.value])

  const formatContent = (strVal) => {
    //console.log('formatContent running', strVal)
    if (props.format == 'json' && strVal.length > 0) {
      strVal = JSON.stringify(JSON.parse(strVal), null, 2)
      props.onChange(strVal)
    } else if (props.format == 'html' && strVal.length > 0) {
      strVal = html_beautify(strVal)
      props.onChange(strVal)
    } else if (props.format == 'css' && strVal.length > 0) {
      strVal = css_beautify(strVal, {})
      props.onChange(strVal)
    } else {
      props.onChange(strVal)
    }
    /*if (!props.format || !strVal || !strVal.length) {
      props.onChange(strVal)
    } else if (props.format == 'html') {
      strVal = prettier.format(strVal, {
        parser: 'html',
        plugins: [html],
      })
      props.onChange(strVal)
    } else if (props.format == 'css') {
      strVal = prettier.format(strVal, {
        parser: 'css',
        plugins: [postcss],
      })
      props.onChange(strVal)
    } else if (props.format == 'json') {
      //const strValPretty = prettier.format(strVal, {
      //  semi: false,
      //  parser: "babel",
      //  plugins: [babel],
      //})
      strVal = JSON.stringify(JSON.parse(strVal), null, 2)
      props.onChange(strVal)
    }*/

    setValue(strVal)
  }

  return (
    <SwiftInputCodeStyled error={props.error && props.helperText ? true : false} entered={value.length > 0 ? true : false}>
      <SwiftLabel>{props.label}</SwiftLabel>
      {/*<input
        type={props.type ? props.type : "text"}
        name={props.name}
        ref={innerRef}
        // autoFocus={props.autoFocus}
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
        autoCorrect={props.autoCorrect === false ? "off" : "on"}
        // spellCheck={props.autoCorrect === false ? 'off' : 'on'}
        autoCapitalize={props.autoCapitalize === false ? "off" : "on"}
        autoComplete={props.autoComplete === false ? "off" : "on"}
      />*/}
      <div className="textarea">
        <Editor
          value={value}
          onValueChange={setValue}
          ref={innerRef}
          onBlur={(e) => formatContent(e.target.value)}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          style={{
            minHeight: 320,
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
      </div>
      {props.error && props.helperText ? <SwiftLabel error>{props.helperText}</SwiftLabel> : null}
    </SwiftInputCodeStyled>
  )
}

export default SwiftInputCode
