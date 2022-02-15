import styled from 'styled-components';
import { lighten, darken, transparentize, readableColor } from 'polished';

export const SwiftSelectModalStyled = styled.div`
	display: block;
	width: 100%;
	& input {
		display: block;
		width: 100%;
		outline: none;
		border: none;
		padding: 10px 16px 10px;
		color: inherit;
		border-radius: 4px;
		overflow: hidden;
		font-size: 16px;
		line-height: 30px;
		border: 2px solid
			${(props) =>
				readableColor(
					props.theme.color_body_bg,
					darken(0.1, props.theme.color_body_bg),
					lighten(0.1, props.theme.color_body_bg),
					false
				)};

		color: #1e1e1e;

		border: 2px solid #e6e6e6;
		background: #f2f2f2;
		color: #1e1e1e;

		transition: all 0.12s ease-out;
		-webkit-appearance: button;
		-moz-appearance: button;
		-webkit-user-select: none;
		-moz-user-select: none;

		-webkit-appearance: none;
		-moz-appearance: none;
		text-indent: 1px;
		text-overflow: '';
	}
	& input::-ms-expand {
		display: none;
	}
	input:hover,
	input:focus {
		color: #1e1e1e;

		background: ${(props) => darken(0.1, '#fff')};
		color: #1e1e1e;
	}

	.swift_input_select_label {
		display: flex;
		align-items: center;
		label {
			flex: 1;
		}

		.swift_input_select_label_link {
			a {
				display: flex;
				align-items: center;
				padding: 4px;
				span {
					display: block;
					margin-right: 4px;
					font-size: 12px;
					font-weight: 700;
					color: ${(props) => props.theme.color_primary};
				}
				svg {
					display: block;
					width: 8px;
					height: 8px;
					fill: ${(props) => props.theme.color_primary};
					transition: transform 0.15s ease-out;
				}
				&:hover {
					svg {
						transform: translateX(4px);
					}
				}
			}
		}
	}

	${(props) =>
		props.entered &&
		`
		select,select:hover {
			background: ${(props) =>
				readableColor(
					props.theme.color_body_bg,
					darken(0.15, props.theme.color_body_bg),
					lighten(0.15, props.theme.color_body_bg),
					false
				)};;
			color: ${props.theme.color_body_text};

			background: ${(props) => darken(0.1, '#fff')};
			color: #1e1e1e;

		}
	`}
	${(props) =>
		props.error &&
		`
		select {
    		background: #fde0e0;
    	}
	`}
`;
