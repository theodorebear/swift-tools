import styled from 'styled-components';
import { lighten, darken, transparentize, readableColor } from 'polished';

export const SwiftInputTextStyled = styled.div`
	

	${props => props.theme == "default" ? `

	display: block;
	width: 100%;

	.swift_input_text_input_element {
		position: relative;
		height: 54px;

		.swift_input_text_input_icon {
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
			display: flex;
			align-items: center;
			padding: 0 16px;
			pointer-events: none;
			z-index: 2;
			svg {
				display: block;
				width: 26px;
				height: 26px;
			}
			~ input {
				padding-left: 50px;
			}
		}
		input {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}
	}
	input,
	.swift_input_text_input_search_selection_veneer {
		display: block;
		width: 100%;
		outline: none;
		border: none;
		padding: 10px 16px 11px;
		color: inherit;
		border-radius: 4px;
		overflow: hidden;
		font-size: 16px;
		line-height: 29px;

		border: 2px solid #e6e6e6;
		background: #f2f2f2;
		color: #1e1e1e;

		transition: all 0.12s ease-out;
	}

	.swift_input_text_label {
		display: flex;
		align-items: center;
		label {
			flex: 1;
		}

		.swift_input_text_label_link {
			a {
				display: flex;
				align-items: center;
				padding: 4px;
				span {
					display: block;
					margin-right: 4px;
					font-size: 12px;
					font-weight: 700;
				}
				svg {
					display: block;
					width: 8px;
					height: 8px;

					transition: transform 0.15s ease-out;
				}
				&:hover {
					svg {
						transform: translateX(4px);
					}
				}
			}
		}
	}

	.swift_input_text_input {
		position: relative;
		.swift_input_text_input_search_results {
			display: none;
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			z-index: 5;

			color: #1e1e1e;

			border: 2px solid #e6e6e6;
			background: #f2f2f2;
			color: #1e1e1e;

			max-height: 320px;
			overflow-y: auto;

			ul {
				li {
					padding: 8px 16px;
					font-size: 13px;
					font-weight: 600;
					cursor: pointer;
					&:hover {
						background: ${darken(0.1, '#fff')};
					}
				}
			}
			.swift_input_text_input_search_results_loading {
				padding: 18px;
				display: flex;
				justify-content: stretch;
				> span {
					width: 100%;
				}
			}
		}

		.swift_input_text_input_search_selection_veneer {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 2;
			pointer-events: none;
			display: flex;
			align-items: center;
		}

		.swift_input_text_submit_button {
			position: absolute;
			top: 50%;
			right: 4px;
			transform: translateY(-50%);
			z-index: 2;
			> a {
				padding: 8px 16px;
			}
		}
	}

	&:hover input,
	input:focus,
	&:hover input ~ .swift_input_text_input_search_selection_veneer {
		color: #1e1e1e;

		background: ${darken(0.1, '#fff')};
		color: #1e1e1e;

		${(props.searchResults || props.searchResultsLoading) ?
			`
			border-bottom-left-radius:0;
			border-bottom-right-radius:0;
			~ .swift_input_text_input_search_results {
				display:block;
			}
		` : ``}
	}

	input:focus {
		~ .swift_input_text_input_search_selection_veneer {
			display: none;
		}
	}
	${props.error ?
		`
		input {
    		background: #fde0e0;
    		border-color: #d44747;
    	}
	` : ``}


	` : props.theme == "minimal" ? `
		display: block;
	width: 100%;

	.swift_input_text_input_element {
		position: relative;
		height: 54px;
		overflow: hidden; /* shouldnt have to hide overflow, but with inline / minimal card with error background, red covers other fields/ button */

		.swift_input_text_input_icon {
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
			display: flex;
			align-items: center;
			padding: 0 16px;
			pointer-events: none;
			z-index: 2;
			svg {
				display: block;
				width: 26px;
				height: 26px;
			}
			~ input {
				padding-left: 50px;
			}
		}
		input {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}
	}
	input,
	.swift_input_text_input_search_selection_veneer {
		display: block;
		width: 100%;
		outline: none;
		padding: 10px 16px 11px;
		color: inherit;
		overflow: hidden;
		font-size: 16px;
		background:none;
		line-height: 29px;
		transition: all 0.12s ease-out;
	}

	.swift_input_text_label, label {
		display: none;	
	}
	${props.error ?
		`
		input {
    		background: #fde0e0;
    		border-color: #d44747;
    	}
	` : ``}
	` : props.theme == 'none' ? `	

		.swift_input_text_input_element {
			position:relative;
			.swift_input_text_input_icon {
				position: absolute;
				left: 0;
				top: 0;
				bottom: 0;
				display: flex;
				align-items: center;
				padding: 0 16px;
				pointer-events: none;
				z-index: 2;
				svg {
					display: block;
					width: 26px;
					height: 26px;
				}
				~ input {
					padding-left: 50px;
				}
			}
			input {
				width:100%;
				outline:none;
				padding:12px 18px;
				border:1px solid #000;
			}
		}
	` : ``}
`;
