import styled from 'styled-components';
import { lighten, darken, transparentize, readableColor } from 'polished';

export const SwiftInputTextSelectStyled = styled.div`
	display: block;
	width: 100%;
	input,
	.swift_input_textselect_input_mask {
		display: block;
		width: 100%;
		outline: none;
		border: none;
		padding: 10px 16px 11px;
		font-size: 16px;
		line-height: 29px;
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

		border: 2px solid #e6e6e6;
		background: ${(props) => darken(0.1, '#fff')};
		color: #1e1e1e;
	}

	.swift_input_textselect_input_clear {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 12px;
		z-index: 5;
		cursor: pointer;
		opacity: 0.5;
		&:hover {
			opacity: 1;
		}
		svg {
			display: block;
			width: 10px;
			height: 10px;
			path {
				fill: #1e1e1e;
			}
		}
	}

	.swift_input_textselect_input_wrapper {
		position: relative;
		${(props) =>
			props.valuesCount > 0 &&
			`
			input:focus {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		`}
		.swift_input_textselect_input_values {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			z-index: 6;

			border: 2px solid
				${(props) =>
					readableColor(
						props.theme.color_body_bg,
						darken(0.15, props.theme.color_body_bg),
						lighten(0.15, props.theme.color_body_bg),
						false
					)};
			color: #1e1e1e;

			border: 2px solid #e6e6e6;
			background: #f2f2f2;
			color: #1e1e1e;

			border-top: none;

			ul {
				li {
					font-size: 13px;
					font-weight: 700;
					padding: 6px 12px;
					cursor: pointer;
					&:hover {
						background: #ff5d00;
						color: ${(props) => readableColor('#FF5D00')};

						background: ${(props) => darken(0.1, '#fff')};
						color: #1e1e1e;
					}
				}
			}
		}

		.swift_input_textselect_input_mask {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			opacity: 1;
			pointer-events: none;
		}
	}

	${(props) =>
		props.entered &&
		`
		input,input:hover,
		.swift_input_textselect_input_mask {
			background: ${readableColor(
				props.theme.color_body_bg,
				darken(0.15, props.theme.color_body_bg),
				lighten(0.15, props.theme.color_body_bg),
				false
			)};
			color: ${props.theme.color_body_text};

			border: 2px solid ${darken(0.1, '#fff')};
			background: ${darken(0.1, '#fff')};
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
`;
