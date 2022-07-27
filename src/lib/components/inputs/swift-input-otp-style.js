import styled from 'styled-components'
import { lighten, darken, transparentize, readableColor } from 'polished'

export const SwiftInputOTPStyled = styled.div`
	display: block;
	width: 100%;

	.swift_input_otp_wrapper {
		position: relative;
		display: flex;
		justify-content: space-between;
		> div {
			flex-basis: calc(16.667% - 3px);
			input {
				width: 100%;
				text-align: center;
				display: block;
				outline: none;
				border: none;
				padding: 10px 16px 11px;
				color: inherit;
				border-radius: 4px;
				overflow: hidden;
				font-size: 22px;
				font-weight: 700;
				font-family: monospace;
				line-height: 29px;

				border: 2px solid #e6e6e6;
				background: #f2f2f2;
				color: #1e1e1e;

				transition: all 0.12s ease-out;
			}
		}
	}
`
