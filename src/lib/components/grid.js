export const Grid = (props) => {
	console.log('grid,props', props)
	return <div style={{ marginBottom: '8px' }}>{props.children}</div>
}
export const GridItem = (props) => {
	return <div style={{ marginBottom: '8px' }}>{props.children}</div>
}
export const Box = (props) => {
	console.log('grid,props', props)
	return <div style={{ marginBottom: '8px' }}>{props.children}</div>
}
export const Flex = (props) => {
	return <div style={{ marginBottom: '8px' }}>{props.children}</div>
}
