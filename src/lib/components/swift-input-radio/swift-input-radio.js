import React from 'react';
import { SwiftInputRadiosStyled, SwiftInputRadioStyled } from './swift-input-radio-style';
import SwiftLabel from '../swift-label/swift-label';

const SwiftInputRadio = (props) => {
	//console.log("SwiftInputRadio - props", props)
	return (
		<>
			<SwiftInputRadiosStyled>
				{props.label && <SwiftLabel>{props.label}</SwiftLabel>}
				{props.sublabel && <SwiftLabel type="sublabel">{props.sublabel}</SwiftLabel>}
				{props.values.map((elem) => {
					if (!elem.value && elem.name && elem.value !== '') {
						elem.value = elem.name
							.toLowerCase()
							.replace(/  +/g, ' ')
							.replace(/ /g, '-')
							.replace(/[^\w-]+/g, '');
					}

					if (elem.type && elem.type == 'label') {
						return <SwiftLabel style={{ marginTop: '6px' }}>{elem.name}</SwiftLabel>;
					}
					//console.log("radio - value", elem)
					return (
						<SwiftInputRadioStyled key={props.name + '-' + elem.value}>
							<label htmlFor={props.name + '-' + elem.value}>
								<input
									type="radio"
									name={props.name}
									key={props.name}
									disabled={elem.disabled ?? false}
									id={props.name + '-' + elem.value}
									checked={props.value === elem.value ? true : false}
									onChange={(e) => props.onChange(elem.value, e)}
								/>
								{elem.name && <span>{elem.name}</span>}

								{elem.link && (
									<div className="swift_input_radio_label_link">
										{elem.link.onClick ? (
											<a onClick={elem.link.onClick}>
												<span>{elem.link.label || 'View'}</span>
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
													<path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z" />
												</svg>
											</a>
										) : (
											<a target="_blank" href={elem.link.url ? elem.link.url : elem.link}>
												<span>{elem.link.label || 'View'}</span>
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
													<path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z" />
												</svg>
											</a>
										)}
									</div>
								)}
							</label>
						</SwiftInputRadioStyled>
					);
				})}
				{props.error && props.helperText ? <SwiftLabel error>{props.helperText}</SwiftLabel> : null}
			</SwiftInputRadiosStyled>
		</>
	);
};

export default SwiftInputRadio;
