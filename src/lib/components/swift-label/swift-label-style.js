import styled from "styled-components"
import { readableColor, lighten, darken } from "polished"

export const SwiftLabelStyled = styled.label`

	${props => props.theme == "default" ? `	
		display: block;
		opacity: 0.8;
		font-size: 14px;
		line-height: 18px;
		font-weight: 700;
		margin-bottom: 6px;
		margin-left: 0px;
		-webkit-font-smoothing: antialiased;

		display: flex;
		align-items: center;
		svg {
			width: 16px;
			height: 16px;
			margin-right: 6px;
		}
		span {
			flex: 1;
			display: block;
			font-weight: inherit;
		}
		strong {
			font-weight: 800;
		}

		${props.type == "sublabel" ?
			`
			font-size:12px;
			font-weight:600;
		` : ``}

		${props.color == "primary" ?
			`
		    color: ${props.theme.color_primary};
		   	svg {
		   		path {
		   			fill: ${props.theme.color_primary};
		   		}
		   	}
	    ` : ``}

		${props.error ?
			`
	    	color: #d44747;
			font-weight: 700;
			margin-top: 6px;
			opacity: 1;
			margin-bottom: 0;
		` : ``}

	` : props.theme == 'none' ? `
		${props.error &&
			`
	    	color: #d44747;
		`}
	` : ``}
`
