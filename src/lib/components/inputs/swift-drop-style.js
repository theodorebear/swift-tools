import styled from 'styled-components'
import { transparentize } from 'polished'

/*
 *    "SwiftDrop" Styled Component
 */
export const SwiftDropStyled = styled.div`
	._swift_drop_box {
		width: 200px;
		max-width: 100%;
		min-height: 200px;
		border-width: 2px;
		border-radius: 2px;
		border-style: dashed;
		background-color: #cceffe;
		color: #1794ca;
		border-color: #1794ca;
		outline: none;
		transition: all 0.05s ease-out;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		position: relative;
	}
	${({ is_active }) =>
		is_active &&
		`
    	._swift_drop_box {
	    	/*border-color: #2196f3*/
	    }
    `}

	${({ is_accept }) =>
		is_accept &&
		`
    	._swift_drop_box {
	    	/*border-color: #00e676;*/
			/*background-color: rgb(230, 255, 229);*/

	    }
	    ._swift_drop_box_icon {
			/*color: #00e676;*/
			opacity: 1;
		}
    `}
	
	${({ is_reject }) =>
		is_reject &&
		`
    	._swift_drop_box {
	    	/*border-color: #ff1744;*/
			/*background-color: #ffe7ec;*/
	    }
	    ._swift_drop_box_icon {
			/*color: #ff1744;*/
			opacity: 1;
		}
    `}

    ${({ is_accepted }) =>
		is_accepted &&
		`
    	._swift_drop_box_header {
			align-items: flex-start;
			flex: initial;
		}
    `}

	._swift_drop_box_icon {
		display: block;
		margin-bottom: 8px;
		opacity: 0.4;
	}

	._swift_drop_box_actions {
		position: absolute;
		top: 0;
		right: 0;
		display: flex;
		align-items: center;
		padding: 4px;
		a {
			display: block;
			padding: 4px;
			cursor: pointer;
			svg {
				display: block;
				width: 12px;
				height: 12px;
				opacity: 0.25;
				path {
				}
			}
			&:hover {
				svg {
					opacity: 1;
				}
			}
		}
	}

	._swift_drop_box_header {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		flex-direction: column;
		flex: 1;
		padding: 18px;
		svg {
			display: block;
			width: 32px;
			height: 32px;
			margin-bottom: 8px;
			path {
				fill: #1794ca;
			}
		}
		strong {
			font-size: 15px;
			font-weight: 600;
			margin-bottom: 0;
			display: block;
		}
		small {
			font-size: 12px;
			font-weight: 600;
			opacity: 0.75;
			margin-top: 2px;
			display: block;
		}
	}

	._swift_drop_box_progress {
		padding: 0 18px 18px;
		._swift_drop_box_progress_bar {
			position: relative;
			height: 6px;
			background: hsla(198, 80%, 80%, 1);
			border-radius: 6px;
			overflow: hidden;
			._swift_drop_box_progress_bar_progress {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background: #1794ca;
			}
		}
	}

	._swift_drop_box_list {
		margin-top: 6px;
		padding: 0;
		list-style-type: none;
		padding: 18px;
		padding-top: 0;
		margin: 0;
		li {
			padding: 0;
			list-style-type: none;
			display: flex;
			align-items: center;
			margin-top: 6px;
			._swift_drop_box_list_item_icon {
				margin-right: 6px;
			}
			&.uploading ._swift_drop_box_list_item_icon {
				-moz-animation: blink normal 1.5s infinite ease-in-out; /* Firefox */
				-webkit-animation: blink normal 1.5s infinite ease-in-out; /* Webkit */
				-ms-animation: blink normal 1.5s infinite ease-in-out; /* IE */
				animation: blink normal 1.5s infinite ease-in-out; /* Opera */
			}
			._swift_drop_box_list_item_text {
				flex: 1;
				max-width: 100%;
				/*max-width: calc(100% - 32px);*/
				._swift_drop_box_list_item_text_title {
					/*margin-bottom: 6px;*/
					display: flex;
				}
				._swift_drop_box_list_item_text_title_content {
					min-width: 0;
					overflow: hidden;
					text-overflow: ellipsis;
					flex: 1;
					max-width: 112px;
					span {
						line-height: 12px;
						font-size: 12px;
						font-weight: 500;
						flex: 1;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						display: block;
					}
				}
				small {
					line-height: 12px;
					font-size: 12px;
					font-weight: 700;
				}
				._swift_drop_box_list_item_text_bar {
					position: relative;
					height: 6px;
					background: hsla(198, 80%, 80%, 1);
					border-radius: 6px;
					overflow: hidden;
					._swift_drop_box_list_item_text_bar_progress {
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						background: #1794ca;
					}
				}
			}
		}
	}

	@keyframes blink {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
		100% {
			opacity: 1;
		}
	}
`
