import React from "react"
import { SwiftLabelStyled } from "./swift-label-style"
import classNames from "classnames"

const SwiftLabel = (props) => {
	return (
		<SwiftLabelStyled {...props}>
			{props.children}
		</SwiftLabelStyled>
	)
}

SwiftLabel.defaultProps = {
	theme: 'default',
}
export default SwiftLabel
