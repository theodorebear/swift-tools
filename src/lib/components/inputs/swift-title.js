import styled from 'styled-components';

const SwiftTitleStyled = styled.div`

	${props => 
		props.theme == "default" ? `
		margin-left: 0px;
		h3 {
			font-size: 18px;
			font-weight: 800;
		}
	` : props.theme == "none" ? `
		h3 {
			font-weight:600;
		}
	` : ``}
`;

const SwiftTitle = (props) => {
	const {theme} = props
	return (
		<SwiftTitleStyled {...props}  className="swift_title">
			<h3>{props.children}</h3>
		</SwiftTitleStyled>
	);
};

SwiftTitle.defaultProps = {
	theme: "default"
}

export default SwiftTitle;
