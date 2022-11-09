import styled from 'styled-components'

export const SwiftFormButtonListStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 8px;
	> div {
		margin-right: 8px;
	}
`

export const SwiftFormStyled = styled.div`
	.form {
	}
	.form > div:first-child > div:first-child {
		padding-top: 0;
	}
	.status {
		padding: 10px 18px;
		border-radius: 2px;
		background: #1e1e1e;
		color: white;
		margin-bottom: 6px;
		&.error {
			color: #fff;
			background: #de635d;
		}
		&.success {
			color: #fff;
			background: #5ab89e;
		}
		& span {
			font-size: 14px;
			font-weight: 600;
			display: block;
			-webkit-font-smoothing: antialiased;
		}
	}

	.swift-form-element {
		button {
			width: 100%;
		}
	}

	${(props) =>
		props.theme == 'default'
			? `

	`
			: props.theme == 'minimal'
			? `
		display: block;
		width: 100%;
		outline: none;
		border: none;
		/*padding: 10px 16px 11px;*/
		color: inherit;
		border-radius: 4px;
		overflow: hidden;
		font-size: 16px;
		line-height: 29px;

		border: 2px solid #e6e6e6;
		background: #f2f2f2;
		color: #1e1e1e;

		transition: all 0.12s ease-out;
	`
			: ``}
`
