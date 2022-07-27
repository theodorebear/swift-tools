import SwiftIcon from '../icons/swift-icon'
import styled from 'styled-components'
import React, { useRef, useEffect, useState, useContext } from 'react'
import { SwiftLinkContext } from '../providers'

const SwiftInputTooltipStyled = styled.div`
	position: relative;
	> i {
		cursor: pointer;
		opacity: 0.5;
		transition: opacity 0.15s ease-out;
		svg {
			width: 15px;
			height: 15px;
		}
		&:hover {
			opacity: 1;
		}
	}

	.swift_input_tooltip_drop {
		position: absolute;
		top: calc(100% + 8px);
		right: 0;
		z-index: 10;
		background: #f6f6f6;
		min-width: 240px;
		box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25);
		strong {
			display: block;
			padding: 6px 12px;
			background: #1b6191;
			color: white;
		}
		p {
			padding: 18px 12px;
			display: block;
		}
		.swift_input_tooltip_drop_link {
			a {
				background: #f0f0f0;
				padding: 6px 12px;
				color: #1b6191;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 12px;
				font-weight: 700;
				text-transform: uppercase;
				span {
					margin-right: 6px;
				}
				svg {
					fill: #1b6191;
					width: 13px;
					height: 13px;
					display: block;
				}
				&:hover {
					background: #1b6191;
					color: white;
					svg {
						fill: white;
					}
				}
			}
		}
		&:after {
			content: '';
			display: block;
			position: absolute;
			bottom: 100%;
			right: 1px;
			border-right: 7px solid transparent;
			border-left: 7px solid transparent;
			border-bottom: 6px solid #1b6191;
		}
	}
`
const SwiftInputTooltip = (props) => {
	const { name, content, active, link } = props

	const CustomLink = useContext(SwiftLinkContext)
	return (
		<SwiftInputTooltipStyled onClick={props.onClick}>
			<SwiftIcon i="info" />
			{active && (
				<div className="swift_input_tooltip_drop">
					<strong>{name}</strong>
					<p>{content}</p>
					{link && (
						<div className="swift_input_tooltip_drop_link">
							{CustomLink ? (
								<CustomLink href={link.path} to={link.path}>
									<span>{link.text}</span>
									<SwiftIcon i="next" />
								</CustomLink>
							) : (
								<a href={link.path}>
									<span>{link.text}</span>
									<SwiftIcon i="next" />
								</a>
							)}
						</div>
					)}
				</div>
			)}
		</SwiftInputTooltipStyled>
	)
}

export default SwiftInputTooltip
