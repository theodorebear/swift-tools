import styled, { keyframes } from 'styled-components';

const dotPulse = keyframes`
	0% {
		transform: scale(0);
		opacity: 0;
	}
	25% {
		transform: scale(0);
		opacity: 0.1;
	}
	50% {
		transform: scale(0.1);
		opacity: 0.3;
	}
	75% {
		transform: scale(0.5);
		opacity: 0.5;
	}
	100% {
		transform: scale(1);
		opacity: 0;
	}
`;
const IndicatorSimpleStyled = styled.div`
	display: flex;
	align-items: center;
	.indicator_simple_dot {
		position: relative;
		margin-right: 8px;
		width: 12px;
		height: 12px;
		.pulse {
			width: 12px;
			height: 12px;
			border: 6px solid ${(props) => props.color};
			border-radius: 50%;
			z-index: 10;
			position: absolute;
		}

		.dot {
			border: 10px solid ${(props) => props.color};
			background: transparent;
			border-radius: 50%;
			height: 30px;
			width: 30px;
			animation: ${dotPulse} 3s ease-out;
			animation-iteration-count: infinite;
			position: absolute;
			top: 50%;
			left: 50%;
			margin-left: -15px;
			margin-top: -15px;
			z-index: 1;
			opacity: 0;
		}
	}
	span {
		display: block;
		font-size: 16px;
		font-weight: 600;
		opacity: 0.75;
		-webkit-font-smoothing: antialiased;
	}
`;

const IndicatorSimple = (props) => {
	var color = '#24cc29';
	if (props.color == 'red') {
		color = 'red';
	} else if (props.color == 'gray') {
		color = '#666666';
	} else {
		color = props.color;
	}
	return (
		<IndicatorSimpleStyled color={color} className={props.className} style={props.style ?? undefined}>
			<div className="indicator_simple_dot">
				<div className="dot"></div>
				<div className="pulse"></div>
			</div>
			{props.name && props.name.length > 0 && <span>{props.name}</span>}
		</IndicatorSimpleStyled>
	);
};
IndicatorSimple.defaultProps = {
	color: 'gray',
	name: null,
	className: null,
};
export default IndicatorSimple;
