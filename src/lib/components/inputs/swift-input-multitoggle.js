import React, { useRef, useEffect, useState, Fragment } from "react"
import { SwiftInputMultiToggleStyled } from "./swift-input-multitoggle-style"
import SwiftLabel from "./swift-label"
import SwiftInputCheckbox from "./swift-input-checkbox"
import styled from "styled-components"
import SwiftIcon from "../icons"
import { transparentize, readableColor } from "polished"

const SwiftInputMultiToggleItemStyled = styled.div`
	display: flex;
	align-items: center;
	padding: 8px;
	border: 2px solid #f8f8f8;
	margin-bottom: 2px;
	cursor: pointer;
	i {
		margin-right: 8px;
		svg {
			width: 18px;
			height: 18px;
			opacity: 0.25;
		}
	}
	span {
		font-size: 14px;
		font-weight: 600;
		opacity: 0.5;
	}

	${(props) =>
		props.active
			? `

			i {
				svg {
					opacity:1;
				}
			}
			span {
				opacity:1;
			}
		

		${
			props.value === null
				? `
			background: ${props.theme.color_primary};
			color: ${readableColor(props.theme.color_primary)};
			i {
				svg {
					fill: ${readableColor(props.theme.color_primary)};
				}
			}
			border-color:${props.theme.color_primary};
		`
				: `
			i {
				svg {
					fill: ${props.theme.color_primary};
				}
			}
			border-color:${props.theme.color_primary};
		`
		}
	`
			: `
		&:hover {
			i {
				svg {
			opacity: 0.75;
					fill: ${props.theme.color_primary};
				}
			}
			span {
				opacity:1;
			}
			border-color:#f4f4f4;
		}
	`}
`
const SwiftInputMultiToggleItem = (props) => {
	const { icon, name, value, active, handleClick } = props
	return (
		<SwiftInputMultiToggleItemStyled
			active={active}
			value={value}
			onClick={(e) => {
				e.stopPropagation()
				handleClick()
			}}
		>
			<SwiftIcon i={icon || "check"} />
			<span>{name}</span>
		</SwiftInputMultiToggleItemStyled>
	)
}
const SwiftInputMultiToggle = (props) => {
	const { value, values, name, onChange, key, cols, selectAllLabel, selectMax } = props

	// console.log('SwiftInputMultiToggle ----')
	// console.log('SwiftInputMultiToggle - values', values)
	// console.log('SwiftInputMultiToggle - ', props, ' = ', value)

	var everyChecked = true
	if (value == null) {
		everyChecked = false
	} else if (value != null) {
		values.map((elem) => {
			if (elem.value === null || !elem.value.split(",").every((v) => value.split(",").includes(v))) {
				everyChecked = false
			}
		})
	}

	return (
		<SwiftInputMultiToggleStyled count={props.values ? props.values.length : 0} cols={cols} valuesInline={props.valuesInline}>
			{props.label && <SwiftLabel>{props.label}</SwiftLabel>}
			<div className="swift_input_multitoggle_window">
				{props.selectAll && (
					<>
						{/*<SwiftInputCheckbox
											label={"Select All"}
											name={name}
											onChange={(e) => {
												if (e.currentTarget.checked) {
													onChange(null)
												} else {
													onChange("")
												}
											}}
											checked={value == null || everyChecked ? true : false}
											disabled={false}
										/>*/}

						<SwiftInputMultiToggleItem
							name={selectAllLabel}
							value={null}
							icon={"star"}
							active={value == null || everyChecked ? true : false}
							handleClick={() => {
								if (value == null || everyChecked) {
									onChange("")
								} else {
									onChange(null)
								}
							}}
						/>
					</>
				)}
				<div className="swift_input_multitoggle_values">
					{values.map((elem, i) => (
						<Fragment key={i}>
							<SwiftInputMultiToggleItem
								{...elem}
								active={
									value == null || (value && elem.value.split(",").every((v) => value.split(",").includes(v)))
										? true
										: false
								}
								handleClick={() => {
									var valueSplit = value ? value.split(",") : []
									var valueAll = []
									values.forEach((v) => {
										valueAll = [...valueAll, ...v.value.split(",")]
									})
									if (value == null) valueSplit = valueAll
									//console.log('vsplit - ', valueSplit)
									//console.log('valueAll - ', valueAll)

									const isActiveNow =
										value == null || (value && elem.value.split(",").every((v) => value.split(",").includes(v)))

									if (!isActiveNow) {
										if (!selectMax || value.split(",").length < selectMax) {
											console.log("adding item, under selectMax", selectMax)
											// add value to value
											var valueNew = [...valueSplit, ...elem.value.split(",")].join(",")
										} else {
											console.log("adding item, selecting over max!", selectMax)
											var valueNew = [...valueSplit.slice(1), ...elem.value.split(",")].join(",")
										}

										// did this result in all being selected?
										if (valueNew.split(",").length == valueAll.length) {
											valueNew = null
										}
									} else {
										// remove this value from value
										var valueNew = [...valueSplit.filter((v) => !elem.value.split(",").includes(v))].join(",")
										// if (valueNew == '') {
										// 	valueNew = null;
										// }
										if (selectMax && valueNew.split(",").length > selectMax) {
											// deselecting but still over limit, try only selecting this one!
											valueNew = elem.value
										}
									}

									//console.log('vnew - ', valueNew)

									props.onChange(valueNew)
								}}
							/>
							{/*<SwiftInputCheckbox
								label={elem.name}
								value={elem.value}
								onChange={(e) => {
									var valueSplit = value ? value.split(",") : []
									var valueAll = []
									values.forEach((v) => {
										valueAll = [...valueAll, ...v.value.split(",")]
									})
									if (value == null) valueSplit = valueAll
									//console.log('vsplit - ', valueSplit)
									//console.log('valueAll - ', valueAll)

									if (e.currentTarget.checked) {
										// add value to value
										var valueNew = [...valueSplit, ...elem.value.split(",")].join(",")
										if (valueNew.split(",").length == valueAll.length) {
											valueNew = null
										}
									} else {
										// remove this value from value
										var valueNew = [...valueSplit.filter((v) => !elem.value.split(",").includes(v))].join(",")
										// if (valueNew == '') {
										// 	valueNew = null;
										// }
									}

									//console.log('vnew - ', valueNew)

									props.onChange(valueNew)
								}}
								checked={
									value == null || (value && elem.value.split(",").every((v) => value.split(",").includes(v)))
										? true
										: false
								}
								disabled={false}
							/>*/}
						</Fragment>
					))}
				</div>
			</div>

			{props.error && props.helperText ? <SwiftLabel error>{props.helperText}</SwiftLabel> : null}
		</SwiftInputMultiToggleStyled>
	)
}
SwiftInputMultiToggle.defaultProps = {
	selectMax: null,
	cols: 1,
	selectAll: true,
	selectAllLabel: "Select All",
	valuesInline: false,
}

export default SwiftInputMultiToggle
