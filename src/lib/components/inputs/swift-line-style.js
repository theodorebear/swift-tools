import styled from "styled-components"

export const SwiftLineStyled = styled.hr`
	border: none;
	height: 2px;
	background: ${(props) => props.theme.color_body_text};
	margin: 6px 0 3px;
	opacity: 0.1;
`
