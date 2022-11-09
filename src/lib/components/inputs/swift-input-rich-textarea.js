import React, { useState, useEffect, useRef, useMemo, forwardRef } from "react"
import { SwiftInputRichTextareaStyled } from "./swift-input-rich-textarea-style"
import SwiftLabel from "./swift-label"
import classNames from "classnames"
import SunEditor from "suneditor-react"
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

			<SunEditor
				defaultValue={props.value}
				setOptions={{
					height: 360,
					imageUploadUrl: "/handlers/website/upload-suneditor",
					buttonList: [
						["undo", "redo"],
						["font", "fontSize", "formatBlock"],
						["bold", "underline", "italic", "strike", "subscript", "superscript"],
						["removeFormat"],
						"/",
						["fontColor", "hiliteColor"],
						["outdent", "indent"],
						["align", "horizontalRule", "list", "table"],
						["link", "image", "video"],
						["fullScreen", "codeView"],
						// "showBlocks",
						//["preview", "print"],
						//["save", "template"],
					], // Or Array of button list, eg. [['font', 'align'], ['image']]
				}}
				onChange={(val) => {
					console.log("rich-textarea SunEditor onChange", val)
					props.onChange(val)
				}}
			/>

			{props.error && props.helperText ? <SwiftLabel error>{props.helperText}</SwiftLabel> : null}
		</SwiftInputRichTextareaStyled>
	)
}

export default SwiftInputRichTextarea
