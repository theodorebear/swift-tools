import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { transparentize, readableColor, darken, lighten } from 'polished';

const SwiftSearchInputStyled = styled.div`
	border: 2px solid
		${(props) =>
			readableColor(
				props.theme.color_body_bg,
				darken(0.15, props.theme.color_body_bg),
				lighten(0.15, props.theme.color_body_bg),
				false
			)};
	background: ${(props) =>
		readableColor(props.theme.color_body_bg, darken(0.05, props.theme.color_body_bg), lighten(0.05, props.theme.color_body_bg), false)};
	color: #1e1e1e;

	border: 2px solid ${(props) => darken(0.15, '#fff')};
	background: #f2f2f2;
	color: #1e1e1e;

	transition: all 0.12s ease-out;
	border-radius: 4px;
	width: 100%;
	form {
		display: flex;
		input {
			flex: 1;
			background: transparent;
			margin: 0;
			padding: 10px 16px 11px;
			border: 0;
			outline: none;
			width: 100%;
			font-size: 16px;
		}
		button {
			background: transparent;
			border: 0;
			margin: 0;
			padding: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			opacity: 0.5;
			padding: 0 6px;
			cursor: pointer;
			svg {
				width: 14px;
				height: 14px;
				display: block;
				path {
					fill: #1e1e1e;
				}
			}
			&:hover {
				opacity: 1;
			}
		}
	}
`;

const SwiftSearchInput = (props) => {
	const { value, onSubmit, timeout, placeholder, autoFocus } = props;

	const innerRef = useRef();
	useEffect(() => {
		if (autoFocus && innerRef) innerRef?.current?.focus();
	}, []);

	const form = useRef(null);
	const initialViewLoad = useRef(true);

	const [val, setVal] = useState(value);
	const [submitTimeout, setSubmitTimeout] = useState(null);

	useEffect(() => {
		if (initialViewLoad.current) {
			initialViewLoad.current = false;
			return;
		}
		clearTimeout(submitTimeout);
		setSubmitTimeout(
			setTimeout(
				(e) => {
					handleSubmit(e);
				},
				val == '' ? 0 : timeout ?? 2000
			)
		);
	}, [val]);

	const handleSubmit = (e) => {
		if (e) e.preventDefault();
		clearTimeout(submitTimeout);
		onSubmit(val);
	};

	const handleChange = (e) => {
		const valNew = e.target.value;
		setVal(valNew);
	};

	return (
		<SwiftSearchInputStyled>
			<form onSubmit={handleSubmit} ref={form}>
				<input
					ref={innerRef}
					type="text"
					name="phrase"
					placeholder={placeholder ? placeholder : 'Search...'}
					value={val}
					onChange={(e) => handleChange(e)}
				/>
				<button type="submit">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
					</svg>
				</button>
			</form>
		</SwiftSearchInputStyled>
	);
};

SwiftSearchInput.defaultProps = {
	autoFocus: false,
};

export default SwiftSearchInput;
