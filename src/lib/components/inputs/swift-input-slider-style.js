import styled from 'styled-components';
import { readableColor, darken } from 'polished';

export const SwiftInputSliderStyled = styled.div`
	.swift_input_slider_element {
		padding: 8px;
		> div {
			width: 100%;
			display: block;
			> div:first-of-type {
				background: ${(props) => darken(0.075, props.theme.color_primary)};
			}
			> div:last-of-type > div {
				background: #ff5d00;
			}
		}
	}
`;
