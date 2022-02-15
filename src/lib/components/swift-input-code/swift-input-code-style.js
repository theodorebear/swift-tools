import styled from 'styled-components';
import { lighten, darken, transparentize, readableColor } from 'polished';

export const SwiftInputCodeStyled = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 100%;
	& .textarea {
		display: block;
		width: 100%;
		outline: none;
		border: none;
		/*height: 320px;*/
		font-size: 16px;

		background: #1e1e1e;
		color: #fff;
		.punctuation,
		.keyword,
		pre {
			color: #fff;
		}
		padding: 0;
		border-radius: 4px;
		overflow: hidden;

		/**/
		transition: all 0.12s ease-out;

		max-height: 640px;
		max-width: calc(100vw - 300px);
		overflow: scroll;
		&::-webkit-scrollbar {
			width: 5px;
			height: 5px;
			background-color: #000;
		}
		&::-webkit-scrollbar-thumb {
			background: #666;
		}
		flex: 1;
	}
`;
