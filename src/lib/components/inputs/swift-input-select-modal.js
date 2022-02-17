import { useState } from 'react'
import SwiftLabel from './swift-label'
import { SwiftSelectModalStyled } from './swift-input-select-modal-style'
import classNames from 'classnames'
import { Modal } from 'react-bootstrap'
import SwiftForm from '../forms/swift-form'

const SwiftSelectModal = (props) => {
  //console.log('SwiftSelect: props', props)
  const [modal, setModal] = useState(null)

  const handleSubmit = (vals) => {
    console.log('submit', vals)
    const val = vals.values ? vals.values.map((elem) => elem.value).join(',') : null
    console.log(val)
    props.onChange(val)
    setModal(null)
  }

  return (
    <>
      <SwiftSelectModalStyled
        error={props.error && props.helperText ? true : false}
        entered={props.value && props.value.length > 0 ? true : false}
      >
        {(props.label || !Object.keys(props).includes('label') || props.link) && (
          <div className="swift_input_select_label">
            {props.label ? (
              <SwiftLabel>{props.label}</SwiftLabel>
            ) : !Object.keys(props).includes('label') ? (
              <SwiftLabel>{props.name}</SwiftLabel>
            ) : null}
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
                  <a href={props.link.url ? props.link.url : props.link} target="_blank">
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
        <div className="" style={{ cursor: 'pointer' }} onClick={() => setModal(true)}>
          <input
            disabled={true}
            value={
              props.value && props.value.length > 0
                ? props.value.split(',').length + ' ' + props.itemName + (props.value.split(',').length > 1 ? 's' : '')
                : ''
            }
            placeholder={'Select...'}
          />
        </div>
        {/*<select name={props.name} value={props.value ?? ""} onChange={props.onChange}>
          {(props.emptyValue ? [{ name: props.emptyLabel ?? "", value: "" }, ...props.values] : props.values).map((item, index) => (
            <option
              key={item.value || item.value === null ? item.value : item.name}
              value={item.value || item.value === 0 || item.value === "0" ? item.value : item.value === null || item.value === "" ? "" : item.name}
              disabled={item.disabled ?? undefined}
            >
              {item.name}
            </option>
          ))}
        </select>*/}
        {props.sublabel ? <SwiftLabel style={{ marginTop: '8px', opacity: 0.4 }}>{props.sublabel}</SwiftLabel> : null}
        {props.error && props.helperText ? <SwiftLabel error>{props.helperText}</SwiftLabel> : null}
      </SwiftSelectModalStyled>
      <Modal show={modal} onHide={() => setModal(null)}>
        <Modal.Header closeButton>
          <Modal.Title>Select {props.label}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SwiftForm
            onSubmit={handleSubmit}
            fields={[
              {
                key: 'values',
                type: 'collection',
                label: props.label,
                value: props.value && props.value.length > 0 ? props.value.split(',').map((elem) => ({ value: elem })) : [],
                schema: [
                  {
                    name: 'value',
                    type: 'text',
                    label: '',
                    search: props.search ?? undefined,
                    placeholder: 'Search ' + props.label + '...',
                  },
                ],
              },
              {
                key: 'submit',
                type: 'submit',
                label: 'Submit',
              },
            ]}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}
SwiftSelectModal.defaultProps = {
  emptyValue: true,
  itemName: 'item',
}

export default SwiftSelectModal
