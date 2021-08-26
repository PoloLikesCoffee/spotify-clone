import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		padding: 20,
	},
	image: {
		width: 200,
		height: 200,
		margin: 15,
	},
	name: {
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold',
	},
	creatorContainer: {
		flexDirection: 'row',
		margin: 10,
	},
	creator: {
		color: 'lightgray',
		fontSize: 20,
		margin: 5,
	},
	likes: {
		color: 'lightgray',
		fontSize: 20,
		margin: 5,
	},
	button: {
		width: 175,
		height: 60,
		backgroundColor: '#1CD05D',
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
	},
});

export default styles;
