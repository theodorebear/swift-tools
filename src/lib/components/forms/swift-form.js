import { createRef, useState, useEffect, useImperativeHandle, forwardRef, useRef } from "react"
import { SwiftFormStyled, SwiftFormButtonListStyled } from "./swift-form-style"
import { Formik, Field, useFormikContext } from "formik"
import classNames from "classnames"
import SwiftDrop from "../inputs/swift-drop"
import SwiftInputText from "../inputs/swift-input-text"
import SwiftInputTextSelect from "../inputs/swift-input-textselect"
import SwiftInputColor from "../inputs/swift-input-color"
import SwiftInputDate from "../inputs/swift-input-date"
import SwiftInputCollection from "../inputs/swift-input-collection"
import SwiftInputTime from "../inputs/swift-input-time"
import SwiftInputSlider from "../inputs/swift-input-slider"
import SwiftInputTextChip from "../inputs/swift-input-text-chip"
import SwiftInputOTP from "../inputs/swift-input-otp"
// error in remix - Cannot read properties of undefined (reading 'root')
// import SwiftInputCode from './swift-input-code/swift-input-code'
import SwiftInputRichTextarea from "../inputs/swift-input-rich-textarea"
import SwiftCreditCard from "../inputs/swift-credit-card"
import SwiftButton from "../buttons/swift-button"
import SwiftSelectModal from "../inputs/swift-input-select-modal"
import SwiftInputTabs from "../inputs/swift-input-tabs"
import SwiftLabel from "../inputs/swift-label"
import SwiftDivider from "../inputs/swift-divider"
import SwiftInputHidden from "../inputs/swift-input-hidden"
import SwiftInputCheckbox from "../inputs/swift-input-checkbox"
import SwiftInputCheckboxGroup from "../inputs/swift-input-checkbox-group"
import SwiftInputRadio from "../inputs/swift-input-radio"
import SwiftMultiToggle from "../inputs/swift-input-multitoggle"
import SwiftMultiCheckbox from "../inputs/swift-input-multicheckbox"
import SwiftInputTextarea from "../inputs/swift-input-textarea"
import SwiftSelect from "../inputs/swift-select"
import SwiftMultiSelect from "../inputs/swift-multiselect"
import SwiftSubtitle from "../inputs/swift-subtitle"
import SwiftTitle from "../inputs/swift-title"
import SwiftSelectEnum from "../inputs/swift-select-enum"
import SwiftLine from "../inputs/swift-line"
import SwiftMultiButton from "../inputs/swift-multibutton"
import SwiftInputMinMax from "../inputs/swift-input-minmax"
import { GridItem, Box } from "../grid"
import { SwiftGridRow, SwiftGridCol } from "../grid/index"

import valid from "card-validator"

const utilizeFocus = () => {
  const ref = createRef()
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
    inputSize,
    theme,
    myRefs,
    submitRef,
  } = props
  const customOnChange = (val) => {
    if (item.onChange) {
      item.onChange(val)
    }
  }
  const { submitForm } = useFormikContext()

  return (
    <>
      {item.type === "line" ? (
        <SwiftLine {...item} color={item.color || undefined} />
      ) : item.type === "title" ? (
        <SwiftTitle theme={theme}>{item.label}</SwiftTitle>
      ) : item.type === "subtitle" ? (
        <SwiftSubtitle theme={theme}>{item.label}</SwiftSubtitle>
      ) : item.type === "jsx" ? (
        <>{item.jsx}</>
      ) : item.type === "checkbox" ? (
        <SwiftInputCheckbox
          {...item}
          name={item.key}
          onChange={(e) => {
            if (item.onChange) {
              item.onChange(!values[item.key])
            }
            if (!item.disabled) {
              setFieldValue(item.key, values[item.key] == 1 ? 0 : 1)
            }
          }}
          checked={values[item.key] == 1 ? true : false}
          disabled={item.disabled ?? undefined}
          handleClick={item.handleClick ?? undefined}
        />
      ) : item.type === "checkbox-group" ? (
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
      ) : item.type === "tabs" ? (
        <SwiftInputTabs
          {...item}
          name={item.key}
          value={values[item.key] ?? ""}
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
      ) : item.type === "radio" ? (
        <SwiftInputRadio
          {...item}
          name={item.key}
          value={values[item.key] ?? ""}
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
      ) : item.type === "label" ? (
        <SwiftLabel theme={theme}>{item.label}</SwiftLabel>
      ) : item.type === "divider" ? (
        <SwiftDivider />
      ) : item.type === "multiselect" ? (
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
      ) : item.type === "slider" ? (
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
      ) : item.type === "multicheckbox" ? (
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
      ) : item.type === "multibutton" ? (
        <SwiftMultiButton
          {...item}
          value={values[item.key] ? String(values[item.key]) : values[item.key]}
          values={item.values ? item.values.map((val) => ({ ...val, value: String(val.value) })) : []}
          onChange={(val) => {
            console.log("multibutton changing!", val)
            if (item.onChange) {
              item.onChange(val)
            }
            setFieldValue(item.key, val)
          }}
          helperText={touched[item.key] && errors[item.key]}
          error={Boolean(touched[item.key] && errors[item.key])}
        />
      ) : item.type === "select" ? (
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
          size={inputSize}
          onChange={(e) => {
            if (item.onChange) {
              item.onChange(e.currentTarget.value)
            }
            setFieldValue(item.key, e.currentTarget.value)
          }}
          theme={theme}
        />
      ) : item.type === "select-modal" ? (
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
      ) : item.type === "select-enum" ? (
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
      ) : item.type === "file" ? (
        <SwiftDrop
          {...item}
          accept={null}
          status={values[item.key] && values[item.key].length > 0 ? "success" : "accept"}
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
      ) : item.type === "submit" || item.type === "button" ? (
        <div className="swift-form-element">
          <SwiftButton
            {...item}
            type={item.type || "submit"}
            disabled={item.disabled ?? isSubmitting == true}
            loading={isSubmitting == true && item.type === "submit" ? true : false}
            inlineForm={inline && fields.filter((f) => f.type != "submit" && f.label && f.label.length > 0).length > 0 ? true : false}
            theme={theme}
            width={item.width || item.cols ? "full" : ""}
            //color={item.type === "submit" && isSubmitting == "success" ? "green" : item.color || "primary"}
            //icon={item.type === "submit" && isSubmitting == "success" ? "check" : item.icon ?? undefined}
            color={item.color ?? undefined}
            icon={item.icon ?? undefined}
            fillType={item.fillType || undefined}
            onClick={
              item.action && item.action == "back" && step > 1
                ? () => setStep(step - 1)
                : item.action && item.action == "submit"
                ? () => submitForm()
                : item.onClick ?? undefined
            }
            size={inline ? "large" : undefined}
          >
            {item.label}
            {/*{item.type === "submit" && isSubmitting == "success" ? "Saved!" : item.label}*/}
          </SwiftButton>
        </div>
      ) : item.type === "text-chip" ? (
        <SwiftInputTextChip
          label={item.label}
          value={values[item.key] ?? ""}
          suggestions={item.suggestions ?? []}
          onChange={(val) => {
            //console.log("text-chip updated!", val)
            setFieldValue(item.key, val)
          }}
        />
      ) : item.type === "password" ? (
        <SwiftInputText
          {...item}
          index={index}
          name={item.key}
          value={values[item.key] ?? ""}
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
          myRefs={myRefs}
          onChange={(val) => {
            if (item.onChange) {
              item.onChange(val)
            }
            setFieldValue(item.key, val)
          }}
        />
      ) : item.type === "textarea" ? (
        <SwiftInputTextarea
          {...item}
          fullWidth
          variant="filled"
          label={item.label}
          name={item.key}
          value={values[item.key] ?? ""}
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
      ) : item.type === "collection" ? (
        <SwiftInputCollection
          {...item}
          value={
            values[item.key] ? (values[item.key].constructor.name == "Object" ? Object.entries(values[item.key]) : values[item.key]) : []
          }
          schema={
            item.schema || [
              { type: "text", label: "Label" },
              { type: "text", label: "Value" },
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
      ) : item.type === "rich-textarea" ? (
        <SwiftInputRichTextarea
          fullWidth
          variant="filled"
          label={item.label}
          name={item.key}
          value={values[item.key] ?? ""}
          disabled={item.disabled ?? undefined}
          // onBlur={(e) => {
          //   console.log("swift-form rich-textarea onBlur")
          //   handleBlur(e)
          //   if (item.onBlur) {
          //     item.onBlur(e)
          //   }
          // }}
          height={item.height ?? undefined}
          autoCorrect={item.autoCorrect}
          autoComplete={item.autoComplete}
          autoFocus={item.autoFocus ?? undefined}
          helperText={touched[item.key] && errors[item.key]}
          error={Boolean(touched[item.key] && errors[item.key])}
          onChange={(val) => {
            //console.log("swift-form rich-textarea onChange", val)
            // if (item.onChange) {
            //   item.onChange(val)
            // }
            customOnChange(val)

            setFieldValue(item.key, val)

            //handleChange(val)
          }}
        />
      ) : /*) : item.type === 'date' ? (
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
            if (item.onChange) {
              item.onChange(val)
            }
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
        />*/
      item.type === "credit_card" ? (
        <SwiftCreditCard setBraintreeTokenize={setBraintreeTokenize} />
      ) : item.type === "code" ? (
        <SwiftInputCode
          fullWidth
          variant="filled"
          label={item.label}
          name={item.key}
          value={values[item.key] ?? ""}
          disabled={item.disabled ?? undefined}
          onBlur={(e) => {
            handleBlur(e)
            if (item.onBlur) {
              item.onBlur(e)
            }
          }}
          format={item.format || false}
          autoCorrect={item.autoCorrect}
          autoComplete={item.autoComplete}
          autoFocus={item.autoFocus ?? undefined}
          helperText={touched[item.key] && errors[item.key]}
          error={Boolean(touched[item.key] && errors[item.key])}
          //onChange={handleChange}
          onChange={(e) => {
            //console.log("code field updateing", e)
            if (item.onChange) {
              item.onChange(e)
            }
            setFieldValue(item.key, e)
          }}
        />
      ) : item.type === "color" ? (
        <SwiftInputColor
          fullWidth
          variant="filled"
          label={item.label}
          name={item.key}
          value={values[item.key] ?? ""}
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
            if (item.onChange) {
              item.onChange(e)
            }
            setFieldValue(item.key, val)
          }}
        />
      ) : item.type === "text_select" ? (
        <SwiftInputTextSelect
          fullWidth
          variant="filled"
          label={item.label}
          name={item.key}
          value={values[item.key] ?? ""}
          disabled={item.disabled ?? undefined}
          onUpdate={(e) => {
            if (item.onUpdate) {
              item.onUpdate(e)
            }
          }}
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
            if (item.onChange) {
              item.onChange(e)
            }
            setFieldValue(item.key, e)
          }}
          mask={item.mask}
          mask_message_none={item.mask_message_none}
          mask_prefix={item.mask_prefix}
          mask_suffix={item.mask_suffix}
          clearable={item.clearable ?? undefined}
        />
      ) : item.type === "otp" ? (
        <SwiftInputOTP
          {...item}
          name={item.key}
          value={values[item.key] ?? ""}
          disabled={item.disabled ?? undefined}
          onBlur={(e) => {
            handleBlur(e)
            if (item.onBlur) {
              item.onBlur(e)
            }
          }}
          autoCorrect={false}
          autoComplete={false}
          autoFocus={false}
          helperText={touched[item.key] && errors[item.key]}
          error={Boolean(touched[item.key] && errors[item.key])}
          onChange={(e) => {
            //console.log('OTP CHANGE', e)
            setFieldValue(item.key, e)
            if (e.length == 6 && item.autoSubmit) {
              //console.log('OTP SUBMITTING', e)
              submitForm()
            }
          }}
        />
      ) : item.type === "text" || item.type === "time" || item.type === "date" ? (
        <SwiftInputText
          {...item}
          index={index}
          name={item.key}
          value={values[item.key] ?? ""}
          onBlur={(e) => {
            handleBlur(e)
            if (item.onBlur) {
              item.onBlur(e)
            }
          }}
          onAddressUpdate={(p) => {
            if (item.onAddressUpdate) {
              item.onAddressUpdate(p)
            }
            fields.forEach((otherItem) => {
              if (
                otherItem.chain &&
                (otherItem.chain.field == item.key || (otherItem.chain.fields && otherItem.chain.fields.includes(item.key)))
              ) {
                if (otherItem.chain.type == "zip" && p.address_components.filter((elem) => elem.types.includes("postal_code")).length) {
                  setFieldValue(otherItem.key, p.address_components.filter((elem) => elem.types.includes("postal_code"))[0].short_name)
                }
              }
            })
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
            item.mask === "card_cvv"
              ? fields.filter((fieldOther) => fieldOther.mask == "card_number").length > 0 &&
                values[fields.filter((fieldOther) => fieldOther.mask == "card_number")[0].key]
                ? values[fields.filter((fieldOther) => fieldOther.mask == "card_number")[0].key].cvv_len
                : 3
              : undefined
          }
          onChange={(val) => {
            if (item.onChange) {
              item.onChange(val)
            }

            if (typeof val === "object") {
              //console.log("PROPS - ONCHANGE - OBJECT, KEY = "+item.key+", VALUE = ",val)
              setValues({ ...values, [item.key]: val })
              if (val.complete) {
                // autofocus next!!
                //consolecc_expitem, setting focus to next!")

                const fieldsInputs = fields.filter((elem) => !["title", "subtitle", "label"].includes(elem.type))
                const fieldsInputsCurrentIndex = fieldsInputs.findIndex((elem) => elem.key == item.key)
                //console.log("fieldsInputs",fieldsInputs)
                //console.log("fieldsInputsCurrentIndex",fieldsInputsCurrentIndex)
                if (typeof fieldsInputs[fieldsInputsCurrentIndex + 1] !== "undefined") {
                  var fieldsIndexNext = fields.findIndex((elem) => elem.key == fieldsInputs[fieldsInputsCurrentIndex + 1].key)
                  //console.log("fieldsIndexNext",fieldsIndexNext)
                  setTimeout(() => {
                    if (fields[fieldsIndexNext].type == "submit" && submitRef && submitRef.current) {
                      // last form element is complete, next form element is submit button, do we autosubmit here? maybe make it an option.
                      // submitRef.current.submit()
                    } else if (
                      typeof myRefs.current[fieldsIndexNext] !== "undefined" &&
                      typeof myRefs.current[fieldsIndexNext].focus !== "undefined"
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
                    setFieldValue(otherItem.key, "")
                  } else if (otherItem.chain.type == "path") {
                    const permalink =
                      "/" +
                      valNew
                        .toLowerCase()
                        .replace(/  +/g, " ")
                        .replace(/ /g, "-")
                        .replace(/[^\w-]+/g, "") +
                      (otherItem.chain.append ? otherItem.chain.append : "")
                    setFieldValue(otherItem.key, permalink != "/home" ? permalink : "/")
                  } else if (otherItem.chain.type == "permalink") {
                    const permalink =
                      valNew
                        .toLowerCase()
                        .replace(/  +/g, " ")
                        .replace(/ /g, "-")
                        .replace(/[^\w-]+/g, "") + (otherItem.chain.append ? otherItem.chain.append : "")
                    setFieldValue(otherItem.key, permalink)
                  } else if (otherItem.chain.type == "component") {
                    const permalink =
                      valNew
                        .toLowerCase()
                        .replace(/  +/g, " ")
                        .replace(/ /g, " ")
                        .replace(/[^\w-]+/g, " ")
                        .split(" ")
                        .map((word) => {
                          return word ? word[0].toUpperCase() + word.substring(1) : null
                        })
                        .join("") + (otherItem.chain.append ? otherItem.chain.append : "")
                    setFieldValue(otherItem.key, permalink)
                  } else if (otherItem.chain.type == "multiply") {
                    var valCalculated = otherItem.chain.initial ?? 1
                    otherItem.chain.fields.forEach((field) => {
                      var valCurrent = field == item.key ? valNew : values[field]
                      valCurrent = parseFloat(String(valCurrent).replace(/[^0-9\.]+/g, ""))
                      if (!valCurrent) {
                        valCalculated = 0
                      } else {
                        valCalculated *= valCurrent
                      }
                    })
                    setFieldValue(otherItem.key, Math.round(valCalculated))
                  } else if (otherItem.chain.type == "divide") {
                    //console.log('dividing')
                    var valCalculated = otherItem.chain.initial ?? 1
                    otherItem.chain.fields.forEach((field, i) => {
                      var valCurrent = field == item.key ? valNew : values[field]
                      valCurrent = parseFloat(String(valCurrent).replace(/[^0-9\.]+/g, ""))
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
  const { fields, steps, easyFiles, inline, submitRef, inputSize } = props

  const [step, setStep] = useState(1)

  const formRef = useRef(null)

  const [braintreeTokenize, setBraintreeTokenize] = useState(null)

  const initialValues = {}
  fields.forEach(function (item) {
    //if (item.keys) {
    //  initialValues[item.keys[0]] = item.value ?? ''
    //  initialValues[item.keys[1]] = item.value ?? ''
    //} else {
    if (["line", "subtitle", "title", "label"].includes(item.type)) return

    if (item.type == "file" && !item.value) {
      initialValues[item.key] = []
    } else if (item.type == "file" && item.value.constructor.name != "Array") {
      initialValues[item.key] = [
        {
          name: item.value.substring(item.value.lastIndexOf("/") + 1),
          url: item.value,
        },
      ]
    } else if (item.type == "file" && item.value.constructor.name == "Array") {
      initialValues[item.key] = item.value.map((val) => ({
        ...val,
        name: val.url.substring(val.url.lastIndexOf("/") + 1),
      }))
      // [{ name: item.value.substring(item.value.lastIndexOf('/') + 1), url: item.value }]
    } else if (item.type == "multicheckbox" || item.type == "multitoggle") {
      initialValues[item.key] = item.value == null ? null : item.value ?? ""
    } else if (item.type == "select" && item.emptyValue === false && !item.value && item.values.length > 0) {
      initialValues[item.key] = item.values[0]["value"]
    } else {
      initialValues[item.key] = item.value ?? ""
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
              .filter((field) => field.type == "file")
              .forEach((field) => {
                if (valsSubmit[field.key] && valsSubmit[field.key].length > 0) {
                  if (field.output_format && field.output_format == "json") {
                    valsSubmit[field.key] = JSON.stringify(valsSubmit[field.key][0]["output_json"])
                  } else {
                    valsSubmit[field.key] = valsSubmit[field.key][0]["url"]
                  }
                } else {
                  valsSubmit[field.key] = ""
                }
              })

            fields
              .filter((field) => field.type == "collection")
              .forEach((field) => {
                console.log(
                  "collection field",
                  JSON.stringify(valsSubmit[field.key]),
                  valsSubmit[field.key] ? 1 : 0,
                  valsSubmit[field.key].length > 0
                )
                if (valsSubmit[field.key] && valsSubmit[field.key].length > 0) {
                  console.log("RUNNING", valsSubmit[field.key])
                  valsSubmit[field.key].forEach((fieldRow, i) => {
                    console.log("collection fieldRow", fieldRow)
                    Object.keys(fieldRow).forEach((fieldKey) => {
                      const fieldCell = fieldRow[fieldKey]
                      console.log("collection fieldCell", fieldCell, typeof fieldCell)
                      if (typeof fieldCell != "object") return

                      if (fieldCell[0].output_format && fieldCell[0].output_format == "json") {
                        console.log("swift-form submit - collectionField output_form json detected, but not implemented.")
                        // something like: valsSubmit[field.key]["value"][i] = JSON.stringify(fieldCell[0][0]["output_json"])
                      } else {
                        console.log("saving url easyfiles embedded = ", fieldCell)
                        console.log("saving url easyfiles embedded valsSubmit = ", valsSubmit)
                        console.log("saving url easyfiles embedded valsSubmit = ", valsSubmit[field.key])
                        // console.log("saving to valsSubmit: " + JSON.stringify(valsSubmit[field.key]))
                        // console.log("saving to valsSubmit: ", valsSubmit[field.key])
                        valsSubmit[field.key][i][fieldKey] = fieldCell[0]["url"]
                      }
                    })
                  })

                  // } else {
                  //   //valsSubmit[field.key] = ""
                }
              })

            //console.log("easyFiles done - " + JSON.stringify(valsSubmit))
            //console.log("easyFiles done - ", valsSubmit)
          }

          // do we have a credit_card in this form? get nonce.
          if (braintreeTokenize) {
            try {
              Promise.resolve(braintreeTokenize())
                .then((btt) => {
                  try {
                    console.log("swift-form.tsx - braintreeTokenize result", btt)
                    if (btt.nonce) {
                      res = props.onSubmit({ ...valsSubmit, nonce: btt.nonce }, { setStatus })
                      Promise.resolve(res).then((data) => {
                        if (typeof data === "undefined" || data) {
                          // returned, this happens if NOT rerouting on success, set submitting false
                          setSubmitting(false)
                        }
                        if (data && data.error) {
                          // error on submitting form
                          setStatus({
                            type: "error",
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
                        type: "error",
                        text: "Failed to tokenize card details.",
                      })
                      return
                    }
                  } catch (e) {
                    setSubmitting(false)
                    setStatus({
                      type: "error",
                      text: e.message,
                    })
                    return
                  }
                })
                .catch((e) => {
                  console.log("braintreeTokenize() error - ", e)
                  setSubmitting(false)
                  if (e.details && e.details.invalidFields) {
                    setStatus({
                      type: "error",
                      text: "Payment fields invalid: " + Object.keys(e.details.invalidFields).join(", "),
                    })
                  } else {
                    setStatus({
                      type: "error",
                      text: e.message,
                    })
                  }
                  return
                })
            } catch (e) {
              setSubmitting(false)
              setStatus({
                type: "error",
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
                  type: "error",
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
              if (typeof data === "undefined" || data) {
                // returned, this happens if NOT rerouting on success, set submitting false
                setSubmitting(false)
              }
            })
          }
        }}
        validate={(values, e) => {
          //console.log("validating - values", values, e)
          const errors = {}
          fields.forEach(function (item) {
            //console.log("validating?", item)

            if (item.gate) {
              var gateSuccess = true
              //console.log("SWIFTFORM-GATE-VALIDATE", item.gate)
              item.gate.forEach((gate) => {
                if (
                  (Object.keys(gate).includes("value") && values[gate.field] != gate.value) ||
                  (Object.keys(gate).includes("contains") && !(values[gate.field] || "").includes(gate.contains))
                ) {
                  //console.log("gate FAILED", gate)
                  gateSuccess = false
                }
              })
              if (!gateSuccess) return
            }
            // is field part of a multi-step form? skip.
            if (steps > 1 && item.step && item.step != step) {
              return
            }

            if (item.validate) {
              // console.log("validating item!", item)
              // console.log("validate: value: ", values[item.key])
              if (values[item.key] == "" && values[item.key] !== "0" && values[item.key] !== 0) {
                errors[item.key] = "This field is required!"
              } else if (
                item.validate === "email" &&
                !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
                  values[item.key]
                ) &&
                values[item.key] !== "root"
              ) {
                errors[item.key] = "An email address is required."
              } else if (
                item.validate === "phone" &&
                !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(values[item.key])
              ) {
                errors[item.key] = "Enter a valid phone number."
              } else if (item.validate === "zip_code" && !values[item.key].complete) {
                errors[item.key] = "Enter a valid zip code."
              } else if (item.validate === "card_number" && !values[item.key].complete) {
                errors[item.key] = "Enter a valid credit card number."
              } else if (item.validate === "card_expiration" && !values[item.key].complete) {
                errors[item.key] = "Enter a valid expiration date."
              } else if (item.validate === "password") {
                if (values[item.key].length < 8) {
                  errors[item.key] = "Password must be 8+ chars."
                } else if (!/[a-z]/.test(values[item.key])) {
                  errors[item.key] = "Password must have a lowercase letter."
                } else if (!/[A-Z]/.test(values[item.key])) {
                  errors[item.key] = "Password must have an uppercase letter."
                } else if (!/[~`!#$@%^&*+=\-[\]\\';,/{}|\\":<>?]/g.test(values[item.key])) {
                  errors[item.key] = "Password must have a symbol."
                }
              } else if (item.validate === "password_confirm") {
                fields.forEach(function (i) {
                  if (i.validate === "password" && values[i.key] !== values[item.key]) {
                    errors[item.key] = "Passwords must match."
                  }
                })
              } else if (item.validate === "ach_routing" && values[item.key].replace(/[\W_]+/g, "").length != 9) {
                errors[item.key] = "Enter a 9-digit routing number."
              } else if (item.validate === "ach_account" && !/^([a-zA-Z0-9 _-]+)$/.test(String(values[item.key]).toLowerCase())) {
                errors[item.key] = "Enter a valid account number."
              } else if (item.validate === "card_cvv" && !values[item.key].complete) {
                errors[item.key] = "Enter a valid CVV."
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
          let formCols = inline ? fields.length : props.cols || 4
          let formGap = props.theme == "minimal" ? 0 : props.gridGap ?? 3

          return (
            <form onSubmit={handleSubmit} autoComplete="off" autoCorrect="off">
              <SwiftFormSubmitRef ref={submitRef} />
              {errors &&
              Object.keys(errors).length > 0 &&
              Object.keys(errors).some((elem) => Object.keys(touched).includes(elem)) &&
              fields.length > 4 ? (
                <div className={classNames("status", "error")}>
                  <span>
                    Error with these fields:{" "}
                    {Object.keys(errors)
                      .filter((elem) => Object.keys(touched).includes(elem))
                      .join(", ")}
                  </span>
                </div>
              ) : status.text ? (
                <div className={classNames("status", status.type)}>
                  <span>{status.text}</span>
                </div>
              ) : null}
              <SwiftGridRow spacing={[6, 4]} breakpoints={[576]}>
                {fields
                  .filter((item) => !(steps > 1 && item.step && item.step != step)) // filter out all inputs on a step
                  .filter((item) => inline || !["button", "submit"].includes(item.type)) // filter out all button / submit inputs (we put them at end)
                  .map(function (item, index) {
                    if (item.type === "hidden") return null
                    //<SwiftInputHidden type="hidden" key={item.key || index} name={item.key} value={item.value ?? ''} />

                    if (item.type === "multibutton" && item.values && item.values.length == 1) return null
                    //<SwiftInputHidden type="hidden" key={item.key || index} name={item.key} value={item.value ?? ''} />

                    //let itemColSpan = ['line', 'subtitle', 'title', 'label'].includes(item.type) ? formCols : item.cols || formCols
                    //let itemRowSpan = item.gridRowSpan || props.gridRows

                    // Gate V2 (multi-gate) - is field gated based on another field? skip.
                    if (item.gate) {
                      var gateSuccess = true
                      item.gate.forEach((gate) => {
                        if (
                          (Object.keys(gate).includes("value") && values[gate.field] != gate.value) ||
                          (Object.keys(gate).includes("contains") && !(values[gate.field] || "").includes(gate.contains))
                        ) {
                          //console.log("gate FAILED", gate)
                          gateSuccess = false
                        }
                      })
                      if (!gateSuccess) return null
                    }

                    if (inline) {
                      var inlineItemFlex = item.flex || undefined
                      var inlineItemWidth = item.width == "full" ? "100%" : item.width ?? undefined

                      //console.log("----1")
                      //console.log(values['card_number'])
                      //console.log(!values['card_number'].length)
                      //console.log(values['card_number'].includes('_'))
                      //console.log("----2")
                      //console.log("card number test",values['card_number'],(!values['card_number'] || !values['card_number']['complete']))
                      if (
                        props.type == "card" &&
                        props.theme == "minimal" &&
                        item.type == "text" &&
                        (!values["card_number"] || !values["card_number"]["complete"])
                      ) {
                        if (item.mask != "card_number") {
                          inlineItemWidth = 0
                          inlineItemFlex = null
                        } else {
                          inlineItemWidth = null
                          inlineItemFlex = 1
                        }
                      }

                      //flex={inlineItemFlex}

                      return (
                        <SwiftGridCol flex={1} key={item.key || index}>
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
                            theme={props.theme ?? "default"}
                            myRefs={myRefs}
                            submitRef={submitRef}
                          />
                        </SwiftGridCol>
                      )
                    } else {
                      return (
                        <SwiftGridCol widths={[item.cols ? item.cols : 12]} key={index}>
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
                            theme={props.theme ?? "default"}
                            myRefs={myRefs}
                            submitRef={submitRef}
                          />
                        </SwiftGridCol>
                      )
                    }
                  })}
              </SwiftGridRow>

              {fields
                .filter((item) => !(steps > 1 && item.step && item.step != step)) // filter out all inputs on a step
                .filter((item) => !inline && ["button", "submit"].includes(item.type)).length > 0 && (
                <SwiftFormButtonListStyled>
                  {fields
                    .filter((item) => !(steps > 1 && item.step && item.step != step)) // filter out all inputs on a step
                    .filter((item) => ["button", "submit"].includes(item.type)) // isolate all buttons we're gonna put them here at the end
                    .map(function (item, index) {
                      return (
                        <SwiftFormItem
                          key={index}
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
                          inputSize={inputSize}
                          theme={props.theme ?? "default"}
                          myRefs={myRefs}
                          submitRef={submitRef}
                        />
                      )
                    })}
                </SwiftFormButtonListStyled>
              )}
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
  inputSize: null,
  submitRef: null,
  theme: "default",
}

export default SwiftForm
