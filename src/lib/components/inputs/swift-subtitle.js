import styled from 'styled-components';

const SwiftSubtitleStyled = styled.div`

	${props => 
		props.theme == "default" ? `
		margin-left: 0px;
		h4 {
			font-size: 16px;
			opacity: 0.85;
			font-weight: 800;
		}
	` : props.theme == "none" ? `
		font-weight:600;
	` : ``}
`;

const SwiftSubtitle = (props) => {
	return (
		<SwiftSubtitleStyled  {...props} className="swift_subtitle">
			<h4>{props.children}</h4>
		</SwiftSubtitleStyled>
	);
};

SwiftSubtitle.defaultProps = {
	theme: "default"
}

export default SwiftSubtitle;
