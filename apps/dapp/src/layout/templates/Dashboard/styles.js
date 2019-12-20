export default {
	container: {
		bg: 'paper',
		color: 'text',
		minHeight: '100vh',
		overflow: 'hidden',
		flex: 1,
	},
	aside: {
		bg: '#27359e',
		boxShadow: 2,
		color: 'white',
		flex: [3, 3, 4, 3],
		// p: [3, 3, 4, 4],
		zIndex: 1000,
	},
	hr: {
		width: '100%',
		my: 3,
	},
	main: {
		flex: 12,
		overflow: 'auto',
		zIndex: 50,
	},
};
