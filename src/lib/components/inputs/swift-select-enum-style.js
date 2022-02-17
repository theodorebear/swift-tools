import styled from 'styled-components';
import { lighten, darken, transparentize, readableColor } from 'polished';

const SwiftSelectEnumStyled = styled.div`
	display: block;
	width: 100%;

	.swift_select_enum_elem {
		display: flex;
		width: 100%;
		outline: none;
		border: none;
		padding: 0px;
		color: inherit;
		border-radius: 4px;
		overflow: hidden;
		font-size: 16px;

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
		li {
			flex-shrink: 0;
			flex-grow: 1;
			font-size: 13px;
			line-height: 20px;
			padding: 15px 6px 16px;
			font-weight: 600;
			text-align: center;
			cursor: pointer;
			&:hover {
				background: #e6e6e6;
				color: #1e1e1e;
			}
			&.active {
				background: #ff5d00;
				color: ${(props) => readableColor('#FF5D00')};
			}
			&:first-of-type {
				padding-left: 8px;
			}
			&:last-of-type {
				padding-right: 8px;
			}
		}
	}
`;

export default SwiftSelectEnumStyled;
