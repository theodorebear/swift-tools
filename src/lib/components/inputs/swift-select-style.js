import styled from 'styled-components'
import { lighten, darken, transparentize, readableColor } from 'polished'

export const SwiftSelectStyled = styled.div`
	${(props) =>
		props.theme == 'default'
			? `
	display: block;
	width: 100%;
	& select {
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
	& select::-ms-expand {
		display: none;
	}
	select:hover,
	select:focus {
		color: #1e1e1e;
		background: ${darken(0.1, '#fff')};
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
					color: teal;
				}
				svg {
					display: block;
					width: 8px;
					height: 8px;
					fill: teal;
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


	${
		props.error
			? `
		select {
    		background: #fde0e0;
    		border-color: #d44747;
    	}
	`
			: ``
	}

	`
			: props.theme == 'minimal'
			? `
		display: block;
	width: 100%;
	& select {
		display: block;
		width: 100%;
		outline: none;
		border: none;
		padding: 10px 16px 10px;
		color: inherit;
		border-radius: 4px;
		overflow: hidden;
		font-size: 16px;
		line-height: 34px;

		background: none;

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
	& select::-ms-expand {
		display: none;
	}
	select:hover,
	select:focus {
		color: #1e1e1e;
		background: ${darken(0.1, '#fff')};
		color: #1e1e1e;
	}

	.swift_input_select_label,label {
		display:none;
	}

	${
		props.error
			? `
		select {
    		background: #fde0e0;
    		border-color: #d44747;
    	}
	`
			: ``
	}
	`
			: props.theme == 'none'
			? `
		select {
			width:100%;
			outline:none;
			padding:12px 18px;
			border:1px solid #000;
		}
	`
			: ``}
`
