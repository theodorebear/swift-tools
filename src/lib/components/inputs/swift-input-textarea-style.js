import styled from 'styled-components'
import { lighten, darken, transparentize, readableColor } from 'polished'

export const SwiftInputTextareaStyled = styled.div`
	display: block;
	width: 100%;
	textarea {
		display: block;
		width: 100%;
		outline: none;
		border: none;
		height: ${(props) => (props.height ? props.height + 'px' : '120px')};
		padding: 10px 16px 11px;
		color: inherit;
		border-radius: 4px;
		font-size: 16px;
		line-height: 21px;
		overflow: hidden;
		overflow-y: auto;
		resize: none;

		border: 2px solid #e6e6e6;
		background: #f2f2f2;
		color: #1e1e1e;

		transition: all 0.12s ease-out;
	}
	textarea:hover,
	textarea:focus {
		color: #1e1e1e;

		background: #f2f2f2;
		color: #1e1e1e;
	}
	${(props) =>
		props.entered &&
		`
		textarea,textarea:hover {
			background: #e6e6e6;
			color: #1e1e1e;
		}
	`}
	${(props) =>
		props.error &&
		`
		textarea {
    		background: #fde0e0;
    	}
	`}
`
