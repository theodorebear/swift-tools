import styled from 'styled-components';
import { lighten, darken, transparentize, readableColor } from 'polished';

export const SwiftCreditCardStyled = styled.div`
	.form_braintree_credit_card_input {
		display: block;
		width: 100%;
		outline: none;
		border: none;
		padding: 4px 16px 4px;
		color: inherit;
		border-radius: 4px;
		overflow: hidden;
		font-size: 16px;
		line-height: 30px;

		color: #1e1e1e;

		border: 2px solid #e6e6e6;
		background: #f2f2f2;
		color: #1e1e1e;

		transition: all 0.12s ease-out;

		display: flex;
		align-items: center;
		svg {
			width: 42px;
			height: 42px;
			margin-right: 12px;
			margin-left: -6px;
		}

		.form_braintree_credit_card_input_field {
			padding: 6px 0;
		}

		.braintree_input {
			height: 30px;
			font-family: 'Lato';
		}
	}
`;
