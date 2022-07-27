import styled from 'styled-components'
import { lighten, darken, transparentize, readableColor } from 'polished'

export const SwiftInputColorStyled = styled.div`
	display: block;
	width: 100%;

	.swift_input_color_window {
		display: flex;
		font-size: 16px;

		border: 2px solid #e6e6e6;
		background: #f2f2f2;
		color: #1e1e1e;

		border-radius: 4px;
		padding-right: 0;

		&:hover {
			background: #e6e6e6;
			color: #1e1e1e;
		}
		.swift_input_color_swatch {
			flex: 1;
			padding: 10px 16px 11px;
			cursor: pointer;
			display: flex;
			align-items: center;

			${(showPicker) =>
				showPicker &&
				`
			background: #e6e6e6;
			color: #1e1e1e;
		`}
			.swift_input_color_swatch_view {
				height: 18px;
				width: 18px;
				border-radius: 50%;
				margin-right: 12px;
				border: 2px solid ${(props) => darken(0.2, '#fff')};
			}
		}

		.swift_input_color_clear {
			padding: 0 8px;
			display: flex;
			align-items: center;
			cursor: pointer;
			svg {
				height: 12px;
				height: 12px;
				opacity: 0.25;
			}
			&:hover {
				svg {
					opacity: 0.5;
				}
			}
		}
	}
	.swift_input_color_swatch_picker {
		.swift_input_color_swatch_picker_cover {
			position: fixed;
			top: 0px;
			right: 0px;
			bottom: 0px;
			left: 0px;
		}
	}

	input {
		display: block;
		width: 100%;
		outline: none;
		border: none;
		padding: 10px 16px 11px;
		color: inherit;
		border-radius: 4px;
		overflow: hidden;

		color: #1e1e1e;

		border: 2px solid #e6e6e6;
		background: #f2f2f2;
		color: #1e1e1e;
		transition: all 0.12s ease-out;
	}
	input:hover,
	input:focus {
		color: #1e1e1e;

		background: #e6e6e6;
		color: #1e1e1e;
	}
	${(props) =>
		props.entered &&
		`
		input,input:hover {
			background: #e6e6e6;
			color: #1e1e1e;
		}
	`}
	${(props) =>
		props.error &&
		`
		input {
    		background: #fde0e0;
    	}
	`}
`
