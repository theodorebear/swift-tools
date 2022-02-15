import React from 'react'
import { SwiftInputSliderStyled } from './swift-input-slider-style'
import SwiftLabel from '../swift-label/swift-label'
import Slider from 'react-input-slider'

const SwiftInputSlider = (props) => {
	const { min, max, step, valueType } = props
	return (
		<SwiftInputSliderStyled
			hasLabel={props.label ? true : false}
			onClick={(e) => {
				if (props.handleClick) props.handleClick()
			}}
		>
			<SwiftLabel>
				{props.label}:&nbsp;
				<u>
					{valueType == '%'
						? props.value + '%'
						: valueType == '$'
						? '$' + props.value.toLocaleString()
						: valueType
						? props.value + ' ' + valueType
						: props.value}
				</u>
			</SwiftLabel>
			<div className="swift_input_slider_element">
				<Slider
					axis="x"
					x={props.value || min}
					onChange={({ x }) => props.onChange(x)}
					xmin={min || 0}
					xmax={max || 100}
					xstep={step || 1}
					styles={{
						track: {
							//backgroundColor: "blue",
						},
						active: {},
						thumb: {},
						disabled: {
							opacity: 0.5,
						},
					}}
				/>
			</div>
			{/*<label htmlFor={props.name}>
				<input
					type="checkbox"
					key={props.key}
					id={props.name}
					checked={props.checked}
					onChange={props.onChange}
					onClick={(e) => {
						e.stopPropagation()
					}}
					disabled={props.disabled}
				/>
				<div className="swift_input_checkbox_box">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z" />
					</svg>
				</div>
				{props.label && <span>{props.label}</span>}
			</label>*/}
		</SwiftInputSliderStyled>
	)
}

export default SwiftInputSlider
