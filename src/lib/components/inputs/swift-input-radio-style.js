import styled from 'styled-components'

export const SwiftInputRadiosStyled = styled.div`
	width: 100%;
	label {
		margin-left: 0;
	}
`
export const SwiftInputRadioStyled = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-basis: 100%;

	input {
		width: 18px;
		height: 18px;
		border: 2px solid rgba(0, 0, 0, 0.08);
		outline: none;
	}
	span {
		display: block;
		font-weight: inherit;
		margin-left: 8px;
	}
	label {
		display: flex;
		align-items: center;
		opacity: 0.8;
		font-size: 13px;
		font-weight: 600;
		padding: 4px 0;
		-webkit-font-smoothing: antialiased;
		cursor: pointer;
		span {
			font-weight: inherit;
			font-weight: 800;
		}
	}

	.swift_input_radio_label_link {
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
`
