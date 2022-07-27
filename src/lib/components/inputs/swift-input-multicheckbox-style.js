import styled from 'styled-components'
import { lighten, darken, transparentize, readableColor } from 'polished'

export const SwiftInputMultiCheckboxStyled = styled.div`
	${(props) =>
		props.border &&
		`
		.swift_input_multicheckbox_window {
			border: 2px solid ${darken(0.15, '#fff')};
			background: ${darken(0.05, '#fff')};
			color: #1e1e1e;

			padding: 4px 8px;
			height: 220px;
			max-height: 220px;
			overflow: scroll;
			overflow-x: hidden;
			font-size: 16px;
		}
	`}
	${({ count, cols }) =>
		cols == 2 &&
		`.swift_input_multicheckbox_values {
		display: flex;
		flex-wrap: wrap;
		> div {
			flex-basis: 50%;
		}
	}`}

	${({ valuesInline }) =>
		valuesInline &&
		`.swift_input_multicheckbox_values {
		display: flex;
		flex-wrap: wrap;
		> div {
			width:auto;
			padding-right:18px;
		}
	}`}

	

	.swift_input_multicheckbox_children {
		> div {
			padding: 0;
			position: relative;
			padding-left: 24px;
			&:after {
				content: '';
				display: block;
				position: absolute;
				left: 8px;
				top: 0;
				height: 100%;
				width: 2px;
				background: #1e1e1e;
				opacity: 0.2;
			}
			&:last-of-type:after {
				height: calc(50% + 2px);
			}
			&:before {
				content: '';
				display: block;
				position: absolute;
				left: 10px;
				top: 50%;
				width: 8px;
				height: 2px;
				background: #1e1e1e;
				opacity: 0.2;
			}
		}
	}
`
