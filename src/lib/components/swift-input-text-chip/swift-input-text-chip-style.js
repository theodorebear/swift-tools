import styled from "styled-components"

export const SwiftInputTextStyledChip = styled.div`
	display: block;
	width: 100%;
	& > div {
		display: block;
		width: 100% !important;
		outline: none !important;
		border: none;
		padding: 3px 8px !important;
		color: inherit !important;
		background: transparent !important;
		border-radius: 4px !important;
		border: 2px solid rgba(0, 0, 0, 0.08) !important;
		transition: all 0.12s ease-out !important;
		font-size: 16px;
		& > div > input,
		& > div > input:hover,
		& > div > input:focus {
			background:transparent; !important;
			outline:none !important;
			font-size:16px !important;
			font-family:"Lato", "open sans", "open-sans", sans-serif !important;
			line-height: 22px;
		}

		& > div:not([role=combobox]) {
			background:#fff !important !important;
			padding:0 !important;
			font-size:14px !important;
			font-weight:700 !important;
			display:flex;
			align-items:center;
			padding-left: 10px !important;
			span {
				padding: 3px 6px;
			    font-size: 20px;
			    opacity: 0.25;
			}
		}

	}
	& input:hover {
		background: #fafafa;
		color: #1e1e1e;
	}
	& input:focus {
		background: white;
		color: #1e1e1e;
	}
	${({ entered }) =>
		entered &&
		`
		input,input:hover {
			background: white;
			color: #1e1e1e;
		}
	`}
	${({ error }) =>
		error &&
		`
		input {
    		background: #fde0e0;
    	}
	`}
`
