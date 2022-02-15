import styled from 'styled-components';
import SwiftButton from '../swift-button/swift-button';
import SwiftLabel from '../swift-label/swift-label';

const SwiftMultiButtonStyled = styled.div`
	.swift-input-button-select-wrapper {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		button {
			margin-right: 8px;
			margin-top: 8px;
		}
		.swift-input-button-select-values {
			flex: 1;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
		}
	}
`;

const SwiftMultiButton = (props) => {
	const { values, onChange, selectMax } = props;

	const value = props.value && props.value != '' ? props.value.split(',') : props.value != '' ? [] : null;

	//console.log("swift-button-select.tsx - values", values)

	const handleClick = (val) => {
		if (!val) {
			// clicking on ALL button
			onChange(null);
			return;
		}
		if (!value || !value.length) {
			// first one added
			onChange(val);
			return;
		}
		if (value.includes(val)) {
			// removing this item
			onChange(value.filter((elem) => elem != val).join(','));
		} else {
			// adding item to list
			if (!selectMax || value.length < selectMax) {
				console.log('adding item, under selectMax', selectMax);
				onChange([...value, val].join(','));
			} else {
				// adding item but at selectMax!
				console.log('adding item but at selectMax!');
				onChange([...value.slice(1), val].join(','));
			}
		}
	};

	return (
		<SwiftMultiButtonStyled error={props.error && props.helperText ? true : false} entered={value && value.length > 0 ? true : false}>
			{props.label && <SwiftLabel style={{ marginBottom: '0' }}>{props.label}</SwiftLabel>}
			<div className="swift-input-button-select-wrapper">
				{props.selectAll && (
					<SwiftButton
						type="button"
						color={props.buttonColor}
						size={'small'}
						icon={props.selectAllIcon}
						fillType={!value || !value.length ? props.buttonFillTypeSelected : props.buttonFillType}
						onClick={() => handleClick(null)}
					>
						{props.selectAllLabel}
					</SwiftButton>
				)}
				<div className="swift-input-button-select-values">
					{values.map((elem) => (
						<SwiftButton
							{...elem}
							type="button"
							size={'small'}
							color={props.buttonColor}
							fillType={value && value.includes(elem.value) ? props.buttonFillTypeSelected : props.buttonFillType}
							onClick={() => handleClick(elem.value)}
						>
							{elem.name}
						</SwiftButton>
					))}
				</div>
			</div>
			{props.error && props.helperText ? <SwiftLabel error>{props.helperText}</SwiftLabel> : null}
		</SwiftMultiButtonStyled>
	);
};
SwiftMultiButton.defaultProps = {
	selectMax: null,
	selectAll: true,
	selectAllLabel: 'All',
	selectAllIcon: 'star',
	buttonColor: 'primary',
	buttonFillType: 'light',
	buttonFillTypeSelected: 'filled',
	onChange: () => {},
};
export default SwiftMultiButton;
