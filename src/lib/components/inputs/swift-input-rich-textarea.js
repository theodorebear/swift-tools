import React, { useState, useEffect, useRef, useMemo, forwardRef } from "react"
import { SwiftInputRichTextareaStyled } from "./swift-input-rich-textarea-style"
import SwiftLabel from "./swift-label"
import classNames from "classnames"
//import SunEditor from "suneditor-react"
//const buttonList = typeof window === "object" ? require("suneditor-react").buttonList : () => false

const SwiftInputRichTextarea = (props) => {
	//const [value, setValue] = useState(props.value)
	const quillRef = useRef(null)

	return (
		<SwiftInputRichTextareaStyled
			error={props.error && props.helperText ? true : false}
			entered={props.value.length > 0 ? true : false}
			height={props.height ?? undefined}
		>
			<SwiftLabel>{props.label}</SwiftLabel>

			rich-textarea not implemented.
			

			{props.error && props.helperText ? <SwiftLabel error>{props.helperText}</SwiftLabel> : null}
		</SwiftInputRichTextareaStyled>
	)
}

export default SwiftInputRichTextarea
