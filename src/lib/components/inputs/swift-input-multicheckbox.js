import React, { useRef, useEffect, useState, Fragment } from 'react'
import { SwiftInputMultiCheckboxStyled } from './swift-input-multicheckbox-style'
import SwiftLabel from './swift-label'
import SwiftInputCheckbox from './swift-input-checkbox'
import { Flex, GridItem, Box } from '../grid'

const SwiftInputMultiCheckbox = (props) => {
	const { value, values, name, onChange, key, cols } = props

	// console.log('SwiftInputMultiCheckbox ----')
	// console.log('SwiftInputMultiCheckbox - values', values)
	// console.log('SwiftInputMultiCheckbox - ', props, ' = ', value)

	var everyChecked = true
	if (value == null) {
		everyChecked = false
	} else if (value != null) {
		values.map((elem) => {
			if (!elem.value.split(',').every((v) => value.split(',').includes(v))) {
				everyChecked = false
			}
		})
	}

	return (
		<SwiftInputMultiCheckboxStyled
			count={props.values ? props.values.length : 0}
			cols={cols}
			border={props.border}
			valuesInline={props.valuesInline}
		>
			{props.label && <SwiftLabel>{props.label}</SwiftLabel>}
			<div className="swift_input_multicheckbox_window">
				{props.selectAll && (
					<SwiftInputCheckbox
						label={'Select All'}
						name={name}
						onChange={(e) => {
							if (e.currentTarget.checked) {
								onChange(null)
							} else {
								onChange('')
							}
						}}
						checked={value == null || everyChecked ? true : false}
						disabled={false}
					/>
				)}
				<div className="swift_input_multicheckbox_values">
					{values.map((elem, i) => (
						<Fragment key={i}>
							<SwiftInputCheckbox
								label={elem.name}
								value={elem.value}
								onChange={(e) => {
									var valueSplit = value ? value.split(',') : []
									var valueAll = []
									values.forEach((v) => {
										valueAll = [...valueAll, ...v.value.split(',')]
									})
									if (value == null) valueSplit = valueAll
									//console.log('vsplit - ', valueSplit)
									//console.log('valueAll - ', valueAll)

									if (e.currentTarget.checked) {
										// add value to value
										var valueNew = [...valueSplit, ...elem.value.split(',')].join(',')
										if (valueNew.split(',').length == valueAll.length) {
											valueNew = null
										}
									} else {
										// remove this value from value
										var valueNew = [...valueSplit.filter((v) => !elem.value.split(',').includes(v))].join(',')
										// if (valueNew == '') {
										// 	valueNew = null;
										// }
									}

									//console.log('vnew - ', valueNew)

									props.onChange(valueNew)
								}}
								checked={
									value == null || (value && elem.value.split(',').every((v) => value.split(',').includes(v)))
										? true
										: false
								}
								disabled={false}
							/>
						</Fragment>
						/*false && value.includes(elem.value) ? (
								<div className="swift_input_multicheckbox_children">
									<SwiftInputCheckbox
										label="All Subtypes"
										value=""
										checked={value == '' || value.includes(elem.value) ? true : false}
										disabled={false}
									/>
									{elem.children.map((subElem) => (
										<SwiftInputCheckbox
											label={subElem.name}
											value={subElem.value}
											checked={value == '' || value.includes(elem.value) ? true : false}
											disabled={false}
										/>
									))}
								</div>
							) : null*/
					))}
				</div>
			</div>

			{props.error && props.helperText ? <SwiftLabel error>{props.helperText}</SwiftLabel> : null}
		</SwiftInputMultiCheckboxStyled>
	)
}
SwiftInputMultiCheckbox.defaultProps = {
	cols: 1,
	border: true,
	selectAll: true,
	valuesInline: false,
}

export default SwiftInputMultiCheckbox
