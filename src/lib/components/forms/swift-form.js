import React, { useState, useEffect, useImperativeHandle, forwardRef, useRef } from 'react'
import { SwiftFormStyled } from './swift-form-style'
import { Formik, Field, useFormikContext } from 'formik'
import classNames from 'classnames'

import SwiftDrop from '../inputs/swift-drop'
import SwiftInputText from '../inputs/swift-input-text'
import SwiftInputTextSelect from '../inputs/swift-input-textselect'
import SwiftInputColor from '../inputs/swift-input-color'
import SwiftInputDate from '../inputs/swift-input-date'
import SwiftInputCollection from '../inputs/swift-input-collection'
import SwiftInputTime from '../inputs/swift-input-time'
import SwiftInputSlider from '../inputs/swift-input-slider'
import SwiftInputTextChip from '../inputs/swift-input-text-chip'
// error in remix - Cannot read properties of undefined (reading 'root')
// import SwiftInputCode from './swift-input-code/swift-input-code'
import SwiftCreditCard from '../inputs/swift-credit-card'
import SwiftButton from '../buttons/swift-button'
import SwiftSelectModal from '../inputs/swift-input-select-modal'

import SwiftLabel from '../inputs/swift-label'
import SwiftDivider from '../inputs/swift-divider'
import SwiftInputHidden from '../inputs/swift-input-hidden'
import SwiftInputCheckbox from '../inputs/swift-input-checkbox'
import SwiftInputCheckboxGroup from '../inputs/swift-input-checkbox-group'
import SwiftInputRadio from '../inputs/swift-input-radio'
import SwiftMultiCheckbox from '../inputs/swift-input-multicheckbox'
import SwiftInputTextarea from '../inputs/swift-input-textarea'
import SwiftSelect from '../inputs/swift-select'
import SwiftMultiSelect from '../inputs/swift-multiselect'
import SwiftSubtitle from '../inputs/swift-subtitle'
import SwiftTitle from '../inputs/swift-title'
import SwiftSelectEnum from '../inputs/swift-select-enum'
import SwiftLine from '../inputs/swift-line'
import SwiftMultiButton from '../inputs/swift-multibutton'
import { GridItem, Box } from '../grid'

import valid from 'card-validator'

const utilizeFocus = () => {
  const ref = React.createRef()
  const setFocus = () => {
    ref.current && ref.current.focus()
  }
  return { setFocus, ref }
}

const SwiftFormItem = (props) => {
  const {
    item,
    index,
    fields,
    values,
    touched,
    errors,
    setFieldValue,
    setValues,
    isSubmitting,
    inline,
    handleBlur,
    step,
    setStep,
    steps,
    handleChange,
    setBraintreeTokenize,
    theme,
    myRefs,
    submitRef,
  } = props

  return (
    <>
      {item.type === 'line' ? (
        <SwiftLine {...item} color={item.color || undefined} />
      ) : item.type === 'title' ? (
        <SwiftTitle theme={theme}>{item.label}</SwiftTitle>
      ) : item.type === 'subtitle' ? (
        <SwiftSubtitle theme={theme}>{item.label}</SwiftSubtitle>
      ) : item.type === 'jsx' ? (
        <>{item.jsx}</>
      ) : item.type === 'checkbox' ? (
        <SwiftInputCheckbox
          label={item.label}
          name={item.key}
          onChange={(e) => {
            if (item.onChange) {
              item.onChange(!values[item.key])
            }
            setFieldValue(item.key, values[item.key] == 1 ? 0 : 1)
          }}
          checked={values[item.key] == 1 ? true : false}
          disabled={item.disabled ?? undefined}
          handleClick={item.handleClick ?? undefined}
        />
      ) : item.type === 'checkbox-group' ? (
        <SwiftInputCheckboxGroup
          label={item.label}
          name={item.key}
          onChange={(vals) => {
            if (item.onChange) {
              item.onChange(vals)
            }
            setFieldValue(item.key, vals)
          }}
          value={values[item.key] || []}
          checked={values[item.key] ? true : false}
          disabled={item.disabled ?? undefined}
        />
      ) : item.type === 'radio' ? (
        <SwiftInputRadio
          {...item}
          name={item.key}
          value={values[item.key] ?? ''}
          values={item.values || []}
          onChange={(val, e) => {
            if (item.onChange) {
              item.onChange(val)
            }
            setFieldValue(item.key, val)
          }}
          helperText={touched[item.key] && errors[item.key]}
          error={Boolean(touched[item.key] && errors[item.key])}
        />
      ) : item.type === 'label' ? (
        <SwiftLabel theme={theme}>{item.label}</SwiftLabel>
      ) : item.type === 'divider' ? (
        <SwiftDivider />
      ) : item.type === 'multiselect' ? (
        <SwiftMultiSelect
          values={item.values || []}
          labelAvailable={item.labelAvailable}
          label={item.label}
          value={item.value}
          name={item.key}
          helperText={touched[item.key] && errors[item.key]}
          error={Boolean(touched[item.key] && errors[item.key])}
          onChange={(e) => {
            setFieldValue(item.key, e)
          }}
        />
      ) : item.type === 'slider' ? (
        <SwiftInputSlider
          label={item.label}
          name={item.key}
          value={values[item.key] || item.min || 0}
          disabled={item.disabled ?? undefined}
          min={item.min ?? undefined}
          max={item.max ?? undefined}
          step={item.step ?? undefined}
          onBlur={(e) => {
            handleBlur(e)
            if (item.onBlur) {
              item.onBlur(e)
            }
          }}
          valueType={item.valueType ?? null}
          helperText={touched[item.key] && errors[item.key]}
          error={Boolean(touched[item.key] && errors[item.key])}
          onChange={(val) => {
            if (item.onChange) {
              item.onChange(val)
            }
            setFieldValue(item.key, val)
          }}
        />
      ) : item.type === 'multicheckbox' ? (
        <SwiftMultiCheckbox
          {...item}
          values={item.values ? item.values.map((val) => ({ ...val, value: String(val.value) })) : []}
          value={values[item.key] ?? null}
          name={item.key}
          helperText={touched[item.key] && errors[item.key]}
          error={Boolean(touched[item.key] && errors[item.key])}
          onChange={(e) => {
            //console.log('SwiftInputMultiCheckbox - changed', e)
            //console.log("SwiftInputMultiCheckbox - changing!", e)
            if (item.onChange) {
              item.onChange(e)
            }
            setFieldValue(item.key, e)
          }}
        />
      ) : item.type === 'multibutton' ? (
        <SwiftMultiButton
          {...item}
          value={String(values[item.key])}
          values={item.values ? item.values.map((val) => ({ ...val, value: String(val.value) })) : []}
          onChange={(val) => {
            console.log('multibutton changing!', val)
            if (item.onChange) {
              item.onChange(val)
            }
            setFieldValue(item.key, val)
          }}
          helperText={touched[item.key] && errors[item.key]}
          error={Boolean(touched[item.key] && errors[item.key])}
        />
      ) : item.type === 'select' ? (
        <SwiftSelect
          {...item}
          label={item.label}
          values={item.values || []}
          value={values[item.key]}
          name={item.key}
          emptyValue={item.emptyValue ?? true}
          emptyLabel={item.emptyLabel ?? undefined}
          helperText={touched[item.key] && errors[item.key]}
          error={Boolean(touched[item.key] && errors[item.key])}
          onChange={(e) => {
            if (item.onChange) {
              item.onChange(e.currentTarget.value)
            }
            setFieldValue(item.key, e.currentTarget.value)
          }}
          theme={theme}
        />
      ) : item.type === 'select-modal' ? (
        <SwiftSelectModal
          {...item}
          values={item.values || []}
          value={values[item.key]}
          name={item.key}
          emptyValue={item.emptyValue ?? true}
          emptyLabel={item.emptyLabel ?? undefined}
          helperText={touched[item.key] && errors[item.key]}
          error={Boolean(touched[item.key] && errors[item.key])}
          onChange={(val) => {
            if (item.onChange) {
              item.onChange(val)
            }
            setFieldValue(item.key, val)
          }}
        />
      ) : item.type === 'select-enum' ? (
        <SwiftSelectEnum
          label={item.label}
          values={item.values || []}
          value={values[item.key]}
          name={item.key}
          emptyValue={item.emptyValue ?? true}
          emptyLabel={item.emptyLabel ?? undefined}
          helperText={touched[item.key] && errors[item.key]}
          error={Boolean(touched[item.key] && errors[item.key])}
          onChange={(val) => {
            if (item.onChange) {
              item.onChange(val)
            }
            setFieldValue(item.key, val)
          }}
        />
      ) : item.type === 'file' ? (
        <SwiftDrop
          {...item}
          accept={null}
          status={values[item.key] ? 'success' : 'accept'}
          //onChange={(vals) => {
          //  if (item.onChange) {
          //    item.onChange(vals)
          //  }
          //}}
          files={values[item.key] ?? []}
          setFiles={(vals) => {
            //console.log("drop setting files", vals)
            setFieldValue(item.key, vals)
            if (item.onChange) {
              item.onChange(vals)
            }
          }}
        />
      ) : item.type === 'submit' || item.type === 'button' ? (
        <div className="swift-form-element">
          <SwiftButton
            {...item}
            type={item.type || 'submit'}
            disabled={item.disabled ?? isSubmitting == true}
            loading={isSubmitting == true && item.type === 'submit' ? true : false}
            inlineForm={inline && fields.filter((f) => f.type != 'submit' && f.label && f.label.length > 0).length > 0 ? true : false}
            theme={theme}
            width={item.width || item.gridColSpan ? 'full' : ''}
            //color={item.type === "submit" && isSubmitting == "success" ? "green" : item.color || "primary"}
            //icon={item.type === "submit" && isSubmitting == "success" ? "check" : item.icon ?? undefined}
            color={item.color ?? undefined}
            icon={item.icon ?? undefined}
            fillType={item.fillType || undefined}
            onClick={item.action && item.action == 'back' && step > 1 ? () => setStep(step - 1) : item.onClick ?? undefined}
          >
            {item.label}
            {/*{item.type === "submit" && isSubmitting == "success" ? "Saved!" : item.label}*/}
          </SwiftButton>
        </div>
      ) : item.type === 'text-chip' ? (
        <SwiftInputTextChip
          label={item.label}
          value={values[item.key] ?? ''}
          suggestions={item.suggestions ?? []}
          onChange={(val) => {
            //console.log("text-chip updated!", val)
            setFieldValue(item.key, val)
          }}
        />
      ) : item.type === 'password' ? (
        <SwiftInputText
          fullWidth
          variant="filled"
          label={item.label}
          name={item.key}
          value={values[item.key] ?? ''}
          disabled={item.disabled ?? undefined}
          onBlur={(e) => {
            handleBlur(e)
            if (item.onBlur) {
              item.onBlur(e)
            }
          }}
          placeholder={item.placeholder ?? undefined}
          type={item.type}
          autoCorrect={item.autoCorrect}
          autoComplete={item.autoComplete}
          autoFocus={item.autoFocus ?? undefined}
          helperText={touched[item.key] && errors[item.key]}
          error={Boolean(touched[item.key] && errors[item.key])}
          onChange={(val) => {
            if (item.onChange) {
              item.onChange(val)
            }
            setFieldValue(item.key, val)
          }}
          theme={theme}
        />
      ) : item.type === 'textarea' ? (
        <SwiftInputTextarea
          fullWidth
          variant="filled"
          label={item.label}
          name={item.key}
          value={values[item.key] ?? ''}
          disabled={item.disabled ?? undefined}
          onBlur={(e) => {
            handleBlur(e)
            if (item.onBlur) {
              item.onBlur(e)
            }
          }}
          height={item.height ?? undefined}
          placeholder={item.placeholder ?? undefined}
          autoCorrect={item.autoCorrect}
          autoComplete={item.autoComplete}
          autoFocus={item.autoFocus ?? undefined}
          helperText={touched[item.key] && errors[item.key]}
          error={Boolean(touched[item.key] && errors[item.key])}
          onChange={(val) => {
            if (item.onChange) {
              item.onChange(val.currentTarget.value)
            }
            handleChange(val)
          }}
        />
      ) : item.type === 'collection' ? (
        <SwiftInputCollection
          {...item}
          value={
            values[item.key] ? (values[item.key].constructor.name == 'Object' ? Object.entries(values[item.key]) : values[item.key]) : []
          }
          schema={
            item.schema || [
              { type: 'text', label: 'Label' },
              { type: 'text', label: 'Value' },
            ]
          }
          label={item.label}
          onChange={(val) => {
            if (item.onChange) {
              item.onChange(val)
            }
            setFieldValue(item.key, val)
          }}
        />
      ) : item.type === 'date' ? (
        <SwiftInputDate
          fullWidth
          variant="filled"
          label={item.label}
          name={item.key}
          value={values[item.key] ?? ''}
          disabled={item.disabled ?? undefined}
          onBlur={(e) => {
            handleBlur(e)
            if (item.onBlur) {
              item.onBlur(e)
            }
          }}
          autoCorrect={item.autoCorrect}
          autoComplete={item.autoComplete}
          autoFocus={item.autoFocus ?? undefined}
          helperText={touched[item.key] && errors[item.key]}
          error={Boolean(touched[item.key] && errors[item.key])}
          onChange={(val) => {
            setFieldValue(item.key, val)
          }}
        />
      ) : item.type === 'time' ? (
        <SwiftInputTime
          fullWidth
          variant="filled"
          label={item.label}
          name={item.key}
          value={values[item.key] ?? ''}
          disabled={item.disabled ?? undefined}
          onBlur={(e) => {
            handleBlur(e)
            if (item.onBlur) {
              item.onBlur(e)
            }
          }}
          autoCorrect={item.autoCorrect}
          autoComplete={item.autoComplete}
          autoFocus={item.autoFocus ?? undefined}
          helperText={touched[item.key] && errors[item.key]}
          error={Boolean(touched[item.key] && errors[item.key])}
          onChange={(e) => {
            setFieldValue(item.key, e)
          }}
        />
      ) : item.type === 'credit_card' ? (
        <SwiftCreditCard setBraintreeTokenize={setBraintreeTokenize} />
      ) : item.type === 'color' ? (
        <SwiftInputColor
          fullWidth
          variant="filled"
          label={item.label}
          name={item.key}
          value={values[item.key] ?? ''}
          disabled={item.disabled ?? undefined}
          onBlur={(e) => {
            handleBlur(e)
            if (item.onBlur) {
              item.onBlur(e)
            }
          }}
          autoCorrect={item.autoCorrect}
          autoComplete={item.autoComplete}
          autoFocus={item.autoFocus ?? undefined}
          helperText={touched[item.key] && errors[item.key]}
          error={Boolean(touched[item.key] && errors[item.key])}
          onChange={(val) => {
            //console.log("COLOR CHANGE", val)
            setFieldValue(item.key, val)
          }}
        />
      ) : item.type === 'text_select' ? (
        <SwiftInputTextSelect
          fullWidth
          variant="filled"
          label={item.label}
          name={item.key}
          value={values[item.key] ?? ''}
          disabled={item.disabled ?? undefined}
          onBlur={(e) => {
            handleBlur(e)
            if (item.onBlur) {
              item.onBlur(e)
            }
          }}
          values={item.values || []}
          autoCorrect={item.autoCorrect}
          autoComplete={item.autoComplete}
          autoFocus={item.autoFocus ?? undefined}
          helperText={touched[item.key] && errors[item.key]}
          error={Boolean(touched[item.key] && errors[item.key])}
          onChange={(e) => {
            setFieldValue(item.key, e)
          }}
          mask={item.mask}
          mask_message_none={item.mask_message_none}
          mask_prefix={item.mask_prefix}
          mask_suffix={item.mask_suffix}
          clearable={item.clearable ?? undefined}
        />
      ) : item.type === 'text' ? (
        <SwiftInputText
          {...item}
          index={index}
          name={item.key}
          value={values[item.key] ?? ''}
          onBlur={(e) => {
            handleBlur(e)
            if (item.onBlur) {
              item.onBlur(e)
            }
          }}
          autoCorrect={item.autoCorrect && !item.search ? true : false}
          autoComplete={item.autoComplete && !item.search ? true : false}
          autoCapitalize={item.autoCapitalize && !item.search ? true : false}
          helperText={touched[item.key] && errors[item.key]}
          error={Boolean(touched[item.key] && errors[item.key])}
          theme={theme}
          //fieldRef={fieldRef}
          myRefs={myRefs}
          maskLen={
            item.mask === 'card_cvv'
              ? fields.filter((fieldOther) => fieldOther.mask == 'card_number').length > 0 &&
                values[fields.filter((fieldOther) => fieldOther.mask == 'card_number')[0].key]
                ? values[fields.filter((fieldOther) => fieldOther.mask == 'card_number')[0].key].cvv_len
                : 3
              : undefined
          }
          onChange={(val) => {
            if (item.onChange) {
              item.onChange(val)
            }

            if (typeof val === 'object') {
              //console.log("PROPS - ONCHANGE - OBJECT, KEY = "+item.key+", VALUE = ",val)
              setValues({ ...values, [item.key]: val })
              if (val.complete) {
                // autofocus next!!
                //consolecc_expitem, setting focus to next!")

                const fieldsInputs = fields.filter((elem) => !['title', 'subtitle', 'label'].includes(elem.type))
                const fieldsInputsCurrentIndex = fieldsInputs.findIndex((elem) => elem.key == item.key)
                //console.log("fieldsInputs",fieldsInputs)
                //console.log("fieldsInputsCurrentIndex",fieldsInputsCurrentIndex)
                if (typeof fieldsInputs[fieldsInputsCurrentIndex + 1] !== 'undefined') {
                  var fieldsIndexNext = fields.findIndex((elem) => elem.key == fieldsInputs[fieldsInputsCurrentIndex + 1].key)
                  //console.log("fieldsIndexNext",fieldsIndexNext)
                  setTimeout(() => {
                    if (fields[fieldsIndexNext].type == 'submit' && submitRef && submitRef.current) {
                      // last form element is complete, next form element is submit button, do we autosubmit here? maybe make it an option.
                      // submitRef.current.submit()
                    } else if (
                      typeof myRefs.current[fieldsIndexNext] !== 'undefined' &&
                      typeof myRefs.current[fieldsIndexNext].focus !== 'undefined'
                    ) {
                      myRefs.current[fieldsIndexNext].focus()
                    }
                  }, 75)
                }
                // var fieldRefIndex = fields.findIndex(elem => elem.key == 'card_expiration')
                // myRefs.current[fieldRefIndex].focus()
              }
            } else {
              setFieldValue(item.key, val)
              var valNew = val

              fields.forEach((otherItem) => {
                if (
                  otherItem.chain &&
                  (otherItem.chain.field == item.key || (otherItem.chain.fields && otherItem.chain.fields.includes(item.key)))
                ) {
                  //console.log(valNew)
                  if (!valNew || !valNew.length) {
                    setFieldValue(otherItem.key, '')
                  } else if (otherItem.chain.type == 'path') {
                    const permalink =
                      '/' +
                      valNew
                        .toLowerCase()
                        .replace(/  +/g, ' ')
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '') +
                      (otherItem.chain.append ? otherItem.chain.append : '')
                    setFieldValue(otherItem.key, permalink != '/home' ? permalink : '/')
                  } else if (otherItem.chain.type == 'permalink') {
                    const permalink =
                      valNew
                        .toLowerCase()
                        .replace(/  +/g, ' ')
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '') + (otherItem.chain.append ? otherItem.chain.append : '')
                    setFieldValue(otherItem.key, permalink)
                  } else if (otherItem.chain.type == 'component') {
                    const permalink =
                      valNew
                        .toLowerCase()
                        .replace(/  +/g, ' ')
                        .replace(/ /g, ' ')
                        .replace(/[^\w-]+/g, ' ')
                        .split(' ')
                        .map((word) => {
                          return word ? word[0].toUpperCase() + word.substring(1) : null
                        })
                        .join('') + (otherItem.chain.append ? otherItem.chain.append : '')
                    setFieldValue(otherItem.key, permalink)
                  } else if (otherItem.chain.type == 'multiply') {
                    var valCalculated = otherItem.chain.initial ?? 1
                    otherItem.chain.fields.forEach((field) => {
                      var valCurrent = field == item.key ? valNew : values[field]
                      valCurrent = parseFloat(String(valCurrent).replace(/[^0-9\.]+/g, ''))
                      if (!valCurrent) {
                        valCalculated = 0
                      } else {
                        valCalculated *= valCurrent
                      }
                    })
                    setFieldValue(otherItem.key, Math.round(valCalculated))
                  } else if (otherItem.chain.type == 'divide') {
                    //console.log('dividing')
                    var valCalculated = otherItem.chain.initial ?? 1
                    otherItem.chain.fields.forEach((field, i) => {
                      var valCurrent = field == item.key ? valNew : values[field]
                      valCurrent = parseFloat(String(valCurrent).replace(/[^0-9\.]+/g, ''))
                      //console.log('dividing by: ' + valCurrent)
                      if (!valCurrent) {
                        valCalculated = 0
                      } else if (i == 0) {
                        valCalculated *= valCurrent // numerator - first one is multiplied
                      } else {
                        valCalculated /= valCurrent
                      }
                    })
                    setFieldValue(otherItem.key, Math.round(valCalculated))
                  }
                }
              })
            }
          }}
        />
      ) : null}
    </>
  )
}

const SwiftFormSubmitRef = forwardRef((props, ref) => {
  const { submitForm } = useFormikContext()
  useImperativeHandle(ref, () => ({
    submit() {
      submitForm()
    },
  }))
  return null
})

const SwiftForm = (props) => {
  const { fields, steps, easyFiles, inline, submitRef } = props

  const [step, setStep] = useState(1)
  const [braintreeTokenize, setBraintreeTokenize] = useState(null)

  const initialValues = {}
  fields.forEach(function (item) {
    //if (item.keys) {
    //  initialValues[item.keys[0]] = item.value ?? ''
    //  initialValues[item.keys[1]] = item.value ?? ''
    //} else {
    if (['line', 'subtitle', 'title', 'label'].includes(item.type)) return

    if (item.type == 'file' && !item.value) {
      initialValues[item.key] = []
    } else if (item.type == 'file' && item.value.constructor.name != 'Array') {
      initialValues[item.key] = [
        {
          name: item.value.substring(item.value.lastIndexOf('/') + 1),
          url: item.value,
        },
      ]
    } else if (item.type == 'file' && item.value.constructor.name == 'Array') {
      initialValues[item.key] = item.value.map((val) => ({
        ...val,
        name: val.url.substring(val.url.lastIndexOf('/') + 1),
      }))
      // [{ name: item.value.substring(item.value.lastIndexOf('/') + 1), url: item.value }]
    } else if (item.type == 'multicheckbox') {
      initialValues[item.key] = item.value == null ? null : item.value ?? ''
    } else {
      initialValues[item.key] = item.value ?? ''
    }

    //item['fieldRef'] = useRef(null)

    //}
  })

  const myRefs = useRef([])

  // useEffect(() => {
  //   // getting refs!
  //   fields.forEach(function (item,i) {
  //     fields[i].ref = utilizeFocus()
  //   })
  // })

  //console.log("SF - props ", props)
  return (
    <SwiftFormStyled style={props.style} className={props.className ?? undefined} theme={props.theme}>
      <Formik
        enableReinitialize={true}
        initialStatus={{ type: null, text: null }}
        initialValues={initialValues}
        onSubmit={(values, { setStatus, setSubmitting, resetForm }) => {
          // reset status on every submit to recalculate status
          setStatus({
            type: null,
            text: null,
          })

          // multistep form and we're not completed yet
          if (steps > 1 && step < steps) {
            setStep(step + 1)
            setSubmitting(false)
            return
          }

          var res = null

          var valsSubmit = { ...values }
          if (easyFiles) {
            fields
              .filter((field) => field.type == 'file')
              .forEach((field) => {
                if (valsSubmit[field.key] && valsSubmit[field.key].length > 0) {
                  if (field.output_format && field.output_format == 'json') {
                    valsSubmit[field.key] = JSON.stringify(valsSubmit[field.key][0]['output_json'])
                  } else {
                    valsSubmit[field.key] = valsSubmit[field.key][0]['url']
                  }
                } else {
                  valsSubmit[field.key] = ''
                }
              })
          }

          // do we have a credit_card in this form? get nonce.
          if (braintreeTokenize) {
            try {
              Promise.resolve(braintreeTokenize())
                .then((btt) => {
                  try {
                    console.log('swift-form.tsx - braintreeTokenize result', btt)
                    if (btt.nonce) {
                      res = props.onSubmit({ ...valsSubmit, nonce: btt.nonce }, { setStatus })
                      Promise.resolve(res).then((data) => {
                        if (typeof data === 'undefined' || data) {
                          // returned, this happens if NOT rerouting on success, set submitting false
                          setSubmitting(false)
                        }
                        if (data && data.error) {
                          // error on submitting form
                          setStatus({
                            type: 'error',
                            text: data.error,
                          })
                        } else if (props.resetOnSubmit) {
                          // no error in onSubmit, reset form?
                          //alert("resetting form")
                          resetForm()
                        }
                      })
                    } else {
                      setSubmitting(false)
                      setStatus({
                        type: 'error',
                        text: 'Failed to tokenize card details.',
                      })
                      return
                    }
                  } catch (e) {
                    setSubmitting(false)
                    setStatus({
                      type: 'error',
                      text: e.message,
                    })
                    return
                  }
                })
                .catch((e) => {
                  console.log('braintreeTokenize() error - ', e)
                  setSubmitting(false)
                  if (e.details && e.details.invalidFields) {
                    setStatus({
                      type: 'error',
                      text: 'Payment fields invalid: ' + Object.keys(e.details.invalidFields).join(', '),
                    })
                  } else {
                    setStatus({
                      type: 'error',
                      text: e.message,
                    })
                  }
                  return
                })
            } catch (e) {
              setSubmitting(false)
              setStatus({
                type: 'error',
                text: e.message,
              })
              return
            }
          } else {
            // form without credit_card fields, submit as usual!
            res = props.onSubmit(valsSubmit, { setStatus })

            Promise.resolve(res).then((data) => {
              //console.log("formik complete!", data)
              if (data && data.error) {
                // error on submitting form
                setStatus({
                  type: 'error',
                  text: data.error,
                })
              } else if (props.resetOnSubmit) {
                // no error in onSubmit, reset form?
                //alert("resetting form")
                resetForm()
              }

              // if (steps == 1 && (typeof data === "undefined" || data)) {
              //   // returned, this happens if NOT rerouting on success, set submitting false
              //   setSubmitting("success")
              //   setTimeout(function () {
              //     setSubmitting(false)
              //   }, 1000)
              // }
              if (typeof data === 'undefined' || data) {
                // returned, this happens if NOT rerouting on success, set submitting false
                setSubmitting(false)
              }
            })
          }
        }}
        validate={(values) => {
          const errors = {}
          fields.forEach(function (item) {
            //console.log("validating?", item)
            // is field gated based on another field? skip.
            if (
              item.gate &&
              ((Object.keys(item.gate).includes('value') && values[item.gate.field] != item.gate.value) ||
                (Object.keys(item.gate).includes('contains') && !(values[item.gate.field] || '').includes(item.gate.contains)))
            ) {
              return
            }
            // is field part of a multi-step form? skip.
            if (steps > 1 && item.step && item.step != step) {
              return
            }

            if (item.validate) {
              // console.log("validating item!", item)
              // console.log("validate: value: ", values[item.key])
              if (values[item.key] == '' && values[item.key] !== '0' && values[item.key] !== 0) {
                errors[item.key] = 'This field is required!'
              } else if (
                item.validate === 'email' &&
                !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
                  values[item.key]
                ) &&
                values[item.key] !== 'root'
              ) {
                errors[item.key] = 'An email address is required.'
              } else if (
                item.validate === 'phone' &&
                !/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(values[item.key])
              ) {
                errors[item.key] = 'Enter a valid phone number.'
              } else if (item.validate === 'zip_code' && !values[item.key].complete) {
                errors[item.key] = 'Enter a valid zip code.'
              } else if (item.validate === 'card_number' && !values[item.key].complete) {
                errors[item.key] = 'Enter a valid credit card number.'
              } else if (item.validate === 'card_expiration' && !values[item.key].complete) {
                errors[item.key] = 'Enter a valid expiration date.'
              } else if (item.validate === 'password') {
                if (values[item.key].length < 8) {
                  errors[item.key] = 'Password must be 8+ chars.'
                } else if (!/[a-z]/.test(values[item.key])) {
                  errors[item.key] = 'Password must have a lowercase letter.'
                } else if (!/[A-Z]/.test(values[item.key])) {
                  errors[item.key] = 'Password must have an uppercase letter.'
                } else if (!/[~`!#$@%^&*+=\-[\]\\';,/{}|\\":<>?]/g.test(values[item.key])) {
                  errors[item.key] = 'Password must have a symbol.'
                }
              } else if (item.validate === 'password_confirm') {
                fields.forEach(function (i) {
                  if (i.validate === 'password' && values[i.key] !== values[item.key]) {
                    errors[item.key] = 'Passwords must match.'
                  }
                })
              } else if (item.validate === 'ach_routing' && values[item.key].replace(/[\W_]+/g, '').length != 9) {
                errors[item.key] = 'Enter a 9-digit routing number.'
              } else if (item.validate === 'ach_account' && !/^([a-zA-Z0-9 _-]+)$/.test(String(values[item.key]).toLowerCase())) {
                errors[item.key] = 'Enter a valid account number.'
              } else if (item.validate === 'card_cvv' && !values[item.key].complete) {
                errors[item.key] = 'Enter a valid CVV.'
              }
            }
          })
          // minimal theme - would like to set global status here, not sure if possible.
          // if(errors.length > 0) {
          //   setStatus({
          //     type: 'error',
          //     text: "Please check for errors.",
          //   });
          // }
          return errors
        }}
      >
        {({
          values,
          status,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          setValues,
          setFieldTouched,
          theme,
        }) => {
          let formRows = props.gridRows || 1
          let formCols = inline ? fields.length : props.gridCols || 4
          let formGap = props.theme == 'minimal' ? 0 : props.gridGap ?? 3

          return (
            <form onSubmit={handleSubmit} autoComplete="off" autoCorrect="off">
              <SwiftFormSubmitRef ref={submitRef} />
              {status.text ? (
                <div className={classNames('status', status.type)}>
                  <span>{status.text}</span>
                </div>
              ) : null}
              <Box
                flex="1"
                display={inline ? ['grid', 'grid', 'flex'] : 'grid'}
                flexWrap={inline ? 'wrap' : undefined}
                gridGap={formGap}
                gridTemplateColumns={!inline ? 'repeat(' + formCols + ', 1fr)' : undefined}
                gridAutoRows={!inline ? 'min-content' : undefined}
              >
                {fields.map(function (item, index) {
                  if (item.type === 'hidden')
                    return <SwiftInputHidden type="hidden" key={item.key || index} name={item.key} value={item.value ?? ''} />

                  if (item.type === 'multibutton' && item.values && item.values.length == 1)
                    return <SwiftInputHidden type="hidden" key={item.key || index} name={item.key} value={item.value ?? ''} />

                  let itemColSpan = ['line', 'subtitle', 'title', 'label'].includes(item.type) ? formCols : item.gridColSpan || formCols

                  let itemRowSpan = item.gridRowSpan || props.gridRows

                  // is field gated based on another field? skip.
                  if (
                    item.gate &&
                    ((Object.keys(item.gate).includes('value') && values[item.gate.field] != item.gate.value) ||
                      (Object.keys(item.gate).includes('contains') && !(values[item.gate.field] || '').includes(item.gate.contains)))
                  ) {
                    return null
                  }

                  // is field part of a multi-step form? skip.
                  if (steps > 1 && item.step && item.step != step) {
                    return null
                  }

                  if (inline) {
                    var inlineItemFlex = item.flex && item.width != 'full' ? item.flex : undefined
                    var inlineItemWidth = item.width == 'full' ? '100%' : item.width ?? undefined

                    //console.log("----1")
                    //console.log(values['card_number'])
                    //console.log(!values['card_number'].length)
                    //console.log(values['card_number'].includes('_'))
                    //console.log("----2")
                    //console.log("card number test",values['card_number'],(!values['card_number'] || !values['card_number']['complete']))
                    if (
                      props.type == 'card' &&
                      props.theme == 'minimal' &&
                      item.type == 'text' &&
                      (!values['card_number'] || !values['card_number']['complete'])
                    ) {
                      if (item.mask != 'card_number') {
                        inlineItemWidth = 0
                        inlineItemFlex = null
                      } else {
                        inlineItemWidth = null
                        inlineItemFlex = 1
                      }
                    }

                    return (
                      <Box
                        key={item.key || index}
                        flex={inlineItemFlex}
                        w={inlineItemWidth}
                        id={'swift-form-element-' + item.key}
                        style={{
                          marginLeft: item.indent ? item.indent + 'px' : '',
                        }}
                      >
                        <SwiftFormItem
                          item={item}
                          index={index}
                          values={values}
                          touched={touched}
                          errors={errors}
                          setFieldValue={setFieldValue}
                          setValues={setValues}
                          isSubmitting={isSubmitting}
                          inline={inline}
                          handleBlur={handleBlur}
                          step={step}
                          setStep={setStep}
                          steps={steps}
                          handleChange={handleChange}
                          setBraintreeTokenize={setBraintreeTokenize}
                          fields={fields}
                          theme={props.theme ?? 'default'}
                          myRefs={myRefs}
                          submitRef={submitRef}
                        />
                      </Box>
                    )
                  } else {
                    return (
                      <GridItem
                        key={item.key || index}
                        rowSpan={itemRowSpan}
                        colSpan={!inline ? [formCols, formCols, itemColSpan] : [formCols, formCols, undefined]}
                        id={'swift-form-element-' + item.key}
                        style={{
                          marginLeft: item.indent ? item.indent + 'px' : '',
                        }}
                      >
                        <SwiftFormItem
                          item={item}
                          index={index}
                          values={values}
                          touched={touched}
                          errors={errors}
                          setFieldValue={setFieldValue}
                          setValues={setValues}
                          isSubmitting={isSubmitting}
                          inline={inline}
                          handleBlur={handleBlur}
                          step={step}
                          setStep={setStep}
                          steps={steps}
                          handleChange={handleChange}
                          setBraintreeTokenize={setBraintreeTokenize}
                          fields={fields}
                          theme={props.theme ?? 'default'}
                          myRefs={myRefs}
                          submitRef={submitRef}
                        />
                      </GridItem>
                    )
                  }
                })}
              </Box>
            </form>
          )
        }}
      </Formik>
    </SwiftFormStyled>
  )
}

SwiftForm.defaultProps = {
  fields: [],
  style: {},
  resetOnSubmit: true,
  steps: 1,
  inline: false,
  easyFiles: false,
  setContext: () => {},
  submitRef: null,
}

export default SwiftForm
