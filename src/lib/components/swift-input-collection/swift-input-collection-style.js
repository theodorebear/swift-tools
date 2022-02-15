import styled from "styled-components"
import { lighten, darken, transparentize, readableColor } from "polished"

export const SwiftInputCollectionStyled = styled.div`
	.swift_input_collection_item_actions {
		> div {
			display: flex;
			align-items: center;
			cursor: pointer;
			svg {
				display: block;
				width: 16px;
				height: 16px;
				opacity: 0.25;
			}
			&:hover {
				svg {
					opacity: 1;
				}
			}
			margin-bottom: 8px;
			&.swift_input_collection_item_reorder {
				svg {
					width: 24px;
					height: 24px;
				}
				margin-bottom: 0;
			}
		}
	}
	.swift_input_collection_items {
		padding: 12px 18px;
		padding-left: 12px;
		border-radius: 4px;
		border: 2px solid ${(props) => readableColor(props.theme.color_body_bg, darken(0.15, props.theme.color_body_bg), lighten(0.15, props.theme.color_body_bg), false)};

		border: 2px solid ${(props) => darken(0.15, "#fff")};

		> div:not(:last-of-type) {
			margin-bottom: 8px;
		}

		.swift_input_collection_item_index {
			padding-top: 2px;
			span {
				font-size: 13px;
				font-weight: 800;
				opacity: 0.4;
				display: block;
				min-width: 14px;
				text-align: center;
			}
		}
	}
`
