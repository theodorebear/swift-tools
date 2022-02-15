import React, { useState, useEffect } from 'react';
import SwiftLabel from '../swift-label/swift-label';
import { SwiftMultiSelectStyled } from './swift-multiselect-style';
import SwiftButton from '../swift-button/swift-button';
import classNames from 'classnames';

Array.prototype.immutableMove = function (old_index, new_index) {
	var copy = Object.assign([], this);
	if (new_index >= copy.length) {
		var k = new_index - copy.length;
		while (k-- + 1) {
			copy.push(undefined);
		}
	}
	copy.splice(new_index, 0, copy.splice(old_index, 1)[0]);
	return copy;
};

const SwiftMultiSelect = (props) => {
	const { values, labelAvailable, label, error, onChange } = props;

	const [valuesAvailable, setValuesAvailable] = useState(
		values.filter((val) => {
			return !props.value.includes(val.val);
		})
	);
	const [valuesAvailableSelected, setValuesAvailableSelected] = useState([]);

	const [value, setValue] = useState(
		values
			.filter((val) => {
				return props.value.includes(val.val);
			})
			.sort((a, b) => (props.value.indexOf(a.val) > props.value.indexOf(b.val) ? 1 : -1))
	);
	const [valueSelected, setValueSelected] = useState([]);

	useEffect(() => {
		onChange(value.map((e) => e.val));
	}, [value]);

	const handleRightChange = (e) => {
		let value = Array.from(e.target.selectedOptions, (option) => option.value);
		setValueSelected(value);
		setValuesAvailableSelected([]);
	};

	const handleAvailableChange = (e) => {
		let value = Array.from(e.target.selectedOptions, (option) => option.value);
		setValuesAvailableSelected(value);
		setValueSelected([]);
	};

	const handleAvailableButtonClick = (e) => {
		e.preventDefault();
		e.stopPropagation();

		var newValuesAvailable = [
			...valuesAvailable,
			...values.filter((val) => {
				return valueSelected.includes(val.val);
			}),
		];
		setValuesAvailable(newValuesAvailable);

		var newValue = value.filter((val) => {
			return !valueSelected.includes(val.val);
		});
		setValue(newValue);

		//setValuesAvailable()
		setValuesAvailableSelected([...valuesAvailableSelected, ...valueSelected]);
		setValueSelected([]);
	};
	const handleRightButtonClick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		var newValue = [
			...value,
			...values.filter((val) => {
				return valuesAvailableSelected.includes(val.val);
			}),
		];
		setValue(newValue);

		var newValuesAvailable = valuesAvailable.filter((val) => {
			return !valuesAvailableSelected.includes(val.val);
		});
		setValuesAvailable(newValuesAvailable);

		//setValue()
		setValueSelected([...valueSelected, ...valuesAvailableSelected]);
		setValuesAvailableSelected([]);
	};

	const handleUpButtonClick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		const index = value.findIndex((val) => {
			return val.val == valueSelected[0];
		});
		//console.log("i", index)
		//console.log(value)
		//console.log(value.immutableMove(index, index - 1))
		setValue(value.immutableMove(index, index - 1));
	};
	const handleDownButtonClick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		const index = value.findIndex((val) => {
			return val.val == valueSelected[0];
		});
		setValue(value.immutableMove(index, index + 1));
	};

	return (
		<SwiftMultiSelectStyled error={error && props.helperText ? true : false}>
			<div className="swift-multiselect-window">
				<div className="swift-multiselect-side">
					<SwiftLabel>{labelAvailable}</SwiftLabel>
					<select multiple onChange={handleAvailableChange} value={valuesAvailableSelected}>
						{valuesAvailable.map((val, i) => (
							<option value={val['val']} key={'swift-multiselect-' + labelAvailable + i}>
								{val['label']}
							</option>
						))}
					</select>
				</div>
				<div className="swift-multiselect-center">
					<SwiftButton disabled={!valuesAvailableSelected.length} onClick={handleRightButtonClick}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
						</svg>
					</SwiftButton>
					<SwiftButton disabled={!valueSelected.length} onClick={handleAvailableButtonClick}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
						</svg>
					</SwiftButton>
				</div>
				<div className="swift-multiselect-side">
					<SwiftLabel>{label}</SwiftLabel>
					<select multiple onChange={handleRightChange} value={valueSelected}>
						{value.map((val, i) => (
							<option value={val['val']} key={'swift-multiselect-' + label + i}>
								{val['label']}
							</option>
						))}
					</select>
				</div>
				<div className="swift-multiselect-right">
					<SwiftButton
						disabled={valueSelected.length != 1 || value.length == 1 || valueSelected[0] == value[0]}
						onClick={handleUpButtonClick}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
						</svg>
					</SwiftButton>
					<SwiftButton
						disabled={valueSelected.length != 1 || value.length == 1 || valueSelected[0] == value[value.length - 1]}
						onClick={handleDownButtonClick}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
						</svg>
					</SwiftButton>
				</div>
			</div>
		</SwiftMultiSelectStyled>
	);
};

export default SwiftMultiSelect;
