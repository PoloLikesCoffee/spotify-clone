import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 79,
		width: '100%',
		backgroundColor: '#131313',
		borderWidth: 2,
		borderColor: 'black',
		flexDirection: 'column',
	},
	progress: {
		height: 3,
		backgroundColor: '#bcbcbc',
	},
	row: {
		flexDirection: 'row',
	},
	image: {
		width: 75,
		height: 75,
		marginRight: 10,
	},
	rightContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	nameContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
		margin: 10,
	},
	artist: {
		color: 'lightgray',
		fontSize: 18,
	},
	iconsContainer: {
		width: 100,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
});

export default styles;
