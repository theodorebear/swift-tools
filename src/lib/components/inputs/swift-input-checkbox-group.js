import React from 'react'
import { SwiftInputCheckboxGroupStyled } from './swift-input-checkbox-group-style'
import SwiftInputCheckbox from './swift-input-checkbox'
import SwiftLabel from './swift-label'

const SwiftInputCheckboxGroup = (props) => {
	//console.log('SICG - ', props)
	return (
		<SwiftInputCheckboxGroupStyled>
			<SwiftLabel>{props.label}</SwiftLabel>

			{props.value.map((elem) => (
				<SwiftInputCheckbox
					label={elem.label}
					name={elem.key}
					onChange={(e) => {
						//console.log("SwiftInputCheckboxGroup, value change", e.currentTarget.value, elem.key)
						var newVal = []
						if (elem.key.includes('*')) {
							newVal = [
								...props.value.map((val) => {
									return { ...val, value: elem.value ? 0 : 1 }
								}),
							]
						} else {
							newVal = [
								...props.value.map((val) => {
									return { ...val, value: val.key == elem.key ? (val.value ? 0 : 1) : val.value }
								}),
							]

							// 1+ unchecked, uncheck select all
							if (newVal.filter((elem) => !elem.value).length) {
								newVal = [
									...newVal.map((val) => {
										return { ...val, value: val.key.includes('*') ? 0 : val.value }
									}),
								]
							}

							// 0 unchecked, check select all
							if (newVal.filter((elem) => !elem.value).length == 1) {
								newVal = [
									...newVal.map((val) => {
										return { ...val, value: val.key.includes('*') ? 1 : val.value }
									}),
								]
							}
						}

						//console.log(newVal)
						props.onChange(newVal)
					}}
					checked={elem.value}
					disabled={elem.disabled || false}
				/>
			))}
		</SwiftInputCheckboxGroupStyled>
	)
}

export default SwiftInputCheckboxGroup
