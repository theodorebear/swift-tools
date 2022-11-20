import React, { useRef, useEffect, useState } from "react"
import { SwiftInputCollectionStyled } from "./swift-input-collection-style"
import SwiftLabel from "./swift-label"
import SwiftInputText from "./swift-input-text"
import SwiftSelect from "./swift-select"
import { Flex, GridItem, Box } from "../grid"
import SwiftInputCheckbox from "./swift-input-checkbox"
import SwiftDrop from "./swift-drop"
import SwiftInputColor from "./swift-input-color"
import SwiftInputHidden from "./swift-input-hidden"
import SwiftInputSelectModal from "./swift-input-select-modal"

const SwiftInputCollection = (props) => {
	const { value, placeholders, schema, allowCreate, allowRemove } = props

	/*useEffect(() => {
		console.log("collection value", value)
	}, [value])*/

	const lastInputRef = useRef(null)

	const handleDelete = (index) => {
		props.onChange([...value.slice(0, index), ...value.slice(index + 1)])
	}
	const handleChange = (index, fieldName, valNew) => {
		//console.log("change", index, fieldName, valNew)
		if (index == value.length) {
			// this is the last one, create / add to list!
			props.onChange([...value, { [fieldName]: valNew }]) //elemIndex == 0 ? valNew : "", elemIndex == 1 ? valNew : ""]
			return
		}
		props.onChange([
			...value.slice(0, index),
			{ ...value[index], [fieldName]: valNew }, //[elemIndex == 0 ? valNew : value[index][0], elemIndex == 1 ? valNew : value[index][1]]
			...value.slice(index + 1),
		])
	}
	//console.log("colection,value", value)
	return (
		<SwiftInputCollectionStyled>
			<SwiftLabel>
				<strong>{props.label}</strong>
			</SwiftLabel>
			<div className="swift_input_collection_items">
				{(allowCreate ? [...value, []] : value).map((elem, i) => {
					//console.log("elem", elem)
					return (
						<Flex
							key={"collection-" + i}
							wrap="wrap"
							gridColumnGap={elem.length !== 0 || schema.length > 1 ? 3 : 0}
							justify="space-between"
							ref={i == Object.keys(value).length - 1 ? lastInputRef : null}
						>
							{elem.length !== 0 && (
								<div className="swift_input_collection_item_index">
									<span>#{i + 1}</span>
								</div>
							)}
							{schema
								.filter((schemaItem) => {
									if (!schemaItem.gate) return true
									if (elem && Object.keys(elem).includes(schemaItem.gate.field)) {
										if (elem[schemaItem.gate.field] != schemaItem.gate.value) {
											return false
										} else {
											return true
										}
									}
								})
								.map((schemaItem, schemaIndex) => {
									if (schemaItem["type"] == "hidden") {
										return <SwiftInputHidden type="hidden" key={schemaIndex} name={schemaItem["name"] || schemaIndex} value={elem[schemaItem["name"] || schemaIndex] || ""} />
									}
									//console.log("schemaaaa", schemaItem, schemaItem["name"] || schemaIndex)
									return (
										<Box flex="1" wrap="wrap" key={schemaIndex}>
											{schemaItem["type"] == "checkbox" ? (
												// doesnt work yet..
												<SwiftInputCheckbox
													{...schemaItem}
													label={schemaItem["label"] || schemaItem["name"]}
													name={(schemaItem["name"] || schemaIndex) + i}
													onChange={(e) => {
														handleChange(
															i,
															schemaItem["name"] || schemaIndex,
															elem[schemaItem["name"] || schemaIndex] && elem[schemaItem["name"] || schemaIndex] != 0 ? 0 : 1
														)
													}}
													checked={elem[schemaItem["name"] || schemaIndex] == 1}
												/>
											) : schemaItem["type"] == "select" ? (
												<SwiftSelect
													{...schemaItem}
													label={schemaItem["label"] || schemaItem["name"]}
													values={schemaItem.values || []}
													value={elem[schemaItem["name"] || schemaIndex] || ""}
													name={schemaItem["name"] || schemaIndex}
													onChange={(e) => {
														handleChange(i, schemaItem["name"] || schemaIndex, e.currentTarget.value)
													}}
												/>
											) : schemaItem["type"] == "color" ? (
												<SwiftInputColor
													{...schemaItem}
													label={schemaItem["label"] || schemaItem["name"]}
													name={schemaItem["name"] || schemaIndex}
													value={elem[schemaItem["name"] || schemaIndex] || ""}
													onChange={(val) => {
														handleChange(i, schemaItem["name"] || schemaIndex, val)
													}}
												/>
											) : schemaItem["type"] == "file" ? (
												<SwiftDrop
													{...schemaItem}
													accept={null}
													maxSize={10000000}
													status={elem[schemaItem["name"] || schemaIndex] ? "success" : "accept"}
													files={elem[schemaItem["name"] || schemaIndex] ?? []}
													setFiles={(vals) => {
														handleChange(i, schemaItem["name"] || schemaIndex, vals)
													}}
												/>
											) : schemaItem["type"] == "select-modal" ? (
												<SwiftInputSelectModal
													{...schemaItem}
													name={schemaItem["name"] || schemaIndex}
													onChange={(valNew) => handleChange(i, schemaItem["name"] || schemaIndex, valNew)}
													value={elem[schemaItem["name"] || schemaIndex] || ""}
												/>
											) : (
												<SwiftInputText
													{...schemaItem}
													//placeholder={placeholders && placeholders[0]}
													search={schemaItem["search"] || undefined}
													link={
														schemaItem["link"] && elem[schemaItem["name"] || schemaIndex]
															? { ...schemaItem["link"], url: schemaItem["link"]["url"].replace("{value}", elem[schemaItem["name"] || schemaIndex]) }
															: undefined
													}
													name={schemaItem["name"] || schemaIndex}
													onChange={(valNew) => handleChange(i, schemaItem["name"] || schemaIndex, valNew)}
													value={elem[schemaItem["name"] || schemaIndex] || ""}
												/>
											)}
										</Box>
									)
								})}

							{allowRemove && (
								<Flex direction="column" justify="center" className="swift_input_collection_item_actions">
									{elem.length !== 0 && (
										<Flex className="swift_input_collection_item_delete" flex="" justify="center" onClick={() => handleDelete(i)} style={{ opacity: i == value.length ? "0" : "" }}>
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
												<path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
											</svg>
										</Flex>
									)}
									{/*
								// Sort handle - incomplete!
								<Flex
									className="swift_input_collection_item_reorder"
									flex=""
									justify="center"
									style={{ opacity: i == value.length ? "0" : "" }}
								>
									<svg width="24" height="24" viewBox="0 0 24 24">
										<path d="M12 16c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 1c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0-8c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 1c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0-8c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 1c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z" />
									</svg>
								</Flex>*/}
								</Flex>
							)}
						</Flex>
					)
				})}
			</div>
			{props.error && props.helperText ? <SwiftLabel error>{props.helperText}</SwiftLabel> : null}
		</SwiftInputCollectionStyled>
	)
}
SwiftInputCollection.defaultProps = {
	allowCreate: true,
	allowRemove: true,
}

export default SwiftInputCollection
