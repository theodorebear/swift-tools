import styled from 'styled-components';
import { readableColor } from 'polished';

export const SwiftInputCheckboxStyled = styled.div`
	${({ hasLabel }) => hasLabel && `width: 100%;`}
	label {
		display: flex;
		align-items: center;
		padding: 3px 0;
		-webkit-font-smoothing: antialiased;
		cursor: pointer;
		font-size: 16px;

		.swift_input_checkbox_box {
			width: 18px;
			height: 18px;
			border: 2px solid rgba(0, 0, 0, 0.08);
			background: #fff;
			border-radius: 4px;
			${({ hasLabel }) => hasLabel && `margin-right: 8px;`}
			display:flex;
			align-items: center;
			justify-content: center;
			svg {
				display: block;
				width: 12px;
				height: 12px;
				opacity: 1;
				fill: ${({ theme }) => readableColor('#5ab89e')};
				transform: scale(0);
				margin: 0;
				path {
					fill: ${({ theme }) => readableColor('#5ab89e')};
				}
			}
		}
		input {
			display: none;
			&:checked ~ .swift_input_checkbox_box {
				background: #5ab89e;
				svg {
					transform: scale(1);
				}
			}
		}
		span {
			opacity: 0.6;
			font-size: 14px;
			font-weight: 700;
			flex: 1;
			display: block;
		}
	}
`;
