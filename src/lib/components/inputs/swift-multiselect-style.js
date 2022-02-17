import styled from "styled-components"

export const SwiftMultiSelectStyled = styled.div`
	width: 100%;
	.swift-multiselect-window {
		display: flex;
		padding: 12px 0;

		.swift-multiselect-side {
			flex: 1;
			select {
				display: block;
				width: 100%;
				outline: none;
				background: transparent;
				border-radius: 4px;
				border: 2px solid rgba(0, 0, 0, 0.08);
				transition: all 0.12s ease-out;
				min-height: 240px;
				font-size: 16px;
				option {
					font-size: 13px;
					padding: 6px 10px;
					font-weight: 600;
				}
			}
		}
		.swift-multiselect-center {
			margin: 0 12px;
			padding-top: 24px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			button {
				margin: 6px 0;
				svg {
					path {
					}
				}
				&:last-of-type {
					svg {
						transform: rotate(180deg);
					}
				}
			}
		}
		.swift-multiselect-right {
			margin-left: 12px;
			padding-top: 24px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			button {
				margin: 6px 0;
				svg {
					transform: rotate(-90deg);
					path {
					}
				}
				&:last-of-type {
					svg {
						transform: rotate(90deg);
					}
				}
			}
		}
	}
`
